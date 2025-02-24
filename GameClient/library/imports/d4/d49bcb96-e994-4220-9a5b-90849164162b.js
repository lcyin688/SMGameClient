"use strict";
cc._RF.push(module, 'd49bcuW6ZRCIJpbkISRZBYr', 'VLItemGroup');
// c2f-framework/component/ui/scrollList/VLItemGroup.ts

"use strict";
/**
 * 虚拟列表副容器
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VLItemGroup = exports.GroupSource = void 0;
/** 分组数据来源类型 */
var GroupSource;
(function (GroupSource) {
    GroupSource[GroupSource["NODE"] = 0] = "NODE";
    GroupSource[GroupSource["PREFAB"] = 1] = "PREFAB";
    GroupSource[GroupSource["MAIN_ITEM_CHILD"] = 2] = "MAIN_ITEM_CHILD";
})(GroupSource = exports.GroupSource || (exports.GroupSource = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var VLItemGroup = /** @class */ (function () {
    function VLItemGroup() {
        this.content = null;
        this.templateType = GroupSource.PREFAB;
        this.templatePrefab = null;
        this.templateNode = null;
        this.templateChild = -1;
    }
    __decorate([
        property({
            type: cc.Node,
            tooltip: CC_DEV && "列表容器节点",
        })
    ], VLItemGroup.prototype, "content", void 0);
    __decorate([
        property({
            type: cc.Enum(GroupSource),
            tooltip: CC_DEV && "列表元素模板类型"
        })
    ], VLItemGroup.prototype, "templateType", void 0);
    __decorate([
        property({
            type: cc.Prefab,
            tooltip: CC_DEV && "列表元素模板预制体",
            visible: function () { return this.templateType === GroupSource.PREFAB; }
        })
    ], VLItemGroup.prototype, "templatePrefab", void 0);
    __decorate([
        property({
            type: cc.Node,
            tooltip: CC_DEV && "列表元素模板节点",
            visible: function () { return this.templateType === GroupSource.NODE; }
        })
    ], VLItemGroup.prototype, "templateNode", void 0);
    __decorate([
        property({
            type: cc.Enum({}),
            tooltip: CC_DEV && "以列表主元素的子节点作为模板节点",
            visible: function () { return this.templateType === GroupSource.MAIN_ITEM_CHILD; }
        })
    ], VLItemGroup.prototype, "templateChild", void 0);
    VLItemGroup = __decorate([
        ccclass("VLItemGroup"),
        executeInEditMode
    ], VLItemGroup);
    return VLItemGroup;
}());
exports.VLItemGroup = VLItemGroup;

cc._RF.pop();