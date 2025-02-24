
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/GameLoading/GameLoadingModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '876923ERMRCR6hLk2vwGLXh', 'GameLoadingModel');
// entrance/script/GameLoading/GameLoadingModel.ts

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
var GameConsts_1 = require("../../../Script/game/GameConsts");
var C2FEnum_1 = require("../../../c2f-framework/define/C2FEnum");
var UIModelBase_1 = require("./../../../c2f-framework/gui/layer/UIModelBase");
var LoadKind;
(function (LoadKind) {
    LoadKind[LoadKind["csv"] = 1] = "csv";
    LoadKind[LoadKind["json"] = 2] = "json";
    LoadKind[LoadKind["homeView"] = 3] = "homeView";
    LoadKind[LoadKind["RedDot"] = 4] = "RedDot";
    LoadKind[LoadKind["ResidentRes"] = 5] = "ResidentRes";
    LoadKind[LoadKind["batBullet"] = 6] = "batBullet";
    LoadKind[LoadKind["batMonster"] = 7] = "batMonster";
    LoadKind[LoadKind["batHero"] = 8] = "batHero";
    LoadKind[LoadKind["batEffect"] = 9] = "batEffect";
    LoadKind[LoadKind["batBg"] = 10] = "batBg";
    LoadKind[LoadKind["batRoom"] = 11] = "batRoom";
    LoadKind[LoadKind["batAudio"] = 12] = "batAudio";
    LoadKind[LoadKind["battleView"] = 13] = "battleView";
})(LoadKind || (LoadKind = {}));
var TaskInfo = /** @class */ (function () {
    function TaskInfo() {
    }
    return TaskInfo;
}());
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameLoadingModel = /** @class */ (function (_super) {
    __extends(GameLoadingModel, _super);
    function GameLoadingModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'GameLoading';
        return _this;
    }
    Object.defineProperty(GameLoadingModel.prototype, "input", {
        get: function () {
            return this._input;
        },
        set: function (v) {
            this._input = v;
        },
        enumerable: false,
        configurable: true
    });
    GameLoadingModel.prototype.loadTask = function () {
        switch (this.input.type) {
            case GameConsts_1.GameConsts.LoadingType.home:
                this.loadCfgFiles(this.updateProgInfo.bind(this), this.onConfigLoadEnd.bind(this));
                break;
            case GameConsts_1.GameConsts.LoadingType.battle:
                this.loadBattleRes(this.input.param, this.updateProgInfo.bind(this), this.onTaskEnd.bind(this));
                break;
        }
    };
    GameLoadingModel.prototype.updateProgInfo = function (prog, tips) {
        if (tips === void 0) { tips = ''; }
        this.emit(C2FEnum_1.C2FEnum.Event.ChangeViewValue, 'barLoadingProgressBar', function (barLoading) {
            barLoading.progress = prog;
        });
        this.emit(C2FEnum_1.C2FEnum.Event.ChangeViewValue, 'progressLabel', function (progressLabel) {
            progressLabel.string = (prog * 100).toFixed(1) + '%';
            ;
        });
        this.emit(C2FEnum_1.C2FEnum.Event.ChangeViewValue, 'noticeTopLabel', function (noticeTopLabel) {
            noticeTopLabel.string = tips;
        });
    };
    GameLoadingModel.prototype.onConfigLoadEnd = function () {
        szg.player.cfgLoaded = true;
        //配置加载完成是直接进主界面还是有需求直接进战斗什么的，可在这里分支
        this.loadHomeViewRes(this.updateProgInfo.bind(this), this.onTaskEnd.bind(this));
    };
    GameLoadingModel.prototype.onTaskEnd = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.input && this.input.endCb && this.input.endCb();
                return [2 /*return*/];
            });
        });
    };
    //任务·加载游戏配置
    GameLoadingModel.prototype.loadCfgFiles = function (progCb, cmplCb) {
        var arrTask = [
            { kind: LoadKind.csv, data: null },
            { kind: LoadKind.json, data: null }
        ];
        this.doLineTask(arrTask, progCb, cmplCb);
    };
    //任务·加载主界面
    GameLoadingModel.prototype.loadHomeViewRes = function (progCb, cmplCb) {
        var arrTask = [
            { kind: LoadKind.RedDot, data: null },
            { kind: LoadKind.homeView, data: null },
            { kind: LoadKind.ResidentRes, data: null }
        ];
        this.doLineTask(arrTask, progCb, cmplCb);
    };
    //任务·加载战斗资源
    GameLoadingModel.prototype.loadBattleRes = function (director, progCb, cmplCb) {
        var arrTask = [
            { kind: LoadKind.batBullet, data: director },
            { kind: LoadKind.batMonster, data: director },
            { kind: LoadKind.batHero, data: director },
            { kind: LoadKind.batEffect, data: director },
            { kind: LoadKind.batBg, data: director },
            { kind: LoadKind.batRoom, data: director },
            { kind: LoadKind.batAudio, data: director },
            { kind: LoadKind.battleView, data: director },
        ];
        this.doLineTask(arrTask, progCb, cmplCb);
    };
    //单线执行任务
    GameLoadingModel.prototype.doLineTask = function (arrTask, progCb, cmplCb) {
        var taskFuncs = this.getTaskFuncList(arrTask);
        var taskCnt = taskFuncs.length;
        if (taskCnt <= 0) {
            cmplCb && cmplCb();
        }
        else {
            var idx_1 = 0;
            var oneTaskCmpl_1 = function () {
                idx_1++;
                runTask_1();
            };
            var oneTaskProg_1 = function (cur, total) {
                var beginProg = idx_1 / taskCnt;
                var step = 1 / taskCnt;
                var subProg = cur / total;
                var totalProg = beginProg + step * subProg;
                progCb && progCb(totalProg);
                if (cur >= total) {
                    oneTaskCmpl_1();
                }
            };
            var runTask_1 = function () {
                if (idx_1 >= taskFuncs.length) {
                    //所有任务已完成
                    cmplCb && cmplCb();
                }
                else {
                    taskFuncs[idx_1](arrTask[idx_1].data, oneTaskProg_1);
                }
            };
            runTask_1();
        }
    };
    //加载函数列表
    GameLoadingModel.prototype.getTaskFuncList = function (arrTask) {
        var funcList = [];
        for (var _i = 0, arrTask_1 = arrTask; _i < arrTask_1.length; _i++) {
            var one = arrTask_1[_i];
            switch (one.kind) {
                case LoadKind.csv:
                    funcList.push(this.loadCSV.bind(this));
                    break;
                case LoadKind.json:
                    funcList.push(this.loadJSON.bind(this));
                    break;
                case LoadKind.RedDot:
                    funcList.push(this.initRedDot.bind(this));
                    break;
                case LoadKind.homeView:
                    funcList.push(this.loadHomeView.bind(this));
                    break;
                case LoadKind.ResidentRes:
                    funcList.push(this.loadResidentRes.bind(this));
                    break;
                case LoadKind.batBullet:
                    funcList.push(this.loadBattleBullet.bind(this));
                    break;
                case LoadKind.batMonster:
                    funcList.push(this.loadBattleMonster.bind(this));
                    break;
                case LoadKind.batHero:
                    funcList.push(this.loadBattleHero.bind(this));
                    break;
                case LoadKind.batEffect:
                    funcList.push(this.loadBattleEffect.bind(this));
                    break;
                case LoadKind.batRoom:
                    funcList.push(this.loadBattleRooms.bind(this));
                    break;
                case LoadKind.batBg:
                    funcList.push(this.loadBattleBg.bind(this));
                    break;
                case LoadKind.batAudio:
                    funcList.push(this.loadBattleAudio.bind(this));
                    break;
                case LoadKind.battleView:
                    funcList.push(this.loadBattleView.bind(this));
                    break;
            }
        }
        return funcList;
    };
    //具体实现·加载配置
    GameLoadingModel.prototype.loadCSV = function (data, progCb) {
        szg.cfg.loadAllCSV(function (cur, total) {
            progCb && progCb(cur, total);
        });
    };
    //具体实现·加载配置
    GameLoadingModel.prototype.loadJSON = function (data, progCb) {
        szg.cfg.loadAllJson(function (cur, total) {
            progCb && progCb(cur, total);
        });
    };
    //具体实现·加载主界面预制
    GameLoadingModel.prototype.loadHomeView = function (data, progCb) {
        var ResidentResMgr = require('ResidentResMgr').ResidentResMgr;
        ResidentResMgr.ins.loadGameHomePrefab(function (prefab) {
            progCb && progCb(1, 1);
        });
    };
    //具体实现·初始化红点
    GameLoadingModel.prototype.initRedDot = function (data, progCb) {
        var ResidentResMgr = require('ResidentResMgr').ResidentResMgr;
        ResidentResMgr.ins.loadRedDotPrefab(function (prefab) {
            szg.player.redDot.initRedDot(prefab);
            progCb && progCb(1, 1);
        });
    };
    //具体实现·加载常驻资源
    GameLoadingModel.prototype.loadResidentRes = function (data, progCb) {
        var total = 2;
        var curV = 0;
        var loadedOnce = function () {
            progCb && progCb(curV, total);
        };
        var ResidentResMgr = require('ResidentResMgr').ResidentResMgr;
        ResidentResMgr.ins.loadBattleStartSpine(function (spDt) {
            curV++;
            loadedOnce();
        });
        ResidentResMgr.ins.initMainTeamRes(function () {
            curV++;
            loadedOnce();
        });
    };
    //具体实现·加载战斗子弹
    GameLoadingModel.prototype.loadBattleBullet = function (director, progCb) {
        director.preloadBulletRes(function (cur, total) {
            progCb && progCb(cur, total);
        });
    };
    //具体实现·加载战斗僵尸
    GameLoadingModel.prototype.loadBattleMonster = function (director, progCb) {
        director.preloadMonsterRes(function (cur, total) {
            progCb && progCb(cur, total);
        });
    };
    //具体实现·加载战斗英雄
    GameLoadingModel.prototype.loadBattleHero = function (director, progCb) {
        director.preloadHeroRes(function (cur, total) {
            progCb && progCb(cur, total);
        });
    };
    //具体实现·加载战斗特效
    GameLoadingModel.prototype.loadBattleEffect = function (director, progCb) {
        director.preloadEffectRes(function (cur, total) {
            progCb && progCb(cur, total);
        });
    };
    //具体实现·加载战斗界面预制
    GameLoadingModel.prototype.loadBattleView = function (data, progCb) {
        // const uiCfg = ViewCfgData[UIID.BattleView];
        // YT.res.load(GameConsts.Bundle.battle, uiCfg.prefab, Prefab, (err, res) => {
        //     progCb && progCb(1, 1);
        // })
    };
    //具体实现·加载战斗房间预制体
    GameLoadingModel.prototype.loadBattleRooms = function (director, progCb) {
        director.preloadBatBg(function (cur, total) {
            progCb && progCb(cur, total);
        });
    };
    //具体实现·加载战斗背景图片资源
    GameLoadingModel.prototype.loadBattleBg = function (director, progCb) {
        director.preloadRoomFrames(function (cur, total) {
            progCb && progCb(cur, total);
        });
    };
    //具体实现·加载战斗音乐音效
    GameLoadingModel.prototype.loadBattleAudio = function (director, progCb) {
        director.preloadAudioRes(function (cur, total) {
            progCb && progCb(cur, total);
        });
    };
    GameLoadingModel = __decorate([
        ccclass
    ], GameLoadingModel);
    return GameLoadingModel;
}(UIModelBase_1.UIModelBase));
exports.default = GameLoadingModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvR2FtZUxvYWRpbmcvR2FtZUxvYWRpbmdNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBNkQ7QUFDN0QsaUVBQWdFO0FBQ2hFLDhFQUE2RTtBQVE3RSxJQUFLLFFBY0o7QUFkRCxXQUFLLFFBQVE7SUFDVCxxQ0FBTyxDQUFBO0lBQ1AsdUNBQVEsQ0FBQTtJQUNSLCtDQUFRLENBQUE7SUFDUiwyQ0FBTSxDQUFBO0lBQ04scURBQVcsQ0FBQTtJQUNYLGlEQUFTLENBQUE7SUFDVCxtREFBVSxDQUFBO0lBQ1YsNkNBQU8sQ0FBQTtJQUNQLGlEQUFTLENBQUE7SUFDVCwwQ0FBSyxDQUFBO0lBQ0wsOENBQU8sQ0FBQTtJQUNQLGdEQUFRLENBQUE7SUFDUixvREFBVSxDQUFBO0FBQ2QsQ0FBQyxFQWRJLFFBQVEsS0FBUixRQUFRLFFBY1o7QUFFRDtJQUFBO0lBR0EsQ0FBQztJQUFELGVBQUM7QUFBRCxDQUhBLEFBR0MsSUFBQTtBQUVLLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQThDLG9DQUFXO0lBQXpEO1FBQUEscUVBK1FDO1FBOVFHLGdCQUFnQjtRQUNULGdCQUFVLEdBQUcsYUFBYSxDQUFDOztJQTZRdEMsQ0FBQztJQTFRRyxzQkFBVyxtQ0FBSzthQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBQ0QsVUFBaUIsQ0FBWTtZQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNwQixDQUFDOzs7T0FIQTtJQUtNLG1DQUFRLEdBQWY7UUFDSSxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ3JCLEtBQUssdUJB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O1FBQ2pDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELGVBQWU7SUFDUCx5Q0FBYyxHQUF0QixVQUF1QixJQUFTLEVBQUUsTUFBZ0I7UUFDOUMsOENBQThDO1FBQzlDLDhFQUE4RTtRQUM5RSw4QkFBOEI7UUFDOUIsS0FBSztJQUNULENBQUM7SUFFRCxnQkFBZ0I7SUFDUiwwQ0FBZSxHQUF2QixVQUF3QixRQUFhLEVBQUUsTUFBZ0I7UUFDbkQsUUFBUSxDQUFDLFlBQVksQ0FBQyxVQUFDLEdBQVcsRUFBRSxLQUFhO1lBQzdDLE1BQU0sSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELGlCQUFpQjtJQUNULHVDQUFZLEdBQXBCLFVBQXFCLFFBQWEsRUFBRSxNQUFnQjtRQUNoRCxRQUFRLENBQUMsaUJBQWlCLENBQUMsVUFBQyxHQUFXLEVBQUUsS0FBYTtZQUNsRCxNQUFNLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxlQUFlO0lBQ1AsMENBQWUsR0FBdkIsVUFBd0IsUUFBYSxFQUFFLE1BQWdCO1FBQ25ELFFBQVEsQ0FBQyxlQUFlLENBQUMsVUFBQyxHQUFXLEVBQUUsS0FBYTtZQUNoRCxNQUFNLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUE1UWdCLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBK1FwQztJQUFELHVCQUFDO0NBL1FELEFBK1FDLENBL1E2Qyx5QkFBVyxHQStReEQ7a0JBL1FvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lQ29uc3RzIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0L2dhbWUvR2FtZUNvbnN0cyc7XG5pbXBvcnQgeyBDMkZFbnVtIH0gZnJvbSAnLi4vLi4vLi4vYzJmLWZyYW1ld29yay9kZWZpbmUvQzJGRW51bSc7XG5pbXBvcnQgeyBVSU1vZGVsQmFzZSB9IGZyb20gJy4vLi4vLi4vLi4vYzJmLWZyYW1ld29yay9ndWkvbGF5ZXIvVUlNb2RlbEJhc2UnO1xuXG5pbnRlcmZhY2UgSW5wdXREYXRhIHtcbiAgICB0eXBlOiBHYW1lQ29uc3RzLkxvYWRpbmdUeXBlO1xuICAgIGVuZENiOiBGdW5jdGlvbjtcbiAgICBwYXJhbTogYW55O1xufVxuXG5lbnVtIExvYWRLaW5kIHtcbiAgICBjc3YgPSAxLCAgICAgICAgLy/nrZbliJLphY3nva5cbiAgICBqc29uID0gMiwgICAgICAgLy/lhbbku5bphY3nva5cbiAgICBob21lVmlldywgICAgICAgLy/kuLvnlYzpnaJcbiAgICBSZWREb3QsICAgICAgICAgLy/nuqLngrnns7vnu59cbiAgICBSZXNpZGVudFJlcywgICAgLy/luLjpqbvotYTmupBcbiAgICBiYXRCdWxsZXQsICAgICAgLy/miJjmlpflrZDlvLnotYTmupBcbiAgICBiYXRNb25zdGVyLCAgICAgLy/miJjmlpflg7XlsLhcbiAgICBiYXRIZXJvLCAgICAgICAgLy/miJjmlpfoi7Hpm4RcbiAgICBiYXRFZmZlY3QsICAgICAgLy/miJjmlpfnibnmlYhcbiAgICBiYXRCZywgICAgICAgICAgLy/miJjmlpfog4zmma9cbiAgICBiYXRSb29tLCAgICAgICAgLy/miL/pl7TotYTmupBcbiAgICBiYXRBdWRpbywgICAgICAgLy/miJjmlpfpn7PkuZDpn7PmlYhcbiAgICBiYXR0bGVWaWV3LCAgICAgLy/miJjmlpfnlYzpnaJcbn1cblxuY2xhc3MgVGFza0luZm8ge1xuICAgIGtpbmQ6IExvYWRLaW5kO1xuICAgIGRhdGE6IGFueTtcbn1cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTG9hZGluZ01vZGVsIGV4dGVuZHMgVUlNb2RlbEJhc2Uge1xuICAgIC8qKiDpooTliLblkI0g57uZ5a6e5L6L6LCD55SoICovXG4gICAgcHVibGljIHByZWZhYk5hbWUgPSAnR2FtZUxvYWRpbmcnO1xuXG4gICAgcHJpdmF0ZSBfaW5wdXQ6IElucHV0RGF0YTtcbiAgICBwdWJsaWMgZ2V0IGlucHV0KCk6IElucHV0RGF0YSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnB1dDtcbiAgICB9XG4gICAgcHVibGljIHNldCBpbnB1dCh2OiBJbnB1dERhdGEpIHtcbiAgICAgICAgdGhpcy5faW5wdXQgPSB2O1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkVGFzaygpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmlucHV0LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbnN0cy5Mb2FkaW5nVHlwZS5ob21lOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZENmZ0ZpbGVzKHRoaXMudXBkYXRlUHJvZ0luZm8uYmluZCh0aGlzKSwgdGhpcy5vbkNvbmZpZ0xvYWRFbmQuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEdhbWVDb25zdHMuTG9hZGluZ1R5cGUuYmF0dGxlOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEJhdHRsZVJlcyh0aGlzLmlucHV0LnBhcmFtLCB0aGlzLnVwZGF0ZVByb2dJbmZvLmJpbmQodGhpcyksIHRoaXMub25UYXNrRW5kLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVQcm9nSW5mbyhwcm9nOiBudW1iZXIsIHRpcHM6IHN0cmluZyA9ICcnKSB7XG4gICAgICAgIHRoaXMuZW1pdChDMkZFbnVtLkV2ZW50LkNoYW5nZVZpZXdWYWx1ZSwgJ2JhckxvYWRpbmdQcm9ncmVzc0JhcicsIChiYXJMb2FkaW5nOiBjYy5Qcm9ncmVzc0JhcikgPT4ge1xuICAgICAgICAgICAgYmFyTG9hZGluZy5wcm9ncmVzcyA9IHByb2c7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVtaXQoQzJGRW51bS5FdmVudC5DaGFuZ2VWaWV3VmFsdWUsICdwcm9ncmVzc0xhYmVsJywgKHByb2dyZXNzTGFiZWw6IGNjLkxhYmVsKSA9PiB7XG4gICAgICAgICAgICBwcm9ncmVzc0xhYmVsLnN0cmluZyA9IChwcm9nICogMTAwKS50b0ZpeGVkKDEpICsgJyUnOztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW1pdChDMkZFbnVtLkV2ZW50LkNoYW5nZVZpZXdWYWx1ZSwgJ25vdGljZVRvcExhYmVsJywgKG5vdGljZVRvcExhYmVsOiBjYy5MYWJlbCkgPT4ge1xuICAgICAgICAgICAgbm90aWNlVG9wTGFiZWwuc3RyaW5nID0gdGlwcztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNvbmZpZ0xvYWRFbmQoKSB7XG4gICAgICAgIHN6Zy5wbGF5ZXIuY2ZnTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgLy/phY3nva7liqDovb3lrozmiJDmmK/nm7TmjqXov5vkuLvnlYzpnaLov5jmmK/mnInpnIDmsYLnm7TmjqXov5vmiJjmlpfku4DkuYjnmoTvvIzlj6/lnKjov5nph4zliIbmlK9cbiAgICAgICAgdGhpcy5sb2FkSG9tZVZpZXdSZXModGhpcy51cGRhdGVQcm9nSW5mby5iaW5kKHRoaXMpLCB0aGlzLm9uVGFza0VuZC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9uVGFza0VuZCgpIHtcbiAgICAgICAgdGhpcy5pbnB1dCAmJiB0aGlzLmlucHV0LmVuZENiICYmIHRoaXMuaW5wdXQuZW5kQ2IoKTtcbiAgICB9XG5cbiAgICAvL+S7u+WKocK35Yqg6L295ri45oiP6YWN572uXG4gICAgcHVibGljIGxvYWRDZmdGaWxlcyhwcm9nQ2I6IEZ1bmN0aW9uLCBjbXBsQ2I6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGxldCBhcnJUYXNrID0gW1xuICAgICAgICAgICAgeyBraW5kOiBMb2FkS2luZC5jc3YsIGRhdGE6IG51bGwgfSxcbiAgICAgICAgICAgIHsga2luZDogTG9hZEtpbmQuanNvbiwgZGF0YTogbnVsbCB9XG4gICAgICAgIF1cbiAgICAgICAgdGhpcy5kb0xpbmVUYXNrKGFyclRhc2ssIHByb2dDYiwgY21wbENiKTtcbiAgICB9XG5cbiAgICAvL+S7u+WKocK35Yqg6L295Li755WM6Z2iXG4gICAgcHVibGljIGxvYWRIb21lVmlld1Jlcyhwcm9nQ2I6IEZ1bmN0aW9uLCBjbXBsQ2I6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGxldCBhcnJUYXNrID0gW1xuICAgICAgICAgICAgeyBraW5kOiBMb2FkS2luZC5SZWREb3QsIGRhdGE6IG51bGwgfSxcbiAgICAgICAgICAgIHsga2luZDogTG9hZEtpbmQuaG9tZVZpZXcsIGRhdGE6IG51bGwgfSxcbiAgICAgICAgICAgIHsga2luZDogTG9hZEtpbmQuUmVzaWRlbnRSZXMsIGRhdGE6IG51bGwgfVxuICAgICAgICBdXG4gICAgICAgIHRoaXMuZG9MaW5lVGFzayhhcnJUYXNrLCBwcm9nQ2IsIGNtcGxDYik7XG4gICAgfVxuXG4gICAgLy/ku7vliqHCt+WKoOi9veaImOaWl+i1hOa6kFxuICAgIHB1YmxpYyBsb2FkQmF0dGxlUmVzKGRpcmVjdG9yOiBhbnksIHByb2dDYjogRnVuY3Rpb24sIGNtcGxDYjogRnVuY3Rpb24pIHtcbiAgICAgICAgbGV0IGFyclRhc2s6IFRhc2tJbmZvW10gPVxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHsga2luZDogTG9hZEtpbmQuYmF0QnVsbGV0LCBkYXRhOiBkaXJlY3RvciB9LFxuICAgICAgICAgICAgICAgIHsga2luZDogTG9hZEtpbmQuYmF0TW9uc3RlciwgZGF0YTogZGlyZWN0b3IgfSxcbiAgICAgICAgICAgICAgICB7IGtpbmQ6IExvYWRLaW5kLmJhdEhlcm8sIGRhdGE6IGRpcmVjdG9yIH0sXG4gICAgICAgICAgICAgICAgeyBraW5kOiBMb2FkS2luZC5iYXRFZmZlY3QsIGRhdGE6IGRpcmVjdG9yIH0sXG4gICAgICAgICAgICAgICAgeyBraW5kOiBMb2FkS2luZC5iYXRCZywgZGF0YTogZGlyZWN0b3IgfSxcbiAgICAgICAgICAgICAgICB7IGtpbmQ6IExvYWRLaW5kLmJhdFJvb20sIGRhdGE6IGRpcmVjdG9yIH0sXG4gICAgICAgICAgICAgICAgeyBraW5kOiBMb2FkS2luZC5iYXRBdWRpbywgZGF0YTogZGlyZWN0b3IgfSxcbiAgICAgICAgICAgICAgICB7IGtpbmQ6IExvYWRLaW5kLmJhdHRsZVZpZXcsIGRhdGE6IGRpcmVjdG9yIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICB0aGlzLmRvTGluZVRhc2soYXJyVGFzaywgcHJvZ0NiLCBjbXBsQ2IpO1xuICAgIH1cblxuICAgIC8v5Y2V57q/5omn6KGM5Lu75YqhXG4gICAgcHJpdmF0ZSBkb0xpbmVUYXNrKGFyclRhc2s6IFRhc2tJbmZvW10sIHByb2dDYjogRnVuY3Rpb24sIGNtcGxDYjogRnVuY3Rpb24pIHtcbiAgICAgICAgbGV0IHRhc2tGdW5jczogRnVuY3Rpb25bXSA9IHRoaXMuZ2V0VGFza0Z1bmNMaXN0KGFyclRhc2spO1xuICAgICAgICBsZXQgdGFza0NudCA9IHRhc2tGdW5jcy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKHRhc2tDbnQgPD0gMCkge1xuICAgICAgICAgICAgY21wbENiICYmIGNtcGxDYigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGlkeCA9IDA7XG4gICAgICAgICAgICBsZXQgb25lVGFza0NtcGwgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWR4Kys7XG4gICAgICAgICAgICAgICAgcnVuVGFzaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG9uZVRhc2tQcm9nID0gKGN1cjogbnVtYmVyLCB0b3RhbDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGJlZ2luUHJvZyA9IGlkeCAvIHRhc2tDbnQ7XG4gICAgICAgICAgICAgICAgbGV0IHN0ZXAgPSAxIC8gdGFza0NudDtcbiAgICAgICAgICAgICAgICBsZXQgc3ViUHJvZyA9IGN1ciAvIHRvdGFsO1xuICAgICAgICAgICAgICAgIGxldCB0b3RhbFByb2cgPSBiZWdpblByb2cgKyBzdGVwICogc3ViUHJvZztcbiAgICAgICAgICAgICAgICBwcm9nQ2IgJiYgcHJvZ0NiKHRvdGFsUHJvZyk7XG4gICAgICAgICAgICAgICAgaWYgKGN1ciA+PSB0b3RhbCkge1xuICAgICAgICAgICAgICAgICAgICBvbmVUYXNrQ21wbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBydW5UYXNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpZHggPj0gdGFza0Z1bmNzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvL+aJgOacieS7u+WKoeW3suWujOaIkFxuICAgICAgICAgICAgICAgICAgICBjbXBsQ2IgJiYgY21wbENiKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza0Z1bmNzW2lkeF0oYXJyVGFza1tpZHhdLmRhdGEsIG9uZVRhc2tQcm9nKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJ1blRhc2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v5Yqg6L295Ye95pWw5YiX6KGoXG4gICAgcHJpdmF0ZSBnZXRUYXNrRnVuY0xpc3QoYXJyVGFzazogVGFza0luZm9bXSkge1xuICAgICAgICBsZXQgZnVuY0xpc3Q6IEZ1bmN0aW9uW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgb25lIG9mIGFyclRhc2spIHtcbiAgICAgICAgICAgIHN3aXRjaCAob25lLmtpbmQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIExvYWRLaW5kLmNzdjpcbiAgICAgICAgICAgICAgICAgICAgZnVuY0xpc3QucHVzaCh0aGlzLmxvYWRDU1YuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgTG9hZEtpbmQuanNvbjpcbiAgICAgICAgICAgICAgICAgICAgZnVuY0xpc3QucHVzaCh0aGlzLmxvYWRKU09OLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIExvYWRLaW5kLlJlZERvdDpcbiAgICAgICAgICAgICAgICAgICAgZnVuY0xpc3QucHVzaCh0aGlzLmluaXRSZWREb3QuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgTG9hZEtpbmQuaG9tZVZpZXc6XG4gICAgICAgICAgICAgICAgICAgIGZ1bmNMaXN0LnB1c2godGhpcy5sb2FkSG9tZVZpZXcuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgTG9hZEtpbmQuUmVzaWRlbnRSZXM6XG4gICAgICAgICAgICAgICAgICAgIGZ1bmNMaXN0LnB1c2godGhpcy5sb2FkUmVzaWRlbnRSZXMuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgTG9hZEtpbmQuYmF0QnVsbGV0OlxuICAgICAgICAgICAgICAgICAgICBmdW5jTGlzdC5wdXNoKHRoaXMubG9hZEJhdHRsZUJ1bGxldC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBMb2FkS2luZC5iYXRNb25zdGVyOlxuICAgICAgICAgICAgICAgICAgICBmdW5jTGlzdC5wdXNoKHRoaXMubG9hZEJhdHRsZU1vbnN0ZXIuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgTG9hZEtpbmQuYmF0SGVybzpcbiAgICAgICAgICAgICAgICAgICAgZnVuY0xpc3QucHVzaCh0aGlzLmxvYWRCYXR0bGVIZXJvLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIExvYWRLaW5kLmJhdEVmZmVjdDpcbiAgICAgICAgICAgICAgICAgICAgZnVuY0xpc3QucHVzaCh0aGlzLmxvYWRCYXR0bGVFZmZlY3QuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgTG9hZEtpbmQuYmF0Um9vbTpcbiAgICAgICAgICAgICAgICAgICAgZnVuY0xpc3QucHVzaCh0aGlzLmxvYWRCYXR0bGVSb29tcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBMb2FkS2luZC5iYXRCZzpcbiAgICAgICAgICAgICAgICAgICAgZnVuY0xpc3QucHVzaCh0aGlzLmxvYWRCYXR0bGVCZy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBMb2FkS2luZC5iYXRBdWRpbzpcbiAgICAgICAgICAgICAgICAgICAgZnVuY0xpc3QucHVzaCh0aGlzLmxvYWRCYXR0bGVBdWRpby5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBMb2FkS2luZC5iYXR0bGVWaWV3OlxuICAgICAgICAgICAgICAgICAgICBmdW5jTGlzdC5wdXNoKHRoaXMubG9hZEJhdHRsZVZpZXcuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jTGlzdDtcbiAgICB9XG5cbiAgICAvL+WFt+S9k+WunueOsMK35Yqg6L296YWN572uXG4gICAgcHJpdmF0ZSBsb2FkQ1NWKGRhdGE6IGFueSwgcHJvZ0NiOiBGdW5jdGlvbikge1xuICAgICAgICBzemcuY2ZnLmxvYWRBbGxDU1YoKGN1cjogbnVtYmVyLCB0b3RhbDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBwcm9nQ2IgJiYgcHJvZ0NiKGN1ciwgdG90YWwpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvL+WFt+S9k+WunueOsMK35Yqg6L296YWN572uXG4gICAgcHJpdmF0ZSBsb2FkSlNPTihkYXRhOiBhbnksIHByb2dDYjogRnVuY3Rpb24pIHtcbiAgICAgICAgc3pnLmNmZy5sb2FkQWxsSnNvbigoY3VyOiBudW1iZXIsIHRvdGFsOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHByb2dDYiAmJiBwcm9nQ2IoY3VyLCB0b3RhbCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8v5YW35L2T5a6e546wwrfliqDovb3kuLvnlYzpnaLpooTliLZcbiAgICBwcml2YXRlIGxvYWRIb21lVmlldyhkYXRhOiBhbnksIHByb2dDYjogRnVuY3Rpb24pIHtcbiAgICAgICAgbGV0IHsgUmVzaWRlbnRSZXNNZ3IgfSA9IHJlcXVpcmUoJ1Jlc2lkZW50UmVzTWdyJyk7XG4gICAgICAgIFJlc2lkZW50UmVzTWdyLmlucy5sb2FkR2FtZUhvbWVQcmVmYWIoKHByZWZhYjogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICBwcm9nQ2IgJiYgcHJvZ0NiKDEsIDEpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8v5YW35L2T5a6e546wwrfliJ3lp4vljJbnuqLngrlcbiAgICBwcml2YXRlIGluaXRSZWREb3QoZGF0YTogYW55LCBwcm9nQ2I6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGxldCB7IFJlc2lkZW50UmVzTWdyIH0gPSByZXF1aXJlKCdSZXNpZGVudFJlc01ncicpO1xuICAgICAgICBSZXNpZGVudFJlc01nci5pbnMubG9hZFJlZERvdFByZWZhYigocHJlZmFiOiBjYy5QcmVmYWIpID0+IHtcbiAgICAgICAgICAgIHN6Zy5wbGF5ZXIucmVkRG90LmluaXRSZWREb3QocHJlZmFiKTtcbiAgICAgICAgICAgIHByb2dDYiAmJiBwcm9nQ2IoMSwgMSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy/lhbfkvZPlrp7njrDCt+WKoOi9veW4uOmpu+i1hOa6kFxuICAgIHByaXZhdGUgbG9hZFJlc2lkZW50UmVzKGRhdGE6IGFueSwgcHJvZ0NiOiBGdW5jdGlvbikge1xuICAgICAgICBsZXQgdG90YWwgPSAyO1xuICAgICAgICBsZXQgY3VyViA9IDA7XG4gICAgICAgIGxldCBsb2FkZWRPbmNlID0gKCkgPT4ge1xuICAgICAgICAgICAgcHJvZ0NiICYmIHByb2dDYihjdXJWLCB0b3RhbCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHsgUmVzaWRlbnRSZXNNZ3IgfSA9IHJlcXVpcmUoJ1Jlc2lkZW50UmVzTWdyJyk7XG4gICAgICAgIFJlc2lkZW50UmVzTWdyLmlucy5sb2FkQmF0dGxlU3RhcnRTcGluZSgoc3BEdDogc3AuU2tlbGV0b25EYXRhKSA9PiB7XG4gICAgICAgICAgICBjdXJWKys7XG4gICAgICAgICAgICBsb2FkZWRPbmNlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIFJlc2lkZW50UmVzTWdyLmlucy5pbml0TWFpblRlYW1SZXMoKCkgPT4ge1xuICAgICAgICAgICAgY3VyVisrO1xuICAgICAgICAgICAgbG9hZGVkT25jZSgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8v5YW35L2T5a6e546wwrfliqDovb3miJjmlpflrZDlvLlcbiAgICBwcml2YXRlIGxvYWRCYXR0bGVCdWxsZXQoZGlyZWN0b3I6IGFueSwgcHJvZ0NiOiBGdW5jdGlvbikge1xuICAgICAgICBkaXJlY3Rvci5wcmVsb2FkQnVsbGV0UmVzKChjdXI6IG51bWJlciwgdG90YWw6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgcHJvZ0NiICYmIHByb2dDYihjdXIsIHRvdGFsKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvL+WFt+S9k+WunueOsMK35Yqg6L295oiY5paX5YO15bC4XG4gICAgcHJpdmF0ZSBsb2FkQmF0dGxlTW9uc3RlcihkaXJlY3RvcjogYW55LCBwcm9nQ2I6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGRpcmVjdG9yLnByZWxvYWRNb25zdGVyUmVzKChjdXI6IG51bWJlciwgdG90YWw6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgcHJvZ0NiICYmIHByb2dDYihjdXIsIHRvdGFsKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvL+WFt+S9k+WunueOsMK35Yqg6L295oiY5paX6Iux6ZuEXG4gICAgcHJpdmF0ZSBsb2FkQmF0dGxlSGVybyhkaXJlY3RvcjogYW55LCBwcm9nQ2I6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGRpcmVjdG9yLnByZWxvYWRIZXJvUmVzKChjdXI6IG51bWJlciwgdG90YWw6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgcHJvZ0NiICYmIHByb2dDYihjdXIsIHRvdGFsKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvL+WFt+S9k+WunueOsMK35Yqg6L295oiY5paX54m55pWIXG4gICAgcHJpdmF0ZSBsb2FkQmF0dGxlRWZmZWN0KGRpcmVjdG9yOiBhbnksIHByb2dDYjogRnVuY3Rpb24pIHtcbiAgICAgICAgZGlyZWN0b3IucHJlbG9hZEVmZmVjdFJlcygoY3VyOiBudW1iZXIsIHRvdGFsOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHByb2dDYiAmJiBwcm9nQ2IoY3VyLCB0b3RhbCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy/lhbfkvZPlrp7njrDCt+WKoOi9veaImOaWl+eVjOmdoumihOWItlxuICAgIHByaXZhdGUgbG9hZEJhdHRsZVZpZXcoZGF0YTogYW55LCBwcm9nQ2I6IEZ1bmN0aW9uKSB7XG4gICAgICAgIC8vIGNvbnN0IHVpQ2ZnID0gVmlld0NmZ0RhdGFbVUlJRC5CYXR0bGVWaWV3XTtcbiAgICAgICAgLy8gWVQucmVzLmxvYWQoR2FtZUNvbnN0cy5CdW5kbGUuYmF0dGxlLCB1aUNmZy5wcmVmYWIsIFByZWZhYiwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgIC8vICAgICBwcm9nQ2IgJiYgcHJvZ0NiKDEsIDEpO1xuICAgICAgICAvLyB9KVxuICAgIH1cblxuICAgIC8v5YW35L2T5a6e546wwrfliqDovb3miJjmlpfmiL/pl7TpooTliLbkvZNcbiAgICBwcml2YXRlIGxvYWRCYXR0bGVSb29tcyhkaXJlY3RvcjogYW55LCBwcm9nQ2I6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGRpcmVjdG9yLnByZWxvYWRCYXRCZygoY3VyOiBudW1iZXIsIHRvdGFsOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHByb2dDYiAmJiBwcm9nQ2IoY3VyLCB0b3RhbCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy/lhbfkvZPlrp7njrDCt+WKoOi9veaImOaWl+iDjOaZr+WbvueJh+i1hOa6kFxuICAgIHByaXZhdGUgbG9hZEJhdHRsZUJnKGRpcmVjdG9yOiBhbnksIHByb2dDYjogRnVuY3Rpb24pIHtcbiAgICAgICAgZGlyZWN0b3IucHJlbG9hZFJvb21GcmFtZXMoKGN1cjogbnVtYmVyLCB0b3RhbDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBwcm9nQ2IgJiYgcHJvZ0NiKGN1ciwgdG90YWwpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8v5YW35L2T5a6e546wwrfliqDovb3miJjmlpfpn7PkuZDpn7PmlYhcbiAgICBwcml2YXRlIGxvYWRCYXR0bGVBdWRpbyhkaXJlY3RvcjogYW55LCBwcm9nQ2I6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGRpcmVjdG9yLnByZWxvYWRBdWRpb1JlcygoY3VyOiBudW1iZXIsIHRvdGFsOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHByb2dDYiAmJiBwcm9nQ2IoY3VyLCB0b3RhbCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbn0iXX0=