
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/hack/SpriteHack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a0df8YqUPJJhKENk8AHyQX5', 'SpriteHack');
// c2f-framework/hack/SpriteHack.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!CC_EDITOR) {
    if (!cc.Sprite.prototype["__$CCSpriteHack$__"]) {
        cc.Sprite.prototype["__$CCSpriteHack$__"] = true;
        cc.Sprite.prototype.changeSpriteFrame = function (url, endCb) {
            return __awaiter(this, void 0, void 0, function () {
                var result, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.dynamicUrl = url;
                            _a = c2f.res.getRes(url, cc.SpriteFrame);
                            if (_a) return [3 /*break*/, 2];
                            return [4 /*yield*/, c2f.res.loadOne(url, cc.SpriteFrame)];
                        case 1:
                            _a = (_b.sent());
                            _b.label = 2;
                        case 2:
                            result = _a;
                            if (this.dynamicUrl != url || !result || !this.isValid) {
                                return [2 /*return*/];
                            }
                            if (this.spriteFrame === result) {
                                endCb && endCb();
                                return [2 /*return*/];
                            }
                            result.addRef();
                            if (this.dynamicAsset) {
                                this.dynamicAsset.decRef();
                            }
                            this.dynamicAsset = result;
                            this.spriteFrame = result;
                            endCb && endCb();
                            return [2 /*return*/];
                    }
                });
            });
        };
        cc.Sprite.prototype.changeSFWithAtlas = function (url, subFile, endCb) {
            return __awaiter(this, void 0, void 0, function () {
                var result, _a, frame;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.dynamicUrl = url;
                            _a = c2f.res.getRes(url, cc.SpriteAtlas);
                            if (_a) return [3 /*break*/, 2];
                            return [4 /*yield*/, c2f.res.loadOne(url, cc.SpriteAtlas)];
                        case 1:
                            _a = (_b.sent());
                            _b.label = 2;
                        case 2:
                            result = _a;
                            if (this.dynamicUrl != url || !result || !this.isValid) {
                                return [2 /*return*/];
                            }
                            frame = result.getSpriteFrame(subFile);
                            if (!frame) {
                                return [2 /*return*/];
                            }
                            if (this.spriteFrame === frame) {
                                endCb && endCb();
                                return [2 /*return*/];
                            }
                            result.addRef();
                            if (this.dynamicAsset) {
                                this.dynamicAsset.decRef();
                            }
                            this.dynamicAsset = result;
                            this.spriteFrame = frame;
                            endCb && endCb();
                            return [2 /*return*/];
                    }
                });
            });
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
            if (this.engineOnDestory)
                this.engineOnDestory();
        };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2hhY2svU3ByaXRlSGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksQ0FBQyxTQUFTLEVBQUU7SUFDWixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsRUFBRTtRQUM1QyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUVqRCxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxVQUFnQixHQUFXLEVBQUUsS0FBZTs7Ozs7OzRCQUNoRixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQzs0QkFDVCxLQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUE7b0NBQW5DLHdCQUFtQzs0QkFBSSxxQkFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFBOztrQ0FBMUMsU0FBMEM7Ozs0QkFBMUYsTUFBTSxLQUFvRjs0QkFDOUYsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0NBQ3BELHNCQUFPOzZCQUNWOzRCQUNELElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxNQUFNLEVBQUU7Z0NBQzdCLEtBQUssSUFBSSxLQUFLLEVBQUUsQ0FBQztnQ0FDakIsc0JBQU87NkJBQ1Y7NEJBQ0QsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDOzRCQUNoQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0NBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7NkJBQzlCOzRCQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDOzRCQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQzs0QkFDMUIsS0FBSyxJQUFJLEtBQUssRUFBRSxDQUFDOzs7OztTQUNwQixDQUFDO1FBRUYsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEdBQUcsVUFBZ0IsR0FBVyxFQUFFLE9BQWUsRUFBRSxLQUFlOzs7Ozs7NEJBQ2pHLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDOzRCQUNKLEtBQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtvQ0FBbkMsd0JBQW1DOzRCQUFJLHFCQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUE7O2tDQUExQyxTQUEwQzs7OzRCQUEvRixNQUFNLEtBQXlGOzRCQUNuRyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQ0FDcEQsc0JBQU87NkJBQ1Y7NEJBQ0csS0FBSyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQzNDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0NBQ1Isc0JBQU87NkJBQ1Y7NEJBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLEtBQUssRUFBRTtnQ0FDNUIsS0FBSyxJQUFJLEtBQUssRUFBRSxDQUFDO2dDQUNqQixzQkFBTzs2QkFDVjs0QkFDRCxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7NEJBQ2hCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQ0FDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs2QkFDOUI7NEJBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7NEJBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDOzRCQUN6QixLQUFLLElBQUksS0FBSyxFQUFFLENBQUM7Ozs7O1NBQ3BCLENBQUM7UUFHRixZQUFZO1FBQ1osRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztRQUNwRSxZQUFZO1FBQ1osRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHO1lBQzVCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2FBQzVCO1lBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDckIsSUFBSSxJQUFJLENBQUMsZUFBZTtnQkFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDckQsQ0FBQyxDQUFDO0tBQ0w7Q0FDSiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImlmICghQ0NfRURJVE9SKSB7XG4gICAgaWYgKCFjYy5TcHJpdGUucHJvdG90eXBlW1wiX18kQ0NTcHJpdGVIYWNrJF9fXCJdKSB7XG4gICAgICAgIGNjLlNwcml0ZS5wcm90b3R5cGVbXCJfXyRDQ1Nwcml0ZUhhY2skX19cIl0gPSB0cnVlO1xuXG4gICAgICAgIGNjLlNwcml0ZS5wcm90b3R5cGUuY2hhbmdlU3ByaXRlRnJhbWUgPSBhc3luYyBmdW5jdGlvbiAodXJsOiBzdHJpbmcsIGVuZENiOiBGdW5jdGlvbikge1xuICAgICAgICAgICAgdGhpcy5keW5hbWljVXJsID0gdXJsO1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGMyZi5yZXMuZ2V0UmVzKHVybCwgY2MuU3ByaXRlRnJhbWUpIHx8IGF3YWl0IGMyZi5yZXMubG9hZE9uZSh1cmwsIGNjLlNwcml0ZUZyYW1lKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmR5bmFtaWNVcmwgIT0gdXJsIHx8ICFyZXN1bHQgfHwgIXRoaXMuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZUZyYW1lID09PSByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBlbmRDYiAmJiBlbmRDYigpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5hZGRSZWYoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmR5bmFtaWNBc3NldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHluYW1pY0Fzc2V0LmRlY1JlZigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5keW5hbWljQXNzZXQgPSByZXN1bHQ7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZUZyYW1lID0gcmVzdWx0O1xuICAgICAgICAgICAgZW5kQ2IgJiYgZW5kQ2IoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjYy5TcHJpdGUucHJvdG90eXBlLmNoYW5nZVNGV2l0aEF0bGFzID0gYXN5bmMgZnVuY3Rpb24gKHVybDogc3RyaW5nLCBzdWJGaWxlOiBzdHJpbmcsIGVuZENiOiBGdW5jdGlvbikge1xuICAgICAgICAgICAgdGhpcy5keW5hbWljVXJsID0gdXJsO1xuICAgICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0gYzJmLnJlcy5nZXRSZXModXJsLCBjYy5TcHJpdGVBdGxhcykgfHwgYXdhaXQgYzJmLnJlcy5sb2FkT25lKHVybCwgY2MuU3ByaXRlQXRsYXMpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZHluYW1pY1VybCAhPSB1cmwgfHwgIXJlc3VsdCB8fCAhdGhpcy5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZyYW1lID0gcmVzdWx0LmdldFNwcml0ZUZyYW1lKHN1YkZpbGUpO1xuICAgICAgICAgICAgaWYgKCFmcmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZUZyYW1lID09PSBmcmFtZSkge1xuICAgICAgICAgICAgICAgIGVuZENiICYmIGVuZENiKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LmFkZFJlZigpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZHluYW1pY0Fzc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5keW5hbWljQXNzZXQuZGVjUmVmKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmR5bmFtaWNBc3NldCA9IHJlc3VsdDtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlRnJhbWUgPSBmcmFtZTtcbiAgICAgICAgICAgIGVuZENiICYmIGVuZENiKCk7XG4gICAgICAgIH07XG5cblxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgY2MuU3ByaXRlLnByb3RvdHlwZS5lbmdpbmVPbkRlc3RvcnkgPSBjYy5TcHJpdGUucHJvdG90eXBlLm9uRGVzdHJveTtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGNjLlNwcml0ZS5wcm90b3R5cGUub25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZHluYW1pY0Fzc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5keW5hbWljQXNzZXQuZGVjUmVmKHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHluYW1pY0Fzc2V0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZHluYW1pY1VybCA9ICcnO1xuICAgICAgICAgICAgaWYgKHRoaXMuZW5naW5lT25EZXN0b3J5KSB0aGlzLmVuZ2luZU9uRGVzdG9yeSgpO1xuICAgICAgICB9O1xuICAgIH1cbn1cblxuZGVjbGFyZSBtb2R1bGUgY2Mge1xuICAgIGludGVyZmFjZSBTcHJpdGUge1xuICAgICAgICBkeW5hbWljQXNzZXQ6IGFueTtcbiAgICAgICAgZHluYW1pY1VybDogc3RyaW5nO1xuICAgICAgICBjaGFuZ2VTcHJpdGVGcmFtZTogKHVybDogc3RyaW5nKSA9PiB2b2lkO1xuICAgICAgICBlbmdpbmVPbkRlc3Rvcnk6ICgpID0+IHZvaWQ7XG4gICAgfVxufVxuXG5leHBvcnQgeyB9OyJdfQ==