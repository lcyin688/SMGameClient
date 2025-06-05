export module C2FConst {
    /** 弹窗黑底背景透明度 */
    export const UIBgOpacity = 193;

    /** 框架包名 */
    export const fwBundleName = 'framework';
    /** 多语言包名前缀 */
    export const mulBundlePre = 'language_';

    /** 语言代码 */
    export enum LanguageKey {
        /** 中文 */
        zh = 'zh',
        /** 繁体 */
        tw = 'tw',
        /** 英语 */
        en = 'en',
        /** 印尼语 */
        id = 'id',
        /** 西班牙语-墨西哥 */
        es = 'es-mx',
        /** 泰语 */
        th = 'th',
        /** 葡萄牙语-巴西 */
        pt = 'pt-BR',
        /** 印地语 */
        hi = 'hi',
        /** 越南语 */
        vi = 'vi',
        /** 乌尔都语 */
        ur = 'ur',
        /** 孟加拉语 */
        bn = 'bn',
        /** 俄语 */
        ru = 'ru',
        /** 马来西亚 */
        ms = 'ms',
        /** 日语 */
        jp = 'jp',
        /** 韩语 */
        kr = 'kr',
    }

    /** 离线 */
    export const NetErrOffline = 99999;

    /** 本地帧率设置 */
    export const localFrameSet = 'LocalFrameSet';
    /** 本地语言设置 */
    export const localLGSet = 'localLanguageSet';

    /** UI音乐·音效文件路径 */
    export const UIMusicPath = 'audio/music/';
    export const UIAudioPath = 'audio/effect/';

    /** UI特效 */
    export enum UIAudioID {
        'unknown' = 0,
        'refresh' = 1,
        'upgrade' = 2,
        'building' = 3,
        'tabButton' = 4,
        'close' = 5,
        'floor' = 6,
        'revive' = 7,

        'common' = 100,
        'victory' = 101,
        'lose' = 102,
        'success' = 103,
        'awards' = 104,
        'ding' = 105,
        'popView' = 106,
    }

    /** 关闭返回按钮名称列表 */
    export const closeBtnNames = ['backBtn', 'btnClose', 'btnBack', 'btnReturn'];

    /** UI背景音乐配置 */
    export const UIBgmNames: { [key: string]: string } = {
        GodsCompeteMain: 'bgm6',
        SpaceTimeMain: 'bgm7',
        MindTrainMain: 'bgm8',
        MysteryMain: 'bgm9',
        ArenaEnterMain: 'bgm10',
        ClimbingTowerMain: 'bgm11',
    };

    /** UI弹窗音效配置 */
    export const UIViewEftName: { [key: string]: string } = {
        GetReward: 'awards',
        PromptSimple: '',
        PromptDialog: '',
        EquipRefineSuccess: 'awards',
        StepUpSuccess: 'awards',
        UpStarSuccess: 'awards',
    };
}
