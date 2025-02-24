
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/boxGame/script/BoxGameMain/BoxGameMainView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f9fc30gimhKpK1QGuRZuig3', 'BoxGameMainView');
// boxGame/script/BoxGameMain/BoxGameMainView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in BoxGameMainView.ts .
// If you need add data, please write in BoxGameMainViewModel.ts .
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
var CountdownLabel_1 = require("./../../../c2f-framework/component/common/CountdownLabel");
var LinkPrefab_1 = require("./../../../c2f-framework/component/common/LinkPrefab");
var BoxItem_1 = require("./../BoxItem/BoxItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BoxGameMainView = /** @class */ (function (_super) {
    __extends(BoxGameMainView, _super);
    function BoxGameMainView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_BoxGameMain';
        _this.btnCloseSprite = undefined;
        _this.btnCloseButton = undefined;
        _this.txt_timeLabel = undefined;
        _this.txt_timeCountdownLabel = undefined;
        _this.txt_1Label = undefined;
        _this.txt_com2Label = undefined;
        _this.txt_lessLabel = undefined;
        _this.txt_levelLabel = undefined;
        _this.box1LinkPrefab = undefined;
        _this.box1BoxItem = undefined;
        _this.box2LinkPrefab = undefined;
        _this.box2BoxItem = undefined;
        _this.box3LinkPrefab = undefined;
        _this.box3BoxItem = undefined;
        _this.btnStartButton = undefined;
        _this.txt_startCountLabel = undefined;
        _this.txt_count1Label = undefined;
        _this.txt_count2Label = undefined;
        _this.txt_count3Label = undefined;
        _this.boxBtnSprite = undefined;
        _this.boxBtnButton = undefined;
        _this.txt_adLabel = undefined;
        return _this;
    }
    BoxGameMainView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BoxGameMainView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    BoxGameMainView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    BoxGameMainView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.btnClose = this.get('_btnClose_');
        this.btnCloseSprite = this.btnClose.getComponent(cc.Sprite);
        this.btnCloseButton = this.btnClose.getComponent(cc.Button);
        this.txt_time = this.get('_txt_time_');
        this.txt_timeLabel = this.txt_time.getComponent(cc.Label);
        this.txt_timeCountdownLabel = this.txt_time.getComponent(CountdownLabel_1.default);
        this.txt_1 = this.get('_txt_1_');
        this.txt_1Label = this.txt_1.getComponent(cc.Label);
        this.complete = this.get('_complete_');
        this.txt_com2 = this.get('_txt_com2_');
        this.txt_com2Label = this.txt_com2.getComponent(cc.Label);
        this.less = this.get('_less_');
        this.txt_less = this.get('_txt_less_');
        this.txt_lessLabel = this.txt_less.getComponent(cc.Label);
        this.txt_level = this.get('_txt_level_');
        this.txt_levelLabel = this.txt_level.getComponent(cc.Label);
        this.box1 = this.get('_box1_');
        this.box1LinkPrefab = this.box1.getComponent(LinkPrefab_1.default);
        this.box1BoxItem = this.box1.getComponent(LinkPrefab_1.default).getComponentEx(BoxItem_1.default);
        this.box2 = this.get('_box2_');
        this.box2LinkPrefab = this.box2.getComponent(LinkPrefab_1.default);
        this.box2BoxItem = this.box2.getComponent(LinkPrefab_1.default).getComponentEx(BoxItem_1.default);
        this.box3 = this.get('_box3_');
        this.box3LinkPrefab = this.box3.getComponent(LinkPrefab_1.default);
        this.box3BoxItem = this.box3.getComponent(LinkPrefab_1.default).getComponentEx(BoxItem_1.default);
        this.btnStart = this.get('_btnStart_');
        this.btnStartButton = this.btnStart.getComponent(cc.Button);
        this.txt_startCount = this.get('_txt_startCount_');
        this.txt_startCountLabel = this.txt_startCount.getComponent(cc.Label);
        this.txt_count1 = this.get('_txt_count1_');
        this.txt_count1Label = this.txt_count1.getComponent(cc.Label);
        this.txt_count2 = this.get('_txt_count2_');
        this.txt_count2Label = this.txt_count2.getComponent(cc.Label);
        this.txt_count3 = this.get('_txt_count3_');
        this.txt_count3Label = this.txt_count3.getComponent(cc.Label);
        this.boxBtn = this.get('_boxBtn_');
        this.boxBtnSprite = this.boxBtn.getComponent(cc.Sprite);
        this.boxBtnButton = this.boxBtn.getComponent(cc.Button);
        this.txt_ad = this.get('_txt_ad_');
        this.txt_adLabel = this.txt_ad.getComponent(cc.Label);
    };
    BoxGameMainView.prototype.addEvent = function () {
        this.btnCloseButton.node.on('click', this.onbtnCloseButtonClick, this);
        this.btnStartButton.node.on('click', this.onbtnStartButtonClick, this);
        this.boxBtnButton.node.on('click', this.onboxBtnButtonClick, this);
    };
    BoxGameMainView.prototype.removeEvent = function () {
        this.btnCloseButton.node.off('click', this.onbtnCloseButtonClick, this);
        this.btnStartButton.node.off('click', this.onbtnStartButtonClick, this);
        this.boxBtnButton.node.off('click', this.onboxBtnButtonClick, this);
    };
    BoxGameMainView.prototype.onbtnCloseButtonClick = function (component) {
        this.emit('click', component);
    };
    BoxGameMainView.prototype.onbtnStartButtonClick = function (component) {
        this.emit('click', component);
    };
    BoxGameMainView.prototype.onboxBtnButtonClick = function (component) {
        this.emit('click', component);
    };
    BoxGameMainView = __decorate([
        ccclass
    ], BoxGameMainView);
    return BoxGameMainView;
}(UIViewBase_1.UIViewBase));
exports.default = BoxGameMainView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9ib3hHYW1lL3NjcmlwdC9Cb3hHYW1lTWFpbi9Cb3hHYW1lTWFpblZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEyRDtBQUMzRCw4REFBOEQ7QUFDOUQsa0VBQWtFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEUsNEVBQTJFO0FBQzNFLDJGQUFzRjtBQUN0RixtRkFBOEU7QUFDOUUsZ0RBQTJDO0FBR3JDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQTZDLG1DQUFVO0lBQXZEO1FBQUEscUVBeUlDO1FBdklHLGdCQUFnQjtRQUNULGdCQUFVLEdBQUcsZUFBZSxDQUFDO1FBRzdCLG9CQUFjLEdBQWMsU0FBUyxDQUFDO1FBQ3RDLG9CQUFjLEdBQWMsU0FBUyxDQUFDO1FBRXRDLG1CQUFhLEdBQWEsU0FBUyxDQUFDO1FBQ3BDLDRCQUFzQixHQUFtQixTQUFTLENBQUM7UUFFbkQsZ0JBQVUsR0FBYSxTQUFTLENBQUM7UUFHakMsbUJBQWEsR0FBYSxTQUFTLENBQUM7UUFHcEMsbUJBQWEsR0FBYSxTQUFTLENBQUM7UUFFcEMsb0JBQWMsR0FBYSxTQUFTLENBQUM7UUFFckMsb0JBQWMsR0FBZSxTQUFTLENBQUM7UUFDdkMsaUJBQVcsR0FBWSxTQUFTLENBQUM7UUFFakMsb0JBQWMsR0FBZSxTQUFTLENBQUM7UUFDdkMsaUJBQVcsR0FBWSxTQUFTLENBQUM7UUFFakMsb0JBQWMsR0FBZSxTQUFTLENBQUM7UUFDdkMsaUJBQVcsR0FBWSxTQUFTLENBQUM7UUFFakMsb0JBQWMsR0FBYyxTQUFTLENBQUM7UUFFdEMseUJBQW1CLEdBQWEsU0FBUyxDQUFDO1FBRTFDLHFCQUFlLEdBQWEsU0FBUyxDQUFDO1FBRXRDLHFCQUFlLEdBQWEsU0FBUyxDQUFDO1FBRXRDLHFCQUFlLEdBQWEsU0FBUyxDQUFDO1FBRXRDLGtCQUFZ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RUFBRSxJQUFJLENBQUMsQ0FBQztJQUV2RSxDQUFDO0lBRU8scUNBQVcsR0FBbkI7UUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUV4RSxDQUFDO0lBRU8sK0NBQXFCLEdBQTdCLFVBQThCLFNBQW9CO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTywrQ0FBcUIsR0FBN0IsVUFBOEIsU0FBb0I7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVPLDZDQUFtQixHQUEzQixVQUE0QixTQUFvQjtRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBdElnQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBeUluQztJQUFELHNCQUFDO0NBeklELEFBeUlDLENBekk0Qyx1QkFBVSxHQXlJdEQ7a0JBeklvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljIGdlbmVyYXRpb24sIHBsZWFzZSBkbyBub3QgZWRpdC5cbi8vIElmIHlvdSBuZWVkIGFkZCBsb2dpYywgcGxlYXNlIHdyaXRlIGluIEJveEdhbWVNYWluVmlldy50cyAuXG4vLyBJZiB5b3UgbmVlZCBhZGQgZGF0YSwgcGxlYXNlIHdyaXRlIGluIEJveEdhbWVNYWluVmlld01vZGVsLnRzIC5cblxuaW1wb3J0IHsgVUlWaWV3QmFzZSB9IGZyb20gJy4vLi4vLi4vLi4vYzJmLWZyYW1ld29yay9ndWkvbGF5ZXIvVUlWaWV3QmFzZSc7XG5pbXBvcnQgQ291bnRkb3duTGFiZWwgZnJvbSBcIi4vLi4vLi4vLi4vYzJmLWZyYW1ld29yay9jb21wb25lbnQvY29tbW9uL0NvdW50ZG93bkxhYmVsXCI7XG5pbXBvcnQgTGlua1ByZWZhYiBmcm9tIFwiLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9jb21tb24vTGlua1ByZWZhYlwiO1xuaW1wb3J0IEJveEl0ZW0gZnJvbSBcIi4vLi4vQm94SXRlbS9Cb3hJdGVtXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3hHYW1lTWFpblZpZXcgZXh0ZW5kcyBVSVZpZXdCYXNlIHtcblxuICAgIC8qKiDpooTliLblkI0g57uZ5a6e5L6L6LCD55SoICovXG4gICAgcHVibGljIHByZWZhYk5hbWUgPSAnRl9Cb3hHYW1lTWFpbic7XG5cbiAgICBwdWJsaWMgYnRuQ2xvc2U6IGNjLk5vZGU7XG4gICAgcHVibGljIGJ0bkNsb3NlU3ByaXRlOiBjYy5TcHJpdGUgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIGJ0bkNsb3NlQnV0dG9uOiBjYy5CdXR0b24gPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIHR4dF90aW1lOiBjYy5Ob2RlO1xuICAgIHB1YmxpYyB0eHRfdGltZUxhYmVsOiBjYy5MYWJlbCA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgdHh0X3RpbWVDb3VudGRvd25MYWJlbDogQ291bnRkb3duTGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIHR4dF8xOiBjYy5Ob2RlO1xuICAgIHB1YmxpYyB0eHRfMUxhYmVsOiBjYy5MYWJlbCA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgY29tcGxldGU6IGNjLk5vZGU7XG4gICAgcHVibGljIHR4dF9jb20yOiBjYy5Ob2RlO1xuICAgIHB1YmxpYyB0eHRfY29tMkxhYmVsOiBjYy5MYWJlbCA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgbGVzczogY2MuTm9kZTtcbiAgICBwdWJsaWMgdHh0X2xlc3M6IGNjLk5vZGU7XG4gICAgcHVibGljIHR4dF9sZXNzTGFiZWw6IGNjLkxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyB0eHRfbGV2ZWw6IGNjLk5vZGU7XG4gICAgcHVibGljIHR4dF9sZXZlbExhYmVsOiBjYy5MYWJlbCA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgYm94MTogY2MuTm9kZTtcbiAgICBwdWJsaWMgYm94MUxpbmtQcmVmYWI6IExpbmtQcmVmYWIgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIGJveDFCb3hJdGVtOiBCb3hJdGVtID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyBib3gyOiBjYy5Ob2RlO1xuICAgIHB1YmxpYyBib3gyTGlua1ByZWZhYjogTGlua1ByZWZhYiA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgYm94MkJveEl0ZW06IEJveEl0ZW0gPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIGJveDM6IGNjLk5vZGU7XG4gICAgcHVibGljIGJveDNMaW5rUHJlZmFiOiBMaW5rUHJlZmFiID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyBib3gzQm94SXRlbTogQm94SXRlbSA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgYnRuU3RhcnQ6IGNjLk5vZGU7XG4gICAgcHVibGljIGJ0blN0YXJ0QnV0dG9uOiBjYy5CdXR0b24gPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIHR4dF9zdGFydENvdW50OiBjYy5Ob2RlO1xuICAgIHB1YmxpYyB0eHRfc3RhcnRDb3VudExhYmVsOiBjYy5MYWJlbCA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgdHh0X2NvdW50MTogY2MuTm9kZTtcbiAgICBwdWJsaWMgdHh0X2NvdW50MUxhYmVsOiBjYy5MYWJlbCA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgdHh0X2NvdW50MjogY2MuTm9kZTtcbiAgICBwdWJsaWMgdHh0X2NvdW50MkxhYmVsOiBjYy5MYWJlbCA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgdHh0X2NvdW50MzogY2MuTm9kZTtcbiAgICBwdWJsaWMgdHh0X2NvdW50M0xhYmVsOiBjYy5MYWJlbCA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgYm94QnRuOiBjYy5Ob2RlO1xuICAgIHB1YmxpYyBib3hCdG5TcHJpdGU6IGNjLlNwcml0ZSA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgYm94QnRuQnV0dG9uOiBjYy5CdXR0b24gPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIHR4dF9hZDogY2MuTm9kZTtcbiAgICBwdWJsaWMgdHh0X2FkTGFiZWw6IGNjLkxhYmVsID0gdW5kZWZpbmVkO1xuICAgIFxuXG4gICAgcHVibGljIG9uTG9hZCgpIHtcbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRW5hYmxlKCkge1xuICAgICAgICBpZiAoc3VwZXIub25FbmFibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRFdmVudCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRpc2FibGUoKSB7XG4gICAgICAgIGlmIChzdXBlci5vbkRpc2FibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnQoKTtcbiAgICB9IFxuXG4gICAgcHJvdGVjdGVkIGluaXRQcm9wZXJ0eSgpIHtcbiAgICAgICAgc3VwZXIuaW5pdFByb3BlcnR5KCk7XG4gICAgICAgIHRoaXMuYnRuQ2xvc2UgPSB0aGlzLmdldCgnX2J0bkNsb3NlXycpO1xuICAgICAgICB0aGlzLmJ0bkNsb3NlU3ByaXRlID0gdGhpcy5idG5DbG9zZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgdGhpcy5idG5DbG9zZUJ1dHRvbiA9IHRoaXMuYnRuQ2xvc2UuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIHRoaXMudHh0X3RpbWUgPSB0aGlzLmdldCgnX3R4dF90aW1lXycpO1xuICAgICAgICB0aGlzLnR4dF90aW1lTGFiZWwgPSB0aGlzLnR4dF90aW1lLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHRoaXMudHh0X3RpbWVDb3VudGRvd25MYWJlbCA9IHRoaXMudHh0X3RpbWUuZ2V0Q29tcG9uZW50KENvdW50ZG93bkxhYmVsKTtcbiAgICAgICAgdGhpcy50eHRfMSA9IHRoaXMuZ2V0KCdfdHh0XzFfJyk7XG4gICAgICAgIHRoaXMudHh0XzFMYWJlbCA9IHRoaXMudHh0XzEuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IHRoaXMuZ2V0KCdfY29tcGxldGVfJyk7XG4gICAgICAgIHRoaXMudHh0X2NvbTIgPSB0aGlzLmdldCgnX3R4dF9jb20yXycpO1xuICAgICAgICB0aGlzLnR4dF9jb20yTGFiZWwgPSB0aGlzLnR4dF9jb20yLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHRoaXMubGVzcyA9IHRoaXMuZ2V0KCdfbGVzc18nKTtcbiAgICAgICAgdGhpcy50eHRfbGVzcyA9IHRoaXMuZ2V0KCdfdHh0X2xlc3NfJyk7XG4gICAgICAgIHRoaXMudHh0X2xlc3NMYWJlbCA9IHRoaXMudHh0X2xlc3MuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGhpcy50eHRfbGV2ZWwgPSB0aGlzLmdldCgnX3R4dF9sZXZlbF8nKTtcbiAgICAgICAgdGhpcy50eHRfbGV2ZWxMYWJlbCA9IHRoaXMudHh0X2xldmVsLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHRoaXMuYm94MSA9IHRoaXMuZ2V0KCdfYm94MV8nKTtcbiAgICAgICAgdGhpcy5ib3gxTGlua1ByZWZhYiA9IHRoaXMuYm94MS5nZXRDb21wb25lbnQoTGlua1ByZWZhYik7XG4gICAgICAgIHRoaXMuYm94MUJveEl0ZW0gPSB0aGlzLmJveDEuZ2V0Q29tcG9uZW50KExpbmtQcmVmYWIpLmdldENvbXBvbmVudEV4KEJveEl0ZW0pO1xuICAgICAgICB0aGlzLmJveDIgPSB0aGlzLmdldCgnX2JveDJfJyk7XG4gICAgICAgIHRoaXMuYm94MkxpbmtQcmVmYWIgPSB0aGlzLmJveDIuZ2V0Q29tcG9uZW50KExpbmtQcmVmYWIpO1xuICAgICAgICB0aGlzLmJveDJCb3hJdGVtID0gdGhpcy5ib3gyLmdldENvbXBvbmVudChMaW5rUHJlZmFiKS5nZXRDb21wb25lbnRFeChCb3hJdGVtKTtcbiAgICAgICAgdGhpcy5ib3gzID0gdGhpcy5nZXQoJ19ib3gzXycpO1xuICAgICAgICB0aGlzLmJveDNMaW5rUHJlZmFiID0gdGhpcy5ib3gzLmdldENvbXBvbmVudChMaW5rUHJlZmFiKTtcbiAgICAgICAgdGhpcy5ib3gzQm94SXRlbSA9IHRoaXMuYm94My5nZXRDb21wb25lbnQoTGlua1ByZWZhYikuZ2V0Q29tcG9uZW50RXgoQm94SXRlbSk7XG4gICAgICAgIHRoaXMuYnRuU3RhcnQgPSB0aGlzLmdldCgnX2J0blN0YXJ0XycpO1xuICAgICAgICB0aGlzLmJ0blN0YXJ0QnV0dG9uID0gdGhpcy5idG5TdGFydC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgdGhpcy50eHRfc3RhcnRDb3VudCA9IHRoaXMuZ2V0KCdfdHh0X3N0YXJ0Q291bnRfJyk7XG4gICAgICAgIHRoaXMudHh0X3N0YXJ0Q291bnRMYWJlbCA9IHRoaXMudHh0X3N0YXJ0Q291bnQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGhpcy50eHRfY291bnQxID0gdGhpcy5nZXQoJ190eHRfY291bnQxXycpO1xuICAgICAgICB0aGlzLnR4dF9jb3VudDFMYWJlbCA9IHRoaXMudHh0X2NvdW50MS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0aGlzLnR4dF9jb3VudDIgPSB0aGlzLmdldCgnX3R4dF9jb3VudDJfJyk7XG4gICAgICAgIHRoaXMudHh0X2NvdW50MkxhYmVsID0gdGhpcy50eHRfY291bnQyLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHRoaXMudHh0X2NvdW50MyA9IHRoaXMuZ2V0KCdfdHh0X2NvdW50M18nKTtcbiAgICAgICAgdGhpcy50eHRfY291bnQzTGFiZWwgPSB0aGlzLnR4dF9jb3VudDMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGhpcy5ib3hCdG4gPSB0aGlzLmdldCgnX2JveEJ0bl8nKTtcbiAgICAgICAgdGhpcy5ib3hCdG5TcHJpdGUgPSB0aGlzLmJveEJ0bi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgdGhpcy5ib3hCdG5CdXR0b24gPSB0aGlzLmJveEJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgdGhpcy50eHRfYWQgPSB0aGlzLmdldCgnX3R4dF9hZF8nKTtcbiAgICAgICAgdGhpcy50eHRfYWRMYWJlbCA9IHRoaXMudHh0X2FkLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgYWRkRXZlbnQoKSB7XG4gICAgICAgIHRoaXMuYnRuQ2xvc2VCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLm9uYnRuQ2xvc2VCdXR0b25DbGljaywgdGhpcyk7XG4gICAgICAgIHRoaXMuYnRuU3RhcnRCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLm9uYnRuU3RhcnRCdXR0b25DbGljaywgdGhpcyk7XG4gICAgICAgIHRoaXMuYm94QnRuQnV0dG9uLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vbmJveEJ0bkJ1dHRvbkNsaWNrLCB0aGlzKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlRXZlbnQoKSB7XG4gICAgICAgIHRoaXMuYnRuQ2xvc2VCdXR0b24ubm9kZS5vZmYoJ2NsaWNrJywgdGhpcy5vbmJ0bkNsb3NlQnV0dG9uQ2xpY2ssIHRoaXMpO1xuICAgICAgICB0aGlzLmJ0blN0YXJ0QnV0dG9uLm5vZGUub2ZmKCdjbGljaycsIHRoaXMub25idG5TdGFydEJ1dHRvbkNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ib3hCdG5CdXR0b24ubm9kZS5vZmYoJ2NsaWNrJywgdGhpcy5vbmJveEJ0bkJ1dHRvbkNsaWNrLCB0aGlzKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25idG5DbG9zZUJ1dHRvbkNsaWNrKGNvbXBvbmVudDogY2MuQnV0dG9uKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBjb21wb25lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25idG5TdGFydEJ1dHRvbkNsaWNrKGNvbXBvbmVudDogY2MuQnV0dG9uKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBjb21wb25lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25ib3hCdG5CdXR0b25DbGljayhjb21wb25lbnQ6IGNjLkJ1dHRvbikge1xuICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrJywgY29tcG9uZW50KTtcbiAgICB9XG5cblxufSJdfQ==