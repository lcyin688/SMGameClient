import { UIPControlBase } from './../../../../../c2f-framework/gui/layer/UIPControlBase';
import { C2FEnum } from './../../../../../c2f-framework/define/C2FEnum';
import  SevenDaySignItemModel from './SevenDaySignItemModel';
import  SevenDaySignItemView from './SevenDaySignItemView';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SevenDaySignItem extends UIPControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_SevenDaySignItem';

    public model: SevenDaySignItemModel = undefined;
    public view: SevenDaySignItemView = undefined;



}