
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/gameYngy/script/GameYngyView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fc5eepUGbJESoVWiw6qEI+U', 'GameYngyView');
// gameYngy/script/GameYngyView.ts

"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameYngyView = exports.GameYngyUI = void 0;
var GameConsts_1 = require("../../Script/game/GameConsts");
var C2FUIDef_1 = require("../../c2f-framework/define/C2FUIDef");
/** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
var GameYngyUI;
(function (GameYngyUI) {
    GameYngyUI[GameYngyUI["Start"] = 4000] = "Start";
    GameYngyUI[GameYngyUI["YngyMain"] = 4001] = "YngyMain";
})(GameYngyUI = exports.GameYngyUI || (exports.GameYngyUI = {}));
/** 打开界面方式的配置数据 */
exports.GameYngyView = (_a = {},
    //description:
    _a[GameYngyUI.YngyMain] = { layer: C2FUIDef_1.LayerType.UI, prefab: "prefab/F_YngyMain", bundle: GameConsts_1.GameConsts.Bundle.gameYngy },
    _a);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nYW1lWW5neS9zY3JpcHQvR2FtZVluZ3lWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsZ0VBQTBFO0FBRTFFLGdDQUFnQztBQUNoQyxJQUFZLFVBR1g7QUFIRCxXQUFZLFVBQVU7SUFDbEIsZ0RBQVksQ0FBQTtJQUNaLHNEQUFRLENBQUE7QUFDWixDQUFDLEVBSFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFHckI7QUFHRCxrQkFBa0I7QUFDTCxRQUFBLFlBQVk7SUFFckIsY0FBYztJQUNkLEdBQUMsVUFBVSxDQUFDLFFBQVEsSUFBRyxFQUFFLEtBQUssRUFBRSxvQkFBUyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLHVCQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtRQUNsSCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVDb25zdHMgfSBmcm9tIFwiLi4vLi4vU2NyaXB0L2dhbWUvR2FtZUNvbnN0c1wiO1xuaW1wb3J0IHsgTGF5ZXJUeXBlLCBVSUNvbmZpZyB9IGZyb20gXCIuLi8uLi9jMmYtZnJhbWV3b3JrL2RlZmluZS9DMkZVSURlZlwiO1xuXG4vKiog55WM6Z2i5ZSv5LiA5qCH6K+G77yI5pa55L6/5pyN5Yqh5Zmo6YCa6L+H57yW5Y+35pWw5o2u6Kem5Y+R55WM6Z2i5omT5byA77yJICovXG5leHBvcnQgZW51bSBHYW1lWW5neVVJIHtcbiAgICBTdGFydCA9IDQwMDAsXG4gICAgWW5neU1haW4sXG59XG5cblxuLyoqIOaJk+W8gOeVjOmdouaWueW8j+eahOmFjee9ruaVsOaNriAqL1xuZXhwb3J0IGNvbnN0IEdhbWVZbmd5VmlldzogeyBba2V5OiBudW1iZXJdOiBVSUNvbmZpZyB9ID0ge1xuXG4gICAgLy9kZXNjcmlwdGlvbjpcbiAgICBbR2FtZVluZ3lVSS5Zbmd5TWFpbl06IHsgbGF5ZXI6IExheWVyVHlwZS5VSSwgcHJlZmFiOiBcInByZWZhYi9GX1luZ3lNYWluXCIsIGJ1bmRsZTogR2FtZUNvbnN0cy5CdW5kbGUuZ2FtZVluZ3kgfSxcbn0iXX0=