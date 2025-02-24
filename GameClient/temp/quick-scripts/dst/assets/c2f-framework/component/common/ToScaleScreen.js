
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/common/ToScaleScreen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd37e8d8sltP/7TNA7NzgqdS', 'ToScaleScreen');
// c2f-framework/component/common/ToScaleScreen.ts

"use strict";
/** 等比缩放节点 */
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
/** 适配类型 */
var FixedType;
(function (FixedType) {
    FixedType[FixedType["full"] = 0] = "full";
    FixedType[FixedType["width"] = 1] = "width";
    FixedType[FixedType["height"] = 2] = "height";
    FixedType[FixedType["amdFull"] = 3] = "amdFull";
})(FixedType || (FixedType = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var ToScaleScreen = /** @class */ (function (_super) {
    __extends(ToScaleScreen, _super);
    function ToScaleScreen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._fixedType = FixedType.full;
        _this._target = null;
        _this._offset = 0;
        _this._fixedCenter = false;
        _this.oriPos = cc.Vec2.ZERO;
        return _this;
    }
    Object.defineProperty(ToScaleScreen.prototype, "fixedType", {
        get: function () {
            return this._fixedType;
        },
        set: function (v) {
            if (this._fixedType === v) {
                return;
            }
            this._fixedType = v;
            this.autoScale();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ToScaleScreen.prototype, "target", {
        get: function () {
            return this._target;
        },
        set: function (v) {
            this._target = v;
            this.autoScale();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ToScaleScreen.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (value) {
            this._offset = value;
            this.autoScale();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ToScaleScreen.prototype, "fixedCenter", {
        get: function () {
            return this._fixedCenter;
        },
        set: function (value) {
            this._fixedCenter = value;
            this.autoScale();
        },
        enumerable: false,
        configurable: true
    });
    ToScaleScreen.prototype.onLoad = function () {
        if (this.target) {
            this.target.on(cc.Node.EventType.SIZE_CHANGED, this.autoScale, this);
        }
        this.node.on(cc.Node.EventType.SIZE_CHANGED, this.autoScale, this);
        this.node.getPosition(this.oriPos);
        this.autoScale();
    };
    ToScaleScreen.prototype.onDestroy = function () {
        this.oriPos = null;
        if (this.target) {
            this.target.off(cc.Node.EventType.SIZE_CHANGED, this.autoScale, this);
        }
        this.node.off(cc.Node.EventType.SIZE_CHANGED, this.autoScale, this);
    };
    ToScaleScreen.prototype.autoScale = function () {
        var szView = cc.view.getVisibleSize();
        if (this.target) {
            szView = this.target.getContentSize();
        }
        else {
            if (CC_EDITOR) {
                //此尺寸为设计分辨率
                szView = cc.size(1080, 1920);
            }
        }
        var scaleX = szView.width / this.node.width;
        var scaleY = szView.height / this.node.height;
        var retScale = 1;
        switch (this.fixedType) {
            case FixedType.full:
                retScale = Math.max(scaleX, scaleY) + this.offset;
                break;
            case FixedType.width:
                retScale = scaleX;
                break;
            case FixedType.height:
                retScale = scaleY;
                break;
            case FixedType.amdFull:
                //修正宽度·特别宽的屏会把宽拉很宽，画面严重失真
                var maxWHB = szView.height * 1080 / 1920;
                var amdScX = maxWHB / this.node.width;
                retScale = Math.max(amdScX, scaleY) + this.offset;
                break;
        }
        this.node.setScale(retScale);
        this.resetPosition(retScale);
    };
    ToScaleScreen.prototype.resetPosition = function (retScale) {
        //位置居中
        if (this.fixedCenter) {
            var posX = retScale * (this.node.anchorX - 0.5) * this.node.width;
            var posY = retScale * (this.node.anchorY - 0.5) * this.node.height;
            this.node.setPosition(posX, posY);
        }
        else {
            this.node.setPosition(this.oriPos);
        }
    };
    __decorate([
        property({ type: cc.Enum(FixedType) })
    ], ToScaleScreen.prototype, "_fixedType", void 0);
    __decorate([
        property({ type: cc.Enum(FixedType), tooltip: CC_DEV && "缩放方式" })
    ], ToScaleScreen.prototype, "fixedType", null);
    __decorate([
        property()
    ], ToScaleScreen.prototype, "_target", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: CC_DEV && "目标节点,不设置目标节点时表示已屏幕为参考" })
    ], ToScaleScreen.prototype, "target", null);
    __decorate([
        property()
    ], ToScaleScreen.prototype, "_offset", void 0);
    __decorate([
        property({ tooltip: "缩放偏移：在等比铺满屏幕的情况下缩放偏移值(百分比)" })
    ], ToScaleScreen.prototype, "offset", null);
    __decorate([
        property()
    ], ToScaleScreen.prototype, "_fixedCenter", void 0);
    __decorate([
        property({ tooltip: "固定节点始终保持相对屏幕居中" })
    ], ToScaleScreen.prototype, "fixedCenter", null);
    ToScaleScreen = __decorate([
        ccclass,
        menu('c2f/common/ToScaleScreen')
    ], ToScaleScreen);
    return ToScaleScreen;
}(cc.Component));
exports.default = ToScaleScreen;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9jb21tb24vVG9TY2FsZVNjcmVlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWIsV0FBVztBQUNYLElBQUssU0FLSjtBQUxELFdBQUssU0FBUztJQUNWLHlDQUFJLENBQUE7SUFDSiwyQ0FBSyxDQUFBO0lBQ0wsNkNBQU0sQ0FBQTtJQUNOLCtDQUFPLENBQUE7QUFDWCxDQUFDLEVBTEksU0FBUyxLQUFULFNBQVMsUUFLYjtBQUVLLElBQUEsS0FBOEIsRUFBRSxDQUFDLFVBQVUsRUFBekMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBR2xEO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBbUhDO1FBaEhXLGdCQUFVLEdBQWMsU0FBUyxDQUFDLElBQUksQ0FBQztRQWN2QyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBV2hDLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFXcEIsa0JBQVksR0FBWSxLQUFLLENBQUM7UUFVdEIsWUFBTSxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOztJQWtFM0MsQ0FBQztJQTlHRyxzQkFBVyxvQ0FBUzthQUFwQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBQ0QsVUFBcUIsQ0FBWTtZQUM3QixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO2dCQUN2QixPQUFPO2FBQ1Y7WUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQzs7O09BUEE7SUFZRCxzQkFBVyxpQ0FBTTthQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO2FBQ0QsVUFBa0IsQ0FBVTtZQUN4QixJQUFJLENB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RS9DO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSxNQUFNLEVBQUUsQ0FBQztrREFHakU7SUFVRDtRQURDLFFBQVEsRUFBRTtrREFDcUI7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxJQUFJLHVCQUF1QixFQUFFLENBQUM7K0NBR3ZFO0lBT0Q7UUFEQyxRQUFRLEVBQUU7a0RBQ1M7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsQ0FBQzsrQ0FJbkQ7SUFNRDtRQURDLFFBQVEsRUFBRTt1REFDbUI7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQztvREFJdkM7SUE1Q2dCLGFBQWE7UUFGakMsT0FBTztRQUNQLElBQUksQ0FBQywwQkFBMEIsQ0FBQztPQUNaLGFBQWEsQ0FtSGpDO0lBQUQsb0JBQUM7Q0FuSEQsQUFtSEMsQ0FuSDBDLEVBQUUsQ0FBQyxTQUFTLEdBbUh0RDtrQkFuSG9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKiog562J5q+U57yp5pS+6IqC54K5ICovXG5cbi8qKiDpgILphY3nsbvlnosgKi9cbmVudW0gRml4ZWRUeXBlIHtcbiAgICBmdWxsLFxuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBhbWRGdWxsLFxufVxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbkBtZW51KCdjMmYvY29tbW9uL1RvU2NhbGVTY3JlZW4nKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9TY2FsZVNjcmVlbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5FbnVtKEZpeGVkVHlwZSkgfSlcbiAgICBwcml2YXRlIF9maXhlZFR5cGU6IEZpeGVkVHlwZSA9IEZpeGVkVHlwZS5mdWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oRml4ZWRUeXBlKSwgdG9vbHRpcDogQ0NfREVWICYmIFwi57yp5pS+5pa55byPXCIgfSlcbiAgICBwdWJsaWMgZ2V0IGZpeGVkVHlwZSgpOiBGaXhlZFR5cGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fZml4ZWRUeXBlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGZpeGVkVHlwZSh2OiBGaXhlZFR5cGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2ZpeGVkVHlwZSA9PT0gdikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2ZpeGVkVHlwZSA9IHY7XG4gICAgICAgIHRoaXMuYXV0b1NjYWxlKCk7XG4gICAgfVxuXG4gICAgQHByb3BlcnR5KClcbiAgICBwcml2YXRlIF90YXJnZXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6IENDX0RFViAmJiBcIuebruagh+iKgueCuSzkuI3orr7nva7nm67moIfoioLngrnml7booajnpLrlt7LlsY/luZXkuLrlj4LogINcIiB9KVxuICAgIHB1YmxpYyBnZXQgdGFyZ2V0KCk6IGNjLk5vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHRhcmdldCh2OiBjYy5Ob2RlKSB7XG4gICAgICAgIHRoaXMuX3RhcmdldCA9IHY7XG4gICAgICAgIHRoaXMuYXV0b1NjYWxlKCk7XG4gICAgfVxuXG4gICAgQHByb3BlcnR5KClcbiAgICBfb2Zmc2V0OiBudW1iZXIgPSAwO1xuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwi57yp5pS+5YGP56e777ya5Zyo562J5q+U6ZO65ruh5bGP5bmV55qE5oOF5Ya15LiL57yp5pS+5YGP56e75YC8KOeZvuWIhuavlClcIiB9KVxuICAgIHNldCBvZmZzZXQodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9vZmZzZXQgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5hdXRvU2NhbGUoKTtcbiAgICB9XG4gICAgZ2V0IG9mZnNldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29mZnNldDtcbiAgICB9XG5cbiAgICBAcHJvcGVydHkoKVxuICAgIF9maXhlZENlbnRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwi5Zu65a6a6IqC54K55aeL57uI5L+d5oyB55u45a+55bGP5bmV5bGF5LitXCIgfSlcbiAgICBzZXQgZml4ZWRDZW50ZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fZml4ZWRDZW50ZXIgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5hdXRvU2NhbGUoKTtcbiAgICB9XG4gICAgZ2V0IGZpeGVkQ2VudGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZml4ZWRDZW50ZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvcmlQb3M6IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk87XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgdGhpcy5hdXRvU2NhbGUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsIHRoaXMuYXV0b1NjYWxlLCB0aGlzKTtcblxuICAgICAgICB0aGlzLm5vZGUuZ2V0UG9zaXRpb24odGhpcy5vcmlQb3MpO1xuICAgICAgICB0aGlzLmF1dG9TY2FsZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMub3JpUG9zID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuU0laRV9DSEFOR0VELCB0aGlzLmF1dG9TY2FsZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsIHRoaXMuYXV0b1NjYWxlLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGF1dG9TY2FsZSgpIHtcbiAgICAgICAgbGV0IHN6VmlldyA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICBzelZpZXcgPSB0aGlzLnRhcmdldC5nZXRDb250ZW50U2l6ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKENDX0VESVRPUikge1xuICAgICAgICAgICAgICAgIC8v5q2k5bC65a+45Li66K6+6K6h5YiG6L6o546HXG4gICAgICAgICAgICAgICAgc3pWaWV3ID0gY2Muc2l6ZSgxMDgwLCAxOTIwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgc2NhbGVYID0gc3pWaWV3LndpZHRoIC8gdGhpcy5ub2RlLndpZHRoO1xuICAgICAgICBsZXQgc2NhbGVZID0gc3pWaWV3LmhlaWdodCAvIHRoaXMubm9kZS5oZWlnaHQ7XG5cbiAgICAgICAgbGV0IHJldFNjYWxlID0gMTtcbiAgICAgICAgc3dpdGNoICh0aGlzLmZpeGVkVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBGaXhlZFR5cGUuZnVsbDpcbiAgICAgICAgICAgICAgICByZXRTY2FsZSA9IE1hdGgubWF4KHNjYWxlWCwgc2NhbGVZKSArIHRoaXMub2Zmc2V0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBGaXhlZFR5cGUud2lkdGg6XG4gICAgICAgICAgICAgICAgcmV0U2NhbGUgPSBzY2FsZVg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEZpeGVkVHlwZS5oZWlnaHQ6XG4gICAgICAgICAgICAgICAgcmV0U2NhbGUgPSBzY2FsZVk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEZpeGVkVHlwZS5hbWRGdWxsOlxuICAgICAgICAgICAgICAgIC8v5L+u5q2j5a695bqmwrfnibnliKvlrr3nmoTlsY/kvJrmiorlrr3mi4nlvojlrr3vvIznlLvpnaLkuKXph43lpLHnnJ9cbiAgICAgICAgICAgICAgICBsZXQgbWF4V0hCID0gc3pWaWV3LmhlaWdodCAqIDEwODAgLyAxOTIwO1xuICAgICAgICAgICAgICAgIGxldCBhbWRTY1ggPSBtYXhXSEIgLyB0aGlzLm5vZGUud2lkdGg7XG4gICAgICAgICAgICAgICAgcmV0U2NhbGUgPSBNYXRoLm1heChhbWRTY1gsIHNjYWxlWSkgKyB0aGlzLm9mZnNldDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZShyZXRTY2FsZSk7XG4gICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbihyZXRTY2FsZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldFBvc2l0aW9uKHJldFNjYWxlOiBudW1iZXIpIHtcbiAgICAgICAgLy/kvY3nva7lsYXkuK1cbiAgICAgICAgaWYgKHRoaXMuZml4ZWRDZW50ZXIpIHtcbiAgICAgICAgICAgIGxldCBwb3NYID0gcmV0U2NhbGUgKiAodGhpcy5ub2RlLmFuY2hvclggLSAwLjUpICogdGhpcy5ub2RlLndpZHRoO1xuICAgICAgICAgICAgbGV0IHBvc1kgPSByZXRTY2FsZSAqICh0aGlzLm5vZGUuYW5jaG9yWSAtIDAuNSkgKiB0aGlzLm5vZGUuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHBvc1gsIHBvc1kpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMub3JpUG9zKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=