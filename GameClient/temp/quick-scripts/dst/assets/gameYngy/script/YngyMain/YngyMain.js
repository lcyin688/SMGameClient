
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/gameYngy/script/YngyMain/YngyMain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9086f3ZDJJLAaKqW6opZfPn', 'YngyMain');
// gameYngy/script/YngyMain/YngyMain.ts

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
var UIVControlBase_1 = require("./../../../c2f-framework/gui/layer/UIVControlBase");
var C2FEnum_1 = require("./../../../c2f-framework/define/C2FEnum");
var UIParam_1 = require("../../../Script/game/UIParam");
var GameConsts_1 = require("../../../Script/game/GameConsts");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var YngyMain = /** @class */ (function (_super) {
    __extends(YngyMain, _super);
    function YngyMain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_YngyMain';
        _this.model = undefined;
        _this.view = undefined;
        return _this;
    }
    YngyMain.prototype.onViewOpen = function (param) {
    };
    YngyMain.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.on(C2FEnum_1.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    };
    YngyMain.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.off(C2FEnum_1.C2FEnum.UIEvent.ButtonClick);
    };
    YngyMain.prototype.onButtonClick = function (eventType, component) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (component.name) {
                    case this.view.btnMenuButton.name:
                        this.CC_onClickbtnMenu();
                        break;
                    default:
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    YngyMain.prototype.CC_onClickbtnMenu = function () {
        this.closeView();
    };
    YngyMain.prototype.start = function () {
        this.loadLevel(1);
    };
    /**
 * 加载关卡
 * @param lv
 */
    YngyMain.prototype.loadLevel = function (lv) {
        this.model.initDataByLv(lv, this.clickCard.bind(this));
    };
    YngyMain.prototype.clickCard = function (data, nodeItem) {
        if (data.hideState) {
            return;
        }
        if (data.state == UIParam_1.UIPa.YngyItemArgsStates.Alive) {
            data.state = UIParam_1.UIPa.YngyItemArgsStates.Dead;
            // 倒序插入到选择数组
            var index = 0;
            for (var i = 0; i < this.model.selectedPool.length; i++) {
                if (this.model.selectedPool[i].typ == data.typ) {
                    index = i;
                    break;
                }
                index = i + 1;
            }
            this.model.selectedPool.splice(index, 0, data);
            // 移入动效
            var pad = GameConsts_1.GameConsts.YngyConst.ItemWidthHeight;
            var targetPos = new cc.Vec3(index * pad + pad / 2, 0);
            // nodeItem.parent = this.view.selectedNode;
            // cc.tween(nodeItem).stop();
            // cc.tween(nodeItem).delay(0.05).to(0.35, {
            //     position: parentTransform.convertToNodeSpaceAR(this.selectedNode.getComponent(UITransform).convertToWorldSpaceAR(targetPos))
            // }, {
            //     onComplete: () => {
            //         // 地图数据删除
            //         for (let i = 0; i < this.levelData[layer].length; i += 1) {
            //             if (this.levelData[layer][i][0] == nodeInfo.x && this.levelData[layer][i][1] == nodeInfo.y) {
            //                 this.levelData[layer].splice(i, 1);
            //                 break;
            //             }
            //         }
            //         // 已选择数据三消
            //         let cntMap: { [key: number]: number } = {};
            //         for (let i = 0; i < this.selectedPool.length; i += 1) {
            //             if (!cntMap[this.selectedPool[i][1]]) {
            //                 cntMap[this.selectedPool[i][1]] = 1;
            //             } else {
            //                 cntMap[this.selectedPool[i][1]] += 1;
            //             }
            //             if (cntMap[this.selectedPool[i][1]] == 3) {
            //                 // 向前删除3个
            //                 for (let j = 0; j < 3; j += 1) {
            //                     // 动效
            //                     tween(this.selectedPool[i - 3 + 1][0].node).delay(0.1).to(0.3, {
            //                         scale: new Vec3(0, 0, 1)
            //                     }, {
            //                         onComplete: (target) => {
            //                             let node = target as Node;
            //                             if (j == 0) {
            //                                 // 后方节点前移
            //                                 for (let j = i + 1; j < this.selectedPool.length; j += 1) {
            //                                     let forwardNodeInfo = this.selectedPool[j][0];
            //                                     targetPos = new Vec3(
            //                                         j * pad - width / 2 + pad / 2,
            //                                         0,
            //                                         forwardNodeInfo.node.position.z
            //                                     );
            //                                     tween(forwardNodeInfo.node).stop();
            //                                     tween(forwardNodeInfo.node).to(0.3, {
            //                                         position: parentTransform.convertToNodeSpaceAR(this.selectedNode.getComponent(UITransform).convertToWorldSpaceAR(targetPos))
            //                                     }).start();
            //                                 }
            //                             }
            //                         }
            //                     }).start();
            //                     // 数据删除
            //                     this.selectedPool.splice(i - 3 + 1, 1);
            //                 }
            //                 i -= 3;
            //                 //
            //             }
            //         }
            //         // 刷新遮挡
            //         this.cardNodes.forEach(nodeInfo => nodeInfo.refreshCoverState(0.5, this.levelData));
            //         // 判定胜负
            //         if (this.selectedPool.length > col) {
            //             log("lose");
            //             this.restartNode.active = true;
            //             this.restartNode.children[0].active = false;
            //             this.restartNode.children[1].active = true;
            //         }
            //         if (this.levelData.every(v => v.length == 0)) {
            //             log("win");
            //             this.restartNode.active = true;
            //             this.restartNode.children[0].active = true;
            //             this.restartNode.children[1].active = false;
            //         }
            //     }
            // }).start();
            // 后退动效
            // for (let i = index + 1; i < this.selectedPool.length; i += 1) {
            //     let forwardNodeInfo = this.selectedPool[i][0];
            //     targetPos = new cc.Vec3(
            //         i * pad - width / 2 + pad / 2,
            //         0,
            //         forwardNodeInfo.node.position.z
            //     );
            //     tween(forwardNodeInfo.node).stop();
            //     tween(forwardNodeInfo.node).to(0.3, {
            //         position: parentTransform.convertToNodeSpaceAR(this.selectedNode.getComponent(UITransform).convertToWorldSpaceAR(targetPos))
            //     }).start();
            // }
        }
    };
    YngyMain.prototype.clickRestart = function () {
        // this.restartNode.active = false;
        // this.cardNodes = [];
        // this.selectedPool = [];
        // this.levelData = [];
        // this.levelNode.removeAllChildren();
        // this.selectedNode.removeAllChildren();
        this.loadLevel(1);
    };
    YngyMain = __decorate([
        ccclass
    ], YngyMain);
    return YngyMain;
}(UIVControlBase_1.UIVControlBase));
exports.default = YngyMain;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nYW1lWW5neS9zY3JpcHQvWW5neU1haW4vWW5neU1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0ZBQW1GO0FBQ25GLG1FQUFrRTtBQUlsRSx3REFBb0Q7QUFDcEQsOERBQTZEO0FBRXZELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXNDLDRCQUFjO0lBQXBEO1FBQUEscUVBOEtDO1FBN0tHLGdCQUFnQjtRQUNULGdCQUFVLEdBQUcsWUFBWSxDQUFDO1FBRTFCLFdBQUssR0FBa0IsU0FBUyxDQUFDO1FBQ2pDLFVBQUksR0FBaUIsU0FBUyxDQUFDOztJQXlLMUMsQ0FBQztJQXZLYSw2QkFBVSxHQUFwQixVQUFxQixLQUFVO0lBQy9CLENBQUM7SUFHUywyQkFBUSxHQUFsQjtRQUNJLElBQUksaUJBQU0sUUFBUSxFQUFFO1lBQ2hCLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRVMsNEJBQVMsR0FBbkI7UUFDSSxJQUFJLGlCQUFNLFNBQVMsRUFBRTtZQUNqQixpQkFBTSxTQUFTLFdBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVhLGdDQUFhLEdBQTNCLFVBQTRCLFNBQWlCLEVBQUUsU0FBb0I7OztnQkFDL0QsUUFBUSxTQUFTLENBQUMsSUFBSSxFQUFFO29CQUVwQixLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMs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Q3JCLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLCtGQUErRjtZQUMvRixrQkFBa0I7WUFDbEIsZ0RBQWdEO1lBQ2hELDJCQUEyQjtZQUMzQiw4Q0FBOEM7WUFDOUMsMkRBQTJEO1lBQzNELDBEQUEwRDtZQUMxRCxZQUFZO1lBQ1osMERBQTBEO1lBQzFELDBCQUEwQjtZQUMxQiw4Q0FBOEM7WUFDOUMsMERBQTBEO1lBQzFELDJEQUEyRDtZQUMzRCxZQUFZO1lBQ1osUUFBUTtZQUNSLGNBQWM7WUFDZCxPQUFPO1lBQ1Asa0VBQWtFO1lBQ2xFLHFEQUFxRDtZQUNyRCwrQkFBK0I7WUFDL0IseUNBQXlDO1lBQ3pDLGFBQWE7WUFDYiwwQ0FBMEM7WUFDMUMsU0FBUztZQUNULDBDQUEwQztZQUMxQyw0Q0FBNEM7WUFDNUMsdUlBQXVJO1lBQ3ZJLGtCQUFrQjtZQUNsQixJQUFJO1NBQ1A7SUFDTCxDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUNJLG1DQUFtQztRQUNuQyx1QkFBdUI7UUFDdkIsMEJBQTBCO1FBQzFCLHVCQUF1QjtRQUN2QixzQ0FBc0M7UUFDdEMseUNBQXlDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQXpLZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQThLNUI7SUFBRCxlQUFDO0NBOUtELEFBOEtDLENBOUtxQywrQkFBYyxHQThLbkQ7a0JBOUtvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUlWQ29udHJvbEJhc2UgfSBmcm9tICcuLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZ3VpL2xheWVyL1VJVkNvbnRyb2xCYXNlJztcbmltcG9ydCB7IEMyRkVudW0gfSBmcm9tICcuLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZGVmaW5lL0MyRkVudW0nO1xuaW1wb3J0IFluZ3lNYWluTW9kZWwgZnJvbSAnLi9Zbmd5TWFpbk1vZGVsJztcbmltcG9ydCBZbmd5TWFpblZpZXcgZnJvbSAnLi9Zbmd5TWFpblZpZXcnO1xuaW1wb3J0IHsgWW5neUNmZyB9IGZyb20gJy4uL1luZ3lDZmcnO1xuaW1wb3J0IHsgVUlQYSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdC9nYW1lL1VJUGFyYW0nO1xuaW1wb3J0IHsgR2FtZUNvbnN0cyB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdC9nYW1lL0dhbWVDb25zdHMnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFluZ3lNYWluIGV4dGVuZHMgVUlWQ29udHJvbEJhc2Uge1xuICAgIC8qKiDpooTliLblkI0g57uZ5a6e5L6L6LCD55SoICovXG4gICAgcHVibGljIHByZWZhYk5hbWUgPSAnRl9Zbmd5TWFpbic7XG5cbiAgICBwdWJsaWMgbW9kZWw6IFluZ3lNYWluTW9kZWwgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIHZpZXc6IFluZ3lNYWluVmlldyA9IHVuZGVmaW5lZDtcblxuICAgIHByb3RlY3RlZCBvblZpZXdPcGVuKHBhcmFtOiBhbnkpIHtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHN1cGVyLm9uRW5hYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub24oQzJGRW51bS5VSUV2ZW50LkJ1dHRvbkNsaWNrLCB0aGlzLm9uQnV0dG9uQ2xpY2ssIHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKTogdm9pZCB7XG4gICAgICAgIGlmIChzdXBlci5vbkRpc2FibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2ZmKEMyRkVudW0uVUlFdmVudC5CdXR0b25DbGljayk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBvbkJ1dHRvbkNsaWNrKGV2ZW50VHlwZTogc3RyaW5nLCBjb21wb25lbnQ6IGNjLkJ1dHRvbikge1xuICAgICAgICBzd2l0Y2ggKGNvbXBvbmVudC5uYW1lKSB7XG5cbiAgICAgICAgICAgIGNhc2UgdGhpcy52aWV3LmJ0bk1lbnVCdXR0b24ubmFtZTpcbiAgICAgICAgICAgICAgICB0aGlzLkNDX29uQ2xpY2tidG5NZW51KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIENDX29uQ2xpY2tidG5NZW51KCkge1xuICAgICAgICB0aGlzLmNsb3NlVmlldygpO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5sb2FkTGV2ZWwoMSk7XG4gICAgfVxuICAgIC8qKlxuICog5Yqg6L295YWz5Y2hXG4gKiBAcGFyYW0gbHYgXG4gKi9cbiAgICBsb2FkTGV2ZWwobHY6IG51bWJlcikge1xuICAgICAgICB0aGlzLm1vZGVsLmluaXREYXRhQnlMdihsdiwgdGhpcy5jbGlja0NhcmQuYmluZCh0aGlzKSlcblxuICAgIH1cblxuICAgIHByaXZhdGUgY2xpY2tDYXJkKGRhdGE6IFVJUGEuWW5neUl0ZW1BcmdzLCBub2RlSXRlbTogY2MuTm9kZSkge1xuICAgICAgICBpZiAoZGF0YS5oaWRlU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5zdGF0ZSA9PSBVSVBhLlluZ3lJdGVtQXJnc1N0YXRlcy5BbGl2ZSkge1xuICAgICAgICAgICAgZGF0YS5zdGF0ZSA9IFVJUGEuWW5neUl0ZW1BcmdzU3RhdGVzLkRlYWQ7XG4gICAgICAgICAgICAvLyDlgJLluo/mj5LlhaXliLDpgInmi6nmlbDnu4RcbiAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubW9kZWwuc2VsZWN0ZWRQb29sLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW9kZWwuc2VsZWN0ZWRQb29sW2ldLnR5cCA9PSBkYXRhLnR5cCkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmRleCA9IGkgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tb2RlbC5zZWxlY3RlZFBvb2wuc3BsaWNlKGluZGV4LCAwLCBkYXRhKTtcbiAgICAgICAgICAgIC8vIOenu+WFpeWKqOaViFxuICAgICAgICAgICAgbGV0IHBhZCA9IEdhbWVDb25zdHMuWW5neUNvbnN0Lkl0ZW1XaWR0aEhlaWdodFxuICAgICAgICAgICAgbGV0IHRhcmdldFBvcyA9IG5ldyBjYy5WZWMzKFxuICAgICAgICAgICAgICAgIGluZGV4ICogcGFkICsgcGFkIC8gMixcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgLy8gbm9kZUl0ZW0ucGFyZW50ID0gdGhpcy52aWV3LnNlbGVjdGVkTm9kZTtcbiAgICAgICAgICAgIC8vIGNjLnR3ZWVuKG5vZGVJdGVtKS5zdG9wKCk7XG4gICAgICAgICAgICAvLyBjYy50d2Vlbihub2RlSXRlbSkuZGVsYXkoMC4wNSkudG8oMC4zNSwge1xuICAgICAgICAgICAgLy8gICAgIHBvc2l0aW9uOiBwYXJlbnRUcmFuc2Zvcm0uY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5zZWxlY3RlZE5vZGUuZ2V0Q29tcG9uZW50KFVJVHJhbnNmb3JtKS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGFyZ2V0UG9zKSlcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIOWcsOWbvuaVsOaNruWIoOmZpFxuICAgICAgICAgICAgLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGV2ZWxEYXRhW2xheWVyXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMubGV2ZWxEYXRhW2xheWVyXVtpXVswXSA9PSBub2RlSW5mby54ICYmIHRoaXMubGV2ZWxEYXRhW2xheWVyXVtpXVsxXSA9PSBub2RlSW5mby55KSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbERhdGFbbGF5ZXJdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgICAvLyDlt7LpgInmi6nmlbDmja7kuInmtohcbiAgICAgICAgICAgIC8vICAgICAgICAgbGV0IGNudE1hcDogeyBba2V5OiBudW1iZXJdOiBudW1iZXIgfSA9IHt9O1xuICAgICAgICAgICAgLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VsZWN0ZWRQb29sLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpZiAoIWNudE1hcFt0aGlzLnNlbGVjdGVkUG9vbFtpXVsxXV0pIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjbnRNYXBbdGhpcy5zZWxlY3RlZFBvb2xbaV1bMV1dID0gMTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgY250TWFwW3RoaXMuc2VsZWN0ZWRQb29sW2ldWzFdXSArPSAxO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGNudE1hcFt0aGlzLnNlbGVjdGVkUG9vbFtpXVsxXV0gPT0gMykge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIOWQkeWJjeWIoOmZpDPkuKpcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGogKz0gMSkge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyDliqjmlYhcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdHdlZW4odGhpcy5zZWxlY3RlZFBvb2xbaSAtIDMgKyAxXVswXS5ub2RlKS5kZWxheSgwLjEpLnRvKDAuMywge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IG5ldyBWZWMzKDAsIDAsIDEpXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6ICh0YXJnZXQpID0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRhcmdldCBhcyBOb2RlO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID09IDApIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5ZCO5pa56IqC54K55YmN56e7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IHRoaXMuc2VsZWN0ZWRQb29sLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9yd2FyZE5vZGVJbmZvID0gdGhpcy5zZWxlY3RlZFBvb2xbal1bMF07XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRQb3MgPSBuZXcgVmVjMyhcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqICogcGFkIC0gd2lkdGggLyAyICsgcGFkIC8gMixcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcndhcmROb2RlSW5mby5ub2RlLnBvc2l0aW9uLnpcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0d2Vlbihmb3J3YXJkTm9kZUluZm8ubm9kZSkuc3RvcCgpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4oZm9yd2FyZE5vZGVJbmZvLm5vZGUpLnRvKDAuMywge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwYXJlbnRUcmFuc2Zvcm0uY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5zZWxlY3RlZE5vZGUuZ2V0Q29tcG9uZW50KFVJVHJhbnNmb3JtKS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGFyZ2V0UG9zKSlcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIOaVsOaNruWIoOmZpFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkUG9vbC5zcGxpY2UoaSAtIDMgKyAxLCAxKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgaSAtPSAzO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgLy8g5Yi35paw6YGu5oyhXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuY2FyZE5vZGVzLmZvckVhY2gobm9kZUluZm8gPT4gbm9kZUluZm8ucmVmcmVzaENvdmVyU3RhdGUoMC41LCB0aGlzLmxldmVsRGF0YSkpO1xuICAgICAgICAgICAgLy8gICAgICAgICAvLyDliKTlrprog5zotJ9cbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRQb29sLmxlbmd0aCA+IGNvbCkge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbG9nKFwibG9zZVwiKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMucmVzdGFydE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMucmVzdGFydE5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnJlc3RhcnROb2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKHRoaXMubGV2ZWxEYXRhLmV2ZXJ5KHYgPT4gdi5sZW5ndGggPT0gMCkpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxvZyhcIndpblwiKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMucmVzdGFydE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMucmVzdGFydE5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMucmVzdGFydE5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9KS5zdGFydCgpO1xuICAgICAgICAgICAgLy8g5ZCO6YCA5Yqo5pWIXG4gICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gaW5kZXggKyAxOyBpIDwgdGhpcy5zZWxlY3RlZFBvb2wubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIC8vICAgICBsZXQgZm9yd2FyZE5vZGVJbmZvID0gdGhpcy5zZWxlY3RlZFBvb2xbaV1bMF07XG4gICAgICAgICAgICAvLyAgICAgdGFyZ2V0UG9zID0gbmV3IGNjLlZlYzMoXG4gICAgICAgICAgICAvLyAgICAgICAgIGkgKiBwYWQgLSB3aWR0aCAvIDIgKyBwYWQgLyAyLFxuICAgICAgICAgICAgLy8gICAgICAgICAwLFxuICAgICAgICAgICAgLy8gICAgICAgICBmb3J3YXJkTm9kZUluZm8ubm9kZS5wb3NpdGlvbi56XG4gICAgICAgICAgICAvLyAgICAgKTtcbiAgICAgICAgICAgIC8vICAgICB0d2Vlbihmb3J3YXJkTm9kZUluZm8ubm9kZSkuc3RvcCgpO1xuICAgICAgICAgICAgLy8gICAgIHR3ZWVuKGZvcndhcmROb2RlSW5mby5ub2RlKS50bygwLjMsIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgcG9zaXRpb246IHBhcmVudFRyYW5zZm9ybS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0aGlzLnNlbGVjdGVkTm9kZS5nZXRDb21wb25lbnQoVUlUcmFuc2Zvcm0pLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0YXJnZXRQb3MpKVxuICAgICAgICAgICAgLy8gICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGlja1Jlc3RhcnQoKSB7XG4gICAgICAgIC8vIHRoaXMucmVzdGFydE5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMuY2FyZE5vZGVzID0gW107XG4gICAgICAgIC8vIHRoaXMuc2VsZWN0ZWRQb29sID0gW107XG4gICAgICAgIC8vIHRoaXMubGV2ZWxEYXRhID0gW107XG4gICAgICAgIC8vIHRoaXMubGV2ZWxOb2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIC8vIHRoaXMuc2VsZWN0ZWROb2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMubG9hZExldmVsKDEpO1xuICAgIH1cblxuXG5cblxufSJdfQ==