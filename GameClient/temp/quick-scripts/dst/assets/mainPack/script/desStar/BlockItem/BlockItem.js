
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/desStar/BlockItem/BlockItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '36ab6zM3oVKH6cELRNFNTOZ', 'BlockItem');
// mainPack/script/desStar/BlockItem/BlockItem.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIPControlBase_1 = require("./../../../../c2f-framework/gui/layer/UIPControlBase");
var C2FEnum_1 = require("./../../../../c2f-framework/define/C2FEnum");
var UIHelper_1 = require("../../../../Script/game/UIHelper");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BlockItem = /** @class */ (function (_super) {
    __extends(BlockItem, _super);
    function BlockItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'P_BlockItem';
        _this.model = undefined;
        _this.view = undefined;
        return _this;
    }
    BlockItem.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.on(C2FEnum_1.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    };
    BlockItem.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.off(C2FEnum_1.C2FEnum.UIEvent.ButtonClick);
    };
    BlockItem.prototype.onButtonClick = function (eventType, component) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (component.name) {
                    case this.view.btnButton.name:
                        this.CC_onClickbtn();
                        break;
                    default:
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    BlockItem.prototype.CC_onClickbtn = function () {
        if (this.model.data && this.model.data.cbFun) {
            this.model.data.cbFun(this.model.data);
        }
    };
    BlockItem.prototype.setInit = function (data) {
        this.model.initData(data);
        this.initView(data);
    };
    BlockItem.prototype.initView = function (data) {
        this.view.skeKuang.active = false;
        this.view.skeBoom.active = false;
        if (data.typ >= 0) {
            this.node.active = true;
            c2f.utils.view.changeSpriteFrame(this.view.iconSprite, data.url);
        }
        else {
            this.node.active = false;
        }
    };
    /**消除特效 */
    BlockItem.prototype.playExplode = function (callBack) {
        var _this = this;
        UIHelper_1.UIHelper.playEffect('pop_star');
        UIHelper_1.UIHelper.playSkeAni(this.view.skeBoomSkeleton, "boom", function () {
            _this.node.active = false;
            _this.view.skeKuang.active = false;
            _this.view.skeBoom.active = false;
            callBack();
        }, false, 0, 3);
    };
    BlockItem.prototype.playChoose = function () {
        UIHelper_1.UIHelper.playSkeAni(this.view.skeKuangSkeleton, "ani");
    };
    BlockItem = __decorate([
        ccclass
    ], BlockItem);
    return BlockItem;
}(UIPControlBase_1.UIPControlBase));
exports.default = BlockItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvZGVzU3Rhci9CbG9ja0l0ZW0vQmxvY2tJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVGQUFzRjtBQUN0RixzRUFBcUU7QUFLckUsNkRBQTREO0FBRXRELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXVDLDZCQUFjO0lBQXJEO1FBQUEscUVBc0VDO1FBbkVHLGdCQUFnQjtRQUNULGdCQUFVLEdBQUcsYUFBYSxDQUFDO1FBRTNCLFdBQUssR0FBbUIsU0FBUyxDQUFDO1FBQ2xDLFVBQUksR0FBa0IsU0FBUyxDQUFDOztJQStEM0MsQ0FBQztJQTdEYSw0QkFBUSxHQUFsQjtRQUNJLElBQUksaUJBQU0sUUFBUSxFQUFFO1lBQ2hCLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRVMsNkJBQVMsR0FBbkI7UUFDSSxJQUFJLGlCQUFNLFNBQVMsRUFBRTtZQUNqQixpQkFBTSxTQUFTLFdBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVhLGlDQUFhLEdBQTNCLFVBQTRCLFNBQWlCLEVBQUUsU0FBb0I7OztnQkFDL0QsUUFBUSxTQUFTLENBQUMsSUFBSSxFQUFFO29CQUVwQixLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUk7d0JBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzt3QkFDckIsTUFBTTtvQkFFVjt3QkFDSSxNQUFNO2lCQUNiOzs7O0tBQ0o7SUFFTyxpQ0FBYSxHQUFyQjtRQUNJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ3pDO0lBQ0wsQ0FBQztJQUVNLDJCQUFPLEdBQWQsVUFBZSxJQUEwQjtRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7SUFFTSw0QkFBUSxHQUFmLFVBQWdCLElBQTBCO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNoQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQ3ZCLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUNuRTthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1NBQzNCO0lBQ0wsQ0FBQztJQUNELFVBQVU7SUFDSCwrQkFBVyxHQUFsQixVQUFtQixRQUFrQjtRQUFyQyxpQkFRQztRQVBHLG1CQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hDLG1CQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLE1BQU0sRUFBRTtZQUNuRCxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7WUFDeEIsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtZQUNqQyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1lBQ2hDLFFBQVEsRUFBRSxDQUFBO1FBQ2QsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDbkIsQ0FBQztJQUVNLDhCQUFVLEdBQWpCO1FBQ0ksbUJBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUMxRCxDQUFDO0lBckVnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBc0U3QjtJQUFELGdCQUFDO0NBdEVELEFBc0VDLENBdEVzQywrQkFBYyxHQXNFcEQ7a0JBdEVvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUlQQ29udHJvbEJhc2UgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZ3VpL2xheWVyL1VJUENvbnRyb2xCYXNlJztcbmltcG9ydCB7IEMyRkVudW0gfSBmcm9tICcuLy4uLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZGVmaW5lL0MyRkVudW0nO1xuaW1wb3J0IEJsb2NrSXRlbU1vZGVsIGZyb20gJy4vQmxvY2tJdGVtTW9kZWwnO1xuaW1wb3J0IEJsb2NrSXRlbVZpZXcgZnJvbSAnLi9CbG9ja0l0ZW1WaWV3JztcbmltcG9ydCB7IEdhbWVDb25zdHMgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvZ2FtZS9HYW1lQ29uc3RzJztcbmltcG9ydCB7IFVJUGEgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvZ2FtZS9VSVBhcmFtJztcbmltcG9ydCB7IFVJSGVscGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0L2dhbWUvVUlIZWxwZXInO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrSXRlbSBleHRlbmRzIFVJUENvbnRyb2xCYXNlIHtcblxuXG4gICAgLyoqIOmihOWItuWQjSDnu5nlrp7kvovosIPnlKggKi9cbiAgICBwdWJsaWMgcHJlZmFiTmFtZSA9ICdQX0Jsb2NrSXRlbSc7XG5cbiAgICBwdWJsaWMgbW9kZWw6IEJsb2NrSXRlbU1vZGVsID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyB2aWV3OiBCbG9ja0l0ZW1WaWV3ID0gdW5kZWZpbmVkO1xuXG4gICAgcHJvdGVjdGVkIG9uRW5hYmxlKCk6IHZvaWQge1xuICAgICAgICBpZiAoc3VwZXIub25FbmFibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbihDMkZFbnVtLlVJRXZlbnQuQnV0dG9uQ2xpY2ssIHRoaXMub25CdXR0b25DbGljaywgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGlzYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHN1cGVyLm9uRGlzYWJsZSkge1xuICAgICAgICAgICAgc3VwZXIub25EaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vZmYoQzJGRW51bS5VSUV2ZW50LkJ1dHRvbkNsaWNrKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9uQnV0dG9uQ2xpY2soZXZlbnRUeXBlOiBzdHJpbmcsIGNvbXBvbmVudDogY2MuQnV0dG9uKSB7XG4gICAgICAgIHN3aXRjaCAoY29tcG9uZW50Lm5hbWUpIHtcblxuICAgICAgICAgICAgY2FzZSB0aGlzLnZpZXcuYnRuQnV0dG9uLm5hbWU6XG4gICAgICAgICAgICAgICAgdGhpcy5DQ19vbkNsaWNrYnRuKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIENDX29uQ2xpY2tidG4oKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmRhdGEgJiYgdGhpcy5tb2RlbC5kYXRhLmNiRnVuKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmRhdGEuY2JGdW4odGhpcy5tb2RlbC5kYXRhKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldEluaXQoZGF0YTogVUlQYS5EZXNTdGFySXRlbUFyZ3MpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5pbml0RGF0YShkYXRhKVxuICAgICAgICB0aGlzLmluaXRWaWV3KGRhdGEpXG4gICAgfVxuXG4gICAgcHVibGljIGluaXRWaWV3KGRhdGE6IFVJUGEuRGVzU3Rhckl0ZW1BcmdzKSB7XG4gICAgICAgIHRoaXMudmlldy5za2VLdWFuZy5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB0aGlzLnZpZXcuc2tlQm9vbS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICBpZiAoZGF0YS50eXAgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIGMyZi51dGlscy52aWV3LmNoYW5nZVNwcml0ZUZyYW1lKHRoaXMudmlldy5pY29uU3ByaXRlLCBkYXRhLnVybClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKua2iOmZpOeJueaViCAqL1xuICAgIHB1YmxpYyBwbGF5RXhwbG9kZShjYWxsQmFjazogRnVuY3Rpb24pIHtcbiAgICAgICAgVUlIZWxwZXIucGxheUVmZmVjdCgncG9wX3N0YXInKTtcbiAgICAgICAgVUlIZWxwZXIucGxheVNrZUFuaSh0aGlzLnZpZXcuc2tlQm9vbVNrZWxldG9uLCBcImJvb21cIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2tlS3VhbmcuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMudmlldy5za2VCb29tLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICBjYWxsQmFjaygpXG4gICAgICAgIH0sIGZhbHNlLCAwLCAzKVxuICAgIH1cblxuICAgIHB1YmxpYyBwbGF5Q2hvb3NlKCkge1xuICAgICAgICBVSUhlbHBlci5wbGF5U2tlQW5pKHRoaXMudmlldy5za2VLdWFuZ1NrZWxldG9uLCBcImFuaVwiKVxuICAgIH1cbn0iXX0=