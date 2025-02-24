"use strict";
cc._RF.push(module, 'd3251pAmDBLz62pXRSju3VY', 'YngyMainModel');
// gameYngy/script/YngyMain/YngyMainModel.ts

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
var GameConsts_1 = require("../../../Script/game/GameConsts");
var UIParam_1 = require("../../../Script/game/UIParam");
var YngyCfg_1 = require("../YngyCfg");
var UIModelBase_1 = require("./../../../c2f-framework/gui/layer/UIModelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var YngyMainModel = /** @class */ (function (_super) {
    __extends(YngyMainModel, _super);
    function YngyMainModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_YngyMain';
        _this.itemMap1 = null;
        _this.itemMap2 = null;
        _this.itemMap3 = null;
        _this.itemMap4 = null;
        _this.itemMapArr = [];
        _this.selectedPool = [];
        return _this;
    }
    YngyMainModel.prototype.initDataByLv = function (lv, clickFun) {
        this.selectedPool = [];
        var totalCount = this.getAllCount(lv);
        var count = Math.floor(totalCount / 3);
        var allData = this.getRadomTypeArr(count);
        this.itemMap1 = new Map();
        this.itemMap2 = new Map();
        this.itemMap3 = new Map();
        this.itemMap4 = new Map();
        var index = 0;
        this.pushItemArr(YngyCfg_1.YngyCfg[lv - 1].lay1, index, allData, 0, clickFun);
        this.pushItemArr(YngyCfg_1.YngyCfg[lv - 1].lay2, index, allData, 1, clickFun);
        this.pushItemArr(YngyCfg_1.YngyCfg[lv - 1].lay3, index, allData, 2, clickFun);
        this.pushItemArr(YngyCfg_1.YngyCfg[lv - 1].lay4, index, allData, 3, clickFun);
        this.itemMapArr = [];
        this.itemMapArr.push(this.itemMap1, this.itemMap2, this.itemMap3, this.itemMap4);
        this.reflashHideStatestate();
    };
    YngyMainModel.prototype.reflashHideStatestate = function () {
        var _this = this;
        for (var i = 0; i < this.itemMapArr.length; i++) {
            var vCeng = this.itemMapArr[i];
            vCeng.forEach(function (vHang, keyHang) {
                vHang.forEach(function (vItem, keyLie) {
                    var hideState = _this.getHideState(vItem);
                    vItem.hideState = hideState;
                });
            });
        }
    };
    YngyMainModel.prototype.getHideState = function (vItem) {
        var cengIndex = vItem.cengIndex;
        var hideState = false;
        var pad = GameConsts_1.GameConsts.YngyConst.ItemWidthHeight;
        for (var i = cengIndex; i < 4; i++) {
            var vCeng = this.itemMapArr[i];
            vCeng.forEach(function (vv) {
                vv.forEach(function (vItemTemp) {
                    //x,y 同时小于一个单位的时候说明被压着了
                    if (vItemTemp.pos.x - vItem.pos.x < pad && vItemTemp.pos.y - vItem.pos.y < pad) {
                        hideState = true;
                    }
                });
            });
        }
        return hideState;
    };
    YngyMainModel.prototype.pushItemArr = function (data, index, allData, ceng, clickFun) {
        var itemMap;
        var pad = GameConsts_1.GameConsts.YngyConst.ItemWidthHeight;
        var startPos = new cc.Vec2(0, 0);
        switch (ceng) {
            case 0:
                itemMap = this.itemMap1;
                break;
            case 1:
                itemMap = this.itemMap2;
                startPos = new cc.Vec2(pad / 2, pad / 2);
                break;
            case 2:
                itemMap = this.itemMap3;
                break;
            case 3:
                itemMap = this.itemMap4;
                startPos = new cc.Vec2(pad / 2, pad / 2);
                break;
        }
        for (var x = 0; x < data.length; x++) {
            var v = data[x];
            for (var y = 0; y < v.length; y++) {
                var vv = v[y];
                if (vv == 1) {
                    var posX = x * pad;
                    var posY = y * pad;
                    var pos = new cc.Vec2(posX, posY).add(startPos);
                    var itemData = {
                        pos: pos,
                        cengIndex: ceng,
                        xIndex: x,
                        YIndex: y,
                        typ: allData[index],
                        state: UIParam_1.UIPa.YngyItemArgsStates.Alive,
                        hideState: false,
                        clickFun: clickFun
                    };
                    var mapItem1 = itemMap.get(x);
                    if (mapItem1) {
                        mapItem1.set(y, itemData);
                    }
                    else {
                        var mapItem1_1 = new Map();
                        mapItem1_1.set(y, itemData);
                        itemMap.set(x, mapItem1_1);
                    }
                    index++;
                }
            }
        }
    };
    YngyMainModel.prototype.getAllCount = function (lv) {
        var count = 0;
        this.getCount(YngyCfg_1.YngyCfg[lv - 1].lay1, count);
        this.getCount(YngyCfg_1.YngyCfg[lv - 1].lay2, count);
        this.getCount(YngyCfg_1.YngyCfg[lv - 1].lay3, count);
        this.getCount(YngyCfg_1.YngyCfg[lv - 1].lay4, count);
        return count;
    };
    YngyMainModel.prototype.getCount = function (data, count) {
        data.forEach(function (v) {
            v.forEach(function (vv) {
                if (vv == 1) {
                    count++;
                }
            });
        });
    };
    YngyMainModel.prototype.getRadomTypeArr = function (allCount) {
        var allData = [];
        var types = [0, 1, 2, 3, 4, 5];
        for (var i = 0; i < allCount; i) {
            var index = Math.floor(Math.random() * types.length);
            if (types.length == 0) {
                types = [0, 1, 2, 3, 4, 5];
            }
            allData.push(types[index]);
            allData.push(types[index]);
            allData.push(types[index]);
            types.splice(index, 1);
        }
        return allData;
    };
    YngyMainModel = __decorate([
        ccclass
    ], YngyMainModel);
    return YngyMainModel;
}(UIModelBase_1.UIModelBase));
exports.default = YngyMainModel;

cc._RF.pop();