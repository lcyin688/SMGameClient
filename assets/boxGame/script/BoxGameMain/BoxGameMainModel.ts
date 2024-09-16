
import { WebSocketClient } from '../WebSocketClient';
import { UIModelBase } from './../../../c2f-framework/gui/layer/UIModelBase';
const { ccclass, property } = cc._decorator;
@ccclass
export default class BoxGameMainModel extends UIModelBase {

    /** 预制名 给实例调用 */
    public prefabName = 'F_BoxGameMain';
    public wsUrl: string
    public baseUrl: string = 'http://43.157.128.102:5501'
    public accounts: string[]
    public playerData: msgBoxGame.GW_Login
    public client: WebSocketClient
    public initData() {
        this.accounts = ["kstest001", "kstest002", "kstest003", "kstest004", "kstest005"]
    }

    public getWsUrl(e: string, callback: Function) {
        if (!this.wsUrl) {
            var i = this.baseUrl.replace("http:", "ws:");
            i = i.replace("https:", "wss:")
            this.wsUrl = i + "/hubs/chathub?access_token=" + e
        }
        this.tcpConnet(this.wsUrl, callback)
    }
    public tcpConnet(url: string, callback: Function) {
        // 使用示例
        this.client = new WebSocketClient();
        this.client.tcpConnet(url, callback);
    }


    public sendMsg(url: string, callFun?: Function, data?: any, method: string = 'GET') {
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
                    let jsonObject = JSON.parse(this.responseText);
                    callFun(jsonObject.data)
                } catch (error) {
                    console.error('Invalid JSON:', error);
                }
            } else {
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
    }




}