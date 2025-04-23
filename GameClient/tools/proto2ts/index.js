const pbjs = require('protobufjs/cli/pbjs');
const pbts = require('protobufjs/cli/pbts');
const fs = require('fs');
const path = require('path');

let help = `
/////////////////////////////////////////////////////////////////////////////
使用方式:
moduleName.proto 放在 ./proto 路径下
node index.js -n moduleName

参数:
-n: moduleName 模块名, 默认Api, 子游戏为游戏名, 比如 Domino、Texas...
/////////////////////////////////////////////////////////////////////////////
`;

const curPath = path.dirname(process.argv[1]);
const projectPath = path.join(curPath, '..', '..');
console.log(`ceshi  002 : ${projectPath}`);

let moduleNameTemp ="msg";
let moduleName = '';
let modulePath = '';
/** proto文件根路径 */
let protoRootPath = '';
/** 生成目标文件名，首字母大写 */
let targetModuleName = '';

/**
 * 读取配置
 */
function readConfig() {
    let i = 2;
    while (i < process.argv.length) {
        let arg = process.argv[i];
        switch (arg) {
            case '-h':
                console.log(help);
                process.exit(0);
                break;
            case '-n':
                moduleName = process.argv[i + 1];
                i += 2;
                break;
            case '-p':
                protoRootPath = process.argv[i + 1];
                i += 2;
                break;
            default:
                i++;
                break;
        }
    }

    if (!moduleName) {
        moduleName = moduleNameTemp;
    }

    if (!protoRootPath) {
        protoRootPath = path.join(projectPath, '..', 'pb');
    }

    // modulePath = path.join(projectPath, 'assets','script', 'proto');
    protoRootPath = path.join(protoRootPath, `${moduleName}.proto`);

    // if (!fs.existsSync(modulePath)) {
    //     mkdir(modulePath);
    // }

    console.log(`moduleName: ${moduleName}`);
    console.log(`modulePath: ${modulePath}`);

    targetModuleName = moduleName.substring(0, 1).toUpperCase() + moduleName.substring(1);

}



readConfig();
// generateProtoFile();
generateProtoJs()
// generateProtoDts();
/**
 * 创建文件夹
 * @param {string} strPath
 * @param {string} mode
 * @returns 成功则返回 true
 */
function mkdir(strPath, mode) {
    if (fs.existsSync(strPath)) {
        return true;
    }

    if (mkdir(path.dirname(strPath), mode)) {
        try {
            fs.mkdirSync(strPath, mode);
            return true;
        } catch (error) {
            return false;
        }
    }

    return false;
}
/**
 * 生成协议
 */
function generateProtoFile() {
    let protoStr = fs.readFileSync(protoRootPath , { encoding: 'utf-8' });
    let lines = protoStr.split('\n');
    lines = lines.map((line) => {
        if (line == '') {
            return null;
        }

        let startIndex = line.indexOf('//');
        if (startIndex == -1) {
            return line;
        } else if (startIndex == 0) {
            return null;
        }

        line = line.substring(0, startIndex);
        if (line.trim() === '') {
            return null;
        }

        let lineArr = line.split(';');
        if (lineArr.length > 1) {
            return lineArr[0] + ';';
        }

        return line;
    });

    lines = lines.filter((line) => {
        return line != null;
    });

    let fileStr = `/**\n * 协议文件\n */\nconst ${targetModuleName}ProtoFile = ` + '`\n\n' + `${lines.join('\n')}` + '\n`;\n' + `\nexport default ${targetModuleName}ProtoFile;\n`;
    fs.writeFileSync(path.join(modulePath, `${targetModuleName}ProtoFile.ts`), fileStr);
}

function swapAndMoveComment(input) {
    // 正则表达式，捕获行中的各个部分：前缀、变量声明、分号、空格和///注释
    const regex = /^(\s*)([^;]+)(\s*;\s*)(\/{2,}(.+))$/;
    // 按行分割输入文本
    const lines = input.split('\n');
    // 处理每一行
    const transformedLines = lines.map((line) => {
        // 过滤掉服务器定义的包名，package xxx;
        if (line.trim().startsWith('package ')) {
            return '\n';
        }

        const match = line.match(regex);
        if (match) {
            // 对调：将///注释移到行首，后面跟上原来的前缀、变量声明和分号
            let code = `\t// ${match[5].trim()} \n\t${match[2]}${match[3]}`;
            code = code.replace(/\n{2,}/g, '\n');
            code = code.replace(/\n {1,}\n/g, '\n');
            code = code.replace(/\/\//g, '///');
            code = code.replace(/\/{3,}/g, '///');
            return code;
        }
        // 如果不匹配，原样返回行
        line = line.replace(/\n{2,}/g, '\n');
        line = line.replace(/\n {1,}\n/g, '\n');
        line = line.replace(/\/\//g, '///');
        line = line.replace(/\/{3,}/g, '///');
        return line;
    });
    // 将处理后的行数组连接成字符串并返回
    return transformedLines.join('\n');
}
/**
 * 删除文件/文件夹/软链接
 * @param {string} strPath
 */
function rm(strPath) {
    if (!fs.existsSync(strPath)) {
        return;
    }
    fs.rmSync(strPath, { recursive: true, force: true });
    // if (isSymbolicLink(strPath) || isFile(strPath)) {
    //     fs.unlinkSync(strPath);
    //     return;
    // }

    // if (isDirectory(strPath)) {
    //     let files = fs.readdirSync(strPath);
    //     files.forEach((file) => {
    //         let fullPath = path.join(strPath, file);
    //         rm(fullPath);
    //     });
    //     fs.rmdirSync(strPath);
    // }
}

/**
 * 复制文件/文件夹
 * @param {string} srcPath
 * @param {string} dstPath
 * @param {string[]} excludes 排除列表
 * @returns 成功则返回 true
 */
function cp(srcPath, dstPath, excludes = []) {
    if (!fs.existsSync(srcPath)) {
        utils.log(` cp err, srcPath: ${srcPath}`);
        return false;
    }

    if (isFile(srcPath)) {
        fs.copyFileSync(srcPath, dstPath);
        return true;
    }

    let files = fs.readdirSync(srcPath);
    files.forEach((file) => {
        let srcFullPath = path.join(srcPath, file);
        if (utils.strMatch(srcFullPath, excludes)) {
            // 如果在排除列表中，直接跳过
            return;
        }

        let dstFullPath = path.join(dstPath, file);
        if (isFile(srcFullPath)) {
            mkdir(dstPath);
            fs.copyFileSync(srcFullPath, dstFullPath);
        } else if (isDirectory(srcFullPath)) {
            mkdir(dstFullPath);
            return cp(srcFullPath, dstFullPath, excludes);
        }
    });

    return true;
}
// 获取命名空间起始索引 并修改
function renameSpace(dtsStr) {
    const regex = /declare\s+namespace\s+(\w+)/;
    const match = dtsStr.match(regex);
    if (match) {
      const namespaceName = match[1]; 
      const startIndex = match.index + match[0].indexOf(namespaceName);
      let str1 = dtsStr.substring(match.index, startIndex);
      let strNeedChange =match[0]
      let finalStr = str1 + `msg.${namespaceName}`;
      if (namespaceName=='msg') {
        finalStr = str1 + namespaceName;
      }
      dtsStr = dtsStr.replace(strNeedChange, finalStr);
      return dtsStr;
    } else {
      return dtsStr;
    }

}

/** 如果有消息头定义的枚举 给摘出来 单独存放到  .ts 文件 */
function renameEnumToGameTs(dtsStr,enumName){
    const regex = /enum\s+(\w+)/;
    const match = dtsStr.match(regex);
    if (match) {
        const startIndex = match.index;
        //找到 enum 后边的一个“}”的下标
        const endIndex = dtsStr.indexOf('}', startIndex)+1;
        let strNeedChange = dtsStr.substring(startIndex, endIndex);
        dtsStr = dtsStr.replace(strNeedChange, "");
        reWriteEnumToGameTs(strNeedChange,enumName)
        if ("GameMsgId"==enumName) {
            reWriteToGameMsgName(strNeedChange)
        }
       return dtsStr;
    } else {
       return dtsStr;
    }
}

/**
 * 是否是文件
 * @param {string} strPath
 */
function isFile(strPath) {
    try {
        const stat = fs.statSync(strPath);
        return stat.isFile();
    } catch (error) {}

    return false;
}

/** 写入枚举到 GameMsgId.ts */
function reWriteEnumToGameTs(newStr,enumName){
      //定义的枚举写入  GameMsgId.ts
    let tsFilePath = path.join(projectPath, `assets/resources/proto/${enumName}.ts`);
    if (fs.existsSync(tsFilePath)) {
        let msgStr = fs.readFileSync(tsFilePath, { encoding: 'utf-8' });
        const endIndex = newStr.indexOf('{', 0);
        const curEnumStr = newStr.substring(0, endIndex);
        const startIndexFinal = msgStr.indexOf(curEnumStr, 0);
        const endIndexFinal = msgStr.indexOf('}', startIndexFinal)+1;
        const strNeedChange = msgStr.substring(startIndexFinal, endIndexFinal);
        msgStr = msgStr.replace(strNeedChange, newStr);
        fs.writeFileSync(tsFilePath, msgStr);
    }else{
        let msgStr = `export namespace ${enumName} { \n export ${newStr}\n }`
        fs.writeFileSync(tsFilePath, msgStr);
    }
}

/** 写入协议抬头配置  msgName.ts */
function reWriteToGameMsgName(newStr,enumName){
    const regex = /enum\s+(\w+)/;
    const match = newStr.match(regex);
    if (match) {
      const enumName = match[1]; 
      if (enumName=='MsgId') {
            //定义的枚举写入  GameMsgId.ts
            let pathTemp =   path.join(projectPath, 'assets/resources/proto/msgName.ts');
            // 转换并输出
            let result = transformEnumToKeyValue(newStr);
        if (fs.existsSync(pathTemp)) {
            let newMap = strChangeGetMapData(newStr)
            //在把旧的数据 转化成 map
            let msgStr = fs.readFileSync(pathTemp, { encoding: 'utf-8' });
            const startIndexFinal = msgStr.indexOf('= {', 0)+4;
            const endIndexFinal = msgStr.indexOf('}', startIndexFinal);
            let str = msgStr.substring(startIndexFinal, endIndexFinal);
            let oldMap = stringToMap(str)
            for (const [key, value] of newMap) {
                oldMap.set(key, value);
            }
            //map 转化成数组排序
            let newArr = Array.from(oldMap.entries()).sort((a, b) => a[0] - b[0]);
            result = arrToStrValue(newArr);
        }
        let msgStr = "export var msgName: { [key: number]: string } = { \n "+result+"\n }"
        fs.writeFileSync(pathTemp, msgStr);
      }
    }




}

/** 文字转化格式 */
function transformEnumToKeyValue(enumStr) {
    // 提取枚举内容
    const enumContent = enumStr.match(/\{(.*)\}/s)[1].trim();
    const lines = enumContent.split('\n').map(line => line.trim()).filter(line => line);
    // 生成键值对
    const keyValuePairs = lines.map(line => {
        const [key, value] = line.split('=').map(part => part.trim());
        const formattedValue = value.replace(/,/g, ''); // 去掉前缀
        return `      ${formattedValue}: "${key}",`;
    });
    let  strFinal = keyValuePairs.join('\n')
    return strFinal
}

/** 转化成 map 数据 */
function strChangeGetMapData(enumStr) {
    // 提取枚举内容
    const enumContent = enumStr.match(/\{(.*)\}/s)[1].trim();
    const lines = enumContent.split('\n').map(line => line.trim()).filter(line => line);
    // 生成键值对
    let mapTemp =new Map()
    lines.map(line => {
        let [key, value] = line.split('=').map(part => part.trim());
        const formattedValue = value.replace(/,/g, ''); // 去掉前缀
        key = key.replace(/MSG_/g, ''); // 去掉 MSG_
        mapTemp.set(Number(formattedValue),key)

    });
    return mapTemp
}

/** 转化成 map 数据 */
function stringToMap(str) {
    const lines = str.split('\n').map(line => line.trim()).filter(line => line);
    let mapTemp =new Map()
    lines.map(line => {
        // console.log(" test final " ,line)
        let [key, value] = line.split(':').map(part => part.trim());
        let formattedValue = value.replace(/,/g, ''); // 去掉 ,
        formattedValue = formattedValue.replace(/MSG_/g, ''); // 去掉 MSG_
        mapTemp.set(Number(key),formattedValue)
    });
    return mapTemp
}


/** 文字转化格式 */
function arrToStrValue(arr) {
    let str =""
    for (let i = 0; i < arr.length; i++) {
        const v = arr[i];
        str+=`      ${v[0]}: "${v[1]}",\n`
    }
    return str
}



/**
 * 生成声明
 */
function generateProtoJs() {
    if (!mkdir(path.join(projectPath, `assets/resources/proto`))) {// 如果文件夹不存在，则不执行
        //延迟一秒
        setTimeout(() => {
            generateProtoJs()
        }, 1000);
        return
    }

    // 修正文件格式
    let protoStr = fs.readFileSync(protoRootPath, { encoding: 'utf-8' });
    protoStr = swapAndMoveComment(protoStr);
    // 生成文件 路径
    let pathTemp =path.join(curPath, 'proto')
    if (!fs.existsSync(pathTemp)) {
        mkdir(pathTemp);
    }
    fs.writeFileSync(path.join(pathTemp, `${moduleName}.proto`), protoStr);

    
    let args2js = [
        path.join(curPath, 'proto', `${moduleName}.proto`),
        '-t',
        'static-module',
        '-w',
        'commonjs',
        '-o',
        path.join(curPath, 'proto', `${moduleName}.proto.js`),

        // '--keep-case',

        '--no-create',
        '--no-encode',
        '--no-decode',
        '--no-verify',
        '--no-convert',
        '--no-delimited',
        // '--no-beautify',
        // '--no-comments',
        '--no-service',

        // '--force-long',
        '--force-number',
        '--force-message',
    ];

    pbjs.main(args2js, (err, output) => {
        if (err) {
            console.log(`generateProtoJs 001 , err: ${err}`);
            console.log('------------------------- 失败 -------------------------');
            return;
        }

        setTimeout(() => {
            generateProtoDts()
          }, 1000);
    });
}

function generateProtoDts() {
        //替代命令行：pbts -o message.d.ts message.js

        let args2ts = [
            path.join(curPath, 'proto', `${moduleName}.proto.js`),
            '-o',
            path.join(curPath, 'proto', `${moduleName}.d.ts`),
            '-n',
            moduleName.toLowerCase(),
            '-m',

            // '--no-comments',
        ];
        console.log('------------------------- 写入 Ts 文件 001 -------------------------');
        pbts.main(args2ts, (err, output) => {
            console.log('------------------------- 写入 Ts 文件 002 -------------------------');
            if (err) {
                console.log(`generateProtoDts, err: ${err}`);
                console.log('------------------------- 失败 -------------------------');
                // return;
            }
            rm(path.join(curPath, 'proto', `${moduleName}.proto.js`));

            let dtsStr = fs.readFileSync(path.join(curPath, 'proto', `${moduleName}.d.ts`), { encoding: 'utf-8' });
            //移除了export这一行的 导出语句
            dtsStr = dtsStr.replace(/export.*;/g, '');
            //三个以上的换行符替换为两个
            dtsStr = dtsStr.replace(/\n{3,}/g, '\n\n');
            // declare namespace msg.player { 添加msg 前缀
            dtsStr= renameSpace(dtsStr);
            //如果有哪洗消息头定义的枚举 给摘出来 单独存放到  .ts 文件
            dtsStr= renameEnumToGameTs(dtsStr,"GameMsgId");
            dtsStr= renameEnumToGameTs(dtsStr,"RoomState");

            // class 替换为interface
            // dtsStr = dtsStr.replace(/class/g, 'interface');
            // dtsStr = dtsStr.replace(/implements.*{/g, '{');
            // dtsStr = dtsStr.replace(/\s*constructor.*;/g, '');
            // dtsStr = dtsStr.replace(/\s*enum [A-Za-z0-9_]* {(\n\s*[A-Za-z0-9_]* = -?[0-9],?)*\n\s*}/g, '');
            // dtsStr = dtsStr.replace(new RegExp('public ', 'g'), '');
            // dtsStr = dtsStr.replace(new RegExp(moduleName, 'g'), `${targetModuleName}Proto`);
            

           
            fs.writeFileSync(path.join(curPath, 'proto', `${moduleName}.d.ts`), dtsStr);
            rm(path.join(curPath, 'proto', `${moduleName}.proto`));
            //复制源文件 proto  到  项目
            let tartPath = path.join(projectPath, 'assets/resources/proto/', `${moduleName}.proto`)
            cp(protoRootPath, tartPath);

            console.log('------------------------- 成功 -------------------------');
        });
}


