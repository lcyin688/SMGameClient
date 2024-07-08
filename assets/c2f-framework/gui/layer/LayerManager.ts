import { GUI } from "../GUI";
import { LayerType, UICallbacks, UIConfig, ViewConfig } from "../../define/C2FUIDef";
import { DelegateComponent } from "./DelegateComponent";
import { LayerDialog } from "./LayerDialog";
import { LayerNotify } from "./LayerNotify";
import { LayerPopUp } from "./LayerPopup";
import { LayerUI } from "./LayerUI";
import { UIMap } from "./UIMap";
import { LayerEffect } from "./LayerEffect";
import { TouchEffect } from "../view/TouchEffect";

export class LayerManager {
    /** 界面根节点 */
    root!: cc.Node;
    /** 界面摄像机 */
    camera!: cc.Camera;
    /** 游戏界面特效层 */
    game!: cc.Node;
    /** 界面地图 */
    uiMap!: UIMap;

    /** 界面层·弹出型 */
    private ui!: LayerUI;
    /** 弹窗层·弹出型 */
    private popup!: LayerPopUp;
    /** 只能弹出一个的弹窗·弹出型 */
    private dialog!: LayerDialog;
    /** 游戏系统提示弹窗  */
    private system!: LayerDialog;
    /** 消息提示控制器，请使用show方法来显示 */
    private notify!: LayerNotify;
    /** 新手引导层 */
    private guide!: LayerUI;

    /** UI配置 */
    private uiCfgs: ViewConfig = {};
    /** 游戏字体 */
    private _gameFont: cc.Font;
    public get gameFont(): cc.Font {
        return this._gameFont;
    }
    public set gameFont(v: cc.Font) {
        this._gameFont = v;
    }

    /** 是否为竖屏显示 */
    get portrait() {
        return this.root.getComponent(GUI)!.portrait;
    }

    /**
     * 构造函数
     * @param root  界面根节点
     */
    constructor() {
    }

    private createNode(name: string) {
        let node = new cc.Node(name);
        let w: cc.Widget = node.addComponent(cc.Widget);
        w.isAlignLeft = w.isAlignRight = w.isAlignTop = w.isAlignBottom = true;
        w.left = w.right = w.top = w.bottom = 0;
        w.alignMode = cc.Widget.AlignMode.ON_WINDOW_RESIZE;
        w.enabled = true;
        return node;
    }

    public init(root: cc.Node) {
        this.root = root;
        this.camera = this.root.parent.getChildByName('Camera').getComponent(cc.Camera)!;

        this.game = this.createNode(LayerType.Game);
        this.ui = new LayerUI(LayerType.UI);
        this.popup = new LayerPopUp(LayerType.PopUp);
        this.dialog = new LayerDialog(LayerType.Dialog);
        this.system = new LayerDialog(LayerType.System);
        this.notify = new LayerNotify(LayerType.Notify);
        this.guide = new LayerUI(LayerType.Guide);
        root.addChild(this.game);
        root.addChild(this.ui);
        root.addChild(this.popup);
        root.addChild(this.dialog);
        root.addChild(this.system);
        root.addChild(this.notify);
        root.addChild(this.guide);
    }

    /**
     * 初始化所有UI的配置对象
     * @param configs 配置对象
     */
    public addViewList(list: ViewConfig): void {
        if (!this.uiCfgs) {
            this.uiCfgs = {};
        }
        if (Object.keys(this.uiCfgs).length <= 0) {
            this.uiCfgs = list;
        } else {
            for (let key in list) {
                this.uiCfgs[key] = list[key];
            }
        }
    }

    /**
     * 添加水波纹特效
     */
    public addWaterWaveEfx(dur: number) {
        // this.touchEfx.addWaterWaveEfx(dur);
    }

    /**
     * 渐隐飘过提示
     * @param content 文本表示
     * @param useI18n 是否使用多语言
     * @example 
     * c2f.gui.notifyTxt("提示内容");
     */
    public notifyTxt(content: string, useI18n: boolean = true) {
        this.notify.notifyTxt(content, useI18n)
    }

    /**
    * 显示加载界面
    * @param tips 文本提示
    * @example 
    * c2f.gui.loading("提示内容");
    */
    public showLoading(tips: string = '') {
        this.notify.showLoading(tips);
    }

    /**
    * 隐藏加载界面
    * @param clean 是否清空
    * @example 
    * c2f.gui.loading("提示内容");
    */
    public hideLoading(clean: boolean = false) {
        this.notify.hideLoading(clean);
    }

    /**
     * 弹出自定义UI
     * @param node 目标节点
     */
    public popNotifyNode(node: cc.Node) {
        this.notify.addChild(node);
    }

    /**
     * 设置界面配置
     * @param uiId   要设置的界面id
     * @param config 要设置的配置
     */
    public setConfig(uiId: number, config: UIConfig): void {
        this.uiCfgs[uiId] = config;
    }

    /**
     * 设置界面地图配置
     * @param data 界面地图数据
     */
    public setUIMap(data: any) {
        if (this.uiMap == null) {
            this.uiMap = new UIMap();
        }
        this.uiMap.init(data);
    }

    /** 设置顶部节点 */
    public setPlayerTopPanel<T extends cc.Node>(panel: T) {
        this.ui.setTopPanel(panel);
    }

    /**
     * 同步打开一个窗口
     * @param uiId          窗口唯一编号
     * @param uiArgs        窗口参数
     * @param callbacks     回调对象
     * @example
    var uic: UICallbacks = {
        onUIAdded: (node: Node, params: any) => {
            var comp = node.getComponent(LoadingViewComp) as ecs.Comp;
        }
        onUIRemoved:(node: Node | null, params: any) => {
                    
        }
    };
    c2f.gui.open(UIID.Loading, null, uic);
     */
    public open(uiId: number, uiArgs: any = null, callbacks?: UICallbacks): void {
        const config = this.uiCfgs[uiId];
        if (config == null) {
            cc.warn(`打开编号为【${uiId}】的界面失败，配置信息不存在`);
            return;
        }

        switch (config.layer) {
            case LayerType.UI:
            case LayerType.PopUp:
                this.ui.add(config, uiArgs, callbacks);
                break;
            case LayerType.Dialog:
                this.dialog.add(config, uiArgs, callbacks);
                break;
            case LayerType.System:
                this.system.add(config, uiArgs, callbacks);
                break;
            case LayerType.Guide:
                this.guide.add(config, uiArgs, callbacks);
                break;
            case LayerType.Notify:
                this.notify.add(config, uiArgs, callbacks);
                break;
        }
    }

    /**
     * 异步打开一个窗口
     * @param uiId          窗口唯一编号
     * @param uiArgs        窗口参数
     * @example 
     * var node = await c2f.gui.openAsync(UIID.Loading);
     */
    async openAsync(uiId: number, uiArgs: any = null): Promise<cc.Node | null> {
        return new Promise<cc.Node | null>((resolve, reject) => {
            var callbacks: UICallbacks = {
                onUIAdded: (node: cc.Node, params: any) => {
                    resolve(node)
                }
            };
            this.open(uiId, uiArgs, callbacks);
        });
    }

    /**
     * 缓存中是否存在指定标识的窗口
     * @param uiId 窗口唯一标识
     * @example
     * c2f.gui.has(UIID.Loading);
     */
    public has(uiId: number): boolean {
        var config = this.uiCfgs[uiId];
        if (config == null) {
            cc.warn(`编号为【${uiId}】的界面失败，配置信息不存在`);
            return false;
        }

        var result = false;
        switch (config.layer) {
            case LayerType.UI:
            case LayerType.PopUp:
                result = this.ui.has(config.prefab);
                break;
            case LayerType.Dialog:
                result = this.dialog.has(config.prefab);
                break;
            case LayerType.System:
                result = this.system.has(config.prefab);
                break;
            case LayerType.Guide:
                result = this.guide.has(config.prefab);
                break;
        }
        return result;
    }

    /**
     *  根据预制件路径获取当前显示的该预制件的所有Node节点数组
     * @param uiId 窗口唯一标识
     * @example
     * c2f.gui.get(UIID.Loading);
     */
    public get(uiId: number): Array<cc.Node> {
        const config = this.uiCfgs[uiId];
        if (config == null) {
            cc.warn(`编号为【${uiId}】的界面失败，配置信息不存在`);
            return [];
        }
        let result: Array<cc.Node> = [];
        switch (config.layer) {
            case LayerType.UI:
            case LayerType.PopUp:
                result = this.ui.get(config.prefab);
                break;
            case LayerType.Dialog:
                result = this.dialog.get(config.prefab);
                break;
            case LayerType.System:
                result = this.system.get(config.prefab);
                break;
            case LayerType.Guide:
                result = this.guide.get(config.prefab);
                break;
            case LayerType.Notify:
                result = this.notify.get(config.prefab);
                break;
        }
        if (!result || result.length <= 0) {
            cc.warn("don't find target layer!")
            // let viewComp = UIID[uiId];
            // let dstComp = this.ui.getComponentInChildren(viewComp);
            // if (dstComp) {
            //     result.push(dstComp.node);
            // }
        }
        return result;
    }

    /** 获取窗口参数 */
    public getViewParam(uiId: number) {
        const config = this.uiCfgs[uiId];
        if (config == null) {
            cc.warn(`编号为【${uiId}】的界面失败，配置信息不存在`);
            return null;
        }
        let viewParams = null;
        switch (config.layer) {
            case LayerType.UI:
            case LayerType.PopUp:
                viewParams = this.ui.getViewParam(config);
                break;
            case LayerType.Dialog:
                viewParams = this.dialog.getViewParam(config);
                break;
            case LayerType.System:
                viewParams = this.system.getViewParam(config);
                break;
            case LayerType.Guide:
                viewParams = this.guide.getViewParam(config);
                break;
            case LayerType.Notify:
                viewParams = this.guide.getViewParam(config);
                break;
        }
        return viewParams;
    }

    /**
     * 移除指定标识的窗口
     * @param uiId         窗口唯一标识
     * @param isDestroy    移除后是否释放
     * @example
     * c2f.gui.remove(UIID.Loading);
     */
    public remove(uiId: number, isDestroy: boolean = true) {
        const config = this.uiCfgs[uiId];
        if (config == null) {
            cc.warn(`删除编号为【${uiId}】的界面失败，配置信息不存在`);
            return;
        }

        switch (config.layer) {
            case LayerType.UI:
            case LayerType.PopUp:
                this.ui.remove(config.prefab, isDestroy);
                break;
            case LayerType.Dialog:
                this.dialog.remove(config.prefab, isDestroy);
                break;
            case LayerType.System:
                this.system.remove(config.prefab, isDestroy);
                break;
            case LayerType.Guide:
                this.guide.remove(config.prefab, isDestroy);
                break;
        }
    }

    /**
     * 删除一个通过this框架添加进来的节点
     * @param node          窗口节点
     * @param isDestroy     移除后是否释放
     * @example
     * c2f.gui.removeByNode(cc.Node);
     */
    public removeByNode(node: cc.Node, isDestroy: boolean = true) {
        let allLayer = [this.ui, this.popup, this.dialog, this.system, this.guide];

        let removeObj: { layer: LayerUI, prefab: string } = null;
        for (let one of allLayer) {
            let url = one.getPrefabUrlByNode(node);
            if (url && url.length > 0) {
                removeObj = { layer: one, prefab: url };
                break;
            }
        }
        if (removeObj) {
            removeObj.layer.remove(removeObj.prefab, isDestroy);
        } else {
            c2f.log.logBusiness("gui.removeByNode don't find target node!! name:", node.name);
            if (node instanceof cc.Node) {
                let comp = node.getComponent(DelegateComponent);
                if (comp && comp.viewParams) {
                    // @ts-ignore 注：不对外使用
                    (node.parent as LayerUI).removeByUuid(comp.viewParams.uuid, isDestroy);
                }
                else {
                    cc.warn(`当前删除的node不是通过界面管理器添加到舞台上`);
                    node.destroy();
                }
            }
        }
    }

    /** 关闭uiId之上的所有界面 */
    public removeAllAboveUI(uiId: number) {
        const config = this.uiCfgs[uiId];
        if (!config) {
            return;
        }
        if (config.layer != LayerType.UI && config.layer != LayerType.PopUp) {
            return;
        }
        let dstUI = this.ui.has(config.prefab);
        if (!dstUI) {
            return;
        }
        this.ui.removeAboveUI(config.prefab);
    }

    /**
     * 异步等待弹窗关闭（只等待遍历到的第一个）
     * @param url prefab路径，规则同Res加载路径
     */
    public async waitCloseLayer(uiId: number): Promise<void> {
        let viewPa = this.getViewParam(uiId);
        if (!viewPa) {
            return;
        }
        return await new Promise((resolve, reject) => {
            if (viewPa.callbacks.onUIRemoved) {
                let oriRemoveCb = viewPa.callbacks.onUIRemoved;
                viewPa.callbacks.onUIRemoved = (...args: any[]) => {
                    oriRemoveCb(...args);
                    resolve();
                }
            } else {
                viewPa.callbacks.onUIRemoved = resolve;
            }
        });
    }

    /**
     * 清除所有窗口
     * @param isDestroy 移除后是否释放
     * @param excludeId 排除预制体
     * @example
     * c2f.gui.clear();
     */
    public clear(isDestroy: boolean = false, excludeId: number[] = []) {
        let excludePrefab: string[] = [];
        if (excludeId && excludeId.length > 0) {
            for (let one of excludeId) {
                const config: UIConfig = this.uiCfgs[one];
                excludePrefab.push(config.prefab)
            }
        }
        this.ui.clearUI(isDestroy, excludePrefab);
        this.popup.clearUI(isDestroy, excludePrefab);
        this.dialog.clearUI(isDestroy, excludePrefab);
        this.system.clearUI(isDestroy, excludePrefab);
        this.notify.clearUI(isDestroy, excludePrefab);
        this.guide.clearUI(isDestroy, excludePrefab);
    }

    /** 获得最上层窗口 */
    public getTopsideView() {
        let topside: cc.Node = null;
        let arrPanel: LayerUI[] = [this.system, this.dialog, this.ui];
        for (let one of arrPanel) {
            let top = one.getTopsideView();
            if (top) {
                topside = top;
                break;
            }
        }
        return topside;
    }

    public hideAnimaPlayingView() {
        this.ui.hideAnimaPlayingView();
    }

    public showAnimaPlayingView() {
        this.ui.showAnimaPlayingView();
    }

    public lockScreen(duration: number = 0) {
        let scene = cc.director.getScene();
        let lockScreen = scene.getChildByName("lockScreen");
        if (!lockScreen) {
            lockScreen = new cc.Node();
            let comp = lockScreen.addComponent(cc.BlockInputEvents);
            lockScreen.parent = scene;
            lockScreen.zIndex = 10000;
            lockScreen.width = cc.winSize.width;
            lockScreen.height = cc.winSize.height;
            lockScreen.x = cc.winSize.width * 0.5;
            lockScreen.y = cc.winSize.height * 0.5;
            lockScreen.name = "lockScreen";

            if (duration) {
                comp.scheduleOnce(() => {
                    this.unlockScreen();
                }, duration);
            }
        }
    }

    public unlockScreen() {
        let scene = cc.director.getScene();
        let lockScreen = scene.getChildByName("lockScreen");
        if (lockScreen) {
            lockScreen.getComponent(cc.BlockInputEvents).unscheduleAllCallbacks();
            lockScreen.destroy();
            lockScreen = undefined;
        }
    }

    public autoSize() {
        this.root.getComponent(GUI).autoSize();
    }

    public fixedWidth() {
        this.root.getComponent(GUI).fixedWidth();
    }

    /** 静态成员 */
    private static _instance: LayerManager = null
    public static getInstance(): LayerManager {
        if (!this._instance) {
            this._instance = new LayerManager();
        }
        return this._instance;
    }
}

declare global {
    interface IC2F {
        gui: LayerManager;
    }
}

c2f.gui = LayerManager.getInstance();
export { };