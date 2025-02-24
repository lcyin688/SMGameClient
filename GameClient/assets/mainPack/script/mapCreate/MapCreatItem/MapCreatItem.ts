import { UIPControlBase } from './../../../../c2f-framework/gui/layer/UIPControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import MapCreatItemModel from './MapCreatItemModel';
import MapCreatItemView from './MapCreatItemView';
import { UIPa } from '../../../../Script/game/UIParam';

const { ccclass, property } = cc._decorator;
@ccclass
export default class MapCreatItem extends UIPControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_MapCreatItem';

    public model: MapCreatItemModel = undefined;
    public view: MapCreatItemView = undefined;


    protected onEnable(): void {
        if (super.onEnable) {
            super.onEnable();
        }
        this.on(C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    }

    protected onDisable(): void {
        if (super.onDisable) {
            super.onDisable();
        }
        this.off(C2FEnum.UIEvent.ButtonClick);
    }

    protected onLoad(): void {
        // 添加鼠标移动事件监听器
        this.node.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
    }

    private async onButtonClick(eventType: string, component: cc.Button) {
        switch (component.name) {

            case this.view.btnButton.name:
                this.CC_onClickbtn();
                break;

            default:
                break;
        }
    }


    private CC_onClickbtn() {
        if (this.model.data && this.model.data.cbFun) {
            this.model.data.cbFun(this.model.data)
        }
    }

    public setInit(data: UIPa.DesStarItemArgs) {
        this.model.initData(data)
        this.initView(data)
    }

    public initView(data: UIPa.DesStarItemArgs) {
        if (data.typ >= 0) {
            this.node.active = true
            c2f.utils.view.changeSpriteFrame(this.view.iconSprite, data.url)
        } else {
            this.node.active = false
        }
    }


    // 鼠标移动事件处理器
    onMouseMove(event) {
        if (szg.player.public.isMouseDown) {
            this.CC_onClickbtn()
        }
    }


}