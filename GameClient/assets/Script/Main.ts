import { GameConsts } from "./game/GameConsts";
import { GameHelper } from "./game/GameHelper";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    /** 界面层节点 */
    @property({ type: cc.Node, tooltip: "界面层" })
    gui: cc.Node = null!;

    protected onLoad(): void {
        cc.assetManager.loadBundle(GameConsts.Bundle.framework, this.afterLoadFW.bind(this));
    }

    private afterLoadFW() {
        c2f.initFW();
        let app = this.node.addComponent('App');
        if (app) {
            app.initApp(this.gui);;
        }
        this.runApp();
    }

    private runApp() {
        this.runGame();
    }

    private runGame() {
        GameHelper.loadBundle(GameConsts.Bundle.entrance).then(UIID => {
            c2f.gui.open(UIID.GameLogo);
        });
    }
}
