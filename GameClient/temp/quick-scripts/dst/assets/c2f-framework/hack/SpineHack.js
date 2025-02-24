
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/hack/SpineHack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '43c13+6seFJ7IY1jLMY660l', 'SpineHack');
// c2f-framework/hack/SpineHack.ts

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
    if (!sp.Skeleton.prototype["__$CCSPSpineHack$__"]) {
        sp.Skeleton.prototype["__$CCSPSpineHack$__"] = true;
        sp.Skeleton.prototype.changeSkeletonData = function (url, endCb) {
            return __awaiter(this, void 0, void 0, function () {
                var needReload, curUuid, urlInfo, bundle, resInfo, result, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.dynamicUrl = url;
                            if (!(url == this.loadingUrl)) return [3 /*break*/, 1];
                            endCb && endCb();
                            return [3 /*break*/, 5];
                        case 1:
                            needReload = true;
                            curUuid = this.skeletonData ? this.skeletonData['_uuid'] : null;
                            if (curUuid) {
                                urlInfo = c2f.res.parseUrl(url);
                                bundle = cc.assetManager.getBundle(urlInfo.bundle);
                                if (bundle) {
                                    resInfo = bundle.getInfoWithPath(urlInfo.loadUrl);
                                    if (resInfo.uuid == curUuid) {
                                        needReload = false;
                                    }
                                }
                            }
                            if (!needReload) return [3 /*break*/, 4];
                            this.loadingUrl = url;
                            _a = c2f.res.getRes(url, sp.SkeletonData);
                            if (_a) return [3 /*break*/, 3];
                            return [4 /*yield*/, c2f.res.loadOne(url, sp.SkeletonData)];
                        case 2:
                            _a = (_b.sent());
                            _b.label = 3;
                        case 3:
                            result = _a;
                            this.loadingUrl = "";
                            if (this.dynamicUrl != url || !result || !this.isValid) {
                                return [2 /*return*/];
                            }
                            if (this.skeletonData === result) {
                                endCb && endCb();
                                return [2 /*return*/];
                            }
                            result.addRef();
                            if (this.dynamicAsset) {
                                this.dynamicAsset.decRef();
                            }
                            this.dynamicAsset = result;
                            this.skeletonData = result;
                            _b.label = 4;
                        case 4:
                            endCb && endCb();
                            _b.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2hhY2svU3BpbmVIYWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSSxDQUFDLFNBQVMsRUFBRTtJQUNaLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO1FBQy9DLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRXBELEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGtCQUFrQixHQUFHLFVBQWdCLEdBQVcsRUFBRSxLQUFlOzs7Ozs7NEJBQ25GLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO2lDQUNsQixDQUFBLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFBLEVBQXRCLHdCQUFzQjs0QkFDdEIsS0FBSyxJQUFJLEtBQUssRUFBRSxDQUFDOzs7NEJBRWIsVUFBVSxHQUFHLElBQUksQ0FBQzs0QkFDbEIsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzs0QkFDcEUsSUFBSSxPQUFPLEVBQUU7Z0NBQ0wsT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dDQUNoQyxNQUFNLEdBQTJCLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQ0FDL0UsSUFBSSxNQUFNLEVBQUU7b0NBQ0osT0FBTyxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29DQUN0RCxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFFO3dDQUN6QixVQUFVLEdBQUcsS0FBSyxDQUFDO3FDQUN0QjtpQ0FDSjs2QkFDSjtpQ0FDRyxVQUFVLEVBQVYsd0JBQVU7NEJBQ1YsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7NEJBQ1QsS0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFBO29DQUFwQyx3QkFBb0M7NEJBQUkscUJBQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBQTs7a0NBQTNDLFNBQTJDOzs7NEJBQTVGLE1BQU0sS0FBc0Y7NEJBQ2hHLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDOzRCQUNyQixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQ0FDcEQsc0JBQU87NkJBQ1Y7NEJBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLE1BQU0sRUFBRTtnQ0FDOUIsS0FBSyxJQUFJLEtBQUssRUFBRSxDQUFDO2dDQUNqQixzQkFBTzs2QkFDVjs0QkFDRCxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7NEJBQ2hCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQ0FDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs2QkFDOUI7NEJBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7NEJBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDOzs7NEJBRS9CLEtBQUssSUFBSSxLQUFLLEVBQUUsQ0FBQzs7Ozs7O1NBRXhCLENBQUM7UUFFRixZQUFZO1FBQ1osRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztRQUN4RSxZQUFZO1FBQ1osRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHO1lBQzlCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2FBQzVCO1lBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDckIsSUFBSSxJQUFJLENBQUMsZUFBZTtnQkFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDckQsQ0FBQyxDQUFDO0tBQ0w7Q0FDSiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImlmICghQ0NfRURJVE9SKSB7XG4gICAgaWYgKCFzcC5Ta2VsZXRvbi5wcm90b3R5cGVbXCJfXyRDQ1NQU3BpbmVIYWNrJF9fXCJdKSB7XG4gICAgICAgIHNwLlNrZWxldG9uLnByb3RvdHlwZVtcIl9fJENDU1BTcGluZUhhY2skX19cIl0gPSB0cnVlO1xuXG4gICAgICAgIHNwLlNrZWxldG9uLnByb3RvdHlwZS5jaGFuZ2VTa2VsZXRvbkRhdGEgPSBhc3luYyBmdW5jdGlvbiAodXJsOiBzdHJpbmcsIGVuZENiOiBGdW5jdGlvbikge1xuICAgICAgICAgICAgdGhpcy5keW5hbWljVXJsID0gdXJsO1xuICAgICAgICAgICAgaWYgKHVybCA9PSB0aGlzLmxvYWRpbmdVcmwpIHtcbiAgICAgICAgICAgICAgICBlbmRDYiAmJiBlbmRDYigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgbmVlZFJlbG9hZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGV0IGN1clV1aWQgPSB0aGlzLnNrZWxldG9uRGF0YSA/IHRoaXMuc2tlbGV0b25EYXRhWydfdXVpZCddIDogbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoY3VyVXVpZCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdXJsSW5mbyA9IGMyZi5yZXMucGFyc2VVcmwodXJsKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ1bmRsZTogY2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUodXJsSW5mby5idW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYnVuZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzSW5mbyA9IGJ1bmRsZS5nZXRJbmZvV2l0aFBhdGgodXJsSW5mby5sb2FkVXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNJbmZvLnV1aWQgPT0gY3VyVXVpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lZWRSZWxvYWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobmVlZFJlbG9hZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdVcmwgPSB1cmw7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBjMmYucmVzLmdldFJlcyh1cmwsIHNwLlNrZWxldG9uRGF0YSkgfHwgYXdhaXQgYzJmLnJlcy5sb2FkT25lKHVybCwgc3AuU2tlbGV0b25EYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nVXJsID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZHluYW1pY1VybCAhPSB1cmwgfHwgIXJlc3VsdCB8fCAhdGhpcy5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2tlbGV0b25EYXRhID09PSByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZENiICYmIGVuZENiKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFkZFJlZigpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5keW5hbWljQXNzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHluYW1pY0Fzc2V0LmRlY1JlZigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHluYW1pY0Fzc2V0ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNrZWxldG9uRGF0YSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZW5kQ2IgJiYgZW5kQ2IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgc3AuU2tlbGV0b24ucHJvdG90eXBlLmVuZ2luZU9uRGVzdG9yeSA9IHNwLlNrZWxldG9uLnByb3RvdHlwZS5vbkRlc3Ryb3k7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBzcC5Ta2VsZXRvbi5wcm90b3R5cGUub25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZHluYW1pY0Fzc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5keW5hbWljQXNzZXQuZGVjUmVmKHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHluYW1pY0Fzc2V0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZHluYW1pY1VybCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nVXJsID0gJyc7XG4gICAgICAgICAgICBpZiAodGhpcy5lbmdpbmVPbkRlc3RvcnkpIHRoaXMuZW5naW5lT25EZXN0b3J5KCk7XG4gICAgICAgIH07XG4gICAgfVxufVxuXG5kZWNsYXJlIG1vZHVsZSBzcCB7XG4gICAgaW50ZXJmYWNlIFNrZWxldG9uIHtcbiAgICAgICAgZHluYW1pY0Fzc2V0OiBhbnk7XG4gICAgICAgIGR5bmFtaWNVcmw6IHN0cmluZztcbiAgICAgICAgbG9hZGluZ1VybDogc3RyaW5nO1xuICAgICAgICBjaGFuZ2VTa2VsZXRvbkRhdGE6ICh1cmw6IHN0cmluZykgPT4gdm9pZDtcbiAgICAgICAgZW5naW5lT25EZXN0b3J5OiAoKSA9PiB2b2lkO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgfTsiXX0=