"use strict";
cc._RF.push(module, '21de8XYl+VLc5Lj9uXBuhnW', 'UIParam');
// Script/game/UIParam.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIPa = void 0;
var GameConsts_1 = require("./GameConsts");
/**
 * UI界面定义的需导出参数，统一定义到此，便于导入
 */
var UIPa;
(function (UIPa) {
    var _a, _b;
    UIPa.DesStarGameArgs = {
        width: 66,
        heigh: 66,
        count: 10,
    };
    /** 道具品质颜色 */
    UIPa.StarItemData = (_a = {},
        _a[0] = { score: 1, url: GameConsts_1.GameConsts.ResUrl.desStar + "block_0" },
        _a[1] = { score: 2, url: GameConsts_1.GameConsts.ResUrl.desStar + "block_1" },
        _a[2] = { score: 5, url: GameConsts_1.GameConsts.ResUrl.desStar + "block_2" },
        _a[3] = { score: 5, url: GameConsts_1.GameConsts.ResUrl.desStar + "block_3" },
        _a[4] = { score: 10, url: GameConsts_1.GameConsts.ResUrl.desStar + "block_4" },
        _a[5] = { score: 10, url: GameConsts_1.GameConsts.ResUrl.desStar + "block_5" },
        _a[6] = { score: 20, url: GameConsts_1.GameConsts.ResUrl.desStar + "block_6" },
        _a[7] = { score: 20, url: GameConsts_1.GameConsts.ResUrl.desStar + "block_7" },
        _a);
    /** 道具品质颜色 */
    UIPa.Physics2048ItemData = (_b = {},
        _b[0] = { tag: 1, colorNum: "<color=#FFFFFF>2</color>", score: 2, url: GameConsts_1.GameConsts.ResUrl.physics2048 + "circle_2", radius: 30 },
        _b[1] = { tag: 2, colorNum: "<color=#FFFFFF>4</color>", score: 4, url: GameConsts_1.GameConsts.ResUrl.physics2048 + "circle_4", radius: 40 },
        _b[2] = { tag: 3, colorNum: "<color=#FFFFFF>8</color>", score: 8, url: GameConsts_1.GameConsts.ResUrl.physics2048 + "circle_8", radius: 45 },
        _b[3] = { tag: 4, colorNum: "<color=#FFFFFF>16</color>", score: 16, url: GameConsts_1.GameConsts.ResUrl.physics2048 + "circle_16", radius: 50 },
        _b[4] = { tag: 5, colorNum: "<color=#FFFFFF>32</color>", score: 32, url: GameConsts_1.GameConsts.ResUrl.physics2048 + "circle_32", radius: 60 },
        _b[5] = { tag: 6, colorNum: "<color=#FFFFFF>64</color>", score: 64, url: GameConsts_1.GameConsts.ResUrl.physics2048 + "circle_64", radius: 70 },
        _b[6] = { tag: 7, colorNum: "<color=#FFFFFF>128</color>", score: 128, url: GameConsts_1.GameConsts.ResUrl.physics2048 + "circle_128", radius: 80 },
        _b[7] = { tag: 8, colorNum: "<color=#FFFFFF>256</color>", score: 256, url: GameConsts_1.GameConsts.ResUrl.physics2048 + "circle_256", radius: 100 },
        _b[8] = { tag: 9, colorNum: "<color=#FFFFFF>512</color>", score: 512, url: GameConsts_1.GameConsts.ResUrl.physics2048 + "circle_512", radius: 120 },
        _b[9] = { tag: 10, colorNum: "<color=#FFFFFF>1024</color>", score: 1024, url: GameConsts_1.GameConsts.ResUrl.physics2048 + "circle_1024", radius: 130 },
        _b[10] = { tag: 11, colorNum: "<color=#FFFFFF>2048</color>", score: 2048, url: GameConsts_1.GameConsts.ResUrl.physics2048 + "circle_2048", radius: 150 },
        _b);
    UIPa.PhysicsTag = {
        wall: 0,
        block_2: 1,
        block_4: 2,
        block_8: 3,
        block_16: 4,
        block_32: 5,
        block_64: 6,
        block_128: 7,
        block_256: 8,
        block_512: 9,
        block_1024: 10,
        block_2048: 11,
    };
    var YngyItemArgsStates;
    (function (YngyItemArgsStates) {
        YngyItemArgsStates[YngyItemArgsStates["Alive"] = 0] = "Alive";
        YngyItemArgsStates[YngyItemArgsStates["Dead"] = 1] = "Dead";
    })(YngyItemArgsStates = UIPa.YngyItemArgsStates || (UIPa.YngyItemArgsStates = {}));
})(UIPa = exports.UIPa || (exports.UIPa = {}));

cc._RF.pop();