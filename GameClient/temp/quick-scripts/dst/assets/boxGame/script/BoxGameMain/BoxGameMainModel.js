
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/boxGame/script/BoxGameMain/BoxGameMainModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5aa18DbpDJCKrGgNyMXO/Ie', 'BoxGameMainModel');
// boxGame/script/BoxGameMain/BoxGameMainModel.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIModelBase_1 = require("./../../../c2f-framework/gui/layer/UIModelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BoxGameMainModel = /** @class */ (function (_super) {
    __extends(BoxGameMainModel, _super);
    function BoxGameMainModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_BoxGameMain';
        _this.baseUrl = 'http://43.157.128.102:5501';
        return _this;
    }
    BoxGameMainModel.prototype.initData = function () {
        this.accounts = ["kstest001", "kstest002", "kstest003", "kstest004", "kstest005"];
    };
    BoxGameMainModel.prototype.getWsUrl = function (e, callback) {
        if (!this.wsUrl) {
            var i = this.baseUrl.replace("http:", "ws:");
            i = i.replace("https:", "wss:");
            this.wsUrl = i + "/hubs/chathub?access_token=" + e;
        }
        this.tcpConnet(this.wsUrl, callback);
    };
    BoxGameMainModel.prototype.tcpConnet = function (url, callback) {
        // 使用示例
        // this.client = new WebSocketClient();
        // this.client.tcpConnet(url, callback);
    };
    BoxGameMainModel.prototype.sendMsg = function (url, callFun, data, method) {
        if (method === void 0) { method = 'GET'; }
        console.error('reqMsg   url', url);
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        // 设置请求头
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                // 成功响应
                console.log("成功相应", this.responseText);
                try {
                    var jsonObject = JSON.parse(this.responseText);
                    callFun(jsonObject.data);
                }
                catch (error) {
                    console.error('Invalid JSON:', error);
                }
            }
            else {
                // 错误处理
                console.error('Failed to load resource: ' + this.status);
            }
        };
        xhr.onerror = function () {
            // 网络错误
            console.error('Network error');
        };
        // 发送请求体数据
        xhr.send(data);
    };
    BoxGameMainModel = __decorate([
        ccclass
    ], BoxGameMainModel);
    return BoxGameMainModel;
}(UIModelBase_1.UIModelBase));
exports.default = BoxGameMainModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9ib3hHYW1lL3NjcmlwdC9Cb3hHYW1lTWFpbi9Cb3hHYW1lTWFpbk1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDhFQUE2RTtBQUN2RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUE4QyxvQ0FBVztJQUF6RDtRQUFBLHFFQTREQztRQTFERyxnQkFBZ0I7UUFDVCxnQkFBVSxHQUFHLGVBQWUsQ0FBQztRQUU3QixhQUFPLEdBQVcsNEJBQTRCLENBQUE7O0lBdUR6RCxDQUFDO0lBbkRVLG1DQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQ3JGLENBQUM7SUFFTSxtQ0FBUSxHQUFmLFVBQWdCLENBQVMsRUFBRSxRQUFrQjtRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNiLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUE7WUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsNkJBQTZCLEdBQUcsQ0FBQyxDQUFBO1NBQ3JEO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFDTSxvQ0FBUyxHQUFoQixVQUFpQixHQUFXLEVBQUUsUUFBa0I7UUFDNUMsT0FBTztRQUNQLHVDQUF1QztRQUN2Qyx3Q0FBd0M7SUFDNUMsQ0FBQztJQUdNLGtDQUFPLEdBQWQsVUFBZSxHQUFXLEVBQUUsT0FBa0IsRUFBRSxJQUFVLEVBQUUsTUFBc0I7UUFBdEIsdUJBQUEsRUFBQSxjQUFzQjtRQUM5RSxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuQyxJQUFJLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQy9CLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QixRQUFRO1FBQ1IsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pELEdBQUcsQ0FBQyxNQUFNLEdBQUc7WUFDVCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO2dCQUN6QyxPQUFPO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDdkMsSUFBSTtvQkFDQSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDL0MsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtpQkFDM0I7Z0JBQUMsT0FBTyxLQUFLLEVBQUU7b0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ3pDO2FBQ0o7aUJBQU07Z0JBQ0gsT0FBTztnQkFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLDJCQUEyQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM1RDtRQUNMLENBQUMsQ0FBQztRQUNGLEdBQUcsQ0FBQyxPQUFPLEdBQUc7WUFDVixPQUFPO1lBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUM7UUFDRixVQUFVO1FBQ1YsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBdkRnQixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQTREcEM7SUFBRCx1QkFBQztDQTVERCxBQTREQyxDQTVENkMseUJBQVcsR0E0RHhEO2tCQTVEb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBXZWJTb2NrZXRDbGllbnQgfSBmcm9tICcuLi9XZWJTb2NrZXRDbGllbnQnO1xuaW1wb3J0IHsgVUlNb2RlbEJhc2UgfSBmcm9tICcuLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZ3VpL2xheWVyL1VJTW9kZWxCYXNlJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm94R2FtZU1haW5Nb2RlbCBleHRlbmRzIFVJTW9kZWxCYXNlIHtcblxuICAgIC8qKiDpooTliLblkI0g57uZ5a6e5L6L6LCD55SoICovXG4gICAgcHVibGljIHByZWZhYk5hbWUgPSAnRl9Cb3hHYW1lTWFpbic7XG4gICAgcHVibGljIHdzVXJsOiBzdHJpbmdcbiAgICBwdWJsaWMgYmFzZVVybDogc3RyaW5nID0gJ2h0dHA6Ly80My4xNTcuMTI4LjEwMjo1NTAxJ1xuICAgIHB1YmxpYyBhY2NvdW50czogc3RyaW5nW11cbiAgICBwdWJsaWMgcGxheWVyRGF0YTogbXNnQm94R2FtZS5HV19Mb2dpblxuICAgIHB1YmxpYyBjbGllbnQ6IFdlYlNvY2tldENsaWVudFxuICAgIHB1YmxpYyBpbml0RGF0YSgpIHtcbiAgICAgICAgdGhpcy5hY2NvdW50cyA9IFtcImtzdGVzdDAwMVwiLCBcImtzdGVzdDAwMlwiLCBcImtzdGVzdDAwM1wiLCBcImtzdGVzdDAwNFwiLCBcImtzdGVzdDAwNVwiXVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRXc1VybChlOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgICAgICBpZiAoIXRoaXMud3NVcmwpIHtcbiAgICAgICAgICAgIHZhciBpID0gdGhpcy5iYXNlVXJsLnJlcGxhY2UoXCJodHRwOlwiLCBcIndzOlwiKTtcbiAgICAgICAgICAgIGkgPSBpLnJlcGxhY2UoXCJodHRwczpcIiwgXCJ3c3M6XCIpXG4gICAgICAgICAgICB0aGlzLndzVXJsID0gaSArIFwiL2h1YnMvY2hhdGh1Yj9hY2Nlc3NfdG9rZW49XCIgKyBlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50Y3BDb25uZXQodGhpcy53c1VybCwgY2FsbGJhY2spXG4gICAgfVxuICAgIHB1YmxpYyB0Y3BDb25uZXQodXJsOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgICAgICAvLyDkvb/nlKjnpLrkvotcbiAgICAgICAgLy8gdGhpcy5jbGllbnQgPSBuZXcgV2ViU29ja2V0Q2xpZW50KCk7XG4gICAgICAgIC8vIHRoaXMuY2xpZW50LnRjcENvbm5ldCh1cmwsIGNhbGxiYWNrKTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBzZW5kTXNnKHVybDogc3RyaW5nLCBjYWxsRnVuPzogRnVuY3Rpb24sIGRhdGE/OiBhbnksIG1ldGhvZDogc3RyaW5nID0gJ0dFVCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcigncmVxTXNnICAgdXJsJywgdXJsKTtcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XG4gICAgICAgIC8vIOiuvue9ruivt+axguWktFxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgICAgICAvLyDmiJDlip/lk43lupRcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaIkOWKn+ebuOW6lFwiLCB0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGpzb25PYmplY3QgPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbEZ1bihqc29uT2JqZWN0LmRhdGEpXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBKU09OOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOmUmeivr+WkhOeQhlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIHJlc291cmNlOiAnICsgdGhpcy5zdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIOe9kee7nOmUmeivr1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTmV0d29yayBlcnJvcicpO1xuICAgICAgICB9O1xuICAgICAgICAvLyDlj5HpgIHor7fmsYLkvZPmlbDmja5cbiAgICAgICAgeGhyLnNlbmQoZGF0YSk7XG4gICAgfVxuXG5cblxuXG59Il19