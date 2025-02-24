"use strict";
cc._RF.push(module, '6cfb1dMwKZBP5VD30Lf66af', 'UISpine');
// entrance/script/common/UISpine.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, menu = _a.menu;
var UISpine = /** @class */ (function (_super) {
    __extends(UISpine, _super);
    function UISpine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.completeHandler = null;
        _this.eventHandler = null;
        return _this;
    }
    UISpine.prototype.setListenerCb = function (completeCb, eventCb) {
        this.completeHandler = completeCb;
        this.eventHandler = eventCb;
    };
    UISpine.prototype.onLoad = function () {
        var _this = this;
        var spine = this.node.getComponent(sp.Skeleton);
        if (!spine) {
            return;
        }
        spine.setEventListener(function (entry, event) {
            if (typeof event == 'number') {
                return;
            }
            var eventName = event.data.name;
            if (eventName == 'sound') {
                // UIHelper.playEffect(event.stringValue);
            }
            _this.eventHandler && _this.eventHandler(entry, event);
        });
        spine.setCompleteListener(function (data) {
            _this.completeHandler && _this.completeHandler(data);
        });
    };
    UISpine = __decorate([
        ccclass,
        requireComponent(sp.Skeleton)
    ], UISpine);
    return UISpine;
}(cc.Component));
exports.default = UISpine;

cc._RF.pop();