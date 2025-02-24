/** Spine工具 */
class SpineUtil {
    /**
     * 获得spine中某骨骼的世界坐标
     * @param spine     spine组件
     * @param boneName  骨骼名称
     */
    static getBonePos2World(spine: sp.Skeleton, boneName: string) {
        let dstPos = cc.Vec3.ZERO;
        let bone = spine.findBone(boneName);
        if (!bone) {
            cc.log('dont find bone: ', boneName);
        } else {
            dstPos = this.spineBoneWorldPos(spine, bone);
        }
        return dstPos;
    }

    /**
     * 获得spine中某骨骼的世界坐标
     * @param spine     spine组件
     * @param boneName  骨骼名称
     */
    static spineBoneWorldPos(spine: sp.Skeleton, bone: sp.spine.Bone, out?: cc.Vec3) {
        if (!out) {
            out = cc.v3(0, 0, 0);
        }
        if (bone) {
            spine.node.convertToWorldSpaceAR(cc.v3(bone.worldX, bone.worldY), out);
        } else {
            out.x = 0;
            out.y = 0;
            out.z = 0;
        }
        return out;
    }

    /**
     * 获得spine中某骨骼的坐标
     * @param spine 
     * @param boneName 
     * @returns 
     */
    static getBonePos(spine: sp.Skeleton, boneName: string) {
        let bonePos = cc.v2(0, 0);
        let bone = spine.findBone(boneName);
        if (bone) {
            bonePos.x = bone.worldX * spine.node.scaleX;
            bonePos.y = bone.worldY * spine.node.scaleY;
        } else {
            cc.warn(`dont find bone[${boneName}] in spine: `,);
        }
        return bonePos;
    }
}

declare global {
    interface IUtil {
        spine: typeof SpineUtil;
    }
}
c2f.utils.spine = SpineUtil;
export { };
