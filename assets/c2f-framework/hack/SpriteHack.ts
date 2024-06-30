if (!CC_EDITOR) {
    if (!cc.Sprite.prototype["__$CCSpriteHack$__"]) {
        cc.Sprite.prototype["__$CCSpriteHack$__"] = true;

        cc.Sprite.prototype.changeSpriteFrame = async function (url: string, endCb: Function) {
            this.dynamicUrl = url;
            let result = c2f.res.getRes(url, cc.SpriteFrame) || await c2f.res.loadOne(url, cc.SpriteFrame);
            if (this.dynamicUrl != url || !result || !this.isValid) {
                return;
            }
            if (this.spriteFrame === result) {
                endCb && endCb();
                return;
            }
            result.addRef();
            if (this.dynamicAsset) {
                this.dynamicAsset.decRef();
            }
            this.dynamicAsset = result;
            this.spriteFrame = result;
            endCb && endCb();
        };

        cc.Sprite.prototype.changeSFWithAtlas = async function (url: string, subFile: string, endCb: Function) {
            this.dynamicUrl = url;
            let result: any = c2f.res.getRes(url, cc.SpriteAtlas) || await c2f.res.loadOne(url, cc.SpriteAtlas);
            if (this.dynamicUrl != url || !result || !this.isValid) {
                return;
            }
            let frame = result.getSpriteFrame(subFile);
            if (!frame) {
                return;
            }
            if (this.spriteFrame === frame) {
                endCb && endCb();
                return;
            }
            result.addRef();
            if (this.dynamicAsset) {
                this.dynamicAsset.decRef();
            }
            this.dynamicAsset = result;
            this.spriteFrame = frame;
            endCb && endCb();
        };


        //@ts-ignore
        cc.Sprite.prototype.engineOnDestory = cc.Sprite.prototype.onDestroy;
        //@ts-ignore
        cc.Sprite.prototype.onDestroy = function () {
            if (this.dynamicAsset) {
                this.dynamicAsset.decRef(true);
                this.dynamicAsset = null;
            }
            this.dynamicUrl = '';
            if (this.engineOnDestory) this.engineOnDestory();
        };
    }
}

declare module cc {
    interface Sprite {
        dynamicAsset: any;
        dynamicUrl: string;
        changeSpriteFrame: (url: string) => void;
        engineOnDestory: () => void;
    }
}

export { };