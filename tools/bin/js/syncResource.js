var path = require("path");
var fs = require("fs");
var fileHelper = require('./helper/fileHelper');
var textHelper = require('./helper/textHelper');
var genCardAtlas = require('./genHeroImgAtlas');
const genSceneAtlas = require("./genSceneAtlas");


var syncResource = {
    /** 工程目录 */
    prjRoot: '',
    /** zip结果 */
    zipRet: '',
    /** 美术资源md5 */
    artMd5: {},
    /** 路径设置 */
    pathSet: {
        /** 角色 */
        actor: {
            art: 'x1_art/spine/角色/',
            ccc: 'assets/mainPack/spine/actor/',
        },
        /** 角色立绘 */
        actCard: {
            art: 'x1_art/spine/角色立绘/',
            ccc: 'assets/mainPack/spine/card/',
        },
        /** 角色特效 */
        actEfx: {
            art: 'x1_art/spine/角色特效/',
            ccc: 'assets/mainPack/spine/actorEffect/',
        },
        /** 神兽角色 */
        beastSpine: {
            art: 'x1_art/spine/神兽/',
            ccc: 'assets/mainPack/spine/actor/',
        },
        /** 小怪 */
        monSpine: {
            art: 'x1_art/spine/小怪/',
            ccc: 'assets/mainPack/spine/actor/',
        },
        /** 神兽立绘 */
        beastCard: {
            art: 'x1_art/ui/s_神兽/神兽小立绘/',
            ccc: 'assets/mainPack/image/icons/beastFull/',
        },
        /** buff特效 */
        buffEfx: {
            art: 'x1_art/spine/buff特效/',
            ccc: 'assets/mainPack/spine/actorEffect/',
        },
        /** ui特效 */
        uiEfx: {
            art: 'x1_art/spine/UI特效/',
            ccc: 'assets/mainPack/spine/ui/',
        },
        /** ui元素 */
        uiAll: {
            art: ['x1_art/ui/'],
            ccc: ['assets/mainPack/image/ui/', 'assets/actPack/image/ui/', 'assets/entrance/image'],
        },
        /** 背景音乐 */
        music: {
            art: 'x1_plan/游戏BGM/',
            ccc: 'assets/resources/audio/music/',
        },
        /** 音效 */
        effect: {
            art: 'x1_plan/临时音效/临时音效配置资源mp3/',
            ccc: 'assets/resources/audio/effect/',
        },
        /** 音效 */
        uiEft: {
            art: 'x1_plan/临时音效/UI临时音效/',
            ccc: 'assets/resources/audio/effect/',
        },
        /** 道具图标 */
        iconProp: {
            art: 'x1_plan/正式资源/正式图标/',
            ccc: 'assets/mainPack/image/icons/iconProp/',
        },
        /** 核心图标 */
        iconTrea: {
            art: 'x1_plan/临时图标/核心/',
            ccc: 'assets/mainPack/image/icons/iconProp/',
        },
        /** 货币图标 */
        iconCCY: {
            art: 'x1_plan/临时图标/货币/',
            ccc: 'assets/mainPack/image/icons/iconProp/',
        },
        /** 装备图标 */
        iconEquip: {
            art: 'x1_plan/临时图标/装备/',
            ccc: 'assets/mainPack/image/icons/iconProp/',
        },
        /** 静态立绘 */
        iconCard: {
            art: 'x1_plan/临时图标/立绘/',
            ccc: 'assets/mainPack/image/icons/heroFull/',
        },
        /** buff图标 */
        iconBuff: {
            art: 'x1_plan/正式资源/正式buff图标/',
            ccc: 'assets/mainPack/image/icons/iconBuff/',
        },
        /** 英雄头像图标 */
        iconHead: {
            art: 'x1_plan/临时图标/头像/',
            ccc: 'assets/mainPack/image/icons/iconHead/',
        },
        /** 玩家头像图标 */
        playerHead: {
            art: 'x1_art/ui/t_图标/头像图标/圆形/',
            ccc: 'assets/mainPack/image/icons/playerHead/',
        },
        /** 技能图标 */
        iconSkill: {
            art: 'x1_plan/正式资源/正式技能图标/',
            ccc: 'assets/mainPack/image/icons/iconSkill/',
        },
        /** 神器图标 */
        iconArtifact: {
            art: 'x1_plan/正式资源/正式神器图标/',
            ccc: 'assets/mainPack/image/icons/iconArtifact/',
        },
        /** 神兽头像图标 */
        iconDbeast: {
            art: 'x1_plan/正式资源/正式神兽头像图标/',
            ccc: 'assets/mainPack/image/icons/iconBeast/',
        },
        /** 战斗场景 */
        batScene: {
            art: 'x1_plan/正式资源/正式场景/',
            ccc: 'assets/mainPack/image/ui/batScene/',
        },
        /** 公会技能图标 */
        guildSkill: {
            art: 'x1_plan/正式资源/公会技能图标/',
            ccc: 'assets/mainPack/image/icons/iconSkill/',
        },
        /** 神兽技能图标 */
        beastSkill: {
            art: 'x1_plan/正式资源/神兽技能图标/',
            ccc: 'assets/mainPack/image/icons/iconSkill/',
        },
        /** 特权图标 */
        iconPrivilege: {
            art: 'x1_plan/正式资源/正式专属特权图标/',
            ccc: 'assets/mainPack/image/icons/iconProp/',
        },
        /** 玩家称号道具 */
        playerTitleProp: {
            art: 'x1_art/ui/d_道具图标/称号道具/',
            ccc: 'assets/mainPack/image/icons/iconProp/',
        },
        /** 玩家称号图标 */
        playerTitleIcon: {
            art: 'x1_art/ui/c_称号/',
            ccc: 'assets/mainPack/image/icons/iconTitle/',
        },
    },

    /** 项目所在目录 */
    getPrjOutPath: function () {
        let find = this.prjRoot.indexOf('x1_client');
        let outPath = this.prjRoot.substring(0, find);
        return outPath;
    },

    getWinPath: function (file) {
        let tmp = file.replace(/\\/g, '/');
        return tmp;
    },

    copyFileSyncEx: function (src, dst) {
        const needZip = true;
        if (needZip) {
            let extrName = path.extname(src);
            if (extrName == '.png') {
                let excludeFolder = ['角色立绘', '角色\\', '小怪\\'];
                let needExclue = false;
                for (let one of excludeFolder) {
                    if (src.indexOf(one) >= 0) {
                        needExclue = true;
                        break;
                    }
                }
                if (needExclue) {
                    fileHelper.copyFileSync(src, dst);
                } else {
                    let newMd5 = fileHelper.getFileMD5(src);
                    if (this.artMd5.hasOwnProperty(src)) {
                        let oriMd5 = this.artMd5[src];
                        if (oriMd5 != newMd5) {
                            fileHelper.zipPngAndSync(this.prjRoot, src, dst);
                            this.artMd5[src] = newMd5;
                        } else {
                            console.log('file no change:', src);
                        }
                    } else {
                        fileHelper.zipPngAndSync(this.prjRoot, src, dst);
                        this.artMd5[src] = newMd5;
                    }
                }
            } else {
                fileHelper.copyFileSync(src, dst);
            }
        } else {
            fileHelper.copyFileSync(src, dst);
        }
    },

    /** 通用同步 */
    syncResByKey: function (key, typeName) {
        let cfg = this.pathSet[key];
        let outPath = this.getPrjOutPath();
        let artPath = outPath + cfg.art;
        let inArt = fileHelper.scanFiles(artPath, (curPath) => {
            let hasTWord = fileHelper.checkHasZHWord(curPath);
            let excludeExt = ['.bat'];
            let isExclude = excludeExt.indexOf(path.extname(curPath)) >= 0;
            let isImage = path.extname(curPath) == '.png' || path.extname(curPath) == '.jpg';
            return !hasTWord && !isExclude;
        })

        let srcPath = outPath + cfg.art;
        let dstPath = this.prjRoot + cfg.ccc;
        for (let i = 0; i < inArt.length; i++) {
            let one = inArt[i];
            let fileTmp = this.getWinPath(one);
            let pathTmp = this.getWinPath(srcPath);
            let dstFile = fileTmp.replace(pathTmp, dstPath);
            this.copyFileSyncEx(one, dstFile);
            console.log(`sync ${typeName}:[${i + 1}/${inArt.length}]`, one);
        }
        console.log(`sync ${typeName}: complete`);
    },

    /** 同步角色spine */
    syncActorSpine: function () {
        this.syncResByKey('actor', 'actor spine');
    },

    /** 同步角色特效spine */
    syncActorEffectSpine: function () {
        let key = 'actEfx';
        let cfg = this.pathSet[key];
        let outPath = this.getPrjOutPath();
        let artPath = outPath + cfg.art;
        let inArt = fileHelper.scanFiles(artPath, (curPath) => {
            let hasTWord = fileHelper.checkHasZHWord(curPath);
            return !hasTWord;
        })
        for (let i = 0; i < inArt.length; i++) {
            let one = inArt[i];
            let nameOnly = path.basename(one);
            let folders = fileHelper.getPathFolders(one);
            let dstFile = this.prjRoot + cfg.ccc + folders[folders.length - 2] + '/' + nameOnly;
            this.copyFileSyncEx(one, dstFile);
            console.log(`sync actorEffect spine:[${i + 1}/${inArt.length}]`, one);
        }
        console.log('sync actor actorEffect: complete');
    },

    /** 同步UI特效spine */
    syncUIEffectSpine: function () {
        this.syncResByKey('uiEfx', 'uiEfx spine')
    },

    getName2Path: function (pathRoot, arrPath) {
        let toName = {};
        for (let one of arrPath) {
            let dstPath = pathRoot + one;
            let findRet = fileHelper.scanFiles(dstPath, (curPath) => {
                let valid = false;
                let hasTWord = fileHelper.checkHasZHWord(curPath);
                if (hasTWord) {
                    valid = false;
                } else {
                    let ext = path.extname(curPath);
                    if (ext == '.png' || ext == '.jpg') {
                        valid = true;
                    }
                    if (valid) {
                        //过滤掉图标资源
                        let excludeFolder = ['l_临时用图', 'd_道具图标', 's_数字', 't_图标', 'z_桌面图标'];
                        for (let exc of excludeFolder) {
                            if (curPath.indexOf(exc) >= 0) {
                                valid = false;
                                break;
                            }
                        }
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
        }
        return toName;
    },

    saveUILog: function (inArt, inCCC) {
        let tabs = [];
        for (let key in inArt) {
            tabs.push({ name: key, art: inArt[key], ccc: inCCC[key] || [] });
        }
        for (let keyC in inCCC) {
            if (inArt.hasOwnProperty(keyC)) {
                continue;
            }
            tabs.push({ name: keyC, art: [], ccc: inCCC[keyC] || [] });
        }

        let descFile = `${this.prjRoot}/uiResCmpr.json`;
        fs.writeFileSync(descFile, JSON.stringify(tabs));
        return tabs;
    },

    /** 统计UI资源差异 */
    checkUIImage: function () {
        let key = 'uiAll';
        let cfg = this.pathSet[key];
        let outPath = this.getPrjOutPath();
        let inArt = this.getName2Path(outPath, cfg.art);
        let inCCC = this.getName2Path(this.prjRoot, cfg.ccc);
        let inArtScene = this.getName2Path(outPath, ['x1_art/scene/']);

        let tabs = [];
        for (let key in inArt) {
            tabs.push({ name: key, art: inArt[key], ccc: inCCC[key] || [] });
        }
        for (let keyC in inCCC) {
            if (inArt.hasOwnProperty(keyC)) {
                continue;
            }
            if (inArtScene.hasOwnProperty(keyC)) {
                tabs.push({ name: keyC, art: inArtScene[keyC], ccc: inCCC[keyC] || [] });
            } else {
                tabs.push({ name: keyC, art: [], ccc: inCCC[keyC] || [] });
            }
        }

        let arrInArtOnly = [];
        let arrInCccOnly = [];
        let arrArt2Ccc11 = [];
        let arrArt2Cccnn = [];
        for (let one of tabs) {
            if (one.art.length == 1 && one.ccc.length == 1) {
                arrArt2Ccc11.push(one);
            } else if (one.art.length == 0) {
                arrInCccOnly.push(one);
            } else if (one.ccc.length == 0) {
                arrInArtOnly.push(one);
            } else {
                arrArt2Cccnn.push(one);
            }
        }

        let logInArtOnly = `只存在于美术目录下{${arrInArtOnly.length}}：\n`;
        for (let one of arrInArtOnly) {
            for (let i = 0, cnt = one.art.length; i < cnt; i++) {
                logInArtOnly += `     [${i}]:${one.art[i]}\n`;
            }
            logInArtOnly += `     -------\n`;
        }
        let logInCccOney = `只存在于工程目录下{${arrInCccOnly.length}}：\n`;
        for (let one of arrInCccOnly) {
            for (let i = 0, cnt = one.ccc.length; i < cnt; i++) {
                logInCccOney += `     [${i}]:${one.ccc[i]}\n`;
            }
            logInArtOnly += `     -------\n`;
        }
        let logArt2Ccc11 = `美术目录和工程目录一一对应{${arrArt2Ccc11.length}}：\n`;
        for (let one of arrArt2Ccc11) {
            logArt2Ccc11 += `     ${one.name}\n`;
        }
        let logArt2Cccnn = `美术目录和工程目录多对多{${arrArt2Cccnn.length}}：\n`;
        for (let one of arrArt2Cccnn) {
            for (let i = 0, cnt = one.art.length; i < cnt; i++) {
                logArt2Cccnn += `     [${i}]:${one.art[i]}\n`;
            }
            for (let i = 0, cnt = one.ccc.length; i < cnt; i++) {
                logArt2Cccnn += `     [${i}]:${one.ccc[i]}\n`;
            }
            logArt2Cccnn += `     -------\n`;
        }
        console.log(logArt2Ccc11);
        console.log(logInCccOney);
        console.log(logInArtOnly);
        console.log(logArt2Cccnn);

        //let descFile = `${this.prjRoot}/uiResCmpr.json`;
        //fs.writeFileSync(descFile, JSON.stringify(tabs));

        //同步并压缩
        for (let one of arrArt2Ccc11) {
            this.copyFileSyncEx(one.art[0], one.ccc[0]);
        }
    },

    syncAll: function () {
        //客户端文件夹
        let subFolder = __dirname.split("\\");
        let clientFolder = 'x1_client';
        for (let one of subFolder) {
            if (one.indexOf('x1_client') >= 0) {
                clientFolder = one;
                break;
            }
        }
        //
        let pos = this.prjRoot.indexOf('x1_client');
        let prjPath = this.prjRoot.substring(0, pos);

        let keys = Object.keys(this.pathSet);
        for (let key of keys) {
            let set = this.pathSet[key];
            if (set.art.length <= 0) {
                continue;
            }
            switch (key) {
                case 'actor':
                case 'actCard':
                case 'uiEfx':
                case 'effect':
                case 'uiEft':
                case 'buffEfx':
                case 'music':
                case 'iconProp':
                case 'iconPrivilege':
                //case 'iconCCY':
                //case 'iconEquip':
                case 'iconBuff':
                case 'iconHead':
                case 'playerHead':
                case 'iconSkill':
                case 'beastSkill':
                case 'guildSkill':
                case 'iconArtifact':
                case 'iconDbeast':
                case 'beastSpine':
                case 'monSpine':
                case 'beastCard':
                case 'playerTitleProp':
                case 'playerTitleIcon':
                    this.syncResByKey(key, `${key} file`);
                    break;
                case 'iconCard':
                    this.syncResByKey(key, `${key} file`);
                    genCardAtlas.doWork(prjPath + 'x1_plan/配置_master', clientFolder);
                    break;
                case 'batScene':
                    this.syncResByKey(key, `${key} file`);
                    genSceneAtlas.doWork(prjPath + 'x1_plan/配置_master', clientFolder);
                    break;
                case 'actEfx':
                    this.syncActorEffectSpine();
                    break;
                case 'uiAll':
                    break;
            }
        }
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

    doWork: function (dir) {
        this.prjRoot = dir || 'D:/1_work/X1/x1_client/';

        this.loadArtMD5();
        this.syncAll();
        this.checkUIImage();

        this.saveArtMD5();
    },
}
if (process.argv.length > 2) {
    let dir = process.argv[2]
    syncResource.doWork(dir);
} else {
    let pos = __dirname.indexOf('tools');
    let prjPath = __dirname.substring(0, pos);
    syncResource.doWork(prjPath);

    //syncResource.prjRoot = 'D:/1_work/X1/x1_client/';
    //syncResource.zipPngAndSync('c://test.png', 'c://11//test.png')
}