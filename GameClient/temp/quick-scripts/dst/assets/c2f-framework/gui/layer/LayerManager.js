
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/gui/layer/LayerManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd8bbcaT+ExKEYLcYDDJw3RY', 'LayerManager');
// c2f-framework/gui/layer/LayerManager.ts

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
exports.LayerManager = void 0;
var GUI_1 = require("../GUI");
var C2FUIDef_1 = require("../../define/C2FUIDef");
var DelegateComponent_1 = require("./DelegateComponent");
var LayerDialog_1 = require("./LayerDialog");
var LayerNotify_1 = require("./LayerNotify");
var LayerPopup_1 = require("./LayerPopup");
var LayerUI_1 = require("./LayerUI");
var UIMap_1 = require("./UIMap");
var LayerManager = /** @class */ (function () {
    /**
     * 构造函数
     * @param root  界面根节点
     */
    function LayerManager() {
        /** UI配置 */
        this.uiCfgs = {};
    }
    Object.defineProperty(LayerManager.prototype, "gameFont", {
        get: function () {
            return this._gameFont;
        },
        set: function (v) {
            this._gameFont = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LayerManager.prototype, "portrait", {
        /** 是否为竖屏显示 */
        get: function () {
            return this.root.getComponent(GUI_1.GUI).portrait;
        },
        enumerable: false,
        configurable: true
    });
    LayerManager.prototype.createNode = function (name) {
        var node = new cc.Node(name);
        var w = node.addComponent(cc.Widget);
        w.isAlignLeft = w.isAlignRight = w.isAlignTop = w.isAlignBottom = true;
        w.left = w.right = w.top = w.bottom = 0;
        w.alignMode = cc.Widget.AlignMode.ON_WINDOW_RESIZE;
        w.enabled = true;
        return node;
    };
    LayerManager.prototype.init = function (root) {
        this.root = root;
        this.camera = this.root.parent.getChildByName('Camera').getComponent(cc.Camera);
        this.game = this.createNode(C2FUIDef_1.LayerType.Game);
        this.ui = new LayerUI_1.LayerUI(C2FUIDef_1.LayerType.UI);
        this.popup = new LayerPopup_1.LayerPopUp(C2FUIDef_1.LayerType.PopUp);
        this.dialog = new LayerDialog_1.LayerDialog(C2FUIDef_1.LayerType.Dialog);
        this.system = new LayerDialog_1.LayerDialog(C2FUIDef_1.LayerType.System);
        this.notify = new LayerNotify_1.LayerNotify(C2FUIDef_1.LayerType.Notify);
        this.guide = new LayerUI_1.LayerUI(C2FUIDef_1.LayerType.Guide);
        root.addChild(this.game);
        root.addChild(this.ui);
        root.addChild(this.popup);
        root.addChild(this.dialog);
        root.addChild(this.system);
        root.addChild(this.notify);
        root.addChild(this.guide);
    };
    /**
     * 初始化所有UI的配置对象
     * @param configs 配置对象
     */
    LayerManager.prototype.addViewList = function (list) {
        if (!this.uiCfgs) {
            this.uiCfgs = {};
        }
        if (Object.keys(this.uiCfgs).length <= 0) {
            this.uiCfgs = list;
        }
        else {
            for (var key in list) {
                this.uiCfgs[key] = list[key];
            }
        }
    };
    /**
     * 添加水波纹特效
     */
    LayerManager.prototype.addWaterWaveEfx = function (dur) {
        // this.touchEfx.addWaterWaveEfx(dur);
    };
    /**
     * 渐隐飘过提示
     * @param content 文本表示
     * @param useI18n 是否使用多语言
     * @example
     * c2f.gui.notifyTxt("提示内容");
     */
    LayerManager.prototype.notifyTxt = function (content, useI18n) {
        if (useI18n === void 0) { useI18n = true; }
        this.notify.notifyTxt(content, useI18n);
    };
    /**
    * 显示加载界面
    * @param tips 文本提示
    * @example
    * c2f.gui.loading("提示内容");
    */
    LayerManager.prototype.showLoading = function (tips) {
        if (tips === void 0) { tips = ''; }
        this.notify.showLoading(tips);
    };
    /**
    * 隐藏加载界面
    * @param clean 是否清空
    * @example
    * c2f.gui.loading("提示内容");
    */
    LayerManager.prototype.hideLoading = function (clean) {
        if (clean === void 0) { clean = false; }
        this.notify.hideLoading(clean);
    };
    /**
     * 弹出自定义UI
     * @param node 目标节点
     */
    LayerManager.prototype.popNotifyNode = function (node) {
        this.notify.addChild(node);
    };
    /**
     * 设置界面配置
     * @param uiId   要设置的界面id
     * @param config 要设置的配置
     */
    LayerManager.prototype.setConfig = function (uiId, config) {
        this.uiCfgs[uiId] = config;
    };
    /**
     * 设置界面地图配置
     * @param data 界面地图数据
     */
    LayerManager.prototype.setUIMap = function (data) {
        if (this.uiMap == null) {
            this.uiMap = new UIMap_1.UIMap();
        }
        this.uiMap.init(data);
    };
    /** 设置顶部节点 */
    LayerManager.prototype.setPlayerTopPanel = function (panel) {
        this.ui.setTopPanel(panel);
    };
    /**
     * 同步打开一个窗口
     * @param uiId          窗口唯一编号
     * @param uiArgs        窗口参数
     * @param callbacks     回调对象
     * @example
    var uic: UICallbacks = {
        onUIAdded: (node: Node, params: any) => {
            var comp = node.getComponent(LoadingViewComp) as ecs.Comp;
        }
        onUIRemoved:(node: Node | null, params: any) => {
                    
        }
    };
    c2f.gui.open(UIID.Loading, null, uic);
     */
    LayerManager.prototype.open = function (uiId, uiArgs, callbacks) {
        if (uiArgs === void 0) { uiArgs = null; }
        var config = this.uiCfgs[uiId];
        if (config == null) {
            cc.warn("\u6253\u5F00\u7F16\u53F7\u4E3A\u3010" + uiId + "\u3011\u7684\u754C\u9762\u5931\u8D25\uFF0C\u914D\u7F6E\u4FE1\u606F\u4E0D\u5B58\u5728");
            return;
        }
        switch (config.layer) {
            case C2FUIDef_1.LayerType.UI:
            case C2FUIDef_1.LayerType.PopUp:
                this.ui.add(config, uiArgs, callbacks);
                break;
            case C2FUIDef_1.LayerType.Dialog:
                this.dialog.add(config, uiArgs, callbacks);
                break;
            case C2FUIDef_1.LayerType.System:
                this.system.add(config, uiArgs, callbacks);
                break;
            case C2FUIDef_1.LayerType.Guide:
                this.guide.add(config, uiArgs, callbacks);
                break;
            case C2FUIDef_1.LayerType.Notify:
                this.notify.add(config, uiArgs, callbacks);
                break;
        }
    };
    /**
     * 异步打开一个窗口
     * @param uiId          窗口唯一编号
     * @param uiArgs        窗口参数
     * @example
     * var node = await c2f.gui.openAsync(UIID.Loading);
     */
    LayerManager.prototype.openAsync = function (uiId, uiArgs) {
        if (uiArgs === void 0) { uiArgs = null; }
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var callbacks = {
                            onUIAdded: function (node, params) {
                                resolve(node);
                            }
                        };
                        _this.open(uiId, uiArgs, callbacks);
                    })];
            });
        });
    };
    /**
     * 缓存中是否存在指定标识的窗口
     * @param uiId 窗口唯一标识
     * @example
     * c2f.gui.has(UIID.Loading);
     */
    LayerManager.prototype.has = function (uiId) {
        var config = this.uiCfgs[uiId];
        if (config == null) {
            cc.warn("\u7F16\u53F7\u4E3A\u3010" + uiId + "\u3011\u7684\u754C\u9762\u5931\u8D25\uFF0C\u914D\u7F6E\u4FE1\u606F\u4E0D\u5B58\u5728");
            return false;
        }
        var result = false;
        switch (config.layer) {
            case C2FUIDef_1.LayerType.UI:
            case C2FUIDef_1.LayerType.PopUp:
                result = this.ui.has(config.prefab);
                break;
            case C2FUIDef_1.LayerType.Dialog:
                result = this.dialog.has(config.prefab);
                break;
            case C2FUIDef_1.LayerType.System:
                result = this.system.has(config.prefab);
                break;
            case C2FUIDef_1.LayerType.Guide:
                result = this.guide.has(config.prefab);
                break;
        }
        return result;
    };
    /**
     *  根据预制件路径获取当前显示的该预制件的所有Node节点数组
     * @param uiId 窗口唯一标识
     * @example
     * c2f.gui.get(UIID.Loading);
     */
    LayerManager.prototype.get = function (uiId) {
        var config = this.uiCfgs[uiId];
        if (config == null) {
            cc.warn("\u7F16\u53F7\u4E3A\u3010" + uiId + "\u3011\u7684\u754C\u9762\u5931\u8D25\uFF0C\u914D\u7F6E\u4FE1\u606F\u4E0D\u5B58\u5728");
            return [];
        }
        var result = [];
        switch (config.layer) {
            case C2FUIDef_1.LayerType.UI:
            case C2FUIDef_1.LayerType.PopUp:
                result = this.ui.get(config.prefab);
                break;
            case C2FUIDef_1.LayerType.Dialog:
                result = this.dialog.get(config.prefab);
                break;
            case C2FUIDef_1.LayerType.System:
                result = this.system.get(config.prefab);
                break;
            case C2FUIDef_1.LayerType.Guide:
                result = this.guide.get(config.prefab);
                break;
            case C2FUIDef_1.LayerType.Notify:
                result = this.notify.get(config.prefab);
                break;
        }
        if (!result || result.length <= 0) {
            cc.warn("don't find target layer!");
            // let viewComp = UIID[uiId];
            // let dstComp = this.ui.getComponentInChildren(viewComp);
            // if (dstComp) {
            //     result.push(dstComp.node);
            // }
        }
        return result;
    };
    /** 获取窗口参数 */
    LayerManager.prototype.getViewParam = function (uiId) {
        var config = this.uiCfgs[uiId];
        if (config == null) {
            cc.warn("\u7F16\u53F7\u4E3A\u3010" + uiId + "\u3011\u7684\u754C\u9762\u5931\u8D25\uFF0C\u914D\u7F6E\u4FE1\u606F\u4E0D\u5B58\u5728");
            return null;
        }
        var viewParams = null;
        switch (config.layer) {
            case C2FUIDef_1.LayerType.UI:
            case C2FUIDef_1.LayerType.PopUp:
                viewParams = this.ui.getViewParam(config);
                break;
            case C2FUIDef_1.LayerType.Dialog:
                viewParams = this.dialog.getViewParam(config);
                break;
            case C2FUIDef_1.LayerType.System:
                viewParams = this.system.getViewParam(config);
                break;
            case C2FUIDef_1.LayerType.Guide:
                viewParams = this.guide.getViewParam(config);
                break;
            case C2FUIDef_1.LayerType.Notify:
                viewParams = this.guide.getViewParam(config);
                break;
        }
        return viewParams;
    };
    /**
     * 移除指定标识的窗口
     * @param uiId         窗口唯一标识
     * @param isDestroy    移除后是否释放
     * @example
     * c2f.gui.remove(UIID.Loading);
     */
    LayerManager.prototype.remove = function (uiId, isDestroy) {
        if (isDestroy === void 0) { isDestroy = true; }
        var config = this.uiCfgs[uiId];
        if (config == null) {
            cc.warn("\u5220\u9664\u7F16\u53F7\u4E3A\u3010" + uiId + "\u3011\u7684\u754C\u9762\u5931\u8D25\uFF0C\u914D\u7F6E\u4FE1\u606F\u4E0D\u5B58\u5728");
            return;
        }
        switch (config.layer) {
            case C2FUIDef_1.LayerType.UI:
            case C2FUIDef_1.LayerType.PopUp:
                this.ui.remove(config.prefab, isDestroy);
                break;
            case C2FUIDef_1.LayerType.Dialog:
                this.dialog.remove(config.prefab, isDestroy);
                break;
            case C2FUIDef_1.LayerType.System:
                this.system.remove(config.prefab, isDestroy);
                break;
            case C2FUIDef_1.LayerType.Guide:
                this.guide.remove(config.prefab, isDestroy);
                break;
        }
    };
    /**
     * 删除一个通过this框架添加进来的节点
     * @param node          窗口节点
     * @param isDestroy     移除后是否释放
     * @example
     * c2f.gui.removeByNode(cc.Node);
     */
    LayerManager.prototype.removeByNode = function (node, isDestroy) {
        if (isDestroy === void 0) { isDestroy = true; }
        var allLayer = [this.ui, this.popup, this.dialog, this.system, this.guide];
        var removeObj = null;
        for (var _i = 0, allLayer_1 = allLayer; _i < allLayer_1.length; _i++) {
            var one = allLayer_1[_i];
            var url = one.getPrefabUrlByNode(node);
            if (url && url.length > 0) {
                removeObj = { layer: one, prefab: url };
                break;
            }
        }
        if (removeObj) {
            removeObj.layer.remove(removeObj.prefab, isDestroy);
        }
        else {
            c2f.log.logBusiness("gui.removeByNode don't find target node!! name:", node.name);
            if (node instanceof cc.Node) {
                var comp = node.getComponent(DelegateComponent_1.DelegateComponent);
                if (comp && comp.viewParams) {
                    // @ts-ignore 注：不对外使用
                    node.parent.removeByUuid(comp.viewParams.uuid, isDestroy);
                }
                else {
                    cc.warn("\u5F53\u524D\u5220\u9664\u7684node\u4E0D\u662F\u901A\u8FC7\u754C\u9762\u7BA1\u7406\u5668\u6DFB\u52A0\u5230\u821E\u53F0\u4E0A");
                    node.destroy();
                }
            }
        }
    };
    /** 关闭uiId之上的所有界面 */
    LayerManager.prototype.removeAllAboveUI = function (uiId) {
        var config = this.uiCfgs[uiId];
        if (!config) {
            return;
        }
        if (config.layer != C2FUIDef_1.LayerType.UI && config.layer != C2FUIDef_1.LayerType.PopUp) {
            return;
        }
        var dstUI = this.ui.has(config.prefab);
        if (!dstUI) {
            return;
        }
        this.ui.removeAboveUI(config.prefab);
    };
    /**
     * 异步等待弹窗关闭（只等待遍历到的第一个）
     * @param url prefab路径，规则同Res加载路径
     */
    LayerManager.prototype.waitCloseLayer = function (uiId) {
        return __awaiter(this, void 0, Promise, function () {
            var viewPa;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        viewPa = this.getViewParam(uiId);
                        if (!viewPa) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                if (viewPa.callbacks.onUIRemoved) {
                                    var oriRemoveCb_1 = viewPa.callbacks.onUIRemoved;
                                    viewPa.callbacks.onUIRemoved = function () {
                                        var args = [];
                                        for (var _i = 0; _i < arguments.length; _i++) {
                                            args[_i] = arguments[_i];
                                        }
                                        oriRemoveCb_1.apply(void 0, args);
                                        resolve();
                                    };
                                }
                                else {
                                    viewPa.callbacks.onUIRemoved = resolve;
                                }
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 清除所有窗口
     * @param isDestroy 移除后是否释放
     * @param excludeId 排除预制体
     * @example
     * c2f.gui.clear();
     */
    LayerManager.prototype.clear = function (isDestroy, excludeId) {
        if (isDestroy === void 0) { isDestroy = false; }
        if (excludeId === void 0) { excludeId = []; }
        var excludePrefab = [];
        if (excludeId && excludeId.length > 0) {
            for (var _i = 0, excludeId_1 = excludeId; _i < excludeId_1.length; _i++) {
                var one = excludeId_1[_i];
                var config = this.uiCfgs[one];
                excludePrefab.push(config.prefab);
            }
        }
        this.ui.clearUI(isDestroy, excludePrefab);
        this.popup.clearUI(isDestroy, excludePrefab);
        this.dialog.clearUI(isDestroy, excludePrefab);
        this.system.clearUI(isDestroy, excludePrefab);
        this.notify.clearUI(isDestroy, excludePrefab);
        this.guide.clearUI(isDestroy, excludePrefab);
    };
    /** 获得最上层窗口 */
    LayerManager.prototype.getTopsideView = function () {
        var topside = null;
        var arrPanel = [this.system, this.dialog, this.ui];
        for (var _i = 0, arrPanel_1 = arrPanel; _i < arrPanel_1.length; _i++) {
            var one = arrPanel_1[_i];
            var top = one.getTopsideView();
            if (top) {
                topside = top;
                break;
            }
        }
        return topside;
    };
    LayerManager.prototype.hideAnimaPlayingView = function () {
        this.ui.hideAnimaPlayingView();
    };
    LayerManager.prototype.showAnimaPlayingView = function () {
        this.ui.showAnimaPlayingView();
    };
    LayerManager.prototype.lockScreen = function (duration) {
        var _this = this;
        if (duration === void 0) { duration = 0; }
        var scene = cc.director.getScene();
        var lockScreen = scene.getChildByName("lockScreen");
        if (!lockScreen) {
            lockScreen = new cc.Node();
            var comp = lockScreen.addComponent(cc.BlockInputEvents);
            lockScreen.parent = scene;
            lockScreen.zIndex = 10000;
            lockScreen.width = cc.winSize.width;
            lockScreen.height = cc.winSize.height;
            lockScreen.x = cc.winSize.width * 0.5;
            lockScreen.y = cc.winSize.height * 0.5;
            lockScreen.name = "lockScreen";
            if (duration) {
                comp.scheduleOnce(function () {
                    _this.unlockScreen();
                }, duration);
            }
        }
    };
    LayerManager.prototype.unlockScreen = function () {
        var scene = cc.director.getScene();
        var lockScreen = scene.getChildByName("lockScreen");
        if (lockScreen) {
            lockScreen.getComponent(cc.BlockInputEvents).unscheduleAllCallbacks();
            lockScreen.destroy();
            lockScreen = undefined;
        }
    };
    LayerManager.prototype.autoSize = function () {
        this.root.getComponent(GUI_1.GUI).autoSize();
    };
    LayerManager.prototype.fixedWidth = function () {
        this.root.getComponent(GUI_1.GUI).fixedWidth();
    };
    LayerManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new LayerManager();
        }
        return this._instance;
    };
    /** 静态成员 */
    LayerManager._instance = null;
    return LayerManager;
}());
exports.LayerManager = LayerManager;
c2f.gui = LayerManager.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9MYXllck1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEJBQTZCO0FBQzdCLGtEQUFxRjtBQUNyRix5REFBd0Q7QUFDeEQsNkNBQTRDO0FBQzVDLDZDQUE0QztBQUM1QywyQ0FBMEM7QUFDMUMscUNBQW9DO0FBQ3BDLGlDQUFnQztBQUloQztJQXVDSTs7O09BR0c7SUFDSDtRQXBCQSxXQUFXO1FBQ0gsV0FBTSxHQUFlLEVBQUUsQ0FBQztJQW9CaEMsQ0FBQztJQWpCRCxzQkFBVyxrQ0FBUTthQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBQ0QsVUFBb0IsQ0FBVTtZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN2QixDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLGtDQUFRO1FBRFosY0FBYzthQUNkO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFHLENBQUUsQ0FBQyxRQUFRLENBQUM7UUFDakQsQ0FBQzs7O09BQUE7SUFTTyxpQ0FBVSxHQUFsQixVQUFtQixJQUFZO1FBQzNCLElBQUksSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBYyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUN2RSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENB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LENBQUMsU0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUlhLHdCQUFXLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFQRCxXQUFXO0lBQ0ksc0JBQVMsR0FBaUIsSUFBSSxDQUFBO0lBT2pELG1CQUFDO0NBOWdCRCxBQThnQkMsSUFBQTtBQTlnQlksb0NBQVk7QUFzaEJ6QixHQUFHLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdVSSB9IGZyb20gXCIuLi9HVUlcIjtcbmltcG9ydCB7IExheWVyVHlwZSwgVUlDYWxsYmFja3MsIFVJQ29uZmlnLCBWaWV3Q29uZmlnIH0gZnJvbSBcIi4uLy4uL2RlZmluZS9DMkZVSURlZlwiO1xuaW1wb3J0IHsgRGVsZWdhdGVDb21wb25lbnQgfSBmcm9tIFwiLi9EZWxlZ2F0ZUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGF5ZXJEaWFsb2cgfSBmcm9tIFwiLi9MYXllckRpYWxvZ1wiO1xuaW1wb3J0IHsgTGF5ZXJOb3RpZnkgfSBmcm9tIFwiLi9MYXllck5vdGlmeVwiO1xuaW1wb3J0IHsgTGF5ZXJQb3BVcCB9IGZyb20gXCIuL0xheWVyUG9wdXBcIjtcbmltcG9ydCB7IExheWVyVUkgfSBmcm9tIFwiLi9MYXllclVJXCI7XG5pbXBvcnQgeyBVSU1hcCB9IGZyb20gXCIuL1VJTWFwXCI7XG5pbXBvcnQgeyBMYXllckVmZmVjdCB9IGZyb20gXCIuL0xheWVyRWZmZWN0XCI7XG5pbXBvcnQgeyBUb3VjaEVmZmVjdCB9IGZyb20gXCIuLi92aWV3L1RvdWNoRWZmZWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBMYXllck1hbmFnZXIge1xuICAgIC8qKiDnlYzpnaLmoLnoioLngrkgKi9cbiAgICByb290ITogY2MuTm9kZTtcbiAgICAvKiog55WM6Z2i5pGE5YOP5py6ICovXG4gICAgY2FtZXJhITogY2MuQ2FtZXJhO1xuICAgIC8qKiDmuLjmiI/nlYzpnaLnibnmlYjlsYIgKi9cbiAgICBnYW1lITogY2MuTm9kZTtcbiAgICAvKiog55WM6Z2i5Zyw5Zu+ICovXG4gICAgdWlNYXAhOiBVSU1hcDtcblxuICAgIC8qKiDnlYzpnaLlsYLCt+W8ueWHuuWeiyAqL1xuICAgIHByaXZhdGUgdWkhOiBMYXllclVJO1xuICAgIC8qKiDlvLnnqpflsYLCt+W8ueWHuuWeiyAqL1xuICAgIHByaXZhdGUgcG9wdXAhOiBMYXllclBvcFVwO1xuICAgIC8qKiDlj6rog73lvLnlh7rkuIDkuKrnmoTlvLnnqpfCt+W8ueWHuuWeiyAqL1xuICAgIHByaXZhdGUgZGlhbG9nITogTGF5ZXJEaWFsb2c7XG4gICAgLyoqIOa4uOaIj+ezu+e7n+aPkOekuuW8ueeqlyAgKi9cbiAgICBwcml2YXRlIHN5c3RlbSE6IExheWVyRGlhbG9nO1xuICAgIC8qKiDmtojmga/mj5DnpLrmjqfliLblmajvvIzor7fkvb/nlKhzaG935pa55rOV5p2l5pi+56S6ICovXG4gICAgcHJpdmF0ZSBub3RpZnkhOiBMYXllck5vdGlmeTtcbiAgICAvKiog5paw5omL5byV5a+85bGCICovXG4gICAgcHJpdmF0ZSBndWlkZSE6IExheWVyVUk7XG5cbiAgICAvKiogVUnphY3nva4gKi9cbiAgICBwcml2YXRlIHVpQ2ZnczogVmlld0NvbmZpZyA9IHt9O1xuICAgIC8qKiDmuLjmiI/lrZfkvZMgKi9cbiAgICBwcml2YXRlIF9nYW1lRm9udDogY2MuRm9udDtcbiAgICBwdWJsaWMgZ2V0IGdhbWVGb250KCk6IGNjLkZvbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZUZvbnQ7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZ2FtZUZvbnQodjogY2MuRm9udCkge1xuICAgICAgICB0aGlzLl9nYW1lRm9udCA9IHY7XG4gICAgfVxuXG4gICAgLyoqIOaYr+WQpuS4uuerluWxj+aYvuekuiAqL1xuICAgIGdldCBwb3J0cmFpdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdC5nZXRDb21wb25lbnQoR1VJKSEucG9ydHJhaXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5p6E6YCg5Ye95pWwXG4gICAgICogQHBhcmFtIHJvb3QgIOeVjOmdouagueiKgueCuVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlTm9kZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZShuYW1lKTtcbiAgICAgICAgbGV0IHc6IGNjLldpZGdldCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLldpZGdldCk7XG4gICAgICAgIHcuaXNBbGlnbkxlZnQgPSB3LmlzQWxpZ25SaWdodCA9IHcuaXNBbGlnblRvcCA9IHcuaXNBbGlnbkJvdHRvbSA9IHRydWU7XG4gICAgICAgIHcubGVmdCA9IHcucmlnaHQgPSB3LnRvcCA9IHcuYm90dG9tID0gMDtcbiAgICAgICAgdy5hbGlnbk1vZGUgPSBjYy5XaWRnZXQuQWxpZ25Nb2RlLk9OX1dJTkRPV19SRVNJWkU7XG4gICAgICAgIHcuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KHJvb3Q6IGNjLk5vZGUpIHtcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICAgICAgdGhpcy5jYW1lcmEgPSB0aGlzLnJvb3QucGFyZW50LmdldENoaWxkQnlOYW1lKCdDYW1lcmEnKS5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKSE7XG5cbiAgICAgICAgdGhpcy5nYW1lID0gdGhpcy5jcmVhdGVOb2RlKExheWVyVHlwZS5HYW1lKTtcbiAgICAgICAgdGhpcy51aSA9IG5ldyBMYXllclVJKExheWVyVHlwZS5VSSk7XG4gICAgICAgIHRoaXMucG9wdXAgPSBuZXcgTGF5ZXJQb3BVcChMYXllclR5cGUuUG9wVXApO1xuICAgICAgICB0aGlzLmRpYWxvZyA9IG5ldyBMYXllckRpYWxvZyhMYXllclR5cGUuRGlhbG9nKTtcbiAgICAgICAgdGhpcy5zeXN0ZW0gPSBuZXcgTGF5ZXJEaWFsb2coTGF5ZXJUeXBlLlN5c3RlbSk7XG4gICAgICAgIHRoaXMubm90aWZ5ID0gbmV3IExheWVyTm90aWZ5KExheWVyVHlwZS5Ob3RpZnkpO1xuICAgICAgICB0aGlzLmd1aWRlID0gbmV3IExheWVyVUkoTGF5ZXJUeXBlLkd1aWRlKTtcbiAgICAgICAgcm9vdC5hZGRDaGlsZCh0aGlzLmdhbWUpO1xuICAgICAgICByb290LmFkZENoaWxkKHRoaXMudWkpO1xuICAgICAgICByb290LmFkZENoaWxkKHRoaXMucG9wdXApO1xuICAgICAgICByb290LmFkZENoaWxkKHRoaXMuZGlhbG9nKTtcbiAgICAgICAgcm9vdC5hZGRDaGlsZCh0aGlzLnN5c3RlbSk7XG4gICAgICAgIHJvb3QuYWRkQ2hpbGQodGhpcy5ub3RpZnkpO1xuICAgICAgICByb290LmFkZENoaWxkKHRoaXMuZ3VpZGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMluaJgOaciVVJ55qE6YWN572u5a+56LGhXG4gICAgICogQHBhcmFtIGNvbmZpZ3Mg6YWN572u5a+56LGhXG4gICAgICovXG4gICAgcHVibGljIGFkZFZpZXdMaXN0KGxpc3Q6IFZpZXdDb25maWcpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnVpQ2Zncykge1xuICAgICAgICAgICAgdGhpcy51aUNmZ3MgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy51aUNmZ3MpLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnVpQ2ZncyA9IGxpc3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gbGlzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMudWlDZmdzW2tleV0gPSBsaXN0W2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmt7vliqDmsLTms6LnurnnibnmlYhcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkV2F0ZXJXYXZlRWZ4KGR1cjogbnVtYmVyKSB7XG4gICAgICAgIC8vIHRoaXMudG91Y2hFZnguYWRkV2F0ZXJXYXZlRWZ4KGR1cik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5riQ6ZqQ6aOY6L+H5o+Q56S6XG4gICAgICogQHBhcmFtIGNvbnRlbnQg5paH5pys6KGo56S6XG4gICAgICogQHBhcmFtIHVzZUkxOG4g5piv5ZCm5L2/55So5aSa6K+t6KiAXG4gICAgICogQGV4YW1wbGUgXG4gICAgICogYzJmLmd1aS5ub3RpZnlUeHQoXCLmj5DnpLrlhoXlrrlcIik7XG4gICAgICovXG4gICAgcHVibGljIG5vdGlmeVR4dChjb250ZW50OiBzdHJpbmcsIHVzZUkxOG46IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHRoaXMubm90aWZ5Lm5vdGlmeVR4dChjb250ZW50LCB1c2VJMThuKVxuICAgIH1cblxuICAgIC8qKlxuICAgICog5pi+56S65Yqg6L2955WM6Z2iXG4gICAgKiBAcGFyYW0gdGlwcyDmlofmnKzmj5DnpLpcbiAgICAqIEBleGFtcGxlIFxuICAgICogYzJmLmd1aS5sb2FkaW5nKFwi5o+Q56S65YaF5a65XCIpO1xuICAgICovXG4gICAgcHVibGljIHNob3dMb2FkaW5nKHRpcHM6IHN0cmluZyA9ICcnKSB7XG4gICAgICAgIHRoaXMubm90aWZ5LnNob3dMb2FkaW5nKHRpcHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICog6ZqQ6JeP5Yqg6L2955WM6Z2iXG4gICAgKiBAcGFyYW0gY2xlYW4g5piv5ZCm5riF56m6XG4gICAgKiBAZXhhbXBsZSBcbiAgICAqIGMyZi5ndWkubG9hZGluZyhcIuaPkOekuuWGheWuuVwiKTtcbiAgICAqL1xuICAgIHB1YmxpYyBoaWRlTG9hZGluZyhjbGVhbjogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMubm90aWZ5LmhpZGVMb2FkaW5nKGNsZWFuKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlvLnlh7roh6rlrprkuYlVSVxuICAgICAqIEBwYXJhbSBub2RlIOebruagh+iKgueCuVxuICAgICAqL1xuICAgIHB1YmxpYyBwb3BOb3RpZnlOb2RlKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgdGhpcy5ub3RpZnkuYWRkQ2hpbGQobm9kZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K6+572u55WM6Z2i6YWN572uXG4gICAgICogQHBhcmFtIHVpSWQgICDopoHorr7nva7nmoTnlYzpnaJpZFxuICAgICAqIEBwYXJhbSBjb25maWcg6KaB6K6+572u55qE6YWN572uXG4gICAgICovXG4gICAgcHVibGljIHNldENvbmZpZyh1aUlkOiBudW1iZXIsIGNvbmZpZzogVUlDb25maWcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51aUNmZ3NbdWlJZF0gPSBjb25maWc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K6+572u55WM6Z2i5Zyw5Zu+6YWN572uXG4gICAgICogQHBhcmFtIGRhdGEg55WM6Z2i5Zyw5Zu+5pWw5o2uXG4gICAgICovXG4gICAgcHVibGljIHNldFVJTWFwKGRhdGE6IGFueSkge1xuICAgICAgICBpZiAodGhpcy51aU1hcCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnVpTWFwID0gbmV3IFVJTWFwKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51aU1hcC5pbml0KGRhdGEpO1xuICAgIH1cblxuICAgIC8qKiDorr7nva7pobbpg6joioLngrkgKi9cbiAgICBwdWJsaWMgc2V0UGxheWVyVG9wUGFuZWw8VCBleHRlbmRzIGNjLk5vZGU+KHBhbmVsOiBUKSB7XG4gICAgICAgIHRoaXMudWkuc2V0VG9wUGFuZWwocGFuZWwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWQjOatpeaJk+W8gOS4gOS4queql+WPo1xuICAgICAqIEBwYXJhbSB1aUlkICAgICAgICAgIOeql+WPo+WUr+S4gOe8luWPt1xuICAgICAqIEBwYXJhbSB1aUFyZ3MgICAgICAgIOeql+WPo+WPguaVsFxuICAgICAqIEBwYXJhbSBjYWxsYmFja3MgICAgIOWbnuiwg+WvueixoVxuICAgICAqIEBleGFtcGxlXG4gICAgdmFyIHVpYzogVUlDYWxsYmFja3MgPSB7XG4gICAgICAgIG9uVUlBZGRlZDogKG5vZGU6IE5vZGUsIHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgICAgICB2YXIgY29tcCA9IG5vZGUuZ2V0Q29tcG9uZW50KExvYWRpbmdWaWV3Q29tcCkgYXMgZWNzLkNvbXA7XG4gICAgICAgIH1cbiAgICAgICAgb25VSVJlbW92ZWQ6KG5vZGU6IE5vZGUgfCBudWxsLCBwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH07XG4gICAgYzJmLmd1aS5vcGVuKFVJSUQuTG9hZGluZywgbnVsbCwgdWljKTtcbiAgICAgKi9cbiAgICBwdWJsaWMgb3Blbih1aUlkOiBudW1iZXIsIHVpQXJnczogYW55ID0gbnVsbCwgY2FsbGJhY2tzPzogVUlDYWxsYmFja3MpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy51aUNmZ3NbdWlJZF07XG4gICAgICAgIGlmIChjb25maWcgPT0gbnVsbCkge1xuICAgICAgICAgICAgY2Mud2Fybihg5omT5byA57yW5Y+35Li644CQJHt1aUlkfeOAkeeahOeVjOmdouWksei0pe+8jOmFjee9ruS/oeaBr+S4jeWtmOWcqGApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChjb25maWcubGF5ZXIpIHtcbiAgICAgICAgICAgIGNhc2UgTGF5ZXJUeXBlLlVJOlxuICAgICAgICAgICAgY2FzZSBMYXllclR5cGUuUG9wVXA6XG4gICAgICAgICAgICAgICAgdGhpcy51aS5hZGQoY29uZmlnLCB1aUFyZ3MsIGNhbGxiYWNrcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIExheWVyVHlwZS5EaWFsb2c6XG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuYWRkKGNvbmZpZywgdWlBcmdzLCBjYWxsYmFja3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBMYXllclR5cGUuU3lzdGVtOlxuICAgICAgICAgICAgICAgIHRoaXMuc3lzdGVtLmFkZChjb25maWcsIHVpQXJncywgY2FsbGJhY2tzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTGF5ZXJUeXBlLkd1aWRlOlxuICAgICAgICAgICAgICAgIHRoaXMuZ3VpZGUuYWRkKGNvbmZpZywgdWlBcmdzLCBjYWxsYmFja3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBMYXllclR5cGUuTm90aWZ5OlxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5LmFkZChjb25maWcsIHVpQXJncywgY2FsbGJhY2tzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOW8guatpeaJk+W8gOS4gOS4queql+WPo1xuICAgICAqIEBwYXJhbSB1aUlkICAgICAgICAgIOeql+WPo+WUr+S4gOe8luWPt1xuICAgICAqIEBwYXJhbSB1aUFyZ3MgICAgICAgIOeql+WPo+WPguaVsFxuICAgICAqIEBleGFtcGxlIFxuICAgICAqIHZhciBub2RlID0gYXdhaXQgYzJmLmd1aS5vcGVuQXN5bmMoVUlJRC5Mb2FkaW5nKTtcbiAgICAgKi9cbiAgICBhc3luYyBvcGVuQXN5bmModWlJZDogbnVtYmVyLCB1aUFyZ3M6IGFueSA9IG51bGwpOiBQcm9taXNlPGNjLk5vZGUgfCBudWxsPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxjYy5Ob2RlIHwgbnVsbD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrczogVUlDYWxsYmFja3MgPSB7XG4gICAgICAgICAgICAgICAgb25VSUFkZGVkOiAobm9kZTogY2MuTm9kZSwgcGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShub2RlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLm9wZW4odWlJZCwgdWlBcmdzLCBjYWxsYmFja3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnvJPlrZjkuK3mmK/lkKblrZjlnKjmjIflrprmoIfor4bnmoTnqpflj6NcbiAgICAgKiBAcGFyYW0gdWlJZCDnqpflj6PllK/kuIDmoIfor4ZcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGMyZi5ndWkuaGFzKFVJSUQuTG9hZGluZyk7XG4gICAgICovXG4gICAgcHVibGljIGhhcyh1aUlkOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIGNvbmZpZyA9IHRoaXMudWlDZmdzW3VpSWRdO1xuICAgICAgICBpZiAoY29uZmlnID09IG51bGwpIHtcbiAgICAgICAgICAgIGNjLndhcm4oYOe8luWPt+S4uuOAkCR7dWlJZH3jgJHnmoTnlYzpnaLlpLHotKXvvIzphY3nva7kv6Hmga/kuI3lrZjlnKhgKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgc3dpdGNoIChjb25maWcubGF5ZXIpIHtcbiAgICAgICAgICAgIGNhc2UgTGF5ZXJUeXBlLlVJOlxuICAgICAgICAgICAgY2FzZSBMYXllclR5cGUuUG9wVXA6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy51aS5oYXMoY29uZmlnLnByZWZhYik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIExheWVyVHlwZS5EaWFsb2c6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5kaWFsb2cuaGFzKGNvbmZpZy5wcmVmYWIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBMYXllclR5cGUuU3lzdGVtOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuc3lzdGVtLmhhcyhjb25maWcucHJlZmFiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTGF5ZXJUeXBlLkd1aWRlOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZ3VpZGUuaGFzKGNvbmZpZy5wcmVmYWIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIOagueaNrumihOWItuS7tui3r+W+hOiOt+WPluW9k+WJjeaYvuekuueahOivpemihOWItuS7tueahOaJgOaciU5vZGXoioLngrnmlbDnu4RcbiAgICAgKiBAcGFyYW0gdWlJZCDnqpflj6PllK/kuIDmoIfor4ZcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGMyZi5ndWkuZ2V0KFVJSUQuTG9hZGluZyk7XG4gICAgICovXG4gICAgcHVibGljIGdldCh1aUlkOiBudW1iZXIpOiBBcnJheTxjYy5Ob2RlPiB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMudWlDZmdzW3VpSWRdO1xuICAgICAgICBpZiAoY29uZmlnID09IG51bGwpIHtcbiAgICAgICAgICAgIGNjLndhcm4oYOe8luWPt+S4uuOAkCR7dWlJZH3jgJHnmoTnlYzpnaLlpLHotKXvvIzphY3nva7kv6Hmga/kuI3lrZjlnKhgKTtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0OiBBcnJheTxjYy5Ob2RlPiA9IFtdO1xuICAgICAgICBzd2l0Y2ggKGNvbmZpZy5sYXllcikge1xuICAgICAgICAgICAgY2FzZSBMYXllclR5cGUuVUk6XG4gICAgICAgICAgICBjYXNlIExheWVyVHlwZS5Qb3BVcDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnVpLmdldChjb25maWcucHJlZmFiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTGF5ZXJUeXBlLkRpYWxvZzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmRpYWxvZy5nZXQoY29uZmlnLnByZWZhYik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIExheWVyVHlwZS5TeXN0ZW06XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5zeXN0ZW0uZ2V0KGNvbmZpZy5wcmVmYWIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBMYXllclR5cGUuR3VpZGU6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ndWlkZS5nZXQoY29uZmlnLnByZWZhYik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIExheWVyVHlwZS5Ob3RpZnk6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ub3RpZnkuZ2V0KGNvbmZpZy5wcmVmYWIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVzdWx0IHx8IHJlc3VsdC5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgY2Mud2FybihcImRvbid0IGZpbmQgdGFyZ2V0IGxheWVyIVwiKVxuICAgICAgICAgICAgLy8gbGV0IHZpZXdDb21wID0gVUlJRFt1aUlkXTtcbiAgICAgICAgICAgIC8vIGxldCBkc3RDb21wID0gdGhpcy51aS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKHZpZXdDb21wKTtcbiAgICAgICAgICAgIC8vIGlmIChkc3RDb21wKSB7XG4gICAgICAgICAgICAvLyAgICAgcmVzdWx0LnB1c2goZHN0Q29tcC5ub2RlKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKiDojrflj5bnqpflj6Plj4LmlbAgKi9cbiAgICBwdWJsaWMgZ2V0Vmlld1BhcmFtKHVpSWQ6IG51bWJlcikge1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLnVpQ2Znc1t1aUlkXTtcbiAgICAgICAgaWYgKGNvbmZpZyA9PSBudWxsKSB7XG4gICAgICAgICAgICBjYy53YXJuKGDnvJblj7fkuLrjgJAke3VpSWR944CR55qE55WM6Z2i5aSx6LSl77yM6YWN572u5L+h5oGv5LiN5a2Y5ZyoYCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdmlld1BhcmFtcyA9IG51bGw7XG4gICAgICAgIHN3aXRjaCAoY29uZmlnLmxheWVyKSB7XG4gICAgICAgICAgICBjYXNlIExheWVyVHlwZS5VSTpcbiAgICAgICAgICAgIGNhc2UgTGF5ZXJUeXBlLlBvcFVwOlxuICAgICAgICAgICAgICAgIHZpZXdQYXJhbXMgPSB0aGlzLnVpLmdldFZpZXdQYXJhbShjb25maWcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBMYXllclR5cGUuRGlhbG9nOlxuICAgICAgICAgICAgICAgIHZpZXdQYXJhbXMgPSB0aGlzLmRpYWxvZy5nZXRWaWV3UGFyYW0oY29uZmlnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTGF5ZXJUeXBlLlN5c3RlbTpcbiAgICAgICAgICAgICAgICB2aWV3UGFyYW1zID0gdGhpcy5zeXN0ZW0uZ2V0Vmlld1BhcmFtKGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIExheWVyVHlwZS5HdWlkZTpcbiAgICAgICAgICAgICAgICB2aWV3UGFyYW1zID0gdGhpcy5ndWlkZS5nZXRWaWV3UGFyYW0oY29uZmlnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTGF5ZXJUeXBlLk5vdGlmeTpcbiAgICAgICAgICAgICAgICB2aWV3UGFyYW1zID0gdGhpcy5ndWlkZS5nZXRWaWV3UGFyYW0oY29uZmlnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmlld1BhcmFtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnp7vpmaTmjIflrprmoIfor4bnmoTnqpflj6NcbiAgICAgKiBAcGFyYW0gdWlJZCAgICAgICAgIOeql+WPo+WUr+S4gOagh+ivhlxuICAgICAqIEBwYXJhbSBpc0Rlc3Ryb3kgICAg56e76Zmk5ZCO5piv5ZCm6YeK5pS+XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBjMmYuZ3VpLnJlbW92ZShVSUlELkxvYWRpbmcpO1xuICAgICAqL1xuICAgIHB1YmxpYyByZW1vdmUodWlJZDogbnVtYmVyLCBpc0Rlc3Ryb3k6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMudWlDZmdzW3VpSWRdO1xuICAgICAgICBpZiAoY29uZmlnID09IG51bGwpIHtcbiAgICAgICAgICAgIGNjLndhcm4oYOWIoOmZpOe8luWPt+S4uuOAkCR7dWlJZH3jgJHnmoTnlYzpnaLlpLHotKXvvIzphY3nva7kv6Hmga/kuI3lrZjlnKhgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoY29uZmlnLmxheWVyKSB7XG4gICAgICAgICAgICBjYXNlIExheWVyVHlwZS5VSTpcbiAgICAgICAgICAgIGNhc2UgTGF5ZXJUeXBlLlBvcFVwOlxuICAgICAgICAgICAgICAgIHRoaXMudWkucmVtb3ZlKGNvbmZpZy5wcmVmYWIsIGlzRGVzdHJveSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIExheWVyVHlwZS5EaWFsb2c6XG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cucmVtb3ZlKGNvbmZpZy5wcmVmYWIsIGlzRGVzdHJveSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIExheWVyVHlwZS5TeXN0ZW06XG4gICAgICAgICAgICAgICAgdGhpcy5zeXN0ZW0ucmVtb3ZlKGNvbmZpZy5wcmVmYWIsIGlzRGVzdHJveSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIExheWVyVHlwZS5HdWlkZTpcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWRlLnJlbW92ZShjb25maWcucHJlZmFiLCBpc0Rlc3Ryb3kpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yig6Zmk5LiA5Liq6YCa6L+HdGhpc+ahhuaetua3u+WKoOi/m+adpeeahOiKgueCuVxuICAgICAqIEBwYXJhbSBub2RlICAgICAgICAgIOeql+WPo+iKgueCuVxuICAgICAqIEBwYXJhbSBpc0Rlc3Ryb3kgICAgIOenu+mZpOWQjuaYr+WQpumHiuaUvlxuICAgICAqIEBleGFtcGxlXG4gICAgICogYzJmLmd1aS5yZW1vdmVCeU5vZGUoY2MuTm9kZSk7XG4gICAgICovXG4gICAgcHVibGljIHJlbW92ZUJ5Tm9kZShub2RlOiBjYy5Ob2RlLCBpc0Rlc3Ryb3k6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGxldCBhbGxMYXllciA9IFt0aGlzLnVpLCB0aGlzLnBvcHVwLCB0aGlzLmRpYWxvZywgdGhpcy5zeXN0ZW0sIHRoaXMuZ3VpZGVdO1xuXG4gICAgICAgIGxldCByZW1vdmVPYmo6IHsgbGF5ZXI6IExheWVyVUksIHByZWZhYjogc3RyaW5nIH0gPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBvbmUgb2YgYWxsTGF5ZXIpIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSBvbmUuZ2V0UHJlZmFiVXJsQnlOb2RlKG5vZGUpO1xuICAgICAgICAgICAgaWYgKHVybCAmJiB1cmwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZU9iaiA9IHsgbGF5ZXI6IG9uZSwgcHJlZmFiOiB1cmwgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVtb3ZlT2JqKSB7XG4gICAgICAgICAgICByZW1vdmVPYmoubGF5ZXIucmVtb3ZlKHJlbW92ZU9iai5wcmVmYWIsIGlzRGVzdHJveSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjMmYubG9nLmxvZ0J1c2luZXNzKFwiZ3VpLnJlbW92ZUJ5Tm9kZSBkb24ndCBmaW5kIHRhcmdldCBub2RlISEgbmFtZTpcIiwgbm9kZS5uYW1lKTtcbiAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgY2MuTm9kZSkge1xuICAgICAgICAgICAgICAgIGxldCBjb21wID0gbm9kZS5nZXRDb21wb25lbnQoRGVsZWdhdGVDb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIGlmIChjb21wICYmIGNvbXAudmlld1BhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIOazqO+8muS4jeWvueWkluS9v+eUqFxuICAgICAgICAgICAgICAgICAgICAobm9kZS5wYXJlbnQgYXMgTGF5ZXJVSSkucmVtb3ZlQnlVdWlkKGNvbXAudmlld1BhcmFtcy51dWlkLCBpc0Rlc3Ryb3kpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2Mud2Fybihg5b2T5YmN5Yig6Zmk55qEbm9kZeS4jeaYr+mAmui/h+eVjOmdoueuoeeQhuWZqOa3u+WKoOWIsOiInuWPsOS4imApO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5YWz6ZetdWlJZOS5i+S4iueahOaJgOacieeVjOmdoiAqL1xuICAgIHB1YmxpYyByZW1vdmVBbGxBYm92ZVVJKHVpSWQ6IG51bWJlcikge1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLnVpQ2Znc1t1aUlkXTtcbiAgICAgICAgaWYgKCFjb25maWcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLmxheWVyICE9IExheWVyVHlwZS5VSSAmJiBjb25maWcubGF5ZXIgIT0gTGF5ZXJUeXBlLlBvcFVwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRzdFVJID0gdGhpcy51aS5oYXMoY29uZmlnLnByZWZhYik7XG4gICAgICAgIGlmICghZHN0VUkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVpLnJlbW92ZUFib3ZlVUkoY29uZmlnLnByZWZhYik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5byC5q2l562J5b6F5by556qX5YWz6Zet77yI5Y+q562J5b6F6YGN5Y6G5Yiw55qE56ys5LiA5Liq77yJXG4gICAgICogQHBhcmFtIHVybCBwcmVmYWLot6/lvoTvvIzop4TliJnlkIxSZXPliqDovb3ot6/lvoRcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgd2FpdENsb3NlTGF5ZXIodWlJZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGxldCB2aWV3UGEgPSB0aGlzLmdldFZpZXdQYXJhbSh1aUlkKTtcbiAgICAgICAgaWYgKCF2aWV3UGEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHZpZXdQYS5jYWxsYmFja3Mub25VSVJlbW92ZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgb3JpUmVtb3ZlQ2IgPSB2aWV3UGEuY2FsbGJhY2tzLm9uVUlSZW1vdmVkO1xuICAgICAgICAgICAgICAgIHZpZXdQYS5jYWxsYmFja3Mub25VSVJlbW92ZWQgPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb3JpUmVtb3ZlQ2IoLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZXdQYS5jYWxsYmFja3Mub25VSVJlbW92ZWQgPSByZXNvbHZlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmuIXpmaTmiYDmnInnqpflj6NcbiAgICAgKiBAcGFyYW0gaXNEZXN0cm95IOenu+mZpOWQjuaYr+WQpumHiuaUvlxuICAgICAqIEBwYXJhbSBleGNsdWRlSWQg5o6S6Zmk6aKE5Yi25L2TXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBjMmYuZ3VpLmNsZWFyKCk7XG4gICAgICovXG4gICAgcHVibGljIGNsZWFyKGlzRGVzdHJveTogYm9vbGVhbiA9IGZhbHNlLCBleGNsdWRlSWQ6IG51bWJlcltdID0gW10pIHtcbiAgICAgICAgbGV0IGV4Y2x1ZGVQcmVmYWI6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGlmIChleGNsdWRlSWQgJiYgZXhjbHVkZUlkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IG9uZSBvZiBleGNsdWRlSWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb25maWc6IFVJQ29uZmlnID0gdGhpcy51aUNmZ3Nbb25lXTtcbiAgICAgICAgICAgICAgICBleGNsdWRlUHJlZmFiLnB1c2goY29uZmlnLnByZWZhYilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVpLmNsZWFyVUkoaXNEZXN0cm95LCBleGNsdWRlUHJlZmFiKTtcbiAgICAgICAgdGhpcy5wb3B1cC5jbGVhclVJKGlzRGVzdHJveSwgZXhjbHVkZVByZWZhYik7XG4gICAgICAgIHRoaXMuZGlhbG9nLmNsZWFyVUkoaXNEZXN0cm95LCBleGNsdWRlUHJlZmFiKTtcbiAgICAgICAgdGhpcy5zeXN0ZW0uY2xlYXJVSShpc0Rlc3Ryb3ksIGV4Y2x1ZGVQcmVmYWIpO1xuICAgICAgICB0aGlzLm5vdGlmeS5jbGVhclVJKGlzRGVzdHJveSwgZXhjbHVkZVByZWZhYik7XG4gICAgICAgIHRoaXMuZ3VpZGUuY2xlYXJVSShpc0Rlc3Ryb3ksIGV4Y2x1ZGVQcmVmYWIpO1xuICAgIH1cblxuICAgIC8qKiDojrflvpfmnIDkuIrlsYLnqpflj6MgKi9cbiAgICBwdWJsaWMgZ2V0VG9wc2lkZVZpZXcoKSB7XG4gICAgICAgIGxldCB0b3BzaWRlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgbGV0IGFyclBhbmVsOiBMYXllclVJW10gPSBbdGhpcy5zeXN0ZW0sIHRoaXMuZGlhbG9nLCB0aGlzLnVpXTtcbiAgICAgICAgZm9yIChsZXQgb25lIG9mIGFyclBhbmVsKSB7XG4gICAgICAgICAgICBsZXQgdG9wID0gb25lLmdldFRvcHNpZGVWaWV3KCk7XG4gICAgICAgICAgICBpZiAodG9wKSB7XG4gICAgICAgICAgICAgICAgdG9wc2lkZSA9IHRvcDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9wc2lkZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGlkZUFuaW1hUGxheWluZ1ZpZXcoKSB7XG4gICAgICAgIHRoaXMudWkuaGlkZUFuaW1hUGxheWluZ1ZpZXcoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd0FuaW1hUGxheWluZ1ZpZXcoKSB7XG4gICAgICAgIHRoaXMudWkuc2hvd0FuaW1hUGxheWluZ1ZpZXcoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9ja1NjcmVlbihkdXJhdGlvbjogbnVtYmVyID0gMCkge1xuICAgICAgICBsZXQgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xuICAgICAgICBsZXQgbG9ja1NjcmVlbiA9IHNjZW5lLmdldENoaWxkQnlOYW1lKFwibG9ja1NjcmVlblwiKTtcbiAgICAgICAgaWYgKCFsb2NrU2NyZWVuKSB7XG4gICAgICAgICAgICBsb2NrU2NyZWVuID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgICAgIGxldCBjb21wID0gbG9ja1NjcmVlbi5hZGRDb21wb25lbnQoY2MuQmxvY2tJbnB1dEV2ZW50cyk7XG4gICAgICAgICAgICBsb2NrU2NyZWVuLnBhcmVudCA9IHNjZW5lO1xuICAgICAgICAgICAgbG9ja1NjcmVlbi56SW5kZXggPSAxMDAwMDtcbiAgICAgICAgICAgIGxvY2tTY3JlZW4ud2lkdGggPSBjYy53aW5TaXplLndpZHRoO1xuICAgICAgICAgICAgbG9ja1NjcmVlbi5oZWlnaHQgPSBjYy53aW5TaXplLmhlaWdodDtcbiAgICAgICAgICAgIGxvY2tTY3JlZW4ueCA9IGNjLndpblNpemUud2lkdGggKiAwLjU7XG4gICAgICAgICAgICBsb2NrU2NyZWVuLnkgPSBjYy53aW5TaXplLmhlaWdodCAqIDAuNTtcbiAgICAgICAgICAgIGxvY2tTY3JlZW4ubmFtZSA9IFwibG9ja1NjcmVlblwiO1xuXG4gICAgICAgICAgICBpZiAoZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBjb21wLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5sb2NrU2NyZWVuKCk7XG4gICAgICAgICAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHVubG9ja1NjcmVlbigpIHtcbiAgICAgICAgbGV0IHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcbiAgICAgICAgbGV0IGxvY2tTY3JlZW4gPSBzY2VuZS5nZXRDaGlsZEJ5TmFtZShcImxvY2tTY3JlZW5cIik7XG4gICAgICAgIGlmIChsb2NrU2NyZWVuKSB7XG4gICAgICAgICAgICBsb2NrU2NyZWVuLmdldENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKS51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICBsb2NrU2NyZWVuLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGxvY2tTY3JlZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXV0b1NpemUoKSB7XG4gICAgICAgIHRoaXMucm9vdC5nZXRDb21wb25lbnQoR1VJKS5hdXRvU2l6ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaXhlZFdpZHRoKCkge1xuICAgICAgICB0aGlzLnJvb3QuZ2V0Q29tcG9uZW50KEdVSSkuZml4ZWRXaWR0aCgpO1xuICAgIH1cblxuICAgIC8qKiDpnZnmgIHmiJDlkZggKi9cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IExheWVyTWFuYWdlciA9IG51bGxcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IExheWVyTWFuYWdlciB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IExheWVyTWFuYWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBpbnRlcmZhY2UgSUMyRiB7XG4gICAgICAgIGd1aTogTGF5ZXJNYW5hZ2VyO1xuICAgIH1cbn1cblxuYzJmLmd1aSA9IExheWVyTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuZXhwb3J0IHsgfTsiXX0=