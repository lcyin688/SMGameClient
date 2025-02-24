
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/utils/HackUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL3V0aWxzL0hhY2tVdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZUFBZTtBQUNmO0lBQUE7SUFRQSxDQUFDO0lBUEc7OztPQUdHO0lBQ0kscUJBQVksR0FBbkIsVUFBb0IsS0FBYTtRQUM3QixFQUFFLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQy9DLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFPRCxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKiogSGFja+W4ruWKqeW3peWFtyAqL1xuY2xhc3MgSGFja1V0aWwge1xuICAgIC8qKlxuICAgICAqIOiuvue9rua4uOaIj+mAn+W6plxuICAgICAqIEBwYXJhbSBzcGVlZCDlgI3pgJ/vvJox5Li65Y6f5aeL6YCf5bqmXG4gICAgICovXG4gICAgc3RhdGljIHNldEdhbWVTcGVlZChzcGVlZDogbnVtYmVyKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yWydnbG9iYWxHYW1lVGltZVNjYWxlJ10gPSBzcGVlZDtcbiAgICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBpbnRlcmZhY2UgSVV0aWwge1xuICAgICAgICBoYWNrOiB0eXBlb2YgSGFja1V0aWw7XG4gICAgfVxufVxuYzJmLnV0aWxzLmhhY2sgPSBIYWNrVXRpbDtcbmV4cG9ydCB7IH07XG4iXX0=