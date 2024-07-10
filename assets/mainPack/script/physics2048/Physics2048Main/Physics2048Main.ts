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

const { ccclass, property } = cc._decorator;
@ccclass
export default class Physics2048Main extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_Physics2048Main';

    public model: Physics2048MainModel = undefined;
    public view: Physics2048MainView = undefined;



    protected onLoad(): void {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node['_touchListener'].swallowTouches = false;
    }

    private onTouchStart(event) {
        this.setBlockItemPos(event)
    }
    private onTouchMove(event) {
        this.setBlockItemPos(event)
    }

    private onTouchEnd(event) {
        this.setBlockItemPos(event)
        // this.playFallingAni()
    }

    private setBlockItemPos(event) {
        if (this.model.physics2048Item) {
            let worldPoint = event.getLocation();
            let posInNode = this.view.content.convertToNodeSpaceAR(worldPoint);
            this.model.physics2048Item.node.x = posInNode.x
        }
    }

    private playFallingAni() {
        if (this.model.physics2048Item) {
            this.model.physics2048Item = null
            //表演下落

            this.scheduleOnce(() => {
                this.model.isCanCreateNew = true
            }, 2)
        }
    }


    protected onViewOpen(param: any) {
        this.model.initData()
        GameHelper.setPhysics(true)
        this.loadTabItemFirst(this.startView.bind(this))
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

        c2f.gui.open(EntranceUI.GameLogin)
    }
    public async loadTabItemFirst(cb) {
        await c2f.res.loadOne(GameConsts.CmmPrefab.physics2048Item, cc.Prefab).then((resItem: cc.Prefab) => {
            this.model.blockItem = resItem;
            if (cb) {
                cb();
            }
        })
    }

    private startView() {
        this.model.isCanCreateNew = true
        this.createNewItem()

    }

    private createNewItem() {
        if (!this.model.isCanCreateNew) {
            return
        }
        this.model.isCanCreateNew = false
        this.randomNewItem()
    }

    private randomNewItem() {
        let index = this.model.rodomOneIndex()
        let nodeItem = c2f.utils.view.instantiateMVCPrefab(this.model.blockItem, this.view.content);
        this.view.content.addChild(nodeItem)
        let blockItem = nodeItem.getComponent(Physics2048Item)
        this.model.physics2048Item = blockItem
        let startItem = this.view.initPos
        let world = startItem.parent.convertToWorldSpaceAR(startItem.getPosition());
        let space = nodeItem.parent.convertToNodeSpaceAR(world);
        nodeItem.setPosition(space)
        let itemData = UIPa.Physics2048ItemData[index]
        blockItem.setInit(itemData)
    }

}