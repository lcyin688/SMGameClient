"use strict";
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