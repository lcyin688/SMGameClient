
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/boxGame/script/BoxGameView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '999d1iq0Y9IBKtM7FNbxGw6', 'BoxGameView');
// boxGame/script/BoxGameView.ts

"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxGameView = exports.BoxGameUI = void 0;
var GameConsts_1 = require("../../Script/game/GameConsts");
var C2FUIDef_1 = require("../../c2f-framework/define/C2FUIDef");
/** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
var BoxGameUI;
(function (BoxGameUI) {
    BoxGameUI[BoxGameUI["Start"] = 4000] = "Start";
    BoxGameUI[BoxGameUI["YngyMain"] = 4001] = "YngyMain";
    BoxGameUI[BoxGameUI["BoxGameMain"] = 4002] = "BoxGameMain";
    BoxGameUI[BoxGameUI["BoxGameResult"] = 4003] = "BoxGameResult";
    BoxGameUI[BoxGameUI["BoxTime"] = 4004] = "BoxTime";
})(BoxGameUI = exports.BoxGameUI || (exports.BoxGameUI = {}));
/** 打开界面方式的配置数据 */
exports.BoxGameView = (_a = {},
    //description:
    _a[BoxGameUI.BoxGameMain] = { layer: C2FUIDef_1.LayerType.UI, prefab: "prefab/F_BoxGameMain", bundle: GameConsts_1.GameConsts.Bundle.boxGame },
    //description:
    _a[BoxGameUI.BoxGameResult] = { layer: C2FUIDef_1.LayerType.UI, prefab: "prefab/F_BoxGameResult", bundle: GameConsts_1.GameConsts.Bundle.boxGame },
    //description:
    _a[BoxGameUI.BoxTime] = { layer: C2FUIDef_1.LayerType.UI, prefab: "prefab/F_BoxTime", bundle: GameConsts_1.GameConsts.Bundle.boxGame },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9ib3hHYW1lL3NjcmlwdC9Cb3hHYW1lVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTBEO0FBQzFELGdFQUEwRTtBQUUxRSxnQ0FBZ0M7QUFDaEMsSUFBWSxTQU1YO0FBTkQsV0FBWSxTQUFTO0lBQ2pCLDhDQUFZLENBQUE7SUFDWixvREFBUSxDQUFBO0lBQ1IsMERBQVcsQ0FBQTtJQUNYLDhEQUFhLENBQUE7SUFDYixrREFBTyxDQUFBO0FBQ1gsQ0FBQyxFQU5XLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBTXBCO0FBR0Qsa0JBQWtCO0FBQ0wsUUFBQSxXQUFXO0lBQ3BCLGNBQWM7SUFDZCxHQUFDLFNBQVMsQ0FBQyxXQUFXLElBQUcsRUFBRSxLQUFLLEVBQUUsb0JBQVMsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sRUFBRSx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7SUFFbkgsY0FBYztJQUNkLEdBQUMsU0FBUyxDQUFDLGFBQWEsSUFBRyxFQUFFLEtBQUssRUFBRSxvQkFBUyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxFQUFFLHVCQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtJQUN2SCxjQUFjO0lBQ2QsR0FBQyxTQUFTLENBQUMsT0FBTyxJQUFHLEVBQUUsS0FBSyxFQUFFLG9CQUFTLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsdUJBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lQ29uc3RzIH0gZnJvbSBcIi4uLy4uL1NjcmlwdC9nYW1lL0dhbWVDb25zdHNcIjtcclxuaW1wb3J0IHsgTGF5ZXJUeXBlLCBVSUNvbmZpZyB9IGZyb20gXCIuLi8uLi9jMmYtZnJhbWV3b3JrL2RlZmluZS9DMkZVSURlZlwiO1xyXG5cclxuLyoqIOeVjOmdouWUr+S4gOagh+ivhu+8iOaWueS+v+acjeWKoeWZqOmAmui/h+e8luWPt+aVsOaNruinpuWPkeeVjOmdouaJk+W8gO+8iSAqL1xyXG5leHBvcnQgZW51bSBCb3hHYW1lVUkge1xyXG4gICAgU3RhcnQgPSA0MDAwLFxyXG4gICAgWW5neU1haW4sXHJcbiAgICBCb3hHYW1lTWFpbixcclxuICAgIEJveEdhbWVSZXN1bHQsXG4gICAgQm94VGltZSxcbn1cclxuXHJcblxyXG4vKiog5omT5byA55WM6Z2i5pa55byP55qE6YWN572u5pWw5o2uICovXHJcbmV4cG9ydCBjb25zdCBCb3hHYW1lVmlldzogeyBba2V5OiBudW1iZXJdOiBVSUNvbmZpZyB9ID0ge1xyXG4gICAgLy9kZXNjcmlwdGlvbjpcclxuICAgIFtCb3hHYW1lVUkuQm94R2FtZU1haW5dOiB7IGxheWVyOiBMYXllclR5cGUuVUksIHByZWZhYjogXCJwcmVmYWIvRl9Cb3hHYW1lTWFpblwiLCBidW5kbGU6IEdhbWVDb25zdHMuQnVuZGxlLmJveEdhbWUgfSxcciBcbiAgICAvL2Rlc2NyaXB0aW9uOlxuICAgIFtCb3hHYW1lVUkuQm94R2FtZVJlc3VsdF06IHsgbGF5ZXI6IExheWVyVHlwZS5VSSwgcHJlZmFiOiBcInByZWZhYi9GX0JveEdhbWVSZXN1bHRcIiwgYnVuZGxlOiBHYW1lQ29uc3RzLkJ1bmRsZS5ib3hHYW1lIH0sIFxuICAgIC8vZGVzY3JpcHRpb246XG4gICAgW0JveEdhbWVVSS5Cb3hUaW1lXTogeyBsYXllcjogTGF5ZXJUeXBlLlVJLCBwcmVmYWI6IFwicHJlZmFiL0ZfQm94VGltZVwiLCBidW5kbGU6IEdhbWVDb25zdHMuQnVuZGxlLmJveEdhbWUgfSwgfSJdfQ==