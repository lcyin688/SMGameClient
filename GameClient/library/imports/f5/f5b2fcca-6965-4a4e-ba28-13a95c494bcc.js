"use strict";
cc._RF.push(module, 'f5b2fzKaWVKTrooE6lcSUvM', 'Alert');
// c2f-framework/tbl/Alert.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = void 0;
var ccclass = cc._decorator.ccclass;
var Alert = /** @class */ (function () {
    function Alert() {
        this.queue = [];
    }
    Alert.getInstance = function () {
        if (!this._instance) {
            this._instance = new Alert();
        }
        return this._instance;
    };
    //private curPanel: DialoguePopup = null;
    Alert.prototype.getConfig = function (config) {
        var result = {};
        if (config.tag) {
            result.tag = config.tag;
        }
        if (config.text) {
            result.text = config.text;
        }
        if (config.title) {
            result.title = config.title;
        }
        if (config.confirmString) {
            result.confirmString = config.confirmString;
        }
        if (config.cancelString) {
            result.cancelString = config.cancelString;
        }
        if (config.richText) {
            result.richText = config.richText;
        }
        if (config.immediatelyCallback) {
            result.immediatelyCallback = config.immediatelyCallback;
        }
        if (config.isRepeat) {
            result.isRepeat = config.isRepeat;
        }
        return result;
    };
    /**显示弹出框 */
    Alert.prototype.show = function (config) {
        if (config.tag && config.isRepeat === false) {
            if (this.isRepeat(config.tag)) {
                console.warn("\u5F39\u51FA\u6846\u5DF2\u7ECF\u5B58\u5728 config : " + JSON.stringify(this.getConfig(config)));
                return false;
            }
        }
        this.queue.push(config);
        this._show(config);
        return true;
    };
    /**@description 当前显示的弹出框是否是tag */
    Alert.prototype.isCurrentShow = function (tag) {
        // if (this.curPanel) {
        //     let current = this.curPanel.model.config;
        //     if (current.tag == tag) {
        //         return true;
        //     }
        // }
        return false;
    };
    /**@description 获取当前显示弹出的配置 */
    Alert.prototype.currentShow = function (tag) {
        // if (this.curPanel) {
        //     let current = this.curPanel.model.config;
        //     if (tag) {
        //         if (current.tag == tag) {
        //             return current;
        //         }
        //     } else {
        //         return current;
        //     }
        // }
        return null;
    };
    /**@description 是否有该类型的弹出框 */
    Alert.prototype.isRepeat = function (tag) {
        // if (this.curPanel) {
        //     let current = this.curPanel.model.config;
        //     if (current.tag == tag) {
        //         console.warn(`重复的弹出框 config ; ${JSON.stringify(this.getConfig(current))}`)
        //         return true;
        //     }
        // } else {
        //     for (let i = 0; i < this.queue.length; i++) {
        //         let data = this.queue[i];
        //         if (data.tag == tag) {
        //             console.warn(`重复的弹出框 config ; ${JSON.stringify(this.getConfig(data))}`)
        //             return true;
        //         }
        //     }
        // }
        return false;
    };
    /**@description 关闭当前显示的
     * @param tag 可不传，关闭当前的弹出框，否则关闭指定tag的弹出框
     */
    Alert.prototype.close = function (tag) {
        // if (tag) {
        //     let j = this.queue.length;
        //     while (j--) {
        //         if (this.queue[j].tag == tag) {
        //             this.queue.splice(j, 1);
        //         }
        //     }
        //     if (this.curPanel) {
        //         let current = this.curPanel.model.config;
        //         if (current.tag == tag) {
        //             this.finishAlert();
        //         }
        //     }
        // } else {
        //     this.finishAlert();
        // }
    };
    Alert.prototype.closeAll = function () {
        this.queue = [];
        this.finishAlert();
    };
    Alert.prototype.finishAlert = function () {
        // if (this.curPanel) {
        //     this.curPanel.closeView();
        //     this.curPanel = null;
        // }
        var config = this.queue.shift();
        if (this.queue.length != 0) {
            this._show(this.queue[0]);
            return this.queue[0];
        }
        return config;
    };
    Alert.prototype._show = function (config) {
        // if (!this.curPanel) {
        //     let uic: PopViewParams = {
        //         onUIAdded: (node: cc.Node, params: any) => {
        //             // console.error(" onUIAdded params ", params)
        //             this.curPanel = node.getComponent(DialoguePopup)
        //         },
        //         onUIRemoved: (node: cc.Node, params: any) => {
        //             // console.error(" onUIRemoved  params", params)
        //         },
        //     }
        //     c2f.gui.open(MainPackUI.DialoguePopup, config, uic)
        // }
    };
    Alert._instance = null;
    return Alert;
}());
exports.Alert = Alert;
c2f.alert = Alert.getInstance();

cc._RF.pop();