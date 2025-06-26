/* eslint-disable no-undef */
/* eslint-disable no-console */

// node tool/clear-lobby/check_res_name.js

const fs = require('fs');
const path = require('path');

const rootPath = process.cwd();

let files = getAllFiles(rootPath + '/assets');

let amount = 0;
for (let file of files) {
    let parsedPath = path.parse(file);
    if (parsedPath.ext == '.meta') {
        continue;
    }
    if (!isValidResourceName(parsedPath.name)) {
        amount++;
        console.log(`[CC][❌] 文件名包含空格 ${file}`);
    }
}
console.log(`[CC][✅✅✅✅✅] 共检查 ${files.length} 个文件，包含空格的文件数量有 ${amount} 个`);

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

        if (curRoot.indexOf('assets/game/') != -1) {
            curIndex++;
            continue;
        }

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

function isValidResourceName(resourceName) {
    // 正则表达式模式，用于匹配仅包含字母、数字和下划线的字符串
    const regex = /^[a-zA-Z0-9_.-]+$/;
    // 使用正则表达式测试字符串
    return regex.test(resourceName);
}
