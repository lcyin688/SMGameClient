import { UIVControlBase } from './../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import WheelGameModel from './WheelGameModel';
import WheelGameView from './WheelGameView';
import HallGroupItem from '../HallGroupItem';
import { SmallToolDemoUI } from '../SmallToolDemoView';
import { SmallToolDemoCfg } from '../SmallToolDemoCfg';
import HallBannerArea from '../HallBannerArea/HallBannerArea';

const { ccclass, property } = cc._decorator;
@ccclass
export default class WheelGame extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_WheelGame';

    public model: WheelGameModel = undefined;
    public view: WheelGameView = undefined;

    protected onEnable(): void {
        if (super.onEnable) {
            super.onEnable();
        }
        this.on(C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    }
    protected onLoad(): void {
        this.forceLandscape();
    }
    // 强制切换为横屏
    private forceLandscape() {
        const frameSize = cc.view.getFrameSize();
        const width = frameSize.width > frameSize.height ? frameSize.width : frameSize.height;
        const height = frameSize.width > frameSize.height ? frameSize.height : frameSize.width;
        cc.view.setDesignResolutionSize(1280, 720, cc.ResolutionPolicy.FIXED_HEIGHT);
        cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
        cc.view.setFrameSize(width, height);
    }
    protected onDisable(): void {
        if (super.onDisable) {
            super.onDisable();
        }
        this.off(C2FEnum.UIEvent.ButtonClick);
    }

    private async onButtonClick(eventType: string, component: cc.Button) {
        switch (component.name) {
            case this.view.btnCircularMoveButton.name:
                this.CC_onClickbtnCircularMove();
                break;

            case this.view.btnJoinUsButton.name:
                this.CC_onClickbtnJoinUs();
                break;

            case this.view.btnTurnTableButton.name:
                this.CC_onClickbtnTurnTable();
                break;

            case this.view.btnGameListButton.name:
                this.CC_onClickbtnGameList();
                break;

            case this.view.btnSwitchLangButton.name:
                this.CC_onClickbtnSwitchLang();
                break;

            case this.view.btnSevenDayButton.name:
                this.CC_onClickbtnSevenDay();
                break;

            case this.view.btnVipButton.name:
                this.CC_onClickbtnVip();
                break;

            case this.view.btnBorderRadiusMaskButton.name:
                this.CC_onClickbtnBorderRadiusMask();
                break;

            case this.view.shopButton.name:
                this.CC_onClickshop();
                break;

            default:
                break;
        }
    }

    private CC_onClickbtnCircularMove() {
        c2f.gui.open(SmallToolDemoUI.ListCircularMove);
    }

    protected onViewOpen(param: any) {
        //转轮
        this.view.wheel_groupCenterWEWheelList.init(this.model.groupList.length, this.model.curGroupIndex, this.onSelectGroupWheelItem.bind(this));

        //banner
        this.initBanner();
    }

    private async initBanner() {
        let banner = (await c2f.res.loadOne(SmallToolDemoCfg.Prefab.hallBannerArea, cc.Prefab)) as cc.Prefab;
        let node = c2f.utils.view.instantiateMVCPrefab(banner, this.view.banner);
        this.view.banner.addChild(node);
        node.getComponent(HallBannerArea).onUpdateBanner();
    }

    private onSelectGroupWheelItem(arr: cc.Node[], c: number) {
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i].getComponent(HallGroupItem);
            item.init(this.model.groupList[i]);
            item.setState(i == c);
        }
        this.onSelectGroupItemFinal(c);
    }
    private onSelectGroupItemFinal(i: number) {
        c2f.log.log(' 当前选中的组索引为：', i);
    }

    private CC_onClickbtnJoinUs() {
        c2f.gui.open(SmallToolDemoUI.JoinUs);
        this.model.isShowWithDrawer = !this.model.isShowWithDrawer;
        this.onShowWithdraw(this.model.isShowWithDrawer);
    }

    private onShowWithdraw(isShow: boolean) {
        if (isShow === true) {
            this.view.withdraw.active = true;
        } else {
            this.view.withdraw.active = false;
        }
        // this.view.bottom.emit('size-changed');
        this.view.bottomWELayoutUpdate.updateLayout();
    }

    private onShowShop(isShow: boolean) {
        if (isShow === true) {
            this.view.shop.active = true;
        } else {
            this.view.shop.active = false;
        }
        // this.view.bottom.emit('size-changed');
        this.view.bottomWELayoutUpdate.updateLayout();
    }
    private CC_onClickshop() {
        this.model.isShowShop = !this.model.isShowShop;
        this.onShowShop(this.model.isShowShop);
    }
    private CC_onClickbtnTurnTable() {
        cc.log(' 点击了转盘按钮 0 ');
        c2f.gui.open(SmallToolDemoUI.Turntable);
        this.asyncTest();
    }

    public async asyncTest() {
        //异步延迟一秒
        c2f.log.log(' 点击了转盘按钮 001 ', Date.now());
        await new Promise((resolve) => setTimeout(resolve, 5000));
        c2f.log.log(' 点击了转盘按钮 002 ', Date.now());
    }
    private CC_onClickbtnGameList() {}

    private CC_onClickbtnSwitchLang() {
        c2f.gui.open(SmallToolDemoUI.SwitchLang);
    }
    private CC_onClickbtnSevenDay() {
        c2f.gui.open(SmallToolDemoUI.SevenDayMain);
    }
    private CC_onClickbtnVip() {
        c2f.gui.open(SmallToolDemoUI.VipMain);
    }
    private CC_onClickbtnBorderRadiusMask() {
        c2f.gui.open(SmallToolDemoUI.MonthSignRule);
    }
}
