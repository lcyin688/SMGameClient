
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/core/random/RandomManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3e09eJBwfZBsLPqFszZLvMS', 'RandomManager');
// c2f-framework/core/random/RandomManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 随机管理 */
var RandomManager = /** @class */ (function () {
    function RandomManager() {
    }
    Object.defineProperty(RandomManager, "instance", {
        /** 随机数管理单例对象 */
        get: function () {
            if (this._instance == null) {
                this._instance = new RandomManager();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    RandomManager.prototype.getRandom = function () {
        if (this.seedrandom)
            return this.seedrandom.quick();
        return Math.random();
    };
    /** 设置随机种子 */
    RandomManager.prototype.setSeed = function (seed) {
        //@ts-ignore
        this.seedrandom = new Math.seedrandom(seed);
    };
    /**
     * 生成指定范围的随机浮点数
     * @param min   最小值
     * @param max   最大值
     * @param type  类型
     */
    RandomManager.prototype.getRandomFloat = function (min, max) {
        return this.getRandom() * (max - min) + min;
    };
    /**
     * 生成指定范围的随机整数
     * @param min   最小值
     * @param max   最大值
     * @param type  类型
     * @example
    var min = 1;
    var max = 10;
    // [min,max) 得到一个两数之间的随机整数,这个值不小于min（如果min不是整数的话，得到一个向上取整的 min），并且小于（但不等于）max
    c2f.random.getRandomInt(min, max, 1);

    // [min,max] 得到一个两数之间的随机整数，包括两个数在内,这个值比min大（如果min不是整数，那就不小于比min大的整数），但小于（但不等于）max
    c2f.random.getRandomInt(min, max, 2);

    // (min,max) 得到一个两数之间的随机整数
    c2f.random.getRandomInt(min, max, 3);
     */
    RandomManager.prototype.getRandomInt = function (min, max, type) {
        if (type === void 0) { type = 2; }
        min = Math.ceil(min);
        max = Math.floor(max);
        switch (type) {
            case 1: // [min,max) 这个值不小于min（如果min不是整数的话，得到一个向上取整的 min），并且小于（但不等于）max  
                return Math.floor(this.getRandom() * (max - min)) + min;
            case 2: // [min,max] 包括两个数在内,这个值比min大（如果min不是整数，那就不小于比min大的整数），但小于（但不等于）max
                return Math.floor(this.getRandom() * (max - min + 1)) + min;
            case 3: // (min,max) 得到一个两数之间的随机整数
                return Math.floor(this.getRandom() * (max - min - 1)) + min + 1;
        }
        return 0;
    };
    /**
     * 根据最大值，最小值范围生成随机数数组
     * @param min   最小值
     * @param max   最大值
     * @param n     随机个数
     * @param type  类型
     * @example
    var a = c2f.random.getRandomByMinMaxList(50, 100, 5)
    console.log("随机的数字", a);
     */
    RandomManager.prototype.getRandomByMinMaxList = function (min, max, n) {
        var result = [];
        for (var i = 0; i < n; i++) {
            result.push(this.getRandomInt(min, max));
        }
        return result;
    };
    /**
     * 获取数组中随机对象
     * @param objects 对象数组
     * @param n 随机个数
     * @example
    var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var r = c2f.random.getRandomByObjectList(b, 5);
    console.log("原始的对象", b);
    console.log("随机的对象", r);
     */
    RandomManager.prototype.getRandomByObjectList = function (objects, n) {
        var temp = objects.slice();
        var result = [];
        for (var i = 0; i < n; i++) {
            var index = this.getRandomInt(0, objects.length, n);
            result.push(temp.splice(index, 1)[0]);
        }
        return result;
    };
    /**
     * 定和随机分配
     * @param n     随机数量
     * @param sum   随机元素合
     * @example
    var c = c2f.random.getRandomBySumList(5, -100);
    console.log("定和随机分配", c);
     */
    RandomManager.prototype.getRandomBySumList = function (n, sum) {
        var residue = sum;
        var value = 0;
        var result = [];
        for (var i = 0; i < n; i++) {
            value = this.getRandomInt(0, residue, 3);
            if (i == n - 1) {
                value = residue;
            }
            else {
                residue -= value;
            }
            result.push(value);
        }
        return result;
    };
    return RandomManager;
}());
c2f.random = RandomManager.instance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvcmUvcmFuZG9tL1JhbmRvbU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxXQUFXO0FBQ1g7SUFBQTtJQStIQSxDQUFDO0lBNUhHLHNCQUFXLHlCQUFRO1FBRG5CLGdCQUFnQjthQUNoQjtZQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQzthQUN4QztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUdPLGlDQUFTLEdBQWpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsVUFBVTtZQUNmLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVuQyxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsYUFBYTtJQUNiLCtCQUFPLEdBQVAsVUFBUSxJQUFZO1FBQ2hCLFlBQVk7UUFDWixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxzQ0FBYyxHQUFkLFVBQWUsR0FBVyxFQUFFLEdBQVc7UUFDbkMsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7OztPQWdCRztJQUNILG9DQUFZLEdBQVosVUFBYSxHQUFXLEVBQUUsR0FBVyxFQUFFLElBQWdCO1FBQWhCLHFCQUFBLEVBQUEsUUFBZ0I7UUFDbkQsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENB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XG4vKiog6ZqP5py6566h55CGICovXG5jbGFzcyBSYW5kb21NYW5hZ2VyIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFJhbmRvbU1hbmFnZXI7XG4gICAgLyoqIOmaj+acuuaVsOeuoeeQhuWNleS+i+WvueixoSAqL1xuICAgIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogUmFuZG9tTWFuYWdlciB7XG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBSYW5kb21NYW5hZ2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2VlZHJhbmRvbSE6IGFueTtcbiAgICBwcml2YXRlIGdldFJhbmRvbSgpOiBudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5zZWVkcmFuZG9tKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VlZHJhbmRvbS5xdWljaygpO1xuXG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpO1xuICAgIH1cblxuICAgIC8qKiDorr7nva7pmo/mnLrnp43lrZAgKi9cbiAgICBzZXRTZWVkKHNlZWQ6IG51bWJlcikge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5zZWVkcmFuZG9tID0gbmV3IE1hdGguc2VlZHJhbmRvbShzZWVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnlJ/miJDmjIflrprojIPlm7TnmoTpmo/mnLrmta7ngrnmlbBcbiAgICAgKiBAcGFyYW0gbWluICAg5pyA5bCP5YC8XG4gICAgICogQHBhcmFtIG1heCAgIOacgOWkp+WAvFxuICAgICAqIEBwYXJhbSB0eXBlICDnsbvlnotcbiAgICAgKi9cbiAgICBnZXRSYW5kb21GbG9hdChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRSYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOeUn+aIkOaMh+WumuiMg+WbtOeahOmaj+acuuaVtOaVsFxuICAgICAqIEBwYXJhbSBtaW4gICDmnIDlsI/lgLxcbiAgICAgKiBAcGFyYW0gbWF4ICAg5pyA5aSn5YC8XG4gICAgICogQHBhcmFtIHR5cGUgIOexu+Wei1xuICAgICAqIEBleGFtcGxlXG4gICAgdmFyIG1pbiA9IDE7XG4gICAgdmFyIG1heCA9IDEwO1xuICAgIC8vIFttaW4sbWF4KSDlvpfliLDkuIDkuKrkuKTmlbDkuYvpl7TnmoTpmo/mnLrmlbTmlbAs6L+Z5Liq5YC85LiN5bCP5LqObWlu77yI5aaC5p6cbWlu5LiN5piv5pW05pWw55qE6K+d77yM5b6X5Yiw5LiA5Liq5ZCR5LiK5Y+W5pW055qEIG1pbu+8ie+8jOW5tuS4lOWwj+S6ju+8iOS9huS4jeetieS6ju+8iW1heCAgXG4gICAgYzJmLnJhbmRvbS5nZXRSYW5kb21JbnQobWluLCBtYXgsIDEpO1xuXG4gICAgLy8gW21pbixtYXhdIOW+l+WIsOS4gOS4quS4pOaVsOS5i+mXtOeahOmaj+acuuaVtOaVsO+8jOWMheaLrOS4pOS4quaVsOWcqOWGhSzov5nkuKrlgLzmr5RtaW7lpKfvvIjlpoLmnpxtaW7kuI3mmK/mlbTmlbDvvIzpgqPlsLHkuI3lsI/kuo7mr5RtaW7lpKfnmoTmlbTmlbDvvInvvIzkvYblsI/kuo7vvIjkvYbkuI3nrYnkuo7vvIltYXhcbiAgICBjMmYucmFuZG9tLmdldFJhbmRvbUludChtaW4sIG1heCwgMik7XG5cbiAgICAvLyAobWluLG1heCkg5b6X5Yiw5LiA5Liq5Lik5pWw5LmL6Ze055qE6ZqP5py65pW05pWwXG4gICAgYzJmLnJhbmRvbS5nZXRSYW5kb21JbnQobWluLCBtYXgsIDMpO1xuICAgICAqL1xuICAgIGdldFJhbmRvbUludChtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIHR5cGU6IG51bWJlciA9IDIpOiBudW1iZXIge1xuICAgICAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTogLy8gW21pbixtYXgpIOi/meS4quWAvOS4jeWwj+S6jm1pbu+8iOWmguaenG1pbuS4jeaYr+aVtOaVsOeahOivne+8jOW+l+WIsOS4gOS4quWQkeS4iuWPluaVtOeahCBtaW7vvInvvIzlubbkuJTlsI/kuo7vvIjkvYbkuI3nrYnkuo7vvIltYXggIFxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZ2V0UmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG4gICAgICAgICAgICBjYXNlIDI6IC8vIFttaW4sbWF4XSDljIXmi6zkuKTkuKrmlbDlnKjlhoUs6L+Z5Liq5YC85q+UbWlu5aSn77yI5aaC5p6cbWlu5LiN5piv5pW05pWw77yM6YKj5bCx5LiN5bCP5LqO5q+UbWlu5aSn55qE5pW05pWw77yJ77yM5L2G5bCP5LqO77yI5L2G5LiN562J5LqO77yJbWF4XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5nZXRSYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gICAgICAgICAgICBjYXNlIDM6IC8vIChtaW4sbWF4KSDlvpfliLDkuIDkuKrkuKTmlbDkuYvpl7TnmoTpmo/mnLrmlbTmlbBcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmdldFJhbmRvbSgpICogKG1heCAtIG1pbiAtIDEpKSArIG1pbiArIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5qC55o2u5pyA5aSn5YC877yM5pyA5bCP5YC86IyD5Zu055Sf5oiQ6ZqP5py65pWw5pWw57uEXG4gICAgICogQHBhcmFtIG1pbiAgIOacgOWwj+WAvFxuICAgICAqIEBwYXJhbSBtYXggICDmnIDlpKflgLxcbiAgICAgKiBAcGFyYW0gbiAgICAg6ZqP5py65Liq5pWwXG4gICAgICogQHBhcmFtIHR5cGUgIOexu+Wei1xuICAgICAqIEBleGFtcGxlXG4gICAgdmFyIGEgPSBjMmYucmFuZG9tLmdldFJhbmRvbUJ5TWluTWF4TGlzdCg1MCwgMTAwLCA1KVxuICAgIGNvbnNvbGUubG9nKFwi6ZqP5py655qE5pWw5a2XXCIsIGEpO1xuICAgICAqL1xuICAgIGdldFJhbmRvbUJ5TWluTWF4TGlzdChtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIG46IG51bWJlcik6IEFycmF5PG51bWJlcj4ge1xuICAgICAgICB2YXIgcmVzdWx0OiBBcnJheTxudW1iZXI+ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmdldFJhbmRvbUludChtaW4sIG1heCkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bmlbDnu4TkuK3pmo/mnLrlr7nosaFcbiAgICAgKiBAcGFyYW0gb2JqZWN0cyDlr7nosaHmlbDnu4RcbiAgICAgKiBAcGFyYW0gbiDpmo/mnLrkuKrmlbBcbiAgICAgKiBAZXhhbXBsZVxuICAgIHZhciBiID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXTtcbiAgICB2YXIgciA9IGMyZi5yYW5kb20uZ2V0UmFuZG9tQnlPYmplY3RMaXN0KGIsIDUpO1xuICAgIGNvbnNvbGUubG9nKFwi5Y6f5aeL55qE5a+56LGhXCIsIGIpO1xuICAgIGNvbnNvbGUubG9nKFwi6ZqP5py655qE5a+56LGhXCIsIHIpO1xuICAgICAqL1xuICAgIGdldFJhbmRvbUJ5T2JqZWN0TGlzdDxUPihvYmplY3RzOiBBcnJheTxUPiwgbjogbnVtYmVyKTogQXJyYXk8VD4ge1xuICAgICAgICB2YXIgdGVtcDogQXJyYXk8VD4gPSBvYmplY3RzLnNsaWNlKCk7XG4gICAgICAgIHZhciByZXN1bHQ6IEFycmF5PFQ+ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmdldFJhbmRvbUludCgwLCBvYmplY3RzLmxlbmd0aCwgbik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0ZW1wLnNwbGljZShpbmRleCwgMSlbMF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5a6a5ZKM6ZqP5py65YiG6YWNXG4gICAgICogQHBhcmFtIG4gICAgIOmaj+acuuaVsOmHj1xuICAgICAqIEBwYXJhbSBzdW0gICDpmo/mnLrlhYPntKDlkIhcbiAgICAgKiBAZXhhbXBsZVxuICAgIHZhciBjID0gYzJmLnJhbmRvbS5nZXRSYW5kb21CeVN1bUxpc3QoNSwgLTEwMCk7XG4gICAgY29uc29sZS5sb2coXCLlrprlkozpmo/mnLrliIbphY1cIiwgYyk7XG4gICAgICovXG4gICAgZ2V0UmFuZG9tQnlTdW1MaXN0KG46IG51bWJlciwgc3VtOiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIHZhciByZXNpZHVlID0gc3VtO1xuICAgICAgICB2YXIgdmFsdWUgPSAwO1xuICAgICAgICB2YXIgcmVzdWx0OiBBcnJheTxudW1iZXI+ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZ2V0UmFuZG9tSW50KDAsIHJlc2lkdWUsIDMpO1xuICAgICAgICAgICAgaWYgKGkgPT0gbiAtIDEpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHJlc2lkdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNpZHVlIC09IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIElDMkYge1xuICAgICAgICByYW5kb206IFJhbmRvbU1hbmFnZXI7XG4gICAgfVxufVxuYzJmLnJhbmRvbSA9IFJhbmRvbU1hbmFnZXIuaW5zdGFuY2U7XG5leHBvcnQgeyB9OyJdfQ==