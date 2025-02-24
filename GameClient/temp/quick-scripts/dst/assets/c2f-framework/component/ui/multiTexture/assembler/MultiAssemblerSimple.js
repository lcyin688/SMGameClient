
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/ui/multiTexture/assembler/MultiAssemblerSimple.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa9e0lVvBJP9I4EFlhtYCJc', 'MultiAssemblerSimple');
// c2f-framework/component/ui/multiTexture/assembler/MultiAssemblerSimple.ts

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
var MultiAssembler_1 = require("./MultiAssembler");
var MultiAssemblerSimple = /** @class */ (function (_super) {
    __extends(MultiAssemblerSimple, _super);
    function MultiAssemblerSimple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultiAssemblerSimple.prototype.updateRenderData = function (sprite) {
        this.packToDynamicAtlas(sprite, sprite._spriteFrame);
        if (sprite._vertsDirty) {
            this.updateUVs(sprite);
            this.updateVerts(sprite);
            this.updateTextureIdx(sprite);
            sprite._vertsDirty = false;
        }
    };
    MultiAssemblerSimple.prototype.updateUVs = function (sprite) {
        var uv = sprite._spriteFrame.uv;
        var uvOffset = this.uvOffset;
        var floatsPerVert = this.floatsPerVert;
        var verts = this._renderData.vDatas[0];
        for (var i = 0; i < 4; i++) {
            var srcOffset = i * 2;
            var dstOffset = floatsPerVert * i + uvOffset;
            verts[dstOffset] = uv[srcOffset];
            verts[dstOffset + 1] = uv[srcOffset + 1];
        }
    };
    MultiAssemblerSimple.prototype.updateVerts = function (sprite) {
        var node = sprite.node, cw = node.width, ch = node.height, appx = node.anchorX * cw, appy = node.anchorY * ch, l, b, r, t;
        if (sprite.trim) {
            l = -appx;
            b = -appy;
            r = cw - appx;
            t = ch - appy;
        }
        else {
            var frame = sprite.spriteFrame, ow = frame._originalSize.width, oh = frame._originalSize.height, rw = frame._rect.width, rh = frame._rect.height, offset = frame._offset, scaleX = cw / ow, scaleY = ch / oh;
            var trimLeft = offset.x + (ow - rw) / 2;
            var trimRight = offset.x - (ow - rw) / 2;
            var trimBottom = offset.y + (oh - rh) / 2;
            var trimTop = offset.y - (oh - rh) / 2;
            l = trimLeft * scaleX - appx;
            b = trimBottom * scaleY - appy;
            r = cw + trimRight * scaleX - appx;
            t = ch + trimTop * scaleY - appy;
        }
        var local = this._local;
        local[0] = l;
        local[1] = b;
        local[2] = r;
        local[3] = t;
        this.updateWorldVerts(sprite);
    };
    return MultiAssemblerSimple;
}(MultiAssembler_1.default));
exports.default = MultiAssemblerSimple;
if (CC_NATIVERENDERER) {
    var proto = MultiAssemblerSimple.prototype;
    //@ts-ignore
    var nativeProto_1 = renderer.SimpleSprite2D.prototype;
    proto.updateWorldVerts = function (comp) {
        //@ts-ignore
        this._dirtyPtr[0] |= cc.Assembler.FLAG_VERTICES_DIRTY;
    };
    //@ts-ignore
    proto._extendNative = function () {
        nativeProto_1.ctor.call(this);
    };
    proto.initLocal = function () {
        this._local = new Float32Array(8);
        nativeProto_1.setLocalData.call(this, this._local);
    };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC91aS9tdWx0aVRleHR1cmUvYXNzZW1ibGVyL011bHRpQXNzZW1ibGVyU2ltcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUU5QztJQUFrRCx3Q0FBYztJQUFoRTs7SUEyREEsQ0FBQztJQTFEVSwrQ0FBZ0IsR0FBdkIsVUFBd0IsTUFBTTtRQUMxQixJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVyRCxJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFFTSx3Q0FBUyxHQUFoQixVQUFpQixNQUFNO1FBQ25CLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO1FBQ2hDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDN0IsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN2QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hCLElBQUksU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEIsSUFBSSxTQUFTLEdBQUcsYUFBYSxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUM7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QVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO0lBRXBELEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLElBQUk7UUFDbkMsWUFBWTtRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQztJQUMxRCxDQUFDLENBQUM7SUFFRixZQUFZO0lBQ1osS0FBSyxDQUFDLGFBQWEsR0FBRztRQUNsQixhQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUM7SUFFRixLQUFLLENBQUMsU0FBUyxHQUFHO1FBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxhQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JELENBQUMsQ0FBQztDQUNMIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE11bHRpQXNzZW1ibGVyIGZyb20gXCIuL011bHRpQXNzZW1ibGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpQXNzZW1ibGVyU2ltcGxlIGV4dGVuZHMgTXVsdGlBc3NlbWJsZXIge1xuICAgIHB1YmxpYyB1cGRhdGVSZW5kZXJEYXRhKHNwcml0ZSkge1xuICAgICAgICB0aGlzLnBhY2tUb0R5bmFtaWNBdGxhcyhzcHJpdGUsIHNwcml0ZS5fc3ByaXRlRnJhbWUpO1xuXG4gICAgICAgIGlmIChzcHJpdGUuX3ZlcnRzRGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVVZzKHNwcml0ZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZlcnRzKHNwcml0ZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRleHR1cmVJZHgoc3ByaXRlKTtcbiAgICAgICAgICAgIHNwcml0ZS5fdmVydHNEaXJ0eSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVVWcyhzcHJpdGUpIHtcbiAgICAgICAgbGV0IHV2ID0gc3ByaXRlLl9zcHJpdGVGcmFtZS51djtcbiAgICAgICAgbGV0IHV2T2Zmc2V0ID0gdGhpcy51dk9mZnNldDtcbiAgICAgICAgbGV0IGZsb2F0c1BlclZlcnQgPSB0aGlzLmZsb2F0c1BlclZlcnQ7XG4gICAgICAgIGxldCB2ZXJ0cyA9IHRoaXMuX3JlbmRlckRhdGEudkRhdGFzWzBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNyY09mZnNldCA9IGkgKiAyO1xuICAgICAgICAgICAgbGV0IGRzdE9mZnNldCA9IGZsb2F0c1BlclZlcnQgKiBpICsgdXZPZmZzZXQ7XG4gICAgICAgICAgICB2ZXJ0c1tkc3RPZmZzZXRdID0gdXZbc3JjT2Zmc2V0XTtcbiAgICAgICAgICAgIHZlcnRzW2RzdE9mZnNldCArIDFdID0gdXZbc3JjT2Zmc2V0ICsgMV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlVmVydHMoc3ByaXRlKSB7XG4gICAgICAgIGxldCBub2RlID0gc3ByaXRlLm5vZGUsXG4gICAgICAgICAgICBjdyA9IG5vZGUud2lkdGgsIGNoID0gbm9kZS5oZWlnaHQsXG4gICAgICAgICAgICBhcHB4ID0gbm9kZS5hbmNob3JYICogY3csIGFwcHkgPSBub2RlLmFuY2hvclkgKiBjaCxcbiAgICAgICAgICAgIGwsIGIsIHIsIHQ7XG4gICAgICAgIGlmIChzcHJpdGUudHJpbSkge1xuICAgICAgICAgICAgbCA9IC1hcHB4O1xuICAgICAgICAgICAgYiA9IC1hcHB5O1xuICAgICAgICAgICAgciA9IGN3IC0gYXBweDtcbiAgICAgICAgICAgIHQgPSBjaCAtIGFwcHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgZnJhbWUgPSBzcHJpdGUuc3ByaXRlRnJhbWUsXG4gICAgICAgICAgICAgICAgb3cgPSBmcmFtZS5fb3JpZ2luYWxTaXplLndpZHRoLCBvaCA9IGZyYW1lLl9vcmlnaW5hbFNpemUuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHJ3ID0gZnJhbWUuX3JlY3Qud2lkdGgsIHJoID0gZnJhbWUuX3JlY3QuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIG9mZnNldCA9IGZyYW1lLl9vZmZzZXQsXG4gICAgICAgICAgICAgICAgc2NhbGVYID0gY3cgLyBvdywgc2NhbGVZID0gY2ggLyBvaDtcbiAgICAgICAgICAgIGxldCB0cmltTGVmdCA9IG9mZnNldC54ICsgKG93IC0gcncpIC8gMjtcbiAgICAgICAgICAgIGxldCB0cmltUmlnaHQgPSBvZmZzZXQueCAtIChvdyAtIHJ3KSAvIDI7XG4gICAgICAgICAgICBsZXQgdHJpbUJvdHRvbSA9IG9mZnNldC55ICsgKG9oIC0gcmgpIC8gMjtcbiAgICAgICAgICAgIGxldCB0cmltVG9wID0gb2Zmc2V0LnkgLSAob2ggLSByaCkgLyAyO1xuICAgICAgICAgICAgbCA9IHRyaW1MZWZ0ICogc2NhbGVYIC0gYXBweDtcbiAgICAgICAgICAgIGIgPSB0cmltQm90dG9tICogc2NhbGVZIC0gYXBweTtcbiAgICAgICAgICAgIHIgPSBjdyArIHRyaW1SaWdodCAqIHNjYWxlWCAtIGFwcHg7XG4gICAgICAgICAgICB0ID0gY2ggKyB0cmltVG9wICogc2NhbGVZIC0gYXBweTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsb2NhbCA9IHRoaXMuX2xvY2FsO1xuICAgICAgICBsb2NhbFswXSA9IGw7XG4gICAgICAgIGxvY2FsWzFdID0gYjtcbiAgICAgICAgbG9jYWxbMl0gPSByO1xuICAgICAgICBsb2NhbFszXSA9IHQ7XG4gICAgICAgIHRoaXMudXBkYXRlV29ybGRWZXJ0cyhzcHJpdGUpO1xuICAgIH1cbn1cblxuaWYgKENDX05BVElWRVJFTkRFUkVSKSB7XG4gICAgbGV0IHByb3RvID0gTXVsdGlBc3NlbWJsZXJTaW1wbGUucHJvdG90eXBlO1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIGxldCBuYXRpdmVQcm90byA9IHJlbmRlcmVyLlNpbXBsZVNwcml0ZTJELnByb3RvdHlwZTtcblxuICAgIHByb3RvLnVwZGF0ZVdvcmxkVmVydHMgPSBmdW5jdGlvbiAoY29tcCkge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5fZGlydHlQdHJbMF0gfD0gY2MuQXNzZW1ibGVyLkZMQUdfVkVSVElDRVNfRElSVFk7XG4gICAgfTtcblxuICAgIC8vQHRzLWlnbm9yZVxuICAgIHByb3RvLl9leHRlbmROYXRpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5hdGl2ZVByb3RvLmN0b3IuY2FsbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgcHJvdG8uaW5pdExvY2FsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9sb2NhbCA9IG5ldyBGbG9hdDMyQXJyYXkoOCk7XG4gICAgICAgIG5hdGl2ZVByb3RvLnNldExvY2FsRGF0YS5jYWxsKHRoaXMsIHRoaXMuX2xvY2FsKTtcbiAgICB9O1xufVxuIl19