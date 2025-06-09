import { UIVControlBase } from './../../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../../c2f-framework/define/C2FEnum';
import  SevenDaySignItemOneModel from './SevenDaySignItemOneModel';
import  SevenDaySignItemOneView from './SevenDaySignItemOneView';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SevenDaySignItemOne extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'SevenDaySignItemOne';

    public model: SevenDaySignItemOneModel = undefined;
    public view: SevenDaySignItemOneView = undefined;
    
    protected onViewOpen(param: any) {
    }



}