import { UIVControlBase } from './../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import DesStarMainModel from './DesStarMainModel';
import DesStarMainView from './DesStarMainView';
import { EntranceUI } from '../../../../entrance/script/EntranceView';
import { UIHelper } from '../../../../Script/game/UIHelper';
import { GameConsts } from '../../../../Script/game/GameConsts';
import BlockItem from '../BlockItem/BlockItem';
import { UIPa } from '../../../../Script/game/UIParam';
import StartItem from '../StartItem/StartItem';

const { ccclass, property } = cc._decorator;
@ccclass
export default class DesStarMain extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_DesStarMain';

    public model: DesStarMainModel = undefined;
    public view: DesStarMainView = undefined;

    protected onViewOpen(param: any) {
        this.initAudioState()
        this.model.initData()
        this.resetGame()
        this.loadTabItemFirst(this.startGame.bind(this))
        this.loadStarItem()
        UIHelper.playEffect('ready_go');
    }
    private initAudioState() {
        let state = c2f.storage.getBoolean(GameConsts.StorageKey.soundBg)
        c2f.audio.bgmOff = state;
        let stateEff = c2f.storage.getBoolean(GameConsts.StorageKey.soundEff)
        c2f.audio.sfxOff = stateEff;
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

            case this.view.btnMenuButton.name:
                this.CC_onClickbtnMenu();
                break;


            default:
                break;
        }
    }


    private CC_onClickbtnMenu() {
        UIHelper.playEffect('betClick');
        c2f.gui.open(EntranceUI.SoundSet)
    }
    public async loadTabItemFirst(cb) {
        await c2f.res.loadOne(GameConsts.CmmPrefab.blockItem, cc.Prefab).then((resItem: cc.Prefab) => {
            this.model.blockItem = resItem;
            if (cb) {
                cb();
            }
        })
    }

    public async loadStarItem() {
        await c2f.res.loadOne(GameConsts.CmmPrefab.P_StartItem, cc.Prefab).then((resItem: cc.Prefab) => {
            this.model.startItem = resItem;
        })
    }

    private initItemArr() {
        this.model.starItemMap = new Map();
        for (let row = 0; row < 10; row++) {
            let mapItem: Map<number, BlockItem> = new Map()
            for (let column = 0; column < 10; column++) {
                let nodeItem = c2f.utils.view.instantiateMVCPrefab(this.model.blockItem, this.view.content);
                this.view.content.addChild(nodeItem)
                let blockItem = nodeItem.getComponent(BlockItem)
                mapItem.set(column, blockItem)
            }
            this.model.starItemMap.set(row, mapItem)
        }
    }


    private setBarView() {
        this.view.txtScoreLabel.string = "{0}/{1}".format(this.model.curScore, this.model.totalShowScore)
        let perNum = this.model.curScore / this.model.totalShowScore;
        if (perNum > 1) {
            perNum = 1
        }
        this.view.barProgressBar.progress = perNum;
    }
    private startGame() {
        this.setBarView()
        this.model.isActionRunning = false
        if (!this.model.starItemMap) {
            this.initItemArr()
        }
        this.view.txtLvLabel.string = (this.model.curLv + 1).toString()
        let actionDelay = 0;
        for (let row = 0; row < 10; row++) {
            actionDelay = 0.02 * row;
            for (let column = 0; column < 10; column++) {
                actionDelay += 0.02
                let initPosition = this.model.getStarPosition(row, column);
                initPosition.y += this.model.visibleSize.height;
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
                cc.tween(nodeItem)
                    .to(0.2 + actionDelay, { position: this.model.getStarPosition(row, column) })
                    .start()
            }
        }

    }

    private judgeFinal(result: UIPa.DesStarBase[], starDataArr: number[][]) {
        let rowAndCol: UIPa.DesStarBase
        let score = 0
        for (let i = 0; i < result.length; i++) {
            rowAndCol = result[i];
            //播放爆炸效果  应该是要爆炸后飞星星特效
            let item = this.model.starItemMap.get(rowAndCol.row).get(rowAndCol.column);
            item.playChoose();
            score += item.model.data.score
            starDataArr[rowAndCol.row][rowAndCol.column] = -1;
        }

        let tweenItem = cc.tween(this.node)
        for (let i = 0; i < result.length; i++) {
            rowAndCol = result[i];
            //播放爆炸效果  应该是要爆炸后飞星星特效
            UIHelper.playEffect('getMoney');
            let item = this.model.starItemMap.get(rowAndCol.row).get(rowAndCol.column);
            tweenItem.call(() => {
                this.model.curScore += item.model.data.score
                item.playExplode(() => {
                    this.setBarView()
                    this.playStartAni(item.node)
                });
            }).delay(0.02)
        }
        let countHave = this.getHaveCount()
        tweenItem.call(() => {
            this.showReward(score)
            this.scheduleOnce(() => {
                if (countHave <= 1) {//如果完成了游戏
                    this.winGame(countHave)
                } else {
                    this.drawBlock(starDataArr)
                }
            }, 0.8)
        }).start()


    }

    private playStartAni(nodeTemp: cc.Node) {
        let itemNode = c2f.utils.view.instantiateMVCPrefab(this.model.startItem, this.view.content);
        this.view.content.addChild(itemNode)
        let starItem = itemNode.getComponent(StartItem)
        starItem.playAni()
        itemNode.setPosition(nodeTemp.position)

        let worldPoint = this.view.endPos.parent.convertToWorldSpaceAR(this.view.endPos.position);
        let endPos = this.view.content.convertToNodeSpaceAR(worldPoint);
        let config: UIPa.MoveConfig = {
            startPos: nodeTemp.position,
            endPos: endPos,
        }
        UIHelper.createBezier(itemNode, config)
        cc.tween(itemNode).to(0.8, {}, UIHelper.createBezier(itemNode, config)).delay(0.2).call(() => {
            itemNode.destroy()
        }).start()
    }


    private showReward(score: number) {
        UIHelper.playEffect('select');
        if (score > 400) {
            this.playWinByIndex(5)
        } else if (score > 200) {
            this.playWinByIndex(4)
        } else if (score > 100) {
            this.playWinByIndex(3)
        } else if (score > 50) {
            this.playWinByIndex(2)
        } else if (score > 20) {
            this.playWinByIndex(1)
        }
    }

    private playWinByIndex(index: number) {
        UIHelper.playEffect('reward_' + index);
        this.view.reward.active = true;
        this.view.reward.setScale(0.8)
        this.view.reward.opacity = 120
        c2f.utils.view.changeSpriteFrame(this.view.rewardSprite, GameConsts.ResUrl.desStar + 'reward_' + index)
        cc.Tween.stopAllByTarget(this.view.reward)
        cc.tween(this.view.reward).to(0.3, { scale: 1.8 }).start()
        cc.tween(this.view.reward).to(0.3, { opacity: 255 }).call(() => {
            this.view.reward.active = false
        }).start()
    }

    private clickItemCb(data: UIPa.DesStarItemArgs) {
        if (!this.model.isActionRunning) {
            UIHelper.playEffect('select');
            this.model.isActionRunning = true;
            const result = this.model.findSameStarIndex(data.row, data.column);
            if (result.length > 1) {
                const starDataArr = this.model.starDataArr;
                this.judgeFinal(result, starDataArr)
            } else {
                this.model.isActionRunning = false;
            }
        }
    }

    private drawBlock(starDataArr: number[][]) {
        // 先整体往下，再往左
        const starMoveData: UIPa.MoveData[] = [];
        for (let r = 0; r < 10; r++) {
            for (let c = 0; c < 10; c++) {
                if (starDataArr[r][c] == -1) {
                    let rowTop = r + 1;
                    while (rowTop < 10 && starDataArr[rowTop][c] == -1) {
                        rowTop += 1;
                    }
                    if (rowTop < 10) {
                        starDataArr[r][c] = starDataArr[rowTop][c];
                        starDataArr[rowTop][c] = -1;
                        let moveDataItem: UIPa.MoveData = {
                            fromRow: rowTop,
                            fromCol: c,
                            toRow: r,
                            toCol: c
                        }
                        starMoveData.push(moveDataItem);
                    }
                }
            }
        }
        let isColEmpty = false;
        let b = false;
        for (let c = 8; c > -1; c--) {
            isColEmpty = true;
            for (let r = 0; r < 10; r++) {
                if (starDataArr[r][c] != -1) {
                    isColEmpty = false;
                    break;
                }
            }
            if (isColEmpty) {
                for (let newCol = c + 1; newCol < 10; newCol++) {
                    for (let r = 0; r < 10; r++) {
                        starDataArr[r][newCol - 1] = starDataArr[r][newCol];
                        starDataArr[r][newCol] = -1;
                        // 不等于-1，才有移动的需求
                        if (starDataArr[r][newCol - 1] != -1) {
                            b = false;
                            for (let i = 0; i < starMoveData.length; i++) {
                                if (starMoveData[i].toRow == r && starMoveData[i].toCol == newCol) {
                                    starMoveData[i].toRow = r;
                                    starMoveData[i].toCol = newCol - 1;
                                    b = true;
                                    break;
                                }
                            }
                            if (!b) {
                                starMoveData.push({
                                    fromRow: r,
                                    fromCol: newCol,
                                    toRow: r,
                                    toCol: newCol - 1
                                });
                            }
                        }
                    }
                }
            }
        }
        const starMoveDataLength = starMoveData.length;
        if (starMoveDataLength > 0) {
            let actionCount = 0;
            for (let i = 0; i < starMoveDataLength; i++) {
                let moveData = starMoveData[i];
                actionCount++;
                let item = this.model.starItemMap.get(moveData.fromRow).get(moveData.fromCol);
                cc.tween(item.node)
                    .to(0.2, { position: this.model.getStarPosition(moveData.toRow, moveData.toCol) })
                    .call(() => {
                        if (--actionCount == 0) {
                            //所有元素重置下位置
                            this.model.isActionRunning = false;
                            this.resetView()
                        }
                    })
                    .start()
            }
        } else {
            this.model.isActionRunning = false;
        }
    }



    private resetView() {
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
        let countHave = this.getHaveCount()
        if (countHave <= 1) {//如果完成了游戏
            this.winGame(countHave)
            return
        }

    }

    private getHaveCount(): number {
        let maxCount = 0
        //最多的只有一个的时候也需要完成
        let mapItem: Map<number, number> = new Map()
        for (let i = 0; i < this.model.starDataArr.length; i++) {
            let row = this.model.starDataArr[i]
            for (let j = 0; j < row.length; j++) {
                let typ = row[j]
                if (typ >= 0) {
                    let item = mapItem.get(typ)
                    if (item) {
                        let curCount = item + 1
                        mapItem.set(typ, curCount)
                    } else {
                        mapItem.set(typ, 1)
                    }
                }
            }
        }
        mapItem.forEach(v => {
            if (v > maxCount) {
                maxCount = v
            }
        });
        return maxCount
    }

    private winGame(count: number) {
        if (count == 1) {//单独爆炸
            for (let row = 0; row < 10; row++) {
                for (let column = 0; column < 10; column++) {
                    let typ = this.model.starDataArr[row][column]
                    let item = this.model.starItemMap.get(row).get(column);
                    if (typ > 0) {
                        this.model.curScore += item.model.data.score
                        item.playChoose();
                        item.playExplode(() => {
                            this.setBarView()
                            this.playStartAni(item.node)
                        });
                    }
                    break;
                }
            }
            this.enterNextLv()
        } else {
            this.enterNextLv()
        }
    }
    private enterNextLv() {
        this.scheduleOnce(() => {
            this.model.curLv++
            c2f.storage.setNumber(GameConsts.StorageKey.curLv, this.model.curLv)
            this.model.getDataByLv(this.model.curLv)
            this.startGame()
        }, 1)
    }

    private resetGame() {
        this.view.reward.active = false
    }

}