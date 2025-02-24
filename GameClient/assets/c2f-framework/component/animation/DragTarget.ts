const { ccclass, property } = cc._decorator;
@ccclass
export default class DragTarget extends cc.Component {

    @property(cc.Node)
    target: cc.Node = null;

    private startPos: cc.Vec2 = null;
    private currtPos: cc.Vec2 = null;
    private dragEndCb: Function = null;

    protected onEnable(): void {
        if (super.onEnable) {
            super.onEnable();
        }
        // 监听触摸事件
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    }

    protected onDisable(): void {
        if (super.onDisable) {
            super.onDisable();
        }
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    }

    private onTouchStart(event: cc.Event.EventTouch): void {
        this.currtPos = this.target.getPosition();
        this.startPos = this.currtPos.clone();
    }

    private onTouchMove(event: cc.Event.EventTouch): void {
        let delta = event.getDelta();
        this.currtPos.x = this.currtPos.x + delta.x;
        this.currtPos.y = this.currtPos.y + delta.y;
        this.target.setPosition(this.currtPos);
    }

    private onTouchEnd(event: cc.Event.EventTouch): void {
        this.onDragEnd(event);
    }

    private onTouchCancel(event: cc.Event.EventTouch): void {
        this.onDragEnd(event);
    }

    private onDragEnd(event: cc.Event.EventTouch) {
        if (cc.Vec2.distance(this.currtPos, this.startPos) > 20) {
            event.stopPropagation();
            this.dragEndCb && this.dragEndCb();

            let btn = this.target.getComponent(cc.Button);
            if (btn) {
                btn['_onTouchCancel']();
            }
        }
    }

    public setDragEndCb(endCb: Function) {
        this.dragEndCb = endCb;
    }
}