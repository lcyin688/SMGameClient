"use strict";
cc._RF.push(module, 'c7d5fuK5+5FkZYr/MO9x3IT', 'RedDot');
// c2f-framework/redDot/RedDot.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EventDispatcher_1 = require("../core/event/EventDispatcher");
var RedDotShowType;
(function (RedDotShowType) {
    RedDotShowType[RedDotShowType["Normal"] = 1] = "Normal";
    RedDotShowType[RedDotShowType["Number"] = 2] = "Number";
    RedDotShowType[RedDotShowType["Mark"] = 3] = "Mark";
    RedDotShowType[RedDotShowType["Once"] = 4] = "Once";
})(RedDotShowType || (RedDotShowType = {}));
var RedDotEvent = {
    EVENT_NEED_UPDATE: "EVENT_NEED_UPDATE",
    EVENT_UPDATE_DISPLAY: "EVENT_UPDATE_DISPLAY",
    EVENT_CHANGE_SHOW_TYPE: "EVENT_CHANGE_SHOW_TYPE",
    EVENT_ADD_DISPLAY: "EVENT_ADD_DISPLAY",
    EVENT_REMOVE_DISPLAY: "EVENT_REMOVE_DISPLAY",
};
var DotKey = /** @class */ (function () {
    function DotKey(id, opt) {
        this.id = id;
        this.opt = opt;
    }
    DotKey.prototype.toString = function () {
        var value = this.id.toString();
        if (this.opt) {
            value = value + JSON.stringify(this.opt);
        }
        return value;
    };
    DotKey.prototype.getOptStr = function () {
        if (!this.opt) {
            return 'null';
        }
        else {
            return JSON.stringify(this.opt);
        }
    };
    return DotKey;
}());
var RedDot = /** @class */ (function (_super) {
    __extends(RedDot, _super);
    function RedDot(info, options) {
        var _this = _super.call(this) || this;
        /** 展示类型 */
        _this._showType = RedDotShowType.Normal;
        /** 是否启用 */
        _this._enabled = true;
        /** 父节点 */
        _this._parent = null;
        /** 子节点 */
        _this.children = [];
        /** 计数 */
        _this._count = 0;
        /** 刷新标志 */
        _this._isDirty = false;
        /** 关联节点 */
        _this.arrDisplayProxy = [];
        _this.key = new DotKey(info.id, options);
        _this.setGroupName(_this.key.toString());
        _this.cfg = info;
        return _this;
    }
    Object.defineProperty(RedDot.prototype, "cfg", {
        get: function () {
            return this._cfg;
        },
        set: function (value) {
            if (!value) {
                return;
            }
            this._cfg = value;
            this.showType = value.showType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedDot.prototype, "id", {
        /** 红点Id */
        get: function () {
            return this.cfg.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedDot.prototype, "name", {
        /** 名称 */
        get: function () {
            return this.cfg.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedDot.prototype, "offset", {
        /** 位置 */
        get: function () {
            return cc.v2(this.cfg.offsetX, this.cfg.offsetY);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedDot.prototype, "options", {
        /** 参数 */
        get: function () {
            return this.key.opt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedDot.prototype, "showType", {
        get: function () {
            return this._showType;
        },
        set: function (value) {
            if (this._showType != value) {
                this._showType = value;
                this.updateDisplayShowType(value);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedDot.prototype, "enabled", {
        get: function () {
            return this._enabled;
        },
        set: function (value) {
            if (this._enabled === value) {
                return;
            }
            this._enabled = value;
            this._updateDisplayNodeStatus();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedDot.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedDot.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedDot.prototype, "isDirty", {
        get: function () {
            return this._isDirty;
        },
        set: function (value) {
            if (this._isDirty != value) {
                this._isDirty = value;
                if (value && this._parent) {
                    this._parent.isDirty = true;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedDot.prototype, "key", {
        get: function () {
            return this._key;
        },
        set: function (v) {
            this._key = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedDot.prototype, "tmpUpdateHandler", {
        get: function () {
            return this._tmpUpdateHandler;
        },
        set: function (v) {
            this._tmpUpdateHandler = v;
        },
        enumerable: false,
        configurable: true
    });
    /** 主动刷新红点 */
    RedDot.prototype.toRefresh = function () {
        this.emit(RedDotEvent.EVENT_NEED_UPDATE, this.key);
    };
    /** 添加子节点 */
    RedDot.prototype.addChild = function (child) {
        if (!child) {
            console.error("RedDot-> addChild child is null");
            return;
        }
        child._parent = this;
        this.children.push(child);
    };
    /** 移除子节点 */
    RedDot.prototype.removeChild = function (child) {
        c2f.utils.arr.fastRemove(this.children, child);
        child._parent = null;
    };
    /**
     * 设置红点值
     * @param {number} count
     */
    RedDot.prototype.setCount = function (count) {
        if (this.isLeaf()) {
            this._updateCount(count);
            // 更新完数据之后 关闭标识
            this.isDirty = false;
        }
        else {
            console.warn("RedDot-> \u5F53\u524D\u7EA2\u70B9[" + this.id + "]\u4E0D\u662F\u53F6\u5B50\u8282\u70B9\uFF0C\u65E0\u6CD5\u76F4\u63A5\u8BBE\u7F6E \u7EA2\u70B9\u8BA1\u6570");
        }
    };
    /** 更新计数 */
    RedDot.prototype._updateCount = function (count) {
        if (this._count != count) {
            this._count = count;
            this.isDirty = true;
            this._updateDisplayNodeStatus();
        }
    };
    /** 刷新父节点 */
    RedDot.prototype.toRefreshParent = function () {
        this.refreshParent();
    };
    RedDot.prototype.refreshParent = function () {
        var _a, _b;
        (_a = this.parent) === null || _a === void 0 ? void 0 : _a.refreshSelf();
        (_b = this.parent) === null || _b === void 0 ? void 0 : _b.refreshParent();
    };
    /** 刷新自身 */
    RedDot.prototype.refreshSelf = function () {
        if (!this.isDirty) {
            return;
        }
        var count = 0;
        for (var i = 0; i < this.children.length; i++) {
            var child = this.children[i];
            if (child.isDirty) {
                child.refreshSelf();
            }
            count += child.count;
        }
        this._updateCount(count);
        // 更新完之后关闭标识
        this.isDirty = false;
    };
    /** 刷新节点状态 */
    RedDot.prototype._updateDisplayNodeStatus = function () {
        for (var i = 0; i < this.arrDisplayProxy.length;) {
            var one = this.arrDisplayProxy[i];
            if (one && one.isValid && one.node) {
                one.updateCount(this.count);
                one.setDisplay(this.enabled && this.count > 0);
                ++i;
            }
            else {
                this.arrDisplayProxy.splice(i, 1);
            }
        }
    };
    /** 刷新 */
    RedDot.prototype.refresh = function () {
        if (this.isLeaf()) {
            this.refreshParent();
        }
        else {
            this.refreshSelf();
        }
    };
    /** 是否为叶子节点 */
    RedDot.prototype.isLeaf = function () {
        return this.children.length === 0;
    };
    RedDot.prototype.getDisplayCnt = function () {
        return this.arrDisplayProxy.length;
    };
    /** 刷新dot显示类型 */
    RedDot.prototype.updateDisplayShowType = function (type) {
        for (var _i = 0, _a = this.arrDisplayProxy; _i < _a.length; _i++) {
            var one = _a[_i];
            one.setShowType(type);
        }
    };
    /** 设置显示节点:未应用 */
    RedDot.prototype.setDisplayProxy = function (container) {
        if (!container || !container.isValid) {
            console.error("RedDot-> \u7EA2\u70B9\u8282\u70B9\u9519\u8BEF");
            return;
        }
        this.emit(RedDotEvent.EVENT_ADD_DISPLAY, this.key, container);
    };
    RedDot.prototype.hasDisplay = function (dotComp) {
        var find = this.arrDisplayProxy.indexOf(dotComp);
        return find >= 0;
    };
    RedDot.prototype.addDisplay = function (dotComp) {
        this.arrDisplayProxy.push(dotComp);
    };
    /** 移除所有显示节点 */
    RedDot.prototype.removeAllDisplay = function () {
        for (var _i = 0, _a = this.arrDisplayProxy; _i < _a.length; _i++) {
            var one = _a[_i];
            this.removeDisplay(one);
        }
    };
    /** 移除小红点组件及Display数据 */
    RedDot.prototype.removeDisplay = function (dotComp) {
        if (dotComp && dotComp.isValid) {
            dotComp.node.removeFromParent();
            dotComp.node.destroy();
            dotComp.destroy();
            this.deleteDisplayDataOnly(dotComp);
        }
    };
    /** 移除映射数据：红点组件onDestroy时同步清除其RedDot和Display数据 */
    RedDot.prototype.deleteDisplayDataOnly = function (dotComp) {
        c2f.utils.arr.fastRemove(this.arrDisplayProxy, dotComp);
        this.emit(RedDotEvent.EVENT_REMOVE_DISPLAY, this.key);
    };
    RedDot.prototype.destroy = function () {
        this.clear();
    };
    RedDot.prototype.clear = function () {
        var _a;
        _super.prototype.destroy.call(this);
        this.children.forEach(function (child) {
            child.destroy();
        });
        (_a = this.parent) === null || _a === void 0 ? void 0 : _a.removeChild(this);
        this.children.length = 0;
        this._parent = null;
        this.removeAllDisplay();
    };
    RedDot.Event = RedDotEvent;
    RedDot.ShowType = RedDotShowType;
    return RedDot;
}(EventDispatcher_1.EventDispatcher));
c2f.RedDot = RedDot;
c2f.DotKey = DotKey;

cc._RF.pop();