"use strict";
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