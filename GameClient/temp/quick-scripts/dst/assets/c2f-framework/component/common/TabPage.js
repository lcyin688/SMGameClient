
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/common/TabPage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7c408v/hf9Ch7Fqsk0DkYEv', 'TabPage');
// c2f-framework/component/common/TabPage.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var TabPage = /** @class */ (function (_super) {
    __extends(TabPage, _super);
    function TabPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sfSelected = null;
        _this.sfUnSelect = null;
        _this.clrSelected = cc.Color.WHITE.clone();
        _this.clrUnSelect = cc.Color.WHITE.clone();
        _this.outClrSelected = cc.Color.BLACK.clone();
        _this.outClrUnSelect = cc.Color.GRAY.clone();
        _this.togItemClick = [];
        /** 当前页签 */
        _this.curTab = null;
        /** 页签可否切换判断回调 */
        _this.switchCheckHandler = null;
        return _this;
    }
    TabPage.prototype.start = function () {
    };
    /** 在隐藏状态切换tabpag后，显示时刷新UI */
    TabPage.prototype.onEnable = function () {
        if (!this.curTab) {
            return;
        }
        var container = this.getComponent(cc.ToggleContainer);
        if (container) {
            container.updateTogglesUIStateOnly(this.curTab);
        }
    };
    TabPage.prototype.CC_onClickToggle = function (event) {
        //播放音效
        this.subBtnClicked(event.target.name);
    };
    /** subTog个数 */
    TabPage.prototype.setTabCount = function (count) {
        for (var i = 0; i < this.node.childrenCount; i++) {
            this.node.children[i].active = i < count;
        }
    };
    /** 添加响应事件 */
    TabPage.prototype.addClickHandler = function (handler) {
        this.togItemClick.push(handler);
    };
    /** 选中子Toggle */
    TabPage.prototype.subBtnClicked = function (subTitle, extend) {
        if (extend === void 0) { extend = undefined; }
        if (this.curTab == subTitle) {
            return;
        }
        var canSwitch = true;
        if (this.switchCheckHandler) {
            canSwitch = this.switchCheckHandler(subTitle);
            if (!canSwitch) {
                for (var i = 0; i < this.node.children.length; i++) {
                    var node = this.node.children[i];
                    var btnComp = node.getComponent(cc.Toggle);
                    if (btnComp && node.name == this.curTab) {
                        btnComp.check();
                        break;
                    }
                }
            }
        }
        if (canSwitch) {
            this.curTab = subTitle;
            this.setTabBtnState(subTitle);
            for (var _i = 0, _a = this.togItemClick; _i < _a.length; _i++) {
                var one = _a[_i];
                one.emit([subTitle, extend]);
            }
        }
    };
    //根据按钮名称设置按钮状态
    TabPage.prototype.setTabBtnState = function (name) {
        if (name == null) {
            return;
        }
        for (var i = 0; i < this.node.children.length; i++) {
            var node = this.node.children[i];
            var btnComp = node.getComponent(cc.Toggle);
            if (!btnComp) {
                continue;
            }
            var selected = name == node.name;
            var titleNode = c2f.utils.view.getFirstChildByName(node, 'txtTitle');
            if (titleNode) {
                titleNode.color = selected ? this.clrSelected : this.clrUnSelect;
                var outlineComp = titleNode.getComponent(cc.LabelOutline);
                if (outlineComp) {
                    outlineComp.color = selected ? this.outClrSelected : this.outClrUnSelect;
                }
            }
            var frame = selected ? this.sfSelected : this.sfUnSelect;
            if (frame) {
                node.getComponent(cc.Sprite).spriteFrame = frame;
            }
            btnComp.isChecked = selected;
        }
    };
    /** 快捷设置切换事件 */
    TabPage.prototype.quickSetTabHnadler = function (ower, handlerName) {
        var handler = new cc.Component.EventHandler();
        handler.target = ower.node;
        handler.component = c2f.utils.view.getComponentName(ower);
        handler.handler = handlerName;
        handler.customEventData = "";
        this.addClickHandler(handler);
    };
    /** 页签切换可用性回调 */
    TabPage.prototype.setSwitchCheckHandler = function (handler) {
        this.switchCheckHandler = handler;
    };
    __decorate([
        property(cc.SpriteFrame)
    ], TabPage.prototype, "sfSelected", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], TabPage.prototype, "sfUnSelect", void 0);
    __decorate([
        property(cc.Color)
    ], TabPage.prototype, "clrSelected", void 0);
    __decorate([
        property(cc.Color)
    ], TabPage.prototype, "clrUnSelect", void 0);
    __decorate([
        property(cc.Color)
    ], TabPage.prototype, "outClrSelected", void 0);
    __decorate([
        property(cc.Color)
    ], TabPage.prototype, "outClrUnSelect", void 0);
    __decorate([
        property({ type: cc.Component.EventHandler })
    ], TabPage.prototype, "togItemClick", void 0);
    TabPage = __decorate([
        ccclass,
        menu('c2f/common/TabPage')
    ], TabPage);
    return TabPage;
}(cc.Component));
exports.default = TabPage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9jb21tb24vVGFiUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQThCLEVBQUUsQ0FBQyxVQUFVLEVBQXpDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBa0IsQ0FBQztBQUdsRDtJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQW1JQztRQWhJVyxnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFHbEMsZ0JBQVUsR0FBbUIsSUFBSSxDQUFDO1FBR2xDLGlCQUFXLEdBQWEsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFHL0MsaUJBQVcsR0FBYSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUcvQyxvQkFBYyxHQUFhLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBR2xELG9CQUFjLEdBQWEsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFHakQsa0JBQVksR0FBZ0MsRUFBRSxDQUFDO1FBRXZELFdBQVc7UUFDSCxZQUFNLEdBQVcsSUFBSSxDQUFDO1FBQzlCLGlCQUFpQjtRQUNULHdCQUFrQixHQUFhLElBQUksQ0FBQzs7SUF5R2hELENBQUM7SUF2R2EsdUJBQUssR0FBZjtJQUNBLENBQUM7SUFFRCw2QkFBNkI7SUFDbkIsMEJBQVEsR0FBbEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNkLE9BQU87U0FDVjtRQUNELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3RELElBQUksU0FBUyxFQUFFO1lBQ1gsU0FBUyxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuRDtJQUNMLENBQUM7SUFFTyxrQ0FBZ0IsR0FBeEIsVUFBeUIsS0FBSztRQUMxQixNQUFNO1FBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxlQUFlO0lBQ1IsNkJBQVcsR0FBbEIsVUFBbUIsS0FBYTtRQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDNUM7SUFDTCxDQUFDO0lBRUQsYUFBYTtJQUNOLGlDQUFlLEdBQXRCLFVBQXVCLE9BQWtDO1FBQ3JELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxnQkFBZ0I7SUFDVCwrQkFBYSxHQUFwQixVQUFxQixRQUFnQixFQUFFLE1BQXVCO1FBQXZCLHVCQUFBLEVBQUEsa0JBQXVCO1FBQzFELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxRQUFRLEVBQUU7WUFDekIsT0FBTztTQUNWO1FBQ0QsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ3pCLFNBQVMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNoRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzNDLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTt3QkFDckMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNoQixNQUFNO3FCQUNUO2lCQUNKO2FBQ0o7U0FDSjtRQUNELElBQUksU0FBUyxFQUFFO1lBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7WUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QixLQUFnQixVQUFpQixFQUFqQixLQUFBLElBQUksQ0FBQyxZQUFZLEVBQWpCLGNBQWlCLEVBQWpCLElBQWlCLEVBQUU7Z0JBQTlCLElBQUksR0FBRyxTQUFBO2dCQUNSLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUNoQztTQUNKO0lBQ0wsQ0FBQztJQUVELGNBQWM7SUFDTixnQ0FBYyxHQUF0QixVQUF1QixJQUFZO1FBQy9CLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUNkLE9BQU87U0FDVjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDVixTQUFTO2FBQ1o7WUFDRCxJQUFJLFFBQVEsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztZQUNqQyxJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDckUsSUFBSSxTQUFTLEVBQUU7Z0JBQ1gsU0FBUyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ2pFLElBQUksV0FBVyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMxRCxJQUFJLFdBQVcsRUFBRTtvQkFDYixXQUFXLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztpQkFDNUU7YUFDSjtZQUVELElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUN6RCxJQUFJLEtBQUssRUFBRTtnQkFDUCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2FBQ3BEO1lBQ0QsT0FBTyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7U0FDaEM7SUFDTCxDQUFDO0lBRUQsZUFBZTtJQUNSLG9DQUFrQixHQUF6QixVQUEwQixJQUFrQixFQUFFLFdBQW1CO1FBQzdELElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxPQUFPLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztRQUM5QixPQUFPLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxnQkFBZ0I7SUFDVCx1Q0FBcUIsR0FBNUIsVUFBNkIsT0FBaUI7UUFDMUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQztJQUN0QyxDQUFDO0lBOUhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7K0NBQ2lCO0lBRzFDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7K0NBQ2lCO0lBRzFDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ29DO0lBR3ZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ29DO0lBR3ZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ3VDO0lBRzFEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ3NDO0lBR3pEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7aURBQ1M7SUFyQnRDLE9BQU87UUFGM0IsT0FBTztRQUNQLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztPQUNOLE9BQU8sQ0FtSTNCO0lBQUQsY0FBQztDQW5JRCxBQW1JQyxDQW5Jb0MsRUFBRSxDQUFDLFNBQVMsR0FtSWhEO2tCQW5Jb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEMyRkNvbnN0IH0gZnJvbSBcIi4uLy4uL2RlZmluZS9DMkZDb25zdFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbkBtZW51KCdjMmYvY29tbW9uL1RhYlBhZ2UnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiUGFnZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgcHJpdmF0ZSBzZlNlbGVjdGVkOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgcHJpdmF0ZSBzZlVuU2VsZWN0OiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQ29sb3IpXG4gICAgcHJpdmF0ZSBjbHJTZWxlY3RlZDogY2MuQ29sb3IgPSBjYy5Db2xvci5XSElURS5jbG9uZSgpO1xuXG4gICAgQHByb3BlcnR5KGNjLkNvbG9yKVxuICAgIHByaXZhdGUgY2xyVW5TZWxlY3Q6IGNjLkNvbG9yID0gY2MuQ29sb3IuV0hJVEUuY2xvbmUoKTtcblxuICAgIEBwcm9wZXJ0eShjYy5Db2xvcilcbiAgICBwcml2YXRlIG91dENsclNlbGVjdGVkOiBjYy5Db2xvciA9IGNjLkNvbG9yLkJMQUNLLmNsb25lKCk7XG5cbiAgICBAcHJvcGVydHkoY2MuQ29sb3IpXG4gICAgcHJpdmF0ZSBvdXRDbHJVblNlbGVjdDogY2MuQ29sb3IgPSBjYy5Db2xvci5HUkFZLmNsb25lKCk7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyIH0pXG4gICAgcHJpdmF0ZSB0b2dJdGVtQ2xpY2s6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSA9IFtdO1xuXG4gICAgLyoqIOW9k+WJjemhteetviAqL1xuICAgIHByaXZhdGUgY3VyVGFiOiBzdHJpbmcgPSBudWxsO1xuICAgIC8qKiDpobXnrb7lj6/lkKbliIfmjaLliKTmlq3lm57osIMgKi9cbiAgICBwcml2YXRlIHN3aXRjaENoZWNrSGFuZGxlcjogRnVuY3Rpb24gPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCkge1xuICAgIH1cblxuICAgIC8qKiDlnKjpmpDol4/nirbmgIHliIfmjaJ0YWJwYWflkI7vvIzmmL7npLrml7bliLfmlrBVSSAqL1xuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1clRhYikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb250YWluZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5Ub2dnbGVDb250YWluZXIpO1xuICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICBjb250YWluZXIudXBkYXRlVG9nZ2xlc1VJU3RhdGVPbmx5KHRoaXMuY3VyVGFiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgQ0Nfb25DbGlja1RvZ2dsZShldmVudCkge1xuICAgICAgICAvL+aSreaUvumfs+aViFxuICAgICAgICB0aGlzLnN1YkJ0bkNsaWNrZWQoZXZlbnQudGFyZ2V0Lm5hbWUpO1xuICAgIH1cblxuICAgIC8qKiBzdWJUb2fkuKrmlbAgKi9cbiAgICBwdWJsaWMgc2V0VGFiQ291bnQoY291bnQ6IG51bWJlcikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbltpXS5hY3RpdmUgPSBpIDwgY291bnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5re75Yqg5ZON5bqU5LqL5Lu2ICovXG4gICAgcHVibGljIGFkZENsaWNrSGFuZGxlcihoYW5kbGVyOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMudG9nSXRlbUNsaWNrLnB1c2goaGFuZGxlcik7XG4gICAgfVxuXG4gICAgLyoqIOmAieS4reWtkFRvZ2dsZSAqL1xuICAgIHB1YmxpYyBzdWJCdG5DbGlja2VkKHN1YlRpdGxlOiBzdHJpbmcsIGV4dGVuZDogYW55ID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0aGlzLmN1clRhYiA9PSBzdWJUaXRsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjYW5Td2l0Y2ggPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5zd2l0Y2hDaGVja0hhbmRsZXIpIHtcbiAgICAgICAgICAgIGNhblN3aXRjaCA9IHRoaXMuc3dpdGNoQ2hlY2tIYW5kbGVyKHN1YlRpdGxlKTtcbiAgICAgICAgICAgIGlmICghY2FuU3dpdGNoKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm5vZGUuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIGxldCBidG5Db21wID0gbm9kZS5nZXRDb21wb25lbnQoY2MuVG9nZ2xlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ0bkNvbXAgJiYgbm9kZS5uYW1lID09IHRoaXMuY3VyVGFiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidG5Db21wLmNoZWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuU3dpdGNoKSB7XG4gICAgICAgICAgICB0aGlzLmN1clRhYiA9IHN1YlRpdGxlO1xuICAgICAgICAgICAgdGhpcy5zZXRUYWJCdG5TdGF0ZShzdWJUaXRsZSk7XG4gICAgICAgICAgICBmb3IgKGxldCBvbmUgb2YgdGhpcy50b2dJdGVtQ2xpY2spIHtcbiAgICAgICAgICAgICAgICBvbmUuZW1pdChbc3ViVGl0bGUsIGV4dGVuZF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/moLnmja7mjInpkq7lkI3np7Dorr7nva7mjInpkq7nirbmgIFcbiAgICBwcml2YXRlIHNldFRhYkJ0blN0YXRlKG5hbWU6IHN0cmluZykge1xuICAgICAgICBpZiAobmFtZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5ub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbGV0IGJ0bkNvbXAgPSBub2RlLmdldENvbXBvbmVudChjYy5Ub2dnbGUpO1xuICAgICAgICAgICAgaWYgKCFidG5Db21wKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBuYW1lID09IG5vZGUubmFtZTtcbiAgICAgICAgICAgIGxldCB0aXRsZU5vZGUgPSBjMmYudXRpbHMudmlldy5nZXRGaXJzdENoaWxkQnlOYW1lKG5vZGUsICd0eHRUaXRsZScpO1xuICAgICAgICAgICAgaWYgKHRpdGxlTm9kZSkge1xuICAgICAgICAgICAgICAgIHRpdGxlTm9kZS5jb2xvciA9IHNlbGVjdGVkID8gdGhpcy5jbHJTZWxlY3RlZCA6IHRoaXMuY2xyVW5TZWxlY3Q7XG4gICAgICAgICAgICAgICAgbGV0IG91dGxpbmVDb21wID0gdGl0bGVOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbE91dGxpbmUpO1xuICAgICAgICAgICAgICAgIGlmIChvdXRsaW5lQ29tcCkge1xuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lQ29tcC5jb2xvciA9IHNlbGVjdGVkID8gdGhpcy5vdXRDbHJTZWxlY3RlZCA6IHRoaXMub3V0Q2xyVW5TZWxlY3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZnJhbWUgPSBzZWxlY3RlZCA/IHRoaXMuc2ZTZWxlY3RlZCA6IHRoaXMuc2ZVblNlbGVjdDtcbiAgICAgICAgICAgIGlmIChmcmFtZSkge1xuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBmcmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ0bkNvbXAuaXNDaGVja2VkID0gc2VsZWN0ZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5b+r5o236K6+572u5YiH5o2i5LqL5Lu2ICovXG4gICAgcHVibGljIHF1aWNrU2V0VGFiSG5hZGxlcihvd2VyOiBjYy5Db21wb25lbnQsIGhhbmRsZXJOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBoYW5kbGVyLnRhcmdldCA9IG93ZXIubm9kZTtcbiAgICAgICAgaGFuZGxlci5jb21wb25lbnQgPSBjMmYudXRpbHMudmlldy5nZXRDb21wb25lbnROYW1lKG93ZXIpO1xuICAgICAgICBoYW5kbGVyLmhhbmRsZXIgPSBoYW5kbGVyTmFtZTtcbiAgICAgICAgaGFuZGxlci5jdXN0b21FdmVudERhdGEgPSBcIlwiO1xuICAgICAgICB0aGlzLmFkZENsaWNrSGFuZGxlcihoYW5kbGVyKTtcbiAgICB9XG5cbiAgICAvKiog6aG1562+5YiH5o2i5Y+v55So5oCn5Zue6LCDICovXG4gICAgcHVibGljIHNldFN3aXRjaENoZWNrSGFuZGxlcihoYW5kbGVyOiBGdW5jdGlvbikge1xuICAgICAgICB0aGlzLnN3aXRjaENoZWNrSGFuZGxlciA9IGhhbmRsZXI7XG4gICAgfVxuXG59Il19