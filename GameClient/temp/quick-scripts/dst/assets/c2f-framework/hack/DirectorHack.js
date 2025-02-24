
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/hack/DirectorHack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c4e23hBPA9GoJDOigAPaTyD', 'DirectorHack');
// c2f-framework/hack/DirectorHack.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (!CC_EDITOR) {
    if (!cc.Director.prototype["__$CCDirectorSpeed$__"]) {
        cc.Director.prototype["__$CCDirectorSpeed$__"] = true;
        //@ts-ignore
        cc.director.calculateDeltaTime = function (now) {
            if (!now)
                now = performance.now();
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

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2hhY2svRGlyZWN0b3JIYWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxDQUFDLFNBQVMsRUFBRTtJQUNaLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO1FBQ2pELEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRXRELFlBQVk7UUFDWixFQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixHQUFHLFVBQVUsR0FBVztZQUNsRCxJQUFJLENBQUMsR0FBRztnQkFBRSxHQUFHLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRWxDLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvRSxJQUFJLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQzthQUM5QjtZQUVELFlBQVk7WUFDWixJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUM7WUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDM0IsQ0FBQyxDQUFDO1FBRUYsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ25FO0NBQ0oiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaWYgKCFDQ19FRElUT1IpIHtcbiAgICBpZiAoIWNjLkRpcmVjdG9yLnByb3RvdHlwZVtcIl9fJENDRGlyZWN0b3JTcGVlZCRfX1wiXSkge1xuICAgICAgICBjYy5EaXJlY3Rvci5wcm90b3R5cGVbXCJfXyRDQ0RpcmVjdG9yU3BlZWQkX19cIl0gPSB0cnVlO1xuXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBjYy5kaXJlY3Rvci5jYWxjdWxhdGVEZWx0YVRpbWUgPSBmdW5jdGlvbiAobm93OiBudW1iZXIpIHtcbiAgICAgICAgICAgIGlmICghbm93KSBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICAgICAgICAgICAgdGhpcy5fZGVsdGFUaW1lID0gbm93ID4gdGhpcy5fbGFzdFVwZGF0ZSA/IChub3cgLSB0aGlzLl9sYXN0VXBkYXRlKSAvIDEwMDAgOiAwO1xuICAgICAgICAgICAgaWYgKENDX0RFQlVHICYmICh0aGlzLl9kZWx0YVRpbWUgPiAxKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlbHRhVGltZSA9IDEgLyA2MC4wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIHRoaXMuX2RlbHRhVGltZSAqPSBjYy5kaXJlY3Rvci5nbG9iYWxHYW1lVGltZVNjYWxlO1xuICAgICAgICAgICAgdGhpcy5fbGFzdFVwZGF0ZSA9IG5vdztcbiAgICAgICAgfTtcblxuICAgICAgICBjYy5qcy5taXhpbihjYy5EaXJlY3Rvci5wcm90b3R5cGUsIHsgZ2xvYmFsR2FtZVRpbWVTY2FsZTogMSwgfSk7XG4gICAgfVxufVxuXG5kZWNsYXJlIG1vZHVsZSBjYyB7XG4gICAgaW50ZXJmYWNlIERpcmVjdG9yIHtcbiAgICAgICAgZ2xvYmFsR2FtZVRpbWVTY2FsZTogbnVtYmVyO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgfTsiXX0=