
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/gui/layer/LayerUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9MYXllclVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7R0FXRztBQUNILGdFQUEyRDtBQUMzRCxrREFBaUQ7QUFDakQsa0RBQXFGO0FBQ3JGLHlEQUF3RDtBQUV4RCwyQ0FBMEM7QUFFMUMsWUFBWTtBQUNaO0lBQTZCLDJCQUFPO0lBY2hDOzs7O09BSUc7SUFDSCxpQkFBWSxJQUFZO1FBQXhCLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLFNBWWQ7UUEvQkQsYUFBYTtRQUNILGNBQVEsR0FBRyxJQUFJLEdBQUcsRUFBc0IsQ0FBQztRQUNuRCxpQkFBaUI7UUFDUCxjQUFRLEdBQUcsSUFBSSxHQUFHLEVBQXNCLENBQUM7UUFrQi9DLElBQUksTUFBTSxHQUFjLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzNGLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzVELE1BQU0sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUM7UUFDeEQsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFdEIsS0FBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsS0FBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFFckIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOztJQUN0QixDQUFDO0lBRU8sNEJBQVUsR0FBbEI7UUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksb0JBQVMsQ0FBQyxFQUFFLEVBQUU7WUFDM0IsT0FBTztTQUNWO1FBQ0QsUUFBUTtRQUNSLElBQUksUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxvQkFBVSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsbUJBQW1CO0lBQ1QseUJBQU8sR0FBakIsVUFBa0IsVUFBa0I7UUFDaEMsSUFBSSxJQUFJLEdBQU0sSUFBSSxDQUFDLElBQUksU0FBSSxVQUFZLENBQUM7UUFDeEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsYUFBYTtJQUNOLDhCQUFZLEdBQW5CLFVBQW9CLE1BQWdCO1FBQ2hDLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDL0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO0lBRUQsYUFBYTtJQUNOLDZCQUFXLEdBQWxCLFVBQXNDLEtBQVE7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLHFCQUFHLEdBQVYsVUFBVyxNQUFnQixFQUFFLE1BQVksRUFBRSxTQUF1QjtRQUM5RCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUMvQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxLQUFLLEVBQUU7WUFDaEMsRUFBRSxDQUFDLElBQUksQ0FBQyw2QkFBTyxVQUFVLHFEQUFVLENBQUMsQ0FBQztZQUNyQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQy9CLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzdDLElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUU7b0JBQy9CLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDakM7YUFDSjtZQUNELE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFDRCxJQUFJLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFDcEIsVUFBVSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO1lBQzlCLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQzFCLFVBQVUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBRW5DLFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsVUFBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ2pDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsU0FBUyxJQUFJLEVBQUUsQ0FBQztRQUN2QyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUV4QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFcEMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxzQkFBSSxHQUFkLFVBQWUsTUFBa0IsRUFBRSxNQUFlO1FBQzlDLElBQUksRUFBRSxHQUFlLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUUsQ0FBQztRQUNyRCxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN2QjthQUNJO1lBQ0QseUJBQXlCO1lBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUV4QyxVQUFVO1lBQ1YsTUFBTSxHQUFHLE1BQU0sSUFBSSxXQUFXLENBQUM7WUFDL0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDcEY7SUFDTCxDQUFDO0lBRU8saUNBQWUsR0FBdkIsVUFBd0IsTUFBa0IsRUFBRSxHQUFpQixFQUFFLEdBQWM7UUFDekUsSUFBSSxHQUFHLEVBQUU7WUFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2pELElBQUksU0FBUyxHQUFZLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1lBQ3hCLElBQUksSUFBSSxHQUFzQixTQUFTLENBQUMsWUFBWSxDQUFDLHFDQUFpQixDQUFDLENBQUM7WUFDeEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7WUFDekIsRUFBRTtZQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUNqRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hCLEVBQUU7WUFDRixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDaEU7YUFBTTtZQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQW9CLE1BQU0sQ0FBQyxVQUFVLDZDQUEwQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM3RztJQUNMLENBQUM7SUFFTywrQkFBYSxHQUFyQixVQUFzQixVQUFrQjtRQUNwQyxJQUFJLE9BQU8sR0FBRyxVQUFVLENBQUM7UUFDekIsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDVixPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xGLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELG1CQUFtQjtJQUNULGdDQUFjLEdBQXhCLFVBQXlCLElBQWEsRUFBRSxVQUFrQjtRQUN0RCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUksT0FBTyxVQUFPLENBQUMsQ0FBQztRQUNqRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFJLE9BQU8sU0FBTSxDQUFlLENBQUM7UUFDN0QsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QyxVQUFVLENBQUMsS0FBSyxHQUFHLEtBQW9CLENBQUM7UUFDeEMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7T0FHRztJQUNPLDRCQUFVLEdBQXBCLFVBQXFCLE1BQWtCO1FBQ25DLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRXBCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM5QixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDZixJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQzVCLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtZQUNULE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ2xFO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUUxQixJQUFJLElBQUksR0FBc0IsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMscUNBQWlCLENBQUUsQ0FBQztRQUMzRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFWCxXQUFXO1FBQ1gsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsV0FBVztRQUNYLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksbUJBQVEsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2hELElBQUksR0FBRyxHQUFHLG1CQUFRLENBQUMsV0FBVyxHQUFHLG1CQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pFLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsTUFBTTtRQUNOLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxvQkFBUyxDQUFDLEVBQUUsRUFBRTtZQUNwRCxJQUFJLG1CQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDbkQsSUFBSSxJQUFJLEdBQUcsbUJBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzlDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ2pCLElBQUksR0FBRyxHQUFHLG1CQUFRLENBQUMsV0FBVyxHQUFHLG1CQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNwRSxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDN0I7YUFDSjtpQkFBTTthQUNOO1NBQ0o7UUFDRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7T0FHRztJQUNLLHVDQUFxQixHQUE3QjtRQUNJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxvQkFBUyxDQUFDLEVBQUUsRUFBRTtZQUMzQixPQUFPO1NBQ1Y7UUFFRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUIsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFbEMsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztRQUNwQixLQUFLLElBQUksQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQy9CLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtnQkFDZCxTQUFTO2FBQ1o7WUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUM1QixJQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQzlCLGNBQWM7WUFDZCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7Z0JBQ3BELFFBQVEsR0FBRyxHQUFHLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUMxQztZQUNELGlEQUFpRDtZQUNqRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNqQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtvQkFDZCxVQUFVLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztpQkFDeEM7Z0JBQ0QsSUFBSSxVQUFVLEVBQUU7b0JBQ1osSUFBSSxVQUFVLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLG9CQUFTLENBQUMsRUFBRSxDQUFDO29CQUNyRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7d0JBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQzt3QkFDdEMsSUFBSSxVQUFVLEVBQUU7NEJBQ1osSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDOzRCQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0NBQ1AsU0FBUyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs2QkFDekM7NEJBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsY0FBUSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7NEJBQzVELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7eUJBQ2xEO3FCQUNKO29CQUNELFFBQVEsR0FBRyxJQUFJLENBQUM7aUJBQ25CO3FCQUFNO29CQUNILFFBQVEsR0FBRyxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLG9CQUFTLENBQUMsRUFBRSxDQUFDO2lCQUNqRTthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHdCQUFNLEdBQWIsVUFBYyxVQUFrQixFQUFFLFNBQWtCO1FBQ2hELGVBQWU7UUFDZixJQUFJLFNBQVM7WUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTVDLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNwQixTQUFTO1FBQ1QsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ2hDLElBQUksTUFBTSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7Z0JBQ2xDLElBQUksU0FBUyxFQUFFO29CQUNYLFNBQVM7b0JBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNyQztxQkFDSTtvQkFDRCxrQkFBa0I7b0JBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQ2hEO2dCQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzFCLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDL0IsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDeEI7U0FDSjtRQUNELElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsV0FBVztRQUNYLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEQsSUFBSSxtQkFBUSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDaEQsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFFRCxvQkFBb0I7SUFDYiwrQkFBYSxHQUFwQixVQUFxQixVQUFrQjtRQUNuQyxPQUFPLElBQUksRUFBRTtZQUNULElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM5QixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNsQyxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkMsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUN2QyxJQUFJLFVBQVUsQ0FBQyxVQUFVLElBQUksVUFBVSxFQUFFO2dCQUNyQyxNQUFNO2FBQ1Q7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDNUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sOEJBQVksR0FBdEIsVUFBdUIsSUFBWSxFQUFFLFNBQWtCO1FBQ25ELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksTUFBTSxFQUFFO1lBQ1IsSUFBSSxTQUFTO2dCQUNULElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV0QyxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzVCLElBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hDLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMscUNBQWlCLENBQUUsQ0FBQztnQkFDdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMxQjtZQUNELElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ssNkJBQVcsR0FBbkIsVUFBb0IsVUFBa0I7UUFDbEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0MsSUFBSSxNQUFNLEVBQUU7WUFDUixJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3BDLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQzVCLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMscUNBQWlCLENBQUUsQ0FBQTtnQkFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyQjtpQkFBTTtnQkFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7YUFDaEQ7WUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksMkJBQVMsR0FBaEIsVUFBaUIsSUFBWTtRQUN6QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUIsS0FBaUIsVUFBUSxFQUFSLHFCQUFRLEVBQVIsc0JBQVEsRUFBUixJQUFRLEVBQUU7WUFBdEIsSUFBSSxJQUFJLGlCQUFBO1lBQ1QsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtnQkFDbEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3BCO1NBQ0o7UUFDRCxPQUFPLElBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0kscUJBQUcsR0FBVixVQUFXLFVBQWtCO1FBQ3pCLElBQUksR0FBRyxHQUFtQixFQUFFLENBQUM7UUFDN0IsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlCLEtBQWlCLFVBQVEsRUFBUixxQkFBUSxFQUFSLHNCQUFRLEVBQVIsSUFBUSxFQUFFO1lBQXRCLElBQUksSUFBSSxpQkFBQTtZQUNULElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO2dCQUMzQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2QjtTQUNKO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQ7OztPQUdHO0lBQ0kscUJBQUcsR0FBVixVQUFXLGdCQUF3QjtRQUMvQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUIsS0FBaUIsVUFBUSxFQUFSLHFCQUFRLEVBQVIsc0JBQVEsRUFBUixJQUFRLEVBQUU7WUFBdEIsSUFBSSxJQUFJLGlCQUFBO1lBQ1QsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsS0FBSyxnQkFBZ0IsRUFBRTtnQkFDOUYsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHNCQUFJLEdBQVgsVUFBWSxhQUFxQjtRQUM3QixJQUFJLEdBQUcsR0FBYyxFQUFFLENBQUM7UUFDeEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlCLEtBQWlCLFVBQVEsRUFBUixxQkFBUSxFQUFSLHNCQUFRLEVBQVIsSUFBUSxFQUFFO1lBQXRCLElBQUksSUFBSSxpQkFBQTtZQUNULElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNoRCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2QjtTQUNKO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQsc0JBQXNCO0lBQ1oseUJBQU8sR0FBakI7UUFDSSxJQUFJLE1BQU0sR0FBNkIsRUFBRSxDQUFDO1FBQzFDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxxQ0FBaUIsQ0FBQyxDQUFDO1lBQ3ZELElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdEUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyQjtTQUNKO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELFlBQVk7SUFDTCxzQkFBSSxHQUFYO1FBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUNoQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0kseUJBQU8sR0FBZCxVQUFlLFNBQWtCLEVBQUUsYUFBNEI7UUFBL0QsaUJBMEJDO1FBMUJrQyw4QkFBQSxFQUFBLGtCQUE0QjtRQUMzRCxZQUFZO1FBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFpQixFQUFFLEdBQVc7WUFDakQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzFCLE9BQU8sR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDekQ7WUFDRCxJQUFJLE9BQU8sRUFBRTtnQkFDVCxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3pDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM3QjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsV0FBVztRQUNYLElBQUksU0FBUyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFpQixFQUFFLFVBQWtCO2dCQUN4RCxLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFDRCxFQUFFO1FBQ0YsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM5QjtRQUNELFVBQVU7UUFDVixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsaUJBQWlCO0lBQ1Ysb0NBQWtCLEdBQXpCLFVBQTBCLElBQWE7UUFDbkMsSUFBSSxTQUFTLEdBQVcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBaUIsRUFBRSxHQUFXO1lBQ2pELElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7Z0JBQ3BCLFNBQVMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO2FBQ2hDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRU0sZ0NBQWMsR0FBckI7UUFDSSxJQUFJLE9BQU8sR0FBWSxJQUFJLENBQUM7UUFDNUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlCLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDL0IsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO2dCQUNkLFNBQVM7YUFDWjtZQUNELElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7Z0JBQ2YsU0FBUzthQUNaO1lBQ0QsT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDbkIsTUFBTTtTQUNUO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELHVCQUF1QjtJQUNoQixzQ0FBb0IsR0FBM0I7UUFDSSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDdEIsU0FBUzthQUNaO1lBQ0QsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtnQkFDZixTQUFTO2FBQ1o7WUFDRCxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyx1QkFBVSxDQUFDLENBQUE7WUFDcEQsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLFlBQVksRUFBRTtnQkFDbkMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDMUM7U0FDSjtJQUNMLENBQUM7SUFFRCx1QkFBdUI7SUFDaEIsc0NBQW9CLEdBQTNCO1FBQ0ksS0FBZ0IsVUFBbUIsRUFBbkIsS0FBQSxJQUFJLENBQUMsY0FBYyxFQUFuQixjQUFtQixFQUFuQixJQUFtQixFQUFFO1lBQWhDLElBQUksR0FBRyxTQUFBO1lBQ1IsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ0wsY0FBQztBQUFELENBeGdCQSxBQXdnQkMsQ0F4Z0I0QixFQUFFLENBQUMsSUFBSSxHQXdnQm5DO0FBeGdCWSwwQkFBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBVSeWfuuehgOWxgu+8jOWFgeiuuOa3u+WKoOWkmuS4qumihOWItuS7tuiKgueCuVxuICogYWRkICAgICAgICAgIDog5re75Yqg5LiA5Liq6aKE5Yi25Lu26IqC54K55Yiw5bGC5a655Zmo5Lit77yM6K+l5pa55rOV5bCG6L+U5Zue5LiA5Liq5ZSv5LiAdXVpZOadpeagh+ivhuivpeaTjeS9nE5vZGXoioLngrnjgIJcbiAqIGRlbGV0ZSAgICAgICA6IOagueaNrnV1aWTliKDpmaROb2Rl6IqC54K577yM5aaC5p6c6IqC54K56L+Y5Zyo6Zif5YiX5Lit5Lmf5Lya6KKr5Yig6ZmkLCDliKDpmaToioLngrnlj6/ku6XnlKhndWkuZGVsZXRlKG5vZGUp5oiWdGhpcy5ub2RlLmRlc3Ryb3koKVxuICogZGVsZXRlQnlVdWlkIDog5qC55o2u6aKE5Yi25Lu26Lev5b6E5Yig6Zmk77yM6aKE5Yi25Lu25aaC5Zyo6Zif5YiX5Lit5Lmf5Lya6KKr5Yig6Zmk77yM5aaC5p6c6K+l6aKE5Yi25Lu25a2Y5Zyo5aSa5Liq5Lmf5Lya5LiA6LW35Yig6Zmk44CCXG4gKiBnZXQgICAgICAgICAgOiDmoLnmja51dWlk6I635Y+WTm9kZeiKgueCue+8jOWmguaenOiKgueCueS4jeWtmOWcqOaIluiAhemihOWItuS7tui/mOWcqOmYn+WIl+S4re+8jOWImei/lOWbnm51bGwg44CCXG4gKiBnZXRCeVV1aWQgICAgOiDmoLnmja7pooTliLbku7bot6/lvoTojrflj5blvZPliY3mmL7npLrnmoTor6XpooTliLbku7bnmoTmiYDmnIlOb2Rl6IqC54K55pWw57uE44CCXG4gKiBoYXMgICAgICAgICAgOiDliKTmlq3lvZPliY3lsYLmmK/lkKbljIXlkKsgdXVpZOaIlumihOWItuS7tui3r+W+hOWvueW6lOeahE5vZGXoioLngrnjgIJcbiAqIGZpbmQgICAgICAgICA6IOWIpOaWreW9k+WJjeWxguaYr+WQpuWMheWQqyB1dWlk5oiW6aKE5Yi25Lu26Lev5b6E5a+55bqU55qETm9kZeiKgueCueOAglxuICogc2l6ZSAgICAgICAgIDog5b2T5YmN5bGC5LiK5pi+56S655qE5omA5pyJTm9kZeiKgueCueaVsOOAglxuICogY2xlYXIgICAgICAgIDog5riF6Zmk5omA5pyJTm9kZeiKgueCue+8jOmYn+WIl+W9k+S4reacquWIm+W7uueahOS7u+WKoeS5n+S8muiiq+a4hemZpOOAglxuICovXG5pbXBvcnQgQmx1clNjcmVlbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50L2NvbW1vbi9CbHVyU2NyZWVuXCI7XG5pbXBvcnQgeyBDMkZDb25zdCB9IGZyb20gXCIuLi8uLi9kZWZpbmUvQzJGQ29uc3RcIjtcbmltcG9ydCB7IExheWVyVHlwZSwgVUlDYWxsYmFja3MsIFVJQ29uZmlnLCBWaWV3UGFyYW1zIH0gZnJvbSBcIi4uLy4uL2RlZmluZS9DMkZVSURlZlwiO1xuaW1wb3J0IHsgRGVsZWdhdGVDb21wb25lbnQgfSBmcm9tIFwiLi9EZWxlZ2F0ZUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVUlNb2RlbEJhc2UgfSBmcm9tIFwiLi9VSU1vZGVsQmFzZVwiO1xuaW1wb3J0IHsgVUlWaWV3QmFzZSB9IGZyb20gXCIuL1VJVmlld0Jhc2VcIjtcblxuLyoqIOeVjOmdouWxguWvueixoSAqL1xuZXhwb3J0IGNsYXNzIExheWVyVUkgZXh0ZW5kcyBjYy5Ob2RlIHtcbiAgICAvKiog55WM6Z2i6IqC54K56ZuG5ZCIICovXG4gICAgcHJvdGVjdGVkIHVpX25vZGVzID0gbmV3IE1hcDxzdHJpbmcsIFZpZXdQYXJhbXM+KCk7XG4gICAgLyoqIOiiq+enu+mZpOeahOeVjOmdoue8k+WtmOaVsOaNriAqL1xuICAgIHByb3RlY3RlZCB1aV9jYWNoZSA9IG5ldyBNYXA8c3RyaW5nLCBWaWV3UGFyYW1zPigpO1xuICAgIC8qKiDpobbpg6jkv6Hmga8gKi9cbiAgICBwcml2YXRlIHRvcFBhbmVsOiBjYy5Ob2RlO1xuICAgIC8qKiDmqKHns4rog4zmma8gKi9cbiAgICBwcml2YXRlIGJsdXJTY246IEJsdXJTY3JlZW47XG4gICAgLyoqIOiiq+makOiXj+eahOato+WcqOWHuuWFpeWcuueahHZpZXcgKi9cbiAgICBwcml2YXRlIGFyclBsYXlpbmdWaWV3OiBjYy5Ob2RlW107XG4gICAgLyoqIOato+WcqOa3u+WKoOeahOeVjOmdoiAqL1xuICAgIHByaXZhdGUgYWRkaW5nVmlldzogc3RyaW5nW107XG5cbiAgICAvKipcbiAgICAgKiBVSeWfuuehgOWxgu+8jOWFgeiuuOa3u+WKoOWkmuS4qumihOWItuS7tuiKgueCuVxuICAgICAqIEBwYXJhbSBuYW1lIOivpeWxguWQjVxuICAgICAqIEBwYXJhbSBjb250YWluZXIg5a655ZmoTm9kZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihuYW1lKTtcblxuICAgICAgICBsZXQgd2lkZ2V0OiBjYy5XaWRnZXQgPSB0aGlzLmFkZENvbXBvbmVudChjYy5XaWRnZXQpO1xuICAgICAgICB3aWRnZXQuaXNBbGlnbkxlZnQgPSB3aWRnZXQuaXNBbGlnblJpZ2h0ID0gd2lkZ2V0LmlzQWxpZ25Ub3AgPSB3aWRnZXQuaXNBbGlnbkJvdHRvbSA9IHRydWU7XG4gICAgICAgIHdpZGdldC5sZWZ0ID0gd2lkZ2V0LnJpZ2h0ID0gd2lkZ2V0LnRvcCA9IHdpZGdldC5ib3R0b20gPSAwO1xuICAgICAgICB3aWRnZXQuYWxpZ25Nb2RlID0gY2MuV2lkZ2V0LkFsaWduTW9kZS5PTl9XSU5ET1dfUkVTSVpFO1xuICAgICAgICB3aWRnZXQuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5hcnJQbGF5aW5nVmlldyA9IFtdO1xuICAgICAgICB0aGlzLmFkZGluZ1ZpZXcgPSBbXTtcblxuICAgICAgICB0aGlzLmNyZWF0ZUJsdXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUJsdXIoKSB7XG4gICAgICAgIGlmICh0aGlzLm5hbWUgIT0gTGF5ZXJUeXBlLlVJKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy/mqKHns4rog4zmma/oioLngrlcbiAgICAgICAgbGV0IGJsdXJOb2RlID0gbmV3IGNjLk5vZGUoJ2JsdXJTY3JlZW4nKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChibHVyTm9kZSk7XG4gICAgICAgIHRoaXMuYmx1clNjbiA9IGJsdXJOb2RlLmFkZENvbXBvbmVudChCbHVyU2NyZWVuKTtcbiAgICAgICAgdGhpcy5ibHVyU2NuLmluaXRVSSgpO1xuICAgIH1cblxuICAgIC8qKiDmnoTpgKDkuIDkuKrllK/kuIDmoIfor4ZVVUlEICovXG4gICAgcHJvdGVjdGVkIGdldFV1aWQocHJlZmFiUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHV1aWQgPSBgJHt0aGlzLm5hbWV9XyR7cHJlZmFiUGF0aH1gO1xuICAgICAgICByZXR1cm4gdXVpZC5yZXBsYWNlKC9cXC8vZywgXCJfXCIpO1xuICAgIH1cblxuICAgIC8qKiDojrflvpfnqpflj6Plj4LmlbAgKi9cbiAgICBwdWJsaWMgZ2V0Vmlld1BhcmFtKGNvbmZpZzogVUlDb25maWcpIHtcbiAgICAgICAgbGV0IHByZWZhYlBhdGggPSBjb25maWcucHJlZmFiO1xuICAgICAgICBsZXQgdXVpZCA9IHRoaXMuZ2V0VXVpZChwcmVmYWJQYXRoKTtcbiAgICAgICAgbGV0IHZpZXdQYXJhbXMgPSB0aGlzLnVpX25vZGVzLmdldCh1dWlkKTtcbiAgICAgICAgcmV0dXJuIHZpZXdQYXJhbXM7XG4gICAgfVxuXG4gICAgLyoqIOiuvue9ruWktOmDqOiKgueCuSAqL1xuICAgIHB1YmxpYyBzZXRUb3BQYW5lbDxUIGV4dGVuZHMgY2MuTm9kZT4ocGFuZWw6IFQpIHtcbiAgICAgICAgdGhpcy50b3BQYW5lbCA9IHBhbmVsO1xuICAgICAgICB0aGlzLnRvcFBhbmVsLnBhcmVudCA9IHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5re75Yqg5LiA5Liq6aKE5Yi25Lu26IqC54K55Yiw5bGC5a655Zmo5Lit77yM6K+l5pa55rOV5bCG6L+U5Zue5LiA5Liq5ZSv5LiAYHV1aWRg5p2l5qCH6K+G6K+l5pON5L2c6IqC54K5XG4gICAgICogQHBhcmFtIHByZWZhYlBhdGgg6aKE5Yi25Lu26Lev5b6EXG4gICAgICogQHBhcmFtIHBhcmFtcyAgICAg6Ieq5a6a5LmJ5Y+C5pWwXG4gICAgICogQHBhcmFtIGNhbGxiYWNrcyAg5Zue6LCD5Ye95pWw5a+56LGh77yM5Y+v6YCJXG4gICAgICovXG4gICAgcHVibGljIGFkZChjb25maWc6IFVJQ29uZmlnLCBwYXJhbXM/OiBhbnksIGNhbGxiYWNrcz86IFVJQ2FsbGJhY2tzKTogc3RyaW5nIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29wZW4gbGF5ZXI6JywgY29uZmlnLnByZWZhYik7XG4gICAgICAgIGxldCBwcmVmYWJQYXRoID0gY29uZmlnLnByZWZhYjtcbiAgICAgICAgbGV0IHV1aWQgPSB0aGlzLmdldFV1aWQocHJlZmFiUGF0aCk7XG4gICAgICAgIGxldCB2aWV3UGFyYW1zID0gdGhpcy51aV9ub2Rlcy5nZXQodXVpZCk7XG4gICAgICAgIGlmICh2aWV3UGFyYW1zICYmIHZpZXdQYXJhbXMudmFsaWQpIHtcbiAgICAgICAgICAgIGNjLndhcm4oYOi3r+W+hOS4uuOAkCR7cHJlZmFiUGF0aH3jgJHnmoTpooTliLbph43lpI3liqDovb1gKTtcbiAgICAgICAgICAgIGlmICh2aWV3UGFyYW1zLm5vZGUgJiYgdmlld1BhcmFtcy5ub2RlLmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUFib3ZlVUkocHJlZmFiUGF0aCk7XG4gICAgICAgICAgICAgICAgbGV0IGNsc05hbWUgPSB0aGlzLmdldE1WQ0Nsc05hbWUocHJlZmFiUGF0aCk7XG4gICAgICAgICAgICAgICAgbGV0IGNvbXAgPSB2aWV3UGFyYW1zLm5vZGUuZ2V0Q29tcG9uZW50KGNsc05hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChjb21wICYmIGNvbXBbJ29uVmlld1JlZnJlc2gnXSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wWydvblZpZXdSZWZyZXNoJ10ocGFyYW1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmlld1BhcmFtcyA9PSBudWxsKSB7XG4gICAgICAgICAgICB2aWV3UGFyYW1zID0gbmV3IFZpZXdQYXJhbXMoKTtcbiAgICAgICAgICAgIHZpZXdQYXJhbXMudXVpZCA9IHV1aWQ7XG4gICAgICAgICAgICB2aWV3UGFyYW1zLnVpQ2ZnID0gY29uZmlnO1xuICAgICAgICAgICAgdmlld1BhcmFtcy5wcmVmYWJQYXRoID0gcHJlZmFiUGF0aDtcblxuICAgICAgICAgICAgdmlld1BhcmFtcy5idW5kbGUgPSBjb25maWcuYnVuZGxlO1xuICAgICAgICAgICAgdGhpcy51aV9ub2Rlcy5zZXQodmlld1BhcmFtcy51dWlkLCB2aWV3UGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICB2aWV3UGFyYW1zLnBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcbiAgICAgICAgdmlld1BhcmFtcy5jYWxsYmFja3MgPSBjYWxsYmFja3MgfHwge307XG4gICAgICAgIHZpZXdQYXJhbXMudmFsaWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMubG9hZCh2aWV3UGFyYW1zLCBjb25maWcuYnVuZGxlKVxuXG4gICAgICAgIHJldHVybiB1dWlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWKoOi9veeVjOmdoui1hOa6kFxuICAgICAqIEBwYXJhbSB2aWV3UGFyYW1zIOaYvuekuuWPguaVsFxuICAgICAqIEBwYXJhbSBidW5kbGUgICAgIOi/nOeoi+i1hOa6kOWMheWQje+8jOWmguaenOS4uuepuuWwseaYr+m7mOiupOacrOWcsOi1hOa6kOWMhVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBsb2FkKHZpZXdQYTogVmlld1BhcmFtcywgYnVuZGxlPzogc3RyaW5nKSB7XG4gICAgICAgIGxldCB2cDogVmlld1BhcmFtcyA9IHRoaXMudWlfbm9kZXMuZ2V0KHZpZXdQYS51dWlkKSE7XG4gICAgICAgIGlmICh2cCAmJiB2cC5ub2RlKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU5vZGUodnApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy/nlLHkuo7lvILmraXvvIzliqDovb3lrozmiJDlkI7lnKjmraTliJfooajkuK3nmoTnlYzpnaLmiY3liqDov5vmuLjmiI9cbiAgICAgICAgICAgIHRoaXMuYWRkaW5nVmlldy5wdXNoKHZpZXdQYS5wcmVmYWJQYXRoKTtcblxuICAgICAgICAgICAgLy8g6I635Y+W6aKE5Yi25Lu26LWE5rqQXG4gICAgICAgICAgICBidW5kbGUgPSBidW5kbGUgfHwgXCJyZXNvdXJjZXNcIjtcbiAgICAgICAgICAgIGMyZi5yZXMubG9hZChidW5kbGUsIHZpZXdQYS5wcmVmYWJQYXRoLCB0aGlzLmFmdGVyTG9hZFByZWZhYi5iaW5kKHRoaXMsIHZpZXdQYSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZnRlckxvYWRQcmVmYWIodmlld1BhOiBWaWV3UGFyYW1zLCBlcnI6IEVycm9yIHwgbnVsbCwgcmVzOiBjYy5QcmVmYWIpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgY2MuZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hZGRpbmdWaWV3LmluZGV4T2Yodmlld1BhLnByZWZhYlBhdGgpID49IDApIHtcbiAgICAgICAgICAgIGxldCBjaGlsZE5vZGU6IGNjLk5vZGUgPSBjMmYucmVzLmluc3RhbnRpYXRlKHJlcyk7XG4gICAgICAgICAgICB2aWV3UGEubm9kZSA9IGNoaWxkTm9kZTtcbiAgICAgICAgICAgIGxldCBjb21wOiBEZWxlZ2F0ZUNvbXBvbmVudCA9IGNoaWxkTm9kZS5hZGRDb21wb25lbnQoRGVsZWdhdGVDb21wb25lbnQpO1xuICAgICAgICAgICAgY29tcC52aWV3UGFyYW1zID0gdmlld1BhO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIHRoaXMuYWRkTVZDQ29tcG9uZXQoY2hpbGROb2RlLCB2aWV3UGEucHJlZmFiUGF0aClcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTm9kZSh2aWV3UGEpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIGMyZi51dGlscy5hcnIuZmFzdFJlbW92ZSh0aGlzLmFkZGluZ1ZpZXcsIHZpZXdQYS5wcmVmYWJQYXRoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLndhcm4oYGZhaWxlZCBhZGQgdmlldyBbJHt2aWV3UGEucHJlZmFiUGF0aH1dLCBkb24ndCBmaW5kIGluIGFkZGluZ1ZpZXchIGFkZGluZ1ZpZXc6YCwgdGhpcy5hZGRpbmdWaWV3KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TVZDQ2xzTmFtZShwcmVmYWJQYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGNsc05hbWUgPSBwcmVmYWJQYXRoO1xuICAgICAgICBsZXQgaWR4ID0gcHJlZmFiUGF0aC5sYXN0SW5kZXhPZignLycpO1xuICAgICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgICAgIGNsc05hbWUgPSBwcmVmYWJQYXRoLnN1YnN0cmluZyhpZHggKyAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xzTmFtZS5zdGFydHNXaXRoKCdQXycpIHx8IGNsc05hbWUuc3RhcnRzV2l0aCgnVl8nKSB8fCBjbHNOYW1lLnN0YXJ0c1dpdGgoJ0ZfJykpIHtcbiAgICAgICAgICAgIGNsc05hbWUgPSBjbHNOYW1lLnN1YnN0cmluZygyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xzTmFtZTtcbiAgICB9XG5cbiAgICAvKiog5Li6dmlld+a3u+WKoG12Y+e7hOS7tiAqL1xuICAgIHByb3RlY3RlZCBhZGRNVkNDb21wb25ldChub2RlOiBjYy5Ob2RlLCBwcmVmYWJQYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGNsc05hbWUgPSB0aGlzLmdldE1WQ0Nsc05hbWUocHJlZmFiUGF0aCk7XG4gICAgICAgIGxldCBtb2RlbCA9IG5vZGUuYWRkQ29tcG9uZW50KGAke2Nsc05hbWV9TW9kZWxgKTtcbiAgICAgICAgbGV0IHZpZXcgPSBub2RlLmFkZENvbXBvbmVudChgJHtjbHNOYW1lfVZpZXdgKSBhcyBVSVZpZXdCYXNlO1xuICAgICAgICBsZXQgY29udHJvbGxlciA9IG5vZGUuYWRkQ29tcG9uZW50KGNsc05hbWUpO1xuICAgICAgICBjb250cm9sbGVyLm1vZGVsID0gbW9kZWwgYXMgVUlNb2RlbEJhc2U7XG4gICAgICAgIGNvbnRyb2xsZXIudmlldyA9IHZpZXc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yib5bu655WM6Z2i6IqC54K5XG4gICAgICogQHBhcmFtIHZpZXdQYXJhbXMgIOinhuWbvuWPguaVsFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjcmVhdGVOb2RlKHZpZXdQYTogVmlld1BhcmFtcykge1xuICAgICAgICB2aWV3UGEudmFsaWQgPSB0cnVlO1xuXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuX19ub2RlcygpO1xuICAgICAgICBsZXQgekZsb29yID0gMDtcbiAgICAgICAgY29uc3QgbGVuID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBpZiAobGVuID4gMCkge1xuICAgICAgICAgICAgekZsb29yID0gTWF0aC5mbG9vcigoY2hpbGRyZW5bbGVuIC0gMV0ubm9kZS56SW5kZXggfHwgMCkgLyAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgdmlld1BhLm5vZGUuekluZGV4ID0gKHpGbG9vciArIDEpICogMTA7XG4gICAgICAgIHZpZXdQYS5ub2RlLnBhcmVudCA9IHRoaXM7XG5cbiAgICAgICAgbGV0IGNvbXA6IERlbGVnYXRlQ29tcG9uZW50ID0gdmlld1BhLm5vZGUuZ2V0Q29tcG9uZW50KERlbGVnYXRlQ29tcG9uZW50KSE7XG4gICAgICAgIGNvbXAuYWRkKCk7XG5cbiAgICAgICAgLy/lvLnlh7rnlYzpnaLlj6/op4HmgKfliLfmlrBcbiAgICAgICAgdGhpcy5yZWZyZXNoTGF5ZXJVSVZpc2libGUoKTtcbiAgICAgICAgLy/mjInphY3nva7mkq3mlL7og4zmma/pn7PkuZBcbiAgICAgICAgbGV0IG12Y0Nsc05hbWUgPSB0aGlzLmdldE1WQ0Nsc05hbWUodmlld1BhLnByZWZhYlBhdGgpO1xuICAgICAgICBpZiAoQzJGQ29uc3QuVUlCZ21OYW1lcy5oYXNPd25Qcm9wZXJ0eShtdmNDbHNOYW1lKSkge1xuICAgICAgICAgICAgbGV0IHVybCA9IEMyRkNvbnN0LlVJTXVzaWNQYXRoICsgQzJGQ29uc3QuVUlCZ21OYW1lc1ttdmNDbHNOYW1lXTtcbiAgICAgICAgICAgIGMyZi5hdWRpby5wbGF5QmdtVVJMKHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgLy/lvLnnqpfpn7PmlYhcbiAgICAgICAgaWYgKHZpZXdQYS51aUNmZyAmJiB2aWV3UGEudWlDZmcubGF5ZXIgIT0gTGF5ZXJUeXBlLlVJKSB7XG4gICAgICAgICAgICBpZiAoQzJGQ29uc3QuVUlWaWV3RWZ0TmFtZS5oYXNPd25Qcm9wZXJ0eShtdmNDbHNOYW1lKSkge1xuICAgICAgICAgICAgICAgIGxldCBmaWxlID0gQzJGQ29uc3QuVUlWaWV3RWZ0TmFtZVttdmNDbHNOYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoZmlsZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSBDMkZDb25zdC5VSUF1ZGlvUGF0aCArIEMyRkNvbnN0LlVJVmlld0VmdE5hbWVbbXZjQ2xzTmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGMyZi5hdWRpby5wbGF5U2Z4VVJMKHVybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmlld1BhLm5vZGU7XG4gICAgfVxuXG4gICAgLyoqIOWIt+aWsOWtkOiKgueCueWPr+ingeaAp++8mlxuICAgICAqIDHjgIHmnIDpobblsYLlhajlsY/nlYzpnaLmmL7npLrvvIzlhbblkI7pnaLnmoTpmpDol49cbiAgICAgKiAy44CBdG9wUGFuZWznmoTlsYLnuqfntKfotLTlhbbpmYTlsZ7lsYLnuqdcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlZnJlc2hMYXllclVJVmlzaWJsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubmFtZSAhPSBMYXllclR5cGUuVUkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuX19ub2RlcygpO1xuICAgICAgICBsZXQgbGFzdElkeCA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgbGV0IGZpbmRGdWxsID0gZmFsc2U7XG4gICAgICAgIGxldCB0b3BPd25lZCA9IG51bGw7XG4gICAgICAgIGZvciAobGV0IGkgPSBsYXN0SWR4OyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgY29uc3Qgb25lID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoIW9uZS5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbmUubm9kZS5hY3RpdmUgPSAhZmluZEZ1bGw7XG4gICAgICAgICAgICBjb25zdCB2aWV3UGEgPSBvbmUudmlld1BhcmFtcztcbiAgICAgICAgICAgIC8vdG9wUGFuZWzlvZLlsZ7lpITnkIZcbiAgICAgICAgICAgIGlmICh0aGlzLnRvcFBhbmVsICYmICF0b3BPd25lZCAmJiB2aWV3UGEudWlDZmcuc2hvd1RvcCkge1xuICAgICAgICAgICAgICAgIHRvcE93bmVkID0gb25lO1xuICAgICAgICAgICAgICAgIHRoaXMudG9wUGFuZWwuekluZGV4ID0gb25lLm5vZGUuekluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFBhbmVsLmFjdGl2ZSA9IG9uZS5ub2RlLmFjdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8v5b2T5YmN5Li65pyA5LiK5bGC5pi+56S655WM6Z2i5pe277yM5b2T5YmN5Li65YWo5bGP55WM6Z2i5YiZ5ZCO6Z2i5YWo6YOo6ZqQ6JeP77yM5b2T5YmN5Li66Z2e5YWo5bGP5pe277yM5Yib5bu65qih57OK6IOM5pmv5ZCO5YWo6YOo6ZqQ6JeP44CCXG4gICAgICAgICAgICBpZiAob25lLm5vZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJsdXJFbmFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICh2aWV3UGEudWlDZmcpIHtcbiAgICAgICAgICAgICAgICAgICAgYmx1ckVuYWJsZSA9ICF2aWV3UGEudWlDZmcubm9CbHVyU2NuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYmx1ckVuYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXNQb3BMYXllciA9ICF2aWV3UGEudWlDZmcgfHwgdmlld1BhLnVpQ2ZnLmxheWVyICE9IExheWVyVHlwZS5VSTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYmx1clNjbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ibHVyU2NuLm5vZGUuYWN0aXZlID0gaXNQb3BMYXllcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1BvcExheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZUZsb29yVyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVGbG9vclcgPSBjaGlsZHJlbltpIC0gMV0ubm9kZS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJsdXJTY24uYWRkQmx1ckJnKG9uZS5ub2RlLm5hbWUsICgpID0+IHsgfSwgcHJlRmxvb3JXKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJsdXJTY24ubm9kZS56SW5kZXggPSBvbmUubm9kZS56SW5kZXggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmRGdWxsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmaW5kRnVsbCA9IHZpZXdQYS51aUNmZyAmJiB2aWV3UGEudWlDZmcubGF5ZXIgPT0gTGF5ZXJUeXBlLlVJO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOagueaNrumihOWItuS7tui3r+W+hOWIoOmZpO+8jOmihOWItuS7tuWmguWcqOmYn+WIl+S4reS5n+S8muiiq+WIoOmZpO+8jOWmguaenOivpemihOWItuS7tuWtmOWcqOWkmuS4quS5n+S8muS4gOi1t+WIoOmZpFxuICAgICAqIEBwYXJhbSBwcmVmYWJQYXRoICAg6aKE5Yi26Lev5b6EXG4gICAgICogQHBhcmFtIGlzRGVzdHJveSAgICDnp7vpmaTlkI7mmK/lkKbph4rmlL5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlKHByZWZhYlBhdGg6IHN0cmluZywgaXNEZXN0cm95OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIC8vIOmqjOivgeaYr+WQpuWIoOmZpOWQjuWPsOe8k+WtmOeVjOmdolxuICAgICAgICBpZiAoaXNEZXN0cm95KSB0aGlzLnJlbW92ZUNhY2hlKHByZWZhYlBhdGgpO1xuXG4gICAgICAgIGxldCB0YXJnZXROYW1lID0gJyc7XG4gICAgICAgIC8vIOeVjOmdouenu+WHuuiInuWPsFxuICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLl9fbm9kZXMoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRzdENvbXAgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCB2aWV3UGEgPSBkc3RDb21wLnZpZXdQYXJhbXM7XG4gICAgICAgICAgICBpZiAodmlld1BhLnByZWZhYlBhdGggPT09IHByZWZhYlBhdGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNEZXN0cm95KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOebtOaOpemHiuaUvueVjOmdolxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX25vZGVzLmRlbGV0ZSh2aWV3UGEudXVpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDkuI3ph4rmlL7nlYzpnaLvvIznvJPlrZjotbfmnaXlvoXkuIvmrKHkvb/nlKhcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aV9jYWNoZS5zZXQodmlld1BhLnByZWZhYlBhdGgsIHZpZXdQYSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZHN0Q29tcC5yZW1vdmUoaXNEZXN0cm95KTtcbiAgICAgICAgICAgICAgICB0YXJnZXROYW1lID0gZHN0Q29tcC5ub2RlLm5hbWU7XG4gICAgICAgICAgICAgICAgdmlld1BhLnZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWZyZXNoTGF5ZXJVSVZpc2libGUoKTtcbiAgICAgICAgaWYgKHRoaXMuYmx1clNjbikge1xuICAgICAgICAgICAgdGhpcy5ibHVyU2NuLnJlbW92ZWRCbHVyQmcodGFyZ2V0TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy/mjInphY3nva7nu5PmnZ/og4zmma/pn7PkuZBcbiAgICAgICAgbGV0IG12Y0Nsc05hbWUgPSB0aGlzLmdldE1WQ0Nsc05hbWUocHJlZmFiUGF0aCk7XG4gICAgICAgIGlmIChDMkZDb25zdC5VSUJnbU5hbWVzLmhhc093blByb3BlcnR5KG12Y0Nsc05hbWUpKSB7XG4gICAgICAgICAgICBjMmYuYXVkaW8uZW5kQ3VyTXVzaWMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDnp7vpmaTnm67moIfnlYzpnaLkuYvkuIrnmoTmiYDmnInnlYzpnaIgKi9cbiAgICBwdWJsaWMgcmVtb3ZlQWJvdmVVSShwcmVmYWJQYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuX19ub2RlcygpO1xuICAgICAgICAgICAgbGV0IGxhc3RJZHggPSBjaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgICAgICAgICAgY29uc3QgbGFzdEl0ZW0gPSBjaGlsZHJlbltsYXN0SWR4XTtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RWaWV3UGEgPSBsYXN0SXRlbS52aWV3UGFyYW1zO1xuICAgICAgICAgICAgaWYgKGxhc3RWaWV3UGEucHJlZmFiUGF0aCA9PSBwcmVmYWJQYXRoKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlbW92ZShsYXN0Vmlld1BhLnByZWZhYlBhdGgsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5qC55o2u5ZSv5LiA5qCH6K+G5Yig6Zmk6IqC54K577yM5aaC5p6c6IqC54K56L+Y5Zyo6Zif5YiX5Lit5Lmf5Lya6KKr5Yig6ZmkXG4gICAgICogQHBhcmFtIHV1aWQgIOWUr+S4gOagh+ivhlxuICAgICAqL1xuICAgIHByb3RlY3RlZCByZW1vdmVCeVV1aWQodXVpZDogc3RyaW5nLCBpc0Rlc3Ryb3k6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgbGV0IHZpZXdQYSA9IHRoaXMudWlfbm9kZXMuZ2V0KHV1aWQpO1xuICAgICAgICBpZiAodmlld1BhKSB7XG4gICAgICAgICAgICBpZiAoaXNEZXN0cm95KVxuICAgICAgICAgICAgICAgIHRoaXMudWlfbm9kZXMuZGVsZXRlKHZpZXdQYS51dWlkKTtcblxuICAgICAgICAgICAgbGV0IGNoaWxkTm9kZSA9IHZpZXdQYS5ub2RlO1xuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZSAmJiBjaGlsZE5vZGUuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgIGxldCBjb21wID0gY2hpbGROb2RlLmdldENvbXBvbmVudChEZWxlZ2F0ZUNvbXBvbmVudCkhO1xuICAgICAgICAgICAgICAgIGNvbXAucmVtb3ZlKGlzRGVzdHJveSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hMYXllclVJVmlzaWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIOWIoOmZpOe8k+WtmOeahOeVjOmdou+8jOW9k+e8k+WtmOeVjOmdouiiq+enu+mZpOiInuWPsOaXtu+8jOWPr+mAmui/h+atpOaWueazleWIoOmZpOe8k+WtmOeVjOmdolxuICAgICAqL1xuICAgIHByaXZhdGUgcmVtb3ZlQ2FjaGUocHJlZmFiUGF0aDogc3RyaW5nKSB7XG4gICAgICAgIGxldCB2aWV3UGEgPSB0aGlzLnVpX2NhY2hlLmdldChwcmVmYWJQYXRoKTtcbiAgICAgICAgaWYgKHZpZXdQYSkge1xuICAgICAgICAgICAgaWYgKHZpZXdQYS5ub2RlICYmIHZpZXdQYS5ub2RlLmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGROb2RlID0gdmlld1BhLm5vZGU7XG4gICAgICAgICAgICAgICAgbGV0IGNvbXAgPSBjaGlsZE5vZGUuZ2V0Q29tcG9uZW50KERlbGVnYXRlQ29tcG9uZW50KSFcbiAgICAgICAgICAgICAgICBjb21wLnJlbW92ZSh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2Mud2FybigncmVtb3ZlQ2FjaGU6IGRzdCBub2RlIGlzIGludmFsaWQhJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudWlfbm9kZXMuZGVsZXRlKHZpZXdQYS51dWlkKTtcbiAgICAgICAgICAgIHRoaXMudWlfY2FjaGUuZGVsZXRlKHByZWZhYlBhdGgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5qC55o2u5ZSv5LiA5qCH6K+G6I635Y+W6IqC54K577yM5aaC5p6c6IqC54K55LiN5a2Y5Zyo5oiW6ICF6L+Y5Zyo6Zif5YiX5Lit77yM5YiZ6L+U5ZuebnVsbCBcbiAgICAgKiBAcGFyYW0gdXVpZCAg5ZSv5LiA5qCH6K+GXG4gICAgICovXG4gICAgcHVibGljIGdldEJ5VXVpZCh1dWlkOiBzdHJpbmcpOiBjYy5Ob2RlIHtcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5fX25vZGVzKCk7XG4gICAgICAgIGZvciAobGV0IGNvbXAgb2YgY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGlmIChjb21wLnZpZXdQYXJhbXMgJiYgY29tcC52aWV3UGFyYW1zLnV1aWQgPT09IHV1aWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcC5ub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsITtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmoLnmja7pooTliLbku7bot6/lvoTojrflj5blvZPliY3mmL7npLrnmoTor6XpooTliLbku7bnmoTmiYDmnIlOb2Rl6IqC54K55pWw57uEXG4gICAgICogQHBhcmFtIHByZWZhYlBhdGggXG4gICAgICovXG4gICAgcHVibGljIGdldChwcmVmYWJQYXRoOiBzdHJpbmcpOiBBcnJheTxjYy5Ob2RlPiB7XG4gICAgICAgIGxldCBhcnI6IEFycmF5PGNjLk5vZGU+ID0gW107XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuX19ub2RlcygpO1xuICAgICAgICBmb3IgKGxldCBjb21wIG9mIGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAoY29tcC52aWV3UGFyYW1zLnByZWZhYlBhdGggPT09IHByZWZhYlBhdGgpIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChjb21wLm5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yik5pat5b2T5YmN5bGC5piv5ZCm5YyF5ZCrIHV1aWTmiJbpooTliLbku7bot6/lvoTlr7nlupTnmoROb2Rl6IqC54K5XG4gICAgICogQHBhcmFtIHByZWZhYlBhdGhPclVVSUQg6aKE5Yi25Lu26Lev5b6E5oiW6ICFVVVJRFxuICAgICAqL1xuICAgIHB1YmxpYyBoYXMocHJlZmFiUGF0aE9yVVVJRDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuX19ub2RlcygpO1xuICAgICAgICBmb3IgKGxldCBjb21wIG9mIGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAoY29tcC52aWV3UGFyYW1zLnV1aWQgPT09IHByZWZhYlBhdGhPclVVSUQgfHwgY29tcC52aWV3UGFyYW1zLnByZWZhYlBhdGggPT09IHByZWZhYlBhdGhPclVVSUQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5b2T5YmN5bGC5YyF5ZCr5oyH5a6a5q2j5YiZ5Yy56YWN55qETm9kZeiKgueCueOAglxuICAgICAqIEBwYXJhbSBwcmVmYWJQYXRoUmVnIOWMuemFjemihOWItuS7tui3r+W+hOeahOato+WImeihqOi+vuW8j+WvueixoVxuICAgICAqL1xuICAgIHB1YmxpYyBmaW5kKHByZWZhYlBhdGhSZWc6IFJlZ0V4cCk6IGNjLk5vZGVbXSB7XG4gICAgICAgIGxldCBhcnI6IGNjLk5vZGVbXSA9IFtdO1xuICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLl9fbm9kZXMoKTtcbiAgICAgICAgZm9yIChsZXQgY29tcCBvZiBjaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKHByZWZhYlBhdGhSZWcudGVzdChjb21wLnZpZXdQYXJhbXMucHJlZmFiUGF0aCkpIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChjb21wLm5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgLyoqIOiOt+WPluW9k+WJjeWxguaJgOacieeql+WPo+S6i+S7tuinpuWPkee7hOS7tiAqL1xuICAgIHByb3RlY3RlZCBfX25vZGVzKCk6IEFycmF5PERlbGVnYXRlQ29tcG9uZW50PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IEFycmF5PERlbGVnYXRlQ29tcG9uZW50PiA9IFtdO1xuICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY29tcCA9IGNoaWxkcmVuW2ldLmdldENvbXBvbmVudChEZWxlZ2F0ZUNvbXBvbmVudCk7XG4gICAgICAgICAgICBpZiAoY29tcCAmJiBjb21wLnZpZXdQYXJhbXMgJiYgY29tcC52aWV3UGFyYW1zLnZhbGlkICYmIGNjLmlzVmFsaWQoY29tcCkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjb21wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKiDlsYLoioLngrnmlbDph48gKi9cbiAgICBwdWJsaWMgc2l6ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5riF6Zmk5omA5pyJ6IqC54K577yM6Zif5YiX5b2T5Lit55qE5Lmf5Yig6ZmkXG4gICAgICogQHBhcmFtIGlzRGVzdHJveSAg56e76Zmk5ZCO5piv5ZCm6YeK5pS+XG4gICAgICovXG4gICAgcHVibGljIGNsZWFyVUkoaXNEZXN0cm95OiBib29sZWFuLCBleGNsdWRlUHJlZmFiOiBzdHJpbmdbXSA9IFtdKTogdm9pZCB7XG4gICAgICAgIC8vIOa4hemZpOaJgOacieaYvuekuueahOeVjOmdolxuICAgICAgICB0aGlzLnVpX25vZGVzLmZvckVhY2goKHZhbHVlOiBWaWV3UGFyYW1zLCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgbGV0IG5lZWREZWwgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVQcmVmYWIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG5lZWREZWwgPSBleGNsdWRlUHJlZmFiLmluZGV4T2YodmFsdWUucHJlZmFiUGF0aCkgPCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5lZWREZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUJ5VXVpZCh2YWx1ZS51dWlkLCBpc0Rlc3Ryb3kpO1xuICAgICAgICAgICAgICAgIHZhbHVlLnZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy51aV9ub2Rlcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g5riF6Zmk57yT5a2Y5Lit55qE55WM6Z2iXG4gICAgICAgIGlmIChpc0Rlc3Ryb3kpIHtcbiAgICAgICAgICAgIHRoaXMudWlfY2FjaGUuZm9yRWFjaCgodmFsdWU6IFZpZXdQYXJhbXMsIHByZWZhYlBhdGg6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2FjaGUocHJlZmFiUGF0aCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvL1xuICAgICAgICBpZiAodGhpcy5ibHVyU2NuKSB7XG4gICAgICAgICAgICB0aGlzLmJsdXJTY24uY2xlYW5CbHVyQmcoKTtcbiAgICAgICAgfVxuICAgICAgICAvL+a4heepumFkZGluZ1xuICAgICAgICB0aGlzLmFkZGluZ1ZpZXcgPSBbXTtcbiAgICB9XG5cbiAgICAvKiog6I635b6X6IqC54K5Vmlld+WPguaVsCAqL1xuICAgIHB1YmxpYyBnZXRQcmVmYWJVcmxCeU5vZGUobm9kZTogY2MuTm9kZSkge1xuICAgICAgICBsZXQgcHJlZmFiVXJsOiBzdHJpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLnVpX25vZGVzLmZvckVhY2goKHZhbHVlOiBWaWV3UGFyYW1zLCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlLm5vZGUgPT0gbm9kZSkge1xuICAgICAgICAgICAgICAgIHByZWZhYlVybCA9IHZhbHVlLnByZWZhYlBhdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJlZmFiVXJsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRUb3BzaWRlVmlldygpIHtcbiAgICAgICAgbGV0IHRvcHNpZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLl9fbm9kZXMoKTtcbiAgICAgICAgbGV0IGxhc3RJZHggPSBjaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgICAgICBmb3IgKGxldCBpID0gbGFzdElkeDsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9uZSA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKCFvbmUuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgdmlld1BhID0gb25lLnZpZXdQYXJhbXM7XG4gICAgICAgICAgICBpZiAoIXZpZXdQYS52YWxpZCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9wc2lkZSA9IG9uZS5ub2RlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvcHNpZGU7XG4gICAgfVxuXG4gICAgLyoqIOmakOiXj+ato+WcqOaSreaUvuWHuuWFpeWcuuWKqOeUu+eahHZpZXcgKi9cbiAgICBwdWJsaWMgaGlkZUFuaW1hUGxheWluZ1ZpZXcoKSB7XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuX19ub2RlcygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZHN0Q29tcCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKCFkc3RDb21wLm5vZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdmlld1BhID0gZHN0Q29tcC52aWV3UGFyYW1zO1xuICAgICAgICAgICAgaWYgKCF2aWV3UGEudmFsaWQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBwcmVmQ29tcCA9IGRzdENvbXAubm9kZS5nZXRDb21wb25lbnQoVUlWaWV3QmFzZSlcbiAgICAgICAgICAgIGlmIChwcmVmQ29tcCAmJiBwcmVmQ29tcC5hbmltYVBsYXlpbmcpIHtcbiAgICAgICAgICAgICAgICBkc3RDb21wLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJQbGF5aW5nVmlldy5wdXNoKGRzdENvbXAubm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5pi+56S65q2j5Zyo5pKt5pS+5Ye65YWl5Zy65Yqo55S755qEdmlldyAqL1xuICAgIHB1YmxpYyBzaG93QW5pbWFQbGF5aW5nVmlldygpIHtcbiAgICAgICAgZm9yIChsZXQgb25lIG9mIHRoaXMuYXJyUGxheWluZ1ZpZXcpIHtcbiAgICAgICAgICAgIG9uZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXJyUGxheWluZ1ZpZXcgPSBbXTtcbiAgICB9XG59Il19