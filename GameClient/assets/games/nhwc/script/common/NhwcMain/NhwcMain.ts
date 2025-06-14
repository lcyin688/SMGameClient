import { UIVControlBase } from './../../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../../c2f-framework/define/C2FEnum';
import NhwcMainModel from './NhwcMainModel';
import NhwcMainView from './NhwcMainView';
import { NhwcUI } from '../../NhwcView';
import { GameConsts } from '../../../../../Script/game/GameConsts';
import { NHWCConsts } from '../../NHWCConsts';
import CountdownLabel from '../../../../../c2f-framework/component/common/CountdownLabel';
import SeatPrepareItem from '../SeatPrepareItem/SeatPrepareItem';
import SeatDeskItem from '../SeatDeskItem/SeatDeskItem';
import Sketchpad from '../Sketchpad/Sketchpad';
import { format } from 'path';
import { RoomState } from '../../../../../resources/proto/RoomState';
import { GameMsgId } from '../../../../../resources/proto/GameMsgId';
const { ccclass, property } = cc._decorator;
@ccclass
export default class NhwcMain extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_NhwcMain';

    public model: NhwcMainModel = undefined;
    public view: NhwcMainView = undefined;
    private intervalId: NodeJS.Timeout;
    protected onLoad(): void {
        this.registerEvent();
        c2f.webSocket.addListener(
            this,
            [
                GameMsgId.MsgId.MSG_SC_NHWCReady,
                GameMsgId.MsgId.MSG_SC_MatchRoom,
                GameMsgId.MsgId.MSG_SC_NHWCStart,
                GameMsgId.MsgId.MSG_SC_ExitRoom,
                GameMsgId.MsgId.MSG_SC_NHWCResult,
                GameMsgId.MsgId.MSG_SC_NHWCOver,
                GameMsgId.MsgId.MSG_SC_NHWCDrawClear,
                GameMsgId.MsgId.MSG_SC_NHWCDrawWidth,
                GameMsgId.MsgId.MSG_SC_NHWCDrawColor,
                GameMsgId.MsgId.MSG_SC_NHWCDrawPath,
                GameMsgId.MsgId.MSG_SC_NHWCAnswer,
            ],
            this.msgReceive.bind(this)
        );
        this.loadSeatItemPrepare(this.preLoadGame.bind(this));
        this.loadSeatItemDesk();

        c2f.res.loadOne(NHWCConsts.CmmPrefab.sketchpad, cc.Prefab).then((resItem: cc.Prefab) => {
            let nodeItem = c2f.utils.view.instantiateMVCPrefab(resItem, this.view.board);
            this.view.board.addChild(nodeItem);
            this.model.sketchpad = nodeItem.getComponent(Sketchpad);
        });
    }
    protected registerEvent(): void {
        // ToggleContainer 案例
        this.view.drawWidthToggleGroupWrapper.addToggleListener((idx, checked) => {
            if (checked) {
                this._handleSelectionDrawWidth(idx);
            }
        });
        this.view.drawColorsToggleGroupWrapper.addToggleListener((idx, checked) => {
            if (checked) {
                this._handleSelectionDrawColor(idx);
            }
        });
    }

    private _handleSelectionDrawWidth(index: number) {
        let width = NHWCConsts.DrawWidthArr[index];
        szg.player.nhwcData.reqNHWCDrawWidth(width);
    }

    private _handleSelectionDrawColor(index: number) {
        cc.log('点击了  ', index);
        let color = this.view.drawColorsToggleContainer.toggleItems[index].node.getChildByName('bg').color;
        let str = color.toCSS('#rrggbb');
        szg.player.nhwcData.reqNHWCDrawColor(str);
    }
    private getIsInit() {
        let isInit = false;
        if (this.model.sketchpad && this.model.seatPrepareItem && this.model.seatDeskItem) {
            isInit = true;
        }
        return isInit;
    }

    private msgReceive(op: number, data: any) {
        if (!this.getIsInit()) {
            this.scheduleOnce(() => {
                this.msgReceive(op, data);
            });
            return;
        }
        switch (op) {
            case GameMsgId.MsgId.MSG_SC_NHWCReady:
                this.onNHWCReady(data);
                break;
            case GameMsgId.MsgId.MSG_SC_MatchRoom:
                this.onMatchRoom(data);
                break;
            case GameMsgId.MsgId.MSG_SC_NHWCStart:
                this.onNHWCStart(data);
                break;
            case GameMsgId.MsgId.MSG_SC_ExitRoom:
                this.onExitRoom(data);
                break;
            case GameMsgId.MsgId.MSG_SC_NHWCResult:
                this.onNHWCResult(data);
                break;
            case GameMsgId.MsgId.MSG_SC_NHWCOver:
                this.onRNHWCOver(data);
                break;
            case GameMsgId.MsgId.MSG_SC_NHWCDrawClear:
                this.onNHWCDrawClear(data);
                break;
            case GameMsgId.MsgId.MSG_SC_NHWCDrawWidth:
                this.onNHWCDrawWidth(data);
                break;
            case GameMsgId.MsgId.MSG_SC_NHWCDrawColor:
                this.onNHWCDrawColor(data);
                break;
            case GameMsgId.MsgId.MSG_SC_NHWCDrawPath:
                this.onNHWCDrawPath(data);
                break;
            case GameMsgId.MsgId.MSG_SC_NHWCAnswer:
                this.onNHWCAnswer(data);
                break;
            default:
                break;
        }
    }

    public async loadSeatItemPrepare(cb) {
        await c2f.res.loadOne(NHWCConsts.CmmPrefab.seatPrepareItem, cc.Prefab).then((resItem: cc.Prefab) => {
            this.model.seatPrepareItem = resItem;
            if (cb) {
                cb();
            }
        });
    }

    public async loadSeatItemDesk() {
        await c2f.res.loadOne(NHWCConsts.CmmPrefab.seatDeskItem, cc.Prefab).then((resItem: cc.Prefab) => {
            this.model.seatDeskItem = resItem;
            if (!this.model.SeatDeskItemArr) {
                this.initSeatDeskItemArr();
            }
            this.reflashSeatDeskArr(szg.player.nhwcData.roomInfo.arrPlayerInfo);
        });
    }

    private initSeatDeskItemArr() {
        this.model.SeatDeskItemArr = [];
        for (let row = 0; row < NHWCConsts.SeatCount; row++) {
            let nodeItem = c2f.utils.view.instantiateMVCPrefab(this.model.seatDeskItem, this.view.seatLayDesk);
            this.view.seatLayDesk.addChild(nodeItem);
            let item = nodeItem.getComponent(SeatDeskItem);
            this.model.SeatDeskItemArr.push(item);
        }
    }
    /** 刷新玩家答题状态 */
    private reflashSeatDeskArr(arr: msg.GameUserItem[]) {
        for (let i = 0; i < this.model.SeatDeskItemArr.length; i++) {
            if (!this.model.SeatDeskItemArr[i]) {
                continue;
            }
            let item = this.model.SeatDeskItemArr[i];
            item.name = `seatDeskItem${i}`;
            if (arr && arr.length > i) {
                item.reflash(arr[i]);
            } else {
                item.reflash(null);
            }
        }
    }

    private preLoadGame() {
        if (!this.model.seatPrepareItemArr) {
            this.initPrepareSeatItemArr();
        }
        this.reflashPrepareSeatArr(szg.player.nhwcData.roomInfo.arrPlayerInfo);
    }

    /** 刷新准备状态 */
    private reflashPrepareSeatArr(arr: msg.GameUserItem[]) {
        for (let i = 0; i < this.model.seatPrepareItemArr.length; i++) {
            let item = this.model.seatPrepareItemArr[i];
            item.name = `prepareSeat${i}`;
            if (arr && arr.length > i) {
                item.reflash(arr[i]);
            } else {
                item.reflash(null);
            }
        }
    }

    private initPrepareSeatItemArr() {
        this.model.seatPrepareItemArr = [];
        for (let row = 0; row < NHWCConsts.SeatCount; row++) {
            let nodeItem = c2f.utils.view.instantiateMVCPrefab(this.model.seatPrepareItem, this.view.seatLayPrepare);
            this.view.seatLayPrepare.addChild(nodeItem);
            let item = nodeItem.getComponent(SeatPrepareItem);
            this.model.seatPrepareItemArr.push(item);
        }
    }

    protected onViewOpen(param: any) {
        if (!this.getIsInit()) {
            this.resetView();
            this.view.alarmClock.active = false;
            this.view.messagePanel.active = true;
            let str = c2f.utils.str.stringFormat(c2f.language.words('7006'), szg.player.nhwcData.roomInfo.rid);
            this.view.centerLabelLabel.string = str;
            this.scheduleOnce(() => {
                this.onViewOpen(param);
            });
            return;
        }

        this.reflashRoomInfo();
    }

    protected onEnable(): void {
        if (super.onEnable) {
            super.onEnable();
        }
        this.on(C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);

        this.intervalId = setInterval(() => {
            this.syncPath();
        }, 200);
    }

    protected onDisable(): void {
        if (super.onDisable) {
            super.onDisable();
        }
        this.off(C2FEnum.UIEvent.ButtonClick);
        clearInterval(this.intervalId);
    }

    private async onButtonClick(eventType: string, component: cc.Button) {
        switch (component.name) {
            case this.view.exitBtnButton.name:
                this.CC_onClickexitBtn();
                break;

            case this.view.prepareBtnButton.name:
                this.CC_onClickprepareBtn();
                break;

            case this.view.answerBtnButton.name:
                this.CC_onClickanswerBtn();
                break;

            case this.view.tipConfirmBtnButton.name:
                this.CC_onClicktipConfirmBtn();
                break;

            case this.view.tipCloseBtnButton.name:
                this.CC_onClicktipCloseBtn();
                break;

            case this.view.sendButton.name:
                this.CC_onClicksend();
                break;

            case this.view.btnChatButton.name:
                this.CC_onClickbtnChat();
                break;

            case this.view.toolSwitchButton.name:
                this.CC_onClicktoolSwitch();
                break;

            case this.view.clearButton.name:
                this.CC_onClickclear();
                break;

            default:
                break;
        }
    }

    private CC_onClickexitBtn() {
        let cData: msg.CS_CreateRoom = {};
        c2f.webSocket.send(GameMsgId.MsgId.MSG_CS_ExitRoom, cData);
    }

    private CC_onClickprepareBtn() {
        szg.player.nhwcData.reqReady();
    }

    private CC_onClicktipConfirmBtn() {}

    private CC_onClicktipCloseBtn() {
        this.view.tips.active = false;
    }
    private CC_onClicktoolSwitch() {
        this.model.isShowChoose = !this.model.isShowChoose;
        cc.tween(this.view.toolPanel)
            .to(0.3, { position: this.model.isShowChoose ? cc.v3(-300, 0, 0) : cc.v3(0, 0, 0) })
            .start();
    }

    private reflashRoomInfo() {
        if (szg.player.nhwcData.roomInfo?.state <= RoomState.RoomState.Ready) {
            this.view.prepare.active = true;
            //获取到自己的状态
            this.view.prepareBtn.active = !szg.player.nhwcData.selfGameUserItem.isReady;
            this.view.preparedBtn.active = szg.player.nhwcData.selfGameUserItem.isReady;
        } else {
            this.view.prepare.active = false;
            //如果游戏已经开始了就刷新到最新状态
            this.onGameStart();
            if (szg.player.nhwcData.selfGameUserItem.seat == szg.player.nhwcData.roomInfo.painter) {
                //自己是画师的时候
                this.view.messagePanel.active = false;
                this.view.answerBtn.active = false;
                let str = szg.player.nhwcData.roomInfo.word;
                this.view.centerLabelLabel.string = str;

                this.model.sketchpad.enableDraw();
                this.view.tips.active = false;
                this.view.toolPanel.active = true;
                this.view.answerBtn.active = false;
            } else {
                this.view.answerBtn.active = true;
                this.view.tips.active = false;
                let str = szg.player.nhwcData.roomInfo.hint;
                this.view.centerLabelLabel.string = str;
                this.model.sketchpad.disableDraw();
                this.view.toolPanel.active = false;
                //答题按钮
                this.view.answerBtn.active = true;
            }
        }
    }

    /**准备的广播消息 */
    private onNHWCReady(data: msg.SC_NHWCReady) {
        this.reflashRoomInfo();
        this.reflashPrepareSeatArr(szg.player.nhwcData.roomInfo.arrPlayerInfo);
    }

    /**房间内其他玩家的匹配广播消息 */
    private onMatchRoom(data: msg.SC_MatchRoom) {
        this.reflashRoomInfo();
        this.reflashPrepareSeatArr(szg.player.nhwcData.roomInfo.arrPlayerInfo);
    }

    private showTicker(countdownLabel: CountdownLabel, interval: number) {
        countdownLabel.startCountdown(interval, '%{hh}:%{mm}:%{ss}', null, null, () => {});
    }
    public hideTicker() {
        this.view.timeCountdownLabel.stopCountdown();
        this.view.timeLabel.string = '-';
    }
    /**倒计时显示 */
    private setTimeCountDownScore(countdownLabel: CountdownLabel, interval: number) {
        let dayStr = '%{d}' + c2f.language.words('2504') + '%{hh}:%{mm}:%{ss}';
        countdownLabel.startCountdown(
            interval,
            {
                S: '%{ss}',
                M: '%{mm}:%{ss}',
                H: '%{hh}:%{mm}:%{ss}',
                D: dayStr,
            },
            c2f.language.words('39110'),
            null,
            () => {}
        );
    }

    private resetView() {
        this.view.prepare.active = false;
        this.view.desk.active = false;
        this.view.toolPanel.active = false;
        this.view.messagePanel.active = false;
        this.view.overPanel.active = false;
    }

    /**游戏开始消息 */
    private onNHWCStart(data: msg.SC_NHWCStart) {
        this.view.prepare.active = false;
        this.view.desk.active = true;
        //如果是画师就告诉他答案 然后画师去画画

        if (szg.player.nhwcData.roomInfo.gameNum === 1) {
            this.onGameStart();
        }
        this.model.sketchpad.clear();

        if (szg.player.nhwcData.selfGameUserItem.seat == szg.player.nhwcData.roomInfo.painter) {
            //自己是画师的时候
            this.view.messagePanel.active = false;
            this.view.answerBtn.active = false;
            let str = c2f.utils.str.stringFormat(c2f.language.words('7008'), szg.player.nhwcData.roomInfo.word);
            this.view.centerLabelLabel.string = str;

            this.model.sketchpad.enableDraw();
            this.view.tips.active = false;
            this.view.toolPanel.active = true;
        } else {
            this.view.answerBtn.active = true;
            this.view.tips.active = true;
            let str = c2f.utils.str.stringFormat(c2f.language.words('7009'), szg.player.nhwcData.roomInfo.hint);
            this.view.centerLabelLabel.string = str;
            this.view.tipInputEditBox.string = str;
            this.model.sketchpad.disableDraw();
            this.view.toolPanel.active = false;
        }
        this.showTicker(this.view.timeCountdownLabel, szg.player.nhwcData.roomInfo.gameTime);
        this.hideAllTip();
    }

    public hideAllTip() {
        for (let i = 0; i < this.model.SeatDeskItemArr.length; i++) {
            this.model.SeatDeskItemArr[i].hideTip();
        }
    }

    private onGameStart() {
        this.view.desk.active = true;
        this.reflashSeatDeskArr(szg.player.nhwcData.roomInfo.arrPlayerInfo);
    }

    /**退出房间 */
    private onExitRoom(data: msg.SC_ExitRoom) {
        let item = szg.player.nhwcData.getGameUserItemById(data.account);
        if (item) {
            if (item.plyer.account == szg.player.nhwcData.selfInfo.account) {
                c2f.gui.open(NhwcUI.NhwcHall);
                this.closeView();
            } else {
                this.model.seatPrepareItemArr[item.seat].reflash(null);
                this.model.SeatDeskItemArr[item.seat].reflash(null);
            }
        }

        szg.player.nhwcData.onExitRoom(data);
    }

    /** 小局游戏结束 */
    private onNHWCResult(data: msg.SC_NHWCResult) {
        this.showTicker(this.view.timeCountdownLabel, szg.player.nhwcData.roomInfo.resultTime);
        this.view.answerBtn.active = false;
        let str = c2f.utils.str.stringFormat(c2f.language.words('7012'), szg.player.nhwcData.roomInfo.word);
        this.view.centerLabelLabel.string = str;
        this.model.sketchpad.disableDraw();
        this.view.messagePanel.active = true;
        this.view.toolPanel.active = false;
    }

    /** 游戏结束 */
    private onRNHWCOver(data: msg.SC_NHWCOver) {
        this.view.answerBtn.active = false;
        this.view.overPanel.active = true;
        this.view.centerLabelLabel.string = c2f.language.words('7013');
        setTimeout(() => {
            c2f.gui.open(NhwcUI.NhwcHall);
            this.closeView();
        }, 5000);
    }

    /** 游戏绘画清理 */
    private onNHWCDrawClear(data: msg.SC_NHWCDrawClear) {
        this.model.sketchpad.clear();
    }

    /** 游戏绘画Width */
    private onNHWCDrawWidth(data: msg.SC_NHWCDrawWidth) {
        this.model.sketchpad.setLineWidth(data.width);
    }

    /** 游戏绘画颜色 */
    private onNHWCDrawColor(data: msg.SC_NHWCDrawColor) {
        this.model.sketchpad.setPenColor(data.color);
    }

    /** 游戏绘画path */
    private onNHWCDrawPath(data: msg.SC_NHWCDrawPath) {
        this.model.sketchpad.drawByPath(data.pointArr);
    }

    /** 回答结果 */
    private onNHWCAnswer(data: msg.SC_NHWCAnswer) {
        if (data.isRight) {
            data.arrPlayerInfo.forEach((v) => {
                if (v.seat != szg.player.nhwcData.selfGameUserItem.seat) {
                    this.view.answerBtn.active = false;
                }
                if (v.seat != szg.player.nhwcData.roomInfo.painter) {
                    this.answerRight(v.seat, v.score);
                }
            });
            this.reflashSeatDeskArr(szg.player.nhwcData.roomInfo.arrPlayerInfo);
        } else {
            this.answerWrong(data.seat);
        }
    }

    private answerWrong(seat: number) {
        this.model.SeatDeskItemArr[seat].showTip(c2f.language.words('7010'));
    }

    private answerRight(seat: number, score: number) {
        this.model.SeatDeskItemArr[seat].showTip(c2f.utils.str.formatWithObj(c2f.language.words('7011'), score));
    }

    private CC_onClickanswerBtn() {
        this.view.answerBtn.active = false;
        this.showMessAgePanel();
    }

    // 同步绘画信息
    syncPath() {
        if (!this.model.sketchpad) {
            return;
        }
        if (this.model.sketchpad.model.isDrawing && this.model.sketchpad.model.path.length > 0) {
            let path = this.model.sketchpad.popPath();
            szg.player.nhwcData.reqNHWCDrawPath(path);
        }
    }
    private CC_onClickclear() {
        this.model.sketchpad.clear();
        szg.player.nhwcData.reqNHWCDrawClear();
    }

    private showMessAgePanel() {
        this.view.messagePanel.active = true;
        this.model.isShowChat = !this.model.isShowChat;
        cc.tween(this.view.messageP)
            .to(0.3, { position: cc.v3(this.model.isShowChat ? 0 : 720, 0) })
            .start();
    }
    private CC_onClicksend() {
        if (this.view.messageEditBox.string.length > 0) {
            // szg.player.nhwcData.reqNHWCMessage(this.view.messageEditBox.string);
            this.view.messageEditBox.string = '';
        }
    }

    private CC_onClickbtnChat() {
        this.showMessAgePanel();
    }
}
