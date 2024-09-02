declare namespace msg {
    interface Str_Int {
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

    interface Ccy {
        Id?: number
        Val?: number
    }

    // 排行榜第一的
    interface C_RankTop {
    }

    interface GS_RankTop_R {
        ErrorCode?: number
        MSGDATA?: C_RankTop
    }

    interface Id_Int {
        Id?: number
        N?: number
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

}
