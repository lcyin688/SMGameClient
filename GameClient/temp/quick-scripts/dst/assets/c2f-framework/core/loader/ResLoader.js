
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/core/loader/ResLoader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvcmUvbG9hZGVyL1Jlc0xvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQSx1QkFBdUI7QUFDdkIsSUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBRTNCOzs7Ozs7Ozs7Ozs7R0FZRztBQUNIO0lBQUE7UUFDSSxzQkFBc0I7UUFDZCxjQUFTLEdBQXlCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDcEQsa0JBQWtCO1FBQ1YsZ0JBQVcsR0FBMkIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUVoRCxpQkFBWSxHQUFpQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3ZELHNCQUFpQixHQUEyQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3RELHNCQUFpQixHQUEyQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3RELHVCQUFrQixHQUEyQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3ZELGdCQUFXLEdBQTBCLElBQUksR0FBRyxFQUFFLENBQUM7UUFFdkQscUNBQXFDO1FBQzlCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDOUIsV0FBVztRQUNILGdCQUFXLEdBQVksS0FBSyxDQUFDO0lBeTFCekMsQ0FBQztJQXQxQkc7Ozs7O09BS0c7SUFDSSw4QkFBVSxHQUFqQixVQUFrQixNQUFjLEVBQUUsR0FBVztRQUN6QyxJQUFJLE1BQU0sR0FBRyxLQUFHLFlBQVksR0FBRyxNQUFNLFNBQUksR0FBSyxDQUFDO1FBQy9DLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSSw0QkFBUSxHQUFmLFVBQWdCLEdBQVc7UUFDdkIsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQzlCLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lB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LENBQUM7SUFQRCxXQUFXO0lBQ0ksbUJBQVMsR0FBYyxJQUFJLENBQUE7SUFPOUMsZ0JBQUM7Q0F4MkJELEFBdzJCQyxJQUFBO0FBUUQsR0FBRyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIFByb2dyZXNzQ2FsbGJhY2sgPSAoZmluaXNoZWQ6IG51bWJlciwgdG90YWw6IG51bWJlciwgaXRlbTogY2MuQXNzZXRNYW5hZ2VyLlJlcXVlc3RJdGVtKSA9PiB2b2lkO1xudHlwZSBDb21wbGV0ZUNhbGxiYWNrPFQgPSBhbnk+ID0gKGVycjogRXJyb3IgfCBudWxsLCBkYXRhOiBUKSA9PiB2b2lkO1xudHlwZSBJUmVtb3RlT3B0aW9ucyA9IFJlY29yZDxzdHJpbmcsIGFueT47XG50eXBlIEFzc2V0VHlwZTxUID0gY2MuQXNzZXQ+ID0gbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gVDtcblxuaW50ZXJmYWNlIElMb2FkUmVzQXJnczxUIGV4dGVuZHMgY2MuQXNzZXQ+IHtcbiAgICBidW5kbGU/OiBzdHJpbmc7XG4gICAgZGlyPzogc3RyaW5nO1xuICAgIHBhdGhzOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICB0eXBlOiBBc3NldFR5cGU8VD4gfCBudWxsO1xuICAgIG9uUHJvZ3Jlc3M6IFByb2dyZXNzQ2FsbGJhY2sgfCBudWxsO1xuICAgIG9uQ29tcGxldGU6IENvbXBsZXRlQ2FsbGJhY2s8VD4gfCBudWxsO1xufVxuXG4vKiog6LWE5rqQ57yT5a2Y5Z+656GA5pWw5o2u57uT5p6EICovXG5pbnRlcmZhY2UgQ2FjaGVEYXRhIHtcbiAgICBhc3NldDogY2MuQXNzZXQsXG4gICAgLyoqIOi1hOa6kOaYr+WQpumcgOimgemHiuaUviAqL1xuICAgIHJlbGVhc2U6IGJvb2xlYW4sXG4gICAgLyoqIOi1hOa6kOacgOWQjuS4gOasoeiiq+WKoOi9veeahOaXtumXtOeCue+8iOenku+8iSAqL1xuICAgIGxhc3RMb2FkVGltZTogbnVtYmVyLFxufVxuXG4vKiog6aKE5Yi25L2T6LWE5rqQ57yT5a2Y5pWw5o2uICovXG5pbnRlcmZhY2UgUHJlZmFiQ2FjaGVEYXRhIGV4dGVuZHMgQ2FjaGVEYXRhIHtcbiAgICAvKiog5q2kcHJlZmFi5YWz6IGU55qE5a6e5L6L6IqC54K5ICovXG4gICAgbm9kZXM/OiBjYy5Ob2RlW10sXG59XG5cbi8qKiBhc3NldCBidW5kbGXot6/lvoTmoKHpqowgKi9cbmNvbnN0IEJVTkRMRV9DSEVDSyA9IFwiYWI6XCI7XG5cbi8qKlxuICog6LWE5rqQ566h55CG57G7XG4gKiBcbiAqIOi1hOa6kOWKoOi9vTpcbiAqIDEuIOWmguaenOWKoOi9vXJlc291cmNlc+WGheeahOi1hOa6kO+8jOebtOaOpeWGmeaYjnJlc291cmNlc+WGheeahOi3r+W+hOWNs+WPr1xuICogMi4g5aaC5p6c5Yqg6L296Lev5b6E5LulYWI65byA5aS077yM5YiZ5Lya5Yqg6L295a+55bqUYnVuZGxl5YaF55qE6LWE5rqQ44CC5L6L77yaYWI6YnVuZGxlQS94eHgvYeihqOekumJ1bmRsZeWQjeS4umJ1bmRsZUHvvIzotYTmupDot6/lvoTkuLp4eHgvYVxuICogXG4gKiDlvJXnlKjorqHmlbDnrqHnkIbvvJpcbiAqIDEuIOWwvemHj+S9v+eUqOatpOexu+eahOaOpeWPo+WKoOi9veaJgOaciei1hOa6kOOAgWluc3RhbnRpYXRl6IqC54K55a6e5L6L77yM5ZCm5YiZ6ZyA6KaB6Ieq6KGM566h55CG5byV55So6K6h5pWwXG4gKiAyLiBSZXMuaW5zdGFudGlhdGXkuI3opoHlr7nliqjmgIHnlJ/miJDnmoToioLngrnkvb/nlKjvvIzlsL3ph4/lj6ppbnN0YW50aWF0ZSBwcmVmYWLkuIrpooTorr7lpb3nmoToioLngrnvvIzlkKbliJnmnInlj6/og73kvJrlr7zoh7TlvJXnlKjorqHmlbDnmoTnrqHnkIblh7rplJlcbiAqIDMuIOiwg+eUqGxvYWTmjqXlj6Pml7blpoLpnIDkvKDlhaVyZWxlYXNl5Y+C5pWw77yM5YiZ5ZCM5LiA6LWE5rqQ5Zyo5YWo5bGA6LCD55SobG9hZOaXtnJlbGVhc2Xlj4LmlbDlsL3ph4/kv53mjIHkuIDoh7TvvIzlkKbliJnlj6/og73kuI3nrKblkIjpooTmnJ9cbiAqIDQuIOivt+S9v+eUqFJlc1NwaW5l44CBUmVzU3ByaXRl57uE5Lu25Y675Yqo5oCB5Yqg6L29c3BpbmXjgIHlm77niYfotYTmupDvvIzlkKbliJnpnIDopoHoh6rooYznrqHnkIbov5nkupvotYTmupDnmoTlvJXnlKjorqHmlbBcbiAqL1xuY2xhc3MgUmVzTG9hZGVyIHtcbiAgICAvKiog6IqC54K55LiO5YW25YWz6IGU55qEcHJlZmFi6Lev5b6EICovXG4gICAgcHJpdmF0ZSBfbm9kZVBhdGg6IE1hcDxjYy5Ob2RlLCBzdHJpbmc+ID0gbmV3IE1hcCgpO1xuICAgIC8qKiBwcmVmYWLotYTmupDkuI7ot6/lvoQgKi9cbiAgICBwcml2YXRlIF9wcmVmYWJQYXRoOiBNYXA8Y2MuUHJlZmFiLCBzdHJpbmc+ID0gbmV3IE1hcCgpO1xuXG4gICAgcHJpdmF0ZSBfcHJlZmFiQ2FjaGU6IE1hcDxzdHJpbmcsIFByZWZhYkNhY2hlRGF0YT4gPSBuZXcgTWFwKCk7XG4gICAgcHJpdmF0ZSBfc3ByaXRlRnJhbWVDYWNoZTogTWFwPHN0cmluZywgQ2FjaGVEYXRhPiA9IG5ldyBNYXAoKTtcbiAgICBwcml2YXRlIF9zcHJpdGVBdGxhc0NhY2hlOiBNYXA8c3RyaW5nLCBDYWNoZURhdGE+ID0gbmV3IE1hcCgpO1xuICAgIHByaXZhdGUgX3NrZWxldG9uRGF0YUNhY2hlOiBNYXA8c3RyaW5nLCBDYWNoZURhdGE+ID0gbmV3IE1hcCgpO1xuICAgIHByaXZhdGUgX290aGVyQ2FjaGU6IE1hcDxzdHJpbmcsIGNjLkFzc2V0PiA9IG5ldyBNYXAoKTtcblxuICAgIC8qKiDotYTmupDph4rmlL7nmoTpl7TpmpTml7bpl7TvvIjnp5LvvInvvIzotYTmupDotoXov4fmraTpl7TpmpTmnKrooqtsb2Fk5omN5Y+v6YeK5pS+ICovXG4gICAgcHVibGljIHJlbGVhc2VTZWM6IG51bWJlciA9IDU7XG4gICAgLyoqIOmihOWkh+mHiuaUviAqL1xuICAgIHByaXZhdGUgd2lsbFJlbGVhc2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG4gICAgLyoqXG4gICAgICog6LWE5rqQ566h55CG5Lit55qE5YWo5bGAVXJsXG4gICAgICogQHBhcmFtIGJ1bmRsZSBcbiAgICAgKiBAcGFyYW0gdXJsIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRGdWxsVXJsKGJ1bmRsZTogc3RyaW5nLCB1cmw6IHN0cmluZykge1xuICAgICAgICBsZXQga2V5VXJsID0gYCR7QlVORExFX0NIRUNLfSR7YnVuZGxlfS8ke3VybH1gO1xuICAgICAgICByZXR1cm4ga2V5VXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi1hOa6kOi3r+W+hOino+aekFxuICAgICAqIEBwYXJhbSB1cmwgXG4gICAgICovXG4gICAgcHVibGljIHBhcnNlVXJsKHVybDogc3RyaW5nKTogeyBidW5kbGU/OiBzdHJpbmcsIGxvYWRVcmw6IHN0cmluZyB9IHtcbiAgICAgICAgaWYgKHVybC5zdGFydHNXaXRoKEJVTkRMRV9DSEVDSykpIHtcbiAgICAgICAgICAgIGxldCBsb2FkVXJsID0gdXJsLnN1YnN0cmluZyhCVU5ETEVfQ0hFQ0subGVuZ3RoKTtcbiAgICAgICAgICAgIGxldCBpZHggPSBsb2FkVXJsLmluZGV4T2YoXCIvXCIpO1xuICAgICAgICAgICAgbGV0IGJ1bmRsZSA9IGxvYWRVcmwuc3Vic3RyaW5nKDAsIGlkeCk7XG4gICAgICAgICAgICBsb2FkVXJsID0gbG9hZFVybC5zdWJzdHJpbmcoaWR4ICsgMSk7XG4gICAgICAgICAgICByZXR1cm4geyBidW5kbGU6IGJ1bmRsZSwgbG9hZFVybDogbG9hZFVybCB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgbG9hZFVybDogdXJsIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDpgJrov4foioLngrnmiJbpooTliLbmn6Xmib7lt7LnvJPlrZhwcmVmYWLot6/lvoRcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IFxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0Q2FjaGVQcmVmYWJVcmwodGFyZ2V0OiBjYy5Ob2RlIHwgY2MuUHJlZmFiKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHVybCA9IFwiXCI7XG4gICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBjYy5Ob2RlKSB7XG4gICAgICAgICAgICBsZXQgY3VyID0gdGFyZ2V0O1xuICAgICAgICAgICAgd2hpbGUgKGN1cikge1xuICAgICAgICAgICAgICAgIGlmIChjdXJbXCJfcHJlZmFiXCJdICYmIGN1cltcIl9wcmVmYWJcIl1bXCJyb290XCJdKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHRoaXMuX25vZGVQYXRoLmdldChjdXJbXCJfcHJlZmFiXCJdW1wicm9vdFwiXSkgfHwgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VyID0gY3VyLnBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBjYy5QcmVmYWIpIHtcbiAgICAgICAgICAgIHVybCA9IHRoaXMuX3ByZWZhYlBhdGguZ2V0KHRhcmdldCkgfHwgXCJcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOe8k+WtmOi1hOa6kFxuICAgICAqIEBwYXJhbSB1cmwg6LWE5rqQ6Lev5b6EXG4gICAgICogQHBhcmFtIGFzc2V0IOi1hOa6kFxuICAgICAqIEBwYXJhbSByZWxlYXNlIOi1hOa6kOaYr+WQpumcgOimgemHiuaUvlxuICAgICAqL1xuICAgIHByaXZhdGUgY2FjaGVBc3NldCh1cmw6IHN0cmluZywgYXNzZXQ6IGNjLkFzc2V0LCByZWxlYXNlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICBpZiAoIWFzc2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZ1bmMgPSAobWFwOiBNYXA8c3RyaW5nLCBDYWNoZURhdGE+KSA9PiB7XG4gICAgICAgICAgICBpZiAobWFwLmhhcyh1cmwpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXNzZXQuYWRkUmVmKCk7XG4gICAgICAgICAgICBpZiAoYXNzZXQgaW5zdGFuY2VvZiBjYy5QcmVmYWIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmVmYWJQYXRoLnNldChhc3NldCwgdXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjYWNoZURhdGE6IENhY2hlRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBhc3NldDogYXNzZXQsXG4gICAgICAgICAgICAgICAgcmVsZWFzZTogcmVsZWFzZSxcbiAgICAgICAgICAgICAgICBsYXN0TG9hZFRpbWU6IERhdGUubm93KCkgLyAxMDAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbWFwLnNldCh1cmwsIGNhY2hlRGF0YSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGFzc2V0IGluc3RhbmNlb2YgY2MuUHJlZmFiKSB7XG4gICAgICAgICAgICBmdW5jKHRoaXMuX3ByZWZhYkNhY2hlKTtcbiAgICAgICAgfSBlbHNlIGlmIChhc3NldCBpbnN0YW5jZW9mIGNjLlNwcml0ZUZyYW1lKSB7XG4gICAgICAgICAgICBmdW5jKHRoaXMuX3Nwcml0ZUZyYW1lQ2FjaGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGFzc2V0IGluc3RhbmNlb2YgY2MuU3ByaXRlQXRsYXMpIHtcbiAgICAgICAgICAgIGZ1bmModGhpcy5fc3ByaXRlQXRsYXNDYWNoZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXNzZXQgaW5zdGFuY2VvZiBzcC5Ta2VsZXRvbkRhdGEpIHtcbiAgICAgICAgICAgIGZ1bmModGhpcy5fc2tlbGV0b25EYXRhQ2FjaGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuX290aGVyQ2FjaGUuaGFzKHVybCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhc3NldC5hZGRSZWYoKTtcbiAgICAgICAgICAgIHRoaXMuX290aGVyQ2FjaGUuc2V0KHVybCwgYXNzZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W57yT5a2Y6LWE5rqQ44CC6YCa5bi45LiN5bqU55u05o6l6LCD55So5q2k5o6l5Y+j77yM6Zmk6Z2e6LCD55So5YmN6IO956Gu5L+d6LWE5rqQ5bey5Yqg6L295bm25LiU6IO96Ieq6KGM566h55CG5byV55So6K6h5pWwXG4gICAgICogQHBhcmFtIHVybCDotYTmupDot6/lvoRcbiAgICAgKiBAcGFyYW0gdHlwZSDotYTmupDnsbvlnotcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0UmVzPFQgZXh0ZW5kcyBjYy5Bc3NldD4odXJsOiBzdHJpbmcsIHR5cGU6IHR5cGVvZiBjYy5Bc3NldCk6IFQgfCBudWxsIHtcbiAgICAgICAgbGV0IGFzc2V0OiB1bmtub3duID0gbnVsbDtcbiAgICAgICAgbGV0IGZ1bmMgPSAobWFwOiBNYXA8c3RyaW5nLCBDYWNoZURhdGE+KSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IG1hcC5nZXQodXJsKTtcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgYXNzZXQgPSBkYXRhLmFzc2V0O1xuICAgICAgICAgICAgICAgIGRhdGEubGFzdExvYWRUaW1lID0gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHR5cGUgPT09IGNjLlByZWZhYikge1xuICAgICAgICAgICAgZnVuYyh0aGlzLl9wcmVmYWJDYWNoZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gY2MuU3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgIGZ1bmModGhpcy5fc3ByaXRlRnJhbWVDYWNoZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gY2MuU3ByaXRlQXRsYXMpIHtcbiAgICAgICAgICAgIGZ1bmModGhpcy5fc3ByaXRlQXRsYXNDYWNoZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gc3AuU2tlbGV0b25EYXRhKSB7XG4gICAgICAgICAgICBmdW5jKHRoaXMuX3NrZWxldG9uRGF0YUNhY2hlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFzc2V0ID0gdGhpcy5fb3RoZXJDYWNoZS5nZXQodXJsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhc3NldCBhcyBUO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDYWNoZURhdGEodXJsOiBzdHJpbmcsIHR5cGU6IHR5cGVvZiBjYy5Bc3NldCkge1xuICAgICAgICBsZXQgY2FjaGU6IENhY2hlRGF0YSA9IG51bGw7XG4gICAgICAgIGlmICh0eXBlID09PSBjYy5QcmVmYWIpIHtcbiAgICAgICAgICAgIGNhY2hlID0gdGhpcy5fcHJlZmFiQ2FjaGUuZ2V0KHVybCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gY2MuU3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgIGNhY2hlID0gdGhpcy5fc3ByaXRlRnJhbWVDYWNoZS5nZXQodXJsKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBjYy5TcHJpdGVBdGxhcykge1xuICAgICAgICAgICAgY2FjaGUgPSB0aGlzLl9zcHJpdGVBdGxhc0NhY2hlLmdldCh1cmwpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IHNwLlNrZWxldG9uRGF0YSkge1xuICAgICAgICAgICAgY2FjaGUgPSB0aGlzLl9za2VsZXRvbkRhdGFDYWNoZS5nZXQodXJsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FjaGU7XG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqIOWKoOi9vei1hOa6kOWMhVxuICAgICAqIEBwYXJhbSBuYW1lT3JVcmwg6LWE5rqQ5Zyw5Z2AXG4gICAgICogQHBhcmFtIGNvbXBsZXRlICDlrozmiJDkuovku7ZcbiAgICAgKiBAcGFyYW0gdiAgICAgICAgIOi1hOa6kE1ENeeJiOacrOWPt1xuICAgICAqIEBleGFtcGxlXG4gICAgICAgIGxldCBzZXJ2ZXJVcmwgPSBcImh0dHA6Ly8xOTIuMTY4LjEuODo4MDgwL1wiOyAgICAgICAgIC8vIOacjeWKoeWZqOWcsOWdgFxuICAgICAgICBsZXQgbWQ1ID0gXCI4ZTVjMFwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb2NvcyBDcmVhdG9yIOaehOW7uuWQjueahE1ENeWtl+esplxuICAgICAgICBhd2FpdCBjMmYucmVzLmxvYWRCdW5kbGUoc2VydmVyVXJsLG1kNSk7XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGxvYWRCdW5kbGUobmFtZU9yVXJsOiBzdHJpbmcsIHY/OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGNjLkFzc2V0TWFuYWdlci5CdW5kbGU+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKG5hbWVPclVybCwgeyB2ZXJzaW9uOiB2IH0sIChlcnIsIGJ1bmRsZTogY2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtSZXMubG9hZEJ1bmRsZV0gZXJyb3I6ICR7ZXJyfWApO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKGJ1bmRsZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqIOW8guatpeWKoOi9veWMhSAqL1xuICAgIHB1YmxpYyBsb2FkQnVuZGxlQXN5bmMobmFtZU9yVXJsOiBzdHJpbmcsIGVuZENiOiBGdW5jdGlvbiwgdj86IHN0cmluZykge1xuICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShuYW1lT3JVcmwsIHsgdmVyc2lvbjogdiB9LCAoZXJyLCBidW5kbGU6IGNjLkFzc2V0TWFuYWdlci5CdW5kbGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihgW1Jlcy5sb2FkQnVuZGxlXSBlcnJvcjogJHtlcnJ9YCk7XG4gICAgICAgICAgICAgICAgZW5kQ2IgJiYgZW5kQ2IobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbmRDYiAmJiBlbmRDYihidW5kbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliqDovb3ov5znqIvotYTmupBcbiAgICAgKiBAcGFyYW0gdXJsICAgICAgICAgICDotYTmupDlnLDlnYBcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAgICAgICDotYTmupDlj4LmlbDvvIzkvovvvJp7IGV4dDogXCIucG5nXCIgfVxuICAgICAqIEBwYXJhbSBvbkNvbXBsZXRlICAgIOWKoOi9veWujOaIkOWbnuiwg1xuICAgICAqIEBleGFtcGxlXG4gICAgICAgIGxldCBvcHQ6IElSZW1vdGVPcHRpb25zID0geyBleHQ6IFwiLnBuZ1wiIH07XG4gICAgICAgIGxldCBvbkNvbXBsZXRlID0gKGVycjogRXJyb3IgfCBudWxsLCBkYXRhOiBJbWFnZUFzc2V0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRleHR1cmUyRCgpO1xuICAgICAgICAgICAgdGV4dHVyZS5pbWFnZSA9IGRhdGE7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IFNwcml0ZUZyYW1lKCk7XG4gICAgICAgICAgICBzcHJpdGVGcmFtZS50ZXh0dXJlID0gdGV4dHVyZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IHNwcml0ZSA9IHRoaXMuc3ByaXRlLmFkZENvbXBvbmVudChTcHJpdGUpO1xuICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgIH1cbiAgICAgICAgYzJmLnJlcy5sb2FkUmVtb3RlPEltYWdlQXNzZXQ+KHRoaXMudXJsLCBvcHQsIG9uQ29tcGxldGUpO1xuICAgICovXG4gICAgbG9hZFJlbW90ZTxUIGV4dGVuZHMgY2MuQXNzZXQ+KHVybDogc3RyaW5nLCBvcHRpb25zOiBJUmVtb3RlT3B0aW9ucyB8IG51bGwsIG9uQ29tcGxldGU/OiBDb21wbGV0ZUNhbGxiYWNrPFQ+IHwgbnVsbCk6IHZvaWQ7XG4gICAgbG9hZFJlbW90ZTxUIGV4dGVuZHMgY2MuQXNzZXQ+KHVybDogc3RyaW5nLCBvbkNvbXBsZXRlPzogQ29tcGxldGVDYWxsYmFjazxUPiB8IG51bGwpOiB2b2lkO1xuICAgIGxvYWRSZW1vdGU8VCBleHRlbmRzIGNjLkFzc2V0Pih1cmw6IHN0cmluZywgLi4uYXJnczogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihgW1Jlcy5sb2FkXSB1cmwgaXMgZW1wdHlgKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9wdGlvbnM6IElSZW1vdGVPcHRpb25zIHwgbnVsbCA9IG51bGw7XG4gICAgICAgIGxldCBvbkNvbXBsZXRlOiBDb21wbGV0ZUNhbGxiYWNrPFQ+IHwgbnVsbCA9IG51bGw7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PSAyKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gYXJnc1swXTtcbiAgICAgICAgICAgIG9uQ29tcGxldGUgPSBhcmdzWzFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb25Db21wbGV0ZSA9IGFyZ3NbMF07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYXNzZXQ6IFQgPSB0aGlzLmdldFJlcyh1cmwsIHVuZGVmaW5lZCk7XG4gICAgICAgIGlmIChhc3NldCkge1xuICAgICAgICAgICAgb25Db21wbGV0ZSAmJiBvbkNvbXBsZXRlKG51bGwsIGFzc2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBwYXJzZURhdGEgPSB0aGlzLnBhcnNlVXJsKHVybCk7XG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZTxUPihwYXJzZURhdGEubG9hZFVybCwgb3B0aW9ucywgKGVyciwgZGF0YTogVCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtSZXMubG9hZF0gbG9hZCBlcnJvcjogJHtlcnJ9YCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZUFzc2V0KHVybCwgZGF0YSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGUgJiYgb25Db21wbGV0ZShlcnIsIGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliqDovb3kuIDkuKrotYTmupBcbiAgICAgKiBAcGFyYW0gYnVuZGxlTmFtZSAgICDov5znqIvljIXlkI1cbiAgICAgKiBAcGFyYW0gcGF0aHMgICAgICAgICDotYTmupDot6/lvoRcbiAgICAgKiBAcGFyYW0gdHlwZSAgICAgICAgICDotYTmupDnsbvlnotcbiAgICAgKiBAcGFyYW0gb25Qcm9ncmVzcyAgICDliqDovb3ov5vluqblm57osINcbiAgICAgKiBAcGFyYW0gb25Db21wbGV0ZSAgICDliqDovb3lrozmiJDlm57osINcbiAgICAgKiBAZXhhbXBsZVxuICAgICAgICBjMmYucmVzLmxvYWQoXCJzcGluZV9wYXRoXCIsIHNwLlNrZWxldG9uRGF0YSwgKGVycjogRXJyb3IgfCBudWxsLCBzZDogc3AuU2tlbGV0b25EYXRhKSA9PiB7XG4gICAgICAgIH0pO1xuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkPFQgZXh0ZW5kcyBjYy5Bc3NldD4oYnVuZGxlTmFtZTogc3RyaW5nLCBwYXRoczogc3RyaW5nIHwgc3RyaW5nW10sIHR5cGU6IEFzc2V0VHlwZTxUPiB8IG51bGwsIG9uUHJvZ3Jlc3M6IFByb2dyZXNzQ2FsbGJhY2sgfCBudWxsLCBvbkNvbXBsZXRlOiBDb21wbGV0ZUNhbGxiYWNrPFQ+IHwgbnVsbCk6IHZvaWQ7XG4gICAgcHVibGljIGxvYWQ8VCBleHRlbmRzIGNjLkFzc2V0PihidW5kbGVOYW1lOiBzdHJpbmcsIHBhdGhzOiBzdHJpbmcgfCBzdHJpbmdbXSwgb25Qcm9ncmVzczogUHJvZ3Jlc3NDYWxsYmFjayB8IG51bGwsIG9uQ29tcGxldGU6IENvbXBsZXRlQ2FsbGJhY2s8VD4gfCBudWxsKTogdm9pZDtcbiAgICBwdWJsaWMgbG9hZDxUIGV4dGVuZHMgY2MuQXNzZXQ+KGJ1bmRsZU5hbWU6IHN0cmluZywgcGF0aHM6IHN0cmluZyB8IHN0cmluZ1tdLCBvbkNvbXBsZXRlPzogQ29tcGxldGVDYWxsYmFjazxUPiB8IG51bGwpOiB2b2lkO1xuICAgIHB1YmxpYyBsb2FkPFQgZXh0ZW5kcyBjYy5Bc3NldD4oYnVuZGxlTmFtZTogc3RyaW5nLCBwYXRoczogc3RyaW5nIHwgc3RyaW5nW10sIHR5cGU6IEFzc2V0VHlwZTxUPiB8IG51bGwsIG9uQ29tcGxldGU/OiBDb21wbGV0ZUNhbGxiYWNrPFQ+IHwgbnVsbCk6IHZvaWQ7XG4gICAgcHVibGljIGxvYWQ8VCBleHRlbmRzIGNjLkFzc2V0PihwYXRoczogc3RyaW5nIHwgc3RyaW5nW10sIHR5cGU6IEFzc2V0VHlwZTxUPiB8IG51bGwsIG9uUHJvZ3Jlc3M6IFByb2dyZXNzQ2FsbGJhY2sgfCBudWxsLCBvbkNvbXBsZXRlOiBDb21wbGV0ZUNhbGxiYWNrPFQ+IHwgbnVsbCk6IHZvaWQ7XG4gICAgcHVibGljIGxvYWQ8VCBleHRlbmRzIGNjLkFzc2V0PihwYXRoczogc3RyaW5nIHwgc3RyaW5nW10sIG9uUHJvZ3Jlc3M6IFByb2dyZXNzQ2FsbGJhY2sgfCBudWxsLCBvbkNvbXBsZXRlOiBDb21wbGV0ZUNhbGxiYWNrPFQ+IHwgbnVsbCk6IHZvaWQ7XG4gICAgcHVibGljIGxvYWQ8VCBleHRlbmRzIGNjLkFzc2V0PihwYXRoczogc3RyaW5nIHwgc3RyaW5nW10sIG9uQ29tcGxldGU/OiBDb21wbGV0ZUNhbGxiYWNrPFQ+IHwgbnVsbCk6IHZvaWQ7XG4gICAgcHVibGljIGxvYWQ8VCBleHRlbmRzIGNjLkFzc2V0PihwYXRoczogc3RyaW5nIHwgc3RyaW5nW10sIHR5cGU6IEFzc2V0VHlwZTxUPiB8IG51bGwsIG9uQ29tcGxldGU/OiBDb21wbGV0ZUNhbGxiYWNrPFQ+IHwgbnVsbCk6IHZvaWQ7XG4gICAgcHVibGljIGxvYWQ8VCBleHRlbmRzIGNjLkFzc2V0PihcbiAgICAgICAgYnVuZGxlTmFtZTogc3RyaW5nLFxuICAgICAgICBwYXRocz86IHN0cmluZyB8IHN0cmluZ1tdIHwgQXNzZXRUeXBlPFQ+IHwgUHJvZ3Jlc3NDYWxsYmFjayB8IENvbXBsZXRlQ2FsbGJhY2sgfCBudWxsLFxuICAgICAgICB0eXBlPzogQXNzZXRUeXBlPFQ+IHwgUHJvZ3Jlc3NDYWxsYmFjayB8IENvbXBsZXRlQ2FsbGJhY2sgfCBudWxsLFxuICAgICAgICBvblByb2dyZXNzPzogUHJvZ3Jlc3NDYWxsYmFjayB8IENvbXBsZXRlQ2FsbGJhY2sgfCBudWxsLFxuICAgICAgICBvbkNvbXBsZXRlPzogQ29tcGxldGVDYWxsYmFjayB8IG51bGwsXG4gICAgKSB7XG4gICAgICAgIGxldCBhcmdzOiBJTG9hZFJlc0FyZ3M8VD4gfCBudWxsID0gbnVsbDtcbiAgICAgICAgaWYgKHR5cGVvZiBwYXRocyA9PT0gXCJzdHJpbmdcIiB8fCBwYXRocyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBhcmdzID0gdGhpcy5wYXJzZUxvYWRSZXNBcmdzKHBhdGhzLCB0eXBlLCBvblByb2dyZXNzLCBvbkNvbXBsZXRlKTtcbiAgICAgICAgICAgIGFyZ3MuYnVuZGxlID0gYnVuZGxlTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFyZ3MgPSB0aGlzLnBhcnNlTG9hZFJlc0FyZ3MoYnVuZGxlTmFtZSwgcGF0aHMsIHR5cGUsIG9uUHJvZ3Jlc3MpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZEJ5QXJncyhhcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliqDovb3mlofku7blpLnkuK3nmoTotYTmupBcbiAgICAgKiBAcGFyYW0gYnVuZGxlTmFtZSAgICDov5znqIvljIXlkI1cbiAgICAgKiBAcGFyYW0gZGlyICAgICAgICAgICDmlofku7blpLnlkI1cbiAgICAgKiBAcGFyYW0gdHlwZSAgICAgICAgICDotYTmupDnsbvlnotcbiAgICAgKiBAcGFyYW0gb25Qcm9ncmVzcyAgICDliqDovb3ov5vluqblm57osINcbiAgICAgKiBAcGFyYW0gb25Db21wbGV0ZSAgICDliqDovb3lrozmiJDlm57osINcbiAgICAgKiBAZXhhbXBsZVxuICAgICAgICAvLyDliqDovb3ov5vluqbkuovku7ZcbiAgICAgICAgbGV0IG9uUHJvZ3Jlc3NDYWxsYmFjayA9IChmaW5pc2hlZDogbnVtYmVyLCB0b3RhbDogbnVtYmVyLCBpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6LWE5rqQ5Yqg6L296L+b5bqmXCIsIGZpbmlzaGVkLCB0b3RhbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDliqDovb3lrozmiJDkuovku7ZcbiAgICAgICAgbGV0IG9uQ29tcGxldGVDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6LWE5rqQ5Yqg6L295a6M5oiQXCIpO1xuICAgICAgICB9XG4gICAgICAgIGMyZi5yZXMubG9hZERpcihcImdhbWVcIiwgb25Qcm9ncmVzc0NhbGxiYWNrLCBvbkNvbXBsZXRlQ2FsbGJhY2spO1xuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkRGlyPFQgZXh0ZW5kcyBjYy5Bc3NldD4oYnVuZGxlTmFtZTogc3RyaW5nLCBkaXI6IHN0cmluZywgdHlwZTogQXNzZXRUeXBlPFQ+IHwgbnVsbCwgb25Qcm9ncmVzczogUHJvZ3Jlc3NDYWxsYmFjayB8IG51bGwsIG9uQ29tcGxldGU6IENvbXBsZXRlQ2FsbGJhY2s8VFtdPiB8IG51bGwpOiB2b2lkO1xuICAgIHB1YmxpYyBsb2FkRGlyPFQgZXh0ZW5kcyBjYy5Bc3NldD4oYnVuZGxlTmFtZTogc3RyaW5nLCBkaXI6IHN0cmluZywgb25Qcm9ncmVzczogUHJvZ3Jlc3NDYWxsYmFjayB8IG51bGwsIG9uQ29tcGxldGU6IENvbXBsZXRlQ2FsbGJhY2s8VFtdPiB8IG51bGwpOiB2b2lkO1xuICAgIHB1YmxpYyBsb2FkRGlyPFQgZXh0ZW5kcyBjYy5Bc3NldD4oYnVuZGxlTmFtZTogc3RyaW5nLCBkaXI6IHN0cmluZywgb25Db21wbGV0ZT86IENvbXBsZXRlQ2FsbGJhY2s8VFtdPiB8IG51bGwpOiB2b2lkO1xuICAgIHB1YmxpYyBsb2FkRGlyPFQgZXh0ZW5kcyBjYy5Bc3NldD4oYnVuZGxlTmFtZTogc3RyaW5nLCBkaXI6IHN0cmluZywgdHlwZTogQXNzZXRUeXBlPFQ+IHwgbnVsbCwgb25Db21wbGV0ZT86IENvbXBsZXRlQ2FsbGJhY2s8VFtdPiB8IG51bGwpOiB2b2lkO1xuICAgIHB1YmxpYyBsb2FkRGlyPFQgZXh0ZW5kcyBjYy5Bc3NldD4oZGlyOiBzdHJpbmcsIHR5cGU6IEFzc2V0VHlwZTxUPiB8IG51bGwsIG9uUHJvZ3Jlc3M6IFByb2dyZXNzQ2FsbGJhY2sgfCBudWxsLCBvbkNvbXBsZXRlOiBDb21wbGV0ZUNhbGxiYWNrPFRbXT4gfCBudWxsKTogdm9pZDtcbiAgICBwdWJsaWMgbG9hZERpcjxUIGV4dGVuZHMgY2MuQXNzZXQ+KGRpcjogc3RyaW5nLCBvblByb2dyZXNzOiBQcm9ncmVzc0NhbGxiYWNrIHwgbnVsbCwgb25Db21wbGV0ZTogQ29tcGxldGVDYWxsYmFjazxUW10+IHwgbnVsbCk6IHZvaWQ7XG4gICAgcHVibGljIGxvYWREaXI8VCBleHRlbmRzIGNjLkFzc2V0PihkaXI6IHN0cmluZywgb25Db21wbGV0ZT86IENvbXBsZXRlQ2FsbGJhY2s8VFtdPiB8IG51bGwpOiB2b2lkO1xuICAgIHB1YmxpYyBsb2FkRGlyPFQgZXh0ZW5kcyBjYy5Bc3NldD4oZGlyOiBzdHJpbmcsIHR5cGU6IEFzc2V0VHlwZTxUPiB8IG51bGwsIG9uQ29tcGxldGU/OiBDb21wbGV0ZUNhbGxiYWNrPFRbXT4gfCBudWxsKTogdm9pZDtcbiAgICBwdWJsaWMgbG9hZERpcjxUIGV4dGVuZHMgY2MuQXNzZXQ+KFxuICAgICAgICBidW5kbGVOYW1lOiBzdHJpbmcsXG4gICAgICAgIGRpcj86IHN0cmluZyB8IEFzc2V0VHlwZTxUPiB8IFByb2dyZXNzQ2FsbGJhY2sgfCBDb21wbGV0ZUNhbGxiYWNrIHwgbnVsbCxcbiAgICAgICAgdHlwZT86IEFzc2V0VHlwZTxUPiB8IFByb2dyZXNzQ2FsbGJhY2sgfCBDb21wbGV0ZUNhbGxiYWNrIHwgbnVsbCxcbiAgICAgICAgb25Qcm9ncmVzcz86IFByb2dyZXNzQ2FsbGJhY2sgfCBDb21wbGV0ZUNhbGxiYWNrIHwgbnVsbCxcbiAgICAgICAgb25Db21wbGV0ZT86IENvbXBsZXRlQ2FsbGJhY2sgfCBudWxsLFxuICAgICkge1xuICAgICAgICBsZXQgYXJnczogSUxvYWRSZXNBcmdzPFQ+IHwgbnVsbCA9IG51bGw7XG4gICAgICAgIGlmICh0eXBlb2YgZGlyID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBhcmdzID0gdGhpcy5wYXJzZUxvYWRSZXNBcmdzKGRpciwgdHlwZSwgb25Qcm9ncmVzcywgb25Db21wbGV0ZSk7XG4gICAgICAgICAgICBhcmdzLmJ1bmRsZSA9IGJ1bmRsZU5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhcmdzID0gdGhpcy5wYXJzZUxvYWRSZXNBcmdzKGJ1bmRsZU5hbWUsIGRpciwgdHlwZSwgb25Qcm9ncmVzcyk7XG4gICAgICAgIH1cbiAgICAgICAgYXJncy5kaXIgPSBhcmdzLnBhdGhzIGFzIHN0cmluZztcbiAgICAgICAgdGhpcy5sb2FkQnlBcmdzKGFyZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWKoOi9veWNleS4qui1hOa6kFxuICAgICAqIEBwYXJhbSB1cmwg6LWE5rqQ6Lev5b6EXG4gICAgICogQHBhcmFtIHR5cGUg6LWE5rqQ57G75Z6LXG4gICAgICogQHBhcmFtIHJlbGVhc2Ug6LWE5rqQ5piv5ZCm6ZyA6KaB6YeK5pS+XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGxvYWRPbmU8VCBleHRlbmRzIGNjLkFzc2V0Pih1cmw6IHN0cmluZywgdHlwZTogdHlwZW9mIGNjLkFzc2V0LCByZWxlYXNlOiBib29sZWFuID0gdHJ1ZSk6IFByb21pc2U8VCB8IG51bGw+IHtcbiAgICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKGBbUmVzLmxvYWRdIHVybCBpcyBlbXB0eWApO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFzc2V0OiBUID0gdGhpcy5nZXRSZXModXJsLCB0eXBlKTtcbiAgICAgICAgaWYgKGFzc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gYXNzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnNlRGF0YSA9IHRoaXMucGFyc2VVcmwodXJsKTtcbiAgICAgICAgaWYgKHBhcnNlRGF0YS5idW5kbGUgJiYgIWNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUocGFyc2VEYXRhLmJ1bmRsZSkpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZEJ1bmRsZShwYXJzZURhdGEuYnVuZGxlKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYnVuZGxlOiBjYy5Bc3NldE1hbmFnZXIuQnVuZGxlID0gcGFyc2VEYXRhLmJ1bmRsZSA/IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUocGFyc2VEYXRhLmJ1bmRsZSkgOiBjYy5yZXNvdXJjZXM7XG4gICAgICAgIGlmICghYnVuZGxlKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihgW1Jlcy5sb2FkXSBjYW50IGZpbmQgYnVuZGxlOiAke3VybH1gKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy/lpJror63oqIDpgILphY1cbiAgICAgICAgbGV0IGxnSW5mbyA9IGF3YWl0IHRoaXMuZ2V0TEdSZXNJbmZvKHBhcnNlRGF0YS5sb2FkVXJsLCBidW5kbGUpO1xuICAgICAgICBpZiAobGdJbmZvKSB7XG4gICAgICAgICAgICBwYXJzZURhdGEubG9hZFVybCA9IGxnSW5mby5sZ1VybDtcbiAgICAgICAgICAgIGJ1bmRsZSA9IGxnSW5mby5sZ0J1bmRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBleGlzdFJlczogYW55ID0gYnVuZGxlLmdldChwYXJzZURhdGEubG9hZFVybCwgdHlwZSk7XG4gICAgICAgIGlmIChleGlzdFJlcykge1xuICAgICAgICAgICAgdGhpcy5jYWNoZUFzc2V0KHVybCwgZXhpc3RSZXMsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIGV4aXN0UmVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXNzZXQgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgYnVuZGxlLmxvYWQocGFyc2VEYXRhLmxvYWRVcmwsIHR5cGUsIChlcnJvcjogRXJyb3IsIHJlc291cmNlOiBUKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtSZXMubG9hZF0gbG9hZCBlcnJvcjogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlQXNzZXQodXJsLCByZXNvdXJjZSwgcmVsZWFzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFzc2V0O1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZFJlc0FzeW5jPFQgZXh0ZW5kcyBjYy5Bc3NldD4odXJsRnVsbDogc3RyaW5nLCB0eXBlOiB0eXBlb2YgY2MuQXNzZXQsIHJlbGVhc2U6IGJvb2xlYW4sIGJ1bmRsZTogY2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSwgbG9hZFVybDogc3RyaW5nLCBlbmRDYjogRnVuY3Rpb24pIHtcbiAgICAgICAgbGV0IGV4aXN0UmVzOiBhbnkgPSBidW5kbGUuZ2V0KGxvYWRVcmwsIHR5cGUpO1xuICAgICAgICBpZiAoZXhpc3RSZXMpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVBc3NldCh1cmxGdWxsLCBleGlzdFJlcywgdHJ1ZSk7XG4gICAgICAgICAgICBlbmRDYiAmJiBlbmRDYihleGlzdFJlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidW5kbGUubG9hZChsb2FkVXJsLCB0eXBlLCAoZXJyb3I6IEVycm9yLCByZXM6IFQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtSZXMubG9hZF0gbG9hZCBlcnJvcjogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgICAgICAgICAgZW5kQ2IgJiYgZW5kQ2IobnVsbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZUFzc2V0KHVybEZ1bGwsIHJlcywgcmVsZWFzZSk7XG4gICAgICAgICAgICAgICAgICAgIGVuZENiICYmIGVuZENiKHJlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFJlYWxCdW5kbGVSZXMoYnVuZGxlTmFtZTogc3RyaW5nLCB1cmxGdWxsOiBzdHJpbmcsIGxvYWRVcmw6IHN0cmluZywgZW5kQ2I6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGxldCBidW5kbGU6IGNjLkFzc2V0TWFuYWdlci5CdW5kbGUgPSBidW5kbGVOYW1lID8gY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZShidW5kbGVOYW1lKSA6IGNjLnJlc291cmNlcztcbiAgICAgICAgaWYgKCFidW5kbGUpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKGBbUmVzLmxvYWRdIGNhbnQgZmluZCBidW5kbGU6ICR7dXJsRnVsbH1gKTtcbiAgICAgICAgICAgIGVuZENiICYmIGVuZENiKG51bGwsIG51bGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy/lpJror63oqIDpgILphY1cbiAgICAgICAgICAgIHRoaXMuZ2V0TEdSZXNJbmZvQXN5bmMobG9hZFVybCwgYnVuZGxlLCAoaW5mbzogeyBsZ1VybDogc3RyaW5nLCBsZ0J1bmRsZTogY2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kQ2IgJiYgZW5kQ2IoaW5mby5sZ0J1bmRsZSwgaW5mby5sZ1VybCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kQ2IgJiYgZW5kQ2IoYnVuZGxlLCBsb2FkVXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5byC5q2l5Yqg6L295Y2V5Liq6LWE5rqQXG4gICAgICogQHBhcmFtIHVybCDotYTmupDot6/lvoRcbiAgICAgKiBAcGFyYW0gdHlwZSDotYTmupDnsbvlnotcbiAgICAgKiBAcGFyYW0gcmVsZWFzZSDotYTmupDmmK/lkKbpnIDopoHph4rmlL5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZE9uZUFzeW5jPFQgZXh0ZW5kcyBjYy5Bc3NldD4odXJsOiBzdHJpbmcsIHR5cGU6IHR5cGVvZiBjYy5Bc3NldCwgcmVsZWFzZTogYm9vbGVhbiA9IHRydWUsIGVuZENiOiBGdW5jdGlvbiA9IG51bGwpIHtcbiAgICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKGBbUmVzLmxvYWRdIHVybCBpcyBlbXB0eWApO1xuICAgICAgICAgICAgZW5kQ2IgJiYgZW5kQ2IobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFzc2V0OiBUID0gdGhpcy5nZXRSZXModXJsLCB0eXBlKTtcbiAgICAgICAgaWYgKGFzc2V0KSB7XG4gICAgICAgICAgICBlbmRDYiAmJiBlbmRDYihhc3NldCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnNlRGF0YSA9IHRoaXMucGFyc2VVcmwodXJsKTtcbiAgICAgICAgdGhpcy5nZXRSZWFsQnVuZGxlUmVzKHBhcnNlRGF0YS5idW5kbGUsIHVybCwgcGFyc2VEYXRhLmxvYWRVcmwsIChyZWFsQnVuZGxlOiBjYy5Bc3NldE1hbmFnZXIuQnVuZGxlLCByZWFsVXJsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGlmIChyZWFsQnVuZGxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkUmVzQXN5bmModXJsLCB0eXBlLCByZWxlYXNlLCByZWFsQnVuZGxlLCByZWFsVXJsLCAocmVzOiBUKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVuZENiICYmIGVuZENiKHJlcyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5kQ2IgJiYgZW5kQ2IobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yqg6L295p+Q5Liq5paH5Lu25aS55YaF55qE5p+Q57G76LWE5rqQXG4gICAgICogQHBhcmFtIHVybCDotYTmupDot6/lvoRcbiAgICAgKiBAcGFyYW0gdHlwZSDotYTmupDnsbvlnotcbiAgICAgKiBAcGFyYW0gcmVsZWFzZSDotYTmupDmmK/lkKbpnIDopoHph4rmlL5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgbG9hZE9uZURpcjxUIGV4dGVuZHMgY2MuQXNzZXQ+KHVybDogc3RyaW5nLCB0eXBlOiB0eXBlb2YgY2MuQXNzZXQsIHJlbGVhc2U6IGJvb2xlYW4gPSB0cnVlKTogUHJvbWlzZTxUW10+IHtcbiAgICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKGBbUmVzLmxvYWRdIHVybCBpcyBlbXB0eWApO1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhcnNlRGF0YSA9IHRoaXMucGFyc2VVcmwodXJsKTtcbiAgICAgICAgaWYgKHBhcnNlRGF0YS5idW5kbGUgJiYgIWNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUocGFyc2VEYXRhLmJ1bmRsZSkpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZEJ1bmRsZShwYXJzZURhdGEuYnVuZGxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgYnVuZGxlOiBjYy5Bc3NldE1hbmFnZXIuQnVuZGxlID0gcGFyc2VEYXRhLmJ1bmRsZSA/IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUocGFyc2VEYXRhLmJ1bmRsZSkgOiBjYy5yZXNvdXJjZXM7XG4gICAgICAgICAgICBpZiAoIWJ1bmRsZSkge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbUmVzLmxvYWREaXJdIGNhbnQgZmluZCBidW5kbGU6ICR7dXJsfWApO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoW10pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnVuZGxlLmxvYWREaXIocGFyc2VEYXRhLmxvYWRVcmwsIHR5cGUsIChlcnJvcjogRXJyb3IsIHJlc291cmNlOiBUW10pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtSZXMubG9hZERpcl0gbG9hZCBlcnJvcjogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZm9zID0gYnVuZGxlLmdldERpcldpdGhQYXRoKHVybCwgdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmZvckVhY2goKGFzc2V0LCBpKSA9PiB7IHRoaXMuY2FjaGVBc3NldChpbmZvc1tpXS5wYXRoLCBhc3NldCwgcmVsZWFzZSk7IH0pO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc291cmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqIOWkmuivreiogOaWh+S7tuabv+aNoiAqL1xuICAgIHByaXZhdGUgYXN5bmMgZ2V0TEdSZXNJbmZvKHVybDogc3RyaW5nLCBidW5kbGU6IGNjLkFzc2V0TWFuYWdlci5CdW5kbGUpIHtcbiAgICAgICAgbGV0IGxnSW5mbzogeyBsZ1VybDogc3RyaW5nLCBsZ0J1bmRsZTogY2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSB9ID0gbnVsbDtcbiAgICAgICAgbGV0IGluZm8gPSBidW5kbGUuZ2V0SW5mb1dpdGhQYXRoKHVybCk7XG4gICAgICAgIGlmIChpbmZvKSB7XG4gICAgICAgICAgICBsZXQgbXVsTGdVdWlkID0gYzJmLmxhbmd1YWdlLmdldExHUmVzVXVpZChpbmZvLnV1aWQpO1xuICAgICAgICAgICAgaWYgKG11bExnVXVpZCkge1xuICAgICAgICAgICAgICAgIGxldCBsZ0J1bmRsZTogY2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGV0IGxnQnVuZGxlTmFtZSA9ICdsYW5ndWFnZV8nICsgYzJmLmxhbmd1YWdlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKGNjLmFzc2V0TWFuYWdlci5idW5kbGVzLmhhcyhsZ0J1bmRsZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxnQnVuZGxlID0gY2MuYXNzZXRNYW5hZ2VyLmJ1bmRsZXMuZ2V0KGxnQnVuZGxlTmFtZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGdCdW5kbGUgPSBhd2FpdCB0aGlzLmxvYWRCdW5kbGUobGdCdW5kbGVOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxnQnVuZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsZ1VybCA9IGxnQnVuZGxlLmdldEFzc2V0SW5mbyhtdWxMZ1V1aWQpLnBhdGg7XG4gICAgICAgICAgICAgICAgICAgIGxnSW5mbyA9IHsgbGdVcmwsIGxnQnVuZGxlIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZ0luZm87XG4gICAgfVxuXG4gICAgLyoqIOW8guatpcK35aSa6K+t6KiA5paH5Lu25pu/5o2iICovXG4gICAgcHJpdmF0ZSBnZXRMR1Jlc0luZm9Bc3luYyh1cmw6IHN0cmluZywgYnVuZGxlOiBjYy5Bc3NldE1hbmFnZXIuQnVuZGxlLCBlbmRDYjogRnVuY3Rpb24pIHtcbiAgICAgICAgbGV0IGxnSW5mbzogeyBsZ1VybDogc3RyaW5nLCBsZ0J1bmRsZTogY2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSB9ID0gbnVsbDtcbiAgICAgICAgbGV0IGluZm8gPSBidW5kbGUuZ2V0SW5mb1dpdGhQYXRoKHVybCk7XG4gICAgICAgIGlmICghaW5mbykge1xuICAgICAgICAgICAgZW5kQ2IgJiYgZW5kQ2IobGdJbmZvKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbXVsTGdVdWlkID0gYzJmLmxhbmd1YWdlLmdldExHUmVzVXVpZChpbmZvLnV1aWQpO1xuICAgICAgICBpZiAoIW11bExnVXVpZCkge1xuICAgICAgICAgICAgZW5kQ2IgJiYgZW5kQ2IobGdJbmZvKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGdCdW5kbGU6IGNjLkFzc2V0TWFuYWdlci5CdW5kbGUgPSBudWxsO1xuICAgICAgICBsZXQgbGdCdW5kbGVOYW1lID0gJ2xhbmd1YWdlXycgKyBjMmYubGFuZ3VhZ2UuY3VycmVudDtcbiAgICAgICAgaWYgKGNjLmFzc2V0TWFuYWdlci5idW5kbGVzLmhhcyhsZ0J1bmRsZU5hbWUpKSB7XG4gICAgICAgICAgICBsZ0J1bmRsZSA9IGNjLmFzc2V0TWFuYWdlci5idW5kbGVzLmdldChsZ0J1bmRsZU5hbWUpO1xuICAgICAgICAgICAgaWYgKGxnQnVuZGxlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxnVXJsID0gbGdCdW5kbGUuZ2V0QXNzZXRJbmZvKG11bExnVXVpZCkucGF0aDtcbiAgICAgICAgICAgICAgICBsZ0luZm8gPSB7IGxnVXJsLCBsZ0J1bmRsZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW5kQ2IgJiYgZW5kQ2IobGdJbmZvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9hZEJ1bmRsZUFzeW5jKGxnQnVuZGxlTmFtZSwgKGJ1bmRsZTogY2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChidW5kbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxnVXJsID0gbGdCdW5kbGUuZ2V0QXNzZXRJbmZvKG11bExnVXVpZCkucGF0aDtcbiAgICAgICAgICAgICAgICAgICAgbGdJbmZvID0geyBsZ1VybCwgbGdCdW5kbGUgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZW5kQ2IgJiYgZW5kQ2IobGdJbmZvKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5boioLngrnlrp7kvovvvIzlubblu7rnq4vmlrDoioLngrnkuI5wcmVmYWLotYTmupDnmoTogZTns7tcbiAgICAgKiBAcGFyYW0gb3JpZ2luYWwg55So5LqO5a6e5L6L5YyW6IqC54K555qEcHJlZmFi5oiWbm9kZVxuICAgICAqIEBwYXJhbSByZWxhdGVkIOWmguaenG9yaWdpbmFs5LiN5piv5Yqo5oCB5Yqg6L2955qEcHJlZmFi77yM5YiZ6ZyA5Lyg5YWl5LiOb3JpZ2luYWznm7jlhbPogZTnmoTliqjmgIHliqDovb3nmoRwcmVmYWLmiJZub2Rl77yM5Lul5L6/6LWE5rqQ6YeK5pS+55qE566h55CGXG4gICAgICogQGV4YW1wbGUgXG4gICAgICogLy8gMS5vcmlnaW5hbOS4uuWKqOaAgeWKoOi9veeahHByZWZhYu+8jOaXoOmcgOS8oHJlbGF0ZWTlj4LmlbBcbiAgICAgKiBSZXMuaW5zdGFudGlhdGUob3JpZ2luYWwpXG4gICAgICogXG4gICAgICogLy8gMi5hUHJlZmFi5Li65Yqo5oCB5Yqg6L2955qEcHJlZmFi77yMYU5vZGXkuLphUHJlZmFi55qE5a6e5L6L6IqC54K577yIYU5vZGUgPSBSZXMuaW5zdGFudGlhdGUoYVByZWZhYinvvInvvIxvcmlnaW5hbOS4uuiiq2FQcmVmYWLpnZnmgIHlvJXnlKjnmoRwcmVmYWLvvIzliJnosIPnlKjml7bpnIDopoHnlKjlpoLkuIvmlrnlvI/miY3og73kv53or4HlvJXnlKjlhbPns7vmraPnoa5cbiAgICAgKiBSZXMuaW5zdGFudGlhdGUob3JpZ2luYWwsIGFQcmVmYWIpXG4gICAgICogUmVzLmluc3RhbnRpYXRlKG9yaWdpbmFsLCBhTm9kZSlcbiAgICAgKiBcbiAgICAgKiAvLyAzLmFQcmVmYWLkuLrliqjmgIHliqDovb3nmoRwcmVmYWLvvIxhTm9kZeS4umFQcmVmYWLnmoTlrp7kvovoioLngrnvvIhhTm9kZSA9IFJlcy5pbnN0YW50aWF0ZShhUHJlZmFiKe+8ie+8jG9yaWdpbmFs5Li6YU5vZGXnmoTmn5DkuKrlrZDoioLngrnvvIzliJnlpoLkuIvmlrnlvI/lnYflj6/kv53or4HlvJXnlKjlhbPns7vmraPnoa5cbiAgICAgKiBSZXMuaW5zdGFudGlhdGUob3JpZ2luYWwpXG4gICAgICogUmVzLmluc3RhbnRpYXRlKG9yaWdpbmFsLCBhUHJlZmFiKVxuICAgICAqIFJlcy5pbnN0YW50aWF0ZShvcmlnaW5hbCwgYU5vZGUpXG4gICAgICovXG4gICAgcHVibGljIGluc3RhbnRpYXRlKG9yaWdpbmFsOiBjYy5Ob2RlIHwgY2MuUHJlZmFiLCByZWxhdGVkPzogY2MuTm9kZSB8IGNjLlByZWZhYik6IGNjLk5vZGUge1xuICAgICAgICBpZiAoIW9yaWdpbmFsKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIltSZXMuaW5zdGFudGlhdGVdIG9yaWdpbmFsIGlzIG51bGxcIik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUob3JpZ2luYWwpIGFzIGNjLk5vZGU7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmdldENhY2hlUHJlZmFiVXJsKG9yaWdpbmFsKSB8fCB0aGlzLmdldENhY2hlUHJlZmFiVXJsKHJlbGF0ZWQpO1xuICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICBsZXQgY2FjaGVEYXRhOiBQcmVmYWJDYWNoZURhdGEgPSB0aGlzLl9wcmVmYWJDYWNoZS5nZXQodXJsKTtcbiAgICAgICAgICAgIC8vIHJlbGVhc2XkuLp0cnVl5omN57yT5a2Y5YWz6IGU6IqC54K5XG4gICAgICAgICAgICBpZiAoY2FjaGVEYXRhICYmIGNhY2hlRGF0YS5yZWxlYXNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNhY2hlRGF0YS5ub2RlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVEYXRhLm5vZGVzID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhY2hlRGF0YS5ub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX25vZGVQYXRoLnNldChub2RlLCB1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIC8qKiDlu7bml7bph4rmlL4gKi9cbiAgICBwdWJsaWMgZGVsYXlSZWxlYXNlQWxsKCkge1xuICAgICAgICBpZiAodGhpcy53aWxsUmVsZWFzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud2lsbFJlbGVhc2UgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZUFsbCgpO1xuICAgICAgICAgICAgdGhpcy53aWxsUmVsZWFzZSA9IGZhbHNlO1xuICAgICAgICB9LCAzMDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWwneivlemHiuaUvuaJgOaciee8k+WtmOi1hOa6kFxuICAgICAqIC0g5Y+q6KaB6YG15a6I5pys5paH5Lu255qE6KeE5YiZ5rOo6YeK77yM5q2k5o6l5Y+j5LiN5Lya5a+86Ie05q2j5Zyo6KKr5L2/55So55qE6LWE5rqQ6KKr5byV5pOO6YeK5pS+77yM5Y+v5pS+5b+D5L2/55SoXG4gICAgICovXG4gICAgcHVibGljIHJlbGVhc2VBbGwoKTogdm9pZCB7XG4gICAgICAgIGxldCBub3dTZWMgPSBEYXRlLm5vdygpIC8gMTAwMDtcbiAgICAgICAgLy8gcHJlZmFiXG4gICAgICAgIHRoaXMuX3ByZWZhYkNhY2hlLmZvckVhY2goKGNhY2hlRGF0YSwgdXJsKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlRGF0YS5yZWxlYXNlIHx8IG5vd1NlYyAtIGNhY2hlRGF0YS5sYXN0TG9hZFRpbWUgPCB0aGlzLnJlbGVhc2VTZWMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNhY2hlRGF0YS5ub2RlcykpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gY2FjaGVEYXRhLm5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2FjaGVEYXRhLm5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSAmJiBub2RlLmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25vZGVQYXRoLmRlbGV0ZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVEYXRhLm5vZGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlRGF0YS5ub2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNhY2hlRGF0YS5ub2RlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShjYWNoZURhdGEubm9kZXMpKSB7XG4gICAgICAgICAgICAgICAgY2FjaGVEYXRhLmFzc2V0LmRlY1JlZigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3ByZWZhYlBhdGguZGVsZXRlKGNhY2hlRGF0YS5hc3NldCBhcyBjYy5QcmVmYWIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3ByZWZhYkNhY2hlLmRlbGV0ZSh1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gc3ByaXRlRnJhbWXjgIFzcHJpdGVBdGxhc+OAgXNrZWxldG9uRGF0YVxuICAgICAgICBsZXQgYXJyID0gW3RoaXMuX3Nwcml0ZUZyYW1lQ2FjaGUsIHRoaXMuX3Nwcml0ZUF0bGFzQ2FjaGUsIHRoaXMuX3NrZWxldG9uRGF0YUNhY2hlXTtcbiAgICAgICAgYXJyLmZvckVhY2goKG1hcCkgPT4ge1xuICAgICAgICAgICAgbWFwLmZvckVhY2goKGNhY2hlRGF0YSwgdXJsKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFjYWNoZURhdGEucmVsZWFzZSB8fCBub3dTZWMgLSBjYWNoZURhdGEubGFzdExvYWRUaW1lIDwgdGhpcy5yZWxlYXNlU2VjKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FjaGVEYXRhLmFzc2V0LmRlY1JlZigpO1xuICAgICAgICAgICAgICAgIG1hcC5kZWxldGUodXJsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy9UT0RPOm90aGVyXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+WcmVzb3VyY2Vz5YyF5YaF6LWE5rqQ5omT5YyF5ZCO55qE55yf5a6e6Lev5b6EXG4gICAgICogQHBhcmFtIHVybCByZXNvdXJjZXPkuIvnmoTotYTmupDot6/lvoRcbiAgICAgKiBAcGFyYW0gZXh0IOi1hOa6kOeahOWQjue8gOWQjVxuICAgICAqIEBwYXJhbSBpc05hdGl2ZSB0cnVlOui/lOWbnuaJk+WMheWQjm5hdGl2ZeebruW9leS4i+eahOi3r+W+hO+8jGZhbHNlOui/lOWbnuaJk+WMheWQjmltcG9ydOebruW9leS4i+eahOi3r+W+hFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmF0aXZlVXJsQnlSZXNvdXJjZXModXJsOiBzdHJpbmcsIGV4dDogc3RyaW5nLCBpc05hdGl2ZTogYm9vbGVhbiA9IHRydWUpOiBzdHJpbmcge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IG5hdGl2ZVVybCA9IGNjLmFzc2V0TWFuYWdlcltcIl90cmFuc2Zvcm1cIl0oeyBwYXRoOiB1cmwsIGJ1bmRsZTogY2MuQXNzZXRNYW5hZ2VyLkJ1aWx0aW5CdW5kbGVOYW1lLlJFU09VUkNFUywgX19pc05hdGl2ZV9fOiBpc05hdGl2ZSwgZXh0OiBleHQgfSk7XG4gICAgICAgICAgICByZXR1cm4gbmF0aXZlVXJsO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY2MuZXJyb3IoYFtSZXMuZ2V0TmF0aXZlVXJsQnlSZXNvdXJjZXNdIGVycm9yIHVybDogJHt1cmx9YCk7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmAmui/h+i1hOa6kOebuOWvuei3r+W+hOmHiuaUvui1hOa6kFxuICAgICAqIEBwYXJhbSBwYXRoICAgICAgICAgIOi1hOa6kOi3r+W+hFxuICAgICAqIEBwYXJhbSBidW5kbGVOYW1lICAgIOi/nOeoi+i1hOa6kOWMheWQjVxuICAgICAqL1xuICAgIHJlbGVhc2UocGF0aDogc3RyaW5nLCB0eXBlOiB0eXBlb2YgY2MuQXNzZXQsIGJ1bmRsZU5hbWU6IHN0cmluZyA9IFwicmVzb3VyY2VzXCIpIHtcbiAgICAgICAgbGV0IG5vd1NlYyA9IERhdGUubm93KCkgLyAxMDAwO1xuICAgICAgICBsZXQga2V5VXJsID0gcGF0aDtcbiAgICAgICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoQlVORExFX0NIRUNLKSkge1xuICAgICAgICAgICAga2V5VXJsID0gdGhpcy5nZXRGdWxsVXJsKGJ1bmRsZU5hbWUsIHBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9vdGhlckNhY2hlLmhhcyhrZXlVcmwpKSB7XG4gICAgICAgICAgICBsZXQgZHN0ID0gdGhpcy5fb3RoZXJDYWNoZS5nZXQoa2V5VXJsKTtcbiAgICAgICAgICAgIGRzdC5kZWNSZWYoKTtcbiAgICAgICAgICAgIHRoaXMuX290aGVyQ2FjaGUuZGVsZXRlKGtleVVybCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgY2FjaGVEYXRhID0gdGhpcy5nZXRDYWNoZURhdGEoa2V5VXJsLCB0eXBlKTtcbiAgICAgICAgICAgIGlmIChjYWNoZURhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gY2MuUHJlZmFiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmVmYWJDYWNoZSA9IGNhY2hlRGF0YSBhcyBQcmVmYWJDYWNoZURhdGE7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcHJlZmFiQ2FjaGUucmVsZWFzZSB8fCBub3dTZWMgLSBwcmVmYWJDYWNoZS5sYXN0TG9hZFRpbWUgPCB0aGlzLnJlbGVhc2VTZWMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcmVmYWJDYWNoZS5ub2RlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBwcmVmYWJDYWNoZS5ub2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gcHJlZmFiQ2FjaGUubm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUgJiYgbm9kZS5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ub2RlUGF0aC5kZWxldGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZmFiQ2FjaGUubm9kZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZWZhYkNhY2hlLm5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmVmYWJDYWNoZS5ub2RlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJlZmFiQ2FjaGUubm9kZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVmYWJDYWNoZS5hc3NldC5kZWNSZWYoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ByZWZhYlBhdGguZGVsZXRlKGNhY2hlRGF0YS5hc3NldCBhcyBjYy5QcmVmYWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJlZmFiQ2FjaGUuZGVsZXRlKGtleVVybCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhY2hlRGF0YS5yZWxlYXNlIHx8IG5vd1NlYyAtIGNhY2hlRGF0YS5sYXN0TG9hZFRpbWUgPCB0aGlzLnJlbGVhc2VTZWMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYWNoZURhdGEuYXNzZXQuZGVjUmVmKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGRzdE1hcDogTWFwPHN0cmluZywgQ2FjaGVEYXRhPiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBjYy5TcHJpdGVGcmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHN0TWFwID0gdGhpcy5fc3ByaXRlRnJhbWVDYWNoZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBjYy5TcHJpdGVBdGxhcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHN0TWFwID0gdGhpcy5fc3ByaXRlQXRsYXNDYWNoZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBzcC5Ta2VsZXRvbkRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRzdE1hcCA9IHRoaXMuX3NrZWxldG9uRGF0YUNhY2hlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRzdE1hcC5kZWxldGUoa2V5VXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDpgJrov4fnm7jlr7nmlofku7blpLnot6/lvoTliKDpmaTmiYDmnInmlofku7blpLnkuK3otYTmupBcbiAgICAgKiBAcGFyYW0gcGF0aCAgICAgICAgICDotYTmupDmlofku7blpLnot6/lvoRcbiAgICAgKiBAcGFyYW0gYnVuZGxlTmFtZSAgICDov5znqIvotYTmupDljIXlkI1cbiAgICAgKi9cbiAgICByZWxlYXNlRGlyKHBhdGg6IHN0cmluZywgYnVuZGxlTmFtZTogc3RyaW5nID0gXCJyZXNvdXJjZXNcIikge1xuICAgICAgICBsZXQgYnVuZGxlOiBjYy5Bc3NldE1hbmFnZXIuQnVuZGxlIHwgbnVsbCA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoYnVuZGxlTmFtZSk7XG4gICAgICAgIGlmIChidW5kbGUpIHtcbiAgICAgICAgICAgIGxldCBpbmZvcyA9IGJ1bmRsZS5nZXREaXJXaXRoUGF0aChwYXRoKTtcbiAgICAgICAgICAgIGlmIChpbmZvcykge1xuICAgICAgICAgICAgICAgIGluZm9zLm1hcCgoaW5mbykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdXJsID0gaW5mby5wYXRoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbGVhc2UodXJsLCBudWxsLCBidW5kbGVOYW1lKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOmHiuaUvumihOWItuS+nei1lui1hOa6kCAqL1xuICAgIHByaXZhdGUgcmVsZWFzZVByZWZhYnREZXBzUmVjdXJzaXZlbHkodXVpZDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBhc3NldCA9IGNjLmFzc2V0TWFuYWdlci5hc3NldHMuZ2V0KHV1aWQpITtcbiAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLnJlbGVhc2VBc3NldChhc3NldCk7XG5cbiAgICAgICAgaWYgKGFzc2V0IGluc3RhbmNlb2YgY2MuUHJlZmFiKSB7XG4gICAgICAgICAgICBsZXQgdXVpZHM6IHN0cmluZ1tdID0gY2MuYXNzZXRNYW5hZ2VyLmRlcGVuZFV0aWwuZ2V0RGVwc1JlY3Vyc2l2ZWx5KHV1aWQpITtcbiAgICAgICAgICAgIHV1aWRzLmZvckVhY2godXVpZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGFzc2V0ID0gY2MuYXNzZXRNYW5hZ2VyLmFzc2V0cy5nZXQodXVpZCkhO1xuICAgICAgICAgICAgICAgIGFzc2V0LmRlY1JlZigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5botYTmupBcbiAgICAgKiBAcGFyYW0gcGF0aCAgICAgICAgICDotYTmupDot6/lvoRcbiAgICAgKiBAcGFyYW0gdHlwZSAgICAgICAgICDotYTmupDnsbvlnotcbiAgICAgKiBAcGFyYW0gYnVuZGxlTmFtZSAgICDov5znqIvotYTmupDljIXlkI1cbiAgICAgKi9cbiAgICBnZXQ8VCBleHRlbmRzIGNjLkFzc2V0PihwYXRoOiBzdHJpbmcsIHR5cGU/OiBBc3NldFR5cGU8VD4gfCBudWxsLCBidW5kbGVOYW1lOiBzdHJpbmcgPSBcInJlc291cmNlc1wiKTogVCB8IG51bGwge1xuICAgICAgICBsZXQgYnVuZGxlOiBjYy5Bc3NldE1hbmFnZXIuQnVuZGxlIHwgbnVsbCA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoYnVuZGxlTmFtZSk7XG4gICAgICAgIHJldHVybiBidW5kbGUhLmdldChwYXRoLCB0eXBlKTtcbiAgICB9XG5cbiAgICAvKiog5omT5Y2w57yT5a2Y5Lit5omA5pyJ6LWE5rqQ5L+h5oGvICovXG4gICAgZHVtcCgpIHtcbiAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmFzc2V0cy5mb3JFYWNoKCh2YWx1ZTogY2MuQXNzZXQsIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYy5hc3NldE1hbmFnZXIuYXNzZXRzLmdldChrZXkpKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coYOW9k+WJjei1hOa6kOaAu+aVsDoke2NjLmFzc2V0TWFuYWdlci5hc3NldHMuY291bnR9YCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwYXJzZUxvYWRSZXNBcmdzPFQgZXh0ZW5kcyBjYy5Bc3NldD4oXG4gICAgICAgIHBhdGhzOiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICAgICAgdHlwZT86IEFzc2V0VHlwZTxUPiB8IFByb2dyZXNzQ2FsbGJhY2sgfCBDb21wbGV0ZUNhbGxiYWNrIHwgbnVsbCxcbiAgICAgICAgb25Qcm9ncmVzcz86IEFzc2V0VHlwZTxUPiB8IFByb2dyZXNzQ2FsbGJhY2sgfCBDb21wbGV0ZUNhbGxiYWNrIHwgbnVsbCxcbiAgICAgICAgb25Db21wbGV0ZT86IFByb2dyZXNzQ2FsbGJhY2sgfCBDb21wbGV0ZUNhbGxiYWNrIHwgbnVsbFxuICAgICkge1xuICAgICAgICBsZXQgcGF0aHNPdXQ6IGFueSA9IHBhdGhzO1xuICAgICAgICBsZXQgdHlwZU91dDogYW55ID0gdHlwZTtcbiAgICAgICAgbGV0IG9uUHJvZ3Jlc3NPdXQ6IGFueSA9IG9uUHJvZ3Jlc3M7XG4gICAgICAgIGxldCBvbkNvbXBsZXRlT3V0OiBhbnkgPSBvbkNvbXBsZXRlO1xuICAgICAgICBpZiAob25Db21wbGV0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkVHlwZSA9IGNjLmpzLmlzQ2hpbGRDbGFzc09mKHR5cGUgYXMgQXNzZXRUeXBlLCBjYy5Bc3NldCk7XG4gICAgICAgICAgICBpZiAob25Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgIG9uQ29tcGxldGVPdXQgPSBvblByb2dyZXNzIGFzIENvbXBsZXRlQ2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgaWYgKGlzVmFsaWRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3NPdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9uUHJvZ3Jlc3MgPT09IHVuZGVmaW5lZCAmJiAhaXNWYWxpZFR5cGUpIHtcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlT3V0ID0gdHlwZSBhcyBDb21wbGV0ZUNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3NPdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHR5cGVPdXQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9uUHJvZ3Jlc3MgIT09IHVuZGVmaW5lZCAmJiAhaXNWYWxpZFR5cGUpIHtcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzT3V0ID0gdHlwZSBhcyBQcm9ncmVzc0NhbGxiYWNrO1xuICAgICAgICAgICAgICAgIHR5cGVPdXQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGhzOiBwYXRoc091dCwgdHlwZTogdHlwZU91dCwgb25Qcm9ncmVzczogb25Qcm9ncmVzc091dCwgb25Db21wbGV0ZTogb25Db21wbGV0ZU91dCB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZEJ5QnVuZGxlQW5kQXJnczxUIGV4dGVuZHMgY2MuQXNzZXQ+KGJ1bmRsZTogY2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSwgYXJnczogSUxvYWRSZXNBcmdzPFQ+KTogdm9pZCB7XG4gICAgICAgIGlmIChhcmdzLmRpcikge1xuICAgICAgICAgICAgbGV0IGRpclVybCA9IGFyZ3MucGF0aHMgYXMgc3RyaW5nO1xuICAgICAgICAgICAgYnVuZGxlLmxvYWREaXIoZGlyVXJsLCBhcmdzLnR5cGUsIGFyZ3Mub25Qcm9ncmVzcywgKGVyciwgZGF0YTogVFtdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgW1Jlcy5sb2FkRGlyXSBsb2FkIGVycm9yOiAke2Vycn1gKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5mb3MgPSBidW5kbGUuZ2V0RGlyV2l0aFBhdGgoZGlyVXJsLCBhcmdzLnR5cGUgYXMgYW55KTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChhc3NldCwgaSkgPT4geyB0aGlzLmNhY2hlQXNzZXQoaW5mb3NbaV0ucGF0aCwgYXNzZXQpOyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXJncy5vbkNvbXBsZXRlICYmIGFyZ3Mub25Db21wbGV0ZShlcnIsIGRhdGEgYXMgYW55KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmdzLnBhdGhzID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGtleVVybCA9IGFyZ3MucGF0aHM7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MuYnVuZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleVVybCA9IHRoaXMuZ2V0RnVsbFVybChhcmdzLmJ1bmRsZSwgYXJncy5wYXRocyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBhc3NldDogVCA9IHRoaXMuZ2V0UmVzKGtleVVybCwgYXJncy50eXBlIGFzIGFueSk7XG4gICAgICAgICAgICAgICAgaWYgKGFzc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3Mub25Db21wbGV0ZSAmJiBhcmdzLm9uQ29tcGxldGUobnVsbCwgYXNzZXQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBleGlzdFJlcyA9IGJ1bmRsZS5nZXQoYXJncy5wYXRocywgYXJncy50eXBlKVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RSZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVBc3NldChrZXlVcmwsIGV4aXN0UmVzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3Mub25Db21wbGV0ZSAmJiBhcmdzLm9uQ29tcGxldGUobnVsbCwgZXhpc3RSZXMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVuZGxlLmxvYWQoYXJncy5wYXRocywgYXJncy50eXBlLCBhcmdzLm9uUHJvZ3Jlc3MsIChlcnIsIGRhdGE6IFQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbUmVzLmxvYWRdIGxvYWQgZXJyb3I6ICR7ZXJyfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVBc3NldChrZXlVcmwsIGRhdGEsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzLm9uQ29tcGxldGUgJiYgYXJncy5vbkNvbXBsZXRlKGVyciwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGFyclVybDogc3RyaW5nW10gPSBhcmdzLnBhdGhzO1xuICAgICAgICAgICAgICAgIGJ1bmRsZS5sb2FkKGFyclVybCwgYXJncy50eXBlLCBhcmdzLm9uUHJvZ3Jlc3MsIChlcnIsIGRhdGE6IFRbXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgW1Jlcy5sb2FkRGlyXSBsb2FkIGVycm9yOiAke2Vycn1gKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyclVybC5mb3JFYWNoKChhc3NldCwgaSkgPT4geyB0aGlzLmNhY2hlQXNzZXQoYXJyVXJsW2ldLCBkYXRhW2ldKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJncy5vbkNvbXBsZXRlICYmIGFyZ3Mub25Db21wbGV0ZShlcnIsIGRhdGEgYXMgYW55KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgbG9hZEJ5QXJnczxUIGV4dGVuZHMgY2MuQXNzZXQ+KGFyZ3M6IElMb2FkUmVzQXJnczxUPikge1xuICAgICAgICBsZXQgYnVuZGxlOiBjYy5Bc3NldE1hbmFnZXIuQnVuZGxlID0gY2MucmVzb3VyY2VzO1xuICAgICAgICBpZiAoYXJncy5idW5kbGUpIHtcbiAgICAgICAgICAgIGlmIChjYy5hc3NldE1hbmFnZXIuYnVuZGxlcy5oYXMoYXJncy5idW5kbGUpKSB7XG4gICAgICAgICAgICAgICAgYnVuZGxlID0gY2MuYXNzZXRNYW5hZ2VyLmJ1bmRsZXMuZ2V0KGFyZ3MuYnVuZGxlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnVuZGxlID0gYXdhaXQgdGhpcy5sb2FkQnVuZGxlKGFyZ3MuYnVuZGxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGFyZ3MucGF0aHMgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIC8v5aSa6K+t6KiA6YCC6YWNXG4gICAgICAgICAgICBsZXQgbGdJbmZvID0gYXdhaXQgdGhpcy5nZXRMR1Jlc0luZm8oYXJncy5wYXRocywgYnVuZGxlKTtcbiAgICAgICAgICAgIGlmIChsZ0luZm8pIHtcbiAgICAgICAgICAgICAgICBhcmdzLnBhdGhzID0gbGdJbmZvLmxnVXJsO1xuICAgICAgICAgICAgICAgIGJ1bmRsZSA9IGxnSW5mby5sZ0J1bmRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vVE9ETzrmlofku7bmlbDnu4RcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRCeUJ1bmRsZUFuZEFyZ3MoYnVuZGxlISwgYXJncyk7XG4gICAgfVxuXG4gICAgLyoqIOmdmeaAgeaIkOWRmCAqL1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogUmVzTG9hZGVyID0gbnVsbFxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogUmVzTG9hZGVyIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgUmVzTG9hZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIGludGVyZmFjZSBJQzJGIHtcbiAgICAgICAgcmVzOiBSZXNMb2FkZXI7XG4gICAgfVxufVxuXG5jMmYucmVzID0gUmVzTG9hZGVyLmdldEluc3RhbmNlKCk7XG5leHBvcnQgeyB9OyJdfQ==