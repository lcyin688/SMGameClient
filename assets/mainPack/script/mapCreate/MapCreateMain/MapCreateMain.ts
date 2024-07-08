import { UIVControlBase } from './../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import MapCreateMainModel from './MapCreateMainModel';
import MapCreateMainView from './MapCreateMainView';
import MapCreatItem from '../MapCreatItem/MapCreatItem';
import { GameConsts } from '../../../../Script/game/GameConsts';
import { UIPa } from '../../../../Script/game/UIParam';

const { ccclass, property } = cc._decorator;
@ccclass
export default class MapCreateMain extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_MapCreateMain';

    public model: MapCreateMainModel = undefined;
    public view: MapCreateMainView = undefined;

    protected onLoad(): void {
        this.view.tabGroupTabPage.quickSetTabHnadler(this, "CC_onTabPageClick");
        // 添加鼠标按下事件监听器
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, this.onMouseUp, this);
        // 添加鼠标移动事件监听器
        this.node.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseMove, this);

    }

    protected onViewOpen(param: any) {
        this.getCurData()
        this.loadTabItemFirst(this.startGame.bind(this))

    }


    protected onEnable(): void {
        if (super.onEnable) {
            super.onEnable();
        }
        this.on(C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    }

    protected onDisable(): void {
        if (super.onDisable) {
            super.onDisable();
        }
        this.off(C2FEnum.UIEvent.ButtonClick);
    }

    private async onButtonClick(eventType: string, component: cc.Button) {
        switch (component.name) {

            case this.view.btnSaveButton.name:
                this.CC_onClickbtnSave();
                break;

            case this.view.btnNewButton.name:
                this.CC_onClickbtnNew();
                break;

            default:
                break;
        }
    }

    private CC_onClickbtnSave() {
        // var Path = require('path');
        // var relativePath = Path.relative(__dirname, Path.join(Editor.projectInfo.path, 'assets'));
        // console.log(relativePath);
        // let str = this.getStarAllData(this.model.curLv)
        // var fs = require('fs');
        // fs.writeFile('/output.txt', str, (err) => {
        //     if (err) throw err;
        //     console.log('The file has been saved!');
        // });


    }

    //读取配置中的元素
    private getStarAllData(index: number) {
        let str = ""
        let arr: number[][] = this.model.starDataArr
        str += "[" + index + "]: [\n"
        for (let col = 0; col < 10; col++) {
            str += "["
            for (let row = 0; row < 10; row++) {
                str += arr[col][row] + ","
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

    private CC_onClickbtnNew() {
        this.getCurData()
        this.startGame()
    }


    private CC_onTabPageClick(subName: string) {
        if (this.model.curSelect == subName) {
            return;
        }
        this.model.curSelect = subName
    }


    private getCurData() {
        this.model.curLv = this.getCurLv()
        this.model.initData();
    }

    private getCurLv() {
        let lv = 0
        if (this.view.editBoxEditBox.string && this.view.editBoxEditBox.string != "") {
            lv = parseInt(this.view.editBoxEditBox.string)
        }
        return lv
    }

    public async loadTabItemFirst(cb) {
        await c2f.res.loadOne(GameConsts.CmmPrefab.mapCreatItem, cc.Prefab).then((resItem: cc.Prefab) => {
            this.model.blockItem = resItem;
            if (cb) {
                cb();
            }
        })
    }

    private startGame() {
        if (!this.model.starItemMap) {
            this.initItemArr()
        }
        for (let row = 0; row < 10; row++) {
            for (let column = 0; column < 10; column++) {
                let initPosition = this.model.getStarPosition(row, column);
                let item = this.model.starItemMap.get(row).get(column);
                let nodeItem = item.node
                nodeItem.name = `block${column}_${row}`
                nodeItem.setPosition(initPosition);
                let typ = this.model.starDataArr[row][column]
                let itemData = UIPa.StarItemData[typ]
                let score = 0
                let url = ""
                if (itemData) {
                    score = itemData.score
                    url = itemData.url
                }
                let dataItem: UIPa.DesStarItemArgs = {
                    typ: typ,
                    score: score,
                    url: url,
                    column: column,
                    row: row,
                    cbFun: this.clickItemCb.bind(this),
                }
                item.setInit(dataItem);
            }
        }
    }
    private initItemArr() {
        this.model.starItemMap = new Map();
        for (let row = 0; row < 10; row++) {
            let mapItem: Map<number, MapCreatItem> = new Map()
            for (let column = 0; column < 10; column++) {
                let nodeItem = c2f.utils.view.instantiateMVCPrefab(this.model.blockItem, this.view.content);
                this.view.content.addChild(nodeItem)
                let blockItem = nodeItem.getComponent(MapCreatItem)
                mapItem.set(column, blockItem)
            }
            this.model.starItemMap.set(row, mapItem)
        }
    }

    private clickItemCb(data: UIPa.DesStarItemArgs) {
        let item = this.model.starItemMap.get(data.row).get(data.column);
        let score = 0
        let url = ""
        let typ = this.model.getCurIndex()
        let itemData = UIPa.StarItemData[typ]
        if (itemData) {
            score = itemData.score
            url = itemData.url
        }
        data.typ = typ
        data.score = score
        data.url = url
        item.setInit(data);
        this.model.starDataArr[data.row][data.column] = typ
    }

    // 鼠标按下事件处理器
    private onMouseDown(event) {
        szg.player.public.isMouseDown = true
    }

    private onMouseUp(event) {
        szg.player.public.isMouseDown = false
    }

    // 鼠标移动事件处理器
    onMouseMove(event) {
        console.log('Mouse move to:', event.getLocation());
        // 检查鼠标是否在UI上
        // if (this.node.contains(event.target)) {
        //     console.log('Mouse is still over the UI');
        // }
    }

}