
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/define/UIAnimaDef.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6b35KouaZCFpyRaoVcWe23', 'UIAnimaDef');
// c2f-framework/define/UIAnimaDef.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIAnimaTarget = exports.UIAnimaOnce = exports.UIAnimaParam = exports.UIAnimaFunc = exports.UIAnimaType = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIAnimaType;
(function (UIAnimaType) {
    UIAnimaType[UIAnimaType["none"] = 0] = "none";
    UIAnimaType[UIAnimaType["move"] = 1] = "move";
    UIAnimaType[UIAnimaType["scale"] = 2] = "scale";
    UIAnimaType[UIAnimaType["opacity"] = 3] = "opacity";
    UIAnimaType[UIAnimaType["ratation"] = 4] = "ratation";
    UIAnimaType[UIAnimaType["function"] = 5] = "function";
    UIAnimaType[UIAnimaType["delay"] = 6] = "delay";
})(UIAnimaType = exports.UIAnimaType || (exports.UIAnimaType = {}));
var UIAnimaFunc = /** @class */ (function () {
    function UIAnimaFunc() {
        this.tarNode = null;
        this.compName = '';
        this.funcName = '';
    }
    __decorate([
        property(cc.Node)
    ], UIAnimaFunc.prototype, "tarNode", void 0);
    __decorate([
        property()
    ], UIAnimaFunc.prototype, "compName", void 0);
    __decorate([
        property()
    ], UIAnimaFunc.prototype, "funcName", void 0);
    UIAnimaFunc = __decorate([
        ccclass("UIAnimaFunc")
    ], UIAnimaFunc);
    return UIAnimaFunc;
}());
exports.UIAnimaFunc = UIAnimaFunc;
var UIAnimaParam = /** @class */ (function () {
    function UIAnimaParam() {
        this.animaTp = UIAnimaType.none;
        this.byVec2 = cc.v2(0, 0);
        this.byNum = 0;
        this.cbHandler = new UIAnimaFunc();
    }
    __decorate([
        property({ type: cc.Enum(UIAnimaType) })
    ], UIAnimaParam.prototype, "animaTp", void 0);
    __decorate([
        property({ visible: function () { return this.animaTp === UIAnimaType.move || this.animaTp === UIAnimaType.scale; } })
    ], UIAnimaParam.prototype, "byVec2", void 0);
    __decorate([
        property({ visible: function () { return this.animaTp === UIAnimaType.opacity || this.animaTp === UIAnimaType.ratation; } })
    ], UIAnimaParam.prototype, "byNum", void 0);
    __decorate([
        property({ type: UIAnimaFunc, visible: function () { return this.animaTp === UIAnimaType.function; } })
    ], UIAnimaParam.prototype, "cbHandler", void 0);
    UIAnimaParam = __decorate([
        ccclass("UIAnimaParam")
    ], UIAnimaParam);
    return UIAnimaParam;
}());
exports.UIAnimaParam = UIAnimaParam;
var UIAnimaOnce = /** @class */ (function () {
    function UIAnimaOnce() {
        this.duration = 0;
        this.animaList = [];
    }
    __decorate([
        property()
    ], UIAnimaOnce.prototype, "duration", void 0);
    __decorate([
        property(UIAnimaParam)
    ], UIAnimaOnce.prototype, "animaList", void 0);
    UIAnimaOnce = __decorate([
        ccclass("UIAnimaOnce")
    ], UIAnimaOnce);
    return UIAnimaOnce;
}());
exports.UIAnimaOnce = UIAnimaOnce;
var UIAnimaTarget = /** @class */ (function () {
    function UIAnimaTarget() {
        this.tarNode = null;
        this.actionList = [];
    }
    __decorate([
        property(cc.Node)
    ], UIAnimaTarget.prototype, "tarNode", void 0);
    __decorate([
        property(UIAnimaOnce)
    ], UIAnimaTarget.prototype, "actionList", void 0);
    UIAnimaTarget = __decorate([
        ccclass("UIAnimaTarget")
    ], UIAnimaTarget);
    return UIAnimaTarget;
}());
exports.UIAnimaTarget = UIAnimaTarget;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2RlZmluZS9VSUFuaW1hRGVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQVksV0FRWDtBQVJELFdBQVksV0FBVztJQUNuQiw2Q0FBUSxDQUFBO0lBQ1IsNkNBQVEsQ0FBQTtJQUNSLCtDQUFTLENBQUE7SUFDVCxtREFBVyxDQUFBO0lBQ1gscURBQVksQ0FBQTtJQUNaLHFEQUFZLENBQUE7SUFDWiwrQ0FBUyxDQUFBO0FBQ2IsQ0FBQyxFQVJXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBUXRCO0FBR0Q7SUFBQTtRQUdJLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUd0QixhQUFRLEdBQVcsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFQRztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNNO0lBR3hCO1FBREMsUUFBUSxFQUFFO2lEQUNXO0lBR3RCO1FBREMsUUFBUSxFQUFFO2lEQUNXO0lBVGIsV0FBVztRQUR2QixPQUFPLENBQUMsYUFBYSxDQUFDO09BQ1YsV0FBVyxDQVV2QjtJQUFELGtCQUFDO0NBVkQsQUFVQyxJQUFBO0FBVlksa0NBQVc7QUFjeEI7SUFBQTtRQUVJLFlBQU8sR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBRzNCLFdBQU0sR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUc5QixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLGNBQVMsR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBVkc7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO2lEQUNkO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxnQkFBSyxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnREFDOUU7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLGdCQUFLLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDLFFBQVEsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDOytDQUMvRjtJQUdsQjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxnQkFBSyxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO21EQUNsRDtJQVhsQyxZQUFZO1FBRHhCLE9BQU8sQ0FBQyxjQUFjLENBQUM7T0FDWCxZQUFZLENBWXhCO0lBQUQsbUJBQUM7Q0FaRCxBQVlDLElBQUE7QUFaWSxvQ0FBWTtBQWV6QjtJQUFBO1FBR0ksYUFBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixjQUFTLEdBQW1CLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBSkc7UUFEQyxRQUFRLEVBQUU7aURBQ1U7SUFHckI7UUFEQyxRQUFRLENBQUMsWUFBWSxDQUFDO2tEQUNRO0lBTnRCLFdBQVc7UUFEdkIsT0FBTyxDQUFDLGFBQWEsQ0FBQztPQUNWLFdBQVcsQ0FPdkI7SUFBRCxrQkFBQztDQVBELEFBT0MsSUFBQTtBQVBZLGtDQUFXO0FBVXhCO0lBQUE7UUFHSSxZQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGVBQVUsR0FBa0IsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFKRztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLFdBQVcsQ0FBQztxREFDUztJQU50QixhQUFhO1FBRHpCLE9BQU8sQ0FBQyxlQUFlLENBQUM7T0FDWixhQUFhLENBT3pCO0lBQUQsb0JBQUM7Q0FQRCxBQU9DLElBQUE7QUFQWSxzQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBlbnVtIFVJQW5pbWFUeXBlIHtcbiAgICBub25lID0gMCxcbiAgICBtb3ZlID0gMSxcbiAgICBzY2FsZSA9IDIsXG4gICAgb3BhY2l0eSA9IDMsXG4gICAgcmF0YXRpb24gPSA0LFxuICAgIGZ1bmN0aW9uID0gNSxcbiAgICBkZWxheSA9IDYsXG59XG5cbkBjY2NsYXNzKFwiVUlBbmltYUZ1bmNcIilcbmV4cG9ydCBjbGFzcyBVSUFuaW1hRnVuYyB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0YXJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSgpXG4gICAgY29tcE5hbWU6IHN0cmluZyA9ICcnO1xuXG4gICAgQHByb3BlcnR5KClcbiAgICBmdW5jTmFtZTogc3RyaW5nID0gJyc7XG59XG5cblxuQGNjY2xhc3MoXCJVSUFuaW1hUGFyYW1cIilcbmV4cG9ydCBjbGFzcyBVSUFuaW1hUGFyYW0ge1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oVUlBbmltYVR5cGUpIH0pXG4gICAgYW5pbWFUcCA9IFVJQW5pbWFUeXBlLm5vbmU7XG5cbiAgICBAcHJvcGVydHkoeyB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5hbmltYVRwID09PSBVSUFuaW1hVHlwZS5tb3ZlIHx8IHRoaXMuYW5pbWFUcCA9PT0gVUlBbmltYVR5cGUuc2NhbGU7IH0gfSlcbiAgICBieVZlYzI6IGNjLlZlYzIgPSBjYy52MigwLCAwKTtcblxuICAgIEBwcm9wZXJ0eSh7IHZpc2libGUoKSB7IHJldHVybiB0aGlzLmFuaW1hVHAgPT09IFVJQW5pbWFUeXBlLm9wYWNpdHkgfHwgdGhpcy5hbmltYVRwID09PSBVSUFuaW1hVHlwZS5yYXRhdGlvbiB9IH0pXG4gICAgYnlOdW06IG51bWJlciA9IDA7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBVSUFuaW1hRnVuYywgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuYW5pbWFUcCA9PT0gVUlBbmltYVR5cGUuZnVuY3Rpb247IH0gfSlcbiAgICBjYkhhbmRsZXI6IFVJQW5pbWFGdW5jID0gbmV3IFVJQW5pbWFGdW5jKCk7XG59XG5cbkBjY2NsYXNzKFwiVUlBbmltYU9uY2VcIilcbmV4cG9ydCBjbGFzcyBVSUFuaW1hT25jZSB7XG5cbiAgICBAcHJvcGVydHkoKVxuICAgIGR1cmF0aW9uOiBudW1iZXIgPSAwO1xuXG4gICAgQHByb3BlcnR5KFVJQW5pbWFQYXJhbSlcbiAgICBhbmltYUxpc3Q6IFVJQW5pbWFQYXJhbVtdID0gW107XG59XG5cbkBjY2NsYXNzKFwiVUlBbmltYVRhcmdldFwiKVxuZXhwb3J0IGNsYXNzIFVJQW5pbWFUYXJnZXQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGFyTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoVUlBbmltYU9uY2UpXG4gICAgYWN0aW9uTGlzdDogVUlBbmltYU9uY2VbXSA9IFtdO1xufSJdfQ==