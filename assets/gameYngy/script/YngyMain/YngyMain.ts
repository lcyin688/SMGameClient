import { UIVControlBase } from './../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../c2f-framework/define/C2FEnum';
import YngyMainModel from './YngyMainModel';
import YngyMainView from './YngyMainView';
import { YngyCfg } from '../YngyCfg';
import { UIPa } from '../../../Script/game/UIParam';
import { GameConsts } from '../../../Script/game/GameConsts';

const { ccclass, property } = cc._decorator;
@ccclass
export default class YngyMain extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_YngyMain';

    public model: YngyMainModel = undefined;
    public view: YngyMainView = undefined;

    protected onViewOpen(param: any) {
    }


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

            case this.view.btnMenuButton.name:
                this.CC_onClickbtnMenu();
                break;

            default:
                break;
        }
    }

    private CC_onClickbtnMenu() {
        this.closeView();
    }
    start() {
        this.loadLevel(1);
    }
    /**
 * 加载关卡
 * @param lv 
 */
    loadLevel(lv: number) {
        this.model.initDataByLv(lv, this.clickCard.bind(this))

    }

    private clickCard(data: UIPa.YngyItemArgs, nodeItem: cc.Node) {
        if (data.hideState) {
            return;
        }
        if (data.state == UIPa.YngyItemArgsStates.Alive) {
            data.state = UIPa.YngyItemArgsStates.Dead;
            // 倒序插入到选择数组
            let index = 0;
            for (let i = 0; i < this.model.selectedPool.length; i++) {
                if (this.model.selectedPool[i].typ == data.typ) {
                    index = i;
                    break;
                }
                index = i + 1;
            }
            this.model.selectedPool.splice(index, 0, data);
            // 移入动效
            let pad = GameConsts.YngyConst.ItemWidthHeight
            let targetPos = new cc.Vec3(
                index * pad + pad / 2,
                0
            );
            nodeItem.parent = this.view.selectedNode;
            cc.tween(nodeItem).stop();
            cc.tween(nodeItem).delay(0.05).to(0.35, {
                position: parentTransform.convertToNodeSpaceAR(this.selectedNode.getComponent(UITransform).convertToWorldSpaceAR(targetPos))
            }, {
                onComplete: () => {
                    // 地图数据删除
                    for (let i = 0; i < this.levelData[layer].length; i += 1) {
                        if (this.levelData[layer][i][0] == nodeInfo.x && this.levelData[layer][i][1] == nodeInfo.y) {
                            this.levelData[layer].splice(i, 1);
                            break;
                        }
                    }
                    // 已选择数据三消
                    let cntMap: { [key: number]: number } = {};
                    for (let i = 0; i < this.selectedPool.length; i += 1) {
                        if (!cntMap[this.selectedPool[i][1]]) {
                            cntMap[this.selectedPool[i][1]] = 1;
                        } else {
                            cntMap[this.selectedPool[i][1]] += 1;
                        }
                        if (cntMap[this.selectedPool[i][1]] == 3) {
                            // 向前删除3个
                            for (let j = 0; j < 3; j += 1) {
                                // 动效
                                tween(this.selectedPool[i - 3 + 1][0].node).delay(0.1).to(0.3, {
                                    scale: new Vec3(0, 0, 1)
                                }, {
                                    onComplete: (target) => {
                                        let node = target as Node;
                                        if (j == 0) {
                                            // 后方节点前移
                                            for (let j = i + 1; j < this.selectedPool.length; j += 1) {
                                                let forwardNodeInfo = this.selectedPool[j][0];
                                                targetPos = new Vec3(
                                                    j * pad - width / 2 + pad / 2,
                                                    0,
                                                    forwardNodeInfo.node.position.z
                                                );
                                                tween(forwardNodeInfo.node).stop();
                                                tween(forwardNodeInfo.node).to(0.3, {
                                                    position: parentTransform.convertToNodeSpaceAR(this.selectedNode.getComponent(UITransform).convertToWorldSpaceAR(targetPos))
                                                }).start();
                                            }
                                        }
                                    }
                                }).start();
                                // 数据删除
                                this.selectedPool.splice(i - 3 + 1, 1);
                            }
                            i -= 3;
                            //
                        }
                    }
                    // 刷新遮挡
                    this.cardNodes.forEach(nodeInfo => nodeInfo.refreshCoverState(0.5, this.levelData));
                    // 判定胜负
                    if (this.selectedPool.length > col) {
                        log("lose");
                        this.restartNode.active = true;
                        this.restartNode.children[0].active = false;
                        this.restartNode.children[1].active = true;
                    }
                    if (this.levelData.every(v => v.length == 0)) {
                        log("win");
                        this.restartNode.active = true;
                        this.restartNode.children[0].active = true;
                        this.restartNode.children[1].active = false;
                    }
                }
            }).start();
            // 后退动效
            // for (let i = index + 1; i < this.selectedPool.length; i += 1) {
            //     let forwardNodeInfo = this.selectedPool[i][0];
            //     targetPos = new cc.Vec3(
            //         i * pad - width / 2 + pad / 2,
            //         0,
            //         forwardNodeInfo.node.position.z
            //     );
            //     tween(forwardNodeInfo.node).stop();
            //     tween(forwardNodeInfo.node).to(0.3, {
            //         position: parentTransform.convertToNodeSpaceAR(this.selectedNode.getComponent(UITransform).convertToWorldSpaceAR(targetPos))
            //     }).start();
            // }
        }
    }

    clickRestart() {
        // this.restartNode.active = false;
        // this.cardNodes = [];
        // this.selectedPool = [];
        // this.levelData = [];
        // this.levelNode.removeAllChildren();
        // this.selectedNode.removeAllChildren();
        this.loadLevel(1);
    }




}