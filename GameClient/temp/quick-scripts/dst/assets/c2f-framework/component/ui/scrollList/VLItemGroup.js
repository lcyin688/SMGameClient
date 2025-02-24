
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/ui/scrollList/VLItemGroup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd49bcuW6ZRCIJpbkISRZBYr', 'VLItemGroup');
// c2f-framework/component/ui/scrollList/VLItemGroup.ts

"use strict";
/**
 * 虚拟列表副容器
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VLItemGroup = exports.GroupSource = void 0;
/** 分组数据来源类型 */
var GroupSource;
(function (GroupSource) {
    GroupSource[GroupSource["NODE"] = 0] = "NODE";
    GroupSource[GroupSource["PREFAB"] = 1] = "PREFAB";
    GroupSource[GroupSource["MAIN_ITEM_CHILD"] = 2] = "MAIN_ITEM_CHILD";
})(GroupSource = exports.GroupSource || (exports.GroupSource = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var VLItemGroup = /** @class */ (function () {
    function VLItemGroup() {
        this.content = null;
        this.templateType = GroupSource.PREFAB;
        this.templatePrefab = null;
        this.templateNode = null;
        this.templateChild = -1;
    }
    __decorate([
        property({
            type: cc.Node,
            tooltip: CC_DEV && "列表容器节点",
        })
    ], VLItemGroup.prototype, "content", void 0);
    __decorate([
        property({
            type: cc.Enum(GroupSource),
            tooltip: CC_DEV && "列表元素模板类型"
        })
    ], VLItemGroup.prototype, "templateType", void 0);
    __decorate([
        property({
            type: cc.Prefab,
            tooltip: CC_DEV && "列表元素模板预制体",
            visible: function () { return this.templateType === GroupSource.PREFAB; }
        })
    ], VLItemGroup.prototype, "templatePrefab", void 0);
    __decorate([
        property({
            type: cc.Node,
            tooltip: CC_DEV && "列表元素模板节点",
            visible: function () { return this.templateType === GroupSource.NODE; }
        })
    ], VLItemGroup.prototype, "templateNode", void 0);
    __decorate([
        property({
            type: cc.Enum({}),
            tooltip: CC_DEV && "以列表主元素的子节点作为模板节点",
            visible: function () { return this.templateType === GroupSource.MAIN_ITEM_CHILD; }
        })
    ], VLItemGroup.prototype, "templateChild", void 0);
    VLItemGroup = __decorate([
        ccclass("VLItemGroup"),
        executeInEditMode
    ], VLItemGroup);
    return VLItemGroup;
}());
exports.VLItemGroup = VLItemGroup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC91aS9zY3JvbGxMaXN0L1ZMSXRlbUdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRzs7Ozs7Ozs7O0FBRUgsZUFBZTtBQUNmLElBQVksV0FJWDtBQUpELFdBQVksV0FBVztJQUNuQiw2Q0FBSSxDQUFBO0lBQ0osaURBQU0sQ0FBQTtJQUNOLG1FQUFlLENBQUE7QUFDbkIsQ0FBQyxFQUpXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBSXRCO0FBRUssSUFBQSxLQUEyQyxFQUFFLENBQUMsVUFBVSxFQUF0RCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxpQkFBaUIsdUJBQWtCLENBQUM7QUFHL0Q7SUFBQTtRQUtXLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFNeEIsaUJBQVksR0FBZ0IsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQU8vQyxtQkFBYyxHQUFjLElBQUksQ0FBQztRQU9qQyxpQkFBWSxHQUFZLElBQUksQ0FBQztRQU83QixrQkFBYSxHQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUE1Qkc7UUFKQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUk7WUFDYixPQUFPLEVBQUUsTUFBTSxJQUFJLFFBQVE7U0FDOUIsQ0FBQztnREFDNkI7SUFNL0I7UUFKQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDMUIsT0FBTyxFQUFFLE1BQU0sSUFBSSxVQUFVO1NBQ2hDLENBQUM7cURBQ29EO0lBT3REO1FBTEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNO1lBQ2YsT0FBTyxFQUFFLE1BQU0sSUFBSSxXQUFXO1lBQzlCLE9BQU8sZ0JBQUssT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ2pFLENBQUM7dURBQ3NDO0lBT3hDO1FBTEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJO1lBQ2IsT0FBTyxFQUFFLE1BQU0sSUFBSSxVQUFVO1lBQzdCLE9BQU8sZ0JBQUssT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQy9ELENBQUM7cURBQ2tDO0lBT3BDO1FBTEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ2pCLE9BQU8sRUFBRSxNQUFNLElBQUksa0JBQWtCO1lBQ3JDLE9BQU8sZ0JBQUssT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1NBQzFFLENBQUM7c0RBQ2dDO0lBaEN6QixXQUFXO1FBRnZCLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDdEIsaUJBQWlCO09BQ0wsV0FBVyxDQWlDdkI7SUFBRCxrQkFBQztDQWpDRCxBQWlDQyxJQUFBO0FBakNZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDomZrmi5/liJfooajlia/lrrnlmahcbiAqL1xuXG4vKiog5YiG57uE5pWw5o2u5p2l5rqQ57G75Z6LICovXG5leHBvcnQgZW51bSBHcm91cFNvdXJjZSB7XG4gICAgTk9ERSxcbiAgICBQUkVGQUIsXG4gICAgTUFJTl9JVEVNX0NISUxELFxufVxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBleGVjdXRlSW5FZGl0TW9kZSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzKFwiVkxJdGVtR3JvdXBcIilcbkBleGVjdXRlSW5FZGl0TW9kZVxuZXhwb3J0IGNsYXNzIFZMSXRlbUdyb3VwIHtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgXCLliJfooajlrrnlmajoioLngrlcIixcbiAgICB9KVxuICAgIHB1YmxpYyBjb250ZW50OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLkVudW0oR3JvdXBTb3VyY2UpLFxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgXCLliJfooajlhYPntKDmqKHmnb/nsbvlnotcIlxuICAgIH0pXG4gICAgcHVibGljIHRlbXBsYXRlVHlwZTogR3JvdXBTb3VyY2UgPSBHcm91cFNvdXJjZS5QUkVGQUI7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiBcIuWIl+ihqOWFg+e0oOaooeadv+mihOWItuS9k1wiLFxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy50ZW1wbGF0ZVR5cGUgPT09IEdyb3VwU291cmNlLlBSRUZBQjsgfVxuICAgIH0pXG4gICAgcHVibGljIHRlbXBsYXRlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmIFwi5YiX6KGo5YWD57Sg5qih5p2/6IqC54K5XCIsXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnRlbXBsYXRlVHlwZSA9PT0gR3JvdXBTb3VyY2UuTk9ERTsgfVxuICAgIH0pXG4gICAgcHVibGljIHRlbXBsYXRlTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5FbnVtKHt9KSxcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmIFwi5Lul5YiX6KGo5Li75YWD57Sg55qE5a2Q6IqC54K55L2c5Li65qih5p2/6IqC54K5XCIsXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnRlbXBsYXRlVHlwZSA9PT0gR3JvdXBTb3VyY2UuTUFJTl9JVEVNX0NISUxEOyB9XG4gICAgfSlcbiAgICBwdWJsaWMgdGVtcGxhdGVDaGlsZDogbnVtYmVyID0gLTE7XG59XG4iXX0=