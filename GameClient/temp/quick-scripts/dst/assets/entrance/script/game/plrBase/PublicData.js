
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/game/plrBase/PublicData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvZ2FtZS9wbHJCYXNlL1B1YmxpY0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVCQUF1Qjs7O0FBSXZCO0lBRUk7UUFDSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNNLDBCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBTUwsaUJBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIOWFrOWFseaVsOaNrsK35LiN5aW95YiS5YiG5qih5Z2X55qE6YO95pS+6L+Z6YeMICovXG5cbmltcG9ydCB7IEdhbWVDb25zdHMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L2dhbWUvR2FtZUNvbnN0c1wiO1xuXG5leHBvcnQgY2xhc3MgUHVibGljRGF0YSB7XG4gICAgcHVibGljIGlzTW91c2VEb3duOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuICAgIHB1YmxpYyByZXNldCgpIHtcbiAgICAgICAgdGhpcy5pc01vdXNlRG93biA9IGZhbHNlO1xuICAgIH1cblxuXG5cblxuXG59Il19