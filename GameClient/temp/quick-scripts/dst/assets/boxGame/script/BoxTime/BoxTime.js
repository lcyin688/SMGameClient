
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/boxGame/script/BoxTime/BoxTime.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '54421FV0WNOR7agpmrnZ1AC', 'BoxTime');
// boxGame/script/BoxTime/BoxTime.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BoxTime = /** @class */ (function (_super) {
    __extends(BoxTime, _super);
    function BoxTime() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_BoxTime';
        _this.model = undefined;
        _this.view = undefined;
        return _this;
    }
    BoxTime.prototype.onViewOpen = function (param) {
    };
    BoxTime.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.on(C2FEnum_1.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    };
    BoxTime.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.off(C2FEnum_1.C2FEnum.UIEvent.ButtonClick);
    };
    BoxTime.prototype.onButtonClick = function (eventType, component) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (component.name) {
                    case this.view.btnCloseButton.name:
                        this.CC_onClickbtnClose();
                        break;
                    case this.view.btm_doubleButton.name:
                        this.CC_onClickbtm_double();
                        break;
                    default:
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    BoxTime.prototype.CC_onClickbtnClose = function () {
    };
    BoxTime.prototype.CC_onClickbtm_double = function () {
    };
    BoxTime = __decorate([
        ccclass
    ], BoxTime);
    return BoxTime;
}(UIVControlBase_1.UIVControlBase));
exports.default = BoxTime;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9ib3hHYW1lL3NjcmlwdC9Cb3hUaW1lL0JveFRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0ZBQW1GO0FBQ25GLG1FQUFrRTtBQUk1RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFxQywyQkFBYztJQUFuRDtRQUFBLHFFQWtEQztRQWpERyxnQkFBZ0I7UUFDVCxnQkFBVSxHQUFHLFdBQVcsQ0FBQztRQUV6QixXQUFLLEdBQWlCLFNBQVMsQ0FBQztRQUNoQyxVQUFJLEdBQWdCLFNBQVMsQ0FBQzs7SUE2Q3pDLENBQUM7SUEzQ2EsNEJBQVUsR0FBcEIsVUFBcUIsS0FBVTtJQUMvQixDQUFDO0lBR1MsMEJBQVEsR0FBbEI7UUFDSSxJQUFJLGlCQUFNLFFBQVEsRUFBRTtZQUNoQixpQkFBTSxRQUFRLFdBQUUsQ0FBQztTQUNwQjtRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVTLDJCQUFTLEdBQW5CO1FBQ0ksSUFBSSxpQkFBTSxTQUFTLEVBQUU7WUFDakIsaUJBQU0sU0FBUyxXQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFYSwrQkFBYSxHQUEzQixVQUE0QixTQUFpQixFQUFFLFNBQW9COzs7Z0JBQy9ELFFBQVEsU0FBUyxDQUFDLElBQUksRUFBQztvQkFFbkIsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJO3dCQUM5QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzt3QkFDMUIsTUFBTTtvQkFFVixLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSTt3QkFDaEMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7d0JBQzVCLE1BQU07b0JBRVY7d0JBQ0ksTUFBTTtpQkFDYjs7OztLQUNKO0lBRU8sb0NBQWtCLEdBQTFCO0lBRUEsQ0FBQztJQUVPLHNDQUFvQixHQUE1QjtJQUVBLENBQUM7SUEvQ2dCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FrRDNCO0lBQUQsY0FBQztDQWxERCxBQWtEQyxDQWxEb0MsK0JBQWMsR0FrRGxEO2tCQWxEb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVJVkNvbnRyb2xCYXNlIH0gZnJvbSAnLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSVZDb250cm9sQmFzZSc7XG5pbXBvcnQgeyBDMkZFbnVtIH0gZnJvbSAnLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2RlZmluZS9DMkZFbnVtJztcbmltcG9ydCAgQm94VGltZU1vZGVsIGZyb20gJy4vQm94VGltZU1vZGVsJztcbmltcG9ydCAgQm94VGltZVZpZXcgZnJvbSAnLi9Cb3hUaW1lVmlldyc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm94VGltZSBleHRlbmRzIFVJVkNvbnRyb2xCYXNlIHtcbiAgICAvKiog6aKE5Yi25ZCNIOe7meWunuS+i+iwg+eUqCAqL1xuICAgIHB1YmxpYyBwcmVmYWJOYW1lID0gJ0ZfQm94VGltZSc7XG5cbiAgICBwdWJsaWMgbW9kZWw6IEJveFRpbWVNb2RlbCA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgdmlldzogQm94VGltZVZpZXcgPSB1bmRlZmluZWQ7XG4gICAgXG4gICAgcHJvdGVjdGVkIG9uVmlld09wZW4ocGFyYW06IGFueSkge1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIG9uRW5hYmxlKCk6IHZvaWQge1xuICAgICAgICBpZiAoc3VwZXIub25FbmFibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbihDMkZFbnVtLlVJRXZlbnQuQnV0dG9uQ2xpY2ssIHRoaXMub25CdXR0b25DbGljaywgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGlzYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHN1cGVyLm9uRGlzYWJsZSkge1xuICAgICAgICAgICAgc3VwZXIub25EaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vZmYoQzJGRW51bS5VSUV2ZW50LkJ1dHRvbkNsaWNrKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9uQnV0dG9uQ2xpY2soZXZlbnRUeXBlOiBzdHJpbmcsIGNvbXBvbmVudDogY2MuQnV0dG9uKSB7XG4gICAgICAgIHN3aXRjaCAoY29tcG9uZW50Lm5hbWUpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlIHRoaXMudmlldy5idG5DbG9zZUJ1dHRvbi5uYW1lOlxuICAgICAgICAgICAgICAgIHRoaXMuQ0Nfb25DbGlja2J0bkNsb3NlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlIHRoaXMudmlldy5idG1fZG91YmxlQnV0dG9uLm5hbWU6XG4gICAgICAgICAgICAgICAgdGhpcy5DQ19vbkNsaWNrYnRtX2RvdWJsZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0gXG4gICAgXG4gICAgcHJpdmF0ZSBDQ19vbkNsaWNrYnRuQ2xvc2UoKXtcblxuICAgIH1cbiAgICAgICAgICAgIFxuICAgIHByaXZhdGUgQ0Nfb25DbGlja2J0bV9kb3VibGUoKXtcblxuICAgIH1cbiAgICAgICAgICAgIFxuXG59Il19