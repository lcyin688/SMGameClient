import HallGameItemModel from './HallGameItemModel';
import HallGameItemView from './HallGameItemView';
import VirtualItem from '../../../../c2f-framework/component/ui/scrollList/VirtualItem';
import { SmallToolDemoUIPa } from '../SmallToolDemoUIPa';
import { C2FEnum } from '../../../../c2f-framework/define/C2FEnum';
import { UIHelper } from '../../../../Script/game/UIHelper';
import { SmallToolDemoTools } from '../SmallToolDemoTools';

const { ccclass, property } = cc._decorator;

/**
 * 游戏入口标识枚举
 */
enum SwitchTagEnum {
    Null = 0,
    HotSmall = 1,
    HotBig = 2,
    NewSmall = 3,
    NewBig = 4,
    /** 即将到来 小 */
    ComingsoonSmall = 5,
    ComingsoonBig = 6,
    /** 停服维护 小 */
    SafeguardSmall = 7,
    SafeguardBig = 8,
    /** 转圈 */
    Circle = 9,
}

@ccclass
export default class HallGameItem extends VirtualItem {
    /** 预制名 给实例调用 */
    public prefabName = 'P_HallGameItem';

    public model: HallGameItemModel = undefined;
    public view: HallGameItemView = undefined;

    @property({
        tooltip: CC_DEV && '大厅游戏 icon 大图标尺寸',
    })
    public GameItemBigSize: cc.Size = new cc.Size(191, 361);

    @property({
        tooltip: CC_DEV && '大厅游戏 icon 小图标尺寸',
    })
    public GameItemSmallSize: cc.Size = new cc.Size(191, 176);

    @property({
        tooltip: CC_DEV && '大图标-字号',
    })
    public fontSizeBig: number = 36;

    @property({
        tooltip: CC_DEV && '小图标-字号',
    })
    public fontSizeSmall: number = 30;

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

    private CC_onClickbtnItem() {}

    public onRefresh(conf: SmallToolDemoUIPa.GameEntryConf): void {
        this.model.initData(conf);
        if (!conf || !conf.gameId) {
            this.node.active = false;
        }
        this.node.active = true;
        this.view.icon.opacity = 0;
        this.view.icon.active = true;
        this.view.anim.opacity = 0;
        this.view.anim.active = true;
        this.view.lab_name.active = false;
        this.view.jackpot.active = false;
        this.view.limit.active = false;
        this.view.guide.active = false;
        this.view.vendor.active = false;
        this.view.switchTagWESwitchPage.index = SwitchTagEnum.Circle;
        this.node.setContentSize(conf.isBigIcon ? this.GameItemBigSize : this.GameItemSmallSize);
        // 字体大小
        const fontSize = conf.isBigIcon ? this.fontSizeBig : this.fontSizeSmall;
        this.view.lab_nameLabel.fontSize = fontSize;
        //初始化游戏入口
        this.initGameEntry(conf);
    }

    private async initGameEntry(conf: SmallToolDemoUIPa.GameEntryConf) {
        let url = SmallToolDemoTools.getGameEntryUrl(conf.gameId, conf.isBigIcon);
        if (url) {
            let item = await c2f.res.loadOne(url, cc.Asset);
            if (SmallToolDemoTools.isSkeleton(item)) {
                this.view.animSkeleton.skeletonData = item as unknown as sp.SkeletonData;
                this.view.animSkeleton.setAnimation(0, conf.isBigIcon ? 'animation1' : 'animation2', true);
                this.view.icon.active = false;
            } else {
                this.view.iconSprite.spriteFrame = item as cc.SpriteFrame;
                this.view.anim.active = false;
            }
        }
        this.initFinal(conf);
    }

    private initFinal(conf: SmallToolDemoUIPa.GameEntryConf) {
        if (!cc.isValid(this.node) || !conf || conf.gameId !== conf.gameId) {
            return;
        }

        if (conf.safeguard) {
            this.view.switchTagWESwitchPage.index = conf.isBigIcon ? SwitchTagEnum.SafeguardBig : SwitchTagEnum.SafeguardSmall;
        } else if (conf.comingsoonStart) {
            this.view.switchTagWESwitchPage.index = conf.isBigIcon ? SwitchTagEnum.ComingsoonBig : SwitchTagEnum.ComingsoonSmall;
        } else if (conf.isNew) {
            this.view.switchTagWESwitchPage.index = conf.isBigIcon ? SwitchTagEnum.NewBig : SwitchTagEnum.NewSmall;
        } else if (conf.isHot) {
            this.view.switchTagWESwitchPage.index = conf.isBigIcon ? SwitchTagEnum.HotBig : SwitchTagEnum.HotSmall;
        } else {
            this.view.switchTagWESwitchPage.index = 0;
        }

        if (this.view.limitWESpriteIndex) {
            this.view.limitWESpriteIndex.index = conf.isBigIcon ? 1 : 0;
        }

        this.setGameName();
        this.setVipLimit();
        this.setGameVendor();

        if (conf.safeguard || conf.comingsoonStart) {
            return;
        }

        this.setGuide(conf.isGuide);
        this.setJackpot();
    }

    /** 设置VIP限制 */
    public setVipLimit(): void {
        const gameId = this.model.conf?.gameId || -1;
        let vipLimitLv = 0;
    }

    /** 设置游戏名称 */
    private setGameName(): void {
        this.view.lab_nameLabel.string = this.model.conf.gameId.toString();
    }

    /** 设置引导 */
    private setGuide(isGuide: boolean): void {}

    private setJackpot(): void {
        // const isOpenJackpot = HallJPRollMgr.isOpenJackPot(this.conf?.gameId);
        // this.RC_jackpot.active = isOpenJackpot;
        // const jackpotRoll = this.RC_lab_jackpot.getComponent(HallJPRollLabel_h);
        // if (isOpenJackpot && jackpotRoll) {
        //     jackpotRoll.init(this.conf.gameId);
        // }
    }

    /** 设置游戏厂商 */
    private setGameVendor() {
        // if (!this.conf) {
        //     return;
        // }
        // const gameId = this.conf?.gameId || -1;
        // const url = this.conf.vendorIcon;
        // this.RC_spr_vendor.node.active = Boolean(url);
        // if (this.RC_spr_vendor.node.active) {
        //     this.loadAssetRemote(url, cc.SpriteFrame).then((spriteFrame) => {
        //         if (gameId !== this.conf?.gameId) {
        //             return;
        //         }
        //         if (spriteFrame && cc.isValid(this.RC_spr_vendor)) {
        //             this.RC_spr_vendor.spriteFrame = spriteFrame;
        //         }
        //     });
        // }
    }
}
