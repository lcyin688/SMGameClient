import { UIPControlBase } from './../../../../../c2f-framework/gui/layer/UIPControlBase';
import { C2FEnum } from './../../../../../c2f-framework/define/C2FEnum';
import  SevenDayGiftItemModel from './SevenDayGiftItemModel';
import  SevenDayGiftItemView from './SevenDayGiftItemView';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SevenDayGiftItem extends UIPControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_SevenDayGiftItem';

    public model: SevenDayGiftItemModel = undefined;
    public view: SevenDayGiftItemView = undefined;



}