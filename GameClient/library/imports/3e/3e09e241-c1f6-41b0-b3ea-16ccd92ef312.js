"use strict";
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