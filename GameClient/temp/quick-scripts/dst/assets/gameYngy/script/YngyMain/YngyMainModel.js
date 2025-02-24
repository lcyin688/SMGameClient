
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/gameYngy/script/YngyMain/YngyMainModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nYW1lWW5neS9zY3JpcHQvWW5neU1haW4vWW5neU1haW5Nb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBNkQ7QUFDN0Qsd0RBQW9EO0FBQ3BELHNDQUFxQztBQUNyQyw4RUFBNkU7QUFFdkUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBMkMsaUNBQVc7SUFBdEQ7UUFBQSxxRUF3SkM7UUF2SkcsZ0JBQWdCO1FBQ1QsZ0JBQVUsR0FBRyxZQUFZLENBQUM7UUFDMUIsY0FBUSxHQUFnRCxJQUFJLENBQUE7UUFDNUQsY0FBUSxHQUFnRCxJQUFJLENBQUE7UUFDNUQsY0FBUSxHQUFnRCxJQUFJLENBQUE7UUFDNUQsY0FBUSxHQUFnRCxJQUFJLENBQUE7UUFDNUQsZ0JBQVUsR0FBa0QsRUFBRSxDQUFBO1FBRTlELGtCQUFZLEdBQXdCLEVBQUUsQ0FBQTs7SUErSWpELENBQUM7SUE5SVUsb0NBQVksR0FBbkIsVUFBb0IsRUFBVSxFQUFFLFFBQWtCO1FBQzlDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFBO1FBQ3RCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDckMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDdEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUE7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFBO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQTtR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QUFNLElBQUksQ0FBQyxFQUFFO2dCQUNuQixLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzlCO1lBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMzQixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDM0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDMUI7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBckpnQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBd0pqQztJQUFELG9CQUFDO0NBeEpELEFBd0pDLENBeEowQyx5QkFBVyxHQXdKckQ7a0JBeEpvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUNvbnN0cyB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdC9nYW1lL0dhbWVDb25zdHMnO1xuaW1wb3J0IHsgVUlQYSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdC9nYW1lL1VJUGFyYW0nO1xuaW1wb3J0IHsgWW5neUNmZyB9IGZyb20gJy4uL1luZ3lDZmcnO1xuaW1wb3J0IHsgVUlNb2RlbEJhc2UgfSBmcm9tICcuLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZ3VpL2xheWVyL1VJTW9kZWxCYXNlJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBZbmd5TWFpbk1vZGVsIGV4dGVuZHMgVUlNb2RlbEJhc2Uge1xuICAgIC8qKiDpooTliLblkI0g57uZ5a6e5L6L6LCD55SoICovXG4gICAgcHVibGljIHByZWZhYk5hbWUgPSAnRl9Zbmd5TWFpbic7XG4gICAgcHVibGljIGl0ZW1NYXAxOiBNYXA8bnVtYmVyLCBNYXA8bnVtYmVyLCBVSVBhLlluZ3lJdGVtQXJncz4+ID0gbnVsbFxuICAgIHB1YmxpYyBpdGVtTWFwMjogTWFwPG51bWJlciwgTWFwPG51bWJlciwgVUlQYS5Zbmd5SXRlbUFyZ3M+PiA9IG51bGxcbiAgICBwdWJsaWMgaXRlbU1hcDM6IE1hcDxudW1iZXIsIE1hcDxudW1iZXIsIFVJUGEuWW5neUl0ZW1BcmdzPj4gPSBudWxsXG4gICAgcHVibGljIGl0ZW1NYXA0OiBNYXA8bnVtYmVyLCBNYXA8bnVtYmVyLCBVSVBhLlluZ3lJdGVtQXJncz4+ID0gbnVsbFxuICAgIHB1YmxpYyBpdGVtTWFwQXJyOiBNYXA8bnVtYmVyLCBNYXA8bnVtYmVyLCBVSVBhLlluZ3lJdGVtQXJncz4+W10gPSBbXVxuXG4gICAgcHVibGljIHNlbGVjdGVkUG9vbDogVUlQYS5Zbmd5SXRlbUFyZ3NbXSA9IFtdXG4gICAgcHVibGljIGluaXREYXRhQnlMdihsdjogbnVtYmVyLCBjbGlja0Z1bjogRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFBvb2wgPSBbXVxuICAgICAgICBsZXQgdG90YWxDb3VudCA9IHRoaXMuZ2V0QWxsQ291bnQobHYpXG4gICAgICAgIGxldCBjb3VudCA9IE1hdGguZmxvb3IodG90YWxDb3VudCAvIDMpXG4gICAgICAgIGxldCBhbGxEYXRhID0gdGhpcy5nZXRSYWRvbVR5cGVBcnIoY291bnQpXG4gICAgICAgIHRoaXMuaXRlbU1hcDEgPSBuZXcgTWFwKClcbiAgICAgICAgdGhpcy5pdGVtTWFwMiA9IG5ldyBNYXAoKVxuICAgICAgICB0aGlzLml0ZW1NYXAzID0gbmV3IE1hcCgpXG4gICAgICAgIHRoaXMuaXRlbU1hcDQgPSBuZXcgTWFwKClcbiAgICAgICAgbGV0IGluZGV4ID0gMFxuICAgICAgICB0aGlzLnB1c2hJdGVtQXJyKFluZ3lDZmdbbHYgLSAxXS5sYXkxLCBpbmRleCwgYWxsRGF0YSwgMCwgY2xpY2tGdW4pXG4gICAgICAgIHRoaXMucHVzaEl0ZW1BcnIoWW5neUNmZ1tsdiAtIDFdLmxheTIsIGluZGV4LCBhbGxEYXRhLCAxLCBjbGlja0Z1bilcbiAgICAgICAgdGhpcy5wdXNoSXRlbUFycihZbmd5Q2ZnW2x2IC0gMV0ubGF5MywgaW5kZXgsIGFsbERhdGEsIDIsIGNsaWNrRnVuKVxuICAgICAgICB0aGlzLnB1c2hJdGVtQXJyKFluZ3lDZmdbbHYgLSAxXS5sYXk0LCBpbmRleCwgYWxsRGF0YSwgMywgY2xpY2tGdW4pXG4gICAgICAgIHRoaXMuaXRlbU1hcEFyciA9IFtdXG4gICAgICAgIHRoaXMuaXRlbU1hcEFyci5wdXNoKHRoaXMuaXRlbU1hcDEsIHRoaXMuaXRlbU1hcDIsIHRoaXMuaXRlbU1hcDMsIHRoaXMuaXRlbU1hcDQpXG4gICAgICAgIHRoaXMucmVmbGFzaEhpZGVTdGF0ZXN0YXRlKClcbiAgICB9XG4gICAgcHJpdmF0ZSByZWZsYXNoSGlkZVN0YXRlc3RhdGUoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtTWFwQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdkNlbmcgPSB0aGlzLml0ZW1NYXBBcnJbaV07XG4gICAgICAgICAgICB2Q2VuZy5mb3JFYWNoKCh2SGFuZywga2V5SGFuZykgPT4ge1xuICAgICAgICAgICAgICAgIHZIYW5nLmZvckVhY2goKHZJdGVtLCBrZXlMaWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhpZGVTdGF0ZSA9IHRoaXMuZ2V0SGlkZVN0YXRlKHZJdGVtKVxuICAgICAgICAgICAgICAgICAgICB2SXRlbS5oaWRlU3RhdGUgPSBoaWRlU3RhdGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0SGlkZVN0YXRlKHZJdGVtOiBVSVBhLlluZ3lJdGVtQXJncykge1xuICAgICAgICBsZXQgY2VuZ0luZGV4ID0gdkl0ZW0uY2VuZ0luZGV4XG4gICAgICAgIGxldCBoaWRlU3RhdGUgPSBmYWxzZVxuICAgICAgICBsZXQgcGFkID0gR2FtZUNvbnN0cy5Zbmd5Q29uc3QuSXRlbVdpZHRoSGVpZ2h0XG4gICAgICAgIGZvciAobGV0IGkgPSBjZW5nSW5kZXg7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGxldCB2Q2VuZyA9IHRoaXMuaXRlbU1hcEFycltpXTtcbiAgICAgICAgICAgIHZDZW5nLmZvckVhY2godnYgPT4ge1xuICAgICAgICAgICAgICAgIHZ2LmZvckVhY2godkl0ZW1UZW1wID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy94LHkg5ZCM5pe25bCP5LqO5LiA5Liq5Y2V5L2N55qE5pe25YCZ6K+05piO6KKr5Y6L552A5LqGXG4gICAgICAgICAgICAgICAgICAgIGlmICh2SXRlbVRlbXAucG9zLnggLSB2SXRlbS5wb3MueCA8IHBhZCAmJiB2SXRlbVRlbXAucG9zLnkgLSB2SXRlbS5wb3MueSA8IHBhZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZVN0YXRlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGlkZVN0YXRlXG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHB1c2hJdGVtQXJyKGRhdGE6IG51bWJlcltdW10sIGluZGV4OiBudW1iZXIsIGFsbERhdGE6IEFycmF5PG51bWJlcj4sIGNlbmc6IG51bWJlciwgY2xpY2tGdW46IEZ1bmN0aW9uKSB7XG4gICAgICAgIGxldCBpdGVtTWFwOiBNYXA8bnVtYmVyLCBNYXA8bnVtYmVyLCBVSVBhLlluZ3lJdGVtQXJncz4+XG4gICAgICAgIGxldCBwYWQgPSBHYW1lQ29uc3RzLlluZ3lDb25zdC5JdGVtV2lkdGhIZWlnaHRcbiAgICAgICAgbGV0IHN0YXJ0UG9zID0gbmV3IGNjLlZlYzIoMCwgMClcbiAgICAgICAgc3dpdGNoIChjZW5nKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgaXRlbU1hcCA9IHRoaXMuaXRlbU1hcDFcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpdGVtTWFwID0gdGhpcy5pdGVtTWFwMlxuICAgICAgICAgICAgICAgIHN0YXJ0UG9zID0gbmV3IGNjLlZlYzIocGFkIC8gMiwgcGFkIC8gMilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpdGVtTWFwID0gdGhpcy5pdGVtTWFwM1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGl0ZW1NYXAgPSB0aGlzLml0ZW1NYXA0XG4gICAgICAgICAgICAgICAgc3RhcnRQb3MgPSBuZXcgY2MuVmVjMihwYWQgLyAyLCBwYWQgLyAyKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBkYXRhLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gZGF0YVt4XTtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdi5sZW5ndGg7IHkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZ2ID0gdlt5XTtcbiAgICAgICAgICAgICAgICBpZiAodnYgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zWCA9IHggKiBwYWRcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvc1kgPSB5ICogcGFkXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3M6IGNjLlZlYzIgPSBuZXcgY2MuVmVjMihwb3NYLCBwb3NZKS5hZGQoc3RhcnRQb3MpXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtRGF0YTogVUlQYS5Zbmd5SXRlbUFyZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbmdJbmRleDogY2VuZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHhJbmRleDogeCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFlJbmRleDogeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cDogYWxsRGF0YVtpbmRleF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogVUlQYS5Zbmd5SXRlbUFyZ3NTdGF0ZXMuQWxpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlU3RhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tGdW46IGNsaWNrRnVuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hcEl0ZW0xID0gaXRlbU1hcC5nZXQoeClcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hcEl0ZW0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBJdGVtMS5zZXQoeSwgaXRlbURhdGEpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWFwSXRlbTEgPSBuZXcgTWFwPG51bWJlciwgVUlQYS5Zbmd5SXRlbUFyZ3M+KClcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcEl0ZW0xLnNldCh5LCBpdGVtRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1NYXAuc2V0KHgsIG1hcEl0ZW0xKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluZGV4KytcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBnZXRBbGxDb3VudChsdjogbnVtYmVyKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIHRoaXMuZ2V0Q291bnQoWW5neUNmZ1tsdiAtIDFdLmxheTEsIGNvdW50KVxuICAgICAgICB0aGlzLmdldENvdW50KFluZ3lDZmdbbHYgLSAxXS5sYXkyLCBjb3VudClcbiAgICAgICAgdGhpcy5nZXRDb3VudChZbmd5Q2ZnW2x2IC0gMV0ubGF5MywgY291bnQpXG4gICAgICAgIHRoaXMuZ2V0Q291bnQoWW5neUNmZ1tsdiAtIDFdLmxheTQsIGNvdW50KVxuICAgICAgICByZXR1cm4gY291bnRcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENvdW50KGRhdGE6IG51bWJlcltdW10sIGNvdW50OiBudW1iZXIpIHtcbiAgICAgICAgZGF0YS5mb3JFYWNoKHYgPT4ge1xuICAgICAgICAgICAgdi5mb3JFYWNoKHZ2ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodnYgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICBwcml2YXRlIGdldFJhZG9tVHlwZUFycihhbGxDb3VudDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBhbGxEYXRhOiBBcnJheTxudW1iZXI+ID0gW107XG4gICAgICAgIGxldCB0eXBlczogQXJyYXk8bnVtYmVyPiA9IFswLCAxLCAyLCAzLCA0LCA1XTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxDb3VudDsgaSkge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdHlwZXMubGVuZ3RoKTtcbiAgICAgICAgICAgIGlmICh0eXBlcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHR5cGVzID0gWzAsIDEsIDIsIDMsIDQsIDVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWxsRGF0YS5wdXNoKHR5cGVzW2luZGV4XSk7XG4gICAgICAgICAgICBhbGxEYXRhLnB1c2godHlwZXNbaW5kZXhdKTtcbiAgICAgICAgICAgIGFsbERhdGEucHVzaCh0eXBlc1tpbmRleF0pO1xuICAgICAgICAgICAgdHlwZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhbGxEYXRhO1xuICAgIH1cblxuXG59Il19