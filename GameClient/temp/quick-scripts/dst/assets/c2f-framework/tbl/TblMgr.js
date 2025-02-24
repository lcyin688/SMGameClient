
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/tbl/TblMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '58c798ohd5Aa5uLH9+TPmYV', 'TblMgr');
// c2f-framework/tbl/TblMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TblMgr = void 0;
var Tbl_1 = require("./Tbl");
var ccclass = cc._decorator.ccclass;
var TblMgr = /** @class */ (function () {
    function TblMgr() {
    }
    TblMgr.prototype.init = function (allTable) {
        for (var _i = 0, allTable_1 = allTable; _i < allTable_1.length; _i++) {
            var table = allTable_1[_i];
            var tbl = new Tbl_1.Tbl();
            tbl.init(table.name, table.json);
            c2f.tbl[table.name] = window[table.name] = tbl;
        }
    };
    TblMgr.getInstance = function () {
        if (!this._instance) {
            this._instance = new TblMgr();
        }
        return this._instance;
    };
    TblMgr._instance = null;
    return TblMgr;
}());
exports.TblMgr = TblMgr;
c2f.tblMgr = TblMgr.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL3RibC9UYmxNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQTRCO0FBRXBCLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBV2xDO0lBQUE7SUFpQkEsQ0FBQztJQWZHLHFCQUFJLEdBQUosVUFBSyxRQUF3QjtRQUN6QixLQUFrQixVQUFRLEVBQVIscUJBQVEsRUFBUixzQkFBUSxFQUFSLElBQVEsRUFBRTtZQUF2QixJQUFJLEtBQUssaUJBQUE7WUFDVixJQUFJLEdBQUcsR0FBRyxJQUFJLFNBQUcsRUFBRSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDbEQ7SUFDTCxDQUFDO0lBR2Esa0JBQVcsR0FBekI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7U0FDakM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQU5jLGdCQUFTLEdBQVcsSUFBSSxDQUFBO0lBTzNDLGFBQUM7Q0FqQkQsQUFpQkMsSUFBQTtBQWpCWSx3QkFBTTtBQW1CbkIsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYmwgfSBmcm9tIFwiLi9UYmxcIjtcblxuY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIElUYmwgeyB9XG4gICAgaW50ZXJmYWNlIElDMkYge1xuICAgICAgICB0YmxNZ3I6IFRibE1ncjtcbiAgICAgICAgLyoq6KGo5qC85YWo5bGAICovXG4gICAgICAgIHRibDogSVRibDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUYmxNZ3Ige1xuXG4gICAgaW5pdChhbGxUYWJsZTogY2MuSnNvbkFzc2V0W10pIHtcbiAgICAgICAgZm9yIChsZXQgdGFibGUgb2YgYWxsVGFibGUpIHtcbiAgICAgICAgICAgIGxldCB0YmwgPSBuZXcgVGJsKCk7XG4gICAgICAgICAgICB0YmwuaW5pdCh0YWJsZS5uYW1lLCB0YWJsZS5qc29uKTtcbiAgICAgICAgICAgIGMyZi50YmxbdGFibGUubmFtZV0gPSB3aW5kb3dbdGFibGUubmFtZV0gPSB0Ymw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFRibE1nciA9IG51bGxcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IFRibE1nciB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFRibE1ncigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG59XG5cbmMyZi50YmxNZ3IgPSBUYmxNZ3IuZ2V0SW5zdGFuY2UoKTtcbiJdfQ==