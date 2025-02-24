
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/game/GameConsts.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvZ2FtZS9HYW1lQ29uc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gsSUFBaUIsVUFBVSxDQTJJMUI7QUEzSUQsV0FBaUIsVUFBVTs7SUFDdkIsSUFBSTtJQUNKLElBQVksTUFRWDtJQVJELFdBQVksTUFBTTtRQUNkLHVCQUFhLENBQUE7UUFDYixpQ0FBdUIsQ0FBQTtRQUN2QixnQ0FBc0IsQ0FBQTtRQUN0QiwrQkFBcUIsQ0FBQTtRQUNyQiwrQkFBcUIsQ0FBQTtRQUNyQiwrQkFBcUIsQ0FBQTtRQUNyQiw2QkFBbUIsQ0FBQTtJQUN2QixDQUFDLEVBUlcsTUFBTSxHQUFOLGlCQUFNLEtBQU4saUJBQU0sUUFRakI7SUFFRCw2QkFBNkI7SUFDaEIsc0JBQVcsR0FBRyxZQUFZLENBQUM7SUFDeEMsaUJBQWlCO0lBQ0osMEJBQWUsR0FBRyxxQkFBcUIsQ0FBQztJQUNyRCxlQUFlO0lBQ0YsK0JBQW9CLEdBQUcsMEJBQTBCLENBQUM7SUFDL0QsZUFBZTtJQUNGLCtCQUFvQixHQUFHLDBCQUEwQixDQUFDO0lBQy9ELFlBQVk7SUFDQyx3QkFBYSxHQUFHLG1CQUFtQixDQUFDO0lBQ2pELGFBQWE7SUFDQSxxQkFBVSxHQUFHLGVBQWUsQ0FBQztJQUMxQyxZQUFZO0lBQ0MscUJBQVUsR0FBRyxlQUFlLENBQUM7SUFFMUMsY0FBYztJQUNELHNCQUFXLEdBQUc7UUFDdkI7WUFDSSxHQUFHO1lBQ0gsS0FBSyxFQUFFLGFBQWE7WUFDcEIsTUFBTSxFQUFFLENBQUM7WUFDVCxHQUFHLEVBQUUsRUFBRTtTQUNWO1FBQ0Q7WUFDSSxHQUFHO1lBQ0gsS0FBSyxFQUFFLFNBQVM7WUFDaEIsTUFBTSxFQUFFLENBQUM7WUFDVCxHQUFHLEVBQUUsRUFBRTtTQUNWO1FBQ0Q7WUFDSSxHQUFHO1lBQ0gsS0FBSyxFQUFFLEtBQUs7WUFDWixNQUFNLEVBQUUsQ0FBQztZQUNULEdBQUcsRUFBRSxFQUFFO1NBQ1Y7S0FDSixDQUFBO0lBR0QsV0FBVztJQUNYLElBQVksTUFnQlg7SUFoQkQsV0FBWSxNQUFNO1FBQ2QsV0FBVztRQUNYLG1EQUF5QyxDQUFBO1FBQ3pDLDJEQUFpRCxDQUFBO1FBQ2pELFdBQVc7UUFDWCxnQ0FBc0IsQ0FBQTtRQUN0QixXQUFXO1FBQ1gsb0NBQTBCLENBQUE7UUFDMUIsZ0JBQWdCO1FBQ2hCLHlDQUErQixDQUFBO1FBQy9CLFlBQVk7UUFDWiwwQ0FBZ0MsQ0FBQTtRQUNoQyx5Q0FBK0IsQ0FBQTtRQUMvQix3Q0FBOEIsQ0FBQTtJQUdsQyxDQUFDLEVBaEJXLE1BQU0sR0FBTixpQkFBTSxLQUFOLGlCQUFNLFFBZ0JqQjtJQUVELFlBQVk7SUFDWixJQUFZLFNBZ0JYO0lBaEJELFdBQVksU0FBUztRQUNqQixXQUFXO1FBQ1gsaUVBQW9ELENBQUE7UUFDcEQsbUVBQXNELENBQUE7UUFDdEQseUVBQTRELENBQUE7UUFFNUQsYUFBYTtRQUNiLGlGQUFvRSxDQUFBO1FBQ3BFLG1FQUFzRCxDQUFBO1FBRXRELFNBQVM7UUFDVCwwREFBNkMsQ0FBQTtJQUtqRCxDQUFDLEVBaEJXLFNBQVMsR0FBVCxvQkFBUyxLQUFULG9CQUFTLFFBZ0JwQjtJQUVELGdCQUFnQjtJQUNILHlCQUFjO1FBQ3ZCLEdBQUMsQ0FBQyxJQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQztXQUM5QixDQUFBO0lBRUQsYUFBYTtJQUNBLHVCQUFZO1FBQ3JCLEdBQUMsQ0FBQyxJQUFHLFNBQVM7UUFDZCxHQUFDLENBQUMsSUFBRyxTQUFTO1FBQ2QsR0FBQyxDQUFDLElBQUcsU0FBUztRQUNkLEdBQUMsQ0FBQyxJQUFHLFNBQVM7UUFDZCxHQUFDLENBQUMsSUFBRyxTQUFTO1FBQ2QsR0FBQyxDQUFDLElBQUcsU0FBUztRQUNkLEdBQUMsQ0FBQyxJQUFHLFNBQVM7V0FDakIsQ0FBQTtJQUNZLHFCQUFVLEdBQUc7UUFDdEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsVUFBVTtRQUNWLEtBQUssRUFBRSxPQUFPO1FBQ2QsaUJBQWlCO1FBQ2pCLG1CQUFtQixFQUFFLHFCQUFxQjtLQUM3QyxDQUFBO0lBSUQsZUFBZTtJQUNmLElBQVksV0FPWDtJQVBELFdBQVksV0FBVztRQUNuQixTQUFTO1FBQ1QsK0NBQVMsQ0FBQTtRQUNULFNBQVM7UUFDVCwrQ0FBUyxDQUFBO1FBQ1QsUUFBUTtRQUNSLGlEQUFVLENBQUE7SUFDZCxDQUFDLEVBUFcsV0FBVyxHQUFYLHNCQUFXLEtBQVgsc0JBQVcsUUFPdEI7SUFFRCxhQUFhO0lBQ2IsSUFBWSxVQU9YO0lBUEQsV0FBWSxVQUFVO1FBQ2xCLFFBQVE7UUFDUix5Q0FBTyxDQUFBO1FBQ1AsUUFBUTtRQUNSLDJDQUFRLENBQUE7UUFDUixRQUFRO1FBQ1IsMkNBQVEsQ0FBQTtJQUNaLENBQUMsRUFQVyxVQUFVLEdBQVYscUJBQVUsS0FBVixxQkFBVSxRQU9yQjtJQUVZLG9CQUFTLEdBQUc7UUFDckIsZUFBZSxFQUFFLEdBQUc7S0FHdkIsQ0FBQTtBQUNMLENBQUMsRUEzSWdCLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBMkkxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiDmuLjmiI/luLjph4/lrprkuYnvvJpcbiAqIFxuICovXG5leHBvcnQgbmFtZXNwYWNlIEdhbWVDb25zdHMge1xuICAgIC8v5YiG5YyFXG4gICAgZXhwb3J0IGVudW0gQnVuZGxlIHtcbiAgICAgICAgZGVtbyA9ICdkZW1vJyxcbiAgICAgICAgZnJhbWV3b3JrID0gJ2ZyYW1ld29yaycsXG4gICAgICAgIHJlc291cmNlID0gJ3Jlc291cmNlcycsXG4gICAgICAgIGVudHJhbmNlID0gJ2VudHJhbmNlJyxcbiAgICAgICAgbWFpblBhY2sgPSAnbWFpblBhY2snLFxuICAgICAgICBnYW1lWW5neSA9ICdnYW1lWW5neScsXG4gICAgICAgIGJveEdhbWUgPSAnYm94R2FtZScsXG4gICAgfVxuXG4gICAgLy/lubPlj7DmoIflv5c65Y6f55Sf56uv6K6+572u77yMV0VC56uv6ZO+5o6l6Kej5p6Q6K6+572u77yM5bCP5ri45oiP5b6F5a6aXG4gICAgZXhwb3J0IGNvbnN0IFBsYXROYW1lS2V5ID0gJ0tIUGxhdE5hbWUnO1xuICAgIC8qKiDlubPlj7DmlK/mjIHpgIDlh7rmuLjmiI/pgLvovpEgKi9cbiAgICBleHBvcnQgY29uc3QgUGxhdFN1cHBvcnRRdWl0ID0gJ0tIUExBVF9TVVBQT1JUX1FVSVQnO1xuICAgIC8qKiDlubPlj7DmlK/mjIHnlKjmiLfkuK3lv4MgKi9cbiAgICBleHBvcnQgY29uc3QgUGxhdFN1cHBvcnRBY2NDZW50ZXIgPSAnS0hQTEFUX1NVUFBPUlRfQUNDQ0VOVEVSJztcbiAgICAvKiog5bmz5Y+w5pSv5oyB5YiH5o2i6LSm5Y+3ICovXG4gICAgZXhwb3J0IGNvbnN0IFBsYXRTdXBwb3J0QWNjU3dpdGNoID0gJ0tIUExBVF9TVVBQT1JUX0FDQ1NXSVRDSCc7XG4gICAgLyoqIGFwcOWMheWQjSAqL1xuICAgIGV4cG9ydCBjb25zdCBBcHBCdW5kbGVOYW1lID0gJ1NaQVBQX0JVTkRMRV9OQU1FJztcbiAgICAvKiogYXBw54mI5pys5Y+3ICovXG4gICAgZXhwb3J0IGNvbnN0IEFwcFZlcnNpb24gPSAnU1pBUFBfVkVSU0lPTic7XG4gICAgLyoqIOi1hOa6kOeJiOacrOWPtyAqL1xuICAgIGV4cG9ydCBjb25zdCBSZXNWZXJzaW9uID0gJ1NaUkVTX1ZFUlNJT04nO1xuXG4gICAgLy/mlbDlrZfnvKnlhpnojIPlm7Qo5LuO5aSn5Yiw5bCPKVxuICAgIGV4cG9ydCBjb25zdCBTaG9ydE51bV9DTiA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgLy/lhYZcbiAgICAgICAgICAgIHZhbHVlOiAxMDAwMDAwMDAwMDAwLFxuICAgICAgICAgICAgZml4TnVtOiA0LFxuICAgICAgICAgICAgdHh0OiAyNSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLy/kur9cbiAgICAgICAgICAgIHZhbHVlOiAxMDAwMDAwMDAsXG4gICAgICAgICAgICBmaXhOdW06IDQsXG4gICAgICAgICAgICB0eHQ6IDI0LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICAvL+S4h1xuICAgICAgICAgICAgdmFsdWU6IDEwMDAwLFxuICAgICAgICAgICAgZml4TnVtOiA0LFxuICAgICAgICAgICAgdHh0OiAyMyxcbiAgICAgICAgfSxcbiAgICBdXG5cblxuICAgIC8qKiDotYTmupDot6/lvoQgKi9cbiAgICBleHBvcnQgZW51bSBSZXNVcmwge1xuICAgICAgICAvKiog5raI54Gt5pif5pifICovXG4gICAgICAgIGRlc1N0YXIgPSAnYWI6bWFpblBhY2svaW1hZ2UvdWkvZGVzU3Rhci8nLFxuICAgICAgICBwaHlzaWNzMjA0OCA9ICdhYjptYWluUGFjay9pbWFnZS91aS9waHlzaWNzMjA0OC8nLFxuICAgICAgICAvKiog6IOM5pmv6Z+z5LmQICovXG4gICAgICAgIG11c2ljID0gJ2F1ZGlvL211c2ljLycsXG4gICAgICAgIC8qKiDmuLjmiI/pn7PmlYggKi9cbiAgICAgICAgc291bmRFZnQgPSAnYXVkaW8vZWZmZWN0LycsXG4gICAgICAgIC8qKiBVSeeJueaViHNwaW5lICovXG4gICAgICAgIHVpRWZ4ID0gJ2FiOm1haW5QYWNrL3NwaW5lL3VpLycsXG4gICAgICAgIC8qKiBVSeagueebruW9lSAqL1xuICAgICAgICB1aVJvb3QgPSAnYWI6bWFpblBhY2svaW1hZ2UvdWkvJyxcbiAgICAgICAgZW50cmFuY2UgPSAnYWI6ZW50cmFuY2UvaW1hZ2UvJyxcbiAgICAgICAgeW5neSA9ICdhYjpnYW1lWW5neS9pbWFnZS91aS8nLFxuXG5cbiAgICB9XG5cbiAgICAvKiog5bi455So6aKE5Yi25L2TICovXG4gICAgZXhwb3J0IGVudW0gQ21tUHJlZmFiIHtcbiAgICAgICAgLyoqIOaYn+aYn+WNleS4qiAqL1xuICAgICAgICBibG9ja0l0ZW0gPSAnYWI6bWFpblBhY2svcHJlZmFiL2Rlc1N0YXIvUF9CbG9ja0l0ZW0nLFxuICAgICAgICBQX1N0YXJ0SXRlbSA9ICdhYjptYWluUGFjay9wcmVmYWIvZGVzU3Rhci9QX1N0YXJ0SXRlbScsXG4gICAgICAgIG1hcENyZWF0SXRlbSA9ICdhYjptYWluUGFjay9wcmVmYWIvbWFwQ3JlYXRlL1BfTWFwQ3JlYXRJdGVtJyxcblxuICAgICAgICAvKiogMjA0OOWNleS4qiAqL1xuICAgICAgICBwaHlzaWNzMjA0OEl0ZW0gPSAnYWI6bWFpblBhY2svcHJlZmFiL3BoeXNpY3MyMDQ4L1BfUGh5c2ljczIwNDhJdGVtJyxcbiAgICAgICAgYm9vbUl0ZW0gPSAnYWI6bWFpblBhY2svcHJlZmFiL3BoeXNpY3MyMDQ4L1BfQm9vbUl0ZW0nLFxuXG4gICAgICAgIC8qKiDnr67nkIMgKi9cbiAgICAgICAgYmFsbCA9ICdhYjptYWluUGFjay9wcmVmYWIvYmFza2V0QmFsbC9QX0JhbGwnLFxuXG5cblxuXG4gICAgfVxuXG4gICAgLyoqIOmBk+WFt+WTgei0qOminOiJssK35Y+M6ImyICovXG4gICAgZXhwb3J0IGNvbnN0IFF1YWxpdHlEb3ViQ2xyID0ge1xuICAgICAgICBbN106IFsnI0ZGOEZGRScsICcjQkRGQkZGJ10sXG4gICAgfVxuXG4gICAgLyoqIOmBk+WFt+WTgei0qOminOiJsiAqL1xuICAgIGV4cG9ydCBjb25zdCBRdWFsaXR5Q29sb3IgPSB7XG4gICAgICAgIFsxXTogJyNGRkZGRkYnLFxuICAgICAgICBbMl06ICcjN0NGRkExJyxcbiAgICAgICAgWzNdOiAnIzdDQzlGRicsXG4gICAgICAgIFs0XTogJyNFODdDRkYnLFxuICAgICAgICBbNV06ICcjRkZFNTdDJyxcbiAgICAgICAgWzZdOiAnI0ZGN0M3QycsXG4gICAgICAgIFs3XTogJyM2RkZERkYnLFxuICAgIH1cbiAgICBleHBvcnQgY29uc3QgU3RvcmFnZUtleSA9IHtcbiAgICAgICAgc291bmRFZmY6ICdzb3VuZEVmZicsXG4gICAgICAgIHNvdW5kQmc6ICdzb3VuZEJnJyxcbiAgICAgICAgLyoq5b2T5YmN5YWz5Y2hICovXG4gICAgICAgIGN1ckx2OiAnY3VyTHYnLFxuICAgICAgICAvKioyMDQ4IOW9k+WJjeacgOWkp+aho+S9jSAqL1xuICAgICAgICBjdXJIaXN0b3J5MjA0OE1heEx2OiBcImN1ckhpc3RvcnkyMDQ4TWF4THZcIixcbiAgICB9XG5cblxuXG4gICAgLyoqIOevrueQg+Wkp+aImCDmjqXop6bnirbmgIEqL1xuICAgIGV4cG9ydCBlbnVtIFRvdWNoU3RhdHVzIHtcbiAgICAgICAgLyoqIOaMieS4iyAqL1xuICAgICAgICBCRUdFTiA9IDEsXG4gICAgICAgIC8qKiDmjInkuIsgKi9cbiAgICAgICAgRU5ERUQgPSAyLFxuICAgICAgICAvKiog5oyJ5LiLKi9cbiAgICAgICAgQ0FOQ0VMID0gMyxcbiAgICB9XG5cbiAgICAvKiog56+u55CD5aSn5oiYIOeKtuaAgSovXG4gICAgZXhwb3J0IGVudW0gQmFsbFN0YXR1cyB7XG4gICAgICAgIC8qKiDpo54gKi9cbiAgICAgICAgRkxZID0gMSxcbiAgICAgICAgLyoqIOiQvSAqL1xuICAgICAgICBET1dOID0gMixcbiAgICAgICAgLyoqIOmdmeatoiovXG4gICAgICAgIE5PTkUgPSAzLFxuICAgIH1cblxuICAgIGV4cG9ydCBjb25zdCBZbmd5Q29uc3QgPSB7XG4gICAgICAgIEl0ZW1XaWR0aEhlaWdodDogMTMwLFxuXG5cbiAgICB9XG59XG4iXX0=