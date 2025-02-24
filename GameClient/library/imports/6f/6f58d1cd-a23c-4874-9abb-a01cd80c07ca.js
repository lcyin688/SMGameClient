"use strict";
cc._RF.push(module, '6f58dHNojxIdJq7oBzYDAfK', 'HackUtil');
// c2f-framework/utils/HackUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Hack帮助工具 */
var HackUtil = /** @class */ (function () {
    function HackUtil() {
    }
    /**
     * 设置游戏速度
     * @param speed 倍速：1为原始速度
     */
    HackUtil.setGameSpeed = function (speed) {
        cc.director['globalGameTimeScale'] = speed;
    };
    return HackUtil;
}());
c2f.utils.hack = HackUtil;

cc._RF.pop();