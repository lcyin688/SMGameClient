
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/ui/scrollList/VLTemplate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC91aS9zY3JvbGxMaXN0L1ZMVGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztHQUVHOzs7Ozs7Ozs7QUFFSCxXQUFXO0FBQ1gsSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3BCLCtDQUFJLENBQUE7SUFDSixtREFBTSxDQUFBO0FBQ1YsQ0FBQyxFQUhXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBR3ZCO0FBRUssSUFBQSxLQUEyQyxFQUFFLENBQUMsVUFBVSxFQUF0RCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxpQkFBaUIsdUJBQWtCLENBQUM7QUFHL0Q7SUFBQTtRQU1XLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFHdkIsa0JBQWEsR0FBaUIsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQWVsRCxvQkFBZSxHQUFjLElBQUksQ0FBQztRQWdCbEMsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFlL0IsZUFBVSxHQUF1RCxJQUFJLENBQUM7SUFtQmpGLENBQUM7SUE1REcsc0JBQVcsb0NBQVk7YUFBdkIsY0FBMEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzthQUN0RSxVQUF3QixDQUFlO1lBQ25DLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxDQUFDLEVBQUU7Z0JBQzFCLE9BQU87YUFDVjtZQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxDQUFDOzs7T0FQcUU7SUFnQnRFLHNCQUFXLHNDQUFjO2FBQXpCLGNBQXlDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7YUFDdkUsVUFBMEIsQ0FBWTtZQUNsQyxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssQ0FBQyxFQUFFO2dCQUM1QixPQUFPO2FBQ1Y7WUFD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QkFBaUI7T0FDTCxVQUFVLENBMEV0QjtJQUFELGlCQUFDO0NBMUVELEFBMEVDLElBQUE7QUExRVksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOiZmuaLn+WIl+ihqOWFg+e0oOaooeadv1xuICovXG5cbi8qKiDmqKHmnb/nsbvlnosgKi9cbmV4cG9ydCBlbnVtIFRlbXBsYXRlVHlwZSB7XG4gICAgTk9ERSxcbiAgICBQUkVGQUJcbn1cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzcyhcIlZMVGVtcGxhdGVcIilcbkBleGVjdXRlSW5FZGl0TW9kZVxuZXhwb3J0IGNsYXNzIFZMVGVtcGxhdGUge1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiBcIuWIl+ihqOWuueWZqOiKgueCuVwiLFxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICB9KVxuICAgIHB1YmxpYyBjb250ZW50OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oVGVtcGxhdGVUeXBlKSB9KVxuICAgIHByaXZhdGUgX3RlbXBsYXRlVHlwZTogVGVtcGxhdGVUeXBlID0gVGVtcGxhdGVUeXBlLlBSRUZBQjtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5FbnVtKFRlbXBsYXRlVHlwZSksXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiBcIuWIl+ihqOWFg+e0oOaooeadv+exu+Wei1wiXG4gICAgfSlcbiAgICBwdWJsaWMgZ2V0IHRlbXBsYXRlVHlwZSgpOiBUZW1wbGF0ZVR5cGUgeyByZXR1cm4gdGhpcy5fdGVtcGxhdGVUeXBlOyB9XG4gICAgcHVibGljIHNldCB0ZW1wbGF0ZVR5cGUodjogVGVtcGxhdGVUeXBlKSB7XG4gICAgICAgIGlmICh0aGlzLl90ZW1wbGF0ZVR5cGUgPT09IHYpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90ZW1wbGF0ZVR5cGUgPSB2O1xuICAgICAgICB0aGlzLnJlc2V0TWFpbkl0ZW1DaGlsZCh0cnVlKTtcbiAgICB9XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByaXZhdGUgX3RlbXBsYXRlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLlByZWZhYixcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmIFwi5YiX6KGo5YWD57Sg5qih5p2/6aKE5Yi25L2TXCIsXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLlBSRUZBQjsgfVxuICAgIH0pXG4gICAgcHVibGljIGdldCB0ZW1wbGF0ZVByZWZhYigpOiBjYy5QcmVmYWIgeyByZXR1cm4gdGhpcy5fdGVtcGxhdGVQcmVmYWI7IH1cbiAgICBwdWJsaWMgc2V0IHRlbXBsYXRlUHJlZmFiKHY6IGNjLlByZWZhYikge1xuICAgICAgICBpZiAodGhpcy5fdGVtcGxhdGVQcmVmYWIgPT09IHYpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90ZW1wbGF0ZVByZWZhYiA9IHY7XG4gICAgICAgIHRoaXMucmVzZXRNYWluSXRlbUNoaWxkKHRydWUpO1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgX3RlbXBsYXRlTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmIFwi5YiX6KGo5YWD57Sg5qih5p2/6IqC54K5XCIsXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLk5PREU7IH1cbiAgICB9KVxuICAgIHB1YmxpYyBnZXQgdGVtcGxhdGVOb2RlKCk6IGNjLk5vZGUgeyByZXR1cm4gdGhpcy5fdGVtcGxhdGVOb2RlOyB9XG4gICAgcHVibGljIHNldCB0ZW1wbGF0ZU5vZGUodjogY2MuTm9kZSkge1xuICAgICAgICBpZiAodGhpcy5fdGVtcGxhdGVOb2RlID09PSB2KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdGVtcGxhdGVOb2RlID0gdjtcbiAgICAgICAgdGhpcy5yZXNldE1haW5JdGVtQ2hpbGQodHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGVkaXRvckNhbGw6IChtYWluSXRlbUNoaWxkOiB1bmtub3duLCByZWZyZXNoOiBib29sZWFuKSA9PiB2b2lkID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIOabtOaWsOaemuS4vuWGheWuuVxuICAgICAqIEBwYXJhbSByZWZyZXNoIOaYr+WQpuW8uuWItuWIt+aWsGluc3BlY3RvciBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzZXRNYWluSXRlbUNoaWxkKHJlZnJlc2g6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgICAgICBpZiAoIUNDX0VESVRPUikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBtYWluSXRlbUNoaWxkID0ge307XG4gICAgICAgIGlmICh0aGlzLnRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLk5PREUgJiYgdGhpcy50ZW1wbGF0ZU5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGVOb2RlLmNoaWxkcmVuLmZvckVhY2goKGMsIGkpID0+IHsgbWFpbkl0ZW1DaGlsZFtjLm5hbWVdID0gaTsgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5QUkVGQUIgJiYgdGhpcy50ZW1wbGF0ZVByZWZhYikge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVByZWZhYi5kYXRhLmNoaWxkcmVuLmZvckVhY2goKGMsIGkpID0+IHsgbWFpbkl0ZW1DaGlsZFtjLm5hbWVdID0gaTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lZGl0b3JDYWxsPy4obWFpbkl0ZW1DaGlsZCwgcmVmcmVzaCk7XG4gICAgfVxufSJdfQ==