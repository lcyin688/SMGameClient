import { UIVControlBase } from './../../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../../c2f-framework/define/C2FEnum';
import JoinUsModel from './JoinUsModel';
import JoinUsView from './JoinUsView';
import { SmallToolDemoCfg } from '../../SmallToolDemoCfg';
import JoinUsWayItem from '../JoinUsWayItem/JoinUsWayItem';

const { ccclass, property } = cc._decorator;
@ccclass
export default class JoinUs extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'V_JoinUs';

    public model: JoinUsModel = undefined;
    public view: JoinUsView = undefined;

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
            case this.view.btnCloseButton.name:
                this.CC_onClickbtnClose();
                break;

            default:
                break;
        }
    }

    private CC_onClickbtnClose() {
        this.closeView();
    }

    protected onViewOpen(param: any) {
        this.model.initData();
        this.init();
    }

    public async init() {
        let waysIcon = (await c2f.res.loadOne(SmallToolDemoCfg.Prefab.joinUsWayItem, cc.Prefab)) as cc.Prefab;
        this.scheduleOnce(() => {
            this.view.scroll_wayScrollView.content.removeAllChildren();
            let confItem = this.model.thirdLinkConf.linkIconArr;
            if (confItem?.length > 0) {
                for (let i = 0; i < confItem.length; i++) {
                    let node = c2f.utils.view.instantiateMVCPrefab(waysIcon, this.view.scroll_wayScrollView.content);
                    let name = confItem[i];
                    this.view.scroll_wayScrollView.content.addChild(node);
                    node.getComponent(JoinUsWayItem).init(name);
                }
            }
        });
    }
}
