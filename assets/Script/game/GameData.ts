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

    /** 背包道具数据定义 */
    export class BagUnit {
        id: number;
        num: number;
        constructor() {
            this.id = 0;
            this.num = 0;
        }
    }

    /** 英雄基本信息 */
    export class HeroUnit {
        proto: msg.BagHero;
        preAtkPwr: number;  //更改前战力
        attrs: { [key: number]: number };
        potentialMap: Map<number, number>; //潜能Map<id, level>
        currenHero: any;
        props: Map<number, number>;
        /**能否升星 */
        isCanStarUp?: boolean
        constructor(src: msg.BagHero) {
            if (src) {
                this.proto = src;
            } else {
                this.proto = {};
                this.proto.Hero.Seq = 0;
                this.proto.Hero.Id = 0;
                this.proto.Hero.Lv = 1;
                this.proto.Hero.Step = 0;
                this.proto.Hero.Star = 0;
                this.proto.Lock = false;
                this.proto.Hero.AtkPwr = 0;
                this.proto.Hero.CurSkin = 0;
                this.proto.InRes = false
            }
            this.preAtkPwr = 0;
            this.attrs = {};
            this.potentialMap = new Map();
            this.props = new Map();
        }
    }

    /** 装备信息 */
    export class EquipUnit {
        /** 唯一ID */
        Seq?: number
        /**道具ID 41-44打头 是装备  45 是法宝 */
        Id?: number
        /**哪个英雄穿戴 唯一ID */
        HeroSeq?: number
        /**装备类型 武器/首饰/ */
        Slot?: number
        /** 战力 */
        // AtkPwr?: number
        /**是否锁定 */
        Lock?: boolean
        /** 精炼等级 */
        Lv?: number
        /**属性组 */
        GAttr?: number[]
        constructor() {
            this.Seq = 0
            this.Id = 0
            this.HeroSeq = 0
            this.Slot = 0
            // this.AtkPwr = 0
            this.Lock = false
            this.Lv = 0
            this.GAttr = []
        }
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
