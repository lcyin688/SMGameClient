import { UIPControlBase } from './../../../../c2f-framework/gui/layer/UIPControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import  SnakRankItemModel from './SnakRankItemModel';
import  SnakRankItemView from './SnakRankItemView';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SnakRankItem extends UIPControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_SnakRankItem';

    public model: SnakRankItemModel = undefined;
    public view: SnakRankItemView = undefined;



}