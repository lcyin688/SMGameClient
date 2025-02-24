
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/common/ProgressAdd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '495b16AbyhIxoIvWp7YkMC9', 'ProgressAdd');
// c2f-framework/component/common/ProgressAdd.ts

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
exports.ProgressAdd = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var ProgressAdd = /** @class */ (function (_super) {
    __extends(ProgressAdd, _super);
    function ProgressAdd() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onceDur = 1;
        /** 进度控件 */
        _this.curBar = null;
        /** 真实进度 */
        _this.realValue = null;
        return _this;
    }
    ProgressAdd.prototype.onLoad = function () {
        this.curBar = this.node.getComponent(cc.ProgressBar);
    };
    ProgressAdd.prototype.stopAnima = function () {
        cc.Tween.stopAllByTarget(this.node);
        if (!isNaN(this.realValue)) {
            this.curBar.progress = this.realValue;
        }
    };
    ProgressAdd.prototype.setProgress = function (value, fullTms, playAnima) {
        this.stopAnima();
        this.realValue = value;
        if (playAnima) {
            this.playAnima(value, fullTms);
        }
        else {
            this.curBar.progress = value;
        }
    };
    ProgressAdd.prototype.playAnima = function (value, fullTms) {
        if (fullTms > 0) {
            var restDur = (1 - this.curBar.progress) * this.onceDur;
            var newpDur = value * this.onceDur;
            cc.tween(this.curBar)
                .to(restDur, { progress: 1 })
                .sequence(cc.tween(this.curBar).set({ progress: 0 }), cc.tween(this.curBar).to(this.onceDur, { progress: 1 }))
                .repeat(fullTms - 1)
                .set({ progress: 0 })
                .to(newpDur, { progress: value })
                .start();
        }
        else {
            var needDur = (value - this.curBar.progress) * this.onceDur;
            cc.tween(this.curBar)
                .to(needDur, { progress: value })
                .start();
        }
    };
    __decorate([
        property({ serializable: true })
    ], ProgressAdd.prototype, "onceDur", void 0);
    ProgressAdd = __decorate([
        ccclass,
        menu('c2f/common/ProgressAdd')
    ], ProgressAdd);
    return ProgressAdd;
}(cc.Component));
exports.ProgressAdd = ProgressAdd;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9jb21tb24vUHJvZ3Jlc3NBZGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBOEIsRUFBRSxDQUFDLFVBQVUsRUFBekMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBSWxEO0lBQWlDLCtCQUFZO0lBQTdDO1FBQUEscUVBbURDO1FBaERXLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFFNUIsV0FBVztRQUNILFlBQU0sR0FBbUIsSUFBSSxDQUFDO1FBQ3RDLFdBQVc7UUFDSCxlQUFTLEdBQVcsSUFBSSxDQUFDOztJQTJDckMsQ0FBQztJQXpDRyw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVPLCtCQUFTLEdBQWpCO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDekM7SUFDTCxDQUFDO0lBRU0saUNBQVcsR0FBbEIsVUFBbUIsS0FBYSxFQUFFLE9BQWUsRUFBRSxTQUFrQjtRQUNqRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxTQUFTLEVBQUU7WUFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNsQzthQUFNO1lBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQztJQUVPLCtCQUFTLEdBQWpCLFVBQWtCLEtBQWEsRUFBRSxPQUFlO1FBQzVDLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRTtZQUNiLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUN4RCxJQUFJLE9BQU8sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNuQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQ2hCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQzVCLFFBQVEsQ0FDTCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFDMUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDM0QsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7aUJBQ25CLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDcEIsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztpQkFDaEMsS0FBSyxFQUFFLENBQUM7U0FDaEI7YUFBTTtZQUNILElBQUksT0FBTyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM1RCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQ2hCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7aUJBQ2hDLEtBQUssRUFBRSxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQS9DRDtRQURDLFFBQVEsQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQztnREFDTDtJQUhuQixXQUFXO1FBRnZCLE9BQU87UUFDUCxJQUFJLENBQUMsd0JBQXdCLENBQUM7T0FDbEIsV0FBVyxDQW1EdkI7SUFBRCxrQkFBQztDQW5ERCxBQW1EQyxDQW5EZ0MsRUFBRSxDQUFDLFNBQVMsR0FtRDVDO0FBbkRZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbkBtZW51KCdjMmYvY29tbW9uL1Byb2dyZXNzQWRkJylcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0FkZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoeyBzZXJpYWxpemFibGU6IHRydWUgfSlcbiAgICBwcml2YXRlIG9uY2VEdXI6IG51bWJlciA9IDE7XG5cbiAgICAvKiog6L+b5bqm5o6n5Lu2ICovXG4gICAgcHJpdmF0ZSBjdXJCYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcbiAgICAvKiog55yf5a6e6L+b5bqmICovXG4gICAgcHJpdmF0ZSByZWFsVmFsdWU6IG51bWJlciA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuY3VyQmFyID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0Jhcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdG9wQW5pbWEoKSB7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGUpO1xuICAgICAgICBpZiAoIWlzTmFOKHRoaXMucmVhbFZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5jdXJCYXIucHJvZ3Jlc3MgPSB0aGlzLnJlYWxWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQcm9ncmVzcyh2YWx1ZTogbnVtYmVyLCBmdWxsVG1zOiBudW1iZXIsIHBsYXlBbmltYTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnN0b3BBbmltYSgpO1xuICAgICAgICB0aGlzLnJlYWxWYWx1ZSA9IHZhbHVlO1xuICAgICAgICBpZiAocGxheUFuaW1hKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlBbmltYSh2YWx1ZSwgZnVsbFRtcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1ckJhci5wcm9ncmVzcyA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwbGF5QW5pbWEodmFsdWU6IG51bWJlciwgZnVsbFRtczogbnVtYmVyKSB7XG4gICAgICAgIGlmIChmdWxsVG1zID4gMCkge1xuICAgICAgICAgICAgbGV0IHJlc3REdXIgPSAoMSAtIHRoaXMuY3VyQmFyLnByb2dyZXNzKSAqIHRoaXMub25jZUR1cjtcbiAgICAgICAgICAgIGxldCBuZXdwRHVyID0gdmFsdWUgKiB0aGlzLm9uY2VEdXI7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmN1ckJhcilcbiAgICAgICAgICAgICAgICAudG8ocmVzdER1ciwgeyBwcm9ncmVzczogMSB9KVxuICAgICAgICAgICAgICAgIC5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jdXJCYXIpLnNldCh7IHByb2dyZXNzOiAwIH0pLFxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmN1ckJhcikudG8odGhpcy5vbmNlRHVyLCB7IHByb2dyZXNzOiAxIH0pKVxuICAgICAgICAgICAgICAgIC5yZXBlYXQoZnVsbFRtcyAtIDEpXG4gICAgICAgICAgICAgICAgLnNldCh7IHByb2dyZXNzOiAwIH0pXG4gICAgICAgICAgICAgICAgLnRvKG5ld3BEdXIsIHsgcHJvZ3Jlc3M6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmVlZER1ciA9ICh2YWx1ZSAtIHRoaXMuY3VyQmFyLnByb2dyZXNzKSAqIHRoaXMub25jZUR1cjtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY3VyQmFyKVxuICAgICAgICAgICAgICAgIC50byhuZWVkRHVyLCB7IHByb2dyZXNzOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==