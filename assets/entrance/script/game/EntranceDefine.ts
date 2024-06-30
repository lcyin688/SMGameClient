export namespace EntraDef {

    /** 请求netCfg回调 */
    export type QuestNetCfgFunc = (code: QuestErr, info: NetCfg) => void;
    /** 确认是否使用白名单 */
    export type ComfirmWhiteFunc = (resultCb: (ret: boolean) => void) => void;

    //服务器大区类型
    export enum AreaItemType {
        recommend = 1,  //推荐
        owned = 2,      //已拥有
        area = 3,       //普通
        svrGroup = 4,   //服务器组 
    }

    /** 保存于服务器列表中的玩家信息 */
    export class PlrInfo2Svr {
        svrid: string;
        svrSeq: number;
        level: number;
        head: number;
        username: string;
        atkpwr: number;
        lastTs: number;  //最后一次登录时间戳
    }

    /** 大区配置信息 */
    export class AreaUnit {
        areaId: number;     //大区id
        name: string;       //大区名称
        svrlist: string;    //服务器列表URL
        userinfo: string;   //查找已有角色
    }

    /** 大区详情 */
    export class AreaDetail {
        areaId: number;
        name: string;
        svrUrl: string;
        svrList: SvrUnit[];
        constructor() {
            this.areaId = 0;
            this.name = '';
            this.svrUrl = '';
            this.svrList = [];
        }
    }

    /** 网络配置 */
    export class NetCfg {
        area: { [key: number]: AreaUnit };  //大区信息
        noticeUrl: string;                  //公告地址
        checkWhite: string;                 //白名单检测地址
        reportUrl: string;                  //未使用
        resUrlLine: string;                 //正式更新地址
        resUrlWhite: string;                //白名单更新地址
        nginx: string;                      //H5代理访问socket
        timeZone: string;                   //服务器时区
        miniVersion: string;                //线上包最低版本，如果用户包AppVer比这个版本还低，则需要用户换包
        resVerLine: string;                 //热更资源版本，先根据这个和客户端资源版本比较看是否需要热更
        resVerWhite: string;                //热更资源版本(白名单用户使用)
        autoPopNotice: string;              //自动弹出公告: 0：不弹出， 非0：弹出
    }

    /** 服务器数据 */
    export class SvrUnit {
        svrKey: string;     //唯一编号名称：game1 game2 ...
        seq: number;        //area*10000+id
        id: number;         //id
        ip: string;         //服务器ip
        port: number;       //端口
        wsport: number;     //WS端口
        status: number;     //状态(流畅·满服·维护)
        text: string;       //服务器名称
        tips: string;       //维护提示
        flag: string;       //标记(新服·热服·提审·测试)
        recommend: number;  //是否推荐
        order: number;      //排序ID
        constructor() {
            this.svrKey = '';
            this.seq = 0;
            this.id = 0;
            this.ip = '';
            this.port = 0;
            this.status = 0;
            this.svrKey = '';
            this.text = '';
            this.tips = '';
            this.wsport = 0;
            this.flag = '';
            this.recommend = 0;
            this.order = 0;
        }
    }

    /** 服务器标志 */
    export enum SvrFlag {
        /** 测试服 */
        test = 'test',
        /** 提审服 */
        audit = 'audit',
        /** 新服 */
        new = 'new',
        /** 热服 */
        hot = 'hot',
    }

    /** http请求错误类型 */
    export enum QuestErr {
        unknown = 0,    //无错误
        netCfg = 1,     //获取switch信息失败
        whiteName = 2,  //获取白名单信息失败
    }


}