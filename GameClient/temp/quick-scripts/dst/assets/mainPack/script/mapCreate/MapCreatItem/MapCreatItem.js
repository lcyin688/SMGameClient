
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/mapCreate/MapCreatItem/MapCreatItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4fa5fomuLlC07MiBMz3or01', 'MapCreatItem');
// mainPack/script/mapCreate/MapCreatItem/MapCreatItem.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MapCreatItem = /** @class */ (function (_super) {
    __extends(MapCreatItem, _super);
    function MapCreatItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'P_MapCreatItem';
        _this.model = undefined;
        _this.view = undefined;
        return _this;
    }
    MapCreatItem.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.on(C2FEnum_1.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    };
    MapCreatItem.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.off(C2FEnum_1.C2FEnum.UIEvent.ButtonClick);
    };
    MapCreatItem.prototype.onLoad = function () {
        // 添加鼠标移动事件监听器
        this.node.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
    };
    MapCreatItem.prototype.onButtonClick = function (eventType, component) {
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
    MapCreatItem.prototype.CC_onClickbtn = function () {
        if (this.model.data && this.model.data.cbFun) {
            this.model.data.cbFun(this.model.data);
        }
    };
    MapCreatItem.prototype.setInit = function (data) {
        this.model.initData(data);
        this.initView(data);
    };
    MapCreatItem.prototype.initView = function (data) {
        if (data.typ >= 0) {
            this.node.active = true;
            c2f.utils.view.changeSpriteFrame(this.view.iconSprite, data.url);
        }
        else {
            this.node.active = false;
        }
    };
    // 鼠标移动事件处理器
    MapCreatItem.prototype.onMouseMove = function (event) {
        if (szg.player.public.isMouseDown) {
            this.CC_onClickbtn();
        }
    };
    MapCreatItem = __decorate([
        ccclass
    ], MapCreatItem);
    return MapCreatItem;
}(UIPControlBase_1.UIPControlBase));
exports.default = MapCreatItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvbWFwQ3JlYXRlL01hcENyZWF0SXRlbS9NYXBDcmVhdEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUZBQXNGO0FBQ3RGLHNFQUFxRTtBQUsvRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUEwQyxnQ0FBYztJQUF4RDtRQUFBLHFFQXFFQztRQXBFRyxnQkFBZ0I7UUFDVCxnQkFBVSxHQUFHLGdCQUFnQixDQUFDO1FBRTlCLFdBQUssR0FBc0IsU0FBUyxDQUFDO1FBQ3JDLFVBQUksR0FBcUIsU0FBUyxDQUFDOztJQWdFOUMsQ0FBQztJQTdEYSwrQkFBUSxHQUFsQjtRQUNJLElBQUksaUJBQU0sUUFBUSxFQUFFO1lBQ2hCLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRVMsZ0NBQVMsR0FBbkI7UUFDSSxJQUFJLGlCQUFNLFNBQVMsRUFBRTtZQUNqQixpQkFBTSxTQUFTLFdBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVTLDZCQUFNLEdBQWhCO1FBQ0ksY0FBYztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFYSxvQ0FBYSxHQUEzQixVQUE0QixTQUFpQixFQUFFLFNBQW9COzs7Z0JBQy9ELFFBQVEsU0FBUyxDQUFDLElBQUksRUFBRTtvQkFFcEIsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJO3dCQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7d0JBQ3JCLE1BQU07b0JBRVY7d0JBQ0ksTUFBTTtpQkFDYjs7OztLQUNKO0lBR08sb0NBQWEsR0FBckI7UUFDSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUN6QztJQUNMLENBQUM7SUFFTSw4QkFBTyxHQUFkLFVBQWUsSUFBMEI7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN2QixDQUFDO0lBRU0sK0JBQVEsR0FBZixVQUFnQixJQUEwQjtRQUN0QyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQ3ZCLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUNuRTthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1NBQzNCO0lBQ0wsQ0FBQztJQUdELFlBQVk7SUFDWixrQ0FBVyxHQUFYLFVBQVksS0FBSztRQUNiLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtTQUN2QjtJQUNMLENBQUM7SUFsRWdCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FxRWhDO0lBQUQsbUJBQUM7Q0FyRUQsQUFxRUMsQ0FyRXlDLCtCQUFjLEdBcUV2RDtrQkFyRW9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVSVBDb250cm9sQmFzZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vYzJmLWZyYW1ld29yay9ndWkvbGF5ZXIvVUlQQ29udHJvbEJhc2UnO1xuaW1wb3J0IHsgQzJGRW51bSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vYzJmLWZyYW1ld29yay9kZWZpbmUvQzJGRW51bSc7XG5pbXBvcnQgTWFwQ3JlYXRJdGVtTW9kZWwgZnJvbSAnLi9NYXBDcmVhdEl0ZW1Nb2RlbCc7XG5pbXBvcnQgTWFwQ3JlYXRJdGVtVmlldyBmcm9tICcuL01hcENyZWF0SXRlbVZpZXcnO1xuaW1wb3J0IHsgVUlQYSB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdC9nYW1lL1VJUGFyYW0nO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcENyZWF0SXRlbSBleHRlbmRzIFVJUENvbnRyb2xCYXNlIHtcbiAgICAvKiog6aKE5Yi25ZCNIOe7meWunuS+i+iwg+eUqCAqL1xuICAgIHB1YmxpYyBwcmVmYWJOYW1lID0gJ1BfTWFwQ3JlYXRJdGVtJztcblxuICAgIHB1YmxpYyBtb2RlbDogTWFwQ3JlYXRJdGVtTW9kZWwgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIHZpZXc6IE1hcENyZWF0SXRlbVZpZXcgPSB1bmRlZmluZWQ7XG5cblxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHN1cGVyLm9uRW5hYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub24oQzJGRW51bS5VSUV2ZW50LkJ1dHRvbkNsaWNrLCB0aGlzLm9uQnV0dG9uQ2xpY2ssIHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKTogdm9pZCB7XG4gICAgICAgIGlmIChzdXBlci5vbkRpc2FibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2ZmKEMyRkVudW0uVUlFdmVudC5CdXR0b25DbGljayk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgLy8g5re75Yqg6byg5qCH56e75Yqo5LqL5Lu255uR5ZCs5ZmoXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9NT1ZFLCB0aGlzLm9uTW91c2VNb3ZlLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9uQnV0dG9uQ2xpY2soZXZlbnRUeXBlOiBzdHJpbmcsIGNvbXBvbmVudDogY2MuQnV0dG9uKSB7XG4gICAgICAgIHN3aXRjaCAoY29tcG9uZW50Lm5hbWUpIHtcblxuICAgICAgICAgICAgY2FzZSB0aGlzLnZpZXcuYnRuQnV0dG9uLm5hbWU6XG4gICAgICAgICAgICAgICAgdGhpcy5DQ19vbkNsaWNrYnRuKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHByaXZhdGUgQ0Nfb25DbGlja2J0bigpIHtcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuZGF0YSAmJiB0aGlzLm1vZGVsLmRhdGEuY2JGdW4pIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZGF0YS5jYkZ1bih0aGlzLm1vZGVsLmRhdGEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SW5pdChkYXRhOiBVSVBhLkRlc1N0YXJJdGVtQXJncykge1xuICAgICAgICB0aGlzLm1vZGVsLmluaXREYXRhKGRhdGEpXG4gICAgICAgIHRoaXMuaW5pdFZpZXcoZGF0YSlcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdFZpZXcoZGF0YTogVUlQYS5EZXNTdGFySXRlbUFyZ3MpIHtcbiAgICAgICAgaWYgKGRhdGEudHlwID49IDApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICBjMmYudXRpbHMudmlldy5jaGFuZ2VTcHJpdGVGcmFtZSh0aGlzLnZpZXcuaWNvblNwcml0ZSwgZGF0YS51cmwpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8g6byg5qCH56e75Yqo5LqL5Lu25aSE55CG5ZmoXG4gICAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKHN6Zy5wbGF5ZXIucHVibGljLmlzTW91c2VEb3duKSB7XG4gICAgICAgICAgICB0aGlzLkNDX29uQ2xpY2tidG4oKVxuICAgICAgICB9XG4gICAgfVxuXG5cbn0iXX0=