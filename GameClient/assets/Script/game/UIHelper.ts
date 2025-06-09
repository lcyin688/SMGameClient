/** UI相关工具函数汇总·不可引入子包文件 */

import { GameCalc } from './GameCalculator';
import { GameConsts } from './GameConsts';
import { GameHelper } from './GameHelper';
import { UIPa } from './UIParam';

export class UIHelper {
    /** 播放背景音乐 */
    static playMusic(name: string, cb: Function = null) {
        if (!name) {
            return;
        }
        let url = GameConsts.ResUrl.music + name;
        c2f.audio.playBgmURL(url, cb);
    }

    /** 播放音效 */
    static playEffect(name: string) {
        if (!name) {
            return;
        }
        let url = GameConsts.ResUrl.soundEft + name;
        c2f.audio.playSfxURL(url);
    }

    static setItemNameWithInfo(txtLabel: cc.Label, txtName: string, quality: number, applyColor: boolean = true) {
        txtLabel.string = txtName;
        if (applyColor) {
            let shaderLabel = txtLabel.node.getComponent('ShaderArtLabel');
            if (shaderLabel) {
                let doubClr = GameConsts.QualityDoubClr[quality];
                if (doubClr) {
                    let clrTmp = cc.color(0, 0, 0);
                    shaderLabel.gradient = 2;
                    shaderLabel.color1 = clrTmp.fromHEX(doubClr[0]).clone();
                    shaderLabel.color2 = clrTmp.fromHEX(doubClr[1]).clone();
                } else {
                    shaderLabel.gradient = 1;
                    shaderLabel.color1 = cc.color(0, 0, 0).fromHEX(GameConsts.QualityColor[quality]);
                }
            } else {
                txtLabel.node.color = txtLabel.node.color.fromHEX(GameConsts.QualityColor[quality]);
            }
        }
    }

    /** 逐字显示文本 */
    static showTxtBySingleWord(txt: cc.Label, str: string, totalTime: number, cb: Function) {
        let len = str.length;
        let eachTime = totalTime / len;
        let idx = 0;

        cc.Tween.stopAllByTarget(txt.node);
        let twSub1 = cc.tween(txt.node).call(() => {
            if (idx == len - 1) {
                cc.Tween.stopAllByTarget(txt.node);
                cb && cb();
            }
            txt.string = str.slice(0, idx + 1);
            idx++;
        });
        let twSub2 = cc.tween(txt.node).delay(eachTime);
        cc.tween(txt.node).sequence(twSub1, twSub2).repeatForever().start();
    }

    /** 逐字显示富文本 */
    static showRichTxtWithSingleWord(richTxt: cc.RichText, str: string, interDur: number, cb: Function) {
        const regex = /<.+?\/?>/g; // 匹配尖括号标签
        const matchArr = str.match(regex);
        const specialChar = '│';
        const replaceStr = str.replace(regex, specialChar); // 标签数组
        const textArr: string[] = replaceStr.split(specialChar); // 文字数组
        const strArr: string[] = []; // 存放处理过的文字数组
        let paraNum = 0; // 待替换参数个数
        for (let text of textArr) {
            // 非空字符替换成类似 $[0-n] 参数
            if (text !== '') {
                text = `$[${paraNum}]`;
                paraNum += 1;
            }
            strArr.push(text);
        }
        let templetStr: string = strArr.join(specialChar); // 数组转成待替换字符串
        for (let index = 0; index < textArr.length; index++) {
            // 转换代替换字符串之后, 删除文字数组多余空字符
            if (textArr[index] === '') {
                textArr.splice(index, 1);
                index = index - 1;
            }
        }
        while (templetStr.search(specialChar) !== -1) {
            // 数组转成的字符串原本 '特殊字符' 位置都是富文本标签的位置, 替换回标签
            if (matchArr[0]) {
                templetStr = templetStr.replace(specialChar, matchArr[0].toString());
                matchArr.splice(0, 1);
            } else {
                templetStr = templetStr.replace(specialChar, ''); // 空字符串替换,防止死循环
                console.warn('matchArr not enough');
            }
        }
        const lastStrArr: string[] = []; // 转换后富文本数组
        const arrayParm: string[] = new Array(paraNum).fill(''); // 替换参数数组
        for (let i = 0; i < textArr.length; i++) {
            for (const text of textArr[i]) {
                arrayParm[i] = arrayParm[i] + text;
                let replaceStr1 = templetStr;
                for (let index = 0; index < paraNum; index++) {
                    replaceStr1 = replaceStr1.replace(`$[${index}]`, arrayParm[index]);
                }
                lastStrArr.push(replaceStr1);
            }
        }

        let len = lastStrArr.length;
        let idx = 0;
        cc.Tween.stopAllByTarget(richTxt.node);
        let twSub1 = cc.tween(richTxt.node).call(() => {
            if (idx >= len - 1) {
                richTxt.string = str;
                cc.Tween.stopAllByTarget(richTxt.node);
                cb && cb();
            } else {
                richTxt.string = lastStrArr[idx];
                idx++;
            }
        });
        let twSub2 = cc.tween(richTxt.node).delay(interDur);
        cc.tween(richTxt.node).sequence(twSub1, twSub2).repeatForever().start();
    }

    /** 滚动显示数字
     * cbEve  每一次刷新的回调
     */
    static showScrollNum(txt: cc.Label | cc.RichText, dstNum: number, beginNum: number, duration: number, cb: Function, cbEve?: Function) {
        cc.Tween.stopAllByTarget(txt.node);
        let count = dstNum - beginNum;
        if (count == 0) {
            txt.string = dstNum.toString();
        } else {
            let step = 1;
            let minEach = 1 / cc.game.getFrameRate();
            let totalCount = duration / minEach;
            step = count / totalCount;
            // let step = 1;
            // const minEach = 1 / cc.game.getFrameRate();
            // let eachTime = duration / count;
            // if (eachTime < minEach) {
            //     step = Math.ceil(minEach / eachTime);
            //     eachTime = minEach;
            // }
            let curNum = beginNum;
            let twSub1 = cc.tween(txt.node).call(() => {
                if (curNum >= dstNum) {
                    curNum = dstNum;
                    cc.Tween.stopAllByTarget(txt.node);
                    cb && cb();
                }
                if (cbEve) {
                    cbEve(Math.ceil(curNum));
                } else {
                    txt.string = Math.ceil(curNum).toString();
                }
                curNum += step;
            });
            let twSub2 = cc.tween(txt.node).delay(0);
            cc.tween(txt.node).sequence(twSub1, twSub2).repeatForever().start();
        }
    }

    /** 给richText加上黑色描边 */
    static formatRichTextOutline(txt: string, width: number = 2) {
        return `<outline color=#000000 width=${width}>${txt}</outline>`;
    }

    /** 给richText加上带颜色描边 */
    static formatRichTextOutlineWithColor(txt: string, color: string, width: number = 2) {
        return `<outline color=${color} width=${width}>${txt}</outline>`;
    }

    /** 自旋转动画 */
    static playRotateEfx(node: cc.Node, onceDur: number = 5) {
        cc.Tween.stopAllByTarget(node);
        cc.tween(node).by(onceDur, { angle: -360 }).repeatForever().start();
    }

    /** 呼吸动画 */
    static playBreatheEfx(node: cc.Node, scale: number, play: boolean) {
        cc.Tween.stopAllByTarget(node);
        if (play) {
            let twSub1 = cc.tween(node).by(1, { scaleX: scale, scaleY: scale });
            let twSub2 = cc.tween(node).by(0.8, { scaleX: -scale, scaleY: -scale });
            let twsub3 = cc.tween(node).delay(0.5);
            cc.tween(node).sequence(twSub1, twSub2, twsub3).repeatForever().start();
        }
    }

    /** 获取动作打击次数 */
    static getHitTimesByInfo(spineFile: string, actionName: string) {
        let totalHitCnt = 0;
        const allConf = szg.cfg.getCfgData('spineCount');
        const spineConf = allConf[spineFile];
        if (spineConf && spineConf[actionName]) {
            const acts = spineConf[actionName].act;
            if (acts) {
                for (let oneAct of acts) {
                    for (let oneBlt of oneAct) {
                        let hitCnt = 0;
                        const efxConf = allConf[oneBlt];
                        if (efxConf && efxConf.play && efxConf.play.hitCnt) {
                            hitCnt = efxConf.play.hitCnt;
                        }
                        totalHitCnt += hitCnt;
                    }
                }
            } else {
                totalHitCnt = spineConf[actionName].hitCnt;
            }
        }
        return totalHitCnt;
    }

    /** 处理技能文本颜色 */
    static getskillDes(skillDes: string, isActive: boolean) {
        let colorStr = isActive ? '<color=#40953c>' : '<color=#B77474>';
        return this.getStrReplace(skillDes, colorStr);
    }

    /** 处理技能文本颜色 */
    static getStrReplace(skillDes: string, colorStr: string) {
        skillDes = skillDes.replace(/<color=/gi, colorStr);
        for (let i = 0; i < 6; i++) {
            skillDes = skillDes.replace('{' + i + '}>', '');
        }
        return skillDes;
    }

    /**筛选敏感文本   */
    static filterSensitiveWords(text: string): boolean {
        let sensitiveWords: string[] = [];
        for (let c = 21000; c < 21999; c++) {
            let itemStr = c2f.language.words(c.toString());
            if (itemStr && itemStr != '' && !Number(itemStr)) {
                sensitiveWords.push(itemStr);
            }
        }
        for (let word of sensitiveWords) {
            if (text.includes(word)) {
                return true;
            }
        }
        return false;
    }
    /**筛选特殊字符文本 */
    static filterSpecialCharacters(input: string): boolean {
        let str = input;
        let strTemp = this.filterChineseCharacters(str);
        let specialCharacters = strTemp.match(/\W+/g);
        let ishave = false;
        if (specialCharacters && specialCharacters.length > 0) {
            ishave = true;
        }
        return ishave;
    }
    /**过滤掉所有中文 */
    static filterChineseCharacters(str: string): string {
        const chineseRegex = /[\u4e00-\u9fa5]/g;
        return str.replace(chineseRegex, '');
    }
    /**筛选出中英文 */
    static splitChineseAndEnglish(str: string): { chinese: string; english: string } {
        const chineseRegex = /[\u4e00-\u9fa5]/g;
        const englishRegex = /[a-zA-Z]/g;
        const chinese = str.match(chineseRegex);
        const english = str.match(englishRegex);
        return {
            chinese: chinese ? chinese.join('') : '',
            english: english ? english.join('') : '',
        };
    }

    /** 显示文件中的长文本 */
    static showLongTxtByFile(title: string, bundle: GameConsts.Bundle, fileUrl: string) {
        c2f.res.load(bundle, fileUrl, cc.TextAsset, (err: Error | null, asset: cc.TextAsset) => {
            if (err) {
                cc.error(err.message);
            } else {
                let { EntranceUI } = require('EntranceView');
                c2f.gui.open(EntranceUI.LongTxtDialog, { content: asset.text, title: title });
            }
            c2f.res.release(fileUrl, cc.TextAsset, bundle);
        });
    }

    /** 设置带天数的倒计时(省略模式):
     * eg. >1天： dd天hh:mm:ss
     * eg. <1天 | <1分钟: ss
     *          | <1小时: mm:ss
     *          | >1小时: hh:mm:ss
     */
    static setCutdownWithDayMini(comp: cc.Component, restDur: number, endCb: () => void = null, txtFormat: string = null) {
        let cutDownComp = comp.getComponent('CountdownLabel');
        if (cutDownComp) {
            let dayStr = '%{d}' + c2f.language.words('2504') + '%{hh}:%{mm}:%{mm}';
            cutDownComp.startCountdown(
                restDur,
                {
                    S: '%{ss}',
                    M: '%{mm}:%{ss}',
                    H: '%{hh}:%{mm}:%{ss}',
                    D: dayStr,
                },
                txtFormat,
                null,
                endCb
            );
        }
    }

    /** 设置带天数的倒计时(固定模式)
     * eg. >1天：dd天hh:mm
     * eg. <1天: hh:mm:ss
     */
    static setCutdownWithDayFixed(comp: cc.Component, restDur: number, endCb: () => void = null, txtFormat: string = null) {
        let cutDownComp = comp.getComponent('CountdownLabel');
        if (cutDownComp) {
            let hms = '%{hh}:%{mm}:%{ss}';
            let dayStr = '%{d}' + c2f.language.words('2504') + '%{hh}:%{mm}';
            cutDownComp.startCountdown(
                restDur,
                {
                    S: hms,
                    M: hms,
                    H: hms,
                    D: dayStr,
                },
                txtFormat,
                null,
                endCb
            );
        }
    }

    /** 艺术字标题设置: eg. 七日狂欢|#925C41|#FFEFA6|#FBFDF4*/
    static setShaderArtLabelString(label: cc.Component, title: string) {
        let artLabel = label.getComponent('ShaderArtLabel');
        if (artLabel) {
            let subs = title.split('|');
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
    }

    /** 播放UI特效 */
    static playUIEffect(skeleton: sp.Skeleton, efxName: string, action: string, isLoop: boolean, evtCb: Function) {
        skeleton.setEventListener((x: sp.spine.TrackEntry, ev: sp.spine.Event | number) => {
            if (typeof ev == 'number') {
                return;
            }
            if (ev.data.name == 'key') {
                evtCb && evtCb();
            } else if (ev.data.name == 'sound') {
                // UIHelper.playEffect(ev.stringValue);
            }
        });
        let url = GameConsts.ResUrl.uiEfx + `${efxName}/${efxName}`;
        c2f.utils.view.changeSkeletonData(skeleton, url, () => {
            if (skeleton && skeleton.isValid) {
                skeleton.setAnimation(0, action, isLoop);
            }
        });
    }

    static playSkeAni(skeItem: sp.Skeleton, aniName: string, callBack: Function = null, isloop: boolean = false, trackIndex: number = 0, timeScale: number = 1) {
        skeItem.node.active = true;
        // skeItem.clearTracks()
        skeItem.setAnimation(trackIndex, aniName, isloop);
        skeItem.timeScale = timeScale;
        skeItem.setCompleteListener((data) => {
            if (callBack) {
                callBack();
                callBack = null;
            }
        });
    }

    /**
     * n阶贝塞尔曲线
     * @param target
     * @param config 控制点
     * @param opts
     * @returns to(time, {}, ExternalFun.createBezier(node, config))
     */
    static createBezier(target: cc.Node, config: UIPa.MoveConfig, opts?: any) {
        opts = opts || Object.create(null);

        let factorial: Function = (n: number): number => {
            let result = 1;
            for (let i = 2; i <= n; i++) {
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
        let calculateBezierPoint: Function = (controlPoints: { x: number; y: number }[], progressRatio: number): { x: number; y: number } => {
            const n = controlPoints.length - 1;
            const t = progressRatio;

            const bernstein = (i: number, n: number, t: number): number => {
                const coefficient = factorial(n) / (factorial(i) * factorial(n - i));
                return coefficient * Math.pow(t, i) * Math.pow(1 - t, n - i);
            };

            const point: { x: number; y: number } = { x: 0, y: 0 };
            for (let i = 0; i <= n; i++) {
                const b = bernstein(i, n, t);
                point.x += controlPoints[i].x * b;
                point.y += controlPoints[i].y * b;
            }

            return point;
        };
        let points: { x: number; y: number }[] = [];
        if (config.controlPoint) {
            points.push(...config.controlPoint);
        }
        points.splice(0, 0, config.startPos);
        points.push(config.endPos);

        opts.onUpdate = (arg: cc.Vec3, ratio: number) => {
            let point: { x: number; y: number } = calculateBezierPoint(points, ratio);
            target.setPosition(point.x, point.y);
        };
        return opts;
    }

    /**
     * 以某点为圆心，生成圆周上等分点的坐标
     *
     * @param {number} r 半径
     * @param {cc.Vec2} pos 圆心坐标
     * @param {number} count 等分点数量
     * @param {number} [randomScope=80] 等分点的随机波动范围
     * @returns {cc.Vec2[]} 返回等分点坐标
     */
    static getCirclePoints(r: number, pos: cc.Vec3 | cc.Vec2, count: number, randomScope: number = 20): cc.Vec2[] {
        let points = [];
        let radians = (Math.PI / 180) * Math.round(360 / count);
        for (let i = 0; i < count; i++) {
            let x = pos.x + r * Math.sin(radians * i);
            let y = pos.y + r * Math.cos(radians * i);
            points.unshift(cc.v3(x + Math.random() * randomScope, y + Math.random() * randomScope, 0));
        }
        return points;
    }

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
    static getCirclePointsArr(r1: number, r2: number, pos: cc.Vec3 | cc.Vec2, count: number, randomScope: number = 20): cc.Vec3[][] {
        let points: cc.Vec3[][] = [];
        let radians = (Math.PI / 180) * Math.round(360 / count);
        for (let i = 0; i < count; i++) {
            let x1 = pos.x + r1 * Math.sin(radians * i);
            let y1 = pos.y + r1 * Math.cos(radians * i);
            let x2 = pos.x + r2 * Math.sin(radians * i);
            let y2 = pos.y + r2 * Math.cos(radians * i);
            let randomX = Math.random() * randomScope;
            let randomY = Math.random() * randomScope;
            let item = [cc.v3(x1 + randomX, y1 + randomY), cc.v3(x2 + randomX, y2 + randomY)];
            points.push(item);
        }
        return points;
    }

    /** 显示网络错误 */
    static showNetError(code: number) {
        if (cc.assetManager.getBundle(GameConsts.Bundle.mainPack)) {
            const isDisconnect = code == 99999 ? true : false;
            if (isDisconnect) {
                c2f.gui.notifyTxt('509');
                c2f.gui.hideLoading(true);
                return;
            }
        } else {
            const isDisconnect = code == 99999 ? true : false;
            if (isDisconnect) {
                c2f.gui.notifyTxt('509');
                c2f.gui.hideLoading(true);
                return;
            }
        }
        c2f.gui.notifyTxt(code.toString());
    }
}
