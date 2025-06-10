// This script is automatic generation, please do not edit.
// If you need add logic, please write in HallGameItemView.ts .
// If you need add data, please write in HallGameItemViewModel.ts .

import { UIPanelBase } from './../../../../c2f-framework/gui/layer/UIPanelBase';
import GradientColor from "./../../../../c2f-framework/component/common/GradientColor";
import WESpriteIndex from "./../../../../entrance/script/extend/ui/WESpriteIndex";
import WESwitchPage from "./../../../../entrance/script/extend/pageview/WESwitchPage";


const { ccclass, property } = cc._decorator;
@ccclass
export default class HallGameItemView extends UIPanelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_HallGameItem';

    public anim: cc.Node;
    public animSkeleton: sp.Skeleton = undefined;
    public icon: cc.Node;
    public iconSprite: cc.Sprite = undefined;
    public iconWidget: cc.Widget = undefined;
    public lab_name: cc.Node;
    public lab_nameLabel: cc.Label = undefined;
    public lab_nameWidget: cc.Widget = undefined;
    public lab_nameLabelOutline: cc.LabelOutline = undefined;
    public lab_nameGradientColor: GradientColor = undefined;
    public topName: cc.Node;
    public topNameLabel: cc.Label = undefined;
    public topNameLabelOutline: cc.LabelOutline = undefined;
    public topNameGradientColor: GradientColor = undefined;
    public topNameWidget: cc.Widget = undefined;
    public bottomName: cc.Node;
    public bottomNameLabel: cc.Label = undefined;
    public bottomNameLabelOutline: cc.LabelOutline = undefined;
    public bottomNameGradientColor: GradientColor = undefined;
    public bottomNameWidget: cc.Widget = undefined;
    public vendor: cc.Node;
    public vendorSprite: cc.Sprite = undefined;
    public jackpot: cc.Node;
    public jackpotSkeleton: sp.Skeleton = undefined;
    public jackpotWidget: cc.Widget = undefined;
    public lab_jackpot: cc.Node;
    public lab_jackpotLabel: cc.Label = undefined;
    public lab_jackpotLabelOutline: cc.LabelOutline = undefined;
    public limit: cc.Node;
    public limitSprite: cc.Sprite = undefined;
    public limitWESpriteIndex: WESpriteIndex = undefined;
    public limitIcon: cc.Node;
    public limitIconSprite: cc.Sprite = undefined;
    public limitIconWidget: cc.Widget = undefined;
    public viplock2: cc.Node;
    public viplock2Sprite: cc.Sprite = undefined;
    public viplock2Widget: cc.Widget = undefined;
    public limitText: cc.Node;
    public limitTextLabel: cc.Label = undefined;
    public limitTextWidget: cc.Widget = undefined;
    public limitTextLabelOutline: cc.LabelOutline = undefined;
    public guide: cc.Node;
    public guideSkeleton: sp.Skeleton = undefined;
    public switchTag: cc.Node;
    public switchTagWESwitchPage: WESwitchPage = undefined;
    public btnItem: cc.Node;
    public btnItemButton: cc.Button = undefined;
    

    public onLoad() {
        super.onLoad();
    }

    public onEnable() {
        if (super.onEnable) {
            super.onEnable();
        }
        this.addEvent();
    }

    public onDisable() {
        if (super.onDisable) {
            super.onDisable();
        }
        this.removeEvent();
    } 

    protected initProperty() {
        super.initProperty();
        this.anim = this.get('_anim_');
        this.animSkeleton = this.anim.getComponent(sp.Skeleton);
        this.icon = this.get('_icon_');
        this.iconSprite = this.icon.getComponent(cc.Sprite);
        this.iconWidget = this.icon.getComponent(cc.Widget);
        this.lab_name = this.get('_lab_name_');
        this.lab_nameLabel = this.lab_name.getComponent(cc.Label);
        this.lab_nameWidget = this.lab_name.getComponent(cc.Widget);
        this.lab_nameLabelOutline = this.lab_name.getComponent(cc.LabelOutline);
        this.lab_nameGradientColor = this.lab_name.getComponent(GradientColor);
        this.topName = this.get('_topName_');
        this.topNameLabel = this.topName.getComponent(cc.Label);
        this.topNameLabelOutline = this.topName.getComponent(cc.LabelOutline);
        this.topNameGradientColor = this.topName.getComponent(GradientColor);
        this.topNameWidget = this.topName.getComponent(cc.Widget);
        this.bottomName = this.get('_bottomName_');
        this.bottomNameLabel = this.bottomName.getComponent(cc.Label);
        this.bottomNameLabelOutline = this.bottomName.getComponent(cc.LabelOutline);
        this.bottomNameGradientColor = this.bottomName.getComponent(GradientColor);
        this.bottomNameWidget = this.bottomName.getComponent(cc.Widget);
        this.vendor = this.get('_vendor_');
        this.vendorSprite = this.vendor.getComponent(cc.Sprite);
        this.jackpot = this.get('_jackpot_');
        this.jackpotSkeleton = this.jackpot.getComponent(sp.Skeleton);
        this.jackpotWidget = this.jackpot.getComponent(cc.Widget);
        this.lab_jackpot = this.get('_lab_jackpot_');
        this.lab_jackpotLabel = this.lab_jackpot.getComponent(cc.Label);
        this.lab_jackpotLabelOutline = this.lab_jackpot.getComponent(cc.LabelOutline);
        this.limit = this.get('_limit_');
        this.limitSprite = this.limit.getComponent(cc.Sprite);
        this.limitWESpriteIndex = this.limit.getComponent(WESpriteIndex);
        this.limitIcon = this.get('_limitIcon_');
        this.limitIconSprite = this.limitIcon.getComponent(cc.Sprite);
        this.limitIconWidget = this.limitIcon.getComponent(cc.Widget);
        this.viplock2 = this.get('_viplock2_');
        this.viplock2Sprite = this.viplock2.getComponent(cc.Sprite);
        this.viplock2Widget = this.viplock2.getComponent(cc.Widget);
        this.limitText = this.get('_limitText_');
        this.limitTextLabel = this.limitText.getComponent(cc.Label);
        this.limitTextWidget = this.limitText.getComponent(cc.Widget);
        this.limitTextLabelOutline = this.limitText.getComponent(cc.LabelOutline);
        this.guide = this.get('_guide_');
        this.guideSkeleton = this.guide.getComponent(sp.Skeleton);
        this.switchTag = this.get('_switchTag_');
        this.switchTagWESwitchPage = this.switchTag.getComponent(WESwitchPage);
        this.btnItem = this.get('_btnItem_');
        this.btnItemButton = this.btnItem.getComponent(cc.Button);
        
    }

    private addEvent() {
        this.btnItemButton.node.on('click', this.onbtnItemButtonClick, this);

    }

    private removeEvent() {
        this.btnItemButton.node.off('click', this.onbtnItemButtonClick, this);

    }

    private onbtnItemButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}