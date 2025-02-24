
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/net/http/HttpService.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '76147CUenpDLqR89maJJama', 'HttpService');
// c2f-framework/net/http/HttpService.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpCode_1 = require("./HttpCode");
var HttpService = /** @class */ (function () {
    function HttpService() {
    }
    HttpService.getInst = function () {
        if (!this._inst) {
            this._inst = new HttpService();
        }
        return this._inst;
    };
    HttpService.prototype.doGet = function (url, headers, params, cb, timeout) {
        if (timeout === void 0) { timeout = 0; }
        if (params) {
            if (url.indexOf("?") == -1) {
                url += "?";
            }
            url += this.getQueryString(params);
        }
        this.doHttp(url, headers, null, "GET", cb, timeout);
    };
    HttpService.prototype.doPost = function (url, headers, params, cb, timeout) {
        if (timeout === void 0) { timeout = 0; }
        if (headers) {
            if (url.indexOf("?") == -1) {
                url += "?";
            }
            url += this.getQueryString(headers);
        }
        this.doHttp(url, null, params, "POST", cb, timeout);
    };
    HttpService.prototype.doDownload = function () {
    };
    HttpService.prototype.doHttp = function (url, headers, params, method, cb, timeout) {
        if (timeout === void 0) { timeout = 0; }
        var xhr = new XMLHttpRequest();
        if (timeout) {
            xhr.timeout = timeout;
        }
        xhr.responseType = "text";
        xhr.onreadystatechange = this.onReadyStateChange.bind(this, xhr, cb);
        xhr.ontimeout = this.onTimeout.bind(this, xhr, url, cb);
        xhr.onerror = this.onError.bind(this, xhr, url, cb);
        xhr.onabort = this.onAbort.bind(this, xhr, url, cb);
        cc.log("http_service, doHttp url=" + url + ", method=" + method + ", parmas=" + params);
        xhr.open(method, url, true);
        if (headers) {
            this.setHttpHeaders(xhr, headers);
        }
        if (cc.sys.isNative) {
            this.setHttpHeaders(xhr, { "Accept-Encoding": "gzip,deflate" });
        }
        if (params && typeof params === "object") {
            params = JSON.stringify(params);
        }
        xhr.send(params);
    };
    HttpService.prototype.onReadyStateChange = function (xhr, cb) {
        cc.log("http_service, onReadyStateChange, readyState=" + xhr.readyState + ", status=" + xhr.status);
        if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
            c2f.log.logNet("http_service, onReadyStateChange, responseText=" + xhr.responseText);
            var data = null;
            var code = HttpCode_1.HttpCode.kUnknown;
            var response = null;
            try {
                response = JSON.parse(xhr.responseText);
            }
            catch (error) {
            }
            if (response && response.code) {
                code = response.code;
                data = response.content;
            }
            else {
                code = HttpCode_1.HttpCode.kSuccess;
                data = response;
            }
            this.notifyCallback(cb, code, data);
            this.removeXhrEvent(xhr);
        }
    };
    HttpService.prototype.onTimeout = function (xhr, url, cb) {
        cc.warn(url + ", request ontimeout");
        this.notifyCallback(cb, HttpCode_1.HttpCode.kTimeout, null);
        this.removeXhrEvent(xhr);
    };
    HttpService.prototype.onError = function (xhr, url, cb) {
        cc.warn(url + ", request onerror");
        this.notifyCallback(cb, HttpCode_1.HttpCode.kUnknown, null);
        this.removeXhrEvent(xhr);
    };
    HttpService.prototype.onAbort = function (xhr, url, cb) {
        cc.warn(url + ", request onabort");
        this.notifyCallback(cb, HttpCode_1.HttpCode.kUnknown, null);
        this.removeXhrEvent(xhr);
    };
    HttpService.prototype.removeXhrEvent = function (xhr) {
        xhr.ontimeout = null;
        xhr.onerror = null;
        xhr.onabort = null;
        xhr.onreadystatechange = null;
    };
    HttpService.prototype.notifyCallback = function (cb, code, data) {
        if (cb) {
            cb(code, data);
        }
    };
    HttpService.prototype.setHttpHeaders = function (xhr, headers) {
        for (var key in headers) {
            xhr.setRequestHeader(key, headers[key]);
        }
    };
    HttpService.prototype.getQueryString = function (params) {
        var tmps = [];
        for (var key in params) {
            tmps.push(key + "=" + params[key]);
        }
        return tmps.join("&");
    };
    return HttpService;
}());
c2f.http = HttpService.getInst();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL25ldC9odHRwL0h0dHBTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXNDO0FBRXRDO0lBR0k7SUFDQSxDQUFDO0lBRU0sbUJBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSwyQkFBSyxHQUFaLFVBQWEsR0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBWSxFQUFFLE9BQW1CO1FBQW5CLHdCQUFBLEVBQUEsV0FBbUI7UUFDeEUsSUFBSSxNQUFNLEVBQUU7WUFDUixJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ3hCLEdBQUcsSUFBSSxHQUFHLENBQUM7YUFDZDtZQUNELEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTSw0QkFBTSxHQUFiLFVBQWMsR0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBWSxFQUFFLE9BQW1CO1FBQW5CLHdCQUFBLEVBQUEsV0FBbUI7UUFDekUsSUFBSSxPQUFPLEVBQUU7WUFDVCxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ3hCLEdBQUcsSUFBSSxHQUFHLENBQUM7YUFDZDtZQUNELEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFD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QUFDLENBQUM7SUFDN0IsQ0FBQztJQUVPLG9DQUFjLEdBQXRCLFVBQXVCLEdBQW1CO1FBQ3RDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25CLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25CLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUVPLG9DQUFjLEdBQXRCLFVBQXVCLEVBQVksRUFBRSxJQUFZLEVBQUUsSUFBSztRQUNwRCxJQUFJLEVBQUUsRUFBRTtZQUNKLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDbEI7SUFDTCxDQUFDO0lBRU8sb0NBQWMsR0FBdEIsVUFBdUIsR0FBbUIsRUFBRSxPQUFPO1FBQy9DLEtBQUssSUFBSSxHQUFHLElBQUksT0FBTyxFQUFFO1lBQ3JCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDM0M7SUFDTCxDQUFDO0lBRU8sb0NBQWMsR0FBdEIsVUFBdUIsTUFBTTtRQUN6QixJQUFNLElBQUksR0FBYSxFQUFFLENBQUM7UUFDMUIsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBSSxHQUFHLFNBQUksTUFBTSxDQUFDLEdBQUcsQ0FBRyxDQUFDLENBQUM7U0FDdEM7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FsSUEsQUFrSUMsSUFBQTtBQVFELEdBQUcsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENvZGUgfSBmcm9tIFwiLi9IdHRwQ29kZVwiO1xuXG5jbGFzcyBIdHRwU2VydmljZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3Q6IEh0dHBTZXJ2aWNlO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0SW5zdCgpOiBIdHRwU2VydmljZSB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdCkge1xuICAgICAgICAgICAgdGhpcy5faW5zdCA9IG5ldyBIdHRwU2VydmljZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0O1xuICAgIH1cblxuICAgIHB1YmxpYyBkb0dldCh1cmw6IHN0cmluZywgaGVhZGVycywgcGFyYW1zLCBjYjogRnVuY3Rpb24sIHRpbWVvdXQ6IG51bWJlciA9IDApIHtcbiAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHVybC5pbmRleE9mKFwiP1wiKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIHVybCArPSBcIj9cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVybCArPSB0aGlzLmdldFF1ZXJ5U3RyaW5nKHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kb0h0dHAodXJsLCBoZWFkZXJzLCBudWxsLCBcIkdFVFwiLCBjYiwgdGltZW91dCk7XG4gICAgfVxuXG4gICAgcHVibGljIGRvUG9zdCh1cmw6IHN0cmluZywgaGVhZGVycywgcGFyYW1zLCBjYjogRnVuY3Rpb24sIHRpbWVvdXQ6IG51bWJlciA9IDApIHtcbiAgICAgICAgaWYgKGhlYWRlcnMpIHtcbiAgICAgICAgICAgIGlmICh1cmwuaW5kZXhPZihcIj9cIikgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB1cmwgKz0gXCI/XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cmwgKz0gdGhpcy5nZXRRdWVyeVN0cmluZyhoZWFkZXJzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvSHR0cCh1cmwsIG51bGwsIHBhcmFtcywgXCJQT1NUXCIsIGNiLCB0aW1lb3V0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZG9Eb3dubG9hZCgpIHtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRvSHR0cCh1cmw6IHN0cmluZywgaGVhZGVyczogYW55LCBwYXJhbXM6IGFueSwgbWV0aG9kOiBzdHJpbmcsIGNiOiBGdW5jdGlvbiwgdGltZW91dDogbnVtYmVyID0gMCkge1xuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICAgIHhoci50aW1lb3V0ID0gdGltZW91dDtcbiAgICAgICAgfVxuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSB0aGlzLm9uUmVhZHlTdGF0ZUNoYW5nZS5iaW5kKHRoaXMsIHhociwgY2IpO1xuICAgICAgICB4aHIub250aW1lb3V0ID0gdGhpcy5vblRpbWVvdXQuYmluZCh0aGlzLCB4aHIsIHVybCwgY2IpO1xuICAgICAgICB4aHIub25lcnJvciA9IHRoaXMub25FcnJvci5iaW5kKHRoaXMsIHhociwgdXJsLCBjYik7XG4gICAgICAgIHhoci5vbmFib3J0ID0gdGhpcy5vbkFib3J0LmJpbmQodGhpcywgeGhyLCB1cmwsIGNiKTtcblxuICAgICAgICBjYy5sb2coYGh0dHBfc2VydmljZSwgZG9IdHRwIHVybD0ke3VybH0sIG1ldGhvZD0ke21ldGhvZH0sIHBhcm1hcz0ke3BhcmFtc31gKVxuICAgICAgICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XG4gICAgICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgICAgICB0aGlzLnNldEh0dHBIZWFkZXJzKHhociwgaGVhZGVycyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRIdHRwSGVhZGVycyh4aHIsIHsgXCJBY2NlcHQtRW5jb2RpbmdcIjogXCJnemlwLGRlZmxhdGVcIiB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zICYmIHR5cGVvZiBwYXJhbXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHBhcmFtcyA9IEpTT04uc3RyaW5naWZ5KHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgeGhyLnNlbmQocGFyYW1zKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uUmVhZHlTdGF0ZUNoYW5nZSh4aHI6IFhNTEh0dHBSZXF1ZXN0LCBjYjogRnVuY3Rpb24pIHtcbiAgICAgICAgY2MubG9nKGBodHRwX3NlcnZpY2UsIG9uUmVhZHlTdGF0ZUNoYW5nZSwgcmVhZHlTdGF0ZT0ke3hoci5yZWFkeVN0YXRlfSwgc3RhdHVzPSR7eGhyLnN0YXR1c31gKTtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgIGMyZi5sb2cubG9nTmV0KGBodHRwX3NlcnZpY2UsIG9uUmVhZHlTdGF0ZUNoYW5nZSwgcmVzcG9uc2VUZXh0PSR7eGhyLnJlc3BvbnNlVGV4dH1gKTtcbiAgICAgICAgICAgIGxldCBkYXRhID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBjb2RlID0gSHR0cENvZGUua1Vua25vd247XG5cbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IG51bGw7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuY29kZSkge1xuICAgICAgICAgICAgICAgIGNvZGUgPSByZXNwb25zZS5jb2RlO1xuICAgICAgICAgICAgICAgIGRhdGEgPSByZXNwb25zZS5jb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29kZSA9IEh0dHBDb2RlLmtTdWNjZXNzO1xuICAgICAgICAgICAgICAgIGRhdGEgPSByZXNwb25zZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubm90aWZ5Q2FsbGJhY2soY2IsIGNvZGUsIGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVYaHJFdmVudCh4aHIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRpbWVvdXQoeGhyOiBYTUxIdHRwUmVxdWVzdCwgdXJsOiBzdHJpbmcsIGNiOiBGdW5jdGlvbikge1xuICAgICAgICBjYy53YXJuKGAke3VybH0sIHJlcXVlc3Qgb250aW1lb3V0YCk7XG4gICAgICAgIHRoaXMubm90aWZ5Q2FsbGJhY2soY2IsIEh0dHBDb2RlLmtUaW1lb3V0LCBudWxsKTtcbiAgICAgICAgdGhpcy5yZW1vdmVYaHJFdmVudCh4aHIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25FcnJvcih4aHI6IFhNTEh0dHBSZXF1ZXN0LCB1cmw6IHN0cmluZywgY2I6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGNjLndhcm4oYCR7dXJsfSwgcmVxdWVzdCBvbmVycm9yYCk7XG4gICAgICAgIHRoaXMubm90aWZ5Q2FsbGJhY2soY2IsIEh0dHBDb2RlLmtVbmtub3duLCBudWxsKTtcbiAgICAgICAgdGhpcy5yZW1vdmVYaHJFdmVudCh4aHIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25BYm9ydCh4aHI6IFhNTEh0dHBSZXF1ZXN0LCB1cmw6IHN0cmluZywgY2I6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGNjLndhcm4oYCR7dXJsfSwgcmVxdWVzdCBvbmFib3J0YCk7XG4gICAgICAgIHRoaXMubm90aWZ5Q2FsbGJhY2soY2IsIEh0dHBDb2RlLmtVbmtub3duLCBudWxsKTtcbiAgICAgICAgdGhpcy5yZW1vdmVYaHJFdmVudCh4aHIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlWGhyRXZlbnQoeGhyOiBYTUxIdHRwUmVxdWVzdCkge1xuICAgICAgICB4aHIub250aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgeGhyLm9uZXJyb3IgPSBudWxsO1xuICAgICAgICB4aHIub25hYm9ydCA9IG51bGw7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgbm90aWZ5Q2FsbGJhY2soY2I6IEZ1bmN0aW9uLCBjb2RlOiBudW1iZXIsIGRhdGE/KSB7XG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgY2IoY29kZSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEh0dHBIZWFkZXJzKHhocjogWE1MSHR0cFJlcXVlc3QsIGhlYWRlcnMpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGhlYWRlcnMpIHtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgaGVhZGVyc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UXVlcnlTdHJpbmcocGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHRtcHM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgIHRtcHMucHVzaChgJHtrZXl9PSR7cGFyYW1zW2tleV19YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRtcHMuam9pbihcIiZcIik7XG4gICAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIElDMkYge1xuICAgICAgICBodHRwOiBIdHRwU2VydmljZTtcbiAgICB9XG59XG5cbmMyZi5odHRwID0gSHR0cFNlcnZpY2UuZ2V0SW5zdCgpO1xuZXhwb3J0IHsgfTsiXX0=