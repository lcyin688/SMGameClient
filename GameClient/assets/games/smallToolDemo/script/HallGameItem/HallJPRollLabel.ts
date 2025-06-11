import HallJPRollMgr from './HallJPRollMgr';

const { ccclass, property } = cc._decorator;

@ccclass
export default class HallJPRollLabel extends cc.Component {
    private label: cc.Label = null;

    private gameId: number = -1;

    protected onLoad(): void {
        this.label = this.node.getComponent(cc.Label);
    }

    protected onDestroy(): void {
        HallJPRollMgr.deleteJPRoll(this.gameId);
    }

    public init(gameId: number): void {
        this.gameId = gameId;
        HallJPRollMgr.addJPRoll(gameId, this);
    }

    public updateJP(gameId: number, num: number): void {
        if (!cc.isValid(this.node) || !this.label) {
            return;
        }
        if (this.gameId != gameId) {
            return;
        }

        this.label.string = num.toString();
    }
}
