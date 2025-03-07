var fs = require('fs');
var Utility = require('./src/Utility');
var ConstT = require('./src/ConstT')

/** 包名 */
const PACKAGE_NAME = 'PrefabCodeBuilder';
const EXTENSION_NAME = '⏰';
const translate = (key) => Editor.T(`[${PACKAGE_NAME}]:${key}`);

module.exports = {

    load() {
    },

    unload() { },

    messages: {
        'build-all'() {
            //Utility.genAllPrefabClass(Editor.Project.path + "/assets");
            Editor.log('不开放全部生成功能');
        },

        'build-select'() {
            this.buildSelect(true);
        },

        'build-select-noRef'() {
            this.buildSelect(false);
        },

        'asset-db:asset-changed'(event, info) {
            if (info.type != 'prefab') {
                return;
            }
            //Editor.log('预制体发生变化:', info)
        },
    },

    buildSelect(refreshCodePath) {
        Editor.log(`[${refreshCodePath}]  是走这出去的吗`);
        const uuids = Editor.Selection.curSelection('asset');
        if (uuids.length === 0) {
            Editor.log(`[${EXTENSION_NAME}]`, translate('selectAssets'));
            return;
        }
        Editor.log(` 是走这出去的吗  uuids ------ : `, uuids);
        // 根据 uuid 查找
        for (let i = 0; i < uuids.length; i++) {
            this.buildOnce(uuids[i], refreshCodePath);
        }
    },

    /**为某文件生成代码 */
    buildOnce(uuid, refreshCodePath) {
        Editor.log(' buildOnce  0000000 ');

        let isValid = this.isValidPrefabByUuid(uuid);
        
        if (!isValid) {
            Editor.log(' buildOnce  isValid =false');
            return;
        }
        let info = Utility.getPrefabInfoByUuid(uuid);
        Editor.log(` buildOnce  info  `+info);
        if (info) {
            Utility.genOnePrefabClass(info.file, info.path, info.name, info.bundleName, info.relativePath, refreshCodePath);
        }
    },

    /** 检测是否为有效预制体：
     * 1、框架中的预制体不需自动生成代码
     * 2、
     */
    isValidPrefabByUuid(uuid) {
        //是否为有效 uuid
        if (!Editor.Utils.UuidUtils.isUuid(uuid)) {
            Editor.log(`[${EXTENSION_NAME}]`, translate('invalidUuid'), uuid);
            return false;
        }
        //获取资源信息
        const assetInfo = Editor.assetdb.assetInfoByUuid(uuid);
        if (!assetInfo) {
            Editor.log(`[${EXTENSION_NAME}]`, translate('notGetAssetInfo'), uuid);
            return false;
        }
        //检查是否为预制体
        const url = assetInfo.url.replace('db://', '');
        if (assetInfo.type != 'prefab') {
            Editor.log(`[${EXTENSION_NAME}]`, translate('is not prefab'), url);
            return false;
        }
        //框架目录下的预制体不用自动生成
        if (assetInfo.path.indexOf('assets/c2f-framework') >= 0) {
            Editor.log(`[${EXTENSION_NAME}]`, translate('prefab in framework'), url);
            return false;
        }
        //以C_开头的预制体为组件类，不用导出
        if (assetInfo.path.indexOf('\\C_') >= 0) {
            Editor.log(`[${EXTENSION_NAME}]`, translate('control prefab not need'), url);
            return false;
        }
        return true;
    },

    /**
    * 使用 uuid 进行查找
    * @param {string} uuid 
    */
    findViaUuid(uuid) {
        //是否为有效 uuid
        if (!Editor.Utils.UuidUtils.isUuid(uuid)) {
            Editor.log(`[${EXTENSION_NAME}]`, translate('invalidUuid'), uuid);
            return;
        }
        //获取资源信息
        const assetInfo = Editor.assetdb.assetInfoByUuid(uuid);
        if (!assetInfo) {
            Editor.log(`[${EXTENSION_NAME}]`, translate('notGetAssetInfo'), uuid);
            return;
        }
        //检查是否为预制体
        const url = assetInfo.url.replace('db://', '');
        if (assetInfo.type === 'prefab') {
            Editor.log(`[${EXTENSION_NAME}]`, translate('is not prefab'), url);
            return;
        }
        //框架目录下的预制体不用自动生成
        if (assetInfo.path.indexOf('c2f-framework') >= 0) {
            Editor.log(`[${EXTENSION_NAME}]`, translate('is not prefab'), url);
            return;
        }
    },

}