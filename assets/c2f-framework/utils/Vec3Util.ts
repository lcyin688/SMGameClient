/** 向量工具 */
class Vec3Util {
    /**
     * X轴
     */
    static get x(): Readonly<cc.Vec3> {
        return new cc.Vec3(1, 0, 0);
    }

    /**
     * Y轴
     */
    static get y(): Readonly<cc.Vec3> {
        return new cc.Vec3(0, 1, 0);
    }

    /**
     * Z轴
     */
    static get z(): Readonly<cc.Vec3> {
        return new cc.Vec3(0, 0, 1);
    }

    /**
     * 左向量
     */
    static get left(): Readonly<cc.Vec3> {
        return new cc.Vec3(-1, 0, 0);
    }

    /**
     * 右向量
     */
    static get right(): Readonly<cc.Vec3> {
        return new cc.Vec3(1, 0, 0);
    }

    /**
     * 上向量
     */
    static get up(): Readonly<cc.Vec3> {
        return new cc.Vec3(0, 1, 0);
    }

    /**
     * 下向量
     */
    static get down(): Readonly<cc.Vec3> {
        return new cc.Vec3(0, -1, 0);
    }

    /**
     * 前向量
     */
    static get forward(): Readonly<cc.Vec3> {
        return new cc.Vec3(0, 0, 1);
    }

    /**
     * 后向量
     */
    static get back(): Readonly<cc.Vec3> {
        return new cc.Vec3(0, 0, -1);
    }

    /**
     * 1向量
     */
    static get one(): Readonly<cc.Vec3> {
        return new cc.Vec3(1, 1, 1);
    }

    /**
     * 0向量
     */
    static get zero(): Readonly<cc.Vec3> {
        return new cc.Vec3(0, 0, 0);
    }

    /**
     * 随时间变化进度值
     * @param start  起始位置
     * @param end    结束位置
     * @param t      进度[0，1]
     */
    static progress(start: cc.Vec3, end: cc.Vec3, t: number): cc.Vec3 {
        var current = new cc.Vec3();
        current.x = c2f.utils.math.progress(start.x, end.x, t);
        current.y = c2f.utils.math.progress(start.y, end.y, t);
        current.z = c2f.utils.math.progress(start.z, end.z, t);
        return current;
    }

    /**
     * 求两个三维向量的和
     * @param pos1  向量1
     * @param pos2  向量2
     */
    static add(pos1: cc.Vec3, pos2: cc.Vec3): cc.Vec3 {
        var outPos: cc.Vec3 = new cc.Vec3();
        cc.Vec3.add(outPos, pos1, pos2);
        return outPos;
    }

    /**
     * 求两个三维向量的差
     * @param pos1  向量1
     * @param pos2  向量2
     */
    static sub(pos1: cc.Vec3, pos2: cc.Vec3): cc.Vec3 {
        var outPos: cc.Vec3 = new cc.Vec3();
        cc.Vec3.subtract(outPos, pos1, pos2);
        return outPos;
    }

    /**
     * 三维向量乘以常量
     * @param pos     向量
     * @param scalar  常量
     */
    static mul(pos: cc.Vec3, scalar: number): cc.Vec3 {
        var outPos: cc.Vec3 = new cc.Vec3();
        cc.Vec3.multiplyScalar(outPos, pos, scalar);
        return outPos;
    }

    /**
     * 三维向量除常量
     * @param pos     向量
     * @param scalar  常量
     */
    static div(pos: cc.Vec3, scalar: number): cc.Vec3 {
        var outPos: cc.Vec3 = new cc.Vec3();

        outPos.x = pos.x / scalar;
        outPos.y = pos.y / scalar;
        outPos.z = pos.z / scalar;

        return outPos;
    }

    /**
     * 判断两个三维向量的值是否相等
     * @param pos1  向量1
     * @param pos2  向量2
     */
    static equals(pos1: cc.Vec3, pos2: cc.Vec3): boolean {
        if (pos1.x == pos2.x && pos1.y == pos2.y && pos1.z == pos2.z) {
            return true;
        }

        return false;
    }

    /**
     * 判断两个三维向量的值是否相等
     * @param pos1  向量1
     * @param pos2  向量2
     */
    static v2Equals(pos1: cc.Vec2, pos2: cc.Vec2): boolean {
        if (pos1.x == pos2.x && pos1.y == pos2.y) {
            return true;
        }
        return false;
    }

    /**
     * 三维向量的模
     * @param pos  向量
     */
    static magnitude(pos: cc.Vec3): number {
        return pos.len();
    }

    /**
     * 三维向量归一化
     * @param pos  向量
     */
    static normalize(pos: cc.Vec3): cc.Vec3 {
        var outPos: cc.Vec3 = new cc.Vec3(pos.x, pos.y, pos.z);
        return outPos.normalize();
    }

    /**
     * 获得位置1，到位置2的方向
     * @param pos1  向量1
     * @param pos2  向量2
     */
    static direction(pos1: cc.Vec3, pos2: cc.Vec3): cc.Vec3 {
        var outPos: cc.Vec3 = new cc.Vec3();
        cc.Vec3.subtract(outPos, pos2, pos1)
        return outPos.normalize();
    }

    /**
     * 获得两点间的距离
     * @param pos1  向量1
     * @param pos2  向量2
     */
    static distance(pos1: cc.Vec3, pos2: cc.Vec3): number {
        return cc.Vec3.distance(pos1, pos2);
    }

    /**
     * 插值运算
     * @param posStart  开始俏步
     * @param posEnd    结束位置
     * @param t         时间
     */
    static lerp(posStart: cc.Vec3, posEnd: cc.Vec3, t: number): cc.Vec3 {
        return this.bezierOne(t, posStart, posEnd);
    }

    /**
     * 球面插值
     * @param from  起点
     * @param to    终点
     * @param t     时间
     */
    static slerp(from: cc.Vec3, to: cc.Vec3, t: number): cc.Vec3 {
        if (t <= 0) {
            return from;
        }
        else if (t >= 1) {
            return to;
        }
        let dir: cc.Vec3 = this.rotateTo(from, to, (cc.Vec3.angle(from, to) / Math.PI * 180) * t);
        let lenght: number = to.len() * t + from.len() * (1 - t);
        return (dir.normalize()).multiplyScalar(lenght);
    }

    /**
     * 向量旋转一个角度
     * @param from  起点
     * @param to    终点
     * @param angle 角并
     */
    static rotateTo(from: cc.Vec3, to: cc.Vec3, angle: number): cc.Vec3 {
        //如果两个方向角度为0，则返回目标
        if (cc.Vec3.angle(from, to) == 0) {
            return to;
        }

        let axis: cc.Vec3 = new cc.Vec3()                 // 获得旋转轴
        cc.Vec3.cross(axis, from, to);
        axis.normalize();

        let radian: number = angle * Math.PI / 180; // 获得弧度
        let rotateMatrix: cc.Mat4 = new cc.Mat4();
        rotateMatrix.rotate(radian, axis);

        return new cc.Vec3(
            from.x * rotateMatrix.m[0] + from.y * rotateMatrix.m[4] + from.z * rotateMatrix.m[8],
            from.x * rotateMatrix.m[1] + from.y * rotateMatrix.m[5] + from.z * rotateMatrix.m[9],
            from.x * rotateMatrix.m[2] + from.y * rotateMatrix.m[6] + from.z * rotateMatrix.m[10]
        );
    }

    /**
     * 一次贝塞尔即为线性插值函数
     * @param t 
     * @param posStart 
     * @param posEnd 
     * @returns 
     */
    static bezierOne(t: number, posStart: cc.Vec3, posEnd: cc.Vec3): cc.Vec3 {
        if (t > 1) {
            t = 1;
        }
        else if (t < 0) {
            t = 0
        }

        let pStart: cc.Vec3 = posStart.clone();
        let pEnd: cc.Vec3 = posEnd.clone();
        return pStart.multiplyScalar(1 - t).add(pEnd.multiplyScalar(t));
    }

    /**
     * 二次贝塞尔曲线
     * @param t 
     * @param posStart 
     * @param posCon 
     * @param posEnd 
     * @returns 
     */
    static bezierTwo(t: number, posStart: cc.Vec3, posCon: cc.Vec3, posEnd: cc.Vec3): cc.Vec3 {
        if (t > 1) {
            t = 1;
        }
        else if (t < 0) {
            t = 0
        }

        var n = (1 - t);
        var tt = t * t;

        var pStart: cc.Vec3 = posStart.clone();
        var pos = posStart.clone();

        var pCon: cc.Vec3 = posCon.clone();
        var pEnd: cc.Vec3 = posEnd.clone();

        pos.add(pStart.multiplyScalar(n * n));
        pos.add(pCon.multiplyScalar(2 * n * t));
        pos.add(pEnd.multiplyScalar(tt));

        return pos;
    }

    /**
     * 三次贝塞尔
     * @param t 
     * @param posStart 
     * @param posCon1 
     * @param posCon2 
     * @param posEnd 
     * @returns 
     */
    static bezierThree(t: number, posStart: cc.Vec3, posCon1: cc.Vec3, posCon2: cc.Vec3, posEnd: cc.Vec3): cc.Vec3 {
        if (t > 1) {
            t = 1;
        }
        else if (t < 0) {
            t = 0
        }

        var n = (1 - t);
        var nn = n * n;
        var nnn = nn * n;
        var tt = t * t;
        var ttt = tt * t;

        var pStart: cc.Vec3 = posStart.clone();
        var pos = posStart.clone();

        var pCon1: cc.Vec3 = posCon1.clone();
        var pCon2: cc.Vec3 = posCon2.clone();
        var pEnd: cc.Vec3 = posEnd.clone();

        pos.add(pStart.multiplyScalar(nnn));
        pos.add(pCon1.multiplyScalar(3 * nn * t));
        pos.add(pCon2.multiplyScalar(3 * n * tt));
        pos.add(pEnd.multiplyScalar(ttt));

        return pos;
    }

    /**
     * 点乘
     * @param dir1 方向量1
     * @param dir2 方向量2
     */
    public static dot(dir1: cc.Vec3, dir2: cc.Vec3): number {
        var tempDir1: cc.Vec3 = dir1;
        var tempDir2: cc.Vec3 = dir2;

        return tempDir1.x * tempDir2.x + tempDir1.y * tempDir2.y + tempDir1.z * tempDir2.z;
    }

    /**
     * 叉乘
     * @param dir1 方向量1
     * @param dir2 方向量2
     */
    public static cross(dir1: cc.Vec3, dir2: cc.Vec3): cc.Vec3 {
        var i: cc.Vec3 = new cc.Vec3(1, 0, 0);
        var j: cc.Vec3 = new cc.Vec3(0, 1, 0);
        var k: cc.Vec3 = new cc.Vec3(0, 0, 1);

        var tempDir1: cc.Vec3 = new cc.Vec3(dir1.x, dir1.y, dir1.z);
        var tempDir2: cc.Vec3 = new cc.Vec3(dir2.x, dir2.y, dir2.z);

        var iv: cc.Vec3 = i.multiplyScalar(tempDir1.y * tempDir2.z - tempDir2.y * tempDir1.z);
        var jv: cc.Vec3 = j.multiplyScalar(tempDir2.x * tempDir1.z - tempDir1.x * tempDir2.z);
        var kv: cc.Vec3 = k.multiplyScalar(tempDir1.x * tempDir2.y - tempDir2.x * tempDir1.y);

        return iv.add(jv).add(kv);
    }

    /**
     * 获得两个方向向量的角度
     * @param dir1 方向量1
     * @param dir2 方向量2
     */
    public static angle(dir1: cc.Vec3, dir2: cc.Vec3): number {
        let dotValue = this.dot(dir1.clone().normalize(), dir2.clone().normalize());
        return Math.acos(dotValue) / Math.PI * 180 * Math.sign(dotValue);
    }

    /**
     * 从节点1到节点2的角度（带有方向的角度）
     * @param a 角度a
     * @param b 角度b
     */
    static angleEx(dir1: cc.Vec3, dir2: cc.Vec3) {
        let angle: number = Math.atan2((dir2.y - dir1.y), (dir2.x - dir1.x))
        let theta: number = angle * (180 / Math.PI);
        return theta;
    }

    /**
     * 获得方向a到方向b的角度（带有方向的角度）
     * @param a 角度a
     * @param b 角度b
     */
    public static dirAngle(a: cc.Vec3, b: cc.Vec3): number {
        var c: cc.Vec3 = Vec3Util.cross(a, b);
        var angle: number = Vec3Util.angle(a, b);
        // a 到 b 的夹角
        var sign = Math.sign(Vec3Util.dot(c.normalize(), Vec3Util.cross(b.normalize(), a.normalize())));
        return angle * sign;
    }

    /**
     * 获得方向a到方向b的角度（带有方向的角度）
     * @param a 角度a
     * @param b 角度b
     */
    static dirAngleEx(a: cc.Vec3, b: cc.Vec3): number {
        let angleA = Vec3Util.angleEx(cc.Vec3.ZERO.clone(), a);
        let angleB = Vec3Util.angleEx(cc.Vec3.ZERO.clone(), b);
        return angleB - angleA;
    }

    /** v2->v3 */
    static vec2To3(a: cc.Vec2) {
        return new cc.Vec3(a.x, a.y, 0);
    }

    /** 判断两坐标差距是否在范围之内 */
    static isInRange(a: cc.Vec3, b: cc.Vec3, range: number) {
        let disX = Math.abs(a.x - b.x);
        let disY = Math.abs(a.y - b.y);
        return disX < range && disY < range;
    }

    /**
     * 圆心在坐标原点的椭圆，以与x轴逆时针方向的角度计算对应椭圆边上的坐标
     */
    static getEllipsePoint(a: number, b: number, degree: number): cc.Vec2 {
        degree = c2f.utils.math.normalizeDegree(degree);
        let k = Math.tan(cc.misc.degreesToRadians(degree));
        let x = Math.sqrt(b * b / (k * k + b * b / a / a));
        if (degree > 90 && degree < 270) {
            x = -x;
        }
        let y = Math.sqrt(b * b - b * b * x * x / a / a);
        if (degree > 180) {
            y = -y;
        }
        return cc.v2(x, y);
    }

}

declare global {
    interface IUtil {
        vec: typeof Vec3Util;
    }
}
c2f.utils.vec = Vec3Util;
export { };
