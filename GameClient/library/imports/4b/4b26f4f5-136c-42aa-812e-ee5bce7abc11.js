"use strict";
cc._RF.push(module, '4b26fT1E2xCqoEu7lvOerwR', 'Vec3Util');
// c2f-framework/utils/Vec3Util.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 向量工具 */
var Vec3Util = /** @class */ (function () {
    function Vec3Util() {
    }
    Object.defineProperty(Vec3Util, "x", {
        /**
         * X轴
         */
        get: function () {
            return new cc.Vec3(1, 0, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec3Util, "y", {
        /**
         * Y轴
         */
        get: function () {
            return new cc.Vec3(0, 1, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec3Util, "z", {
        /**
         * Z轴
         */
        get: function () {
            return new cc.Vec3(0, 0, 1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec3Util, "left", {
        /**
         * 左向量
         */
        get: function () {
            return new cc.Vec3(-1, 0, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec3Util, "right", {
        /**
         * 右向量
         */
        get: function () {
            return new cc.Vec3(1, 0, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec3Util, "up", {
        /**
         * 上向量
         */
        get: function () {
            return new cc.Vec3(0, 1, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec3Util, "down", {
        /**
         * 下向量
         */
        get: function () {
            return new cc.Vec3(0, -1, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec3Util, "forward", {
        /**
         * 前向量
         */
        get: function () {
            return new cc.Vec3(0, 0, 1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec3Util, "back", {
        /**
         * 后向量
         */
        get: function () {
            return new cc.Vec3(0, 0, -1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec3Util, "one", {
        /**
         * 1向量
         */
        get: function () {
            return new cc.Vec3(1, 1, 1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec3Util, "zero", {
        /**
         * 0向量
         */
        get: function () {
            return new cc.Vec3(0, 0, 0);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 随时间变化进度值
     * @param start  起始位置
     * @param end    结束位置
     * @param t      进度[0，1]
     */
    Vec3Util.progress = function (start, end, t) {
        var current = new cc.Vec3();
        current.x = c2f.utils.math.progress(start.x, end.x, t);
        current.y = c2f.utils.math.progress(start.y, end.y, t);
        current.z = c2f.utils.math.progress(start.z, end.z, t);
        return current;
    };
    /**
     * 求两个三维向量的和
     * @param pos1  向量1
     * @param pos2  向量2
     */
    Vec3Util.add = function (pos1, pos2) {
        var outPos = new cc.Vec3();
        cc.Vec3.add(outPos, pos1, pos2);
        return outPos;
    };
    /**
     * 求两个三维向量的差
     * @param pos1  向量1
     * @param pos2  向量2
     */
    Vec3Util.sub = function (pos1, pos2) {
        var outPos = new cc.Vec3();
        cc.Vec3.subtract(outPos, pos1, pos2);
        return outPos;
    };
    /**
     * 三维向量乘以常量
     * @param pos     向量
     * @param scalar  常量
     */
    Vec3Util.mul = function (pos, scalar) {
        var outPos = new cc.Vec3();
        cc.Vec3.multiplyScalar(outPos, pos, scalar);
        return outPos;
    };
    /**
     * 三维向量除常量
     * @param pos     向量
     * @param scalar  常量
     */
    Vec3Util.div = function (pos, scalar) {
        var outPos = new cc.Vec3();
        outPos.x = pos.x / scalar;
        outPos.y = pos.y / scalar;
        outPos.z = pos.z / scalar;
        return outPos;
    };
    /**
     * 判断两个三维向量的值是否相等
     * @param pos1  向量1
     * @param pos2  向量2
     */
    Vec3Util.equals = function (pos1, pos2) {
        if (pos1.x == pos2.x && pos1.y == pos2.y && pos1.z == pos2.z) {
            return true;
        }
        return false;
    };
    /**
     * 判断两个三维向量的值是否相等
     * @param pos1  向量1
     * @param pos2  向量2
     */
    Vec3Util.v2Equals = function (pos1, pos2) {
        if (pos1.x == pos2.x && pos1.y == pos2.y) {
            return true;
        }
        return false;
    };
    /**
     * 三维向量的模
     * @param pos  向量
     */
    Vec3Util.magnitude = function (pos) {
        return pos.len();
    };
    /**
     * 三维向量归一化
     * @param pos  向量
     */
    Vec3Util.normalize = function (pos) {
        var outPos = new cc.Vec3(pos.x, pos.y, pos.z);
        return outPos.normalize();
    };
    /**
     * 获得位置1，到位置2的方向
     * @param pos1  向量1
     * @param pos2  向量2
     */
    Vec3Util.direction = function (pos1, pos2) {
        var outPos = new cc.Vec3();
        cc.Vec3.subtract(outPos, pos2, pos1);
        return outPos.normalize();
    };
    /**
     * 获得两点间的距离
     * @param pos1  向量1
     * @param pos2  向量2
     */
    Vec3Util.distance = function (pos1, pos2) {
        return cc.Vec3.distance(pos1, pos2);
    };
    /**
     * 插值运算
     * @param posStart  开始俏步
     * @param posEnd    结束位置
     * @param t         时间
     */
    Vec3Util.lerp = function (posStart, posEnd, t) {
        return this.bezierOne(t, posStart, posEnd);
    };
    /**
     * 球面插值
     * @param from  起点
     * @param to    终点
     * @param t     时间
     */
    Vec3Util.slerp = function (from, to, t) {
        if (t <= 0) {
            return from;
        }
        else if (t >= 1) {
            return to;
        }
        var dir = this.rotateTo(from, to, (cc.Vec3.angle(from, to) / Math.PI * 180) * t);
        var lenght = to.len() * t + from.len() * (1 - t);
        return (dir.normalize()).multiplyScalar(lenght);
    };
    /**
     * 向量旋转一个角度
     * @param from  起点
     * @param to    终点
     * @param angle 角并
     */
    Vec3Util.rotateTo = function (from, to, angle) {
        //如果两个方向角度为0，则返回目标
        if (cc.Vec3.angle(from, to) == 0) {
            return to;
        }
        var axis = new cc.Vec3(); // 获得旋转轴
        cc.Vec3.cross(axis, from, to);
        axis.normalize();
        var radian = angle * Math.PI / 180; // 获得弧度
        var rotateMatrix = new cc.Mat4();
        rotateMatrix.rotate(radian, axis);
        return new cc.Vec3(from.x * rotateMatrix.m[0] + from.y * rotateMatrix.m[4] + from.z * rotateMatrix.m[8], from.x * rotateMatrix.m[1] + from.y * rotateMatrix.m[5] + from.z * rotateMatrix.m[9], from.x * rotateMatrix.m[2] + from.y * rotateMatrix.m[6] + from.z * rotateMatrix.m[10]);
    };
    /**
     * 一次贝塞尔即为线性插值函数
     * @param t
     * @param posStart
     * @param posEnd
     * @returns
     */
    Vec3Util.bezierOne = function (t, posStart, posEnd) {
        if (t > 1) {
            t = 1;
        }
        else if (t < 0) {
            t = 0;
        }
        var pStart = posStart.clone();
        var pEnd = posEnd.clone();
        return pStart.multiplyScalar(1 - t).add(pEnd.multiplyScalar(t));
    };
    /**
     * 二次贝塞尔曲线
     * @param t
     * @param posStart
     * @param posCon
     * @param posEnd
     * @returns
     */
    Vec3Util.bezierTwo = function (t, posStart, posCon, posEnd) {
        if (t > 1) {
            t = 1;
        }
        else if (t < 0) {
            t = 0;
        }
        var n = (1 - t);
        var tt = t * t;
        var pStart = posStart.clone();
        var pos = posStart.clone();
        var pCon = posCon.clone();
        var pEnd = posEnd.clone();
        pos.add(pStart.multiplyScalar(n * n));
        pos.add(pCon.multiplyScalar(2 * n * t));
        pos.add(pEnd.multiplyScalar(tt));
        return pos;
    };
    /**
     * 三次贝塞尔
     * @param t
     * @param posStart
     * @param posCon1
     * @param posCon2
     * @param posEnd
     * @returns
     */
    Vec3Util.bezierThree = function (t, posStart, posCon1, posCon2, posEnd) {
        if (t > 1) {
            t = 1;
        }
        else if (t < 0) {
            t = 0;
        }
        var n = (1 - t);
        var nn = n * n;
        var nnn = nn * n;
        var tt = t * t;
        var ttt = tt * t;
        var pStart = posStart.clone();
        var pos = posStart.clone();
        var pCon1 = posCon1.clone();
        var pCon2 = posCon2.clone();
        var pEnd = posEnd.clone();
        pos.add(pStart.multiplyScalar(nnn));
        pos.add(pCon1.multiplyScalar(3 * nn * t));
        pos.add(pCon2.multiplyScalar(3 * n * tt));
        pos.add(pEnd.multiplyScalar(ttt));
        return pos;
    };
    /**
     * 点乘
     * @param dir1 方向量1
     * @param dir2 方向量2
     */
    Vec3Util.dot = function (dir1, dir2) {
        var tempDir1 = dir1;
        var tempDir2 = dir2;
        return tempDir1.x * tempDir2.x + tempDir1.y * tempDir2.y + tempDir1.z * tempDir2.z;
    };
    /**
     * 叉乘
     * @param dir1 方向量1
     * @param dir2 方向量2
     */
    Vec3Util.cross = function (dir1, dir2) {
        var i = new cc.Vec3(1, 0, 0);
        var j = new cc.Vec3(0, 1, 0);
        var k = new cc.Vec3(0, 0, 1);
        var tempDir1 = new cc.Vec3(dir1.x, dir1.y, dir1.z);
        var tempDir2 = new cc.Vec3(dir2.x, dir2.y, dir2.z);
        var iv = i.multiplyScalar(tempDir1.y * tempDir2.z - tempDir2.y * tempDir1.z);
        var jv = j.multiplyScalar(tempDir2.x * tempDir1.z - tempDir1.x * tempDir2.z);
        var kv = k.multiplyScalar(tempDir1.x * tempDir2.y - tempDir2.x * tempDir1.y);
        return iv.add(jv).add(kv);
    };
    /**
     * 获得两个方向向量的角度
     * @param dir1 方向量1
     * @param dir2 方向量2
     */
    Vec3Util.angle = function (dir1, dir2) {
        var dotValue = this.dot(dir1.clone().normalize(), dir2.clone().normalize());
        return Math.acos(dotValue) / Math.PI * 180 * Math.sign(dotValue);
    };
    /**
     * 从节点1到节点2的角度（带有方向的角度）
     * @param a 角度a
     * @param b 角度b
     */
    Vec3Util.angleEx = function (dir1, dir2) {
        var angle = Math.atan2((dir2.y - dir1.y), (dir2.x - dir1.x));
        var theta = angle * (180 / Math.PI);
        return theta;
    };
    /**
     * 获得方向a到方向b的角度（带有方向的角度）
     * @param a 角度a
     * @param b 角度b
     */
    Vec3Util.dirAngle = function (a, b) {
        var c = Vec3Util.cross(a, b);
        var angle = Vec3Util.angle(a, b);
        // a 到 b 的夹角
        var sign = Math.sign(Vec3Util.dot(c.normalize(), Vec3Util.cross(b.normalize(), a.normalize())));
        return angle * sign;
    };
    /**
     * 获得方向a到方向b的角度（带有方向的角度）
     * @param a 角度a
     * @param b 角度b
     */
    Vec3Util.dirAngleEx = function (a, b) {
        var angleA = Vec3Util.angleEx(cc.Vec3.ZERO.clone(), a);
        var angleB = Vec3Util.angleEx(cc.Vec3.ZERO.clone(), b);
        return angleB - angleA;
    };
    /** v2->v3 */
    Vec3Util.vec2To3 = function (a) {
        return new cc.Vec3(a.x, a.y, 0);
    };
    /** 判断两坐标差距是否在范围之内 */
    Vec3Util.isInRange = function (a, b, range) {
        var disX = Math.abs(a.x - b.x);
        var disY = Math.abs(a.y - b.y);
        return disX < range && disY < range;
    };
    /**
     * 圆心在坐标原点的椭圆，以与x轴逆时针方向的角度计算对应椭圆边上的坐标
     */
    Vec3Util.getEllipsePoint = function (a, b, degree) {
        degree = c2f.utils.math.normalizeDegree(degree);
        var k = Math.tan(cc.misc.degreesToRadians(degree));
        var x = Math.sqrt(b * b / (k * k + b * b / a / a));
        if (degree > 90 && degree < 270) {
            x = -x;
        }
        var y = Math.sqrt(b * b - b * b * x * x / a / a);
        if (degree > 180) {
            y = -y;
        }
        return cc.v2(x, y);
    };
    return Vec3Util;
}());
c2f.utils.vec = Vec3Util;

cc._RF.pop();