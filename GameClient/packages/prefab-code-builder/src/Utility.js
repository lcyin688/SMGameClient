var fs = require('fs');
var path = require('path');
var ConstT = require('./ConstT')

/**
 * 工具类
 */
var Utility = {
    /**
     * 校验目录，如果不存在，则创建
     * @param dir 目录
     * @returns 目录
     */
    checkDirectory: function (dir) {
        let isExist = fs.existsSync(dir);
        if (!isExist) {
            fs.mkdirSync(dir);
            //刷新父文件夹
            this.assetsDBRefresh(dir, true);
        }
        return dir;
    },

    /**
     * 刷新编辑器目录
     * @param {*} path 
     * @param {*} refreshParent 
     */
    assetsDBRefresh: function (path, refreshParent) {
        //刷新文件，生成meta
        let idxB = path.indexOf('assets\\');
        let dbSubPath = '';
        if (refreshParent) {
            //刷新父文件夹
            let idxE = path.lastIndexOf('\\')
            if (idxB > 0) {
                dbSubPath = path.substring(idxB, idxE);
            }
        } else {
            //刷新当前文件夹
            dbSubPath = path.substring(idxB);
        }
        let dbFullPath = `db://${dbSubPath}`.replace(new RegExp('\\' + '\\', 'g'), '/');
        Editor.log("assetsDBRefresh dbFullPath ", dbFullPath);
        Editor.assetdb.refresh(dbFullPath, function (err, results) { });
    },

    /**
     * 向text中添加str
     * @param {*} text 
     * @param {*} str 
     * @param {*} idx 
     */
    insertStrToText: function (text, str, insertIdx) {
        let txtFront = text.substring(0, insertIdx + 1);
        let txtBehind = text.substring(insertIdx + 1);
        text = txtFront + str + txtBehind;
        return text;
    },

    /**
     * 生成一个预制类
     * @param file 预制体文件
     * @param path 脚本目录
     * @param prefabName 预制体名称
     * @returns 
     */
    genOnePrefabClass: function (file, path, prefabName, bundleName, relativePath, refreshCodePath) {
        Editor.log('genOnePrefabClass 001 path : ', path);
        Editor.log('genOnePrefabClass 002 prefabName: ', prefabName);
        Editor.log('genOnePrefabClass 003 bundleName : ', bundleName);
        Editor.log('genOnePrefabClass 004 relativePath : ', relativePath);
        Editor.log('genOnePrefabClass 005 refreshCodePath : ', refreshCodePath);

        this.checkDirectory(path);

        let moduleName = prefabName;
        //是否为功能面板
        let isPanel = false;
        if (prefabName.startsWith('P_')) {
            isPanel = true;
            moduleName = prefabName.substring(2);
        } else if (prefabName.startsWith('V_') || prefabName.startsWith('F_')) {
            moduleName = prefabName.substring(2);
        }
        // 构建View
        let viewClassName = moduleName + 'View';
        let modulePath = path + this.getCurNeedStr('\\') + moduleName;
        let scriptPath = modulePath + this.getCurNeedStr(`\\${viewClassName}.ts`);



        let prefabRaw = fs.readFileSync(file, 'utf-8');
        let prefabJson = JSON.parse(prefabRaw);
        let nodePath = this.genNodePath(prefabJson);
        if (!nodePath) {
            Editor.warn('nodePath is inValid!', nodePath);
            return;
        }


        // Editor.log('genOnePrefabClass 002 viewClassName: ', viewClassName);
        // Editor.log('genOnePrefabClass 003 modulePath : ', modulePath);
        // Editor.log('genOnePrefabClass 004 scriptPath : ', scriptPath);
        // Editor.log('genOnePrefabClass 001 nodePath : ', nodePath);
        let components = this.genComponentInfo(nodePath);
        if (!components) {
            Editor.warn('components is inValid!', components);
            return;
        }
        //Editor.log(components);
        let viewInfo = this.genViewClass(components, viewClassName, prefabName, isPanel);
        if (!viewInfo) {
            Editor.warn('error to genViewClass!');
            return;
        }
        //文件引入基类的相对路径
        let folder = scriptPath.split(this.getCurNeedStr('\\'));
        let c2fIdx = folder.indexOf('assets');
        let floor = folder.length - c2fIdx - 2;
        let importPath = './';
        for (let i = 0; i < floor; i++) {
            importPath += '../'
        }
        viewInfo.view = viewInfo.view.replace(new RegExp('\\' + ConstT.IMPORT_PATH, 'g'), importPath.substring(0, importPath.length - 1));
        //添加引入文件
        let importTxt = '';
        for (let ii = 0; ii < viewInfo.importFile.length; ii++) {
            let importFolder = viewInfo.importFile[ii].split('\\');
            let minFloor = Math.min(folder.length, importFolder.length - 1);
            let imIdx = 0;
            for (; imIdx < minFloor; imIdx++) {
                if (folder[imIdx] != importFolder[imIdx]) {
                    break;
                }
            }

            let className = this.getFileName(viewInfo.importFile[ii]);
            let imPath = `import ${className} from "./`;
            let revTms = folder.length - imIdx - 1;
            if (revTms > 0) {
                for (let jj = 0; jj < revTms; jj++) {
                    imPath += '../'
                }
            }
            let imSub = importFolder.length - imIdx - 1;
            if (imSub > 0) {
                for (let kk = imIdx; kk < importFolder.length - 1; kk++) {
                    imPath += importFolder[kk] + '/'
                }
            }
            imPath += className + '";';
            importTxt += imPath + '\r\n';
        }
        if (importTxt.length > 0) {
            let flagIdx = viewInfo.view.indexOf(';');
            viewInfo.view = this.insertStrToText(viewInfo.view, '\r\n' + importTxt, flagIdx);
        }
        this.checkDirectory(modulePath);
        // 写入View文件
        fs.writeFileSync(scriptPath, viewInfo.view);

        // 构建Model
        let modelClassName = moduleName + 'Model'
        let modelScriptPath = modulePath + this.getCurNeedStr(`\\${modelClassName}.ts`);

        Editor.log('genOnePrefabClass 1001  scriptPath : ', scriptPath);
        Editor.log('genOnePrefabClass 1002  modelScriptPath : ', modelScriptPath);

        if (!fs.existsSync(modelScriptPath)) {
            Editor.log('genOnePrefabClass modelScriptPath 路径 ');
            // 如果没有构建，则构建
            let modelClass = this.genModelClass(components, modelClassName, prefabName, isPanel);
            if (!modelClass) {
                return;
            }
            modelClass = modelClass.replace(new RegExp('\\' + ConstT.IMPORT_PATH, 'g'), importPath.substring(0, importPath.length - 1));
            // 写入文件
            fs.writeFileSync(modelScriptPath, modelClass);
        }
        // 构建Controller
        let controllerClassName = moduleName;
        let controllerScriptPath = modulePath + this.getCurNeedStr(`\\${controllerClassName}.ts`);
        if (fs.existsSync(controllerScriptPath)) {
            this.modifyControllerClass(controllerScriptPath, controllerClassName, isPanel, viewInfo.btns);
        } else {
            // 如果没有构建，则构建
            let controllerClass = this.genControllerClass(components, controllerClassName, prefabName, isPanel, viewInfo.btns);
            if (!controllerClass) {
                return;
            }
            // 写入文件
            controllerClass = controllerClass.replace(new RegExp('\\' + ConstT.IMPORT_PATH, 'g'), importPath.substring(0, importPath.length - 1));
            fs.writeFileSync(controllerScriptPath, controllerClass);
        }
        Editor.log('genOnePrefabClass genViewParamDefine 准备进去 ');

        // 自动同步定义
        this.genViewParamDefine(path, moduleName, prefabName, bundleName, relativePath, isPanel);

        if (refreshCodePath) {
            //刷新文件夹
            this.assetsDBRefresh(path, false);
        }
        Editor.log(` genOnePrefabClass prefab【${prefabName}】 code build success!`);
    },

    /**
     * 生成节点路径
     * @param prefabJson 预制信息
     * @param curIndex 当前索引
     * @param nodeDict 节点信息字典
     * @param nodeNameList 节点名字列表
     * @returns 
     */
    genNodePath: function (prefabJson, curIndex, nodeDict, nodeNameList) {
        if (!curIndex) {
            curIndex = 0;
        }
        if (prefabJson.length <= curIndex) {
            // 读取完毕
            return nodeDict;
        }
        let type = prefabJson?.[curIndex]?.['__type__'];
        let name = prefabJson?.[curIndex]?.['_name'];

        if (type === 'cc.Node') {
            let nodePath = ''
            if (nodeNameList && nodeNameList.length > 1) {
                for (let i = 1; i < nodeNameList.length; i++) {
                    nodePath += nodeNameList[i] + '/'
                }
                nodePath = nodePath + name;

            } else {
                // 第一个节点是根节点，没有路径，从第二节点开始有路径
                if (nodeNameList?.length === 1) {
                    nodePath = name;
                }
            }

            // 添加节点名
            if (!nodeNameList) {
                nodeNameList = [name];
            } else {
                nodeNameList.push(name);
            }
            let nodeInfo = { 'path': nodePath };
            // 添加节点信息
            (nodeDict ??= {})[name] = nodeInfo;
        } else if (type === 'cc.PrefabInfo') {
            // 节点结束符号，移除最后节点
            if (nodeNameList && nodeNameList.length > 0) {
                nodeNameList.pop();
            }
        } else if (type !== 'cc.CompPrefabInfo' && type !== 'cc.Prefab' && name !== undefined) {
            // 组件
            let nodeName = nodeNameList[nodeNameList.length - 1];
            let nodeInfo = nodeDict[nodeName];
            let nodeComponents = nodeInfo['components'];

            if (Array.isArray(nodeComponents)) {
                nodeComponents.push(type)
            } else {
                nodeComponents = [type];
            }
            nodeInfo['components'] = nodeComponents;

            //linkPrefab记录其真实Prefab
            let prefabIds = [];
            let prefab = prefabJson?.[curIndex]?.['_prefab'];
            if (prefab) {
                let prefabUuid = prefab['__uuid__'];
                if (prefabUuid && prefabIds.indexOf(prefabUuid) < 0) {
                    let compUuid = Editor.Utils.UuidUtils.decompressUuid(type);
                    const compAsset = Editor.assetdb.assetInfoByUuid(compUuid);
                    if (compAsset) {
                        let compName = this.getFileName(compAsset.path);
                        if (compName == 'LinkPrefab') {
                            prefabIds.push(prefabUuid);
                        }
                    }
                }
            }
            if (prefabIds.length > 0) {
                nodeInfo['linkPrefab'] = prefabIds;
            }
        }
        return this.genNodePath(prefabJson, curIndex + 1, nodeDict, nodeNameList);
    },

    /**
     * 生成组件信息
     * @param nodeDict 节点信息字典
     * @returns 
     */
    genComponentInfo: function (nodeDict) {
        if (!nodeDict) {
            return;
        }
        let nodeList = [];
        for (let key in nodeDict) {
            // 如果是根节点，或者开始和末尾都是_，则认为是需要获取组件的节点
            if ((key.startsWith('_') && key.endsWith('_'))) {
                let name = key.substring(1, key.length - 1);
                let nodeInfo = nodeDict[key];
                if (!nodeInfo) {
                    continue;
                }
                nodeList.push({ name: name, path: nodeInfo['path'], components: nodeInfo['components'], linkPrefab: nodeInfo['linkPrefab'] });
            }
        }
        return nodeList;
    },

    /** 根据脚本文件名获得类名 */
    getFileName: function (path) {
        let lastIdx = path.lastIndexOf('\\');
        let fullName = path.substring(lastIdx + 1);
        let dotIdx = fullName.indexOf('.');
        let name = fullName.substring(0, dotIdx);
        return name;
    },

    /**
     * 生成视图类
     * @param componentInfoList 组件信息列表
     * @param clsName 类名
     * @returns 
     */
    genViewClass: function (componentInfoList, clsName, prefabName, isPanel) {
        if (!fs.existsSync(ConstT.TEMPLATE_PATH)) {
            Editor.error('目录不存在:' + ConstT.TEMPLATE_PATH);
            return;
        }
        if (!componentInfoList) {
            Editor.error('componentInfoList is null or undefined')
            return;
        }
        let prefabType = isPanel ? 'Entity' : 'UI';
        let viewTemplate = fs.readFileSync(ConstT.TEMPLATE_PATH + '/' + ConstT.TEMPLATE_FILE_CONFIG[prefabType]['View'], 'utf-8');

        let className = clsName;
        let variableDeclarations = '';
        let variableAssignment = '';
        let eventOn = '';
        let eventOff = '';
        let eventCallback = '';

        let importFile = [];
        let btnNames = [];
        let len = componentInfoList.length;
        for (let i = 0; i < len; i++) {
            let componentInfo = componentInfoList[i];

            let name = componentInfo.name;
            let components = componentInfo.components;
            let path = componentInfo.path;
            let variableName = `${name}`;

            variableDeclarations += `public ${variableName}: cc.Node;\n    `;
            if (path === '') {
                // 如果没有路径，则代表是根节点，则直接等于this.node
                variableAssignment += `this.${variableName} = this.node;\n        `;
            } else {
                variableAssignment += `this.${variableName} = this.get('_${variableName}_');\n        `;
            }

            // 存在只有Node没有其他组件的情况
            if (components) {
                let cLen = components.length;
                for (let j = 0; j < cLen; j++) {
                    let sortComptType = components[j];
                    let componentType = components[j];
                    //cc. sp. 
                    let dotIdx = sortComptType.indexOf('.');
                    if (dotIdx >= 0) {
                        sortComptType = sortComptType.substring(dotIdx + 1);
                    } else {
                        let compUuid = Editor.Utils.UuidUtils.decompressUuid(sortComptType);
                        const assetTmp = Editor.assetdb.assetInfoByUuid(compUuid);
                        sortComptType = this.getFileName(assetTmp.path);
                        componentType = sortComptType;
                        //组件控制类不加入变量·组件控制类仅为了在编辑器中方便使用
                        if (componentType.startsWith('Ctrl')) {
                            continue;
                        }
                        if (importFile.indexOf(assetTmp.path) < 0) {
                            importFile.push(assetTmp.path);
                        }
                    }
                    if (sortComptType == 'Button') {
                        btnNames.push(`${variableName}${sortComptType}`);
                    }

                    variableDeclarations += `public ${variableName}${sortComptType}: ${componentType} = undefined;\n    `;
                    variableAssignment += `this.${variableName}${sortComptType} = this.${variableName}.getComponent(${componentType});\n        `;

                    //LinkPrefab将其真实对象定义出来
                    if (componentType == 'LinkPrefab' && componentInfo.linkPrefab.length > 0) {
                        let realUuid = componentInfo.linkPrefab[0];
                        const realAsset = Editor.assetdb.assetInfoByUuid(realUuid);
                        if (realAsset) {
                            let realName = this.getFileName(realAsset.path);
                            if (realName.startsWith('P_') || realName.startsWith('V_') || realName.startsWith('F_')) {
                                realName = realName.substring(2);
                            }
                            let prefabAbout = this.getPrefabCodeInfo(realAsset);
                            let codeFile = '';

                            //Editor.log('link sub:', realName);
                            if (realName.startsWith('C_')) {
                                realName = realName.substring(2);
                                //-同一组件不同UI变种时，以_加后缀命名，如：C_CcyItem_Big
                                let isMult = realName.indexOf('_');
                                if (isMult >= 0) {
                                    realName = realName.substring(0, isMult);
                                }
                                //Editor.log('link sub00:', realName);
                                codeFile = prefabAbout.path + this.getCurNeedStr(`\\${realName}.ts`);
                            } else {
                                //-同一组件不同UI变种时，以_加后缀命名，如：C_CcyItem_Big
                                let isMult = realName.indexOf('_');
                                if (isMult >= 0) {
                                    realName = realName.substring(0, isMult);
                                }
                                //Editor.log('link sub11:', realName);
                                codeFile = prefabAbout.path + this.getCurNeedStr(`\\${realName}\\${realName}.ts`);
                            }
                            variableDeclarations += `public ${variableName}${realName}: ${realName} = undefined;\n    `;
                            variableAssignment += `this.${variableName}${realName} = this.${variableName}.getComponent(${componentType}).getComponentEx(${realName});\n        `;
                            //添加引入文件:
                            if (importFile.indexOf(codeFile) < 0) {
                                importFile.push(codeFile);
                            }
                        }
                    }

                    let componentEventConfig = ConstT.COMPONENT_EVENT_CONFIG[sortComptType];
                    if (componentEventConfig) {
                        let cecLen = componentEventConfig.length;
                        for (let k = 0; k < cecLen; k++) {
                            let functionName = componentEventConfig[k]['FunctionName'];
                            let eventName = componentEventConfig[k]['EventName'];
                            let callbackName = `on${variableName}${sortComptType}${functionName}`;
                            eventOn += `        this.${variableName}${sortComptType}.node.on('${eventName}', this.${callbackName}, this);\n`;
                            eventOff += `        this.${variableName}${sortComptType}.node.off('${eventName}', this.${callbackName}, this);\n`;
                            eventCallback += `    private ${callbackName}(component: ${componentType}) {\n`;
                            eventCallback += `        this.emit('${eventName}', component);\n`;
                            eventCallback += `    }\n\n`;
                        }
                    }
                }
            }
        }
        viewTemplate = viewTemplate.replace(new RegExp('\\' + ConstT.VIEW_KEY_CLASS_NAME, 'g'), className);
        viewTemplate = viewTemplate.replace(new RegExp('\\' + ConstT.VIEW_KEY_PREFAB_NAME, 'g'), prefabName);
        viewTemplate = viewTemplate.replace(ConstT.VIEW_KEY_VARIABLE_DECLARATIONS, variableDeclarations);
        viewTemplate = viewTemplate.replace(ConstT.VIEW_KEY_VARIABLE_ASSIGNMENT, variableAssignment);
        viewTemplate = viewTemplate.replace(ConstT.VIEW_KEY_EVENT_ON, eventOn);
        viewTemplate = viewTemplate.replace(ConstT.VIEW_KEY_EVENT_OFF, eventOff);
        viewTemplate = viewTemplate.replace(ConstT.VIEW_KEY_EVENT_CALLBACK, eventCallback);

        return { view: viewTemplate, btns: btnNames, importFile };
    },

    /**
     * 生成数据模型类
     * @param componentInfoList 组件信息列表
     * @param clsName 类名
     * @param isPanel 是否为单元面板
     * @returns 
     */
    genModelClass: function (componentInfoList, clsName, prefabName, isPanel) {
        if (!fs.existsSync(ConstT.TEMPLATE_PATH)) {
            Editor.error('目录不存在:' + ConstT.TEMPLATE_PATH);
            return;
        }
        if (!componentInfoList) {
            Editor.error('componentInfoList is null or undefined')
            return;
        }
        let prefabType = isPanel ? 'Entity' : 'UI';
        let modelTemplate = fs.readFileSync(ConstT.TEMPLATE_PATH + '/' + ConstT.TEMPLATE_FILE_CONFIG[prefabType]['Model'], 'utf-8');

        let className = clsName;
        modelTemplate = modelTemplate.replace(new RegExp('\\' + ConstT.VIEW_KEY_CLASS_NAME, 'g'), className);
        modelTemplate = modelTemplate.replace(new RegExp('\\' + ConstT.VIEW_KEY_PREFAB_NAME, 'g'), prefabName);

        return modelTemplate;
    },

    /**
     * 生成控制器类
     * @param componentInfoList 组件信息列表
     * @param clsName 类名
     * @param prefabType 预制类型
     * @returns 
     */
    genControllerClass(componentInfoList, clsName, prefabName, isPanel, btnNames) {
        if (!fs.existsSync(ConstT.TEMPLATE_PATH)) {
            Editor.error('目录不存在:' + ConstT.TEMPLATE_PATH);
            return;
        }
        if (!componentInfoList) {
            Editor.error('componentInfoList is null or undefined')
            return;
        }
        let prefabType = isPanel ? 'Entity' : 'UI';
        let controllerTemplate = fs.readFileSync(ConstT.TEMPLATE_PATH + '/' + ConstT.TEMPLATE_FILE_CONFIG[prefabType]['Controller'], 'utf-8');

        let className = clsName;
        controllerTemplate = controllerTemplate.replace(new RegExp('\\' + ConstT.VIEW_KEY_CLASS_NAME, 'g'), className);
        controllerTemplate = controllerTemplate.replace(new RegExp('\\' + ConstT.VIEW_KEY_PREFAB_NAME, 'g'), prefabName);

        if (btnNames.length > 0) {
            let switchTxt = '';
            let btnFunTxt = '';
            for (let one of btnNames) {
                let sortName = one.substring(0, one.length - 6);

                switchTxt +=
                    `
            case this.view.${one}.name:
                this.CC_onClick${sortName}();
                break;
                `
                btnFunTxt +=
                    `
    private CC_onClick${sortName}(){

    }
            `
            }

            let tempEvt = `
    protected onEnable(): void {
        if (super.onEnable) {
            super.onEnable();
        }
        this.on(C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    }

    protected onDisable(): void {
        if (super.onDisable) {
            super.onDisable();
        }
        this.off(C2FEnum.UIEvent.ButtonClick);
    }

    private async onButtonClick(eventType: string, component: cc.Button) {
        switch (component.name){
            ${switchTxt}
            default:
                break;
        }
    } 
    `
            tempEvt += btnFunTxt;
            controllerTemplate = controllerTemplate.replace(new RegExp('\\' + ConstT.CTRL_KEY_BTN_FUNCTION, 'g'), tempEvt);
        } else {
            controllerTemplate = controllerTemplate.replace(new RegExp('\\' + ConstT.CTRL_KEY_BTN_FUNCTION, 'g'), '');
        }
        return controllerTemplate;
    },

    /**
     * 修改控制器类
     * @param componentInfoList 组件信息列表
     * @param clsName 类名
     * @param prefabType 预制类型
     * @returns 
     */
    modifyControllerClass(scriptFile, clsName, isPanel, btnNames) {
        let ctrlCode = fs.readFileSync(scriptFile, 'utf-8');

        let className = clsName;

        let btnFuncTMP = 'private async onButtonClick(eventType: string, component: cc.Button)';
        let btnFuncIdx = ctrlCode.indexOf(btnFuncTMP);

        if (btnFuncIdx >= 0 && btnNames.length > 0) {
            let addBtnFuncs = '';
            //有函数定义，有按钮UI: 检查是否有新增按钮
            for (let i = 0; i < btnNames.length; i++) {
                let one = btnNames[i];
                let btnFullName = `case this.view.${one}.name`;
                let nameIdx = ctrlCode.indexOf(btnFullName);
                if (nameIdx >= 0) {
                    continue;
                }

                //新增按钮在原代码中未找到
                let insertIdx = 0;
                if (i > 0) {
                    let lastFullName = `case this.view.${btnNames[i - 1]}.name`;
                    let lastIdx = ctrlCode.indexOf(lastFullName);
                    insertIdx = ctrlCode.indexOf('break;', lastIdx) + 7;
                } else {
                    let markTxt = 'switch (component.name)';
                    let lastIdx = ctrlCode.indexOf(markTxt);
                    if (lastIdx >= 0) {
                        lastIdx = ctrlCode.indexOf('{', lastIdx);
                    }
                    insertIdx = lastIdx + 2;
                }
                let sortName = one.substring(0, one.length - 6);
                let codeFront = ctrlCode.substring(0, insertIdx - 1);
                let codeBehin = ctrlCode.substring(insertIdx);
                ctrlCode = codeFront + `

            case this.view.${one}.name:
                this.CC_onClick${sortName}();
                break;
` + codeBehin;

                let funcOne = `private CC_onClick${sortName}()`;

                if (ctrlCode.indexOf(funcOne) < 0) {
                    addBtnFuncs += `                    
    ${funcOne} {
    }
            
    `
                }
            }
            if (addBtnFuncs.length > 0) {
                let lastHKH = ctrlCode.lastIndexOf('}');
                let codeFront = ctrlCode.substring(0, lastHKH - 1);
                let codeBehin = ctrlCode.substring(lastHKH);
                ctrlCode = codeFront + addBtnFuncs + codeBehin;
            }
        } else if (btnNames.length > 0) {
            //没有定义函数，有按钮UI：添加定义
            let switchTxt = '';
            let btnFunTxt = '';
            for (let one of btnNames) {
                let sortName = one.substring(0, one.length - 6);
                switchTxt +=
                    `
            case this.view.${one}.name:
                this.CC_onClick${sortName}();
                break;
                `
                btnFunTxt +=
                    `
    private CC_onClick${sortName}(){

    }
            `
            }

            let tempEvt = `

    protected onEnable(): void {
        if (super.onEnable) {
            super.onEnable();
        }
        this.on(C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    }

    protected onDisable(): void {
        if (super.onDisable) {
            super.onDisable();
        }
        this.off(C2FEnum.UIEvent.ButtonClick);
    }

    private async onButtonClick(eventType: string, component: cc.Button) {
        switch (component.name){
            ${switchTxt}
            default:
                break;
        }
    } 
    ` + btnFunTxt;
            let beginTxt = `public view: ${className}View = undefined;`
            let insertIdx = ctrlCode.indexOf(beginTxt) + beginTxt.length + 1;
            if (insertIdx >= 0) {
                let codeFront = ctrlCode.substring(0, insertIdx - 1);
                let codeBehin = ctrlCode.substring(insertIdx);
                ctrlCode = codeFront + tempEvt + codeBehin;
            }
        }
        fs.writeFileSync(scriptFile, ctrlCode);
    },

    //同步生成窗口型预制体定义
    genViewParamDefine(scriptPath, className, prefabName, bundleName, relativePath, isPanel) {
        Editor.log(' genViewParamDefine 准备进去 isPanel ', isPanel);
        if (isPanel) {
            return;
        }
        Editor.log(' genViewParamDefine 准备进去 isPanel 1');
        //mainPack之后的分包配置都放在mainPack之下
        let pathBundle = bundleName;
        let singlePack = ['framework', 'entrance', 'mainPack', 'demo', "gameYngy", "boxGame",
            "snake2048","nhwc",
        ];
        if (singlePack.indexOf(pathBundle) < 0) {
            pathBundle = 'mainPack';
        }
        //包名首字母大写  
        let realBName = bundleName.substring(0, 1).toUpperCase() + bundleName.substring(1);
        let bundlePath = scriptPath.replace(relativePath, '');
        if (pathBundle != bundleName) {
            bundlePath = bundlePath.replace(bundleName, pathBundle);
        }
        Editor.log(' genViewParamDefine  2 realBName ', realBName);
        Editor.log(' genViewParamDefine  3 bundlePath ', bundlePath);

        let viewFile = this.getCurNeedStr(`${bundlePath}\\${realBName}View.ts`);
        Editor.log(' genViewParamDefine  4 viewFile ', viewFile);
        let ctrlCode = fs.readFileSync(viewFile, 'utf-8');
        Editor.log(' genViewParamDefine  5 ctrlCode ', ctrlCode);
        if (ctrlCode.indexOf(className) >= 0) {
            return;
        }
        //ID定义
        let idFlag = `enum ${realBName}UI {`;
        let idBeginIdx = ctrlCode.indexOf(idFlag);
        let idEndIdx = ctrlCode.indexOf('}', idBeginIdx);
        let codeFront = ctrlCode.substring(0, idEndIdx - 1);
        let codeBehin = ctrlCode.substring(idEndIdx);
        ctrlCode = codeFront + `
    ${className},
` + codeBehin;
        Editor.log(' genViewParamDefine  6 ctrlCode ', ctrlCode);
        //参数定义
        let prefabFile = '';
        let relTemp = relativePath.replace(new RegExp('\\' + '\\', 'g'), '/');
        if (relTemp) {
            prefabFile = `${relTemp}/${prefabName}`.replace('\\', '/');
        } else {
            prefabFile = `/${prefabName}`;
        }
        let insertIdx = ctrlCode.lastIndexOf('}');
        codeFront = ctrlCode.substring(0, insertIdx - 1);
        let layerType = prefabName.startsWith('F_') ? 'UI' : 'PopUp';
        Editor.log(' genViewParamDefine  7 layerType ', layerType);
        ctrlCode = codeFront + ` 
    //description:
    [${realBName}UI.${className}]: { layer: LayerType.${layerType}, prefab: "prefab${prefabFile}", bundle: GameConsts.Bundle.${bundleName} }, }`;
        Editor.log(' genViewParamDefine  8 viewFile ', viewFile);
        Editor.log(' genViewParamDefine  9 ctrlCode ', ctrlCode);
        fs.writeFileSync(viewFile, ctrlCode);
        this.assetsDBRefresh(viewFile, false);
    },

    /**
     * 通过uuid获取预制相关
     * @returns 
     */
    getPrefabInfoByUuid(uuid) {
        const assetInfo = Editor.assetdb.assetInfoByUuid(uuid);
        if (!assetInfo) {
            Editor.log('无效的uuid');
            return null;
        }
        return this.getPrefabCodeInfo(assetInfo);
    },

    /**
     * 通过文件路径获取预制相关
     * @returns 
     */
    getPrefabInfoByPath(path) {
        const assetInfo = Editor.assetdb.assetInfoByPath(path);
        if (!assetInfo) {
            Editor.log('无效的文件路径:', path);
            return null;
        }
        return this.getPrefabCodeInfo(assetInfo);
    },

    /**
     * 判断是否是 macOS 系统
     * @returns {boolean} 如果是 macOS 系统返回 true，否则返回 false
     */
    isMacOS () {
        return process.platform === 'darwin';
    },

    /** 获取到需要的字段 */
    getCurNeedStr(str){
        if (Utility.isMacOS()){
            return str.replace(/\\/g, '/');
        }else{
            return str
        }
    },

    /** 获得预制体对应代码目录 
     * 1、bundle中预制体代码生成到bundle/script目录下
     * 2、通用预制体代码生成到assets/Script/common目录下
    */
    getPrefabCodeInfo: function (assetInfo) {
        let codePath = '';
        let flag = this.getCurNeedStr('\\prefab\\');
        let idx = assetInfo.path.indexOf(flag);
        if (idx < 0) {
            Editor.log('~~~:', assetInfo.path.indexOf(flag));
            Editor.log('预制体必须放在prefab的文件夹或其子文件夹下 002 :', assetInfo.path);
            return null;
        }
        if (assetInfo.path.indexOf(this.getCurNeedStr('assets\\c2f-framework') ) >= 0) {
            Editor.log('框架中的预制体不需生成代码:');
            return null;
        }
        let lastIdx = assetInfo.path.lastIndexOf( this.getCurNeedStr('\\'));
        let prefabName = assetInfo.path.substring(lastIdx + 1);
        let nameOnly = prefabName.replace('.prefab', '');
        let bundleName = '';
        let relativePath = '';
        let parentPath = assetInfo.path.substring(0, idx);
        let parentInfo = Editor.assetdb.assetInfoByPath(parentPath);
        let meta = Editor.assetdb.loadMetaByPath(parentPath);
        // Editor.log('getPrefabCodeInfo  : prefabName', prefabName);
        // Editor.log('getPrefabCodeInfo  : nameOnly', nameOnly);
        // Editor.log('getPrefabCodeInfo  : parentPath', parentPath);
        // Editor.log('getPrefabCodeInfo  : meta', meta);
        if (meta.isBundle) {
            //bundle中预制体
            // Editor.log('getPrefabCodeInfo 001 : meta.isBundle =true');
            let subPathB = parentPath.length + flag.length - 1;
            relativePath = assetInfo.path.substring(subPathB, lastIdx);
            codePath = parentPath + this.getCurNeedStr('\\script') + relativePath;
            bundleName = meta.bundleName || parentPath.substring(parentPath.lastIndexOf(this.getCurNeedStr('\\')) + 1);
            // Editor.log('getPrefabCodeInfo 002 relativePath : ', relativePath);
            // Editor.log('getPrefabCodeInfo 003 codePath: ', codePath);
            // Editor.log('getPrefabCodeInfo 004 bundleName : ', bundleName);
        } else {
            //通用预制体
            let commonFlag = this.getCurNeedStr('assets\\common\\prefab');
            idx = assetInfo.path.indexOf(commonFlag);
            // Editor.log('getPrefabCodeInfo  : assetInfo.path', assetInfo.path, idx);
            if (idx > 0) {
                let pathOnly = assetInfo.path.substring(0, lastIdx);
                codePath = pathOnly.replace(commonFlag, this.getCurNeedStr('assets\\Script\\common'));
            }
        }
        return { file: assetInfo.path, path: codePath, name: nameOnly, bundleName, relativePath };
    },


    /**
     * 递归获取目录下所有文件
     * @param dir 目录
     * @param filesList 文件列表
     * @returns 文件列表
     */
    readFileList: function (dir, filesList) {
        const files = fs.readdirSync(dir);
        files.forEach((item, index) => {
            let fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
                this.readFileList(path.join(dir, item), filesList);  //递归读取文件
            } else {
                let extname = path.extname(fullPath);
                if (extname == '.prefab') {
                    filesList.push(fullPath);
                }
            }
        });
        return filesList;
    },

    /**
     * 生成所有预制类
     * @param assetsPath 资源根目录
     * @returns 
     */
    genAllPrefabClass: function (assetsPath) {
        // Editor.log('genAllPrefabClass:', assetsPath);

        if (!fs.existsSync(assetsPath)) {
            console.error('目录不存在:' + assetsPath);
            return;
        }
        // 文件字典 key 文件名不含扩展名 value 文件在resources下的路径
        let fileNames = this.readFileList(assetsPath, []);
        let fileNamesLen = fileNames.length;

        if (fileNamesLen <= 0) {
            console.log('没有需要生成的脚本');
            return;
        }
        // Editor.log('all prefab:', fileNames);

        for (let i = 0; i < fileNamesLen; i++) {
            let info = Utility.getPrefabInfoByPath(fileNames[i]);
            // Editor.log('genAllPrefabClass: info  :', info);
            if (info) {
                Utility.genOnePrefabClass(info.file, info.path, info.name, info.bundleName, info.relativePath);
            }
        }
    }
}

module.exports = Utility;