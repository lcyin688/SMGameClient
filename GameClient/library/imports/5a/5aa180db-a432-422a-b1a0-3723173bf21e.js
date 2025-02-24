"use strict";
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