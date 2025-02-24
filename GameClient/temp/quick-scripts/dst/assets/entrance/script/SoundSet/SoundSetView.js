
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/SoundSet/SoundSetView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '720caHihc9OtL5lLAQv0xzq', 'SoundSetView');
// entrance/script/SoundSet/SoundSetView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in SoundSetView.ts .
// If you need add data, please write in SoundSetViewModel.ts .
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
var SoundSetView = /** @class */ (function (_super) {
    __extends(SoundSetView, _super);
    function SoundSetView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'V_SoundSet';
        _this.soundBgSprite = undefined;
        _this.soundBgButton = undefined;
        _this.soundEffSprite = undefined;
        _this.soundEffButton = undefined;
        _this.btnCloseSprite = undefined;
        _this.btnCloseButton = undefined;
        return _this;
    }
    SoundSetView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SoundSetView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    SoundSetView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    SoundSetView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.soundBg = this.get('_soundBg_');
        this.soundBgSprite = this.soundBg.getComponent(cc.Sprite);
        this.soundBgButton = this.soundBg.getComponent(cc.Button);
        this.soundEff = this.get('_soundEff_');
        this.soundEffSprite = this.soundEff.getComponent(cc.Sprite);
        this.soundEffButton = this.soundEff.getComponent(cc.Button);
        this.btnClose = this.get('_btnClose_');
        this.btnCloseSprite = this.btnClose.getComponent(cc.Sprite);
        this.btnCloseButton = this.btnClose.getComponent(cc.Button);
    };
    SoundSetView.prototype.addEvent = function () {
        this.soundBgButton.node.on('click', this.onsoundBgButtonClick, this);
        this.soundEffButton.node.on('click', this.onsoundEffButtonClick, this);
        this.btnCloseButton.node.on('click', this.onbtnCloseButtonClick, this);
    };
    SoundSetView.prototype.removeEvent = function () {
        this.soundBgButton.node.off('click', this.onsoundBgButtonClick, this);
        this.soundEffButton.node.off('click', this.onsoundEffButtonClick, this);
        this.btnCloseButton.node.off('click', this.onbtnCloseButtonClick, this);
    };
    SoundSetView.prototype.onsoundBgButtonClick = function (component) {
        this.emit('click', component);
    };
    SoundSetView.prototype.onsoundEffButtonClick = function (component) {
        this.emit('click', component);
    };
    SoundSetView.prototype.onbtnCloseButtonClick = function (component) {
        this.emit('click', component);
    };
    SoundSetView = __decorate([
        ccclass
    ], SoundSetView);
    return SoundSetView;
}(UIViewBase_1.UIViewBase));
exports.default = SoundSetView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvU291bmRTZXQvU291bmRTZXRWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMkQ7QUFDM0QsMkRBQTJEO0FBQzNELCtEQUErRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9ELDRFQUEyRTtBQUVyRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUEwQyxnQ0FBVTtJQUFwRDtRQUFBLHFFQTJFQztRQXpFRyxnQkFBZ0I7UUFDVCxnQkFBVSxHQUFHLFlBQVksQ0FBQztRQUcxQixtQkFBYSxHQUFjLFNBQVMsQ0FBQztRQUNyQyxtQkFBYSxHQUFjLFNBQVMsQ0FBQztRQUVyQyxvQkFBYyxHQUFjLFNBQVMsQ0FBQztRQUN0QyxvQkFBYyxHQUFjLFNBQVMsQ0FBQztRQUV0QyxvQkFBYyxHQUFjLFNBQVMsQ0FBQztRQUN0QyxvQkFBYyxHQUFjLFNBQVMsQ0FBQzs7SUE4RGpELENBQUM7SUEzRFUsNkJBQU0sR0FBYjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO0lBQ25CLENBQUM7SUFFTSwrQkFBUSxHQUFmO1FBQ0ksSUFBSSxpQkFBTSxRQUFRLEVBQUU7WUFDaEIsaUJBQU0sUUFBUSxXQUFFLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVNLGdDQUFTLEdBQWhCO1FBQ0ksSUFBSSxpQkFBTSxTQUFTLEVBQUU7WUFDakIsaUJBQU0sU0FBUyxXQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVTLG1DQUFZLEdBQXRCO1FBQ0ksaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFaEUsQ0FBQztJQUVPLCtCQUFRLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFM0UsQ0FBQztJQUVPLGtDQUFXLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFNUUsQ0FBQztJQUVPLDJDQUFvQixHQUE1QixVQUE2QixTQUFvQjtRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU8sNENBQXFCLEdBQTdCLFVBQThCLFNBQW9CO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTyw0Q0FBcUIsR0FBN0IsVUFBOEIsU0FBb0I7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQXhFZ0IsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQTJFaEM7SUFBRCxtQkFBQztDQTNFRCxBQTJFQyxDQTNFeUMsdUJBQVUsR0EyRW5EO2tCQTNFb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpYyBnZW5lcmF0aW9uLCBwbGVhc2UgZG8gbm90IGVkaXQuXG4vLyBJZiB5b3UgbmVlZCBhZGQgbG9naWMsIHBsZWFzZSB3cml0ZSBpbiBTb3VuZFNldFZpZXcudHMgLlxuLy8gSWYgeW91IG5lZWQgYWRkIGRhdGEsIHBsZWFzZSB3cml0ZSBpbiBTb3VuZFNldFZpZXdNb2RlbC50cyAuXG5cbmltcG9ydCB7IFVJVmlld0Jhc2UgfSBmcm9tICcuLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZ3VpL2xheWVyL1VJVmlld0Jhc2UnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kU2V0VmlldyBleHRlbmRzIFVJVmlld0Jhc2Uge1xuXG4gICAgLyoqIOmihOWItuWQjSDnu5nlrp7kvovosIPnlKggKi9cbiAgICBwdWJsaWMgcHJlZmFiTmFtZSA9ICdWX1NvdW5kU2V0JztcblxuICAgIHB1YmxpYyBzb3VuZEJnOiBjYy5Ob2RlO1xuICAgIHB1YmxpYyBzb3VuZEJnU3ByaXRlOiBjYy5TcHJpdGUgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIHNvdW5kQmdCdXR0b246IGNjLkJ1dHRvbiA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgc291bmRFZmY6IGNjLk5vZGU7XG4gICAgcHVibGljIHNvdW5kRWZmU3ByaXRlOiBjYy5TcHJpdGUgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIHNvdW5kRWZmQnV0dG9uOiBjYy5CdXR0b24gPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIGJ0bkNsb3NlOiBjYy5Ob2RlO1xuICAgIHB1YmxpYyBidG5DbG9zZVNwcml0ZTogY2MuU3ByaXRlID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyBidG5DbG9zZUJ1dHRvbjogY2MuQnV0dG9uID0gdW5kZWZpbmVkO1xuICAgIFxuXG4gICAgcHVibGljIG9uTG9hZCgpIHtcbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRW5hYmxlKCkge1xuICAgICAgICBpZiAoc3VwZXIub25FbmFibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRFdmVudCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRpc2FibGUoKSB7XG4gICAgICAgIGlmIChzdXBlci5vbkRpc2FibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnQoKTtcbiAgICB9IFxuXG4gICAgcHJvdGVjdGVkIGluaXRQcm9wZXJ0eSgpIHtcbiAgICAgICAgc3VwZXIuaW5pdFByb3BlcnR5KCk7XG4gICAgICAgIHRoaXMuc291bmRCZyA9IHRoaXMuZ2V0KCdfc291bmRCZ18nKTtcbiAgICAgICAgdGhpcy5zb3VuZEJnU3ByaXRlID0gdGhpcy5zb3VuZEJnLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICB0aGlzLnNvdW5kQmdCdXR0b24gPSB0aGlzLnNvdW5kQmcuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIHRoaXMuc291bmRFZmYgPSB0aGlzLmdldCgnX3NvdW5kRWZmXycpO1xuICAgICAgICB0aGlzLnNvdW5kRWZmU3ByaXRlID0gdGhpcy5zb3VuZEVmZi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgdGhpcy5zb3VuZEVmZkJ1dHRvbiA9IHRoaXMuc291bmRFZmYuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIHRoaXMuYnRuQ2xvc2UgPSB0aGlzLmdldCgnX2J0bkNsb3NlXycpO1xuICAgICAgICB0aGlzLmJ0bkNsb3NlU3ByaXRlID0gdGhpcy5idG5DbG9zZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgdGhpcy5idG5DbG9zZUJ1dHRvbiA9IHRoaXMuYnRuQ2xvc2UuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgYWRkRXZlbnQoKSB7XG4gICAgICAgIHRoaXMuc291bmRCZ0J1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25zb3VuZEJnQnV0dG9uQ2xpY2ssIHRoaXMpO1xuICAgICAgICB0aGlzLnNvdW5kRWZmQnV0dG9uLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vbnNvdW5kRWZmQnV0dG9uQ2xpY2ssIHRoaXMpO1xuICAgICAgICB0aGlzLmJ0bkNsb3NlQnV0dG9uLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vbmJ0bkNsb3NlQnV0dG9uQ2xpY2ssIHRoaXMpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVFdmVudCgpIHtcbiAgICAgICAgdGhpcy5zb3VuZEJnQnV0dG9uLm5vZGUub2ZmKCdjbGljaycsIHRoaXMub25zb3VuZEJnQnV0dG9uQ2xpY2ssIHRoaXMpO1xuICAgICAgICB0aGlzLnNvdW5kRWZmQnV0dG9uLm5vZGUub2ZmKCdjbGljaycsIHRoaXMub25zb3VuZEVmZkJ1dHRvbkNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5idG5DbG9zZUJ1dHRvbi5ub2RlLm9mZignY2xpY2snLCB0aGlzLm9uYnRuQ2xvc2VCdXR0b25DbGljaywgdGhpcyk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uc291bmRCZ0J1dHRvbkNsaWNrKGNvbXBvbmVudDogY2MuQnV0dG9uKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBjb21wb25lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25zb3VuZEVmZkJ1dHRvbkNsaWNrKGNvbXBvbmVudDogY2MuQnV0dG9uKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBjb21wb25lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25idG5DbG9zZUJ1dHRvbkNsaWNrKGNvbXBvbmVudDogY2MuQnV0dG9uKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBjb21wb25lbnQpO1xuICAgIH1cblxuXG59Il19