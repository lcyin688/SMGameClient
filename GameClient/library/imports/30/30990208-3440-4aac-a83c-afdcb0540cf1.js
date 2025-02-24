"use strict";
cc._RF.push(module, '30990IINEBKrKg8r9ywVAzx', 'LinkPrefab');
// c2f-framework/component/common/LinkPrefab.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, executeInEditMode = _a.executeInEditMode, property = _a.property, menu = _a.menu;
// cc.Flags.DontSave          // 当前节点不会被保存到prefab文件里
// cc.Flags.LockedInEditor    // 当前节点及子节点在编辑器里不会被点击到
// cc.Flags.HideInHierarchy   // 当前节点及子节点在编辑器里不显示
var LinkPrefab = /** @class */ (function (_super) {
    __extends(LinkPrefab, _super);
    function LinkPrefab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._realNode = null;
        _this._prefab = null;
        return _this;
    }
    Object.defineProperty(LinkPrefab.prototype, "prefab", {
        get: function () {
            return this._prefab;
        },
        set: function (value) {
            this.onPrefabChanged(value);
        },
        enumerable: false,
        configurable: true
    });
    LinkPrefab.prototype.onLoad = function () {
        this.checkRealNode();
    };
    LinkPrefab.prototype.onDestroy = function () {
        this._realNode = null;
        this._prefab = null;
    };
    LinkPrefab.prototype.resetFlag = function (node) {
        if (CC_EDITOR) {
            //@ts-ignore
            node["_objFlags"] |= cc.Object.Flags.DontSave;
            //@ts-ignore
            node["_objFlags"] |= cc.Object.Flags.LockedInEditor;
            //@ts-ignore
            node["_objFlags"] |= cc.Object.Flags.HideInHierarchy;
        }
    };
    LinkPrefab.prototype.resetRealNode = function () {
        if (!this._prefab) {
            return;
        }
        var find = false;
        if (this.node.children.length > 0) {
            for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
                var one = _a[_i];
                if (one.name == this._prefab.name) {
                    find = true;
                    this._realNode = one;
                }
            }
        }
        if (!find) {
            var newNode = null;
            if (CC_EDITOR) {
                newNode = cc.instantiate(this._prefab);
            }
            else {
                newNode = c2f.utils.view.instantiateMVCPrefab(this._prefab);
            }
            if (!newNode) {
                return;
            }
            this.resetFlag(newNode);
            newNode.setPosition(0, 0);
            this.node.insertChild(newNode, -1); //添加到最底层
            this._realNode = newNode;
            this.resetSize();
        }
    };
    LinkPrefab.prototype.resetSize = function () {
        if (this.node.width == 0 && this.node.height == 0) {
            this.node.setContentSize(this._realNode.width, this._realNode.height);
        }
        var widget = this._realNode.getComponent(cc.Widget);
        if (widget) {
            widget.enabled = true;
        }
    };
    LinkPrefab.prototype.onPrefabChanged = function (newPfab) {
        if (this._realNode) {
            this._realNode.destroy();
            this._realNode = null;
        }
        this._prefab = newPfab;
        this.resetRealNode();
    };
    LinkPrefab.prototype.checkRealNode = function () {
        if (!this._realNode) {
            this.resetRealNode();
        }
    };
    LinkPrefab.prototype.getPrefabNode = function () {
        if (!this._realNode) {
            this.resetRealNode();
        }
        return this._realNode;
    };
    LinkPrefab.prototype.getComponentEx = function (type) {
        this.checkRealNode();
        var prefabNode = this._realNode;
        if (!prefabNode || !cc.isValid(prefabNode)) {
            return null;
        }
        return prefabNode.getComponent(type);
    };
    LinkPrefab.prototype.getRealComponent = function (name) {
        this.checkRealNode();
        var prefabNode = this._realNode;
        return prefabNode ? prefabNode.getComponent(name) : null;
    };
    __decorate([
        property
    ], LinkPrefab.prototype, "_prefab", void 0);
    __decorate([
        property({ type: cc.Prefab, visible: true, displayName: "预制体" })
    ], LinkPrefab.prototype, "prefab", null);
    LinkPrefab = __decorate([
        ccclass,
        menu('c2f/common/LinkPrefab'),
        executeInEditMode
    ], LinkPrefab);
    return LinkPrefab;
}(cc.Component));
exports.default = LinkPrefab;

cc._RF.pop();