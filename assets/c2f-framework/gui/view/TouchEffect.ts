/** 点击特效 */

const { ccclass, property } = cc._decorator;
@ccclass
export class TouchEffect extends cc.Component {

    @property(sp.SkeletonData)
    private spEfxDt: sp.SkeletonData | null = null;

    protected onLoad(): void {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node['_touchListener'].swallowTouches = false;
    }

    private onTouchStart(event) {
        const maxCnt = 5;
        if (!this.spEfxDt || this.node.children.length > maxCnt) {
            return;
        }
        let worldPoint = event.getLocation();
        let posInNode = this.node.convertToNodeSpaceAR(worldPoint);
        let spNode = new cc.Node()
        spNode.x = posInNode.x;
        spNode.y = posInNode.y;
        spNode.scale = 1
        spNode.angle = Math.random() * 360;
        let newSpine = spNode.addComponent(sp.Skeleton)
        newSpine.premultipliedAlpha = false
        newSpine.enableBatch = true;
        newSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE)
        spNode.parent = this.node;

        newSpine.skeletonData = this.spEfxDt;
        newSpine.setAnimation(0, "idle", false);
        newSpine.setCompleteListener(function (data) {
            spNode.destroy();
        });
        //TODO: 添加点击音效
    }
}