
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/utils/ViewUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0e2d0OKE9JFIp68tIpIvpjm', 'ViewUtil');
// c2f-framework/utils/ViewUtil.ts

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
/** 显示对象工具 */
var ViewUtil = /** @class */ (function () {
    function ViewUtil() {
    }
    /**
     * 把Node当前的节点树结构根据Node命名转成一个js对象,重名的组件会覆盖，
     * Node的name首字符为'_'加入列表，其他不加
     * @param parent 被遍历的Node组件
     * @param obj    绑定的js对象 (可选)
     */
    ViewUtil.nodeTreeInfoLite = function (parent, obj) {
        var map = obj || new Map();
        var items = parent.children;
        for (var i = 0; i < items.length; i++) {
            var one = items[i];
            var name = one.name.trim();
            //if (name.startsWith('_') && name.endsWith('_')) {
            map.set(name, one);
            //}
            ViewUtil.nodeTreeInfoLite(one, map);
        }
        return map;
    };
    /**
     * 正则搜索节点名字,符合条件的节点将会返回
     * @param reg     正则表达式
     * @param parent  要搜索的父节点
     * @param nodes   返回的数组（可选）
     */
    ViewUtil.findNodes = function (reg, parent, nodes) {
        var ns = nodes || [];
        var items = parent.children;
        for (var i = 0; i < items.length; i++) {
            var name = items[i].name;
            if (reg.test(name)) {
                ns.push(items[i]);
            }
            ViewUtil.findNodes(reg, items[i], ns);
        }
        return ns;
    };
    ;
    /**
     * 获取组件名称
     * @param target 组件对象
     */
    ViewUtil.getComponentName = function (target) {
        var regex = /<([^>]*)>/g; // 正则表达式匹配尖括号内的字符串  
        var matches = target.name.match(regex); // 获取匹配结果  
        var result = matches ? matches.map(function (match) { return match.replace(/<|>/g, ''); }) : [''];
        var name = result[0];
        return name;
    };
    /**
     * 节点之间坐标互转
     * @param a         A节点
     * @param b         B节点
     * @param aPos      A节点空间中的相对位置
     */
    ViewUtil.calculateASpaceToBSpacePos = function (a, b, aPos) {
        var world = a.convertToWorldSpaceAR(aPos);
        var space = b.convertToNodeSpaceAR(world);
        return space;
    };
    /**
     * 屏幕转空间坐标
     * @param event 触摸事件
     * @param space 转到此节点的坐标空间
     */
    ViewUtil.calculateScreenPosToSpacePos = function (event, space) {
        var uil = event.getLocation();
        var worldPos = cc.v3(uil.x, uil.y);
        var mapPos = space.convertToNodeSpaceAR(worldPos);
        return mapPos;
    };
    /**
     * 显示对象等比缩放
     * @param targetWidth       目标宽
     * @param targetHeight      目标高
     * @param defaultWidth      默认宽
     * @param defaultHeight     默认高
     */
    ViewUtil.uniformScale = function (targetWidth, targetHeight, defaultWidth, defaultHeight) {
        var widthRatio = defaultWidth / targetWidth;
        var heightRatio = defaultHeight / targetHeight;
        var ratio = widthRatio < heightRatio ? widthRatio : heightRatio;
        var size = new cc.Size(Math.floor(targetWidth * ratio), Math.floor(targetHeight * ratio));
        return size;
    };
    /**
     * 检测节点是否在屏幕之内
     * @param node 目标节点
     */
    ViewUtil.nodeIsInView = function (node) {
        var inView = true;
        var szVisible = cc.view.getVisibleSize();
        var posW = node.convertToWorldSpaceAR(cc.Vec3.ZERO);
        if (posW.x <= 0) {
            var rightX = posW.x + node.width * (1 - node.anchorX);
            inView = rightX < 0 ? false : true;
        }
        else {
            var leftX = posW.x - node.width * node.anchorX;
            inView = leftX > szVisible.width ? false : true;
        }
        if (inView) {
            if (posW.y <= 0) {
                var topY = posW.y + node.height * (1 - node.anchorY);
                inView = topY < 0 ? false : true;
            }
            else {
                var bottomY = posW.y - node.height * node.anchorY;
                inView = bottomY > szVisible.height ? false : true;
            }
        }
        return inView;
    };
    /**
     * 检测节点是否在屏幕之内
     * @param node 目标节点
     */
    ViewUtil.nodeFullInView = function (node) {
        var fullInView = true;
        var szVisible = cc.view.getVisibleSize();
        var posW = node.convertToWorldSpaceAR(cc.Vec3.ZERO);
        //console.log('pos in world:', posW, node);
        if (posW.x <= 0) {
            var leftX = posW.x - node.width * node.anchorX;
            fullInView = leftX >= 0 ? true : false;
        }
        else {
            var rightX = posW.x + node.width * (1 - node.anchorX);
            fullInView = rightX <= szVisible.width ? true : false;
        }
        if (fullInView) {
            if (posW.y <= 0) {
                var bottomY = posW.y - node.height * node.anchorY;
                fullInView = bottomY >= 0 ? true : false;
            }
            else {
                var topY = posW.y + node.height * (1 - node.anchorY);
                fullInView = topY <= szVisible.height ? true : false;
            }
        }
        return fullInView;
    };
    /**
     * 检测节点在Y轴方向是否已在屏幕之外
     * @param node 目标节点
     */
    ViewUtil.nodeIsOutByHeight = function (node) {
        var outView = false;
        var szVisible = cc.view.getVisibleSize();
        var posW = node.convertToWorldSpaceAR(cc.Vec3.ZERO);
        if (posW.y <= 0) {
            var topY = posW.y + node.height * (1 - node.anchorY);
            outView = topY < 0 ? true : false;
        }
        else {
            var bottomY = posW.y - node.height * node.anchorY;
            outView = bottomY > szVisible.height ? true : false;
        }
        return outView;
    };
    /**
     * 检测节点在X轴方向是否已在屏幕之外
     * @param node 目标节点
     */
    ViewUtil.nodeIsOutByWidth = function (node) {
        var outView = false;
        var szVisible = cc.view.getVisibleSize();
        var posW = c2f.utils.node.getNodeWorldPosition(node);
        if (posW.x <= 0) {
            var rightX = posW.x + node.width * (1 - node.anchorX);
            outView = rightX < 0 ? true : false;
        }
        else {
            var leftX = posW.x - node.width * node.anchorX;
            outView = leftX > szVisible.width ? true : false;
        }
        return outView;
    };
    /**
     * 两节点之间的距离
     * @param node1 节点1
     * @param node1 节点2
     */
    ViewUtil.getNodeDistance = function (node1, node2) {
        var distance = 0;
        var direction = cc.v3(0, 0, 0);
        var posW1 = c2f.utils.node.getNodeWorldPosition(node1);
        var posW2 = c2f.utils.node.getNodeWorldPosition(node2);
        distance = c2f.utils.vec.distance(posW1, posW2);
        direction = c2f.utils.vec.direction(posW1, posW2);
        return { distance: distance, direction: direction };
    };
    /**
     * 节点1到节点2连线与x轴方向的夹角
     * @param node1 节点1
     * @param node1 节点2
     */
    ViewUtil.getTwoNodeAngle = function (node1, node2) {
        var posW1 = c2f.utils.node.getNodeWorldPosition(node1);
        var posW2 = c2f.utils.node.getNodeWorldPosition(node2);
        var angle = c2f.utils.vec.angleEx(posW1, posW2);
        return angle;
    };
    /**
     * 世界坐标点到节点连线与x轴方向的夹角
     * @param node1 节点1
     * @param node1 节点2
     */
    ViewUtil.getWorldPosToNodeAngle = function (worldPos, node) {
        var nodePosW = c2f.utils.node.getNodeWorldPosition(node);
        var centerPos = nodePosW;
        centerPos.x = nodePosW.x + (0.5 - node.anchorX) * node.width;
        centerPos.y = nodePosW.y + (0.5 - node.anchorY) * node.height;
        var angle = c2f.utils.vec.angleEx(worldPos, centerPos);
        return angle;
    };
    /**
     * 节点node在panel下的坐标
     * @param node 节点1
     * @param panel 节点2
     */
    ViewUtil.getNodeInPanelPos = function (node, panel, out) {
        var posL = node.getPosition();
        var posW = node.parent.convertToWorldSpaceAR(posL);
        if (out) {
            panel.parent.convertToNodeSpaceAR(posW, out);
            return out;
        }
        else {
            var tarPos = panel.parent.convertToNodeSpaceAR(posW);
            return tarPos;
        }
    };
    /**
     * 从资源缓存中找到预制资源名并创建一个显示对象
     * @param path 资源路径
     */
    ViewUtil.createPrefabNode = function (path) {
        var p = c2f.res.get(path, cc.Prefab);
        var n = c2f.res.instantiate(p);
        return n;
    };
    /**
     * 加载预制并创建预制节点
     * @param path 资源路径
     */
    ViewUtil.createPrefabNodeAsync = function (path) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                c2f.res.load(path, cc.Prefab, function (err, content) {
                    if (err) {
                        console.error("\u540D\u4E3A\u3010" + path + "\u3011\u7684\u8D44\u6E90\u52A0\u8F7D\u5931\u8D25");
                        return;
                    }
                    var node = _this.createPrefabNode(path);
                    resolve(node);
                });
                return [2 /*return*/];
            });
        }); });
    };
    /**
     * 加载预制节点
     * @param path          资源路径
     * @param callback      资源加载完成回调
     */
    ViewUtil.loadPrefabNode = function (path, callback) {
        var _this = this;
        c2f.res.load(path, cc.Prefab, function (err, content) {
            if (err) {
                console.error("\u540D\u4E3A\u3010" + path + "\u3011\u7684\u8D44\u6E90\u52A0\u8F7D\u5931\u8D25");
                return;
            }
            var node = _this.createPrefabNode(path);
            callback(node);
        });
    };
    /**
     * 添加节点动画
     * @param path              资源路径
     * @param node              目标节点
     * @param onlyOne           是否唯一
     * @param isDefaultClip     是否播放默认动画剪辑
     */
    ViewUtil.addNodeAnimation = function (path, node, onlyOne, isDefaultClip) {
        if (onlyOne === void 0) { onlyOne = true; }
        if (isDefaultClip === void 0) { isDefaultClip = false; }
        if (!node || !node.isValid) {
            return;
        }
        var anim = node.getComponent(cc.Animation);
        if (anim == null) {
            anim = node.addComponent(cc.Animation);
        }
        var clip = c2f.res.get(path, cc.AnimationClip);
        if (!clip) {
            return;
        }
        if (onlyOne && anim.getAnimationState(clip.name) && anim.getAnimationState(clip.name).isPlaying) {
            return;
        }
        if (isDefaultClip) {
            anim.defaultClip = clip;
            anim.play();
            return;
        }
        // 播放完成后恢复播放默认动画
        anim.once(cc.Animation.EventType.FINISHED, function () {
            if (anim.defaultClip) {
                anim.play();
            }
        }, this);
        if (anim.getAnimationState(clip.name)) {
            anim.play(clip.name);
            return;
        }
        //anim.createaState(clip, clip!.name);
        anim.play(clip.name);
    };
    /**
    * 给按钮添加监听
    * @param node 目标节点
    */
    ViewUtil.addButtonListen = function (node, caller, func) {
        var button = node.getComponent(cc.Button);
        if (button) {
            node.on('click', func, caller);
        }
        else {
            var path = this.getNodePath(node);
            cc.warn("don't find Button component for node:", path);
        }
    };
    /**
     * 获得节点路径
     * @param node 目标节点
     */
    ViewUtil.getNodePath = function (node) {
        var path = node.name;
        if (node.parent) {
            var prePath = this.getNodePath(node.parent);
            path = prePath + '/' + path;
        }
        return path;
    };
    /**
     * 移除所有子节点
     * @param node
     */
    ViewUtil.clearChildren = function (node) {
        if (node != null && node.children.length > 0) {
            var childrenArray = node.children;
            while (childrenArray.length > 0) {
                var child = childrenArray[0];
                child.removeFromParent();
                child.destroy();
            }
        }
    };
    /** 图片置灰 */
    ViewUtil.setSpriteGray = function (icon, isGray) {
        if (isGray) {
            var matGray = cc.Material.getBuiltinMaterial("2d-gray-sprite");
            icon.setMaterial(0, matGray);
        }
        else {
            var matDef = cc.Material.getBuiltinMaterial("2d-sprite");
            icon.setMaterial(0, matDef);
        }
    };
    /** 节点置灰 */
    ViewUtil.setNodeGray = function (node, isGray) {
        var sprite = node.getComponent(cc.Sprite);
        if (sprite) {
            this.setSpriteGray(sprite, isGray);
        }
        for (var i = 0; i < node.children.length; ++i) {
            this.setNodeGray(node.children[i], isGray);
        }
    };
    //获得该名称的所有子节点
    ViewUtil.getChildrenByName = function (node, dstName) {
        var children = [];
        for (var i = 0; i < node.children.length; ++i) {
            if (node.children[i].name == dstName) {
                children.push(node.children[i]);
            }
            var subNodes = this.getChildrenByName(node.children[i], dstName);
            children = children.concat(subNodes);
        }
        return children;
    };
    //获得该名称的第一个子节点
    ViewUtil.getFirstChildByName = function (node, dstName) {
        var firstChild = null;
        var children = this.getChildrenByName(node, dstName);
        if (children.length > 0) {
            firstChild = children[0];
        }
        return firstChild;
    };
    /** 从子节点中查找对应组件·不递归 */
    ViewUtil.getChildrenByComponent = function (node, type) {
        var result = [];
        for (var i = 0; i < node.children.length; ++i) {
            var one = node.children[i];
            var comp = one.getComponent(type);
            if (comp) {
                result.push(comp);
            }
        }
        return result;
    };
    ViewUtil.getAllChildCount = function (root, node) {
        var url = root + '_' + node.name;
        //console.log('getAllChildCount:', url);
        var count = node.children.length;
        for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var one = _a[_i];
            count += this.getAllChildCount(url, one);
        }
        return count;
    };
    /** 偏移矩形 */
    ViewUtil.offsetRect = function (box, offset) {
        var offWidth = offset.x;
        var offHeigt = offset.y;
        box.x += -offWidth;
        box.y += -offHeigt;
        box.width += 2 * offWidth;
        box.height += offHeigt;
        return box;
    };
    /** 自动调整弹出页面位置，保证其在可视界面内
     * popNode: 弹出节点
     * clickPos2World： 点击位置
     * alignType：对齐方式(1:左对齐， 2：右对齐， 3：上对齐， 4：下对齐， 5：自动, 6:居中下对齐)
    */
    ViewUtil.autoAdjustPopWinPos = function (popNode, clickPos2World, alignType) {
        if (alignType === void 0) { alignType = 5; }
        if (popNode == null || clickPos2World == null) {
            return;
        }
        var szVisible = cc.view.getVisibleSize();
        var height = popNode.height * popNode.scaleY;
        var width = popNode.width * popNode.scaleX;
        var winH = szVisible.height;
        var winW = szVisible.width;
        var willPos = clickPos2World.clone();
        var align = alignType || 5;
        switch (align) {
            case 1:
                willPos.x += popNode.anchorX * width;
                willPos.y += (popNode.anchorY - 0.5) * height;
                break;
            case 2:
                willPos.x -= (1 - popNode.anchorX) * width;
                willPos.y += (popNode.anchorY - 0.5) * height;
                break;
            case 3:
                willPos.y -= (1 - popNode.anchorY) * height;
                willPos.x += (popNode.anchorX - 0.5) * width;
                break;
            case 4:
                willPos.y += popNode.anchorY * height;
                willPos.x += (popNode.anchorX - 0.5) * width;
                break;
            case 5:
                {
                    var willPosX = clickPos2World.x;
                    if (clickPos2World.x <= winW * 0.5) {
                        //以layout_bg右侧目标点，对齐clickPos
                        willPosX += width * popNode.anchorX;
                    }
                    else {
                        //以layout_bg左侧为目标点，对齐clickPos            
                        willPosX -= width * (1 - popNode.anchorX);
                    }
                    var willPosY = clickPos2World.y + height * popNode.anchorY;
                    willPos = cc.v2(willPosX, willPosY);
                }
                break;
            case 6:
                willPos.y -= (1 - popNode.anchorY) * height;
                willPos.x = winW / 2;
                break;
        }
        //x方向不能出屏幕
        if (willPos.x > winW * 0.5) {
            var edge2Right = willPos.x + width * (1 - popNode.anchorX);
            var disX = edge2Right - winW;
            if (disX > 0) {
                willPos.x -= disX;
            }
        }
        else {
            var edge2Left = willPos.x - width * popNode.anchorX - 70;
            if (edge2Left < 0) {
                willPos.x -= edge2Left;
            }
        }
        //y方向不能出屏幕
        if (willPos.y > winH * 0.5) {
            var edge2Top = willPos.y + height * (1 - popNode.anchorY);
            var disY = edge2Top - winH;
            if (disY > 0) {
                willPos.y -= disY;
            }
        }
        else {
            var edge2Bottom = willPos.y - height * popNode.anchorY;
            if (edge2Bottom < 0) {
                willPos.y -= edge2Bottom;
            }
        }
        var pos = popNode.parent.convertToNodeSpaceAR(willPos);
        cc.log(pos, popNode.name);
        popNode.setPosition(pos);
    };
    /**
     * 子节点递归处理
     * @param node 需要递归处理的节点或节点数组
     * @param cb 节点处理函数
     * @param thisArg cb绑定的this对象
     */
    ViewUtil.nodeRecursive = function (node, cb, thisArg) {
        var _this = this;
        if (thisArg === void 0) { thisArg = undefined; }
        if (node instanceof cc.Node) {
            cb.call(thisArg, node);
            node.children.forEach(function (n) { _this.nodeRecursive(n, cb, thisArg); });
        }
        else if (Array.isArray(node)) {
            node.forEach(function (n) { _this.nodeRecursive(n, cb, thisArg); });
        }
    };
    /**
     * 更改spriteframe
     * @param sprite
     * @param url
     */
    ViewUtil.changeSpriteFrame = function (sprite, url, endCb) {
        sprite.changeSpriteFrame(url, endCb);
    };
    /**
     * 更改spriteframe
     * @param sprite
     * @param url
     */
    ViewUtil.changeSFWithAtlas = function (sprite, url, subFile, endCb) {
        sprite.changeSFWithAtlas(url, subFile, endCb);
    };
    /**
     * 更改spine
     * @param sprite
     * @param url
     */
    ViewUtil.changeSkeletonData = function (spine, url, endCb) {
        spine.changeSkeletonData(url, endCb);
    };
    /** 重置Ctrl中的view和model对象 */
    ViewUtil.resetControlMVObj = function (node) {
        var clsName = node.name;
        if (clsName.startsWith('P_') || clsName.startsWith('V_') || clsName.startsWith('F_')) {
            clsName = clsName.substring(2);
        }
        if (!clsName.startsWith('C_')) {
            var ctrlComp = node.getComponent(clsName);
            if (ctrlComp) {
                var modelComp = node.getComponent(clsName + "Model");
                if (modelComp) {
                    ctrlComp.model = modelComp;
                }
                var viewComp = node.getComponent(clsName + "View");
                if (viewComp) {
                    ctrlComp.view = viewComp;
                }
            }
        }
        for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var one = _a[_i];
            this.resetControlMVObj(one);
        }
    };
    /** 实例化MVC预制体 */
    ViewUtil.instantiateMVCPrefab = function (prefab, related) {
        var newNode = c2f.res.instantiate(prefab, related);
        var clsName = prefab.name;
        if (clsName.startsWith('P_') || clsName.startsWith('V_') || clsName.startsWith('F_')) {
            clsName = clsName.substring(2);
        }
        if (!clsName.startsWith('C_')) {
            var modelComp = newNode.getComponent(clsName + "Model");
            if (!modelComp) {
                modelComp = newNode.addComponent(clsName + "Model");
            }
            var viewComp = newNode.getComponent(clsName + "View");
            if (!viewComp) {
                viewComp = newNode.addComponent(clsName + "View");
                viewComp.initViewProperty();
            }
            var ctrlComp = newNode.getComponent(clsName);
            if (!ctrlComp) {
                ctrlComp = newNode.addComponent(clsName);
            }
            ctrlComp.model = modelComp;
            ctrlComp.view = viewComp;
        }
        if (prefab instanceof cc.Node) {
            this.resetControlMVObj(newNode);
        }
        return newNode;
    };
    return ViewUtil;
}());
c2f.utils.view = ViewUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL3V0aWxzL1ZpZXdVdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsYUFBYTtBQUNiO0lBQUE7SUF5bkJBLENBQUM7SUF4bkJHOzs7OztPQUtHO0lBQ0kseUJBQWdCLEdBQXZCLFVBQXdCLE1BQWUsRUFBRSxHQUEwQjtRQUMvRCxJQUFJLEdBQUcsR0FBeUIsR0FBRyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDakQsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQixtREFBbUQ7WUFDbkQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbkIsR0FBRztZQUNILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDdkM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLGtCQUFTLEdBQWhCLFVBQWlCLEdBQVcsRUFBRSxNQUFlLEVBQUUsS0FBc0I7UUFDakUsSUFBSSxFQUFFLEdBQW1CLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDckMsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNu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InNvdXJjZXNDb250ZW50IjpbIi8qKiDmmL7npLrlr7nosaHlt6XlhbcgKi9cbmNsYXNzIFZpZXdVdGlsIHtcbiAgICAvKipcbiAgICAgKiDmiopOb2Rl5b2T5YmN55qE6IqC54K55qCR57uT5p6E5qC55o2uTm9kZeWRveWQjei9rOaIkOS4gOS4qmpz5a+56LGhLOmHjeWQjeeahOe7hOS7tuS8muimhueblu+8jFxuICAgICAqIE5vZGXnmoRuYW1l6aaW5a2X56ym5Li6J18n5Yqg5YWl5YiX6KGo77yM5YW25LuW5LiN5YqgXG4gICAgICogQHBhcmFtIHBhcmVudCDooqvpgY3ljobnmoROb2Rl57uE5Lu2XG4gICAgICogQHBhcmFtIG9iaiAgICDnu5HlrprnmoRqc+WvueixoSAo5Y+v6YCJKVxuICAgICAqL1xuICAgIHN0YXRpYyBub2RlVHJlZUluZm9MaXRlKHBhcmVudDogY2MuTm9kZSwgb2JqPzogTWFwPHN0cmluZywgY2MuTm9kZT4pOiBNYXA8c3RyaW5nLCBjYy5Ob2RlPiB8IG51bGwge1xuICAgICAgICBsZXQgbWFwOiBNYXA8c3RyaW5nLCBjYy5Ob2RlPiA9IG9iaiB8fCBuZXcgTWFwKCk7XG4gICAgICAgIGxldCBpdGVtcyA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG9uZSA9IGl0ZW1zW2ldO1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBvbmUubmFtZS50cmltKCk7XG4gICAgICAgICAgICAvL2lmIChuYW1lLnN0YXJ0c1dpdGgoJ18nKSAmJiBuYW1lLmVuZHNXaXRoKCdfJykpIHtcbiAgICAgICAgICAgIG1hcC5zZXQobmFtZSwgb25lKTtcbiAgICAgICAgICAgIC8vfVxuICAgICAgICAgICAgVmlld1V0aWwubm9kZVRyZWVJbmZvTGl0ZShvbmUsIG1hcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hcDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmraPliJnmkJzntKLoioLngrnlkI3lrZcs56ym5ZCI5p2h5Lu255qE6IqC54K55bCG5Lya6L+U5ZueXG4gICAgICogQHBhcmFtIHJlZyAgICAg5q2j5YiZ6KGo6L6+5byPXG4gICAgICogQHBhcmFtIHBhcmVudCAg6KaB5pCc57Si55qE54i26IqC54K5XG4gICAgICogQHBhcmFtIG5vZGVzICAg6L+U5Zue55qE5pWw57uE77yI5Y+v6YCJ77yJXG4gICAgICovXG4gICAgc3RhdGljIGZpbmROb2RlcyhyZWc6IFJlZ0V4cCwgcGFyZW50OiBjYy5Ob2RlLCBub2Rlcz86IEFycmF5PGNjLk5vZGU+KTogQXJyYXk8Y2MuTm9kZT4ge1xuICAgICAgICBsZXQgbnM6IEFycmF5PGNjLk5vZGU+ID0gbm9kZXMgfHwgW107XG4gICAgICAgIGxldCBpdGVtcyA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5hbWU6IHN0cmluZyA9IGl0ZW1zW2ldLm5hbWU7XG4gICAgICAgICAgICBpZiAocmVnLnRlc3QobmFtZSkpIHtcbiAgICAgICAgICAgICAgICBucy5wdXNoKGl0ZW1zW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFZpZXdVdGlsLmZpbmROb2RlcyhyZWcsIGl0ZW1zW2ldLCBucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5zO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bnu4Tku7blkI3np7BcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IOe7hOS7tuWvueixoVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDb21wb25lbnROYW1lKHRhcmdldDogY2MuQ29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gLzwoW14+XSopPi9nOyAvLyDmraPliJnooajovr7lvI/ljLnphY3lsJbmi6zlj7flhoXnmoTlrZfnrKbkuLIgIFxuICAgICAgICBjb25zdCBtYXRjaGVzID0gdGFyZ2V0Lm5hbWUubWF0Y2gocmVnZXgpOyAvLyDojrflj5bljLnphY3nu5PmnpwgIFxuICAgICAgICBjb25zdCByZXN1bHQgPSBtYXRjaGVzID8gbWF0Y2hlcy5tYXAobWF0Y2ggPT4gbWF0Y2gucmVwbGFjZSgvPHw+L2csICcnKSkgOiBbJyddO1xuICAgICAgICBjb25zdCBuYW1lID0gcmVzdWx0WzBdO1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDoioLngrnkuYvpl7TlnZDmoIfkupLovaxcbiAgICAgKiBAcGFyYW0gYSAgICAgICAgIEHoioLngrlcbiAgICAgKiBAcGFyYW0gYiAgICAgICAgIELoioLngrlcbiAgICAgKiBAcGFyYW0gYVBvcyAgICAgIEHoioLngrnnqbrpl7TkuK3nmoTnm7jlr7nkvY3nva5cbiAgICAgKi9cbiAgICBzdGF0aWMgY2FsY3VsYXRlQVNwYWNlVG9CU3BhY2VQb3MoYTogY2MuTm9kZSwgYjogY2MuTm9kZSwgYVBvczogY2MuVmVjMyk6IGNjLlZlYzMge1xuICAgICAgICBsZXQgd29ybGQ6IGNjLlZlYzMgPSBhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihhUG9zKTtcbiAgICAgICAgbGV0IHNwYWNlOiBjYy5WZWMzID0gYi5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZCk7XG4gICAgICAgIHJldHVybiBzcGFjZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlsY/luZXovaznqbrpl7TlnZDmoIdcbiAgICAgKiBAcGFyYW0gZXZlbnQg6Kem5pG45LqL5Lu2XG4gICAgICogQHBhcmFtIHNwYWNlIOi9rOWIsOatpOiKgueCueeahOWdkOagh+epuumXtFxuICAgICAqL1xuICAgIHN0YXRpYyBjYWxjdWxhdGVTY3JlZW5Qb3NUb1NwYWNlUG9zKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoLCBzcGFjZTogY2MuTm9kZSk6IGNjLlZlYzMge1xuICAgICAgICBsZXQgdWlsID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgbGV0IHdvcmxkUG9zOiBjYy5WZWMzID0gY2MudjModWlsLngsIHVpbC55KTtcbiAgICAgICAgbGV0IG1hcFBvczogY2MuVmVjMyA9IHNwYWNlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcbiAgICAgICAgcmV0dXJuIG1hcFBvcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmmL7npLrlr7nosaHnrYnmr5TnvKnmlL5cbiAgICAgKiBAcGFyYW0gdGFyZ2V0V2lkdGggICAgICAg55uu5qCH5a69XG4gICAgICogQHBhcmFtIHRhcmdldEhlaWdodCAgICAgIOebruagh+mrmFxuICAgICAqIEBwYXJhbSBkZWZhdWx0V2lkdGggICAgICDpu5jorqTlrr1cbiAgICAgKiBAcGFyYW0gZGVmYXVsdEhlaWdodCAgICAg6buY6K6k6auYXG4gICAgICovXG4gICAgc3RhdGljIHVuaWZvcm1TY2FsZSh0YXJnZXRXaWR0aDogbnVtYmVyLCB0YXJnZXRIZWlnaHQ6IG51bWJlciwgZGVmYXVsdFdpZHRoOiBudW1iZXIsIGRlZmF1bHRIZWlnaHQ6IG51bWJlcikge1xuICAgICAgICBsZXQgd2lkdGhSYXRpbyA9IGRlZmF1bHRXaWR0aCAvIHRhcmdldFdpZHRoO1xuICAgICAgICBsZXQgaGVpZ2h0UmF0aW8gPSBkZWZhdWx0SGVpZ2h0IC8gdGFyZ2V0SGVpZ2h0O1xuICAgICAgICBsZXQgcmF0aW8gPSB3aWR0aFJhdGlvIDwgaGVpZ2h0UmF0aW8gPyB3aWR0aFJhdGlvIDogaGVpZ2h0UmF0aW87XG4gICAgICAgIGxldCBzaXplID0gbmV3IGNjLlNpemUoTWF0aC5mbG9vcih0YXJnZXRXaWR0aCAqIHJhdGlvKSwgTWF0aC5mbG9vcih0YXJnZXRIZWlnaHQgKiByYXRpbykpO1xuICAgICAgICByZXR1cm4gc2l6ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmo4DmtYvoioLngrnmmK/lkKblnKjlsY/luZXkuYvlhoVcbiAgICAgKiBAcGFyYW0gbm9kZSDnm67moIfoioLngrlcbiAgICAgKi9cbiAgICBzdGF0aWMgbm9kZUlzSW5WaWV3KG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGluVmlldyA9IHRydWU7XG5cbiAgICAgICAgbGV0IHN6VmlzaWJsZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcbiAgICAgICAgbGV0IHBvc1cgPSBub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMzLlpFUk8pO1xuICAgICAgICBpZiAocG9zVy54IDw9IDApIHtcbiAgICAgICAgICAgIGxldCByaWdodFggPSBwb3NXLnggKyBub2RlLndpZHRoICogKDEgLSBub2RlLmFuY2hvclgpO1xuICAgICAgICAgICAgaW5WaWV3ID0gcmlnaHRYIDwgMCA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBsZWZ0WCA9IHBvc1cueCAtIG5vZGUud2lkdGggKiBub2RlLmFuY2hvclg7XG4gICAgICAgICAgICBpblZpZXcgPSBsZWZ0WCA+IHN6VmlzaWJsZS53aWR0aCA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5WaWV3KSB7XG4gICAgICAgICAgICBpZiAocG9zVy55IDw9IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgdG9wWSA9IHBvc1cueSArIG5vZGUuaGVpZ2h0ICogKDEgLSBub2RlLmFuY2hvclkpO1xuICAgICAgICAgICAgICAgIGluVmlldyA9IHRvcFkgPCAwID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgYm90dG9tWSA9IHBvc1cueSAtIG5vZGUuaGVpZ2h0ICogbm9kZS5hbmNob3JZO1xuICAgICAgICAgICAgICAgIGluVmlldyA9IGJvdHRvbVkgPiBzelZpc2libGUuaGVpZ2h0ID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpblZpZXc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5qOA5rWL6IqC54K55piv5ZCm5Zyo5bGP5bmV5LmL5YaFXG4gICAgICogQHBhcmFtIG5vZGUg55uu5qCH6IqC54K5XG4gICAgICovXG4gICAgc3RhdGljIG5vZGVGdWxsSW5WaWV3KG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGZ1bGxJblZpZXcgPSB0cnVlO1xuXG4gICAgICAgIGxldCBzelZpc2libGUgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCk7XG4gICAgICAgIGxldCBwb3NXID0gbm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMy5aRVJPKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygncG9zIGluIHdvcmxkOicsIHBvc1csIG5vZGUpO1xuICAgICAgICBpZiAocG9zVy54IDw9IDApIHtcbiAgICAgICAgICAgIGxldCBsZWZ0WCA9IHBvc1cueCAtIG5vZGUud2lkdGggKiBub2RlLmFuY2hvclg7XG4gICAgICAgICAgICBmdWxsSW5WaWV3ID0gbGVmdFggPj0gMCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCByaWdodFggPSBwb3NXLnggKyBub2RlLndpZHRoICogKDEgLSBub2RlLmFuY2hvclgpO1xuICAgICAgICAgICAgZnVsbEluVmlldyA9IHJpZ2h0WCA8PSBzelZpc2libGUud2lkdGggPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZ1bGxJblZpZXcpIHtcbiAgICAgICAgICAgIGlmIChwb3NXLnkgPD0gMCkge1xuICAgICAgICAgICAgICAgIGxldCBib3R0b21ZID0gcG9zVy55IC0gbm9kZS5oZWlnaHQgKiBub2RlLmFuY2hvclk7XG4gICAgICAgICAgICAgICAgZnVsbEluVmlldyA9IGJvdHRvbVkgPj0gMCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvcFkgPSBwb3NXLnkgKyBub2RlLmhlaWdodCAqICgxIC0gbm9kZS5hbmNob3JZKTtcbiAgICAgICAgICAgICAgICBmdWxsSW5WaWV3ID0gdG9wWSA8PSBzelZpc2libGUuaGVpZ2h0ID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdWxsSW5WaWV3O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOajgOa1i+iKgueCueWcqFnovbTmlrnlkJHmmK/lkKblt7LlnKjlsY/luZXkuYvlpJZcbiAgICAgKiBAcGFyYW0gbm9kZSDnm67moIfoioLngrlcbiAgICAgKi9cbiAgICBzdGF0aWMgbm9kZUlzT3V0QnlIZWlnaHQobm9kZTogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgb3V0VmlldyA9IGZhbHNlO1xuICAgICAgICBsZXQgc3pWaXNpYmxlID0gY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpO1xuICAgICAgICBsZXQgcG9zVyA9IG5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzMuWkVSTyk7XG4gICAgICAgIGlmIChwb3NXLnkgPD0gMCkge1xuICAgICAgICAgICAgbGV0IHRvcFkgPSBwb3NXLnkgKyBub2RlLmhlaWdodCAqICgxIC0gbm9kZS5hbmNob3JZKTtcbiAgICAgICAgICAgIG91dFZpZXcgPSB0b3BZIDwgMCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBib3R0b21ZID0gcG9zVy55IC0gbm9kZS5oZWlnaHQgKiBub2RlLmFuY2hvclk7XG4gICAgICAgICAgICBvdXRWaWV3ID0gYm90dG9tWSA+IHN6VmlzaWJsZS5oZWlnaHQgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dFZpZXc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5qOA5rWL6IqC54K55ZyoWOi9tOaWueWQkeaYr+WQpuW3suWcqOWxj+W5leS5i+WkllxuICAgICAqIEBwYXJhbSBub2RlIOebruagh+iKgueCuVxuICAgICAqL1xuICAgIHN0YXRpYyBub2RlSXNPdXRCeVdpZHRoKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IG91dFZpZXcgPSBmYWxzZTtcblxuICAgICAgICBsZXQgc3pWaXNpYmxlID0gY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpO1xuICAgICAgICBsZXQgcG9zVyA9IGMyZi51dGlscy5ub2RlLmdldE5vZGVXb3JsZFBvc2l0aW9uKG5vZGUpO1xuICAgICAgICBpZiAocG9zVy54IDw9IDApIHtcbiAgICAgICAgICAgIGxldCByaWdodFggPSBwb3NXLnggKyBub2RlLndpZHRoICogKDEgLSBub2RlLmFuY2hvclgpO1xuICAgICAgICAgICAgb3V0VmlldyA9IHJpZ2h0WCA8IDAgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbGVmdFggPSBwb3NXLnggLSBub2RlLndpZHRoICogbm9kZS5hbmNob3JYO1xuICAgICAgICAgICAgb3V0VmlldyA9IGxlZnRYID4gc3pWaXNpYmxlLndpZHRoID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRWaWV3O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOS4pOiKgueCueS5i+mXtOeahOi3neemu1xuICAgICAqIEBwYXJhbSBub2RlMSDoioLngrkxXG4gICAgICogQHBhcmFtIG5vZGUxIOiKgueCuTJcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Tm9kZURpc3RhbmNlKG5vZGUxOiBjYy5Ob2RlLCBub2RlMjogY2MuTm9kZSkge1xuICAgICAgICBsZXQgZGlzdGFuY2UgPSAwO1xuICAgICAgICBsZXQgZGlyZWN0aW9uID0gY2MudjMoMCwgMCwgMClcbiAgICAgICAgbGV0IHBvc1cxID0gYzJmLnV0aWxzLm5vZGUuZ2V0Tm9kZVdvcmxkUG9zaXRpb24obm9kZTEpO1xuICAgICAgICBsZXQgcG9zVzIgPSBjMmYudXRpbHMubm9kZS5nZXROb2RlV29ybGRQb3NpdGlvbihub2RlMik7XG4gICAgICAgIGRpc3RhbmNlID0gYzJmLnV0aWxzLnZlYy5kaXN0YW5jZShwb3NXMSwgcG9zVzIpO1xuICAgICAgICBkaXJlY3Rpb24gPSBjMmYudXRpbHMudmVjLmRpcmVjdGlvbihwb3NXMSwgcG9zVzIpO1xuICAgICAgICByZXR1cm4geyBkaXN0YW5jZSwgZGlyZWN0aW9uIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6IqC54K5MeWIsOiKgueCuTLov57nur/kuI546L205pa55ZCR55qE5aS56KeSXG4gICAgICogQHBhcmFtIG5vZGUxIOiKgueCuTFcbiAgICAgKiBAcGFyYW0gbm9kZTEg6IqC54K5MlxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRUd29Ob2RlQW5nbGUobm9kZTE6IGNjLk5vZGUsIG5vZGUyOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCBwb3NXMSA9IGMyZi51dGlscy5ub2RlLmdldE5vZGVXb3JsZFBvc2l0aW9uKG5vZGUxKTtcbiAgICAgICAgbGV0IHBvc1cyID0gYzJmLnV0aWxzLm5vZGUuZ2V0Tm9kZVdvcmxkUG9zaXRpb24obm9kZTIpO1xuICAgICAgICBsZXQgYW5nbGU6IG51bWJlciA9IGMyZi51dGlscy52ZWMuYW5nbGVFeChwb3NXMSwgcG9zVzIpO1xuICAgICAgICByZXR1cm4gYW5nbGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5LiW55WM5Z2Q5qCH54K55Yiw6IqC54K56L+e57q/5LiOeOi9tOaWueWQkeeahOWkueinklxuICAgICAqIEBwYXJhbSBub2RlMSDoioLngrkxXG4gICAgICogQHBhcmFtIG5vZGUxIOiKgueCuTJcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0V29ybGRQb3NUb05vZGVBbmdsZSh3b3JsZFBvczogY2MuVmVjMywgbm9kZTogY2MuTm9kZSkge1xuICAgICAgICBsZXQgbm9kZVBvc1cgPSBjMmYudXRpbHMubm9kZS5nZXROb2RlV29ybGRQb3NpdGlvbihub2RlKTtcbiAgICAgICAgbGV0IGNlbnRlclBvcyA9IG5vZGVQb3NXO1xuICAgICAgICBjZW50ZXJQb3MueCA9IG5vZGVQb3NXLnggKyAoMC41IC0gbm9kZS5hbmNob3JYKSAqIG5vZGUud2lkdGg7XG4gICAgICAgIGNlbnRlclBvcy55ID0gbm9kZVBvc1cueSArICgwLjUgLSBub2RlLmFuY2hvclkpICogbm9kZS5oZWlnaHQ7XG4gICAgICAgIGxldCBhbmdsZSA9IGMyZi51dGlscy52ZWMuYW5nbGVFeCh3b3JsZFBvcywgY2VudGVyUG9zKTtcbiAgICAgICAgcmV0dXJuIGFuZ2xlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiKgueCuW5vZGXlnKhwYW5lbOS4i+eahOWdkOagh1xuICAgICAqIEBwYXJhbSBub2RlIOiKgueCuTFcbiAgICAgKiBAcGFyYW0gcGFuZWwg6IqC54K5MlxuICAgICAqL1xuICAgIHN0YXRpYyBnZXROb2RlSW5QYW5lbFBvcyhub2RlOiBjYy5Ob2RlLCBwYW5lbDogY2MuTm9kZSwgb3V0PzogY2MuVmVjMikge1xuICAgICAgICBsZXQgcG9zTCA9IG5vZGUuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgbGV0IHBvc1cgPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zTCk7XG4gICAgICAgIGlmIChvdXQpIHtcbiAgICAgICAgICAgIHBhbmVsLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3NXLCBvdXQpO1xuICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0YXJQb3MgPSBwYW5lbC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zVyk7XG4gICAgICAgICAgICByZXR1cm4gdGFyUG9zO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5LuO6LWE5rqQ57yT5a2Y5Lit5om+5Yiw6aKE5Yi26LWE5rqQ5ZCN5bm25Yib5bu65LiA5Liq5pi+56S65a+56LGhXG4gICAgICogQHBhcmFtIHBhdGgg6LWE5rqQ6Lev5b6EXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVByZWZhYk5vZGUocGF0aDogc3RyaW5nKTogY2MuTm9kZSB7XG4gICAgICAgIGxldCBwOiBjYy5QcmVmYWIgPSBjMmYucmVzLmdldChwYXRoLCBjYy5QcmVmYWIpITtcbiAgICAgICAgbGV0IG4gPSBjMmYucmVzLmluc3RhbnRpYXRlKHApO1xuICAgICAgICByZXR1cm4gbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliqDovb3pooTliLblubbliJvlu7rpooTliLboioLngrlcbiAgICAgKiBAcGFyYW0gcGF0aCDotYTmupDot6/lvoRcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlUHJlZmFiTm9kZUFzeW5jKHBhdGg6IHN0cmluZyk6IFByb21pc2U8Y2MuTm9kZT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgYzJmLnJlcy5sb2FkKHBhdGgsIGNjLlByZWZhYiwgKGVycjogRXJyb3IgfCBudWxsLCBjb250ZW50OiBjYy5QcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYOWQjeS4uuOAkCR7cGF0aH3jgJHnmoTotYTmupDliqDovb3lpLHotKVgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuY3JlYXRlUHJlZmFiTm9kZShwYXRoKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWKoOi9vemihOWItuiKgueCuVxuICAgICAqIEBwYXJhbSBwYXRoICAgICAgICAgIOi1hOa6kOi3r+W+hFxuICAgICAqIEBwYXJhbSBjYWxsYmFjayAgICAgIOi1hOa6kOWKoOi9veWujOaIkOWbnuiwg1xuICAgICAqL1xuICAgIHN0YXRpYyBsb2FkUHJlZmFiTm9kZShwYXRoOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgICAgICBjMmYucmVzLmxvYWQocGF0aCwgY2MuUHJlZmFiLCAoZXJyOiBFcnJvciB8IG51bGwsIGNvbnRlbnQ6IGNjLlByZWZhYikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYOWQjeS4uuOAkCR7cGF0aH3jgJHnmoTotYTmupDliqDovb3lpLHotKVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuY3JlYXRlUHJlZmFiTm9kZShwYXRoKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmt7vliqDoioLngrnliqjnlLtcbiAgICAgKiBAcGFyYW0gcGF0aCAgICAgICAgICAgICAg6LWE5rqQ6Lev5b6EXG4gICAgICogQHBhcmFtIG5vZGUgICAgICAgICAgICAgIOebruagh+iKgueCuVxuICAgICAqIEBwYXJhbSBvbmx5T25lICAgICAgICAgICDmmK/lkKbllK/kuIBcbiAgICAgKiBAcGFyYW0gaXNEZWZhdWx0Q2xpcCAgICAg5piv5ZCm5pKt5pS+6buY6K6k5Yqo55S75Ymq6L6RXG4gICAgICovXG4gICAgc3RhdGljIGFkZE5vZGVBbmltYXRpb24ocGF0aDogc3RyaW5nLCBub2RlOiBjYy5Ob2RlLCBvbmx5T25lOiBib29sZWFuID0gdHJ1ZSwgaXNEZWZhdWx0Q2xpcDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghbm9kZSB8fCAhbm9kZS5pc1ZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFuaW0gPSBub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuICAgICAgICBpZiAoYW5pbSA9PSBudWxsKSB7XG4gICAgICAgICAgICBhbmltID0gbm9kZS5hZGRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2xpcCA9IGMyZi5yZXMuZ2V0KHBhdGgsIGNjLkFuaW1hdGlvbkNsaXApIGFzIGNjLkFuaW1hdGlvbkNsaXA7XG4gICAgICAgIGlmICghY2xpcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvbmx5T25lICYmIGFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoY2xpcCEubmFtZSkgJiYgYW5pbS5nZXRBbmltYXRpb25TdGF0ZShjbGlwIS5uYW1lKS5pc1BsYXlpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEZWZhdWx0Q2xpcCkge1xuICAgICAgICAgICAgYW5pbS5kZWZhdWx0Q2xpcCA9IGNsaXA7XG4gICAgICAgICAgICBhbmltLnBsYXkoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaSreaUvuWujOaIkOWQjuaBouWkjeaSreaUvum7mOiupOWKqOeUu1xuICAgICAgICBhbmltLm9uY2UoY2MuQW5pbWF0aW9uLkV2ZW50VHlwZS5GSU5JU0hFRCwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGFuaW0hLmRlZmF1bHRDbGlwKSB7XG4gICAgICAgICAgICAgICAgYW5pbSEucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICBpZiAoYW5pbS5nZXRBbmltYXRpb25TdGF0ZShjbGlwIS5uYW1lKSkge1xuICAgICAgICAgICAgYW5pbS5wbGF5KGNsaXAhLm5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy9hbmltLmNyZWF0ZWFTdGF0ZShjbGlwLCBjbGlwIS5uYW1lKTtcbiAgICAgICAgYW5pbS5wbGF5KGNsaXAhLm5hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICog57uZ5oyJ6ZKu5re75Yqg55uR5ZCsXG4gICAgKiBAcGFyYW0gbm9kZSDnm67moIfoioLngrlcbiAgICAqL1xuICAgIHN0YXRpYyBhZGRCdXR0b25MaXN0ZW4obm9kZTogY2MuTm9kZSwgY2FsbGVyOiBhbnksIGZ1bmM6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGxldCBidXR0b24gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgICAgICBub2RlLm9uKCdjbGljaycsIGZ1bmMsIGNhbGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcGF0aCA9IHRoaXMuZ2V0Tm9kZVBhdGgobm9kZSk7XG4gICAgICAgICAgICBjYy53YXJuKFwiZG9uJ3QgZmluZCBCdXR0b24gY29tcG9uZW50IGZvciBub2RlOlwiLCBwYXRoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+W+l+iKgueCuei3r+W+hFxuICAgICAqIEBwYXJhbSBub2RlIOebruagh+iKgueCuVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXROb2RlUGF0aChub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCBwYXRoID0gbm9kZS5uYW1lO1xuICAgICAgICBpZiAobm9kZS5wYXJlbnQpIHtcbiAgICAgICAgICAgIGxldCBwcmVQYXRoID0gdGhpcy5nZXROb2RlUGF0aChub2RlLnBhcmVudCk7XG4gICAgICAgICAgICBwYXRoID0gcHJlUGF0aCArICcvJyArIHBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog56e76Zmk5omA5pyJ5a2Q6IqC54K5XG4gICAgICogQHBhcmFtIG5vZGUgXG4gICAgICovXG4gICAgc3RhdGljIGNsZWFyQ2hpbGRyZW4obm9kZTogY2MuTm9kZSkge1xuICAgICAgICBpZiAobm9kZSAhPSBudWxsICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGNoaWxkcmVuQXJyYXkgPSBub2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgd2hpbGUgKGNoaWxkcmVuQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuQXJyYXlbMF07XG4gICAgICAgICAgICAgICAgY2hpbGQucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDlm77niYfnva7ngbAgKi9cbiAgICBzdGF0aWMgc2V0U3ByaXRlR3JheShpY29uOiBjYy5TcHJpdGUsIGlzR3JheTogYm9vbGVhbikge1xuICAgICAgICBpZiAoaXNHcmF5KSB7XG4gICAgICAgICAgICBsZXQgbWF0R3JheSA9IGNjLk1hdGVyaWFsLmdldEJ1aWx0aW5NYXRlcmlhbChcIjJkLWdyYXktc3ByaXRlXCIpO1xuICAgICAgICAgICAgaWNvbi5zZXRNYXRlcmlhbCgwLCBtYXRHcmF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBtYXREZWYgPSBjYy5NYXRlcmlhbC5nZXRCdWlsdGluTWF0ZXJpYWwoXCIyZC1zcHJpdGVcIik7XG4gICAgICAgICAgICBpY29uLnNldE1hdGVyaWFsKDAsIG1hdERlZik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog6IqC54K5572u54GwICovXG4gICAgc3RhdGljIHNldE5vZGVHcmF5KG5vZGU6IGNjLk5vZGUsIGlzR3JheTogYm9vbGVhbikge1xuICAgICAgICBsZXQgc3ByaXRlID0gbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgaWYgKHNwcml0ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTcHJpdGVHcmF5KHNwcml0ZSwgaXNHcmF5KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Tm9kZUdyYXkobm9kZS5jaGlsZHJlbltpXSwgaXNHcmF5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v6I635b6X6K+l5ZCN56ew55qE5omA5pyJ5a2Q6IqC54K5XG4gICAgc3RhdGljIGdldENoaWxkcmVuQnlOYW1lKG5vZGU6IGNjLk5vZGUsIGRzdE5hbWU6IHN0cmluZykge1xuICAgICAgICBsZXQgY2hpbGRyZW46IGNjLk5vZGVbXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChub2RlLmNoaWxkcmVuW2ldLm5hbWUgPT0gZHN0TmFtZSkge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2gobm9kZS5jaGlsZHJlbltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc3ViTm9kZXMgPSB0aGlzLmdldENoaWxkcmVuQnlOYW1lKG5vZGUuY2hpbGRyZW5baV0sIGRzdE5hbWUpO1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5jb25jYXQoc3ViTm9kZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9XG5cbiAgICAvL+iOt+W+l+ivpeWQjeensOeahOesrOS4gOS4quWtkOiKgueCuVxuICAgIHN0YXRpYyBnZXRGaXJzdENoaWxkQnlOYW1lKG5vZGU6IGNjLk5vZGUsIGRzdE5hbWU6IHN0cmluZykge1xuICAgICAgICBsZXQgZmlyc3RDaGlsZDogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW5CeU5hbWUobm9kZSwgZHN0TmFtZSk7XG4gICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmaXJzdENoaWxkID0gY2hpbGRyZW5bMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpcnN0Q2hpbGQ7XG4gICAgfVxuXG4gICAgLyoqIOS7juWtkOiKgueCueS4reafpeaJvuWvueW6lOe7hOS7tsK35LiN6YCS5b2SICovXG4gICAgc3RhdGljIGdldENoaWxkcmVuQnlDb21wb25lbnQ8VCBleHRlbmRzIGNjLkNvbXBvbmVudD4obm9kZTogY2MuTm9kZSwgdHlwZTogeyBwcm90b3R5cGU6IFQgfSkge1xuICAgICAgICBsZXQgcmVzdWx0OiBUW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBvbmUgPSBub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbGV0IGNvbXAgPSBvbmUuZ2V0Q29tcG9uZW50KHR5cGUpO1xuICAgICAgICAgICAgaWYgKGNvbXApIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjb21wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRBbGxDaGlsZENvdW50KHJvb3Q6IHN0cmluZywgbm9kZTogY2MuTm9kZSkge1xuICAgICAgICBsZXQgdXJsID0gcm9vdCArICdfJyArIG5vZGUubmFtZTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0QWxsQ2hpbGRDb3VudDonLCB1cmwpO1xuICAgICAgICBsZXQgY291bnQgPSBub2RlLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgb25lIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvdW50ICs9IHRoaXMuZ2V0QWxsQ2hpbGRDb3VudCh1cmwsIG9uZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cblxuICAgIC8qKiDlgY/np7vnn6nlvaIgKi9cbiAgICBzdGF0aWMgb2Zmc2V0UmVjdChib3g6IGNjLlJlY3QsIG9mZnNldDogY2MuVmVjMikge1xuICAgICAgICBsZXQgb2ZmV2lkdGggPSBvZmZzZXQueDtcbiAgICAgICAgbGV0IG9mZkhlaWd0ID0gb2Zmc2V0Lnk7XG5cbiAgICAgICAgYm94LnggKz0gLW9mZldpZHRoO1xuICAgICAgICBib3gueSArPSAtb2ZmSGVpZ3Q7XG4gICAgICAgIGJveC53aWR0aCArPSAyICogb2ZmV2lkdGg7XG4gICAgICAgIGJveC5oZWlnaHQgKz0gb2ZmSGVpZ3Q7XG4gICAgICAgIHJldHVybiBib3g7XG4gICAgfVxuXG4gICAgLyoqIOiHquWKqOiwg+aVtOW8ueWHuumhtemdouS9jee9ru+8jOS/neivgeWFtuWcqOWPr+inhueVjOmdouWGhSBcbiAgICAgKiBwb3BOb2RlOiDlvLnlh7roioLngrlcbiAgICAgKiBjbGlja1BvczJXb3JsZO+8miDngrnlh7vkvY3nva5cbiAgICAgKiBhbGlnblR5cGXvvJrlr7npvZDmlrnlvI8oMTrlt6blr7npvZDvvIwgMu+8muWPs+Wvuem9kO+8jCAz77ya5LiK5a+56b2Q77yMIDTvvJrkuIvlr7npvZDvvIwgNe+8muiHquWKqCwgNjrlsYXkuK3kuIvlr7npvZApXG4gICAgKi9cbiAgICBzdGF0aWMgYXV0b0FkanVzdFBvcFdpblBvcyhwb3BOb2RlOiBjYy5Ob2RlLCBjbGlja1BvczJXb3JsZDogY2MuVmVjMiwgYWxpZ25UeXBlOiBudW1iZXIgPSA1KSB7XG4gICAgICAgIGlmIChwb3BOb2RlID09IG51bGwgfHwgY2xpY2tQb3MyV29ybGQgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN6VmlzaWJsZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcblxuICAgICAgICBsZXQgaGVpZ2h0ID0gcG9wTm9kZS5oZWlnaHQgKiBwb3BOb2RlLnNjYWxlWTtcbiAgICAgICAgbGV0IHdpZHRoID0gcG9wTm9kZS53aWR0aCAqIHBvcE5vZGUuc2NhbGVYO1xuICAgICAgICBjb25zdCB3aW5IID0gc3pWaXNpYmxlLmhlaWdodDtcbiAgICAgICAgY29uc3Qgd2luVyA9IHN6VmlzaWJsZS53aWR0aDtcblxuICAgICAgICBsZXQgd2lsbFBvcyA9IGNsaWNrUG9zMldvcmxkLmNsb25lKCk7XG4gICAgICAgIGxldCBhbGlnbiA9IGFsaWduVHlwZSB8fCA1O1xuICAgICAgICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgd2lsbFBvcy54ICs9IHBvcE5vZGUuYW5jaG9yWCAqIHdpZHRoO1xuICAgICAgICAgICAgICAgIHdpbGxQb3MueSArPSAocG9wTm9kZS5hbmNob3JZIC0gMC41KSAqIGhlaWdodDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB3aWxsUG9zLnggLT0gKDEgLSBwb3BOb2RlLmFuY2hvclgpICogd2lkdGg7XG4gICAgICAgICAgICAgICAgd2lsbFBvcy55ICs9IChwb3BOb2RlLmFuY2hvclkgLSAwLjUpICogaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHdpbGxQb3MueSAtPSAoMSAtIHBvcE5vZGUuYW5jaG9yWSkgKiBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgd2lsbFBvcy54ICs9IChwb3BOb2RlLmFuY2hvclggLSAwLjUpICogd2lkdGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgd2lsbFBvcy55ICs9IHBvcE5vZGUuYW5jaG9yWSAqIGhlaWdodDtcbiAgICAgICAgICAgICAgICB3aWxsUG9zLnggKz0gKHBvcE5vZGUuYW5jaG9yWCAtIDAuNSkgKiB3aWR0aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB3aWxsUG9zWCA9IGNsaWNrUG9zMldvcmxkLng7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGlja1BvczJXb3JsZC54IDw9IHdpblcgKiAwLjUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5LulbGF5b3V0X2Jn5Y+z5L6n55uu5qCH54K577yM5a+56b2QY2xpY2tQb3NcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbGxQb3NYICs9IHdpZHRoICogcG9wTm9kZS5hbmNob3JYO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy/ku6VsYXlvdXRfYmflt6bkvqfkuLrnm67moIfngrnvvIzlr7npvZBjbGlja1BvcyAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lsbFBvc1ggLT0gd2lkdGggKiAoMSAtIHBvcE5vZGUuYW5jaG9yWCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpbGxQb3NZID0gY2xpY2tQb3MyV29ybGQueSArIGhlaWdodCAqIHBvcE5vZGUuYW5jaG9yWTtcbiAgICAgICAgICAgICAgICAgICAgd2lsbFBvcyA9IGNjLnYyKHdpbGxQb3NYLCB3aWxsUG9zWSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIHdpbGxQb3MueSAtPSAoMSAtIHBvcE5vZGUuYW5jaG9yWSkgKiBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgd2lsbFBvcy54ID0gd2luVyAvIDI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy945pa55ZCR5LiN6IO95Ye65bGP5bmVXG4gICAgICAgIGlmICh3aWxsUG9zLnggPiB3aW5XICogMC41KSB7XG4gICAgICAgICAgICBsZXQgZWRnZTJSaWdodCA9IHdpbGxQb3MueCArIHdpZHRoICogKDEgLSBwb3BOb2RlLmFuY2hvclgpO1xuICAgICAgICAgICAgbGV0IGRpc1ggPSBlZGdlMlJpZ2h0IC0gd2luVztcbiAgICAgICAgICAgIGlmIChkaXNYID4gMCkge1xuICAgICAgICAgICAgICAgIHdpbGxQb3MueCAtPSBkaXNYO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGVkZ2UyTGVmdCA9IHdpbGxQb3MueCAtIHdpZHRoICogcG9wTm9kZS5hbmNob3JYIC0gNzA7XG4gICAgICAgICAgICBpZiAoZWRnZTJMZWZ0IDwgMCkge1xuICAgICAgICAgICAgICAgIHdpbGxQb3MueCAtPSBlZGdlMkxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy955pa55ZCR5LiN6IO95Ye65bGP5bmVXG4gICAgICAgIGlmICh3aWxsUG9zLnkgPiB3aW5IICogMC41KSB7XG4gICAgICAgICAgICBsZXQgZWRnZTJUb3AgPSB3aWxsUG9zLnkgKyBoZWlnaHQgKiAoMSAtIHBvcE5vZGUuYW5jaG9yWSk7XG4gICAgICAgICAgICBsZXQgZGlzWSA9IGVkZ2UyVG9wIC0gd2luSDtcbiAgICAgICAgICAgIGlmIChkaXNZID4gMCkge1xuICAgICAgICAgICAgICAgIHdpbGxQb3MueSAtPSBkaXNZO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGVkZ2UyQm90dG9tID0gd2lsbFBvcy55IC0gaGVpZ2h0ICogcG9wTm9kZS5hbmNob3JZO1xuICAgICAgICAgICAgaWYgKGVkZ2UyQm90dG9tIDwgMCkge1xuICAgICAgICAgICAgICAgIHdpbGxQb3MueSAtPSBlZGdlMkJvdHRvbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgcG9zID0gcG9wTm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod2lsbFBvcylcbiAgICAgICAgY2MubG9nKHBvcywgcG9wTm9kZS5uYW1lKVxuICAgICAgICBwb3BOb2RlLnNldFBvc2l0aW9uKHBvcyk7XG4gICAgfVxuXG5cblxuXG4gICAgLyoqXG4gICAgICog5a2Q6IqC54K56YCS5b2S5aSE55CGXG4gICAgICogQHBhcmFtIG5vZGUg6ZyA6KaB6YCS5b2S5aSE55CG55qE6IqC54K55oiW6IqC54K55pWw57uEXG4gICAgICogQHBhcmFtIGNiIOiKgueCueWkhOeQhuWHveaVsFxuICAgICAqIEBwYXJhbSB0aGlzQXJnIGNi57uR5a6a55qEdGhpc+WvueixoVxuICAgICAqL1xuICAgIHN0YXRpYyBub2RlUmVjdXJzaXZlKG5vZGU6IGNjLk5vZGUgfCBjYy5Ob2RlW10sIGNiOiAobjogY2MuTm9kZSkgPT4gdm9pZCwgdGhpc0FyZzogYW55ID0gdW5kZWZpbmVkKTogdm9pZCB7XG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgY2MuTm9kZSkge1xuICAgICAgICAgICAgY2IuY2FsbCh0aGlzQXJnLCBub2RlKTtcbiAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgobjogY2MuTm9kZSkgPT4geyB0aGlzLm5vZGVSZWN1cnNpdmUobiwgY2IsIHRoaXNBcmcpOyB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgICAgICAgICBub2RlLmZvckVhY2goKG46IGNjLk5vZGUpID0+IHsgdGhpcy5ub2RlUmVjdXJzaXZlKG4sIGNiLCB0aGlzQXJnKTsgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmm7TmlLlzcHJpdGVmcmFtZVxuICAgICAqIEBwYXJhbSBzcHJpdGUgXG4gICAgICogQHBhcmFtIHVybCBcbiAgICAgKi9cbiAgICBzdGF0aWMgY2hhbmdlU3ByaXRlRnJhbWUoc3ByaXRlOiBjYy5TcHJpdGUsIHVybDogc3RyaW5nLCBlbmRDYj86IEZ1bmN0aW9uKSB7XG4gICAgICAgIHNwcml0ZS5jaGFuZ2VTcHJpdGVGcmFtZSh1cmwsIGVuZENiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmm7TmlLlzcHJpdGVmcmFtZVxuICAgICAqIEBwYXJhbSBzcHJpdGUgXG4gICAgICogQHBhcmFtIHVybCBcbiAgICAgKi9cbiAgICBzdGF0aWMgY2hhbmdlU0ZXaXRoQXRsYXMoc3ByaXRlOiBjYy5TcHJpdGUsIHVybDogc3RyaW5nLCBzdWJGaWxlOiBzdHJpbmcsIGVuZENiPzogRnVuY3Rpb24pIHtcbiAgICAgICAgc3ByaXRlLmNoYW5nZVNGV2l0aEF0bGFzKHVybCwgc3ViRmlsZSwgZW5kQ2IpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmm7TmlLlzcGluZVxuICAgICAqIEBwYXJhbSBzcHJpdGUgXG4gICAgICogQHBhcmFtIHVybCBcbiAgICAgKi9cbiAgICBzdGF0aWMgY2hhbmdlU2tlbGV0b25EYXRhKHNwaW5lOiBzcC5Ta2VsZXRvbiwgdXJsOiBzdHJpbmcsIGVuZENiPzogRnVuY3Rpb24pIHtcbiAgICAgICAgc3BpbmUuY2hhbmdlU2tlbGV0b25EYXRhKHVybCwgZW5kQ2IpO1xuICAgIH1cblxuICAgIC8qKiDph43nva5DdHJs5Lit55qEdmlld+WSjG1vZGVs5a+56LGhICovXG4gICAgc3RhdGljIHJlc2V0Q29udHJvbE1WT2JqKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgbGV0IGNsc05hbWUgPSBub2RlLm5hbWU7XG4gICAgICAgIGlmIChjbHNOYW1lLnN0YXJ0c1dpdGgoJ1BfJykgfHwgY2xzTmFtZS5zdGFydHNXaXRoKCdWXycpIHx8IGNsc05hbWUuc3RhcnRzV2l0aCgnRl8nKSkge1xuICAgICAgICAgICAgY2xzTmFtZSA9IGNsc05hbWUuc3Vic3RyaW5nKDIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2xzTmFtZS5zdGFydHNXaXRoKCdDXycpKSB7XG4gICAgICAgICAgICBsZXQgY3RybENvbXAgPSBub2RlLmdldENvbXBvbmVudChjbHNOYW1lKTtcbiAgICAgICAgICAgIGlmIChjdHJsQ29tcCkge1xuICAgICAgICAgICAgICAgIGxldCBtb2RlbENvbXAgPSBub2RlLmdldENvbXBvbmVudChgJHtjbHNOYW1lfU1vZGVsYCk7XG4gICAgICAgICAgICAgICAgaWYgKG1vZGVsQ29tcCkge1xuICAgICAgICAgICAgICAgICAgICBjdHJsQ29tcC5tb2RlbCA9IG1vZGVsQ29tcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHZpZXdDb21wID0gbm9kZS5nZXRDb21wb25lbnQoYCR7Y2xzTmFtZX1WaWV3YCk7XG4gICAgICAgICAgICAgICAgaWYgKHZpZXdDb21wKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0cmxDb21wLnZpZXcgPSB2aWV3Q29tcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgb25lIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRDb250cm9sTVZPYmoob25lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDlrp7kvovljJZNVkPpooTliLbkvZMgKi9cbiAgICBzdGF0aWMgaW5zdGFudGlhdGVNVkNQcmVmYWIocHJlZmFiOiBjYy5QcmVmYWIgfCBjYy5Ob2RlLCByZWxhdGVkPzogY2MuTm9kZSB8IGNjLlByZWZhYikge1xuICAgICAgICBsZXQgbmV3Tm9kZTogY2MuTm9kZSA9IGMyZi5yZXMuaW5zdGFudGlhdGUocHJlZmFiLCByZWxhdGVkKTtcbiAgICAgICAgbGV0IGNsc05hbWUgPSBwcmVmYWIubmFtZTtcbiAgICAgICAgaWYgKGNsc05hbWUuc3RhcnRzV2l0aCgnUF8nKSB8fCBjbHNOYW1lLnN0YXJ0c1dpdGgoJ1ZfJykgfHwgY2xzTmFtZS5zdGFydHNXaXRoKCdGXycpKSB7XG4gICAgICAgICAgICBjbHNOYW1lID0gY2xzTmFtZS5zdWJzdHJpbmcoMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjbHNOYW1lLnN0YXJ0c1dpdGgoJ0NfJykpIHtcbiAgICAgICAgICAgIGxldCBtb2RlbENvbXAgPSBuZXdOb2RlLmdldENvbXBvbmVudChgJHtjbHNOYW1lfU1vZGVsYCk7XG4gICAgICAgICAgICBpZiAoIW1vZGVsQ29tcCkge1xuICAgICAgICAgICAgICAgIG1vZGVsQ29tcCA9IG5ld05vZGUuYWRkQ29tcG9uZW50KGAke2Nsc05hbWV9TW9kZWxgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB2aWV3Q29tcCA9IG5ld05vZGUuZ2V0Q29tcG9uZW50KGAke2Nsc05hbWV9Vmlld2ApO1xuICAgICAgICAgICAgaWYgKCF2aWV3Q29tcCkge1xuICAgICAgICAgICAgICAgIHZpZXdDb21wID0gbmV3Tm9kZS5hZGRDb21wb25lbnQoYCR7Y2xzTmFtZX1WaWV3YCk7XG4gICAgICAgICAgICAgICAgdmlld0NvbXAuaW5pdFZpZXdQcm9wZXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGN0cmxDb21wID0gbmV3Tm9kZS5nZXRDb21wb25lbnQoY2xzTmFtZSk7XG4gICAgICAgICAgICBpZiAoIWN0cmxDb21wKSB7XG4gICAgICAgICAgICAgICAgY3RybENvbXAgPSBuZXdOb2RlLmFkZENvbXBvbmVudChjbHNOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN0cmxDb21wLm1vZGVsID0gbW9kZWxDb21wO1xuICAgICAgICAgICAgY3RybENvbXAudmlldyA9IHZpZXdDb21wO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmVmYWIgaW5zdGFuY2VvZiBjYy5Ob2RlKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0Q29udHJvbE1WT2JqKG5ld05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdOb2RlO1xuICAgIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIGludGVyZmFjZSBJVXRpbCB7XG4gICAgICAgIHZpZXc6IHR5cGVvZiBWaWV3VXRpbDtcbiAgICB9XG59XG5jMmYudXRpbHMudmlldyA9IFZpZXdVdGlsO1xuZXhwb3J0IHsgfTsiXX0=