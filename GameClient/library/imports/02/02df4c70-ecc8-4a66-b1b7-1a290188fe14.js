"use strict";
cc._RF.push(module, '02df4xw7MhKZrG3GikBiP4U', 'PublicData');
// entrance/script/game/plrBase/PublicData.ts

"use strict";
/** 公共数据·不好划分模块的都放这里 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicData = void 0;
var PublicData = /** @class */ (function () {
    function PublicData() {
        this.reset();
    }
    PublicData.prototype.reset = function () {
        this.isMouseDown = false;
    };
    return PublicData;
}());
exports.PublicData = PublicData;

cc._RF.pop();