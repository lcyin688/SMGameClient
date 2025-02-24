var fs = require("fs");
var sync_conf = {
    /** 客户端目录 */
    clientDir: '',
    toolDir: '',


    parseStrToSize: function (str) {
        let values = str.split('|');
        if (values.length >= 2) {
            return { w: values[0], h: values[1] };
        } else {
            return null;
        }
    },
    createFile(folderPath) {
        // 检查文件夹是否存在
        if (!fs.existsSync(folderPath)) {
            // 如果文件夹不存在，则创建它
            fs.mkdirSync(folderPath, { recursive: true }, (err) => {
                if (err) {
                    console.error(`创建文件夹失败: ${err}`);
                } else {
                    console.log('文件夹创建成功！');
                }
            });
        } else {
            // console.log('文件夹已存在。');
        }
    },

    checkFileExists(filePath) {
        try {
            fs.accessSync(filePath, fs.constants.F_OK);
            return true; // 文件存在
        } catch (error) {
            return false; // 文件不存在
        }
    },

    getFileToString(filePath) {
        if (this.checkFileExists(filePath)) {
            let dataTxt = fs.readFileSync(filePath, 'utf8');
            return dataTxt;
        } else {
            console.log('文件不存在');
            return null;
        }
    },


    initPlanDir(clientFolder, toolFolder) {
        this.clientDir = clientFolder;
        this.toolDir = toolFolder;
        this.createFile(this.clientFolder + "/assets/resources/proto")
    },
    async doWork() {
        this.copyGameProto()
        let urlSource = `${this.toolDir}/client`;
        let urlTarget = `${this.clientDir}/assets/resources/proto`;
        await this.getFilesInDirectory(urlSource, urlTarget)

    },

    async getFilesInDirectory(sourcePath, targetPath) {
        try {
            const files = fs.readdirSync(sourcePath);
            // 输出文件列表
            console.log('目录中的文件：');
            files.forEach(async file => {
                // console.log("getFilesInDirectory 001", file);
                if (file.indexOf("gameproto.d") < 0) {
                    let sourceFilePath = sourcePath + '/' + file;
                    let targetFilePath = targetPath + '/' + file;
                    // console.log("getFilesInDirectory 002", sourceFilePath);
                    // console.log("getFilesInDirectory 003", targetFilePath);
                    await this.copyFile(sourceFilePath, targetFilePath)
                }
            });
        } catch (error) {
            console.error('读取目录失败:', error);
        }
    },


    async copyFile(sourcePath, targetPath) {
        if (!this.checkFileExists(sourcePath)) {
            console.log("copyExcelSheetWithImages 文件没有 ", sourcePath)
            return
        }
        // console.log("copyFile 001   sourcePath  ", sourcePath)
        fs.readFile(sourcePath, 'utf8', (err, data) => {
            if (err) {
                // 如果发生错误，输出错误信息
                console.error('读取文件时出错:', err);
                return;
            }
            // console.log('文件内容:', data);
            fs.writeFile(targetPath, data, 'utf8', (err, data) => {
                if (err) {
                    // 如果发生错误，输出错误信息
                    console.error('写入文件时出错 targetPath:', err);
                    return;
                }
            })
        });
    },


    async copyGameProto() {
        let urlTool = `${this.toolDir}/client/gameproto.d.ts`;
        let urlClient = `${this.clientDir}/gameproto.d.ts`;
        await this.copyFile(urlTool, urlClient)
    },




}


if (process.argv.length >= 3) {
    let branch = process.argv[2];
    let subFolder = __dirname.split("\\");
    let prjPath = '';
    let clientFolder = 'x1_client';
    // for (let one of subFolder) {
    //     if (one.indexOf('x1_client') >= 0) {
    //         clientFolder = one;
    //         break;
    //     }
    //     prjPath += one + '\\';
    // }
    // let path = prjPath + 'x1_plan\\配置_' + branch
    // genCreateAllLan.initPlanDir(path, prjPath + clientFolder)
    // genCreateAllLan.doWorkAllLan(path, lan)
    // console.log("生成完成!!!")
} else {
    let subFolder = __dirname.split("\\");
    let prjPath = '';
    let clientFolder = 'SMGameClient';
    let toolFolder = 'SMProtoTool';
    for (let one of subFolder) {
        if (one.indexOf('SMGameClient') >= 0) {
            clientFolder = one;
            break;
        }
        prjPath += one + '\\';
    }
    sync_conf.initPlanDir(prjPath + clientFolder, prjPath + toolFolder)
    //创建一个LanALl 多语言表 包含所有翻译资源
    sync_conf.doWork()
    console.log("生成完成")
}

module.exports = sync_conf;