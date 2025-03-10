import { Snake2048Cfg } from "../Snake2048Cfg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FoodItem extends cc.Component {


    private id: number = null;

    configItem:Snake2048Cfg.ItemBlockType = null;
    socreLab: cc.Label = null;
    boxCol: cc.BoxCollider = null;
    state = Snake2048Cfg.FoodStateType.state;
    phyboxCol: cc.PhysicsBoxCollider = null;
    private rigibody:cc.RigidBody = null;

    onLoad() { 
        this.socreLab = this.node.getChildByName('lab').getComponent(cc.Label);
        this.boxCol = this.node.getComponent(cc.BoxCollider);
        this.setBoxTag(Snake2048Cfg.ItemColliderType.food)

        this.phyboxCol = this.node.getComponent(cc.PhysicsBoxCollider);
        this.setPhyBoxTag(Snake2048Cfg.ItemColliderType.food)

        this.setGroupTag(Snake2048Cfg.snakePhyTagConfig.Group1)
        this.rigibody = this.node.getComponent(cc.RigidBody);

    }

    public setGroupTag(tag:string){
        this.node.group =tag
    }

    setFoodState(type: Snake2048Cfg.FoodStateType) {
        this.state = type;
        if(type == Snake2048Cfg.FoodStateType.died) { 
            this.node.active = false;
        }else  {
            this.node.active = true;
        }

    }

    public setId(id: number) {
        this.id = id;
        this.configItem = Snake2048Cfg.snakeConfig[this.id];
        // this.node.name="food_"+this.configItem.score
        this.setSize(this.configItem.foodSize,this.configItem.foodSize)
        this.setStr();  
        let url =  Snake2048Cfg.ResUrl.FoodSp + this.configItem.spName;
        c2f.utils.view.changeSpriteFrame( this.node.getComponent(cc.Sprite),url)
    }

    public getId(): number {
        return this.id;
    }



    public setStr() {
        this.socreLab.string = this.configItem.score.toString();
        let clrTmp = cc.color(0, 0, 0);
        this.socreLab.node.color = clrTmp.fromHEX(this.configItem.colorStr).clone();
    }



    public setSize(width: number, height: number) {
        this.node.width = width;
        this.node.height = height;

        this.socreLab.node.width=width-8
        this.socreLab.node.height=width-8

        this.boxCol.size = cc.size(width, height);
    }


    public rotateHead(headPos) {
        let angle = cc.v2(1, 0).signAngle(headPos) * 180 / Math.PI-90;
        this.node.angle = angle  
    }

    public setBoxTag(typ: Snake2048Cfg.ItemColliderType) {
        this.boxCol.tag = typ
    }

    public setPhyBoxTag(typ: Snake2048Cfg.ItemColliderType) {
        if (this.phyboxCol) {
            this.phyboxCol.tag = typ
        }
    }

    public setRigidBodyState(state:boolean) {
        if (this.phyboxCol) {
            this.phyboxCol.enabled =state
        }
        if (this.rigibody) {
            this.rigibody.enabled =state
        }
    } 


}
