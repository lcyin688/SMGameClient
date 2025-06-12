interface FormatAmountOptions {
    /** 是否使用 KMBT 单位，默认是 */
    useUnit?: boolean;
    /** 使用 KMBT 单位，最低值，默认 10_000 */
    useUnitCond?: number;
    /** 保留小数位数, 默认使用全局配置 */
    decimalPlace?: number;
    /** 是否使用逗号，默认是 */
    useComma?: boolean;
}
let qrcode = require('qrcode');
// import * as qrcode from 'qrcode';
export default class CommonUtils {
    /**
     * 根据节点名称获取目标节点下的节点，如果遇见多个相同节点，返回第一个
     * @param target 查找根节点
     * @param childName 节点名称，使用/分割
     */
    public static findChildByName(target: cc.Node, childName: string): cc.Node {
        if (!(target instanceof cc.Node && target.isValid)) {
            c2f.log.warn('CommonUtils findChildByName target is invalid', childName);
            return null;
        }

        if (!(typeof childName == 'string' && childName.length > 0)) {
            c2f.log.warn('CommonUtils findChildByName childName is invalid', childName);
            return null;
        }

        let names = childName.split('/');
        let name = names[0];
        let result = target.getChildByName(name);
        if (result == null) {
            c2f.log.warn('CommonUtils findChildByName result is null, target:{0}, name:{1}', target.name, name);
            return null;
        } else {
            names = names.slice(1);
            if (names.length > 0) {
                result = this.findChildByName(result, names.join('/'));
            }
        }
        return result;
    }

    /**
     * 格式化金额
     * @param amount 金额，服务器值
     * @param useUnit 是否使用单位，默认是
     * @param decimalPlace 保留小数位数
     * @param useComma 是否使用逗号，默认是
     * @returns
     */
    public static formatAmount(amount: number, options: FormatAmountOptions): string;
    public static formatAmount(amount: number, useUnit?: boolean, decimalPlace?: number, useComma?: boolean, useUnitCond?: number): string;
    public static formatAmount(amount: number, ...args): string {
        if (typeof amount != 'number' && isNaN(amount)) {
            c2f.log.warn('CommonUtils formatAmount, params is invalid');
            return '';
        }

        let options: FormatAmountOptions = null;
        options = {
            useUnit: args[0],
            decimalPlace: args[1],
            useComma: args[2],
            useUnitCond: args[3],
        };

        options.useUnit ??= true;
        options.decimalPlace ??= 2;
        options.useComma ??= true;
        options.useUnitCond ??= 10_000;

        let sign = amount < 0 ? '-' : '';
        let amountAbs = Math.abs(amount);

        let amountReal = amountAbs;

        options.decimalPlace = typeof options.decimalPlace == 'number' && !isNaN(options.decimalPlace) ? Math.abs(options.decimalPlace) : 0;

        // 方法 Math.floor(1.005 * 1000) / 1000 / 1000 存在结果是 1.004 的问题，使用重写后的 toFixed 方法
        // NumberHelper 重写了 toFixed 方法，不再四舍五入，直接保留小数位数
        amountReal = parseFloat(amountReal.toFixed(options.decimalPlace));

        let unit = '';
        if (options.useUnit && amountReal >= options.useUnitCond) {
            let unitDivisor = 1;
            if (amountReal >= 1_000_000_000_000) {
                // 万亿
                unit = 'T';
                unitDivisor = 1_000_000_000_000;
            } else if (amountReal >= 1_000_000_000) {
                // 十亿
                unit = 'B';
                unitDivisor = 1_000_000_000;
            } else if (amountReal >= 1_000_000) {
                // 百万
                unit = 'M';
                unitDivisor = 1_000_000;
            } else if (amountReal >= options.useUnitCond) {
                // 千 大于1万才使用K单位
                unit = 'K';
                unitDivisor = 1_000;
            }

            // 缩写单位保留小数位数和国家无关，固定 3 位
            let decimalUnit = 3;
            amountReal = amountReal / unitDivisor;
            amountReal = parseFloat(amountReal.toFixed(decimalUnit));
        }

        let strNum = amountReal.toString();
        let str = sign + (options.useComma ? this.formatComma(strNum) : strNum) + unit;
        return str;
    }

    /**
     * 逗号分隔，一般都是每三位一个逗号，但是也有比较特殊的，比如印度货币第一个逗号出现在第三位数字后，此后的毎二位数字一个逗号
     * @param strNum 数字字符串
     * @param firstComma 第一个逗号的位置
     * @param otherComma 其他逗号的位置
     */
    public static formatComma(strNum: string, firstComma: number = 3, otherComma: number = 3): string {
        if (typeof strNum != 'string') {
            c2f.log.warn('CommonUtils formatComma, params is invalid');
            return '';
        }

        // 整数部分倒序
        let revArr = strNum.split('.')[0].split('').reverse();
        let tempArr = [];

        for (let i = 0; i < revArr.length; i++) {
            tempArr.push(revArr[i]);
            if (i != revArr.length - 1) {
                if (i < firstComma) {
                    if ((i + 1) % firstComma == 0) {
                        tempArr.push(',');
                    }
                } else {
                    if ((i + 1 - firstComma) % otherComma == 0) {
                        tempArr.push(',');
                    }
                }
            }
        }

        // 整数部分
        let integer = tempArr.reverse().join('');

        // 小数部分
        let decimal = strNum.split('.')[1];
        if (decimal && decimal != '') {
            decimal = '.' + decimal;
        } else {
            decimal = '';
        }

        let str = integer + decimal;
        return str;
    }

    /**
     * 格式化金额 - 支持货币符号
     * @param amount 金额，服务器值
     * @param useUnit 是否使用单位，默认否
     * @param decimalPlace 保留小数位数
     * @param useSymbol 是否使用货币符号，默认是
     * @param useComma 是否使用逗号，默认是
     * @returns
     */
    public static formatAmountCurrency(amount: number, useUnit: boolean = false, decimalPlace: number = 2, useComma: boolean = true): string {
        if (typeof amount != 'number' && isNaN(amount)) {
            c2f.log.warn('CommonUtils formatAmountCurrency, params is invalid');
            return '';
        }

        let sign = amount < 0 ? '-' : '';
        let str = sign + `${amount == 0 ? '0' : CommonUtils.formatAmount(Math.abs(amount), useUnit, Math.abs(decimalPlace), useComma)}`;
        return str;
    }

    /**
     * 格式化昵称
     * @param nickname
     * @param wordLen 字长，1个汉字算2个字符
     */
    public static formatNickname(nickname: string, wordLen = 10): string {
        if (!(nickname && typeof nickname == 'string')) {
            return '';
        }

        let str = '';
        let ellipsis = '…';
        let len = 0;
        for (let i = 0; i < nickname.length; i++) {
            let char = nickname.charAt(i);
            let isEmojiEnd = false;
            if (char.match(/[^\x00-\xff]/gi) != null) {
                len += 2;
                if (len >= wordLen && (nickname.charAt(i - 1) + char).match(/[\ud800-\udbff][\udc00-\udfff]/g) != null) {
                    isEmojiEnd = true;
                }
            } else {
                len += 1;
            }

            if (len != nickname.length && len >= wordLen) {
                // 加上emoji的另一部分
                if (isEmojiEnd) {
                    str += char;
                }
                str += ellipsis;
                break;
            }
            str += char;
        }
        return str;
    }

    /**
     * 格式化时间
     * @param date
     * @param fmt 默认格式 'DD/MM/YYYY hh:mm:ss'
     * @returns
     */
    public static formatDate(date: Date, fmt: string = 'DD/MM/YYYY hh:mm:ss'): string {
        if (!(date instanceof Date)) {
            c2f.log.warn(`CommonUtils formatDate, date err`);
            return;
        }

        let opt = {
            'Y+': date.getFullYear(),
            'M+': date.getMonth() + 1,
            'D+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds(),
        } as {
            [key: string]: number;
        };

        for (const key in opt) {
            let ret = new RegExp('(' + key + ')').exec(fmt);
            if (ret) {
                fmt = fmt.replace(ret[1], opt[key].toString().padStart(ret[1].length, '0'));
            }
        }

        return fmt;
    }

    /**
     * 秒数转化成时间格式
     * @param seconds  number  秒数
     */
    public static formatSeconds(seconds: number): string {
        let theTime = Math.floor(seconds); // 秒
        let middle = 0; // 分
        let hour = 0; // 小时

        if (theTime >= 60) {
            middle = Math.floor(theTime / 60);
            theTime = Math.floor(theTime % 60);
            if (middle >= 60) {
                hour = Math.floor(middle / 60);
                middle = Math.floor(middle % 60);
            }
        }
        let result = '';
        if (theTime < 10) {
            result = '0' + Math.floor(theTime) + '';
        } else {
            result = '' + Math.floor(theTime) + '';
        }

        if (middle < 10) {
            result = '0' + Math.floor(middle) + ':' + result;
        } else {
            result = '' + Math.floor(middle) + ':' + result;
        }

        if (hour > 0) {
            if (hour < 10) {
                result = '0' + Math.floor(hour) + ':' + result;
            } else {
                result = '' + Math.floor(hour) + ':' + result;
            }
        } else {
            result = '00:' + result;
        }

        return result;
    }

    /**
     * 秒数转换为 天时分秒
     * @param seconds 秒数
     */
    public static formatSurplusTime(seconds: number): { day: number | string; hours: number | string; minutes: number | string; second: number | string } {
        let day: number | string = 0,
            hours: number | string = 0,
            minutes: number | string = 0,
            second: number | string = 0;

        if (seconds >= 86400) {
            day = Math.floor(seconds / 86400);
        }
        if (seconds - day * 86400 >= 3600) {
            hours = Math.floor((seconds - day * 86400) / 3600);
        }
        if (seconds - day * 86400 - hours * 3600 >= 60) {
            minutes = Math.floor((seconds - day * 86400 - hours * 3600) / 60);
        }
        second = seconds - day * 86400 - hours * 3600 - minutes * 60;

        if (day < 10) {
            day = '0' + day;
        }
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (second >= 0 && second < 10) {
            second = '0' + second;
        }
        return {
            day: day,
            hours: hours,
            minutes: minutes,
            second: second,
        };
    }

    /**
     * 获取字符串字长: 1个汉字算2个字符
     * @param str
     */
    public static getWordLength(str: string): number {
        if (!(str && typeof str == 'string')) {
            return 0;
        }

        let len = 0;
        for (let i = 0; i < str.length; i++) {
            let char = str.charAt(i);
            if (char.match(/[^\x00-\xff]/gi) != null) {
                len += 2;
            } else {
                len += 1;
            }
        }
        return len;
    }

    /**
     * 检查密码是否符合规则
     * @param password
     */
    public static checkUserPassword(password: string): boolean {
        let reg = /^[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]{6,20}$/;
        if (!reg.test(password)) {
            return false;
        }
        return true;
    }

    /**
     * 是否单字节
     * @param str
     */
    public static isSingleByte(str: string): boolean {
        let reg = /^[\u0000-\u00ff]+$/;
        if (reg.test(str)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 是否邮箱
     * @param str
     */
    public static isEmail(str: string): boolean {
        let reg = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
        if (reg.test(str)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 判断是不是有效的手机号
     * @param str
     */
    public static isPhoneNumber(str: string): boolean {
        // pattern:/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|(16[0-9]{1})|(17[0-9]{1})|(19[0-9]{1})|(12[0-9]{1})|)+\d{8})$/
        if (/^[0-9]{4,15}$/.test(str)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 判断是不是有效的userId
     * @param str 6~8位
     */
    public static isUserIdNumber(str: string): boolean {
        if (!str.startsWith('0') && /^[0-9]{6,9}$/.test(str)) {
            return true;
        }

        return false;
    }

    /**
     * 判断是不是符合规则的验证码
     * 1.随机生成规则：匹配一个由字母和数字组成的字符串，长度为 4 到 12 个字符 /^[A-Za-z0-9]{4,12}$/
     * 2.手动生成规则：匹配一个由字母、数字和特定特殊符号（如 - / : ? ! . , @ # % & +）组成的字符串，长度为 6 到 10 个字符 /^[A-Za-z0-9\-\/:?!.,@#%&+]{6,10}$/
     * 满足其中一个规则即可
     * @param str
     */
    public static isGiftCode(str: string): boolean {
        if (/^[A-Za-z0-9]{4,12}$|^[A-Za-z0-9\-\/:?!.,@#%&+]{6,10}$/.test(str)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 判断是不是包含网址
     * @param str
     */
    public static isIncludeHttpUrl(str: string): boolean {
        let reg = /http(s)?:\/\/[\w-]+(\.[\w-]+){1,5}(:\d+)?(\/[\.\w-]+)*\/?(\?\w+=.*(&\w+=.*)*)?/;
        if (reg.test(str)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 适配滚动数字组件因字体原因在内容长度不变得情况下会产生抖动
     * 条件(label节点必须设置widget组件)
     * @param label
     * @returns
     */
    public static adaptLabelRoll(label: cc.Label): void {
        const widget = label.node.getComponent(cc.Widget);
        if (!cc.isValid(widget) || label.node['is_adapt']) {
            cc.warn('CommonUtils adaptLabelRoll, label node is not widget component OR already adapted');
            return;
        }

        label.node['prv_width'] = label.node.width;

        const adapt = () => {
            if (!cc.isValid(widget)) {
                label.node['is_adapt'] = false;
                label.unschedule(adapt);
                return;
            }

            const avgWidth = label.node.width / label.string.length;

            if (Math.abs(label.node['prv_width'] - label.node.width) > avgWidth + 5) {
                label.node['prv_width'] = label.node.width;
                widget.scheduleOnce(widget.updateAlignment, 0);
            }
        };

        label.node['is_adapt'] = true;
        label.schedule(adapt, 0);
    }

    /**
     * 生成从minNum到maxNum的随机数
     * @param minNum
     * @param maxNum
     */
    public static randomNum(minNum: number, maxNum: number): number {
        switch (arguments.length) {
            case 1:
                return Math.random() * minNum + 1;
            case 2:
                return Math.random() * (maxNum - minNum + 1) + minNum;
            default:
                return 0;
        }
    }

    /**
     * 生成二维码
     * @param node
     * @param data
     */
    public static generateQrCode(node: cc.Node, data: string, color?: cc.Color): void {
        if (!cc.isValid(node)) {
            return;
        }

        if (!(data && typeof data == 'string')) {
            return;
        }

        let graphics = c2f.utils.node.addComponent(node, cc.Graphics) as cc.Graphics;
        graphics.fillColor = cc.Color.BLACK;

        if (color) {
            graphics.fillColor = color;
        }
        let qr = new qrcode.QRCode();
        qr.addData(data);
        qr.make();

        let count = qr.getModuleCount();

        // 块宽高
        let tileW = node.width / count;
        let tileH = node.height / count;

        // 偏移
        let offsetW = node.width * node.anchorX;
        let offsetH = node.height * node.anchorY;

        for (let row = 0; row < count; row++) {
            for (let col = 0; col < count; col++) {
                if (qr.isDark(row, col)) {
                    let x = Math.round(col * tileW) - offsetW;
                    let y = Math.round(row * tileH) - offsetH;
                    let w = Math.ceil((col + 1) * tileW) - Math.floor(col * tileW);
                    let h = Math.ceil((row + 1) * tileW) - Math.floor(row * tileW);
                    graphics.rect(x, y, w, h);
                    graphics.fill();
                }
            }
        }
    }

    /**
     * 适配全屏
     * @param node node上不能挂载cc.Widget，父节点必须为全屏节点
     */
    public static adaptFullScreen(node: cc.Node): void {
        if (!cc.isValid(node)) {
            cc.warn(`CommonUtils adaptFullScreen, node is invalid`);
            return;
        }

        if (node.getComponent(cc.Widget)) {
            node.removeComponent(cc.Widget);
        }

        let widget = node.addComponent(cc.Widget);
        widget.alignMode = cc.Widget.AlignMode.ON_WINDOW_RESIZE;

        let heightOriginal = node.height;
        let widthOriginal = node.width;

        let adapt = () => {
            if (!cc.isValid(widget)) {
                return;
            }

            widget.isAlignTop = false;
            widget.isAlignBottom = false;
            widget.isAlignLeft = false;
            widget.isAlignRight = false;

            if (heightOriginal < cc.winSize.height) {
                widget.isAlignTop = true;
                widget.top = 0;

                widget.isAlignBottom = true;
                widget.bottom = 0;
            }

            if (widthOriginal < cc.winSize.width) {
                widget.isAlignLeft = true;
                widget.left = 0;

                widget.isAlignRight = true;
                widget.right = 0;
            }

            widget.updateAlignment();
        };

        adapt();

        // 节点销毁会自动移除注册事件
        cc.view.on('canvas-resize', adapt, node);
    }

    /**
     * 适配刘海
     * @param node node上必须挂载cc.Widget
     * @param offset 偏移量, 默认0:按照 默认刘海高度 60 偏移, !=0:按照 margin + offset 偏移
     */
    public static adaptNotch(node: cc.Node, offset: number = 0): void {
        if (!cc.isValid(node)) {
            cc.warn(`CommonUtils adaptNotch, node is invalid`);
            return;
        }

        if (node instanceof cc.Widget) {
            node = node.node;
        }

        let widget = node.getComponent(cc.Widget);
        if (!widget) {
            return;
        }

        if (widget['top_original'] == undefined) {
            widget['top_original'] = widget.top;
        }
        if (widget['bottom_original'] == undefined) {
            widget['bottom_original'] = widget.bottom;
        }
        if (widget['left_original'] == undefined) {
            widget['left_original'] = widget.left;
        }
        if (widget['right_original'] == undefined) {
            widget['right_original'] = widget.right;
        }

        if (typeof offset != 'number' || isNaN(offset)) {
            offset = 0;
        }

        let getMargin = (margin: number, abs: boolean, parent: number) => {
            if (!c2f.core.projectConfig.isNotch) {
                return margin;
            }

            // 默认刘海高度 60
            let notchHeight = c2f.core.projectConfig.isNotch ? 60 : 0;

            if (abs) {
                if (offset == 0) {
                    margin = margin < notchHeight ? notchHeight : margin;
                } else {
                    margin = margin + offset;
                }
            } else {
                if (offset == 0) {
                    margin = margin < notchHeight / parent ? notchHeight / parent : margin;
                } else {
                    margin = margin + offset / parent;
                }
            }
            return margin;
        };

        let adapt = () => {
            if (!cc.isValid(widget)) {
                return;
            }

            let orientation = c2f.core.projectConfig.orientation;
            let target = widget.target || widget.node.parent;

            if (widget.isAlignTop) {
                let margin: number = widget['top_original'];
                if (orientation == c2f.core.ScreenOrientation.PORTRAIT) {
                    margin = getMargin(margin, widget.isAbsoluteTop, target.height);
                }
                widget.top = margin;
            }

            if (widget.isAlignBottom) {
                let margin: number = widget['bottom_original'];
                if (orientation == c2f.core.ScreenOrientation.PORTRAIT_UPSIDE_DOWN) {
                    margin = getMargin(margin, widget.isAbsoluteBottom, target.height);
                }
                widget.bottom = margin;
            }

            if (widget.isAlignLeft) {
                let margin: number = widget['left_original'];
                if (orientation == c2f.core.ScreenOrientation.LANDSCAPE_RIGHT) {
                    margin = getMargin(margin, widget.isAbsoluteLeft, target.width);
                }
                widget.left = margin;
            }

            if (widget.isAlignRight) {
                let margin: number = widget['right_original'];
                if (orientation == c2f.core.ScreenOrientation.LANDSCAPE_LEFT) {
                    margin = getMargin(margin, widget.isAbsoluteRight, target.width);
                }
                widget.right = margin;
            }

            widget.updateAlignment();
        };

        adapt();

        // 节点销毁会自动移除注册事件
        cc.view.on('canvas-resize', adapt, node);
        cc.director.on(c2f.core.EventName.SCREEN_ORIENTATION_CHANGED, adapt, widget.node);
    }

    /**
     * 适配精灵尺寸
     * @param sprite
     * @param sourceSize
     */
    public static adaptSpriteSize(sprite: cc.Sprite, sourceSize: cc.Size): void {
        if (!cc.isValid(sprite)) {
            cc.warn(`CommonUtils adaptSpriteSize, sprite is err`);
            return;
        }

        if (!(sourceSize instanceof cc.Size)) {
            return;
        }

        sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        sprite.type = cc.Sprite.Type.SIMPLE;

        let size = cc.size(0, 0);
        let designSize = sprite.node.getContentSize();
        let designRatio = designSize.width / designSize.height;
        let sourceRatio = sourceSize.width / sourceSize.height;

        if (designRatio == sourceRatio) {
            size = designSize;
        } else if (designRatio > sourceRatio) {
            size.width = (designSize.height / sourceSize.height) * sourceSize.width;
            size.height = designSize.height;
        } else if (designRatio < sourceRatio) {
            size.width = designSize.width;
            size.height = (designSize.width / sourceSize.width) * sourceSize.height;
        }

        sprite.node.setContentSize(size);
    }
}

declare global {
    interface IUtil {
        commonUtils: typeof CommonUtils;
    }
}
c2f.utils.commonUtils = CommonUtils;
export {};
