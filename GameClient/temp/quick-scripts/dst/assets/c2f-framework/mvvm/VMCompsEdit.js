
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/mvvm/VMCompsEdit.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4854cIRC55OUK/fzePWPRcj', 'VMCompsEdit');
// c2f-framework/mvvm/VMCompsEdit.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, menu = _a.menu;
var ACTION_MODE;
(function (ACTION_MODE) {
    ACTION_MODE[ACTION_MODE["SEARCH_COMPONENT"] = 0] = "SEARCH_COMPONENT";
    ACTION_MODE[ACTION_MODE["ENABLE_COMPONENT"] = 1] = "ENABLE_COMPONENT";
    ACTION_MODE[ACTION_MODE["REPLACE_WATCH_PATH"] = 2] = "REPLACE_WATCH_PATH";
    ACTION_MODE[ACTION_MODE["DELETE_COMPONENT"] = 3] = "DELETE_COMPONENT";
})(ACTION_MODE || (ACTION_MODE = {}));
/**
 * 用于搜索的MV 组件列表，挂载在父节点后，
 * 会遍历搜索下面的所有MV组件, 并且显示其观察值的路径
 */
var MVCompsEdit = /** @class */ (function (_super) {
    __extends(MVCompsEdit, _super);
    function MVCompsEdit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.findList = ["VMBase", "VMParent"];
        _this.actionType = ACTION_MODE.SEARCH_COMPONENT;
        _this.allowDelete = false;
        _this.targetPath = 'game';
        _this.replacePath = '*';
        _this.canCollectNodes = false;
        _this.collectNodes = [];
        return _this;
    }
    Object.defineProperty(MVCompsEdit.prototype, "findTrigger", {
        get: function () {
            return false;
        },
        set: function (v) {
            this.setComponents(0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MVCompsEdit.prototype, "enableTrigger", {
        get: function () {
            return false;
        },
        set: function (v) {
            this.setComponents(1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MVCompsEdit.prototype, "disableTrigger", {
        get: function () {
            return false;
        },
        set: function (v) {
            this.setComponents(2);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MVCompsEdit.prototype, "deleteTrigger", {
        get: function () {
            return false;
        },
        set: function (v) {
            this.setComponents(3);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MVCompsEdit.prototype, "replaceTrigger", {
        get: function () {
            return false;
        },
        set: function (v) {
            this.setComponents(4);
        },
        enumerable: false,
        configurable: true
    });
    MVCompsEdit.prototype.onLoad = function () {
        //不要把脚本挂载运行时的提示
        if (!CC_EDITOR) {
            var path = this.getNodePath(this.node);
            console.error('you forget delete MVEditFinder,[path]', path);
        }
    };
    MVCompsEdit.prototype.setComponents = function (state) {
        var _this = this;
        var array = this.findList;
        var title = '搜索到当前节点下面的组件';
        switch (state) {
            case 0:
                title = '搜索到当前节点下面的组件';
                break;
            case 1:
                title = '激活以下节点的组件';
                break;
            case 2:
                title = '关闭以下节点的组件';
                break;
            case 3:
                title = '删除以下节点的组件';
                break;
            case 4:
                title = '替换以下节点的路径';
                break;
            default:
                break;
        }
        cc.log(title);
        cc.log('______________________');
        array.forEach(function (name) {
            _this.searchComponent(name, state);
        });
        cc.log('______________________');
    };
    /**
     *
     * @param className
     * @param state 0-查找节点组件 1-激活节点组件 2-关闭节点组件 3-移除节点组件
     */
    MVCompsEdit.prototype.searchComponent = function (className, state) {
        var _this = this;
        if (state === void 0) { state = 0; }
        /**收集节点清空 */
        this.collectNodes = [];
        var comps = this.node.getComponentsInChildren(className);
        if (comps == null || comps.length < 1)
            return;
        cc.log('[' + className + ']:');
        comps.forEach(function (v) {
            var ext = '';
            if (state <= 3) {
                //区分模板模式路径
                if (v.templateMode === true) {
                    ext = v.watchPathArr ? ':[Path:' + v.watchPathArr.join('|') + ']' : '';
                }
                else {
                    ext = v.watchPath ? ':[Path:' + v.watchPath + ']' : '';
                }
            }
            cc.log(_this.getNodePath(v.node) + ext);
            switch (state) {
                case 0: //寻找组件
                    if (_this.canCollectNodes) {
                        if (_this.collectNodes.indexOf(v.node) === -1) {
                            _this.collectNodes.push(v.node);
                        }
                    }
                    break;
                case 1: //激活组件
                    v.enabled = true;
                    break;
                case 2: //关闭组件
                    v.enabled = false;
                    break;
                case 3: //删除组件
                    v.node.removeComponent(v);
                    break;
                case 4: //替换指定路径
                    var targetPath = _this.targetPath;
                    var replacePath = _this.replacePath;
                    if (v.templateMode === true) {
                        for (var i = 0; i < v.watchPathArr.length; i++) {
                            var path = v.watchPathArr[i];
                            v.watchPathArr[i] = _this.replaceNodePath(path, targetPath, replacePath);
                        }
                    }
                    else {
                        v.watchPath = _this.replaceNodePath(v.watchPath, targetPath, replacePath);
                    }
                default:
                    break;
            }
        });
    };
    MVCompsEdit.prototype.replaceNodePath = function (path, search, replace) {
        var pathArr = path.split('.');
        var searchArr = search.split('.');
        var replaceArr = replace.split('.');
        var match = true;
        for (var i = 0; i < searchArr.length; i++) {
            //未匹配上
            if (pathArr[i] !== searchArr[i]) {
                match = false;
                break;
            }
        }
        //匹配成功准备替换路径
        if (match === true) {
            for (var i = 0; i < replaceArr.length; i++) {
                pathArr[i] = replaceArr[i];
            }
            cc.log(' 路径更新:', path, '>>>', pathArr.join('.'));
        }
        return pathArr.join('.');
    };
    MVCompsEdit.prototype.getNodePath = function (node) {
        var parent = node;
        var array = [];
        while (parent) {
            var p = parent.getParent();
            if (p) {
                array.push(parent.name);
                parent = p;
            }
            else {
                break;
            }
        }
        return array.reverse().join('/');
    };
    __decorate([
        property({
            type: [cc.String]
        })
    ], MVCompsEdit.prototype, "findList", void 0);
    __decorate([
        property({
            type: cc.Enum(ACTION_MODE)
        })
    ], MVCompsEdit.prototype, "actionType", void 0);
    __decorate([
        property({
            tooltip: '勾选后,会自动查找 find list 中填写的组件',
            visible: function () { return this.actionType === ACTION_MODE.SEARCH_COMPONENT; }
        })
    ], MVCompsEdit.prototype, "findTrigger", null);
    __decorate([
        property({
            tooltip: '勾选后,会批量激活 find list 中填写的组件',
            visible: function () { return this.actionType === ACTION_MODE.ENABLE_COMPONENT; }
        })
    ], MVCompsEdit.prototype, "enableTrigger", null);
    __decorate([
        property({
            tooltip: '勾选后,会批量关闭 find list 中填写的组件',
            visible: function () { return this.actionType === ACTION_MODE.ENABLE_COMPONENT; }
        })
    ], MVCompsEdit.prototype, "disableTrigger", null);
    __decorate([
        property({
            tooltip: '允许删除节点的组件,确定需要移除请勾选,防止误操作',
            visible: function () { return this.actionType === ACTION_MODE.DELETE_COMPONENT; }
        })
    ], MVCompsEdit.prototype, "allowDelete", void 0);
    __decorate([
        property({
            tooltip: '勾选后,会批量删除 find list 中填写的组件',
            displayName: '[ X DELETE X ]',
            visible: function () { return this.allowDelete && this.actionType === ACTION_MODE.DELETE_COMPONENT; }
        })
    ], MVCompsEdit.prototype, "deleteTrigger", null);
    __decorate([
        property({
            tooltip: '勾选后,会批量替换掉指定的路径',
            visible: function () { return this.actionType === ACTION_MODE.REPLACE_WATCH_PATH; }
        })
    ], MVCompsEdit.prototype, "replaceTrigger", null);
    __decorate([
        property({
            tooltip: '匹配的路径,匹配规则: 搜索开头为 game的路径',
            visible: function () { return this.actionType === ACTION_MODE.REPLACE_WATCH_PATH; }
        })
    ], MVCompsEdit.prototype, "targetPath", void 0);
    __decorate([
        property({
            tooltip: '替换的路径,将匹配到的路径替换',
            visible: function () { return this.actionType === ACTION_MODE.REPLACE_WATCH_PATH; }
        })
    ], MVCompsEdit.prototype, "replacePath", void 0);
    __decorate([
        property({
            tooltip: '是否搜集绑定VM组件的节点?',
            visible: function () { return this.actionType === ACTION_MODE.SEARCH_COMPONENT; }
        })
    ], MVCompsEdit.prototype, "canCollectNodes", void 0);
    __decorate([
        property({
            type: [cc.Node],
            readonly: true,
            tooltip: '收集到绑定了VM组件相关的节点，可以自己跳转过去',
            visible: function () { return this.canCollectNodes && this.actionType === ACTION_MODE.SEARCH_COMPONENT; }
        })
    ], MVCompsEdit.prototype, "collectNodes", void 0);
    MVCompsEdit = __decorate([
        ccclass,
        executeInEditMode,
        menu('ModelViewer/Edit-Comps (快速组件操作)')
    ], MVCompsEdit);
    return MVCompsEdit;
}(cc.Component));
exports.default = MVCompsEdit;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL212dm0vVk1Db21wc0VkaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFpRCxFQUFFLENBQUMsVUFBVSxFQUE1RCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxpQkFBaUIsdUJBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUM7QUFFckUsSUFBSyxXQUtKO0FBTEQsV0FBSyxXQUFXO0lBQ1oscUVBQWdCLENBQUE7SUFDaEIscUVBQWdCLENBQUE7SUFDaEIseUVBQWtCLENBQUE7SUFDbEIscUVBQWdCLENBQUE7QUFDcEIsQ0FBQyxFQUxJLFdBQVcsS0FBWCxXQUFXLFFBS2Y7QUFFRDs7O0dBR0c7QUFJSDtJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQXNPQztRQWxPRyxjQUFRLEdBQWEsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFLNUMsZ0JBQVUsR0FBZ0IsV0FBVyxDQUFDLGdCQUFnQixDQUFDO1FBdUN2RCxpQkFBVyxHQUFZLEtBQUssQ0FBQztRQTZCN0IsZ0JBQVUsR0FBVyxNQUFNLENBQUM7UUFNNUIsaUJBQVcsR0FBVyxHQUFHLENBQUM7UUFPMUIscUJBQWUsR0FBWSxLQUFLLENBQUM7UUFRakMsa0JBQVksR0FBYyxFQUFFLENBQUM7O0lBb0lqQyxDQUFDO0lBdk5HLHNCQUFXLG9DQUFXO2FBQXRCO1lBQ0ksT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQzthQUNELFVBQXVCLENBQVU7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixDQUFDOzs7T0FIQTtJQVNELHNCQUFXLHNDQUFhO2FBQXhCO1lBQ0ksT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQzthQUNELFVBQXlCLENBQVU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixDQUFD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Q0FBQyxDQUFDO1NBQ3JGLENBQUM7bURBQzBCO0lBTTVCO1FBSkMsUUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixPQUFPLEVBQUUsY0FBYyxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssV0FBVyxDQUFDLGtCQUFrQixDQUFBLENBQUMsQ0FBQztTQUNyRixDQUFDO29EQUN3QjtJQU8xQjtRQUpDLFFBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxnQkFBZ0I7WUFDekIsT0FBTyxFQUFFLGNBQWMsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQSxDQUFDLENBQUM7U0FDbkYsQ0FBQzt3REFDK0I7SUFRakM7UUFOQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2YsUUFBUSxFQUFFLElBQUk7WUFDZCxPQUFPLEVBQUUsMEJBQTBCO1lBQ25DLE9BQU8sRUFBRSxjQUFjLE9BQU8sSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQSxDQUFDLENBQUM7U0FDM0csQ0FBQztxREFDMkI7SUFsR1osV0FBVztRQUgvQixPQUFPO1FBQ1AsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQztPQUNuQixXQUFXLENBc08vQjtJQUFELGtCQUFDO0NBdE9ELEFBc09DLENBdE93QyxFQUFFLENBQUMsU0FBUyxHQXNPcEQ7a0JBdE9vQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUsIG1lbnUgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmVudW0gQUNUSU9OX01PREUge1xuICAgIFNFQVJDSF9DT01QT05FTlQsXG4gICAgRU5BQkxFX0NPTVBPTkVOVCxcbiAgICBSRVBMQUNFX1dBVENIX1BBVEgsXG4gICAgREVMRVRFX0NPTVBPTkVOVFxufVxuXG4vKipcbiAqIOeUqOS6juaQnOe0oueahE1WIOe7hOS7tuWIl+ihqO+8jOaMgui9veWcqOeItuiKgueCueWQju+8jFxuICog5Lya6YGN5Y6G5pCc57Si5LiL6Z2i55qE5omA5pyJTVbnu4Tku7YsIOW5tuS4lOaYvuekuuWFtuinguWvn+WAvOeahOi3r+W+hFxuICovXG5AY2NjbGFzc1xuQGV4ZWN1dGVJbkVkaXRNb2RlXG5AbWVudSgnTW9kZWxWaWV3ZXIvRWRpdC1Db21wcyAo5b+r6YCf57uE5Lu25pON5L2cKScpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNVkNvbXBzRWRpdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogW2NjLlN0cmluZ11cbiAgICB9KVxuICAgIGZpbmRMaXN0OiBzdHJpbmdbXSA9IFtcIlZNQmFzZVwiLCBcIlZNUGFyZW50XCJdO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuRW51bShBQ1RJT05fTU9ERSlcbiAgICB9KVxuICAgIGFjdGlvblR5cGU6IEFDVElPTl9NT0RFID0gQUNUSU9OX01PREUuU0VBUkNIX0NPTVBPTkVOVDtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHRvb2x0aXA6ICfli77pgInlkI4s5Lya6Ieq5Yqo5p+l5om+IGZpbmQgbGlzdCDkuK3loavlhpnnmoTnu4Tku7YnLFxuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmFjdGlvblR5cGUgPT09IEFDVElPTl9NT0RFLlNFQVJDSF9DT01QT05FTlQgfVxuICAgIH0pXG4gICAgcHVibGljIGdldCBmaW5kVHJpZ2dlcigpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGZpbmRUcmlnZ2VyKHY6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5zZXRDb21wb25lbnRzKDApO1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHRvb2x0aXA6ICfli77pgInlkI4s5Lya5om56YeP5r+A5rS7IGZpbmQgbGlzdCDkuK3loavlhpnnmoTnu4Tku7YnLFxuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmFjdGlvblR5cGUgPT09IEFDVElPTl9NT0RFLkVOQUJMRV9DT01QT05FTlQgfVxuICAgIH0pXG4gICAgcHVibGljIGdldCBlbmFibGVUcmlnZ2VyKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZW5hYmxlVHJpZ2dlcih2OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuc2V0Q29tcG9uZW50cygxKTtcbiAgICB9XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0b29sdGlwOiAn5Yu+6YCJ5ZCOLOS8muaJuemHj+WFs+mXrSBmaW5kIGxpc3Qg5Lit5aGr5YaZ55qE57uE5Lu2JyxcbiAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5hY3Rpb25UeXBlID09PSBBQ1RJT05fTU9ERS5FTkFCTEVfQ09NUE9ORU5UIH1cbiAgICB9KVxuICAgIHB1YmxpYyBnZXQgZGlzYWJsZVRyaWdnZXIoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBkaXNhYmxlVHJpZ2dlcih2OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuc2V0Q29tcG9uZW50cygyKTtcbiAgICB9XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0b29sdGlwOiAn5YWB6K645Yig6Zmk6IqC54K555qE57uE5Lu2LOehruWumumcgOimgeenu+mZpOivt+WLvumAiSzpmLLmraLor6/mk43kvZwnLFxuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmFjdGlvblR5cGUgPT09IEFDVElPTl9NT0RFLkRFTEVURV9DT01QT05FTlQgfVxuICAgIH0pXG4gICAgYWxsb3dEZWxldGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHRvb2x0aXA6ICfli77pgInlkI4s5Lya5om56YeP5Yig6ZmkIGZpbmQgbGlzdCDkuK3loavlhpnnmoTnu4Tku7YnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJ1sgWCBERUxFVEUgWCBdJyxcbiAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5hbGxvd0RlbGV0ZSAmJiB0aGlzLmFjdGlvblR5cGUgPT09IEFDVElPTl9NT0RFLkRFTEVURV9DT01QT05FTlQgfVxuICAgIH0pXG4gICAgcHVibGljIGdldCBkZWxldGVUcmlnZ2VyKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZGVsZXRlVHJpZ2dlcih2OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuc2V0Q29tcG9uZW50cygzKTtcbiAgICB9XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0b29sdGlwOiAn5Yu+6YCJ5ZCOLOS8muaJuemHj+abv+aNouaOieaMh+WumueahOi3r+W+hCcsXG4gICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuYWN0aW9uVHlwZSA9PT0gQUNUSU9OX01PREUuUkVQTEFDRV9XQVRDSF9QQVRIIH1cbiAgICB9KVxuICAgIHB1YmxpYyBnZXQgcmVwbGFjZVRyaWdnZXIoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcHVibGljIHNldCByZXBsYWNlVHJpZ2dlcih2OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuc2V0Q29tcG9uZW50cyg0KTtcbiAgICB9XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0b29sdGlwOiAn5Yy56YWN55qE6Lev5b6ELOWMuemFjeinhOWImTog5pCc57Si5byA5aS05Li6IGdhbWXnmoTot6/lvoQnLFxuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmFjdGlvblR5cGUgPT09IEFDVElPTl9NT0RFLlJFUExBQ0VfV0FUQ0hfUEFUSCB9XG4gICAgfSlcbiAgICB0YXJnZXRQYXRoOiBzdHJpbmcgPSAnZ2FtZSc7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0b29sdGlwOiAn5pu/5o2i55qE6Lev5b6ELOWwhuWMuemFjeWIsOeahOi3r+W+hOabv+aNoicsXG4gICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuYWN0aW9uVHlwZSA9PT0gQUNUSU9OX01PREUuUkVQTEFDRV9XQVRDSF9QQVRIIH1cbiAgICB9KVxuICAgIHJlcGxhY2VQYXRoOiBzdHJpbmcgPSAnKic7XG5cblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHRvb2x0aXA6ICfmmK/lkKbmkJzpm4bnu5HlrppWTee7hOS7tueahOiKgueCuT8nLFxuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmFjdGlvblR5cGUgPT09IEFDVElPTl9NT0RFLlNFQVJDSF9DT01QT05FTlQgfVxuICAgIH0pXG4gICAgY2FuQ29sbGVjdE5vZGVzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBbY2MuTm9kZV0sXG4gICAgICAgIHJlYWRvbmx5OiB0cnVlLFxuICAgICAgICB0b29sdGlwOiAn5pS26ZuG5Yiw57uR5a6a5LqGVk3nu4Tku7bnm7jlhbPnmoToioLngrnvvIzlj6/ku6Xoh6rlt7Hot7Povazov4fljrsnLFxuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNhbkNvbGxlY3ROb2RlcyAmJiB0aGlzLmFjdGlvblR5cGUgPT09IEFDVElPTl9NT0RFLlNFQVJDSF9DT01QT05FTlQgfVxuICAgIH0pXG4gICAgY29sbGVjdE5vZGVzOiBjYy5Ob2RlW10gPSBbXTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy/kuI3opoHmiorohJrmnKzmjILovb3ov5DooYzml7bnmoTmj5DnpLpcbiAgICAgICAgaWYgKCFDQ19FRElUT1IpIHtcbiAgICAgICAgICAgIGxldCBwYXRoID0gdGhpcy5nZXROb2RlUGF0aCh0aGlzLm5vZGUpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcigneW91IGZvcmdldCBkZWxldGUgTVZFZGl0RmluZGVyLFtwYXRoXScsIHBhdGgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q29tcG9uZW50cyhzdGF0ZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBhcnJheSA9IHRoaXMuZmluZExpc3Q7XG4gICAgICAgIGxldCB0aXRsZSA9ICfmkJzntKLliLDlvZPliY3oioLngrnkuIvpnaLnmoTnu4Tku7YnO1xuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHRpdGxlID0gJ+aQnOe0ouWIsOW9k+WJjeiKgueCueS4i+mdoueahOe7hOS7tic7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOiB0aXRsZSA9ICfmv4DmtLvku6XkuIvoioLngrnnmoTnu4Tku7YnOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjogdGl0bGUgPSAn5YWz6Zet5Lul5LiL6IqC54K555qE57uE5Lu2JzsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6IHRpdGxlID0gJ+WIoOmZpOS7peS4i+iKgueCueeahOe7hOS7tic7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OiB0aXRsZSA9ICfmm7/mjaLku6XkuIvoioLngrnnmoTot6/lvoQnOyBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYy5sb2codGl0bGUpXG4gICAgICAgIGNjLmxvZygnX19fX19fX19fX19fX19fX19fX19fXycpXG5cbiAgICAgICAgYXJyYXkuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQ29tcG9uZW50KG5hbWUsIHN0YXRlKVxuICAgICAgICB9KVxuICAgICAgICBjYy5sb2coJ19fX19fX19fX19fX19fX19fX19fX18nKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBjbGFzc05hbWUgXG4gICAgICogQHBhcmFtIHN0YXRlIDAt5p+l5om+6IqC54K557uE5Lu2IDEt5r+A5rS76IqC54K557uE5Lu2IDIt5YWz6Zet6IqC54K557uE5Lu2IDMt56e76Zmk6IqC54K557uE5Lu2XG4gICAgICovXG4gICAgc2VhcmNoQ29tcG9uZW50KGNsYXNzTmFtZTogc3RyaW5nLCBzdGF0ZTogbnVtYmVyID0gMCkge1xuICAgICAgICAvKirmlLbpm4boioLngrnmuIXnqbogKi9cbiAgICAgICAgdGhpcy5jb2xsZWN0Tm9kZXMgPSBbXTtcblxuICAgICAgICBsZXQgY29tcHMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oY2xhc3NOYW1lKTtcbiAgICAgICAgaWYgKGNvbXBzID09IG51bGwgfHwgY29tcHMubGVuZ3RoIDwgMSkgcmV0dXJuO1xuICAgICAgICBjYy5sb2coJ1snICsgY2xhc3NOYW1lICsgJ106Jyk7XG4gICAgICAgIGNvbXBzLmZvckVhY2godiA9PiB7XG4gICAgICAgICAgICBsZXQgZXh0ID0gJyc7XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgLy/ljLrliIbmqKHmnb/mqKHlvI/ot6/lvoRcbiAgICAgICAgICAgICAgICBpZiAodi50ZW1wbGF0ZU1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZXh0ID0gdi53YXRjaFBhdGhBcnIgPyAnOltQYXRoOicgKyB2LndhdGNoUGF0aEFyci5qb2luKCd8JykgKyAnXScgOiAnJ1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV4dCA9IHYud2F0Y2hQYXRoID8gJzpbUGF0aDonICsgdi53YXRjaFBhdGggKyAnXScgOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2MubG9nKHRoaXMuZ2V0Tm9kZVBhdGgodi5ub2RlKSArIGV4dCk7XG4gICAgICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOi8v5a+75om+57uE5Lu2XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbkNvbGxlY3ROb2Rlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29sbGVjdE5vZGVzLmluZGV4T2Yodi5ub2RlKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbGxlY3ROb2Rlcy5wdXNoKHYubm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOi8v5r+A5rS757uE5Lu2XG4gICAgICAgICAgICAgICAgICAgIHYuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjovL+WFs+mXree7hOS7tlxuICAgICAgICAgICAgICAgICAgICB2LmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOi8v5Yig6Zmk57uE5Lu2XG4gICAgICAgICAgICAgICAgICAgIHYubm9kZS5yZW1vdmVDb21wb25lbnQodik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDovL+abv+aNouaMh+Wumui3r+W+hFxuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXRQYXRoID0gdGhpcy50YXJnZXRQYXRoO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVwbGFjZVBhdGggPSB0aGlzLnJlcGxhY2VQYXRoO1xuICAgICAgICAgICAgICAgICAgICBpZiAodi50ZW1wbGF0ZU1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdi53YXRjaFBhdGhBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXRoID0gdi53YXRjaFBhdGhBcnJbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi53YXRjaFBhdGhBcnJbaV0gPSB0aGlzLnJlcGxhY2VOb2RlUGF0aChwYXRoLCB0YXJnZXRQYXRoLCByZXBsYWNlUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2LndhdGNoUGF0aCA9IHRoaXMucmVwbGFjZU5vZGVQYXRoKHYud2F0Y2hQYXRoLCB0YXJnZXRQYXRoLCByZXBsYWNlUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlcGxhY2VOb2RlUGF0aChwYXRoOiBzdHJpbmcsIHNlYXJjaDogc3RyaW5nLCByZXBsYWNlOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHBhdGhBcnIgPSBwYXRoLnNwbGl0KCcuJyk7XG4gICAgICAgIGxldCBzZWFyY2hBcnIgPSBzZWFyY2guc3BsaXQoJy4nKTtcbiAgICAgICAgbGV0IHJlcGxhY2VBcnIgPSByZXBsYWNlLnNwbGl0KCcuJylcblxuICAgICAgICBsZXQgbWF0Y2ggPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlYXJjaEFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy/mnKrljLnphY3kuIpcbiAgICAgICAgICAgIGlmIChwYXRoQXJyW2ldICE9PSBzZWFyY2hBcnJbaV0pIHtcbiAgICAgICAgICAgICAgICBtYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy/ljLnphY3miJDlip/lh4blpIfmm7/mjaLot6/lvoRcbiAgICAgICAgaWYgKG1hdGNoID09PSB0cnVlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcGxhY2VBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwYXRoQXJyW2ldID0gcmVwbGFjZUFycltpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLmxvZygnIOi3r+W+hOabtOaWsDonLCBwYXRoLCAnPj4+JywgcGF0aEFyci5qb2luKCcuJykpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGhBcnIuam9pbignLicpO1xuICAgIH1cblxuICAgIGdldE5vZGVQYXRoKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgbGV0IHBhcmVudCA9IG5vZGU7XG4gICAgICAgIGxldCBhcnJheSA9IFtdO1xuICAgICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgICAgICBsZXQgcCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcbiAgICAgICAgICAgIGlmIChwKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChwYXJlbnQubmFtZSk7XG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5LnJldmVyc2UoKS5qb2luKCcvJyk7XG4gICAgfVxufVxuIl19