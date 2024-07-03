import { UIVControlBase } from './../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import Physics2048MainModel from './Physics2048MainModel';
import Physics2048MainView from './Physics2048MainView';
import { UIHelper } from '../../../../Script/game/UIHelper';
import { EntranceUI } from '../../../../entrance/script/EntranceView';
import { GameConsts } from '../../../../Script/game/GameConsts';
import Physics2048Item from '../Physics2048Item/Physics2048Item';

const { ccclass, property } = cc._decorator;
@ccclass
export default class Physics2048Main extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_Physics2048Main';

    public model: Physics2048MainModel = undefined;
    public view: Physics2048MainView = undefined;
    public blockItem: Physics2048Item;

    protected onViewOpen(param: any) {
        this.model.initData()
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
        c2f.gui.open(EntranceUI.SoundSet)
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
        this.randomNewItem()

    }
    private randomNewItem() {
        let index = this.model.rodomOneIndex()
        let nodeItem = c2f.utils.view.instantiateMVCPrefab(this.model.blockItem, this.view.content);
        this.view.content.addChild(nodeItem)
        let blockItem = nodeItem.getComponent(Physics2048Item)
        this.blockItem = blockItem
        let startItem = this.view.initPos
        let world = startItem.parent.convertToWorldSpaceAR(startItem.getPosition());
        let space = nodeItem.parent.convertToNodeSpaceAR(world);
        nodeItem.setPosition(space)
    }

}