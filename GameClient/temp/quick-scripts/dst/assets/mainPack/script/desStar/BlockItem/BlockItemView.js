
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/desStar/BlockItem/BlockItemView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4fbaeSn8E5FJ4WlkmQlmypK', 'BlockItemView');
// mainPack/script/desStar/BlockItem/BlockItemView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in BlockItemView.ts .
// If you need add data, please write in BlockItemViewModel.ts .
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
var UIPanelBase_1 = require("./../../../../c2f-framework/gui/layer/UIPanelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BlockItemView = /** @class */ (function (_super) {
    __extends(BlockItemView, _super);
    function BlockItemView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'P_BlockItem';
        _this.iconSprite = undefined;
        _this.skeBoomSkeleton = undefined;
        _this.skeKuangSkeleton = undefined;
        _this.btnButton = undefined;
        return _this;
    }
    BlockItemView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BlockItemView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    BlockItemView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    BlockItemView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.icon = this.get('_icon_');
        this.iconSprite = this.icon.getComponent(cc.Sprite);
        this.skeBoom = this.get('_skeBoom_');
        this.skeBoomSkeleton = this.skeBoom.getComponent(sp.Skeleton);
        this.skeKuang = this.get('_skeKuang_');
        this.skeKuangSkeleton = this.skeKuang.getComponent(sp.Skeleton);
        this.btn = this.get('_btn_');
        this.btnButton = this.btn.getComponent(cc.Button);
    };
    BlockItemView.prototype.addEvent = function () {
        this.btnButton.node.on('click', this.onbtnButtonClick, this);
    };
    BlockItemView.prototype.removeEvent = function () {
        this.btnButton.node.off('click', this.onbtnButtonClick, this);
    };
    BlockItemView.prototype.onbtnButtonClick = function (component) {
        this.emit('click', component);
    };
    BlockItemView = __decorate([
        ccclass
    ], BlockItemView);
    return BlockItemView;
}(UIPanelBase_1.UIPanelBase));
exports.default = BlockItemView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvZGVzU3Rhci9CbG9ja0l0ZW0vQmxvY2tJdGVtVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTJEO0FBQzNELDREQUE0RDtBQUM1RCxnRUFBZ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRSxpRkFBZ0Y7QUFFMUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBMkMsaUNBQVc7SUFBdEQ7UUFBQSxxRUE0REM7UUEzREcsZ0JBQWdCO1FBQ1QsZ0JBQVUsR0FBRyxhQUFhLENBQUM7UUFHM0IsZ0JBQVUsR0FBYyxTQUFTLENBQUM7UUFFbEMscUJBQWUsR0FBZ0IsU0FBUyxDQUFDO1FBRXpDLHNCQUFnQixHQUFnQixTQUFTLENBQUM7UUFFMUMsZUFBUyxHQUFjLFNBQVMsQ0FBQzs7SUFpRDVDLENBQUM7SUE5Q1UsOEJBQU0sR0FBYjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO0lBQ25CLENBQUM7SUFFTSxnQ0FBUSxHQUFmO1FBQ0ksSUFBSSxpQkFBTSxRQUFRLEVBQUU7WUFDaEIsaUJBQU0sUUFBUSxXQUFFLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVNLGlDQUFTLEdBQWhCO1FBQ0ksSUFBSSxpQkFBTSxTQUFTLEVBQUU7WUFDakIsaUJBQU0sU0FBUyxXQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVTLG9DQUFZLEdBQXRCO1FBQ0ksaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFdEQsQ0FBQztJQUVPLGdDQUFRLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFakUsQ0FBQztJQUVPLG1DQUFXLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFbEUsQ0FBQztJQUVPLHdDQUFnQixHQUF4QixVQUF5QixTQUFvQjtRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBekRnQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBNERqQztJQUFELG9CQUFDO0NBNURELEFBNERDLENBNUQwQyx5QkFBVyxHQTREckQ7a0JBNURvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljIGdlbmVyYXRpb24sIHBsZWFzZSBkbyBub3QgZWRpdC5cbi8vIElmIHlvdSBuZWVkIGFkZCBsb2dpYywgcGxlYXNlIHdyaXRlIGluIEJsb2NrSXRlbVZpZXcudHMgLlxuLy8gSWYgeW91IG5lZWQgYWRkIGRhdGEsIHBsZWFzZSB3cml0ZSBpbiBCbG9ja0l0ZW1WaWV3TW9kZWwudHMgLlxuXG5pbXBvcnQgeyBVSVBhbmVsQmFzZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vYzJmLWZyYW1ld29yay9ndWkvbGF5ZXIvVUlQYW5lbEJhc2UnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrSXRlbVZpZXcgZXh0ZW5kcyBVSVBhbmVsQmFzZSB7XG4gICAgLyoqIOmihOWItuWQjSDnu5nlrp7kvovosIPnlKggKi9cbiAgICBwdWJsaWMgcHJlZmFiTmFtZSA9ICdQX0Jsb2NrSXRlbSc7XG5cbiAgICBwdWJsaWMgaWNvbjogY2MuTm9kZTtcbiAgICBwdWJsaWMgaWNvblNwcml0ZTogY2MuU3ByaXRlID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyBza2VCb29tOiBjYy5Ob2RlO1xuICAgIHB1YmxpYyBza2VCb29tU2tlbGV0b246IHNwLlNrZWxldG9uID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyBza2VLdWFuZzogY2MuTm9kZTtcbiAgICBwdWJsaWMgc2tlS3VhbmdTa2VsZXRvbjogc3AuU2tlbGV0b24gPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIGJ0bjogY2MuTm9kZTtcbiAgICBwdWJsaWMgYnRuQnV0dG9uOiBjYy5CdXR0b24gPSB1bmRlZmluZWQ7XG5cblxuICAgIHB1YmxpYyBvbkxvYWQoKSB7XG4gICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkVuYWJsZSgpIHtcbiAgICAgICAgaWYgKHN1cGVyLm9uRW5hYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25EaXNhYmxlKCkge1xuICAgICAgICBpZiAoc3VwZXIub25EaXNhYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRQcm9wZXJ0eSgpIHtcbiAgICAgICAgc3VwZXIuaW5pdFByb3BlcnR5KCk7XG4gICAgICAgIHRoaXMuaWNvbiA9IHRoaXMuZ2V0KCdfaWNvbl8nKTtcbiAgICAgICAgdGhpcy5pY29uU3ByaXRlID0gdGhpcy5pY29uLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICB0aGlzLnNrZUJvb20gPSB0aGlzLmdldCgnX3NrZUJvb21fJyk7XG4gICAgICAgIHRoaXMuc2tlQm9vbVNrZWxldG9uID0gdGhpcy5za2VCb29tLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgIHRoaXMuc2tlS3VhbmcgPSB0aGlzLmdldCgnX3NrZUt1YW5nXycpO1xuICAgICAgICB0aGlzLnNrZUt1YW5nU2tlbGV0b24gPSB0aGlzLnNrZUt1YW5nLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgIHRoaXMuYnRuID0gdGhpcy5nZXQoJ19idG5fJyk7XG4gICAgICAgIHRoaXMuYnRuQnV0dG9uID0gdGhpcy5idG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZEV2ZW50KCkge1xuICAgICAgICB0aGlzLmJ0bkJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25idG5CdXR0b25DbGljaywgdGhpcyk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUV2ZW50KCkge1xuICAgICAgICB0aGlzLmJ0bkJ1dHRvbi5ub2RlLm9mZignY2xpY2snLCB0aGlzLm9uYnRuQnV0dG9uQ2xpY2ssIHRoaXMpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbmJ0bkJ1dHRvbkNsaWNrKGNvbXBvbmVudDogY2MuQnV0dG9uKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBjb21wb25lbnQpO1xuICAgIH1cblxuXG59Il19