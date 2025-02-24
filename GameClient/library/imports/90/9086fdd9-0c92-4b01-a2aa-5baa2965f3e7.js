"use strict";
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