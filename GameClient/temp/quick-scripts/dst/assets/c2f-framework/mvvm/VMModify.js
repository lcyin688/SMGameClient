
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/mvvm/VMModify.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'beaf8+GIi1EK6UK3uqNhP/P', 'VMModify');
// c2f-framework/mvvm/VMModify.ts

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
var VMBase_1 = require("./VMBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
/**限制值边界范围的模式 */
var CLAMP_MODE;
(function (CLAMP_MODE) {
    CLAMP_MODE[CLAMP_MODE["MIN"] = 0] = "MIN";
    CLAMP_MODE[CLAMP_MODE["MAX"] = 1] = "MAX";
    CLAMP_MODE[CLAMP_MODE["MIN_MAX"] = 2] = "MIN_MAX";
})(CLAMP_MODE || (CLAMP_MODE = {}));
/**
 * [VM-Modify]
 * 动态快速的修改模型的数值,使用按钮 绑定该组件上的函数，即可动态调用
 * 修改 Model 的值
 */
var VMModify = /** @class */ (function (_super) {
    __extends(VMModify, _super);
    function VMModify() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.watchPath = "";
        _this.valueClamp = false;
        _this.valueClampMode = CLAMP_MODE.MIN_MAX;
        _this.valueMin = 0;
        _this.valueMax = 1;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    VMModify.prototype.start = function () {
    };
    //限制最终结果的取值范围
    VMModify.prototype.clampValue = function (res) {
        var min = this.valueMin;
        var max = this.valueMax;
        if (this.valueClamp == false)
            return res;
        switch (this.valueClampMode) {
            case CLAMP_MODE.MIN_MAX:
                if (res > max)
                    res = max;
                if (res < min)
                    res = min;
                break;
            case CLAMP_MODE.MIN:
                if (res < min)
                    res = min;
                break;
            case CLAMP_MODE.MAX:
                if (res > max)
                    res = max;
                break;
            default:
                break;
        }
        return res;
    };
    VMModify.prototype.vAddInt = function (e, data) {
        this.vAdd(e, data, true);
    };
    VMModify.prototype.vSubInt = function (e, data) {
        this.vSub(e, data, true);
    };
    VMModify.prototype.vMulInt = function (e, data) {
        this.vMul(e, data, true);
    };
    VMModify.prototype.vDivInt = function (e, data) {
        this.vDiv(e, data, true);
    };
    VMModify.prototype.vAdd = function (e, data, int) {
        if (int === void 0) { int = false; }
        var a = parseFloat(data);
        var res = this.VM.getValue(this.watchPath, 0) + a;
        if (int) {
            res = Math.round(res);
        }
        this.VM.setValue(this.watchPath, this.clampValue(res));
    };
    VMModify.prototype.vSub = function (e, data, int) {
        if (int === void 0) { int = false; }
        var a = parseFloat(data);
        var res = this.VM.getValue(this.watchPath, 0) - a;
        if (int) {
            res = Math.round(res);
        }
        this.VM.setValue(this.watchPath, this.clampValue(res));
    };
    VMModify.prototype.vMul = function (e, data, int) {
        if (int === void 0) { int = false; }
        var a = parseFloat(data);
        var res = this.VM.getValue(this.watchPath, 0) * a;
        if (int) {
            res = Math.round(res);
        }
        this.VM.setValue(this.watchPath, this.clampValue(res));
    };
    VMModify.prototype.vDiv = function (e, data, int) {
        if (int === void 0) { int = false; }
        var a = parseFloat(data);
        var res = this.VM.getValue(this.watchPath, 0) / a;
        if (int) {
            res = Math.round(res);
        }
        this.VM.setValue(this.watchPath, this.clampValue(res));
    };
    VMModify.prototype.vString = function (e, data) {
        var a = data;
        this.VM.setValue(this.watchPath, a);
    };
    VMModify.prototype.vNumberInt = function (e, data) {
        this.vNumber(e, data, true);
    };
    VMModify.prototype.vNumber = function (e, data, int) {
        if (int === void 0) { int = false; }
        var a = parseFloat(data);
        if (int) {
            a = Math.round(a);
        }
        this.VM.setValue(this.watchPath, this.clampValue(a));
    };
    __decorate([
        property
    ], VMModify.prototype, "watchPath", void 0);
    __decorate([
        property()
    ], VMModify.prototype, "valueClamp", void 0);
    __decorate([
        property({
            type: cc.Enum(CLAMP_MODE),
            visible: function () { return this.valueClamp === true; }
        })
    ], VMModify.prototype, "valueClampMode", void 0);
    __decorate([
        property({
            visible: function () { return this.valueClamp === true && this.valueClampMode !== CLAMP_MODE.MAX; }
        })
    ], VMModify.prototype, "valueMin", void 0);
    __decorate([
        property({
            visible: function () { return this.valueClamp === true && this.valueClampMode !== CLAMP_MODE.MIN; }
        })
    ], VMModify.prototype, "valueMax", void 0);
    VMModify = __decorate([
        ccclass,
        menu('ModelViewer/VM-Modify(修改Model)')
    ], VMModify);
    return VMModify;
}(VMBase_1.default));
exports.default = VMModify;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL212dm0vVk1Nb2RpZnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBR3hCLElBQUEsS0FBOEIsRUFBRSxDQUFDLFVBQVUsRUFBekMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBRWxELGdCQUFnQjtBQUNoQixJQUFLLFVBSUo7QUFKRCxXQUFLLFVBQVU7SUFDWCx5Q0FBRyxDQUFBO0lBQ0gseUNBQUcsQ0FBQTtJQUNILGlEQUFPLENBQUE7QUFDWCxDQUFDLEVBSkksVUFBVSxLQUFWLFVBQVUsUUFJZDtBQUVEOzs7O0dBSUc7QUFHSDtJQUFzQyw0QkFBTTtJQUE1QztRQUFBLHFFQWlIQztRQTlHRyxlQUFTLEdBQVcsRUFBRSxDQUFDO1FBR3ZCLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBTTVCLG9CQUFjLEdBQWUsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUtoRCxjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBS3JCLGNBQVEsR0FBVyxDQUFDLENBQUM7O1FBMEZyQixpQkFBaUI7SUFDckIsQ0FBQztJQXpGRyx3QkFBd0I7SUFFeEIsd0JBQUssR0FBTDtJQUNBLENBQUM7SUFFRCxhQUFhO0lBQ0wsNkJBQVUsR0FBbEIsVUFBbUIsR0FBRztRQUNsQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3hCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUs7WUFBRSxPQUFPLEdBQUcsQ0FBQztRQUN6QyxRQUFRLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDekIsS0FBSyxVQUFVLENBQUMsT0FBTztnQkFDbkIsSUFBSSxHQUFHLEdBQUcsR0FBRztvQkFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUN6QixJQUFJ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QUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQUU7UUFDOUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQTNHRDtRQURDLFFBQVE7K0NBQ2M7SUFHdkI7UUFEQyxRQUFRLEVBQUU7Z0RBQ2lCO0lBTTVCO1FBSkMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3pCLE9BQU8sRUFBRSxjQUFjLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUEsQ0FBQyxDQUFDO1NBQzNELENBQUM7b0RBQzhDO0lBS2hEO1FBSEMsUUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLGNBQWMsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFVBQVUsQ0FBQyxHQUFHLENBQUEsQ0FBQyxDQUFDO1NBQ3JHLENBQUM7OENBQ21CO0lBS3JCO1FBSEMsUUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLGNBQWMsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFVBQVUsQ0FBQyxHQUFHLENBQUEsQ0FBQyxDQUFDO1NBQ3JHLENBQUM7OENBQ21CO0lBdEJKLFFBQVE7UUFGNUIsT0FBTztRQUNQLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQztPQUNsQixRQUFRLENBaUg1QjtJQUFELGVBQUM7Q0FqSEQsQUFpSEMsQ0FqSHFDLGdCQUFNLEdBaUgzQztrQkFqSG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVk1CYXNlIGZyb20gJy4vVk1CYXNlJztcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKirpmZDliLblgLzovrnnlYzojIPlm7TnmoTmqKHlvI8gKi9cbmVudW0gQ0xBTVBfTU9ERSB7XG4gICAgTUlOLFxuICAgIE1BWCxcbiAgICBNSU5fTUFYLFxufVxuXG4vKipcbiAqIFtWTS1Nb2RpZnldXG4gKiDliqjmgIHlv6vpgJ/nmoTkv67mlLnmqKHlnovnmoTmlbDlgLws5L2/55So5oyJ6ZKuIOe7keWumuivpee7hOS7tuS4iueahOWHveaVsO+8jOWNs+WPr+WKqOaAgeiwg+eUqFxuICog5L+u5pS5IE1vZGVsIOeahOWAvFxuICovXG5AY2NjbGFzc1xuQG1lbnUoJ01vZGVsVmlld2VyL1ZNLU1vZGlmeSjkv67mlLlNb2RlbCknKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVk1Nb2RpZnkgZXh0ZW5kcyBWTUJhc2Uge1xuXG4gICAgQHByb3BlcnR5XG4gICAgd2F0Y2hQYXRoOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgQHByb3BlcnR5KClcbiAgICB2YWx1ZUNsYW1wOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5FbnVtKENMQU1QX01PREUpLFxuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLnZhbHVlQ2xhbXAgPT09IHRydWUgfVxuICAgIH0pXG4gICAgdmFsdWVDbGFtcE1vZGU6IENMQU1QX01PREUgPSBDTEFNUF9NT0RFLk1JTl9NQVg7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLnZhbHVlQ2xhbXAgPT09IHRydWUgJiYgdGhpcy52YWx1ZUNsYW1wTW9kZSAhPT0gQ0xBTVBfTU9ERS5NQVggfVxuICAgIH0pXG4gICAgdmFsdWVNaW46IG51bWJlciA9IDA7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLnZhbHVlQ2xhbXAgPT09IHRydWUgJiYgdGhpcy52YWx1ZUNsYW1wTW9kZSAhPT0gQ0xBTVBfTU9ERS5NSU4gfVxuICAgIH0pXG4gICAgdmFsdWVNYXg6IG51bWJlciA9IDE7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIHN0YXJ0KCkge1xuICAgIH1cblxuICAgIC8v6ZmQ5Yi25pyA57uI57uT5p6c55qE5Y+W5YC86IyD5Zu0XG4gICAgcHJpdmF0ZSBjbGFtcFZhbHVlKHJlcykge1xuICAgICAgICBsZXQgbWluID0gdGhpcy52YWx1ZU1pbjtcbiAgICAgICAgbGV0IG1heCA9IHRoaXMudmFsdWVNYXg7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlQ2xhbXAgPT0gZmFsc2UpIHJldHVybiByZXM7XG4gICAgICAgIHN3aXRjaCAodGhpcy52YWx1ZUNsYW1wTW9kZSkge1xuICAgICAgICAgICAgY2FzZSBDTEFNUF9NT0RFLk1JTl9NQVg6XG4gICAgICAgICAgICAgICAgaWYgKHJlcyA+IG1heCkgcmVzID0gbWF4O1xuICAgICAgICAgICAgICAgIGlmIChyZXMgPCBtaW4pIHJlcyA9IG1pbjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ0xBTVBfTU9ERS5NSU46XG4gICAgICAgICAgICAgICAgaWYgKHJlcyA8IG1pbikgcmVzID0gbWluO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDTEFNUF9NT0RFLk1BWDpcbiAgICAgICAgICAgICAgICBpZiAocmVzID4gbWF4KSByZXMgPSBtYXg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cblxuICAgIHZBZGRJbnQoZSwgZGF0YSkge1xuICAgICAgICB0aGlzLnZBZGQoZSwgZGF0YSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgdlN1YkludChlLCBkYXRhKSB7XG4gICAgICAgIHRoaXMudlN1YihlLCBkYXRhLCB0cnVlKTtcbiAgICB9XG5cbiAgICB2TXVsSW50KGUsIGRhdGEpIHtcbiAgICAgICAgdGhpcy52TXVsKGUsIGRhdGEsIHRydWUpO1xuICAgIH1cblxuICAgIHZEaXZJbnQoZSwgZGF0YSkge1xuICAgICAgICB0aGlzLnZEaXYoZSwgZGF0YSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgdkFkZChlOiBjYy5FdmVudCwgZGF0YTogYW55LCBpbnQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgYSA9IHBhcnNlRmxvYXQoZGF0YSk7XG4gICAgICAgIGxldCByZXMgPSB0aGlzLlZNLmdldFZhbHVlKHRoaXMud2F0Y2hQYXRoLCAwKSArIGE7XG4gICAgICAgIGlmIChpbnQpIHsgcmVzID0gTWF0aC5yb3VuZChyZXMpIH1cbiAgICAgICAgdGhpcy5WTS5zZXRWYWx1ZSh0aGlzLndhdGNoUGF0aCwgdGhpcy5jbGFtcFZhbHVlKHJlcykpO1xuICAgIH1cblxuICAgIHZTdWIoZSwgZGF0YTogYW55LCBpbnQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgYSA9IHBhcnNlRmxvYXQoZGF0YSk7XG4gICAgICAgIGxldCByZXMgPSB0aGlzLlZNLmdldFZhbHVlKHRoaXMud2F0Y2hQYXRoLCAwKSAtIGE7XG4gICAgICAgIGlmIChpbnQpIHsgcmVzID0gTWF0aC5yb3VuZChyZXMpIH1cbiAgICAgICAgdGhpcy5WTS5zZXRWYWx1ZSh0aGlzLndhdGNoUGF0aCwgdGhpcy5jbGFtcFZhbHVlKHJlcykpO1xuICAgIH1cblxuICAgIHZNdWwoZSwgZGF0YTogYW55LCBpbnQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgYSA9IHBhcnNlRmxvYXQoZGF0YSk7XG4gICAgICAgIGxldCByZXMgPSB0aGlzLlZNLmdldFZhbHVlKHRoaXMud2F0Y2hQYXRoLCAwKSAqIGE7XG4gICAgICAgIGlmIChpbnQpIHsgcmVzID0gTWF0aC5yb3VuZChyZXMpIH1cbiAgICAgICAgdGhpcy5WTS5zZXRWYWx1ZSh0aGlzLndhdGNoUGF0aCwgdGhpcy5jbGFtcFZhbHVlKHJlcykpO1xuICAgIH1cblxuICAgIHZEaXYoZSwgZGF0YTogYW55LCBpbnQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgYSA9IHBhcnNlRmxvYXQoZGF0YSk7XG4gICAgICAgIGxldCByZXMgPSB0aGlzLlZNLmdldFZhbHVlKHRoaXMud2F0Y2hQYXRoLCAwKSAvIGE7XG4gICAgICAgIGlmIChpbnQpIHsgcmVzID0gTWF0aC5yb3VuZChyZXMpIH1cbiAgICAgICAgdGhpcy5WTS5zZXRWYWx1ZSh0aGlzLndhdGNoUGF0aCwgdGhpcy5jbGFtcFZhbHVlKHJlcykpO1xuICAgIH1cblxuICAgIHZTdHJpbmcoZSwgZGF0YTogYW55KSB7XG4gICAgICAgIGxldCBhID0gZGF0YTtcbiAgICAgICAgdGhpcy5WTS5zZXRWYWx1ZSh0aGlzLndhdGNoUGF0aCwgYSk7XG4gICAgfVxuXG4gICAgdk51bWJlckludChlLCBkYXRhOiBhbnkpIHtcbiAgICAgICAgdGhpcy52TnVtYmVyKGUsIGRhdGEsIHRydWUpO1xuICAgIH1cblxuICAgIHZOdW1iZXIoZSwgZGF0YTogYW55LCBpbnQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgYSA9IHBhcnNlRmxvYXQoZGF0YSk7XG4gICAgICAgIGlmIChpbnQpIHsgYSA9IE1hdGgucm91bmQoYSkgfVxuICAgICAgICB0aGlzLlZNLnNldFZhbHVlKHRoaXMud2F0Y2hQYXRoLCB0aGlzLmNsYW1wVmFsdWUoYSkpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=