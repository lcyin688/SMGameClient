//文件助手·对文件/文件夹的方法封装

var fs = require("fs");
var readLine = require("readline");
var path = require("path");
var crypto = require('crypto');
var child_process = require("child_process");
var textHelper = require('./textHelper');

var fileHelper = {
    /**
     * 按行读取文件内容
     * @param fileName 文件名路径
     * @param callback 回调函数
     * @return 字符串数组
     */
    readFileToArr: function (fileName, callback) {
        let arr = [];
        let readObj = readLine.createInterface({
            input: fs.createReadStream(fileName)
        });
        readObj.on('line', function (line) {
            arr.push(line);
        });
        readObj.on('close', function () {
            callback(arr);
        });
    },

    /**
     * 拆分路径中为文件夹名称:用户传入的分隔符不可控,可能/\混用
     * @param dir 路径
     * @return 路径文件夹
     */
    getPathFolders: function (dir) {
        let flag = '/';
        let winDir = dir.replace(/\\/g, '/');
        let folders = winDir.split(flag);
        return folders;
    },

    /** 文件名是否有中文 */
    checkHasZHWord: function (curPath) {
        let nameOnly = path.basename(curPath);
        let hasTWord = textHelper.isDoubleWord(nameOnly);
        return hasTWord;
    },

    /**
     * 通过文件路径创建文件夹
     * @param dir 文件路径
     * @return 无
     */
    mkdirByPath: function (dir) {
        let folders = this.getPathFolders(dir);
        let subDir = '';
        //非windows系统最前方加/
        if (process.platform != 'win32') {
            subDir += '/';
        }
        for (let one of folders) {
            subDir += (one + path.sep);
            if (!fs.existsSync(subDir)) {
                fs.mkdirSync(subDir);
            }
        }
    },

    /**
     * 删除文件夹
     * @param dir 文件路径
     * @return 无
     */
    deleteDirectory: function (dir) {
        let files = [];
        if (fs.existsSync(dir)) {
            files = fs.readdirSync(dir);
            for (let file of files) {
                const curPath = path.join(dir, file);
                if (fs.statSync(curPath).isDirectory()) {
                    this.deleteDirectory(curPath);
                } else {
                    fs.unlinkSync(curPath);
                }
            }
            fs.rmdirSync(dir);
        } else {
            console.log("路径不存在:", dir);
        }
    },

    /**
     * 同步拷贝文件
     * @param from 源文件名
     * @param to 目标文件名
     * @return 无
     */
    copyFileSync: function (from, to) {
        let toPath = path.dirname(to);
        this.mkdirByPath(toPath);
        fs.copyFileSync(from, to, 0)
    },

    /**
     * 异步拷贝文件
     * @param from 源文件名
     * @param to 目标文件名
     * @return 无
     */
    copyFileAsync: function (from, to, endCb) {
        fs.readFile(from, (err, data) => {
            if (err) {
                endCb && endCb(`${from} read failed! reason: ${err.toString()}`);
            } else {
                let toPath = path.dirname(to);
                this.mkdirByPath(toPath);
                fs.writeFile(to, data, err => {
                    if (err) {
                        endCb && endCb(`${to} write failed! reason: ${err.toString()}`);
                    } else {
                        console.log(`copyFileAsync success: ${from} ==> ${to}`);
                        endCb && endCb()
                    }
                })
            }
        })
    },

    /** 压缩并同步资源 */
    zipPngAndSync: function (prjRoot, artFile, cccFile) {
        let extrName = path.extname(artFile);

        let cmd = `${prjRoot}tools/bin/libs/pngquanti/pngquanti --speed 3 ${artFile}`;
        child_process.execSync(cmd)

        let fullName = path.basename(artFile);
        let nameOnly = fullName.replace(extrName, '');
        let artPath = artFile.replace(fullName, '');
        let zipFile = `${nameOnly}-fs8${extrName}`;
        let zipFull = artPath + zipFile;

        this.copyFileSync(zipFull, cccFile);
        fs.unlinkSync(zipFull);
    },

    /** 拷贝美术资源 */
    copyArtFileSync: function (prjRoot, src, dst, needZip, artMd5) {
        if (needZip) {
            let extrName = path.extname(src);
            if (extrName == '.png') {
                let newMd5 = this.getFileMD5(src);
                if (artMd5 && artMd5.hasOwnProperty(src)) {
                    let oriMd5 = artMd5[src];
                    if (oriMd5 != newMd5) {
                        this.zipPngAndSync(prjRoot, src, dst);
                        artMd5[src] = newMd5;
                    } else {
                        console.log('file no change:', src);
                    }
                } else {
                    this.zipPngAndSync(prjRoot, src, dst);
                    artMd5[src] = newMd5;
                }
            } else {
                fileHelper.copyFileSync(src, dst);
            }
        } else {
            fileHelper.copyFileSync(src, dst);
        }
    },

    /**
     * 同步拷贝文件夹
     * @param from 源路径
     * @param to 目标路径
     * @return 无
     */
    copyDirectorySync: function (from, to) {
        const fromPath = path.resolve(from)
        const toPath = path.resolve(to)
        console.log(`copy dir: ${fromPath} ==> ${toPath}`);

        let paths = fs.readdirSync(fromPath);
        for (let item of paths) {
            const newFromPath = fromPath + path.sep + item
            const newToPath = path.resolve(toPath + path.sep + item);
            let stat = fs.statSync(newFromPath);
            if (stat) {
                if (stat.isFile()) {
                    this.copyFileSync(newFromPath, newToPath)
                }
                if (stat.isDirectory()) {
                    this.mkdirByPath(newToPath);
                    this.copyDirectorySync(newFromPath, newToPath)
                }
            }
        }
    },

    /**
     * 异步拷贝文件夹
     * @param from 源路径
     * @param to 目标路径
     * @return 无
     */
    copyDirectoryAsync: function (from, to) {
        const fromPath = path.resolve(from)
        const toPath = path.resolve(to)

        fs.readdir(fromPath, (err, paths) => {
            if (err) {
                console.log(err)
                return
            }
            paths.forEach((item) => {
                const newFromPath = fromPath + path.sep + item
                const newToPath = path.resolve(toPath + path.sep + item);
                fs.stat(newFromPath, (err, stat) => {
                    if (err) return
                    if (stat.isFile()) {
                        this.copyFileSync(newFromPath, newToPath)
                    }
                    if (stat.isDirectory()) {
                        this.mkdirByPath(newToPath);
                        this.copyDirectoryAsync(newFromPath, newToPath)
                    }
                })
            })
        })
    },

    /**
     * 同步重命名文件
     * @param src 源文件名(全路径)
     * @param dst 目标文件名(全路径)     
     * @return 无
     */
    reNameFileSync: function (src, dst) {
        let dirN = path.dirname(dst);
        this.mkdirByPath(dirN);
        fs.renameSync(src, dst);
    },

    /**
     * 异步重命名文件
     * @param src 源文件名(全路径)
     * @param dst 目标文件名(全路径)     
     * @param endCb 文件有效性判定回调
     * @return 无
     */
    reNameFileAsync: function (src, dst, endCb) {
        let dirN = path.dirname(dst);
        this.mkdirByPath(dirN);
        fs.rename(src, dst, (err) => {
            if (err) {
                console.log(`remove failed: ${scr} :`, err);
            }
            endCb && endCb();
        });
    },

    /**
     * 遍历目录获得指定类型的文件列表
     * @param dir 目标路径
     * @param judgeCb 文件有效性判定回调
     * @return 无
     */
    scanFiles: function (dir, judgeCb) {
        let all = [];
        let files = fs.readdirSync(dir);
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            let file_path = path.join(dir, file);
            let stat = fs.lstatSync(file_path);
            if (stat.isDirectory()) {
                let sub = this.scanFiles(file_path, judgeCb);
                all = all.concat(sub);
            } else {
                let isValid = true;
                if (judgeCb) {
                    isValid = judgeCb(file_path);
                }
                if (isValid) {
                    all.push(file_path);
                }
            }
        }
        return all;
    },

    /**
     * 保存文件
     * @param file 文件全称(路径+文件名)
     * @param data 文件数据
     * @return 无
     */
    saveFile: function (file, data) {
        let filePath = path.dirname(file);
        this.mkdirByPath(filePath);
        fs.writeFileSync(file, data, { flag: 'a+' });
    },

    /**
     * 获取目录下,包含part字符的文件夹名称
     * @param dir 目标路径(路径+文件名)
     * @param part 包含字符
     * @return 无
     */
    getFolderNameByPart: function (dir, part) {
        let matched = [];
        let paths = fs.readdirSync(dir);
        for (let one of paths) {
            let pathTemp = dir + '/' + one;
            let stat = fs.statSync(pathTemp);
            if (stat && stat.isDirectory() && one.indexOf(part) >= 0) {
                matched.push(one);
            }
        }
        return matched;
    },

    /** 获得文件的MD5 */
    getFileMD5: function (file) {
        // 同步读取文件内容  
        const data = fs.readFileSync(file);

        // 创建一个 MD5 哈希对象  
        const hash = crypto.createHash('md5');

        // 更新哈希对象  
        hash.update(data);

        // 计算并返回 MD5 哈希值  
        return hash.digest('hex');
    }

}

module.exports = fileHelper;