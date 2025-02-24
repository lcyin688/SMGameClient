
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/animation/RotationSelf.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '08a4cwtdYhD/p2j71yoNU9K', 'RotationSelf');
// c2f-framework/component/animation/RotationSelf.ts

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
exports.RotationSelf = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var RotationSelf = /** @class */ (function (_super) {
    __extends(RotationSelf, _super);
    function RotationSelf() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onceDur = 5;
        _this.clockwise = true;
        return _this;
    }
    RotationSelf.prototype.onLoad = function () {
    };
    RotationSelf.prototype.start = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.playRotate();
        });
    };
    RotationSelf.prototype.playRotate = function () {
        var dstValue = this.clockwise ? 359 : -359;
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node)
            .by(this.onceDur, { angle: dstValue })
            .repeatForever()
            .start();
    };
    __decorate([
        property({ serializable: true })
    ], RotationSelf.prototype, "onceDur", void 0);
    __decorate([
        property({ serializable: true })
    ], RotationSelf.prototype, "clockwise", void 0);
    RotationSelf = __decorate([
        ccclass,
        menu('c2f/animation/RotationSelf')
    ], RotationSelf);
    return RotationSelf;
}(cc.Component));
exports.RotationSelf = RotationSelf;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9hbmltYXRpb24vUm90YXRpb25TZWxmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQThCLEVBQUUsQ0FBQyxVQUFVLEVBQXpDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBa0IsQ0FBQztBQUdsRDtJQUFrQyxnQ0FBWTtJQUE5QztRQUFBLHFFQXlCQztRQXRCVyxhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBR3BCLGVBQVMsR0FBWSxJQUFJLENBQUM7O0lBbUJ0QyxDQUFDO0lBakJHLDZCQUFNLEdBQU47SUFDQSxDQUFDO0lBRUQsNEJBQUssR0FBTDtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTyxpQ0FBVSxHQUFsQjtRQUNJLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDM0MsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDO2FBQ3JDLGFBQWEsRUFBRTthQUNmLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFyQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUM7aURBQ0w7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUM7bURBQ0M7SUFOekIsWUFBWTtRQUZ4QixPQUFPO1FBQ1AsSUFBSSxDQUFDLDRCQUE0QixDQUFDO09BQ3RCLFlBQVksQ0F5QnhCO0lBQUQsbUJBQUM7Q0F6QkQsQUF5QkMsQ0F6QmlDLEVBQUUsQ0FBQyxTQUFTLEdBeUI3QztBQXpCWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIG1lbnUgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuQG1lbnUoJ2MyZi9hbmltYXRpb24vUm90YXRpb25TZWxmJylcbmV4cG9ydCBjbGFzcyBSb3RhdGlvblNlbGYgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHsgc2VyaWFsaXphYmxlOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSBvbmNlRHVyOiBudW1iZXIgPSA1O1xuXG4gICAgQHByb3BlcnR5KHsgc2VyaWFsaXphYmxlOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSBjbG9ja3dpc2U6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsYXlSb3RhdGUoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYXlSb3RhdGUoKSB7XG4gICAgICAgIGxldCBkc3RWYWx1ZSA9IHRoaXMuY2xvY2t3aXNlID8gMzU5IDogLTM1OTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZSk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgIC5ieSh0aGlzLm9uY2VEdXIsIHsgYW5nbGU6IGRzdFZhbHVlIH0pXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcigpXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG59Il19