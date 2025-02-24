"use strict";
cc._RF.push(module, '0172a9hxCROabvsSjeqTXx3', 'GameConsts');
// Script/game/GameConsts.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameConsts = void 0;
/** 游戏常量定义：
 *
 */
var GameConsts;
(function (GameConsts) {
    var _a, _b;
    //分包
    var Bundle;
    (function (Bundle) {
        Bundle["demo"] = "demo";
        Bundle["framework"] = "framework";
        Bundle["resource"] = "resources";
        Bundle["entrance"] = "entrance";
        Bundle["mainPack"] = "mainPack";
        Bundle["gameYngy"] = "gameYngy";
        Bundle["boxGame"] = "boxGame";
    })(Bundle = GameConsts.Bundle || (GameConsts.Bundle = {}));
    //平台标志:原生端设置，WEB端链接解析设置，小游戏待定
    GameConsts.PlatNameKey = 'KHPlatName';
    /** 平台支持退出游戏逻辑 */
    GameConsts.PlatSupportQuit = 'KHPLAT_SUPPORT_QUIT';
    /** 平台支持用户中心 */
    GameConsts.PlatSupportAccCenter = 'KHPLAT_SUPPORT_ACCCENTER';
    /** 平台支持切换账号 */
    GameConsts.PlatSupportAccSwitch = 'KHPLAT_SUPPORT_ACCSWITCH';
    /** app包名 */
    GameConsts.AppBundleName = 'SZAPP_BUNDLE_NAME';
    /** app版本号 */
    GameConsts.AppVersion = 'SZAPP_VERSION';
    /** 资源版本号 */
    GameConsts.ResVersion = 'SZRES_VERSION';
    //数字缩写范围(从大到小)
    GameConsts.ShortNum_CN = [
        {
            //兆
            value: 1000000000000,
            fixNum: 4,
            txt: 25,
        },
        {
            //亿
            value: 100000000,
            fixNum: 4,
            txt: 24,
        },
        {
            //万
            value: 10000,
            fixNum: 4,
            txt: 23,
        },
    ];
    /** 资源路径 */
    var ResUrl;
    (function (ResUrl) {
        /** 消灭星星 */
        ResUrl["desStar"] = "ab:mainPack/image/ui/desStar/";
        ResUrl["physics2048"] = "ab:mainPack/image/ui/physics2048/";
        /** 背景音乐 */
        ResUrl["music"] = "audio/music/";
        /** 游戏音效 */
        ResUrl["soundEft"] = "audio/effect/";
        /** UI特效spine */
        ResUrl["uiEfx"] = "ab:mainPack/spine/ui/";
        /** UI根目录 */
        ResUrl["uiRoot"] = "ab:mainPack/image/ui/";
        ResUrl["entrance"] = "ab:entrance/image/";
        ResUrl["yngy"] = "ab:gameYngy/image/ui/";
    })(ResUrl = GameConsts.ResUrl || (GameConsts.ResUrl = {}));
    /** 常用预制体 */
    var CmmPrefab;
    (function (CmmPrefab) {
        /** 星星单个 */
        CmmPrefab["blockItem"] = "ab:mainPack/prefab/desStar/P_BlockItem";
        CmmPrefab["P_StartItem"] = "ab:mainPack/prefab/desStar/P_StartItem";
        CmmPrefab["mapCreatItem"] = "ab:mainPack/prefab/mapCreate/P_MapCreatItem";
        /** 2048单个 */
        CmmPrefab["physics2048Item"] = "ab:mainPack/prefab/physics2048/P_Physics2048Item";
        CmmPrefab["boomItem"] = "ab:mainPack/prefab/physics2048/P_BoomItem";
        /** 篮球 */
        CmmPrefab["ball"] = "ab:mainPack/prefab/basketBall/P_Ball";
    })(CmmPrefab = GameConsts.CmmPrefab || (GameConsts.CmmPrefab = {}));
    /** 道具品质颜色·双色 */
    GameConsts.QualityDoubClr = (_a = {},
        _a[7] = ['#FF8FFE', '#BDFBFF'],
        _a);
    /** 道具品质颜色 */
    GameConsts.QualityColor = (_b = {},
        _b[1] = '#FFFFFF',
        _b[2] = '#7CFFA1',
        _b[3] = '#7CC9FF',
        _b[4] = '#E87CFF',
        _b[5] = '#FFE57C',
        _b[6] = '#FF7C7C',
        _b[7] = '#6FFDFF',
        _b);
    GameConsts.StorageKey = {
        soundEff: 'soundEff',
        soundBg: 'soundBg',
        /**当前关卡 */
        curLv: 'curLv',
        /**2048 当前最大档位 */
        curHistory2048MaxLv: "curHistory2048MaxLv",
    };
    /** 篮球大战 接触状态*/
    var TouchStatus;
    (function (TouchStatus) {
        /** 按下 */
        TouchStatus[TouchStatus["BEGEN"] = 1] = "BEGEN";
        /** 按下 */
        TouchStatus[TouchStatus["ENDED"] = 2] = "ENDED";
        /** 按下*/
        TouchStatus[TouchStatus["CANCEL"] = 3] = "CANCEL";
    })(TouchStatus = GameConsts.TouchStatus || (GameConsts.TouchStatus = {}));
    /** 篮球大战 状态*/
    var BallStatus;
    (function (BallStatus) {
        /** 飞 */
        BallStatus[BallStatus["FLY"] = 1] = "FLY";
        /** 落 */
        BallStatus[BallStatus["DOWN"] = 2] = "DOWN";
        /** 静止*/
        BallStatus[BallStatus["NONE"] = 3] = "NONE";
    })(BallStatus = GameConsts.BallStatus || (GameConsts.BallStatus = {}));
    GameConsts.YngyConst = {
        ItemWidthHeight: 130,
    };
})(GameConsts = exports.GameConsts || (exports.GameConsts = {}));

cc._RF.pop();