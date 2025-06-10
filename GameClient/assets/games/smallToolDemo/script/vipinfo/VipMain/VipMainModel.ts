import { SmallToolDemoCfg } from '../../SmallToolDemoCfg';
import { SmallToolDemoUIPa } from '../../SmallToolDemoUIPa';
import VipItem from '../VipItem/VipItem';
import { UIModelBase } from './../../../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class VipMainModel extends UIModelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'V_VipMain';
    public arr: SmallToolDemoUIPa.VipItemArg[] = [];
    public vipItemArr: VipItem[] = [];
    public vipMaxLv = 11;
    public currentIndex = 5;
    public isMove = false;
    public initData(callBackFun: Function) {
        this.arr = [];
        for (let i = 0; i < this.vipMaxLv; i++) {
            let item: SmallToolDemoUIPa.VipItemArg = {
                vipLevel: i + 1,
                vipIcon: SmallToolDemoCfg.ResUrl.vipIcon + `vip_lv_${i}`,
                index: i,
                callBackFun,
                state: false,
            };
            this.arr.push(item);
        }
    }
}
