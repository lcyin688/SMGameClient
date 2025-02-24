
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/gui/layer/LayerEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ca728WVG9D6LwoitQVkul0', 'LayerEffect');
// c2f-framework/gui/layer/LayerEffect.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerEffect = void 0;
var LayerUI_1 = require("./LayerUI");
var WaterWaveScreen_1 = require("../../component/common/WaterWaveScreen");
var PrefabPath;
(function (PrefabPath) {
    PrefabPath["touchEfx"] = "commonRes/prefab/TouchEffect";
})(PrefabPath || (PrefabPath = {}));
/*
 * 点击特效层
 */
var LayerEffect = /** @class */ (function (_super) {
    __extends(LayerEffect, _super);
    function LayerEffect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** 屏幕水波纹特效 */
    LayerEffect.prototype.addWaterWaveEfx = function (dur) {
        var nodeName = 'waterWave';
        var exist = this.getChildByName(nodeName);
        if (exist) {
            var waveComp = exist.getComponent(WaterWaveScreen_1.default);
            if (waveComp) {
                waveComp.setDuration(dur);
            }
        }
        else {
            var waveNode = new cc.Node('waterWave');
            this.addChild(waveNode);
            var waveComp = waveNode.addComponent(WaterWaveScreen_1.default);
            if (waveComp) {
                waveComp.setDuration(dur);
            }
        }
    };
    return LayerEffect;
}(LayerUI_1.LayerUI));
exports.LayerEffect = LayerEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9MYXllckVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQW9DO0FBQ3BDLDBFQUFxRTtBQUVyRSxJQUFLLFVBRUo7QUFGRCxXQUFLLFVBQVU7SUFDWCx1REFBeUMsQ0FBQTtBQUM3QyxDQUFDLEVBRkksVUFBVSxLQUFWLFVBQVUsUUFFZDtBQUVEOztHQUVHO0FBQ0g7SUFBaUMsK0JBQU87SUFBeEM7O0lBbUJBLENBQUM7SUFsQkcsY0FBYztJQUNQLHFDQUFlLEdBQXRCLFVBQXVCLEdBQVc7UUFDOUIsSUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFBO1FBQzVCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsSUFBSSxLQUFLLEVBQUU7WUFDUCxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLHlCQUFlLENBQUMsQ0FBQztZQUNuRCxJQUFJLFFBQVEsRUFBRTtnQkFDVixRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzdCO1NBQ0o7YUFBTTtZQUNILElBQUksUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hCLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMseUJBQWUsQ0FBQyxDQUFDO1lBQ3RELElBQUksUUFBUSxFQUFFO2dCQUNWLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDN0I7U0FDSjtJQUNMLENBQUM7SUFDTCxrQkFBQztBQUFELENBbkJBLEFBbUJDLENBbkJnQyxpQkFBTyxHQW1CdkM7QUFuQlksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXllclVJIH0gZnJvbSBcIi4vTGF5ZXJVSVwiO1xuaW1wb3J0IFdhdGVyV2F2ZVNjcmVlbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50L2NvbW1vbi9XYXRlcldhdmVTY3JlZW5cIjtcblxuZW51bSBQcmVmYWJQYXRoIHtcbiAgICB0b3VjaEVmeCA9ICdjb21tb25SZXMvcHJlZmFiL1RvdWNoRWZmZWN0Jyxcbn1cblxuLypcbiAqIOeCueWHu+eJueaViOWxglxuICovXG5leHBvcnQgY2xhc3MgTGF5ZXJFZmZlY3QgZXh0ZW5kcyBMYXllclVJIHtcbiAgICAvKiog5bGP5bmV5rC05rOi57q554m55pWIICovXG4gICAgcHVibGljIGFkZFdhdGVyV2F2ZUVmeChkdXI6IG51bWJlcikge1xuICAgICAgICBjb25zdCBub2RlTmFtZSA9ICd3YXRlcldhdmUnXG4gICAgICAgIGxldCBleGlzdCA9IHRoaXMuZ2V0Q2hpbGRCeU5hbWUobm9kZU5hbWUpO1xuICAgICAgICBpZiAoZXhpc3QpIHtcbiAgICAgICAgICAgIGxldCB3YXZlQ29tcCA9IGV4aXN0LmdldENvbXBvbmVudChXYXRlcldhdmVTY3JlZW4pO1xuICAgICAgICAgICAgaWYgKHdhdmVDb21wKSB7XG4gICAgICAgICAgICAgICAgd2F2ZUNvbXAuc2V0RHVyYXRpb24oZHVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB3YXZlTm9kZSA9IG5ldyBjYy5Ob2RlKCd3YXRlcldhdmUnKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQod2F2ZU5vZGUpO1xuICAgICAgICAgICAgbGV0IHdhdmVDb21wID0gd2F2ZU5vZGUuYWRkQ29tcG9uZW50KFdhdGVyV2F2ZVNjcmVlbik7XG4gICAgICAgICAgICBpZiAod2F2ZUNvbXApIHtcbiAgICAgICAgICAgICAgICB3YXZlQ29tcC5zZXREdXJhdGlvbihkdXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ==