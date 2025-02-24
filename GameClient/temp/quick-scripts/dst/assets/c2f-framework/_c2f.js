
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/_c2f.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1f686uRQeZOu6skTGAejQKG', '_c2f');
// c2f-framework/_c2f.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./C2F");
require("./core/log/Logger");
require("./core/loader/ResLoader");
require("./core/event/EventManager");
require("./core/language/LanguageManager");
require("./utils/HackUtil");
require("./utils/StringUtil");
require("./utils/ArrayUtil");
require("./utils/DateUtil");
require("./utils/MathUtil");
require("./utils/ImageUtil");
require("./utils/JsonUtil");
require("./utils/ObjectUtil");
require("./utils/PlatformUtil");
require("./utils/RegexUtil");
require("./utils/SpineUtil");
require("./utils/Vec3Util");
require("./utils/NodeUtil");
require("./utils/ViewUtil");
require("./utils/EncryptUtil");
require("./core/storage/StorageMgr");
require("./config/C2FConfig");
require("./core/random/RandomManager");
require("./core/audio/AudioManager");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL19jMmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxpQkFBZTtBQUVmLDZCQUEyQjtBQUMzQixtQ0FBaUM7QUFDakMscUNBQW1DO0FBQ25DLDJDQUF5QztBQUV6Qyw0QkFBMEI7QUFDMUIsOEJBQTRCO0FBQzVCLDZCQUEyQjtBQUMzQiw0QkFBMEI7QUFDMUIsNEJBQTBCO0FBQzFCLDZCQUEyQjtBQUMzQiw0QkFBMEI7QUFDMUIsOEJBQTRCO0FBQzVCLGdDQUE4QjtBQUM5Qiw2QkFBMkI7QUFDM0IsNkJBQTJCO0FBQzNCLDRCQUEwQjtBQUMxQiw0QkFBMEI7QUFDMUIsNEJBQTBCO0FBQzFCLCtCQUE2QjtBQUU3QixxQ0FBbUM7QUFDbkMsOEJBQTRCO0FBQzVCLHVDQUFxQztBQUNyQyxxQ0FBbUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAnLi9DMkYnO1xuXG5pbXBvcnQgXCIuL2NvcmUvbG9nL0xvZ2dlclwiO1xuaW1wb3J0IFwiLi9jb3JlL2xvYWRlci9SZXNMb2FkZXJcIjtcbmltcG9ydCBcIi4vY29yZS9ldmVudC9FdmVudE1hbmFnZXJcIjtcbmltcG9ydCBcIi4vY29yZS9sYW5ndWFnZS9MYW5ndWFnZU1hbmFnZXJcIjtcblxuaW1wb3J0IFwiLi91dGlscy9IYWNrVXRpbFwiO1xuaW1wb3J0IFwiLi91dGlscy9TdHJpbmdVdGlsXCI7XG5pbXBvcnQgXCIuL3V0aWxzL0FycmF5VXRpbFwiO1xuaW1wb3J0IFwiLi91dGlscy9EYXRlVXRpbFwiO1xuaW1wb3J0IFwiLi91dGlscy9NYXRoVXRpbFwiO1xuaW1wb3J0IFwiLi91dGlscy9JbWFnZVV0aWxcIjtcbmltcG9ydCBcIi4vdXRpbHMvSnNvblV0aWxcIjtcbmltcG9ydCBcIi4vdXRpbHMvT2JqZWN0VXRpbFwiO1xuaW1wb3J0IFwiLi91dGlscy9QbGF0Zm9ybVV0aWxcIjtcbmltcG9ydCBcIi4vdXRpbHMvUmVnZXhVdGlsXCI7XG5pbXBvcnQgXCIuL3V0aWxzL1NwaW5lVXRpbFwiO1xuaW1wb3J0IFwiLi91dGlscy9WZWMzVXRpbFwiO1xuaW1wb3J0IFwiLi91dGlscy9Ob2RlVXRpbFwiO1xuaW1wb3J0IFwiLi91dGlscy9WaWV3VXRpbFwiO1xuaW1wb3J0IFwiLi91dGlscy9FbmNyeXB0VXRpbFwiO1xuXG5pbXBvcnQgXCIuL2NvcmUvc3RvcmFnZS9TdG9yYWdlTWdyXCI7XG5pbXBvcnQgXCIuL2NvbmZpZy9DMkZDb25maWdcIjtcbmltcG9ydCBcIi4vY29yZS9yYW5kb20vUmFuZG9tTWFuYWdlclwiO1xuaW1wb3J0IFwiLi9jb3JlL2F1ZGlvL0F1ZGlvTWFuYWdlclwiO1xuIl19