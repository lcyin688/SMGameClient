
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/redDot/RedDot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL3JlZERvdC9SZWREb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWdFO0FBRWhFLElBQUssY0FLSjtBQUxELFdBQUssY0FBYztJQUNmLHVEQUFVLENBQUE7SUFDVix1REFBVSxDQUFBO0lBQ1YsbURBQVEsQ0FBQTtJQUNSLG1EQUFRLENBQUE7QUFDWixDQUFDLEVBTEksY0FBYyxLQUFkLGNBQWMsUUFLbEI7QUFFRCxJQUFNLFdBQVcsR0FBRztJQUNoQixpQkFBaUIsRUFBRSxtQkFBbUI7SUFDdEMsb0JBQW9CLEVBQUUsc0JBQXNCO0lBQzVDLHNCQUFzQixFQUFFLHdCQUF3QjtJQUNoRCxpQkFBaUIsRUFBRSxtQkFBbUI7SUFDdEMsb0JBQW9CLEVBQUUsc0JBQXNCO0NBQy9DLENBQUE7QUFFRDtJQUdJLGdCQUFZLEVBQVUsRUFBRSxHQUFRO1FBQzVCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUNNLHlCQUFRLEdBQWY7UUFDSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNWLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ00sMEJBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNYLE9BQU8sTUFBTSxDQUFDO1NBQ2pCO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQUVMLGFB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T0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBblRzQixZQUFLLEdBQUcsV0FBVyxDQUFDO0lBQ3BCLGVBQVEsR0FBRyxjQUFjLENBQUM7SUFtVHJELGFBQUM7Q0F0VEQsQUFzVEMsQ0F0VG1DLGlDQUFlLEdBc1RsRDtBQWVELEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3BCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSBcIi4uL2NvcmUvZXZlbnQvRXZlbnREaXNwYXRjaGVyXCI7XG5cbmVudW0gUmVkRG90U2hvd1R5cGUge1xuICAgIE5vcm1hbCA9IDEsIC8vIOaZrumAmue6oueCuVxuICAgIE51bWJlciA9IDIsIC8vIOaVsOWAvFxuICAgIE1hcmsgPSAzLCAgIC8vIOaEn+WPueWPt1xuICAgIE9uY2UgPSA0LCAgIC8vIOS4gOasoeaAp+e6oueCuVxufVxuXG5jb25zdCBSZWREb3RFdmVudCA9IHtcbiAgICBFVkVOVF9ORUVEX1VQREFURTogXCJFVkVOVF9ORUVEX1VQREFURVwiLFxuICAgIEVWRU5UX1VQREFURV9ESVNQTEFZOiBcIkVWRU5UX1VQREFURV9ESVNQTEFZXCIsXG4gICAgRVZFTlRfQ0hBTkdFX1NIT1dfVFlQRTogXCJFVkVOVF9DSEFOR0VfU0hPV19UWVBFXCIsXG4gICAgRVZFTlRfQUREX0RJU1BMQVk6IFwiRVZFTlRfQUREX0RJU1BMQVlcIixcbiAgICBFVkVOVF9SRU1PVkVfRElTUExBWTogXCJFVkVOVF9SRU1PVkVfRElTUExBWVwiLFxufVxuXG5jbGFzcyBEb3RLZXk8T3B0aW9ucyA9IGFueT4ge1xuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBvcHQ6IE9wdGlvbnM7XG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgb3B0OiBhbnkpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLm9wdCA9IG9wdDtcbiAgICB9XG4gICAgcHVibGljIHRvU3RyaW5nKCkge1xuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmlkLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmICh0aGlzLm9wdCkge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSArIEpTT04uc3RyaW5naWZ5KHRoaXMub3B0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRPcHRTdHIoKSB7XG4gICAgICAgIGlmICghdGhpcy5vcHQpIHtcbiAgICAgICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5vcHQpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmNsYXNzIFJlZERvdDxPcHRpb25zID0gYW55PiBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEV2ZW50ID0gUmVkRG90RXZlbnQ7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTaG93VHlwZSA9IFJlZERvdFNob3dUeXBlO1xuXG4gICAgLyoqIOe6oueCuemFjee9ruS/oeaBryAqL1xuICAgIHByaXZhdGUgX2NmZzogUmVkRG90RGVmO1xuICAgIHB1YmxpYyBnZXQgY2ZnKCk6IFJlZERvdERlZiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jZmc7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgY2ZnKHZhbHVlOiBSZWREb3REZWYpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NmZyA9IHZhbHVlO1xuICAgICAgICB0aGlzLnNob3dUeXBlID0gdmFsdWUuc2hvd1R5cGU7XG4gICAgfVxuXG4gICAgLyoqIOe6oueCuUlkICovXG4gICAgcHVibGljIGdldCBpZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jZmcuaWQ7XG4gICAgfVxuICAgIC8qKiDlkI3np7AgKi9cbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2ZnLm5hbWU7XG4gICAgfVxuICAgIC8qKiDkvY3nva4gKi9cbiAgICBwdWJsaWMgZ2V0IG9mZnNldCgpOiBjYy5WZWMyIHtcbiAgICAgICAgcmV0dXJuIGNjLnYyKHRoaXMuY2ZnLm9mZnNldFgsIHRoaXMuY2ZnLm9mZnNldFkpO1xuICAgIH1cblxuICAgIC8qKiDlj4LmlbAgKi9cbiAgICBwdWJsaWMgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmtleS5vcHQ7XG4gICAgfVxuXG4gICAgLyoqIOWxleekuuexu+WeiyAqL1xuICAgIHByaXZhdGUgX3Nob3dUeXBlOiBSZWREb3RTaG93VHlwZSA9IFJlZERvdFNob3dUeXBlLk5vcm1hbDtcbiAgICBwdWJsaWMgZ2V0IHNob3dUeXBlKCk6IFJlZERvdFNob3dUeXBlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nob3dUeXBlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHNob3dUeXBlKHZhbHVlOiBSZWREb3RTaG93VHlwZSkge1xuICAgICAgICBpZiAodGhpcy5fc2hvd1R5cGUgIT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nob3dUeXBlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURpc3BsYXlTaG93VHlwZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5piv5ZCm5ZCv55SoICovXG4gICAgcHJpdmF0ZSBfZW5hYmxlZCA9IHRydWU7XG4gICAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZW5hYmxlZDtcbiAgICB9XG4gICAgcHVibGljIHNldCBlbmFibGVkKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLl9lbmFibGVkID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fdXBkYXRlRGlzcGxheU5vZGVTdGF0dXMoKTtcbiAgICB9XG5cbiAgICAvKiog54i26IqC54K5ICovXG4gICAgcHJpdmF0ZSBfcGFyZW50OiBSZWREb3QgPSBudWxsO1xuICAgIHB1YmxpYyBnZXQgcGFyZW50KCk6IFJlZERvdCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gICAgfVxuXG4gICAgLyoqIOWtkOiKgueCuSAqL1xuICAgIHB1YmxpYyBjaGlsZHJlbjogUmVkRG90W10gPSBbXTtcblxuICAgIC8qKiDorqHmlbAgKi9cbiAgICBwcml2YXRlIF9jb3VudDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgZ2V0IGNvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3VudDtcbiAgICB9XG5cbiAgICAvKiog5Yi35paw5qCH5b+XICovXG4gICAgcHJpdmF0ZSBfaXNEaXJ0eSA9IGZhbHNlO1xuICAgIHB1YmxpYyBnZXQgaXNEaXJ0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGlydHk7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgaXNEaXJ0eSh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5faXNEaXJ0eSAhPSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5faXNEaXJ0eSA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKHZhbHVlICYmIHRoaXMuX3BhcmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5pc0RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBrZXkgKi9cbiAgICBwcml2YXRlIF9rZXk6IERvdEtleTtcbiAgICBwdWJsaWMgZ2V0IGtleSgpOiBEb3RLZXkge1xuICAgICAgICByZXR1cm4gdGhpcy5fa2V5O1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGtleSh2OiBEb3RLZXkpIHtcbiAgICAgICAgdGhpcy5fa2V5ID0gdjtcbiAgICB9XG5cbiAgICAvKiog5YWz6IGU6IqC54K5ICovXG4gICAgcHJvdGVjdGVkIGFyckRpc3BsYXlQcm94eTogYzJmLlJlZERvdENvbXBbXSA9IFtdO1xuICAgIC8qKiDmnKzlnLDliLfmlrDCt+acieS6m+e6oueCueS7heS7heaYr+eVjOmdouWGheS4tOaXtuaVsOaNruW8leWPkeeahO+8jOW5tuS4jeWcqGRhdGHkuK0s6L+Z6YeM5o+Q5L6b5LiA5Liq55u05o6l5Zue6LCDICovXG4gICAgcHJpdmF0ZSBfdG1wVXBkYXRlSGFuZGxlcjogRnVuY3Rpb247XG4gICAgcHVibGljIGdldCB0bXBVcGRhdGVIYW5kbGVyKCk6IEZ1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RtcFVwZGF0ZUhhbmRsZXI7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgdG1wVXBkYXRlSGFuZGxlcih2OiBGdW5jdGlvbikge1xuICAgICAgICB0aGlzLl90bXBVcGRhdGVIYW5kbGVyID0gdjtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihpbmZvOiBSZWREb3REZWYsIG9wdGlvbnM6IGFueSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtleSA9IG5ldyBEb3RLZXkoaW5mby5pZCwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc2V0R3JvdXBOYW1lKHRoaXMua2V5LnRvU3RyaW5nKCkpO1xuICAgICAgICB0aGlzLmNmZyA9IGluZm87XG4gICAgfVxuXG4gICAgLyoqIOS4u+WKqOWIt+aWsOe6oueCuSAqL1xuICAgIHB1YmxpYyB0b1JlZnJlc2goKSB7XG4gICAgICAgIHRoaXMuZW1pdChSZWREb3RFdmVudC5FVkVOVF9ORUVEX1VQREFURSwgdGhpcy5rZXkpO1xuICAgIH1cblxuICAgIC8qKiDmt7vliqDlrZDoioLngrkgKi9cbiAgICBwdWJsaWMgYWRkQ2hpbGQoY2hpbGQ6IFJlZERvdCkge1xuICAgICAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBSZWREb3QtPiBhZGRDaGlsZCBjaGlsZCBpcyBudWxsYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGQuX3BhcmVudCA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgfVxuXG4gICAgLyoqIOenu+mZpOWtkOiKgueCuSAqL1xuICAgIHB1YmxpYyByZW1vdmVDaGlsZChjaGlsZDogUmVkRG90KSB7XG4gICAgICAgIGMyZi51dGlscy5hcnIuZmFzdFJlbW92ZSh0aGlzLmNoaWxkcmVuLCBjaGlsZCk7XG4gICAgICAgIGNoaWxkLl9wYXJlbnQgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9rue6oueCueWAvFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRDb3VudChjb3VudDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTGVhZigpKSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVDb3VudChjb3VudCk7XG4gICAgICAgICAgICAvLyDmm7TmlrDlrozmlbDmja7kuYvlkI4g5YWz6Zet5qCH6K+GXG4gICAgICAgICAgICB0aGlzLmlzRGlydHkgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgUmVkRG90LT4g5b2T5YmN57qi54K5WyR7dGhpcy5pZH1d5LiN5piv5Y+25a2Q6IqC54K577yM5peg5rOV55u05o6l6K6+572uIOe6oueCueiuoeaVsGApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOabtOaWsOiuoeaVsCAqL1xuICAgIHByaXZhdGUgX3VwZGF0ZUNvdW50KGNvdW50OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvdW50ICE9IGNvdW50KSB7XG4gICAgICAgICAgICB0aGlzLl9jb3VudCA9IGNvdW50O1xuICAgICAgICAgICAgdGhpcy5pc0RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURpc3BsYXlOb2RlU3RhdHVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5Yi35paw54i26IqC54K5ICovXG4gICAgcHVibGljIHRvUmVmcmVzaFBhcmVudCgpIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoUGFyZW50KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWZyZXNoUGFyZW50KCkge1xuICAgICAgICB0aGlzLnBhcmVudD8ucmVmcmVzaFNlbGYoKTtcbiAgICAgICAgdGhpcy5wYXJlbnQ/LnJlZnJlc2hQYXJlbnQoKTtcbiAgICB9XG5cbiAgICAvKiog5Yi35paw6Ieq6LqrICovXG4gICAgcHJpdmF0ZSByZWZyZXNoU2VsZigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlydHkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChjaGlsZC5pc0RpcnR5KSB7XG4gICAgICAgICAgICAgICAgY2hpbGQucmVmcmVzaFNlbGYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvdW50ICs9IGNoaWxkLmNvdW50O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50KGNvdW50KTtcbiAgICAgICAgLy8g5pu05paw5a6M5LmL5ZCO5YWz6Zet5qCH6K+GXG4gICAgICAgIHRoaXMuaXNEaXJ0eSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKiDliLfmlrDoioLngrnnirbmgIEgKi9cbiAgICBwcml2YXRlIF91cGRhdGVEaXNwbGF5Tm9kZVN0YXR1cygpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckRpc3BsYXlQcm94eS5sZW5ndGg7KSB7XG4gICAgICAgICAgICBjb25zdCBvbmUgPSB0aGlzLmFyckRpc3BsYXlQcm94eVtpXTtcbiAgICAgICAgICAgIGlmIChvbmUgJiYgb25lLmlzVmFsaWQgJiYgb25lLm5vZGUpIHtcbiAgICAgICAgICAgICAgICBvbmUudXBkYXRlQ291bnQodGhpcy5jb3VudCk7XG4gICAgICAgICAgICAgICAgb25lLnNldERpc3BsYXkodGhpcy5lbmFibGVkICYmIHRoaXMuY291bnQgPiAwKTtcbiAgICAgICAgICAgICAgICArK2k7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYXJyRGlzcGxheVByb3h5LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDliLfmlrAgKi9cbiAgICBwdWJsaWMgcmVmcmVzaCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNMZWFmKCkpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFBhcmVudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoU2VsZigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOaYr+WQpuS4uuWPtuWtkOiKgueCuSAqL1xuICAgIHB1YmxpYyBpc0xlYWYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmxlbmd0aCA9PT0gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RGlzcGxheUNudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyRGlzcGxheVByb3h5Lmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKiog5Yi35pawZG905pi+56S657G75Z6LICovXG4gICAgcHJpdmF0ZSB1cGRhdGVEaXNwbGF5U2hvd1R5cGUodHlwZTogUmVkRG90U2hvd1R5cGUpIHtcbiAgICAgICAgZm9yIChsZXQgb25lIG9mIHRoaXMuYXJyRGlzcGxheVByb3h5KSB7XG4gICAgICAgICAgICBvbmUuc2V0U2hvd1R5cGUodHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog6K6+572u5pi+56S66IqC54K5OuacquW6lOeUqCAqL1xuICAgIHB1YmxpYyBzZXREaXNwbGF5UHJveHkoY29udGFpbmVyOiBjYy5Ob2RlKSB7XG4gICAgICAgIGlmICghY29udGFpbmVyIHx8ICFjb250YWluZXIuaXNWYWxpZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgUmVkRG90LT4g57qi54K56IqC54K56ZSZ6K+vYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0KFJlZERvdEV2ZW50LkVWRU5UX0FERF9ESVNQTEFZLCB0aGlzLmtleSwgY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFzRGlzcGxheShkb3RDb21wOiBjMmYuUmVkRG90Q29tcCkge1xuICAgICAgICBsZXQgZmluZCA9IHRoaXMuYXJyRGlzcGxheVByb3h5LmluZGV4T2YoZG90Q29tcCk7XG4gICAgICAgIHJldHVybiBmaW5kID49IDA7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZERpc3BsYXkoZG90Q29tcDogYzJmLlJlZERvdENvbXApIHtcbiAgICAgICAgdGhpcy5hcnJEaXNwbGF5UHJveHkucHVzaChkb3RDb21wKTtcbiAgICB9XG5cbiAgICAvKiog56e76Zmk5omA5pyJ5pi+56S66IqC54K5ICovXG4gICAgcHVibGljIHJlbW92ZUFsbERpc3BsYXkoKSB7XG4gICAgICAgIGZvciAobGV0IG9uZSBvZiB0aGlzLmFyckRpc3BsYXlQcm94eSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVEaXNwbGF5KG9uZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog56e76Zmk5bCP57qi54K557uE5Lu25Y+KRGlzcGxheeaVsOaNriAqL1xuICAgIHByaXZhdGUgcmVtb3ZlRGlzcGxheShkb3RDb21wOiBjMmYuUmVkRG90Q29tcCkge1xuICAgICAgICBpZiAoZG90Q29tcCAmJiBkb3RDb21wLmlzVmFsaWQpIHtcbiAgICAgICAgICAgIGRvdENvbXAubm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgICAgICBkb3RDb21wLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgZG90Q29tcC5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZURpc3BsYXlEYXRhT25seShkb3RDb21wKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDnp7vpmaTmmKDlsITmlbDmja7vvJrnuqLngrnnu4Tku7ZvbkRlc3Ryb3nml7blkIzmraXmuIXpmaTlhbZSZWREb3TlkoxEaXNwbGF55pWw5o2uICovXG4gICAgcHVibGljIGRlbGV0ZURpc3BsYXlEYXRhT25seShkb3RDb21wOiBjMmYuUmVkRG90Q29tcCkge1xuICAgICAgICBjMmYudXRpbHMuYXJyLmZhc3RSZW1vdmUodGhpcy5hcnJEaXNwbGF5UHJveHksIGRvdENvbXApO1xuICAgICAgICB0aGlzLmVtaXQoUmVkRG90RXZlbnQuRVZFTlRfUkVNT1ZFX0RJU1BMQVksIHRoaXMua2V5KTtcbiAgICB9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgIHB1YmxpYyBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wYXJlbnQ/LnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxEaXNwbGF5KCk7XG4gICAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIElDMkYge1xuICAgICAgICBSZWREb3Q6IHR5cGVvZiBSZWREb3Q7XG4gICAgICAgIERvdEtleTogdHlwZW9mIERvdEtleTtcbiAgICB9XG4gICAgbmFtZXNwYWNlIGMyZiB7XG4gICAgICAgIHR5cGUgUmVkRG90PE9wdGlvbnMgPSBhbnk+ID0gSW5zdGFuY2VUeXBlPHR5cGVvZiBSZWREb3Q8T3B0aW9ucz4+O1xuICAgICAgICB0eXBlIERvdEtleTxPcHRpb25zID0gYW55PiA9IEluc3RhbmNlVHlwZTx0eXBlb2YgRG90S2V5PE9wdGlvbnM+PjtcbiAgICAgICAgbmFtZXNwYWNlIFJlZERvdCB7XG4gICAgICAgICAgICB0eXBlIFNob3dUeXBlID0gUmVkRG90U2hvd1R5cGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5jMmYuUmVkRG90ID0gUmVkRG90O1xuYzJmLkRvdEtleSA9IERvdEtleTtcblxuZXhwb3J0IHsgfTsiXX0=