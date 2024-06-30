import { UIPControlBase } from "./UIPControlBase";

/** 点击事件回调定义 */
type TouchHandler = (event: cc.Event.EventTouch, target: UIPTouchBase) => void;

/** 拖动状态 */
export enum MoveState {
    normal = 1,
    moveOut = 2,
    moveIn = 3,
    disable = 4,
}

const { ccclass, property } = cc._decorator;
@ccclass
export default class UIPTouchBase extends UIPControlBase {

    private startHandler: TouchHandler = null;
    private moveHandler: TouchHandler = null;
    private endHandler: TouchHandler = null;
    private cancelHander: TouchHandler = null;

    /** 是否可拖动 */
    private _canDrag: boolean;
    public get canDrag(): boolean {
        return this._canDrag;
    }
    public set canDrag(v: boolean) {
        this._canDrag = v;
    }

    /** 是否可拖入 */
    private _canDragIn: boolean;
    public get canDragIn(): boolean {
        return this._canDragIn;
    }
    public set canDragIn(v: boolean) {
        this._canDragIn = v;
    }

    /** 拖出区域节点 */
    private _dragFrom: cc.Node;
    public get dragFrom(): cc.Node {
        return this._dragFrom || this.node;
    }
    public set dragFrom(v: cc.Node) {
        this._dragFrom = v;
    }

    /** 拖入区域节点 */
    private _dragIn: cc.Node;
    public get dragIn(): cc.Node {
        return this._dragIn || this.node;
    }
    public set dragIn(v: cc.Node) {
        this._dragIn = v;
    }

    /** 是否发生拖动 */
    private _didDragMove: boolean = false;
    public get didDragMove(): boolean {
        return this._didDragMove;
    }
    public set didDragMove(v: boolean) {
        this._didDragMove = v;
    }

    protected onDestroy(): void {
        this.startHandler = null;
        this.moveHandler = null;
        this.endHandler = null;
        this.cancelHander = null;
        this.dragFrom = null;
        this.dragIn = null;
        super.onDestroy();
    }

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


    /** 判断是否拖入 */
    public checkIsMoveIn(posW: cc.Vec2) {
        let result = false;
        if (this.canDragIn) {
            let toBox = this.dragIn.getBoundingBox();
            let curPosL = this.node.parent.convertToNodeSpaceAR(posW);
            result = toBox.contains(curPosL);
        }
        return result;
    }

    /** 拖动事件 */
    public setTouchHandler(startHandler: TouchHandler, moveHandler: TouchHandler, endHandler: TouchHandler, cancelHander: TouchHandler) {
        this.startHandler = startHandler;
        this.moveHandler = moveHandler;
        this.endHandler = endHandler;
        this.cancelHander = cancelHander;
    }

    private onTouchStart(event: cc.Event.EventTouch): void {
        if (!this.canDrag) {
            return;
        }
        let fromBox = this.dragFrom.getBoundingBox();
        let curPosW = event.getLocation();
        let curPosL = this.node.parent.convertToNodeSpaceAR(curPosW);
        if (!fromBox.contains(curPosL)) {
            return;
        }
        this.didDragMove = false;
        this.startHandler && this.startHandler(event, this);
    }

    private onTouchMove(event: cc.Event.EventTouch): void {
        this.didDragMove = true;
        this.moveHandler && this.moveHandler(event, this);
    }

    private onTouchEnd(event: cc.Event.EventTouch): void {
        this.endHandler && this.endHandler(event, this);
    }

    private onTouchCancel(event: cc.Event.EventTouch): void {
        this.cancelHander && this.cancelHander(event, this);
    }

    /** 拖动状态 */
    public setDragState(state: MoveState) {
    }
}