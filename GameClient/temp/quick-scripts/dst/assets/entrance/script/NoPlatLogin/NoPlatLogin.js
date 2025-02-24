
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/NoPlatLogin/NoPlatLogin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0d2b7WTfUNOQ7ARpl5Y6Asa', 'NoPlatLogin');
// entrance/script/NoPlatLogin/NoPlatLogin.ts

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
var NoPlatLogin = /** @class */ (function (_super) {
    __extends(NoPlatLogin, _super);
    function NoPlatLogin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'NoPlatLogin';
        _this.model = undefined;
        _this.view = undefined;
        _this.inputDt = null;
        return _this;
    }
    NoPlatLogin.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.on(C2FEnum_1.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    };
    NoPlatLogin.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.on(C2FEnum_1.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    };
    NoPlatLogin.prototype.onButtonClick = function (eventType, component) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (component.name) {
                    case this.view.loginButton.name:
                        this.CC_onClicklogin();
                        break;
                    default:
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    NoPlatLogin.prototype.CC_onClicklogin = function () {
        var accId = this.view.userIdEditBox.string.trim();
        if (accId.length <= 0) {
            c2f.gui.notifyTxt('account id is empty!');
            return;
        }
        this.model.accountId = accId;
        this.model.sdkFlag = this.view.platFlagEditBox.string.trim();
        this.model.payFlag = this.view.payFlagEditBox.string.trim();
        this.model.saveLoginInfo();
        if (this.inputDt) {
            this.inputDt.loginCb && this.inputDt.loginCb(this.model.accountId, this.model.sdkFlag, this.model.payFlag);
        }
        c2f.gui.remove(EntranceView_1.EntranceUI.NoPlatLogin);
    };
    NoPlatLogin.prototype.onViewOpen = function (param) {
        this.model.loadLastAccId();
        this.inputDt = param;
    };
    NoPlatLogin = __decorate([
        ccclass
    ], NoPlatLogin);
    return NoPlatLogin;
}(UIVControlBase_1.UIVControlBase));
exports.default = NoPlatLogin;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvTm9QbGF0TG9naW4vTm9QbGF0TG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0ZBQW1GO0FBQ25GLG1FQUFrRTtBQUdsRSxnREFBNkM7QUFNdkMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBeUMsK0JBQWM7SUFBdkQ7UUFBQSxxRUF3REM7UUF2REcsZ0JBQWdCO1FBQ1QsZ0JBQVUsR0FBRyxhQUFhLENBQUM7UUFFM0IsV0FBSyxHQUFxQixTQUFTLENBQUM7UUFDcEMsVUFBSSxHQUFvQixTQUFTLENBQUM7UUFFakMsYUFBTyxHQUFjLElBQUksQ0FBQzs7SUFpRHRDLENBQUM7SUEvQ0csOEJBQVEsR0FBUjtRQUNJLElBQUksaUJBQU0sUUFBUSxFQUFFO1lBQ2hCLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ0QsK0JBQVMsR0FBVDtRQUNJLElBQUksaUJBQU0sU0FBUyxFQUFFO1lBQ2pCLGlCQUFNLFNBQVMsV0FBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRWEsbUNBQWEsR0FBM0IsVUFBNEIsU0FBaUIsRUFBRSxTQUFvQjs7O2dCQUMvRCxRQUFRLFNBQVMsQ0FBQyxJQUFJLEVBQUU7b0JBRXBCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSTt3QkFDM0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO3dCQUN2QixNQUFNO29CQUVWO3dCQUNJLE1BQU07aUJBQ2I7Ozs7S0FDSjtJQUVPLHFDQUFlLEdBQXZCO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xELElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDbkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUMxQyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUU1RCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDN0c7UUFFRCxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyx5QkFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFUyxnQ0FBVSxHQUFwQixVQUFxQixLQUFVO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQXZEZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXdEL0I7SUFBRCxrQkFBQztDQXhERCxBQXdEQyxDQXhEd0MsK0JBQWMsR0F3RHREO2tCQXhEb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVJVkNvbnRyb2xCYXNlIH0gZnJvbSAnLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSVZDb250cm9sQmFzZSc7XG5pbXBvcnQgeyBDMkZFbnVtIH0gZnJvbSAnLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2RlZmluZS9DMkZFbnVtJztcbmltcG9ydCBOb1BsYXRMb2dpbk1vZGVsIGZyb20gJy4vTm9QbGF0TG9naW5Nb2RlbCc7XG5pbXBvcnQgTm9QbGF0TG9naW5WaWV3IGZyb20gJy4vTm9QbGF0TG9naW5WaWV3JztcbmltcG9ydCB7IEVudHJhbmNlVUkgfSBmcm9tICcuLi9FbnRyYW5jZVZpZXcnO1xuXG5pbnRlcmZhY2UgSW5wdXREYXRhIHtcbiAgICBsb2dpbkNiOiBGdW5jdGlvbjtcbn1cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb1BsYXRMb2dpbiBleHRlbmRzIFVJVkNvbnRyb2xCYXNlIHtcbiAgICAvKiog6aKE5Yi25ZCNIOe7meWunuS+i+iwg+eUqCAqL1xuICAgIHB1YmxpYyBwcmVmYWJOYW1lID0gJ05vUGxhdExvZ2luJztcblxuICAgIHB1YmxpYyBtb2RlbDogTm9QbGF0TG9naW5Nb2RlbCA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgdmlldzogTm9QbGF0TG9naW5WaWV3ID0gdW5kZWZpbmVkO1xuXG4gICAgcHJpdmF0ZSBpbnB1dER0OiBJbnB1dERhdGEgPSBudWxsO1xuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIGlmIChzdXBlci5vbkVuYWJsZSkge1xuICAgICAgICAgICAgc3VwZXIub25FbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uKEMyRkVudW0uVUlFdmVudC5CdXR0b25DbGljaywgdGhpcy5vbkJ1dHRvbkNsaWNrLCB0aGlzKTtcbiAgICB9XG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICBpZiAoc3VwZXIub25EaXNhYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uKEMyRkVudW0uVUlFdmVudC5CdXR0b25DbGljaywgdGhpcy5vbkJ1dHRvbkNsaWNrLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9uQnV0dG9uQ2xpY2soZXZlbnRUeXBlOiBzdHJpbmcsIGNvbXBvbmVudDogY2MuQnV0dG9uKSB7XG4gICAgICAgIHN3aXRjaCAoY29tcG9uZW50Lm5hbWUpIHtcblxuICAgICAgICAgICAgY2FzZSB0aGlzLnZpZXcubG9naW5CdXR0b24ubmFtZTpcbiAgICAgICAgICAgICAgICB0aGlzLkNDX29uQ2xpY2tsb2dpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBDQ19vbkNsaWNrbG9naW4oKSB7XG4gICAgICAgIGxldCBhY2NJZCA9IHRoaXMudmlldy51c2VySWRFZGl0Qm94LnN0cmluZy50cmltKCk7XG4gICAgICAgIGlmIChhY2NJZC5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgYzJmLmd1aS5ub3RpZnlUeHQoJ2FjY291bnQgaWQgaXMgZW1wdHkhJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb2RlbC5hY2NvdW50SWQgPSBhY2NJZDtcbiAgICAgICAgdGhpcy5tb2RlbC5zZGtGbGFnID0gdGhpcy52aWV3LnBsYXRGbGFnRWRpdEJveC5zdHJpbmcudHJpbSgpO1xuICAgICAgICB0aGlzLm1vZGVsLnBheUZsYWcgPSB0aGlzLnZpZXcucGF5RmxhZ0VkaXRCb3guc3RyaW5nLnRyaW0oKTtcblxuICAgICAgICB0aGlzLm1vZGVsLnNhdmVMb2dpbkluZm8oKTtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXREdCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dER0LmxvZ2luQ2IgJiYgdGhpcy5pbnB1dER0LmxvZ2luQ2IodGhpcy5tb2RlbC5hY2NvdW50SWQsIHRoaXMubW9kZWwuc2RrRmxhZywgdGhpcy5tb2RlbC5wYXlGbGFnKVxuICAgICAgICB9XG5cbiAgICAgICAgYzJmLmd1aS5yZW1vdmUoRW50cmFuY2VVSS5Ob1BsYXRMb2dpbik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uVmlld09wZW4ocGFyYW06IGFueSkge1xuICAgICAgICB0aGlzLm1vZGVsLmxvYWRMYXN0QWNjSWQoKTtcbiAgICAgICAgdGhpcy5pbnB1dER0ID0gcGFyYW07XG4gICAgfVxufSJdfQ==