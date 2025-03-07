import { UIVControlBase } from './../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import  SnakMainModel from './SnakMainModel';
import  SnakMainView from './SnakMainView';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SnakMain extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_SnakMain';

    public model: SnakMainModel = undefined;
    public view: SnakMainView = undefined;
    
    protected onViewOpen(param: any) {
    }



}