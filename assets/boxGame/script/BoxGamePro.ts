declare namespace msgBoxGame {

    // 玩家上线
    interface GW_Login {
        success: boolean,
        id: number,
        token: string,
        avatar: string,
        nickName: string,
        sex: number,
        nowMoney: number,
        nowDiamond: number,
        difference: number,
        nowCoin: number,
        nowCash: number,
        helpLuckTimes: number,
        freeLuckTimes: number,
        boxAdLuckTimes: number,
        timeBoxs: number,
        gameLevel: number,
        endTime: number,
        openId: string,
        isNewGame: boolean,
        gameRet: GameRet
    }

    // 通知 game 玩家登出
    interface GameRet {
        isOver: boolean,
        coinType: number,
        coinNum: number,
        message: string
    }

}
