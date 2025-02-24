
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/mvvm/VMProgress.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab650+CJoNLX7YaBUFhZTrn', 'VMProgress');
// c2f-framework/mvvm/VMProgress.ts

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
var VMCustom_1 = require("./VMCustom");
var StringFormat_1 = require("./StringFormat");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var VMProgress = /** @class */ (function (_super) {
    __extends(VMProgress, _super);
    function VMProgress() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.watchPath = '';
        _this.watchPathArr = ['[min]', '[max]'];
        _this.templateMode = true;
        _this.stringFormat = '';
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    VMProgress.prototype.onLoad = function () {
        //cc.log(this.watchPathArr)
        if (this.watchPathArr.length < 2 || this.watchPathArr[0] == '[min]' || this.watchPathArr[1] == '[max]') {
            console.error('VMProgress must have two values!');
        }
        _super.prototype.onLoad.call(this);
    };
    VMProgress.prototype.start = function () {
        if (CC_EDITOR)
            return;
        this.onValueInit();
    };
    VMProgress.prototype.onValueInit = function () {
        var max = this.watchPathArr.length;
        for (var i = 0; i < max; i++) {
            this.templateValueArr[i] = this.VM.getValue(this.watchPathArr[i]);
        }
        var value = this.templateValueArr[0] / this.templateValueArr[1];
        this.setComponentValue(value);
    };
    VMProgress.prototype.setComponentValue = function (value) {
        if (this.stringFormat !== '') {
            var res = StringFormat_1.StringFormatFunction.deal(value, this.stringFormat);
            _super.prototype.setComponentValue.call(this, res);
        }
        else {
            _super.prototype.setComponentValue.call(this, value);
        }
    };
    VMProgress.prototype.onValueController = function (n, o) {
        var value = Math.round(n * this.templateValueArr[1]);
        if (Number.isNaN(value))
            value = 0;
        this.VM.setValue(this.watchPathArr[0], value);
    };
    /**初始化改变数据 */
    VMProgress.prototype.onValueChanged = function (n, o, pathArr) {
        if (this.templateMode === false)
            return;
        var path = pathArr.join('.');
        //寻找缓存位置
        var index = this.watchPathArr.findIndex(function (v) { return v === path; });
        if (index >= 0) {
            //如果是所属的路径，就可以替换文本了
            this.templateValueArr[index] = n; //缓存值
        }
        var value = this.templateValueArr[0] / this.templateValueArr[1];
        if (value > 1)
            value = 1;
        if (value < 0 || Number.isNaN(value))
            value = 0;
        this.setComponentValue(value);
    };
    __decorate([
        property({
            visible: false,
            override: true
        })
    ], VMProgress.prototype, "watchPath", void 0);
    __decorate([
        property({
            type: [cc.String],
            tooltip: '第一个值是min 值，第二个值 是 max 值，会计算出两者的比例'
        })
    ], VMProgress.prototype, "watchPathArr", void 0);
    __decorate([
        property({
            visible: function () { return this.componentProperty === 'string'; },
            tooltip: '字符串格式化，和 VMLabel 的字段一样，需要填入对应的格式化字符串'
        })
    ], VMProgress.prototype, "stringFormat", void 0);
    VMProgress = __decorate([
        ccclass,
        menu('ModelViewer/VM-Progress (VM-进度条)')
    ], VMProgress);
    return VMProgress;
}(VMCustom_1.default));
exports.default = VMProgress;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL212dm0vVk1Qcm9ncmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBa0M7QUFDbEMsK0NBQXNEO0FBRWhELElBQUEsS0FBOEIsRUFBRSxDQUFDLFVBQVUsRUFBekMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBS2xEO0lBQXdDLDhCQUFRO0lBQWhEO1FBQUEscUVBbUZDO1FBN0VHLGVBQVMsR0FBVyxFQUFFLENBQUM7UUFNYixrQkFBWSxHQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRS9DLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBTXBDLGtCQUFZLEdBQVcsRUFBRSxDQUFDOztJQStEOUIsQ0FBQztJQTVERyx3QkFBd0I7SUFFeEIsMkJBQU0sR0FBTjtRQUNJLDJCQUEyQjtRQUMzQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sRUFBRTtZQUNwRyxPQUFPLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7U0FDckQ7UUFDRCxpQkFBTSxNQUFNLFdBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUNJLElBQUksU0FBUztZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxnQ0FBVyxHQUFYO1FBRUksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZ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LFVBQVU7UUFGOUIsT0FBTztRQUNQLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQztPQUNwQixVQUFVLENBbUY5QjtJQUFELGlCQUFDO0NBbkZELEFBbUZDLENBbkZ1QyxrQkFBUSxHQW1GL0M7a0JBbkZvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZNQ3VzdG9tIGZyb20gXCIuL1ZNQ3VzdG9tXCI7XG5pbXBvcnQgeyBTdHJpbmdGb3JtYXRGdW5jdGlvbiB9IGZyb20gXCIuL1N0cmluZ0Zvcm1hdFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5cbkBjY2NsYXNzXG5AbWVudSgnTW9kZWxWaWV3ZXIvVk0tUHJvZ3Jlc3MgKFZNLei/m+W6puadoSknKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVk1Qcm9ncmVzcyBleHRlbmRzIFZNQ3VzdG9tIHtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICBvdmVycmlkZTogdHJ1ZVxuICAgIH0pXG4gICAgd2F0Y2hQYXRoOiBzdHJpbmcgPSAnJztcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IFtjYy5TdHJpbmddLFxuICAgICAgICB0b29sdGlwOiAn56ys5LiA5Liq5YC85pivbWluIOWAvO+8jOesrOS6jOS4quWAvCDmmK8gbWF4IOWAvO+8jOS8muiuoeeul+WHuuS4pOiAheeahOavlOS+iydcbiAgICB9KVxuICAgIHByb3RlY3RlZCB3YXRjaFBhdGhBcnI6IHN0cmluZ1tdID0gWydbbWluXScsICdbbWF4XSddO1xuXG4gICAgcHVibGljIHRlbXBsYXRlTW9kZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbXBvbmVudFByb3BlcnR5ID09PSAnc3RyaW5nJyB9LFxuICAgICAgICB0b29sdGlwOiAn5a2X56ym5Liy5qC85byP5YyW77yM5ZKMIFZNTGFiZWwg55qE5a2X5q615LiA5qC377yM6ZyA6KaB5aGr5YWl5a+55bqU55qE5qC85byP5YyW5a2X56ym5LiyJ1xuICAgIH0pXG4gICAgc3RyaW5nRm9ybWF0OiBzdHJpbmcgPSAnJztcblxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vY2MubG9nKHRoaXMud2F0Y2hQYXRoQXJyKVxuICAgICAgICBpZiAodGhpcy53YXRjaFBhdGhBcnIubGVuZ3RoIDwgMiB8fCB0aGlzLndhdGNoUGF0aEFyclswXSA9PSAnW21pbl0nIHx8IHRoaXMud2F0Y2hQYXRoQXJyWzFdID09ICdbbWF4XScpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ZNUHJvZ3Jlc3MgbXVzdCBoYXZlIHR3byB2YWx1ZXMhJyk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmIChDQ19FRElUT1IpIHJldHVybjtcbiAgICAgICAgdGhpcy5vblZhbHVlSW5pdCgpO1xuICAgIH1cblxuICAgIG9uVmFsdWVJbml0KCkge1xuXG4gICAgICAgIGxldCBtYXggPSB0aGlzLndhdGNoUGF0aEFyci5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGVWYWx1ZUFycltpXSA9IHRoaXMuVk0uZ2V0VmFsdWUodGhpcy53YXRjaFBhdGhBcnJbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy50ZW1wbGF0ZVZhbHVlQXJyWzBdIC8gdGhpcy50ZW1wbGF0ZVZhbHVlQXJyWzFdO1xuICAgICAgICB0aGlzLnNldENvbXBvbmVudFZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBzZXRDb21wb25lbnRWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLnN0cmluZ0Zvcm1hdCAhPT0gJycpIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBTdHJpbmdGb3JtYXRGdW5jdGlvbi5kZWFsKHZhbHVlLCB0aGlzLnN0cmluZ0Zvcm1hdCk7XG4gICAgICAgICAgICBzdXBlci5zZXRDb21wb25lbnRWYWx1ZShyZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIuc2V0Q29tcG9uZW50VmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25WYWx1ZUNvbnRyb2xsZXIobiwgbykge1xuICAgICAgICBsZXQgdmFsdWUgPSBNYXRoLnJvdW5kKG4gKiB0aGlzLnRlbXBsYXRlVmFsdWVBcnJbMV0pO1xuICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKHZhbHVlKSkgdmFsdWUgPSAwO1xuICAgICAgICB0aGlzLlZNLnNldFZhbHVlKHRoaXMud2F0Y2hQYXRoQXJyWzBdLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoq5Yid5aeL5YyW5pS55Y+Y5pWw5o2uICovXG4gICAgb25WYWx1ZUNoYW5nZWQobiwgbywgcGF0aEFycjogc3RyaW5nW10pIHtcbiAgICAgICAgaWYgKHRoaXMudGVtcGxhdGVNb2RlID09PSBmYWxzZSkgcmV0dXJuO1xuXG5cbiAgICAgICAgbGV0IHBhdGggPSBwYXRoQXJyLmpvaW4oJy4nKTtcbiAgICAgICAgLy/lr7vmib7nvJPlrZjkvY3nva5cbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy53YXRjaFBhdGhBcnIuZmluZEluZGV4KHYgPT4gdiA9PT0gcGF0aCk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAvL+WmguaenOaYr+aJgOWxnueahOi3r+W+hO+8jOWwseWPr+S7peabv+aNouaWh+acrOS6hlxuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVZhbHVlQXJyW2luZGV4XSA9IG47IC8v57yT5a2Y5YC8XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnRlbXBsYXRlVmFsdWVBcnJbMF0gLyB0aGlzLnRlbXBsYXRlVmFsdWVBcnJbMV07XG4gICAgICAgIGlmICh2YWx1ZSA+IDEpIHZhbHVlID0gMTtcbiAgICAgICAgaWYgKHZhbHVlIDwgMCB8fCBOdW1iZXIuaXNOYU4odmFsdWUpKSB2YWx1ZSA9IDA7XG5cbiAgICAgICAgdGhpcy5zZXRDb21wb25lbnRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxufVxuIl19