import { EventData, ListenerFunc } from "./EventDefine";

class EventManager {
    static readonly instance: EventManager = new EventManager();

    //普通事件
    private events: { [key: string]: Array<EventData> } = {};
    //分组事件
    private groupEvt: { [key: string]: { [key: string]: Array<EventData> } } = {}

    private addToList(list: EventData[], event: string, listener: ListenerFunc, object: Object) {
        let length = list.length;
        for (let i = 0; i < length; i++) {
            let bin = list[i];
            if (bin.listener == listener && bin.object == object) {
                cc.warn(`名为【${event}】的事件重复注册侦听器`);
            }
        }
        let data: EventData = new EventData();
        data.event = event;
        data.listener = listener;
        data.object = object;
        list.push(data);
    }

    /**
     * 注册全局事件
     * @param event      事件名
     * @param listener   处理事件的侦听器函数
     * @param object     侦听函数绑定的作用域对象
     */
    public on(event: string, listener: ListenerFunc, object: object) {
        if (!event || !listener) {
            cc.warn(`注册【${event}】事件的侦听器函数为空`);
            return;
        }
        let list: Array<EventData> = this.events[event];
        if (list == null) {
            list = [];
            this.events[event] = list;
        }
        this.addToList(list, event, listener, object);
    }

    /**
     * 按分组监听时间
     * @param group 分组名称
     * @param event 时间名称
     * @param listener 监听函数
     * @param object 监听函数绑定的作用域对象
     */
    public onGroup(group: string, event: string, listener: ListenerFunc, object: object) {
        if (!this.groupEvt[group]) {
            this.groupEvt[group] = {};
        }
        if (!this.groupEvt[group][event]) {
            this.groupEvt[group][event] = [];
        }
        this.addToList(this.groupEvt[group][event], event, listener, object);
    }

    /**
     * 监听一次事件，事件响应后，该监听自动移除
     * @param event     事件名
     * @param listener  事件触发回调方法
     * @param object    侦听函数绑定的作用域对象
     */
    public once(event: string, listener: ListenerFunc, object: object) {
        let _listener: any = ($event: string, $args: any) => {
            this.off(event, _listener, object);
            _listener = null;
            listener.call(object, $event, $args);
        }
        this.on(event, _listener, object);
    }

    /**
     * 移除全局事件
     * @param event     事件名
     * @param listener  处理事件的侦听器函数
     * @param object    侦听函数绑定的作用域对象
     */
    public off(event: string, listener: Function, object: object) {
        let list: Array<EventData> = this.events[event];
        if (!list) {
            cc.log(`名为【${event}】的事件不存在`);
            return;
        }

        let length = list.length;
        for (let i = 0; i < length; i++) {
            let bin: EventData = list[i];
            if (bin.listener == listener && bin.object == object) {
                list.splice(i, 1);
                break;
            }
        }

        if (list.length == 0) {
            delete this.events[event];
        }
    }

    /**
     * 移除分组事件监听
     * @param group 分组名称
     * @param event 事件名称
     * @param listener 监听函数
     * @param object 监听函数绑定对象
     */
    public offGroup(group: string, event: string, listener: Function, object: object) {
        let dstGroup = this.groupEvt[group];
        if (!dstGroup) {
            return;
        }
        let evts = dstGroup[event];
        if (!evts || evts.length <= 0) {
            return;
        }
        let length = evts.length;
        for (let i = 0; i < length; i++) {
            let bin: EventData = evts[i];
            if (bin.listener == listener && bin.object == object) {
                evts.splice(i, 1);
                break;
            }
        }
        if (evts.length == 0) {
            delete dstGroup[event];
        }
    }

    /**
     * 移除分组内所有事件
     * @param group 分组名称
     * @returns 
     */
    public offGroupAll(group: string) {
        let dictEvent = this.groupEvt[group];
        if (!dictEvent) {
            return;
        }
        this.groupEvt[group] = {};
    }

    /** 
     * 触发全局事件 
     * @param event(string)      事件名
     * @param args(any)          事件参数
     */
    public emit(event: string, ...args: any[]) {
        let list: Array<EventData> = this.events[event];
        if (list != null) {
            let temp: Array<EventData> = list.concat();
            let length = temp.length;
            for (let i = 0; i < length; i++) {
                let eventBin = temp[i];
                eventBin.listener.call(eventBin.object, event, ...args);
            }
        }
    }

    /** 
         * 触发全局事件 
         * @param group 分组名称
         * @param event(string)      事件名
         * @param args(any)          事件参数
         */
    public emitGroup(group: string, event: string, ...args: any[]) {
        let dictEvent = this.groupEvt[group];
        if (!dictEvent) {
            return;
        }
        let list = dictEvent[event];
        if (!list || list.length <= 0) {
            return;
        }
        let temp: Array<EventData> = list.concat();
        let length = temp.length;
        for (let i = 0; i < length; i++) {
            let eventBin = temp[i];
            eventBin.listener.call(eventBin.object, event, ...args);
        }
    }

}

declare global {
    interface IC2F {
        event: EventManager;
    }
}

c2f.event = EventManager.instance;
export { };