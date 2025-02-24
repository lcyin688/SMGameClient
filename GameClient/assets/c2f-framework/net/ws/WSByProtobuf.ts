import { msgid } from "../../../resources/proto/msgid";
import { msgname } from "../../../resources/proto/msgname";
import { SocketState, WebService } from "./WebService";

export class WSByProtobuf extends WebService {

    protected messages: any;
    protected root: any;
    protected encryptCb: Function;    //消息加密回调
    protected decryptCb: Function;    //消息解码回调

    constructor() {
        super();
        this.messages = new Uint8Array(0);
        this.root = undefined;
    }

    public setRoot(root: any) {
        this.root = root;
    }

    /** 加密消息回调 */
    public setEncryptCb(cb: Function) {
        this.encryptCb = cb;
    }

    /** 解密消息回调 */
    public setDecryptCb(cb: Function) {
        this.decryptCb = cb;
    }

    /** 收到消息 */
    protected onMessage(event: any) {
        let response = new Uint8Array(event.data);
        // this.decryptCb && this.decryptCb(response);

        let newMsg = new Uint8Array(this.messages.length + response.length);
        newMsg.set(this.messages, 0);
        newMsg.set(response, this.messages.length);
        this.messages = newMsg;

        while (this.messages.length >= 8) {
            let dv = new DataView(this.messages.buffer, this.messages.byteOffset, this.messages.byteLength);
            let len = dv.getUint32(0, false);
            let op = dv.getUint32(4, false);

            if (len > this.messages.length) {
                break;
            }

            let data = this.messages.subarray(8, len);
            let opName = msgname[op];
            if (!opName) {
                cc.log("can not find op:", op);
                return;
            }
            let name = "msg." + opName;
            let proto = this.root.build(name);
            if (!proto) {
                cc.log("can not find proto:", name);
                return;
            }
            let rep = proto.decode(data);
            if (CC_DEV && op != msgid.GS_TimeSync_R) {
                let noCpyIds = [msgid.GS_GetLoginData_R];
                if (noCpyIds.indexOf(op) >= 0 || data.byteLength > 3000) {
                    cc.log(op, name, rep);
                } else {
                    cc.log(op, name, Object.copyDepth(rep));
                }
            }
            this.messageCb && this.messageCb(op, rep);
            //this.dispatchMsg(op, rep);
            this.messages = this.messages.subarray(len);
        }
    }

    /** 发送消息 */
    public tcpSend(op: number, data: any) {
        // if (this.socket.readyState === WebSocket.OPEN) {
        //     this.socket.send(data);
        // }
        if (this.state !== SocketState.Connected) {
            return false;
        }
        if (!this.socket || this.socket.readyState != WebSocket.OPEN) {
            return false;
        }
        const msgName = msgname[op];
        if (!msgName) {
            cc.warn(`don't find msg for id:${op}`);
            return false;
        }

        if (CC_DEV && op != msgid.C_TimeSync) {
            cc.log("network.tcpSend msgid = " + op);
            cc.log(Object.copyDepth(data));
        }

        let name = "msg." + msgName;
        let message = this.root.build(name);
        let msg = new message();
        for (const p in data) {
            if (data.hasOwnProperty(p)) {
                msg.set(p, data[p], false);
            }
        }
        let bytes = new Uint8Array(msg.encode().toBuffer());
        let buffer = new ArrayBuffer(bytes.byteLength + 8);
        let dv = new DataView(buffer);
        dv.setUint32(0, bytes.byteLength + 8, false);
        dv.setUint32(4, op, false);
        for (var i = 0, length = bytes.byteLength; i < length; i++) {
            dv.setUint8(i + 8, bytes[i]);
        }
        let content = new Uint8Array(buffer);
        this.encryptCb && this.encryptCb(content);
        this.socket.send(content.buffer);

        return true;
    }
}