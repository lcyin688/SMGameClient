// 基于CocosCreator2.x 按钮组件hack代码

import { C2FConst } from "../define/C2FConst";

export enum ButtonHackEvent {
    /** 按钮状态变更 */
    STATE_CHANGE = "ButtonHackEvent-STATE_CHANGE",
}

export enum ButtonState {
    NORMAL = 0,
    HOVER = 1,
    PRESSED = 2,
    DISABLED = 3,
}

if (!CC_EDITOR) {
    if (!cc.Button.prototype["__$CCButtonHack$__"]) {
        cc.Button.prototype["__$CCButtonHack$__"] = true;
    }

    //@ts-ignore
    cc.Button.prototype.engineApplyTransition = cc.Button.prototype._applyTransition;
    //@ts-ignore
    cc.Button.prototype._applyTransition = function (state: any) {
        if (this.engineApplyTransition) {
            this.engineApplyTransition(state);
        }
        if (this.node) {
            this.node.emit(ButtonHackEvent.STATE_CHANGE, state);
        }
    };


    //@ts-ignore
    cc.Button.prototype.engineOnTouchBegan = cc.Button.prototype._onTouchBegan;
    //@ts-ignore
    cc.Button.prototype._onTouchBegan = function (event) {
        //所有按钮统一添加点击间隔
        let curTick = (new Date()).getTime();
        let clickIntval = null;
        if (this.touchTick) {
            clickIntval = curTick - this.touchTick;
        }
        if (clickIntval && clickIntval < 300) {
            return;
        }
        this.touchTick = curTick;
        //engine
        if (this.engineOnTouchBegan) {
            this.engineOnTouchBegan(event);
        }
        //如果有UI特效组件则优先使用组件
        let sfx = this.node.getComponent('UIAudioEffect');
        if (sfx) {
            return;
        }
        let realName = this.node.name;
        if (realName.startsWith('_')) {
            realName = realName.substring(1);
        }
        if (realName.endsWith('_')) {
            realName = realName.substring(0, realName.length - 1);
        }
        let id = C2FConst.UIAudioID.common;
        if (C2FConst.closeBtnNames.indexOf(realName) >= 0) {
            id = C2FConst.UIAudioID.close;
        }
    };
}

declare module cc {
    interface Button {
        touchTick: number;
    }
}

export { };