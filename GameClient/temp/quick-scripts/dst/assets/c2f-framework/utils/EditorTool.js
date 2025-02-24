
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/utils/EditorTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6d87bgAP0BE96nAN+FMJc9S', 'EditorTool');
// c2f-framework/utils/EditorTool.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 编辑器工具类
 */
var EditorTool = /** @class */ (function () {
    function EditorTool() {
    }
    /**
     * 编辑器模式下加载资源
     * @param url db://assets/
     */
    EditorTool.load = function (url) {
        return new Promise(function (resolve, reject) {
            if (!CC_EDITOR) {
                resolve(null);
                return;
            }
            Editor.assetdb.queryUuidByUrl("db://assets/" + url, function (error, uuid) {
                if (error || !uuid) {
                    resolve(null);
                    cc.warn("[EditorTool.load] uuid\u67E5\u8BE2\u5931\u8D25 url: " + url);
                    return;
                }
                //@ts-ignore
                cc.resources.load({ type: "uuid", uuid: uuid }, function (error, result) {
                    if (error || !result) {
                        resolve(null);
                        cc.warn("[EditorTool.load] \u8D44\u6E90\u52A0\u8F7D\u5931\u8D25 url: " + url);
                        return;
                    }
                    resolve(result);
                });
            });
        });
    };
    /**
     * 编辑器模式下设置ccclass的属性装饰器中的枚举值
     */
    EditorTool.setClassAttrPropEnum = function (ctor, propName, value) {
        if (!CC_EDITOR) {
            return;
        }
        cc.Class["Attr"].setClassAttr(ctor, propName, "enumList", value);
    };
    /**
     * 编辑器模式下刷新选中节点的属性检查器窗口
     * @param node 选中的节点
     */
    EditorTool.refreshSelectedInspector = function (node) {
        if (!CC_EDITOR) {
            return;
        }
        Editor.Utils.refreshSelectedInspector("node", node.uuid);
    };
    return EditorTool;
}());
exports.default = EditorTool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL3V0aWxzL0VkaXRvclRvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNIO0lBQUE7SUFrREEsQ0FBQztJQWpERzs7O09BR0c7SUFDVyxlQUFJLEdBQWxCLFVBQXNCLEdBQVc7UUFDN0IsT0FBTyxJQUFJLE9BQU8sQ0FBSSxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2xDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNkLE9BQU87YUFDVjtZQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLGlCQUFlLEdBQUssRUFBRSxVQUFDLEtBQVUsRUFBRSxJQUFZO2dCQUN6RSxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNkLEVBQUUsQ0FBQyxJQUFJLENBQUMseURBQW1DLEdBQUssQ0FBQyxDQUFDO29CQUNsRCxPQUFPO2lCQUNWO2dCQUNELFlBQVk7Z0JBQ1osRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxVQUFDLEtBQVUsRUFBRSxNQUFTO29CQUNsRSxJQUFJLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTt3QkFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNkLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUVBQWlDLEdBQUssQ0FBQyxDQUFDO3dCQUNoRCxPQUFPO3FCQUNWO29CQUNELE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOztPQUVHO0lBQ1csK0JBQW9CLEdBQWxDLFVBQW1DLElBQWEsRUFBRSxRQUFnQixFQUFFLEtBQWM7UUFDOUUsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNaLE9BQU87U0FDVjtRQUNELEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRDs7O09BR0c7SUFDVyxtQ0FBd0IsR0FBdEMsVUFBdUMsSUFBYTtRQUNoRCxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ1osT0FBTztTQUNWO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDTCxpQkFBQztBQUFELENBbERBLEFBa0RDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOe8lui+keWZqOW3peWFt+exu1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0b3JUb29sIHtcbiAgICAvKipcbiAgICAgKiDnvJbovpHlmajmqKHlvI/kuIvliqDovb3otYTmupBcbiAgICAgKiBAcGFyYW0gdXJsIGRiOi8vYXNzZXRzL1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgbG9hZDxUPih1cmw6IHN0cmluZyk6IFByb21pc2U8VD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFDQ19FRElUT1IpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEVkaXRvci5hc3NldGRiLnF1ZXJ5VXVpZEJ5VXJsKGBkYjovL2Fzc2V0cy8ke3VybH1gLCAoZXJyb3I6IGFueSwgdXVpZDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yIHx8ICF1dWlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIGNjLndhcm4oYFtFZGl0b3JUb29sLmxvYWRdIHV1aWTmn6Xor6LlpLHotKUgdXJsOiAke3VybH1gKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCh7IHR5cGU6IFwidXVpZFwiLCB1dWlkOiB1dWlkIH0sIChlcnJvcjogYW55LCByZXN1bHQ6IFQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIHx8ICFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy53YXJuKGBbRWRpdG9yVG9vbC5sb2FkXSDotYTmupDliqDovb3lpLHotKUgdXJsOiAke3VybH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog57yW6L6R5Zmo5qih5byP5LiL6K6+572uY2NjbGFzc+eahOWxnuaAp+ijhemlsOWZqOS4reeahOaemuS4vuWAvFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgc2V0Q2xhc3NBdHRyUHJvcEVudW0oY3RvcjogdW5rbm93biwgcHJvcE5hbWU6IHN0cmluZywgdmFsdWU6IHVua25vd24pOiB2b2lkIHtcbiAgICAgICAgaWYgKCFDQ19FRElUT1IpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjYy5DbGFzc1tcIkF0dHJcIl0uc2V0Q2xhc3NBdHRyKGN0b3IsIHByb3BOYW1lLCBcImVudW1MaXN0XCIsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnvJbovpHlmajmqKHlvI/kuIvliLfmlrDpgInkuK3oioLngrnnmoTlsZ7mgKfmo4Dmn6Xlmajnqpflj6NcbiAgICAgKiBAcGFyYW0gbm9kZSDpgInkuK3nmoToioLngrlcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlZnJlc2hTZWxlY3RlZEluc3BlY3Rvcihub2RlOiBjYy5Ob2RlKTogdm9pZCB7XG4gICAgICAgIGlmICghQ0NfRURJVE9SKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgRWRpdG9yLlV0aWxzLnJlZnJlc2hTZWxlY3RlZEluc3BlY3RvcihcIm5vZGVcIiwgbm9kZS51dWlkKTtcbiAgICB9XG59XG4iXX0=