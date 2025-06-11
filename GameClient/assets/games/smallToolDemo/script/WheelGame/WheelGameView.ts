// This script is automatic generation, please do not edit.
// If you need add logic, please write in WheelGameView.ts .
// If you need add data, please write in WheelGameViewModel.ts .

import { UIViewBase } from './../../../../c2f-framework/gui/layer/UIViewBase';
import WEWheelList from "./../../../../entrance/script/extend/ui/WEWheelList";
import WELayoutUpdate from "./../../../../entrance/script/extend/ui/WELayoutUpdate";
import yxCollectionView from "./../../../../entrance/script/extend/yx_list/yxCollectionView";


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
    public btnGameList: cc.Node;
    public btnGameListButton: cc.Button = undefined;
    public btnSwitchLang: cc.Node;
    public btnSwitchLangButton: cc.Button = undefined;
    public btnSevenDay: cc.Node;
    public btnSevenDayButton: cc.Button = undefined;
    public btnVip: cc.Node;
    public btnVipButton: cc.Button = undefined;
    public btnBorderRadiusMask: cc.Node;
    public btnBorderRadiusMaskButton: cc.Button = undefined;
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
    public games: cc.Node;
    public gamesWidget: cc.Widget = undefined;
    public gamesyxCollectionView: yxCollectionView = undefined;
    public btnLeft: cc.Node;
    public btnLeftButton: cc.Button = undefined;
    public btnLeftWidget: cc.Widget = undefined;
    public btnRight: cc.Node;
    public btnRightButton: cc.Button = undefined;
    public btnRightWidget: cc.Widget = undefined;
    

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
        this.btnGameList = this.get('_btnGameList_');
        this.btnGameListButton = this.btnGameList.getComponent(cc.Button);
        this.btnSwitchLang = this.get('_btnSwitchLang_');
        this.btnSwitchLangButton = this.btnSwitchLang.getComponent(cc.Button);
        this.btnSevenDay = this.get('_btnSevenDay_');
        this.btnSevenDayButton = this.btnSevenDay.getComponent(cc.Button);
        this.btnVip = this.get('_btnVip_');
        this.btnVipButton = this.btnVip.getComponent(cc.Button);
        this.btnBorderRadiusMask = this.get('_btnBorderRadiusMask_');
        this.btnBorderRadiusMaskButton = this.btnBorderRadiusMask.getComponent(cc.Button);
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
        this.games = this.get('_games_');
        this.gamesWidget = this.games.getComponent(cc.Widget);
        this.gamesyxCollectionView = this.games.getComponent(yxCollectionView);
        this.btnLeft = this.get('_btnLeft_');
        this.btnLeftButton = this.btnLeft.getComponent(cc.Button);
        this.btnLeftWidget = this.btnLeft.getComponent(cc.Widget);
        this.btnRight = this.get('_btnRight_');
        this.btnRightButton = this.btnRight.getComponent(cc.Button);
        this.btnRightWidget = this.btnRight.getComponent(cc.Widget);
        
    }

    private addEvent() {
        this.btnCircularMoveButton.node.on('click', this.onbtnCircularMoveButtonClick, this);
        this.btnJoinUsButton.node.on('click', this.onbtnJoinUsButtonClick, this);
        this.btnTurnTableButton.node.on('click', this.onbtnTurnTableButtonClick, this);
        this.btnGameListButton.node.on('click', this.onbtnGameListButtonClick, this);
        this.btnSwitchLangButton.node.on('click', this.onbtnSwitchLangButtonClick, this);
        this.btnSevenDayButton.node.on('click', this.onbtnSevenDayButtonClick, this);
        this.btnVipButton.node.on('click', this.onbtnVipButtonClick, this);
        this.btnBorderRadiusMaskButton.node.on('click', this.onbtnBorderRadiusMaskButtonClick, this);
        this.shopButton.node.on('click', this.onshopButtonClick, this);
        this.btnLeftButton.node.on('click', this.onbtnLeftButtonClick, this);
        this.btnRightButton.node.on('click', this.onbtnRightButtonClick, this);

    }

    private removeEvent() {
        this.btnCircularMoveButton.node.off('click', this.onbtnCircularMoveButtonClick, this);
        this.btnJoinUsButton.node.off('click', this.onbtnJoinUsButtonClick, this);
        this.btnTurnTableButton.node.off('click', this.onbtnTurnTableButtonClick, this);
        this.btnGameListButton.node.off('click', this.onbtnGameListButtonClick, this);
        this.btnSwitchLangButton.node.off('click', this.onbtnSwitchLangButtonClick, this);
        this.btnSevenDayButton.node.off('click', this.onbtnSevenDayButtonClick, this);
        this.btnVipButton.node.off('click', this.onbtnVipButtonClick, this);
        this.btnBorderRadiusMaskButton.node.off('click', this.onbtnBorderRadiusMaskButtonClick, this);
        this.shopButton.node.off('click', this.onshopButtonClick, this);
        this.btnLeftButton.node.off('click', this.onbtnLeftButtonClick, this);
        this.btnRightButton.node.off('click', this.onbtnRightButtonClick, this);

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

    private onbtnGameListButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onbtnSwitchLangButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onbtnSevenDayButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onbtnVipButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onbtnBorderRadiusMaskButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onshopButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onbtnLeftButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onbtnRightButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}