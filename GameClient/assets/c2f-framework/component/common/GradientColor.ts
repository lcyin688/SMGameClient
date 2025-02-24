
const { ccclass, property, menu, requireComponent, executeInEditMode } = cc._decorator;

/** 渐变方向 */
enum GradientDir {
    /** 水平 */
    horizontal = 1,
    /** 垂直 */
    vertical = 2,
    /** 4围 */
    FourDot = 3,
}


@ccclass
@menu('c2f/gui/GradientLabel')
@executeInEditMode
export default class GradientLabel extends cc.Component {

    @property({ type: cc.Enum(GradientDir), tooltip: "渐变方向" })
    _director = GradientDir.horizontal;
    @property({ type: cc.Enum(GradientDir), tooltip: "渐变方向" })
    set director(val: GradientDir) {
        this._director = val;
        this.transBEToArr();
    }
    get director() {
        return this._director;
    }

    @property()
    _beginColor: cc.Color = cc.Color.WHITE;
    @property({ type: cc.Color, visible: function () { return this.director != GradientDir.FourDot; }, tooltip: "左(上)侧颜色" })
    set beginColor(clr: cc.Color) {
        this._beginColor = clr;
        this.transBEToArr();
    }
    get beginColor() {
        return this._beginColor;
    }

    @property()
    _endColor: cc.Color = cc.Color.WHITE;
    @property({ type: cc.Color, visible: function () { return this.director != GradientDir.FourDot; }, tooltip: "右(下)侧颜色" })
    set endColor(clr: cc.Color) {
        this._endColor = clr;
        this.transBEToArr();
    }
    get endColor() {
        return this._endColor;
    }

    @property({ type: cc.Color })
    _verColors: cc.Color[] = [
        cc.color(255, 255, 255),
        cc.color(255, 255, 255),
        cc.color(255, 255, 255),
        cc.color(255, 255, 255)
    ];
    @property({ type: cc.Color, visible: function () { return this.director == GradientDir.FourDot; }, tooltip: "四角颜色：0：左下角，1：右下角，2：左上角，3：右上角" })
    set verColors(vColors: cc.Color[]) {
        this._verColors = vColors;
        this._updateColors();
    }
    get verColors() {
        return this._verColors;
    }

    private transBEToArr() {
        if (this.director == GradientDir.horizontal) {
            this.verColors = [this._beginColor, this.endColor, this._beginColor, this.endColor];
        } else if (this.director == GradientDir.vertical) {
            this.verColors = [this.endColor, this.endColor, this._beginColor, this._beginColor];
        }
    }

    _updateColors() {
        const cmp = this.getComponent(cc.RenderComponent);
        if (!cmp) return;
        const _assembler = cmp['_assembler'];
        if (!(_assembler instanceof cc['Assembler2D'])) return;
        const uintVerts = _assembler._renderData.uintVDatas[0];
        if (!uintVerts) return;
        const color = this.node.color;
        const floatsPerVert = _assembler.floatsPerVert;
        const colorOffset = _assembler.colorOffset;
        let count = 0;
        for (let i = colorOffset, l = uintVerts.length; i < l; i += floatsPerVert) {
            uintVerts[i] = (this.verColors[count++] || color)['_val'];
        }
    }

    onEnable() {
        cc.director.once(cc.Director.EVENT_AFTER_DRAW, this._updateColors, this);
    }

    onDisable() {
        cc.director.off(cc.Director.EVENT_AFTER_DRAW, this._updateColors, this);
        this.node['_renderFlag'] |= cc['RenderFlow'].FLAG_COLOR;
    }
}
