"use strict";
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