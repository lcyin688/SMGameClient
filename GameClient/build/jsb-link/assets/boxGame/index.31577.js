window.__require = function t(e, o, n) {
function i(c, s) {
if (!o[c]) {
if (!e[c]) {
var a = c.split("/");
a = a[a.length - 1];
if (!e[a]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(a, !0);
if (r) return r(a, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = a;
}
var u = o[c] = {
exports: {}
};
e[c][0].call(u.exports, function(t) {
return i(e[c][1][t] || t);
}, u, u.exports, t, e, o, n);
}
return o[c].exports;
}
for (var r = "function" == typeof __require && __require, c = 0; c < n.length; c++) i(n[c]);
return i;
}({
BoxGameMainModel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5aa18DbpDJCKrGgNyMXO/Ie", "BoxGameMainModel");
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
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./../../../c2f-framework/gui/layer/UIModelBase"), s = cc._decorator, a = s.ccclass, l = (s.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "F_BoxGameMain";
e.baseUrl = "http://43.157.128.102:5501";
return e;
}
e.prototype.initData = function() {
this.accounts = [ "kstest001", "kstest002", "kstest003", "kstest004", "kstest005" ];
};
e.prototype.getWsUrl = function(t, e) {
if (!this.wsUrl) {
var o = this.baseUrl.replace("http:", "ws:");
o = o.replace("https:", "wss:");
this.wsUrl = o + "/hubs/chathub?access_token=" + t;
}
this.tcpConnet(this.wsUrl, e);
};
e.prototype.tcpConnet = function() {};
e.prototype.sendMsg = function(t, e, o, n) {
void 0 === n && (n = "GET");
console.error("reqMsg   url", t);
var i = new XMLHttpRequest();
i.open(n, t, !0);
i.setRequestHeader("Content-Type", "application/json");
i.onload = function() {
if (this.status >= 200 && this.status < 300) {
console.log("成功相应", this.responseText);
try {
var t = JSON.parse(this.responseText);
e(t.data);
} catch (t) {
console.error("Invalid JSON:", t);
}
} else console.error("Failed to load resource: " + this.status);
};
i.onerror = function() {
console.error("Network error");
};
i.send(o);
};
return r([ a ], e);
}(c.UIModelBase));
o.default = l;
cc._RF.pop();
}, {
"./../../../c2f-framework/gui/layer/UIModelBase": void 0
} ],
BoxGameMainView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f9fc30gimhKpK1QGuRZuig3", "BoxGameMainView");
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
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./../../../c2f-framework/gui/layer/UIViewBase"), s = t("./../../../c2f-framework/component/common/CountdownLabel"), a = t("./../../../c2f-framework/component/common/LinkPrefab"), l = t("./../BoxItem/BoxItem"), u = cc._decorator, p = u.ccclass, f = (u.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "F_BoxGameMain";
e.btnCloseSprite = void 0;
e.btnCloseButton = void 0;
e.txt_timeLabel = void 0;
e.txt_timeCountdownLabel = void 0;
e.txt_1Label = void 0;
e.txt_com2Label = void 0;
e.txt_lessLabel = void 0;
e.txt_levelLabel = void 0;
e.box1LinkPrefab = void 0;
e.box1BoxItem = void 0;
e.box2LinkPrefab = void 0;
e.box2BoxItem = void 0;
e.box3LinkPrefab = void 0;
e.box3BoxItem = void 0;
e.btnStartButton = void 0;
e.txt_startCountLabel = void 0;
e.txt_count1Label = void 0;
e.txt_count2Label = void 0;
e.txt_count3Label = void 0;
e.boxBtnSprite = void 0;
e.boxBtnButton = void 0;
e.txt_adLabel = void 0;
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
this.btnClose = this.get("_btnClose_");
this.btnCloseSprite = this.btnClose.getComponent(cc.Sprite);
this.btnCloseButton = this.btnClose.getComponent(cc.Button);
this.txt_time = this.get("_txt_time_");
this.txt_timeLabel = this.txt_time.getComponent(cc.Label);
this.txt_timeCountdownLabel = this.txt_time.getComponent(s.default);
this.txt_1 = this.get("_txt_1_");
this.txt_1Label = this.txt_1.getComponent(cc.Label);
this.complete = this.get("_complete_");
this.txt_com2 = this.get("_txt_com2_");
this.txt_com2Label = this.txt_com2.getComponent(cc.Label);
this.less = this.get("_less_");
this.txt_less = this.get("_txt_less_");
this.txt_lessLabel = this.txt_less.getComponent(cc.Label);
this.txt_level = this.get("_txt_level_");
this.txt_levelLabel = this.txt_level.getComponent(cc.Label);
this.box1 = this.get("_box1_");
this.box1LinkPrefab = this.box1.getComponent(a.default);
this.box1BoxItem = this.box1.getComponent(a.default).getComponentEx(l.default);
this.box2 = this.get("_box2_");
this.box2LinkPrefab = this.box2.getComponent(a.default);
this.box2BoxItem = this.box2.getComponent(a.default).getComponentEx(l.default);
this.box3 = this.get("_box3_");
this.box3LinkPrefab = this.box3.getComponent(a.default);
this.box3BoxItem = this.box3.getComponent(a.default).getComponentEx(l.default);
this.btnStart = this.get("_btnStart_");
this.btnStartButton = this.btnStart.getComponent(cc.Button);
this.txt_startCount = this.get("_txt_startCount_");
this.txt_startCountLabel = this.txt_startCount.getComponent(cc.Label);
this.txt_count1 = this.get("_txt_count1_");
this.txt_count1Label = this.txt_count1.getComponent(cc.Label);
this.txt_count2 = this.get("_txt_count2_");
this.txt_count2Label = this.txt_count2.getComponent(cc.Label);
this.txt_count3 = this.get("_txt_count3_");
this.txt_count3Label = this.txt_count3.getComponent(cc.Label);
this.boxBtn = this.get("_boxBtn_");
this.boxBtnSprite = this.boxBtn.getComponent(cc.Sprite);
this.boxBtnButton = this.boxBtn.getComponent(cc.Button);
this.txt_ad = this.get("_txt_ad_");
this.txt_adLabel = this.txt_ad.getComponent(cc.Label);
};
e.prototype.addEvent = function() {
this.btnCloseButton.node.on("click", this.onbtnCloseButtonClick, this);
this.btnStartButton.node.on("click", this.onbtnStartButtonClick, this);
this.boxBtnButton.node.on("click", this.onboxBtnButtonClick, this);
};
e.prototype.removeEvent = function() {
this.btnCloseButton.node.off("click", this.onbtnCloseButtonClick, this);
this.btnStartButton.node.off("click", this.onbtnStartButtonClick, this);
this.boxBtnButton.node.off("click", this.onboxBtnButtonClick, this);
};
e.prototype.onbtnCloseButtonClick = function(t) {
this.emit("click", t);
};
e.prototype.onbtnStartButtonClick = function(t) {
this.emit("click", t);
};
e.prototype.onboxBtnButtonClick = function(t) {
this.emit("click", t);
};
return r([ p ], e);
}(c.UIViewBase));
o.default = f;
cc._RF.pop();
}, {
"./../../../c2f-framework/component/common/CountdownLabel": void 0,
"./../../../c2f-framework/component/common/LinkPrefab": void 0,
"./../../../c2f-framework/gui/layer/UIViewBase": void 0,
"./../BoxItem/BoxItem": "BoxItem"
} ],
BoxGameMain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "85b52ZMHnNDWYcplz2IyXSZ", "BoxGameMain");
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
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
}, c = this && this.__awaiter || function(t, e, o, n) {
return new (o || (o = Promise))(function(i, r) {
function c(t) {
try {
a(n.next(t));
} catch (t) {
r(t);
}
}
function s(t) {
try {
a(n.throw(t));
} catch (t) {
r(t);
}
}
function a(t) {
t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(c, s);
var e;
}
a((n = n.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var o, n, i, r, c = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(t) {
return function(e) {
return a([ t, e ]);
};
}
function a(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;c; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
c.label++;
return {
value: r[1],
done: !1
};

case 5:
c.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = c.ops.pop();
c.trys.pop();
continue;

default:
if (!(i = c.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
c = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
c.label = r[1];
break;
}
if (6 === r[0] && c.label < i[1]) {
c.label = i[1];
i = r;
break;
}
if (i && c.label < i[2]) {
c.label = i[2];
c.ops.push(r);
break;
}
i[2] && c.ops.pop();
c.trys.pop();
continue;
}
r = e.call(t, c);
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
var a = t("./../../../c2f-framework/gui/layer/UIVControlBase"), l = t("./../../../c2f-framework/define/C2FEnum"), u = cc._decorator, p = u.ccclass, f = (u.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "F_BoxGameMain";
e.model = void 0;
e.view = void 0;
return e;
}
e.prototype.onViewOpen = function() {
this.model.initData();
this.loginToGame();
};
e.prototype.loginToGame = function() {
var t = this;
c2f.gui.showLoading();
var e = this.model.baseUrl + "/pddgame/login", o = JSON.stringify({
ksCode: this.model.accounts[0],
test: !0
});
this.model.sendMsg(e, function(e) {
t.model.playerData = e;
t.reflashView();
t.model.getWsUrl(e.token, function(e) {
c2f.gui.hideLoading();
if ("Connected" === e) t.model.client.tcpSend('{"protocol":"json", "version":1}'); else {
c2f.gui.notifyTxt("1006");
c2f.net.purge();
}
});
}, o, "POST");
};
e.prototype.onEnable = function() {
t.prototype.onEnable && t.prototype.onEnable.call(this);
this.on(l.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
};
e.prototype.onDisable = function() {
t.prototype.onDisable && t.prototype.onDisable.call(this);
this.off(l.C2FEnum.UIEvent.ButtonClick);
};
e.prototype.onButtonClick = function(t, e) {
return c(this, void 0, void 0, function() {
return s(this, function() {
switch (e.name) {
case this.view.btnCloseButton.name:
this.CC_onClickbtnClose();
break;

case this.view.btnStartButton.name:
this.CC_onClickbtnStart();
break;

case this.view.boxBtnButton.name:
this.CC_onClickboxBtn();
}
return [ 2 ];
});
});
};
e.prototype.CC_onClickbtnClose = function() {
this.closeView();
};
e.prototype.CC_onClickbtnStart = function() {
this.startGame();
};
e.prototype.reflashView = function() {
var t = this.model.playerData.endTime - c2f.utils.date.getLocalTick();
this.setTimeCountDownScore(this.view.txt_timeCountdownLabel, t);
this.setNowMoney();
this.setNowDimond();
this.setNowCoin();
this.setNowCash();
this.setLevel();
this.setStartCount();
this.setAdCount();
this.setGameRet();
};
e.prototype.setGameRet = function() {
if (this.model.playerData.gameRet.isOver) {
this.view.less.active = !0;
this.setLessCount();
}
};
e.prototype.setNowMoney = function() {
this.view.txt_1Label.string = this.model.playerData.nowMoney.toString();
};
e.prototype.setNowDimond = function() {
this.view.txt_count1Label.string = this.model.playerData.nowDiamond.toString();
};
e.prototype.setNowCoin = function() {
this.view.txt_count2Label.string = this.model.playerData.nowCoin.toString();
};
e.prototype.setNowCash = function() {
this.view.txt_count3Label.string = this.model.playerData.nowCash.toString();
};
e.prototype.setLevel = function() {
this.view.txt_levelLabel.string = this.model.playerData.gameLevel.toString();
};
e.prototype.setAdCount = function() {
this.view.txt_adLabel.string = this.model.playerData.boxAdLuckTimes.toString();
};
e.prototype.setStartCount = function() {
this.view.txt_startCountLabel.string = this.model.playerData.timeBoxs.toString();
};
e.prototype.setLessCount = function() {
this.view.txt_lessLabel.string = this.model.playerData.gameRet.coinNum.toString();
};
e.prototype.setTimeCountDownScore = function(t, e) {
var o = "%{d}" + c2f.language.words(3001) + "%{hh}:%{mm}:%{ss}";
t.startCountdown(e, {
S: "%{hh}:%{mm}:%{ss}",
M: "%{hh}:%{mm}:%{ss}",
H: "%{hh}:%{mm}:%{ss}",
D: o
}, c2f.language.words(3e3), null, function() {});
};
e.prototype.CC_onClickboxBtn = function() {
this.clickAd(1);
};
e.prototype.clickAd = function(t) {
var e = this.model.baseUrl + "/pddgame/viewad", o = JSON.stringify({
operType: t
});
this.model.sendMsg(e, function() {}, o, "POST");
};
e.prototype.startGame = function() {
var t = this.model.baseUrl + "/pddgame/timebox";
this.model.sendMsg(t, function() {}, null, "POST");
};
e.prototype.luckGame = function(t) {
var e = this.model.baseUrl + "/pddgame/luck", o = JSON.stringify({
luckType: t
});
this.model.sendMsg(e, function() {}, o, "POST");
};
return r([ p ], e);
}(a.UIVControlBase));
o.default = f;
cc._RF.pop();
}, {
"./../../../c2f-framework/define/C2FEnum": void 0,
"./../../../c2f-framework/gui/layer/UIVControlBase": void 0
} ],
BoxGamePro: [ function(t, e) {
"use strict";
cc._RF.push(e, "d855cA2OoNMpbey6xUnsnf7", "BoxGamePro");
cc._RF.pop();
}, {} ],
BoxGameResultModel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "601789fL5FBRaQnq1j4plpk", "BoxGameResultModel");
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
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./../../../c2f-framework/gui/layer/UIModelBase"), s = cc._decorator, a = s.ccclass, l = (s.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "F_BoxGameResult";
return e;
}
return r([ a ], e);
}(c.UIModelBase));
o.default = l;
cc._RF.pop();
}, {
"./../../../c2f-framework/gui/layer/UIModelBase": void 0
} ],
BoxGameResultView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "341a7+hsXZESaVNYXGWhvIA", "BoxGameResultView");
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
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./../../../c2f-framework/gui/layer/UIViewBase"), s = cc._decorator, a = s.ccclass, l = (s.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "F_BoxGameResult";
e.btnCloseSprite = void 0;
e.btnCloseButton = void 0;
e.iconSprite = void 0;
e.txt_betLabel = void 0;
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
this.btnClose = this.get("_btnClose_");
this.btnCloseSprite = this.btnClose.getComponent(cc.Sprite);
this.btnCloseButton = this.btnClose.getComponent(cc.Button);
this.icon = this.get("_icon_");
this.iconSprite = this.icon.getComponent(cc.Sprite);
this.txt_bet = this.get("_txt_bet_");
this.txt_betLabel = this.txt_bet.getComponent(cc.Label);
};
e.prototype.addEvent = function() {
this.btnCloseButton.node.on("click", this.onbtnCloseButtonClick, this);
};
e.prototype.removeEvent = function() {
this.btnCloseButton.node.off("click", this.onbtnCloseButtonClick, this);
};
e.prototype.onbtnCloseButtonClick = function(t) {
this.emit("click", t);
};
return r([ a ], e);
}(c.UIViewBase));
o.default = l;
cc._RF.pop();
}, {
"./../../../c2f-framework/gui/layer/UIViewBase": void 0
} ],
BoxGameResult: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "08be3CIn7FNi4z3wY/dxVnd", "BoxGameResult");
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
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
}, c = this && this.__awaiter || function(t, e, o, n) {
return new (o || (o = Promise))(function(i, r) {
function c(t) {
try {
a(n.next(t));
} catch (t) {
r(t);
}
}
function s(t) {
try {
a(n.throw(t));
} catch (t) {
r(t);
}
}
function a(t) {
t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(c, s);
var e;
}
a((n = n.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var o, n, i, r, c = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(t) {
return function(e) {
return a([ t, e ]);
};
}
function a(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;c; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
c.label++;
return {
value: r[1],
done: !1
};

case 5:
c.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = c.ops.pop();
c.trys.pop();
continue;

default:
if (!(i = c.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
c = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
c.label = r[1];
break;
}
if (6 === r[0] && c.label < i[1]) {
c.label = i[1];
i = r;
break;
}
if (i && c.label < i[2]) {
c.label = i[2];
c.ops.push(r);
break;
}
i[2] && c.ops.pop();
c.trys.pop();
continue;
}
r = e.call(t, c);
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
var a = t("./../../../c2f-framework/gui/layer/UIVControlBase"), l = t("./../../../c2f-framework/define/C2FEnum"), u = cc._decorator, p = u.ccclass, f = (u.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "F_BoxGameResult";
e.model = void 0;
e.view = void 0;
return e;
}
e.prototype.onViewOpen = function() {};
e.prototype.onEnable = function() {
t.prototype.onEnable && t.prototype.onEnable.call(this);
this.on(l.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
};
e.prototype.onDisable = function() {
t.prototype.onDisable && t.prototype.onDisable.call(this);
this.off(l.C2FEnum.UIEvent.ButtonClick);
};
e.prototype.onButtonClick = function(t, e) {
return c(this, void 0, void 0, function() {
return s(this, function() {
switch (e.name) {
case this.view.btnCloseButton.name:
this.CC_onClickbtnClose();
}
return [ 2 ];
});
});
};
e.prototype.CC_onClickbtnClose = function() {};
return r([ p ], e);
}(a.UIVControlBase));
o.default = f;
cc._RF.pop();
}, {
"./../../../c2f-framework/define/C2FEnum": void 0,
"./../../../c2f-framework/gui/layer/UIVControlBase": void 0
} ],
BoxGameView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "999d1iq0Y9IBKtM7FNbxGw6", "BoxGameView");
var n;
Object.defineProperty(o, "__esModule", {
value: !0
});
o.BoxGameView = o.BoxGameUI = void 0;
var i, r = t("../../Script/game/GameConsts"), c = t("../../c2f-framework/define/C2FUIDef");
(function(t) {
t[t.Start = 4e3] = "Start";
t[t.YngyMain = 4001] = "YngyMain";
t[t.BoxGameMain = 4002] = "BoxGameMain";
t[t.BoxGameResult = 4003] = "BoxGameResult";
t[t.BoxTime = 4004] = "BoxTime";
})(i = o.BoxGameUI || (o.BoxGameUI = {}));
o.BoxGameView = ((n = {})[i.BoxGameMain] = {
layer: c.LayerType.UI,
prefab: "prefab/F_BoxGameMain",
bundle: r.GameConsts.Bundle.boxGame
}, n[i.BoxGameResult] = {
layer: c.LayerType.UI,
prefab: "prefab/F_BoxGameResult",
bundle: r.GameConsts.Bundle.boxGame
}, n[i.BoxTime] = {
layer: c.LayerType.UI,
prefab: "prefab/F_BoxTime",
bundle: r.GameConsts.Bundle.boxGame
}, n);
cc._RF.pop();
}, {
"../../Script/game/GameConsts": void 0,
"../../c2f-framework/define/C2FUIDef": void 0
} ],
BoxItemModel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c54f8WCKONEmpaY24PlUOia", "BoxItemModel");
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
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./../../../c2f-framework/gui/layer/UIModelBase"), s = cc._decorator, a = s.ccclass, l = (s.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "P_BoxItem";
return e;
}
return r([ a ], e);
}(c.UIModelBase));
o.default = l;
cc._RF.pop();
}, {
"./../../../c2f-framework/gui/layer/UIModelBase": void 0
} ],
BoxItemView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "00a55m7rApMLoMujWlUhvnw", "BoxItemView");
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
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./../../../c2f-framework/gui/layer/UIPanelBase"), s = cc._decorator, a = s.ccclass, l = (s.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "P_BoxItem";
e.iconSprite = void 0;
e.iconAnimation = void 0;
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
this.icon = this.get("_icon_");
this.iconSprite = this.icon.getComponent(cc.Sprite);
this.iconAnimation = this.icon.getComponent(cc.Animation);
};
e.prototype.addEvent = function() {};
e.prototype.removeEvent = function() {};
return r([ a ], e);
}(c.UIPanelBase));
o.default = l;
cc._RF.pop();
}, {
"./../../../c2f-framework/gui/layer/UIPanelBase": void 0
} ],
BoxItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5a6deJsjpdMI4Tcc8vpQWlQ", "BoxItem");
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
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./../../../c2f-framework/gui/layer/UIPControlBase"), s = cc._decorator, a = s.ccclass, l = (s.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "P_BoxItem";
e.model = void 0;
e.view = void 0;
return e;
}
return r([ a ], e);
}(c.UIPControlBase));
o.default = l;
cc._RF.pop();
}, {
"./../../../c2f-framework/gui/layer/UIPControlBase": void 0
} ],
BoxTimeModel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "df6d33U9TVMEZjuQ9kbmdLN", "BoxTimeModel");
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
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./../../../c2f-framework/gui/layer/UIModelBase"), s = cc._decorator, a = s.ccclass, l = (s.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "F_BoxTime";
return e;
}
return r([ a ], e);
}(c.UIModelBase));
o.default = l;
cc._RF.pop();
}, {
"./../../../c2f-framework/gui/layer/UIModelBase": void 0
} ],
BoxTimeView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "fa6eej6ZVNDYqt4YkpFNnxs", "BoxTimeView");
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
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./../../../c2f-framework/gui/layer/UIViewBase"), s = cc._decorator, a = s.ccclass, l = (s.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "F_BoxTime";
e.btnCloseSprite = void 0;
e.btnCloseButton = void 0;
e.txt_betLabel = void 0;
e.btm_doubleSprite = void 0;
e.btm_doubleButton = void 0;
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
this.btnClose = this.get("_btnClose_");
this.btnCloseSprite = this.btnClose.getComponent(cc.Sprite);
this.btnCloseButton = this.btnClose.getComponent(cc.Button);
this.txt_bet = this.get("_txt_bet_");
this.txt_betLabel = this.txt_bet.getComponent(cc.Label);
this.btm_double = this.get("_btm_double_");
this.btm_doubleSprite = this.btm_double.getComponent(cc.Sprite);
this.btm_doubleButton = this.btm_double.getComponent(cc.Button);
};
e.prototype.addEvent = function() {
this.btnCloseButton.node.on("click", this.onbtnCloseButtonClick, this);
this.btm_doubleButton.node.on("click", this.onbtm_doubleButtonClick, this);
};
e.prototype.removeEvent = function() {
this.btnCloseButton.node.off("click", this.onbtnCloseButtonClick, this);
this.btm_doubleButton.node.off("click", this.onbtm_doubleButtonClick, this);
};
e.prototype.onbtnCloseButtonClick = function(t) {
this.emit("click", t);
};
e.prototype.onbtm_doubleButtonClick = function(t) {
this.emit("click", t);
};
return r([ a ], e);
}(c.UIViewBase));
o.default = l;
cc._RF.pop();
}, {
"./../../../c2f-framework/gui/layer/UIViewBase": void 0
} ],
BoxTime: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "54421FV0WNOR7agpmrnZ1AC", "BoxTime");
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
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
}, c = this && this.__awaiter || function(t, e, o, n) {
return new (o || (o = Promise))(function(i, r) {
function c(t) {
try {
a(n.next(t));
} catch (t) {
r(t);
}
}
function s(t) {
try {
a(n.throw(t));
} catch (t) {
r(t);
}
}
function a(t) {
t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(c, s);
var e;
}
a((n = n.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var o, n, i, r, c = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(t) {
return function(e) {
return a([ t, e ]);
};
}
function a(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;c; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
c.label++;
return {
value: r[1],
done: !1
};

case 5:
c.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = c.ops.pop();
c.trys.pop();
continue;

default:
if (!(i = c.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
c = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
c.label = r[1];
break;
}
if (6 === r[0] && c.label < i[1]) {
c.label = i[1];
i = r;
break;
}
if (i && c.label < i[2]) {
c.label = i[2];
c.ops.push(r);
break;
}
i[2] && c.ops.pop();
c.trys.pop();
continue;
}
r = e.call(t, c);
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
var a = t("./../../../c2f-framework/gui/layer/UIVControlBase"), l = t("./../../../c2f-framework/define/C2FEnum"), u = cc._decorator, p = u.ccclass, f = (u.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "F_BoxTime";
e.model = void 0;
e.view = void 0;
return e;
}
e.prototype.onViewOpen = function() {};
e.prototype.onEnable = function() {
t.prototype.onEnable && t.prototype.onEnable.call(this);
this.on(l.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
};
e.prototype.onDisable = function() {
t.prototype.onDisable && t.prototype.onDisable.call(this);
this.off(l.C2FEnum.UIEvent.ButtonClick);
};
e.prototype.onButtonClick = function(t, e) {
return c(this, void 0, void 0, function() {
return s(this, function() {
switch (e.name) {
case this.view.btnCloseButton.name:
this.CC_onClickbtnClose();
break;

case this.view.btm_doubleButton.name:
this.CC_onClickbtm_double();
}
return [ 2 ];
});
});
};
e.prototype.CC_onClickbtnClose = function() {};
e.prototype.CC_onClickbtm_double = function() {};
return r([ p ], e);
}(a.UIVControlBase));
o.default = f;
cc._RF.pop();
}, {
"./../../../c2f-framework/define/C2FEnum": void 0,
"./../../../c2f-framework/gui/layer/UIVControlBase": void 0
} ],
WebSocketClient: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6ab30nOSX1Bk5mvw5c2/aDy", "WebSocketClient");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.WebSocketClient = void 0;
var n = t("../../c2f-framework/net/ws/WebService"), i = function() {
function t() {
this.reconnetMax = 5;
this.reconnetInterval = 6;
this.socket = null;
this.state = n.SocketState.Error;
this.url = null;
this.reconnectTimes = 0;
this.reconnectTimer = null;
this.connectCb = null;
}
t.prototype.setMessageCb = function(t) {
this.messageCb = t;
};
t.prototype.setWsEventCb = function(t) {
this.wsEventCb = t;
};
t.prototype.onOpen = function() {
cc.log(" WebSocketClient  Send Text WS was opened.");
this.reconnectTimes = 0;
this.stateChanged(n.SocketState.Connected);
this.startHeartbeat();
};
t.prototype.startHeartbeat = function() {
var t = this;
this.clearHeartbeatTimer();
this.heartbeatTimer = setInterval(function() {
var e = "".concat(JSON.stringify({
arguments: [],
target: "Heartbeat",
type: 1
})).concat(String.fromCharCode(30));
t.tcpSend(e);
}, 1e3 * this.reconnetInterval);
};
t.prototype.tcpSend = function(t) {
if (this.state === n.SocketState.Connected) {
console.log(" WebSocketClient tcpSend :", t);
var e = t.concat(String.fromCharCode(30));
this.socket.send(e);
}
};
t.prototype.onMessage = function(t) {
console.log(" WebSocketClient Received from server:", t.data);
var e = t.data.replace(String.fromCharCode(30), ""), o = JSON.parse(e);
if (1 === o.type) switch (o.target) {
case "PushMessage":
console.log("收到服务器内容：" + JSON.stringify(o.arguments[0]));
}
};
t.prototype.onError = function(t) {
cc.log("WebSocketClient fired an error");
var e = t.currentTarget || t.target;
this.socket && this.socket.readyState != WebSocket.CLOSED && this.url && e && e.url == this.url && this.stateChanged(n.SocketState.Error);
};
t.prototype.onClosed = function(t) {
cc.log("WebSocketClient instance closed.");
var e = t.currentTarget || t.target;
if (this.url && e && e.url == this.url) {
e && cc.log("WebSocketClient instance closed:" + e.readyState);
this.stateChanged(n.SocketState.ConnectTimeOut);
}
};
t.prototype.tcpConnet = function(t, e) {
this.url = t;
if (this.socket) {
this.socket.close();
this.socket.onopen = null;
this.socket.onmessage = null;
this.socket.onerror = null;
this.socket.onclose = null;
this.socket = null;
}
this.connectCb = e;
cc.log("websocket connect", t);
this.socket = new WebSocket(t);
this.socket.onopen = this.onOpen.bind(this);
this.socket.onmessage = this.onMessage.bind(this);
this.socket.onerror = this.onError.bind(this);
this.socket.onclose = this.onClosed.bind(this);
};
t.prototype.reconnect = function(t) {
var e = this;
this.url && (this.reconnectTimes > this.reconnetMax ? this.stateChanged(n.SocketState.Error) : this.reconnectTimer = setTimeout(function() {
e.reconnectTimer = null;
if (e.url) {
e.reconnectTimes++;
e.tcpConnet(t, function() {
e.socket.readyState == WebSocket.OPEN && e.url && e.wsEventCb && e.wsEventCb(n.SocketState.ReconnectSuc);
});
}
}, 1e3 * this.reconnetInterval));
};
t.prototype.stateChanged = function(t) {
this.state = t;
if (t === n.SocketState.Connecting) ; else {
var e = "";
switch (t) {
case n.SocketState.ConnectTimeOut:
e = "ConnectTimeOut";
break;

case n.SocketState.Connected:
e = "Connected";
break;

case n.SocketState.Error:
e = "SocketError";
}
this.wsEventCb && this.wsEventCb(t);
if (this.connectCb) {
this.connectCb(e);
this.connectCb = null;
}
}
};
t.prototype.purge = function() {
this.clearReconnectTimer();
if (this.socket) {
this.socket.close();
this.socket = null;
this.url = null;
this.reconnectTimes = 0;
}
this.clearHeartbeatTimer();
};
t.prototype.clearReconnectTimer = function() {
if (this.reconnectTimer) {
clearTimeout(this.reconnectTimer);
this.reconnectTimes = null;
}
};
t.prototype.clearHeartbeatTimer = function() {
if (this.heartbeatTimer) {
clearInterval(this.heartbeatTimer);
this.heartbeatTimer = null;
}
};
return t;
}();
o.WebSocketClient = i;
cc._RF.pop();
}, {
"../../c2f-framework/net/ws/WebService": void 0
} ]
}, {}, [ "BoxGameMain", "BoxGameMainModel", "BoxGameMainView", "BoxGamePro", "BoxGameResult", "BoxGameResultModel", "BoxGameResultView", "BoxGameView", "BoxItem", "BoxItemModel", "BoxItemView", "BoxTime", "BoxTimeModel", "BoxTimeView", "WebSocketClient" ]);