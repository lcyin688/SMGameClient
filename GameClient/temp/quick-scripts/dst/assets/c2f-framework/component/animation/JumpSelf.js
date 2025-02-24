
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/animation/JumpSelf.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cfbd3YNkF9FMJ5N/GM4LDfG', 'JumpSelf');
// c2f-framework/component/animation/JumpSelf.ts

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
exports.JumpSelf = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var JumpSelf = /** @class */ (function (_super) {
    __extends(JumpSelf, _super);
    function JumpSelf() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scaleMin = cc.v2(0.6, 0.6);
        _this.scaleMax = cc.v2(1.5, 1.5);
        _this.intervalDur = 1;
        _this.jumpHeight = 50;
        _this.stepDur = 0.1;
        _this.playOnLoad = true;
        return _this;
    }
    JumpSelf.prototype.onLoad = function () {
    };
    JumpSelf.prototype.start = function () {
        var _this = this;
        if (this.playOnLoad) {
            this.scheduleOnce(function () {
                _this.playAnima();
            });
        }
    };
    JumpSelf.prototype.resetState = function () {
        this.node.setScale(1, 1, 1);
        this.node.setPosition(0, 0, 0);
    };
    JumpSelf.prototype.stopAnima = function () {
        cc.Tween.stopAllByTarget(this.node);
        this.resetState();
    };
    JumpSelf.prototype.playAnima = function () {
        this.stopAnima();
        var twSub1 = cc.tween(this.node)
            .to(this.stepDur, { scaleX: this.scaleMax.x, scaleY: this.scaleMin.y })
            .to(this.stepDur, { scaleX: this.scaleMin.x, scaleY: this.scaleMax.y })
            .to(this.stepDur, { position: cc.v3(0, this.jumpHeight, 0), scale: 1 })
            .to(this.stepDur, { position: cc.v3(0, 0, 0), scaleX: 1, scaleY: this.scaleMax.y })
            .to(this.stepDur, { scaleX: this.scaleMax.x, scaleY: this.scaleMin.y })
            .to(this.stepDur, { scale: 1 });
        var twSub2 = cc.tween(this.node).delay(this.intervalDur);
        cc.tween(this.node)
            .sequence(twSub1, twSub2)
            .repeatForever()
            .start();
    };
    __decorate([
        property({ tooltip: "最小缩放" })
    ], JumpSelf.prototype, "scaleMin", void 0);
    __decorate([
        property({ tooltip: "最大缩放" })
    ], JumpSelf.prototype, "scaleMax", void 0);
    __decorate([
        property({ serializable: true, tooltip: "动画间隔" })
    ], JumpSelf.prototype, "intervalDur", void 0);
    __decorate([
        property({ serializable: true, tooltip: "跳跃高度" })
    ], JumpSelf.prototype, "jumpHeight", void 0);
    __decorate([
        property({ serializable: true, tooltip: "分步执行时长" })
    ], JumpSelf.prototype, "stepDur", void 0);
    __decorate([
        property({ serializable: true, tooltip: "自动播放" })
    ], JumpSelf.prototype, "playOnLoad", void 0);
    JumpSelf = __decorate([
        ccclass,
        menu('c2f/animation/JumpSelf')
    ], JumpSelf);
    return JumpSelf;
}(cc.Component));
exports.JumpSelf = JumpSelf;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9hbmltYXRpb24vSnVtcFNlbGYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBOEIsRUFBRSxDQUFDLFVBQVUsRUFBekMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBR2xEO0lBQThCLDRCQUFZO0lBQTFDO1FBQUEscUVBd0RDO1FBckRXLGNBQVEsR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUdwQyxjQUFRLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFHcEMsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFHeEIsZ0JBQVUsR0FBVyxFQUFFLENBQUM7UUFHeEIsYUFBTyxHQUFXLEdBQUcsQ0FBQztRQUd0QixnQkFBVSxHQUFZLElBQUksQ0FBQzs7SUFzQ3ZDLENBQUM7SUFwQ0cseUJBQU0sR0FBTjtJQUNBLENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBQUEsaUJBTUM7UUFMRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUE7U0FDTDtJQUNMLENBQUM7SUFFTyw2QkFBVSxHQUFsQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sNEJBQVMsR0FBaEI7UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTSw0QkFBUyxHQUFoQjtRQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDM0IsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDdEUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDdEUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDdEUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDbEYsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDdEUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNuQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO2FBQ3hCLGFBQWEsRUFBRTthQUNmLEtBQUssRUFBRSxDQUFBO0lBQ2hCLENBQUM7SUFwREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7OENBQ2M7SUFHNUM7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7OENBQ2M7SUFHNUM7UUFEQyxRQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQztpREFDbEI7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQztnREFDbEI7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQzs2Q0FDdEI7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQztnREFDZjtJQWxCMUIsUUFBUTtRQUZwQixPQUFPO1FBQ1AsSUFBSSxDQUFDLHdCQUF3QixDQUFDO09BQ2xCLFFBQVEsQ0F3RHBCO0lBQUQsZUFBQztDQXhERCxBQXdEQyxDQXhENkIsRUFBRSxDQUFDLFNBQVMsR0F3RHpDO0FBeERZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5AbWVudSgnYzJmL2FuaW1hdGlvbi9KdW1wU2VsZicpXG5leHBvcnQgY2xhc3MgSnVtcFNlbGYgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCLmnIDlsI/nvKnmlL5cIiB9KVxuICAgIHByaXZhdGUgc2NhbGVNaW46IGNjLlZlYzIgPSBjYy52MigwLjYsIDAuNik7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIuacgOWkp+e8qeaUvlwiIH0pXG4gICAgcHJpdmF0ZSBzY2FsZU1heDogY2MuVmVjMiA9IGNjLnYyKDEuNSwgMS41KTtcblxuICAgIEBwcm9wZXJ0eSh7IHNlcmlhbGl6YWJsZTogdHJ1ZSwgdG9vbHRpcDogXCLliqjnlLvpl7TpmpRcIiB9KVxuICAgIHByaXZhdGUgaW50ZXJ2YWxEdXI6IG51bWJlciA9IDE7XG5cbiAgICBAcHJvcGVydHkoeyBzZXJpYWxpemFibGU6IHRydWUsIHRvb2x0aXA6IFwi6Lez6LeD6auY5bqmXCIgfSlcbiAgICBwcml2YXRlIGp1bXBIZWlnaHQ6IG51bWJlciA9IDUwO1xuXG4gICAgQHByb3BlcnR5KHsgc2VyaWFsaXphYmxlOiB0cnVlLCB0b29sdGlwOiBcIuWIhuatpeaJp+ihjOaXtumVv1wiIH0pXG4gICAgcHJpdmF0ZSBzdGVwRHVyOiBudW1iZXIgPSAwLjE7XG5cbiAgICBAcHJvcGVydHkoeyBzZXJpYWxpemFibGU6IHRydWUsIHRvb2x0aXA6IFwi6Ieq5Yqo5pKt5pS+XCIgfSlcbiAgICBwcml2YXRlIHBsYXlPbkxvYWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy5wbGF5T25Mb2FkKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWEoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0U3RhdGUoKSB7XG4gICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZSgxLCAxLCAxKTtcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKDAsIDAsIDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdG9wQW5pbWEoKSB7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLnJlc2V0U3RhdGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxheUFuaW1hKCkge1xuICAgICAgICB0aGlzLnN0b3BBbmltYSgpO1xuICAgICAgICBsZXQgdHdTdWIxID0gY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnRvKHRoaXMuc3RlcER1ciwgeyBzY2FsZVg6IHRoaXMuc2NhbGVNYXgueCwgc2NhbGVZOiB0aGlzLnNjYWxlTWluLnkgfSlcbiAgICAgICAgICAgIC50byh0aGlzLnN0ZXBEdXIsIHsgc2NhbGVYOiB0aGlzLnNjYWxlTWluLngsIHNjYWxlWTogdGhpcy5zY2FsZU1heC55IH0pXG4gICAgICAgICAgICAudG8odGhpcy5zdGVwRHVyLCB7IHBvc2l0aW9uOiBjYy52MygwLCB0aGlzLmp1bXBIZWlnaHQsIDApLCBzY2FsZTogMSB9KVxuICAgICAgICAgICAgLnRvKHRoaXMuc3RlcER1ciwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCwgMCksIHNjYWxlWDogMSwgc2NhbGVZOiB0aGlzLnNjYWxlTWF4LnkgfSlcbiAgICAgICAgICAgIC50byh0aGlzLnN0ZXBEdXIsIHsgc2NhbGVYOiB0aGlzLnNjYWxlTWF4LngsIHNjYWxlWTogdGhpcy5zY2FsZU1pbi55IH0pXG4gICAgICAgICAgICAudG8odGhpcy5zdGVwRHVyLCB7IHNjYWxlOiAxIH0pXG4gICAgICAgIGxldCB0d1N1YjIgPSBjYy50d2Vlbih0aGlzLm5vZGUpLmRlbGF5KHRoaXMuaW50ZXJ2YWxEdXIpO1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAuc2VxdWVuY2UodHdTdWIxLCB0d1N1YjIpXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcigpXG4gICAgICAgICAgICAuc3RhcnQoKVxuICAgIH1cbn0iXX0=