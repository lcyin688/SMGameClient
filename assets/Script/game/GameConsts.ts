/** 游戏常量定义：
 * 
 */
export namespace GameConsts {
    //分包
    export enum Bundle {
        demo = 'demo',
        framework = 'framework',
        resource = 'resources',
        entrance = 'entrance',
        mainPack = 'mainPack',
        gameYngy = 'gameYngy',
    }

    //平台标志:原生端设置，WEB端链接解析设置，小游戏待定
    export const PlatNameKey = 'KHPlatName';
    /** 平台支持退出游戏逻辑 */
    export const PlatSupportQuit = 'KHPLAT_SUPPORT_QUIT';
    /** 平台支持用户中心 */
    export const PlatSupportAccCenter = 'KHPLAT_SUPPORT_ACCCENTER';
    /** 平台支持切换账号 */
    export const PlatSupportAccSwitch = 'KHPLAT_SUPPORT_ACCSWITCH';
    /** app包名 */
    export const AppBundleName = 'SZAPP_BUNDLE_NAME';
    /** app版本号 */
    export const AppVersion = 'SZAPP_VERSION';
    /** 资源版本号 */
    export const ResVersion = 'SZRES_VERSION';

    //数字缩写范围(从大到小)
    export const ShortNum_CN = [
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
    ]


    /** 资源路径 */
    export enum ResUrl {
        /** 消灭星星 */
        desStar = 'ab:mainPack/image/ui/desStar/',
        physics2048 = 'ab:mainPack/image/ui/physics2048/',
        /** 背景音乐 */
        music = 'audio/music/',
        /** 游戏音效 */
        soundEft = 'audio/effect/',
        /** UI特效spine */
        uiEfx = 'ab:mainPack/spine/ui/',
        /** UI根目录 */
        uiRoot = 'ab:mainPack/image/ui/',
        entrance = 'ab:entrance/image/',
        yngy = 'ab:gameYngy/image/ui/',


    }

    /** 常用预制体 */
    export enum CmmPrefab {
        /** 星星单个 */
        blockItem = 'ab:mainPack/prefab/desStar/P_BlockItem',
        P_StartItem = 'ab:mainPack/prefab/desStar/P_StartItem',
        mapCreatItem = 'ab:mainPack/prefab/mapCreate/P_MapCreatItem',

        /** 2048单个 */
        physics2048Item = 'ab:mainPack/prefab/physics2048/P_Physics2048Item',
        boomItem = 'ab:mainPack/prefab/physics2048/P_BoomItem',

        /** 篮球 */
        ball = 'ab:mainPack/prefab/basketBall/P_Ball',




    }

    /** 道具品质颜色·双色 */
    export const QualityDoubClr = {
        [7]: ['#FF8FFE', '#BDFBFF'],
    }

    /** 道具品质颜色 */
    export const QualityColor = {
        [1]: '#FFFFFF',
        [2]: '#7CFFA1',
        [3]: '#7CC9FF',
        [4]: '#E87CFF',
        [5]: '#FFE57C',
        [6]: '#FF7C7C',
        [7]: '#6FFDFF',
    }
    export const StorageKey = {
        soundEff: 'soundEff',
        soundBg: 'soundBg',
        /**当前关卡 */
        curLv: 'curLv',
        /**2048 当前最大档位 */
        curHistory2048MaxLv: "curHistory2048MaxLv",
    }



    /** 篮球大战 接触状态*/
    export enum TouchStatus {
        /** 按下 */
        BEGEN = 1,
        /** 按下 */
        ENDED = 2,
        /** 按下*/
        CANCEL = 3,
    }

    /** 篮球大战 状态*/
    export enum BallStatus {
        /** 飞 */
        FLY = 1,
        /** 落 */
        DOWN = 2,
        /** 静止*/
        NONE = 3,
    }

    export const YngyConst = {
        ItemWidthHeight: 130,


    }
}
