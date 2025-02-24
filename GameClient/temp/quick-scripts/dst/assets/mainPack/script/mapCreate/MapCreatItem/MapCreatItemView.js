
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/mapCreate/MapCreatItem/MapCreatItemView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '42d81UGTc5Ga5e3h8mjG1e4', 'MapCreatItemView');
// mainPack/script/mapCreate/MapCreatItem/MapCreatItemView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in MapCreatItemView.ts .
// If you need add data, please write in MapCreatItemViewModel.ts .
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
var MapCreatItemView = /** @class */ (function (_super) {
    __extends(MapCreatItemView, _super);
    function MapCreatItemView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'P_MapCreatItem';
        _this.iconSprite = undefined;
        _this.btnButton = undefined;
        return _this;
    }
    MapCreatItemView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MapCreatItemView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    MapCreatItemView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    MapCreatItemView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.icon = this.get('_icon_');
        this.iconSprite = this.icon.getComponent(cc.Sprite);
        this.btn = this.get('_btn_');
        this.btnButton = this.btn.getComponent(cc.Button);
    };
    MapCreatItemView.prototype.addEvent = function () {
        this.btnButton.node.on('click', this.onbtnButtonClick, this);
    };
    MapCreatItemView.prototype.removeEvent = function () {
        this.btnButton.node.off('click', this.onbtnButtonClick, this);
    };
    MapCreatItemView.prototype.onbtnButtonClick = function (component) {
        this.emit('click', component);
    };
    MapCreatItemView = __decorate([
        ccclass
    ], MapCreatItemView);
    return MapCreatItemView;
}(UIPanelBase_1.UIPanelBase));
exports.default = MapCreatItemView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvbWFwQ3JlYXRlL01hcENyZWF0SXRlbS9NYXBDcmVhdEl0ZW1WaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMkQ7QUFDM0QsK0RBQStEO0FBQy9ELG1FQUFtRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5FLGlGQUFnRjtBQUUxRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUE4QyxvQ0FBVztJQUF6RDtRQUFBLHFFQW9EQztRQW5ERyxnQkFBZ0I7UUFDVCxnQkFBVSxHQUFHLGdCQUFnQixDQUFDO1FBRzlCLGdCQUFVLEdBQWMsU0FBUyxDQUFDO1FBRWxDLGVBQVMsR0FBYyxTQUFTLENBQUM7O0lBNkM1QyxDQUFDO0lBMUNVLGlDQUFNLEdBQWI7UUFDSSxpQkFBTSxNQUFNLFdBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU0sbUNBQVEsR0FBZjtRQUNJLElBQUksaUJBQU0sUUFBUSxFQUFFO1lBQ2hCLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxvQ0FBUyxHQUFoQjtRQUNJLElBQUksaUJBQU0sU0FBUyxFQUFFO1lBQ2pCLGlCQUFNLFNBQVMsV0FBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFUyx1Q0FBWSxHQUF0QjtRQUNJLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFdEQsQ0FBQztJQUVPLG1DQUFRLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFakUsQ0FBQztJQUVPLHNDQUFXLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFbEUsQ0FBQztJQUVPLDJDQUFnQixHQUF4QixVQUF5QixTQUFvQjtRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBakRnQixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQW9EcEM7SUFBRCx1QkFBQztDQXBERCxBQW9EQyxDQXBENkMseUJBQVcsR0FvRHhEO2tCQXBEb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljIGdlbmVyYXRpb24sIHBsZWFzZSBkbyBub3QgZWRpdC5cbi8vIElmIHlvdSBuZWVkIGFkZCBsb2dpYywgcGxlYXNlIHdyaXRlIGluIE1hcENyZWF0SXRlbVZpZXcudHMgLlxuLy8gSWYgeW91IG5lZWQgYWRkIGRhdGEsIHBsZWFzZSB3cml0ZSBpbiBNYXBDcmVhdEl0ZW1WaWV3TW9kZWwudHMgLlxuXG5pbXBvcnQgeyBVSVBhbmVsQmFzZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vYzJmLWZyYW1ld29yay9ndWkvbGF5ZXIvVUlQYW5lbEJhc2UnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcENyZWF0SXRlbVZpZXcgZXh0ZW5kcyBVSVBhbmVsQmFzZSB7XG4gICAgLyoqIOmihOWItuWQjSDnu5nlrp7kvovosIPnlKggKi9cbiAgICBwdWJsaWMgcHJlZmFiTmFtZSA9ICdQX01hcENyZWF0SXRlbSc7XG5cbiAgICBwdWJsaWMgaWNvbjogY2MuTm9kZTtcbiAgICBwdWJsaWMgaWNvblNwcml0ZTogY2MuU3ByaXRlID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyBidG46IGNjLk5vZGU7XG4gICAgcHVibGljIGJ0bkJ1dHRvbjogY2MuQnV0dG9uID0gdW5kZWZpbmVkO1xuICAgIFxuXG4gICAgcHVibGljIG9uTG9hZCgpIHtcbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRW5hYmxlKCkge1xuICAgICAgICBpZiAoc3VwZXIub25FbmFibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRFdmVudCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRpc2FibGUoKSB7XG4gICAgICAgIGlmIChzdXBlci5vbkRpc2FibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnQoKTtcbiAgICB9IFxuXG4gICAgcHJvdGVjdGVkIGluaXRQcm9wZXJ0eSgpIHtcbiAgICAgICAgc3VwZXIuaW5pdFByb3BlcnR5KCk7XG4gICAgICAgIHRoaXMuaWNvbiA9IHRoaXMuZ2V0KCdfaWNvbl8nKTtcbiAgICAgICAgdGhpcy5pY29uU3ByaXRlID0gdGhpcy5pY29uLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICB0aGlzLmJ0biA9IHRoaXMuZ2V0KCdfYnRuXycpO1xuICAgICAgICB0aGlzLmJ0bkJ1dHRvbiA9IHRoaXMuYnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZEV2ZW50KCkge1xuICAgICAgICB0aGlzLmJ0bkJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25idG5CdXR0b25DbGljaywgdGhpcyk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUV2ZW50KCkge1xuICAgICAgICB0aGlzLmJ0bkJ1dHRvbi5ub2RlLm9mZignY2xpY2snLCB0aGlzLm9uYnRuQnV0dG9uQ2xpY2ssIHRoaXMpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbmJ0bkJ1dHRvbkNsaWNrKGNvbXBvbmVudDogY2MuQnV0dG9uKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBjb21wb25lbnQpO1xuICAgIH1cblxuXG59Il19