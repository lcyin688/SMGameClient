const { ccclass, property, menu } = cc._decorator;

@ccclass
@menu('c2f/scroll/WEPageViewNesting(支持嵌套的滑动 cc.PageView)')
export class WEPageViewNesting extends cc.PageView {
    /**
     * 记录起始点
     */
    onStartInertiaScroll: (touchMoveVelocity: cc.Vec3) => void;

    /**
     * 重写，禁掉鼠标滚轮操作
     */
    protected _onMouseWheel(event: cc.Event.EventMouse, captureListeners?: cc.Node[]): void {}

    /**
     * 准备开始惯性滚动
     * @param touchMoveVelocity 手势速度
     */
    protected _startInertiaScroll(touchMoveVelocity: cc.Vec3): void {
        super[`_startInertiaScroll`](touchMoveVelocity);
        if (this.onStartInertiaScroll) {
            this.onStartInertiaScroll(touchMoveVelocity);
        }
    }

    protected _onTouchBegan(event: cc.Event.EventTouch, captureListeners?: cc.Node[]): void {
        let nodes: cc.Node[] = [event.target];
        if (captureListeners) {
            nodes = nodes.concat(captureListeners);
        }
        for (let index = 0; index < nodes.length; index++) {
            const element = nodes[index];
            // 清空滚动节点标记
            element[`_view_scroll_target`] = null;

            // 记录开始滚动时的偏移量，如果这是个 ScrollView/继承 ScrollView 节点的话
            let collectionView = element.getComponent(cc.ScrollView);

            if (collectionView) {
                let offset = collectionView.getScrollOffset();
                offset.x = -offset.x;
                collectionView[`_scroll_offset_on_touch_start`] = offset;
            }
        }
        super[`_onTouchBegan`](event, captureListeners);
    }

    protected _onTouchMoved(event: cc.Event.EventTouch, captureListeners?: cc.Node[]): void {
        // 处理嵌套冲突，每次只滚动需要滚动的列表
        let scrollTarget = this._getScrollTarget(event, captureListeners);
        if (this.node === scrollTarget) {
            super[`_onTouchMoved`](event, captureListeners);
        }
    }

    protected _onTouchCancelled(event: cc.Event.EventTouch, captureListeners?: cc.Node[]): void {
        super[`_onTouchCancelled`](event, captureListeners);
    }

    protected _onTouchEnded(event: cc.Event.EventTouch, captureListeners?: cc.Node[]): void {
        super[`_onTouchEnded`](event, captureListeners);
    }

    public hasNestedViewGroup(): boolean {
        // 直接把所有的列表都标记为可滑动，具体滑动哪一个，去 _onTouchMoved 判断
        return false;
    }

    protected _stopPropagationIfTargetIsMe(event: Event): void {
        if (this[`_touchMoved`] == true) {
            event.stopPropagation();
            return;
        }
        super[`_stopPropagationIfTargetIsMe`](event);
    }

    /**
     * 获取本次滑动是要滑动哪个列表
     */
    _getScrollTarget(event: cc.Event.EventTouch, captureListeners?: cc.Node[]): cc.Node {
        // 尝试获取本次已经确定了的滚动节点
        let cache = event.target[`_view_scroll_target`];
        if (cache) {
            return cache;
        }

        let nodes: cc.Node[] = [event.target];
        if (captureListeners) {
            nodes = nodes.concat(captureListeners);
        }
        if (nodes.length == 1) {
            return nodes[0];
        } // 无需处理冲突

        let touch = event.touch;
        let deltaMove = touch.getLocation().subtract(touch.getStartLocation());
        let x = Math.abs(deltaMove.x);
        let y = Math.abs(deltaMove.y);
        let distance = Math.abs(x - y);
        if (distance < 5) {
            return null; // 不足以计算出方向
        }

        let result = null;
        for (let index = 0; index < nodes.length; index++) {
            const element = nodes[index];
            let scrollComp = element.getComponent(cc.ScrollView);
            if (scrollComp) {
                // 取第一个滚动组件作为默认响应者
                if (result == null) {
                    result = element;
                }
                // 全方向滚动暂时不处理
                if (scrollComp.horizontal && scrollComp.vertical) {
                    continue;
                }
                // 不支持滚动的也不处理
                if (!scrollComp.horizontal && !scrollComp.vertical) {
                    continue;
                }
                // 水平方向滚动
                if (scrollComp.horizontal && x > y) {
                    // 左边界检测，滑动到边缘时滑动事件交给其他可滑动列表
                    if (deltaMove.x > 0 && -scrollComp.getScrollOffset().x <= 0) {
                        continue;
                    }
                    // 右边界检测，滑动到边缘时滑动事件交给其他可滑动列表
                    if (deltaMove.x < 0 && -scrollComp.getScrollOffset().x >= scrollComp.getMaxScrollOffset().x) {
                        continue;
                    }
                    result = element;
                    break;
                }
                // 垂直方向滚动
                if (scrollComp.vertical && y > x) {
                    // 上边界检测，滑动到边缘时滑动事件交给其他可滑动列表
                    if (deltaMove.y < 0 && scrollComp.getScrollOffset().y <= 0) {
                        continue;
                    }
                    // 下边界检测，滑动到边缘时滑动事件交给其他可滑动列表
                    if (deltaMove.y > 0 && scrollComp.getScrollOffset().y >= scrollComp.getMaxScrollOffset().y) {
                        continue;
                    }
                    result = element;
                    break;
                }
            }
        }

        // 给所有捕获到的节点都保存一份，方便任意一个节点都可以读到
        if (result) {
            for (let index = 0; index < nodes.length; index++) {
                const element = nodes[index];
                element[`_view_scroll_target`] = result;
            }
        }
        return result;
    }
}
