import { UIPControlBase } from './../../../../../c2f-framework/gui/layer/UIPControlBase';
import { C2FEnum } from './../../../../../c2f-framework/define/C2FEnum';
import VipItemModel from './VipItemModel';
import VipItemView from './VipItemView';
import { SmallToolDemoUIPa } from '../../SmallToolDemoUIPa';

const { ccclass, property } = cc._decorator;
@ccclass
export default class VipItem extends UIPControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_VipItem';

    public model: VipItemModel = undefined;
    public view: VipItemView = undefined;

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

    private async onButtonClick(eventType: string, component: cc.Button) {
        switch (component.name) {
            case this.view.btnItemButton.name:
                this.CC_onClickbtnItem();
                break;

            default:
                break;
        }
    }

    private CC_onClickbtnItem() {
        this.model.data.callBackFun(this.model.data);
    }

    public init(args: SmallToolDemoUIPa.VipItemArg) {
        this.model.initData(args);
        c2f.utils.view.changeSpriteFrame(this.view.vipIconSprite, args.vipIcon);
        this.view.vipLevelLabel.string = 'LV:' + args.vipLevel.toString();
    }

    protected update(dt: number): void {
        let x = Math.abs(this.node.x + this.node.parent.x);
        let scale = 1 - x / (this.node.width * 5);
        this.node.scale = scale;
        let opacityScale = 1 - x / (this.node.width * 4);
        this.node.opacity = opacityScale * 255;
    }
}
