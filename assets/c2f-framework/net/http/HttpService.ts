import { HttpCode } from "./HttpCode";

class HttpService {
    private static _inst: HttpService;

    private constructor() {
    }

    static getInst(): HttpService {
        if (!this._inst) {
            this._inst = new HttpService();
        }
        return this._inst;
    }

    public doGet(url: string, headers, params, cb: Function, timeout: number = 0) {
        if (params) {
            if (url.indexOf("?") == -1) {
                url += "?";
            }
            url += this.getQueryString(params);
        }
        this.doHttp(url, headers, null, "GET", cb, timeout);
    }

    public doPost(url: string, headers, params, cb: Function, timeout: number = 0) {
        if (headers) {
            if (url.indexOf("?") == -1) {
                url += "?";
            }
            url += this.getQueryString(headers);
        }
        this.doHttp(url, null, params, "POST", cb, timeout);
    }

    public doDownload() {
    }

    private doHttp(url: string, headers: any, params: any, method: string, cb: Function, timeout: number = 0) {
        const xhr = new XMLHttpRequest();
        if (timeout) {
            xhr.timeout = timeout;
        }
        xhr.responseType = "text";
        xhr.onreadystatechange = this.onReadyStateChange.bind(this, xhr, cb);
        xhr.ontimeout = this.onTimeout.bind(this, xhr, url, cb);
        xhr.onerror = this.onError.bind(this, xhr, url, cb);
        xhr.onabort = this.onAbort.bind(this, xhr, url, cb);

        cc.log(`http_service, doHttp url=${url}, method=${method}, parmas=${params}`)
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
    }

    private onReadyStateChange(xhr: XMLHttpRequest, cb: Function) {
        cc.log(`http_service, onReadyStateChange, readyState=${xhr.readyState}, status=${xhr.status}`);
        if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
            c2f.log.logNet(`http_service, onReadyStateChange, responseText=${xhr.responseText}`);
            let data = null;
            let code = HttpCode.kUnknown;

            let response = null;
            try {
                response = JSON.parse(xhr.responseText);
            } catch (error) {
            }
            if (response && response.code) {
                code = response.code;
                data = response.content;
            }
            else {
                code = HttpCode.kSuccess;
                data = response;
            }
            this.notifyCallback(cb, code, data);
            this.removeXhrEvent(xhr);
        }
    }

    private onTimeout(xhr: XMLHttpRequest, url: string, cb: Function) {
        cc.warn(`${url}, request ontimeout`);
        this.notifyCallback(cb, HttpCode.kTimeout, null);
        this.removeXhrEvent(xhr);
    }

    private onError(xhr: XMLHttpRequest, url: string, cb: Function) {
        cc.warn(`${url}, request onerror`);
        this.notifyCallback(cb, HttpCode.kUnknown, null);
        this.removeXhrEvent(xhr);
    }

    private onAbort(xhr: XMLHttpRequest, url: string, cb: Function) {
        cc.warn(`${url}, request onabort`);
        this.notifyCallback(cb, HttpCode.kUnknown, null);
        this.removeXhrEvent(xhr);
    }

    private removeXhrEvent(xhr: XMLHttpRequest) {
        xhr.ontimeout = null;
        xhr.onerror = null;
        xhr.onabort = null;
        xhr.onreadystatechange = null;
    }

    private notifyCallback(cb: Function, code: number, data?) {
        if (cb) {
            cb(code, data);
        }
    }

    private setHttpHeaders(xhr: XMLHttpRequest, headers) {
        for (let key in headers) {
            xhr.setRequestHeader(key, headers[key]);
        }
    }

    private getQueryString(params) {
        const tmps: string[] = [];
        for (let key in params) {
            tmps.push(`${key}=${params[key]}`);
        }
        return tmps.join("&");
    }
}

declare global {
    interface IC2F {
        http: HttpService;
    }
}

c2f.http = HttpService.getInst();
export { };