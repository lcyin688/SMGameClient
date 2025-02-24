"use strict";
cc._RF.push(module, '695dbslIshGdbVofNL6qfBP', 'C2FSafeArea');
// c2f-framework/component/common/C2FSafeArea.ts

"use strict";
//屏幕适配
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var C2FSafeArea = /** @class */ (function (_super) {
    __extends(C2FSafeArea, _super);
    function C2FSafeArea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.topEnable = false;
        _this.bottomEnable = false;
        return _this;
    }
    C2FSafeArea.prototype.onLoad = function () {
        this.updateArea();
    };
    C2FSafeArea.prototype.updateArea = function () {
        var dH = cc.view.getDesignResolutionSize().height;
        var rH = cc.winSize.height;
        var rW = cc.winSize.width;
        var nH = this.node.height;
        var safeRect = c2f.utils.platform.getSafeAreaR();
        var notchHeight = (rH - safeRect.height) * 0.5;
        // cc.log("notchHeight == ", notchHeight);
        if (cc.sys.os === cc.sys.OS_IOS) {
            notchHeight = notchHeight / 2;
        }
        else {
            notchHeight = notchHeight > 43 && 43 || notchHeight;
        }
        var widget = this.node.getComponent(cc.Widget);
        if (widget) {
            var keyOriT = 'oriTop';
            var keyOriB = 'oriBot';
            if (this.topEnable && widget.isAlignTop) {
                if (!widget[keyOriT]) {
                    widget[keyOriT] = widget.top;
                }
                widget.top = widget[keyOriT] + 2 * notchHeight;
            }
            if (this.bottomEnable && widget.isAlignBottom) {
                if (!widget[keyOriB]) {
                    widget[keyOriB] = widget.bottom;
                }
                widget.bottom = widget[keyOriB] + safeRect.y || 10;
            }
            widget.updateAlignment();
        }
        else {
            var paddingTop = dH * 0.5 - this.node.y;
            this.node.y = safeRect.height * 0.5 - paddingTop - notchHeight;
        }
    };
    C2FSafeArea.prototype.setTopEnable = function (enable) {
        this.topEnable = enable;
        this.updateArea();
    };
    __decorate([
        property()
    ], C2FSafeArea.prototype, "topEnable", void 0);
    __decorate([
        property()
    ], C2FSafeArea.prototype, "bottomEnable", void 0);
    C2FSafeArea = __decorate([
        ccclass,
        menu("c2f/common/C2FSafeArea")
    ], C2FSafeArea);
    return C2FSafeArea;
}(cc.Component));
exports.default = C2FSafeArea;

cc._RF.pop();