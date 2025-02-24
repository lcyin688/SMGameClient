
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/common/C2FSafeArea.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '695dbslIshGdbVofNL6qfBP', 'C2FSafeArea');
// c2f-framework/component/common/C2FSafeArea.ts

"use strict";
//屏幕适配
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var C2FSafeArea = /** @class */ (function (_super) {
    __extends(C2FSafeArea, _super);
    function C2FSafeArea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.topEnable = false;
        _this.bottomEnable = false;
        return _this;
    }
    C2FSafeArea.prototype.onLoad = function () {
        this.updateArea();
    };
    C2FSafeArea.prototype.updateArea = function () {
        var dH = cc.view.getDesignResolutionSize().height;
        var rH = cc.winSize.height;
        var rW = cc.winSize.width;
        var nH = this.node.height;
        var safeRect = c2f.utils.platform.getSafeAreaR();
        var notchHeight = (rH - safeRect.height) * 0.5;
        // cc.log("notchHeight == ", notchHeight);
        if (cc.sys.os === cc.sys.OS_IOS) {
            notchHeight = notchHeight / 2;
        }
        else {
            notchHeight = notchHeight > 43 && 43 || notchHeight;
        }
        var widget = this.node.getComponent(cc.Widget);
        if (widget) {
            var keyOriT = 'oriTop';
            var keyOriB = 'oriBot';
            if (this.topEnable && widget.isAlignTop) {
                if (!widget[keyOriT]) {
                    widget[keyOriT] = widget.top;
                }
                widget.top = widget[keyOriT] + 2 * notchHeight;
            }
            if (this.bottomEnable && widget.isAlignBottom) {
                if (!widget[keyOriB]) {
                    widget[keyOriB] = widget.bottom;
                }
                widget.bottom = widget[keyOriB] + safeRect.y || 10;
            }
            widget.updateAlignment();
        }
        else {
            var paddingTop = dH * 0.5 - this.node.y;
            this.node.y = safeRect.height * 0.5 - paddingTop - notchHeight;
        }
    };
    C2FSafeArea.prototype.setTopEnable = function (enable) {
        this.topEnable = enable;
        this.updateArea();
    };
    __decorate([
        property()
    ], C2FSafeArea.prototype, "topEnable", void 0);
    __decorate([
        property()
    ], C2FSafeArea.prototype, "bottomEnable", void 0);
    C2FSafeArea = __decorate([
        ccclass,
        menu("c2f/common/C2FSafeArea")
    ], C2FSafeArea);
    return C2FSafeArea;
}(cc.Component));
exports.default = C2FSafeArea;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9jb21tb24vQzJGU2FmZUFyZWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQUEsS0FBOEIsRUFBRSxDQUFDLFVBQVUsRUFBekMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBR2xEO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBdURDO1FBcERHLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFHM0Isa0JBQVksR0FBWSxLQUFLLENBQUM7O0lBaURsQyxDQUFDO0lBL0NhLDRCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTyxnQ0FBVSxHQUFsQjtRQUNJLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDbEQsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFMUIsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDakQsSUFBSSxXQUFXLEdBQUcsQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMvQywwQ0FBMEM7UUFFMUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUM3QixXQUFXLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ0gsV0FBVyxHQUFHLFdBQVcsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQztTQUN2RDtRQUNELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxJQUFJLE1BQU0sRUFBRTtZQUNSLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQztZQUN6QixJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUM7WUFDekIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ2xCLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO2lCQUNoQztnQkFDRCxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDO2FBQ2xEO1lBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ2xCLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2lCQUNuQztnQkFDRCxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN0RDtZQUNELE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUM1QjthQUFNO1lBQ0gsSUFBSSxVQUFVLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxVQUFVLEdBQUcsV0FBVyxDQUFDO1NBQ2xFO0lBQ0wsQ0FBQztJQUVNLGtDQUFZLEdBQW5CLFVBQW9CLE1BQWU7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFsREQ7UUFEQyxRQUFRLEVBQUU7a0RBQ2dCO0lBRzNCO1FBREMsUUFBUSxFQUFFO3FEQUNtQjtJQU5iLFdBQVc7UUFGL0IsT0FBTztRQUNQLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztPQUNWLFdBQVcsQ0F1RC9CO0lBQUQsa0JBQUM7Q0F2REQsQUF1REMsQ0F2RHdDLEVBQUUsQ0FBQyxTQUFTLEdBdURwRDtrQkF2RG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvL+Wxj+W5lemAgumFjVxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbkBtZW51KFwiYzJmL2NvbW1vbi9DMkZTYWZlQXJlYVwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQzJGU2FmZUFyZWEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KClcbiAgICB0b3BFbmFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBwcm9wZXJ0eSgpXG4gICAgYm90dG9tRW5hYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZUFyZWEoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUFyZWEoKSB7XG4gICAgICAgIGxldCBkSCA9IGNjLnZpZXcuZ2V0RGVzaWduUmVzb2x1dGlvblNpemUoKS5oZWlnaHQ7XG4gICAgICAgIGxldCBySCA9IGNjLndpblNpemUuaGVpZ2h0O1xuICAgICAgICBsZXQgclcgPSBjYy53aW5TaXplLndpZHRoO1xuICAgICAgICBsZXQgbkggPSB0aGlzLm5vZGUuaGVpZ2h0O1xuXG4gICAgICAgIGxldCBzYWZlUmVjdCA9IGMyZi51dGlscy5wbGF0Zm9ybS5nZXRTYWZlQXJlYVIoKTtcbiAgICAgICAgbGV0IG5vdGNoSGVpZ2h0ID0gKHJIIC0gc2FmZVJlY3QuaGVpZ2h0KSAqIDAuNTtcbiAgICAgICAgLy8gY2MubG9nKFwibm90Y2hIZWlnaHQgPT0gXCIsIG5vdGNoSGVpZ2h0KTtcblxuICAgICAgICBpZiAoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfSU9TKSB7XG4gICAgICAgICAgICBub3RjaEhlaWdodCA9IG5vdGNoSGVpZ2h0IC8gMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vdGNoSGVpZ2h0ID0gbm90Y2hIZWlnaHQgPiA0MyAmJiA0MyB8fCBub3RjaEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgd2lkZ2V0ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xuICAgICAgICBpZiAod2lkZ2V0KSB7XG4gICAgICAgICAgICBjb25zdCBrZXlPcmlUID0gJ29yaVRvcCc7XG4gICAgICAgICAgICBjb25zdCBrZXlPcmlCID0gJ29yaUJvdCc7XG4gICAgICAgICAgICBpZiAodGhpcy50b3BFbmFibGUgJiYgd2lkZ2V0LmlzQWxpZ25Ub3ApIHtcbiAgICAgICAgICAgICAgICBpZiAoIXdpZGdldFtrZXlPcmlUXSkge1xuICAgICAgICAgICAgICAgICAgICB3aWRnZXRba2V5T3JpVF0gPSB3aWRnZXQudG9wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aWRnZXQudG9wID0gd2lkZ2V0W2tleU9yaVRdICsgMiAqIG5vdGNoSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuYm90dG9tRW5hYmxlICYmIHdpZGdldC5pc0FsaWduQm90dG9tKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF3aWRnZXRba2V5T3JpQl0pIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0W2tleU9yaUJdID0gd2lkZ2V0LmJvdHRvbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmJvdHRvbSA9IHdpZGdldFtrZXlPcmlCXSArIHNhZmVSZWN0LnkgfHwgMTA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aWRnZXQudXBkYXRlQWxpZ25tZW50KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcGFkZGluZ1RvcCA9IGRIICogMC41IC0gdGhpcy5ub2RlLnk7XG4gICAgICAgICAgICB0aGlzLm5vZGUueSA9IHNhZmVSZWN0LmhlaWdodCAqIDAuNSAtIHBhZGRpbmdUb3AgLSBub3RjaEhlaWdodDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRUb3BFbmFibGUoZW5hYmxlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMudG9wRW5hYmxlID0gZW5hYmxlO1xuICAgICAgICB0aGlzLnVwZGF0ZUFyZWEoKTtcbiAgICB9XG5cbn1cbiJdfQ==