"use strict";
cc._RF.push(module, '6a35diyasFG7pxO1gEJqWs4', 'VLTemplate');
// c2f-framework/component/ui/scrollList/VLTemplate.ts

"use strict";
/**
 * 虚拟列表元素模板
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VLTemplate = exports.TemplateType = void 0;
/** 模板类型 */
var TemplateType;
(function (TemplateType) {
    TemplateType[TemplateType["NODE"] = 0] = "NODE";
    TemplateType[TemplateType["PREFAB"] = 1] = "PREFAB";
})(TemplateType = exports.TemplateType || (exports.TemplateType = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var VLTemplate = /** @class */ (function () {
    function VLTemplate() {
        this.content = null;
        this._templateType = TemplateType.PREFAB;
        this._templatePrefab = null;
        this._templateNode = null;
        this.editorCall = null;
    }
    Object.defineProperty(VLTemplate.prototype, "templateType", {
        get: function () { return this._templateType; },
        set: function (v) {
            if (this._templateType === v) {
                return;
            }
            this._templateType = v;
            this.resetMainItemChild(true);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VLTemplate.prototype, "templatePrefab", {
        get: function () { return this._templatePrefab; },
        set: function (v) {
            if (this._templatePrefab === v) {
                return;
            }
            this._templatePrefab = v;
            this.resetMainItemChild(true);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VLTemplate.prototype, "templateNode", {
        get: function () { return this._templateNode; },
        set: function (v) {
            if (this._templateNode === v) {
                return;
            }
            this._templateNode = v;
            this.resetMainItemChild(true);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 更新枚举内容
     * @param refresh 是否强制刷新inspector
     * @returns
     */
    VLTemplate.prototype.resetMainItemChild = function (refresh) {
        var _a;
        if (refresh === void 0) { refresh = false; }
        if (!CC_EDITOR) {
            return;
        }
        var mainItemChild = {};
        if (this.templateType === TemplateType.NODE && this.templateNode) {
            this.templateNode.children.forEach(function (c, i) { mainItemChild[c.name] = i; });
        }
        else if (this.templateType === TemplateType.PREFAB && this.templatePrefab) {
            this.templatePrefab.data.children.forEach(function (c, i) { mainItemChild[c.name] = i; });
        }
        (_a = this.editorCall) === null || _a === void 0 ? void 0 : _a.call(this, mainItemChild, refresh);
    };
    __decorate([
        property({
            type: cc.Node,
            tooltip: CC_DEV && "列表容器节点",
            visible: function () { return false; }
        })
    ], VLTemplate.prototype, "content", void 0);
    __decorate([
        property({ type: cc.Enum(TemplateType) })
    ], VLTemplate.prototype, "_templateType", void 0);
    __decorate([
        property({
            type: cc.Enum(TemplateType),
            tooltip: CC_DEV && "列表元素模板类型"
        })
    ], VLTemplate.prototype, "templateType", null);
    __decorate([
        property(cc.Prefab)
    ], VLTemplate.prototype, "_templatePrefab", void 0);
    __decorate([
        property({
            type: cc.Prefab,
            tooltip: CC_DEV && "列表元素模板预制体",
            visible: function () { return this.templateType === TemplateType.PREFAB; }
        })
    ], VLTemplate.prototype, "templatePrefab", null);
    __decorate([
        property(cc.Node)
    ], VLTemplate.prototype, "_templateNode", void 0);
    __decorate([
        property({
            type: cc.Node,
            tooltip: CC_DEV && "列表元素模板节点",
            visible: function () { return this.templateType === TemplateType.NODE; }
        })
    ], VLTemplate.prototype, "templateNode", null);
    VLTemplate = __decorate([
        ccclass("VLTemplate"),
        executeInEditMode
    ], VLTemplate);
    return VLTemplate;
}());
exports.VLTemplate = VLTemplate;

cc._RF.pop();