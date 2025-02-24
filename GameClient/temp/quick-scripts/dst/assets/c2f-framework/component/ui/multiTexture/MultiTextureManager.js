
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/ui/multiTexture/MultiTextureManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4fc9cgEvWxKZK0hYF2jjQq7', 'MultiTextureManager');
// c2f-framework/component/ui/multiTexture/MultiTextureManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTextureManager = void 0;
/**
 * Multi-Texture 管理器
 */
var MultiTextureManager = /** @class */ (function () {
    function MultiTextureManager() {
    }
    /**
     * 初始化纹理管理器
     */
    MultiTextureManager.init = function (mat) {
        if (this._init || !(mat instanceof cc.Material) || mat instanceof cc.MaterialVariant) {
            return;
        }
        this._init = true;
        this._mat = mat;
        // 处理引用计数
        this._mat.addRef();
    };
    MultiTextureManager.addSprite = function (sp) {
        this._sprites.add(sp);
    };
    MultiTextureManager.removeSprite = function (sp) {
        this._sprites.delete(sp);
    };
    /**
     * 设置合批纹理
     * @param idx 纹理id
     * @param tex 纹理对象
     * @returns
     */
    MultiTextureManager.setTexture = function (idx, tex) {
        var _this = this;
        if (!this._init) {
            cc.error("[MultiSpriteManager.setTexture] 未初始化MultiSpriteManager");
            return;
        }
        if (!(tex instanceof cc.Texture2D)) {
            cc.error("[MultiSpriteManager.setTexture] 参数类型错误");
            return;
        }
        idx = cc.misc.clampf(idx, 0, MultiTextureManager.MAX_TEXTURE_NUM - 1);
        var oldTex = this._texMap.get(idx);
        if (oldTex === tex) {
            return;
        }
        // 处理引用计数
        if (oldTex) {
            oldTex.decRef();
        }
        tex.addRef();
        this._texMap.set(idx, tex);
        // 修改共享材质属性
        this._mat.setProperty("texture" + idx, tex);
        // 修改已存在的渲染组件上材质变体的属性，同时更新渲染组件textureIdx
        this._sprites.forEach(function (v) {
            /**
             * @bug
             * 2.4.5之前材质hash计算在utils.js中serializeUniforms有bug, 里面for-in遍历材质属性顺序受k-v对插入顺序影响(即setProperty顺序), 即使属性完全一致, hash却不一定一致
             * 因此在此直接创建新的材质
             */
            // v.setMaterial(0, this._mat);
            // 材质变体中的属性必须完全一致, 材质的hash值计算才会一致
            var material = v.getMaterial(0);
            for (var i = 0; i < MultiTextureManager.MAX_TEXTURE_NUM; i++) {
                var texture = _this._texMap.get(i);
                if (!texture) {
                    continue;
                }
                var textureImpl = texture.getImpl();
                if (material.getProperty("texture" + i, 0) !== textureImpl) {
                    material.setProperty("texture" + i, texture);
                }
            }
            // 修改共享材质属性后，必须手动设置材质变体的_effect._dirty，不然不会重新计算材质变体的hash值
            material["_effect"]._dirty = true;
            // 更新textureIdx与材质属性
            v._updateMaterial();
        });
    };
    /**
     * 根据纹理获取对应的textureIdx
     * @param tex
     * @returns
     */
    MultiTextureManager.getIdx = function (tex) {
        if (!this._init) {
            cc.error("[MultiSpriteManager.getIdx] 未初始化MultiSpriteManager");
            return;
        }
        for (var i = 0; i < MultiTextureManager.MAX_TEXTURE_NUM; i++) {
            if (this._texMap.get(i) === tex || this._mat.getProperty("texture" + i, 0) === tex.getImpl()) {
                return i;
            }
        }
        return -1;
    };
    /** 纹理最大数量 */
    MultiTextureManager.MAX_TEXTURE_NUM = 8;
    MultiTextureManager._init = false;
    /** 共享材质 */
    MultiTextureManager._mat = null;
    MultiTextureManager._texMap = new Map();
    MultiTextureManager._sprites = new Set();
    return MultiTextureManager;
}());
exports.MultiTextureManager = MultiTextureManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC91aS9tdWx0aVRleHR1cmUvTXVsdGlUZXh0dXJlTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7R0FFRztBQUNIO0lBQUE7SUE4R0EsQ0FBQztJQXBHRzs7T0FFRztJQUNXLHdCQUFJLEdBQWxCLFVBQW1CLEdBQWdCO1FBQy9CLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRTtZQUNsRixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNoQixTQUFTO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRWEsNkJBQVMsR0FBdkIsVUFBd0IsRUFBZTtRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRWEsZ0NBQVksR0FBMUIsVUFBMkIsRUFBZTtRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDVyw4QkFBVSxHQUF4QixVQUF5QixHQUFXLEVBQUUsR0FBaUI7UUFBdkQsaUJBcURDO1FBcERHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2IsRUFBRSxDQUFDLEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO1lBQ25FLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxDQUFDLEdBQUcsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDaEMsRUFBRSxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1lBQ25ELE9BQU87U0FDVjtRQUVELEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLG1CQUFtQixDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxJQUFJLE1BQU0sS0FBSyxHQUFHLEVBQUU7WUFDaEIsT0FBTztTQUNWO1FBRUQsU0FBUztRQUNULElBQUksTUFBTSxFQUFFO1lBQ1IsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ25CO1FBQ0QsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLFdBQVc7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFVLEdBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1Qyx3Q0FBd0M7UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDO1lBQ3BCOzs7O2VBSUc7WUFDSCwrQkFBK0I7WUFFL0IsaUNBQWlDO1lBQ2pDLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUQsSUFBSSxPQUFPLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ1YsU0FBUztpQkFDWjtnQkFDRCxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3BDLElBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxZQUFVLENBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxXQUFXLEVBQUU7b0JBQ3hELFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBVSxDQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQ2hEO2FBQ0o7WUFDRCx5REFBeUQ7WUFDekQsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFbEMsb0JBQW9CO1lBQ3BCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7OztPQUlHO0lBQ1csMEJBQU0sR0FBcEIsVUFBcUIsR0FBaUI7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixFQUFFLENBQUMsS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7WUFDL0QsT0FBTztTQUNWO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFVLENBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQzFGLE9BQU8sQ0FBQyxDQUFDO2FBQ1o7U0FDSjtRQUNELE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDZCxDQUFDO0lBNUdELGFBQWE7SUFDVSxtQ0FBZSxHQUFHLENBQUMsQ0FBQztJQUU1Qix5QkFBSyxHQUFZLEtBQUssQ0FBQztJQUN0QyxXQUFXO0lBQ0ksd0JBQUksR0FBZ0IsSUFBSSxDQUFDO0lBQ3pCLDJCQUFPLEdBQThCLElBQUksR0FBRyxFQUFFLENBQUM7SUFDL0MsNEJBQVEsR0FBcUIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQXNHMUQsMEJBQUM7Q0E5R0QsQUE4R0MsSUFBQTtBQTlHWSxrREFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXVsdGlTcHJpdGUgZnJvbSBcIi4vTXVsdGlTcHJpdGVcIjtcblxuLyoqXG4gKiBNdWx0aS1UZXh0dXJlIOeuoeeQhuWZqFxuICovXG5leHBvcnQgY2xhc3MgTXVsdGlUZXh0dXJlTWFuYWdlciB7XG4gICAgLyoqIOe6ueeQhuacgOWkp+aVsOmHjyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTUFYX1RFWFRVUkVfTlVNID0gODtcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbml0OiBib29sZWFuID0gZmFsc2U7XG4gICAgLyoqIOWFseS6q+adkOi0qCAqL1xuICAgIHByaXZhdGUgc3RhdGljIF9tYXQ6IGNjLk1hdGVyaWFsID0gbnVsbDtcbiAgICBwcml2YXRlIHN0YXRpYyBfdGV4TWFwOiBNYXA8bnVtYmVyLCBjYy5UZXh0dXJlMkQ+ID0gbmV3IE1hcCgpO1xuICAgIHByaXZhdGUgc3RhdGljIF9zcHJpdGVzOiBTZXQ8TXVsdGlTcHJpdGU+ID0gbmV3IFNldCgpO1xuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW57q555CG566h55CG5ZmoXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBpbml0KG1hdDogY2MuTWF0ZXJpYWwpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2luaXQgfHwgIShtYXQgaW5zdGFuY2VvZiBjYy5NYXRlcmlhbCkgfHwgbWF0IGluc3RhbmNlb2YgY2MuTWF0ZXJpYWxWYXJpYW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW5pdCA9IHRydWU7XG4gICAgICAgIHRoaXMuX21hdCA9IG1hdDtcbiAgICAgICAgLy8g5aSE55CG5byV55So6K6h5pWwXG4gICAgICAgIHRoaXMuX21hdC5hZGRSZWYoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFkZFNwcml0ZShzcDogTXVsdGlTcHJpdGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc3ByaXRlcy5hZGQoc3ApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcmVtb3ZlU3ByaXRlKHNwOiBNdWx0aVNwcml0ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zcHJpdGVzLmRlbGV0ZShzcCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K6+572u5ZCI5om557q555CGXG4gICAgICogQHBhcmFtIGlkeCDnurnnkIZpZFxuICAgICAqIEBwYXJhbSB0ZXgg57q555CG5a+56LGhXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBzZXRUZXh0dXJlKGlkeDogbnVtYmVyLCB0ZXg6IGNjLlRleHR1cmUyRCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2luaXQpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwiW011bHRpU3ByaXRlTWFuYWdlci5zZXRUZXh0dXJlXSDmnKrliJ3lp4vljJZNdWx0aVNwcml0ZU1hbmFnZXJcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISh0ZXggaW5zdGFuY2VvZiBjYy5UZXh0dXJlMkQpKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIltNdWx0aVNwcml0ZU1hbmFnZXIuc2V0VGV4dHVyZV0g5Y+C5pWw57G75Z6L6ZSZ6K+vXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWR4ID0gY2MubWlzYy5jbGFtcGYoaWR4LCAwLCBNdWx0aVRleHR1cmVNYW5hZ2VyLk1BWF9URVhUVVJFX05VTSAtIDEpO1xuICAgICAgICBsZXQgb2xkVGV4ID0gdGhpcy5fdGV4TWFwLmdldChpZHgpO1xuICAgICAgICBpZiAob2xkVGV4ID09PSB0ZXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWkhOeQhuW8leeUqOiuoeaVsFxuICAgICAgICBpZiAob2xkVGV4KSB7XG4gICAgICAgICAgICBvbGRUZXguZGVjUmVmKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGV4LmFkZFJlZigpO1xuXG4gICAgICAgIHRoaXMuX3RleE1hcC5zZXQoaWR4LCB0ZXgpO1xuICAgICAgICAvLyDkv67mlLnlhbHkuqvmnZDotKjlsZ7mgKdcbiAgICAgICAgdGhpcy5fbWF0LnNldFByb3BlcnR5KGB0ZXh0dXJlJHtpZHh9YCwgdGV4KTtcbiAgICAgICAgLy8g5L+u5pS55bey5a2Y5Zyo55qE5riy5p+T57uE5Lu25LiK5p2Q6LSo5Y+Y5L2T55qE5bGe5oCn77yM5ZCM5pe25pu05paw5riy5p+T57uE5Lu2dGV4dHVyZUlkeFxuICAgICAgICB0aGlzLl9zcHJpdGVzLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQGJ1Z1xuICAgICAgICAgICAgICogMi40LjXkuYvliY3mnZDotKhoYXNo6K6h566X5ZyodXRpbHMuanPkuK1zZXJpYWxpemVVbmlmb3Jtc+aciWJ1Zywg6YeM6Z2iZm9yLWlu6YGN5Y6G5p2Q6LSo5bGe5oCn6aG65bqP5Y+Xay125a+55o+S5YWl6aG65bqP5b2x5ZONKOWNs3NldFByb3BlcnR56aG65bqPKSwg5Y2z5L2/5bGe5oCn5a6M5YWo5LiA6Ie0LCBoYXNo5Y205LiN5LiA5a6a5LiA6Ie0XG4gICAgICAgICAgICAgKiDlm6DmraTlnKjmraTnm7TmjqXliJvlu7rmlrDnmoTmnZDotKhcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgLy8gdi5zZXRNYXRlcmlhbCgwLCB0aGlzLl9tYXQpO1xuXG4gICAgICAgICAgICAvLyDmnZDotKjlj5jkvZPkuK3nmoTlsZ7mgKflv4XpobvlrozlhajkuIDoh7QsIOadkOi0qOeahGhhc2jlgLzorqHnrpfmiY3kvJrkuIDoh7RcbiAgICAgICAgICAgIGxldCBtYXRlcmlhbCA9IHYuZ2V0TWF0ZXJpYWwoMCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE11bHRpVGV4dHVyZU1hbmFnZXIuTUFYX1RFWFRVUkVfTlVNOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdGV4dHVyZSA9IHRoaXMuX3RleE1hcC5nZXQoaSk7XG4gICAgICAgICAgICAgICAgaWYgKCF0ZXh0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgdGV4dHVyZUltcGwgPSB0ZXh0dXJlLmdldEltcGwoKTtcbiAgICAgICAgICAgICAgICBpZiAobWF0ZXJpYWwuZ2V0UHJvcGVydHkoYHRleHR1cmUke2l9YCwgMCkgIT09IHRleHR1cmVJbXBsKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KGB0ZXh0dXJlJHtpfWAsIHRleHR1cmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOS/ruaUueWFseS6q+adkOi0qOWxnuaAp+WQju+8jOW/hemhu+aJi+WKqOiuvue9ruadkOi0qOWPmOS9k+eahF9lZmZlY3QuX2RpcnR577yM5LiN54S25LiN5Lya6YeN5paw6K6h566X5p2Q6LSo5Y+Y5L2T55qEaGFzaOWAvFxuICAgICAgICAgICAgbWF0ZXJpYWxbXCJfZWZmZWN0XCJdLl9kaXJ0eSA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIOabtOaWsHRleHR1cmVJZHjkuI7mnZDotKjlsZ7mgKdcbiAgICAgICAgICAgIHYuX3VwZGF0ZU1hdGVyaWFsKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOagueaNrue6ueeQhuiOt+WPluWvueW6lOeahHRleHR1cmVJZHhcbiAgICAgKiBAcGFyYW0gdGV4IFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SWR4KHRleDogY2MuVGV4dHVyZTJEKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbml0KSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIltNdWx0aVNwcml0ZU1hbmFnZXIuZ2V0SWR4XSDmnKrliJ3lp4vljJZNdWx0aVNwcml0ZU1hbmFnZXJcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE11bHRpVGV4dHVyZU1hbmFnZXIuTUFYX1RFWFRVUkVfTlVNOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl90ZXhNYXAuZ2V0KGkpID09PSB0ZXggfHwgdGhpcy5fbWF0LmdldFByb3BlcnR5KGB0ZXh0dXJlJHtpfWAsIDApID09PSB0ZXguZ2V0SW1wbCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbn1cbiJdfQ==