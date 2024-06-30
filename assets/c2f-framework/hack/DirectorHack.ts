

if (!CC_EDITOR) {
    if (!cc.Director.prototype["__$CCDirectorSpeed$__"]) {
        cc.Director.prototype["__$CCDirectorSpeed$__"] = true;

        //@ts-ignore
        cc.director.calculateDeltaTime = function (now: number) {
            if (!now) now = performance.now();

            this._deltaTime = now > this._lastUpdate ? (now - this._lastUpdate) / 1000 : 0;
            if (CC_DEBUG && (this._deltaTime > 1)) {
                this._deltaTime = 1 / 60.0;
            }

            //@ts-ignore
            this._deltaTime *= cc.director.globalGameTimeScale;
            this._lastUpdate = now;
        };

        cc.js.mixin(cc.Director.prototype, { globalGameTimeScale: 1, });
    }
}

declare module cc {
    interface Director {
        globalGameTimeScale: number;
    }
}

export { };