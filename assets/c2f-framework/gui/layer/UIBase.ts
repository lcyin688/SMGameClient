import { ListenerFunc } from "../../core/event/EventDefine";
import { EventDispatcher } from "../../core/event/EventDispatcher";

const { ccclass } = cc._decorator;

/** 游戏显示对象组件模板 */
@ccclass
export class UIBase extends cc.Component {
    /** 预制体名称 */
    public prefabName: string = '';

    /** 事件触发器 */
    private _eventDispatcher: EventDispatcher | null = null;
    get eventDispatcher(): EventDispatcher {
        if (!this._eventDispatcher) {
            this._eventDispatcher = new EventDispatcher();
            this._eventDispatcher.setGroupName(`${this.prefabName}_${this.node.uuid}`);
        }
        return this._eventDispatcher;
    }

    /**
     * 注册全局事件
     * @param event       事件名
     * @param listener   处理事件的侦听器函数
     * @param object    侦听函数绑定的this对象
     */
    public on(event: string, listener: ListenerFunc, object: any) {
        this.eventDispatcher.on(event, listener, object);
    }

    /**
     * 移除全局事件
     * @param event      事件名
     */
    public off(event: string) {
        if (this._eventDispatcher) {
            this._eventDispatcher.off(event);
        }
    }

    /** 
     * 触发全局事件 
     * @param event      事件名
     * @param args       事件参数
     */
    public emit(event: string, ...args: any[]) {
        this.eventDispatcher.emit(event, ...args);
    }

    /**
     * 移除预制内的所有事件
     */
    public offAll() {
        this.eventDispatcher.offAll();
    }

    protected onDestroy() {
        // 释放消息对象
        if (this._eventDispatcher) {
            this._eventDispatcher.destroy();
            this._eventDispatcher = null;
        }
    }
}