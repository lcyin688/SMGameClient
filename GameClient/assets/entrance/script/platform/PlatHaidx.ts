import { PlatNative } from "./PlatNative";

export class PlatHaidx extends PlatNative {

    constructor() {
        super();
        this.sdkMapping = null;
        this.andClass = 'com.szGame.SZGProxy';
        this.iosClass = 'HaidxSDKHelper';
    }

    protected loadLocalSetting() {
        super.loadLocalSetting();
        this.supportAccountCenter = true;
        this.supportFacebook = true;
        this.showPolicies = false;
        this.showUserAgreement = false;
    }
}