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
    @property(cc.Prefab)
    buttonPrefab: cc.Prefab = null; // 按钮预制体

    @property
    rotateDuration: number = 0.5; // 旋转动画持续时间（秒）

    @property
    scaleSelected: number = 1.2; // 选中按钮放大倍数

    @property
    centerOffsetX: number = 20; // 中心 X 偏移量，用于调整按钮位置

    private radius: number = 0; // 按钮排列半径
    private btnWidth: number = 100; // 按钮宽度
    private buttons: cc.Node[] = []; // 所有按钮数组
    private angles: number[] = []; // 每个按钮的初始角度

    private _angleOffset: number = 0; // 当前整体角度偏移
    private selectedIndex: number = 0; // 当前选中的按钮索引

    // 滑动控制变量
    private isDragging: boolean = false; // 是否正在拖拽
    private lastTouchX: number = 0; // 上一次触摸点 X
    private lastTime: number = 0; // 上一次触摸时间
    private velocityX: number = 0; // 当前滑动速度

    private inertiaTween: cc.Tween = null; // 惯性滑动 tween

    private callBack: Function;

    /**
     * 初始化菜单项数量
     */
    public init(totalCount: number, curGroupIndex: number, callBack: Function) {
        this.callBack = callBack;
        this.node.removeAllChildren();
        this.buttons = [];
        this.angles = [];

        this.btnWidth = this.buttonPrefab?.data?.width || 100;
        this.radius = Math.min(this.node.width, this.node.height) / 2 - this.btnWidth / 2;

        const angleStart = -45; // 起始角度
        const angleRange = 180; // 按钮分布角度范围

        for (let i = 0; i < totalCount; i++) {
            const t = totalCount === 1 ? 0.5 : i / (totalCount - 1);
            const angle = angleStart + t * angleRange;
            this.angles.push(angle);

            const btn = cc.instantiate(this.buttonPrefab);
            btn.parent = this.node;
            btn.name = `Btn${i}`;
            btn.angle = -angle;

            const pos = this.polarToXY(angle);
            btn.setPosition(pos);
            btn.scale = 1;

            // 按钮点击事件
            btn.on(cc.Node.EventType.TOUCH_END, () => {
                if (!this.isDragging) {
                    this.rotateToIndex(i);
                }
            });

            this.buttons.push(btn);
            callBack(this.buttons, curGroupIndex);
        }

        const midIndex = Math.floor(totalCount / 2);
        this._angleOffset = -this.angles[midIndex];
        this.selectedIndex = midIndex;

        this.layoutButtons();
        this.runScaleAnim(this.selectedIndex);

        // 绑定触摸事件
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
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
            btn.angle = -angle;
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

        const targetAngle = -this.angles[targetIndex];
        let delta = targetAngle - this._angleOffset;
        delta = ((((delta + 180) % 360) + 360) % 360) - 180; // 最短旋转路径
        const newOffset = this._angleOffset + delta;

        if (this.inertiaTween) {
            this.inertiaTween.stop();
            this.inertiaTween = null;
        }

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
                this.callBack(this.buttons, targetIndex);
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
    private onTouchStart(event: cc.Event.EventTouch) {
        this.isDragging = false;
        this.lastTouchX = event.getLocationX();
        this.velocityX = 0;
        this.lastTime = Date.now();

        if (this.inertiaTween) {
            this.inertiaTween.stop();
            this.inertiaTween = null;
        }
    }

    /**
     * 触摸移动 - 实现滑动旋转 + 速度估算
     */
    private onTouchMove(event: cc.Event.EventTouch) {
        const currentX = event.getLocationX();
        const now = Date.now();
        const dt = (now - this.lastTime) / 1000;
        const dx = currentX - this.lastTouchX;

        if (Math.abs(dx) > 2) {
            this.isDragging = true;

            const instantSpeed = dx / dt;
            this.velocityX = this.velocityX * 0.7 + instantSpeed * 0.3;

            const anglePerPixel = 0.25;
            this._angleOffset += dx * anglePerPixel;
            this.layoutButtons();

            this.lastTouchX = currentX;
            this.lastTime = now;
        }
    }

    /**
     * 触摸结束 - 启动惯性动画并吸附到最近按钮
     */
    private onTouchEnd(event: cc.Event.EventTouch) {
        if (!this.isDragging) {
            return;
        }

        const deceleration = 3000;
        const anglePerPixel = 0.25;

        const initialVelocity = this.velocityX * anglePerPixel;
        let currentVelocity = initialVelocity;

        if (this.inertiaTween) {
            this.inertiaTween.stop();
            this.inertiaTween = null;
        }

        this.inertiaTween = cc
            .tween()
            .repeatForever(
                cc.tween().call(() => {
                    const dt = 1 / 60;
                    const sign = currentVelocity > 0 ? 1 : -1;
                    const decelAmount = deceleration * dt;

                    if (Math.abs(currentVelocity) <= decelAmount) {
                        currentVelocity = 0;
                    } else {
                        currentVelocity -= sign * decelAmount;
                    }

                    this._angleOffset += currentVelocity * dt;
                    this.layoutButtons();

                    if (currentVelocity === 0) {
                        if (this.inertiaTween) {
                            this.inertiaTween.stop();
                            this.inertiaTween = null;
                        }
                        this.snapToNearest();
                    }
                })
            )
            .start();
    }

    /**
     * 自动吸附到最近的按钮
     */
    private snapToNearest() {
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
        this.rotateToIndex(nearestIndex);
    }
}

we.ui.WEWheelList = WEWheelList;
