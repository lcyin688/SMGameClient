
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/gui/view/Notify.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e8f29H8xytOaoHW/EDXyt8N', 'Notify');
// c2f-framework/gui/view/Notify.ts

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
exports.Notify = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/** 滚动消息提示组件  */
var Notify = /** @class */ (function (_super) {
    __extends(Notify, _super);
    function Notify() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lab_content = null;
        _this.animation = null;
        return _this;
    }
    Notify.prototype.onLoad = function () {
        if (this.animation)
            this.animation.on(cc.Animation.EventType.FINISHED, this.onFinished, this);
    };
    Notify.prototype.onFinished = function () {
        this.node.destroy();
    };
    /**
     * 显示提示
     * @param msg       文本
     * @param useI18n   设置为 true 时，使用多语言功能 msg 参数为多语言 key
     */
    Notify.prototype.toast = function (msg, useI18n) {
        var realMsg = msg;
        if (c2f.utils.str.isAllDigits(msg)) {
            var words = c2f.language.words(Number(msg));
            if (words) {
                realMsg = words;
            }
        }
        if (c2f.gui.gameFont && this.lab_content.font != c2f.gui.gameFont) {
            this.lab_content.font = c2f.gui.gameFont;
        }
        this.lab_content.string = realMsg;
    };
    __decorate([
        property(cc.Label)
    ], Notify.prototype, "lab_content", void 0);
    __decorate([
        property(cc.Animation)
    ], Notify.prototype, "animation", void 0);
    Notify = __decorate([
        ccclass
    ], Notify);
    return Notify;
}(cc.Component));
exports.Notify = Notify;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2d1aS92aWV3L05vdGlmeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsZ0JBQWdCO0FBRWhCO0lBQTRCLDBCQUFZO0lBQXhDO1FBQUEscUVBa0NDO1FBaENXLGlCQUFXLEdBQW9CLElBQUksQ0FBQztRQUdwQyxlQUFTLEdBQXdCLElBQUksQ0FBQzs7SUE2QmxELENBQUM7SUEzQkcsdUJBQU0sR0FBTjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVM7WUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRU8sMkJBQVUsR0FBbEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsc0JBQUssR0FBTCxVQUFNLEdBQVcsRUFBRSxPQUFnQjtRQUMvQixJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDbEIsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDNUMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUNuQjtTQUNKO1FBQ0QsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUMvRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztTQUM1QztRQUNELElBQUksQ0FBQyxXQUFZLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztJQUN2QyxDQUFDO0lBL0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ3lCO0lBRzVDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkNBQ3VCO0lBTHJDLE1BQU07UUFEbEIsT0FBTztPQUNLLE1BQU0sQ0FrQ2xCO0lBQUQsYUFBQztDQWxDRCxBQWtDQyxDQWxDMkIsRUFBRSxDQUFDLFNBQVMsR0FrQ3ZDO0FBbENZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExhbmd1YWdlTGFiZWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9sYW5ndWFnZS9MYW5ndWFnZUxhYmVsXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8qKiDmu5rliqjmtojmga/mj5DnpLrnu4Tku7YgICovXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIE5vdGlmeSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgbGFiX2NvbnRlbnQ6IGNjLkxhYmVsIHwgbnVsbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxuICAgIHByaXZhdGUgYW5pbWF0aW9uOiBjYy5BbmltYXRpb24gfCBudWxsID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uKVxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24ub24oY2MuQW5pbWF0aW9uLkV2ZW50VHlwZS5GSU5JU0hFRCwgdGhpcy5vbkZpbmlzaGVkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRmluaXNoZWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pi+56S65o+Q56S6XG4gICAgICogQHBhcmFtIG1zZyAgICAgICDmlofmnKxcbiAgICAgKiBAcGFyYW0gdXNlSTE4biAgIOiuvue9ruS4uiB0cnVlIOaXtu+8jOS9v+eUqOWkmuivreiogOWKn+iDvSBtc2cg5Y+C5pWw5Li65aSa6K+t6KiAIGtleVxuICAgICAqL1xuICAgIHRvYXN0KG1zZzogc3RyaW5nLCB1c2VJMThuOiBib29sZWFuKSB7XG4gICAgICAgIGxldCByZWFsTXNnID0gbXNnO1xuICAgICAgICBpZiAoYzJmLnV0aWxzLnN0ci5pc0FsbERpZ2l0cyhtc2cpKSB7XG4gICAgICAgICAgICBsZXQgd29yZHMgPSBjMmYubGFuZ3VhZ2Uud29yZHMoTnVtYmVyKG1zZykpO1xuICAgICAgICAgICAgaWYgKHdvcmRzKSB7XG4gICAgICAgICAgICAgICAgcmVhbE1zZyA9IHdvcmRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjMmYuZ3VpLmdhbWVGb250ICYmIHRoaXMubGFiX2NvbnRlbnQuZm9udCAhPSBjMmYuZ3VpLmdhbWVGb250KSB7XG4gICAgICAgICAgICB0aGlzLmxhYl9jb250ZW50LmZvbnQgPSBjMmYuZ3VpLmdhbWVGb250O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFiX2NvbnRlbnQhLnN0cmluZyA9IHJlYWxNc2c7XG4gICAgfVxufSJdfQ==