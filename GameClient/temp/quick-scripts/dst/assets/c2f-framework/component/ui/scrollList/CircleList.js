
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/ui/scrollList/CircleList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b16a3Aay4tOsrajlZkk+6I1', 'CircleList');
// c2f-framework/component/ui/scrollList/CircleList.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, menu = _a.menu;
/** 初始角度 */
var INIT_DEGREE = 270;
/**
 * 环形列表，将节点以椭圆排列
 */
var CircleList = /** @class */ (function (_super) {
    __extends(CircleList, _super);
    function CircleList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.ellipseAxes = cc.v2(0, 0);
        _this.scrollSpeed = 200;
        _this._init = false;
        _this._curDegree = INIT_DEGREE;
        _this._targetDegree = INIT_DEGREE;
        _this._scrolling = false;
        _this._itemDegreeMap = new Map();
        _this._maxDelta = 0;
        /** 子节点被选中时的回调 */
        _this._selectCall = null;
        return _this;
    }
    Object.defineProperty(CircleList.prototype, "curDegree", {
        /** 虚拟角度，子节点会根据角度计算坐标 */
        get: function () { return this._curDegree; },
        set: function (v) {
            this._curDegree = c2f.utils.math.normalizeDegree(v);
            this.refreshItems();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 初始化列表，按角度均匀排列content所有子节点
     * @param selectCall
     */
    CircleList.prototype.init = function (selectCall) {
        var _this = this;
        if (selectCall === void 0) { selectCall = null; }
        this._init = true;
        this._scrolling = false;
        this._maxDelta = 0;
        this._itemDegreeMap.clear();
        this._selectCall = selectCall;
        if (this.content.childrenCount <= 0) {
            return;
        }
        var average = 360 / this.content.childrenCount;
        this.content.children.forEach(function (v, i) {
            _this._itemDegreeMap.set(v, i * average);
            v.on(cc.Node.EventType.TOUCH_MOVE, _this.itemTouchMove, _this);
            v.on(cc.Node.EventType.TOUCH_END, _this.itemTouchEnd, _this);
            v.on(cc.Node.EventType.TOUCH_CANCEL, _this.itemTouchEnd, _this);
        });
        this.refreshItems();
    };
    /**
     * 滚动到指定子节点处
     * @param item 子节点
     */
    CircleList.prototype.scrollToItem = function (item) {
        var _a;
        if (!this._itemDegreeMap.has(item)) {
            return;
        }
        var itemDegree = this._itemDegreeMap.get(item);
        var delta = INIT_DEGREE - itemDegree;
        this._targetDegree = c2f.utils.math.normalizeDegree(delta);
        this._scrolling = true;
        (_a = this._selectCall) === null || _a === void 0 ? void 0 : _a.call(this, item);
    };
    CircleList.prototype.refreshItems = function () {
        var _this = this;
        this.content.children.forEach(function (v, i) {
            var degree = c2f.utils.math.normalizeDegree(_this._itemDegreeMap.get(v) + _this.curDegree);
            var pos = c2f.utils.vec.getEllipsePoint(_this.ellipseAxes.x, _this.ellipseAxes.y, degree);
            v.setPosition(pos);
            v.zIndex = -v.y;
        });
    };
    CircleList.prototype.update = function (dt) {
        if (!this._init || !this._scrolling || this.curDegree === this._targetDegree) {
            return;
        }
        var delta = Math.abs(this._targetDegree - this.curDegree);
        var degree = this.curDegree;
        var sign = (delta < 180 ? 1 : -1) * Math.sign(this._targetDegree - this.curDegree);
        degree += dt * this.scrollSpeed * sign;
        if ((this.curDegree > this._targetDegree && degree < this._targetDegree) || (this.curDegree < this._targetDegree && degree > this._targetDegree)) {
            degree = this._targetDegree;
            this._scrolling = false;
        }
        this.curDegree = degree;
    };
    CircleList.prototype.itemTouchMove = function (event) {
        var delta = event.getDeltaX();
        if (Math.abs(delta) < 1) {
            return;
        }
        if (this._maxDelta < Math.abs(delta)) {
            this._maxDelta = Math.abs(delta);
        }
        this.curDegree = this.curDegree + delta / 5;
    };
    CircleList.prototype.itemTouchEnd = function (event) {
        var node = event.target;
        if (this._maxDelta < 5) {
            this._maxDelta = 0;
            this.scrollToItem(node);
            return;
        }
        var minDelta = 360;
        var minNode = this.content.children[0];
        for (var i = 0; i < this.content.children.length; i++) {
            var item = this.content.children[i];
            var itemDegree = c2f.utils.math.normalizeDegree(this._itemDegreeMap.get(item) + this.curDegree);
            var delta = Math.abs(INIT_DEGREE - itemDegree);
            if (delta > 180) {
                delta = itemDegree + 360 - INIT_DEGREE;
            }
            if (delta < minDelta) {
                minDelta = delta;
                minNode = item;
            }
        }
        this._maxDelta = 0;
        this.scrollToItem(minNode);
    };
    __decorate([
        property(cc.Node)
    ], CircleList.prototype, "content", void 0);
    __decorate([
        property({ tooltip: CC_DEV && "椭圆长短轴" })
    ], CircleList.prototype, "ellipseAxes", void 0);
    __decorate([
        property({ tooltip: CC_DEV && "列表自动滚动的速度" })
    ], CircleList.prototype, "scrollSpeed", void 0);
    CircleList = __decorate([
        ccclass,
        executeInEditMode,
        menu("c2f/UI/CircleList")
    ], CircleList);
    return CircleList;
}(cc.Component));
exports.default = CircleList;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC91aS9zY3JvbGxMaXN0L0NpcmNsZUxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFpRCxFQUFFLENBQUMsVUFBVSxFQUE1RCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxpQkFBaUIsdUJBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUM7QUFFckUsV0FBVztBQUNYLElBQU0sV0FBVyxHQUFXLEdBQUcsQ0FBQztBQUVoQzs7R0FFRztBQUlIO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBK0hDO1FBN0hXLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsaUJBQVcsR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVuQyxpQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUUxQixXQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLGdCQUFVLEdBQVcsV0FBVyxDQUFDO1FBQ2pDLG1CQUFhLEdBQVcsV0FBVyxDQUFDO1FBQ3BDLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLG9CQUFjLEdBQXlCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDakQsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUM5QixpQkFBaUI7UUFDVCxpQkFBVyxHQUE0QixJQUFJLENBQUM7O0lBZ0h4RCxDQUFDO0lBN0dHLHNCQUFXLGlDQUFTO1FBRHBCLHdCQUF3QjthQUN4QixjQUFpQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2FBQzFELFVBQXFCLENBQVM7WUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLENBQUM7OztPQUp5RDtJ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LEdBQUcsRUFBRTtnQkFDYixLQUFLLEdBQUcsVUFBVSxHQUFHLEdBQUcsR0FBRyxXQUFXLENBQUM7YUFDMUM7WUFDRCxJQUFJLEtBQUssR0FBRyxRQUFRLEVBQUU7Z0JBQ2xCLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ2pCLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDbEI7U0FDSjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQTVIRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNjO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSxPQUFPLEVBQUUsQ0FBQzttREFDRTtJQUUzQztRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLElBQUksV0FBVyxFQUFFLENBQUM7bURBQ1g7SUFOakIsVUFBVTtRQUg5QixPQUFPO1FBQ1AsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztPQUNMLFVBQVUsQ0ErSDlCO0lBQUQsaUJBQUM7Q0EvSEQsQUErSEMsQ0EvSHVDLEVBQUUsQ0FBQyxTQUFTLEdBK0huRDtrQkEvSG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBleGVjdXRlSW5FZGl0TW9kZSwgbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoqIOWIneWni+inkuW6piAqL1xuY29uc3QgSU5JVF9ERUdSRUU6IG51bWJlciA9IDI3MDtcblxuLyoqXG4gKiDnjq/lvaLliJfooajvvIzlsIboioLngrnku6XmpK3lnIbmjpLliJdcbiAqL1xuQGNjY2xhc3NcbkBleGVjdXRlSW5FZGl0TW9kZVxuQG1lbnUoXCJjMmYvVUkvQ2lyY2xlTGlzdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlTGlzdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBjb250ZW50OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBDQ19ERVYgJiYgXCLmpK3lnIbplb/nn63ovbRcIiB9KVxuICAgIHByaXZhdGUgZWxsaXBzZUF4ZXM6IGNjLlZlYzIgPSBjYy52MigwLCAwKTtcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBDQ19ERVYgJiYgXCLliJfooajoh6rliqjmu5rliqjnmoTpgJ/luqZcIiB9KVxuICAgIHByaXZhdGUgc2Nyb2xsU3BlZWQ6IG51bWJlciA9IDIwMDtcblxuICAgIHByaXZhdGUgX2luaXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9jdXJEZWdyZWU6IG51bWJlciA9IElOSVRfREVHUkVFO1xuICAgIHByaXZhdGUgX3RhcmdldERlZ3JlZTogbnVtYmVyID0gSU5JVF9ERUdSRUU7XG4gICAgcHJpdmF0ZSBfc2Nyb2xsaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfaXRlbURlZ3JlZU1hcDogTWFwPGNjLk5vZGUsIG51bWJlcj4gPSBuZXcgTWFwKCk7XG4gICAgcHJpdmF0ZSBfbWF4RGVsdGE6IG51bWJlciA9IDA7XG4gICAgLyoqIOWtkOiKgueCueiiq+mAieS4reaXtueahOWbnuiwgyAqL1xuICAgIHByaXZhdGUgX3NlbGVjdENhbGw6IChpdGVtOiBjYy5Ob2RlKSA9PiB2b2lkID0gbnVsbDtcblxuICAgIC8qKiDomZrmi5/op5LluqbvvIzlrZDoioLngrnkvJrmoLnmja7op5LluqborqHnrpflnZDmoIcgKi9cbiAgICBwdWJsaWMgZ2V0IGN1ckRlZ3JlZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fY3VyRGVncmVlOyB9XG4gICAgcHVibGljIHNldCBjdXJEZWdyZWUodjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2N1ckRlZ3JlZSA9IGMyZi51dGlscy5tYXRoLm5vcm1hbGl6ZURlZ3JlZSh2KTtcbiAgICAgICAgdGhpcy5yZWZyZXNoSXRlbXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJbliJfooajvvIzmjInop5LluqblnYfljIDmjpLliJdjb250ZW505omA5pyJ5a2Q6IqC54K5XG4gICAgICogQHBhcmFtIHNlbGVjdENhbGwgXG4gICAgICovXG4gICAgcHVibGljIGluaXQoc2VsZWN0Q2FsbDogKGl0ZW06IGNjLk5vZGUpID0+IHZvaWQgPSBudWxsKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2luaXQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9zY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbWF4RGVsdGEgPSAwO1xuICAgICAgICB0aGlzLl9pdGVtRGVncmVlTWFwLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuX3NlbGVjdENhbGwgPSBzZWxlY3RDYWxsO1xuICAgICAgICBpZiAodGhpcy5jb250ZW50LmNoaWxkcmVuQ291bnQgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhdmVyYWdlOiBudW1iZXIgPSAzNjAgLyB0aGlzLmNvbnRlbnQuY2hpbGRyZW5Db3VudDtcbiAgICAgICAgdGhpcy5jb250ZW50LmNoaWxkcmVuLmZvckVhY2goKHYsIGkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1EZWdyZWVNYXAuc2V0KHYsIGkgKiBhdmVyYWdlKTtcblxuICAgICAgICAgICAgdi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLml0ZW1Ub3VjaE1vdmUsIHRoaXMpO1xuICAgICAgICAgICAgdi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuaXRlbVRvdWNoRW5kLCB0aGlzKTtcbiAgICAgICAgICAgIHYub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLml0ZW1Ub3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlZnJlc2hJdGVtcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa7muWKqOWIsOaMh+WumuWtkOiKgueCueWkhFxuICAgICAqIEBwYXJhbSBpdGVtIOWtkOiKgueCuVxuICAgICAqL1xuICAgIHB1YmxpYyBzY3JvbGxUb0l0ZW0oaXRlbTogY2MuTm9kZSk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2l0ZW1EZWdyZWVNYXAuaGFzKGl0ZW0pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXRlbURlZ3JlZSA9IHRoaXMuX2l0ZW1EZWdyZWVNYXAuZ2V0KGl0ZW0pO1xuICAgICAgICBsZXQgZGVsdGEgPSBJTklUX0RFR1JFRSAtIGl0ZW1EZWdyZWU7XG4gICAgICAgIHRoaXMuX3RhcmdldERlZ3JlZSA9IGMyZi51dGlscy5tYXRoLm5vcm1hbGl6ZURlZ3JlZShkZWx0YSk7XG4gICAgICAgIHRoaXMuX3Njcm9sbGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuX3NlbGVjdENhbGw/LihpdGVtKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlZnJlc2hJdGVtcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250ZW50LmNoaWxkcmVuLmZvckVhY2goKHYsIGkpID0+IHtcbiAgICAgICAgICAgIGxldCBkZWdyZWUgPSBjMmYudXRpbHMubWF0aC5ub3JtYWxpemVEZWdyZWUodGhpcy5faXRlbURlZ3JlZU1hcC5nZXQodikgKyB0aGlzLmN1ckRlZ3JlZSk7XG4gICAgICAgICAgICBsZXQgcG9zID0gYzJmLnV0aWxzLnZlYy5nZXRFbGxpcHNlUG9pbnQodGhpcy5lbGxpcHNlQXhlcy54LCB0aGlzLmVsbGlwc2VBeGVzLnksIGRlZ3JlZSk7XG4gICAgICAgICAgICB2LnNldFBvc2l0aW9uKHBvcyk7XG4gICAgICAgICAgICB2LnpJbmRleCA9IC12Lnk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2luaXQgfHwgIXRoaXMuX3Njcm9sbGluZyB8fCB0aGlzLmN1ckRlZ3JlZSA9PT0gdGhpcy5fdGFyZ2V0RGVncmVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGVsdGEgPSBNYXRoLmFicyh0aGlzLl90YXJnZXREZWdyZWUgLSB0aGlzLmN1ckRlZ3JlZSk7XG4gICAgICAgIGxldCBkZWdyZWUgPSB0aGlzLmN1ckRlZ3JlZTtcbiAgICAgICAgbGV0IHNpZ24gPSAoZGVsdGEgPCAxODAgPyAxIDogLTEpICogTWF0aC5zaWduKHRoaXMuX3RhcmdldERlZ3JlZSAtIHRoaXMuY3VyRGVncmVlKTtcbiAgICAgICAgZGVncmVlICs9IGR0ICogdGhpcy5zY3JvbGxTcGVlZCAqIHNpZ247XG5cbiAgICAgICAgaWYgKCh0aGlzLmN1ckRlZ3JlZSA+IHRoaXMuX3RhcmdldERlZ3JlZSAmJiBkZWdyZWUgPCB0aGlzLl90YXJnZXREZWdyZWUpIHx8ICh0aGlzLmN1ckRlZ3JlZSA8IHRoaXMuX3RhcmdldERlZ3JlZSAmJiBkZWdyZWUgPiB0aGlzLl90YXJnZXREZWdyZWUpKSB7XG4gICAgICAgICAgICBkZWdyZWUgPSB0aGlzLl90YXJnZXREZWdyZWU7XG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1ckRlZ3JlZSA9IGRlZ3JlZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGl0ZW1Ub3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcbiAgICAgICAgbGV0IGRlbHRhID0gZXZlbnQuZ2V0RGVsdGFYKCk7XG4gICAgICAgIGlmIChNYXRoLmFicyhkZWx0YSkgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fbWF4RGVsdGEgPCBNYXRoLmFicyhkZWx0YSkpIHtcbiAgICAgICAgICAgIHRoaXMuX21heERlbHRhID0gTWF0aC5hYnMoZGVsdGEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VyRGVncmVlID0gdGhpcy5jdXJEZWdyZWUgKyBkZWx0YSAvIDU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpdGVtVG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcbiAgICAgICAgbGV0IG5vZGUgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICh0aGlzLl9tYXhEZWx0YSA8IDUpIHtcbiAgICAgICAgICAgIHRoaXMuX21heERlbHRhID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9JdGVtKG5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1pbkRlbHRhID0gMzYwO1xuICAgICAgICBsZXQgbWluTm9kZSA9IHRoaXMuY29udGVudC5jaGlsZHJlblswXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbnRlbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBsZXQgaXRlbURlZ3JlZSA9IGMyZi51dGlscy5tYXRoLm5vcm1hbGl6ZURlZ3JlZSh0aGlzLl9pdGVtRGVncmVlTWFwLmdldChpdGVtKSArIHRoaXMuY3VyRGVncmVlKTtcbiAgICAgICAgICAgIGxldCBkZWx0YSA9IE1hdGguYWJzKElOSVRfREVHUkVFIC0gaXRlbURlZ3JlZSk7XG4gICAgICAgICAgICBpZiAoZGVsdGEgPiAxODApIHtcbiAgICAgICAgICAgICAgICBkZWx0YSA9IGl0ZW1EZWdyZWUgKyAzNjAgLSBJTklUX0RFR1JFRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZWx0YSA8IG1pbkRlbHRhKSB7XG4gICAgICAgICAgICAgICAgbWluRGVsdGEgPSBkZWx0YTtcbiAgICAgICAgICAgICAgICBtaW5Ob2RlID0gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tYXhEZWx0YSA9IDA7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9JdGVtKG1pbk5vZGUpO1xuICAgIH1cbn1cbiJdfQ==