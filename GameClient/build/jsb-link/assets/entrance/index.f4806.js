window.__require = function t(e, o, n) {
function i(a, c) {
if (!o[a]) {
if (!e[a]) {
var s = a.split("/");
s = s[s.length - 1];
if (!e[s]) {
var u = "function" == typeof __require && __require;
if (!c && u) return u(s, !0);
if (r) return r(s, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = s;
}
var l = o[a] = {
exports: {}
};
e[a][0].call(l.exports, function(t) {
return i(e[a][1][t] || t);
}, l, l.exports, t, e, o, n);
}
return o[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
return i;
}({
CacheData: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f0a2d6i8CJObJJM0VOKgJ0s", "CacheData");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.CacheData = void 0;
var n = function() {
function t(t) {
this._data = null;
this._data = t;
}
t.prototype.clear = function() {
this._data = null;
};
Object.defineProperty(t.prototype, "data", {
get: function() {
return this._data;
},
set: function(t) {
this._data = t;
},
enumerable: !1,
configurable: !0
});
return t;
}();
o.CacheData = n;
cc._RF.pop();
}, {} ],
CsvBase: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "83b64iWLLpN4r8f8SxyCqIL", "CsvBase");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.CsvBase = void 0;
var n = t("../GameCaches"), i = t("./CacheData"), r = function() {
function t() {
this.cache = null;
this.cache = null;
}
t.prototype.initCache = function(t) {
this.cache = new i.CacheData(t);
n.GameCaches.ins.addCsvCache(this.cache);
};
Object.defineProperty(t.prototype, "data", {
get: function() {
return this.cache.data;
},
set: function(t) {
this.cache.data = t;
},
enumerable: !1,
configurable: !0
});
return t;
}();
o.CsvBase = r;
cc._RF.pop();
}, {
"../GameCaches": "GameCaches",
"./CacheData": "CacheData"
} ],
CtrlPopDlgPanel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5d2b0oE1BhFELxAFehJDwS9", "CtrlPopDlgPanel");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../c2f-framework/component/common/LinkPrefab"), c = t("../../../c2f-framework/define/C2FEnum"), s = t("./entity/PopDlgPanel"), u = cc._decorator, l = u.ccclass, p = u.property, f = u.executeInEditMode, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._titleID = 0;
e._separator = !0;
e._separatorBottom = 0;
e.closeHandler = [];
return e;
}
Object.defineProperty(e.prototype, "titleID", {
get: function() {
return this._titleID;
},
set: function(t) {
this._titleID != t && (this._titleID = t);
this._titleID > 0 && this.getComponent(a.default).getComponentEx(s.default).setTiTle(c2f.language.words(this.titleID));
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "separator", {
get: function() {
return this._separator;
},
set: function(t) {
this._separator = t;
this.getComponent(a.default).getComponentEx(s.default).separatorVisible(t);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "separatorBottom", {
get: function() {
0 == this._separatorBottom && (this._separatorBottom = this.getComponent(a.default).getComponentEx(s.default).getSeparatorWidgetBottom());
return this._separatorBottom;
},
set: function(t) {
this._separatorBottom = t;
this.getComponent(a.default).getComponentEx(s.default).separatorWidgetBottom(t);
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
var t = this.getComponent(a.default).getComponentEx(s.default);
this.titleID > 0 && t.setTiTle(c2f.language.words(this.titleID));
t.separatorVisible(this.separator);
this.closeHandler.length > 0 && t.setBtnHandler(this.closeHandler);
t.separatorWidgetBottom(this.separatorBottom);
cc.director.on(c.C2FEnum.ExtEvent.SwitchLanguage, this.onDataIDChanged, this);
};
e.prototype.onDestroy = function() {
cc.director.off(c.C2FEnum.ExtEvent.SwitchLanguage, this.onDataIDChanged, this);
};
e.prototype.onDataIDChanged = function() {
var t = this.getComponent(a.default).getComponentEx(s.default);
this.titleID > 0 && t.setTiTle(c2f.language.words(this.titleID));
};
r([ p() ], e.prototype, "_titleID", void 0);
r([ p({
tooltip: "弹窗标题ID"
}) ], e.prototype, "titleID", null);
r([ p() ], e.prototype, "_separator", void 0);
r([ p({
tooltip: "是否显示按钮分割线"
}) ], e.prototype, "separator", null);
r([ p() ], e.prototype, "_separatorBottom", void 0);
r([ p({
visible: function() {
return this.separator;
},
tooltip: "按钮分割线离底部距离"
}) ], e.prototype, "separatorBottom", null);
r([ p({
type: cc.Component.EventHandler,
tooltip: "关闭按钮事件"
}) ], e.prototype, "closeHandler", void 0);
return r([ l, f ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../../c2f-framework/component/common/LinkPrefab": void 0,
"../../../c2f-framework/define/C2FEnum": void 0,
"./entity/PopDlgPanel": "PopDlgPanel"
} ],
EntranceData: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8c4aflMClBOML84dx3w7EBZ", "EntranceData");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.EntraData = void 0;
var n = t("../../../resources/proto/msgid"), i = function() {
function t() {
this._owned = void 0;
this.curSvrUnit = null;
this._netCfg = null;
this.mapArea = null;
this.isWhite = void 0;
this.customHotUrl = null;
}
Object.defineProperty(t, "ins", {
get: function() {
t._ins || (t._ins = new t());
return t._ins;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "curSvrUnit", {
get: function() {
return this._curSvrUnit;
},
set: function(t) {
this._curSvrUnit = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "netCfg", {
get: function() {
return this._netCfg;
},
set: function(t) {
this._netCfg = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "loginParam", {
get: function() {
return this._loginParam;
},
set: function(t) {
this._loginParam = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isWhite", {
get: function() {
return this._isWhite;
},
set: function(t) {
this._isWhite = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "customHotUrl", {
get: function() {
return this._customHotUrl;
},
set: function(t) {
this._customHotUrl = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "owned", {
get: function() {
return this._owned;
},
set: function(t) {
this._owned = t;
},
enumerable: !1,
configurable: !0
});
t.prototype.reLogin = function(t, e) {
if (this.loginParam) {
var o = Object.copyDepth(this.loginParam);
o.P1 = "reconnect";
c2f.net.sendMsg(n.msgid.C_Login, o, {
getErr: !0,
ops: [ n.msgid.GW_Login_R ],
callback: t
});
} else e && e();
};
t._ins = null;
return t;
}();
o.EntraData = i;
szg.entrance = i.ins;
cc._RF.pop();
}, {
"../../../resources/proto/msgid": void 0
} ],
EntranceDefine: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e7d7cm5PgBNqYfdHdGgU3/6", "EntranceDefine");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.EntraDef = void 0;
(function(t) {
(function(t) {
t[t.recommend = 1] = "recommend";
t[t.owned = 2] = "owned";
t[t.area = 3] = "area";
t[t.svrGroup = 4] = "svrGroup";
})(t.AreaItemType || (t.AreaItemType = {}));
t.PlrInfo2Svr = function() {};
t.AreaUnit = function() {};
t.AreaDetail = function() {
this.areaId = 0;
this.name = "";
this.svrUrl = "";
this.svrList = [];
};
t.NetCfg = function() {};
t.SvrUnit = function() {
this.svrKey = "";
this.seq = 0;
this.id = 0;
this.ip = "";
this.port = 0;
this.status = 0;
this.svrKey = "";
this.text = "";
this.tips = "";
this.wsport = 0;
this.flag = "";
this.recommend = 0;
this.order = 0;
};
(function(t) {
t.test = "test";
t.audit = "audit";
t.new = "new";
t.hot = "hot";
})(t.SvrFlag || (t.SvrFlag = {}));
(function(t) {
t[t.unknown = 0] = "unknown";
t[t.netCfg = 1] = "netCfg";
t[t.whiteName = 2] = "whiteName";
})(t.QuestErr || (t.QuestErr = {}));
})(o.EntraDef || (o.EntraDef = {}));
cc._RF.pop();
}, {} ],
EntranceView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b8423xdyGBJVZhTgYzy8gMu", "EntranceView");
var n;
Object.defineProperty(o, "__esModule", {
value: !0
});
o.EntranceView = o.EntranceUI = void 0;
var i, r = t("../../Script/game/GameConsts"), a = t("../../c2f-framework/define/C2FUIDef");
(function(t) {
t[t.Start = 2e3] = "Start";
t[t.GameLogo = 2001] = "GameLogo";
t[t.GameLogin = 2002] = "GameLogin";
t[t.GameLoading = 2003] = "GameLoading";
t[t.NoPlatLogin = 2004] = "NoPlatLogin";
t[t.ReloginDialog = 2005] = "ReloginDialog";
t[t.PromptSimple = 2006] = "PromptSimple";
t[t.SvrList = 2007] = "SvrList";
t[t.LongTxtDialog = 2008] = "LongTxtDialog";
t[t.UpdateRes = 2009] = "UpdateRes";
t[t.GameResUpdate = 2010] = "GameResUpdate";
t[t.SoundSet = 2011] = "SoundSet";
})(i = o.EntranceUI || (o.EntranceUI = {}));
o.EntranceView = ((n = {})[i.GameLogo] = {
layer: a.LayerType.UI,
prefab: "prefab/GameLogo",
bundle: r.GameConsts.Bundle.entrance
}, n[i.GameLogin] = {
layer: a.LayerType.UI,
prefab: "prefab/GameLogin",
bundle: r.GameConsts.Bundle.entrance
}, n[i.GameLoading] = {
layer: a.LayerType.UI,
prefab: "prefab/GameLoading",
bundle: r.GameConsts.Bundle.entrance
}, n[i.NoPlatLogin] = {
layer: a.LayerType.Dialog,
prefab: "prefab/NoPlatLogin",
bundle: r.GameConsts.Bundle.entrance
}, n[i.ReloginDialog] = {
layer: a.LayerType.System,
prefab: "prefab/common/V_ReloginDialog",
bundle: r.GameConsts.Bundle.entrance
}, n[i.PromptSimple] = {
layer: a.LayerType.PopUp,
prefab: "prefab/common/V_PromptSimple",
bundle: r.GameConsts.Bundle.entrance
}, n[i.LongTxtDialog] = {
layer: a.LayerType.PopUp,
prefab: "prefab/common/V_LongTxtDialog",
bundle: r.GameConsts.Bundle.entrance
}, n[i.UpdateRes] = {
layer: a.LayerType.UI,
prefab: "prefab/F_UpdateRes",
bundle: r.GameConsts.Bundle.entrance
}, n[i.GameResUpdate] = {
layer: a.LayerType.PopUp,
prefab: "prefab/GameResUpdate",
bundle: r.GameConsts.Bundle.entrance
}, n[i.SoundSet] = {
layer: a.LayerType.PopUp,
prefab: "prefab/V_SoundSet",
bundle: r.GameConsts.Bundle.entrance
}, n);
cc._RF.pop();
}, {
"../../Script/game/GameConsts": void 0,
"../../c2f-framework/define/C2FUIDef": void 0
} ],
GameCaches: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8db3aUYrT1D6qtuye+OPCIj", "GameCaches");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.GameCaches = void 0;
var n = function() {
function t() {
this.csvs = [];
}
Object.defineProperty(t, "ins", {
get: function() {
t._ins || (t._ins = new t());
return t._ins;
},
enumerable: !1,
configurable: !0
});
t.prototype.addCsvCache = function(t) {
this.csvs.push(t);
};
t.prototype.clearCsvCache = function() {
for (var t = 0, e = this.csvs; t < e.length; t++) e[t].clear();
this.csvs = [];
};
t.prototype.clearAllCache = function() {
this.clearCsvCache();
};
t._ins = null;
return t;
}();
o.GameCaches = n;
cc._RF.pop();
}, {} ],
GameConfig: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7185cXkKU9LIJyMFVSXpGZG", "GameConfig");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n;
(function(t) {
t[t.JSON = 1] = "JSON";
t[t.CSV = 2] = "CSV";
})(n || (n = {}));
var i = function() {
function t() {
this.cfgs = null;
this.type = null;
this.actLanguage = null;
this.cfgs = new Map();
}
Object.defineProperty(t, "ins", {
get: function() {
t._ins || (t._ins = new t());
return t._ins;
},
enumerable: !1,
configurable: !0
});
t.prototype.clear = function() {};
t.prototype.getCfgData = function(t) {
var e = null;
this.cfgs && (e = this.cfgs.get(t));
return e;
};
t.prototype.isJsonCfg = function() {
return this.type == n.JSON;
};
t.prototype.setActLanguageTab = function() {};
t._ins = null;
return t;
}();
szg.cfg = i.ins;
cc._RF.pop();
}, {} ],
GameLoadingModel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "876923ERMRCR6hLk2vwGLXh", "GameLoadingModel");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__awaiter || function(t, e, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(t) {
try {
s(n.next(t));
} catch (t) {
r(t);
}
}
function c(t) {
try {
s(n.throw(t));
} catch (t) {
r(t);
}
}
function s(t) {
t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(a, c);
var e;
}
s((n = n.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s, u = t("../../../Script/game/GameConsts"), l = t("../../../c2f-framework/define/C2FEnum"), p = t("./../../../c2f-framework/gui/layer/UIModelBase");
(function(t) {
t[t.csv = 1] = "csv";
t[t.json = 2] = "json";
t[t.homeView = 3] = "homeView";
t[t.RedDot = 4] = "RedDot";
t[t.ResidentRes = 5] = "ResidentRes";
t[t.batBullet = 6] = "batBullet";
t[t.batMonster = 7] = "batMonster";
t[t.batHero = 8] = "batHero";
t[t.batEffect = 9] = "batEffect";
t[t.batBg = 10] = "batBg";
t[t.batRoom = 11] = "batRoom";
t[t.batAudio = 12] = "batAudio";
t[t.battleView = 13] = "battleView";
})(s || (s = {}));
var f = cc._decorator, d = f.ccclass, h = (f.property, function(e) {
i(o, e);
function o() {
var t = null !== e && e.apply(this, arguments) || this;
t.prefabName = "GameLoading";
return t;
}
Object.defineProperty(o.prototype, "input", {
get: function() {
return this._input;
},
set: function(t) {
this._input = t;
},
enumerable: !1,
configurable: !0
});
o.prototype.loadTask = function() {
switch (this.input.type) {
case u.GameConsts.LoadingType.home:
this.loadCfgFiles(this.updateProgInfo.bind(this), this.onConfigLoadEnd.bind(this));
break;

case u.GameConsts.LoadingType.battle:
this.loadBattleRes(this.input.param, this.updateProgInfo.bind(this), this.onTaskEnd.bind(this));
}
};
o.prototype.updateProgInfo = function(t, e) {
void 0 === e && (e = "");
this.emit(l.C2FEnum.Event.ChangeViewValue, "barLoadingProgressBar", function(e) {
e.progress = t;
});
this.emit(l.C2FEnum.Event.ChangeViewValue, "progressLabel", function(e) {
e.string = (100 * t).toFixed(1) + "%";
});
this.emit(l.C2FEnum.Event.ChangeViewValue, "noticeTopLabel", function(t) {
t.string = e;
});
};
o.prototype.onConfigLoadEnd = function() {
szg.player.cfgLoaded = !0;
this.loadHomeViewRes(this.updateProgInfo.bind(this), this.onTaskEnd.bind(this));
};
o.prototype.onTaskEnd = function() {
return a(this, void 0, void 0, function() {
return c(this, function() {
this.input && this.input.endCb && this.input.endCb();
return [ 2 ];
});
});
};
o.prototype.loadCfgFiles = function(t, e) {
var o = [ {
kind: s.csv,
data: null
}, {
kind: s.json,
data: null
} ];
this.doLineTask(o, t, e);
};
o.prototype.loadHomeViewRes = function(t, e) {
var o = [ {
kind: s.RedDot,
data: null
}, {
kind: s.homeView,
data: null
}, {
kind: s.ResidentRes,
data: null
} ];
this.doLineTask(o, t, e);
};
o.prototype.loadBattleRes = function(t, e, o) {
var n = [ {
kind: s.batBullet,
data: t
}, {
kind: s.batMonster,
data: t
}, {
kind: s.batHero,
data: t
}, {
kind: s.batEffect,
data: t
}, {
kind: s.batBg,
data: t
}, {
kind: s.batRoom,
data: t
}, {
kind: s.batAudio,
data: t
}, {
kind: s.battleView,
data: t
} ];
this.doLineTask(n, e, o);
};
o.prototype.doLineTask = function(t, e, o) {
var n = this.getTaskFuncList(t), i = n.length;
if (i <= 0) o && o(); else {
var r = 0, a = function() {
r++;
s();
}, c = function(t, o) {
e && e(r / i + 1 / i * (t / o));
t >= o && a();
}, s = function() {
r >= n.length ? o && o() : n[r](t[r].data, c);
};
s();
}
};
o.prototype.getTaskFuncList = function(t) {
for (var e = [], o = 0, n = t; o < n.length; o++) switch (n[o].kind) {
case s.csv:
e.push(this.loadCSV.bind(this));
break;

case s.json:
e.push(this.loadJSON.bind(this));
break;

case s.RedDot:
e.push(this.initRedDot.bind(this));
break;

case s.homeView:
e.push(this.loadHomeView.bind(this));
break;

case s.ResidentRes:
e.push(this.loadResidentRes.bind(this));
break;

case s.batBullet:
e.push(this.loadBattleBullet.bind(this));
break;

case s.batMonster:
e.push(this.loadBattleMonster.bind(this));
break;

case s.batHero:
e.push(this.loadBattleHero.bind(this));
break;

case s.batEffect:
e.push(this.loadBattleEffect.bind(this));
break;

case s.batRoom:
e.push(this.loadBattleRooms.bind(this));
break;

case s.batBg:
e.push(this.loadBattleBg.bind(this));
break;

case s.batAudio:
e.push(this.loadBattleAudio.bind(this));
break;

case s.battleView:
e.push(this.loadBattleView.bind(this));
}
return e;
};
o.prototype.loadCSV = function(t, e) {
szg.cfg.loadAllCSV(function(t, o) {
e && e(t, o);
});
};
o.prototype.loadJSON = function(t, e) {
szg.cfg.loadAllJson(function(t, o) {
e && e(t, o);
});
};
o.prototype.loadHomeView = function(e, o) {
t("ResidentResMgr").ResidentResMgr.ins.loadGameHomePrefab(function() {
o && o(1, 1);
});
};
o.prototype.initRedDot = function(e, o) {
t("ResidentResMgr").ResidentResMgr.ins.loadRedDotPrefab(function(t) {
szg.player.redDot.initRedDot(t);
o && o(1, 1);
});
};
o.prototype.loadResidentRes = function(e, o) {
var n = 0, i = function() {
o && o(n, 2);
}, r = t("ResidentResMgr").ResidentResMgr;
r.ins.loadBattleStartSpine(function() {
n++;
i();
});
r.ins.initMainTeamRes(function() {
n++;
i();
});
};
o.prototype.loadBattleBullet = function(t, e) {
t.preloadBulletRes(function(t, o) {
e && e(t, o);
});
};
o.prototype.loadBattleMonster = function(t, e) {
t.preloadMonsterRes(function(t, o) {
e && e(t, o);
});
};
o.prototype.loadBattleHero = function(t, e) {
t.preloadHeroRes(function(t, o) {
e && e(t, o);
});
};
o.prototype.loadBattleEffect = function(t, e) {
t.preloadEffectRes(function(t, o) {
e && e(t, o);
});
};
o.prototype.loadBattleView = function() {};
o.prototype.loadBattleRooms = function(t, e) {
t.preloadBatBg(function(t, o) {
e && e(t, o);
});
};
o.prototype.loadBattleBg = function(t, e) {
t.preloadRoomFrames(function(t, o) {
e && e(t, o);
});
};
o.prototype.loadBattleAudio = function(t, e) {
t.preloadAudioRes(function(t, o) {
e && e(t, o);
});
};
return r([ d ], o);
}(p.UIModelBase));
o.default = h;
cc._RF.pop();
}, {
"../../../Script/game/GameConsts": void 0,
"../../../c2f-framework/define/C2FEnum": void 0,
"./../../../c2f-framework/gui/layer/UIModelBase": void 0,
ResidentResMgr: void 0
} ],
GameLoadingView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "eaebbLRZnRDC6UUEgoJkY6o", "GameLoadingView");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./../../../c2f-framework/gui/layer/UIViewBase"), c = cc._decorator, s = c.ccclass, u = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "GameLoading";
e.barLoadingSprite = void 0;
e.barLoadingProgressBar = void 0;
e.noticeBotLabel = void 0;
e.noticeBotLabelOutline = void 0;
e.progressLabel = void 0;
e.progressLabelOutline = void 0;
return e;
}
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
};
e.prototype.onEnable = function() {
t.prototype.onEnable && t.prototype.onEnable.call(this);
this.addEvent();
};
e.prototype.onDisable = function() {
t.prototype.onDisable && t.prototype.onDisable.call(this);
this.removeEvent();
};
e.prototype.initProperty = function() {
t.prototype.initProperty.call(this);
this.barLoading = this.get("_barLoading_");
this.barLoadingSprite = this.barLoading.getComponent(cc.Sprite);
this.barLoadingProgressBar = this.barLoading.getComponent(cc.ProgressBar);
this.noticeBot = this.get("_noticeBot_");
this.noticeBotLabel = this.noticeBot.getComponent(cc.Label);
this.noticeBotLabelOutline = this.noticeBot.getComponent(cc.LabelOutline);
this.progress = this.get("_progress_");
this.progressLabel = this.progress.getComponent(cc.Label);
this.progressLabelOutline = this.progress.getComponent(cc.LabelOutline);
};
e.prototype.addEvent = function() {};
e.prototype.removeEvent = function() {};
return r([ s ], e);
}(a.UIViewBase));
o.default = u;
cc._RF.pop();
}, {
"./../../../c2f-framework/gui/layer/UIViewBase": void 0
} ],
GameLoading: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3c6ebrxwO1D4IUdTY0ZNzmb", "GameLoading");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./../../../c2f-framework/gui/layer/UIVControlBase"), c = cc._decorator, s = c.ccclass, u = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "GameLoading";
e.model = void 0;
e.view = void 0;
return e;
}
e.prototype.onViewOpen = function(t) {
this.model.input = t;
};
e.prototype.start = function() {
var t = this;
this.view.progressLabel.string = "";
this.view.barLoadingProgressBar.progress = 0;
this.scheduleOnce(function() {
t.model.loadTask();
}, .1);
this.updateAuditProg();
};
e.prototype.updateAuditProg = function() {
szg.plat.isAudit;
};
return r([ s ], e);
}(a.UIVControlBase));
o.default = u;
cc._RF.pop();
}, {
"./../../../c2f-framework/gui/layer/UIVControlBase": void 0
} ],
GameLoginModel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "42c0dTIMO5A/bJR7PZgJQke", "GameLoginModel");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./../../../c2f-framework/gui/layer/UIModelBase"), c = cc._decorator, s = c.ccclass, u = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "GameLogin";
return e;
}
return r([ s ], e);
}(a.UIModelBase));
o.default = u;
cc._RF.pop();
}, {
"./../../../c2f-framework/gui/layer/UIModelBase": void 0
} ],
GameLoginView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d7ceeIfjM9HYoWbgtG1+WKD", "GameLoginView");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./../../../c2f-framework/gui/layer/UIViewBase"), c = cc._decorator, s = c.ccclass, u = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "GameLogin";
e.btn2048Button = void 0;
e.btnCreateMapButton = void 0;
e.btnStartButton = void 0;
e.btnBasketBallButton = void 0;
e.btnLoginButton = void 0;
return e;
}
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
};
e.prototype.onEnable = function() {
t.prototype.onEnable && t.prototype.onEnable.call(this);
this.addEvent();
};
e.prototype.onDisable = function() {
t.prototype.onDisable && t.prototype.onDisable.call(this);
this.removeEvent();
};
e.prototype.initProperty = function() {
t.prototype.initProperty.call(this);
this.btn2048 = this.get("_btn2048_");
this.btn2048Button = this.btn2048.getComponent(cc.Button);
this.btnCreateMap = this.get("_btnCreateMap_");
this.btnCreateMapButton = this.btnCreateMap.getComponent(cc.Button);
this.btnStart = this.get("_btnStart_");
this.btnStartButton = this.btnStart.getComponent(cc.Button);
this.btnBasketBall = this.get("_btnBasketBall_");
this.btnBasketBallButton = this.btnBasketBall.getComponent(cc.Button);
this.btnLogin = this.get("_btnLogin_");
this.btnLoginButton = this.btnLogin.getComponent(cc.Button);
};
e.prototype.addEvent = function() {
this.btn2048Button.node.on("click", this.onbtn2048ButtonClick, this);
this.btnCreateMapButton.node.on("click", this.onbtnCreateMapButtonClick, this);
this.btnStartButton.node.on("click", this.onbtnStartButtonClick, this);
this.btnBasketBallButton.node.on("click", this.onbtnBasketBallButtonClick, this);
this.btnLoginButton.node.on("click", this.onbtnLoginButtonClick, this);
};
e.prototype.removeEvent = function() {
this.btn2048Button.node.off("click", this.onbtn2048ButtonClick, this);
this.btnCreateMapButton.node.off("click", this.onbtnCreateMapButtonClick, this);
this.btnStartButton.node.off("click", this.onbtnStartButtonClick, this);
this.btnBasketBallButton.node.off("click", this.onbtnBasketBallButtonClick, this);
this.btnLoginButton.node.off("click", this.onbtnLoginButtonClick, this);
};
e.prototype.onbtn2048ButtonClick = function(t) {
this.emit("click", t);
};
e.prototype.onbtnCreateMapButtonClick = function(t) {
this.emit("click", t);
};
e.prototype.onbtnStartButtonClick = function(t) {
this.emit("click", t);
};
e.prototype.onbtnBasketBallButtonClick = function(t) {
this.emit("click", t);
};
e.prototype.onbtnLoginButtonClick = function(t) {
this.emit("click", t);
};
return r([ s ], e);
}(a.UIViewBase));
o.default = u;
cc._RF.pop();
}, {
"./../../../c2f-framework/gui/layer/UIViewBase": void 0
} ],
GameLogin: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5cac2q2bgtDRaFqRndTVwUo", "GameLogin");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__awaiter || function(t, e, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(t) {
try {
s(n.next(t));
} catch (t) {
r(t);
}
}
function c(t) {
try {
s(n.throw(t));
} catch (t) {
r(t);
}
}
function s(t) {
t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(a, c);
var e;
}
s((n = n.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./../../../c2f-framework/gui/layer/UIVControlBase"), u = t("./../../../c2f-framework/define/C2FEnum"), l = t("../../../Script/game/GameHelper"), p = t("../../../Script/game/GameConsts"), f = t("../../../Script/game/UIHelper"), d = t("../../../Script/game/UINetwork"), h = cc._decorator, g = h.ccclass, y = (h.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "GameLogin";
e.model = void 0;
e.view = void 0;
return e;
}
e.prototype.onViewOpen = function() {};
e.prototype.onEnable = function() {
t.prototype.onEnable && t.prototype.onEnable.call(this);
this.on(u.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
};
e.prototype.onDisable = function() {
t.prototype.onDisable && t.prototype.onDisable.call(this);
this.off(u.C2FEnum.UIEvent.ButtonClick);
};
e.prototype.onLoad = function() {
t.prototype.onLoad && t.prototype.onLoad.call(this);
cc.macro.ENABLE_MULTI_TOUCH = !1;
};
e.prototype.onDestroy = function() {
t.prototype.onDestroy && t.prototype.onDestroy.call(this);
};
e.prototype.start = function() {
f.UIHelper.playMusic("backMusic");
};
e.prototype.onButtonClick = function(t, e) {
return a(this, void 0, void 0, function() {
return c(this, function() {
switch (e.name) {
case this.view.btnStartButton.name:
this.CC_onClickbtnStart();
break;

case this.view.btnBasketBallButton.name:
this.CC_onClickbtnBasketBall();
break;

case this.view.btnLoginButton.name:
this.CC_onClickbtnLogin();
break;

case this.view.btn2048Button.name:
this.CC_onClickbtn2048();
break;

case this.view.btnCreateMapButton.name:
this.CC_onClickbtnCreateMap();
}
return [ 2 ];
});
});
};
e.prototype.CC_onClickbtnStart = function() {
l.GameHelper.loadBundle(p.GameConsts.Bundle.mainPack).then(function(t) {
c2f.gui.open(t.DesStarMain);
});
};
e.prototype.CC_onClickbtn2048 = function() {
l.GameHelper.loadBundle(p.GameConsts.Bundle.mainPack).then(function(t) {
c2f.gui.open(t.Physics2048Main);
});
};
e.prototype.CC_onClickbtnCreateMap = function() {
l.GameHelper.loadBundle(p.GameConsts.Bundle.mainPack).then(function(t) {
c2f.gui.open(t.MapCreateMain);
});
};
e.prototype.CC_onClickbtnBasketBall = function() {
l.GameHelper.loadBundle(p.GameConsts.Bundle.mainPack).then(function(t) {
c2f.gui.open(t.BasketBallMain);
});
};
e.prototype.connetToServer = function() {
var t = this;
c2f.net.toUI || (c2f.net.toUI = new d.UINetwork());
c2f.gui.showLoading();
c2f.net.initService().then(function() {
c2f.net.connect("ws://localhost:8080", function(e) {
c2f.gui.hideLoading();
if ("Connected" === e) t.loginToGame(); else {
c2f.gui.notifyTxt("1006");
c2f.net.purge();
}
});
});
};
e.prototype.loginToGame = function() {
c2f.gui.notifyTxt("513");
szg.player.rank.reqLogin("lcy", "gogogo");
};
e.prototype.CC_onClickbtnLogin = function() {};
return r([ g ], e);
}(s.UIVControlBase));
o.default = y;
cc._RF.pop();
}, {
"../../../Script/game/GameConsts": void 0,
"../../../Script/game/GameHelper": void 0,
"../../../Script/game/UIHelper": void 0,
"../../../Script/game/UINetwork": void 0,
"./../../../c2f-framework/define/C2FEnum": void 0,
"./../../../c2f-framework/gui/layer/UIVControlBase": void 0
} ],
GameLogoModel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2cf17C6+VpNj5XtW7q8VzFC", "GameLogoModel");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./../../../c2f-framework/gui/layer/UIModelBase"), c = cc._decorator, s = c.ccclass, u = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "GameLogo";
return e;
}
return r([ s ], e);
}(a.UIModelBase));
o.default = u;
cc._RF.pop();
}, {
"./../../../c2f-framework/gui/layer/UIModelBase": void 0
} ],
GameLogoView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5c83cJ6cABH9arCAD286PkG", "GameLogoView");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./../../../c2f-framework/gui/layer/UIViewBase"), c = cc._decorator, s = c.ccclass, u = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "GameLogo";
e.barSprite = void 0;
e.barProgressBar = void 0;
return e;
}
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
};
e.prototype.onEnable = function() {
t.prototype.onEnable && t.prototype.onEnable.call(this);
this.addEvent();
};
e.prototype.onDisable = function() {
t.prototype.onDisable && t.prototype.onDisable.call(this);
this.removeEvent();
};
e.prototype.initProperty = function() {
t.prototype.initProperty.call(this);
this.bar = this.get("_bar_");
this.barSprite = this.bar.getComponent(cc.Sprite);
this.barProgressBar = this.bar.getComponent(cc.ProgressBar);
};
e.prototype.addEvent = function() {};
e.prototype.removeEvent = function() {};
return r([ s ], e);
}(a.UIViewBase));
o.default = u;
cc._RF.pop();
}, {
"./../../../c2f-framework/gui/layer/UIViewBase": void 0
} ],
GameLogo: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1423c+jsLRGaamI6FwTSC9s", "GameLogo");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__awaiter || function(t, e, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(t) {
try {
s(n.next(t));
} catch (t) {
r(t);
}
}
function c(t) {
try {
s(n.throw(t));
} catch (t) {
r(t);
}
}
function s(t) {
t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(a, c);
var e;
}
s((n = n.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./../../../c2f-framework/gui/layer/UIVControlBase"), u = t("./../../../c2f-framework/define/C2FEnum"), l = t("../EntranceView"), p = cc._decorator, f = p.ccclass, d = (p.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "GameLogo";
e.model = void 0;
e.view = void 0;
return e;
}
e.prototype.onEnable = function() {
t.prototype.onEnable && t.prototype.onEnable.call(this);
this.on(u.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
};
e.prototype.onDisable = function() {
t.prototype.onDisable && t.prototype.onDisable.call(this);
this.on(u.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
};
e.prototype.onButtonClick = function(t, e) {
return a(this, void 0, void 0, function() {
return c(this, function() {
e.name;
return [ 2 ];
});
});
};
e.prototype.onViewOpen = function() {};
e.prototype.onLoad = function() {
t.prototype.onLoad && t.prototype.onLoad.call(this);
cc.debug.setDisplayStats(!1);
};
e.prototype.onDestroy = function() {
t.prototype.onDestroy.call(this);
};
e.prototype.start = function() {
this.startGame();
};
e.prototype.startGame = function() {
this.initLanguage();
};
e.prototype.initLanguage = function() {
c2f.language.initLanguage(this.playLogoAnima.bind(this));
szg.player.initModules();
};
e.prototype.playLogoAnima = function() {
var t = this;
this.view.barProgressBar.progress = .1;
cc.tween(this.view.barProgressBar).to(.3, {
progress: 1
}).call(function() {
t.openLoginView();
}).start();
};
e.prototype.openLoginView = function() {
var t = {
onUIAdded: function() {
c2f.gui.remove(l.EntranceUI.GameLogo);
}
};
c2f.gui.open(l.EntranceUI.GameLogin, null, t);
};
return r([ f ], e);
}(s.UIVControlBase));
o.default = d;
cc._RF.pop();
}, {
"../EntranceView": "EntranceView",
"./../../../c2f-framework/define/C2FEnum": void 0,
"./../../../c2f-framework/gui/layer/UIVControlBase": void 0
} ],
LoginData: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ef0b9TEEkVLeaMr14rQDH9Z", "LoginData");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.LoginData = void 0;
var n = t("../../../../resources/proto/msgid"), i = function() {
function t() {
this.reset();
}
t.prototype.reset = function() {};
t.prototype.reqLogin = function(t, e) {
var o = {
UserName: t,
PassWord: e
};
c2f.net.sendMsg(n.msgid.C_Login, o);
};
return t;
}();
o.LoginData = i;
cc._RF.pop();
}, {
"../../../../resources/proto/msgid": void 0
} ],
NoPlatLoginModel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9fd390lsLJDcYoMzX8/nyoU", "NoPlatLoginModel");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../Script/game/GameConsts"), c = t("../../../c2f-framework/define/C2FEnum"), s = t("./../../../c2f-framework/gui/layer/UIModelBase"), u = cc._decorator, l = u.ccclass, p = (u.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "NoPlatLogin";
return e;
}
Object.defineProperty(e.prototype, "accountId", {
get: function() {
return this._accountId;
},
set: function(t) {
this._accountId = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "sdkFlag", {
get: function() {
return this._sdkFlag;
},
set: function(t) {
this._sdkFlag = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "payFlag", {
get: function() {
return this._payFlag;
},
set: function(t) {
this._payFlag = t;
},
enumerable: !1,
configurable: !0
});
e.prototype.loadLastAccId = function() {
var t = c2f.storage.getPlainItem(a.GameConsts.NoPlatLastAccId, "");
if (t.length > 0) {
this.accountId = t;
this.emit(c.C2FEnum.Event.ChangeViewValue, "userIdEditBox", function(e) {
e.string = t;
});
}
};
e.prototype.saveLoginInfo = function() {
c2f.storage.setPlainItem(a.GameConsts.NoPlatLastAccId, this.accountId);
};
return r([ l ], e);
}(s.UIModelBase));
o.default = p;
cc._RF.pop();
}, {
"../../../Script/game/GameConsts": void 0,
"../../../c2f-framework/define/C2FEnum": void 0,
"./../../../c2f-framework/gui/layer/UIModelBase": void 0
} ],
NoPlatLoginView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bba6dTV2TpGgrO1R0bUM29t", "NoPlatLoginView");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./../../../c2f-framework/gui/layer/UIViewBase"), c = t("./../../../c2f-framework/component/common/LinkPrefab"), s = t("./../controls/entity/PopDlgPanel"), u = cc._decorator, l = u.ccclass, p = (u.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "NoPlatLogin";
e.dlgPanelLinkPrefab = void 0;
e.dlgPanelPopDlgPanel = void 0;
e.userIdEditBox = void 0;
e.platFlagEditBox = void 0;
e.payFlagEditBox = void 0;
e.loginButton = void 0;
return e;
}
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
};
e.prototype.onEnable = function() {
t.prototype.onEnable && t.prototype.onEnable.call(this);
this.addEvent();
};
e.prototype.onDisable = function() {
t.prototype.onDisable && t.prototype.onDisable.call(this);
this.removeEvent();
};
e.prototype.initProperty = function() {
t.prototype.initProperty.call(this);
this.dlgPanel = this.get("_dlgPanel_");
this.dlgPanelLinkPrefab = this.dlgPanel.getComponent(c.default);
this.dlgPanelPopDlgPanel = this.dlgPanel.getComponent(c.default).getComponentEx(s.default);
this.userId = this.get("_userId_");
this.userIdEditBox = this.userId.getComponent(cc.EditBox);
this.platFlag = this.get("_platFlag_");
this.platFlagEditBox = this.platFlag.getComponent(cc.EditBox);
this.payFlag = this.get("_payFlag_");
this.payFlagEditBox = this.payFlag.getComponent(cc.EditBox);
this.login = this.get("_login_");
this.loginButton = this.login.getComponent(cc.Button);
};
e.prototype.addEvent = function() {
this.userIdEditBox.node.on("editing-did-began", this.onuserIdEditBoxEditingBegan, this);
this.userIdEditBox.node.on("editing-did-ended", this.onuserIdEditBoxEditingEnded, this);
this.userIdEditBox.node.on("editing-return", this.onuserIdEditBoxEditingReturn, this);
this.userIdEditBox.node.on("text-changed", this.onuserIdEditBoxTextChanged, this);
this.platFlagEditBox.node.on("editing-did-began", this.onplatFlagEditBoxEditingBegan, this);
this.platFlagEditBox.node.on("editing-did-ended", this.onplatFlagEditBoxEditingEnded, this);
this.platFlagEditBox.node.on("editing-return", this.onplatFlagEditBoxEditingReturn, this);
this.platFlagEditBox.node.on("text-changed", this.onplatFlagEditBoxTextChanged, this);
this.payFlagEditBox.node.on("editing-did-began", this.onpayFlagEditBoxEditingBegan, this);
this.payFlagEditBox.node.on("editing-did-ended", this.onpayFlagEditBoxEditingEnded, this);
this.payFlagEditBox.node.on("editing-return", this.onpayFlagEditBoxEditingReturn, this);
this.payFlagEditBox.node.on("text-changed", this.onpayFlagEditBoxTextChanged, this);
this.loginButton.node.on("click", this.onloginButtonClick, this);
};
e.prototype.removeEvent = function() {
this.userIdEditBox.node.off("editing-did-began", this.onuserIdEditBoxEditingBegan, this);
this.userIdEditBox.node.off("editing-did-ended", this.onuserIdEditBoxEditingEnded, this);
this.userIdEditBox.node.off("editing-return", this.onuserIdEditBoxEditingReturn, this);
this.userIdEditBox.node.off("text-changed", this.onuserIdEditBoxTextChanged, this);
this.platFlagEditBox.node.off("editing-did-began", this.onplatFlagEditBoxEditingBegan, this);
this.platFlagEditBox.node.off("editing-did-ended", this.onplatFlagEditBoxEditingEnded, this);
this.platFlagEditBox.node.off("editing-return", this.onplatFlagEditBoxEditingReturn, this);
this.platFlagEditBox.node.off("text-changed", this.onplatFlagEditBoxTextChanged, this);
this.payFlagEditBox.node.off("editing-did-began", this.onpayFlagEditBoxEditingBegan, this);
this.payFlagEditBox.node.off("editing-did-ended", this.onpayFlagEditBoxEditingEnded, this);
this.payFlagEditBox.node.off("editing-return", this.onpayFlagEditBoxEditingReturn, this);
this.payFlagEditBox.node.off("text-changed", this.onpayFlagEditBoxTextChanged, this);
this.loginButton.node.off("click", this.onloginButtonClick, this);
};
e.prototype.onuserIdEditBoxEditingBegan = function(t) {
this.emit("editing-did-began", t);
};
e.prototype.onuserIdEditBoxEditingEnded = function(t) {
this.emit("editing-did-ended", t);
};
e.prototype.onuserIdEditBoxEditingReturn = function(t) {
this.emit("editing-return", t);
};
e.prototype.onuserIdEditBoxTextChanged = function(t) {
this.emit("text-changed", t);
};
e.prototype.onplatFlagEditBoxEditingBegan = function(t) {
this.emit("editing-did-began", t);
};
e.prototype.onplatFlagEditBoxEditingEnded = function(t) {
this.emit("editing-did-ended", t);
};
e.prototype.onplatFlagEditBoxEditingReturn = function(t) {
this.emit("editing-return", t);
};
e.prototype.onplatFlagEditBoxTextChanged = function(t) {
this.emit("text-changed", t);
};
e.prototype.onpayFlagEditBoxEditingBegan = function(t) {
this.emit("editing-did-began", t);
};
e.prototype.onpayFlagEditBoxEditingEnded = function(t) {
this.emit("editing-did-ended", t);
};
e.prototype.onpayFlagEditBoxEditingReturn = function(t) {
this.emit("editing-return", t);
};
e.prototype.onpayFlagEditBoxTextChanged = function(t) {
this.emit("text-changed", t);
};
e.prototype.onloginButtonClick = function(t) {
this.emit("click", t);
};
return r([ l ], e);
}(a.UIViewBase));
o.default = p;
cc._RF.pop();
}, {
"./../../../c2f-framework/component/common/LinkPrefab": void 0,
"./../../../c2f-framework/gui/layer/UIViewBase": void 0,
"./../controls/entity/PopDlgPanel": "PopDlgPanel"
} ],
NoPlatLogin: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0d2b7WTfUNOQ7ARpl5Y6Asa", "NoPlatLogin");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__awaiter || function(t, e, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(t) {
try {
s(n.next(t));
} catch (t) {
r(t);
}
}
function c(t) {
try {
s(n.throw(t));
} catch (t) {
r(t);
}
}
function s(t) {
t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(a, c);
var e;
}
s((n = n.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./../../../c2f-framework/gui/layer/UIVControlBase"), u = t("./../../../c2f-framework/define/C2FEnum"), l = t("../EntranceView"), p = cc._decorator, f = p.ccclass, d = (p.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "NoPlatLogin";
e.model = void 0;
e.view = void 0;
e.inputDt = null;
return e;
}
e.prototype.onEnable = function() {
t.prototype.onEnable && t.prototype.onEnable.call(this);
this.on(u.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
};
e.prototype.onDisable = function() {
t.prototype.onDisable && t.prototype.onDisable.call(this);
this.on(u.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
};
e.prototype.onButtonClick = function(t, e) {
return a(this, void 0, void 0, function() {
return c(this, function() {
switch (e.name) {
case this.view.loginButton.name:
this.CC_onClicklogin();
}
return [ 2 ];
});
});
};
e.prototype.CC_onClicklogin = function() {
var t = this.view.userIdEditBox.string.trim();
if (t.length <= 0) c2f.gui.notifyTxt("account id is empty!"); else {
this.model.accountId = t;
this.model.sdkFlag = this.view.platFlagEditBox.string.trim();
this.model.payFlag = this.view.payFlagEditBox.string.trim();
this.model.saveLoginInfo();
this.inputDt && this.inputDt.loginCb && this.inputDt.loginCb(this.model.accountId, this.model.sdkFlag, this.model.payFlag);
c2f.gui.remove(l.EntranceUI.NoPlatLogin);
}
};
e.prototype.onViewOpen = function(t) {
this.model.loadLastAccId();
this.inputDt = t;
};
return r([ f ], e);
}(s.UIVControlBase));
o.default = d;
cc._RF.pop();
}, {
"../EntranceView": "EntranceView",
"./../../../c2f-framework/define/C2FEnum": void 0,
"./../../../c2f-framework/gui/layer/UIVControlBase": void 0
} ],
PlatBase: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "aaf4bKYPfxD0otBqjtN2L2G", "PlatBase");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.PlatBase = void 0;
var n = t("./PlatDefine"), i = function() {
function t() {
this.playerInfo = new n.PlatDef.GameUserInfo();
this.platCfg = null;
this.accoutInfo = null;
this.phoneInfo = null;
this.sdkInitSuc = !1;
this.showPolicies = !0;
this.loadLocalSetting();
}
t.prototype.loadLocalSetting = function() {
this.supportQuitGame = !1;
this.supportAccountCenter = !1;
this.supportSwitchAcc = !1;
this.supportFacebook = !1;
this.showUserAgreement = !0;
};
t.prototype.updatePlayerInfo = function(t) {
for (var e in t) this.playerInfo[e] = t[e];
};
t.prototype.loadPlatCfg = function() {
return null;
};
t.prototype.loadPhoneInfo = function() {};
t.prototype.copyToClipboard = function(t) {
if (cc.sys.isBrowser) try {
navigator && navigator.clipboard && navigator.clipboard.writeText(t);
} catch (t) {
cc.log("拷贝文本失败");
}
};
t.prototype.initBugly = function() {};
t.prototype.buglySetUserId = function() {};
t.prototype.setAppVersion = function() {};
t.prototype.showDevUI = function() {
return !1;
};
t.prototype.initSDK = function() {};
t.prototype.login = function() {};
t.prototype.logout = function() {};
t.prototype.switchAccount = function() {};
t.prototype.pay = function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
};
t.prototype.quitGame = function() {};
t.prototype.openAccountCenter = function() {};
t.prototype.submitInfo = function() {};
t.prototype.showPrivacyPolicy = function() {};
t.prototype.share = function() {};
t.prototype.sumbitVipInfo = function() {};
t.prototype.toAppStroeScore = function() {};
t.prototype.commonFunc = function() {};
t.prototype.getOtherByFlag = function() {
return "";
};
t.prototype.onSdkInitRet = function(t) {
c2f.log.logSDK("SDK init result:", t);
var e = this.getRealData(t);
this.sdkInitSuc = e.code == n.PlatDef.RetCode.success;
cc.director.emit(n.PlatDef.SdkCBEvent.onSdkInit, this.sdkInitSuc);
this.loadPhoneInfo();
};
t.prototype.onSdkLoginRet = function(t) {
c2f.log.logSDK("SDK login result:", t);
var e = this.getRealData(t), o = e.code == n.PlatDef.RetCode.success;
if (o) {
this.accoutInfo = e;
this.accoutInfo.isBind = "" != e.facebook;
}
cc.director.emit(n.PlatDef.SdkCBEvent.onSdkLogin, o);
};
t.prototype.onLoadPhoneRet = function(t) {
c2f.log.logSDK("SDK phoneInfo result:", t);
this.phoneInfo = this.getRealData(t);
};
t.prototype.onSdkBindRet = function(t) {
c2f.log.logSDK("SDK bind result:", t);
var e = this.getRealData(t).code == n.PlatDef.RetCode.success;
this.accoutInfo.isBind = e;
cc.director.emit("onBindResult", e);
};
t.prototype.onSdkLogoutRet = function(t) {
c2f.log.logSDK("SDK logout result:", t);
};
t.prototype.onSdkPayRet = function(t) {
c2f.log.logSDK("SDK pay result:", t);
};
t.prototype.onSdkExitRet = function(t) {
c2f.log.logSDK("SDK exit result:", t);
};
t.prototype.onSdkSubmitVipRet = function(t) {
c2f.log.logSDK("SDK submit vip result:", t);
var e = this.getRealData(t).code == n.PlatDef.RetCode.success;
cc.director.emit(n.PlatDef.SdkCBEvent.onSdkVipSubmit, e);
};
t.prototype.getParamString = function(t) {
return "string" == typeof t ? t : JSON.stringify(t);
};
t.prototype.getRealData = function(t) {
return "string" == typeof t && t.length > 0 ? JSON.parse(t) : t;
};
return t;
}();
o.PlatBase = i;
cc._RF.pop();
}, {
"./PlatDefine": "PlatDefine"
} ],
PlatDefine: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ebc93t+tY1Lqo3ESZTD01tT", "PlatDefine");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.PlatDef = void 0;
(function(t) {
(function(t) {
t[t.success = 0] = "success";
t[t.failed = 1] = "failed";
t[t.cancel = 2] = "cancel";
t[t.unknown = 3] = "unknown";
t[t.wait = 4] = "wait";
})(t.RetCode || (t.RetCode = {}));
t.AccountLogin = function() {};
var e = function() {};
t.GameUserInfo = e;
var o = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return e;
}(e);
t.SubmitData = o;
t.PayExtend = function() {};
var n = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return e;
}(e);
t.PayData = n;
t.PhoneInfo = function() {
this.imei = "unknown";
this.deviceId = "unknown";
this.mac = "00:00:00:00";
this.resolution = "640x1136";
this.os = "MacOS";
this.osVersion = "1";
this.model = "MAC";
this.orientation = 3;
this.hollow = 0;
};
t.PlatCfg = function() {};
(function(t) {
t.sdkInit = "sdkInit";
t.sdkLogin = "sdkLogin";
t.sdkLogout = "sdkLogout";
t.sdkSwitchAcc = "sdkSwitchAcc";
t.sdkPay = "sdkPay";
t.sdkQuitGame = "sdkQuitGame";
t.sdkSubmit = "sdkSubmit";
t.sdkAccCenter = "sdkAccCenter";
t.sdkPrivacyPolicy = "sdkPrivacyPolicy";
t.sdkShare = "sdkShare";
t.sdkSetPayCbUrl = "sdkSetPayCbUrl";
t.sdkGetOtherInfo = "sdkGetOtherInfo";
t.sdkSubmitVipInfo = "sdkSubmitVipInfo";
t.sdkToAppScore = "sdkToAppScore";
t.getPlatCfg = "nativeGetPlatCfg";
t.loadPhoneInfo = "nativeLoadPhoneInfo";
t.copyToClipboard = "nativeCopyToClipboard";
t.initBugly = "nativeInitBugly";
t.buglySetUserId = "nativeBuglySetUserId";
t.setAppVersion = "nativeSetAppVersion";
t.commonFunc = "nativeCommonFunc";
})(t.SdkFuncName || (t.SdkFuncName = {}));
(function(t) {
t.onSdkInit = "onSdkInit";
t.onSdkExit = "onSdkExit";
t.onSdkLogin = "onSdkLogin";
t.onSdkLogout = "onSdkLogout";
t.onSdkSwitchAcc = "onSdkSwitchAcc";
t.onSdkPayResult = "onSdkPayResult";
t.onSdkBind = "onSdkBind";
t.onSdkUserInfoCmpl = "onSdkUserInfoCmpl";
t.onSdkShared = "onSdkShared";
t.onSdkAgreeProtocol = "onSdkAgreeProtocol";
t.onPhoneInfoResult = "onPhoneInfoResult";
t.onSdkSubmitVip = "onSdkSubmitVip";
})(t.SdkCbFuncName || (t.SdkCbFuncName = {}));
(function(t) {
t.onSdkInit = "onSdkInit";
t.onSdkLogin = "onSdkLogin";
t.onSdkBind = "onSdkBind";
t.onSdkVipSubmit = "onSdkVipSubmit";
})(t.SdkCBEvent || (t.SdkCBEvent = {}));
(function(t) {
t.createRole = "createRole";
t.login = "login";
t.logout = "logout";
t.exitGame = "exitGame";
t.levelUp = "levelUp";
t.pay = "pay";
t.selectSvr = "selectSvr";
t.changeName = "changeName";
t.loadHotRes = "loadHotRes";
t.resLoaded = "resLoaded";
t.guideComplete = "guideComplete";
t.firstCharge = "firstCharge";
t.joinSocity = "joinSocity";
t.custom = "custom";
})(t.SdkSubmitEvent || (t.SdkSubmitEvent = {}));
})(o.PlatDef || (o.PlatDef = {}));
cc._RF.pop();
}, {} ],
PlatHaidx: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1cc4aH/xl1OdY2lUbRU/vfl", "PlatHaidx");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.PlatHaidx = void 0;
var r = function(t) {
i(e, t);
function e() {
var e = t.call(this) || this;
e.sdkMapping = null;
e.andClass = "com.szGame.SZGProxy";
e.iosClass = "HaidxSDKHelper";
return e;
}
e.prototype.loadLocalSetting = function() {
t.prototype.loadLocalSetting.call(this);
this.supportAccountCenter = !0;
this.supportFacebook = !0;
this.showPolicies = !1;
this.showUserAgreement = !1;
};
return e;
}(t("./PlatNative").PlatNative);
o.PlatHaidx = r;
cc._RF.pop();
}, {
"./PlatNative": "PlatNative"
} ],
PlatHuanyu: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e8383ESBtZOYpS9F92qRROP", "PlatHuanyu");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.PlatHuanyu = void 0;
var r = function(t) {
i(e, t);
function e() {
var e = t.call(this) || this;
e.sdkMapping = null;
e.andClass = "com.szGame.SZGProxy";
return e;
}
return e;
}(t("./PlatNative").PlatNative);
o.PlatHuanyu = r;
cc._RF.pop();
}, {
"./PlatNative": "PlatNative"
} ],
PlatKuaihan: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "324d3S/IttLqLQOFFgUvUl0", "PlatKuaihan");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.PlatKuaihan = void 0;
var r = t("./PlatNative"), a = t("./PlatDefine"), c = function(t) {
i(e, t);
function e() {
var e = t.call(this) || this;
e.sdkMapping = null;
e.andClass = "com.szGame.SZGProxy";
return e;
}
e.prototype.noPlatLogined = function(t, e, o) {
var n = {};
n.code = a.PlatDef.RetCode.success;
n.userId = t;
n.createTs = c2f.utils.date.getLocalTick();
n.userToken = "token";
this.onSdkLoginRet(n);
e.length > 0 && (this.platCfg.superFlag = e);
o.length > 0 && (this.platCfg.payFlag = o);
};
e.prototype.initSDK = function() {
this.onSdkInitRet({
code: a.PlatDef.RetCode.success
});
};
e.prototype.login = function() {
c2f.gui.hideLoading();
};
e.prototype.logout = function() {
this.onSdkLogoutRet({
code: a.PlatDef.RetCode.success
});
};
e.prototype.quitGame = function() {
this.onSdkExitRet({
code: a.PlatDef.RetCode.success
});
};
e.prototype.showDevUI = function() {
return !0;
};
return e;
}(r.PlatNative);
o.PlatKuaihan = c;
cc._RF.pop();
}, {
"./PlatDefine": "PlatDefine",
"./PlatNative": "PlatNative"
} ],
PlatManager: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "53c07qGQodHYrsktZCvYYRn", "PlatManager");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../../Script/game/GameConsts"), a = t("../../../Script/game/GameHelper"), c = t("../../../c2f-framework/core/event/EventDispatcher"), s = t("./PlatHuanyu"), u = t("./PlatKuaihan"), l = t("./PlatHaidx"), p = t("./PlatNoPlat"), f = "kh_web", d = function(t) {
i(e, t);
function e() {
var e = t.call(this) || this;
e.current = null;
e.isAudit = !1;
e.httpRc4Key = void 0;
e.platFlag = c2f.storage.getPlainItem(r.GameConsts.PlatNameKey, f);
return e;
}
Object.defineProperty(e.prototype, "isAudit", {
get: function() {
return this._isAudit;
},
set: function(t) {
this._isAudit = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "httpRc4Key", {
get: function() {
return this._httpRc4Key;
},
set: function(t) {
this._httpRc4Key = t;
},
enumerable: !1,
configurable: !0
});
e.getInstance = function() {
this._instance || (this._instance = new e());
return this._instance;
};
e.prototype.init = function() {
if (!this.current) {
this.createCurPlat();
this.current.loadPlatCfg();
}
};
e.prototype.createCurPlat = function() {
switch (this.platFlag) {
case f:
this.current = new p.PlatNoPlat();
break;

case "huanyu":
case "sanjiu":
this.current = new s.PlatHuanyu();
break;

case "kuaihan":
this.current = new u.PlatKuaihan();
break;

case "haidx":
this.current = new l.PlatHaidx();
}
};
e.prototype.initSDK = function() {
this.current && (this.current.sdkInitSuc || this.current.initSDK(null));
};
e.prototype.sdkLogin = function() {
this.current && this.current.login();
};
e.prototype.sdkSwitchAccount = function() {
this.current && this.current.switchAccount();
};
e.prototype.sdkLogout = function() {
this.current && this.current.logout();
};
e.prototype.updatePlayerInfo = function(t) {
this.current && this.current.updatePlayerInfo(t);
};
e.prototype.submitInfo = function(t, e) {
this.current && this.current.submitInfo(t, e);
};
e.prototype.exitGame = function() {
this.current && this.current.supportQuitGame && this.current.quitGame();
};
e.prototype.gameShare = function() {
this.current && this.current.share();
};
e.prototype.showPrivacyPolicy = function() {
this.current && this.current.showPrivacyPolicy("");
};
e.prototype.initBugly = function() {
this.current && !this.isAudit && this.current.initBugly();
};
e.prototype.buglySetUserId = function(t) {
this.current && !this.isAudit && this.current.buglySetUserId(t);
};
e.prototype.setAppVersion = function(t) {
this.current && !this.isAudit && this.current.setAppVersion(t);
};
e.prototype.isSuportUserCenter = function() {
return !!this.current && this.current.supportAccountCenter;
};
e.prototype.isSuportFacebook = function() {
return !!this.current && this.current.supportFacebook;
};
e.prototype.needShowPoliciesUI = function() {
return !!this.current && this.current.showPolicies;
};
e.prototype.needUserAgreement = function() {
return !!this.current && this.current.showUserAgreement;
};
e.prototype.showAccountCenter = function() {
this.current && this.current.openAccountCenter();
};
e.prototype.getSdkAccountInfo = function() {
if (this.current) return this.current.accoutInfo;
};
e.prototype.getPlatCfg = function() {
if (this.current) return this.current.platCfg;
};
e.prototype.getPhoneInfo = function() {
if (this.current) return this.current.phoneInfo;
};
e.prototype.getAccountInfo = function() {
if (this.current) return this.current.accoutInfo;
};
e.prototype.showDevUI = function() {
return !!this.current && this.current.showDevUI();
};
e.prototype.copyToClipboard = function(t) {
if (this.current) return this.current.copyToClipboard(t);
};
e.prototype.isNoPublishingPlat = function() {
var t = !0;
this.current && (t = "sl.normal" == this.current.platCfg.sdkFlag);
return t;
};
e.prototype.sdkIsInited = function() {
var t = !1;
this.current && (t = this.current.sdkInitSuc);
return t;
};
e.prototype.vipStateIsSubmit = function() {
if (this.current) {
var t = this.current.getOtherByFlag("vipState");
return Number(t) > 0;
}
};
e.prototype.submitVipInfo = function() {
this.current && this.current.sumbitVipInfo();
};
e.prototype.toAppStroeScore = function() {
this.current && this.current.toAppStroeScore();
};
e.prototype.getAppVersion = function() {
var t = "unknown";
this.current && (t = this.current.appVersion);
return t;
};
e.prototype.getResVersion = function() {
var t = "unknown";
this.current && (t = a.GameHelper.compareVersion(this.current.appVersion, this.current.resVersion) > 0 ? this.current.appVersion : this.current.resVersion);
return t;
};
e.prototype.getSafeArea = function() {
return null;
};
e._instance = null;
return e;
}(c.EventDispatcher);
szg.plat = d.getInstance();
cc._RF.pop();
}, {
"../../../Script/game/GameConsts": void 0,
"../../../Script/game/GameHelper": void 0,
"../../../c2f-framework/core/event/EventDispatcher": void 0,
"./PlatHaidx": "PlatHaidx",
"./PlatHuanyu": "PlatHuanyu",
"./PlatKuaihan": "PlatKuaihan",
"./PlatNoPlat": "PlatNoPlat"
} ],
PlatNative: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b5416aCAnlDyqk+It7OOGhe", "PlatNative");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.PlatNative = void 0;
var r = t("../../../Script/game/GameConsts"), a = t("./PlatBase"), c = t("./PlatDefine"), s = function(t) {
i(e, t);
function e() {
var e = t.call(this) || this;
e.sdkMapping = null;
e.initSdkFunc();
return e;
}
e.prototype.initSdkFunc = function() {
this.sdkFunc = {};
this.sdkFunc[c.PlatDef.SdkFuncName.sdkInit] = c.PlatDef.SdkFuncName.sdkInit;
this.sdkFunc[c.PlatDef.SdkFuncName.sdkLogin] = c.PlatDef.SdkFuncName.sdkLogin;
this.sdkFunc[c.PlatDef.SdkFuncName.sdkLogout] = c.PlatDef.SdkFuncName.sdkLogout;
this.sdkFunc[c.PlatDef.SdkFuncName.sdkSwitchAcc] = c.PlatDef.SdkFuncName.sdkSwitchAcc;
this.sdkFunc[c.PlatDef.SdkFuncName.sdkQuitGame] = c.PlatDef.SdkFuncName.sdkQuitGame;
this.sdkFunc[c.PlatDef.SdkFuncName.sdkSubmit] = c.PlatDef.SdkFuncName.sdkSubmit;
this.sdkFunc[c.PlatDef.SdkFuncName.sdkPay] = c.PlatDef.SdkFuncName.sdkPay;
this.sdkFunc[c.PlatDef.SdkFuncName.sdkAccCenter] = c.PlatDef.SdkFuncName.sdkAccCenter;
this.sdkFunc[c.PlatDef.SdkFuncName.sdkPrivacyPolicy] = c.PlatDef.SdkFuncName.sdkPrivacyPolicy;
this.sdkFunc[c.PlatDef.SdkFuncName.sdkShare] = c.PlatDef.SdkFuncName.sdkShare;
this.sdkFunc[c.PlatDef.SdkFuncName.getPlatCfg] = c.PlatDef.SdkFuncName.getPlatCfg;
this.sdkFunc[c.PlatDef.SdkFuncName.loadPhoneInfo] = c.PlatDef.SdkFuncName.loadPhoneInfo;
this.sdkFunc[c.PlatDef.SdkFuncName.copyToClipboard] = c.PlatDef.SdkFuncName.copyToClipboard;
this.sdkFunc[c.PlatDef.SdkFuncName.initBugly] = c.PlatDef.SdkFuncName.initBugly;
this.sdkFunc[c.PlatDef.SdkFuncName.buglySetUserId] = c.PlatDef.SdkFuncName.buglySetUserId;
this.sdkFunc[c.PlatDef.SdkFuncName.setAppVersion] = c.PlatDef.SdkFuncName.setAppVersion;
this.sdkFunc[c.PlatDef.SdkFuncName.sdkSubmitVipInfo] = c.PlatDef.SdkFuncName.sdkSubmitVipInfo;
this.sdkFunc[c.PlatDef.SdkFuncName.sdkToAppScore] = c.PlatDef.SdkFuncName.sdkToAppScore;
this.sdkFunc[c.PlatDef.SdkFuncName.commonFunc] = c.PlatDef.SdkFuncName.commonFunc;
this.sdkFunc[c.PlatDef.SdkFuncName.sdkGetOtherInfo] = c.PlatDef.SdkFuncName.sdkGetOtherInfo;
};
e.prototype.loadLocalSetting = function() {
t.prototype.loadLocalSetting.call(this);
this.supportQuitGame = c2f.storage.getPlainBool(r.GameConsts.PlatSupportQuit, !1);
this.supportAccountCenter = c2f.storage.getPlainBool(r.GameConsts.PlatSupportAccCenter, !1);
this.supportSwitchAcc = c2f.storage.getPlainBool(r.GameConsts.PlatSupportAccSwitch, !1);
this.appVersion = c2f.storage.getPlainItem(r.GameConsts.AppVersion, "5.01.01");
this.resVersion = c2f.storage.getPlainItem(r.GameConsts.ResVersion, "0.01.01");
};
e.prototype.setFuncNames = function(t) {
for (var e in t) this.sdkFunc.hasOwnProperty(e) && (this.sdkFunc[e] = t[e]);
};
e.prototype.loadPlatCfg = function() {
var t = this.getPlatCfg();
if (t) try {
this.platCfg = JSON.parse(t);
} catch (t) {}
};
e.prototype.getPlatCfg = function() {
var t = this.sdkFunc[c.PlatDef.SdkFuncName.getPlatCfg], e = this.callNativeMethod(t, "(Ljava/lang/String;)Ljava/lang/String;", "");
c2f.log.logConfig(t + " ==>>:" + e);
return e;
};
e.prototype.loadPhoneInfo = function() {
this.registerNativeCbs(c.PlatDef.SdkCbFuncName.onPhoneInfoResult, this.onLoadPhoneRet.bind(this));
var t = this.sdkFunc[c.PlatDef.SdkFuncName.loadPhoneInfo];
this.callNativeMethod(t, "(Ljava/lang/String;)V", "");
};
e.prototype.copyToClipboard = function(t) {
var e = this.sdkFunc[c.PlatDef.SdkFuncName.copyToClipboard];
this.callNativeMethod(e, "(Ljava/lang/String;)V", t);
};
e.prototype.initSDK = function(t) {
this.registerNativeCbs(c.PlatDef.SdkCbFuncName.onSdkInit, this.onSdkInitRet.bind(this));
var e = this.getParamString(t), o = this.sdkFunc[c.PlatDef.SdkFuncName.sdkInit];
this.callNativeMethod(o, "(Ljava/lang/String;)V", e);
};
e.prototype.login = function() {
this.registerNativeCbs(c.PlatDef.SdkCbFuncName.onSdkLogin, this.onSdkLoginRet.bind(this));
this.registerNativeCbs(c.PlatDef.SdkCbFuncName.onSdkLogout, this.onSdkLogoutRet.bind(this));
var t = this.sdkFunc[c.PlatDef.SdkFuncName.sdkLogin];
this.callNativeMethod(t, "(Ljava/lang/String;)V", "");
};
e.prototype.logout = function() {
var t = this.sdkFunc[c.PlatDef.SdkFuncName.sdkLogout];
this.callNativeMethod(t, "(Ljava/lang/String;)V", "");
};
e.prototype.switchAccount = function() {
var t = this.sdkFunc[c.PlatDef.SdkFuncName.sdkSwitchAcc];
this.callNativeMethod(t, "(Ljava/lang/String;)V", "");
};
e.prototype.pay = function(t, e, o) {
this.registerNativeCbs(c.PlatDef.SdkCbFuncName.onSdkPayResult, this.onSdkPayRet.bind(this));
var n = JSON.parse(JSON.stringify(this.playerInfo)), i = {};
i.plrId = n.roleId;
i.prdId = t.Id;
i.price = t.Price;
i.sdkFlag = this.platCfg.sdkFlag;
i.ts = e;
n.prdId = t.Id;
n.prdName = t.Name;
n.prdDesc = t.Des;
n.storeId = t.StoreId;
n.price100 = t.Price;
n.svrId = "" + (1e3 * this.playerInfo.areaId + this.playerInfo.svrId);
n.svrName = this.playerInfo.areaId + "-" + this.playerInfo.svrName;
n.extInfo = JSON.stringify(i);
n.payCbUrl = o;
var r = this.getParamString(n), a = this.sdkFunc[c.PlatDef.SdkFuncName.sdkPay];
this.callNativeMethod(a, "(Ljava/lang/String;)V", r);
};
e.prototype.quitGame = function() {
this.registerNativeCbs(c.PlatDef.SdkCbFuncName.onSdkExit, this.onSdkExitRet.bind(this));
var t = this.sdkFunc[c.PlatDef.SdkFuncName.sdkQuitGame];
this.callNativeMethod(t, "(Ljava/lang/String;)V", "");
};
e.prototype.openAccountCenter = function() {
var t = this.sdkFunc[c.PlatDef.SdkFuncName.sdkAccCenter];
this.callNativeMethod(t, "(Ljava/lang/String;)V", "");
};
e.prototype.submitInfo = function(t) {
var e = JSON.parse(JSON.stringify(this.playerInfo));
e.submitFlag = t;
e.svrId = "" + (1e3 * this.playerInfo.areaId + this.playerInfo.svrId);
e.svrName = this.playerInfo.areaId + "-" + this.playerInfo.svrName;
e.eventName = "";
var o = this.getParamString(e), n = this.sdkFunc[c.PlatDef.SdkFuncName.sdkSubmit];
this.callNativeMethod(n, "(Ljava/lang/String;)V", o);
};
e.prototype.showPrivacyPolicy = function(t) {
var e = this.sdkFunc[c.PlatDef.SdkFuncName.sdkPrivacyPolicy];
this.callNativeMethod(e, "(Ljava/lang/String;)V", t);
};
e.prototype.share = function() {
var t = {};
t.svrId = "" + (1e3 * this.playerInfo.areaId + this.playerInfo.svrId);
t.uid = this.playerInfo.roleId;
var e = this.getParamString(t), o = this.sdkFunc[c.PlatDef.SdkFuncName.sdkShare];
this.callNativeMethod(o, "(Ljava/lang/String;)V", e);
};
e.prototype.sumbitVipInfo = function() {
this.registerNativeCbs(c.PlatDef.SdkCbFuncName.onSdkSubmitVip, this.onSdkSubmitVipRet.bind(this));
var t = this.getParamString(this.playerInfo), e = this.sdkFunc[c.PlatDef.SdkFuncName.sdkSubmitVipInfo];
this.callNativeMethod(e, "(Ljava/lang/String;)V", t);
};
e.prototype.toAppStroeScore = function() {
var t = this.sdkFunc[c.PlatDef.SdkFuncName.sdkToAppScore];
this.callNativeMethod(t, "(Ljava/lang/String;)V", "");
};
e.prototype.initBugly = function() {
var t = this.sdkFunc[c.PlatDef.SdkFuncName.initBugly];
this.callNativeMethod(t, "(Ljava/lang/String;)V", "");
};
e.prototype.buglySetUserId = function(t) {
var e = this.sdkFunc[c.PlatDef.SdkFuncName.buglySetUserId];
this.callNativeMethod(e, "(Ljava/lang/String;)V", t);
};
e.prototype.setAppVersion = function(t) {
var e = this.sdkFunc[c.PlatDef.SdkFuncName.setAppVersion];
this.callNativeMethod(e, "(Ljava/lang/String;)V", t);
};
e.prototype.commonFunc = function(t) {
var e = this.getParamString(t), o = this.sdkFunc[c.PlatDef.SdkFuncName.commonFunc];
this.callNativeMethod(o, "(Ljava/lang/String;)V", e);
};
e.prototype.getOtherByFlag = function(t) {
var e = this.sdkFunc[c.PlatDef.SdkFuncName.sdkGetOtherInfo];
return this.callNativeMethod(e, "(Ljava/lang/String;)V", t);
};
e.prototype.callNativeMethod = function(t, e, o) {
var n = null;
if (cc.sys.os === cc.sys.OS_ANDROID) n = jsb.reflection.callStaticMethod(this.andClass, t, e, o); else if (cc.sys.os === cc.sys.OS_IOS) {
var i = this.iosClass, r = t;
if (this.sdkMapping) {
this.sdkMapping.IOSClass && (i = this.sdkMapping.IOSClass);
this.sdkMapping[t] && (r = this.sdkMapping[t]);
n = o && "" != o ? jsb.reflection.callStaticMethod(i, r + ":", "") : jsb.reflection.callStaticMethod(i, r);
} else n = o && "" != o ? jsb.reflection.callStaticMethod(i, r + ":", o) : jsb.reflection.callStaticMethod(i, r);
}
return n;
};
e.prototype.registerNativeCbs = function(t, e) {
cc.nativeSDK = cc.nativeSDK || {};
cc.nativeSDK.cbFuncs || (cc.nativeSDK.cbFuncs = {});
cc.nativeSDK.cbFuncs[t] = e;
cc.nativeSDK.native2CCB || (cc.nativeSDK.native2CCB = function(t, e) {
if (cc.nativeSDK.cbFuncs.hasOwnProperty(t)) {
var o = cc.nativeSDK.cbFuncs[t];
o && o(e);
}
});
};
return e;
}(a.PlatBase);
o.PlatNative = s;
cc._RF.pop();
}, {
"../../../Script/game/GameConsts": void 0,
"./PlatBase": "PlatBase",
"./PlatDefine": "PlatDefine"
} ],
PlatNoPlat: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a5589bKevFC1pPKpkg3LGAN", "PlatNoPlat");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.PlatNoPlat = void 0;
var r = t("./PlatBase"), a = t("./PlatDefine"), c = function(e) {
i(o, e);
function o() {
var t = e.call(this) || this;
t.initPlatCfg();
t.initPhoneInfo();
return t;
}
o.prototype.loadLocalSetting = function() {
e.prototype.loadLocalSetting.call(this);
this.appVersion = "0.01.01";
this.resVersion = "1.01.01";
};
o.prototype.initPlatCfg = function() {
this.platCfg = new a.PlatDef.PlatCfg();
this.platCfg.showFPS = !0;
};
o.prototype.initPhoneInfo = function() {
this.phoneInfo = new a.PlatDef.PhoneInfo();
};
o.prototype.noPlatLogined = function(t, e, o) {
var n = {};
n.code = a.PlatDef.RetCode.success;
n.userId = t;
n.createTs = c2f.utils.date.getLocalTick();
n.userToken = "token";
this.onSdkLoginRet(n);
e.length > 0 && (this.platCfg.superFlag = e);
o.length > 0 && (this.platCfg.payFlag = o);
};
o.prototype.initSDK = function() {
this.onSdkInitRet({
code: a.PlatDef.RetCode.success
});
};
o.prototype.login = function() {
c2f.gui.hideLoading();
var e = t("EntranceView").EntranceUI;
c2f.gui.open(e.NoPlatLogin, {
loginCb: this.noPlatLogined.bind(this)
});
};
o.prototype.logout = function() {
this.onSdkLogoutRet({
code: a.PlatDef.RetCode.success
});
};
o.prototype.switchAccount = function() {};
o.prototype.quitGame = function() {
this.onSdkExitRet({
code: a.PlatDef.RetCode.success
});
};
o.prototype.submitInfo = function(t) {
c2f.log.logSDK("submitInfo:", t);
};
o.prototype.showDevUI = function() {
return !0;
};
return o;
}(r.PlatBase);
o.PlatNoPlat = c;
cc._RF.pop();
}, {
"./PlatBase": "PlatBase",
"./PlatDefine": "PlatDefine",
EntranceView: "EntranceView"
} ],
PlayerData: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "201e8tu755HQoDkulIo02/3", "PlayerData");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.PlayerData = void 0;
var n = t("./plrBase/PublicData"), i = t("./login/LoginData"), r = function() {
function t() {
this._cfgLoaded = !1;
this.dispatchs = [];
}
Object.defineProperty(t, "ins", {
get: function() {
t._ins || (t._ins = new t());
return t._ins;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "cfgLoaded", {
get: function() {
return this._cfgLoaded;
},
set: function(t) {
this._cfgLoaded = t;
if (t && this.beforeLoadCfg) {
for (var e in this.beforeLoadCfg) this.dispatchMsg(Number(e), this.beforeLoadCfg[e]);
this.beforeLoadCfg = null;
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "public", {
get: function() {
return this._public;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "rank", {
get: function() {
return this._rank;
},
enumerable: !1,
configurable: !0
});
t.prototype.initPlayer = function() {};
t.prototype.clearModules = function() {
for (var t = 0, e = this.dispatchs; t < e.length; t++) {
var o = e[t];
o.reset && o.reset();
o.release && o.release();
}
this._public = null;
this._rank = null;
this.dispatchs = [];
};
t.prototype.handleMsg = function(t, e) {
if (this.cfgLoaded) this.dispatchMsg(t, e); else {
this.beforeLoadCfg = this.beforeLoadCfg || {};
this.beforeLoadCfg[t] = e;
}
};
t.prototype.dispatchMsg = function() {};
t.prototype.initModules = function() {
this.dispatchs = [];
this._public = new n.PublicData();
this.dispatchs.push(this._public);
this._rank = new i.LoginData();
this.dispatchs.push(this._rank);
};
t._ins = null;
return t;
}();
o.PlayerData = r;
szg.player = r.ins;
cc._RF.pop();
}, {
"./login/LoginData": "LoginData",
"./plrBase/PublicData": "PublicData"
} ],
PopDlgCmplx: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c202chP+KFOv7+ggIFDBeA1", "PopDlgCmplx");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./PopDlgPanel"), c = cc._decorator, s = c.ccclass, u = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(a.default));
o.default = u;
cc._RF.pop();
}, {
"./PopDlgPanel": "PopDlgPanel"
} ],
PopDlgPanel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "55ba3UvprJA4bxrJe8qyYeB", "PopDlgPanel");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.title = null;
e.btnClose = null;
e.separatorLine = null;
return e;
}
e.prototype.setTiTle = function(t) {
this.title.string = t;
};
e.prototype.setBtnHandler = function(t) {
this.btnClose.node.active = t.length > 0;
this.btnClose.clickEvents = t;
};
e.prototype.separatorVisible = function(t) {
this.separatorLine && (this.separatorLine.active = t);
};
e.prototype.separatorWidgetBottom = function(t) {
if (this.separatorLine) {
var e = this.separatorLine.getComponent(cc.Widget);
e && (e.bottom = t);
e.updateAlignment();
}
};
e.prototype.getSeparatorWidgetBottom = function() {
var t = 0;
this.separatorLine && (t = this.separatorLine.getComponent(cc.Widget).bottom);
return t;
};
e.prototype.quickSetCloseHnadler = function(t, e) {
void 0 === e && (e = "closeView");
var o = new cc.Component.EventHandler();
o.target = t.node;
o.component = c2f.utils.view.getComponentName(t);
o.handler = e;
o.customEventData = "";
this.setBtnHandler([ o ]);
};
r([ s(cc.Label) ], e.prototype, "title", void 0);
r([ s(cc.Button) ], e.prototype, "btnClose", void 0);
r([ s(cc.Node) ], e.prototype, "separatorLine", void 0);
return r([ c ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {} ],
PublicData: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "02df4xw7MhKZrG3GikBiP4U", "PublicData");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.PublicData = void 0;
var n = function() {
function t() {
this.reset();
}
t.prototype.reset = function() {
this.isMouseDown = !1;
};
return t;
}();
o.PublicData = n;
cc._RF.pop();
}, {} ],
SZG: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b1933PSHxtB8Ya2hvuq7axQ", "SZG");
Object.defineProperty(o, "__esModule", {
value: !0
});
cc._RF.pop();
}, {} ],
SoundSetModel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8909bos+2NIe7NN3H6ZIm8f", "SoundSetModel");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./../../../c2f-framework/gui/layer/UIModelBase"), c = cc._decorator, s = c.ccclass, u = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "V_SoundSet";
return e;
}
return r([ s ], e);
}(a.UIModelBase));
o.default = u;
cc._RF.pop();
}, {
"./../../../c2f-framework/gui/layer/UIModelBase": void 0
} ],
SoundSetView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "720caHihc9OtL5lLAQv0xzq", "SoundSetView");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./../../../c2f-framework/gui/layer/UIViewBase"), c = cc._decorator, s = c.ccclass, u = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "V_SoundSet";
e.soundBgSprite = void 0;
e.soundBgButton = void 0;
e.soundEffSprite = void 0;
e.soundEffButton = void 0;
e.btnCloseSprite = void 0;
e.btnCloseButton = void 0;
return e;
}
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
};
e.prototype.onEnable = function() {
t.prototype.onEnable && t.prototype.onEnable.call(this);
this.addEvent();
};
e.prototype.onDisable = function() {
t.prototype.onDisable && t.prototype.onDisable.call(this);
this.removeEvent();
};
e.prototype.initProperty = function() {
t.prototype.initProperty.call(this);
this.soundBg = this.get("_soundBg_");
this.soundBgSprite = this.soundBg.getComponent(cc.Sprite);
this.soundBgButton = this.soundBg.getComponent(cc.Button);
this.soundEff = this.get("_soundEff_");
this.soundEffSprite = this.soundEff.getComponent(cc.Sprite);
this.soundEffButton = this.soundEff.getComponent(cc.Button);
this.btnClose = this.get("_btnClose_");
this.btnCloseSprite = this.btnClose.getComponent(cc.Sprite);
this.btnCloseButton = this.btnClose.getComponent(cc.Button);
};
e.prototype.addEvent = function() {
this.soundBgButton.node.on("click", this.onsoundBgButtonClick, this);
this.soundEffButton.node.on("click", this.onsoundEffButtonClick, this);
this.btnCloseButton.node.on("click", this.onbtnCloseButtonClick, this);
};
e.prototype.removeEvent = function() {
this.soundBgButton.node.off("click", this.onsoundBgButtonClick, this);
this.soundEffButton.node.off("click", this.onsoundEffButtonClick, this);
this.btnCloseButton.node.off("click", this.onbtnCloseButtonClick, this);
};
e.prototype.onsoundBgButtonClick = function(t) {
this.emit("click", t);
};
e.prototype.onsoundEffButtonClick = function(t) {
this.emit("click", t);
};
e.prototype.onbtnCloseButtonClick = function(t) {
this.emit("click", t);
};
return r([ s ], e);
}(a.UIViewBase));
o.default = u;
cc._RF.pop();
}, {
"./../../../c2f-framework/gui/layer/UIViewBase": void 0
} ],
SoundSet: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e94e1wP+4RLGoD2tlD5z1+N", "SoundSet");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__awaiter || function(t, e, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(t) {
try {
s(n.next(t));
} catch (t) {
r(t);
}
}
function c(t) {
try {
s(n.throw(t));
} catch (t) {
r(t);
}
}
function s(t) {
t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(a, c);
var e;
}
s((n = n.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./../../../c2f-framework/gui/layer/UIVControlBase"), u = t("./../../../c2f-framework/define/C2FEnum"), l = t("../../../Script/game/UIHelper"), p = t("../../../Script/game/GameConsts"), f = cc._decorator, d = f.ccclass, h = (f.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "V_SoundSet";
e.model = void 0;
e.view = void 0;
return e;
}
e.prototype.onEnable = function() {
t.prototype.onEnable && t.prototype.onEnable.call(this);
this.on(u.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
};
e.prototype.onDisable = function() {
t.prototype.onDisable && t.prototype.onDisable.call(this);
this.off(u.C2FEnum.UIEvent.ButtonClick);
};
e.prototype.onButtonClick = function(t, e) {
return a(this, void 0, void 0, function() {
return c(this, function() {
switch (e.name) {
case this.view.soundBgButton.name:
this.CC_onClicksoundBg();
break;

case this.view.soundEffButton.name:
this.CC_onClicksoundEff();
break;

case this.view.btnCloseButton.name:
this.CC_onClickbtnClose();
}
return [ 2 ];
});
});
};
e.prototype.CC_onClickbtnClose = function() {
l.UIHelper.playEffect("betClick");
this.closeView();
};
e.prototype.onViewOpen = function() {
var t = c2f.storage.getBoolean(p.GameConsts.StorageKey.soundEff), e = c2f.storage.getBoolean(p.GameConsts.StorageKey.soundBg);
this.setSoundBgState(e);
this.setSoundEffState(t);
};
e.prototype.setSoundBgState = function(t) {
var e = t ? p.GameConsts.ResUrl.entrance + "btn_shengyin2" : p.GameConsts.ResUrl.entrance + "btn_shengyin1";
c2f.utils.view.changeSpriteFrame(this.view.soundBgSprite, e);
c2f.audio.bgmOff = t;
};
e.prototype.setSoundEffState = function(t) {
var e = t ? p.GameConsts.ResUrl.entrance + "btn_shengyin2" : p.GameConsts.ResUrl.entrance + "btn_shengyin1";
c2f.utils.view.changeSpriteFrame(this.view.soundEffSprite, e);
c2f.audio.sfxOff = t;
};
e.prototype.CC_onClicksoundBg = function() {
l.UIHelper.playEffect("betClick");
var t = c2f.storage.getBoolean(p.GameConsts.StorageKey.soundBg);
this.setSoundBgState(!t);
c2f.storage.set(p.GameConsts.StorageKey.soundBg, !t);
};
e.prototype.CC_onClicksoundEff = function() {
l.UIHelper.playEffect("betClick");
var t = c2f.storage.getBoolean(p.GameConsts.StorageKey.soundEff);
this.setSoundEffState(!t);
c2f.storage.set(p.GameConsts.StorageKey.soundEff, !t);
};
return r([ d ], e);
}(s.UIVControlBase));
o.default = h;
cc._RF.pop();
}, {
"../../../Script/game/GameConsts": void 0,
"../../../Script/game/UIHelper": void 0,
"./../../../c2f-framework/define/C2FEnum": void 0,
"./../../../c2f-framework/gui/layer/UIVControlBase": void 0
} ],
UISpine: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6cfb1dMwKZBP5VD30Lf66af", "UISpine");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = (a.property, a.requireComponent), u = (a.menu, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.completeHandler = null;
e.eventHandler = null;
return e;
}
e.prototype.setListenerCb = function(t, e) {
this.completeHandler = t;
this.eventHandler = e;
};
e.prototype.onLoad = function() {
var t = this, e = this.node.getComponent(sp.Skeleton);
if (e) {
e.setEventListener(function(e, o) {
if ("number" != typeof o) {
o.data.name;
t.eventHandler && t.eventHandler(e, o);
}
});
e.setCompleteListener(function(e) {
t.completeHandler && t.completeHandler(e);
});
}
};
return r([ c, s(sp.Skeleton) ], e);
}(cc.Component));
o.default = u;
cc._RF.pop();
}, {} ],
_szg: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f7a79olsaFLYKkFwljImhpr", "_szg");
Object.defineProperty(o, "__esModule", {
value: !0
});
t("./SZG");
t("./game/GameConfig");
cc._RF.pop();
}, {
"./SZG": "SZG",
"./game/GameConfig": "GameConfig"
} ]
}, {}, [ "EntranceView", "GameLoading", "GameLoadingModel", "GameLoadingView", "GameLogin", "GameLoginModel", "GameLoginView", "GameLogo", "GameLogoModel", "GameLogoView", "NoPlatLogin", "NoPlatLoginModel", "NoPlatLoginView", "SZG", "SoundSet", "SoundSetModel", "SoundSetView", "_szg", "UISpine", "CtrlPopDlgPanel", "PopDlgCmplx", "PopDlgPanel", "EntranceData", "EntranceDefine", "GameCaches", "GameConfig", "PlayerData", "CacheData", "CsvBase", "LoginData", "PublicData", "PlatBase", "PlatDefine", "PlatHaidx", "PlatHuanyu", "PlatKuaihan", "PlatManager", "PlatNative", "PlatNoPlat" ]);