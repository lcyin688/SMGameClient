
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/SoundSet/SoundSet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e94e1wP+4RLGoD2tlD5z1+N', 'SoundSet');
// entrance/script/SoundSet/SoundSet.ts

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
var UIHelper_1 = require("../../../Script/game/UIHelper");
var GameConsts_1 = require("../../../Script/game/GameConsts");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SoundSet = /** @class */ (function (_super) {
    __extends(SoundSet, _super);
    function SoundSet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'V_SoundSet';
        _this.model = undefined;
        _this.view = undefined;
        return _this;
    }
    SoundSet.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.on(C2FEnum_1.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    };
    SoundSet.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.off(C2FEnum_1.C2FEnum.UIEvent.ButtonClick);
    };
    SoundSet.prototype.onButtonClick = function (eventType, component) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (component.name) {
                    case this.view.soundBgButton.name:
                        this.CC_onClicksoundBg();
                        break;
                    case this.view.soundEffButton.name:
                        this.CC_onClicksoundEff();
                        break;
                    case this.view.btnCloseButton.name:
                        this.CC_onClickbtnClose();
                        break;
                    default:
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    SoundSet.prototype.CC_onClickbtnClose = function () {
        UIHelper_1.UIHelper.playEffect('betClick');
        this.closeView();
    };
    SoundSet.prototype.onViewOpen = function (param) {
        var soundEffCloseState = c2f.storage.getBoolean(GameConsts_1.GameConsts.StorageKey.soundEff);
        var soundBgCloseState = c2f.storage.getBoolean(GameConsts_1.GameConsts.StorageKey.soundBg);
        this.setSoundBgState(soundBgCloseState);
        this.setSoundEffState(soundEffCloseState);
    };
    SoundSet.prototype.setSoundBgState = function (state) {
        var url = state ? GameConsts_1.GameConsts.ResUrl.entrance + "btn_shengyin2" : GameConsts_1.GameConsts.ResUrl.entrance + "btn_shengyin1";
        c2f.utils.view.changeSpriteFrame(this.view.soundBgSprite, url);
        c2f.audio.bgmOff = state;
    };
    SoundSet.prototype.setSoundEffState = function (state) {
        var url = state ? GameConsts_1.GameConsts.ResUrl.entrance + "btn_shengyin2" : GameConsts_1.GameConsts.ResUrl.entrance + "btn_shengyin1";
        c2f.utils.view.changeSpriteFrame(this.view.soundEffSprite, url);
        c2f.audio.sfxOff = state;
    };
    SoundSet.prototype.CC_onClicksoundBg = function () {
        UIHelper_1.UIHelper.playEffect("betClick");
        var state = c2f.storage.getBoolean(GameConsts_1.GameConsts.StorageKey.soundBg);
        this.setSoundBgState(!state);
        c2f.storage.set(GameConsts_1.GameConsts.StorageKey.soundBg, !state);
    };
    SoundSet.prototype.CC_onClicksoundEff = function () {
        UIHelper_1.UIHelper.playEffect("betClick");
        var state = c2f.storage.getBoolean(GameConsts_1.GameConsts.StorageKey.soundEff);
        this.setSoundEffState(!state);
        c2f.storage.set(GameConsts_1.GameConsts.StorageKey.soundEff, !state);
    };
    SoundSet = __decorate([
        ccclass
    ], SoundSet);
    return SoundSet;
}(UIVControlBase_1.UIVControlBase));
exports.default = SoundSet;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvU291bmRTZXQvU291bmRTZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0ZBQW1GO0FBQ25GLG1FQUFrRTtBQUdsRSwwREFBeUQ7QUFDekQsOERBQTZEO0FBRXZELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXNDLDRCQUFjO0lBQXBEO1FBQUEscUVBdUZDO1FBdEZHLGdCQUFnQjtRQUNULGdCQUFVLEdBQUcsWUFBWSxDQUFDO1FBRTFCLFdBQUssR0FBa0IsU0FBUyxDQUFDO1FBQ2pDLFVBQUksR0FBaUIsU0FBUyxDQUFDOztJQWtGMUMsQ0FBQztJQWhGYSwyQkFBUSxHQUFsQjtRQUNJLElBQUksaUJBQU0sUUFBUSxFQUFFO1lBQ2hCLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRVMsNEJBQVMsR0FBbkI7UUFDSSxJQUFJLGlCQUFNLFNBQVMsRUFBRTtZQUNqQixpQkFBTSxTQUFTLFdBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVhLGdDQUFhLEdBQTNCLFVBQTRCLFNBQWlCLEVBQUUsU0FBb0I7OztnQkFDL0QsUUFBUSxTQUFTLENBQUMsSUFBSSxFQUFFO29CQUVwQixLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUk7d0JBQzdCLElBQUksQ0FBQyxpQkFBaUIs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VSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRzVELENBQUM7SUFyRmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F1RjVCO0lBQUQsZUFBQztDQXZGRCxBQXVGQyxDQXZGcUMsK0JBQWMsR0F1Rm5EO2tCQXZGb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVJVkNvbnRyb2xCYXNlIH0gZnJvbSAnLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSVZDb250cm9sQmFzZSc7XG5pbXBvcnQgeyBDMkZFbnVtIH0gZnJvbSAnLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2RlZmluZS9DMkZFbnVtJztcbmltcG9ydCBTb3VuZFNldE1vZGVsIGZyb20gJy4vU291bmRTZXRNb2RlbCc7XG5pbXBvcnQgU291bmRTZXRWaWV3IGZyb20gJy4vU291bmRTZXRWaWV3JztcbmltcG9ydCB7IFVJSGVscGVyIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0L2dhbWUvVUlIZWxwZXInO1xuaW1wb3J0IHsgR2FtZUNvbnN0cyB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdC9nYW1lL0dhbWVDb25zdHMnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kU2V0IGV4dGVuZHMgVUlWQ29udHJvbEJhc2Uge1xuICAgIC8qKiDpooTliLblkI0g57uZ5a6e5L6L6LCD55SoICovXG4gICAgcHVibGljIHByZWZhYk5hbWUgPSAnVl9Tb3VuZFNldCc7XG5cbiAgICBwdWJsaWMgbW9kZWw6IFNvdW5kU2V0TW9kZWwgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIHZpZXc6IFNvdW5kU2V0VmlldyA9IHVuZGVmaW5lZDtcblxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHN1cGVyLm9uRW5hYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub24oQzJGRW51bS5VSUV2ZW50LkJ1dHRvbkNsaWNrLCB0aGlzLm9uQnV0dG9uQ2xpY2ssIHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKTogdm9pZCB7XG4gICAgICAgIGlmIChzdXBlci5vbkRpc2FibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2ZmKEMyRkVudW0uVUlFdmVudC5CdXR0b25DbGljayk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBvbkJ1dHRvbkNsaWNrKGV2ZW50VHlwZTogc3RyaW5nLCBjb21wb25lbnQ6IGNjLkJ1dHRvbikge1xuICAgICAgICBzd2l0Y2ggKGNvbXBvbmVudC5uYW1lKSB7XG5cbiAgICAgICAgICAgIGNhc2UgdGhpcy52aWV3LnNvdW5kQmdCdXR0b24ubmFtZTpcbiAgICAgICAgICAgICAgICB0aGlzLkNDX29uQ2xpY2tzb3VuZEJnKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgdGhpcy52aWV3LnNvdW5kRWZmQnV0dG9uLm5hbWU6XG4gICAgICAgICAgICAgICAgdGhpcy5DQ19vbkNsaWNrc291bmRFZmYoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuXG4gICAgICAgICAgICBjYXNlIHRoaXMudmlldy5idG5DbG9zZUJ1dHRvbi5uYW1lOlxuICAgICAgICAgICAgICAgIHRoaXMuQ0Nfb25DbGlja2J0bkNsb3NlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIENDX29uQ2xpY2tidG5DbG9zZSgpIHtcbiAgICAgICAgVUlIZWxwZXIucGxheUVmZmVjdCgnYmV0Q2xpY2snKTtcbiAgICAgICAgdGhpcy5jbG9zZVZpZXcoKTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBvblZpZXdPcGVuKHBhcmFtOiBhbnkpIHtcbiAgICAgICAgbGV0IHNvdW5kRWZmQ2xvc2VTdGF0ZSA9IGMyZi5zdG9yYWdlLmdldEJvb2xlYW4oR2FtZUNvbnN0cy5TdG9yYWdlS2V5LnNvdW5kRWZmKVxuICAgICAgICBsZXQgc291bmRCZ0Nsb3NlU3RhdGUgPSBjMmYuc3RvcmFnZS5nZXRCb29sZWFuKEdhbWVDb25zdHMuU3RvcmFnZUtleS5zb3VuZEJnKVxuICAgICAgICB0aGlzLnNldFNvdW5kQmdTdGF0ZShzb3VuZEJnQ2xvc2VTdGF0ZSlcbiAgICAgICAgdGhpcy5zZXRTb3VuZEVmZlN0YXRlKHNvdW5kRWZmQ2xvc2VTdGF0ZSlcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFNvdW5kQmdTdGF0ZShzdGF0ZTogYm9vbGVhbikge1xuICAgICAgICBsZXQgdXJsID0gc3RhdGUgPyBHYW1lQ29uc3RzLlJlc1VybC5lbnRyYW5jZSArIFwiYnRuX3NoZW5neWluMlwiIDogR2FtZUNvbnN0cy5SZXNVcmwuZW50cmFuY2UgKyBcImJ0bl9zaGVuZ3lpbjFcIlxuICAgICAgICBjMmYudXRpbHMudmlldy5jaGFuZ2VTcHJpdGVGcmFtZSh0aGlzLnZpZXcuc291bmRCZ1Nwcml0ZSwgdXJsKVxuICAgICAgICBjMmYuYXVkaW8uYmdtT2ZmID0gc3RhdGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRTb3VuZEVmZlN0YXRlKHN0YXRlOiBib29sZWFuKSB7XG4gICAgICAgIGxldCB1cmwgPSBzdGF0ZSA/IEdhbWVDb25zdHMuUmVzVXJsLmVudHJhbmNlICsgXCJidG5fc2hlbmd5aW4yXCIgOiBHYW1lQ29uc3RzLlJlc1VybC5lbnRyYW5jZSArIFwiYnRuX3NoZW5neWluMVwiXG4gICAgICAgIGMyZi51dGlscy52aWV3LmNoYW5nZVNwcml0ZUZyYW1lKHRoaXMudmlldy5zb3VuZEVmZlNwcml0ZSwgdXJsKVxuICAgICAgICBjMmYuYXVkaW8uc2Z4T2ZmID0gc3RhdGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBDQ19vbkNsaWNrc291bmRCZygpIHtcbiAgICAgICAgVUlIZWxwZXIucGxheUVmZmVjdChcImJldENsaWNrXCIpXG4gICAgICAgIGxldCBzdGF0ZSA9IGMyZi5zdG9yYWdlLmdldEJvb2xlYW4oR2FtZUNvbnN0cy5TdG9yYWdlS2V5LnNvdW5kQmcpXG4gICAgICAgIHRoaXMuc2V0U291bmRCZ1N0YXRlKCFzdGF0ZSlcbiAgICAgICAgYzJmLnN0b3JhZ2Uuc2V0KEdhbWVDb25zdHMuU3RvcmFnZUtleS5zb3VuZEJnLCAhc3RhdGUpO1xuXG5cblxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBDQ19vbkNsaWNrc291bmRFZmYoKSB7XG4gICAgICAgIFVJSGVscGVyLnBsYXlFZmZlY3QoXCJiZXRDbGlja1wiKVxuICAgICAgICBsZXQgc3RhdGUgPSBjMmYuc3RvcmFnZS5nZXRCb29sZWFuKEdhbWVDb25zdHMuU3RvcmFnZUtleS5zb3VuZEVmZilcbiAgICAgICAgdGhpcy5zZXRTb3VuZEVmZlN0YXRlKCFzdGF0ZSlcbiAgICAgICAgYzJmLnN0b3JhZ2Uuc2V0KEdhbWVDb25zdHMuU3RvcmFnZUtleS5zb3VuZEVmZiwgIXN0YXRlKTtcblxuXG4gICAgfVxuXG59Il19