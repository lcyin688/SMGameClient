window.__require = function e(t, r, o) {
function n(c, i) {
if (!r[c]) {
if (!t[c]) {
var s = c.split("/");
s = s[s.length - 1];
if (!t[s]) {
var l = "function" == typeof __require && __require;
if (!i && l) return l(s, !0);
if (a) return a(s, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = s;
}
var u = r[c] = {
exports: {}
};
t[c][0].call(u.exports, function(e) {
return n(t[c][1][e] || e);
}, u, u.exports, e, t, r, o);
}
return r[c].exports;
}
for (var a = "function" == typeof __require && __require, c = 0; c < o.length; c++) n(o[c]);
return n;
}({
EventName: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "16c83MOKu1N+52T0r5rPaOb", "EventName");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.EventName = void 0;
(function(e) {
(e.EName || (e.EName = {})).newBall = "newBall";
})(r.EventName || (r.EventName = {}));
cc._RF.pop();
}, {} ],
GameCalculator: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "0818ayrx+ZDO4276pJ48huD", "GameCalculator");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.GameCalc = void 0;
var o = e("./GameConsts"), n = function() {
function e() {}
e.getShortNumFix = function(e) {
return this.getShortNum(Math.floor(100 * e) / 100);
};
e.getShortNumInteger = function(e, t) {
void 0 === t && (t = 7);
return this.getShortNum(Math.floor(e), t);
};
e.getShortNum = function(e, t) {
void 0 === t && (t = 6);
var r = o.GameConsts.ShortNum_CN, n = e, a = Math.pow(10, t);
if (n >= 0 && !isNaN(n) && n >= a) for (var c = 0; c < r.length; ++c) {
var i = r[c].value;
if (n >= i) {
var s = n / i, l = Math.floor(s).toString().length, u = r[c].fixNum - l, f = s.toString().split(".");
if (f.length > 1) {
for (var p = "0." + f[1].substring(0, u), m = p.length; m > 0 && "0" == p[m - 1]; ) m = (p = p.substring(0, m - 1)).length;
n = Math.floor(s).toString();
p.length > 2 && (n += p.substring(1));
} else n = s;
n += c2f.language.words(r[c].txt);
}
}
return "" + n;
};
e.getFomatPrice = function(e) {
return e / 100;
};
return e;
}();
r.GameCalc = n;
cc._RF.pop();
}, {
"./GameConsts": "GameConsts"
} ],
GameConsts: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "0172a9hxCROabvsSjeqTXx3", "GameConsts");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.GameConsts = void 0;
(function(e) {
var t, r;
(function(e) {
e.demo = "demo";
e.framework = "framework";
e.resource = "resources";
e.entrance = "entrance";
e.mainPack = "mainPack";
e.gameYngy = "gameYngy";
e.boxGame = "boxGame";
})(e.Bundle || (e.Bundle = {}));
e.PlatNameKey = "KHPlatName";
e.PlatSupportQuit = "KHPLAT_SUPPORT_QUIT";
e.PlatSupportAccCenter = "KHPLAT_SUPPORT_ACCCENTER";
e.PlatSupportAccSwitch = "KHPLAT_SUPPORT_ACCSWITCH";
e.AppBundleName = "SZAPP_BUNDLE_NAME";
e.AppVersion = "SZAPP_VERSION";
e.ResVersion = "SZRES_VERSION";
e.ShortNum_CN = [ {
value: 1e12,
fixNum: 4,
txt: 25
}, {
value: 1e8,
fixNum: 4,
txt: 24
}, {
value: 1e4,
fixNum: 4,
txt: 23
} ];
(function(e) {
e.desStar = "ab:mainPack/image/ui/desStar/";
e.physics2048 = "ab:mainPack/image/ui/physics2048/";
e.music = "audio/music/";
e.soundEft = "audio/effect/";
e.uiEfx = "ab:mainPack/spine/ui/";
e.uiRoot = "ab:mainPack/image/ui/";
e.entrance = "ab:entrance/image/";
e.yngy = "ab:gameYngy/image/ui/";
})(e.ResUrl || (e.ResUrl = {}));
(function(e) {
e.blockItem = "ab:mainPack/prefab/desStar/P_BlockItem";
e.P_StartItem = "ab:mainPack/prefab/desStar/P_StartItem";
e.mapCreatItem = "ab:mainPack/prefab/mapCreate/P_MapCreatItem";
e.physics2048Item = "ab:mainPack/prefab/physics2048/P_Physics2048Item";
e.boomItem = "ab:mainPack/prefab/physics2048/P_BoomItem";
e.ball = "ab:mainPack/prefab/basketBall/P_Ball";
})(e.CmmPrefab || (e.CmmPrefab = {}));
e.QualityDoubClr = ((t = {})[7] = [ "#FF8FFE", "#BDFBFF" ], t);
e.QualityColor = ((r = {})[1] = "#FFFFFF", r[2] = "#7CFFA1", r[3] = "#7CC9FF", r[4] = "#E87CFF", 
r[5] = "#FFE57C", r[6] = "#FF7C7C", r[7] = "#6FFDFF", r);
e.StorageKey = {
soundEff: "soundEff",
soundBg: "soundBg",
curLv: "curLv",
curHistory2048MaxLv: "curHistory2048MaxLv"
};
(function(e) {
e[e.BEGEN = 1] = "BEGEN";
e[e.ENDED = 2] = "ENDED";
e[e.CANCEL = 3] = "CANCEL";
})(e.TouchStatus || (e.TouchStatus = {}));
(function(e) {
e[e.FLY = 1] = "FLY";
e[e.DOWN = 2] = "DOWN";
e[e.NONE = 3] = "NONE";
})(e.BallStatus || (e.BallStatus = {}));
e.YngyConst = {
ItemWidthHeight: 130
};
})(r.GameConsts || (r.GameConsts = {}));
cc._RF.pop();
}, {} ],
GameData: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "3095504f2dHu7TITMLqXBoV", "GameData");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.GameData = void 0;
(function(e) {
e.PlrInfo2Sdk = function() {};
var t = function() {
function e() {
this.reset();
}
e.prototype.reset = function() {
this.head = 0;
this.hframe = 0;
this.title = 0;
};
return e;
}();
e.PlayerSet = t;
})(r.GameData || (r.GameData = {}));
cc._RF.pop();
}, {} ],
GameHelper: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "66265KUUm1F1Lm1F8Hm3Pf+", "GameHelper");
var o = this && this.__awaiter || function(e, t, r, o) {
return new (r || (r = Promise))(function(n, a) {
function c(e) {
try {
s(o.next(e));
} catch (e) {
a(e);
}
}
function i(e) {
try {
s(o.throw(e));
} catch (e) {
a(e);
}
}
function s(e) {
e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
e(t);
})).then(c, i);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, n = this && this.__generator || function(e, t) {
var r, o, n, a, c = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return a = {
next: i(0),
throw: i(1),
return: i(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function i(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;c; ) try {
if (r = 1, o && (n = 2 & a[0] ? o.return : a[0] ? o.throw || ((n = o.return) && n.call(o), 
0) : o.next) && !(n = n.call(o, a[1])).done) return n;
(o = 0, n) && (a = [ 2 & a[0], n.value ]);
switch (a[0]) {
case 0:
case 1:
n = a;
break;

case 4:
c.label++;
return {
value: a[1],
done: !1
};

case 5:
c.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = c.ops.pop();
c.trys.pop();
continue;

default:
if (!(n = c.trys, n = n.length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
c = 0;
continue;
}
if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
c.label = a[1];
break;
}
if (6 === a[0] && c.label < n[1]) {
c.label = n[1];
n = a;
break;
}
if (n && c.label < n[2]) {
c.label = n[2];
c.ops.push(a);
break;
}
n[2] && c.ops.pop();
c.trys.pop();
continue;
}
a = t.call(e, c);
} catch (e) {
a = [ 6, e ];
o = 0;
} finally {
r = n = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.GameHelper = void 0;
var a = function() {
function t() {}
t.loadBundle = function(t) {
return o(this, void 0, void 0, function() {
var r, o;
return n(this, function(n) {
switch (n.label) {
case 0:
return [ 4, c2f.res.loadBundle(t) ];

case 1:
n.sent();
r = c2f.utils.str.uppercaseFirstLetter(t);
(o = {})[r + "UI"] = null;
o[r + "View"] = null;
o = e(r + "View");
c2f.gui.addViewList(o[r + "View"]);
return [ 2, o[r + "UI"] ];
}
});
});
};
t.compareVersion = function(e, t) {
for (var r = e.split("."), o = t.split("."), n = 0; n < r.length; ++n) {
var a = parseInt(r[n]), c = parseInt(o[n] || "0");
if (a !== c) return a - c;
}
return o.length > r.length ? -1 : 0;
};
t.isH5Game = function() {
var e = !1;
switch (cc.sys.platform) {
case cc.sys.MOBILE_BROWSER:
case cc.sys.DESKTOP_BROWSER:
e = !0;
}
return e;
};
t.starConversionQuality = function(e) {
var t = e;
e > 5 && (t = 6);
return t;
};
t.protoMapToObject = function(e) {
if (null == e) return {};
if (null == e.forEach) return e;
var t = {};
e.forEach && e.forEach(function(e, r) {
t[r] = e;
});
return t;
};
t.protoArrayToObject = function(e) {
var t = {};
if (null != e && e.length > 0) for (var r = 0; r < e.length; ++r) t[e[r]] = !0;
return t;
};
t.convertIdNToidn = function(e) {
for (var t = [], r = 0, o = e; r < o.length; r++) {
var n = o[r];
t.push({
id: n.Id,
n: n.N
});
}
return t;
};
t.convertIdNumToidn = function(e) {
for (var t = [], r = 0, o = e; r < o.length; r++) {
var n = o[r];
t.push({
id: n.Id,
n: n.Num
});
}
return t;
};
t.conversionUppercase = function(e) {
return c2f.language.words(2400 + e);
};
t.conversionUppercaseWeek = function(e) {
return e <= 6 ? c2f.language.words(2400 + e) : c2f.language.words(30040);
};
t.getArrHaveCount = function(e, t) {
var r = 0;
e.forEach(function(e) {
e == t && r++;
});
return r;
};
t.setPhysics = function(e) {
var t = cc.director.getPhysicsManager();
t.enabled = e;
t.debugDrawFlags = 0;
cc.PhysicsManager.DrawBits.e_jointBit, cc.PhysicsManager.DrawBits.e_shapeBit;
t.enabledAccumulator = !0;
var r = cc.director.getCollisionManager();
r.enabled = !0;
r.enabledDebugDraw = !0;
r.enabledDrawBoundingBox = !0;
};
return t;
}();
r.GameHelper = a;
cc._RF.pop();
}, {} ],
Main: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "73623K66x9Cb4iu3v08o+58", "Main");
var o, n = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
o(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), a = this && this.__decorate || function(e, t, r, o) {
var n, a = arguments.length, c = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, r, o); else for (var i = e.length - 1; i >= 0; i--) (n = e[i]) && (c = (a < 3 ? n(c) : a > 3 ? n(t, r, c) : n(t, r)) || c);
return a > 3 && c && Object.defineProperty(t, r, c), c;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var c = e("./game/GameConsts"), i = e("./game/GameHelper"), s = cc._decorator, l = s.ccclass, u = s.property, f = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.gui = null;
return t;
}
t.prototype.onLoad = function() {
cc.assetManager.loadBundle(c.GameConsts.Bundle.framework, this.afterLoadFW.bind(this));
};
t.prototype.afterLoadFW = function() {
c2f.initFW();
var e = this.node.addComponent("App");
e && e.initApp(this.gui);
this.runApp();
};
t.prototype.runApp = function() {
this.runGame();
};
t.prototype.runGame = function() {
i.GameHelper.loadBundle(c.GameConsts.Bundle.entrance).then(function(e) {
c2f.gui.open(e.GameLogo);
});
};
a([ u({
type: cc.Node,
tooltip: "界面层"
}) ], t.prototype, "gui", void 0);
return a([ l ], t);
}(cc.Component);
r.default = f;
cc._RF.pop();
}, {
"./game/GameConsts": "GameConsts",
"./game/GameHelper": "GameHelper"
} ],
UIHelper: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "e5454feQLpCM7ERZYcv22Mg", "UIHelper");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.UIHelper = void 0;
var o = e("./GameConsts"), n = function() {
function t() {}
t.playMusic = function(e, t) {
void 0 === t && (t = null);
if (e) {
var r = o.GameConsts.ResUrl.music + e;
c2f.audio.playBgmURL(r, t);
}
};
t.playEffect = function(e) {
if (e) {
var t = o.GameConsts.ResUrl.soundEft + e;
c2f.audio.playSfxURL(t);
}
};
t.setItemNameWithInfo = function(e, t, r, n) {
void 0 === n && (n = !0);
e.string = t;
if (n) {
var a = e.node.getComponent("ShaderArtLabel");
if (a) {
var c = o.GameConsts.QualityDoubClr[r];
if (c) {
var i = cc.color(0, 0, 0);
a.gradient = 2;
a.color1 = i.fromHEX(c[0]).clone();
a.color2 = i.fromHEX(c[1]).clone();
} else {
a.gradient = 1;
a.color1 = cc.color(0, 0, 0).fromHEX(o.GameConsts.QualityColor[r]);
}
} else e.node.color = e.node.color.fromHEX(o.GameConsts.QualityColor[r]);
}
};
t.showTxtBySingleWord = function(e, t, r, o) {
var n = t.length, a = r / n, c = 0;
cc.Tween.stopAllByTarget(e.node);
var i = cc.tween(e.node).call(function() {
if (c == n - 1) {
cc.Tween.stopAllByTarget(e.node);
o && o();
}
e.string = t.slice(0, c + 1);
c++;
}), s = cc.tween(e.node).delay(a);
cc.tween(e.node).sequence(i, s).repeatForever().start();
};
t.showRichTxtWithSingleWord = function(e, t, r, o) {
for (var n = /<.+?\/?>/g, a = t.match(n), c = t.replace(n, "│").split("│"), i = [], s = 0, l = 0, u = c; l < u.length; l++) {
if ("" !== (y = u[l])) {
y = "$[" + s + "]";
s += 1;
}
i.push(y);
}
for (var f = i.join("│"), p = 0; p < c.length; p++) if ("" === c[p]) {
c.splice(p, 1);
p -= 1;
}
for (;-1 !== f.search("│"); ) if (a[0]) {
f = f.replace("│", a[0].toString());
a.splice(0, 1);
} else {
f = f.replace("│", "");
console.warn("matchArr not enough");
}
for (var m = [], h = new Array(s).fill(""), d = 0; d < c.length; d++) for (var g = 0, v = c[d]; g < v.length; g++) {
var y = v[g];
h[d] = h[d] + y;
var F = f;
for (p = 0; p < s; p++) F = F.replace("$[" + p + "]", h[p]);
m.push(F);
}
var C = m.length, _ = 0;
cc.Tween.stopAllByTarget(e.node);
var b = cc.tween(e.node).call(function() {
if (_ >= C - 1) {
e.string = t;
cc.Tween.stopAllByTarget(e.node);
o && o();
} else {
e.string = m[_];
_++;
}
}), w = cc.tween(e.node).delay(r);
cc.tween(e.node).sequence(b, w).repeatForever().start();
};
t.showScrollNum = function(e, t, r, o, n, a) {
cc.Tween.stopAllByTarget(e.node);
var c = t - r;
if (0 == c) e.string = t.toString(); else {
var i, s = 1 / cc.game.getFrameRate();
i = c / (o / s);
var l = r, u = cc.tween(e.node).call(function() {
if (l >= t) {
l = t;
cc.Tween.stopAllByTarget(e.node);
n && n();
}
a ? a(Math.ceil(l)) : e.string = Math.ceil(l).toString();
l += i;
}), f = cc.tween(e.node).delay(0);
cc.tween(e.node).sequence(u, f).repeatForever().start();
}
};
t.formatRichTextOutline = function(e, t) {
void 0 === t && (t = 2);
return "<outline color=#000000 width=" + t + ">" + e + "</outline>";
};
t.formatRichTextOutlineWithColor = function(e, t, r) {
void 0 === r && (r = 2);
return "<outline color=" + t + " width=" + r + ">" + e + "</outline>";
};
t.playRotateEfx = function(e, t) {
void 0 === t && (t = 5);
cc.Tween.stopAllByTarget(e);
cc.tween(e).by(t, {
angle: -360
}).repeatForever().start();
};
t.playBreatheEfx = function(e, t, r) {
cc.Tween.stopAllByTarget(e);
if (r) {
var o = cc.tween(e).by(1, {
scaleX: t,
scaleY: t
}), n = cc.tween(e).by(.8, {
scaleX: -t,
scaleY: -t
}), a = cc.tween(e).delay(.5);
cc.tween(e).sequence(o, n, a).repeatForever().start();
}
};
t.getHitTimesByInfo = function(e, t) {
var r = 0, o = szg.cfg.getCfgData("spineCount"), n = o[e];
if (n && n[t]) {
var a = n[t].act;
if (a) for (var c = 0, i = a; c < i.length; c++) for (var s = 0, l = i[c]; s < l.length; s++) {
var u = 0, f = o[l[s]];
f && f.play && f.play.hitCnt && (u = f.play.hitCnt);
r += u;
} else r = n[t].hitCnt;
}
return r;
};
t.getskillDes = function(e, t) {
var r = t ? "<color=#40953c>" : "<color=#B77474>";
return this.getStrReplace(e, r);
};
t.getStrReplace = function(e, t) {
e = e.replace(/<color=/gi, t);
for (var r = 0; r < 6; r++) e = e.replace("{" + r + "}>", "");
return e;
};
t.filterSensitiveWords = function(e) {
for (var t = [], r = 21e3; r < 21999; r++) {
var o = c2f.language.words(r);
o && "" != o && !Number(o) && t.push(o);
}
for (var n = 0, a = t; n < a.length; n++) {
var c = a[n];
if (e.includes(c)) return !0;
}
return !1;
};
t.filterSpecialCharacters = function(e) {
var t = e, r = this.filterChineseCharacters(t).match(/\W+/g), o = !1;
r && r.length > 0 && (o = !0);
return o;
};
t.filterChineseCharacters = function(e) {
return e.replace(/[\u4e00-\u9fa5]/g, "");
};
t.splitChineseAndEnglish = function(e) {
var t = e.match(/[\u4e00-\u9fa5]/g), r = e.match(/[a-zA-Z]/g);
return {
chinese: t ? t.join("") : "",
english: r ? r.join("") : ""
};
};
t.showLongTxtByFile = function(t, r, o) {
c2f.res.load(r, o, cc.TextAsset, function(n, a) {
if (n) cc.error(n.message); else {
var c = e("EntranceView").EntranceUI;
c2f.gui.open(c.LongTxtDialog, {
content: a.text,
title: t
});
}
c2f.res.release(o, cc.TextAsset, r);
});
};
t.setCutdownWithDayMini = function(e, t, r, o) {
void 0 === r && (r = null);
void 0 === o && (o = null);
var n = e.getComponent("CountdownLabel");
if (n) {
var a = "%{d}" + c2f.language.words(2504) + "%{hh}:%{mm}:%{mm}";
n.startCountdown(t, {
S: "%{ss}",
M: "%{mm}:%{ss}",
H: "%{hh}:%{mm}:%{ss}",
D: a
}, o, null, r);
}
};
t.setCutdownWithDayFixed = function(e, t, r, o) {
void 0 === r && (r = null);
void 0 === o && (o = null);
var n = e.getComponent("CountdownLabel");
if (n) {
var a = "%{hh}:%{mm}:%{ss}", c = "%{d}" + c2f.language.words(2504) + "%{hh}:%{mm}";
n.startCountdown(t, {
S: a,
M: a,
H: a,
D: c
}, o, null, r);
}
};
t.setShaderArtLabelString = function(e, t) {
var r = e.getComponent("ShaderArtLabel");
if (r) {
var o = t.split("|");
o.length > 0 && (r.node.getComponent(cc.Label).string = o[0]);
o.length > 1 && o[1].length > 0 && (r.outlineColor = r.outlineColor.fromHEX(o[1]));
o.length > 2 && o[2].length > 0 && (r.color1 = r.color1.fromHEX(o[2]));
o.length > 3 && o[3].length > 0 && (r.color2 = r.color2.fromHEX(o[3]));
}
};
t.playUIEffect = function(e, t, r, n, a) {
e.setEventListener(function(e, t) {
"number" != typeof t && ("key" == t.data.name ? a && a() : t.data.name);
});
var c = o.GameConsts.ResUrl.uiEfx + (t + "/") + t;
c2f.utils.view.changeSkeletonData(e, c, function() {
e && e.isValid && e.setAnimation(0, r, n);
});
};
t.playSkeAni = function(e, t, r, o, n, a) {
void 0 === r && (r = null);
void 0 === o && (o = !1);
void 0 === n && (n = 0);
void 0 === a && (a = 1);
e.node.active = !0;
e.setAnimation(n, t, o);
e.timeScale = a;
e.setCompleteListener(function() {
if (r) {
r();
r = null;
}
});
};
t.createBezier = function(e, t, r) {
r = r || Object.create(null);
var o = function(e) {
for (var t = 1, r = 2; r <= e; r++) t *= r;
return t;
}, n = function(e, t) {
for (var r = e.length - 1, n = t, a = function(e, t, r) {
return o(t) / (o(e) * o(t - e)) * Math.pow(r, e) * Math.pow(1 - r, t - e);
}, c = {
x: 0,
y: 0
}, i = 0; i <= r; i++) {
var s = a(i, r, n);
c.x += e[i].x * s;
c.y += e[i].y * s;
}
return c;
}, a = [];
t.controlPoint && a.push.apply(a, t.controlPoint);
a.splice(0, 0, t.startPos);
a.push(t.endPos);
r.onUpdate = function(t, r) {
var o = n(a, r);
e.setPosition(o.x, o.y);
};
return r;
};
t.getCirclePoints = function(e, t, r, o) {
void 0 === o && (o = 20);
for (var n = [], a = Math.PI / 180 * Math.round(360 / r), c = 0; c < r; c++) {
var i = t.x + e * Math.sin(a * c), s = t.y + e * Math.cos(a * c);
n.unshift(cc.v3(i + Math.random() * o, s + Math.random() * o, 0));
}
return n;
};
t.getCirclePointsArr = function(e, t, r, o, n) {
void 0 === n && (n = 20);
for (var a = [], c = Math.PI / 180 * Math.round(360 / o), i = 0; i < o; i++) {
var s = r.x + e * Math.sin(c * i), l = r.y + e * Math.cos(c * i), u = r.x + t * Math.sin(c * i), f = r.y + t * Math.cos(c * i), p = Math.random() * n, m = Math.random() * n, h = [ cc.v3(s + p, l + m), cc.v3(u + p, f + m) ];
a.push(h);
}
return a;
};
t.showNetError = function(e) {
if (cc.assetManager.getBundle(o.GameConsts.Bundle.mainPack)) {
if (99999 == e) {
c2f.gui.notifyTxt("509");
c2f.gui.hideLoading(!0);
}
} else if (99999 == e) {
c2f.gui.notifyTxt("509");
c2f.gui.hideLoading(!0);
}
};
return t;
}();
r.UIHelper = n;
cc._RF.pop();
}, {
"./GameConsts": "GameConsts",
EntranceView: void 0
} ],
UINetwork: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "e0cc4RSpvhG+6BQixHjM+8G", "UINetwork");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.UINetwork = void 0;
var o = e("./UIHelper"), n = function() {
function t() {}
t.prototype.showWaitUI = function() {
c2f.gui.showLoading();
};
t.prototype.hideWaitUI = function() {
c2f.gui.hideLoading();
};
t.prototype.showErrorMsg = function(e) {
o.UIHelper.showNetError(e);
};
t.prototype.isOpenReloginView = function() {
var t = e("EntranceView").EntranceUI;
return c2f.gui.has(t.ReloginDialog);
};
t.prototype.showReloginView = function() {
c2f.gui.hideLoading(!0);
szg.entrance.reLogin(function(e, t) {
if (void 0 === t.ErrorCode || 0 === t.ErrorCode) {
c2f.gui.notifyTxt("511");
c2f.net.startHeartbeat();
} else o.UIHelper.showNetError(t.ErrorCode);
}, function() {
c2f.gui.notifyTxt("512");
});
};
return t;
}();
r.UINetwork = n;
cc._RF.pop();
}, {
"./UIHelper": "UIHelper",
EntranceView: void 0
} ],
UIParam: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "21de8XYl+VLc5Lj9uXBuhnW", "UIParam");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.UIPa = void 0;
var o = e("./GameConsts");
(function(e) {
var t, r;
e.DesStarGameArgs = {
width: 66,
heigh: 66,
count: 10
};
e.StarItemData = ((t = {})[0] = {
score: 1,
url: o.GameConsts.ResUrl.desStar + "block_0"
}, t[1] = {
score: 2,
url: o.GameConsts.ResUrl.desStar + "block_1"
}, t[2] = {
score: 5,
url: o.GameConsts.ResUrl.desStar + "block_2"
}, t[3] = {
score: 5,
url: o.GameConsts.ResUrl.desStar + "block_3"
}, t[4] = {
score: 10,
url: o.GameConsts.ResUrl.desStar + "block_4"
}, t[5] = {
score: 10,
url: o.GameConsts.ResUrl.desStar + "block_5"
}, t[6] = {
score: 20,
url: o.GameConsts.ResUrl.desStar + "block_6"
}, t[7] = {
score: 20,
url: o.GameConsts.ResUrl.desStar + "block_7"
}, t);
e.Physics2048ItemData = ((r = {})[0] = {
tag: 1,
colorNum: "<color=#FFFFFF>2</color>",
score: 2,
url: o.GameConsts.ResUrl.physics2048 + "circle_2",
radius: 30
}, r[1] = {
tag: 2,
colorNum: "<color=#FFFFFF>4</color>",
score: 4,
url: o.GameConsts.ResUrl.physics2048 + "circle_4",
radius: 40
}, r[2] = {
tag: 3,
colorNum: "<color=#FFFFFF>8</color>",
score: 8,
url: o.GameConsts.ResUrl.physics2048 + "circle_8",
radius: 45
}, r[3] = {
tag: 4,
colorNum: "<color=#FFFFFF>16</color>",
score: 16,
url: o.GameConsts.ResUrl.physics2048 + "circle_16",
radius: 50
}, r[4] = {
tag: 5,
colorNum: "<color=#FFFFFF>32</color>",
score: 32,
url: o.GameConsts.ResUrl.physics2048 + "circle_32",
radius: 60
}, r[5] = {
tag: 6,
colorNum: "<color=#FFFFFF>64</color>",
score: 64,
url: o.GameConsts.ResUrl.physics2048 + "circle_64",
radius: 70
}, r[6] = {
tag: 7,
colorNum: "<color=#FFFFFF>128</color>",
score: 128,
url: o.GameConsts.ResUrl.physics2048 + "circle_128",
radius: 80
}, r[7] = {
tag: 8,
colorNum: "<color=#FFFFFF>256</color>",
score: 256,
url: o.GameConsts.ResUrl.physics2048 + "circle_256",
radius: 100
}, r[8] = {
tag: 9,
colorNum: "<color=#FFFFFF>512</color>",
score: 512,
url: o.GameConsts.ResUrl.physics2048 + "circle_512",
radius: 120
}, r[9] = {
tag: 10,
colorNum: "<color=#FFFFFF>1024</color>",
score: 1024,
url: o.GameConsts.ResUrl.physics2048 + "circle_1024",
radius: 130
}, r[10] = {
tag: 11,
colorNum: "<color=#FFFFFF>2048</color>",
score: 2048,
url: o.GameConsts.ResUrl.physics2048 + "circle_2048",
radius: 150
}, r);
e.PhysicsTag = {
wall: 0,
block_2: 1,
block_4: 2,
block_8: 3,
block_16: 4,
block_32: 5,
block_64: 6,
block_128: 7,
block_256: 8,
block_512: 9,
block_1024: 10,
block_2048: 11
};
(function(e) {
e[e.Alive = 0] = "Alive";
e[e.Dead = 1] = "Dead";
})(e.YngyItemArgsStates || (e.YngyItemArgsStates = {}));
})(r.UIPa || (r.UIPa = {}));
cc._RF.pop();
}, {
"./GameConsts": "GameConsts"
} ]
}, {}, [ "Main", "EventName", "GameCalculator", "GameConsts", "GameData", "GameHelper", "UIHelper", "UINetwork", "UIParam" ]);