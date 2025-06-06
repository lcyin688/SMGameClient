import { Notify } from '../view/Notify';
import { ViewParams } from '../../define/C2FUIDef';
import { DelegateComponent } from './DelegateComponent';
import { LayerUI } from './LayerUI';
import { C2FConst } from '../../define/C2FConst';
import { GameConsts } from '../../../Script/game/GameConsts';

enum PrefabPath {
    notify = 'commonRes/prefab/Notify',
    loading = 'commonRes/prefab/LoadingTips',
}

/*
 * 消息提示层
 */
export class LayerNotify extends LayerUI {
    private loadingCnt: number = 0;

    /**
     * 显示toast
     * @param content 文本表示
     * @param useI18n 是否使用多语言
     */
    public notifyTxt(content: string, useI18n: boolean): void {
        let viewParams = new ViewParams();
        viewParams.uuid = this.getUuid(PrefabPath.notify);
        viewParams.prefabPath = PrefabPath.notify;
        viewParams.params = { content: content, useI18n: useI18n };
        viewParams.callbacks = {};
        viewParams.valid = true;

        this.ui_nodes.set(viewParams.uuid, viewParams);
        this.loadSpecial(viewParams);
    }

    /**
     * 显示loading界面
     * @param tips
     */
    public showLoading(tips: string) {
        this.loadingCnt++;
        let dstView = this.get(PrefabPath.loading);
        if (dstView.length > 0) {
            return;
        }
        let viewParams = new ViewParams();
        viewParams.uuid = this.getUuid(PrefabPath.loading);
        viewParams.prefabPath = PrefabPath.loading;
        viewParams.params = { content: tips };
        viewParams.callbacks = {};
        viewParams.valid = true;

        this.ui_nodes.set(viewParams.uuid, viewParams);
        this.loadSpecial(viewParams);
    }

    /**
     * 隐藏loading界面
     */
    public hideLoading(clean: boolean) {
        this.loadingCnt--;
        if (this.loadingCnt <= 0 || clean) {
            this.loadingCnt = 0;
            let dstView = this.get(PrefabPath.loading);
            if (dstView) {
                this.remove(PrefabPath.loading, false);
            }
        }
    }

    // 获取预制件资源
    protected loadSpecial(viewParams: ViewParams) {
        c2f.res.load(GameConsts.Bundle.framework, viewParams.prefabPath, (err: Error | null, res: cc.Prefab) => {
            if (err) {
                cc.error(err);
            }
            if (viewParams.prefabPath != PrefabPath.loading || this.loadingCnt > 0) {
                let childNode: cc.Node = c2f.res.instantiate(res);
                viewParams.node = childNode;

                let comp: DelegateComponent = childNode.addComponent(DelegateComponent);
                comp.viewParams = viewParams;

                this.createSpecial(viewParams);
            }
        });
    }

    protected createSpecial(viewParams: ViewParams) {
        let childNode: cc.Node = super.createNode(viewParams);
        switch (viewParams.prefabPath) {
            case PrefabPath.notify:
                let notifyCom = childNode.getComponent(Notify)!;
                if (notifyCom) {
                    childNode.active = true;
                    notifyCom.toast(viewParams.params.content, viewParams.params.useI18n);
                }
                break;
            case PrefabPath.loading:
                break;
        }
        return childNode;
    }
}
