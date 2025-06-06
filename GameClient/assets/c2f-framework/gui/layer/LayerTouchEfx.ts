import { ViewParams } from '../../define/C2FUIDef';
import { DelegateComponent } from './DelegateComponent';
import { LayerUI } from './LayerUI';
import { C2FConst } from '../../define/C2FConst';
import { GameConsts } from '../../../Script/game/GameConsts';

enum PrefabPath {
    touchEfx = 'commonRes/prefab/TouchEffect',
}

/*
 * 点击特效层
 */
export class LayerTouchEfx extends LayerUI {
    /**
     * 添加点击特效
     */
    public addClickEfx(): void {
        let viewParams = new ViewParams();
        let uuid = this.getUuid(PrefabPath.touchEfx);
        viewParams.uuid = uuid;
        viewParams.prefabPath = PrefabPath.touchEfx;
        viewParams.params = {};
        viewParams.callbacks = {};
        viewParams.valid = true;

        if (!this.ui_nodes.has(uuid)) {
            this.ui_nodes.set(uuid, viewParams);
            this.load(viewParams);
        }
    }

    // 获取预制件资源
    protected load(viewParams: ViewParams) {
        c2f.res.load(GameConsts.Bundle.framework, viewParams.prefabPath, (err: Error | null, res: cc.Prefab) => {
            if (err) {
                cc.error(err);
            }
            let childNode: cc.Node = c2f.res.instantiate(res);
            viewParams.node = childNode;
            let comp: DelegateComponent = childNode.addComponent(DelegateComponent);
            comp.viewParams = viewParams;
            super.createNode(viewParams);
        });
    }
}
