
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/gui/layer/LayerNotify.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5e20egSlYxDypVeDclJOuBC', 'LayerNotify');
// c2f-framework/gui/layer/LayerNotify.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerNotify = void 0;
var Notify_1 = require("../view/Notify");
var C2FUIDef_1 = require("../../define/C2FUIDef");
var DelegateComponent_1 = require("./DelegateComponent");
var LayerUI_1 = require("./LayerUI");
var C2FConst_1 = require("../../define/C2FConst");
var PrefabPath;
(function (PrefabPath) {
    PrefabPath["notify"] = "commonRes/prefab/Notify";
    PrefabPath["loading"] = "commonRes/prefab/LoadingTips";
})(PrefabPath || (PrefabPath = {}));
/*
 * 消息提示层
 */
var LayerNotify = /** @class */ (function (_super) {
    __extends(LayerNotify, _super);
    function LayerNotify() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadingCnt = 0;
        return _this;
    }
    /**
     * 显示toast
     * @param content 文本表示
     * @param useI18n 是否使用多语言
     */
    LayerNotify.prototype.notifyTxt = function (content, useI18n) {
        var viewParams = new C2FUIDef_1.ViewParams();
        viewParams.uuid = this.getUuid(PrefabPath.notify);
        viewParams.prefabPath = PrefabPath.notify;
        viewParams.params = { content: content, useI18n: useI18n };
        viewParams.callbacks = {};
        viewParams.valid = true;
        this.ui_nodes.set(viewParams.uuid, viewParams);
        this.loadSpecial(viewParams);
    };
    /**
     * 显示loading界面
     * @param tips
     */
    LayerNotify.prototype.showLoading = function (tips) {
        this.loadingCnt++;
        var dstView = this.get(PrefabPath.loading);
        if (dstView.length > 0) {
            return;
        }
        var viewParams = new C2FUIDef_1.ViewParams();
        viewParams.uuid = this.getUuid(PrefabPath.loading);
        viewParams.prefabPath = PrefabPath.loading;
        viewParams.params = { content: tips };
        viewParams.callbacks = {};
        viewParams.valid = true;
        this.ui_nodes.set(viewParams.uuid, viewParams);
        this.loadSpecial(viewParams);
    };
    /**
     * 隐藏loading界面
     */
    LayerNotify.prototype.hideLoading = function (clean) {
        this.loadingCnt--;
        if (this.loadingCnt <= 0 || clean) {
            this.loadingCnt = 0;
            var dstView = this.get(PrefabPath.loading);
            if (dstView) {
                this.remove(PrefabPath.loading, false);
            }
        }
    };
    // 获取预制件资源
    LayerNotify.prototype.loadSpecial = function (viewParams) {
        var _this = this;
        c2f.res.load(C2FConst_1.C2FConst.fwBundleName, viewParams.prefabPath, function (err, res) {
            if (err) {
                cc.error(err);
            }
            if (viewParams.prefabPath != PrefabPath.loading || _this.loadingCnt > 0) {
                var childNode = c2f.res.instantiate(res);
                viewParams.node = childNode;
                var comp = childNode.addComponent(DelegateComponent_1.DelegateComponent);
                comp.viewParams = viewParams;
                _this.createSpecial(viewParams);
            }
        });
    };
    LayerNotify.prototype.createSpecial = function (viewParams) {
        var childNode = _super.prototype.createNode.call(this, viewParams);
        switch (viewParams.prefabPath) {
            case PrefabPath.notify:
                var notifyCom = childNode.getComponent(Notify_1.Notify);
                if (notifyCom) {
                    childNode.active = true;
                    notifyCom.toast(viewParams.params.content, viewParams.params.useI18n);
                }
                break;
            case PrefabPath.loading:
                break;
        }
        return childNode;
    };
    return LayerNotify;
}(LayerUI_1.LayerUI));
exports.LayerNotify = LayerNotify;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9MYXllck5vdGlmeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBQ3hDLGtEQUFtRDtBQUNuRCx5REFBd0Q7QUFDeEQscUNBQW9DO0FBQ3BDLGtEQUFpRDtBQUVqRCxJQUFLLFVBR0o7QUFIRCxXQUFLLFVBQVU7SUFDWCxnREFBa0MsQ0FBQTtJQUNsQyxzREFBd0MsQ0FBQTtBQUM1QyxDQUFDLEVBSEksVUFBVSxLQUFWLFVBQVUsUUFHZDtBQUVEOztHQUVHO0FBQ0g7SUFBaUMsK0JBQU87SUFBeEM7UUFBQSxxRUF5RkM7UUF2RlcsZ0JBQVUsR0FBVyxDQUFDLENBQUM7O0lBdUZuQyxDQUFDO0lBckZHOzs7O09BSUc7SUFDSSwrQkFBUyxHQUFoQixVQUFpQixPQUFlLEVBQUUsT0FBZ0I7UUFDOUMsSUFBSSxVQUFVLEdBQUcsSUFBSSxxQkFBVSxFQUFFLENBQUM7UUFDbEMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRCxVQUFVLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDMUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBQzNELFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQzFCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRXhCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksaUNBQVcsR0FBbEIsVUFBbUIsSUFBWTtRQUMzQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLFVBQVUsR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztRQUNsQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELFVBQVUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUMzQyxVQUFVLENBQUMsTUFBTSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3RDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQzFCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRXhCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxpQ0FBVyxHQUFsQixVQUFtQixLQUFjO1FBQzdCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRTtZQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNwQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzQyxJQUFJLE9BQU8sRUFBRTtnQkFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDMUM7U0FDSjtJQUNMLENBQUM7SUFFRCxVQUFVO0lBQ0EsaUNBQVcsR0FBckIsVUFBc0IsVUFBc0I7UUFBNUMsaUJBZUM7UUFkRyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBUSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsVUFBVSxFQUFFLFVBQUMsR0FBaUIsRUFBRSxHQUFjO1lBQ3pGLElBQUksR0FBRyxFQUFFO2dCQUNMLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDakI7WUFDRCxJQUFJLFVBQVUsQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLE9BQU8sSUFBSSxLQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRTtnQkFDcEUsSUFBSSxTQUFTLEdBQVksR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xELFVBQVUsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO2dCQUU1QixJQUFJLElBQUksR0FBc0IsU0FBUyxDQUFDLFlBQVksQ0FBQyxxQ0FBaUIsQ0FBQyxDQUFDO2dCQUN4RSxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztnQkFFN0IsS0FBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNsQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVTLG1DQUFhLEdBQXZCLFVBQXdCLFVBQXNCO1FBQzFDLElBQUksU0FBUyxHQUFZLGlCQUFNLFVBQVUsWUFBQyxVQUFVLENBQUMsQ0FBQztRQUN0RCxRQUFRLFVBQVUsQ0FBQyxVQUFVLEVBQUU7WUFDM0IsS0FBSyxVQUFVLENBQUMsTUFBTTtnQkFDbEIsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxlQUFNLENBQUUsQ0FBQztnQkFDaEQsSUFBSSxTQUFTLEVBQUU7b0JBQ1gsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ3hCLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDekU7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssVUFBVSxDQUFDLE9BQU87Z0JBQ25CLE1BQU07U0FDYjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFDTCxrQkFBQztBQUFELENBekZBLEFBeUZDLENBekZnQyxpQkFBTyxHQXlGdkM7QUF6Rlksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOb3RpZnkgfSBmcm9tIFwiLi4vdmlldy9Ob3RpZnlcIjtcbmltcG9ydCB7IFZpZXdQYXJhbXMgfSBmcm9tIFwiLi4vLi4vZGVmaW5lL0MyRlVJRGVmXCI7XG5pbXBvcnQgeyBEZWxlZ2F0ZUNvbXBvbmVudCB9IGZyb20gXCIuL0RlbGVnYXRlQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBMYXllclVJIH0gZnJvbSBcIi4vTGF5ZXJVSVwiO1xuaW1wb3J0IHsgQzJGQ29uc3QgfSBmcm9tIFwiLi4vLi4vZGVmaW5lL0MyRkNvbnN0XCI7XG5cbmVudW0gUHJlZmFiUGF0aCB7XG4gICAgbm90aWZ5ID0gJ2NvbW1vblJlcy9wcmVmYWIvTm90aWZ5JyxcbiAgICBsb2FkaW5nID0gJ2NvbW1vblJlcy9wcmVmYWIvTG9hZGluZ1RpcHMnLFxufVxuXG4vKlxuICog5raI5oGv5o+Q56S65bGCXG4gKi9cbmV4cG9ydCBjbGFzcyBMYXllck5vdGlmeSBleHRlbmRzIExheWVyVUkge1xuXG4gICAgcHJpdmF0ZSBsb2FkaW5nQ250OiBudW1iZXIgPSAwO1xuXG4gICAgLyoqXG4gICAgICog5pi+56S6dG9hc3RcbiAgICAgKiBAcGFyYW0gY29udGVudCDmlofmnKzooajnpLpcbiAgICAgKiBAcGFyYW0gdXNlSTE4biDmmK/lkKbkvb/nlKjlpJror63oqIBcbiAgICAgKi9cbiAgICBwdWJsaWMgbm90aWZ5VHh0KGNvbnRlbnQ6IHN0cmluZywgdXNlSTE4bjogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBsZXQgdmlld1BhcmFtcyA9IG5ldyBWaWV3UGFyYW1zKCk7XG4gICAgICAgIHZpZXdQYXJhbXMudXVpZCA9IHRoaXMuZ2V0VXVpZChQcmVmYWJQYXRoLm5vdGlmeSk7XG4gICAgICAgIHZpZXdQYXJhbXMucHJlZmFiUGF0aCA9IFByZWZhYlBhdGgubm90aWZ5O1xuICAgICAgICB2aWV3UGFyYW1zLnBhcmFtcyA9IHsgY29udGVudDogY29udGVudCwgdXNlSTE4bjogdXNlSTE4biB9O1xuICAgICAgICB2aWV3UGFyYW1zLmNhbGxiYWNrcyA9IHt9O1xuICAgICAgICB2aWV3UGFyYW1zLnZhbGlkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnVpX25vZGVzLnNldCh2aWV3UGFyYW1zLnV1aWQsIHZpZXdQYXJhbXMpO1xuICAgICAgICB0aGlzLmxvYWRTcGVjaWFsKHZpZXdQYXJhbXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaYvuekumxvYWRpbmfnlYzpnaJcbiAgICAgKiBAcGFyYW0gdGlwcyBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2hvd0xvYWRpbmcodGlwczogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubG9hZGluZ0NudCsrO1xuICAgICAgICBsZXQgZHN0VmlldyA9IHRoaXMuZ2V0KFByZWZhYlBhdGgubG9hZGluZyk7XG4gICAgICAgIGlmIChkc3RWaWV3Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdmlld1BhcmFtcyA9IG5ldyBWaWV3UGFyYW1zKCk7XG4gICAgICAgIHZpZXdQYXJhbXMudXVpZCA9IHRoaXMuZ2V0VXVpZChQcmVmYWJQYXRoLmxvYWRpbmcpO1xuICAgICAgICB2aWV3UGFyYW1zLnByZWZhYlBhdGggPSBQcmVmYWJQYXRoLmxvYWRpbmc7XG4gICAgICAgIHZpZXdQYXJhbXMucGFyYW1zID0geyBjb250ZW50OiB0aXBzIH07XG4gICAgICAgIHZpZXdQYXJhbXMuY2FsbGJhY2tzID0ge307XG4gICAgICAgIHZpZXdQYXJhbXMudmFsaWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMudWlfbm9kZXMuc2V0KHZpZXdQYXJhbXMudXVpZCwgdmlld1BhcmFtcyk7XG4gICAgICAgIHRoaXMubG9hZFNwZWNpYWwodmlld1BhcmFtcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6ZqQ6JePbG9hZGluZ+eVjOmdolxuICAgICAqL1xuICAgIHB1YmxpYyBoaWRlTG9hZGluZyhjbGVhbjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmxvYWRpbmdDbnQtLTtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZ0NudCA8PSAwIHx8IGNsZWFuKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdDbnQgPSAwO1xuICAgICAgICAgICAgbGV0IGRzdFZpZXcgPSB0aGlzLmdldChQcmVmYWJQYXRoLmxvYWRpbmcpO1xuICAgICAgICAgICAgaWYgKGRzdFZpZXcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZShQcmVmYWJQYXRoLmxvYWRpbmcsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOiOt+WPlumihOWItuS7tui1hOa6kFxuICAgIHByb3RlY3RlZCBsb2FkU3BlY2lhbCh2aWV3UGFyYW1zOiBWaWV3UGFyYW1zKSB7XG4gICAgICAgIGMyZi5yZXMubG9hZChDMkZDb25zdC5md0J1bmRsZU5hbWUsIHZpZXdQYXJhbXMucHJlZmFiUGF0aCwgKGVycjogRXJyb3IgfCBudWxsLCByZXM6IGNjLlByZWZhYikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmlld1BhcmFtcy5wcmVmYWJQYXRoICE9IFByZWZhYlBhdGgubG9hZGluZyB8fCB0aGlzLmxvYWRpbmdDbnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkTm9kZTogY2MuTm9kZSA9IGMyZi5yZXMuaW5zdGFudGlhdGUocmVzKTtcbiAgICAgICAgICAgICAgICB2aWV3UGFyYW1zLm5vZGUgPSBjaGlsZE5vZGU7XG5cbiAgICAgICAgICAgICAgICBsZXQgY29tcDogRGVsZWdhdGVDb21wb25lbnQgPSBjaGlsZE5vZGUuYWRkQ29tcG9uZW50KERlbGVnYXRlQ29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICBjb21wLnZpZXdQYXJhbXMgPSB2aWV3UGFyYW1zO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVTcGVjaWFsKHZpZXdQYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlU3BlY2lhbCh2aWV3UGFyYW1zOiBWaWV3UGFyYW1zKSB7XG4gICAgICAgIGxldCBjaGlsZE5vZGU6IGNjLk5vZGUgPSBzdXBlci5jcmVhdGVOb2RlKHZpZXdQYXJhbXMpO1xuICAgICAgICBzd2l0Y2ggKHZpZXdQYXJhbXMucHJlZmFiUGF0aCkge1xuICAgICAgICAgICAgY2FzZSBQcmVmYWJQYXRoLm5vdGlmeTpcbiAgICAgICAgICAgICAgICBsZXQgbm90aWZ5Q29tID0gY2hpbGROb2RlLmdldENvbXBvbmVudChOb3RpZnkpITtcbiAgICAgICAgICAgICAgICBpZiAobm90aWZ5Q29tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBub3RpZnlDb20udG9hc3Qodmlld1BhcmFtcy5wYXJhbXMuY29udGVudCwgdmlld1BhcmFtcy5wYXJhbXMudXNlSTE4bik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQcmVmYWJQYXRoLmxvYWRpbmc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoaWxkTm9kZTtcbiAgICB9XG59Il19