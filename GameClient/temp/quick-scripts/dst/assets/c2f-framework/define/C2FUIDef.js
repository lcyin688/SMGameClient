
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/define/C2FUIDef.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3c8b8GCHdRHtoiZjkx89qdq', 'C2FUIDef');
// c2f-framework/define/C2FUIDef.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerType = exports.ViewParams = void 0;
/** 本类型仅供gui模块内部使用，请勿在功能逻辑中使用 */
var ViewParams = /** @class */ (function () {
    function ViewParams() {
        this.uuid = null;
        this.prefabPath = null;
        this.params = null;
        this.callbacks = null;
        this.valid = true;
        this.node = null;
        this.bundle = null;
        this.uiCfg = null;
    }
    return ViewParams;
}());
exports.ViewParams = ViewParams;
/** 界面层类型 */
var LayerType;
(function (LayerType) {
    /** 游戏层 */
    LayerType["Game"] = "LayerGame";
    /** 全屏类弹出界面 */
    LayerType["UI"] = "LayerUI";
    /** 窗口类弹出界面 */
    LayerType["PopUp"] = "LayerPopUp";
    /** 模式窗口层 */
    LayerType["Dialog"] = "LayerDialog";
    /** 系统触发模式窗口层 eg.断网提示等 */
    LayerType["System"] = "LayerSystem";
    /** 滚动消息提示层 eg.走马灯,冒泡提示*/
    LayerType["Notify"] = "LayerNotify";
    /** 新手引导层 */
    LayerType["Guide"] = "LayerGuide";
})(LayerType = exports.LayerType || (exports.LayerType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2RlZmluZS9DMkZVSURlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5REEsZ0NBQWdDO0FBQ2hDO0lBb0JJO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0E5QkEsQUE4QkMsSUFBQTtBQTlCWSxnQ0FBVTtBQWdDdkIsWUFBWTtBQUNaLElBQVksU0FnQlg7QUFoQkQsV0FBWSxTQUFTO0lBQ2pCLFVBQVU7SUFDViwrQkFBa0IsQ0FBQTtJQUNsQixjQUFjO0lBQ2QsMkJBQWMsQ0FBQTtJQUNkLGNBQWM7SUFDZCxpQ0FBb0IsQ0FBQTtJQUNwQixZQUFZO0lBQ1osbUNBQXNCLENBQUE7SUFDdEIseUJBQXlCO0lBQ3pCLG1DQUFzQixDQUFBO0lBQ3RCLHlCQUF5QjtJQUN6QixtQ0FBc0IsQ0FBQTtJQUN0QixZQUFZO0lBQ1osaUNBQW9CLENBQUE7QUFFeEIsQ0FBQyxFQWhCVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQWdCcEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIOeVjOmdouWbnuiwg+WPguaVsOWvueixoeWumuS5iSAqL1xuZXhwb3J0IGludGVyZmFjZSBVSUNhbGxiYWNrcyB7XG4gICAgLyoqXG4gICAgICog6IqC54K55re75Yqg5Yiw5bGC57qn5Lul5ZCO55qE5Zue6LCDXG4gICAgICogQHBhcmFtIG5vZGUgICDlvZPliY3nlYzpnaLoioLngrlcbiAgICAgKiBAcGFyYW0gcGFyYW1zIOWklumDqOS8oOmAkuWPguaVsFxuICAgICAqL1xuICAgIG9uVUlBZGRlZD86IChub2RlOiBjYy5Ob2RlLCBwYXJhbXM6IGFueSkgPT4gdm9pZCxcblxuICAgIC8qKlxuICAgICAqIOeql+WPo+iKgueCuSByZW1vdmUg5pe25Zue6LCDXG4gICAgICogQHBhcmFtIG5vZGUgICDlvZPliY3nlYzpnaLoioLngrlcbiAgICAgKiBAcGFyYW0gcGFyYW1zIOWklumDqOS8oOmAkuWPguaVsFxuICAgICAqL1xuICAgIG9uVUlSZW1vdmVkPzogKG5vZGU6IGNjLk5vZGUgfCBudWxsLCBwYXJhbXM6IGFueSkgPT4gdm9pZCxcblxuICAgIC8qKiBcbiAgICAgKiDms6jmhI/vvJrosIPnlKhgZGVsZXRlYOaIlmAkZGVsZXRlYOaJjeS8muinpuWPkeatpOWbnuiwg++8jOWmguaenGB0aGlzLm5vZGUuZGVzdHJveSgpYO+8jOivpeWbnuiwg+WwhuebtOaOpeW/veeVpeOAglxuICAgICAqIFxuICAgICAqIOWmguaenOaMh+Wumm9uVUlCZWZvcmVSZW1vdmXvvIzliJluZXh05b+F6aG76LCD55So77yM5ZCm5YiZ6IqC54K55LiN5Lya6KKr5q2j5bi45Yig6Zmk44CCXG4gICAgICogXG4gICAgICog5q+U5aaC5biM5pyb6IqC54K55YGa5LiA5LiqRmFkZU91dOeEtuWQjuWIoOmZpO+8jOWImeWPr+S7peWcqGBvblVJQmVmb3JlUmVtb3ZlYOW9k+S4reaSreaUvmFjdGlvbuWKqOeUu++8jOWKqOeUu+e7k+adn+WQjuiwg+eUqG5leHRcbiAgICAgKiBAcGFyYW0gbm9kZSAgIOW9k+WJjeeVjOmdouiKgueCuVxuICAgICAqIEBwYXJhbSBuZXh0ICAg5Zue6LCD5pa55rOVXG4gICAgICovXG4gICAgb25VSUJlZm9yZVJlbW92ZT86IChub2RlOiBjYy5Ob2RlLCBuZXh0OiBGdW5jdGlvbikgPT4gdm9pZFxuXG4gICAgLyoqXG4gICAgICog56qX5Y+j6IqC54K5IGRlc3Ryb3kg5pe25Zue6LCDXG4gICAgICogQHBhcmFtIG5vZGUgICDlvZPliY3nlYzpnaLoioLngrlcbiAgICAgKiBAcGFyYW0gcGFyYW1zIOWklumDqOS8oOmAkuWPguaVsFxuICAgICAqL1xuICAgIG9uVUlEZXN0cm95PzogKG5vZGU6IGNjLk5vZGUgfCBudWxsLCBwYXJhbXM6IGFueSkgPT4gdm9pZCxcblxuICAgIC8qKlxuICAgICAqIOW8ueeql+WFpeWcuumAmueUqOWKqOeUu++8jOWPr+iHquWumuS5ieabv+aNolxuICAgICAqIEBwYXJhbSBub2RlICAg5b2T5YmN55WM6Z2i6IqC54K5XG4gICAgICogQHBhcmFtIHBhcmFtcyDlpJbpg6jkvKDpgJLlj4LmlbBcbiAgICAgKi9cbiAgICBpbkFuaW1hPzogKG5vZGU6IGNjLk5vZGUsIHBhcmFtczogYW55KSA9PiB2b2lkLFxuICAgIC8qKiBcbiAgICAgKiDlvLnnqpflhbPpl63pgJrnlKjliqjnlLvvvIzlj6/oh6rlrprkuYnmm7/mjaJcbiAgICAgKiBAcGFyYW0gbm9kZSAgIOW9k+WJjeeVjOmdouiKgueCuVxuICAgICAqIEBwYXJhbSBuZXh0ICAg5Zue6LCD5pa55rOVXG4gICAgICovXG4gICAgb3V0QW5pbWE/OiAobm9kZTogY2MuTm9kZSwgbmV4dDogRnVuY3Rpb24pID0+IHZvaWRcbn1cblxuLyoqIOW8ueahhuWxguWbnuiwg+WvueixoeWumuS5iSAqL1xuZXhwb3J0IGludGVyZmFjZSBQb3BWaWV3UGFyYW1zIGV4dGVuZHMgVUlDYWxsYmFja3Mge1xuICAgIC8qKiDmmK/lkKbop6bmkbjog4zmma/lhbPpl63lvLnnqpcgKi9cbiAgICB0b3VjaENsb3NlPzogYm9vbGVhbixcblxuICAgIC8qKiDmjqfliLbmmpfoibLog4zmma/nmoTpgI/mmI7luqYg6buY6K6k5Li6MTkwKi9cbiAgICBvcGFjaXR5PzogbnVtYmVyO1xufVxuXG4vKiog5pys57G75Z6L5LuF5L6bZ3Vp5qih5Z2X5YaF6YOo5L2/55So77yM6K+35Yu/5Zyo5Yqf6IO96YC76L6R5Lit5L2/55SoICovXG5leHBvcnQgY2xhc3MgVmlld1BhcmFtcyB7XG4gICAgLyoqIOeVjOmdouWUr+S4gOagh+ivhiAqL1xuICAgIHV1aWQ6IHN0cmluZztcbiAgICAvKiog5Lyg6YCS57uZ5omT5byA55WM6Z2i55qE5Y+C5pWwICovXG4gICAgcGFyYW1zOiBhbnk7XG4gICAgLyoqIOeql+WPo+S6i+S7tiAqL1xuICAgIGNhbGxiYWNrczogVUlDYWxsYmFja3M7XG4gICAgLyoqIOaYr+WQpuWcqOS9v+eUqOeKtuaAgSAqL1xuICAgIHZhbGlkOiBib29sZWFuO1xuICAgIC8qKiDnlYzpnaLmoLnoioLngrkgKi9cbiAgICBub2RlOiBjYy5Ob2RlO1xuXG4gICAgLyoqIOmihOWItui3r+W+hCAqL1xuICAgIHByZWZhYlBhdGg6IHN0cmluZztcbiAgICAvKiog5YyF5ZCNICovXG4gICAgYnVuZGxlOiBzdHJpbmc7XG5cbiAgICAvKiog56qX5Y+j6YWN572uICovXG4gICAgdWlDZmc6IFVJQ29uZmlnO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudXVpZCA9IG51bGw7XG4gICAgICAgIHRoaXMucHJlZmFiUGF0aCA9IG51bGw7XG4gICAgICAgIHRoaXMucGFyYW1zID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBudWxsO1xuICAgICAgICB0aGlzLnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5idW5kbGUgPSBudWxsO1xuICAgICAgICB0aGlzLnVpQ2ZnID0gbnVsbDtcbiAgICB9XG59XG5cbi8qKiDnlYzpnaLlsYLnsbvlnosgKi9cbmV4cG9ydCBlbnVtIExheWVyVHlwZSB7XG4gICAgLyoqIOa4uOaIj+WxgiAqL1xuICAgIEdhbWUgPSBcIkxheWVyR2FtZVwiLFxuICAgIC8qKiDlhajlsY/nsbvlvLnlh7rnlYzpnaIgKi9cbiAgICBVSSA9IFwiTGF5ZXJVSVwiLFxuICAgIC8qKiDnqpflj6PnsbvlvLnlh7rnlYzpnaIgKi9cbiAgICBQb3BVcCA9IFwiTGF5ZXJQb3BVcFwiLFxuICAgIC8qKiDmqKHlvI/nqpflj6PlsYIgKi9cbiAgICBEaWFsb2cgPSBcIkxheWVyRGlhbG9nXCIsXG4gICAgLyoqIOezu+e7n+inpuWPkeaooeW8j+eql+WPo+WxgiBlZy7mlq3nvZHmj5DnpLrnrYkgKi9cbiAgICBTeXN0ZW0gPSBcIkxheWVyU3lzdGVtXCIsXG4gICAgLyoqIOa7muWKqOa2iOaBr+aPkOekuuWxgiBlZy7otbDpqaznga8s5YaS5rOh5o+Q56S6Ki9cbiAgICBOb3RpZnkgPSBcIkxheWVyTm90aWZ5XCIsXG4gICAgLyoqIOaWsOaJi+W8leWvvOWxgiAqL1xuICAgIEd1aWRlID0gXCJMYXllckd1aWRlXCIsXG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBVSUNvbmZpZyB7XG4gICAgLyoqIOi/nOeoi+WMheWQjSAqL1xuICAgIGJ1bmRsZT86IHN0cmluZztcbiAgICAvKiog56qX5Y+j5bGC57qnICovXG4gICAgbGF5ZXI6IExheWVyVHlwZTtcbiAgICAvKiog6aKE5Yi26LWE5rqQ55u45a+56Lev5b6EICovXG4gICAgcHJlZmFiOiBzdHJpbmc7XG4gICAgLyoqIOaYvuekuumhtumDqOS/oeaBryAqL1xuICAgIHNob3dUb3A/OiBib29sZWFuO1xuICAgIC8qKiDml6DmqKHns4rog4zmma8qL1xuICAgIG5vQmx1clNjbj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIFZpZXdDb25maWcgPSB7IFtrZXk6IG51bWJlcl06IFVJQ29uZmlnIH07Il19