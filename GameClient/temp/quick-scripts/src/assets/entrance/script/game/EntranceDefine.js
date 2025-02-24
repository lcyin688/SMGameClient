"use strict";
cc._RF.push(module, 'e7d7cm5PgBNqYfdHdGgU3/6', 'EntranceDefine');
// entrance/script/game/EntranceDefine.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntraDef = void 0;
var EntraDef;
(function (EntraDef) {
    //服务器大区类型
    var AreaItemType;
    (function (AreaItemType) {
        AreaItemType[AreaItemType["recommend"] = 1] = "recommend";
        AreaItemType[AreaItemType["owned"] = 2] = "owned";
        AreaItemType[AreaItemType["area"] = 3] = "area";
        AreaItemType[AreaItemType["svrGroup"] = 4] = "svrGroup";
    })(AreaItemType = EntraDef.AreaItemType || (EntraDef.AreaItemType = {}));
    /** 保存于服务器列表中的玩家信息 */
    var PlrInfo2Svr = /** @class */ (function () {
        function PlrInfo2Svr() {
        }
        return PlrInfo2Svr;
    }());
    EntraDef.PlrInfo2Svr = PlrInfo2Svr;
    /** 大区配置信息 */
    var AreaUnit = /** @class */ (function () {
        function AreaUnit() {
        }
        return AreaUnit;
    }());
    EntraDef.AreaUnit = AreaUnit;
    /** 大区详情 */
    var AreaDetail = /** @class */ (function () {
        function AreaDetail() {
            this.areaId = 0;
            this.name = '';
            this.svrUrl = '';
            this.svrList = [];
        }
        return AreaDetail;
    }());
    EntraDef.AreaDetail = AreaDetail;
    /** 网络配置 */
    var NetCfg = /** @class */ (function () {
        function NetCfg() {
        }
        return NetCfg;
    }());
    EntraDef.NetCfg = NetCfg;
    /** 服务器数据 */
    var SvrUnit = /** @class */ (function () {
        function SvrUnit() {
            this.svrKey = '';
            this.seq = 0;
            this.id = 0;
            this.ip = '';
            this.port = 0;
            this.status = 0;
            this.svrKey = '';
            this.text = '';
            this.tips = '';
            this.wsport = 0;
            this.flag = '';
            this.recommend = 0;
            this.order = 0;
        }
        return SvrUnit;
    }());
    EntraDef.SvrUnit = SvrUnit;
    /** 服务器标志 */
    var SvrFlag;
    (function (SvrFlag) {
        /** 测试服 */
        SvrFlag["test"] = "test";
        /** 提审服 */
        SvrFlag["audit"] = "audit";
        /** 新服 */
        SvrFlag["new"] = "new";
        /** 热服 */
        SvrFlag["hot"] = "hot";
    })(SvrFlag = EntraDef.SvrFlag || (EntraDef.SvrFlag = {}));
    /** http请求错误类型 */
    var QuestErr;
    (function (QuestErr) {
        QuestErr[QuestErr["unknown"] = 0] = "unknown";
        QuestErr[QuestErr["netCfg"] = 1] = "netCfg";
        QuestErr[QuestErr["whiteName"] = 2] = "whiteName";
    })(QuestErr = EntraDef.QuestErr || (EntraDef.QuestErr = {}));
})(EntraDef = exports.EntraDef || (exports.EntraDef = {}));

cc._RF.pop();