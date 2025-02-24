
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/gui/GUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9ae3ckGur1Od7oSTFCIrXfx', 'GUI');
// c2f-framework/gui/GUI.ts

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
exports.GUI = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, menu = _a.menu;
/** 游戏界面屏幕自适应管理 */
var GUI = /** @class */ (function (_super) {
    __extends(GUI, _super);
    function GUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 竖屏设计尺寸 */
        _this.portraitDrz = null;
        /** 横屏设计尺寸 */
        _this.landscapeDrz = null;
        return _this;
    }
    GUI.prototype.onLoad = function () {
        this.init();
    };
    /** 初始化引擎 */
    GUI.prototype.init = function () {
        if (cc.view.getDesignResolutionSize().width > cc.view.getDesignResolutionSize().height) {
            this.landscapeDrz = cc.view.getDesignResolutionSize();
            this.portraitDrz = new cc.Size(this.landscapeDrz.height, this.landscapeDrz.width);
        }
        else {
            this.portraitDrz = cc.view.getDesignResolutionSize();
            this.landscapeDrz = new cc.Size(this.portraitDrz.height, this.portraitDrz.width);
        }
        this.autoSize();
    };
    /** 游戏画布尺寸变化 */
    GUI.prototype.autoSize = function () {
        var dr;
        var resolutionSize = cc.view.getDesignResolutionSize();
        if (resolutionSize.width > resolutionSize.height) {
            dr = this.landscapeDrz;
        }
        else {
            dr = this.portraitDrz;
        }
        var rw = cc.winSize.width;
        var rh = cc.winSize.height;
        var finalW = rw;
        var finalH = rh;
        if ((rw / rh) > (dr.width / dr.height)) {
            // 如果更长，则用定高
            finalH = dr.height;
            finalW = finalH * rw / rh;
            this.portrait = false;
        }
        else {
            // 如果更短，则用定宽
            finalW = dr.width;
            finalH = finalW * rh / rw;
            this.portrait = true;
        }
        // 手工修改canvas和设计分辨率，这样反复调用也能生效。
        cc.view.setDesignResolutionSize(finalW, finalH, cc.ResolutionPolicy.UNKNOWN);
        this.node.width = finalW;
        this.node.height = finalH;
        c2f.log.logView(dr, "设计尺寸");
        c2f.log.logView(cc.winSize, "屏幕尺寸");
    };
    GUI.prototype.fixedWidth = function () {
        var dr;
        var resolutionSize = cc.view.getDesignResolutionSize();
        if (resolutionSize.width > resolutionSize.height) {
            dr = this.landscapeDrz;
        }
        else {
            dr = this.portraitDrz;
        }
        var rw = cc.winSize.width;
        var rh = cc.winSize.height;
        var finalW = rw;
        var finalH = rh;
        finalW = dr.width;
        finalH = finalW * rh / rw;
        this.portrait = true;
        // 手工修改canvas和设计分辨率，这样反复调用也能生效。
        cc.view.setDesignResolutionSize(finalW, finalH, cc.ResolutionPolicy.UNKNOWN);
        this.node.width = finalW;
        this.node.height = finalH;
    };
    GUI = __decorate([
        ccclass
    ], GUI);
    return GUI;
}(cc.Component));
exports.GUI = GUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2d1aS9HVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBb0IsRUFBRSxDQUFDLFVBQVUsRUFBL0IsT0FBTyxhQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBRXhDLGtCQUFrQjtBQUVsQjtJQUF5Qix1QkFBWTtJQUFyQztRQUFBLHFFQXFGQztRQWpGRyxhQUFhO1FBQ0wsaUJBQVcsR0FBWSxJQUFLLENBQUM7UUFDckMsYUFBYTtRQUNMLGtCQUFZLEdBQVksSUFBSyxDQUFDOztJQThFMUMsQ0FBQztJQTVFRyxvQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxZQUFZO0lBQ0Ysa0JBQUksR0FBZDtRQUNJLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUMsTUFBTSxFQUFFO1lBQ3BGLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1lBQ3RELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckY7YUFDSTtZQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1lBQ3JELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEY7UUFFRCxJQUFJLENBQUMs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LENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFwRlEsR0FBRztRQURmLE9BQU87T0FDSyxHQUFHLENBcUZmO0lBQUQsVUFBQztDQXJGRCxBQXFGQyxDQXJGd0IsRUFBRSxDQUFDLFNBQVMsR0FxRnBDO0FBckZZLGtCQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKiog5ri45oiP55WM6Z2i5bGP5bmV6Ieq6YCC5bqU566h55CGICovXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIEdVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgLyoqIOaYr+WQpuS4uuerluWxj+aYvuekuiAqL1xuICAgIHBvcnRyYWl0ITogYm9vbGVhbjtcblxuICAgIC8qKiDnq5blsY/orr7orqHlsLrlr7ggKi9cbiAgICBwcml2YXRlIHBvcnRyYWl0RHJ6OiBjYy5TaXplID0gbnVsbCE7XG4gICAgLyoqIOaoquWxj+iuvuiuoeWwuuWvuCAqL1xuICAgIHByaXZhdGUgbGFuZHNjYXBlRHJ6OiBjYy5TaXplID0gbnVsbCE7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIC8qKiDliJ3lp4vljJblvJXmk44gKi9cbiAgICBwcm90ZWN0ZWQgaW5pdCgpIHtcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RGVzaWduUmVzb2x1dGlvblNpemUoKS53aWR0aCA+IGNjLnZpZXcuZ2V0RGVzaWduUmVzb2x1dGlvblNpemUoKS5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMubGFuZHNjYXBlRHJ6ID0gY2Mudmlldy5nZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSgpO1xuICAgICAgICAgICAgdGhpcy5wb3J0cmFpdERyeiA9IG5ldyBjYy5TaXplKHRoaXMubGFuZHNjYXBlRHJ6LmhlaWdodCwgdGhpcy5sYW5kc2NhcGVEcnoud2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3J0cmFpdERyeiA9IGNjLnZpZXcuZ2V0RGVzaWduUmVzb2x1dGlvblNpemUoKTtcbiAgICAgICAgICAgIHRoaXMubGFuZHNjYXBlRHJ6ID0gbmV3IGNjLlNpemUodGhpcy5wb3J0cmFpdERyei5oZWlnaHQsIHRoaXMucG9ydHJhaXREcnoud2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hdXRvU2l6ZSgpO1xuICAgIH1cblxuICAgIC8qKiDmuLjmiI/nlLvluIPlsLrlr7jlj5jljJYgKi9cbiAgICBwdWJsaWMgYXV0b1NpemUoKSB7XG4gICAgICAgIGxldCBkcjogY2MuU2l6ZTtcbiAgICAgICAgY29uc3QgcmVzb2x1dGlvblNpemUgPSBjYy52aWV3LmdldERlc2lnblJlc29sdXRpb25TaXplKCk7XG4gICAgICAgIGlmIChyZXNvbHV0aW9uU2l6ZS53aWR0aCA+IHJlc29sdXRpb25TaXplLmhlaWdodCkge1xuICAgICAgICAgICAgZHIgPSB0aGlzLmxhbmRzY2FwZURyejtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRyID0gdGhpcy5wb3J0cmFpdERyelxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJ3ID0gY2Mud2luU2l6ZS53aWR0aDtcbiAgICAgICAgbGV0IHJoID0gY2Mud2luU2l6ZS5oZWlnaHQ7XG4gICAgICAgIGxldCBmaW5hbFcgPSBydztcbiAgICAgICAgbGV0IGZpbmFsSCA9IHJoO1xuXG4gICAgICAgIGlmICgocncgLyByaCkgPiAoZHIud2lkdGggLyBkci5oZWlnaHQpKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzmm7Tplb/vvIzliJnnlKjlrprpq5hcbiAgICAgICAgICAgIGZpbmFsSCA9IGRyLmhlaWdodDtcbiAgICAgICAgICAgIGZpbmFsVyA9IGZpbmFsSCAqIHJ3IC8gcmg7XG4gICAgICAgICAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzmm7Tnn63vvIzliJnnlKjlrprlrr1cbiAgICAgICAgICAgIGZpbmFsVyA9IGRyLndpZHRoO1xuICAgICAgICAgICAgZmluYWxIID0gZmluYWxXICogcmggLyBydztcbiAgICAgICAgICAgIHRoaXMucG9ydHJhaXQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5omL5bel5L+u5pS5Y2FudmFz5ZKM6K6+6K6h5YiG6L6o546H77yM6L+Z5qC35Y+N5aSN6LCD55So5Lmf6IO955Sf5pWI44CCXG4gICAgICAgIGNjLnZpZXcuc2V0RGVzaWduUmVzb2x1dGlvblNpemUoZmluYWxXLCBmaW5hbEgsIGNjLlJlc29sdXRpb25Qb2xpY3kuVU5LTk9XTik7XG4gICAgICAgIHRoaXMubm9kZSEud2lkdGggPSBmaW5hbFc7XG4gICAgICAgIHRoaXMubm9kZSEuaGVpZ2h0ID0gZmluYWxIO1xuXG4gICAgICAgIGMyZi5sb2cubG9nVmlldyhkciwgXCLorr7orqHlsLrlr7hcIik7XG4gICAgICAgIGMyZi5sb2cubG9nVmlldyhjYy53aW5TaXplLCBcIuWxj+W5leWwuuWvuFwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZml4ZWRXaWR0aCgpIHtcbiAgICAgICAgbGV0IGRyOiBjYy5TaXplO1xuICAgICAgICBjb25zdCByZXNvbHV0aW9uU2l6ZSA9IGNjLnZpZXcuZ2V0RGVzaWduUmVzb2x1dGlvblNpemUoKTtcbiAgICAgICAgaWYgKHJlc29sdXRpb25TaXplLndpZHRoID4gcmVzb2x1dGlvblNpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICBkciA9IHRoaXMubGFuZHNjYXBlRHJ6O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHIgPSB0aGlzLnBvcnRyYWl0RHJ6XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcncgPSBjYy53aW5TaXplLndpZHRoO1xuICAgICAgICBsZXQgcmggPSBjYy53aW5TaXplLmhlaWdodDtcbiAgICAgICAgbGV0IGZpbmFsVyA9IHJ3O1xuICAgICAgICBsZXQgZmluYWxIID0gcmg7XG4gICAgICAgIGZpbmFsVyA9IGRyLndpZHRoO1xuICAgICAgICBmaW5hbEggPSBmaW5hbFcgKiByaCAvIHJ3O1xuICAgICAgICB0aGlzLnBvcnRyYWl0ID0gdHJ1ZTtcblxuICAgICAgICAvLyDmiYvlt6Xkv67mlLljYW52YXPlkozorr7orqHliIbovqjnjofvvIzov5nmoLflj43lpI3osIPnlKjkuZ/og73nlJ/mlYjjgIJcbiAgICAgICAgY2Mudmlldy5zZXREZXNpZ25SZXNvbHV0aW9uU2l6ZShmaW5hbFcsIGZpbmFsSCwgY2MuUmVzb2x1dGlvblBvbGljeS5VTktOT1dOKTtcbiAgICAgICAgdGhpcy5ub2RlIS53aWR0aCA9IGZpbmFsVztcbiAgICAgICAgdGhpcy5ub2RlIS5oZWlnaHQgPSBmaW5hbEg7XG4gICAgfVxufSJdfQ==