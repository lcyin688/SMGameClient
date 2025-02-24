"use strict";
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