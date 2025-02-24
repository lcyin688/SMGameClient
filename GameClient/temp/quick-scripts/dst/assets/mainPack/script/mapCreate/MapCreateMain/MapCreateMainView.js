
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/mapCreate/MapCreateMain/MapCreateMainView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ee09hM0dBL4KrBTPhL9ynN', 'MapCreateMainView');
// mainPack/script/mapCreate/MapCreateMain/MapCreateMainView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in MapCreateMainView.ts .
// If you need add data, please write in MapCreateMainViewModel.ts .
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
var UIViewBase_1 = require("./../../../../c2f-framework/gui/layer/UIViewBase");
var TabPage_1 = require("./../../../../c2f-framework/component/common/TabPage");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MapCreateMainView = /** @class */ (function (_super) {
    __extends(MapCreateMainView, _super);
    function MapCreateMainView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_MapCreateMain';
        _this.btnSaveSprite = undefined;
        _this.btnSaveButton = undefined;
        _this.btnNewSprite = undefined;
        _this.btnNewButton = undefined;
        _this.tabGroupLayout = undefined;
        _this.tabGroupTabPage = undefined;
        _this.tabGroupToggleContainer = undefined;
        _this.editBoxEditBox = undefined;
        return _this;
    }
    MapCreateMainView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MapCreateMainView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    MapCreateMainView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    MapCreateMainView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.content = this.get('_content_');
        this.btnSave = this.get('_btnSave_');
        this.btnSaveSprite = this.btnSave.getComponent(cc.Sprite);
        this.btnSaveButton = this.btnSave.getComponent(cc.Button);
        this.btnNew = this.get('_btnNew_');
        this.btnNewSprite = this.btnNew.getComponent(cc.Sprite);
        this.btnNewButton = this.btnNew.getComponent(cc.Button);
        this.tabGroup = this.get('_tabGroup_');
        this.tabGroupLayout = this.tabGroup.getComponent(cc.Layout);
        this.tabGroupTabPage = this.tabGroup.getComponent(TabPage_1.default);
        this.tabGroupToggleContainer = this.tabGroup.getComponent(cc.ToggleContainer);
        this.editBox = this.get('_editBox_');
        this.editBoxEditBox = this.editBox.getComponent(cc.EditBox);
    };
    MapCreateMainView.prototype.addEvent = function () {
        this.btnSaveButton.node.on('click', this.onbtnSaveButtonClick, this);
        this.btnNewButton.node.on('click', this.onbtnNewButtonClick, this);
        this.editBoxEditBox.node.on('editing-did-began', this.oneditBoxEditBoxEditingBegan, this);
        this.editBoxEditBox.node.on('editing-did-ended', this.oneditBoxEditBoxEditingEnded, this);
        this.editBoxEditBox.node.on('editing-return', this.oneditBoxEditBoxEditingReturn, this);
        this.editBoxEditBox.node.on('text-changed', this.oneditBoxEditBoxTextChanged, this);
    };
    MapCreateMainView.prototype.removeEvent = function () {
        this.btnSaveButton.node.off('click', this.onbtnSaveButtonClick, this);
        this.btnNewButton.node.off('click', this.onbtnNewButtonClick, this);
        this.editBoxEditBox.node.off('editing-did-began', this.oneditBoxEditBoxEditingBegan, this);
        this.editBoxEditBox.node.off('editing-did-ended', this.oneditBoxEditBoxEditingEnded, this);
        this.editBoxEditBox.node.off('editing-return', this.oneditBoxEditBoxEditingReturn, this);
        this.editBoxEditBox.node.off('text-changed', this.oneditBoxEditBoxTextChanged, this);
    };
    MapCreateMainView.prototype.onbtnSaveButtonClick = function (component) {
        this.emit('click', component);
    };
    MapCreateMainView.prototype.onbtnNewButtonClick = function (component) {
        this.emit('click', component);
    };
    MapCreateMainView.prototype.oneditBoxEditBoxEditingBegan = function (component) {
        this.emit('editing-did-began', component);
    };
    MapCreateMainView.prototype.oneditBoxEditBoxEditingEnded = function (component) {
        this.emit('editing-did-ended', component);
    };
    MapCreateMainView.prototype.oneditBoxEditBoxEditingReturn = function (component) {
        this.emit('editing-return', component);
    };
    MapCreateMainView.prototype.oneditBoxEditBoxTextChanged = function (component) {
        this.emit('text-changed', component);
    };
    MapCreateMainView = __decorate([
        ccclass
    ], MapCreateMainView);
    return MapCreateMainView;
}(UIViewBase_1.UIViewBase));
exports.default = MapCreateMainView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvbWFwQ3JlYXRlL01hcENyZWF0ZU1haW4vTWFwQ3JlYXRlTWFpblZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEyRDtBQUMzRCxnRUFBZ0U7QUFDaEUsb0VBQW9FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEUsK0VBQThFO0FBQzlFLGdGQUEyRTtBQUdyRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUErQyxxQ0FBVTtJQUF6RDtRQUFBLHFFQXFHQztRQW5HRyxnQkFBZ0I7UUFDVCxnQkFBVSxHQUFHLGlCQUFpQixDQUFDO1FBSS9CLG1CQUFhLEdBQWMsU0FBUyxDQUFDO1FBQ3JDLG1CQUFhLEdBQWMsU0FBUyxDQUFDO1FBRXJDLGtCQUFZLEdBQWMsU0FBUyxDQUFDO1FBQ3BDLGtCQUFZLEdBQWMsU0FBUyxDQUFDO1FBRXBDLG9CQUFjLEdBQWMsU0FBUyxDQUFDO1FBQ3RDLHFCQUFlLEdBQVksU0FBUyxDQUFDO1FBQ3JDLDZCQUF1QixHQUF1QixTQUFTLENBQUM7UUFFeEQsb0JBQWMsR0FBZSxTQUFTLENBQUM7O0lBb0ZsRCxDQUFDO0lBakZVLGtDQUFNLEdBQWI7UUFDSSxpQkFBTSxNQUFNLFdBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU0sb0NBQVEsR0FBZjtRQUNJLElBQUksaUJBQU0sUUFBUSxFQUFFO1lBQ2hCLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxxQ0FBUyxHQUFoQjtRQUNJLElBQUksaUJBQU0sU0FBUyxFQUFFO1lBQ2pCLGlCQUFNLFNBQVMsV0FBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFUyx3Q0FBWSxHQUF0QjtRQUNJLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGlCQUFPLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyQyxJQUFJ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LENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBbEdnQixpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQXFHckM7SUFBRCx3QkFBQztDQXJHRCxBQXFHQyxDQXJHOEMsdUJBQVUsR0FxR3hEO2tCQXJHb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljIGdlbmVyYXRpb24sIHBsZWFzZSBkbyBub3QgZWRpdC5cbi8vIElmIHlvdSBuZWVkIGFkZCBsb2dpYywgcGxlYXNlIHdyaXRlIGluIE1hcENyZWF0ZU1haW5WaWV3LnRzIC5cbi8vIElmIHlvdSBuZWVkIGFkZCBkYXRhLCBwbGVhc2Ugd3JpdGUgaW4gTWFwQ3JlYXRlTWFpblZpZXdNb2RlbC50cyAuXG5cbmltcG9ydCB7IFVJVmlld0Jhc2UgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZ3VpL2xheWVyL1VJVmlld0Jhc2UnO1xuaW1wb3J0IFRhYlBhZ2UgZnJvbSBcIi4vLi4vLi4vLi4vLi4vYzJmLWZyYW1ld29yay9jb21wb25lbnQvY29tbW9uL1RhYlBhZ2VcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcENyZWF0ZU1haW5WaWV3IGV4dGVuZHMgVUlWaWV3QmFzZSB7XG5cbiAgICAvKiog6aKE5Yi25ZCNIOe7meWunuS+i+iwg+eUqCAqL1xuICAgIHB1YmxpYyBwcmVmYWJOYW1lID0gJ0ZfTWFwQ3JlYXRlTWFpbic7XG5cbiAgICBwdWJsaWMgY29udGVudDogY2MuTm9kZTtcbiAgICBwdWJsaWMgYnRuU2F2ZTogY2MuTm9kZTtcbiAgICBwdWJsaWMgYnRuU2F2ZVNwcml0ZTogY2MuU3ByaXRlID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyBidG5TYXZlQnV0dG9uOiBjYy5CdXR0b24gPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIGJ0bk5ldzogY2MuTm9kZTtcbiAgICBwdWJsaWMgYnRuTmV3U3ByaXRlOiBjYy5TcHJpdGUgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIGJ0bk5ld0J1dHRvbjogY2MuQnV0dG9uID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyB0YWJHcm91cDogY2MuTm9kZTtcbiAgICBwdWJsaWMgdGFiR3JvdXBMYXlvdXQ6IGNjLkxheW91dCA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgdGFiR3JvdXBUYWJQYWdlOiBUYWJQYWdlID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyB0YWJHcm91cFRvZ2dsZUNvbnRhaW5lcjogY2MuVG9nZ2xlQ29udGFpbmVyID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyBlZGl0Qm94OiBjYy5Ob2RlO1xuICAgIHB1YmxpYyBlZGl0Qm94RWRpdEJveDogY2MuRWRpdEJveCA9IHVuZGVmaW5lZDtcbiAgICBcblxuICAgIHB1YmxpYyBvbkxvYWQoKSB7XG4gICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkVuYWJsZSgpIHtcbiAgICAgICAgaWYgKHN1cGVyLm9uRW5hYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25EaXNhYmxlKCkge1xuICAgICAgICBpZiAoc3VwZXIub25EaXNhYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50KCk7XG4gICAgfSBcblxuICAgIHByb3RlY3RlZCBpbml0UHJvcGVydHkoKSB7XG4gICAgICAgIHN1cGVyLmluaXRQcm9wZXJ0eSgpO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmdldCgnX2NvbnRlbnRfJyk7XG4gICAgICAgIHRoaXMuYnRuU2F2ZSA9IHRoaXMuZ2V0KCdfYnRuU2F2ZV8nKTtcbiAgICAgICAgdGhpcy5idG5TYXZlU3ByaXRlID0gdGhpcy5idG5TYXZlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICB0aGlzLmJ0blNhdmVCdXR0b24gPSB0aGlzLmJ0blNhdmUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIHRoaXMuYnRuTmV3ID0gdGhpcy5nZXQoJ19idG5OZXdfJyk7XG4gICAgICAgIHRoaXMuYnRuTmV3U3ByaXRlID0gdGhpcy5idG5OZXcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHRoaXMuYnRuTmV3QnV0dG9uID0gdGhpcy5idG5OZXcuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIHRoaXMudGFiR3JvdXAgPSB0aGlzLmdldCgnX3RhYkdyb3VwXycpO1xuICAgICAgICB0aGlzLnRhYkdyb3VwTGF5b3V0ID0gdGhpcy50YWJHcm91cC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcbiAgICAgICAgdGhpcy50YWJHcm91cFRhYlBhZ2UgPSB0aGlzLnRhYkdyb3VwLmdldENvbXBvbmVudChUYWJQYWdlKTtcbiAgICAgICAgdGhpcy50YWJHcm91cFRvZ2dsZUNvbnRhaW5lciA9IHRoaXMudGFiR3JvdXAuZ2V0Q29tcG9uZW50KGNjLlRvZ2dsZUNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuZWRpdEJveCA9IHRoaXMuZ2V0KCdfZWRpdEJveF8nKTtcbiAgICAgICAgdGhpcy5lZGl0Qm94RWRpdEJveCA9IHRoaXMuZWRpdEJveC5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgYWRkRXZlbnQoKSB7XG4gICAgICAgIHRoaXMuYnRuU2F2ZUJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25idG5TYXZlQnV0dG9uQ2xpY2ssIHRoaXMpO1xuICAgICAgICB0aGlzLmJ0bk5ld0J1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25idG5OZXdCdXR0b25DbGljaywgdGhpcyk7XG4gICAgICAgIHRoaXMuZWRpdEJveEVkaXRCb3gubm9kZS5vbignZWRpdGluZy1kaWQtYmVnYW4nLCB0aGlzLm9uZWRpdEJveEVkaXRCb3hFZGl0aW5nQmVnYW4sIHRoaXMpO1xuICAgICAgICB0aGlzLmVkaXRCb3hFZGl0Qm94Lm5vZGUub24oJ2VkaXRpbmctZGlkLWVuZGVkJywgdGhpcy5vbmVkaXRCb3hFZGl0Qm94RWRpdGluZ0VuZGVkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5lZGl0Qm94RWRpdEJveC5ub2RlLm9uKCdlZGl0aW5nLXJldHVybicsIHRoaXMub25lZGl0Qm94RWRpdEJveEVkaXRpbmdSZXR1cm4sIHRoaXMpO1xuICAgICAgICB0aGlzLmVkaXRCb3hFZGl0Qm94Lm5vZGUub24oJ3RleHQtY2hhbmdlZCcsIHRoaXMub25lZGl0Qm94RWRpdEJveFRleHRDaGFuZ2VkLCB0aGlzKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlRXZlbnQoKSB7XG4gICAgICAgIHRoaXMuYnRuU2F2ZUJ1dHRvbi5ub2RlLm9mZignY2xpY2snLCB0aGlzLm9uYnRuU2F2ZUJ1dHRvbkNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5idG5OZXdCdXR0b24ubm9kZS5vZmYoJ2NsaWNrJywgdGhpcy5vbmJ0bk5ld0J1dHRvbkNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5lZGl0Qm94RWRpdEJveC5ub2RlLm9mZignZWRpdGluZy1kaWQtYmVnYW4nLCB0aGlzLm9uZWRpdEJveEVkaXRCb3hFZGl0aW5nQmVnYW4sIHRoaXMpO1xuICAgICAgICB0aGlzLmVkaXRCb3hFZGl0Qm94Lm5vZGUub2ZmKCdlZGl0aW5nLWRpZC1lbmRlZCcsIHRoaXMub25lZGl0Qm94RWRpdEJveEVkaXRpbmdFbmRlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuZWRpdEJveEVkaXRCb3gubm9kZS5vZmYoJ2VkaXRpbmctcmV0dXJuJywgdGhpcy5vbmVkaXRCb3hFZGl0Qm94RWRpdGluZ1JldHVybiwgdGhpcyk7XG4gICAgICAgIHRoaXMuZWRpdEJveEVkaXRCb3gubm9kZS5vZmYoJ3RleHQtY2hhbmdlZCcsIHRoaXMub25lZGl0Qm94RWRpdEJveFRleHRDaGFuZ2VkLCB0aGlzKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25idG5TYXZlQnV0dG9uQ2xpY2soY29tcG9uZW50OiBjYy5CdXR0b24pIHtcbiAgICAgICAgdGhpcy5lbWl0KCdjbGljaycsIGNvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbmJ0bk5ld0J1dHRvbkNsaWNrKGNvbXBvbmVudDogY2MuQnV0dG9uKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBjb21wb25lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25lZGl0Qm94RWRpdEJveEVkaXRpbmdCZWdhbihjb21wb25lbnQ6IGNjLkVkaXRCb3gpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdlZGl0aW5nLWRpZC1iZWdhbicsIGNvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbmVkaXRCb3hFZGl0Qm94RWRpdGluZ0VuZGVkKGNvbXBvbmVudDogY2MuRWRpdEJveCkge1xuICAgICAgICB0aGlzLmVtaXQoJ2VkaXRpbmctZGlkLWVuZGVkJywgY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uZWRpdEJveEVkaXRCb3hFZGl0aW5nUmV0dXJuKGNvbXBvbmVudDogY2MuRWRpdEJveCkge1xuICAgICAgICB0aGlzLmVtaXQoJ2VkaXRpbmctcmV0dXJuJywgY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uZWRpdEJveEVkaXRCb3hUZXh0Q2hhbmdlZChjb21wb25lbnQ6IGNjLkVkaXRCb3gpIHtcbiAgICAgICAgdGhpcy5lbWl0KCd0ZXh0LWNoYW5nZWQnLCBjb21wb25lbnQpO1xuICAgIH1cblxuXG59Il19