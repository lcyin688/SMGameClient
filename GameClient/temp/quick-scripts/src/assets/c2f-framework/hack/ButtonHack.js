"use strict";
cc._RF.push(module, '11aeeQHGvlOP6jJ8BO6X8yy', 'ButtonHack');
// c2f-framework/hack/ButtonHack.ts

"use strict";
// 基于CocosCreator2.x 按钮组件hack代码
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonState = exports.ButtonHackEvent = void 0;
var C2FConst_1 = require("../define/C2FConst");
var ButtonHackEvent;
(function (ButtonHackEvent) {
    /** 按钮状态变更 */
    ButtonHackEvent["STATE_CHANGE"] = "ButtonHackEvent-STATE_CHANGE";
})(ButtonHackEvent = exports.ButtonHackEvent || (exports.ButtonHackEvent = {}));
var ButtonState;
(function (ButtonState) {
    ButtonState[ButtonState["NORMAL"] = 0] = "NORMAL";
    ButtonState[ButtonState["HOVER"] = 1] = "HOVER";
    ButtonState[ButtonState["PRESSED"] = 2] = "PRESSED";
    ButtonState[ButtonState["DISABLED"] = 3] = "DISABLED";
})(ButtonState = exports.ButtonState || (exports.ButtonState = {}));
if (!CC_EDITOR) {
    if (!cc.Button.prototype["__$CCButtonHack$__"]) {
        cc.Button.prototype["__$CCButtonHack$__"] = true;
    }
    //@ts-ignore
    cc.Button.prototype.engineApplyTransition = cc.Button.prototype._applyTransition;
    //@ts-ignore
    cc.Button.prototype._applyTransition = function (state) {
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
        var curTick = (new Date()).getTime();
        var clickIntval = null;
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
        var sfx = this.node.getComponent('UIAudioEffect');
        if (sfx) {
            return;
        }
        var realName = this.node.name;
        if (realName.startsWith('_')) {
            realName = realName.substring(1);
        }
        if (realName.endsWith('_')) {
            realName = realName.substring(0, realName.length - 1);
        }
        var id = C2FConst_1.C2FConst.UIAudioID.common;
        if (C2FConst_1.C2FConst.closeBtnNames.indexOf(realName) >= 0) {
            id = C2FConst_1.C2FConst.UIAudioID.close;
        }
    };
}

cc._RF.pop();