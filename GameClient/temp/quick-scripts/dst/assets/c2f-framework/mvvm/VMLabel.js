
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/mvvm/VMLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '791aaK6ZmpL0ouASsD+PHqD', 'VMLabel');
// c2f-framework/mvvm/VMLabel.ts

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
var StringFormat_1 = require("./StringFormat");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, executeInEditMode = _a.executeInEditMode;
var LABEL_TYPE = {
    CC_LABEL: 'cc.Label',
    CC_RICH_TEXT: 'cc.RichText',
    CC_EDIT_BOX: 'cc.EditBox'
};
/**
 *  [VM-Label]
 *  专门处理 Label 相关 的组件，如 ccLabel,ccRichText,ccEditBox
 *  可以使用模板化的方式将数据写入,可以处理字符串格式等
 *  todo 加入stringFormat 可以解析转换常见的字符串格式
 */
var VMLabel = /** @class */ (function (_super) {
    __extends(VMLabel, _super);
    function VMLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.watchPath = "";
        _this.labelType = LABEL_TYPE.CC_LABEL;
        _this.templateMode = false;
        //按照匹配参数顺序保存的 path 数组 （固定）
        _this.watchPathArr = [];
        //按照路径参数顺序保存的 值的数组（固定）
        _this.templateValueArr = [];
        //保存着字符模板格式的数组 (只会影响显示参数)
        _this.templateFormatArr = [];
        _this.originText = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    VMLabel.prototype.onRestore = function () {
        this.checkLabel();
    };
    VMLabel.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.checkLabel();
        if (!CC_EDITOR) {
            if (this.templateMode) {
                this.originText = this.getLabelValue();
                this.parseTemplate();
            }
            this.onValueInit();
        }
    };
    //解析模板 获取初始格式化字符串格式 的信息
    VMLabel.prototype.parseTemplate = function () {
        var regexAll = /\{\{(.+?)\}\}/g; //匹配： 所有的{{value}}
        var regex = /\{\{(.+?)\}\}/; //匹配： {{value}} 中的 value
        var res = this.originText.match(regexAll); //匹配结果数组
        if (res == null)
            return;
        for (var i = 0; i < res.length; i++) {
            var e = res[i];
            var arr = e.match(regex);
            var matchName = arr[1];
            //let paramIndex = parseInt(matchName)||0;
            var matchInfo = matchName.split(':')[1] || '';
            this.templateFormatArr[i] = matchInfo;
        }
        //监听对应的数值变化
        //this.setMultPathEvent(true);
    };
    /**获取解析字符串模板后得到的值 */
    VMLabel.prototype.getReplaceText = function () {
        var regexAll = /\{\{(.+?)\}\}/g; //匹配： 所有的{{value}}
        var regex = /\{\{(.+?)\}\}/; //匹配： {{value}} 中的 value
        var res = this.originText.match(regexAll); //匹配结果数组 [{{value}}，{{value}}，{{value}}]
        if (res == null)
            return ''; //未匹配到文本
        var str = this.originText; //原始字符串模板 "name:{{0}} 或 name:{{0:fix2}}"
        for (var i = 0; i < res.length; i++) {
            var e = res[i];
            var getValue = void 0;
            var arr = e.match(regex); //匹配到的数组 [{{value}}, value]
            var indexNum = parseInt(arr[1] || '0') || 0; //取出数组的 value 元素 转换成整数
            var format = this.templateFormatArr[i]; //格式化字符 的 配置参数
            getValue = this.templateValueArr[indexNum];
            str = str.replace(e, this.getValueFromFormat(getValue, format)); //从路径缓存值获取数据
        }
        return str;
    };
    /** 格式化字符串 */
    VMLabel.prototype.getValueFromFormat = function (value, format) {
        return StringFormat_1.StringFormatFunction.deal(value, format);
    };
    /**初始化获取数据 */
    VMLabel.prototype.onValueInit = function () {
        //更新信息
        if (this.templateMode === false) {
            this.setLabelValue(this.VM.getValue(this.watchPath)); //
        }
        else {
            var max = this.watchPathArr.length;
            for (var i = 0; i < max; i++) {
                this.templateValueArr[i] = this.VM.getValue(this.watchPathArr[i], '?');
            }
            this.setLabelValue(this.getReplaceText()); // 重新解析
        }
    };
    /**监听数据发生了变动的情况 */
    VMLabel.prototype.onValueChanged = function (n, o, pathArr) {
        if (this.templateMode === false) {
            this.setLabelValue(n);
        }
        else {
            var path_1 = pathArr.join('.');
            //寻找缓存位置
            var index = this.watchPathArr.findIndex(function (v) { return v === path_1; });
            if (index >= 0) {
                //如果是所属的路径，就可以替换文本了
                this.templateValueArr[index] = n; //缓存值
                this.setLabelValue(this.getReplaceText()); // 重新解析文本
            }
        }
    };
    VMLabel.prototype.setLabelValue = function (value) {
        this.getComponent(this.labelType).string = value + '';
    };
    VMLabel.prototype.getLabelValue = function () {
        return this.getComponent(this.labelType).string;
    };
    VMLabel.prototype.checkLabel = function () {
        var checkArray = [
            'cc.Label',
            'cc.RichText',
            'cc.EditBox',
        ];
        for (var i = 0; i < checkArray.length; i++) {
            var e = checkArray[i];
            var comp = this.node.getComponent(e);
            if (comp) {
                this.labelType = e;
                return true;
            }
        }
        cc.error('没有挂载任何label组件');
        return false;
    };
    __decorate([
        property({
            visible: function () {
                return this.templateMode === false;
            }
        })
    ], VMLabel.prototype, "watchPath", void 0);
    __decorate([
        property({
            //type:cc.Enum(LABEL_TYPE),
            readonly: true
        })
    ], VMLabel.prototype, "labelType", void 0);
    __decorate([
        property({
            tooltip: '是否启用模板代码,只能在运行时之前设置,\n将会动态解析模板语法 {{0}},并且自动设置监听的路径'
        })
    ], VMLabel.prototype, "templateMode", void 0);
    __decorate([
        property({
            type: [cc.String],
            visible: function () { return this.templateMode === true; }
        })
    ], VMLabel.prototype, "watchPathArr", void 0);
    VMLabel = __decorate([
        ccclass,
        executeInEditMode,
        menu('ModelViewer/VM-Label(文本VM)')
    ], VMLabel);
    return VMLabel;
}(VMBase_1.default));
exports.default = VMLabel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL212dm0vVk1MYWJlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFDOUIsK0NBQXNEO0FBRWhELElBQUEsS0FBaUQsRUFBRSxDQUFDLFVBQVUsRUFBNUQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFBLEVBQUUsaUJBQWlCLHVCQUFrQixDQUFDO0FBRXJFLElBQU0sVUFBVSxHQUFHO0lBQ2YsUUFBUSxFQUFFLFVBQVU7SUFDcEIsWUFBWSxFQUFFLGFBQWE7SUFDM0IsV0FBVyxFQUFFLFlBQVk7Q0FDNUIsQ0FBQTtBQUVEOzs7OztHQUtHO0FBSUg7SUFBcUMsMkJBQU07SUFBM0M7UUFBQSxxRUE0SkM7UUFySkcsZUFBUyxHQUFXLEVBQUUsQ0FBQztRQU9mLGVBQVMsR0FBVyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBS3pDLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBR3JDLDBCQUEwQjtRQUtoQixrQkFBWSxHQUFhLEVBQUUsQ0FBQztRQUV0QyxzQkFBc0I7UUFDWixzQkFBZ0IsR0FBVSxFQUFFLENBQUM7UUFFdkMseUJBQXlCO1FBQ2pCLHVCQUFpQixHQUFhLEVBQUUsQ0FBQztRQUV6QyxnQkFBVSxHQUFXLElBQUksQ0FBQzs7SUF5SDlCLENBQUM7SUF2SEcsd0JBQXdCO0lBRXhCLDJCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELHdCQUFNLEdBQU47UUFDSSxpQkFBTSxNQUFNLFdBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ1osSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDdkMs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LEVBQUUsb0RBQW9EO1NBQ2hFLENBQUM7aURBQ21DO0lBUXJDO1FBSkMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNqQixPQUFPLEVBQUUsY0FBYyxPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFBLENBQUMsQ0FBQztTQUM3RCxDQUFDO2lEQUNvQztJQTNCckIsT0FBTztRQUgzQixPQUFPO1FBQ1AsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztPQUNkLE9BQU8sQ0E0SjNCO0lBQUQsY0FBQztDQTVKRCxBQTRKQyxDQTVKb0MsZ0JBQU0sR0E0SjFDO2tCQTVKb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWTUJhc2UgZnJvbSAnLi9WTUJhc2UnO1xuaW1wb3J0IHsgU3RyaW5nRm9ybWF0RnVuY3Rpb24gfSBmcm9tICcuL1N0cmluZ0Zvcm1hdCc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIG1lbnUsIGV4ZWN1dGVJbkVkaXRNb2RlIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5jb25zdCBMQUJFTF9UWVBFID0ge1xuICAgIENDX0xBQkVMOiAnY2MuTGFiZWwnLFxuICAgIENDX1JJQ0hfVEVYVDogJ2NjLlJpY2hUZXh0JyxcbiAgICBDQ19FRElUX0JPWDogJ2NjLkVkaXRCb3gnXG59XG5cbi8qKlxuICogIFtWTS1MYWJlbF1cbiAqICDkuJPpl6jlpITnkIYgTGFiZWwg55u45YWzIOeahOe7hOS7tu+8jOWmgiBjY0xhYmVsLGNjUmljaFRleHQsY2NFZGl0Qm94XG4gKiAg5Y+v5Lul5L2/55So5qih5p2/5YyW55qE5pa55byP5bCG5pWw5o2u5YaZ5YWlLOWPr+S7peWkhOeQhuWtl+espuS4suagvOW8j+etiVxuICogIHRvZG8g5Yqg5YWlc3RyaW5nRm9ybWF0IOWPr+S7peino+aekOi9rOaNouW4uOingeeahOWtl+espuS4suagvOW8j1xuICovXG5AY2NjbGFzc1xuQGV4ZWN1dGVJbkVkaXRNb2RlXG5AbWVudSgnTW9kZWxWaWV3ZXIvVk0tTGFiZWwo5paH5pysVk0pJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZNTGFiZWwgZXh0ZW5kcyBWTUJhc2Uge1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGVNb2RlID09PSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgd2F0Y2hQYXRoOiBzdHJpbmcgPSBcIlwiO1xuXG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICAvL3R5cGU6Y2MuRW51bShMQUJFTF9UWVBFKSxcbiAgICAgICAgcmVhZG9ubHk6IHRydWVcbiAgICB9KVxuICAgIHByaXZhdGUgbGFiZWxUeXBlOiBzdHJpbmcgPSBMQUJFTF9UWVBFLkNDX0xBQkVMO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdG9vbHRpcDogJ+aYr+WQpuWQr+eUqOaooeadv+S7o+eggSzlj6rog73lnKjov5DooYzml7bkuYvliY3orr7nva4sXFxu5bCG5Lya5Yqo5oCB6Kej5p6Q5qih5p2/6K+t5rOVIHt7MH19LOW5tuS4lOiHquWKqOiuvue9ruebkeWQrOeahOi3r+W+hCdcbiAgICB9KVxuICAgIHB1YmxpYyB0ZW1wbGF0ZU1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG4gICAgLy/mjInnhafljLnphY3lj4LmlbDpobrluo/kv53lrZjnmoQgcGF0aCDmlbDnu4Qg77yI5Zu65a6a77yJXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogW2NjLlN0cmluZ10sXG4gICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMudGVtcGxhdGVNb2RlID09PSB0cnVlIH1cbiAgICB9KVxuICAgIHByb3RlY3RlZCB3YXRjaFBhdGhBcnI6IHN0cmluZ1tdID0gW107XG5cbiAgICAvL+aMieeFp+i3r+W+hOWPguaVsOmhuuW6j+S/neWtmOeahCDlgLznmoTmlbDnu4TvvIjlm7rlrprvvIlcbiAgICBwcm90ZWN0ZWQgdGVtcGxhdGVWYWx1ZUFycjogYW55W10gPSBbXTtcblxuICAgIC8v5L+d5a2Y552A5a2X56ym5qih5p2/5qC85byP55qE5pWw57uEICjlj6rkvJrlvbHlk43mmL7npLrlj4LmlbApXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZUZvcm1hdEFycjogc3RyaW5nW10gPSBbXTtcblxuICAgIG9yaWdpblRleHQ6IHN0cmluZyA9IG51bGw7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uUmVzdG9yZSgpIHtcbiAgICAgICAgdGhpcy5jaGVja0xhYmVsKCk7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBzdXBlci5vbkxvYWQoKTtcbiAgICAgICAgdGhpcy5jaGVja0xhYmVsKCk7XG4gICAgICAgIGlmICghQ0NfRURJVE9SKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZU1vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yaWdpblRleHQgPSB0aGlzLmdldExhYmVsVmFsdWUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnNlVGVtcGxhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub25WYWx1ZUluaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v6Kej5p6Q5qih5p2/IOiOt+WPluWIneWni+agvOW8j+WMluWtl+espuS4suagvOW8jyDnmoTkv6Hmga9cbiAgICBwYXJzZVRlbXBsYXRlKCkge1xuICAgICAgICBsZXQgcmVnZXhBbGwgPSAvXFx7XFx7KC4rPylcXH1cXH0vZzsgLy/ljLnphY3vvJog5omA5pyJ55qEe3t2YWx1ZX19XG4gICAgICAgIGxldCByZWdleCA9IC9cXHtcXHsoLis/KVxcfVxcfS87Ly/ljLnphY3vvJoge3t2YWx1ZX19IOS4reeahCB2YWx1ZVxuICAgICAgICBsZXQgcmVzID0gdGhpcy5vcmlnaW5UZXh0Lm1hdGNoKHJlZ2V4QWxsKTsvL+WMuemFjee7k+aenOaVsOe7hFxuICAgICAgICBpZiAocmVzID09IG51bGwpIHJldHVybjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSByZXNbaV07XG4gICAgICAgICAgICBsZXQgYXJyID0gZS5tYXRjaChyZWdleCk7XG4gICAgICAgICAgICBsZXQgbWF0Y2hOYW1lID0gYXJyWzFdO1xuICAgICAgICAgICAgLy9sZXQgcGFyYW1JbmRleCA9IHBhcnNlSW50KG1hdGNoTmFtZSl8fDA7XG4gICAgICAgICAgICBsZXQgbWF0Y2hJbmZvID0gbWF0Y2hOYW1lLnNwbGl0KCc6JylbMV0gfHwgJyc7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlRm9ybWF0QXJyW2ldID0gbWF0Y2hJbmZvO1xuICAgICAgICB9XG4gICAgICAgIC8v55uR5ZCs5a+55bqU55qE5pWw5YC85Y+Y5YyWXG4gICAgICAgIC8vdGhpcy5zZXRNdWx0UGF0aEV2ZW50KHRydWUpO1xuICAgIH1cblxuICAgIC8qKuiOt+WPluino+aekOWtl+espuS4suaooeadv+WQjuW+l+WIsOeahOWAvCAqL1xuICAgIGdldFJlcGxhY2VUZXh0KCkge1xuICAgICAgICBsZXQgcmVnZXhBbGwgPSAvXFx7XFx7KC4rPylcXH1cXH0vZzsgLy/ljLnphY3vvJog5omA5pyJ55qEe3t2YWx1ZX19XG4gICAgICAgIGxldCByZWdleCA9IC9cXHtcXHsoLis/KVxcfVxcfS87Ly/ljLnphY3vvJoge3t2YWx1ZX19IOS4reeahCB2YWx1ZVxuICAgICAgICBsZXQgcmVzID0gdGhpcy5vcmlnaW5UZXh0Lm1hdGNoKHJlZ2V4QWxsKTsvL+WMuemFjee7k+aenOaVsOe7hCBbe3t2YWx1ZX1977yMe3t2YWx1ZX1977yMe3t2YWx1ZX19XVxuICAgICAgICBpZiAocmVzID09IG51bGwpIHJldHVybiAnJzsvL+acquWMuemFjeWIsOaWh+acrFxuICAgICAgICBsZXQgc3RyID0gdGhpcy5vcmlnaW5UZXh0Oy8v5Y6f5aeL5a2X56ym5Liy5qih5p2/IFwibmFtZTp7ezB9fSDmiJYgbmFtZTp7ezA6Zml4Mn19XCJcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZSA9IHJlc1tpXTtcbiAgICAgICAgICAgIGxldCBnZXRWYWx1ZTtcbiAgICAgICAgICAgIGxldCBhcnIgPSBlLm1hdGNoKHJlZ2V4KTsgLy/ljLnphY3liLDnmoTmlbDnu4QgW3t7dmFsdWV9fSwgdmFsdWVdXG4gICAgICAgICAgICBsZXQgaW5kZXhOdW0gPSBwYXJzZUludChhcnJbMV0gfHwgJzAnKSB8fCAwOyAvL+WPluWHuuaVsOe7hOeahCB2YWx1ZSDlhYPntKAg6L2s5o2i5oiQ5pW05pWwXG4gICAgICAgICAgICBsZXQgZm9ybWF0ID0gdGhpcy50ZW1wbGF0ZUZvcm1hdEFycltpXTsgLy/moLzlvI/ljJblrZfnrKYg55qEIOmFjee9ruWPguaVsFxuICAgICAgICAgICAgZ2V0VmFsdWUgPSB0aGlzLnRlbXBsYXRlVmFsdWVBcnJbaW5kZXhOdW1dO1xuICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoZSwgdGhpcy5nZXRWYWx1ZUZyb21Gb3JtYXQoZ2V0VmFsdWUsIGZvcm1hdCkpOy8v5LuO6Lev5b6E57yT5a2Y5YC86I635Y+W5pWw5o2uXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICAvKiog5qC85byP5YyW5a2X56ym5LiyICovXG4gICAgZ2V0VmFsdWVGcm9tRm9ybWF0KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZ0Zvcm1hdEZ1bmN0aW9uLmRlYWwodmFsdWUsIGZvcm1hdCk7XG4gICAgfVxuXG4gICAgLyoq5Yid5aeL5YyW6I635Y+W5pWw5o2uICovXG4gICAgb25WYWx1ZUluaXQoKSB7XG4gICAgICAgIC8v5pu05paw5L+h5oGvXG4gICAgICAgIGlmICh0aGlzLnRlbXBsYXRlTW9kZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TGFiZWxWYWx1ZSh0aGlzLlZNLmdldFZhbHVlKHRoaXMud2F0Y2hQYXRoKSk7IC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbWF4ID0gdGhpcy53YXRjaFBhdGhBcnIubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMudGVtcGxhdGVWYWx1ZUFycltpXSA9IHRoaXMuVk0uZ2V0VmFsdWUodGhpcy53YXRjaFBhdGhBcnJbaV0sICc/Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldExhYmVsVmFsdWUodGhpcy5nZXRSZXBsYWNlVGV4dCgpKTsgLy8g6YeN5paw6Kej5p6QXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirnm5HlkKzmlbDmja7lj5HnlJ/kuoblj5jliqjnmoTmg4XlhrUgKi9cbiAgICBvblZhbHVlQ2hhbmdlZChuLCBvLCBwYXRoQXJyOiBzdHJpbmdbXSkge1xuICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZU1vZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnNldExhYmVsVmFsdWUobik7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBwYXRoID0gcGF0aEFyci5qb2luKCcuJyk7XG4gICAgICAgICAgICAvL+Wvu+aJvue8k+WtmOS9jee9rlxuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy53YXRjaFBhdGhBcnIuZmluZEluZGV4KHYgPT4gdiA9PT0gcGF0aCk7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgLy/lpoLmnpzmmK/miYDlsZ7nmoTot6/lvoTvvIzlsLHlj6/ku6Xmm7/mjaLmlofmnKzkuoZcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBsYXRlVmFsdWVBcnJbaW5kZXhdID0gbjsgLy/nvJPlrZjlgLxcbiAgICAgICAgICAgICAgICB0aGlzLnNldExhYmVsVmFsdWUodGhpcy5nZXRSZXBsYWNlVGV4dCgpKTsgLy8g6YeN5paw6Kej5p6Q5paH5pysXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRMYWJlbFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KHRoaXMubGFiZWxUeXBlKS5zdHJpbmcgPSB2YWx1ZSArICcnO1xuICAgIH1cblxuICAgIGdldExhYmVsVmFsdWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50KHRoaXMubGFiZWxUeXBlKS5zdHJpbmc7XG4gICAgfVxuXG4gICAgY2hlY2tMYWJlbCgpIHtcbiAgICAgICAgbGV0IGNoZWNrQXJyYXkgPSBbXG4gICAgICAgICAgICAnY2MuTGFiZWwnLFxuICAgICAgICAgICAgJ2NjLlJpY2hUZXh0JyxcbiAgICAgICAgICAgICdjYy5FZGl0Qm94JyxcbiAgICAgICAgXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBjaGVja0FycmF5W2ldO1xuICAgICAgICAgICAgbGV0IGNvbXAgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGUpO1xuICAgICAgICAgICAgaWYgKGNvbXApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsVHlwZSA9IGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2MuZXJyb3IoJ+ayoeacieaMgui9veS7u+S9lWxhYmVs57uE5Lu2Jyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iXX0=