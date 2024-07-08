import { UIPa } from '../../../../Script/game/UIParam';
import MapCreatItem from '../MapCreatItem/MapCreatItem';
import { UIModelBase } from './../../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class MapCreateMainModel extends UIModelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_MapCreateMain';
    public curSelect: string;
    public starDataArr: number[][]
    public curLv: number
    public blockItem: cc.Prefab;
    public starItemMap: Map<number, Map<number, MapCreatItem>>
    public initStarDataArr(index: number) {
        let arr: number[][] = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];
        for (let row = 0; row < 10; row++) {
            for (let column = 0; column < 10; column++) {
                arr[row][column] = index
            }
        }
        return arr
    }

    public initData() {
        let curIndex = this.getCurIndex()
        this.starDataArr = this.initStarDataArr(curIndex)
    }

    public getCurIndex() {
        let cur = 0
        if (this.curSelect) {
            let arr = this.curSelect.split("toggle")
            cur = parseInt(arr[1])
        }
        return cur
    }

    public getStarPosition(column: number, row: number): cc.Vec3 {
        const w = UIPa.DesStarGameArgs.width;
        const h = UIPa.DesStarGameArgs.heigh;
        let x = (row + 1 / 2) * w
        let y = (column + 1 / 2) * h
        return new cc.Vec3(x, y);
    }
}