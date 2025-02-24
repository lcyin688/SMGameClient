
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/mvvm/VMCustom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c50f4kW3R1CZrIudVwBfx64', 'VMCustom');
// c2f-framework/mvvm/VMCustom.ts

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
var VMBase_1 = require("./VMBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, menu = _a.menu;
/**自动检查识别的数组,你可以准备自己的组件放上去自动识别 */
var COMP_ARRAY_CHECK = [
    ['BhvFrameIndex', 'index', false],
    ['BhvGroupToggle', 'index', false],
    ['BhvRollNumber', 'targetValue', false],
    //组件名、默认属性、controller值
    ['cc.Label', 'string', false],
    ['cc.RichText', 'string', false],
    ['cc.EditBox', 'string', true],
    ['cc.Slider', 'progress', true],
    ['cc.ProgressBar', 'progress', false],
    ['cc.Toggle', 'isChecked', true]
];
/**
 * [VM-Custom]
 * 自定义数值监听, 可以快速对该节点上任意一个组件上的属性进行双向绑定
 */
var VMCustom = /** @class */ (function (_super) {
    __extends(VMCustom, _super);
    function VMCustom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.controller = false;
        _this.watchPath = "";
        _this.componentName = "";
        _this.componentProperty = "";
        _this.refreshRate = 0.1;
        //计时器
        _this._timer = 0;
        /**监听的组件对象 */
        _this._watchComponent = null;
        /**是否能监听组件的数据 */
        _this._canWatchComponent = false;
        /**检查的值 */
        _this._oldValue = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    VMCustom.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        //只在运行时检查组件是否缺失可用
        this.checkEditorComponent(); //编辑器检查
        if (!CC_EDITOR) {
            this._watchComponent = this.node.getComponent(this.componentName);
            this.checkComponentState();
        }
    };
    VMCustom.prototype.onRestore = function () {
        this.checkEditorComponent();
    };
    VMCustom.prototype.start = function () {
        //从 watch 的路径中获取一个初始值
        this.onValueInit();
    };
    //挂在对应节点后，自动获取组件属性和名字
    VMCustom.prototype.checkEditorComponent = function () {
        if (CC_EDITOR) {
            var checkArray = COMP_ARRAY_CHECK;
            this.controller = false;
            for (var i = 0; i < checkArray.length; i++) {
                var params = checkArray[i];
                var comp = this.node.getComponent(params[0]);
                if (comp) {
                    if (this.componentName == '')
                        this.componentName = params[0];
                    if (this.componentProperty == '')
                        this.componentProperty = params[1];
                    if (params[2] !== null)
                        this.controller = params[2];
                    break;
                }
            }
        }
    };
    VMCustom.prototype.checkComponentState = function () {
        this._canWatchComponent = false;
        if (!this._watchComponent) {
            console.error('未设置需要监听的组件');
            return;
        }
        if (!this.componentProperty) {
            console.error('未设置需要监听的组件 的属性');
            return;
        }
        if (this.componentProperty in this._watchComponent === false) {
            console.error('需要监听的组件的属性不存在');
            return;
        }
        this._canWatchComponent = true;
    };
    VMCustom.prototype.getComponentValue = function () {
        return this._watchComponent[this.componentProperty];
    };
    VMCustom.prototype.setComponentValue = function (value) {
        //如果遇到cc.Toggle 组件就调用上面的方法解决
        if (this.componentName == "cc.Toggle") {
            if (value == true) {
                this.node.getComponent(cc.Toggle).check();
            }
            if (value == false) {
                this.node.getComponent(cc.Toggle).uncheck();
            }
        }
        else {
            this._watchComponent[this.componentProperty] = value;
        }
    };
    /**初始化获取数据 */
    VMCustom.prototype.onValueInit = function () {
        if (CC_EDITOR)
            return; //编辑器模式不初始化
        //更新信息
        this.setComponentValue(this.VM.getValue(this.watchPath));
    };
    /**[可重写]组件的值发生变化后，触发更新此值 */
    VMCustom.prototype.onValueController = function (newValue, oldValue) {
        this.VM.setValue(this.watchPath, newValue);
    };
    /**[可重写]初始化改变数据 */
    VMCustom.prototype.onValueChanged = function (n, o, pathArr) {
        this.setComponentValue(n);
    };
    VMCustom.prototype.update = function (dt) {
        //脏检查（组件是否存在，是否被激活）
        if (CC_EDITOR == true)
            return;
        //if (this.templateMode == true) return; //todo 模板模式下不能计算  
        if (!this.controller)
            return;
        if (!this._canWatchComponent || this._watchComponent['enabled'] === false)
            return;
        //刷新频率检查
        this._timer += dt;
        if (this._timer < this.refreshRate)
            return;
        this._timer = 0;
        var oldValue = this._oldValue;
        var newValue = this.getComponentValue();
        if (this._oldValue === newValue)
            return;
        this._oldValue = this.getComponentValue();
        this.onValueController(newValue, oldValue);
    };
    __decorate([
        property({
            tooltip: '激活controller,以开启双向绑定，否则只能接收消息'
        })
    ], VMCustom.prototype, "controller", void 0);
    __decorate([
        property
    ], VMCustom.prototype, "watchPath", void 0);
    __decorate([
        property({
            tooltip: '绑定组件的名字'
        })
    ], VMCustom.prototype, "componentName", void 0);
    __decorate([
        property({
            tooltip: '组件上需要监听的属性'
        })
    ], VMCustom.prototype, "componentProperty", void 0);
    __decorate([
        property({
            tooltip: '刷新间隔频率(只影响脏检查的频率)',
            step: 0.01,
            range: [0, 1],
            visible: function () { return this.controller === true; }
        })
    ], VMCustom.prototype, "refreshRate", void 0);
    VMCustom = __decorate([
        ccclass,
        executeInEditMode,
        menu('ModelViewer/VM-Custom (自定义VM)')
    ], VMCustom);
    return VMCustom;
}(VMBase_1.default));
exports.default = VMCustom;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL212dm0vVk1DdXN0b20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBRXhCLElBQUEsS0FBaUQsRUFBRSxDQUFDLFVBQVUsRUFBNUQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBRXJFLGlDQUFpQztBQUNqQyxJQUFNLGdCQUFnQixHQUFHO0lBQ3JCLENBQUMsZUFBZSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUM7SUFDakMsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQ2xDLENBQUMsZUFBZSxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUM7SUFDdkMsc0JBQXNCO0lBQ3RCLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUM7SUFDN0IsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQztJQUNoQyxDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDO0lBQzlCLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUM7SUFDL0IsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDO0lBQ3JDLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUM7Q0FDbkMsQ0FBQztBQUVGOzs7R0FHRztBQUlIO0lBQXNDLDRCQUFNO0lBQTVDO1FBQUEscUVBMElDO1FBdElHLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBRzVCLGVBQVMsR0FBVyxFQUFFLENBQUM7UUFLdkIsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFLM0IsdUJBQWlCLEdBQVcsRUFBRSxDQUFDO1FBUS9CLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBRTFCLEtBQUs7UUFDRyxZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLGFBQWE7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SW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVk1CYXNlIGZyb20gJy4vVk1CYXNlJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUsIG1lbnUgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8qKuiHquWKqOajgOafpeivhuWIq+eahOaVsOe7hCzkvaDlj6/ku6Xlh4blpIfoh6rlt7HnmoTnu4Tku7bmlL7kuIrljrvoh6rliqjor4bliKsgKi9cbmNvbnN0IENPTVBfQVJSQVlfQ0hFQ0sgPSBbXG4gICAgWydCaHZGcmFtZUluZGV4JywgJ2luZGV4JywgZmFsc2VdLFxuICAgIFsnQmh2R3JvdXBUb2dnbGUnLCAnaW5kZXgnLCBmYWxzZV0sXG4gICAgWydCaHZSb2xsTnVtYmVyJywgJ3RhcmdldFZhbHVlJywgZmFsc2VdLFxuICAgIC8v57uE5Lu25ZCN44CB6buY6K6k5bGe5oCn44CBY29udHJvbGxlcuWAvFxuICAgIFsnY2MuTGFiZWwnLCAnc3RyaW5nJywgZmFsc2VdLFxuICAgIFsnY2MuUmljaFRleHQnLCAnc3RyaW5nJywgZmFsc2VdLFxuICAgIFsnY2MuRWRpdEJveCcsICdzdHJpbmcnLCB0cnVlXSxcbiAgICBbJ2NjLlNsaWRlcicsICdwcm9ncmVzcycsIHRydWVdLFxuICAgIFsnY2MuUHJvZ3Jlc3NCYXInLCAncHJvZ3Jlc3MnLCBmYWxzZV0sXG4gICAgWydjYy5Ub2dnbGUnLCAnaXNDaGVja2VkJywgdHJ1ZV1cbl07XG5cbi8qKlxuICogW1ZNLUN1c3RvbV1cbiAqIOiHquWumuS5ieaVsOWAvOebkeWQrCwg5Y+v5Lul5b+r6YCf5a+56K+l6IqC54K55LiK5Lu75oSP5LiA5Liq57uE5Lu25LiK55qE5bGe5oCn6L+b6KGM5Y+M5ZCR57uR5a6aXG4gKi9cbkBjY2NsYXNzXG5AZXhlY3V0ZUluRWRpdE1vZGVcbkBtZW51KCdNb2RlbFZpZXdlci9WTS1DdXN0b20gKOiHquWumuS5iVZNKScpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWTUN1c3RvbSBleHRlbmRzIFZNQmFzZSB7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdG9vbHRpcDogJ+a/gOa0u2NvbnRyb2xsZXIs5Lul5byA5ZCv5Y+M5ZCR57uR5a6a77yM5ZCm5YiZ5Y+q6IO95o6l5pS25raI5oGvJ1xuICAgIH0pXG4gICAgY29udHJvbGxlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQHByb3BlcnR5XG4gICAgd2F0Y2hQYXRoOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdG9vbHRpcDogJ+e7keWumue7hOS7tueahOWQjeWtlydcbiAgICB9KVxuICAgIGNvbXBvbmVudE5hbWU6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0b29sdGlwOiAn57uE5Lu25LiK6ZyA6KaB55uR5ZCs55qE5bGe5oCnJ1xuICAgIH0pXG4gICAgY29tcG9uZW50UHJvcGVydHk6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0b29sdGlwOiAn5Yi35paw6Ze06ZqU6aKR546HKOWPquW9seWTjeiEj+ajgOafpeeahOmikeeOhyknLFxuICAgICAgICBzdGVwOiAwLjAxLFxuICAgICAgICByYW5nZTogWzAsIDFdLFxuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnRyb2xsZXIgPT09IHRydWUgfVxuICAgIH0pXG4gICAgcmVmcmVzaFJhdGU6IG51bWJlciA9IDAuMTtcblxuICAgIC8v6K6h5pe25ZmoXG4gICAgcHJpdmF0ZSBfdGltZXIgPSAwO1xuICAgIC8qKuebkeWQrOeahOe7hOS7tuWvueixoSAqL1xuICAgIHByaXZhdGUgX3dhdGNoQ29tcG9uZW50OiBhbnkgPSBudWxsO1xuICAgIC8qKuaYr+WQpuiDveebkeWQrOe7hOS7tueahOaVsOaNriAqL1xuICAgIHByaXZhdGUgX2NhbldhdGNoQ29tcG9uZW50OiBib29sZWFuID0gZmFsc2U7XG4gICAgLyoq5qOA5p+l55qE5YC8ICovXG4gICAgcHJpdmF0ZSBfb2xkVmFsdWU6IGFueSA9IG51bGw7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuICAgICAgICAvL+WPquWcqOi/kOihjOaXtuajgOafpee7hOS7tuaYr+WQpue8uuWkseWPr+eUqFxuICAgICAgICB0aGlzLmNoZWNrRWRpdG9yQ29tcG9uZW50KCk7Ly/nvJbovpHlmajmo4Dmn6VcbiAgICAgICAgaWYgKCFDQ19FRElUT1IpIHtcbiAgICAgICAgICAgIHRoaXMuX3dhdGNoQ29tcG9uZW50ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudCh0aGlzLmNvbXBvbmVudE5hbWUpO1xuICAgICAgICAgICAgdGhpcy5jaGVja0NvbXBvbmVudFN0YXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblJlc3RvcmUoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tFZGl0b3JDb21wb25lbnQoKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy/ku44gd2F0Y2gg55qE6Lev5b6E5Lit6I635Y+W5LiA5Liq5Yid5aeL5YC8XG4gICAgICAgIHRoaXMub25WYWx1ZUluaXQoKTtcbiAgICB9XG5cbiAgICAvL+aMguWcqOWvueW6lOiKgueCueWQju+8jOiHquWKqOiOt+WPlue7hOS7tuWxnuaAp+WSjOWQjeWtl1xuICAgIGNoZWNrRWRpdG9yQ29tcG9uZW50KCkge1xuICAgICAgICBpZiAoQ0NfRURJVE9SKSB7XG4gICAgICAgICAgICBsZXQgY2hlY2tBcnJheSA9IENPTVBfQVJSQVlfQ0hFQ0s7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGNoZWNrQXJyYXlbaV07XG4gICAgICAgICAgICAgICAgbGV0IGNvbXAgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KHBhcmFtc1swXSBhcyBzdHJpbmcpO1xuICAgICAgICAgICAgICAgIGlmIChjb21wKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudE5hbWUgPT0gJycpIHRoaXMuY29tcG9uZW50TmFtZSA9IHBhcmFtc1swXSBhcyBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudFByb3BlcnR5ID09ICcnKSB0aGlzLmNvbXBvbmVudFByb3BlcnR5ID0gcGFyYW1zWzFdIGFzIHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtc1syXSAhPT0gbnVsbCkgdGhpcy5jb250cm9sbGVyID0gcGFyYW1zWzJdIGFzIGJvb2xlYW47XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tDb21wb25lbnRTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5fY2FuV2F0Y2hDb21wb25lbnQgPSBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLl93YXRjaENvbXBvbmVudCkgeyBjb25zb2xlLmVycm9yKCfmnKrorr7nva7pnIDopoHnm5HlkKznmoTnu4Tku7YnKTsgcmV0dXJuOyB9XG4gICAgICAgIGlmICghdGhpcy5jb21wb25lbnRQcm9wZXJ0eSkgeyBjb25zb2xlLmVycm9yKCfmnKrorr7nva7pnIDopoHnm5HlkKznmoTnu4Tku7Yg55qE5bGe5oCnJyk7IHJldHVybjsgfVxuICAgICAgICBpZiAodGhpcy5jb21wb25lbnRQcm9wZXJ0eSBpbiB0aGlzLl93YXRjaENvbXBvbmVudCA9PT0gZmFsc2UpIHsgY29uc29sZS5lcnJvcign6ZyA6KaB55uR5ZCs55qE57uE5Lu255qE5bGe5oCn5LiN5a2Y5ZyoJyk7IHJldHVybjsgfVxuICAgICAgICB0aGlzLl9jYW5XYXRjaENvbXBvbmVudCA9IHRydWU7XG4gICAgfVxuXG4gICAgZ2V0Q29tcG9uZW50VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93YXRjaENvbXBvbmVudFt0aGlzLmNvbXBvbmVudFByb3BlcnR5XTtcbiAgICB9XG5cbiAgICBzZXRDb21wb25lbnRWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgICAgIC8v5aaC5p6c6YGH5YiwY2MuVG9nZ2xlIOe7hOS7tuWwseiwg+eUqOS4iumdoueahOaWueazleino+WGs1xuICAgICAgICBpZiAodGhpcy5jb21wb25lbnROYW1lID09IFwiY2MuVG9nZ2xlXCIpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Ub2dnbGUpLmNoZWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRvZ2dsZSkudW5jaGVjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fd2F0Y2hDb21wb25lbnRbdGhpcy5jb21wb25lbnRQcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKuWIneWni+WMluiOt+WPluaVsOaNriAqL1xuICAgIG9uVmFsdWVJbml0KCkge1xuICAgICAgICBpZiAoQ0NfRURJVE9SKSByZXR1cm47IC8v57yW6L6R5Zmo5qih5byP5LiN5Yid5aeL5YyWXG4gICAgICAgIC8v5pu05paw5L+h5oGvXG4gICAgICAgIHRoaXMuc2V0Q29tcG9uZW50VmFsdWUodGhpcy5WTS5nZXRWYWx1ZSh0aGlzLndhdGNoUGF0aCkpO1xuICAgIH1cblxuICAgIC8qKlvlj6/ph43lhpld57uE5Lu255qE5YC85Y+R55Sf5Y+Y5YyW5ZCO77yM6Kem5Y+R5pu05paw5q2k5YC8ICovXG4gICAgb25WYWx1ZUNvbnRyb2xsZXIobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMuVk0uc2V0VmFsdWUodGhpcy53YXRjaFBhdGgsIG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipb5Y+v6YeN5YaZXeWIneWni+WMluaUueWPmOaVsOaNriAqL1xuICAgIG9uVmFsdWVDaGFuZ2VkKG4sIG8sIHBhdGhBcnI6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuc2V0Q29tcG9uZW50VmFsdWUobik7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIC8v6ISP5qOA5p+l77yI57uE5Lu25piv5ZCm5a2Y5Zyo77yM5piv5ZCm6KKr5r+A5rS777yJXG4gICAgICAgIGlmIChDQ19FRElUT1IgPT0gdHJ1ZSkgcmV0dXJuO1xuICAgICAgICAvL2lmICh0aGlzLnRlbXBsYXRlTW9kZSA9PSB0cnVlKSByZXR1cm47IC8vdG9kbyDmqKHmnb/mqKHlvI/kuIvkuI3og73orqHnrpcgIFxuICAgICAgICBpZiAoIXRoaXMuY29udHJvbGxlcikgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMuX2NhbldhdGNoQ29tcG9uZW50IHx8IHRoaXMuX3dhdGNoQ29tcG9uZW50WydlbmFibGVkJ10gPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAgICAgLy/liLfmlrDpopHnjofmo4Dmn6VcbiAgICAgICAgdGhpcy5fdGltZXIgKz0gZHQ7XG4gICAgICAgIGlmICh0aGlzLl90aW1lciA8IHRoaXMucmVmcmVzaFJhdGUpIHJldHVybjtcbiAgICAgICAgdGhpcy5fdGltZXIgPSAwO1xuXG4gICAgICAgIGxldCBvbGRWYWx1ZSA9IHRoaXMuX29sZFZhbHVlO1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSB0aGlzLmdldENvbXBvbmVudFZhbHVlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX29sZFZhbHVlID09PSBuZXdWYWx1ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLl9vbGRWYWx1ZSA9IHRoaXMuZ2V0Q29tcG9uZW50VmFsdWUoKTtcbiAgICAgICAgdGhpcy5vblZhbHVlQ29udHJvbGxlcihuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuXG4gICAgfVxufVxuIl19