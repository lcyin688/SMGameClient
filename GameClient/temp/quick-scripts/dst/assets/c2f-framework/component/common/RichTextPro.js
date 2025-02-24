
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/common/RichTextPro.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5cf0afApuVIx7weT9g99hKl', 'RichTextPro');
// c2f-framework/component/common/RichTextPro.ts

"use strict";
/** RichTextPro在cc.RichText的基础上增加了更多格式
 * 新增直接使用图片：<iFile src='mainPack:/xx/xx/xx' click='handler' />
 * 新增预制体的使用：<prefab idx='0' click='handler' />
*/
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlTextParser = require('htmlTextParser');
var htmlParser = new HtmlTextParser();
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, menu = _a.menu;
var RichTextPro = /** @class */ (function (_super) {
    __extends(RichTextPro, _super);
    function RichTextPro() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._string = '';
        _this._outlineWidth = 0;
        _this._outlineColor = new cc.Color(0, 0, 0);
        _this._fontFamily = 'Arial';
        _this._fontSize = 50;
        _this._spacingY = 10;
        _this._maxWidth = 100;
        _this._prefabs = [];
        _this.eventHandlers = [];
        _this.spAtlas = null;
        _this.cvs = null;
        _this.ctx = null;
        _this.cellX = 0;
        _this.cellY = 0;
        _this.rowW = 0;
        _this.rowH = 0;
        _this.pageNode = null;
        /** 临时参数 */
        _this.bold = '';
        _this.style = '0';
        _this.tmpFontFml = '';
        _this.tmpSZFont = 1;
        _this.tmpOutLine = null;
        _this.dymicFrame = null;
        /** 点击区域 */
        _this.eventRect = null;
        return _this;
    }
    Object.defineProperty(RichTextPro.prototype, "string", {
        get: function () { return this._string; },
        set: function (value) {
            this._string = value;
            this.updateContent();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RichTextPro.prototype, "outlineWidth", {
        get: function () { return this._outlineWidth; },
        set: function (value) {
            this._outlineWidth = value;
            this.updateContent();
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(RichTextPro.prototype, "outlineColor", {
        get: function () { return this._outlineColor; },
        set: function (value) {
            this._outlineColor = value;
            this.updateContent();
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(RichTextPro.prototype, "fontFamily", {
        get: function () { return this._fontFamily; },
        set: function (value) {
            this._fontFamily = value;
            this.updateContent();
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(RichTextPro.prototype, "fontSize", {
        get: function () { return this._fontSize; },
        set: function (value) {
            this._fontSize = value;
            this.updateContent();
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(RichTextPro.prototype, "spacingY", {
        get: function () { return this._spacingY; },
        set: function (value) {
            this._spacingY = value;
            this.updateContent();
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(RichTextPro.prototype, "maxWidth", {
        get: function () { return this._maxWidth; },
        set: function (value) {
            this._maxWidth = value;
            this.updateContent();
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(RichTextPro.prototype, "prefabs", {
        get: function () { return this._prefabs; },
        set: function (value) {
            this._prefabs = value;
            this.updateContent();
        },
        enumerable: false,
        configurable: true
    });
    ;
    RichTextPro.prototype.start = function () {
        this.updateContent();
        this.node.on(cc.Node.EventType.SIZE_CHANGED, this.updateContent, this);
        this.node.on(cc.Node.EventType.ANCHOR_CHANGED, this.updateContent, this);
    };
    RichTextPro.prototype.addEventRect = function (rect, event) {
        if (!this.eventRect) {
            this.eventRect = new Map();
        }
        this.eventRect.set(rect, event);
    };
    RichTextPro.prototype.updateContent = function () {
        if (cc.isValid(this.node)) {
            this.node.removeAllChildren();
            this.node.destroyAllChildren();
        }
        this.cvs = null;
        this.ctx = null;
        if (!this.string || this.string.length <= 0) {
            return;
        }
        //初始化
        this.rowW = 0;
        this.rowH = this.fontSize + this.spacingY;
        this.cellX = 0;
        this.cellY = this.rowH;
        this.tmpSZFont = this.fontSize;
        this.tmpOutLine = { width: this.outlineWidth, color: "#" + this.outlineColor.toHEX() };
        if (this.eventRect) {
            this.eventRect.clear();
        }
        if (this.dymicFrame) {
            this.dymicFrame.clear();
        }
        this.bold = '';
        this.style = '0';
        this.tmpFontFml = this.fontFamily;
        this.createPage();
        if (!this.pageNode)
            throw new Error("Can't find page node");
        if (!this.ctx)
            throw new Error("Can't find canvas");
        var textArray = htmlParser.parse(this.string);
        this.preloadImage(textArray, this.updateString.bind(this, textArray));
    };
    RichTextPro.prototype.updateTextStyle = function (styleObj) {
        if (!styleObj) {
            this.ctx.fillStyle = '#' + this.node.color.toHEX();
            this.tmpSZFont = this.fontSize;
            this.bold = '';
            this.style = '';
            this.tmpOutLine.width = this.outlineWidth;
            this.tmpOutLine.color = "#" + this.outlineColor.toHEX();
            this.ctx.font = this.bold + " " + this.tmpSZFont + "px " + this.tmpFontFml;
            return null;
        }
        var result = {};
        //颜色
        if (styleObj.color) {
            this.ctx.fillStyle = styleObj.color;
        }
        else {
            this.ctx.fillStyle = '#' + this.node.color.toHEX();
        }
        //字体大小
        this.tmpSZFont = this.fontSize;
        if (styleObj.size) {
            this.tmpSZFont = Math.min(styleObj.size, this.fontSize);
        }
        //粗体
        if (styleObj.hasOwnProperty('bold')) {
            this.bold = 'bold';
        }
        else {
            this.bold = '';
        }
        //下划线·删除线
        if (styleObj.hasOwnProperty('underline')) {
            this.style = 'u';
        }
        else {
            if (styleObj.hasOwnProperty('delete')) {
                this.style = 'd';
            }
            else {
                this.style = '';
            }
        }
        //描边
        if (styleObj.outline) {
            this.tmpOutLine.width = styleObj.outline.width;
            this.tmpOutLine.color = styleObj.outline.color;
        }
        else {
            this.tmpOutLine.width = this.outlineWidth;
            this.tmpOutLine.color = "#" + this.outlineColor.toHEX();
        }
        //换行
        if (styleObj.hasOwnProperty('newline')) {
            result.newLine = true;
        }
        //图片·图集
        if (styleObj.isImage) {
            result.imgAtlas = styleObj.src;
        }
        //图片·文件
        if (styleObj.isImgFile) {
            result.imgFile = styleObj.src;
        }
        //预制体
        if (styleObj.isPrefab) {
            result.prefab = styleObj.idx;
        }
        //事件
        if (styleObj.event) {
            result.event = { click: styleObj.event.click, param: styleObj.event.param };
        }
        this.ctx.font = this.bold + " " + this.tmpSZFont + "px " + this.tmpFontFml;
        return result;
    };
    //添加图片文件
    RichTextPro.prototype.addImageByFile = function (url, event) {
        var node = new cc.Node('image');
        node.anchorX = 0;
        node.anchorY = 0;
        node.width = 1;
        node.height = 1;
        if (CC_EDITOR) {
            node.width = this.rowH;
            node.height = this.rowH;
        }
        else {
            var spt = node.addComponent(cc.Sprite);
            if (this.dymicFrame && this.dymicFrame.has(url)) {
                spt.spriteFrame = this.dymicFrame.get(url);
            }
            else {
                node.width = this.rowH;
                node.height = this.rowH;
            }
            node.scale = this.rowH / node.height;
            if (this.maxWidth > 0 && node.width * node.scale > this.maxWidth) {
                node.scale = this.maxWidth / node.width;
            }
        }
        var width = node.width * node.scale;
        if (this.maxWidth > 0 && this.rowW + width > this.maxWidth) {
            node.x = 0;
            this.addRow();
            this.rowW += width;
        }
        else {
            node.x = this.rowW;
            this.rowW += width;
            this.cellX = this.rowW;
        }
        node.setParent(this.pageNode);
        node.y = -this.cellY;
        if (event) {
            var rect = cc.rect(node.x, node.y, width, this.tmpSZFont);
            this.addEventRect(rect, event);
        }
    };
    //添加图集图片
    RichTextPro.prototype.addImageByAtlas = function (url, event) {
        var node = new cc.Node('image');
        node.anchorX = 0;
        node.anchorY = 0;
        node.width = 1;
        node.height = 1;
        if (CC_EDITOR) {
            node.width = this.rowH;
            node.height = this.rowH;
        }
        else {
            var spt = node.addComponent(cc.Sprite);
            if (this.spAtlas) {
                spt.spriteFrame = this.spAtlas.getSpriteFrame(url);
            }
            else {
                node.width = this.rowH;
                node.height = this.rowH;
            }
            node.scale = this.rowH / node.height;
            if (this.maxWidth >= 0 && node.width * node.scale > this.maxWidth) {
                node.scale = this.maxWidth / node.width;
            }
        }
        var width = node.width * node.scale;
        if (this.maxWidth > 0 && this.rowW + width > this.maxWidth) {
            node.x = 0;
            this.addRow();
            this.rowW += width;
        }
        else {
            node.x = this.rowW;
            this.rowW += width;
            this.cellX = this.rowW;
        }
        node.setParent(this.pageNode);
        node.y = -this.cellY;
        if (event) {
            var rect = cc.rect(node.x, node.y, width, this.tmpSZFont);
            this.addEventRect(rect, event);
        }
    };
    //添加预制体
    RichTextPro.prototype.addPrefab = function (idx, event) {
        if (idx < 0 || idx > this.prefabs.length - 1) {
            return;
        }
        var node = null;
        var dstPrefab = this.prefabs[idx];
        if (CC_EDITOR) {
            node = cc.instantiate(dstPrefab);
        }
        else {
            node = c2f.res.instantiate(dstPrefab, this.node);
        }
        node.scale = this.rowH / node.height;
        if (node.width * node.scale > this.node.width) {
            node.scale = this.node.width / node.width;
        }
        var width = node.width * node.scale;
        var height = node.height * node.scale;
        var rectX = 0;
        if (this.rowW + width > this.node.width) {
            this.addRow();
            this.rowW += width;
            //换行成功才为0
            rectX = this.rowW == width ? 0 : this.rowW;
        }
        else {
            rectX = this.rowW;
            this.rowW += width;
            this.cellX = this.rowW;
        }
        node.setParent(this.pageNode);
        node.x = rectX + width * node.anchorX;
        node.y = height * node.anchorY - this.cellY;
        if (event) {
            var rect = cc.rect(rectX, -this.cellY, width, height);
            this.addEventRect(rect, event);
        }
    };
    RichTextPro.prototype.preloadImage = function (arrText, endCb) {
        var _this = this;
        var urls = [];
        for (var _i = 0, arrText_1 = arrText; _i < arrText_1.length; _i++) {
            var one = arrText_1[_i];
            if (!one.style) {
                continue;
            }
            if (!one.style.isImgFile) {
                continue;
            }
            if (one.style.src.length > 0 && urls.indexOf(one.style.src) < 0) {
                urls.push(one.style.src);
            }
        }
        if (urls.length <= 0 || CC_EDITOR) {
            endCb && endCb();
        }
        else {
            if (!this.dymicFrame) {
                this.dymicFrame = new Map();
            }
            var cmplCnt_1 = 0;
            var checkCmpl_1 = function () {
                cmplCnt_1++;
                if (cmplCnt_1 >= urls.length) {
                    endCb && endCb();
                }
            };
            var _loop_1 = function (one) {
                c2f.res.loadOne(one, cc.SpriteFrame).then(function (res) {
                    _this.dymicFrame.set(one, res);
                    checkCmpl_1();
                });
            };
            for (var _a = 0, urls_1 = urls; _a < urls_1.length; _a++) {
                var one = urls_1[_a];
                _loop_1(one);
            }
        }
    };
    RichTextPro.prototype.updateString = function (textArray) {
        /** 单字符宽度 */
        var oneCharW = 0;
        for (var i = 0, len = textArray.length; i <= len; ++i) {
            if (i === len) {
                this.pageToNode();
            }
            else {
                var one = textArray[i];
                var subLen = one.text.length;
                //样式调整
                var result = this.updateTextStyle(one.style);
                if (subLen <= 0) {
                    //换行
                    if (result && result.newLine) {
                        this.addRow(true);
                    }
                    //图片·文件
                    if (result && result.imgFile) {
                        this.addImageByFile(result.imgFile, result.event);
                    }
                    //图片·图集
                    if (result && result.imgAtlas) {
                        this.addImageByAtlas(result.imgAtlas, result.event);
                    }
                    //预制体
                    if (result && result.hasOwnProperty('prefab')) {
                        this.addPrefab(result.prefab, result.event);
                    }
                }
                else {
                    var event = result ? result.event : null;
                    //文本
                    this.cellX = this.rowW;
                    var startID = 0;
                    for (var idx = 0; idx <= subLen; ++idx) {
                        if (idx >= subLen) {
                            this.drawToPage(one.text.substring(startID), event);
                        }
                        else {
                            var oneChar = one.text[idx];
                            oneCharW = this.ctx.measureText(oneChar).width;
                            //换行
                            if (this.rowW + oneCharW > Math.max(this.node.width, this.maxWidth)) {
                                this.drawToPage(one.text.substring(startID, idx), event);
                                startID = idx;
                                this.addRow();
                                this.rowW += oneCharW;
                            }
                            else {
                                this.rowW += oneCharW;
                            }
                        }
                    }
                }
            }
        }
    };
    RichTextPro.prototype.createPage = function () {
        this.pageNode = new cc.Node("page_" + this.node.childrenCount);
        this.pageNode['_objFlags'] |= cc.Object['Flags'].HideInHierarchy;
        this.pageNode['_objFlags'] |= cc.Object['Flags'].LockedInEditor;
        var font = this.ctx ? this.ctx.font : this.bold + " " + this.fontSize + "px " + this.tmpFontFml;
        var fillStyle = this.ctx ? this.ctx.fillStyle : '#' + this.node.color.toHEX();
        this.cvs = document.createElement('canvas');
        this.ctx = this.cvs.getContext('2d');
        this.cvs.width = this.node.width;
        this.cvs.height = this.node.height - (this.node.height % this.rowH);
        this.ctx.font = font;
        this.ctx.fillStyle = fillStyle;
        this.ctx.lineWidth = this.outlineWidth;
        this.ctx.strokeStyle = '#' + this.outlineColor.toHEX();
    };
    RichTextPro.prototype.drawToPage = function (str, event) {
        if (str === '')
            return;
        var x = this.cellX;
        var y = this.cellY - this.fontSize * 0.15 - this.spacingY * 0.5;
        var curOutlineWidth = this.tmpOutLine.width;
        this.ctx.lineWidth = curOutlineWidth * 2;
        this.ctx.strokeStyle = this.tmpOutLine.color;
        if (curOutlineWidth > 0) {
            this.ctx.strokeText(str, x, y);
        }
        this.ctx.fillText(str, x, y);
        var realWidth = this.ctx.measureText(str).width;
        //添加事件区域
        if (event) {
            var rect = cc.rect(x, -this.cellY, realWidth, this.tmpSZFont);
            this.addEventRect(rect, event);
        }
        //显示外框，调试用
        //this.ctx.strokeRect(x, this.cellY - this.rowH, realWidth, this.rowH);
        switch (this.style) {
            case 'd':
                this.ctx.lineWidth = Math.max(this.fontSize >> 3, this.outlineWidth);
                this.ctx.beginPath();
                this.ctx.moveTo(x, y - this.fontSize / 2 + this.ctx.lineWidth);
                this.ctx.lineTo(x + realWidth, y - this.fontSize / 2 + this.ctx.lineWidth);
                this.ctx.stroke();
                this.ctx.lineWidth = curOutlineWidth;
                break;
            case 'u':
                this.ctx.lineWidth = Math.max(this.fontSize >> 3, this.outlineWidth);
                this.ctx.strokeStyle = this.ctx.fillStyle;
                this.ctx.beginPath();
                this.ctx.moveTo(x, y + this.ctx.lineWidth * 2);
                this.ctx.lineTo(x + realWidth, y + this.ctx.lineWidth * 2);
                this.ctx.stroke();
                this.ctx.lineWidth = curOutlineWidth;
                this.ctx.strokeStyle = this.tmpOutLine.color;
                break;
        }
    };
    RichTextPro.prototype.pageToNode = function () {
        if (!this.cvs || !this.pageNode)
            throw new Error('cvs or pageNode is null');
        // 修正高度
        this.node.height = this.cellY;
        // 修正宽度
        var rowCount = this.cellY / this.rowH;
        this.node.width = rowCount > 1 ? this.maxWidth : this.rowW;
        var texture = new cc.Texture2D();
        texture.initWithElement(this.cvs);
        var sprite = this.pageNode.getComponent(cc.Sprite);
        if (!sprite) {
            sprite = this.pageNode.addComponent(cc.Sprite);
        }
        sprite.spriteFrame = new cc.SpriteFrame(texture, cc.rect(0, 0, this.cvs.width, this.cvs.height));
        this.pageNode.width = this.node.width;
        this.pageNode.height = this.node.height;
        this.pageNode.anchorX = 0;
        this.pageNode.anchorY = 1;
        this.pageNode.x = -this.node.width * this.node.anchorX;
        this.pageNode.y = this.node.height * (1 - this.node.anchorY);
        this.pageNode.setParent(this.node);
        this.pageNode.on(cc.Node.EventType.TOUCH_END, this.onPageNodeTouchEnd, this);
    };
    RichTextPro.prototype.addRow = function (isForce) {
        if (isForce === void 0) { isForce = false; }
        this.rowH = this.fontSize + this.spacingY;
        if (isForce || this.maxWidth > 0) {
            this.cellX = 0;
            this.rowW = 0;
            this.cellY += this.rowH;
        }
    };
    //点击事件
    RichTextPro.prototype.onPageNodeTouchEnd = function (event) {
        if (!this.eventRect) {
            return;
        }
        var curPosW = event.getLocation();
        var curPosL = this.pageNode.convertToNodeSpaceAR(curPosW);
        var arrEvts = [];
        this.eventRect.forEach(function (v, k) {
            if (k.contains(curPosL)) {
                arrEvts.push(v);
            }
        });
        if (arrEvts.length <= 0) {
            return;
        }
        for (var _i = 0, arrEvts_1 = arrEvts; _i < arrEvts_1.length; _i++) {
            var oneEvt = arrEvts_1[_i];
            cc.log('RichTextPro click:', oneEvt.click, oneEvt.param);
            for (var _a = 0, _b = this.eventHandlers; _a < _b.length; _a++) {
                var oneHandl = _b[_a];
                oneHandl.emit([oneEvt.click, oneEvt.param]);
            }
        }
    };
    /** 快捷设置事件 */
    RichTextPro.prototype.quickSetClickHnadler = function (ower, handlerName) {
        var handler = new cc.Component.EventHandler();
        handler.target = ower.node;
        handler.component = c2f.utils.view.getComponentName(ower);
        handler.handler = handlerName;
        handler.customEventData = "";
        this.eventHandlers = [handler];
    };
    RichTextPro.prototype.onDestroy = function () {
        this.node.destroyAllChildren();
        this.node.targetOff(this);
        this.cvs = null;
        this.ctx = null;
        this.pageNode = null;
        if (this.dymicFrame) {
            this.dymicFrame.clear();
            this.dymicFrame = null;
        }
        if (this.eventRect) {
            this.eventRect.clear();
            this.eventRect = null;
        }
    };
    __decorate([
        property
    ], RichTextPro.prototype, "_string", void 0);
    __decorate([
        property({ multiline: true, tooltip: '文本内容' })
    ], RichTextPro.prototype, "string", null);
    __decorate([
        property
    ], RichTextPro.prototype, "_outlineWidth", void 0);
    __decorate([
        property({ min: 0, tooltip: '描边宽度, 为0时表示无描边' })
    ], RichTextPro.prototype, "outlineWidth", null);
    __decorate([
        property
    ], RichTextPro.prototype, "_outlineColor", void 0);
    __decorate([
        property({ tooltip: '描边颜色', visible: function () { return this.outlineWidth > 0; } })
    ], RichTextPro.prototype, "outlineColor", null);
    __decorate([
        property
    ], RichTextPro.prototype, "_fontFamily", void 0);
    __decorate([
        property({ tooltip: '字体名称, 游戏字体可用：fzcsjt_LABEL' })
    ], RichTextPro.prototype, "fontFamily", null);
    __decorate([
        property
    ], RichTextPro.prototype, "_fontSize", void 0);
    __decorate([
        property({ min: 4, tooltip: '字体大小' })
    ], RichTextPro.prototype, "fontSize", null);
    __decorate([
        property
    ], RichTextPro.prototype, "_spacingY", void 0);
    __decorate([
        property({ tooltip: '字体行间距' })
    ], RichTextPro.prototype, "spacingY", null);
    __decorate([
        property
    ], RichTextPro.prototype, "_maxWidth", void 0);
    __decorate([
        property({ tooltip: '富文本最大宽度' })
    ], RichTextPro.prototype, "maxWidth", null);
    __decorate([
        property({ type: cc.Prefab, tooltip: '嵌入预制体' })
    ], RichTextPro.prototype, "_prefabs", void 0);
    __decorate([
        property({ type: cc.Prefab, tooltip: '嵌入预制体' })
    ], RichTextPro.prototype, "prefabs", null);
    __decorate([
        property({ type: cc.Component.EventHandler, tooltip: '文本事件' })
    ], RichTextPro.prototype, "eventHandlers", void 0);
    __decorate([
        property({ type: cc.SpriteAtlas, tooltip: '图集' })
    ], RichTextPro.prototype, "spAtlas", void 0);
    RichTextPro = __decorate([
        ccclass,
        executeInEditMode,
        menu('c2f/controls/RichTextPro')
    ], RichTextPro);
    return RichTextPro;
}(cc.Component));
exports.default = RichTextPro;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9jb21tb24vUmljaFRleHRQcm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7RUFHRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUYsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDakQsSUFBTSxVQUFVLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztBQWVsQyxJQUFBLEtBQWlELEVBQUUsQ0FBQyxVQUFVLEVBQTVELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGlCQUFpQix1QkFBQSxFQUFFLElBQUksVUFBa0IsQ0FBQztBQUlyRTtJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQStqQkM7UUE1akJXLGFBQU8sR0FBVyxFQUFFLENBQUM7UUFTckIsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUFTMUIsbUJBQWEsR0FBYSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQVNoRCxpQkFBVyxHQUFXLE9BQU8sQ0FBQztRQVM5QixlQUFTLEdBQVcsRUFBRSxDQUFDO1FBU3ZCLGVBQVMsR0FBVyxFQUFFLENBQUM7UUFTdkIsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQVN4QixjQUFRLEdBQWdCLEVBQUUsQ0FBQztRQVMzQixtQkFBYSxHQUFnQyxFQUFFLENBQUM7UUFHaEQsYUFBTyxHQUFtQixJQUFJLENBQUM7UUFHaEMsU0FBRyxHQUFzQixJQUFJLENBQUM7UUFDN0IsU0FBRyxHQUE2QixJQUFJLENBQUM7UUFDckMsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRWpDLFdBQVc7UUFDSCxVQUFJ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LEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDMUMsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxTQUFTLEVBQUU7WUFDWCxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ0gsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEQ7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDN0M7UUFDRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDckMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUM7WUFDbkIsU0FBUztZQUNULEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLEtB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REMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDOytDQUNlO0lBT2hEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2lEQUNiO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDOzhDQUNGO0lBTzlDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQztzREFDUDtJQUd4RDtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztnREFDWDtJQTlFdEIsV0FBVztRQUgvQixPQUFPO1FBQ1AsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQywwQkFBMEIsQ0FBQztPQUNaLFdBQVcsQ0ErakIvQjtJQUFELGtCQUFDO0NBL2pCRCxBQStqQkMsQ0EvakJ3QyxFQUFFLENBQUMsU0FBUyxHQStqQnBEO2tCQS9qQm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKiogUmljaFRleHRQcm/lnKhjYy5SaWNoVGV4dOeahOWfuuehgOS4iuWinuWKoOS6huabtOWkmuagvOW8jyBcbiAqIOaWsOWinuebtOaOpeS9v+eUqOWbvueJh++8mjxpRmlsZSBzcmM9J21haW5QYWNrOi94eC94eC94eCcgY2xpY2s9J2hhbmRsZXInIC8+XG4gKiDmlrDlop7pooTliLbkvZPnmoTkvb/nlKjvvJo8cHJlZmFiIGlkeD0nMCcgY2xpY2s9J2hhbmRsZXInIC8+XG4qL1xuXG5jb25zdCBIdG1sVGV4dFBhcnNlciA9IHJlcXVpcmUoJ2h0bWxUZXh0UGFyc2VyJyk7XG5jb25zdCBodG1sUGFyc2VyID0gbmV3IEh0bWxUZXh0UGFyc2VyKCk7XG5cblxuaW50ZXJmYWNlIFJpY2hFdmVudCB7XG4gICAgY2xpY2s6IHN0cmluZztcbiAgICBwYXJhbTogc3RyaW5nXG59XG5pbnRlcmZhY2UgU3l0bGVSZXN1bHQge1xuICAgIG5ld0xpbmU/OiBib29sZWFuLFxuICAgIGltZ0F0bGFzPzogc3RyaW5nLFxuICAgIGltZ0ZpbGU/OiBzdHJpbmcsXG4gICAgcHJlZmFiPzogbnVtYmVyLFxuICAgIGV2ZW50PzogUmljaEV2ZW50LFxufVxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBleGVjdXRlSW5FZGl0TW9kZSwgbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5AZXhlY3V0ZUluRWRpdE1vZGVcbkBtZW51KCdjMmYvY29udHJvbHMvUmljaFRleHRQcm8nKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmljaFRleHRQcm8gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5XG4gICAgcHJpdmF0ZSBfc3RyaW5nOiBzdHJpbmcgPSAnJztcbiAgICBAcHJvcGVydHkoeyBtdWx0aWxpbmU6IHRydWUsIHRvb2x0aXA6ICfmlofmnKzlhoXlrrknIH0pXG4gICAgZ2V0IHN0cmluZygpIHsgcmV0dXJuIHRoaXMuX3N0cmluZzsgfVxuICAgIHNldCBzdHJpbmcodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9zdHJpbmcgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVDb250ZW50KCk7XG4gICAgfVxuXG4gICAgQHByb3BlcnR5XG4gICAgcHJpdmF0ZSBfb3V0bGluZVdpZHRoOiBudW1iZXIgPSAwO1xuICAgIEBwcm9wZXJ0eSh7IG1pbjogMCwgdG9vbHRpcDogJ+aPj+i+ueWuveW6piwg5Li6MOaXtuihqOekuuaXoOaPj+i+uScgfSlcbiAgICBwcml2YXRlIGdldCBvdXRsaW5lV2lkdGgoKSB7IHJldHVybiB0aGlzLl9vdXRsaW5lV2lkdGggfTtcbiAgICBwcml2YXRlIHNldCBvdXRsaW5lV2lkdGgodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9vdXRsaW5lV2lkdGggPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVDb250ZW50KCk7XG4gICAgfVxuXG4gICAgQHByb3BlcnR5XG4gICAgcHJpdmF0ZSBfb3V0bGluZUNvbG9yOiBjYy5Db2xvciA9IG5ldyBjYy5Db2xvcigwLCAwLCAwKTtcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiAn5o+P6L656aKc6ImyJywgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMub3V0bGluZVdpZHRoID4gMCB9IH0pXG4gICAgcHJpdmF0ZSBnZXQgb3V0bGluZUNvbG9yKCkgeyByZXR1cm4gdGhpcy5fb3V0bGluZUNvbG9yIH07XG4gICAgcHJpdmF0ZSBzZXQgb3V0bGluZUNvbG9yKHZhbHVlOiBjYy5Db2xvcikge1xuICAgICAgICB0aGlzLl9vdXRsaW5lQ29sb3IgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVDb250ZW50KCk7XG4gICAgfVxuXG4gICAgQHByb3BlcnR5XG4gICAgcHJpdmF0ZSBfZm9udEZhbWlseTogc3RyaW5nID0gJ0FyaWFsJztcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiAn5a2X5L2T5ZCN56ewLCDmuLjmiI/lrZfkvZPlj6/nlKjvvJpmemNzanRfTEFCRUwnIH0pXG4gICAgcHJpdmF0ZSBnZXQgZm9udEZhbWlseSgpIHsgcmV0dXJuIHRoaXMuX2ZvbnRGYW1pbHkgfTtcbiAgICBwcml2YXRlIHNldCBmb250RmFtaWx5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZm9udEZhbWlseSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQoKTtcbiAgICB9XG5cbiAgICBAcHJvcGVydHlcbiAgICBwcml2YXRlIF9mb250U2l6ZTogbnVtYmVyID0gNTA7XG4gICAgQHByb3BlcnR5KHsgbWluOiA0LCB0b29sdGlwOiAn5a2X5L2T5aSn5bCPJyB9KVxuICAgIHByaXZhdGUgZ2V0IGZvbnRTaXplKCkgeyByZXR1cm4gdGhpcy5fZm9udFNpemUgfTtcbiAgICBwcml2YXRlIHNldCBmb250U2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2ZvbnRTaXplID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlQ29udGVudCgpO1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eVxuICAgIHByaXZhdGUgX3NwYWNpbmdZOiBudW1iZXIgPSAxMDtcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiAn5a2X5L2T6KGM6Ze06LedJyB9KVxuICAgIHByaXZhdGUgZ2V0IHNwYWNpbmdZKCkgeyByZXR1cm4gdGhpcy5fc3BhY2luZ1kgfTtcbiAgICBwcml2YXRlIHNldCBzcGFjaW5nWSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3NwYWNpbmdZID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlQ29udGVudCgpO1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eVxuICAgIHByaXZhdGUgX21heFdpZHRoOiBudW1iZXIgPSAxMDA7XG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogJ+WvjOaWh+acrOacgOWkp+WuveW6picgfSlcbiAgICBwcml2YXRlIGdldCBtYXhXaWR0aCgpIHsgcmV0dXJuIHRoaXMuX21heFdpZHRoIH07XG4gICAgcHJpdmF0ZSBzZXQgbWF4V2lkdGgodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9tYXhXaWR0aCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQoKTtcbiAgICB9XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5QcmVmYWIsIHRvb2x0aXA6ICfltYzlhaXpooTliLbkvZMnIH0pXG4gICAgcHJpdmF0ZSBfcHJlZmFiczogY2MuUHJlZmFiW10gPSBbXTtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5QcmVmYWIsIHRvb2x0aXA6ICfltYzlhaXpooTliLbkvZMnIH0pXG4gICAgcHJpdmF0ZSBnZXQgcHJlZmFicygpIHsgcmV0dXJuIHRoaXMuX3ByZWZhYnMgfTtcbiAgICBwcml2YXRlIHNldCBwcmVmYWJzKHZhbHVlOiBjYy5QcmVmYWJbXSkge1xuICAgICAgICB0aGlzLl9wcmVmYWJzID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlQ29udGVudCgpO1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIsIHRvb2x0aXA6ICfmlofmnKzkuovku7YnIH0pXG4gICAgcHJpdmF0ZSBldmVudEhhbmRsZXJzOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlNwcml0ZUF0bGFzLCB0b29sdGlwOiAn5Zu+6ZuGJyB9KVxuICAgIHByaXZhdGUgc3BBdGxhczogY2MuU3ByaXRlQXRsYXMgPSBudWxsO1xuXG5cbiAgICBwdWJsaWMgY3ZzOiBIVE1MQ2FudmFzRWxlbWVudCA9IG51bGw7XG4gICAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IG51bGw7XG4gICAgcHJpdmF0ZSBjZWxsWDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNlbGxZOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcm93VzogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHJvd0g6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBwYWdlTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAvKiog5Li05pe25Y+C5pWwICovXG4gICAgcHJpdmF0ZSBib2xkOiBzdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIHN0eWxlOiBzdHJpbmcgPSAnMCc7XG4gICAgcHJpdmF0ZSB0bXBGb250Rm1sOiBzdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIHRtcFNaRm9udDogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIHRtcE91dExpbmU6IHsgd2lkdGg6IG51bWJlciwgY29sb3I6IHN0cmluZyB9ID0gbnVsbDtcbiAgICBwcml2YXRlIGR5bWljRnJhbWU6IE1hcDxzdHJpbmcsIGNjLlNwcml0ZUZyYW1lPiA9IG51bGw7XG4gICAgLyoqIOeCueWHu+WMuuWfnyAqL1xuICAgIHByaXZhdGUgZXZlbnRSZWN0OiBNYXA8Y2MuUmVjdCwgUmljaEV2ZW50PiA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ29udGVudCgpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuU0laRV9DSEFOR0VELCB0aGlzLnVwZGF0ZUNvbnRlbnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuQU5DSE9SX0NIQU5HRUQsIHRoaXMudXBkYXRlQ29udGVudCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRFdmVudFJlY3QocmVjdDogY2MuUmVjdCwgZXZlbnQ6IFJpY2hFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZXZlbnRSZWN0KSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50UmVjdCA9IG5ldyBNYXAoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV2ZW50UmVjdC5zZXQocmVjdCwgZXZlbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQ29udGVudCgpIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5ub2RlKSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdnMgPSBudWxsO1xuICAgICAgICB0aGlzLmN0eCA9IG51bGw7XG5cbiAgICAgICAgaWYgKCF0aGlzLnN0cmluZyB8fCB0aGlzLnN0cmluZy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy/liJ3lp4vljJZcbiAgICAgICAgdGhpcy5yb3dXID0gMDtcbiAgICAgICAgdGhpcy5yb3dIID0gdGhpcy5mb250U2l6ZSArIHRoaXMuc3BhY2luZ1k7XG4gICAgICAgIHRoaXMuY2VsbFggPSAwO1xuICAgICAgICB0aGlzLmNlbGxZID0gdGhpcy5yb3dIO1xuICAgICAgICB0aGlzLnRtcFNaRm9udCA9IHRoaXMuZm9udFNpemU7XG4gICAgICAgIHRoaXMudG1wT3V0TGluZSA9IHsgd2lkdGg6IHRoaXMub3V0bGluZVdpZHRoLCBjb2xvcjogYCMke3RoaXMub3V0bGluZUNvbG9yLnRvSEVYKCl9YCB9O1xuICAgICAgICBpZiAodGhpcy5ldmVudFJlY3QpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRSZWN0LmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZHltaWNGcmFtZSkge1xuICAgICAgICAgICAgdGhpcy5keW1pY0ZyYW1lLmNsZWFyKClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvbGQgPSAnJztcbiAgICAgICAgdGhpcy5zdHlsZSA9ICcwJztcbiAgICAgICAgdGhpcy50bXBGb250Rm1sID0gdGhpcy5mb250RmFtaWx5O1xuICAgICAgICB0aGlzLmNyZWF0ZVBhZ2UoKTtcbiAgICAgICAgaWYgKCF0aGlzLnBhZ2VOb2RlKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBmaW5kIHBhZ2Ugbm9kZVwiKVxuICAgICAgICBpZiAoIXRoaXMuY3R4KSB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBmaW5kIGNhbnZhc1wiKTtcblxuICAgICAgICBsZXQgdGV4dEFycmF5ID0gaHRtbFBhcnNlci5wYXJzZSh0aGlzLnN0cmluZyk7XG4gICAgICAgIHRoaXMucHJlbG9hZEltYWdlKHRleHRBcnJheSwgdGhpcy51cGRhdGVTdHJpbmcuYmluZCh0aGlzLCB0ZXh0QXJyYXkpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVRleHRTdHlsZShzdHlsZU9iajogYW55KSB7XG4gICAgICAgIGlmICghc3R5bGVPYmopIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjJyArIHRoaXMubm9kZS5jb2xvci50b0hFWCgpO1xuICAgICAgICAgICAgdGhpcy50bXBTWkZvbnQgPSB0aGlzLmZvbnRTaXplO1xuICAgICAgICAgICAgdGhpcy5ib2xkID0gJyc7XG4gICAgICAgICAgICB0aGlzLnN0eWxlID0gJyc7XG4gICAgICAgICAgICB0aGlzLnRtcE91dExpbmUud2lkdGggPSB0aGlzLm91dGxpbmVXaWR0aDtcbiAgICAgICAgICAgIHRoaXMudG1wT3V0TGluZS5jb2xvciA9IGAjJHt0aGlzLm91dGxpbmVDb2xvci50b0hFWCgpfWA7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gYCR7dGhpcy5ib2xkfSAke3RoaXMudG1wU1pGb250fXB4ICR7dGhpcy50bXBGb250Rm1sfWA7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0OiBTeXRsZVJlc3VsdCA9IHt9O1xuICAgICAgICAvL+minOiJslxuICAgICAgICBpZiAoc3R5bGVPYmouY29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHN0eWxlT2JqLmNvbG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyMnICsgdGhpcy5ub2RlLmNvbG9yLnRvSEVYKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy/lrZfkvZPlpKflsI9cbiAgICAgICAgdGhpcy50bXBTWkZvbnQgPSB0aGlzLmZvbnRTaXplO1xuICAgICAgICBpZiAoc3R5bGVPYmouc2l6ZSkge1xuICAgICAgICAgICAgdGhpcy50bXBTWkZvbnQgPSBNYXRoLm1pbihzdHlsZU9iai5zaXplLCB0aGlzLmZvbnRTaXplKTtcbiAgICAgICAgfVxuICAgICAgICAvL+eyl+S9k1xuICAgICAgICBpZiAoc3R5bGVPYmouaGFzT3duUHJvcGVydHkoJ2JvbGQnKSkge1xuICAgICAgICAgICAgdGhpcy5ib2xkID0gJ2JvbGQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ib2xkID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgLy/kuIvliJLnur/Ct+WIoOmZpOe6v1xuICAgICAgICBpZiAoc3R5bGVPYmouaGFzT3duUHJvcGVydHkoJ3VuZGVybGluZScpKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlID0gJ3UnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHN0eWxlT2JqLmhhc093blByb3BlcnR5KCdkZWxldGUnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUgPSAnZCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL+aPj+i+uVxuICAgICAgICBpZiAoc3R5bGVPYmoub3V0bGluZSkge1xuICAgICAgICAgICAgdGhpcy50bXBPdXRMaW5lLndpZHRoID0gc3R5bGVPYmoub3V0bGluZS53aWR0aDtcbiAgICAgICAgICAgIHRoaXMudG1wT3V0TGluZS5jb2xvciA9IHN0eWxlT2JqLm91dGxpbmUuY29sb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRtcE91dExpbmUud2lkdGggPSB0aGlzLm91dGxpbmVXaWR0aDtcbiAgICAgICAgICAgIHRoaXMudG1wT3V0TGluZS5jb2xvciA9IGAjJHt0aGlzLm91dGxpbmVDb2xvci50b0hFWCgpfWA7XG4gICAgICAgIH1cbiAgICAgICAgLy/mjaLooYxcbiAgICAgICAgaWYgKHN0eWxlT2JqLmhhc093blByb3BlcnR5KCduZXdsaW5lJykpIHtcbiAgICAgICAgICAgIHJlc3VsdC5uZXdMaW5lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvL+WbvueJh8K35Zu+6ZuGXG4gICAgICAgIGlmIChzdHlsZU9iai5pc0ltYWdlKSB7XG4gICAgICAgICAgICByZXN1bHQuaW1nQXRsYXMgPSBzdHlsZU9iai5zcmM7XG4gICAgICAgIH1cbiAgICAgICAgLy/lm77niYfCt+aWh+S7tlxuICAgICAgICBpZiAoc3R5bGVPYmouaXNJbWdGaWxlKSB7XG4gICAgICAgICAgICByZXN1bHQuaW1nRmlsZSA9IHN0eWxlT2JqLnNyYztcbiAgICAgICAgfVxuICAgICAgICAvL+mihOWItuS9k1xuICAgICAgICBpZiAoc3R5bGVPYmouaXNQcmVmYWIpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wcmVmYWIgPSBzdHlsZU9iai5pZHg7XG4gICAgICAgIH1cbiAgICAgICAgLy/kuovku7ZcbiAgICAgICAgaWYgKHN0eWxlT2JqLmV2ZW50KSB7XG4gICAgICAgICAgICByZXN1bHQuZXZlbnQgPSB7IGNsaWNrOiBzdHlsZU9iai5ldmVudC5jbGljaywgcGFyYW06IHN0eWxlT2JqLmV2ZW50LnBhcmFtIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHguZm9udCA9IGAke3RoaXMuYm9sZH0gJHt0aGlzLnRtcFNaRm9udH1weCAke3RoaXMudG1wRm9udEZtbH1gO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8v5re75Yqg5Zu+54mH5paH5Lu2XG4gICAgcHJpdmF0ZSBhZGRJbWFnZUJ5RmlsZSh1cmw6IHN0cmluZywgZXZlbnQ6IFJpY2hFdmVudCkge1xuICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKCdpbWFnZScpO1xuICAgICAgICBub2RlLmFuY2hvclggPSAwO1xuICAgICAgICBub2RlLmFuY2hvclkgPSAwO1xuICAgICAgICBub2RlLndpZHRoID0gMTtcbiAgICAgICAgbm9kZS5oZWlnaHQgPSAxO1xuICAgICAgICBpZiAoQ0NfRURJVE9SKSB7XG4gICAgICAgICAgICBub2RlLndpZHRoID0gdGhpcy5yb3dIO1xuICAgICAgICAgICAgbm9kZS5oZWlnaHQgPSB0aGlzLnJvd0g7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgc3B0ID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmR5bWljRnJhbWUgJiYgdGhpcy5keW1pY0ZyYW1lLmhhcyh1cmwpKSB7XG4gICAgICAgICAgICAgICAgc3B0LnNwcml0ZUZyYW1lID0gdGhpcy5keW1pY0ZyYW1lLmdldCh1cmwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlLndpZHRoID0gdGhpcy5yb3dIO1xuICAgICAgICAgICAgICAgIG5vZGUuaGVpZ2h0ID0gdGhpcy5yb3dIO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5zY2FsZSA9IHRoaXMucm93SCAvIG5vZGUuaGVpZ2h0O1xuICAgICAgICAgICAgaWYgKHRoaXMubWF4V2lkdGggPiAwICYmIG5vZGUud2lkdGggKiBub2RlLnNjYWxlID4gdGhpcy5tYXhXaWR0aCkge1xuICAgICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSB0aGlzLm1heFdpZHRoIC8gbm9kZS53aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgd2lkdGggPSBub2RlLndpZHRoICogbm9kZS5zY2FsZTtcbiAgICAgICAgaWYgKHRoaXMubWF4V2lkdGggPiAwICYmIHRoaXMucm93VyArIHdpZHRoID4gdGhpcy5tYXhXaWR0aCkge1xuICAgICAgICAgICAgbm9kZS54ID0gMDtcbiAgICAgICAgICAgIHRoaXMuYWRkUm93KCk7XG4gICAgICAgICAgICB0aGlzLnJvd1cgKz0gd2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLnggPSB0aGlzLnJvd1c7XG4gICAgICAgICAgICB0aGlzLnJvd1cgKz0gd2lkdGg7XG4gICAgICAgICAgICB0aGlzLmNlbGxYID0gdGhpcy5yb3dXO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuc2V0UGFyZW50KHRoaXMucGFnZU5vZGUpO1xuICAgICAgICBub2RlLnkgPSAtdGhpcy5jZWxsWTtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICBsZXQgcmVjdCA9IGNjLnJlY3Qobm9kZS54LCBub2RlLnksIHdpZHRoLCB0aGlzLnRtcFNaRm9udCk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50UmVjdChyZWN0LCBldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+a3u+WKoOWbvumbhuWbvueJh1xuICAgIHByaXZhdGUgYWRkSW1hZ2VCeUF0bGFzKHVybDogc3RyaW5nLCBldmVudDogUmljaEV2ZW50KSB7XG4gICAgICAgIGxldCBub2RlID0gbmV3IGNjLk5vZGUoJ2ltYWdlJyk7XG4gICAgICAgIG5vZGUuYW5jaG9yWCA9IDA7XG4gICAgICAgIG5vZGUuYW5jaG9yWSA9IDA7XG4gICAgICAgIG5vZGUud2lkdGggPSAxO1xuICAgICAgICBub2RlLmhlaWdodCA9IDE7XG4gICAgICAgIGlmIChDQ19FRElUT1IpIHtcbiAgICAgICAgICAgIG5vZGUud2lkdGggPSB0aGlzLnJvd0g7XG4gICAgICAgICAgICBub2RlLmhlaWdodCA9IHRoaXMucm93SDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzcHQgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3BBdGxhcykge1xuICAgICAgICAgICAgICAgIHNwdC5zcHJpdGVGcmFtZSA9IHRoaXMuc3BBdGxhcy5nZXRTcHJpdGVGcmFtZSh1cmwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlLndpZHRoID0gdGhpcy5yb3dIO1xuICAgICAgICAgICAgICAgIG5vZGUuaGVpZ2h0ID0gdGhpcy5yb3dIO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5zY2FsZSA9IHRoaXMucm93SCAvIG5vZGUuaGVpZ2h0O1xuICAgICAgICAgICAgaWYgKHRoaXMubWF4V2lkdGggPj0gMCAmJiBub2RlLndpZHRoICogbm9kZS5zY2FsZSA+IHRoaXMubWF4V2lkdGgpIHtcbiAgICAgICAgICAgICAgICBub2RlLnNjYWxlID0gdGhpcy5tYXhXaWR0aCAvIG5vZGUud2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHdpZHRoID0gbm9kZS53aWR0aCAqIG5vZGUuc2NhbGU7XG4gICAgICAgIGlmICh0aGlzLm1heFdpZHRoID4gMCAmJiB0aGlzLnJvd1cgKyB3aWR0aCA+IHRoaXMubWF4V2lkdGgpIHtcbiAgICAgICAgICAgIG5vZGUueCA9IDA7XG4gICAgICAgICAgICB0aGlzLmFkZFJvdygpO1xuICAgICAgICAgICAgdGhpcy5yb3dXICs9IHdpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZS54ID0gdGhpcy5yb3dXO1xuICAgICAgICAgICAgdGhpcy5yb3dXICs9IHdpZHRoO1xuICAgICAgICAgICAgdGhpcy5jZWxsWCA9IHRoaXMucm93VztcbiAgICAgICAgfVxuICAgICAgICBub2RlLnNldFBhcmVudCh0aGlzLnBhZ2VOb2RlKTtcbiAgICAgICAgbm9kZS55ID0gLXRoaXMuY2VsbFk7XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgbGV0IHJlY3QgPSBjYy5yZWN0KG5vZGUueCwgbm9kZS55LCB3aWR0aCwgdGhpcy50bXBTWkZvbnQpO1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudFJlY3QocmVjdCwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvL+a3u+WKoOmihOWItuS9k1xuICAgIHByaXZhdGUgYWRkUHJlZmFiKGlkeDogbnVtYmVyLCBldmVudDogUmljaEV2ZW50KSB7XG4gICAgICAgIGlmIChpZHggPCAwIHx8IGlkeCA+IHRoaXMucHJlZmFicy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5vZGUgPSBudWxsO1xuICAgICAgICBsZXQgZHN0UHJlZmFiID0gdGhpcy5wcmVmYWJzW2lkeF07XG4gICAgICAgIGlmIChDQ19FRElUT1IpIHtcbiAgICAgICAgICAgIG5vZGUgPSBjYy5pbnN0YW50aWF0ZShkc3RQcmVmYWIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZSA9IGMyZi5yZXMuaW5zdGFudGlhdGUoZHN0UHJlZmFiLCB0aGlzLm5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuc2NhbGUgPSB0aGlzLnJvd0ggLyBub2RlLmhlaWdodDtcbiAgICAgICAgaWYgKG5vZGUud2lkdGggKiBub2RlLnNjYWxlID4gdGhpcy5ub2RlLndpZHRoKSB7XG4gICAgICAgICAgICBub2RlLnNjYWxlID0gdGhpcy5ub2RlLndpZHRoIC8gbm9kZS53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgd2lkdGggPSBub2RlLndpZHRoICogbm9kZS5zY2FsZTtcbiAgICAgICAgbGV0IGhlaWdodCA9IG5vZGUuaGVpZ2h0ICogbm9kZS5zY2FsZTtcbiAgICAgICAgbGV0IHJlY3RYID0gMDtcbiAgICAgICAgaWYgKHRoaXMucm93VyArIHdpZHRoID4gdGhpcy5ub2RlLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFJvdygpO1xuICAgICAgICAgICAgdGhpcy5yb3dXICs9IHdpZHRoO1xuICAgICAgICAgICAgLy/mjaLooYzmiJDlip/miY3kuLowXG4gICAgICAgICAgICByZWN0WCA9IHRoaXMucm93VyA9PSB3aWR0aCA/IDAgOiB0aGlzLnJvd1c7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWN0WCA9IHRoaXMucm93VztcbiAgICAgICAgICAgIHRoaXMucm93VyArPSB3aWR0aDtcbiAgICAgICAgICAgIHRoaXMuY2VsbFggPSB0aGlzLnJvd1c7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5zZXRQYXJlbnQodGhpcy5wYWdlTm9kZSk7XG4gICAgICAgIG5vZGUueCA9IHJlY3RYICsgd2lkdGggKiBub2RlLmFuY2hvclg7XG4gICAgICAgIG5vZGUueSA9IGhlaWdodCAqIG5vZGUuYW5jaG9yWSAtIHRoaXMuY2VsbFk7XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgbGV0IHJlY3QgPSBjYy5yZWN0KHJlY3RYLCAtdGhpcy5jZWxsWSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50UmVjdChyZWN0LCBldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHByZWxvYWRJbWFnZShhcnJUZXh0OiBhbnlbXSwgZW5kQ2I6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGxldCB1cmxzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBvbmUgb2YgYXJyVGV4dCkge1xuICAgICAgICAgICAgaWYgKCFvbmUuc3R5bGUpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghb25lLnN0eWxlLmlzSW1nRmlsZSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob25lLnN0eWxlLnNyYy5sZW5ndGggPiAwICYmIHVybHMuaW5kZXhPZihvbmUuc3R5bGUuc3JjKSA8IDApIHtcbiAgICAgICAgICAgICAgICB1cmxzLnB1c2gob25lLnN0eWxlLnNyYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVybHMubGVuZ3RoIDw9IDAgfHwgQ0NfRURJVE9SKSB7XG4gICAgICAgICAgICBlbmRDYiAmJiBlbmRDYigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmR5bWljRnJhbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmR5bWljRnJhbWUgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY21wbENudCA9IDA7XG4gICAgICAgICAgICBsZXQgY2hlY2tDbXBsID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNtcGxDbnQrKztcbiAgICAgICAgICAgICAgICBpZiAoY21wbENudCA+PSB1cmxzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBlbmRDYiAmJiBlbmRDYigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IG9uZSBvZiB1cmxzKSB7XG4gICAgICAgICAgICAgICAgYzJmLnJlcy5sb2FkT25lKG9uZSwgY2MuU3ByaXRlRnJhbWUpLnRoZW4oKHJlczogY2MuU3ByaXRlRnJhbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5keW1pY0ZyYW1lLnNldChvbmUsIHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrQ21wbCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVN0cmluZyh0ZXh0QXJyYXk6IGFueVtdKSB7XG4gICAgICAgIC8qKiDljZXlrZfnrKblrr3luqYgKi9cbiAgICAgICAgbGV0IG9uZUNoYXJXID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRleHRBcnJheS5sZW5ndGg7IGkgPD0gbGVuOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChpID09PSBsZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VUb05vZGUoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvbmUgPSB0ZXh0QXJyYXlbaV07XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ViTGVuID0gb25lLnRleHQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIC8v5qC35byP6LCD5pW0XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMudXBkYXRlVGV4dFN0eWxlKG9uZS5zdHlsZSk7XG4gICAgICAgICAgICAgICAgaWYgKHN1YkxlbiA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8v5o2i6KGMXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0Lm5ld0xpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkUm93KHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8v5Zu+54mHwrfmlofku7ZcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuaW1nRmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRJbWFnZUJ5RmlsZShyZXN1bHQuaW1nRmlsZSwgcmVzdWx0LmV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL+WbvueJh8K35Zu+6ZuGXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmltZ0F0bGFzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEltYWdlQnlBdGxhcyhyZXN1bHQuaW1nQXRsYXMsIHJlc3VsdC5ldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy/pooTliLbkvZNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuaGFzT3duUHJvcGVydHkoJ3ByZWZhYicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFByZWZhYihyZXN1bHQucHJlZmFiLCByZXN1bHQuZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXZlbnQgPSByZXN1bHQgPyByZXN1bHQuZXZlbnQgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAvL+aWh+acrFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbGxYID0gdGhpcy5yb3dXO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhcnRJRCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8PSBzdWJMZW47ICsraWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWR4ID49IHN1Ykxlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1RvUGFnZShvbmUudGV4dC5zdWJzdHJpbmcoc3RhcnRJRCksIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb25lQ2hhciA9IG9uZS50ZXh0W2lkeF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25lQ2hhclcgPSB0aGlzLmN0eC5tZWFzdXJlVGV4dChvbmVDaGFyKS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+aNouihjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvd1cgKyBvbmVDaGFyVyA+IE1hdGgubWF4KHRoaXMubm9kZS53aWR0aCwgdGhpcy5tYXhXaWR0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3VG9QYWdlKG9uZS50ZXh0LnN1YnN0cmluZyhzdGFydElELCBpZHgpLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0SUQgPSBpZHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkUm93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm93VyArPSBvbmVDaGFyVztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvd1cgKz0gb25lQ2hhclc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVQYWdlKCkge1xuICAgICAgICB0aGlzLnBhZ2VOb2RlID0gbmV3IGNjLk5vZGUoYHBhZ2VfJHt0aGlzLm5vZGUuY2hpbGRyZW5Db3VudH1gKTtcbiAgICAgICAgdGhpcy5wYWdlTm9kZVsnX29iakZsYWdzJ10gfD0gY2MuT2JqZWN0WydGbGFncyddLkhpZGVJbkhpZXJhcmNoeTtcbiAgICAgICAgdGhpcy5wYWdlTm9kZVsnX29iakZsYWdzJ10gfD0gY2MuT2JqZWN0WydGbGFncyddLkxvY2tlZEluRWRpdG9yO1xuXG4gICAgICAgIGNvbnN0IGZvbnQgPSB0aGlzLmN0eCA/IHRoaXMuY3R4LmZvbnQgOiBgJHt0aGlzLmJvbGR9ICR7dGhpcy5mb250U2l6ZX1weCAke3RoaXMudG1wRm9udEZtbH1gO1xuICAgICAgICBjb25zdCBmaWxsU3R5bGUgPSB0aGlzLmN0eCA/IHRoaXMuY3R4LmZpbGxTdHlsZSA6ICcjJyArIHRoaXMubm9kZS5jb2xvci50b0hFWCgpO1xuXG4gICAgICAgIHRoaXMuY3ZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jdnMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5jdnMud2lkdGggPSB0aGlzLm5vZGUud2lkdGg7XG4gICAgICAgIHRoaXMuY3ZzLmhlaWdodCA9IHRoaXMubm9kZS5oZWlnaHQgLSAodGhpcy5ub2RlLmhlaWdodCAlIHRoaXMucm93SCk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBmb250O1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHRoaXMub3V0bGluZVdpZHRoO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjJyArIHRoaXMub3V0bGluZUNvbG9yLnRvSEVYKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmF3VG9QYWdlKHN0cjogc3RyaW5nLCBldmVudDogUmljaEV2ZW50KSB7XG4gICAgICAgIGlmIChzdHIgPT09ICcnKSByZXR1cm47XG4gICAgICAgIGxldCB4ID0gdGhpcy5jZWxsWDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLmNlbGxZIC0gdGhpcy5mb250U2l6ZSAqIDAuMTUgLSB0aGlzLnNwYWNpbmdZICogMC41O1xuXG4gICAgICAgIGNvbnN0IGN1ck91dGxpbmVXaWR0aCA9IHRoaXMudG1wT3V0TGluZS53aWR0aDtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gY3VyT3V0bGluZVdpZHRoICogMjtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnRtcE91dExpbmUuY29sb3I7XG4gICAgICAgIGlmIChjdXJPdXRsaW5lV2lkdGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VUZXh0KHN0ciwgeCwgeSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoc3RyLCB4LCB5KTtcblxuICAgICAgICBjb25zdCByZWFsV2lkdGggPSB0aGlzLmN0eC5tZWFzdXJlVGV4dChzdHIpLndpZHRoO1xuICAgICAgICAvL+a3u+WKoOS6i+S7tuWMuuWfn1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGxldCByZWN0ID0gY2MucmVjdCh4LCAtdGhpcy5jZWxsWSwgcmVhbFdpZHRoLCB0aGlzLnRtcFNaRm9udCk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50UmVjdChyZWN0LCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy/mmL7npLrlpJbmoYbvvIzosIPor5XnlKhcbiAgICAgICAgLy90aGlzLmN0eC5zdHJva2VSZWN0KHgsIHRoaXMuY2VsbFkgLSB0aGlzLnJvd0gsIHJlYWxXaWR0aCwgdGhpcy5yb3dIKTtcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0eWxlKSB7XG4gICAgICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSBNYXRoLm1heCh0aGlzLmZvbnRTaXplID4+IDMsIHRoaXMub3V0bGluZVdpZHRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oeCwgeSAtIHRoaXMuZm9udFNpemUgLyAyICsgdGhpcy5jdHgubGluZVdpZHRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oeCArIHJlYWxXaWR0aCwgeSAtIHRoaXMuZm9udFNpemUgLyAyICsgdGhpcy5jdHgubGluZVdpZHRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSBjdXJPdXRsaW5lV2lkdGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd1JzpcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSBNYXRoLm1heCh0aGlzLmZvbnRTaXplID4+IDMsIHRoaXMub3V0bGluZVdpZHRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY3R4LmZpbGxTdHlsZTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oeCwgeSArIHRoaXMuY3R4LmxpbmVXaWR0aCAqIDIpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh4ICsgcmVhbFdpZHRoLCB5ICsgdGhpcy5jdHgubGluZVdpZHRoICogMik7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gY3VyT3V0bGluZVdpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy50bXBPdXRMaW5lLmNvbG9yO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwYWdlVG9Ob2RlKCkge1xuICAgICAgICBpZiAoIXRoaXMuY3ZzIHx8ICF0aGlzLnBhZ2VOb2RlKSB0aHJvdyBuZXcgRXJyb3IoJ2N2cyBvciBwYWdlTm9kZSBpcyBudWxsJyk7XG4gICAgICAgIC8vIOS/ruato+mrmOW6plxuICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gdGhpcy5jZWxsWVxuICAgICAgICAvLyDkv67mraPlrr3luqZcbiAgICAgICAgY29uc3Qgcm93Q291bnQgPSB0aGlzLmNlbGxZIC8gdGhpcy5yb3dIO1xuICAgICAgICB0aGlzLm5vZGUud2lkdGggPSByb3dDb3VudCA+IDEgPyB0aGlzLm1heFdpZHRoIDogdGhpcy5yb3dXXG5cbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBjYy5UZXh0dXJlMkQoKTtcbiAgICAgICAgdGV4dHVyZS5pbml0V2l0aEVsZW1lbnQodGhpcy5jdnMpO1xuICAgICAgICBsZXQgc3ByaXRlID0gdGhpcy5wYWdlTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxuICAgICAgICBpZiAoIXNwcml0ZSkge1xuICAgICAgICAgICAgc3ByaXRlID0gdGhpcy5wYWdlTm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKVxuICAgICAgICB9XG4gICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlLCBjYy5yZWN0KDAsIDAsIHRoaXMuY3ZzLndpZHRoLCB0aGlzLmN2cy5oZWlnaHQpKTtcbiAgICAgICAgdGhpcy5wYWdlTm9kZS53aWR0aCA9IHRoaXMubm9kZS53aWR0aDtcbiAgICAgICAgdGhpcy5wYWdlTm9kZS5oZWlnaHQgPSB0aGlzLm5vZGUuaGVpZ2h0O1xuICAgICAgICB0aGlzLnBhZ2VOb2RlLmFuY2hvclggPSAwO1xuICAgICAgICB0aGlzLnBhZ2VOb2RlLmFuY2hvclkgPSAxO1xuICAgICAgICB0aGlzLnBhZ2VOb2RlLnggPSAtdGhpcy5ub2RlLndpZHRoICogdGhpcy5ub2RlLmFuY2hvclhcbiAgICAgICAgdGhpcy5wYWdlTm9kZS55ID0gdGhpcy5ub2RlLmhlaWdodCAqICgxIC0gdGhpcy5ub2RlLmFuY2hvclkpXG4gICAgICAgIHRoaXMucGFnZU5vZGUuc2V0UGFyZW50KHRoaXMubm9kZSk7XG5cbiAgICAgICAgdGhpcy5wYWdlTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25QYWdlTm9kZVRvdWNoRW5kLCB0aGlzKVxuICAgIH1cblxuICAgIHByaXZhdGUgYWRkUm93KGlzRm9yY2U6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnJvd0ggPSB0aGlzLmZvbnRTaXplICsgdGhpcy5zcGFjaW5nWTtcbiAgICAgICAgaWYgKGlzRm9yY2UgfHwgdGhpcy5tYXhXaWR0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2VsbFggPSAwO1xuICAgICAgICAgICAgdGhpcy5yb3dXID0gMDtcbiAgICAgICAgICAgIHRoaXMuY2VsbFkgKz0gdGhpcy5yb3dIXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+eCueWHu+S6i+S7tlxuICAgIHByaXZhdGUgb25QYWdlTm9kZVRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIGlmICghdGhpcy5ldmVudFJlY3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3VyUG9zVyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XG4gICAgICAgIGxldCBjdXJQb3NMID0gdGhpcy5wYWdlTm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjdXJQb3NXKTtcbiAgICAgICAgbGV0IGFyckV2dHM6IFJpY2hFdmVudFtdID0gW107XG4gICAgICAgIHRoaXMuZXZlbnRSZWN0LmZvckVhY2goKHYsIGspID0+IHtcbiAgICAgICAgICAgIGlmIChrLmNvbnRhaW5zKGN1clBvc0wpKSB7XG4gICAgICAgICAgICAgICAgYXJyRXZ0cy5wdXNoKHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBpZiAoYXJyRXZ0cy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IG9uZUV2dCBvZiBhcnJFdnRzKSB7XG4gICAgICAgICAgICBjYy5sb2coJ1JpY2hUZXh0UHJvIGNsaWNrOicsIG9uZUV2dC5jbGljaywgb25lRXZ0LnBhcmFtKVxuICAgICAgICAgICAgZm9yIChsZXQgb25lSGFuZGwgb2YgdGhpcy5ldmVudEhhbmRsZXJzKSB7XG4gICAgICAgICAgICAgICAgb25lSGFuZGwuZW1pdChbb25lRXZ0LmNsaWNrLCBvbmVFdnQucGFyYW1dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDlv6vmjbforr7nva7kuovku7YgKi9cbiAgICBwdWJsaWMgcXVpY2tTZXRDbGlja0huYWRsZXIob3dlcjogY2MuQ29tcG9uZW50LCBoYW5kbGVyTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBoYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgaGFuZGxlci50YXJnZXQgPSBvd2VyLm5vZGU7XG4gICAgICAgIGhhbmRsZXIuY29tcG9uZW50ID0gYzJmLnV0aWxzLnZpZXcuZ2V0Q29tcG9uZW50TmFtZShvd2VyKTtcbiAgICAgICAgaGFuZGxlci5oYW5kbGVyID0gaGFuZGxlck5hbWU7XG4gICAgICAgIGhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gXCJcIjtcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzID0gW2hhbmRsZXJdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5ub2RlLnRhcmdldE9mZih0aGlzKTtcbiAgICAgICAgdGhpcy5jdnMgPSBudWxsO1xuICAgICAgICB0aGlzLmN0eCA9IG51bGw7XG4gICAgICAgIHRoaXMucGFnZU5vZGUgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5keW1pY0ZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmR5bWljRnJhbWUuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuZHltaWNGcmFtZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZXZlbnRSZWN0KSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50UmVjdC5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy5ldmVudFJlY3QgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==