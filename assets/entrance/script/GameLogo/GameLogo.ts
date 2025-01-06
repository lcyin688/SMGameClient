import { UIVControlBase } from './../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../c2f-framework/define/C2FEnum';
import GameLogoModel from './GameLogoModel';
import GameLogoView from './GameLogoView';
import { PopViewParams } from '../../../c2f-framework/define/C2FUIDef';
import { EntranceUI } from '../EntranceView';
import { GameHelper } from '../../../Script/game/GameHelper';
import { GameConsts } from '../../../Script/game/GameConsts';
const { ccclass, property } = cc._decorator;
@ccclass
export default class GameLogo extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'GameLogo';

    public model: GameLogoModel = undefined;
    public view: GameLogoView = undefined;

    onEnable() {
        if (super.onEnable) {
            super.onEnable();
        }
        this.on(C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    }
    onDisable() {
        if (super.onDisable) {
            super.onDisable();
        }
        this.on(C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    }

    private async onButtonClick(eventType: string, component: cc.Button) {
        switch (component.name) {
            default:
                break;
        }
    }

    protected onViewOpen(param: any) {

    }


    protected onLoad(): void {
        if (super.onLoad) {
            super.onLoad();
        }
        cc.debug.setDisplayStats(false);
    }

    protected onDestroy(): void {
        super.onDestroy();
    }

    protected start(): void {
        this.startGame();
    }
    private startGame() {
        this.initLanguage();
    }

    private initLanguage() {
        c2f.language.initLanguage(this.playLogoAnima.bind(this));
        szg.player.initModules()
    }


    private playLogoAnima() {
        this.view.barProgressBar.progress = 0.1
        cc.tween(this.view.barProgressBar).to(0.3, { progress: 1 }).call(() => {
            this.openLoginView()
        }).start()
    }

    private openLoginView() {
        let uic: PopViewParams = {
            onUIAdded: (node: cc.Node, params: any) => {
                c2f.gui.remove(EntranceUI.GameLogo);
            },
        }
        // GameHelper.loadBundle(GameConsts.Bundle.boxGame).then(UIID => {
        //     c2f.gui.open(UIID.BoxGameMain, null, uic)
        // });

        c2f.gui.open(EntranceUI.GameLogin, null, uic);
        GameHelper.loadBundle(GameConsts.Bundle.mainPack).then(UIID => {
            c2f.gui.open(UIID.DesStarMain, null, uic)
        });


    }

}