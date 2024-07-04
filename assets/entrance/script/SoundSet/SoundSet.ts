import { UIVControlBase } from './../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../c2f-framework/define/C2FEnum';
import SoundSetModel from './SoundSetModel';
import SoundSetView from './SoundSetView';
import { UIHelper } from '../../../Script/game/UIHelper';
import { GameConsts } from '../../../Script/game/GameConsts';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SoundSet extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'V_SoundSet';

    public model: SoundSetModel = undefined;
    public view: SoundSetView = undefined;

    protected onEnable(): void {
        if (super.onEnable) {
            super.onEnable();
        }
        this.on(C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    }

    protected onDisable(): void {
        if (super.onDisable) {
            super.onDisable();
        }
        this.off(C2FEnum.UIEvent.ButtonClick);
    }

    private async onButtonClick(eventType: string, component: cc.Button) {
        switch (component.name) {

            case this.view.soundBgButton.name:
                this.CC_onClicksoundBg();
                break;

            case this.view.soundEffButton.name:
                this.CC_onClicksoundEff();
                break;


            case this.view.btnCloseButton.name:
                this.CC_onClickbtnClose();
                break;

            default:
                break;
        }
    }

    private CC_onClickbtnClose() {
        UIHelper.playEffect('betClick');
        this.closeView();
    }


    protected onViewOpen(param: any) {
        let soundEffCloseState = c2f.storage.getBoolean(GameConsts.StorageKey.soundEff)
        let soundBgCloseState = c2f.storage.getBoolean(GameConsts.StorageKey.soundBg)
        this.setSoundBgState(soundEffCloseState)
        this.setSoundEffState(soundBgCloseState)
    }

    private setSoundBgState(state: boolean) {
        let url = state ? GameConsts.ResUrl.entrance + "btn_shengyin2" : GameConsts.ResUrl.entrance + "btn_shengyin1"
        c2f.utils.view.changeSpriteFrame(this.view.soundBgSprite, url)
    }

    private setSoundEffState(state: boolean) {
        let url = state ? GameConsts.ResUrl.entrance + "btn_shengyin2" : GameConsts.ResUrl.entrance + "btn_shengyin1"
        c2f.utils.view.changeSpriteFrame(this.view.soundEffSprite, url)
    }

    private CC_onClicksoundBg() {
        let soundBgCloseState = c2f.storage.getBoolean(GameConsts.StorageKey.soundBg)
        this.setSoundBgState(!soundBgCloseState)
        c2f.storage.set(GameConsts.StorageKey.soundBg, !soundBgCloseState);
    }


    private CC_onClicksoundEff() {
        let state = c2f.storage.getBoolean(GameConsts.StorageKey.soundEff)
        this.setSoundBgState(!state)
        c2f.storage.set(GameConsts.StorageKey.soundEff, !state);
    }

}