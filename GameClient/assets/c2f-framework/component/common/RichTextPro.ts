/** RichTextPro在cc.RichText的基础上增加了更多格式 
 * 新增直接使用图片：<iFile src='mainPack:/xx/xx/xx' click='handler' />
 * 新增预制体的使用：<prefab idx='0' click='handler' />
*/

const HtmlTextParser = require('htmlTextParser');
const htmlParser = new HtmlTextParser();


interface RichEvent {
    click: string;
    param: string
}
interface SytleResult {
    newLine?: boolean,
    imgAtlas?: string,
    imgFile?: string,
    prefab?: number,
    event?: RichEvent,
}

const { ccclass, property, executeInEditMode, menu } = cc._decorator;
@ccclass
@executeInEditMode
@menu('c2f/controls/RichTextPro')
export default class RichTextPro extends cc.Component {

    @property
    private _string: string = '';
    @property({ multiline: true, tooltip: '文本内容' })
    get string() { return this._string; }
    set string(value: string) {
        this._string = value;
        this.updateContent();
    }

    @property
    private _outlineWidth: number = 0;
    @property({ min: 0, tooltip: '描边宽度, 为0时表示无描边' })
    private get outlineWidth() { return this._outlineWidth };
    private set outlineWidth(value: number) {
        this._outlineWidth = value;
        this.updateContent();
    }

    @property
    private _outlineColor: cc.Color = new cc.Color(0, 0, 0);
    @property({ tooltip: '描边颜色', visible() { return this.outlineWidth > 0 } })
    private get outlineColor() { return this._outlineColor };
    private set outlineColor(value: cc.Color) {
        this._outlineColor = value;
        this.updateContent();
    }

    @property
    private _fontFamily: string = 'Arial';
    @property({ tooltip: '字体名称, 游戏字体可用：fzcsjt_LABEL' })
    private get fontFamily() { return this._fontFamily };
    private set fontFamily(value: string) {
        this._fontFamily = value;
        this.updateContent();
    }

    @property
    private _fontSize: number = 50;
    @property({ min: 4, tooltip: '字体大小' })
    private get fontSize() { return this._fontSize };
    private set fontSize(value: number) {
        this._fontSize = value;
        this.updateContent();
    }

    @property
    private _spacingY: number = 10;
    @property({ tooltip: '字体行间距' })
    private get spacingY() { return this._spacingY };
    private set spacingY(value: number) {
        this._spacingY = value;
        this.updateContent();
    }

    @property
    private _maxWidth: number = 100;
    @property({ tooltip: '富文本最大宽度' })
    private get maxWidth() { return this._maxWidth };
    private set maxWidth(value: number) {
        this._maxWidth = value;
        this.updateContent();
    }

    @property({ type: cc.Prefab, tooltip: '嵌入预制体' })
    private _prefabs: cc.Prefab[] = [];
    @property({ type: cc.Prefab, tooltip: '嵌入预制体' })
    private get prefabs() { return this._prefabs };
    private set prefabs(value: cc.Prefab[]) {
        this._prefabs = value;
        this.updateContent();
    }

    @property({ type: cc.Component.EventHandler, tooltip: '文本事件' })
    private eventHandlers: cc.Component.EventHandler[] = [];

    @property({ type: cc.SpriteAtlas, tooltip: '图集' })
    private spAtlas: cc.SpriteAtlas = null;


    public cvs: HTMLCanvasElement = null;
    private ctx: CanvasRenderingContext2D = null;
    private cellX: number = 0;
    private cellY: number = 0;
    private rowW: number = 0;
    private rowH: number = 0;
    private pageNode: cc.Node = null;

    /** 临时参数 */
    private bold: string = '';
    private style: string = '0';
    private tmpFontFml: string = '';
    private tmpSZFont: number = 1;
    private tmpOutLine: { width: number, color: string } = null;
    private dymicFrame: Map<string, cc.SpriteFrame> = null;
    /** 点击区域 */
    private eventRect: Map<cc.Rect, RichEvent> = null;

    protected start() {
        this.updateContent();
        this.node.on(cc.Node.EventType.SIZE_CHANGED, this.updateContent, this);
        this.node.on(cc.Node.EventType.ANCHOR_CHANGED, this.updateContent, this);
    }

    private addEventRect(rect: cc.Rect, event: RichEvent) {
        if (!this.eventRect) {
            this.eventRect = new Map();
        }
        this.eventRect.set(rect, event);
    }

    private updateContent() {
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
        this.tmpOutLine = { width: this.outlineWidth, color: `#${this.outlineColor.toHEX()}` };
        if (this.eventRect) {
            this.eventRect.clear();
        }
        if (this.dymicFrame) {
            this.dymicFrame.clear()
        }
        this.bold = '';
        this.style = '0';
        this.tmpFontFml = this.fontFamily;
        this.createPage();
        if (!this.pageNode) throw new Error("Can't find page node")
        if (!this.ctx) throw new Error("Can't find canvas");

        let textArray = htmlParser.parse(this.string);
        this.preloadImage(textArray, this.updateString.bind(this, textArray));
    }

    private updateTextStyle(styleObj: any) {
        if (!styleObj) {
            this.ctx.fillStyle = '#' + this.node.color.toHEX();
            this.tmpSZFont = this.fontSize;
            this.bold = '';
            this.style = '';
            this.tmpOutLine.width = this.outlineWidth;
            this.tmpOutLine.color = `#${this.outlineColor.toHEX()}`;
            this.ctx.font = `${this.bold} ${this.tmpSZFont}px ${this.tmpFontFml}`;
            return null;
        }
        let result: SytleResult = {};
        //颜色
        if (styleObj.color) {
            this.ctx.fillStyle = styleObj.color;
        } else {
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
        } else {
            this.bold = '';
        }
        //下划线·删除线
        if (styleObj.hasOwnProperty('underline')) {
            this.style = 'u';
        } else {
            if (styleObj.hasOwnProperty('delete')) {
                this.style = 'd';
            } else {
                this.style = '';
            }
        }
        //描边
        if (styleObj.outline) {
            this.tmpOutLine.width = styleObj.outline.width;
            this.tmpOutLine.color = styleObj.outline.color;
        } else {
            this.tmpOutLine.width = this.outlineWidth;
            this.tmpOutLine.color = `#${this.outlineColor.toHEX()}`;
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
        this.ctx.font = `${this.bold} ${this.tmpSZFont}px ${this.tmpFontFml}`;
        return result;
    }

    //添加图片文件
    private addImageByFile(url: string, event: RichEvent) {
        let node = new cc.Node('image');
        node.anchorX = 0;
        node.anchorY = 0;
        node.width = 1;
        node.height = 1;
        if (CC_EDITOR) {
            node.width = this.rowH;
            node.height = this.rowH;
        } else {
            let spt = node.addComponent(cc.Sprite);
            if (this.dymicFrame && this.dymicFrame.has(url)) {
                spt.spriteFrame = this.dymicFrame.get(url);
            } else {
                node.width = this.rowH;
                node.height = this.rowH;
            }
            node.scale = this.rowH / node.height;
            if (this.maxWidth > 0 && node.width * node.scale > this.maxWidth) {
                node.scale = this.maxWidth / node.width;
            }
        }
        let width = node.width * node.scale;
        if (this.maxWidth > 0 && this.rowW + width > this.maxWidth) {
            node.x = 0;
            this.addRow();
            this.rowW += width;
        } else {
            node.x = this.rowW;
            this.rowW += width;
            this.cellX = this.rowW;
        }
        node.setParent(this.pageNode);
        node.y = -this.cellY;
        if (event) {
            let rect = cc.rect(node.x, node.y, width, this.tmpSZFont);
            this.addEventRect(rect, event);
        }
    }

    //添加图集图片
    private addImageByAtlas(url: string, event: RichEvent) {
        let node = new cc.Node('image');
        node.anchorX = 0;
        node.anchorY = 0;
        node.width = 1;
        node.height = 1;
        if (CC_EDITOR) {
            node.width = this.rowH;
            node.height = this.rowH;
        } else {
            let spt = node.addComponent(cc.Sprite);
            if (this.spAtlas) {
                spt.spriteFrame = this.spAtlas.getSpriteFrame(url);
            } else {
                node.width = this.rowH;
                node.height = this.rowH;
            }
            node.scale = this.rowH / node.height;
            if (this.maxWidth >= 0 && node.width * node.scale > this.maxWidth) {
                node.scale = this.maxWidth / node.width;
            }
        }
        let width = node.width * node.scale;
        if (this.maxWidth > 0 && this.rowW + width > this.maxWidth) {
            node.x = 0;
            this.addRow();
            this.rowW += width;
        } else {
            node.x = this.rowW;
            this.rowW += width;
            this.cellX = this.rowW;
        }
        node.setParent(this.pageNode);
        node.y = -this.cellY;
        if (event) {
            let rect = cc.rect(node.x, node.y, width, this.tmpSZFont);
            this.addEventRect(rect, event);
        }
    }


    //添加预制体
    private addPrefab(idx: number, event: RichEvent) {
        if (idx < 0 || idx > this.prefabs.length - 1) {
            return;
        }
        let node = null;
        let dstPrefab = this.prefabs[idx];
        if (CC_EDITOR) {
            node = cc.instantiate(dstPrefab);
        } else {
            node = c2f.res.instantiate(dstPrefab, this.node);
        }
        node.scale = this.rowH / node.height;
        if (node.width * node.scale > this.node.width) {
            node.scale = this.node.width / node.width;
        }
        let width = node.width * node.scale;
        let height = node.height * node.scale;
        let rectX = 0;
        if (this.rowW + width > this.node.width) {
            this.addRow();
            this.rowW += width;
            //换行成功才为0
            rectX = this.rowW == width ? 0 : this.rowW;
        } else {
            rectX = this.rowW;
            this.rowW += width;
            this.cellX = this.rowW;
        }
        node.setParent(this.pageNode);
        node.x = rectX + width * node.anchorX;
        node.y = height * node.anchorY - this.cellY;
        if (event) {
            let rect = cc.rect(rectX, -this.cellY, width, height);
            this.addEventRect(rect, event);
        }
    }

    private preloadImage(arrText: any[], endCb: Function) {
        let urls: string[] = [];
        for (let one of arrText) {
            if (!one.style) {
                continue;
            }
            if (!one.style.isImgFile) {
                continue
            }
            if (one.style.src.length > 0 && urls.indexOf(one.style.src) < 0) {
                urls.push(one.style.src);
            }
        }
        if (urls.length <= 0 || CC_EDITOR) {
            endCb && endCb();
        } else {
            if (!this.dymicFrame) {
                this.dymicFrame = new Map();
            }
            let cmplCnt = 0;
            let checkCmpl = () => {
                cmplCnt++;
                if (cmplCnt >= urls.length) {
                    endCb && endCb();
                }
            }
            for (let one of urls) {
                c2f.res.loadOne(one, cc.SpriteFrame).then((res: cc.SpriteFrame) => {
                    this.dymicFrame.set(one, res);
                    checkCmpl();
                })
            }
        }
    }

    private updateString(textArray: any[]) {
        /** 单字符宽度 */
        let oneCharW = 0;
        for (let i = 0, len = textArray.length; i <= len; ++i) {
            if (i === len) {
                this.pageToNode()
            } else {
                const one = textArray[i];
                const subLen = one.text.length;
                //样式调整
                let result = this.updateTextStyle(one.style);
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
                        this.addPrefab(result.prefab, result.event)
                    }
                } else {
                    let event = result ? result.event : null;
                    //文本
                    this.cellX = this.rowW;
                    let startID = 0;
                    for (let idx = 0; idx <= subLen; ++idx) {
                        if (idx >= subLen) {
                            this.drawToPage(one.text.substring(startID), event);
                        } else {
                            const oneChar = one.text[idx];
                            oneCharW = this.ctx.measureText(oneChar).width;
                            //换行
                            if (this.rowW + oneCharW > Math.max(this.node.width, this.maxWidth)) {
                                this.drawToPage(one.text.substring(startID, idx), event);
                                startID = idx;
                                this.addRow();
                                this.rowW += oneCharW;
                            } else {
                                this.rowW += oneCharW;
                            }
                        }
                    }
                }
            }
        }
    }

    private createPage() {
        this.pageNode = new cc.Node(`page_${this.node.childrenCount}`);
        this.pageNode['_objFlags'] |= cc.Object['Flags'].HideInHierarchy;
        this.pageNode['_objFlags'] |= cc.Object['Flags'].LockedInEditor;

        const font = this.ctx ? this.ctx.font : `${this.bold} ${this.fontSize}px ${this.tmpFontFml}`;
        const fillStyle = this.ctx ? this.ctx.fillStyle : '#' + this.node.color.toHEX();

        this.cvs = document.createElement('canvas');
        this.ctx = this.cvs.getContext('2d');
        this.cvs.width = this.node.width;
        this.cvs.height = this.node.height - (this.node.height % this.rowH);
        this.ctx.font = font;
        this.ctx.fillStyle = fillStyle;
        this.ctx.lineWidth = this.outlineWidth;
        this.ctx.strokeStyle = '#' + this.outlineColor.toHEX();
    }

    private drawToPage(str: string, event: RichEvent) {
        if (str === '') return;
        let x = this.cellX;
        let y = this.cellY - this.fontSize * 0.15 - this.spacingY * 0.5;

        const curOutlineWidth = this.tmpOutLine.width;
        this.ctx.lineWidth = curOutlineWidth * 2;
        this.ctx.strokeStyle = this.tmpOutLine.color;
        if (curOutlineWidth > 0) {
            this.ctx.strokeText(str, x, y);
        }
        this.ctx.fillText(str, x, y);

        const realWidth = this.ctx.measureText(str).width;
        //添加事件区域
        if (event) {
            let rect = cc.rect(x, -this.cellY, realWidth, this.tmpSZFont);
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
    }

    private pageToNode() {
        if (!this.cvs || !this.pageNode) throw new Error('cvs or pageNode is null');
        // 修正高度
        this.node.height = this.cellY
        // 修正宽度
        const rowCount = this.cellY / this.rowH;
        this.node.width = rowCount > 1 ? this.maxWidth : this.rowW

        const texture = new cc.Texture2D();
        texture.initWithElement(this.cvs);
        let sprite = this.pageNode.getComponent(cc.Sprite)
        if (!sprite) {
            sprite = this.pageNode.addComponent(cc.Sprite)
        }
        sprite.spriteFrame = new cc.SpriteFrame(texture, cc.rect(0, 0, this.cvs.width, this.cvs.height));
        this.pageNode.width = this.node.width;
        this.pageNode.height = this.node.height;
        this.pageNode.anchorX = 0;
        this.pageNode.anchorY = 1;
        this.pageNode.x = -this.node.width * this.node.anchorX
        this.pageNode.y = this.node.height * (1 - this.node.anchorY)
        this.pageNode.setParent(this.node);

        this.pageNode.on(cc.Node.EventType.TOUCH_END, this.onPageNodeTouchEnd, this)
    }

    private addRow(isForce: boolean = false) {
        this.rowH = this.fontSize + this.spacingY;
        if (isForce || this.maxWidth > 0) {
            this.cellX = 0;
            this.rowW = 0;
            this.cellY += this.rowH
        }
    }

    //点击事件
    private onPageNodeTouchEnd(event: cc.Event.EventTouch) {
        if (!this.eventRect) {
            return;
        }
        let curPosW = event.getLocation();
        let curPosL = this.pageNode.convertToNodeSpaceAR(curPosW);
        let arrEvts: RichEvent[] = [];
        this.eventRect.forEach((v, k) => {
            if (k.contains(curPosL)) {
                arrEvts.push(v);
            }
        })
        if (arrEvts.length <= 0) {
            return;
        }
        for (let oneEvt of arrEvts) {
            cc.log('RichTextPro click:', oneEvt.click, oneEvt.param)
            for (let oneHandl of this.eventHandlers) {
                oneHandl.emit([oneEvt.click, oneEvt.param]);
            }
        }
    }

    /** 快捷设置事件 */
    public quickSetClickHnadler(ower: cc.Component, handlerName: string) {
        let handler = new cc.Component.EventHandler();
        handler.target = ower.node;
        handler.component = c2f.utils.view.getComponentName(ower);
        handler.handler = handlerName;
        handler.customEventData = "";
        this.eventHandlers = [handler];
    }

    protected onDestroy() {
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
    }
}