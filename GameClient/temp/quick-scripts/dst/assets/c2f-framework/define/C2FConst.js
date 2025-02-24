
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/define/C2FConst.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2RlZmluZS9DMkZDb25zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFjLFFBQVEsQ0FrRnJCO0FBbEZELFdBQWMsUUFBUTtJQUVsQixnQkFBZ0I7SUFDSCxvQkFBVyxHQUFHLEdBQUcsQ0FBQztJQUUvQixXQUFXO0lBQ0UscUJBQVksR0FBRyxXQUFXLENBQUM7SUFDeEMsY0FBYztJQUNELHFCQUFZLEdBQUcsV0FBVyxDQUFDO0lBRXhDLE9BQU87SUFDUCxJQUFZLFdBVVg7SUFWRCxXQUFZLFdBQVc7UUFDbkIsd0JBQVMsQ0FBQTtRQUNULHdCQUFTLENBQUE7UUFDVCx3QkFBUyxDQUFBO1FBQ1Qsd0JBQVMsQ0FBQTtRQUNULHdCQUFTLENBQUE7UUFDVCx3QkFBUyxDQUFBO1FBQ1Qsd0JBQVMsQ0FBQTtRQUNULHdCQUFTLENBQUE7UUFDVCx3QkFBUyxDQUFBO0lBQ2IsQ0FBQyxFQVZXLFdBQVcsR0FBWCxvQkFBVyxLQUFYLG9CQUFXLFFBVXRCO0lBRUQsU0FBUztJQUNJLHNCQUFhLEdBQUcsS0FBSyxDQUFDO0lBRW5DLGFBQWE7SUFDQSxzQkFBYSxHQUFHLGVBQWUsQ0FBQztJQUM3QyxhQUFhO0lBQ0EsbUJBQVUsR0FBRyxrQkFBa0IsQ0FBQztJQUU3QyxrQkFBa0I7SUFDTCxvQkFBVyxHQUFHLGNBQWMsQ0FBQztJQUM3QixvQkFBVyxHQUFHLGVBQWUsQ0FBQztJQUUzQyxXQUFXO0lBQ1gsSUFBWSxTQWlCWDtJQWpCRCxXQUFZLFNBQVM7UUFDakIsK0NBQWEsQ0FBQTtRQUNiLCtDQUFhLENBQUE7UUFDYiwrQ0FBYSxDQUFBO1FBQ2IsaURBQWMsQ0FBQTtRQUNkLG1EQUFlLENBQUE7UUFDZiwyQ0FBVyxDQUFBO1FBQ1gsMkNBQVcsQ0FBQTtRQUNYLDZDQUFZLENBQUE7UUFFWiwrQ0FBYyxDQUFBO1FBQ2QsaURBQWUsQ0FBQTtRQUNmLDJDQUFZLENBQUE7UUFDWixpREFBZSxDQUFBO1FBQ2YsK0NBQWMsQ0FBQTtRQUNkLDJDQUFZLENBQUE7UUFDWixpREFBZSxDQUFBO0lBQ25CLENBQUMsRUFqQlcsU0FBUyxHQUFULGtCQUFTLEtBQVQsa0JBQVMsUUFpQnBCO0lBSUQsaUJBQWlCO0lBQ0osc0JBQWEsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRTdFLGVBQWU7SUFDRixtQkFBVSxHQUE4QjtRQUNqRCxpQkFBaUIsRUFBRSxNQUFNO1FBQ3pCLGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLGFBQWEsRUFBRSxNQUFNO1FBQ3JCLGdCQUFnQixFQUFFLE9BQU87UUFDekIsbUJBQW1CLEVBQUUsT0FBTztLQUMvQixDQUFBO0lBRUQsZUFBZTtJQUNGLHNCQUFhLEdBQThCO1FBQ3BELFdBQVcsRUFBRSxRQUFRO1FBQ3JCLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLG9CQUFvQixFQUFFLFFBQVE7UUFDOUIsZUFBZSxFQUFFLFFBQVE7UUFDekIsZUFBZSxFQUFFLFFBQVE7S0FFNUIsQ0FBQTtBQUdMLENBQUMsRUFsRmEsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFrRnJCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IG1vZHVsZSBDMkZDb25zdCB7XG5cbiAgICAvKiog5by556qX6buR5bqV6IOM5pmv6YCP5piO5bqmICovXG4gICAgZXhwb3J0IGNvbnN0IFVJQmdPcGFjaXR5ID0gMTkzO1xuXG4gICAgLyoqIOahhuaetuWMheWQjSAqL1xuICAgIGV4cG9ydCBjb25zdCBmd0J1bmRsZU5hbWUgPSAnZnJhbWV3b3JrJztcbiAgICAvKiog5aSa6K+t6KiA5YyF5ZCN5YmN57yAICovXG4gICAgZXhwb3J0IGNvbnN0IG11bEJ1bmRsZVByZSA9ICdsYW5ndWFnZV8nO1xuXG4gICAgLyoqICAqL1xuICAgIGV4cG9ydCBlbnVtIExhbmd1YWdlS2V5IHtcbiAgICAgICAgemggPSAnY24nLCAgLy/kuK3mlodcbiAgICAgICAgZW4gPSAndXMnLCAgLy/oi7Hor61cbiAgICAgICAgcnUgPSAncnUnLCAgLy/kv4Tor61cbiAgICAgICAgdGggPSAndGgnLCAgLy/ms7Dor61cbiAgICAgICAgdHcgPSAndHcnLCAgLy/nuYHkvZNcbiAgICAgICAgbXMgPSAnbXMnLCAgLy/pqazmnaXopb/kuppcbiAgICAgICAgdmkgPSAndmknLCAgLy/otorljZfor61cbiAgICAgICAganAgPSAnanAnLCAgLy/ml6Xor61cbiAgICAgICAga3IgPSAna3InLCAgLy/pn6nor61cbiAgICB9XG5cbiAgICAvKiog56a757q/ICovXG4gICAgZXhwb3J0IGNvbnN0IE5ldEVyck9mZmxpbmUgPSA5OTk5OTtcblxuICAgIC8qKiDmnKzlnLDluKfnjoforr7nva4gKi9cbiAgICBleHBvcnQgY29uc3QgbG9jYWxGcmFtZVNldCA9ICdMb2NhbEZyYW1lU2V0JztcbiAgICAvKiog5pys5Zyw6K+t6KiA6K6+572uICovXG4gICAgZXhwb3J0IGNvbnN0IGxvY2FsTEdTZXQgPSAnbG9jYWxMYW5ndWFnZVNldCc7XG5cbiAgICAvKiogVUnpn7PkuZDCt+mfs+aViOaWh+S7tui3r+W+hCAqL1xuICAgIGV4cG9ydCBjb25zdCBVSU11c2ljUGF0aCA9ICdhdWRpby9tdXNpYy8nO1xuICAgIGV4cG9ydCBjb25zdCBVSUF1ZGlvUGF0aCA9ICdhdWRpby9lZmZlY3QvJztcblxuICAgIC8qKiBVSeeJueaViCAqL1xuICAgIGV4cG9ydCBlbnVtIFVJQXVkaW9JRCB7XG4gICAgICAgICd1bmtub3duJyA9IDAsXG4gICAgICAgICdyZWZyZXNoJyA9IDEsXG4gICAgICAgICd1cGdyYWRlJyA9IDIsXG4gICAgICAgICdidWlsZGluZycgPSAzLFxuICAgICAgICAndGFiQnV0dG9uJyA9IDQsXG4gICAgICAgICdjbG9zZScgPSA1LFxuICAgICAgICAnZmxvb3InID0gNixcbiAgICAgICAgJ3Jldml2ZScgPSA3LFxuXG4gICAgICAgICdjb21tb24nID0gMTAwLFxuICAgICAgICAndmljdG9yeScgPSAxMDEsXG4gICAgICAgICdsb3NlJyA9IDEwMixcbiAgICAgICAgJ3N1Y2Nlc3MnID0gMTAzLFxuICAgICAgICAnYXdhcmRzJyA9IDEwNCxcbiAgICAgICAgJ2RpbmcnID0gMTA1LFxuICAgICAgICAncG9wVmlldycgPSAxMDYsXG4gICAgfVxuXG5cblxuICAgIC8qKiDlhbPpl63ov5Tlm57mjInpkq7lkI3np7DliJfooaggKi9cbiAgICBleHBvcnQgY29uc3QgY2xvc2VCdG5OYW1lcyA9IFsnYmFja0J0bicsICdidG5DbG9zZScsICdidG5CYWNrJywgJ2J0blJldHVybiddO1xuXG4gICAgLyoqIFVJ6IOM5pmv6Z+z5LmQ6YWN572uICovXG4gICAgZXhwb3J0IGNvbnN0IFVJQmdtTmFtZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gICAgICAgICdHb2RzQ29tcGV0ZU1haW4nOiAnYmdtNicsXG4gICAgICAgICdTcGFjZVRpbWVNYWluJzogJ2JnbTcnLFxuICAgICAgICAnTWluZFRyYWluTWFpbic6ICdiZ204JyxcbiAgICAgICAgJ015c3RlcnlNYWluJzogJ2JnbTknLFxuICAgICAgICAnQXJlbmFFbnRlck1haW4nOiAnYmdtMTAnLFxuICAgICAgICAnQ2xpbWJpbmdUb3dlck1haW4nOiAnYmdtMTEnLFxuICAgIH1cblxuICAgIC8qKiBVSeW8ueeql+mfs+aViOmFjee9riAqL1xuICAgIGV4cG9ydCBjb25zdCBVSVZpZXdFZnROYW1lOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xuICAgICAgICAnR2V0UmV3YXJkJzogJ2F3YXJkcycsXG4gICAgICAgICdQcm9tcHRTaW1wbGUnOiAnJyxcbiAgICAgICAgJ1Byb21wdERpYWxvZyc6ICcnLFxuICAgICAgICAnRXF1aXBSZWZpbmVTdWNjZXNzJzogJ2F3YXJkcycsXG4gICAgICAgICdTdGVwVXBTdWNjZXNzJzogJ2F3YXJkcycsXG4gICAgICAgICdVcFN0YXJTdWNjZXNzJzogJ2F3YXJkcycsXG5cbiAgICB9XG5cblxufSJdfQ==