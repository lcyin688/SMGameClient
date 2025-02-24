
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/game/EntranceData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8c4aflMClBOML84dx3w7EBZ', 'EntranceData');
// entrance/script/game/EntranceData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntraData = void 0;
var msgid_1 = require("../../../resources/proto/msgid");
/** 游戏入口数据 */
var EntraData = /** @class */ (function () {
    //---------DEV相关-----------
    function EntraData() {
        /** 已拥有角色 */
        this._owned = undefined;
        this.curSvrUnit = null;
        this._netCfg = null;
        this.mapArea = null;
        this.isWhite = undefined;
        this.customHotUrl = null;
    }
    Object.defineProperty(EntraData, "ins", {
        get: function () {
            if (!EntraData._ins) {
                EntraData._ins = new EntraData();
            }
            return EntraData._ins;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EntraData.prototype, "curSvrUnit", {
        get: function () {
            return this._curSvrUnit;
        },
        set: function (value) {
            this._curSvrUnit = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EntraData.prototype, "netCfg", {
        get: function () {
            return this._netCfg;
        },
        set: function (v) {
            this._netCfg = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EntraData.prototype, "loginParam", {
        get: function () {
            return this._loginParam;
        },
        set: function (v) {
            this._loginParam = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EntraData.prototype, "isWhite", {
        get: function () {
            return this._isWhite;
        },
        set: function (value) {
            this._isWhite = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EntraData.prototype, "customHotUrl", {
        get: function () {
            return this._customHotUrl;
        },
        set: function (v) {
            this._customHotUrl = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EntraData.prototype, "owned", {
        get: function () {
            return this._owned;
        },
        set: function (v) {
            this._owned = v;
        },
        enumerable: false,
        configurable: true
    });
    //重登录：先重登录sdk,再重登陆游戏
    EntraData.prototype.reLogin = function (sucCb, failCb) {
        if (!this.loginParam) {
            failCb && failCb();
            return;
        }
        var param = Object.copyDepth(this.loginParam);
        param.P1 = "reconnect";
        c2f.net.sendMsg(msgid_1.msgid.C_Login, param, {
            getErr: true,
            ops: [msgid_1.msgid.GW_Login_R],
            callback: sucCb,
        });
    };
    EntraData._ins = null;
    return EntraData;
}());
exports.EntraData = EntraData;
szg.entrance = EntraData.ins;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvZ2FtZS9FbnRyYW5jZURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsd0RBQXVEO0FBRXZELGFBQWE7QUFDYjtJQStESSwyQkFBMkI7SUFFM0I7UUFaQSxZQUFZO1FBRUosV0FBTSxHQUEyQixTQUFTLENBQUE7UUFXOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQXRFRCxzQkFBVyxnQkFBRzthQUFkO1lBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQzthQUNwQztZQUNELE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUlELHNCQUFXLGlDQUFVO2FBR3JCO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFMRCxVQUFzQixLQUF1QjtZQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQU1ELHNCQUFXLDZCQUFNO2FBQWpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7YUFDRCxVQUFrQixDQUFrQjtZQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDOzs7T0FIQTtJQU1ELHNCQUFXLGlDQUFVO2FBQXJCO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFDRCxVQUFzQixDQUFNO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7OztPQUhBO0lBVUQsc0JBQVcsOEJBQU87YUFBbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQUNELFVBQW1CLEtBQWM7WUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQzs7O09BSEE7SUFNRCxzQkFBVyxtQ0FBWTthQUF2QjtZQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDO2FBQ0QsVUFBd0IsQ0FBUztZQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUMzQixDQUFDOzs7T0FIQTtJQU9ELHNCQUFXLDRCQUFLO2FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFDRCxVQUFpQixDQUF5QjtZQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNwQixDQUFDOzs7T0FIQTtJQWdCRCxvQkFBb0I7SUFDYiwyQkFBTyxHQUFkLFVBQWUsS0FBZSxFQUFFLE1BQWdCO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUNuQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLEtBQUssR0FBZ0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0QsS0FBSyxDQUFDLEVBQUUsR0FBRyxXQUFXLENBQUM7UUFDdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQ1gsYUFBSyxDQUFDLE9BQU8sRUFDYixLQUFLLEVBQ0w7WUFDSSxNQUFNLEVBQUUsSUFBSTtZQUNaLEdBQUcsRUFBRSxDQUFDLGFBQUssQ0FBQyxVQUFVLENBQUM7WUFDdkIsUUFBUSxFQUFFLEtBQUs7U0FDbEIsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXpGTSxjQUFJLEdBQWMsSUFBSSxDQUFDO0lBNEZsQyxnQkFBQztDQTdGRCxBQTZGQyxJQUFBO0FBN0ZZLDhCQUFTO0FBcUd0QixHQUFHLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRyYURlZiB9IGZyb20gXCIuL0VudHJhbmNlRGVmaW5lXCI7XG5pbXBvcnQgeyBHYW1lQ29uc3RzIH0gZnJvbSBcIi4uLy4uLy4uL1NjcmlwdC9nYW1lL0dhbWVDb25zdHNcIjtcbmltcG9ydCB7IEdhbWVDYWxjIH0gZnJvbSBcIi4uLy4uLy4uL1NjcmlwdC9nYW1lL0dhbWVDYWxjdWxhdG9yXCI7XG5pbXBvcnQgeyBQbGF0RGVmIH0gZnJvbSBcIi4uL3BsYXRmb3JtL1BsYXREZWZpbmVcIjtcbmltcG9ydCB7IG1zZ2lkIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9wcm90by9tc2dpZFwiO1xuXG4vKiog5ri45oiP5YWl5Y+j5pWw5o2uICovXG5leHBvcnQgY2xhc3MgRW50cmFEYXRhIHtcbiAgICBzdGF0aWMgX2luczogRW50cmFEYXRhID0gbnVsbDtcbiAgICBzdGF0aWMgZ2V0IGlucygpIHtcbiAgICAgICAgaWYgKCFFbnRyYURhdGEuX2lucykge1xuICAgICAgICAgICAgRW50cmFEYXRhLl9pbnMgPSBuZXcgRW50cmFEYXRhKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEVudHJhRGF0YS5faW5zO1xuICAgIH1cblxuICAgIC8qKiDlvZPliY3pgInmi6nmnI3liqHlmaggKi9cbiAgICBwcml2YXRlIF9jdXJTdnJVbml0OiBFbnRyYURlZi5TdnJVbml0O1xuICAgIHB1YmxpYyBzZXQgY3VyU3ZyVW5pdCh2YWx1ZTogRW50cmFEZWYuU3ZyVW5pdCkge1xuICAgICAgICB0aGlzLl9jdXJTdnJVbml0ID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY3VyU3ZyVW5pdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1clN2clVuaXQ7XG4gICAgfVxuICAgIC8qKiDnvZHnu5zphY3nva4gKi9cbiAgICBwcml2YXRlIF9uZXRDZmc6IEVudHJhRGVmLk5ldENmZztcbiAgICBwdWJsaWMgZ2V0IG5ldENmZygpOiBFbnRyYURlZi5OZXRDZmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmV0Q2ZnO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IG5ldENmZyh2OiBFbnRyYURlZi5OZXRDZmcpIHtcbiAgICAgICAgdGhpcy5fbmV0Q2ZnID0gdjtcbiAgICB9XG4gICAgLyoqIOeZu+W9leWPguaVsDrph43mlrDov57mjqXkvJrnlKggKi9cbiAgICBwcml2YXRlIF9sb2dpblBhcmFtOiBhbnk7XG4gICAgcHVibGljIGdldCBsb2dpblBhcmFtKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2dpblBhcmFtO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGxvZ2luUGFyYW0odjogYW55KSB7XG4gICAgICAgIHRoaXMuX2xvZ2luUGFyYW0gPSB2O1xuICAgIH1cbiAgICAvKiog5aSn5Yy66YWN572uICovXG4gICAgcHJpdmF0ZSBtYXBBcmVhOiBNYXA8bnVtYmVyLCBFbnRyYURlZi5BcmVhRGV0YWlsPjtcblxuICAgIC8vLS0tLS0tLS0tREVW55u45YWzLS0tLS0tLS0tLS1cbiAgICAvKiog5piv5ZCm5ZCv55So55m95ZCN5Y2VICovXG4gICAgcHJpdmF0ZSBfaXNXaGl0ZTogYm9vbGVhbjtcbiAgICBwdWJsaWMgZ2V0IGlzV2hpdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1doaXRlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGlzV2hpdGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNXaGl0ZSA9IHZhbHVlO1xuICAgIH1cbiAgICAvKiog6Ieq5a6a5LmJ54Ot5pu05Zyw5Z2AICovXG4gICAgcHJpdmF0ZSBfY3VzdG9tSG90VXJsOiBzdHJpbmc7XG4gICAgcHVibGljIGdldCBjdXN0b21Ib3RVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1c3RvbUhvdFVybDtcbiAgICB9XG4gICAgcHVibGljIHNldCBjdXN0b21Ib3RVcmwodjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2N1c3RvbUhvdFVybCA9IHY7XG4gICAgfVxuICAgIC8qKiDlt7Lmi6XmnInop5LoibIgKi9cblxuICAgIHByaXZhdGUgX293bmVkOiBFbnRyYURlZi5QbHJJbmZvMlN2cltdID0gdW5kZWZpbmVkXG4gICAgcHVibGljIGdldCBvd25lZCgpOiBFbnRyYURlZi5QbHJJbmZvMlN2cltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX293bmVkO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IG93bmVkKHY6IEVudHJhRGVmLlBsckluZm8yU3ZyW10pIHtcbiAgICAgICAgdGhpcy5fb3duZWQgPSB2O1xuICAgIH1cblxuICAgIC8vLS0tLS0tLS0tREVW55u45YWzLS0tLS0tLS0tLS1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmN1clN2clVuaXQgPSBudWxsO1xuICAgICAgICB0aGlzLl9uZXRDZmcgPSBudWxsO1xuICAgICAgICB0aGlzLm1hcEFyZWEgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuaXNXaGl0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5jdXN0b21Ib3RVcmwgPSBudWxsO1xuICAgIH1cblxuICAgIC8v6YeN55m75b2V77ya5YWI6YeN55m75b2Vc2RrLOWGjemHjeeZu+mZhua4uOaIj1xuICAgIHB1YmxpYyByZUxvZ2luKHN1Y0NiOiBGdW5jdGlvbiwgZmFpbENiOiBGdW5jdGlvbikge1xuICAgICAgICBpZiAoIXRoaXMubG9naW5QYXJhbSkge1xuICAgICAgICAgICAgZmFpbENiICYmIGZhaWxDYigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJhbTogbXNnLkNfTG9naW4gPSBPYmplY3QuY29weURlcHRoKHRoaXMubG9naW5QYXJhbSk7XG4gICAgICAgIHBhcmFtLlAxID0gXCJyZWNvbm5lY3RcIjtcbiAgICAgICAgYzJmLm5ldC5zZW5kTXNnKFxuICAgICAgICAgICAgbXNnaWQuQ19Mb2dpbixcbiAgICAgICAgICAgIHBhcmFtLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGdldEVycjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvcHM6IFttc2dpZC5HV19Mb2dpbl9SXSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogc3VjQ2IsXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIElTWkcge1xuICAgICAgICBlbnRyYW5jZTogRW50cmFEYXRhO1xuICAgIH1cbn1cblxuc3pnLmVudHJhbmNlID0gRW50cmFEYXRhLmlucztcbmV4cG9ydCB7IH07Il19