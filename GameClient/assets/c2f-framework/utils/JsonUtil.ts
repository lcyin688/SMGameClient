
/** 资源路径 */
var PATH: string = "config/game/";

/** 数据缓存 */
var DATA: Map<string, any> = new Map();

/** JSON数据表工具 */
class JsonUtil {
    /**
     * 通知资源名从缓存中获取一个Json数据表
     * @param name  资源名
     */
    static get(name: string): any {
        if (DATA.has(name))
            return DATA.get(name);
    }

    /**
     * 通知资源名加载Json数据表
     * @param name      资源名
     * @param callback  资源加载完成回调
     */
    static load(name: string, callback: Function): void {
        if (DATA.has(name))
            callback(DATA.get(name));
        else {
            let url = PATH + name;
            cc.resources.load(url, cc.JsonAsset, (err: Error | null, content: cc.JsonAsset) => {
                if (err) {
                    cc.error(err.message);
                }
                DATA.set(name, content.json);
                callback(content.json)
            });
        }
    }

    /**
     * 异步加载Json数据表
     * @param name 资源名
     */
    static loadAsync(name: string) {
        return new Promise((resolve, reject) => {
            if (DATA.has(name)) {
                resolve(DATA.get(name))
            }
            else {
                let url = PATH + name;
                cc.resources.load(url, cc.JsonAsset, (err: Error | null, content: cc.JsonAsset) => {
                    if (err) {
                        cc.error(err.message);
                    }
                    DATA.set(name, content.json);
                    resolve(content.json)
                });
            }
        });
    }

    /**
     * 通过指定资源名释放资源
     * @param name 资源名
     */
    static release(name: string) {
        let url = PATH + name;
        DATA.delete(name);
        cc.resources.release(url);
    }

    /** 格式化字符串为对象 */
    static parse(str: string, defaultV: any = null) {
        let result = defaultV;
        try {
            result = JSON.parse(str);
        } catch (error) {
            c2f.log.logBusiness('failed to parse json:', str);
        }
        return result;
    }
}

declare global {
    interface IUtil {
        json: typeof JsonUtil;
    }
}
c2f.utils.json = JsonUtil;
export { };