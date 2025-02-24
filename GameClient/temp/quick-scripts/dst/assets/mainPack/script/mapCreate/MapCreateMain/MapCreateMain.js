
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/mapCreate/MapCreateMain/MapCreateMain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '281d6Rbe5NMIY1hV835K1zw', 'MapCreateMain');
// mainPack/script/mapCreate/MapCreateMain/MapCreateMain.ts

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
var UIVControlBase_1 = require("./../../../../c2f-framework/gui/layer/UIVControlBase");
var C2FEnum_1 = require("./../../../../c2f-framework/define/C2FEnum");
var MapCreatItem_1 = require("../MapCreatItem/MapCreatItem");
var GameConsts_1 = require("../../../../Script/game/GameConsts");
var UIParam_1 = require("../../../../Script/game/UIParam");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MapCreateMain = /** @class */ (function (_super) {
    __extends(MapCreateMain, _super);
    function MapCreateMain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_MapCreateMain';
        _this.model = undefined;
        _this.view = undefined;
        return _this;
    }
    MapCreateMain.prototype.onLoad = function () {
        this.view.tabGroupTabPage.quickSetTabHnadler(this, "CC_onTabPageClick");
        // 添加鼠标按下事件监听器
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, this.onMouseUp, this);
    };
    MapCreateMain.prototype.onViewOpen = function (param) {
        this.getCurData();
        this.loadTabItemFirst(this.startGame.bind(this));
    };
    MapCreateMain.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.on(C2FEnum_1.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    };
    MapCreateMain.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.off(C2FEnum_1.C2FEnum.UIEvent.ButtonClick);
    };
    MapCreateMain.prototype.onButtonClick = function (eventType, component) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (component.name) {
                    case this.view.btnSaveButton.name:
                        this.CC_onClickbtnSave();
                        break;
                    case this.view.btnNewButton.name:
                        this.CC_onClickbtnNew();
                        break;
                    default:
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    MapCreateMain.prototype.CC_onClickbtnSave = function () {
        var content = this.getStarAllData(this.model.curLv);
        var fileName = "guanQiaTest.txt";
        this.downloadTxtFile(content, fileName);
    };
    MapCreateMain.prototype.downloadTxtFile = function (content, fileName) {
        // 创建一个新的 Blob 对象，传入文件的内容和 MIME 类型
        var blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        // 创建一个隐藏的可下载链接
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.style.display = 'none';
        // 将链接添加到页面中并触发点击事件
        document.body.appendChild(link);
        link.click();
        // 清理
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    };
    //读取配置中的元素
    MapCreateMain.prototype.getStarAllData = function (index) {
        var str = "";
        var arr = this.model.starDataArr;
        str += "[" + index + "]: [\n";
        for (var col = 0; col < 10; col++) {
            str += "[";
            for (var row = 0; row < 10; row++) {
                str += arr[col][row] + ",";
            }
            if (col < 9) {
                str += "],\n";
            }
            else {
                str += "]\n";
            }
        }
        str += "],\n";
        return str;
    };
    MapCreateMain.prototype.CC_onClickbtnNew = function () {
        this.getCurData();
        this.startGame();
    };
    MapCreateMain.prototype.CC_onTabPageClick = function (subName) {
        if (this.model.curSelect == subName) {
            return;
        }
        this.model.curSelect = subName;
    };
    MapCreateMain.prototype.getCurData = function () {
        this.model.curLv = this.getCurLv();
        this.model.initData();
    };
    MapCreateMain.prototype.getCurLv = function () {
        var lv = 0;
        if (this.view.editBoxEditBox.string && this.view.editBoxEditBox.string != "") {
            lv = parseInt(this.view.editBoxEditBox.string);
        }
        return lv;
    };
    MapCreateMain.prototype.loadTabItemFirst = function (cb) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, c2f.res.loadOne(GameConsts_1.GameConsts.CmmPrefab.mapCreatItem, cc.Prefab).then(function (resItem) {
                            _this.model.blockItem = resItem;
                            if (cb) {
                                cb();
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapCreateMain.prototype.startGame = function () {
        if (!this.model.starItemMap) {
            this.initItemArr();
        }
        for (var row = 0; row < 10; row++) {
            for (var column = 0; column < 10; column++) {
                var initPosition = this.model.getStarPosition(row, column);
                var item = this.model.starItemMap.get(row).get(column);
                var nodeItem = item.node;
                nodeItem.name = "block" + column + "_" + row;
                nodeItem.setPosition(initPosition);
                var typ = this.model.starDataArr[row][column];
                var itemData = UIParam_1.UIPa.StarItemData[typ];
                var score = 0;
                var url = "";
                if (itemData) {
                    score = itemData.score;
                    url = itemData.url;
                }
                var dataItem = {
                    typ: typ,
                    score: score,
                    url: url,
                    column: column,
                    row: row,
                    cbFun: this.clickItemCb.bind(this),
                };
                item.setInit(dataItem);
            }
        }
    };
    MapCreateMain.prototype.initItemArr = function () {
        this.model.starItemMap = new Map();
        for (var row = 0; row < 10; row++) {
            var mapItem = new Map();
            for (var column = 0; column < 10; column++) {
                var nodeItem = c2f.utils.view.instantiateMVCPrefab(this.model.blockItem, this.view.content);
                this.view.content.addChild(nodeItem);
                var blockItem = nodeItem.getComponent(MapCreatItem_1.default);
                mapItem.set(column, blockItem);
            }
            this.model.starItemMap.set(row, mapItem);
        }
    };
    MapCreateMain.prototype.clickItemCb = function (data) {
        var item = this.model.starItemMap.get(data.row).get(data.column);
        var score = 0;
        var url = "";
        var typ = this.model.getCurIndex();
        var itemData = UIParam_1.UIPa.StarItemData[typ];
        if (itemData) {
            score = itemData.score;
            url = itemData.url;
        }
        data.typ = typ;
        data.score = score;
        data.url = url;
        item.setInit(data);
        this.model.starDataArr[data.row][data.column] = typ;
    };
    // 鼠标按下事件处理器
    MapCreateMain.prototype.onMouseDown = function (event) {
        szg.player.public.isMouseDown = true;
    };
    MapCreateMain.prototype.onMouseUp = function (event) {
        szg.player.public.isMouseDown = false;
    };
    MapCreateMain = __decorate([
        ccclass
    ], MapCreateMain);
    return MapCreateMain;
}(UIVControlBase_1.UIVControlBase));
exports.default = MapCreateMain;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvbWFwQ3JlYXRlL01hcENyZWF0ZU1haW4vTWFwQ3JlYXRlTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RkFBc0Y7QUFDdEYsc0VBQXFFO0FBR3JFLDZEQUF3RDtBQUN4RCxpRUFBZ0U7QUFDaEUsMkRBQXVEO0FBRWpELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQTJDLGlDQUFjO0lBQXpEO1FBQUEscUVBOE1DO1FBN01HLGdCQUFnQjtRQUNULGdCQUFVLEdBQUcsaUJBQWlCLENBQUM7UUFFL0IsV0FBSyxHQUF1QixTQUFTLENBQUM7UUFDdEMsVUFBSSxHQUFzQixTQUFTLENBQUM7O0lBeU0vQyxDQUFDO0lBdk1hLDhCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDeEUsY0FBYztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBR25FLENBQUM7SUFFUyxrQ0FBVSxHQUFwQixVQUFxQixLQUFVO1FBQzNCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUNqQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMs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TSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFBO0lBQ3hDLENBQUM7SUFFTyxpQ0FBUyxHQUFqQixVQUFrQixLQUFLO1FBQ25CLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUE7SUFDekMsQ0FBQztJQTFNZ0IsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQThNakM7SUFBRCxvQkFBQztDQTlNRCxBQThNQyxDQTlNMEMsK0JBQWMsR0E4TXhEO2tCQTlNb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVJVkNvbnRyb2xCYXNlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSVZDb250cm9sQmFzZSc7XG5pbXBvcnQgeyBDMkZFbnVtIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2RlZmluZS9DMkZFbnVtJztcbmltcG9ydCBNYXBDcmVhdGVNYWluTW9kZWwgZnJvbSAnLi9NYXBDcmVhdGVNYWluTW9kZWwnO1xuaW1wb3J0IE1hcENyZWF0ZU1haW5WaWV3IGZyb20gJy4vTWFwQ3JlYXRlTWFpblZpZXcnO1xuaW1wb3J0IE1hcENyZWF0SXRlbSBmcm9tICcuLi9NYXBDcmVhdEl0ZW0vTWFwQ3JlYXRJdGVtJztcbmltcG9ydCB7IEdhbWVDb25zdHMgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvZ2FtZS9HYW1lQ29uc3RzJztcbmltcG9ydCB7IFVJUGEgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvZ2FtZS9VSVBhcmFtJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBDcmVhdGVNYWluIGV4dGVuZHMgVUlWQ29udHJvbEJhc2Uge1xuICAgIC8qKiDpooTliLblkI0g57uZ5a6e5L6L6LCD55SoICovXG4gICAgcHVibGljIHByZWZhYk5hbWUgPSAnRl9NYXBDcmVhdGVNYWluJztcblxuICAgIHB1YmxpYyBtb2RlbDogTWFwQ3JlYXRlTWFpbk1vZGVsID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyB2aWV3OiBNYXBDcmVhdGVNYWluVmlldyA9IHVuZGVmaW5lZDtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmlldy50YWJHcm91cFRhYlBhZ2UucXVpY2tTZXRUYWJIbmFkbGVyKHRoaXMsIFwiQ0Nfb25UYWJQYWdlQ2xpY2tcIik7XG4gICAgICAgIC8vIOa3u+WKoOm8oOagh+aMieS4i+S6i+S7tuebkeWQrOWZqFxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgdGhpcy5vbk1vdXNlRG93biwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9VUCwgdGhpcy5vbk1vdXNlVXAsIHRoaXMpO1xuXG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25WaWV3T3BlbihwYXJhbTogYW55KSB7XG4gICAgICAgIHRoaXMuZ2V0Q3VyRGF0YSgpXG4gICAgICAgIHRoaXMubG9hZFRhYkl0ZW1GaXJzdCh0aGlzLnN0YXJ0R2FtZS5iaW5kKHRoaXMpKVxuXG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIGlmIChzdXBlci5vbkVuYWJsZSkge1xuICAgICAgICAgICAgc3VwZXIub25FbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uKEMyRkVudW0uVUlFdmVudC5CdXR0b25DbGljaywgdGhpcy5vbkJ1dHRvbkNsaWNrLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EaXNhYmxlKCk6IHZvaWQge1xuICAgICAgICBpZiAoc3VwZXIub25EaXNhYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9mZihDMkZFbnVtLlVJRXZlbnQuQnV0dG9uQ2xpY2spO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgb25CdXR0b25DbGljayhldmVudFR5cGU6IHN0cmluZywgY29tcG9uZW50OiBjYy5CdXR0b24pIHtcbiAgICAgICAgc3dpdGNoIChjb21wb25lbnQubmFtZSkge1xuXG4gICAgICAgICAgICBjYXNlIHRoaXMudmlldy5idG5TYXZlQnV0dG9uLm5hbWU6XG4gICAgICAgICAgICAgICAgdGhpcy5DQ19vbkNsaWNrYnRuU2F2ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIHRoaXMudmlldy5idG5OZXdCdXR0b24ubmFtZTpcbiAgICAgICAgICAgICAgICB0aGlzLkNDX29uQ2xpY2tidG5OZXcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgQ0Nfb25DbGlja2J0blNhdmUoKSB7XG4gICAgICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRTdGFyQWxsRGF0YSh0aGlzLm1vZGVsLmN1ckx2KVxuICAgICAgICBjb25zdCBmaWxlTmFtZSA9IFwiZ3VhblFpYVRlc3QudHh0XCI7XG4gICAgICAgIHRoaXMuZG93bmxvYWRUeHRGaWxlKGNvbnRlbnQsIGZpbGVOYW1lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRvd25sb2FkVHh0RmlsZShjb250ZW50LCBmaWxlTmFtZSkge1xuICAgICAgICAvLyDliJvlu7rkuIDkuKrmlrDnmoQgQmxvYiDlr7nosaHvvIzkvKDlhaXmlofku7bnmoTlhoXlrrnlkowgTUlNRSDnsbvlnotcbiAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtjb250ZW50XSwgeyB0eXBlOiAndGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04JyB9KTtcbiAgICAgICAgLy8g5Yib5bu65LiA5Liq6ZqQ6JeP55qE5Y+v5LiL6L296ZO+5o6lXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgIGxpbmsuZG93bmxvYWQgPSBmaWxlTmFtZTtcbiAgICAgICAgbGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAvLyDlsIbpk77mjqXmt7vliqDliLDpobXpnaLkuK3lubbop6blj5Hngrnlh7vkuovku7ZcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgbGluay5jbGljaygpO1xuICAgICAgICAvLyDmuIXnkIZcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChsaW5rLmhyZWYpO1xuICAgIH1cblxuXG4gICAgLy/or7vlj5bphY3nva7kuK3nmoTlhYPntKBcbiAgICBwcml2YXRlIGdldFN0YXJBbGxEYXRhKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHN0ciA9IFwiXCJcbiAgICAgICAgbGV0IGFycjogbnVtYmVyW11bXSA9IHRoaXMubW9kZWwuc3RhckRhdGFBcnJcbiAgICAgICAgc3RyICs9IFwiW1wiICsgaW5kZXggKyBcIl06IFtcXG5cIlxuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgICAgICAgIHN0ciArPSBcIltcIlxuICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgc3RyICs9IGFycltjb2xdW3Jvd10gKyBcIixcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbCA8IDkpIHtcbiAgICAgICAgICAgICAgICBzdHIgKz0gXCJdLFxcblwiXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0ciArPSBcIl1cXG5cIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgc3RyICs9IFwiXSxcXG5cIlxuICAgICAgICByZXR1cm4gc3RyXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBDQ19vbkNsaWNrYnRuTmV3KCkge1xuICAgICAgICB0aGlzLmdldEN1ckRhdGEoKVxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpXG4gICAgfVxuXG5cbiAgICBwcml2YXRlIENDX29uVGFiUGFnZUNsaWNrKHN1Yk5hbWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5tb2RlbC5jdXJTZWxlY3QgPT0gc3ViTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9kZWwuY3VyU2VsZWN0ID0gc3ViTmFtZVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBnZXRDdXJEYXRhKCkge1xuICAgICAgICB0aGlzLm1vZGVsLmN1ckx2ID0gdGhpcy5nZXRDdXJMdigpXG4gICAgICAgIHRoaXMubW9kZWwuaW5pdERhdGEoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEN1ckx2KCkge1xuICAgICAgICBsZXQgbHYgPSAwXG4gICAgICAgIGlmICh0aGlzLnZpZXcuZWRpdEJveEVkaXRCb3guc3RyaW5nICYmIHRoaXMudmlldy5lZGl0Qm94RWRpdEJveC5zdHJpbmcgIT0gXCJcIikge1xuICAgICAgICAgICAgbHYgPSBwYXJzZUludCh0aGlzLnZpZXcuZWRpdEJveEVkaXRCb3guc3RyaW5nKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsdlxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBsb2FkVGFiSXRlbUZpcnN0KGNiKSB7XG4gICAgICAgIGF3YWl0IGMyZi5yZXMubG9hZE9uZShHYW1lQ29uc3RzLkNtbVByZWZhYi5tYXBDcmVhdEl0ZW0sIGNjLlByZWZhYikudGhlbigocmVzSXRlbTogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmJsb2NrSXRlbSA9IHJlc0l0ZW07XG4gICAgICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRHYW1lKCkge1xuICAgICAgICBpZiAoIXRoaXMubW9kZWwuc3Rhckl0ZW1NYXApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEl0ZW1BcnIoKVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgMTA7IGNvbHVtbisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluaXRQb3NpdGlvbiA9IHRoaXMubW9kZWwuZ2V0U3RhclBvc2l0aW9uKHJvdywgY29sdW1uKTtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMubW9kZWwuc3Rhckl0ZW1NYXAuZ2V0KHJvdykuZ2V0KGNvbHVtbik7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGVJdGVtID0gaXRlbS5ub2RlXG4gICAgICAgICAgICAgICAgbm9kZUl0ZW0ubmFtZSA9IGBibG9jayR7Y29sdW1ufV8ke3Jvd31gXG4gICAgICAgICAgICAgICAgbm9kZUl0ZW0uc2V0UG9zaXRpb24oaW5pdFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBsZXQgdHlwID0gdGhpcy5tb2RlbC5zdGFyRGF0YUFycltyb3ddW2NvbHVtbl1cbiAgICAgICAgICAgICAgICBsZXQgaXRlbURhdGEgPSBVSVBhLlN0YXJJdGVtRGF0YVt0eXBdXG4gICAgICAgICAgICAgICAgbGV0IHNjb3JlID0gMFxuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBcIlwiXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1EYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlID0gaXRlbURhdGEuc2NvcmVcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gaXRlbURhdGEudXJsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBkYXRhSXRlbTogVUlQYS5EZXNTdGFySXRlbUFyZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cDogdHlwLFxuICAgICAgICAgICAgICAgICAgICBzY29yZTogc2NvcmUsXG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgcm93OiByb3csXG4gICAgICAgICAgICAgICAgICAgIGNiRnVuOiB0aGlzLmNsaWNrSXRlbUNiLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGl0ZW0uc2V0SW5pdChkYXRhSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBpbml0SXRlbUFycigpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5zdGFySXRlbU1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgICAgICAgICBsZXQgbWFwSXRlbTogTWFwPG51bWJlciwgTWFwQ3JlYXRJdGVtPiA9IG5ldyBNYXAoKVxuICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgMTA7IGNvbHVtbisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGVJdGVtID0gYzJmLnV0aWxzLnZpZXcuaW5zdGFudGlhdGVNVkNQcmVmYWIodGhpcy5tb2RlbC5ibG9ja0l0ZW0sIHRoaXMudmlldy5jb250ZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuY29udGVudC5hZGRDaGlsZChub2RlSXRlbSlcbiAgICAgICAgICAgICAgICBsZXQgYmxvY2tJdGVtID0gbm9kZUl0ZW0uZ2V0Q29tcG9uZW50KE1hcENyZWF0SXRlbSlcbiAgICAgICAgICAgICAgICBtYXBJdGVtLnNldChjb2x1bW4sIGJsb2NrSXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubW9kZWwuc3Rhckl0ZW1NYXAuc2V0KHJvdywgbWFwSXRlbSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2xpY2tJdGVtQ2IoZGF0YTogVUlQYS5EZXNTdGFySXRlbUFyZ3MpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLm1vZGVsLnN0YXJJdGVtTWFwLmdldChkYXRhLnJvdykuZ2V0KGRhdGEuY29sdW1uKTtcbiAgICAgICAgbGV0IHNjb3JlID0gMFxuICAgICAgICBsZXQgdXJsID0gXCJcIlxuICAgICAgICBsZXQgdHlwID0gdGhpcy5tb2RlbC5nZXRDdXJJbmRleCgpXG4gICAgICAgIGxldCBpdGVtRGF0YSA9IFVJUGEuU3Rhckl0ZW1EYXRhW3R5cF1cbiAgICAgICAgaWYgKGl0ZW1EYXRhKSB7XG4gICAgICAgICAgICBzY29yZSA9IGl0ZW1EYXRhLnNjb3JlXG4gICAgICAgICAgICB1cmwgPSBpdGVtRGF0YS51cmxcbiAgICAgICAgfVxuICAgICAgICBkYXRhLnR5cCA9IHR5cFxuICAgICAgICBkYXRhLnNjb3JlID0gc2NvcmVcbiAgICAgICAgZGF0YS51cmwgPSB1cmxcbiAgICAgICAgaXRlbS5zZXRJbml0KGRhdGEpO1xuICAgICAgICB0aGlzLm1vZGVsLnN0YXJEYXRhQXJyW2RhdGEucm93XVtkYXRhLmNvbHVtbl0gPSB0eXBcbiAgICB9XG5cbiAgICAvLyDpvKDmoIfmjInkuIvkuovku7blpITnkIblmahcbiAgICBwcml2YXRlIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgIHN6Zy5wbGF5ZXIucHVibGljLmlzTW91c2VEb3duID0gdHJ1ZVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgICAgIHN6Zy5wbGF5ZXIucHVibGljLmlzTW91c2VEb3duID0gZmFsc2VcbiAgICB9XG5cblxuXG59Il19