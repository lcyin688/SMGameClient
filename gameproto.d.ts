declare namespace msg {
    interface Id_Int {
        Id?: number
        N?: number
    }

    interface Id_Float {
        Id?: number
        N?: number
    }

    interface Id_Bool {
        Id?: number
        N?: boolean
    }

    interface Str_Int {
        Str?: string
        N?: number
    }

    interface Str_Float {
        Str?: string
        N?: number
    }

    interface Map_StrStr {
        K?: string
        V?: string
    }

    interface PosInfo {
        Pos?: number
        Seq?: number
    }

    // 阵容
    interface TeamInfo {
        Mod?: string
        Heroes?: PosInfo[]
    }

    // 英雄
    interface Hero {
        Seq?: number // 序号 (怪物seq=id*100+pos)
        Id?: number // 英雄Id
        Lv?: number // 等级
        Step?: number // 进阶
        Star?: number // 星级
        AtkPwr?: number // 战力
        CurSkin?: number // 当前皮肤
        Attr?: Id_Int[] // 属性
        Weapon?: number // 专属武器等级
    }

    // 装备
    interface Equip {
        Seq?: number // 序号
        Id?: number // 装备Id
        Slot?: number // 穿戴位置
        Lv?: number // 精炼等级
        GAttr?: number[] // 属性组
    }

    // 神兽
    interface Beast {
        Seq?: number
        Id?: number
        Star?: number
    }

    // 英雄信息
    interface HeroInfo {
        Hero?: Hero // 英雄基本信息
        Equips?: Equip[] // 装备
        Passive?: number[] // 额外被动
        DecHp?: number // 损血比例
        Pos?: number // 上阵位置
        Mod?: string // 队伍名
    }

    // 神兽信息
    interface BeastInfo {
        Beast?: Beast
        Pos?: number
    }

    // 玩家信息
    interface PlayerInfo {
        PlrId?: string // 玩家id
        Name?: string // 玩家名
        SvrId?: number // 服务器id
        Lv?: number // 等级
        AtkPwr?: number // 战力
        Vip?: number // vip等级
        GuildId?: string // 公会id
        GName?: string // 公会名
        Offline?: number // 上次离线时间(-1 表示在线)
        Stored?: number[] // 仓库(头像，头像框，称号)
    }

    interface PlayerInfoEx {
        Info?: PlayerInfo
        Hero?: HeroInfo[]
        Bsts?: BeastInfo[]
        Ex?: number[]
    }

    // 战报
    interface ReplayInfo {
        Atk?: PlayerInfoEx // 攻击方玩家信息
        Def?: PlayerInfoEx // 防守方玩家信息
        Ret?: number[] // 每场战斗的结果
        ReplayId?: number // 战报id
        Ts?: number // 战斗时间
    }

    // 公会信息
    interface GuildInfo {
        GldId?: string // 公会ID
        Name?: string // 公会名
        SvrId?: number // 服务器id
        Exp?: number // 经验(活跃度)
        Lv?: number // 等级
        Head?: number // 头像
        PlrId?: string // 会长ID
        Owner?: string // 会长名字
    }

    interface GuildInfoEx {
        Info?: GuildInfo
        Ex?: number[]
    }

    interface BIPlayer {
        Team?: number // 0进攻方1防守方
        Info?: PlayerInfo
    }

    interface BIMon {
        Team?: number // 队伍
        Pos?: number // 位置
        Seq?: number // 唯一id(怪物seq=id*100+pos)
        Id?: number // 怪物表id
        Step?: number // 进阶
        Star?: number // 星级
        Lv?: number // 等级
        Weapon?: number // 专属武器等级
        CurSkin?: number // 当前皮肤
        AtkPwr?: number // 战力
        Equips?: BIEquip[] // 装备
        Energy?: number // 初始能量
        Attr?: Id_Int[] // 初始属性
        Passive?: number[] // 初始被动
        DecHp?: number // 初始损血
    }

    interface BIEquip {
        Seq?: number // 唯一id
        Id?: number // 策划表id
        Slot?: number // 穿戴位置
    }

    interface BIBeast {
        Team?: number // 队伍
        Info?: BeastInfo
    }

    interface BInput {
        Module?: string // 战斗类型
        Plrs?: BIPlayer[] // 玩家信息
        Mons?: BIMon[] // 所有英雄
        Bsts?: BIBeast[] // 所有神兽
    }

    interface BResult {
        Ret?: number // 1攻击方胜2防守方胜3平局
        Seed?: number // 随机数种子
        Round?: number // 使用回合数
        TotalDamage?: number // 攻击方总伤害
        DecHp?: { [key: number]: number } // seq：掉血比例
    }

    interface CompanyHero {
        Seq?: number
        Id?: number // 工位id
        Hero?: number // 英雄id
        Star?: number // 星级
    }

    interface Ccy {
        Id?: number
        Val?: number
    }

    // 普通道具(货币,道具等)
    interface Item {
        Id?: number
        Num?: number
    }

    // Seq道具(英雄,装备等)
    interface SeqItem {
        Seq?: number
        Id?: number
    }

    // 域
    interface Field {
        Id?: number
        Val?: number
    }

    // 奖励
    interface Rewards {
        Items?: Item[] // 道具,货币等(不整合)
        Seqs?: SeqItem[] // 英雄,装备等
    }

    // 英雄
    interface BagHero {
        Hero?: Hero
        Lock?: boolean // 是否锁定
        InRes?: boolean // 是否在共鸣中
    }

    // 装备
    interface BagEquip {
        Equip?: Equip
        Lock?: boolean // 是否锁定
        HeroSeq?: number // 穿戴英雄Seq
    }

    // 神兽
    interface BagBeast {
        Beast?: Beast
        Lock?: boolean // 是否锁定
    }

    // 测试
    interface C_Test {
        J?: string
    }

    interface GS_Test_R {
        R?: string
        ErrorCode?: number
        MSGDATA?: C_Test
    }

    interface C_TestInt64 {
        Id?: number
    }

    interface GS_TestInt64_R {
        Id?: number
        ErrorCode?: number
        MSGDATA?: C_TestInt64
    }

    interface LoginData {
        Info?: PlayerInfo
        Exp?: number // 经验值
        CreateTs?: number // 角色创建时间
        IsNew?: boolean // 是否是新角色
        LoginIP?: string // 登录ip
        RedData?: RedData // 红点数据
        Bag?: BagData // 背包
        Fields?: FieldData // 域数据
        Counter?: CounterData // 计数器
        Bill?: Bill // 充值数据
        Achv?: Achv // 统计数据
        Misc?: Misc // 杂项数据
        TeamMgr?: TeamMgrData // 阵容管理
        MainStep?: MainStep // 主线关卡
        Collection?: Collection // 图鉴收藏
        Task?: Task // 任务
        Tower?: Tower // 爬塔
        DailyFb?: DailyFb // 资源副本
        Store?: Store // 仓库
        Asgard?: Asgard // 仙界斗法
        BeastHome?: BeastHome // 神兽之家
        RankPlr?: RankPlr // 排行榜个人数据
        SvrData?: SvrData // 服务器数据
        Welfare?: Welfare // 福利站
        Boutique?: Boutique // 精品好礼
        Vip?: Vip // vip
        Company?: Company // 公司
        DailyBill?: DailyBill // 每日充值
        Guild?: GuildLogin // 公会信息
        GldMatch?: GldMatch // 公会友谊赛
        Turntable?: Turntable[] // 祈愿
        TreasureChest?: TreasureChest // 免费宝箱
    }

    // 红点数据
    interface RedData {
        Arena?: ArenaRed // 竞技场
        ShopItem?: number[] // 商店
        Mails?: number[] // 邮件
        SpaceTime?: number[] // 灵能时空
        ArenaCham?: ArenaChamRed // 神武百炼
        Asgard?: AsgardRed // 仙界斗法
        AsgardGod?: AsgardGodRed // 仙帝争锋
        RankPlr?: RankPlrRed // 排行榜个人数据
        MindTrain?: MindTrainRed // 神魂试炼
        Explore?: ExploreRed // 派遣
        Friend?: FriendRed // 好友
        Eliminate?: EliminateRed // 消消乐
        Banquet?: BanquetRed // 宴会
        Temple?: boolean // 神殿
    }

    // 登录错误
    interface GS_LoginErr {
        ErrorCode?: number
    }

    // 玩家信息
    interface GS_LoginData {
        Data?: LoginData
    }

    // 时间同步
    interface C_TimeSync {
    }

    interface GS_TimeSync_R {
        Ts?: number
        ErrorCode?: number
        MSGDATA?: C_TimeSync
    }

    // 拉取登录信息
    interface C_GetLoginData {
    }

    interface GS_GetLoginData_R {
        Data?: LoginData
        ErrorCode?: number
        MSGDATA?: C_GetLoginData
    }

    // 报错信息
    interface C_ErrMsgInfo {
    }

    interface GS_ErrMsgInfo_R {
        Str?: string
        ErrorCode?: number
        MSGDATA?: C_ErrMsgInfo
    }

    // 升级奖励
    interface GS_PlayerUpdate_Lv {
        Level?: number // -1 表示无变化
        Exp?: number
        Rewards?: Rewards
    }

    // 战力变化
    interface GS_PlayerUpdate_AtkPower {
        Onlyone?: number
    }

    // 每日重置
    interface GS_PlayerDailyReset {
    }

    // 角色改名
    interface C_PlayerChangeName {
        Name?: string
    }

    interface GS_PlayerChangeName_R {
        ErrorCode?: number
        MSGDATA?: C_PlayerChangeName
    }

    // 拉取玩家信息
    interface C_PlayerInfo {
        PlrId?: string
        Mod?: string[] // 战斗模块
    }

    interface GS_PlayerInfo_R {
        PlrInfo?: PlayerInfo // 玩家信息
        Heroes?: HeroInfo[] // 阵容信息
        Beasts?: BeastInfo[] // 神兽信息
        ErrorCode?: number
        MSGDATA?: C_PlayerInfo
    }

    // 金币购买
    interface C_PlayerGoldBuy {
        Id?: number
    }

    interface GS_PlayerGoldBuy_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_PlayerGoldBuy
    }

    interface C_PlayerGoldBuyTs {
    }

    interface GS_PlayerGoldBuyTs_R {
        NextTs?: number
        ErrorCode?: number
        MSGDATA?: C_PlayerGoldBuyTs
    }

    // 玩家切磋
    interface C_PlayerFight {
        PlrId?: string
    }

    interface GS_PlayerFight_R {
        ErrorCode?: number
        MSGDATA?: C_PlayerFight
    }

    interface C_PlayerPvpInfo {
    }

    interface GS_PlayerPvpInfo_R {
        Arena?: Arena
        ArenaCham?: ArenaCham
        ArenaPeak?: ArenaPeak
        ErrorCode?: number
        MSGDATA?: C_PlayerPvpInfo
    }

    interface C_PlayerPvpInfo2 {
    }

    interface GS_PlayerPvpInfo2_R {
        Asgard?: Asgard
        AsgardGod?: AsgardGod
        ErrorCode?: number
        MSGDATA?: C_PlayerPvpInfo2
    }

    interface C_PlayerMiniInfo {
    }

    interface GS_PlayerMiniInfo_R {
        BanquetIdx?: number // 宴会排名
        Eliminate?: number // 消消乐积分
        ErrorCode?: number
        MSGDATA?: C_PlayerMiniInfo
    }

    // 背包数据
    interface BagData {
        Currency?: Ccy[] // 货币
        Items?: Item[] // 道具
        Heroes?: BagHero[] // 英雄
        Equips?: BagEquip[] // 装备
        Beasts?: BagBeast[] // 神兽
    }

    // 域数据
    interface FieldData {
        Fields?: Field[] // all
    }

    // 背包变化推送
    interface GS_BagUpdate {
        Currency?: Ccy[]
        Items?: Item[]
        Heroes?: BagHero[]
        HeroesDel?: number[]
        Equips?: BagEquip[]
        EquipsDel?: number[]
        Beasts?: BagBeast[]
        BeastsDel?: number[]
    }

    // 域变化推送
    interface GS_FieldUpdate {
        Fields?: Field[]
    }

    interface ItemUse {
        Id?: number // 使用道具id
        N?: number // 使用次数
        DstId?: number // 自选道具id
    }

    // 道具使用
    interface C_ItemUse {
        Items?: ItemUse[]
    }

    interface GS_ItemUse_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_ItemUse
    }

    // 道具购买
    interface C_ItemBuy {
        Id?: number // 道具id
        N?: number // 购买次数
    }

    interface GS_ItemBuy_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_ItemBuy
    }

    // 道具分解
    interface C_ItemDec {
        Items?: Id_Int[]
    }

    interface GS_ItemDec_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_ItemDec
    }

    interface HeroStarUp {
        Seq?: number
        Cost?: number[] // 消耗英雄seq
        Item?: Id_Int[] // 消耗道具
    }

    // 英雄变化
    interface GS_HeroUpdate {
        Repeated?: BagHero[]
    }

    // 英雄皮肤新增
    interface GS_HeroSkinNew {
        Id?: number
        Rewards?: Rewards
    }

    // 英雄升级
    interface C_HeroLevelUp {
        Seq?: number // 英雄seq
        Lv?: number // 升多少级
    }

    interface GS_HeroLevelUp_R {
        ErrorCode?: number
        MSGDATA?: C_HeroLevelUp
    }

    // 英雄进阶
    interface C_HeroStepUp {
        Seq?: number // 英雄seq
    }

    interface GS_HeroStepUp_R {
        ErrorCode?: number
        MSGDATA?: C_HeroStepUp
    }

    // 英雄升星
    interface C_HeroStarUp {
        Info?: HeroStarUp[]
    }

    interface GS_HeroStarUp_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_HeroStarUp
    }

    // 英雄锁定/解锁
    interface C_HeroLock {
        Seq?: number
        Lock?: boolean
    }

    interface GS_HeroLock_R {
        ErrorCode?: number
        MSGDATA?: C_HeroLock
    }

    // 英雄分解
    interface C_HeroDecompose {
        Seqs?: number[]
    }

    interface GS_HeroDecompose_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_HeroDecompose
    }

    // 英雄重生
    interface C_HeroReborn {
        Seq?: number[]
    }

    interface GS_HeroReborn_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_HeroReborn
    }

    // 英雄转换
    interface C_HeroChange {
        Seq?: number
    }

    interface GS_HeroChange_R {
        HeroChangeId?: number
        ErrorCode?: number
        MSGDATA?: C_HeroChange
    }

    // 英雄转换取消/确认
    interface C_HeroChangeApply {
        Apply?: boolean
    }

    interface GS_HeroChangeApply_R {
        ErrorCode?: number
        MSGDATA?: C_HeroChangeApply
    }

    // 英雄回退
    interface C_HeroBack {
        Seq?: number
    }

    interface GS_HeroBack_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_HeroBack
    }

    // 英雄专武升级
    interface C_HeroWeaponLvUp {
        Seq?: number
        Lv?: number // 升多少级
    }

    interface GS_HeroWeaponLvUp_R {
        ErrorCode?: number
        MSGDATA?: C_HeroWeaponLvUp
    }

    // 英雄专武重置
    interface C_HeroWeaponReset {
        Seqs?: number[]
    }

    interface GS_HeroWeaponReset_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_HeroWeaponReset
    }

    interface EquipDress {
        Seq?: number
        Slot?: number // 穿戴位置
    }

    // 装备信息更新
    interface GS_EquipUpdate {
        Repeated?: BagEquip[]
    }

    // 装备打造
    interface C_EquipCompose {
        Ids?: Id_Int[]
    }

    interface GS_EquipCompose_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_EquipCompose
    }

    // 装备分解
    interface C_EquipDecompose {
        Seqs?: number[]
    }

    interface GS_EquipDecompose_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_EquipDecompose
    }

    // 装备精炼
    interface C_EquipLvUp {
        Seq?: number
    }

    interface GS_EquipLvUp_R {
        ErrorCode?: number
        MSGDATA?: C_EquipLvUp
    }

    // 穿装备
    interface C_EquipDress {
        HeroSeq?: number
        Info?: EquipDress
    }

    interface GS_EquipDress_R {
        ErrorCode?: number
        MSGDATA?: C_EquipDress
    }

    // 脱装备
    interface C_EquipUndress {
        HeroSeq?: number
        Slot?: number
    }

    interface GS_EquipUndress_R {
        ErrorCode?: number
        MSGDATA?: C_EquipUndress
    }

    // 一键穿装备
    interface C_EquipDressQuick {
        HeroSeq?: number
        Info?: EquipDress[]
    }

    interface GS_EquipDressQuick_R {
        ErrorCode?: number
        MSGDATA?: C_EquipDressQuick
    }

    // 一键脱装备
    interface C_EquipUndressQuick {
        HeroSeq?: number
        Slots?: number[]
    }

    interface GS_EquipUndressQuick_R {
        ErrorCode?: number
        MSGDATA?: C_EquipUndressQuick
    }

    // 法宝强化
    interface C_TreasureLvUp {
        Seq?: number
    }

    interface GS_TreasureLvUp_R {
        ErrorCode?: number
        MSGDATA?: C_TreasureLvUp
    }

    // 法宝分解
    interface C_TreasureDecompose {
        Seqs?: number[]
    }

    interface GS_TreasureDecompose_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_TreasureDecompose
    }

    // 法宝洗练
    interface C_TreasureReroll {
        Seq?: number
        Lock?: number[]
    }

    interface GS_TreasureReroll_R {
        GAttr?: Id_Bool[]
        ErrorCode?: number
        MSGDATA?: C_TreasureReroll
    }

    // 法宝洗练确认
    interface C_TreasureRerollApply {
        Apply?: boolean
    }

    interface GS_TreasureRerollApply_R {
        ErrorCode?: number
        MSGDATA?: C_TreasureRerollApply
    }

    // 神兽升星
    interface C_BeastStar {
        Seq?: number
    }

    interface GS_BeastStar_R {
        ErrorCode?: number
        MSGDATA?: C_BeastStar
    }

    // 邮件
    interface Mail {
        Seq?: number // 唯一id
        Key?: number // 配置id  1为系统邮件
        Title?: string // 标题 (可能为空)
        Text?: string // 文本 (可能为空)
        Dict?: Map_StrStr[] // 邮件文本替换内容
        Rwd?: Id_Int[] // 奖励
        Flag?: number // 当前状态  0未读 1已读 2已领取
        Ts?: number // 发件时间
    }

    // 新邮件推送
    interface GS_MailNew {
        Key?: number
    }

    // 读邮件
    interface C_MailRead {
        Seqs?: number[]
    }

    interface GS_MailRead_R {
        ErrorCode?: number
        MSGDATA?: C_MailRead
    }

    // 删邮件
    interface C_MailDel {
        Seqs?: number[]
    }

    interface GS_MailDel_R {
        ErrorCode?: number
        MSGDATA?: C_MailDel
    }

    // 领取附件
    interface C_MailTake {
        Seqs?: number[]
    }

    interface GS_MailTake_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_MailTake
    }

    // 邮箱列表
    interface C_MailInfo {
    }

    interface GS_MailInfo_R {
        Mails?: Mail[]
        ErrorCode?: number
        MSGDATA?: C_MailInfo
    }

    // 统计数据
    interface Achv {
        Items?: Id_Int[] // 生涯统计
        Daily?: Id_Int[] // 每日统计
        Weekly?: Id_Int[] // 每周统计
    }

    // 通知: 进度变化
    interface GS_AchvAdd {
        Repeated?: Id_Int[]
    }

    // 通知: 日常进度变化
    interface GS_AchvAddDaily {
        Repeated?: Id_Int[]
    }

    // 通知: 周常进度变化
    interface GS_AchvAddWeekly {
        Repeated?: Id_Int[]
    }

    // 充值卡
    interface BillCard {
        TypeId?: number
        ProdId?: number
        EndTs?: number
        RewardTs?: number
    }

    // 充值数据
    interface Bill {
        BuyCnt?: Id_Int[] // 总计充值次数
        PriceDaily?: number // 今日充值金额数
    }

    // 推送：充值配置已变更
    interface GS_BillConfChange {
    }

    // 推送：充值
    interface GS_BillDone {
        ProdId?: number // 充值id
    }

    // 拉取充值配置
    interface C_BillConfGet {
        PlatId?: string
    }

    interface GS_BillConfGet_R {
        Data?: any
        ErrorCode?: number
        MSGDATA?: C_BillConfGet
    }

    // 获取常规购买信息
    interface C_BillNormalInfo {
    }

    interface GS_BillNormalInfo_R {
        BuyCnt?: Id_Int[]
        ErrorCode?: number
        MSGDATA?: C_BillNormalInfo
    }

    // 伪充值
    interface C_BillFakeDiamond {
        Id?: number
    }

    interface GS_BillFakeDiamond_R {
        ErrorCode?: number
        MSGDATA?: C_BillFakeDiamond
    }

    // 代金券充值
    interface C_BillVouchers {
        Id?: number
    }

    interface GS_BillVouchers_R {
        ErrorCode?: number
        MSGDATA?: C_BillVouchers
    }

    interface GS_UnlockConf {
        Data?: any
    }

    interface GS_LampMsg {
        Id?: number // 配置id
        Text?: string // 文本内容 (可能为空)
        Dict?: Map_StrStr[] // 文本替换内容
    }

    // 计数器
    interface CounterData {
        LastTs?: Id_Int[] // 上次恢复时间
    }

    // 推送计数器恢复时间
    interface GS_CounterUpdateTs {
        Repeated?: Id_Int[]
    }

    // 要求计算计数器恢复
    interface C_CounterRecover {
        Id?: number
    }

    interface GS_CounterRecover_R {
        ErrorCode?: number
        MSGDATA?: C_CounterRecover
    }

    // 购买计数器
    interface C_CounterBuy {
        Id?: number
    }

    interface GS_CounterBuy_R {
        ErrorCode?: number
        MSGDATA?: C_CounterBuy
    }

    interface RankData {
        RankId?: number // 排行榜id
        Recs?: RankRec[] // 排名列表
        Idx?: number // 自己的名次
        Score?: number // 自己的积分
    }

    interface RankRec {
        Plr?: PlayerInfo
        Gld?: GuildInfo
        Idx?: number
        Score?: number
    }

    interface RankTop {
        RankId?: number // 排行榜id
        Top?: RankRec // 第一名数据
    }

    // 玩家个人数据
    interface RankPlr {
        Rwd?: number[] // 已领取奖励
        Mobai?: number[] // 已膜拜的 [排行榜id*10000+名次]
    }

    interface RankPlrRed {
        Data?: Id_Int[] // 排行榜id:第一名积分
    }

    // 排行榜刷新推送
    interface GS_RankUpdate {
    }

    // 获取排名区间，从第Begin名到第End名
    interface C_RankGetRegion {
        RankId?: number
        Begin?: number
        End?: number
    }

    interface GS_RankGetRegion_R {
        RankData?: RankData
        ErrorCode?: number
        MSGDATA?: C_RankGetRegion
    }

    // 膜拜
    interface C_RankMobai {
        Ids?: number[] // [排行榜id*10000+名次]
    }

    interface GS_RankMobai_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_RankMobai
    }

    // 排行榜第一的
    interface C_RankTop {
    }

    interface GS_RankTop_R {
        Top?: RankTop[]
        ErrorCode?: number
        MSGDATA?: C_RankTop
    }

    // 排行榜领奖
    interface C_RankRwd {
        Ids?: number[]
    }

    interface GS_RankRwd_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_RankRwd
    }

    // 聊天消息
    interface ChatMsg {
        Info?: PlayerInfo // 发送者
        Tp?: number // 消息类型 1系统2世界3公会4跨服5巅峰争霸
        Ts?: number // 时间
        ExId?: number // 定制消息id
        Content?: string // 内容
    }

    // 新收到聊天消息推送
    interface GS_ChatMsg {
        ChatMsg?: ChatMsg
    }

    // 聊天发送信息
    interface C_ChatSend {
        Tp?: number
        ExId?: number // 定制消息id
        Content?: string // 内容
    }

    interface GS_ChatSend_R {
        ErrorCode?: number
        MSGDATA?: C_ChatSend
    }

    // 聊天历史记录
    interface C_ChatHis {
    }

    interface GS_ChatHis_R {
        Data?: ChatMsg[]
        ErrorCode?: number
        MSGDATA?: C_ChatHis
    }

    // 阵容管理
    interface TeamMgrData {
        Info?: TeamInfo[]
    }

    // 阵容改变推送
    interface GS_TeamMgrUpdate {
        Info?: TeamInfo
    }

    // 设置阵容
    interface C_TeamMgrSetTeam {
        Info?: TeamInfo[]
    }

    interface GS_TeamMgrSetTeam_R {
        ErrorCode?: number
        MSGDATA?: C_TeamMgrSetTeam
    }

    // 抽卡
    interface DrawData {
        Tps?: DrawTpData[] // 抽卡数据
        HeroChangeSeq?: number // 英雄转换-所选英雄seq
        HeroChangeId?: number // 英雄转换-目标id
        Auto?: boolean // 是否自动分解
    }

    interface DrawTpData {
        Tp?: string // 类型
        Cnt?: number // 抽卡次数(计算保底)
        TotalCnt?: number // 总抽卡次数
        LastTs?: number // 上次抽卡时间
        TodayCnt?: number // 今日抽卡次数
        CcyCnt?: number // 今日钻石抽次数
    }

    interface C_DrawGetInfo {
    }

    interface GS_DrawGetInfo_R {
        Draw?: DrawData
        ErrorCode?: number
        MSGDATA?: C_DrawGetInfo
    }

    interface C_DrawTp {
        Tp?: string
        N?: number // 几抽
        Ccy?: boolean // 是否是钻石抽
    }

    interface GS_DrawTp_R {
        Score?: number
        DrawTp?: DrawTpData
        Rewards?: Rewards
        Items?: Item[] // 道具显示
        Auto?: Item[] // 自动分解获得
        ErrorCode?: number
        MSGDATA?: C_DrawTp
    }

    interface C_DrawAuto {
        Auto?: boolean
    }

    interface GS_DrawAuto_R {
        ErrorCode?: number
        MSGDATA?: C_DrawAuto
    }

    // vip
    interface Vip {
        Exp?: number // 经验
        Lv?: number // 等级
        Rwd?: number[] // 已购买
    }

    // 经验改变推送
    interface GS_VipExp {
        Exp?: number // 经验
        Lv?: number // 等级
    }

    // 购买
    interface C_VipBuy {
        Id?: number
    }

    interface GS_VipBuy_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_VipBuy
    }

    // misc
    interface Misc {
        RenameCnt?: number // 改名次数
        Guide?: Id_Int[] // 新手引导
    }

    interface SvrData {
        SvrId?: number // 服务器id
        SvrOpenTs?: number // 开服时间
        SvrOpenDay?: number // 开服天数
        TsOffset?: number // 服务器时间相对UTC时间偏移量
    }

    // 新手引导
    interface C_MiscGuide {
        Id?: number
        N?: number
    }

    interface GS_MiscGuide_R {
        ErrorCode?: number
        MSGDATA?: C_MiscGuide
    }

    // 战斗后录像推送
    interface GS_BattleReplay {
        Seq?: number
        SvrId?: number
        Replay?: any[]
    }

    // 战斗确认
    interface C_BattleConfirm {
        Seq?: number
        SvrId?: number
    }

    // 获取战斗录像
    interface C_BattleaReplyGet {
        ReplayId?: number
    }

    interface GS_BattleaReplyGet_R {
        Replay?: any[]
        ErrorCode?: number
        MSGDATA?: C_BattleaReplyGet
    }

    // 测试关卡
    interface C_BattleTestMission {
        Id?: number
    }

    interface GS_BattleTestMission_R {
        BI?: BInput
        ErrorCode?: number
        MSGDATA?: C_BattleTestMission
    }

    interface Guild {
        Info?: GuildInfo
        AppMod?: number // 申请模式
        AppLv?: number // 申请等级
        Num?: number // 成员数量
    }

    // 公会成员信息
    interface GuildPlr {
        Info?: PlayerInfo
        Exp?: number // 总公会经验(活跃度)
        WExp?: number // 本周经验(活跃度)
        Duty?: number // 职务
    }

    // 自己的公会相关数据
    interface GuildPlrData {
        GldId?: string // 公会ID
        JoinCD?: number // 下次可加入公会时间
        Exp?: number // 总公会经验(活跃度)
        WExp?: number // 本周经验(活跃度)
        Duty?: number // 职务
        JoinTs?: number // 加入公会时间
    }

    // 公会日志
    interface GuildLog {
        Id?: number
        Ts?: number
        Str?: string[]
    }

    // 
    interface GuildLogin {
        Data?: GuildPlrData // 玩家相关信息
        Info?: Guild // 公会信息
        AppList?: boolean // 申请列表红点
        Tech?: GldTech // 公会科技
        Wish?: GldWish // 公会心愿
        Items?: GldWishItem[] // 公会心愿
    }

    // 公会经验变化
    interface GS_GuildExp {
        Lv?: number // -1=无变化
        Exp?: number
    }

    // 加入公会
    interface GS_GuildJoin {
    }

    // 离开公会
    interface GS_GuildLeave {
    }

    // 有人申请
    interface GS_GuildApplyList {
    }

    // 创建公会
    interface C_GuildCreate {
        Name?: string
        Notice?: string
        Head?: number
    }

    interface GS_GuildCreate_R {
        ErrorCode?: number
        MSGDATA?: C_GuildCreate
    }

    // 公会改名
    interface C_GuildRename {
        Name?: string
    }

    interface GS_GuildRename_R {
        ErrorCode?: number
        MSGDATA?: C_GuildRename
    }

    // 公会设置
    interface C_GuildSetting {
        Notice?: string // 公告
        Head?: number // 头像
        AppMod?: number // 申请模式
        AppLv?: number // 申请等级
    }

    interface GS_GuildSetting_R {
        ErrorCode?: number
        MSGDATA?: C_GuildSetting
    }

    // 解散公会
    interface C_GuildDestroy {
    }

    interface GS_GuildDestroy_R {
        ErrorCode?: number
        MSGDATA?: C_GuildDestroy
    }

    // 同意/拒绝申请
    interface C_GuildAccept {
        PlrIds?: string[]
        Accept?: boolean
    }

    interface GS_GuildAccept_R {
        Num?: number // 成员数量
        ErrorCode?: number
        MSGDATA?: C_GuildAccept
    }

    // 设置职务
    interface C_GuildDuty {
        PlrId?: string
        Duty?: number
    }

    interface GS_GuildDuty_R {
        ErrorCode?: number
        MSGDATA?: C_GuildDuty
    }

    // 踢出公会
    interface C_GuildKick {
        PlrId?: string
    }

    interface GS_GuildKick_R {
        ErrorCode?: number
        MSGDATA?: C_GuildKick
    }

    // 申请列表
    interface C_GuildApplyList {
    }

    interface GS_GuildApplyList_R {
        Plrs?: PlayerInfo[]
        ErrorCode?: number
        MSGDATA?: C_GuildApplyList
    }

    // 公会招募
    interface C_GuildRecruit {
    }

    interface GS_GuildRecruit_R {
        ErrorCode?: number
        MSGDATA?: C_GuildRecruit
    }

    // 转移会长
    interface C_GuildChangeOwner {
        PlrId?: string
    }

    interface GS_GuildChangeOwner_R {
        ErrorCode?: number
        MSGDATA?: C_GuildChangeOwner
    }

    // 自己的公会信息
    interface C_GuildInfo {
    }

    interface GS_GuildInfo_R {
        Data?: GuildPlrData
        Info?: Guild
        Plrs?: GuildPlr[] // 成员列表
        Notice?: string // 公告
        ErrorCode?: number
        MSGDATA?: C_GuildInfo
    }

    // 快速加入
    interface C_GuildJoin {
    }

    interface GS_GuildJoin_R {
        ErrorCode?: number
        MSGDATA?: C_GuildJoin
    }

    // 公会列表
    interface C_GuildList {
        Name?: string // 不查找发空
    }

    interface GS_GuildList_R {
        Glds?: Guild[]
        ErrorCode?: number
        MSGDATA?: C_GuildList
    }

    // 申请加入
    interface C_GuildApply {
        GldId?: string
    }

    interface GS_GuildApply_R {
        ErrorCode?: number
        MSGDATA?: C_GuildApply
    }

    // 离开公会
    interface C_GuildQuit {
    }

    interface GS_GuildQuit_R {
        ErrorCode?: number
        MSGDATA?: C_GuildQuit
    }

    // 公会日志
    interface C_GuildLogList {
    }

    interface GS_GuildLogList_R {
        Logs?: GuildLog[]
        ErrorCode?: number
        MSGDATA?: C_GuildLogList
    }

    // 拉公会信息
    interface C_GuildGetInfo {
        GldId?: string
    }

    interface GS_GuildGetInfo_R {
        Info?: Guild
        Plrs?: GuildPlr[] // 成员列表
        Notice?: string // 公告
        ErrorCode?: number
        MSGDATA?: C_GuildGetInfo
    }

    // 图鉴收藏
    interface Collection {
        Id?: number[] // 图鉴id
        Taken?: number[] // 已领取奖励id
    }

    interface C_CollectionInfo {
    }

    interface GS_CollectionInfo_R {
        Collection?: Collection
        ErrorCode?: number
        MSGDATA?: C_CollectionInfo
    }

    // 领取奖励
    interface C_CollectionTake {
        Id?: number
    }

    interface GS_CollectionTake_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_CollectionTake
    }

    // 新解锁图鉴推送消息
    interface GS_Collection {
        Repeated?: number[]
    }

    // 主线关卡
    interface MainStep {
        Step?: number // 主线关卡id
        Rwd?: number[] // 通关奖励
        Elite?: number // 精英关卡id
        ERwd?: number[] // 精英关卡通关奖励
        Ts?: number // 挂机开始时间
    }

    // 主线战斗
    interface C_MainStepFight {
    }

    interface GS_MainStepFight_R {
        IsWin?: boolean
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_MainStepFight
    }

    // 挂机领取
    interface C_MainStepLoot {
    }

    interface GS_MainStepLoot_R {
        Rewards?: Rewards
        Ts?: number
        ErrorCode?: number
        MSGDATA?: C_MainStepLoot
    }

    // 快速挂机
    interface C_MainStepExLoot {
    }

    interface GS_MainStepExLoot_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_MainStepExLoot
    }

    // 精英战斗
    interface C_MainStepElite {
    }

    interface GS_MainStepElite_R {
        IsWin?: boolean
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_MainStepElite
    }

    // 通关奖励
    interface C_MainStepRwd {
        Ids?: number[]
    }

    interface GS_MainStepRwd_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_MainStepRwd
    }

    // 精英通关奖励
    interface C_MainStepERwd {
        Ids?: number[]
    }

    interface GS_MainStepERwd_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_MainStepERwd
    }

    // 主线自动战斗
    interface C_MainStepAuto {
    }

    interface GS_MainStepAuto_R {
        IsWin?: boolean
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_MainStepAuto
    }

    interface C_ShopGetInfo {
        ShopId?: number
    }

    interface GS_ShopGetInfo_R {
        Items?: Id_Int[]
        ErrorCode?: number
        MSGDATA?: C_ShopGetInfo
    }

    // 商店购买
    interface C_ShopBuy {
        Id?: number
        N?: number
    }

    interface GS_ShopBuy_R {
        ErrorCode?: number
        MSGDATA?: C_ShopBuy
    }

    // 商店刷新
    interface C_ShopRefresh {
        ShopId?: number
    }

    interface GS_ShopRefresh_R {
        Items?: Id_Int[]
        ErrorCode?: number
        MSGDATA?: C_ShopRefresh
    }

    // 共鸣
    interface Resonance {
        Holes?: ResonanceHole[] // 槽位
        Seqs?: number[] // 在位英雄(等级最高的几个)
        Lv?: number // 共鸣等级
    }

    interface ResonanceHole {
        Id?: number // 槽位id
        Seq?: number // 英雄Seq
        Ts?: number // 锁定时间
    }

    interface C_ResonanceInfo {
    }

    interface GS_ResonanceInfo_R {
        Info?: Resonance
        ErrorCode?: number
        MSGDATA?: C_ResonanceInfo
    }

    // 共鸣槽位解锁
    interface C_ResonanceHoleUnlock {
        Diamond?: boolean // 是否使用钻石
    }

    interface GS_ResonanceHoleUnlock_R {
        ErrorCode?: number
        MSGDATA?: C_ResonanceHoleUnlock
    }

    // 共鸣槽位上阵英雄
    interface C_ResonanceHoleAdd {
        Id?: number
        Seq?: number
    }

    interface GS_ResonanceHoleAdd_R {
        ErrorCode?: number
        MSGDATA?: C_ResonanceHoleAdd
    }

    // 共鸣槽位移除英雄
    interface C_ResonanceHoleDrop {
        Id?: number
    }

    interface GS_ResonanceHoleDrop_R {
        ErrorCode?: number
        MSGDATA?: C_ResonanceHoleDrop
    }

    // 共鸣槽位加速
    interface C_ResonanceHoleQuick {
        Id?: number
    }

    interface GS_ResonanceHoleQuick_R {
        ErrorCode?: number
        MSGDATA?: C_ResonanceHoleQuick
    }

    // 共鸣槽位变化推送
    interface GS_ResonanceHole {
        Hole?: ResonanceHole
    }

    // 神殿
    interface Temple {
        Lv?: number // 神像等级
        Cost?: Id_Int[] // 消耗的道具  id:数量
        Exp?: number // 徽章总经验
        MLv?: number // 徽章等级
        Hero?: Id_Int[] // 英雄升星记录  英雄id,星级
    }

    interface C_TempleInfo {
    }

    interface GS_TempleInfo_R {
        Info?: Temple
        ErrorCode?: number
        MSGDATA?: C_TempleInfo
    }

    // 神像升级
    interface C_TempleLvUp {
    }

    interface GS_TempleLvUp_R {
        Lv?: number // 神像等级
        ErrorCode?: number
        MSGDATA?: C_TempleLvUp
    }

    // 徽章消耗道具
    interface C_TempleCost {
        Id?: number
        N?: number
    }

    interface GS_TempleCost_R {
        Mul?: number[] // 每次的倍率
        Exp?: number // 徽章总经验
        MLv?: number // 徽章等级
        ErrorCode?: number
        MSGDATA?: C_TempleCost
    }

    // 领取英雄升星奖励
    interface C_TempleHero {
    }

    interface GS_TempleHero_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_TempleHero
    }

    // 红点
    interface GS_TempleHeroRed {
    }

    interface ExDataStarCost {
        Seq?: number // 升星英雄seq
        Star?: number // 升的几星
        Cost?: ExDataHero[] // 消耗的英雄
        Item?: Id_Int[] // 消耗的道具
    }

    interface ExDataHero {
        Seq?: number
        Id?: number
        Star?: number
    }

    interface ExDataTrReroll {
        Seq?: number
        GAttr?: Id_Bool[]
    }

    // 英雄升星消耗
    interface C_ExDataStarCost {
        Seqs?: number[]
    }

    interface GS_ExDataStarCost_R {
        Info?: ExDataStarCost[]
        ErrorCode?: number
        MSGDATA?: C_ExDataStarCost
    }

    // 法宝洗练数据
    interface C_ExDataTrReroll {
    }

    interface GS_ExDataTrReroll_R {
        Info?: ExDataTrReroll
        ErrorCode?: number
        MSGDATA?: C_ExDataTrReroll
    }

    // 竞技场
    interface Arena {
        Idx?: number // 当前名次
        Score?: number // 积分
        FightCnt?: number // 战斗次数
        TakeIds?: number[] // 已领取宝箱奖励
    }

    // 红点
    interface ArenaRed {
        FightCnt?: number // 战斗次数
        TakeIds?: number[] // 已领取宝箱奖励
        ScoreSub?: boolean // 是否被打
    }

    // 对手信息
    interface ArenaPlr {
        Info?: PlayerInfo
        Score?: number
    }

    // 积分改变推送
    interface GS_ArenaScore {
        Score?: number
    }

    // 挨打推送
    interface GS_ArenaScoreSub {
    }

    interface C_ArenaGetInfo {
    }

    interface GS_ArenaGetInfo_R {
        Data?: Arena
        Plrs?: ArenaPlr[]
        ErrorCode?: number
        MSGDATA?: C_ArenaGetInfo
    }

    // 刷新对手
    interface C_ArenaUpdatePlrs {
    }

    interface GS_ArenaUpdatePlrs_R {
        Plrs?: ArenaPlr[]
        ErrorCode?: number
        MSGDATA?: C_ArenaUpdatePlrs
    }

    // 战斗
    interface C_ArenaFight {
        PlrId?: string
    }

    interface GS_ArenaFight_R {
        IsWin?: boolean
        Rewards?: Rewards
        Ex1?: number[] // 自己积分 [战前积分,战后积分]
        Ex2?: number[] // 对手积分 [战前积分,战后积分]
        ErrorCode?: number
        MSGDATA?: C_ArenaFight
    }

    // 获取战报
    interface C_ArenaReplayList {
    }

    interface GS_ArenaReplayList_R {
        Replays?: ReplayInfo[]
        ErrorCode?: number
        MSGDATA?: C_ArenaReplayList
    }

    // 领取宝箱奖励
    interface C_ArenaTakeBox {
        Id?: number
    }

    interface GS_ArenaTakeBox_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_ArenaTakeBox
    }

    // 爬塔
    interface Tower {
        Step?: Id_Int[] // 各塔层数
        Rwd?: number[] // 已领取的通关奖励
    }

    interface C_TowerGetInfo {
    }

    interface GS_TowerGetInfo_R {
        Info?: Tower
        ErrorCode?: number
        MSGDATA?: C_TowerGetInfo
    }

    // 战斗
    interface C_TowerFight {
        Tp?: number
    }

    interface GS_TowerFight_R {
        IsWin?: boolean
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_TowerFight
    }

    // 扫荡
    interface C_TowerSweep {
        Tp?: number
    }

    interface GS_TowerSweep_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_TowerSweep
    }

    // 领取通关奖励
    interface C_TowerRwd {
        Ids?: number[]
    }

    interface GS_TowerRwd_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_TowerRwd
    }

    // 快速挑战
    interface C_TowerFast {
        Tp?: number
    }

    interface GS_TowerFast_R {
        Rewards?: Rewards
        Info?: Tower
        ErrorCode?: number
        MSGDATA?: C_TowerFast
    }

    // 自动战斗
    interface C_TowerAuto {
        Tp?: number
    }

    interface GS_TowerAuto_R {
        IsWin?: boolean
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_TowerAuto
    }

    // 资源副本
    interface DailyFb {
        Fb?: Id_Int[] // 副本：[副本类型]当前通关
    }

    // 战斗
    interface C_DailyFbFight {
        Tp?: number // 副本类型
    }

    interface GS_DailyFbFight_R {
        IsWin?: boolean
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_DailyFbFight
    }

    // 扫荡
    interface C_DailyFbSweep {
        Id?: number // 副本id
    }

    interface GS_DailyFbSweep_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_DailyFbSweep
    }

    // 拉取信息
    interface C_DailyFbInfo {
    }

    interface GS_DailyFbInfo_R {
        Info?: DailyFb
        ErrorCode?: number
        MSGDATA?: C_DailyFbInfo
    }

    // 全扫荡
    interface C_DailyFbAllSweep {
        Free?: boolean
    }

    interface GS_DailyFbAllSweep_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_DailyFbAllSweep
    }

    // 任务
    interface Task {
        Taken?: number[] // 已领取的任务id
        Divine?: number // 神职等级
        MainLv?: number // 主线任务等级
    }

    // 领取任务奖励
    interface C_TaskTake {
        Ids?: number[]
    }

    interface GS_TaskTake_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_TaskTake
    }

    // 神职升级
    interface C_DivineLvUp {
    }

    interface GS_DivineLvUp_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_DivineLvUp
    }

    // 主线任务升级
    interface C_TaskMainLvUp {
    }

    interface GS_TaskMainLvUp_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_TaskMainLvUp
    }

    interface Explore {
        Task?: ExploreTask[] // 已派遣任务
        Ids?: number[] // 可用任务id
        Lv?: number // 等级
    }

    interface ExploreTask {
        Seq?: number // seq
        Id?: number // 任务id
        Ts?: number // 开始时间
        Heroes?: number[] // 派出的英雄
    }

    interface ExploreRed {
        Take?: boolean
    }

    interface C_ExploreInfo {
    }

    interface GS_ExploreInfo_R {
        Info?: Explore
        ErrorCode?: number
        MSGDATA?: C_ExploreInfo
    }

    // 发出派遣
    interface C_ExploreSend {
        Id?: number
        Heroes?: number[]
    }

    interface GS_ExploreSend_R {
        Task?: ExploreTask
        ErrorCode?: number
        MSGDATA?: C_ExploreSend
    }

    // 领取派遣
    interface C_ExploreTake {
        Seqs?: number[]
    }

    interface GS_ExploreTake_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_ExploreTake
    }

    // 加速
    interface C_ExploreQuick {
        Seq?: number
    }

    interface GS_ExploreQuick_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_ExploreQuick
    }

    // 刷新
    interface C_ExploreRefresh {
    }

    interface GS_ExploreRefresh_R {
        Ids?: number[]
        ErrorCode?: number
        MSGDATA?: C_ExploreRefresh
    }

    interface Turntable {
        Tp?: number // 转盘类型
        Cnt?: number // 总抽取次数(领取完宝箱奖励后重置)
        Rwd?: number[] // 已领取宝箱奖励
        Grid?: Id_Int[] // 格子  奖励id:被抽取次数
    }

    interface C_TurntableInfo {
    }

    interface GS_TurntableInfo_R {
        Info?: Turntable[]
        ErrorCode?: number
        MSGDATA?: C_TurntableInfo
    }

    // 抽奖
    interface C_TurntableDraw {
        Tp?: number
        N?: number // 抽取次数
    }

    interface GS_TurntableDraw_R {
        Rewards?: Rewards
        Arr?: number[] // 每次抽取的奖励id
        ErrorCode?: number
        MSGDATA?: C_TurntableDraw
    }

    // 领取宝箱
    interface C_TurntableTake {
        Tp?: number
        Ids?: number[]
    }

    interface GS_TurntableTake_R {
        Rewards?: Rewards
        Rwd?: number[] // 已领取宝箱奖励
        Cnt?: number // 总抽取次数(领取完宝箱奖励后重置)
        ErrorCode?: number
        MSGDATA?: C_TurntableTake
    }

    // 刷新
    interface C_TurntableRefresh {
        Tp?: number
    }

    interface GS_TurntableRefresh_R {
        Grid?: Id_Int[] // 格子  奖励id:被抽取次数
        ErrorCode?: number
        MSGDATA?: C_TurntableRefresh
    }

    // 好友
    interface Friend {
        Info?: PlayerInfo // 玩家信息
        Gift?: boolean // 是否收到礼物
        Send?: boolean // 是否已赠送
        Recv?: boolean // 是否已领取
    }

    interface FriendRed {
        Red?: boolean
    }

    // 新增申请推送
    interface GS_FriendNewApply {
    }

    // 新增好友推送
    interface GS_FriendNewFriend {
    }

    // 新增礼物推送
    interface GS_FriendNewGift {
    }

    // 删除好友推送
    interface GS_FriendDel {
    }

    // 拉取好友列表
    interface C_FriendFriends {
    }

    interface GS_FriendFriends_R {
        Friends?: Friend[] // 好友列表
        RecvCnt?: number // 已收取礼物次数
        ErrorCode?: number
        MSGDATA?: C_FriendFriends
    }

    // 拉取申请列表
    interface C_FriendApplys {
    }

    interface GS_FriendApplys_R {
        Applys?: PlayerInfo[] // 申请列表
        ErrorCode?: number
        MSGDATA?: C_FriendApplys
    }

    // 申请添加好友
    interface C_FriendSendApply {
        PlrIds?: string[]
    }

    interface GS_FriendSendApply_R {
        ErrorCode?: number
        MSGDATA?: C_FriendSendApply
    }

    // 同意/拒绝
    interface C_FriendAccept {
        PlrIds?: string[]
        Accept?: boolean
    }

    interface GS_FriendAccept_R {
        ErrorCode?: number
        MSGDATA?: C_FriendAccept
    }

    // 删除好友
    interface C_FriendDel {
        PlrIds?: string[]
    }

    interface GS_FriendDel_R {
        ErrorCode?: number
        MSGDATA?: C_FriendDel
    }

    // 赠送
    interface C_FriendSend {
        PlrIds?: string[]
    }

    interface GS_FriendSend_R {
        ErrorCode?: number
        MSGDATA?: C_FriendSend
    }

    // 领取
    interface C_FriendRecv {
        PlrIds?: string[]
    }

    interface GS_FriendRecv_R {
        RecvCnt?: number // 已收取礼物次数
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_FriendRecv
    }

    // 刷新列表
    interface C_FriendRefresh {
        Str?: string
    }

    interface GS_FriendRefresh_R {
        Infos?: PlayerInfo[]
        ErrorCode?: number
        MSGDATA?: C_FriendRefresh
    }

    // 神魂试炼
    interface MindTrain {
        Step?: number // 当前关卡id
        His?: number // 历史最高关卡id
        Rwd?: number[] // 通关奖励
        UseA?: Id_Int[] // 药水使用次数
        Mons?: Id_Float[] // 当前怪物损血
        Hero?: MindHero[] // 神魂试炼英雄
    }

    // 神魂试炼英雄
    interface MindHero {
        Info?: HeroInfo
        Use?: number[] // 已使用药水
    }

    interface MindTrainRed {
        Step?: number // 当前关卡id
        Rwd?: number[] // 通关奖励
    }

    interface C_MindTrainInfo {
    }

    interface GS_MindTrainInfo_R {
        Info?: MindTrain
        ErrorCode?: number
        MSGDATA?: C_MindTrainInfo
    }

    // 上阵英雄
    interface C_MindTrainStart {
        Seqs?: number[]
    }

    interface GS_MindTrainStart_R {
        Hero?: MindHero[] // 神魂试炼英雄
        ErrorCode?: number
        MSGDATA?: C_MindTrainStart
    }

    // 重置
    interface C_MindTrainReset {
    }

    interface GS_MindTrainReset_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_MindTrainReset
    }

    // 领取通关奖励
    interface C_MindTrainRwd {
        Ids?: number[]
    }

    interface GS_MindTrainRwd_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_MindTrainRwd
    }

    // 快速通关
    interface C_MindTrainQuick {
    }

    interface GS_MindTrainQuick_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_MindTrainQuick
    }

    // 使用药水
    interface C_MindTrainPotion {
        Id?: number
        Seq?: number
    }

    interface GS_MindTrainPotion_R {
        Hero?: MindHero
        ErrorCode?: number
        MSGDATA?: C_MindTrainPotion
    }

    // 下一关
    interface C_MindTrainNext {
        Seq?: number
    }

    interface GS_MindTrainNext_R {
        Rewards?: Rewards
        IsWin?: boolean
        Hero?: MindHero
        Mons?: Id_Float[] // 当前怪物损血
        ErrorCode?: number
        MSGDATA?: C_MindTrainNext
    }

    interface GldWish {
        Item?: GldWishItem // 发布的助力
        Rwd?: number[] // 已领取的宝箱奖励
        WCnt?: number // 周助力次数
    }

    interface GldWishItem {
        Id?: number
        PlrId?: string // 发布者
        Cnt?: number // 被助力总次数
        DCnt?: number // 今日被助力次数
        Ts?: number // 发布时间
        Name?: string // 发布者名字
    }

    interface C_GldWishInfo {
    }

    interface GS_GldWishInfo_R {
        Info?: GldWish
        Items?: GldWishItem[]
        ErrorCode?: number
        MSGDATA?: C_GldWishInfo
    }

    // 助力
    interface C_GldWishHelp {
        PlrId?: string
    }

    interface GS_GldWishHelp_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_GldWishHelp
    }

    // 发布求助
    interface C_GldWishSetItem {
        Id?: number
    }

    interface GS_GldWishSetItem_R {
        Item?: GldWishItem
        ErrorCode?: number
        MSGDATA?: C_GldWishSetItem
    }

    // 领取宝箱奖励
    interface C_GldWishTake {
        Id?: number
    }

    interface GS_GldWishTake_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_GldWishTake
    }

    // 灵能时空
    interface SpaceTime {
        Step?: number // 层数
        Events?: SpaceTimeEvent[] // 当前层事件
        Rwd?: number[] // 已领取宝箱奖励
    }

    interface SpaceTimeEvent {
        GrdId?: number // 格子id
        EvtId?: number // 事件id
        Done?: boolean // 是否完成(打赢/买过商品)
        Mons?: HeroInfo[] // 怪物
        Items?: Id_Int[] // 商品(表id,购买次数)
    }

    interface C_SpaceTimeInfo {
    }

    interface GS_SpaceTimeInfo_R {
        Info?: SpaceTime
        ErrorCode?: number
        MSGDATA?: C_SpaceTimeInfo
    }

    // 战斗
    interface C_SpaceTimeFight {
        GrdId?: number
    }

    interface GS_SpaceTimeFight_R {
        IsWin?: boolean
        Rewards?: Rewards
        Event?: SpaceTimeEvent
        ErrorCode?: number
        MSGDATA?: C_SpaceTimeFight
    }

    // 购买商品
    interface C_SpaceTimeBuy {
        GrdId?: number
        Id?: number
        N?: number
    }

    interface GS_SpaceTimeBuy_R {
        Rewards?: Rewards
        Event?: SpaceTimeEvent
        ErrorCode?: number
        MSGDATA?: C_SpaceTimeBuy
    }

    // 领取宝箱奖励
    interface C_SpaceTimeRwd {
        Ids?: number[]
    }

    interface GS_SpaceTimeRwd_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_SpaceTimeRwd
    }

    // 下一层
    interface C_SpaceTimeNext {
    }

    interface GS_SpaceTimeNext_R {
        Info?: SpaceTime
        ErrorCode?: number
        MSGDATA?: C_SpaceTimeNext
    }

    // 重置
    interface C_SpaceTimeReset {
    }

    interface GS_SpaceTimeReset_R {
        Info?: SpaceTime
        ErrorCode?: number
        MSGDATA?: C_SpaceTimeReset
    }

    // 购买行动点
    interface C_SpaceTimeSupply {
        N?: number
    }

    interface GS_SpaceTimeSupply_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_SpaceTimeSupply
    }

    interface GldBoss {
        Id?: number // 当前bossId
        Dmg?: number // 扫荡伤害
        DecHp?: number // 当前boss损血
    }

    interface C_GldBossInfo {
    }

    interface GS_GldBossInfo_R {
        Info?: GldBoss
        Rec?: RankRec[] // 名次需要前端计算
        ErrorCode?: number
        MSGDATA?: C_GldBossInfo
    }

    // 扫荡
    interface C_GldBossSweep {
    }

    interface GS_GldBossSweep_R {
        Info?: GldBoss
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_GldBossSweep
    }

    // 战斗
    interface C_GldBossFight {
    }

    interface GS_GldBossFight_R {
        Info?: GldBoss
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_GldBossFight
    }

    interface Store {
        Items?: Id_Int[] // 已激活的 id:到期时间
    }

    // 当前使用的改变推送(头像，头像框，称号)
    interface GS_StoreUsed {
        Tp?: number
        Id?: number
    }

    // 仓库新增/更新推送
    interface GS_StoreAdd {
        Repeated?: Id_Int[]
    }

    // 设置当前(头像，头像框，称号)
    interface C_StoreSet {
        Id?: number
    }

    interface GS_StoreSet_R {
        ErrorCode?: number
        MSGDATA?: C_StoreSet
    }

    // 使用兑换码
    interface C_GiftCode {
        Code?: string
    }

    interface GS_GiftCode_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_GiftCode
    }

    // 使用返利码
    interface C_GiftRefund {
    }

    interface GS_GiftRefund_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_GiftRefund
    }

    interface GldTech {
        Skills?: Id_Int[] // 职业技能  职业*1000+位置:技能等级
        Tech?: number // 高级科技
    }

    interface C_GldTechInfo {
    }

    interface GS_GldTechInfo_R {
        Info?: GldTech
        ErrorCode?: number
        MSGDATA?: C_GldTechInfo
    }

    // 职业技能升级
    interface C_GldTechSkillLv {
        Key?: number // 职业*1000+位置
    }

    interface GS_GldTechSkillLv_R {
        ErrorCode?: number
        MSGDATA?: C_GldTechSkillLv
    }

    // 职业技能重置
    interface C_GldTechSkillReset {
        Job?: number // 职业
    }

    interface GS_GldTechSkillReset_R {
        Skills?: Id_Int[]
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_GldTechSkillReset
    }

    // 高级技能升级
    interface C_GldTechTechLv {
    }

    interface GS_GldTechTechLv_R {
        ErrorCode?: number
        MSGDATA?: C_GldTechTechLv
    }

    // 仙界斗法
    interface Asgard {
        Lv?: number // 等级
        Idx?: number // 当前名次
        His?: number // 历史最佳排名
    }

    interface AsgardRed {
        BAtk?: boolean // 是否被打
    }

    // 排名改变推送
    interface GS_AsgardIdx {
        Idx?: number
    }

    // 被打推送
    interface GS_AsgardBAtk {
    }

    interface C_AsgardInfo {
    }

    interface GS_AsgardInfo_R {
        Info?: Asgard
        Recs?: RankRec[]
        Top?: RankRec[] // 仙帝争锋前3
        ErrorCode?: number
        MSGDATA?: C_AsgardInfo
    }

    // 刷新对手
    interface C_AsgardRefresh {
    }

    interface GS_AsgardRefresh_R {
        Plrs?: PlayerInfoEx[]
        ErrorCode?: number
        MSGDATA?: C_AsgardRefresh
    }

    // 战斗
    interface C_AsgardFight {
        PlrId?: string
    }

    interface GS_AsgardFight_R {
        IsWin?: boolean
        Ex1?: number[] // 自己排名
        Ex2?: number[] // 对手排名
        Rewards?: Rewards
        His?: number // 历史最佳排名
        ErrorCode?: number
        MSGDATA?: C_AsgardFight
    }

    // 获取战报
    interface C_AsgardReplays {
    }

    interface GS_AsgardReplays_R {
        Replays?: ReplayInfo[]
        ErrorCode?: number
        MSGDATA?: C_AsgardReplays
    }

    // 升级
    interface C_AsgardLvup {
    }

    interface GS_AsgardLvup_R {
        ErrorCode?: number
        MSGDATA?: C_AsgardLvup
    }

    // 排行榜
    interface C_AsgardRank {
        Id?: number
    }

    interface GS_AsgardRank_R {
        Recs?: RankRec[]
        ErrorCode?: number
        MSGDATA?: C_AsgardRank
    }

    // 神秘宝地
    interface Mystery {
        Step?: number // 当前关卡id
        His?: number // 历史最高关卡id
        Pres?: boolean // 是否开启透视镜
        DecHp?: Id_Float[] // 掉血比例
        Events?: MysteryEvt[] // 每个格子事件
        Heroes?: HeroInfo[] // 已招募的英雄
    }

    // 神秘宝地事件
    interface MysteryEvt {
        Grid?: number // 格子id  y*100+x
        EvtId?: number // 事件id
        Done?: boolean // 是否已完成
        Mons?: HeroInfo[] // 怪物
        Attr?: number[] // 怪物属性事件
    }

    interface GS_MysteryEvt {
        Repeated?: MysteryEvt[]
    }

    interface C_MysteryInfo {
    }

    interface GS_MysteryInfo_R {
        Info?: Mystery
        ErrorCode?: number
        MSGDATA?: C_MysteryInfo
    }

    // 招募英雄
    interface C_MysteryHero {
        Grid?: number
        Seq?: number
    }

    interface GS_MysteryHero_R {
        ErrorCode?: number
        MSGDATA?: C_MysteryHero
    }

    // 点击事件
    interface C_MysteryEvent {
        Grid?: number // 格子id
        Seq?: number
    }

    interface GS_MysteryEvent_R {
        Rewards?: Rewards
        Ret?: number[] // 事件作用目标：英雄seq,奖励数组下标,格子id
        DecHp?: Id_Float[]
        ErrorCode?: number
        MSGDATA?: C_MysteryEvent
    }

    // 开启格子
    interface C_MysteryGrid {
        Grid?: number
    }

    interface GS_MysteryGrid_R {
        ErrorCode?: number
        MSGDATA?: C_MysteryGrid
    }

    // 战斗
    interface C_MysteryFight {
        Grid?: number
        Team?: TeamInfo
    }

    interface GS_MysteryFight_R {
        IsWin?: boolean
        Rewards?: Rewards
        DecHp?: Id_Float[]
        ErrorCode?: number
        MSGDATA?: C_MysteryFight
    }

    // 复活
    interface C_MysteryReborn {
        Seqs?: number[]
    }

    interface GS_MysteryReborn_R {
        DecHp?: Id_Float[]
        ErrorCode?: number
        MSGDATA?: C_MysteryReborn
    }

    // 透视镜
    interface C_MysteryPres {
    }

    interface GS_MysteryPres_R {
        ErrorCode?: number
        MSGDATA?: C_MysteryPres
    }

    // 神武百炼
    interface ArenaCham {
        Idx?: number // 本服排行
        CIdx?: number // 跨服排行
        Score?: number // 积分
        Dan?: number // 当前段位
    }

    // 红点
    interface ArenaChamRed {
        ScoreSub?: boolean // 是否被打输
    }

    // 被打输推送
    interface GS_ArenaChamScoreSub {
    }

    // 进入玩法
    interface C_ArenaChamInfo {
    }

    interface GS_ArenaChamInfo_R {
        Info?: ArenaCham
        Top?: RankRec[] // 前3玩家
        ErrorCode?: number
        MSGDATA?: C_ArenaChamInfo
    }

    // 战斗
    interface C_ArenaChamFight {
    }

    interface GS_ArenaChamFight_R {
        Info?: PlayerInfo // 对手玩家信息
        Hero?: HeroInfo[] // 对手英雄信息
        Ret?: number[] // 每场战斗的结果
        Ex1?: number[] // 自己积分 [战前积分,战斗积分]
        Ex2?: number[] // 对手积分 [战前积分,战斗积分]
        ErrorCode?: number
        MSGDATA?: C_ArenaChamFight
    }

    // 获取战报
    interface C_ArenaChamReplayList {
    }

    interface GS_ArenaChamReplayList_R {
        Replays?: ReplayInfo[]
        ErrorCode?: number
        MSGDATA?: C_ArenaChamReplayList
    }

    // 仙帝争锋
    interface AsgardGod {
        Idx?: number // 本周排名
        Tp?: number // 挂机类型
        Ts?: number // 挂机开始时间
    }

    interface AsgardGodRed {
        Tp?: number // 挂机类型
        BAtk?: boolean // 是否被打
    }

    // 被打推送
    interface GS_AsgardGodBAtk {
    }

    // 进入玩法
    interface C_AsgardGodInfo {
    }

    interface GS_AsgardGodInfo_R {
        Info?: AsgardGod
        Recs?: RankRec[]
        ErrorCode?: number
        MSGDATA?: C_AsgardGodInfo
    }

    // 战斗
    interface C_AsgardGodFight {
        PlrId?: string
    }

    interface GS_AsgardGodFight_R {
        IsWin?: boolean
        AtkEx?: number[] // [战前排名,战后排名]
        DefEx?: number[] // [战前排名,战后排名]
        ErrorCode?: number
        MSGDATA?: C_AsgardGodFight
    }

    // 获取战报
    interface C_AsgardGodReplays {
    }

    interface GS_AsgardGodReplays_R {
        Replays?: ReplayInfo[]
        ErrorCode?: number
        MSGDATA?: C_AsgardGodReplays
    }

    // 上周榜
    interface C_AsgardGodLast {
    }

    interface GS_AsgardGodLast_R {
        Recs?: PlayerInfoEx[] // Ex:[名次,护卫人数,庇护人数]
        ErrorCode?: number
        MSGDATA?: C_AsgardGodLast
    }

    // 查看自己的庇护信息
    interface C_AsgardGodSelf {
    }

    interface GS_AsgardGodSelf_R {
        Recs?: PlayerInfoEx[] // Ex:[类型,开始时间,老大排名]
        Rwd?: Id_Int[] // 额外奖励
        ErrorCode?: number
        MSGDATA?: C_AsgardGodSelf
    }

    // 申请挂机
    interface C_AsgardGodAdd {
        PlrId?: string
        Tp?: number
    }

    interface GS_AsgardGodAdd_R {
        Info?: AsgardGod
        ErrorCode?: number
        MSGDATA?: C_AsgardGodAdd
    }

    // 挂机踢人
    interface C_AsgardGodKick {
        PlrId?: string
    }

    interface GS_AsgardGodKick_R {
        ErrorCode?: number
        MSGDATA?: C_AsgardGodKick
    }

    // 结束挂机
    interface C_AsgardGodQuit {
    }

    interface GS_AsgardGodQuit_R {
        ErrorCode?: number
        MSGDATA?: C_AsgardGodQuit
    }

    // 巅峰争霸
    interface ArenaPeak {
        Idx?: number // 当前排名
        Last?: number // 上期排名
        Plr?: PlayerInfo // 第一
    }

    // 竞猜记录
    interface ArenaPeakGuess {
        Seq?: number // 场次
        Replay?: ReplayInfo // 战报
        PlrId?: string // 竞猜玩家
        Guess?: number // 竞猜获得
    }

    // 战报
    interface ArenaPeakReplay {
        Seq?: number
        Replay?: ReplayInfo
    }

    // 竞猜币推送
    interface GS_ArenaPeakCcy {
        Ccy?: number // 竞猜币
    }

    // 竞猜界面战斗推送
    interface GS_ArenaPeakGuessReplay {
        ReplayId?: number // 战报id
    }

    // 进入玩法
    interface C_ArenaPeakInfo {
    }

    interface GS_ArenaPeakInfo_R {
        Info?: ArenaPeak
        Ccy?: number // 竞猜币
        Score?: number // 积分
        PlrId?: string // 竞猜目标
        Guess?: number // 竞猜下注
        Top?: RankRec[] // 前3
        ErrorCode?: number
        MSGDATA?: C_ArenaPeakInfo
    }

    // 竞猜
    interface C_ArenaPeakGuess {
        PlrId?: string
        N?: number
    }

    interface GS_ArenaPeakGuess_R {
        ErrorCode?: number
        MSGDATA?: C_ArenaPeakGuess
    }

    // 场次战报
    interface C_ArenaPeakSeq {
        Seq?: number // seq=轮次*10000+小组*100+场次
    }

    interface GS_ArenaPeakSeq_R {
        Replay?: ArenaPeakReplay
        ErrorCode?: number
        MSGDATA?: C_ArenaPeakSeq
    }

    // 自己战报
    interface C_ArenaPeakReplays {
    }

    interface GS_ArenaPeakReplays_R {
        Replays?: ArenaPeakReplay[]
        ErrorCode?: number
        MSGDATA?: C_ArenaPeakReplays
    }

    // 竞猜记录
    interface C_ArenaPeakGuessLog {
    }

    interface GS_ArenaPeakGuessLog_R {
        Recs?: ArenaPeakGuess[]
        ErrorCode?: number
        MSGDATA?: C_ArenaPeakGuessLog
    }

    // 当前竞猜界面
    interface C_ArenaPeakGuessInfo {
    }

    interface GS_ArenaPeakGuessInfo_R {
        Replay?: ArenaPeakReplay
        ErrorCode?: number
        MSGDATA?: C_ArenaPeakGuessInfo
    }

    // 赛程
    interface C_ArenaPeakGroup {
    }

    interface GS_ArenaPeakGroup_R {
        Recs?: PlayerInfoEx[] // Ex [位置,胜利次数]
        ErrorCode?: number
        MSGDATA?: C_ArenaPeakGroup
    }

    // 公会友谊赛
    interface GldMatch {
        Score?: number // 积分
        Taken?: boolean // 是否领奖
        Fight?: boolean // 是否能挑战
    }

    interface GldMatchGlds {
        Glds?: GuildInfoEx[] // Ex [星星数,排名]
    }

    interface GldMatchRwd {
        Name?: string
        Idx?: number
        Item?: Item
    }

    // 挑战对手刷新
    interface GS_GldMatchFightRefresh {
    }

    // 进入玩法
    interface C_GldMatchInfo {
    }

    interface GS_GldMatchInfo_R {
        Info?: GldMatch
        Glds?: GldMatchGlds
        Plrs?: PlayerInfoEx[] // Ex [星星数,排名]
        ErrorCode?: number
        MSGDATA?: C_GldMatchInfo
    }

    // 赛程界面
    interface C_GldMatchAllGlds {
    }

    interface GS_GldMatchAllGlds_R {
        Glds?: GldMatchGlds[]
        ErrorCode?: number
        MSGDATA?: C_GldMatchAllGlds
    }

    // 奖励界面
    interface C_GldMatchRwdInfo {
    }

    interface GS_GldMatchRwdInfo_R {
        Rwds?: GldMatchRwd[]
        ErrorCode?: number
        MSGDATA?: C_GldMatchRwdInfo
    }

    // 挑战
    interface C_GldMatchFight {
        PlrId?: string
        N?: number
        Sweep?: boolean
    }

    interface GS_GldMatchFight_R {
        IsWin?: boolean
        Rewards?: Rewards
        Star?: number
        Score?: number
        ErrorCode?: number
        MSGDATA?: C_GldMatchFight
    }

    // 领奖
    interface C_GldMatchRwd {
        Idx?: number
    }

    interface GS_GldMatchRwd_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_GldMatchRwd
    }

    // 战报
    interface C_GldMatchReplay {
    }

    interface GS_GldMatchReplay_R {
        Replays?: ReplayInfo[] // Ex [是否扫荡,难度,积分] 扫荡=1战斗=0
        ErrorCode?: number
        MSGDATA?: C_GldMatchReplay
    }

    // 公会成员积分
    interface C_GldMatchGldPlr {
    }

    interface GS_GldMatchGldPlr_R {
        Recs?: PlayerInfoEx[] // Ex [积分]
        ErrorCode?: number
        MSGDATA?: C_GldMatchGldPlr
    }

    // 神兽之家
    interface BeastHome {
        Lv?: number // 等级
        Step?: number // 进阶
        Pos?: PosInfo[] // 上阵位置
        Tram?: number[] // 已激活羁绊
        Rwd?: number[] // 已领取宝箱
    }

    // 升级
    interface C_BeastHomeLv {
    }

    interface GS_BeastHomeLv_R {
        ErrorCode?: number
        MSGDATA?: C_BeastHomeLv
    }

    // 进阶
    interface C_BeastHomeStep {
    }

    interface GS_BeastHomeStep_R {
        ErrorCode?: number
        MSGDATA?: C_BeastHomeStep
    }

    // 上阵
    interface C_BeastHomeSet {
        Pos?: PosInfo[] // 上阵位置
    }

    interface GS_BeastHomeSet_R {
        ErrorCode?: number
        MSGDATA?: C_BeastHomeSet
    }

    // 激活羁绊
    interface C_BeastHomeTram {
        Id?: number
    }

    interface GS_BeastHomeTram_R {
        ErrorCode?: number
        MSGDATA?: C_BeastHomeTram
    }

    // 抽卡宝箱
    interface C_BeastHomeRwd {
        Ids?: number[]
    }

    interface GS_BeastHomeRwd_R {
        Rewards?: Rewards
        Rwd?: number[] // 已领取宝箱
        ErrorCode?: number
        MSGDATA?: C_BeastHomeRwd
    }

    // 公司
    interface Company {
        Lv?: number // 等级
        Exp?: number // 经验
        Point?: number // 业绩点
        Works?: CompanyHero[] // 工位
        Rwd?: Id_Int[] // 红包数量  id:数量
        Master?: CompanyPlr // 主人
        Slave?: CompanyPlr[] // 奴隶
        RepId?: number // 被抓奴隶的战报
    }

    interface CompanyPlr {
        Plr?: PlayerInfo
        Ts?: number
    }

    interface CompanyLog {
        Id?: number
        Ts?: number
        Name?: string
    }

    interface CompanyHelpInfo {
        Master?: PlayerInfo
        Slave?: PlayerInfo
        Ts?: number
    }

    // 获得经验推送
    interface GS_CompanyExp {
        Lv?: number // 等级（-1表示无变化）
        Exp?: number // 经验
    }

    // 获得红包推送
    interface GS_CompanyRed {
        Id?: number
        N?: number
    }

    // 日志推送
    interface GS_CompanyLog {
    }

    interface C_CompanyInfo {
    }

    interface GS_CompanyInfo_R {
        Info?: Company
        ErrorCode?: number
        MSGDATA?: C_CompanyInfo
    }

    // 助力
    interface C_CompanyClick {
        Id?: number // 工位id
    }

    interface GS_CompanyClick_R {
        ErrorCode?: number
        MSGDATA?: C_CompanyClick
    }

    // 上阵
    interface C_CompanySet {
        Input?: Id_Int[] // 工位  id:seq
    }

    interface GS_CompanySet_R {
        Info?: Company
        ErrorCode?: number
        MSGDATA?: C_CompanySet
    }

    // 领取红包
    interface C_CompanyTakeRwd {
        Id?: number
        N?: number
    }

    interface GS_CompanyTakeRwd_R {
        Rewards?: Rewards
        Info?: Company
        ErrorCode?: number
        MSGDATA?: C_CompanyTakeRwd
    }

    // 日志
    interface C_CompanyLogs {
    }

    interface GS_CompanyLogs_R {
        Logs?: CompanyLog[]
        ErrorCode?: number
        MSGDATA?: C_CompanyLogs
    }

    // 事件
    interface C_CompanyEvent {
        Id?: number
        PlrId?: string
    }

    interface GS_CompanyEvent_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_CompanyEvent
    }

    // 打祟魔
    interface C_CompanyFightMon {
        Id?: number
        PlrId?: string
    }

    interface GS_CompanyFightMon_R {
        IsWin?: boolean
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_CompanyFightMon
    }

    // 俘虏玩家
    interface C_CompanyFightSlave {
        PlrId?: string
    }

    interface GS_CompanyFightSlave_R {
        IsWin?: boolean
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_CompanyFightSlave
    }

    // 挑战主人
    interface C_CompanyFightMaster {
    }

    interface GS_CompanyFightMaster_R {
        IsWin?: boolean
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_CompanyFightMaster
    }

    // 救援
    interface C_CompanyFightOwnerMaster {
        PlrId?: string
    }

    interface GS_CompanyFightOwnerMaster_R {
        IsWin?: boolean
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_CompanyFightOwnerMaster
    }

    // 发布求助
    interface C_CompanyHelp {
        PlrIds?: string[]
    }

    interface GS_CompanyHelp_R {
        ErrorCode?: number
        MSGDATA?: C_CompanyHelp
    }

    // 求助列表
    interface C_CompanyHelpList {
    }

    interface GS_CompanyHelpList_R {
        List?: CompanyHelpInfo[]
        ErrorCode?: number
        MSGDATA?: C_CompanyHelpList
    }

    // 拜访别人公司
    interface C_CompanyVisit {
        PlrId?: string
    }

    interface GS_CompanyVisit_R {
        Works?: CompanyHero[] // 工位
        Master?: CompanyPlr // 主人
        Slave?: CompanyPlr[] // 奴隶
        ErrorCode?: number
        MSGDATA?: C_CompanyVisit
    }

    // 活动
    interface ActivityData {
        Seq?: number
        Stage?: Id_Int[] // 每个阶段的时间
        Confs?: ActivityConf[] // 各子表配置
        Info?: any // 玩法数据
    }

    interface ActivityConf {
        Name?: string
        Data?: any
    }

    interface ActivityConfs {
        Activity?: any // 活动表
        Language?: any // 活动语言表
        ActGroup?: any // 活动组表
    }

    // 活动改变推送
    interface GS_Activity {
        Repeated?: ActivityData[]
    }

    // 活动表热更新推送
    interface GS_ActivityConf {
        Data?: ActivityConfs
    }

    // 上线拉取活动
    interface C_ActivityInfo {
    }

    interface GS_ActivityInfo_R {
        Data?: ActivityData[]
        Conf?: ActivityConfs
        ErrorCode?: number
        MSGDATA?: C_ActivityInfo
    }

    // 每日充值
    interface DailyBill {
        Rwd?: number[] // 已购买礼包
        Grp?: number // 今日礼包组
    }

    interface C_DailyBillInfo {
    }

    interface GS_DailyBillInfo_R {
        Info?: DailyBill
        ErrorCode?: number
        MSGDATA?: C_DailyBillInfo
    }

    // 购买(免费)
    interface C_DailyBillBuy {
        Id?: number
    }

    // 购买成功推送
    interface GS_DailyBillBuy_R {
        Id?: number
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_DailyBillBuy
    }

    // 触发礼包
    interface PushGift {
        Id?: number
        Ts?: number // 开始时间
        Conf?: any // 配置
    }

    // 新增礼包推送
    interface GS_PushGiftAdd {
        Repeated?: PushGift[]
    }

    interface C_PushGiftInfo {
    }

    interface GS_PushGiftInfo_R {
        Info?: PushGift[]
        ErrorCode?: number
        MSGDATA?: C_PushGiftInfo
    }

    // 购买
    interface C_PushGiftBuy {
        Id?: number
    }

    // 购买成功推送
    interface GS_PushGiftBuy_R {
        Id?: number
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_PushGiftBuy
    }

    // 消消乐
    interface Eliminate {
        Lv?: number // 当前关卡
        Num?: number // 剩余步数
        Ts?: number // 上次步数更新时间
        Total?: number // 总分数
        Score?: number // 当前分数
    }

    interface EliminateRed {
        Num?: number // 剩余步数
    }

    interface C_EliminateInfo {
    }

    interface GS_EliminateInfo_R {
        Info?: Eliminate
        Data?: number[] // 地图数据
        ErrorCode?: number
        MSGDATA?: C_EliminateInfo
    }

    // 数据更新
    interface C_EliminateData {
        Data?: number[] // 地图数据
        Dels?: Id_Int[] // 消除的方块
        News?: Id_Int[] // 新增的方块
        Hash?: string // 校验码
    }

    interface GS_EliminateData_R {
        Info?: Eliminate
        Rewards?: Rewards // 通关奖励
        ErrorCode?: number
        MSGDATA?: C_EliminateData
    }

    // 宴会
    interface Banquet {
        Score?: number // 人气
        Cur?: BanquetInfo // 当前宴会
        Rwd?: BanquetRwd // 结算奖励
        BuyCnt?: Id_Int[] // 礼包购买次数
    }

    // 宴会信息
    interface BanquetInfo {
        Id?: number
        Ts?: number // 开始时间
        Plrs?: BanquetPlr[] // 参与者(位置=0的是创建者)
    }

    interface BanquetPlr {
        Info?: PlayerInfo
        Hero?: number // 上阵英雄id
        Score?: number // 人气
    }

    interface BanquetRwd {
        Score?: number // 人气
        Rewards?: Rewards
    }

    // 宴会历史记录
    interface BanquetHis {
        Id?: number
        Ts?: number // 开始时间
        Plrs?: Str_Int[] // 玩家id:人气
    }

    // 互宴玩家信息
    interface BanquetPlrCnt {
        Info?: PlayerInfo
        From?: number // 来宴
        To?: number // 回宴
    }

    interface BanquetRed {
        BuyCnt?: Id_Int[] // 礼包购买次数
        Ban?: boolean // 当前是否有宴会
    }

    interface C_BanquetInfo {
    }

    interface GS_BanquetInfo_R {
        Info?: Banquet
        ErrorCode?: number
        MSGDATA?: C_BanquetInfo
    }

    // 创办宴会
    interface C_BanquetCreate {
        Id?: number
        HeroSeq?: number
    }

    interface GS_BanquetCreate_R {
        Info?: BanquetInfo
        ErrorCode?: number
        MSGDATA?: C_BanquetCreate
    }

    // 加入宴会
    interface C_BanquetJoin {
        PlrId?: string // 创建者id
        Gift?: number
        HeroSeq?: number
    }

    interface GS_BanquetJoin_R {
        Info?: BanquetInfo
        Rwd?: BanquetRwd
        ErrorCode?: number
        MSGDATA?: C_BanquetJoin
    }

    // 宴会列表
    interface C_BanquetList {
    }

    interface GS_BanquetList_R {
        List?: BanquetInfo[]
        Friend?: string[] // 好友id
        ErrorCode?: number
        MSGDATA?: C_BanquetList
    }

    // 宴会历史
    interface C_BanquetHis {
    }

    interface GS_BanquetHis_R {
        List?: BanquetHis[]
        Plrs?: BanquetPlrCnt[]
        ErrorCode?: number
        MSGDATA?: C_BanquetHis
    }

    // 宴会购买礼包
    interface C_BanquetBuy {
        Id?: number
    }

    interface GS_BanquetBuy_R {
        Id?: number
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_BanquetBuy
    }

    // 免费宝箱
    interface TreasureChest {
        Taken?: number[]
    }

    interface C_TreasureChestTake {
        Id?: number
    }

    interface GS_TreasureChestTake_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_TreasureChestTake
    }

    // 福利站
    interface Welfare {
        LevelReward?: LevelReward
        SignReward?: SignReward
        GodGift?: GodGift
        WeekendGift?: WeekendGift
        MonthCard?: MonthCard[]
        AceChanllenge?: AceChanllenge
    }

    interface C_WelfareInfo {
    }

    interface GS_WelfareInfo_R {
        Info?: Welfare
        ErrorCode?: number
        MSGDATA?: C_WelfareInfo
    }

    // 等级礼包
    interface LevelReward {
        Rwd?: number[] // 已领取奖励
    }

    // 领取
    interface C_LevelRewardRwd {
        Ids?: number[]
    }

    interface GS_LevelRewardRwd_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_LevelRewardRwd
    }

    // 签到
    interface SignReward {
        Day?: number // 已领取天数
        Sign?: boolean // 今日是否已签到
        Bill?: boolean // 今日是否已充值
        Take?: boolean // 今日是否已领取充值奖励
    }

    // 签到奖励
    interface C_SignRewardSignRwd {
    }

    interface GS_SignRewardSignRwd_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_SignRewardSignRwd
    }

    // 充值奖励
    interface C_SignRewardBillRwd {
    }

    interface GS_SignRewardBillRwd_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_SignRewardBillRwd
    }

    // 诸神馈赠
    interface GodGift {
        Day?: number // 已登录天数
        Take?: number // 已领取天数
    }

    // 领取
    interface C_GodGiftRwd {
    }

    interface GS_GodGiftRwd_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_GodGiftRwd
    }

    // 周末回馈
    interface WeekendGift {
        Rwd?: number[] // 已领取奖励
    }

    // 领取
    interface C_WeekendGiftRwd {
    }

    interface GS_WeekendGiftRwd_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_WeekendGiftRwd
    }

    // 月卡
    interface MonthCard {
        Id?: number
        Bill?: number // 已充值金额
        Ts?: number // 激活时间戳，0=未激活
        Take?: boolean // 今日是否领取
    }

    // 领取
    interface C_MonthCardTake {
        Id?: number
    }

    interface GS_MonthCardTake_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_MonthCardTake
    }

    // 激活
    interface C_MonthCardActive {
        Id?: number
    }

    interface GS_MonthCardActive_R {
        Rewards?: Rewards
        Card?: MonthCard
        ErrorCode?: number
        MSGDATA?: C_MonthCardActive
    }

    // 王牌挑战
    interface AceChanllenge {
        Grp?: number // 自选档位
        Rwd?: number[] // 已领奖励
    }

    // 领取
    interface C_AceChanllengeTake {
        Ids?: number[]
    }

    interface GS_AceChanllengeTake_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_AceChanllengeTake
    }

    // 设置自选
    interface C_AceChanllengeSetGrp {
        Grp?: number
    }

    interface GS_AceChanllengeSetGrp_R {
        ErrorCode?: number
        MSGDATA?: C_AceChanllengeSetGrp
    }

    // 精品好礼
    interface Boutique {
        CycleGift?: CycleGift // 限购礼包
        Fund?: Fund // 成长基金
        Privilege?: Privilege // 专属特权
        HeroGift?: HeroGift // 自选神灵礼包
    }

    interface C_BoutiqueInfo {
    }

    interface GS_BoutiqueInfo_R {
        Info?: Boutique
        ErrorCode?: number
        MSGDATA?: C_BoutiqueInfo
    }

    // 限购礼包
    interface CycleGift {
        BuyCnt?: Id_Int[] // 已领取奖励
    }

    // 领取免费礼包
    interface C_CycleGiftTake {
        Id?: number
    }

    // 购买成功推送
    interface GS_CycleGiftTake_R {
        Id?: number
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_CycleGiftTake
    }

    // 成长基金
    interface Fund {
        FreeRwd?: number[] // 已领取免费奖励
        PayRwd?: number[] // 已领取付费奖励
        Welfare?: number[] // 已领取全民福利
        Funds?: number[] // 已购买基金
        Total?: Id_Int[] // 全服购买数 id:人数
    }

    // 领取基金奖励
    interface C_FundTakeRwd {
        Ids?: number[]
    }

    interface GS_FundTakeRwd_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_FundTakeRwd
    }

    // 领取全民福利
    interface C_FundTakeWelfare {
        Id?: number
    }

    interface GS_FundTakeWelfare_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_FundTakeWelfare
    }

    // 专属特权
    interface Privilege {
        Ts?: Id_Int[] // 已激活特权 id:到期时间(-1表示永久)
    }

    // 钻石购买
    interface C_PrivilegeBuy {
        Id?: number
    }

    // 购买成功推送
    interface GS_PrivilegeBuy_R {
        Id?: number
        Rewards?: Rewards
        Ts?: Id_Int[] // 已激活特权 id:到期时间(-1表示永久)
        ErrorCode?: number
        MSGDATA?: C_PrivilegeBuy
    }

    interface HeroGift {
        Grp?: number // 自选档位
        Rwd?: number[] // 已领奖励
    }

    interface C_HeroGiftRwd {
        Id?: number
    }

    interface GS_HeroGiftRwd_R {
        Id?: number
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_HeroGiftRwd
    }

    // 设置自选
    interface C_HeroGiftSetGrp {
        Grp?: number
    }

    interface GS_HeroGiftSetGrp_R {
        ErrorCode?: number
        MSGDATA?: C_HeroGiftSetGrp
    }

    // 八日登录
    interface ActLogin {
        Rwd?: number[] // 已领取的奖励
        Day?: number // 已登录天数
    }

    interface C_ActLoginInfo {
        Seq?: number
    }

    interface GS_ActLoginInfo_R {
        Info?: ActLogin
        ErrorCode?: number
        MSGDATA?: C_ActLoginInfo
    }

    interface C_ActLoginTake {
        Seq?: number
        Id?: number
    }

    interface GS_ActLoginTake_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_ActLoginTake
    }

    // 首充
    interface ActFirstBill {
        Price?: number // 已充值金额数
        Bill?: Id_Int[] // 可领天数 礼包id:天数
        Rwd?: number[] // 已领取奖励
    }

    interface C_ActFirstBillInfo {
        Seq?: number
    }

    interface GS_ActFirstBillInfo_R {
        Info?: ActFirstBill
        ErrorCode?: number
        MSGDATA?: C_ActFirstBillInfo
    }

    interface C_ActFirstBillTake {
        Seq?: number
        Ids?: number[]
    }

    interface GS_ActFirstBillTake_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_ActFirstBillTake
    }

    // 庇护
    interface ActAsylum {
        Day?: number // 可领天数
        Bill?: boolean // 是否已购买
        Rwd?: number[] // 已领取奖励
    }

    interface C_ActAsylumInfo {
        Seq?: number
    }

    interface GS_ActAsylumInfo_R {
        Info?: ActAsylum
        ErrorCode?: number
        MSGDATA?: C_ActAsylumInfo
    }

    interface C_ActAsylumTake {
        Seq?: number
        Ids?: number[]
    }

    interface GS_ActAsylumTake_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_ActAsylumTake
    }

    // 在线奖励
    interface ActOnline {
        Sec?: number // 在线时间(秒)
        Rwd?: number[] // 已领取奖励
    }

    interface C_ActOnlineInfo {
        Seq?: number
    }

    interface GS_ActOnlineInfo_R {
        Info?: ActOnline
        ErrorCode?: number
        MSGDATA?: C_ActOnlineInfo
    }

    interface C_ActOnlineTake {
        Seq?: number
        Ids?: number[]
    }

    interface GS_ActOnlineTake_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_ActOnlineTake
    }

    // 缔结契约
    interface ActContract {
        Task?: Id_Int[] // 任务进度 (成就id,对应字段AchvTab)
        Rwd?: number[] // 已领取奖励
    }

    interface C_ActContractInfo {
        Seq?: number
    }

    interface GS_ActContractInfo_R {
        Info?: ActContract
        ErrorCode?: number
        MSGDATA?: C_ActContractInfo
    }

    interface C_ActContractTake {
        Seq?: number
        Ids?: number[]
    }

    interface GS_ActContractTake_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_ActContractTake
    }

    // 任务进度推送
    interface GS_ActContractTask {
        Seq?: number
        Repeated?: Id_Int[] // 任务进度 (成就id,对应字段AchvTab)
    }

    // 七日目标
    interface ActTarget {
        Day?: number // 当前天数
        Task?: Id_Int[] // 任务进度 (成就id,对应字段AchvTab)
        Rwd?: Id_Int[] // 已领取奖励
    }

    interface C_ActTargetInfo {
        Seq?: number
    }

    interface GS_ActTargetInfo_R {
        Info?: ActTarget
        ErrorCode?: number
        MSGDATA?: C_ActTargetInfo
    }

    interface C_ActTargetTake {
        Seq?: number
        Ids?: number[]
    }

    interface GS_ActTargetTake_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_ActTargetTake
    }

    // 任务进度推送
    interface GS_ActTargetTask {
        Seq?: number
        Repeated?: Id_Int[] // 任务进度 (成就id,对应字段AchvTab)
    }

    // 充值购买推送
    interface GS_ActTargetBill {
        Seq?: number
        Id?: number
        Rewards?: Rewards
    }

    // 主题抽奖
    interface ActLottery {
        Rwd?: number[] // 已抽到的奖励
    }

    interface C_ActLotteryInfo {
        Seq?: number
    }

    interface GS_ActLotteryInfo_R {
        Info?: ActLottery
        ErrorCode?: number
        MSGDATA?: C_ActLotteryInfo
    }

    interface C_ActLotteryDraw {
        Seq?: number
    }

    interface GS_ActLotteryDraw_R {
        Id?: number // 抽到的奖励id
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_ActLotteryDraw
    }

    // 战令
    interface ActOrder {
        Seq?: number
        Bill?: boolean // 是否购买
        Free?: number[] // 免费奖励
        Pay?: number[] // 付费奖励
    }

    interface C_ActOrderInfo {
        Seqs?: number[]
    }

    interface GS_ActOrderInfo_R {
        Infos?: ActOrder[]
        ErrorCode?: number
        MSGDATA?: C_ActOrderInfo
    }

    interface C_ActOrderTake {
        Seq?: number
    }

    interface GS_ActOrderTake_R {
        Info?: ActOrder
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_ActOrderTake
    }

    // 英雄挑战
    interface ActHeroChallenge {
        Dmg?: number // 最高伤害
        CntDay?: number // 今日挑战次数
        DmgDay?: number // 今日最高伤害
        Rwd?: number[] // 已领取奖励
    }

    interface C_ActHeroChallengeInfo {
        Seq?: number
    }

    interface GS_ActHeroChallengeInfo_R {
        Info?: ActHeroChallenge
        Top?: RankRec[] // 排行前三
        ErrorCode?: number
        MSGDATA?: C_ActHeroChallengeInfo
    }

    interface C_ActHeroChallengeTake {
        Seq?: number
        Ids?: number[]
    }

    interface GS_ActHeroChallengeTake_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_ActHeroChallengeTake
    }

    // 挑战
    interface C_ActHeroChallengeFight {
        Seq?: number
    }

    interface GS_ActHeroChallengeFight_R {
        Damage?: number
        ErrorCode?: number
        MSGDATA?: C_ActHeroChallengeFight
    }

    // 排行榜
    interface C_ActHeroChallengeRank {
        Seq?: number
        Begin?: number
        End?: number
    }

    interface GS_ActHeroChallengeRank_R {
        Recs?: RankRec[] // 排名列表
        Score?: number // 自己的积分
        ErrorCode?: number
        MSGDATA?: C_ActHeroChallengeRank
    }

    // 商店
    interface ActShop {
        BuyCnt?: Id_Int[]
    }

    interface C_ActShopInfo {
        Seq?: number
    }

    interface GS_ActShopInfo_R {
        Info?: ActShop
        ErrorCode?: number
        MSGDATA?: C_ActShopInfo
    }

    interface C_ActShopBuy {
        Seq?: number
        Id?: number
        N?: number
    }

    interface GS_ActShopBuy_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_ActShopBuy
    }

    // 任务
    interface ActTask {
        Task?: Id_Int[] // 任务进度 (成就id,对应字段AchvTab)
        Rwd?: number[] // 已领取奖励
    }

    interface C_ActTaskInfo {
        Seq?: number
    }

    interface GS_ActTaskInfo_R {
        Info?: ActTask
        ErrorCode?: number
        MSGDATA?: C_ActTaskInfo
    }

    interface C_ActTaskTake {
        Seq?: number
        Ids?: number[]
    }

    interface GS_ActTaskTake_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_ActTaskTake
    }

    // 任务进度推送
    interface GS_ActTaskTask {
        Seq?: number
        Repeated?: Id_Int[] // 任务进度 (成就id,对应字段AchvTab)
    }

    // 礼包
    interface ActGift {
        BuyCnt?: Id_Int[] // 礼包购买次数
    }

    interface C_ActGiftInfo {
        Seq?: number
    }

    interface GS_ActGiftInfo_R {
        Info?: ActGift
        ErrorCode?: number
        MSGDATA?: C_ActGiftInfo
    }

    interface C_ActGiftBuy {
        Seq?: number
        Id?: number
    }

    // 礼包购买推送
    interface GS_ActGiftBuy_R {
        Seq?: number
        Id?: number
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_ActGiftBuy
    }

    // 战力
    interface ActPower {
        Rwd?: number[] // 已领取奖励
    }

    interface C_ActPowerInfo {
        Seq?: number
    }

    interface GS_ActPowerInfo_R {
        Info?: ActPower
        ErrorCode?: number
        MSGDATA?: C_ActPowerInfo
    }

    interface C_ActPowerTake {
        Seq?: number
        Ids?: number[]
    }

    interface GS_ActPowerTake_R {
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_ActPowerTake
    }

    // 排行榜
    interface C_ActRankRegion {
        Seq?: number
        Begin?: number
        End?: number
    }

    interface GS_ActRankRegion_R {
        RankData?: RankData // RankId=Seq
        ErrorCode?: number
        MSGDATA?: C_ActRankRegion
    }

    // 升星计划
    interface ActStarPlan {
        BuyCnt?: Id_Int[] // 购买次数
    }

    interface C_ActStarPlanInfo {
        Seq?: number
    }

    interface GS_ActStarPlanInfo_R {
        Info?: ActStarPlan
        ErrorCode?: number
        MSGDATA?: C_ActStarPlanInfo
    }

    interface C_ActStarPlanBuy {
        Seq?: number
        Ids?: number[]
    }

    interface GS_ActStarPlanBuy_R {
        Seq?: number
        Ids?: number[]
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_ActStarPlanBuy
    }

    // 心愿招募
    interface ActDraw {
        Pick?: number // 自选id
        BuyCnt?: Id_Int[] // 购买次数
        Logs?: Str_Int[] // 广播
    }

    interface C_ActDrawInfo {
        Seq?: number
    }

    interface GS_ActDrawInfo_R {
        Info?: ActDraw
        ErrorCode?: number
        MSGDATA?: C_ActDrawInfo
    }

    // 抽卡
    interface C_ActDrawDraw {
        Seq?: number
        N?: number
        Ccy?: boolean // 是否钻石抽
    }

    interface GS_ActDrawDraw_R {
        Ids?: number[] // 抽到的奖励id
        DrawTp?: DrawTpData
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_ActDrawDraw
    }

    // 自选设置
    interface C_ActDrawPick {
        Seq?: number
        Id?: number
    }

    interface GS_ActDrawPick_R {
        ErrorCode?: number
        MSGDATA?: C_ActDrawPick
    }

    // 购买
    interface C_ActDrawBuy {
        Seq?: number
        Id?: number
    }

    // 购买推送
    interface GS_ActDrawBuy_R {
        Seq?: number
        Id?: number
        Rewards?: Rewards
        ErrorCode?: number
        MSGDATA?: C_ActDrawBuy
    }

    // 周卡
    interface ActWeekCard {
        Taken?: Id_Int[] // id:领取天数
    }

    interface C_ActWeekCardInfo {
        Seq?: number
    }

    interface GS_ActWeekCardInfo_R {
        Info?: ActWeekCard
        ErrorCode?: number
        MSGDATA?: C_ActWeekCardInfo
    }

    // 购买推送
    interface GS_ActWeekCardBuy {
        Seq?: number
        Id?: number
        N?: number
        Rewards?: Rewards
    }

    // 登录
    interface C_Login {
        AuthId?: string
        AuthToken?: string // 认证 token
        Svr0?: string // 初始服名称
        Sdk?: string // sdk
        Plat?: string // 平台名称
        DevId?: string // 设备码
        P1?: string // 参数 1
        P2?: string // 参数 2
        P3?: string // 参数 3
        VerMajor?: string // 主版本号
        VerMinor?: string // 次版本号
        VerBuild?: string // build 版本号
    }

    // 登录回复
    interface GW_Login_R {
        AuthId?: string
        C1?: string
        ErrorCode?: number
        MSGDATA?: C_Login
    }

    interface C_Test1 {
        Id?: number
    }

    interface GW_Test1_R {
        Id?: number
        ErrorCode?: number
        MSGDATA?: C_Test1
    }

    interface C_Test2 {
        Id?: number
    }

    interface GW_Test2_R {
        Id?: { [key: number]: string }
        ErrorCode?: number
        MSGDATA?: C_Test2
    }

    // 登出
    interface GW_LogoutKick {
        Reason?: number
    }

    // 跨服玩家信息
    interface CrossPlr {
        Info?: PlayerInfo // 基本信息
        Hero?: { [key: number]: HeroInfo } // 英雄信息
        Team?: { [key: string]: TeamInfo } // 阵容信息
        Bsts?: BeastInfo[] // 神兽信息
        Ex?: CrossPlrEx // 玩法信息
        Robot?: number // 机器人组
    }

    // 玩家Ex信息
    interface CrossPlrEx {
        Base?: ExBase // 基本信息
        ArenaCham?: ExArenaCham // 神武百炼
        ArenaPeak?: ExArenaPeak // 巅峰争霸
        Company?: ExCompany // 公司
    }

    // 服务器Ex信息
    interface CrossSvrEx {
        AsgardGod?: SvrAsgardGod
        ArenaPeak?: SvrArenaPeak
    }

    // 跨服公会信息
    interface CrossGld {
        Info?: GuildInfo // 基本信息
        Plrs?: string[] // 玩家
        Ex?: CrossGldEx // 玩法信息
    }

    // 公会Ex信息
    interface CrossGldEx {
        GldMatch?: CrGldMatch
    }

    interface ExBase {
        GldTs?: number // 加入公会时间
    }

    interface ExArenaCham {
        Score?: number // 积分
    }

    interface SvrAsgardGod {
        Recs?: { [key: string]: number }
        Last?: { [key: string]: number }
        Loot?: { [key: string]: SvrAsgardGodLoot }
        Rwd?: { [key: string]: SvrAsgardGodLootRwd }
    }

    interface SvrAsgardGodLoot {
        Tar?: string // 挂机目标
        Tp?: number // 挂机类型
        Ts?: number // 挂机开始时间
    }

    interface SvrAsgardGodLootRwd {
        Arr?: Id_Int[]
    }

    interface SvrArenaPeak {
        Plrs?: { [key: string]: number } // 玩家id:位置
        Bats?: ArenaPeakBat[] // 当前战斗
        Idx?: number // 当前轮次
        BGuess?: boolean // 是否可竞猜
        Seq?: number // 当前竞猜seq
    }

    interface ArenaPeakBat {
        Seq?: number
        Atk?: string
        Def?: string
    }

    interface ExArenaPeak {
        Score?: number // 积分
        PlrId?: string // 竞猜玩家
        Guess?: number // 竞猜下注
    }

    interface CrGldMatch {
        Star?: number
    }

    interface ExCompany {
        Works?: CompanyHero[] // 工位
        Master?: Str_Int // 主人
        Slave?: Str_Int[] // 奴隶
    }

    interface GS_RegisterGameCr {
        Id?: number
    }

    interface CR_RegisterGameCr_R {
        Success?: boolean
        ErrorCode?: number
        MSGDATA?: GS_RegisterGameCr
    }

    // gs发送svr数据(master)
    interface GS_SyncSvr {
        Data?: CrossSvrEx
    }

    // cr同步svr数据
    interface CR_SyncSvr {
        Data?: CrossSvrEx
    }

    // gs发送公会数据
    interface GS_SyncGld {
        Data?: { [key: string]: CrossGld }
    }

    // cr同步公会数据
    interface CR_SyncGld {
        Data?: { [key: string]: CrossGld }
    }

    // gs发送玩家数据
    interface GS_SyncPlr {
        Data?: { [key: string]: CrossPlr }
    }

    // cr同步玩家数据
    interface CR_SyncPlr {
        Data?: { [key: string]: CrossPlr }
    }

    // RPC消息底层
    interface GS_RpcMsg {
        SvrId?: number // 来源服务器id
        Seq?: number // 回调seq
        Data?: any // 消息内容
        Ret?: boolean // 是否需要返回
    }

    interface GS_RpcMsg_R {
        Seq?: number // 回调seq
        Data?: any // 返回消息内容 (可以为空)
        ErrorCode?: number
        MSGDATA?: GS_RpcMsg
    }

    // 给跨服玩家发送消息
    interface GS_PlrMsg {
        PlrId?: string // 目标玩家
        Data?: any // 消息内容
    }

    // 跨服战斗确认
    interface GS_BatConfirm {
        Seq?: number
    }

    // 跨服战斗后录像推送
    interface GS_BatReplay {
        PlrId?: string
        Data?: GS_BattleReplay
    }

    // 跨服广播
    interface GS_Broadcast {
        Data?: any // 消息内容
    }

    // 跨服玩家邮件
    interface GS_PlrMail {
        PlrId?: string // 目标玩家
        Key?: number // 邮件配置id
        Dict?: { [key: string]: string } // 邮件文本替换内容
        Rwd?: Id_Int[] // 奖励
    }

    interface Chat {
        PlrId?: string // 发送者
        Tp?: number // 消息类型 1系统2世界3公会4跨服
        Ts?: number // 时间
        ExId?: number // 定制消息id
        Content?: string // 内容
    }

    // 聊天消息
    interface GS_ChatMsgAdd_RPC {
        Msg?: Chat
        ErrorCode?: number
    }

    // 增加申请列表
    interface GS_FriendAddApply_RPC {
        PlrId?: string
        From?: string
        ErrorCode?: number
    }

    // 增加好友
    interface GS_FriendAddFriend_RPC {
        PlrId?: string
        From?: string
        ErrorCode?: number
    }

    // 被赠送礼物
    interface GS_FriendAddGift_RPC {
        PlrId?: string
        From?: string
        ErrorCode?: number
    }

    // 删除好友
    interface GS_FriendDelFriend_RPC {
        PlrId?: string
        From?: string
        ErrorCode?: number
    }

    // 神武百炼挑战
    interface GS_ArenaChamFight_RPC {
        Atk?: string
        Def?: string
        ErrorCode?: number
    }

    // 神武百炼战报
    interface GS_ArenaChamReplay_RPC {
        PlrId?: string
        Replay?: ReplayInfo
        ErrorCode?: number
    }

    // 仙帝争锋挑战
    interface GS_AsgardGodFight_RPC {
        Atk?: string
        Def?: string
        ErrorCode?: number
    }

    // 仙帝争锋战报
    interface GS_AsgardGodReplay_RPC {
        PlrId?: string
        Replay?: ReplayInfo
        ErrorCode?: number
    }

    // 仙帝争锋挂机申请
    interface GS_AsgardGodLootAdd_RPC {
        Plr?: string
        Tar?: string
        Tp?: number
        ErrorCode?: number
    }

    // 仙帝争锋挂机结束
    interface GS_AsgardGodLootEnd_RPC {
        PlrId?: string
        ErrorCode?: number
    }

    // 排名改变
    interface GS_AsgardGodIdx_RPC {
        PlrId?: string
        Idx?: number
        ErrorCode?: number
    }

    // 巅峰争霸积分赛战报
    interface GS_ArenaPeakPlrRep_RPC {
        PlrId?: string
        Replays?: ReplayInfo[]
        ErrorCode?: number
    }

    // 巅峰争霸杯赛战报
    interface GS_ArenaPeakReplay_RPC {
        Replays?: { [key: number]: ReplayInfo }
        ErrorCode?: number
    }

    // 巅峰争霸竞猜结算
    interface GS_ArenaPeakGuessEnd_RPC {
        ErrorCode?: number
    }

    // master 匹配完成
    interface GS_GldMatchStart_RPC {
        Glds?: { [key: string]: string }
        ErrorCode?: number
    }

    // 战报
    interface GS_GldMatchReplay_RPC {
        PlrId?: string
        Replay?: ReplayInfo
        ErrorCode?: number
    }

    // 玩家星数改变
    interface GS_GldMatchPlrStar_RPC {
        PlrId?: string
        Star?: number
        ErrorCode?: number
    }

    // 公会星数改变
    interface GS_GldMatchGldStar_RPC {
        GldId?: string
        Star?: number
        ErrorCode?: number
    }

    // 日志
    interface GS_CompanyLog_RPC {
        PlrId?: string // owner
        Id?: number
        Name?: string
        ErrorCode?: number
    }

    // 挑战主人
    interface GS_CompanyFightMaster_RPC {
        PlrId?: string // owner
        AtkId?: string
        ErrorCode?: number
    }

    // 玩家结算
    interface GS_CompanySettlement_RPC {
        PlrId?: string // owner
        ErrorCode?: number
    }

    // 抓奴隶
    interface GS_CompanyFightSlave_RPC {
        PlrId?: string // owner
        AtkId?: string
        ErrorCode?: number
    }

    // 奴隶改变
    interface GS_CompanySlave_RPC {
        PlrId?: string // owner
        Slave?: string
        Add?: boolean
        ErrorCode?: number
    }

    // 注册游戏服
    interface GS_RegisterGame {
        Id?: number
    }

    interface RT_RegisterGame_R {
        Success?: boolean
        ErrorCode?: number
        MSGDATA?: GS_RegisterGame
    }

    // 注册网关
    interface GW_RegisterGate {
        Id?: number
    }

    interface GS_RegisterGate_R {
        Success?: boolean
        ErrorCode?: number
        MSGDATA?: GW_RegisterGate
    }

    // 玩家上线
    interface GW_UserOnline {
        Sid?: number
        UserId?: string
        AuthId?: string
        Svr0?: string
        Sdk?: string
        Plat?: string
        DevId?: string
        LoginIP?: string
    }

    // 通知 game 玩家登出
    interface GW_LogoutPlayer {
        Sid?: number
    }

    // game 踢人
    interface GS_Kick {
        Sid?: number
        Reason?: number
    }

    // 测试
    interface GS_Test {
        Sid?: number
    }

}
