import { Tbl } from "./Tbl";

const { ccclass } = cc._decorator;

declare global {
    interface ITbl { }
    interface IC2F {
        alert: Alert;
    }
}

export class Alert {
    private static _instance: Alert = null
    public static getInstance(): Alert {
        if (!this._instance) {
            this._instance = new Alert();
        }
        return this._instance;
    }
    private queue: AlertConfig[] = [];
    //private curPanel: DialoguePopup = null;


    private getConfig(config: AlertConfig) {
        let result: AlertConfig = {};
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
    }

    /**显示弹出框 */
    show(config: AlertConfig) {
        if (config.tag && config.isRepeat === false) {
            if (this.isRepeat(config.tag)) {
                console.warn(`弹出框已经存在 config : ${JSON.stringify(this.getConfig(config))}`);
                return false;
            }
        }
        this.queue.push(config);
        this._show(config);
        return true;


    }

    /**@description 当前显示的弹出框是否是tag */
    public isCurrentShow(tag: string | number) {
        // if (this.curPanel) {
        //     let current = this.curPanel.model.config;
        //     if (current.tag == tag) {
        //         return true;
        //     }
        // }
        return false;
    }

    /**@description 获取当前显示弹出的配置 */
    public currentShow(tag?: string | number) {
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
    }

    /**@description 是否有该类型的弹出框 */
    public isRepeat(tag: string | number) {
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
    }

    /**@description 关闭当前显示的 
     * @param tag 可不传，关闭当前的弹出框，否则关闭指定tag的弹出框
     */
    public close(tag?: string | number) {
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
    }

    public closeAll() {
        this.queue = [];
        this.finishAlert();
    }

    public finishAlert() {
        // if (this.curPanel) {
        //     this.curPanel.closeView();
        //     this.curPanel = null;
        // }

        let config = this.queue.shift();
        if (this.queue.length != 0) {
            this._show(this.queue[0]);
            return this.queue[0];
        }
        return config;
    }

    private _show(config: AlertConfig) {
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
    }

}

c2f.alert = Alert.getInstance();
