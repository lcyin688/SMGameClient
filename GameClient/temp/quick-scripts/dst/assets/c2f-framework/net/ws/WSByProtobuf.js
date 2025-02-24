
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL25ldC93cy9XU0J5UHJvdG9idWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUEyRDtBQUMzRCwyQ0FBdUQ7QUFFdkQ7SUFBa0MsZ0NBQVU7SUFPeEM7UUFBQSxZQUNJLGlCQUFPLFNBR1Y7UUFGRyxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEtBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDOztJQUMxQixDQUFDO0lBRU0sOEJBQU8sR0FBZCxVQUFlLElBQVM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELGFBQWE7SUFDTixtQ0FBWSxHQUFuQixVQUFvQixFQUFZO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxhQUFhO0lBQ04sbUNBQVksR0FBbkIsVUFBb0IsRUFBWTtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsV0FBVztJQUNELGdDQUFTLEdBQW5CLFVBQW9CLEtBQVU7UUFDMUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLDhDQUE4QztRQUU5QyxJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFFdkIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDOUIsSUFBSSxFQUFFLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNoRyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUVoQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDNUIsTUFBTTthQUNUO1lBRUQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzFDLElBQUksTUFBTSxHQUFHLGlCQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDVCxFQUFFLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQixPQUFPO2FBQ1Y7WUFDRCxJQUFJLElBQUksR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQzNCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDcEMsT0FBTzthQUNWO1lBQ0QsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3Qiw2Q0FBNkM7WUFDN0MsZ0RBQWdEO1lBQ2hELGlFQUFpRTtZQUNqRSxpQ0FBaUM7WUFDakMsZUFBZTtZQUNmLG1EQUFtRDtZQUNuRCxRQUFRO1lBQ1IsSUFBSTtZQUNKLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDMUMsNEJBQTRCO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDL0M7SUFDTCxDQUFDO0lBRUQsV0FBVztJQUNKLDhCQUFPLEdBQWQsVUFBZSxFQUFVLEVBQUUsSUFBUztRQUNoQyxtREFBbUQ7UUFDbkQsOEJBQThCO1FBQzlCLElBQUk7UUFDSixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssd0JBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDdEMsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQzFELE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsSUFBTSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1YsRUFBRSxDQUFDLElBQUksQ0FBQywyQkFBeUIsRUFBSSxDQUFDLENBQUM7WUFDdkMsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCwwQ0FBMEM7UUFDMUMsK0NBQStDO1FBQy9DLHNDQUFzQztRQUN0QyxJQUFJO1FBRUosSUFBSSxJQUFJLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUM1QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFJLEdBQUcsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3hCLEtBQUssSUFBTSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ2xCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzlCO1NBQ0o7UUFDRCxJQUFJLEtBQUssR0FBRyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNwRCxJQUFJLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksRUFBRSxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hELEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQztRQUNELElBQUksT0FBTyxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFakMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FySEEsQUFxSEMsQ0FySGlDLHVCQUFVLEdBcUgzQztBQXJIWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1zZ25hbWUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3Byb3RvL21zZ25hbWVcIjtcbmltcG9ydCB7IFNvY2tldFN0YXRlLCBXZWJTZXJ2aWNlIH0gZnJvbSBcIi4vV2ViU2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgV1NCeVByb3RvYnVmIGV4dGVuZHMgV2ViU2VydmljZSB7XG5cbiAgICBwcm90ZWN0ZWQgbWVzc2FnZXM6IGFueTtcbiAgICBwcm90ZWN0ZWQgcm9vdDogYW55O1xuICAgIHByb3RlY3RlZCBlbmNyeXB0Q2I6IEZ1bmN0aW9uOyAgICAvL+a2iOaBr+WKoOWvhuWbnuiwg1xuICAgIHByb3RlY3RlZCBkZWNyeXB0Q2I6IEZ1bmN0aW9uOyAgICAvL+a2iOaBr+ino+eggeWbnuiwg1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBuZXcgVWludDhBcnJheSgwKTtcbiAgICAgICAgdGhpcy5yb290ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRSb290KHJvb3Q6IGFueSkge1xuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xuICAgIH1cblxuICAgIC8qKiDliqDlr4bmtojmga/lm57osIMgKi9cbiAgICBwdWJsaWMgc2V0RW5jcnlwdENiKGNiOiBGdW5jdGlvbikge1xuICAgICAgICB0aGlzLmVuY3J5cHRDYiA9IGNiO1xuICAgIH1cblxuICAgIC8qKiDop6Plr4bmtojmga/lm57osIMgKi9cbiAgICBwdWJsaWMgc2V0RGVjcnlwdENiKGNiOiBGdW5jdGlvbikge1xuICAgICAgICB0aGlzLmRlY3J5cHRDYiA9IGNiO1xuICAgIH1cblxuICAgIC8qKiDmlLbliLDmtojmga8gKi9cbiAgICBwcm90ZWN0ZWQgb25NZXNzYWdlKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gbmV3IFVpbnQ4QXJyYXkoZXZlbnQuZGF0YSk7XG4gICAgICAgIC8vIHRoaXMuZGVjcnlwdENiICYmIHRoaXMuZGVjcnlwdENiKHJlc3BvbnNlKTtcblxuICAgICAgICBsZXQgbmV3TXNnID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5tZXNzYWdlcy5sZW5ndGggKyByZXNwb25zZS5sZW5ndGgpO1xuICAgICAgICBuZXdNc2cuc2V0KHRoaXMubWVzc2FnZXMsIDApO1xuICAgICAgICBuZXdNc2cuc2V0KHJlc3BvbnNlLCB0aGlzLm1lc3NhZ2VzLmxlbmd0aCk7XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBuZXdNc2c7XG5cbiAgICAgICAgd2hpbGUgKHRoaXMubWVzc2FnZXMubGVuZ3RoID49IDgpIHtcbiAgICAgICAgICAgIGxldCBkdiA9IG5ldyBEYXRhVmlldyh0aGlzLm1lc3NhZ2VzLmJ1ZmZlciwgdGhpcy5tZXNzYWdlcy5ieXRlT2Zmc2V0LCB0aGlzLm1lc3NhZ2VzLmJ5dGVMZW5ndGgpO1xuICAgICAgICAgICAgbGV0IGxlbiA9IGR2LmdldFVpbnQzMigwLCBmYWxzZSk7XG4gICAgICAgICAgICBsZXQgb3AgPSBkdi5nZXRVaW50MzIoNCwgZmFsc2UpO1xuXG4gICAgICAgICAgICBpZiAobGVuID4gdGhpcy5tZXNzYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLm1lc3NhZ2VzLnN1YmFycmF5KDgsIGxlbik7XG4gICAgICAgICAgICBsZXQgb3BOYW1lID0gbXNnbmFtZVtvcF07XG4gICAgICAgICAgICBpZiAoIW9wTmFtZSkge1xuICAgICAgICAgICAgICAgIGNjLmxvZyhcImNhbiBub3QgZmluZCBvcDpcIiwgb3ApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBuYW1lID0gXCJtc2cuXCIgKyBvcE5hbWU7XG4gICAgICAgICAgICBsZXQgcHJvdG8gPSB0aGlzLnJvb3QuYnVpbGQobmFtZSk7XG4gICAgICAgICAgICBpZiAoIXByb3RvKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwiY2FuIG5vdCBmaW5kIHByb3RvOlwiLCBuYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVwID0gcHJvdG8uZGVjb2RlKGRhdGEpO1xuICAgICAgICAgICAgLy8gaWYgKENDX0RFViAmJiBvcCAhPSBtc2dpZC5HU19UaW1lU3luY19SKSB7XG4gICAgICAgICAgICAvLyAgICAgbGV0IG5vQ3B5SWRzID0gW21zZ2lkLkdTX0dldExvZ2luRGF0YV9SXTtcbiAgICAgICAgICAgIC8vICAgICBpZiAobm9DcHlJZHMuaW5kZXhPZihvcCkgPj0gMCB8fCBkYXRhLmJ5dGVMZW5ndGggPiAzMDAwKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNjLmxvZyhvcCwgbmFtZSwgcmVwKTtcbiAgICAgICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gICAgICAgICBjYy5sb2cob3AsIG5hbWUsIE9iamVjdC5jb3B5RGVwdGgocmVwKSk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQ2IgJiYgdGhpcy5tZXNzYWdlQ2Iob3AsIHJlcCk7XG4gICAgICAgICAgICAvL3RoaXMuZGlzcGF0Y2hNc2cob3AsIHJlcCk7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VzID0gdGhpcy5tZXNzYWdlcy5zdWJhcnJheShsZW4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOWPkemAgea2iOaBryAqL1xuICAgIHB1YmxpYyB0Y3BTZW5kKG9wOiBudW1iZXIsIGRhdGE6IGFueSkge1xuICAgICAgICAvLyBpZiAodGhpcy5zb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcbiAgICAgICAgLy8gICAgIHRoaXMuc29ja2V0LnNlbmQoZGF0YSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IFNvY2tldFN0YXRlLkNvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zb2NrZXQgfHwgdGhpcy5zb2NrZXQucmVhZHlTdGF0ZSAhPSBXZWJTb2NrZXQuT1BFTikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1zZ05hbWUgPSBtc2duYW1lW29wXTtcbiAgICAgICAgaWYgKCFtc2dOYW1lKSB7XG4gICAgICAgICAgICBjYy53YXJuKGBkb24ndCBmaW5kIG1zZyBmb3IgaWQ6JHtvcH1gKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIChDQ19ERVYgJiYgb3AgIT0gbXNnaWQuQ19UaW1lU3luYykge1xuICAgICAgICAvLyAgICAgY2MubG9nKFwibmV0d29yay50Y3BTZW5kIG1zZ2lkID0gXCIgKyBvcCk7XG4gICAgICAgIC8vICAgICBjYy5sb2coT2JqZWN0LmNvcHlEZXB0aChkYXRhKSk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBsZXQgbmFtZSA9IFwibXNnLlwiICsgbXNnTmFtZTtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSB0aGlzLnJvb3QuYnVpbGQobmFtZSk7XG4gICAgICAgIGxldCBtc2cgPSBuZXcgbWVzc2FnZSgpO1xuICAgICAgICBmb3IgKGNvbnN0IHAgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICAgICAgICBtc2cuc2V0KHAsIGRhdGFbcF0sIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgYnl0ZXMgPSBuZXcgVWludDhBcnJheShtc2cuZW5jb2RlKCkudG9CdWZmZXIoKSk7XG4gICAgICAgIGxldCBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZXMuYnl0ZUxlbmd0aCArIDgpO1xuICAgICAgICBsZXQgZHYgPSBuZXcgRGF0YVZpZXcoYnVmZmVyKTtcbiAgICAgICAgZHYuc2V0VWludDMyKDAsIGJ5dGVzLmJ5dGVMZW5ndGggKyA4LCBmYWxzZSk7XG4gICAgICAgIGR2LnNldFVpbnQzMig0LCBvcCwgZmFsc2UpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gYnl0ZXMuYnl0ZUxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkdi5zZXRVaW50OChpICsgOCwgYnl0ZXNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgdGhpcy5lbmNyeXB0Q2IgJiYgdGhpcy5lbmNyeXB0Q2IoY29udGVudCk7XG4gICAgICAgIHRoaXMuc29ja2V0LnNlbmQoY29udGVudC5idWZmZXIpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn0iXX0=