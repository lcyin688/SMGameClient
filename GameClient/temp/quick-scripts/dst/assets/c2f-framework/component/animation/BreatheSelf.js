
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/animation/BreatheSelf.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4680dHTZ1ZEoLxkmjS3CSfo', 'BreatheSelf');
// c2f-framework/component/animation/BreatheSelf.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var BreatheSelf = /** @class */ (function (_super) {
    __extends(BreatheSelf, _super);
    function BreatheSelf() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lessenDur = 1;
        _this.lessenValue = 0.8;
        _this.magnifyDur = 2;
        _this.magnifyValue = 1.2;
        _this.playOnLoad = true;
        return _this;
    }
    BreatheSelf.prototype.onLoad = function () {
    };
    BreatheSelf.prototype.start = function () {
        var _this = this;
        if (this.playOnLoad) {
            this.scheduleOnce(function () {
                _this.playAnima();
            });
        }
    };
    BreatheSelf.prototype.stopAnima = function () {
        cc.Tween.stopAllByTarget(this.node);
        this.node.setScale(1, 1, 1);
    };
    BreatheSelf.prototype.playAnima = function () {
        cc.Tween.stopAllByTarget(this.node);
        this.node.setScale(this.magnifyValue, this.magnifyValue, 1);
        var twSub1 = cc.tween(this.node).to(this.lessenDur, { scale: this.lessenValue });
        var twSub2 = cc.tween(this.node).to(this.magnifyDur, { scale: this.magnifyValue });
        cc.tween(this.node)
            .sequence(twSub1, twSub2)
            .repeatForever()
            .start();
    };
    __decorate([
        property({ serializable: true, tooltip: "缩小所用时间" })
    ], BreatheSelf.prototype, "lessenDur", void 0);
    __decorate([
        property({ serializable: true, tooltip: "缩小尺寸" })
    ], BreatheSelf.prototype, "lessenValue", void 0);
    __decorate([
        property({ serializable: true, tooltip: "放大所用时间" })
    ], BreatheSelf.prototype, "magnifyDur", void 0);
    __decorate([
        property({ serializable: true, tooltip: "放大尺寸" })
    ], BreatheSelf.prototype, "magnifyValue", void 0);
    __decorate([
        property({ serializable: true, tooltip: "自动播放" })
    ], BreatheSelf.prototype, "playOnLoad", void 0);
    BreatheSelf = __decorate([
        ccclass,
        menu('c2f/animation/BreatheSelf')
    ], BreatheSelf);
    return BreatheSelf;
}(cc.Component));
exports.default = BreatheSelf;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9hbmltYXRpb24vQnJlYXRoZVNlbGYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUE4QixFQUFFLENBQUMsVUFBVSxFQUF6QyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUM7QUFHbEQ7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUEyQ0M7UUF4Q1csZUFBUyxHQUFXLENBQUMsQ0FBQztRQUd0QixpQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUcxQixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUd2QixrQkFBWSxHQUFXLEdBQUcsQ0FBQztRQUczQixnQkFBVSxHQUFZLElBQUksQ0FBQzs7SUE0QnZDLENBQUM7SUExQkcsNEJBQU0sR0FBTjtJQUNBLENBQUM7SUFFRCwyQkFBSyxHQUFMO1FBQUEsaUJBTUM7UUFMRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUE7U0FDTDtJQUNMLENBQUM7SUFFTSwrQkFBUyxHQUFoQjtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTSwrQkFBUyxHQUFoQjtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDakYsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDbkYsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7YUFDeEIsYUFBYSxFQUFFO2FBQ2YsS0FBSyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQXZDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO2tEQUN0QjtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO29EQUNoQjtJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO21EQUNyQjtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO3FEQUNmO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7bURBQ2Y7SUFmbEIsV0FBVztRQUYvQixPQUFPO1FBQ1AsSUFBSSxDQUFDLDJCQUEyQixDQUFDO09BQ2IsV0FBVyxDQTJDL0I7SUFBRCxrQkFBQztDQTNDRCxBQTJDQyxDQTNDd0MsRUFBRSxDQUFDLFNBQVMsR0EyQ3BEO2tCQTNDb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIG1lbnUgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuQG1lbnUoJ2MyZi9hbmltYXRpb24vQnJlYXRoZVNlbGYnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJlYXRoZVNlbGYgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHsgc2VyaWFsaXphYmxlOiB0cnVlLCB0b29sdGlwOiBcIue8qeWwj+aJgOeUqOaXtumXtFwiIH0pXG4gICAgcHJpdmF0ZSBsZXNzZW5EdXI6IG51bWJlciA9IDE7XG5cbiAgICBAcHJvcGVydHkoeyBzZXJpYWxpemFibGU6IHRydWUsIHRvb2x0aXA6IFwi57yp5bCP5bC65a+4XCIgfSlcbiAgICBwcml2YXRlIGxlc3NlblZhbHVlOiBudW1iZXIgPSAwLjg7XG5cbiAgICBAcHJvcGVydHkoeyBzZXJpYWxpemFibGU6IHRydWUsIHRvb2x0aXA6IFwi5pS+5aSn5omA55So5pe26Ze0XCIgfSlcbiAgICBwcml2YXRlIG1hZ25pZnlEdXI6IG51bWJlciA9IDI7XG5cbiAgICBAcHJvcGVydHkoeyBzZXJpYWxpemFibGU6IHRydWUsIHRvb2x0aXA6IFwi5pS+5aSn5bC65a+4XCIgfSlcbiAgICBwcml2YXRlIG1hZ25pZnlWYWx1ZTogbnVtYmVyID0gMS4yO1xuXG4gICAgQHByb3BlcnR5KHsgc2VyaWFsaXphYmxlOiB0cnVlLCB0b29sdGlwOiBcIuiHquWKqOaSreaUvlwiIH0pXG4gICAgcHJpdmF0ZSBwbGF5T25Mb2FkOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheU9uTG9hZCkge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0b3BBbmltYSgpIHtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZSk7XG4gICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZSgxLCAxLCAxKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxheUFuaW1hKCkge1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5ub2RlKTtcbiAgICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKHRoaXMubWFnbmlmeVZhbHVlLCB0aGlzLm1hZ25pZnlWYWx1ZSwgMSk7XG4gICAgICAgIGxldCB0d1N1YjEgPSBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKHRoaXMubGVzc2VuRHVyLCB7IHNjYWxlOiB0aGlzLmxlc3NlblZhbHVlIH0pO1xuICAgICAgICBsZXQgdHdTdWIyID0gY2MudHdlZW4odGhpcy5ub2RlKS50byh0aGlzLm1hZ25pZnlEdXIsIHsgc2NhbGU6IHRoaXMubWFnbmlmeVZhbHVlIH0pO1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAuc2VxdWVuY2UodHdTdWIxLCB0d1N1YjIpXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcigpXG4gICAgICAgICAgICAuc3RhcnQoKVxuICAgIH1cbn0iXX0=