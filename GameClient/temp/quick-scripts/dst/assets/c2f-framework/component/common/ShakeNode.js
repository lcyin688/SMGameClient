
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/common/ShakeNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f5b3aDExGZIKIoDy4pDmFyX', 'ShakeNode');
// c2f-framework/component/common/ShakeNode.ts

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
var C2FTween_1 = require("../../core/timer/C2FTween");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, disallowMultiple = _a.disallowMultiple;
/**
 * 节点振动
 */
var ShakeNode = /** @class */ (function (_super) {
    __extends(ShakeNode, _super);
    function ShakeNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.shakePower = 5;
        _this.shakeTime = 0.16;
        _this.timeScale = false;
        _this._tween = null;
        return _this;
    }
    /**
     * 振动
     * @param times 振动几个周期
     */
    ShakeNode.prototype.shake = function (times) {
        if (times === void 0) { times = 5; }
        if ((this._tween && this._tween.isPlaying()) || times <= 0 || this.shakePower <= 0 || this.shakeTime <= 0) {
            return;
        }
        var sv = cc.v2(0, this.shakePower);
        this.node.setPosition(sv);
        var xArr = [];
        var yArr = [];
        for (var i = 1; i <= 8; i++) {
            var v = sv.rotate(Math.PI / 4 * (i * 3));
            xArr.push(v.x);
            yArr.push(v.y);
        }
        this._tween = this.timeScale ? new C2FTween_1.C2FTween(this.node, C2FTween_1.SCALE_TWEEN) : new C2FTween_1.C2FTween(this.node);
        this._tween.to({ x: xArr, y: yArr }, this.shakeTime * 1000)
            .repeat(times)
            .start();
    };
    __decorate([
        property({ tooltip: CC_DEV && "振动幅度" })
    ], ShakeNode.prototype, "shakePower", void 0);
    __decorate([
        property({ tooltip: CC_DEV && "振动周期，单位：秒" })
    ], ShakeNode.prototype, "shakeTime", void 0);
    __decorate([
        property({
            tooltip: CC_DEV && "变化速度是否受到timeScale的影响"
        })
    ], ShakeNode.prototype, "timeScale", void 0);
    ShakeNode = __decorate([
        ccclass,
        disallowMultiple,
        menu("c2f/common/ShakeNode")
    ], ShakeNode);
    return ShakeNode;
}(cc.Component));
exports.default = ShakeNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9jb21tb24vU2hha2VOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFrRTtBQUU1RCxJQUFBLEtBQWdELEVBQUUsQ0FBQyxVQUFVLEVBQTNELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBQSxFQUFFLGdCQUFnQixzQkFBa0IsQ0FBQztBQUVwRTs7R0FFRztBQUlIO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBc0NDO1FBcENVLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBR3ZCLGVBQVMsR0FBVyxJQUFJLENBQUM7UUFLekIsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUUxQixZQUFNLEdBQXNCLElBQUksQ0FBQzs7SUEwQjdDLENBQUM7SUF4Qkc7OztPQUdHO0lBQ0kseUJBQUssR0FBWixVQUFhLEtBQWlCO1FBQWpCLHNCQUFBLEVBQUEsU0FBaUI7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUU7WUFDdkcsT0FBTztTQUNWO1FBRUQsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFCLElBQUksSUFBSSxHQUFhLEVBQUUsQ0FBQztRQUN4QixJQUFJLElBQUksR0FBYSxFQUFFLENBQUM7UUFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxtQkFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsc0JBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLG1CQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDdEQsTUFBTSxDQUFDLEtBQUssQ0FBQzthQUNiLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFuQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxJQUFJLE1BQU0sRUFBRSxDQUFDO2lEQUNWO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSxXQUFXLEVBQUUsQ0FBQztnREFDYjtJQUtoQztRQUhDLFFBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxNQUFNLElBQUksc0JBQXNCO1NBQzVDLENBQUM7Z0RBQ2dDO0lBVmpCLFNBQVM7UUFIN0IsT0FBTztRQUNQLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsc0JBQXNCLENBQUM7T0FDUixTQUFTLENBc0M3QjtJQUFELGdCQUFDO0NBdENELEFBc0NDLENBdENzQyxFQUFFLENBQUMsU0FBUyxHQXNDbEQ7a0JBdENvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0NBTEVfVFdFRU4sIEMyRlR3ZWVuIH0gZnJvbSBcIi4uLy4uL2NvcmUvdGltZXIvQzJGVHdlZW5cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgbWVudSwgZGlzYWxsb3dNdWx0aXBsZSB9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoqXG4gKiDoioLngrnmjK/liqhcbiAqL1xuQGNjY2xhc3NcbkBkaXNhbGxvd011bHRpcGxlXG5AbWVudShcImMyZi9jb21tb24vU2hha2VOb2RlXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFrZU5vZGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IENDX0RFViAmJiBcIuaMr+WKqOW5heW6plwiIH0pXG4gICAgcHVibGljIHNoYWtlUG93ZXI6IG51bWJlciA9IDU7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBDQ19ERVYgJiYgXCLmjK/liqjlkajmnJ/vvIzljZXkvY3vvJrnp5JcIiB9KVxuICAgIHB1YmxpYyBzaGFrZVRpbWU6IG51bWJlciA9IDAuMTY7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgXCLlj5jljJbpgJ/luqbmmK/lkKblj5fliLB0aW1lU2NhbGXnmoTlvbHlk41cIlxuICAgIH0pXG4gICAgcHVibGljIHRpbWVTY2FsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBfdHdlZW46IEMyRlR3ZWVuPGNjLk5vZGU+ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIOaMr+WKqFxuICAgICAqIEBwYXJhbSB0aW1lcyDmjK/liqjlh6DkuKrlkajmnJ9cbiAgICAgKi9cbiAgICBwdWJsaWMgc2hha2UodGltZXM6IG51bWJlciA9IDUpIHtcbiAgICAgICAgaWYgKCh0aGlzLl90d2VlbiAmJiB0aGlzLl90d2Vlbi5pc1BsYXlpbmcoKSkgfHwgdGltZXMgPD0gMCB8fCB0aGlzLnNoYWtlUG93ZXIgPD0gMCB8fCB0aGlzLnNoYWtlVGltZSA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3YgPSBjYy52MigwLCB0aGlzLnNoYWtlUG93ZXIpO1xuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oc3YpO1xuICAgICAgICBsZXQgeEFycjogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgbGV0IHlBcnI6IG51bWJlcltdID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHYgPSBzdi5yb3RhdGUoTWF0aC5QSSAvIDQgKiAoaSAqIDMpKTtcbiAgICAgICAgICAgIHhBcnIucHVzaCh2LngpO1xuICAgICAgICAgICAgeUFyci5wdXNoKHYueSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl90d2VlbiA9IHRoaXMudGltZVNjYWxlID8gbmV3IEMyRlR3ZWVuKHRoaXMubm9kZSwgU0NBTEVfVFdFRU4pIDogbmV3IEMyRlR3ZWVuKHRoaXMubm9kZSk7XG4gICAgICAgIHRoaXMuX3R3ZWVuLnRvKHsgeDogeEFyciwgeTogeUFyciB9LCB0aGlzLnNoYWtlVGltZSAqIDEwMDApXG4gICAgICAgICAgICAucmVwZWF0KHRpbWVzKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxufVxuIl19