import { UIPControlBase } from './../../../../c2f-framework/gui/layer/UIPControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import TurntableRecordItemModel from './TurntableRecordItemModel';
import TurntableRecordItemView from './TurntableRecordItemView';
import { UIPa } from '../../../../Script/game/UIParam';

const { ccclass, property } = cc._decorator;
@ccclass
export default class TurntableRecordItem extends UIPControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_TurntableRecordItem';

    public model: TurntableRecordItemModel = undefined;
    public view: TurntableRecordItemView = undefined;

    init(params: UIPa.RodaHistory) {
        if (!params) {
            return;
        }
        this.view.lab_nameLabel.string = this.formatNickname(params.name);

        this.view.lab_moneyLabel.string = c2f.utils.commonUtils.formatAmountCurrency(params.award_64, true);
        this.view.lab_timeLabel.string = c2f.utils.commonUtils.formatDate(new Date(params.time_64 * 1000));
    }

    formatNickname(str: string) {
        if (typeof str !== 'string') {
            return '';
        }
        if (str.length <= 4) {
            return str.slice(0, 2) + '****';
        }
        return str.slice(0, 2) + '****' + str.slice(-2, str.length);
    }
}
