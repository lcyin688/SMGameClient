
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/ui/multiTexture/assembler/MultiAssemblerSliced.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0f3a2cHs8tKfqzmBuX9KEnV', 'MultiAssemblerSliced');
// c2f-framework/component/ui/multiTexture/assembler/MultiAssemblerSliced.ts

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
var MultiAssemblerSliced = /** @class */ (function (_super) {
    __extends(MultiAssemblerSliced, _super);
    function MultiAssemblerSliced() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultiAssemblerSliced.prototype.initData = function () {
        this.verticesCount = 16;
        this.indicesCount = 54;
        if (this._renderData.meshCount > 0)
            return;
        var data = this._renderData;
        // createFlexData支持创建指定格式的renderData
        data.createFlexData(0, this.verticesCount, this.indicesCount, this.getVfmt());
        var indices = this._renderData.iDatas[0];
        var indexOffset = 0;
        for (var r = 0; r < 3; ++r) {
            for (var c = 0; c < 3; ++c) {
                var start = r * 4 + c;
                indices[indexOffset++] = start;
                indices[indexOffset++] = start + 1;
                indices[indexOffset++] = start + 4;
                indices[indexOffset++] = start + 1;
                indices[indexOffset++] = start + 5;
                indices[indexOffset++] = start + 4;
            }
        }
    };
    MultiAssemblerSliced.prototype.initLocal = function () {
        this._local = [];
        this._local.length = 8;
    };
    MultiAssemblerSliced.prototype.updateRenderData = function (sprite) {
        var frame = sprite._spriteFrame;
        this.packToDynamicAtlas(sprite, frame);
        if (sprite._vertsDirty) {
            this.updateUVs(sprite);
            this.updateVerts(sprite);
            this.updateTextureIdx(sprite);
            sprite._vertsDirty = false;
        }
    };
    MultiAssemblerSliced.prototype.updateVerts = function (sprite) {
        var node = sprite.node, width = node.width, height = node.height, appx = node.anchorX * width, appy = node.anchorY * height;
        var frame = sprite.spriteFrame;
        var leftWidth = frame.insetLeft;
        var rightWidth = frame.insetRight;
        var topHeight = frame.insetTop;
        var bottomHeight = frame.insetBottom;
        var sizableWidth = width - leftWidth - rightWidth;
        var sizableHeight = height - topHeight - bottomHeight;
        var xScale = width / (leftWidth + rightWidth);
        var yScale = height / (topHeight + bottomHeight);
        xScale = (isNaN(xScale) || xScale > 1) ? 1 : xScale;
        yScale = (isNaN(yScale) || yScale > 1) ? 1 : yScale;
        sizableWidth = sizableWidth < 0 ? 0 : sizableWidth;
        sizableHeight = sizableHeight < 0 ? 0 : sizableHeight;
        // update local
        var local = this._local;
        local[0] = -appx;
        local[1] = -appy;
        local[2] = leftWidth * xScale - appx;
        local[3] = bottomHeight * yScale - appy;
        local[4] = local[2] + sizableWidth;
        local[5] = local[3] + sizableHeight;
        local[6] = width - appx;
        local[7] = height - appy;
        this.updateWorldVerts(sprite);
    };
    MultiAssemblerSliced.prototype.updateUVs = function (sprite) {
        var verts = this._renderData.vDatas[0];
        var uvSliced = sprite.spriteFrame.uvSliced;
        var uvOffset = this.uvOffset;
        var floatsPerVert = this.floatsPerVert;
        for (var row = 0; row < 4; ++row) {
            for (var col = 0; col < 4; ++col) {
                var vid = row * 4 + col;
                var uv = uvSliced[vid];
                var voffset = vid * floatsPerVert;
                verts[voffset + uvOffset] = uv.u;
                verts[voffset + uvOffset + 1] = uv.v;
            }
        }
    };
    MultiAssemblerSliced.prototype.updateWorldVerts = function (sprite) {
        var matrix = sprite.node._worldMatrix;
        var matrixm = matrix.m, a = matrixm[0], b = matrixm[1], c = matrixm[4], d = matrixm[5], tx = matrixm[12], ty = matrixm[13];
        var local = this._local;
        var world = this._renderData.vDatas[0];
        var floatsPerVert = this.floatsPerVert;
        for (var row = 0; row < 4; ++row) {
            var localRowY = local[row * 2 + 1];
            for (var col = 0; col < 4; ++col) {
                var localColX = local[col * 2];
                var worldIndex = (row * 4 + col) * floatsPerVert;
                world[worldIndex] = localColX * a + localRowY * c + tx;
                world[worldIndex + 1] = localColX * b + localRowY * d + ty;
            }
        }
    };
    return MultiAssemblerSliced;
}(MultiAssembler_1.default));
exports.default = MultiAssemblerSliced;
if (CC_NATIVERENDERER) {
    var proto = MultiAssemblerSliced.prototype;
    //@ts-ignore
    var nativeProto_1 = renderer.SlicedSprite2D.prototype;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC91aS9tdWx0aVRleHR1cmUvYXNzZW1ibGVyL011bHRpQXNzZW1ibGVyU2xpY2VkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUU5QztJQUFrRCx3Q0FBYztJQUFoRTs7SUFnSEEsQ0FBQztJQS9HVSx1Q0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFFdkIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxDQUFDO1lBQUUsT0FBTztRQUMzQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFFOUUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtnQkFDeEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3RCLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDL0IsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsS0FBSyxHQUFHLENB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QyxDQUFDO0lBQ3JELENBQUMsQ0FBQztDQUNMIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE11bHRpQXNzZW1ibGVyIGZyb20gXCIuL011bHRpQXNzZW1ibGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpQXNzZW1ibGVyU2xpY2VkIGV4dGVuZHMgTXVsdGlBc3NlbWJsZXIge1xuICAgIHB1YmxpYyBpbml0RGF0YSgpIHtcbiAgICAgICAgdGhpcy52ZXJ0aWNlc0NvdW50ID0gMTY7XG4gICAgICAgIHRoaXMuaW5kaWNlc0NvdW50ID0gNTQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX3JlbmRlckRhdGEubWVzaENvdW50ID4gMCkgcmV0dXJuO1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuX3JlbmRlckRhdGE7XG4gICAgICAgIC8vIGNyZWF0ZUZsZXhEYXRh5pSv5oyB5Yib5bu65oyH5a6a5qC85byP55qEcmVuZGVyRGF0YVxuICAgICAgICBkYXRhLmNyZWF0ZUZsZXhEYXRhKDAsIHRoaXMudmVydGljZXNDb3VudCwgdGhpcy5pbmRpY2VzQ291bnQsIHRoaXMuZ2V0VmZtdCgpKTtcblxuICAgICAgICBsZXQgaW5kaWNlcyA9IHRoaXMuX3JlbmRlckRhdGEuaURhdGFzWzBdO1xuICAgICAgICBsZXQgaW5kZXhPZmZzZXQgPSAwO1xuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IDM7ICsrcikge1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCAzOyArK2MpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnQgPSByICogNCArIGM7XG4gICAgICAgICAgICAgICAgaW5kaWNlc1tpbmRleE9mZnNldCsrXSA9IHN0YXJ0O1xuICAgICAgICAgICAgICAgIGluZGljZXNbaW5kZXhPZmZzZXQrK10gPSBzdGFydCArIDE7XG4gICAgICAgICAgICAgICAgaW5kaWNlc1tpbmRleE9mZnNldCsrXSA9IHN0YXJ0ICsgNDtcbiAgICAgICAgICAgICAgICBpbmRpY2VzW2luZGV4T2Zmc2V0KytdID0gc3RhcnQgKyAxO1xuICAgICAgICAgICAgICAgIGluZGljZXNbaW5kZXhPZmZzZXQrK10gPSBzdGFydCArIDU7XG4gICAgICAgICAgICAgICAgaW5kaWNlc1tpbmRleE9mZnNldCsrXSA9IHN0YXJ0ICsgNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBpbml0TG9jYWwoKSB7XG4gICAgICAgIHRoaXMuX2xvY2FsID0gW107XG4gICAgICAgIHRoaXMuX2xvY2FsLmxlbmd0aCA9IDg7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVJlbmRlckRhdGEoc3ByaXRlKSB7XG4gICAgICAgIGxldCBmcmFtZSA9IHNwcml0ZS5fc3ByaXRlRnJhbWU7XG4gICAgICAgIHRoaXMucGFja1RvRHluYW1pY0F0bGFzKHNwcml0ZSwgZnJhbWUpO1xuXG4gICAgICAgIGlmIChzcHJpdGUuX3ZlcnRzRGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVVZzKHNwcml0ZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZlcnRzKHNwcml0ZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRleHR1cmVJZHgoc3ByaXRlKTtcbiAgICAgICAgICAgIHNwcml0ZS5fdmVydHNEaXJ0eSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVZlcnRzKHNwcml0ZSkge1xuICAgICAgICBsZXQgbm9kZSA9IHNwcml0ZS5ub2RlLFxuICAgICAgICAgICAgd2lkdGggPSBub2RlLndpZHRoLCBoZWlnaHQgPSBub2RlLmhlaWdodCxcbiAgICAgICAgICAgIGFwcHggPSBub2RlLmFuY2hvclggKiB3aWR0aCwgYXBweSA9IG5vZGUuYW5jaG9yWSAqIGhlaWdodDtcblxuICAgICAgICBsZXQgZnJhbWUgPSBzcHJpdGUuc3ByaXRlRnJhbWU7XG4gICAgICAgIGxldCBsZWZ0V2lkdGggPSBmcmFtZS5pbnNldExlZnQ7XG4gICAgICAgIGxldCByaWdodFdpZHRoID0gZnJhbWUuaW5zZXRSaWdodDtcbiAgICAgICAgbGV0IHRvcEhlaWdodCA9IGZyYW1lLmluc2V0VG9wO1xuICAgICAgICBsZXQgYm90dG9tSGVpZ2h0ID0gZnJhbWUuaW5zZXRCb3R0b207XG5cbiAgICAgICAgbGV0IHNpemFibGVXaWR0aCA9IHdpZHRoIC0gbGVmdFdpZHRoIC0gcmlnaHRXaWR0aDtcbiAgICAgICAgbGV0IHNpemFibGVIZWlnaHQgPSBoZWlnaHQgLSB0b3BIZWlnaHQgLSBib3R0b21IZWlnaHQ7XG4gICAgICAgIGxldCB4U2NhbGUgPSB3aWR0aCAvIChsZWZ0V2lkdGggKyByaWdodFdpZHRoKTtcbiAgICAgICAgbGV0IHlTY2FsZSA9IGhlaWdodCAvICh0b3BIZWlnaHQgKyBib3R0b21IZWlnaHQpO1xuICAgICAgICB4U2NhbGUgPSAoaXNOYU4oeFNjYWxlKSB8fCB4U2NhbGUgPiAxKSA/IDEgOiB4U2NhbGU7XG4gICAgICAgIHlTY2FsZSA9IChpc05hTih5U2NhbGUpIHx8IHlTY2FsZSA+IDEpID8gMSA6IHlTY2FsZTtcbiAgICAgICAgc2l6YWJsZVdpZHRoID0gc2l6YWJsZVdpZHRoIDwgMCA/IDAgOiBzaXphYmxlV2lkdGg7XG4gICAgICAgIHNpemFibGVIZWlnaHQgPSBzaXphYmxlSGVpZ2h0IDwgMCA/IDAgOiBzaXphYmxlSGVpZ2h0O1xuXG4gICAgICAgIC8vIHVwZGF0ZSBsb2NhbFxuICAgICAgICBsZXQgbG9jYWwgPSB0aGlzLl9sb2NhbDtcbiAgICAgICAgbG9jYWxbMF0gPSAtYXBweDtcbiAgICAgICAgbG9jYWxbMV0gPSAtYXBweTtcbiAgICAgICAgbG9jYWxbMl0gPSBsZWZ0V2lkdGggKiB4U2NhbGUgLSBhcHB4O1xuICAgICAgICBsb2NhbFszXSA9IGJvdHRvbUhlaWdodCAqIHlTY2FsZSAtIGFwcHk7XG4gICAgICAgIGxvY2FsWzRdID0gbG9jYWxbMl0gKyBzaXphYmxlV2lkdGg7XG4gICAgICAgIGxvY2FsWzVdID0gbG9jYWxbM10gKyBzaXphYmxlSGVpZ2h0O1xuICAgICAgICBsb2NhbFs2XSA9IHdpZHRoIC0gYXBweDtcbiAgICAgICAgbG9jYWxbN10gPSBoZWlnaHQgLSBhcHB5O1xuXG4gICAgICAgIHRoaXMudXBkYXRlV29ybGRWZXJ0cyhzcHJpdGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVVVnMoc3ByaXRlKSB7XG4gICAgICAgIGxldCB2ZXJ0cyA9IHRoaXMuX3JlbmRlckRhdGEudkRhdGFzWzBdO1xuICAgICAgICBsZXQgdXZTbGljZWQgPSBzcHJpdGUuc3ByaXRlRnJhbWUudXZTbGljZWQ7XG4gICAgICAgIGxldCB1dk9mZnNldCA9IHRoaXMudXZPZmZzZXQ7XG4gICAgICAgIGxldCBmbG9hdHNQZXJWZXJ0ID0gdGhpcy5mbG9hdHNQZXJWZXJ0O1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA0OyArK3Jvdykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgNDsgKytjb2wpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmlkID0gcm93ICogNCArIGNvbDtcbiAgICAgICAgICAgICAgICBsZXQgdXYgPSB1dlNsaWNlZFt2aWRdO1xuICAgICAgICAgICAgICAgIGxldCB2b2Zmc2V0ID0gdmlkICogZmxvYXRzUGVyVmVydDtcbiAgICAgICAgICAgICAgICB2ZXJ0c1t2b2Zmc2V0ICsgdXZPZmZzZXRdID0gdXYudTtcbiAgICAgICAgICAgICAgICB2ZXJ0c1t2b2Zmc2V0ICsgdXZPZmZzZXQgKyAxXSA9IHV2LnY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlV29ybGRWZXJ0cyhzcHJpdGUpIHtcbiAgICAgICAgbGV0IG1hdHJpeCA9IHNwcml0ZS5ub2RlLl93b3JsZE1hdHJpeDtcbiAgICAgICAgbGV0IG1hdHJpeG0gPSBtYXRyaXgubSxcbiAgICAgICAgICAgIGEgPSBtYXRyaXhtWzBdLCBiID0gbWF0cml4bVsxXSwgYyA9IG1hdHJpeG1bNF0sIGQgPSBtYXRyaXhtWzVdLFxuICAgICAgICAgICAgdHggPSBtYXRyaXhtWzEyXSwgdHkgPSBtYXRyaXhtWzEzXTtcblxuICAgICAgICBsZXQgbG9jYWwgPSB0aGlzLl9sb2NhbDtcbiAgICAgICAgbGV0IHdvcmxkID0gdGhpcy5fcmVuZGVyRGF0YS52RGF0YXNbMF07XG5cbiAgICAgICAgbGV0IGZsb2F0c1BlclZlcnQgPSB0aGlzLmZsb2F0c1BlclZlcnQ7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDQ7ICsrcm93KSB7XG4gICAgICAgICAgICBsZXQgbG9jYWxSb3dZID0gbG9jYWxbcm93ICogMiArIDFdO1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgNDsgKytjb2wpIHtcbiAgICAgICAgICAgICAgICBsZXQgbG9jYWxDb2xYID0gbG9jYWxbY29sICogMl07XG4gICAgICAgICAgICAgICAgbGV0IHdvcmxkSW5kZXggPSAocm93ICogNCArIGNvbCkgKiBmbG9hdHNQZXJWZXJ0O1xuICAgICAgICAgICAgICAgIHdvcmxkW3dvcmxkSW5kZXhdID0gbG9jYWxDb2xYICogYSArIGxvY2FsUm93WSAqIGMgKyB0eDtcbiAgICAgICAgICAgICAgICB3b3JsZFt3b3JsZEluZGV4ICsgMV0gPSBsb2NhbENvbFggKiBiICsgbG9jYWxSb3dZICogZCArIHR5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5pZiAoQ0NfTkFUSVZFUkVOREVSRVIpIHtcbiAgICBsZXQgcHJvdG8gPSBNdWx0aUFzc2VtYmxlclNsaWNlZC5wcm90b3R5cGU7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgbGV0IG5hdGl2ZVByb3RvID0gcmVuZGVyZXIuU2xpY2VkU3ByaXRlMkQucHJvdG90eXBlO1xuXG4gICAgcHJvdG8udXBkYXRlV29ybGRWZXJ0cyA9IGZ1bmN0aW9uIChjb21wKSB7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLl9kaXJ0eVB0clswXSB8PSBjYy5Bc3NlbWJsZXIuRkxBR19WRVJUSUNFU19ESVJUWTtcbiAgICB9O1xuXG4gICAgLy9AdHMtaWdub3JlXG4gICAgcHJvdG8uX2V4dGVuZE5hdGl2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmF0aXZlUHJvdG8uY3Rvci5jYWxsKHRoaXMpO1xuICAgIH07XG5cbiAgICBwcm90by5pbml0TG9jYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2xvY2FsID0gbmV3IEZsb2F0MzJBcnJheSg4KTtcbiAgICAgICAgbmF0aXZlUHJvdG8uc2V0TG9jYWxEYXRhLmNhbGwodGhpcywgdGhpcy5fbG9jYWwpO1xuICAgIH07XG59XG4iXX0=