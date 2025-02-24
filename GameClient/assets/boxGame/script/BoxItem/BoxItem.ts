import { UIPControlBase } from './../../../c2f-framework/gui/layer/UIPControlBase';
import { C2FEnum } from './../../../c2f-framework/define/C2FEnum';
import  BoxItemModel from './BoxItemModel';
import  BoxItemView from './BoxItemView';

const { ccclass, property } = cc._decorator;
@ccclass
export default class BoxItem extends UIPControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_BoxItem';

    public model: BoxItemModel = undefined;
    public view: BoxItemView = undefined;



}