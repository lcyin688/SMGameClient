export namespace GameData {

    /** 传入SDK的玩家信息 */
    export class PlrInfo2Sdk {
        roleId: string;
        roleName: string;
        roleLevel: number;
        serverId: number;
        serverName: string;
        vipLevel: number;
        unionName: string;
        money: number;
        createTime: number;
        areaId: number;
        rechargePoint: number;
        eventName: string;
        power: number;
        sumBill: number;
    }



    /** 玩家设置信息(头像/头像框/称号) */
    export class PlayerSet {
        head: number;
        hframe: number;
        title: number;
        constructor() {
            this.reset();
        }
        public reset() {
            this.head = 0;
            this.hframe = 0;
            this.title = 0;
        }
    }

}
