
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/core/event/EventDefine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ef71BYQw9IB6f2yc9QBuXU', 'EventDefine');
// c2f-framework/core/event/EventDefine.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventData = exports.EventMessage = void 0;
/** 框架内部全局事件  */
var EventMessage;
(function (EventMessage) {
    /** 游戏从后台进入 */
    EventMessage["GAME_ENTER"] = "EventMessage.GAME_ENTER";
    /** 游戏切到后台 */
    EventMessage["GAME_EXIT"] = "EventMessage.GAME_EXIT";
    /** 游戏画笔尺寸变化事件 */
    EventMessage["GAME_RESIZE"] = "EventMessage.GAME_RESIZE";
    /** 时间缩放 */
    EventMessage["TIME_SCALE"] = "EventMessage.TIME_SCALE";
    /** 游戏暂停 */
    EventMessage["GAME_PAUSE"] = "EventMessage.GAME_PAUSE";
    /** 游戏恢复 */
    EventMessage["GAME_RESUME"] = "EventMessage.GAME_RESUME";
})(EventMessage = exports.EventMessage || (exports.EventMessage = {}));
var EventData = /** @class */ (function () {
    function EventData() {
    }
    return EventData;
}());
exports.EventData = EventData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvcmUvZXZlbnQvRXZlbnREZWZpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0EsZ0JBQWdCO0FBQ2hCLElBQVksWUFlWDtBQWZELFdBQVksWUFBWTtJQUNwQixjQUFjO0lBQ2Qsc0RBQXNDLENBQUE7SUFDdEMsYUFBYTtJQUNiLG9EQUFvQyxDQUFBO0lBQ3BDLGlCQUFpQjtJQUNqQix3REFBd0MsQ0FBQTtJQUV4QyxXQUFXO0lBQ1gsc0RBQXNDLENBQUE7SUFDdEMsV0FBVztJQUNYLHNEQUFzQyxDQUFBO0lBQ3RDLFdBQVc7SUFDWCx3REFBd0MsQ0FBQTtBQUU1QyxDQUFDLEVBZlcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFldkI7QUFFRDtJQUFBO0lBSUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5YWo5bGA5LqL5Lu255uR5ZCs5pa55rOVXG4gKiBAcGFyYW0gZXZlbnQgICAgICDkuovku7blkI1cbiAqIEBwYXJhbSBhcmdzICAgICAgIOS6i+S7tuWPguaVsFxuICovXG5leHBvcnQgdHlwZSBMaXN0ZW5lckZ1bmMgPSAoZXZlbnQ6IHN0cmluZywgLi4uYXJncykgPT4gdm9pZFxuXG4vKiog5qGG5p625YaF6YOo5YWo5bGA5LqL5Lu2ICAqL1xuZXhwb3J0IGVudW0gRXZlbnRNZXNzYWdlIHtcbiAgICAvKiog5ri45oiP5LuO5ZCO5Y+w6L+b5YWlICovXG4gICAgR0FNRV9FTlRFUiA9IFwiRXZlbnRNZXNzYWdlLkdBTUVfRU5URVJcIixcbiAgICAvKiog5ri45oiP5YiH5Yiw5ZCO5Y+wICovXG4gICAgR0FNRV9FWElUID0gXCJFdmVudE1lc3NhZ2UuR0FNRV9FWElUXCIsXG4gICAgLyoqIOa4uOaIj+eUu+eslOWwuuWvuOWPmOWMluS6i+S7tiAqL1xuICAgIEdBTUVfUkVTSVpFID0gXCJFdmVudE1lc3NhZ2UuR0FNRV9SRVNJWkVcIixcblxuICAgIC8qKiDml7bpl7TnvKnmlL4gKi9cbiAgICBUSU1FX1NDQUxFID0gXCJFdmVudE1lc3NhZ2UuVElNRV9TQ0FMRVwiLFxuICAgIC8qKiDmuLjmiI/mmoLlgZwgKi9cbiAgICBHQU1FX1BBVVNFID0gXCJFdmVudE1lc3NhZ2UuR0FNRV9QQVVTRVwiLFxuICAgIC8qKiDmuLjmiI/mgaLlpI0gKi9cbiAgICBHQU1FX1JFU1VNRSA9IFwiRXZlbnRNZXNzYWdlLkdBTUVfUkVTVU1FXCIsXG5cbn1cblxuZXhwb3J0IGNsYXNzIEV2ZW50RGF0YSB7XG4gICAgcHVibGljIGV2ZW50ITogc3RyaW5nO1xuICAgIHB1YmxpYyBsaXN0ZW5lciE6IExpc3RlbmVyRnVuYztcbiAgICBwdWJsaWMgb2JqZWN0OiBhbnk7XG59XG4iXX0=