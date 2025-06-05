const { ccclass, property, menu } = cc._decorator;

interface EventTouch extends cc.Event.EventTouch {
    simulate?: boolean;
    sham?: boolean;
}

@ccclass
@menu('c2f/scroll/WEViewGroupNesting(view滑动嵌套，二维滚动)')
export class WEViewGroupNesting extends cc.Component {
    private events: EventTouch[] = [];

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchHandle, this, true);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchHandle, this, true);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchHandle, this, true);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchHandle, this, true);
    }

    private onTouchHandle(event: EventTouch) {
        if (event.sham || event.simulate || event.target === this.node) {
            return;
        }

        if (!event.target.getComponent(cc.ScrollView)) {
            // 不嵌套的情况，直接过滤掉
            return;
        }

        const cancelEvent: EventTouch = new cc.Event.EventTouch(event.getTouches(), event.bubbles);
        cancelEvent.type = event.type;
        cancelEvent.touch = event.touch;
        cancelEvent.sham = true;
        this.events.push(cancelEvent);
    }

    update() {
        if (this.events.length === 0) {
            return;
        }
        for (let index = 0; index < this.events.length; index++) {
            this.node.dispatchEvent(this.events[index]);
        }
        this.events.length = 0;
    }
}
