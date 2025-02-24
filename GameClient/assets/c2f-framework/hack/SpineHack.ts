if (!CC_EDITOR) {
    if (!sp.Skeleton.prototype["__$CCSPSpineHack$__"]) {
        sp.Skeleton.prototype["__$CCSPSpineHack$__"] = true;

        sp.Skeleton.prototype.changeSkeletonData = async function (url: string, endCb: Function) {
            this.dynamicUrl = url;
            if (url == this.loadingUrl) {
                endCb && endCb();
            } else {
                let needReload = true;
                let curUuid = this.skeletonData ? this.skeletonData['_uuid'] : null;
                if (curUuid) {
                    let urlInfo = c2f.res.parseUrl(url);
                    let bundle: cc.AssetManager.Bundle = cc.assetManager.getBundle(urlInfo.bundle);
                    if (bundle) {
                        let resInfo = bundle.getInfoWithPath(urlInfo.loadUrl);
                        if (resInfo.uuid == curUuid) {
                            needReload = false;
                        }
                    }
                }
                if (needReload) {
                    this.loadingUrl = url;
                    let result = c2f.res.getRes(url, sp.SkeletonData) || await c2f.res.loadOne(url, sp.SkeletonData);
                    this.loadingUrl = "";
                    if (this.dynamicUrl != url || !result || !this.isValid) {
                        return;
                    }
                    if (this.skeletonData === result) {
                        endCb && endCb();
                        return;
                    }
                    result.addRef();
                    if (this.dynamicAsset) {
                        this.dynamicAsset.decRef();
                    }
                    this.dynamicAsset = result;
                    this.skeletonData = result;
                }
                endCb && endCb();
            }
        };

        //@ts-ignore
        sp.Skeleton.prototype.engineOnDestory = sp.Skeleton.prototype.onDestroy;
        //@ts-ignore
        sp.Skeleton.prototype.onDestroy = function () {
            if (this.dynamicAsset) {
                this.dynamicAsset.decRef(true);
                this.dynamicAsset = null;
            }
            this.dynamicUrl = '';
            this.loadingUrl = '';
            if (this.engineOnDestory) this.engineOnDestory();
        };
    }
}

declare module sp {
    interface Skeleton {
        dynamicAsset: any;
        dynamicUrl: string;
        loadingUrl: string;
        changeSkeletonData: (url: string) => void;
        engineOnDestory: () => void;
    }
}

export { };