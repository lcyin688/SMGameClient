"use strict";
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