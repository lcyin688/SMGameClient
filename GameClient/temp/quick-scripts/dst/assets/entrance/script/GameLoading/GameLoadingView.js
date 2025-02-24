
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/GameLoading/GameLoadingView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eaebbLRZnRDC6UUEgoJkY6o', 'GameLoadingView');
// entrance/script/GameLoading/GameLoadingView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in GameLoadingView.ts .
// If you need add data, please write in GameLoadingViewModel.ts .
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
var UIViewBase_1 = require("./../../../c2f-framework/gui/layer/UIViewBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameLoadingView = /** @class */ (function (_super) {
    __extends(GameLoadingView, _super);
    function GameLoadingView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'GameLoading';
        _this.barLoadingSprite = undefined;
        _this.barLoadingProgressBar = undefined;
        _this.noticeBotLabel = undefined;
        _this.noticeBotLabelOutline = undefined;
        _this.progressLabel = undefined;
        _this.progressLabelOutline = undefined;
        return _this;
    }
    GameLoadingView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GameLoadingView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    GameLoadingView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    GameLoadingView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.barLoading = this.get('_barLoading_');
        this.barLoadingSprite = this.barLoading.getComponent(cc.Sprite);
        this.barLoadingProgressBar = this.barLoading.getComponent(cc.ProgressBar);
        this.noticeBot = this.get('_noticeBot_');
        this.noticeBotLabel = this.noticeBot.getComponent(cc.Label);
        this.noticeBotLabelOutline = this.noticeBot.getComponent(cc.LabelOutline);
        this.progress = this.get('_progress_');
        this.progressLabel = this.progress.getComponent(cc.Label);
        this.progressLabelOutline = this.progress.getComponent(cc.LabelOutline);
    };
    GameLoadingView.prototype.addEvent = function () {
    };
    GameLoadingView.prototype.removeEvent = function () {
    };
    GameLoadingView = __decorate([
        ccclass
    ], GameLoadingView);
    return GameLoadingView;
}(UIViewBase_1.UIViewBase));
exports.default = GameLoadingView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvR2FtZUxvYWRpbmcvR2FtZUxvYWRpbmdWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMkQ7QUFDM0QsOERBQThEO0FBQzlELGtFQUFrRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxFLDRFQUEyRTtBQUVyRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUE2QyxtQ0FBVTtJQUF2RDtRQUFBLHFFQXlEQztRQXZERyxnQkFBZ0I7UUFDVCxnQkFBVSxHQUFHLGFBQWEsQ0FBQztRQUczQixzQkFBZ0IsR0FBYyxTQUFTLENBQUM7UUFDeEMsMkJBQXFCLEdBQW1CLFNBQVMsQ0FBQztRQUVsRCxvQkFBYyxHQUFhLFNBQVMsQ0FBQztRQUNyQywyQkFBcUIsR0FBb0IsU0FBUyxDQUFDO1FBRW5ELG1CQUFhLEdBQWEsU0FBUyxDQUFDO1FBQ3BDLDBCQUFvQixHQUFvQixTQUFTLENBQUM7O0lBNEM3RCxDQUFDO0lBekNVLGdDQUFNLEdBQWI7UUFDSSxpQkFBTSxNQUFNLFdBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU0sa0NBQVEsR0FBZjtRQUNJLElBQUksaUJBQU0sUUFBUSxFQUFFO1lBQ2hCLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxtQ0FBUyxHQUFoQjtRQUNJLElBQUksaUJBQU0sU0FBUyxFQUFFO1lBQ2pCLGlCQUFNLFNBQVMsV0FBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFUyxzQ0FBWSxHQUF0QjtRQUNJLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFNUUsQ0FBQztJQUVPLGtDQUFRLEdBQWhCO0lBRUEsQ0FBQztJQUVPLHFDQUFXLEdBQW5CO0lBRUEsQ0FBQztJQXREZ0IsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXlEbkM7SUFBRCxzQkFBQztDQXpERCxBQXlEQyxDQXpENEMsdUJBQVUsR0F5RHREO2tCQXpEb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpYyBnZW5lcmF0aW9uLCBwbGVhc2UgZG8gbm90IGVkaXQuXG4vLyBJZiB5b3UgbmVlZCBhZGQgbG9naWMsIHBsZWFzZSB3cml0ZSBpbiBHYW1lTG9hZGluZ1ZpZXcudHMgLlxuLy8gSWYgeW91IG5lZWQgYWRkIGRhdGEsIHBsZWFzZSB3cml0ZSBpbiBHYW1lTG9hZGluZ1ZpZXdNb2RlbC50cyAuXG5cbmltcG9ydCB7IFVJVmlld0Jhc2UgfSBmcm9tICcuLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZ3VpL2xheWVyL1VJVmlld0Jhc2UnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVMb2FkaW5nVmlldyBleHRlbmRzIFVJVmlld0Jhc2Uge1xuXG4gICAgLyoqIOmihOWItuWQjSDnu5nlrp7kvovosIPnlKggKi9cbiAgICBwdWJsaWMgcHJlZmFiTmFtZSA9ICdHYW1lTG9hZGluZyc7XG5cbiAgICBwdWJsaWMgYmFyTG9hZGluZzogY2MuTm9kZTtcbiAgICBwdWJsaWMgYmFyTG9hZGluZ1Nwcml0ZTogY2MuU3ByaXRlID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyBiYXJMb2FkaW5nUHJvZ3Jlc3NCYXI6IGNjLlByb2dyZXNzQmFyID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyBub3RpY2VCb3Q6IGNjLk5vZGU7XG4gICAgcHVibGljIG5vdGljZUJvdExhYmVsOiBjYy5MYWJlbCA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgbm90aWNlQm90TGFiZWxPdXRsaW5lOiBjYy5MYWJlbE91dGxpbmUgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIHByb2dyZXNzOiBjYy5Ob2RlO1xuICAgIHB1YmxpYyBwcm9ncmVzc0xhYmVsOiBjYy5MYWJlbCA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgcHJvZ3Jlc3NMYWJlbE91dGxpbmU6IGNjLkxhYmVsT3V0bGluZSA9IHVuZGVmaW5lZDtcbiAgICBcblxuICAgIHB1YmxpYyBvbkxvYWQoKSB7XG4gICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkVuYWJsZSgpIHtcbiAgICAgICAgaWYgKHN1cGVyLm9uRW5hYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25EaXNhYmxlKCkge1xuICAgICAgICBpZiAoc3VwZXIub25EaXNhYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50KCk7XG4gICAgfSBcblxuICAgIHByb3RlY3RlZCBpbml0UHJvcGVydHkoKSB7XG4gICAgICAgIHN1cGVyLmluaXRQcm9wZXJ0eSgpO1xuICAgICAgICB0aGlzLmJhckxvYWRpbmcgPSB0aGlzLmdldCgnX2JhckxvYWRpbmdfJyk7XG4gICAgICAgIHRoaXMuYmFyTG9hZGluZ1Nwcml0ZSA9IHRoaXMuYmFyTG9hZGluZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgdGhpcy5iYXJMb2FkaW5nUHJvZ3Jlc3NCYXIgPSB0aGlzLmJhckxvYWRpbmcuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcbiAgICAgICAgdGhpcy5ub3RpY2VCb3QgPSB0aGlzLmdldCgnX25vdGljZUJvdF8nKTtcbiAgICAgICAgdGhpcy5ub3RpY2VCb3RMYWJlbCA9IHRoaXMubm90aWNlQm90LmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHRoaXMubm90aWNlQm90TGFiZWxPdXRsaW5lID0gdGhpcy5ub3RpY2VCb3QuZ2V0Q29tcG9uZW50KGNjLkxhYmVsT3V0bGluZSk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSB0aGlzLmdldCgnX3Byb2dyZXNzXycpO1xuICAgICAgICB0aGlzLnByb2dyZXNzTGFiZWwgPSB0aGlzLnByb2dyZXNzLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NMYWJlbE91dGxpbmUgPSB0aGlzLnByb2dyZXNzLmdldENvbXBvbmVudChjYy5MYWJlbE91dGxpbmUpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZEV2ZW50KCkge1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVFdmVudCgpIHtcblxuICAgIH1cblxuXG59Il19