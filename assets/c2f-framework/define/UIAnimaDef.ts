const { ccclass, property } = cc._decorator;

export enum UIAnimaType {
    none = 0,
    move = 1,
    scale = 2,
    opacity = 3,
    ratation = 4,
    function = 5,
    delay = 6,
}

@ccclass("UIAnimaFunc")
export class UIAnimaFunc {

    @property(cc.Node)
    tarNode: cc.Node = null;

    @property()
    compName: string = '';

    @property()
    funcName: string = '';
}


@ccclass("UIAnimaParam")
export class UIAnimaParam {
    @property({ type: cc.Enum(UIAnimaType) })
    animaTp = UIAnimaType.none;

    @property({ visible() { return this.animaTp === UIAnimaType.move || this.animaTp === UIAnimaType.scale; } })
    byVec2: cc.Vec2 = cc.v2(0, 0);

    @property({ visible() { return this.animaTp === UIAnimaType.opacity || this.animaTp === UIAnimaType.ratation } })
    byNum: number = 0;

    @property({ type: UIAnimaFunc, visible() { return this.animaTp === UIAnimaType.function; } })
    cbHandler: UIAnimaFunc = new UIAnimaFunc();
}

@ccclass("UIAnimaOnce")
export class UIAnimaOnce {

    @property()
    duration: number = 0;

    @property(UIAnimaParam)
    animaList: UIAnimaParam[] = [];
}

@ccclass("UIAnimaTarget")
export class UIAnimaTarget {

    @property(cc.Node)
    tarNode: cc.Node = null;

    @property(UIAnimaOnce)
    actionList: UIAnimaOnce[] = [];
}