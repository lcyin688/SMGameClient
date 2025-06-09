declare global {
    interface IUI {
        WENodeSizeShrink: typeof WENodeSizeShrink;
    }
    namespace c2f {
        namespace ui {
            type WENodeSizeShrink = InstanceType<typeof WENodeSizeShrink>;
        }
    }
}

const { ccclass, property, executeInEditMode, menu, disallowMultiple } = cc._decorator;

@ccclass
@menu('c2f/adapt/WENodeSizeShrink(限制Node最大宽高)')
@disallowMultiple
@executeInEditMode()
export default class WENodeSizeShrink extends cc.Component {
    @property({ tooltip: CC_DEV && '是否监听宽度变化' })
    isWidth = true;

    @property
    _width: number = 0;
    @property({
        tooltip: CC_DEV && '宽度',
        visible() {
            return this.isWidth;
        },
    })
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
        this.handleSizeChanged();
    }

    @property({ tooltip: CC_DEV && '是否监听高度变化' })
    isHeight = false;

    @property
    _height: number = 0;
    @property({
        tooltip: CC_DEV && '高度',
        visible() {
            return this.isHeight;
        },
    })
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
        this.handleSizeChanged();
    }

    protected onLoad() {
        if (this.isWidth && this.width <= 0) {
            this.width = this.node.width;
        }
        this.node.on('size-changed', this.handleSizeChanged, this);
        this.handleSizeChanged();
    }

    handleSizeChanged() {
        // 处理宽度
        let scale = 1;
        if (this.isWidth && this.width > 0 && this.node.width > this.width) {
            scale = this.width / this.node.width;
        }

        // 处理高度
        if (this.isHeight && this.height > 0) {
            const nHeight = this.node.height * scale;
            if (nHeight > this.height) {
                scale = this.height / this.node.height;
            }
        }
        this.node.setScale(Number(scale.toFixed(2)), Number(scale.toFixed(2)), 1);
    }

    protected onDestroy(): void {
        this.node.off('size-changed', this.handleSizeChanged, this);
    }
}

c2f.ui.WENodeSizeShrink = WENodeSizeShrink;
