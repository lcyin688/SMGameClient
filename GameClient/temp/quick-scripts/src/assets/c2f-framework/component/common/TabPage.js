"use strict";
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