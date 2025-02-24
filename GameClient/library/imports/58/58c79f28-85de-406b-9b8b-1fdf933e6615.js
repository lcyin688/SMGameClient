"use strict";
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