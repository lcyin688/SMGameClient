/** 游戏事件常量定义：
 * 
 */
export namespace EventName {
    /** 事件名字 */
    export enum EName {
        /** 穿戴装备成功刷新装备 */
        reflashEQ = 'QINGYU_RFLASHEQ',
        /** 前往分解分页 */
        GO_EQUIPDECOMPOSE = 'go_equipdecompose',
        /** 刷新升星数据 */
        reflashStarUpView = 'REFLASHSTARUPVIEW',
        /** 升星成功界面 */
        starUpSuccess = 'STARUPSUCCESS',
        /** 关闭升星成功界面 */
        closeStarUpSuccess = 'CLOSESTARUPSUCCESS',
        /** 英雄重生回调 */
        heroReborn = 'HEROREBORN',
        /** 显隐UI */
        changUIVisible = 'CHANGE_UI_VISIBLE',
        /** 切换主页页签 */
        SwitchHomeTab = 'SWITCH_HOME_TAB',
        /** 主页页签切换 */
        onHomeTabSwitched = 'ON_HOME_TAB_SWITCHED',
        /** 竞技场战斗结束 */
        arenaBattleResult = 'ARENABATTLERESULT',
        /** 仙界斗法战斗结束 */
        fairyLandBattleResult = 'FAIRYLANDBATTLERESULT',
        /** 仙帝争锋战斗结束 */
        fairyLandGodBattleResult = 'FAIRYLANGODDBATTLERESULT',
        /** 武神百炼竞技场战斗结束 */
        arenaChamBattleResult = 'ARENACHAMBATTLERESULT',
        /** 公会友谊赛战斗结束 */
        guildMathBattleResult = 'GUILDMATHBATTLERESULT',
        /** 点击职业 */
        onClickjobIcon = 'ONCLICKJOBICON',
        /** 点击种族 */
        onClickcamp = 'ONCLICKCAMP',
        /**英雄详情跳转 */
        heroDetailsSubBtnClicked = 'HERODETAILSSUBBTNCLICKED',
        /** 神秘宝地·到一下层了 */
        mysteryToNext = 'UIEvent_MYSTERY_TONEXT',
        /** 神秘宝地·事件完成 */
        mysteryEventDone = 'UIEvent_MYSTERY_EVTDONE',
        /** 新手引导点击事件 */
        guideClick = 'GUIDE_CLICK',
        /** 引导窗口展示 */
        guideToView = 'GUIDE_VIEW_SHOW',
        /** 精品好礼banner */
        setbannerIconBG = 'SETBANNERICONBG',
        /** 关闭竞技场结算界面 */
        closeArenaBatResult = 'CLOSEARENABATRESULT',
        /** 任务完成提示 */
        updataTaskTips = 'UPDATATASKTIPS',
        /** 主线自动战斗提示 */
        updataMainAuto = 'UPDATAMAINAUTO',
        /** 主塔自动战斗提示 */
        updataMainTowerAuto = 'UPDATAMAINTOWERAUTO',
        /**设置快速升级按钮 */
        setHideQuickLvUp = "SETHIDEQUICKLVUP",
    }
}
