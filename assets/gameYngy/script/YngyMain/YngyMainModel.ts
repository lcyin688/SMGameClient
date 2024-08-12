import { GameConsts } from '../../../Script/game/GameConsts';
import { UIPa } from '../../../Script/game/UIParam';
import { YngyCfg } from '../YngyCfg';
import { UIModelBase } from './../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class YngyMainModel extends UIModelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_YngyMain';
    public itemMap1: Map<number, Map<number, UIPa.YngyItemArgs>> = null
    public itemMap2: Map<number, Map<number, UIPa.YngyItemArgs>> = null
    public itemMap3: Map<number, Map<number, UIPa.YngyItemArgs>> = null
    public itemMap4: Map<number, Map<number, UIPa.YngyItemArgs>> = null
    public itemMapArr: Map<number, Map<number, UIPa.YngyItemArgs>>[] = []


    public initDataByLv(lv: number, clickFun: Function) {
        let pad = GameConsts.YngyConst.ItemWidthHeight
        let totalCount = this.getAllCount(lv)
        let count = Math.floor(totalCount / 3)
        let allData = this.getRadomTypeArr(count)
        this.itemMap1 = new Map()
        this.itemMap2 = new Map()
        this.itemMap3 = new Map()
        this.itemMap4 = new Map()
        let index = 0
        this.pushItemArr(YngyCfg[lv - 1].lay1, index, allData, 0, clickFun)
        this.pushItemArr(YngyCfg[lv - 1].lay2, index, allData, 1, clickFun)
        this.pushItemArr(YngyCfg[lv - 1].lay3, index, allData, 2, clickFun)
        this.pushItemArr(YngyCfg[lv - 1].lay4, index, allData, 3, clickFun)
        this.itemMapArr = []
        this.itemMapArr.push(this.itemMap1, this.itemMap2, this.itemMap3, this.itemMap4)
        this.reflashHideStatestate()
    }
    private reflashHideStatestate() {

        for (let i = 0; i < this.itemMapArr.length; i++) {
            let vCeng = this.itemMapArr[i];
            vCeng.forEach((vHang, keyHang) => {
                vHang.forEach((vItem, keyLie) => {
                    let hideState = this.getHideState(vItem)
                    vItem.hideState = hideState
                });
            });
        }
    }
    private getHideState(vItem: UIPa.YngyItemArgs) {
        let cengIndex = vItem.cengIndex
        let keyHang = vItem.xIndex
        let keyLie = vItem.YIndex
        let hideState = false
        for (let i = cengIndex; i < 4; i++) {
            let vCeng = this.itemMapArr[i];
            if (cengIndex % 2 == i % 2) {
                let mapItem1 = vCeng.get(keyHang)
                if (mapItem1) {
                    let vItem = mapItem1.get(keyLie)
                    if (vItem) {
                        hideState = true
                        break
                    }
                }
            } else {//有一个挡住那就挡住了
                let mapItem1 = vCeng.get(keyHang)
                if (mapItem1) {
                    let vItem = mapItem1.get(keyLie)
                    if (vItem) {
                        hideState = true
                        break
                    }
                }
            }



        }


        return false
    }


    private pushItemArr(data: number[][], index: number, allData: Array<number>, ceng: number, clickFun: Function) {
        let itemMap: Map<number, Map<number, UIPa.YngyItemArgs>>
        switch (ceng) {
            case 0:
                itemMap = this.itemMap1
                break;
            case 1:
                itemMap = this.itemMap2
                break;
            case 2:
                itemMap = this.itemMap3
                break;
            case 3:
                itemMap = this.itemMap4
                break;
        }

        for (let x = 0; x < data.length; x++) {
            const v = data[x];
            for (let y = 0; y < v.length; y++) {
                const vv = v[y];
                if (vv == 1) {
                    let itemData: UIPa.YngyItemArgs = {
                        cengIndex: ceng,
                        xIndex: x,
                        YIndex: y,
                        typ: allData[index],
                        state: UIPa.YngyItemArgsStates.Alive,
                        hideState: false,
                        clickFun: clickFun
                    }
                    let mapItem1 = itemMap.get(x)
                    if (mapItem1) {
                        mapItem1.set(y, itemData)
                    } else {
                        let mapItem1 = new Map<number, UIPa.YngyItemArgs>()
                        mapItem1.set(y, itemData)
                        itemMap.set(x, mapItem1)
                    }
                    index++
                }
            }

        }
    }


    private getAllCount(lv: number) {
        let count = 0;
        this.getCount(YngyCfg[lv - 1].lay1, count)
        this.getCount(YngyCfg[lv - 1].lay2, count)
        this.getCount(YngyCfg[lv - 1].lay3, count)
        this.getCount(YngyCfg[lv - 1].lay4, count)
        return count
    }

    private getCount(data: number[][], count: number) {
        data.forEach(v => {
            v.forEach(vv => {
                if (vv == 1) {
                    count++
                }
            });
        });
    }



    private getRadomTypeArr(allCount: number) {
        let allData: Array<number> = [];
        let types: Array<number> = [0, 1, 2, 3, 4, 5];
        for (let i = 0; i < allCount; i) {
            let index = Math.floor(Math.random() * types.length);
            if (types.length == 0) {
                types = [0, 1, 2, 3, 4, 5];
            }
            allData.push(types[index]);
            allData.push(types[index]);
            allData.push(types[index]);
            types.splice(index, 1);
        }

        return allData;
    }


}