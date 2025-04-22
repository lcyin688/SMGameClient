// This script is automatic generation, please do not edit.
// If you need add logic, please write in NhwcMainView.ts .
// If you need add data, please write in NhwcMainViewModel.ts .

import { UIViewBase } from './../../../../../c2f-framework/gui/layer/UIViewBase';
import CountdownLabel from "./../../../../../c2f-framework/component/common/CountdownLabel";


const { ccclass, property } = cc._decorator;
@ccclass
export default class NhwcMainView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'F_NhwcMain';

    public board: cc.Node;
    public boardSprite: cc.Sprite = undefined;
    public boardWidget: cc.Widget = undefined;
    public alarmClock: cc.Node;
    public alarmClockSprite: cc.Sprite = undefined;
    public time: cc.Node;
    public timeLabel: cc.Label = undefined;
    public timeCountdownLabel: CountdownLabel = undefined;
    public centerLabel: cc.Node;
    public centerLabelLabel: cc.Label = undefined;
    public exitBtn: cc.Node;
    public exitBtnButton: cc.Button = undefined;
    public prepare: cc.Node;
    public prepareWidget: cc.Widget = undefined;
    public prepareBtn: cc.Node;
    public prepareBtnSprite: cc.Sprite = undefined;
    public prepareBtnButton: cc.Button = undefined;
    public preparedBtn: cc.Node;
    public preparedBtnSprite: cc.Sprite = undefined;
    public seatLayPrepare: cc.Node;
    public seatLayPrepareLayout: cc.Layout = undefined;
    public desk: cc.Node;
    public deskSprite: cc.Sprite = undefined;
    public deskWidget: cc.Widget = undefined;
    public seatLayDesk: cc.Node;
    public seatLayDeskSprite: cc.Sprite = undefined;
    public seatLayDeskLayout: cc.Layout = undefined;
    public seatLayDeskWidget: cc.Widget = undefined;
    public answerBtn: cc.Node;
    public answerBtnSprite: cc.Sprite = undefined;
    public answerBtnButton: cc.Button = undefined;
    public tips: cc.Node;
    public tipsSprite: cc.Sprite = undefined;
    public tipInput: cc.Node;
    public tipInputEditBox: cc.EditBox = undefined;
    public tipConfirmBtn: cc.Node;
    public tipConfirmBtnSprite: cc.Sprite = undefined;
    public tipConfirmBtnButton: cc.Button = undefined;
    public tipCloseBtn: cc.Node;
    public tipCloseBtnSprite: cc.Sprite = undefined;
    public tipCloseBtnButton: cc.Button = undefined;
    public messagePanel: cc.Node;
    public messagePanelWidget: cc.Widget = undefined;
    public switch: cc.Node;
    public switchSprite: cc.Sprite = undefined;
    public switchButton: cc.Button = undefined;
    public switchWidget: cc.Widget = undefined;
    public switchAnimation: cc.Animation = undefined;
    public toolPanel: cc.Node;
    public toolPanelWidget: cc.Widget = undefined;
    public toolSwitch: cc.Node;
    public toolSwitchSprite: cc.Sprite = undefined;
    public toolSwitchButton: cc.Button = undefined;
    public toolSwitchWidget: cc.Widget = undefined;
    public overPanel: cc.Node;
    

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
        this.board = this.get('_board_');
        this.boardSprite = this.board.getComponent(cc.Sprite);
        this.boardWidget = this.board.getComponent(cc.Widget);
        this.alarmClock = this.get('_alarmClock_');
        this.alarmClockSprite = this.alarmClock.getComponent(cc.Sprite);
        this.time = this.get('_time_');
        this.timeLabel = this.time.getComponent(cc.Label);
        this.timeCountdownLabel = this.time.getComponent(CountdownLabel);
        this.centerLabel = this.get('_centerLabel_');
        this.centerLabelLabel = this.centerLabel.getComponent(cc.Label);
        this.exitBtn = this.get('_exitBtn_');
        this.exitBtnButton = this.exitBtn.getComponent(cc.Button);
        this.prepare = this.get('_prepare_');
        this.prepareWidget = this.prepare.getComponent(cc.Widget);
        this.prepareBtn = this.get('_prepareBtn_');
        this.prepareBtnSprite = this.prepareBtn.getComponent(cc.Sprite);
        this.prepareBtnButton = this.prepareBtn.getComponent(cc.Button);
        this.preparedBtn = this.get('_preparedBtn_');
        this.preparedBtnSprite = this.preparedBtn.getComponent(cc.Sprite);
        this.seatLayPrepare = this.get('_seatLayPrepare_');
        this.seatLayPrepareLayout = this.seatLayPrepare.getComponent(cc.Layout);
        this.desk = this.get('_desk_');
        this.deskSprite = this.desk.getComponent(cc.Sprite);
        this.deskWidget = this.desk.getComponent(cc.Widget);
        this.seatLayDesk = this.get('_seatLayDesk_');
        this.seatLayDeskSprite = this.seatLayDesk.getComponent(cc.Sprite);
        this.seatLayDeskLayout = this.seatLayDesk.getComponent(cc.Layout);
        this.seatLayDeskWidget = this.seatLayDesk.getComponent(cc.Widget);
        this.answerBtn = this.get('_answerBtn_');
        this.answerBtnSprite = this.answerBtn.getComponent(cc.Sprite);
        this.answerBtnButton = this.answerBtn.getComponent(cc.Button);
        this.tips = this.get('_tips_');
        this.tipsSprite = this.tips.getComponent(cc.Sprite);
        this.tipInput = this.get('_tipInput_');
        this.tipInputEditBox = this.tipInput.getComponent(cc.EditBox);
        this.tipConfirmBtn = this.get('_tipConfirmBtn_');
        this.tipConfirmBtnSprite = this.tipConfirmBtn.getComponent(cc.Sprite);
        this.tipConfirmBtnButton = this.tipConfirmBtn.getComponent(cc.Button);
        this.tipCloseBtn = this.get('_tipCloseBtn_');
        this.tipCloseBtnSprite = this.tipCloseBtn.getComponent(cc.Sprite);
        this.tipCloseBtnButton = this.tipCloseBtn.getComponent(cc.Button);
        this.messagePanel = this.get('_messagePanel_');
        this.messagePanelWidget = this.messagePanel.getComponent(cc.Widget);
        this.switch = this.get('_switch_');
        this.switchSprite = this.switch.getComponent(cc.Sprite);
        this.switchButton = this.switch.getComponent(cc.Button);
        this.switchWidget = this.switch.getComponent(cc.Widget);
        this.switchAnimation = this.switch.getComponent(cc.Animation);
        this.toolPanel = this.get('_toolPanel_');
        this.toolPanelWidget = this.toolPanel.getComponent(cc.Widget);
        this.toolSwitch = this.get('_toolSwitch_');
        this.toolSwitchSprite = this.toolSwitch.getComponent(cc.Sprite);
        this.toolSwitchButton = this.toolSwitch.getComponent(cc.Button);
        this.toolSwitchWidget = this.toolSwitch.getComponent(cc.Widget);
        this.overPanel = this.get('_overPanel_');
        
    }

    private addEvent() {
        this.exitBtnButton.node.on('click', this.onexitBtnButtonClick, this);
        this.prepareBtnButton.node.on('click', this.onprepareBtnButtonClick, this);
        this.answerBtnButton.node.on('click', this.onanswerBtnButtonClick, this);
        this.tipInputEditBox.node.on('editing-did-began', this.ontipInputEditBoxEditingBegan, this);
        this.tipInputEditBox.node.on('editing-did-ended', this.ontipInputEditBoxEditingEnded, this);
        this.tipInputEditBox.node.on('editing-return', this.ontipInputEditBoxEditingReturn, this);
        this.tipInputEditBox.node.on('text-changed', this.ontipInputEditBoxTextChanged, this);
        this.tipConfirmBtnButton.node.on('click', this.ontipConfirmBtnButtonClick, this);
        this.tipCloseBtnButton.node.on('click', this.ontipCloseBtnButtonClick, this);
        this.switchButton.node.on('click', this.onswitchButtonClick, this);
        this.toolSwitchButton.node.on('click', this.ontoolSwitchButtonClick, this);

    }

    private removeEvent() {
        this.exitBtnButton.node.off('click', this.onexitBtnButtonClick, this);
        this.prepareBtnButton.node.off('click', this.onprepareBtnButtonClick, this);
        this.answerBtnButton.node.off('click', this.onanswerBtnButtonClick, this);
        this.tipInputEditBox.node.off('editing-did-began', this.ontipInputEditBoxEditingBegan, this);
        this.tipInputEditBox.node.off('editing-did-ended', this.ontipInputEditBoxEditingEnded, this);
        this.tipInputEditBox.node.off('editing-return', this.ontipInputEditBoxEditingReturn, this);
        this.tipInputEditBox.node.off('text-changed', this.ontipInputEditBoxTextChanged, this);
        this.tipConfirmBtnButton.node.off('click', this.ontipConfirmBtnButtonClick, this);
        this.tipCloseBtnButton.node.off('click', this.ontipCloseBtnButtonClick, this);
        this.switchButton.node.off('click', this.onswitchButtonClick, this);
        this.toolSwitchButton.node.off('click', this.ontoolSwitchButtonClick, this);

    }

    private onexitBtnButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onprepareBtnButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onanswerBtnButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private ontipInputEditBoxEditingBegan(component: cc.EditBox) {
        this.emit('editing-did-began', component);
    }

    private ontipInputEditBoxEditingEnded(component: cc.EditBox) {
        this.emit('editing-did-ended', component);
    }

    private ontipInputEditBoxEditingReturn(component: cc.EditBox) {
        this.emit('editing-return', component);
    }

    private ontipInputEditBoxTextChanged(component: cc.EditBox) {
        this.emit('text-changed', component);
    }

    private ontipConfirmBtnButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private ontipCloseBtnButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onswitchButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private ontoolSwitchButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}