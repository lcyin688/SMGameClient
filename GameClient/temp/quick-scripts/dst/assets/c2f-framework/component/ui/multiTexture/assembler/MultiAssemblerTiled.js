
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/ui/multiTexture/assembler/MultiAssemblerTiled.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '825c0CUhQhLHIOj5ulatGUZ', 'MultiAssemblerTiled');
// c2f-framework/component/ui/multiTexture/assembler/MultiAssemblerTiled.ts

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
var MultiAssemblerTiled = /** @class */ (function (_super) {
    __extends(MultiAssemblerTiled, _super);
    function MultiAssemblerTiled() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.contentWidth = 0;
        _this.contentHeight = 0;
        _this.rectWidth = 0;
        _this.rectHeight = 0;
        _this.hRepeat = 0;
        _this.vRepeat = 0;
        _this.row = 0;
        _this.col = 0;
        _this.sizableWidth = 0;
        _this.sizableHeight = 0;
        return _this;
    }
    MultiAssemblerTiled.prototype.initData = function () {
        this.verticesCount = 0;
        this.contentWidth = 0;
        this.contentHeight = 0;
        this.rectWidth = 0;
        this.rectHeight = 0;
        this.hRepeat = 0;
        this.vRepeat = 0;
        this.row = 0;
        this.col = 0;
        if (this._renderData.meshCount > 0)
            return;
        var data = this._renderData;
        // createFlexData支持创建指定格式的renderData
        data.createFlexData(0, 4, 6, this.getVfmt());
        this._updateIndices();
    };
    MultiAssemblerTiled.prototype.initLocal = function () {
        this._local = { x: [], y: [] };
    };
    MultiAssemblerTiled.prototype._updateIndices = function () {
        var iData = this._renderData.iDatas[0];
        for (var i = 0, vid = 0, l = iData.length; i < l; i += 6, vid += 4) {
            iData[i] = vid;
            iData[i + 1] = vid + 1;
            iData[i + 2] = vid + 2;
            iData[i + 3] = vid + 1;
            iData[i + 4] = vid + 3;
            iData[i + 5] = vid + 2;
        }
    };
    MultiAssemblerTiled.prototype.updateRenderData = function (sprite) {
        var frame = sprite._spriteFrame;
        this.packToDynamicAtlas(sprite, frame);
        var node = sprite.node;
        var contentWidth = this.contentWidth = Math.abs(node.width);
        var contentHeight = this.contentHeight = Math.abs(node.height);
        var rect = frame._rect;
        var leftWidth = frame.insetLeft, rightWidth = frame.insetRight, centerWidth = rect.width - leftWidth - rightWidth, topHeight = frame.insetTop, bottomHeight = frame.insetBottom, centerHeight = rect.height - topHeight - bottomHeight;
        this.sizableWidth = contentWidth - leftWidth - rightWidth;
        this.sizableHeight = contentHeight - topHeight - bottomHeight;
        this.sizableWidth = this.sizableWidth > 0 ? this.sizableWidth : 0;
        this.sizableHeight = this.sizableHeight > 0 ? this.sizableHeight : 0;
        var hRepeat = this.hRepeat = centerWidth === 0 ? this.sizableWidth : this.sizableWidth / centerWidth;
        var vRepeat = this.vRepeat = centerHeight === 0 ? this.sizableHeight : this.sizableHeight / centerHeight;
        var row = this.row = Math.ceil(vRepeat + 2);
        var col = this.col = Math.ceil(hRepeat + 2);
        // update data property
        var count = row * col;
        this.verticesCount = count * 4;
        this.indicesCount = count * 6;
        var renderData = this._renderData;
        var flexBuffer = renderData._flexBuffer;
        if (flexBuffer.reserve(this.verticesCount, this.indicesCount)) {
            this._updateIndices();
            this.updateColor(sprite);
        }
        flexBuffer.used(this.verticesCount, this.indicesCount);
        if (sprite._vertsDirty) {
            this.updateUVs(sprite);
            this.updateVerts(sprite);
            this.updateTextureIdx(sprite);
            sprite._vertsDirty = false;
        }
    };
    MultiAssemblerTiled.prototype.updateVerts = function (sprite) {
        var frame = sprite._spriteFrame;
        var rect = frame._rect;
        var node = sprite.node, appx = node.anchorX * node.width, appy = node.anchorY * node.height;
        var _a = this, row = _a.row, col = _a.col, contentWidth = _a.contentWidth, contentHeight = _a.contentHeight;
        var _b = this._local, x = _b.x, y = _b.y;
        x.length = y.length = 0;
        var leftWidth = frame.insetLeft, rightWidth = frame.insetRight, centerWidth = rect.width - leftWidth - rightWidth, topHeight = frame.insetTop, bottomHeight = frame.insetBottom, centerHeight = rect.height - topHeight - bottomHeight;
        var xScale = (node.width / (leftWidth + rightWidth)) > 1 ? 1 : (node.width / (leftWidth + rightWidth));
        var yScale = (node.height / (topHeight + bottomHeight)) > 1 ? 1 : (node.height / (topHeight + bottomHeight));
        var offsetWidth = 0, offsetHeight = 0;
        if (centerWidth > 0) {
            /*
             * Because the float numerical calculation in javascript is not accurate enough,
             * there is an expected result of 1.0, but the actual result is 1.000001.
             */
            offsetWidth = Math.floor(this.sizableWidth * 1000) / 1000 % centerWidth === 0 ? centerWidth : this.sizableWidth % centerWidth;
        }
        else {
            offsetWidth = this.sizableWidth;
        }
        if (centerHeight > 0) {
            offsetHeight = Math.floor(this.sizableHeight * 1000) / 1000 % centerHeight === 0 ? centerHeight : this.sizableHeight % centerHeight;
        }
        else {
            offsetHeight = this.sizableHeight;
        }
        for (var i = 0; i <= col; i++) {
            if (i === 0) {
                x[i] = -appx;
            }
            else if (i > 0 && i < col) {
                if (i === 1) {
                    x[i] = leftWidth * xScale + Math.min(centerWidth, this.sizableWidth) - appx;
                }
                else {
                    if (centerWidth > 0) {
                        if (i === (col - 1)) {
                            x[i] = leftWidth + offsetWidth + centerWidth * (i - 2) - appx;
                        }
                        else {
                            x[i] = leftWidth + Math.min(centerWidth, this.sizableWidth) + centerWidth * (i - 2) - appx;
                        }
                    }
                    else {
                        x[i] = leftWidth + this.sizableWidth - appx;
                    }
                }
            }
            else if (i === col) {
                x[i] = Math.min(leftWidth + this.sizableWidth + rightWidth, contentWidth) - appx;
            }
        }
        for (var i = 0; i <= row; i++) {
            if (i === 0) {
                y[i] = -appy;
            }
            else if (i > 0 && i < row) {
                if (i === 1) {
                    y[i] = bottomHeight * yScale + Math.min(centerHeight, this.sizableHeight) - appy;
                }
                else {
                    if (centerHeight > 0) {
                        if (i === (row - 1)) {
                            y[i] = bottomHeight + offsetHeight + (i - 2) * centerHeight - appy;
                        }
                        else {
                            y[i] = bottomHeight + Math.min(centerHeight, this.sizableHeight) + (i - 2) * centerHeight - appy;
                        }
                    }
                    else {
                        y[i] = bottomHeight + this.sizableHeight - appy;
                    }
                }
            }
            else if (i === row) {
                y[i] = Math.min(bottomHeight + this.sizableHeight + topHeight, contentHeight) - appy;
            }
        }
        this.updateWorldVerts(sprite);
    };
    MultiAssemblerTiled.prototype.updateWorldVerts = function (sprite) {
        var renderData = this._renderData;
        var local = this._local;
        var localX = local.x, localY = local.y;
        var world = renderData.vDatas[0];
        var _a = this, row = _a.row, col = _a.col;
        var matrix = sprite.node._worldMatrix;
        var matrixm = matrix.m;
        var a = matrixm[0], b = matrixm[1], c = matrixm[4], d = matrixm[5], tx = matrixm[12], ty = matrixm[13];
        var x, x1, y, y1;
        var floatsPerVert = this.floatsPerVert;
        var vertexOffset = 0;
        if (CC_NATIVERENDERER) {
            for (var yindex = 0, ylength = row; yindex < ylength; ++yindex) {
                y = localY[yindex];
                y1 = localY[yindex + 1];
                for (var xindex = 0, xlength = col; xindex < xlength; ++xindex) {
                    x = localX[xindex];
                    x1 = localX[xindex + 1];
                    // lb
                    world[vertexOffset] = x;
                    world[vertexOffset + 1] = y;
                    vertexOffset += floatsPerVert;
                    // rb
                    world[vertexOffset] = x1;
                    world[vertexOffset + 1] = y;
                    vertexOffset += floatsPerVert;
                    // lt
                    world[vertexOffset] = x;
                    world[vertexOffset + 1] = y1;
                    vertexOffset += floatsPerVert;
                    // rt
                    world[vertexOffset] = x1;
                    world[vertexOffset + 1] = y1;
                    vertexOffset += floatsPerVert;
                }
            }
        }
        else {
            for (var yindex = 0, ylength = row; yindex < ylength; ++yindex) {
                y = localY[yindex];
                y1 = localY[yindex + 1];
                for (var xindex = 0, xlength = col; xindex < xlength; ++xindex) {
                    x = localX[xindex];
                    x1 = localX[xindex + 1];
                    // lb
                    world[vertexOffset] = x * a + y * c + tx;
                    world[vertexOffset + 1] = x * b + y * d + ty;
                    vertexOffset += floatsPerVert;
                    // rb
                    world[vertexOffset] = x1 * a + y * c + tx;
                    world[vertexOffset + 1] = x1 * b + y * d + ty;
                    vertexOffset += floatsPerVert;
                    // lt
                    world[vertexOffset] = x * a + y1 * c + tx;
                    world[vertexOffset + 1] = x * b + y1 * d + ty;
                    vertexOffset += floatsPerVert;
                    // rt
                    world[vertexOffset] = x1 * a + y1 * c + tx;
                    world[vertexOffset + 1] = x1 * b + y1 * d + ty;
                    vertexOffset += floatsPerVert;
                }
            }
        }
    };
    MultiAssemblerTiled.prototype.updateUVs = function (sprite) {
        var verts = this._renderData.vDatas[0];
        if (!verts)
            return;
        var frame = sprite._spriteFrame;
        var rect = frame._rect;
        var leftWidth = frame.insetLeft, rightWidth = frame.insetRight, centerWidth = rect.width - leftWidth - rightWidth, topHeight = frame.insetTop, bottomHeight = frame.insetBottom, centerHeight = rect.height - topHeight - bottomHeight;
        var _a = this, row = _a.row, col = _a.col, hRepeat = _a.hRepeat, vRepeat = _a.vRepeat;
        var coefu = 0, coefv = 0;
        var uv = sprite.spriteFrame.uv;
        var uvSliced = sprite.spriteFrame.uvSliced;
        var rotated = sprite.spriteFrame._rotated;
        var floatsPerVert = this.floatsPerVert, uvOffset = this.uvOffset;
        var tempXVerts = [], tempYVerts = [];
        for (var yindex = 0, ylength = row; yindex < ylength; ++yindex) {
            if (this.sizableHeight > centerHeight) {
                if (this.sizableHeight >= yindex * centerHeight) {
                    coefv = 1;
                }
                else {
                    coefv = vRepeat % 1;
                }
            }
            else {
                coefv = vRepeat;
            }
            for (var xindex = 0, xlength = col; xindex < xlength; ++xindex) {
                if (this.sizableWidth > centerWidth) {
                    if (this.sizableWidth >= xindex * centerWidth) {
                        coefu = 1;
                    }
                    else {
                        coefu = hRepeat % 1;
                    }
                }
                else {
                    coefu = hRepeat;
                }
                if (rotated) {
                    if (yindex === 0) {
                        tempXVerts[0] = uvSliced[0].u;
                        tempXVerts[1] = uvSliced[0].u;
                        tempXVerts[2] = uvSliced[4].u + (uvSliced[8].u - uvSliced[4].u) * coefv;
                    }
                    else if (yindex < (row - 1)) {
                        tempXVerts[0] = uvSliced[4].u;
                        tempXVerts[1] = uvSliced[4].u;
                        tempXVerts[2] = uvSliced[4].u + (uvSliced[8].u - uvSliced[4].u) * coefv;
                    }
                    else if (yindex === (row - 1)) {
                        tempXVerts[0] = uvSliced[8].u;
                        tempXVerts[1] = uvSliced[8].u;
                        tempXVerts[2] = uvSliced[12].u;
                    }
                    if (xindex === 0) {
                        tempYVerts[0] = uvSliced[0].v;
                        tempYVerts[1] = uvSliced[1].v + (uvSliced[2].v - uvSliced[1].v) * coefu;
                        tempYVerts[2] = uvSliced[0].v;
                    }
                    else if (xindex < (col - 1)) {
                        tempYVerts[0] = uvSliced[1].v;
                        tempYVerts[1] = uvSliced[1].v + (uvSliced[2].v - uvSliced[1].v) * coefu;
                        tempYVerts[2] = uvSliced[1].v;
                    }
                    else if (xindex === (col - 1)) {
                        tempYVerts[0] = uvSliced[2].v;
                        tempYVerts[1] = uvSliced[3].v;
                        tempYVerts[2] = uvSliced[2].v;
                    }
                    tempXVerts[3] = tempXVerts[2];
                    tempYVerts[3] = tempYVerts[1];
                }
                else {
                    if (xindex === 0) {
                        tempXVerts[0] = uvSliced[0].u;
                        tempXVerts[1] = uvSliced[1].u + (uvSliced[2].u - uvSliced[1].u) * coefu;
                        tempXVerts[2] = uv[0];
                    }
                    else if (xindex < (col - 1)) {
                        tempXVerts[0] = uvSliced[1].u;
                        tempXVerts[1] = uvSliced[1].u + (uvSliced[2].u - uvSliced[1].u) * coefu;
                        tempXVerts[2] = uvSliced[1].u;
                    }
                    else if (xindex === (col - 1)) {
                        tempXVerts[0] = uvSliced[2].u;
                        tempXVerts[1] = uvSliced[3].u;
                        tempXVerts[2] = uvSliced[2].u;
                    }
                    if (yindex === 0) {
                        tempYVerts[0] = uvSliced[0].v;
                        tempYVerts[1] = uvSliced[0].v;
                        tempYVerts[2] = uvSliced[4].v + (uvSliced[8].v - uvSliced[4].v) * coefv;
                    }
                    else if (yindex < (row - 1)) {
                        tempYVerts[0] = uvSliced[4].v;
                        tempYVerts[1] = uvSliced[4].v;
                        tempYVerts[2] = uvSliced[4].v + (uvSliced[8].v - uvSliced[4].v) * coefv;
                    }
                    else if (yindex === (row - 1)) {
                        tempYVerts[0] = uvSliced[8].v;
                        tempYVerts[1] = uvSliced[8].v;
                        tempYVerts[2] = uvSliced[12].v;
                    }
                    tempXVerts[3] = tempXVerts[1];
                    tempYVerts[3] = tempYVerts[2];
                }
                // lb
                verts[uvOffset] = tempXVerts[0];
                verts[uvOffset + 1] = tempYVerts[0];
                uvOffset += floatsPerVert;
                // rb
                verts[uvOffset] = tempXVerts[1];
                verts[uvOffset + 1] = tempYVerts[1];
                uvOffset += floatsPerVert;
                // lt
                verts[uvOffset] = tempXVerts[2];
                verts[uvOffset + 1] = tempYVerts[2];
                uvOffset += floatsPerVert;
                // rt
                verts[uvOffset] = tempXVerts[3];
                verts[uvOffset + 1] = tempYVerts[3];
                uvOffset += floatsPerVert;
            }
        }
    };
    return MultiAssemblerTiled;
}(MultiAssembler_1.default));
exports.default = MultiAssemblerTiled;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC91aS9tdWx0aVRleHR1cmUvYXNzZW1ibGVyL011bHRpQXNzZW1ibGVyVGlsZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBRTlDO0lBQWlELHVDQUFjO0lBQS9EO1FBQUEscUVBNldDO1FBNVdXLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsU0FBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixtQkFBYSxHQUFXLENBQUMsQ0FBQzs7SUFtV3RDLENBQUM7SUFqV1Usc0NBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFFYixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLENBQUM7WUFBRSxPQUFPO1FBQzNDLElBQUksSUFBSSxHQUFH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LENBQUM7d0JBQzlCLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDbEM7b0JBQ0QsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO3dCQUNkLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQzt3QkFDeEUsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2pDO3lCQUFNLElBQUksTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUMzQixVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7d0JBQ3hFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNqQzt5QkFBTSxJQUFJLE1BQU0sS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTt3QkFDN0IsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDakM7b0JBQ0QsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUIsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDakM7cUJBQ0k7b0JBQ0QsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO3dCQUNkLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQzt3QkFDeEUsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDekI7eUJBQU0sSUFBSSxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUU7d0JBQzNCLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQzt3QkFDeEUsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2pDO3lCQUFNLElBQUksTUFBTSxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUM3QixVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNqQztvQkFDRCxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7d0JBQ2QsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztxQkFDM0U7eUJBQU0sSUFBSSxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUU7d0JBQzNCLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7cUJBQzNFO3lCQUFNLElBQUksTUFBTSxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUM3QixVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNsQztvQkFDRCxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5QixVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNqQztnQkFDRCxLQUFLO2dCQUNMLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxRQUFRLElBQUksYUFBYSxDQUFDO2dCQUMxQixLQUFLO2dCQUNMLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxRQUFRLElBQUksYUFBYSxDQUFDO2dCQUMxQixLQUFLO2dCQUNMLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxRQUFRLElBQUksYUFBYSxDQUFDO2dCQUMxQixLQUFLO2dCQUNMLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxRQUFRLElBQUksYUFBYSxDQUFDO2FBQzdCO1NBQ0o7SUFDTCxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQTdXQSxBQTZXQyxDQTdXZ0Qsd0JBQWMsR0E2VzlEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE11bHRpQXNzZW1ibGVyIGZyb20gXCIuL011bHRpQXNzZW1ibGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpQXNzZW1ibGVyVGlsZWQgZXh0ZW5kcyBNdWx0aUFzc2VtYmxlciB7XG4gICAgcHJpdmF0ZSBjb250ZW50V2lkdGg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjb250ZW50SGVpZ2h0OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcmVjdFdpZHRoOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcmVjdEhlaWdodDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGhSZXBlYXQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB2UmVwZWF0OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcm93OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY29sOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc2l6YWJsZVdpZHRoOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc2l6YWJsZUhlaWdodDogbnVtYmVyID0gMDtcblxuICAgIHB1YmxpYyBpbml0RGF0YSgpIHtcbiAgICAgICAgdGhpcy52ZXJ0aWNlc0NvdW50ID0gMDtcbiAgICAgICAgdGhpcy5jb250ZW50V2lkdGggPSAwO1xuICAgICAgICB0aGlzLmNvbnRlbnRIZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLnJlY3RXaWR0aCA9IDA7XG4gICAgICAgIHRoaXMucmVjdEhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuaFJlcGVhdCA9IDA7XG4gICAgICAgIHRoaXMudlJlcGVhdCA9IDA7XG4gICAgICAgIHRoaXMucm93ID0gMDtcbiAgICAgICAgdGhpcy5jb2wgPSAwO1xuXG4gICAgICAgIGlmICh0aGlzLl9yZW5kZXJEYXRhLm1lc2hDb3VudCA+IDApIHJldHVybjtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLl9yZW5kZXJEYXRhO1xuICAgICAgICAvLyBjcmVhdGVGbGV4RGF0YeaUr+aMgeWIm+W7uuaMh+WumuagvOW8j+eahHJlbmRlckRhdGFcbiAgICAgICAgZGF0YS5jcmVhdGVGbGV4RGF0YSgwLCA0LCA2LCB0aGlzLmdldFZmbXQoKSk7XG5cbiAgICAgICAgdGhpcy5fdXBkYXRlSW5kaWNlcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0TG9jYWwoKSB7XG4gICAgICAgIHRoaXMuX2xvY2FsID0geyB4OiBbXSwgeTogW10gfSBhcyBhbnk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlSW5kaWNlcygpIHtcbiAgICAgICAgbGV0IGlEYXRhID0gdGhpcy5fcmVuZGVyRGF0YS5pRGF0YXNbMF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCB2aWQgPSAwLCBsID0gaURhdGEubGVuZ3RoOyBpIDwgbDsgaSArPSA2LCB2aWQgKz0gNCkge1xuICAgICAgICAgICAgaURhdGFbaV0gPSB2aWQ7XG4gICAgICAgICAgICBpRGF0YVtpICsgMV0gPSB2aWQgKyAxO1xuICAgICAgICAgICAgaURhdGFbaSArIDJdID0gdmlkICsgMjtcbiAgICAgICAgICAgIGlEYXRhW2kgKyAzXSA9IHZpZCArIDE7XG4gICAgICAgICAgICBpRGF0YVtpICsgNF0gPSB2aWQgKyAzO1xuICAgICAgICAgICAgaURhdGFbaSArIDVdID0gdmlkICsgMjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVSZW5kZXJEYXRhKHNwcml0ZSkge1xuICAgICAgICBsZXQgZnJhbWUgPSBzcHJpdGUuX3Nwcml0ZUZyYW1lO1xuICAgICAgICB0aGlzLnBhY2tUb0R5bmFtaWNBdGxhcyhzcHJpdGUsIGZyYW1lKTtcblxuICAgICAgICBsZXQgbm9kZSA9IHNwcml0ZS5ub2RlO1xuXG4gICAgICAgIGxldCBjb250ZW50V2lkdGggPSB0aGlzLmNvbnRlbnRXaWR0aCA9IE1hdGguYWJzKG5vZGUud2lkdGgpO1xuICAgICAgICBsZXQgY29udGVudEhlaWdodCA9IHRoaXMuY29udGVudEhlaWdodCA9IE1hdGguYWJzKG5vZGUuaGVpZ2h0KTtcbiAgICAgICAgbGV0IHJlY3QgPSBmcmFtZS5fcmVjdDtcbiAgICAgICAgbGV0IGxlZnRXaWR0aCA9IGZyYW1lLmluc2V0TGVmdCwgcmlnaHRXaWR0aCA9IGZyYW1lLmluc2V0UmlnaHQsIGNlbnRlcldpZHRoID0gcmVjdC53aWR0aCAtIGxlZnRXaWR0aCAtIHJpZ2h0V2lkdGgsXG4gICAgICAgICAgICB0b3BIZWlnaHQgPSBmcmFtZS5pbnNldFRvcCwgYm90dG9tSGVpZ2h0ID0gZnJhbWUuaW5zZXRCb3R0b20sIGNlbnRlckhlaWdodCA9IHJlY3QuaGVpZ2h0IC0gdG9wSGVpZ2h0IC0gYm90dG9tSGVpZ2h0O1xuICAgICAgICB0aGlzLnNpemFibGVXaWR0aCA9IGNvbnRlbnRXaWR0aCAtIGxlZnRXaWR0aCAtIHJpZ2h0V2lkdGg7XG4gICAgICAgIHRoaXMuc2l6YWJsZUhlaWdodCA9IGNvbnRlbnRIZWlnaHQgLSB0b3BIZWlnaHQgLSBib3R0b21IZWlnaHQ7XG4gICAgICAgIHRoaXMuc2l6YWJsZVdpZHRoID0gdGhpcy5zaXphYmxlV2lkdGggPiAwID8gdGhpcy5zaXphYmxlV2lkdGggOiAwO1xuICAgICAgICB0aGlzLnNpemFibGVIZWlnaHQgPSB0aGlzLnNpemFibGVIZWlnaHQgPiAwID8gdGhpcy5zaXphYmxlSGVpZ2h0IDogMDtcbiAgICAgICAgbGV0IGhSZXBlYXQgPSB0aGlzLmhSZXBlYXQgPSBjZW50ZXJXaWR0aCA9PT0gMCA/IHRoaXMuc2l6YWJsZVdpZHRoIDogdGhpcy5zaXphYmxlV2lkdGggLyBjZW50ZXJXaWR0aDtcbiAgICAgICAgbGV0IHZSZXBlYXQgPSB0aGlzLnZSZXBlYXQgPSBjZW50ZXJIZWlnaHQgPT09IDAgPyB0aGlzLnNpemFibGVIZWlnaHQgOiB0aGlzLnNpemFibGVIZWlnaHQgLyBjZW50ZXJIZWlnaHQ7XG4gICAgICAgIGxldCByb3cgPSB0aGlzLnJvdyA9IE1hdGguY2VpbCh2UmVwZWF0ICsgMik7XG4gICAgICAgIGxldCBjb2wgPSB0aGlzLmNvbCA9IE1hdGguY2VpbChoUmVwZWF0ICsgMik7XG5cbiAgICAgICAgLy8gdXBkYXRlIGRhdGEgcHJvcGVydHlcbiAgICAgICAgbGV0IGNvdW50ID0gcm93ICogY29sO1xuICAgICAgICB0aGlzLnZlcnRpY2VzQ291bnQgPSBjb3VudCAqIDQ7XG4gICAgICAgIHRoaXMuaW5kaWNlc0NvdW50ID0gY291bnQgKiA2O1xuXG4gICAgICAgIGxldCByZW5kZXJEYXRhID0gdGhpcy5fcmVuZGVyRGF0YTtcbiAgICAgICAgbGV0IGZsZXhCdWZmZXIgPSByZW5kZXJEYXRhLl9mbGV4QnVmZmVyO1xuICAgICAgICBpZiAoZmxleEJ1ZmZlci5yZXNlcnZlKHRoaXMudmVydGljZXNDb3VudCwgdGhpcy5pbmRpY2VzQ291bnQpKSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVJbmRpY2VzKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbG9yKHNwcml0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZmxleEJ1ZmZlci51c2VkKHRoaXMudmVydGljZXNDb3VudCwgdGhpcy5pbmRpY2VzQ291bnQpO1xuXG4gICAgICAgIGlmIChzcHJpdGUuX3ZlcnRzRGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVVZzKHNwcml0ZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZlcnRzKHNwcml0ZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRleHR1cmVJZHgoc3ByaXRlKTtcbiAgICAgICAgICAgIHNwcml0ZS5fdmVydHNEaXJ0eSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVZlcnRzKHNwcml0ZSkge1xuICAgICAgICBsZXQgZnJhbWUgPSBzcHJpdGUuX3Nwcml0ZUZyYW1lO1xuICAgICAgICBsZXQgcmVjdCA9IGZyYW1lLl9yZWN0O1xuICAgICAgICBsZXQgbm9kZSA9IHNwcml0ZS5ub2RlLFxuICAgICAgICAgICAgYXBweCA9IG5vZGUuYW5jaG9yWCAqIG5vZGUud2lkdGgsIGFwcHkgPSBub2RlLmFuY2hvclkgKiBub2RlLmhlaWdodDtcblxuICAgICAgICBsZXQgeyByb3csIGNvbCwgY29udGVudFdpZHRoLCBjb250ZW50SGVpZ2h0IH0gPSB0aGlzO1xuICAgICAgICBsZXQgeyB4LCB5IH0gPSB0aGlzLl9sb2NhbCBhcyBhbnk7XG4gICAgICAgIHgubGVuZ3RoID0geS5sZW5ndGggPSAwO1xuICAgICAgICBsZXQgbGVmdFdpZHRoID0gZnJhbWUuaW5zZXRMZWZ0LCByaWdodFdpZHRoID0gZnJhbWUuaW5zZXRSaWdodCwgY2VudGVyV2lkdGggPSByZWN0LndpZHRoIC0gbGVmdFdpZHRoIC0gcmlnaHRXaWR0aCxcbiAgICAgICAgICAgIHRvcEhlaWdodCA9IGZyYW1lLmluc2V0VG9wLCBib3R0b21IZWlnaHQgPSBmcmFtZS5pbnNldEJvdHRvbSwgY2VudGVySGVpZ2h0ID0gcmVjdC5oZWlnaHQgLSB0b3BIZWlnaHQgLSBib3R0b21IZWlnaHQ7XG4gICAgICAgIGxldCB4U2NhbGUgPSAobm9kZS53aWR0aCAvIChsZWZ0V2lkdGggKyByaWdodFdpZHRoKSkgPiAxID8gMSA6IChub2RlLndpZHRoIC8gKGxlZnRXaWR0aCArIHJpZ2h0V2lkdGgpKTtcbiAgICAgICAgbGV0IHlTY2FsZSA9IChub2RlLmhlaWdodCAvICh0b3BIZWlnaHQgKyBib3R0b21IZWlnaHQpKSA+IDEgPyAxIDogKG5vZGUuaGVpZ2h0IC8gKHRvcEhlaWdodCArIGJvdHRvbUhlaWdodCkpO1xuICAgICAgICBsZXQgb2Zmc2V0V2lkdGggPSAwLCBvZmZzZXRIZWlnaHQgPSAwO1xuICAgICAgICBpZiAoY2VudGVyV2lkdGggPiAwKSB7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICogQmVjYXVzZSB0aGUgZmxvYXQgbnVtZXJpY2FsIGNhbGN1bGF0aW9uIGluIGphdmFzY3JpcHQgaXMgbm90IGFjY3VyYXRlIGVub3VnaCwgXG4gICAgICAgICAgICAgKiB0aGVyZSBpcyBhbiBleHBlY3RlZCByZXN1bHQgb2YgMS4wLCBidXQgdGhlIGFjdHVhbCByZXN1bHQgaXMgMS4wMDAwMDEuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG9mZnNldFdpZHRoID0gTWF0aC5mbG9vcih0aGlzLnNpemFibGVXaWR0aCAqIDEwMDApIC8gMTAwMCAlIGNlbnRlcldpZHRoID09PSAwID8gY2VudGVyV2lkdGggOiB0aGlzLnNpemFibGVXaWR0aCAlIGNlbnRlcldpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb2Zmc2V0V2lkdGggPSB0aGlzLnNpemFibGVXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2VudGVySGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgb2Zmc2V0SGVpZ2h0ID0gTWF0aC5mbG9vcih0aGlzLnNpemFibGVIZWlnaHQgKiAxMDAwKSAvIDEwMDAgJSBjZW50ZXJIZWlnaHQgPT09IDAgPyBjZW50ZXJIZWlnaHQgOiB0aGlzLnNpemFibGVIZWlnaHQgJSBjZW50ZXJIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXRIZWlnaHQgPSB0aGlzLnNpemFibGVIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBjb2w7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICB4W2ldID0gLSBhcHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaSA+IDAgJiYgaSA8IGNvbCkge1xuICAgICAgICAgICAgICAgIGlmIChpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHhbaV0gPSBsZWZ0V2lkdGggKiB4U2NhbGUgKyBNYXRoLm1pbihjZW50ZXJXaWR0aCwgdGhpcy5zaXphYmxlV2lkdGgpIC0gYXBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZW50ZXJXaWR0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAoY29sIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4W2ldID0gbGVmdFdpZHRoICsgb2Zmc2V0V2lkdGggKyBjZW50ZXJXaWR0aCAqIChpIC0gMikgLSBhcHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeFtpXSA9IGxlZnRXaWR0aCArIE1hdGgubWluKGNlbnRlcldpZHRoLCB0aGlzLnNpemFibGVXaWR0aCkgKyBjZW50ZXJXaWR0aCAqIChpIC0gMikgLSBhcHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgeFtpXSA9IGxlZnRXaWR0aCArIHRoaXMuc2l6YWJsZVdpZHRoIC0gYXBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGkgPT09IGNvbCkge1xuICAgICAgICAgICAgICAgIHhbaV0gPSBNYXRoLm1pbihsZWZ0V2lkdGggKyB0aGlzLnNpemFibGVXaWR0aCArIHJpZ2h0V2lkdGgsIGNvbnRlbnRXaWR0aCkgLSBhcHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHJvdzsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHlbaV0gPSAtIGFwcHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpID4gMCAmJiBpIDwgcm93KSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgeVtpXSA9IGJvdHRvbUhlaWdodCAqIHlTY2FsZSArIE1hdGgubWluKGNlbnRlckhlaWdodCwgdGhpcy5zaXphYmxlSGVpZ2h0KSAtIGFwcHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2VudGVySGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IChyb3cgLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlbaV0gPSBib3R0b21IZWlnaHQgKyBvZmZzZXRIZWlnaHQgKyAoaSAtIDIpICogY2VudGVySGVpZ2h0IC0gYXBweTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlbaV0gPSBib3R0b21IZWlnaHQgKyBNYXRoLm1pbihjZW50ZXJIZWlnaHQsIHRoaXMuc2l6YWJsZUhlaWdodCkgKyAoaSAtIDIpICogY2VudGVySGVpZ2h0IC0gYXBweTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlbaV0gPSBib3R0b21IZWlnaHQgKyB0aGlzLnNpemFibGVIZWlnaHQgLSBhcHB5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaSA9PT0gcm93KSB7XG4gICAgICAgICAgICAgICAgeVtpXSA9IE1hdGgubWluKGJvdHRvbUhlaWdodCArIHRoaXMuc2l6YWJsZUhlaWdodCArIHRvcEhlaWdodCwgY29udGVudEhlaWdodCkgLSBhcHB5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVXb3JsZFZlcnRzKHNwcml0ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVdvcmxkVmVydHMoc3ByaXRlKSB7XG4gICAgICAgIGxldCByZW5kZXJEYXRhID0gdGhpcy5fcmVuZGVyRGF0YTtcbiAgICAgICAgbGV0IGxvY2FsOiBhbnkgPSB0aGlzLl9sb2NhbDtcbiAgICAgICAgbGV0IGxvY2FsWCA9IGxvY2FsLngsIGxvY2FsWSA9IGxvY2FsLnk7XG4gICAgICAgIGxldCB3b3JsZCA9IHJlbmRlckRhdGEudkRhdGFzWzBdO1xuICAgICAgICBsZXQgeyByb3csIGNvbCB9ID0gdGhpcztcbiAgICAgICAgbGV0IG1hdHJpeCA9IHNwcml0ZS5ub2RlLl93b3JsZE1hdHJpeDtcbiAgICAgICAgbGV0IG1hdHJpeG0gPSBtYXRyaXgubTtcbiAgICAgICAgbGV0IGEgPSBtYXRyaXhtWzBdLCBiID0gbWF0cml4bVsxXSwgYyA9IG1hdHJpeG1bNF0sIGQgPSBtYXRyaXhtWzVdLFxuICAgICAgICAgICAgdHggPSBtYXRyaXhtWzEyXSwgdHkgPSBtYXRyaXhtWzEzXTtcblxuICAgICAgICBsZXQgeCwgeDEsIHksIHkxO1xuICAgICAgICBsZXQgZmxvYXRzUGVyVmVydCA9IHRoaXMuZmxvYXRzUGVyVmVydDtcbiAgICAgICAgbGV0IHZlcnRleE9mZnNldCA9IDA7XG5cbiAgICAgICAgaWYgKENDX05BVElWRVJFTkRFUkVSKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5aW5kZXggPSAwLCB5bGVuZ3RoID0gcm93OyB5aW5kZXggPCB5bGVuZ3RoOyArK3lpbmRleCkge1xuICAgICAgICAgICAgICAgIHkgPSBsb2NhbFlbeWluZGV4XTtcbiAgICAgICAgICAgICAgICB5MSA9IGxvY2FsWVt5aW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4aW5kZXggPSAwLCB4bGVuZ3RoID0gY29sOyB4aW5kZXggPCB4bGVuZ3RoOyArK3hpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB4ID0gbG9jYWxYW3hpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHgxID0gbG9jYWxYW3hpbmRleCArIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxiXG4gICAgICAgICAgICAgICAgICAgIHdvcmxkW3ZlcnRleE9mZnNldF0gPSB4O1xuICAgICAgICAgICAgICAgICAgICB3b3JsZFt2ZXJ0ZXhPZmZzZXQgKyAxXSA9IHk7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRleE9mZnNldCArPSBmbG9hdHNQZXJWZXJ0O1xuICAgICAgICAgICAgICAgICAgICAvLyByYlxuICAgICAgICAgICAgICAgICAgICB3b3JsZFt2ZXJ0ZXhPZmZzZXRdID0geDE7XG4gICAgICAgICAgICAgICAgICAgIHdvcmxkW3ZlcnRleE9mZnNldCArIDFdID0geTtcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4T2Zmc2V0ICs9IGZsb2F0c1BlclZlcnQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGx0XG4gICAgICAgICAgICAgICAgICAgIHdvcmxkW3ZlcnRleE9mZnNldF0gPSB4O1xuICAgICAgICAgICAgICAgICAgICB3b3JsZFt2ZXJ0ZXhPZmZzZXQgKyAxXSA9IHkxO1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhPZmZzZXQgKz0gZmxvYXRzUGVyVmVydDtcbiAgICAgICAgICAgICAgICAgICAgLy8gcnRcbiAgICAgICAgICAgICAgICAgICAgd29ybGRbdmVydGV4T2Zmc2V0XSA9IHgxO1xuICAgICAgICAgICAgICAgICAgICB3b3JsZFt2ZXJ0ZXhPZmZzZXQgKyAxXSA9IHkxO1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhPZmZzZXQgKz0gZmxvYXRzUGVyVmVydDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5aW5kZXggPSAwLCB5bGVuZ3RoID0gcm93OyB5aW5kZXggPCB5bGVuZ3RoOyArK3lpbmRleCkge1xuICAgICAgICAgICAgICAgIHkgPSBsb2NhbFlbeWluZGV4XTtcbiAgICAgICAgICAgICAgICB5MSA9IGxvY2FsWVt5aW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4aW5kZXggPSAwLCB4bGVuZ3RoID0gY29sOyB4aW5kZXggPCB4bGVuZ3RoOyArK3hpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB4ID0gbG9jYWxYW3hpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHgxID0gbG9jYWxYW3hpbmRleCArIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxiXG4gICAgICAgICAgICAgICAgICAgIHdvcmxkW3ZlcnRleE9mZnNldF0gPSB4ICogYSArIHkgKiBjICsgdHg7XG4gICAgICAgICAgICAgICAgICAgIHdvcmxkW3ZlcnRleE9mZnNldCArIDFdID0geCAqIGIgKyB5ICogZCArIHR5O1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhPZmZzZXQgKz0gZmxvYXRzUGVyVmVydDtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmJcbiAgICAgICAgICAgICAgICAgICAgd29ybGRbdmVydGV4T2Zmc2V0XSA9IHgxICogYSArIHkgKiBjICsgdHg7XG4gICAgICAgICAgICAgICAgICAgIHdvcmxkW3ZlcnRleE9mZnNldCArIDFdID0geDEgKiBiICsgeSAqIGQgKyB0eTtcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4T2Zmc2V0ICs9IGZsb2F0c1BlclZlcnQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGx0XG4gICAgICAgICAgICAgICAgICAgIHdvcmxkW3ZlcnRleE9mZnNldF0gPSB4ICogYSArIHkxICogYyArIHR4O1xuICAgICAgICAgICAgICAgICAgICB3b3JsZFt2ZXJ0ZXhPZmZzZXQgKyAxXSA9IHggKiBiICsgeTEgKiBkICsgdHk7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRleE9mZnNldCArPSBmbG9hdHNQZXJWZXJ0O1xuICAgICAgICAgICAgICAgICAgICAvLyBydFxuICAgICAgICAgICAgICAgICAgICB3b3JsZFt2ZXJ0ZXhPZmZzZXRdID0geDEgKiBhICsgeTEgKiBjICsgdHg7XG4gICAgICAgICAgICAgICAgICAgIHdvcmxkW3ZlcnRleE9mZnNldCArIDFdID0geDEgKiBiICsgeTEgKiBkICsgdHk7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRleE9mZnNldCArPSBmbG9hdHNQZXJWZXJ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVVVnMoc3ByaXRlKSB7XG4gICAgICAgIGxldCB2ZXJ0cyA9IHRoaXMuX3JlbmRlckRhdGEudkRhdGFzWzBdO1xuICAgICAgICBpZiAoIXZlcnRzKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGZyYW1lID0gc3ByaXRlLl9zcHJpdGVGcmFtZTtcbiAgICAgICAgbGV0IHJlY3QgPSBmcmFtZS5fcmVjdDtcbiAgICAgICAgbGV0IGxlZnRXaWR0aCA9IGZyYW1lLmluc2V0TGVmdCwgcmlnaHRXaWR0aCA9IGZyYW1lLmluc2V0UmlnaHQsIGNlbnRlcldpZHRoID0gcmVjdC53aWR0aCAtIGxlZnRXaWR0aCAtIHJpZ2h0V2lkdGgsXG4gICAgICAgICAgICB0b3BIZWlnaHQgPSBmcmFtZS5pbnNldFRvcCwgYm90dG9tSGVpZ2h0ID0gZnJhbWUuaW5zZXRCb3R0b20sIGNlbnRlckhlaWdodCA9IHJlY3QuaGVpZ2h0IC0gdG9wSGVpZ2h0IC0gYm90dG9tSGVpZ2h0O1xuXG4gICAgICAgIGxldCB7IHJvdywgY29sLCBoUmVwZWF0LCB2UmVwZWF0IH0gPSB0aGlzO1xuICAgICAgICBsZXQgY29lZnUgPSAwLCBjb2VmdiA9IDA7XG4gICAgICAgIGxldCB1diA9IHNwcml0ZS5zcHJpdGVGcmFtZS51djtcbiAgICAgICAgbGV0IHV2U2xpY2VkID0gc3ByaXRlLnNwcml0ZUZyYW1lLnV2U2xpY2VkO1xuICAgICAgICBsZXQgcm90YXRlZCA9IHNwcml0ZS5zcHJpdGVGcmFtZS5fcm90YXRlZDtcbiAgICAgICAgbGV0IGZsb2F0c1BlclZlcnQgPSB0aGlzLmZsb2F0c1BlclZlcnQsIHV2T2Zmc2V0ID0gdGhpcy51dk9mZnNldDtcbiAgICAgICAgbGV0IHRlbXBYVmVydHMgPSBbXSwgdGVtcFlWZXJ0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCB5aW5kZXggPSAwLCB5bGVuZ3RoID0gcm93OyB5aW5kZXggPCB5bGVuZ3RoOyArK3lpbmRleCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2l6YWJsZUhlaWdodCA+IGNlbnRlckhlaWdodCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNpemFibGVIZWlnaHQgPj0geWluZGV4ICogY2VudGVySGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvZWZ2ID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvZWZ2ID0gdlJlcGVhdCAlIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29lZnYgPSB2UmVwZWF0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgeGluZGV4ID0gMCwgeGxlbmd0aCA9IGNvbDsgeGluZGV4IDwgeGxlbmd0aDsgKyt4aW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaXphYmxlV2lkdGggPiBjZW50ZXJXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zaXphYmxlV2lkdGggPj0geGluZGV4ICogY2VudGVyV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZWZ1ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZWZ1ID0gaFJlcGVhdCAlIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvZWZ1ID0gaFJlcGVhdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocm90YXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoeWluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wWFZlcnRzWzBdID0gdXZTbGljZWRbMF0udTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBYVmVydHNbMV0gPSB1dlNsaWNlZFswXS51O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFhWZXJ0c1syXSA9IHV2U2xpY2VkWzRdLnUgKyAodXZTbGljZWRbOF0udSAtIHV2U2xpY2VkWzRdLnUpICogY29lZnY7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeWluZGV4IDwgKHJvdyAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wWFZlcnRzWzBdID0gdXZTbGljZWRbNF0udTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBYVmVydHNbMV0gPSB1dlNsaWNlZFs0XS51O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFhWZXJ0c1syXSA9IHV2U2xpY2VkWzRdLnUgKyAodXZTbGljZWRbOF0udSAtIHV2U2xpY2VkWzRdLnUpICogY29lZnY7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeWluZGV4ID09PSAocm93IC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBYVmVydHNbMF0gPSB1dlNsaWNlZFs4XS51O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFhWZXJ0c1sxXSA9IHV2U2xpY2VkWzhdLnU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wWFZlcnRzWzJdID0gdXZTbGljZWRbMTJdLnU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHhpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFlWZXJ0c1swXSA9IHV2U2xpY2VkWzBdLnY7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wWVZlcnRzWzFdID0gdXZTbGljZWRbMV0udiArICh1dlNsaWNlZFsyXS52IC0gdXZTbGljZWRbMV0udikgKiBjb2VmdTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBZVmVydHNbMl0gPSB1dlNsaWNlZFswXS52O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHhpbmRleCA8IChjb2wgLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFlWZXJ0c1swXSA9IHV2U2xpY2VkWzFdLnY7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wWVZlcnRzWzFdID0gdXZTbGljZWRbMV0udiArICh1dlNsaWNlZFsyXS52IC0gdXZTbGljZWRbMV0udikgKiBjb2VmdTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBZVmVydHNbMl0gPSB1dlNsaWNlZFsxXS52O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHhpbmRleCA9PT0gKGNvbCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wWVZlcnRzWzBdID0gdXZTbGljZWRbMl0udjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBZVmVydHNbMV0gPSB1dlNsaWNlZFszXS52O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFlWZXJ0c1syXSA9IHV2U2xpY2VkWzJdLnY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGVtcFhWZXJ0c1szXSA9IHRlbXBYVmVydHNbMl07XG4gICAgICAgICAgICAgICAgICAgIHRlbXBZVmVydHNbM10gPSB0ZW1wWVZlcnRzWzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFhWZXJ0c1swXSA9IHV2U2xpY2VkWzBdLnU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wWFZlcnRzWzFdID0gdXZTbGljZWRbMV0udSArICh1dlNsaWNlZFsyXS51IC0gdXZTbGljZWRbMV0udSkgKiBjb2VmdTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBYVmVydHNbMl0gPSB1dlswXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh4aW5kZXggPCAoY29sIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBYVmVydHNbMF0gPSB1dlNsaWNlZFsxXS51O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFhWZXJ0c1sxXSA9IHV2U2xpY2VkWzFdLnUgKyAodXZTbGljZWRbMl0udSAtIHV2U2xpY2VkWzFdLnUpICogY29lZnU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wWFZlcnRzWzJdID0gdXZTbGljZWRbMV0udTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh4aW5kZXggPT09IChjb2wgLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFhWZXJ0c1swXSA9IHV2U2xpY2VkWzJdLnU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wWFZlcnRzWzFdID0gdXZTbGljZWRbM10udTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBYVmVydHNbMl0gPSB1dlNsaWNlZFsyXS51O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh5aW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBZVmVydHNbMF0gPSB1dlNsaWNlZFswXS52O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFlWZXJ0c1sxXSA9IHV2U2xpY2VkWzBdLnY7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wWVZlcnRzWzJdID0gdXZTbGljZWRbNF0udiArICh1dlNsaWNlZFs4XS52IC0gdXZTbGljZWRbNF0udikgKiBjb2VmdjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh5aW5kZXggPCAocm93IC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBZVmVydHNbMF0gPSB1dlNsaWNlZFs0XS52O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFlWZXJ0c1sxXSA9IHV2U2xpY2VkWzRdLnY7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wWVZlcnRzWzJdID0gdXZTbGljZWRbNF0udiArICh1dlNsaWNlZFs4XS52IC0gdXZTbGljZWRbNF0udikgKiBjb2VmdjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh5aW5kZXggPT09IChyb3cgLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFlWZXJ0c1swXSA9IHV2U2xpY2VkWzhdLnY7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wWVZlcnRzWzFdID0gdXZTbGljZWRbOF0udjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBZVmVydHNbMl0gPSB1dlNsaWNlZFsxMl0udjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0ZW1wWFZlcnRzWzNdID0gdGVtcFhWZXJ0c1sxXTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcFlWZXJ0c1szXSA9IHRlbXBZVmVydHNbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGxiXG4gICAgICAgICAgICAgICAgdmVydHNbdXZPZmZzZXRdID0gdGVtcFhWZXJ0c1swXTtcbiAgICAgICAgICAgICAgICB2ZXJ0c1t1dk9mZnNldCArIDFdID0gdGVtcFlWZXJ0c1swXTtcbiAgICAgICAgICAgICAgICB1dk9mZnNldCArPSBmbG9hdHNQZXJWZXJ0O1xuICAgICAgICAgICAgICAgIC8vIHJiXG4gICAgICAgICAgICAgICAgdmVydHNbdXZPZmZzZXRdID0gdGVtcFhWZXJ0c1sxXTtcbiAgICAgICAgICAgICAgICB2ZXJ0c1t1dk9mZnNldCArIDFdID0gdGVtcFlWZXJ0c1sxXTtcbiAgICAgICAgICAgICAgICB1dk9mZnNldCArPSBmbG9hdHNQZXJWZXJ0O1xuICAgICAgICAgICAgICAgIC8vIGx0XG4gICAgICAgICAgICAgICAgdmVydHNbdXZPZmZzZXRdID0gdGVtcFhWZXJ0c1syXTtcbiAgICAgICAgICAgICAgICB2ZXJ0c1t1dk9mZnNldCArIDFdID0gdGVtcFlWZXJ0c1syXTtcbiAgICAgICAgICAgICAgICB1dk9mZnNldCArPSBmbG9hdHNQZXJWZXJ0O1xuICAgICAgICAgICAgICAgIC8vIHJ0XG4gICAgICAgICAgICAgICAgdmVydHNbdXZPZmZzZXRdID0gdGVtcFhWZXJ0c1szXTtcbiAgICAgICAgICAgICAgICB2ZXJ0c1t1dk9mZnNldCArIDFdID0gdGVtcFlWZXJ0c1szXTtcbiAgICAgICAgICAgICAgICB1dk9mZnNldCArPSBmbG9hdHNQZXJWZXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19