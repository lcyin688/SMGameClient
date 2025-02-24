"use strict";
cc._RF.push(module, 'abf58cFBpNFsai7TiQV68NX', 'RedDotMgr');
// c2f-framework/redDot/RedDotMgr.ts

"use strict";
/** 红点管理 */
Object.defineProperty(exports, "__esModule", { value: true });
var RedDotMgr = /** @class */ (function () {
    function RedDotMgr() {
        /** 根节点 */
        this.root = null;
        /** 配置 */
        this.mapCfg = null;
        /** ID -> {optStr -> RedDot}*/
        this.mapRedDot = null;
        /** 刷新回调 */
        this.funcRedDotRequestUpdate = null;
        /** 解锁判断 */
        this.funcModuleIsUnlock = null;
        /** ID -> {optStr ->boolean} 存储一帧结束后要更新的红点 */
        this.mapPreUpdate = null;
        //红点预制体
        this._dotPrefab = null;
        this.mapRedDot = new Map();
        this.mapPreUpdate = new Map();
        this.mapCfg = new Map();
    }
    Object.defineProperty(RedDotMgr.prototype, "dotPrefab", {
        get: function () {
            return this._dotPrefab;
        },
        set: function (value) {
            if (this._dotPrefab == value) {
                return;
            }
            if (this._dotPrefab) {
                this._dotPrefab.decRef();
            }
            this._dotPrefab = value;
            this._dotPrefab.addRef();
        },
        enumerable: false,
        configurable: true
    });
    RedDotMgr.prototype.clear = function () {
        var _a;
        this.mapRedDot.forEach(function (v, k) {
            v.forEach(function (vv, kk) {
                vv.clear();
            });
            v.clear();
        });
        this.mapRedDot.clear();
        this.mapPreUpdate.clear();
        (_a = this.root) === null || _a === void 0 ? void 0 : _a.destroy();
        if (this._dotPrefab) {
            this._dotPrefab.decRef();
            this._dotPrefab = null;
        }
    };
    RedDotMgr.prototype.getRedCfg = function (data) {
        var cfg = {
            id: data.length > 0 ? data[0] : 0,
            moduleId: data.length > 1 ? data[1] : 0,
            name: data.length > 2 ? data[2] : '',
            parent: data.length > 3 ? data[3] : 0,
            showType: data.length > 4 ? data[4] : 1,
            offsetX: data.length > 5 ? data[5] : 0,
            offsetY: data.length > 6 ? data[6] : 0
        };
        return cfg;
    };
    RedDotMgr.prototype.getOptStr = function (opt) {
        if (!opt) {
            return 'null';
        }
        else {
            return JSON.stringify(opt);
        }
    };
    RedDotMgr.prototype.getRedDot = function (id, opt) {
        var ret = null;
        var mapTemp = this.mapRedDot.get(id);
        if (mapTemp) {
            var optStr = this.getOptStr(opt);
            ret = mapTemp.get(optStr);
        }
        return ret;
    };
    RedDotMgr.prototype.getRedDotByIdKey = function (id, optStr) {
        var ret = null;
        var mapTemp = this.mapRedDot.get(id);
        if (mapTemp) {
            ret = mapTemp.get(optStr);
        }
        return ret;
    };
    /** 初始化红点配置信息 */
    RedDotMgr.prototype.initWithData = function (data, rootId, prefab) {
        var _this = this;
        var _a;
        if (this.mapRedDot.size > 0) {
            console.warn("RedDotMgr-> \u8BF7\u4E0D\u8981\u91CD\u590D\u8C03\u7528\u7EA2\u70B9\u521D\u59CB\u5316");
            return;
        }
        if (!(data === null || data === void 0 ? void 0 : data.length)) {
            console.warn("RedDotMgr-> \u7EA2\u70B9\u521D\u59CB\u5316\u5931\u8D25\uFF0C\u6570\u636E\u4E0D\u5B58\u5728");
            return;
        }
        this.clear();
        this.dotPrefab = prefab;
        for (var i = 0; i < data.length; i++) {
            var info = this.getRedCfg(data[i]);
            this.mapCfg.set(info.id, info);
            this.createRedDot(info, null);
        }
        // 设置根节点，如果没有被创建，则创建一个默认的   
        this.root = (_a = this.getRedDot(rootId, null)) !== null && _a !== void 0 ? _a : this.createRedDot({
            id: rootId,
            moduleId: 0,
            name: 'main',
            parent: 0,
            showType: c2f.RedDot.ShowType.Normal,
            offsetX: 0,
            offsetY: 0
        }, null);
        // 对每一个节点设置 父节点
        this.mapRedDot.forEach(function (mapSub) {
            mapSub.forEach(function (v, k) {
                _this.setRedDotParent(v, null);
            });
        });
        // 进行一次全部节点的更新
        if (this.funcRedDotRequestUpdate) {
            this.refreshAllRedDot();
        }
    };
    /**
     * 创建红点
     * @template Options
     * @param {RedDotDef} info
     * @param {Options} options 增加一个选项，在更新的时候会传给更新函数
     */
    RedDotMgr.prototype.createRedDot = function (info, options) {
        if (!info) {
            return null;
        }
        var dot = new c2f.RedDot(info, options);
        var optStr = dot.key.getOptStr();
        var find = this.mapRedDot.get(info.id);
        if (find) {
            if (find.get(optStr)) {
                console.warn("RedDotMgr-> [" + dot.id + "][" + optStr + "] \u91CD\u590D\u521B\u5EFA");
                return null;
            }
            else {
                find.set(optStr, dot);
            }
        }
        else {
            var subMap = new Map();
            subMap.set(optStr, dot);
            this.mapRedDot.set(info.id, subMap);
        }
        // 监听指定 id 的红点
        dot.on(c2f.RedDot.Event.EVENT_NEED_UPDATE, this.onEventToUpdate, this);
        dot.on(c2f.RedDot.Event.EVENT_ADD_DISPLAY, this.onEventAddDisplay, this);
        dot.on(c2f.RedDot.Event.EVENT_REMOVE_DISPLAY, this.onEventRemovedDisplay, this);
        return dot;
    };
    /**
     * 红点设置父节点
     * @param {RedPoint} dot
     */
    RedDotMgr.prototype.setRedDotParent = function (dot, parentOpt) {
        var parent = null;
        var parOpt = this.getOptStr(parentOpt);
        var parMap = this.mapRedDot.get(dot.cfg.parent);
        if (parMap) {
            parent = parMap.get(parOpt);
        }
        if (!parent) {
            if (dot.id !== this.root.id) {
                console.error("RedDotMgr-> " + dot.id + " \u6CA1\u6709\u7236\u8282\u70B9");
            }
            return;
        }
        if (dot.id === parent.id) {
            console.warn("RedDotMgr-> " + dot.id + " \u65E0\u6CD5\u8BBE\u7F6E\u81EA\u5DF1\u4E3A\u81EA\u5DF1\u7684\u7236\u8282\u70B9");
            return;
        }
        parent.addChild(dot);
    };
    /**
     * 给指定红点设置显示节点
     * @param {number} id
     * @param {cc.Node} container
     * @param [selfOpt=null]  自身红点参数
     * @param [parentOpt=null] 父节点红点参数
     * @param [tmpUpdateCb=null] 本地刷新函数·仅用于界面内临时红点·谨慎使用
     */
    RedDotMgr.prototype.setDisplayProxy = function (id, container, selfOpt, parentOpt, tmpUpdateCb) {
        if (selfOpt === void 0) { selfOpt = null; }
        if (parentOpt === void 0) { parentOpt = null; }
        if (tmpUpdateCb === void 0) { tmpUpdateCb = null; }
        if (!container || !container.isValid) {
            console.error("RedDotMgr-> \u7EA2\u70B9\u5BBF\u4E3B\u8282\u70B9\u9519\u8BEF");
            return;
        }
        var mapSubDot = this.mapRedDot.get(id);
        if (!mapSubDot) {
            mapSubDot = new Map();
            this.mapRedDot.set(id, mapSubDot);
        }
        var dotKey = new c2f.DotKey(id, selfOpt);
        var optStr = this.getOptStr(selfOpt);
        var redDot = mapSubDot.get(optStr);
        //混合参数的dot可能没在dotMap中，需创建
        if (!redDot) {
            var cfg = this.mapCfg.get(id);
            if (!cfg) {
                console.error("RedDotMgr-> \u6CA1\u6709\u6307\u5B9A\u7EA2\u70B9\u914D\u7F6E " + id);
                return;
            }
            redDot = this.createRedDot(cfg, selfOpt);
            this.setRedDotParent(redDot, parentOpt);
        }
        var oriKey = null;
        var dstDisplay = null;
        var exists = c2f.utils.view.getChildrenByComponent(container, c2f.RedDotComp);
        if (exists && exists.length > 0) {
            var exDisplay = exists[0];
            oriKey = exDisplay.getDotKey();
            var compInDot = redDot.hasDisplay(exDisplay);
            if (compInDot && oriKey.toString() == dotKey.toString()) {
                this.addPreupdateRedDot(redDot, false);
                return;
            }
            else {
                exDisplay.node.parent = container;
                dstDisplay = exDisplay;
            }
        }
        else {
            var newNode = c2f.res.instantiate(this.dotPrefab, container);
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
    };
    /**
     * 设置请求更新接口
     * @param {IRedDotRequestUpdate} funcRequestUpdate
     */
    RedDotMgr.prototype.setRedDotHandlers = function (funcRequestUpdate, funcCheckUnlock) {
        this.funcRedDotRequestUpdate = funcRequestUpdate;
        this.funcModuleIsUnlock = funcCheckUnlock;
        if (funcRequestUpdate && this.mapRedDot.size > 0) {
            this.refreshAllRedDot();
        }
    };
    /**
     * 直接设置指定红点的计数
     * @param {number} id
     * @param {number} count
     */
    RedDotMgr.prototype.setCount = function (id, opt, count) {
        var redDot = this.getRedDot(id, opt);
        if (redDot) {
            redDot.setCount(count);
        }
        else {
            console.warn("RedDotMgr-> setCount \u6CA1\u6709\u627E\u5230\u6307\u5B9A\u7EA2\u70B9: " + id + ", " + opt);
        }
    };
    /** 立即将预更新列表中的刷新了 */
    RedDotMgr.prototype.immediateUpdatePreList = function () {
        var _this = this;
        this.mapPreUpdate.forEach(function (subMap, id) {
            subMap.forEach(function (fullTree, k) {
                var redDot = _this.getRedDotByIdKey(id, k);
                if (redDot) {
                    _this.refreshRedDot(redDot, fullTree);
                    redDot.toRefreshParent();
                }
            });
            subMap.clear();
        });
        this.mapPreUpdate.clear();
    };
    /** 添加预更新的红点·有红点实体且可见时的才更新 */
    RedDotMgr.prototype.addPreupdateRedDot = function (dot, fullTree) {
        if (fullTree === void 0) { fullTree = false; }
        var subMap = this.mapPreUpdate.get(dot.key.id);
        if (!subMap) {
            subMap = new Map();
            this.mapPreUpdate.set(dot.key.id, subMap);
        }
        var optStr = dot.key.getOptStr();
        if (subMap.has(optStr)) {
            var param = subMap.get(optStr);
            if (param != fullTree) {
                subMap.set(optStr, param || fullTree);
            }
            return;
        }
        subMap.set(optStr, fullTree);
        cc.director.once(cc.Director.EVENT_AFTER_UPDATE, this.immediateUpdatePreList, this);
    };
    /** 更新所有红点，性能消耗较大 */
    RedDotMgr.prototype.refreshAllRedDot = function () {
        if (!this.funcRedDotRequestUpdate) {
            console.warn("RedDotMgr-> \u6CA1\u6709\u8BBE\u7F6E\u7EA2\u70B9\u66F4\u65B0\u65B9\u6CD5");
            return;
        }
        // 修改为 update 后更新
        this.addPreupdateRedDot(this.root, true);
    };
    /** 更新home点 */
    RedDotMgr.prototype.refreshRedDotById = function (id) {
        var _this = this;
        if (!this.funcRedDotRequestUpdate) {
            console.warn("RedDotMgr-> \u6CA1\u6709\u8BBE\u7F6E\u7EA2\u70B9\u66F4\u65B0\u65B9\u6CD5\uFF0C\u65E0\u6CD5\u66F4\u65B0\u7EA2\u70B9 [" + id + "]");
            return;
        }
        var mapRedDot = this.mapRedDot.get(id);
        if (!mapRedDot) {
            return;
        }
        mapRedDot.forEach(function (v, k) {
            _this.addPreupdateRedDot(v, false);
        });
    };
    /**
     * 主动更新某个红点
     * @param {number} id  红点id
     * @param {boolean} [fullTree = false]  是否更新当前红点下所有子节点
     */
    RedDotMgr.prototype.refreshRedDotByKey = function (key, fullTree) {
        if (fullTree === void 0) { fullTree = false; }
        if (!this.funcRedDotRequestUpdate) {
            console.warn("RedDotMgr-> \u6CA1\u6709\u8BBE\u7F6E\u7EA2\u70B9\u66F4\u65B0\u65B9\u6CD5\uFF0C\u65E0\u6CD5\u66F4\u65B0\u7EA2\u70B9 [" + key.id + "]");
            return;
        }
        var dot = this.getRedDot(key.id, key.opt);
        if (!dot) {
            console.warn("RedDotMgr-> \u6CA1\u6709\u627E\u5230\u6307\u5B9A\u7EA2\u70B9: " + key);
            return;
        }
        // 根节点 和 数字显示的红点 必须检测所有子节点
        if (dot.showType === c2f.RedDot.ShowType.Number || key.id === this.root.id) {
            fullTree = true;
        }
        // 修改为 update 后更新
        this.addPreupdateRedDot(dot, fullTree);
    };
    /** 红点是否解锁 */
    RedDotMgr.prototype.checkRedDotIsUnlock = function (dotId) {
        var isUnlock = true;
        if (this.funcModuleIsUnlock) {
            var checkId = dotId;
            while (checkId) {
                var breakCheck = false;
                var conf = this.mapCfg.get(checkId);
                if (conf) {
                    var ret = this.funcModuleIsUnlock(conf.moduleId, conf.id);
                    if (ret) {
                        checkId = conf.parent;
                    }
                    else {
                        isUnlock = false;
                        breakCheck = true;
                    }
                }
                else {
                    breakCheck = true;
                }
                if (breakCheck) {
                    break;
                }
            }
        }
        return isUnlock;
    };
    /**
     * 更新红点，递归
     * @param {RedDot} redDot
     * @param {boolean} [fullTree=false]
     */
    RedDotMgr.prototype.refreshRedDot = function (redDot, fullTree) {
        if (fullTree === void 0) { fullTree = false; }
        if (!redDot) {
            return false;
        }
        var refresh = false;
        if (redDot.isLeaf()) {
            var count = 0;
            if (redDot.tmpUpdateHandler) {
                count = redDot.tmpUpdateHandler(redDot.cfg.parent, redDot.id, redDot.options);
            }
            else {
                var isUnlock = this.checkRedDotIsUnlock(redDot.cfg.id);
                if (isUnlock) {
                    count = this.funcRedDotRequestUpdate.requestUpdate(redDot.cfg.parent, redDot.id, redDot.options);
                }
            }
            if (count >= 0) {
                redDot.setCount(count);
            }
            refresh = count > 0;
        }
        else {
            for (var i = 0; i < redDot.children.length; i++) {
                var child = redDot.children[i];
                var check = this.refreshRedDot(child, fullTree);
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
    };
    /**
     * 销毁指定红点RedDot数据
     * @param {number} id
     * @param {Options} opt
     */
    RedDotMgr.prototype.destroyRedDot = function (id, opt) {
        var mapSub = this.mapRedDot.get(id);
        if (!mapSub) {
            return;
        }
        var optStr = this.getOptStr(opt);
        if (mapSub.has(optStr)) {
            var dot = mapSub.get(optStr);
            dot.destroy();
            mapSub.delete(optStr);
            if (mapSub.size <= 0) {
                this.mapRedDot.delete(id);
            }
        }
    };
    /** 移除组件映射数据：红点组件onDestroy时同步清除Display数据 */
    RedDotMgr.prototype.deleteDataByCompDestory = function (dotKey, dotComp) {
        var mapSub = this.mapRedDot.get(dotKey.id);
        if (!mapSub) {
            return;
        }
        var optStr = this.getOptStr(dotKey.opt);
        if (mapSub.has(optStr)) {
            var dot = mapSub.get(optStr);
            dot.deleteDisplayDataOnly(dotComp);
        }
    };
    /** 移除小红点组件及Display数据 */
    RedDotMgr.prototype.removeDisplayByKey = function (dotKey, dotComp) {
        var mapSub = this.mapRedDot.get(dotKey.id);
        if (mapSub) {
            var optStr = this.getOptStr(dotKey.opt);
            if (mapSub.has(optStr)) {
                var dot = mapSub.get(optStr);
                dot.deleteDisplayDataOnly(dotComp);
            }
            else {
                cc.warn('dont find in mapRedDot by optStr:', dotKey, optStr);
            }
        }
        else {
            cc.warn('dont find in mapRedDot by id', dotKey.id);
        }
    };
    /// ---------------- 事件响应 ------------------------>>>
    /** 刷新某ID红点 */
    RedDotMgr.prototype.onEventToUpdate = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (params.length <= 0) {
            return;
        }
        var key = params[0];
        this.refreshRedDotByKey(key);
    };
    /** 给某ID红点绑定外观节点 */
    RedDotMgr.prototype.onEventAddDisplay = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (params.length <= 1) {
            return;
        }
        var key = params[0];
        var container = params[1];
        this.setDisplayProxy(key.id, container, key.opt, null);
    };
    /** 删除RedDot数据 */
    RedDotMgr.prototype.onEventRemovedDisplay = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (params.length <= 0) {
            return;
        }
        var key = params[0];
        var redDot = this.getRedDot(key.id, key.opt);
        if (!redDot) {
            return;
        }
        if (redDot.isLeaf() && redDot.getDisplayCnt() <= 0 && key.getOptStr() != 'null') {
            this.destroyRedDot(key.id, key.opt);
        }
    };
    RedDotMgr.getInstance = function () {
        if (!this._instance) {
            this._instance = new RedDotMgr();
        }
        return this._instance;
    };
    /// ---------------- 事件响应 ------------------------<<<
    RedDotMgr._instance = null;
    return RedDotMgr;
}());
c2f.dotMgr = RedDotMgr.getInstance();

cc._RF.pop();