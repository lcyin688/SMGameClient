const { ccclass, property, menu, requireComponent } = cc._decorator;

type WEWheelListType = typeof WEWheelList;
declare global {
    interface IUI {
        WEWheelList: WEWheelListType;
    }
    namespace c2f {
        namespace ui {
            type WEWheelList = InstanceType<WEWheelListType>;
        }
    }
}

/** 轮盘列表事件类型 */
enum WheelListEventType {
    ITEM_SELECTED = 'item-selected',
    SCROLL_BEGIN = 'scroll-begin',
    SCROLL_END = 'scroll-end',
    REFRESH_COMPLETE = 'refresh-complete',
}

@ccclass
@menu('c2f/ui/WEWheelList)')
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

    @property({
        tooltip: CC_DEV && '视野最多能显示数量',
        min: 1,
    })
    maxShowCount: number = 5;

    @property({
        tooltip: CC_DEV && '固定角度步长,即按钮间距',
        min: 1,
    })
    fixedAngleStep: number = 45;

    @property({ tooltip: CC_DEV && '是否开启惯性' })
    enableInertia: boolean = true;

    @property({ tooltip: CC_DEV && '惯性减速度，仅在启用惯性时生效' })
    inertiaDeceleration: number = 980;

    @property({ tooltip: CC_DEV && '最大速度限制' })
    maxVelocity: number = 2000;

    @property({ tooltip: CC_DEV && '最小速度限制' })
    minVelocity: number = 50;

    @property({ tooltip: CC_DEV && '滚动灵敏度' })
    scrollSensitivity: number = 0.25;

    @property({ tooltip: CC_DEV && '吸附动画时长' })
    snapDuration: number = 0.2;

    @property({ tooltip: CC_DEV && '触摸移动最小距离判定' })
    touchMoveThreshold: number = 7;

    private radius: number = 0; // 按钮排列半径
    private buttons: cc.Node[] = []; // 所有按钮数组
    private angles: number[] = []; // 每个按钮的初始角度

    private _angleOffset: number = 0; // 当前整体角度偏移
    private selectedIndex: number = 0; // 当前选中的按钮索引
    private selectedIndexCallBack: number = 0;

    private isDragging: boolean = false; // 是否正在拖拽
    private lastTime: number = 0; // 上一次触摸时间
    private velocity: number = 0; // 当前滑动速度
    private lastTouchY: number = 0;
    private callBack: Function;
    private maxCount: number = 0; // 最大按钮数量

    // 对象池管理
    private readonly _pool: cc.NodePool = new cc.NodePool();

    // 缓存向量对象，避免频繁创建
    private _tempVec2: cc.Vec2 = cc.v2();

    // 当前旋转的缓动对象
    private _currentRotateTween: cc.Tween = null;

    private touchStartPos: cc.Vec2 = cc.v2();
    private isTouchMoved: boolean = false;
    private moveDistance: number = 0; // 触摸移动总距离

    onLoad() {
        this.registerEvent();
        // 预创建对象池
        this._initPool();
    }
    protected onDestroy(): void {
        this.unregisterEvent();
        for (let i = 0; i < this.buttons.length; i++) {
            this.unregisterBtnItemEvent(this.buttons[i], i);
        }
        // 清理对象池
        this._pool.clear();
    }

    registerEvent() {
        this.areaNode.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this, true);
        this.areaNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this, true);
        this.areaNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnded, this, true);
        this.areaNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    unregisterEvent() {
        this.areaNode.off(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this, true);
        this.areaNode.off(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this, true);
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
        item.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    unregisterBtnItemEvent(item: cc.Node, i: number) {
        item.off(
            'click',
            () => {
                this.rotateToIndex(i);
            },
            this
        );
        item.off(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this, true);
        item.off(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this, true);
        item.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        item.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnded, this, true);
    }

    private _validateConfig(): boolean {
        if (!this.buttonPrefab) {
            CC_EDITOR && cc.warn('[WEWheelList] buttonPrefab must not be empty!');
            return false;
        }
        if (!this.areaNode) {
            CC_EDITOR && cc.warn('[WEWheelList] areaNode must not be empty!');
            return false;
        }

        // 验证 maxShowCount
        if (this.maxShowCount < 1) {
            CC_EDITOR && cc.warn('[WEWheelList] maxShowCount must be greater than 0!');

            return false;
        }

        // 验证 fixedAngleStep
        if (this.fixedAngleStep < 1) {
            CC_EDITOR && cc.warn('[WEWheelList] fixedAngleStep must be greater than 0!');
            return false;
        }

        return true;
    }

    /**
     * 根据固定角度步长计算最大按钮数量
     */
    private getMaxButtonCount(): number {
        const fullCircle = 360;
        // 使用固定角度步进计算
        const maxCount = Math.floor(fullCircle / this.fixedAngleStep);
        return maxCount;
    }

    /**
     * 初始化菜单项数量
     */
    public init(totalCount: number, curGroupIndex: number, callBack: Function) {
        if (!this._validateConfig()) {
            return;
        }
        // 检查是否超出最大数量
        this.maxCount = this.getMaxButtonCount();
        if (totalCount > this.maxCount) {
            cc.log(`[WEWheelList] Warning: totalCount(${totalCount}) exceeds maximum allowed count(${this.maxCount})!`);
            totalCount = this.maxCount;
        }

        this.callBack = callBack;
        this.selectedIndex = curGroupIndex;
        this.node.removeAllChildren();
        this.buttons = [];
        this.angles = [];

        this.radius = this.node.width / 2;
        let btn = null;
        let angle = 0;
        for (let i = 0; i < totalCount; i++) {
            // 重新计算按钮位置，确保两侧对称分布
            if (i === 0) {
                // 中心按钮
                angle = this.angleStart;
            } else if (i % 2 === 1) {
                const rightOffset = ((i + 1) / 2) * this.fixedAngleStep;
                angle = this.angleStart + rightOffset;
            } else {
                const leftOffset = (i / 2) * this.fixedAngleStep;
                angle = this.angleStart - leftOffset;
            }

            this.angles.push(angle);

            btn = this._pool.size() > 0 ? this._pool.get() : cc.instantiate(this.buttonPrefab);
            if (!btn) {
                cc.log('[WEWheelList] Failed to create button from prefab!');
                return;
            }
            btn.parent = this.node;
            btn.name = `Btn${i}`;
            this._tempVec2 = this.polarToXY(angle);
            btn.setPosition(this._tempVec2);
            btn.scale = 1;
            this.registerBtnItemEvent(btn, i);
            this.buttons.push(btn);
        }

        // 初始偏移量设置为使选中项居中
        this._angleOffset = -this.angles[curGroupIndex];

        // 立即执行一次布局，确保按钮位置正确
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
        // 使用固定角度步进，而不是根据按钮数量计算
        const totalAngleRange = this.fixedAngleStep * this.buttons.length;
        let angle = 0;
        this.buttons.forEach((btn, idx) => {
            angle = this.angles[idx] + this._angleOffset;

            // 检查按钮是否在可视范围内
            if (!this.isInVisibleRange(angle)) {
                // 计算需要移动的方向并移动最小必要距离
                if (angle > this.angleRange / 2) {
                    angle -= totalAngleRange;
                } else if (angle < -this.angleRange / 2) {
                    angle += totalAngleRange;
                }
                // 更新按钮的角度
                this.angles[idx] = angle - this._angleOffset;
            }

            this._tempVec2 = this.polarToXY(angle);
            btn.setPosition(this._tempVec2);
        });

        // 自动选中角度最接近起始角度(angleStart)的按钮
        let nearestIndex = 0;
        let minDist = Number.MAX_VALUE;
        let dist = 0;

        for (let i = 0; i < this.angles.length; i++) {
            angle = this.angles[i] + this._angleOffset;
            dist = Math.abs(this.normalizeAngle(angle - this.angleStart));
            if (dist < minDist) {
                minDist = dist;
                nearestIndex = i;
            }
        }

        // 只在以下情况更新选中状态：
        // 1. 非拖拽状态
        // 2. 非惯性滚动状态
        // 3. 索引发生变化
        if (!this.isDragging && !this._currentRotateTween && this.velocity === 0 && this.selectedIndex !== nearestIndex) {
            this.selectedIndex = nearestIndex;
            this.runScaleAnim(nearestIndex);
        }
    }
    /**
     * 旋转到指定按钮
     * @param targetIndex 目标索引
     */
    private rotateToIndex(targetIndex: number) {
        if (targetIndex < 0 || targetIndex >= this.buttons.length) {
            return;
        }
        const isSameIndex = targetIndex === this.selectedIndex;
        const targetAngle = -this.angles[targetIndex];
        // 计算目标角度与当前偏移的差值
        let delta = this.getShortestRotation(this._angleOffset, targetAngle);
        // 如果使用固定角度步进，则直接计算目标角度');
        const newOffset = this._angleOffset + delta;
        // 创建动画对象
        const dummyObj = { val: this._angleOffset };

        // 停止可能存在的动画
        if (this._currentRotateTween) {
            this._currentRotateTween.stop();
            this._currentRotateTween = null;
        }

        const tween = cc
            .tween(dummyObj)
            .to(
                this.snapDuration,
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
                // 判断选中索引是否变化只有当索引确实发生改变时才触发选中相关事件
                if (!isSameIndex) {
                    this._currentRotateTween = null;
                    this.runScaleAnim(targetIndex);
                    this.node.emit(WheelListEventType.ITEM_SELECTED);
                    this.selectedIndex = targetIndex;
                    this.selectedIndexCallBack = targetIndex;
                    this.callBack(this.buttons, this.selectedIndexCallBack);
                }
            });

        // 保存并启动动画
        this._currentRotateTween = tween;
        tween.start();
    }

    /**
     * 播放按钮缩放动画（选中/未选中）
     */
    private runScaleAnim(index: number) {
        let isSelected = false;
        let targetScale = 0;
        let duration = 0;
        this.buttons.forEach((btn, i) => {
            // 停止之前的缓动
            cc.Tween.stopAllByTarget(btn);

            // 计算缩放值
            isSelected = i === index;
            targetScale = isSelected ? this.scaleSelected : 1;
            duration = this.snapDuration;

            // 动画曲线
            cc.tween(btn)
                .to(
                    duration,
                    {
                        scale: targetScale,
                    },
                    {
                        easing: isSelected ? 'backOut' : 'quartOut',
                    }
                )
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

        // 记录触摸起始位置
        this.touchStartPos = event.getLocation();
        this.isTouchMoved = false;
        this.isDragging = false;
        this.lastTouchY = event.getLocationY();
        this.velocity = 0;
        this.lastTime = Date.now();
    }
    /**
     * 触摸结束 - 启动惯性动画并吸附到最近按钮
     */
    private onTouchEnded(event: cc.Event.EventTouch) {
        if (!this.enabledInHierarchy || !this.isTouchMoved) {
            this.snapToNearest(event);
            return;
        }
        // 处理滑动结束
        if (this.isDragging) {
            this.isDragging = false;
            if (Math.abs(this.velocity) > this.minVelocity && this.enableInertia) {
                if (Math.abs(this.velocity) > this.maxVelocity) {
                    this.velocity = this.maxVelocity * Math.sign(this.velocity);
                }
            } else {
                this.velocity = 0;
                this.snapToNearest(event);
            }
        }
    }
    /**
     * 自动吸附到最近的按钮
     */
    private snapToNearest(event: cc.Event.EventTouch | null) {
        let nearestIndex = 0;
        let minDist = Number.MAX_VALUE;
        let dist = 0;
        let angle = 0;

        // 计算最接近起始角度的按钮
        for (let i = 0; i < this.angles.length; i++) {
            angle = this.angles[i] + this._angleOffset;
            // 只考虑在可视范围内的按钮
            if (this.isInVisibleRange(angle)) {
                // 计算与起始角度的距离
                dist = Math.abs(this.normalizeAngle(angle - this.angleStart));
                if (dist < minDist) {
                    minDist = dist;
                    nearestIndex = i;
                }
            }
        }

        // 处理滑动方向
        if (event && this.enableInertia) {
            const touch = event.touch;
            const deltaMove = touch.getLocation().sub(touch.getStartLocation());
            if (Math.abs(deltaMove.y) > this.touchMoveThreshold) {
                if (deltaMove.y > 0 && nearestIndex === 0) {
                    nearestIndex = this.buttons.length - 1;
                } else if (deltaMove.y < 0 && nearestIndex === this.buttons.length - 1) {
                    nearestIndex = 0;
                }
            }
        }

        this.rotateToIndex(nearestIndex);
    }
    /**
     * 触摸移动 - 更新角度偏移和速度
     * @param event
     */
    private onTouchMove(event: cc.Event.EventTouch) {
        const currentY = event.getLocationY();
        const currentPos = event.getLocation();
        const now = Date.now();
        const dt = (now - this.lastTime) / 1000;
        const disY = currentY - this.lastTouchY;

        // 计算触摸移动总距离
        this.moveDistance = currentPos.sub(this.touchStartPos).mag();

        // 判断是否超过最小移动距离
        if (!this.isTouchMoved && Math.abs(this.moveDistance) > this.touchMoveThreshold) {
            this.isTouchMoved = true;
            this.node.emit(WheelListEventType.SCROLL_BEGIN);
        }

        // 只有在确认移动后才处理滑动逻辑
        if (this.isTouchMoved && Math.abs(disY) > this.touchMoveThreshold) {
            this.isDragging = true;
            const instantSpeed = disY / dt;
            this.velocity = cc.misc.lerp(this.velocity, instantSpeed, 0.3);

            if (Math.abs(this.velocity) > this.maxVelocity) {
                this.velocity = this.maxVelocity * Math.sign(this.velocity);
            }
            this._angleOffset += disY * this.scrollSensitivity;
            this.layoutButtons();
            this.lastTouchY = currentY;
            this.lastTime = now;
        }
    }

    private _initPool() {
        // 预创建一些按钮节点
        const initCount = Math.min(this.maxShowCount * 2, 20);
        for (let i = 0; i < initCount; i++) {
            const node = cc.instantiate(this.buttonPrefab);
            this._pool.put(node);
        }
    }

    /** 滚动到指定索引 */
    public scrollToIndex(index: number) {
        if (index < 0 || index >= this.buttons.length) {
            return;
        }
        this.rotateToIndex(index);
    }

    /** 刷新列表 */
    public refresh(totalCount: number) {
        this.init(totalCount, this.selectedIndex, this.callBack);
        this.node.emit(WheelListEventType.REFRESH_COMPLETE);
    }

    /** 获取当前选中项 */
    public getSelectedItem(): cc.Node | null {
        return this.buttons[this.selectedIndex] || null;
    }

    /** 获取当前是否在滚动 */
    public isScrolling(): boolean {
        return this.isDragging || Math.abs(this.velocity) > 0;
    }

    private normalizeAngle(angle: number): number {
        // 将角度归一化到 [-180, 180] 范围内
        angle = ((angle % 360) + 360) % 360;
        return angle > 180 ? angle - 360 : angle;
    }

    private getShortestRotation(from: number, to: number): number {
        // 判断是否是满圆情况
        const isFullCircle = this.buttons.length >= this.maxCount;

        if (isFullCircle) {
            // 满圆时直接计算最小差值
            const diff = to - from;
            // 将差值限制在 [-180, 180] 范围内
            return this.normalizeAngle(diff);
        } else {
            // 非满圆时判断旋转角度是否大于180度
            const diff = to - from;
            const absDiff = Math.abs(diff);

            if (absDiff > 180) {
                return diff > 0 ? diff - 360 : diff + 360;
            }
            return diff;
        }
    }

    private isInVisibleRange(angle: number): boolean {
        // 将角度归一化到 [-180, 180] 范围
        const normalizedAngle = this.normalizeAngle(angle);
        // 可视范围是 angleRange
        const visibleRange = this.angleRange / 2;
        return Math.abs(normalizedAngle) <= visibleRange;
    }

    private updateInertiaScroll(dt: number) {
        // 应用减速度
        const direction = this.velocity > 0 ? 1 : -1;
        this.velocity -= direction * this.inertiaDeceleration * dt;
        // 如果速度方向改变，说明减速过头了，直接停止并吸附,速度小于最小值时触发吸附
        if (this.velocity * direction <= 0 || (Math.abs(this.velocity) < this.minVelocity && this.isTouchMoved)) {
            this.velocity = 0;
            this.snapToNearest(null);
            this.node.emit(WheelListEventType.SCROLL_END);
            return;
        }

        // 应用惯性滚动
        const deltaAngle = this.velocity * dt * this.scrollSensitivity;
        this._angleOffset += deltaAngle;
        this.layoutButtons();
    }

    update(dt: number) {
        if (this.enableInertia && !this.isDragging && this.velocity !== 0) {
            this.updateInertiaScroll(dt);
        }
    }
}

// c2f.ui.WEWheelList = WEWheelList;
