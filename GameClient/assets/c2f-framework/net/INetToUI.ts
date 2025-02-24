/** 网络显示UI */

export interface INetToUI {
    /** 显示等待界面 */
    showWaitUI(): void;
    /** 隐藏等待界面 */
    hideWaitUI(): void;
    /** 显示网络错误信息 */
    showErrorMsg(code: number): void;
    /** 是否已打开重新登录提示框 */
    isOpenReloginView(): boolean;
    /** 显示重新登录界面 */
    showReloginView(): void;
} 