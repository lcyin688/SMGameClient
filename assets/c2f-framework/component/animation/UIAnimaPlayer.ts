import { UIAnimaTarget, UIAnimaType } from "../../define/UIAnimaDef";

const { ccclass, property } = cc._decorator;


@ccclass
export class UIAnimaPlayer extends cc.Component {

    @property(UIAnimaTarget)
    animaTarget: UIAnimaTarget[] = [];

    @property()
    playOnload: boolean = false;

    private beforePlayOpacity: Map<cc.Node, number> = null;

    protected onLoad(): void {
        //需要动画的节点透明化
        this.beforePlayOpacity = new Map();
        for (let one of this.animaTarget) {
            this.beforePlayOpacity.set(one.tarNode, one.tarNode.opacity);
            one.tarNode.opacity = 1;
        }
    }

    protected start(): void {
        if (this.playOnload) {
            this.scheduleOnce(this.play.bind(this), 0)
        }
    }

    public play() {
        //还原透明度
        this.beforePlayOpacity.forEach((v, k) => {
            k.opacity = v;
        })
        this.beforePlayOpacity.clear();

        // 初始化目标对象状态 
        this.initTargetState();
        //播放动作
        for (let one of this.animaTarget) {
            this.playTargetAnima(one);
        }
    }

    /** 初始化目标状态 */
    private initTargetState() {
        for (let one of this.animaTarget) {
            this.initTarget(one);
        }
    }

    /** 初始化 */
    private initTarget(target: UIAnimaTarget) {
        for (let one of target.actionList) {
            for (let oneCH of one.animaList) {
                switch (oneCH.animaTp) {
                    case UIAnimaType.move:
                        target.tarNode.x -= oneCH.byVec2.x;
                        target.tarNode.y -= oneCH.byVec2.y;
                        break;
                    case UIAnimaType.opacity:
                        target.tarNode.opacity -= oneCH.byNum;
                        break;
                    case UIAnimaType.ratation:
                        target.tarNode.rotation -= oneCH.byNum;
                        break;
                    case UIAnimaType.scale:
                        target.tarNode.scaleX -= oneCH.byVec2.x;
                        target.tarNode.scaleY -= oneCH.byVec2.y;
                        break;
                }
            }
        }
    }

    private playTargetAnima(target: UIAnimaTarget) {
        let sequence = [];
        for (let one of target.actionList) {
            let onceParam: any = null;
            for (let oneCH of one.animaList) {
                if (oneCH.animaTp == UIAnimaType.delay) {
                    sequence.push(cc.tween(target.tarNode).delay(one.duration));
                } else if (oneCH.animaTp == UIAnimaType.function) {
                    sequence.push(cc.tween(target.tarNode).call(() => {
                        if (!oneCH.cbHandler.tarNode) {
                            return;
                        }
                        let comp = oneCH.cbHandler.tarNode.getComponent(oneCH.cbHandler.compName);
                        if (!comp) {
                            return;
                        }
                        comp[oneCH.cbHandler.funcName]();
                    }));
                } else {
                    onceParam = onceParam || {};
                    switch (oneCH.animaTp) {
                        case UIAnimaType.move:
                            onceParam.x = oneCH.byVec2.x;
                            onceParam.y = oneCH.byVec2.y;
                            break;
                        case UIAnimaType.opacity:
                            onceParam.opacity = oneCH.byNum;
                            break;
                        case UIAnimaType.ratation:
                            onceParam.rotation = oneCH.byNum;
                            break;
                        case UIAnimaType.scale:
                            onceParam.scaleX = oneCH.byVec2.x;
                            onceParam.scaleY = oneCH.byVec2.y;
                            break;
                    }
                }
            }
            if (onceParam) {
                sequence.push(cc.tween(target.tarNode).by(one.duration, onceParam));
            }
        }
        if (sequence.length <= 0) {
            return;
        }
        let evalStr = 'cc.tween(target.tarNode)';
        for (let i = 0; i < sequence.length; i++) {
            evalStr += `.then(sequence[${i}])`;
        }
        evalStr += '.start();';
        eval(evalStr);
    }
}
