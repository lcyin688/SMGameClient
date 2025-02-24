"use strict";
cc._RF.push(module, '08bc721PlJAfaULkbdY8ALI', 'C2FConst');
// c2f-framework/define/C2FConst.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C2FConst = void 0;
var C2FConst;
(function (C2FConst) {
    /** 弹窗黑底背景透明度 */
    C2FConst.UIBgOpacity = 193;
    /** 框架包名 */
    C2FConst.fwBundleName = 'framework';
    /** 多语言包名前缀 */
    C2FConst.mulBundlePre = 'language_';
    /**  */
    var LanguageKey;
    (function (LanguageKey) {
        LanguageKey["zh"] = "cn";
        LanguageKey["en"] = "us";
        LanguageKey["ru"] = "ru";
        LanguageKey["th"] = "th";
        LanguageKey["tw"] = "tw";
        LanguageKey["ms"] = "ms";
        LanguageKey["vi"] = "vi";
        LanguageKey["jp"] = "jp";
        LanguageKey["kr"] = "kr";
    })(LanguageKey = C2FConst.LanguageKey || (C2FConst.LanguageKey = {}));
    /** 离线 */
    C2FConst.NetErrOffline = 99999;
    /** 本地帧率设置 */
    C2FConst.localFrameSet = 'LocalFrameSet';
    /** 本地语言设置 */
    C2FConst.localLGSet = 'localLanguageSet';
    /** UI音乐·音效文件路径 */
    C2FConst.UIMusicPath = 'audio/music/';
    C2FConst.UIAudioPath = 'audio/effect/';
    /** UI特效 */
    var UIAudioID;
    (function (UIAudioID) {
        UIAudioID[UIAudioID["unknown"] = 0] = "unknown";
        UIAudioID[UIAudioID["refresh"] = 1] = "refresh";
        UIAudioID[UIAudioID["upgrade"] = 2] = "upgrade";
        UIAudioID[UIAudioID["building"] = 3] = "building";
        UIAudioID[UIAudioID["tabButton"] = 4] = "tabButton";
        UIAudioID[UIAudioID["close"] = 5] = "close";
        UIAudioID[UIAudioID["floor"] = 6] = "floor";
        UIAudioID[UIAudioID["revive"] = 7] = "revive";
        UIAudioID[UIAudioID["common"] = 100] = "common";
        UIAudioID[UIAudioID["victory"] = 101] = "victory";
        UIAudioID[UIAudioID["lose"] = 102] = "lose";
        UIAudioID[UIAudioID["success"] = 103] = "success";
        UIAudioID[UIAudioID["awards"] = 104] = "awards";
        UIAudioID[UIAudioID["ding"] = 105] = "ding";
        UIAudioID[UIAudioID["popView"] = 106] = "popView";
    })(UIAudioID = C2FConst.UIAudioID || (C2FConst.UIAudioID = {}));
    /** 关闭返回按钮名称列表 */
    C2FConst.closeBtnNames = ['backBtn', 'btnClose', 'btnBack', 'btnReturn'];
    /** UI背景音乐配置 */
    C2FConst.UIBgmNames = {
        'GodsCompeteMain': 'bgm6',
        'SpaceTimeMain': 'bgm7',
        'MindTrainMain': 'bgm8',
        'MysteryMain': 'bgm9',
        'ArenaEnterMain': 'bgm10',
        'ClimbingTowerMain': 'bgm11',
    };
    /** UI弹窗音效配置 */
    C2FConst.UIViewEftName = {
        'GetReward': 'awards',
        'PromptSimple': '',
        'PromptDialog': '',
        'EquipRefineSuccess': 'awards',
        'StepUpSuccess': 'awards',
        'UpStarSuccess': 'awards',
    };
})(C2FConst = exports.C2FConst || (exports.C2FConst = {}));

cc._RF.pop();