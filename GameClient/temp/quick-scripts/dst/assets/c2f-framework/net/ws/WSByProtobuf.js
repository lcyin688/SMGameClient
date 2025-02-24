
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/net/ws/WSByProtobuf.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
var msgid_1 = require("../../../resources/proto/msgid");
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
            if (CC_DEV && op != msgid_1.msgid.GS_TimeSync_R) {
                var noCpyIds = [msgid_1.msgid.GS_GetLoginData_R];
                if (noCpyIds.indexOf(op) >= 0 || data.byteLength > 3000) {
                    cc.log(op, name, rep);
                }
                else {
                    cc.log(op, name, Object.copyDepth(rep));
                }
            }
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
        if (CC_DEV && op != msgid_1.msgid.C_TimeSync) {
            cc.log("network.tcpSend msgid = " + op);
            cc.log(Object.copyDepth(data));
        }
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL25ldC93cy9XU0J5UHJvdG9idWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUF1RDtBQUN2RCw0REFBMkQ7QUFDM0QsMkNBQXVEO0FBRXZEO0lBQWtDLGdDQUFVO0lBT3hDO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBRkcsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxLQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQzs7SUFDMUIsQ0FBQztJQUVNLDhCQUFPLEdBQWQsVUFBZSxJQUFTO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxhQUFhO0lBQ04sbUNBQVksR0FBbkIsVUFBb0IsRUFBWTtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsYUFBYTtJQUNOLG1DQUFZLEdBQW5CLFVBQW9CLEVBQVk7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELFdBQVc7SUFDRCxnQ0FBUyxHQUFuQixVQUFvQixLQUFVO1FBQzFCLElBQUksUUFBUSxHQUFHLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyw4Q0FBOEM7UUFFOUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QixNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUks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QUMsRUFBRSxNQUFNLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hELEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQztRQUNELElBQUksT0FBTyxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFakMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FySEEsQUFxSEMsQ0FySGlDLHVCQUFVLEdBcUgzQztBQXJIWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1zZ2lkIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9wcm90by9tc2dpZFwiO1xuaW1wb3J0IHsgbXNnbmFtZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvcHJvdG8vbXNnbmFtZVwiO1xuaW1wb3J0IHsgU29ja2V0U3RhdGUsIFdlYlNlcnZpY2UgfSBmcm9tIFwiLi9XZWJTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBXU0J5UHJvdG9idWYgZXh0ZW5kcyBXZWJTZXJ2aWNlIHtcblxuICAgIHByb3RlY3RlZCBtZXNzYWdlczogYW55O1xuICAgIHByb3RlY3RlZCByb290OiBhbnk7XG4gICAgcHJvdGVjdGVkIGVuY3J5cHRDYjogRnVuY3Rpb247ICAgIC8v5raI5oGv5Yqg5a+G5Zue6LCDXG4gICAgcHJvdGVjdGVkIGRlY3J5cHRDYjogRnVuY3Rpb247ICAgIC8v5raI5oGv6Kej56CB5Zue6LCDXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG5ldyBVaW50OEFycmF5KDApO1xuICAgICAgICB0aGlzLnJvb3QgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFJvb3Qocm9vdDogYW55KSB7XG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gICAgfVxuXG4gICAgLyoqIOWKoOWvhua2iOaBr+WbnuiwgyAqL1xuICAgIHB1YmxpYyBzZXRFbmNyeXB0Q2IoY2I6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMuZW5jcnlwdENiID0gY2I7XG4gICAgfVxuXG4gICAgLyoqIOino+Wvhua2iOaBr+WbnuiwgyAqL1xuICAgIHB1YmxpYyBzZXREZWNyeXB0Q2IoY2I6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMuZGVjcnlwdENiID0gY2I7XG4gICAgfVxuXG4gICAgLyoqIOaUtuWIsOa2iOaBryAqL1xuICAgIHByb3RlY3RlZCBvbk1lc3NhZ2UoZXZlbnQ6IGFueSkge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBuZXcgVWludDhBcnJheShldmVudC5kYXRhKTtcbiAgICAgICAgLy8gdGhpcy5kZWNyeXB0Q2IgJiYgdGhpcy5kZWNyeXB0Q2IocmVzcG9uc2UpO1xuXG4gICAgICAgIGxldCBuZXdNc2cgPSBuZXcgVWludDhBcnJheSh0aGlzLm1lc3NhZ2VzLmxlbmd0aCArIHJlc3BvbnNlLmxlbmd0aCk7XG4gICAgICAgIG5ld01zZy5zZXQodGhpcy5tZXNzYWdlcywgMCk7XG4gICAgICAgIG5ld01zZy5zZXQocmVzcG9uc2UsIHRoaXMubWVzc2FnZXMubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG5ld01zZztcblxuICAgICAgICB3aGlsZSAodGhpcy5tZXNzYWdlcy5sZW5ndGggPj0gOCkge1xuICAgICAgICAgICAgbGV0IGR2ID0gbmV3IERhdGFWaWV3KHRoaXMubWVzc2FnZXMuYnVmZmVyLCB0aGlzLm1lc3NhZ2VzLmJ5dGVPZmZzZXQsIHRoaXMubWVzc2FnZXMuYnl0ZUxlbmd0aCk7XG4gICAgICAgICAgICBsZXQgbGVuID0gZHYuZ2V0VWludDMyKDAsIGZhbHNlKTtcbiAgICAgICAgICAgIGxldCBvcCA9IGR2LmdldFVpbnQzMig0LCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGlmIChsZW4gPiB0aGlzLm1lc3NhZ2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMubWVzc2FnZXMuc3ViYXJyYXkoOCwgbGVuKTtcbiAgICAgICAgICAgIGxldCBvcE5hbWUgPSBtc2duYW1lW29wXTtcbiAgICAgICAgICAgIGlmICghb3BOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwiY2FuIG5vdCBmaW5kIG9wOlwiLCBvcCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG5hbWUgPSBcIm1zZy5cIiArIG9wTmFtZTtcbiAgICAgICAgICAgIGxldCBwcm90byA9IHRoaXMucm9vdC5idWlsZChuYW1lKTtcbiAgICAgICAgICAgIGlmICghcHJvdG8pIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJjYW4gbm90IGZpbmQgcHJvdG86XCIsIG5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZXAgPSBwcm90by5kZWNvZGUoZGF0YSk7XG4gICAgICAgICAgICBpZiAoQ0NfREVWICYmIG9wICE9IG1zZ2lkLkdTX1RpbWVTeW5jX1IpIHtcbiAgICAgICAgICAgICAgICBsZXQgbm9DcHlJZHMgPSBbbXNnaWQuR1NfR2V0TG9naW5EYXRhX1JdO1xuICAgICAgICAgICAgICAgIGlmIChub0NweUlkcy5pbmRleE9mKG9wKSA+PSAwIHx8IGRhdGEuYnl0ZUxlbmd0aCA+IDMwMDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKG9wLCBuYW1lLCByZXApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhvcCwgbmFtZSwgT2JqZWN0LmNvcHlEZXB0aChyZXApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VDYiAmJiB0aGlzLm1lc3NhZ2VDYihvcCwgcmVwKTtcbiAgICAgICAgICAgIC8vdGhpcy5kaXNwYXRjaE1zZyhvcCwgcmVwKTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXMgPSB0aGlzLm1lc3NhZ2VzLnN1YmFycmF5KGxlbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5Y+R6YCB5raI5oGvICovXG4gICAgcHVibGljIHRjcFNlbmQob3A6IG51bWJlciwgZGF0YTogYW55KSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTikge1xuICAgICAgICAvLyAgICAgdGhpcy5zb2NrZXQuc2VuZChkYXRhKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gU29ja2V0U3RhdGUuQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnNvY2tldCB8fCB0aGlzLnNvY2tldC5yZWFkeVN0YXRlICE9IFdlYlNvY2tldC5PUEVOKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbXNnTmFtZSA9IG1zZ25hbWVbb3BdO1xuICAgICAgICBpZiAoIW1zZ05hbWUpIHtcbiAgICAgICAgICAgIGNjLndhcm4oYGRvbid0IGZpbmQgbXNnIGZvciBpZDoke29wfWApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKENDX0RFViAmJiBvcCAhPSBtc2dpZC5DX1RpbWVTeW5jKSB7XG4gICAgICAgICAgICBjYy5sb2coXCJuZXR3b3JrLnRjcFNlbmQgbXNnaWQgPSBcIiArIG9wKTtcbiAgICAgICAgICAgIGNjLmxvZyhPYmplY3QuY29weURlcHRoKGRhdGEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBuYW1lID0gXCJtc2cuXCIgKyBtc2dOYW1lO1xuICAgICAgICBsZXQgbWVzc2FnZSA9IHRoaXMucm9vdC5idWlsZChuYW1lKTtcbiAgICAgICAgbGV0IG1zZyA9IG5ldyBtZXNzYWdlKCk7XG4gICAgICAgIGZvciAoY29uc3QgcCBpbiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgICAgIG1zZy5zZXQocCwgZGF0YVtwXSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBieXRlcyA9IG5ldyBVaW50OEFycmF5KG1zZy5lbmNvZGUoKS50b0J1ZmZlcigpKTtcbiAgICAgICAgbGV0IGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihieXRlcy5ieXRlTGVuZ3RoICsgOCk7XG4gICAgICAgIGxldCBkdiA9IG5ldyBEYXRhVmlldyhidWZmZXIpO1xuICAgICAgICBkdi5zZXRVaW50MzIoMCwgYnl0ZXMuYnl0ZUxlbmd0aCArIDgsIGZhbHNlKTtcbiAgICAgICAgZHYuc2V0VWludDMyKDQsIG9wLCBmYWxzZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBieXRlcy5ieXRlTGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGR2LnNldFVpbnQ4KGkgKyA4LCBieXRlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvbnRlbnQgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgICAgICB0aGlzLmVuY3J5cHRDYiAmJiB0aGlzLmVuY3J5cHRDYihjb250ZW50KTtcbiAgICAgICAgdGhpcy5zb2NrZXQuc2VuZChjb250ZW50LmJ1ZmZlcik7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufSJdfQ==