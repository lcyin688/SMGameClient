import { UIPControlBase } from "../gui/layer/UIPControlBase";

abstract class RedDotComp extends UIPControlBase {

    /** 外观类型 */
    public showType: c2f.RedDot.ShowType = c2f.RedDot.ShowType.Normal;
    /** 位置偏移 */
    protected offset: cc.Vec2 = cc.v2(0, 0);
    /** 参数·列表类，通用弹窗等需要做区分 */
    protected dotKey: c2f.DotKey = null;

    /** 更新显示状态 */
    public setDisplay(display: boolean) {
        this.node.active = display;
    }

    /** 设置显示类型 */
    public setShowType(showType: c2f.RedDot.ShowType) {
        if (this.showType != showType) {
            this.showType = showType;
        }
    }

    /** 设置位置偏移量 */
    public setPosOffset(offset: cc.Vec2) {
        this.offset.x = offset.x;
        this.offset.y = offset.y;
    }

    /** 设置参数 */
    public setDotKey(key: c2f.DotKey) {
        this.dotKey = key;
    }

    /** 获取参数 */
    public getDotKey() {
        return this.dotKey;
    }
    /** 修正位置 */
    public abstract amendDotPos();
    /** 更新红点计数 */
    public abstract updateCount(count: number);
}

declare global {
    interface IC2F {
        RedDotComp: typeof RedDotComp;
    }
    namespace c2f {
        type RedDotComp = InstanceType<typeof RedDotComp>;
    }
}
c2f.RedDotComp = RedDotComp;

export { };