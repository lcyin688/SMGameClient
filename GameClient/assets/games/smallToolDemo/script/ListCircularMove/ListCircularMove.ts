import { UIVControlBase } from './../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import ListCircularMoveModel from './ListCircularMoveModel';
import ListCircularMoveView from './ListCircularMoveView';
import { SmallToolDemoCfg } from '../SmallToolDemoCfg';
import { TurntableRecordReel } from '../TurntableRecordReel';
import TurntableRecordItem from '../TurntableRecordItem/TurntableRecordItem';

const { ccclass, property } = cc._decorator;
@ccclass
export default class ListCircularMove extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_ListCircularMove';

    public model: ListCircularMoveModel = undefined;
    public view: ListCircularMoveView = undefined;
    /** record节点 */
    protected recordItemPrefab: cc.Prefab = null;

    /**
     * 无限循环滚动轴
     */
    private infiniteReel: TurntableRecordReel = null;
    protected onViewOpen(param: any) {
        this.model.initData();
        this.reflashRecord();
    }

    private async reflashRecord() {
        if (!this.recordItemPrefab) {
            this.recordItemPrefab = await c2f.res.loadOne(SmallToolDemoCfg.Prefab.turntableRecordItem, cc.Prefab);
        }
        this.createInfiniteReel();
    }
    private createInfiniteReel() {
        if (this.infiniteReel) {
            return;
        }
        this.infiniteReel = new TurntableRecordReel({
            parent: this.view.recordList,
            listSize: cc.size(this.view.recordList.width, this.view.recordList.height),
            layout: TurntableRecordReel.Layout.VERTICAL,
            direction: TurntableRecordReel.Direction.UP,
        });

        this.infiniteReel.onCreateItem((idx) => {
            const len = this.model.recordList.length;
            if ((len == 1 && idx > 0) || !this.recordItemPrefab) {
                return null;
            }

            if (len < 6 && idx >= len) {
                return null;
            }

            const data = this.model.recordList[idx % this.model.recordList.length];
            if (!data) {
                return null;
            }

            let node = this.model.recordItemPool.get();

            if (!node) {
                node = c2f.utils.view.instantiateMVCPrefab(this.recordItemPrefab, this.view.recordList);
                // this.view.recordList.addChild(node);
            }
            let comp = node.getComponent(TurntableRecordItem);
            comp.init(data);
            return { node: comp.node, size: cc.size(node.width, node.height) };
        });

        // 回收item节点;
        this.infiniteReel.onRemoveItem((node) => {
            this.model.recordItemPool.put(node);
        });
    }
}
