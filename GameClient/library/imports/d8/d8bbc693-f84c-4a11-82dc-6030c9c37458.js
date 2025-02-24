"use strict";
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