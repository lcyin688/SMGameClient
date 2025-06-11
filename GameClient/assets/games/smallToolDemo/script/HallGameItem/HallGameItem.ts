import HallGameItemModel from './HallGameItemModel';
import HallGameItemView from './HallGameItemView';
import VirtualItem from '../../../../c2f-framework/component/ui/scrollList/VirtualItem';
import { SmallToolDemoUIPa } from '../SmallToolDemoUIPa';
import { C2FEnum } from '../../../../c2f-framework/define/C2FEnum';
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
    public GameItemBigSize: cc.Size = new cc.Size(212, 415);

    @property({
        tooltip: CC_DEV && '大厅游戏 icon 小图标尺寸',
    })
    public GameItemSmallSize: cc.Size = new cc.Size(200, 200);

    @property({
        tooltip: CC_DEV && '大图标-字号',
    })
    public fontSizeBig: number = 36;

    @property({
        tooltip: CC_DEV && '小图标-字号',
    })
    public fontSizeSmall: number = 30;

    // @property({
    //     tooltip: CC_DEV && '大图标-坐标位置',
    // })
    // public posYBig: number = -238;

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
    protected onLoad(): void {
        if (!this.model) {
            this.model = this.node.getComponent(HallGameItemModel);
        }
        if (!this.view) {
            this.view = this.node.getComponent(HallGameItemView);
        }
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

    private CC_onClickbtnItem() { }

    public onRefreshItem(conf: SmallToolDemoUIPa.GameEntryConf): void {
        this.model.initData(conf);
        if (!conf || !conf.gameId) {
            this.node.active = false;
        }
        this.node.active = true;
        this.view.icon.opacity = 0;
        this.view.icon.active = true;
        this.view.anim.opacity = 0;
        this.view.anim.active = true;
        this.view.labName.active = false;
        this.view.jackpot.active = false;
        this.view.limit.active = false;
        this.view.guide.active = false;
        this.view.vendor.active = false;
        this.view.switchTagWESwitchPage.index = SwitchTagEnum.Circle;
        this.node.setContentSize(conf.isBigIcon ? this.GameItemBigSize : this.GameItemSmallSize);
        // 字体大小
        const fontSize = conf.isBigIcon ? this.fontSizeBig : this.fontSizeSmall;
        this.view.labNameLabel.fontSize = fontSize;

        // this.node.position.y = conf.isBigIcon ? this.posYBig : 0;

        //初始化游戏入口
        this.initGameEntry(conf);
    }

    private async initGameEntry(conf: SmallToolDemoUIPa.GameEntryConf) {
        let url = SmallToolDemoTools.getGameEntryUrl(conf.gameId, conf.isBigIcon);
        if (url) {
            let item = await c2f.res.loadOne(url, sp.SkeletonData);
            if (item) {
                this.view.anim.opacity = 255;
                this.view.animSkeleton.skeletonData = item as sp.SkeletonData;
                this.view.animSkeleton.setAnimation(0, conf.isBigIcon ? 'animation1' : 'animation2', true);
                this.view.icon.active = false;
            } else {
                this.view.icon.opacity = 255;
                c2f.res.loadOne(url, cc.SpriteFrame).then((res: cc.SpriteFrame) => {
                    this.view.iconSprite.spriteFrame = res;
                });
                // c2f.utils.view.changeSpriteFrame(this.view.iconSprite, url);
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
        //暂时没有配置游戏名字
        let nameStr = (this.view.labNameLabel.string = c2f.language.getLangByID(`GAME_${this.model.conf.gameId}`));
        if (nameStr) {
            this.view.labName.active = true;
            this.initBottomTopLabel(nameStr);
        }
    }
    /** 是否使用左右靠齐的样式 */
    private initBottomTopLabel(str: string) {
        let strArr = str.split(`\n`);
        if (this.view.topName && this.view.bottomName) {
            this.view.bottomNameLabel.fontSize = this.view.labNameLabel.fontSize;
            this.view.topNameLabel.fontSize = this.view.labNameLabel.fontSize;
            if (strArr.length > 1) {
                this.view.labNameLabel.string = '';
                this.view.bottomName.active = true;
                this.view.topName.active = true;
                this.view.bottomNameLabel.getComponent(cc.Label).string = strArr[0];
                this.view.topNameLabel.getComponent(cc.Label).string = strArr[1];
            } else {
                this.view.bottomName.active = false;
                this.view.topName.active = false;
            }
        }
    }
    /** 设置引导 */
    private setGuide(isGuide: boolean): void {
        this.view.guide.active = isGuide;
    }

    private setJackpot(): void {
        const isOpenJackpot = true;
        this.view.jackpot.active = isOpenJackpot;
        if (isOpenJackpot && this.view.lab_jackpotHallJPRollLabel) {
            this.view.lab_jackpotHallJPRollLabel.init(this.model.conf.gameId);
        }
    }

    /** 设置游戏厂商 */
    private setGameVendor() {
        if (!this.model.conf) {
            return;
        }
        const gameId = this.model.conf?.gameId || -1;
        const url = this.model.conf.vendorIcon;
        this.view.vendor.active = Boolean(url);
        if (this.view.vendor.active) {
            c2f.res.loadRemote(url, cc.SpriteFrame, (spriteFrame) => {
                if (gameId !== this.model.conf?.gameId) {
                    return;
                }
                if (spriteFrame && cc.isValid(this.view.vendorSprite)) {
                    this.view.vendorSprite.spriteFrame = spriteFrame as unknown as cc.SpriteFrame;
                }
            });
        }
    }
}
