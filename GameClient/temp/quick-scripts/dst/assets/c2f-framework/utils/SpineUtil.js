
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/utils/SpineUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8637fDgEdlKi6LoyEAv8q7J', 'SpineUtil');
// c2f-framework/utils/SpineUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Spine工具 */
var SpineUtil = /** @class */ (function () {
    function SpineUtil() {
    }
    /**
     * 获得spine中某骨骼的世界坐标
     * @param spine     spine组件
     * @param boneName  骨骼名称
     */
    SpineUtil.getBonePos2World = function (spine, boneName) {
        var dstPos = cc.Vec3.ZERO;
        var bone = spine.findBone(boneName);
        if (!bone) {
            cc.log('dont find bone: ', boneName);
        }
        else {
            dstPos = this.spineBoneWorldPos(spine, bone);
        }
        return dstPos;
    };
    /**
     * 获得spine中某骨骼的世界坐标
     * @param spine     spine组件
     * @param boneName  骨骼名称
     */
    SpineUtil.spineBoneWorldPos = function (spine, bone, out) {
        if (!out) {
            out = cc.v3(0, 0, 0);
        }
        if (bone) {
            spine.node.convertToWorldSpaceAR(cc.v3(bone.worldX, bone.worldY), out);
        }
        else {
            out.x = 0;
            out.y = 0;
            out.z = 0;
        }
        return out;
    };
    /**
     * 获得spine中某骨骼的坐标
     * @param spine
     * @param boneName
     * @returns
     */
    SpineUtil.getBonePos = function (spine, boneName) {
        var bonePos = cc.v2(0, 0);
        var bone = spine.findBone(boneName);
        if (bone) {
            bonePos.x = bone.worldX * spine.node.scaleX;
            bonePos.y = bone.worldY * spine.node.scaleY;
        }
        else {
            cc.warn("dont find bone[" + boneName + "] in spine: ");
        }
        return bonePos;
    };
    return SpineUtil;
}());
c2f.utils.spine = SpineUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL3V0aWxzL1NwaW5lVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGNBQWM7QUFDZDtJQUFBO0lBcURBLENBQUM7SUFwREc7Ozs7T0FJRztJQUNJLDBCQUFnQixHQUF2QixVQUF3QixLQUFrQixFQUFFLFFBQWdCO1FBQ3hELElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLEVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNILE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSwyQkFBaUIsR0FBeEIsVUFBeUIsS0FBa0IsRUFBRSxJQUFtQixFQUFFLEdBQWE7UUFDM0UsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNOLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDeEI7UUFDRCxJQUFJLElBQUksRUFBRTtZQUNOLEtBQUssQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMxRTthQUFNO1lBQ0gsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDVixHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNWLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2I7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLG9CQUFVLEdBQWpCLFVBQWtCLEtBQWtCLEVBQUUsUUFBZ0I7UUFDbEQsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxJQUFJLElBQUksRUFBRTtZQUNOLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM1QyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDL0M7YUFBTTtZQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQWtCLFFBQVEsaUJBQWMsQ0FBRSxDQUFDO1NBQ3REO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FyREEsQUFxREMsSUFBQTtBQU9ELEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBTcGluZeW3peWFtyAqL1xuY2xhc3MgU3BpbmVVdGlsIHtcbiAgICAvKipcbiAgICAgKiDojrflvpdzcGluZeS4reafkOmqqOmqvOeahOS4lueVjOWdkOagh1xuICAgICAqIEBwYXJhbSBzcGluZSAgICAgc3BpbmXnu4Tku7ZcbiAgICAgKiBAcGFyYW0gYm9uZU5hbWUgIOmqqOmqvOWQjeensFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRCb25lUG9zMldvcmxkKHNwaW5lOiBzcC5Ta2VsZXRvbiwgYm9uZU5hbWU6IHN0cmluZykge1xuICAgICAgICBsZXQgZHN0UG9zID0gY2MuVmVjMy5aRVJPO1xuICAgICAgICBsZXQgYm9uZSA9IHNwaW5lLmZpbmRCb25lKGJvbmVOYW1lKTtcbiAgICAgICAgaWYgKCFib25lKSB7XG4gICAgICAgICAgICBjYy5sb2coJ2RvbnQgZmluZCBib25lOiAnLCBib25lTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkc3RQb3MgPSB0aGlzLnNwaW5lQm9uZVdvcmxkUG9zKHNwaW5lLCBib25lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZHN0UG9zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+W+l3NwaW5l5Lit5p+Q6aqo6aq855qE5LiW55WM5Z2Q5qCHXG4gICAgICogQHBhcmFtIHNwaW5lICAgICBzcGluZee7hOS7tlxuICAgICAqIEBwYXJhbSBib25lTmFtZSAg6aqo6aq85ZCN56ewXG4gICAgICovXG4gICAgc3RhdGljIHNwaW5lQm9uZVdvcmxkUG9zKHNwaW5lOiBzcC5Ta2VsZXRvbiwgYm9uZTogc3Auc3BpbmUuQm9uZSwgb3V0PzogY2MuVmVjMykge1xuICAgICAgICBpZiAoIW91dCkge1xuICAgICAgICAgICAgb3V0ID0gY2MudjMoMCwgMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvbmUpIHtcbiAgICAgICAgICAgIHNwaW5lLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKGJvbmUud29ybGRYLCBib25lLndvcmxkWSksIG91dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXQueCA9IDA7XG4gICAgICAgICAgICBvdXQueSA9IDA7XG4gICAgICAgICAgICBvdXQueiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflvpdzcGluZeS4reafkOmqqOmqvOeahOWdkOagh1xuICAgICAqIEBwYXJhbSBzcGluZSBcbiAgICAgKiBAcGFyYW0gYm9uZU5hbWUgXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgc3RhdGljIGdldEJvbmVQb3Moc3BpbmU6IHNwLlNrZWxldG9uLCBib25lTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBib25lUG9zID0gY2MudjIoMCwgMCk7XG4gICAgICAgIGxldCBib25lID0gc3BpbmUuZmluZEJvbmUoYm9uZU5hbWUpO1xuICAgICAgICBpZiAoYm9uZSkge1xuICAgICAgICAgICAgYm9uZVBvcy54ID0gYm9uZS53b3JsZFggKiBzcGluZS5ub2RlLnNjYWxlWDtcbiAgICAgICAgICAgIGJvbmVQb3MueSA9IGJvbmUud29ybGRZICogc3BpbmUubm9kZS5zY2FsZVk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy53YXJuKGBkb250IGZpbmQgYm9uZVske2JvbmVOYW1lfV0gaW4gc3BpbmU6IGAsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9uZVBvcztcbiAgICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBpbnRlcmZhY2UgSVV0aWwge1xuICAgICAgICBzcGluZTogdHlwZW9mIFNwaW5lVXRpbDtcbiAgICB9XG59XG5jMmYudXRpbHMuc3BpbmUgPSBTcGluZVV0aWw7XG5leHBvcnQgeyB9O1xuIl19