
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/redDot/RedDotMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL3JlZERvdC9SZWREb3RNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFdBQVc7O0FBRVg7SUE2Qkk7UUE1QkEsVUFBVTtRQUNILFNBQUksR0FBZSxJQUFJLENBQUM7UUFDL0IsU0FBUztRQUNDLFdBQU0sR0FBMkIsSUFBSSxDQUFDO1FBQ2hELDhCQUE4QjtRQUNwQixjQUFTLEdBQXlDLElBQUksQ0FBQztRQUNqRSxXQUFXO1FBQ0QsNEJBQXVCLEdBQXlCLElBQUksQ0FBQztRQUMvRCxXQUFXO1FBQ0QsdUJBQWtCLEdBQTBCLElBQUksQ0FBQztRQUMzRCw2Q0FBNkM7UUFDbkMsaUJBQVksR0FBc0MsSUFBSSxDQUFDO1FBQ2pFLE9BQU87UUFDRyxlQUFVLEdBQWMsSUFBSSxDQUFDO1FBZ0JuQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBbEJELHNCQUFXLGdDQUFTO2FBVXBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFaRCxVQUFxQixLQUFnQjtZQUNqQyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksS0FBSyxFQUFFO2dCQUMxQixPQUFPO2FBQ1Y7WUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDNUI7WUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBV00seUJBQUssR0FBWjs7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFD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QU1hLHFCQUFXLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFURCxxREFBcUQ7SUFHdEMsbUJBQVMsR0FBYyxJQUFJLENBQUE7SUFPOUMsZ0JBQUM7Q0FuaEJELEFBbWhCQyxJQUFBO0FBUUQsR0FBRyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKiog57qi54K5566h55CGICovXG5cbmNsYXNzIFJlZERvdE1nciB7XG4gICAgLyoqIOagueiKgueCuSAqL1xuICAgIHB1YmxpYyByb290OiBjMmYuUmVkRG90ID0gbnVsbDtcbiAgICAvKiog6YWN572uICovXG4gICAgcHJvdGVjdGVkIG1hcENmZzogTWFwPG51bWJlciwgUmVkRG90RGVmPiA9IG51bGw7XG4gICAgLyoqIElEIC0+IHtvcHRTdHIgLT4gUmVkRG90fSovXG4gICAgcHJvdGVjdGVkIG1hcFJlZERvdDogTWFwPG51bWJlciwgTWFwPHN0cmluZywgYzJmLlJlZERvdD4+ID0gbnVsbDtcbiAgICAvKiog5Yi35paw5Zue6LCDICovXG4gICAgcHJvdGVjdGVkIGZ1bmNSZWREb3RSZXF1ZXN0VXBkYXRlOiBJUmVkRG90UmVxdWVzdFVwZGF0ZSA9IG51bGw7XG4gICAgLyoqIOino+mUgeWIpOaWrSAqL1xuICAgIHByb3RlY3RlZCBmdW5jTW9kdWxlSXNVbmxvY2s6IEhhbmRsZXJNb2R1bGVJc1VubG9jayA9IG51bGw7XG4gICAgLyoqIElEIC0+IHtvcHRTdHIgLT5ib29sZWFufSDlrZjlgqjkuIDluKfnu5PmnZ/lkI7opoHmm7TmlrDnmoTnuqLngrkgKi9cbiAgICBwcm90ZWN0ZWQgbWFwUHJlVXBkYXRlOiBNYXA8bnVtYmVyLCBNYXA8c3RyaW5nLCBib29sZWFuPj4gPSBudWxsO1xuICAgIC8v57qi54K56aKE5Yi25L2TXG4gICAgcHJvdGVjdGVkIF9kb3RQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgcHVibGljIHNldCBkb3RQcmVmYWIodmFsdWU6IGNjLlByZWZhYikge1xuICAgICAgICBpZiAodGhpcy5fZG90UHJlZmFiID09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2RvdFByZWZhYikge1xuICAgICAgICAgICAgdGhpcy5fZG90UHJlZmFiLmRlY1JlZigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2RvdFByZWZhYiA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9kb3RQcmVmYWIuYWRkUmVmKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZG90UHJlZmFiKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZG90UHJlZmFiO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1hcFJlZERvdCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5tYXBQcmVVcGRhdGUgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMubWFwQ2ZnID0gbmV3IE1hcCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tYXBSZWREb3QuZm9yRWFjaCgodiwgaykgPT4ge1xuICAgICAgICAgICAgdi5mb3JFYWNoKCh2diwga2spID0+IHtcbiAgICAgICAgICAgICAgICB2di5jbGVhcigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHYuY2xlYXIoKTtcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5tYXBSZWREb3QuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5tYXBQcmVVcGRhdGUuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yb290Py5kZXN0cm95KCk7XG4gICAgICAgIGlmICh0aGlzLl9kb3RQcmVmYWIpIHtcbiAgICAgICAgICAgIHRoaXMuX2RvdFByZWZhYi5kZWNSZWYoKTtcbiAgICAgICAgICAgIHRoaXMuX2RvdFByZWZhYiA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFJlZENmZyhkYXRhOiBhbnlbXSkge1xuICAgICAgICBsZXQgY2ZnOiBSZWREb3REZWYgPSB7XG4gICAgICAgICAgICBpZDogZGF0YS5sZW5ndGggPiAwID8gZGF0YVswXSA6IDAsXG4gICAgICAgICAgICBtb2R1bGVJZDogZGF0YS5sZW5ndGggPiAxID8gZGF0YVsxXSA6IDAsXG4gICAgICAgICAgICBuYW1lOiBkYXRhLmxlbmd0aCA+IDIgPyBkYXRhWzJdIDogJycsXG4gICAgICAgICAgICBwYXJlbnQ6IGRhdGEubGVuZ3RoID4gMyA/IGRhdGFbM10gOiAwLFxuICAgICAgICAgICAgc2hvd1R5cGU6IGRhdGEubGVuZ3RoID4gNCA/IGRhdGFbNF0gOiAxLFxuICAgICAgICAgICAgb2Zmc2V0WDogZGF0YS5sZW5ndGggPiA1ID8gZGF0YVs1XSA6IDAsXG4gICAgICAgICAgICBvZmZzZXRZOiBkYXRhLmxlbmd0aCA+IDYgPyBkYXRhWzZdIDogMFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjZmc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRPcHRTdHI8T3B0aW9ucz4ob3B0OiBPcHRpb25zKSB7XG4gICAgICAgIGlmICghb3B0KSB7XG4gICAgICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9wdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFJlZERvdDxPcHRpb25zPihpZDogbnVtYmVyLCBvcHQ6IE9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHJldDogYzJmLlJlZERvdCA9IG51bGw7XG4gICAgICAgIGxldCBtYXBUZW1wID0gdGhpcy5tYXBSZWREb3QuZ2V0KGlkKTtcbiAgICAgICAgaWYgKG1hcFRlbXApIHtcbiAgICAgICAgICAgIGxldCBvcHRTdHIgPSB0aGlzLmdldE9wdFN0cihvcHQpO1xuICAgICAgICAgICAgcmV0ID0gbWFwVGVtcC5nZXQob3B0U3RyKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSZWREb3RCeUlkS2V5KGlkOiBudW1iZXIsIG9wdFN0cjogc3RyaW5nKSB7XG4gICAgICAgIGxldCByZXQ6IGMyZi5SZWREb3QgPSBudWxsO1xuICAgICAgICBsZXQgbWFwVGVtcCA9IHRoaXMubWFwUmVkRG90LmdldChpZCk7XG4gICAgICAgIGlmIChtYXBUZW1wKSB7XG4gICAgICAgICAgICByZXQgPSBtYXBUZW1wLmdldChvcHRTdHIpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICAvKiog5Yid5aeL5YyW57qi54K56YWN572u5L+h5oGvICovXG4gICAgcHVibGljIGluaXRXaXRoRGF0YShkYXRhOiBhbnlbXSwgcm9vdElkOiBudW1iZXIsIHByZWZhYjogY2MuUHJlZmFiKSB7XG4gICAgICAgIGlmICh0aGlzLm1hcFJlZERvdC5zaXplID4gMCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBSZWREb3RNZ3ItPiDor7fkuI3opoHph43lpI3osIPnlKjnuqLngrnliJ3lp4vljJZgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRhdGE/Lmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBSZWREb3RNZ3ItPiDnuqLngrnliJ3lp4vljJblpLHotKXvvIzmlbDmja7kuI3lrZjlnKhgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZG90UHJlZmFiID0gcHJlZmFiO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMuZ2V0UmVkQ2ZnKGRhdGFbaV0pO1xuICAgICAgICAgICAgdGhpcy5tYXBDZmcuc2V0KGluZm8uaWQsIGluZm8pO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVSZWREb3QoaW5mbywgbnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDorr7nva7moLnoioLngrnvvIzlpoLmnpzmsqHmnInooqvliJvlu7rvvIzliJnliJvlu7rkuIDkuKrpu5jorqTnmoQgICBcbiAgICAgICAgdGhpcy5yb290ID0gdGhpcy5nZXRSZWREb3Qocm9vdElkLCBudWxsKSA/PyB0aGlzLmNyZWF0ZVJlZERvdChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogcm9vdElkLFxuICAgICAgICAgICAgICAgIG1vZHVsZUlkOiAwLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdtYWluJyxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IDAsXG4gICAgICAgICAgICAgICAgc2hvd1R5cGU6IGMyZi5SZWREb3QuU2hvd1R5cGUuTm9ybWFsLFxuICAgICAgICAgICAgICAgIG9mZnNldFg6IDAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0WTogMFxuICAgICAgICAgICAgfSwgbnVsbCk7XG5cbiAgICAgICAgLy8g5a+55q+P5LiA5Liq6IqC54K56K6+572uIOeItuiKgueCuVxuICAgICAgICB0aGlzLm1hcFJlZERvdC5mb3JFYWNoKChtYXBTdWIpID0+IHtcbiAgICAgICAgICAgIG1hcFN1Yi5mb3JFYWNoKCh2LCBrKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRSZWREb3RQYXJlbnQodiwgbnVsbCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgLy8g6L+b6KGM5LiA5qyh5YWo6YOo6IqC54K555qE5pu05pawXG4gICAgICAgIGlmICh0aGlzLmZ1bmNSZWREb3RSZXF1ZXN0VXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hBbGxSZWREb3QoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIm+W7uue6oueCuVxuICAgICAqIEB0ZW1wbGF0ZSBPcHRpb25zXG4gICAgICogQHBhcmFtIHtSZWREb3REZWZ9IGluZm9cbiAgICAgKiBAcGFyYW0ge09wdGlvbnN9IG9wdGlvbnMg5aKe5Yqg5LiA5Liq6YCJ6aG577yM5Zyo5pu05paw55qE5pe25YCZ5Lya5Lyg57uZ5pu05paw5Ye95pWwXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVSZWREb3Q8T3B0aW9ucz4oaW5mbzogUmVkRG90RGVmLCBvcHRpb25zOiBPcHRpb25zKSB7XG4gICAgICAgIGlmICghaW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRvdCA9IG5ldyBjMmYuUmVkRG90KGluZm8sIG9wdGlvbnMpO1xuICAgICAgICBjb25zdCBvcHRTdHIgPSBkb3Qua2V5LmdldE9wdFN0cigpO1xuICAgICAgICBsZXQgZmluZCA9IHRoaXMubWFwUmVkRG90LmdldChpbmZvLmlkKTtcbiAgICAgICAgaWYgKGZpbmQpIHtcbiAgICAgICAgICAgIGlmIChmaW5kLmdldChvcHRTdHIpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBSZWREb3RNZ3ItPiBbJHtkb3QuaWR9XVske29wdFN0cn1dIOmHjeWkjeWIm+W7umApO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaW5kLnNldChvcHRTdHIsIGRvdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgc3ViTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgc3ViTWFwLnNldChvcHRTdHIsIGRvdCk7XG4gICAgICAgICAgICB0aGlzLm1hcFJlZERvdC5zZXQoaW5mby5pZCwgc3ViTWFwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDnm5HlkKzmjIflrpogaWQg55qE57qi54K5XG4gICAgICAgIGRvdC5vbihjMmYuUmVkRG90LkV2ZW50LkVWRU5UX05FRURfVVBEQVRFLCB0aGlzLm9uRXZlbnRUb1VwZGF0ZSwgdGhpcyk7XG4gICAgICAgIGRvdC5vbihjMmYuUmVkRG90LkV2ZW50LkVWRU5UX0FERF9ESVNQTEFZLCB0aGlzLm9uRXZlbnRBZGREaXNwbGF5LCB0aGlzKTtcbiAgICAgICAgZG90Lm9uKGMyZi5SZWREb3QuRXZlbnQuRVZFTlRfUkVNT1ZFX0RJU1BMQVksIHRoaXMub25FdmVudFJlbW92ZWREaXNwbGF5LCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIGRvdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnuqLngrnorr7nva7niLboioLngrlcbiAgICAgKiBAcGFyYW0ge1JlZFBvaW50fSBkb3RcbiAgICAgKi9cbiAgICBwcml2YXRlIHNldFJlZERvdFBhcmVudDxPcHRpb25zPihkb3Q6IGMyZi5SZWREb3QsIHBhcmVudE9wdDogT3B0aW9ucykge1xuICAgICAgICBsZXQgcGFyZW50OiBjMmYuUmVkRG90ID0gbnVsbDtcbiAgICAgICAgbGV0IHBhck9wdCA9IHRoaXMuZ2V0T3B0U3RyKHBhcmVudE9wdCk7XG4gICAgICAgIGxldCBwYXJNYXAgPSB0aGlzLm1hcFJlZERvdC5nZXQoZG90LmNmZy5wYXJlbnQpO1xuICAgICAgICBpZiAocGFyTWFwKSB7XG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJNYXAuZ2V0KHBhck9wdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgICAgIGlmIChkb3QuaWQgIT09IHRoaXMucm9vdC5pZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFJlZERvdE1nci0+ICR7ZG90LmlkfSDmsqHmnInniLboioLngrlgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZG90LmlkID09PSBwYXJlbnQuaWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgUmVkRG90TWdyLT4gJHtkb3QuaWR9IOaXoOazleiuvue9ruiHquW3seS4uuiHquW3seeahOeItuiKgueCuWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudC5hZGRDaGlsZChkb3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOe7meaMh+Wumue6oueCueiuvue9ruaYvuekuuiKgueCuVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpZFxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gY29udGFpbmVyXG4gICAgICogQHBhcmFtIFtzZWxmT3B0PW51bGxdICDoh6rouqvnuqLngrnlj4LmlbBcbiAgICAgKiBAcGFyYW0gW3BhcmVudE9wdD1udWxsXSDniLboioLngrnnuqLngrnlj4LmlbBcbiAgICAgKiBAcGFyYW0gW3RtcFVwZGF0ZUNiPW51bGxdIOacrOWcsOWIt+aWsOWHveaVsMK35LuF55So5LqO55WM6Z2i5YaF5Li05pe257qi54K5wrfosKjmhY7kvb/nlKhcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0RGlzcGxheVByb3h5PE9wdGlvbnM+KGlkOiBudW1iZXIsIGNvbnRhaW5lcjogY2MuTm9kZSwgc2VsZk9wdDogT3B0aW9ucyA9IG51bGwsIHBhcmVudE9wdDogT3B0aW9ucyA9IG51bGwsIHRtcFVwZGF0ZUNiOiBGdW5jdGlvbiA9IG51bGwpIHtcbiAgICAgICAgaWYgKCFjb250YWluZXIgfHwgIWNvbnRhaW5lci5pc1ZhbGlkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBSZWREb3RNZ3ItPiDnuqLngrnlrr/kuLvoioLngrnplJnor69gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbWFwU3ViRG90ID0gdGhpcy5tYXBSZWREb3QuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCFtYXBTdWJEb3QpIHtcbiAgICAgICAgICAgIG1hcFN1YkRvdCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHRoaXMubWFwUmVkRG90LnNldChpZCwgbWFwU3ViRG90KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZG90S2V5ID0gbmV3IGMyZi5Eb3RLZXkoaWQsIHNlbGZPcHQpO1xuICAgICAgICBjb25zdCBvcHRTdHIgPSB0aGlzLmdldE9wdFN0cihzZWxmT3B0KVxuICAgICAgICBsZXQgcmVkRG90ID0gbWFwU3ViRG90LmdldChvcHRTdHIpO1xuICAgICAgICAvL+a3t+WQiOWPguaVsOeahGRvdOWPr+iDveayoeWcqGRvdE1hcOS4re+8jOmcgOWIm+W7ulxuICAgICAgICBpZiAoIXJlZERvdCkge1xuICAgICAgICAgICAgbGV0IGNmZyA9IHRoaXMubWFwQ2ZnLmdldChpZCk7XG4gICAgICAgICAgICBpZiAoIWNmZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFJlZERvdE1nci0+IOayoeacieaMh+Wumue6oueCuemFjee9riAke2lkfWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlZERvdCA9IHRoaXMuY3JlYXRlUmVkRG90KGNmZywgc2VsZk9wdCk7XG4gICAgICAgICAgICB0aGlzLnNldFJlZERvdFBhcmVudChyZWREb3QsIHBhcmVudE9wdCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb3JpS2V5OiBjMmYuRG90S2V5ID0gbnVsbDtcbiAgICAgICAgbGV0IGRzdERpc3BsYXk6IGMyZi5SZWREb3RDb21wID0gbnVsbDtcbiAgICAgICAgbGV0IGV4aXN0cyA9IGMyZi51dGlscy52aWV3LmdldENoaWxkcmVuQnlDb21wb25lbnQoY29udGFpbmVyLCBjMmYuUmVkRG90Q29tcCk7XG4gICAgICAgIGlmIChleGlzdHMgJiYgZXhpc3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBleERpc3BsYXkgPSBleGlzdHNbMF07XG4gICAgICAgICAgICBvcmlLZXkgPSBleERpc3BsYXkuZ2V0RG90S2V5KCk7XG4gICAgICAgICAgICBsZXQgY29tcEluRG90ID0gcmVkRG90Lmhhc0Rpc3BsYXkoZXhEaXNwbGF5KVxuICAgICAgICAgICAgaWYgKGNvbXBJbkRvdCAmJiBvcmlLZXkudG9TdHJpbmcoKSA9PSBkb3RLZXkudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkUHJldXBkYXRlUmVkRG90KHJlZERvdCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhEaXNwbGF5Lm5vZGUucGFyZW50ID0gY29udGFpbmVyO1xuICAgICAgICAgICAgICAgIGRzdERpc3BsYXkgPSBleERpc3BsYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmV3Tm9kZSA9IGMyZi5yZXMuaW5zdGFudGlhdGUodGhpcy5kb3RQcmVmYWIsIGNvbnRhaW5lcik7XG4gICAgICAgICAgICBuZXdOb2RlLnBhcmVudCA9IGNvbnRhaW5lcjtcbiAgICAgICAgICAgIG5ld05vZGUuekluZGV4ID0gOTk7XG4gICAgICAgICAgICBkc3REaXNwbGF5ID0gbmV3Tm9kZS5nZXRDb21wb25lbnQoYzJmLlJlZERvdENvbXApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkc3REaXNwbGF5KSB7XG4gICAgICAgICAgICBkc3REaXNwbGF5LnNldFNob3dUeXBlKHJlZERvdC5zaG93VHlwZSk7XG4gICAgICAgICAgICBkc3REaXNwbGF5LnNldFBvc09mZnNldChyZWREb3Qub2Zmc2V0KTtcbiAgICAgICAgICAgIGRzdERpc3BsYXkuYW1lbmREb3RQb3MoKTtcbiAgICAgICAgICAgIGRzdERpc3BsYXkuc2V0RG90S2V5KHJlZERvdC5rZXkpO1xuICAgICAgICAgICAgZHN0RGlzcGxheS51cGRhdGVDb3VudChyZWREb3QuY291bnQpO1xuICAgICAgICAgICAgZHN0RGlzcGxheS5zZXREaXNwbGF5KHJlZERvdC5lbmFibGVkICYmIHJlZERvdC5jb3VudCA+IDApOyAvLyDnuqLngrnlkK/nlKjlubbkuJTmlbDph4/lpKfkuo4wXG4gICAgICAgICAgICByZWREb3QudG1wVXBkYXRlSGFuZGxlciA9IHRtcFVwZGF0ZUNiO1xuICAgICAgICAgICAgcmVkRG90LmFkZERpc3BsYXkoZHN0RGlzcGxheSk7XG4gICAgICAgICAgICBpZiAob3JpS2V5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVEaXNwbGF5QnlLZXkob3JpS2V5LCBkc3REaXNwbGF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZFByZXVwZGF0ZVJlZERvdChyZWREb3QsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva7or7fmsYLmm7TmlrDmjqXlj6NcbiAgICAgKiBAcGFyYW0ge0lSZWREb3RSZXF1ZXN0VXBkYXRlfSBmdW5jUmVxdWVzdFVwZGF0ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRSZWREb3RIYW5kbGVycyhmdW5jUmVxdWVzdFVwZGF0ZTogSVJlZERvdFJlcXVlc3RVcGRhdGUsIGZ1bmNDaGVja1VubG9jazogSGFuZGxlck1vZHVsZUlzVW5sb2NrKSB7XG4gICAgICAgIHRoaXMuZnVuY1JlZERvdFJlcXVlc3RVcGRhdGUgPSBmdW5jUmVxdWVzdFVwZGF0ZTtcbiAgICAgICAgdGhpcy5mdW5jTW9kdWxlSXNVbmxvY2sgPSBmdW5jQ2hlY2tVbmxvY2s7XG4gICAgICAgIGlmIChmdW5jUmVxdWVzdFVwZGF0ZSAmJiB0aGlzLm1hcFJlZERvdC5zaXplID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQWxsUmVkRG90KCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgICog55u05o6l6K6+572u5oyH5a6a57qi54K555qE6K6h5pWwXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGlkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gICAgICovXG4gICAgcHVibGljIHNldENvdW50PE9wdGlvbnM+KGlkOiBudW1iZXIsIG9wdDogT3B0aW9ucywgY291bnQ6IG51bWJlcikge1xuICAgICAgICBsZXQgcmVkRG90ID0gdGhpcy5nZXRSZWREb3QoaWQsIG9wdCk7XG4gICAgICAgIGlmIChyZWREb3QpIHtcbiAgICAgICAgICAgIHJlZERvdC5zZXRDb3VudChjb3VudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFJlZERvdE1nci0+IHNldENvdW50IOayoeacieaJvuWIsOaMh+Wumue6oueCuTogJHtpZH0sICR7b3B0fWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOeri+WNs+WwhumihOabtOaWsOWIl+ihqOS4reeahOWIt+aWsOS6hiAqL1xuICAgIHByaXZhdGUgaW1tZWRpYXRlVXBkYXRlUHJlTGlzdCgpIHtcbiAgICAgICAgdGhpcy5tYXBQcmVVcGRhdGUuZm9yRWFjaCgoc3ViTWFwLCBpZCkgPT4ge1xuICAgICAgICAgICAgc3ViTWFwLmZvckVhY2goKGZ1bGxUcmVlLCBrKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJlZERvdCA9IHRoaXMuZ2V0UmVkRG90QnlJZEtleShpZCwgayk7XG4gICAgICAgICAgICAgICAgaWYgKHJlZERvdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hSZWREb3QocmVkRG90LCBmdWxsVHJlZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlZERvdC50b1JlZnJlc2hQYXJlbnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc3ViTWFwLmNsZWFyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1hcFByZVVwZGF0ZS5jbGVhcigpO1xuICAgIH1cblxuICAgIC8qKiDmt7vliqDpooTmm7TmlrDnmoTnuqLngrnCt+aciee6oueCueWunuS9k+S4lOWPr+ingeaXtueahOaJjeabtOaWsCAqL1xuICAgIHByaXZhdGUgYWRkUHJldXBkYXRlUmVkRG90KGRvdDogYzJmLlJlZERvdCwgZnVsbFRyZWUgPSBmYWxzZSkge1xuICAgICAgICBsZXQgc3ViTWFwID0gdGhpcy5tYXBQcmVVcGRhdGUuZ2V0KGRvdC5rZXkuaWQpO1xuICAgICAgICBpZiAoIXN1Yk1hcCkge1xuICAgICAgICAgICAgc3ViTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgdGhpcy5tYXBQcmVVcGRhdGUuc2V0KGRvdC5rZXkuaWQsIHN1Yk1hcCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3B0U3RyID0gZG90LmtleS5nZXRPcHRTdHIoKTtcbiAgICAgICAgaWYgKHN1Yk1hcC5oYXMob3B0U3RyKSkge1xuICAgICAgICAgICAgbGV0IHBhcmFtID0gc3ViTWFwLmdldChvcHRTdHIpO1xuICAgICAgICAgICAgaWYgKHBhcmFtICE9IGZ1bGxUcmVlKSB7XG4gICAgICAgICAgICAgICAgc3ViTWFwLnNldChvcHRTdHIsIHBhcmFtIHx8IGZ1bGxUcmVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdWJNYXAuc2V0KG9wdFN0ciwgZnVsbFRyZWUpO1xuICAgICAgICBjYy5kaXJlY3Rvci5vbmNlKGNjLkRpcmVjdG9yLkVWRU5UX0FGVEVSX1VQREFURSwgdGhpcy5pbW1lZGlhdGVVcGRhdGVQcmVMaXN0LCB0aGlzKTtcbiAgICB9XG5cbiAgICAvKiog5pu05paw5omA5pyJ57qi54K577yM5oCn6IO95raI6ICX6L6D5aSnICovXG4gICAgcHVibGljIHJlZnJlc2hBbGxSZWREb3QoKSB7XG4gICAgICAgIGlmICghdGhpcy5mdW5jUmVkRG90UmVxdWVzdFVwZGF0ZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBSZWREb3RNZ3ItPiDmsqHmnInorr7nva7nuqLngrnmm7TmlrDmlrnms5VgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyDkv67mlLnkuLogdXBkYXRlIOWQjuabtOaWsFxuICAgICAgICB0aGlzLmFkZFByZXVwZGF0ZVJlZERvdCh0aGlzLnJvb3QsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKiDmm7TmlrBob21l54K5ICovXG4gICAgcHVibGljIHJlZnJlc2hSZWREb3RCeUlkKGlkOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZ1bmNSZWREb3RSZXF1ZXN0VXBkYXRlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFJlZERvdE1nci0+IOayoeacieiuvue9rue6oueCueabtOaWsOaWueazle+8jOaXoOazleabtOaWsOe6oueCuSBbJHtpZH1dYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1hcFJlZERvdCA9IHRoaXMubWFwUmVkRG90LmdldChpZCk7XG4gICAgICAgIGlmICghbWFwUmVkRG90KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbWFwUmVkRG90LmZvckVhY2goKHYsIGspID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkUHJldXBkYXRlUmVkRG90KHYsIGZhbHNlKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDkuLvliqjmm7TmlrDmn5DkuKrnuqLngrlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaWQgIOe6oueCuWlkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZnVsbFRyZWUgPSBmYWxzZV0gIOaYr+WQpuabtOaWsOW9k+WJjee6oueCueS4i+aJgOacieWtkOiKgueCuVxuICAgICAqL1xuICAgIHB1YmxpYyByZWZyZXNoUmVkRG90QnlLZXkoa2V5OiBjMmYuRG90S2V5LCBmdWxsVHJlZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghdGhpcy5mdW5jUmVkRG90UmVxdWVzdFVwZGF0ZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBSZWREb3RNZ3ItPiDmsqHmnInorr7nva7nuqLngrnmm7TmlrDmlrnms5XvvIzml6Dms5Xmm7TmlrDnuqLngrkgWyR7a2V5LmlkfV1gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZG90ID0gdGhpcy5nZXRSZWREb3Qoa2V5LmlkLCBrZXkub3B0KTtcbiAgICAgICAgaWYgKCFkb3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgUmVkRG90TWdyLT4g5rKh5pyJ5om+5Yiw5oyH5a6a57qi54K5OiAke2tleX1gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyDmoLnoioLngrkg5ZKMIOaVsOWtl+aYvuekuueahOe6oueCuSDlv4Xpobvmo4DmtYvmiYDmnInlrZDoioLngrlcbiAgICAgICAgaWYgKGRvdC5zaG93VHlwZSA9PT0gYzJmLlJlZERvdC5TaG93VHlwZS5OdW1iZXIgfHwga2V5LmlkID09PSB0aGlzLnJvb3QuaWQpIHtcbiAgICAgICAgICAgIGZ1bGxUcmVlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyDkv67mlLnkuLogdXBkYXRlIOWQjuabtOaWsFxuICAgICAgICB0aGlzLmFkZFByZXVwZGF0ZVJlZERvdChkb3QsIGZ1bGxUcmVlKTtcbiAgICB9XG5cbiAgICAvKiog57qi54K55piv5ZCm6Kej6ZSBICovXG4gICAgcHJpdmF0ZSBjaGVja1JlZERvdElzVW5sb2NrKGRvdElkOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGlzVW5sb2NrID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuZnVuY01vZHVsZUlzVW5sb2NrKSB7XG4gICAgICAgICAgICBsZXQgY2hlY2tJZCA9IGRvdElkO1xuICAgICAgICAgICAgd2hpbGUgKGNoZWNrSWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgYnJlYWtDaGVjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCBjb25mID0gdGhpcy5tYXBDZmcuZ2V0KGNoZWNrSWQpO1xuICAgICAgICAgICAgICAgIGlmIChjb25mKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXQgPSB0aGlzLmZ1bmNNb2R1bGVJc1VubG9jayhjb25mLm1vZHVsZUlkLCBjb25mLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tJZCA9IGNvbmYucGFyZW50O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNVbmxvY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrQ2hlY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtDaGVjayA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChicmVha0NoZWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNVbmxvY2s7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pu05paw57qi54K577yM6YCS5b2SXG4gICAgICogQHBhcmFtIHtSZWREb3R9IHJlZERvdFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Z1bGxUcmVlPWZhbHNlXVxuICAgICAqL1xuICAgIHByaXZhdGUgcmVmcmVzaFJlZERvdChyZWREb3Q6IGMyZi5SZWREb3QsIGZ1bGxUcmVlOiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCFyZWREb3QpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVmcmVzaCA9IGZhbHNlO1xuICAgICAgICBpZiAocmVkRG90LmlzTGVhZigpKSB7XG4gICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgICAgaWYgKHJlZERvdC50bXBVcGRhdGVIYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgY291bnQgPSByZWREb3QudG1wVXBkYXRlSGFuZGxlcihyZWREb3QuY2ZnLnBhcmVudCwgcmVkRG90LmlkLCByZWREb3Qub3B0aW9ucyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBpc1VubG9jayA9IHRoaXMuY2hlY2tSZWREb3RJc1VubG9jayhyZWREb3QuY2ZnLmlkKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNVbmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQgPSB0aGlzLmZ1bmNSZWREb3RSZXF1ZXN0VXBkYXRlLnJlcXVlc3RVcGRhdGUocmVkRG90LmNmZy5wYXJlbnQsIHJlZERvdC5pZCwgcmVkRG90Lm9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVkRG90LnNldENvdW50KGNvdW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlZnJlc2ggPSBjb3VudCA+IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlZERvdC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gcmVkRG90LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGxldCBjaGVjayA9IHRoaXMucmVmcmVzaFJlZERvdChjaGlsZCwgZnVsbFRyZWUpO1xuICAgICAgICAgICAgICAgIC8vIOWcqOS4jeaYr+ajgOafpeaVtOajteagkeeahOaDheWGteS4i++8jOWPquimgeajgOafpeWIsOaciee6oueCueWwseWBnOatouajgOa1i1xuICAgICAgICAgICAgICAgIGlmIChjaGVjaykge1xuICAgICAgICAgICAgICAgICAgICByZWZyZXNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmdWxsVHJlZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWREb3QudG9SZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlZnJlc2g7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6ZSA5q+B5oyH5a6a57qi54K5UmVkRG905pWw5o2uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGlkXG4gICAgICogQHBhcmFtIHtPcHRpb25zfSBvcHRcbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzdHJveVJlZERvdDxPcHRpb25zPihpZDogbnVtYmVyLCBvcHQ6IE9wdGlvbnMpIHtcbiAgICAgICAgbGV0IG1hcFN1YiA9IHRoaXMubWFwUmVkRG90LmdldChpZCk7XG4gICAgICAgIGlmICghbWFwU3ViKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9wdFN0ciA9IHRoaXMuZ2V0T3B0U3RyKG9wdCk7XG4gICAgICAgIGlmIChtYXBTdWIuaGFzKG9wdFN0cikpIHtcbiAgICAgICAgICAgIGxldCBkb3QgPSBtYXBTdWIuZ2V0KG9wdFN0cik7XG4gICAgICAgICAgICBkb3QuZGVzdHJveSgpO1xuICAgICAgICAgICAgbWFwU3ViLmRlbGV0ZShvcHRTdHIpO1xuICAgICAgICAgICAgaWYgKG1hcFN1Yi5zaXplIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFJlZERvdC5kZWxldGUoaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOenu+mZpOe7hOS7tuaYoOWwhOaVsOaNru+8mue6oueCuee7hOS7tm9uRGVzdHJveeaXtuWQjOatpea4hemZpERpc3BsYXnmlbDmja4gKi9cbiAgICBwdWJsaWMgZGVsZXRlRGF0YUJ5Q29tcERlc3RvcnkoZG90S2V5OiBjMmYuRG90S2V5LCBkb3RDb21wOiBjMmYuUmVkRG90Q29tcCkge1xuICAgICAgICBsZXQgbWFwU3ViID0gdGhpcy5tYXBSZWREb3QuZ2V0KGRvdEtleS5pZCk7XG4gICAgICAgIGlmICghbWFwU3ViKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9wdFN0ciA9IHRoaXMuZ2V0T3B0U3RyKGRvdEtleS5vcHQpO1xuICAgICAgICBpZiAobWFwU3ViLmhhcyhvcHRTdHIpKSB7XG4gICAgICAgICAgICBsZXQgZG90ID0gbWFwU3ViLmdldChvcHRTdHIpO1xuICAgICAgICAgICAgZG90LmRlbGV0ZURpc3BsYXlEYXRhT25seShkb3RDb21wKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDnp7vpmaTlsI/nuqLngrnnu4Tku7blj4pEaXNwbGF55pWw5o2uICovXG4gICAgcHVibGljIHJlbW92ZURpc3BsYXlCeUtleShkb3RLZXk6IGMyZi5Eb3RLZXksIGRvdENvbXA6IGMyZi5SZWREb3RDb21wKSB7XG4gICAgICAgIGxldCBtYXBTdWIgPSB0aGlzLm1hcFJlZERvdC5nZXQoZG90S2V5LmlkKTtcbiAgICAgICAgaWYgKG1hcFN1Yikge1xuICAgICAgICAgICAgbGV0IG9wdFN0ciA9IHRoaXMuZ2V0T3B0U3RyKGRvdEtleS5vcHQpO1xuICAgICAgICAgICAgaWYgKG1hcFN1Yi5oYXMob3B0U3RyKSkge1xuICAgICAgICAgICAgICAgIGxldCBkb3QgPSBtYXBTdWIuZ2V0KG9wdFN0cik7XG4gICAgICAgICAgICAgICAgZG90LmRlbGV0ZURpc3BsYXlEYXRhT25seShkb3RDb21wKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2Mud2FybignZG9udCBmaW5kIGluIG1hcFJlZERvdCBieSBvcHRTdHI6JywgZG90S2V5LCBvcHRTdHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2Mud2FybignZG9udCBmaW5kIGluIG1hcFJlZERvdCBieSBpZCcsIGRvdEtleS5pZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLy8gLS0tLS0tLS0tLS0tLS0tLSDkuovku7blk43lupQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPj4+XG4gICAgLyoqIOWIt+aWsOafkElE57qi54K5ICovXG4gICAgcHJpdmF0ZSBvbkV2ZW50VG9VcGRhdGUoZXZlbnQ6IHN0cmluZywgLi4ucGFyYW1zKSB7XG4gICAgICAgIGlmIChwYXJhbXMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQga2V5OiBjMmYuRG90S2V5ID0gcGFyYW1zWzBdO1xuICAgICAgICB0aGlzLnJlZnJlc2hSZWREb3RCeUtleShrZXkpO1xuICAgIH1cblxuICAgIC8qKiDnu5nmn5BJROe6oueCuee7keWumuWkluinguiKgueCuSAqL1xuICAgIHByaXZhdGUgb25FdmVudEFkZERpc3BsYXkoZXZlbnQ6IHN0cmluZywgLi4ucGFyYW1zKSB7XG4gICAgICAgIGlmIChwYXJhbXMubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQga2V5OiBjMmYuRG90S2V5ID0gcGFyYW1zWzBdO1xuICAgICAgICBsZXQgY29udGFpbmVyID0gcGFyYW1zWzFdO1xuICAgICAgICB0aGlzLnNldERpc3BsYXlQcm94eShrZXkuaWQsIGNvbnRhaW5lciwga2V5Lm9wdCwgbnVsbCk7XG4gICAgfVxuXG4gICAgLyoqIOWIoOmZpFJlZERvdOaVsOaNriAqL1xuICAgIHByaXZhdGUgb25FdmVudFJlbW92ZWREaXNwbGF5KGV2ZW50OiBzdHJpbmcsIC4uLnBhcmFtcykge1xuICAgICAgICBpZiAocGFyYW1zLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGtleTogYzJmLkRvdEtleSA9IHBhcmFtc1swXTtcbiAgICAgICAgbGV0IHJlZERvdCA9IHRoaXMuZ2V0UmVkRG90KGtleS5pZCwga2V5Lm9wdCk7XG4gICAgICAgIGlmICghcmVkRG90KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlZERvdC5pc0xlYWYoKSAmJiByZWREb3QuZ2V0RGlzcGxheUNudCgpIDw9IDAgJiYga2V5LmdldE9wdFN0cigpICE9ICdudWxsJykge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95UmVkRG90KGtleS5pZCwga2V5Lm9wdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLy8gLS0tLS0tLS0tLS0tLS0tLSDkuovku7blk43lupQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPDw8XG5cblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogUmVkRG90TWdyID0gbnVsbFxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogUmVkRG90TWdyIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgUmVkRG90TWdyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIGludGVyZmFjZSBJQzJGIHtcbiAgICAgICAgZG90TWdyOiBSZWREb3RNZ3I7XG4gICAgfVxufVxuXG5jMmYuZG90TWdyID0gUmVkRG90TWdyLmdldEluc3RhbmNlKCk7XG5leHBvcnQgeyB9OyJdfQ==