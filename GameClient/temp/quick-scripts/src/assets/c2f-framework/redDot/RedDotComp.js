"use strict";
cc._RF.push(module, '6510fUIts5JMalhJjkbITAG', 'RedDotComp');
// c2f-framework/redDot/RedDotComp.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var UIPControlBase_1 = require("../gui/layer/UIPControlBase");
var RedDotComp = /** @class */ (function (_super) {
    __extends(RedDotComp, _super);
    function RedDotComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 外观类型 */
        _this.showType = c2f.RedDot.ShowType.Normal;
        /** 位置偏移 */
        _this.offset = cc.v2(0, 0);
        /** 参数·列表类，通用弹窗等需要做区分 */
        _this.dotKey = null;
        return _this;
    }
    /** 更新显示状态 */
    RedDotComp.prototype.setDisplay = function (display) {
        this.node.active = display;
    };
    /** 设置显示类型 */
    RedDotComp.prototype.setShowType = function (showType) {
        if (this.showType != showType) {
            this.showType = showType;
        }
    };
    /** 设置位置偏移量 */
    RedDotComp.prototype.setPosOffset = function (offset) {
        this.offset.x = offset.x;
        this.offset.y = offset.y;
    };
    /** 设置参数 */
    RedDotComp.prototype.setDotKey = function (key) {
        this.dotKey = key;
    };
    /** 获取参数 */
    RedDotComp.prototype.getDotKey = function () {
        return this.dotKey;
    };
    return RedDotComp;
}(UIPControlBase_1.UIPControlBase));
c2f.RedDotComp = RedDotComp;

cc._RF.pop();