import { UIVControlBase } from './../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import Physics2048MainModel from './Physics2048MainModel';
import Physics2048MainView from './Physics2048MainView';
import { UIHelper } from '../../../../Script/game/UIHelper';
import { EntranceUI } from '../../../../entrance/script/EntranceView';
import { GameConsts } from '../../../../Script/game/GameConsts';
import Physics2048Item from '../Physics2048Item/Physics2048Item';
import { UIPa } from '../../../../Script/game/UIParam';
import { GameHelper } from '../../../../Script/game/GameHelper';
import BoomItem from '../BoomItem/BoomItem';
import { Physics2048Cfg } from '../Physics2048Cfg';

const { ccclass, property } = cc._decorator;
@ccclass
export default class Physics2048Main extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_Physics2048Main';

    public model: Physics2048MainModel = undefined;
    public view: Physics2048MainView = undefined;

    protected onLoad(): void {
        this.initAudioState();
        UIHelper.playMusic('physics2048BackMusic');
        GameHelper.setPhysics(true);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node['_touchListener'].swallowTouches = false;
    }
    private initAudioState() {
        let state = c2f.storage.getBoolean(GameConsts.StorageKey.soundBg);
        c2f.audio.bgmOff = state;
        let stateEff = c2f.storage.getBoolean(GameConsts.StorageKey.soundEff);
        c2f.audio.sfxOff = stateEff;
    }
    private onTouchStart(event) {
        if (!this.model.isCanCreateNew) {
            this.setBlockItemPos(event);
        }
    }
    private onTouchMove(event) {
        if (!this.model.isCanCreateNew) {
            this.setBlockItemPos(event);
        }
    }

    private onTouchEnd(event) {
        if (!this.model.isCanCreateNew) {
            this.setBlockItemPos(event);
            this.playFallingAni();
        }
    }

    private setBlockItemPos(event) {
        if (this.model.physics2048Item) {
            let worldPoint = event.getLocation();
            let posInNode = this.view.content.convertToNodeSpaceAR(worldPoint);
            this.model.physics2048Item.node.x = posInNode.x;
        }
    }

    private playFallingAni() {
        UIHelper.playEffect('physics2048click');
        if (this.model.physics2048Item) {
            this.model.totalScore += this.model.physics2048Item.model.data.score;
            this.model.physics2048Item.setRigidBodyType(cc.RigidBodyType.Dynamic);
            this.model.physics2048Item = null;
            this.reflashScore();
            //表演下落
            this.scheduleOnce(() => {
                this.model.isCanCreateNew = true;
                this.foreceCreateNewItem();
            }, 2);
        }
    }

    private reflashScore() {
        this.view.txtTotalScoreLabel.string = 'Score:' + this.model.totalScore;
    }

    protected onViewOpen(param: any) {
        this.model.initData();
        this.reflashScore();
        this.loadTabItemFirst(this.startView.bind(this));
        c2f.res.loadOne(Physics2048Cfg.CmmPrefab.boomItem, cc.Prefab).then((resItem: cc.Prefab) => {
            this.model.boomItem = resItem;
        });
    }

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
            case this.view.btnMenuButton.name:
                this.CC_onClickbtnMenu();
                break;

            default:
                break;
        }
    }

    private CC_onClickbtnMenu() {
        UIHelper.playEffect('betClick');
        // c2f.gui.open(EntranceUI.SoundSet)
        c2f.gui.open(EntranceUI.GameLogin);
        this.closeView();
    }
    public async loadTabItemFirst(cb) {
        await c2f.res.loadOne(Physics2048Cfg.CmmPrefab.physics2048Item, cc.Prefab).then((resItem: cc.Prefab) => {
            this.model.blockItem = resItem;
            if (cb) {
                cb();
            }
        });
    }

    private startView() {
        this.foreceCreateNewItem();
    }

    private foreceCreateNewItem() {
        this.model.isCanCreateNew = true;
        this.createNewItem();
    }

    private createNewItem() {
        if (!this.model.isCanCreateNew) {
            return;
        }
        this.model.isCanCreateNew = false;
        this.randomNewItem();
    }

    private randomNewItem() {
        let index = this.model.rodomOneIndex();
        let nodeItem = c2f.utils.view.instantiateMVCPrefab(this.model.blockItem, this.view.content);
        this.view.content.addChild(nodeItem);
        let blockItem = nodeItem.getComponent(Physics2048Item);
        this.model.physics2048Item = blockItem;
        let startItem = this.view.initPos;
        let world = startItem.parent.convertToWorldSpaceAR(startItem.getPosition());
        let space = nodeItem.parent.convertToNodeSpaceAR(world);
        nodeItem.setPosition(space);
        let itemData = Physics2048Cfg.Physics2048ItemData[index];
        blockItem.setInit(itemData, this.callBack.bind(this));
        blockItem.setRigidBodyType(cc.RigidBodyType.Static);
        //设置左上角当前元素
        c2f.utils.view.changeSpriteFrame(this.view.iconMaxSprite, itemData.url);
        this.view.txtCurScoreLabel.string = 'X' + itemData.score;
    }

    private callBack(data: Physics2048Cfg.Physics2048ItemArgs, startItem: cc.Node, cbFun: Function) {
        let nodeItem = c2f.utils.view.instantiateMVCPrefab(this.model.boomItem, this.view.effect);
        this.view.effect.addChild(nodeItem);
        let boomItem = nodeItem.getComponent(BoomItem);
        let world = startItem.parent.convertToWorldSpaceAR(startItem.getPosition());
        let space = nodeItem.parent.convertToNodeSpaceAR(world);
        nodeItem.setPosition(space);
        boomItem.playBoom(data, () => {
            cbFun();
        });
    }
}
