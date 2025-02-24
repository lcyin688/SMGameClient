
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/ui/multiTexture/MultiSprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c922bwmEw5OV4VVCBcsN/cG', 'MultiSprite');
// c2f-framework/component/ui/multiTexture/MultiSprite.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var EditorTool_1 = require("../../../utils/EditorTool");
var MultiAssemblerBarFilled_1 = require("./assembler/MultiAssemblerBarFilled");
var MultiAssemblerRadialFilled_1 = require("./assembler/MultiAssemblerRadialFilled");
var MultiAssemblerSimple_1 = require("./assembler/MultiAssemblerSimple");
var MultiAssemblerSliced_1 = require("./assembler/MultiAssemblerSliced");
var MultiAssemblerTiled_1 = require("./assembler/MultiAssemblerTiled");
var MultiTextureManager_1 = require("./MultiTextureManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, menu = _a.menu, inspector = _a.inspector;
/**
 * Multi-Texture 渲染组件，兼容web与native，支持simple、sliced、tiled、filled
 */
var MultiSprite = /** @class */ (function (_super) {
    __extends(MultiSprite, _super);
    function MultiSprite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._textureIdx = 0;
        return _this;
    }
    Object.defineProperty(MultiSprite.prototype, "textureIdx", {
        /** 当前渲染组件使用的纹理下标，不需要主动调用，该组件内部会自行处理 */
        get: function () { return this._textureIdx; },
        set: function (v) {
            this._textureIdx = cc.misc.clampf(v, 0, MultiTextureManager_1.MultiTextureManager.MAX_TEXTURE_NUM - 1);
            this["setVertsDirty"]();
        },
        enumerable: false,
        configurable: true
    });
    MultiSprite.prototype.resetInEditor = function () {
        var _this = this;
        EditorTool_1.default.load("res/shader/materials/multiTexture.mtl").then(function (mat) {
            if (mat) {
                _this.setMaterial(0, mat);
            }
        });
    };
    MultiSprite.prototype.onLoad = function () {
        var _a;
        (_a = _super.prototype.onLoad) === null || _a === void 0 ? void 0 : _a.call(this);
        MultiTextureManager_1.MultiTextureManager.addSprite(this);
    };
    MultiSprite.prototype.onDestroy = function () {
        var _a;
        (_a = _super.prototype.onDestroy) === null || _a === void 0 ? void 0 : _a.call(this);
        MultiTextureManager_1.MultiTextureManager.removeSprite(this);
    };
    /**
     * 设置spriteFrame和material时引擎内部会调用，更新textureIdx，更新材质属性
     * @override
     */
    MultiSprite.prototype._updateMaterial = function () {
        // make sure material is belong to self.
        var material = this.getMaterial(0);
        if (material) {
            var texture = null;
            var textureImpl = null;
            if (this.spriteFrame) {
                texture = this.spriteFrame.getTexture();
                textureImpl = texture && texture.getImpl();
            }
            if (material.name.indexOf("multiTexture") >= 0) {
                // 初始化纹理管理器
                MultiTextureManager_1.MultiTextureManager.init(material["_material"]);
                // 更新textureIdx
                var idx = MultiTextureManager_1.MultiTextureManager.getIdx(texture);
                if (idx >= 0) {
                    this.textureIdx = idx;
                }
                if (material.getProperty("texture" + this.textureIdx, 0) !== textureImpl) {
                    material.setProperty("texture" + this.textureIdx, texture);
                }
            }
            else {
                if (material.getProperty("texture", 0) !== textureImpl) {
                    material.setProperty("texture", texture);
                }
            }
        }
        cc.BlendFunc.prototype["_updateMaterial"].call(this);
    };
    MultiSprite = __decorate([
        ccclass,
        menu("c2f/UI/MultiSprite"),
        inspector("packages://inspector/inspectors/comps/sprite.js")
    ], MultiSprite);
    return MultiSprite;
}(cc.Sprite));
exports.default = MultiSprite;
cc.Assembler.register(MultiSprite, {
    getConstructor: function (sprite) {
        var ctor = MultiAssemblerSimple_1.default;
        switch (sprite.type) {
            case cc.Sprite.Type.SLICED:
                ctor = MultiAssemblerSliced_1.default;
                break;
            case cc.Sprite.Type.TILED:
                ctor = MultiAssemblerTiled_1.default;
                break;
            case cc.Sprite.Type.FILLED:
                if (sprite._fillType === cc.Sprite.FillType.RADIAL) {
                    ctor = MultiAssemblerRadialFilled_1.default;
                }
                else {
                    ctor = MultiAssemblerBarFilled_1.default;
                }
                break;
        }
        return ctor;
    }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC91aS9tdWx0aVRleHR1cmUvTXVsdGlTcHJpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQW1EO0FBQ25ELCtFQUEwRTtBQUMxRSxxRkFBZ0Y7QUFDaEYseUVBQW9FO0FBQ3BFLHlFQUFvRTtBQUNwRSx1RUFBa0U7QUFDbEUsNkRBQTREO0FBRXRELElBQUEsS0FBMkQsRUFBRSxDQUFDLFVBQVUsRUFBdEUsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsZ0JBQWdCLHNCQUFBLEVBQUUsSUFBSSxVQUFBLEVBQUUsU0FBUyxlQUFrQixDQUFDO0FBRS9FOztHQUVHO0FBSUg7SUFBeUMsK0JBQVM7SUFBbEQ7UUFBQSxxRUE4REM7UUE1RFcsaUJBQVcsR0FBVyxDQUFDLENBQUM7O0lBNERwQyxDQUFDO0lBMURHLHNCQUFZLG1DQUFVO1FBRHRCLHVDQUF1QzthQUN2QyxjQUFtQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2FBQzdELFVBQXVCLENBQVM7WUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLHlDQUFtQixDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNqRixJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQztRQUM1QixDQUFDOzs7T0FKNEQ7SUFNbkQsbUNBQWEsR0FBdkI7UUFBQSxpQkFNQztRQUxHLG9CQUFVLENBQUMsSUFBSSxDQUFjLHVDQUF1QyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztZQUMzRSxJQUFJLEdBQUcsRUFBRTtnQkFDTCxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUM1QjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1As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QTBCLENBQUM7aUJBQ3JDO3FCQUFNO29CQUNILElBQUksR0FBRyxpQ0FBdUIsQ0FBQztpQkFDbEM7Z0JBQ0QsTUFBTTtTQUNiO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFZGl0b3JUb29sIGZyb20gXCIuLi8uLi8uLi91dGlscy9FZGl0b3JUb29sXCI7XG5pbXBvcnQgTXVsdGlBc3NlbWJsZXJCYXJGaWxsZWQgZnJvbSBcIi4vYXNzZW1ibGVyL011bHRpQXNzZW1ibGVyQmFyRmlsbGVkXCI7XG5pbXBvcnQgTXVsdGlBc3NlbWJsZXJSYWRpYWxGaWxsZWQgZnJvbSBcIi4vYXNzZW1ibGVyL011bHRpQXNzZW1ibGVyUmFkaWFsRmlsbGVkXCI7XG5pbXBvcnQgTXVsdGlBc3NlbWJsZXJTaW1wbGUgZnJvbSBcIi4vYXNzZW1ibGVyL011bHRpQXNzZW1ibGVyU2ltcGxlXCI7XG5pbXBvcnQgTXVsdGlBc3NlbWJsZXJTbGljZWQgZnJvbSBcIi4vYXNzZW1ibGVyL011bHRpQXNzZW1ibGVyU2xpY2VkXCI7XG5pbXBvcnQgTXVsdGlBc3NlbWJsZXJUaWxlZCBmcm9tIFwiLi9hc3NlbWJsZXIvTXVsdGlBc3NlbWJsZXJUaWxlZFwiO1xuaW1wb3J0IHsgTXVsdGlUZXh0dXJlTWFuYWdlciB9IGZyb20gXCIuL011bHRpVGV4dHVyZU1hbmFnZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgcmVxdWlyZUNvbXBvbmVudCwgbWVudSwgaW5zcGVjdG9yIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKipcbiAqIE11bHRpLVRleHR1cmUg5riy5p+T57uE5Lu277yM5YW85a65d2Vi5LiObmF0aXZl77yM5pSv5oyBc2ltcGxl44CBc2xpY2Vk44CBdGlsZWTjgIFmaWxsZWRcbiAqL1xuQGNjY2xhc3NcbkBtZW51KFwiYzJmL1VJL011bHRpU3ByaXRlXCIpXG5AaW5zcGVjdG9yKFwicGFja2FnZXM6Ly9pbnNwZWN0b3IvaW5zcGVjdG9ycy9jb21wcy9zcHJpdGUuanNcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpU3ByaXRlIGV4dGVuZHMgY2MuU3ByaXRlIHtcblxuICAgIHByaXZhdGUgX3RleHR1cmVJZHg6IG51bWJlciA9IDA7XG4gICAgLyoqIOW9k+WJjea4suafk+e7hOS7tuS9v+eUqOeahOe6ueeQhuS4i+agh++8jOS4jemcgOimgeS4u+WKqOiwg+eUqO+8jOivpee7hOS7tuWGhemDqOS8muiHquihjOWkhOeQhiAqL1xuICAgIHByaXZhdGUgZ2V0IHRleHR1cmVJZHgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3RleHR1cmVJZHg7IH1cbiAgICBwcml2YXRlIHNldCB0ZXh0dXJlSWR4KHY6IG51bWJlcikge1xuICAgICAgICB0aGlzLl90ZXh0dXJlSWR4ID0gY2MubWlzYy5jbGFtcGYodiwgMCwgTXVsdGlUZXh0dXJlTWFuYWdlci5NQVhfVEVYVFVSRV9OVU0gLSAxKTtcbiAgICAgICAgdGhpc1tcInNldFZlcnRzRGlydHlcIl0oKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVzZXRJbkVkaXRvcigpOiB2b2lkIHtcbiAgICAgICAgRWRpdG9yVG9vbC5sb2FkPGNjLk1hdGVyaWFsPihcInJlcy9zaGFkZXIvbWF0ZXJpYWxzL211bHRpVGV4dHVyZS5tdGxcIikudGhlbigobWF0KSA9PiB7XG4gICAgICAgICAgICBpZiAobWF0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNYXRlcmlhbCgwLCBtYXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5vbkxvYWQ/LigpO1xuICAgICAgICBNdWx0aVRleHR1cmVNYW5hZ2VyLmFkZFNwcml0ZSh0aGlzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICBzdXBlci5vbkRlc3Ryb3k/LigpO1xuICAgICAgICBNdWx0aVRleHR1cmVNYW5hZ2VyLnJlbW92ZVNwcml0ZSh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva5zcHJpdGVGcmFtZeWSjG1hdGVyaWFs5pe25byV5pOO5YaF6YOo5Lya6LCD55So77yM5pu05pawdGV4dHVyZUlkeO+8jOabtOaWsOadkOi0qOWxnuaAp1xuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIHB1YmxpYyBfdXBkYXRlTWF0ZXJpYWwoKTogdm9pZCB7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSBtYXRlcmlhbCBpcyBiZWxvbmcgdG8gc2VsZi5cbiAgICAgICAgbGV0IG1hdGVyaWFsID0gdGhpcy5nZXRNYXRlcmlhbCgwKTtcbiAgICAgICAgaWYgKG1hdGVyaWFsKSB7XG4gICAgICAgICAgICBsZXQgdGV4dHVyZSA9IG51bGw7XG4gICAgICAgICAgICBsZXQgdGV4dHVyZUltcGwgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgICAgICB0ZXh0dXJlID0gdGhpcy5zcHJpdGVGcmFtZS5nZXRUZXh0dXJlKCk7XG4gICAgICAgICAgICAgICAgdGV4dHVyZUltcGwgPSB0ZXh0dXJlICYmIHRleHR1cmUuZ2V0SW1wbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1hdGVyaWFsLm5hbWUuaW5kZXhPZihcIm11bHRpVGV4dHVyZVwiKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8g5Yid5aeL5YyW57q555CG566h55CG5ZmoXG4gICAgICAgICAgICAgICAgTXVsdGlUZXh0dXJlTWFuYWdlci5pbml0KG1hdGVyaWFsW1wiX21hdGVyaWFsXCJdKTtcbiAgICAgICAgICAgICAgICAvLyDmm7TmlrB0ZXh0dXJlSWR4XG4gICAgICAgICAgICAgICAgbGV0IGlkeCA9IE11bHRpVGV4dHVyZU1hbmFnZXIuZ2V0SWR4KHRleHR1cmUpO1xuICAgICAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVJZHggPSBpZHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtYXRlcmlhbC5nZXRQcm9wZXJ0eShgdGV4dHVyZSR7dGhpcy50ZXh0dXJlSWR4fWAsIDApICE9PSB0ZXh0dXJlSW1wbCkge1xuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eShgdGV4dHVyZSR7dGhpcy50ZXh0dXJlSWR4fWAsIHRleHR1cmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGVyaWFsLmdldFByb3BlcnR5KGB0ZXh0dXJlYCwgMCkgIT09IHRleHR1cmVJbXBsKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KGB0ZXh0dXJlYCwgdGV4dHVyZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2MuQmxlbmRGdW5jLnByb3RvdHlwZVtcIl91cGRhdGVNYXRlcmlhbFwiXS5jYWxsKHRoaXMpO1xuICAgIH1cbn1cblxuY2MuQXNzZW1ibGVyLnJlZ2lzdGVyKE11bHRpU3ByaXRlLCB7XG4gICAgZ2V0Q29uc3RydWN0b3Ioc3ByaXRlKSB7XG4gICAgICAgIGxldCBjdG9yOiBhbnkgPSBNdWx0aUFzc2VtYmxlclNpbXBsZTtcbiAgICAgICAgc3dpdGNoIChzcHJpdGUudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBjYy5TcHJpdGUuVHlwZS5TTElDRUQ6XG4gICAgICAgICAgICAgICAgY3RvciA9IE11bHRpQXNzZW1ibGVyU2xpY2VkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5TcHJpdGUuVHlwZS5USUxFRDpcbiAgICAgICAgICAgICAgICBjdG9yID0gTXVsdGlBc3NlbWJsZXJUaWxlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MuU3ByaXRlLlR5cGUuRklMTEVEOlxuICAgICAgICAgICAgICAgIGlmIChzcHJpdGUuX2ZpbGxUeXBlID09PSBjYy5TcHJpdGUuRmlsbFR5cGUuUkFESUFMKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0b3IgPSBNdWx0aUFzc2VtYmxlclJhZGlhbEZpbGxlZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjdG9yID0gTXVsdGlBc3NlbWJsZXJCYXJGaWxsZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjdG9yO1xuICAgIH1cbn0pO1xuIl19