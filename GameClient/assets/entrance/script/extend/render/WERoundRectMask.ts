const { ccclass, property, menu, executionOrder, requireComponent, disallowMultiple, executeInEditMode } = cc._decorator;

cc.macro.ENABLE_WEBGL_ANTIALIAS = true;

@ccclass()
@executeInEditMode()
@disallowMultiple()
@requireComponent(cc.Mask)
@executionOrder(-2000)
@menu('c2f/render/WERoundRectMask(圆角遮罩)')
export class WERoundRectMask extends cc.Component {
    @property()
    private _radius: number = 50;

    @property({ tooltip: CC_DEV && '圆角半径:\n0-1之间为最小边长比例值, \n>1为具体像素值' })
    public get radius(): number {
        return this._radius;
    }

    public set radius(r: number) {
        this._radius = r;
        this.updateMask(r);
    }

    // @property(cc.Mask)
    protected mask: cc.Mask = null;

    protected onEnable(): void {
        this.mask = this.getComponent(cc.Mask);
        this.updateMask(this.radius);
    }

    private updateMask(r: number) {
        let _radius = r >= 0 ? r : 0;
        if (_radius < 1) {
            _radius = Math.min(this.node.width, this.node.height) * _radius;
        }
        this.mask['radius'] = _radius;
        this.mask['onDraw'] = this.onDraw.bind(this.mask);
        this.mask['_updateGraphics'] = this._updateGraphics.bind(this.mask);
        this.mask.type = cc.Mask.Type.RECT;
    }

    private _updateGraphics() {
        // @ts-ignore.
        let graphics = this._graphics;
        if (!graphics) {
            return;
        }
        this.onDraw(graphics);
    }

    /**
     * mask 用于绘制罩子的函数.
     * this 指向 mask 对象,需要特别注意.
     * @param graphics
     */
    protected onDraw(graphics: cc.Graphics) {
        // Share render data with graphics content
        graphics.clear(false);
        let node = this.node;
        let width = node.width;
        let height = node.height;
        let x = -width * node.anchorX;
        let y = -height * node.anchorY;
        graphics.roundRect(x, y, width, height, this.radius || 0);
        if (cc.game.renderType === cc.game.RENDER_TYPE_CANVAS) {
            graphics.stroke();
        } else {
            graphics.fill();
        }
    }
}
