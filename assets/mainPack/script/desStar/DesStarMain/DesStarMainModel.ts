import { GameConsts } from '../../../../Script/game/GameConsts';
import { UIPa } from '../../../../Script/game/UIParam';
import { starCfg } from '../../../../c2f-framework/game/starCfg';
import BlockItem from '../BlockItem/BlockItem';
import { UIModelBase } from './../../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class DesStarMainModel extends UIModelBase {

    /** 预制名 给实例调用 */
    public prefabName = 'F_DesStarMain';
    public blockTotalNum: number;
    public curLv: number
    public starDataArr: number[][]
    public isActionRunning: boolean
    public visibleSize: cc.Size
    public blockItem: cc.Prefab;
    public startItem: cc.Prefab;


    /** 行  列 */
    public starItemMap: Map<number, Map<number, BlockItem>>
    public totalShowScore: number
    public curScore: number

    public initData() {
        this.blockTotalNum = 5
        this.curLv = c2f.storage.getNumber(GameConsts.StorageKey.curLv)
        this.visibleSize = cc.view.getVisibleSize()
        this.getDataByLv(this.curLv)
        // this.getCfgStr()

    }
    public getDataByLv(lv: number) {
        this.starDataArr = this.getStarDataArr(lv)
        this.curScore = 0
        this.totalShowScore = 0
        let scorTotal = 0
        this.starDataArr.forEach(vv => {
            vv.forEach(v => {
                let item = UIPa.StarItemData[v]
                scorTotal += item.score
            });
        });
        this.totalShowScore = Math.ceil(scorTotal * 0.8)
    }

    private getStarDataArr(lv: number) {
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
        if (starCfg[lv]) {
            for (let col = 0; col < 10; col++) {
                for (let row = 0; row < 10; row++) {
                    arr[col][row] = starCfg[lv][col][row]
                }
            }
            return arr
        } else {
            return this.getStarLvData(arr)
        }
    }


    private getStarLvData(arr: number[][]) {
        for (let col = 0; col < 10; col++) {
            for (let row = 0; row < 10; row++) {
                let num = c2f.random.getRandomInt(0, this.blockTotalNum, 1)
                arr[col][row] = num
            }
        }
        return arr
    }
    /**生成配置 */
    private getCfgStr() {
        let str = ""
        for (let i = 1; i < 10; i++) {
            str += this.getStarAllData(i)
        }
        console.log(str)
    }
    //读取配置中的元素
    private getStarAllData(index: number) {
        let str = ""
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
        str += "[" + index + "]: [\n"
        for (let col = 0; col < 10; col++) {
            str += "["
            for (let row = 0; row < 10; row++) {
                let num = c2f.random.getRandomInt(0, this.blockTotalNum, 1)
                arr[col][row] = num
                str += num + ","
            }
            if (col < 9) {
                str += "],\n"
            } else {
                str += "]\n"
            }

        }
        str += "],\n"
        return str
    }


    public getStarPosition(column: number, row: number): cc.Vec3 {
        const w = UIPa.DesStarGameArgs.width;
        const h = UIPa.DesStarGameArgs.heigh;
        let x = (row + 1 / 2) * w
        let y = (column + 1 / 2) * h
        return new cc.Vec3(x, y);
    }

    public findSameStarIndex(row: number, col: number, checkedRowAndCol?: UIPa.DesStarBase[], result?: UIPa.DesStarBase[]): UIPa.DesStarBase[] {
        if (row < 0 || col < 0 || row > 9 || col > 9) return [];
        const targetValue = this.starDataArr[row][col];
        if (targetValue == -1) return [];
        if (!checkedRowAndCol) checkedRowAndCol = [{ row, column: col }];
        else {
            for (let i = 0; i < checkedRowAndCol.length; i++) {
                if (checkedRowAndCol[i].row == row && checkedRowAndCol[i].column == col) {
                    return [];
                }
            }
            checkedRowAndCol.push({ row, column: col });
        }
        if (!result) result = [];

        // 先找上边
        if (row < 9) {
            if (this.starDataArr[row + 1][col] == targetValue) {
                this.putIndexTo(result, row + 1, col);
                this.findSameStarIndex(row + 1, col, checkedRowAndCol, result);
            }
        }
        /**找下边 */
        if (row > 0) {
            if (this.starDataArr[row - 1][col] == targetValue) {
                this.putIndexTo(result, row - 1, col);
                this.findSameStarIndex(row - 1, col, checkedRowAndCol, result)
            }
        }
        // 再找右边
        if (col < 9) {
            if (this.starDataArr[row][col + 1] == targetValue) {
                this.putIndexTo(result, row, col + 1);
                this.findSameStarIndex(row, col + 1, checkedRowAndCol, result);
            }
        }

        // 再找左边
        if (col > 0) {
            if (this.starDataArr[row][col - 1] == targetValue) {
                this.putIndexTo(result, row, col - 1);
                this.findSameStarIndex(row, col - 1, checkedRowAndCol, result);
            }
        }
        return result;
    }
    /** 满足条件并且没有添加过就加入 */
    private putIndexTo(baseArr: UIPa.DesStarBase[], row: number, col: number): void {
        for (let i = 0; i < baseArr.length; i++) {
            if (baseArr[i].row == row && baseArr[i].column == col) return;
        }
        baseArr.push({ row, column: col });
    }


}