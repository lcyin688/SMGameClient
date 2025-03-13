import { INetToUI } from "../../c2f-framework/net/INetToUI";
import { UIHelper } from "./UIHelper";

/** 网络相关UI显示*/

export class UINetwork implements INetToUI {

    /** 显示等待界面 */
    public showWaitUI() {
        c2f.gui.showLoading();
    }

    /** 隐藏等待界面 */
    public hideWaitUI() {
        c2f.gui.hideLoading();
    }

    /** 显示网络错误信息 */
    public showErrorMsg(code: number) {
        UIHelper.showNetError(code);
    }

    /** 是否已打开重新登录提示框 */
    public isOpenReloginView() {
        let { EntranceUI } = require('EntranceView')
        return c2f.gui.has(EntranceUI.ReloginDialog);
    }

    /** 显示重新登录界面 */
    public showReloginView() {
        c2f.gui.hideLoading(true);
        // szg.entrance.reLogin(
        //     (op: number, data: msg.GW_Login) => {
        //         let isSuccess = data.ErrorCode === undefined || data.ErrorCode === 0;
        //         if (isSuccess) {
        //             c2f.gui.notifyTxt('511');
        //             c2f.net.startHeartbeat();
        //         } else {
        //             UIHelper.showNetError(data.ErrorCode);
        //         }
        //     },
        //     () => {
        //         c2f.gui.notifyTxt('512');
        //     });
    }
}
