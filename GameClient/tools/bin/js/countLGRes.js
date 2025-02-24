var path = require("path");
var fs = require("fs");
const fileHelper = require("./helper/fileHelper");


var countLGRes = {
    /** 项目根目录 */
    prjRoot: '',

    /** 多语言列表：eg. ['jp', 'us'] */
    lgList: [],

    /** 文件列表: {'jp':['mainPack/image/ui/xx/xxx', 'mainPack/image/ui/yy/yyy']} */
    filesToLg: null,

    lgDirPart: 'language_',

    /** 多语言目录 */
    lgPath: '../../../assets/language_',

    /** 初始化需统计语言列表 */
    initLGList: function () {
        let file = this.prjRoot + 'assets/c2f-framework/gameCfg.json';
        let dataTxt = fs.readFileSync(file, 'utf8');
        let cfgObj = null;
        try {
            cfgObj = JSON.parse(dataTxt);
        } catch (error) {
            console.warn(`failed to parse config data`);
        }
        if (cfgObj) {
            let all = cfgObj.language.type;
            for (let one of all) {
                if (one != 'cn') {
                    this.lgList.push(one);
                }
            }
        }
    },

    /** 统计多语言文件 */
    countFiles: function () {
        if (this.lgList.length <= 0) {
            return;
        }
        this.filesToLg = {};
        const resExts = ['.png', '.jpg', '.mp3', '.fnt', '.mp4'];
        for (let one of this.lgList) {
            let lgRoot = this.lgPath + one;
            let files = fileHelper.scanFiles(lgRoot, (curPath) => {
                let ext = path.extname(curPath).toLocaleLowerCase();
                let find = resExts.indexOf(ext);
                result = find >= 0 ? true : false;
                return result;
            })
            this.filesToLg[one] = files;
        }
    },

    /** 获得文件的uuid */
    getUuidByFile: function (file) {
        let metaFile = file + '.meta';
        try {
            var dataTxt = fs.readFileSync(metaFile, 'utf8');
            var data = JSON.parse(dataTxt);
            return data ? data.uuid : null;
        } catch (e) {
            return null;
        }
    },

    /** 构建统计数据 */
    doWork: function (dir) {
        //
        this.prjRoot = dir || 'D:/1_work/X1/x1_client/';
        this.lgPath = this.prjRoot + 'assets/language_';

        this.initLGList();
        this.countFiles();
        if (!this.filesToLg) {
            return;
        }

        let result = {};
        for (let key in this.filesToLg) {
            const files = this.filesToLg[key];
            for (let one of files) {
                let lgDir = this.lgDirPart + key;
                let findPos = one.indexOf(lgDir);
                let palcPath = one.substring(findPos + lgDir.length);
                let fileToCn = this.prjRoot + 'assets' + palcPath;
                if (fs.existsSync(fileToCn)) {
                    let uuid = this.getUuidByFile(fileToCn);
                    result[uuid] = result[uuid] || {};
                    result[uuid][key] = this.getUuidByFile(one);
                } else {
                    console.log('dont find in cn path:', one);
                }
            }
        }
        fs.writeFileSync(this.prjRoot + 'assets/resources/statistic/languageRes.json', JSON.stringify(result));
    }
}

if (process.argv.length > 2) {
    let dir = process.argv[2]
    countLGRes.doWork(dir);
} else {
    let pos = __dirname.indexOf('tools');
    let prjPath = __dirname.substring(0, pos);
    countLGRes.doWork(prjPath);
}