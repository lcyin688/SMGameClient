
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/game/UIHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvZ2FtZS9VSUhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEJBQTBCOzs7QUFHMUIsMkNBQTBDO0FBSzFDO0lBQUE7SUFpakJBLENBQUM7SUEvaUJHLGFBQWE7SUFDTixrQkFBUyxHQUFoQixVQUFpQixJQUFZLEVBQUUsRUFBbUI7UUFBbkIsbUJBQUEsRUFBQSxTQUFtQjtRQUM5QyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsT0FBTztTQUNWO1FBQ0QsSUFBSSxHQUFHLEdBQUcsdUJBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUN6QyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELFdBQVc7SUFDSixtQkFBVSxHQUFqQixVQUFrQixJQUFZO1FBQzFCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxPQUFPO1NBQ1Y7UUFDRCxJQUFJLEdBQUcsR0FBRyx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzVDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFTTSw0QkFBbUIsR0FBMUIsVUFBMkIsUUFBa0IsRUFBRSxPQUFlLEVBQUUsT0FBZSxFQUFFLFVBQTBCO1FBQTFCLDJCQUFBLEVBQUEsaUJBQTBCO1FBQ3ZHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQzFCLElBQUksVUFBVSxFQUFFO1lBQ1osSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUMvRCxJQUFJLFdBQVcsRUFBRTtnQkFDYixJQUFJLE9BQU8sR0FBRyx1QkFBVSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDakQsSUFBSSxPQUFP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QUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN2RCxJQUFNLFlBQVksR0FBRyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNsRCxJQUFJLFlBQVksRUFBRTtnQkFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDN0I7U0FDSjthQUFNO1lBQ0gsSUFBTSxZQUFZLEdBQUcsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDbEQsSUFBSSxZQUFZLEVBQUU7Z0JBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzdCO1NBQ0o7SUFDTCxDQUFDO0lBR0wsZUFBQztBQUFELENBampCQSxBQWlqQkMsSUFBQTtBQWpqQlksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKiogVUnnm7jlhbPlt6Xlhbflh73mlbDmsYfmgLvCt+S4jeWPr+W8leWFpeWtkOWMheaWh+S7tiAqL1xuXG5pbXBvcnQgeyBHYW1lQ2FsYyB9IGZyb20gXCIuL0dhbWVDYWxjdWxhdG9yXCI7XG5pbXBvcnQgeyBHYW1lQ29uc3RzIH0gZnJvbSBcIi4vR2FtZUNvbnN0c1wiO1xuaW1wb3J0IHsgR2FtZUhlbHBlciB9IGZyb20gXCIuL0dhbWVIZWxwZXJcIjtcbmltcG9ydCB7IFVJUGEgfSBmcm9tIFwiLi9VSVBhcmFtXCI7XG5cblxuZXhwb3J0IGNsYXNzIFVJSGVscGVyIHtcblxuICAgIC8qKiDmkq3mlL7og4zmma/pn7PkuZAgKi9cbiAgICBzdGF0aWMgcGxheU11c2ljKG5hbWU6IHN0cmluZywgY2I6IEZ1bmN0aW9uID0gbnVsbCkge1xuICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdXJsID0gR2FtZUNvbnN0cy5SZXNVcmwubXVzaWMgKyBuYW1lO1xuICAgICAgICBjMmYuYXVkaW8ucGxheUJnbVVSTCh1cmwsIGNiKTtcbiAgICB9XG5cbiAgICAvKiog5pKt5pS+6Z+z5pWIICovXG4gICAgc3RhdGljIHBsYXlFZmZlY3QobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB1cmwgPSBHYW1lQ29uc3RzLlJlc1VybC5zb3VuZEVmdCArIG5hbWU7XG4gICAgICAgIGMyZi5hdWRpby5wbGF5U2Z4VVJMKHVybCk7XG4gICAgfVxuXG5cblxuXG5cblxuXG5cbiAgICBzdGF0aWMgc2V0SXRlbU5hbWVXaXRoSW5mbyh0eHRMYWJlbDogY2MuTGFiZWwsIHR4dE5hbWU6IHN0cmluZywgcXVhbGl0eTogbnVtYmVyLCBhcHBseUNvbG9yOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICB0eHRMYWJlbC5zdHJpbmcgPSB0eHROYW1lO1xuICAgICAgICBpZiAoYXBwbHlDb2xvcikge1xuICAgICAgICAgICAgbGV0IHNoYWRlckxhYmVsID0gdHh0TGFiZWwubm9kZS5nZXRDb21wb25lbnQoXCJTaGFkZXJBcnRMYWJlbFwiKTtcbiAgICAgICAgICAgIGlmIChzaGFkZXJMYWJlbCkge1xuICAgICAgICAgICAgICAgIGxldCBkb3ViQ2xyID0gR2FtZUNvbnN0cy5RdWFsaXR5RG91YkNscltxdWFsaXR5XTtcbiAgICAgICAgICAgICAgICBpZiAoZG91YkNscikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2xyVG1wID0gY2MuY29sb3IoMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIHNoYWRlckxhYmVsLmdyYWRpZW50ID0gMjtcbiAgICAgICAgICAgICAgICAgICAgc2hhZGVyTGFiZWwuY29sb3IxID0gY2xyVG1wLmZyb21IRVgoZG91YkNsclswXSkuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgc2hhZGVyTGFiZWwuY29sb3IyID0gY2xyVG1wLmZyb21IRVgoZG91YkNsclsxXSkuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzaGFkZXJMYWJlbC5ncmFkaWVudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHNoYWRlckxhYmVsLmNvbG9yMSA9IGNjLmNvbG9yKDAsIDAsIDApLmZyb21IRVgoR2FtZUNvbnN0cy5RdWFsaXR5Q29sb3JbcXVhbGl0eV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHh0TGFiZWwubm9kZS5jb2xvciA9IHR4dExhYmVsLm5vZGUuY29sb3IuZnJvbUhFWChHYW1lQ29uc3RzLlF1YWxpdHlDb2xvcltxdWFsaXR5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG5cblxuICAgIC8qKiDpgJDlrZfmmL7npLrmlofmnKwgKi9cbiAgICBzdGF0aWMgc2hvd1R4dEJ5U2luZ2xlV29yZCh0eHQ6IGNjLkxhYmVsLCBzdHI6IHN0cmluZywgdG90YWxUaW1lOiBudW1iZXIsIGNiOiBGdW5jdGlvbikge1xuICAgICAgICBsZXQgbGVuID0gc3RyLmxlbmd0aDtcbiAgICAgICAgbGV0IGVhY2hUaW1lID0gdG90YWxUaW1lIC8gbGVuO1xuICAgICAgICBsZXQgaWR4ID0gMDtcblxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodHh0Lm5vZGUpO1xuICAgICAgICBsZXQgdHdTdWIxID0gY2MudHdlZW4odHh0Lm5vZGUpXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlkeCA9PSBsZW4gLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0eHQubm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHR4dC5zdHJpbmcgPSBzdHIuc2xpY2UoMCwgaWR4ICsgMSk7XG4gICAgICAgICAgICAgICAgaWR4Kys7XG4gICAgICAgICAgICB9KVxuICAgICAgICBsZXQgdHdTdWIyID0gY2MudHdlZW4odHh0Lm5vZGUpLmRlbGF5KGVhY2hUaW1lKTtcbiAgICAgICAgY2MudHdlZW4odHh0Lm5vZGUpXG4gICAgICAgICAgICAuc2VxdWVuY2UodHdTdWIxLCB0d1N1YjIpXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcigpXG4gICAgICAgICAgICAuc3RhcnQoKVxuICAgIH1cblxuICAgIC8qKiDpgJDlrZfmmL7npLrlr4zmlofmnKwgKi9cbiAgICBzdGF0aWMgc2hvd1JpY2hUeHRXaXRoU2luZ2xlV29yZChyaWNoVHh0OiBjYy5SaWNoVGV4dCwgc3RyOiBzdHJpbmcsIGludGVyRHVyOiBudW1iZXIsIGNiOiBGdW5jdGlvbikge1xuICAgICAgICBjb25zdCByZWdleCA9IC88Lis/XFwvPz4vZzsgLy8g5Yy56YWN5bCW5ous5Y+35qCH562+XG4gICAgICAgIGNvbnN0IG1hdGNoQXJyID0gc3RyLm1hdGNoKHJlZ2V4KTtcbiAgICAgICAgY29uc3Qgc3BlY2lhbENoYXIgPSBcIuKUglwiO1xuICAgICAgICBjb25zdCByZXBsYWNlU3RyID0gc3RyLnJlcGxhY2UocmVnZXgsIHNwZWNpYWxDaGFyKTsgLy8g5qCH562+5pWw57uEXG4gICAgICAgIGNvbnN0IHRleHRBcnI6IHN0cmluZ1tdID0gcmVwbGFjZVN0ci5zcGxpdChzcGVjaWFsQ2hhcik7IC8vIOaWh+Wtl+aVsOe7hFxuICAgICAgICBjb25zdCBzdHJBcnI6IHN0cmluZ1tdID0gW107IC8vIOWtmOaUvuWkhOeQhui/h+eahOaWh+Wtl+aVsOe7hFxuICAgICAgICBsZXQgcGFyYU51bSA9IDA7IC8vIOW+heabv+aNouWPguaVsOS4quaVsFxuICAgICAgICBmb3IgKGxldCB0ZXh0IG9mIHRleHRBcnIpIHtcbiAgICAgICAgICAgIC8vIOmdnuepuuWtl+espuabv+aNouaIkOexu+S8vCAkWzAtbl0g5Y+C5pWwXG4gICAgICAgICAgICBpZiAodGV4dCAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHRleHQgPSBgJFske3BhcmFOdW19XWA7XG4gICAgICAgICAgICAgICAgcGFyYU51bSArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RyQXJyLnB1c2godGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRlbXBsZXRTdHI6IHN0cmluZyA9IHN0ckFyci5qb2luKHNwZWNpYWxDaGFyKTsgLy8g5pWw57uE6L2s5oiQ5b6F5pu/5o2i5a2X56ym5LiyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0ZXh0QXJyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgLy8g6L2s5o2i5Luj5pu/5o2i5a2X56ym5Liy5LmL5ZCOLCDliKDpmaTmloflrZfmlbDnu4TlpJrkvZnnqbrlrZfnrKZcbiAgICAgICAgICAgIGlmICh0ZXh0QXJyW2luZGV4XSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHRleHRBcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGluZGV4IC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAodGVtcGxldFN0ci5zZWFyY2goc3BlY2lhbENoYXIpICE9PSAtMSkge1xuICAgICAgICAgICAgLy8g5pWw57uE6L2s5oiQ55qE5a2X56ym5Liy5Y6f5pysICfnibnmrorlrZfnrKYnIOS9jee9rumDveaYr+WvjOaWh+acrOagh+etvueahOS9jee9riwg5pu/5o2i5Zue5qCH562+XG4gICAgICAgICAgICBpZiAobWF0Y2hBcnJbMF0pIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGV0U3RyID0gdGVtcGxldFN0ci5yZXBsYWNlKHNwZWNpYWxDaGFyLCBtYXRjaEFyclswXS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBtYXRjaEFyci5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRlbXBsZXRTdHIgPSB0ZW1wbGV0U3RyLnJlcGxhY2Uoc3BlY2lhbENoYXIsIFwiXCIpOy8vIOepuuWtl+espuS4suabv+aNoizpmLLmraLmrbvlvqrnjq9cbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJtYXRjaEFyciBub3QgZW5vdWdoXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxhc3RTdHJBcnI6IHN0cmluZ1tdID0gW107IC8vIOi9rOaNouWQjuWvjOaWh+acrOaVsOe7hFxuICAgICAgICBjb25zdCBhcnJheVBhcm06IHN0cmluZ1tdID0gbmV3IEFycmF5KHBhcmFOdW0pLmZpbGwoXCJcIik7IC8vIOabv+aNouWPguaVsOaVsOe7hFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGV4dCBvZiB0ZXh0QXJyW2ldKSB7XG4gICAgICAgICAgICAgICAgYXJyYXlQYXJtW2ldID0gYXJyYXlQYXJtW2ldICsgdGV4dDtcbiAgICAgICAgICAgICAgICBsZXQgcmVwbGFjZVN0cjEgPSB0ZW1wbGV0U3RyO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYXJhTnVtOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2VTdHIxID0gcmVwbGFjZVN0cjEucmVwbGFjZShgJFske2luZGV4fV1gLCBhcnJheVBhcm1baW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFzdFN0ckFyci5wdXNoKHJlcGxhY2VTdHIxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsZW4gPSBsYXN0U3RyQXJyLmxlbmd0aDtcbiAgICAgICAgbGV0IGlkeCA9IDA7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChyaWNoVHh0Lm5vZGUpO1xuICAgICAgICBsZXQgdHdTdWIxID0gY2MudHdlZW4ocmljaFR4dC5ub2RlKVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpZHggPj0gbGVuIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICByaWNoVHh0LnN0cmluZyA9IHN0cjtcbiAgICAgICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHJpY2hUeHQubm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmljaFR4dC5zdHJpbmcgPSBsYXN0U3RyQXJyW2lkeF07XG4gICAgICAgICAgICAgICAgICAgIGlkeCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIGxldCB0d1N1YjIgPSBjYy50d2VlbihyaWNoVHh0Lm5vZGUpLmRlbGF5KGludGVyRHVyKTtcbiAgICAgICAgY2MudHdlZW4ocmljaFR4dC5ub2RlKVxuICAgICAgICAgICAgLnNlcXVlbmNlKHR3U3ViMSwgdHdTdWIyKVxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoKVxuICAgICAgICAgICAgLnN0YXJ0KClcbiAgICB9XG5cbiAgICAvKiog5rua5Yqo5pi+56S65pWw5a2XXG4gICAgICogY2JFdmUgIOavj+S4gOasoeWIt+aWsOeahOWbnuiwg1xuICAgICAqL1xuICAgIHN0YXRpYyBzaG93U2Nyb2xsTnVtKHR4dDogY2MuTGFiZWwgfCBjYy5SaWNoVGV4dCwgZHN0TnVtOiBudW1iZXIsIGJlZ2luTnVtOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIsIGNiOiBGdW5jdGlvbiwgY2JFdmU/OiBGdW5jdGlvbikge1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodHh0Lm5vZGUpO1xuICAgICAgICBsZXQgY291bnQgPSBkc3ROdW0gLSBiZWdpbk51bTtcbiAgICAgICAgaWYgKGNvdW50ID09IDApIHtcbiAgICAgICAgICAgIHR4dC5zdHJpbmcgPSBkc3ROdW0udG9TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzdGVwID0gMTtcbiAgICAgICAgICAgIGxldCBtaW5FYWNoID0gMSAvIGNjLmdhbWUuZ2V0RnJhbWVSYXRlKCk7XG4gICAgICAgICAgICBsZXQgdG90YWxDb3VudCA9IGR1cmF0aW9uIC8gbWluRWFjaFxuICAgICAgICAgICAgc3RlcCA9IGNvdW50IC8gdG90YWxDb3VudFxuICAgICAgICAgICAgLy8gbGV0IHN0ZXAgPSAxO1xuICAgICAgICAgICAgLy8gY29uc3QgbWluRWFjaCA9IDEgLyBjYy5nYW1lLmdldEZyYW1lUmF0ZSgpO1xuICAgICAgICAgICAgLy8gbGV0IGVhY2hUaW1lID0gZHVyYXRpb24gLyBjb3VudDtcbiAgICAgICAgICAgIC8vIGlmIChlYWNoVGltZSA8IG1pbkVhY2gpIHtcbiAgICAgICAgICAgIC8vICAgICBzdGVwID0gTWF0aC5jZWlsKG1pbkVhY2ggLyBlYWNoVGltZSk7XG4gICAgICAgICAgICAvLyAgICAgZWFjaFRpbWUgPSBtaW5FYWNoO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgbGV0IGN1ck51bSA9IGJlZ2luTnVtO1xuICAgICAgICAgICAgbGV0IHR3U3ViMSA9IGNjLnR3ZWVuKHR4dC5ub2RlKVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1ck51bSA+PSBkc3ROdW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ck51bSA9IGRzdE51bVxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHR4dC5ub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNiRXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYkV2ZShNYXRoLmNlaWwoY3VyTnVtKSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dC5zdHJpbmcgPSBNYXRoLmNlaWwoY3VyTnVtKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN1ck51bSArPSBzdGVwO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBsZXQgdHdTdWIyID0gY2MudHdlZW4odHh0Lm5vZGUpLmRlbGF5KDApO1xuICAgICAgICAgICAgY2MudHdlZW4odHh0Lm5vZGUpXG4gICAgICAgICAgICAgICAgLnNlcXVlbmNlKHR3U3ViMSwgdHdTdWIyKVxuICAgICAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKClcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIC8qKiDnu5lyaWNoVGV4dOWKoOS4ium7keiJsuaPj+i+uSAqL1xuICAgIHN0YXRpYyBmb3JtYXRSaWNoVGV4dE91dGxpbmUodHh0OiBzdHJpbmcsIHdpZHRoOiBudW1iZXIgPSAyKSB7XG4gICAgICAgIHJldHVybiBgPG91dGxpbmUgY29sb3I9IzAwMDAwMCB3aWR0aD0ke3dpZHRofT4ke3R4dH08L291dGxpbmU+YDtcbiAgICB9XG5cbiAgICAvKiog57uZcmljaFRleHTliqDkuIrluKbpopzoibLmj4/ovrkgKi9cbiAgICBzdGF0aWMgZm9ybWF0UmljaFRleHRPdXRsaW5lV2l0aENvbG9yKHR4dDogc3RyaW5nLCBjb2xvcjogc3RyaW5nLCB3aWR0aDogbnVtYmVyID0gMikge1xuICAgICAgICByZXR1cm4gYDxvdXRsaW5lIGNvbG9yPSR7Y29sb3J9IHdpZHRoPSR7d2lkdGh9PiR7dHh0fTwvb3V0bGluZT5gO1xuICAgIH1cblxuICAgIC8qKiDoh6rml4vovazliqjnlLsgKi9cbiAgICBzdGF0aWMgcGxheVJvdGF0ZUVmeChub2RlOiBjYy5Ob2RlLCBvbmNlRHVyOiBudW1iZXIgPSA1KSB7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChub2RlKTtcbiAgICAgICAgY2MudHdlZW4obm9kZSlcbiAgICAgICAgICAgIC5ieShvbmNlRHVyLCB7IGFuZ2xlOiAtMzYwIH0pXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcigpXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICAvKiog5ZG85ZC45Yqo55S7ICovXG4gICAgc3RhdGljIHBsYXlCcmVhdGhlRWZ4KG5vZGU6IGNjLk5vZGUsIHNjYWxlOiBudW1iZXIsIHBsYXk6IGJvb2xlYW4pIHtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG5vZGUpO1xuICAgICAgICBpZiAocGxheSkge1xuICAgICAgICAgICAgbGV0IHR3U3ViMSA9IGNjLnR3ZWVuKG5vZGUpLmJ5KDEsIHsgc2NhbGVYOiBzY2FsZSwgc2NhbGVZOiBzY2FsZSB9KTtcbiAgICAgICAgICAgIGxldCB0d1N1YjIgPSBjYy50d2Vlbihub2RlKS5ieSgwLjgsIHsgc2NhbGVYOiAtc2NhbGUsIHNjYWxlWTogLXNjYWxlIH0pO1xuICAgICAgICAgICAgbGV0IHR3c3ViMyA9IGNjLnR3ZWVuKG5vZGUpLmRlbGF5KDAuNSk7XG4gICAgICAgICAgICBjYy50d2Vlbihub2RlKVxuICAgICAgICAgICAgICAgIC5zZXF1ZW5jZSh0d1N1YjEsIHR3U3ViMiwgdHdzdWIzKVxuICAgICAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKClcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDojrflj5bliqjkvZzmiZPlh7vmrKHmlbAgKi9cbiAgICBzdGF0aWMgZ2V0SGl0VGltZXNCeUluZm8oc3BpbmVGaWxlOiBzdHJpbmcsIGFjdGlvbk5hbWU6IHN0cmluZykge1xuICAgICAgICBsZXQgdG90YWxIaXRDbnQgPSAwO1xuICAgICAgICBjb25zdCBhbGxDb25mID0gc3pnLmNmZy5nZXRDZmdEYXRhKCdzcGluZUNvdW50Jyk7XG4gICAgICAgIGNvbnN0IHNwaW5lQ29uZiA9IGFsbENvbmZbc3BpbmVGaWxlXTtcbiAgICAgICAgaWYgKHNwaW5lQ29uZiAmJiBzcGluZUNvbmZbYWN0aW9uTmFtZV0pIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdHMgPSBzcGluZUNvbmZbYWN0aW9uTmFtZV0uYWN0O1xuICAgICAgICAgICAgaWYgKGFjdHMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBvbmVBY3Qgb2YgYWN0cykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBvbmVCbHQgb2Ygb25lQWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGl0Q250ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVmeENvbmYgPSBhbGxDb25mW29uZUJsdF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWZ4Q29uZiAmJiBlZnhDb25mLnBsYXkgJiYgZWZ4Q29uZi5wbGF5LmhpdENudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpdENudCA9IGVmeENvbmYucGxheS5oaXRDbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEhpdENudCArPSBoaXRDbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvdGFsSGl0Q250ID0gc3BpbmVDb25mW2FjdGlvbk5hbWVdLmhpdENudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG90YWxIaXRDbnQ7XG4gICAgfVxuXG5cblxuICAgIC8qKiDlpITnkIbmioDog73mlofmnKzpopzoibIgKi9cbiAgICBzdGF0aWMgZ2V0c2tpbGxEZXMoc2tpbGxEZXM6IHN0cmluZywgaXNBY3RpdmU6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGNvbG9yU3RyID0gaXNBY3RpdmUgPyBcIjxjb2xvcj0jNDA5NTNjPlwiIDogXCI8Y29sb3I9I0I3NzQ3ND5cIlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHJSZXBsYWNlKHNraWxsRGVzLCBjb2xvclN0cilcbiAgICB9XG5cbiAgICAvKiog5aSE55CG5oqA6IO95paH5pys6aKc6ImyICovXG4gICAgc3RhdGljIGdldFN0clJlcGxhY2Uoc2tpbGxEZXM6IHN0cmluZywgY29sb3JTdHI6IHN0cmluZykge1xuICAgICAgICBza2lsbERlcyA9IHNraWxsRGVzLnJlcGxhY2UoLzxjb2xvcj0vZ2ksIGNvbG9yU3RyKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgc2tpbGxEZXMgPSBza2lsbERlcy5yZXBsYWNlKFwie1wiICsgaSArIFwifT5cIiwgXCJcIilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2tpbGxEZXNcbiAgICB9XG5cbiAgICAvKirnrZvpgInmlY/mhJ/mlofmnKwgICAqL1xuICAgIHN0YXRpYyBmaWx0ZXJTZW5zaXRpdmVXb3Jkcyh0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHNlbnNpdGl2ZVdvcmRzOiBzdHJpbmdbXSA9IFtdXG4gICAgICAgIGZvciAobGV0IGMgPSAyMTAwMDsgYyA8IDIxOTk5OyBjKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtU3RyID0gYzJmLmxhbmd1YWdlLndvcmRzKGMpXG4gICAgICAgICAgICBpZiAoaXRlbVN0ciAmJiBpdGVtU3RyICE9IFwiXCIgJiYgIU51bWJlcihpdGVtU3RyKSkge1xuICAgICAgICAgICAgICAgIHNlbnNpdGl2ZVdvcmRzLnB1c2goaXRlbVN0cilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCB3b3JkIG9mIHNlbnNpdGl2ZVdvcmRzKSB7XG4gICAgICAgICAgICBpZiAodGV4dC5pbmNsdWRlcyh3b3JkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLyoq562b6YCJ54m55q6K5a2X56ym5paH5pysICovXG4gICAgc3RhdGljIGZpbHRlclNwZWNpYWxDaGFyYWN0ZXJzKGlucHV0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHN0ciA9IGlucHV0XG4gICAgICAgIGxldCBzdHJUZW1wID0gdGhpcy5maWx0ZXJDaGluZXNlQ2hhcmFjdGVycyhzdHIpXG4gICAgICAgIGxldCBzcGVjaWFsQ2hhcmFjdGVycyA9IHN0clRlbXAubWF0Y2goL1xcVysvZyk7XG4gICAgICAgIGxldCBpc2hhdmUgPSBmYWxzZVxuICAgICAgICBpZiAoc3BlY2lhbENoYXJhY3RlcnMgJiYgc3BlY2lhbENoYXJhY3RlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaXNoYXZlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc2hhdmVcbiAgICB9XG4gICAgLyoq6L+H5ruk5o6J5omA5pyJ5Lit5paHICovXG4gICAgc3RhdGljIGZpbHRlckNoaW5lc2VDaGFyYWN0ZXJzKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgY2hpbmVzZVJlZ2V4ID0gL1tcXHU0ZTAwLVxcdTlmYTVdL2c7XG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZShjaGluZXNlUmVnZXgsIFwiXCIpO1xuICAgIH1cbiAgICAvKirnrZvpgInlh7rkuK3oi7HmlocgKi9cbiAgICBzdGF0aWMgc3BsaXRDaGluZXNlQW5kRW5nbGlzaChzdHI6IHN0cmluZyk6IHsgY2hpbmVzZTogc3RyaW5nLCBlbmdsaXNoOiBzdHJpbmcgfSB7XG4gICAgICAgIGNvbnN0IGNoaW5lc2VSZWdleCA9IC9bXFx1NGUwMC1cXHU5ZmE1XS9nO1xuICAgICAgICBjb25zdCBlbmdsaXNoUmVnZXggPSAvW2EtekEtWl0vZztcbiAgICAgICAgY29uc3QgY2hpbmVzZSA9IHN0ci5tYXRjaChjaGluZXNlUmVnZXgpO1xuICAgICAgICBjb25zdCBlbmdsaXNoID0gc3RyLm1hdGNoKGVuZ2xpc2hSZWdleCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjaGluZXNlOiBjaGluZXNlID8gY2hpbmVzZS5qb2luKFwiXCIpIDogXCJcIixcbiAgICAgICAgICAgIGVuZ2xpc2g6IGVuZ2xpc2ggPyBlbmdsaXNoLmpvaW4oXCJcIikgOiBcIlwiXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICAvKiog5pi+56S65paH5Lu25Lit55qE6ZW/5paH5pysICovXG4gICAgc3RhdGljIHNob3dMb25nVHh0QnlGaWxlKHRpdGxlOiBzdHJpbmcsIGJ1bmRsZTogR2FtZUNvbnN0cy5CdW5kbGUsIGZpbGVVcmw6IHN0cmluZykge1xuICAgICAgICBjMmYucmVzLmxvYWQoYnVuZGxlLCBmaWxlVXJsLCBjYy5UZXh0QXNzZXQsIChlcnI6IEVycm9yIHwgbnVsbCwgYXNzZXQ6IGNjLlRleHRBc3NldCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHsgRW50cmFuY2VVSSB9ID0gcmVxdWlyZSgnRW50cmFuY2VWaWV3Jyk7XG4gICAgICAgICAgICAgICAgYzJmLmd1aS5vcGVuKEVudHJhbmNlVUkuTG9uZ1R4dERpYWxvZywgeyBjb250ZW50OiBhc3NldC50ZXh0LCB0aXRsZTogdGl0bGUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjMmYucmVzLnJlbGVhc2UoZmlsZVVybCwgY2MuVGV4dEFzc2V0LCBidW5kbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiog6K6+572u5bim5aSp5pWw55qE5YCS6K6h5pe2KOecgeeVpeaooeW8jyk6XG4gICAgICogZWcuID4x5aSp77yaIGRk5aSpaGg6bW06c3NcbiAgICAgKiBlZy4gPDHlpKkgfCA8MeWIhumSnzogc3NcbiAgICAgKiAgICAgICAgICB8IDwx5bCP5pe2OiBtbTpzc1xuICAgICAqICAgICAgICAgIHwgPjHlsI/ml7Y6IGhoOm1tOnNzXG4gICAgICovXG4gICAgc3RhdGljIHNldEN1dGRvd25XaXRoRGF5TWluaShjb21wOiBjYy5Db21wb25lbnQsIHJlc3REdXI6IG51bWJlciwgZW5kQ2I6ICgpID0+IHZvaWQgPSBudWxsLCB0eHRGb3JtYXQ6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgbGV0IGN1dERvd25Db21wID0gY29tcC5nZXRDb21wb25lbnQoJ0NvdW50ZG93bkxhYmVsJyk7XG4gICAgICAgIGlmIChjdXREb3duQ29tcCkge1xuICAgICAgICAgICAgbGV0IGRheVN0ciA9IFwiJXtkfVwiICsgYzJmLmxhbmd1YWdlLndvcmRzKDI1MDQpICsgXCIle2hofTole21tfTole21tfVwiO1xuICAgICAgICAgICAgY3V0RG93bkNvbXAuc3RhcnRDb3VudGRvd24oXG4gICAgICAgICAgICAgICAgcmVzdER1cixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFM6IFwiJXtzc31cIixcbiAgICAgICAgICAgICAgICAgICAgTTogXCIle21tfTole3NzfVwiLFxuICAgICAgICAgICAgICAgICAgICBIOiBcIiV7aGh9OiV7bW19OiV7c3N9XCIsXG4gICAgICAgICAgICAgICAgICAgIEQ6IGRheVN0clxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHh0Rm9ybWF0LFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgZW5kQ2IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOiuvue9ruW4puWkqeaVsOeahOWAkuiuoeaXtijlm7rlrprmqKHlvI8pIFxuICAgICAqIGVnLiA+MeWkqe+8mmRk5aSpaGg6bW1cbiAgICAgKiBlZy4gPDHlpKk6IGhoOm1tOnNzXG4gICAgKi9cbiAgICBzdGF0aWMgc2V0Q3V0ZG93bldpdGhEYXlGaXhlZChjb21wOiBjYy5Db21wb25lbnQsIHJlc3REdXI6IG51bWJlciwgZW5kQ2I6ICgpID0+IHZvaWQgPSBudWxsLCB0eHRGb3JtYXQ6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgbGV0IGN1dERvd25Db21wID0gY29tcC5nZXRDb21wb25lbnQoJ0NvdW50ZG93bkxhYmVsJyk7XG4gICAgICAgIGlmIChjdXREb3duQ29tcCkge1xuICAgICAgICAgICAgbGV0IGhtcyA9IFwiJXtoaH06JXttbX06JXtzc31cIlxuICAgICAgICAgICAgbGV0IGRheVN0ciA9IFwiJXtkfVwiICsgYzJmLmxhbmd1YWdlLndvcmRzKDI1MDQpICsgXCIle2hofTole21tfVwiO1xuICAgICAgICAgICAgY3V0RG93bkNvbXAuc3RhcnRDb3VudGRvd24oXG4gICAgICAgICAgICAgICAgcmVzdER1cixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFM6IGhtcyxcbiAgICAgICAgICAgICAgICAgICAgTTogaG1zLFxuICAgICAgICAgICAgICAgICAgICBIOiBobXMsXG4gICAgICAgICAgICAgICAgICAgIEQ6IGRheVN0clxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHh0Rm9ybWF0LFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgZW5kQ2IpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIC8qKiDoibrmnK/lrZfmoIfpopjorr7nva46IGVnLiDkuIPml6Xni4LmrKJ8IzkyNUM0MXwjRkZFRkE2fCNGQkZERjQqL1xuICAgIHN0YXRpYyBzZXRTaGFkZXJBcnRMYWJlbFN0cmluZyhsYWJlbDogY2MuQ29tcG9uZW50LCB0aXRsZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBhcnRMYWJlbCA9IGxhYmVsLmdldENvbXBvbmVudCgnU2hhZGVyQXJ0TGFiZWwnKTtcbiAgICAgICAgaWYgKGFydExhYmVsKSB7XG4gICAgICAgICAgICBsZXQgc3VicyA9IHRpdGxlLnNwbGl0KCd8Jyk7XG4gICAgICAgICAgICBpZiAoc3Vicy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgYXJ0TGFiZWwubm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHN1YnNbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3Vicy5sZW5ndGggPiAxICYmIHN1YnNbMV0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGFydExhYmVsLm91dGxpbmVDb2xvciA9IGFydExhYmVsLm91dGxpbmVDb2xvci5mcm9tSEVYKHN1YnNbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN1YnMubGVuZ3RoID4gMiAmJiBzdWJzWzJdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBhcnRMYWJlbC5jb2xvcjEgPSBhcnRMYWJlbC5jb2xvcjEuZnJvbUhFWChzdWJzWzJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdWJzLmxlbmd0aCA+IDMgJiYgc3Vic1szXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgYXJ0TGFiZWwuY29sb3IyID0gYXJ0TGFiZWwuY29sb3IyLmZyb21IRVgoc3Vic1szXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5pKt5pS+VUnnibnmlYggKi9cbiAgICBzdGF0aWMgcGxheVVJRWZmZWN0KHNrZWxldG9uOiBzcC5Ta2VsZXRvbiwgZWZ4TmFtZTogc3RyaW5nLCBhY3Rpb246IHN0cmluZywgaXNMb29wOiBib29sZWFuLCBldnRDYjogRnVuY3Rpb24pIHtcbiAgICAgICAgc2tlbGV0b24uc2V0RXZlbnRMaXN0ZW5lcigoeDogc3Auc3BpbmUuVHJhY2tFbnRyeSwgZXY6IHNwLnNwaW5lLkV2ZW50IHwgbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGV2ID09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2LmRhdGEubmFtZSA9PSAna2V5Jykge1xuICAgICAgICAgICAgICAgIGV2dENiICYmIGV2dENiKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2LmRhdGEubmFtZSA9PSAnc291bmQnKSB7XG4gICAgICAgICAgICAgICAgLy8gVUlIZWxwZXIucGxheUVmZmVjdChldi5zdHJpbmdWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGxldCB1cmwgPSBHYW1lQ29uc3RzLlJlc1VybC51aUVmeCArIGAke2VmeE5hbWV9LyR7ZWZ4TmFtZX1gO1xuICAgICAgICBjMmYudXRpbHMudmlldy5jaGFuZ2VTa2VsZXRvbkRhdGEoc2tlbGV0b24sIHVybCwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNrZWxldG9uICYmIHNrZWxldG9uLmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICBza2VsZXRvbi5zZXRBbmltYXRpb24oMCwgYWN0aW9uLCBpc0xvb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuXG5cblxuICAgIHN0YXRpYyBwbGF5U2tlQW5pKHNrZUl0ZW06IHNwLlNrZWxldG9uLCBhbmlOYW1lOiBzdHJpbmcsIGNhbGxCYWNrOiBGdW5jdGlvbiA9IG51bGwsIGlzbG9vcDogYm9vbGVhbiA9IGZhbHNlLCB0cmFja0luZGV4OiBudW1iZXIgPSAwLCB0aW1lU2NhbGU6IG51bWJlciA9IDEpIHtcbiAgICAgICAgc2tlSXRlbS5ub2RlLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgLy8gc2tlSXRlbS5jbGVhclRyYWNrcygpXG4gICAgICAgIHNrZUl0ZW0uc2V0QW5pbWF0aW9uKHRyYWNrSW5kZXgsIGFuaU5hbWUsIGlzbG9vcCk7XG4gICAgICAgIHNrZUl0ZW0udGltZVNjYWxlID0gdGltZVNjYWxlXG4gICAgICAgIHNrZUl0ZW0uc2V0Q29tcGxldGVMaXN0ZW5lcigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbGxCYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbEJhY2soKVxuICAgICAgICAgICAgICAgIGNhbGxCYWNrID0gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBu6Zi26LSd5aGe5bCU5puy57q/IFxuICAgICAqIEBwYXJhbSB0YXJnZXQgXG4gICAgICogQHBhcmFtIGNvbmZpZyDmjqfliLbngrlcbiAgICAgKiBAcGFyYW0gb3B0cyBcbiAgICAgKiBAcmV0dXJucyB0byh0aW1lLCB7fSwgRXh0ZXJuYWxGdW4uY3JlYXRlQmV6aWVyKG5vZGUsIGNvbmZpZykpXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZUJlemllcih0YXJnZXQ6IGNjLk5vZGUsIGNvbmZpZzogVUlQYS5Nb3ZlQ29uZmlnLCBvcHRzPzogYW55KSB7XG4gICAgICAgIG9wdHMgPSBvcHRzIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblxuICAgICAgICBsZXQgZmFjdG9yaWFsOiBGdW5jdGlvbiA9IChuOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IDE7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKj0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIGNvbnRyb2xQb2ludHMg5o6n5Yi254K5XG4gICAgICAgICAqIEBwYXJhbSBwcm9ncmVzc1JhdGlvIOavlOS+i+ezu+aVsFxuICAgICAgICAgKiBAcmV0dXJucyBcbiAgICAgICAgICovXG4gICAgICAgIGxldCBjYWxjdWxhdGVCZXppZXJQb2ludDogRnVuY3Rpb24gPSAoXG4gICAgICAgICAgICBjb250cm9sUG9pbnRzOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH1bXSxcbiAgICAgICAgICAgIHByb2dyZXNzUmF0aW86IG51bWJlclxuICAgICAgICApOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0gPT4ge1xuICAgICAgICAgICAgY29uc3QgbiA9IGNvbnRyb2xQb2ludHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IHQgPSBwcm9ncmVzc1JhdGlvO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IGJlcm5zdGVpbiA9IChpOiBudW1iZXIsIG46IG51bWJlciwgdDogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2VmZmljaWVudCA9XG4gICAgICAgICAgICAgICAgICAgIGZhY3RvcmlhbChuKSAvIChmYWN0b3JpYWwoaSkgKiBmYWN0b3JpYWwobiAtIGkpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29lZmZpY2llbnQgKiBNYXRoLnBvdyh0LCBpKSAqIE1hdGgucG93KDEgLSB0LCBuIC0gaSk7XG4gICAgICAgICAgICB9O1xuXG5cblxuXG4gICAgICAgICAgICBjb25zdCBwb2ludDogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9ID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBiID0gYmVybnN0ZWluKGksIG4sIHQpO1xuICAgICAgICAgICAgICAgIHBvaW50LnggKz0gY29udHJvbFBvaW50c1tpXS54ICogYjtcbiAgICAgICAgICAgICAgICBwb2ludC55ICs9IGNvbnRyb2xQb2ludHNbaV0ueSAqIGI7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgcmV0dXJuIHBvaW50O1xuICAgICAgICB9XG4gICAgICAgIGxldCBwb2ludHM6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfVtdID0gW11cbiAgICAgICAgaWYgKGNvbmZpZy5jb250cm9sUG9pbnQpIHtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKC4uLmNvbmZpZy5jb250cm9sUG9pbnQpXG4gICAgICAgIH1cbiAgICAgICAgcG9pbnRzLnNwbGljZSgwLCAwLCBjb25maWcuc3RhcnRQb3MpXG4gICAgICAgIHBvaW50cy5wdXNoKGNvbmZpZy5lbmRQb3MpXG5cblxuICAgICAgICBvcHRzLm9uVXBkYXRlID0gKGFyZzogY2MuVmVjMywgcmF0aW86IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgbGV0IHBvaW50OiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0gPSBjYWxjdWxhdGVCZXppZXJQb2ludChwb2ludHMsIHJhdGlvKTtcbiAgICAgICAgICAgIHRhcmdldC5zZXRQb3NpdGlvbihwb2ludC54LCBwb2ludC55KVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gb3B0c1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog5Lul5p+Q54K55Li65ZyG5b+D77yM55Sf5oiQ5ZyG5ZGo5LiK562J5YiG54K555qE5Z2Q5qCHXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gciDljYrlvoRcbiAgICAgKiBAcGFyYW0ge2NjLlZlYzJ9IHBvcyDlnIblv4PlnZDmoIdcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY291bnQg562J5YiG54K55pWw6YePXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtyYW5kb21TY29wZT04MF0g562J5YiG54K555qE6ZqP5py65rOi5Yqo6IyD5Zu0XG4gICAgICogQHJldHVybnMge2NjLlZlYzJbXX0g6L+U5Zue562J5YiG54K55Z2Q5qCHXG4gICAgICovXG4gICAgc3RhdGljIGdldENpcmNsZVBvaW50cyhyOiBudW1iZXIsIHBvczogY2MuVmVjMyB8IGNjLlZlYzIsIGNvdW50OiBudW1iZXIsIHJhbmRvbVNjb3BlOiBudW1iZXIgPSAyMCk6IGNjLlZlYzJbXSB7XG4gICAgICAgIGxldCBwb2ludHMgPSBbXTtcbiAgICAgICAgbGV0IHJhZGlhbnMgPSAoTWF0aC5QSSAvIDE4MCkgKiBNYXRoLnJvdW5kKDM2MCAvIGNvdW50KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgeCA9IHBvcy54ICsgciAqIE1hdGguc2luKHJhZGlhbnMgKiBpKTtcbiAgICAgICAgICAgIGxldCB5ID0gcG9zLnkgKyByICogTWF0aC5jb3MocmFkaWFucyAqIGkpO1xuICAgICAgICAgICAgcG9pbnRzLnVuc2hpZnQoY2MudjMoeCArIE1hdGgucmFuZG9tKCkgKiByYW5kb21TY29wZSwgeSArIE1hdGgucmFuZG9tKCkgKiByYW5kb21TY29wZSwgMCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb2ludHM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDku6Xmn5DngrnkuLrlnIblv4PvvIznlJ/miJDlnIblkajkuIrnrYnliIbngrnnmoTlnZDmoIdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByMSDotbfngrnljYrlvoRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcjIg57uI54K554K55Y2K5b6EXG4gICAgICogQHBhcmFtIHtjYy5WZWMyfSBwb3Mg5ZyG5b+D5Z2Q5qCHXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IOetieWIhueCueaVsOmHj1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcmFuZG9tU2NvcGU9ODBdIOetieWIhueCueeahOmaj+acuuazouWKqOiMg+WbtFxuICAgICAqIEByZXR1cm5zIHtjYy5WZWMyW119IOi/lOWbnuetieWIhueCueWdkOagh1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDaXJjbGVQb2ludHNBcnIocjE6IG51bWJlciwgcjI6IG51bWJlciwgcG9zOiBjYy5WZWMzIHwgY2MuVmVjMiwgY291bnQ6IG51bWJlciwgcmFuZG9tU2NvcGU6IG51bWJlciA9IDIwKTogY2MuVmVjM1tdW10ge1xuICAgICAgICBsZXQgcG9pbnRzOiBjYy5WZWMzW11bXSA9IFtdO1xuICAgICAgICBsZXQgcmFkaWFucyA9IChNYXRoLlBJIC8gMTgwKSAqIE1hdGgucm91bmQoMzYwIC8gY291bnQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCB4MSA9IHBvcy54ICsgcjEgKiBNYXRoLnNpbihyYWRpYW5zICogaSk7XG4gICAgICAgICAgICBsZXQgeTEgPSBwb3MueSArIHIxICogTWF0aC5jb3MocmFkaWFucyAqIGkpO1xuICAgICAgICAgICAgbGV0IHgyID0gcG9zLnggKyByMiAqIE1hdGguc2luKHJhZGlhbnMgKiBpKTtcbiAgICAgICAgICAgIGxldCB5MiA9IHBvcy55ICsgcjIgKiBNYXRoLmNvcyhyYWRpYW5zICogaSk7XG4gICAgICAgICAgICBsZXQgcmFuZG9tWCA9IE1hdGgucmFuZG9tKCkgKiByYW5kb21TY29wZVxuICAgICAgICAgICAgbGV0IHJhbmRvbVkgPSBNYXRoLnJhbmRvbSgpICogcmFuZG9tU2NvcGVcbiAgICAgICAgICAgIGxldCBpdGVtID0gW2NjLnYzKHgxICsgcmFuZG9tWCwgeTEgKyByYW5kb21ZKSwgY2MudjMoeDIgKyByYW5kb21YLCB5MiArIHJhbmRvbVkpXVxuICAgICAgICAgICAgcG9pbnRzLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvaW50cztcbiAgICB9XG5cbiAgICAvKiog5pi+56S6572R57uc6ZSZ6K+vICovXG4gICAgc3RhdGljIHNob3dOZXRFcnJvcihjb2RlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoR2FtZUNvbnN0cy5CdW5kbGUubWFpblBhY2spKSB7XG4gICAgICAgICAgICBjb25zdCBpc0Rpc2Nvbm5lY3QgPSBjb2RlID09IDk5OTk5ID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGlzRGlzY29ubmVjdCkge1xuICAgICAgICAgICAgICAgIGMyZi5ndWkubm90aWZ5VHh0KCc1MDknKTtcbiAgICAgICAgICAgICAgICBjMmYuZ3VpLmhpZGVMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaXNEaXNjb25uZWN0ID0gY29kZSA9PSA5OTk5OSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgIGlmIChpc0Rpc2Nvbm5lY3QpIHtcbiAgICAgICAgICAgICAgICBjMmYuZ3VpLm5vdGlmeVR4dCgnNTA5Jyk7XG4gICAgICAgICAgICAgICAgYzJmLmd1aS5oaWRlTG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG59XG4iXX0=