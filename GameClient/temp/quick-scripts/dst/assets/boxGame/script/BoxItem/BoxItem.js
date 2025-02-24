
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/boxGame/script/BoxItem/BoxItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a6deJsjpdMI4Tcc8vpQWlQ', 'BoxItem');
// boxGame/script/BoxItem/BoxItem.ts

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
var UIPControlBase_1 = require("./../../../c2f-framework/gui/layer/UIPControlBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BoxItem = /** @class */ (function (_super) {
    __extends(BoxItem, _super);
    function BoxItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'P_BoxItem';
        _this.model = undefined;
        _this.view = undefined;
        return _this;
    }
    BoxItem = __decorate([
        ccclass
    ], BoxItem);
    return BoxItem;
}(UIPControlBase_1.UIPControlBase));
exports.default = BoxItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9ib3hHYW1lL3NjcmlwdC9Cb3hJdGVtL0JveEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0ZBQW1GO0FBSzdFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXFDLDJCQUFjO0lBQW5EO1FBQUEscUVBU0M7UUFSRyxnQkFBZ0I7UUFDVCxnQkFBVSxHQUFHLFdBQVcsQ0FBQztRQUV6QixXQUFLLEdBQWlCLFNBQVMsQ0FBQztRQUNoQyxVQUFJLEdBQWdCLFNBQVMsQ0FBQzs7SUFJekMsQ0FBQztJQVRvQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBUzNCO0lBQUQsY0FBQztDQVRELEFBU0MsQ0FUb0MsK0JBQWMsR0FTbEQ7a0JBVG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVSVBDb250cm9sQmFzZSB9IGZyb20gJy4vLi4vLi4vLi4vYzJmLWZyYW1ld29yay9ndWkvbGF5ZXIvVUlQQ29udHJvbEJhc2UnO1xuaW1wb3J0IHsgQzJGRW51bSB9IGZyb20gJy4vLi4vLi4vLi4vYzJmLWZyYW1ld29yay9kZWZpbmUvQzJGRW51bSc7XG5pbXBvcnQgIEJveEl0ZW1Nb2RlbCBmcm9tICcuL0JveEl0ZW1Nb2RlbCc7XG5pbXBvcnQgIEJveEl0ZW1WaWV3IGZyb20gJy4vQm94SXRlbVZpZXcnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJveEl0ZW0gZXh0ZW5kcyBVSVBDb250cm9sQmFzZSB7XG4gICAgLyoqIOmihOWItuWQjSDnu5nlrp7kvovosIPnlKggKi9cbiAgICBwdWJsaWMgcHJlZmFiTmFtZSA9ICdQX0JveEl0ZW0nO1xuXG4gICAgcHVibGljIG1vZGVsOiBCb3hJdGVtTW9kZWwgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIHZpZXc6IEJveEl0ZW1WaWV3ID0gdW5kZWZpbmVkO1xuXG5cblxufSJdfQ==