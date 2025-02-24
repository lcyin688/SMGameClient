
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/EntranceView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b8423xdyGBJVZhTgYzy8gMu', 'EntranceView');
// entrance/script/EntranceView.ts

"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntranceView = exports.EntranceUI = void 0;
var GameConsts_1 = require("../../Script/game/GameConsts");
var C2FUIDef_1 = require("../../c2f-framework/define/C2FUIDef");
/** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
var EntranceUI;
(function (EntranceUI) {
    EntranceUI[EntranceUI["Start"] = 2000] = "Start";
    EntranceUI[EntranceUI["GameLogo"] = 2001] = "GameLogo";
    EntranceUI[EntranceUI["GameLogin"] = 2002] = "GameLogin";
    EntranceUI[EntranceUI["GameLoading"] = 2003] = "GameLoading";
    EntranceUI[EntranceUI["NoPlatLogin"] = 2004] = "NoPlatLogin";
    EntranceUI[EntranceUI["ReloginDialog"] = 2005] = "ReloginDialog";
    EntranceUI[EntranceUI["PromptSimple"] = 2006] = "PromptSimple";
    EntranceUI[EntranceUI["SvrList"] = 2007] = "SvrList";
    EntranceUI[EntranceUI["LongTxtDialog"] = 2008] = "LongTxtDialog";
    EntranceUI[EntranceUI["UpdateRes"] = 2009] = "UpdateRes";
    EntranceUI[EntranceUI["GameResUpdate"] = 2010] = "GameResUpdate";
    EntranceUI[EntranceUI["SoundSet"] = 2011] = "SoundSet";
})(EntranceUI = exports.EntranceUI || (exports.EntranceUI = {}));
/** 打开界面方式的配置数据 */
exports.EntranceView = (_a = {},
    //description:
    _a[EntranceUI.GameLogo] = { layer: C2FUIDef_1.LayerType.UI, prefab: "prefab/GameLogo", bundle: GameConsts_1.GameConsts.Bundle.entrance },
    //description:
    _a[EntranceUI.GameLogin] = { layer: C2FUIDef_1.LayerType.UI, prefab: "prefab/GameLogin", bundle: GameConsts_1.GameConsts.Bundle.entrance },
    //description:
    _a[EntranceUI.GameLoading] = { layer: C2FUIDef_1.LayerType.UI, prefab: "prefab/GameLoading", bundle: GameConsts_1.GameConsts.Bundle.entrance },
    //description:
    _a[EntranceUI.NoPlatLogin] = { layer: C2FUIDef_1.LayerType.Dialog, prefab: "prefab/NoPlatLogin", bundle: GameConsts_1.GameConsts.Bundle.entrance },
    //description:
    _a[EntranceUI.ReloginDialog] = { layer: C2FUIDef_1.LayerType.System, prefab: "prefab/common/V_ReloginDialog", bundle: GameConsts_1.GameConsts.Bundle.entrance },
    //description:
    _a[EntranceUI.PromptSimple] = { layer: C2FUIDef_1.LayerType.PopUp, prefab: "prefab/common/V_PromptSimple", bundle: GameConsts_1.GameConsts.Bundle.entrance },
    //description:
    _a[EntranceUI.LongTxtDialog] = { layer: C2FUIDef_1.LayerType.PopUp, prefab: "prefab/common/V_LongTxtDialog", bundle: GameConsts_1.GameConsts.Bundle.entrance },
    //description:
    _a[EntranceUI.UpdateRes] = { layer: C2FUIDef_1.LayerType.UI, prefab: "prefab/F_UpdateRes", bundle: GameConsts_1.GameConsts.Bundle.entrance },
    //description:
    _a[EntranceUI.GameResUpdate] = { layer: C2FUIDef_1.LayerType.PopUp, prefab: "prefab/GameResUpdate", bundle: GameConsts_1.GameConsts.Bundle.entrance },
    //description:
    _a[EntranceUI.SoundSet] = { layer: C2FUIDef_1.LayerType.PopUp, prefab: "prefab/V_SoundSet", bundle: GameConsts_1.GameConsts.Bundle.entrance },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvRW50cmFuY2VWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsZ0VBQTBFO0FBRTFFLGdDQUFnQztBQUNoQyxJQUFZLFVBYVg7QUFiRCxXQUFZLFVBQVU7SUFDbEIsZ0RBQVksQ0FBQTtJQUNaLHNEQUFRLENBQUE7SUFDUix3REFBUyxDQUFBO0lBQ1QsNERBQVcsQ0FBQTtJQUNYLDREQUFXLENBQUE7SUFDWCxnRUFBYSxDQUFBO0lBQ2IsOERBQVksQ0FBQTtJQUNaLG9EQUFPLENBQUE7SUFDUCxnRUFBYSxDQUFBO0lBQ2Isd0RBQVMsQ0FBQTtJQUNULGdFQUFhLENBQUE7SUFDYixzREFBUSxDQUFBO0FBQ1osQ0FBQyxFQWJXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBYXJCO0FBRUQsa0JBQWtCO0FBQ0wsUUFBQSxZQUFZO0lBQ3JCLGNBQWM7SUFDZCxHQUFDLFVBQVUsQ0FBQyxRQUFRLElBQUcsRUFBRSxLQUFLLEVBQUUsb0JBQVMsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7SUFDN0csY0FBYztJQUNkLEdBQUMsVUFBVSxDQUFDLFNBQVMsSUFBRyxFQUFFLEtBQUssRUFBRSxvQkFBUyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLHVCQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtJQUMvRyxjQUFjO0lBQ2QsR0FBQyxVQUFVLENBQUMsV0FBVyxJQUFHLEVBQUUsS0FBSyxFQUFFLG9CQUFTLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsdUJBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO0lBQ25ILGNBQWM7SUFDZCxHQUFDLFVBQVUsQ0FBQyxXQUFXLElBQUcsRUFBRSxLQUFLLEVBQUUsb0JBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7SUFDdkgsY0FBYztJQUNkLEdBQUMsVUFBVSxDQUFDLGFBQWEsSUFBRyxFQUFFLEtBQUssRUFBRSxvQkFBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxFQUFFLHVCQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtJQUNwSSxjQUFjO0lBQ2QsR0FBQyxVQUFVLENBQUMsWUFBWSxJQUFHLEVBQUUsS0FBSyxFQUFFLG9CQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLEVBQUUsdUJBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO0lBR2pJLGNBQWM7SUFDZCxHQUFDLFVBQVUsQ0FBQyxhQUFhLElBQUcsRUFBRSxLQUFLLEVBQUUsb0JBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLCtCQUErQixFQUFFLE1BQU0sRUFBRSx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7SUFDbkksY0FBYztJQUNkLEdBQUMsVUFBVSxDQUFDLFNBQVMsSUFBRyxFQUFFLEtBQUssRUFBRSxvQkFBUyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLHVCQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtJQUNqSCxjQUFjO0lBQ2QsR0FBQyxVQUFVLENBQUMsYUFBYSxJQUFHLEVBQUUsS0FBSyxFQUFFLG9CQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLEVBQUUsdUJBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO0lBRTFILGNBQWM7SUFDZCxHQUFDLFVBQVUsQ0FBQyxRQUFRLElBQUcsRUFBRSxLQUFLLEVBQUUsb0JBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRSx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7UUFDckgiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lQ29uc3RzIH0gZnJvbSBcIi4uLy4uL1NjcmlwdC9nYW1lL0dhbWVDb25zdHNcIjtcclxuaW1wb3J0IHsgTGF5ZXJUeXBlLCBVSUNvbmZpZyB9IGZyb20gXCIuLi8uLi9jMmYtZnJhbWV3b3JrL2RlZmluZS9DMkZVSURlZlwiO1xyXG5cclxuLyoqIOeVjOmdouWUr+S4gOagh+ivhu+8iOaWueS+v+acjeWKoeWZqOmAmui/h+e8luWPt+aVsOaNruinpuWPkeeVjOmdouaJk+W8gO+8iSAqL1xyXG5leHBvcnQgZW51bSBFbnRyYW5jZVVJIHtcclxuICAgIFN0YXJ0ID0gMjAwMCxcclxuICAgIEdhbWVMb2dvLFxyXG4gICAgR2FtZUxvZ2luLFxyXG4gICAgR2FtZUxvYWRpbmcsXHJcbiAgICBOb1BsYXRMb2dpbixcclxuICAgIFJlbG9naW5EaWFsb2csXHJcbiAgICBQcm9tcHRTaW1wbGUsXHJcbiAgICBTdnJMaXN0LFxyXG4gICAgTG9uZ1R4dERpYWxvZyxcclxuICAgIFVwZGF0ZVJlcyxcclxuICAgIEdhbWVSZXNVcGRhdGUsXHJcbiAgICBTb3VuZFNldCxcbn1cclxuXHJcbi8qKiDmiZPlvIDnlYzpnaLmlrnlvI/nmoTphY3nva7mlbDmja4gKi9cclxuZXhwb3J0IGNvbnN0IEVudHJhbmNlVmlldzogeyBba2V5OiBudW1iZXJdOiBVSUNvbmZpZyB9ID0ge1xyXG4gICAgLy9kZXNjcmlwdGlvbjpcclxuICAgIFtFbnRyYW5jZVVJLkdhbWVMb2dvXTogeyBsYXllcjogTGF5ZXJUeXBlLlVJLCBwcmVmYWI6IFwicHJlZmFiL0dhbWVMb2dvXCIsIGJ1bmRsZTogR2FtZUNvbnN0cy5CdW5kbGUuZW50cmFuY2UgfSxcclxuICAgIC8vZGVzY3JpcHRpb246XHJcbiAgICBbRW50cmFuY2VVSS5HYW1lTG9naW5dOiB7IGxheWVyOiBMYXllclR5cGUuVUksIHByZWZhYjogXCJwcmVmYWIvR2FtZUxvZ2luXCIsIGJ1bmRsZTogR2FtZUNvbnN0cy5CdW5kbGUuZW50cmFuY2UgfSxcclxuICAgIC8vZGVzY3JpcHRpb246XHJcbiAgICBbRW50cmFuY2VVSS5HYW1lTG9hZGluZ106IHsgbGF5ZXI6IExheWVyVHlwZS5VSSwgcHJlZmFiOiBcInByZWZhYi9HYW1lTG9hZGluZ1wiLCBidW5kbGU6IEdhbWVDb25zdHMuQnVuZGxlLmVudHJhbmNlIH0sXHJcbiAgICAvL2Rlc2NyaXB0aW9uOlxyXG4gICAgW0VudHJhbmNlVUkuTm9QbGF0TG9naW5dOiB7IGxheWVyOiBMYXllclR5cGUuRGlhbG9nLCBwcmVmYWI6IFwicHJlZmFiL05vUGxhdExvZ2luXCIsIGJ1bmRsZTogR2FtZUNvbnN0cy5CdW5kbGUuZW50cmFuY2UgfSxcclxuICAgIC8vZGVzY3JpcHRpb246XHJcbiAgICBbRW50cmFuY2VVSS5SZWxvZ2luRGlhbG9nXTogeyBsYXllcjogTGF5ZXJUeXBlLlN5c3RlbSwgcHJlZmFiOiBcInByZWZhYi9jb21tb24vVl9SZWxvZ2luRGlhbG9nXCIsIGJ1bmRsZTogR2FtZUNvbnN0cy5CdW5kbGUuZW50cmFuY2UgfSxcclxuICAgIC8vZGVzY3JpcHRpb246XHJcbiAgICBbRW50cmFuY2VVSS5Qcm9tcHRTaW1wbGVdOiB7IGxheWVyOiBMYXllclR5cGUuUG9wVXAsIHByZWZhYjogXCJwcmVmYWIvY29tbW9uL1ZfUHJvbXB0U2ltcGxlXCIsIGJ1bmRsZTogR2FtZUNvbnN0cy5CdW5kbGUuZW50cmFuY2UgfSxcclxuXHJcbiBcclxuICAgIC8vZGVzY3JpcHRpb246XHJcbiAgICBbRW50cmFuY2VVSS5Mb25nVHh0RGlhbG9nXTogeyBsYXllcjogTGF5ZXJUeXBlLlBvcFVwLCBwcmVmYWI6IFwicHJlZmFiL2NvbW1vbi9WX0xvbmdUeHREaWFsb2dcIiwgYnVuZGxlOiBHYW1lQ29uc3RzLkJ1bmRsZS5lbnRyYW5jZSB9LCAgXHJcbiAgICAvL2Rlc2NyaXB0aW9uOlxyXG4gICAgW0VudHJhbmNlVUkuVXBkYXRlUmVzXTogeyBsYXllcjogTGF5ZXJUeXBlLlVJLCBwcmVmYWI6IFwicHJlZmFiL0ZfVXBkYXRlUmVzXCIsIGJ1bmRsZTogR2FtZUNvbnN0cy5CdW5kbGUuZW50cmFuY2UgfSwgIFxyXG4gICAgLy9kZXNjcmlwdGlvbjpcclxuICAgIFtFbnRyYW5jZVVJLkdhbWVSZXNVcGRhdGVdOiB7IGxheWVyOiBMYXllclR5cGUuUG9wVXAsIHByZWZhYjogXCJwcmVmYWIvR2FtZVJlc1VwZGF0ZVwiLCBidW5kbGU6IEdhbWVDb25zdHMuQnVuZGxlLmVudHJhbmNlIH0sICBcciBcbiAgICAvL2Rlc2NyaXB0aW9uOlxuICAgIFtFbnRyYW5jZVVJLlNvdW5kU2V0XTogeyBsYXllcjogTGF5ZXJUeXBlLlBvcFVwLCBwcmVmYWI6IFwicHJlZmFiL1ZfU291bmRTZXRcIiwgYnVuZGxlOiBHYW1lQ29uc3RzLkJ1bmRsZS5lbnRyYW5jZSB9LCBcbn0iXX0=