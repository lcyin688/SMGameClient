
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/gui/layer/UIPrefabBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSVByZWZhYkJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFrQztBQUUxQixJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUVsQyxhQUFhO0FBRWI7SUFBa0MsZ0NBQU07SUFBeEM7UUFBQSxxRUFpR0M7UUEvRkcsb0JBQW9CO1FBQ1osYUFBTyxHQUF5QixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2xELFdBQVc7UUFDSCxhQUFPLEdBQXdCLElBQUksR0FBRyxFQUFFLENBQUM7O0lBNEZyRCxDQUFDO0lBMUZHLGdDQUFnQztJQUN6QiwwQkFBRyxHQUFWLFVBQVcsSUFBWTtRQUNuQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxjQUFjO0lBQ1AsdUNBQWdCLEdBQXZCO1FBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7WUFDeEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVTLDZCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFUywrQkFBUSxHQUFsQjtRQUNJLElBQUksaUJBQU0sUUFBUSxFQUFFO1lBQ2hCLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxD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QUFDO1lBQ25ELFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBaEdRLFlBQVk7UUFEeEIsT0FBTztPQUNLLFlBQVksQ0FpR3hCO0lBQUQsbUJBQUM7Q0FqR0QsQUFpR0MsQ0FqR2lDLGVBQU0sR0FpR3ZDO0FBakdZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUlCYXNlIH0gZnJvbSBcIi4vVUlCYXNlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoqIOmihOWItue7hOS7tuWfuuexuyAqL1xuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBVSVByZWZhYkJhc2UgZXh0ZW5kcyBVSUJhc2Uge1xuXG4gICAgLyoqIOaRiuW5s+eahOiKgueCuembhuWQiO+8iOS4jeiDvemHjeWQje+8iSAqL1xuICAgIHByaXZhdGUgbWFwTm9kZTogTWFwPHN0cmluZywgY2MuTm9kZT4gPSBuZXcgTWFwKCk7XG4gICAgLyoqIOe6oueCueiKgueCuSAqL1xuICAgIHByaXZhdGUgbWFwUmVkSTogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXAoKTtcblxuICAgIC8qKiDpgJrov4foioLngrnlkI3ojrflj5bpooTliLbkuIrnmoToioLngrnvvIzmlbTkuKrpooTliLbkuI3og73mnInph43lkI3oioLngrkgKi9cbiAgICBwdWJsaWMgZ2V0KG5hbWU6IHN0cmluZyk6IGNjLk5vZGUgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXBOb2RlLmdldChuYW1lKTtcbiAgICB9XG5cbiAgICAvKiog5pig5bCE6IqC54K55Yiw5a+56LGhICovXG4gICAgcHVibGljIGluaXRWaWV3UHJvcGVydHkoKSB7XG4gICAgICAgIGlmICh0aGlzLm1hcE5vZGUuc2l6ZSA8PSAwKSB7XG4gICAgICAgICAgICBjMmYudXRpbHMudmlldy5ub2RlVHJlZUluZm9MaXRlKHRoaXMubm9kZSwgdGhpcy5tYXBOb2RlKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFByb3BlcnR5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmluaXRWaWV3UHJvcGVydHkoKTtcbiAgICAgICAgdGhpcy5pbml0RG90Rm9yVUkoKTtcbiAgICAgICAgdGhpcy5hdXRvQWRkVG9wU2FmZUFyZWFDb21wKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRW5hYmxlKCk6IHZvaWQge1xuICAgICAgICBpZiAoc3VwZXIub25FbmFibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVSZWREb3QoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdFByb3BlcnR5KCkge1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0RG90Rm9yVUkoKSB7XG4gICAgICAgIGlmICghYzJmLmRvdE1nci5yb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvbXBOYW1lID0gYzJmLnV0aWxzLnZpZXcuZ2V0Q29tcG9uZW50TmFtZSh0aGlzKTtcbiAgICAgICAgaWYgKGNvbXBOYW1lLmVuZHNXaXRoKCdWaWV3JykpIHtcbiAgICAgICAgICAgIGNvbXBOYW1lID0gY29tcE5hbWUuc3Vic3RyaW5nKDAsIGNvbXBOYW1lLmxlbmd0aCAtIDQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbENvbmYgPSBzemcuY2ZnLmdldENmZ0RhdGEoJ3JlZERvdHMnKTtcbiAgICAgICAgaWYgKGFsbENvbmYgJiYgYWxsQ29uZi52aWV3cyAmJiBhbGxDb25mLnZpZXdzW2NvbXBOYW1lXSkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZTJJZDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IGFsbENvbmYudmlld3NbY29tcE5hbWVdO1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG5vZGUySWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IG5vZGUySWRba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoaWQgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGRzdE5vZGUgPSB0aGlzLm1hcE5vZGUuZ2V0KGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKGRzdE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYzJmLmRvdE1nci5zZXREaXNwbGF5UHJveHkoaWQsIGRzdE5vZGUsIG51bGwsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcFJlZEkuc2V0KGtleSwgaWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLndhcm4oYGF1dG8gYWRkIHJlZERvdCBpbiBbJHtjb21wTmFtZX1dLCBkb250IGZpbmQgbm9kZTogWyR7a2V5fV1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlUmVkRG90KCkge1xuICAgICAgICBpZiAoIXRoaXMubWFwUmVkSSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWFwUmVkSS5mb3JFYWNoKCh2LCBrKSA9PiB7XG4gICAgICAgICAgICBjMmYuZG90TWdyLnJlZnJlc2hSZWREb3RCeUlkKHYpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKSB7XG4gICAgICAgIC8vIOiKgueCueW8leeUqOaVsOaNrua4hemZpFxuICAgICAgICB0aGlzLm1hcE5vZGUuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5tYXBSZWRJLmNsZWFyKCk7XG4gICAgICAgIHN1cGVyLm9uRGVzdHJveSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXV0b0FkZFRvcFNhZmVBcmVhQ29tcCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1hcE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdG9wTm9kZSA9IHRoaXMubWFwTm9kZS5nZXQoJ190b3BfJykgfHwgdGhpcy5tYXBOb2RlLmdldCgndG9wJyk7XG4gICAgICAgIGlmICghdG9wTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB3aWRnZXQgPSB0b3BOb2RlLmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xuICAgICAgICBpZiAoIXdpZGdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzYWZlQXJlYUNvbXAgPSB0b3BOb2RlLmdldENvbXBvbmVudCgnQzJGU2FmZUFyZWEnKTtcbiAgICAgICAgaWYgKCFzYWZlQXJlYUNvbXApIHtcbiAgICAgICAgICAgIHNhZmVBcmVhQ29tcCA9IHRvcE5vZGUuYWRkQ29tcG9uZW50KCdDMkZTYWZlQXJlYScpO1xuICAgICAgICAgICAgc2FmZUFyZWFDb21wLnNldFRvcEVuYWJsZSh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=