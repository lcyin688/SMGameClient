
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/gameYngy/script/YngyMain/YngyMainView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0798241B+5P3bcmVbpZzC3j', 'YngyMainView');
// gameYngy/script/YngyMain/YngyMainView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in YngyMainView.ts .
// If you need add data, please write in YngyMainViewModel.ts .
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
var YngyMainView = /** @class */ (function (_super) {
    __extends(YngyMainView, _super);
    function YngyMainView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_YngyMain';
        _this.btnMenuSprite = undefined;
        _this.btnMenuButton = undefined;
        _this.lvPanelSprite = undefined;
        _this.seletedSprite = undefined;
        return _this;
    }
    YngyMainView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    YngyMainView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    YngyMainView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    YngyMainView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.btnMenu = this.get('_btnMenu_');
        this.btnMenuSprite = this.btnMenu.getComponent(cc.Sprite);
        this.btnMenuButton = this.btnMenu.getComponent(cc.Button);
        this.lvPanel = this.get('_lvPanel_');
        this.lvPanelSprite = this.lvPanel.getComponent(cc.Sprite);
        this.seleted = this.get('_seleted_');
        this.seletedSprite = this.seleted.getComponent(cc.Sprite);
    };
    YngyMainView.prototype.addEvent = function () {
        this.btnMenuButton.node.on('click', this.onbtnMenuButtonClick, this);
    };
    YngyMainView.prototype.removeEvent = function () {
        this.btnMenuButton.node.off('click', this.onbtnMenuButtonClick, this);
    };
    YngyMainView.prototype.onbtnMenuButtonClick = function (component) {
        this.emit('click', component);
    };
    YngyMainView = __decorate([
        ccclass
    ], YngyMainView);
    return YngyMainView;
}(UIViewBase_1.UIViewBase));
exports.default = YngyMainView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nYW1lWW5neS9zY3JpcHQvWW5neU1haW4vWW5neU1haW5WaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMkQ7QUFDM0QsMkRBQTJEO0FBQzNELCtEQUErRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9ELDRFQUEyRTtBQUVyRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUEwQyxnQ0FBVTtJQUFwRDtRQUFBLHFFQTJEQztRQXpERyxnQkFBZ0I7UUFDVCxnQkFBVSxHQUFHLFlBQVksQ0FBQztRQUcxQixtQkFBYSxHQUFjLFNBQVMsQ0FBQztRQUNyQyxtQkFBYSxHQUFjLFNBQVMsQ0FBQztRQUVyQyxtQkFBYSxHQUFjLFNBQVMsQ0FBQztRQUVyQyxtQkFBYSxHQUFjLFNBQVMsQ0FBQzs7SUFnRGhELENBQUM7SUE3Q1UsNkJBQU0sR0FBYjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO0lBQ25CLENBQUM7SUFFTSwrQkFBUSxHQUFmO1FBQ0ksSUFBSSxpQkFBTSxRQUFRLEVBQUU7WUFDaEIsaUJBQU0sUUFBUSxXQUFFLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVNLGdDQUFTLEdBQWhCO1FBQ0ksSUFBSSxpQkFBTSxTQUFTLEVBQUU7WUFDakIsaUJBQU0sU0FBUyxXQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVTLG1DQUFZLEdBQXRCO1FBQ0ksaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFOUQsQ0FBQztJQUVPLCtCQUFRLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFekUsQ0FBQztJQUVPLGtDQUFXLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFMUUsQ0FBQztJQUVPLDJDQUFvQixHQUE1QixVQUE2QixTQUFvQjtRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBeERnQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBMkRoQztJQUFELG1CQUFDO0NBM0RELEFBMkRDLENBM0R5Qyx1QkFBVSxHQTJEbkQ7a0JBM0RvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljIGdlbmVyYXRpb24sIHBsZWFzZSBkbyBub3QgZWRpdC5cbi8vIElmIHlvdSBuZWVkIGFkZCBsb2dpYywgcGxlYXNlIHdyaXRlIGluIFluZ3lNYWluVmlldy50cyAuXG4vLyBJZiB5b3UgbmVlZCBhZGQgZGF0YSwgcGxlYXNlIHdyaXRlIGluIFluZ3lNYWluVmlld01vZGVsLnRzIC5cblxuaW1wb3J0IHsgVUlWaWV3QmFzZSB9IGZyb20gJy4vLi4vLi4vLi4vYzJmLWZyYW1ld29yay9ndWkvbGF5ZXIvVUlWaWV3QmFzZSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWW5neU1haW5WaWV3IGV4dGVuZHMgVUlWaWV3QmFzZSB7XG5cbiAgICAvKiog6aKE5Yi25ZCNIOe7meWunuS+i+iwg+eUqCAqL1xuICAgIHB1YmxpYyBwcmVmYWJOYW1lID0gJ0ZfWW5neU1haW4nO1xuXG4gICAgcHVibGljIGJ0bk1lbnU6IGNjLk5vZGU7XG4gICAgcHVibGljIGJ0bk1lbnVTcHJpdGU6IGNjLlNwcml0ZSA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgYnRuTWVudUJ1dHRvbjogY2MuQnV0dG9uID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyBsdlBhbmVsOiBjYy5Ob2RlO1xuICAgIHB1YmxpYyBsdlBhbmVsU3ByaXRlOiBjYy5TcHJpdGUgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIHNlbGV0ZWQ6IGNjLk5vZGU7XG4gICAgcHVibGljIHNlbGV0ZWRTcHJpdGU6IGNjLlNwcml0ZSA9IHVuZGVmaW5lZDtcbiAgICBcblxuICAgIHB1YmxpYyBvbkxvYWQoKSB7XG4gICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkVuYWJsZSgpIHtcbiAgICAgICAgaWYgKHN1cGVyLm9uRW5hYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25EaXNhYmxlKCkge1xuICAgICAgICBpZiAoc3VwZXIub25EaXNhYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50KCk7XG4gICAgfSBcblxuICAgIHByb3RlY3RlZCBpbml0UHJvcGVydHkoKSB7XG4gICAgICAgIHN1cGVyLmluaXRQcm9wZXJ0eSgpO1xuICAgICAgICB0aGlzLmJ0bk1lbnUgPSB0aGlzLmdldCgnX2J0bk1lbnVfJyk7XG4gICAgICAgIHRoaXMuYnRuTWVudVNwcml0ZSA9IHRoaXMuYnRuTWVudS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgdGhpcy5idG5NZW51QnV0dG9uID0gdGhpcy5idG5NZW51LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICB0aGlzLmx2UGFuZWwgPSB0aGlzLmdldCgnX2x2UGFuZWxfJyk7XG4gICAgICAgIHRoaXMubHZQYW5lbFNwcml0ZSA9IHRoaXMubHZQYW5lbC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgdGhpcy5zZWxldGVkID0gdGhpcy5nZXQoJ19zZWxldGVkXycpO1xuICAgICAgICB0aGlzLnNlbGV0ZWRTcHJpdGUgPSB0aGlzLnNlbGV0ZWQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgYWRkRXZlbnQoKSB7XG4gICAgICAgIHRoaXMuYnRuTWVudUJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25idG5NZW51QnV0dG9uQ2xpY2ssIHRoaXMpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVFdmVudCgpIHtcbiAgICAgICAgdGhpcy5idG5NZW51QnV0dG9uLm5vZGUub2ZmKCdjbGljaycsIHRoaXMub25idG5NZW51QnV0dG9uQ2xpY2ssIHRoaXMpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbmJ0bk1lbnVCdXR0b25DbGljayhjb21wb25lbnQ6IGNjLkJ1dHRvbikge1xuICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrJywgY29tcG9uZW50KTtcbiAgICB9XG5cblxufSJdfQ==