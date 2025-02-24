
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/define/C2FEnum.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '75cc8HcShZHXKqmxsGlFygH', 'C2FEnum');
// c2f-framework/define/C2FEnum.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C2FEnum = void 0;
var C2FEnum;
(function (C2FEnum) {
    var Event;
    (function (Event) {
        /** 改变视图的值 */
        Event["ChangeViewValue"] = "ChangeViewValue";
        /** 改变数据模型的值 */
        Event["ChangeModelValue"] = "ChangeModelValue";
        /** 入场动画加载完成 */
        Event["PopViewInAnimaCmpl"] = "PopViewInAnimaCmpl";
        /** 添加View */
        Event["PopViewAdded"] = "PopViewAdded";
        /** 移除View */
        Event["PopViewRemoved"] = "PopViewRemoved";
    })(Event = C2FEnum.Event || (C2FEnum.Event = {}));
    var UIEvent;
    (function (UIEvent) {
        /** 按钮点击事件 */
        UIEvent["ButtonClick"] = "click";
        /** 编辑开始 */
        UIEvent["EditBoxEditingBegan"] = "editing-did-began";
        /** 编辑结束 */
        UIEvent["EditBoxEditingEnded"] = "editing-did-ended";
        /** 编辑返回 */
        UIEvent["EditBoxEditingReturn"] = "editing-return";
        /** 文本发生变化 */
        UIEvent["EditBoxTextChanged"] = "text-changed";
        /** 滚动到顶部 */
        UIEvent["ScrollViewScrollToTop"] = "scroll-to-top";
        /** 滚动到底部 */
        UIEvent["ScrollViewScrollToBottom"] = "scroll-to-bottom";
        /** 滚动到左边 */
        UIEvent["ScrollViewScrollToLeft"] = "scroll-to-left";
        /** 滚动到右边 */
        UIEvent["ScrollViewScrollToRight"] = "scroll-to-right";
        /** 滚动中 */
        UIEvent["ScrollViewScrolling"] = "scrolling";
        /**  */
        UIEvent["ScrollViewBounceBottom"] = "bounce-bottom";
        /**  */
        UIEvent["ScrollViewBounceTop"] = "bounce-top";
        /**  */
        UIEvent["ScrollViewBounceLeft"] = "bounce-left";
        /**  */
        UIEvent["ScrollViewBounceRight"] = "bounce-right";
        /** 滚动结束 */
        UIEvent["ScrollViewScrollEnded"] = "scroll-ended";
        /** 触摸抬起 */
        UIEvent["ScrollViewTouchUp"] = "touch-up";
        /** 滚动开始 */
        UIEvent["ScrollViewScrollBegan"] = "scroll-began";
        /**  */
        UIEvent["Toggle"] = "toggle";
        /**  */
        UIEvent["SliderSlide"] = "slide";
        /** 翻页事件 */
        UIEvent["PageViewPageTurning"] = "page-turning";
    })(UIEvent = C2FEnum.UIEvent || (C2FEnum.UIEvent = {}));
    var ExtEvent;
    (function (ExtEvent) {
        /** 语言切换 */
        ExtEvent["SwitchLanguage"] = "switch-language";
        /** 列表填充完成 */
        ExtEvent["VirtualListFillCmpl"] = "VirtualListFillCmpl";
        /** */
        ExtEvent["NodeActiveChanged"] = "active-changed";
    })(ExtEvent = C2FEnum.ExtEvent || (C2FEnum.ExtEvent = {}));
})(C2FEnum = exports.C2FEnum || (exports.C2FEnum = {}));

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2RlZmluZS9DMkZFbnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQWMsT0FBTyxDQW1FcEI7QUFuRUQsV0FBYyxPQUFPO0lBQ2pCLElBQVksS0FXWDtJQVhELFdBQVksS0FBSztRQUNiLGFBQWE7UUFDYiw0Q0FBbUMsQ0FBQTtRQUNuQyxlQUFlO1FBQ2YsOENBQXFDLENBQUE7UUFDckMsZUFBZTtRQUNmLGtEQUF5QyxDQUFBO1FBQ3pDLGFBQWE7UUFDYixzQ0FBNkIsQ0FBQTtRQUM3QixhQUFhO1FBQ2IsMENBQWlDLENBQUE7SUFDckMsQ0FBQyxFQVhXLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQVdoQjtJQUVELElBQVksT0F5Q1g7SUF6Q0QsV0FBWSxPQUFPO1FBQ2YsYUFBYTtRQUNiLGdDQUFxQixDQUFBO1FBQ3JCLFdBQVc7UUFDWCxvREFBeUMsQ0FBQTtRQUN6QyxXQUFXO1FBQ1gsb0RBQXlDLENBQUE7UUFDekMsV0FBVztRQUNYLGtEQUF1QyxDQUFBO1FBQ3ZDLGFBQWE7UUFDYiw4Q0FBbUMsQ0FBQTtRQUNuQyxZQUFZO1FBQ1osa0RBQXVDLENBQUE7UUFDdkMsWUFBWTtRQUNaLHdEQUE2QyxDQUFBO1FBQzdDLFlBQVk7UUFDWixvREFBeUMsQ0FBQTtRQUN6QyxZQUFZO1FBQ1osc0RBQTJDLENBQUE7UUFDM0MsVUFBVTtRQUNWLDRDQUFpQyxDQUFBO1FBQ2pDLE9BQU87UUFDUCxtREFBd0MsQ0FBQTtRQUN4QyxPQUFPO1FBQ1AsNkNBQWtDLENBQUE7UUFDbEMsT0FBTztRQUNQLCtDQUFvQyxDQUFBO1FBQ3BDLE9BQU87UUFDUCxpREFBc0MsQ0FBQTtRQUN0QyxXQUFXO1FBQ1gsaURBQXNDLENBQUE7UUFDdEMsV0FBVztRQUNYLHlDQUE4QixDQUFBO1FBQzlCLFdBQVc7UUFDWCxpREFBc0MsQ0FBQTtRQUN0QyxPQUFPO1FBQ1AsNEJBQWlCLENBQUE7UUFDakIsT0FBTztRQUNQLGdDQUFxQixDQUFBO1FBQ3JCLFdBQVc7UUFDWCwrQ0FBb0MsQ0FBQTtJQUN4QyxDQUFDLEVBekNXLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQXlDbEI7SUFHRCxJQUFZLFFBT1g7SUFQRCxXQUFZLFFBQVE7UUFDaEIsV0FBVztRQUNYLDhDQUFrQyxDQUFBO1FBQ2xDLGFBQWE7UUFDYix1REFBMkMsQ0FBQTtRQUMzQyxNQUFNO1FBQ04sZ0RBQW9DLENBQUE7SUFDeEMsQ0FBQyxFQVBXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBT25CO0FBRUwsQ0FBQyxFQW5FYSxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFtRXBCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IG1vZHVsZSBDMkZFbnVtIHtcbiAgICBleHBvcnQgZW51bSBFdmVudCB7XG4gICAgICAgIC8qKiDmlLnlj5jop4blm77nmoTlgLwgKi9cbiAgICAgICAgQ2hhbmdlVmlld1ZhbHVlID0gJ0NoYW5nZVZpZXdWYWx1ZScsXG4gICAgICAgIC8qKiDmlLnlj5jmlbDmja7mqKHlnovnmoTlgLwgKi9cbiAgICAgICAgQ2hhbmdlTW9kZWxWYWx1ZSA9ICdDaGFuZ2VNb2RlbFZhbHVlJyxcbiAgICAgICAgLyoqIOWFpeWcuuWKqOeUu+WKoOi9veWujOaIkCAqL1xuICAgICAgICBQb3BWaWV3SW5BbmltYUNtcGwgPSAnUG9wVmlld0luQW5pbWFDbXBsJyxcbiAgICAgICAgLyoqIOa3u+WKoFZpZXcgKi9cbiAgICAgICAgUG9wVmlld0FkZGVkID0gJ1BvcFZpZXdBZGRlZCcsXG4gICAgICAgIC8qKiDnp7vpmaRWaWV3ICovXG4gICAgICAgIFBvcFZpZXdSZW1vdmVkID0gJ1BvcFZpZXdSZW1vdmVkJyxcbiAgICB9XG5cbiAgICBleHBvcnQgZW51bSBVSUV2ZW50IHtcbiAgICAgICAgLyoqIOaMiemSrueCueWHu+S6i+S7tiAqL1xuICAgICAgICBCdXR0b25DbGljayA9ICdjbGljaycsXG4gICAgICAgIC8qKiDnvJbovpHlvIDlp4sgKi9cbiAgICAgICAgRWRpdEJveEVkaXRpbmdCZWdhbiA9ICdlZGl0aW5nLWRpZC1iZWdhbicsXG4gICAgICAgIC8qKiDnvJbovpHnu5PmnZ8gKi9cbiAgICAgICAgRWRpdEJveEVkaXRpbmdFbmRlZCA9ICdlZGl0aW5nLWRpZC1lbmRlZCcsXG4gICAgICAgIC8qKiDnvJbovpHov5Tlm54gKi9cbiAgICAgICAgRWRpdEJveEVkaXRpbmdSZXR1cm4gPSAnZWRpdGluZy1yZXR1cm4nLFxuICAgICAgICAvKiog5paH5pys5Y+R55Sf5Y+Y5YyWICovXG4gICAgICAgIEVkaXRCb3hUZXh0Q2hhbmdlZCA9ICd0ZXh0LWNoYW5nZWQnLFxuICAgICAgICAvKiog5rua5Yqo5Yiw6aG26YOoICovXG4gICAgICAgIFNjcm9sbFZpZXdTY3JvbGxUb1RvcCA9ICdzY3JvbGwtdG8tdG9wJyxcbiAgICAgICAgLyoqIOa7muWKqOWIsOW6lemDqCAqL1xuICAgICAgICBTY3JvbGxWaWV3U2Nyb2xsVG9Cb3R0b20gPSAnc2Nyb2xsLXRvLWJvdHRvbScsXG4gICAgICAgIC8qKiDmu5rliqjliLDlt6bovrkgKi9cbiAgICAgICAgU2Nyb2xsVmlld1Njcm9sbFRvTGVmdCA9ICdzY3JvbGwtdG8tbGVmdCcsXG4gICAgICAgIC8qKiDmu5rliqjliLDlj7PovrkgKi9cbiAgICAgICAgU2Nyb2xsVmlld1Njcm9sbFRvUmlnaHQgPSAnc2Nyb2xsLXRvLXJpZ2h0JyxcbiAgICAgICAgLyoqIOa7muWKqOS4rSAqL1xuICAgICAgICBTY3JvbGxWaWV3U2Nyb2xsaW5nID0gJ3Njcm9sbGluZycsXG4gICAgICAgIC8qKiAgKi9cbiAgICAgICAgU2Nyb2xsVmlld0JvdW5jZUJvdHRvbSA9ICdib3VuY2UtYm90dG9tJyxcbiAgICAgICAgLyoqICAqL1xuICAgICAgICBTY3JvbGxWaWV3Qm91bmNlVG9wID0gJ2JvdW5jZS10b3AnLFxuICAgICAgICAvKiogICovXG4gICAgICAgIFNjcm9sbFZpZXdCb3VuY2VMZWZ0ID0gJ2JvdW5jZS1sZWZ0JyxcbiAgICAgICAgLyoqICAqL1xuICAgICAgICBTY3JvbGxWaWV3Qm91bmNlUmlnaHQgPSAnYm91bmNlLXJpZ2h0JyxcbiAgICAgICAgLyoqIOa7muWKqOe7k+adnyAqL1xuICAgICAgICBTY3JvbGxWaWV3U2Nyb2xsRW5kZWQgPSAnc2Nyb2xsLWVuZGVkJyxcbiAgICAgICAgLyoqIOinpuaRuOaKrOi1tyAqL1xuICAgICAgICBTY3JvbGxWaWV3VG91Y2hVcCA9ICd0b3VjaC11cCcsXG4gICAgICAgIC8qKiDmu5rliqjlvIDlp4sgKi9cbiAgICAgICAgU2Nyb2xsVmlld1Njcm9sbEJlZ2FuID0gJ3Njcm9sbC1iZWdhbicsXG4gICAgICAgIC8qKiAgKi9cbiAgICAgICAgVG9nZ2xlID0gJ3RvZ2dsZScsXG4gICAgICAgIC8qKiAgKi9cbiAgICAgICAgU2xpZGVyU2xpZGUgPSAnc2xpZGUnLFxuICAgICAgICAvKiog57+76aG15LqL5Lu2ICovXG4gICAgICAgIFBhZ2VWaWV3UGFnZVR1cm5pbmcgPSAncGFnZS10dXJuaW5nJyxcbiAgICB9XG5cblxuICAgIGV4cG9ydCBlbnVtIEV4dEV2ZW50IHtcbiAgICAgICAgLyoqIOivreiogOWIh+aNoiAqL1xuICAgICAgICBTd2l0Y2hMYW5ndWFnZSA9ICdzd2l0Y2gtbGFuZ3VhZ2UnLFxuICAgICAgICAvKiog5YiX6KGo5aGr5YWF5a6M5oiQICovXG4gICAgICAgIFZpcnR1YWxMaXN0RmlsbENtcGwgPSAnVmlydHVhbExpc3RGaWxsQ21wbCcsXG4gICAgICAgIC8qKiAqL1xuICAgICAgICBOb2RlQWN0aXZlQ2hhbmdlZCA9ICdhY3RpdmUtY2hhbmdlZCcsXG4gICAgfVxuXG59Il19