
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/gui/layer/LayerTouchEfx.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6c8b6KkKJRNV4GSh2qCLZQl', 'LayerTouchEfx');
// c2f-framework/gui/layer/LayerTouchEfx.ts

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
exports.LayerTouchEfx = void 0;
var C2FUIDef_1 = require("../../define/C2FUIDef");
var DelegateComponent_1 = require("./DelegateComponent");
var LayerUI_1 = require("./LayerUI");
var C2FConst_1 = require("../../define/C2FConst");
var PrefabPath;
(function (PrefabPath) {
    PrefabPath["touchEfx"] = "commonRes/prefab/TouchEffect";
})(PrefabPath || (PrefabPath = {}));
/*
 * 点击特效层
 */
var LayerTouchEfx = /** @class */ (function (_super) {
    __extends(LayerTouchEfx, _super);
    function LayerTouchEfx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 添加点击特效
     */
    LayerTouchEfx.prototype.addClickEfx = function () {
        var viewParams = new C2FUIDef_1.ViewParams();
        var uuid = this.getUuid(PrefabPath.touchEfx);
        viewParams.uuid = uuid;
        viewParams.prefabPath = PrefabPath.touchEfx;
        viewParams.params = {};
        viewParams.callbacks = {};
        viewParams.valid = true;
        if (!this.ui_nodes.has(uuid)) {
            this.ui_nodes.set(uuid, viewParams);
            this.load(viewParams);
        }
    };
    // 获取预制件资源
    LayerTouchEfx.prototype.load = function (viewParams) {
        var _this = this;
        c2f.res.load(C2FConst_1.C2FConst.fwBundleName, viewParams.prefabPath, function (err, res) {
            if (err) {
                cc.error(err);
            }
            var childNode = c2f.res.instantiate(res);
            viewParams.node = childNode;
            var comp = childNode.addComponent(DelegateComponent_1.DelegateComponent);
            comp.viewParams = viewParams;
            _super.prototype.createNode.call(_this, viewParams);
        });
    };
    return LayerTouchEfx;
}(LayerUI_1.LayerUI));
exports.LayerTouchEfx = LayerTouchEfx;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9MYXllclRvdWNoRWZ4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBbUQ7QUFDbkQseURBQXdEO0FBQ3hELHFDQUFvQztBQUNwQyxrREFBaUQ7QUFFakQsSUFBSyxVQUVKO0FBRkQsV0FBSyxVQUFVO0lBQ1gsdURBQXlDLENBQUE7QUFDN0MsQ0FBQyxFQUZJLFVBQVUsS0FBVixVQUFVLFFBRWQ7QUFFRDs7R0FFRztBQUNIO0lBQW1DLGlDQUFPO0lBQTFDOztJQWlDQSxDQUFDO0lBL0JHOztPQUVHO0lBQ0ksbUNBQVcsR0FBbEI7UUFDSSxJQUFJLFVBQVUsR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztRQUNsQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN2QixVQUFVLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDNUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDdkIsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDMUIsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUVELFVBQVU7SUFDQSw0QkFBSSxHQUFkLFVBQWUsVUFBc0I7UUFBckMsaUJBV0M7UUFWRyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBUSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsVUFBVSxFQUFFLFVBQUMsR0FBaUIsRUFBRSxHQUFjO1lBQ3pGLElBQUksR0FBRyxFQUFFO2dCQUNMLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDakI7WUFDRCxJQUFJLFNBQVMsR0FBWSxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsRCxVQUFVLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUM1QixJQUFJLElBQUksR0FBc0IsU0FBUyxDQUFDLFlBQVksQ0FBQyxxQ0FBaUIsQ0FBQyxDQUFDO1lBQ3hFLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLGlCQUFNLFVBQVUsYUFBQyxVQUFVLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxvQkFBQztBQUFELENBakNBLEFBaUNDLENBakNrQyxpQkFBTyxHQWlDekM7QUFqQ1ksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWaWV3UGFyYW1zIH0gZnJvbSBcIi4uLy4uL2RlZmluZS9DMkZVSURlZlwiO1xuaW1wb3J0IHsgRGVsZWdhdGVDb21wb25lbnQgfSBmcm9tIFwiLi9EZWxlZ2F0ZUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGF5ZXJVSSB9IGZyb20gXCIuL0xheWVyVUlcIjtcbmltcG9ydCB7IEMyRkNvbnN0IH0gZnJvbSBcIi4uLy4uL2RlZmluZS9DMkZDb25zdFwiO1xuXG5lbnVtIFByZWZhYlBhdGgge1xuICAgIHRvdWNoRWZ4ID0gJ2NvbW1vblJlcy9wcmVmYWIvVG91Y2hFZmZlY3QnLFxufVxuXG4vKlxuICog54K55Ye754m55pWI5bGCXG4gKi9cbmV4cG9ydCBjbGFzcyBMYXllclRvdWNoRWZ4IGV4dGVuZHMgTGF5ZXJVSSB7XG5cbiAgICAvKipcbiAgICAgKiDmt7vliqDngrnlh7vnibnmlYhcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkQ2xpY2tFZngoKTogdm9pZCB7XG4gICAgICAgIGxldCB2aWV3UGFyYW1zID0gbmV3IFZpZXdQYXJhbXMoKTtcbiAgICAgICAgbGV0IHV1aWQgPSB0aGlzLmdldFV1aWQoUHJlZmFiUGF0aC50b3VjaEVmeCk7XG4gICAgICAgIHZpZXdQYXJhbXMudXVpZCA9IHV1aWQ7XG4gICAgICAgIHZpZXdQYXJhbXMucHJlZmFiUGF0aCA9IFByZWZhYlBhdGgudG91Y2hFZng7XG4gICAgICAgIHZpZXdQYXJhbXMucGFyYW1zID0ge307XG4gICAgICAgIHZpZXdQYXJhbXMuY2FsbGJhY2tzID0ge307XG4gICAgICAgIHZpZXdQYXJhbXMudmFsaWQgPSB0cnVlO1xuXG4gICAgICAgIGlmICghdGhpcy51aV9ub2Rlcy5oYXModXVpZCkpIHtcbiAgICAgICAgICAgIHRoaXMudWlfbm9kZXMuc2V0KHV1aWQsIHZpZXdQYXJhbXMpO1xuICAgICAgICAgICAgdGhpcy5sb2FkKHZpZXdQYXJhbXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g6I635Y+W6aKE5Yi25Lu26LWE5rqQXG4gICAgcHJvdGVjdGVkIGxvYWQodmlld1BhcmFtczogVmlld1BhcmFtcykge1xuICAgICAgICBjMmYucmVzLmxvYWQoQzJGQ29uc3QuZndCdW5kbGVOYW1lLCB2aWV3UGFyYW1zLnByZWZhYlBhdGgsIChlcnI6IEVycm9yIHwgbnVsbCwgcmVzOiBjYy5QcmVmYWIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGNoaWxkTm9kZTogY2MuTm9kZSA9IGMyZi5yZXMuaW5zdGFudGlhdGUocmVzKTtcbiAgICAgICAgICAgIHZpZXdQYXJhbXMubm9kZSA9IGNoaWxkTm9kZTtcbiAgICAgICAgICAgIGxldCBjb21wOiBEZWxlZ2F0ZUNvbXBvbmVudCA9IGNoaWxkTm9kZS5hZGRDb21wb25lbnQoRGVsZWdhdGVDb21wb25lbnQpO1xuICAgICAgICAgICAgY29tcC52aWV3UGFyYW1zID0gdmlld1BhcmFtcztcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZU5vZGUodmlld1BhcmFtcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=