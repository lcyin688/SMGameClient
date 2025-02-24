
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/ui/button/UIAudioEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b31d03ujX5NlLMAU8z6EFXe', 'UIAudioEffect');
// c2f-framework/component/ui/button/UIAudioEffect.ts

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
var UIHelper_1 = require("../../../../Script/game/UIHelper");
var C2FConst_1 = require("../../../define/C2FConst");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var UIAudioEffect = /** @class */ (function (_super) {
    __extends(UIAudioEffect, _super);
    function UIAudioEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audioId = C2FConst_1.C2FConst.UIAudioID.unknown;
        _this.playOnClick = true;
        _this.playOnLoad = false;
        return _this;
    }
    UIAudioEffect.prototype.onLoad = function () {
        if (this.playOnClick) {
            this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchtStart, this);
            this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }
        else if (this.playOnLoad) {
        }
    };
    UIAudioEffect.prototype.onDestroy = function () {
        if (this.playOnClick) {
            this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchtStart, this);
            this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }
    };
    UIAudioEffect.prototype.onTouchtStart = function (event) {
        UIHelper_1.UIHelper.playEffect("betClick");
    };
    UIAudioEffect.prototype.onTouchEnd = function (event) {
    };
    __decorate([
        property({
            type: cc.Enum(C2FConst_1.C2FConst.UIAudioID),
            tooltip: "音效类型"
        })
    ], UIAudioEffect.prototype, "audioId", void 0);
    __decorate([
        property({ tooltip: "点击时播放" })
    ], UIAudioEffect.prototype, "playOnClick", void 0);
    __decorate([
        property({ tooltip: "加载完成播放", visible: function () { return !this.playOnClick; } })
    ], UIAudioEffect.prototype, "playOnLoad", void 0);
    UIAudioEffect = __decorate([
        ccclass,
        menu("c2f/UI/UIAudioEffect")
    ], UIAudioEffect);
    return UIAudioEffect;
}(cc.Component));
exports.default = UIAudioEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC91aS9idXR0b24vVUlBdWRpb0VmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2REFBNEQ7QUFDNUQscURBQW9EO0FBSTlDLElBQUEsS0FBOEIsRUFBRSxDQUFDLFVBQVUsRUFBekMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBR2xEO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBd0NDO1FBbENHLGFBQU8sR0FBRyxtQkFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFHckMsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7O0lBNEJoQyxDQUFDO0lBMUJHLDhCQUFNLEdBQU47UUFDSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdkU7YUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7U0FFM0I7SUFDTCxDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN4RTtJQUNMLENBQUM7SUFFUyxxQ0FBYSxHQUF2QixVQUF3QixLQUEwQjtRQUM5QyxtQkFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRVMsa0NBQVUsR0FBcEIsVUFBcUIsS0FBMEI7SUFDL0MsQ0FBQztJQS9CRDtRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFRLENBQUMsU0FBUyxDQUFDO1lBQ2pDLE9BQU8sRUFBRSxNQUFNO1NBQ2xCLENBQUM7a0RBQ21DO0lBR3JDO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO3NEQUNIO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsY0FBYyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO3FEQUN4RDtJQVpYLGFBQWE7UUFGakMsT0FBTztRQUNQLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztPQUNSLGFBQWEsQ0F3Q2pDO0lBQUQsb0JBQUM7Q0F4Q0QsQUF3Q0MsQ0F4QzBDLEVBQUUsQ0FBQyxTQUFTLEdBd0N0RDtrQkF4Q29CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVSUhlbHBlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvZ2FtZS9VSUhlbHBlclwiO1xuaW1wb3J0IHsgQzJGQ29uc3QgfSBmcm9tIFwiLi4vLi4vLi4vZGVmaW5lL0MyRkNvbnN0XCI7XG5cblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbkBtZW51KFwiYzJmL1VJL1VJQXVkaW9FZmZlY3RcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQXVkaW9FZmZlY3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuRW51bShDMkZDb25zdC5VSUF1ZGlvSUQpLFxuICAgICAgICB0b29sdGlwOiBcIumfs+aViOexu+Wei1wiXG4gICAgfSlcbiAgICBhdWRpb0lkID0gQzJGQ29uc3QuVUlBdWRpb0lELnVua25vd247XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIueCueWHu+aXtuaSreaUvlwiIH0pXG4gICAgcGxheU9uQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCLliqDovb3lrozmiJDmkq3mlL5cIiwgdmlzaWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gIXRoaXMucGxheU9uQ2xpY2s7IH0gfSlcbiAgICBwbGF5T25Mb2FkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXlPbkNsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaHRTdGFydCwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXlPbkxvYWQpIHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5wbGF5T25DbGljaykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNodFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Ub3VjaHRTdGFydChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgICAgICBVSUhlbHBlci5wbGF5RWZmZWN0KFwiYmV0Q2xpY2tcIilcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Ub3VjaEVuZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgIH1cblxuXG59Il19