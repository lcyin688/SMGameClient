declare global {
    interface ICore {
        EventName: typeof BasicEventName;
    }
}

export default class BasicEventName {
    // //////////////////////////////////////////// 系统 ////////////////////////////////////////////

    /** 游戏切前台 */
    static GAME_SHOW: string = 'GAME_SHOW';
    /** 游戏切后台 */
    static GAME_HIDE: string = 'GAME_HIDE';

    /** 网络状态改变 */
    static NETWORK_STATE_CHANGED: string = 'NETWORK_STATE_CHANGED';
    /** 网络已连接 */
    static NETWORK_ONLINE: string = 'NETWORK_ONLINE';
    /** 网络已断开 */
    static NETWORK_OFFLINE: string = 'NETWORK_OFFLINE';

    /** 屏幕方向变化 */
    static SCREEN_ORIENTATION_CHANGED: string = 'SCREEN_ORIENTATION_CHANGED';
    /** 键盘高度变化 */
    static KEYBOARD_HEIGHT_CHANGED: string = 'KEYBOARD_HEIGHT_CHANGED';
    /** window 消息 */
    static WINDOW_MESSAGE: string = 'WINDOW_MESSAGE';

    /** 全屏事件 touch start */
    static FULL_TOUCH_START: string = 'FULL_TOUCH_START';
    /** 全屏事件 touch move */
    static FULL_TOUCH_MOVE: string = 'FULL_TOUCH_MOVE';
    /** 全屏事件 touch end */
    static FULL_TOUCH_END: string = 'FULL_TOUCH_END';
    /** 全屏事件 touch cancel */
    static FULL_TOUCH_CANCEL: string = 'FULL_TOUCH_CANCEL';

    /** 节点 touch start */
    static NODE_TOUCH_START: string = 'NODE_TOUCH_START';
    /** 节点 touch end */
    static NODE_TOUCH_END: string = 'NODE_TOUCH_END';

    /** 加载状态 */
    static LOAD_STATUS: string = 'LOAD_STATUS';
    /** 加载包版本号 */
    static LOAD_BUNDLE_VERSION: string = 'LOAD_BUNDLE_VERSION';
    /** 加载资源进度 **/
    static LOAD_ASSET_PROGRESS: string = 'LOAD_ASSET_PROGRESS';
    /** 加载进度激活 */
    static LOAD_PROGRESS_ACTIVE: string = 'LOAD_PROGRESS_ACTIVE';
    /** 加载进度 */
    static LOAD_PROGRESS: string = 'LOAD_PROGRESS';
    /** 加载虚拟进度开始 */
    static LOAD_VIRTUAL_PROGRESS_START: string = 'LOAD_VIRTUAL_PROGRESS_START';
    /** 加载虚拟进度停止 */
    static LOAD_VIRTUAL_PROGRESS_END: string = 'LOAD_VIRTUAL_PROGRESS_END';
    /** 预加载资源停止 **/
    static PRELOAD_ASSET_STOP: string = 'PRELOAD_ASSET_STOP';

    // 热更信息
    static HOT_UPDATE_INFO: string = 'HOT_UPDATE_INFO';
    /** 热更开始 **/
    static HOT_UPDATE_START: string = 'HOT_UPDATE_START';
    /** 热更结束 **/
    static HOT_UPDATE_END: string = 'HOT_UPDATE_END';
    /** 热更中止 **/
    static HOT_UPDATE_STOP: string = 'HOT_UPDATE_STOP';

    /** 音乐音量大小变化 */
    static AUDIO_MUSIC_VOLUME_VALUE_CHANGE: string = 'AUDIO_MUSIC_VOLUME_VALUE_CHANGE';
    /** 音乐音量比例变化 */
    static AUDIO_MUSIC_VOLUME_RATIO_CHANGE: string = 'AUDIO_MUSIC_VOLUME_RATIO_CHANGE';
    /** 音效音量大小变化 */
    static AUDIO_EFFECT_VOLUME_VALUE_CHANGE: string = 'AUDIO_EFFECT_VOLUME_VALUE_CHANGE';
    /** 音效音量比例变化 */
    static AUDIO_EFFECT_VOLUME_RATIO_CHANGE: string = 'AUDIO_EFFECT_VOLUME_RATIO_CHANGE';

    /** PWA 安装更新 */
    static PWA_INSTALL_UPDATE: string = 'PWA_INSTALL_UPDATE';

    /** 启动界面加载完成 */
    static RUN_LAUNCHER_SCENE_ENTER: string = 'RUN_LAUNCHER_SCENE_ENTER';

    /** FPS 开启状态更新 */
    static FPS_STATUS_UPDATE: string = 'FPS_STATUS_UPDATE';

    // //////////////////////////////////////////// 业务 ////////////////////////////////////////////

    /** 登录界面显示 */
    static LOGIN_VIEW_SHOW: string = 'LOGIN_VIEW_SHOW';
    /** 登录界面隐藏 */
    static LOGIN_VIEW_HIDE: string = 'LOGIN_VIEW_HIDE';
    /** 登录成功完成 */
    static LOGIN_SUCCESS: string = 'LOGIN_SUCCESS';

    /** 加载品牌 logo */
    static BRAND_LOGO_LOAD: string = 'BRAND_LOGO_LOAD';
    /** 更新进入游戏限制 */
    static ENTER_GAME_LIMIT_UPDATE: string = 'ENTER_GAME_LIMIT_UPDATE';
    /** facebook 分享成功 */
    static FACEBOOK_SHARE_SUCCESS: string = `FACEBOOK_SHARE_SUCCESS`;
}
