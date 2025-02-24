
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/core/timer/TimerManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvcmUvdGltZXIvVGltZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBd0M7QUFDeEMsaUNBQWdDO0FBUWhDO0lBQUE7SUFRQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQUVELFdBQVc7QUFDWDtJQUFrQyxnQ0FBWTtJQUE5QztRQUFBLHFFQTRLQztRQTNLRyxZQUFZO1FBQ0osV0FBSyxHQUFpQyxFQUFFLENBQUM7UUFDakQsbUJBQW1CO1FBQ1gsY0FBUSxHQUFXLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xELG1CQUFtQjtRQUNYLGdCQUFVLEdBQVcsQ0FBQyxDQUFDOztJQXNLbkMsQ0FBQztJQWxLaUIsd0JBQVcsR0FBekI7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVTLDZCQUFNLEdBQWhCO1FBQ0ksSUFBSSxZQUFZLENBQUMsU0FBUyxFQUFFO1lBQ3hCLE9BQU87U0FDVjtRQUNELFlBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzlCLHFCQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVTLGdDQUFTLEdBQW5CO1FBQ0ksSUFBSSxZQUFZLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUNqQyxZQUFZLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUNqQztRQUNELHFCQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVTLDZCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsYUFBYTtRQUNiLElBQUksWUFBWSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDakMsT0FBTztTQUNWO1FBQ0QscUJBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckIsRUFB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WUFDakMsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO0tBQ047Q0FDSiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVUaW1lciB9IGZyb20gXCIuL0dhbWVUaW1lclwiO1xuaW1wb3J0IHsgVGltZXIgfSBmcm9tIFwiLi9UaW1lclwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIElDMkYge1xuICAgICAgICB0aW1lcjogVGltZXJNYW5hZ2VyO1xuICAgIH1cbn1cblxuY2xhc3MgVGltZXJEYXRhIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHRpbWVyOiBUaW1lcjtcbiAgICBvYmplY3Q6IGFueTtcbiAgICBmaWVsZDogc3RyaW5nO1xuICAgIHN0YXJ0VGltZTogbnVtYmVyO1xuICAgIG9uU2Vjb25kOiBGdW5jdGlvbjtcbiAgICBvbkNvbXBsZXRlOiBGdW5jdGlvbjtcbn1cblxuLyoqIOaXtumXtOeuoeeQhiAqL1xuZXhwb3J0IGNsYXNzIFRpbWVyTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgLyoqIOWAkuiuoeaXtuaVsOaNriAqL1xuICAgIHByaXZhdGUgdGltZXM6IHsgW2tleTogc3RyaW5nXTogVGltZXJEYXRhIH0gPSB7fTtcbiAgICAvKiog5b2T5YmN5ri45oiP6L+b5YWl55qE5pe26Ze05q+r56eS5YC8ICovXG4gICAgcHJpdmF0ZSBpbml0VGltZTogbnVtYmVyID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICAvKiog5pyN5Yqh5Zmo5pe26Ze05LiO5pys5Zyw5pe26Ze05ZCM5q2lICovXG4gICAgcHJpdmF0ZSBzZXJ2ZXJUaW1lOiBudW1iZXIgPSAwO1xuXG4gICAgLyoqIOWFqOWxgOesrOS4gOS4quWKoOi9veeahFRpbWVyTWFuYWdlcue7hOS7tiAqL1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogVGltZXJNYW5hZ2VyID0gbnVsbDtcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IFRpbWVyTWFuYWdlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICBpZiAoVGltZXJNYW5hZ2VyLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFRpbWVyTWFuYWdlci5faW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICBHYW1lVGltZXIucmVzZXQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICBpZiAoVGltZXJNYW5hZ2VyLl9pbnN0YW5jZSA9PT0gdGhpcykge1xuICAgICAgICAgICAgVGltZXJNYW5hZ2VyLl9pbnN0YW5jZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgR2FtZVRpbWVyLm9uRGVzdHJveSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgICAgICAvL+WPquWQr+eUqOesrOS4gOS4quWKoOi9veeahOe7hOS7tlxuICAgICAgICBpZiAoVGltZXJNYW5hZ2VyLl9pbnN0YW5jZSAhPT0gdGhpcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEdhbWVUaW1lci51cGRhdGUoZHQpO1xuICAgICAgICAvL1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy50aW1lcykge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnRpbWVzW2tleV07XG4gICAgICAgICAgICBsZXQgdGltZXIgPSBkYXRhLnRpbWVyIGFzIFRpbWVyO1xuICAgICAgICAgICAgaWYgKHRpbWVyLnVwZGF0ZShkdCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5vYmplY3RbZGF0YS5maWVsZF0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEub2JqZWN0W2RhdGEuZmllbGRdLS07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g5YCS6K6h5pe257uT5p2f6Kem5Y+RXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm9iamVjdFtkYXRhLmZpZWxkXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uVGltZXJDb21wbGV0ZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyDop6blj5Hmr4/np5Llm57osIPkuovku7YgIFxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXRhLm9uU2Vjb25kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLm9uU2Vjb25kLmNhbGwoZGF0YS5vYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOinpuWPkeWAkuiuoeaXtuWujOaIkOS6i+S7tiAqL1xuICAgIHByaXZhdGUgb25UaW1lckNvbXBsZXRlKGRhdGE6IGFueSkge1xuICAgICAgICBpZiAoZGF0YS5vbkNvbXBsZXRlKSBkYXRhLm9uQ29tcGxldGUuY2FsbChkYXRhLm9iamVjdCk7XG4gICAgICAgIGlmIChkYXRhLmV2ZW50KSB0aGlzLm5vZGUuZW1pdChkYXRhLmV2ZW50KTtcbiAgICAgICAgZGVsZXRlIHRoaXMudGltZXNbZGF0YS5pZF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Zyo5oyH5a6a5a+56LGh5LiK5rOo5YaM5LiA5Liq5YCS6K6h5pe255qE5Zue6LCD566h55CG5ZmoXG4gICAgICogQHBhcmFtIG9iamVjdCAgICAgICAg5rOo5YaM5a6a5pe25Zmo55qE5a+56LGhXG4gICAgICogQHBhcmFtIGZpZWxkICAgICAgICAg5pe26Ze05a2X5q61XG4gICAgICogQHBhcmFtIG9uU2Vjb25kICAgICAg5q+P56eS5LqL5Lu2XG4gICAgICogQHBhcmFtIG9uQ29tcGxldGUgICAg5YCS6K6h5pe25a6M5oiQ5LqL5Lu2XG4gICAgICogQHJldHVybnMgXG4gICAgICogQGV4YW1wbGVcbiAgICAgICAgZXhwb3J0IGNsYXNzIFRlc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgICAgICAgcHJpdmF0ZSB0aW1lSWQhOiBzdHJpbmc7ICAgICAgICBcbiAgICAgICAgICAgIHN0YXJ0KCkge1xuICAgICAgICAgICAgICAgIC8vIOWcqOaMh+WumuWvueixoeS4iuazqOWGjOS4gOS4quWAkuiuoeaXtueahOWbnuiwg+euoeeQhuWZqFxuICAgICAgICAgICAgICAgIHRoaXMudGltZUlkID0gYzJmLnRpbWVyLnJlZ2lzdGVyKHRoaXMsIFwiY291bnREb3duXCIsIHRoaXMub25TZWNvbmQsIHRoaXMub25Db21wbGV0ZSk7XG4gICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICAgIHByaXZhdGUgb25TZWNvbmQoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmr4/np5Lop6blj5HkuIDmrKFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcml2YXRlIG9uQ29tcGxldGUoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlgJLorqHml7blrozmiJDop6blj5FcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAqL1xuICAgIHB1YmxpYyByZWdpc3RlcihvYmplY3Q6IGFueSwgZmllbGQ6IHN0cmluZywgb25TZWNvbmQ6IEZ1bmN0aW9uLCBvbkNvbXBsZXRlOiBGdW5jdGlvbik6IGFueSB7XG4gICAgICAgIHZhciB0aW1lciA9IG5ldyBUaW1lcigpO1xuICAgICAgICB0aW1lci5zdGVwID0gMTtcblxuICAgICAgICBsZXQgZGF0YTogVGltZXJEYXRhID0gbmV3IFRpbWVyRGF0YSgpO1xuICAgICAgICBkYXRhLmlkID0gYzJmLnV0aWxzLnN0ci5ndWlkKCk7XG4gICAgICAgIGRhdGEudGltZXIgPSB0aW1lcjtcbiAgICAgICAgZGF0YS5vYmplY3QgPSBvYmplY3Q7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDnrqHnkIblr7nosaFcbiAgICAgICAgZGF0YS5maWVsZCA9IGZpZWxkOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDml7bpl7TlrZfmrrVcbiAgICAgICAgZGF0YS5vblNlY29uZCA9IG9uU2Vjb25kOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmr4/np5Lkuovku7ZcbiAgICAgICAgZGF0YS5vbkNvbXBsZXRlID0gb25Db21wbGV0ZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlgJLorqHml7blrozmiJDkuovku7ZcbiAgICAgICAgdGhpcy50aW1lc1tkYXRhLmlkXSA9IGRhdGE7XG4gICAgICAgIHJldHVybiBkYXRhLmlkO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiDlnKjmjIflrprlr7nosaHkuIrms6jplIDkuIDkuKrlgJLorqHml7bnmoTlm57osIPnrqHnkIblmaggXG4gICAgICogQHBhcmFtIGlkICAgICAgICAg5pe26Ze05a+56LGh5ZSv5LiA6KGo56S6XG4gICAgICogQGV4YW1wbGVcbiAgICAgICAgZXhwb3J0IGNsYXNzIFRlc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgICAgICAgcHJpdmF0ZSB0aW1lSWQhOiBzdHJpbmc7XG4gICAgICAgICAgICBzdGFydCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVJZCA9IFlULnRpbWVyLnJlZ2lzdGVyKHRoaXMsIFwiY291bnREb3duXCIsIHRoaXMub25TZWNvbmQsIHRoaXMub25Db21wbGV0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgLy8g5Zyo5oyH5a6a5a+56LGh5LiK5rOo6ZSA5LiA5Liq5YCS6K6h5pe255qE5Zue6LCD566h55CG5ZmoXG4gICAgICAgICAgICAgICAgWVQudGltZXIudW5SZWdpc3Rlcih0aGlzLnRpbWVJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgKi9cbiAgICBwdWJsaWMgdW5SZWdpc3RlcihpZDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVzW2lkXSlcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnRpbWVzW2lkXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmnI3liqHlmajml7bpl7TkuI7mnKzlnLDml7bpl7TlkIzmraVcbiAgICAgKiBAcGFyYW0gdmFsICAg5pyN5Yqh5Zmo5pe26Ze05Yi75bqmXG4gICAgICogXG4gICAgICovXG4gICAgcHVibGljIHNldFNlcnZlclRpbWUodmFsPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgdGhpcy5zZXJ2ZXJUaW1lID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZlclRpbWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFNlcnZlclRpbWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmVyVGltZSArIHRoaXMuZ2V0VGltZSgpO1xuICAgIH1cblxuICAgIC8qKiDojrflj5bmuLjmiI/lvIDlp4vliLDnjrDlnKjpgJ3ljrvnmoTml7bpl7QgKi9cbiAgICBwdWJsaWMgZ2V0VGltZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRMb2NhbFRpbWUoKSAtIHRoaXMuaW5pdFRpbWU7XG4gICAgfVxuXG4gICAgLyoqIOiOt+WPluacrOWcsOaXtumXtOWIu+W6piAqL1xuICAgIHB1YmxpYyBnZXRMb2NhbFRpbWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgLyoqIOa4uOaIj+acgOWwj+WMluaXtuiusOW9leaXtumXtOaVsOaNriAqL1xuICAgIHB1YmxpYyBzYXZlKCkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy50aW1lcykge1xuICAgICAgICAgICAgdGhpcy50aW1lc1trZXldLnN0YXJ0VGltZSA9IHRoaXMuZ2V0VGltZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOa4uOaIj+acgOWkp+WMluaXtuWbnuWkjeaXtumXtOaVsOaNriAqL1xuICAgIHB1YmxpYyBsb2FkKCkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy50aW1lcykge1xuICAgICAgICAgICAgbGV0IGludGVydmFsID0gTWF0aC5mbG9vcigodGhpcy5nZXRUaW1lKCkgLSAodGhpcy50aW1lc1trZXldLnN0YXJ0VGltZSB8fCB0aGlzLmdldFRpbWUoKSkpIC8gMTAwMCk7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMudGltZXNba2V5XTtcbiAgICAgICAgICAgIGRhdGEub2JqZWN0W2RhdGEuZmllbGRdID0gZGF0YS5vYmplY3RbZGF0YS5maWVsZF0gLSBpbnRlcnZhbDtcbiAgICAgICAgICAgIGlmIChkYXRhLm9iamVjdFtkYXRhLmZpZWxkXSA8IDApIHtcbiAgICAgICAgICAgICAgICBkYXRhLm9iamVjdFtkYXRhLmZpZWxkXSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5vblRpbWVyQ29tcGxldGUoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRpbWVzW2tleV0uc3RhcnRUaW1lID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbmNlKGNhbGxiYWNrOiBGdW5jdGlvbiwgZGVsYXlUaW1lOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcbiAgICAgICAgfSwgZGVsYXlUaW1lKTtcbiAgICB9XG59XG5cbmlmICghQ0NfRURJVE9SKSB7XG4gICAgbGV0IGN1clNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcbiAgICBpZiAoY3VyU2NlbmUpIHtcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZShcIlRpbWVyTWFuYWdlclwiKTtcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUobm9kZSk7XG4gICAgICAgIGMyZi50aW1lciA9IG5vZGUuYWRkQ29tcG9uZW50KFRpbWVyTWFuYWdlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2MuZGlyZWN0b3Iub24oY2MuRGlyZWN0b3IuRVZFTlRfQUZURVJfU0NFTkVfTEFVTkNILCAoc2NlbmU6IGNjLlNjZW5lKSA9PiB7XG4gICAgICAgICAgICBpZiAoVGltZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKFwiVGltZXJNYW5hZ2VyXCIpO1xuICAgICAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUobm9kZSk7XG4gICAgICAgICAgICBjMmYudGltZXIgPSBub2RlLmFkZENvbXBvbmVudChUaW1lck1hbmFnZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=