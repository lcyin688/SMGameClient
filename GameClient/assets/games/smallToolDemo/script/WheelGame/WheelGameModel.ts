import { SmallToolDemoCfg } from '../SmallToolDemoCfg';
import { SmallToolDemoUIPa } from '../SmallToolDemoUIPa';
import { UIModelBase } from './../../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class WheelGameModel extends UIModelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_WheelGame';
    /** 当前游戏列表，二维数组 */
    public curGameList: number[][] = [];

    /** 大厅游戏列表 */
    private hallGameMap = new Map<string, number[][]>();
    public groupList = ['all', 'myFavorite', 'hot', 'hundred', 'slots', 'poker', 'casual', 'new'];
    /** 当前分组下标 */
    public curGroupIndex: number = 0;
    public isShowWithDrawer: boolean = false;
    public isShowShop: boolean = false;
    public groupMap: Map<string, SmallToolDemoUIPa.GameEntryConf[]> = new Map();
    /** 列表移动速度 */
    public ListMoveSpeed: number = 1500;

    public initGameList(callBack: Function) {
        this.groupMap = new Map();
        let arrTemp: SmallToolDemoUIPa.GameEntryConf[] = [];
        Object.entries(SmallToolDemoCfg.GameId).forEach(([k, v]) => {
            let tempItem: SmallToolDemoUIPa.GameEntryConf = {
                gameId: v,
                animFilesName: '',
                isBigIcon: v % 10 == 0,
                isLock: false,
                isGuide: v % 100 == 0,
                isHot: v % 100 == 0,
                isNew: false,
                vendorName: '',
                vendorIcon: '',
                comingsoonStart: false,
                safeguard: false,
                callBackFun: callBack,
            };
            arrTemp.push(tempItem);
        });
        this.groupMap.set('all', arrTemp);
        this.setHotData(callBack);
        this.setHundredData(callBack);
        this.setSlotsData(callBack);
        this.setPokerData(callBack);
        this.setCasualData(callBack);
        this.setNewData(callBack);

        this.initHallGameData();
    }

    private setHundredData(callBack: Function): void {
        let arrTemp: SmallToolDemoUIPa.GameEntryConf[] = [];
        let gameid = 170;
        let tempItem: SmallToolDemoUIPa.GameEntryConf = {
            gameId: gameid,
            animFilesName: '',
            isBigIcon: true,
            isLock: false,
            isGuide: false,
            isHot: true,
            isNew: false,
            vendorName: '',
            vendorIcon: '',
            comingsoonStart: false,
            safeguard: false,
            callBackFun: callBack,
        };
        arrTemp.push(tempItem);
        this.groupMap.set('hot', arrTemp);
    }
    private setHotData(callBack: Function): void {
        let arrTemp: SmallToolDemoUIPa.GameEntryConf[] = [];
        let gameid = 170;
        let tempItem: SmallToolDemoUIPa.GameEntryConf = {
            gameId: gameid,
            animFilesName: '',
            isBigIcon: true,
            isLock: false,
            isGuide: false,
            isHot: true,
            isNew: false,
            vendorName: '',
            vendorIcon: '',
            comingsoonStart: false,
            safeguard: false,
            callBackFun: callBack,
        };
        arrTemp.push(tempItem);
        this.groupMap.set('hundred', arrTemp);
    }
    private setSlotsData(callBack: Function) {
        let arrTemp: SmallToolDemoUIPa.GameEntryConf[] = [];
        let gameid = 190;
        let tempItem: SmallToolDemoUIPa.GameEntryConf = {
            gameId: gameid,
            animFilesName: '',
            isBigIcon: true,
            isLock: false,
            isGuide: false,
            isHot: true,
            isNew: false,
            vendorName: '',
            vendorIcon: '',
            comingsoonStart: false,
            safeguard: false,
            callBackFun: callBack,
        };
        arrTemp.push(tempItem);
        this.groupMap.set('slots', arrTemp);
    }
    private setPokerData(callBack: Function) {
        let arrTemp: SmallToolDemoUIPa.GameEntryConf[] = [];
        let gameid = 191;
        let tempItem: SmallToolDemoUIPa.GameEntryConf = {
            gameId: gameid,
            animFilesName: '',
            isBigIcon: true,
            isLock: false,
            isGuide: false,
            isHot: true,
            isNew: false,
            vendorName: '',
            vendorIcon: '',
            comingsoonStart: false,
            safeguard: false,
            callBackFun: callBack,
        };
        arrTemp.push(tempItem);
        this.groupMap.set('poker', arrTemp);
    }
    private setCasualData(callBack: Function) {
        let arrTemp: SmallToolDemoUIPa.GameEntryConf[] = [];
        let gameid = 199;
        let tempItem: SmallToolDemoUIPa.GameEntryConf = {
            gameId: gameid,
            animFilesName: '',
            isBigIcon: true,
            isLock: false,
            isGuide: false,
            isHot: true,
            isNew: false,
            vendorName: '',
            vendorIcon: '',
            comingsoonStart: false,
            safeguard: false,
            callBackFun: callBack,
        };
        arrTemp.push(tempItem);
        this.groupMap.set('casual', arrTemp);
    }
    private setNewData(callBack: Function) {
        let arrTemp: SmallToolDemoUIPa.GameEntryConf[] = [];
        let gameid = 300;
        let tempItem: SmallToolDemoUIPa.GameEntryConf = {
            gameId: gameid,
            animFilesName: '',
            isBigIcon: true,
            isLock: false,
            isGuide: false,
            isHot: true,
            isNew: false,
            vendorName: '',
            vendorIcon: '',
            comingsoonStart: false,
            safeguard: false,
            callBackFun: callBack,
        };
        arrTemp.push(tempItem);
        this.groupMap.set('new', arrTemp);
    }

    public getHallGameList(groupKey: string): number[][] {
        return [...(this.hallGameMap.get(groupKey) || [])];
    }
    private initHallGameData(): void {
        this.hallGameMap.clear();
        this.groupMap.forEach((v, key) => {
            let gameIds: number[][] = [];
            let arrTemp: number[] = [];
            for (let i = 0; i < v.length; i++) {
                const itemGame = v[i];
                if (itemGame.isBigIcon) {
                    gameIds.push([itemGame.gameId]);
                    continue;
                } else {
                    arrTemp.push(itemGame.gameId);
                }
                if (arrTemp.length >= 2) {
                    gameIds.push(arrTemp);
                    arrTemp = [];
                }
            }
            if (arrTemp.length == 1) {
                gameIds.push(arrTemp);
            }
            this.hallGameMap.set(key, gameIds);
        });
    }
    public getGameEntryConfig(gameId: number) {
        return this.groupMap.get('all').find((item) => {
            if (item.gameId == gameId) {
                return item;
            }
        });
    }
}
