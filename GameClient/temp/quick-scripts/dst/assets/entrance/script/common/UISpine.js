
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/common/UISpine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6cfb1dMwKZBP5VD30Lf66af', 'UISpine');
// entrance/script/common/UISpine.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, menu = _a.menu;
var UISpine = /** @class */ (function (_super) {
    __extends(UISpine, _super);
    function UISpine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.completeHandler = null;
        _this.eventHandler = null;
        return _this;
    }
    UISpine.prototype.setListenerCb = function (completeCb, eventCb) {
        this.completeHandler = completeCb;
        this.eventHandler = eventCb;
    };
    UISpine.prototype.onLoad = function () {
        var _this = this;
        var spine = this.node.getComponent(sp.Skeleton);
        if (!spine) {
            return;
        }
        spine.setEventListener(function (entry, event) {
            if (typeof event == 'number') {
                return;
            }
            var eventName = event.data.name;
            if (eventName == 'sound') {
                // UIHelper.playEffect(event.stringValue);
            }
            _this.eventHandler && _this.eventHandler(entry, event);
        });
        spine.setCompleteListener(function (data) {
            _this.completeHandler && _this.completeHandler(data);
        });
    };
    UISpine = __decorate([
        ccclass,
        requireComponent(sp.Skeleton)
    ], UISpine);
    return UISpine;
}(cc.Component));
exports.default = UISpine;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvY29tbW9uL1VJU3BpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUFnRCxFQUFFLENBQUMsVUFBVSxFQUEzRCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUM7QUFHcEU7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUE4QkM7UUE1QlcscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFDakMsa0JBQVksR0FBYSxJQUFJLENBQUM7O0lBMkIxQyxDQUFDO0lBeEJVLCtCQUFhLEdBQXBCLFVBQXFCLFVBQW9CLEVBQUUsT0FBaUI7UUFDeEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7SUFDaEMsQ0FBQztJQUVTLHdCQUFNLEdBQWhCO1FBQUEsaUJBa0JDO1FBakJHLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1IsT0FBTztTQUNWO1FBQ0QsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFVBQUMsS0FBMEIsRUFBRSxLQUE4QjtZQUM5RSxJQUFJLE9BQU8sS0FBSyxJQUFJLFFBQVEsRUFBRTtnQkFDMUIsT0FBTzthQUNWO1lBQ0QsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDbEMsSUFBSSxTQUFTLElBQUksT0FBTyxFQUFFO2dCQUN0QiwwQ0FBMEM7YUFDN0M7WUFDRCxLQUFJLENBQUMsWUFBWSxJQUFJLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLG1CQUFtQixDQUFDLFVBQUMsSUFBSTtZQUMzQixLQUFJLENBQUMsZUFBZSxJQUFJLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBN0JnQixPQUFPO1FBRjNCLE9BQU87UUFDUCxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO09BQ1QsT0FBTyxDQThCM0I7SUFBRCxjQUFDO0NBOUJELEFBOEJDLENBOUJvQyxFQUFFLENBQUMsU0FBUyxHQThCaEQ7a0JBOUJvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUlIZWxwZXIgfSBmcm9tIFwiLi4vLi4vLi4vU2NyaXB0L2dhbWUvVUlIZWxwZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgcmVxdWlyZUNvbXBvbmVudCwgbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5AcmVxdWlyZUNvbXBvbmVudChzcC5Ta2VsZXRvbilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJU3BpbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBjb21wbGV0ZUhhbmRsZXI6IEZ1bmN0aW9uID0gbnVsbDtcbiAgICBwcml2YXRlIGV2ZW50SGFuZGxlcjogRnVuY3Rpb24gPSBudWxsO1xuXG5cbiAgICBwdWJsaWMgc2V0TGlzdGVuZXJDYihjb21wbGV0ZUNiOiBGdW5jdGlvbiwgZXZlbnRDYjogRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZUhhbmRsZXIgPSBjb21wbGV0ZUNiO1xuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlciA9IGV2ZW50Q2I7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IHNwaW5lID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgIGlmICghc3BpbmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzcGluZS5zZXRFdmVudExpc3RlbmVyKChlbnRyeTogc3Auc3BpbmUuVHJhY2tFbnRyeSwgZXZlbnQ6IHNwLnNwaW5lLkV2ZW50IHwgbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGV2ZW50ID09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZXZlbnROYW1lID0gZXZlbnQuZGF0YS5uYW1lO1xuICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSA9PSAnc291bmQnKSB7XG4gICAgICAgICAgICAgICAgLy8gVUlIZWxwZXIucGxheUVmZmVjdChldmVudC5zdHJpbmdWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmV2ZW50SGFuZGxlciAmJiB0aGlzLmV2ZW50SGFuZGxlcihlbnRyeSwgZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3BpbmUuc2V0Q29tcGxldGVMaXN0ZW5lcigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUhhbmRsZXIgJiYgdGhpcy5jb21wbGV0ZUhhbmRsZXIoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgfVxufSJdfQ==