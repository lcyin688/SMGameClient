
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
        // let param: msg.C_Login = Object.copyDepth(this.loginParam);
        // param.P1 = "reconnect";
        // c2f.net.sendMsg(
        //     msgid.C_Login,
        //     param,
        //     {
        //         getErr: true,
        //         ops: [msgid.GW_Login_R],
        //         callback: sucCb,
        //     });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvZ2FtZS9FbnRyYW5jZURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsYUFBYTtBQUNiO0lBK0RJLDJCQUEyQjtJQUUzQjtRQVpBLFlBQVk7UUFFSixXQUFNLEdBQTJCLFNBQVMsQ0FBQTtRQVc5QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBdEVELHNCQUFXLGdCQUFHO2FBQWQ7WUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtnQkFDakIsU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO2FBQ3BDO1lBQ0QsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBSUQsc0JBQVcsaUNBQVU7YUFHckI7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzthQUxELFVBQXNCLEtBQXVCO1lBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBTUQsc0JBQVcsNkJBQU07YUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzthQUNELFVBQWtCLENBQWtCO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7OztPQUhBO0lBTUQsc0JBQVcsaUNBQVU7YUFBckI7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzthQUNELFVBQXNCLENBQU07WUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDekIsQ0FBQzs7O09BSEE7SUFVRCxzQkFBVyw4QkFBTzthQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO2FBQ0QsVUFBbUIsS0FBYztZQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDOzs7T0FIQTtJQU1ELHNCQUFXLG1DQUFZO2FBQXZCO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7YUFDRCxVQUF3QixDQUFTO1lBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLENBQUM7OztPQUhBO0lBT0Qsc0JBQVcsNEJBQUs7YUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUNELFVBQWlCLENBQXlCO1lBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLENBQUM7OztPQUhBO0lBZ0JELG9CQUFvQjtJQUNiLDJCQUFPLEdBQWQsVUFBZSxLQUFlLEVBQUUsTUFBZ0I7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsTUFBTSxJQUFJLE1BQU0sRUFBRSxDQUFDO1lBQ25CLE9BQU87U0FDVjtRQUNELDhEQUE4RDtRQUM5RCwwQkFBMEI7UUFDMUIsbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixhQUFhO1FBQ2IsUUFBUTtRQUNSLHdCQUF3QjtRQUN4QixtQ0FBbUM7UUFDbkMsMkJBQTJCO1FBQzNCLFVBQVU7SUFDZCxDQUFDO0lBekZNLGNBQUksR0FBYyxJQUFJLENBQUM7SUE0RmxDLGdCQUFDO0NBN0ZELEFBNkZDLElBQUE7QUE3RlksOEJBQVM7QUFxR3RCLEdBQUcsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudHJhRGVmIH0gZnJvbSBcIi4vRW50cmFuY2VEZWZpbmVcIjtcbmltcG9ydCB7IEdhbWVDb25zdHMgfSBmcm9tIFwiLi4vLi4vLi4vU2NyaXB0L2dhbWUvR2FtZUNvbnN0c1wiO1xuaW1wb3J0IHsgR2FtZUNhbGMgfSBmcm9tIFwiLi4vLi4vLi4vU2NyaXB0L2dhbWUvR2FtZUNhbGN1bGF0b3JcIjtcbmltcG9ydCB7IFBsYXREZWYgfSBmcm9tIFwiLi4vcGxhdGZvcm0vUGxhdERlZmluZVwiO1xuXG4vKiog5ri45oiP5YWl5Y+j5pWw5o2uICovXG5leHBvcnQgY2xhc3MgRW50cmFEYXRhIHtcbiAgICBzdGF0aWMgX2luczogRW50cmFEYXRhID0gbnVsbDtcbiAgICBzdGF0aWMgZ2V0IGlucygpIHtcbiAgICAgICAgaWYgKCFFbnRyYURhdGEuX2lucykge1xuICAgICAgICAgICAgRW50cmFEYXRhLl9pbnMgPSBuZXcgRW50cmFEYXRhKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEVudHJhRGF0YS5faW5zO1xuICAgIH1cblxuICAgIC8qKiDlvZPliY3pgInmi6nmnI3liqHlmaggKi9cbiAgICBwcml2YXRlIF9jdXJTdnJVbml0OiBFbnRyYURlZi5TdnJVbml0O1xuICAgIHB1YmxpYyBzZXQgY3VyU3ZyVW5pdCh2YWx1ZTogRW50cmFEZWYuU3ZyVW5pdCkge1xuICAgICAgICB0aGlzLl9jdXJTdnJVbml0ID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY3VyU3ZyVW5pdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1clN2clVuaXQ7XG4gICAgfVxuICAgIC8qKiDnvZHnu5zphY3nva4gKi9cbiAgICBwcml2YXRlIF9uZXRDZmc6IEVudHJhRGVmLk5ldENmZztcbiAgICBwdWJsaWMgZ2V0IG5ldENmZygpOiBFbnRyYURlZi5OZXRDZmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmV0Q2ZnO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IG5ldENmZyh2OiBFbnRyYURlZi5OZXRDZmcpIHtcbiAgICAgICAgdGhpcy5fbmV0Q2ZnID0gdjtcbiAgICB9XG4gICAgLyoqIOeZu+W9leWPguaVsDrph43mlrDov57mjqXkvJrnlKggKi9cbiAgICBwcml2YXRlIF9sb2dpblBhcmFtOiBhbnk7XG4gICAgcHVibGljIGdldCBsb2dpblBhcmFtKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2dpblBhcmFtO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGxvZ2luUGFyYW0odjogYW55KSB7XG4gICAgICAgIHRoaXMuX2xvZ2luUGFyYW0gPSB2O1xuICAgIH1cbiAgICAvKiog5aSn5Yy66YWN572uICovXG4gICAgcHJpdmF0ZSBtYXBBcmVhOiBNYXA8bnVtYmVyLCBFbnRyYURlZi5BcmVhRGV0YWlsPjtcblxuICAgIC8vLS0tLS0tLS0tREVW55u45YWzLS0tLS0tLS0tLS1cbiAgICAvKiog5piv5ZCm5ZCv55So55m95ZCN5Y2VICovXG4gICAgcHJpdmF0ZSBfaXNXaGl0ZTogYm9vbGVhbjtcbiAgICBwdWJsaWMgZ2V0IGlzV2hpdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1doaXRlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGlzV2hpdGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNXaGl0ZSA9IHZhbHVlO1xuICAgIH1cbiAgICAvKiog6Ieq5a6a5LmJ54Ot5pu05Zyw5Z2AICovXG4gICAgcHJpdmF0ZSBfY3VzdG9tSG90VXJsOiBzdHJpbmc7XG4gICAgcHVibGljIGdldCBjdXN0b21Ib3RVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1c3RvbUhvdFVybDtcbiAgICB9XG4gICAgcHVibGljIHNldCBjdXN0b21Ib3RVcmwodjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2N1c3RvbUhvdFVybCA9IHY7XG4gICAgfVxuICAgIC8qKiDlt7Lmi6XmnInop5LoibIgKi9cblxuICAgIHByaXZhdGUgX293bmVkOiBFbnRyYURlZi5QbHJJbmZvMlN2cltdID0gdW5kZWZpbmVkXG4gICAgcHVibGljIGdldCBvd25lZCgpOiBFbnRyYURlZi5QbHJJbmZvMlN2cltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX293bmVkO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IG93bmVkKHY6IEVudHJhRGVmLlBsckluZm8yU3ZyW10pIHtcbiAgICAgICAgdGhpcy5fb3duZWQgPSB2O1xuICAgIH1cblxuICAgIC8vLS0tLS0tLS0tREVW55u45YWzLS0tLS0tLS0tLS1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmN1clN2clVuaXQgPSBudWxsO1xuICAgICAgICB0aGlzLl9uZXRDZmcgPSBudWxsO1xuICAgICAgICB0aGlzLm1hcEFyZWEgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuaXNXaGl0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5jdXN0b21Ib3RVcmwgPSBudWxsO1xuICAgIH1cblxuICAgIC8v6YeN55m75b2V77ya5YWI6YeN55m75b2Vc2RrLOWGjemHjeeZu+mZhua4uOaIj1xuICAgIHB1YmxpYyByZUxvZ2luKHN1Y0NiOiBGdW5jdGlvbiwgZmFpbENiOiBGdW5jdGlvbikge1xuICAgICAgICBpZiAoIXRoaXMubG9naW5QYXJhbSkge1xuICAgICAgICAgICAgZmFpbENiICYmIGZhaWxDYigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxldCBwYXJhbTogbXNnLkNfTG9naW4gPSBPYmplY3QuY29weURlcHRoKHRoaXMubG9naW5QYXJhbSk7XG4gICAgICAgIC8vIHBhcmFtLlAxID0gXCJyZWNvbm5lY3RcIjtcbiAgICAgICAgLy8gYzJmLm5ldC5zZW5kTXNnKFxuICAgICAgICAvLyAgICAgbXNnaWQuQ19Mb2dpbixcbiAgICAgICAgLy8gICAgIHBhcmFtLFxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIGdldEVycjogdHJ1ZSxcbiAgICAgICAgLy8gICAgICAgICBvcHM6IFttc2dpZC5HV19Mb2dpbl9SXSxcbiAgICAgICAgLy8gICAgICAgICBjYWxsYmFjazogc3VjQ2IsXG4gICAgICAgIC8vICAgICB9KTtcbiAgICB9XG5cblxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIElTWkcge1xuICAgICAgICBlbnRyYW5jZTogRW50cmFEYXRhO1xuICAgIH1cbn1cblxuc3pnLmVudHJhbmNlID0gRW50cmFEYXRhLmlucztcbmV4cG9ydCB7IH07Il19