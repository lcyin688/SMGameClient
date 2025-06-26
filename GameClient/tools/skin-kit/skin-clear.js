/* eslint-disable no-undef */
/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');

const help = `
/////////////////////////////////////////////////////////////////////////////

工具介绍: 皮肤静态资源清理工具

参数:
-s: 皮肤code,多个皮肤code用逗号隔开，如: ct,ct2
-h: 帮助文档

使用方式: 
- node tool/clear-lobby/main.js -s skin

例如：清理皮肤 bg，ct 皮肤静态资源
- node tool/clear-lobby/main.js -s bg,ct

/////////////////////////////////////////////////////////////////////////////`;

let i = 2;
let skinString = '';
while (i < process.argv.length) {
    let arg = process.argv[i];
    switch (arg) {
        case '-h':
            console.log(help);
            process.exit(0);
            break;
        case '-s':
            skinString = process.argv[i + 1];
            i += 2;
            break;
        default:
            process.exit(0);
            break;
    }
}

const rootPath = process.cwd();

const SkinPaths = ['skin/launcher-std', 'skin/common-std', 'skin/hall-std'];

const skins = [...new Set(skinString.split(','))];

delSkinsRes(skins);

function delSkinsRes(skins) {
    for (let skin of skins) {
        console.log(`[CC][✅][${skin}] 检测 skin/res/ 目录下所有资源 start！！！`);

        // 所有文件
        let skinAllFiles = [];

        // 所有需要排查的 uuid
        const skinUuids = [];

        for (let path of SkinPaths) {
            let files = getAllFiles(rootPath + '/' + path + '/' + skin + '/res');
            skinAllFiles = skinAllFiles.concat(files);
        }

        console.log(`[CC][✅][${skin}] 检测文件数量: ${skinAllFiles.length}`);

        if (skinAllFiles.length == 0) {
            return;
        }

        for (let file of skinAllFiles) {
            // 排除 ts.meta / js.meta 文件
            if (!file.endsWith('.meta')) {
                continue;
            }
            if (file.endsWith('ts.meta') == true) {
                continue;
            }
            if (file.endsWith('js.meta') == true) {
                continue;
            }
            // 排除包换 langtexture 的文件
            if (file.indexOf('langtexture') != -1) {
                continue;
            }
            try {
                let content = fs.readFileSync(file, 'utf-8');
                let jsonObj = JSON.parse(content);

                // 排除部分类型的 .meta 检测
                if (jsonObj['importer'] === 'folder' || jsonObj['importer'] === 'asset') {
                    continue;
                }

                let uuids = [file];
                let uuid = jsonObj['uuid'];
                if (uuid) {
                    uuids.push(uuid);
                }

                let sub_metas = jsonObj['subMetas'];
                if (sub_metas) {
                    let fileNameAll = file.split('/');
                    let fileName = fileNameAll[fileNameAll.length - 1].split('.')[0];
                    let sub_uuid = sub_metas[fileName]['uuid'];
                    if (sub_uuid) {
                        uuids.push(sub_uuid);
                    }
                }
                skinUuids.push(uuids);
            } catch (e) {
                continue;
            }
        }
        console.log(`[CC][✅][${skin}] 需要排查的uuid数量: ${skinUuids.length}`);

        if (skinUuids.length == 0) {
            return;
        }

        // 遍历 skin 目录，看看uuid是否被使用
        let otherAllPaths = [];
        for (let path of SkinPaths) {
            let files = getAllFiles(path + '/' + skin);
            otherAllPaths = otherAllPaths.concat(files);
        }

        if (otherAllPaths.length == 0) {
            return;
        }

        // 特殊文件
        const ts = 'assets/common/common/script/extend';
        let files = getAllFiles(ts);
        otherAllPaths = otherAllPaths.concat(files);

        console.log(`[CC][✅][${skin}] 排查文件数量: ${otherAllPaths.length}`);

        // 排查uuid是否未使用;
        for (let otherFile of otherAllPaths) {
            let content = fs.readFileSync(otherFile, 'utf-8');
            for (let k = 0; k < skinUuids.length; k++) {
                let uuids = skinUuids[k];
                if (uuids.length == 0) {
                    continue;
                }

                // 排查自身之外的所有文件
                if (uuids[0].indexOf(otherFile) != -1) {
                    continue;
                }

                for (let uuid of uuids) {
                    let escapedTestStr = escapeRegExp(uuid);
                    let oldUuidRegex = new RegExp(escapedTestStr, 'g');
                    if (content.match(oldUuidRegex)) {
                        skinUuids[k] = [];
                    }
                }
            }
        }

        const ary_end = skinUuids.filter((item) => {
            return item.length > 0;
        });

        // 删除
        for (let c = 0; c < ary_end.length; c++) {
            let uuids = ary_end[c];
            let url = uuids[0].replace('.meta', '');
            fs.unlinkSync(uuids[0]);
            fs.unlinkSync(url);
            console.log(`-----🗑️`, url);
        }

        console.log(`[CC][✅][${skin}] 资源检测 finish！！！，排除未使用的资源数量：${ary_end.length}，并删除`);

        skinAllFiles.length = 0;
        otherAllPaths.length = 0;
        skinUuids.length = 0;
    }

    console.log(`[CC][✅✅✅✅✅] 所有皮肤检测 finish！！！`);
}

function getAllFiles(root) {
    // 读取目录内容
    let files = [];
    let dirs = [root];
    let curIndex = 0;

    // 使用 fs.existsSync 检查路径是否存在
    const isExists = fs.existsSync(root, fs.constants.F_OK);
    if (!isExists) {
        console.log(`[CC][❌] 路径不存在 ${root}`);
        return [];
    }

    while (curIndex < dirs.length) {
        let curRoot = dirs[curIndex];
        let curList = fs.readdirSync(curRoot);

        for (let info of curList) {
            let fullpath = path.join(curRoot, info);
            let stats = fs.statSync(fullpath);

            if (stats.isFile()) {
                files.push(fullpath);
            } else if (stats.isDirectory()) {
                dirs.push(fullpath);
            }
        }
        curIndex++;
    }
    return files;
}

function escapeRegExp(str) {
    // 使用正则表达式进行替换，将特殊字符替换为它们的转义序列
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& 表示匹配的字符
}
