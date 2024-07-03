var fs = require("fs");
var xlsx = require('node-xlsx')
//npm install node-xlsx

var genCardAtlas = {
    /** 策划目录 */
    planDir: '',
    /** 输出目录 */
    outDir: '',

    parseStrToRect: function (str) {
        let values = str.split('|');
        if (values.length >= 4) {
            return { x: values[0], y: values[1], w: values[2], h: values[3] };
        } else {
            return null;
        }
    },

    parseStrToSize: function (str) {
        let values = str.split('|');
        if (values.length >= 2) {
            return { w: values[0], h: values[1] };
        } else {
            return null;
        }
    },

    getExcelData: function () {
        let file = `${this.planDir}/excels/model模型.xlsx`;

        let targetSheet = null;
        let excelObj = xlsx.parse(file);
        for (let one of excelObj) {
            if (one.name == '立绘裁剪') {
                targetSheet = one;
                break;
            }
        }
        if (!targetSheet) {
            console.log(`dont find the sheet, named as 立绘裁剪!`);
            return;
        }
        let allCfg = {};
        let keys = targetSheet.data[1];
        for (let line = 2; line < targetSheet.data.length; line++) {
            let objHero = {};
            let heroKey = ''
            for (let i = 1; i < keys.length; i++) {
                let keyName = keys[i];
                if (keyName == 'name') {
                    heroKey = targetSheet.data[line][i]
                } else if (keyName == 'size') {
                    objHero[keyName] = this.parseStrToSize(targetSheet.data[line][i]);
                } else {
                    objHero[keyName] = this.parseStrToRect(targetSheet.data[line][i]);
                }
            }
            objHero['full'] = { x: 0, y: 0, w: objHero['size'].w, h: objHero['size'].h };

            allCfg[heroKey] = objHero;
        }
        return allCfg;
    },

    genOneSmallAtlas: function (file, type, rect) {
        let temp = `
            <key>${file}_${type}.png</key>
            <dict>
                <key>frame</key>
                <string>{{${rect.x},${rect.y}},{${rect.w},${rect.h}}}</string>
                <key>offset</key>
                <string>{0,0}</string>
                <key>rotated</key>
                <false/>
                <key>sourceColorRect</key>
                <string>{{0,0},{${rect.w},${rect.h}}}</string>
                <key>sourceSize</key>
                <string>{${rect.w},${rect.h}}</string>
            </dict>`
        return temp;
    },

    genOneImage: function (file, rectObj) {
        let plistBegin = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
    <dict>
        <key>frames</key>
        <dict>`;
        let plistEnd = `
        </dict>
        <key>metadata</key>
        <dict>
            <key>format</key>
            <integer>2</integer>
            <key>realTextureFileName</key>
            <string>${file}.png</string>
            <key>size</key>
            <string>{${rectObj.size.w},${rectObj.size.h}}</string>
            <key>smartupdate</key>
            <string>$TexturePacker:SmartUpdate:6084afc501cdf0dee50bf54aa5136ffd$</string>
            <key>textureFileName</key>
            <string>${file}.png</string>
        </dict>
    </dict>
</plist>`

        let allSub = '';
        for (let key in rectObj) {
            if (key == 'size') {
                continue;
            }
            let oneSub = this.genOneSmallAtlas(file, key, rectObj[key]);
            allSub += oneSub;
        }

        let content = plistBegin + allSub + plistEnd;
        let descFile = `${this.outDir}/${file}.plist`;
        fs.writeFileSync(descFile, content);
    },

    doWork: function (dir, clientFolder) {
        this.planDir = dir || 'X:/1_work/X1/x1_plan/配置_master'
        if (dir) {
            let find = dir.indexOf('x1_plan');
            if (find >= 0) {
                console.log('bbb', clientFolder);
                this.outDir = dir.substring(0, find - 1) + `\\${clientFolder}\\assets\\mainPack\\image\\icons\\heroFull\\`
            } else {
                console.log('progect path is valid')
            }
        } else {
            this.outDir = 'D:/1_work/X1/x1_client/assets/mainPack/image/icons/heroFull/'
        }
        let allCfg = this.getExcelData();
        for (let key in allCfg) {
            this.genOneImage(key, allCfg[key]);
        }
        console.log('生成完成');
    },
}


if (process.argv.length > 2) {
    let clientF = 'x1_client_master';
    let dir = process.argv[2];
    genCardAtlas.doWork(dir, clientF);
} else {
    let subFolder = __dirname.split("\\");
    let prjPath = '';
    let clientFolder = 'x1_client';
    for (let one of subFolder) {
        if (one.indexOf('x1_client') >= 0) {
            clientFolder = one;
            break;
        }
        prjPath += one + '\\';
    }
    genCardAtlas.doWork(prjPath + 'x1_plan\\配置_master', clientFolder);
}


module.exports = genCardAtlas;