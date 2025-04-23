import { PublicData } from './plrBase/PublicData';
import { LoginData } from './login/LoginData';
import { NHWCData } from './nhwc/NHWCData';


/** 玩家数据总领：具体模块数据 */
export class PlayerData {
    static _ins: PlayerData = null;
    static get ins() {
        if (!PlayerData._ins) {
            PlayerData._ins = new PlayerData();
        }
        return PlayerData._ins;
    }

    private beforeLoadCfg: { [key: number]: any };

    /** 配置加载成功 */
    private _cfgLoaded: boolean = false;
    public get cfgLoaded(): boolean {
        return this._cfgLoaded;
    }
    public set cfgLoaded(value: boolean) {
        this._cfgLoaded = value;
        if (value && this.beforeLoadCfg) {
            for (let key in this.beforeLoadCfg) {
                this.dispatchMsg(Number(key), this.beforeLoadCfg[key]);
            }
            this.beforeLoadCfg = null;
        }
    }

    /** 公用数据 */
    private _public: PublicData;
    /** 公用数据 */
    public get public() {
        return this._public;
    }
    /** 登录数据 */
    private _login: LoginData;

    /** 你画我猜小游戏数据 */
    private _nhwcData: NHWCData;
    

    public get login() {
        return this._login;
    }

    public get nhwcData() {
        return this._nhwcData;
    }

    /** 消息分发列表 */
    private dispatchs: any[];

    constructor() {
        this.dispatchs = [];
    }

    /** 初始化 */
    public initPlayer() {
        c2f.webSocket.setPlrMsgHandle(this.handleMsg.bind(this))
    }

    /** 清空模块数据 */
    private clearModules() {
        for (let one of this.dispatchs) {
            if (one.reset) {
                one.reset();
            }
            if (one.release) {
                one.release();
            }
        }
        this._public = null;
        this._login = null;
        this._nhwcData = null;
        this.dispatchs = [];
    }

    /** 分发网络消息 */
    public handleMsg(op: number, data: any) {
        if (this.cfgLoaded) {
            this.dispatchMsg(op, data);
        } else {
            this.beforeLoadCfg = this.beforeLoadCfg || {};
            this.beforeLoadCfg[op] = data;
        }
    }
    private dispatchMsg(op: number, data: any) {
        if (MsgId.MSG_SC_Login == op) {
            this.initModules();
        }
        //跨天推送玩家信息消息从这里转换分发
        let msgName = c2f.net.getMsgName(op);
        if (MsgId.MSG_SC_Login == op) {
            msgName = c2f.net.getMsgName(MsgId.MSG_SC_Login)
        }
        for (let one of this.dispatchs) {
            if (one[msgName]) {
                one[msgName](data);
            }
        }
        // if (this.redDot) {
        //     this.redDot.handleMsg(op, data);
        // }
    }


    public initModules() {
        this.dispatchs = [];
        this._public = new PublicData();
        this.dispatchs.push(this._public);
        this._login = new LoginData();
        this.dispatchs.push(this._login);
        this._nhwcData = new NHWCData();
        this.dispatchs.push(this._nhwcData);
    }
}

declare global {
    interface ISZG {
        player: PlayerData;
    }
}

szg.player = PlayerData.ins;
export {};
