import { LayerUI } from "./LayerUI";
import WaterWaveScreen from "../../component/common/WaterWaveScreen";

enum PrefabPath {
    touchEfx = 'commonRes/prefab/TouchEffect',
}

/*
 * 点击特效层
 */
export class LayerEffect extends LayerUI {
    /** 屏幕水波纹特效 */
    public addWaterWaveEfx(dur: number) {
        const nodeName = 'waterWave'
        let exist = this.getChildByName(nodeName);
        if (exist) {
            let waveComp = exist.getComponent(WaterWaveScreen);
            if (waveComp) {
                waveComp.setDuration(dur);
            }
        } else {
            let waveNode = new cc.Node('waterWave');
            this.addChild(waveNode);
            let waveComp = waveNode.addComponent(WaterWaveScreen);
            if (waveComp) {
                waveComp.setDuration(dur);
            }
        }
    }
}