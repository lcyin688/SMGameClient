
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/animation/MoveSelf.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80988OixDNA46U4A8bY2fkv', 'MoveSelf');
// c2f-framework/component/animation/MoveSelf.ts

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
exports.MoveSelf = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var MoveSelf = /** @class */ (function (_super) {
    __extends(MoveSelf, _super);
    function MoveSelf() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = cc.v2(0, 0);
        _this.playOnLoad = true;
        //播放
        _this.isPlaying = false;
        return _this;
    }
    MoveSelf.prototype.start = function () {
        var _this = this;
        if (this.playOnLoad) {
            this.scheduleOnce(function () {
                _this.isPlaying = true;
            });
        }
    };
    MoveSelf.prototype.startPlay = function () {
        this.isPlaying = true;
    };
    MoveSelf.prototype.update = function (dt) {
        if (!this.isPlaying) {
            return;
        }
        var beMoveX = this.speed.x != 0;
        var beMoveY = this.speed.y != 0;
        if (beMoveX) {
            this.node.x += this.speed.x * dt;
        }
        if (beMoveY) {
            this.node.y += this.speed.y * dt;
        }
        var panel = this.node.parent;
        if (beMoveX) {
            if (this.node.x < 0) {
                var rightX = this.node.x + this.node.width * (1 - this.node.anchorX) * this.node.scaleX;
                if (rightX < 0) {
                    this.node.x = panel.width * (1 - panel.anchorX) + this.node.width * this.node.anchorX * this.node.scaleX;
                }
            }
            if (this.node.x > panel.width) {
                var leftX = this.node.x - this.node.width * this.node.anchorX * this.node.scaleX;
                if (leftX > panel.width) {
                    this.node.x = -panel.width * panel.anchorX - this.node.width * (1 - this.node.anchorX) * this.node.scaleX;
                }
            }
        }
        if (beMoveY) {
            if (this.node.y < 0) {
                var topY = this.node.y + this.node.height * (1 - this.node.anchorY) * this.node.scaleY;
                if (topY < 0) {
                    this.node.y = panel.height * (1 - panel.anchorY) + this.node.height * this.node.anchorY * this.node.scaleY;
                }
            }
            if (this.node.y > panel.height) {
                var botY = this.node.y - this.node.height * this.node.anchorY * this.node.scaleY;
                if (botY > panel.height) {
                    this.node.y = -panel.height * panel.anchorY - this.node.height * (1 - this.node.anchorY) * this.node.scaleY;
                }
            }
        }
    };
    __decorate([
        property({ tooltip: "移动速度" })
    ], MoveSelf.prototype, "speed", void 0);
    __decorate([
        property({ serializable: true, tooltip: "自动播放" })
    ], MoveSelf.prototype, "playOnLoad", void 0);
    MoveSelf = __decorate([
        ccclass,
        menu('c2f/animation/MoveSelf')
    ], MoveSelf);
    return MoveSelf;
}(cc.Component));
exports.MoveSelf = MoveSelf;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9hbmltYXRpb24vTW92ZVNlbGYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBOEIsRUFBRSxDQUFDLFVBQVUsRUFBekMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBR2xEO0lBQThCLDRCQUFZO0lBQTFDO1FBQUEscUVBbUVDO1FBaEVXLFdBQUssR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUc3QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUVuQyxJQUFJO1FBQ0ksZUFBUyxHQUFZLEtBQUssQ0FBQzs7SUEwRHZDLENBQUM7SUF4RGEsd0JBQUssR0FBZjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQUE7U0FDTDtJQUNMLENBQUM7SUFFTSw0QkFBUyxHQUFoQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFHUyx5QkFBTSxHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLE9BQU87U0FDVjtRQUVELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxPQUFPLEVBQUU7WUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FB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QUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQy9HO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUEvREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7MkNBQ087SUFHckM7UUFEQyxRQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQztnREFDZjtJQU4xQixRQUFRO1FBRnBCLE9BQU87UUFDUCxJQUFJLENBQUMsd0JBQXdCLENBQUM7T0FDbEIsUUFBUSxDQW1FcEI7SUFBRCxlQUFDO0NBbkVELEFBbUVDLENBbkU2QixFQUFFLENBQUMsU0FBUyxHQW1FekM7QUFuRVksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbkBtZW51KCdjMmYvYW5pbWF0aW9uL01vdmVTZWxmJylcbmV4cG9ydCBjbGFzcyBNb3ZlU2VsZiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIuenu+WKqOmAn+W6plwiIH0pXG4gICAgcHJpdmF0ZSBzcGVlZDogY2MuVmVjMiA9IGNjLnYyKDAsIDApO1xuXG4gICAgQHByb3BlcnR5KHsgc2VyaWFsaXphYmxlOiB0cnVlLCB0b29sdGlwOiBcIuiHquWKqOaSreaUvlwiIH0pXG4gICAgcHJpdmF0ZSBwbGF5T25Mb2FkOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIC8v5pKt5pS+XG4gICAgcHJpdmF0ZSBpc1BsYXlpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucGxheU9uTG9hZCkge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnRQbGF5KCkge1xuICAgICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUGxheWluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJlTW92ZVggPSB0aGlzLnNwZWVkLnggIT0gMDtcbiAgICAgICAgbGV0IGJlTW92ZVkgPSB0aGlzLnNwZWVkLnkgIT0gMDtcbiAgICAgICAgaWYgKGJlTW92ZVgpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQueCAqIGR0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChiZU1vdmVZKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLnNwZWVkLnkgKiBkdDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYW5lbCA9IHRoaXMubm9kZS5wYXJlbnQ7XG4gICAgICAgIGlmIChiZU1vdmVYKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLnggPCAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJpZ2h0WCA9IHRoaXMubm9kZS54ICsgdGhpcy5ub2RlLndpZHRoICogKDEgLSB0aGlzLm5vZGUuYW5jaG9yWCkgKiB0aGlzLm5vZGUuc2NhbGVYO1xuICAgICAgICAgICAgICAgIGlmIChyaWdodFggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ID0gcGFuZWwud2lkdGggKiAoMSAtIHBhbmVsLmFuY2hvclgpICsgdGhpcy5ub2RlLndpZHRoICogdGhpcy5ub2RlLmFuY2hvclggKiB0aGlzLm5vZGUuc2NhbGVYO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUueCA+IHBhbmVsLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxlZnRYID0gdGhpcy5ub2RlLnggLSB0aGlzLm5vZGUud2lkdGggKiB0aGlzLm5vZGUuYW5jaG9yWCAqIHRoaXMubm9kZS5zY2FsZVg7XG4gICAgICAgICAgICAgICAgaWYgKGxlZnRYID4gcGFuZWwud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggPSAtcGFuZWwud2lkdGggKiBwYW5lbC5hbmNob3JYIC0gdGhpcy5ub2RlLndpZHRoICogKDEgLSB0aGlzLm5vZGUuYW5jaG9yWCkgKiB0aGlzLm5vZGUuc2NhbGVYO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYmVNb3ZlWSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS55IDwgMCkge1xuICAgICAgICAgICAgICAgIGxldCB0b3BZID0gdGhpcy5ub2RlLnkgKyB0aGlzLm5vZGUuaGVpZ2h0ICogKDEgLSB0aGlzLm5vZGUuYW5jaG9yWSkgKiB0aGlzLm5vZGUuc2NhbGVZO1xuICAgICAgICAgICAgICAgIGlmICh0b3BZIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSA9IHBhbmVsLmhlaWdodCAqICgxIC0gcGFuZWwuYW5jaG9yWSkgKyB0aGlzLm5vZGUuaGVpZ2h0ICogdGhpcy5ub2RlLmFuY2hvclkgKiB0aGlzLm5vZGUuc2NhbGVZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUueSA+IHBhbmVsLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIGxldCBib3RZID0gdGhpcy5ub2RlLnkgLSB0aGlzLm5vZGUuaGVpZ2h0ICogdGhpcy5ub2RlLmFuY2hvclkgKiB0aGlzLm5vZGUuc2NhbGVZO1xuICAgICAgICAgICAgICAgIGlmIChib3RZID4gcGFuZWwuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ID0gLXBhbmVsLmhlaWdodCAqIHBhbmVsLmFuY2hvclkgLSB0aGlzLm5vZGUuaGVpZ2h0ICogKDEgLSB0aGlzLm5vZGUuYW5jaG9yWSkgKiB0aGlzLm5vZGUuc2NhbGVZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0=