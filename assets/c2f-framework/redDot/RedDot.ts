import { EventDispatcher } from "../core/event/EventDispatcher";

enum RedDotShowType {
    Normal = 1, // 普通红点
    Number = 2, // 数值
    Mark = 3,   // 感叹号
    Once = 4,   // 一次性红点
}

const RedDotEvent = {
    EVENT_NEED_UPDATE: "EVENT_NEED_UPDATE",
    EVENT_UPDATE_DISPLAY: "EVENT_UPDATE_DISPLAY",
    EVENT_CHANGE_SHOW_TYPE: "EVENT_CHANGE_SHOW_TYPE",
    EVENT_ADD_DISPLAY: "EVENT_ADD_DISPLAY",
    EVENT_REMOVE_DISPLAY: "EVENT_REMOVE_DISPLAY",
}

class DotKey<Options = any> {
    public id: number;
    public opt: Options;
    constructor(id: number, opt: any) {
        this.id = id;
        this.opt = opt;
    }
    public toString() {
        let value = this.id.toString();
        if (this.opt) {
            value = value + JSON.stringify(this.opt);
        }
        return value;
    }
    public getOptStr() {
        if (!this.opt) {
            return 'null';
        } else {
            return JSON.stringify(this.opt);
        }
    }

}

class RedDot<Options = any> extends EventDispatcher {

    public static readonly Event = RedDotEvent;
    public static readonly ShowType = RedDotShowType;

    /** 红点配置信息 */
    private _cfg: RedDotDef;
    public get cfg(): RedDotDef {
        return this._cfg;
    }
    public set cfg(value: RedDotDef) {
        if (!value) {
            return;
        }
        this._cfg = value;
        this.showType = value.showType;
    }

    /** 红点Id */
    public get id(): number {
        return this.cfg.id;
    }
    /** 名称 */
    public get name(): string {
        return this.cfg.name;
    }
    /** 位置 */
    public get offset(): cc.Vec2 {
        return cc.v2(this.cfg.offsetX, this.cfg.offsetY);
    }

    /** 参数 */
    public get options() {
        return this.key.opt;
    }

    /** 展示类型 */
    private _showType: RedDotShowType = RedDotShowType.Normal;
    public get showType(): RedDotShowType {
        return this._showType;
    }
    public set showType(value: RedDotShowType) {
        if (this._showType != value) {
            this._showType = value;
            this.updateDisplayShowType(value);
        }
    }

    /** 是否启用 */
    private _enabled = true;
    public get enabled() {
        return this._enabled;
    }
    public set enabled(value) {
        if (this._enabled === value) {
            return;
        }
        this._enabled = value;
        this._updateDisplayNodeStatus();
    }

    /** 父节点 */
    private _parent: RedDot = null;
    public get parent(): RedDot {
        return this._parent;
    }

    /** 子节点 */
    public children: RedDot[] = [];

    /** 计数 */
    private _count: number = 0;
    public get count(): number {
        return this._count;
    }

    /** 刷新标志 */
    private _isDirty = false;
    public get isDirty() {
        return this._isDirty;
    }
    public set isDirty(value) {
        if (this._isDirty != value) {
            this._isDirty = value;
            if (value && this._parent) {
                this._parent.isDirty = true;
            }
        }
    }

    /** key */
    private _key: DotKey;
    public get key(): DotKey {
        return this._key;
    }
    public set key(v: DotKey) {
        this._key = v;
    }

    /** 关联节点 */
    protected arrDisplayProxy: c2f.RedDotComp[] = [];
    /** 本地刷新·有些红点仅仅是界面内临时数据引发的，并不在data中,这里提供一个直接回调 */
    private _tmpUpdateHandler: Function;
    public get tmpUpdateHandler(): Function {
        return this._tmpUpdateHandler;
    }
    public set tmpUpdateHandler(v: Function) {
        this._tmpUpdateHandler = v;
    }

    constructor(info: RedDotDef, options: any) {
        super();
        this.key = new DotKey(info.id, options);
        this.setGroupName(this.key.toString());
        this.cfg = info;
    }

    /** 主动刷新红点 */
    public toRefresh() {
        this.emit(RedDotEvent.EVENT_NEED_UPDATE, this.key);
    }

    /** 添加子节点 */
    public addChild(child: RedDot) {
        if (!child) {
            console.error(`RedDot-> addChild child is null`);
            return;
        }
        child._parent = this;
        this.children.push(child);
    }

    /** 移除子节点 */
    public removeChild(child: RedDot) {
        c2f.utils.arr.fastRemove(this.children, child);
        child._parent = null;
    }

    /**
     * 设置红点值
     * @param {number} count
     */
    public setCount(count: number) {
        if (this.isLeaf()) {
            this._updateCount(count);
            // 更新完数据之后 关闭标识
            this.isDirty = false;
        } else {
            console.warn(`RedDot-> 当前红点[${this.id}]不是叶子节点，无法直接设置 红点计数`);
        }
    }

    /** 更新计数 */
    private _updateCount(count: number) {
        if (this._count != count) {
            this._count = count;
            this.isDirty = true;
            this._updateDisplayNodeStatus();
        }
    }

    /** 刷新父节点 */
    public toRefreshParent() {
        this.refreshParent();
    }

    private refreshParent() {
        this.parent?.refreshSelf();
        this.parent?.refreshParent();
    }

    /** 刷新自身 */
    private refreshSelf() {
        if (!this.isDirty) {
            return;
        }
        let count = 0;
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (child.isDirty) {
                child.refreshSelf();
            }
            count += child.count;
        }
        this._updateCount(count);
        // 更新完之后关闭标识
        this.isDirty = false;
    }

    /** 刷新节点状态 */
    private _updateDisplayNodeStatus() {
        for (let i = 0; i < this.arrDisplayProxy.length;) {
            const one = this.arrDisplayProxy[i];
            if (one && one.isValid && one.node) {
                one.updateCount(this.count);
                one.setDisplay(this.enabled && this.count > 0);
                ++i;
            } else {
                this.arrDisplayProxy.splice(i, 1);
            }
        }
    }

    /** 刷新 */
    public refresh() {
        if (this.isLeaf()) {
            this.refreshParent();
        } else {
            this.refreshSelf();
        }
    }

    /** 是否为叶子节点 */
    public isLeaf() {
        return this.children.length === 0;
    }

    public getDisplayCnt() {
        return this.arrDisplayProxy.length;
    }

    /** 刷新dot显示类型 */
    private updateDisplayShowType(type: RedDotShowType) {
        for (let one of this.arrDisplayProxy) {
            one.setShowType(type);
        }
    }

    /** 设置显示节点:未应用 */
    public setDisplayProxy(container: cc.Node) {
        if (!container || !container.isValid) {
            console.error(`RedDot-> 红点节点错误`);
            return;
        }
        this.emit(RedDotEvent.EVENT_ADD_DISPLAY, this.key, container);
    }

    public hasDisplay(dotComp: c2f.RedDotComp) {
        let find = this.arrDisplayProxy.indexOf(dotComp);
        return find >= 0;
    }

    public addDisplay(dotComp: c2f.RedDotComp) {
        this.arrDisplayProxy.push(dotComp);
    }

    /** 移除所有显示节点 */
    public removeAllDisplay() {
        for (let one of this.arrDisplayProxy) {
            this.removeDisplay(one);
        }
    }

    /** 移除小红点组件及Display数据 */
    private removeDisplay(dotComp: c2f.RedDotComp) {
        if (dotComp && dotComp.isValid) {
            dotComp.node.removeFromParent();
            dotComp.node.destroy();
            dotComp.destroy();
            this.deleteDisplayDataOnly(dotComp);
        }
    }

    /** 移除映射数据：红点组件onDestroy时同步清除其RedDot和Display数据 */
    public deleteDisplayDataOnly(dotComp: c2f.RedDotComp) {
        c2f.utils.arr.fastRemove(this.arrDisplayProxy, dotComp);
        this.emit(RedDotEvent.EVENT_REMOVE_DISPLAY, this.key);
    }


























    public destroy() {
        this.clear();
    }

    public clear(): void {
        super.destroy();
        this.children.forEach((child) => {
            child.destroy();
        });

        this.parent?.removeChild(this);
        this.children.length = 0;
        this._parent = null;

        this.removeAllDisplay();
    }
}

declare global {
    interface IC2F {
        RedDot: typeof RedDot;
        DotKey: typeof DotKey;
    }
    namespace c2f {
        type RedDot<Options = any> = InstanceType<typeof RedDot<Options>>;
        type DotKey<Options = any> = InstanceType<typeof DotKey<Options>>;
        namespace RedDot {
            type ShowType = RedDotShowType;
        }
    }
}
c2f.RedDot = RedDot;
c2f.DotKey = DotKey;

export { };