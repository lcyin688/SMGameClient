/** 同步多语言资源 */

var path = require("path");
var fs = require("fs");
const fileHelper = require("./helper/fileHelper");


var syncMLGRes = {
    /** 项目根目录 */
    prjRoot: '',
    /** 多语言资源路径 */
    mulResPath: '../../../../x1_art/繁体翻译/',
    /** 多语言资源标志 */
    mulLGFlag: 'tw',
    /** 多语言列表：eg. ['tw', 'us'] */
    lgList: [],
    /** 美术资源md5 */
    artMd5: {},
    /** 多语言目录前缀 */
    lgDirPart: 'language_',
    /** 资源类型 */
    resExts: ['.png', '.jpg', '.mp3', '.fnt', '.mp4'],

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

    /** 统计文件 */
    countFilesFromDir: function (dir) {
        let files = fileHelper.scanFiles(dir, (curPath) => {
            let ext = path.extname(curPath).toLocaleLowerCase();
            let find = this.resExts.indexOf(ext);
            result = find >= 0 ? true : false;
            return result;
        })
        return files;
    },

    /** 获得工程中资源路径 */
    getName2Path: function (pathRoot) {
        let toName = {};
        let findRet = fileHelper.scanFiles(pathRoot, (curPath) => {
            let valid = false;
            let hasTWord = fileHelper.checkHasZHWord(curPath);
            if (hasTWord || curPath.indexOf(this.lgDirPart) >= 0) {
                valid = false;
            } else {
                let ext = path.extname(curPath);
                let find = this.resExts.indexOf(ext);
                if (find >= 0) {
                    valid = true;
                }
            }
            return valid;
        })
        for (let one of findRet) {
            let nameOnly = path.basename(one);
            if (toName.hasOwnProperty(nameOnly)) {
                toName[nameOnly].push(one);
            } else {
                toName[nameOnly] = [one];
            }
        }
        return toName;
    },

    loadArtMD5: function () {
        let file = this.prjRoot + 'tools/bin/artMd5.txt';
        let dataTxt = fs.readFileSync(file, 'utf8');
        try {
            this.artMd5 = JSON.parse(dataTxt) || {};
        } catch (error) {
            this.artMd5 = {};
        }
    },

    saveArtMD5: function () {
        let file = this.prjRoot + 'tools/bin/artMd5.txt';
        fs.writeFileSync(file, JSON.stringify(this.artMd5));
    },

    /** 构建统计数据 */
    doWork: function (dir) {
        //
        this.prjRoot = dir || 'D:/1_work/X1/x1_client/';

        let dirIdx = this.prjRoot.lastIndexOf('\\');
        if (dirIdx == this.prjRoot.length - 1) {
            dirIdx = this.prjRoot.substring(0, this.prjRoot.length - 1).lastIndexOf('\\');
        }
        let rootDir = this.prjRoot.substring(0, dirIdx + 1);
        this.mulResPath = rootDir + 'x1_art/繁体翻译/';

        this.initLGList();
        if (this.lgList.indexOf(this.mulLGFlag) < 0) {
            console.log('dont find language:', this.mulLGFlag);
            return;
        }

        this.loadArtMD5();

        let mulFiles = this.getName2Path(this.mulResPath);
        let cccDir = this.prjRoot + 'assets/';
        let cccFiles = this.getName2Path(cccDir);

        let dontInCCC = [];
        let inCCHasMu = {};
        let syncSucces = [];

        for (let keyM in mulFiles) {
            let one = mulFiles[keyM][0];
            let nameOnly = path.basename(one);
            let inCC = cccFiles[nameOnly];
            if (inCC) {
                if (inCC.length > 1) {
                    inCCHasMu[nameOnly] = inCC;
                } else {
                    console.log('\nsync file: ', one);

                    let assetsIdx = inCC[0].indexOf('assets');
                    let pathToAsset = inCC[0].substring(assetsIdx + 7);
                    let pathToLg = inCC[0].substring(0, assetsIdx + 7) + 'language_' + this.mulLGFlag + '\\' + pathToAsset;
                    fileHelper.copyArtFileSync(this.prjRoot, one, pathToLg, true, this.artMd5);
                    syncSucces.push(one);
                }
            } else {
                dontInCCC.push(one);
            }
        }

        this.saveArtMD5();

        console.log('sync success:', syncSucces.length);
        if (dontInCCC.length > 0) {
            for (let one of dontInCCC) {
                console.log('dont find in ccc:', one);
            }
        }
        if (Object.keys(inCCHasMu).length > 0) {
            for (let key in inCCHasMu) {
                console.log("  " + key + ':');
                for (let one of inCCHasMu[key]) {
                    console.log('   ', one);
                }
            }
        }
    }
}

if (process.argv.length > 2) {
    let dir = process.argv[2]
    syncMLGRes.doWork(dir);
} else {
    let pos = __dirname.indexOf('tools');
    let prjPath = __dirname.substring(0, pos);
    syncMLGRes.doWork(prjPath);
}