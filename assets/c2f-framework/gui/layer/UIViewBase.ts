import { C2FConst } from '../../define/C2FConst';
import { C2FEnum } from '../../define/C2FEnum';
import { UIPrefabBase } from './UIPrefabBase';


const { ccclass, property } = cc._decorator;
@ccclass
export class UIViewBase extends UIPrefabBase {

    //--------------UI对象-------------    
    /** 黑色底板 */
    private blackBg: cc.Node = null;
    /** 界面根节点 */
    private nodeUI: cc.Node = null;
    //---------------------------------

    /** 正在播放出(入)特效 */
    private _animaPlaying: boolean = false;
    public get animaPlaying(): boolean {
        return this._animaPlaying;
    }
    public set animaPlaying(v: boolean) {
        this._animaPlaying = v;
    }

    protected onLoad() {
        super.onLoad();
        this.initCommonUI();
    }

    protected onDestroy() {
        this.blackBg = null;
        this.nodeUI = null;
        super.onDestroy();
    }

    protected initProperty() {
        this.blackBg = cc.find('blackBg', this.node);
        this.nodeUI = cc.find('nodeUI', this.node);
    }

    protected initCommonUI() {
        if (this.blackBg) {
            this.blackBg.opacity = 0;
        }
        if (this.nodeUI) {
            this.nodeUI.opacity = 0;
        }
    }

    protected playInAnima() {
        const offsetY = -50;
        const upHeight = 10;
        const duration = 0.3;
        const delayDur = 0.02;
        this.animaPlaying = true;

        if (this.blackBg) {
            cc.tween(this.blackBg)
                .delay(delayDur)
                .set({ opacity: 127 })
                .to(duration, { opacity: C2FConst.UIBgOpacity })
                .start()
        }
        if (this.nodeUI) {
            cc.tween(this.nodeUI)
                .delay(delayDur)
                .call(() => {
                    this.nodeUI.opacity = 0;
                    this.nodeUI.setPosition(0, offsetY, 0);
                })
                .by(duration / 2, { position: cc.v3(0, -offsetY + upHeight, 0), opacity: 125 })
                .by(duration / 2, { position: cc.v3(0, -upHeight, 0), opacity: 130 })
                .call(() => {
                    this.emit(C2FEnum.Event.PopViewInAnimaCmpl);
                })
                .start();
        }
        if (this.blackBg || this.nodeUI) {
            this.scheduleOnce(() => {
                this.animaPlaying = false;
            }, duration + delayDur)
        } else {
            this.animaPlaying = false;
        }
    }

    protected playOutAnima(params: any, nextFunc: Function) {
        const offsetY = -100;
        const duration = 0.2;
        this.animaPlaying = true;

        if (this.nodeUI) {
            cc.tween(this.nodeUI)
                .by(duration, { position: cc.v3(0, offsetY, 0), opacity: -255 })
                .start();
        }
        if (this.blackBg) {
            cc.tween(this.blackBg)
                .to(duration, { opacity: 0 })
                .start()
        }
        let animaEnd = () => {
            this.animaPlaying = false;
            nextFunc && nextFunc();
        }
        if (this.nodeUI || this.blackBg) {
            this.scheduleOnce(animaEnd, duration)
        } else {
            animaEnd && animaEnd();
        }
    }

    protected onEnable() {
        if (super.onEnable) {
            super.onEnable();
        }
        this.on(C2FEnum.Event.ChangeViewValue, this.onChangeViewValue, this);
    }

    protected onDisable() {
        if (super.onDisable) {
            super.onDisable();
        }
        this.off(C2FEnum.Event.ChangeViewValue);
    }

    /**
     * 
     * @param msgType 消息类型
     * @param varName 变量名
     * @param cb 处理函数
     */
    private onChangeViewValue(msgType: string, varName: string, cb: Function) {
        cb?.(this[varName]);
    }
}
