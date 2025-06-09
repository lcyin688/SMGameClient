import { UIPControlBase } from './../../../../../c2f-framework/gui/layer/UIPControlBase';
import { C2FEnum } from './../../../../../c2f-framework/define/C2FEnum';
import  SevenDayGiftNodeModel from './SevenDayGiftNodeModel';
import  SevenDayGiftNodeView from './SevenDayGiftNodeView';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SevenDayGiftNode extends UIPControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_SevenDayGiftNode';

    public model: SevenDayGiftNodeModel = undefined;
    public view: SevenDayGiftNodeView = undefined;



}