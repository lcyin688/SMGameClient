import { UIHelper } from "../../../../Script/game/UIHelper";
import { C2FConst } from "../../../define/C2FConst";



const { ccclass, property, menu } = cc._decorator;
@ccclass
@menu("c2f/UI/UIAudioEffect")
export default class UIAudioEffect extends cc.Component {

    @property({
        type: cc.Enum(C2FConst.UIAudioID),
        tooltip: "音效类型"
    })
    audioId = C2FConst.UIAudioID.unknown;

    @property({ tooltip: "点击时播放" })
    playOnClick: boolean = true;

    @property({ tooltip: "加载完成播放", visible: function () { return !this.playOnClick; } })
    playOnLoad: boolean = false;

    onLoad() {
        if (this.playOnClick) {
            this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchtStart, this);
            this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        } else if (this.playOnLoad) {

        }
    }

    onDestroy() {
        if (this.playOnClick) {
            this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchtStart, this);
            this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }
    }

    protected onTouchtStart(event: cc.Event.EventTouch) {
        UIHelper.playEffect("betClick")
    }

    protected onTouchEnd(event: cc.Event.EventTouch) {
    }


}