
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/MainPackView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '534fbQjOJ9G35+vDGUWAeIc', 'MainPackView');
// mainPack/script/MainPackView.ts

"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainPackView = exports.MainPackUI = void 0;
var GameConsts_1 = require("../../Script/game/GameConsts");
var C2FUIDef_1 = require("../../c2f-framework/define/C2FUIDef");
/** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
var MainPackUI;
(function (MainPackUI) {
    MainPackUI[MainPackUI["Start"] = 3000] = "Start";
    MainPackUI[MainPackUI["DesStarMain"] = 3001] = "DesStarMain";
    MainPackUI[MainPackUI["Physics2048Main"] = 3002] = "Physics2048Main";
    MainPackUI[MainPackUI["MapCreateMain"] = 3003] = "MapCreateMain";
    MainPackUI[MainPackUI["BasketBallMain"] = 3004] = "BasketBallMain";
    MainPackUI[MainPackUI["YngyMain"] = 3005] = "YngyMain";
})(MainPackUI = exports.MainPackUI || (exports.MainPackUI = {}));
/** 打开界面方式的配置数据 */
exports.MainPackView = (_a = {},
    //description:
    _a[MainPackUI.DesStarMain] = { layer: C2FUIDef_1.LayerType.UI, prefab: "prefab/desStar/F_DesStarMain", bundle: GameConsts_1.GameConsts.Bundle.mainPack },
    //description:
    _a[MainPackUI.Physics2048Main] = { layer: C2FUIDef_1.LayerType.UI, prefab: "prefab/physics2048/F_Physics2048Main", bundle: GameConsts_1.GameConsts.Bundle.mainPack },
    //description:
    _a[MainPackUI.MapCreateMain] = { layer: C2FUIDef_1.LayerType.UI, prefab: "prefab/mapCreate/F_MapCreateMain", bundle: GameConsts_1.GameConsts.Bundle.mainPack },
    //description:
    _a[MainPackUI.BasketBallMain] = { layer: C2FUIDef_1.LayerType.UI, prefab: "prefab/basketBall/F_BasketBallMain", bundle: GameConsts_1.GameConsts.Bundle.mainPack },
    //description:
    _a[MainPackUI.YngyMain] = { layer: C2FUIDef_1.LayerType.UI, prefab: "prefab/F_YngyMain", bundle: GameConsts_1.GameConsts.Bundle.mainPack },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvTWFpblBhY2tWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsZ0VBQTBFO0FBRTFFLGdDQUFnQztBQUNoQyxJQUFZLFVBTUQ7QUFOWCxXQUFZLFVBQVU7SUFDbEIsZ0RBQVksQ0FBQTtJQUNaLDREQUFXLENBQUE7SUFDWCxvRUFBZSxDQUFBO0lBQ2YsZ0VBQWEsQ0FBQTtJQUNiLGtFQUFjLENBQUE7SUFDakIsc0RBQVEsQ0FBQTtBQUFDLENBQUMsRUFOQyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQU1YO0FBRVgsa0JBQWtCO0FBQ0wsUUFBQSxZQUFZO0lBQ3JCLGNBQWM7SUFDZCxHQUFDLFVBQVUsQ0FBQyxXQUFXLElBQUcsRUFBRSxLQUFLLEVBQUUsb0JBQVMsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLDhCQUE4QixFQUFFLE1BQU0sRUFBRSx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7SUFDN0gsY0FBYztJQUNkLEdBQUMsVUFBVSxDQUFDLGVBQWUsSUFBRyxFQUFFLEtBQUssRUFBRSxvQkFBUyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSxFQUFFLHVCQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtJQUN6SSxjQUFjO0lBQ2QsR0FBQyxVQUFVLENBQUMsYUFBYSxJQUFHLEVBQUUsS0FBSyxFQUFFLG9CQUFTLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLEVBQUUsdUJBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO0lBRW5JLGNBQWM7SUFDZCxHQUFDLFVBQVUsQ0FBQyxjQUFjLElBQUcsRUFBRSxLQUFLLEVBQUUsb0JBQVMsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sRUFBRSx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7SUFFdEksY0FBYztJQUNkLEdBQUMsVUFBVSxDQUFDLFFBQVEsSUFBRyxFQUFFLEtBQUssRUFBRSxvQkFBUyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLHVCQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtRQUNqSCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVDb25zdHMgfSBmcm9tIFwiLi4vLi4vU2NyaXB0L2dhbWUvR2FtZUNvbnN0c1wiO1xyXG5pbXBvcnQgeyBMYXllclR5cGUsIFVJQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2MyZi1mcmFtZXdvcmsvZGVmaW5lL0MyRlVJRGVmXCI7XHJcblxyXG4vKiog55WM6Z2i5ZSv5LiA5qCH6K+G77yI5pa55L6/5pyN5Yqh5Zmo6YCa6L+H57yW5Y+35pWw5o2u6Kem5Y+R55WM6Z2i5omT5byA77yJICovXHJcbmV4cG9ydCBlbnVtIE1haW5QYWNrVUkge1xyXG4gICAgU3RhcnQgPSAzMDAwLFxyXG4gICAgRGVzU3Rhck1haW4sXHJcbiAgICBQaHlzaWNzMjA0OE1haW4sXHJcbiAgICBNYXBDcmVhdGVNYWluLFxyXG4gICAgQmFza2V0QmFsbE1haW4sXHIgWW5neU1haW4sfVxyXG5cclxuLyoqIOaJk+W8gOeVjOmdouaWueW8j+eahOmFjee9ruaVsOaNriAqL1xyXG5leHBvcnQgY29uc3QgTWFpblBhY2tWaWV3OiB7IFtrZXk6IG51bWJlcl06IFVJQ29uZmlnIH0gPSB7XHJcbiAgICAvL2Rlc2NyaXB0aW9uOlxyXG4gICAgW01haW5QYWNrVUkuRGVzU3Rhck1haW5dOiB7IGxheWVyOiBMYXllclR5cGUuVUksIHByZWZhYjogXCJwcmVmYWIvZGVzU3Rhci9GX0Rlc1N0YXJNYWluXCIsIGJ1bmRsZTogR2FtZUNvbnN0cy5CdW5kbGUubWFpblBhY2sgfSxcclxuICAgIC8vZGVzY3JpcHRpb246XHJcbiAgICBbTWFpblBhY2tVSS5QaHlzaWNzMjA0OE1haW5dOiB7IGxheWVyOiBMYXllclR5cGUuVUksIHByZWZhYjogXCJwcmVmYWIvcGh5c2ljczIwNDgvRl9QaHlzaWNzMjA0OE1haW5cIiwgYnVuZGxlOiBHYW1lQ29uc3RzLkJ1bmRsZS5tYWluUGFjayB9LFxyXG4gICAgLy9kZXNjcmlwdGlvbjpcclxuICAgIFtNYWluUGFja1VJLk1hcENyZWF0ZU1haW5dOiB7IGxheWVyOiBMYXllclR5cGUuVUksIHByZWZhYjogXCJwcmVmYWIvbWFwQ3JlYXRlL0ZfTWFwQ3JlYXRlTWFpblwiLCBidW5kbGU6IEdhbWVDb25zdHMuQnVuZGxlLm1haW5QYWNrIH0sXHJcblxyXG4gICAgLy9kZXNjcmlwdGlvbjpcclxuICAgIFtNYWluUGFja1VJLkJhc2tldEJhbGxNYWluXTogeyBsYXllcjogTGF5ZXJUeXBlLlVJLCBwcmVmYWI6IFwicHJlZmFiL2Jhc2tldEJhbGwvRl9CYXNrZXRCYWxsTWFpblwiLCBidW5kbGU6IEdhbWVDb25zdHMuQnVuZGxlLm1haW5QYWNrIH0sXHIgXG4gICAgLy9kZXNjcmlwdGlvbjpcbiAgICBbTWFpblBhY2tVSS5Zbmd5TWFpbl06IHsgbGF5ZXI6IExheWVyVHlwZS5VSSwgcHJlZmFiOiBcInByZWZhYi9GX1luZ3lNYWluXCIsIGJ1bmRsZTogR2FtZUNvbnN0cy5CdW5kbGUubWFpblBhY2sgfSxcbiB9Il19