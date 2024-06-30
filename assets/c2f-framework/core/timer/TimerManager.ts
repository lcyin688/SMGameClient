import { GameTimer } from "./GameTimer";
import { Timer } from "./Timer";

declare global {
    interface IC2F {
        timer: TimerManager;
    }
}

class TimerData {
    id: string;
    timer: Timer;
    object: any;
    field: string;
    startTime: number;
    onSecond: Function;
    onComplete: Function;
}

/** 时间管理 */
export class TimerManager extends cc.Component {
    /** 倒计时数据 */
    private times: { [key: string]: TimerData } = {};
    /** 当前游戏进入的时间毫秒值 */
    private initTime: number = (new Date()).getTime();
    /** 服务器时间与本地时间同步 */
    private serverTime: number = 0;

    /** 全局第一个加载的TimerManager组件 */
    private static _instance: TimerManager = null;
    public static getInstance(): TimerManager {
        return this._instance;
    }

    protected onLoad(): void {
        if (TimerManager._instance) {
            return;
        }
        TimerManager._instance = this;
        GameTimer.reset();
    }

    protected onDestroy(): void {
        if (TimerManager._instance === this) {
            TimerManager._instance = null;
        }
        GameTimer.onDestroy();
    }

    protected update(dt: number) {
        //只启用第一个加载的组件
        if (TimerManager._instance !== this) {
            return;
        }
        GameTimer.update(dt);
        //
        for (let key in this.times) {
            let data = this.times[key];
            let timer = data.timer as Timer;
            if (timer.update(dt)) {
                if (data.object[data.field] > 0) {
                    data.object[data.field]--;

                    // 倒计时结束触发
                    if (data.object[data.field] == 0) {
                        this.onTimerComplete(data);
                    }
                    // 触发每秒回调事件  
                    else if (data.onSecond) {
                        data.onSecond.call(data.object);
                    }
                }
            }
        }
    }

    /** 触发倒计时完成事件 */
    private onTimerComplete(data: any) {
        if (data.onComplete) data.onComplete.call(data.object);
        if (data.event) this.node.emit(data.event);
        delete this.times[data.id];
    }

    /**
     * 在指定对象上注册一个倒计时的回调管理器
     * @param object        注册定时器的对象
     * @param field         时间字段
     * @param onSecond      每秒事件
     * @param onComplete    倒计时完成事件
     * @returns 
     * @example
        export class Test extends Component {
            private timeId!: string;        
            start() {
                // 在指定对象上注册一个倒计时的回调管理器
                this.timeId = c2f.timer.register(this, "countDown", this.onSecond, this.onComplete);
            }        
            private onSecond() {
                console.log("每秒触发一次");
            }
            private onComplete() {
                console.log("倒计时完成触发");
            }
        }
    */
    public register(object: any, field: string, onSecond: Function, onComplete: Function): any {
        var timer = new Timer();
        timer.step = 1;

        let data: TimerData = new TimerData();
        data.id = c2f.utils.str.guid();
        data.timer = timer;
        data.object = object;                                   // 管理对象
        data.field = field;                                     // 时间字段
        data.onSecond = onSecond;                               // 每秒事件
        data.onComplete = onComplete;                           // 倒计时完成事件
        this.times[data.id] = data;
        return data.id;
    }

    /** 
     * 在指定对象上注销一个倒计时的回调管理器 
     * @param id         时间对象唯一表示
     * @example
        export class Test extends Component {
            private timeId!: string;
            start() {
                this.timeId = YT.timer.register(this, "countDown", this.onSecond, this.onComplete);
            }
            onDestroy() {
                // 在指定对象上注销一个倒计时的回调管理器
                YT.timer.unRegister(this.timeId);
            }
        }
     */
    public unRegister(id: string) {
        if (this.times[id])
            delete this.times[id];
    }

    /**
     * 服务器时间与本地时间同步
     * @param val   服务器时间刻度
     * 
     */
    public setServerTime(val?: number): number {
        if (val) {
            this.serverTime = val;
        }
        return this.serverTime;
    }

    public getServerTime(): number {
        return this.serverTime + this.getTime();
    }

    /** 获取游戏开始到现在逝去的时间 */
    public getTime(): number {
        return this.getLocalTime() - this.initTime;
    }

    /** 获取本地时间刻度 */
    public getLocalTime(): number {
        return Date.now();
    }

    /** 游戏最小化时记录时间数据 */
    public save() {
        for (let key in this.times) {
            this.times[key].startTime = this.getTime();
        }
    }

    /** 游戏最大化时回复时间数据 */
    public load() {
        for (let key in this.times) {
            let interval = Math.floor((this.getTime() - (this.times[key].startTime || this.getTime())) / 1000);
            let data = this.times[key];
            data.object[data.field] = data.object[data.field] - interval;
            if (data.object[data.field] < 0) {
                data.object[data.field] = 0;
                this.onTimerComplete(data);
            }
            this.times[key].startTime = null;
        }
    }

    public once(callback: Function, delayTime: number) {
        this.scheduleOnce(() => {
            callback && callback();
        }, delayTime);
    }
}

if (!CC_EDITOR) {
    let curScene = cc.director.getScene();
    if (curScene) {
        let node = new cc.Node("TimerManager");
        cc.game.addPersistRootNode(node);
        c2f.timer = node.addComponent(TimerManager);
    } else {
        cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, (scene: cc.Scene) => {
            if (TimerManager.getInstance()) {
                return;
            }
            let node = new cc.Node("TimerManager");
            cc.game.addPersistRootNode(node);
            c2f.timer = node.addComponent(TimerManager);
        });
    }
}
