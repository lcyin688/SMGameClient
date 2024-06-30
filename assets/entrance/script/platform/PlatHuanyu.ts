import { PlatNative } from "./PlatNative";

export class PlatHuanyu extends PlatNative {

    constructor() {
        super();
        this.sdkMapping = null;
        this.andClass = 'com.szGame.SZGProxy';
    }


}