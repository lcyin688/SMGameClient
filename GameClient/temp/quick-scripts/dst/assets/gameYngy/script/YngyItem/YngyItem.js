
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/gameYngy/script/YngyItem/YngyItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a35418aCMZBAqf3OV1u/UOc', 'YngyItem');
// gameYngy/script/YngyItem/YngyItem.ts

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
var UIPControlBase_1 = require("./../../../c2f-framework/gui/layer/UIPControlBase");
var C2FEnum_1 = require("./../../../c2f-framework/define/C2FEnum");
var UIParam_1 = require("../../../Script/game/UIParam");
var GameConsts_1 = require("../../../Script/game/GameConsts");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var YngyItem = /** @class */ (function (_super) {
    __extends(YngyItem, _super);
    function YngyItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'P_YngyItem';
        _this.model = undefined;
        _this.view = undefined;
        return _this;
    }
    YngyItem.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.on(C2FEnum_1.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    };
    YngyItem.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.off(C2FEnum_1.C2FEnum.UIEvent.ButtonClick);
    };
    YngyItem.prototype.onButtonClick = function (eventType, component) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (component.name) {
                    case this.view.iconButton.name:
                        this.CC_onClickicon();
                        break;
                    default:
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    YngyItem.prototype.CC_onClickicon = function () {
        if (this.model.data.state == UIParam_1.UIPa.YngyItemArgsStates.Alive) {
            if (!this.model.data.hideState) {
                if (this.model.data.clickFun) {
                    this.model.data.clickFun(this.model.data, this.node);
                }
            }
        }
    };
    YngyItem.prototype.init = function (data) {
        this.model.initData(data);
        this.initView(data);
    };
    YngyItem.prototype.initView = function (data) {
        var url = GameConsts_1.GameConsts.ResUrl.yngy + "chip_" + data.typ;
        c2f.utils.view.changeSpriteFrame(this.view.iconSprite, url);
        this.node.setPosition(data.pos);
        this.setOpcity(data.hideState);
    };
    YngyItem.prototype.setOpcity = function (hideState, time) {
        if (time === void 0) { time = 0; }
        cc.Tween.stopAllByTarget(this.node);
        var opacityValue = hideState ? 100 : 255;
        cc.tween(this.node)
            .to(time, { opacity: hideState ? 0 : opacityValue })
            .start();
    };
    YngyItem = __decorate([
        ccclass
    ], YngyItem);
    return YngyItem;
}(UIPControlBase_1.UIPControlBase));
exports.default = YngyItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nYW1lWW5neS9zY3JpcHQvWW5neUl0ZW0vWW5neUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0ZBQW1GO0FBQ25GLG1FQUFrRTtBQUdsRSx3REFBb0Q7QUFDcEQsOERBQTZEO0FBRXZELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXNDLDRCQUFjO0lBQXBEO1FBQUEscUVBZ0VDO1FBL0RHLGdCQUFnQjtRQUNULGdCQUFVLEdBQUcsWUFBWSxDQUFDO1FBRTFCLFdBQUssR0FBa0IsU0FBUyxDQUFDO1FBQ2pDLFVBQUksR0FBaUIsU0FBUyxDQUFDOztJQTJEMUMsQ0FBQztJQXpEYSwyQkFBUSxHQUFsQjtRQUNJLElBQUksaUJBQU0sUUFBUSxFQUFFO1lBQ2hCLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRVMsNEJBQVMsR0FBbkI7UUFDSSxJQUFJLGlCQUFNLFNBQVMsRUFBRTtZQUNqQixpQkFBTSxTQUFTLFdBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVhLGdDQUFhLEdBQTNCLFVBQTRCLFNBQWlCLEVBQUUsU0FBb0I7OztnQkFDL0QsUUFBUSxTQUFTLENBQUMsSUFBSSxFQUFFO29CQUVwQixLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUk7d0JBQzFCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFDdEIsTUFBTTtvQkFFVjt3QkFDSSxNQUFNO2lCQUNiOzs7O0tBQ0o7SUFFTyxpQ0FBYyxHQUF0QjtRQUNJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLGNBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUU7WUFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDNUIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3hEO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFHTSx1QkFBSSxHQUFYLFVBQVksSUFBdUI7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN2QixDQUFDO0lBRU0sMkJBQVEsR0FBZixVQUFnQixJQUF1QjtRQUNuQyxJQUFJLEdBQUcsR0FBRyx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDdEQsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUFFTyw0QkFBUyxHQUFqQixVQUFrQixTQUFrQixFQUFFLElBQWdCO1FBQWhCLHFCQUFBLEVBQUEsUUFBZ0I7UUFDbEQsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ25DLElBQUksWUFBWSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDeEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDbkQsS0FBSyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQTlEZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdFNUI7SUFBRCxlQUFDO0NBaEVELEFBZ0VDLENBaEVxQywrQkFBYyxHQWdFbkQ7a0JBaEVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUlQQ29udHJvbEJhc2UgfSBmcm9tICcuLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZ3VpL2xheWVyL1VJUENvbnRyb2xCYXNlJztcbmltcG9ydCB7IEMyRkVudW0gfSBmcm9tICcuLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZGVmaW5lL0MyRkVudW0nO1xuaW1wb3J0IFluZ3lJdGVtTW9kZWwgZnJvbSAnLi9Zbmd5SXRlbU1vZGVsJztcbmltcG9ydCBZbmd5SXRlbVZpZXcgZnJvbSAnLi9Zbmd5SXRlbVZpZXcnO1xuaW1wb3J0IHsgVUlQYSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdC9nYW1lL1VJUGFyYW0nO1xuaW1wb3J0IHsgR2FtZUNvbnN0cyB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdC9nYW1lL0dhbWVDb25zdHMnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFluZ3lJdGVtIGV4dGVuZHMgVUlQQ29udHJvbEJhc2Uge1xuICAgIC8qKiDpooTliLblkI0g57uZ5a6e5L6L6LCD55SoICovXG4gICAgcHVibGljIHByZWZhYk5hbWUgPSAnUF9Zbmd5SXRlbSc7XG5cbiAgICBwdWJsaWMgbW9kZWw6IFluZ3lJdGVtTW9kZWwgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIHZpZXc6IFluZ3lJdGVtVmlldyA9IHVuZGVmaW5lZDtcblxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHN1cGVyLm9uRW5hYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub24oQzJGRW51bS5VSUV2ZW50LkJ1dHRvbkNsaWNrLCB0aGlzLm9uQnV0dG9uQ2xpY2ssIHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKTogdm9pZCB7XG4gICAgICAgIGlmIChzdXBlci5vbkRpc2FibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2ZmKEMyRkVudW0uVUlFdmVudC5CdXR0b25DbGljayk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBvbkJ1dHRvbkNsaWNrKGV2ZW50VHlwZTogc3RyaW5nLCBjb21wb25lbnQ6IGNjLkJ1dHRvbikge1xuICAgICAgICBzd2l0Y2ggKGNvbXBvbmVudC5uYW1lKSB7XG5cbiAgICAgICAgICAgIGNhc2UgdGhpcy52aWV3Lmljb25CdXR0b24ubmFtZTpcbiAgICAgICAgICAgICAgICB0aGlzLkNDX29uQ2xpY2tpY29uKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIENDX29uQ2xpY2tpY29uKCkge1xuICAgICAgICBpZiAodGhpcy5tb2RlbC5kYXRhLnN0YXRlID09IFVJUGEuWW5neUl0ZW1BcmdzU3RhdGVzLkFsaXZlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubW9kZWwuZGF0YS5oaWRlU3RhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb2RlbC5kYXRhLmNsaWNrRnVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuZGF0YS5jbGlja0Z1bih0aGlzLm1vZGVsLmRhdGEsIHRoaXMubm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgaW5pdChkYXRhOiBVSVBhLlluZ3lJdGVtQXJncykge1xuICAgICAgICB0aGlzLm1vZGVsLmluaXREYXRhKGRhdGEpO1xuICAgICAgICB0aGlzLmluaXRWaWV3KGRhdGEpXG4gICAgfVxuXG4gICAgcHVibGljIGluaXRWaWV3KGRhdGE6IFVJUGEuWW5neUl0ZW1BcmdzKSB7XG4gICAgICAgIGxldCB1cmwgPSBHYW1lQ29uc3RzLlJlc1VybC55bmd5ICsgXCJjaGlwX1wiICsgZGF0YS50eXA7XG4gICAgICAgIGMyZi51dGlscy52aWV3LmNoYW5nZVNwcml0ZUZyYW1lKHRoaXMudmlldy5pY29uU3ByaXRlLCB1cmwpXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihkYXRhLnBvcylcbiAgICAgICAgdGhpcy5zZXRPcGNpdHkoZGF0YS5oaWRlU3RhdGUpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRPcGNpdHkoaGlkZVN0YXRlOiBib29sZWFuLCB0aW1lOiBudW1iZXIgPSAwKSB7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGUpXG4gICAgICAgIGxldCBvcGFjaXR5VmFsdWUgPSBoaWRlU3RhdGUgPyAxMDAgOiAyNTVcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnRvKHRpbWUsIHsgb3BhY2l0eTogaGlkZVN0YXRlID8gMCA6IG9wYWNpdHlWYWx1ZSB9KVxuICAgICAgICAgICAgLnN0YXJ0KClcbiAgICB9XG5cbn0iXX0=