import { UIVControlBase } from './../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import WheelGameModel from './WheelGameModel';
import WheelGameView from './WheelGameView';
import HallGroupItem from '../HallGroupItem';
import { SmallToolDemoUI } from '../SmallToolDemoView';
import { SmallToolDemoCfg } from '../SmallToolDemoCfg';
import HallBannerArea from '../HallBannerArea/HallBannerArea';
import HallGameItem from '../HallGameItem/HallGameItem';

const { ccclass, property } = cc._decorator;
@ccclass
export default class WheelGame extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_WheelGame';

    public model: WheelGameModel = undefined;
    public view: WheelGameView = undefined;
    @property(cc.Prefab)
    private hallGameItem: cc.Prefab = null;
    @property({
        tooltip: CC_DEV && '元素之间垂直间距',
    })
    public GameItemVerticalSpacing: number = 14;

    @property({
        tooltip: CC_DEV && '元素之间水平间距',
    })
    public GameItemHorizontalSpacing: number = 15;
    @property({
        tooltip: CC_DEV && '大厅游戏 icon 大图标尺寸',
    })
    public GameItemBigSize: cc.Size = new cc.Size(212, 415);

    @property({
        tooltip: CC_DEV && '大厅游戏 icon 小图标尺寸',
    })
    public GameItemSmallSize: cc.Size = new cc.Size(200, 200);

    protected onEnable(): void {
        if (super.onEnable) {
            super.onEnable();
        }
        this.on(C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    }
    protected onLoad(): void {
        this.forceLandscape();
        this.view.gamesWidget?.updateAlignment();
        //初始化游戏列表数据
        this.model.initGameList(this.clickGameItem.bind(this));
    }

    protected start(): void {
        // games list
        this.view.gamesWidget?.updateAlignment();
        this.view.games.off(`scrolling`, this.onScrolling, this);
        this.view.games.on(`scrolling`, this.onScrolling, this);
        this.createGameList();
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

            case this.view.btnQrCodeButton.name:
                this.CC_onClickbtnQrCode();
                break;

            case this.view.btnTogContainerButton.name:
                this.CC_onClickbtnTogContainer();
                break;

            case this.view.btnLeftButton.name:
                this.CC_onClickbtnLeft();
                break;

            case this.view.btnRightButton.name:
                this.CC_onClickbtnRight();
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
        if (i == null) {
            return;
        }
        c2f.log.log(' 当前选中的组索引为：', i);
        this.view.gamesyxCollectionView.scrollView.stopAutoScroll();
        let scrollTo = 0;
        if (i <= 1) {
            scrollTo = 0;
        } else if (i >= 2) {
            scrollTo = i - 1;
        }
        this.model.curGroupIndex = i;
        if (this.view.gamesyxCollectionView.layout) {
            this.model.curGameList = this.model.getHallGameList(this.model.groupList[i]);
            this.view.gamesyxCollectionView.numberOfSections = this.model.curGameList.length;
            this.view.gamesyxCollectionView.reloadData();
        }

        this.resetGameList();
    }
    private resetGameList(): void {
        let offset_cur = Math.abs(this.view.gamesyxCollectionView.scrollView.getScrollOffset().x);
        let time = offset_cur / this.model.ListMoveSpeed;
        this.view.gamesyxCollectionView.scrollView.scrollToLeft(time);
        this.view.btnLeft.active = false;
        this.view.btnRight.active = this.view.gamesyxCollectionView.scrollView.content.width > this.view.games.width + 5 ? true : false;
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

    private clickGameItem(gameId: number) {
        cc.log('点击了某个游戏', gameId);
    }
    private CC_onClickbtnLeft() {
        let offset_cur = Math.abs(this.view.gamesyxCollectionView.scrollView.getScrollOffset().x);
        let time = offset_cur / this.model.ListMoveSpeed;
        this.view.gamesyxCollectionView.scrollView.scrollToLeft(time);
    }

    private CC_onClickbtnRight() {
        let offset_max = this.view.gamesyxCollectionView.scrollView.getMaxScrollOffset().x;
        let offset_cur = Math.abs(this.view.gamesyxCollectionView.scrollView.getScrollOffset().x);
        let time = (offset_max - offset_cur) / this.model.ListMoveSpeed;
        this.view.gamesyxCollectionView.scrollView.scrollToRight(time);
    }
    private onScrolling(): void {
        if (this.view.gamesyxCollectionView.scrollView.content.width <= this.view.games.width + 5) {
            return;
        }
        let offset_max = this.view.gamesyxCollectionView.scrollView.getMaxScrollOffset().x;
        let offset_cur = Math.abs(this.view.gamesyxCollectionView.scrollView.getScrollOffset().x);
        this.view.btnLeft.active = offset_cur > 120 ? true : false;
        this.view.btnRight.active = offset_cur < offset_max - 120 ? true : false;
    }

    private createGameList() {
        if (!cc.isValid(this.view.games)) {
            return;
        }
        this.model.curGameList = this.model.getHallGameList(this.model.groupList[this.model.curGroupIndex]);
        // 内容分几个区展示
        this.view.gamesyxCollectionView.numberOfSections = this.model.curGameList.length;
        this.view.gamesyxCollectionView.register(`cell`, () => {
            return cc.instantiate(this.hallGameItem);
        });
        this.view.gamesyxCollectionView.cellForItemAt = () => {
            return this.view.gamesyxCollectionView.dequeueReusableCell(`cell`);
        };
        this.view.gamesyxCollectionView.onCellDisplay = (cell: cc.Node, indexPath) => {
            this.initEntryItem(cell, indexPath);
        };
        // 每个区对应的要展示多少条内容
        this.view.gamesyxCollectionView.numberOfItems = (section) => {
            return this.model.curGameList[section].length;
        };

        let layout = new c2f.ui.YXFlowLayout();
        layout.scrollDirection = c2f.ui.YXFlowLayout.ScrollDirection.HORIZONTAL;
        layout.itemSize = (indexPath) => {
            return this.model.curGameList[indexPath.section].length == 1 ? this.GameItemBigSize : this.GameItemSmallSize;
        };
        layout.sectionInset = (section: number, layout: c2f.ui.YXFlowLayout, collectionView: c2f.ui.YXCollectionView) => {
            const games = this.model.curGameList[section];
            // 根据皮肤类型和游戏数量获取边缘内边距
            let edgeInsets: c2f.ui.YXEdgeInsets = null;
            edgeInsets = new c2f.ui.YXEdgeInsets(0, 10, 0, 10);
            return edgeInsets;
        };
        layout.verticalSpacing = this.GameItemVerticalSpacing;
        layout.horizontalSpacing = this.GameItemHorizontalSpacing;
        this.view.gamesyxCollectionView.layout = layout;
    }

    private initEntryItem(cell: cc.Node, indexPath: c2f.ui.YXIndexPath): void {
        if (!cc.isValid(cell)) {
            return;
        }
        const games = this.model.curGameList[indexPath.section];
        const gameId = games[indexPath.item];
        // let isBigIcon = games.length < 2 ? true : false;
        const gameCfg = this.model.getGameEntryConfig(gameId);
        let item = cell.getComponent(HallGameItem);
        item?.onRefreshItem(gameCfg);
    }
    private CC_onClickbtnQrCode() {
        c2f.gui.open(SmallToolDemoUI.QrCodeDemo);
    }
    private CC_onClickbtnTogContainer() {
        c2f.gui.open(SmallToolDemoUI.TogContainerDemo);
    }
}
