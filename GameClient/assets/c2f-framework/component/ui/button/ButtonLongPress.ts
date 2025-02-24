const { ccclass, property, menu, requireComponent } = cc._decorator;

/**
 * 长按按钮
 */
@ccclass
@requireComponent(cc.Button)
@menu("c2f/UI/ButtonLongPress")
export default class ButtonLongPress extends cc.Component {

    @property({ tooltip: '触发间隔时间' })
    touchInterval: number = 0.1;

    @property({ type: cc.Component.EventHandler, tooltip: "触发事件" })
    private triggerHander: cc.Component.EventHandler[] = [];

    private _counter: number = 0;
    private _isTouching: boolean = false;

    protected onLoad(): void {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancle, this);
    }

    protected onDisable() {
        this.stop();
    }

    private _onTouchStart(evt) {
        if (this._isTouching) {
            return
        };
        let btn = this.node.getComponent(cc.Button);
        if (btn && !btn.interactable) {
            return;
        }
        this._counter = 0;
        this._isTouching = true;
        this.schedule(this.triggerOnce, this.touchInterval);
    }

    private _onTouchEnd(evt) {
        if (this._counter == 0 && this._isTouching) {
            cc.Component.EventHandler.emitEvents(this.triggerHander, evt);
        }
        this.stop();
    }

    private _onTouchCancle(evt) {
        this.stop();
    }

    private triggerOnce(evt) {
        if (this._isTouching) {
            this._counter++;
            cc.Component.EventHandler.emitEvents(this.triggerHander, evt);
        }
    }

    private stop() {
        this._counter = 0;
        this._isTouching = false;
        this.unschedule(this.triggerOnce);
    }

    /** 快捷设置触发处理方法 */
    public quickSetTriggerHnadler(ower: cc.Component, handlerName: string) {
        this.triggerHander = [];
        let handler = new cc.Component.EventHandler();
        handler.target = ower.node;
        handler.component = c2f.utils.view.getComponentName(ower);
        handler.handler = handlerName;
        handler.customEventData = "";
        this.triggerHander.push(handler);
    }
}
