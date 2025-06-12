const { ccclass, property, menu, requireComponent } = cc._decorator;
@ccclass
@requireComponent(cc.Widget)
@menu('c2f/UI/ToggleGroupWrapper')
export default class ToggleGroupWrapper extends cc.Component {
    private toggleContainer: cc.ToggleContainer = null!;

    private _callbacks: ((index: number, isChecked: boolean) => void)[] = [];

    onLoad() {
        this._initToggleEvents();
    }

    private _initToggleEvents() {
        this.init();
        this.toggleContainer.toggleItems.forEach((toggle, index) => {
            toggle.node.on(
                'toggle',
                (event: Event) => {
                    this._onToggleChanged(index, toggle.isChecked);
                },
                this
            );
        });
    }

    private init() {
        if (!this.toggleContainer) {
            this.toggleContainer = this.getComponent(cc.ToggleContainer);
        }
    }

    private _onToggleChanged(index: number, isChecked: boolean) {
        this._callbacks.forEach((cb) => cb(index, isChecked));
    }

    /**
     * 添加状态变化监听
     * @param callback 回调函数(index: number, isChecked: boolean)
     */
    addToggleListener(callback: (index: number, isChecked: boolean) => void) {
        this.init();
        this._callbacks.push(callback);
        //第一次 注册后的回掉当前选中的 tog
        this.toggleContainer.toggleItems.forEach((toggle, index) => {
            if (toggle.isChecked) {
                callback(index, true);
            }
        });
    }

    /**
     * 移除指定监听
     */
    removeToggleListener(callback: Function) {
        this._callbacks = this._callbacks.filter((cb) => cb !== callback);
    }

    /**
     * 获取当前选中索引
     */
    get selectedIndex(): number {
        return this.toggleContainer.toggleItems.findIndex((t) => t.isChecked);
    }

    /**
     * 设置选中状态（不触发事件）
     */
    setSelectedSilently(index: number) {
        this.toggleContainer.toggleItems.forEach((t, i) => {
            t.isChecked = i === index;
            t.interactable = i !== index; // 可选：禁用已选项
        });
    }
}
