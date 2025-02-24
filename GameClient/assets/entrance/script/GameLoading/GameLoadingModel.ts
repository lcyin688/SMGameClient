import { GameConsts } from '../../../Script/game/GameConsts';
import { C2FEnum } from '../../../c2f-framework/define/C2FEnum';
import { UIModelBase } from './../../../c2f-framework/gui/layer/UIModelBase';

interface InputData {
    type: GameConsts.LoadingType;
    endCb: Function;
    param: any;
}

enum LoadKind {
    csv = 1,        //策划配置
    json = 2,       //其他配置
    homeView,       //主界面
    RedDot,         //红点系统
    ResidentRes,    //常驻资源
    batBullet,      //战斗子弹资源
    batMonster,     //战斗僵尸
    batHero,        //战斗英雄
    batEffect,      //战斗特效
    batBg,          //战斗背景
    batRoom,        //房间资源
    batAudio,       //战斗音乐音效
    battleView,     //战斗界面
}

class TaskInfo {
    kind: LoadKind;
    data: any;
}

const { ccclass, property } = cc._decorator;
@ccclass
export default class GameLoadingModel extends UIModelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'GameLoading';

    private _input: InputData;
    public get input(): InputData {
        return this._input;
    }
    public set input(v: InputData) {
        this._input = v;
    }

    public loadTask() {
        switch (this.input.type) {
            case GameConsts.LoadingType.home:
                this.loadCfgFiles(this.updateProgInfo.bind(this), this.onConfigLoadEnd.bind(this));
                break;
            case GameConsts.LoadingType.battle:
                this.loadBattleRes(this.input.param, this.updateProgInfo.bind(this), this.onTaskEnd.bind(this));
                break;
        }
    }

    private updateProgInfo(prog: number, tips: string = '') {
        this.emit(C2FEnum.Event.ChangeViewValue, 'barLoadingProgressBar', (barLoading: cc.ProgressBar) => {
            barLoading.progress = prog;
        });
        this.emit(C2FEnum.Event.ChangeViewValue, 'progressLabel', (progressLabel: cc.Label) => {
            progressLabel.string = (prog * 100).toFixed(1) + '%';;
        });
        this.emit(C2FEnum.Event.ChangeViewValue, 'noticeTopLabel', (noticeTopLabel: cc.Label) => {
            noticeTopLabel.string = tips;
        });
    }

    private onConfigLoadEnd() {
        szg.player.cfgLoaded = true;
        //配置加载完成是直接进主界面还是有需求直接进战斗什么的，可在这里分支
        this.loadHomeViewRes(this.updateProgInfo.bind(this), this.onTaskEnd.bind(this));
    }

    private async onTaskEnd() {
        this.input && this.input.endCb && this.input.endCb();
    }

    //任务·加载游戏配置
    public loadCfgFiles(progCb: Function, cmplCb: Function) {
        let arrTask = [
            { kind: LoadKind.csv, data: null },
            { kind: LoadKind.json, data: null }
        ]
        this.doLineTask(arrTask, progCb, cmplCb);
    }

    //任务·加载主界面
    public loadHomeViewRes(progCb: Function, cmplCb: Function) {
        let arrTask = [
            { kind: LoadKind.RedDot, data: null },
            { kind: LoadKind.homeView, data: null },
            { kind: LoadKind.ResidentRes, data: null }
        ]
        this.doLineTask(arrTask, progCb, cmplCb);
    }

    //任务·加载战斗资源
    public loadBattleRes(director: any, progCb: Function, cmplCb: Function) {
        let arrTask: TaskInfo[] =
            [
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
    }

    //单线执行任务
    private doLineTask(arrTask: TaskInfo[], progCb: Function, cmplCb: Function) {
        let taskFuncs: Function[] = this.getTaskFuncList(arrTask);
        let taskCnt = taskFuncs.length;

        if (taskCnt <= 0) {
            cmplCb && cmplCb();
        } else {
            let idx = 0;
            let oneTaskCmpl = () => {
                idx++;
                runTask();
            }
            let oneTaskProg = (cur: number, total: number) => {
                let beginProg = idx / taskCnt;
                let step = 1 / taskCnt;
                let subProg = cur / total;
                let totalProg = beginProg + step * subProg;
                progCb && progCb(totalProg);
                if (cur >= total) {
                    oneTaskCmpl();
                }
            }
            let runTask = () => {
                if (idx >= taskFuncs.length) {
                    //所有任务已完成
                    cmplCb && cmplCb();
                } else {
                    taskFuncs[idx](arrTask[idx].data, oneTaskProg)
                }
            }
            runTask();
        }
    }

    //加载函数列表
    private getTaskFuncList(arrTask: TaskInfo[]) {
        let funcList: Function[] = [];
        for (let one of arrTask) {
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
    }

    //具体实现·加载配置
    private loadCSV(data: any, progCb: Function) {
        szg.cfg.loadAllCSV((cur: number, total: number) => {
            progCb && progCb(cur, total);
        });
    }

    //具体实现·加载配置
    private loadJSON(data: any, progCb: Function) {
        szg.cfg.loadAllJson((cur: number, total: number) => {
            progCb && progCb(cur, total);
        });
    }

    //具体实现·加载主界面预制
    private loadHomeView(data: any, progCb: Function) {
        let { ResidentResMgr } = require('ResidentResMgr');
        ResidentResMgr.ins.loadGameHomePrefab((prefab: cc.Prefab) => {
            progCb && progCb(1, 1);
        })
    }

    //具体实现·初始化红点
    private initRedDot(data: any, progCb: Function) {
        let { ResidentResMgr } = require('ResidentResMgr');
        ResidentResMgr.ins.loadRedDotPrefab((prefab: cc.Prefab) => {
            szg.player.redDot.initRedDot(prefab);
            progCb && progCb(1, 1);
        })
    }

    //具体实现·加载常驻资源
    private loadResidentRes(data: any, progCb: Function) {
        let total = 2;
        let curV = 0;
        let loadedOnce = () => {
            progCb && progCb(curV, total);
        }
        let { ResidentResMgr } = require('ResidentResMgr');
        ResidentResMgr.ins.loadBattleStartSpine((spDt: sp.SkeletonData) => {
            curV++;
            loadedOnce();
        })
        ResidentResMgr.ins.initMainTeamRes(() => {
            curV++;
            loadedOnce();
        })
    }

    //具体实现·加载战斗子弹
    private loadBattleBullet(director: any, progCb: Function) {
        director.preloadBulletRes((cur: number, total: number) => {
            progCb && progCb(cur, total);
        })
    }

    //具体实现·加载战斗僵尸
    private loadBattleMonster(director: any, progCb: Function) {
        director.preloadMonsterRes((cur: number, total: number) => {
            progCb && progCb(cur, total);
        })
    }

    //具体实现·加载战斗英雄
    private loadBattleHero(director: any, progCb: Function) {
        director.preloadHeroRes((cur: number, total: number) => {
            progCb && progCb(cur, total);
        })
    }

    //具体实现·加载战斗特效
    private loadBattleEffect(director: any, progCb: Function) {
        director.preloadEffectRes((cur: number, total: number) => {
            progCb && progCb(cur, total);
        })
    }

    //具体实现·加载战斗界面预制
    private loadBattleView(data: any, progCb: Function) {
        // const uiCfg = ViewCfgData[UIID.BattleView];
        // YT.res.load(GameConsts.Bundle.battle, uiCfg.prefab, Prefab, (err, res) => {
        //     progCb && progCb(1, 1);
        // })
    }

    //具体实现·加载战斗房间预制体
    private loadBattleRooms(director: any, progCb: Function) {
        director.preloadBatBg((cur: number, total: number) => {
            progCb && progCb(cur, total);
        })
    }

    //具体实现·加载战斗背景图片资源
    private loadBattleBg(director: any, progCb: Function) {
        director.preloadRoomFrames((cur: number, total: number) => {
            progCb && progCb(cur, total);
        })
    }

    //具体实现·加载战斗音乐音效
    private loadBattleAudio(director: any, progCb: Function) {
        director.preloadAudioRes((cur: number, total: number) => {
            progCb && progCb(cur, total);
        })
    }


}