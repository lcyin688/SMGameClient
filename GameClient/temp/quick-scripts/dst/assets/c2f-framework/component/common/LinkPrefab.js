
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/common/LinkPrefab.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9jb21tb24vTGlua1ByZWZhYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQWlELEVBQUUsQ0FBQyxVQUFVLEVBQTVELE9BQU8sYUFBQSxFQUFFLGlCQUFpQix1QkFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBa0IsQ0FBQztBQUVyRSxvREFBb0Q7QUFDcEQsb0RBQW9EO0FBQ3BELGlEQUFpRDtBQUtqRDtJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQWdIQztRQTlHVyxlQUFTLEdBQVksSUFBSSxDQUFBO1FBR3pCLGFBQU8sR0FBYyxJQUFJLENBQUE7O0lBMkdyQyxDQUFDO0lBekdHLHNCQUFJLDhCQUFNO2FBR1Y7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUE7UUFDdkIsQ0FBQzthQUxELFVBQVcsS0FBZ0I7WUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMvQixDQUFDOzs7T0FBQTtJQUtTLDJCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFUyw4QkFBUyxHQUFuQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFTyw4QkFBUyxHQUFqQixVQUFrQixJQUFhO1FBQzNCLElBQUksU0FBUyxFQUFFO1lBQ1gsWUFBWTtZQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDOUMsWUFBWTtZQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7WUFDcEQsWUFBWTtZQUNa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QUFDLFNBQVMsQ0FBQTtJQUN6QixDQUFDO0lBRU0sbUNBQWMsR0FBckIsVUFBOEMsSUFBc0I7UUFDaEUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUE7UUFDL0IsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDeEMsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE9BQU8sVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0scUNBQWdCLEdBQXZCLFVBQXdCLElBQVk7UUFDaEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUE7UUFDL0IsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM3RCxDQUFDO0lBMUdEO1FBREMsUUFBUTsrQ0FDd0I7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQzs0Q0FHaEU7SUFUZ0IsVUFBVTtRQUg5QixPQUFPO1FBQ1AsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1FBQzdCLGlCQUFpQjtPQUNHLFVBQVUsQ0FnSDlCO0lBQUQsaUJBQUM7Q0FoSEQsQUFnSEMsQ0FoSHVDLEVBQUUsQ0FBQyxTQUFTLEdBZ0huRDtrQkFoSG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIGV4ZWN1dGVJbkVkaXRNb2RlLCBwcm9wZXJ0eSwgbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcblxuLy8gY2MuRmxhZ3MuRG9udFNhdmUgICAgICAgICAgLy8g5b2T5YmN6IqC54K55LiN5Lya6KKr5L+d5a2Y5YiwcHJlZmFi5paH5Lu26YeMXG4vLyBjYy5GbGFncy5Mb2NrZWRJbkVkaXRvciAgICAvLyDlvZPliY3oioLngrnlj4rlrZDoioLngrnlnKjnvJbovpHlmajph4zkuI3kvJrooqvngrnlh7vliLBcbi8vIGNjLkZsYWdzLkhpZGVJbkhpZXJhcmNoeSAgIC8vIOW9k+WJjeiKgueCueWPiuWtkOiKgueCueWcqOe8lui+keWZqOmHjOS4jeaYvuekulxuXG5AY2NjbGFzc1xuQG1lbnUoJ2MyZi9jb21tb24vTGlua1ByZWZhYicpXG5AZXhlY3V0ZUluRWRpdE1vZGVcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmtQcmVmYWIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBfcmVhbE5vZGU6IGNjLk5vZGUgPSBudWxsXG5cbiAgICBAcHJvcGVydHlcbiAgICBwcml2YXRlIF9wcmVmYWI6IGNjLlByZWZhYiA9IG51bGxcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5QcmVmYWIsIHZpc2libGU6IHRydWUsIGRpc3BsYXlOYW1lOiBcIumihOWItuS9k1wiIH0pXG4gICAgc2V0IHByZWZhYih2YWx1ZTogY2MuUHJlZmFiKSB7XG4gICAgICAgIHRoaXMub25QcmVmYWJDaGFuZ2VkKHZhbHVlKVxuICAgIH1cbiAgICBnZXQgcHJlZmFiKCk6IGNjLlByZWZhYiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmVmYWJcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNoZWNrUmVhbE5vZGUoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9yZWFsTm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX3ByZWZhYiA9IG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldEZsYWcobm9kZTogY2MuTm9kZSkge1xuICAgICAgICBpZiAoQ0NfRURJVE9SKSB7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIG5vZGVbXCJfb2JqRmxhZ3NcIl0gfD0gY2MuT2JqZWN0LkZsYWdzLkRvbnRTYXZlO1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBub2RlW1wiX29iakZsYWdzXCJdIHw9IGNjLk9iamVjdC5GbGFncy5Mb2NrZWRJbkVkaXRvcjtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgbm9kZVtcIl9vYmpGbGFnc1wiXSB8PSBjYy5PYmplY3QuRmxhZ3MuSGlkZUluSGllcmFyY2h5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldFJlYWxOb2RlKCkge1xuICAgICAgICBpZiAoIXRoaXMuX3ByZWZhYikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmaW5kID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMubm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBvbmUgb2YgdGhpcy5ub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9uZS5uYW1lID09IHRoaXMuX3ByZWZhYi5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWFsTm9kZSA9IG9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmaW5kKSB7XG4gICAgICAgICAgICBsZXQgbmV3Tm9kZSA9IG51bGw7XG4gICAgICAgICAgICBpZiAoQ0NfRURJVE9SKSB7XG4gICAgICAgICAgICAgICAgbmV3Tm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuX3ByZWZhYik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld05vZGUgPSBjMmYudXRpbHMudmlldy5pbnN0YW50aWF0ZU1WQ1ByZWZhYih0aGlzLl9wcmVmYWIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuZXdOb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXNldEZsYWcobmV3Tm9kZSk7XG4gICAgICAgICAgICBuZXdOb2RlLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmluc2VydENoaWxkKG5ld05vZGUsIC0xKSAvL+a3u+WKoOWIsOacgOW6leWxglxuICAgICAgICAgICAgdGhpcy5fcmVhbE5vZGUgPSBuZXdOb2RlO1xuICAgICAgICAgICAgdGhpcy5yZXNldFNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXRTaXplKCkge1xuICAgICAgICBpZiAodGhpcy5ub2RlLndpZHRoID09IDAgJiYgdGhpcy5ub2RlLmhlaWdodCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0Q29udGVudFNpemUodGhpcy5fcmVhbE5vZGUud2lkdGgsIHRoaXMuX3JlYWxOb2RlLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHdpZGdldCA9IHRoaXMuX3JlYWxOb2RlLmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xuICAgICAgICBpZiAod2lkZ2V0KSB7XG4gICAgICAgICAgICB3aWRnZXQuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uUHJlZmFiQ2hhbmdlZChuZXdQZmFiOiBjYy5QcmVmYWIpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlYWxOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWFsTm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLl9yZWFsTm9kZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcHJlZmFiID0gbmV3UGZhYjtcbiAgICAgICAgdGhpcy5yZXNldFJlYWxOb2RlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja1JlYWxOb2RlKCkge1xuICAgICAgICBpZiAoIXRoaXMuX3JlYWxOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0UmVhbE5vZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQcmVmYWJOb2RlKCk6IGNjLk5vZGUge1xuICAgICAgICBpZiAoIXRoaXMuX3JlYWxOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0UmVhbE5vZGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcmVhbE5vZGVcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29tcG9uZW50RXg8VCBleHRlbmRzIGNjLkNvbXBvbmVudD4odHlwZTogeyBwcm90b3R5cGU6IFQgfSk6IFQge1xuICAgICAgICB0aGlzLmNoZWNrUmVhbE5vZGUoKTtcbiAgICAgICAgbGV0IHByZWZhYk5vZGUgPSB0aGlzLl9yZWFsTm9kZVxuICAgICAgICBpZiAoIXByZWZhYk5vZGUgfHwgIWNjLmlzVmFsaWQocHJlZmFiTm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmVmYWJOb2RlLmdldENvbXBvbmVudCh0eXBlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UmVhbENvbXBvbmVudChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jaGVja1JlYWxOb2RlKCk7XG4gICAgICAgIGxldCBwcmVmYWJOb2RlID0gdGhpcy5fcmVhbE5vZGVcbiAgICAgICAgcmV0dXJuIHByZWZhYk5vZGUgPyBwcmVmYWJOb2RlLmdldENvbXBvbmVudChuYW1lKSA6IG51bGw7XG4gICAgfVxufSJdfQ==