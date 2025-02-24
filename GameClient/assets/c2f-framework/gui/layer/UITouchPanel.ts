
import UIPTouchBase, { MoveState } from './UIPTouchBase';

type DragObjFunc = (event: cc.Event.EventTouch, touchObj: UIPTouchBase) => void;

const { ccclass, property } = cc._decorator;
@ccclass
export class UITouchPanel {

    /** 创建拖动对象 */
    private _createDragObj: DragObjFunc;
    public get createDragObj(): DragObjFunc {
        return this._createDragObj;
    }
    public set createDragObj(v: DragObjFunc) {
        this._createDragObj = v;
    }

    /** 拖动结束 */

    private _exchangeDragObj: DragObjFunc;
    public get exchangeDragObj(): DragObjFunc {
        return this._exchangeDragObj;
    }
    public set exchangeDragObj(v: DragObjFunc) {
        this._exchangeDragObj = v;
    }

    /** 当前正在拖动的对象 */
    private _moving: UIPTouchBase = null;
    public get moving(): UIPTouchBase {
        return this._moving;
    }
    public set moving(v: UIPTouchBase) {
        this._moving = v;
    }

    /** 拖动的出发点对象 */
    private _moveFrom: UIPTouchBase = null;
    public get moveFrom(): UIPTouchBase {
        return this._moveFrom;
    }
    public set moveFrom(v: UIPTouchBase) {
        this._moveFrom = v;
    }

    /** 拖动的拖入点对象 */
    private _moveTo: UIPTouchBase = null;
    public get moveTo(): UIPTouchBase {
        return this._moveTo;
    }
    public set moveTo(v: UIPTouchBase) {
        this._moveTo = v;
    }

    /** 可拖动对象 */
    private arrDragObj: UIPTouchBase[] = [];


    public onDestroy() {
        this.createDragObj = null;
        this.exchangeDragObj = null;
        this.moving = null;
        this.moveFrom = null;
        this.moveTo = null;
        this.arrDragObj = [];
    }

    /** 设置可拖动列表 */
    public setDragObjList(list: UIPTouchBase[]) {
        this.arrDragObj = list;
    }

    public onVCTouchStart(event: cc.Event.EventTouch, touchObj: UIPTouchBase) {
        if (this.moving && this.moving.isValid) {
            this.moving.destroy();
        }
        touchObj.setDragState(MoveState.moveOut);
        this.moveFrom = touchObj;

        this.createDragObj && this.createDragObj(event, touchObj)
    }

    public onVCTouchMove(event: cc.Event.EventTouch, touchObj: UIPTouchBase) {
        if (!this.moving) {
            return;
        }
        let delta = event.touch.getDelta();
        this.moving.node.x += delta.x;
        this.moving.node.y += delta.y;

        //判断是否拖入到某个位置
        let moveInObj: UIPTouchBase = null;
        let posW = event.getLocation();
        for (let one of this.arrDragObj) {
            let isRect = one.checkIsMoveIn(posW);
            if (isRect) {
                moveInObj = one;
                break;
            }
        }
        if (this.moveTo == moveInObj) {
            return;
        }
        if (this.moveFrom == moveInObj) {
            return;
        }
        if (this.moveTo) {
            this.moveTo.setDragState(MoveState.normal);
            this.moveTo = null;
        }
        if (moveInObj) {
            moveInObj.setDragState(MoveState.moveIn);
            this.moveTo = moveInObj;
        }
    }

    public onVCTouchEnd(event: cc.Event.EventTouch, touchObj: UIPTouchBase) {
        if (!this.moving || !this.moving.isValid) {
            return;
        }
        this.exchangeDragObj && this.exchangeDragObj(event, touchObj);
        this.moving.node.destroy();
        this.moving = null;
        if (this.moveFrom) {
            this.moveFrom.setDragState(MoveState.normal);
            this.moveFrom = null;
        }
        if (this.moveTo) {
            this.moveTo.setDragState(MoveState.normal);
            this.moveTo = null;
        }
    }
}