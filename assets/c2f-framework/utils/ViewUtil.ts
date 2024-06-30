/** 显示对象工具 */
class ViewUtil {
    /**
     * 把Node当前的节点树结构根据Node命名转成一个js对象,重名的组件会覆盖，
     * Node的name首字符为'_'加入列表，其他不加
     * @param parent 被遍历的Node组件
     * @param obj    绑定的js对象 (可选)
     */
    static nodeTreeInfoLite(parent: cc.Node, obj?: Map<string, cc.Node>): Map<string, cc.Node> | null {
        let map: Map<string, cc.Node> = obj || new Map();
        let items = parent.children;
        for (let i = 0; i < items.length; i++) {
            let one = items[i];
            let name = one.name.trim();
            //if (name.startsWith('_') && name.endsWith('_')) {
            map.set(name, one);
            //}
            ViewUtil.nodeTreeInfoLite(one, map);
        }
        return map;
    }

    /**
     * 正则搜索节点名字,符合条件的节点将会返回
     * @param reg     正则表达式
     * @param parent  要搜索的父节点
     * @param nodes   返回的数组（可选）
     */
    static findNodes(reg: RegExp, parent: cc.Node, nodes?: Array<cc.Node>): Array<cc.Node> {
        let ns: Array<cc.Node> = nodes || [];
        let items = parent.children;
        for (let i = 0; i < items.length; i++) {
            let name: string = items[i].name;
            if (reg.test(name)) {
                ns.push(items[i]);
            }
            ViewUtil.findNodes(reg, items[i], ns);
        }
        return ns;
    };

    /**
     * 获取组件名称
     * @param target 组件对象
     */
    static getComponentName(target: cc.Component) {
        const regex = /<([^>]*)>/g; // 正则表达式匹配尖括号内的字符串  
        const matches = target.name.match(regex); // 获取匹配结果  
        const result = matches ? matches.map(match => match.replace(/<|>/g, '')) : [''];
        const name = result[0];
        return name;
    }

    /**
     * 节点之间坐标互转
     * @param a         A节点
     * @param b         B节点
     * @param aPos      A节点空间中的相对位置
     */
    static calculateASpaceToBSpacePos(a: cc.Node, b: cc.Node, aPos: cc.Vec3): cc.Vec3 {
        let world: cc.Vec3 = a.convertToWorldSpaceAR(aPos);
        let space: cc.Vec3 = b.convertToNodeSpaceAR(world);
        return space;
    }

    /**
     * 屏幕转空间坐标
     * @param event 触摸事件
     * @param space 转到此节点的坐标空间
     */
    static calculateScreenPosToSpacePos(event: cc.Event.EventTouch, space: cc.Node): cc.Vec3 {
        let uil = event.getLocation();
        let worldPos: cc.Vec3 = cc.v3(uil.x, uil.y);
        let mapPos: cc.Vec3 = space.convertToNodeSpaceAR(worldPos);
        return mapPos;
    }

    /**
     * 显示对象等比缩放
     * @param targetWidth       目标宽
     * @param targetHeight      目标高
     * @param defaultWidth      默认宽
     * @param defaultHeight     默认高
     */
    static uniformScale(targetWidth: number, targetHeight: number, defaultWidth: number, defaultHeight: number) {
        let widthRatio = defaultWidth / targetWidth;
        let heightRatio = defaultHeight / targetHeight;
        let ratio = widthRatio < heightRatio ? widthRatio : heightRatio;
        let size = new cc.Size(Math.floor(targetWidth * ratio), Math.floor(targetHeight * ratio));
        return size;
    }

    /**
     * 检测节点是否在屏幕之内
     * @param node 目标节点
     */
    static nodeIsInView(node: cc.Node): boolean {
        let inView = true;

        let szVisible = cc.view.getVisibleSize();
        let posW = node.convertToWorldSpaceAR(cc.Vec3.ZERO);
        if (posW.x <= 0) {
            let rightX = posW.x + node.width * (1 - node.anchorX);
            inView = rightX < 0 ? false : true;
        } else {
            let leftX = posW.x - node.width * node.anchorX;
            inView = leftX > szVisible.width ? false : true;
        }
        if (inView) {
            if (posW.y <= 0) {
                let topY = posW.y + node.height * (1 - node.anchorY);
                inView = topY < 0 ? false : true;
            } else {
                let bottomY = posW.y - node.height * node.anchorY;
                inView = bottomY > szVisible.height ? false : true;
            }
        }
        return inView;
    }

    /**
     * 检测节点是否在屏幕之内
     * @param node 目标节点
     */
    static nodeFullInView(node: cc.Node): boolean {
        let fullInView = true;

        let szVisible = cc.view.getVisibleSize();
        let posW = node.convertToWorldSpaceAR(cc.Vec3.ZERO);
        //console.log('pos in world:', posW, node);
        if (posW.x <= 0) {
            let leftX = posW.x - node.width * node.anchorX;
            fullInView = leftX >= 0 ? true : false;
        } else {
            let rightX = posW.x + node.width * (1 - node.anchorX);
            fullInView = rightX <= szVisible.width ? true : false;
        }
        if (fullInView) {
            if (posW.y <= 0) {
                let bottomY = posW.y - node.height * node.anchorY;
                fullInView = bottomY >= 0 ? true : false;
            } else {
                let topY = posW.y + node.height * (1 - node.anchorY);
                fullInView = topY <= szVisible.height ? true : false;
            }
        }
        return fullInView;
    }

    /**
     * 检测节点在Y轴方向是否已在屏幕之外
     * @param node 目标节点
     */
    static nodeIsOutByHeight(node: cc.Node): boolean {
        let outView = false;
        let szVisible = cc.view.getVisibleSize();
        let posW = node.convertToWorldSpaceAR(cc.Vec3.ZERO);
        if (posW.y <= 0) {
            let topY = posW.y + node.height * (1 - node.anchorY);
            outView = topY < 0 ? true : false;
        } else {
            let bottomY = posW.y - node.height * node.anchorY;
            outView = bottomY > szVisible.height ? true : false;
        }
        return outView;
    }

    /**
     * 检测节点在X轴方向是否已在屏幕之外
     * @param node 目标节点
     */
    static nodeIsOutByWidth(node: cc.Node): boolean {
        let outView = false;

        let szVisible = cc.view.getVisibleSize();
        let posW = c2f.utils.node.getNodeWorldPosition(node);
        if (posW.x <= 0) {
            let rightX = posW.x + node.width * (1 - node.anchorX);
            outView = rightX < 0 ? true : false;
        } else {
            let leftX = posW.x - node.width * node.anchorX;
            outView = leftX > szVisible.width ? true : false;
        }
        return outView;
    }

    /**
     * 两节点之间的距离
     * @param node1 节点1
     * @param node1 节点2
     */
    static getNodeDistance(node1: cc.Node, node2: cc.Node) {
        let distance = 0;
        let direction = cc.v3(0, 0, 0)
        let posW1 = c2f.utils.node.getNodeWorldPosition(node1);
        let posW2 = c2f.utils.node.getNodeWorldPosition(node2);
        distance = c2f.utils.vec.distance(posW1, posW2);
        direction = c2f.utils.vec.direction(posW1, posW2);
        return { distance, direction };
    }

    /**
     * 节点1到节点2连线与x轴方向的夹角
     * @param node1 节点1
     * @param node1 节点2
     */
    static getTwoNodeAngle(node1: cc.Node, node2: cc.Node) {
        let posW1 = c2f.utils.node.getNodeWorldPosition(node1);
        let posW2 = c2f.utils.node.getNodeWorldPosition(node2);
        let angle: number = c2f.utils.vec.angleEx(posW1, posW2);
        return angle;
    }

    /**
     * 世界坐标点到节点连线与x轴方向的夹角
     * @param node1 节点1
     * @param node1 节点2
     */
    static getWorldPosToNodeAngle(worldPos: cc.Vec3, node: cc.Node) {
        let nodePosW = c2f.utils.node.getNodeWorldPosition(node);
        let centerPos = nodePosW;
        centerPos.x = nodePosW.x + (0.5 - node.anchorX) * node.width;
        centerPos.y = nodePosW.y + (0.5 - node.anchorY) * node.height;
        let angle = c2f.utils.vec.angleEx(worldPos, centerPos);
        return angle;
    }

    /**
     * 节点node在panel下的坐标
     * @param node 节点1
     * @param panel 节点2
     */
    static getNodeInPanelPos(node: cc.Node, panel: cc.Node, out?: cc.Vec2) {
        let posL = node.getPosition();
        let posW = node.parent.convertToWorldSpaceAR(posL);
        if (out) {
            panel.parent.convertToNodeSpaceAR(posW, out);
            return out;
        } else {
            let tarPos = panel.parent.convertToNodeSpaceAR(posW);
            return tarPos;
        }
    }

    /**
     * 从资源缓存中找到预制资源名并创建一个显示对象
     * @param path 资源路径
     */
    static createPrefabNode(path: string): cc.Node {
        let p: cc.Prefab = c2f.res.get(path, cc.Prefab)!;
        let n = c2f.res.instantiate(p);
        return n;
    }

    /**
     * 加载预制并创建预制节点
     * @param path 资源路径
     */
    static createPrefabNodeAsync(path: string): Promise<cc.Node> {
        return new Promise(async (resolve, reject) => {
            c2f.res.load(path, cc.Prefab, (err: Error | null, content: cc.Prefab) => {
                if (err) {
                    console.error(`名为【${path}】的资源加载失败`);
                    return;
                }
                let node = this.createPrefabNode(path);
                resolve(node);
            });
        });
    }

    /**
     * 加载预制节点
     * @param path          资源路径
     * @param callback      资源加载完成回调
     */
    static loadPrefabNode(path: string, callback: Function) {
        c2f.res.load(path, cc.Prefab, (err: Error | null, content: cc.Prefab) => {
            if (err) {
                console.error(`名为【${path}】的资源加载失败`);
                return;
            }
            let node = this.createPrefabNode(path);
            callback(node);
        });
    }

    /**
     * 添加节点动画
     * @param path              资源路径
     * @param node              目标节点
     * @param onlyOne           是否唯一
     * @param isDefaultClip     是否播放默认动画剪辑
     */
    static addNodeAnimation(path: string, node: cc.Node, onlyOne: boolean = true, isDefaultClip: boolean = false) {
        if (!node || !node.isValid) {
            return;
        }
        let anim = node.getComponent(cc.Animation);
        if (anim == null) {
            anim = node.addComponent(cc.Animation);
        }
        let clip = c2f.res.get(path, cc.AnimationClip) as cc.AnimationClip;
        if (!clip) {
            return;
        }
        if (onlyOne && anim.getAnimationState(clip!.name) && anim.getAnimationState(clip!.name).isPlaying) {
            return;
        }
        if (isDefaultClip) {
            anim.defaultClip = clip;
            anim.play();
            return;
        }

        // 播放完成后恢复播放默认动画
        anim.once(cc.Animation.EventType.FINISHED, () => {
            if (anim!.defaultClip) {
                anim!.play();
            }
        }, this);

        if (anim.getAnimationState(clip!.name)) {
            anim.play(clip!.name);
            return
        }
        //anim.createaState(clip, clip!.name);
        anim.play(clip!.name);
    }

    /**
    * 给按钮添加监听
    * @param node 目标节点
    */
    static addButtonListen(node: cc.Node, caller: any, func: Function) {
        let button = node.getComponent(cc.Button);
        if (button) {
            node.on('click', func, caller);
        } else {
            let path = this.getNodePath(node);
            cc.warn("don't find Button component for node:", path);
        }
    }

    /**
     * 获得节点路径
     * @param node 目标节点
     */
    static getNodePath(node: cc.Node) {
        let path = node.name;
        if (node.parent) {
            let prePath = this.getNodePath(node.parent);
            path = prePath + '/' + path;
        }
        return path;
    }

    /**
     * 移除所有子节点
     * @param node 
     */
    static clearChildren(node: cc.Node) {
        if (node != null && node.children.length > 0) {
            let childrenArray = node.children;
            while (childrenArray.length > 0) {
                let child = childrenArray[0];
                child.removeFromParent();
                child.destroy();
            }
        }
    }

    /** 图片置灰 */
    static setSpriteGray(icon: cc.Sprite, isGray: boolean) {
        if (isGray) {
            let matGray = cc.Material.getBuiltinMaterial("2d-gray-sprite");
            icon.setMaterial(0, matGray);
        } else {
            let matDef = cc.Material.getBuiltinMaterial("2d-sprite");
            icon.setMaterial(0, matDef);
        }
    }

    /** 节点置灰 */
    static setNodeGray(node: cc.Node, isGray: boolean) {
        let sprite = node.getComponent(cc.Sprite);
        if (sprite) {
            this.setSpriteGray(sprite, isGray);
        }
        for (let i = 0; i < node.children.length; ++i) {
            this.setNodeGray(node.children[i], isGray);
        }
    }

    //获得该名称的所有子节点
    static getChildrenByName(node: cc.Node, dstName: string) {
        let children: cc.Node[] = [];
        for (let i = 0; i < node.children.length; ++i) {
            if (node.children[i].name == dstName) {
                children.push(node.children[i]);
            }
            let subNodes = this.getChildrenByName(node.children[i], dstName);
            children = children.concat(subNodes);
        }
        return children;
    }

    //获得该名称的第一个子节点
    static getFirstChildByName(node: cc.Node, dstName: string) {
        let firstChild: cc.Node = null;
        let children = this.getChildrenByName(node, dstName);
        if (children.length > 0) {
            firstChild = children[0];
        }
        return firstChild;
    }

    /** 从子节点中查找对应组件·不递归 */
    static getChildrenByComponent<T extends cc.Component>(node: cc.Node, type: { prototype: T }) {
        let result: T[] = [];
        for (let i = 0; i < node.children.length; ++i) {
            const one = node.children[i];
            let comp = one.getComponent(type);
            if (comp) {
                result.push(comp);
            }
        }
        return result;
    }

    static getAllChildCount(root: string, node: cc.Node) {
        let url = root + '_' + node.name;
        //console.log('getAllChildCount:', url);
        let count = node.children.length;
        for (let one of node.children) {
            count += this.getAllChildCount(url, one);
        }
        return count;
    }

    /** 偏移矩形 */
    static offsetRect(box: cc.Rect, offset: cc.Vec2) {
        let offWidth = offset.x;
        let offHeigt = offset.y;

        box.x += -offWidth;
        box.y += -offHeigt;
        box.width += 2 * offWidth;
        box.height += offHeigt;
        return box;
    }

    /** 自动调整弹出页面位置，保证其在可视界面内 
     * popNode: 弹出节点
     * clickPos2World： 点击位置
     * alignType：对齐方式(1:左对齐， 2：右对齐， 3：上对齐， 4：下对齐， 5：自动, 6:居中下对齐)
    */
    static autoAdjustPopWinPos(popNode: cc.Node, clickPos2World: cc.Vec2, alignType: number = 5) {
        if (popNode == null || clickPos2World == null) {
            return;
        }
        const szVisible = cc.view.getVisibleSize();

        let height = popNode.height * popNode.scaleY;
        let width = popNode.width * popNode.scaleX;
        const winH = szVisible.height;
        const winW = szVisible.width;

        let willPos = clickPos2World.clone();
        let align = alignType || 5;
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
                    let willPosX = clickPos2World.x;
                    if (clickPos2World.x <= winW * 0.5) {
                        //以layout_bg右侧目标点，对齐clickPos
                        willPosX += width * popNode.anchorX;
                    } else {
                        //以layout_bg左侧为目标点，对齐clickPos            
                        willPosX -= width * (1 - popNode.anchorX);
                    }
                    let willPosY = clickPos2World.y + height * popNode.anchorY;
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
            let edge2Right = willPos.x + width * (1 - popNode.anchorX);
            let disX = edge2Right - winW;
            if (disX > 0) {
                willPos.x -= disX;
            }
        } else {
            let edge2Left = willPos.x - width * popNode.anchorX - 70;
            if (edge2Left < 0) {
                willPos.x -= edge2Left;
            }
        }
        //y方向不能出屏幕
        if (willPos.y > winH * 0.5) {
            let edge2Top = willPos.y + height * (1 - popNode.anchorY);
            let disY = edge2Top - winH;
            if (disY > 0) {
                willPos.y -= disY;
            }
        } else {
            let edge2Bottom = willPos.y - height * popNode.anchorY;
            if (edge2Bottom < 0) {
                willPos.y -= edge2Bottom;
            }
        }
        let pos = popNode.parent.convertToNodeSpaceAR(willPos)
        cc.log(pos, popNode.name)
        popNode.setPosition(pos);
    }




    /**
     * 子节点递归处理
     * @param node 需要递归处理的节点或节点数组
     * @param cb 节点处理函数
     * @param thisArg cb绑定的this对象
     */
    static nodeRecursive(node: cc.Node | cc.Node[], cb: (n: cc.Node) => void, thisArg: any = undefined): void {
        if (node instanceof cc.Node) {
            cb.call(thisArg, node);
            node.children.forEach((n: cc.Node) => { this.nodeRecursive(n, cb, thisArg); });
        } else if (Array.isArray(node)) {
            node.forEach((n: cc.Node) => { this.nodeRecursive(n, cb, thisArg); });
        }
    }

    /**
     * 更改spriteframe
     * @param sprite 
     * @param url 
     */
    static changeSpriteFrame(sprite: cc.Sprite, url: string, endCb?: Function) {
        sprite.changeSpriteFrame(url, endCb);
    }

    /**
     * 更改spriteframe
     * @param sprite 
     * @param url 
     */
    static changeSFWithAtlas(sprite: cc.Sprite, url: string, subFile: string, endCb?: Function) {
        sprite.changeSFWithAtlas(url, subFile, endCb);
    }
    /**
     * 更改spine
     * @param sprite 
     * @param url 
     */
    static changeSkeletonData(spine: sp.Skeleton, url: string, endCb?: Function) {
        spine.changeSkeletonData(url, endCb);
    }

    /** 重置Ctrl中的view和model对象 */
    static resetControlMVObj(node: cc.Node) {
        let clsName = node.name;
        if (clsName.startsWith('P_') || clsName.startsWith('V_') || clsName.startsWith('F_')) {
            clsName = clsName.substring(2);
        }
        if (!clsName.startsWith('C_')) {
            let ctrlComp = node.getComponent(clsName);
            if (ctrlComp) {
                let modelComp = node.getComponent(`${clsName}Model`);
                if (modelComp) {
                    ctrlComp.model = modelComp;
                }
                let viewComp = node.getComponent(`${clsName}View`);
                if (viewComp) {
                    ctrlComp.view = viewComp;
                }
            }
        }
        for (let one of node.children) {
            this.resetControlMVObj(one);
        }
    }

    /** 实例化MVC预制体 */
    static instantiateMVCPrefab(prefab: cc.Prefab | cc.Node, related?: cc.Node | cc.Prefab) {
        let newNode: cc.Node = c2f.res.instantiate(prefab, related);
        let clsName = prefab.name;
        if (clsName.startsWith('P_') || clsName.startsWith('V_') || clsName.startsWith('F_')) {
            clsName = clsName.substring(2);
        }
        if (!clsName.startsWith('C_')) {
            let modelComp = newNode.getComponent(`${clsName}Model`);
            if (!modelComp) {
                modelComp = newNode.addComponent(`${clsName}Model`);
            }
            let viewComp = newNode.getComponent(`${clsName}View`);
            if (!viewComp) {
                viewComp = newNode.addComponent(`${clsName}View`);
                viewComp.initViewProperty();
            }
            let ctrlComp = newNode.getComponent(clsName);
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
    }
}

declare global {
    interface IUtil {
        view: typeof ViewUtil;
    }
}
c2f.utils.view = ViewUtil;
export { };