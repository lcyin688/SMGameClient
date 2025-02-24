
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/mvvm/VMEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d5bf2Zb3BPJop/BFvnO8bd', 'VMEvent');
// c2f-framework/mvvm/VMEvent.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var VMBase_1 = require("./VMBase");
//todo
// +普通 label 更新数据的情况,label.string = xxx;
// +frameIndex 插件，通过number 数值设置 BhvFrameIndex 来切换当前贴图
// +spriteFrame 直接替换贴图的情况 , 
//  读取本地路径 data.spriteFrame = $res:/pic/com1
//  读取网页路径 data.spriteFrame = $url:http:xxxxxxxxxx.png
// +特殊条件控制 
// 比较条件:,如果传入值 > /< />= /<= /== 某值时，执行的action类型
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, menu = _a.menu;
// enum WatchMode {
//     ccLabel,
//     ccRichText,
//     ccSlider,
//     ccProgressBar,
// }
var FILTER_MODE;
(function (FILTER_MODE) {
    FILTER_MODE[FILTER_MODE["none"] = 0] = "none";
    FILTER_MODE[FILTER_MODE["=="] = 1] = "==";
    FILTER_MODE[FILTER_MODE["!="] = 2] = "!=";
    FILTER_MODE[FILTER_MODE[">"] = 3] = ">";
    FILTER_MODE[FILTER_MODE[">="] = 4] = ">=";
    FILTER_MODE[FILTER_MODE["<"] = 5] = "<";
    FILTER_MODE[FILTER_MODE["<="] = 6] = "<=";
})(FILTER_MODE || (FILTER_MODE = {}));
/**
 *  [VM-Event]
 * 提供  ViewModel 的相关基础功能,
 * 如果值发生变化将会调用对应的函数方法
 */
var VMEvent = /** @class */ (function (_super) {
    __extends(VMEvent, _super);
    function VMEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.templateMode = false;
        _this.watchPath = "";
        _this.triggerOnce = false;
        _this.watchPathArr = [];
        _this.filterMode = FILTER_MODE.none;
        _this.compareValue = '';
        _this.changeEvents = [];
        return _this;
    }
    VMEvent.prototype.onValueInit = function () {
    };
    VMEvent.prototype.onValueChanged = function (newVar, oldVar, pathArr) {
        var res = this.conditionCheck(newVar, this.compareValue);
        if (!res)
            return;
        if (Array.isArray(this.changeEvents)) {
            this.changeEvents.forEach(function (v) {
                v.emit([newVar, oldVar, pathArr]);
            });
        }
        //激活一次后，自动关闭组件
        if (this.triggerOnce === true) {
            this.enabled = false;
        }
    };
    /**条件检查 */
    VMEvent.prototype.conditionCheck = function (a, b) {
        var cod = FILTER_MODE;
        switch (this.filterMode) {
            case cod.none:
                return true;
            case cod["=="]:
                if (a == b)
                    return true;
                break;
            case cod["!="]:
                if (a != b)
                    return true;
                break;
            case cod["<"]:
                if (a < b)
                    return true;
                break;
            case cod[">"]:
                if (a > b)
                    return true;
                break;
            case cod[">="]:
                if (a >= b)
                    return true;
                break;
            case cod["<"]:
                if (a < b)
                    return true;
                break;
            case cod["<="]:
                if (a <= b)
                    return true;
                break;
            default:
                break;
        }
        return false;
    };
    __decorate([
        property({
            tooltip: '使用模板模式，可以使用多路径监听'
        })
    ], VMEvent.prototype, "templateMode", void 0);
    __decorate([
        property({
            tooltip: '监听获取值的路径',
            visible: function () { return this.templateMode === false; }
        })
    ], VMEvent.prototype, "watchPath", void 0);
    __decorate([
        property({
            tooltip: '触发一次后会自动关闭该事件'
        })
    ], VMEvent.prototype, "triggerOnce", void 0);
    __decorate([
        property({
            tooltip: '监听获取值的多条路径,这些值的改变都会通过这个函数回调,请使用 pathArr 区分获取的值 ',
            type: [cc.String],
            visible: function () { return this.templateMode === true; }
        })
    ], VMEvent.prototype, "watchPathArr", void 0);
    __decorate([
        property({
            tooltip: '过滤模式，会根据条件过滤掉时间的触发',
            type: cc.Enum(FILTER_MODE)
        })
    ], VMEvent.prototype, "filterMode", void 0);
    __decorate([
        property({
            visible: function () { return this.filterMode !== FILTER_MODE.none; }
        })
    ], VMEvent.prototype, "compareValue", void 0);
    __decorate([
        property([cc.Component.EventHandler])
    ], VMEvent.prototype, "changeEvents", void 0);
    VMEvent = __decorate([
        ccclass,
        executeInEditMode,
        menu('ModelViewer/VM-EventCall(调用函数)')
    ], VMEvent);
    return VMEvent;
}(VMBase_1.default));
exports.default = VMEvent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL212dm0vVk1FdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFFOUIsTUFBTTtBQUVOLHdDQUF3QztBQUN4QyxxREFBcUQ7QUFDckQsNEJBQTRCO0FBQzVCLDRDQUE0QztBQUM1QyxzREFBc0Q7QUFDdEQsV0FBVztBQUVYLCtDQUErQztBQUV6QyxJQUFBLEtBQWlELEVBQUUsQ0FBQyxVQUFVLEVBQTVELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGlCQUFpQix1QkFBQSxFQUFFLElBQUksVUFBa0IsQ0FBQztBQUVyRSxtQkFBbUI7QUFDbkIsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIscUJBQXFCO0FBQ3JCLElBQUk7QUFFSixJQUFLLFdBUUo7QUFSRCxXQUFLLFdBQVc7SUFDWiw2Q0FBTSxDQUFBO0lBQ04seUNBQUksQ0FBQTtJQUNKLHlDQUFJLENBQUE7SUFDSix1Q0FBRyxDQUFBO0lBQ0gseUNBQUksQ0FBQTtJQUNKLHVDQUFHLENBQUE7SUFDSCx5Q0FBSSxDQUFBO0FBQ1IsQ0FBQyxFQVJJLFdBQVcsS0FBWCxXQUFXLFFBUWY7QUFFRDs7OztHQUlHO0FBSUg7SUFBcUMsMkJBQU07SUFBM0M7UUFBQSxxRUE2RkM7UUF4RlUsa0JBQVksR0FBWSxLQUFLLENBQUM7UUFNckMsZUFBUyxHQUFXLEVBQUUsQ0FBQztRQUt2QixpQkFBVyxHQUFZLEtBQUssQ0FBQztRQU9uQixrQkFBWSxHQUFhLEVBQUUsQ0FBQztRQU0vQixnQkFBVSxHQUFnQixXQUFXLENBQUMsSUFBSSxDQUFDO1FBSzNDLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBR2pDLGtCQUFZLEdBQWdDLEVBQUUsQ0FBQzs7SUF3RG5ELENBQUM7SUF0REcsNkJBQVcsR0FBWDtJQUNBLENBQUM7SUFFRCxnQ0FBYyxHQUFkLFVBQWUsTUFBVyxF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QztZQUNOLE9BQU8sRUFBRSxjQUFjLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxXQUFXLENBQUMsSUFBSSxDQUFBLENBQUMsQ0FBQztTQUN2RSxDQUFDO2lEQUMrQjtJQUdqQztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7aURBQ1M7SUFyQzlCLE9BQU87UUFIM0IsT0FBTztRQUNQLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsZ0NBQWdDLENBQUM7T0FDbEIsT0FBTyxDQTZGM0I7SUFBRCxjQUFDO0NBN0ZELEFBNkZDLENBN0ZvQyxnQkFBTSxHQTZGMUM7a0JBN0ZvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZNQmFzZSBmcm9tICcuL1ZNQmFzZSc7XG5cbi8vdG9kb1xuXG4vLyAr5pmu6YCaIGxhYmVsIOabtOaWsOaVsOaNrueahOaDheWGtSxsYWJlbC5zdHJpbmcgPSB4eHg7XG4vLyArZnJhbWVJbmRleCDmj5Lku7bvvIzpgJrov4dudW1iZXIg5pWw5YC86K6+572uIEJodkZyYW1lSW5kZXgg5p2l5YiH5o2i5b2T5YmN6LS05Zu+XG4vLyArc3ByaXRlRnJhbWUg55u05o6l5pu/5o2i6LS05Zu+55qE5oOF5Ya1ICwgXG4vLyAg6K+75Y+W5pys5Zyw6Lev5b6EIGRhdGEuc3ByaXRlRnJhbWUgPSAkcmVzOi9waWMvY29tMVxuLy8gIOivu+WPlue9kemhtei3r+W+hCBkYXRhLnNwcml0ZUZyYW1lID0gJHVybDpodHRwOnh4eHh4eHh4eHgucG5nXG4vLyAr54m55q6K5p2h5Lu25o6n5Yi2IFxuXG4vLyDmr5TovoPmnaHku7Y6LOWmguaenOS8oOWFpeWAvCA+IC88IC8+PSAvPD0gLz09IOafkOWAvOaXtu+8jOaJp+ihjOeahGFjdGlvbuexu+Wei1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBleGVjdXRlSW5FZGl0TW9kZSwgbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcblxuLy8gZW51bSBXYXRjaE1vZGUge1xuLy8gICAgIGNjTGFiZWwsXG4vLyAgICAgY2NSaWNoVGV4dCxcbi8vICAgICBjY1NsaWRlcixcbi8vICAgICBjY1Byb2dyZXNzQmFyLFxuLy8gfVxuXG5lbnVtIEZJTFRFUl9NT0RFIHtcbiAgICBcIm5vbmVcIixcbiAgICBcIj09XCIsIC8v5q2j5bi46K6h566X77yM5q+U6L6DIOetieS6jlxuICAgIFwiIT1cIiwgLy/mraPluLjorqHnrpfvvIzmr5TovoMg5LiN562J5LqOXG4gICAgXCI+XCIsICAvL+ato+W4uOiuoeeul++8jOavlOi+gz5cbiAgICBcIj49XCIsIC8v5q2j5bi46K6h566X77yM5q+U6L6DPj1cbiAgICBcIjxcIiwgIC8v5q2j5bi46K6h566X77yM5q+U6L6DPFxuICAgIFwiPD1cIiwgLy8g5q2j5bi46K6h566X77yM5q+U6L6DPj1cbn1cblxuLyoqXG4gKiAgW1ZNLUV2ZW50XVxuICog5o+Q5L6bICBWaWV3TW9kZWwg55qE55u45YWz5Z+656GA5Yqf6IO9LFxuICog5aaC5p6c5YC85Y+R55Sf5Y+Y5YyW5bCG5Lya6LCD55So5a+55bqU55qE5Ye95pWw5pa55rOVXG4gKi9cbkBjY2NsYXNzXG5AZXhlY3V0ZUluRWRpdE1vZGVcbkBtZW51KCdNb2RlbFZpZXdlci9WTS1FdmVudENhbGwo6LCD55So5Ye95pWwKScpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWTUV2ZW50IGV4dGVuZHMgVk1CYXNlIHtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHRvb2x0aXA6ICfkvb/nlKjmqKHmnb/mqKHlvI/vvIzlj6/ku6Xkvb/nlKjlpJrot6/lvoTnm5HlkKwnXG4gICAgfSlcbiAgICBwdWJsaWMgdGVtcGxhdGVNb2RlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0b29sdGlwOiAn55uR5ZCs6I635Y+W5YC855qE6Lev5b6EJyxcbiAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy50ZW1wbGF0ZU1vZGUgPT09IGZhbHNlIH1cbiAgICB9KVxuICAgIHdhdGNoUGF0aDogc3RyaW5nID0gXCJcIjtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHRvb2x0aXA6ICfop6blj5HkuIDmrKHlkI7kvJroh6rliqjlhbPpl63or6Xkuovku7YnXG4gICAgfSlcbiAgICB0cmlnZ2VyT25jZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdG9vbHRpcDogJ+ebkeWQrOiOt+WPluWAvOeahOWkmuadoei3r+W+hCzov5nkupvlgLznmoTmlLnlj5jpg73kvJrpgJrov4fov5nkuKrlh73mlbDlm57osIMs6K+35L2/55SoIHBhdGhBcnIg5Yy65YiG6I635Y+W55qE5YC8ICcsXG4gICAgICAgIHR5cGU6IFtjYy5TdHJpbmddLFxuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLnRlbXBsYXRlTW9kZSA9PT0gdHJ1ZSB9XG4gICAgfSlcbiAgICBwcm90ZWN0ZWQgd2F0Y2hQYXRoQXJyOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdG9vbHRpcDogJ+i/h+a7pOaooeW8j++8jOS8muagueaNruadoeS7tui/h+a7pOaOieaXtumXtOeahOinpuWPkScsXG4gICAgICAgIHR5cGU6IGNjLkVudW0oRklMVEVSX01PREUpXG4gICAgfSlcbiAgICBwdWJsaWMgZmlsdGVyTW9kZTogRklMVEVSX01PREUgPSBGSUxURVJfTU9ERS5ub25lO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5maWx0ZXJNb2RlICE9PSBGSUxURVJfTU9ERS5ub25lIH1cbiAgICB9KVxuICAgIHB1YmxpYyBjb21wYXJlVmFsdWU6IHN0cmluZyA9ICcnO1xuXG4gICAgQHByb3BlcnR5KFtjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyXSlcbiAgICBjaGFuZ2VFdmVudHM6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSA9IFtdO1xuXG4gICAgb25WYWx1ZUluaXQoKSB7XG4gICAgfVxuXG4gICAgb25WYWx1ZUNoYW5nZWQobmV3VmFyOiBhbnksIG9sZFZhcjogYW55LCBwYXRoQXJyOiBhbnlbXSkge1xuICAgICAgICBsZXQgcmVzID0gdGhpcy5jb25kaXRpb25DaGVjayhuZXdWYXIsIHRoaXMuY29tcGFyZVZhbHVlKTtcbiAgICAgICAgaWYgKCFyZXMpIHJldHVybjtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmNoYW5nZUV2ZW50cykpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRXZlbnRzLmZvckVhY2godiA9PiB7XG4gICAgICAgICAgICAgICAgdi5lbWl0KFtuZXdWYXIsIG9sZFZhciwgcGF0aEFycl0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5r+A5rS75LiA5qyh5ZCO77yM6Ieq5Yqo5YWz6Zet57uE5Lu2XG4gICAgICAgIGlmICh0aGlzLnRyaWdnZXJPbmNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKuadoeS7tuajgOafpSAqL1xuICAgIHByaXZhdGUgY29uZGl0aW9uQ2hlY2soYSwgYik6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgY29kID0gRklMVEVSX01PREU7XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLmZpbHRlck1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgY29kLm5vbmU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBjYXNlIGNvZFtcIj09XCJdOlxuICAgICAgICAgICAgICAgIGlmIChhID09IGIpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjb2RbXCIhPVwiXTpcbiAgICAgICAgICAgICAgICBpZiAoYSAhPSBiKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY29kW1wiPFwiXTpcbiAgICAgICAgICAgICAgICBpZiAoYSA8IGIpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjb2RbXCI+XCJdOlxuICAgICAgICAgICAgICAgIGlmIChhID4gYikgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNvZFtcIj49XCJdOlxuICAgICAgICAgICAgICAgIGlmIChhID49IGIpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjb2RbXCI8XCJdOlxuICAgICAgICAgICAgICAgIGlmIChhIDwgYikgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNvZFtcIjw9XCJdOlxuICAgICAgICAgICAgICAgIGlmIChhIDw9IGIpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuIl19