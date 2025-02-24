window.__require = function e(_, r, n) {
function o(t, a) {
if (!r[t]) {
if (!_[t]) {
var s = t.split("/");
s = s[s.length - 1];
if (!_[s]) {
var g = "function" == typeof __require && __require;
if (!a && g) return g(s, !0);
if (i) return i(s, !0);
throw new Error("Cannot find module '" + t + "'");
}
t = s;
}
var c = r[t] = {
exports: {}
};
_[t][0].call(c.exports, function(e) {
return o(_[t][1][e] || e);
}, c, c.exports, e, _, r, n);
}
return r[t].exports;
}
for (var i = "function" == typeof __require && __require, t = 0; t < n.length; t++) o(n[t]);
return o;
}({
errorcode: [ function(e, _, r) {
"use strict";
cc._RF.push(_, "95081TipAxFm4oYlmxX2jI8", "errorcode");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.errCode = void 0;
(function(e) {
e[e.OK = 0] = "OK";
e[e.Failed = 1] = "Failed";
e[e.Common_InvalidTeam = 2] = "Common_InvalidTeam";
})(r.errCode || (r.errCode = {}));
cc._RF.pop();
}, {} ],
msgid: [ function(e, _, r) {
"use strict";
cc._RF.push(_, "38cb67PFhlAOIVdVu1d6La6", "msgid");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.msgid = void 0;
(function(e) {
e[e.C_Login = 1e3] = "C_Login";
e[e.GW_Login_R = 1001] = "GW_Login_R";
e[e.GW_RegisterGate = 1200] = "GW_RegisterGate";
e[e.GS_RegisterGate_R = 1201] = "GS_RegisterGate_R";
e[e.GW_UserOnline = 1202] = "GW_UserOnline";
e[e.GW_LogoutPlayer = 1203] = "GW_LogoutPlayer";
e[e.C_TimeSync = 3002] = "C_TimeSync";
e[e.GS_TimeSync_R = 3003] = "GS_TimeSync_R";
e[e.C_GetLoginData = 3004] = "C_GetLoginData";
e[e.GS_GetLoginData_R = 3005] = "GS_GetLoginData_R";
e[e.C_ErrMsgInfo = 3006] = "C_ErrMsgInfo";
e[e.GS_ErrMsgInfo_R = 3007] = "GS_ErrMsgInfo_R";
e[e.C_RankTop = 4614] = "C_RankTop";
e[e.GS_RankTop_R = 4615] = "GS_RankTop_R";
})(r.msgid || (r.msgid = {}));
cc._RF.pop();
}, {} ],
msgname: [ function(e, _, r) {
"use strict";
cc._RF.push(_, "5aff2HyQ6hNvoRzo4FFvtNR", "msgname");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.msgname = void 0;
r.msgname = {
1e3: "C_Login",
1001: "GW_Login_R",
1200: "GW_RegisterGate",
1201: "GS_RegisterGate_R",
1202: "GW_UserOnline",
1203: "GW_LogoutPlayer",
3002: "C_TimeSync",
3003: "GS_TimeSync_R",
3004: "C_GetLoginData",
3005: "GS_GetLoginData_R",
3006: "C_ErrMsgInfo",
3007: "GS_ErrMsgInfo_R",
4614: "C_RankTop",
4615: "GS_RankTop_R"
};
cc._RF.pop();
}, {} ]
}, {}, [ "errorcode", "msgid", "msgname" ]);