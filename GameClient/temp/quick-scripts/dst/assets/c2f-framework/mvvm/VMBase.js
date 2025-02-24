
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/mvvm/VMBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '28d15CETUlJ95Z1bJoOFz6p', 'VMBase');
// c2f-framework/mvvm/VMBase.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ViewModel_1 = require("./ViewModel");
//用来处理通知数据的层级
//控制旗下子节点的数据
//目前只是起到一个识别组件的作用，之后会抽象很多功能在这里面
// player.equips.* 可以自动根据所在父对象的位置设置顺序
var DEBUG_WATCH_PATH = false;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * watchPath 的基础，只提供绑定功能 和 对应的数据更新函数
 */
var VMBase = /** @class */ (function (_super) {
    __extends(VMBase, _super);
    function VMBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** watch 单路径  */
        _this.watchPath = '';
        /** watch 多路径 */
        _this.watchPathArr = [];
        /**是否启用模板多路径模式 */
        _this.templateMode = false;
        /**储存模板多路径的值 */
        _this.templateValueArr = [];
        /**VM管理 */
        _this.VM = ViewModel_1.VM;
        return _this;
    }
    /**
     * 如果需要重写onLoad 方法，请根据顺序调用 super.onLoad()，执行默认方法
     */
    VMBase.prototype.onLoad = function () {
        var _this = this;
        if (CC_EDITOR)
            return;
        //提前拆分、并且解析路径
        var paths = this.watchPath.split('.');
        for (var i = 1; i < paths.length; i++) {
            var p = paths[i];
            //如果发现了路径使用了 * ，则自动去自己的父节点查找自己所在 index 值
            if (p == '*') {
                var index = this.node.getParent().children.findIndex(function (n) { return n === _this.node; });
                if (index <= 0)
                    index = 0;
                paths[i] = index.toString();
                break;
            }
        }
        //替换掉原路径
        this.watchPath = paths.join('.');
        //提前进行路径数组 的 解析
        var pathArr = this.watchPathArr;
        if (pathArr.length >= 1) {
            for (var i = 0; i < pathArr.length; i++) {
                var path = pathArr[i];
                var paths_1 = path.split('.');
                for (var i_1 = 1; i_1 < paths_1.length; i_1++) {
                    var p = paths_1[i_1];
                    if (p == '*') {
                        var index = this.node.getParent().children.findIndex(function (n) { return n === _this.node; });
                        if (index <= 0)
                            index = 0;
                        paths_1[i_1] = index.toString();
                        break;
                    }
                }
                this.watchPathArr[i] = paths_1.join('.');
            }
        }
        //打印出所有绑定的路径，方便调试信息
        if (DEBUG_WATCH_PATH && CC_DEBUG) {
            cc.log('所有路径', this.watchPath ? [this.watchPath] : this.watchPathArr, '<<', this.node.getParent().name + '.' + this.node.name);
        }
        if (this.watchPath == '' && this.watchPathArr.join('') == '') {
            cc.log('可能未设置路径的节点:', this.node.getParent().name + '.' + this.node.name);
        }
    };
    VMBase.prototype.onEnable = function () {
        if (CC_EDITOR)
            return; //编辑器模式不能判断
        if (this.templateMode) {
            this.setMultPathEvent(true);
        }
        else if (this.watchPath != '') {
            this.VM.bindPath(this.watchPath, this.onValueChanged, this);
        }
        this.onValueInit(); //激活时,调用值初始化
    };
    VMBase.prototype.onDisable = function () {
        if (CC_EDITOR)
            return; //编辑器模式不能判断
        if (this.templateMode) {
            this.setMultPathEvent(false);
        }
        else if (this.watchPath != '') {
            this.VM.unbindPath(this.watchPath, this.onValueChanged, this);
        }
    };
    //多路径监听方式
    VMBase.prototype.setMultPathEvent = function (enabled) {
        if (enabled === void 0) { enabled = true; }
        if (CC_EDITOR)
            return;
        var arr = this.watchPathArr;
        for (var i = 0; i < arr.length; i++) {
            var path = arr[i];
            if (enabled) {
                this.VM.bindPath(path, this.onValueChanged, this);
            }
            else {
                this.VM.unbindPath(path, this.onValueChanged, this);
            }
        }
    };
    VMBase.prototype.onValueInit = function () {
        //虚方法
    };
    VMBase.prototype.onValueChanged = function (n, o, pathArr) {
    };
    VMBase = __decorate([
        ccclass
    ], VMBase);
    return VMBase;
}(cc.Component));
exports.default = VMBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL212dm0vVk1CYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFpQztBQUdqQyxhQUFhO0FBQ2IsWUFBWTtBQUVaLCtCQUErQjtBQUUvQixxQ0FBcUM7QUFFckMsSUFBTSxnQkFBZ0IsR0FBWSxLQUFLLENBQUM7QUFFbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7O0dBRUc7QUFFSDtJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQXVHQztRQXRHRyxpQkFBaUI7UUFDVixlQUFTLEdBQVcsRUFBRSxDQUFDO1FBQzlCLGdCQUFnQjtRQUNOLGtCQUFZLEdBQWEsRUFBRSxDQUFDO1FBQ3RDLGlCQUFpQjtRQUNWLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQ3JDLGVBQWU7UUFDTCxzQkFBZ0IsR0FBVSxFQUFFLENBQUM7UUFDdkMsVUFBVTtRQUNILFFBQUUsR0FBRyxjQUFFLENBQUM7O0lBNkZuQixDQUFDO0lBM0ZHOztPQUVHO0lBQ0gsdUJBQU0sR0FBTjtRQUFBLGlCQThDQztRQTdDRyxJQUFJLFNBQVM7WUFBRSxPQUFPO1FBRXRCLGFBQWE7UUFDYixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxJQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsd0NBQXdDO1lBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRTtnQkFDVixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFD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QUNULENBQUM7SUFFUywrQkFBYyxHQUF4QixVQUF5QixDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQWlCO0lBQ2hELENBQUM7SUF0R2dCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0F1RzFCO0lBQUQsYUFBQztDQXZHRCxBQXVHQyxDQXZHbUMsRUFBRSxDQUFDLFNBQVMsR0F1Ry9DO2tCQXZHb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZNIH0gZnJvbSAnLi9WaWV3TW9kZWwnO1xuXG5cbi8v55So5p2l5aSE55CG6YCa55+l5pWw5o2u55qE5bGC57qnXG4vL+aOp+WItuaXl+S4i+WtkOiKgueCueeahOaVsOaNrlxuXG4vL+ebruWJjeWPquaYr+i1t+WIsOS4gOS4quivhuWIq+e7hOS7tueahOS9nOeUqO+8jOS5i+WQjuS8muaKveixoeW+iOWkmuWKn+iDveWcqOi/memHjOmdolxuXG4vLyBwbGF5ZXIuZXF1aXBzLiog5Y+v5Lul6Ieq5Yqo5qC55o2u5omA5Zyo54i25a+56LGh55qE5L2N572u6K6+572u6aG65bqPXG5cbmNvbnN0IERFQlVHX1dBVENIX1BBVEg6IGJvb2xlYW4gPSBmYWxzZTtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoqXG4gKiB3YXRjaFBhdGgg55qE5Z+656GA77yM5Y+q5o+Q5L6b57uR5a6a5Yqf6IO9IOWSjCDlr7nlupTnmoTmlbDmja7mm7TmlrDlh73mlbBcbiAqL1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZNQmFzZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgLyoqIHdhdGNoIOWNlei3r+W+hCAgKi9cbiAgICBwdWJsaWMgd2F0Y2hQYXRoOiBzdHJpbmcgPSAnJztcbiAgICAvKiogd2F0Y2gg5aSa6Lev5b6EICovXG4gICAgcHJvdGVjdGVkIHdhdGNoUGF0aEFycjogc3RyaW5nW10gPSBbXTtcbiAgICAvKirmmK/lkKblkK/nlKjmqKHmnb/lpJrot6/lvoTmqKHlvI8gKi9cbiAgICBwdWJsaWMgdGVtcGxhdGVNb2RlOiBib29sZWFuID0gZmFsc2U7XG4gICAgLyoq5YKo5a2Y5qih5p2/5aSa6Lev5b6E55qE5YC8ICovXG4gICAgcHJvdGVjdGVkIHRlbXBsYXRlVmFsdWVBcnI6IGFueVtdID0gW107XG4gICAgLyoqVk3nrqHnkIYgKi9cbiAgICBwdWJsaWMgVk0gPSBWTTtcblxuICAgIC8qKlxuICAgICAqIOWmguaenOmcgOimgemHjeWGmW9uTG9hZCDmlrnms5XvvIzor7fmoLnmja7pobrluo/osIPnlKggc3VwZXIub25Mb2FkKCnvvIzmiafooYzpu5jorqTmlrnms5VcbiAgICAgKi9cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGlmIChDQ19FRElUT1IpIHJldHVybjtcblxuICAgICAgICAvL+aPkOWJjeaLhuWIhuOAgeW5tuS4lOino+aekOi3r+W+hFxuICAgICAgICBsZXQgcGF0aHMgPSB0aGlzLndhdGNoUGF0aC5zcGxpdCgnLicpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBhdGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gcGF0aHNbaV07XG4gICAgICAgICAgICAvL+WmguaenOWPkeeOsOS6hui3r+W+hOS9v+eUqOS6hiAqIO+8jOWImeiHquWKqOWOu+iHquW3seeahOeItuiKgueCueafpeaJvuiHquW3seaJgOWcqCBpbmRleCDlgLxcbiAgICAgICAgICAgIGlmIChwID09ICcqJykge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMubm9kZS5nZXRQYXJlbnQoKS5jaGlsZHJlbi5maW5kSW5kZXgobiA9PiBuID09PSB0aGlzLm5vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8PSAwKSBpbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgcGF0aHNbaV0gPSBpbmRleC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy/mm7/mjaLmjonljp/ot6/lvoRcbiAgICAgICAgdGhpcy53YXRjaFBhdGggPSBwYXRocy5qb2luKCcuJyk7XG5cbiAgICAgICAgLy/mj5DliY3ov5vooYzot6/lvoTmlbDnu4Qg55qEIOino+aekFxuICAgICAgICBsZXQgcGF0aEFyciA9IHRoaXMud2F0Y2hQYXRoQXJyO1xuICAgICAgICBpZiAocGF0aEFyci5sZW5ndGggPj0gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGF0aCA9IHBhdGhBcnJbaV07XG4gICAgICAgICAgICAgICAgbGV0IHBhdGhzID0gcGF0aC5zcGxpdCgnLicpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXRocy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gcGF0aHNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwID09ICcqJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5ub2RlLmdldFBhcmVudCgpLmNoaWxkcmVuLmZpbmRJbmRleChuID0+IG4gPT09IHRoaXMubm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPD0gMCkgaW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aHNbaV0gPSBpbmRleC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy53YXRjaFBhdGhBcnJbaV0gPSBwYXRocy5qb2luKCcuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL+aJk+WNsOWHuuaJgOaciee7keWumueahOi3r+W+hO+8jOaWueS+v+iwg+ivleS/oeaBr1xuICAgICAgICBpZiAoREVCVUdfV0FUQ0hfUEFUSCAmJiBDQ19ERUJVRykge1xuICAgICAgICAgICAgY2MubG9nKCfmiYDmnInot6/lvoQnLCB0aGlzLndhdGNoUGF0aCA/IFt0aGlzLndhdGNoUGF0aF0gOiB0aGlzLndhdGNoUGF0aEFyciwgJzw8JywgdGhpcy5ub2RlLmdldFBhcmVudCgpLm5hbWUgKyAnLicgKyB0aGlzLm5vZGUubmFtZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy53YXRjaFBhdGggPT0gJycgJiYgdGhpcy53YXRjaFBhdGhBcnIuam9pbignJykgPT0gJycpIHtcbiAgICAgICAgICAgIGNjLmxvZygn5Y+v6IO95pyq6K6+572u6Lev5b6E55qE6IqC54K5OicsIHRoaXMubm9kZS5nZXRQYXJlbnQoKS5uYW1lICsgJy4nICsgdGhpcy5ub2RlLm5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIGlmIChDQ19FRElUT1IpIHJldHVybjsvL+e8lui+keWZqOaooeW8j+S4jeiDveWIpOaWrVxuICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZU1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TXVsdFBhdGhFdmVudCh0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLndhdGNoUGF0aCAhPSAnJykge1xuICAgICAgICAgICAgdGhpcy5WTS5iaW5kUGF0aCh0aGlzLndhdGNoUGF0aCwgdGhpcy5vblZhbHVlQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uVmFsdWVJbml0KCk7Ly/mv4DmtLvml7Ys6LCD55So5YC85Yid5aeL5YyWXG4gICAgfVxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICBpZiAoQ0NfRURJVE9SKSByZXR1cm47Ly/nvJbovpHlmajmqKHlvI/kuI3og73liKTmlq1cbiAgICAgICAgaWYgKHRoaXMudGVtcGxhdGVNb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnNldE11bHRQYXRoRXZlbnQoZmFsc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMud2F0Y2hQYXRoICE9ICcnKSB7XG4gICAgICAgICAgICB0aGlzLlZNLnVuYmluZFBhdGgodGhpcy53YXRjaFBhdGgsIHRoaXMub25WYWx1ZUNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/lpJrot6/lvoTnm5HlkKzmlrnlvI9cbiAgICBwcml2YXRlIHNldE11bHRQYXRoRXZlbnQoZW5hYmxlZDogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgaWYgKENDX0VESVRPUikgcmV0dXJuO1xuICAgICAgICBsZXQgYXJyID0gdGhpcy53YXRjaFBhdGhBcnI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwYXRoID0gYXJyW2ldO1xuICAgICAgICAgICAgaWYgKGVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlZNLmJpbmRQYXRoKHBhdGgsIHRoaXMub25WYWx1ZUNoYW5nZWQsIHRoaXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLlZNLnVuYmluZFBhdGgocGF0aCwgdGhpcy5vblZhbHVlQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUluaXQoKSB7XG4gICAgICAgIC8v6Jma5pa55rOVXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uVmFsdWVDaGFuZ2VkKG4sIG8sIHBhdGhBcnI6IHN0cmluZ1tdKSB7XG4gICAgfVxufSJdfQ==