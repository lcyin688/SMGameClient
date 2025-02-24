import { C2FConst } from "../../define/C2FConst";

const { ccclass, property, menu } = cc._decorator;
@ccclass
@menu('c2f/common/TabPage')
export default class TabPage extends cc.Component {

    @property(cc.SpriteFrame)
    private sfSelected: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    private sfUnSelect: cc.SpriteFrame = null;

    @property(cc.Color)
    private clrSelected: cc.Color = cc.Color.WHITE.clone();

    @property(cc.Color)
    private clrUnSelect: cc.Color = cc.Color.WHITE.clone();

    @property(cc.Color)
    private outClrSelected: cc.Color = cc.Color.BLACK.clone();

    @property(cc.Color)
    private outClrUnSelect: cc.Color = cc.Color.GRAY.clone();

    @property({ type: cc.Component.EventHandler })
    private togItemClick: cc.Component.EventHandler[] = [];

    /** 当前页签 */
    private curTab: string = null;
    /** 页签可否切换判断回调 */
    private switchCheckHandler: Function = null;

    protected start() {
    }

    /** 在隐藏状态切换tabpag后，显示时刷新UI */
    protected onEnable(): void {
        if (!this.curTab) {
            return;
        }
        let container = this.getComponent(cc.ToggleContainer);
        if (container) {
            container.updateTogglesUIStateOnly(this.curTab);
        }
    }

    private CC_onClickToggle(event) {
        //播放音效
        this.subBtnClicked(event.target.name);
    }

    /** subTog个数 */
    public setTabCount(count: number) {
        for (let i = 0; i < this.node.childrenCount; i++) {
            this.node.children[i].active = i < count;
        }
    }

    /** 添加响应事件 */
    public addClickHandler(handler: cc.Component.EventHandler) {
        this.togItemClick.push(handler);
    }

    /** 选中子Toggle */
    public subBtnClicked(subTitle: string, extend: any = undefined) {
        if (this.curTab == subTitle) {
            return;
        }
        let canSwitch = true;
        if (this.switchCheckHandler) {
            canSwitch = this.switchCheckHandler(subTitle);
            if (!canSwitch) {
                for (let i = 0; i < this.node.children.length; i++) {
                    let node = this.node.children[i];
                    let btnComp = node.getComponent(cc.Toggle);
                    if (btnComp && node.name == this.curTab) {
                        btnComp.check();
                        break;
                    }
                }
            }
        }
        if (canSwitch) {
            this.curTab = subTitle;
            this.setTabBtnState(subTitle);
            for (let one of this.togItemClick) {
                one.emit([subTitle, extend]);
            }
        }
    }

    //根据按钮名称设置按钮状态
    private setTabBtnState(name: string) {
        if (name == null) {
            return;
        }
        for (let i = 0; i < this.node.children.length; i++) {
            let node = this.node.children[i];
            let btnComp = node.getComponent(cc.Toggle);
            if (!btnComp) {
                continue;
            }
            let selected = name == node.name;
            let titleNode = c2f.utils.view.getFirstChildByName(node, 'txtTitle');
            if (titleNode) {
                titleNode.color = selected ? this.clrSelected : this.clrUnSelect;
                let outlineComp = titleNode.getComponent(cc.LabelOutline);
                if (outlineComp) {
                    outlineComp.color = selected ? this.outClrSelected : this.outClrUnSelect;
                }
            }

            let frame = selected ? this.sfSelected : this.sfUnSelect;
            if (frame) {
                node.getComponent(cc.Sprite).spriteFrame = frame;
            }
            btnComp.isChecked = selected;
        }
    }

    /** 快捷设置切换事件 */
    public quickSetTabHnadler(ower: cc.Component, handlerName: string) {
        let handler = new cc.Component.EventHandler();
        handler.target = ower.node;
        handler.component = c2f.utils.view.getComponentName(ower);
        handler.handler = handlerName;
        handler.customEventData = "";
        this.addClickHandler(handler);
    }

    /** 页签切换可用性回调 */
    public setSwitchCheckHandler(handler: Function) {
        this.switchCheckHandler = handler;
    }

}