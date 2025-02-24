
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/mvvm/VMState.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e477adAZEJBzadV/Qyt79yt', 'VMState');
// c2f-framework/mvvm/VMState.ts

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
var ViewModel_1 = require("./ViewModel");
var VMBase_1 = require("./VMBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
/**比较条件 */
var CONDITION;
(function (CONDITION) {
    CONDITION[CONDITION["=="] = 0] = "==";
    CONDITION[CONDITION["!="] = 1] = "!=";
    CONDITION[CONDITION[">"] = 2] = ">";
    CONDITION[CONDITION[">="] = 3] = ">=";
    CONDITION[CONDITION["<"] = 4] = "<";
    CONDITION[CONDITION["<="] = 5] = "<=";
    CONDITION[CONDITION["range"] = 6] = "range"; //计算在范围内
})(CONDITION || (CONDITION = {}));
var ACTION;
(function (ACTION) {
    ACTION[ACTION["NODE_ACTIVE"] = 0] = "NODE_ACTIVE";
    ACTION[ACTION["NODE_VISIBLE"] = 1] = "NODE_VISIBLE";
    ACTION[ACTION["NODE_OPACITY"] = 2] = "NODE_OPACITY";
    ACTION[ACTION["NODE_COLOR"] = 3] = "NODE_COLOR";
    ACTION[ACTION["COMPONENT_CUSTOM"] = 4] = "COMPONENT_CUSTOM";
})(ACTION || (ACTION = {}));
var CHILD_MODE_TYPE;
(function (CHILD_MODE_TYPE) {
    CHILD_MODE_TYPE[CHILD_MODE_TYPE["NODE_INDEX"] = 0] = "NODE_INDEX";
    CHILD_MODE_TYPE[CHILD_MODE_TYPE["NODE_NAME"] = 1] = "NODE_NAME";
})(CHILD_MODE_TYPE || (CHILD_MODE_TYPE = {}));
/**
 * [VM-State]
 * 监听数值状态,根据数值条件设置节点是否激活
 */
var VMState = /** @class */ (function (_super) {
    __extends(VMState, _super);
    function VMState() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.watchPath = "";
        _this.foreachChildMode = false;
        _this.condition = CONDITION["=="];
        _this.foreachChildType = CHILD_MODE_TYPE.NODE_INDEX;
        _this.valueA = 0;
        _this.valueB = 0;
        _this.valueAction = ACTION.NODE_ACTIVE;
        _this.valueActionOpacity = 0;
        _this.valueActionColor = cc.color(155, 155, 155);
        _this.valueComponentName = '';
        _this.valueComponentProperty = '';
        _this.valueComponentDefaultValue = '';
        _this.valueComponentActionValue = '';
        _this.watchNodes = [];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    VMState.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        //如果数组里没有监听值，那么默认把所有子节点给监听了
        if (this.watchNodes.length == 0) {
            if (this.valueAction !== ACTION.NODE_ACTIVE && this.foreachChildMode === false) {
                this.watchNodes.push(this.node);
            }
            this.watchNodes = this.watchNodes.concat(this.node.children);
        }
        if (this.enabled)
            this.onValueInit();
    };
    VMState.prototype.start = function () {
    };
    //当值初始化时
    VMState.prototype.onValueInit = function () {
        var value = ViewModel_1.VM.getValue(this.watchPath);
        this.checkNodeFromValue(value);
    };
    //当值被改变时
    VMState.prototype.onValueChanged = function (newVar, oldVar, pathArr) {
        this.checkNodeFromValue(newVar);
    };
    //检查节点值更新
    VMState.prototype.checkNodeFromValue = function (value) {
        var _this = this;
        if (this.foreachChildMode) {
            this.watchNodes.forEach(function (node, index) {
                var v = (_this.foreachChildType === CHILD_MODE_TYPE.NODE_INDEX) ? index : node.name;
                var check = _this.conditionCheck(value, v);
                //cc.log('遍历模式',value,node.name,check);
                _this.setNodeState(node, check);
            });
        }
        else {
            var check = this.conditionCheck(value, this.valueA, this.valueB);
            this.setNodesStates(check);
        }
    };
    //更新 多个节点 的 状态
    VMState.prototype.setNodesStates = function (checkState) {
        var _this = this;
        var nodes = this.watchNodes;
        var check = checkState;
        nodes.forEach(function (node) {
            _this.setNodeState(node, check);
        });
    };
    /**更新单个节点的状态 */
    VMState.prototype.setNodeState = function (node, checkState) {
        var n = this.valueAction;
        var check = checkState;
        var a = ACTION;
        switch (n) {
            case a.NODE_ACTIVE:
                node.active = check ? true : false;
                break;
            case a.NODE_VISIBLE:
                node.opacity = check ? 255 : 0;
                break;
            case a.NODE_COLOR:
                node.color = check ? this.valueActionColor : cc.color(255, 255, 255);
                break;
            case a.NODE_OPACITY:
                node.opacity = check ? this.valueActionOpacity : 255;
                break;
            case a.COMPONENT_CUSTOM:
                var comp = node.getComponent(this.valueComponentName);
                if (comp == null)
                    return;
                if (this.valueComponentProperty in comp) {
                    comp[this.valueComponentProperty] = check ? this.valueComponentActionValue : this.valueComponentDefaultValue;
                }
                break;
            default:
                break;
        }
    };
    /**条件检查 */
    VMState.prototype.conditionCheck = function (v, a, b) {
        var cod = CONDITION;
        switch (this.condition) {
            case cod["=="]:
                if (v == a)
                    return true;
                break;
            case cod["!="]:
                if (v != a)
                    return true;
                break;
            case cod["<"]:
                if (v < a)
                    return true;
                break;
            case cod[">"]:
                if (v > a)
                    return true;
                break;
            case cod[">="]:
                if (v >= a)
                    return true;
                break;
            case cod["<"]:
                if (v < a)
                    return true;
                break;
            case cod["<="]:
                if (v <= a)
                    return true;
                break;
            case cod["range"]:
                if (v >= a && v <= b)
                    return true;
                break;
            default:
                break;
        }
        return false;
    };
    __decorate([
        property
    ], VMState.prototype, "watchPath", void 0);
    __decorate([
        property({
            tooltip: '遍历子节点,根据子节点的名字或名字转换为值，判断值满足条件 来激活'
        })
    ], VMState.prototype, "foreachChildMode", void 0);
    __decorate([
        property({
            type: cc.Enum(CONDITION),
        })
    ], VMState.prototype, "condition", void 0);
    __decorate([
        property({
            type: cc.Enum(CHILD_MODE_TYPE),
            tooltip: '遍历子节点,根据子节点的名字转换为值，判断值满足条件 来激活',
            visible: function () { return this.foreachChildMode === true; }
        })
    ], VMState.prototype, "foreachChildType", void 0);
    __decorate([
        property({
            displayName: 'Value: a',
            visible: function () { return this.foreachChildMode === false; }
        })
    ], VMState.prototype, "valueA", void 0);
    __decorate([
        property({
            displayName: 'Value: b',
            visible: function () { return this.foreachChildMode === false && this.condition === CONDITION.range; }
        })
    ], VMState.prototype, "valueB", void 0);
    __decorate([
        property({
            type: cc.Enum(ACTION),
            tooltip: '一旦满足条件就对节点执行操作'
        })
    ], VMState.prototype, "valueAction", void 0);
    __decorate([
        property({
            visible: function () { return this.valueAction === ACTION.NODE_OPACITY; },
            range: [0, 255],
            type: cc.Integer,
            displayName: 'Action Opacity'
        })
    ], VMState.prototype, "valueActionOpacity", void 0);
    __decorate([
        property({
            visible: function () { return this.valueAction === ACTION.NODE_COLOR; },
            displayName: 'Action Color'
        })
    ], VMState.prototype, "valueActionColor", void 0);
    __decorate([
        property({
            visible: function () { return this.valueAction === ACTION.COMPONENT_CUSTOM; },
            displayName: 'Component Name'
        })
    ], VMState.prototype, "valueComponentName", void 0);
    __decorate([
        property({
            visible: function () { return this.valueAction === ACTION.COMPONENT_CUSTOM; },
            displayName: 'Component Property'
        })
    ], VMState.prototype, "valueComponentProperty", void 0);
    __decorate([
        property({
            visible: function () { return this.valueAction === ACTION.COMPONENT_CUSTOM; },
            displayName: 'Default Value'
        })
    ], VMState.prototype, "valueComponentDefaultValue", void 0);
    __decorate([
        property({
            visible: function () { return this.valueAction === ACTION.COMPONENT_CUSTOM; },
            displayName: 'Action Value'
        })
    ], VMState.prototype, "valueComponentActionValue", void 0);
    __decorate([
        property({
            type: [cc.Node],
            tooltip: '需要执行条件的节点，如果不填写则默认会执行本节点以及本节点的所有子节点 的状态'
        })
    ], VMState.prototype, "watchNodes", void 0);
    VMState = __decorate([
        ccclass,
        menu('ModelViewer/VM-State (VM状态控制)')
    ], VMState);
    return VMState;
}(VMBase_1.default));
exports.default = VMState;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL212dm0vVk1TdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5Q0FBaUM7QUFDakMsbUNBQThCO0FBRXhCLElBQUEsS0FBOEIsRUFBRSxDQUFDLFVBQVUsRUFBekMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBRWxELFVBQVU7QUFDVixJQUFLLFNBUUo7QUFSRCxXQUFLLFNBQVM7SUFDVixxQ0FBSSxDQUFBO0lBQ0oscUNBQUksQ0FBQTtJQUNKLG1DQUFHLENBQUE7SUFDSCxxQ0FBSSxDQUFBO0lBQ0osbUNBQUcsQ0FBQTtJQUNILHFDQUFJLENBQUE7SUFDSiwyQ0FBTyxDQUFBLENBQUMsUUFBUTtBQUNwQixDQUFDLEVBUkksU0FBUyxLQUFULFNBQVMsUUFRYjtBQUVELElBQUssTUFNSjtBQU5ELFdBQUssTUFBTTtJQUNQLGlEQUFXLENBQUE7SUFDWCxtREFBWSxDQUFBO0lBQ1osbURBQVksQ0FBQTtJQUNaLCtDQUFVLENBQUE7SUFDViwyREFBZ0IsQ0FBQTtBQUNwQixDQUFDLEVBTkksTUFBTSxLQUFOLE1BQU0sUUFNVjtBQUVELElBQUssZUFHSjtBQUhELFdBQUssZUFBZTtJQUNoQixpRUFBVSxDQUFBO0lBQ1YsK0RBQVMsQ0FBQTtBQUNiLENBQUMsRUFISSxlQUFlLEtBQWYsZUFBZSxRQUduQjtBQUVEOzs7R0FHRztBQUdIO0lBQXFDLDJCQUFNO0lBQTNDO1FBQUEscUVBdU1DO1FBcE1HLGVBQVMsR0FBVyxFQUFFLENBQUM7UUFLdkIsc0JBQWdCLEdBQVksS0FBSyxDQUFDO1FBS2xDLGVBQVMsR0FBYyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFPdkMsc0JBQWdCLEdBQW9CLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFNL0QsWUFBTSxHQUFXLENBQUMsQ0FBQztRQU1uQixZQUFNLEdBQVcs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OUIsQ0FBQzs4REFDcUM7SUFNdkM7UUFKQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2YsT0FBTyxFQUFFLHlDQUF5QztTQUNyRCxDQUFDOytDQUN5QjtJQXBGVixPQUFPO1FBRjNCLE9BQU87UUFDUCxJQUFJLENBQUMsK0JBQStCLENBQUM7T0FDakIsT0FBTyxDQXVNM0I7SUFBRCxjQUFDO0NBdk1ELEFBdU1DLENBdk1vQyxnQkFBTSxHQXVNMUM7a0JBdk1vQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBWTSB9IGZyb20gJy4vVmlld01vZGVsJztcbmltcG9ydCBWTUJhc2UgZnJvbSAnLi9WTUJhc2UnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKirmr5TovoPmnaHku7YgKi9cbmVudW0gQ09ORElUSU9OIHtcbiAgICBcIj09XCIsIC8v5q2j5bi46K6h566X77yM5q+U6L6DIOetieS6jlxuICAgIFwiIT1cIiwgLy/mraPluLjorqHnrpfvvIzmr5TovoMg5LiN562J5LqOXG4gICAgXCI+XCIsICAvL+ato+W4uOiuoeeul++8jOavlOi+gz5cbiAgICBcIj49XCIsIC8v5q2j5bi46K6h566X77yM5q+U6L6DPj1cbiAgICBcIjxcIiwgIC8v5q2j5bi46K6h566X77yM5q+U6L6DPFxuICAgIFwiPD1cIiwgLy8g5q2j5bi46K6h566X77yM5q+U6L6DPj1cbiAgICBcInJhbmdlXCIgLy/orqHnrpflnKjojIPlm7TlhoVcbn1cblxuZW51bSBBQ1RJT04ge1xuICAgIE5PREVfQUNUSVZFLCAvL+a7oei2s+adoeS7tiDnmoQg6IqC54K55r+A5rS7IO+8jOS4jea7oei2s+eahOS4jea/gOa0u1xuICAgIE5PREVfVklTSUJMRSwgLy/mu6HotrPmnaHku7Yg55qE6IqC54K55pi+56S677yM5LiN5ruh6Laz55qE5LiN5pi+56S6XG4gICAgTk9ERV9PUEFDSVRZLCAgLy/mu6HotrPmnaHku7bnmoToioLngrnmlLnlj5jkuI3pgI/mmI7luqbvvIzkuI3mu6HotrPnmoTov5jljp8yNTVcbiAgICBOT0RFX0NPTE9SLCAvL+a7oei2s+adoeS7tueahOiKgueCueaUueWPmOminOiJsu+8jOS4jea7oei2s+eahOaBouWkjeeZveiJslxuICAgIENPTVBPTkVOVF9DVVNUT00sIC8v6Ieq5a6a5LmJ5o6n5Yi257uE5Lu25qih5byPXG59XG5cbmVudW0gQ0hJTERfTU9ERV9UWVBFIHtcbiAgICBOT0RFX0lOREVYLFxuICAgIE5PREVfTkFNRVxufVxuXG4vKipcbiAqIFtWTS1TdGF0ZV1cbiAqIOebkeWQrOaVsOWAvOeKtuaAgSzmoLnmja7mlbDlgLzmnaHku7borr7nva7oioLngrnmmK/lkKbmv4DmtLtcbiAqL1xuQGNjY2xhc3NcbkBtZW51KCdNb2RlbFZpZXdlci9WTS1TdGF0ZSAoVk3nirbmgIHmjqfliLYpJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZNU3RhdGUgZXh0ZW5kcyBWTUJhc2Uge1xuXG4gICAgQHByb3BlcnR5XG4gICAgd2F0Y2hQYXRoOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdG9vbHRpcDogJ+mBjeWOhuWtkOiKgueCuSzmoLnmja7lrZDoioLngrnnmoTlkI3lrZfmiJblkI3lrZfovazmjaLkuLrlgLzvvIzliKTmlq3lgLzmu6HotrPmnaHku7Yg5p2l5r+A5rS7J1xuICAgIH0pXG4gICAgZm9yZWFjaENoaWxkTW9kZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuRW51bShDT05ESVRJT04pLFxuICAgIH0pXG4gICAgY29uZGl0aW9uOiBDT05ESVRJT04gPSBDT05ESVRJT05bXCI9PVwiXTtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLkVudW0oQ0hJTERfTU9ERV9UWVBFKSxcbiAgICAgICAgdG9vbHRpcDogJ+mBjeWOhuWtkOiKgueCuSzmoLnmja7lrZDoioLngrnnmoTlkI3lrZfovazmjaLkuLrlgLzvvIzliKTmlq3lgLzmu6HotrPmnaHku7Yg5p2l5r+A5rS7JyxcbiAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5mb3JlYWNoQ2hpbGRNb2RlID09PSB0cnVlIH1cbiAgICB9KVxuICAgIGZvcmVhY2hDaGlsZFR5cGU6IENISUxEX01PREVfVFlQRSA9IENISUxEX01PREVfVFlQRS5OT0RFX0lOREVYO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6ICdWYWx1ZTogYScsXG4gICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZm9yZWFjaENoaWxkTW9kZSA9PT0gZmFsc2UgfVxuICAgIH0pXG4gICAgdmFsdWVBOiBudW1iZXIgPSAwO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6ICdWYWx1ZTogYicsXG4gICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZm9yZWFjaENoaWxkTW9kZSA9PT0gZmFsc2UgJiYgdGhpcy5jb25kaXRpb24gPT09IENPTkRJVElPTi5yYW5nZSB9XG4gICAgfSlcbiAgICB2YWx1ZUI6IG51bWJlciA9IDA7XG5cblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLkVudW0oQUNUSU9OKSxcbiAgICAgICAgdG9vbHRpcDogJ+S4gOaXpua7oei2s+adoeS7tuWwseWvueiKgueCueaJp+ihjOaTjeS9nCdcbiAgICB9KVxuICAgIHZhbHVlQWN0aW9uOiBBQ1RJT04gPSBBQ1RJT04uTk9ERV9BQ1RJVkU7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLnZhbHVlQWN0aW9uID09PSBBQ1RJT04uTk9ERV9PUEFDSVRZIH0sXG4gICAgICAgIHJhbmdlOiBbMCwgMjU1XSxcbiAgICAgICAgdHlwZTogY2MuSW50ZWdlcixcbiAgICAgICAgZGlzcGxheU5hbWU6ICdBY3Rpb24gT3BhY2l0eSdcbiAgICB9KVxuICAgIHZhbHVlQWN0aW9uT3BhY2l0eTogbnVtYmVyID0gMDtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMudmFsdWVBY3Rpb24gPT09IEFDVElPTi5OT0RFX0NPTE9SIH0sXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnQWN0aW9uIENvbG9yJ1xuICAgIH0pXG4gICAgdmFsdWVBY3Rpb25Db2xvcjogY2MuQ29sb3IgPSBjYy5jb2xvcigxNTUsIDE1NSwgMTU1KTtcblxuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy52YWx1ZUFjdGlvbiA9PT0gQUNUSU9OLkNPTVBPTkVOVF9DVVNUT00gfSxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdDb21wb25lbnQgTmFtZSdcbiAgICB9KVxuICAgIHZhbHVlQ29tcG9uZW50TmFtZTogc3RyaW5nID0gJyc7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLnZhbHVlQWN0aW9uID09PSBBQ1RJT04uQ09NUE9ORU5UX0NVU1RPTSB9LFxuICAgICAgICBkaXNwbGF5TmFtZTogJ0NvbXBvbmVudCBQcm9wZXJ0eSdcbiAgICB9KVxuICAgIHZhbHVlQ29tcG9uZW50UHJvcGVydHk6IHN0cmluZyA9ICcnO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy52YWx1ZUFjdGlvbiA9PT0gQUNUSU9OLkNPTVBPTkVOVF9DVVNUT00gfSxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdEZWZhdWx0IFZhbHVlJ1xuICAgIH0pXG4gICAgdmFsdWVDb21wb25lbnREZWZhdWx0VmFsdWU6IHN0cmluZyA9ICcnO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy52YWx1ZUFjdGlvbiA9PT0gQUNUSU9OLkNPTVBPTkVOVF9DVVNUT00gfSxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdBY3Rpb24gVmFsdWUnXG4gICAgfSlcbiAgICB2YWx1ZUNvbXBvbmVudEFjdGlvblZhbHVlOiBzdHJpbmcgPSAnJztcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IFtjYy5Ob2RlXSxcbiAgICAgICAgdG9vbHRpcDogJ+mcgOimgeaJp+ihjOadoeS7tueahOiKgueCue+8jOWmguaenOS4jeWhq+WGmeWImem7mOiupOS8muaJp+ihjOacrOiKgueCueS7peWPiuacrOiKgueCueeahOaJgOacieWtkOiKgueCuSDnmoTnirbmgIEnXG4gICAgfSlcbiAgICB3YXRjaE5vZGVzOiBjYy5Ob2RlW10gPSBbXTtcblxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuICAgICAgICAvL+WmguaenOaVsOe7hOmHjOayoeacieebkeWQrOWAvO+8jOmCo+S5iOm7mOiupOaKiuaJgOacieWtkOiKgueCuee7meebkeWQrOS6hlxuICAgICAgICBpZiAodGhpcy53YXRjaE5vZGVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZUFjdGlvbiAhPT0gQUNUSU9OLk5PREVfQUNUSVZFICYmIHRoaXMuZm9yZWFjaENoaWxkTW9kZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndhdGNoTm9kZXMucHVzaCh0aGlzLm5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy53YXRjaE5vZGVzID0gdGhpcy53YXRjaE5vZGVzLmNvbmNhdCh0aGlzLm5vZGUuY2hpbGRyZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCkgdGhpcy5vblZhbHVlSW5pdCgpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgIH1cblxuICAgIC8v5b2T5YC85Yid5aeL5YyW5pe2XG4gICAgcHJvdGVjdGVkIG9uVmFsdWVJbml0KCkge1xuICAgICAgICBsZXQgdmFsdWUgPSBWTS5nZXRWYWx1ZSh0aGlzLndhdGNoUGF0aCk7XG4gICAgICAgIHRoaXMuY2hlY2tOb2RlRnJvbVZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvL+W9k+WAvOiiq+aUueWPmOaXtlxuICAgIHByb3RlY3RlZCBvblZhbHVlQ2hhbmdlZChuZXdWYXI6IGFueSwgb2xkVmFyOiBhbnksIHBhdGhBcnI6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuY2hlY2tOb2RlRnJvbVZhbHVlKG5ld1Zhcik7XG4gICAgfVxuXG4gICAgLy/mo4Dmn6XoioLngrnlgLzmm7TmlrBcbiAgICBwcml2YXRlIGNoZWNrTm9kZUZyb21WYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5mb3JlYWNoQ2hpbGRNb2RlKSB7XG4gICAgICAgICAgICB0aGlzLndhdGNoTm9kZXMuZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdiA9ICh0aGlzLmZvcmVhY2hDaGlsZFR5cGUgPT09IENISUxEX01PREVfVFlQRS5OT0RFX0lOREVYKSA/IGluZGV4IDogbm9kZS5uYW1lO1xuICAgICAgICAgICAgICAgIGxldCBjaGVjayA9IHRoaXMuY29uZGl0aW9uQ2hlY2sodmFsdWUsIHYpO1xuICAgICAgICAgICAgICAgIC8vY2MubG9nKCfpgY3ljobmqKHlvI8nLHZhbHVlLG5vZGUubmFtZSxjaGVjayk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXROb2RlU3RhdGUobm9kZSwgY2hlY2spO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjaGVjayA9IHRoaXMuY29uZGl0aW9uQ2hlY2sodmFsdWUsIHRoaXMudmFsdWVBLCB0aGlzLnZhbHVlQik7XG4gICAgICAgICAgICB0aGlzLnNldE5vZGVzU3RhdGVzKGNoZWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v5pu05pawIOWkmuS4quiKgueCuSDnmoQg54q25oCBXG4gICAgcHJpdmF0ZSBzZXROb2Rlc1N0YXRlcyhjaGVja1N0YXRlPzogYm9vbGVhbikge1xuICAgICAgICBsZXQgbm9kZXMgPSB0aGlzLndhdGNoTm9kZXM7XG4gICAgICAgIGxldCBjaGVjayA9IGNoZWNrU3RhdGU7XG4gICAgICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0Tm9kZVN0YXRlKG5vZGUsIGNoZWNrKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKirmm7TmlrDljZXkuKroioLngrnnmoTnirbmgIEgKi9cbiAgICBwcml2YXRlIHNldE5vZGVTdGF0ZShub2RlOiBjYy5Ob2RlLCBjaGVja1N0YXRlPzogYm9vbGVhbikge1xuICAgICAgICBsZXQgbiA9IHRoaXMudmFsdWVBY3Rpb247XG4gICAgICAgIGxldCBjaGVjayA9IGNoZWNrU3RhdGU7XG4gICAgICAgIGxldCBhID0gQUNUSU9OO1xuICAgICAgICBzd2l0Y2ggKG4pIHtcbiAgICAgICAgICAgIGNhc2UgYS5OT0RFX0FDVElWRTogbm9kZS5hY3RpdmUgPSBjaGVjayA/IHRydWUgOiBmYWxzZTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGEuTk9ERV9WSVNJQkxFOiBub2RlLm9wYWNpdHkgPSBjaGVjayA/IDI1NSA6IDA7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBhLk5PREVfQ09MT1I6IG5vZGUuY29sb3IgPSBjaGVjayA/IHRoaXMudmFsdWVBY3Rpb25Db2xvciA6IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUpOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYS5OT0RFX09QQUNJVFk6IG5vZGUub3BhY2l0eSA9IGNoZWNrID8gdGhpcy52YWx1ZUFjdGlvbk9wYWNpdHkgOiAyNTU7IGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIGEuQ09NUE9ORU5UX0NVU1RPTTpcbiAgICAgICAgICAgICAgICBsZXQgY29tcCA9IG5vZGUuZ2V0Q29tcG9uZW50KHRoaXMudmFsdWVDb21wb25lbnROYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcCA9PSBudWxsKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVDb21wb25lbnRQcm9wZXJ0eSBpbiBjb21wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBbdGhpcy52YWx1ZUNvbXBvbmVudFByb3BlcnR5XSA9IGNoZWNrID8gdGhpcy52YWx1ZUNvbXBvbmVudEFjdGlvblZhbHVlIDogdGhpcy52YWx1ZUNvbXBvbmVudERlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirmnaHku7bmo4Dmn6UgKi9cbiAgICBwcml2YXRlIGNvbmRpdGlvbkNoZWNrKHYsIGEsIGI/KTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBjb2QgPSBDT05ESVRJT047XG4gICAgICAgIHN3aXRjaCAodGhpcy5jb25kaXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgY29kW1wiPT1cIl06XG4gICAgICAgICAgICAgICAgaWYgKHYgPT0gYSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNvZFtcIiE9XCJdOlxuICAgICAgICAgICAgICAgIGlmICh2ICE9IGEpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjb2RbXCI8XCJdOlxuICAgICAgICAgICAgICAgIGlmICh2IDwgYSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNvZFtcIj5cIl06XG4gICAgICAgICAgICAgICAgaWYgKHYgPiBhKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY29kW1wiPj1cIl06XG4gICAgICAgICAgICAgICAgaWYgKHYgPj0gYSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNvZFtcIjxcIl06XG4gICAgICAgICAgICAgICAgaWYgKHYgPCBhKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY29kW1wiPD1cIl06XG4gICAgICAgICAgICAgICAgaWYgKHYgPD0gYSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNvZFtcInJhbmdlXCJdOlxuICAgICAgICAgICAgICAgIGlmICh2ID49IGEgJiYgdiA8PSBiKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iXX0=