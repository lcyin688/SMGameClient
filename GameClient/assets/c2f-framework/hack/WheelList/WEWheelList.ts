const { ccclass, property } = cc._decorator;

type WEWheelListType = typeof WEWheelList;
declare global {
    interface IUI {
        WEWheelList: WEWheelListType;
    }

    namespace we {
        namespace ui {
            type WEWheelList = InstanceType<WEWheelListType>;
        }
    }
}

@ccclass
export default class WEWheelList extends cc.Component {
    @property({ type: cc.Prefab, tooltip: CC_DEV && '按钮预制体' })
    buttonPrefab: cc.Prefab = null;

    @property({ type: cc.Node, tooltip: CC_DEV && '滑动控制区域' })
    areaNode: cc.Node = null;

    @property({ tooltip: CC_DEV && '旋转动画持续时间' })
    rotateDuration: number = 0.5;

    @property({ tooltip: CC_DEV && '选中按钮放大倍数' })
    scaleSelected: number = 1.5;

    @property({ tooltip: CC_DEV && '中心 X 偏移量' })
    centerOffsetX: number = 0;

    @property({ tooltip: CC_DEV && '起始角度' })
    angleStart: number = -45;

    @property({ tooltip: CC_DEV && '按钮分布角度范围' })
    angleRange: number = 180;

    @property({ tooltip: CC_DEV && '视野最多能显示数量' })
    maxShowCount: number = 5;

    private radius: number = 0; // 按钮排列半径
    private buttons: cc.Node[] = []; // 所有按钮数组
    private angles: number[] = []; // 每个按钮的初始角度

    private _angleOffset: number = 0; // 当前整体角度偏移
    private selectedIndex: number = 0; // 当前选中的按钮索引
    private selectedIndexCallBack: number = 0;
    private moveDis: number = 7;

    private lastWheelTime: number = 0;

    private isDragging: boolean = false; // 是否正在拖拽
    private lastTime: number = 0; // 上一次触摸时间
    private velocity: number = 0; // 当前滑动速度
    private lastTouchY: number = 0;
    private callBack: Function;

    onLoad() {
        this.registerEvent();
    }
    protected onDestroy(): void {
        this.unregisterEvent();
    }

    registerEvent() {
        this.areaNode.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this, true);
        this.areaNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this, true);
        this.areaNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnded, this, true);
        this.areaNode.on(cc.Node.EventType.MOUSE_WHEEL, this.onMouseWheel, this, true);
        this.areaNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    unregisterEvent() {
        this.areaNode.off(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this, true);
        this.areaNode.off(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this, true);
        this.areaNode.off(cc.Node.EventType.MOUSE_WHEEL, this.onMouseWheel, this, true);
        this.areaNode.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.areaNode.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnded, this, true);
    }

    registerBtnItemEvent(item: cc.Node, i: number) {
        item.on(
            'click',
            () => {
                this.rotateToIndex(i);
            },
            this
        );
        item.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this, true);
        item.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this, true);
        item.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnded, this, true);
        item.on(cc.Node.EventType.MOUSE_WHEEL, this.onMouseWheel, this, true);
        item.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    unregisterBtnItemEvent(item: cc.Node) {
        item.off(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this, true);
        item.off(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this, true);
        item.off(cc.Node.EventType.MOUSE_WHEEL, this.onMouseWheel, this, true);
        item.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        item.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnded, this, true);
    }

    private resetAngleRange(totalCount: number) {
        if (totalCount > this.maxShowCount) {
            this.angleRange = (this.angleRange / this.maxShowCount) * totalCount;
        }
    }

    /**
     * 初始化菜单项数量
     */
    public init(totalCount: number, curGroupIndex: number, callBack: Function) {
        this.callBack = callBack;
        this.selectedIndex = curGroupIndex;
        this.node.removeAllChildren();
        this.buttons = [];
        this.angles = [];

        this.radius = this.node.width / 2;
        this.resetAngleRange(totalCount);
        for (let i = 0; i < totalCount; i++) {
            const t = totalCount === 1 ? 0.5 : i / (totalCount - 1);
            const angle = this.angleStart + t * this.angleRange;
            this.angles.push(angle);

            const btn = cc.instantiate(this.buttonPrefab);
            btn.parent = this.node;
            btn.name = `Btn${i}`;
            const pos = this.polarToXY(angle);
            btn.setPosition(pos);
            btn.scale = 1;
            this.registerBtnItemEvent(btn, i);
            this.buttons.push(btn);
        }

        const midIndex = Math.floor(totalCount / 2);
        this._angleOffset = -this.angles[midIndex];

        this.layoutButtons();
        this.runScaleAnim(this.selectedIndex);
        this.selectedIndexCallBack = this.selectedIndex;
        this.callBack(this.buttons, this.selectedIndexCallBack);
    }

    /**
     * 极坐标转笛卡尔坐标
     */
    private polarToXY(angleDeg: number): cc.Vec2 {
        const rad = cc.misc.degreesToRadians(angleDeg);
        const x = this.radius * Math.cos(rad) + this.centerOffsetX;
        const y = this.radius * Math.sin(rad);
        return cc.v2(x, y);
    }

    /**
     * 更新按钮位置并根据角度选中最近的按钮
     */
    private layoutButtons() {
        this.buttons.forEach((btn, idx) => {
            const angle = this.angles[idx] + this._angleOffset;
            const pos = this.polarToXY(angle);
            btn.setPosition(pos);
        });

        // 自动选中角度最接近 0 的按钮
        let nearestIndex = 0;
        let minDist = 360;
        for (let i = 0; i < this.angles.length; i++) {
            const angle = this.angles[i] + this._angleOffset;
            const dist = Math.abs(((angle + 180) % 360) - 180);
            if (dist < minDist) {
                minDist = dist;
                nearestIndex = i;
            }
        }

        if (this.selectedIndex !== nearestIndex) {
            this.selectedIndex = nearestIndex;
            this.runScaleAnim(nearestIndex);
        }
    }

    /**
     * 平滑旋转到目标按钮索引
     */
    private rotateToIndex(targetIndex: number) {
        if (targetIndex < 0 || targetIndex >= this.buttons.length) {
            return;
        }
        if (targetIndex === this.selectedIndex) {
            return;
        }
        this.forcesRotateToIndex(targetIndex);
    }

    private forcesRotateToIndex(targetIndex: number) {
        const targetAngle = -this.angles[targetIndex];
        let delta = targetAngle - this._angleOffset;
        delta = ((((delta + 180) % 360) + 360) % 360) - 180; // 最短旋转路径
        const newOffset = this._angleOffset + delta;
        const dummyObj = { val: this._angleOffset };
        cc.tween(dummyObj)
            .to(
                this.rotateDuration,
                { val: newOffset },
                {
                    easing: 'cubicOut',
                    onUpdate: (target) => {
                        this._angleOffset = target.val;
                        this.layoutButtons();
                    },
                }
            )
            .call(() => {
                this._angleOffset = newOffset;
                this.selectedIndex = targetIndex;
                this.runScaleAnim(targetIndex);
                this.selectedIndexCallBack = targetIndex;
                this.callBack(this.buttons, this.selectedIndexCallBack);
            })
            .start();

        this.runScaleAnim(targetIndex);
    }

    /**
     * 播放按钮缩放动画（选中/未选中）
     */
    private runScaleAnim(index: number) {
        this.buttons.forEach((btn, i) => {
            cc.tween(btn)
                .stop()
                .to(0.2, { scale: i === index ? this.scaleSelected : 1 }, { easing: 'quadOut' })
                .start();
        });
    }

    /**
     * 触摸开始
     */
    private onTouchBegan(event: cc.Event.EventTouch) {
        if (!this.enabledInHierarchy) {
            return;
        }
        this.isDragging = false;
        this.lastTouchY = event.getLocationY();
        this.velocity = 0;
        this.lastTime = Date.now();
    }

    onMouseWheel(event) {
        if (!this.enabledInHierarchy) {
            return;
        }

        // 0.2秒只能触发一次
        if (this.lastWheelTime && Date.now() - this.lastWheelTime < 200) {
            return;
        }
        this.lastWheelTime = Date.now();
        let deltaMove = cc.v2(0, 0);
        let wheelPrecision = -0.1;
        deltaMove = cc.v2(0, event.getScrollY() * wheelPrecision);
        this.calMoveByMovePos(deltaMove);
    }
    /**
     * 触摸结束 - 启动惯性动画并吸附到最近按钮
     */
    private onTouchEnded(event: cc.Event.EventTouch) {
        if (!this.enabledInHierarchy) {
            return;
        }
        if (!this.isDragging) {
            return;
        }
        this.snapToNearest(event);
    }

    private calMoveByMovePos(deltaMove: cc.Vec2) {
        if (Math.abs(deltaMove.y) > this.moveDis) {
            if (deltaMove.y > 0) {
                this.readyRotateAdd();
            } else {
                this.readyRotateSub();
            }
        }
    }

    private readyRotateSub() {
        let targetIndex = this.selectedIndex - 1;
        if (targetIndex < 0) {
            targetIndex = this.buttons.length - 1;
        }
        this.rotateToIndex(targetIndex);
    }
    private readyRotateAdd() {
        let targetIndex = this.selectedIndex + 1;
        if (targetIndex >= this.buttons.length) {
            targetIndex = 0;
        }
        this.rotateToIndex(targetIndex);
    }
    /**
     * 自动吸附到最近的按钮
     */
    private snapToNearest(event: cc.Event.EventTouch) {
        let nearestIndex = 0;
        let minDist = 360;
        for (let i = 0; i < this.angles.length; i++) {
            const targetAngle = -this.angles[i];
            let dist = Math.abs(((this._angleOffset - targetAngle + 180) % 360) - 180);
            if (dist < minDist) {
                minDist = dist;
                nearestIndex = i;
            }
        }
        let touch = event.touch;
        let deltaMove = touch.getLocation().sub(touch.getStartLocation());
        if (Math.abs(deltaMove.y) > this.moveDis) {
            if (deltaMove.y > 0) {
                if (nearestIndex == 0 && this.selectedIndexCallBack == 0) {
                    nearestIndex = this.buttons.length - 1;
                }
            } else {
                if (this.selectedIndexCallBack == nearestIndex && nearestIndex >= this.buttons.length - 1) {
                    nearestIndex = 0;
                }
            }
        }
        this.forcesRotateToIndex(nearestIndex);
    }
    private onTouchMove(event: cc.Event.EventTouch) {
        const currentY = event.getLocationY();
        const now = Date.now();
        const dt = (now - this.lastTime) / 1000;
        const disY = currentY - this.lastTouchY;

        if (Math.abs(disY) > 2) {
            this.isDragging = true;
            const instantSpeed = disY / dt;
            this.velocity = this.velocity * 0.7 + instantSpeed * 0.3;
            const anglePerPixel = 0.25;
            this._angleOffset += disY * anglePerPixel;
            this.layoutButtons();
            this.lastTouchY = currentY;
            this.lastTime = now;
        }
    }
}

we.ui.WEWheelList = WEWheelList;
