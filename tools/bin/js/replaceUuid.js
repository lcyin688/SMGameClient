var path = require("path");
var fs = require("fs");
const fileHelper = require("./helper/fileHelper");
const cccUuid = require("./helper/cccUuid");
const uuidv4 = require('uuid').v4;

var replaceUuid = {
    /** 资源根目录 */
    assetsRoot: '',
    /** 后缀名 */
    arrFileExt: ['anim', 'mp3', 'mp4', 'atlas', 'skel', 'json', 'png', 'jpg', 'js', 'ts', 'plist', 'labelatlas', 'effect', 'mtl', 'prefab', 'fnt', 'ttf'],
    /** 文件map */
    mapToFileExt: new Map(),
    /** 正在使用uuid */
    arrUsedUuid: [],
    /** 所有meta文件 */
    allMetaFiles: [],

    /** 索引所有文件 */
    scaleAllFile: function () {
        let files = fileHelper.scanFiles(this.assetsRoot, (curPath) => {
            let extname = path.extname(curPath).toLocaleLowerCase().substring(1);
            if (this.arrFileExt.indexOf(extname) >= 0) {
                let list = this.mapToFileExt.get(extname);
                if (list) {
                    list.push(curPath);
                } else {
                    this.mapToFileExt.set(extname, [curPath]);
                }
                return true;
            } else {
                if (extname == 'meta') {
                    this.allMetaFiles.push(curPath);
                }
                return false;
            }
        })
        this.mapToFileExt.set('meta', this.allMetaFiles);
        console.log('扫描完成，共扫描到' + files.length + '个资源文件', this.allMetaFiles.length, '个meta文件');
    },

    /** 初始化正在使用的uuid */
    initUsedUuidArray: function () {
        this.arrUsedUuid = [];
        let addToArray = (uuid) => {
            if (uuid.length <= 0) {
                return;
            }
            if (this.arrUsedUuid.indexOf(uuid) < 0) {
                this.arrUsedUuid.push(uuid);
            }
        }
        for (let one of this.allMetaFiles) {
            const content = fs.readFileSync(one, 'utf8');
            try {
                let metaData = JSON.parse(content);
                if (!metaData) {
                    continue;
                }
                //通用meta
                if (metaData.uuid) {
                    addToArray(metaData.uuid);
                }
                //atlas plist
                if (metaData.rawTextureUuid) {
                    addToArray(metaData.rawTextureUuid);
                }
                //png
                if (metaData.subMetas) {
                    for (let key in metaData.subMetas) {
                        let subMeta = metaData.subMetas[key];
                        if (subMeta.uuid) {
                            addToArray(subMeta.uuid);
                        }
                    }
                }
            } catch (error) {

            }
        }
        console.log('正在使用uuid：' + this.arrUsedUuid.length + '个');
    },

    /** 创建一个新的uuid */
    createNewUuid: function () {
        let uuid = uuidv4();
        while (true) {
            if (this.arrUsedUuid.indexOf(uuid) >= 0) {
                uuid = uuidv4();
            } else {
                break;
            }
        }
        return uuid;
    },

    /** 替换一个文件 */
    replaceOneFile: function (filePath, ext, endCb) {
        switch (ext) {
            case 'anim':
            case 'mp3':
            case 'mp4':
            case 'atlas':
            case 'skel':
            case 'json':
            case 'effect':
            case 'mtl':
            case 'prefab':
            case 'fnt':
            case 'ttf':
            case 'labelatlas':
                this.replaceAnimaMeta(filePath, endCb);
                break;
            case 'png':
            case 'jpg':
                this.replacePngJpgMeta(filePath, endCb);
                break;
            case 'js':
            case 'ts':
                this.replaceCodeMeta(filePath, endCb);
                break;
            case 'plist':
                //plist不单独处理，在处理png时顺带处理
                break;
            default:
                break;
        }
    },


    /** 动画资源 */
    replaceAnimaMeta: function (file, endCb) {
        this.replaceOnlyUuidMeta(file, endCb, ['prefab'], false);
    },

    /** 脚本资源 */
    replaceCodeMeta: function (file, endCb) {
        this.replaceOnlyUuidMeta(file, endCb, ['prefab'], true);
    },

    /** 图片类型：普通，spine, 图集，fnt字体, labelatlas */
    replacePngJpgMeta: function (file, endCb) {
        let skelFile = file.replace('.png', '.skel');
        let jsonFile = file.replace('.png', '.json');
        if (fs.existsSync(skelFile) || fs.existsSync(jsonFile)) {
            //spine
            this.replaceSpineImageAbout(file, endCb);
        } else {
            let plist = file.replace('.png', '.plist');
            if (fs.existsSync(plist)) {
                //图集
                this.replaceAtlasImageAbout(file, endCb);
            } else {
                //其他
                this.replaceNormalImageAbourt(file, endCb);
            }
        }
    },

    /** 普通图片 */
    replaceNormalImageAbourt: function (file, endCb) {
        let imageMeta = file + '.meta';
        const content = fs.readFileSync(imgMeta, 'utf8');
        const contObj = JSON.parse(content);

        let arrUuidObj_id = [{ old: contObj.uuid, new: this.createNewUuid(), encode: false }];
        if (contObj.subMetas) {
            for (let key in contObj.subMetas) {
                let subMeta = contObj.subMetas[key];
                if (subMeta.uuid) {
                    arrUuidObj_id.push({ old: subMeta.uuid, new: this.createNewUuid(), encode: false });
                }
            }
        }
        //meta本身文件
        this.replaceFileContent(imageMeta, arrUuidObj_id, () => {
            this.replaceFilesByExt(arrUuidObj_id, ['prefab', 'meta'], endCb);
        })
    },

    /** 替换:图集图片 */
    replaceAtlasImageAbout: function (file, endCb) {
        let plistFile = file.replace('.png', '.plist');
        let imgMeta = file + '.meta';
        const content = fs.readFileSync(imgMeta, 'utf8');
        const contObj = JSON.parse(content);
        let arrUuidObj_id = [{ old: contObj.uuid, new: this.createNewUuid(), encode: false }];
        //meta本身文件
        this.replaceFileContent(imgMeta, arrUuidObj_id, () => {
            //其关联plist.meta文件
            let plistFileMeta = plistFile + '.meta';
            this.replaceFileContent(plistFileMeta, arrSubMeta_id, () => {
                //处理其对应plist
                this.replacePlistFileMeta(plistFile, () => {
                    endCb && endCb();
                })
            })
        })
    },

    /** 替换:spine图片 */
    replaceSpineImageAbout: function (file, endCb) {
        let skelFile = file.replace('.png', '.skel');
        let jsonFile = file.replace('.png', '.json');
        let spineFile = fs.existsSync(skelFile) ? skelFile : jsonFile;

        let nameOnly = path.basename(file, '.png');

        let imgMeta = file + '.meta';
        const content = fs.readFileSync(imgMeta, 'utf8');
        const contObj = JSON.parse(content);
        let arrUuidObj_id = [{ old: contObj.uuid, new: this.createNewUuid(), encode: false }];
        let arrSubMeta_id = [];
        if (contObj.subMetas && contObj.subMetas[nameOnly]) {
            arrSubMeta_id.push({
                old: contObj.subMetas[nameOnly].uuid,
                new: this.createNewUuid(),
                encode: false
            })
        }

        //meta本身文件
        this.replaceFileContent(imgMeta, arrUuidObj_id, () => {
            //其关联spine文件
            this.replaceFileContent(spineFile, arrSubMeta_id, () => {
                if (arrSubMeta_id.length > 0) {
                    this.replaceFilesByExt(arrSubMeta_id, ['prefab'], endCb);
                } else {
                    endCb && endCb();
                }
            })
        })
    },

    /** 替换plist文件 */
    replacePlistFileMeta: function (file, endCb) {
        let plistMeta = file + '.meta';
        const content = fs.readFileSync(imgMeta, 'utf8');
        const contObj = JSON.parse(content);

        let arrUuidObj_id = [{ old: contObj.uuid, new: this.createNewUuid(), encode: false }];
        if (contObj.subMetas) {
            for (let key in contObj.subMetas) {
                let subMeta = contObj.subMetas[key];
                if (subMeta.uuid) {
                    arrUuidObj_id.push({ old: subMeta.uuid, new: this.createNewUuid(), encode: false });
                }
            }
        }
        //meta本身文件
        this.replaceFileContent(plistMeta, arrUuidObj_id, () => {
            this.replaceFilesByExt(arrUuidObj_id, ['prefab'], endCb);
        })
    },

    /** 替换文件内容 */
    replaceFilesByExt: function (arrUuidObj, arrExt, endCb) {
        let dstFiles = [];
        for (let one of arrExt) {
            let arr = this.mapToFileExt.get(one);
            if (arr) {
                dstFiles = dstFiles.concat(arr);
            }
        }
        let idx = 0;
        let onOneComplete = () => {
            idx++;
            if (idx >= dstFiles.length) {
                endCb && endCb();
                return;
            }
            let onePrefab = dstFiles[idx];
            this.replaceFileContent(onePrefab, arrUuidObj, onOneComplete);
        }
        if (dstFiles.length > 0) {
            this.replaceFileContent(dstFiles[0], arrUuidObj, onOneComplete);
        } else {
            endCb && endCb();
        }
    },



    /** 替换简易uuid通用文件meta: anima只会被perfab引用 */
    replaceOnlyUuidMeta: function (file, endCb, arrExt, needEncode) {
        let metaFile = file + '.meta';
        const content = fs.readFileSync(metaFile, 'utf8');
        const contObj = JSON.parse(content);

        let newUuid = this.createNewUuid();
        let arrUuidObj = [{ old: contObj.uuid, new: newUuid, encode: needEncode }];
        //保存uuid到meta
        this.replaceFileContent(metaFile, arrUuidObj, () => {
            this.replaceFilesByExt(arrUuidObj, arrExt, endCb);
        });
    },

    /** 替换一种后缀名 */
    replaceOneExt: function (ext, endCb) {
        let allFile = this.mapToFileExt.get(ext);
        if (!allFile) {
            endCb && endCb();
            return;
        }
        console.log("");
        console.log('开始替换[' + ext + ']文件:', allFile.length);
        let fileIdx = 0;
        let onOneComplete = () => {
            fileIdx++;
            if (fileIdx >= allFile.length) {
                endCb && endCb();
                return;
            }
            let oneFile = allFile[fileIdx];
            console.log(`[${ext}][${fileIdx + 1}/${allFile.length}]: ${oneFile}`);
            this.replaceOneFile(oneFile, ext, onOneComplete);
        }
        if (allFile.length > 0) {
            console.log(`[${ext}][${fileIdx + 1}/${allFile.length}]: ${allFile[0]}`);
            this.replaceOneFile(allFile[0], ext, onOneComplete);
        } else {
            endCb && endCb();
        }
    },

    /** 开始替换 */
    startReplaceWork: function () {
        //打印统计信息
        this.mapToFileExt.forEach((value, key) => {
            console.log(`[${key}]: ${value.length}`);
        });
        let extIdx = 0;
        let extCompleteOnce = () => {
            extIdx++;
            if (extIdx >= this.arrFileExt.length) {
                console.log('替换完成');
                return;
            }
            let ext = this.arrFileExt[extIdx];
            this.replaceOneExt(ext, extCompleteOnce);
        }
        if (this.arrFileExt.length > 0) {
            this.replaceOneExt(this.arrFileExt[0], extCompleteOnce);
        } else {
            console.log('无匹配的文件类型');
        }
    },

    /** 替换uuid */
    replaceFileContent: function (file, arrUuidObj, endCb) {
        const txtCtt = fs.readFileSync(file, 'utf8');
        let needReplace = false;
        for (let one of arrUuidObj) {
            let oldUuid = one.old;
            if (one.encode) {
                oldUuid = cccUuid.encodeUuid(one.old);
            }
            if (txtCtt.indexOf(oldUuid) >= 0) {
                needReplace = true;
                break;
            }
        }
        if (!needReplace) {
            endCb && endCb();
            return;
        }
        fileHelper.readFileToArr(file, (arr) => {
            let newContent = ""
            for (let i = 0; i < arr.length; i++) {
                for (let one of arrUuidObj) {
                    let oldUuid = one.old;
                    let newUuid = one.new;
                    if (one.encode) {
                        oldUuid = cccUuid.encodeUuid(one.old);
                        newUuid = cccUuid.encodeUuid(one.new);
                    }
                    if (arr[i].indexOf(oldUuid) >= 0) {
                        arr[i] = arr[i].replace(oldUuid, newUuid);
                    }
                }
                newContent += arr[i];
                if (i < arr.length - 1) {
                    newContent += "\n";
                }
            }
            fs.writeFileSync(file, newContent);
            endCb && endCb();
        })
    },


    /** 构建统计数据 */
    doWork: function (dir) {
        //
        this.assetsRoot = dir;
        this.scaleAllFile();
        this.initUsedUuidArray();
        this.startReplaceWork();
    }
}

if (process.argv.length > 2) {
    let dir = process.argv[2]
    replaceUuid.doWork(dir);
} else {
    //let pos = __dirname.indexOf('tools');
    //let prjPath = __dirname.substring(0, pos);
    let prjPath = 'D:\\1_work\\P1\\ldlh_client\\assets'
    replaceUuid.doWork(prjPath);
}