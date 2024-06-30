import { ListenerFunc } from "./EventDefine";
import { EventGroup } from "./EventGroup";

/* 事件对象基类，继承该类将拥有发送和接送事件的能力 */
export class EventDispatcher {
    private group: string = null;
    protected _msg: EventGroup | null = null;

    /** 设置分组名称 */
    public setGroupName(name: string) {
        this.group = name;
    }

    /**
     * 注册全局事件
     * @param event     事件名
     * @param listener  处理事件的侦听器函数
     * @param object    侦听函数绑定的作用域对象
     */
    public on(event: string, listener: ListenerFunc, object: any) {
        if (this._msg == null) {
            this._msg = new EventGroup(this.group);
        }
        this._msg.on(event, listener, object);
    }

    /**
     * 移除全局事件
     * @param event      事件名
     */
    public off(event: string) {
        if (this._msg) {
            this._msg.off(event);
        }
    }

    /** 
     * 触发全局事件 
     * @param event      事件名
     * @param args       事件参数
     */
    public emit(event: string, ...args: any[]) {
        if (this._msg == null) {
            this._msg = new EventGroup(this.group);
        }
        this._msg.emit(event, ...args);
    }

    /** 移除所有事件监听 */
    public offAll() {
        if (this._msg) {
            this._msg.clear();
        }
    }

    /**
     * 销毁事件对象
     */
    public destroy() {
        this.offAll();
        this._msg = null;
    }
}