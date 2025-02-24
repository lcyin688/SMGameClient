
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/basketBall/Ball/BallModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5795fv915NHiZN1XFp1Qv/i', 'BallModel');
// mainPack/script/basketBall/Ball/BallModel.ts

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
var UIModelBase_1 = require("./../../../../c2f-framework/gui/layer/UIModelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BallModel = /** @class */ (function (_super) {
    __extends(BallModel, _super);
    function BallModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'P_Ball';
        return _this;
    }
    BallModel.prototype.initData = function (basket) {
        this.basket = basket;
        this.emitSpeed = 3000;
        this.gravity = 4500;
        this.scale = 0.6;
        this.showTime = 0.3;
        this.maxXSpeed = 5000;
    };
    BallModel = __decorate([
        ccclass
    ], BallModel);
    return BallModel;
}(UIModelBase_1.UIModelBase));
exports.default = BallModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvYmFza2V0QmFsbC9CYWxsL0JhbGxNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxpRkFBZ0Y7QUFFMUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBdUMsNkJBQVc7SUFBbEQ7UUFBQSxxRUF1Q0M7UUFyQ0csZ0JBQWdCO1FBQ1QsZ0JBQVUsR0FBRyxRQUFRLENBQUM7O0lBb0NqQyxDQUFDO0lBVlUsNEJBQVEsR0FBZixVQUFnQixNQUFzQjtRQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQTtRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQTtRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtJQUN6QixDQUFDO0lBcENnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBdUM3QjtJQUFELGdCQUFDO0NBdkNELEFBdUNDLENBdkNzQyx5QkFBVyxHQXVDakQ7a0JBdkNvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUNvbnN0cyB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdC9nYW1lL0dhbWVDb25zdHMnO1xuaW1wb3J0IEJhc2tldEJhbGxNYWluIGZyb20gJy4uL0Jhc2tldEJhbGxNYWluL0Jhc2tldEJhbGxNYWluJztcbmltcG9ydCB7IFVJTW9kZWxCYXNlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSU1vZGVsQmFzZSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbE1vZGVsIGV4dGVuZHMgVUlNb2RlbEJhc2Uge1xuXG4gICAgLyoqIOmihOWItuWQjSDnu5nlrp7kvovosIPnlKggKi9cbiAgICBwdWJsaWMgcHJlZmFiTmFtZSA9ICdQX0JhbGwnO1xuICAgIHB1YmxpYyBiZWdhbjogY2MuVmVjMjtcbiAgICBwdWJsaWMgZW5kZWQ6IGNjLlZlYzI7XG4gICAgLyoq5Y+R5bCE6YCf5bqmICovXG4gICAgcHVibGljIGVtaXRTcGVlZDogbnVtYmVyXG4gICAgLyoq6YeN5Yqb6YCf5bqmICovXG4gICAgcHVibGljIGdyYXZpdHk6IG51bWJlclxuICAgIC8qKiDnvKnmlL7ns7vmlbAqL1xuICAgIHB1YmxpYyBzY2FsZTogbnVtYmVyXG4gICAgLyoq55Sf5oiQ56+u55CD5pi+56S65Yqo55S75pe26Ze0ICovXG4gICAgcHVibGljIHNob3dUaW1lOiBudW1iZXJcbiAgICAvKirnkIPlvLnlipsgKi9cbiAgICBwdWJsaWMgbWF4WFNwZWVkOiBudW1iZXJcblxuICAgIHB1YmxpYyBzdGF0dXM6IEdhbWVDb25zdHMuVG91Y2hTdGF0dXM7XG4gICAgLy/lvZPliY3pgJ/luqZcbiAgICBwdWJsaWMgY3VycmVudFZlclNwZWVkOiBudW1iZXI7XG4gICAgcHVibGljIHRhcmdldDogY2MuVmVjMjtcbiAgICBwdWJsaWMgY3VycmVudEhvclNwZWVkOiBudW1iZXI7XG4gICAgcHVibGljIHNoYWRvdzogYW55O1xuICAgIHB1YmxpYyBiYWxsU3RhdHVzOiBHYW1lQ29uc3RzLkJhbGxTdGF0dXM7XG4gICAgcHVibGljIHZhbGlkOiBib29sZWFuO1xuXG4gICAgcHVibGljIGJhc2tldDogQmFza2V0QmFsbE1haW5cbiAgICBwdWJsaWMgaGl0SW46IGFueTtcblxuICAgIHB1YmxpYyBpbml0RGF0YShiYXNrZXQ6IEJhc2tldEJhbGxNYWluKSB7XG4gICAgICAgIHRoaXMuYmFza2V0ID0gYmFza2V0XG4gICAgICAgIHRoaXMuZW1pdFNwZWVkID0gMzAwMFxuICAgICAgICB0aGlzLmdyYXZpdHkgPSA0NTAwXG4gICAgICAgIHRoaXMuc2NhbGUgPSAwLjZcbiAgICAgICAgdGhpcy5zaG93VGltZSA9IDAuM1xuICAgICAgICB0aGlzLm1heFhTcGVlZCA9IDUwMDBcbiAgICB9XG5cblxufSJdfQ==