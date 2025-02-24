//屏幕适配

const { ccclass, property, menu } = cc._decorator;
@ccclass
@menu("c2f/common/C2FSafeArea")
export default class C2FSafeArea extends cc.Component {

    @property()
    topEnable: boolean = false;

    @property()
    bottomEnable: boolean = false;

    protected onLoad(): void {
        this.updateArea();
    }

    private updateArea() {
        let dH = cc.view.getDesignResolutionSize().height;
        let rH = cc.winSize.height;
        let rW = cc.winSize.width;
        let nH = this.node.height;

        let safeRect = c2f.utils.platform.getSafeAreaR();
        let notchHeight = (rH - safeRect.height) * 0.5;
        // cc.log("notchHeight == ", notchHeight);

        if (cc.sys.os === cc.sys.OS_IOS) {
            notchHeight = notchHeight / 2;
        } else {
            notchHeight = notchHeight > 43 && 43 || notchHeight;
        }
        let widget = this.node.getComponent(cc.Widget);
        if (widget) {
            const keyOriT = 'oriTop';
            const keyOriB = 'oriBot';
            if (this.topEnable && widget.isAlignTop) {
                if (!widget[keyOriT]) {
                    widget[keyOriT] = widget.top;
                }
                widget.top = widget[keyOriT] + 2 * notchHeight;
            }
            if (this.bottomEnable && widget.isAlignBottom) {
                if (!widget[keyOriB]) {
                    widget[keyOriB] = widget.bottom;
                }
                widget.bottom = widget[keyOriB] + safeRect.y || 10;
            }
            widget.updateAlignment();
        } else {
            let paddingTop = dH * 0.5 - this.node.y;
            this.node.y = safeRect.height * 0.5 - paddingTop - notchHeight;
        }
    }

    public setTopEnable(enable: boolean) {
        this.topEnable = enable;
        this.updateArea();
    }

}
