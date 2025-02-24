
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/game/EntranceDefine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvZ2FtZS9FbnRyYW5jZURlZmluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFpQixRQUFRLENBbUh4QjtBQW5IRCxXQUFpQixRQUFRO0lBT3JCLFNBQVM7SUFDVCxJQUFZLFlBS1g7SUFMRCxXQUFZLFlBQVk7UUFDcEIseURBQWEsQ0FBQTtRQUNiLGlEQUFTLENBQUE7UUFDVCwrQ0FBUSxDQUFBO1FBQ1IsdURBQVksQ0FBQTtJQUNoQixDQUFDLEVBTFcsWUFBWSxHQUFaLHFCQUFZLEtBQVoscUJBQVksUUFLdkI7SUFFRCxxQkFBcUI7SUFDckI7UUFBQTtRQVFBLENBQUM7UUFBRCxrQkFBQztJQUFELENBUkEsQUFRQyxJQUFBO0lBUlksb0JBQVcsY0FRdkIsQ0FBQTtJQUVELGFBQWE7SUFDYjtRQUFBO1FBS0EsQ0FBQztRQUFELGVBQUM7SUFBRCxDQUxBLEFBS0MsSUFBQTtJQUxZLGlCQUFRLFdBS3BCLENBQUE7SUFFRCxXQUFXO0lBQ1g7UUFLSTtZQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDdEIsQ0FBQztRQUNMLGlCQUFDO0lBQUQsQ0FYQSxBQVdDLElBQUE7SUFYWSxtQkFBVSxhQVd0QixDQUFBO0lBRUQsV0FBVztJQUNYO1FBQUE7UUFhQSxDQUFDO1FBQUQsYUFBQztJQUFELENBYkEsQUFhQyxJQUFBO0lBYlksZUFBTSxTQWFsQixDQUFBO0lBRUQsWUFBWTtJQUNaO1FBYUk7WUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1osSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUM7UUFDTCxjQUFDO0lBQUQsQ0E1QkEsQUE0QkMsSUFBQTtJQTVCWSxnQkFBTyxVQTRCbkIsQ0FBQTtJQUVELFlBQVk7SUFDWixJQUFZLE9BU1g7SUFURCxXQUFZLE9BQU87UUFDZixVQUFVO1FBQ1Ysd0JBQWEsQ0FBQTtRQUNiLFVBQVU7UUFDViwwQkFBZSxDQUFBO1FBQ2YsU0FBUztRQUNULHNCQUFXLENBQUE7UUFDWCxTQUFTO1FBQ1Qsc0JBQVcsQ0FBQTtJQUNmLENBQUMsRUFUVyxPQUFPLEdBQVAsZ0JBQU8sS0FBUCxnQkFBTyxRQVNsQjtJQUVELGlCQUFpQjtJQUNqQixJQUFZLFFBSVg7SUFKRCxXQUFZLFFBQVE7UUFDaEIsNkNBQVcsQ0FBQTtRQUNYLDJDQUFVLENBQUE7UUFDVixpREFBYSxDQUFBO0lBQ2pCLENBQUMsRUFKVyxRQUFRLEdBQVIsaUJBQVEsS0FBUixpQkFBUSxRQUluQjtBQUdMLENBQUMsRUFuSGdCLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBbUh4QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBuYW1lc3BhY2UgRW50cmFEZWYge1xuXG4gICAgLyoqIOivt+axgm5ldENmZ+WbnuiwgyAqL1xuICAgIGV4cG9ydCB0eXBlIFF1ZXN0TmV0Q2ZnRnVuYyA9IChjb2RlOiBRdWVzdEVyciwgaW5mbzogTmV0Q2ZnKSA9PiB2b2lkO1xuICAgIC8qKiDnoa7orqTmmK/lkKbkvb/nlKjnmb3lkI3ljZUgKi9cbiAgICBleHBvcnQgdHlwZSBDb21maXJtV2hpdGVGdW5jID0gKHJlc3VsdENiOiAocmV0OiBib29sZWFuKSA9PiB2b2lkKSA9PiB2b2lkO1xuXG4gICAgLy/mnI3liqHlmajlpKfljLrnsbvlnotcbiAgICBleHBvcnQgZW51bSBBcmVhSXRlbVR5cGUge1xuICAgICAgICByZWNvbW1lbmQgPSAxLCAgLy/mjqjojZBcbiAgICAgICAgb3duZWQgPSAyLCAgICAgIC8v5bey5oul5pyJXG4gICAgICAgIGFyZWEgPSAzLCAgICAgICAvL+aZrumAmlxuICAgICAgICBzdnJHcm91cCA9IDQsICAgLy/mnI3liqHlmajnu4QgXG4gICAgfVxuXG4gICAgLyoqIOS/neWtmOS6juacjeWKoeWZqOWIl+ihqOS4reeahOeOqeWutuS/oeaBryAqL1xuICAgIGV4cG9ydCBjbGFzcyBQbHJJbmZvMlN2ciB7XG4gICAgICAgIHN2cmlkOiBzdHJpbmc7XG4gICAgICAgIHN2clNlcTogbnVtYmVyO1xuICAgICAgICBsZXZlbDogbnVtYmVyO1xuICAgICAgICBoZWFkOiBudW1iZXI7XG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgICAgIGF0a3B3cjogbnVtYmVyO1xuICAgICAgICBsYXN0VHM6IG51bWJlcjsgIC8v5pyA5ZCO5LiA5qyh55m75b2V5pe26Ze05oizXG4gICAgfVxuXG4gICAgLyoqIOWkp+WMuumFjee9ruS/oeaBryAqL1xuICAgIGV4cG9ydCBjbGFzcyBBcmVhVW5pdCB7XG4gICAgICAgIGFyZWFJZDogbnVtYmVyOyAgICAgLy/lpKfljLppZFxuICAgICAgICBuYW1lOiBzdHJpbmc7ICAgICAgIC8v5aSn5Yy65ZCN56ewXG4gICAgICAgIHN2cmxpc3Q6IHN0cmluZzsgICAgLy/mnI3liqHlmajliJfooahVUkxcbiAgICAgICAgdXNlcmluZm86IHN0cmluZzsgICAvL+afpeaJvuW3suacieinkuiJslxuICAgIH1cblxuICAgIC8qKiDlpKfljLror6bmg4UgKi9cbiAgICBleHBvcnQgY2xhc3MgQXJlYURldGFpbCB7XG4gICAgICAgIGFyZWFJZDogbnVtYmVyO1xuICAgICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICAgIHN2clVybDogc3RyaW5nO1xuICAgICAgICBzdnJMaXN0OiBTdnJVbml0W107XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5hcmVhSWQgPSAwO1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gJyc7XG4gICAgICAgICAgICB0aGlzLnN2clVybCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5zdnJMaXN0ID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog572R57uc6YWN572uICovXG4gICAgZXhwb3J0IGNsYXNzIE5ldENmZyB7XG4gICAgICAgIGFyZWE6IHsgW2tleTogbnVtYmVyXTogQXJlYVVuaXQgfTsgIC8v5aSn5Yy65L+h5oGvXG4gICAgICAgIG5vdGljZVVybDogc3RyaW5nOyAgICAgICAgICAgICAgICAgIC8v5YWs5ZGK5Zyw5Z2AXG4gICAgICAgIGNoZWNrV2hpdGU6IHN0cmluZzsgICAgICAgICAgICAgICAgIC8v55m95ZCN5Y2V5qOA5rWL5Zyw5Z2AXG4gICAgICAgIHJlcG9ydFVybDogc3RyaW5nOyAgICAgICAgICAgICAgICAgIC8v5pyq5L2/55SoXG4gICAgICAgIHJlc1VybExpbmU6IHN0cmluZzsgICAgICAgICAgICAgICAgIC8v5q2j5byP5pu05paw5Zyw5Z2AXG4gICAgICAgIHJlc1VybFdoaXRlOiBzdHJpbmc7ICAgICAgICAgICAgICAgIC8v55m95ZCN5Y2V5pu05paw5Zyw5Z2AXG4gICAgICAgIG5naW54OiBzdHJpbmc7ICAgICAgICAgICAgICAgICAgICAgIC8vSDXku6PnkIborr/pl65zb2NrZXRcbiAgICAgICAgdGltZVpvbmU6IHN0cmluZzsgICAgICAgICAgICAgICAgICAgLy/mnI3liqHlmajml7bljLpcbiAgICAgICAgbWluaVZlcnNpb246IHN0cmluZzsgICAgICAgICAgICAgICAgLy/nur/kuIrljIXmnIDkvY7niYjmnKzvvIzlpoLmnpznlKjmiLfljIVBcHBWZXLmr5Tov5nkuKrniYjmnKzov5jkvY7vvIzliJnpnIDopoHnlKjmiLfmjaLljIVcbiAgICAgICAgcmVzVmVyTGluZTogc3RyaW5nOyAgICAgICAgICAgICAgICAgLy/ng63mm7TotYTmupDniYjmnKzvvIzlhYjmoLnmja7ov5nkuKrlkozlrqLmiLfnq6/otYTmupDniYjmnKzmr5TovoPnnIvmmK/lkKbpnIDopoHng63mm7RcbiAgICAgICAgcmVzVmVyV2hpdGU6IHN0cmluZzsgICAgICAgICAgICAgICAgLy/ng63mm7TotYTmupDniYjmnKwo55m95ZCN5Y2V55So5oi35L2/55SoKVxuICAgICAgICBhdXRvUG9wTm90aWNlOiBzdHJpbmc7ICAgICAgICAgICAgICAvL+iHquWKqOW8ueWHuuWFrOWRijogMO+8muS4jeW8ueWHuu+8jCDpnZ4w77ya5by55Ye6XG4gICAgfVxuXG4gICAgLyoqIOacjeWKoeWZqOaVsOaNriAqL1xuICAgIGV4cG9ydCBjbGFzcyBTdnJVbml0IHtcbiAgICAgICAgc3ZyS2V5OiBzdHJpbmc7ICAgICAvL+WUr+S4gOe8luWPt+WQjeensO+8mmdhbWUxIGdhbWUyIC4uLlxuICAgICAgICBzZXE6IG51bWJlcjsgICAgICAgIC8vYXJlYSoxMDAwMCtpZFxuICAgICAgICBpZDogbnVtYmVyOyAgICAgICAgIC8vaWRcbiAgICAgICAgaXA6IHN0cmluZzsgICAgICAgICAvL+acjeWKoeWZqGlwXG4gICAgICAgIHBvcnQ6IG51bWJlcjsgICAgICAgLy/nq6/lj6NcbiAgICAgICAgd3Nwb3J0OiBudW1iZXI7ICAgICAvL1dT56uv5Y+jXG4gICAgICAgIHN0YXR1czogbnVtYmVyOyAgICAgLy/nirbmgIEo5rWB55WFwrfmu6HmnI3Ct+e7tOaKpClcbiAgICAgICAgdGV4dDogc3RyaW5nOyAgICAgICAvL+acjeWKoeWZqOWQjeensFxuICAgICAgICB0aXBzOiBzdHJpbmc7ICAgICAgIC8v57u05oqk5o+Q56S6XG4gICAgICAgIGZsYWc6IHN0cmluZzsgICAgICAgLy/moIforrAo5paw5pyNwrfng63mnI3Ct+aPkOWuocK35rWL6K+VKVxuICAgICAgICByZWNvbW1lbmQ6IG51bWJlcjsgIC8v5piv5ZCm5o6o6I2QXG4gICAgICAgIG9yZGVyOiBudW1iZXI7ICAgICAgLy/mjpLluo9JRFxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMuc3ZyS2V5ID0gJyc7XG4gICAgICAgICAgICB0aGlzLnNlcSA9IDA7XG4gICAgICAgICAgICB0aGlzLmlkID0gMDtcbiAgICAgICAgICAgIHRoaXMuaXAgPSAnJztcbiAgICAgICAgICAgIHRoaXMucG9ydCA9IDA7XG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IDA7XG4gICAgICAgICAgICB0aGlzLnN2cktleSA9ICcnO1xuICAgICAgICAgICAgdGhpcy50ZXh0ID0gJyc7XG4gICAgICAgICAgICB0aGlzLnRpcHMgPSAnJztcbiAgICAgICAgICAgIHRoaXMud3Nwb3J0ID0gMDtcbiAgICAgICAgICAgIHRoaXMuZmxhZyA9ICcnO1xuICAgICAgICAgICAgdGhpcy5yZWNvbW1lbmQgPSAwO1xuICAgICAgICAgICAgdGhpcy5vcmRlciA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5pyN5Yqh5Zmo5qCH5b+XICovXG4gICAgZXhwb3J0IGVudW0gU3ZyRmxhZyB7XG4gICAgICAgIC8qKiDmtYvor5XmnI0gKi9cbiAgICAgICAgdGVzdCA9ICd0ZXN0JyxcbiAgICAgICAgLyoqIOaPkOWuoeacjSAqL1xuICAgICAgICBhdWRpdCA9ICdhdWRpdCcsXG4gICAgICAgIC8qKiDmlrDmnI0gKi9cbiAgICAgICAgbmV3ID0gJ25ldycsXG4gICAgICAgIC8qKiDng63mnI0gKi9cbiAgICAgICAgaG90ID0gJ2hvdCcsXG4gICAgfVxuXG4gICAgLyoqIGh0dHDor7fmsYLplJnor6/nsbvlnosgKi9cbiAgICBleHBvcnQgZW51bSBRdWVzdEVyciB7XG4gICAgICAgIHVua25vd24gPSAwLCAgICAvL+aXoOmUmeivr1xuICAgICAgICBuZXRDZmcgPSAxLCAgICAgLy/ojrflj5Zzd2l0Y2jkv6Hmga/lpLHotKVcbiAgICAgICAgd2hpdGVOYW1lID0gMiwgIC8v6I635Y+W55m95ZCN5Y2V5L+h5oGv5aSx6LSlXG4gICAgfVxuXG5cbn0iXX0=