"use strict";
cc._RF.push(module, '31cebtLGGZGya1S2OhadRSa', 'LayerUI');
// c2f-framework/gui/layer/LayerUI.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerUI = void 0;
/*
 * UI基础层，允许添加多个预制件节点
 * add          : 添加一个预制件节点到层容器中，该方法将返回一个唯一uuid来标识该操作Node节点。
 * delete       : 根据uuid删除Node节点，如果节点还在队列中也会被删除, 删除节点可以用gui.delete(node)或this.node.destroy()
 * deleteByUuid : 根据预制件路径删除，预制件如在队列中也会被删除，如果该预制件存在多个也会一起删除。
 * get          : 根据uuid获取Node节点，如果节点不存在或者预制件还在队列中，则返回null 。
 * getByUuid    : 根据预制件路径获取当前显示的该预制件的所有Node节点数组。
 * has          : 判断当前层是否包含 uuid或预制件路径对应的Node节点。
 * find         : 判断当前层是否包含 uuid或预制件路径对应的Node节点。
 * size         : 当前层上显示的所有Node节点数。
 * clear        : 清除所有Node节点，队列当中未创建的任务也会被清除。
 */
var BlurScreen_1 = require("../../component/common/BlurScreen");
var C2FConst_1 = require("../../define/C2FConst");
var C2FUIDef_1 = require("../../define/C2FUIDef");
var DelegateComponent_1 = require("./DelegateComponent");
var UIViewBase_1 = require("./UIViewBase");
/** 界面层对象 */
var LayerUI = /** @class */ (function (_super) {
    __extends(LayerUI, _super);
    /**
     * UI基础层，允许添加多个预制件节点
     * @param name 该层名
     * @param container 容器Node
     */
    function LayerUI(name) {
        var _this = _super.call(this, name) || this;
        /** 界面节点集合 */
        _this.ui_nodes = new Map();
        /** 被移除的界面缓存数据 */
        _this.ui_cache = new Map();
        var widget = _this.addComponent(cc.Widget);
        widget.isAlignLeft = widget.isAlignRight = widget.isAlignTop = widget.isAlignBottom = true;
        widget.left = widget.right = widget.top = widget.bottom = 0;
        widget.alignMode = cc.Widget.AlignMode.ON_WINDOW_RESIZE;
        widget.enabled = true;
        _this.arrPlayingView = [];
        _this.addingView = [];
        _this.createBlur();
        return _this;
    }
    LayerUI.prototype.createBlur = function () {
        if (this.name != C2FUIDef_1.LayerType.UI) {
            return;
        }
        //模糊背景节点
        var blurNode = new cc.Node('blurScreen');
        this.addChild(blurNode);
        this.blurScn = blurNode.addComponent(BlurScreen_1.default);
        this.blurScn.initUI();
    };
    /** 构造一个唯一标识UUID */
    LayerUI.prototype.getUuid = function (prefabPath) {
        var uuid = this.name + "_" + prefabPath;
        return uuid.replace(/\//g, "_");
    };
    /** 获得窗口参数 */
    LayerUI.prototype.getViewParam = function (config) {
        var prefabPath = config.prefab;
        var uuid = this.getUuid(prefabPath);
        var viewParams = this.ui_nodes.get(uuid);
        return viewParams;
    };
    /** 设置头部节点 */
    LayerUI.prototype.setTopPanel = function (panel) {
        this.topPanel = panel;
        this.topPanel.parent = this;
    };
    /**
     * 添加一个预制件节点到层容器中，该方法将返回一个唯一`uuid`来标识该操作节点
     * @param prefabPath 预制件路径
     * @param params     自定义参数
     * @param callbacks  回调函数对象，可选
     */
    LayerUI.prototype.add = function (config, params, callbacks) {
        console.log('open layer:', config.prefab);
        var prefabPath = config.prefab;
        var uuid = this.getUuid(prefabPath);
        var viewParams = this.ui_nodes.get(uuid);
        if (viewParams && viewParams.valid) {
            cc.warn("\u8DEF\u5F84\u4E3A\u3010" + prefabPath + "\u3011\u7684\u9884\u5236\u91CD\u590D\u52A0\u8F7D");
            if (viewParams.node && viewParams.node.isValid) {
                this.removeAboveUI(prefabPath);
                var clsName = this.getMVCClsName(prefabPath);
                var comp = viewParams.node.getComponent(clsName);
                if (comp && comp['onViewRefresh']) {
                    comp['onViewRefresh'](params);
                }
            }
            return "";
        }
        if (viewParams == null) {
            viewParams = new C2FUIDef_1.ViewParams();
            viewParams.uuid = uuid;
            viewParams.uiCfg = config;
            viewParams.prefabPath = prefabPath;
            viewParams.bundle = config.bundle;
            this.ui_nodes.set(viewParams.uuid, viewParams);
        }
        viewParams.params = params || {};
        viewParams.callbacks = callbacks || {};
        viewParams.valid = true;
        this.load(viewParams, config.bundle);
        return uuid;
    };
    /**
     * 加载界面资源
     * @param viewParams 显示参数
     * @param bundle     远程资源包名，如果为空就是默认本地资源包
     */
    LayerUI.prototype.load = function (viewPa, bundle) {
        var vp = this.ui_nodes.get(viewPa.uuid);
        if (vp && vp.node) {
            this.createNode(vp);
        }
        else {
            //由于异步，加载完成后在此列表中的界面才加进游戏
            this.addingView.push(viewPa.prefabPath);
            // 获取预制件资源
            bundle = bundle || "resources";
            c2f.res.load(bundle, viewPa.prefabPath, this.afterLoadPrefab.bind(this, viewPa));
        }
    };
    LayerUI.prototype.afterLoadPrefab = function (viewPa, err, res) {
        if (err) {
            cc.error(err);
        }
        if (this.addingView.indexOf(viewPa.prefabPath) >= 0) {
            var childNode = c2f.res.instantiate(res);
            viewPa.node = childNode;
            var comp = childNode.addComponent(DelegateComponent_1.DelegateComponent);
            comp.viewParams = viewPa;
            //
            this.addMVCComponet(childNode, viewPa.prefabPath);
            this.createNode(viewPa);
            //
            c2f.utils.arr.fastRemove(this.addingView, viewPa.prefabPath);
        }
        else {
            cc.warn("failed add view [" + viewPa.prefabPath + "], don't find in addingView! addingView:", this.addingView);
        }
    };
    LayerUI.prototype.getMVCClsName = function (prefabPath) {
        var clsName = prefabPath;
        var idx = prefabPath.lastIndexOf('/');
        if (idx >= 0) {
            clsName = prefabPath.substring(idx + 1);
        }
        if (clsName.startsWith('P_') || clsName.startsWith('V_') || clsName.startsWith('F_')) {
            clsName = clsName.substring(2);
        }
        return clsName;
    };
    /** 为view添加mvc组件 */
    LayerUI.prototype.addMVCComponet = function (node, prefabPath) {
        var clsName = this.getMVCClsName(prefabPath);
        var model = node.addComponent(clsName + "Model");
        var view = node.addComponent(clsName + "View");
        var controller = node.addComponent(clsName);
        controller.model = model;
        controller.view = view;
    };
    /**
     * 创建界面节点
     * @param viewParams  视图参数
     */
    LayerUI.prototype.createNode = function (viewPa) {
        viewPa.valid = true;
        var children = this.__nodes();
        var zFloor = 0;
        var len = children.length;
        if (len > 0) {
            zFloor = Math.floor((children[len - 1].node.zIndex || 0) / 10);
        }
        viewPa.node.zIndex = (zFloor + 1) * 10;
        viewPa.node.parent = this;
        var comp = viewPa.node.getComponent(DelegateComponent_1.DelegateComponent);
        comp.add();
        //弹出界面可见性刷新
        this.refreshLayerUIVisible();
        //按配置播放背景音乐
        var mvcClsName = this.getMVCClsName(viewPa.prefabPath);
        if (C2FConst_1.C2FConst.UIBgmNames.hasOwnProperty(mvcClsName)) {
            var url = C2FConst_1.C2FConst.UIMusicPath + C2FConst_1.C2FConst.UIBgmNames[mvcClsName];
            c2f.audio.playBgmURL(url);
        }
        //弹窗音效
        if (viewPa.uiCfg && viewPa.uiCfg.layer != C2FUIDef_1.LayerType.UI) {
            if (C2FConst_1.C2FConst.UIViewEftName.hasOwnProperty(mvcClsName)) {
                var file = C2FConst_1.C2FConst.UIViewEftName[mvcClsName];
                if (file.length > 0) {
                    var url = C2FConst_1.C2FConst.UIAudioPath + C2FConst_1.C2FConst.UIViewEftName[mvcClsName];
                    c2f.audio.playSfxURL(url);
                }
            }
            else {
            }
        }
        return viewPa.node;
    };
    /** 刷新子节点可见性：
     * 1、最顶层全屏界面显示，其后面的隐藏
     * 2、topPanel的层级紧贴其附属层级
     */
    LayerUI.prototype.refreshLayerUIVisible = function () {
        if (this.name != C2FUIDef_1.LayerType.UI) {
            return;
        }
        var children = this.__nodes();
        var lastIdx = children.length - 1;
        var findFull = false;
        var topOwned = null;
        for (var i = lastIdx; i >= 0; --i) {
            var one = children[i];
            if (!one.isValid) {
                continue;
            }
            one.node.active = !findFull;
            var viewPa = one.viewParams;
            //topPanel归属处理
            if (this.topPanel && !topOwned && viewPa.uiCfg.showTop) {
                topOwned = one;
                this.topPanel.zIndex = one.node.zIndex + 1;
                this.topPanel.active = one.node.active;
            }
            //当前为最上层显示界面时，当前为全屏界面则后面全部隐藏，当前为非全屏时，创建模糊背景后全部隐藏。
            if (one.node.active) {
                var blurEnable = true;
                if (viewPa.uiCfg) {
                    blurEnable = !viewPa.uiCfg.noBlurScn;
                }
                if (blurEnable) {
                    var isPopLayer = !viewPa.uiCfg || viewPa.uiCfg.layer != C2FUIDef_1.LayerType.UI;
                    if (this.blurScn) {
                        this.blurScn.node.active = isPopLayer;
                        if (isPopLayer) {
                            var preFloorW = '';
                            if (i > 1) {
                                preFloorW = children[i - 1].node.name;
                            }
                            this.blurScn.addBlurBg(one.node.name, function () { }, preFloorW);
                            this.blurScn.node.zIndex = one.node.zIndex - 1;
                        }
                    }
                    findFull = true;
                }
                else {
                    findFull = viewPa.uiCfg && viewPa.uiCfg.layer == C2FUIDef_1.LayerType.UI;
                }
            }
        }
    };
    /**
     * 根据预制件路径删除，预制件如在队列中也会被删除，如果该预制件存在多个也会一起删除
     * @param prefabPath   预制路径
     * @param isDestroy    移除后是否释放
     */
    LayerUI.prototype.remove = function (prefabPath, isDestroy) {
        // 验证是否删除后台缓存界面
        if (isDestroy)
            this.removeCache(prefabPath);
        var targetName = '';
        // 界面移出舞台
        var children = this.__nodes();
        for (var i = 0; i < children.length; i++) {
            var dstComp = children[i];
            var viewPa = dstComp.viewParams;
            if (viewPa.prefabPath === prefabPath) {
                if (isDestroy) {
                    // 直接释放界面
                    this.ui_nodes.delete(viewPa.uuid);
                }
                else {
                    // 不释放界面，缓存起来待下次使用
                    this.ui_cache.set(viewPa.prefabPath, viewPa);
                }
                dstComp.remove(isDestroy);
                targetName = dstComp.node.name;
                viewPa.valid = false;
            }
        }
        this.refreshLayerUIVisible();
        if (this.blurScn) {
            this.blurScn.removedBlurBg(targetName);
        }
        //按配置结束背景音乐
        var mvcClsName = this.getMVCClsName(prefabPath);
        if (C2FConst_1.C2FConst.UIBgmNames.hasOwnProperty(mvcClsName)) {
            c2f.audio.endCurMusic();
        }
    };
    /** 移除目标界面之上的所有界面 */
    LayerUI.prototype.removeAboveUI = function (prefabPath) {
        while (true) {
            var children = this.__nodes();
            var lastIdx = children.length - 1;
            var lastItem = children[lastIdx];
            var lastViewPa = lastItem.viewParams;
            if (lastViewPa.prefabPath == prefabPath) {
                break;
            }
            this.remove(lastViewPa.prefabPath, true);
        }
    };
    /**
     * 根据唯一标识删除节点，如果节点还在队列中也会被删除
     * @param uuid  唯一标识
     */
    LayerUI.prototype.removeByUuid = function (uuid, isDestroy) {
        var viewPa = this.ui_nodes.get(uuid);
        if (viewPa) {
            if (isDestroy)
                this.ui_nodes.delete(viewPa.uuid);
            var childNode = viewPa.node;
            if (childNode && childNode.isValid) {
                var comp = childNode.getComponent(DelegateComponent_1.DelegateComponent);
                comp.remove(isDestroy);
            }
            this.refreshLayerUIVisible();
        }
    };
    /**
     * 删除缓存的界面，当缓存界面被移除舞台时，可通过此方法删除缓存界面
     */
    LayerUI.prototype.removeCache = function (prefabPath) {
        var viewPa = this.ui_cache.get(prefabPath);
        if (viewPa) {
            if (viewPa.node && viewPa.node.isValid) {
                var childNode = viewPa.node;
                var comp = childNode.getComponent(DelegateComponent_1.DelegateComponent);
                comp.remove(true);
            }
            else {
                cc.warn('removeCache: dst node is invalid!');
            }
            this.ui_nodes.delete(viewPa.uuid);
            this.ui_cache.delete(prefabPath);
        }
    };
    /**
     * 根据唯一标识获取节点，如果节点不存在或者还在队列中，则返回null
     * @param uuid  唯一标识
     */
    LayerUI.prototype.getByUuid = function (uuid) {
        var children = this.__nodes();
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var comp = children_1[_i];
            if (comp.viewParams && comp.viewParams.uuid === uuid) {
                return comp.node;
            }
        }
        return null;
    };
    /**
     * 根据预制件路径获取当前显示的该预制件的所有Node节点数组
     * @param prefabPath
     */
    LayerUI.prototype.get = function (prefabPath) {
        var arr = [];
        var children = this.__nodes();
        for (var _i = 0, children_2 = children; _i < children_2.length; _i++) {
            var comp = children_2[_i];
            if (comp.viewParams.prefabPath === prefabPath) {
                arr.push(comp.node);
            }
        }
        return arr;
    };
    /**
     * 判断当前层是否包含 uuid或预制件路径对应的Node节点
     * @param prefabPathOrUUID 预制件路径或者UUID
     */
    LayerUI.prototype.has = function (prefabPathOrUUID) {
        var children = this.__nodes();
        for (var _i = 0, children_3 = children; _i < children_3.length; _i++) {
            var comp = children_3[_i];
            if (comp.viewParams.uuid === prefabPathOrUUID || comp.viewParams.prefabPath === prefabPathOrUUID) {
                return true;
            }
        }
        return false;
    };
    /**
     * 获取当前层包含指定正则匹配的Node节点。
     * @param prefabPathReg 匹配预制件路径的正则表达式对象
     */
    LayerUI.prototype.find = function (prefabPathReg) {
        var arr = [];
        var children = this.__nodes();
        for (var _i = 0, children_4 = children; _i < children_4.length; _i++) {
            var comp = children_4[_i];
            if (prefabPathReg.test(comp.viewParams.prefabPath)) {
                arr.push(comp.node);
            }
        }
        return arr;
    };
    /** 获取当前层所有窗口事件触发组件 */
    LayerUI.prototype.__nodes = function () {
        var result = [];
        var children = this.children;
        for (var i = 0; i < children.length; i++) {
            var comp = children[i].getComponent(DelegateComponent_1.DelegateComponent);
            if (comp && comp.viewParams && comp.viewParams.valid && cc.isValid(comp)) {
                result.push(comp);
            }
        }
        return result;
    };
    /** 层节点数量 */
    LayerUI.prototype.size = function () {
        return this.children.length;
    };
    /**
     * 清除所有节点，队列当中的也删除
     * @param isDestroy  移除后是否释放
     */
    LayerUI.prototype.clearUI = function (isDestroy, excludePrefab) {
        var _this = this;
        if (excludePrefab === void 0) { excludePrefab = []; }
        // 清除所有显示的界面
        this.ui_nodes.forEach(function (value, key) {
            var needDel = true;
            if (excludePrefab.length > 0) {
                needDel = excludePrefab.indexOf(value.prefabPath) < 0;
            }
            if (needDel) {
                _this.removeByUuid(value.uuid, isDestroy);
                value.valid = false;
                _this.ui_nodes.delete(key);
            }
        });
        // 清除缓存中的界面
        if (isDestroy) {
            this.ui_cache.forEach(function (value, prefabPath) {
                _this.removeCache(prefabPath);
            });
        }
        //
        if (this.blurScn) {
            this.blurScn.cleanBlurBg();
        }
        //清空adding
        this.addingView = [];
    };
    /** 获得节点View参数 */
    LayerUI.prototype.getPrefabUrlByNode = function (node) {
        var prefabUrl = null;
        this.ui_nodes.forEach(function (value, key) {
            if (value.node == node) {
                prefabUrl = value.prefabPath;
            }
        });
        return prefabUrl;
    };
    LayerUI.prototype.getTopsideView = function () {
        var topside = null;
        var children = this.__nodes();
        var lastIdx = children.length - 1;
        for (var i = lastIdx; i >= 0; --i) {
            var one = children[i];
            if (!one.isValid) {
                continue;
            }
            var viewPa = one.viewParams;
            if (!viewPa.valid) {
                continue;
            }
            topside = one.node;
            break;
        }
        return topside;
    };
    /** 隐藏正在播放出入场动画的view */
    LayerUI.prototype.hideAnimaPlayingView = function () {
        var children = this.__nodes();
        for (var i = 0; i < children.length; i++) {
            var dstComp = children[i];
            if (!dstComp.node.active) {
                continue;
            }
            var viewPa = dstComp.viewParams;
            if (!viewPa.valid) {
                continue;
            }
            var prefComp = dstComp.node.getComponent(UIViewBase_1.UIViewBase);
            if (prefComp && prefComp.animaPlaying) {
                dstComp.node.active = false;
                this.arrPlayingView.push(dstComp.node);
            }
        }
    };
    /** 显示正在播放出入场动画的view */
    LayerUI.prototype.showAnimaPlayingView = function () {
        for (var _i = 0, _a = this.arrPlayingView; _i < _a.length; _i++) {
            var one = _a[_i];
            one.active = true;
        }
        this.arrPlayingView = [];
    };
    return LayerUI;
}(cc.Node));
exports.LayerUI = LayerUI;

cc._RF.pop();