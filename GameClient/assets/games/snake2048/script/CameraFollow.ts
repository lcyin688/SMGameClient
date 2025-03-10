const { ccclass, property } = cc._decorator;

@ccclass
export default class CameraFollow extends cc.Component {
    private snakeHead: cc.Node = null; // 蛇头节点
    private isFollow =true

    public setIsFollowState(state:boolean){
        this.isFollow = state
    }
    protected update(dt: number): void {
        if ( !this.isFollow) return;
        this.snakeHead = this.node.parent.getChildByName("GUI")
                        ?.getChildByName('LayerUI')
                        ?.getChildByName('F_SnakMain')
                        ?.getChildByName('_snake_')
                        ?.getChildByName('Head')

        if (this.snakeHead) {
            // 将摄像机节点的位置设置为蛇头节点的位置
            this.node.setPosition(this.snakeHead.position);
        }

        // 保持摄像机节点的旋转不变
        this.node.angle = 0; // 设置摄像机节点的旋转角度为0度，即保持固定方向
    }
}
