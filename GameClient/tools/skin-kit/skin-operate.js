/* eslint-disable no-undef */

const mfs = require('../lib/mfs');
const utils = require('../lib/utils');

const help = `
/////////////////////////////////////////////////////////////////////////////
工具介绍: 皮肤操作, 添加删除

参数:
-a: add 添加皮肤, ct,ct2,ct3... 支持多个, 用英文逗号 ',' 隔开, all 为全部
-d: del 删除皮肤, ct,ct2,ct3... 支持多个, 用英文逗号 ',' 隔开, all 为全部
-t: skin_type 皮肤类型, std|xmas|newy, 默认 std, 只在 -a 时生效
-l: list 列出已添加皮肤

使用方式:
node tool/skin-kit/skin-operate.js -a ct
node tool/skin-kit/skin-operate.js -a ct,ct2,ct3 -t std
node tool/skin-kit/skin-operate.js -a all
node tool/skin-kit/skin-operate.js -d ct
/////////////////////////////////////////////////////////////////////////////`;

const curPath = mfs.dirname(process.argv[1]);

/** 项目路径 */
const projectPath = mfs.join(curPath, '..', '..');

/** 操作类型 */
const OperateType = {
    /** 添加 */
    Add: 1,
    /** 删除 */
    Del: 2,
};

/** 皮肤 bundle */
const SkinBundles = ['launcher', 'common', 'hall'];

let operateType = null;
let skinCodes = [''];
let skinType = '';

/**
 * 读取配置
 */
function readConfig() {
    const config = JSON.parse(mfs.readFile(mfs.join(projectPath, 'tool/auto-pack/cfg/config.json'), { encoding: 'utf-8' }));

    let skinCodeParam = '';
    let skinTypeParam = 'std';

    let i = 2;
    while (i < process.argv.length) {
        let arg = process.argv[i];
        switch (arg) {
            case '-h':
                utils.log(help);
                process.exit(0);
                break;
            case '-a':
                operateType = OperateType.Add;
                skinCodeParam = process.argv[i + 1];
                i += 2;
                break;
            case '-d':
                operateType = OperateType.Del;
                skinCodeParam = process.argv[i + 1];
                i += 2;
                break;
            case '-t':
                skinTypeParam = process.argv[i + 1];
                i += 2;
                break;
            case '-l':
                listSkin();
                process.exit(0);
                break;
            default:
                i++;
                break;
        }
    }

    if (operateType == null || !skinCodeParam) {
        utils.log(help);
        process.exit(0);
    }

    skinCodes = skinCodeParam.split(',');
    if (skinCodes.includes('all')) {
        skinCodes = Object.keys(config.SkinCode);
    } else {
        let isValid = skinCodes.every((skinCode) => {
            return Object.keys(config.SkinCode).includes(skinCode);
        });

        if (!isValid) {
            utils.log(`参数错误, skinCodes: ${skinCodes}`);
            process.exit(1);
        }
    }

    skinType = skinTypeParam;
    if (!config.SkinType[skinType]) {
        utils.log(`参数错误, skinType: ${skinType}`);
        process.exit(1);
    }
}
readConfig();

/**
 * 操作皮肤
 * @returns
 */
function operateSkin() {
    for (let i = 0; i < skinCodes.length; i++) {
        let skinCode = skinCodes[i];
        for (let j = 0; j < SkinBundles.length; j++) {
            let bundle = SkinBundles[j];
            let skinDstPath = mfs.join(projectPath, `assets/${bundle}/${bundle}/skin/${skinCode}`);

            if (operateType == OperateType.Add) {
                let skinSrcPath = mfs.join(projectPath, `skin/${bundle}-${skinType}/${skinCode}`);
                if (mfs.symlink(skinSrcPath, skinDstPath)) {
                    utils.log(`添加皮肤 => ${mfs.relative(projectPath, skinSrcPath)} -> ${mfs.relative(projectPath, skinDstPath)}`);
                } else {
                    utils.log(`添加皮肤 => 失败, skin: ${bundle}-${skinType}/${skinCode}`);
                }
            } else if (operateType == OperateType.Del) {
                mfs.rm(skinDstPath);
                mfs.rm(`${skinDstPath}.meta`);
                utils.log(`删除皮肤 => ${mfs.relative(projectPath, skinDstPath)}`);
            }
        }
    }
}
operateSkin();

/**
 * 列出皮肤
 */
function listSkin() {
    for (let i = 0; i < SkinBundles.length; i++) {
        let bundle = SkinBundles[i];
        let skinDstPath = mfs.join(projectPath, `assets/${bundle}/${bundle}/skin/`);
        let skinDirs = mfs.readCurDirs(skinDstPath);
        utils.log(`列出皮肤 => ${bundle}: ${skinDirs}`);
    }
}
