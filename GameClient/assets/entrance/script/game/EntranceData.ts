import { EntraDef } from "./EntranceDefine";
import { GameConsts } from "../../../Script/game/GameConsts";
import { GameCalc } from "../../../Script/game/GameCalculator";
import { PlatDef } from "../platform/PlatDefine";

/** 游戏入口数据 */
export class EntraData {
    static _ins: EntraData = null;
    static get ins() {
        if (!EntraData._ins) {
            EntraData._ins = new EntraData();
        }
        return EntraData._ins;
    }

    /** 当前选择服务器 */
    private _curSvrUnit: EntraDef.SvrUnit;
    public set curSvrUnit(value: EntraDef.SvrUnit) {
        this._curSvrUnit = value;
    }
    public get curSvrUnit() {
        return this._curSvrUnit;
    }
    /** 网络配置 */
    private _netCfg: EntraDef.NetCfg;
    public get netCfg(): EntraDef.NetCfg {
        return this._netCfg;
    }
    public set netCfg(v: EntraDef.NetCfg) {
        this._netCfg = v;
    }
    /** 登录参数:重新连接会用 */
    private _loginParam: any;
    public get loginParam(): any {
        return this._loginParam;
    }
    public set loginParam(v: any) {
        this._loginParam = v;
    }
    /** 大区配置 */
    private mapArea: Map<number, EntraDef.AreaDetail>;

    //---------DEV相关-----------
    /** 是否启用白名单 */
    private _isWhite: boolean;
    public get isWhite() {
        return this._isWhite;
    }
    public set isWhite(value: boolean) {
        this._isWhite = value;
    }
    /** 自定义热更地址 */
    private _customHotUrl: string;
    public get customHotUrl(): string {
        return this._customHotUrl;
    }
    public set customHotUrl(v: string) {
        this._customHotUrl = v;
    }
    /** 已拥有角色 */

    private _owned: EntraDef.PlrInfo2Svr[] = undefined
    public get owned(): EntraDef.PlrInfo2Svr[] {
        return this._owned;
    }
    public set owned(v: EntraDef.PlrInfo2Svr[]) {
        this._owned = v;
    }

    //---------DEV相关-----------

    constructor() {
        this.curSvrUnit = null;
        this._netCfg = null;
        this.mapArea = null;

        this.isWhite = undefined;
        this.customHotUrl = null;
    }

    //重登录：先重登录sdk,再重登陆游戏
    public reLogin(sucCb: Function, failCb: Function) {
        if (!this.loginParam) {
            failCb && failCb();
            return;
        }
        // let param: msg.C_Login = Object.copyDepth(this.loginParam);
        // param.P1 = "reconnect";
        // c2f.net.sendMsg(
        //     msgid.C_Login,
        //     param,
        //     {
        //         getErr: true,
        //         ops: [msgid.GW_Login_R],
        //         callback: sucCb,
        //     });
    }


}

declare global {
    interface ISZG {
        entrance: EntraData;
    }
}

szg.entrance = EntraData.ins;
export { };