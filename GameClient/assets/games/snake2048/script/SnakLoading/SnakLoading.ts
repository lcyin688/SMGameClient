import { UIVControlBase } from './../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import  SnakLoadingModel from './SnakLoadingModel';
import  SnakLoadingView from './SnakLoadingView';
import { Snake2048UI } from '../Snake2048View';
import { Snake2048Cfg } from '../Snake2048Cfg';
import { Snake2048Tools } from '../Snake2048Tools';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SnakLoading extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_SnakLoading';

    public model: SnakLoadingModel = undefined;
    public view: SnakLoadingView = undefined;
    
    private loadingTime: number = 1;
    private countTime: number = 0;
    private isNeedload: boolean = true; //防止多次加载
 
    protected onLoad(): void {


    }

    protected onViewOpen(param: any) {

        console.log( " 我来了 贪吃蛇 ");
    }


    protected onEnable(): void {
        cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE); 
        cc.view.setFrameSize(1280, 720);
        if (super.onEnable) {
            super.onEnable();
        }
        this.on(C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);

        // this.gameView.camera.node.getComponent(CameraFollow).enabled =false 
        // this.gameView.camera.node.setPosition( new cc.Vec3(0,0,0))
        this.view.progressBar.active = true;
        this.view.btnPlayButton.node.active = false;
        this.view.progressBarProgressBar.progress = 0;
        this.countTime=0
        this.isNeedload = true;

    }

    protected onDisable(): void {
        if (super.onDisable) {
            super.onDisable();
        }
        this.off(C2FEnum.UIEvent.ButtonClick);
    }

    private async onButtonClick(eventType: string, component: cc.Button) {
        switch (component.name){
            
            case this.view.btnPlayButton.name:
                this.CC_onClickbtnPlay();
                break;
                
            default:
                break;
        }
    } 
    
    private CC_onClickbtnPlay(){
         Snake2048Tools.playEffect(Snake2048Cfg.effect.click);
         this.node.active = false;
        c2f.gui.open(Snake2048UI.SnakMain)
        this.closeView()
    }
            



    protected update(dt: number): void {
        if (!this.isNeedload) {
            return
        }
        this.countTime += dt;
        let progress = Math.ceil((this.countTime / this.loadingTime) * 100);
        if (progress >= 100) {
            this.isNeedload = false;
            progress = 100;
            this.view.progressBar.active = false;
            this.view.btnPlay.active = true;
        } else {
            this.view.progressBarProgressBar.progress = progress / 100;
        }
    }





}