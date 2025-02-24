
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/GameLogo/GameLogo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1423c+jsLRGaamI6FwTSC9s', 'GameLogo');
// entrance/script/GameLogo/GameLogo.ts

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
var UIVControlBase_1 = require("./../../../c2f-framework/gui/layer/UIVControlBase");
var C2FEnum_1 = require("./../../../c2f-framework/define/C2FEnum");
var EntranceView_1 = require("../EntranceView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameLogo = /** @class */ (function (_super) {
    __extends(GameLogo, _super);
    function GameLogo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'GameLogo';
        _this.model = undefined;
        _this.view = undefined;
        return _this;
    }
    GameLogo.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.on(C2FEnum_1.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    };
    GameLogo.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.on(C2FEnum_1.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    };
    GameLogo.prototype.onButtonClick = function (eventType, component) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (component.name) {
                    default:
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    GameLogo.prototype.onViewOpen = function (param) {
    };
    GameLogo.prototype.onLoad = function () {
        if (_super.prototype.onLoad) {
            _super.prototype.onLoad.call(this);
        }
        cc.debug.setDisplayStats(false);
    };
    GameLogo.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    GameLogo.prototype.start = function () {
        this.startGame();
    };
    GameLogo.prototype.startGame = function () {
        this.initLanguage();
    };
    GameLogo.prototype.initLanguage = function () {
        c2f.language.initLanguage(this.playLogoAnima.bind(this));
        szg.player.initModules();
    };
    GameLogo.prototype.playLogoAnima = function () {
        var _this = this;
        this.view.barProgressBar.progress = 0.1;
        cc.tween(this.view.barProgressBar).to(0.3, { progress: 1 }).call(function () {
            _this.openLoginView();
        }).start();
    };
    GameLogo.prototype.openLoginView = function () {
        var uic = {
            onUIAdded: function (node, params) {
                c2f.gui.remove(EntranceView_1.EntranceUI.GameLogo);
            },
        };
        c2f.gui.open(EntranceView_1.EntranceUI.GameLogin, null, uic);
        // GameHelper.loadBundle(GameConsts.Bundle.mainPack).then(UIID => {
        //     c2f.gui.open(UIID.DesStarMain, null, uic)
        // });
    };
    GameLogo = __decorate([
        ccclass
    ], GameLogo);
    return GameLogo;
}(UIVControlBase_1.UIVControlBase));
exports.default = GameLogo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvR2FtZUxvZ28vR2FtZUxvZ28udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0ZBQW1GO0FBQ25GLG1FQUFrRTtBQUlsRSxnREFBNkM7QUFHdkMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBc0MsNEJBQWM7SUFBcEQ7UUFBQSxxRUE2RUM7UUE1RUcsZ0JBQWdCO1FBQ1QsZ0JBQVUsR0FBRyxVQUFVLENBQUM7UUFFeEIsV0FBSyxHQUFrQixTQUFTLENBQUM7UUFDakMsVUFBSSxHQUFpQixTQUFTLENBQUM7O0lBd0UxQyxDQUFDO0lBdEVHLDJCQUFRLEdBQVI7UUFDSSxJQUFJLGlCQUFNLFFBQVEsRUFBRTtZQUNoQixpQkFBTSxRQUFRLFdBQUUsQ0FBQztTQUNwQjtRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNELDRCQUFTLEdBQVQ7UUFDSSxJQUFJLGlCQUFNLFNBQVMsRUFBRTtZQUNqQixpQkFBTSxTQUFTLFdBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVhLGdDQUFhLEdBQTNCLFVBQTRCLFNBQWlCLEVBQUUsU0FBb0I7OztnQkFDL0QsUUFBUSxTQUFTLENBQUMsSUFBSSxFQUFFO29CQUNwQjt3QkFDSSxNQUFNO2lCQUNiOzs7O0tBQ0o7SUFFUyw2QkFBVSxHQUFwQixVQUFxQixLQUFVO0lBRS9CLENBQUM7SUFHUyx5QkFBTSxHQUFoQjtRQUNJLElBQUksaUJBQU0sTUFBTSxFQUFFO1lBQ2QsaUJBQU0sTUFBTSxXQUFFLENBQUM7U0FDbEI7UUFDRCxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRVMsNEJBQVMsR0FBbkI7UUFDSSxpQkFBTSxTQUFTLFdBQUUsQ0FBQztJQUN0QixDQUFDO0lBRVMsd0JBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ08sNEJBQVMsR0FBakI7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVPLCtCQUFZLEdBQXBCO1FBQ0ksR0FBRyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RCxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFHTyxnQ0FBYSxHQUFyQjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQTtRQUN2QyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM3RCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDeEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDZCxDQUFDO0lBRU8sZ0NBQWEsR0FBckI7UUFDSSxJQUFJLEdBQUcsR0FBa0I7WUFDckIsU0FBUyxFQUFFLFVBQUMsSUFBYSxFQUFFLE1BQVc7Z0JBQ2xDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLHlCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEMsQ0FBQztTQUNKLENBQUE7UUFDRCxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyx5QkFBVSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUMsbUVBQW1FO1FBQ25FLGdEQUFnRDtRQUNoRCxNQUFNO0lBR1YsQ0FBQztJQTNFZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTZFNUI7SUFBRCxlQUFDO0NBN0VELEFBNkVDLENBN0VxQywrQkFBYyxHQTZFbkQ7a0JBN0VvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUlWQ29udHJvbEJhc2UgfSBmcm9tICcuLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZ3VpL2xheWVyL1VJVkNvbnRyb2xCYXNlJztcbmltcG9ydCB7IEMyRkVudW0gfSBmcm9tICcuLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZGVmaW5lL0MyRkVudW0nO1xuaW1wb3J0IEdhbWVMb2dvTW9kZWwgZnJvbSAnLi9HYW1lTG9nb01vZGVsJztcbmltcG9ydCBHYW1lTG9nb1ZpZXcgZnJvbSAnLi9HYW1lTG9nb1ZpZXcnO1xuaW1wb3J0IHsgUG9wVmlld1BhcmFtcyB9IGZyb20gJy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZGVmaW5lL0MyRlVJRGVmJztcbmltcG9ydCB7IEVudHJhbmNlVUkgfSBmcm9tICcuLi9FbnRyYW5jZVZpZXcnO1xuaW1wb3J0IHsgR2FtZUhlbHBlciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdC9nYW1lL0dhbWVIZWxwZXInO1xuaW1wb3J0IHsgR2FtZUNvbnN0cyB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdC9nYW1lL0dhbWVDb25zdHMnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTG9nbyBleHRlbmRzIFVJVkNvbnRyb2xCYXNlIHtcbiAgICAvKiog6aKE5Yi25ZCNIOe7meWunuS+i+iwg+eUqCAqL1xuICAgIHB1YmxpYyBwcmVmYWJOYW1lID0gJ0dhbWVMb2dvJztcblxuICAgIHB1YmxpYyBtb2RlbDogR2FtZUxvZ29Nb2RlbCA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgdmlldzogR2FtZUxvZ29WaWV3ID0gdW5kZWZpbmVkO1xuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIGlmIChzdXBlci5vbkVuYWJsZSkge1xuICAgICAgICAgICAgc3VwZXIub25FbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uKEMyRkVudW0uVUlFdmVudC5CdXR0b25DbGljaywgdGhpcy5vbkJ1dHRvbkNsaWNrLCB0aGlzKTtcbiAgICB9XG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICBpZiAoc3VwZXIub25EaXNhYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uKEMyRkVudW0uVUlFdmVudC5CdXR0b25DbGljaywgdGhpcy5vbkJ1dHRvbkNsaWNrLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9uQnV0dG9uQ2xpY2soZXZlbnRUeXBlOiBzdHJpbmcsIGNvbXBvbmVudDogY2MuQnV0dG9uKSB7XG4gICAgICAgIHN3aXRjaCAoY29tcG9uZW50Lm5hbWUpIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25WaWV3T3BlbihwYXJhbTogYW55KSB7XG5cbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIGlmIChzdXBlci5vbkxvYWQpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuICAgICAgICB9XG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgIH1cbiAgICBwcml2YXRlIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5pbml0TGFuZ3VhZ2UoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRMYW5ndWFnZSgpIHtcbiAgICAgICAgYzJmLmxhbmd1YWdlLmluaXRMYW5ndWFnZSh0aGlzLnBsYXlMb2dvQW5pbWEuYmluZCh0aGlzKSk7XG4gICAgICAgIHN6Zy5wbGF5ZXIuaW5pdE1vZHVsZXMoKVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBwbGF5TG9nb0FuaW1hKCkge1xuICAgICAgICB0aGlzLnZpZXcuYmFyUHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSAwLjFcbiAgICAgICAgY2MudHdlZW4odGhpcy52aWV3LmJhclByb2dyZXNzQmFyKS50bygwLjMsIHsgcHJvZ3Jlc3M6IDEgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9wZW5Mb2dpblZpZXcoKVxuICAgICAgICB9KS5zdGFydCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvcGVuTG9naW5WaWV3KCkge1xuICAgICAgICBsZXQgdWljOiBQb3BWaWV3UGFyYW1zID0ge1xuICAgICAgICAgICAgb25VSUFkZGVkOiAobm9kZTogY2MuTm9kZSwgcGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjMmYuZ3VpLnJlbW92ZShFbnRyYW5jZVVJLkdhbWVMb2dvKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICAgYzJmLmd1aS5vcGVuKEVudHJhbmNlVUkuR2FtZUxvZ2luLCBudWxsLCB1aWMpO1xuICAgICAgICAvLyBHYW1lSGVscGVyLmxvYWRCdW5kbGUoR2FtZUNvbnN0cy5CdW5kbGUubWFpblBhY2spLnRoZW4oVUlJRCA9PiB7XG4gICAgICAgIC8vICAgICBjMmYuZ3VpLm9wZW4oVUlJRC5EZXNTdGFyTWFpbiwgbnVsbCwgdWljKVxuICAgICAgICAvLyB9KTtcblxuXG4gICAgfVxuXG59Il19