// This script is automatic generation, please do not edit.
// If you need add logic, please write in BoxGameMainView.ts .
// If you need add data, please write in BoxGameMainViewModel.ts .

import { UIViewBase } from './../../../c2f-framework/gui/layer/UIViewBase';
import CountdownLabel from "./../../../c2f-framework/component/common/CountdownLabel";
import LinkPrefab from "./../../../c2f-framework/component/common/LinkPrefab";
import BoxItem from "./../BoxItem/BoxItem";


const { ccclass, property } = cc._decorator;
@ccclass
export default class BoxGameMainView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'F_BoxGameMain';

    public btnClose: cc.Node;
    public btnCloseSprite: cc.Sprite = undefined;
    public btnCloseButton: cc.Button = undefined;
    public txt_time: cc.Node;
    public txt_timeLabel: cc.Label = undefined;
    public txt_timeCountdownLabel: CountdownLabel = undefined;
    public txt_1: cc.Node;
    public txt_1Label: cc.Label = undefined;
    public complete: cc.Node;
    public txt_com2: cc.Node;
    public txt_com2Label: cc.Label = undefined;
    public less: cc.Node;
    public txt_less: cc.Node;
    public txt_lessLabel: cc.Label = undefined;
    public txt_level: cc.Node;
    public txt_levelLabel: cc.Label = undefined;
    public box1: cc.Node;
    public box1LinkPrefab: LinkPrefab = undefined;
    public box1BoxItem: BoxItem = undefined;
    public box2: cc.Node;
    public box2LinkPrefab: LinkPrefab = undefined;
    public box2BoxItem: BoxItem = undefined;
    public box3: cc.Node;
    public box3LinkPrefab: LinkPrefab = undefined;
    public box3BoxItem: BoxItem = undefined;
    public btnStart: cc.Node;
    public btnStartButton: cc.Button = undefined;
    public txt_startCount: cc.Node;
    public txt_startCountLabel: cc.Label = undefined;
    public txt_count1: cc.Node;
    public txt_count1Label: cc.Label = undefined;
    public txt_count2: cc.Node;
    public txt_count2Label: cc.Label = undefined;
    public txt_count3: cc.Node;
    public txt_count3Label: cc.Label = undefined;
    public boxBtn: cc.Node;
    public boxBtnSprite: cc.Sprite = undefined;
    public boxBtnButton: cc.Button = undefined;
    public txt_ad: cc.Node;
    public txt_adLabel: cc.Label = undefined;
    

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
        this.btnCloseSprite = this.btnClose.getComponent(cc.Sprite);
        this.btnCloseButton = this.btnClose.getComponent(cc.Button);
        this.txt_time = this.get('_txt_time_');
        this.txt_timeLabel = this.txt_time.getComponent(cc.Label);
        this.txt_timeCountdownLabel = this.txt_time.getComponent(CountdownLabel);
        this.txt_1 = this.get('_txt_1_');
        this.txt_1Label = this.txt_1.getComponent(cc.Label);
        this.complete = this.get('_complete_');
        this.txt_com2 = this.get('_txt_com2_');
        this.txt_com2Label = this.txt_com2.getComponent(cc.Label);
        this.less = this.get('_less_');
        this.txt_less = this.get('_txt_less_');
        this.txt_lessLabel = this.txt_less.getComponent(cc.Label);
        this.txt_level = this.get('_txt_level_');
        this.txt_levelLabel = this.txt_level.getComponent(cc.Label);
        this.box1 = this.get('_box1_');
        this.box1LinkPrefab = this.box1.getComponent(LinkPrefab);
        this.box1BoxItem = this.box1.getComponent(LinkPrefab).getComponentEx(BoxItem);
        this.box2 = this.get('_box2_');
        this.box2LinkPrefab = this.box2.getComponent(LinkPrefab);
        this.box2BoxItem = this.box2.getComponent(LinkPrefab).getComponentEx(BoxItem);
        this.box3 = this.get('_box3_');
        this.box3LinkPrefab = this.box3.getComponent(LinkPrefab);
        this.box3BoxItem = this.box3.getComponent(LinkPrefab).getComponentEx(BoxItem);
        this.btnStart = this.get('_btnStart_');
        this.btnStartButton = this.btnStart.getComponent(cc.Button);
        this.txt_startCount = this.get('_txt_startCount_');
        this.txt_startCountLabel = this.txt_startCount.getComponent(cc.Label);
        this.txt_count1 = this.get('_txt_count1_');
        this.txt_count1Label = this.txt_count1.getComponent(cc.Label);
        this.txt_count2 = this.get('_txt_count2_');
        this.txt_count2Label = this.txt_count2.getComponent(cc.Label);
        this.txt_count3 = this.get('_txt_count3_');
        this.txt_count3Label = this.txt_count3.getComponent(cc.Label);
        this.boxBtn = this.get('_boxBtn_');
        this.boxBtnSprite = this.boxBtn.getComponent(cc.Sprite);
        this.boxBtnButton = this.boxBtn.getComponent(cc.Button);
        this.txt_ad = this.get('_txt_ad_');
        this.txt_adLabel = this.txt_ad.getComponent(cc.Label);
        
    }

    private addEvent() {
        this.btnCloseButton.node.on('click', this.onbtnCloseButtonClick, this);
        this.btnStartButton.node.on('click', this.onbtnStartButtonClick, this);
        this.boxBtnButton.node.on('click', this.onboxBtnButtonClick, this);

    }

    private removeEvent() {
        this.btnCloseButton.node.off('click', this.onbtnCloseButtonClick, this);
        this.btnStartButton.node.off('click', this.onbtnStartButtonClick, this);
        this.boxBtnButton.node.off('click', this.onboxBtnButtonClick, this);

    }

    private onbtnCloseButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onbtnStartButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onboxBtnButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}