"use strict";
cc._RF.push(module, '96fc6vEM8NH8bTEerRkvN4j', 'UIPrefabBase');
// c2f-framework/gui/layer/UIPrefabBase.ts

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
exports.UIPrefabBase = void 0;
var UIBase_1 = require("./UIBase");
var ccclass = cc._decorator.ccclass;
/** 预制组件基类 */
var UIPrefabBase = /** @class */ (function (_super) {
    __extends(UIPrefabBase, _super);
    function UIPrefabBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 摊平的节点集合（不能重名） */
        _this.mapNode = new Map();
        /** 红点节点 */
        _this.mapRedI = new Map();
        return _this;
    }
    /** 通过节点名获取预制上的节点，整个预制不能有重名节点 */
    UIPrefabBase.prototype.get = function (name) {
        return this.mapNode.get(name);
    };
    /** 映射节点到对象 */
    UIPrefabBase.prototype.initViewProperty = function () {
        if (this.mapNode.size <= 0) {
            c2f.utils.view.nodeTreeInfoLite(this.node, this.mapNode);
            this.initProperty();
        }
    };
    UIPrefabBase.prototype.onLoad = function () {
        this.initViewProperty();
        this.initDotForUI();
        this.autoAddTopSafeAreaComp();
    };
    UIPrefabBase.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.updateRedDot();
    };
    UIPrefabBase.prototype.initProperty = function () {
    };
    UIPrefabBase.prototype.initDotForUI = function () {
        if (!c2f.dotMgr.root) {
            return;
        }
        var compName = c2f.utils.view.getComponentName(this);
        if (compName.endsWith('View')) {
            compName = compName.substring(0, compName.length - 4);
        }
        var allConf = szg.cfg.getCfgData('redDots');
        if (allConf && allConf.views && allConf.views[compName]) {
            var node2Id = allConf.views[compName];
            for (var key in node2Id) {
                var id = node2Id[key];
                if (id <= 0) {
                    continue;
                }
                var dstNode = this.mapNode.get(key);
                if (dstNode) {
                    c2f.dotMgr.setDisplayProxy(id, dstNode, null, null);
                    this.mapRedI.set(key, id);
                }
                else {
                    cc.warn("auto add redDot in [" + compName + "], dont find node: [" + key + "]");
                }
            }
        }
    };
    UIPrefabBase.prototype.updateRedDot = function () {
        if (!this.mapRedI) {
            return;
        }
        this.mapRedI.forEach(function (v, k) {
            c2f.dotMgr.refreshRedDotById(v);
        });
    };
    UIPrefabBase.prototype.onDestroy = function () {
        // 节点引用数据清除
        this.mapNode.clear();
        this.mapRedI.clear();
        _super.prototype.onDestroy.call(this);
    };
    UIPrefabBase.prototype.autoAddTopSafeAreaComp = function () {
        if (!this.mapNode) {
            return;
        }
        var topNode = this.mapNode.get('_top_') || this.mapNode.get('top');
        if (!topNode) {
            return;
        }
        var widget = topNode.getComponent(cc.Widget);
        if (!widget) {
            return;
        }
        var safeAreaComp = topNode.getComponent('C2FSafeArea');
        if (!safeAreaComp) {
            safeAreaComp = topNode.addComponent('C2FSafeArea');
            safeAreaComp.setTopEnable(true);
        }
    };
    UIPrefabBase = __decorate([
        ccclass
    ], UIPrefabBase);
    return UIPrefabBase;
}(UIBase_1.UIBase));
exports.UIPrefabBase = UIPrefabBase;

cc._RF.pop();