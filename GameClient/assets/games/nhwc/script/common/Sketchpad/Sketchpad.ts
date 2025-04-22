import { UIPControlBase } from './../../../../../c2f-framework/gui/layer/UIPControlBase';
import { C2FEnum } from './../../../../../c2f-framework/define/C2FEnum';
import  SketchpadModel from './SketchpadModel';
import  SketchpadView from './SketchpadView';

const { ccclass, property } = cc._decorator;
@ccclass
export default class Sketchpad extends UIPControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_Sketchpad';

    public model: SketchpadModel = undefined;
    public view: SketchpadView = undefined;

    public setLineWidth(w:number) {
        this.view.penGraphics.lineWidth = w;
        this.view.penGraphics.lineCap = cc.Graphics.LineCap.ROUND;
        this.view.penGraphics.lineJoin = cc.Graphics.LineJoin.ROUND;
    }

    public getLineWidth():number{
        return this.view.penGraphics.lineWidth;
    }

    public setPenColor(hex:string) {
        let colorFromHex = cc.color().fromHEX(hex);
        this.view.penGraphics.strokeColor =colorFromHex;
        this.view.penGraphics.lineCap = cc.Graphics.LineCap.ROUND;
        this.view.penGraphics.lineJoin = cc.Graphics.LineJoin.ROUND;
    }

    public getPenColor():string {
        return "#"+this.view.penGraphics.strokeColor.toHEX("#rrggbb");
    }


    public enableDraw() {
        this.node.parent.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        this.model.isDrawing = true;
        this.view.penImg.active = true;
        this.view.penGraphics.lineWidth = 10;
        this.view.penGraphics.strokeColor = cc.Color.BLACK;
        this.view.penGraphics.lineCap = cc.Graphics.LineCap.ROUND;
        this.view.penGraphics.lineJoin = cc.Graphics.LineJoin.ROUND;
    }

    public disableDraw() {
        this.node.parent.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.parent.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.parent.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.parent.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        this.model.isDrawing = false;
        this.view.penImg.active = false;
        this.view.penGraphics.lineWidth = 10;
        this.view.penGraphics.strokeColor = cc.Color.BLACK;
        this.view.penGraphics.lineCap = cc.Graphics.LineCap.ROUND;
        this.view.penGraphics.lineJoin = cc.Graphics.LineJoin.ROUND;
    }

    public clear() {
        let width = this.view.penGraphics.lineWidth;
        let color = this.view.penGraphics.strokeColor;
        this.view.penGraphics.clear();
        this.view.penGraphics.lineCap = cc.Graphics.LineCap.ROUND;
        this.view.penGraphics.lineJoin = cc.Graphics.LineJoin.ROUND;
        this.view.penGraphics.lineWidth = width;
        this.view.penGraphics.strokeColor = color;
    }

    public savePoint(p:cc.Vec2,isStart:boolean) {
        this.model.path.push({p:p,isStart:isStart});
    }

    public popPath():Array<{p:cc.Vec2,isStart:boolean}> {
        let path = this.model.path.slice();
        this.model.path = [];
        return path;
    }

    public drawByPath(pointArr: msg.NHWCPoint[]) {
        let path: Array<{p:cc.Vec2,isStart:boolean}>=[]
        for (let i = 0; i < pointArr.length; i++) {
            let item = pointArr[i];
            path.push({p:cc.v2(item.v2.x,item.v2.y),isStart:item.isStart})
        }
        this.drawByPathFinal(path)
    }


    public drawByPathFinal(path: Array<{p:cc.Vec2,isStart:boolean}>) {
        for (let i = 0; i < path.length; i++) {
            let {p,isStart} = path[i];
            if(isStart) {
                this.view.penGraphics.moveTo(p.x,p.y);
            }else{
                this.view.penGraphics.lineTo(p.x, p.y)
                this.view.penGraphics.stroke();
                this.view.penGraphics.moveTo(p.x,p.y);
            }
            
        }
    }

    private onTouchStart(e: cc.Event.EventTouch) {
        let localPosition = this.node.convertToNodeSpaceAR(cc.v2(e.getLocation()));
        this.view.penImg.active = true;
        this.view.penImg.setPosition(localPosition)
        this.view.penGraphics.moveTo(localPosition.x, localPosition.y);
        this.savePoint(cc.v2(localPosition.x, localPosition.y),true);
    }

    private onTouchMove(e: cc.Event.EventTouch) {
        let localPosition = this.node.convertToNodeSpaceAR(cc.v2(e.getLocation()));
        this.view.penImg.setPosition(localPosition)
        this.view.penGraphics.lineTo(localPosition.x, localPosition.y);
        this.view.penGraphics.stroke();
        this.view.penGraphics.moveTo(localPosition.x, localPosition.y);
        this.savePoint(cc.v2(localPosition.x,localPosition.y),false);
    }

    private onTouchEnd(e: cc.Event.EventTouch) {
        this.view.penImg.active = false;
    }

    private onTouchCancel(e: cc.Event.EventTouch) {
        this.view.penImg.active = false;
    }


}