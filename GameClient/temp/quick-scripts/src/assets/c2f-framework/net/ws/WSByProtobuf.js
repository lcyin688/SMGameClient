"use strict";
cc._RF.push(module, 'b543fBqDRROQ45IvhDtiYzs', 'WSByProtobuf');
// c2f-framework/net/ws/WSByProtobuf.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.WSByProtobuf = void 0;
var msgname_1 = require("../../../resources/proto/msgname");
var WebService_1 = require("./WebService");
var WSByProtobuf = /** @class */ (function (_super) {
    __extends(WSByProtobuf, _super);
    function WSByProtobuf() {
        var _this = _super.call(this) || this;
        _this.messages = new Uint8Array(0);
        _this.root = undefined;
        return _this;
    }
    WSByProtobuf.prototype.setRoot = function (root) {
        this.root = root;
    };
    /** 加密消息回调 */
    WSByProtobuf.prototype.setEncryptCb = function (cb) {
        this.encryptCb = cb;
    };
    /** 解密消息回调 */
    WSByProtobuf.prototype.setDecryptCb = function (cb) {
        this.decryptCb = cb;
    };
    /** 收到消息 */
    WSByProtobuf.prototype.onMessage = function (event) {
        var response = new Uint8Array(event.data);
        // this.decryptCb && this.decryptCb(response);
        var newMsg = new Uint8Array(this.messages.length + response.length);
        newMsg.set(this.messages, 0);
        newMsg.set(response, this.messages.length);
        this.messages = newMsg;
        while (this.messages.length >= 8) {
            var dv = new DataView(this.messages.buffer, this.messages.byteOffset, this.messages.byteLength);
            var len = dv.getUint32(0, false);
            var op = dv.getUint32(4, false);
            if (len > this.messages.length) {
                break;
            }
            var data = this.messages.subarray(8, len);
            var opName = msgname_1.msgname[op];
            if (!opName) {
                cc.log("can not find op:", op);
                return;
            }
            var name = "msg." + opName;
            var proto = this.root.build(name);
            if (!proto) {
                cc.log("can not find proto:", name);
                return;
            }
            var rep = proto.decode(data);
            // if (CC_DEV && op != msgid.GS_TimeSync_R) {
            //     let noCpyIds = [msgid.GS_GetLoginData_R];
            //     if (noCpyIds.indexOf(op) >= 0 || data.byteLength > 3000) {
            //         cc.log(op, name, rep);
            //     } else {
            //         cc.log(op, name, Object.copyDepth(rep));
            //     }
            // }
            this.messageCb && this.messageCb(op, rep);
            //this.dispatchMsg(op, rep);
            this.messages = this.messages.subarray(len);
        }
    };
    /** 发送消息 */
    WSByProtobuf.prototype.tcpSend = function (op, data) {
        // if (this.socket.readyState === WebSocket.OPEN) {
        //     this.socket.send(data);
        // }
        if (this.state !== WebService_1.SocketState.Connected) {
            return false;
        }
        if (!this.socket || this.socket.readyState != WebSocket.OPEN) {
            return false;
        }
        var msgName = msgname_1.msgname[op];
        if (!msgName) {
            cc.warn("don't find msg for id:" + op);
            return false;
        }
        // if (CC_DEV && op != msgid.C_TimeSync) {
        //     cc.log("network.tcpSend msgid = " + op);
        //     cc.log(Object.copyDepth(data));
        // }
        var name = "msg." + msgName;
        var message = this.root.build(name);
        var msg = new message();
        for (var p in data) {
            if (data.hasOwnProperty(p)) {
                msg.set(p, data[p], false);
            }
        }
        var bytes = new Uint8Array(msg.encode().toBuffer());
        var buffer = new ArrayBuffer(bytes.byteLength + 8);
        var dv = new DataView(buffer);
        dv.setUint32(0, bytes.byteLength + 8, false);
        dv.setUint32(4, op, false);
        for (var i = 0, length = bytes.byteLength; i < length; i++) {
            dv.setUint8(i + 8, bytes[i]);
        }
        var content = new Uint8Array(buffer);
        this.encryptCb && this.encryptCb(content);
        this.socket.send(content.buffer);
        return true;
    };
    return WSByProtobuf;
}(WebService_1.WebService));
exports.WSByProtobuf = WSByProtobuf;

cc._RF.pop();