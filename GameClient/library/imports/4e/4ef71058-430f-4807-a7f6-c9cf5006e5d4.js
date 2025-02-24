"use strict";
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