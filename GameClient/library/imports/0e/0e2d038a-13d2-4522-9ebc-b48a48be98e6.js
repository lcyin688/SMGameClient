"use strict";
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