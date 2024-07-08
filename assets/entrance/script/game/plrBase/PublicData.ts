/** 公共数据·不好划分模块的都放这里 */

import { GMConf } from "../../../../Script/config/GMConf";
import { GameConsts } from "../../../../Script/game/GameConsts";

export class PublicData {
    public isMouseDown: boolean;
    constructor() {
        this.reset();
    }
    public reset() {
        this.isMouseDown = false;
    }





}