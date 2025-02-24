
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/ui/button/ButtonChildGray.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19687AwHRhAjoLcsGZTr1YH', 'ButtonChildGray');
// c2f-framework/component/ui/button/ButtonChildGray.ts

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
var ButtonHack_1 = require("../../../hack/ButtonHack");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, requireComponent = _a.requireComponent, executeInEditMode = _a.executeInEditMode;
/**
 * 根据button组件过渡状态，置灰子节点
 */
var ButtonChildGray = /** @class */ (function (_super) {
    __extends(ButtonChildGray, _super);
    function ButtonChildGray() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.relatedNodes = [];
        _this.normalMaterial = null;
        _this.grayMaterial = null;
        return _this;
    }
    ButtonChildGray.prototype.onLoad = function () {
        this.node.on(ButtonHack_1.ButtonHackEvent.STATE_CHANGE, this.onStateChange, this);
    };
    ButtonChildGray.prototype.onStateChange = function (state) {
        var _this = this;
        if (state === ButtonHack_1.ButtonState.DISABLED) {
            if (!this.grayMaterial) {
                this.grayMaterial = cc.Material.getBuiltinMaterial("2d-gray-sprite");
            }
            var cb = function (n) {
                var rc = n.getComponent(cc.RenderComponent);
                if (rc && (rc instanceof cc.Sprite || rc instanceof cc.Label)) {
                    rc.setMaterial(0, _this.grayMaterial);
                }
            };
            c2f.utils.view.nodeRecursive(this.node.children, cb);
            c2f.utils.view.nodeRecursive(this.relatedNodes, cb);
        }
        else {
            if (!this.normalMaterial) {
                this.normalMaterial = cc.Material.getBuiltinMaterial("2d-sprite");
            }
            var cb = function (n) {
                var rc = n.getComponent(cc.RenderComponent);
                if (rc && (rc instanceof cc.Sprite || rc instanceof cc.Label)) {
                    rc.setMaterial(0, _this.normalMaterial);
                }
            };
            c2f.utils.view.nodeRecursive(this.node.children, cb);
            c2f.utils.view.nodeRecursive(this.relatedNodes, cb);
        }
    };
    __decorate([
        property({ type: cc.Node, tooltip: CC_DEV && "需要同步置灰的关联节点" })
    ], ButtonChildGray.prototype, "relatedNodes", void 0);
    __decorate([
        property(cc.Material)
    ], ButtonChildGray.prototype, "normalMaterial", void 0);
    __decorate([
        property(cc.Material)
    ], ButtonChildGray.prototype, "grayMaterial", void 0);
    ButtonChildGray = __decorate([
        ccclass,
        executeInEditMode,
        requireComponent(cc.Button),
        menu("c2f/UI/ButtonChildGray")
    ], ButtonChildGray);
    return ButtonChildGray;
}(cc.Component));
exports.default = ButtonChildGray;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC91aS9idXR0b24vQnV0dG9uQ2hpbGRHcmF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUF3RTtBQUVsRSxJQUFBLEtBQW1FLEVBQUUsQ0FBQyxVQUFVLEVBQTlFLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBQSxFQUFFLGdCQUFnQixzQkFBQSxFQUFFLGlCQUFpQix1QkFBa0IsQ0FBQztBQUV2Rjs7R0FFRztBQUtIO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBcUNDO1FBbkN5RSxrQkFBWSxHQUFjLEVBQUUsQ0FBQztRQUNyRSxvQkFBYyxHQUFnQixJQUFJLENBQUM7UUFDbkMsa0JBQVksR0FBZ0IsSUFBSSxDQUFDOztJQWlDbkUsQ0FBQztJQS9CYSxnQ0FBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLDRCQUFlLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVPLHVDQUFhLEdBQXJCLFVBQXNCLEtBQWtCO1FBQXhDLGlCQTBCQztRQXpCRyxJQUFJLEtBQUssS0FBSyx3QkFBVyxDQUFDLFFBQVEsRUFBRTtZQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDeEU7WUFDRCxJQUFJLEVBQUUsR0FBRyxVQUFDLENBQVU7Z0JBQ2hCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsTUFBTSxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzNELEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDeEM7WUFDTCxDQUFDLENBQUM7WUFDRixHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDckQsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDdkQ7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDckU7WUFDRCxJQUFJLEVBQUUsR0FBRyxVQUFDLENBQVU7Z0JBQ2hCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsTUFBTSxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzNELEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztpQkFDMUM7WUFDTCxDQUFDLENBQUM7WUFDRixHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDckQsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDdkQ7SUFDTCxDQUFDO0lBbEM4RDtRQUE5RCxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxJQUFJLGFBQWEsRUFBRSxDQUFDO3lEQUFxQztJQUM1RTtRQUF0QixRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzsyREFBMkM7SUFDMUM7UUFBdEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7eURBQXlDO0lBSjlDLGVBQWU7UUFKbkMsT0FBTztRQUNQLGlCQUFpQjtRQUNqQixnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztPQUNWLGVBQWUsQ0FxQ25DO0lBQUQsc0JBQUM7Q0FyQ0QsQUFxQ0MsQ0FyQzRDLEVBQUUsQ0FBQyxTQUFTLEdBcUN4RDtrQkFyQ29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b25IYWNrRXZlbnQsIEJ1dHRvblN0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL2hhY2svQnV0dG9uSGFja1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51LCByZXF1aXJlQ29tcG9uZW50LCBleGVjdXRlSW5FZGl0TW9kZSB9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoqXG4gKiDmoLnmja5idXR0b27nu4Tku7bov4fmuKHnirbmgIHvvIznva7ngbDlrZDoioLngrlcbiAqL1xuQGNjY2xhc3NcbkBleGVjdXRlSW5FZGl0TW9kZVxuQHJlcXVpcmVDb21wb25lbnQoY2MuQnV0dG9uKVxuQG1lbnUoXCJjMmYvVUkvQnV0dG9uQ2hpbGRHcmF5XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25DaGlsZEdyYXkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogQ0NfREVWICYmIFwi6ZyA6KaB5ZCM5q2l572u54Gw55qE5YWz6IGU6IqC54K5XCIgfSkgcHVibGljIHJlbGF0ZWROb2RlczogY2MuTm9kZVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk1hdGVyaWFsKSBwdWJsaWMgbm9ybWFsTWF0ZXJpYWw6IGNjLk1hdGVyaWFsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTWF0ZXJpYWwpIHB1YmxpYyBncmF5TWF0ZXJpYWw6IGNjLk1hdGVyaWFsID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5vbihCdXR0b25IYWNrRXZlbnQuU1RBVEVfQ0hBTkdFLCB0aGlzLm9uU3RhdGVDaGFuZ2UsIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TdGF0ZUNoYW5nZShzdGF0ZTogQnV0dG9uU3RhdGUpOiB2b2lkIHtcbiAgICAgICAgaWYgKHN0YXRlID09PSBCdXR0b25TdGF0ZS5ESVNBQkxFRCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmdyYXlNYXRlcmlhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JheU1hdGVyaWFsID0gY2MuTWF0ZXJpYWwuZ2V0QnVpbHRpbk1hdGVyaWFsKFwiMmQtZ3JheS1zcHJpdGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY2IgPSAobjogY2MuTm9kZSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByYyA9IG4uZ2V0Q29tcG9uZW50KGNjLlJlbmRlckNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHJjICYmIChyYyBpbnN0YW5jZW9mIGNjLlNwcml0ZSB8fCByYyBpbnN0YW5jZW9mIGNjLkxhYmVsKSkge1xuICAgICAgICAgICAgICAgICAgICByYy5zZXRNYXRlcmlhbCgwLCB0aGlzLmdyYXlNYXRlcmlhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGMyZi51dGlscy52aWV3Lm5vZGVSZWN1cnNpdmUodGhpcy5ub2RlLmNoaWxkcmVuLCBjYik7XG4gICAgICAgICAgICBjMmYudXRpbHMudmlldy5ub2RlUmVjdXJzaXZlKHRoaXMucmVsYXRlZE5vZGVzLCBjYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm9ybWFsTWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vcm1hbE1hdGVyaWFsID0gY2MuTWF0ZXJpYWwuZ2V0QnVpbHRpbk1hdGVyaWFsKFwiMmQtc3ByaXRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGNiID0gKG46IGNjLk5vZGUpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcmMgPSBuLmdldENvbXBvbmVudChjYy5SZW5kZXJDb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIGlmIChyYyAmJiAocmMgaW5zdGFuY2VvZiBjYy5TcHJpdGUgfHwgcmMgaW5zdGFuY2VvZiBjYy5MYWJlbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmMuc2V0TWF0ZXJpYWwoMCwgdGhpcy5ub3JtYWxNYXRlcmlhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGMyZi51dGlscy52aWV3Lm5vZGVSZWN1cnNpdmUodGhpcy5ub2RlLmNoaWxkcmVuLCBjYik7XG4gICAgICAgICAgICBjMmYudXRpbHMudmlldy5ub2RlUmVjdXJzaXZlKHRoaXMucmVsYXRlZE5vZGVzLCBjYik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=