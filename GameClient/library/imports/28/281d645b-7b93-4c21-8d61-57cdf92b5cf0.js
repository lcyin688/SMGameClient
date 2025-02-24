"use strict";
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