
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/utils/ImageUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '59d39d+q4JE+J+yRc2zxkBc', 'ImageUtil');
// c2f-framework/utils/ImageUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 图像工具
 */
var ImageUtil = /** @class */ (function () {
    function ImageUtil() {
    }
    /**
     * 获取纹理中指定像素的颜色，原点为左上角，从像素 (1, 1) 开始。
     * @param texture 纹理
     * @param x x 坐标
     * @param y y 坐标
     * @example
    // 获取纹理左上角第一个像素的颜色
    const color = ImageUtil.getPixelColor(texture, 1, 1);
    cc.color(50, 100, 123, 255);
     */
    ImageUtil.getPixelColor = function (texture, x, y) {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = texture.width;
        canvas.height = texture.height;
        var image = texture.getHtmlElementObj();
        ctx.drawImage(image, 0, 0, texture.width, texture.height);
        var imageData = ctx.getImageData(0, 0, texture.width, texture.height);
        var pixelIndex = ((y - 1) * texture.width * 4) + (x - 1) * 4;
        var pixelData = imageData.data.slice(pixelIndex, pixelIndex + 4);
        var color = new cc.Color(pixelData[0], pixelData[1], pixelData[2], pixelData[3]);
        image.remove();
        canvas.remove();
        return color;
    };
    /**
     * 将图像转为 Base64 字符（仅 png、jpg 或 jpeg 格式资源）（有问题）
     * @param url 图像地址
     * @param callback 完成回调
     */
    ImageUtil.imageToBase64 = function (url, callback) {
        return new Promise(function (res) {
            var _a;
            var extname = (_a = /\.png|\.jpg|\.jpeg/.exec(url)) === null || _a === void 0 ? void 0 : _a[0];
            //@ts-ignore
            if (['.png', '.jpg', '.jpeg'].includes(extname)) {
                var canvas_1 = document.createElement('canvas');
                var ctx_1 = canvas_1.getContext('2d');
                var image_1 = new Image();
                image_1.src = url;
                image_1.onload = function () {
                    canvas_1.height = image_1.height;
                    canvas_1.width = image_1.width;
                    ctx_1.drawImage(image_1, 0, 0);
                    extname = extname === '.jpg' ? 'jpeg' : extname.replace('.', '');
                    var dataURL = canvas_1.toDataURL("image/" + extname);
                    callback && callback(dataURL);
                    res(dataURL);
                    image_1.remove();
                    canvas_1.remove();
                };
            }
            else {
                console.warn('Not a jpg/jpeg or png resource!');
                callback && callback("");
                res("");
            }
        });
    };
    /**
     * 将 Base64 字符转为 cc.Texture2D 资源（有问题）
     * @param base64 Base64 字符
     */
    ImageUtil.base64ToTexture = function (base64) {
        var image = document.createElement('img');
        image.src = base64;
        var texture = new cc.Texture2D();
        //@ts-ignore
        texture.initWithElement(image);
        image.remove();
        return texture;
    };
    /**
     * 将 Base64 字符转为二进制数据（有问题）
     * @param base64 Base64 字符
     */
    ImageUtil.base64ToBlob = function (base64) {
        var strings = base64.split(',');
        //@ts-ignore
        var type = /image\/\w+|;/.exec(strings[0])[0];
        var data = window.atob(strings[1]);
        var arrayBuffer = new ArrayBuffer(data.length);
        var uint8Array = new Uint8Array(arrayBuffer);
        for (var i = 0; i < data.length; i++) {
            uint8Array[i] = data.charCodeAt(i) & 0xff;
        }
        return new Blob([uint8Array], { type: type });
    };
    return ImageUtil;
}());
c2f.utils.image = ImageUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL3V0aWxzL0ltYWdlVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0g7SUFBQTtJQTJGQSxDQUFDO0lBMUZHOzs7Ozs7Ozs7T0FTRztJQUNJLHVCQUFhLEdBQXBCLFVBQXFCLE9BQXFCLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFDNUQsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBRSxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM3QixNQUFNLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDL0IsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixFQUFHLENBQUM7UUFDM0MsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRCxJQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEUsSUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvRCxJQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQU0sS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRixLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx1QkFBYSxHQUFwQixVQUFxQixHQUFXLEVBQUUsUUFBb0M7UUFDbEUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFBLEdBQUc7O1lBQ2xCLElBQUksT0FBTyxTQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMENBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEQsWUFBWTtZQUNaLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDN0MsSUFBTSxRQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDaEQsSUFBTSxLQUFHLEdBQUcsUUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUUsQ0FBQztnQkFDckMsSUFBTSxPQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztnQkFDMUIsT0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7Z0JBQ2hCLE9BQUssQ0FBQyxNQUFNLEdBQUc7b0JBQ1gsUUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFLLENBQUMsTUFBTSxDQUFDO29CQUM3QixRQUFNLENBQUMsS0FBSyxHQUFHLE9BQUssQ0FBQyxLQUFLLENBQUM7b0JBQzNCLEtBQUcsQ0FBQyxTQUFTLENBQUMsT0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDM0IsT0FBTyxHQUFHLE9BQU8sS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ2xFLElBQU0sT0FBTyxHQUFHLFFBQU0sQ0FBQyxTQUFTLENBQUMsV0FBUyxPQUFTLENBQUMsQ0FBQztvQkFDckQsUUFBUSxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDOUIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNiLE9BQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDZixRQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQTthQUNKO2lCQUNJO2dCQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQztnQkFDaEQsUUFBUSxJQUFJLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDekIsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ1g7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7O09BR0c7SUFDSSx5QkFBZSxHQUF0QixVQUF1QixNQUFjO1FBQ2pDLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDbkIsSUFBTSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkMsWUFBWTtRQUNaLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHNCQUFZLEdBQW5CLFVBQW9CLE1BQWM7UUFDOUIsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxZQUFZO1FBQ1osSUFBTSxJQUFJLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQU0sV0FBVyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxJQUFNLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDN0M7UUFDRCxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQTNGQSxBQTJGQyxJQUFBO0FBT0QsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDlm77lg4/lt6XlhbdcbiAqL1xuY2xhc3MgSW1hZ2VVdGlsIHtcbiAgICAvKipcbiAgICAgKiDojrflj5bnurnnkIbkuK3mjIflrprlg4/ntKDnmoTpopzoibLvvIzljp/ngrnkuLrlt6bkuIrop5LvvIzku47lg4/ntKAgKDEsIDEpIOW8gOWni+OAglxuICAgICAqIEBwYXJhbSB0ZXh0dXJlIOe6ueeQhlxuICAgICAqIEBwYXJhbSB4IHgg5Z2Q5qCHXG4gICAgICogQHBhcmFtIHkgeSDlnZDmoIdcbiAgICAgKiBAZXhhbXBsZVxuICAgIC8vIOiOt+WPlue6ueeQhuW3puS4iuinkuesrOS4gOS4quWDj+e0oOeahOminOiJslxuICAgIGNvbnN0IGNvbG9yID0gSW1hZ2VVdGlsLmdldFBpeGVsQ29sb3IodGV4dHVyZSwgMSwgMSk7XG4gICAgY2MuY29sb3IoNTAsIDEwMCwgMTIzLCAyNTUpO1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRQaXhlbENvbG9yKHRleHR1cmU6IGNjLlRleHR1cmUyRCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBjYy5Db2xvciB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHRleHR1cmUud2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0ZXh0dXJlLmhlaWdodDtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSB0ZXh0dXJlLmdldEh0bWxFbGVtZW50T2JqKCkhO1xuICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwLCB0ZXh0dXJlLndpZHRoLCB0ZXh0dXJlLmhlaWdodCk7XG4gICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgdGV4dHVyZS53aWR0aCwgdGV4dHVyZS5oZWlnaHQpO1xuICAgICAgICBjb25zdCBwaXhlbEluZGV4ID0gKCh5IC0gMSkgKiB0ZXh0dXJlLndpZHRoICogNCkgKyAoeCAtIDEpICogNDtcbiAgICAgICAgY29uc3QgcGl4ZWxEYXRhID0gaW1hZ2VEYXRhLmRhdGEuc2xpY2UocGl4ZWxJbmRleCwgcGl4ZWxJbmRleCArIDQpO1xuICAgICAgICBjb25zdCBjb2xvciA9IG5ldyBjYy5Db2xvcihwaXhlbERhdGFbMF0sIHBpeGVsRGF0YVsxXSwgcGl4ZWxEYXRhWzJdLCBwaXhlbERhdGFbM10pO1xuICAgICAgICBpbWFnZS5yZW1vdmUoKTtcbiAgICAgICAgY2FudmFzLnJlbW92ZSgpO1xuICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bCG5Zu+5YOP6L2s5Li6IEJhc2U2NCDlrZfnrKbvvIjku4UgcG5n44CBanBnIOaIliBqcGVnIOagvOW8j+i1hOa6kO+8ie+8iOaciemXrumimO+8iVxuICAgICAqIEBwYXJhbSB1cmwg5Zu+5YOP5Zyw5Z2AXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIOWujOaIkOWbnuiwg1xuICAgICAqL1xuICAgIHN0YXRpYyBpbWFnZVRvQmFzZTY0KHVybDogc3RyaW5nLCBjYWxsYmFjaz86IChkYXRhVVJMOiBzdHJpbmcpID0+IHZvaWQpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzID0+IHtcbiAgICAgICAgICAgIGxldCBleHRuYW1lID0gL1xcLnBuZ3xcXC5qcGd8XFwuanBlZy8uZXhlYyh1cmwpPy5bMF07XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGlmIChbJy5wbmcnLCAnLmpwZycsICcuanBlZyddLmluY2x1ZGVzKGV4dG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJykhO1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gdXJsO1xuICAgICAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGltYWdlLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gaW1hZ2Uud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICBleHRuYW1lID0gZXh0bmFtZSA9PT0gJy5qcGcnID8gJ2pwZWcnIDogZXh0bmFtZSEucmVwbGFjZSgnLicsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YVVSTCA9IGNhbnZhcy50b0RhdGFVUkwoYGltYWdlLyR7ZXh0bmFtZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soZGF0YVVSTCk7XG4gICAgICAgICAgICAgICAgICAgIHJlcyhkYXRhVVJMKTtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2UucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ05vdCBhIGpwZy9qcGVnIG9yIHBuZyByZXNvdXJjZSEnKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhcIlwiKTtcbiAgICAgICAgICAgICAgICByZXMoXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWwhiBCYXNlNjQg5a2X56ym6L2s5Li6IGNjLlRleHR1cmUyRCDotYTmupDvvIjmnInpl67popjvvIlcbiAgICAgKiBAcGFyYW0gYmFzZTY0IEJhc2U2NCDlrZfnrKZcbiAgICAgKi9cbiAgICBzdGF0aWMgYmFzZTY0VG9UZXh0dXJlKGJhc2U2NDogc3RyaW5nKTogY2MuVGV4dHVyZTJEIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gYmFzZTY0O1xuICAgICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IGNjLlRleHR1cmUyRCgpO1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgdGV4dHVyZS5pbml0V2l0aEVsZW1lbnQoaW1hZ2UpO1xuICAgICAgICBpbWFnZS5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bCGIEJhc2U2NCDlrZfnrKbovazkuLrkuozov5vliLbmlbDmja7vvIjmnInpl67popjvvIlcbiAgICAgKiBAcGFyYW0gYmFzZTY0IEJhc2U2NCDlrZfnrKZcbiAgICAgKi9cbiAgICBzdGF0aWMgYmFzZTY0VG9CbG9iKGJhc2U2NDogc3RyaW5nKTogQmxvYiB7XG4gICAgICAgIGNvbnN0IHN0cmluZ3MgPSBiYXNlNjQuc3BsaXQoJywnKTtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHR5cGUgPSAvaW1hZ2VcXC9cXHcrfDsvLmV4ZWMoc3RyaW5nc1swXSlbMF07XG4gICAgICAgIGNvbnN0IGRhdGEgPSB3aW5kb3cuYXRvYihzdHJpbmdzWzFdKTtcbiAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoZGF0YS5sZW5ndGgpO1xuICAgICAgICBjb25zdCB1aW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHVpbnQ4QXJyYXlbaV0gPSBkYXRhLmNoYXJDb2RlQXQoaSkgJiAweGZmO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQmxvYihbdWludDhBcnJheV0sIHsgdHlwZTogdHlwZSB9KTtcbiAgICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBpbnRlcmZhY2UgSVV0aWwge1xuICAgICAgICBpbWFnZTogdHlwZW9mIEltYWdlVXRpbDtcbiAgICB9XG59XG5jMmYudXRpbHMuaW1hZ2UgPSBJbWFnZVV0aWw7XG5leHBvcnQgeyB9O1xuIl19