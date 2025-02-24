/** 红点管理 */

class RedDotMgr {
    /** 根节点 */
    public root: c2f.RedDot = null;
    /** 配置 */
    protected mapCfg: Map<number, RedDotDef> = null;
    /** ID -> {optStr -> RedDot}*/
    protected mapRedDot: Map<number, Map<string, c2f.RedDot>> = null;
    /** 刷新回调 */
    protected funcRedDotRequestUpdate: IRedDotRequestUpdate = null;
    /** 解锁判断 */
    protected funcModuleIsUnlock: HandlerModuleIsUnlock = null;
    /** ID -> {optStr ->boolean} 存储一帧结束后要更新的红点 */
    protected mapPreUpdate: Map<number, Map<string, boolean>> = null;
    //红点预制体
    protected _dotPrefab: cc.Prefab = null;
    public set dotPrefab(value: cc.Prefab) {
        if (this._dotPrefab == value) {
            return;
        }
        if (this._dotPrefab) {
            this._dotPrefab.decRef();
        }
        this._dotPrefab = value;
        this._dotPrefab.addRef();
    }
    public get dotPrefab() {
        return this._dotPrefab;
    }

    constructor() {
        this.mapRedDot = new Map();
        this.mapPreUpdate = new Map();
        this.mapCfg = new Map();
    }

    public clear(): void {
        this.mapRedDot.forEach((v, k) => {
            v.forEach((vv, kk) => {
                vv.clear();
            })
            v.clear();
        })
        this.mapRedDot.clear();
        this.mapPreUpdate.clear();
        this.root?.destroy();
        if (this._dotPrefab) {
            this._dotPrefab.decRef();
            this._dotPrefab = null;
        }
    }

    private getRedCfg(data: any[]) {
        let cfg: RedDotDef = {
            id: data.length > 0 ? data[0] : 0,
            moduleId: data.length > 1 ? data[1] : 0,
            name: data.length > 2 ? data[2] : '',
            parent: data.length > 3 ? data[3] : 0,
            showType: data.length > 4 ? data[4] : 1,
            offsetX: data.length > 5 ? data[5] : 0,
            offsetY: data.length > 6 ? data[6] : 0
        }
        return cfg;
    }

    private getOptStr<Options>(opt: Options) {
        if (!opt) {
            return 'null';
        } else {
            return JSON.stringify(opt);
        }
    }

    private getRedDot<Options>(id: number, opt: Options) {
        let ret: c2f.RedDot = null;
        let mapTemp = this.mapRedDot.get(id);
        if (mapTemp) {
            let optStr = this.getOptStr(opt);
            ret = mapTemp.get(optStr)
        }
        return ret;
    }

    private getRedDotByIdKey(id: number, optStr: string) {
        let ret: c2f.RedDot = null;
        let mapTemp = this.mapRedDot.get(id);
        if (mapTemp) {
            ret = mapTemp.get(optStr)
        }
        return ret;
    }

    /** 初始化红点配置信息 */
    public initWithData(data: any[], rootId: number, prefab: cc.Prefab) {
        if (this.mapRedDot.size > 0) {
            console.warn(`RedDotMgr-> 请不要重复调用红点初始化`);
            return;
        }
        if (!data?.length) {
            console.warn(`RedDotMgr-> 红点初始化失败，数据不存在`);
            return;
        }
        this.clear();
        this.dotPrefab = prefab;

        for (let i = 0; i < data.length; i++) {
            const info = this.getRedCfg(data[i]);
            this.mapCfg.set(info.id, info);
            this.createRedDot(info, null);
        }

        // 设置根节点，如果没有被创建，则创建一个默认的   
        this.root = this.getRedDot(rootId, null) ?? this.createRedDot(
            {
                id: rootId,
                moduleId: 0,
                name: 'main',
                parent: 0,
                showType: c2f.RedDot.ShowType.Normal,
                offsetX: 0,
                offsetY: 0
            }, null);

        // 对每一个节点设置 父节点
        this.mapRedDot.forEach((mapSub) => {
            mapSub.forEach((v, k) => {
                this.setRedDotParent(v, null);
            })
        });
        // 进行一次全部节点的更新
        if (this.funcRedDotRequestUpdate) {
            this.refreshAllRedDot();
        }
    }

    /**
     * 创建红点
     * @template Options
     * @param {RedDotDef} info
     * @param {Options} options 增加一个选项，在更新的时候会传给更新函数
     */
    private createRedDot<Options>(info: RedDotDef, options: Options) {
        if (!info) {
            return null;
        }
        let dot = new c2f.RedDot(info, options);
        const optStr = dot.key.getOptStr();
        let find = this.mapRedDot.get(info.id);
        if (find) {
            if (find.get(optStr)) {
                console.warn(`RedDotMgr-> [${dot.id}][${optStr}] 重复创建`);
                return null;
            } else {
                find.set(optStr, dot);
            }
        } else {
            let subMap = new Map();
            subMap.set(optStr, dot);
            this.mapRedDot.set(info.id, subMap);
        }
        // 监听指定 id 的红点
        dot.on(c2f.RedDot.Event.EVENT_NEED_UPDATE, this.onEventToUpdate, this);
        dot.on(c2f.RedDot.Event.EVENT_ADD_DISPLAY, this.onEventAddDisplay, this);
        dot.on(c2f.RedDot.Event.EVENT_REMOVE_DISPLAY, this.onEventRemovedDisplay, this);
        return dot;
    }

    /**
     * 红点设置父节点
     * @param {RedPoint} dot
     */
    private setRedDotParent<Options>(dot: c2f.RedDot, parentOpt: Options) {
        let parent: c2f.RedDot = null;
        let parOpt = this.getOptStr(parentOpt);
        let parMap = this.mapRedDot.get(dot.cfg.parent);
        if (parMap) {
            parent = parMap.get(parOpt);
        }
        if (!parent) {
            if (dot.id !== this.root.id) {
                console.error(`RedDotMgr-> ${dot.id} 没有父节点`);
            }
            return;
        }
        if (dot.id === parent.id) {
            console.warn(`RedDotMgr-> ${dot.id} 无法设置自己为自己的父节点`);
            return;
        }
        parent.addChild(dot);
    }

    /**
     * 给指定红点设置显示节点
     * @param {number} id
     * @param {cc.Node} container
     * @param [selfOpt=null]  自身红点参数
     * @param [parentOpt=null] 父节点红点参数
     * @param [tmpUpdateCb=null] 本地刷新函数·仅用于界面内临时红点·谨慎使用
     */
    public setDisplayProxy<Options>(id: number, container: cc.Node, selfOpt: Options = null, parentOpt: Options = null, tmpUpdateCb: Function = null) {
        if (!container || !container.isValid) {
            console.error(`RedDotMgr-> 红点宿主节点错误`);
            return;
        }
        let mapSubDot = this.mapRedDot.get(id);
        if (!mapSubDot) {
            mapSubDot = new Map();
            this.mapRedDot.set(id, mapSubDot);
        }
        let dotKey = new c2f.DotKey(id, selfOpt);
        const optStr = this.getOptStr(selfOpt)
        let redDot = mapSubDot.get(optStr);
        //混合参数的dot可能没在dotMap中，需创建
        if (!redDot) {
            let cfg = this.mapCfg.get(id);
            if (!cfg) {
                console.error(`RedDotMgr-> 没有指定红点配置 ${id}`);
                return;
            }
            redDot = this.createRedDot(cfg, selfOpt);
            this.setRedDotParent(redDot, parentOpt);
        }

        let oriKey: c2f.DotKey = null;
        let dstDisplay: c2f.RedDotComp = null;
        let exists = c2f.utils.view.getChildrenByComponent(container, c2f.RedDotComp);
        if (exists && exists.length > 0) {
            let exDisplay = exists[0];
            oriKey = exDisplay.getDotKey();
            let compInDot = redDot.hasDisplay(exDisplay)
            if (compInDot && oriKey.toString() == dotKey.toString()) {
                this.addPreupdateRedDot(redDot, false);
                return;
            } else {
                exDisplay.node.parent = container;
                dstDisplay = exDisplay;
            }
        } else {
            let newNode = c2f.res.instantiate(this.dotPrefab, container);
            newNode.parent = container;
            newNode.zIndex = 99;
            dstDisplay = newNode.getComponent(c2f.RedDotComp);
        }
        if (dstDisplay) {
            dstDisplay.setShowType(redDot.showType);
            dstDisplay.setPosOffset(redDot.offset);
            dstDisplay.amendDotPos();
            dstDisplay.setDotKey(redDot.key);
            dstDisplay.updateCount(redDot.count);
            dstDisplay.setDisplay(redDot.enabled && redDot.count > 0); // 红点启用并且数量大于0
            redDot.tmpUpdateHandler = tmpUpdateCb;
            redDot.addDisplay(dstDisplay);
            if (oriKey) {
                this.removeDisplayByKey(oriKey, dstDisplay);
            }
        }
        this.addPreupdateRedDot(redDot, false);
    }

    /**
     * 设置请求更新接口
     * @param {IRedDotRequestUpdate} funcRequestUpdate
     */
    public setRedDotHandlers(funcRequestUpdate: IRedDotRequestUpdate, funcCheckUnlock: HandlerModuleIsUnlock) {
        this.funcRedDotRequestUpdate = funcRequestUpdate;
        this.funcModuleIsUnlock = funcCheckUnlock;
        if (funcRequestUpdate && this.mapRedDot.size > 0) {
            this.refreshAllRedDot();
        }
    }



    /**
     * 直接设置指定红点的计数
     * @param {number} id
     * @param {number} count
     */
    public setCount<Options>(id: number, opt: Options, count: number) {
        let redDot = this.getRedDot(id, opt);
        if (redDot) {
            redDot.setCount(count);
        } else {
            console.warn(`RedDotMgr-> setCount 没有找到指定红点: ${id}, ${opt}`);
        }
    }

    /** 立即将预更新列表中的刷新了 */
    private immediateUpdatePreList() {
        this.mapPreUpdate.forEach((subMap, id) => {
            subMap.forEach((fullTree, k) => {
                let redDot = this.getRedDotByIdKey(id, k);
                if (redDot) {
                    this.refreshRedDot(redDot, fullTree);
                    redDot.toRefreshParent();
                }
            })
            subMap.clear();
        });
        this.mapPreUpdate.clear();
    }

    /** 添加预更新的红点·有红点实体且可见时的才更新 */
    private addPreupdateRedDot(dot: c2f.RedDot, fullTree = false) {
        let subMap = this.mapPreUpdate.get(dot.key.id);
        if (!subMap) {
            subMap = new Map();
            this.mapPreUpdate.set(dot.key.id, subMap);
        }
        const optStr = dot.key.getOptStr();
        if (subMap.has(optStr)) {
            let param = subMap.get(optStr);
            if (param != fullTree) {
                subMap.set(optStr, param || fullTree);
            }
            return;
        }
        subMap.set(optStr, fullTree);
        cc.director.once(cc.Director.EVENT_AFTER_UPDATE, this.immediateUpdatePreList, this);
    }

    /** 更新所有红点，性能消耗较大 */
    public refreshAllRedDot() {
        if (!this.funcRedDotRequestUpdate) {
            console.warn(`RedDotMgr-> 没有设置红点更新方法`);
            return;
        }
        // 修改为 update 后更新
        this.addPreupdateRedDot(this.root, true);
    }

    /** 更新home点 */
    public refreshRedDotById(id: number) {
        if (!this.funcRedDotRequestUpdate) {
            console.warn(`RedDotMgr-> 没有设置红点更新方法，无法更新红点 [${id}]`);
            return;
        }
        let mapRedDot = this.mapRedDot.get(id);
        if (!mapRedDot) {
            return;
        }
        mapRedDot.forEach((v, k) => {
            this.addPreupdateRedDot(v, false);
        })
    }

    /**
     * 主动更新某个红点
     * @param {number} id  红点id
     * @param {boolean} [fullTree = false]  是否更新当前红点下所有子节点
     */
    public refreshRedDotByKey(key: c2f.DotKey, fullTree: boolean = false) {
        if (!this.funcRedDotRequestUpdate) {
            console.warn(`RedDotMgr-> 没有设置红点更新方法，无法更新红点 [${key.id}]`);
            return;
        }
        let dot = this.getRedDot(key.id, key.opt);
        if (!dot) {
            console.warn(`RedDotMgr-> 没有找到指定红点: ${key}`);
            return;
        }
        // 根节点 和 数字显示的红点 必须检测所有子节点
        if (dot.showType === c2f.RedDot.ShowType.Number || key.id === this.root.id) {
            fullTree = true;
        }
        // 修改为 update 后更新
        this.addPreupdateRedDot(dot, fullTree);
    }

    /** 红点是否解锁 */
    private checkRedDotIsUnlock(dotId: number) {
        let isUnlock = true;
        if (this.funcModuleIsUnlock) {
            let checkId = dotId;
            while (checkId) {
                let breakCheck = false;
                let conf = this.mapCfg.get(checkId);
                if (conf) {
                    let ret = this.funcModuleIsUnlock(conf.moduleId, conf.id);
                    if (ret) {
                        checkId = conf.parent;
                    } else {
                        isUnlock = false;
                        breakCheck = true;
                    }
                } else {
                    breakCheck = true;
                }
                if (breakCheck) {
                    break;
                }
            }
        }
        return isUnlock;
    }

    /**
     * 更新红点，递归
     * @param {RedDot} redDot
     * @param {boolean} [fullTree=false]
     */
    private refreshRedDot(redDot: c2f.RedDot, fullTree: boolean = false): boolean {
        if (!redDot) {
            return false;
        }
        let refresh = false;
        if (redDot.isLeaf()) {
            let count = 0;
            if (redDot.tmpUpdateHandler) {
                count = redDot.tmpUpdateHandler(redDot.cfg.parent, redDot.id, redDot.options);
            } else {
                let isUnlock = this.checkRedDotIsUnlock(redDot.cfg.id);
                if (isUnlock) {
                    count = this.funcRedDotRequestUpdate.requestUpdate(redDot.cfg.parent, redDot.id, redDot.options);
                }
            }
            if (count >= 0) {
                redDot.setCount(count);
            }
            refresh = count > 0;
        } else {
            for (let i = 0; i < redDot.children.length; i++) {
                const child = redDot.children[i];
                let check = this.refreshRedDot(child, fullTree);
                // 在不是检查整棵树的情况下，只要检查到有红点就停止检测
                if (check) {
                    refresh = true;
                    if (!fullTree) {
                        break;
                    }
                }
            }
            redDot.toRefresh();
        }
        return refresh;
    }

    /**
     * 销毁指定红点RedDot数据
     * @param {number} id
     * @param {Options} opt
     */
    public destroyRedDot<Options>(id: number, opt: Options) {
        let mapSub = this.mapRedDot.get(id);
        if (!mapSub) {
            return;
        }
        let optStr = this.getOptStr(opt);
        if (mapSub.has(optStr)) {
            let dot = mapSub.get(optStr);
            dot.destroy();
            mapSub.delete(optStr);
            if (mapSub.size <= 0) {
                this.mapRedDot.delete(id);
            }
        }
    }

    /** 移除组件映射数据：红点组件onDestroy时同步清除Display数据 */
    public deleteDataByCompDestory(dotKey: c2f.DotKey, dotComp: c2f.RedDotComp) {
        let mapSub = this.mapRedDot.get(dotKey.id);
        if (!mapSub) {
            return;
        }
        let optStr = this.getOptStr(dotKey.opt);
        if (mapSub.has(optStr)) {
            let dot = mapSub.get(optStr);
            dot.deleteDisplayDataOnly(dotComp);
        }
    }

    /** 移除小红点组件及Display数据 */
    public removeDisplayByKey(dotKey: c2f.DotKey, dotComp: c2f.RedDotComp) {
        let mapSub = this.mapRedDot.get(dotKey.id);
        if (mapSub) {
            let optStr = this.getOptStr(dotKey.opt);
            if (mapSub.has(optStr)) {
                let dot = mapSub.get(optStr);
                dot.deleteDisplayDataOnly(dotComp);
            } else {
                cc.warn('dont find in mapRedDot by optStr:', dotKey, optStr);
            }
        } else {
            cc.warn('dont find in mapRedDot by id', dotKey.id);
        }
    }

    /// ---------------- 事件响应 ------------------------>>>
    /** 刷新某ID红点 */
    private onEventToUpdate(event: string, ...params) {
        if (params.length <= 0) {
            return;
        }
        let key: c2f.DotKey = params[0];
        this.refreshRedDotByKey(key);
    }

    /** 给某ID红点绑定外观节点 */
    private onEventAddDisplay(event: string, ...params) {
        if (params.length <= 1) {
            return;
        }
        let key: c2f.DotKey = params[0];
        let container = params[1];
        this.setDisplayProxy(key.id, container, key.opt, null);
    }

    /** 删除RedDot数据 */
    private onEventRemovedDisplay(event: string, ...params) {
        if (params.length <= 0) {
            return;
        }
        let key: c2f.DotKey = params[0];
        let redDot = this.getRedDot(key.id, key.opt);
        if (!redDot) {
            return;
        }
        if (redDot.isLeaf() && redDot.getDisplayCnt() <= 0 && key.getOptStr() != 'null') {
            this.destroyRedDot(key.id, key.opt);
        }
    }

    /// ---------------- 事件响应 ------------------------<<<


    private static _instance: RedDotMgr = null
    public static getInstance(): RedDotMgr {
        if (!this._instance) {
            this._instance = new RedDotMgr();
        }
        return this._instance;
    }
}

declare global {
    interface IC2F {
        dotMgr: RedDotMgr;
    }
}

c2f.dotMgr = RedDotMgr.getInstance();
export { };