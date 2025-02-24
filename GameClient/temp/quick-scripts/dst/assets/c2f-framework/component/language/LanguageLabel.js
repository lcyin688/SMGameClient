
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/language/LanguageLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e5ba4B23rFGorAi6j3RHDOK', 'LanguageLabel');
// c2f-framework/component/language/LanguageLabel.ts

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
var LanguageData_1 = require("../../core/language/LanguageData");
var C2FEnum_1 = require("../../define/C2FEnum");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var LanguageLabel = /** @class */ (function (_super) {
    __extends(LanguageLabel, _super);
    function LanguageLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._dataID = "";
        _this._formatV = "";
        return _this;
    }
    Object.defineProperty(LanguageLabel.prototype, "dataID", {
        get: function () {
            return this._dataID || "";
        },
        set: function (value) {
            this._dataID = value;
            this.onDataIDChanged();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LanguageLabel.prototype, "formatV", {
        get: function () {
            return this._formatV || "";
        },
        set: function (value) {
            this._formatV = value;
            this.onDataIDChanged();
        },
        enumerable: false,
        configurable: true
    });
    LanguageLabel.prototype.onLoad = function () {
        this.onDataIDChanged();
        cc.director.on(C2FEnum_1.C2FEnum.ExtEvent.SwitchLanguage, this.onDataIDChanged, this);
    };
    LanguageLabel.prototype.onDestroy = function () {
        cc.director.off(C2FEnum_1.C2FEnum.ExtEvent.SwitchLanguage, this.onDataIDChanged, this);
    };
    LanguageLabel.prototype.onDataIDChanged = function () {
        this.refreshFromWords();
    };
    LanguageLabel.prototype.refreshFromWords = function () {
        if (!this._dataID) {
            return;
        }
        var text = '';
        var wordId = Number(this.dataID);
        var fmtV = this.formatV;
        if (fmtV.length <= 0) {
            fmtV = 'UIV_Null';
        }
        if (CC_EDITOR) {
            text = LanguageData_1.LanguageData.getLangByID(wordId, fmtV);
        }
        else {
            text = c2f.language.getLangByID(wordId, fmtV);
        }
        var spcomp = this.getComponent(cc.Label);
        if (!spcomp) {
            spcomp = this.getComponent(cc.RichText);
            if (!spcomp) {
                cc.warn("[LanguageLabel], 该节点没有cc.Label || cc.RichText组件");
                return;
            }
        }
        spcomp.string = text;
    };
    __decorate([
        property({ serializable: true })
    ], LanguageLabel.prototype, "_dataID", void 0);
    __decorate([
        property({ type: cc.String, serializable: true })
    ], LanguageLabel.prototype, "dataID", null);
    __decorate([
        property({ serializable: true })
    ], LanguageLabel.prototype, "_formatV", void 0);
    __decorate([
        property({ type: cc.String, serializable: true })
    ], LanguageLabel.prototype, "formatV", null);
    LanguageLabel = __decorate([
        ccclass,
        menu('c2f/language/LanguageLabel')
    ], LanguageLabel);
    return LanguageLabel;
}(cc.Component));
exports.default = LanguageLabel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9sYW5ndWFnZS9MYW5ndWFnZUxhYmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFnRTtBQUNoRSxnREFBK0M7QUFFekMsSUFBQSxLQUE4QixFQUFFLENBQUMsVUFBVSxFQUF6QyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUM7QUFJbEQ7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUErREM7UUE1RFcsYUFBTyxHQUFXLEVBQUUsQ0FBQztRQVc3QixjQUFRLEdBQVcsRUFBRSxDQUFDOztJQWlEMUIsQ0FBQztJQTFERyxzQkFBSSxpQ0FBTTthQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUM5QixDQUFDO2FBQ0QsVUFBVyxLQUFhO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtRQUMxQixDQUFDOzs7T0FKQTtJQVNELHNCQUFJLGtDQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO1FBQy9CLENBQUM7YUFDRCxVQUFZLEtBQWE7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO1FBQzFCLENBQUM7OztPQUpBO0lBTUQsOEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFTyx1Q0FBZSxHQUF2QjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTSx3Q0FBZ0IsR0FBdkI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLE9BQU87U0FDVjtRQUNELElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQTtRQUNiLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFakMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2xCLElBQUksR0FBRyxVQUFVLENBQUM7U0FDckI7UUFDRCxJQUFJLFNBQVMsRUFBRTtZQUNYLElBQUksR0FBRywyQkFBWSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNILElBQUksR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDakQ7UUFDRCxJQUFJLE1BQU0sR0FBMkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNULE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNULEVBQUUsQ0FBQyxJQUFJLENBQUMsaURBQWlELENBQUMsQ0FBQztnQkFDM0QsT0FBTzthQUNWO1NBQ0o7UUFDRCxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBM0REO1FBREMsUUFBUSxDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDO2tEQUNKO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDOytDQUdqRDtJQU9EO1FBREMsUUFBUSxDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDO21EQUNYO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDO2dEQUdqRDtJQWxCZ0IsYUFBYTtRQUZqQyxPQUFPO1FBQ1AsSUFBSSxDQUFDLDRCQUE0QixDQUFDO09BQ2QsYUFBYSxDQStEakM7SUFBRCxvQkFBQztDQS9ERCxBQStEQyxDQS9EMEMsRUFBRSxDQUFDLFNBQVMsR0ErRHREO2tCQS9Eb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExhbmd1YWdlRGF0YSB9IGZyb20gXCIuLi8uLi9jb3JlL2xhbmd1YWdlL0xhbmd1YWdlRGF0YVwiO1xuaW1wb3J0IHsgQzJGRW51bSB9IGZyb20gXCIuLi8uLi9kZWZpbmUvQzJGRW51bVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuQG1lbnUoJ2MyZi9sYW5ndWFnZS9MYW5ndWFnZUxhYmVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhbmd1YWdlTGFiZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHsgc2VyaWFsaXphYmxlOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSBfZGF0YUlEOiBzdHJpbmcgPSBcIlwiO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlN0cmluZywgc2VyaWFsaXphYmxlOiB0cnVlIH0pXG4gICAgZ2V0IGRhdGFJRCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YUlEIHx8IFwiXCI7XG4gICAgfVxuICAgIHNldCBkYXRhSUQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9kYXRhSUQgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5vbkRhdGFJRENoYW5nZWQoKVxuICAgIH1cblxuICAgIEBwcm9wZXJ0eSh7IHNlcmlhbGl6YWJsZTogdHJ1ZSB9KVxuICAgIF9mb3JtYXRWOiBzdHJpbmcgPSBcIlwiO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlN0cmluZywgc2VyaWFsaXphYmxlOiB0cnVlIH0pXG4gICAgZ2V0IGZvcm1hdFYoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdFYgfHwgXCJcIjtcbiAgICB9XG4gICAgc2V0IGZvcm1hdFYodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9mb3JtYXRWID0gdmFsdWU7XG4gICAgICAgIHRoaXMub25EYXRhSURDaGFuZ2VkKClcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMub25EYXRhSURDaGFuZ2VkKCk7XG4gICAgICAgIGNjLmRpcmVjdG9yLm9uKEMyRkVudW0uRXh0RXZlbnQuU3dpdGNoTGFuZ3VhZ2UsIHRoaXMub25EYXRhSURDaGFuZ2VkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLm9mZihDMkZFbnVtLkV4dEV2ZW50LlN3aXRjaExhbmd1YWdlLCB0aGlzLm9uRGF0YUlEQ2hhbmdlZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRhdGFJRENoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaEZyb21Xb3JkcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWZyZXNoRnJvbVdvcmRzKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2RhdGFJRCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgbGV0IHdvcmRJZCA9IE51bWJlcih0aGlzLmRhdGFJRCk7XG5cbiAgICAgICAgbGV0IGZtdFYgPSB0aGlzLmZvcm1hdFY7XG4gICAgICAgIGlmIChmbXRWLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICBmbXRWID0gJ1VJVl9OdWxsJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoQ0NfRURJVE9SKSB7XG4gICAgICAgICAgICB0ZXh0ID0gTGFuZ3VhZ2VEYXRhLmdldExhbmdCeUlEKHdvcmRJZCwgZm10Vik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZXh0ID0gYzJmLmxhbmd1YWdlLmdldExhbmdCeUlEKHdvcmRJZCwgZm10Vik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNwY29tcDogY2MuTGFiZWwgfCBjYy5SaWNoVGV4dCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgaWYgKCFzcGNvbXApIHtcbiAgICAgICAgICAgIHNwY29tcCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KTtcbiAgICAgICAgICAgIGlmICghc3Bjb21wKSB7XG4gICAgICAgICAgICAgICAgY2Mud2FybihcIltMYW5ndWFnZUxhYmVsXSwg6K+l6IqC54K55rKh5pyJY2MuTGFiZWwgfHwgY2MuUmljaFRleHTnu4Tku7ZcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNwY29tcC5zdHJpbmcgPSB0ZXh0O1xuICAgIH1cbn1cbiJdfQ==