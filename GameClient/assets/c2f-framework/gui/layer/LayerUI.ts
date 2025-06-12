/*
 * UI基础层，允许添加多个预制件节点
 * add          : 添加一个预制件节点到层容器中，该方法将返回一个唯一uuid来标识该操作Node节点。
 * delete       : 根据uuid删除Node节点，如果节点还在队列中也会被删除, 删除节点可以用gui.delete(node)或this.node.destroy()
 * deleteByUuid : 根据预制件路径删除，预制件如在队列中也会被删除，如果该预制件存在多个也会一起删除。
 * get          : 根据uuid获取Node节点，如果节点不存在或者预制件还在队列中，则返回null 。
 * getByUuid    : 根据预制件路径获取当前显示的该预制件的所有Node节点数组。
 * has          : 判断当前层是否包含 uuid或预制件路径对应的Node节点。
 * find         : 判断当前层是否包含 uuid或预制件路径对应的Node节点。
 * size         : 当前层上显示的所有Node节点数。
 * clear        : 清除所有Node节点，队列当中未创建的任务也会被清除。
 */
import BlurScreen from '../../component/common/BlurScreen';
import { C2FConst } from '../../define/C2FConst';
import { LayerType, UICallbacks, UIConfig, ViewParams } from '../../define/C2FUIDef';
import { DelegateComponent } from './DelegateComponent';
import { UIModelBase } from './UIModelBase';
import { UIViewBase } from './UIViewBase';

/** 界面层对象 */
export class LayerUI extends cc.Node {
    /** 界面节点集合 */
    protected ui_nodes = new Map<string, ViewParams>();
    /** 被移除的界面缓存数据 */
    protected ui_cache = new Map<string, ViewParams>();
    /** 顶部信息 */
    private topPanel: cc.Node;
    /** 模糊背景 */
    private blurScn: BlurScreen;
    /** 被隐藏的正在出入场的view */
    private arrPlayingView: cc.Node[];
    /** 正在添加的界面 */
    private addingView: string[];

    /**
     * UI基础层，允许添加多个预制件节点
     * @param name 该层名
     * @param container 容器Node
     */
    constructor(name: string) {
        super(name);

        let widget: cc.Widget = this.addComponent(cc.Widget);
        widget.isAlignLeft = widget.isAlignRight = widget.isAlignTop = widget.isAlignBottom = true;
        widget.left = widget.right = widget.top = widget.bottom = 0;
        widget.alignMode = cc.Widget.AlignMode.ON_WINDOW_RESIZE;
        widget.enabled = true;

        this.arrPlayingView = [];
        this.addingView = [];

        this.createBlur();
    }

    private createBlur() {
        if (this.name != LayerType.UI) {
            return;
        }
        //模糊背景节点
        let blurNode = new cc.Node('blurScreen');
        this.addChild(blurNode);
        this.blurScn = blurNode.addComponent(BlurScreen);
        this.blurScn.initUI();
    }

    /** 构造一个唯一标识UUID */
    protected getUuid(prefabPath: string): string {
        let uuid = `${this.name}_${prefabPath}`;
        return uuid.replace(/\//g, '_');
    }

    /** 获得窗口参数 */
    public getViewParam(config: UIConfig) {
        let prefabPath = config.prefab;
        let uuid = this.getUuid(prefabPath);
        let viewParams = this.ui_nodes.get(uuid);
        return viewParams;
    }

    /** 设置头部节点 */
    public setTopPanel<T extends cc.Node>(panel: T) {
        this.topPanel = panel;
        this.topPanel.parent = this;
    }

    /**
     * 添加一个预制件节点到层容器中，该方法将返回一个唯一`uuid`来标识该操作节点
     * @param prefabPath 预制件路径
     * @param params     自定义参数
     * @param callbacks  回调函数对象，可选
     */
    public add(config: UIConfig, params?: any, callbacks?: UICallbacks): string {
        console.log('open layer:', config.prefab);
        let prefabPath = config.prefab;
        let uuid = this.getUuid(prefabPath);
        let viewParams = this.ui_nodes.get(uuid);
        if (viewParams && viewParams.valid) {
            cc.warn(`路径为【${prefabPath}】的预制重复加载`);
            if (viewParams.node && viewParams.node.isValid) {
                this.removeAboveUI(prefabPath);
                let clsName = this.getMVCClsName(prefabPath);
                let comp = viewParams.node.getComponent(clsName);
                if (comp && comp['onViewRefresh']) {
                    comp['onViewRefresh'](params);
                }
            }
            return '';
        }
        if (viewParams == null) {
            viewParams = new ViewParams();
            viewParams.uuid = uuid;
            viewParams.uiCfg = config;
            viewParams.prefabPath = prefabPath;

            viewParams.bundle = config.bundle;
            this.ui_nodes.set(viewParams.uuid, viewParams);
        }
        viewParams.params = params || {};
        viewParams.callbacks = callbacks || {};
        viewParams.valid = true;

        this.load(viewParams, config.bundle);

        return uuid;
    }

    /**
     * 加载界面资源
     * @param viewParams 显示参数
     * @param bundle     远程资源包名，如果为空就是默认本地资源包
     */
    protected load(viewPa: ViewParams, bundle?: string) {
        let vp: ViewParams = this.ui_nodes.get(viewPa.uuid)!;
        if (vp && vp.node) {
            this.createNode(vp);
        } else {
            //由于异步，加载完成后在此列表中的界面才加进游戏
            this.addingView.push(viewPa.prefabPath);

            // 获取预制件资源
            bundle = bundle || 'resources';
            c2f.res.load(bundle, viewPa.prefabPath, this.afterLoadPrefab.bind(this, viewPa));
        }
    }

    private afterLoadPrefab(viewPa: ViewParams, err: Error | null, res: cc.Prefab) {
        if (err) {
            cc.error(err);
        }
        if (this.addingView.indexOf(viewPa.prefabPath) >= 0) {
            let childNode: cc.Node = c2f.res.instantiate(res);
            viewPa.node = childNode;
            let comp: DelegateComponent = c2f.utils.node.addComponent(childNode, DelegateComponent) as any;
            comp.viewParams = viewPa;
            //
            this.addMVCComponet(childNode, viewPa.prefabPath);

            this.createNode(viewPa);
            //
            c2f.utils.arr.fastRemove(this.addingView, viewPa.prefabPath);
        } else {
            cc.warn(`failed add view [${viewPa.prefabPath}], don't find in addingView! addingView:`, this.addingView);
        }
    }

    private getMVCClsName(prefabPath: string) {
        let clsName = prefabPath;
        let idx = prefabPath.lastIndexOf('/');
        if (idx >= 0) {
            clsName = prefabPath.substring(idx + 1);
        }
        if (clsName.startsWith('P_') || clsName.startsWith('V_') || clsName.startsWith('F_')) {
            clsName = clsName.substring(2);
        }
        return clsName;
    }

    /** 为view添加mvc组件 */
    protected addMVCComponet(node: cc.Node, prefabPath: string) {
        let clsName = this.getMVCClsName(prefabPath);
        let model = c2f.utils.node.addComponent(node, `${clsName}Model`);
        let view = c2f.utils.node.addComponent(node, `${clsName}View`) as UIViewBase;
        let controller = c2f.utils.node.addComponent(node, clsName) as any;
        controller.model = model as UIModelBase;
        controller.view = view;
    }

    /**
     * 创建界面节点
     * @param viewParams  视图参数
     */
    protected createNode(viewPa: ViewParams) {
        viewPa.valid = true;

        let children = this.__nodes();
        let zFloor = 0;
        const len = children.length;
        if (len > 0) {
            zFloor = Math.floor((children[len - 1].node.zIndex || 0) / 10);
        }
        viewPa.node.zIndex = (zFloor + 1) * 10;
        viewPa.node.parent = this;

        let comp: DelegateComponent = viewPa.node.getComponent(DelegateComponent)!;
        comp.add();

        //弹出界面可见性刷新
        this.refreshLayerUIVisible();
        //按配置播放背景音乐
        let mvcClsName = this.getMVCClsName(viewPa.prefabPath);
        if (C2FConst.UIBgmNames.hasOwnProperty(mvcClsName)) {
            let url = C2FConst.UIMusicPath + C2FConst.UIBgmNames[mvcClsName];
            c2f.audio.playBgmURL(url);
        }
        //弹窗音效
        if (viewPa.uiCfg && viewPa.uiCfg.layer != LayerType.UI) {
            if (C2FConst.UIViewEftName.hasOwnProperty(mvcClsName)) {
                let file = C2FConst.UIViewEftName[mvcClsName];
                if (file.length > 0) {
                    let url = C2FConst.UIAudioPath + C2FConst.UIViewEftName[mvcClsName];
                    c2f.audio.playSfxURL(url);
                }
            } else {
            }
        }
        return viewPa.node;
    }

    /** 刷新子节点可见性：
     * 1、最顶层全屏界面显示，其后面的隐藏
     * 2、topPanel的层级紧贴其附属层级
     */
    private refreshLayerUIVisible() {
        if (this.name != LayerType.UI) {
            return;
        }

        let children = this.__nodes();
        let lastIdx = children.length - 1;

        let findFull = false;
        let topOwned = null;
        for (let i = lastIdx; i >= 0; --i) {
            const one = children[i];
            if (!one.isValid) {
                continue;
            }
            one.node.active = !findFull;
            const viewPa = one.viewParams;
            //topPanel归属处理
            if (this.topPanel && !topOwned && viewPa.uiCfg.showTop) {
                topOwned = one;
                this.topPanel.zIndex = one.node.zIndex + 1;
                this.topPanel.active = one.node.active;
            }
            //当前为最上层显示界面时，当前为全屏界面则后面全部隐藏，当前为非全屏时，创建模糊背景后全部隐藏。
            if (one.node.active) {
                let useBlur = false;
                if (viewPa.uiCfg) {
                    useBlur = viewPa.uiCfg.useBlurScn;
                }
                if (useBlur) {
                    let isPopLayer = !viewPa.uiCfg || viewPa.uiCfg.layer != LayerType.UI;
                    if (this.blurScn) {
                        this.blurScn.node.active = isPopLayer;
                        if (isPopLayer) {
                            let preFloorW = '';
                            if (i > 1) {
                                preFloorW = children[i - 1].node.name;
                            }
                            this.blurScn.addBlurBg(one.node.name, () => {}, preFloorW);
                            this.blurScn.node.zIndex = one.node.zIndex - 1;
                        }
                    }
                    findFull = true;
                } else {
                    findFull = viewPa.uiCfg && viewPa.uiCfg.layer == LayerType.UI;
                }
            }
        }
    }

    /**
     * 根据预制件路径删除，预制件如在队列中也会被删除，如果该预制件存在多个也会一起删除
     * @param prefabPath   预制路径
     * @param isDestroy    移除后是否释放
     */
    public remove(prefabPath: string, isDestroy: boolean): void {
        // 验证是否删除后台缓存界面
        if (isDestroy) this.removeCache(prefabPath);

        let targetName = '';
        // 界面移出舞台
        let children = this.__nodes();
        for (let i = 0; i < children.length; i++) {
            let dstComp = children[i];
            let viewPa = dstComp.viewParams;
            if (viewPa.prefabPath === prefabPath) {
                if (isDestroy) {
                    // 直接释放界面
                    this.ui_nodes.delete(viewPa.uuid);
                } else {
                    // 不释放界面，缓存起来待下次使用
                    this.ui_cache.set(viewPa.prefabPath, viewPa);
                }

                dstComp.remove(isDestroy);
                targetName = dstComp.node.name;
                viewPa.valid = false;
            }
        }
        this.refreshLayerUIVisible();
        if (this.blurScn) {
            this.blurScn.removedBlurBg(targetName);
        }
        //按配置结束背景音乐
        let mvcClsName = this.getMVCClsName(prefabPath);
        if (C2FConst.UIBgmNames.hasOwnProperty(mvcClsName)) {
            c2f.audio.endCurMusic();
        }
    }

    /** 移除目标界面之上的所有界面 */
    public removeAboveUI(prefabPath: string) {
        while (true) {
            let children = this.__nodes();
            let lastIdx = children.length - 1;
            const lastItem = children[lastIdx];
            const lastViewPa = lastItem.viewParams;
            if (lastViewPa.prefabPath == prefabPath) {
                break;
            }
            this.remove(lastViewPa.prefabPath, true);
        }
    }

    /**
     * 根据唯一标识删除节点，如果节点还在队列中也会被删除
     * @param uuid  唯一标识
     */
    protected removeByUuid(uuid: string, isDestroy: boolean): void {
        let viewPa = this.ui_nodes.get(uuid);
        if (viewPa) {
            if (isDestroy) this.ui_nodes.delete(viewPa.uuid);

            let childNode = viewPa.node;
            if (childNode && childNode.isValid) {
                let comp = childNode.getComponent(DelegateComponent)!;
                comp.remove(isDestroy);
            }
            this.refreshLayerUIVisible();
        }
    }

    /**
     * 删除缓存的界面，当缓存界面被移除舞台时，可通过此方法删除缓存界面
     */
    private removeCache(prefabPath: string) {
        let viewPa = this.ui_cache.get(prefabPath);
        if (viewPa) {
            if (viewPa.node && viewPa.node.isValid) {
                let childNode = viewPa.node;
                let comp = childNode.getComponent(DelegateComponent)!;
                comp.remove(true);
            } else {
                cc.warn('removeCache: dst node is invalid!');
            }

            this.ui_nodes.delete(viewPa.uuid);
            this.ui_cache.delete(prefabPath);
        }
    }

    /**
     * 根据唯一标识获取节点，如果节点不存在或者还在队列中，则返回null
     * @param uuid  唯一标识
     */
    public getByUuid(uuid: string): cc.Node {
        let children = this.__nodes();
        for (let comp of children) {
            if (comp.viewParams && comp.viewParams.uuid === uuid) {
                return comp.node;
            }
        }
        return null!;
    }

    /**
     * 根据预制件路径获取当前显示的该预制件的所有Node节点数组
     * @param prefabPath
     */
    public get(prefabPath: string): Array<cc.Node> {
        let arr: Array<cc.Node> = [];
        let children = this.__nodes();
        for (let comp of children) {
            if (comp.viewParams.prefabPath === prefabPath) {
                arr.push(comp.node);
            }
        }
        return arr;
    }

    /**
     * 判断当前层是否包含 uuid或预制件路径对应的Node节点
     * @param prefabPathOrUUID 预制件路径或者UUID
     */
    public has(prefabPathOrUUID: string): boolean {
        let children = this.__nodes();
        for (let comp of children) {
            if (comp.viewParams.uuid === prefabPathOrUUID || comp.viewParams.prefabPath === prefabPathOrUUID) {
                return true;
            }
        }
        return false;
    }

    /**
     * 获取当前层包含指定正则匹配的Node节点。
     * @param prefabPathReg 匹配预制件路径的正则表达式对象
     */
    public find(prefabPathReg: RegExp): cc.Node[] {
        let arr: cc.Node[] = [];
        let children = this.__nodes();
        for (let comp of children) {
            if (prefabPathReg.test(comp.viewParams.prefabPath)) {
                arr.push(comp.node);
            }
        }
        return arr;
    }

    /** 获取当前层所有窗口事件触发组件 */
    protected __nodes(): Array<DelegateComponent> {
        let result: Array<DelegateComponent> = [];
        let children = this.children;
        for (let i = 0; i < children.length; i++) {
            let comp = children[i].getComponent(DelegateComponent);
            if (comp && comp.viewParams && comp.viewParams.valid && cc.isValid(comp)) {
                result.push(comp);
            }
        }
        return result;
    }

    /** 层节点数量 */
    public size(): number {
        return this.children.length;
    }

    /**
     * 清除所有节点，队列当中的也删除
     * @param isDestroy  移除后是否释放
     */
    public clearUI(isDestroy: boolean, excludePrefab: string[] = []): void {
        // 清除所有显示的界面
        this.ui_nodes.forEach((value: ViewParams, key: string) => {
            let needDel = true;
            if (excludePrefab.length > 0) {
                needDel = excludePrefab.indexOf(value.prefabPath) < 0;
            }
            if (needDel) {
                this.removeByUuid(value.uuid, isDestroy);
                value.valid = false;
                this.ui_nodes.delete(key);
            }
        });

        // 清除缓存中的界面
        if (isDestroy) {
            this.ui_cache.forEach((value: ViewParams, prefabPath: string) => {
                this.removeCache(prefabPath);
            });
        }
        //
        if (this.blurScn) {
            this.blurScn.cleanBlurBg();
        }
        //清空adding
        this.addingView = [];
    }

    /** 获得节点View参数 */
    public getPrefabUrlByNode(node: cc.Node) {
        let prefabUrl: string = null;
        this.ui_nodes.forEach((value: ViewParams, key: string) => {
            if (value.node == node) {
                prefabUrl = value.prefabPath;
            }
        });
        return prefabUrl;
    }

    public getTopsideView() {
        let topside: cc.Node = null;
        let children = this.__nodes();
        let lastIdx = children.length - 1;
        for (let i = lastIdx; i >= 0; --i) {
            const one = children[i];
            if (!one.isValid) {
                continue;
            }
            const viewPa = one.viewParams;
            if (!viewPa.valid) {
                continue;
            }
            topside = one.node;
            break;
        }
        return topside;
    }

    /** 隐藏正在播放出入场动画的view */
    public hideAnimaPlayingView() {
        let children = this.__nodes();
        for (let i = 0; i < children.length; i++) {
            let dstComp = children[i];
            if (!dstComp.node.active) {
                continue;
            }
            let viewPa = dstComp.viewParams;
            if (!viewPa.valid) {
                continue;
            }
            let prefComp = dstComp.node.getComponent(UIViewBase);
            if (prefComp && prefComp.animaPlaying) {
                dstComp.node.active = false;
                this.arrPlayingView.push(dstComp.node);
            }
        }
    }

    /** 显示正在播放出入场动画的view */
    public showAnimaPlayingView() {
        for (let one of this.arrPlayingView) {
            one.active = true;
        }
        this.arrPlayingView = [];
    }
}
