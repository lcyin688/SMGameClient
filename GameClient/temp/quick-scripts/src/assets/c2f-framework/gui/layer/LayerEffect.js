"use strict";
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