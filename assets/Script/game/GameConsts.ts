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




    /** 资源路径 */
    export enum ResUrl {
        /** 消灭星星 */
        desStar = 'ab:mainPack/image/ui/desStar/',
        /** 背景音乐 */
        music = 'audio/music/',
        /** 游戏音效 */
        soundEft = 'audio/effect/',
        /** UI特效spine */
        uiEfx = 'ab:mainPack/spine/ui/',
        /** UI根目录 */
        uiRoot = 'ab:mainPack/image/ui/',

    }

    /** 常用预制体 */
    export enum CmmPrefab {
        /** 星星单个 */
        blockItem = 'ab:mainPack/prefab/desStar/P_BlockItem',

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
    }
    

}
