"use strict";
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