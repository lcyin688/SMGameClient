import WESpriteIndex from '../../../entrance/script/extend/ui/WESpriteIndex';

const { ccclass, property } = cc._decorator;

@ccclass
export default class HallGroupItem extends cc.Component {
    @property(WESpriteIndex)
    public RC_unselectIcon: WESpriteIndex = null;

    @property(WESpriteIndex)
    public RC_selectIcon: WESpriteIndex = null;

    @property(cc.Node)
    public RC_select: cc.Node = null;
    @property(cc.Node)
    public RC_unselect: cc.Node = null;
    @property(sp.Skeleton)
    public RC_selectAnim: sp.Skeleton = null;
    public init(group: string): void {
        this.RC_selectIcon.setName(group + '_on');
        this.RC_unselectIcon.setName(group + '_off');
    }

    public setState(state: boolean) {
        if (this.RC_select) {
            this.RC_select.active = state;
        }
        if (this.RC_unselect) {
            this.RC_unselect.active = !state;
        }
        if (this.RC_selectAnim && state) {
            this.RC_selectAnim.setAnimation(0, 'animation', false);
        }
    }
}
