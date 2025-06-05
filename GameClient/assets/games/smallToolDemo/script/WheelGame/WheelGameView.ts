// This script is automatic generation, please do not edit.
// If you need add logic, please write in WheelGameView.ts .
// If you need add data, please write in WheelGameViewModel.ts .

import { UIViewBase } from './../../../../c2f-framework/gui/layer/UIViewBase';
import WEWheelList from "./../../../../entrance/script/extend/ui/WEWheelList";
import WELayoutUpdate from "./../../../../entrance/script/extend/ui/WELayoutUpdate";


const { ccclass, property } = cc._decorator;
@ccclass
export default class WheelGameView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'F_WheelGame';

    public wheel_groupCenter: cc.Node;
    public wheel_groupCenterWidget: cc.Widget = undefined;
    public wheel_groupCenterWEWheelList: WEWheelList = undefined;
    public btnCircularMove: cc.Node;
    public btnCircularMoveButton: cc.Button = undefined;
    public btnJoinUs: cc.Node;
    public btnJoinUsButton: cc.Button = undefined;
    public btnTurnTable: cc.Node;
    public btnTurnTableButton: cc.Button = undefined;
    public bottom: cc.Node;
    public bottomWidget: cc.Widget = undefined;
    public bottomWELayoutUpdate: WELayoutUpdate = undefined;
    public withdraw: cc.Node;
    public withdrawWidget: cc.Widget = undefined;
    public shop: cc.Node;
    public shopWidget: cc.Widget = undefined;
    public shopButton: cc.Button = undefined;
    public banner: cc.Node;
    public bannerWidget: cc.Widget = undefined;
    

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
        this.wheel_groupCenter = this.get('_wheel_groupCenter_');
        this.wheel_groupCenterWidget = this.wheel_groupCenter.getComponent(cc.Widget);
        this.wheel_groupCenterWEWheelList = this.wheel_groupCenter.getComponent(WEWheelList);
        this.btnCircularMove = this.get('_btnCircularMove_');
        this.btnCircularMoveButton = this.btnCircularMove.getComponent(cc.Button);
        this.btnJoinUs = this.get('_btnJoinUs_');
        this.btnJoinUsButton = this.btnJoinUs.getComponent(cc.Button);
        this.btnTurnTable = this.get('_btnTurnTable_');
        this.btnTurnTableButton = this.btnTurnTable.getComponent(cc.Button);
        this.bottom = this.get('_bottom_');
        this.bottomWidget = this.bottom.getComponent(cc.Widget);
        this.bottomWELayoutUpdate = this.bottom.getComponent(WELayoutUpdate);
        this.withdraw = this.get('_withdraw_');
        this.withdrawWidget = this.withdraw.getComponent(cc.Widget);
        this.shop = this.get('_shop_');
        this.shopWidget = this.shop.getComponent(cc.Widget);
        this.shopButton = this.shop.getComponent(cc.Button);
        this.banner = this.get('_banner_');
        this.bannerWidget = this.banner.getComponent(cc.Widget);
        
    }

    private addEvent() {
        this.btnCircularMoveButton.node.on('click', this.onbtnCircularMoveButtonClick, this);
        this.btnJoinUsButton.node.on('click', this.onbtnJoinUsButtonClick, this);
        this.btnTurnTableButton.node.on('click', this.onbtnTurnTableButtonClick, this);
        this.shopButton.node.on('click', this.onshopButtonClick, this);

    }

    private removeEvent() {
        this.btnCircularMoveButton.node.off('click', this.onbtnCircularMoveButtonClick, this);
        this.btnJoinUsButton.node.off('click', this.onbtnJoinUsButtonClick, this);
        this.btnTurnTableButton.node.off('click', this.onbtnTurnTableButtonClick, this);
        this.shopButton.node.off('click', this.onshopButtonClick, this);

    }

    private onbtnCircularMoveButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onbtnJoinUsButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onbtnTurnTableButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onshopButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}