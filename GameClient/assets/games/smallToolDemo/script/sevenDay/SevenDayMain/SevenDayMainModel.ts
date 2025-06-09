import { SmallToolDemoUIPa } from '../../SmallToolDemoUIPa';
import { UIModelBase } from './../../../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SevenDayMainModel extends UIModelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'V_SevenDayMain';
    public meneListArr: SmallToolDemoUIPa.SevenDayMenuItemArg[] = [];
    public initData(callBackFun: Function) {
        this.meneListArr = [];

        for (let i = 0; i < 5; i++) {
            let item: SmallToolDemoUIPa.SevenDayMenuItemArg = {
                active: true,
                title: c2f.language.getLangByID(`SEVEN_DAY_MENU_${i + 1}`),
                tips: '好',
                /** 奖励 */
                bonus: 'nice',
                callBackFun: callBackFun,
                index: i,
                state: i == 2,
            };
            this.meneListArr.push(item);
        }
    }

    public selectOneReflashMenuDate(selectIndex: number) {
        for (let i = 0; i < this.meneListArr.length; i++) {
            let item = this.meneListArr[i];
            item.state = i == selectIndex;
        }
    }
}
