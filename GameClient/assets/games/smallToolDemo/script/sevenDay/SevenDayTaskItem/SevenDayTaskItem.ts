import { UIPControlBase } from './../../../../../c2f-framework/gui/layer/UIPControlBase';
import { C2FEnum } from './../../../../../c2f-framework/define/C2FEnum';
import  SevenDayTaskItemModel from './SevenDayTaskItemModel';
import  SevenDayTaskItemView from './SevenDayTaskItemView';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SevenDayTaskItem extends UIPControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_SevenDayTaskItem';

    public model: SevenDayTaskItemModel = undefined;
    public view: SevenDayTaskItemView = undefined;



}