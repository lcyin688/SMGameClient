"use strict";
cc._RF.push(module, 'e5454feQLpCM7ERZYcv22Mg', 'UIHelper');
// Script/game/UIHelper.ts

"use strict";
/** UI相关工具函数汇总·不可引入子包文件 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIHelper = void 0;
var GameConsts_1 = require("./GameConsts");
var UIHelper = /** @class */ (function () {
    function UIHelper() {
    }
    /** 播放背景音乐 */
    UIHelper.playMusic = function (name, cb) {
        if (cb === void 0) { cb = null; }
        if (!name) {
            return;
        }
        var url = GameConsts_1.GameConsts.ResUrl.music + name;
        c2f.audio.playBgmURL(url, cb);
    };
    /** 播放音效 */
    UIHelper.playEffect = function (name) {
        if (!name) {
            return;
        }
        var url = GameConsts_1.GameConsts.ResUrl.soundEft + name;
        c2f.audio.playSfxURL(url);
    };
    UIHelper.setItemNameWithInfo = function (txtLabel, txtName, quality, applyColor) {
        if (applyColor === void 0) { applyColor = true; }
        txtLabel.string = txtName;
        if (applyColor) {
            var shaderLabel = txtLabel.node.getComponent("ShaderArtLabel");
            if (shaderLabel) {
                var doubClr = GameConsts_1.GameConsts.QualityDoubClr[quality];
                if (doubClr) {
                    var clrTmp = cc.color(0, 0, 0);
                    shaderLabel.gradient = 2;
                    shaderLabel.color1 = clrTmp.fromHEX(doubClr[0]).clone();
                    shaderLabel.color2 = clrTmp.fromHEX(doubClr[1]).clone();
                }
                else {
                    shaderLabel.gradient = 1;
                    shaderLabel.color1 = cc.color(0, 0, 0).fromHEX(GameConsts_1.GameConsts.QualityColor[quality]);
                }
            }
            else {
                txtLabel.node.color = txtLabel.node.color.fromHEX(GameConsts_1.GameConsts.QualityColor[quality]);
            }
        }
    };
    /** 逐字显示文本 */
    UIHelper.showTxtBySingleWord = function (txt, str, totalTime, cb) {
        var len = str.length;
        var eachTime = totalTime / len;
        var idx = 0;
        cc.Tween.stopAllByTarget(txt.node);
        var twSub1 = cc.tween(txt.node)
            .call(function () {
            if (idx == len - 1) {
                cc.Tween.stopAllByTarget(txt.node);
                cb && cb();
            }
            txt.string = str.slice(0, idx + 1);
            idx++;
        });
        var twSub2 = cc.tween(txt.node).delay(eachTime);
        cc.tween(txt.node)
            .sequence(twSub1, twSub2)
            .repeatForever()
            .start();
    };
    /** 逐字显示富文本 */
    UIHelper.showRichTxtWithSingleWord = function (richTxt, str, interDur, cb) {
        var regex = /<.+?\/?>/g; // 匹配尖括号标签
        var matchArr = str.match(regex);
        var specialChar = "│";
        var replaceStr = str.replace(regex, specialChar); // 标签数组
        var textArr = replaceStr.split(specialChar); // 文字数组
        var strArr = []; // 存放处理过的文字数组
        var paraNum = 0; // 待替换参数个数
        for (var _i = 0, textArr_1 = textArr; _i < textArr_1.length; _i++) {
            var text = textArr_1[_i];
            // 非空字符替换成类似 $[0-n] 参数
            if (text !== "") {
                text = "$[" + paraNum + "]";
                paraNum += 1;
            }
            strArr.push(text);
        }
        var templetStr = strArr.join(specialChar); // 数组转成待替换字符串
        for (var index = 0; index < textArr.length; index++) {
            // 转换代替换字符串之后, 删除文字数组多余空字符
            if (textArr[index] === "") {
                textArr.splice(index, 1);
                index = index - 1;
            }
        }
        while (templetStr.search(specialChar) !== -1) {
            // 数组转成的字符串原本 '特殊字符' 位置都是富文本标签的位置, 替换回标签
            if (matchArr[0]) {
                templetStr = templetStr.replace(specialChar, matchArr[0].toString());
                matchArr.splice(0, 1);
            }
            else {
                templetStr = templetStr.replace(specialChar, ""); // 空字符串替换,防止死循环
                console.warn("matchArr not enough");
            }
        }
        var lastStrArr = []; // 转换后富文本数组
        var arrayParm = new Array(paraNum).fill(""); // 替换参数数组
        for (var i = 0; i < textArr.length; i++) {
            for (var _a = 0, _b = textArr[i]; _a < _b.length; _a++) {
                var text = _b[_a];
                arrayParm[i] = arrayParm[i] + text;
                var replaceStr1 = templetStr;
                for (var index = 0; index < paraNum; index++) {
                    replaceStr1 = replaceStr1.replace("$[" + index + "]", arrayParm[index]);
                }
                lastStrArr.push(replaceStr1);
            }
        }
        var len = lastStrArr.length;
        var idx = 0;
        cc.Tween.stopAllByTarget(richTxt.node);
        var twSub1 = cc.tween(richTxt.node)
            .call(function () {
            if (idx >= len - 1) {
                richTxt.string = str;
                cc.Tween.stopAllByTarget(richTxt.node);
                cb && cb();
            }
            else {
                richTxt.string = lastStrArr[idx];
                idx++;
            }
        });
        var twSub2 = cc.tween(richTxt.node).delay(interDur);
        cc.tween(richTxt.node)
            .sequence(twSub1, twSub2)
            .repeatForever()
            .start();
    };
    /** 滚动显示数字
     * cbEve  每一次刷新的回调
     */
    UIHelper.showScrollNum = function (txt, dstNum, beginNum, duration, cb, cbEve) {
        cc.Tween.stopAllByTarget(txt.node);
        var count = dstNum - beginNum;
        if (count == 0) {
            txt.string = dstNum.toString();
        }
        else {
            var step_1 = 1;
            var minEach = 1 / cc.game.getFrameRate();
            var totalCount = duration / minEach;
            step_1 = count / totalCount;
            // let step = 1;
            // const minEach = 1 / cc.game.getFrameRate();
            // let eachTime = duration / count;
            // if (eachTime < minEach) {
            //     step = Math.ceil(minEach / eachTime);
            //     eachTime = minEach;
            // }
            var curNum_1 = beginNum;
            var twSub1 = cc.tween(txt.node)
                .call(function () {
                if (curNum_1 >= dstNum) {
                    curNum_1 = dstNum;
                    cc.Tween.stopAllByTarget(txt.node);
                    cb && cb();
                }
                if (cbEve) {
                    cbEve(Math.ceil(curNum_1));
                }
                else {
                    txt.string = Math.ceil(curNum_1).toString();
                }
                curNum_1 += step_1;
            });
            var twSub2 = cc.tween(txt.node).delay(0);
            cc.tween(txt.node)
                .sequence(twSub1, twSub2)
                .repeatForever()
                .start();
        }
    };
    /** 给richText加上黑色描边 */
    UIHelper.formatRichTextOutline = function (txt, width) {
        if (width === void 0) { width = 2; }
        return "<outline color=#000000 width=" + width + ">" + txt + "</outline>";
    };
    /** 给richText加上带颜色描边 */
    UIHelper.formatRichTextOutlineWithColor = function (txt, color, width) {
        if (width === void 0) { width = 2; }
        return "<outline color=" + color + " width=" + width + ">" + txt + "</outline>";
    };
    /** 自旋转动画 */
    UIHelper.playRotateEfx = function (node, onceDur) {
        if (onceDur === void 0) { onceDur = 5; }
        cc.Tween.stopAllByTarget(node);
        cc.tween(node)
            .by(onceDur, { angle: -360 })
            .repeatForever()
            .start();
    };
    /** 呼吸动画 */
    UIHelper.playBreatheEfx = function (node, scale, play) {
        cc.Tween.stopAllByTarget(node);
        if (play) {
            var twSub1 = cc.tween(node).by(1, { scaleX: scale, scaleY: scale });
            var twSub2 = cc.tween(node).by(0.8, { scaleX: -scale, scaleY: -scale });
            var twsub3 = cc.tween(node).delay(0.5);
            cc.tween(node)
                .sequence(twSub1, twSub2, twsub3)
                .repeatForever()
                .start();
        }
    };
    /** 获取动作打击次数 */
    UIHelper.getHitTimesByInfo = function (spineFile, actionName) {
        var totalHitCnt = 0;
        var allConf = szg.cfg.getCfgData('spineCount');
        var spineConf = allConf[spineFile];
        if (spineConf && spineConf[actionName]) {
            var acts = spineConf[actionName].act;
            if (acts) {
                for (var _i = 0, acts_1 = acts; _i < acts_1.length; _i++) {
                    var oneAct = acts_1[_i];
                    for (var _a = 0, oneAct_1 = oneAct; _a < oneAct_1.length; _a++) {
                        var oneBlt = oneAct_1[_a];
                        var hitCnt = 0;
                        var efxConf = allConf[oneBlt];
                        if (efxConf && efxConf.play && efxConf.play.hitCnt) {
                            hitCnt = efxConf.play.hitCnt;
                        }
                        totalHitCnt += hitCnt;
                    }
                }
            }
            else {
                totalHitCnt = spineConf[actionName].hitCnt;
            }
        }
        return totalHitCnt;
    };
    /** 处理技能文本颜色 */
    UIHelper.getskillDes = function (skillDes, isActive) {
        var colorStr = isActive ? "<color=#40953c>" : "<color=#B77474>";
        return this.getStrReplace(skillDes, colorStr);
    };
    /** 处理技能文本颜色 */
    UIHelper.getStrReplace = function (skillDes, colorStr) {
        skillDes = skillDes.replace(/<color=/gi, colorStr);
        for (var i = 0; i < 6; i++) {
            skillDes = skillDes.replace("{" + i + "}>", "");
        }
        return skillDes;
    };
    /**筛选敏感文本   */
    UIHelper.filterSensitiveWords = function (text) {
        var sensitiveWords = [];
        for (var c = 21000; c < 21999; c++) {
            var itemStr = c2f.language.words(c);
            if (itemStr && itemStr != "" && !Number(itemStr)) {
                sensitiveWords.push(itemStr);
            }
        }
        for (var _i = 0, sensitiveWords_1 = sensitiveWords; _i < sensitiveWords_1.length; _i++) {
            var word = sensitiveWords_1[_i];
            if (text.includes(word)) {
                return true;
            }
        }
        return false;
    };
    /**筛选特殊字符文本 */
    UIHelper.filterSpecialCharacters = function (input) {
        var str = input;
        var strTemp = this.filterChineseCharacters(str);
        var specialCharacters = strTemp.match(/\W+/g);
        var ishave = false;
        if (specialCharacters && specialCharacters.length > 0) {
            ishave = true;
        }
        return ishave;
    };
    /**过滤掉所有中文 */
    UIHelper.filterChineseCharacters = function (str) {
        var chineseRegex = /[\u4e00-\u9fa5]/g;
        return str.replace(chineseRegex, "");
    };
    /**筛选出中英文 */
    UIHelper.splitChineseAndEnglish = function (str) {
        var chineseRegex = /[\u4e00-\u9fa5]/g;
        var englishRegex = /[a-zA-Z]/g;
        var chinese = str.match(chineseRegex);
        var english = str.match(englishRegex);
        return {
            chinese: chinese ? chinese.join("") : "",
            english: english ? english.join("") : ""
        };
    };
    /** 显示文件中的长文本 */
    UIHelper.showLongTxtByFile = function (title, bundle, fileUrl) {
        c2f.res.load(bundle, fileUrl, cc.TextAsset, function (err, asset) {
            if (err) {
                cc.error(err.message);
            }
            else {
                var EntranceUI = require('EntranceView').EntranceUI;
                c2f.gui.open(EntranceUI.LongTxtDialog, { content: asset.text, title: title });
            }
            c2f.res.release(fileUrl, cc.TextAsset, bundle);
        });
    };
    /** 设置带天数的倒计时(省略模式):
     * eg. >1天： dd天hh:mm:ss
     * eg. <1天 | <1分钟: ss
     *          | <1小时: mm:ss
     *          | >1小时: hh:mm:ss
     */
    UIHelper.setCutdownWithDayMini = function (comp, restDur, endCb, txtFormat) {
        if (endCb === void 0) { endCb = null; }
        if (txtFormat === void 0) { txtFormat = null; }
        var cutDownComp = comp.getComponent('CountdownLabel');
        if (cutDownComp) {
            var dayStr = "%{d}" + c2f.language.words(2504) + "%{hh}:%{mm}:%{mm}";
            cutDownComp.startCountdown(restDur, {
                S: "%{ss}",
                M: "%{mm}:%{ss}",
                H: "%{hh}:%{mm}:%{ss}",
                D: dayStr
            }, txtFormat, null, endCb);
        }
    };
    /** 设置带天数的倒计时(固定模式)
     * eg. >1天：dd天hh:mm
     * eg. <1天: hh:mm:ss
    */
    UIHelper.setCutdownWithDayFixed = function (comp, restDur, endCb, txtFormat) {
        if (endCb === void 0) { endCb = null; }
        if (txtFormat === void 0) { txtFormat = null; }
        var cutDownComp = comp.getComponent('CountdownLabel');
        if (cutDownComp) {
            var hms = "%{hh}:%{mm}:%{ss}";
            var dayStr = "%{d}" + c2f.language.words(2504) + "%{hh}:%{mm}";
            cutDownComp.startCountdown(restDur, {
                S: hms,
                M: hms,
                H: hms,
                D: dayStr
            }, txtFormat, null, endCb);
        }
    };
    /** 艺术字标题设置: eg. 七日狂欢|#925C41|#FFEFA6|#FBFDF4*/
    UIHelper.setShaderArtLabelString = function (label, title) {
        var artLabel = label.getComponent('ShaderArtLabel');
        if (artLabel) {
            var subs = title.split('|');
            if (subs.length > 0) {
                artLabel.node.getComponent(cc.Label).string = subs[0];
            }
            if (subs.length > 1 && subs[1].length > 0) {
                artLabel.outlineColor = artLabel.outlineColor.fromHEX(subs[1]);
            }
            if (subs.length > 2 && subs[2].length > 0) {
                artLabel.color1 = artLabel.color1.fromHEX(subs[2]);
            }
            if (subs.length > 3 && subs[3].length > 0) {
                artLabel.color2 = artLabel.color2.fromHEX(subs[3]);
            }
        }
    };
    /** 播放UI特效 */
    UIHelper.playUIEffect = function (skeleton, efxName, action, isLoop, evtCb) {
        skeleton.setEventListener(function (x, ev) {
            if (typeof ev == 'number') {
                return;
            }
            if (ev.data.name == 'key') {
                evtCb && evtCb();
            }
            else if (ev.data.name == 'sound') {
                // UIHelper.playEffect(ev.stringValue);
            }
        });
        var url = GameConsts_1.GameConsts.ResUrl.uiEfx + (efxName + "/" + efxName);
        c2f.utils.view.changeSkeletonData(skeleton, url, function () {
            if (skeleton && skeleton.isValid) {
                skeleton.setAnimation(0, action, isLoop);
            }
        });
    };
    UIHelper.playSkeAni = function (skeItem, aniName, callBack, isloop, trackIndex, timeScale) {
        if (callBack === void 0) { callBack = null; }
        if (isloop === void 0) { isloop = false; }
        if (trackIndex === void 0) { trackIndex = 0; }
        if (timeScale === void 0) { timeScale = 1; }
        skeItem.node.active = true;
        // skeItem.clearTracks()
        skeItem.setAnimation(trackIndex, aniName, isloop);
        skeItem.timeScale = timeScale;
        skeItem.setCompleteListener(function (data) {
            if (callBack) {
                callBack();
                callBack = null;
            }
        });
    };
    /**
     * n阶贝塞尔曲线
     * @param target
     * @param config 控制点
     * @param opts
     * @returns to(time, {}, ExternalFun.createBezier(node, config))
     */
    UIHelper.createBezier = function (target, config, opts) {
        opts = opts || Object.create(null);
        var factorial = function (n) {
            var result = 1;
            for (var i = 2; i <= n; i++) {
                result *= i;
            }
            return result;
        };
        /**
         *
         * @param controlPoints 控制点
         * @param progressRatio 比例系数
         * @returns
         */
        var calculateBezierPoint = function (controlPoints, progressRatio) {
            var n = controlPoints.length - 1;
            var t = progressRatio;
            var bernstein = function (i, n, t) {
                var coefficient = factorial(n) / (factorial(i) * factorial(n - i));
                return coefficient * Math.pow(t, i) * Math.pow(1 - t, n - i);
            };
            var point = { x: 0, y: 0 };
            for (var i = 0; i <= n; i++) {
                var b = bernstein(i, n, t);
                point.x += controlPoints[i].x * b;
                point.y += controlPoints[i].y * b;
            }
            return point;
        };
        var points = [];
        if (config.controlPoint) {
            points.push.apply(points, config.controlPoint);
        }
        points.splice(0, 0, config.startPos);
        points.push(config.endPos);
        opts.onUpdate = function (arg, ratio) {
            var point = calculateBezierPoint(points, ratio);
            target.setPosition(point.x, point.y);
        };
        return opts;
    };
    /**
     * 以某点为圆心，生成圆周上等分点的坐标
     *
     * @param {number} r 半径
     * @param {cc.Vec2} pos 圆心坐标
     * @param {number} count 等分点数量
     * @param {number} [randomScope=80] 等分点的随机波动范围
     * @returns {cc.Vec2[]} 返回等分点坐标
     */
    UIHelper.getCirclePoints = function (r, pos, count, randomScope) {
        if (randomScope === void 0) { randomScope = 20; }
        var points = [];
        var radians = (Math.PI / 180) * Math.round(360 / count);
        for (var i = 0; i < count; i++) {
            var x = pos.x + r * Math.sin(radians * i);
            var y = pos.y + r * Math.cos(radians * i);
            points.unshift(cc.v3(x + Math.random() * randomScope, y + Math.random() * randomScope, 0));
        }
        return points;
    };
    /**
     * 以某点为圆心，生成圆周上等分点的坐标
     *
     * @param {number} r1 起点半径
     * @param {number} r2 终点点半径
     * @param {cc.Vec2} pos 圆心坐标
     * @param {number} count 等分点数量
     * @param {number} [randomScope=80] 等分点的随机波动范围
     * @returns {cc.Vec2[]} 返回等分点坐标
     */
    UIHelper.getCirclePointsArr = function (r1, r2, pos, count, randomScope) {
        if (randomScope === void 0) { randomScope = 20; }
        var points = [];
        var radians = (Math.PI / 180) * Math.round(360 / count);
        for (var i = 0; i < count; i++) {
            var x1 = pos.x + r1 * Math.sin(radians * i);
            var y1 = pos.y + r1 * Math.cos(radians * i);
            var x2 = pos.x + r2 * Math.sin(radians * i);
            var y2 = pos.y + r2 * Math.cos(radians * i);
            var randomX = Math.random() * randomScope;
            var randomY = Math.random() * randomScope;
            var item = [cc.v3(x1 + randomX, y1 + randomY), cc.v3(x2 + randomX, y2 + randomY)];
            points.push(item);
        }
        return points;
    };
    /** 显示网络错误 */
    UIHelper.showNetError = function (code) {
        if (cc.assetManager.getBundle(GameConsts_1.GameConsts.Bundle.mainPack)) {
            var isDisconnect = code == 99999 ? true : false;
            if (isDisconnect) {
                c2f.gui.notifyTxt('509');
                c2f.gui.hideLoading(true);
            }
        }
        else {
            var isDisconnect = code == 99999 ? true : false;
            if (isDisconnect) {
                c2f.gui.notifyTxt('509');
                c2f.gui.hideLoading(true);
            }
        }
    };
    return UIHelper;
}());
exports.UIHelper = UIHelper;

cc._RF.pop();