import { UIModelBase } from './../../../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SketchpadModel extends UIModelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_Sketchpad';

    public isDrawing: boolean = false;
    public path: msg.NHWCPoint[] = [];
}
