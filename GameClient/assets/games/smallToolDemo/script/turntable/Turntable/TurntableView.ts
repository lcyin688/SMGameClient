// This script is automatic generation, please do not edit.
// If you need add logic, please write in TurntableView.ts .
// If you need add data, please write in TurntableViewModel.ts .

import { UIViewBase } from './../../../../../c2f-framework/gui/layer/UIViewBase';
import CountdownLabel from "./../../../../../c2f-framework/component/common/CountdownLabel";


const { ccclass, property } = cc._decorator;
@ccclass
export default class TurntableView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'V_Turntable';

    public btnClose: cc.Node;
    public btnCloseButton: cc.Button = undefined;
    public turntableInside: cc.Node;
    public turntableInsideSprite: cc.Sprite = undefined;
    public btnSpin: cc.Node;
    public btnSpinButton: cc.Button = undefined;
    public lab_spinCount: cc.Node;
    public lab_spinCountLabel: cc.Label = undefined;
    public lab_spinCountLabelOutline: cc.LabelOutline = undefined;
    public btnSpinAnim: cc.Node;
    public btnSpinAnimSkeleton: sp.Skeleton = undefined;
    public lab_time: cc.Node;
    public lab_timeLabel: cc.Label = undefined;
    public lab_timeCountdownLabel: CountdownLabel = undefined;
    

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
        this.btnClose = this.get('_btnClose_');
        this.btnCloseButton = this.btnClose.getComponent(cc.Button);
        this.turntableInside = this.get('_turntableInside_');
        this.turntableInsideSprite = this.turntableInside.getComponent(cc.Sprite);
        this.btnSpin = this.get('_btnSpin_');
        this.btnSpinButton = this.btnSpin.getComponent(cc.Button);
        this.lab_spinCount = this.get('_lab_spinCount_');
        this.lab_spinCountLabel = this.lab_spinCount.getComponent(cc.Label);
        this.lab_spinCountLabelOutline = this.lab_spinCount.getComponent(cc.LabelOutline);
        this.btnSpinAnim = this.get('_btnSpinAnim_');
        this.btnSpinAnimSkeleton = this.btnSpinAnim.getComponent(sp.Skeleton);
        this.lab_time = this.get('_lab_time_');
        this.lab_timeLabel = this.lab_time.getComponent(cc.Label);
        this.lab_timeCountdownLabel = this.lab_time.getComponent(CountdownLabel);
        
    }

    private addEvent() {
        this.btnCloseButton.node.on('click', this.onbtnCloseButtonClick, this);
        this.btnSpinButton.node.on('click', this.onbtnSpinButtonClick, this);

    }

    private removeEvent() {
        this.btnCloseButton.node.off('click', this.onbtnCloseButtonClick, this);
        this.btnSpinButton.node.off('click', this.onbtnSpinButtonClick, this);

    }

    private onbtnCloseButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onbtnSpinButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}