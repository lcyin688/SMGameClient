import { GameConsts } from '../../../Script/game/GameConsts';
import { C2FEnum } from '../../../c2f-framework/define/C2FEnum';
import { UIModelBase } from './../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class NoPlatLoginModel extends UIModelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'NoPlatLogin';

    /** 账号ID */
    private _accountId: string;
    public get accountId(): string {
        return this._accountId;
    }
    public set accountId(v: string) {
        this._accountId = v;
    }

    /** 模拟渠道标志 */
    private _sdkFlag: string;
    public get sdkFlag(): string {
        return this._sdkFlag;
    }
    public set sdkFlag(v: string) {
        this._sdkFlag = v;
    }

    /** 模拟充值标志 */
    private _payFlag: string;
    public get payFlag(): string {
        return this._payFlag;
    }
    public set payFlag(v: string) {
        this._payFlag = v;
    }

    public loadLastAccId() {
        let lastId: string = c2f.storage.getPlainItem(GameConsts.NoPlatLastAccId, '');
        if (lastId.length > 0) {
            this.accountId = lastId;

            this.emit(C2FEnum.Event.ChangeViewValue, 'userIdEditBox', (userIdEditBox: cc.EditBox) => {
                userIdEditBox.string = lastId;
            });
        }
    }

    public saveLoginInfo() {
        c2f.storage.setPlainItem(GameConsts.NoPlatLastAccId, this.accountId);
    }
}