/*** 界面回调参数对象定义 */
export interface UICallbacks {
    /**
     * 节点添加到层级以后的回调
     * @param node   当前界面节点
     * @param params 外部传递参数
     */
    onUIAdded?: (node: cc.Node, params: any) => void,

    /**
     * 窗口节点 remove 时回调
     * @param node   当前界面节点
     * @param params 外部传递参数
     */
    onUIRemoved?: (node: cc.Node | null, params: any) => void,

    /** 
     * 注意：调用`delete`或`$delete`才会触发此回调，如果`this.node.destroy()`，该回调将直接忽略。
     * 
     * 如果指定onUIBeforeRemove，则next必须调用，否则节点不会被正常删除。
     * 
     * 比如希望节点做一个FadeOut然后删除，则可以在`onUIBeforeRemove`当中播放action动画，动画结束后调用next
     * @param node   当前界面节点
     * @param next   回调方法
     */
    onUIBeforeRemove?: (node: cc.Node, next: Function) => void

    /**
     * 窗口节点 destroy 时回调
     * @param node   当前界面节点
     * @param params 外部传递参数
     */
    onUIDestroy?: (node: cc.Node | null, params: any) => void,

    /**
     * 弹窗入场通用动画，可自定义替换
     * @param node   当前界面节点
     * @param params 外部传递参数
     */
    inAnima?: (node: cc.Node, params: any) => void,
    /** 
     * 弹窗关闭通用动画，可自定义替换
     * @param node   当前界面节点
     * @param next   回调方法
     */
    outAnima?: (node: cc.Node, next: Function) => void
}

/** 弹框层回调对象定义 */
export interface PopViewParams extends UICallbacks {
    /** 是否触摸背景关闭弹窗 */
    touchClose?: boolean,

    /** 控制暗色背景的透明度 默认为190*/
    opacity?: number;
}

/** 本类型仅供gui模块内部使用，请勿在功能逻辑中使用 */
export class ViewParams {
    /** 界面唯一标识 */
    uuid: string;
    /** 传递给打开界面的参数 */
    params: any;
    /** 窗口事件 */
    callbacks: UICallbacks;
    /** 是否在使用状态 */
    valid: boolean;
    /** 界面根节点 */
    node: cc.Node;

    /** 预制路径 */
    prefabPath: string;
    /** 包名 */
    bundle: string;

    /** 窗口配置 */
    uiCfg: UIConfig;

    constructor() {
        this.uuid = null;
        this.prefabPath = null;
        this.params = null;
        this.callbacks = null;
        this.valid = true;
        this.node = null;
        this.bundle = null;
        this.uiCfg = null;
    }
}

/** 界面层类型 */
export enum LayerType {
    /** 游戏层 */
    Game = "LayerGame",
    /** 全屏类弹出界面 */
    UI = "LayerUI",
    /** 窗口类弹出界面 */
    PopUp = "LayerPopUp",
    /** 模式窗口层 */
    Dialog = "LayerDialog",
    /** 系统触发模式窗口层 eg.断网提示等 */
    System = "LayerSystem",
    /** 滚动消息提示层 eg.走马灯,冒泡提示*/
    Notify = "LayerNotify",
    /** 新手引导层 */
    Guide = "LayerGuide",
    /** 点击特效 */
    TouchEfx = "LayerTouchEfx",
}

export interface UIConfig {
    /** 远程包名 */
    bundle?: string;
    /** 窗口层级 */
    layer: LayerType;
    /** 预制资源相对路径 */
    prefab: string;
    /** 显示顶部信息 */
    showTop?: boolean;
    /** 无模糊背景*/
    noBlurScn?: boolean;
}

export type ViewConfig = { [key: number]: UIConfig };