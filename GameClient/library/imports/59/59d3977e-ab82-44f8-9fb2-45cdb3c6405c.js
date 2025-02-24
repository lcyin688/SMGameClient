"use strict";
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