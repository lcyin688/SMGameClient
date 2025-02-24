
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/ui/button/ButtonLongPress.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '675b9jSxWxEtLmrR+B8IRM6', 'ButtonLongPress');
// c2f-framework/component/ui/button/ButtonLongPress.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, requireComponent = _a.requireComponent;
/**
 * 长按按钮
 */
var ButtonLongPress = /** @class */ (function (_super) {
    __extends(ButtonLongPress, _super);
    function ButtonLongPress() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.touchInterval = 0.1;
        _this.triggerHander = [];
        _this._counter = 0;
        _this._isTouching = false;
        return _this;
    }
    ButtonLongPress.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancle, this);
    };
    ButtonLongPress.prototype.onDisable = function () {
        this.stop();
    };
    ButtonLongPress.prototype._onTouchStart = function (evt) {
        if (this._isTouching) {
            return;
        }
        ;
        var btn = this.node.getComponent(cc.Button);
        if (btn && !btn.interactable) {
            return;
        }
        this._counter = 0;
        this._isTouching = true;
        this.schedule(this.triggerOnce, this.touchInterval);
    };
    ButtonLongPress.prototype._onTouchEnd = function (evt) {
        if (this._counter == 0 && this._isTouching) {
            cc.Component.EventHandler.emitEvents(this.triggerHander, evt);
        }
        this.stop();
    };
    ButtonLongPress.prototype._onTouchCancle = function (evt) {
        this.stop();
    };
    ButtonLongPress.prototype.triggerOnce = function (evt) {
        if (this._isTouching) {
            this._counter++;
            cc.Component.EventHandler.emitEvents(this.triggerHander, evt);
        }
    };
    ButtonLongPress.prototype.stop = function () {
        this._counter = 0;
        this._isTouching = false;
        this.unschedule(this.triggerOnce);
    };
    /** 快捷设置触发处理方法 */
    ButtonLongPress.prototype.quickSetTriggerHnadler = function (ower, handlerName) {
        this.triggerHander = [];
        var handler = new cc.Component.EventHandler();
        handler.target = ower.node;
        handler.component = c2f.utils.view.getComponentName(ower);
        handler.handler = handlerName;
        handler.customEventData = "";
        this.triggerHander.push(handler);
    };
    __decorate([
        property({ tooltip: '触发间隔时间' })
    ], ButtonLongPress.prototype, "touchInterval", void 0);
    __decorate([
        property({ type: cc.Component.EventHandler, tooltip: "触发事件" })
    ], ButtonLongPress.prototype, "triggerHander", void 0);
    ButtonLongPress = __decorate([
        ccclass,
        requireComponent(cc.Button),
        menu("c2f/UI/ButtonLongPress")
    ], ButtonLongPress);
    return ButtonLongPress;
}(cc.Component));
exports.default = ButtonLongPress;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC91aS9idXR0b24vQnV0dG9uTG9uZ1ByZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBZ0QsRUFBRSxDQUFDLFVBQVUsRUFBM0QsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFBLEVBQUUsZ0JBQWdCLHNCQUFrQixDQUFDO0FBRXBFOztHQUVHO0FBSUg7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUFvRUM7UUFqRUcsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFHcEIsbUJBQWEsR0FBZ0MsRUFBRSxDQUFDO1FBRWhELGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsaUJBQVcsR0FBWSxLQUFLLENBQUM7O0lBMkR6QyxDQUFDO0lBekRhLGdDQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVTLG1DQUFTLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTyx1Q0FBYSxHQUFyQixVQUFzQixHQUFHO1FBQ3JCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixPQUFNO1NBQ1Q7UUFBQSxDQUFDO1FBQ0YsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRTtZQUMxQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTyxxQ0FBVyxHQUFuQixVQUFvQixHQUFHO1FBQ25CLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN4QyxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNqRTtRQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU8sd0NBQWMsR0FBdEIsVUFBdUIsR0FBRztRQUN0QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVPLHFDQUFXLEdBQW5CLFVBQW9CLEdBQUc7UUFDbkIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNqRTtJQUNMLENBQUM7SUFFTyw4QkFBSSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGlCQUFpQjtJQUNWLGdEQUFzQixHQUE3QixVQUE4QixJQUFrQixFQUFFLFdBQW1CO1FBQ2pFLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxPQUFPLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztRQUM5QixPQUFPLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBaEVEO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDOzBEQUNKO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQzswREFDUDtJQU52QyxlQUFlO1FBSG5DLE9BQU87UUFDUCxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztPQUNWLGVBQWUsQ0FvRW5DO0lBQUQsc0JBQUM7Q0FwRUQsQUFvRUMsQ0FwRTRDLEVBQUUsQ0FBQyxTQUFTLEdBb0V4RDtrQkFwRW9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51LCByZXF1aXJlQ29tcG9uZW50IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKipcbiAqIOmVv+aMieaMiemSrlxuICovXG5AY2NjbGFzc1xuQHJlcXVpcmVDb21wb25lbnQoY2MuQnV0dG9uKVxuQG1lbnUoXCJjMmYvVUkvQnV0dG9uTG9uZ1ByZXNzXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25Mb25nUHJlc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogJ+inpuWPkemXtOmalOaXtumXtCcgfSlcbiAgICB0b3VjaEludGVydmFsOiBudW1iZXIgPSAwLjE7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLCB0b29sdGlwOiBcIuinpuWPkeS6i+S7tlwiIH0pXG4gICAgcHJpdmF0ZSB0cmlnZ2VySGFuZGVyOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXTtcblxuICAgIHByaXZhdGUgX2NvdW50ZXI6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfaXNUb3VjaGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLl9vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl9vblRvdWNoRW5kLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5fb25Ub3VjaENhbmNsZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25Ub3VjaFN0YXJ0KGV2dCkge1xuICAgICAgICBpZiAodGhpcy5faXNUb3VjaGluZykge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH07XG4gICAgICAgIGxldCBidG4gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIGlmIChidG4gJiYgIWJ0bi5pbnRlcmFjdGFibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jb3VudGVyID0gMDtcbiAgICAgICAgdGhpcy5faXNUb3VjaGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50cmlnZ2VyT25jZSwgdGhpcy50b3VjaEludGVydmFsKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vblRvdWNoRW5kKGV2dCkge1xuICAgICAgICBpZiAodGhpcy5fY291bnRlciA9PSAwICYmIHRoaXMuX2lzVG91Y2hpbmcpIHtcbiAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyh0aGlzLnRyaWdnZXJIYW5kZXIsIGV2dCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25Ub3VjaENhbmNsZShldnQpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0cmlnZ2VyT25jZShldnQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzVG91Y2hpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvdW50ZXIrKztcbiAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyh0aGlzLnRyaWdnZXJIYW5kZXIsIGV2dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuX2NvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLl9pc1RvdWNoaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRyaWdnZXJPbmNlKTtcbiAgICB9XG5cbiAgICAvKiog5b+r5o236K6+572u6Kem5Y+R5aSE55CG5pa55rOVICovXG4gICAgcHVibGljIHF1aWNrU2V0VHJpZ2dlckhuYWRsZXIob3dlcjogY2MuQ29tcG9uZW50LCBoYW5kbGVyTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlckhhbmRlciA9IFtdO1xuICAgICAgICBsZXQgaGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIGhhbmRsZXIudGFyZ2V0ID0gb3dlci5ub2RlO1xuICAgICAgICBoYW5kbGVyLmNvbXBvbmVudCA9IGMyZi51dGlscy52aWV3LmdldENvbXBvbmVudE5hbWUob3dlcik7XG4gICAgICAgIGhhbmRsZXIuaGFuZGxlciA9IGhhbmRsZXJOYW1lO1xuICAgICAgICBoYW5kbGVyLmN1c3RvbUV2ZW50RGF0YSA9IFwiXCI7XG4gICAgICAgIHRoaXMudHJpZ2dlckhhbmRlci5wdXNoKGhhbmRsZXIpO1xuICAgIH1cbn1cbiJdfQ==