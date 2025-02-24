type ProgressCallback = (finished: number, total: number, item: cc.AssetManager.RequestItem) => void;
type CompleteCallback<T = any> = (err: Error | null, data: T) => void;
type IRemoteOptions = Record<string, any>;
type AssetType<T = cc.Asset> = new (...args: any[]) => T;

interface ILoadResArgs<T extends cc.Asset> {
    bundle?: string;
    dir?: string;
    paths: string | string[];
    type: AssetType<T> | null;
    onProgress: ProgressCallback | null;
    onComplete: CompleteCallback<T> | null;
}

/** 资源缓存基础数据结构 */
interface CacheData {
    asset: cc.Asset,
    /** 资源是否需要释放 */
    release: boolean,
    /** 资源最后一次被加载的时间点（秒） */
    lastLoadTime: number,
}

/** 预制体资源缓存数据 */
interface PrefabCacheData extends CacheData {
    /** 此prefab关联的实例节点 */
    nodes?: cc.Node[],
}

/** asset bundle路径校验 */
const BUNDLE_CHECK = "ab:";

/**
 * 资源管理类
 * 
 * 资源加载:
 * 1. 如果加载resources内的资源，直接写明resources内的路径即可
 * 2. 如果加载路径以ab:开头，则会加载对应bundle内的资源。例：ab:bundleA/xxx/a表示bundle名为bundleA，资源路径为xxx/a
 * 
 * 引用计数管理：
 * 1. 尽量使用此类的接口加载所有资源、instantiate节点实例，否则需要自行管理引用计数
 * 2. Res.instantiate不要对动态生成的节点使用，尽量只instantiate prefab上预设好的节点，否则有可能会导致引用计数的管理出错
 * 3. 调用load接口时如需传入release参数，则同一资源在全局调用load时release参数尽量保持一致，否则可能不符合预期
 * 4. 请使用ResSpine、ResSprite组件去动态加载spine、图片资源，否则需要自行管理这些资源的引用计数
 */
class ResLoader {
    /** 节点与其关联的prefab路径 */
    private _nodePath: Map<cc.Node, string> = new Map();
    /** prefab资源与路径 */
    private _prefabPath: Map<cc.Prefab, string> = new Map();

    private _prefabCache: Map<string, PrefabCacheData> = new Map();
    private _spriteFrameCache: Map<string, CacheData> = new Map();
    private _spriteAtlasCache: Map<string, CacheData> = new Map();
    private _skeletonDataCache: Map<string, CacheData> = new Map();
    private _otherCache: Map<string, cc.Asset> = new Map();

    /** 资源释放的间隔时间（秒），资源超过此间隔未被load才可释放 */
    public releaseSec: number = 5;
    /** 预备释放 */
    private willRelease: boolean = false;


    /**
     * 资源管理中的全局Url
     * @param bundle 
     * @param url 
     * @returns 
     */
    public getFullUrl(bundle: string, url: string) {
        let keyUrl = `${BUNDLE_CHECK}${bundle}/${url}`;
        return keyUrl;
    }

    /**
     * 资源路径解析
     * @param url 
     */
    public parseUrl(url: string): { bundle?: string, loadUrl: string } {
        if (url.startsWith(BUNDLE_CHECK)) {
            let loadUrl = url.substring(BUNDLE_CHECK.length);
            let idx = loadUrl.indexOf("/");
            let bundle = loadUrl.substring(0, idx);
            loadUrl = loadUrl.substring(idx + 1);
            return { bundle: bundle, loadUrl: loadUrl };
        } else {
            return { loadUrl: url };
        }
    }

    /**
     * 通过节点或预制查找已缓存prefab路径
     * @param target 
     */
    private getCachePrefabUrl(target: cc.Node | cc.Prefab): string {
        let url = "";
        if (target instanceof cc.Node) {
            let cur = target;
            while (cur) {
                if (cur["_prefab"] && cur["_prefab"]["root"]) {
                    url = this._nodePath.get(cur["_prefab"]["root"]) || "";
                    if (url) {
                        break;
                    }
                }
                cur = cur.parent;
            }
        } else if (target instanceof cc.Prefab) {
            url = this._prefabPath.get(target) || "";
        }
        return url;
    }

    /**
     * 缓存资源
     * @param url 资源路径
     * @param asset 资源
     * @param release 资源是否需要释放
     */
    private cacheAsset(url: string, asset: cc.Asset, release: boolean = true): void {
        if (!asset) {
            return;
        }
        let func = (map: Map<string, CacheData>) => {
            if (map.has(url)) {
                return;
            }
            asset.addRef();
            if (asset instanceof cc.Prefab) {
                this._prefabPath.set(asset, url);
            }
            let cacheData: CacheData = {
                asset: asset,
                release: release,
                lastLoadTime: Date.now() / 1000
            };
            map.set(url, cacheData);
        };

        if (asset instanceof cc.Prefab) {
            func(this._prefabCache);
        } else if (asset instanceof cc.SpriteFrame) {
            func(this._spriteFrameCache);
        } else if (asset instanceof cc.SpriteAtlas) {
            func(this._spriteAtlasCache);
        } else if (asset instanceof sp.SkeletonData) {
            func(this._skeletonDataCache);
        } else {
            if (this._otherCache.has(url)) {
                return;
            }
            asset.addRef();
            this._otherCache.set(url, asset);
        }
    }

    /**
     * 获取缓存资源。通常不应直接调用此接口，除非调用前能确保资源已加载并且能自行管理引用计数
     * @param url 资源路径
     * @param type 资源类型
     */
    public getRes<T extends cc.Asset>(url: string, type: typeof cc.Asset): T | null {
        let asset: unknown = null;
        let func = (map: Map<string, CacheData>) => {
            let data = map.get(url);
            if (data) {
                asset = data.asset;
                data.lastLoadTime = Date.now() / 1000;
            }
        };

        if (type === cc.Prefab) {
            func(this._prefabCache);
        } else if (type === cc.SpriteFrame) {
            func(this._spriteFrameCache);
        } else if (type === cc.SpriteAtlas) {
            func(this._spriteAtlasCache);
        } else if (type === sp.SkeletonData) {
            func(this._skeletonDataCache);
        } else {
            asset = this._otherCache.get(url);
        }

        return asset as T;
    }

    public getCacheData(url: string, type: typeof cc.Asset) {
        let cache: CacheData = null;
        if (type === cc.Prefab) {
            cache = this._prefabCache.get(url);
        } else if (type === cc.SpriteFrame) {
            cache = this._spriteFrameCache.get(url);
        } else if (type === cc.SpriteAtlas) {
            cache = this._spriteAtlasCache.get(url);
        } else if (type === sp.SkeletonData) {
            cache = this._skeletonDataCache.get(url);
        }
        return cache;
    }



    /**
     * 加载资源包
     * @param nameOrUrl 资源地址
     * @param complete  完成事件
     * @param v         资源MD5版本号
     * @example
        let serverUrl = "http://192.168.1.8:8080/";         // 服务器地址
        let md5 = "8e5c0";                                  // Cocos Creator 构建后的MD5字符
        await c2f.res.loadBundle(serverUrl,md5);
     */
    public async loadBundle(nameOrUrl: string, v?: string) {
        return new Promise<cc.AssetManager.Bundle>((resolve, reject) => {
            cc.assetManager.loadBundle(nameOrUrl, { version: v }, (err, bundle: cc.AssetManager.Bundle) => {
                if (err) {
                    cc.error(`[Res.loadBundle] error: ${err}`);
                    resolve(null);
                }
                resolve(bundle);
            });
        });
    }

    /** 异步加载包 */
    public loadBundleAsync(nameOrUrl: string, endCb: Function, v?: string) {
        cc.assetManager.loadBundle(nameOrUrl, { version: v }, (err, bundle: cc.AssetManager.Bundle) => {
            if (err) {
                cc.error(`[Res.loadBundle] error: ${err}`);
                endCb && endCb(null);
            }
            endCb && endCb(bundle);
        });
    }

    /**
     * 加载远程资源
     * @param url           资源地址
     * @param options       资源参数，例：{ ext: ".png" }
     * @param onComplete    加载完成回调
     * @example
        let opt: IRemoteOptions = { ext: ".png" };
        let onComplete = (err: Error | null, data: ImageAsset) => {
            const texture = new Texture2D();
            texture.image = data;
            
            const spriteFrame = new SpriteFrame();
            spriteFrame.texture = texture;
            
            let sprite = this.sprite.addComponent(Sprite);
            sprite.spriteFrame = spriteFrame;
        }
        c2f.res.loadRemote<ImageAsset>(this.url, opt, onComplete);
    */
    loadRemote<T extends cc.Asset>(url: string, options: IRemoteOptions | null, onComplete?: CompleteCallback<T> | null): void;
    loadRemote<T extends cc.Asset>(url: string, onComplete?: CompleteCallback<T> | null): void;
    loadRemote<T extends cc.Asset>(url: string, ...args: any): void {
        if (!url) {
            cc.error(`[Res.load] url is empty`);
            return null;
        }

        let options: IRemoteOptions | null = null;
        let onComplete: CompleteCallback<T> | null = null;
        if (args.length == 2) {
            options = args[0];
            onComplete = args[1];
        }
        else {
            onComplete = args[0];
        }

        let asset: T = this.getRes(url, undefined);
        if (asset) {
            onComplete && onComplete(null, asset);
        } else {
            let parseData = this.parseUrl(url);
            cc.assetManager.loadRemote<T>(parseData.loadUrl, options, (err, data: T) => {
                if (err) {
                    cc.error(`[Res.load] load error: ${err}`);
                } else {
                    this.cacheAsset(url, data, true);
                }
                onComplete && onComplete(err, data);
            });
        }
    }

    /**
     * 加载一个资源
     * @param bundleName    远程包名
     * @param paths         资源路径
     * @param type          资源类型
     * @param onProgress    加载进度回调
     * @param onComplete    加载完成回调
     * @example
        c2f.res.load("spine_path", sp.SkeletonData, (err: Error | null, sd: sp.SkeletonData) => {
        });
     */
    public load<T extends cc.Asset>(bundleName: string, paths: string | string[], type: AssetType<T> | null, onProgress: ProgressCallback | null, onComplete: CompleteCallback<T> | null): void;
    public load<T extends cc.Asset>(bundleName: string, paths: string | string[], onProgress: ProgressCallback | null, onComplete: CompleteCallback<T> | null): void;
    public load<T extends cc.Asset>(bundleName: string, paths: string | string[], onComplete?: CompleteCallback<T> | null): void;
    public load<T extends cc.Asset>(bundleName: string, paths: string | string[], type: AssetType<T> | null, onComplete?: CompleteCallback<T> | null): void;
    public load<T extends cc.Asset>(paths: string | string[], type: AssetType<T> | null, onProgress: ProgressCallback | null, onComplete: CompleteCallback<T> | null): void;
    public load<T extends cc.Asset>(paths: string | string[], onProgress: ProgressCallback | null, onComplete: CompleteCallback<T> | null): void;
    public load<T extends cc.Asset>(paths: string | string[], onComplete?: CompleteCallback<T> | null): void;
    public load<T extends cc.Asset>(paths: string | string[], type: AssetType<T> | null, onComplete?: CompleteCallback<T> | null): void;
    public load<T extends cc.Asset>(
        bundleName: string,
        paths?: string | string[] | AssetType<T> | ProgressCallback | CompleteCallback | null,
        type?: AssetType<T> | ProgressCallback | CompleteCallback | null,
        onProgress?: ProgressCallback | CompleteCallback | null,
        onComplete?: CompleteCallback | null,
    ) {
        let args: ILoadResArgs<T> | null = null;
        if (typeof paths === "string" || paths instanceof Array) {
            args = this.parseLoadResArgs(paths, type, onProgress, onComplete);
            args.bundle = bundleName;
        }
        else {
            args = this.parseLoadResArgs(bundleName, paths, type, onProgress);
        }
        this.loadByArgs(args);
    }

    /**
     * 加载文件夹中的资源
     * @param bundleName    远程包名
     * @param dir           文件夹名
     * @param type          资源类型
     * @param onProgress    加载进度回调
     * @param onComplete    加载完成回调
     * @example
        // 加载进度事件
        let onProgressCallback = (finished: number, total: number, item: any) => {
            console.log("资源加载进度", finished, total);
        }

        // 加载完成事件
        let onCompleteCallback = () => {
            console.log("资源加载完成");
        }
        c2f.res.loadDir("game", onProgressCallback, onCompleteCallback);
     */
    public loadDir<T extends cc.Asset>(bundleName: string, dir: string, type: AssetType<T> | null, onProgress: ProgressCallback | null, onComplete: CompleteCallback<T[]> | null): void;
    public loadDir<T extends cc.Asset>(bundleName: string, dir: string, onProgress: ProgressCallback | null, onComplete: CompleteCallback<T[]> | null): void;
    public loadDir<T extends cc.Asset>(bundleName: string, dir: string, onComplete?: CompleteCallback<T[]> | null): void;
    public loadDir<T extends cc.Asset>(bundleName: string, dir: string, type: AssetType<T> | null, onComplete?: CompleteCallback<T[]> | null): void;
    public loadDir<T extends cc.Asset>(dir: string, type: AssetType<T> | null, onProgress: ProgressCallback | null, onComplete: CompleteCallback<T[]> | null): void;
    public loadDir<T extends cc.Asset>(dir: string, onProgress: ProgressCallback | null, onComplete: CompleteCallback<T[]> | null): void;
    public loadDir<T extends cc.Asset>(dir: string, onComplete?: CompleteCallback<T[]> | null): void;
    public loadDir<T extends cc.Asset>(dir: string, type: AssetType<T> | null, onComplete?: CompleteCallback<T[]> | null): void;
    public loadDir<T extends cc.Asset>(
        bundleName: string,
        dir?: string | AssetType<T> | ProgressCallback | CompleteCallback | null,
        type?: AssetType<T> | ProgressCallback | CompleteCallback | null,
        onProgress?: ProgressCallback | CompleteCallback | null,
        onComplete?: CompleteCallback | null,
    ) {
        let args: ILoadResArgs<T> | null = null;
        if (typeof dir === "string") {
            args = this.parseLoadResArgs(dir, type, onProgress, onComplete);
            args.bundle = bundleName;
        }
        else {
            args = this.parseLoadResArgs(bundleName, dir, type, onProgress);
        }
        args.dir = args.paths as string;
        this.loadByArgs(args);
    }

    /**
     * 加载单个资源
     * @param url 资源路径
     * @param type 资源类型
     * @param release 资源是否需要释放
     */
    public async loadOne<T extends cc.Asset>(url: string, type: typeof cc.Asset, release: boolean = true): Promise<T | null> {
        if (!url) {
            cc.error(`[Res.load] url is empty`);
            return null;
        }
        let asset: T = this.getRes(url, type);
        if (asset) {
            return asset;
        }
        let parseData = this.parseUrl(url);
        if (parseData.bundle && !cc.assetManager.getBundle(parseData.bundle)) {
            await this.loadBundle(parseData.bundle);
        }
        let bundle: cc.AssetManager.Bundle = parseData.bundle ? cc.assetManager.getBundle(parseData.bundle) : cc.resources;
        if (!bundle) {
            cc.error(`[Res.load] cant find bundle: ${url}`);
            return null;
        }

        //多语言适配
        let lgInfo = await this.getLGResInfo(parseData.loadUrl, bundle);
        if (lgInfo) {
            parseData.loadUrl = lgInfo.lgUrl;
            bundle = lgInfo.lgBundle;
        }

        let existRes: any = bundle.get(parseData.loadUrl, type);
        if (existRes) {
            this.cacheAsset(url, existRes, true);
            return existRes;
        } else {
            asset = await new Promise((resolve, reject) => {
                bundle.load(parseData.loadUrl, type, (error: Error, resource: T) => {
                    if (error) {
                        cc.error(`[Res.load] load error: ${error}`);
                        resolve(null);
                    } else {
                        this.cacheAsset(url, resource, release);
                        resolve(resource);
                    }
                });
            });
        }
        return asset;
    }

    private loadResAsync<T extends cc.Asset>(urlFull: string, type: typeof cc.Asset, release: boolean, bundle: cc.AssetManager.Bundle, loadUrl: string, endCb: Function) {
        let existRes: any = bundle.get(loadUrl, type);
        if (existRes) {
            this.cacheAsset(urlFull, existRes, true);
            endCb && endCb(existRes);
        } else {
            bundle.load(loadUrl, type, (error: Error, res: T) => {
                if (error) {
                    cc.error(`[Res.load] load error: ${error}`);
                    endCb && endCb(null);
                } else {
                    this.cacheAsset(urlFull, res, release);
                    endCb && endCb(res);
                }
            });
        }
    }

    private getRealBundleRes(bundleName: string, urlFull: string, loadUrl: string, endCb: Function) {
        let bundle: cc.AssetManager.Bundle = bundleName ? cc.assetManager.getBundle(bundleName) : cc.resources;
        if (!bundle) {
            cc.error(`[Res.load] cant find bundle: ${urlFull}`);
            endCb && endCb(null, null);
        } else {
            //多语言适配
            this.getLGResInfoAsync(loadUrl, bundle, (info: { lgUrl: string, lgBundle: cc.AssetManager.Bundle }) => {
                if (info) {
                    endCb && endCb(info.lgBundle, info.lgUrl);
                } else {
                    endCb && endCb(bundle, loadUrl);
                }
            })
        }
    }

    /**
     * 异步加载单个资源
     * @param url 资源路径
     * @param type 资源类型
     * @param release 资源是否需要释放
     */
    public loadOneAsync<T extends cc.Asset>(url: string, type: typeof cc.Asset, release: boolean = true, endCb: Function = null) {
        if (!url) {
            cc.error(`[Res.load] url is empty`);
            endCb && endCb(null);
        }
        let asset: T = this.getRes(url, type);
        if (asset) {
            endCb && endCb(asset);
        }
        let parseData = this.parseUrl(url);
        this.getRealBundleRes(parseData.bundle, url, parseData.loadUrl, (realBundle: cc.AssetManager.Bundle, realUrl: string) => {
            if (realBundle) {
                this.loadResAsync(url, type, release, realBundle, realUrl, (res: T) => {
                    endCb && endCb(res);
                })
            } else {
                endCb && endCb(null);
            }
        })
    }

    /**
     * 加载某个文件夹内的某类资源
     * @param url 资源路径
     * @param type 资源类型
     * @param release 资源是否需要释放
     */
    public async loadOneDir<T extends cc.Asset>(url: string, type: typeof cc.Asset, release: boolean = true): Promise<T[]> {
        if (!url) {
            cc.error(`[Res.load] url is empty`);
            return [];
        }

        let parseData = this.parseUrl(url);
        if (parseData.bundle && !cc.assetManager.getBundle(parseData.bundle)) {
            await this.loadBundle(parseData.bundle);
        }

        return new Promise((resolve, reject) => {
            let bundle: cc.AssetManager.Bundle = parseData.bundle ? cc.assetManager.getBundle(parseData.bundle) : cc.resources;
            if (!bundle) {
                cc.error(`[Res.loadDir] cant find bundle: ${url}`);
                resolve([]);
                return;
            }

            bundle.loadDir(parseData.loadUrl, type, (error: Error, resource: T[]) => {
                if (error) {
                    cc.error(`[Res.loadDir] load error: ${error}`);
                    resolve([]);
                } else {
                    let infos = bundle.getDirWithPath(url, type);
                    resource.forEach((asset, i) => { this.cacheAsset(infos[i].path, asset, release); });
                    resolve(resource);
                }
            });
        });
    }

    /** 多语言文件替换 */
    private async getLGResInfo(url: string, bundle: cc.AssetManager.Bundle) {
        let lgInfo: { lgUrl: string, lgBundle: cc.AssetManager.Bundle } = null;
        let info = bundle.getInfoWithPath(url);
        if (info) {
            let mulLgUuid = c2f.language.getLGResUuid(info.uuid);
            if (mulLgUuid) {
                let lgBundle: cc.AssetManager.Bundle = null;
                let lgBundleName = 'language_' + c2f.language.current;
                if (cc.assetManager.bundles.has(lgBundleName)) {
                    lgBundle = cc.assetManager.bundles.get(lgBundleName);
                } else {
                    lgBundle = await this.loadBundle(lgBundleName);
                }
                if (lgBundle) {
                    let lgUrl = lgBundle.getAssetInfo(mulLgUuid).path;
                    lgInfo = { lgUrl, lgBundle };
                }
            }
        }
        return lgInfo;
    }

    /** 异步·多语言文件替换 */
    private getLGResInfoAsync(url: string, bundle: cc.AssetManager.Bundle, endCb: Function) {
        let lgInfo: { lgUrl: string, lgBundle: cc.AssetManager.Bundle } = null;
        let info = bundle.getInfoWithPath(url);
        if (!info) {
            endCb && endCb(lgInfo);
            return;
        }
        let mulLgUuid = c2f.language.getLGResUuid(info.uuid);
        if (!mulLgUuid) {
            endCb && endCb(lgInfo);
            return;
        }
        let lgBundle: cc.AssetManager.Bundle = null;
        let lgBundleName = 'language_' + c2f.language.current;
        if (cc.assetManager.bundles.has(lgBundleName)) {
            lgBundle = cc.assetManager.bundles.get(lgBundleName);
            if (lgBundle) {
                let lgUrl = lgBundle.getAssetInfo(mulLgUuid).path;
                lgInfo = { lgUrl, lgBundle };
            }
            endCb && endCb(lgInfo);
        } else {
            this.loadBundleAsync(lgBundleName, (bundle: cc.AssetManager.Bundle) => {
                if (bundle) {
                    let lgUrl = lgBundle.getAssetInfo(mulLgUuid).path;
                    lgInfo = { lgUrl, lgBundle };
                }
                endCb && endCb(lgInfo);
            })
        }
    }

    /**
     * 获取节点实例，并建立新节点与prefab资源的联系
     * @param original 用于实例化节点的prefab或node
     * @param related 如果original不是动态加载的prefab，则需传入与original相关联的动态加载的prefab或node，以便资源释放的管理
     * @example 
     * // 1.original为动态加载的prefab，无需传related参数
     * Res.instantiate(original)
     * 
     * // 2.aPrefab为动态加载的prefab，aNode为aPrefab的实例节点（aNode = Res.instantiate(aPrefab)），original为被aPrefab静态引用的prefab，则调用时需要用如下方式才能保证引用关系正确
     * Res.instantiate(original, aPrefab)
     * Res.instantiate(original, aNode)
     * 
     * // 3.aPrefab为动态加载的prefab，aNode为aPrefab的实例节点（aNode = Res.instantiate(aPrefab)），original为aNode的某个子节点，则如下方式均可保证引用关系正确
     * Res.instantiate(original)
     * Res.instantiate(original, aPrefab)
     * Res.instantiate(original, aNode)
     */
    public instantiate(original: cc.Node | cc.Prefab, related?: cc.Node | cc.Prefab): cc.Node {
        if (!original) {
            cc.error("[Res.instantiate] original is null");
            return null;
        }

        let node = cc.instantiate(original) as cc.Node;
        let url = this.getCachePrefabUrl(original) || this.getCachePrefabUrl(related);
        if (url) {
            let cacheData: PrefabCacheData = this._prefabCache.get(url);
            // release为true才缓存关联节点
            if (cacheData && cacheData.release) {
                if (!Array.isArray(cacheData.nodes)) {
                    cacheData.nodes = [];
                }
                cacheData.nodes.push(node);
                this._nodePath.set(node, url);
            }
        }
        return node;
    }

    /** 延时释放 */
    public delayReleaseAll() {
        if (this.willRelease) {
            return;
        }
        this.willRelease = true;
        setTimeout(() => {
            this.releaseAll();
            this.willRelease = false;
        }, 300);
    }

    /**
     * 尝试释放所有缓存资源
     * - 只要遵守本文件的规则注释，此接口不会导致正在被使用的资源被引擎释放，可放心使用
     */
    public releaseAll(): void {
        let nowSec = Date.now() / 1000;
        // prefab
        this._prefabCache.forEach((cacheData, url) => {
            if (!cacheData.release || nowSec - cacheData.lastLoadTime < this.releaseSec) {
                return;
            }

            if (Array.isArray(cacheData.nodes)) {
                for (let i = cacheData.nodes.length - 1; i >= 0; i--) {
                    let node = cacheData.nodes[i];
                    if (node && node.isValid) {
                        continue;
                    }
                    this._nodePath.delete(node);
                    cacheData.nodes.splice(i, 1);
                }
                if (cacheData.nodes.length === 0) {
                    delete cacheData.nodes;
                }
            }

            if (!Array.isArray(cacheData.nodes)) {
                cacheData.asset.decRef();
                this._prefabPath.delete(cacheData.asset as cc.Prefab);
                this._prefabCache.delete(url);
            }
        });
        // spriteFrame、spriteAtlas、skeletonData
        let arr = [this._spriteFrameCache, this._spriteAtlasCache, this._skeletonDataCache];
        arr.forEach((map) => {
            map.forEach((cacheData, url) => {
                if (!cacheData.release || nowSec - cacheData.lastLoadTime < this.releaseSec) {
                    return;
                }
                cacheData.asset.decRef();
                map.delete(url);
            });
        });
        //TODO:other
    }

    /**
     * 获取resources包内资源打包后的真实路径
     * @param url resources下的资源路径
     * @param ext 资源的后缀名
     * @param isNative true:返回打包后native目录下的路径，false:返回打包后import目录下的路径
     */
    public static getNativeUrlByResources(url: string, ext: string, isNative: boolean = true): string {
        try {
            let nativeUrl = cc.assetManager["_transform"]({ path: url, bundle: cc.AssetManager.BuiltinBundleName.RESOURCES, __isNative__: isNative, ext: ext });
            return nativeUrl;
        } catch (error) {
            cc.error(`[Res.getNativeUrlByResources] error url: ${url}`);
            return "";
        }
    }

    /**
     * 通过资源相对路径释放资源
     * @param path          资源路径
     * @param bundleName    远程资源包名
     */
    release(path: string, type: typeof cc.Asset, bundleName: string = "resources") {
        let nowSec = Date.now() / 1000;
        let keyUrl = path;
        if (!path.startsWith(BUNDLE_CHECK)) {
            keyUrl = this.getFullUrl(bundleName, path);
        }
        if (this._otherCache.has(keyUrl)) {
            let dst = this._otherCache.get(keyUrl);
            dst.decRef();
            this._otherCache.delete(keyUrl);
        } else {
            let cacheData = this.getCacheData(keyUrl, type);
            if (cacheData) {
                if (type === cc.Prefab) {
                    let prefabCache = cacheData as PrefabCacheData;
                    if (!prefabCache.release || nowSec - prefabCache.lastLoadTime < this.releaseSec) {
                        return;
                    }
                    if (Array.isArray(prefabCache.nodes)) {
                        for (let i = prefabCache.nodes.length - 1; i >= 0; i--) {
                            let node = prefabCache.nodes[i];
                            if (node && node.isValid) {
                                continue;
                            }
                            this._nodePath.delete(node);
                            prefabCache.nodes.splice(i, 1);
                        }
                        if (prefabCache.nodes.length === 0) {
                            delete prefabCache.nodes;
                        }
                    }
                    if (!Array.isArray(prefabCache.nodes)) {
                        prefabCache.asset.decRef();
                        this._prefabPath.delete(cacheData.asset as cc.Prefab);
                        this._prefabCache.delete(keyUrl);
                    }
                } else {
                    if (!cacheData.release || nowSec - cacheData.lastLoadTime < this.releaseSec) {
                        return;
                    }
                    cacheData.asset.decRef();

                    let dstMap: Map<string, CacheData> = null;
                    if (type === cc.SpriteFrame) {
                        dstMap = this._spriteFrameCache;
                    } else if (type === cc.SpriteAtlas) {
                        dstMap = this._spriteAtlasCache;
                    } else if (type === sp.SkeletonData) {
                        dstMap = this._skeletonDataCache;
                    }
                    dstMap.delete(keyUrl);
                }
            }
        }
    }

    /**
     * 通过相对文件夹路径删除所有文件夹中资源
     * @param path          资源文件夹路径
     * @param bundleName    远程资源包名
     */
    releaseDir(path: string, bundleName: string = "resources") {
        let bundle: cc.AssetManager.Bundle | null = cc.assetManager.getBundle(bundleName);
        if (bundle) {
            let infos = bundle.getDirWithPath(path);
            if (infos) {
                infos.map((info) => {
                    let url = info.path;
                    this.release(url, null, bundleName)
                });
            }
        }
    }

    /** 释放预制依赖资源 */
    private releasePrefabtDepsRecursively(uuid: string) {
        let asset = cc.assetManager.assets.get(uuid)!;
        cc.assetManager.releaseAsset(asset);

        if (asset instanceof cc.Prefab) {
            let uuids: string[] = cc.assetManager.dependUtil.getDepsRecursively(uuid)!;
            uuids.forEach(uuid => {
                let asset = cc.assetManager.assets.get(uuid)!;
                asset.decRef();
            });
        }
    }

    /**
     * 获取资源
     * @param path          资源路径
     * @param type          资源类型
     * @param bundleName    远程资源包名
     */
    get<T extends cc.Asset>(path: string, type?: AssetType<T> | null, bundleName: string = "resources"): T | null {
        let bundle: cc.AssetManager.Bundle | null = cc.assetManager.getBundle(bundleName);
        return bundle!.get(path, type);
    }

    /** 打印缓存中所有资源信息 */
    dump() {
        cc.assetManager.assets.forEach((value: cc.Asset, key: string) => {
            console.log(cc.assetManager.assets.get(key));
        })
        console.log(`当前资源总数:${cc.assetManager.assets.count}`);
    }

    private parseLoadResArgs<T extends cc.Asset>(
        paths: string | string[],
        type?: AssetType<T> | ProgressCallback | CompleteCallback | null,
        onProgress?: AssetType<T> | ProgressCallback | CompleteCallback | null,
        onComplete?: ProgressCallback | CompleteCallback | null
    ) {
        let pathsOut: any = paths;
        let typeOut: any = type;
        let onProgressOut: any = onProgress;
        let onCompleteOut: any = onComplete;
        if (onComplete === undefined) {
            const isValidType = cc.js.isChildClassOf(type as AssetType, cc.Asset);
            if (onProgress) {
                onCompleteOut = onProgress as CompleteCallback;
                if (isValidType) {
                    onProgressOut = null;
                }
            }
            else if (onProgress === undefined && !isValidType) {
                onCompleteOut = type as CompleteCallback;
                onProgressOut = null;
                typeOut = null;
            }
            if (onProgress !== undefined && !isValidType) {
                onProgressOut = type as ProgressCallback;
                typeOut = null;
            }
        }
        return { paths: pathsOut, type: typeOut, onProgress: onProgressOut, onComplete: onCompleteOut };
    }

    private loadByBundleAndArgs<T extends cc.Asset>(bundle: cc.AssetManager.Bundle, args: ILoadResArgs<T>): void {
        if (args.dir) {
            let dirUrl = args.paths as string;
            bundle.loadDir(dirUrl, args.type, args.onProgress, (err, data: T[]) => {
                if (err) {
                    cc.error(`[Res.loadDir] load error: ${err}`);
                } else {
                    let infos = bundle.getDirWithPath(dirUrl, args.type as any);
                    data.forEach((asset, i) => { this.cacheAsset(infos[i].path, asset); });
                }
                args.onComplete && args.onComplete(err, data as any);
            });
        }
        else {
            if (typeof args.paths == 'string') {
                let keyUrl = args.paths;
                if (args.bundle) {
                    keyUrl = this.getFullUrl(args.bundle, args.paths);
                }
                let asset: T = this.getRes(keyUrl, args.type as any);
                if (asset) {
                    args.onComplete && args.onComplete(null, asset);
                } else {
                    let existRes = bundle.get(args.paths, args.type)
                    if (existRes) {
                        this.cacheAsset(keyUrl, existRes, true);
                        args.onComplete && args.onComplete(null, existRes);
                    } else {
                        bundle.load(args.paths, args.type, args.onProgress, (err, data: T) => {
                            if (err) {
                                cc.error(`[Res.load] load error: ${err}`);
                            } else {
                                this.cacheAsset(keyUrl, data, true);
                            }
                            args.onComplete && args.onComplete(err, data);
                        });
                    }
                }
            } else {
                let arrUrl: string[] = args.paths;
                bundle.load(arrUrl, args.type, args.onProgress, (err, data: T[]) => {
                    if (err) {
                        cc.error(`[Res.loadDir] load error: ${err}`);
                    } else {
                        arrUrl.forEach((asset, i) => { this.cacheAsset(arrUrl[i], data[i]); });
                    }
                    args.onComplete && args.onComplete(err, data as any);
                });
            }
        }
    }

    private async loadByArgs<T extends cc.Asset>(args: ILoadResArgs<T>) {
        let bundle: cc.AssetManager.Bundle = cc.resources;
        if (args.bundle) {
            if (cc.assetManager.bundles.has(args.bundle)) {
                bundle = cc.assetManager.bundles.get(args.bundle);
            } else {
                bundle = await this.loadBundle(args.bundle);
            }
        }
        if (typeof args.paths == 'string') {
            //多语言适配
            let lgInfo = await this.getLGResInfo(args.paths, bundle);
            if (lgInfo) {
                args.paths = lgInfo.lgUrl;
                bundle = lgInfo.lgBundle;
            }
        } else {
            //TODO:文件数组
        }
        this.loadByBundleAndArgs(bundle!, args);
    }

    /** 静态成员 */
    private static _instance: ResLoader = null
    public static getInstance(): ResLoader {
        if (!this._instance) {
            this._instance = new ResLoader();
        }
        return this._instance;
    }
}

declare global {
    interface IC2F {
        res: ResLoader;
    }
}

c2f.res = ResLoader.getInstance();
export { };