/**
 * 全局事件监听方法
 * @param event      事件名
 * @param args       事件参数
 */
export type ListenerFunc = (event: string, ...args) => void

/** 框架内部全局事件  */
export enum EventMessage {
    /** 游戏从后台进入 */
    GAME_ENTER = "EventMessage.GAME_ENTER",
    /** 游戏切到后台 */
    GAME_EXIT = "EventMessage.GAME_EXIT",
    /** 游戏画笔尺寸变化事件 */
    GAME_RESIZE = "EventMessage.GAME_RESIZE",

    /** 时间缩放 */
    TIME_SCALE = "EventMessage.TIME_SCALE",
    /** 游戏暂停 */
    GAME_PAUSE = "EventMessage.GAME_PAUSE",
    /** 游戏恢复 */
    GAME_RESUME = "EventMessage.GAME_RESUME",

}

export class EventData {
    public event!: string;
    public listener!: ListenerFunc;
    public object: any;
}
