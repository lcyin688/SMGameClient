import { EventData, ListenerFunc } from "./EventDefine";

/**
 * 批量注册、移除全局事件对象
 */
export class EventGroup {
    private group: string;
    private events: { [key: string]: Array<EventData> } = {};
    private groupEvt: { [key: string]: { [key: string]: Array<EventData> } } = {}

    constructor(name: string) {
        this.group = name;
    }

    private addToList(list: Array<EventData>, event: string, listener: ListenerFunc, object: Object) {
        let data: EventData = new EventData();
        data.event = event;
        data.listener = listener;
        data.object = object;
        list.push(data);
    }

    /**
     * 注册分组事件
     * @param event      事件名
     * @param listener   处理事件的侦听器函数
     * @param object     侦听函数绑定的作用域对象
     */
    public on(event: string, listener: ListenerFunc, object: object) {
        if (this.group) {
            if (!this.groupEvt[this.group]) {
                this.groupEvt[this.group] = {};
            }
            if (!this.groupEvt[this.group][event]) {
                this.groupEvt[this.group][event] = [];
            }
            this.addToList(this.groupEvt[this.group][event], event, listener, object);
            c2f.event.onGroup(this.group, event, listener, object);
        } else {
            let list: Array<EventData> = this.events[event];
            if (list == null) {
                list = [];
                this.events[event] = list;
            }
            this.addToList(list, event, listener, object);
            c2f.event.on(event, listener, object);
        }
    }

    /**
    * 移除全局事件
     * @param event     事件名
     */
    public off(event: string) {
        if (this.group) {
            let dictEvent = this.groupEvt[this.group];
            if (!dictEvent) {
                return;
            }
            let obs = dictEvent[event];
            if (!obs) {
                return;
            }
            for (let ob of obs) {
                c2f.event.offGroup(this.group, event, ob.listener, ob.object);
            }
            delete dictEvent[event];
        } else {
            let ebs: Array<EventData> = this.events[event];
            if (!ebs) {
                return;
            }
            for (let eb of ebs) {
                c2f.event.off(event, eb.listener, eb.object);
            }
            delete this.events[event];
        }
    }

    /** 
     * 触发全局事件 
     * @param event(string)      事件名
     * @param args(any)          事件参数
     */
    public emit(event: string, ...args: any[]) {
        if (this.group) {
            c2f.event.emitGroup(this.group, event, ...args);
        } else {
            c2f.event.emit(event, ...args);
        }
    }

    /** 清除所有的全局事件监听 */
    public clear() {
        if (this.group) {
            c2f.event.offGroupAll(this.group);
            this.groupEvt = {};
        } else {
            for (let event in this.events) {
                this.off(event);
            }
        }
    }
}
