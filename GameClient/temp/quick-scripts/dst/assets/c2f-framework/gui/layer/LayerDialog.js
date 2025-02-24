
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/gui/layer/LayerDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38fb8yZ9OtBtoQzOLoU89mm', 'LayerDialog');
// c2f-framework/gui/layer/LayerDialog.ts

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
exports.LayerDialog = void 0;
var C2FUIDef_1 = require("../../define/C2FUIDef");
var LayerPopup_1 = require("./LayerPopup");
/*
 * 模式弹窗层，该层的窗口同时只能显示一个，删除以后会自动从队列当中取一个弹窗，直到队列为空
 */
var LayerDialog = /** @class */ (function (_super) {
    __extends(LayerDialog, _super);
    function LayerDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 窗口数据队列 */
        _this.queue = [];
        /** 窗口参数队列 - 预防同一资源的窗口参数覆盖 */
        _this.queue_params = [];
        return _this;
    }
    LayerDialog.prototype.add = function (config, params, callbacks) {
        var _this = this;
        this.black.enabled = true;
        var prefabPath = config.prefab;
        var uuid = this.getUuid(prefabPath);
        var viewParams = this.ui_nodes.get(uuid);
        if (viewParams == null) {
            viewParams = new C2FUIDef_1.ViewParams();
            viewParams.uuid = this.getUuid(prefabPath);
            viewParams.prefabPath = prefabPath;
            viewParams.callbacks = callbacks || {};
            var onRemove_Source_1 = viewParams.callbacks.onUIRemoved;
            viewParams.callbacks.onUIRemoved = function (node, params) {
                if (onRemove_Source_1) {
                    onRemove_Source_1(node, params);
                }
                setTimeout(function () {
                    _this.next();
                }, 0);
            };
            viewParams.valid = true;
            this.ui_nodes.set(viewParams.uuid, viewParams);
        }
        if (this.current && this.current.valid) {
            if (this.current.prefabPath != prefabPath) {
                this.queue.push(viewParams);
                this.queue_params.push(params || {});
            }
        }
        else {
            viewParams.params = params || {};
            this.current = viewParams;
            this.load(viewParams, config.bundle);
        }
        return uuid;
    };
    LayerDialog.prototype.setBlackDisable = function () {
        if (this.queue.length == 0)
            this.black.enabled = false;
    };
    LayerDialog.prototype.next = function () {
        if (this.queue.length > 0) {
            this.current = this.queue.shift();
            this.current.params = this.queue_params.shift();
            if (this.current.node) {
                this.createNode(this.current);
            }
            else {
                this.load(this.current);
            }
        }
    };
    return LayerDialog;
}(LayerPopup_1.LayerPopUp));
exports.LayerDialog = LayerDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9MYXllckRpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTBFO0FBQzFFLDJDQUEwQztBQUUxQzs7R0FFRztBQUNIO0lBQWlDLCtCQUFVO0lBQTNDO1FBQUEscUVBOERDO1FBN0RHLGFBQWE7UUFDTCxXQUFLLEdBQXNCLEVBQUUsQ0FBQztRQUN0Qyw2QkFBNkI7UUFDckIsa0JBQVksR0FBZSxFQUFFLENBQUM7O0lBMEQxQyxDQUFDO0lBdERVLHlCQUFHLEdBQVYsVUFBVyxNQUFnQixFQUFFLE1BQVksRUFBRSxTQUF1QjtRQUFsRSxpQkFvQ0M7UUFuQ0csSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRTFCLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUE7UUFDOUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFDcEIsVUFBVSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO1lBQzlCLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMzQyxVQUFVLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUNuQyxVQUFVLENBQUMsU0FBUyxHQUFHLFNBQVMsSUFBSSxFQUFFLENBQUM7WUFFdkMsSUFBSSxpQkFBZSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO1lBQ3ZELFVBQVUsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLFVBQUMsSUFBb0IsRUFBRSxNQUFXO2dCQUNqRSxJQUFJLGlCQUFlLEVBQUU7b0JBQ2pCLGlCQUFlLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2lCQUNqQztnQkFDRCxVQUFVLENBQUM7b0JBQ1AsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNoQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDVixDQUFDLENBQUE7WUFDRCxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ3BDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksVUFBVSxFQUFFO2dCQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ3hDO1NBQ0o7YUFBTTtZQUNILFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRVMscUNBQWUsR0FBekI7UUFDSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDM0QsQ0FBQztJQUVPLDBCQUFJLEdBQVo7UUFDSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFHLENBQUM7WUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNoRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO2dCQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNqQztpQkFDSTtnQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMzQjtTQUNKO0lBQ0wsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0E5REEsQUE4REMsQ0E5RGdDLHVCQUFVLEdBOEQxQztBQTlEWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVJQ2FsbGJhY2tzLCBVSUNvbmZpZywgVmlld1BhcmFtcyB9IGZyb20gXCIuLi8uLi9kZWZpbmUvQzJGVUlEZWZcIjtcbmltcG9ydCB7IExheWVyUG9wVXAgfSBmcm9tIFwiLi9MYXllclBvcHVwXCI7XG5cbi8qXG4gKiDmqKHlvI/lvLnnqpflsYLvvIzor6XlsYLnmoTnqpflj6PlkIzml7blj6rog73mmL7npLrkuIDkuKrvvIzliKDpmaTku6XlkI7kvJroh6rliqjku47pmJ/liJflvZPkuK3lj5bkuIDkuKrlvLnnqpfvvIznm7TliLDpmJ/liJfkuLrnqbpcbiAqL1xuZXhwb3J0IGNsYXNzIExheWVyRGlhbG9nIGV4dGVuZHMgTGF5ZXJQb3BVcCB7XG4gICAgLyoqIOeql+WPo+aVsOaNrumYn+WIlyAqL1xuICAgIHByaXZhdGUgcXVldWU6IEFycmF5PFZpZXdQYXJhbXM+ID0gW107XG4gICAgLyoqIOeql+WPo+WPguaVsOmYn+WIlyAtIOmihOmYsuWQjOS4gOi1hOa6kOeahOeql+WPo+WPguaVsOimhuebliAqL1xuICAgIHByaXZhdGUgcXVldWVfcGFyYW1zOiBBcnJheTxhbnk+ID0gW107XG4gICAgLyoqIOW9k+WJjeeql+WPo+aVsOaNriAqL1xuICAgIHByaXZhdGUgY3VycmVudCE6IFZpZXdQYXJhbXM7XG5cbiAgICBwdWJsaWMgYWRkKGNvbmZpZzogVUlDb25maWcsIHBhcmFtcz86IGFueSwgY2FsbGJhY2tzPzogVUlDYWxsYmFja3MpOiBzdHJpbmcge1xuICAgICAgICB0aGlzLmJsYWNrLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgIGxldCBwcmVmYWJQYXRoID0gY29uZmlnLnByZWZhYlxuICAgICAgICBsZXQgdXVpZCA9IHRoaXMuZ2V0VXVpZChwcmVmYWJQYXRoKTtcbiAgICAgICAgbGV0IHZpZXdQYXJhbXMgPSB0aGlzLnVpX25vZGVzLmdldCh1dWlkKTtcbiAgICAgICAgaWYgKHZpZXdQYXJhbXMgPT0gbnVsbCkge1xuICAgICAgICAgICAgdmlld1BhcmFtcyA9IG5ldyBWaWV3UGFyYW1zKCk7XG4gICAgICAgICAgICB2aWV3UGFyYW1zLnV1aWQgPSB0aGlzLmdldFV1aWQocHJlZmFiUGF0aCk7XG4gICAgICAgICAgICB2aWV3UGFyYW1zLnByZWZhYlBhdGggPSBwcmVmYWJQYXRoO1xuICAgICAgICAgICAgdmlld1BhcmFtcy5jYWxsYmFja3MgPSBjYWxsYmFja3MgfHwge307XG5cbiAgICAgICAgICAgIGxldCBvblJlbW92ZV9Tb3VyY2UgPSB2aWV3UGFyYW1zLmNhbGxiYWNrcy5vblVJUmVtb3ZlZDtcbiAgICAgICAgICAgIHZpZXdQYXJhbXMuY2FsbGJhY2tzLm9uVUlSZW1vdmVkID0gKG5vZGU6IGNjLk5vZGUgfCBudWxsLCBwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvblJlbW92ZV9Tb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgb25SZW1vdmVfU291cmNlKG5vZGUsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZpZXdQYXJhbXMudmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy51aV9ub2Rlcy5zZXQodmlld1BhcmFtcy51dWlkLCB2aWV3UGFyYW1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnQgJiYgdGhpcy5jdXJyZW50LnZhbGlkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50LnByZWZhYlBhdGggIT0gcHJlZmFiUGF0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMucXVldWUucHVzaCh2aWV3UGFyYW1zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlX3BhcmFtcy5wdXNoKHBhcmFtcyB8fCB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3UGFyYW1zLnBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IHZpZXdQYXJhbXM7XG4gICAgICAgICAgICB0aGlzLmxvYWQodmlld1BhcmFtcywgY29uZmlnLmJ1bmRsZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHV1aWQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldEJsYWNrRGlzYWJsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucXVldWUubGVuZ3RoID09IDApIHRoaXMuYmxhY2suZW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgbmV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMucXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5xdWV1ZS5zaGlmdCgpITtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudC5wYXJhbXMgPSB0aGlzLnF1ZXVlX3BhcmFtcy5zaGlmdCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudC5ub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVOb2RlKHRoaXMuY3VycmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWQodGhpcy5jdXJyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0=