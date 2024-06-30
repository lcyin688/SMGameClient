import { EventMessage } from "./core/event/EventDefine";
import { GameTimer } from "./core/timer/GameTimer";
import { GUI } from "./gui/GUI";

const { ccclass, property } = cc._decorator;
@ccclass
export class App extends cc.Component {

    //UI根节点
    private root: cc.Node = null!;

    protected onLoad() {
    }

    public initApp(root: cc.Node) {
        this.root = root;
        c2f.gui.init(root);

        // 游戏显示事件
        cc.game.on(cc.game.EVENT_SHOW, () => {
            cc.log("Game.EVENT_SHOW");
            GameTimer.gameResume();
            c2f.timer.load();
            c2f.audio.resumeAll();
            cc.director.resume();
            cc.game.resume();
            c2f.event.emit(EventMessage.GAME_ENTER);
        });

        // 游戏隐藏事件
        cc.game.on(cc.game.EVENT_HIDE, () => {
            cc.log("Game.EVENT_HIDE");
            c2f.timer.save();     // 平台不需要在退出时精准计算时间，直接暂时游戏时间
            c2f.audio.pauseAll();
            cc.director.pause();
            cc.game.pause();
            c2f.event.emit(EventMessage.GAME_EXIT);
        });

        // 游戏尺寸修改事件
        let gui = this.root.addComponent(GUI)!;
        if (!cc.sys.isMobile) {
            cc.view.setResizeCallback(() => {
                gui.autoSize();
                c2f.event.emit(EventMessage.GAME_RESIZE);
            });
        }
    }
}