
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/NoPlatLogin/NoPlatLoginModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9fd390lsLJDcYoMzX8/nyoU', 'NoPlatLoginModel');
// entrance/script/NoPlatLogin/NoPlatLoginModel.ts

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
var GameConsts_1 = require("../../../Script/game/GameConsts");
var C2FEnum_1 = require("../../../c2f-framework/define/C2FEnum");
var UIModelBase_1 = require("./../../../c2f-framework/gui/layer/UIModelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NoPlatLoginModel = /** @class */ (function (_super) {
    __extends(NoPlatLoginModel, _super);
    function NoPlatLoginModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'NoPlatLogin';
        return _this;
    }
    Object.defineProperty(NoPlatLoginModel.prototype, "accountId", {
        get: function () {
            return this._accountId;
        },
        set: function (v) {
            this._accountId = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoPlatLoginModel.prototype, "sdkFlag", {
        get: function () {
            return this._sdkFlag;
        },
        set: function (v) {
            this._sdkFlag = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoPlatLoginModel.prototype, "payFlag", {
        get: function () {
            return this._payFlag;
        },
        set: function (v) {
            this._payFlag = v;
        },
        enumerable: false,
        configurable: true
    });
    NoPlatLoginModel.prototype.loadLastAccId = function () {
        var lastId = c2f.storage.getPlainItem(GameConsts_1.GameConsts.NoPlatLastAccId, '');
        if (lastId.length > 0) {
            this.accountId = lastId;
            this.emit(C2FEnum_1.C2FEnum.Event.ChangeViewValue, 'userIdEditBox', function (userIdEditBox) {
                userIdEditBox.string = lastId;
            });
        }
    };
    NoPlatLoginModel.prototype.saveLoginInfo = function () {
        c2f.storage.setPlainItem(GameConsts_1.GameConsts.NoPlatLastAccId, this.accountId);
    };
    NoPlatLoginModel = __decorate([
        ccclass
    ], NoPlatLoginModel);
    return NoPlatLoginModel;
}(UIModelBase_1.UIModelBase));
exports.default = NoPlatLoginModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvTm9QbGF0TG9naW4vTm9QbGF0TG9naW5Nb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBNkQ7QUFDN0QsaUVBQWdFO0FBQ2hFLDhFQUE2RTtBQUV2RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUE4QyxvQ0FBVztJQUF6RDtRQUFBLHFFQTZDQztRQTVDRyxnQkFBZ0I7UUFDVCxnQkFBVSxHQUFHLGFBQWEsQ0FBQzs7SUEyQ3RDLENBQUM7SUF2Q0csc0JBQVcsdUNBQVM7YUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQUNELFVBQXFCLENBQVM7WUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDeEIsQ0FBQzs7O09BSEE7SUFPRCxzQkFBVyxxQ0FBTzthQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO2FBQ0QsVUFBbUIsQ0FBUztZQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUN0QixDQUFDOzs7T0FIQTtJQU9ELHNCQUFXLHFDQUFPO2FBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7YUFDRCxVQUFtQixDQUFTO1lBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7OztPQUhBO0lBS00sd0NBQWEsR0FBcEI7UUFDSSxJQUFJLE1BQU0sR0FBVyxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyx1QkFBVSxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5RSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1lBRXhCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLGVBQWUsRUFBRSxVQUFDLGFBQXlCO2dCQUNoRixhQUFhLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVNLHdDQUFhLEdBQXBCO1FBQ0ksR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsdUJBQVUsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUE1Q2dCLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBNkNwQztJQUFELHVCQUFDO0NBN0NELEFBNkNDLENBN0M2Qyx5QkFBVyxHQTZDeEQ7a0JBN0NvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lQ29uc3RzIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0L2dhbWUvR2FtZUNvbnN0cyc7XG5pbXBvcnQgeyBDMkZFbnVtIH0gZnJvbSAnLi4vLi4vLi4vYzJmLWZyYW1ld29yay9kZWZpbmUvQzJGRW51bSc7XG5pbXBvcnQgeyBVSU1vZGVsQmFzZSB9IGZyb20gJy4vLi4vLi4vLi4vYzJmLWZyYW1ld29yay9ndWkvbGF5ZXIvVUlNb2RlbEJhc2UnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vUGxhdExvZ2luTW9kZWwgZXh0ZW5kcyBVSU1vZGVsQmFzZSB7XG4gICAgLyoqIOmihOWItuWQjSDnu5nlrp7kvovosIPnlKggKi9cbiAgICBwdWJsaWMgcHJlZmFiTmFtZSA9ICdOb1BsYXRMb2dpbic7XG5cbiAgICAvKiog6LSm5Y+3SUQgKi9cbiAgICBwcml2YXRlIF9hY2NvdW50SWQ6IHN0cmluZztcbiAgICBwdWJsaWMgZ2V0IGFjY291bnRJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWNjb3VudElkO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGFjY291bnRJZCh2OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fYWNjb3VudElkID0gdjtcbiAgICB9XG5cbiAgICAvKiog5qih5ouf5rig6YGT5qCH5b+XICovXG4gICAgcHJpdmF0ZSBfc2RrRmxhZzogc3RyaW5nO1xuICAgIHB1YmxpYyBnZXQgc2RrRmxhZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2RrRmxhZztcbiAgICB9XG4gICAgcHVibGljIHNldCBzZGtGbGFnKHY6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9zZGtGbGFnID0gdjtcbiAgICB9XG5cbiAgICAvKiog5qih5ouf5YWF5YC85qCH5b+XICovXG4gICAgcHJpdmF0ZSBfcGF5RmxhZzogc3RyaW5nO1xuICAgIHB1YmxpYyBnZXQgcGF5RmxhZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGF5RmxhZztcbiAgICB9XG4gICAgcHVibGljIHNldCBwYXlGbGFnKHY6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wYXlGbGFnID0gdjtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZExhc3RBY2NJZCgpIHtcbiAgICAgICAgbGV0IGxhc3RJZDogc3RyaW5nID0gYzJmLnN0b3JhZ2UuZ2V0UGxhaW5JdGVtKEdhbWVDb25zdHMuTm9QbGF0TGFzdEFjY0lkLCAnJyk7XG4gICAgICAgIGlmIChsYXN0SWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5hY2NvdW50SWQgPSBsYXN0SWQ7XG5cbiAgICAgICAgICAgIHRoaXMuZW1pdChDMkZFbnVtLkV2ZW50LkNoYW5nZVZpZXdWYWx1ZSwgJ3VzZXJJZEVkaXRCb3gnLCAodXNlcklkRWRpdEJveDogY2MuRWRpdEJveCkgPT4ge1xuICAgICAgICAgICAgICAgIHVzZXJJZEVkaXRCb3guc3RyaW5nID0gbGFzdElkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2F2ZUxvZ2luSW5mbygpIHtcbiAgICAgICAgYzJmLnN0b3JhZ2Uuc2V0UGxhaW5JdGVtKEdhbWVDb25zdHMuTm9QbGF0TGFzdEFjY0lkLCB0aGlzLmFjY291bnRJZCk7XG4gICAgfVxufSJdfQ==