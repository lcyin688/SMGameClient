"use strict";
cc._RF.push(module, '73600VLsIBLOKhOhd7td4P8', 'TimerManager');
// c2f-framework/core/timer/TimerManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimerManager = void 0;
var GameTimer_1 = require("./GameTimer");
var Timer_1 = require("./Timer");
var TimerData = /** @class */ (function () {
    function TimerData() {
    }
    return TimerData;
}());
/** 时间管理 */
var TimerManager = /** @class */ (function (_super) {
    __extends(TimerManager, _super);
    function TimerManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 倒计时数据 */
        _this.times = {};
        /** 当前游戏进入的时间毫秒值 */
        _this.initTime = (new Date()).getTime();
        /** 服务器时间与本地时间同步 */
        _this.serverTime = 0;
        return _this;
    }
    TimerManager.getInstance = function () {
        return this._instance;
    };
    TimerManager.prototype.onLoad = function () {
        if (TimerManager._instance) {
            return;
        }
        TimerManager._instance = this;
        GameTimer_1.GameTimer.reset();
    };
    TimerManager.prototype.onDestroy = function () {
        if (TimerManager._instance === this) {
            TimerManager._instance = null;
        }
        GameTimer_1.GameTimer.onDestroy();
    };
    TimerManager.prototype.update = function (dt) {
        //只启用第一个加载的组件
        if (TimerManager._instance !== this) {
            return;
        }
        GameTimer_1.GameTimer.update(dt);
        //
        for (var key in this.times) {
            var data = this.times[key];
            var timer = data.timer;
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
    };
    /** 触发倒计时完成事件 */
    TimerManager.prototype.onTimerComplete = function (data) {
        if (data.onComplete)
            data.onComplete.call(data.object);
        if (data.event)
            this.node.emit(data.event);
        delete this.times[data.id];
    };
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
    TimerManager.prototype.register = function (object, field, onSecond, onComplete) {
        var timer = new Timer_1.Timer();
        timer.step = 1;
        var data = new TimerData();
        data.id = c2f.utils.str.guid();
        data.timer = timer;
        data.object = object; // 管理对象
        data.field = field; // 时间字段
        data.onSecond = onSecond; // 每秒事件
        data.onComplete = onComplete; // 倒计时完成事件
        this.times[data.id] = data;
        return data.id;
    };
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
    TimerManager.prototype.unRegister = function (id) {
        if (this.times[id])
            delete this.times[id];
    };
    /**
     * 服务器时间与本地时间同步
     * @param val   服务器时间刻度
     *
     */
    TimerManager.prototype.setServerTime = function (val) {
        if (val) {
            this.serverTime = val;
        }
        return this.serverTime;
    };
    TimerManager.prototype.getServerTime = function () {
        return this.serverTime + this.getTime();
    };
    /** 获取游戏开始到现在逝去的时间 */
    TimerManager.prototype.getTime = function () {
        return this.getLocalTime() - this.initTime;
    };
    /** 获取本地时间刻度 */
    TimerManager.prototype.getLocalTime = function () {
        return Date.now();
    };
    /** 游戏最小化时记录时间数据 */
    TimerManager.prototype.save = function () {
        for (var key in this.times) {
            this.times[key].startTime = this.getTime();
        }
    };
    /** 游戏最大化时回复时间数据 */
    TimerManager.prototype.load = function () {
        for (var key in this.times) {
            var interval = Math.floor((this.getTime() - (this.times[key].startTime || this.getTime())) / 1000);
            var data = this.times[key];
            data.object[data.field] = data.object[data.field] - interval;
            if (data.object[data.field] < 0) {
                data.object[data.field] = 0;
                this.onTimerComplete(data);
            }
            this.times[key].startTime = null;
        }
    };
    TimerManager.prototype.once = function (callback, delayTime) {
        this.scheduleOnce(function () {
            callback && callback();
        }, delayTime);
    };
    /** 全局第一个加载的TimerManager组件 */
    TimerManager._instance = null;
    return TimerManager;
}(cc.Component));
exports.TimerManager = TimerManager;
if (!CC_EDITOR) {
    var curScene = cc.director.getScene();
    if (curScene) {
        var node = new cc.Node("TimerManager");
        cc.game.addPersistRootNode(node);
        c2f.timer = node.addComponent(TimerManager);
    }
    else {
        cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function (scene) {
            if (TimerManager.getInstance()) {
                return;
            }
            var node = new cc.Node("TimerManager");
            cc.game.addPersistRootNode(node);
            c2f.timer = node.addComponent(TimerManager);
        });
    }
}

cc._RF.pop();