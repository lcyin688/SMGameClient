const { ccclass, property, menu, requireComponent } = cc._decorator;

/**
 * 适配刘海
 * node上必须挂载cc.Widget
 * 偏移量, 默认0:按照 默认刘海高度 60 偏移, !=0:按照 margin + offset 偏移
 */
@ccclass
@requireComponent(cc.Widget)
@menu('c2f/adapt/WEAdaptNotch(刘海屏适配))')
export default class WEAdaptNotch extends cc.Component {
    @property({ type: cc.Integer, tooltip: CC_DEV && '偏移量, 默认0: 按照 默认刘海高度 60 偏移; !=0: 按照 margin + offset 偏移', range: [-200, 200] })
    offset: number = 0;

    // 默认偏移值
    defaultOffset: number = 60;

    protected onLoad() {
        cc.view.on('canvas-resize', this.onAdapt, this);
        cc.director.on(c2f.core.EventName.SCREEN_ORIENTATION_CHANGED, this.onAdapt, this);
    }

    protected onDestroy(): void {
        cc.view.off('canvas-resize', this.onAdapt, this);
        cc.director.off(c2f.core.EventName.SCREEN_ORIENTATION_CHANGED, this.onAdapt, this);
    }

    protected start(): void {
        this.onAdapt();
    }

    onAdapt() {
        const widget = this.node.getComponent(cc.Widget) || this.node.addComponent(cc.Widget);

        if (!widget) {
            c2f.log.warn(`WEAdaptNotch, widget not exist`);
            return;
        }

        if (widget['top_original'] == undefined) {
            widget['top_original'] = widget.top;
        }
        if (widget['bottom_original'] == undefined) {
            widget['bottom_original'] = widget.bottom;
        }
        if (widget['left_original'] == undefined) {
            widget['left_original'] = widget.left;
        }
        if (widget['right_original'] == undefined) {
            widget['right_original'] = widget.right;
        }

        let orientation = c2f.core.projectConfig.orientation;
        let target = widget.target || widget.node.parent;

        if (widget.isAlignTop) {
            let margin: number = widget['top_original'];
            if (orientation == c2f.core.ScreenOrientation.PORTRAIT) {
                margin = this.getMargin(margin, widget.isAbsoluteTop, target.height);
            }
            widget.top = margin;
        }

        if (widget.isAlignBottom) {
            let margin: number = widget['bottom_original'];
            if (orientation == c2f.core.ScreenOrientation.PORTRAIT_UPSIDE_DOWN) {
                margin = this.getMargin(margin, widget.isAbsoluteBottom, target.height);
            }
            widget.bottom = margin;
        }

        if (widget.isAlignLeft) {
            let margin: number = widget['left_original'];
            if (orientation == c2f.core.ScreenOrientation.LANDSCAPE_RIGHT) {
                margin = this.getMargin(margin, widget.isAbsoluteLeft, target.width);
            }
            widget.left = margin;
        }

        if (widget.isAlignRight) {
            let margin: number = widget['right_original'];
            if (orientation == c2f.core.ScreenOrientation.LANDSCAPE_LEFT) {
                margin = this.getMargin(margin, widget.isAbsoluteRight, target.width);
            }
            widget.right = margin;
        }

        widget.updateAlignment();
    }

    private getMargin(margin: number, abs: boolean, parent: number) {
        if (!c2f.core.projectConfig.isNotch) {
            return margin;
        }

        // 默认刘海高度 60
        let notchHeight = c2f.core.projectConfig.isNotch ? 60 : 0;

        if (abs) {
            if (this.offset == 0) {
                margin = margin < notchHeight ? notchHeight : margin;
            } else {
                margin = margin + this.offset;
            }
        } else {
            if (this.offset == 0) {
                margin = margin < notchHeight / parent ? notchHeight / parent : margin;
            } else {
                margin = margin + this.offset / parent;
            }
        }
        return margin;
    }
}
