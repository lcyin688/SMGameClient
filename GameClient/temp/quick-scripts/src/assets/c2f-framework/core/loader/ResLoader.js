"use strict";
cc._RF.push(module, '4956biO6Y1P7rKpyqSuOBIT', 'ResLoader');
// c2f-framework/core/loader/ResLoader.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/** asset bundle路径校验 */
var BUNDLE_CHECK = "ab:";
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
var ResLoader = /** @class */ (function () {
    function ResLoader() {
        /** 节点与其关联的prefab路径 */
        this._nodePath = new Map();
        /** prefab资源与路径 */
        this._prefabPath = new Map();
        this._prefabCache = new Map();
        this._spriteFrameCache = new Map();
        this._spriteAtlasCache = new Map();
        this._skeletonDataCache = new Map();
        this._otherCache = new Map();
        /** 资源释放的间隔时间（秒），资源超过此间隔未被load才可释放 */
        this.releaseSec = 5;
        /** 预备释放 */
        this.willRelease = false;
    }
    /**
     * 资源管理中的全局Url
     * @param bundle
     * @param url
     * @returns
     */
    ResLoader.prototype.getFullUrl = function (bundle, url) {
        var keyUrl = "" + BUNDLE_CHECK + bundle + "/" + url;
        return keyUrl;
    };
    /**
     * 资源路径解析
     * @param url
     */
    ResLoader.prototype.parseUrl = function (url) {
        if (url.startsWith(BUNDLE_CHECK)) {
            var loadUrl = url.substring(BUNDLE_CHECK.length);
            var idx = loadUrl.indexOf("/");
            var bundle = loadUrl.substring(0, idx);
            loadUrl = loadUrl.substring(idx + 1);
            return { bundle: bundle, loadUrl: loadUrl };
        }
        else {
            return { loadUrl: url };
        }
    };
    /**
     * 通过节点或预制查找已缓存prefab路径
     * @param target
     */
    ResLoader.prototype.getCachePrefabUrl = function (target) {
        var url = "";
        if (target instanceof cc.Node) {
            var cur = target;
            while (cur) {
                if (cur["_prefab"] && cur["_prefab"]["root"]) {
                    url = this._nodePath.get(cur["_prefab"]["root"]) || "";
                    if (url) {
                        break;
                    }
                }
                cur = cur.parent;
            }
        }
        else if (target instanceof cc.Prefab) {
            url = this._prefabPath.get(target) || "";
        }
        return url;
    };
    /**
     * 缓存资源
     * @param url 资源路径
     * @param asset 资源
     * @param release 资源是否需要释放
     */
    ResLoader.prototype.cacheAsset = function (url, asset, release) {
        var _this = this;
        if (release === void 0) { release = true; }
        if (!asset) {
            return;
        }
        var func = function (map) {
            if (map.has(url)) {
                return;
            }
            asset.addRef();
            if (asset instanceof cc.Prefab) {
                _this._prefabPath.set(asset, url);
            }
            var cacheData = {
                asset: asset,
                release: release,
                lastLoadTime: Date.now() / 1000
            };
            map.set(url, cacheData);
        };
        if (asset instanceof cc.Prefab) {
            func(this._prefabCache);
        }
        else if (asset instanceof cc.SpriteFrame) {
            func(this._spriteFrameCache);
        }
        else if (asset instanceof cc.SpriteAtlas) {
            func(this._spriteAtlasCache);
        }
        else if (asset instanceof sp.SkeletonData) {
            func(this._skeletonDataCache);
        }
        else {
            if (this._otherCache.has(url)) {
                return;
            }
            asset.addRef();
            this._otherCache.set(url, asset);
        }
    };
    /**
     * 获取缓存资源。通常不应直接调用此接口，除非调用前能确保资源已加载并且能自行管理引用计数
     * @param url 资源路径
     * @param type 资源类型
     */
    ResLoader.prototype.getRes = function (url, type) {
        var asset = null;
        var func = function (map) {
            var data = map.get(url);
            if (data) {
                asset = data.asset;
                data.lastLoadTime = Date.now() / 1000;
            }
        };
        if (type === cc.Prefab) {
            func(this._prefabCache);
        }
        else if (type === cc.SpriteFrame) {
            func(this._spriteFrameCache);
        }
        else if (type === cc.SpriteAtlas) {
            func(this._spriteAtlasCache);
        }
        else if (type === sp.SkeletonData) {
            func(this._skeletonDataCache);
        }
        else {
            asset = this._otherCache.get(url);
        }
        return asset;
    };
    ResLoader.prototype.getCacheData = function (url, type) {
        var cache = null;
        if (type === cc.Prefab) {
            cache = this._prefabCache.get(url);
        }
        else if (type === cc.SpriteFrame) {
            cache = this._spriteFrameCache.get(url);
        }
        else if (type === cc.SpriteAtlas) {
            cache = this._spriteAtlasCache.get(url);
        }
        else if (type === sp.SkeletonData) {
            cache = this._skeletonDataCache.get(url);
        }
        return cache;
    };
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
    ResLoader.prototype.loadBundle = function (nameOrUrl, v) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cc.assetManager.loadBundle(nameOrUrl, { version: v }, function (err, bundle) {
                            if (err) {
                                cc.error("[Res.loadBundle] error: " + err);
                                resolve(null);
                            }
                            resolve(bundle);
                        });
                    })];
            });
        });
    };
    /** 异步加载包 */
    ResLoader.prototype.loadBundleAsync = function (nameOrUrl, endCb, v) {
        cc.assetManager.loadBundle(nameOrUrl, { version: v }, function (err, bundle) {
            if (err) {
                cc.error("[Res.loadBundle] error: " + err);
                endCb && endCb(null);
            }
            endCb && endCb(bundle);
        });
    };
    ResLoader.prototype.loadRemote = function (url) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!url) {
            cc.error("[Res.load] url is empty");
            return null;
        }
        var options = null;
        var onComplete = null;
        if (args.length == 2) {
            options = args[0];
            onComplete = args[1];
        }
        else {
            onComplete = args[0];
        }
        var asset = this.getRes(url, undefined);
        if (asset) {
            onComplete && onComplete(null, asset);
        }
        else {
            var parseData = this.parseUrl(url);
            cc.assetManager.loadRemote(parseData.loadUrl, options, function (err, data) {
                if (err) {
                    cc.error("[Res.load] load error: " + err);
                }
                else {
                    _this.cacheAsset(url, data, true);
                }
                onComplete && onComplete(err, data);
            });
        }
    };
    ResLoader.prototype.load = function (bundleName, paths, type, onProgress, onComplete) {
        var args = null;
        if (typeof paths === "string" || paths instanceof Array) {
            args = this.parseLoadResArgs(paths, type, onProgress, onComplete);
            args.bundle = bundleName;
        }
        else {
            args = this.parseLoadResArgs(bundleName, paths, type, onProgress);
        }
        this.loadByArgs(args);
    };
    ResLoader.prototype.loadDir = function (bundleName, dir, type, onProgress, onComplete) {
        var args = null;
        if (typeof dir === "string") {
            args = this.parseLoadResArgs(dir, type, onProgress, onComplete);
            args.bundle = bundleName;
        }
        else {
            args = this.parseLoadResArgs(bundleName, dir, type, onProgress);
        }
        args.dir = args.paths;
        this.loadByArgs(args);
    };
    /**
     * 加载单个资源
     * @param url 资源路径
     * @param type 资源类型
     * @param release 资源是否需要释放
     */
    ResLoader.prototype.loadOne = function (url, type, release) {
        if (release === void 0) { release = true; }
        return __awaiter(this, void 0, Promise, function () {
            var asset, parseData, bundle, lgInfo, existRes;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!url) {
                            cc.error("[Res.load] url is empty");
                            return [2 /*return*/, null];
                        }
                        asset = this.getRes(url, type);
                        if (asset) {
                            return [2 /*return*/, asset];
                        }
                        parseData = this.parseUrl(url);
                        if (!(parseData.bundle && !cc.assetManager.getBundle(parseData.bundle))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadBundle(parseData.bundle)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        bundle = parseData.bundle ? cc.assetManager.getBundle(parseData.bundle) : cc.resources;
                        if (!bundle) {
                            cc.error("[Res.load] cant find bundle: " + url);
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, this.getLGResInfo(parseData.loadUrl, bundle)];
                    case 3:
                        lgInfo = _a.sent();
                        if (lgInfo) {
                            parseData.loadUrl = lgInfo.lgUrl;
                            bundle = lgInfo.lgBundle;
                        }
                        existRes = bundle.get(parseData.loadUrl, type);
                        if (!existRes) return [3 /*break*/, 4];
                        this.cacheAsset(url, existRes, true);
                        return [2 /*return*/, existRes];
                    case 4: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            bundle.load(parseData.loadUrl, type, function (error, resource) {
                                if (error) {
                                    cc.error("[Res.load] load error: " + error);
                                    resolve(null);
                                }
                                else {
                                    _this.cacheAsset(url, resource, release);
                                    resolve(resource);
                                }
                            });
                        })];
                    case 5:
                        asset = _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/, asset];
                }
            });
        });
    };
    ResLoader.prototype.loadResAsync = function (urlFull, type, release, bundle, loadUrl, endCb) {
        var _this = this;
        var existRes = bundle.get(loadUrl, type);
        if (existRes) {
            this.cacheAsset(urlFull, existRes, true);
            endCb && endCb(existRes);
        }
        else {
            bundle.load(loadUrl, type, function (error, res) {
                if (error) {
                    cc.error("[Res.load] load error: " + error);
                    endCb && endCb(null);
                }
                else {
                    _this.cacheAsset(urlFull, res, release);
                    endCb && endCb(res);
                }
            });
        }
    };
    ResLoader.prototype.getRealBundleRes = function (bundleName, urlFull, loadUrl, endCb) {
        var bundle = bundleName ? cc.assetManager.getBundle(bundleName) : cc.resources;
        if (!bundle) {
            cc.error("[Res.load] cant find bundle: " + urlFull);
            endCb && endCb(null, null);
        }
        else {
            //多语言适配
            this.getLGResInfoAsync(loadUrl, bundle, function (info) {
                if (info) {
                    endCb && endCb(info.lgBundle, info.lgUrl);
                }
                else {
                    endCb && endCb(bundle, loadUrl);
                }
            });
        }
    };
    /**
     * 异步加载单个资源
     * @param url 资源路径
     * @param type 资源类型
     * @param release 资源是否需要释放
     */
    ResLoader.prototype.loadOneAsync = function (url, type, release, endCb) {
        var _this = this;
        if (release === void 0) { release = true; }
        if (endCb === void 0) { endCb = null; }
        if (!url) {
            cc.error("[Res.load] url is empty");
            endCb && endCb(null);
        }
        var asset = this.getRes(url, type);
        if (asset) {
            endCb && endCb(asset);
        }
        var parseData = this.parseUrl(url);
        this.getRealBundleRes(parseData.bundle, url, parseData.loadUrl, function (realBundle, realUrl) {
            if (realBundle) {
                _this.loadResAsync(url, type, release, realBundle, realUrl, function (res) {
                    endCb && endCb(res);
                });
            }
            else {
                endCb && endCb(null);
            }
        });
    };
    /**
     * 加载某个文件夹内的某类资源
     * @param url 资源路径
     * @param type 资源类型
     * @param release 资源是否需要释放
     */
    ResLoader.prototype.loadOneDir = function (url, type, release) {
        if (release === void 0) { release = true; }
        return __awaiter(this, void 0, Promise, function () {
            var parseData;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!url) {
                            cc.error("[Res.load] url is empty");
                            return [2 /*return*/, []];
                        }
                        parseData = this.parseUrl(url);
                        if (!(parseData.bundle && !cc.assetManager.getBundle(parseData.bundle))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadBundle(parseData.bundle)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, new Promise(function (resolve, reject) {
                            var bundle = parseData.bundle ? cc.assetManager.getBundle(parseData.bundle) : cc.resources;
                            if (!bundle) {
                                cc.error("[Res.loadDir] cant find bundle: " + url);
                                resolve([]);
                                return;
                            }
                            bundle.loadDir(parseData.loadUrl, type, function (error, resource) {
                                if (error) {
                                    cc.error("[Res.loadDir] load error: " + error);
                                    resolve([]);
                                }
                                else {
                                    var infos_1 = bundle.getDirWithPath(url, type);
                                    resource.forEach(function (asset, i) { _this.cacheAsset(infos_1[i].path, asset, release); });
                                    resolve(resource);
                                }
                            });
                        })];
                }
            });
        });
    };
    /** 多语言文件替换 */
    ResLoader.prototype.getLGResInfo = function (url, bundle) {
        return __awaiter(this, void 0, void 0, function () {
            var lgInfo, info, mulLgUuid, lgBundle, lgBundleName, lgUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lgInfo = null;
                        info = bundle.getInfoWithPath(url);
                        if (!info) return [3 /*break*/, 4];
                        mulLgUuid = c2f.language.getLGResUuid(info.uuid);
                        if (!mulLgUuid) return [3 /*break*/, 4];
                        lgBundle = null;
                        lgBundleName = 'language_' + c2f.language.current;
                        if (!cc.assetManager.bundles.has(lgBundleName)) return [3 /*break*/, 1];
                        lgBundle = cc.assetManager.bundles.get(lgBundleName);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.loadBundle(lgBundleName)];
                    case 2:
                        lgBundle = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (lgBundle) {
                            lgUrl = lgBundle.getAssetInfo(mulLgUuid).path;
                            lgInfo = { lgUrl: lgUrl, lgBundle: lgBundle };
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/, lgInfo];
                }
            });
        });
    };
    /** 异步·多语言文件替换 */
    ResLoader.prototype.getLGResInfoAsync = function (url, bundle, endCb) {
        var lgInfo = null;
        var info = bundle.getInfoWithPath(url);
        if (!info) {
            endCb && endCb(lgInfo);
            return;
        }
        var mulLgUuid = c2f.language.getLGResUuid(info.uuid);
        if (!mulLgUuid) {
            endCb && endCb(lgInfo);
            return;
        }
        var lgBundle = null;
        var lgBundleName = 'language_' + c2f.language.current;
        if (cc.assetManager.bundles.has(lgBundleName)) {
            lgBundle = cc.assetManager.bundles.get(lgBundleName);
            if (lgBundle) {
                var lgUrl = lgBundle.getAssetInfo(mulLgUuid).path;
                lgInfo = { lgUrl: lgUrl, lgBundle: lgBundle };
            }
            endCb && endCb(lgInfo);
        }
        else {
            this.loadBundleAsync(lgBundleName, function (bundle) {
                if (bundle) {
                    var lgUrl = lgBundle.getAssetInfo(mulLgUuid).path;
                    lgInfo = { lgUrl: lgUrl, lgBundle: lgBundle };
                }
                endCb && endCb(lgInfo);
            });
        }
    };
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
    ResLoader.prototype.instantiate = function (original, related) {
        if (!original) {
            cc.error("[Res.instantiate] original is null");
            return null;
        }
        var node = cc.instantiate(original);
        var url = this.getCachePrefabUrl(original) || this.getCachePrefabUrl(related);
        if (url) {
            var cacheData = this._prefabCache.get(url);
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
    };
    /** 延时释放 */
    ResLoader.prototype.delayReleaseAll = function () {
        var _this = this;
        if (this.willRelease) {
            return;
        }
        this.willRelease = true;
        setTimeout(function () {
            _this.releaseAll();
            _this.willRelease = false;
        }, 300);
    };
    /**
     * 尝试释放所有缓存资源
     * - 只要遵守本文件的规则注释，此接口不会导致正在被使用的资源被引擎释放，可放心使用
     */
    ResLoader.prototype.releaseAll = function () {
        var _this = this;
        var nowSec = Date.now() / 1000;
        // prefab
        this._prefabCache.forEach(function (cacheData, url) {
            if (!cacheData.release || nowSec - cacheData.lastLoadTime < _this.releaseSec) {
                return;
            }
            if (Array.isArray(cacheData.nodes)) {
                for (var i = cacheData.nodes.length - 1; i >= 0; i--) {
                    var node = cacheData.nodes[i];
                    if (node && node.isValid) {
                        continue;
                    }
                    _this._nodePath.delete(node);
                    cacheData.nodes.splice(i, 1);
                }
                if (cacheData.nodes.length === 0) {
                    delete cacheData.nodes;
                }
            }
            if (!Array.isArray(cacheData.nodes)) {
                cacheData.asset.decRef();
                _this._prefabPath.delete(cacheData.asset);
                _this._prefabCache.delete(url);
            }
        });
        // spriteFrame、spriteAtlas、skeletonData
        var arr = [this._spriteFrameCache, this._spriteAtlasCache, this._skeletonDataCache];
        arr.forEach(function (map) {
            map.forEach(function (cacheData, url) {
                if (!cacheData.release || nowSec - cacheData.lastLoadTime < _this.releaseSec) {
                    return;
                }
                cacheData.asset.decRef();
                map.delete(url);
            });
        });
        //TODO:other
    };
    /**
     * 获取resources包内资源打包后的真实路径
     * @param url resources下的资源路径
     * @param ext 资源的后缀名
     * @param isNative true:返回打包后native目录下的路径，false:返回打包后import目录下的路径
     */
    ResLoader.getNativeUrlByResources = function (url, ext, isNative) {
        if (isNative === void 0) { isNative = true; }
        try {
            var nativeUrl = cc.assetManager["_transform"]({ path: url, bundle: cc.AssetManager.BuiltinBundleName.RESOURCES, __isNative__: isNative, ext: ext });
            return nativeUrl;
        }
        catch (error) {
            cc.error("[Res.getNativeUrlByResources] error url: " + url);
            return "";
        }
    };
    /**
     * 通过资源相对路径释放资源
     * @param path          资源路径
     * @param bundleName    远程资源包名
     */
    ResLoader.prototype.release = function (path, type, bundleName) {
        if (bundleName === void 0) { bundleName = "resources"; }
        var nowSec = Date.now() / 1000;
        var keyUrl = path;
        if (!path.startsWith(BUNDLE_CHECK)) {
            keyUrl = this.getFullUrl(bundleName, path);
        }
        if (this._otherCache.has(keyUrl)) {
            var dst = this._otherCache.get(keyUrl);
            dst.decRef();
            this._otherCache.delete(keyUrl);
        }
        else {
            var cacheData = this.getCacheData(keyUrl, type);
            if (cacheData) {
                if (type === cc.Prefab) {
                    var prefabCache = cacheData;
                    if (!prefabCache.release || nowSec - prefabCache.lastLoadTime < this.releaseSec) {
                        return;
                    }
                    if (Array.isArray(prefabCache.nodes)) {
                        for (var i = prefabCache.nodes.length - 1; i >= 0; i--) {
                            var node = prefabCache.nodes[i];
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
                        this._prefabPath.delete(cacheData.asset);
                        this._prefabCache.delete(keyUrl);
                    }
                }
                else {
                    if (!cacheData.release || nowSec - cacheData.lastLoadTime < this.releaseSec) {
                        return;
                    }
                    cacheData.asset.decRef();
                    var dstMap = null;
                    if (type === cc.SpriteFrame) {
                        dstMap = this._spriteFrameCache;
                    }
                    else if (type === cc.SpriteAtlas) {
                        dstMap = this._spriteAtlasCache;
                    }
                    else if (type === sp.SkeletonData) {
                        dstMap = this._skeletonDataCache;
                    }
                    dstMap.delete(keyUrl);
                }
            }
        }
    };
    /**
     * 通过相对文件夹路径删除所有文件夹中资源
     * @param path          资源文件夹路径
     * @param bundleName    远程资源包名
     */
    ResLoader.prototype.releaseDir = function (path, bundleName) {
        var _this = this;
        if (bundleName === void 0) { bundleName = "resources"; }
        var bundle = cc.assetManager.getBundle(bundleName);
        if (bundle) {
            var infos = bundle.getDirWithPath(path);
            if (infos) {
                infos.map(function (info) {
                    var url = info.path;
                    _this.release(url, null, bundleName);
                });
            }
        }
    };
    /** 释放预制依赖资源 */
    ResLoader.prototype.releasePrefabtDepsRecursively = function (uuid) {
        var asset = cc.assetManager.assets.get(uuid);
        cc.assetManager.releaseAsset(asset);
        if (asset instanceof cc.Prefab) {
            var uuids = cc.assetManager.dependUtil.getDepsRecursively(uuid);
            uuids.forEach(function (uuid) {
                var asset = cc.assetManager.assets.get(uuid);
                asset.decRef();
            });
        }
    };
    /**
     * 获取资源
     * @param path          资源路径
     * @param type          资源类型
     * @param bundleName    远程资源包名
     */
    ResLoader.prototype.get = function (path, type, bundleName) {
        if (bundleName === void 0) { bundleName = "resources"; }
        var bundle = cc.assetManager.getBundle(bundleName);
        return bundle.get(path, type);
    };
    /** 打印缓存中所有资源信息 */
    ResLoader.prototype.dump = function () {
        cc.assetManager.assets.forEach(function (value, key) {
            console.log(cc.assetManager.assets.get(key));
        });
        console.log("\u5F53\u524D\u8D44\u6E90\u603B\u6570:" + cc.assetManager.assets.count);
    };
    ResLoader.prototype.parseLoadResArgs = function (paths, type, onProgress, onComplete) {
        var pathsOut = paths;
        var typeOut = type;
        var onProgressOut = onProgress;
        var onCompleteOut = onComplete;
        if (onComplete === undefined) {
            var isValidType = cc.js.isChildClassOf(type, cc.Asset);
            if (onProgress) {
                onCompleteOut = onProgress;
                if (isValidType) {
                    onProgressOut = null;
                }
            }
            else if (onProgress === undefined && !isValidType) {
                onCompleteOut = type;
                onProgressOut = null;
                typeOut = null;
            }
            if (onProgress !== undefined && !isValidType) {
                onProgressOut = type;
                typeOut = null;
            }
        }
        return { paths: pathsOut, type: typeOut, onProgress: onProgressOut, onComplete: onCompleteOut };
    };
    ResLoader.prototype.loadByBundleAndArgs = function (bundle, args) {
        var _this = this;
        if (args.dir) {
            var dirUrl_1 = args.paths;
            bundle.loadDir(dirUrl_1, args.type, args.onProgress, function (err, data) {
                if (err) {
                    cc.error("[Res.loadDir] load error: " + err);
                }
                else {
                    var infos_2 = bundle.getDirWithPath(dirUrl_1, args.type);
                    data.forEach(function (asset, i) { _this.cacheAsset(infos_2[i].path, asset); });
                }
                args.onComplete && args.onComplete(err, data);
            });
        }
        else {
            if (typeof args.paths == 'string') {
                var keyUrl_1 = args.paths;
                if (args.bundle) {
                    keyUrl_1 = this.getFullUrl(args.bundle, args.paths);
                }
                var asset = this.getRes(keyUrl_1, args.type);
                if (asset) {
                    args.onComplete && args.onComplete(null, asset);
                }
                else {
                    var existRes = bundle.get(args.paths, args.type);
                    if (existRes) {
                        this.cacheAsset(keyUrl_1, existRes, true);
                        args.onComplete && args.onComplete(null, existRes);
                    }
                    else {
                        bundle.load(args.paths, args.type, args.onProgress, function (err, data) {
                            if (err) {
                                cc.error("[Res.load] load error: " + err);
                            }
                            else {
                                _this.cacheAsset(keyUrl_1, data, true);
                            }
                            args.onComplete && args.onComplete(err, data);
                        });
                    }
                }
            }
            else {
                var arrUrl_1 = args.paths;
                bundle.load(arrUrl_1, args.type, args.onProgress, function (err, data) {
                    if (err) {
                        cc.error("[Res.loadDir] load error: " + err);
                    }
                    else {
                        arrUrl_1.forEach(function (asset, i) { _this.cacheAsset(arrUrl_1[i], data[i]); });
                    }
                    args.onComplete && args.onComplete(err, data);
                });
            }
        }
    };
    ResLoader.prototype.loadByArgs = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var bundle, lgInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bundle = cc.resources;
                        if (!args.bundle) return [3 /*break*/, 3];
                        if (!cc.assetManager.bundles.has(args.bundle)) return [3 /*break*/, 1];
                        bundle = cc.assetManager.bundles.get(args.bundle);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.loadBundle(args.bundle)];
                    case 2:
                        bundle = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!(typeof args.paths == 'string')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getLGResInfo(args.paths, bundle)];
                    case 4:
                        lgInfo = _a.sent();
                        if (lgInfo) {
                            args.paths = lgInfo.lgUrl;
                            bundle = lgInfo.lgBundle;
                        }
                        return [3 /*break*/, 5];
                    case 5:
                        this.loadByBundleAndArgs(bundle, args);
                        return [2 /*return*/];
                }
            });
        });
    };
    ResLoader.getInstance = function () {
        if (!this._instance) {
            this._instance = new ResLoader();
        }
        return this._instance;
    };
    /** 静态成员 */
    ResLoader._instance = null;
    return ResLoader;
}());
c2f.res = ResLoader.getInstance();

cc._RF.pop();