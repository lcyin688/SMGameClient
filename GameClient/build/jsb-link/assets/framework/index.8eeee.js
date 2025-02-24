window.__require = function t(e, i, r) {
function n(s, a) {
if (!i[s]) {
if (!e[s]) {
var c = s.split("/");
c = c[c.length - 1];
if (!e[c]) {
var l = "function" == typeof __require && __require;
if (!a && l) return l(c, !0);
if (o) return o(c, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = c;
}
var u = i[s] = {
exports: {}
};
e[s][0].call(u.exports, function(t) {
return n(e[s][1][t] || t);
}, u, u.exports, t, e, i, r);
}
return i[s].exports;
}
for (var o = "function" == typeof __require && __require, s = 0; s < r.length; s++) n(r[s]);
return n;
}({
Alert: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "f5b2fzKaWVKTrooE6lcSUvM", "Alert");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.Alert = void 0;
cc._decorator.ccclass;
var r = function() {
function t() {
this.queue = [];
}
t.getInstance = function() {
this._instance || (this._instance = new t());
return this._instance;
};
t.prototype.getConfig = function(t) {
var e = {};
t.tag && (e.tag = t.tag);
t.text && (e.text = t.text);
t.title && (e.title = t.title);
t.confirmString && (e.confirmString = t.confirmString);
t.cancelString && (e.cancelString = t.cancelString);
t.richText && (e.richText = t.richText);
t.immediatelyCallback && (e.immediatelyCallback = t.immediatelyCallback);
t.isRepeat && (e.isRepeat = t.isRepeat);
return e;
};
t.prototype.show = function(t) {
if (t.tag && !1 === t.isRepeat && this.isRepeat(t.tag)) {
console.warn("弹出框已经存在 config : " + JSON.stringify(this.getConfig(t)));
return !1;
}
this.queue.push(t);
this._show(t);
return !0;
};
t.prototype.isCurrentShow = function() {
return !1;
};
t.prototype.currentShow = function() {
return null;
};
t.prototype.isRepeat = function() {
return !1;
};
t.prototype.close = function() {};
t.prototype.closeAll = function() {
this.queue = [];
this.finishAlert();
};
t.prototype.finishAlert = function() {
var t = this.queue.shift();
if (0 != this.queue.length) {
this._show(this.queue[0]);
return this.queue[0];
}
return t;
};
t.prototype._show = function() {};
t._instance = null;
return t;
}();
i.Alert = r;
c2f.alert = r.getInstance();
cc._RF.pop();
}, {} ],
AnimValueLabel: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "93188RmKh1GHJhJYMxNsu+u", "AnimValueLabel");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("./AnimValue"), a = cc._decorator, c = a.ccclass, l = (a.property, a.menu), u = a.requireComponent, h = a.executeInEditMode, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._label = null;
return e;
}
Object.defineProperty(e.prototype, "label", {
get: function() {
this._label || (this._label = this.getComponent(cc.Label));
return this._label;
},
enumerable: !1,
configurable: !0
});
e.prototype.onAnimUpdate = function() {
this.label.string = "" + Math.round(this.curValue);
};
return o([ c, h, u(cc.Label), l("c2f/UI/AnimValueLabel") ], e);
}(s.default);
i.default = f;
cc._RF.pop();
}, {
"./AnimValue": "AnimValue"
} ],
AnimValueProgressHP: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "c3afeSdbzBJDJZejppXH98u", "AnimValueProgressHP");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("./AnimValueProgress"), a = cc._decorator, c = a.ccclass, l = a.property, u = a.menu, h = a.requireComponent, f = a.executeInEditMode, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.barShadow = null;
return e;
}
e.prototype.setBarShadow = function(t) {
switch (this.progressBar.mode) {
case cc.ProgressBar.Mode.HORIZONTAL:
this.barShadow.node.width = this.progressBar.totalLength * t;
break;

case cc.ProgressBar.Mode.VERTICAL:
this.barShadow.node.height = this.progressBar.totalLength * t;
break;

case cc.ProgressBar.Mode.FILLED:
this.barShadow.fillRange = t;
}
};
e.prototype.onAnimStart = function() {
this.isAdd || (this.progressBar.progress = this.endValue);
};
e.prototype.onAnimUpdate = function() {
if (this.isAdd) {
this.setBarShadow(this.curValue);
this.progressBar.progress = this.curValue;
} else this.setBarShadow(this.curValue);
};
o([ l({
type: cc.Sprite,
tooltip: !1
}) ], e.prototype, "barShadow", void 0);
return o([ c, f, h(cc.ProgressBar), u("c2f/UI/AnimValueProgressHP") ], e);
}(s.default);
i.default = p;
cc._RF.pop();
}, {
"./AnimValueProgress": "AnimValueProgress"
} ],
AnimValueProgress: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "7f95cXxJPhAJaQaqRBZkHaC", "AnimValueProgress");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("./AnimValue"), a = cc._decorator, c = a.ccclass, l = a.property, u = a.menu, h = a.requireComponent, f = a.executeInEditMode, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.onlyLessThan1 = !1;
e._progressBar = null;
return e;
}
Object.defineProperty(e.prototype, "progressBar", {
get: function() {
this._progressBar || (this._progressBar = this.getComponent(cc.ProgressBar));
return this._progressBar;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "progressChgCb", {
get: function() {
return this._progressChgCb;
},
set: function(t) {
this._progressChgCb = t;
},
enumerable: !1,
configurable: !0
});
e.prototype.onDestroy = function() {
this.progressChgCb = null;
t.prototype.onDestroy && t.prototype.onDestroy.call(this);
};
e.prototype.onAnimUpdate = function() {
this.onlyLessThan1 ? this.progressBar.progress = this.curValue % 1 : this.progressBar.progress = Math.min(this.curValue, 1);
this.progressChgCb && this.progressChgCb(this.curValue);
};
o([ l({
tooltip: "外观仅显示小于1部分"
}) ], e.prototype, "onlyLessThan1", void 0);
return o([ c, f, h(cc.ProgressBar), u("c2f/UI/AnimValueProgress") ], e);
}(s.default);
i.default = p;
cc._RF.pop();
}, {
"./AnimValue": "AnimValue"
} ],
AnimValue: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "cfe49J1R7JHxIqVge927Yqj", "AnimValue");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s, a, c = t("../../../core/timer/C2FTween"), l = cc._decorator, u = l.ccclass, h = l.property, f = l.menu, p = l.executeInEditMode;
(function(t) {
t[t.SPEED = 0] = "SPEED";
t[t.DURATION = 1] = "DURATION";
})(s || (s = {}));
(function(t) {
t[t.NONE = 0] = "NONE";
t[t.IN = 1] = "IN";
t[t.OUT = 2] = "OUT";
t[t.IN_OUT = 3] = "IN_OUT";
})(a || (a = {}));
var d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._endValue = 0;
e._curValue = 0;
e.animType = s.SPEED;
e.speed = 1;
e.duration = 1;
e.easingType = a.NONE;
e.timeScale = !1;
e._tween = null;
e._isAdd = !1;
return e;
}
Object.defineProperty(e.prototype, "initValue", {
get: function() {
return this._endValue;
},
set: function(t) {
this._curValue = t;
this._endValue = t;
this.setValueImmediately(this._endValue);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isAdd", {
get: function() {
return this._isAdd;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "endValue", {
get: function() {
return this._endValue;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "curValue", {
get: function() {
return this._curValue;
},
enumerable: !1,
configurable: !0
});
e.prototype.onAnimStart = function() {};
e.prototype.onAnimUpdate = function() {};
e.prototype.onAnimComplete = function() {
if (this._animResolve) {
this._animResolve();
this._animResolve = null;
}
if (this._tween) {
this._tween.stop();
this._tween = null;
}
};
e.prototype.setValueImmediately = function(t) {
this._isAdd = this._endValue - this._curValue > 0;
this._endValue = t;
this._curValue = t;
this.onAnimStart();
this.onAnimUpdate();
this.onAnimComplete();
};
e.prototype.setValue = function(t, e) {
var i = this;
void 0 === e && (e = !0);
return new Promise(function(r) {
var n;
if (e) {
i._animResolve = r;
i._endValue = t;
i._isAdd = i._endValue - i._curValue > 0;
null === (n = i._tween) || void 0 === n || n.stop();
i._tween = i.timeScale ? new c.C2FTween(i, c.SCALE_TWEEN) : new c.C2FTween(i);
var o = i.animType === s.DURATION ? i.duration : Math.abs(i._endValue - i._curValue) / i.speed;
switch (i.easingType) {
case a.IN:
i._tween.easing(c.Easing.Quadratic.In);
break;

case a.OUT:
i._tween.easing(c.Easing.Quadratic.Out);
break;

case a.IN_OUT:
i._tween.easing(c.Easing.Quadratic.InOut);
}
i._tween.to({
_curValue: i._endValue
}, 1e3 * o).onStart(function() {
i.onAnimStart();
}).onUpdate(function() {
i.onAnimUpdate();
}).onComplete(function() {
i.onAnimComplete();
}).start();
} else {
i.setValueImmediately(t);
r();
}
});
};
e.prototype.stop = function() {
this._animResolve && (this._animResolve = null);
if (this._tween) {
this._tween.stop();
this._tween = null;
}
};
o([ h ], e.prototype, "_endValue", void 0);
o([ h ], e.prototype, "_curValue", void 0);
o([ h({
tooltip: !1
}) ], e.prototype, "initValue", null);
o([ h({
type: cc.Enum(s),
tooltip: !1
}) ], e.prototype, "animType", void 0);
o([ h({
tooltip: !1,
visible: function() {
return this.animType === s.SPEED;
}
}) ], e.prototype, "speed", void 0);
o([ h({
tooltip: !1,
visible: function() {
return this.animType === s.DURATION;
}
}) ], e.prototype, "duration", void 0);
o([ h({
type: cc.Enum(a),
tooltip: !1
}) ], e.prototype, "easingType", void 0);
o([ h({
tooltip: !1
}) ], e.prototype, "timeScale", void 0);
return o([ u, p, f("c2f/UI/AnimValue") ], e);
}(cc.Component);
i.default = d;
cc._RF.pop();
}, {
"../../../core/timer/C2FTween": "C2FTween"
} ],
App: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "d1bad7kuUNKjL6mfAsU3gsi", "App");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.App = void 0;
var s = t("./core/event/EventDefine"), a = t("./core/timer/GameTimer"), c = t("./gui/GUI"), l = cc._decorator, u = l.ccclass, h = (l.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.root = null;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.initApp = function(t) {
this.root = t;
c2f.gui.init(t);
cc.game.on(cc.game.EVENT_SHOW, function() {
cc.log("Game.EVENT_SHOW");
a.GameTimer.gameResume();
c2f.timer.load();
c2f.audio.resumeAll();
cc.director.resume();
cc.game.resume();
c2f.event.emit(s.EventMessage.GAME_ENTER);
});
cc.game.on(cc.game.EVENT_HIDE, function() {
cc.log("Game.EVENT_HIDE");
c2f.timer.save();
c2f.audio.pauseAll();
cc.director.pause();
cc.game.pause();
c2f.event.emit(s.EventMessage.GAME_EXIT);
});
var e = this.root.addComponent(c.GUI);
cc.sys.isMobile || cc.view.setResizeCallback(function() {
e.autoSize();
c2f.event.emit(s.EventMessage.GAME_RESIZE);
});
};
return o([ u ], e);
}(cc.Component));
i.App = h;
cc._RF.pop();
}, {
"./core/event/EventDefine": "EventDefine",
"./core/timer/GameTimer": "GameTimer",
"./gui/GUI": "GUI"
} ],
ArrayUtil: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "8f37fZiP8JIXZ1UaDOdnLP/", "ArrayUtil");
var r = this && this.__spreadArrays || function() {
for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
var r = Array(t), n = 0;
for (e = 0; e < i; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, 
n++) r[n] = o[s];
return r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = function() {
function t() {}
t.noRepeated = function(t) {
if (t && t.length > 0) {
for (var e = [ t[0] ], i = 1; i < t.length; i++) {
for (var r = !1, n = 0; n < e.length; n++) if (t[i] == e[n]) {
r = !0;
break;
}
r || e.push(t[i]);
}
return e;
}
return t;
};
t.copy2DArray = function(t) {
for (var e = [], i = 0; i < t.length; i++) e.push(t[i].concat());
return e;
};
t.fisherYatesShuffle = function(t) {
for (var e = t.length; e; ) {
var i = Math.floor(Math.random() * e--), r = t[e];
t[e] = t[i];
t[i] = r;
}
return t;
};
t.confound = function(t) {
return t.slice().sort(function() {
return Math.random() - .5;
});
};
t.flattening = function(t) {
for (;t.some(function(t) {
return Array.isArray(t);
}); ) t = [].concat.apply([], t);
return t;
};
t.removeItem = function(t, e) {
for (var i = t.concat(), r = 0; r < i.length; ) e == i[r] ? i.splice(r, 1) : r++;
return i;
};
t.combineArrays = function(t, e) {
return r(t, e);
};
t.getRandomValueInArray = function(t) {
return t[Math.floor(Math.random() * t.length)];
};
t.removeByArray = function(t, e) {
for (var i = t.concat(), r = 0; r < i.length; ) {
var n = i[r];
e.indexOf(n) >= 0 ? i.splice(r, 1) : r++;
}
return i;
};
t.fastRemoveAt = function(t, e) {
var i = t.length;
if (!(e < 0 || e >= i)) {
t[e] = t[i - 1];
t.length = i - 1;
}
};
t.fastRemove = function(t, e) {
var i = t.length, r = t.indexOf(e);
if (r >= 0) {
t[r] = t[i - 1];
t.length = i - 1;
}
};
t.numArrIsEqual = function(t, e) {
if (t.length !== e.length) return !1;
t.sort(function(t, e) {
return t - e;
});
e.sort(function(t, e) {
return t - e;
});
return t.every(function(t, i) {
return t === e[i];
});
};
return t;
}();
c2f.utils.arr = n;
cc._RF.pop();
}, {} ],
AudioManager: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "82705hL32lI9JrRJgOgjr2O", "AudioManager");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.SfxType = void 0;
var r, n, o = t("../timer/C2FTween");
(function(t) {
t[t.NORMAL = 0] = "NORMAL";
t[t.UI = 1] = "UI";
})(r = i.SfxType || (i.SfxType = {}));
(function(t) {
t.Audio = "Audio.Config";
})(n || (n = {}));
var s = function() {
function t() {}
t.saveCfg = function() {
var t = {
bv: this.bgmVolume,
sv: this.sfxVolume,
bof: this.bgmOff,
sof: this.sfxOff
};
c2f.storage.setPlainItem(n.Audio, JSON.stringify(t));
};
t.loadCfg = function() {
var t = null;
try {
t = JSON.parse(c2f.storage.getPlainItem(n.Audio, ""));
} catch (t) {}
if (t) {
this.bgmVolume = t.bv;
this.sfxVolume = t.sv;
this.bgmOff = t.bof;
this.sfxOff = t.sof;
}
};
t.bgmVolume = 1;
t.sfxVolume = 1;
t.bgmOff = !1;
t.sfxOff = !1;
return t;
}(), a = function() {
function t() {
this.bgmList = [];
this.bgmDelayTimer = null;
this._bgmPause = !1;
this._sfxPause = !1;
this._bgmMap = new Map();
this._normalSfxMap = new Map();
this._uiSfxMap = new Map();
this.bgmList = [];
s.loadCfg();
}
Object.defineProperty(t.prototype, "bgmVolume", {
get: function() {
return s.bgmVolume;
},
set: function(t) {
if (s.bgmVolume !== t) {
s.bgmVolume = cc.misc.clampf(t, 0, 1);
this._bgmMap.forEach(function(t) {
cc.audioEngine.setVolume(t.id, s.bgmVolume * t.volume);
});
this.bgmOff = t < .01;
s.saveCfg();
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "sfxVolume", {
get: function() {
return s.sfxVolume;
},
set: function(t) {
if (s.sfxVolume !== t) {
s.sfxVolume = cc.misc.clampf(t, 0, 1);
this._normalSfxMap.forEach(function(t) {
t.audioList.forEach(function(t) {
cc.audioEngine.setVolume(t.id, s.sfxVolume * t.volume);
});
});
this._uiSfxMap.forEach(function(t) {
t.audioList.forEach(function(t) {
cc.audioEngine.setVolume(t.id, s.sfxVolume * t.volume);
});
});
this.sfxOff = t < .01;
s.saveCfg();
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "bgmOff", {
get: function() {
return s.bgmOff;
},
set: function(t) {
var e = this;
if (s.bgmOff !== t) {
s.bgmOff = t;
if (s.bgmOff) {
this._bgmMap.forEach(function(t) {
e.stop(t);
});
this._bgmMap.clear();
} else this.playRecentBgm();
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "sfxOff", {
get: function() {
return s.sfxOff;
},
set: function(t) {
var e = this;
if (s.sfxOff !== t) {
s.sfxOff = t;
if (s.sfxOff) {
this._normalSfxMap.forEach(function(t) {
t.audioList.forEach(function(t) {
e.stop(t);
});
t.audioList.length = 0;
});
this._uiSfxMap.forEach(function(t) {
t.audioList.forEach(function(t) {
e.stop(t);
});
t.audioList.length = 0;
});
}
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "bgmPause", {
get: function() {
return this._bgmPause;
},
set: function(t) {
var e = this;
if (!this.bgmOff && this._bgmPause !== t) {
this._bgmPause = t;
this._bgmMap.forEach(function(t) {
var i, r;
if (e._bgmPause) {
null === (i = t.tween) || void 0 === i || i.pause();
cc.audioEngine.pause(t.id);
} else {
null === (r = t.tween) || void 0 === r || r.resume();
cc.audioEngine.resume(t.id);
}
});
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "sfxPause", {
get: function() {
return this._sfxPause;
},
set: function(t) {
if (!this.sfxOff && this._sfxPause !== t) {
this._sfxPause = t;
this._sfxPause ? this._normalSfxMap.forEach(function(t) {
t.audioList.forEach(function(t) {
var e;
null === (e = t.tween) || void 0 === e || e.pause();
cc.audioEngine.pause(t.id);
});
}) : this._normalSfxMap.forEach(function(t) {
t.audioList.forEach(function(t) {
var e;
null === (e = t.tween) || void 0 === e || e.resume();
cc.audioEngine.resume(t.id);
});
});
}
},
enumerable: !1,
configurable: !0
});
t.prototype.volumeFade = function(t, e, i, r, n) {
var s, a = this;
null === (s = t.tween) || void 0 === s || s.stop();
t.volume = i;
cc.audioEngine.setVolume(t.id, t.volume * this.bgmVolume);
t.tween = new o.C2FTween(t).to({
volume: r
}, 1e3 * e).onUpdate(function() {
cc.audioEngine.setVolume(t.id, t.volume * a.bgmVolume);
}).onComplete(function() {
t.tween = null;
n && n();
}).start();
};
t.prototype.stop = function(t) {
if (t.tween) {
t.tween.stop();
t.tween = null;
}
cc.audioEngine.stop(t.id);
};
t.prototype.play = function(t, e, i) {
void 0 === i && (i = null);
var r = t instanceof cc.AudioClip ? {
clip: t
} : t;
r.hasOwnProperty("loop") || (r.loop = !1);
r.hasOwnProperty("fadeDuration") || (r.fadeDuration = 0);
r.hasOwnProperty("finishCall") || (r.finishCall = null);
if (i) {
i.id = cc.audioEngine.play(r.clip, r.loop, e);
i.volume = 1;
if (i.tween) {
i.tween.stop();
i.tween = null;
}
} else i = {
id: cc.audioEngine.play(r.clip, r.loop, e),
volume: 1,
tween: null
};
r.finishCall && cc.audioEngine.setFinishCallback(i.id, r.finishCall);
r.fadeDuration > 0 && this.volumeFade(i, r.fadeDuration, 0, 1);
return i;
};
t.prototype.playBgm = function(t) {
var e = t instanceof cc.AudioClip ? t : t.clip;
if (!this.bgmOff && e) {
this.stopBgm();
var i = this._bgmMap.get(e);
if (void 0 === i) {
i = this.play(t, this.bgmVolume);
this._bgmMap.set(e, i);
} else {
this.stop(i);
this.play(t, this.bgmVolume, i);
}
}
};
t.prototype.addMusicUrlToList = function(t) {
var e = this.bgmList.indexOf(t);
e < 0 ? this.bgmList.push(t) : this.bgmList = this.bgmList.slice(0, e + 1);
};
t.prototype.playBgmURL = function(t, e) {
var i = this;
this.bgmDelayTimer && clearTimeout(this.bgmDelayTimer);
this.bgmDelayTimer = setTimeout(function() {
i.bgmDelayTimer = null;
i.addMusicUrlToList(t);
i.bgmOff || c2f.res.load(t, cc.AudioClip, function(t, r) {
t && cc.error(t);
i.playBgm({
clip: r,
loop: !0,
finishCall: e
});
});
}, 300);
};
t.prototype.endCurMusic = function() {
var t = this.bgmList.length;
if (!(t <= 0)) {
this.bgmList.splice(t - 1, 1);
this.playRecentBgm();
}
};
t.prototype.playRecentBgm = function() {
var t = this.bgmList.length;
if (t > 0) {
var e = this.bgmList[t - 1];
this.bgmList.splice(t - 1, 1);
this.playBgmURL(e);
}
};
t.prototype.playSfx = function(t, e) {
void 0 === e && (e = r.NORMAL);
var i = t instanceof cc.AudioClip ? t : t.clip;
if (!this.sfxOff && i) {
var n = e === r.NORMAL ? this._normalSfxMap.get(i) : this._uiSfxMap.get(i), o = null;
if (void 0 === n) {
n = this.setSfxData(i, e);
o = this.play(t, this.sfxVolume);
n.audioList.push(o);
} else {
for (;n.audioList.length > 0 && cc.audioEngine.getState(n.audioList[0].id) !== cc.audioEngine.AudioState.PLAYING; ) this.stop(n.audioList.shift());
for (;n.overStop && n.audioList.length >= n.maxNum; ) this.stop(n.audioList.shift());
if (n.audioList.length < n.maxNum) {
o = this.play(t, this.sfxVolume);
n.audioList.push(o);
}
}
}
};
t.prototype.playSfxURL = function(t, e) {
var i = this;
this.sfxOff || c2f.res.load(t, cc.AudioClip, function(t, r) {
t && cc.error(t);
i.playSfx({
clip: r,
loop: !1,
finishCall: e
});
});
};
t.prototype.setSfxData = function(t, e, i, n) {
void 0 === e && (e = r.NORMAL);
void 0 === i && (i = 8);
void 0 === n && (n = !1);
if (t) {
i = Math.max(i, 1);
var o = e === r.NORMAL ? this._normalSfxMap : this._uiSfxMap, s = o.get(t);
if (void 0 === s) {
s = {
audioList: [],
maxNum: i,
overStop: n
};
o.set(t, s);
} else {
s.maxNum = i;
s.overStop = n;
}
return s;
}
};
t.prototype.stopBgm = function(t, e) {
var i = this;
void 0 === t && (t = null);
void 0 === e && (e = 0);
if (!this.bgmOff) if (t) {
var r = this._bgmMap.get(t);
if (void 0 === r) return;
if (e <= 0) {
this.stop(r);
this._bgmMap.delete(t);
} else this.volumeFade(r, e, 1, 0, function() {
i.stop(r);
i._bgmMap.delete(t);
});
} else if (e <= 0) {
this._bgmMap.forEach(function(t) {
i.stop(t);
});
this._bgmMap.clear();
} else this._bgmMap.forEach(function(t, r) {
i.volumeFade(t, e, 1, 0, function() {
i.stop(t);
i._bgmMap.delete(r);
});
});
};
t.prototype.stopSfx = function(t, e) {
var i = this;
void 0 === t && (t = null);
void 0 === e && (e = r.NORMAL);
if (!this.sfxOff) if (t) {
var n = e === r.NORMAL ? this._normalSfxMap.get(t) : this._uiSfxMap.get(t);
if (void 0 === n || n.audioList.length <= 0) return;
n.audioList.forEach(function(t) {
i.stop(t);
});
n.audioList.length = 0;
} else {
this._normalSfxMap.forEach(function(t) {
t.audioList.forEach(function(t) {
i.stop(t);
});
t.audioList.length = 0;
});
this._uiSfxMap.forEach(function(t) {
t.audioList.forEach(function(t) {
i.stop(t);
});
t.audioList.length = 0;
});
}
};
t.prototype.stopAll = function() {
this.stopBgm();
this.stopSfx();
};
t.prototype.pauseAll = function() {
this.bgmPause = !0;
this.sfxPause = !0;
};
t.prototype.resumeAll = function() {
this.bgmPause = !1;
this.sfxPause = !1;
};
t.prototype.uncacheAll = function() {
this.stopAll();
this._bgmMap.clear();
this._normalSfxMap.clear();
this._uiSfxMap.clear();
cc.audioEngine.uncacheAll();
};
t.getInstance = function() {
this._instance || (this._instance = new t());
return this._instance;
};
t._instance = null;
return t;
}();
c2f.audio = a.getInstance();
cc._RF.pop();
}, {
"../timer/C2FTween": "C2FTween"
} ],
AuditItem: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "daf3a0054VJEZhk4y3k7Evr", "AuditItem");
var r = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.AuditItem = void 0;
var n = cc._decorator, o = n.ccclass, s = n.property, a = n.executeInEditMode, c = function() {
function t() {
this.target = null;
this._controlVisible = !1;
this._tsVisible = !1;
this._controlOpacity = !1;
this._tsOpacity = 0;
this._btnDisableOp0 = !1;
}
Object.defineProperty(t.prototype, "controlVisible", {
get: function() {
return this._controlVisible;
},
set: function(t) {
this._controlVisible = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "tsVisible", {
get: function() {
return this._tsVisible;
},
set: function(t) {
this._tsVisible = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "controlOpacity", {
get: function() {
return this._controlOpacity;
},
set: function(t) {
this._controlOpacity = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "tsOpacity", {
get: function() {
return this._tsOpacity;
},
set: function(t) {
this._tsOpacity = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "btnDisableOp0", {
get: function() {
return this._btnDisableOp0;
},
set: function(t) {
this._btnDisableOp0 = t;
},
enumerable: !1,
configurable: !0
});
r([ s({
type: cc.Node,
tooltip: !1
}) ], t.prototype, "target", void 0);
r([ s() ], t.prototype, "_controlVisible", void 0);
r([ s({
tooltip: "控制目标节点可见性"
}) ], t.prototype, "controlVisible", null);
r([ s() ], t.prototype, "_tsVisible", void 0);
r([ s({
tooltip: "目标节点是否可见性",
visible: function() {
return this.controlVisible;
}
}) ], t.prototype, "tsVisible", null);
r([ s() ], t.prototype, "_controlOpacity", void 0);
r([ s({
tooltip: "控制目标节点透明度"
}) ], t.prototype, "controlOpacity", null);
r([ s() ], t.prototype, "_tsOpacity", void 0);
r([ s({
tooltip: "目标节点透明度",
visible: function() {
return this.controlOpacity;
}
}) ], t.prototype, "tsOpacity", null);
r([ s() ], t.prototype, "_btnDisableOp0", void 0);
r([ s({
tooltip: "目标节点透明度为0时，其button组件无效",
visible: function() {
return this.controlOpacity;
}
}) ], t.prototype, "btnDisableOp0", null);
return r([ o("AuditItem"), a ], t);
}();
i.AuditItem = c;
cc._RF.pop();
}, {} ],
AuditSet: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "26620LS4CZNnI4J2rOY03D7", "AuditSet");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("../../../define/C2FEnum"), a = t("./AuditItem"), c = t("./AuditTargetListen"), l = cc._decorator, u = l.ccclass, h = l.property, f = l.menu, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.targets = [];
return e;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {
this.updateView();
};
e.prototype.updateView = function() {
if (szg.plat.isAudit) for (var t = 0, e = this.targets; t < e.length; t++) {
var i = e[t];
i.target && i.target.isValid && this.updateTarget(i);
}
};
e.prototype.updateTarget = function(t) {
var e = t.target.getComponent(c.AuditTargetListen);
if (!e) {
e = t.target.addComponent(c.AuditTargetListen);
t.target.on(s.C2FEnum.ExtEvent.NodeActiveChanged, this.onTargetActiveChanged, this);
}
t.controlVisible && (t.target.active = t.tsVisible);
if (t.controlOpacity) {
t.target.opacity = t.tsOpacity;
var i = t.target.getComponent(cc.Button);
i && (i.interactable = t.tsOpacity > 0);
}
};
e.prototype.onTargetActiveChanged = function(t) {
var e = this.targets.find(function(e) {
return e.target == t;
});
e && this.updateTarget(e);
};
o([ h(a.AuditItem) ], e.prototype, "targets", void 0);
return o([ u, f("c2f/audit/AuditSet") ], e);
}(cc.Component);
i.default = p;
cc._RF.pop();
}, {
"../../../define/C2FEnum": "C2FEnum",
"./AuditItem": "AuditItem",
"./AuditTargetListen": "AuditTargetListen"
} ],
AuditTargetListen: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "4d07eYsNrxOKZRekAhYcC8W", "AuditTargetListen");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.AuditTargetListen = void 0;
var s = t("../../../define/C2FEnum"), a = cc._decorator, c = a.ccclass, l = (a.property, 
function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onEnable = function() {
this.node.emit(s.C2FEnum.ExtEvent.NodeActiveChanged, this.node);
};
e.prototype.onDisable = function() {
this.node.emit(s.C2FEnum.ExtEvent.NodeActiveChanged, this.node);
};
return o([ c() ], e);
}(cc.Component));
i.AuditTargetListen = l;
cc._RF.pop();
}, {
"../../../define/C2FEnum": "C2FEnum"
} ],
BaseHack: [ function(t, e) {
"use strict";
cc._RF.push(e, "85f7bSkxqNEhI0yUX7MFCnz", "BaseHack");
function i(t, e) {
var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
if (i) return (i = i.call(t)).next.bind(i);
if (Array.isArray(t) || (i = r(t)) || e && t && "number" == typeof t.length) {
i && (t = i);
var n = 0;
return function() {
return n >= t.length ? {
done: !0
} : {
done: !1,
value: t[n++]
};
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function r(t, e) {
if (t) {
if ("string" == typeof t) return n(t, e);
var i = Object.prototype.toString.call(t).slice(8, -1);
"Object" === i && t.constructor && (i = t.constructor.name);
return "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? n(t, e) : void 0;
}
}
function n(t, e) {
(null == e || e > t.length) && (e = t.length);
for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
return r;
}
Object.isEmpty = function(t) {
for (var e in t) return !1;
return !0;
};
Object.count = function(t) {
if (!t) return 0;
var e = 0;
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e++;
return e;
};
Object.merge = function(t, e) {
if (!t || !e) return t || e;
var i = {};
for (var r in t) i[r] = t[r];
for (var n in e) i[n] = e[n];
return i;
};
Object.copy = function(t) {
var e = Object.create(t);
Object.assign(e, t);
return e;
};
Object.copyDepth = function(t) {
if (null == t || "object" != typeof t) return t;
var e = null;
if (t instanceof Date) {
(e = new Date()).setTime(t.getTime());
return e;
}
if (t instanceof Array) {
e = [];
for (var i = 0, r = t.length; i < r; i++) e[i] = Object.copyDepth(t[i]);
return e;
}
if (t instanceof Object) {
e = {};
for (var n in t) t.hasOwnProperty(n) && (e[n] = Object.copyDepth(t[n]));
return e;
}
console.warn("Object.copyDepth: 不支持的类型：" + e);
};
Object.firstBig = function(t) {
for (var e = {}, r = Object.keys(t), n = 0; n < r.length; ++n) {
var o = r[n], s = o.substring(0, 1), a = o.substring(1), c = s.toUpperCase() + a;
if (t[o] instanceof Array) {
for (var l, u = [], h = i(t[o]); !(l = h()).done; ) {
var f = l.value, p = Object.firstBig(f);
u.push(p);
}
e[c] = u;
} else e[c] = t[o];
}
return e;
};
Array.prototype.sum = function() {
for (var t = 0, e = 0; e < this.length; e++) isNaN(this[e]) || (t += +this[e]);
return t;
};
Array.prototype.remove = function(t) {
var e = this.indexOf(t);
e >= 0 && this.splice(e, 1);
};
String.prototype.format = function() {
var t = arguments;
if (0 === t.length) return this;
var e = t[0], i = t;
return "object" == typeof e ? this.replace(/\{(\w+)\}/g, function(t, i) {
return e[i];
}) : this.replace(/\{(\w+)\}/g, function(t, e) {
return i[e];
});
};
String.prototype.capWord = function() {
return this.substring(0, 1).toUpperCase() + this.substring(1);
};
String.prototype.trimAll = function() {
return this.replace(/\s+/g, "");
};
String.prototype.clearBr = function() {
return this.replace(/<\/?.+?>/g, "").replace(/[\r\n]/g, "");
};
Date.prototype.format = function(t) {
var e = t;
return (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/yyyy|YYYY/, this.getFullYear())).replace(/yy|YY/, this.getYear() % 100 > 9 ? (this.getYear() % 100).toString() : "0" + this.getYear() % 100)).replace(/MM/, this.getMonth() + 1 > 9 ? (this.getMonth() + 1).toString() : "0" + (this.getMonth() + 1).toString())).replace(/M/g, this.getMonth() + 1)).replace(/w|W/g, [ "日", "一", "二", "三", "四", "五", "六" ][this.getDay()])).replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : "0" + this.getDate())).replace(/d|D/g, this.getDate())).replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : "0" + this.getHours())).replace(/h|H/g, this.getHours())).replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : "0" + this.getMinutes())).replace(/m/g, this.getMinutes())).replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds().toString() : "0" + this.getSeconds())).replace(/s|S/g, this.getSeconds());
};
Date.prototype.dateToString = function() {
var t = this.getFullYear(), e = this.getMonth() + 1, i = this.getDate(), r = this.getHours(), n = this.getMinutes(), o = this.getSeconds();
return t + "-" + (e = e < 10 ? "0" + e : e) + "-" + (i = i < 10 ? "0" + i : i) + " " + (r = r < 10 ? "0" + r : r) + ":" + (n = n < 10 ? "0" + n : n) + ":" + (o < 10 ? "0" + o : o);
};
cc._RF.pop();
}, {} ],
BindHandler: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "782a2U2boRKxKxpaZwpyi/A", "BindHandler");
var r = this && this.__spreadArrays || function() {
for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
var r = Array(t), n = 0;
for (e = 0; e < i; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, 
n++) r[n] = o[s];
return r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.genHandler = i.BindHandler = void 0;
var n = [], o = function() {
function t() {}
t.prototype.init = function(t, e) {
void 0 === e && (e = null);
for (var i = [], r = 2; r < arguments.length; r++) i[r - 2] = arguments[r];
this.cb = t;
this.host = e;
this.args = i;
};
t.prototype.exec = function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
this.cb.apply(this.host, this.args.concat(t));
};
return t;
}();
i.BindHandler = o;
i.genHandler = function(t, e) {
void 0 === e && (e = null);
for (var i = [], s = 2; s < arguments.length; s++) i[s - 2] = arguments[s];
var a = n.length < 0 ? n.pop() : new o();
a.init.apply(a, r([ t, e ], i));
return a;
};
cc._RF.pop();
}, {} ],
BlurScreen: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ee62dEHZb9KpaLZxws3OjQy", "BlurScreen");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("../../define/C2FConst"), a = cc._decorator, c = a.ccclass, l = a.menu, u = (a.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.asBackgroud = null;
e.screenCopy = null;
e.mapTexture2View = null;
return e;
}
e.prototype.createBGSprite = function(t, e) {
var i = new cc.Node(t);
i.scaleY = -1;
i.parent = this.node;
i.width = cc.visibleRect.width;
i.height = cc.visibleRect.height;
var r = i.addComponent(cc.Sprite);
r.sizeMode = cc.Sprite.SizeMode.CUSTOM;
i.active = !1;
r.setMaterial(0, e);
return r;
};
e.prototype.initUI = function() {
var t = this;
this.screenCopy || c2f.res.load(s.C2FConst.fwBundleName, "commonRes/shader/materials/blurImg", cc.Material, function(e, i) {
t.screenCopy = t.createBGSprite("screenCopy", i);
t.asBackgroud = t.createBGSprite("asBg", i);
});
this.mapTexture2View || (this.mapTexture2View = new Map());
};
e.prototype.addBlurBg = function(t, e, i) {
if (this.mapTexture2View && this.mapTexture2View.has(t)) {
var r = this.mapTexture2View.get(t);
this.screenCopy.spriteFrame = new cc.SpriteFrame(r);
this.screenCopy.node.active = !0;
this.playBlurInAnima(e);
} else this.copyScreen(t, e, i);
};
e.prototype.removedBlurBg = function(t) {
this.mapTexture2View && this.mapTexture2View.delete(t);
};
e.prototype.cleanBlurBg = function() {
this.mapTexture2View && this.mapTexture2View.clear();
};
e.prototype.copyScreen = function(t, e, i) {
var r = new cc.RenderTexture();
r.initWithSize(cc.visibleRect.width, cc.visibleRect.height, cc.RenderTexture.DepthStencilFormat.RB_FMT_S8);
this.mapTexture2View.set(t, r);
this.mapTexture2View.size;
if (i.length > 0) {
var n = this.mapTexture2View.get(i);
if (n) {
this.asBackgroud.spriteFrame = new cc.SpriteFrame(n);
this.asBackgroud.node.active = !0;
}
}
this.screenCopy.node.active = !1;
c2f.gui.hideAnimaPlayingView();
var o = cc.Canvas.instance.node.getChildByName("Camera").getComponent(cc.Camera);
if (o) {
o.targetTexture = r;
o.render(null);
o.targetTexture = null;
}
this.asBackgroud.node.active = !1;
c2f.gui.showAnimaPlayingView();
this.screenCopy.node.active = !0;
var s = new cc.SpriteFrame(r);
this.screenCopy.spriteFrame = s;
this.playBlurInAnima(e);
};
e.prototype.playBlurInAnima = function(t) {
this.screenCopy.node.opacity = 180;
cc.tween(this.screenCopy.node).to(.3, {
opacity: 255
}).call(function() {
t && t();
}).start();
};
return o([ c, l("c2f/common/BlurScreen") ], e);
}(cc.Component));
i.default = u;
cc._RF.pop();
}, {
"../../define/C2FConst": "C2FConst"
} ],
BreatheSelf: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "4680dHTZ1ZEoLxkmjS3CSfo", "BreatheSelf");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = s.property, l = s.menu, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lessenDur = 1;
e.lessenValue = .8;
e.magnifyDur = 2;
e.magnifyValue = 1.2;
e.playOnLoad = !0;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {
var t = this;
this.playOnLoad && this.scheduleOnce(function() {
t.playAnima();
});
};
e.prototype.stopAnima = function() {
cc.Tween.stopAllByTarget(this.node);
this.node.setScale(1, 1, 1);
};
e.prototype.playAnima = function() {
cc.Tween.stopAllByTarget(this.node);
this.node.setScale(this.magnifyValue, this.magnifyValue, 1);
var t = cc.tween(this.node).to(this.lessenDur, {
scale: this.lessenValue
}), e = cc.tween(this.node).to(this.magnifyDur, {
scale: this.magnifyValue
});
cc.tween(this.node).sequence(t, e).repeatForever().start();
};
o([ c({
serializable: !0,
tooltip: "缩小所用时间"
}) ], e.prototype, "lessenDur", void 0);
o([ c({
serializable: !0,
tooltip: "缩小尺寸"
}) ], e.prototype, "lessenValue", void 0);
o([ c({
serializable: !0,
tooltip: "放大所用时间"
}) ], e.prototype, "magnifyDur", void 0);
o([ c({
serializable: !0,
tooltip: "放大尺寸"
}) ], e.prototype, "magnifyValue", void 0);
o([ c({
serializable: !0,
tooltip: "自动播放"
}) ], e.prototype, "playOnLoad", void 0);
return o([ a, l("c2f/animation/BreatheSelf") ], e);
}(cc.Component);
i.default = u;
cc._RF.pop();
}, {} ],
ButtonChildGray: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "19687AwHRhAjoLcsGZTr1YH", "ButtonChildGray");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("../../../hack/ButtonHack"), a = cc._decorator, c = a.ccclass, l = a.property, u = a.menu, h = a.requireComponent, f = a.executeInEditMode, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.relatedNodes = [];
e.normalMaterial = null;
e.grayMaterial = null;
return e;
}
e.prototype.onLoad = function() {
this.node.on(s.ButtonHackEvent.STATE_CHANGE, this.onStateChange, this);
};
e.prototype.onStateChange = function(t) {
var e = this;
if (t === s.ButtonState.DISABLED) {
this.grayMaterial || (this.grayMaterial = cc.Material.getBuiltinMaterial("2d-gray-sprite"));
var i = function(t) {
var i = t.getComponent(cc.RenderComponent);
i && (i instanceof cc.Sprite || i instanceof cc.Label) && i.setMaterial(0, e.grayMaterial);
};
c2f.utils.view.nodeRecursive(this.node.children, i);
c2f.utils.view.nodeRecursive(this.relatedNodes, i);
} else {
this.normalMaterial || (this.normalMaterial = cc.Material.getBuiltinMaterial("2d-sprite"));
i = function(t) {
var i = t.getComponent(cc.RenderComponent);
i && (i instanceof cc.Sprite || i instanceof cc.Label) && i.setMaterial(0, e.normalMaterial);
};
c2f.utils.view.nodeRecursive(this.node.children, i);
c2f.utils.view.nodeRecursive(this.relatedNodes, i);
}
};
o([ l({
type: cc.Node,
tooltip: !1
}) ], e.prototype, "relatedNodes", void 0);
o([ l(cc.Material) ], e.prototype, "normalMaterial", void 0);
o([ l(cc.Material) ], e.prototype, "grayMaterial", void 0);
return o([ c, f, h(cc.Button), u("c2f/UI/ButtonChildGray") ], e);
}(cc.Component);
i.default = p;
cc._RF.pop();
}, {
"../../../hack/ButtonHack": "ButtonHack"
} ],
ButtonChildPos: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "1c34dZFfsxBlZKPpElUos3w", "ButtonChildPos");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("../../../hack/ButtonHack"), a = cc._decorator, c = a.ccclass, l = a.property, u = a.menu, h = a.requireComponent, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.normal = cc.v2(0, 0);
e.pressed = cc.v2(0, 0);
e.hover = cc.v2(0, 0);
e.disabled = cc.v2(0, 0);
return e;
}
e.prototype.onLoad = function() {
this.node.on(s.ButtonHackEvent.STATE_CHANGE, this.onStateChange, this);
};
e.prototype.onStateChange = function(t) {
var e = cc.v2(0, 0);
switch (t) {
case s.ButtonState.NORMAL:
e = this.normal;
break;

case s.ButtonState.PRESSED:
e = this.pressed;
break;

case s.ButtonState.HOVER:
e = this.hover;
break;

case s.ButtonState.DISABLED:
e = this.disabled;
}
this.node.children.forEach(function(t) {
t.setPosition(e);
});
};
o([ l({
tooltip: !1
}) ], e.prototype, "normal", void 0);
o([ l({
tooltip: !1
}) ], e.prototype, "pressed", void 0);
o([ l({
tooltip: !1
}) ], e.prototype, "hover", void 0);
o([ l({
tooltip: !1
}) ], e.prototype, "disabled", void 0);
return o([ c, h(cc.Button), u("c2f/UI/ButtonChildPos") ], e);
}(cc.Component);
i.default = f;
cc._RF.pop();
}, {
"../../../hack/ButtonHack": "ButtonHack"
} ],
ButtonHack: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "11aeeQHGvlOP6jJ8BO6X8yy", "ButtonHack");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.ButtonState = i.ButtonHackEvent = void 0;
var r, n = t("../define/C2FConst");
(function(t) {
t.STATE_CHANGE = "ButtonHackEvent-STATE_CHANGE";
})(r = i.ButtonHackEvent || (i.ButtonHackEvent = {}));
(function(t) {
t[t.NORMAL = 0] = "NORMAL";
t[t.HOVER = 1] = "HOVER";
t[t.PRESSED = 2] = "PRESSED";
t[t.DISABLED = 3] = "DISABLED";
})(i.ButtonState || (i.ButtonState = {}));
cc.Button.prototype.__$CCButtonHack$__ || (cc.Button.prototype.__$CCButtonHack$__ = !0);
cc.Button.prototype.engineApplyTransition = cc.Button.prototype._applyTransition;
cc.Button.prototype._applyTransition = function(t) {
this.engineApplyTransition && this.engineApplyTransition(t);
this.node && this.node.emit(r.STATE_CHANGE, t);
};
cc.Button.prototype.engineOnTouchBegan = cc.Button.prototype._onTouchBegan;
cc.Button.prototype._onTouchBegan = function(t) {
var e = new Date().getTime(), i = null;
this.touchTick && (i = e - this.touchTick);
if (!(i && i < 300)) {
this.touchTick = e;
this.engineOnTouchBegan && this.engineOnTouchBegan(t);
if (!this.node.getComponent("UIAudioEffect")) {
var r = this.node.name;
r.startsWith("_") && (r = r.substring(1));
r.endsWith("_") && (r = r.substring(0, r.length - 1));
n.C2FConst.UIAudioID.common;
n.C2FConst.closeBtnNames.indexOf(r) >= 0 && n.C2FConst.UIAudioID.close;
}
}
};
cc._RF.pop();
}, {
"../define/C2FConst": "C2FConst"
} ],
ButtonLongPress: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "675b9jSxWxEtLmrR+B8IRM6", "ButtonLongPress");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = s.property, l = s.menu, u = s.requireComponent, h = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.touchInterval = .1;
e.triggerHander = [];
e._counter = 0;
e._isTouching = !1;
return e;
}
e.prototype.onLoad = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancle, this);
};
e.prototype.onDisable = function() {
this.stop();
};
e.prototype._onTouchStart = function() {
if (!this._isTouching) {
var t = this.node.getComponent(cc.Button);
if (!t || t.interactable) {
this._counter = 0;
this._isTouching = !0;
this.schedule(this.triggerOnce, this.touchInterval);
}
}
};
e.prototype._onTouchEnd = function(t) {
0 == this._counter && this._isTouching && cc.Component.EventHandler.emitEvents(this.triggerHander, t);
this.stop();
};
e.prototype._onTouchCancle = function() {
this.stop();
};
e.prototype.triggerOnce = function(t) {
if (this._isTouching) {
this._counter++;
cc.Component.EventHandler.emitEvents(this.triggerHander, t);
}
};
e.prototype.stop = function() {
this._counter = 0;
this._isTouching = !1;
this.unschedule(this.triggerOnce);
};
e.prototype.quickSetTriggerHnadler = function(t, e) {
this.triggerHander = [];
var i = new cc.Component.EventHandler();
i.target = t.node;
i.component = c2f.utils.view.getComponentName(t);
i.handler = e;
i.customEventData = "";
this.triggerHander.push(i);
};
o([ c({
tooltip: "触发间隔时间"
}) ], e.prototype, "touchInterval", void 0);
o([ c({
type: cc.Component.EventHandler,
tooltip: "触发事件"
}) ], e.prototype, "triggerHander", void 0);
return o([ a, u(cc.Button), l("c2f/UI/ButtonLongPress") ], e);
}(cc.Component);
i.default = h;
cc._RF.pop();
}, {} ],
ButtonSingle: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "0dd4fIEsu5H8YHrLixEwxNu", "ButtonSingle");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s, a = cc._decorator, c = a.ccclass, l = a.property, u = a.menu, h = a.requireComponent;
(function(t) {
t[t.DEFAULT = 0] = "DEFAULT";
t[t.GROUP1 = 1] = "GROUP1";
t[t.GROUP2 = 2] = "GROUP2";
})(s || (s = {}));
var f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.buttonGroup = s.DEFAULT;
e._button = null;
return e;
}
i = e;
Object.defineProperty(e, "groupMap", {
get: function() {
null === this._groupMap && (this._groupMap = new Map());
return this._groupMap;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
this._button = this.getComponent(cc.Button);
var t = i.groupMap.get(this.buttonGroup);
if (void 0 === t) {
t = {
lock: !1,
buttonSet: new Set()
};
i.groupMap.set(this.buttonGroup, t);
}
t.buttonSet.add(this._button);
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
};
e.prototype.onDestroy = function() {
var t = i.groupMap.get(this.buttonGroup);
if (void 0 !== t) {
t.buttonSet.delete(this._button);
this.unlock(t);
} else cc.error("[ButtonSingle.onDestroy] 数据异常 ButtonGroup: " + this.buttonGroup);
};
e.prototype.onTouchStart = function() {
var t = this, e = i.groupMap.get(this.buttonGroup);
if (void 0 !== e) {
if (!e.lock) {
e.lock = !0;
e.buttonSet.forEach(function(e) {
e.enabled = e === t._button;
});
}
} else cc.error("[ButtonSingle.onTouchStart] 数据异常 ButtonGroup: " + this.buttonGroup);
};
e.prototype.onTouchEnd = function() {
var t = i.groupMap.get(this.buttonGroup);
void 0 !== t ? this.unlock(t) : cc.error("[ButtonSingle.onTouchEnd] 数据异常 ButtonGroup: " + this.buttonGroup);
};
e.prototype.unlock = function(t) {
if (t.lock && this._button.enabled) {
t.lock = !1;
t.buttonSet.forEach(function(t) {
t.enabled = !0;
});
}
};
var i;
e._groupMap = null;
o([ l({
type: cc.Enum(s),
tooltip: !1
}) ], e.prototype, "buttonGroup", void 0);
return i = o([ c, h(cc.Button), u("c2f/UI/ButtonSingle") ], e);
}(cc.Component);
i.default = f;
cc._RF.pop();
}, {} ],
C2FConfig: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "dc9b85vTRVC/6zHwCfw5IME", "C2FConfig");
var r = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function s(t) {
try {
c(r.next(t));
} catch (t) {
o(t);
}
}
function a(t) {
try {
c(r.throw(t));
} catch (t) {
o(t);
}
}
function c(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(s, a);
var e;
}
c((r = r.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var i, r, n, o, s = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function a(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;s; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
s.label++;
return {
value: o[1],
done: !1
};

case 5:
s.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = s.ops.pop();
s.trys.pop();
continue;

default:
if (!(n = s.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
s = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
s.label = o[1];
break;
}
if (6 === o[0] && s.label < n[1]) {
s.label = n[1];
n = o;
break;
}
if (n && s.label < n[2]) {
s.label = n[2];
s.ops.push(o);
break;
}
n[2] && s.ops.pop();
s.trys.pop();
continue;
}
o = e.call(t, s);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
}
if (5 & o[0]) throw o[1];
return {
value: o[0] ? o[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = t("../define/C2FConst"), s = t("./GlobalConfig"), a = t("./WebQueryConfig"), c = function() {
function t() {
this.query = new a.WebQueryConfig();
}
t.prototype.initCfg = function() {
return r(this, void 0, void 0, function() {
var t, e, i, r;
return n(this, function(n) {
switch (n.label) {
case 0:
t = c2f.res.getFullUrl(o.C2FConst.fwBundleName, "gameCfg");
return [ 4, c2f.res.loadOne(t, cc.JsonAsset) ];

case 1:
e = n.sent();
this.game = new s.GlobalConfig(e);
c2f.res.release(t, cc.JsonAsset);
i = c2f.storage.getPlainItem(o.C2FConst.localFrameSet, this.game.frameRate);
r = Number(i) || this.game.frameRate;
cc.game.setFrameRate(r);
c2f.storage.init(this.game.localDataKey, this.game.localDataKey);
return [ 2 ];
}
});
});
};
t.getInstance = function() {
this._instance || (this._instance = new t());
return this._instance;
};
t._instance = null;
return t;
}();
c2f.config = c.getInstance();
cc._RF.pop();
}, {
"../define/C2FConst": "C2FConst",
"./GlobalConfig": "GlobalConfig",
"./WebQueryConfig": "WebQueryConfig"
} ],
C2FConst: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "08bc721PlJAfaULkbdY8ALI", "C2FConst");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.C2FConst = void 0;
(function(t) {
t.UIBgOpacity = 193;
t.fwBundleName = "framework";
t.mulBundlePre = "language_";
(function(t) {
t.zh = "cn";
t.en = "us";
t.ru = "ru";
t.th = "th";
t.tw = "tw";
t.ms = "ms";
t.vi = "vi";
t.jp = "jp";
t.kr = "kr";
})(t.LanguageKey || (t.LanguageKey = {}));
t.NetErrOffline = 99999;
t.localFrameSet = "LocalFrameSet";
t.localLGSet = "localLanguageSet";
t.UIMusicPath = "audio/music/";
t.UIAudioPath = "audio/effect/";
(function(t) {
t[t.unknown = 0] = "unknown";
t[t.refresh = 1] = "refresh";
t[t.upgrade = 2] = "upgrade";
t[t.building = 3] = "building";
t[t.tabButton = 4] = "tabButton";
t[t.close = 5] = "close";
t[t.floor = 6] = "floor";
t[t.revive = 7] = "revive";
t[t.common = 100] = "common";
t[t.victory = 101] = "victory";
t[t.lose = 102] = "lose";
t[t.success = 103] = "success";
t[t.awards = 104] = "awards";
t[t.ding = 105] = "ding";
t[t.popView = 106] = "popView";
})(t.UIAudioID || (t.UIAudioID = {}));
t.closeBtnNames = [ "backBtn", "btnClose", "btnBack", "btnReturn" ];
t.UIBgmNames = {
GodsCompeteMain: "bgm6",
SpaceTimeMain: "bgm7",
MindTrainMain: "bgm8",
MysteryMain: "bgm9",
ArenaEnterMain: "bgm10",
ClimbingTowerMain: "bgm11"
};
t.UIViewEftName = {
GetReward: "awards",
PromptSimple: "",
PromptDialog: "",
EquipRefineSuccess: "awards",
StepUpSuccess: "awards",
UpStarSuccess: "awards"
};
})(i.C2FConst || (i.C2FConst = {}));
cc._RF.pop();
}, {} ],
C2FEnum: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "75cc8HcShZHXKqmxsGlFygH", "C2FEnum");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.C2FEnum = void 0;
(function(t) {
(function(t) {
t.ChangeViewValue = "ChangeViewValue";
t.ChangeModelValue = "ChangeModelValue";
t.PopViewInAnimaCmpl = "PopViewInAnimaCmpl";
t.PopViewAdded = "PopViewAdded";
t.PopViewRemoved = "PopViewRemoved";
})(t.Event || (t.Event = {}));
(function(t) {
t.ButtonClick = "click";
t.EditBoxEditingBegan = "editing-did-began";
t.EditBoxEditingEnded = "editing-did-ended";
t.EditBoxEditingReturn = "editing-return";
t.EditBoxTextChanged = "text-changed";
t.ScrollViewScrollToTop = "scroll-to-top";
t.ScrollViewScrollToBottom = "scroll-to-bottom";
t.ScrollViewScrollToLeft = "scroll-to-left";
t.ScrollViewScrollToRight = "scroll-to-right";
t.ScrollViewScrolling = "scrolling";
t.ScrollViewBounceBottom = "bounce-bottom";
t.ScrollViewBounceTop = "bounce-top";
t.ScrollViewBounceLeft = "bounce-left";
t.ScrollViewBounceRight = "bounce-right";
t.ScrollViewScrollEnded = "scroll-ended";
t.ScrollViewTouchUp = "touch-up";
t.ScrollViewScrollBegan = "scroll-began";
t.Toggle = "toggle";
t.SliderSlide = "slide";
t.PageViewPageTurning = "page-turning";
})(t.UIEvent || (t.UIEvent = {}));
(function(t) {
t.SwitchLanguage = "switch-language";
t.VirtualListFillCmpl = "VirtualListFillCmpl";
t.NodeActiveChanged = "active-changed";
})(t.ExtEvent || (t.ExtEvent = {}));
})(i.C2FEnum || (i.C2FEnum = {}));
cc._RF.pop();
}, {} ],
C2FSafeArea: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "695dbslIshGdbVofNL6qfBP", "C2FSafeArea");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = s.property, l = s.menu, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.topEnable = !1;
e.bottomEnable = !1;
return e;
}
e.prototype.onLoad = function() {
this.updateArea();
};
e.prototype.updateArea = function() {
var t = cc.view.getDesignResolutionSize().height, e = cc.winSize.height, i = (cc.winSize.width, 
this.node.height, c2f.utils.platform.getSafeAreaR()), r = .5 * (e - i.height);
cc.sys.os === cc.sys.OS_IOS ? r /= 2 : r = r > 43 ? 43 : r;
var n = this.node.getComponent(cc.Widget);
if (n) {
if (this.topEnable && n.isAlignTop) {
n.oriTop || (n.oriTop = n.top);
n.top = n.oriTop + 2 * r;
}
if (this.bottomEnable && n.isAlignBottom) {
n.oriBot || (n.oriBot = n.bottom);
n.bottom = n.oriBot + i.y || 10;
}
n.updateAlignment();
} else {
var o = .5 * t - this.node.y;
this.node.y = .5 * i.height - o - r;
}
};
e.prototype.setTopEnable = function(t) {
this.topEnable = t;
this.updateArea();
};
o([ c() ], e.prototype, "topEnable", void 0);
o([ c() ], e.prototype, "bottomEnable", void 0);
return o([ a, l("c2f/common/C2FSafeArea") ], e);
}(cc.Component);
i.default = u;
cc._RF.pop();
}, {} ],
C2FTween: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "bbd48/0U25E4oggoDgrAf9y", "C2FTween");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.SCALE_TWEEN = i.TWEEN = i.VERSION = i.C2FTween = i.Sequence = i.Interpolation = i.Group = i.Easing = void 0;
var r = t("./GameTimer");
i.Easing = {
Linear: {
None: function(t) {
return t;
}
},
Quadratic: {
In: function(t) {
return t * t;
},
Out: function(t) {
return t * (2 - t);
},
InOut: function(t) {
return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
}
},
Cubic: {
In: function(t) {
return t * t * t;
},
Out: function(t) {
return --t * t * t + 1;
},
InOut: function(t) {
return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
}
},
Quartic: {
In: function(t) {
return t * t * t * t;
},
Out: function(t) {
return 1 - --t * t * t * t;
},
InOut: function(t) {
return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
}
},
Quintic: {
In: function(t) {
return t * t * t * t * t;
},
Out: function(t) {
return --t * t * t * t * t + 1;
},
InOut: function(t) {
return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
}
},
Sinusoidal: {
In: function(t) {
return 1 - Math.cos(t * Math.PI / 2);
},
Out: function(t) {
return Math.sin(t * Math.PI / 2);
},
InOut: function(t) {
return .5 * (1 - Math.cos(Math.PI * t));
}
},
Exponential: {
In: function(t) {
return 0 === t ? 0 : Math.pow(1024, t - 1);
},
Out: function(t) {
return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
},
InOut: function(t) {
return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
}
},
Circular: {
In: function(t) {
return 1 - Math.sqrt(1 - t * t);
},
Out: function(t) {
return Math.sqrt(1 - --t * t);
},
InOut: function(t) {
return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
}
},
Elastic: {
In: function(t) {
return 0 === t ? 0 : 1 === t ? 1 : -Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI);
},
Out: function(t) {
return 0 === t ? 0 : 1 === t ? 1 : Math.pow(2, -10 * t) * Math.sin(5 * (t - .1) * Math.PI) + 1;
},
InOut: function(t) {
return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? -.5 * Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI) : .5 * Math.pow(2, -10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI) + 1;
}
},
Back: {
In: function(t) {
var e = 1.70158;
return t * t * ((e + 1) * t - e);
},
Out: function(t) {
var e = 1.70158;
return --t * t * ((e + 1) * t + e) + 1;
},
InOut: function(t) {
var e = 2.5949095;
return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
}
},
Bounce: {
In: function(t) {
return 1 - i.Easing.Bounce.Out(1 - t);
},
Out: function(t) {
return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
},
InOut: function(t) {
return t < .5 ? .5 * i.Easing.Bounce.In(2 * t) : .5 * i.Easing.Bounce.Out(2 * t - 1) + .5;
}
}
};
var n, o = "undefined" != typeof self && void 0 !== self.performance && void 0 !== self.performance.now ? self.performance.now.bind(self.performance) : void 0 !== Date.now ? Date.now : function() {
return new Date().getTime();
}, s = function() {
function t() {
this._tweens = {};
this._tweensAddedDuringUpdate = {};
}
t.prototype.getAll = function() {
var t = this;
return Object.keys(this._tweens).map(function(e) {
return t._tweens[e];
});
};
t.prototype.removeAll = function() {
this._tweens = {};
};
t.prototype.add = function(t) {
this._tweens[t.getId()] = t;
this._tweensAddedDuringUpdate[t.getId()] = t;
};
t.prototype.remove = function(t) {
delete this._tweens[t.getId()];
delete this._tweensAddedDuringUpdate[t.getId()];
};
t.prototype.removeByCCObject = function(t) {
var e = Object.keys(this._tweens);
if (0 !== e.length) for (var i = 0; i < e.length; i++) {
var r = this._tweens[e[i]];
r && r.ccObject === t && r.stop();
}
};
t.prototype.update = function(t, e) {
void 0 === t && (t = o());
void 0 === e && (e = !1);
var i = Object.keys(this._tweens);
if (0 === i.length) return !1;
for (var r = 0; r < i.length; r++) (n = this._tweens[i[r]]) && !n.isCCObjectValid() && n.stop();
if (0 === (i = Object.keys(this._tweens)).length) return !1;
for (;i.length > 0; ) {
this._tweensAddedDuringUpdate = {};
for (r = 0; r < i.length; r++) {
var n, s = !e;
(n = this._tweens[i[r]]) && !1 === n.update(t, s) && !e && delete this._tweens[i[r]];
}
i = Object.keys(this._tweensAddedDuringUpdate);
}
return !0;
};
return t;
}();
i.Group = s;
i.Interpolation = {
Linear: function(t, e) {
var r = t.length - 1, n = r * e, o = Math.floor(n), s = i.Interpolation.Utils.Linear;
return e < 0 ? s(t[0], t[1], n) : e > 1 ? s(t[r], t[r - 1], r - n) : s(t[o], t[o + 1 > r ? r : o + 1], n - o);
},
Bezier: function(t, e) {
for (var r = 0, n = t.length - 1, o = Math.pow, s = i.Interpolation.Utils.Bernstein, a = 0; a <= n; a++) r += o(1 - e, n - a) * o(e, a) * t[a] * s(n, a);
return r;
},
CatmullRom: function(t, e) {
var r = t.length - 1, n = r * e, o = Math.floor(n), s = i.Interpolation.Utils.CatmullRom;
if (t[0] === t[r]) {
e < 0 && (o = Math.floor(n = r * (1 + e)));
return s(t[(o - 1 + r) % r], t[o], t[(o + 1) % r], t[(o + 2) % r], n - o);
}
return e < 0 ? t[0] - (s(t[0], t[0], t[1], t[1], -n) - t[0]) : e > 1 ? t[r] - (s(t[r], t[r], t[r - 1], t[r - 1], n - r) - t[r]) : s(t[o ? o - 1 : 0], t[o], t[r < o + 1 ? r : o + 1], t[r < o + 2 ? r : o + 2], n - o);
},
Utils: {
Linear: function(t, e, i) {
return (e - t) * i + t;
},
Bernstein: function(t, e) {
var r = i.Interpolation.Utils.Factorial;
return r(t) / r(e) / r(t - e);
},
Factorial: (n = [ 1 ], function(t) {
var e = 1;
if (n[t]) return n[t];
for (var i = t; i > 1; i--) e *= i;
n[t] = e;
return e;
}),
CatmullRom: function(t, e, i, r, n) {
var o = .5 * (i - t), s = .5 * (r - e), a = n * n;
return (2 * e - 2 * i + o + s) * n * a + (-3 * e + 3 * i - 2 * o - s) * a + o * n + e;
}
}
};
var a = function() {
function t() {}
t.nextId = function() {
return t._nextId++;
};
t._nextId = 0;
return t;
}();
i.Sequence = a;
var c = new s(), l = new s(), u = function() {
function t(t, e) {
void 0 === e && (e = c);
this._object = t;
this._group = e;
this._isPaused = !1;
this._pauseStart = 0;
this._valuesStart = {};
this._valuesEnd = {};
this._valuesStartRepeat = {};
this._duration = 1e3;
this._initialRepeat = 0;
this._repeat = 0;
this._yoyo = !1;
this._isPlaying = !1;
this._reversed = !1;
this._delayTime = 0;
this._startTime = 0;
this._easingFunction = i.Easing.Linear.None;
this._interpolationFunction = i.Interpolation.Linear;
this._chainedTweens = [];
this._onStartCallbackFired = !1;
this._id = a.nextId();
this._isChainStopped = !1;
this._goToEnd = !1;
}
Object.defineProperty(t.prototype, "ccObject", {
get: function() {
return this._ccObject;
},
enumerable: !1,
configurable: !0
});
t.prototype.bindCCObject = function(t) {
this._ccObject = t;
return this;
};
t.prototype.isCCObjectValid = function() {
return !(this._object instanceof cc.Object && !cc.isValid(this._object, !0) || this._ccObject instanceof cc.Object && !cc.isValid(this._ccObject, !0));
};
t.prototype.getId = function() {
return this._id;
};
t.prototype.isPlaying = function() {
return this._isPlaying;
};
t.prototype.isPaused = function() {
return this._isPaused;
};
t.prototype.to = function(t, e) {
this._valuesEnd = Object.create(t);
void 0 !== e && (this._duration = e);
return this;
};
t.prototype.duration = function(t) {
this._duration = t;
return this;
};
t.prototype.start = function(t) {
if (this._isPlaying) return this;
void 0 === t && (this._group === c ? t = r.GameTimer.gameMs : this._group === l && (t = r.GameTimer.scaleGameMs));
this._group && this._group.add(this);
this._repeat = this._initialRepeat;
if (this._reversed) {
this._reversed = !1;
for (var e in this._valuesStartRepeat) {
this._swapEndStartRepeatValues(e);
this._valuesStart[e] = this._valuesStartRepeat[e];
}
}
this._isPlaying = !0;
this._isPaused = !1;
this._onStartCallbackFired = !1;
this._isChainStopped = !1;
this._startTime = void 0 !== t ? "string" == typeof t ? o() + parseFloat(t) : t : o();
this._startTime += this._delayTime;
this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat);
return this;
};
t.prototype._setupProperties = function(t, e, i, r) {
for (var n in i) {
var o = t[n], s = Array.isArray(o), a = s ? "array" : typeof o, c = !s && Array.isArray(i[n]);
if ("undefined" !== a && "function" !== a) {
if (c) {
var l = i[n];
if (0 === l.length) continue;
l = l.map(this._handleRelativeValue.bind(this, o));
i[n] = [ o ].concat(l);
}
if ("object" !== a && !s || !o || c) {
"undefined" == typeof e[n] && (e[n] = o);
s || (e[n] *= 1);
r[n] = c ? i[n].slice().reverse() : e[n] || 0;
} else {
e[n] = s ? [] : {};
for (var u in o) e[n][u] = o[u];
r[n] = s ? [] : {};
this._setupProperties(o, e[n], i[n], r[n]);
}
}
}
};
t.prototype.stop = function() {
if (!this._isChainStopped) {
this._isChainStopped = !0;
this.stopChainedTweens();
}
if (!this._isPlaying) return this;
this._group && this._group.remove(this);
this._isPlaying = !1;
this._isPaused = !1;
this._onStopCallback && this._onStopCallback(this._object);
return this;
};
t.prototype.end = function() {
this._goToEnd = !0;
this.update(Infinity);
return this;
};
t.prototype.pause = function(t) {
void 0 === t && (t = o());
if (this._isPaused || !this._isPlaying) return this;
this._isPaused = !0;
this._pauseStart = t;
this._group && this._group.remove(this);
return this;
};
t.prototype.resume = function(t) {
void 0 === t && (t = o());
if (!this._isPaused || !this._isPlaying) return this;
this._isPaused = !1;
this._startTime += t - this._pauseStart;
this._pauseStart = 0;
this._group && this._group.add(this);
return this;
};
t.prototype.stopChainedTweens = function() {
for (var t = 0, e = this._chainedTweens.length; t < e; t++) this._chainedTweens[t].stop();
return this;
};
t.prototype.group = function(t) {
this._group = t;
return this;
};
t.prototype.delay = function(t) {
this._delayTime = t;
return this;
};
t.prototype.repeat = function(t) {
this._initialRepeat = t;
this._repeat = t;
return this;
};
t.prototype.repeatDelay = function(t) {
this._repeatDelayTime = t;
return this;
};
t.prototype.yoyo = function(t) {
this._yoyo = t;
return this;
};
t.prototype.easing = function(t) {
this._easingFunction = t;
return this;
};
t.prototype.interpolation = function(t) {
this._interpolationFunction = t;
return this;
};
t.prototype.chain = function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
t = [];
for (var i = 0; i < arguments.length; i++) t[i] = arguments[i];
this._chainedTweens = t;
return this;
};
t.prototype.onStart = function(t) {
this._onStartCallback = t;
return this;
};
t.prototype.onUpdate = function(t) {
this._onUpdateCallback = t;
return this;
};
t.prototype.onRepeat = function(t) {
this._onRepeatCallback = t;
return this;
};
t.prototype.onComplete = function(t) {
this._onCompleteCallback = t;
return this;
};
t.prototype.onStop = function(t) {
this._onStopCallback = t;
return this;
};
t.prototype.update = function(t, e) {
void 0 === t && (t = o());
void 0 === e && (e = !0);
if (this._isPaused) return !0;
var i, r, n = this._startTime + this._duration;
if (!this._goToEnd && !this._isPlaying) {
if (t > n) return !1;
e && this.start(t);
}
this._goToEnd = !1;
if (t < this._startTime) return !0;
if (!1 === this._onStartCallbackFired) {
this._onStartCallback && this._onStartCallback(this._object);
this._onStartCallbackFired = !0;
}
r = (t - this._startTime) / this._duration;
r = 0 === this._duration || r > 1 ? 1 : r;
var s = this._easingFunction(r);
this._updateProperties(this._object, this._valuesStart, this._valuesEnd, s);
this._onUpdateCallback && this._onUpdateCallback(this._object, r);
if (1 === r) {
if (this._repeat > 0) {
isFinite(this._repeat) && this._repeat--;
for (i in this._valuesStartRepeat) {
this._yoyo || "string" != typeof this._valuesEnd[i] || (this._valuesStartRepeat[i] = this._valuesStartRepeat[i] + parseFloat(this._valuesEnd[i]));
this._yoyo && this._swapEndStartRepeatValues(i);
this._valuesStart[i] = this._valuesStartRepeat[i];
}
this._yoyo && (this._reversed = !this._reversed);
void 0 !== this._repeatDelayTime ? this._startTime = t + this._repeatDelayTime : this._startTime = t + this._delayTime;
this._onRepeatCallback && this._onRepeatCallback(this._object);
return !0;
}
this._onCompleteCallback && this._onCompleteCallback(this._object);
for (var a = 0, c = this._chainedTweens.length; a < c; a++) this._chainedTweens[a].start(this._startTime + this._duration);
this._isPlaying = !1;
return !1;
}
return !0;
};
t.prototype._updateProperties = function(t, e, i, r) {
for (var n in i) if (void 0 !== e[n]) {
var o = e[n] || 0, s = i[n], a = Array.isArray(t[n]), c = Array.isArray(s);
!a && c ? t[n] = this._interpolationFunction(s, r) : "object" == typeof s && s ? this._updateProperties(t[n], o, s, r) : "number" == typeof (s = this._handleRelativeValue(o, s)) && (t[n] = o + (s - o) * r);
}
};
t.prototype._handleRelativeValue = function(t, e) {
return "string" != typeof e ? e : "+" === e.charAt(0) || "-" === e.charAt(0) ? t + parseFloat(e) : parseFloat(e);
};
t.prototype._swapEndStartRepeatValues = function(t) {
var e = this._valuesStartRepeat[t], i = this._valuesEnd[t];
this._valuesStartRepeat[t] = "string" == typeof i ? this._valuesStartRepeat[t] + parseFloat(i) : this._valuesEnd[t];
this._valuesEnd[t] = e;
};
return t;
}();
i.C2FTween = u;
i.VERSION = "18.6.4";
a.nextId;
i.TWEEN = c;
i.SCALE_TWEEN = l;
cc._RF.pop();
}, {
"./GameTimer": "GameTimer"
} ],
C2FUIDef: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "3c8b8GCHdRHtoiZjkx89qdq", "C2FUIDef");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.LayerType = i.ViewParams = void 0;
i.ViewParams = function() {
this.uuid = null;
this.prefabPath = null;
this.params = null;
this.callbacks = null;
this.valid = !0;
this.node = null;
this.bundle = null;
this.uiCfg = null;
};
(function(t) {
t.Game = "LayerGame";
t.UI = "LayerUI";
t.PopUp = "LayerPopUp";
t.Dialog = "LayerDialog";
t.System = "LayerSystem";
t.Notify = "LayerNotify";
t.Guide = "LayerGuide";
})(i.LayerType || (i.LayerType = {}));
cc._RF.pop();
}, {} ],
C2F: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "96fd0m/DxVMGa9bphvaqRcB", "C2F");
Object.defineProperty(i, "__esModule", {
value: !0
});
cc._RF.pop();
}, {} ],
CircleList: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "b16a3Aay4tOsrajlZkk+6I1", "CircleList");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = s.property, l = s.executeInEditMode, u = s.menu, h = 270, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.ellipseAxes = cc.v2(0, 0);
e.scrollSpeed = 200;
e._init = !1;
e._curDegree = h;
e._targetDegree = h;
e._scrolling = !1;
e._itemDegreeMap = new Map();
e._maxDelta = 0;
e._selectCall = null;
return e;
}
Object.defineProperty(e.prototype, "curDegree", {
get: function() {
return this._curDegree;
},
set: function(t) {
this._curDegree = c2f.utils.math.normalizeDegree(t);
this.refreshItems();
},
enumerable: !1,
configurable: !0
});
e.prototype.init = function(t) {
var e = this;
void 0 === t && (t = null);
this._init = !0;
this._scrolling = !1;
this._maxDelta = 0;
this._itemDegreeMap.clear();
this._selectCall = t;
if (!(this.content.childrenCount <= 0)) {
var i = 360 / this.content.childrenCount;
this.content.children.forEach(function(t, r) {
e._itemDegreeMap.set(t, r * i);
t.on(cc.Node.EventType.TOUCH_MOVE, e.itemTouchMove, e);
t.on(cc.Node.EventType.TOUCH_END, e.itemTouchEnd, e);
t.on(cc.Node.EventType.TOUCH_CANCEL, e.itemTouchEnd, e);
});
this.refreshItems();
}
};
e.prototype.scrollToItem = function(t) {
var e;
if (this._itemDegreeMap.has(t)) {
var i = this._itemDegreeMap.get(t), r = h - i;
this._targetDegree = c2f.utils.math.normalizeDegree(r);
this._scrolling = !0;
null === (e = this._selectCall) || void 0 === e || e.call(this, t);
}
};
e.prototype.refreshItems = function() {
var t = this;
this.content.children.forEach(function(e) {
var i = c2f.utils.math.normalizeDegree(t._itemDegreeMap.get(e) + t.curDegree), r = c2f.utils.vec.getEllipsePoint(t.ellipseAxes.x, t.ellipseAxes.y, i);
e.setPosition(r);
e.zIndex = -e.y;
});
};
e.prototype.update = function(t) {
if (this._init && this._scrolling && this.curDegree !== this._targetDegree) {
var e = Math.abs(this._targetDegree - this.curDegree), i = this.curDegree, r = (e < 180 ? 1 : -1) * Math.sign(this._targetDegree - this.curDegree);
i += t * this.scrollSpeed * r;
if (this.curDegree > this._targetDegree && i < this._targetDegree || this.curDegree < this._targetDegree && i > this._targetDegree) {
i = this._targetDegree;
this._scrolling = !1;
}
this.curDegree = i;
}
};
e.prototype.itemTouchMove = function(t) {
var e = t.getDeltaX();
if (!(Math.abs(e) < 1)) {
this._maxDelta < Math.abs(e) && (this._maxDelta = Math.abs(e));
this.curDegree = this.curDegree + e / 5;
}
};
e.prototype.itemTouchEnd = function(t) {
var e = t.target;
if (this._maxDelta < 5) {
this._maxDelta = 0;
this.scrollToItem(e);
} else {
for (var i = 360, r = this.content.children[0], n = 0; n < this.content.children.length; n++) {
var o = this.content.children[n], s = c2f.utils.math.normalizeDegree(this._itemDegreeMap.get(o) + this.curDegree), a = Math.abs(h - s);
a > 180 && (a = s + 360 - h);
if (a < i) {
i = a;
r = o;
}
}
this._maxDelta = 0;
this.scrollToItem(r);
}
};
o([ c(cc.Node) ], e.prototype, "content", void 0);
o([ c({
tooltip: !1
}) ], e.prototype, "ellipseAxes", void 0);
o([ c({
tooltip: !1
}) ], e.prototype, "scrollSpeed", void 0);
return o([ a, l, u("c2f/UI/CircleList") ], e);
}(cc.Component);
i.default = f;
cc._RF.pop();
}, {} ],
CmmPromptDlg: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "6dd51Dj6WhL8JsXYexbsjCW", "CmmPromptDlg");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.CmmPromptDlg = void 0;
var s = t("../../component/language/LanguageLabel"), a = cc._decorator, c = a.ccclass, l = a.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lab_title = null;
e.lab_content = null;
e.lab_ok = null;
e.lab_cancel = null;
e.config = {};
return e;
}
e.prototype.onTouchEnd = function(t) {
switch (t.target.name) {
case "btn_ok":
this.onOk();
break;

case "btn_cancel":
this.onCancel();
}
};
e.prototype.onUIAdded = function(t) {
void 0 === t && (t = {});
this.config = t || {};
this.setTitle();
this.setContent();
this.setBtnOkLabel();
this.setBtnCancelLabel();
this.node.active = !0;
};
e.prototype.setTitle = function() {
this.lab_title.dataID = this.config.title;
};
e.prototype.setContent = function() {
this.lab_content.dataID = this.config.content;
};
e.prototype.setBtnOkLabel = function() {
this.lab_ok.dataID = this.config.okWord;
};
e.prototype.setBtnCancelLabel = function() {
this.lab_cancel.dataID = this.config.cancelWord;
this.lab_cancel.node.parent.active = this.config.needCancel || !1;
};
e.prototype.onOk = function() {
"function" == typeof this.config.okFunc && this.config.okFunc();
this.close();
};
e.prototype.onClose = function() {
"function" == typeof this.config.closeFunc && this.config.closeFunc();
this.close();
};
e.prototype.onCancel = function() {
"function" == typeof this.config.cancelFunc && this.config.cancelFunc();
this.close();
};
e.prototype.close = function() {
c2f.gui.removeByNode(this.node);
};
e.prototype.onDestroy = function() {
this.config = null;
};
o([ l(s.default) ], e.prototype, "lab_title", void 0);
o([ l(s.default) ], e.prototype, "lab_content", void 0);
o([ l(s.default) ], e.prototype, "lab_ok", void 0);
o([ l(s.default) ], e.prototype, "lab_cancel", void 0);
return o([ c ], e);
}(cc.Component);
i.CmmPromptDlg = u;
cc._RF.pop();
}, {
"../../component/language/LanguageLabel": "LanguageLabel"
} ],
CountdownLabel: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ba435qQpBZKg4vyZKQezq5r", "CountdownLabel");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("../../core/timer/C2FTween"), a = cc._decorator, c = a.ccclass, l = a.property, u = a.menu, h = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.timeScale = !1;
e._tween = null;
e._updateCall = null;
e._completeCall = null;
e._format = "%{hh}:%{mm}:%{ss}";
e._txtFormat = null;
e._leftSec = 0;
e._leftFloorSec = 0;
e.curSverTime = 0;
e.totalTime = 0;
e._label = null;
return e;
}
Object.defineProperty(e.prototype, "leftSec", {
get: function() {
return this._leftSec;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "label", {
get: function() {
var t;
this._label || (this._label = null !== (t = this.getComponent(cc.Label)) && void 0 !== t ? t : this.getComponent(cc.RichText));
return this._label;
},
enumerable: !1,
configurable: !0
});
e.prototype.startCountdown = function(t, e, i, r, n) {
var o, a = this;
void 0 === e && (e = "%{hh}:%{mm}:%{ss}");
void 0 === i && (i = null);
void 0 === r && (r = null);
void 0 === n && (n = null);
this.curSverTime = c2f.utils.date.getSerVerTime();
this.totalTime = t;
this._leftSec = t;
this._leftFloorSec = Math.floor(t);
this._format = e;
this._txtFormat = i;
this._updateCall = r;
this._completeCall = n;
null === (o = this._tween) || void 0 === o || o.stop();
this.unscheduleAllCallbacks();
this._tween = this.timeScale ? new s.C2FTween(this, s.SCALE_TWEEN) : new s.C2FTween(this);
this.timeScale ? this._tween.to({
_leftSec: 0
}, 1e3 * t).onUpdate(function() {
a.onUpdate();
}).onComplete(function() {
a.onComplete();
}).start() : this.onUpdateTime();
};
e.prototype.onUpdateTime = function() {
var t, e = this, i = Math.floor(this.totalTime - (c2f.utils.date.getSerVerTime() - this.curSverTime));
this._leftSec = i;
if (this.label) {
var r = c2f.utils.date.formatTimeString(i, this._format);
this._txtFormat && (r = this._txtFormat.format(r));
this.label.string = r;
}
null === (t = this._updateCall) || void 0 === t || t.call(this);
i <= 0 ? this.scheduleOnce(function() {
e.onComplete();
}) : this.scheduleOnce(function() {
e.onUpdateTime();
}, 1);
};
e.prototype.onUpdate = function() {
var t, e = Math.floor(this._leftSec);
if (e !== this._leftFloorSec) {
this._leftFloorSec = e;
if (this.label) {
var i = c2f.utils.date.formatTimeString(this._leftFloorSec, this._format);
this._txtFormat && (i = this._txtFormat.format(i));
this.label.string = i;
}
null === (t = this._updateCall) || void 0 === t || t.call(this);
}
};
e.prototype.onComplete = function() {
var t;
this.curSverTime = 0;
null === (t = this._completeCall) || void 0 === t || t.call(this);
};
e.prototype.stopCountdown = function() {
var t;
this.curSverTime = 0;
null === (t = this._tween) || void 0 === t || t.stop();
this.unscheduleAllCallbacks();
};
e.prototype.onEnable = function() {
if (this.curSverTime > 0) {
var t = this.totalTime - (c2f.utils.date.getSerVerTime() - this.curSverTime);
t = t < 0 ? 0 : t;
this.startCountdown(t, this._format, this._txtFormat, this._updateCall, this._completeCall);
}
};
o([ l({
tooltip: !1
}) ], e.prototype, "timeScale", void 0);
return o([ c, u("c2f/UI/CountdownLabel") ], e);
}(cc.Component);
i.default = h;
cc._RF.pop();
}, {
"../../core/timer/C2FTween": "C2FTween"
} ],
CyclicScrollBG: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "719b98nuZxPnpseNcye4aNd", "CyclicScrollBG");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.CyclicScrollBG = void 0;
var s = t("../../gui/layer/UIPrefabBase"), a = cc._decorator, c = a.ccclass, l = a.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.vertical = !1;
e.speed = 0;
e.highPerform = !1;
e.spBg1 = null;
e.spBg2 = null;
e.bgPanel = null;
e.subSize = null;
e.initPos = cc.v3(0, 0, 0);
e.refreshFR = .1;
e.refreshInterval = e.refreshFR;
e.referSub = {
node: null,
posL: cc.v3(0, 0, 0)
};
e.otherSub = {
node: null,
posL: cc.v3(0, 0, 0)
};
return e;
}
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
};
e.prototype.onDestory = function() {
this.initPos = null;
this.referSub = null;
this.otherSub = null;
};
e.prototype.initProperty = function() {
t.prototype.initProperty.call(this);
this.spBg1 = this.get("_spBg1_");
this.spBg2 = this.get("_spBg2_");
};
e.prototype.start = function() {
this.bgPanel = this.node;
this.subSize = this.spBg1.getContentSize();
if (this.highPerform) if (this.vertical) ; else {
var t = cc.view.getVisibleSize(), e = c2f.utils.node.getNodeWorldPosition(this.bgPanel), i = cc.Vec2.ZERO.clone(), r = cc.Vec3.ZERO.clone();
if (this.speed > 0) {
this.bgPanel.setAnchorPoint(0, this.bgPanel.anchorY);
for (var n = 0; n < this.bgPanel.children.length; n++) {
var o = this.bgPanel.children[n];
c2f.utils.node.getNodePosition(o, i);
var s = n * this.subSize.width + o.anchorX * this.subSize.width;
o.setPosition(s, i.y, 0);
}
this.bgPanel.parent.convertToNodeSpaceAR(cc.v3(t.width - 2 * this.subSize.width, e.y, 0), r);
this.bgPanel.setPosition(r);
} else {
this.bgPanel.setAnchorPoint(1, this.bgPanel.anchorY);
for (n = 0; n < this.bgPanel.children.length; n++) {
o = this.bgPanel.children[n];
c2f.utils.node.getNodePosition(o, i);
s = -n * this.subSize.width - (1 - o.anchorX) * this.subSize.width;
o.setPosition(s, i.y, 0);
}
this.bgPanel.parent.convertToNodeSpaceAR(cc.v3(2 * this.subSize.width, e.y, 0), r);
this.bgPanel.setPosition(r);
}
this.bgPanel.getPosition(this.initPos);
}
};
e.prototype.update = function(t) {
if (this.spBg1 && this.spBg2) {
this.refreshInterval -= t;
if (!(this.refreshInterval > 0)) {
this.refreshInterval += this.refreshFR;
var e = this.speed * this.refreshFR;
this.moveBg(e);
}
}
};
e.prototype.moveBg = function(t) {
this.vertical ? this.moveVertical(t) : this.moveHorizontal(t);
};
e.prototype.moveVertical = function(t) {
c2f.utils.node.offestNodePos(this.bgPanel, 0, t, 0);
var e = c2f.utils.node.getFreeVecTmp(), i = c2f.utils.node.getFreeVecTmp();
this.spBg1.getPosition(e);
this.spBg2.getPosition(i);
if (t > 0) if (i.y > e.y) {
this.referSub.node = this.spBg2;
this.referSub.posL.set(i);
this.otherSub.node = this.spBg1;
this.otherSub.posL.set(e);
} else {
this.referSub.node = this.spBg1;
this.referSub.posL.set(e);
this.otherSub.node = this.spBg2;
this.otherSub.posL.set(i);
}
if (c2f.utils.view.nodeIsOutByWidth(this.referSub.node)) {
this.referSub.node.setPosition(this.otherSub.posL);
this.otherSub.node.setPosition(this.referSub.posL);
c2f.utils.node.offestNodePos(this.bgPanel, 0, this.subSize.height * (t > 0 ? -1 : 1), 0);
}
c2f.utils.node.releaseVecTmp(e);
c2f.utils.node.releaseVecTmp(i);
};
e.prototype.moveHorizontal = function(t) {
c2f.utils.node.offestNodePos(this.bgPanel, t, 0, 0);
var e = c2f.utils.node.getFreeVecTmp(), i = c2f.utils.node.getFreeVecTmp();
this.spBg1.getPosition(e);
this.spBg2.getPosition(i);
if (t > 0) if (i.x > e.x) {
this.referSub.node = this.spBg2;
this.referSub.posL.set(i);
this.otherSub.node = this.spBg1;
this.otherSub.posL.set(e);
} else {
this.referSub.node = this.spBg1;
this.referSub.posL.set(e);
this.otherSub.node = this.spBg2;
this.otherSub.posL.set(i);
} else if (e.x < i.x) {
this.referSub.node = this.spBg1;
this.referSub.posL.set(e);
this.otherSub.node = this.spBg2;
this.otherSub.posL.set(i);
} else {
this.referSub.node = this.spBg2;
this.referSub.posL.set(i);
this.otherSub.node = this.spBg1;
this.otherSub.posL.set(e);
}
if (this.highPerform) {
var r = c2f.utils.node.getNodePosition(this.bgPanel).x - this.initPos.x;
if (Math.abs(r) >= this.subSize.width) {
this.referSub.node.setPosition(this.otherSub.posL);
this.otherSub.node.setPosition(this.referSub.posL);
c2f.utils.node.offestNodePos(this.bgPanel, this.subSize.width * (t > 0 ? -1 : 1), 0, 0);
}
} else if (c2f.utils.view.nodeIsOutByWidth(this.referSub.node)) {
this.referSub.node.setPosition(this.otherSub.posL);
this.otherSub.node.setPosition(this.referSub.posL);
c2f.utils.node.offestNodePos(this.bgPanel, this.subSize.width * (t > 0 ? -1 : 1), 0, 0);
}
c2f.utils.node.releaseVecTmp(e);
c2f.utils.node.releaseVecTmp(i);
};
o([ l({
serializable: !0
}) ], e.prototype, "vertical", void 0);
o([ l({
serializable: !0
}) ], e.prototype, "speed", void 0);
o([ l({
serializable: !0,
tooltip: "高性能模式:该模式下会修改自动修改节点锚点"
}) ], e.prototype, "highPerform", void 0);
return o([ c ], e);
}(s.UIPrefabBase);
i.CyclicScrollBG = u;
cc._RF.pop();
}, {
"../../gui/layer/UIPrefabBase": "UIPrefabBase"
} ],
DateUtil: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "8a198IzsFhK1I/NrrHKaDs/", "DateUtil");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r;
(function(t) {
t[t.S = 0] = "S";
t[t.M = 1] = "M";
t[t.H = 2] = "H";
t[t.D = 3] = "D";
})(r || (r = {}));
var n = function() {
function t() {}
t.format = function(t, e) {
var i = {
"M+": e.getMonth() + 1,
"d+": e.getDate(),
"h+": e.getHours(),
"m+": e.getMinutes(),
"s+": e.getSeconds(),
"q+": Math.floor((e.getMonth() + 3) / 3),
S: e.getMilliseconds()
};
/(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length)));
for (var r in i) new RegExp("(" + r + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[r] : ("00" + i[r]).substring(("" + i[r]).length)));
return t;
};
t.formatTimeString = function(t, e) {
void 0 === e && (e = "%{hh}:%{mm}:%{ss}");
var i = Math.floor(t), n = Math.floor(i / 60), o = Math.floor(i / 3600), s = Math.floor(i / 86400), a = r.S, c = "";
if ("string" == typeof e) {
c = e;
/%\{d+\}/.test(e) ? a = r.D : /%\{h+\}/.test(e) ? a = r.H : /%\{m+\}/.test(e) && (a = r.M);
} else if (s > 0) {
a = r.D;
c = e.D;
} else if (o > 0) {
a = r.H;
c = e.H;
} else if (n > 0) {
a = r.M;
c = e.M;
} else {
a = r.S;
c = e.S;
}
a > r.S && (i %= 60);
a > r.M && (n %= 60);
a > r.H && (o %= 24);
var l = {
dd: s < 10 ? "0" + s : "" + s,
d: "" + s,
hh: o < 10 ? "0" + o : "" + o,
h: "" + o,
mm: n < 10 ? "0" + n : "" + n,
m: "" + n,
ss: i < 10 ? "0" + i : "" + i,
s: "" + i
};
return c2f.utils.str.formatWithObj(c, l);
};
t.formatDateString = function(t, e, i) {
void 0 === e && (e = "%{YYYY}-%{MM}-%{dd} %{hh}:%{mm}:%{ss}");
void 0 === i && (i = !1);
var r = t instanceof Date ? t : new Date(t), n = i ? r.getUTCFullYear() : r.getFullYear(), o = i ? r.getUTCMonth() + 1 : r.getMonth() + 1, s = i ? r.getUTCDate() : r.getDate(), a = i ? r.getUTCHours() : r.getHours(), c = i ? r.getUTCMinutes() : r.getMinutes(), l = i ? r.getUTCSeconds() : r.getSeconds(), u = {
YYYY: "" + n,
YY: n % 100 < 10 ? "0" + n % 100 : "" + n % 100,
MM: o < 10 ? "0" + o : "" + o,
M: "" + o,
dd: s < 10 ? "0" + s : "" + s,
d: "" + s,
hh: a < 10 ? "0" + a : "" + a,
h: "" + a,
mm: c < 10 ? "0" + c : "" + c,
m: "" + c,
ss: l < 10 ? "0" + l : "" + l,
s: "" + l
};
return c2f.utils.str.formatWithObj(e, u);
};
t.getLocalTick = function() {
return Math.floor(new Date().getTime() / 1e3);
};
t.isSameDay = function(t, e) {
var i = !1;
null != t && null != e && (i = moment(1e3 * t).format("YYYYMMDD") == moment(1e3 * e).format("YYYYMMDD"));
return i;
};
t.isSameWeek = function(t, e) {
var i = !1;
if (null != t && null != e && Math.abs(e - t) < 604800) {
var r = new Date(1e3 * t), n = new Date(1e3 * e), o = r.getDay(), s = n.getDay();
0 == o && (o = 7);
0 == s && (s = 7);
o >= s && (i = !0);
}
return i;
};
t.isToday = function(t) {
var e = this.getSerVerTime();
return this.isSameDay(t, Math.floor(1e3 * e));
};
t.setDefTimeZone = function(t) {
if (null != t && t >= -12 && t <= 12) {
this.timeZone = t;
var e = "Etc/GMT";
t >= 0 && (e += "+");
e += t;
moment.tz.setDefault(e);
} else cc.log("修改时区错误 ==>" + t);
};
t.getSerVerTime = function() {
return c2f.utils.date.getLocalTick();
};
t.getDayStartTS = function(t) {
var e = moment(1e3 * t).startOf("day").format("x");
return Math.floor(e / 1e3);
};
t.getTodayEndTS = function() {
var t = this.getSerVerTime(), e = moment(t).endOf("day").format("x");
return Math.floor(e / 1e3);
};
t.getTodayStartTS = function() {
var t = this.getSerVerTime(), e = moment(t).startOf("day").format("x");
return Math.floor(e / 1e3);
};
t.getTodayRestDur = function() {
var t = this.getSerVerTime(), e = moment(t).endOf("day").format("x"), i = e - t >= 0 ? e - t : 0;
return Math.floor(i / 1e3);
};
t.getTodayPassDur = function() {
var t = this.getSerVerTime(), e = moment(t).startOf("day").format("x"), i = t - e >= 0 ? t - e : 0;
return Math.floor(i / 1e3);
};
t.getTodayTsByOffset = function(t) {
return this.getTodayStartTS() + t;
};
t.formatServerTime = function(t) {
void 0 === t && (t = "YYYY-MM-DD HH:mm:ss");
var e = this.getSerVerTime();
return moment(e).format(t);
};
t.getDateStrWithZone = function(t) {
void 0 === t && (t = "YYYY/MM/DD HH:mm:ss");
var e = this.formatServerTime(t);
this.timeZone >= 0 ? e += " GMT(+" + this.timeZone + ")" : e += " GMT(" + this.timeZone + ")";
return e;
};
t.formatStringByTime = function(t, e) {
return moment(e).format(t);
};
t.getTsBySting = function(t) {
var e = moment(t).format("X");
return Math.floor(e / 1e3);
};
t.getMonthForTime = function(t) {
var e = t || this.getSerVerTime();
return moment(e).format("M");
};
t.getDayForTime = function(t) {
var e = t || this.getSerVerTime();
return moment(e).format("D");
};
t.getHourForTime = function(t) {
var e = t || this.getSerVerTime();
return moment(e).format("HH");
};
t.getMinuteForTime = function(t) {
var e = t || this.getSerVerTime();
return moment(e).format("mm");
};
t.getSecondForTime = function(t) {
var e = t || this.getSerVerTime();
return moment(e).format("ss");
};
t.getYearForTime = function(t) {
var e = t || this.getSerVerTime();
return moment(e).format("YYYY");
};
t.getWeekForTime = function(t) {
var e = t || this.getSerVerTime();
return moment(e).format("E");
};
t.getOffsetByType = function(t, e) {
var i = this.getSerVerTime();
switch (t) {
case "s":
return parseInt("" + (e - i) / 1e3);

case "n":
return parseInt("" + (e - i) / 6e4);

case "h":
return parseInt("" + (e - i) / 36e5);

case "d":
return parseInt("" + (e - i) / 864e5);

case "w":
return parseInt("" + (e - i) / 6048e5);

case "m":
return 12 * this.getOffsetByType("y", e) + this.getMonthForTime(e) - this.getMonthForTime();

case "y":
return this.getYearForTime(e) - this.getYearForTime();
}
};
t.getOffsetDays = function(t) {
var e = 0;
if ("string" == typeof t) {
t.length > 10 && (t = t.substring(0, 10));
e = moment(t + " 00:00:00").format("x");
} else if (t > 1e8) e = 10 == ("" + t).length ? moment(1e3 * t).format("x") : moment(t).format("x"); else {
var i = parseInt("" + t / 1e4), r = parseInt("" + t % 1e4 / 100);
e = moment([ i, r - 1, t % 100 ]).format("x");
}
var n = (this.getSerVerTime() - e) / 1e3, o = Math.floor(n / 86400);
n % 86400 > 0 && e / 1e3 + 86400 * o < this.getTodayStartTS() && (o += 1);
return o;
};
t.getSecondToNextWeek = function(t) {
var e = this.getTodayRestDur(), i = t - this.getWeekForTime() - 1;
return e + (i >= 0 ? 86400 * i : 86400 * (7 + i));
};
t.getSecondToThisWeekTime = function(t, e) {
var i = this.getTodayRestDur();
i += 86400 * (t - this.getWeekForTime() - 1);
var r = e.split(":");
if (r && r.length > 0) {
var n = parseInt(r[0]);
n && (i += 3600 * n);
if (r.length > 1) {
var o = parseInt(r[1]);
o && (i += 60 * o);
if (r.length > 2) {
var s = parseInt(r[2]);
s && (i += s);
}
}
}
return i;
};
t.getSecondToNextWeekTimeByDisSec = function(t) {
var e = t;
t < 0 && (e = 604800 + t);
return e;
};
t.getTimeDifferenceToNextMonthFirstDay = function() {
var t = this.getSerVerTime(), e = (this.getTodayRestDur(), this.getNextMonthFirstDay()), i = Math.abs(e.getTime() - t);
return Math.floor(i / 1e3);
};
t.getNextMonthFirstDay = function() {
var t = this.getSerVerTime(), e = new Date(t), i = e.getMonth() + 1 === 12 ? 0 : e.getMonth() + 1, r = 0 === i ? e.getFullYear() + 1 : e.getFullYear();
return new Date(r, i, 1);
};
t.getSecondByTimeStr = function(t) {
var e = this.getTodayStartTS(), i = t.split(":");
if (i && i.length > 0) {
var r = parseInt(i[0]);
r && (e += 3600 * r);
if (i.length > 1) {
var n = parseInt(i[1]);
n && (e += 60 * n);
if (i.length > 2) {
var o = parseInt(i[2]);
o && (e += o);
}
}
}
return e;
};
t.getSecondToNextHour = function(t) {
var e = this.getSerVerTime(), i = moment(e).endOf("hour").format("x"), r = Math.floor((i - e) / 1e3), n = t - this.getHourForTime() - 1;
return r + (n >= 0 ? 3600 * n : 3600 * (24 + n));
};
t.getDayCountDownCommon = function() {
var t = c2f.utils.date.getSecondToNextWeek(1);
return t > 86400 ? "" + Math.floor(t / 86400) + c2f.language.words(2504) : t > 3600 ? "" + Math.floor(t / 3600) + c2f.language.words(2505) : t > 60 ? "" + Math.floor(t / 60) + c2f.language.words(2506) : "" + t + c2f.language.words(2507);
};
t.getHoursBySceond = function(t, e) {
void 0 === e && (e = 1);
switch (e) {
case 1:
return Math.ceil(t / 3600);

case 2:
return Math.floor(t / 3600);
}
return 0;
};
t.getLastOnLineStr = function(t) {
var e = this.getSerVerTime(), i = {
str: "",
color: "#5D4F49"
};
if (-1 == t) {
i.str = c2f.language.words(20076);
i.color = "#547e49";
return i;
}
var r = e - t, n = Math.floor(r / 60), o = Math.floor(r / 3600), s = Math.floor(r / 86400);
if (n < 5) {
i.str = c2f.language.words(20076);
i.color = "#547e49";
} else i.str = n < 60 ? c2f.language.words(20103).format(n) : o < 24 ? c2f.language.words(20077).format(o) : s < 7 ? c2f.language.words(20078).format(s) : c2f.language.words(20078).format(7);
return i;
};
t.getLastTimeDay = function() {
this.getSerVerTime();
return 0;
};
t.getSecondToNextWeekTime = function(t, e) {
var i = this.getTodayRestDur(), r = t - this.getWeekForTime() - 1;
i += r >= 0 ? 86400 * r : 86400 * (7 + r);
var n = e.split(":");
if (n && n.length > 0) {
var o = parseInt(n[0]);
o && (i += 3600 * o);
if (n.length > 1) {
var s = parseInt(n[1]);
s && (i += 60 * s);
if (n.length > 2) {
var a = parseInt(n[2]);
a && (i += a);
}
}
}
return i;
};
t.getWeekTimeSecondByTimeStr = function(t) {
var e = t.split("/");
return this.getWeekTimeSecondByTime(parseInt(e[0]), e[1]);
};
t.getTimeSecondByTime = function(t) {
var e = 0, i = t.split(":");
if (i && i.length > 0) {
var r = parseInt(i[0]);
r && (e += 3600 * r);
if (i.length > 1) {
var n = parseInt(i[1]);
n && (e += 60 * n);
if (i.length > 2) {
var o = parseInt(i[2]);
o && (e += o);
}
}
}
return e;
};
t.getWeekTimeSecondByTime = function(t, e) {
return 86400 * (t - 1) + this.getTimeSecondByTime(e);
};
t.getServerCurWeekStartSecond = function() {
var t = this.getSerVerTime();
return this.getFirstDayOfWeekTimestamp(1e3 * t) / 1e3;
};
t.getFirstDayOfWeekTimestamp = function(t) {
var e = new Date(t), i = e.getDay(), r = 0 === i ? 6 : i - 1;
e.setDate(e.getDate() - r);
e.setHours(0, 0, 0, 0);
return e.getTime();
};
t.timeZone = void 0;
return t;
}();
c2f.utils.date = n;
cc._RF.pop();
}, {} ],
DelegateComponent: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "4fe44B0sbpJrYP0YPEfyOeW", "DelegateComponent");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.DelegateComponent = void 0;
var s = t("../../define/C2FEnum"), a = cc._decorator.ccclass, c = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.viewParams = null;
return e;
}
e.prototype.add = function() {
this.parallelApplyComponentsFunction(this.node, "onViewOpen", this.viewParams.params);
this.parallelApplyComponentsFunction(this.node, "playInAnima", this.viewParams.params);
"function" == typeof this.viewParams.callbacks.onUIAdded && this.viewParams.callbacks.onUIAdded(this.node, this.viewParams.params);
c2f.event.emit(s.C2FEnum.Event.PopViewAdded, this.node.name);
};
e.prototype.remove = function(t) {
var e = this;
if (this.viewParams.valid) {
this.parallelApplyComponentsFunction(this.node, "beforeViewClose", this.viewParams.params);
this.serialApplyComponentsFunction(this.node, "playOutAnima", this.viewParams.params, function() {
"function" == typeof e.viewParams.callbacks.onUIBeforeRemove ? e.viewParams.callbacks.onUIBeforeRemove(e.node, function() {
e.removed(e.viewParams, t);
}) : e.removed(e.viewParams, t);
});
}
};
e.prototype.removed = function(t, e) {
t.valid = !1;
"function" == typeof t.callbacks.onUIRemoved && t.callbacks.onUIRemoved(this.node, t.params);
if (e) {
this.node.destroy();
c2f.res.release(t.prefabPath, cc.Prefab, t.bundle);
} else this.node.removeFromParent();
c2f.event.emit(s.C2FEnum.Event.PopViewRemoved, this.node.name);
};
e.prototype.onDestroy = function() {
this.parallelApplyComponentsFunction(this.node, "onUIDestroy", this.viewParams.params);
"function" == typeof this.viewParams.callbacks.onUIDestroy && this.viewParams.callbacks.onUIDestroy(this.node, this.viewParams.params);
this.viewParams = null;
};
e.prototype.parallelApplyComponentsFunction = function(t, e, i) {
for (var r = t._components, n = 0; n < r.length; n++) {
var o = r[n], s = o[e];
s && s.call(o, i);
}
};
e.prototype.serialApplyComponentsFunction = function(t, e, i, r) {
var n = 0, o = function() {
var s = t._components;
if (n >= s.length) r && r(); else {
var a = s[n], c = a[e];
if (c) c.call(a, i, function() {
n++;
o();
}); else {
n++;
o();
}
}
};
o();
};
return o([ a ], e);
}(cc.Component);
i.DelegateComponent = c;
cc._RF.pop();
}, {
"../../define/C2FEnum": "C2FEnum"
} ],
DeviceUtils: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "65122bt70pJs6iQdoBKIoaz", "DeviceUtils");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = function() {
function t() {}
t.keepScreenOn = function(t) {
cc.sys.isNative && jsb && jsb.Device.setKeepScreenOn(t);
};
t.vibrate = function(t) {
void 0 === t && (t = .01);
cc.sys.isNative && jsb && jsb.Device.vibrate(t);
};
return t;
}();
c2f.utils.device = r;
cc._RF.pop();
}, {} ],
DirectorHack: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "c4e23hBPA9GoJDOigAPaTyD", "DirectorHack");
Object.defineProperty(i, "__esModule", {
value: !0
});
if (!cc.Director.prototype.__$CCDirectorSpeed$__) {
cc.Director.prototype.__$CCDirectorSpeed$__ = !0;
cc.director.calculateDeltaTime = function(t) {
t || (t = performance.now());
this._deltaTime = t > this._lastUpdate ? (t - this._lastUpdate) / 1e3 : 0;
this._deltaTime *= cc.director.globalGameTimeScale;
this._lastUpdate = t;
};
cc.js.mixin(cc.Director.prototype, {
globalGameTimeScale: 1
});
}
cc._RF.pop();
}, {} ],
DragTarget: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "3c7b8k5mqZHWolLFZi1fmRL", "DragTarget");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = s.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.target = null;
e.startPos = null;
e.currtPos = null;
e.dragEndCb = null;
return e;
}
e.prototype.onEnable = function() {
t.prototype.onEnable && t.prototype.onEnable.call(this);
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
};
e.prototype.onDisable = function() {
t.prototype.onDisable && t.prototype.onDisable.call(this);
this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
};
e.prototype.onTouchStart = function() {
this.currtPos = this.target.getPosition();
this.startPos = this.currtPos.clone();
};
e.prototype.onTouchMove = function(t) {
var e = t.getDelta();
this.currtPos.x = this.currtPos.x + e.x;
this.currtPos.y = this.currtPos.y + e.y;
this.target.setPosition(this.currtPos);
};
e.prototype.onTouchEnd = function(t) {
this.onDragEnd(t);
};
e.prototype.onTouchCancel = function(t) {
this.onDragEnd(t);
};
e.prototype.onDragEnd = function(t) {
if (cc.Vec2.distance(this.currtPos, this.startPos) > 20) {
t.stopPropagation();
this.dragEndCb && this.dragEndCb();
var e = this.target.getComponent(cc.Button);
e && e._onTouchCancel();
}
};
e.prototype.setDragEndCb = function(t) {
this.dragEndCb = t;
};
o([ c(cc.Node) ], e.prototype, "target", void 0);
return o([ a ], e);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {} ],
DropResAnima: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "3ef9ebEiRpJcrF3NU/NSHOz", "DropResAnima");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.DropResAnima = void 0;
var s = cc._decorator, a = s.ccclass, c = (s.property, s.menu), l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.dropAnima = !1;
e.paraSpeed = cc.v2(0, 0);
e.acc = -2e3;
e.usedTime = 0;
e.dropNeedTm = 0;
e.recycleAnima = !1;
e.moveSpeed = 1e3;
e.recycleRad = 0;
e.recyNeedTm = 0;
e.completeCb = null;
e.recyclePos = null;
return e;
}
e.prototype.start = function() {};
e.prototype.onDestroy = function() {
this.completeCb = null;
this.recyclePos = null;
this.paraSpeed = null;
};
e.prototype.setInfo = function(t, e) {
this.completeCb = t;
this.recyclePos = e;
this.play();
};
e.prototype.play = function() {
var t = this;
this.initParam();
var e = Math.random();
cc.tween(this.node).delay(e).call(function() {
t.dropAnima = !0;
}).start();
};
e.prototype.initParam = function() {
var t = c2f.utils.math.randRectInt(50, 100), e = this.node.getPosition(), i = cc.Vec3.ZERO.clone();
i.x = e.x + c2f.utils.math.randRectInt(-100, 100);
i.y = e.y + c2f.utils.math.randRectInt(-100, 100);
if (i.y < e.y) {
var r = Math.sqrt(-2 * t / this.acc), n = Math.sqrt(-2 * (t + e.y - i.y) / this.acc);
this.paraSpeed.x = (i.x - e.x) / (r + n) || 0;
this.paraSpeed.y = t / r - .5 * this.acc * r || 0;
this.dropNeedTm = r + n;
} else {
var o = Math.sqrt(-2 * (t + i.y - e.y) / this.acc), s = Math.sqrt(-2 * t / this.acc);
this.paraSpeed.x = (i.x - e.x) / (o + s) || 0;
this.paraSpeed.y = (t + i.y - e.y) / o - .5 * this.acc * o || 0;
this.dropNeedTm = o + s;
}
var a = c2f.utils.vec.angleEx(i, this.recyclePos);
this.recycleRad = a * c2f.utils.math.deg2Rad;
this.recyNeedTm = cc.Vec3.distance(i, this.recyclePos) / this.moveSpeed;
};
e.prototype.update = function(t) {
if (this.dropAnima) {
this.usedTime += t;
var e = this.paraSpeed.x * t, i = (this.paraSpeed.y + this.acc * this.usedTime) * t + .5 * this.acc * t * t;
c2f.utils.node.offestNodePos(this.node, e, i, 0);
if (this.usedTime > this.dropNeedTm) {
this.dropAnima = !1;
this.usedTime = 0;
this.recycleAnima = !0;
}
}
if (this.recycleAnima) {
this.usedTime += t;
if (this.usedTime > 0) {
var r = this.moveSpeed * Math.cos(this.recycleRad) * t, n = this.moveSpeed * Math.sin(this.recycleRad) * t;
c2f.utils.node.offestNodePos(this.node, r, n, 0);
if (this.usedTime > this.recyNeedTm) {
this.recycleAnima = !1;
this.completeCb && this.completeCb();
}
}
}
};
return o([ a, c("c2f/animation/DropResAnima") ], e);
}(cc.Component);
i.DropResAnima = l;
cc._RF.pop();
}, {} ],
EditorBoxHack: [ function(t, e) {
"use strict";
cc._RF.push(e, "d149fL5M1VOXJmnx3sUtJJu", "EditorBoxHack");
cc.sys.platform === cc.sys.MOBILE_BROWSER && (cc.EditBox._ImplClass.prototype._adjustWindowScroll = function() {
var t = this;
setTimeout(function() {
if (window.scrollY < 100) {
var e = t._delegate;
if (e && e.node) {
var i = e.node.getBoundingBoxToWorld(), r = document.documentElement.scrollHeight || document.body.scrollHeight, n = document.documentElement.clientHeight || document.body.clientHeight, o = cc.winSize.height / r, s = r - n, a = s * o;
console.error("scrollHeight: " + r + ", clientHeight: " + n + ", ratio: " + o);
console.error("keyboardDomHeight: " + s + ", keyboardCocosHeight: " + a);
if (i.yMin >= a) {
console.error("return");
return;
}
var c = (a - i.yMin) / o;
window.scroll({
top: c,
behavior: "smooth"
});
console.error("domDelta: " + c);
} else {
t._elem.scrollIntoView({
block: "start",
inline: "nearest",
behavior: "smooth"
});
console.error("scrollIntoView");
}
}
}, 500);
});
cc._RF.pop();
}, {} ],
EditorTool: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "6d87bgAP0BE96nAN+FMJc9S", "EditorTool");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = function() {
function t() {}
t.load = function() {
return new Promise(function(t) {
t(null);
});
};
t.setClassAttrPropEnum = function() {};
t.refreshSelectedInspector = function() {};
return t;
}();
i.default = r;
cc._RF.pop();
}, {} ],
EncryptUtil: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "c6164cBONlIwZy24msao4eJ", "EncryptUtil");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = function() {
function t() {}
t.utf8Parse = function(t) {
return CryptoJS.enc.Utf8.parse(t);
};
t.aesEncrypt = function(t, e, i) {
var r = this.utf8Parse(e), n = this.utf8Parse(i);
return CryptoJS.AES.encrypt(t, r, {
iv: n,
mode: CryptoJS.mode.CBC,
padding: CryptoJS.pad.Pkcs7
}).toString();
};
t.aesDecrypt = function(t, e, i) {
void 0 === e && (e = null);
void 0 === i && (i = null);
var r = this.utf8Parse(e), n = this.utf8Parse(i), o = CryptoJS.AES.decrypt(t, r, {
iv: n,
mode: CryptoJS.mode.CBC,
padding: CryptoJS.pad.Pkcs7
});
return CryptoJS.enc.Utf8.stringify(o);
};
return t;
}();
c2f.utils.encrypt = r;
cc._RF.pop();
}, {} ],
EngineExtension: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "7fc441tnbFGOZ81Gp+ekVps", "EngineExtension");
Object.defineProperty(i, "__esModule", {
value: !0
});
for (var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n = "0123456789abcdef".split(""), o = {}, s = 0; s < n.length; s++) {
var a = n[s];
o[a] = s;
}
var c = new Array(123);
for (s = 0; s < 123; ++s) c[s] = 64;
for (s = 0; s < 64; ++s) c[r.charCodeAt(s)] = s;
var l = [ "", "", "", "" ], u = l.concat(l, "-", l, "-", l, "-", l, "-", l, l, l), h = u.map(function(t, e) {
return "-" === t ? NaN : e;
}).filter(isFinite), f = function() {
function t() {}
t.prototype.replaceUuidForMulLG = function(t) {
if (c2f.language && !(c2f.language.languages.length <= 1) && c2f.language.current != c2f.config.game.lanuageBase && t && t.uuidList) for (var e = 0; e < t.uuidList.length; e++) {
var i = t.uuidList[e];
i = this.decodeUuid(i);
var r = c2f.language.getLGResUuid(i);
r && (t.uuidList[e] = this.encodeUuid(r));
}
};
t.prototype.encodeUuid = function(t) {
if (36 !== t.length) return t;
var e = [];
e[0] = t[0];
e[1] = t[1];
for (var i = t.replace("-", "").replace("-", "").replace("-", "").replace("-", ""), n = 2, s = 2; n < 32; n += 3) {
var a = o[String.fromCharCode(i.charCodeAt(n))], c = o[String.fromCharCode(i.charCodeAt(n + 1))], l = o[String.fromCharCode(i.charCodeAt(n + 2))];
e[s++] = r[(a << 2) + (c >> 2)];
e[s++] = r[((3 & c) << 4) + l];
}
return e.join("");
};
t.prototype.decodeUuid = function(t) {
if (22 !== t.length) return t;
u[0] = t[0];
u[1] = t[1];
for (var e = 2, i = 2; e < 22; e += 2) {
var r = c[t.charCodeAt(e)], o = c[t.charCodeAt(e + 1)];
u[h[i++]] = n[r >> 2];
u[h[i++]] = n[(3 & r) << 2 | o >> 4];
u[h[i++]] = n[15 & o];
}
return u.join("");
};
t.instance = new t();
return t;
}();
c2f.engineExt = f.instance;
cc._RF.pop();
}, {} ],
EventDefine: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "4ef71BYQw9IB6f2yc9QBuXU", "EventDefine");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.EventData = i.EventMessage = void 0;
(function(t) {
t.GAME_ENTER = "EventMessage.GAME_ENTER";
t.GAME_EXIT = "EventMessage.GAME_EXIT";
t.GAME_RESIZE = "EventMessage.GAME_RESIZE";
t.TIME_SCALE = "EventMessage.TIME_SCALE";
t.GAME_PAUSE = "EventMessage.GAME_PAUSE";
t.GAME_RESUME = "EventMessage.GAME_RESUME";
})(i.EventMessage || (i.EventMessage = {}));
i.EventData = function() {};
cc._RF.pop();
}, {} ],
EventDispatcher: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "71b27i1qnpBg50M1l8A+rzW", "EventDispatcher");
var r = this && this.__spreadArrays || function() {
for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
var r = Array(t), n = 0;
for (e = 0; e < i; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, 
n++) r[n] = o[s];
return r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.EventDispatcher = void 0;
var n = t("./EventGroup"), o = function() {
function t() {
this.group = null;
this._msg = null;
}
t.prototype.setGroupName = function(t) {
this.group = t;
};
t.prototype.on = function(t, e, i) {
null == this._msg && (this._msg = new n.EventGroup(this.group));
this._msg.on(t, e, i);
};
t.prototype.off = function(t) {
this._msg && this._msg.off(t);
};
t.prototype.emit = function(t) {
for (var e, i = [], o = 1; o < arguments.length; o++) i[o - 1] = arguments[o];
null == this._msg && (this._msg = new n.EventGroup(this.group));
(e = this._msg).emit.apply(e, r([ t ], i));
};
t.prototype.offAll = function() {
this._msg && this._msg.clear();
};
t.prototype.destroy = function() {
this.offAll();
this._msg = null;
};
return t;
}();
i.EventDispatcher = o;
cc._RF.pop();
}, {
"./EventGroup": "EventGroup"
} ],
EventGroup: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "028f8M7JRxITYmylHj1PZsy", "EventGroup");
var r = this && this.__spreadArrays || function() {
for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
var r = Array(t), n = 0;
for (e = 0; e < i; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, 
n++) r[n] = o[s];
return r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.EventGroup = void 0;
var n = t("./EventDefine"), o = function() {
function t(t) {
this.events = {};
this.groupEvt = {};
this.group = t;
}
t.prototype.addToList = function(t, e, i, r) {
var o = new n.EventData();
o.event = e;
o.listener = i;
o.object = r;
t.push(o);
};
t.prototype.on = function(t, e, i) {
if (this.group) {
this.groupEvt[this.group] || (this.groupEvt[this.group] = {});
this.groupEvt[this.group][t] || (this.groupEvt[this.group][t] = []);
this.addToList(this.groupEvt[this.group][t], t, e, i);
c2f.event.onGroup(this.group, t, e, i);
} else {
var r = this.events[t];
if (null == r) {
r = [];
this.events[t] = r;
}
this.addToList(r, t, e, i);
c2f.event.on(t, e, i);
}
};
t.prototype.off = function(t) {
if (this.group) {
var e = this.groupEvt[this.group];
if (!e) return;
var i = e[t];
if (!i) return;
for (var r = 0, n = i; r < n.length; r++) {
var o = n[r];
c2f.event.offGroup(this.group, t, o.listener, o.object);
}
delete e[t];
} else {
var s = this.events[t];
if (!s) return;
for (var a = 0, c = s; a < c.length; a++) {
var l = c[a];
c2f.event.off(t, l.listener, l.object);
}
delete this.events[t];
}
};
t.prototype.emit = function(t) {
for (var e, i, n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
this.group ? (e = c2f.event).emitGroup.apply(e, r([ this.group, t ], n)) : (i = c2f.event).emit.apply(i, r([ t ], n));
};
t.prototype.clear = function() {
if (this.group) {
c2f.event.offGroupAll(this.group);
this.groupEvt = {};
} else for (var t in this.events) this.off(t);
};
return t;
}();
i.EventGroup = o;
cc._RF.pop();
}, {
"./EventDefine": "EventDefine"
} ],
EventManager: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "671a3MogpZPVaO49jb3gKm0", "EventManager");
var r = this && this.__spreadArrays || function() {
for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
var r = Array(t), n = 0;
for (e = 0; e < i; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, 
n++) r[n] = o[s];
return r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("./EventDefine"), o = function() {
function t() {
this.events = {};
this.groupEvt = {};
}
t.prototype.addToList = function(t, e, i, r) {
for (var o = t.length, s = 0; s < o; s++) {
var a = t[s];
a.listener == i && a.object == r && cc.warn("名为【" + e + "】的事件重复注册侦听器");
}
var c = new n.EventData();
c.event = e;
c.listener = i;
c.object = r;
t.push(c);
};
t.prototype.on = function(t, e, i) {
if (t && e) {
var r = this.events[t];
if (null == r) {
r = [];
this.events[t] = r;
}
this.addToList(r, t, e, i);
} else cc.warn("注册【" + t + "】事件的侦听器函数为空");
};
t.prototype.onGroup = function(t, e, i, r) {
this.groupEvt[t] || (this.groupEvt[t] = {});
this.groupEvt[t][e] || (this.groupEvt[t][e] = []);
this.addToList(this.groupEvt[t][e], e, i, r);
};
t.prototype.once = function(t, e, i) {
var r = this, n = function(o, s) {
r.off(t, n, i);
n = null;
e.call(i, o, s);
};
this.on(t, n, i);
};
t.prototype.off = function(t, e, i) {
var r = this.events[t];
if (r) {
for (var n = r.length, o = 0; o < n; o++) {
var s = r[o];
if (s.listener == e && s.object == i) {
r.splice(o, 1);
break;
}
}
0 == r.length && delete this.events[t];
} else cc.log("名为【" + t + "】的事件不存在");
};
t.prototype.offGroup = function(t, e, i, r) {
var n = this.groupEvt[t];
if (n) {
var o = n[e];
if (o && !(o.length <= 0)) {
for (var s = o.length, a = 0; a < s; a++) {
var c = o[a];
if (c.listener == i && c.object == r) {
o.splice(a, 1);
break;
}
}
0 == o.length && delete n[e];
}
}
};
t.prototype.offGroupAll = function(t) {
this.groupEvt[t] && (this.groupEvt[t] = {});
};
t.prototype.emit = function(t) {
for (var e, i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
var o = this.events[t];
if (null != o) for (var s = o.concat(), a = s.length, c = 0; c < a; c++) {
var l = s[c];
(e = l.listener).call.apply(e, r([ l.object, t ], i));
}
};
t.prototype.emitGroup = function(t, e) {
for (var i, n = [], o = 2; o < arguments.length; o++) n[o - 2] = arguments[o];
var s = this.groupEvt[t];
if (s) {
var a = s[e];
if (a && !(a.length <= 0)) for (var c = a.concat(), l = c.length, u = 0; u < l; u++) {
var h = c[u];
(i = h.listener).call.apply(i, r([ h.object, e ], n));
}
}
};
t.instance = new t();
return t;
}();
c2f.event = o.instance;
cc._RF.pop();
}, {
"./EventDefine": "EventDefine"
} ],
EventMgrHack: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "d8deckZLXJFBJRISpVYnWW9", "EventMgrHack");
Object.defineProperty(i, "__esModule", {
value: !0
});
if (cc.internal.eventManager && !cc.internal.eventManager.__$CCEventMgrHack$__) {
cc.internal.eventManager.__$CCEventMgrHack$__ = !0;
var r = cc.internal.eventManager;
cc.internal.eventManager._onTouchEventCallback = function(t, e) {
if (!t._isRegistered()) return !1;
var i = e.event, n = i.currentTouch;
i.currentTarget = t._node;
var o, s = !1, a = i.getEventCode(), c = cc.Event.EventTouch;
if (a === c.BEGAN) {
if (!cc.macro.ENABLE_MULTI_TOUCH && r._currentTouch) {
var l = r._currentTouchListener._node;
if (l && l.activeInHierarchy && i.touch.getID() != r._currentTouch._id) return !1;
}
if (t.onTouchBegan && (s = t.onTouchBegan(n, i)) && t._registered) {
t._claimedTouches.push(n);
r._currentTouchListener = t;
r._currentTouch = n;
}
} else if (t._claimedTouches.length > 0 && -1 !== (o = t._claimedTouches.indexOf(n))) {
s = !0;
if (!cc.macro.ENABLE_MULTI_TOUCH && r._currentTouch && r._currentTouch !== n) return !1;
if (a === c.MOVED && t.onTouchMoved) t.onTouchMoved(n, i); else if (a === c.ENDED) {
t.onTouchEnded && t.onTouchEnded(n, i);
t._registered && t._claimedTouches.splice(o, 1);
r._clearCurTouch();
} else if (a === c.CANCELED) {
t.onTouchCancelled && t.onTouchCancelled(n, i);
t._registered && t._claimedTouches.splice(o, 1);
r._clearCurTouch();
}
}
if (i.isStopped()) {
r._updateTouchListeners(i);
return !0;
}
if (s && t.swallowTouches) {
e.needsMutableSet && e.touches.splice(n, 1);
return !0;
}
return !1;
};
}
cc._RF.pop();
}, {} ],
GUI: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "9ae3ckGur1Od7oSTFCIrXfx", "GUI");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GUI = void 0;
var s = cc._decorator, a = s.ccclass, c = (s.menu, function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.portraitDrz = null;
e.landscapeDrz = null;
return e;
}
e.prototype.onLoad = function() {
this.init();
};
e.prototype.init = function() {
if (cc.view.getDesignResolutionSize().width > cc.view.getDesignResolutionSize().height) {
this.landscapeDrz = cc.view.getDesignResolutionSize();
this.portraitDrz = new cc.Size(this.landscapeDrz.height, this.landscapeDrz.width);
} else {
this.portraitDrz = cc.view.getDesignResolutionSize();
this.landscapeDrz = new cc.Size(this.portraitDrz.height, this.portraitDrz.width);
}
this.autoSize();
};
e.prototype.autoSize = function() {
var t, e = cc.view.getDesignResolutionSize();
t = e.width > e.height ? this.landscapeDrz : this.portraitDrz;
var i = cc.winSize.width, r = cc.winSize.height, n = i, o = r;
if (i / r > t.width / t.height) {
n = (o = t.height) * i / r;
this.portrait = !1;
} else {
o = (n = t.width) * r / i;
this.portrait = !0;
}
cc.view.setDesignResolutionSize(n, o, cc.ResolutionPolicy.UNKNOWN);
this.node.width = n;
this.node.height = o;
c2f.log.logView(t, "设计尺寸");
c2f.log.logView(cc.winSize, "屏幕尺寸");
};
e.prototype.fixedWidth = function() {
var t, e = cc.view.getDesignResolutionSize();
t = e.width > e.height ? this.landscapeDrz : this.portraitDrz;
var i, r, n = cc.winSize.width, o = cc.winSize.height;
r = (i = t.width) * o / n;
this.portrait = !0;
cc.view.setDesignResolutionSize(i, r, cc.ResolutionPolicy.UNKNOWN);
this.node.width = i;
this.node.height = r;
};
return o([ a ], e);
}(cc.Component));
i.GUI = c;
cc._RF.pop();
}, {} ],
GameTimer: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "fcbe5z4PSFGdqa3crlmbIkd", "GameTimer");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GameTimer = void 0;
var r = t("./C2FTween"), n = t("../event/EventDefine"), o = function() {
function t() {}
Object.defineProperty(t, "timeScale", {
get: function() {
return this._timeScale;
},
set: function(t) {
if (!(t === this._timeScale || t < 0)) {
this._timeScale = t;
c2f.event.emit(n.EventMessage.TIME_SCALE);
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "realDt", {
get: function() {
return this._realDt;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "scaleDt", {
get: function() {
return this._realDt * this._timeScale;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "gameSec", {
get: function() {
return this._gameSec;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "gameMs", {
get: function() {
return 1e3 * this._gameSec;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "scaleGameSec", {
get: function() {
return this._scaleGameSec;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "scaleGameMs", {
get: function() {
return 1e3 * this._scaleGameSec;
},
enumerable: !1,
configurable: !0
});
t.reset = function() {
this._puaseCount = 0;
this._timeScale = 1;
this._lastTimeScale = 1;
};
t.gamePause = function() {
this._puaseCount++;
if (!(this._puaseCount > 1)) {
this._lastTimeScale = this._timeScale;
this._timeScale = 0;
c2f.event.emit(n.EventMessage.GAME_PAUSE);
}
};
t.gameResume = function() {
if (!(this._puaseCount <= 0)) {
this._puaseCount--;
if (this._puaseCount <= 0) {
this._timeScale = this._lastTimeScale;
c2f.event.emit(n.EventMessage.GAME_RESUME);
}
}
};
t.onDestroy = function() {
r.TWEEN.removeAll();
r.SCALE_TWEEN.removeAll();
};
t.update = function(e) {
t._realDt = e;
t._gameSec += e;
t._scaleGameSec += t.scaleDt;
r.TWEEN.update(t.gameMs);
t.scaleDt > 0 && r.SCALE_TWEEN.update(t.scaleGameMs);
};
t._puaseCount = 0;
t._lastTimeScale = 1;
t._timeScale = 1;
t._realDt = 0;
t._gameSec = 0;
t._scaleGameSec = 0;
return t;
}();
i.GameTimer = o;
cc._RF.pop();
}, {
"../event/EventDefine": "EventDefine",
"./C2FTween": "C2FTween"
} ],
GlobalConfig: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "4c091yr2+xIELEL1AEaMAsH", "GlobalConfig");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GlobalConfig = void 0;
var r = t("../define/C2FConst"), n = function() {
function t(t) {
this._data = null;
var e = t.json;
this._data = Object.freeze(e);
c2f.log.logConfig(this._data, "游戏配置");
}
Object.defineProperty(t.prototype, "version", {
get: function() {
return this._data.config.version;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "package", {
get: function() {
return this._data.config.package;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "frameRate", {
get: function() {
return this._data.config.frameRate;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "localDataKey", {
get: function() {
return this._data.config.localDataKey;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "localDataIv", {
get: function() {
return this._data.config.localDataIv;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "httpServer", {
get: function() {
return this._data.config.httpServer;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "httpTimeout", {
get: function() {
return this._data.config.httpTimeout;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "language", {
get: function() {
return this._data.language;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "languageCfgFile", {
get: function() {
return this._data.language.file || "languageRes";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "languageList", {
get: function() {
return this._data.language.type || [];
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "languageDefault", {
get: function() {
var t = this._data.language.default || r.C2FConst.LanguageKey.zh;
if (t.length <= 0) {
var e = cc.sys.languageCode;
t = (e.indexOf("zh_") >= 0 || e.indexOf("zh-") >= 0) && e.indexOf("tw") >= 0 ? r.C2FConst.LanguageKey.tw : r.C2FConst.LanguageKey.zh;
}
return t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "lanuageBase", {
get: function() {
return this._data.language.base || r.C2FConst.LanguageKey.zh;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "data", {
get: function() {
return this._data;
},
enumerable: !1,
configurable: !0
});
return t;
}();
i.GlobalConfig = n;
cc._RF.pop();
}, {
"../define/C2FConst": "C2FConst"
} ],
GradientColor: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "aa4a7b4k2pLYKSrIwYzSAq4", "GradientColor");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s, a = cc._decorator, c = a.ccclass, l = a.property, u = a.menu, h = (a.requireComponent, 
a.executeInEditMode);
(function(t) {
t[t.horizontal = 1] = "horizontal";
t[t.vertical = 2] = "vertical";
t[t.FourDot = 3] = "FourDot";
})(s || (s = {}));
var f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._director = s.horizontal;
e._beginColor = cc.Color.WHITE;
e._endColor = cc.Color.WHITE;
e._verColors = [ cc.color(255, 255, 255), cc.color(255, 255, 255), cc.color(255, 255, 255), cc.color(255, 255, 255) ];
return e;
}
Object.defineProperty(e.prototype, "director", {
get: function() {
return this._director;
},
set: function(t) {
this._director = t;
this.transBEToArr();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "beginColor", {
get: function() {
return this._beginColor;
},
set: function(t) {
this._beginColor = t;
this.transBEToArr();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "endColor", {
get: function() {
return this._endColor;
},
set: function(t) {
this._endColor = t;
this.transBEToArr();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "verColors", {
get: function() {
return this._verColors;
},
set: function(t) {
this._verColors = t;
this._updateColors();
},
enumerable: !1,
configurable: !0
});
e.prototype.transBEToArr = function() {
this.director == s.horizontal ? this.verColors = [ this._beginColor, this.endColor, this._beginColor, this.endColor ] : this.director == s.vertical && (this.verColors = [ this.endColor, this.endColor, this._beginColor, this._beginColor ]);
};
e.prototype._updateColors = function() {
var t = this.getComponent(cc.RenderComponent);
if (t) {
var e = t._assembler;
if (e instanceof cc.Assembler2D) {
var i = e._renderData.uintVDatas[0];
if (i) for (var r = this.node.color, n = e.floatsPerVert, o = 0, s = e.colorOffset, a = i.length; s < a; s += n) i[s] = (this.verColors[o++] || r)._val;
}
}
};
e.prototype.onEnable = function() {
cc.director.once(cc.Director.EVENT_AFTER_DRAW, this._updateColors, this);
};
e.prototype.onDisable = function() {
cc.director.off(cc.Director.EVENT_AFTER_DRAW, this._updateColors, this);
this.node._renderFlag |= cc.RenderFlow.FLAG_COLOR;
};
o([ l({
type: cc.Enum(s),
tooltip: "渐变方向"
}) ], e.prototype, "_director", void 0);
o([ l({
type: cc.Enum(s),
tooltip: "渐变方向"
}) ], e.prototype, "director", null);
o([ l() ], e.prototype, "_beginColor", void 0);
o([ l({
type: cc.Color,
visible: function() {
return this.director != s.FourDot;
},
tooltip: "左(上)侧颜色"
}) ], e.prototype, "beginColor", null);
o([ l() ], e.prototype, "_endColor", void 0);
o([ l({
type: cc.Color,
visible: function() {
return this.director != s.FourDot;
},
tooltip: "右(下)侧颜色"
}) ], e.prototype, "endColor", null);
o([ l({
type: cc.Color
}) ], e.prototype, "_verColors", void 0);
o([ l({
type: cc.Color,
visible: function() {
return this.director == s.FourDot;
},
tooltip: "四角颜色：0：左下角，1：右下角，2：左上角，3：右上角"
}) ], e.prototype, "verColors", null);
return o([ c, u("c2f/gui/GradientLabel"), h ], e);
}(cc.Component);
i.default = f;
cc._RF.pop();
}, {} ],
HackUtil: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "6f58dHNojxIdJq7oBzYDAfK", "HackUtil");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = function() {
function t() {}
t.setGameSpeed = function(t) {
cc.director.globalGameTimeScale = t;
};
return t;
}();
c2f.utils.hack = r;
cc._RF.pop();
}, {} ],
HttpCode: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "e4ccc7/j9JEIoLIzVaoA+vR", "HttpCode");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HttpCode = void 0;
(function(t) {
t[t.kSuccess = 0] = "kSuccess";
t[t.kTimeout = 1e4] = "kTimeout";
t[t.kUnknown = 10001] = "kUnknown";
t[t.kSessionTimeout = -8] = "kSessionTimeout";
t[t.kIAmInBlocklist = -3013] = "kIAmInBlocklist";
t[t.kUserIsInMyBlocklist = -3014] = "kUserIsInMyBlocklist";
})(i.HttpCode || (i.HttpCode = {}));
cc._RF.pop();
}, {} ],
HttpService: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "76147CUenpDLqR89maJJama", "HttpService");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("./HttpCode"), n = function() {
function t() {}
t.getInst = function() {
this._inst || (this._inst = new t());
return this._inst;
};
t.prototype.doGet = function(t, e, i, r, n) {
void 0 === n && (n = 0);
if (i) {
-1 == t.indexOf("?") && (t += "?");
t += this.getQueryString(i);
}
this.doHttp(t, e, null, "GET", r, n);
};
t.prototype.doPost = function(t, e, i, r, n) {
void 0 === n && (n = 0);
if (e) {
-1 == t.indexOf("?") && (t += "?");
t += this.getQueryString(e);
}
this.doHttp(t, null, i, "POST", r, n);
};
t.prototype.doDownload = function() {};
t.prototype.doHttp = function(t, e, i, r, n, o) {
void 0 === o && (o = 0);
var s = new XMLHttpRequest();
o && (s.timeout = o);
s.responseType = "text";
s.onreadystatechange = this.onReadyStateChange.bind(this, s, n);
s.ontimeout = this.onTimeout.bind(this, s, t, n);
s.onerror = this.onError.bind(this, s, t, n);
s.onabort = this.onAbort.bind(this, s, t, n);
cc.log("http_service, doHttp url=" + t + ", method=" + r + ", parmas=" + i);
s.open(r, t, !0);
e && this.setHttpHeaders(s, e);
cc.sys.isNative && this.setHttpHeaders(s, {
"Accept-Encoding": "gzip,deflate"
});
i && "object" == typeof i && (i = JSON.stringify(i));
s.send(i);
};
t.prototype.onReadyStateChange = function(t, e) {
cc.log("http_service, onReadyStateChange, readyState=" + t.readyState + ", status=" + t.status);
if (4 === t.readyState && t.status >= 200 && t.status < 300) {
c2f.log.logNet("http_service, onReadyStateChange, responseText=" + t.responseText);
var i = null, n = r.HttpCode.kUnknown, o = null;
try {
o = JSON.parse(t.responseText);
} catch (t) {}
if (o && o.code) {
n = o.code;
i = o.content;
} else {
n = r.HttpCode.kSuccess;
i = o;
}
this.notifyCallback(e, n, i);
this.removeXhrEvent(t);
}
};
t.prototype.onTimeout = function(t, e, i) {
cc.warn(e + ", request ontimeout");
this.notifyCallback(i, r.HttpCode.kTimeout, null);
this.removeXhrEvent(t);
};
t.prototype.onError = function(t, e, i) {
cc.warn(e + ", request onerror");
this.notifyCallback(i, r.HttpCode.kUnknown, null);
this.removeXhrEvent(t);
};
t.prototype.onAbort = function(t, e, i) {
cc.warn(e + ", request onabort");
this.notifyCallback(i, r.HttpCode.kUnknown, null);
this.removeXhrEvent(t);
};
t.prototype.removeXhrEvent = function(t) {
t.ontimeout = null;
t.onerror = null;
t.onabort = null;
t.onreadystatechange = null;
};
t.prototype.notifyCallback = function(t, e, i) {
t && t(e, i);
};
t.prototype.setHttpHeaders = function(t, e) {
for (var i in e) t.setRequestHeader(i, e[i]);
};
t.prototype.getQueryString = function(t) {
var e = [];
for (var i in t) e.push(i + "=" + t[i]);
return e.join("&");
};
return t;
}();
c2f.http = n.getInst();
cc._RF.pop();
}, {
"./HttpCode": "HttpCode"
} ],
INetToUI: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "45ab3/9Pf5LhZsTdSAdgJAf", "INetToUI");
Object.defineProperty(i, "__esModule", {
value: !0
});
cc._RF.pop();
}, {} ],
ImageUtil: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "59d39d+q4JE+J+yRc2zxkBc", "ImageUtil");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = function() {
function t() {}
t.getPixelColor = function(t, e, i) {
var r = document.createElement("canvas"), n = r.getContext("2d");
r.width = t.width;
r.height = t.height;
var o = t.getHtmlElementObj();
n.drawImage(o, 0, 0, t.width, t.height);
var s = n.getImageData(0, 0, t.width, t.height), a = (i - 1) * t.width * 4 + 4 * (e - 1), c = s.data.slice(a, a + 4), l = new cc.Color(c[0], c[1], c[2], c[3]);
o.remove();
r.remove();
return l;
};
t.imageToBase64 = function(t, e) {
return new Promise(function(i) {
var r, n = null === (r = /\.png|\.jpg|\.jpeg/.exec(t)) || void 0 === r ? void 0 : r[0];
if ([ ".png", ".jpg", ".jpeg" ].includes(n)) {
var o = document.createElement("canvas"), s = o.getContext("2d"), a = new Image();
a.src = t;
a.onload = function() {
o.height = a.height;
o.width = a.width;
s.drawImage(a, 0, 0);
n = ".jpg" === n ? "jpeg" : n.replace(".", "");
var t = o.toDataURL("image/" + n);
e && e(t);
i(t);
a.remove();
o.remove();
};
} else {
console.warn("Not a jpg/jpeg or png resource!");
e && e("");
i("");
}
});
};
t.base64ToTexture = function(t) {
var e = document.createElement("img");
e.src = t;
var i = new cc.Texture2D();
i.initWithElement(e);
e.remove();
return i;
};
t.base64ToBlob = function(t) {
for (var e = t.split(","), i = /image\/\w+|;/.exec(e[0])[0], r = window.atob(e[1]), n = new ArrayBuffer(r.length), o = new Uint8Array(n), s = 0; s < r.length; s++) o[s] = 255 & r.charCodeAt(s);
return new Blob([ o ], {
type: i
});
};
return t;
}();
c2f.utils.image = r;
cc._RF.pop();
}, {} ],
JsonOb: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "c87781WJc9H6LKVJHRn4Kbs", "JsonOb");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.JsonOb = void 0;
var r = Object.prototype, n = {
obj: "[object Object]",
array: "[object Array]"
}, o = [ "push", "pop", "shift", "unshift", "short", "reverse", "splice" ], s = function() {
function t(t, e) {
r.toString.call(t) !== n.obj && r.toString.call(t) !== n.array && console.error("请传入一个对象或数组");
this._callback = e;
this.observe(t);
}
t.prototype.observe = function(t, e) {
var i = this;
r.toString.call(t) === n.array && this.overrideArrayProto(t, e);
Object.keys(t).forEach(function(o) {
var s = i, a = t[o], c = e && e.slice();
c ? c.push(o) : c = [ o ];
Object.defineProperty(t, o, {
get: function() {
return a;
},
set: function(t) {
if (a !== t) {
"[object Object]" === r.toString.call(t) && s.observe(t, c);
s._callback(t, a, c);
a = t;
}
}
});
r.toString.call(t[o]) !== n.obj && r.toString.call(t[o]) !== n.array || i.observe(t[o], c);
}, this);
};
t.prototype.overrideArrayProto = function(t, e) {
var i, r = Array.prototype, n = Object.create(Array.prototype), s = this;
o.forEach(function(t) {
Object.defineProperty(n, t, {
value: function() {
var n = this.slice();
i = r[t].apply(this, arguments);
s.observe(this, e);
s._callback(this, n, e);
return i;
}
});
});
t.__proto__ = n;
};
return t;
}();
i.JsonOb = s;
cc._RF.pop();
}, {} ],
JsonUtil: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "3a3e6eBWN9Dgp1w6XQU6jFH", "JsonUtil");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = "config/game/", n = new Map(), o = function() {
function t() {}
t.get = function(t) {
if (n.has(t)) return n.get(t);
};
t.load = function(t, e) {
if (n.has(t)) e(n.get(t)); else {
var i = r + t;
cc.resources.load(i, cc.JsonAsset, function(i, r) {
i && cc.error(i.message);
n.set(t, r.json);
e(r.json);
});
}
};
t.loadAsync = function(t) {
return new Promise(function(e) {
if (n.has(t)) e(n.get(t)); else {
var i = r + t;
cc.resources.load(i, cc.JsonAsset, function(i, r) {
i && cc.error(i.message);
n.set(t, r.json);
e(r.json);
});
}
});
};
t.release = function(t) {
var e = r + t;
n.delete(t);
cc.resources.release(e);
};
t.parse = function(t, e) {
void 0 === e && (e = null);
var i = e;
try {
i = JSON.parse(t);
} catch (e) {
c2f.log.logBusiness("failed to parse json:", t);
}
return i;
};
return t;
}();
c2f.utils.json = o;
cc._RF.pop();
}, {} ],
JumpSelf: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "cfbd3YNkF9FMJ5N/GM4LDfG", "JumpSelf");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.JumpSelf = void 0;
var s = cc._decorator, a = s.ccclass, c = s.property, l = s.menu, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scaleMin = cc.v2(.6, .6);
e.scaleMax = cc.v2(1.5, 1.5);
e.intervalDur = 1;
e.jumpHeight = 50;
e.stepDur = .1;
e.playOnLoad = !0;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {
var t = this;
this.playOnLoad && this.scheduleOnce(function() {
t.playAnima();
});
};
e.prototype.resetState = function() {
this.node.setScale(1, 1, 1);
this.node.setPosition(0, 0, 0);
};
e.prototype.stopAnima = function() {
cc.Tween.stopAllByTarget(this.node);
this.resetState();
};
e.prototype.playAnima = function() {
this.stopAnima();
var t = cc.tween(this.node).to(this.stepDur, {
scaleX: this.scaleMax.x,
scaleY: this.scaleMin.y
}).to(this.stepDur, {
scaleX: this.scaleMin.x,
scaleY: this.scaleMax.y
}).to(this.stepDur, {
position: cc.v3(0, this.jumpHeight, 0),
scale: 1
}).to(this.stepDur, {
position: cc.v3(0, 0, 0),
scaleX: 1,
scaleY: this.scaleMax.y
}).to(this.stepDur, {
scaleX: this.scaleMax.x,
scaleY: this.scaleMin.y
}).to(this.stepDur, {
scale: 1
}), e = cc.tween(this.node).delay(this.intervalDur);
cc.tween(this.node).sequence(t, e).repeatForever().start();
};
o([ c({
tooltip: "最小缩放"
}) ], e.prototype, "scaleMin", void 0);
o([ c({
tooltip: "最大缩放"
}) ], e.prototype, "scaleMax", void 0);
o([ c({
serializable: !0,
tooltip: "动画间隔"
}) ], e.prototype, "intervalDur", void 0);
o([ c({
serializable: !0,
tooltip: "跳跃高度"
}) ], e.prototype, "jumpHeight", void 0);
o([ c({
serializable: !0,
tooltip: "分步执行时长"
}) ], e.prototype, "stepDur", void 0);
o([ c({
serializable: !0,
tooltip: "自动播放"
}) ], e.prototype, "playOnLoad", void 0);
return o([ a, l("c2f/animation/JumpSelf") ], e);
}(cc.Component);
i.JumpSelf = u;
cc._RF.pop();
}, {} ],
LanguageData: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "10293AfmOhAqrmgCSIfI8dc", "LanguageData");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.LanguageData = void 0;
var r = t("../../define/C2FConst"), n = t("../../game/words"), o = function() {
function t() {}
t.getLangByID = function(e, i) {
void 0 === i && (i = "");
var r = t.data[e] || "WD_" + e;
return c2f.utils.str.formatWords(r, i);
};
t.current = r.C2FConst.LanguageKey.zh;
t.data = n.words;
return t;
}();
i.LanguageData = o;
cc._RF.pop();
}, {
"../../define/C2FConst": "C2FConst",
"../../game/words": "words"
} ],
LanguageLabel: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "e5ba4B23rFGorAi6j3RHDOK", "LanguageLabel");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
t("../../core/language/LanguageData");
var s = t("../../define/C2FEnum"), a = cc._decorator, c = a.ccclass, l = a.property, u = a.menu, h = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._dataID = "";
e._formatV = "";
return e;
}
Object.defineProperty(e.prototype, "dataID", {
get: function() {
return this._dataID || "";
},
set: function(t) {
this._dataID = t;
this.onDataIDChanged();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "formatV", {
get: function() {
return this._formatV || "";
},
set: function(t) {
this._formatV = t;
this.onDataIDChanged();
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
this.onDataIDChanged();
cc.director.on(s.C2FEnum.ExtEvent.SwitchLanguage, this.onDataIDChanged, this);
};
e.prototype.onDestroy = function() {
cc.director.off(s.C2FEnum.ExtEvent.SwitchLanguage, this.onDataIDChanged, this);
};
e.prototype.onDataIDChanged = function() {
this.refreshFromWords();
};
e.prototype.refreshFromWords = function() {
if (this._dataID) {
var t, e = Number(this.dataID), i = this.formatV;
i.length <= 0 && (i = "UIV_Null");
t = c2f.language.getLangByID(e, i);
var r = this.getComponent(cc.Label);
r || (r = this.getComponent(cc.RichText)) ? r.string = t : cc.warn("[LanguageLabel], 该节点没有cc.Label || cc.RichText组件");
}
};
o([ l({
serializable: !0
}) ], e.prototype, "_dataID", void 0);
o([ l({
type: cc.String,
serializable: !0
}) ], e.prototype, "dataID", null);
o([ l({
serializable: !0
}) ], e.prototype, "_formatV", void 0);
o([ l({
type: cc.String,
serializable: !0
}) ], e.prototype, "formatV", null);
return o([ c, u("c2f/language/LanguageLabel") ], e);
}(cc.Component);
i.default = h;
cc._RF.pop();
}, {
"../../core/language/LanguageData": "LanguageData",
"../../define/C2FEnum": "C2FEnum"
} ],
LanguageManager: [ function(require, module, exports) {
"use strict";
cc._RF.push(module, "8de4em2xv5EGJl6DxA8jLN0", "LanguageManager");
var __extends = this && this.__extends || (extendStatics = function(t, e) {
return (extendStatics = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
extendStatics(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), extendStatics, __awaiter = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function s(t) {
try {
c(r.next(t));
} catch (t) {
o(t);
}
}
function a(t) {
try {
c(r.throw(t));
} catch (t) {
o(t);
}
}
function c(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(s, a);
var e;
}
c((r = r.apply(t, e || [])).next());
});
}, __generator = this && this.__generator || function(t, e) {
var i, r, n, o, s = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function a(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;s; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
s.label++;
return {
value: o[1],
done: !1
};

case 5:
s.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = s.ops.pop();
s.trys.pop();
continue;

default:
if (!(n = s.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
s = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
s.label = o[1];
break;
}
if (6 === o[0] && s.label < n[1]) {
s.label = n[1];
n = o;
break;
}
if (n && s.label < n[2]) {
s.label = n[2];
s.ops.push(o);
break;
}
n[2] && s.ops.pop();
s.trys.pop();
continue;
}
o = e.call(t, s);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
}
if (5 & o[0]) throw o[1];
return {
value: o[0] ? o[1] : void 0,
done: !0
};
}
};
Object.defineProperty(exports, "__esModule", {
value: !0
});
exports.LanguageEvent = void 0;
var C2FConst_1 = require("../../define/C2FConst"), EventDispatcher_1 = require("../event/EventDispatcher"), LanguageData_1 = require("./LanguageData"), words_1 = require("../../game/words"), LanguageEvent;
(function(t) {
t.CHANGE = "LanguageEvent.CHANGE";
t.RELEASE_RES = "LanguageEvent.RELEASE_RES";
})(LanguageEvent = exports.LanguageEvent || (exports.LanguageEvent = {}));
var LanguageManager = function(_super) {
__extends(LanguageManager, _super);
function LanguageManager() {
var t = _super.call(this) || this;
t.mulLGRes = {};
return t;
}
Object.defineProperty(LanguageManager.prototype, "current", {
get: function() {
return LanguageData_1.LanguageData.current;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(LanguageManager.prototype, "languages", {
get: function() {
return c2f.config.game ? c2f.config.game.languageList : [];
},
enumerable: !1,
configurable: !0
});
LanguageManager.prototype.isExist = function(t) {
return this.languages.indexOf(t) > -1;
};
LanguageManager.prototype.getLangByID = function(t, e) {
void 0 === e && (e = "");
return LanguageData_1.LanguageData.getLangByID(t, e);
};
LanguageManager.prototype.words = function(t) {
for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
for (var r = "", n = 0, o = e; n < o.length; n++) {
var s = o[n];
r.length <= 0 ? r = "" + s : r += "|" + s;
}
return LanguageData_1.LanguageData.getLangByID(t, r);
};
LanguageManager.prototype.initLanguage = function(t) {
return __awaiter(this, void 0, void 0, function() {
var e;
return __generator(this, function(i) {
switch (i.label) {
case 0:
if (!(this.languages.length > 0)) return [ 3, 2 ];
e = c2f.storage.getPlainItem(C2FConst_1.C2FConst.localLGSet, null);
LanguageData_1.LanguageData.current = e || c2f.config.game.languageDefault;
return [ 4, this.resetCurWords() ];

case 1:
i.sent();
this.loadLGResJson(t);
return [ 3, 3 ];

case 2:
t && t();
i.label = 3;

case 3:
return [ 2 ];
}
});
});
};
LanguageManager.prototype.loadLGResJson = function(t) {
var e = this, i = "statistic/" + c2f.config.game.languageCfgFile;
c2f.res.load(cc.resources.name, i, cc.JsonAsset, function(r, n) {
r ? cc.error(r.message) : e.mulLGRes = n.json;
c2f.res.release(i, cc.JsonAsset, cc.resources.name);
t && t();
});
};
LanguageManager.prototype.getLGResUuid = function(t) {
var e = null;
if (this.languages.length > 0) {
var i = this.mulLGRes[t];
i && i[this.current] && (e = i[this.current]);
}
return e;
};
LanguageManager.prototype.resetCurWords = function() {
return __awaiter(this, void 0, void 0, function() {
var bundleName, url, assetRes;
return __generator(this, function(_a) {
switch (_a.label) {
case 0:
if (this.current != C2FConst_1.C2FConst.LanguageKey.zh) return [ 3, 1 ];
LanguageData_1.LanguageData.data = words_1.words;
return [ 3, 3 ];

case 1:
bundleName = C2FConst_1.C2FConst.mulBundlePre + this.current;
url = "ab:" + bundleName + "/words";
return [ 4, c2f.res.loadOne(url, cc.TextAsset) ];

case 2:
assetRes = _a.sent();
assetRes && assetRes.text && (LanguageData_1.LanguageData.data = eval(assetRes.text));
c2f.res.release(url, cc.TextAsset);
_a.label = 3;

case 3:
return [ 2 ];
}
});
});
};
LanguageManager.getInstance = function() {
this._instance || (this._instance = new LanguageManager());
return this._instance;
};
LanguageManager._instance = null;
return LanguageManager;
}(EventDispatcher_1.EventDispatcher);
c2f.language = LanguageManager.getInstance();
cc._RF.pop();
}, {
"../../define/C2FConst": "C2FConst",
"../../game/words": "words",
"../event/EventDispatcher": "EventDispatcher",
"./LanguageData": "LanguageData"
} ],
LayerDialog: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "38fb8yZ9OtBtoQzOLoU89mm", "LayerDialog");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
i.LayerDialog = void 0;
var o = t("../../define/C2FUIDef"), s = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.queue = [];
e.queue_params = [];
return e;
}
e.prototype.add = function(t, e, i) {
var r = this;
this.black.enabled = !0;
var n = t.prefab, s = this.getUuid(n), a = this.ui_nodes.get(s);
if (null == a) {
(a = new o.ViewParams()).uuid = this.getUuid(n);
a.prefabPath = n;
a.callbacks = i || {};
var c = a.callbacks.onUIRemoved;
a.callbacks.onUIRemoved = function(t, e) {
c && c(t, e);
setTimeout(function() {
r.next();
}, 0);
};
a.valid = !0;
this.ui_nodes.set(a.uuid, a);
}
if (this.current && this.current.valid) {
if (this.current.prefabPath != n) {
this.queue.push(a);
this.queue_params.push(e || {});
}
} else {
a.params = e || {};
this.current = a;
this.load(a, t.bundle);
}
return s;
};
e.prototype.setBlackDisable = function() {
0 == this.queue.length && (this.black.enabled = !1);
};
e.prototype.next = function() {
if (this.queue.length > 0) {
this.current = this.queue.shift();
this.current.params = this.queue_params.shift();
this.current.node ? this.createNode(this.current) : this.load(this.current);
}
};
return e;
}(t("./LayerPopup").LayerPopUp);
i.LayerDialog = s;
cc._RF.pop();
}, {
"../../define/C2FUIDef": "C2FUIDef",
"./LayerPopup": "LayerPopup"
} ],
LayerEffect: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "5ca728WVG9D6LwoitQVkul0", "LayerEffect");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
i.LayerEffect = void 0;
var o, s = t("./LayerUI"), a = t("../../component/common/WaterWaveScreen");
(function(t) {
t.touchEfx = "commonRes/prefab/TouchEffect";
})(o || (o = {}));
var c = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.addWaterWaveEfx = function(t) {
var e = this.getChildByName("waterWave");
if (e) (i = e.getComponent(a.default)) && i.setDuration(t); else {
var i, r = new cc.Node("waterWave");
this.addChild(r);
(i = r.addComponent(a.default)) && i.setDuration(t);
}
};
return e;
}(s.LayerUI);
i.LayerEffect = c;
cc._RF.pop();
}, {
"../../component/common/WaterWaveScreen": "WaterWaveScreen",
"./LayerUI": "LayerUI"
} ],
LayerManager: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "d8bbcaT+ExKEYLcYDDJw3RY", "LayerManager");
var r = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function s(t) {
try {
c(r.next(t));
} catch (t) {
o(t);
}
}
function a(t) {
try {
c(r.throw(t));
} catch (t) {
o(t);
}
}
function c(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(s, a);
var e;
}
c((r = r.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var i, r, n, o, s = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function a(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;s; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
s.label++;
return {
value: o[1],
done: !1
};

case 5:
s.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = s.ops.pop();
s.trys.pop();
continue;

default:
if (!(n = s.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
s = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
s.label = o[1];
break;
}
if (6 === o[0] && s.label < n[1]) {
s.label = n[1];
n = o;
break;
}
if (n && s.label < n[2]) {
s.label = n[2];
s.ops.push(o);
break;
}
n[2] && s.ops.pop();
s.trys.pop();
continue;
}
o = e.call(t, s);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
}
if (5 & o[0]) throw o[1];
return {
value: o[0] ? o[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.LayerManager = void 0;
var o = t("../GUI"), s = t("../../define/C2FUIDef"), a = t("./DelegateComponent"), c = t("./LayerDialog"), l = t("./LayerNotify"), u = t("./LayerPopup"), h = t("./LayerUI"), f = t("./UIMap"), p = function() {
function t() {
this.uiCfgs = {};
}
Object.defineProperty(t.prototype, "gameFont", {
get: function() {
return this._gameFont;
},
set: function(t) {
this._gameFont = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "portrait", {
get: function() {
return this.root.getComponent(o.GUI).portrait;
},
enumerable: !1,
configurable: !0
});
t.prototype.createNode = function(t) {
var e = new cc.Node(t), i = e.addComponent(cc.Widget);
i.isAlignLeft = i.isAlignRight = i.isAlignTop = i.isAlignBottom = !0;
i.left = i.right = i.top = i.bottom = 0;
i.alignMode = cc.Widget.AlignMode.ON_WINDOW_RESIZE;
i.enabled = !0;
return e;
};
t.prototype.init = function(t) {
this.root = t;
this.camera = this.root.parent.getChildByName("Camera").getComponent(cc.Camera);
this.game = this.createNode(s.LayerType.Game);
this.ui = new h.LayerUI(s.LayerType.UI);
this.popup = new u.LayerPopUp(s.LayerType.PopUp);
this.dialog = new c.LayerDialog(s.LayerType.Dialog);
this.system = new c.LayerDialog(s.LayerType.System);
this.notify = new l.LayerNotify(s.LayerType.Notify);
this.guide = new h.LayerUI(s.LayerType.Guide);
t.addChild(this.game);
t.addChild(this.ui);
t.addChild(this.popup);
t.addChild(this.dialog);
t.addChild(this.system);
t.addChild(this.notify);
t.addChild(this.guide);
};
t.prototype.addViewList = function(t) {
this.uiCfgs || (this.uiCfgs = {});
if (Object.keys(this.uiCfgs).length <= 0) this.uiCfgs = t; else for (var e in t) this.uiCfgs[e] = t[e];
};
t.prototype.addWaterWaveEfx = function() {};
t.prototype.notifyTxt = function(t, e) {
void 0 === e && (e = !0);
this.notify.notifyTxt(t, e);
};
t.prototype.showLoading = function(t) {
void 0 === t && (t = "");
this.notify.showLoading(t);
};
t.prototype.hideLoading = function(t) {
void 0 === t && (t = !1);
this.notify.hideLoading(t);
};
t.prototype.popNotifyNode = function(t) {
this.notify.addChild(t);
};
t.prototype.setConfig = function(t, e) {
this.uiCfgs[t] = e;
};
t.prototype.setUIMap = function(t) {
null == this.uiMap && (this.uiMap = new f.UIMap());
this.uiMap.init(t);
};
t.prototype.setPlayerTopPanel = function(t) {
this.ui.setTopPanel(t);
};
t.prototype.open = function(t, e, i) {
void 0 === e && (e = null);
var r = this.uiCfgs[t];
if (null != r) switch (r.layer) {
case s.LayerType.UI:
case s.LayerType.PopUp:
this.ui.add(r, e, i);
break;

case s.LayerType.Dialog:
this.dialog.add(r, e, i);
break;

case s.LayerType.System:
this.system.add(r, e, i);
break;

case s.LayerType.Guide:
this.guide.add(r, e, i);
break;

case s.LayerType.Notify:
this.notify.add(r, e, i);
} else cc.warn("打开编号为【" + t + "】的界面失败，配置信息不存在");
};
t.prototype.openAsync = function(t, e) {
void 0 === e && (e = null);
return r(this, void 0, Promise, function() {
var i = this;
return n(this, function() {
return [ 2, new Promise(function(r) {
var n = {
onUIAdded: function(t) {
r(t);
}
};
i.open(t, e, n);
}) ];
});
});
};
t.prototype.has = function(t) {
var e = this.uiCfgs[t];
if (null == e) {
cc.warn("编号为【" + t + "】的界面失败，配置信息不存在");
return !1;
}
var i = !1;
switch (e.layer) {
case s.LayerType.UI:
case s.LayerType.PopUp:
i = this.ui.has(e.prefab);
break;

case s.LayerType.Dialog:
i = this.dialog.has(e.prefab);
break;

case s.LayerType.System:
i = this.system.has(e.prefab);
break;

case s.LayerType.Guide:
i = this.guide.has(e.prefab);
}
return i;
};
t.prototype.get = function(t) {
var e = this.uiCfgs[t];
if (null == e) {
cc.warn("编号为【" + t + "】的界面失败，配置信息不存在");
return [];
}
var i = [];
switch (e.layer) {
case s.LayerType.UI:
case s.LayerType.PopUp:
i = this.ui.get(e.prefab);
break;

case s.LayerType.Dialog:
i = this.dialog.get(e.prefab);
break;

case s.LayerType.System:
i = this.system.get(e.prefab);
break;

case s.LayerType.Guide:
i = this.guide.get(e.prefab);
break;

case s.LayerType.Notify:
i = this.notify.get(e.prefab);
}
(!i || i.length <= 0) && cc.warn("don't find target layer!");
return i;
};
t.prototype.getViewParam = function(t) {
var e = this.uiCfgs[t];
if (null == e) {
cc.warn("编号为【" + t + "】的界面失败，配置信息不存在");
return null;
}
var i = null;
switch (e.layer) {
case s.LayerType.UI:
case s.LayerType.PopUp:
i = this.ui.getViewParam(e);
break;

case s.LayerType.Dialog:
i = this.dialog.getViewParam(e);
break;

case s.LayerType.System:
i = this.system.getViewParam(e);
break;

case s.LayerType.Guide:
case s.LayerType.Notify:
i = this.guide.getViewParam(e);
}
return i;
};
t.prototype.remove = function(t, e) {
void 0 === e && (e = !0);
var i = this.uiCfgs[t];
if (null != i) switch (i.layer) {
case s.LayerType.UI:
case s.LayerType.PopUp:
this.ui.remove(i.prefab, e);
break;

case s.LayerType.Dialog:
this.dialog.remove(i.prefab, e);
break;

case s.LayerType.System:
this.system.remove(i.prefab, e);
break;

case s.LayerType.Guide:
this.guide.remove(i.prefab, e);
} else cc.warn("删除编号为【" + t + "】的界面失败，配置信息不存在");
};
t.prototype.removeByNode = function(t, e) {
void 0 === e && (e = !0);
for (var i = null, r = 0, n = [ this.ui, this.popup, this.dialog, this.system, this.guide ]; r < n.length; r++) {
var o = n[r], s = o.getPrefabUrlByNode(t);
if (s && s.length > 0) {
i = {
layer: o,
prefab: s
};
break;
}
}
if (i) i.layer.remove(i.prefab, e); else {
c2f.log.logBusiness("gui.removeByNode don't find target node!! name:", t.name);
if (t instanceof cc.Node) {
var c = t.getComponent(a.DelegateComponent);
if (c && c.viewParams) t.parent.removeByUuid(c.viewParams.uuid, e); else {
cc.warn("当前删除的node不是通过界面管理器添加到舞台上");
t.destroy();
}
}
}
};
t.prototype.removeAllAboveUI = function(t) {
var e = this.uiCfgs[t];
!e || e.layer != s.LayerType.UI && e.layer != s.LayerType.PopUp || this.ui.has(e.prefab) && this.ui.removeAboveUI(e.prefab);
};
t.prototype.waitCloseLayer = function(t) {
return r(this, void 0, Promise, function() {
var e;
return n(this, function(i) {
switch (i.label) {
case 0:
return (e = this.getViewParam(t)) ? [ 4, new Promise(function(t) {
if (e.callbacks.onUIRemoved) {
var i = e.callbacks.onUIRemoved;
e.callbacks.onUIRemoved = function() {
for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
i.apply(void 0, e);
t();
};
} else e.callbacks.onUIRemoved = t;
}) ] : [ 2 ];

case 1:
return [ 2, i.sent() ];
}
});
});
};
t.prototype.clear = function(t, e) {
void 0 === t && (t = !1);
void 0 === e && (e = []);
var i = [];
if (e && e.length > 0) for (var r = 0, n = e; r < n.length; r++) {
var o = n[r], s = this.uiCfgs[o];
i.push(s.prefab);
}
this.ui.clearUI(t, i);
this.popup.clearUI(t, i);
this.dialog.clearUI(t, i);
this.system.clearUI(t, i);
this.notify.clearUI(t, i);
this.guide.clearUI(t, i);
};
t.prototype.getTopsideView = function() {
for (var t = null, e = 0, i = [ this.system, this.dialog, this.ui ]; e < i.length; e++) {
var r = i[e].getTopsideView();
if (r) {
t = r;
break;
}
}
return t;
};
t.prototype.hideAnimaPlayingView = function() {
this.ui.hideAnimaPlayingView();
};
t.prototype.showAnimaPlayingView = function() {
this.ui.showAnimaPlayingView();
};
t.prototype.lockScreen = function(t) {
var e = this;
void 0 === t && (t = 0);
var i = cc.director.getScene(), r = i.getChildByName("lockScreen");
if (!r) {
var n = (r = new cc.Node()).addComponent(cc.BlockInputEvents);
r.parent = i;
r.zIndex = 1e4;
r.width = cc.winSize.width;
r.height = cc.winSize.height;
r.x = .5 * cc.winSize.width;
r.y = .5 * cc.winSize.height;
r.name = "lockScreen";
t && n.scheduleOnce(function() {
e.unlockScreen();
}, t);
}
};
t.prototype.unlockScreen = function() {
var t = cc.director.getScene().getChildByName("lockScreen");
if (t) {
t.getComponent(cc.BlockInputEvents).unscheduleAllCallbacks();
t.destroy();
t = void 0;
}
};
t.prototype.autoSize = function() {
this.root.getComponent(o.GUI).autoSize();
};
t.prototype.fixedWidth = function() {
this.root.getComponent(o.GUI).fixedWidth();
};
t.getInstance = function() {
this._instance || (this._instance = new t());
return this._instance;
};
t._instance = null;
return t;
}();
i.LayerManager = p;
c2f.gui = p.getInstance();
cc._RF.pop();
}, {
"../../define/C2FUIDef": "C2FUIDef",
"../GUI": "GUI",
"./DelegateComponent": "DelegateComponent",
"./LayerDialog": "LayerDialog",
"./LayerNotify": "LayerNotify",
"./LayerPopup": "LayerPopup",
"./LayerUI": "LayerUI",
"./UIMap": "UIMap"
} ],
LayerNotify: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "5e20egSlYxDypVeDclJOuBC", "LayerNotify");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
i.LayerNotify = void 0;
var o, s = t("../view/Notify"), a = t("../../define/C2FUIDef"), c = t("./DelegateComponent"), l = t("./LayerUI"), u = t("../../define/C2FConst");
(function(t) {
t.notify = "commonRes/prefab/Notify";
t.loading = "commonRes/prefab/LoadingTips";
})(o || (o = {}));
var h = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.loadingCnt = 0;
return e;
}
e.prototype.notifyTxt = function(t, e) {
var i = new a.ViewParams();
i.uuid = this.getUuid(o.notify);
i.prefabPath = o.notify;
i.params = {
content: t,
useI18n: e
};
i.callbacks = {};
i.valid = !0;
this.ui_nodes.set(i.uuid, i);
this.loadSpecial(i);
};
e.prototype.showLoading = function(t) {
this.loadingCnt++;
if (!(this.get(o.loading).length > 0)) {
var e = new a.ViewParams();
e.uuid = this.getUuid(o.loading);
e.prefabPath = o.loading;
e.params = {
content: t
};
e.callbacks = {};
e.valid = !0;
this.ui_nodes.set(e.uuid, e);
this.loadSpecial(e);
}
};
e.prototype.hideLoading = function(t) {
this.loadingCnt--;
if (this.loadingCnt <= 0 || t) {
this.loadingCnt = 0;
this.get(o.loading) && this.remove(o.loading, !1);
}
};
e.prototype.loadSpecial = function(t) {
var e = this;
c2f.res.load(u.C2FConst.fwBundleName, t.prefabPath, function(i, r) {
i && cc.error(i);
if (t.prefabPath != o.loading || e.loadingCnt > 0) {
var n = c2f.res.instantiate(r);
t.node = n;
n.addComponent(c.DelegateComponent).viewParams = t;
e.createSpecial(t);
}
});
};
e.prototype.createSpecial = function(e) {
var i = t.prototype.createNode.call(this, e);
switch (e.prefabPath) {
case o.notify:
var r = i.getComponent(s.Notify);
if (r) {
i.active = !0;
r.toast(e.params.content, e.params.useI18n);
}
break;

case o.loading:
}
return i;
};
return e;
}(l.LayerUI);
i.LayerNotify = h;
cc._RF.pop();
}, {
"../../define/C2FConst": "C2FConst",
"../../define/C2FUIDef": "C2FUIDef",
"../view/Notify": "Notify",
"./DelegateComponent": "DelegateComponent",
"./LayerUI": "LayerUI"
} ],
LayerPopup: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "3baab9H85lCfp7tVcQQZzQu", "LayerPopup");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
i.LayerPopUp = void 0;
var o = function(t) {
n(e, t);
function e(e) {
var i = t.call(this, e) || this;
i.init();
return i;
}
e.prototype.init = function() {
this.black = this.addComponent(cc.BlockInputEvents);
this.black.enabled = !1;
};
e.prototype.add = function(e, i, r) {
this.black.enabled = !0;
return t.prototype.add.call(this, e, i, r);
};
e.prototype.remove = function(e, i) {
t.prototype.remove.call(this, e, i);
this.setBlackDisable();
};
e.prototype.removeByUuid = function(e, i) {
t.prototype.removeByUuid.call(this, e, i);
this.setBlackDisable();
};
e.prototype.setBlackDisable = function() {
this.black.enabled = !1;
};
e.prototype.clearUI = function(e, i) {
void 0 === i && (i = []);
t.prototype.clearUI.call(this, e, i);
this.black.enabled = !1;
};
return e;
}(t("./LayerUI").LayerUI);
i.LayerPopUp = o;
cc._RF.pop();
}, {
"./LayerUI": "LayerUI"
} ],
LayerTouchEfx: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "6c8b6KkKJRNV4GSh2qCLZQl", "LayerTouchEfx");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
i.LayerTouchEfx = void 0;
var o, s = t("../../define/C2FUIDef"), a = t("./DelegateComponent"), c = t("./LayerUI"), l = t("../../define/C2FConst");
(function(t) {
t.touchEfx = "commonRes/prefab/TouchEffect";
})(o || (o = {}));
var u = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.addClickEfx = function() {
var t = new s.ViewParams(), e = this.getUuid(o.touchEfx);
t.uuid = e;
t.prefabPath = o.touchEfx;
t.params = {};
t.callbacks = {};
t.valid = !0;
if (!this.ui_nodes.has(e)) {
this.ui_nodes.set(e, t);
this.load(t);
}
};
e.prototype.load = function(e) {
var i = this;
c2f.res.load(l.C2FConst.fwBundleName, e.prefabPath, function(r, n) {
r && cc.error(r);
var o = c2f.res.instantiate(n);
e.node = o;
o.addComponent(a.DelegateComponent).viewParams = e;
t.prototype.createNode.call(i, e);
});
};
return e;
}(c.LayerUI);
i.LayerTouchEfx = u;
cc._RF.pop();
}, {
"../../define/C2FConst": "C2FConst",
"../../define/C2FUIDef": "C2FUIDef",
"./DelegateComponent": "DelegateComponent",
"./LayerUI": "LayerUI"
} ],
LayerUI: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "31cebtLGGZGya1S2OhadRSa", "LayerUI");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
i.LayerUI = void 0;
var o = t("../../component/common/BlurScreen"), s = t("../../define/C2FConst"), a = t("../../define/C2FUIDef"), c = t("./DelegateComponent"), l = t("./UIViewBase"), u = function(t) {
n(e, t);
function e(e) {
var i = t.call(this, e) || this;
i.ui_nodes = new Map();
i.ui_cache = new Map();
var r = i.addComponent(cc.Widget);
r.isAlignLeft = r.isAlignRight = r.isAlignTop = r.isAlignBottom = !0;
r.left = r.right = r.top = r.bottom = 0;
r.alignMode = cc.Widget.AlignMode.ON_WINDOW_RESIZE;
r.enabled = !0;
i.arrPlayingView = [];
i.addingView = [];
i.createBlur();
return i;
}
e.prototype.createBlur = function() {
if (this.name == a.LayerType.UI) {
var t = new cc.Node("blurScreen");
this.addChild(t);
this.blurScn = t.addComponent(o.default);
this.blurScn.initUI();
}
};
e.prototype.getUuid = function(t) {
return (this.name + "_" + t).replace(/\//g, "_");
};
e.prototype.getViewParam = function(t) {
var e = t.prefab, i = this.getUuid(e);
return this.ui_nodes.get(i);
};
e.prototype.setTopPanel = function(t) {
this.topPanel = t;
this.topPanel.parent = this;
};
e.prototype.add = function(t, e, i) {
console.log("open layer:", t.prefab);
var r = t.prefab, n = this.getUuid(r), o = this.ui_nodes.get(n);
if (o && o.valid) {
cc.warn("路径为【" + r + "】的预制重复加载");
if (o.node && o.node.isValid) {
this.removeAboveUI(r);
var s = this.getMVCClsName(r), c = o.node.getComponent(s);
c && c.onViewRefresh && c.onViewRefresh(e);
}
return "";
}
if (null == o) {
(o = new a.ViewParams()).uuid = n;
o.uiCfg = t;
o.prefabPath = r;
o.bundle = t.bundle;
this.ui_nodes.set(o.uuid, o);
}
o.params = e || {};
o.callbacks = i || {};
o.valid = !0;
this.load(o, t.bundle);
return n;
};
e.prototype.load = function(t, e) {
var i = this.ui_nodes.get(t.uuid);
if (i && i.node) this.createNode(i); else {
this.addingView.push(t.prefabPath);
e = e || "resources";
c2f.res.load(e, t.prefabPath, this.afterLoadPrefab.bind(this, t));
}
};
e.prototype.afterLoadPrefab = function(t, e, i) {
e && cc.error(e);
if (this.addingView.indexOf(t.prefabPath) >= 0) {
var r = c2f.res.instantiate(i);
t.node = r;
r.addComponent(c.DelegateComponent).viewParams = t;
this.addMVCComponet(r, t.prefabPath);
this.createNode(t);
c2f.utils.arr.fastRemove(this.addingView, t.prefabPath);
} else cc.warn("failed add view [" + t.prefabPath + "], don't find in addingView! addingView:", this.addingView);
};
e.prototype.getMVCClsName = function(t) {
var e = t, i = t.lastIndexOf("/");
i >= 0 && (e = t.substring(i + 1));
(e.startsWith("P_") || e.startsWith("V_") || e.startsWith("F_")) && (e = e.substring(2));
return e;
};
e.prototype.addMVCComponet = function(t, e) {
var i = this.getMVCClsName(e), r = t.addComponent(i + "Model"), n = t.addComponent(i + "View"), o = t.addComponent(i);
o.model = r;
o.view = n;
};
e.prototype.createNode = function(t) {
t.valid = !0;
var e = this.__nodes(), i = 0, r = e.length;
r > 0 && (i = Math.floor((e[r - 1].node.zIndex || 0) / 10));
t.node.zIndex = 10 * (i + 1);
t.node.parent = this;
t.node.getComponent(c.DelegateComponent).add();
this.refreshLayerUIVisible();
var n = this.getMVCClsName(t.prefabPath);
if (s.C2FConst.UIBgmNames.hasOwnProperty(n)) {
var o = s.C2FConst.UIMusicPath + s.C2FConst.UIBgmNames[n];
c2f.audio.playBgmURL(o);
}
if (t.uiCfg && t.uiCfg.layer != a.LayerType.UI && s.C2FConst.UIViewEftName.hasOwnProperty(n) && s.C2FConst.UIViewEftName[n].length > 0) {
o = s.C2FConst.UIAudioPath + s.C2FConst.UIViewEftName[n];
c2f.audio.playSfxURL(o);
}
return t.node;
};
e.prototype.refreshLayerUIVisible = function() {
if (this.name == a.LayerType.UI) for (var t = this.__nodes(), e = !1, i = null, r = t.length - 1; r >= 0; --r) {
var n = t[r];
if (n.isValid) {
n.node.active = !e;
var o = n.viewParams;
if (this.topPanel && !i && o.uiCfg.showTop) {
i = n;
this.topPanel.zIndex = n.node.zIndex + 1;
this.topPanel.active = n.node.active;
}
if (n.node.active) {
var s = !0;
o.uiCfg && (s = !o.uiCfg.noBlurScn);
if (s) {
var c = !o.uiCfg || o.uiCfg.layer != a.LayerType.UI;
if (this.blurScn) {
this.blurScn.node.active = c;
if (c) {
var l = "";
r > 1 && (l = t[r - 1].node.name);
this.blurScn.addBlurBg(n.node.name, function() {}, l);
this.blurScn.node.zIndex = n.node.zIndex - 1;
}
}
e = !0;
} else e = o.uiCfg && o.uiCfg.layer == a.LayerType.UI;
}
}
}
};
e.prototype.remove = function(t, e) {
e && this.removeCache(t);
for (var i = "", r = this.__nodes(), n = 0; n < r.length; n++) {
var o = r[n], a = o.viewParams;
if (a.prefabPath === t) {
e ? this.ui_nodes.delete(a.uuid) : this.ui_cache.set(a.prefabPath, a);
o.remove(e);
i = o.node.name;
a.valid = !1;
}
}
this.refreshLayerUIVisible();
this.blurScn && this.blurScn.removedBlurBg(i);
var c = this.getMVCClsName(t);
s.C2FConst.UIBgmNames.hasOwnProperty(c) && c2f.audio.endCurMusic();
};
e.prototype.removeAboveUI = function(t) {
for (;;) {
var e = this.__nodes(), i = e[e.length - 1].viewParams;
if (i.prefabPath == t) break;
this.remove(i.prefabPath, !0);
}
};
e.prototype.removeByUuid = function(t, e) {
var i = this.ui_nodes.get(t);
if (i) {
e && this.ui_nodes.delete(i.uuid);
var r = i.node;
r && r.isValid && r.getComponent(c.DelegateComponent).remove(e);
this.refreshLayerUIVisible();
}
};
e.prototype.removeCache = function(t) {
var e = this.ui_cache.get(t);
if (e) {
e.node && e.node.isValid ? e.node.getComponent(c.DelegateComponent).remove(!0) : cc.warn("removeCache: dst node is invalid!");
this.ui_nodes.delete(e.uuid);
this.ui_cache.delete(t);
}
};
e.prototype.getByUuid = function(t) {
for (var e = 0, i = this.__nodes(); e < i.length; e++) {
var r = i[e];
if (r.viewParams && r.viewParams.uuid === t) return r.node;
}
return null;
};
e.prototype.get = function(t) {
for (var e = [], i = 0, r = this.__nodes(); i < r.length; i++) {
var n = r[i];
n.viewParams.prefabPath === t && e.push(n.node);
}
return e;
};
e.prototype.has = function(t) {
for (var e = 0, i = this.__nodes(); e < i.length; e++) {
var r = i[e];
if (r.viewParams.uuid === t || r.viewParams.prefabPath === t) return !0;
}
return !1;
};
e.prototype.find = function(t) {
for (var e = [], i = 0, r = this.__nodes(); i < r.length; i++) {
var n = r[i];
t.test(n.viewParams.prefabPath) && e.push(n.node);
}
return e;
};
e.prototype.__nodes = function() {
for (var t = [], e = this.children, i = 0; i < e.length; i++) {
var r = e[i].getComponent(c.DelegateComponent);
r && r.viewParams && r.viewParams.valid && cc.isValid(r) && t.push(r);
}
return t;
};
e.prototype.size = function() {
return this.children.length;
};
e.prototype.clearUI = function(t, e) {
var i = this;
void 0 === e && (e = []);
this.ui_nodes.forEach(function(r, n) {
var o = !0;
e.length > 0 && (o = e.indexOf(r.prefabPath) < 0);
if (o) {
i.removeByUuid(r.uuid, t);
r.valid = !1;
i.ui_nodes.delete(n);
}
});
t && this.ui_cache.forEach(function(t, e) {
i.removeCache(e);
});
this.blurScn && this.blurScn.cleanBlurBg();
this.addingView = [];
};
e.prototype.getPrefabUrlByNode = function(t) {
var e = null;
this.ui_nodes.forEach(function(i) {
i.node == t && (e = i.prefabPath);
});
return e;
};
e.prototype.getTopsideView = function() {
for (var t = null, e = this.__nodes(), i = e.length - 1; i >= 0; --i) {
var r = e[i];
if (r.isValid && r.viewParams.valid) {
t = r.node;
break;
}
}
return t;
};
e.prototype.hideAnimaPlayingView = function() {
for (var t = this.__nodes(), e = 0; e < t.length; e++) {
var i = t[e];
if (i.node.active && i.viewParams.valid) {
var r = i.node.getComponent(l.UIViewBase);
if (r && r.animaPlaying) {
i.node.active = !1;
this.arrPlayingView.push(i.node);
}
}
}
};
e.prototype.showAnimaPlayingView = function() {
for (var t = 0, e = this.arrPlayingView; t < e.length; t++) e[t].active = !0;
this.arrPlayingView = [];
};
return e;
}(cc.Node);
i.LayerUI = u;
cc._RF.pop();
}, {
"../../component/common/BlurScreen": "BlurScreen",
"../../define/C2FConst": "C2FConst",
"../../define/C2FUIDef": "C2FUIDef",
"./DelegateComponent": "DelegateComponent",
"./UIViewBase": "UIViewBase"
} ],
LayoutProperty: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "838787pJRNN25oWbvaCkfKh", "LayoutProperty");
var r = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.LayoutProperty = void 0;
var n = cc._decorator, o = n.ccclass, s = n.property, a = function() {
function t() {
this.type = cc.Layout.Type.VERTICAL;
this.startAxis = cc.Layout.AxisDirection.HORIZONTAL;
this.left = 0;
this.right = 0;
this.top = 0;
this.bottom = 0;
this.spacingX = 0;
this.spacingY = 0;
this.verticalDirection = cc.Layout.VerticalDirection.TOP_TO_BOTTOM;
this.horizontalDirection = cc.Layout.HorizontalDirection.LEFT_TO_RIGHT;
}
r([ s({
type: cc.Enum(cc.Layout.Type),
tooltip: !1
}) ], t.prototype, "type", void 0);
r([ s({
type: cc.Enum(cc.Layout.AxisDirection),
tooltip: !1,
visible: function() {
return this.type === cc.Layout.Type.GRID;
}
}) ], t.prototype, "startAxis", void 0);
r([ s({
visible: function() {
return this.type === cc.Layout.Type.HORIZONTAL || this.type === cc.Layout.Type.GRID;
}
}) ], t.prototype, "left", void 0);
r([ s({
visible: function() {
return this.type === cc.Layout.Type.HORIZONTAL || this.type === cc.Layout.Type.GRID;
}
}) ], t.prototype, "right", void 0);
r([ s({
visible: function() {
return this.type === cc.Layout.Type.VERTICAL || this.type === cc.Layout.Type.GRID;
}
}) ], t.prototype, "top", void 0);
r([ s({
visible: function() {
return this.type === cc.Layout.Type.VERTICAL || this.type === cc.Layout.Type.GRID;
}
}) ], t.prototype, "bottom", void 0);
r([ s({
visible: function() {
return this.type === cc.Layout.Type.HORIZONTAL || this.type === cc.Layout.Type.GRID;
}
}) ], t.prototype, "spacingX", void 0);
r([ s({
visible: function() {
return this.type === cc.Layout.Type.VERTICAL || this.type === cc.Layout.Type.GRID;
}
}) ], t.prototype, "spacingY", void 0);
r([ s({
type: cc.Enum(cc.Layout.VerticalDirection),
visible: function() {
return this.type === cc.Layout.Type.VERTICAL || this.type === cc.Layout.Type.GRID;
}
}) ], t.prototype, "verticalDirection", void 0);
r([ s({
type: cc.Enum(cc.Layout.HorizontalDirection),
visible: function() {
return this.type === cc.Layout.Type.HORIZONTAL || this.type === cc.Layout.Type.GRID;
}
}) ], t.prototype, "horizontalDirection", void 0);
return r([ o("LayoutProperty") ], t);
}();
i.LayoutProperty = a;
cc._RF.pop();
}, {} ],
LinkPrefab: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "30990IINEBKrKg8r9ywVAzx", "LinkPrefab");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = s.executeInEditMode, l = s.property, u = s.menu, h = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._realNode = null;
e._prefab = null;
return e;
}
Object.defineProperty(e.prototype, "prefab", {
get: function() {
return this._prefab;
},
set: function(t) {
this.onPrefabChanged(t);
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
this.checkRealNode();
};
e.prototype.onDestroy = function() {
this._realNode = null;
this._prefab = null;
};
e.prototype.resetFlag = function() {};
e.prototype.resetRealNode = function() {
if (this._prefab) {
var t = !1;
if (this.node.children.length > 0) for (var e = 0, i = this.node.children; e < i.length; e++) {
var r = i[e];
if (r.name == this._prefab.name) {
t = !0;
this._realNode = r;
}
}
if (!t) {
var n = null;
if (!(n = c2f.utils.view.instantiateMVCPrefab(this._prefab))) return;
this.resetFlag(n);
n.setPosition(0, 0);
this.node.insertChild(n, -1);
this._realNode = n;
this.resetSize();
}
}
};
e.prototype.resetSize = function() {
0 == this.node.width && 0 == this.node.height && this.node.setContentSize(this._realNode.width, this._realNode.height);
var t = this._realNode.getComponent(cc.Widget);
t && (t.enabled = !0);
};
e.prototype.onPrefabChanged = function(t) {
if (this._realNode) {
this._realNode.destroy();
this._realNode = null;
}
this._prefab = t;
this.resetRealNode();
};
e.prototype.checkRealNode = function() {
this._realNode || this.resetRealNode();
};
e.prototype.getPrefabNode = function() {
this._realNode || this.resetRealNode();
return this._realNode;
};
e.prototype.getComponentEx = function(t) {
this.checkRealNode();
var e = this._realNode;
return e && cc.isValid(e) ? e.getComponent(t) : null;
};
e.prototype.getRealComponent = function(t) {
this.checkRealNode();
var e = this._realNode;
return e ? e.getComponent(t) : null;
};
o([ l ], e.prototype, "_prefab", void 0);
o([ l({
type: cc.Prefab,
visible: !0,
displayName: "预制体"
}) ], e.prototype, "prefab", null);
return o([ a, u("c2f/common/LinkPrefab"), c ], e);
}(cc.Component);
i.default = h;
cc._RF.pop();
}, {} ],
LoadingTips: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "26c3ar7sklOKojlqGeXtPBt", "LoadingTips");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.LoadingTips = void 0;
var s = cc._decorator, a = s.ccclass, c = s.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.loading = null;
e.angle = 0;
return e;
}
e.prototype.update = function(t) {
this.angle += 220 * t;
this.loading.angle = this.angle % 360;
this.angle > 360 && (this.angle -= 360);
};
o([ c(cc.Node) ], e.prototype, "loading", void 0);
return o([ a ], e);
}(cc.Component);
i.LoadingTips = l;
cc._RF.pop();
}, {} ],
Logger: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "74cc6iGkDFM/6PRdibtfQ5B", "Logger");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r;
(function(t) {
t[t.Net = 1] = "Net";
t[t.Model = 2] = "Model";
t[t.Business = 4] = "Business";
t[t.View = 8] = "View";
t[t.Config = 16] = "Config";
t[t.Trace = 32] = "Trace";
t[t.SDK = 64] = "SDK";
t[t.BAT = 128] = "BAT";
})(r || (r = {}));
var n = {
1: "网络日志",
2: "数据日志",
4: "业务日志",
8: "视图日志",
16: "配置日志",
32: "标准日志",
64: "SDK日志",
128: "战斗日志"
}, o = function() {
function t() {}
t.init = function() {
this.tags = r.Net | r.Model | r.Business | r.View | r.Config | r.Trace | r.SDK | r.BAT;
};
t.setTags = function(t) {
void 0 === t && (t = null);
t && (this.tags = t);
};
t.start = function(t) {
void 0 === t && (t = "Time");
console.time(t);
};
t.end = function(t) {
void 0 === t && (t = "Time");
console.timeEnd(t);
};
t.table = function(t) {
this.isOpen(r.Trace) && console.table(t);
};
t.trace = function(t) {
this.isOpen(r.Trace) && console.log(t);
};
t.logNet = function(t, e) {
this.orange(r.Net, t, e);
};
t.logModel = function(t, e) {
this.violet(r.Model, t, e);
};
t.logBusiness = function(t, e) {
this.blue(r.Business, t, e);
};
t.logView = function(t, e) {
this.green(r.View, t, e);
};
t.logConfig = function(t, e) {
this.gray(r.Config, t, e);
};
t.logSDK = function(t, e) {
this.cyan(r.SDK, t, e);
};
t.logBat = function(t, e) {
this.cyan(r.BAT, t, e);
};
t.orange = function(t, e, i) {
this.print(t, e, "color:#ee7700;", i);
};
t.violet = function(t, e, i) {
this.print(t, e, "color:Violet;", i);
};
t.blue = function(t, e, i) {
this.print(t, e, "color:#3a5fcd;", i);
};
t.green = function(t, e, i) {
this.print(t, e, "color:green;", i);
};
t.gray = function(t, e, i) {
this.print(t, e, "color:gray;", i);
};
t.cyan = function(t, e, i) {
this.print(t, e, "color:#09CBD7;", i);
};
t.isOpen = function(t) {
return 0 != (this.tags & t);
};
t.print = function(t, e, i, r) {
if (this.isOpen(t)) {
var o = console.log || cc.log, s = n[t];
r ? o.call(null, "%c%s%s%s:\n%s%o", i, this.getDateString(), "[" + s + "]", this.stack(5), r, e) : o.call(null, "%c%s%s%s:\n%o", i, this.getDateString(), "[" + s + "]", this.stack(5), e);
}
};
t.stack = function(t) {
var e = new Error().stack.split("\n"), i = [];
e.forEach(function(t) {
var e, r = (t = t.substring(7)).split(" ");
r.length < 2 ? i.push(r[0]) : i.push(((e = {})[r[0]] = r[1], e));
});
var r = [], n = [];
if (t < i.length - 1) {
var o;
for (var s in i[t]) if (2 == (n = s.split(".")).length) r = n.concat(); else {
var a = (o = i[t][s]).lastIndexOf("/"), c = o.lastIndexOf(".");
if (a > -1 && c > -1) {
var l = o.substring(a + 1, c);
r.push(l);
} else r.push(o);
}
}
return 1 == r.length ? "[" + r[0] + ".ts]" : 2 == r.length ? "[" + r[0] + ".ts->" + r[1] + "]" : "";
};
t.getDateString = function() {
var t = new Date(), e = t.getHours().toString(), i = "";
i += (1 == e.length ? "0" + e : e) + ":";
i += (1 == (e = t.getMinutes().toString()).length ? "0" + e : e) + ":";
i += (1 == (e = t.getSeconds().toString()).length ? "0" + e : e) + ":";
1 == (e = t.getMilliseconds().toString()).length && (e = "00" + e);
2 == e.length && (e = "0" + e);
return "[" + (i += e) + "]";
};
t.tags = 0;
return t;
}();
o.init();
c2f.log = o;
cc._RF.pop();
}, {} ],
LoopList: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "47957NchK9M3pnXr5DdUH/B", "LoopList");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s, a = cc._decorator, c = a.ccclass, l = a.property, u = a.requireComponent, h = a.disallowMultiple, f = a.menu;
(function(t) {
t[t.NODE = 0] = "NODE";
t[t.PREFAB = 1] = "PREFAB";
})(s || (s = {}));
var p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.templateType = s.PREFAB;
e.templatePrefab = null;
e.templateNode = null;
e._firstDirty = !1;
e._refreshDirty = !1;
e._curIdx = 0;
e._midIdx = 2;
e._dataLen = 0;
e._refreshCall = null;
e._target = null;
e._pageView = null;
return e;
}
Object.defineProperty(e.prototype, "pageView", {
get: function() {
this._pageView || (this._pageView = this.getComponent(cc.PageView));
return this._pageView;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "view", {
get: function() {
return this.pageView.content.parent;
},
enumerable: !1,
configurable: !0
});
e.prototype.start = function() {
this.node.on("scroll-ended", this.onScrollEnd, this);
};
e.prototype.lateUpdate = function() {
if (0 !== this.pageView.getPages().length) {
if (this._firstDirty) {
this._firstDirty = !1;
this.pageView.setContentPosition(cc.v2(-this.view.width / 2 - this._midIdx * this.view.width, 0));
this.pageView.setCurrentPageIndex(this._midIdx);
}
if (this._refreshDirty) {
this._refreshDirty = !1;
this.refresh();
}
}
};
e.prototype.onInit = function(t, e, i, r) {
void 0 === r && (r = null);
this._dataLen = t;
this._curIdx = cc.misc.clampf(e, 0, this._dataLen - 1);
this._refreshCall = i;
this._target = r;
this._firstDirty = !0;
this._refreshDirty = !0;
if (0 === this.pageView.getPages().length) {
for (var n = this.templateType === s.PREFAB ? this.templatePrefab : this.templateNode, o = 0; o < 5; o++) {
var a = c2f.res.instantiate(n, this.node);
a.active = !0;
a.setPosition(0, 0);
this.pageView.addPage(a);
}
this.pageView.content.getComponent(cc.Layout).updateLayout();
}
};
e.prototype.resetData = function(t, e) {
void 0 === e && (e = null);
this._dataLen = t;
this._curIdx = cc.misc.clampf(null === e ? this._curIdx : e, 0, this._dataLen - 1);
this._refreshDirty = !0;
};
e.prototype.setCurIdx = function(t) {
this._curIdx = t;
this._refreshDirty = !0;
};
e.prototype.onScrollEnd = function() {
var t = this.pageView.getCurrentPageIndex();
if (t !== this._midIdx) {
this.pageView.setContentPosition(cc.v2(-this.view.width / 2 - this._midIdx * this.view.width, 0));
this.pageView.setCurrentPageIndex(this._midIdx);
this._curIdx += t - this._midIdx;
for (;this._curIdx < 0; ) this._curIdx += this._dataLen;
for (;this._curIdx > this._dataLen - 1; ) this._curIdx -= this._dataLen;
this._refreshDirty = !0;
}
};
e.prototype.refresh = function() {
var t = this;
this.pageView.content.children.forEach(function(e, i) {
for (var r = t._curIdx - (t._midIdx - i); r < 0; ) r += t._dataLen;
for (;r > t._dataLen - 1; ) r -= t._dataLen;
t._refreshCall && t._refreshCall.call(t._target, e, r, r === t._curIdx);
});
};
e.ITEM_REFRESH = "LoopList-itemRefresh";
o([ l({
type: cc.Enum(s),
tooltip: !1
}) ], e.prototype, "templateType", void 0);
o([ l({
type: cc.Prefab,
tooltip: !1,
visible: function() {
return this.templateType === s.PREFAB;
}
}) ], e.prototype, "templatePrefab", void 0);
o([ l({
type: cc.Node,
tooltip: !1,
visible: function() {
return this.templateType === s.NODE;
}
}) ], e.prototype, "templateNode", void 0);
return o([ c, h, u(cc.PageView), f("c2f/UI/LoopList") ], e);
}(cc.Component);
i.default = p;
cc._RF.pop();
}, {} ],
MathUtil: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ab2f7oq0NhEo7EYxM9ESNrA", "MathUtil");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = function() {
function t() {}
t.sign = function(t) {
return t > 0 ? 1 : t < 0 ? -1 : 0;
};
t.progress = function(t, e, i) {
return t + (e - t) * i;
};
t.lerp = function(t, e, i) {
i > 1 ? i = 1 : i < 0 && (i = 0);
return t * (1 - i) + e * i;
};
t.lerpAngle = function(e, i, r) {
var n = (i %= 360) - (e %= 360);
n > 180 ? i = e - (360 - n) : n < -180 && (i = e + (360 + n));
return (t.lerp(e, i, r) % 360 + 360) % 360;
};
t.angleTowards = function(t, e, i) {
var r = (e %= 360) - (t %= 360);
r > 180 ? e = t - (360 - r) : r < -180 && (e = t + (360 + r));
var n = e - t;
return i > Math.abs(n) ? e : ((t + i * Math.sign(n)) % 360 + 360) % 360;
};
t.clamp = function(t, e, i) {
return t < e ? e : t > i ? i : t;
};
t.probability = function(t) {
return Math.random() < t;
};
t.randRect = function(t, e) {
return Math.random() * (e - t) + t;
};
t.randRectInt = function(t, e) {
var i = Math.random() * (e - t) + t;
return i < 0 ? Math.ceil(i) : Math.floor(i);
};
t.randFloat = function(t, e) {
void 0 === e && (e = void 0);
if (void 0 === e) {
e = t;
t = 0;
}
return Math.random() * (e - t) + t;
};
t.randWeightIdx = function(t) {
for (var e = 0, i = 0; i < t.length; i++) e += t[i];
var r = this.randFloat(0, e), n = 0;
for (i = 0; i < t.length; i++) if (r < (n += t[i])) return i;
return t.length - 1;
};
t.prefixInteger = function(t, e) {
return t < 10 ? (Array(e).join("0") + t).slice(-e) : t;
};
t.normalizeDegree = function(t) {
var e = t % 360;
e < 0 && (e += 360);
return e;
};
t.inRange = function(t, e, i, r) {
void 0 === r && (r = !0);
return r ? i >= t && i <= e : i > t && i < e;
};
t.deg2Rad = Math.PI / 180;
t.rad2Deg = 180 / Math.PI;
return t;
}();
c2f.utils.math = r;
cc._RF.pop();
}, {} ],
Md5: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "161608C4lFEjKjpTthWy9Of", "Md5");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.md5 = void 0;
i.md5 = function(t) {
var e = function(t, e) {
return t << e | t >>> 32 - e;
}, i = function(t, e) {
var i, r, n, o, s;
n = 2147483648 & t;
o = 2147483648 & e;
s = (1073741823 & t) + (1073741823 & e);
return (i = 1073741824 & t) & (r = 1073741824 & e) ? 2147483648 ^ s ^ n ^ o : i | r ? 1073741824 & s ? 3221225472 ^ s ^ n ^ o : 1073741824 ^ s ^ n ^ o : s ^ n ^ o;
}, r = function(t, e, i) {
return t & e | ~t & i;
}, n = function(t, e, i) {
return t & i | e & ~i;
}, o = function(t, e, i) {
return t ^ e ^ i;
}, s = function(t, e, i) {
return e ^ (t | ~i);
}, a = function(t, n, o, s, a, c, l) {
t = i(t, i(i(r(n, o, s), a), l));
return i(e(t, c), n);
}, c = function(t, r, o, s, a, c, l) {
t = i(t, i(i(n(r, o, s), a), l));
return i(e(t, c), r);
}, l = function(t, r, n, s, a, c, l) {
t = i(t, i(i(o(r, n, s), a), l));
return i(e(t, c), r);
}, u = function(t, r, n, o, a, c, l) {
t = i(t, i(i(s(r, n, o), a), l));
return i(e(t, c), r);
}, h = function(t) {
for (var e, i = t.length, r = i + 8, n = 16 * ((r - r % 64) / 64 + 1), o = Array(n - 1), s = 0, a = 0; a < i; ) {
s = a % 4 * 8;
o[e = (a - a % 4) / 4] = o[e] | t.charCodeAt(a) << s;
a++;
}
s = a % 4 * 8;
o[e = (a - a % 4) / 4] = o[e] | 128 << s;
o[n - 2] = i << 3;
o[n - 1] = i >>> 29;
return o;
}, f = function(t) {
var e, i = "", r = "";
for (e = 0; e <= 3; e++) i += (r = "0" + (t >>> 8 * e & 255).toString(16)).substr(r.length - 2, 2);
return i;
}, p = function(t) {
t = t.toString().replace(/\x0d\x0a/g, "\n");
for (var e = "", i = 0; i < t.length; i++) {
var r = t.charCodeAt(i);
if (r < 128) e += String.fromCharCode(r); else if (r > 127 && r < 2048) {
e += String.fromCharCode(r >> 6 | 192);
e += String.fromCharCode(63 & r | 128);
} else {
e += String.fromCharCode(r >> 12 | 224);
e += String.fromCharCode(r >> 6 & 63 | 128);
e += String.fromCharCode(63 & r | 128);
}
}
return e;
};
return function(t) {
var e, r, n, o, s, d, y, g, v, m = Array();
t = p(t);
m = h(t);
d = 1732584193;
y = 4023233417;
g = 2562383102;
v = 271733878;
for (e = 0; e < m.length; e += 16) {
r = d;
n = y;
o = g;
s = v;
d = a(d, y, g, v, m[e + 0], 7, 3614090360);
v = a(v, d, y, g, m[e + 1], 12, 3905402710);
g = a(g, v, d, y, m[e + 2], 17, 606105819);
y = a(y, g, v, d, m[e + 3], 22, 3250441966);
d = a(d, y, g, v, m[e + 4], 7, 4118548399);
v = a(v, d, y, g, m[e + 5], 12, 1200080426);
g = a(g, v, d, y, m[e + 6], 17, 2821735955);
y = a(y, g, v, d, m[e + 7], 22, 4249261313);
d = a(d, y, g, v, m[e + 8], 7, 1770035416);
v = a(v, d, y, g, m[e + 9], 12, 2336552879);
g = a(g, v, d, y, m[e + 10], 17, 4294925233);
y = a(y, g, v, d, m[e + 11], 22, 2304563134);
d = a(d, y, g, v, m[e + 12], 7, 1804603682);
v = a(v, d, y, g, m[e + 13], 12, 4254626195);
g = a(g, v, d, y, m[e + 14], 17, 2792965006);
y = a(y, g, v, d, m[e + 15], 22, 1236535329);
d = c(d, y, g, v, m[e + 1], 5, 4129170786);
v = c(v, d, y, g, m[e + 6], 9, 3225465664);
g = c(g, v, d, y, m[e + 11], 14, 643717713);
y = c(y, g, v, d, m[e + 0], 20, 3921069994);
d = c(d, y, g, v, m[e + 5], 5, 3593408605);
v = c(v, d, y, g, m[e + 10], 9, 38016083);
g = c(g, v, d, y, m[e + 15], 14, 3634488961);
y = c(y, g, v, d, m[e + 4], 20, 3889429448);
d = c(d, y, g, v, m[e + 9], 5, 568446438);
v = c(v, d, y, g, m[e + 14], 9, 3275163606);
g = c(g, v, d, y, m[e + 3], 14, 4107603335);
y = c(y, g, v, d, m[e + 8], 20, 1163531501);
d = c(d, y, g, v, m[e + 13], 5, 2850285829);
v = c(v, d, y, g, m[e + 2], 9, 4243563512);
g = c(g, v, d, y, m[e + 7], 14, 1735328473);
y = c(y, g, v, d, m[e + 12], 20, 2368359562);
d = l(d, y, g, v, m[e + 5], 4, 4294588738);
v = l(v, d, y, g, m[e + 8], 11, 2272392833);
g = l(g, v, d, y, m[e + 11], 16, 1839030562);
y = l(y, g, v, d, m[e + 14], 23, 4259657740);
d = l(d, y, g, v, m[e + 1], 4, 2763975236);
v = l(v, d, y, g, m[e + 4], 11, 1272893353);
g = l(g, v, d, y, m[e + 7], 16, 4139469664);
y = l(y, g, v, d, m[e + 10], 23, 3200236656);
d = l(d, y, g, v, m[e + 13], 4, 681279174);
v = l(v, d, y, g, m[e + 0], 11, 3936430074);
g = l(g, v, d, y, m[e + 3], 16, 3572445317);
y = l(y, g, v, d, m[e + 6], 23, 76029189);
d = l(d, y, g, v, m[e + 9], 4, 3654602809);
v = l(v, d, y, g, m[e + 12], 11, 3873151461);
g = l(g, v, d, y, m[e + 15], 16, 530742520);
y = l(y, g, v, d, m[e + 2], 23, 3299628645);
d = u(d, y, g, v, m[e + 0], 6, 4096336452);
v = u(v, d, y, g, m[e + 7], 10, 1126891415);
g = u(g, v, d, y, m[e + 14], 15, 2878612391);
y = u(y, g, v, d, m[e + 5], 21, 4237533241);
d = u(d, y, g, v, m[e + 12], 6, 1700485571);
v = u(v, d, y, g, m[e + 3], 10, 2399980690);
g = u(g, v, d, y, m[e + 10], 15, 4293915773);
y = u(y, g, v, d, m[e + 1], 21, 2240044497);
d = u(d, y, g, v, m[e + 8], 6, 1873313359);
v = u(v, d, y, g, m[e + 15], 10, 4264355552);
g = u(g, v, d, y, m[e + 6], 15, 2734768916);
y = u(y, g, v, d, m[e + 13], 21, 1309151649);
d = u(d, y, g, v, m[e + 4], 6, 4149444226);
v = u(v, d, y, g, m[e + 11], 10, 3174756917);
g = u(g, v, d, y, m[e + 2], 15, 718787259);
y = u(y, g, v, d, m[e + 9], 21, 3951481745);
d = i(d, r);
y = i(y, n);
g = i(g, o);
v = i(v, s);
}
return (f(d) + f(y) + f(g) + f(v)).toLowerCase();
}(t);
};
cc._RF.pop();
}, {} ],
MoveSelf: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "80988OixDNA46U4A8bY2fkv", "MoveSelf");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.MoveSelf = void 0;
var s = cc._decorator, a = s.ccclass, c = s.property, l = s.menu, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.speed = cc.v2(0, 0);
e.playOnLoad = !0;
e.isPlaying = !1;
return e;
}
e.prototype.start = function() {
var t = this;
this.playOnLoad && this.scheduleOnce(function() {
t.isPlaying = !0;
});
};
e.prototype.startPlay = function() {
this.isPlaying = !0;
};
e.prototype.update = function(t) {
if (this.isPlaying) {
var e = 0 != this.speed.x, i = 0 != this.speed.y;
e && (this.node.x += this.speed.x * t);
i && (this.node.y += this.speed.y * t);
var r = this.node.parent;
if (e) {
this.node.x < 0 && this.node.x + this.node.width * (1 - this.node.anchorX) * this.node.scaleX < 0 && (this.node.x = r.width * (1 - r.anchorX) + this.node.width * this.node.anchorX * this.node.scaleX);
this.node.x > r.width && this.node.x - this.node.width * this.node.anchorX * this.node.scaleX > r.width && (this.node.x = -r.width * r.anchorX - this.node.width * (1 - this.node.anchorX) * this.node.scaleX);
}
if (i) {
this.node.y < 0 && this.node.y + this.node.height * (1 - this.node.anchorY) * this.node.scaleY < 0 && (this.node.y = r.height * (1 - r.anchorY) + this.node.height * this.node.anchorY * this.node.scaleY);
this.node.y > r.height && this.node.y - this.node.height * this.node.anchorY * this.node.scaleY > r.height && (this.node.y = -r.height * r.anchorY - this.node.height * (1 - this.node.anchorY) * this.node.scaleY);
}
}
};
o([ c({
tooltip: "移动速度"
}) ], e.prototype, "speed", void 0);
o([ c({
serializable: !0,
tooltip: "自动播放"
}) ], e.prototype, "playOnLoad", void 0);
return o([ a, l("c2f/animation/MoveSelf") ], e);
}(cc.Component);
i.MoveSelf = u;
cc._RF.pop();
}, {} ],
MultiAssemblerBarFilled: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "0d306+qdllOJo+T76peVXVI", "MultiAssemblerBarFilled");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.updateRenderData = function(t) {
var e = t._spriteFrame;
this.packToDynamicAtlas(t, e);
if (t._vertsDirty) {
var i = t._fillStart, r = t._fillRange;
if (r < 0) {
i += r;
r = -r;
}
r = (r = (r = i + r) > 1 ? 1 : r) < 0 ? 0 : r;
var n = (i = (i = i > 1 ? 1 : i) < 0 ? 0 : i) + (r = (r -= i) < 0 ? 0 : r);
n = n > 1 ? 1 : n;
this.updateUVs(t, i, n);
this.updateVerts(t, i, n);
this.updateTextureIdx(t);
t._vertsDirty = !1;
}
};
e.prototype.updateUVs = function(t, e, i) {
var r, n, o, s, a, c, l, u, h, f, p = t._spriteFrame, d = p._texture.width, y = p._texture.height, g = p._rect;
if (p._rotated) {
r = g.x / d;
n = (g.y + g.width) / y;
o = a = r;
l = h = (g.x + g.height) / d;
c = f = n;
s = u = g.y / y;
} else {
r = g.x / d;
n = (g.y + g.height) / y;
o = l = r;
a = h = (g.x + g.width) / d;
s = c = n;
u = f = g.y / y;
}
var v = this._renderData.vDatas[0], m = this.uvOffset, _ = this.floatsPerVert;
switch (t._fillType) {
case cc.Sprite.FillType.HORIZONTAL:
v[m] = o + (a - o) * e;
v[m + 1] = s + (c - s) * e;
v[m + _] = o + (a - o) * i;
v[m + _ + 1] = s + (c - s) * i;
v[m + 2 * _] = l + (h - l) * e;
v[m + 2 * _ + 1] = u + (f - u) * e;
v[m + 3 * _] = l + (h - l) * i;
v[m + 3 * _ + 1] = u + (f - u) * i;
break;

case cc.Sprite.FillType.VERTICAL:
v[m] = o + (l - o) * e;
v[m + 1] = s + (u - s) * e;
v[m + _] = a + (h - a) * e;
v[m + _ + 1] = c + (f - c) * e;
v[m + 2 * _] = o + (l - o) * i;
v[m + 2 * _ + 1] = s + (u - s) * i;
v[m + 3 * _] = a + (h - a) * i;
v[m + 3 * _ + 1] = c + (f - c) * i;
break;

default:
cc.errorID(2626);
}
};
e.prototype.updateVerts = function(t, e, i) {
var r, n = t.node, o = n.width, s = n.height, a = n.anchorX * o, c = n.anchorY * s, l = -a, u = -c, h = o - a, f = s - c;
switch (t._fillType) {
case cc.Sprite.FillType.HORIZONTAL:
r = l + (h - l) * i;
l += (h - l) * e;
h = r;
break;

case cc.Sprite.FillType.VERTICAL:
r = u + (f - u) * i;
u += (f - u) * e;
f = r;
break;

default:
cc.errorID(2626);
}
var p = this._local;
p[0] = l;
p[1] = u;
p[2] = h;
p[3] = f;
this.updateWorldVerts(t);
};
return e;
}(t("./MultiAssembler").default);
i.default = o;
cc._RF.pop();
}, {
"./MultiAssembler": "MultiAssembler"
} ],
MultiAssemblerRadialFilled: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "37463cgERBLhI8K7rCWzz1m", "MultiAssemblerRadialFilled");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = t("./MultiAssembler"), s = 2 * Math.PI, a = [ cc.v2(0, 0), cc.v2(0, 0), cc.v2(0, 0), cc.v2(0, 0) ], c = [ 0, 0, 0, 0 ], l = [ 0, 0, 0, 0, 0, 0, 0, 0 ], u = [ cc.v2(0, 0), cc.v2(0, 0), cc.v2(0, 0), cc.v2(0, 0) ], h = [ cc.v2(0, 0), cc.v2(0, 0), cc.v2(0, 0), cc.v2(0, 0) ], f = cc.v2(0, 0), p = [];
function d(t, e, i, r, n, o, s) {
var a, c, l = Math.sin(o), u = Math.cos(o);
if (0 !== Math.cos(o)) {
a = l / u;
if ((t - n.x) * u > 0) {
var h = n.y + a * (t - n.x);
s[0].x = t;
s[0].y = h;
}
if ((e - n.x) * u > 0) {
var f = n.y + a * (e - n.x);
s[2].x = e;
s[2].y = f;
}
}
if (0 !== Math.sin(o)) {
c = u / l;
if ((r - n.y) * l > 0) {
var p = n.x + c * (r - n.y);
s[3].x = p;
s[3].y = r;
}
if ((i - n.y) * l > 0) {
var d = n.x + c * (i - n.y);
s[1].x = d;
s[1].y = i;
}
}
}
function y(t) {
var e = t.node, i = e.width, r = e.height, n = e.anchorX * i, o = e.anchorY * r, s = -n, l = -o, u = i - n, h = r - o, d = c;
d[0] = s;
d[1] = l;
d[2] = u;
d[3] = h;
var y = t._fillCenter, g = f.x = Math.min(Math.max(0, y.x), 1) * (u - s) + s, v = f.y = Math.min(Math.max(0, y.y), 1) * (h - l) + l;
a[0].x = a[3].x = s;
a[1].x = a[2].x = u;
a[0].y = a[1].y = l;
a[2].y = a[3].y = h;
p.length = 0;
g !== d[0] && (p[0] = [ 3, 0 ]);
g !== d[2] && (p[2] = [ 1, 2 ]);
v !== d[1] && (p[1] = [ 0, 1 ]);
v !== d[3] && (p[3] = [ 2, 3 ]);
}
function g(t) {
var e, i, r, n, o = t._texture.width, s = t._texture.height, a = t._rect, c = l;
if (t._rotated) {
e = a.x / o;
i = (a.x + a.height) / o;
r = a.y / s;
n = (a.y + a.width) / s;
c[0] = c[2] = e;
c[4] = c[6] = i;
c[3] = c[7] = n;
c[1] = c[5] = r;
} else {
e = a.x / o;
i = (a.x + a.width) / o;
r = a.y / s;
n = (a.y + a.height) / s;
c[0] = c[4] = e;
c[2] = c[6] = i;
c[1] = c[3] = n;
c[5] = c[7] = r;
}
}
function v(t, e) {
var i, r;
i = e.x - t.x;
r = e.y - t.y;
if (0 !== i || 0 !== r) {
if (0 === i) return r > 0 ? .5 * Math.PI : 1.5 * Math.PI;
var n = Math.atan(r / i);
i < 0 && (n += Math.PI);
return n;
}
}
var m = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.initData = function() {
this._renderData.createFlexData(0, 4, 6, this.getVfmt());
this.updateIndices();
};
e.prototype.updateRenderData = function(t) {
var e = t.spriteFrame;
this.packToDynamicAtlas(t, e);
if (t._vertsDirty) {
var i = t._fillStart, r = t._fillRange;
if (r < 0) {
i += r;
r = -r;
}
for (;i >= 1; ) i -= 1;
for (;i < 0; ) i += 1;
i *= s;
r *= s;
y(t);
g(e);
d(c[0], c[2], c[1], c[3], f, i, u);
d(c[0], c[2], c[1], c[3], f, i + r, h);
this.updateVerts(t, i, r);
this.updateTextureIdx(t);
t._vertsDirty = !1;
}
};
e.prototype.updateVerts = function(t, e, i) {
var r = e + i, n = this._local;
n.length = 0;
for (var o = 0, c = 3 * this.floatsPerVert, l = 0; l < 4; ++l) {
var d = p[l];
if (d) if (i >= s) {
n.length = o + c;
this._generateTriangle(n, o, f, a[d[0]], a[d[1]]);
o += c;
} else {
var y = v(f, a[d[0]]), g = v(f, a[d[1]]);
g < y && (g += s);
y -= s;
g -= s;
for (var m = 0; m < 3; ++m) {
if (y >= r) ; else if (y >= e) {
n.length = o + c;
g >= r ? this._generateTriangle(n, o, f, a[d[0]], h[l]) : this._generateTriangle(n, o, f, a[d[0]], a[d[1]]);
o += c;
} else if (g <= e) ; else if (g <= r) {
n.length = o + c;
this._generateTriangle(n, o, f, u[l], a[d[1]]);
o += c;
} else {
n.length = o + c;
this._generateTriangle(n, o, f, u[l], h[l]);
o += c;
}
y += s;
g += s;
}
}
}
this.allocWorldVerts(t);
this.updateWorldVerts(t);
};
e.prototype.allocWorldVerts = function(t) {
var e = t.node._color._val, i = this._renderData, r = this.floatsPerVert, n = this._local, o = n.length / r;
this.verticesCount = this.indicesCount = o;
var s = i._flexBuffer;
s.reserve(o, o) && this.updateIndices();
s.used(this.verticesCount, this.indicesCount);
for (var a = i.vDatas[0], c = i.uintVDatas[0], l = this.uvOffset, u = 0; u < n.length; u += r) {
var h = u + l;
a[h] = n[h];
a[h + 1] = n[h + 1];
c[h + 2] = e;
}
};
e.prototype.updateIndices = function() {
for (var t = this._renderData.iDatas[0], e = 0; e < t.length; e++) t[e] = e;
};
e.prototype.updateWorldVerts = function() {
for (var t = this._local, e = this._renderData.vDatas[0], i = this.floatsPerVert, r = 0, n = e.length; r < n; r += i) {
e[r] = t[r];
e[r + 1] = t[r + 1];
}
};
e.prototype._generateTriangle = function(t, e, i, r, n) {
var o = c, s = o[0], a = o[1], l = o[2], u = o[3], h = this.floatsPerVert;
t[e] = i.x;
t[e + 1] = i.y;
t[e + h] = r.x;
t[e + h + 1] = r.y;
t[e + 2 * h] = n.x;
t[e + 2 * h + 1] = n.y;
var f, p, d = this.uvOffset;
f = (i.x - s) / (l - s);
p = (i.y - a) / (u - a);
this._generateUV(f, p, t, e + d);
f = (r.x - s) / (l - s);
p = (r.y - a) / (u - a);
this._generateUV(f, p, t, e + h + d);
f = (n.x - s) / (l - s);
p = (n.y - a) / (u - a);
this._generateUV(f, p, t, e + 2 * h + d);
};
e.prototype._generateUV = function(t, e, i, r) {
var n = l, o = n[0] + (n[2] - n[0]) * t, s = n[4] + (n[6] - n[4]) * t, a = n[1] + (n[3] - n[1]) * t, c = n[5] + (n[7] - n[5]) * t;
i[r] = o + (s - o) * e;
i[r + 1] = a + (c - a) * e;
};
return e;
}(o.default);
i.default = m;
cc._RF.pop();
}, {
"./MultiAssembler": "MultiAssembler"
} ],
MultiAssemblerSimple: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "aa9e0lVvBJP9I4EFlhtYCJc", "MultiAssemblerSimple");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.updateRenderData = function(t) {
this.packToDynamicAtlas(t, t._spriteFrame);
if (t._vertsDirty) {
this.updateUVs(t);
this.updateVerts(t);
this.updateTextureIdx(t);
t._vertsDirty = !1;
}
};
e.prototype.updateUVs = function(t) {
for (var e = t._spriteFrame.uv, i = this.uvOffset, r = this.floatsPerVert, n = this._renderData.vDatas[0], o = 0; o < 4; o++) {
var s = 2 * o, a = r * o + i;
n[a] = e[s];
n[a + 1] = e[s + 1];
}
};
e.prototype.updateVerts = function(t) {
var e, i, r, n, o = t.node, s = o.width, a = o.height, c = o.anchorX * s, l = o.anchorY * a;
if (t.trim) {
e = -c;
i = -l;
r = s - c;
n = a - l;
} else {
var u = t.spriteFrame, h = u._originalSize.width, f = u._originalSize.height, p = u._rect.width, d = u._rect.height, y = u._offset, g = s / h, v = a / f, m = y.x + (h - p) / 2, _ = y.x - (h - p) / 2;
e = m * g - c;
i = (y.y + (f - d) / 2) * v - l;
r = s + _ * g - c;
n = a + (y.y - (f - d) / 2) * v - l;
}
var b = this._local;
b[0] = e;
b[1] = i;
b[2] = r;
b[3] = n;
this.updateWorldVerts(t);
};
return e;
}(t("./MultiAssembler").default);
i.default = o;
var s = o.prototype, a = renderer.SimpleSprite2D.prototype;
s.updateWorldVerts = function() {
this._dirtyPtr[0] |= cc.Assembler.FLAG_VERTICES_DIRTY;
};
s._extendNative = function() {
a.ctor.call(this);
};
s.initLocal = function() {
this._local = new Float32Array(8);
a.setLocalData.call(this, this._local);
};
cc._RF.pop();
}, {
"./MultiAssembler": "MultiAssembler"
} ],
MultiAssemblerSliced: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "0f3a2cHs8tKfqzmBuX9KEnV", "MultiAssemblerSliced");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.initData = function() {
this.verticesCount = 16;
this.indicesCount = 54;
if (!(this._renderData.meshCount > 0)) {
this._renderData.createFlexData(0, this.verticesCount, this.indicesCount, this.getVfmt());
for (var t = this._renderData.iDatas[0], e = 0, i = 0; i < 3; ++i) for (var r = 0; r < 3; ++r) {
var n = 4 * i + r;
t[e++] = n;
t[e++] = n + 1;
t[e++] = n + 4;
t[e++] = n + 1;
t[e++] = n + 5;
t[e++] = n + 4;
}
}
};
e.prototype.initLocal = function() {
this._local = [];
this._local.length = 8;
};
e.prototype.updateRenderData = function(t) {
var e = t._spriteFrame;
this.packToDynamicAtlas(t, e);
if (t._vertsDirty) {
this.updateUVs(t);
this.updateVerts(t);
this.updateTextureIdx(t);
t._vertsDirty = !1;
}
};
e.prototype.updateVerts = function(t) {
var e = t.node, i = e.width, r = e.height, n = e.anchorX * i, o = e.anchorY * r, s = t.spriteFrame, a = s.insetLeft, c = s.insetRight, l = s.insetTop, u = s.insetBottom, h = i - a - c, f = r - l - u, p = i / (a + c), d = r / (l + u);
p = isNaN(p) || p > 1 ? 1 : p;
d = isNaN(d) || d > 1 ? 1 : d;
h = h < 0 ? 0 : h;
f = f < 0 ? 0 : f;
var y = this._local;
y[0] = -n;
y[1] = -o;
y[2] = a * p - n;
y[3] = u * d - o;
y[4] = y[2] + h;
y[5] = y[3] + f;
y[6] = i - n;
y[7] = r - o;
this.updateWorldVerts(t);
};
e.prototype.updateUVs = function(t) {
for (var e = this._renderData.vDatas[0], i = t.spriteFrame.uvSliced, r = this.uvOffset, n = this.floatsPerVert, o = 0; o < 4; ++o) for (var s = 0; s < 4; ++s) {
var a = 4 * o + s, c = i[a], l = a * n;
e[l + r] = c.u;
e[l + r + 1] = c.v;
}
};
e.prototype.updateWorldVerts = function(t) {
for (var e = t.node._worldMatrix.m, i = e[0], r = e[1], n = e[4], o = e[5], s = e[12], a = e[13], c = this._local, l = this._renderData.vDatas[0], u = this.floatsPerVert, h = 0; h < 4; ++h) for (var f = c[2 * h + 1], p = 0; p < 4; ++p) {
var d = c[2 * p], y = (4 * h + p) * u;
l[y] = d * i + f * n + s;
l[y + 1] = d * r + f * o + a;
}
};
return e;
}(t("./MultiAssembler").default);
i.default = o;
var s = o.prototype, a = renderer.SlicedSprite2D.prototype;
s.updateWorldVerts = function() {
this._dirtyPtr[0] |= cc.Assembler.FLAG_VERTICES_DIRTY;
};
s._extendNative = function() {
a.ctor.call(this);
};
s.initLocal = function() {
this._local = new Float32Array(8);
a.setLocalData.call(this, this._local);
};
cc._RF.pop();
}, {
"./MultiAssembler": "MultiAssembler"
} ],
MultiAssemblerTiled: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "825c0CUhQhLHIOj5ulatGUZ", "MultiAssemblerTiled");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.contentWidth = 0;
e.contentHeight = 0;
e.rectWidth = 0;
e.rectHeight = 0;
e.hRepeat = 0;
e.vRepeat = 0;
e.row = 0;
e.col = 0;
e.sizableWidth = 0;
e.sizableHeight = 0;
return e;
}
e.prototype.initData = function() {
this.verticesCount = 0;
this.contentWidth = 0;
this.contentHeight = 0;
this.rectWidth = 0;
this.rectHeight = 0;
this.hRepeat = 0;
this.vRepeat = 0;
this.row = 0;
this.col = 0;
if (!(this._renderData.meshCount > 0)) {
this._renderData.createFlexData(0, 4, 6, this.getVfmt());
this._updateIndices();
}
};
e.prototype.initLocal = function() {
this._local = {
x: [],
y: []
};
};
e.prototype._updateIndices = function() {
for (var t = this._renderData.iDatas[0], e = 0, i = 0, r = t.length; e < r; e += 6, 
i += 4) {
t[e] = i;
t[e + 1] = i + 1;
t[e + 2] = i + 2;
t[e + 3] = i + 1;
t[e + 4] = i + 3;
t[e + 5] = i + 2;
}
};
e.prototype.updateRenderData = function(t) {
var e = t._spriteFrame;
this.packToDynamicAtlas(t, e);
var i = t.node, r = this.contentWidth = Math.abs(i.width), n = this.contentHeight = Math.abs(i.height), o = e._rect, s = e.insetLeft, a = e.insetRight, c = o.width - s - a, l = e.insetTop, u = e.insetBottom, h = o.height - l - u;
this.sizableWidth = r - s - a;
this.sizableHeight = n - l - u;
this.sizableWidth = this.sizableWidth > 0 ? this.sizableWidth : 0;
this.sizableHeight = this.sizableHeight > 0 ? this.sizableHeight : 0;
var f = this.hRepeat = 0 === c ? this.sizableWidth : this.sizableWidth / c, p = this.vRepeat = 0 === h ? this.sizableHeight : this.sizableHeight / h, d = (this.row = Math.ceil(p + 2)) * (this.col = Math.ceil(f + 2));
this.verticesCount = 4 * d;
this.indicesCount = 6 * d;
var y = this._renderData._flexBuffer;
if (y.reserve(this.verticesCount, this.indicesCount)) {
this._updateIndices();
this.updateColor(t);
}
y.used(this.verticesCount, this.indicesCount);
if (t._vertsDirty) {
this.updateUVs(t);
this.updateVerts(t);
this.updateTextureIdx(t);
t._vertsDirty = !1;
}
};
e.prototype.updateVerts = function(t) {
var e = t._spriteFrame, i = e._rect, r = t.node, n = r.anchorX * r.width, o = r.anchorY * r.height, s = this.row, a = this.col, c = this.contentWidth, l = this.contentHeight, u = this._local, h = u.x, f = u.y;
h.length = f.length = 0;
var p, d, y = e.insetLeft, g = e.insetRight, v = i.width - y - g, m = e.insetTop, _ = e.insetBottom, b = i.height - m - _, w = r.width / (y + g) > 1 ? 1 : r.width / (y + g), E = r.height / (m + _) > 1 ? 1 : r.height / (m + _);
p = v > 0 ? Math.floor(1e3 * this.sizableWidth) / 1e3 % v == 0 ? v : this.sizableWidth % v : this.sizableWidth;
d = b > 0 ? Math.floor(1e3 * this.sizableHeight) / 1e3 % b == 0 ? b : this.sizableHeight % b : this.sizableHeight;
for (var T = 0; T <= a; T++) 0 === T ? h[T] = -n : T > 0 && T < a ? h[T] = 1 === T ? y * w + Math.min(v, this.sizableWidth) - n : v > 0 ? T === a - 1 ? y + p + v * (T - 2) - n : y + Math.min(v, this.sizableWidth) + v * (T - 2) - n : y + this.sizableWidth - n : T === a && (h[T] = Math.min(y + this.sizableWidth + g, c) - n);
for (T = 0; T <= s; T++) 0 === T ? f[T] = -o : T > 0 && T < s ? f[T] = 1 === T ? _ * E + Math.min(b, this.sizableHeight) - o : b > 0 ? T === s - 1 ? _ + d + (T - 2) * b - o : _ + Math.min(b, this.sizableHeight) + (T - 2) * b - o : _ + this.sizableHeight - o : T === s && (f[T] = Math.min(_ + this.sizableHeight + m, l) - o);
this.updateWorldVerts(t);
};
e.prototype.updateWorldVerts = function(t) {
for (var e, i, r, n, o = this._renderData, s = this._local, a = s.x, c = s.y, l = o.vDatas[0], u = this.row, h = this.col, f = t.node._worldMatrix.m, p = (f[0], 
f[1], f[4], f[5], f[12], f[13], this.floatsPerVert), d = 0, y = 0, g = u; y < g; ++y) {
r = c[y];
n = c[y + 1];
for (var v = 0, m = h; v < m; ++v) {
e = a[v];
i = a[v + 1];
l[d] = e;
l[d + 1] = r;
l[d += p] = i;
l[d + 1] = r;
l[d += p] = e;
l[d + 1] = n;
l[d += p] = i;
l[d + 1] = n;
d += p;
}
}
};
e.prototype.updateUVs = function(t) {
var e = this._renderData.vDatas[0];
if (e) for (var i = t._spriteFrame, r = i._rect, n = i.insetLeft, o = i.insetRight, s = r.width - n - o, a = i.insetTop, c = i.insetBottom, l = r.height - a - c, u = this.row, h = this.col, f = this.hRepeat, p = this.vRepeat, d = 0, y = 0, g = t.spriteFrame.uv, v = t.spriteFrame.uvSliced, m = t.spriteFrame._rotated, _ = this.floatsPerVert, b = this.uvOffset, w = [], E = [], T = 0, P = u; T < P; ++T) {
y = this.sizableHeight > l ? this.sizableHeight >= T * l ? 1 : p % 1 : p;
for (var C = 0, S = h; C < S; ++C) {
d = this.sizableWidth > s ? this.sizableWidth >= C * s ? 1 : f % 1 : f;
if (m) {
if (0 === T) {
w[0] = v[0].u;
w[1] = v[0].u;
w[2] = v[4].u + (v[8].u - v[4].u) * y;
} else if (T < u - 1) {
w[0] = v[4].u;
w[1] = v[4].u;
w[2] = v[4].u + (v[8].u - v[4].u) * y;
} else if (T === u - 1) {
w[0] = v[8].u;
w[1] = v[8].u;
w[2] = v[12].u;
}
if (0 === C) {
E[0] = v[0].v;
E[1] = v[1].v + (v[2].v - v[1].v) * d;
E[2] = v[0].v;
} else if (C < h - 1) {
E[0] = v[1].v;
E[1] = v[1].v + (v[2].v - v[1].v) * d;
E[2] = v[1].v;
} else if (C === h - 1) {
E[0] = v[2].v;
E[1] = v[3].v;
E[2] = v[2].v;
}
w[3] = w[2];
E[3] = E[1];
} else {
if (0 === C) {
w[0] = v[0].u;
w[1] = v[1].u + (v[2].u - v[1].u) * d;
w[2] = g[0];
} else if (C < h - 1) {
w[0] = v[1].u;
w[1] = v[1].u + (v[2].u - v[1].u) * d;
w[2] = v[1].u;
} else if (C === h - 1) {
w[0] = v[2].u;
w[1] = v[3].u;
w[2] = v[2].u;
}
if (0 === T) {
E[0] = v[0].v;
E[1] = v[0].v;
E[2] = v[4].v + (v[8].v - v[4].v) * y;
} else if (T < u - 1) {
E[0] = v[4].v;
E[1] = v[4].v;
E[2] = v[4].v + (v[8].v - v[4].v) * y;
} else if (T === u - 1) {
E[0] = v[8].v;
E[1] = v[8].v;
E[2] = v[12].v;
}
w[3] = w[1];
E[3] = E[2];
}
e[b] = w[0];
e[b + 1] = E[0];
e[b += _] = w[1];
e[b + 1] = E[1];
e[b += _] = w[2];
e[b + 1] = E[2];
e[b += _] = w[3];
e[b + 1] = E[3];
b += _;
}
}
};
return e;
}(t("./MultiAssembler").default);
i.default = o;
cc._RF.pop();
}, {
"./MultiAssembler": "MultiAssembler"
} ],
MultiAssembler: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ac3d4pn45pPbIIUTWTJWqn4", "MultiAssembler");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = cc.gfx, s = new o.VertexFormat([ {
name: o.ATTR_POSITION,
type: o.ATTR_TYPE_FLOAT32,
num: 2
}, {
name: o.ATTR_UV0,
type: o.ATTR_TYPE_FLOAT32,
num: 2
}, {
name: o.ATTR_COLOR,
type: o.ATTR_TYPE_UINT8,
num: 4,
normalize: !0
}, {
name: "a_texture_idx",
type: o.ATTR_TYPE_FLOAT32,
num: 1
} ]), a = function(t) {
n(e, t);
function e() {
var e = t.call(this) || this;
e.floatsPerVert = 6;
e.verticesCount = 4;
e.indicesCount = 6;
e.uvOffset = 2;
e.colorOffset = 4;
e.textureIdxOffset = 5;
e._renderData = null;
e._local = [];
e._renderData = new cc.RenderData();
e._renderData.init(e);
e.initData();
e.initLocal();
return e;
}
Object.defineProperty(e.prototype, "verticesFloats", {
get: function() {
return this.verticesCount * this.floatsPerVert;
},
enumerable: !1,
configurable: !0
});
e.prototype.initData = function() {
var t = this._renderData;
t.createFlexData(0, this.verticesCount, this.indicesCount, this.getVfmt());
for (var e = t.iDatas[0], i = e.length / 6, r = 0, n = 0; r < i; r++) {
var o = 4 * r;
e[n++] = o;
e[n++] = o + 1;
e[n++] = o + 2;
e[n++] = o + 1;
e[n++] = o + 3;
e[n++] = o + 2;
}
};
e.prototype.initLocal = function() {
this._local = [];
this._local.length = 4;
};
e.prototype.getBuffer = function() {
return cc.renderer._handle.getBuffer("mesh", this.getVfmt());
};
e.prototype.getVfmt = function() {
return s;
};
e.prototype.updateColor = function(t, e) {
this._dirtyPtr[0] |= cc.Assembler.FLAG_VERTICES_OPACITY_CHANGED;
var i = this._renderData.uintVDatas[0];
if (i) {
e = null != e ? e : t.node.color._val;
for (var r = this.floatsPerVert, n = this.colorOffset, o = i.length; n < o; n += r) i[n] = e;
}
};
e.prototype.updateTextureIdx = function(t) {
for (var e = this._renderData.vDatas[0], i = 0; i < this.verticesCount; i++) e[this.floatsPerVert * i + this.textureIdxOffset] = t.textureIdx;
};
e.prototype.updateWorldVerts = function(t) {
var e = this._local, i = this._renderData.vDatas[0], r = t.node._worldMatrix.m, n = (r[0], 
r[1], r[4], r[5], r[12], r[13], e[0]), o = e[2], s = e[1], a = e[3], c = this.floatsPerVert, l = 0;
i[l] = n;
i[l + 1] = s;
i[l += c] = o;
i[l + 1] = s;
i[l += c] = n;
i[l + 1] = a;
i[l += c] = o;
i[l + 1] = a;
};
e.prototype.fillBuffers = function(t, e) {
e.worldMatDirty && this.updateWorldVerts(t);
var i = this._renderData, r = i.vDatas[0], n = i.iDatas[0], o = this.getBuffer(e), s = o.request(this.verticesCount, this.indicesCount), a = s.byteOffset >> 2, c = o._vData;
r.length + a > c.length ? c.set(r.subarray(0, c.length - a), a) : c.set(r, a);
for (var l = o._iData, u = s.indiceOffset, h = s.vertexOffset, f = 0, p = n.length; f < p; f++) l[u++] = h + n[f];
};
e.prototype.packToDynamicAtlas = function(t, e) {
if (!e._original && cc.dynamicAtlasManager && e._texture.packable) {
var i = cc.dynamicAtlasManager.insertSpriteFrame(e);
i && e._setDynamicAtlasFrame(i);
}
var r = t._materials[0];
if (r && r.getProperty("texture") !== e._texture._texture) {
t._vertsDirty = !0;
t._updateMaterial();
}
};
return e;
}(cc.Assembler);
i.default = a;
cc._RF.pop();
}, {} ],
MultiSprite: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "c922bwmEw5OV4VVCBcsN/cG", "MultiSprite");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("../../../utils/EditorTool"), a = t("./assembler/MultiAssemblerBarFilled"), c = t("./assembler/MultiAssemblerRadialFilled"), l = t("./assembler/MultiAssemblerSimple"), u = t("./assembler/MultiAssemblerSliced"), h = t("./assembler/MultiAssemblerTiled"), f = t("./MultiTextureManager"), p = cc._decorator, d = p.ccclass, y = (p.property, 
p.requireComponent, p.menu), g = p.inspector, v = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._textureIdx = 0;
return e;
}
Object.defineProperty(e.prototype, "textureIdx", {
get: function() {
return this._textureIdx;
},
set: function(t) {
this._textureIdx = cc.misc.clampf(t, 0, f.MultiTextureManager.MAX_TEXTURE_NUM - 1);
this.setVertsDirty();
},
enumerable: !1,
configurable: !0
});
e.prototype.resetInEditor = function() {
var t = this;
s.default.load("res/shader/materials/multiTexture.mtl").then(function(e) {
e && t.setMaterial(0, e);
});
};
e.prototype.onLoad = function() {
var e;
null === (e = t.prototype.onLoad) || void 0 === e || e.call(this);
f.MultiTextureManager.addSprite(this);
};
e.prototype.onDestroy = function() {
var e;
null === (e = t.prototype.onDestroy) || void 0 === e || e.call(this);
f.MultiTextureManager.removeSprite(this);
};
e.prototype._updateMaterial = function() {
var t = this.getMaterial(0);
if (t) {
var e = null, i = null;
this.spriteFrame && (i = (e = this.spriteFrame.getTexture()) && e.getImpl());
if (t.name.indexOf("multiTexture") >= 0) {
f.MultiTextureManager.init(t._material);
var r = f.MultiTextureManager.getIdx(e);
r >= 0 && (this.textureIdx = r);
t.getProperty("texture" + this.textureIdx, 0) !== i && t.setProperty("texture" + this.textureIdx, e);
} else t.getProperty("texture", 0) !== i && t.setProperty("texture", e);
}
cc.BlendFunc.prototype._updateMaterial.call(this);
};
return o([ d, y("c2f/UI/MultiSprite"), g("packages://inspector/inspectors/comps/sprite.js") ], e);
}(cc.Sprite);
i.default = v;
cc.Assembler.register(v, {
getConstructor: function(t) {
var e = l.default;
switch (t.type) {
case cc.Sprite.Type.SLICED:
e = u.default;
break;

case cc.Sprite.Type.TILED:
e = h.default;
break;

case cc.Sprite.Type.FILLED:
e = t._fillType === cc.Sprite.FillType.RADIAL ? c.default : a.default;
}
return e;
}
});
cc._RF.pop();
}, {
"../../../utils/EditorTool": "EditorTool",
"./MultiTextureManager": "MultiTextureManager",
"./assembler/MultiAssemblerBarFilled": "MultiAssemblerBarFilled",
"./assembler/MultiAssemblerRadialFilled": "MultiAssemblerRadialFilled",
"./assembler/MultiAssemblerSimple": "MultiAssemblerSimple",
"./assembler/MultiAssemblerSliced": "MultiAssemblerSliced",
"./assembler/MultiAssemblerTiled": "MultiAssemblerTiled"
} ],
MultiTextureManager: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "4fc9cgEvWxKZK0hYF2jjQq7", "MultiTextureManager");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.MultiTextureManager = void 0;
var r = function() {
function t() {}
t.init = function(t) {
if (!this._init && t instanceof cc.Material && !(t instanceof cc.MaterialVariant)) {
this._init = !0;
this._mat = t;
this._mat.addRef();
}
};
t.addSprite = function(t) {
this._sprites.add(t);
};
t.removeSprite = function(t) {
this._sprites.delete(t);
};
t.setTexture = function(e, i) {
var r = this;
if (this._init) if (i instanceof cc.Texture2D) {
e = cc.misc.clampf(e, 0, t.MAX_TEXTURE_NUM - 1);
var n = this._texMap.get(e);
if (n !== i) {
n && n.decRef();
i.addRef();
this._texMap.set(e, i);
this._mat.setProperty("texture" + e, i);
this._sprites.forEach(function(e) {
for (var i = e.getMaterial(0), n = 0; n < t.MAX_TEXTURE_NUM; n++) {
var o = r._texMap.get(n);
if (o) {
var s = o.getImpl();
i.getProperty("texture" + n, 0) !== s && i.setProperty("texture" + n, o);
}
}
i._effect._dirty = !0;
e._updateMaterial();
});
}
} else cc.error("[MultiSpriteManager.setTexture] 参数类型错误"); else cc.error("[MultiSpriteManager.setTexture] 未初始化MultiSpriteManager");
};
t.getIdx = function(e) {
if (this._init) {
for (var i = 0; i < t.MAX_TEXTURE_NUM; i++) if (this._texMap.get(i) === e || this._mat.getProperty("texture" + i, 0) === e.getImpl()) return i;
return -1;
}
cc.error("[MultiSpriteManager.getIdx] 未初始化MultiSpriteManager");
};
t.MAX_TEXTURE_NUM = 8;
t._init = !1;
t._mat = null;
t._texMap = new Map();
t._sprites = new Set();
return t;
}();
i.MultiTextureManager = r;
cc._RF.pop();
}, {} ],
NetWork: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "c5233baVGtFNICt/0pPgcEk", "NetWork");
var r = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function s(t) {
try {
c(r.next(t));
} catch (t) {
o(t);
}
}
function a(t) {
try {
c(r.throw(t));
} catch (t) {
o(t);
}
}
function c(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(s, a);
var e;
}
c((r = r.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var i, r, n, o, s = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function a(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;s; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
s.label++;
return {
value: o[1],
done: !1
};

case 5:
s.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = s.ops.pop();
s.trys.pop();
continue;

default:
if (!(n = s.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
s = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
s.label = o[1];
break;
}
if (6 === o[0] && s.label < n[1]) {
s.label = n[1];
n = o;
break;
}
if (n && s.label < n[2]) {
s.label = n[2];
s.ops.push(o);
break;
}
n[2] && s.ops.pop();
s.trys.pop();
continue;
}
o = e.call(t, s);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
}
if (5 & o[0]) throw o[1];
return {
value: o[0] ? o[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = t("../libs/rc4/RC4"), s = t("./ws/WSByProtobuf"), a = t("./ws/WebService"), c = t("../../resources/proto/msgid"), l = t("../../resources/proto/msgname"), u = t("../define/C2FConst"), h = t("msgpack"), f = [ 37, 19, 8, 169, 132, 244, 222, 112, 172, 185, 164, 69, 131, 210, 85, 37 ], p = function() {
function e() {
this.enRc4 = null;
this.deRc4 = null;
this.waitHeartTimer = null;
this.heartbeatTimer = null;
this.msgListeners = [];
this.waitListenerCnt = 0;
this.plrMsgHandle = null;
}
Object.defineProperty(e.prototype, "toUI", {
get: function() {
return this._toUI;
},
set: function(t) {
this._toUI = t;
},
enumerable: !1,
configurable: !0
});
e.prototype.initService = function() {
return r(this, void 0, void 0, function() {
return n(this, function(t) {
switch (t.label) {
case 0:
if (!this.service) return [ 3, 1 ];
this.service.purge();
return [ 3, 3 ];

case 1:
this.service = new s.WSByProtobuf();
this.service.setWsEventCb(this.onWSEvent.bind(this));
return [ 4, this.loadProtoFile() ];

case 2:
t.sent() ? this.initMsgIds() : c2f.log.logNet("failed to load proto!");
t.label = 3;

case 3:
return [ 2 ];
}
});
});
};
e.prototype.initMsgIds = function() {
this.service.setMessageCb(this.onWSMsg.bind(this));
};
e.prototype.reInitRc4 = function() {
this.enRc4 = new o.RC4(f);
this.deRc4 = new o.RC4(f);
};
e.prototype.loadProtoFile = function() {
return r(this, void 0, void 0, function() {
var e = this;
return n(this, function() {
return [ 2, new Promise(function(i) {
t("protobuf").loadProtoFile("proto/game", function(t, r) {
if (t) {
cc.log(t);
i(!1);
} else {
e.service.setRoot(r);
i(!0);
}
});
}) ];
});
});
};
e.prototype.setPlrMsgHandle = function(t) {
this.plrMsgHandle = t;
};
e.prototype.connect = function(t, e) {
this.service.tcpConnet(t, e);
};
e.prototype.addListener = function(t, e, i, r) {
void 0 === r && (r = !1);
this.msgListeners.push({
view: t,
ops: e,
callback: i,
type: "persist",
getErr: r
});
};
e.prototype.onWSEvent = function(t) {
switch (t) {
case a.SocketState.Connected:
this.reInitRc4();
break;

case a.SocketState.Error:
this.toUI.hideWaitUI();
this.toUI.showErrorMsg(u.C2FConst.NetErrOffline);
break;

case a.SocketState.ConnectTimeOut:
this.toUI.showWaitUI();
break;

case a.SocketState.ReconnectSuc:
this.toUI.hideWaitUI();
this.toUI.showReloginView();
}
};
e.prototype.sendMsg = function(t, e, i) {
if (this.service.tcpSend(t, e)) {
void 0 === i && (i = {});
this.msgListeners.push({
view: i.view,
ops: i.ops,
callback: i.callback,
waitNet: i.waitNet,
getErr: i.getErr,
type: "once"
});
if (i.waitNet) {
this.waitListenerCnt += 1;
this.waitListenerCnt > 0 && this.toUI.showWaitUI();
}
} else i && i.callback && i.callback(t, {
ErrorCode: u.C2FConst.NetErrOffline
});
};
e.prototype.onWSMsg = function(t, e) {
var i = void 0 === e.ErrorCode || 0 === e.ErrorCode;
void 0 === l.msgname[t] && cc.log("network.dispatch msgName is nil: op = " + t);
i && this.plrMsgHandle && this.plrMsgHandle(t, e);
for (var r = [], n = this.msgListeners.length - 1; n >= 0; n--) {
var o = this.msgListeners[n];
if (void 0 === o.view || null != o.view.node) if (void 0 !== o.ops && null !== o.ops) {
for (var s = o.ops, a = 0; a < s.length; a++) if (s[a] === t) {
(i || o.getErr) && o.callback && o.callback(t, e);
"once" == o.type && r.push(n);
break;
}
} else r.push(n); else r.push(n);
}
for (n = 0; n < r.length; n++) {
var c = r[n];
if (this.msgListeners[c] && this.msgListeners[c].waitNet) {
this.waitListenerCnt -= 1;
this.toUI.hideWaitUI();
}
this.msgListeners.splice(c, 1);
}
i || this.toUI.showErrorMsg(e.ErrorCode);
};
e.prototype.startHeartbeat = function() {
var t = this, e = function() {
if (t.toUI.isOpenReloginView()) {
t.clearHeartbeatTimer();
t.clearWaitHeartTimer();
} else {
t.purge();
t.toUI.showErrorMsg(u.C2FConst.NetErrOffline);
}
}, i = c.msgid.C_TimeSync, r = c.msgid.GS_TimeSync_R, n = function() {
t.sendMsg(i, {}, {
ops: [ r ],
callback: t.clearWaitHeartTimer.bind(t)
});
t.waitHeartTimer || (t.waitHeartTimer = setTimeout(e, 3e4));
};
this.clearHeartbeatTimer();
n();
this.heartbeatTimer = setInterval(n, 6e3);
};
e.prototype.clearWaitHeartTimer = function() {
if (this.waitHeartTimer) {
clearTimeout(this.waitHeartTimer);
this.waitHeartTimer = null;
}
};
e.prototype.clearHeartbeatTimer = function() {
if (this.heartbeatTimer) {
clearInterval(this.heartbeatTimer);
this.heartbeatTimer = null;
}
};
e.prototype.purge = function() {
this.clearHeartbeatTimer();
this.clearWaitHeartTimer();
this.service.purge();
};
e.prototype.getMsgName = function(t) {
return l.msgname[t];
};
e.prototype.decodeBinary = function(t) {
return h.decode(t.toBuffer());
};
e.getInstance = function() {
this._instance || (this._instance = new e());
return this._instance;
};
e._instance = null;
return e;
}();
c2f.net = p.getInstance();
cc._RF.pop();
}, {
"../../resources/proto/msgid": void 0,
"../../resources/proto/msgname": void 0,
"../define/C2FConst": "C2FConst",
"../libs/rc4/RC4": "RC4",
"./ws/WSByProtobuf": "WSByProtobuf",
"./ws/WebService": "WebService",
msgpack: "msgpack",
protobuf: "protobuf"
} ],
NodeUtil: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "0279cJat3xCqZMbQ8gaWoSS", "NodeUtil");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = function() {
function t() {}
t.getFreeVecTmp = function() {
var t = this.arrVecTmp.findIndex(function(t) {
return t.z < 0;
});
if (t < 0) {
var e = cc.v3(0, 0, 0);
this.arrVecTmp.push(e);
return e;
}
var i = this.arrVecTmp[t];
i.x = 0;
i.y = 0;
i.z = 0;
return i;
};
t.releaseVecTmp = function(t) {
t && (t.z = -1);
};
t.clearVecTmp = function() {
this.arrVecTmp = [];
};
t.getNodePosition = function(t, e) {
e || (e = cc.v2(0, 0));
return t.getPosition(e);
};
t.getNodeWorldPosition = function(t, e) {
e || (e = cc.v3(0, 0));
t.convertToWorldSpaceAR(cc.Vec3.ZERO, e);
return e;
};
t.offestNodePos = function(t, e, i) {
var r = this.getNodePosition(t);
r.x += e;
r.y += i;
t.setPosition(r);
};
t.getTwoNodeAngle = function(t, e) {
var i = this.getNodeWorldPosition(t), r = this.getNodeWorldPosition(e), n = c2f.utils.vec.angleEx(i, r);
this.releaseVecTmp(i);
this.releaseVecTmp(r);
return n;
};
t.getNodeInPanelPos = function(t, e) {
var i = this.getNodeWorldPosition(t), r = e.convertToNodeSpaceAR(i);
this.releaseVecTmp(i);
return r;
};
t.arrVecTmp = [];
return t;
}();
c2f.utils.node = r;
cc._RF.pop();
}, {} ],
Notify: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "e8f29H8xytOaoHW/EDXyt8N", "Notify");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.Notify = void 0;
var s = cc._decorator, a = s.ccclass, c = s.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lab_content = null;
e.animation = null;
return e;
}
e.prototype.onLoad = function() {
this.animation && this.animation.on(cc.Animation.EventType.FINISHED, this.onFinished, this);
};
e.prototype.onFinished = function() {
this.node.destroy();
};
e.prototype.toast = function(t) {
var e = t;
if (c2f.utils.str.isAllDigits(t)) {
var i = c2f.language.words(Number(t));
i && (e = i);
}
c2f.gui.gameFont && this.lab_content.font != c2f.gui.gameFont && (this.lab_content.font = c2f.gui.gameFont);
this.lab_content.string = e;
};
o([ c(cc.Label) ], e.prototype, "lab_content", void 0);
o([ c(cc.Animation) ], e.prototype, "animation", void 0);
return o([ a ], e);
}(cc.Component);
i.Notify = l;
cc._RF.pop();
}, {} ],
ObjectUtil: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "92d18NG6eNAfLcfCvgnXn7k", "ObjectUtil");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = function() {
function t() {}
t.isObject = function(t) {
return "[object Object]" === Object.prototype.toString.call(t);
};
t.deepCopy = function(t) {
if (null == t || "object" != typeof t) return t;
var e = null;
if (t instanceof Date) {
(e = new Date()).setTime(t.getTime());
return e;
}
if (t instanceof Array) {
e = [];
for (var i = 0, r = t.length; i < r; i++) e[i] = this.deepCopy(t[i]);
return e;
}
if (t instanceof Object) {
e = {};
for (var n in t) t.hasOwnProperty(n) && (e[n] = this.deepCopy(t[n]));
return e;
}
console.warn("不支持的类型：" + e);
};
t.deepCopyOne = function(t) {
t.self = t;
var e = [];
return JSON.parse(JSON.stringify(t, function(t, i) {
if ("object" == typeof i && null !== i) {
if (e.includes(i)) return;
e.push(i);
}
return i;
}));
};
t.copy = function(t) {
return JSON.parse(JSON.stringify(t));
};
t.modifyKeysLowercase = function(t) {
if (null == t || "object" != typeof t) return t;
if (t instanceof Array) {
for (var e = [], i = 0, r = t.length; i < r; i++) e[i] = this.modifyKeysLowercase(t[i]);
return e;
}
if (t instanceof Object) {
var n = {};
for (var o in t) t.hasOwnProperty(o) && (n[c2f.utils.str.lowercaseFirstLetter(o)] = this.modifyKeysLowercase(t[o]));
return n;
}
};
return t;
}();
c2f.utils.obj = r;
cc._RF.pop();
}, {} ],
PlatformUtil: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "9eaedVDguxNxpH3GccAYzqB", "PlatformUtil");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.PlatformUtil = void 0;
var r = function() {
function t() {}
t.isNativeAndroid = function() {
return !(!cc.sys.isNative || cc.sys.os !== cc.sys.OS_ANDROID);
};
t.isNativeIOS = function() {
return !(!cc.sys.isNative || cc.sys.os !== cc.sys.OS_IOS);
};
t.getPlateform = function() {
return this.isNativeAndroid() ? "android" : this.isNativeIOS() ? "ios" : "h5";
};
t.getSafeAreaR = function() {
var t = cc.sys.getSafeAreaRect();
if (!cc.sys.isNative) {
var e = szg.plat.getSafeArea();
e && (t = e);
}
return t;
};
return t;
}();
i.PlatformUtil = r;
c2f.utils.platform = r;
cc._RF.pop();
}, {} ],
ProgressAdd: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "495b16AbyhIxoIvWp7YkMC9", "ProgressAdd");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.ProgressAdd = void 0;
var s = cc._decorator, a = s.ccclass, c = s.property, l = s.menu, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.onceDur = 1;
e.curBar = null;
e.realValue = null;
return e;
}
e.prototype.onLoad = function() {
this.curBar = this.node.getComponent(cc.ProgressBar);
};
e.prototype.stopAnima = function() {
cc.Tween.stopAllByTarget(this.node);
isNaN(this.realValue) || (this.curBar.progress = this.realValue);
};
e.prototype.setProgress = function(t, e, i) {
this.stopAnima();
this.realValue = t;
i ? this.playAnima(t, e) : this.curBar.progress = t;
};
e.prototype.playAnima = function(t, e) {
if (e > 0) {
var i = (1 - this.curBar.progress) * this.onceDur, r = t * this.onceDur;
cc.tween(this.curBar).to(i, {
progress: 1
}).sequence(cc.tween(this.curBar).set({
progress: 0
}), cc.tween(this.curBar).to(this.onceDur, {
progress: 1
})).repeat(e - 1).set({
progress: 0
}).to(r, {
progress: t
}).start();
} else {
var n = (t - this.curBar.progress) * this.onceDur;
cc.tween(this.curBar).to(n, {
progress: t
}).start();
}
};
o([ c({
serializable: !0
}) ], e.prototype, "onceDur", void 0);
return o([ a, l("c2f/common/ProgressAdd") ], e);
}(cc.Component);
i.ProgressAdd = u;
cc._RF.pop();
}, {} ],
ProgressBarHack: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "f17a8GfyCZPOID27gMupfok", "ProgressBarHack");
Object.defineProperty(i, "__esModule", {
value: !0
});
if (!cc.ProgressBar.prototype.__$CCProgressBarHack$__) {
cc.ProgressBar.prototype.__$CCProgressBarHack$__ = !0;
var r = null, n = Object.getOwnPropertyDescriptor(cc.ProgressBar.prototype, "progress");
n && "function" == typeof n.get && n.get;
n && "function" == typeof n.set && (r = n.set);
Object.defineProperty(cc.ProgressBar.prototype, "progress", {
get: function() {
return this._progressV;
},
set: function(t) {
if ("number" == typeof t && t >= 0 && t <= 1) this._progressV = Math.max(.001, t); else {
this._progressV = .001;
console.error("ProgressBar hack：Invalid value:", t);
}
r && r.call(this, t);
},
enumerable: !0,
configurable: !0
});
}
cc._RF.pop();
}, {} ],
RC4: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "f572a2sDSpFa6sc+iOBluGi", "RC4");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.RC4 = void 0;
var r = function() {
function t(t) {
this._i = 0;
this._j = 0;
this._S = [];
this.initKey(t);
}
t.prototype.initKey = function(t) {
for (var e = this._S, i = 0; i < 256; i++) e[i] = i;
for (var r = t.length, n = (i = 0, 0); i < 256; i++) {
n = (n + e[i] + t[i % r]) % 256;
var o = e[i];
e[i] = e[n];
e[n] = o;
}
};
t.prototype.encrypt = function(t) {
for (var e = 0, i = t.length; e < i; e++) t[e] ^= this.prga();
};
t.prototype.decrypt = function(t) {
for (var e = 0, i = t.length; e < i; e++) t[e] ^= this.prga();
};
t.prototype.prga = function() {
var t = this._S, e = (this._i + 1) % 256, i = (this._j + t[e]) % 256, r = t[e];
t[e] = t[i];
t[i] = r;
this._i = e;
this._j = i;
return t[(t[e] + t[i]) % 256];
};
return t;
}();
i.RC4 = r;
cc._RF.pop();
}, {} ],
RandomManager: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "3e09eJBwfZBsLPqFszZLvMS", "RandomManager");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = function() {
function t() {}
Object.defineProperty(t, "instance", {
get: function() {
null == this._instance && (this._instance = new t());
return this._instance;
},
enumerable: !1,
configurable: !0
});
t.prototype.getRandom = function() {
return this.seedrandom ? this.seedrandom.quick() : Math.random();
};
t.prototype.setSeed = function(t) {
this.seedrandom = new Math.seedrandom(t);
};
t.prototype.getRandomFloat = function(t, e) {
return this.getRandom() * (e - t) + t;
};
t.prototype.getRandomInt = function(t, e, i) {
void 0 === i && (i = 2);
t = Math.ceil(t);
e = Math.floor(e);
switch (i) {
case 1:
return Math.floor(this.getRandom() * (e - t)) + t;

case 2:
return Math.floor(this.getRandom() * (e - t + 1)) + t;

case 3:
return Math.floor(this.getRandom() * (e - t - 1)) + t + 1;
}
return 0;
};
t.prototype.getRandomByMinMaxList = function(t, e, i) {
for (var r = [], n = 0; n < i; n++) r.push(this.getRandomInt(t, e));
return r;
};
t.prototype.getRandomByObjectList = function(t, e) {
for (var i = t.slice(), r = [], n = 0; n < e; n++) {
var o = this.getRandomInt(0, t.length, e);
r.push(i.splice(o, 1)[0]);
}
return r;
};
t.prototype.getRandomBySumList = function(t, e) {
for (var i = e, r = 0, n = [], o = 0; o < t; o++) {
r = this.getRandomInt(0, i, 3);
o == t - 1 ? r = i : i -= r;
n.push(r);
}
return n;
};
return t;
}();
c2f.random = r.instance;
cc._RF.pop();
}, {} ],
RedDotCompProxy: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "7890cdVoaZJFolALdsc/6Nm", "RedDotCompProxy");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = s.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeMask = null;
e.txtCount = null;
return e;
}
e.prototype.onDestroy = function() {
this.dotKey && c2f.dotMgr.deleteDataByCompDestory(this.dotKey, this);
t.prototype.onDestroy.call(this);
};
e.prototype.start = function() {
this.amendDotPos();
};
e.prototype.amendDotPos = function() {
var t = this.node.parent;
if (t) {
var e = (1 - t.anchorX) * t.width * t.scaleX, i = (1 - t.anchorY) * t.height * t.scaleY;
this.node.setPosition(cc.v2(e + this.offset.x, i + this.offset.y));
}
};
e.prototype.setShowType = function(e) {
t.prototype.setShowType.call(this, e);
this.txtCount.node.active = e === c2f.RedDot.ShowType.Number;
this.nodeMask.active = e === c2f.RedDot.ShowType.Mark;
};
e.prototype.updateCount = function(t) {
this.txtCount.string = t.toString();
};
o([ c(cc.Node) ], e.prototype, "nodeMask", void 0);
o([ c(cc.Label) ], e.prototype, "txtCount", void 0);
return o([ a ], e);
}(c2f.RedDotComp);
i.default = l;
cc._RF.pop();
}, {} ],
RedDotComp: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "6510fUIts5JMalhJjkbITAG", "RedDotComp");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.showType = c2f.RedDot.ShowType.Normal;
e.offset = cc.v2(0, 0);
e.dotKey = null;
return e;
}
e.prototype.setDisplay = function(t) {
this.node.active = t;
};
e.prototype.setShowType = function(t) {
this.showType != t && (this.showType = t);
};
e.prototype.setPosOffset = function(t) {
this.offset.x = t.x;
this.offset.y = t.y;
};
e.prototype.setDotKey = function(t) {
this.dotKey = t;
};
e.prototype.getDotKey = function() {
return this.dotKey;
};
return e;
}(t("../gui/layer/UIPControlBase").UIPControlBase);
c2f.RedDotComp = o;
cc._RF.pop();
}, {
"../gui/layer/UIPControlBase": "UIPControlBase"
} ],
RedDotMgr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "abf58cFBpNFsai7TiQV68NX", "RedDotMgr");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = function() {
function t() {
this.root = null;
this.mapCfg = null;
this.mapRedDot = null;
this.funcRedDotRequestUpdate = null;
this.funcModuleIsUnlock = null;
this.mapPreUpdate = null;
this._dotPrefab = null;
this.mapRedDot = new Map();
this.mapPreUpdate = new Map();
this.mapCfg = new Map();
}
Object.defineProperty(t.prototype, "dotPrefab", {
get: function() {
return this._dotPrefab;
},
set: function(t) {
if (this._dotPrefab != t) {
this._dotPrefab && this._dotPrefab.decRef();
this._dotPrefab = t;
this._dotPrefab.addRef();
}
},
enumerable: !1,
configurable: !0
});
t.prototype.clear = function() {
var t;
this.mapRedDot.forEach(function(t) {
t.forEach(function(t) {
t.clear();
});
t.clear();
});
this.mapRedDot.clear();
this.mapPreUpdate.clear();
null === (t = this.root) || void 0 === t || t.destroy();
if (this._dotPrefab) {
this._dotPrefab.decRef();
this._dotPrefab = null;
}
};
t.prototype.getRedCfg = function(t) {
return {
id: t.length > 0 ? t[0] : 0,
moduleId: t.length > 1 ? t[1] : 0,
name: t.length > 2 ? t[2] : "",
parent: t.length > 3 ? t[3] : 0,
showType: t.length > 4 ? t[4] : 1,
offsetX: t.length > 5 ? t[5] : 0,
offsetY: t.length > 6 ? t[6] : 0
};
};
t.prototype.getOptStr = function(t) {
return t ? JSON.stringify(t) : "null";
};
t.prototype.getRedDot = function(t, e) {
var i = null, r = this.mapRedDot.get(t);
if (r) {
var n = this.getOptStr(e);
i = r.get(n);
}
return i;
};
t.prototype.getRedDotByIdKey = function(t, e) {
var i = null, r = this.mapRedDot.get(t);
r && (i = r.get(e));
return i;
};
t.prototype.initWithData = function(t, e, i) {
var r, n = this;
if (this.mapRedDot.size > 0) console.warn("RedDotMgr-> 请不要重复调用红点初始化"); else if (null == t ? void 0 : t.length) {
this.clear();
this.dotPrefab = i;
for (var o = 0; o < t.length; o++) {
var s = this.getRedCfg(t[o]);
this.mapCfg.set(s.id, s);
this.createRedDot(s, null);
}
this.root = null !== (r = this.getRedDot(e, null)) && void 0 !== r ? r : this.createRedDot({
id: e,
moduleId: 0,
name: "main",
parent: 0,
showType: c2f.RedDot.ShowType.Normal,
offsetX: 0,
offsetY: 0
}, null);
this.mapRedDot.forEach(function(t) {
t.forEach(function(t) {
n.setRedDotParent(t, null);
});
});
this.funcRedDotRequestUpdate && this.refreshAllRedDot();
} else console.warn("RedDotMgr-> 红点初始化失败，数据不存在");
};
t.prototype.createRedDot = function(t, e) {
if (!t) return null;
var i = new c2f.RedDot(t, e), r = i.key.getOptStr(), n = this.mapRedDot.get(t.id);
if (n) {
if (n.get(r)) {
console.warn("RedDotMgr-> [" + i.id + "][" + r + "] 重复创建");
return null;
}
n.set(r, i);
} else {
var o = new Map();
o.set(r, i);
this.mapRedDot.set(t.id, o);
}
i.on(c2f.RedDot.Event.EVENT_NEED_UPDATE, this.onEventToUpdate, this);
i.on(c2f.RedDot.Event.EVENT_ADD_DISPLAY, this.onEventAddDisplay, this);
i.on(c2f.RedDot.Event.EVENT_REMOVE_DISPLAY, this.onEventRemovedDisplay, this);
return i;
};
t.prototype.setRedDotParent = function(t, e) {
var i = null, r = this.getOptStr(e), n = this.mapRedDot.get(t.cfg.parent);
n && (i = n.get(r));
i ? t.id !== i.id ? i.addChild(t) : console.warn("RedDotMgr-> " + t.id + " 无法设置自己为自己的父节点") : t.id !== this.root.id && console.error("RedDotMgr-> " + t.id + " 没有父节点");
};
t.prototype.setDisplayProxy = function(t, e, i, r, n) {
void 0 === i && (i = null);
void 0 === r && (r = null);
void 0 === n && (n = null);
if (e && e.isValid) {
var o = this.mapRedDot.get(t);
if (!o) {
o = new Map();
this.mapRedDot.set(t, o);
}
var s = new c2f.DotKey(t, i), a = this.getOptStr(i), c = o.get(a);
if (!c) {
var l = this.mapCfg.get(t);
if (!l) {
console.error("RedDotMgr-> 没有指定红点配置 " + t);
return;
}
c = this.createRedDot(l, i);
this.setRedDotParent(c, r);
}
var u = null, h = null, f = c2f.utils.view.getChildrenByComponent(e, c2f.RedDotComp);
if (f && f.length > 0) {
var p = f[0];
u = p.getDotKey();
if (c.hasDisplay(p) && u.toString() == s.toString()) {
this.addPreupdateRedDot(c, !1);
return;
}
p.node.parent = e;
h = p;
} else {
var d = c2f.res.instantiate(this.dotPrefab, e);
d.parent = e;
d.zIndex = 99;
h = d.getComponent(c2f.RedDotComp);
}
if (h) {
h.setShowType(c.showType);
h.setPosOffset(c.offset);
h.amendDotPos();
h.setDotKey(c.key);
h.updateCount(c.count);
h.setDisplay(c.enabled && c.count > 0);
c.tmpUpdateHandler = n;
c.addDisplay(h);
u && this.removeDisplayByKey(u, h);
}
this.addPreupdateRedDot(c, !1);
} else console.error("RedDotMgr-> 红点宿主节点错误");
};
t.prototype.setRedDotHandlers = function(t, e) {
this.funcRedDotRequestUpdate = t;
this.funcModuleIsUnlock = e;
t && this.mapRedDot.size > 0 && this.refreshAllRedDot();
};
t.prototype.setCount = function(t, e, i) {
var r = this.getRedDot(t, e);
r ? r.setCount(i) : console.warn("RedDotMgr-> setCount 没有找到指定红点: " + t + ", " + e);
};
t.prototype.immediateUpdatePreList = function() {
var t = this;
this.mapPreUpdate.forEach(function(e, i) {
e.forEach(function(e, r) {
var n = t.getRedDotByIdKey(i, r);
if (n) {
t.refreshRedDot(n, e);
n.toRefreshParent();
}
});
e.clear();
});
this.mapPreUpdate.clear();
};
t.prototype.addPreupdateRedDot = function(t, e) {
void 0 === e && (e = !1);
var i = this.mapPreUpdate.get(t.key.id);
if (!i) {
i = new Map();
this.mapPreUpdate.set(t.key.id, i);
}
var r = t.key.getOptStr();
if (i.has(r)) {
var n = i.get(r);
n != e && i.set(r, n || e);
} else {
i.set(r, e);
cc.director.once(cc.Director.EVENT_AFTER_UPDATE, this.immediateUpdatePreList, this);
}
};
t.prototype.refreshAllRedDot = function() {
this.funcRedDotRequestUpdate ? this.addPreupdateRedDot(this.root, !0) : console.warn("RedDotMgr-> 没有设置红点更新方法");
};
t.prototype.refreshRedDotById = function(t) {
var e = this;
if (this.funcRedDotRequestUpdate) {
var i = this.mapRedDot.get(t);
i && i.forEach(function(t) {
e.addPreupdateRedDot(t, !1);
});
} else console.warn("RedDotMgr-> 没有设置红点更新方法，无法更新红点 [" + t + "]");
};
t.prototype.refreshRedDotByKey = function(t, e) {
void 0 === e && (e = !1);
if (this.funcRedDotRequestUpdate) {
var i = this.getRedDot(t.id, t.opt);
if (i) {
i.showType !== c2f.RedDot.ShowType.Number && t.id !== this.root.id || (e = !0);
this.addPreupdateRedDot(i, e);
} else console.warn("RedDotMgr-> 没有找到指定红点: " + t);
} else console.warn("RedDotMgr-> 没有设置红点更新方法，无法更新红点 [" + t.id + "]");
};
t.prototype.checkRedDotIsUnlock = function(t) {
var e = !0;
if (this.funcModuleIsUnlock) for (var i = t; i; ) {
var r = !1, n = this.mapCfg.get(i);
if (n) if (this.funcModuleIsUnlock(n.moduleId, n.id)) i = n.parent; else {
e = !1;
r = !0;
} else r = !0;
if (r) break;
}
return e;
};
t.prototype.refreshRedDot = function(t, e) {
void 0 === e && (e = !1);
if (!t) return !1;
var i = !1;
if (t.isLeaf()) {
var r = 0;
t.tmpUpdateHandler ? r = t.tmpUpdateHandler(t.cfg.parent, t.id, t.options) : this.checkRedDotIsUnlock(t.cfg.id) && (r = this.funcRedDotRequestUpdate.requestUpdate(t.cfg.parent, t.id, t.options));
r >= 0 && t.setCount(r);
i = r > 0;
} else {
for (var n = 0; n < t.children.length; n++) {
var o = t.children[n];
if (this.refreshRedDot(o, e)) {
i = !0;
if (!e) break;
}
}
t.toRefresh();
}
return i;
};
t.prototype.destroyRedDot = function(t, e) {
var i = this.mapRedDot.get(t);
if (i) {
var r = this.getOptStr(e);
if (i.has(r)) {
i.get(r).destroy();
i.delete(r);
i.size <= 0 && this.mapRedDot.delete(t);
}
}
};
t.prototype.deleteDataByCompDestory = function(t, e) {
var i = this.mapRedDot.get(t.id);
if (i) {
var r = this.getOptStr(t.opt);
i.has(r) && i.get(r).deleteDisplayDataOnly(e);
}
};
t.prototype.removeDisplayByKey = function(t, e) {
var i = this.mapRedDot.get(t.id);
if (i) {
var r = this.getOptStr(t.opt);
i.has(r) ? i.get(r).deleteDisplayDataOnly(e) : cc.warn("dont find in mapRedDot by optStr:", t, r);
} else cc.warn("dont find in mapRedDot by id", t.id);
};
t.prototype.onEventToUpdate = function(t) {
for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
if (!(e.length <= 0)) {
var r = e[0];
this.refreshRedDotByKey(r);
}
};
t.prototype.onEventAddDisplay = function(t) {
for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
if (!(e.length <= 1)) {
var r = e[0], n = e[1];
this.setDisplayProxy(r.id, n, r.opt, null);
}
};
t.prototype.onEventRemovedDisplay = function(t) {
for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
if (!(e.length <= 0)) {
var r = e[0], n = this.getRedDot(r.id, r.opt);
n && n.isLeaf() && n.getDisplayCnt() <= 0 && "null" != r.getOptStr() && this.destroyRedDot(r.id, r.opt);
}
};
t.getInstance = function() {
this._instance || (this._instance = new t());
return this._instance;
};
t._instance = null;
return t;
}();
c2f.dotMgr = r.getInstance();
cc._RF.pop();
}, {} ],
RedDot: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "c7d5fuK5+5FkZYr/MO9x3IT", "RedDot");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
var o, s = t("../core/event/EventDispatcher");
(function(t) {
t[t.Normal = 1] = "Normal";
t[t.Number = 2] = "Number";
t[t.Mark = 3] = "Mark";
t[t.Once = 4] = "Once";
})(o || (o = {}));
var a = {
EVENT_NEED_UPDATE: "EVENT_NEED_UPDATE",
EVENT_UPDATE_DISPLAY: "EVENT_UPDATE_DISPLAY",
EVENT_CHANGE_SHOW_TYPE: "EVENT_CHANGE_SHOW_TYPE",
EVENT_ADD_DISPLAY: "EVENT_ADD_DISPLAY",
EVENT_REMOVE_DISPLAY: "EVENT_REMOVE_DISPLAY"
}, c = function() {
function t(t, e) {
this.id = t;
this.opt = e;
}
t.prototype.toString = function() {
var t = this.id.toString();
this.opt && (t += JSON.stringify(this.opt));
return t;
};
t.prototype.getOptStr = function() {
return this.opt ? JSON.stringify(this.opt) : "null";
};
return t;
}(), l = function(t) {
n(e, t);
function e(e, i) {
var r = t.call(this) || this;
r._showType = o.Normal;
r._enabled = !0;
r._parent = null;
r.children = [];
r._count = 0;
r._isDirty = !1;
r.arrDisplayProxy = [];
r.key = new c(e.id, i);
r.setGroupName(r.key.toString());
r.cfg = e;
return r;
}
Object.defineProperty(e.prototype, "cfg", {
get: function() {
return this._cfg;
},
set: function(t) {
if (t) {
this._cfg = t;
this.showType = t.showType;
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "id", {
get: function() {
return this.cfg.id;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "name", {
get: function() {
return this.cfg.name;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "offset", {
get: function() {
return cc.v2(this.cfg.offsetX, this.cfg.offsetY);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "options", {
get: function() {
return this.key.opt;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "showType", {
get: function() {
return this._showType;
},
set: function(t) {
if (this._showType != t) {
this._showType = t;
this.updateDisplayShowType(t);
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "enabled", {
get: function() {
return this._enabled;
},
set: function(t) {
if (this._enabled !== t) {
this._enabled = t;
this._updateDisplayNodeStatus();
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "parent", {
get: function() {
return this._parent;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "count", {
get: function() {
return this._count;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isDirty", {
get: function() {
return this._isDirty;
},
set: function(t) {
if (this._isDirty != t) {
this._isDirty = t;
t && this._parent && (this._parent.isDirty = !0);
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "key", {
get: function() {
return this._key;
},
set: function(t) {
this._key = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "tmpUpdateHandler", {
get: function() {
return this._tmpUpdateHandler;
},
set: function(t) {
this._tmpUpdateHandler = t;
},
enumerable: !1,
configurable: !0
});
e.prototype.toRefresh = function() {
this.emit(a.EVENT_NEED_UPDATE, this.key);
};
e.prototype.addChild = function(t) {
if (t) {
t._parent = this;
this.children.push(t);
} else console.error("RedDot-> addChild child is null");
};
e.prototype.removeChild = function(t) {
c2f.utils.arr.fastRemove(this.children, t);
t._parent = null;
};
e.prototype.setCount = function(t) {
if (this.isLeaf()) {
this._updateCount(t);
this.isDirty = !1;
} else console.warn("RedDot-> 当前红点[" + this.id + "]不是叶子节点，无法直接设置 红点计数");
};
e.prototype._updateCount = function(t) {
if (this._count != t) {
this._count = t;
this.isDirty = !0;
this._updateDisplayNodeStatus();
}
};
e.prototype.toRefreshParent = function() {
this.refreshParent();
};
e.prototype.refreshParent = function() {
var t, e;
null === (t = this.parent) || void 0 === t || t.refreshSelf();
null === (e = this.parent) || void 0 === e || e.refreshParent();
};
e.prototype.refreshSelf = function() {
if (this.isDirty) {
for (var t = 0, e = 0; e < this.children.length; e++) {
var i = this.children[e];
i.isDirty && i.refreshSelf();
t += i.count;
}
this._updateCount(t);
this.isDirty = !1;
}
};
e.prototype._updateDisplayNodeStatus = function() {
for (var t = 0; t < this.arrDisplayProxy.length; ) {
var e = this.arrDisplayProxy[t];
if (e && e.isValid && e.node) {
e.updateCount(this.count);
e.setDisplay(this.enabled && this.count > 0);
++t;
} else this.arrDisplayProxy.splice(t, 1);
}
};
e.prototype.refresh = function() {
this.isLeaf() ? this.refreshParent() : this.refreshSelf();
};
e.prototype.isLeaf = function() {
return 0 === this.children.length;
};
e.prototype.getDisplayCnt = function() {
return this.arrDisplayProxy.length;
};
e.prototype.updateDisplayShowType = function(t) {
for (var e = 0, i = this.arrDisplayProxy; e < i.length; e++) i[e].setShowType(t);
};
e.prototype.setDisplayProxy = function(t) {
t && t.isValid ? this.emit(a.EVENT_ADD_DISPLAY, this.key, t) : console.error("RedDot-> 红点节点错误");
};
e.prototype.hasDisplay = function(t) {
return this.arrDisplayProxy.indexOf(t) >= 0;
};
e.prototype.addDisplay = function(t) {
this.arrDisplayProxy.push(t);
};
e.prototype.removeAllDisplay = function() {
for (var t = 0, e = this.arrDisplayProxy; t < e.length; t++) {
var i = e[t];
this.removeDisplay(i);
}
};
e.prototype.removeDisplay = function(t) {
if (t && t.isValid) {
t.node.removeFromParent();
t.node.destroy();
t.destroy();
this.deleteDisplayDataOnly(t);
}
};
e.prototype.deleteDisplayDataOnly = function(t) {
c2f.utils.arr.fastRemove(this.arrDisplayProxy, t);
this.emit(a.EVENT_REMOVE_DISPLAY, this.key);
};
e.prototype.destroy = function() {
this.clear();
};
e.prototype.clear = function() {
var e;
t.prototype.destroy.call(this);
this.children.forEach(function(t) {
t.destroy();
});
null === (e = this.parent) || void 0 === e || e.removeChild(this);
this.children.length = 0;
this._parent = null;
this.removeAllDisplay();
};
e.Event = a;
e.ShowType = o;
return e;
}(s.EventDispatcher);
c2f.RedDot = l;
c2f.DotKey = c;
cc._RF.pop();
}, {
"../core/event/EventDispatcher": "EventDispatcher"
} ],
RegexUtil: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "5b307FDIc1HV7jueb7r2p7R", "RegexUtil");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = function() {
function t() {}
t.isDoubleWord = function(t) {
return /[^\x00-\xff]/.test(t);
};
return t;
}();
c2f.utils.regex = r;
cc._RF.pop();
}, {} ],
ResLoader: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "4956biO6Y1P7rKpyqSuOBIT", "ResLoader");
var r = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function s(t) {
try {
c(r.next(t));
} catch (t) {
o(t);
}
}
function a(t) {
try {
c(r.throw(t));
} catch (t) {
o(t);
}
}
function c(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(s, a);
var e;
}
c((r = r.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var i, r, n, o, s = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function a(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;s; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
s.label++;
return {
value: o[1],
done: !1
};

case 5:
s.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = s.ops.pop();
s.trys.pop();
continue;

default:
if (!(n = s.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
s = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
s.label = o[1];
break;
}
if (6 === o[0] && s.label < n[1]) {
s.label = n[1];
n = o;
break;
}
if (n && s.label < n[2]) {
s.label = n[2];
s.ops.push(o);
break;
}
n[2] && s.ops.pop();
s.trys.pop();
continue;
}
o = e.call(t, s);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
}
if (5 & o[0]) throw o[1];
return {
value: o[0] ? o[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = function() {
function t() {
this._nodePath = new Map();
this._prefabPath = new Map();
this._prefabCache = new Map();
this._spriteFrameCache = new Map();
this._spriteAtlasCache = new Map();
this._skeletonDataCache = new Map();
this._otherCache = new Map();
this.releaseSec = 5;
this.willRelease = !1;
}
t.prototype.getFullUrl = function(t, e) {
return "ab:" + t + "/" + e;
};
t.prototype.parseUrl = function(t) {
if (t.startsWith("ab:")) {
var e = t.substring("ab:".length), i = e.indexOf("/");
return {
bundle: e.substring(0, i),
loadUrl: e = e.substring(i + 1)
};
}
return {
loadUrl: t
};
};
t.prototype.getCachePrefabUrl = function(t) {
var e = "";
if (t instanceof cc.Node) for (var i = t; i && !(i._prefab && i._prefab.root && (e = this._nodePath.get(i._prefab.root) || "")); ) i = i.parent; else t instanceof cc.Prefab && (e = this._prefabPath.get(t) || "");
return e;
};
t.prototype.cacheAsset = function(t, e, i) {
var r = this;
void 0 === i && (i = !0);
if (e) {
var n = function(n) {
if (!n.has(t)) {
e.addRef();
e instanceof cc.Prefab && r._prefabPath.set(e, t);
var o = {
asset: e,
release: i,
lastLoadTime: Date.now() / 1e3
};
n.set(t, o);
}
};
if (e instanceof cc.Prefab) n(this._prefabCache); else if (e instanceof cc.SpriteFrame) n(this._spriteFrameCache); else if (e instanceof cc.SpriteAtlas) n(this._spriteAtlasCache); else if (e instanceof sp.SkeletonData) n(this._skeletonDataCache); else {
if (this._otherCache.has(t)) return;
e.addRef();
this._otherCache.set(t, e);
}
}
};
t.prototype.getRes = function(t, e) {
var i = null, r = function(e) {
var r = e.get(t);
if (r) {
i = r.asset;
r.lastLoadTime = Date.now() / 1e3;
}
};
e === cc.Prefab ? r(this._prefabCache) : e === cc.SpriteFrame ? r(this._spriteFrameCache) : e === cc.SpriteAtlas ? r(this._spriteAtlasCache) : e === sp.SkeletonData ? r(this._skeletonDataCache) : i = this._otherCache.get(t);
return i;
};
t.prototype.getCacheData = function(t, e) {
var i = null;
e === cc.Prefab ? i = this._prefabCache.get(t) : e === cc.SpriteFrame ? i = this._spriteFrameCache.get(t) : e === cc.SpriteAtlas ? i = this._spriteAtlasCache.get(t) : e === sp.SkeletonData && (i = this._skeletonDataCache.get(t));
return i;
};
t.prototype.loadBundle = function(t, e) {
return r(this, void 0, void 0, function() {
return n(this, function() {
return [ 2, new Promise(function(i) {
cc.assetManager.loadBundle(t, {
version: e
}, function(t, e) {
if (t) {
cc.error("[Res.loadBundle] error: " + t);
i(null);
}
i(e);
});
}) ];
});
});
};
t.prototype.loadBundleAsync = function(t, e, i) {
cc.assetManager.loadBundle(t, {
version: i
}, function(t, i) {
if (t) {
cc.error("[Res.loadBundle] error: " + t);
e && e(null);
}
e && e(i);
});
};
t.prototype.loadRemote = function(t) {
for (var e = this, i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
if (!t) {
cc.error("[Res.load] url is empty");
return null;
}
var n = null, o = null;
if (2 == i.length) {
n = i[0];
o = i[1];
} else o = i[0];
var s = this.getRes(t, void 0);
if (s) o && o(null, s); else {
var a = this.parseUrl(t);
cc.assetManager.loadRemote(a.loadUrl, n, function(i, r) {
i ? cc.error("[Res.load] load error: " + i) : e.cacheAsset(t, r, !0);
o && o(i, r);
});
}
};
t.prototype.load = function(t, e, i, r, n) {
var o = null;
"string" == typeof e || e instanceof Array ? (o = this.parseLoadResArgs(e, i, r, n)).bundle = t : o = this.parseLoadResArgs(t, e, i, r);
this.loadByArgs(o);
};
t.prototype.loadDir = function(t, e, i, r, n) {
var o = null;
"string" == typeof e ? (o = this.parseLoadResArgs(e, i, r, n)).bundle = t : o = this.parseLoadResArgs(t, e, i, r);
o.dir = o.paths;
this.loadByArgs(o);
};
t.prototype.loadOne = function(t, e, i) {
void 0 === i && (i = !0);
return r(this, void 0, Promise, function() {
var r, o, s, a, c, l = this;
return n(this, function(n) {
switch (n.label) {
case 0:
if (!t) {
cc.error("[Res.load] url is empty");
return [ 2, null ];
}
return (r = this.getRes(t, e)) ? [ 2, r ] : !(o = this.parseUrl(t)).bundle || cc.assetManager.getBundle(o.bundle) ? [ 3, 2 ] : [ 4, this.loadBundle(o.bundle) ];

case 1:
n.sent();
n.label = 2;

case 2:
if (!(s = o.bundle ? cc.assetManager.getBundle(o.bundle) : cc.resources)) {
cc.error("[Res.load] cant find bundle: " + t);
return [ 2, null ];
}
return [ 4, this.getLGResInfo(o.loadUrl, s) ];

case 3:
if (a = n.sent()) {
o.loadUrl = a.lgUrl;
s = a.lgBundle;
}
if (!(c = s.get(o.loadUrl, e))) return [ 3, 4 ];
this.cacheAsset(t, c, !0);
return [ 2, c ];

case 4:
return [ 4, new Promise(function(r) {
s.load(o.loadUrl, e, function(e, n) {
if (e) {
cc.error("[Res.load] load error: " + e);
r(null);
} else {
l.cacheAsset(t, n, i);
r(n);
}
});
}) ];

case 5:
r = n.sent();
n.label = 6;

case 6:
return [ 2, r ];
}
});
});
};
t.prototype.loadResAsync = function(t, e, i, r, n, o) {
var s = this, a = r.get(n, e);
if (a) {
this.cacheAsset(t, a, !0);
o && o(a);
} else r.load(n, e, function(e, r) {
if (e) {
cc.error("[Res.load] load error: " + e);
o && o(null);
} else {
s.cacheAsset(t, r, i);
o && o(r);
}
});
};
t.prototype.getRealBundleRes = function(t, e, i, r) {
var n = t ? cc.assetManager.getBundle(t) : cc.resources;
if (n) this.getLGResInfoAsync(i, n, function(t) {
t ? r && r(t.lgBundle, t.lgUrl) : r && r(n, i);
}); else {
cc.error("[Res.load] cant find bundle: " + e);
r && r(null, null);
}
};
t.prototype.loadOneAsync = function(t, e, i, r) {
var n = this;
void 0 === i && (i = !0);
void 0 === r && (r = null);
if (!t) {
cc.error("[Res.load] url is empty");
r && r(null);
}
var o = this.getRes(t, e);
o && r && r(o);
var s = this.parseUrl(t);
this.getRealBundleRes(s.bundle, t, s.loadUrl, function(o, s) {
o ? n.loadResAsync(t, e, i, o, s, function(t) {
r && r(t);
}) : r && r(null);
});
};
t.prototype.loadOneDir = function(t, e, i) {
void 0 === i && (i = !0);
return r(this, void 0, Promise, function() {
var r, o = this;
return n(this, function(n) {
switch (n.label) {
case 0:
if (!t) {
cc.error("[Res.load] url is empty");
return [ 2, [] ];
}
return !(r = this.parseUrl(t)).bundle || cc.assetManager.getBundle(r.bundle) ? [ 3, 2 ] : [ 4, this.loadBundle(r.bundle) ];

case 1:
n.sent();
n.label = 2;

case 2:
return [ 2, new Promise(function(n) {
var s = r.bundle ? cc.assetManager.getBundle(r.bundle) : cc.resources;
if (s) s.loadDir(r.loadUrl, e, function(r, a) {
if (r) {
cc.error("[Res.loadDir] load error: " + r);
n([]);
} else {
var c = s.getDirWithPath(t, e);
a.forEach(function(t, e) {
o.cacheAsset(c[e].path, t, i);
});
n(a);
}
}); else {
cc.error("[Res.loadDir] cant find bundle: " + t);
n([]);
}
}) ];
}
});
});
};
t.prototype.getLGResInfo = function(t, e) {
return r(this, void 0, void 0, function() {
var i, r, o, s, a, c;
return n(this, function(n) {
switch (n.label) {
case 0:
i = null;
if (!(r = e.getInfoWithPath(t))) return [ 3, 4 ];
if (!(o = c2f.language.getLGResUuid(r.uuid))) return [ 3, 4 ];
s = null;
a = "language_" + c2f.language.current;
if (!cc.assetManager.bundles.has(a)) return [ 3, 1 ];
s = cc.assetManager.bundles.get(a);
return [ 3, 3 ];

case 1:
return [ 4, this.loadBundle(a) ];

case 2:
s = n.sent();
n.label = 3;

case 3:
if (s) {
c = s.getAssetInfo(o).path;
i = {
lgUrl: c,
lgBundle: s
};
}
n.label = 4;

case 4:
return [ 2, i ];
}
});
});
};
t.prototype.getLGResInfoAsync = function(t, e, i) {
var r = null, n = e.getInfoWithPath(t);
if (n) {
var o = c2f.language.getLGResUuid(n.uuid);
if (o) {
var s = null, a = "language_" + c2f.language.current;
if (cc.assetManager.bundles.has(a)) {
if (s = cc.assetManager.bundles.get(a)) {
var c = s.getAssetInfo(o).path;
r = {
lgUrl: c,
lgBundle: s
};
}
i && i(r);
} else this.loadBundleAsync(a, function(t) {
if (t) {
var e = s.getAssetInfo(o).path;
r = {
lgUrl: e,
lgBundle: s
};
}
i && i(r);
});
} else i && i(r);
} else i && i(r);
};
t.prototype.instantiate = function(t, e) {
if (!t) {
cc.error("[Res.instantiate] original is null");
return null;
}
var i = cc.instantiate(t), r = this.getCachePrefabUrl(t) || this.getCachePrefabUrl(e);
if (r) {
var n = this._prefabCache.get(r);
if (n && n.release) {
Array.isArray(n.nodes) || (n.nodes = []);
n.nodes.push(i);
this._nodePath.set(i, r);
}
}
return i;
};
t.prototype.delayReleaseAll = function() {
var t = this;
if (!this.willRelease) {
this.willRelease = !0;
setTimeout(function() {
t.releaseAll();
t.willRelease = !1;
}, 300);
}
};
t.prototype.releaseAll = function() {
var t = this, e = Date.now() / 1e3;
this._prefabCache.forEach(function(i, r) {
if (i.release && !(e - i.lastLoadTime < t.releaseSec)) {
if (Array.isArray(i.nodes)) {
for (var n = i.nodes.length - 1; n >= 0; n--) {
var o = i.nodes[n];
if (!o || !o.isValid) {
t._nodePath.delete(o);
i.nodes.splice(n, 1);
}
}
0 === i.nodes.length && delete i.nodes;
}
if (!Array.isArray(i.nodes)) {
i.asset.decRef();
t._prefabPath.delete(i.asset);
t._prefabCache.delete(r);
}
}
});
[ this._spriteFrameCache, this._spriteAtlasCache, this._skeletonDataCache ].forEach(function(i) {
i.forEach(function(r, n) {
if (r.release && !(e - r.lastLoadTime < t.releaseSec)) {
r.asset.decRef();
i.delete(n);
}
});
});
};
t.getNativeUrlByResources = function(t, e, i) {
void 0 === i && (i = !0);
try {
return cc.assetManager._transform({
path: t,
bundle: cc.AssetManager.BuiltinBundleName.RESOURCES,
__isNative__: i,
ext: e
});
} catch (e) {
cc.error("[Res.getNativeUrlByResources] error url: " + t);
return "";
}
};
t.prototype.release = function(t, e, i) {
void 0 === i && (i = "resources");
var r = Date.now() / 1e3, n = t;
t.startsWith("ab:") || (n = this.getFullUrl(i, t));
if (this._otherCache.has(n)) {
this._otherCache.get(n).decRef();
this._otherCache.delete(n);
} else {
var o = this.getCacheData(n, e);
if (o) if (e === cc.Prefab) {
var s = o;
if (!s.release || r - s.lastLoadTime < this.releaseSec) return;
if (Array.isArray(s.nodes)) {
for (var a = s.nodes.length - 1; a >= 0; a--) {
var c = s.nodes[a];
if (!c || !c.isValid) {
this._nodePath.delete(c);
s.nodes.splice(a, 1);
}
}
0 === s.nodes.length && delete s.nodes;
}
if (!Array.isArray(s.nodes)) {
s.asset.decRef();
this._prefabPath.delete(o.asset);
this._prefabCache.delete(n);
}
} else {
if (!o.release || r - o.lastLoadTime < this.releaseSec) return;
o.asset.decRef();
var l = null;
e === cc.SpriteFrame ? l = this._spriteFrameCache : e === cc.SpriteAtlas ? l = this._spriteAtlasCache : e === sp.SkeletonData && (l = this._skeletonDataCache);
l.delete(n);
}
}
};
t.prototype.releaseDir = function(t, e) {
var i = this;
void 0 === e && (e = "resources");
var r = cc.assetManager.getBundle(e);
if (r) {
var n = r.getDirWithPath(t);
n && n.map(function(t) {
var r = t.path;
i.release(r, null, e);
});
}
};
t.prototype.releasePrefabtDepsRecursively = function(t) {
var e = cc.assetManager.assets.get(t);
cc.assetManager.releaseAsset(e);
e instanceof cc.Prefab && cc.assetManager.dependUtil.getDepsRecursively(t).forEach(function(t) {
cc.assetManager.assets.get(t).decRef();
});
};
t.prototype.get = function(t, e, i) {
void 0 === i && (i = "resources");
return cc.assetManager.getBundle(i).get(t, e);
};
t.prototype.dump = function() {
cc.assetManager.assets.forEach(function(t, e) {
console.log(cc.assetManager.assets.get(e));
});
console.log("当前资源总数:" + cc.assetManager.assets.count);
};
t.prototype.parseLoadResArgs = function(t, e, i, r) {
var n = t, o = e, s = i, a = r;
if (void 0 === r) {
var c = cc.js.isChildClassOf(e, cc.Asset);
if (i) {
a = i;
c && (s = null);
} else if (void 0 === i && !c) {
a = e;
s = null;
o = null;
}
if (void 0 !== i && !c) {
s = e;
o = null;
}
}
return {
paths: n,
type: o,
onProgress: s,
onComplete: a
};
};
t.prototype.loadByBundleAndArgs = function(t, e) {
var i = this;
if (e.dir) {
var r = e.paths;
t.loadDir(r, e.type, e.onProgress, function(n, o) {
if (n) cc.error("[Res.loadDir] load error: " + n); else {
var s = t.getDirWithPath(r, e.type);
o.forEach(function(t, e) {
i.cacheAsset(s[e].path, t);
});
}
e.onComplete && e.onComplete(n, o);
});
} else if ("string" == typeof e.paths) {
var n = e.paths;
e.bundle && (n = this.getFullUrl(e.bundle, e.paths));
var o = this.getRes(n, e.type);
if (o) e.onComplete && e.onComplete(null, o); else {
var s = t.get(e.paths, e.type);
if (s) {
this.cacheAsset(n, s, !0);
e.onComplete && e.onComplete(null, s);
} else t.load(e.paths, e.type, e.onProgress, function(t, r) {
t ? cc.error("[Res.load] load error: " + t) : i.cacheAsset(n, r, !0);
e.onComplete && e.onComplete(t, r);
});
}
} else {
var a = e.paths;
t.load(a, e.type, e.onProgress, function(t, r) {
t ? cc.error("[Res.loadDir] load error: " + t) : a.forEach(function(t, e) {
i.cacheAsset(a[e], r[e]);
});
e.onComplete && e.onComplete(t, r);
});
}
};
t.prototype.loadByArgs = function(t) {
return r(this, void 0, void 0, function() {
var e, i;
return n(this, function(r) {
switch (r.label) {
case 0:
e = cc.resources;
if (!t.bundle) return [ 3, 3 ];
if (!cc.assetManager.bundles.has(t.bundle)) return [ 3, 1 ];
e = cc.assetManager.bundles.get(t.bundle);
return [ 3, 3 ];

case 1:
return [ 4, this.loadBundle(t.bundle) ];

case 2:
e = r.sent();
r.label = 3;

case 3:
return "string" != typeof t.paths ? [ 3, 5 ] : [ 4, this.getLGResInfo(t.paths, e) ];

case 4:
if (i = r.sent()) {
t.paths = i.lgUrl;
e = i.lgBundle;
}
return [ 3, 5 ];

case 5:
this.loadByBundleAndArgs(e, t);
return [ 2 ];
}
});
});
};
t.getInstance = function() {
this._instance || (this._instance = new t());
return this._instance;
};
t._instance = null;
return t;
}();
c2f.res = o.getInstance();
cc._RF.pop();
}, {} ],
RichTextEvent: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "8770ed6EHFI3pPr9cUiO5zN", "RichTextEvent");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = (s.property, s.menu), l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.clickNames = [];
e.cliskCbs = [];
return e;
}
e.prototype.updateView = function(t, e) {
this.clickNames = t;
this.cliskCbs = e;
};
e.prototype.handler = function(t, e) {
if (this.clickNames || !(this.clickNames.length <= 0)) {
var i = this.clickNames.indexOf(e);
this.cliskCbs.length > 0 && this.cliskCbs[i] && "function" == typeof this.cliskCbs[i] && this.cliskCbs[i](e);
}
};
e.prototype.onDestroy = function() {
this.clickNames = [];
this.cliskCbs = [];
};
return o([ a, c("c2f/common/RichTextEvent") ], e);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {} ],
RichTextPro: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "5cf0afApuVIx7weT9g99hKl", "RichTextPro");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = new (t("htmlTextParser"))(), a = cc._decorator, c = a.ccclass, l = a.property, u = a.executeInEditMode, h = a.menu, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._string = "";
e._outlineWidth = 0;
e._outlineColor = new cc.Color(0, 0, 0);
e._fontFamily = "Arial";
e._fontSize = 50;
e._spacingY = 10;
e._maxWidth = 100;
e._prefabs = [];
e.eventHandlers = [];
e.spAtlas = null;
e.cvs = null;
e.ctx = null;
e.cellX = 0;
e.cellY = 0;
e.rowW = 0;
e.rowH = 0;
e.pageNode = null;
e.bold = "";
e.style = "0";
e.tmpFontFml = "";
e.tmpSZFont = 1;
e.tmpOutLine = null;
e.dymicFrame = null;
e.eventRect = null;
return e;
}
Object.defineProperty(e.prototype, "string", {
get: function() {
return this._string;
},
set: function(t) {
this._string = t;
this.updateContent();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "outlineWidth", {
get: function() {
return this._outlineWidth;
},
set: function(t) {
this._outlineWidth = t;
this.updateContent();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "outlineColor", {
get: function() {
return this._outlineColor;
},
set: function(t) {
this._outlineColor = t;
this.updateContent();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "fontFamily", {
get: function() {
return this._fontFamily;
},
set: function(t) {
this._fontFamily = t;
this.updateContent();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "fontSize", {
get: function() {
return this._fontSize;
},
set: function(t) {
this._fontSize = t;
this.updateContent();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "spacingY", {
get: function() {
return this._spacingY;
},
set: function(t) {
this._spacingY = t;
this.updateContent();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "maxWidth", {
get: function() {
return this._maxWidth;
},
set: function(t) {
this._maxWidth = t;
this.updateContent();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "prefabs", {
get: function() {
return this._prefabs;
},
set: function(t) {
this._prefabs = t;
this.updateContent();
},
enumerable: !1,
configurable: !0
});
e.prototype.start = function() {
this.updateContent();
this.node.on(cc.Node.EventType.SIZE_CHANGED, this.updateContent, this);
this.node.on(cc.Node.EventType.ANCHOR_CHANGED, this.updateContent, this);
};
e.prototype.addEventRect = function(t, e) {
this.eventRect || (this.eventRect = new Map());
this.eventRect.set(t, e);
};
e.prototype.updateContent = function() {
if (cc.isValid(this.node)) {
this.node.removeAllChildren();
this.node.destroyAllChildren();
}
this.cvs = null;
this.ctx = null;
if (this.string && !(this.string.length <= 0)) {
this.rowW = 0;
this.rowH = this.fontSize + this.spacingY;
this.cellX = 0;
this.cellY = this.rowH;
this.tmpSZFont = this.fontSize;
this.tmpOutLine = {
width: this.outlineWidth,
color: "#" + this.outlineColor.toHEX()
};
this.eventRect && this.eventRect.clear();
this.dymicFrame && this.dymicFrame.clear();
this.bold = "";
this.style = "0";
this.tmpFontFml = this.fontFamily;
this.createPage();
if (!this.pageNode) throw new Error("Can't find page node");
if (!this.ctx) throw new Error("Can't find canvas");
var t = s.parse(this.string);
this.preloadImage(t, this.updateString.bind(this, t));
}
};
e.prototype.updateTextStyle = function(t) {
if (!t) {
this.ctx.fillStyle = "#" + this.node.color.toHEX();
this.tmpSZFont = this.fontSize;
this.bold = "";
this.style = "";
this.tmpOutLine.width = this.outlineWidth;
this.tmpOutLine.color = "#" + this.outlineColor.toHEX();
this.ctx.font = this.bold + " " + this.tmpSZFont + "px " + this.tmpFontFml;
return null;
}
var e = {};
t.color ? this.ctx.fillStyle = t.color : this.ctx.fillStyle = "#" + this.node.color.toHEX();
this.tmpSZFont = this.fontSize;
t.size && (this.tmpSZFont = Math.min(t.size, this.fontSize));
t.hasOwnProperty("bold") ? this.bold = "bold" : this.bold = "";
t.hasOwnProperty("underline") ? this.style = "u" : t.hasOwnProperty("delete") ? this.style = "d" : this.style = "";
if (t.outline) {
this.tmpOutLine.width = t.outline.width;
this.tmpOutLine.color = t.outline.color;
} else {
this.tmpOutLine.width = this.outlineWidth;
this.tmpOutLine.color = "#" + this.outlineColor.toHEX();
}
t.hasOwnProperty("newline") && (e.newLine = !0);
t.isImage && (e.imgAtlas = t.src);
t.isImgFile && (e.imgFile = t.src);
t.isPrefab && (e.prefab = t.idx);
t.event && (e.event = {
click: t.event.click,
param: t.event.param
});
this.ctx.font = this.bold + " " + this.tmpSZFont + "px " + this.tmpFontFml;
return e;
};
e.prototype.addImageByFile = function(t, e) {
var i = new cc.Node("image");
i.anchorX = 0;
i.anchorY = 0;
i.width = 1;
i.height = 1;
var r = i.addComponent(cc.Sprite);
if (this.dymicFrame && this.dymicFrame.has(t)) r.spriteFrame = this.dymicFrame.get(t); else {
i.width = this.rowH;
i.height = this.rowH;
}
i.scale = this.rowH / i.height;
this.maxWidth > 0 && i.width * i.scale > this.maxWidth && (i.scale = this.maxWidth / i.width);
var n = i.width * i.scale;
if (this.maxWidth > 0 && this.rowW + n > this.maxWidth) {
i.x = 0;
this.addRow();
this.rowW += n;
} else {
i.x = this.rowW;
this.rowW += n;
this.cellX = this.rowW;
}
i.setParent(this.pageNode);
i.y = -this.cellY;
if (e) {
var o = cc.rect(i.x, i.y, n, this.tmpSZFont);
this.addEventRect(o, e);
}
};
e.prototype.addImageByAtlas = function(t, e) {
var i = new cc.Node("image");
i.anchorX = 0;
i.anchorY = 0;
i.width = 1;
i.height = 1;
var r = i.addComponent(cc.Sprite);
if (this.spAtlas) r.spriteFrame = this.spAtlas.getSpriteFrame(t); else {
i.width = this.rowH;
i.height = this.rowH;
}
i.scale = this.rowH / i.height;
this.maxWidth >= 0 && i.width * i.scale > this.maxWidth && (i.scale = this.maxWidth / i.width);
var n = i.width * i.scale;
if (this.maxWidth > 0 && this.rowW + n > this.maxWidth) {
i.x = 0;
this.addRow();
this.rowW += n;
} else {
i.x = this.rowW;
this.rowW += n;
this.cellX = this.rowW;
}
i.setParent(this.pageNode);
i.y = -this.cellY;
if (e) {
var o = cc.rect(i.x, i.y, n, this.tmpSZFont);
this.addEventRect(o, e);
}
};
e.prototype.addPrefab = function(t, e) {
if (!(t < 0 || t > this.prefabs.length - 1)) {
var i = null, r = this.prefabs[t];
(i = c2f.res.instantiate(r, this.node)).scale = this.rowH / i.height;
i.width * i.scale > this.node.width && (i.scale = this.node.width / i.width);
var n = i.width * i.scale, o = i.height * i.scale, s = 0;
if (this.rowW + n > this.node.width) {
this.addRow();
this.rowW += n;
s = this.rowW == n ? 0 : this.rowW;
} else {
s = this.rowW;
this.rowW += n;
this.cellX = this.rowW;
}
i.setParent(this.pageNode);
i.x = s + n * i.anchorX;
i.y = o * i.anchorY - this.cellY;
if (e) {
var a = cc.rect(s, -this.cellY, n, o);
this.addEventRect(a, e);
}
}
};
e.prototype.preloadImage = function(t, e) {
for (var i = this, r = [], n = 0, o = t; n < o.length; n++) (u = o[n]).style && u.style.isImgFile && u.style.src.length > 0 && r.indexOf(u.style.src) < 0 && r.push(u.style.src);
if (r.length <= 0) e && e(); else {
this.dymicFrame || (this.dymicFrame = new Map());
for (var s = 0, a = function(t) {
c2f.res.loadOne(t, cc.SpriteFrame).then(function(n) {
i.dymicFrame.set(t, n);
++s >= r.length && e && e();
});
}, c = 0, l = r; c < l.length; c++) {
var u;
a(u = l[c]);
}
}
};
e.prototype.updateString = function(t) {
for (var e = 0, i = 0, r = t.length; i <= r; ++i) if (i === r) this.pageToNode(); else {
var n = t[i], o = n.text.length, s = this.updateTextStyle(n.style);
if (o <= 0) {
s && s.newLine && this.addRow(!0);
s && s.imgFile && this.addImageByFile(s.imgFile, s.event);
s && s.imgAtlas && this.addImageByAtlas(s.imgAtlas, s.event);
s && s.hasOwnProperty("prefab") && this.addPrefab(s.prefab, s.event);
} else {
var a = s ? s.event : null;
this.cellX = this.rowW;
for (var c = 0, l = 0; l <= o; ++l) if (l >= o) this.drawToPage(n.text.substring(c), a); else {
var u = n.text[l];
e = this.ctx.measureText(u).width;
if (this.rowW + e > Math.max(this.node.width, this.maxWidth)) {
this.drawToPage(n.text.substring(c, l), a);
c = l;
this.addRow();
this.rowW += e;
} else this.rowW += e;
}
}
}
};
e.prototype.createPage = function() {
this.pageNode = new cc.Node("page_" + this.node.childrenCount);
this.pageNode._objFlags |= cc.Object.Flags.HideInHierarchy;
this.pageNode._objFlags |= cc.Object.Flags.LockedInEditor;
var t = this.ctx ? this.ctx.font : this.bold + " " + this.fontSize + "px " + this.tmpFontFml, e = this.ctx ? this.ctx.fillStyle : "#" + this.node.color.toHEX();
this.cvs = document.createElement("canvas");
this.ctx = this.cvs.getContext("2d");
this.cvs.width = this.node.width;
this.cvs.height = this.node.height - this.node.height % this.rowH;
this.ctx.font = t;
this.ctx.fillStyle = e;
this.ctx.lineWidth = this.outlineWidth;
this.ctx.strokeStyle = "#" + this.outlineColor.toHEX();
};
e.prototype.drawToPage = function(t, e) {
if ("" !== t) {
var i = this.cellX, r = this.cellY - .15 * this.fontSize - .5 * this.spacingY, n = this.tmpOutLine.width;
this.ctx.lineWidth = 2 * n;
this.ctx.strokeStyle = this.tmpOutLine.color;
n > 0 && this.ctx.strokeText(t, i, r);
this.ctx.fillText(t, i, r);
var o = this.ctx.measureText(t).width;
if (e) {
var s = cc.rect(i, -this.cellY, o, this.tmpSZFont);
this.addEventRect(s, e);
}
switch (this.style) {
case "d":
this.ctx.lineWidth = Math.max(this.fontSize >> 3, this.outlineWidth);
this.ctx.beginPath();
this.ctx.moveTo(i, r - this.fontSize / 2 + this.ctx.lineWidth);
this.ctx.lineTo(i + o, r - this.fontSize / 2 + this.ctx.lineWidth);
this.ctx.stroke();
this.ctx.lineWidth = n;
break;

case "u":
this.ctx.lineWidth = Math.max(this.fontSize >> 3, this.outlineWidth);
this.ctx.strokeStyle = this.ctx.fillStyle;
this.ctx.beginPath();
this.ctx.moveTo(i, r + 2 * this.ctx.lineWidth);
this.ctx.lineTo(i + o, r + 2 * this.ctx.lineWidth);
this.ctx.stroke();
this.ctx.lineWidth = n;
this.ctx.strokeStyle = this.tmpOutLine.color;
}
}
};
e.prototype.pageToNode = function() {
if (!this.cvs || !this.pageNode) throw new Error("cvs or pageNode is null");
this.node.height = this.cellY;
var t = this.cellY / this.rowH;
this.node.width = t > 1 ? this.maxWidth : this.rowW;
var e = new cc.Texture2D();
e.initWithElement(this.cvs);
var i = this.pageNode.getComponent(cc.Sprite);
i || (i = this.pageNode.addComponent(cc.Sprite));
i.spriteFrame = new cc.SpriteFrame(e, cc.rect(0, 0, this.cvs.width, this.cvs.height));
this.pageNode.width = this.node.width;
this.pageNode.height = this.node.height;
this.pageNode.anchorX = 0;
this.pageNode.anchorY = 1;
this.pageNode.x = -this.node.width * this.node.anchorX;
this.pageNode.y = this.node.height * (1 - this.node.anchorY);
this.pageNode.setParent(this.node);
this.pageNode.on(cc.Node.EventType.TOUCH_END, this.onPageNodeTouchEnd, this);
};
e.prototype.addRow = function(t) {
void 0 === t && (t = !1);
this.rowH = this.fontSize + this.spacingY;
if (t || this.maxWidth > 0) {
this.cellX = 0;
this.rowW = 0;
this.cellY += this.rowH;
}
};
e.prototype.onPageNodeTouchEnd = function(t) {
if (this.eventRect) {
var e = t.getLocation(), i = this.pageNode.convertToNodeSpaceAR(e), r = [];
this.eventRect.forEach(function(t, e) {
e.contains(i) && r.push(t);
});
if (!(r.length <= 0)) for (var n = 0, o = r; n < o.length; n++) {
var s = o[n];
cc.log("RichTextPro click:", s.click, s.param);
for (var a = 0, c = this.eventHandlers; a < c.length; a++) c[a].emit([ s.click, s.param ]);
}
}
};
e.prototype.quickSetClickHnadler = function(t, e) {
var i = new cc.Component.EventHandler();
i.target = t.node;
i.component = c2f.utils.view.getComponentName(t);
i.handler = e;
i.customEventData = "";
this.eventHandlers = [ i ];
};
e.prototype.onDestroy = function() {
this.node.destroyAllChildren();
this.node.targetOff(this);
this.cvs = null;
this.ctx = null;
this.pageNode = null;
if (this.dymicFrame) {
this.dymicFrame.clear();
this.dymicFrame = null;
}
if (this.eventRect) {
this.eventRect.clear();
this.eventRect = null;
}
};
o([ l ], e.prototype, "_string", void 0);
o([ l({
multiline: !0,
tooltip: "文本内容"
}) ], e.prototype, "string", null);
o([ l ], e.prototype, "_outlineWidth", void 0);
o([ l({
min: 0,
tooltip: "描边宽度, 为0时表示无描边"
}) ], e.prototype, "outlineWidth", null);
o([ l ], e.prototype, "_outlineColor", void 0);
o([ l({
tooltip: "描边颜色",
visible: function() {
return this.outlineWidth > 0;
}
}) ], e.prototype, "outlineColor", null);
o([ l ], e.prototype, "_fontFamily", void 0);
o([ l({
tooltip: "字体名称, 游戏字体可用：fzcsjt_LABEL"
}) ], e.prototype, "fontFamily", null);
o([ l ], e.prototype, "_fontSize", void 0);
o([ l({
min: 4,
tooltip: "字体大小"
}) ], e.prototype, "fontSize", null);
o([ l ], e.prototype, "_spacingY", void 0);
o([ l({
tooltip: "字体行间距"
}) ], e.prototype, "spacingY", null);
o([ l ], e.prototype, "_maxWidth", void 0);
o([ l({
tooltip: "富文本最大宽度"
}) ], e.prototype, "maxWidth", null);
o([ l({
type: cc.Prefab,
tooltip: "嵌入预制体"
}) ], e.prototype, "_prefabs", void 0);
o([ l({
type: cc.Prefab,
tooltip: "嵌入预制体"
}) ], e.prototype, "prefabs", null);
o([ l({
type: cc.Component.EventHandler,
tooltip: "文本事件"
}) ], e.prototype, "eventHandlers", void 0);
o([ l({
type: cc.SpriteAtlas,
tooltip: "图集"
}) ], e.prototype, "spAtlas", void 0);
return o([ c, u, h("c2f/controls/RichTextPro") ], e);
}(cc.Component);
i.default = f;
cc._RF.pop();
}, {
htmlTextParser: "htmlTextParser"
} ],
RotationSelf: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "08a4cwtdYhD/p2j71yoNU9K", "RotationSelf");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.RotationSelf = void 0;
var s = cc._decorator, a = s.ccclass, c = s.property, l = s.menu, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.onceDur = 5;
e.clockwise = !0;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {
var t = this;
this.scheduleOnce(function() {
t.playRotate();
});
};
e.prototype.playRotate = function() {
var t = this.clockwise ? 359 : -359;
cc.Tween.stopAllByTarget(this.node);
cc.tween(this.node).by(this.onceDur, {
angle: t
}).repeatForever().start();
};
o([ c({
serializable: !0
}) ], e.prototype, "onceDur", void 0);
o([ c({
serializable: !0
}) ], e.prototype, "clockwise", void 0);
return o([ a, l("c2f/animation/RotationSelf") ], e);
}(cc.Component);
i.RotationSelf = u;
cc._RF.pop();
}, {} ],
ScrollViewHack: [ function(t, e) {
"use strict";
cc._RF.push(e, "e4804b8bMZHdKTG7s7V0jMf", "ScrollViewHack");
cc.ScrollView.prototype._onTouchMoved = function(t, e) {
if (this.enabledInHierarchy && !this.hasNestedViewGroup(t, e)) {
var i = t.touch;
this.content && this._handleMoveLogic(i);
if (this.cancelInnerEvents) {
if (i.getLocation().sub(i.getStartLocation()).mag() > 7 && !this._touchMoved && t.target !== this.node) {
var r = new cc.Event.EventTouch(t.getTouches(), t.bubbles);
r.type = cc.Node.EventType.TOUCH_CANCEL;
r.touch = t.touch;
r.simulate = !0;
t.captureCancelEvent = r;
this._touchMoved = !0;
}
this._stopPropagationIfTargetIsMe(t);
}
}
};
cc.ScrollView.prototype.hasNestedViewGroup = function(t) {
if (t.eventPhase === cc.Event.CAPTURING_PHASE) return !1;
};
cc._RF.pop();
}, {} ],
ShaderArtLabel: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "da773g07NRC0LX5g8OCKdzR", "ShaderArtLabel");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = s.property, l = s.menu, u = s.requireComponent, h = s.disallowMultiple, f = s.executeInEditMode, p = cc.Enum({
None: 0,
OneColor: 1,
TwoColor: 2,
TriColor: 3
}), d = cc.Enum({
None: 0,
Lowp: 1,
Mediump: 2,
Highp: 3
}), y = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.shadowUse = !1;
e.shadowOffset = cc.v2(1, 1);
e.shadowColor = cc.color(0, 0, 0, 150);
e.outlineUse = !1;
e.outlineWidth = 1;
e.outlineColor = cc.color(0, 0, 0, 255);
e.olShadowUse = !1;
e.olShadowOffset = cc.v2(1, 1);
e.olShadowColor = cc.color(0, 0, 0, 150);
e.flowLightUse = !1;
e.flSpeed = 1;
e.flRot = 0;
e.flWidth = 15;
e.flColor = cc.color(255, 255, 255, 255);
e.gradient = p.None;
e.color1 = cc.color(255, 0, 0, 255);
e.color2 = cc.color(0, 255, 0, 255);
e.color3 = cc.color(0, 0, 255, 255);
e.glow = d.None;
e.glowWidth = 10;
e.glowDepth = 2;
e.glowColor = cc.color(255, 255, 255, 255);
e._mtl = null;
e._time = 0;
return e;
}
e.prototype.onLoad = function() {
this.initMat();
};
e.prototype.onDestroy = function() {
this._mtl = null;
};
e.prototype.initMat = function() {
this._mtl = this.node.getComponent(cc.Label).getMaterial(0);
this._mtl.define("USE_TEXTURE", !0, 0);
this.node.getComponent(cc.Label).setMaterial(0, this._mtl);
this.use();
};
e.prototype.use = function() {
if (this._mtl) {
this._mtl.setProperty("i_resolution", [ this.node.width, this.node.height ]);
this._mtl.setProperty("i_shadow", this.shadowUse ? 1 : 0);
this._mtl.setProperty("i_shadowOffset", [ -this.shadowOffset.x / this.node.width, -this.shadowOffset.y / this.node.height ]);
this._mtl.setProperty("i_shadowColor", [ this.shadowColor.r / 255, this.shadowColor.g / 255, this.shadowColor.b / 255, this.shadowColor.a / 255 ]);
this._mtl.setProperty("i_outline", this.outlineUse ? 1 : 0);
this._mtl.setProperty("i_outlineWidth", [ this.outlineWidth / this.node.width, this.outlineWidth / this.node.height ]);
this._mtl.setProperty("i_outlineColor", [ this.outlineColor.r / 255, this.outlineColor.g / 255, this.outlineColor.b / 255, this.outlineColor.a / 255 ]);
this._mtl.setProperty("i_olShadow", this.olShadowUse ? 1 : 0);
this._mtl.setProperty("i_olShadowOffset", [ -this.olShadowOffset.x / this.node.width, -this.olShadowOffset.y / this.node.height ]);
this._mtl.setProperty("i_olShadowColor", [ this.olShadowColor.r / 255, this.olShadowColor.g / 255, this.olShadowColor.b / 255, this.olShadowColor.a / 255 ]);
this._mtl.setProperty("i_gradient", this.gradient - 1);
switch (this.gradient) {
case p.None:
this._mtl.setProperty("i_color1", [ this.node.color.r / 255, this.node.color.g / 255, this.node.color.b / 255, this.node.color.a / 255 ]);
break;

case p.OneColor:
case p.TwoColor:
case p.TriColor:
this._mtl.setProperty("i_color1", [ this.node.color.r / 255, this.node.color.g / 255, this.node.color.b / 255, this.node.color.a / 255 ]);
this._mtl.setProperty("i_color1", [ this.color1.r / 255, this.color1.g / 255, this.color1.b / 255, this.color1.a / 255 ]);
this._mtl.setProperty("i_color2", [ this.color2.r / 255, this.color2.g / 255, this.color2.b / 255, this.color2.a / 255 ]);
this._mtl.setProperty("i_color3", [ this.color3.r / 255, this.color3.g / 255, this.color3.b / 255, this.color3.a / 255 ]);
}
this._mtl.setProperty("i_flowLight", this.flowLightUse ? 1 : 0);
this._mtl.setProperty("i_flTime", this.flSpeed * this._time * 60 / this.node.width);
this._mtl.setProperty("i_flRot", 180 * Math.atan(Math.tan(Math.PI * this.flRot / 180) * this.node.height / this.node.width) / Math.PI);
this._mtl.setProperty("i_flWidth", this.flWidth / this.node.width);
this._mtl.setProperty("i_flColor", [ this.flColor.r / 255, this.flColor.g / 255, this.flColor.b / 255, this.flColor.a / 255 ]);
this._mtl.setProperty("i_glow", this.glow);
this._mtl.setProperty("i_glowWidth", [ this.glowWidth / this.node.width, this.glowWidth / this.node.height ]);
this._mtl.setProperty("i_glowDepth", this.glowDepth);
this._mtl.setProperty("i_glowColor", [ this.glowColor.r / 255, this.glowColor.g / 255, this.glowColor.b / 255, this.glowColor.a / 255 ]);
}
};
e.prototype.update = function(t) {
this._time += t;
};
o([ c({
tooltip: "是否使用阴影"
}) ], e.prototype, "shadowUse", void 0);
o([ c({
tooltip: "阴影偏移（像素）",
visible: function() {
return this.shadowUse;
}
}) ], e.prototype, "shadowOffset", void 0);
o([ c({
tooltip: "阴影颜色",
visible: function() {
return this.shadowUse;
}
}) ], e.prototype, "shadowColor", void 0);
o([ c({
tooltip: "是否使用描边"
}) ], e.prototype, "outlineUse", void 0);
o([ c({
tooltip: "描边宽度（像素）",
min: 1,
visible: function() {
return this.outlineUse;
}
}) ], e.prototype, "outlineWidth", void 0);
o([ c({
tooltip: "描边颜色",
visible: function() {
return this.outlineUse;
}
}) ], e.prototype, "outlineColor", void 0);
o([ c({
tooltip: "是否使用描边阴影",
visible: function() {
return this.outlineUse;
}
}) ], e.prototype, "olShadowUse", void 0);
o([ c({
tooltip: "描边阴影偏移（像素）",
visible: function() {
return this.outlineUse && this.olShadowUse;
}
}) ], e.prototype, "olShadowOffset", void 0);
o([ c({
tooltip: "描边阴影颜色",
visible: function() {
return this.outlineUse && this.olShadowUse;
}
}) ], e.prototype, "olShadowColor", void 0);
o([ c({
tooltip: "是否使用扫光动效"
}) ], e.prototype, "flowLightUse", void 0);
o([ c({
tooltip: "扫光动效速度（像素）",
visible: function() {
return this.flowLightUse;
}
}) ], e.prototype, "flSpeed", void 0);
o([ c({
tooltip: "扫光动效旋转角度",
visible: function() {
return this.flowLightUse;
}
}) ], e.prototype, "flRot", void 0);
o([ c({
tooltip: "扫光动效宽度（像素）",
min: 1,
visible: function() {
return this.flowLightUse;
}
}) ], e.prototype, "flWidth", void 0);
o([ c({
tooltip: "扫光效果颜色",
visible: function() {
return this.flowLightUse;
}
}) ], e.prototype, "flColor", void 0);
o([ c({
tooltip: "文字颜色\nNone 0：单色，使用节点color\nOneColor 1：单色，使用color1\nTwoColor 2：渐变色-双色\nTriColor 3：渐变色-三色",
type: cc.Enum(p)
}) ], e.prototype, "gradient", void 0);
o([ c({
visible: function() {
return this.gradient > p.None;
}
}) ], e.prototype, "color1", void 0);
o([ c({
visible: function() {
return this.gradient > p.OneColor;
}
}) ], e.prototype, "color2", void 0);
o([ c({
visible: function() {
return this.gradient > p.TwoColor;
}
}) ], e.prototype, "color3", void 0);
o([ c({
tooltip: "外发光，外发光较耗性能\nNone 0：不使用\nLowp 1：低精度（建议）\nMediump 2: 中等精度\nHighp 3：高精度",
type: cc.Enum(d)
}) ], e.prototype, "glow", void 0);
o([ c({
tooltip: "外发光宽度（像素）",
min: 1,
visible: function() {
return this.glow > d.None;
}
}) ], e.prototype, "glowWidth", void 0);
o([ c({
tooltip: "外发光颜色深度",
min: 1,
max: 32,
visible: function() {
return this.glow > d.None;
}
}) ], e.prototype, "glowDepth", void 0);
o([ c({
tooltip: "外发光颜色",
visible: function() {
return this.glow > d.None;
}
}) ], e.prototype, "glowColor", void 0);
return o([ a, l("c2f/gui/ShaderArtLabel"), u(cc.Label), h(), f() ], e);
}(cc.Component);
i.default = y;
cc._RF.pop();
}, {} ],
ShaderCyclicRLabel: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "6f847evt3hBnL1dwEZ/qeGz", "ShaderCyclicRLabel");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("../../define/C2FConst"), a = cc._decorator, c = a.ccclass, l = a.requireComponent, u = a.menu, h = a.property, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.maxWidth = 0;
e.moveTxt = !0;
e.scaleMatch = !1;
e.moveSpeed = 100;
e.vTransH = !1;
e.transLG = s.C2FConst.LanguageKey.en + "|" + s.C2FConst.LanguageKey.th;
e.oriScale = 1;
e.oriPos = cc.Vec2.ZERO;
e.oriMat = null;
e.oriCacheMode = cc.Label.CacheMode.NONE;
e.duration = 0;
e.useShader = !1;
return e;
}
e.prototype.onLoad = function() {
this.duration = 0;
this.oriPos = this.node.getPosition();
this.oriScale = this.node.scale;
this.node.on(cc.Node.EventType.SIZE_CHANGED, this.onLabelSizeChanged.bind(this));
};
e.prototype.start = function() {
var t = this.node.getComponent(cc.Label);
this.oriCacheMode = t.cacheMode;
this.oriMat = t.getMaterial(0);
this.onLabelSizeChanged();
};
e.prototype.isNeedTransVH = function() {
var t = !1;
if (this.vTransH) {
var e = this.transLG.split("|");
e.length > 0 && e.indexOf(c2f.language.current) >= 0 && (t = !0);
}
return t;
};
e.prototype.isNeedScroll = function() {
return this.node.getContentSize().width > this.maxWidth;
};
e.prototype.onLabelSizeChanged = function() {
cc.log("label size: w:" + this.node.width + " h:" + this.node.height);
this.isNeedTransVH() && this.transferV2H();
this.moveTxt && this.updateMoveShow();
this.scaleMatch && (this.node.scale = Math.min(this.oriScale, this.maxWidth / Math.max(1, this.node.width)));
};
e.prototype.moveLabelWithShader = function() {
var t = this, e = this.node.getComponent(cc.Label);
e.cacheMode != cc.Label.CacheMode.NONE && (e.cacheMode = cc.Label.CacheMode.NONE);
c2f.res.load(s.C2FConst.fwBundleName, "commonRes/shader/materials/cyclicRollingTxt", cc.Material, null, function(i, r) {
if (i) cc.error(i); else if (e && e.isValid) {
var n = e.setMaterial(0, r);
if (n) {
n.setProperty("anchorX", t.node.anchorX);
n.setProperty("showWidth", t.maxWidth / t.node.width);
n.setProperty("moveSpeed", Math.max(1, (t.node.width - t.maxWidth) / (t.moveSpeed || 100)));
t.duration = 0;
t.useShader = !0;
}
}
});
};
e.prototype.updateMoveShow = function() {
this.useShader = !1;
var t = this.node.getComponent(cc.Label);
if (t.overflow == cc.Label.Overflow.NONE) if (this.isNeedScroll()) this.maxWidth <= 0 || this.moveLabelWithShader(); else if (this.oriMat) {
t.setMaterial(0, this.oriMat);
t.cacheMode = this.oriCacheMode;
}
};
e.prototype.transferV2H = function() {
if (this.vTransH) {
var t = this.node.getComponent(cc.Label);
if (t.overflow == cc.Label.Overflow.RESIZE_HEIGHT) {
t.overflow = cc.Label.Overflow.NONE;
t.node.angle = 90;
var e = t.node.getAnchorPoint();
t.node.anchorX = e.y;
t.node.anchorY = e.x;
}
}
};
e.prototype.update = function(t) {
if (this.useShader) {
this.duration += t;
var e = this.node.getComponent(cc.Label).getMaterial(0);
e && e.setProperty("curTick", this.duration);
}
};
o([ h({
tooltip: "文本显示的宽度阈值"
}) ], e.prototype, "maxWidth", void 0);
o([ h({
tooltip: "滑动显示"
}) ], e.prototype, "moveTxt", void 0);
o([ h({
tooltip: "缩放匹配"
}) ], e.prototype, "scaleMatch", void 0);
o([ h({
tooltip: "滑动显示移动速度",
visible: function() {
return this.moveTxt;
}
}) ], e.prototype, "moveSpeed", void 0);
o([ h({
tooltip: "将单字单行显示转为竖直水平的语言种类，以|分隔"
}) ], e.prototype, "vTransH", void 0);
o([ h({
tooltip: "转为竖直水平的语言种类，以|分隔",
visible: function() {
return this.vTransH;
}
}) ], e.prototype, "transLG", void 0);
return o([ c, u("c2f/shader/ShaderCyclicRLabel"), l(cc.Label) ], e);
}(cc.Component);
i.default = f;
cc._RF.pop();
}, {
"../../define/C2FConst": "C2FConst"
} ],
ShaderFill: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "9ae19szF/pDq7lhdJCvjlMt", "ShaderFill");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = s.property, l = s.menu, u = s.disallowMultiple, h = s.executeInEditMode, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.fillColor = new cc.Color();
e.fillPhase = 0;
e._mat = null;
return e;
}
Object.defineProperty(e.prototype, "mat", {
get: function() {
this._mat || (this._mat = this.getComponent(cc.RenderComponent).getMaterial(0));
return this._mat;
},
enumerable: !1,
configurable: !0
});
e.prototype.start = function() {
this.updateShader();
};
e.prototype.update = function() {};
e.prototype.updateShader = function() {
this.mat.setProperty("fillColor", this.fillColor);
this.mat.setProperty("fillPhase", this.fillPhase);
};
o([ c({
tooltip: !1
}) ], e.prototype, "fillColor", void 0);
o([ c({
tooltip: !1,
range: [ 0, 1 ]
}) ], e.prototype, "fillPhase", void 0);
return o([ a, u, h, l("c2f/shader/ShaderFill") ], e);
}(cc.Component);
i.default = f;
cc._RF.pop();
}, {} ],
ShaderOutline: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "f0668lumyFJmIr56YytIuri", "ShaderOutline");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s, a = cc._decorator, c = a.ccclass, l = a.property, u = a.menu, h = a.disallowMultiple, f = a.executeInEditMode;
(function(t) {
t[t.NONE = 0] = "NONE";
t[t.OUT = 1] = "OUT";
t[t.INNER = 2] = "INNER";
})(s || (s = {}));
var p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.outlineColor = new cc.Color();
e.outLineWidth = 0;
e.outlineType = s.NONE;
e.textureSize = new cc.Size(1, 1);
e._mat = null;
return e;
}
Object.defineProperty(e.prototype, "mat", {
get: function() {
this._mat || (this._mat = this.getComponent(cc.RenderComponent).getMaterial(0));
return this._mat;
},
enumerable: !1,
configurable: !0
});
e.prototype.start = function() {
this.updateShader();
};
e.prototype.update = function() {};
e.prototype.updateShader = function() {
this.mat.setProperty("outlineColor", this.outlineColor);
this.mat.setProperty("outlineInfo", new cc.Vec4(this.textureSize.width, this.textureSize.height, this.outLineWidth, this.outlineType));
};
o([ l({
tooltip: !1
}) ], e.prototype, "outlineColor", void 0);
o([ l({
tooltip: !1
}) ], e.prototype, "outLineWidth", void 0);
o([ l({
type: cc.Enum(s),
tooltip: !1
}) ], e.prototype, "outlineType", void 0);
o([ l({
tooltip: !1
}) ], e.prototype, "textureSize", void 0);
return o([ c, h, f, u("c2f/shader/ShaderOutline") ], e);
}(cc.Component);
i.default = p;
cc._RF.pop();
}, {} ],
ShaderShining: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "06119VaKW9Ijrh8naFAU3f3", "ShaderShining");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("../../core/timer/GameTimer"), a = cc._decorator, c = a.ccclass, l = a.property, u = a.menu, h = a.disallowMultiple, f = a.executeInEditMode, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.speed = 1;
e.slope = 1;
e.len = .25;
e.strength = 2;
e.interval = 1;
e.timeScale = !1;
e._mat = null;
return e;
}
Object.defineProperty(e.prototype, "mat", {
get: function() {
this._mat || (this._mat = this.getComponent(cc.RenderComponent).getMaterial(0));
return this._mat;
},
enumerable: !1,
configurable: !0
});
e.prototype.start = function() {
this.updateShader();
};
e.prototype.update = function() {
this.updateShader();
};
e.prototype.updateShader = function() {
this.mat.setProperty("shiningData", new cc.Vec4(this.speed, this.slope, this.len, this.interval));
this.mat.setProperty("extra", new cc.Vec4(this.timeScale ? s.GameTimer.scaleGameSec : s.GameTimer.gameSec, this.strength));
};
o([ l({
tooltip: !1
}) ], e.prototype, "speed", void 0);
o([ l({
tooltip: !1
}) ], e.prototype, "slope", void 0);
o([ l({
tooltip: !1,
range: [ 0, Number.MAX_SAFE_INTEGER ]
}) ], e.prototype, "len", void 0);
o([ l({
tooltip: !1,
range: [ 0, Number.MAX_SAFE_INTEGER ]
}) ], e.prototype, "strength", void 0);
o([ l({
tooltip: !1,
range: [ 0, Number.MAX_SAFE_INTEGER ]
}) ], e.prototype, "interval", void 0);
o([ l({
tooltip: !1
}) ], e.prototype, "timeScale", void 0);
return o([ c, h, f, u("c2f/shader/ShaderShining") ], e);
}(cc.Component);
i.default = p;
cc._RF.pop();
}, {
"../../core/timer/GameTimer": "GameTimer"
} ],
ShaderTile: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "2d214GiMOdLYop+D/v/sj2J", "ShaderTile");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = s.property, l = s.menu, u = s.disallowMultiple, h = s.executeInEditMode, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scale = new cc.Vec2(1, 1);
e.offset = new cc.Vec2(0, 0);
e._mat = null;
return e;
}
Object.defineProperty(e.prototype, "mat", {
get: function() {
this._mat || (this._mat = this.getComponent(cc.RenderComponent).getMaterial(0));
return this._mat;
},
enumerable: !1,
configurable: !0
});
e.prototype.start = function() {
this.updateShader();
};
e.prototype.update = function() {};
e.prototype.updateShader = function() {
this.mat.setProperty("tile", new cc.Vec4(this.scale.x, this.scale.y, this.offset.x, this.offset.y));
};
o([ c({
tooltip: !1
}) ], e.prototype, "scale", void 0);
o([ c({
tooltip: !1
}) ], e.prototype, "offset", void 0);
return o([ a, u, h, l("c2f/shader/ShaderTile") ], e);
}(cc.Component);
i.default = f;
cc._RF.pop();
}, {} ],
ShakeNode: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "f5b3aDExGZIKIoDy4pDmFyX", "ShakeNode");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("../../core/timer/C2FTween"), a = cc._decorator, c = a.ccclass, l = a.property, u = a.menu, h = a.disallowMultiple, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.shakePower = 5;
e.shakeTime = .16;
e.timeScale = !1;
e._tween = null;
return e;
}
e.prototype.shake = function(t) {
void 0 === t && (t = 5);
if (!(this._tween && this._tween.isPlaying() || t <= 0 || this.shakePower <= 0 || this.shakeTime <= 0)) {
var e = cc.v2(0, this.shakePower);
this.node.setPosition(e);
for (var i = [], r = [], n = 1; n <= 8; n++) {
var o = e.rotate(Math.PI / 4 * 3 * n);
i.push(o.x);
r.push(o.y);
}
this._tween = this.timeScale ? new s.C2FTween(this.node, s.SCALE_TWEEN) : new s.C2FTween(this.node);
this._tween.to({
x: i,
y: r
}, 1e3 * this.shakeTime).repeat(t).start();
}
};
o([ l({
tooltip: !1
}) ], e.prototype, "shakePower", void 0);
o([ l({
tooltip: !1
}) ], e.prototype, "shakeTime", void 0);
o([ l({
tooltip: !1
}) ], e.prototype, "timeScale", void 0);
return o([ c, h, u("c2f/common/ShakeNode") ], e);
}(cc.Component);
i.default = f;
cc._RF.pop();
}, {
"../../core/timer/C2FTween": "C2FTween"
} ],
SpineHack: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "43c13+6seFJ7IY1jLMY660l", "SpineHack");
var r = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function s(t) {
try {
c(r.next(t));
} catch (t) {
o(t);
}
}
function a(t) {
try {
c(r.throw(t));
} catch (t) {
o(t);
}
}
function c(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(s, a);
var e;
}
c((r = r.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var i, r, n, o, s = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function a(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;s; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
s.label++;
return {
value: o[1],
done: !1
};

case 5:
s.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = s.ops.pop();
s.trys.pop();
continue;

default:
if (!(n = s.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
s = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
s.label = o[1];
break;
}
if (6 === o[0] && s.label < n[1]) {
s.label = n[1];
n = o;
break;
}
if (n && s.label < n[2]) {
s.label = n[2];
s.ops.push(o);
break;
}
n[2] && s.ops.pop();
s.trys.pop();
continue;
}
o = e.call(t, s);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
}
if (5 & o[0]) throw o[1];
return {
value: o[0] ? o[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
if (!sp.Skeleton.prototype.__$CCSPSpineHack$__) {
sp.Skeleton.prototype.__$CCSPSpineHack$__ = !0;
sp.Skeleton.prototype.changeSkeletonData = function(t, e) {
return r(this, void 0, void 0, function() {
var i, r, o, s, a, c;
return n(this, function(n) {
switch (n.label) {
case 0:
this.dynamicUrl = t;
if (t != this.loadingUrl) return [ 3, 1 ];
e && e();
return [ 3, 5 ];

case 1:
i = !0;
if (r = this.skeletonData ? this.skeletonData._uuid : null) {
o = c2f.res.parseUrl(t);
(s = cc.assetManager.getBundle(o.bundle)) && s.getInfoWithPath(o.loadUrl).uuid == r && (i = !1);
}
if (!i) return [ 3, 4 ];
this.loadingUrl = t;
return (c = c2f.res.getRes(t, sp.SkeletonData)) ? [ 3, 3 ] : [ 4, c2f.res.loadOne(t, sp.SkeletonData) ];

case 2:
c = n.sent();
n.label = 3;

case 3:
a = c;
this.loadingUrl = "";
if (this.dynamicUrl != t || !a || !this.isValid) return [ 2 ];
if (this.skeletonData === a) {
e && e();
return [ 2 ];
}
a.addRef();
this.dynamicAsset && this.dynamicAsset.decRef();
this.dynamicAsset = a;
this.skeletonData = a;
n.label = 4;

case 4:
e && e();
n.label = 5;

case 5:
return [ 2 ];
}
});
});
};
sp.Skeleton.prototype.engineOnDestory = sp.Skeleton.prototype.onDestroy;
sp.Skeleton.prototype.onDestroy = function() {
if (this.dynamicAsset) {
this.dynamicAsset.decRef(!0);
this.dynamicAsset = null;
}
this.dynamicUrl = "";
this.loadingUrl = "";
this.engineOnDestory && this.engineOnDestory();
};
}
cc._RF.pop();
}, {} ],
SpineUtil: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "8637fDgEdlKi6LoyEAv8q7J", "SpineUtil");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = function() {
function t() {}
t.getBonePos2World = function(t, e) {
var i = cc.Vec3.ZERO, r = t.findBone(e);
r ? i = this.spineBoneWorldPos(t, r) : cc.log("dont find bone: ", e);
return i;
};
t.spineBoneWorldPos = function(t, e, i) {
i || (i = cc.v3(0, 0, 0));
if (e) t.node.convertToWorldSpaceAR(cc.v3(e.worldX, e.worldY), i); else {
i.x = 0;
i.y = 0;
i.z = 0;
}
return i;
};
t.getBonePos = function(t, e) {
var i = cc.v2(0, 0), r = t.findBone(e);
if (r) {
i.x = r.worldX * t.node.scaleX;
i.y = r.worldY * t.node.scaleY;
} else cc.warn("dont find bone[" + e + "] in spine: ");
return i;
};
return t;
}();
c2f.utils.spine = r;
cc._RF.pop();
}, {} ],
SpriteHack: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "a0df8YqUPJJhKENk8AHyQX5", "SpriteHack");
var r = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function s(t) {
try {
c(r.next(t));
} catch (t) {
o(t);
}
}
function a(t) {
try {
c(r.throw(t));
} catch (t) {
o(t);
}
}
function c(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(s, a);
var e;
}
c((r = r.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var i, r, n, o, s = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function a(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;s; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
s.label++;
return {
value: o[1],
done: !1
};

case 5:
s.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = s.ops.pop();
s.trys.pop();
continue;

default:
if (!(n = s.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
s = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
s.label = o[1];
break;
}
if (6 === o[0] && s.label < n[1]) {
s.label = n[1];
n = o;
break;
}
if (n && s.label < n[2]) {
s.label = n[2];
s.ops.push(o);
break;
}
n[2] && s.ops.pop();
s.trys.pop();
continue;
}
o = e.call(t, s);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
}
if (5 & o[0]) throw o[1];
return {
value: o[0] ? o[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
if (!cc.Sprite.prototype.__$CCSpriteHack$__) {
cc.Sprite.prototype.__$CCSpriteHack$__ = !0;
cc.Sprite.prototype.changeSpriteFrame = function(t, e) {
return r(this, void 0, void 0, function() {
var i, r;
return n(this, function(n) {
switch (n.label) {
case 0:
this.dynamicUrl = t;
return (r = c2f.res.getRes(t, cc.SpriteFrame)) ? [ 3, 2 ] : [ 4, c2f.res.loadOne(t, cc.SpriteFrame) ];

case 1:
r = n.sent();
n.label = 2;

case 2:
i = r;
if (this.dynamicUrl != t || !i || !this.isValid) return [ 2 ];
if (this.spriteFrame === i) {
e && e();
return [ 2 ];
}
i.addRef();
this.dynamicAsset && this.dynamicAsset.decRef();
this.dynamicAsset = i;
this.spriteFrame = i;
e && e();
return [ 2 ];
}
});
});
};
cc.Sprite.prototype.changeSFWithAtlas = function(t, e, i) {
return r(this, void 0, void 0, function() {
var r, o, s;
return n(this, function(n) {
switch (n.label) {
case 0:
this.dynamicUrl = t;
return (o = c2f.res.getRes(t, cc.SpriteAtlas)) ? [ 3, 2 ] : [ 4, c2f.res.loadOne(t, cc.SpriteAtlas) ];

case 1:
o = n.sent();
n.label = 2;

case 2:
r = o;
if (this.dynamicUrl != t || !r || !this.isValid) return [ 2 ];
if (!(s = r.getSpriteFrame(e))) return [ 2 ];
if (this.spriteFrame === s) {
i && i();
return [ 2 ];
}
r.addRef();
this.dynamicAsset && this.dynamicAsset.decRef();
this.dynamicAsset = r;
this.spriteFrame = s;
i && i();
return [ 2 ];
}
});
});
};
cc.Sprite.prototype.engineOnDestory = cc.Sprite.prototype.onDestroy;
cc.Sprite.prototype.onDestroy = function() {
if (this.dynamicAsset) {
this.dynamicAsset.decRef(!0);
this.dynamicAsset = null;
}
this.dynamicUrl = "";
this.engineOnDestory && this.engineOnDestory();
};
}
cc._RF.pop();
}, {} ],
StorageMgr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ed226gLF85Oyr+WhA9TJZLX", "StorageMgr");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../../libs/md5/Md5"), n = function() {
function t() {
this._key = null;
this._iv = null;
this._id = "";
}
t.prototype.init = function(t, e) {
this._key = r.md5(t);
this._iv = r.md5(e);
};
t.prototype.setUser = function(t) {
this._id = t;
};
t.prototype.set = function(t, e) {
if (null != (t = t + "_" + this._id)) {
t = r.md5(t);
if (null != e) if ("function" != typeof e) {
if ("object" == typeof e) try {
e = JSON.stringify(e);
} catch (t) {
console.error("解析失败，str = " + e);
return;
} else "number" == typeof e ? e += "" : "boolean" == typeof e && (e = e ? "1" : "0");
null != this._key && null != this._iv && (e = c2f.utils.encrypt.aesEncrypt("" + e, this._key, this._iv));
cc.sys.localStorage.setItem(t, e);
} else console.error("储存的值不能为方法"); else {
console.warn("存储的值为空，则直接移除该存储");
this.remove(t);
}
} else console.error("存储的key不能为空");
};
t.prototype.get = function(t, e) {
void 0 === e && (e = "");
if (null == t) {
console.error("存储的key不能为空");
return null;
}
t = t + "_" + this._id;
t = r.md5(t);
var i = cc.sys.localStorage.getItem(t);
null != i && "" !== i && null != this._key && null != this._iv && (i = c2f.utils.encrypt.aesDecrypt(i, this._key, this._iv));
return null === i ? e : i;
};
t.prototype.getNumber = function(t, e) {
void 0 === e && (e = 0);
var i = cc.sys.localStorage.getItem(t);
return Number(i) || e;
};
t.prototype.setNumber = function(t, e) {
cc.sys.localStorage.setItem(t, e);
};
t.prototype.getBoolean = function(t) {
var e = this.get(t);
return !(!e || "0" == e || "" == e);
};
t.prototype.getJson = function(t, e) {
var i = this.get(t);
return i && JSON.parse(i) || e;
};
t.prototype.remove = function(t) {
if (null != t) {
t = t + "_" + this._id;
r.md5(t);
cc.sys.localStorage.removeItem(t);
} else console.error("存储的key不能为空");
};
t.prototype.clear = function() {
cc.sys.localStorage.clear();
};
t.prototype.setPlainItem = function(t, e) {
cc.sys.localStorage.setItem(t, e);
};
t.prototype.getPlainItem = function(t, e) {
var i = cc.sys.localStorage.getItem(t);
return null != i ? i : e;
};
t.prototype.getPlainBool = function(t, e) {
var i = cc.sys.localStorage.getItem(t);
return null != i ? 1 == parseInt(i) : e;
};
t.getInstance = function() {
this._instance || (this._instance = new t());
return this._instance;
};
t._instance = null;
return t;
}();
c2f.storage = n.getInstance();
cc._RF.pop();
}, {
"../../libs/md5/Md5": "Md5"
} ],
StringFormat: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "a8bb4MgWCBL4oy3iwr0Eayv", "StringFormat");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.StringFormatFunction = void 0;
var r = t("../define/C2FConst"), n = function() {
function t() {}
t.prototype.deal = function(t, e) {
if ("" === e) return t;
var i, r = (e = e.toLowerCase().trim()).match(/^[a-z|A-Z]+/gi), n = e.match(/\d+$/gi), o = "", s = "";
r && (o = r[0]);
n && (i = parseInt(n[0]));
if ("number" == typeof t) switch (o) {
case "int":
s = this.int(t);
break;

case "fix":
s = this.fix(t, i);
break;

case "kmbt":
s = this.KMBT(t);
break;

case "per":
s = this.per(t, i);
break;

case "sep":
s = this.sep(t);
} else {
switch (o) {
case "limit":
s = this.limit(t, i);
}
s = t;
}
return s;
};
t.prototype.sep = function(t) {
return Math.round(t).toString().replace(new RegExp("(\\d)(?=(\\d{3})+$)", "ig"), "$1,");
};
t.prototype.time_m = function() {};
t.prototype.time_s = function() {};
t.prototype.time_ms = function() {};
t.prototype.timeStamp = function(t) {
return new Date(t).toString();
};
t.prototype.per = function(t, e) {
return Math.round(100 * t).toFixed(e);
};
t.prototype.int = function(t) {
return Math.round(t);
};
t.prototype.fix = function(t, e) {
return t.toFixed(e);
};
t.prototype.limit = function(t, e) {
return t.substring(0, e);
};
t.prototype.KMBT = function(t, e) {
void 0 === e && (e = "en");
switch (e) {
case r.C2FConst.LanguageKey.zh:
}
return this.compressUnit(t, [ 1e3, 1e6, 1e9, 1e12 ], [ "", "K", "M", "B", "T" ], 2);
};
t.prototype.compressUnit = function(t, e, i, r) {
void 0 === r && (r = 2);
var n, o, s = e, a = i;
for (o = 0; o < s.length; o++) if (t < s[o]) {
n = o > 0 ? (t / s[o - 1]).toFixed(r) : t.toFixed(0);
break;
}
return n + a[o];
};
return t;
}();
i.StringFormatFunction = new n();
cc._RF.pop();
}, {
"../define/C2FConst": "C2FConst"
} ],
StringUtil: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "e3a44U9nSZJE5AFexxfGCma", "StringUtil");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = function() {
function t() {}
t.guid = function() {
for (var t = "", e = 1; e <= 32; e++) {
t += Math.floor(16 * Math.random()).toString(16);
8 != e && 12 != e && 16 != e && 20 != e || (t += "-");
}
return t;
};
t.numberTotPermil = function(t) {
return t.toLocaleString();
};
t.numberToThousand = function(t, e) {
void 0 === e && (e = 2);
if (t < 1e3) return t.toString();
var i = Math.floor(Math.log(t) / Math.log(1e3));
return (t / Math.pow(1e3, i)).toFixed(e) + [ "", "K", "M", "G" ][i];
};
t.numberToTenThousand = function(t, e) {
void 0 === e && (e = 2);
if (t < 1e4) return t.toString();
var i = Math.floor(Math.log(t) / Math.log(1e4));
return (t / Math.pow(1e4, i)).toFixed(e) + [ "", "万", "亿", "万亿" ][i];
};
t.stringToArray1 = function(t) {
return "" == t ? [] : t.split(",");
};
t.stringToArray2 = function(t) {
return "" == t ? [] : t.split("|");
};
t.stringToArray3 = function(t) {
return "" == t ? [] : t.split(":");
};
t.stringToArray4 = function(t) {
return "" == t ? [] : t.split(";");
};
t.sub = function(t, e, i) {
void 0 === i && (i = !1);
var r = /[^\x00-\xff]/g;
if (t.replace(r, "mm").length <= e) return t;
for (var n = Math.floor(e / 2); n < t.length; n++) if (t.substring(0, n).replace(r, "mm").length >= e) return i ? t.substring(0, n) + "..." : t.substring(0, n);
return t;
};
t.stringLen = function(t) {
for (var e = 0, i = t.length, r = -1, n = 0; n < i; n++) e += (r = t.charCodeAt(n)) >= 0 && r <= 128 ? 1 : 2;
return e;
};
t.formatWords = function(t, e) {
if (!e || e.length <= 0) return t;
var i = "UIV_Null" == e, r = this.stringToArray2(e);
return t.replace(/\{(\w+)\}/g, function(t, e) {
return i ? "" : r[e];
});
};
t.formatWithObj = function(t) {
for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
var r = t;
if (1 === e.length && "[object Object]" === Object.prototype.toString.call(e[0])) {
for (var n in e[0]) if (e[0].hasOwnProperty(n)) {
var o = new RegExp("%{" + n + "}", "g");
r = r.replace(o, "" + e[0][n]);
}
} else e.forEach(function(t) {
r = r.replace(/%\{.*?\}/, "" + t);
});
return r;
};
t.uppercaseFirstLetter = function(t) {
return t.substring(0, 1).toUpperCase() + t.substring(1);
};
t.lowercaseFirstLetter = function(t) {
return t.substring(0, 1).toLowerCase() + t.substring(1);
};
t.isAllDigits = function(t) {
return /^\d+$/.test(t);
};
return t;
}();
c2f.utils.str = r;
cc._RF.pop();
}, {} ],
TabPage: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "7c408v/hf9Ch7Fqsk0DkYEv", "TabPage");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = s.property, l = s.menu, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.sfSelected = null;
e.sfUnSelect = null;
e.clrSelected = cc.Color.WHITE.clone();
e.clrUnSelect = cc.Color.WHITE.clone();
e.outClrSelected = cc.Color.BLACK.clone();
e.outClrUnSelect = cc.Color.GRAY.clone();
e.togItemClick = [];
e.curTab = null;
e.switchCheckHandler = null;
return e;
}
e.prototype.start = function() {};
e.prototype.onEnable = function() {
if (this.curTab) {
var t = this.getComponent(cc.ToggleContainer);
t && t.updateTogglesUIStateOnly(this.curTab);
}
};
e.prototype.CC_onClickToggle = function(t) {
this.subBtnClicked(t.target.name);
};
e.prototype.setTabCount = function(t) {
for (var e = 0; e < this.node.childrenCount; e++) this.node.children[e].active = e < t;
};
e.prototype.addClickHandler = function(t) {
this.togItemClick.push(t);
};
e.prototype.subBtnClicked = function(t, e) {
void 0 === e && (e = void 0);
if (this.curTab != t) {
var i = !0;
if (this.switchCheckHandler && !(i = this.switchCheckHandler(t))) for (var r = 0; r < this.node.children.length; r++) {
var n = this.node.children[r], o = n.getComponent(cc.Toggle);
if (o && n.name == this.curTab) {
o.check();
break;
}
}
if (i) {
this.curTab = t;
this.setTabBtnState(t);
for (var s = 0, a = this.togItemClick; s < a.length; s++) a[s].emit([ t, e ]);
}
}
};
e.prototype.setTabBtnState = function(t) {
if (null != t) for (var e = 0; e < this.node.children.length; e++) {
var i = this.node.children[e], r = i.getComponent(cc.Toggle);
if (r) {
var n = t == i.name, o = c2f.utils.view.getFirstChildByName(i, "txtTitle");
if (o) {
o.color = n ? this.clrSelected : this.clrUnSelect;
var s = o.getComponent(cc.LabelOutline);
s && (s.color = n ? this.outClrSelected : this.outClrUnSelect);
}
var a = n ? this.sfSelected : this.sfUnSelect;
a && (i.getComponent(cc.Sprite).spriteFrame = a);
r.isChecked = n;
}
}
};
e.prototype.quickSetTabHnadler = function(t, e) {
var i = new cc.Component.EventHandler();
i.target = t.node;
i.component = c2f.utils.view.getComponentName(t);
i.handler = e;
i.customEventData = "";
this.addClickHandler(i);
};
e.prototype.setSwitchCheckHandler = function(t) {
this.switchCheckHandler = t;
};
o([ c(cc.SpriteFrame) ], e.prototype, "sfSelected", void 0);
o([ c(cc.SpriteFrame) ], e.prototype, "sfUnSelect", void 0);
o([ c(cc.Color) ], e.prototype, "clrSelected", void 0);
o([ c(cc.Color) ], e.prototype, "clrUnSelect", void 0);
o([ c(cc.Color) ], e.prototype, "outClrSelected", void 0);
o([ c(cc.Color) ], e.prototype, "outClrUnSelect", void 0);
o([ c({
type: cc.Component.EventHandler
}) ], e.prototype, "togItemClick", void 0);
return o([ a, l("c2f/common/TabPage") ], e);
}(cc.Component);
i.default = u;
cc._RF.pop();
}, {} ],
TblMgr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "58c798ohd5Aa5uLH9+TPmYV", "TblMgr");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.TblMgr = void 0;
var r = t("./Tbl"), n = (cc._decorator.ccclass, function() {
function t() {}
t.prototype.init = function(t) {
for (var e = 0, i = t; e < i.length; e++) {
var n = i[e], o = new r.Tbl();
o.init(n.name, n.json);
c2f.tbl[n.name] = window[n.name] = o;
}
};
t.getInstance = function() {
this._instance || (this._instance = new t());
return this._instance;
};
t._instance = null;
return t;
}());
i.TblMgr = n;
c2f.tblMgr = n.getInstance();
cc._RF.pop();
}, {
"./Tbl": "Tbl"
} ],
Tbl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "6cc99vHdtxHF6VdxK5NyUHr", "Tbl");
var r = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
}, n = this && this.__spreadArrays || function() {
for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
var r = Array(t), n = 0;
for (e = 0; e < i; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, 
n++) r[n] = o[s];
return r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.Tbl = void 0;
var o = cc._decorator.ccclass, s = function() {
function t() {
this.cache = [];
}
t.prototype.init = function(t, e) {
this.name = t;
this.json = e;
};
t.prototype.getLength = function() {
return this.json.data.length;
};
t.prototype.getDataByIndex = function(t) {
return this.warpKeys(t);
};
t.prototype.getIndex = function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
var i = t.join("_");
return this.json.index[i];
};
t.prototype.get = function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
var i = t.join("_"), r = this.warpKeys(this.json.index[i]);
r || console.error("Tbl-> [" + this.name + "] 不存在 key = " + n(t).toString());
return r;
};
t.prototype.warpKeys = function(t) {
if (null != this.cache[t]) return this.cache[t];
var e = this.json.data[t];
if (e) {
for (var i = [], r = {}, n = 0; n < this.json.keys.length; n++) {
r[s = this.json.keys[n]] = e[n];
this._needRedirect(s) && i.push(s);
}
this.cache[t] = r;
for (var o = 0; o < i.length; o++) {
var s;
r[s = i[o]] = this._redirect(s, r[s]);
}
return Object.freeze(r);
}
return null;
};
t.prototype._needRedirect = function(t) {
return t in this.json.redirect;
};
t.prototype._redirect = function(t, e) {
if (t in this.json.redirect) {
var i = this.json.redirect[t], r = c2f.tbl[i];
if (r) {
var n;
if (n = Array.isArray(e) ? r.get.apply(r, e) : r.get(e)) return n;
}
return null;
}
return e;
};
t.prototype.getDataListReadonly = function() {
for (var t = 0; t < this.json.data.length; t++) this.cache[t] || this.warpKeys(t);
Object.isFrozen(this.cache) || Object.freeze(this.cache);
return this.cache;
};
t.prototype.getDataListCopy = function() {
var t = this.getDataListReadonly();
return JSON.parse(JSON.stringify(t));
};
t.prototype.filter = function(t) {
for (var e = [], i = this.getDataListReadonly(), r = 0; r < i.length; r++) {
var n = i[r];
t(n) && e.push(n);
}
return e;
};
return r([ o("Tbl") ], t);
}();
i.Tbl = s;
cc._RF.pop();
}, {} ],
TimerManager: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "73600VLsIBLOKhOhd7td4P8", "TimerManager");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
i.TimerManager = void 0;
var o = t("./GameTimer"), s = t("./Timer"), a = function() {}, c = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.times = {};
e.initTime = new Date().getTime();
e.serverTime = 0;
return e;
}
e.getInstance = function() {
return this._instance;
};
e.prototype.onLoad = function() {
if (!e._instance) {
e._instance = this;
o.GameTimer.reset();
}
};
e.prototype.onDestroy = function() {
e._instance === this && (e._instance = null);
o.GameTimer.onDestroy();
};
e.prototype.update = function(t) {
if (e._instance === this) {
o.GameTimer.update(t);
for (var i in this.times) {
var r = this.times[i];
if (r.timer.update(t) && r.object[r.field] > 0) {
r.object[r.field]--;
0 == r.object[r.field] ? this.onTimerComplete(r) : r.onSecond && r.onSecond.call(r.object);
}
}
}
};
e.prototype.onTimerComplete = function(t) {
t.onComplete && t.onComplete.call(t.object);
t.event && this.node.emit(t.event);
delete this.times[t.id];
};
e.prototype.register = function(t, e, i, r) {
var n = new s.Timer();
n.step = 1;
var o = new a();
o.id = c2f.utils.str.guid();
o.timer = n;
o.object = t;
o.field = e;
o.onSecond = i;
o.onComplete = r;
this.times[o.id] = o;
return o.id;
};
e.prototype.unRegister = function(t) {
this.times[t] && delete this.times[t];
};
e.prototype.setServerTime = function(t) {
t && (this.serverTime = t);
return this.serverTime;
};
e.prototype.getServerTime = function() {
return this.serverTime + this.getTime();
};
e.prototype.getTime = function() {
return this.getLocalTime() - this.initTime;
};
e.prototype.getLocalTime = function() {
return Date.now();
};
e.prototype.save = function() {
for (var t in this.times) this.times[t].startTime = this.getTime();
};
e.prototype.load = function() {
for (var t in this.times) {
var e = Math.floor((this.getTime() - (this.times[t].startTime || this.getTime())) / 1e3), i = this.times[t];
i.object[i.field] = i.object[i.field] - e;
if (i.object[i.field] < 0) {
i.object[i.field] = 0;
this.onTimerComplete(i);
}
this.times[t].startTime = null;
}
};
e.prototype.once = function(t, e) {
this.scheduleOnce(function() {
t && t();
}, e);
};
e._instance = null;
return e;
}(cc.Component);
i.TimerManager = c;
if (cc.director.getScene()) {
var l = new cc.Node("TimerManager");
cc.game.addPersistRootNode(l);
c2f.timer = l.addComponent(c);
} else cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function() {
if (!c.getInstance()) {
var t = new cc.Node("TimerManager");
cc.game.addPersistRootNode(t);
c2f.timer = t.addComponent(c);
}
});
cc._RF.pop();
}, {
"./GameTimer": "GameTimer",
"./Timer": "Timer"
} ],
Timer: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "6021fct1uhJsImEuhdFWC0f", "Timer");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.Timer = void 0;
var r = function() {
function t(t) {
void 0 === t && (t = 0);
this.callback = null;
this._elapsedTime = 0;
this._step = -1;
this.step = t;
}
Object.defineProperty(t.prototype, "elapsedTime", {
get: function() {
return this._elapsedTime;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "step", {
get: function() {
return this._step;
},
set: function(t) {
this._step = t;
this._elapsedTime = 0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "progress", {
get: function() {
return this._elapsedTime / this._step;
},
enumerable: !1,
configurable: !0
});
t.prototype.update = function(t) {
var e;
if (this.step <= 0) return !1;
this._elapsedTime += t;
if (this._elapsedTime >= this._step) {
this._elapsedTime -= this._step;
null === (e = this.callback) || void 0 === e || e.call(this);
return !0;
}
return !1;
};
t.prototype.reset = function() {
this._elapsedTime = 0;
};
t.prototype.stop = function() {
this._elapsedTime = 0;
this.step = -1;
};
return t;
}();
i.Timer = r;
cc._RF.pop();
}, {} ],
ToScaleScreen: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "d37e8d8sltP/7TNA7NzgqdS", "ToScaleScreen");
var r, n, o = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), s = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
(function(t) {
t[t.full = 0] = "full";
t[t.width = 1] = "width";
t[t.height = 2] = "height";
t[t.amdFull = 3] = "amdFull";
})(n || (n = {}));
var a = cc._decorator, c = a.ccclass, l = a.property, u = a.menu, h = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._fixedType = n.full;
e._target = null;
e._offset = 0;
e._fixedCenter = !1;
e.oriPos = cc.Vec2.ZERO;
return e;
}
Object.defineProperty(e.prototype, "fixedType", {
get: function() {
return this._fixedType;
},
set: function(t) {
if (this._fixedType !== t) {
this._fixedType = t;
this.autoScale();
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "target", {
get: function() {
return this._target;
},
set: function(t) {
this._target = t;
this.autoScale();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "offset", {
get: function() {
return this._offset;
},
set: function(t) {
this._offset = t;
this.autoScale();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "fixedCenter", {
get: function() {
return this._fixedCenter;
},
set: function(t) {
this._fixedCenter = t;
this.autoScale();
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
this.target && this.target.on(cc.Node.EventType.SIZE_CHANGED, this.autoScale, this);
this.node.on(cc.Node.EventType.SIZE_CHANGED, this.autoScale, this);
this.node.getPosition(this.oriPos);
this.autoScale();
};
e.prototype.onDestroy = function() {
this.oriPos = null;
this.target && this.target.off(cc.Node.EventType.SIZE_CHANGED, this.autoScale, this);
this.node.off(cc.Node.EventType.SIZE_CHANGED, this.autoScale, this);
};
e.prototype.autoScale = function() {
var t = cc.view.getVisibleSize();
this.target && (t = this.target.getContentSize());
var e = t.width / this.node.width, i = t.height / this.node.height, r = 1;
switch (this.fixedType) {
case n.full:
r = Math.max(e, i) + this.offset;
break;

case n.width:
r = e;
break;

case n.height:
r = i;
break;

case n.amdFull:
var o = 1080 * t.height / 1920 / this.node.width;
r = Math.max(o, i) + this.offset;
}
this.node.setScale(r);
this.resetPosition(r);
};
e.prototype.resetPosition = function(t) {
if (this.fixedCenter) {
var e = t * (this.node.anchorX - .5) * this.node.width, i = t * (this.node.anchorY - .5) * this.node.height;
this.node.setPosition(e, i);
} else this.node.setPosition(this.oriPos);
};
s([ l({
type: cc.Enum(n)
}) ], e.prototype, "_fixedType", void 0);
s([ l({
type: cc.Enum(n),
tooltip: !1
}) ], e.prototype, "fixedType", null);
s([ l() ], e.prototype, "_target", void 0);
s([ l({
type: cc.Node,
tooltip: !1
}) ], e.prototype, "target", null);
s([ l() ], e.prototype, "_offset", void 0);
s([ l({
tooltip: "缩放偏移：在等比铺满屏幕的情况下缩放偏移值(百分比)"
}) ], e.prototype, "offset", null);
s([ l() ], e.prototype, "_fixedCenter", void 0);
s([ l({
tooltip: "固定节点始终保持相对屏幕居中"
}) ], e.prototype, "fixedCenter", null);
return s([ c, u("c2f/common/ToScaleScreen") ], e);
}(cc.Component);
i.default = h;
cc._RF.pop();
}, {} ],
ToggleContainerHack: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "94cccrVitNC2IRgB7aI/kgC", "ToggleContainerHack");
Object.defineProperty(i, "__esModule", {
value: !0
});
if (!cc.ToggleContainer.prototype.__$CCToggleContainerHack$__) {
cc.ToggleContainer.prototype.__$CCToggleContainerHack$__ = !0;
cc.ToggleContainer.prototype.updateTogglesUIStateOnly = function(t) {
this.enabledInHierarchy && (!t || t.length <= 0 || this.toggleItems.forEach(function(e) {
e.node.name != t && e.isChecked && e.enabled && e._hideCheckMark();
}));
};
}
cc._RF.pop();
}, {} ],
TouchEffect: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "be533baN2NNOKFhSaS8tiz2", "TouchEffect");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.TouchEffect = void 0;
var s = cc._decorator, a = s.ccclass, c = s.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.spEfxDt = null;
return e;
}
e.prototype.onLoad = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node._touchListener.swallowTouches = !1;
};
e.prototype.onTouchStart = function(t) {
if (this.spEfxDt && !(this.node.children.length > 5)) {
var e = t.getLocation(), i = this.node.convertToNodeSpaceAR(e), r = new cc.Node();
r.setPosition(i);
r.scale = 1;
r.angle = 360 * Math.random();
var n = r.addComponent(sp.Skeleton);
n.premultipliedAlpha = !1;
n.enableBatch = !0;
n.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
r.parent = this.node;
n.skeletonData = this.spEfxDt;
n.setAnimation(0, "idle", !1);
n.setCompleteListener(function() {
r.destroy();
});
}
};
o([ c(sp.SkeletonData) ], e.prototype, "spEfxDt", void 0);
return o([ a ], e);
}(cc.Component);
i.TouchEffect = l;
cc._RF.pop();
}, {} ],
UIAnimaDef: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "f6b35KouaZCFpyRaoVcWe23", "UIAnimaDef");
var r = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.UIAnimaTarget = i.UIAnimaOnce = i.UIAnimaParam = i.UIAnimaFunc = i.UIAnimaType = void 0;
var n, o = cc._decorator, s = o.ccclass, a = o.property;
(function(t) {
t[t.none = 0] = "none";
t[t.move = 1] = "move";
t[t.scale = 2] = "scale";
t[t.opacity = 3] = "opacity";
t[t.ratation = 4] = "ratation";
t[t.function = 5] = "function";
t[t.delay = 6] = "delay";
})(n = i.UIAnimaType || (i.UIAnimaType = {}));
var c = function() {
function t() {
this.tarNode = null;
this.compName = "";
this.funcName = "";
}
r([ a(cc.Node) ], t.prototype, "tarNode", void 0);
r([ a() ], t.prototype, "compName", void 0);
r([ a() ], t.prototype, "funcName", void 0);
return r([ s("UIAnimaFunc") ], t);
}();
i.UIAnimaFunc = c;
var l = function() {
function t() {
this.animaTp = n.none;
this.byVec2 = cc.v2(0, 0);
this.byNum = 0;
this.cbHandler = new c();
}
r([ a({
type: cc.Enum(n)
}) ], t.prototype, "animaTp", void 0);
r([ a({
visible: function() {
return this.animaTp === n.move || this.animaTp === n.scale;
}
}) ], t.prototype, "byVec2", void 0);
r([ a({
visible: function() {
return this.animaTp === n.opacity || this.animaTp === n.ratation;
}
}) ], t.prototype, "byNum", void 0);
r([ a({
type: c,
visible: function() {
return this.animaTp === n.function;
}
}) ], t.prototype, "cbHandler", void 0);
return r([ s("UIAnimaParam") ], t);
}();
i.UIAnimaParam = l;
var u = function() {
function t() {
this.duration = 0;
this.animaList = [];
}
r([ a() ], t.prototype, "duration", void 0);
r([ a(l) ], t.prototype, "animaList", void 0);
return r([ s("UIAnimaOnce") ], t);
}();
i.UIAnimaOnce = u;
var h = function() {
function t() {
this.tarNode = null;
this.actionList = [];
}
r([ a(cc.Node) ], t.prototype, "tarNode", void 0);
r([ a(u) ], t.prototype, "actionList", void 0);
return r([ s("UIAnimaTarget") ], t);
}();
i.UIAnimaTarget = h;
cc._RF.pop();
}, {} ],
UIAnimaPlayer: [ function(require, module, exports) {
"use strict";
cc._RF.push(module, "80f078JStpBsb27jKw3Ctrw", "UIAnimaPlayer");
var __extends = this && this.__extends || (extendStatics = function(t, e) {
return (extendStatics = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
extendStatics(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), extendStatics, __decorate = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(exports, "__esModule", {
value: !0
});
exports.UIAnimaPlayer = void 0;
var UIAnimaDef_1 = require("../../define/UIAnimaDef"), _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, UIAnimaPlayer = function(_super) {
__extends(UIAnimaPlayer, _super);
function UIAnimaPlayer() {
var t = null !== _super && _super.apply(this, arguments) || this;
t.animaTarget = [];
t.playOnload = !1;
t.beforePlayOpacity = null;
return t;
}
UIAnimaPlayer.prototype.onLoad = function() {
this.beforePlayOpacity = new Map();
for (var t = 0, e = this.animaTarget; t < e.length; t++) {
var i = e[t];
this.beforePlayOpacity.set(i.tarNode, i.tarNode.opacity);
i.tarNode.opacity = 1;
}
};
UIAnimaPlayer.prototype.start = function() {
this.playOnload && this.scheduleOnce(this.play.bind(this), 0);
};
UIAnimaPlayer.prototype.play = function() {
this.beforePlayOpacity.forEach(function(t, e) {
e.opacity = t;
});
this.beforePlayOpacity.clear();
this.initTargetState();
for (var t = 0, e = this.animaTarget; t < e.length; t++) {
var i = e[t];
this.playTargetAnima(i);
}
};
UIAnimaPlayer.prototype.initTargetState = function() {
for (var t = 0, e = this.animaTarget; t < e.length; t++) {
var i = e[t];
this.initTarget(i);
}
};
UIAnimaPlayer.prototype.initTarget = function(t) {
for (var e = 0, i = t.actionList; e < i.length; e++) for (var r = 0, n = i[e].animaList; r < n.length; r++) {
var o = n[r];
switch (o.animaTp) {
case UIAnimaDef_1.UIAnimaType.move:
t.tarNode.x -= o.byVec2.x;
t.tarNode.y -= o.byVec2.y;
break;

case UIAnimaDef_1.UIAnimaType.opacity:
t.tarNode.opacity -= o.byNum;
break;

case UIAnimaDef_1.UIAnimaType.ratation:
t.tarNode.rotation -= o.byNum;
break;

case UIAnimaDef_1.UIAnimaType.scale:
t.tarNode.scaleX -= o.byVec2.x;
t.tarNode.scaleY -= o.byVec2.y;
}
}
};
UIAnimaPlayer.prototype.playTargetAnima = function(target) {
for (var sequence = [], _i = 0, _a = target.actionList; _i < _a.length; _i++) {
for (var one = _a[_i], onceParam = null, _loop_1 = function(t) {
if (t.animaTp == UIAnimaDef_1.UIAnimaType.delay) sequence.push(cc.tween(target.tarNode).delay(one.duration)); else if (t.animaTp == UIAnimaDef_1.UIAnimaType.function) sequence.push(cc.tween(target.tarNode).call(function() {
if (t.cbHandler.tarNode) {
var e = t.cbHandler.tarNode.getComponent(t.cbHandler.compName);
e && e[t.cbHandler.funcName]();
}
})); else {
onceParam = onceParam || {};
switch (t.animaTp) {
case UIAnimaDef_1.UIAnimaType.move:
onceParam.x = t.byVec2.x;
onceParam.y = t.byVec2.y;
break;

case UIAnimaDef_1.UIAnimaType.opacity:
onceParam.opacity = t.byNum;
break;

case UIAnimaDef_1.UIAnimaType.ratation:
onceParam.rotation = t.byNum;
break;

case UIAnimaDef_1.UIAnimaType.scale:
onceParam.scaleX = t.byVec2.x;
onceParam.scaleY = t.byVec2.y;
}
}
}, _b = 0, _c = one.animaList; _b < _c.length; _b++) {
var oneCH = _c[_b];
_loop_1(oneCH);
}
onceParam && sequence.push(cc.tween(target.tarNode).by(one.duration, onceParam));
}
if (!(sequence.length <= 0)) {
for (var evalStr = "cc.tween(target.tarNode)", i = 0; i < sequence.length; i++) evalStr += ".then(sequence[" + i + "])";
evalStr += ".start();";
eval(evalStr);
}
};
__decorate([ property(UIAnimaDef_1.UIAnimaTarget) ], UIAnimaPlayer.prototype, "animaTarget", void 0);
__decorate([ property() ], UIAnimaPlayer.prototype, "playOnload", void 0);
UIAnimaPlayer = __decorate([ ccclass ], UIAnimaPlayer);
return UIAnimaPlayer;
}(cc.Component);
exports.UIAnimaPlayer = UIAnimaPlayer;
cc._RF.pop();
}, {
"../../define/UIAnimaDef": "UIAnimaDef"
} ],
UIAudioEffect: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "b31d03ujX5NlLMAU8z6EFXe", "UIAudioEffect");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("../../../../Script/game/UIHelper"), a = t("../../../define/C2FConst"), c = cc._decorator, l = c.ccclass, u = c.property, h = c.menu, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.audioId = a.C2FConst.UIAudioID.unknown;
e.playOnClick = !0;
e.playOnLoad = !1;
return e;
}
e.prototype.onLoad = function() {
if (this.playOnClick) {
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchtStart, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
} else this.playOnLoad;
};
e.prototype.onDestroy = function() {
if (this.playOnClick) {
this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchtStart, this);
this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
}
};
e.prototype.onTouchtStart = function() {
s.UIHelper.playEffect("betClick");
};
e.prototype.onTouchEnd = function() {};
o([ u({
type: cc.Enum(a.C2FConst.UIAudioID),
tooltip: "音效类型"
}) ], e.prototype, "audioId", void 0);
o([ u({
tooltip: "点击时播放"
}) ], e.prototype, "playOnClick", void 0);
o([ u({
tooltip: "加载完成播放",
visible: function() {
return !this.playOnClick;
}
}) ], e.prototype, "playOnLoad", void 0);
return o([ l, h("c2f/UI/UIAudioEffect") ], e);
}(cc.Component);
i.default = f;
cc._RF.pop();
}, {
"../../../../Script/game/UIHelper": void 0,
"../../../define/C2FConst": "C2FConst"
} ],
UIBase: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "84841fklvZFl7OUZqWAIhZ7", "UIBase");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
}, s = this && this.__spreadArrays || function() {
for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
var r = Array(t), n = 0;
for (e = 0; e < i; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, 
n++) r[n] = o[s];
return r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.UIBase = void 0;
var a = t("../../core/event/EventDispatcher"), c = cc._decorator.ccclass, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "";
e._eventDispatcher = null;
return e;
}
Object.defineProperty(e.prototype, "eventDispatcher", {
get: function() {
if (!this._eventDispatcher) {
this._eventDispatcher = new a.EventDispatcher();
this._eventDispatcher.setGroupName(this.prefabName + "_" + this.node.uuid);
}
return this._eventDispatcher;
},
enumerable: !1,
configurable: !0
});
e.prototype.on = function(t, e, i) {
this.eventDispatcher.on(t, e, i);
};
e.prototype.off = function(t) {
this._eventDispatcher && this._eventDispatcher.off(t);
};
e.prototype.emit = function(t) {
for (var e, i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
(e = this.eventDispatcher).emit.apply(e, s([ t ], i));
};
e.prototype.offAll = function() {
this.eventDispatcher.offAll();
};
e.prototype.onDestroy = function() {
if (this._eventDispatcher) {
this._eventDispatcher.destroy();
this._eventDispatcher = null;
}
};
return o([ c ], e);
}(cc.Component);
i.UIBase = l;
cc._RF.pop();
}, {
"../../core/event/EventDispatcher": "EventDispatcher"
} ],
UIMap: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "f45eddstvxBh6i2cpd//UAw", "UIMap");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.UIMap = void 0;
var r = function() {
this.parent = null;
this.child = [];
}, n = function() {
function t() {
this.nodes = new Map();
}
t.prototype.init = function(t) {
var e = this;
for (var i in t) {
var n = t[i], o = new r();
o.id = parseInt(i);
o.pid = n.parent;
o.name = n.name;
o.panel = n.panel;
this.nodes.set(o.id, o);
}
this.nodes.forEach(function(t) {
t.parent = e.nodes.get(t.pid);
t.parent && t.parent.child.push(t);
});
};
t.prototype.pathFinding = function(t, e) {
var i = this.nodes.get(t), r = this.nodes.get(e), n = this.findUp(i), o = this.findUp(r);
n.forEach(function(t) {
c2f.gui.remove(t.id, !0);
});
o.forEach(function(t) {
c2f.gui.open(t.id);
});
return {
paths_close: n,
paths_open: o
};
};
t.prototype.findUp = function(t) {
for (var e = [], i = t; null != i.parent; ) {
e.push(i);
i = i.parent;
}
return e;
};
t.prototype.release = function() {
this.nodes.clear();
};
return t;
}();
i.UIMap = n;
cc._RF.pop();
}, {} ],
UIModelBase: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "1edd1a3PAZOiaUDsmO71vGT", "UIModelBase");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.UIModelBase = void 0;
var s = t("../../define/C2FEnum"), a = t("./UIBase"), c = cc._decorator, l = c.ccclass, u = (c.property, 
function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onEnable = function() {
t.prototype.onEnable && t.prototype.onEnable.call(this);
this.on(s.C2FEnum.Event.ChangeModelValue, this.onChangeModelValue, this);
};
e.prototype.onDisable = function() {
t.prototype.onDisable && t.prototype.onDisable.call(this);
this.off(s.C2FEnum.Event.ChangeModelValue);
};
e.prototype.onChangeModelValue = function(t, e, i) {
null == i || i(this[e]);
};
return o([ l ], e);
}(a.UIBase));
i.UIModelBase = u;
cc._RF.pop();
}, {
"../../define/C2FEnum": "C2FEnum",
"./UIBase": "UIBase"
} ],
UIPControlBase: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "35539aCL35HA5WWlRWJ3iYB", "UIPControlBase");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.UIPControlBase = void 0;
var s = t("./UIBase"), a = cc._decorator, c = a.ccclass, l = (a.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onDisable = function() {
t.prototype.onDisable && t.prototype.onDisable.call(this);
this.offAll();
};
e.prototype.onDestroy = function() {
this.model = null;
this.view = null;
t.prototype.onDestroy.call(this);
};
return o([ c ], e);
}(s.UIBase));
i.UIPControlBase = l;
cc._RF.pop();
}, {
"./UIBase": "UIBase"
} ],
UIPTouchBase: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ec3658D2pJBY6kxT8KeQlC3", "UIPTouchBase");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.MoveState = void 0;
var s = t("./UIPControlBase");
(function(t) {
t[t.normal = 1] = "normal";
t[t.moveOut = 2] = "moveOut";
t[t.moveIn = 3] = "moveIn";
t[t.disable = 4] = "disable";
})(i.MoveState || (i.MoveState = {}));
var a = cc._decorator, c = a.ccclass, l = (a.property, function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.startHandler = null;
e.moveHandler = null;
e.endHandler = null;
e.cancelHander = null;
e._didDragMove = !1;
return e;
}
Object.defineProperty(e.prototype, "canDrag", {
get: function() {
return this._canDrag;
},
set: function(t) {
this._canDrag = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "canDragIn", {
get: function() {
return this._canDragIn;
},
set: function(t) {
this._canDragIn = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "dragFrom", {
get: function() {
return this._dragFrom || this.node;
},
set: function(t) {
this._dragFrom = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "dragIn", {
get: function() {
return this._dragIn || this.node;
},
set: function(t) {
this._dragIn = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "didDragMove", {
get: function() {
return this._didDragMove;
},
set: function(t) {
this._didDragMove = t;
},
enumerable: !1,
configurable: !0
});
e.prototype.onDestroy = function() {
this.startHandler = null;
this.moveHandler = null;
this.endHandler = null;
this.cancelHander = null;
this.dragFrom = null;
this.dragIn = null;
t.prototype.onDestroy.call(this);
};
e.prototype.onEnable = function() {
t.prototype.onEnable && t.prototype.onEnable.call(this);
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
};
e.prototype.onDisable = function() {
t.prototype.onDisable && t.prototype.onDisable.call(this);
this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
};
e.prototype.checkIsMoveIn = function(t) {
var e = !1;
if (this.canDragIn) {
var i = this.dragIn.getBoundingBox(), r = this.node.parent.convertToNodeSpaceAR(t);
e = i.contains(r);
}
return e;
};
e.prototype.setTouchHandler = function(t, e, i, r) {
this.startHandler = t;
this.moveHandler = e;
this.endHandler = i;
this.cancelHander = r;
};
e.prototype.onTouchStart = function(t) {
if (this.canDrag) {
var e = this.dragFrom.getBoundingBox(), i = t.getLocation(), r = this.node.parent.convertToNodeSpaceAR(i);
if (e.contains(r)) {
this.didDragMove = !1;
this.startHandler && this.startHandler(t, this);
}
}
};
e.prototype.onTouchMove = function(t) {
this.didDragMove = !0;
this.moveHandler && this.moveHandler(t, this);
};
e.prototype.onTouchEnd = function(t) {
this.endHandler && this.endHandler(t, this);
};
e.prototype.onTouchCancel = function(t) {
this.cancelHander && this.cancelHander(t, this);
};
e.prototype.setDragState = function() {};
return o([ c ], e);
}(s.UIPControlBase));
i.default = l;
cc._RF.pop();
}, {
"./UIPControlBase": "UIPControlBase"
} ],
UIPanelBase: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "daf02rzBQ9FaZ+ww5sxDa5D", "UIPanelBase");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.UIPanelBase = void 0;
var s = t("../../define/C2FEnum"), a = t("./UIPrefabBase"), c = cc._decorator, l = c.ccclass, u = (c.property, 
function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onEnable = function() {
t.prototype.onEnable && t.prototype.onEnable.call(this);
this.on(s.C2FEnum.Event.ChangeViewValue, this.onChangeViewValue, this);
};
e.prototype.onDisable = function() {
t.prototype.onDisable && t.prototype.onDisable.call(this);
this.off(s.C2FEnum.Event.ChangeViewValue);
};
e.prototype.onChangeViewValue = function(t, e, i) {
null == i || i(this[e]);
};
return o([ l ], e);
}(a.UIPrefabBase));
i.UIPanelBase = u;
cc._RF.pop();
}, {
"../../define/C2FEnum": "C2FEnum",
"./UIPrefabBase": "UIPrefabBase"
} ],
UIPrefabBase: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "96fc6vEM8NH8bTEerRkvN4j", "UIPrefabBase");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.UIPrefabBase = void 0;
var s = t("./UIBase"), a = cc._decorator.ccclass, c = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mapNode = new Map();
e.mapRedI = new Map();
return e;
}
e.prototype.get = function(t) {
return this.mapNode.get(t);
};
e.prototype.initViewProperty = function() {
if (this.mapNode.size <= 0) {
c2f.utils.view.nodeTreeInfoLite(this.node, this.mapNode);
this.initProperty();
}
};
e.prototype.onLoad = function() {
this.initViewProperty();
this.initDotForUI();
this.autoAddTopSafeAreaComp();
};
e.prototype.onEnable = function() {
t.prototype.onEnable && t.prototype.onEnable.call(this);
this.updateRedDot();
};
e.prototype.initProperty = function() {};
e.prototype.initDotForUI = function() {
if (c2f.dotMgr.root) {
var t = c2f.utils.view.getComponentName(this);
t.endsWith("View") && (t = t.substring(0, t.length - 4));
var e = szg.cfg.getCfgData("redDots");
if (e && e.views && e.views[t]) {
var i = e.views[t];
for (var r in i) {
var n = i[r];
if (!(n <= 0)) {
var o = this.mapNode.get(r);
if (o) {
c2f.dotMgr.setDisplayProxy(n, o, null, null);
this.mapRedI.set(r, n);
} else cc.warn("auto add redDot in [" + t + "], dont find node: [" + r + "]");
}
}
}
}
};
e.prototype.updateRedDot = function() {
this.mapRedI && this.mapRedI.forEach(function(t) {
c2f.dotMgr.refreshRedDotById(t);
});
};
e.prototype.onDestroy = function() {
this.mapNode.clear();
this.mapRedI.clear();
t.prototype.onDestroy.call(this);
};
e.prototype.autoAddTopSafeAreaComp = function() {
if (this.mapNode) {
var t = this.mapNode.get("_top_") || this.mapNode.get("top");
if (t && t.getComponent(cc.Widget)) {
var e = t.getComponent("C2FSafeArea");
e || (e = t.addComponent("C2FSafeArea")).setTopEnable(!0);
}
}
};
return o([ a ], e);
}(s.UIBase);
i.UIPrefabBase = c;
cc._RF.pop();
}, {
"./UIBase": "UIBase"
} ],
UITouchPanel: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ab0bd9feZZLVIYDfpi2v2dI", "UITouchPanel");
var r = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.UITouchPanel = void 0;
var n = t("./UIPTouchBase"), o = cc._decorator, s = o.ccclass, a = (o.property, 
function() {
function t() {
this._moving = null;
this._moveFrom = null;
this._moveTo = null;
this.arrDragObj = [];
}
Object.defineProperty(t.prototype, "createDragObj", {
get: function() {
return this._createDragObj;
},
set: function(t) {
this._createDragObj = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "exchangeDragObj", {
get: function() {
return this._exchangeDragObj;
},
set: function(t) {
this._exchangeDragObj = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "moving", {
get: function() {
return this._moving;
},
set: function(t) {
this._moving = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "moveFrom", {
get: function() {
return this._moveFrom;
},
set: function(t) {
this._moveFrom = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "moveTo", {
get: function() {
return this._moveTo;
},
set: function(t) {
this._moveTo = t;
},
enumerable: !1,
configurable: !0
});
t.prototype.onDestroy = function() {
this.createDragObj = null;
this.exchangeDragObj = null;
this.moving = null;
this.moveFrom = null;
this.moveTo = null;
this.arrDragObj = [];
};
t.prototype.setDragObjList = function(t) {
this.arrDragObj = t;
};
t.prototype.onVCTouchStart = function(t, e) {
this.moving && this.moving.isValid && this.moving.destroy();
e.setDragState(n.MoveState.moveOut);
this.moveFrom = e;
this.createDragObj && this.createDragObj(t, e);
};
t.prototype.onVCTouchMove = function(t) {
if (this.moving) {
var e = t.touch.getDelta();
this.moving.node.x += e.x;
this.moving.node.y += e.y;
for (var i = null, r = t.getLocation(), o = 0, s = this.arrDragObj; o < s.length; o++) {
var a = s[o];
if (a.checkIsMoveIn(r)) {
i = a;
break;
}
}
if (this.moveTo != i && this.moveFrom != i) {
if (this.moveTo) {
this.moveTo.setDragState(n.MoveState.normal);
this.moveTo = null;
}
if (i) {
i.setDragState(n.MoveState.moveIn);
this.moveTo = i;
}
}
}
};
t.prototype.onVCTouchEnd = function(t, e) {
if (this.moving && this.moving.isValid) {
this.exchangeDragObj && this.exchangeDragObj(t, e);
this.moving.node.destroy();
this.moving = null;
if (this.moveFrom) {
this.moveFrom.setDragState(n.MoveState.normal);
this.moveFrom = null;
}
if (this.moveTo) {
this.moveTo.setDragState(n.MoveState.normal);
this.moveTo = null;
}
}
};
return r([ s ], t);
}());
i.UITouchPanel = a;
cc._RF.pop();
}, {
"./UIPTouchBase": "UIPTouchBase"
} ],
UIVControlBase: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "bdee1QtJdNNxoCazpbvRPlN", "UIVControlBase");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.UIVControlBase = void 0;
var s = t("./UIBase"), a = t("../../define/C2FEnum"), c = cc._decorator, l = c.ccclass, u = (c.property, 
function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onEnable = function() {
this.on(a.C2FEnum.Event.PopViewInAnimaCmpl, this.onInAnimaComplete, this);
};
e.prototype.onDisable = function() {
t.prototype.onDisable && t.prototype.onDisable.call(this);
this.offAll();
};
e.prototype.onDestroy = function() {
this.model = null;
this.view = null;
t.prototype.onDestroy.call(this);
};
e.prototype.closeView = function(t) {
void 0 === t && (t = !0);
c2f.gui.removeByNode(this.node);
t && c2f.res.delayReleaseAll();
};
e.prototype.onInAnimaComplete = function() {};
return o([ l ], e);
}(s.UIBase));
i.UIVControlBase = u;
cc._RF.pop();
}, {
"../../define/C2FEnum": "C2FEnum",
"./UIBase": "UIBase"
} ],
UIViewBase: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "4d786jOK99BAooW+pdRnepo", "UIViewBase");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.UIViewBase = void 0;
var s = t("../../define/C2FConst"), a = t("../../define/C2FEnum"), c = t("./UIPrefabBase"), l = cc._decorator, u = l.ccclass, h = (l.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.blackBg = null;
e.nodeUI = null;
e._animaPlaying = !1;
return e;
}
Object.defineProperty(e.prototype, "animaPlaying", {
get: function() {
return this._animaPlaying;
},
set: function(t) {
this._animaPlaying = t;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
this.initCommonUI();
};
e.prototype.onDestroy = function() {
this.blackBg = null;
this.nodeUI = null;
t.prototype.onDestroy.call(this);
};
e.prototype.initProperty = function() {
this.blackBg = cc.find("blackBg", this.node);
this.nodeUI = cc.find("nodeUI", this.node);
};
e.prototype.initCommonUI = function() {
this.blackBg && (this.blackBg.opacity = 0);
this.nodeUI && (this.nodeUI.opacity = 0);
};
e.prototype.playInAnima = function() {
var t = this;
this.animaPlaying = !0;
this.blackBg && cc.tween(this.blackBg).delay(.02).set({
opacity: 127
}).to(.3, {
opacity: s.C2FConst.UIBgOpacity
}).start();
this.nodeUI && cc.tween(this.nodeUI).delay(.02).call(function() {
t.nodeUI.opacity = 0;
t.nodeUI.setPosition(0, -50, 0);
}).by(.15, {
position: cc.v3(0, 60, 0),
opacity: 125
}).by(.15, {
position: cc.v3(0, -10, 0),
opacity: 130
}).call(function() {
t.emit(a.C2FEnum.Event.PopViewInAnimaCmpl);
}).start();
this.blackBg || this.nodeUI ? this.scheduleOnce(function() {
t.animaPlaying = !1;
}, .32) : this.animaPlaying = !1;
};
e.prototype.playOutAnima = function(t, e) {
var i = this;
this.animaPlaying = !0;
this.nodeUI && cc.tween(this.nodeUI).by(.2, {
position: cc.v3(0, -100, 0),
opacity: -255
}).start();
this.blackBg && cc.tween(this.blackBg).to(.2, {
opacity: 0
}).start();
var r = function() {
i.animaPlaying = !1;
e && e();
};
this.nodeUI || this.blackBg ? this.scheduleOnce(r, .2) : r && r();
};
e.prototype.onEnable = function() {
t.prototype.onEnable && t.prototype.onEnable.call(this);
this.on(a.C2FEnum.Event.ChangeViewValue, this.onChangeViewValue, this);
};
e.prototype.onDisable = function() {
t.prototype.onDisable && t.prototype.onDisable.call(this);
this.off(a.C2FEnum.Event.ChangeViewValue);
};
e.prototype.onChangeViewValue = function(t, e, i) {
null == i || i(this[e]);
};
return o([ u ], e);
}(c.UIPrefabBase));
i.UIViewBase = h;
cc._RF.pop();
}, {
"../../define/C2FConst": "C2FConst",
"../../define/C2FEnum": "C2FEnum",
"./UIPrefabBase": "UIPrefabBase"
} ],
VLItemGroup: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "d49bcuW6ZRCIJpbkISRZBYr", "VLItemGroup");
var r, n = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.VLItemGroup = i.GroupSource = void 0;
(function(t) {
t[t.NODE = 0] = "NODE";
t[t.PREFAB = 1] = "PREFAB";
t[t.MAIN_ITEM_CHILD = 2] = "MAIN_ITEM_CHILD";
})(r = i.GroupSource || (i.GroupSource = {}));
var o = cc._decorator, s = o.ccclass, a = o.property, c = o.executeInEditMode, l = function() {
function t() {
this.content = null;
this.templateType = r.PREFAB;
this.templatePrefab = null;
this.templateNode = null;
this.templateChild = -1;
}
n([ a({
type: cc.Node,
tooltip: !1
}) ], t.prototype, "content", void 0);
n([ a({
type: cc.Enum(r),
tooltip: !1
}) ], t.prototype, "templateType", void 0);
n([ a({
type: cc.Prefab,
tooltip: !1,
visible: function() {
return this.templateType === r.PREFAB;
}
}) ], t.prototype, "templatePrefab", void 0);
n([ a({
type: cc.Node,
tooltip: !1,
visible: function() {
return this.templateType === r.NODE;
}
}) ], t.prototype, "templateNode", void 0);
n([ a({
type: cc.Enum({}),
tooltip: !1,
visible: function() {
return this.templateType === r.MAIN_ITEM_CHILD;
}
}) ], t.prototype, "templateChild", void 0);
return n([ s("VLItemGroup"), c ], t);
}();
i.VLItemGroup = l;
cc._RF.pop();
}, {} ],
VLTemplate: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "6a35diyasFG7pxO1gEJqWs4", "VLTemplate");
var r, n = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.VLTemplate = i.TemplateType = void 0;
(function(t) {
t[t.NODE = 0] = "NODE";
t[t.PREFAB = 1] = "PREFAB";
})(r = i.TemplateType || (i.TemplateType = {}));
var o = cc._decorator, s = o.ccclass, a = o.property, c = o.executeInEditMode, l = function() {
function t() {
this.content = null;
this._templateType = r.PREFAB;
this._templatePrefab = null;
this._templateNode = null;
this.editorCall = null;
}
Object.defineProperty(t.prototype, "templateType", {
get: function() {
return this._templateType;
},
set: function(t) {
if (this._templateType !== t) {
this._templateType = t;
this.resetMainItemChild(!0);
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "templatePrefab", {
get: function() {
return this._templatePrefab;
},
set: function(t) {
if (this._templatePrefab !== t) {
this._templatePrefab = t;
this.resetMainItemChild(!0);
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "templateNode", {
get: function() {
return this._templateNode;
},
set: function(t) {
if (this._templateNode !== t) {
this._templateNode = t;
this.resetMainItemChild(!0);
}
},
enumerable: !1,
configurable: !0
});
t.prototype.resetMainItemChild = function(t) {
void 0 === t && (t = !1);
};
n([ a({
type: cc.Node,
tooltip: !1,
visible: function() {
return !1;
}
}) ], t.prototype, "content", void 0);
n([ a({
type: cc.Enum(r)
}) ], t.prototype, "_templateType", void 0);
n([ a({
type: cc.Enum(r),
tooltip: !1
}) ], t.prototype, "templateType", null);
n([ a(cc.Prefab) ], t.prototype, "_templatePrefab", void 0);
n([ a({
type: cc.Prefab,
tooltip: !1,
visible: function() {
return this.templateType === r.PREFAB;
}
}) ], t.prototype, "templatePrefab", null);
n([ a(cc.Node) ], t.prototype, "_templateNode", void 0);
n([ a({
type: cc.Node,
tooltip: !1,
visible: function() {
return this.templateType === r.NODE;
}
}) ], t.prototype, "templateNode", null);
return n([ s("VLTemplate"), c ], t);
}();
i.VLTemplate = l;
cc._RF.pop();
}, {} ],
VMBase: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "28d15CETUlJ95Z1bJoOFz6p", "VMBase");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("./ViewModel"), a = cc._decorator, c = a.ccclass, l = (a.property, function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.watchPath = "";
e.watchPathArr = [];
e.templateMode = !1;
e.templateValueArr = [];
e.VM = s.VM;
return e;
}
e.prototype.onLoad = function() {
for (var t = this, e = this.watchPath.split("."), i = 1; i < e.length; i++) if ("*" == e[i]) {
(s = this.node.getParent().children.findIndex(function(e) {
return e === t.node;
})) <= 0 && (s = 0);
e[i] = s.toString();
break;
}
this.watchPath = e.join(".");
var r = this.watchPathArr;
if (r.length >= 1) for (i = 0; i < r.length; i++) {
for (var n = r[i].split("."), o = 1; o < n.length; o++) if ("*" == n[o]) {
var s;
(s = this.node.getParent().children.findIndex(function(e) {
return e === t.node;
})) <= 0 && (s = 0);
n[o] = s.toString();
break;
}
this.watchPathArr[i] = n.join(".");
}
"" == this.watchPath && "" == this.watchPathArr.join("") && cc.log("可能未设置路径的节点:", this.node.getParent().name + "." + this.node.name);
};
e.prototype.onEnable = function() {
this.templateMode ? this.setMultPathEvent(!0) : "" != this.watchPath && this.VM.bindPath(this.watchPath, this.onValueChanged, this);
this.onValueInit();
};
e.prototype.onDisable = function() {
this.templateMode ? this.setMultPathEvent(!1) : "" != this.watchPath && this.VM.unbindPath(this.watchPath, this.onValueChanged, this);
};
e.prototype.setMultPathEvent = function(t) {
void 0 === t && (t = !0);
for (var e = this.watchPathArr, i = 0; i < e.length; i++) {
var r = e[i];
t ? this.VM.bindPath(r, this.onValueChanged, this) : this.VM.unbindPath(r, this.onValueChanged, this);
}
};
e.prototype.onValueInit = function() {};
e.prototype.onValueChanged = function() {};
return o([ c ], e);
}(cc.Component));
i.default = l;
cc._RF.pop();
}, {
"./ViewModel": "ViewModel"
} ],
VMCompsEdit: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "4854cIRC55OUK/fzePWPRcj", "VMCompsEdit");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s, a = cc._decorator, c = a.ccclass, l = a.property, u = a.executeInEditMode, h = a.menu;
(function(t) {
t[t.SEARCH_COMPONENT = 0] = "SEARCH_COMPONENT";
t[t.ENABLE_COMPONENT = 1] = "ENABLE_COMPONENT";
t[t.REPLACE_WATCH_PATH = 2] = "REPLACE_WATCH_PATH";
t[t.DELETE_COMPONENT = 3] = "DELETE_COMPONENT";
})(s || (s = {}));
var f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.findList = [ "VMBase", "VMParent" ];
e.actionType = s.SEARCH_COMPONENT;
e.allowDelete = !1;
e.targetPath = "game";
e.replacePath = "*";
e.canCollectNodes = !1;
e.collectNodes = [];
return e;
}
Object.defineProperty(e.prototype, "findTrigger", {
get: function() {
return !1;
},
set: function() {
this.setComponents(0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "enableTrigger", {
get: function() {
return !1;
},
set: function() {
this.setComponents(1);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "disableTrigger", {
get: function() {
return !1;
},
set: function() {
this.setComponents(2);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "deleteTrigger", {
get: function() {
return !1;
},
set: function() {
this.setComponents(3);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "replaceTrigger", {
get: function() {
return !1;
},
set: function() {
this.setComponents(4);
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
var t = this.getNodePath(this.node);
console.error("you forget delete MVEditFinder,[path]", t);
};
e.prototype.setComponents = function(t) {
var e = this, i = this.findList, r = "搜索到当前节点下面的组件";
switch (t) {
case 0:
r = "搜索到当前节点下面的组件";
break;

case 1:
r = "激活以下节点的组件";
break;

case 2:
r = "关闭以下节点的组件";
break;

case 3:
r = "删除以下节点的组件";
break;

case 4:
r = "替换以下节点的路径";
}
cc.log(r);
cc.log("______________________");
i.forEach(function(i) {
e.searchComponent(i, t);
});
cc.log("______________________");
};
e.prototype.searchComponent = function(t, e) {
var i = this;
void 0 === e && (e = 0);
this.collectNodes = [];
var r = this.node.getComponentsInChildren(t);
if (!(null == r || r.length < 1)) {
cc.log("[" + t + "]:");
r.forEach(function(t) {
var r = "";
e <= 3 && (r = !0 === t.templateMode ? t.watchPathArr ? ":[Path:" + t.watchPathArr.join("|") + "]" : "" : t.watchPath ? ":[Path:" + t.watchPath + "]" : "");
cc.log(i.getNodePath(t.node) + r);
switch (e) {
case 0:
i.canCollectNodes && -1 === i.collectNodes.indexOf(t.node) && i.collectNodes.push(t.node);
break;

case 1:
t.enabled = !0;
break;

case 2:
t.enabled = !1;
break;

case 3:
t.node.removeComponent(t);
break;

case 4:
var n = i.targetPath, o = i.replacePath;
if (!0 === t.templateMode) for (var s = 0; s < t.watchPathArr.length; s++) {
var a = t.watchPathArr[s];
t.watchPathArr[s] = i.replaceNodePath(a, n, o);
} else t.watchPath = i.replaceNodePath(t.watchPath, n, o);
}
});
}
};
e.prototype.replaceNodePath = function(t, e, i) {
for (var r = t.split("."), n = e.split("."), o = i.split("."), s = !0, a = 0; a < n.length; a++) if (r[a] !== n[a]) {
s = !1;
break;
}
if (!0 === s) {
for (a = 0; a < o.length; a++) r[a] = o[a];
cc.log(" 路径更新:", t, ">>>", r.join("."));
}
return r.join(".");
};
e.prototype.getNodePath = function(t) {
for (var e = t, i = []; e; ) {
var r = e.getParent();
if (!r) break;
i.push(e.name);
e = r;
}
return i.reverse().join("/");
};
o([ l({
type: [ cc.String ]
}) ], e.prototype, "findList", void 0);
o([ l({
type: cc.Enum(s)
}) ], e.prototype, "actionType", void 0);
o([ l({
tooltip: "勾选后,会自动查找 find list 中填写的组件",
visible: function() {
return this.actionType === s.SEARCH_COMPONENT;
}
}) ], e.prototype, "findTrigger", null);
o([ l({
tooltip: "勾选后,会批量激活 find list 中填写的组件",
visible: function() {
return this.actionType === s.ENABLE_COMPONENT;
}
}) ], e.prototype, "enableTrigger", null);
o([ l({
tooltip: "勾选后,会批量关闭 find list 中填写的组件",
visible: function() {
return this.actionType === s.ENABLE_COMPONENT;
}
}) ], e.prototype, "disableTrigger", null);
o([ l({
tooltip: "允许删除节点的组件,确定需要移除请勾选,防止误操作",
visible: function() {
return this.actionType === s.DELETE_COMPONENT;
}
}) ], e.prototype, "allowDelete", void 0);
o([ l({
tooltip: "勾选后,会批量删除 find list 中填写的组件",
displayName: "[ X DELETE X ]",
visible: function() {
return this.allowDelete && this.actionType === s.DELETE_COMPONENT;
}
}) ], e.prototype, "deleteTrigger", null);
o([ l({
tooltip: "勾选后,会批量替换掉指定的路径",
visible: function() {
return this.actionType === s.REPLACE_WATCH_PATH;
}
}) ], e.prototype, "replaceTrigger", null);
o([ l({
tooltip: "匹配的路径,匹配规则: 搜索开头为 game的路径",
visible: function() {
return this.actionType === s.REPLACE_WATCH_PATH;
}
}) ], e.prototype, "targetPath", void 0);
o([ l({
tooltip: "替换的路径,将匹配到的路径替换",
visible: function() {
return this.actionType === s.REPLACE_WATCH_PATH;
}
}) ], e.prototype, "replacePath", void 0);
o([ l({
tooltip: "是否搜集绑定VM组件的节点?",
visible: function() {
return this.actionType === s.SEARCH_COMPONENT;
}
}) ], e.prototype, "canCollectNodes", void 0);
o([ l({
type: [ cc.Node ],
readonly: !0,
tooltip: "收集到绑定了VM组件相关的节点，可以自己跳转过去",
visible: function() {
return this.canCollectNodes && this.actionType === s.SEARCH_COMPONENT;
}
}) ], e.prototype, "collectNodes", void 0);
return o([ c, u, h("ModelViewer/Edit-Comps (快速组件操作)") ], e);
}(cc.Component);
i.default = f;
cc._RF.pop();
}, {} ],
VMCustom: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "c50f4kW3R1CZrIudVwBfx64", "VMCustom");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("./VMBase"), a = cc._decorator, c = a.ccclass, l = a.property, u = a.executeInEditMode, h = a.menu, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.controller = !1;
e.watchPath = "";
e.componentName = "";
e.componentProperty = "";
e.refreshRate = .1;
e._timer = 0;
e._watchComponent = null;
e._canWatchComponent = !1;
e._oldValue = null;
return e;
}
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
this.checkEditorComponent();
this._watchComponent = this.node.getComponent(this.componentName);
this.checkComponentState();
};
e.prototype.onRestore = function() {
this.checkEditorComponent();
};
e.prototype.start = function() {
this.onValueInit();
};
e.prototype.checkEditorComponent = function() {};
e.prototype.checkComponentState = function() {
this._canWatchComponent = !1;
this._watchComponent ? this.componentProperty ? this.componentProperty in this._watchComponent != 0 ? this._canWatchComponent = !0 : console.error("需要监听的组件的属性不存在") : console.error("未设置需要监听的组件 的属性") : console.error("未设置需要监听的组件");
};
e.prototype.getComponentValue = function() {
return this._watchComponent[this.componentProperty];
};
e.prototype.setComponentValue = function(t) {
if ("cc.Toggle" == this.componentName) {
1 == t && this.node.getComponent(cc.Toggle).check();
0 == t && this.node.getComponent(cc.Toggle).uncheck();
} else this._watchComponent[this.componentProperty] = t;
};
e.prototype.onValueInit = function() {
this.setComponentValue(this.VM.getValue(this.watchPath));
};
e.prototype.onValueController = function(t) {
this.VM.setValue(this.watchPath, t);
};
e.prototype.onValueChanged = function(t) {
this.setComponentValue(t);
};
e.prototype.update = function(t) {
if (this.controller && this._canWatchComponent && !1 !== this._watchComponent.enabled) {
this._timer += t;
if (!(this._timer < this.refreshRate)) {
this._timer = 0;
var e = this._oldValue, i = this.getComponentValue();
if (this._oldValue !== i) {
this._oldValue = this.getComponentValue();
this.onValueController(i, e);
}
}
}
};
o([ l({
tooltip: "激活controller,以开启双向绑定，否则只能接收消息"
}) ], e.prototype, "controller", void 0);
o([ l ], e.prototype, "watchPath", void 0);
o([ l({
tooltip: "绑定组件的名字"
}) ], e.prototype, "componentName", void 0);
o([ l({
tooltip: "组件上需要监听的属性"
}) ], e.prototype, "componentProperty", void 0);
o([ l({
tooltip: "刷新间隔频率(只影响脏检查的频率)",
step: .01,
range: [ 0, 1 ],
visible: function() {
return !0 === this.controller;
}
}) ], e.prototype, "refreshRate", void 0);
return o([ c, u, h("ModelViewer/VM-Custom (自定义VM)") ], e);
}(s.default);
i.default = f;
cc._RF.pop();
}, {
"./VMBase": "VMBase"
} ],
VMEvent: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "3d5bf2Zb3BPJop/BFvnO8bd", "VMEvent");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s, a = t("./VMBase"), c = cc._decorator, l = c.ccclass, u = c.property, h = c.executeInEditMode, f = c.menu;
(function(t) {
t[t.none = 0] = "none";
t[t["=="] = 1] = "==";
t[t["!="] = 2] = "!=";
t[t[">"] = 3] = ">";
t[t[">="] = 4] = ">=";
t[t["<"] = 5] = "<";
t[t["<="] = 6] = "<=";
})(s || (s = {}));
var p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.templateMode = !1;
e.watchPath = "";
e.triggerOnce = !1;
e.watchPathArr = [];
e.filterMode = s.none;
e.compareValue = "";
e.changeEvents = [];
return e;
}
e.prototype.onValueInit = function() {};
e.prototype.onValueChanged = function(t, e, i) {
if (this.conditionCheck(t, this.compareValue)) {
Array.isArray(this.changeEvents) && this.changeEvents.forEach(function(r) {
r.emit([ t, e, i ]);
});
!0 === this.triggerOnce && (this.enabled = !1);
}
};
e.prototype.conditionCheck = function(t, e) {
var i = s;
switch (this.filterMode) {
case i.none:
return !0;

case i["=="]:
if (t == e) return !0;
break;

case i["!="]:
if (t != e) return !0;
break;

case i["<"]:
if (t < e) return !0;
break;

case i[">"]:
if (t > e) return !0;
break;

case i[">="]:
if (t >= e) return !0;
break;

case i["<"]:
if (t < e) return !0;
break;

case i["<="]:
if (t <= e) return !0;
}
return !1;
};
o([ u({
tooltip: "使用模板模式，可以使用多路径监听"
}) ], e.prototype, "templateMode", void 0);
o([ u({
tooltip: "监听获取值的路径",
visible: function() {
return !1 === this.templateMode;
}
}) ], e.prototype, "watchPath", void 0);
o([ u({
tooltip: "触发一次后会自动关闭该事件"
}) ], e.prototype, "triggerOnce", void 0);
o([ u({
tooltip: "监听获取值的多条路径,这些值的改变都会通过这个函数回调,请使用 pathArr 区分获取的值 ",
type: [ cc.String ],
visible: function() {
return !0 === this.templateMode;
}
}) ], e.prototype, "watchPathArr", void 0);
o([ u({
tooltip: "过滤模式，会根据条件过滤掉时间的触发",
type: cc.Enum(s)
}) ], e.prototype, "filterMode", void 0);
o([ u({
visible: function() {
return this.filterMode !== s.none;
}
}) ], e.prototype, "compareValue", void 0);
o([ u([ cc.Component.EventHandler ]) ], e.prototype, "changeEvents", void 0);
return o([ l, h, f("ModelViewer/VM-EventCall(调用函数)") ], e);
}(a.default);
i.default = p;
cc._RF.pop();
}, {
"./VMBase": "VMBase"
} ],
VMLabel: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "791aaK6ZmpL0ouASsD+PHqD", "VMLabel");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("./VMBase"), a = t("./StringFormat"), c = cc._decorator, l = c.ccclass, u = c.property, h = c.menu, f = c.executeInEditMode, p = {
CC_LABEL: "cc.Label",
CC_RICH_TEXT: "cc.RichText",
CC_EDIT_BOX: "cc.EditBox"
}, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.watchPath = "";
e.labelType = p.CC_LABEL;
e.templateMode = !1;
e.watchPathArr = [];
e.templateValueArr = [];
e.templateFormatArr = [];
e.originText = null;
return e;
}
e.prototype.onRestore = function() {
this.checkLabel();
};
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
this.checkLabel();
if (this.templateMode) {
this.originText = this.getLabelValue();
this.parseTemplate();
}
this.onValueInit();
};
e.prototype.parseTemplate = function() {
var t = /\{\{(.+?)\}\}/, e = this.originText.match(/\{\{(.+?)\}\}/g);
if (null != e) for (var i = 0; i < e.length; i++) {
var r = e[i].match(t)[1].split(":")[1] || "";
this.templateFormatArr[i] = r;
}
};
e.prototype.getReplaceText = function() {
var t = /\{\{(.+?)\}\}/, e = this.originText.match(/\{\{(.+?)\}\}/g);
if (null == e) return "";
for (var i = this.originText, r = 0; r < e.length; r++) {
var n, o = e[r], s = o.match(t), a = parseInt(s[1] || "0") || 0, c = this.templateFormatArr[r];
n = this.templateValueArr[a];
i = i.replace(o, this.getValueFromFormat(n, c));
}
return i;
};
e.prototype.getValueFromFormat = function(t, e) {
return a.StringFormatFunction.deal(t, e);
};
e.prototype.onValueInit = function() {
if (!1 === this.templateMode) this.setLabelValue(this.VM.getValue(this.watchPath)); else {
for (var t = this.watchPathArr.length, e = 0; e < t; e++) this.templateValueArr[e] = this.VM.getValue(this.watchPathArr[e], "?");
this.setLabelValue(this.getReplaceText());
}
};
e.prototype.onValueChanged = function(t, e, i) {
if (!1 === this.templateMode) this.setLabelValue(t); else {
var r = i.join("."), n = this.watchPathArr.findIndex(function(t) {
return t === r;
});
if (n >= 0) {
this.templateValueArr[n] = t;
this.setLabelValue(this.getReplaceText());
}
}
};
e.prototype.setLabelValue = function(t) {
this.getComponent(this.labelType).string = t + "";
};
e.prototype.getLabelValue = function() {
return this.getComponent(this.labelType).string;
};
e.prototype.checkLabel = function() {
for (var t = [ "cc.Label", "cc.RichText", "cc.EditBox" ], e = 0; e < t.length; e++) {
var i = t[e];
if (this.node.getComponent(i)) {
this.labelType = i;
return !0;
}
}
cc.error("没有挂载任何label组件");
return !1;
};
o([ u({
visible: function() {
return !1 === this.templateMode;
}
}) ], e.prototype, "watchPath", void 0);
o([ u({
readonly: !0
}) ], e.prototype, "labelType", void 0);
o([ u({
tooltip: "是否启用模板代码,只能在运行时之前设置,\n将会动态解析模板语法 {{0}},并且自动设置监听的路径"
}) ], e.prototype, "templateMode", void 0);
o([ u({
type: [ cc.String ],
visible: function() {
return !0 === this.templateMode;
}
}) ], e.prototype, "watchPathArr", void 0);
return o([ l, f, h("ModelViewer/VM-Label(文本VM)") ], e);
}(s.default);
i.default = d;
cc._RF.pop();
}, {
"./StringFormat": "StringFormat",
"./VMBase": "VMBase"
} ],
VMModify: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "beaf8+GIi1EK6UK3uqNhP/P", "VMModify");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s, a = t("./VMBase"), c = cc._decorator, l = c.ccclass, u = c.property, h = c.menu;
(function(t) {
t[t.MIN = 0] = "MIN";
t[t.MAX = 1] = "MAX";
t[t.MIN_MAX = 2] = "MIN_MAX";
})(s || (s = {}));
var f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.watchPath = "";
e.valueClamp = !1;
e.valueClampMode = s.MIN_MAX;
e.valueMin = 0;
e.valueMax = 1;
return e;
}
e.prototype.start = function() {};
e.prototype.clampValue = function(t) {
var e = this.valueMin, i = this.valueMax;
if (0 == this.valueClamp) return t;
switch (this.valueClampMode) {
case s.MIN_MAX:
t > i && (t = i);
t < e && (t = e);
break;

case s.MIN:
t < e && (t = e);
break;

case s.MAX:
t > i && (t = i);
}
return t;
};
e.prototype.vAddInt = function(t, e) {
this.vAdd(t, e, !0);
};
e.prototype.vSubInt = function(t, e) {
this.vSub(t, e, !0);
};
e.prototype.vMulInt = function(t, e) {
this.vMul(t, e, !0);
};
e.prototype.vDivInt = function(t, e) {
this.vDiv(t, e, !0);
};
e.prototype.vAdd = function(t, e, i) {
void 0 === i && (i = !1);
var r = parseFloat(e), n = this.VM.getValue(this.watchPath, 0) + r;
i && (n = Math.round(n));
this.VM.setValue(this.watchPath, this.clampValue(n));
};
e.prototype.vSub = function(t, e, i) {
void 0 === i && (i = !1);
var r = parseFloat(e), n = this.VM.getValue(this.watchPath, 0) - r;
i && (n = Math.round(n));
this.VM.setValue(this.watchPath, this.clampValue(n));
};
e.prototype.vMul = function(t, e, i) {
void 0 === i && (i = !1);
var r = parseFloat(e), n = this.VM.getValue(this.watchPath, 0) * r;
i && (n = Math.round(n));
this.VM.setValue(this.watchPath, this.clampValue(n));
};
e.prototype.vDiv = function(t, e, i) {
void 0 === i && (i = !1);
var r = parseFloat(e), n = this.VM.getValue(this.watchPath, 0) / r;
i && (n = Math.round(n));
this.VM.setValue(this.watchPath, this.clampValue(n));
};
e.prototype.vString = function(t, e) {
var i = e;
this.VM.setValue(this.watchPath, i);
};
e.prototype.vNumberInt = function(t, e) {
this.vNumber(t, e, !0);
};
e.prototype.vNumber = function(t, e, i) {
void 0 === i && (i = !1);
var r = parseFloat(e);
i && (r = Math.round(r));
this.VM.setValue(this.watchPath, this.clampValue(r));
};
o([ u ], e.prototype, "watchPath", void 0);
o([ u() ], e.prototype, "valueClamp", void 0);
o([ u({
type: cc.Enum(s),
visible: function() {
return !0 === this.valueClamp;
}
}) ], e.prototype, "valueClampMode", void 0);
o([ u({
visible: function() {
return !0 === this.valueClamp && this.valueClampMode !== s.MAX;
}
}) ], e.prototype, "valueMin", void 0);
o([ u({
visible: function() {
return !0 === this.valueClamp && this.valueClampMode !== s.MIN;
}
}) ], e.prototype, "valueMax", void 0);
return o([ l, h("ModelViewer/VM-Modify(修改Model)") ], e);
}(a.default);
i.default = f;
cc._RF.pop();
}, {
"./VMBase": "VMBase"
} ],
VMParent: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "52812buJBFGALNvK3OEiaXe", "VMParent");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("./ViewModel"), a = cc._decorator, c = a.ccclass, l = (a.property, function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.tag = "_temp";
e.data = {};
e.VM = s.VM;
return e;
}
e.prototype.onLoad = function() {
if (null != this.data) {
this.tag = "_temp<" + this.node.uuid.replace(".", "") + ">";
s.VM.add(this.data, this.tag);
for (var t = this.getVMComponents(), e = 0; e < t.length; e++) {
var i = t[e];
this.replaceVMPath(i, this.tag);
}
this.onBind();
}
};
e.prototype.onBind = function() {};
e.prototype.onUnBind = function() {};
e.prototype.replaceVMPath = function(t, e) {
var i = t.watchPath;
if (1 == t.templateMode) {
var r = t.watchPathArr;
if (r) for (var n = 0; n < r.length; n++) {
var o = r[n];
r[n] = o.replace("*", e);
}
} else "*" === i.split(".")[0] && (t.watchPath = i.replace("*", e));
};
e.prototype.getVMComponents = function() {
var t = this, e = this.node.getComponentsInChildren("VMBase"), i = this.node.getComponentsInChildren("VMParent").filter(function(e) {
return e.uuid !== t.uuid;
}), r = [];
i.forEach(function(t) {
r = r.concat(t.getComponentsInChildren("VMBase"));
});
return e.filter(function(t) {
return r.indexOf(t) < 0;
});
};
e.prototype.onDestroy = function() {
this.onUnBind();
s.VM.remove(this.tag);
this.data = null;
};
return o([ c ], e);
}(cc.Component));
i.default = l;
cc._RF.pop();
}, {
"./ViewModel": "ViewModel"
} ],
VMProgress: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ab650+CJoNLX7YaBUFhZTrn", "VMProgress");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("./VMCustom"), a = t("./StringFormat"), c = cc._decorator, l = c.ccclass, u = c.property, h = c.menu, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.watchPath = "";
e.watchPathArr = [ "[min]", "[max]" ];
e.templateMode = !0;
e.stringFormat = "";
return e;
}
e.prototype.onLoad = function() {
(this.watchPathArr.length < 2 || "[min]" == this.watchPathArr[0] || "[max]" == this.watchPathArr[1]) && console.error("VMProgress must have two values!");
t.prototype.onLoad.call(this);
};
e.prototype.start = function() {
this.onValueInit();
};
e.prototype.onValueInit = function() {
for (var t = this.watchPathArr.length, e = 0; e < t; e++) this.templateValueArr[e] = this.VM.getValue(this.watchPathArr[e]);
var i = this.templateValueArr[0] / this.templateValueArr[1];
this.setComponentValue(i);
};
e.prototype.setComponentValue = function(e) {
if ("" !== this.stringFormat) {
var i = a.StringFormatFunction.deal(e, this.stringFormat);
t.prototype.setComponentValue.call(this, i);
} else t.prototype.setComponentValue.call(this, e);
};
e.prototype.onValueController = function(t) {
var e = Math.round(t * this.templateValueArr[1]);
Number.isNaN(e) && (e = 0);
this.VM.setValue(this.watchPathArr[0], e);
};
e.prototype.onValueChanged = function(t, e, i) {
if (!1 !== this.templateMode) {
var r = i.join("."), n = this.watchPathArr.findIndex(function(t) {
return t === r;
});
n >= 0 && (this.templateValueArr[n] = t);
var o = this.templateValueArr[0] / this.templateValueArr[1];
o > 1 && (o = 1);
(o < 0 || Number.isNaN(o)) && (o = 0);
this.setComponentValue(o);
}
};
o([ u({
visible: !1,
override: !0
}) ], e.prototype, "watchPath", void 0);
o([ u({
type: [ cc.String ],
tooltip: "第一个值是min 值，第二个值 是 max 值，会计算出两者的比例"
}) ], e.prototype, "watchPathArr", void 0);
o([ u({
visible: function() {
return "string" === this.componentProperty;
},
tooltip: "字符串格式化，和 VMLabel 的字段一样，需要填入对应的格式化字符串"
}) ], e.prototype, "stringFormat", void 0);
return o([ l, h("ModelViewer/VM-Progress (VM-进度条)") ], e);
}(s.default);
i.default = f;
cc._RF.pop();
}, {
"./StringFormat": "StringFormat",
"./VMCustom": "VMCustom"
} ],
VMState: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "e477adAZEJBzadV/Qyt79yt", "VMState");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s, a, c, l = t("./ViewModel"), u = t("./VMBase"), h = cc._decorator, f = h.ccclass, p = h.property, d = h.menu;
(function(t) {
t[t["=="] = 0] = "==";
t[t["!="] = 1] = "!=";
t[t[">"] = 2] = ">";
t[t[">="] = 3] = ">=";
t[t["<"] = 4] = "<";
t[t["<="] = 5] = "<=";
t[t.range = 6] = "range";
})(s || (s = {}));
(function(t) {
t[t.NODE_ACTIVE = 0] = "NODE_ACTIVE";
t[t.NODE_VISIBLE = 1] = "NODE_VISIBLE";
t[t.NODE_OPACITY = 2] = "NODE_OPACITY";
t[t.NODE_COLOR = 3] = "NODE_COLOR";
t[t.COMPONENT_CUSTOM = 4] = "COMPONENT_CUSTOM";
})(a || (a = {}));
(function(t) {
t[t.NODE_INDEX = 0] = "NODE_INDEX";
t[t.NODE_NAME = 1] = "NODE_NAME";
})(c || (c = {}));
var y = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.watchPath = "";
e.foreachChildMode = !1;
e.condition = s["=="];
e.foreachChildType = c.NODE_INDEX;
e.valueA = 0;
e.valueB = 0;
e.valueAction = a.NODE_ACTIVE;
e.valueActionOpacity = 0;
e.valueActionColor = cc.color(155, 155, 155);
e.valueComponentName = "";
e.valueComponentProperty = "";
e.valueComponentDefaultValue = "";
e.valueComponentActionValue = "";
e.watchNodes = [];
return e;
}
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
if (0 == this.watchNodes.length) {
this.valueAction !== a.NODE_ACTIVE && !1 === this.foreachChildMode && this.watchNodes.push(this.node);
this.watchNodes = this.watchNodes.concat(this.node.children);
}
this.enabled && this.onValueInit();
};
e.prototype.start = function() {};
e.prototype.onValueInit = function() {
var t = l.VM.getValue(this.watchPath);
this.checkNodeFromValue(t);
};
e.prototype.onValueChanged = function(t) {
this.checkNodeFromValue(t);
};
e.prototype.checkNodeFromValue = function(t) {
var e = this;
if (this.foreachChildMode) this.watchNodes.forEach(function(i, r) {
var n = e.foreachChildType === c.NODE_INDEX ? r : i.name, o = e.conditionCheck(t, n);
e.setNodeState(i, o);
}); else {
var i = this.conditionCheck(t, this.valueA, this.valueB);
this.setNodesStates(i);
}
};
e.prototype.setNodesStates = function(t) {
var e = this, i = this.watchNodes, r = t;
i.forEach(function(t) {
e.setNodeState(t, r);
});
};
e.prototype.setNodeState = function(t, e) {
var i = this.valueAction, r = e, n = a;
switch (i) {
case n.NODE_ACTIVE:
t.active = !!r;
break;

case n.NODE_VISIBLE:
t.opacity = r ? 255 : 0;
break;

case n.NODE_COLOR:
t.color = r ? this.valueActionColor : cc.color(255, 255, 255);
break;

case n.NODE_OPACITY:
t.opacity = r ? this.valueActionOpacity : 255;
break;

case n.COMPONENT_CUSTOM:
var o = t.getComponent(this.valueComponentName);
if (null == o) return;
this.valueComponentProperty in o && (o[this.valueComponentProperty] = r ? this.valueComponentActionValue : this.valueComponentDefaultValue);
}
};
e.prototype.conditionCheck = function(t, e, i) {
var r = s;
switch (this.condition) {
case r["=="]:
if (t == e) return !0;
break;

case r["!="]:
if (t != e) return !0;
break;

case r["<"]:
if (t < e) return !0;
break;

case r[">"]:
if (t > e) return !0;
break;

case r[">="]:
if (t >= e) return !0;
break;

case r["<"]:
if (t < e) return !0;
break;

case r["<="]:
if (t <= e) return !0;
break;

case r.range:
if (t >= e && t <= i) return !0;
}
return !1;
};
o([ p ], e.prototype, "watchPath", void 0);
o([ p({
tooltip: "遍历子节点,根据子节点的名字或名字转换为值，判断值满足条件 来激活"
}) ], e.prototype, "foreachChildMode", void 0);
o([ p({
type: cc.Enum(s)
}) ], e.prototype, "condition", void 0);
o([ p({
type: cc.Enum(c),
tooltip: "遍历子节点,根据子节点的名字转换为值，判断值满足条件 来激活",
visible: function() {
return !0 === this.foreachChildMode;
}
}) ], e.prototype, "foreachChildType", void 0);
o([ p({
displayName: "Value: a",
visible: function() {
return !1 === this.foreachChildMode;
}
}) ], e.prototype, "valueA", void 0);
o([ p({
displayName: "Value: b",
visible: function() {
return !1 === this.foreachChildMode && this.condition === s.range;
}
}) ], e.prototype, "valueB", void 0);
o([ p({
type: cc.Enum(a),
tooltip: "一旦满足条件就对节点执行操作"
}) ], e.prototype, "valueAction", void 0);
o([ p({
visible: function() {
return this.valueAction === a.NODE_OPACITY;
},
range: [ 0, 255 ],
type: cc.Integer,
displayName: "Action Opacity"
}) ], e.prototype, "valueActionOpacity", void 0);
o([ p({
visible: function() {
return this.valueAction === a.NODE_COLOR;
},
displayName: "Action Color"
}) ], e.prototype, "valueActionColor", void 0);
o([ p({
visible: function() {
return this.valueAction === a.COMPONENT_CUSTOM;
},
displayName: "Component Name"
}) ], e.prototype, "valueComponentName", void 0);
o([ p({
visible: function() {
return this.valueAction === a.COMPONENT_CUSTOM;
},
displayName: "Component Property"
}) ], e.prototype, "valueComponentProperty", void 0);
o([ p({
visible: function() {
return this.valueAction === a.COMPONENT_CUSTOM;
},
displayName: "Default Value"
}) ], e.prototype, "valueComponentDefaultValue", void 0);
o([ p({
visible: function() {
return this.valueAction === a.COMPONENT_CUSTOM;
},
displayName: "Action Value"
}) ], e.prototype, "valueComponentActionValue", void 0);
o([ p({
type: [ cc.Node ],
tooltip: "需要执行条件的节点，如果不填写则默认会执行本节点以及本节点的所有子节点 的状态"
}) ], e.prototype, "watchNodes", void 0);
return o([ f, d("ModelViewer/VM-State (VM状态控制)") ], e);
}(u.default);
i.default = y;
cc._RF.pop();
}, {
"./VMBase": "VMBase",
"./ViewModel": "ViewModel"
} ],
Vec3Util: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "4b26fT1E2xCqoEu7lvOerwR", "Vec3Util");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = function() {
function t() {}
Object.defineProperty(t, "x", {
get: function() {
return new cc.Vec3(1, 0, 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "y", {
get: function() {
return new cc.Vec3(0, 1, 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "z", {
get: function() {
return new cc.Vec3(0, 0, 1);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "left", {
get: function() {
return new cc.Vec3(-1, 0, 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "right", {
get: function() {
return new cc.Vec3(1, 0, 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "up", {
get: function() {
return new cc.Vec3(0, 1, 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "down", {
get: function() {
return new cc.Vec3(0, -1, 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "forward", {
get: function() {
return new cc.Vec3(0, 0, 1);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "back", {
get: function() {
return new cc.Vec3(0, 0, -1);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "one", {
get: function() {
return new cc.Vec3(1, 1, 1);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "zero", {
get: function() {
return new cc.Vec3(0, 0, 0);
},
enumerable: !1,
configurable: !0
});
t.progress = function(t, e, i) {
var r = new cc.Vec3();
r.x = c2f.utils.math.progress(t.x, e.x, i);
r.y = c2f.utils.math.progress(t.y, e.y, i);
r.z = c2f.utils.math.progress(t.z, e.z, i);
return r;
};
t.add = function(t, e) {
var i = new cc.Vec3();
cc.Vec3.add(i, t, e);
return i;
};
t.sub = function(t, e) {
var i = new cc.Vec3();
cc.Vec3.subtract(i, t, e);
return i;
};
t.mul = function(t, e) {
var i = new cc.Vec3();
cc.Vec3.multiplyScalar(i, t, e);
return i;
};
t.div = function(t, e) {
var i = new cc.Vec3();
i.x = t.x / e;
i.y = t.y / e;
i.z = t.z / e;
return i;
};
t.equals = function(t, e) {
return t.x == e.x && t.y == e.y && t.z == e.z;
};
t.v2Equals = function(t, e) {
return t.x == e.x && t.y == e.y;
};
t.magnitude = function(t) {
return t.len();
};
t.normalize = function(t) {
return new cc.Vec3(t.x, t.y, t.z).normalize();
};
t.direction = function(t, e) {
var i = new cc.Vec3();
cc.Vec3.subtract(i, e, t);
return i.normalize();
};
t.distance = function(t, e) {
return cc.Vec3.distance(t, e);
};
t.lerp = function(t, e, i) {
return this.bezierOne(i, t, e);
};
t.slerp = function(t, e, i) {
if (i <= 0) return t;
if (i >= 1) return e;
var r = this.rotateTo(t, e, cc.Vec3.angle(t, e) / Math.PI * 180 * i), n = e.len() * i + t.len() * (1 - i);
return r.normalize().multiplyScalar(n);
};
t.rotateTo = function(t, e, i) {
if (0 == cc.Vec3.angle(t, e)) return e;
var r = new cc.Vec3();
cc.Vec3.cross(r, t, e);
r.normalize();
var n = i * Math.PI / 180, o = new cc.Mat4();
o.rotate(n, r);
return new cc.Vec3(t.x * o.m[0] + t.y * o.m[4] + t.z * o.m[8], t.x * o.m[1] + t.y * o.m[5] + t.z * o.m[9], t.x * o.m[2] + t.y * o.m[6] + t.z * o.m[10]);
};
t.bezierOne = function(t, e, i) {
t > 1 ? t = 1 : t < 0 && (t = 0);
var r = e.clone(), n = i.clone();
return r.multiplyScalar(1 - t).add(n.multiplyScalar(t));
};
t.bezierTwo = function(t, e, i, r) {
t > 1 ? t = 1 : t < 0 && (t = 0);
var n = 1 - t, o = t * t, s = e.clone(), a = e.clone(), c = i.clone(), l = r.clone();
a.add(s.multiplyScalar(n * n));
a.add(c.multiplyScalar(2 * n * t));
a.add(l.multiplyScalar(o));
return a;
};
t.bezierThree = function(t, e, i, r, n) {
t > 1 ? t = 1 : t < 0 && (t = 0);
var o = 1 - t, s = o * o, a = s * o, c = t * t, l = c * t, u = e.clone(), h = e.clone(), f = i.clone(), p = r.clone(), d = n.clone();
h.add(u.multiplyScalar(a));
h.add(f.multiplyScalar(3 * s * t));
h.add(p.multiplyScalar(3 * o * c));
h.add(d.multiplyScalar(l));
return h;
};
t.dot = function(t, e) {
var i = t, r = e;
return i.x * r.x + i.y * r.y + i.z * r.z;
};
t.cross = function(t, e) {
var i = new cc.Vec3(1, 0, 0), r = new cc.Vec3(0, 1, 0), n = new cc.Vec3(0, 0, 1), o = new cc.Vec3(t.x, t.y, t.z), s = new cc.Vec3(e.x, e.y, e.z), a = i.multiplyScalar(o.y * s.z - s.y * o.z), c = r.multiplyScalar(s.x * o.z - o.x * s.z), l = n.multiplyScalar(o.x * s.y - s.x * o.y);
return a.add(c).add(l);
};
t.angle = function(t, e) {
var i = this.dot(t.clone().normalize(), e.clone().normalize());
return Math.acos(i) / Math.PI * 180 * Math.sign(i);
};
t.angleEx = function(t, e) {
return Math.atan2(e.y - t.y, e.x - t.x) * (180 / Math.PI);
};
t.dirAngle = function(e, i) {
var r = t.cross(e, i);
return t.angle(e, i) * Math.sign(t.dot(r.normalize(), t.cross(i.normalize(), e.normalize())));
};
t.dirAngleEx = function(e, i) {
var r = t.angleEx(cc.Vec3.ZERO.clone(), e);
return t.angleEx(cc.Vec3.ZERO.clone(), i) - r;
};
t.vec2To3 = function(t) {
return new cc.Vec3(t.x, t.y, 0);
};
t.isInRange = function(t, e, i) {
var r = Math.abs(t.x - e.x), n = Math.abs(t.y - e.y);
return r < i && n < i;
};
t.getEllipsePoint = function(t, e, i) {
i = c2f.utils.math.normalizeDegree(i);
var r = Math.tan(cc.misc.degreesToRadians(i)), n = Math.sqrt(e * e / (r * r + e * e / t / t));
i > 90 && i < 270 && (n = -n);
var o = Math.sqrt(e * e - e * e * n * n / t / t);
i > 180 && (o = -o);
return cc.v2(n, o);
};
return t;
}();
c2f.utils.vec = r;
cc._RF.pop();
}, {} ],
ViewModel: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "6a9f1+YeVpKIYETjwSD0G3o", "ViewModel");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.VM = void 0;
var r = t("./JsonOb"), n = "VC:";
function o(t, e, i, r) {
void 0 === r && (r = "");
for (var n = e.split("."), o = 0; o < n.length; o++) {
var s = n[o];
if (s in t == 0) {
console.error("[" + s + "] not find in " + r + "." + e);
break;
}
o == n.length - 1 ? t[s] = i : t = t[s];
}
}
function s(t, e, i, r) {
void 0 === r && (r = "");
for (var n = e.split("."), o = 0; o < n.length; o++) {
var s = n[o];
if (s in t == 0) {
console.error("[" + s + "] not find in " + r + "." + e);
return i;
}
t = t[s];
}
null !== t && "undefined" != typeof t || (t = i);
return t;
}
var a = function() {
function t(t, e) {
this._tag = null;
this.active = !0;
this.emitToRootPath = !1;
new r.JsonOb(t, this._callback.bind(this));
this.$data = t;
this._tag = e;
}
t.prototype._callback = function(t, e, i) {
if (1 == this.active) {
var r = n + this._tag + "." + i.join(".");
cc.director.emit(r, t, e, [ this._tag ].concat(i));
this.emitToRootPath && cc.director.emit(n + this._tag, t, e, i);
if (i.length >= 2) for (var o = 0; o < i.length - 1; o++) i[o];
}
};
t.prototype.setValue = function(t, e) {
o(this.$data, t, e, this._tag);
};
t.prototype.getValue = function(t, e) {
return s(this.$data, t, e, this._tag);
};
return t;
}(), c = function() {
function t() {
this._mvs = [];
this.EMIT_HEAD = n;
this.setObjValue = o;
this.getObjValue = s;
}
t.prototype.add = function(t, e, i) {
void 0 === e && (e = "global");
void 0 === i && (i = !1);
var r = new a(t, e), n = this._mvs.find(function(t) {
return t.tag === e;
});
if (e.includes(".")) console.error("cant write . in tag:", e); else if (n) console.error("already set VM tag:" + e); else {
r.emitToRootPath = i;
this._mvs.push({
tag: e,
vm: r
});
}
};
t.prototype.remove = function(t) {
var e = this._mvs.findIndex(function(e) {
return e.tag === t;
});
e >= 0 && this._mvs.splice(e, 1);
};
t.prototype.get = function(t) {
var e = this._mvs.find(function(e) {
return e.tag === t;
});
if (null != e) return e.vm;
console.error("cant find VM from:", t);
};
t.prototype.addValue = function(t, e) {
var i = (t = t.trim()).split(".");
i.length < 2 && console.error("Cant find path:" + t);
var r = this.get(i[0]);
if (r) {
var n = i.slice(1).join(".");
r.setValue(n, r.getValue(n) + e);
} else console.error("Cant Set VM:" + i[0]);
};
t.prototype.getValue = function(t, e) {
var i = (t = t.trim()).split(".");
if (i.length < 2) console.error("Get Value Cant find path:" + t); else {
var r = this.get(i[0]);
if (r) return r.getValue(i.slice(1).join("."), e);
console.error("Cant Get VM:" + i[0]);
}
};
t.prototype.setValue = function(t, e) {
var i = (t = t.trim()).split(".");
if (i.length < 2) console.error("Set Value Cant find path:" + t); else {
var r = this.get(i[0]);
r ? r.setValue(i.slice(1).join("."), e) : console.error("Cant Set VM:" + i[0]);
}
};
t.prototype.bindPath = function(t, e, i, r) {
"" != (t = t.trim()) ? "*" !== t.split(".")[0] ? cc.director.on(n + t, e, i, r) : console.error(t, "路径不合法,可能错误覆盖了 VMParent 的onLoad 方法, 或者父节点并未挂载 VMParent 相关的组件脚本") : console.error(i.node.name, "节点绑定的路径为空");
};
t.prototype.unbindPath = function(t, e, i) {
"*" !== (t = t.trim()).split(".")[0] ? cc.director.off(n + t, e, i) : console.error(t, "路径不合法,可能错误覆盖了 VMParent 的onLoad 方法, 或者父节点并未挂载 VMParent 相关的组件脚本");
};
t.prototype.inactive = function() {
this._mvs.forEach(function(t) {
t.vm.active = !1;
});
};
t.prototype.active = function() {
this._mvs.forEach(function(t) {
t.vm.active = !0;
});
};
return t;
}();
i.VM = new c();
cc._RF.pop();
}, {
"./JsonOb": "JsonOb"
} ],
ViewUtil: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "0e2d0OKE9JFIp68tIpIvpjm", "ViewUtil");
var r = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function s(t) {
try {
c(r.next(t));
} catch (t) {
o(t);
}
}
function a(t) {
try {
c(r.throw(t));
} catch (t) {
o(t);
}
}
function c(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(s, a);
var e;
}
c((r = r.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var i, r, n, o, s = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function a(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;s; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
s.label++;
return {
value: o[1],
done: !1
};

case 5:
s.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = s.ops.pop();
s.trys.pop();
continue;

default:
if (!(n = s.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
s = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
s.label = o[1];
break;
}
if (6 === o[0] && s.label < n[1]) {
s.label = n[1];
n = o;
break;
}
if (n && s.label < n[2]) {
s.label = n[2];
s.ops.push(o);
break;
}
n[2] && s.ops.pop();
s.trys.pop();
continue;
}
o = e.call(t, s);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
}
if (5 & o[0]) throw o[1];
return {
value: o[0] ? o[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = function() {
function t() {}
t.nodeTreeInfoLite = function(e, i) {
for (var r = i || new Map(), n = e.children, o = 0; o < n.length; o++) {
var s = n[o], a = s.name.trim();
r.set(a, s);
t.nodeTreeInfoLite(s, r);
}
return r;
};
t.findNodes = function(e, i, r) {
for (var n = r || [], o = i.children, s = 0; s < o.length; s++) {
var a = o[s].name;
e.test(a) && n.push(o[s]);
t.findNodes(e, o[s], n);
}
return n;
};
t.getComponentName = function(t) {
var e = t.name.match(/<([^>]*)>/g);
return (e ? e.map(function(t) {
return t.replace(/<|>/g, "");
}) : [ "" ])[0];
};
t.calculateASpaceToBSpacePos = function(t, e, i) {
var r = t.convertToWorldSpaceAR(i);
return e.convertToNodeSpaceAR(r);
};
t.calculateScreenPosToSpacePos = function(t, e) {
var i = t.getLocation(), r = cc.v3(i.x, i.y);
return e.convertToNodeSpaceAR(r);
};
t.uniformScale = function(t, e, i, r) {
var n = i / t, o = r / e, s = n < o ? n : o;
return new cc.Size(Math.floor(t * s), Math.floor(e * s));
};
t.nodeIsInView = function(t) {
var e = !0, i = cc.view.getVisibleSize(), r = t.convertToWorldSpaceAR(cc.Vec3.ZERO);
(e = r.x <= 0 ? !(r.x + t.width * (1 - t.anchorX) < 0) : !(r.x - t.width * t.anchorX > i.width)) && (e = r.y <= 0 ? !(r.y + t.height * (1 - t.anchorY) < 0) : !(r.y - t.height * t.anchorY > i.height));
return e;
};
t.nodeFullInView = function(t) {
var e = !0, i = cc.view.getVisibleSize(), r = t.convertToWorldSpaceAR(cc.Vec3.ZERO);
(e = r.x <= 0 ? r.x - t.width * t.anchorX >= 0 : r.x + t.width * (1 - t.anchorX) <= i.width) && (e = r.y <= 0 ? r.y - t.height * t.anchorY >= 0 : r.y + t.height * (1 - t.anchorY) <= i.height);
return e;
};
t.nodeIsOutByHeight = function(t) {
var e = cc.view.getVisibleSize(), i = t.convertToWorldSpaceAR(cc.Vec3.ZERO);
return i.y <= 0 ? i.y + t.height * (1 - t.anchorY) < 0 : i.y - t.height * t.anchorY > e.height;
};
t.nodeIsOutByWidth = function(t) {
var e = cc.view.getVisibleSize(), i = c2f.utils.node.getNodeWorldPosition(t);
return i.x <= 0 ? i.x + t.width * (1 - t.anchorX) < 0 : i.x - t.width * t.anchorX > e.width;
};
t.getNodeDistance = function(t, e) {
cc.v3(0, 0, 0);
var i = c2f.utils.node.getNodeWorldPosition(t), r = c2f.utils.node.getNodeWorldPosition(e);
return {
distance: c2f.utils.vec.distance(i, r),
direction: c2f.utils.vec.direction(i, r)
};
};
t.getTwoNodeAngle = function(t, e) {
var i = c2f.utils.node.getNodeWorldPosition(t), r = c2f.utils.node.getNodeWorldPosition(e);
return c2f.utils.vec.angleEx(i, r);
};
t.getWorldPosToNodeAngle = function(t, e) {
var i = c2f.utils.node.getNodeWorldPosition(e), r = i;
r.x = i.x + (.5 - e.anchorX) * e.width;
r.y = i.y + (.5 - e.anchorY) * e.height;
return c2f.utils.vec.angleEx(t, r);
};
t.getNodeInPanelPos = function(t, e, i) {
var r = t.getPosition(), n = t.parent.convertToWorldSpaceAR(r);
if (i) {
e.parent.convertToNodeSpaceAR(n, i);
return i;
}
return e.parent.convertToNodeSpaceAR(n);
};
t.createPrefabNode = function(t) {
var e = c2f.res.get(t, cc.Prefab);
return c2f.res.instantiate(e);
};
t.createPrefabNodeAsync = function(t) {
var e = this;
return new Promise(function(i) {
return r(e, void 0, void 0, function() {
var e = this;
return n(this, function() {
c2f.res.load(t, cc.Prefab, function(r) {
if (r) console.error("名为【" + t + "】的资源加载失败"); else {
var n = e.createPrefabNode(t);
i(n);
}
});
return [ 2 ];
});
});
});
};
t.loadPrefabNode = function(t, e) {
var i = this;
c2f.res.load(t, cc.Prefab, function(r) {
if (r) console.error("名为【" + t + "】的资源加载失败"); else {
var n = i.createPrefabNode(t);
e(n);
}
});
};
t.addNodeAnimation = function(t, e, i, r) {
void 0 === i && (i = !0);
void 0 === r && (r = !1);
if (e && e.isValid) {
var n = e.getComponent(cc.Animation);
null == n && (n = e.addComponent(cc.Animation));
var o = c2f.res.get(t, cc.AnimationClip);
if (o && !(i && n.getAnimationState(o.name) && n.getAnimationState(o.name).isPlaying)) if (r) {
n.defaultClip = o;
n.play();
} else {
n.once(cc.Animation.EventType.FINISHED, function() {
n.defaultClip && n.play();
}, this);
n.getAnimationState(o.name), n.play(o.name);
}
}
};
t.addButtonListen = function(t, e, i) {
if (t.getComponent(cc.Button)) t.on("click", i, e); else {
var r = this.getNodePath(t);
cc.warn("don't find Button component for node:", r);
}
};
t.getNodePath = function(t) {
var e = t.name;
t.parent && (e = this.getNodePath(t.parent) + "/" + e);
return e;
};
t.clearChildren = function(t) {
if (null != t && t.children.length > 0) for (var e = t.children; e.length > 0; ) {
var i = e[0];
i.removeFromParent();
i.destroy();
}
};
t.setSpriteGray = function(t, e) {
if (e) {
var i = cc.Material.getBuiltinMaterial("2d-gray-sprite");
t.setMaterial(0, i);
} else {
var r = cc.Material.getBuiltinMaterial("2d-sprite");
t.setMaterial(0, r);
}
};
t.setNodeGray = function(t, e) {
var i = t.getComponent(cc.Sprite);
i && this.setSpriteGray(i, e);
for (var r = 0; r < t.children.length; ++r) this.setNodeGray(t.children[r], e);
};
t.getChildrenByName = function(t, e) {
for (var i = [], r = 0; r < t.children.length; ++r) {
t.children[r].name == e && i.push(t.children[r]);
var n = this.getChildrenByName(t.children[r], e);
i = i.concat(n);
}
return i;
};
t.getFirstChildByName = function(t, e) {
var i = null, r = this.getChildrenByName(t, e);
r.length > 0 && (i = r[0]);
return i;
};
t.getChildrenByComponent = function(t, e) {
for (var i = [], r = 0; r < t.children.length; ++r) {
var n = t.children[r].getComponent(e);
n && i.push(n);
}
return i;
};
t.getAllChildCount = function(t, e) {
for (var i = t + "_" + e.name, r = e.children.length, n = 0, o = e.children; n < o.length; n++) {
var s = o[n];
r += this.getAllChildCount(i, s);
}
return r;
};
t.offsetRect = function(t, e) {
var i = e.x, r = e.y;
t.x += -i;
t.y += -r;
t.width += 2 * i;
t.height += r;
return t;
};
t.autoAdjustPopWinPos = function(t, e, i) {
void 0 === i && (i = 5);
if (null != t && null != e) {
var r = cc.view.getVisibleSize(), n = t.height * t.scaleY, o = t.width * t.scaleX, s = r.height, a = r.width, c = e.clone();
switch (i || 5) {
case 1:
c.x += t.anchorX * o;
c.y += (t.anchorY - .5) * n;
break;

case 2:
c.x -= (1 - t.anchorX) * o;
c.y += (t.anchorY - .5) * n;
break;

case 3:
c.y -= (1 - t.anchorY) * n;
c.x += (t.anchorX - .5) * o;
break;

case 4:
c.y += t.anchorY * n;
c.x += (t.anchorX - .5) * o;
break;

case 5:
var l = e.x;
e.x <= .5 * a ? l += o * t.anchorX : l -= o * (1 - t.anchorX);
var u = e.y + n * t.anchorY;
c = cc.v2(l, u);
break;

case 6:
c.y -= (1 - t.anchorY) * n;
c.x = a / 2;
}
if (c.x > .5 * a) {
var h = c.x + o * (1 - t.anchorX) - a;
h > 0 && (c.x -= h);
} else {
var f = c.x - o * t.anchorX - 70;
f < 0 && (c.x -= f);
}
if (c.y > .5 * s) {
var p = c.y + n * (1 - t.anchorY) - s;
p > 0 && (c.y -= p);
} else {
var d = c.y - n * t.anchorY;
d < 0 && (c.y -= d);
}
var y = t.parent.convertToNodeSpaceAR(c);
cc.log(y, t.name);
t.setPosition(y);
}
};
t.nodeRecursive = function(t, e, i) {
var r = this;
void 0 === i && (i = void 0);
if (t instanceof cc.Node) {
e.call(i, t);
t.children.forEach(function(t) {
r.nodeRecursive(t, e, i);
});
} else Array.isArray(t) && t.forEach(function(t) {
r.nodeRecursive(t, e, i);
});
};
t.changeSpriteFrame = function(t, e, i) {
t.changeSpriteFrame(e, i);
};
t.changeSFWithAtlas = function(t, e, i, r) {
t.changeSFWithAtlas(e, i, r);
};
t.changeSkeletonData = function(t, e, i) {
t.changeSkeletonData(e, i);
};
t.resetControlMVObj = function(t) {
var e = t.name;
(e.startsWith("P_") || e.startsWith("V_") || e.startsWith("F_")) && (e = e.substring(2));
if (!e.startsWith("C_")) {
var i = t.getComponent(e);
if (i) {
var r = t.getComponent(e + "Model");
r && (i.model = r);
var n = t.getComponent(e + "View");
n && (i.view = n);
}
}
for (var o = 0, s = t.children; o < s.length; o++) {
var a = s[o];
this.resetControlMVObj(a);
}
};
t.instantiateMVCPrefab = function(t, e) {
var i = c2f.res.instantiate(t, e), r = t.name;
(r.startsWith("P_") || r.startsWith("V_") || r.startsWith("F_")) && (r = r.substring(2));
if (!r.startsWith("C_")) {
var n = i.getComponent(r + "Model");
n || (n = i.addComponent(r + "Model"));
var o = i.getComponent(r + "View");
o || (o = i.addComponent(r + "View")).initViewProperty();
var s = i.getComponent(r);
s || (s = i.addComponent(r));
s.model = n;
s.view = o;
}
t instanceof cc.Node && this.resetControlMVObj(i);
return i;
};
return t;
}();
c2f.utils.view = o;
cc._RF.pop();
}, {} ],
VirtualItem: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "37390yL2g9Gx56ICLo3MK1K", "VirtualItem");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("../../../gui/layer/UIPControlBase"), a = cc._decorator, c = a.ccclass, l = a.disallowMultiple, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.dataIdx = 0;
e.args = null;
e.others = [];
return e;
}
e.prototype.onDestroy = function() {
this.args = null;
this.others = [];
t.prototype.onDestroy.call(this);
};
e.prototype.onRefresh = function() {};
e.prototype.onRefreshOthers = function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
};
e.prototype.onReset = function() {};
e.prototype.getRealSize = function() {
return this.node.getContentSize();
};
return o([ c, l ], e);
}(s.UIPControlBase);
i.default = u;
cc._RF.pop();
}, {
"../../../gui/layer/UIPControlBase": "UIPControlBase"
} ],
VirtualLayout: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "23c51D+ML1JI7Nz58WdBOmf", "VirtualLayout");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("../../../define/C2FEnum"), a = t("./LayoutProperty"), c = t("./VLItemGroup"), l = t("./VLTemplate"), u = t("./VirtualItem"), h = cc._decorator, f = h.ccclass, p = h.property, d = h.disallowMultiple, y = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.layout = null;
e._list = null;
e._view = null;
e._viewEdge = null;
e._fixedSize = null;
e._sizeDirty = !1;
e._viewDirty = !1;
e._posDirty = !1;
e._items = [];
e._itemPool = [];
e._otherItemsArr = [];
e._otherItemPoolArr = [];
return e;
}
e.prototype.onInit = function(t) {
var e = this;
this._list = t;
this._view = this.node.parent;
this._viewEdge = this.getNodeEdgeRect(this._view);
this._otherItemsArr = [];
this._otherItemPoolArr = [];
this._list.others.forEach(function() {
e._otherItemsArr.push([]);
e._otherItemPoolArr.push([]);
});
if (null === this._fixedSize) {
this.addItemNode(!1);
this._fixedSize = this._itemPool[0].getContentSize();
}
this.node.on(cc.Node.EventType.POSITION_CHANGED, this.onPositionChanged, this);
this._view.on(cc.Node.EventType.SIZE_CHANGED, this.onViewSizeChanged, this);
};
e.prototype.syncLayoutProperty = function(t) {
this.layout = t;
};
e.prototype.onDestroy = function() {
var t;
this.node.off(cc.Node.EventType.POSITION_CHANGED, this.onPositionChanged, this);
null === (t = this._view) || void 0 === t || t.off(cc.Node.EventType.SIZE_CHANGED, this.onViewSizeChanged, this);
this._list = null;
this._view = null;
this._items = [];
this._itemPool = [];
this._otherItemsArr = [];
this._otherItemPoolArr = [];
};
e.prototype.forceUpdate = function() {
this.updatePos();
this.updateSize();
this.updateView();
this.updateSibling();
};
e.prototype.lateUpdate = function() {
this.forceUpdate();
};
e.prototype.updatePos = function() {
var t = this;
if (this._posDirty) {
this._posDirty = !1;
this._list.others.forEach(function(e) {
e.content.position = t.node.position;
});
}
};
e.prototype.updateSize = function() {
if (this._sizeDirty) {
this._sizeDirty = !1;
this._list.isFixedSize ? this.updateSizeFixed() : this.updateSizeUnfixed();
}
};
e.prototype.updateSizeFixed = function() {
if (this.layout.type === cc.Layout.Type.VERTICAL) {
if (this._list.argsArr.length <= 0) {
this.node.height = 0;
return;
}
this.node.height = this.layout.top + this.layout.bottom + (this._list.argsArr.length - 1) * this.layout.spacingY + this._fixedSize.height * this._list.argsArr.length;
} else if (this.layout.type === cc.Layout.Type.HORIZONTAL) {
if (this._list.argsArr.length <= 0) {
this.node.width = 0;
return;
}
this.node.width = this.layout.left + this.layout.right + (this._list.argsArr.length - 1) * this.layout.spacingX + this._fixedSize.width * this._list.argsArr.length;
} else if (this.layout.startAxis === cc.Layout.AxisDirection.HORIZONTAL) {
if (this._list.argsArr.length <= 0) {
this.node.height = 0;
return;
}
var t = Math.floor((this.node.width - this.layout.left - this.layout.right + this.layout.spacingX) / (this._fixedSize.width + this.layout.spacingX));
t = Math.max(t, 1);
var e = Math.ceil(this._list.argsArr.length / t);
this.node.height = this.layout.top + this.layout.bottom + (e - 1) * this.layout.spacingY + this._fixedSize.height * e;
} else {
if (this._list.argsArr.length <= 0) {
this.node.width = 0;
return;
}
t = Math.floor((this.node.height - this.layout.top - this.layout.bottom + this.layout.spacingY) / (this._fixedSize.height + this.layout.spacingY));
t = Math.max(t, 1);
var i = Math.ceil(this._list.argsArr.length / t);
this.node.width = this.layout.left + this.layout.right + (i - 1) * this.layout.spacingX + this._fixedSize.width * i;
}
};
e.prototype.updateSizeUnfixed = function() {
var t = 0;
if (this.layout.type === cc.Layout.Type.VERTICAL) {
if (this._list.argsArr.length <= 0) {
this.node.height = 0;
return;
}
t = this.layout.top + this.layout.bottom + (this._list.argsArr.length - 1) * this.layout.spacingY;
for (var e = 0; e < this._list.argsArr.length; e++) t += this.calcItemSizeUnfixed(e).height;
this.node.height = t;
} else if (this.layout.type === cc.Layout.Type.HORIZONTAL) {
if (this._list.argsArr.length <= 0) {
this.node.width = 0;
return;
}
t = this.layout.left + this.layout.right + (this._list.argsArr.length - 1) * this.layout.spacingX;
for (e = 0; e < this._list.argsArr.length; e++) t += this.calcItemSizeUnfixed(e).width;
this.node.width = t;
}
};
e.prototype.updateView = function() {
if (this._viewDirty && !(this._list.argsArr.length <= 0)) {
this._viewDirty = !1;
this._list.isFixedSize ? this.updateViewFixed() : this.updateViewUnfixed();
}
};
e.prototype.updateSibling = function() {
if (this._list && this._list.argsArr && !(this._list.argsArr.length <= 0) && this._list.isSubling) {
var t = 999;
this._items.forEach(function(e) {
var i = e.getComponent(u.default);
i.args && i.args.subling < t && (t = i.args.subling);
});
this._items.forEach(function(e) {
var i = e.getComponent(u.default);
if (i.args) {
var r = i.args.subling - t;
e.getSiblingIndex() != r && e.setSiblingIndex(r);
}
});
}
};
e.prototype.updateViewFixed = function() {
var t, e, i, r, n = this, o = [], s = this.checkViewItem(), a = s.inView, c = s.outView, l = this.getNodeEdgeRect(this.node);
if (this.layout.type === cc.Layout.Type.VERTICAL) for (var h = function(t) {
if (f.layout.verticalDirection === cc.Layout.VerticalDirection.TOP_TO_BOTTOM) {
i = l.yMax - (f.layout.top + t * f.layout.spacingY + f._fixedSize.height * t);
r = i - f._fixedSize.height;
if (i + f.node.y < f._viewEdge.yMin) return "break";
if (r + f.node.y > f._viewEdge.yMax) return "continue";
} else {
r = l.yMin + f.layout.bottom + t * f.layout.spacingY + f._fixedSize.height * t;
i = r + f._fixedSize.height;
if (r + f.node.y > f._viewEdge.yMax) return "break";
if (i + f.node.y < f._viewEdge.yMin) return "continue";
}
if (-1 !== a.findIndex(function(e) {
return n._items[e].getComponent(u.default).dataIdx === t;
})) return "continue";
o.push({
idx: t,
xMin: e,
yMin: r,
size: null
});
}, f = this, p = 0; p < this._list.argsArr.length && "break" !== h(p); p++) ; else if (this.layout.type === cc.Layout.Type.HORIZONTAL) {
var d = function(i) {
if (y.layout.horizontalDirection === cc.Layout.HorizontalDirection.RIGHT_TO_LEFT) {
t = l.xMax - (y.layout.right + i * y.layout.spacingX + y._fixedSize.width * i);
e = t - y._fixedSize.width;
if (t + y.node.x < y._viewEdge.xMin) return "break";
if (e + y.node.x > y._viewEdge.xMax) return "continue";
} else {
e = l.xMin + y.layout.left + i * y.layout.spacingX + y._fixedSize.width * i;
t = e + y._fixedSize.width;
if (e + y.node.x > y._viewEdge.xMax) return "break";
if (t + y.node.x < y._viewEdge.xMin) return "continue";
}
if (-1 !== a.findIndex(function(t) {
return n._items[t].getComponent(u.default).dataIdx === i;
})) return "continue";
o.push({
idx: i,
xMin: e,
yMin: r,
size: null
});
}, y = this;
for (p = 0; p < this._list.argsArr.length && "break" !== d(p); p++) ;
} else {
var g = function(s) {
var c = 0, h = 0;
if (v.layout.startAxis === cc.Layout.AxisDirection.HORIZONTAL) {
var f = Math.floor((v.node.width - v.layout.left - v.layout.right + v.layout.spacingX) / (v._fixedSize.width + v.layout.spacingX));
f = Math.max(f, 1);
c = Math.floor(s / f);
h = s % f;
if (v.layout.verticalDirection === cc.Layout.VerticalDirection.TOP_TO_BOTTOM) {
i = l.yMax - (v.layout.top + c * v.layout.spacingY + v._fixedSize.height * c);
r = i - v._fixedSize.height;
if (i + v.node.y < v._viewEdge.yMin) return "break";
if (r + v.node.y > v._viewEdge.yMax) return "continue";
} else {
r = l.yMin + v.layout.bottom + c * v.layout.spacingY + v._fixedSize.height * c;
i = r + v._fixedSize.height;
if (r + v.node.y > v._viewEdge.yMax) return "break";
if (i + v.node.y < v._viewEdge.yMin) return "continue";
}
if (v.layout.horizontalDirection === cc.Layout.HorizontalDirection.RIGHT_TO_LEFT) {
t = l.xMax - (v.layout.right + h * v.layout.spacingX + v._fixedSize.width * h);
e = t - v._fixedSize.width;
} else {
e = l.xMin + v.layout.left + h * v.layout.spacingX + v._fixedSize.width * h;
t = e + v._fixedSize.width;
}
if (t + v.node.x < v._viewEdge.xMin || e + v.node.x > v._viewEdge.xMax) return "continue";
} else {
f = Math.floor((v.node.height - v.layout.top - v.layout.bottom + v.layout.spacingY) / (v._fixedSize.height + v.layout.spacingY));
f = Math.max(f, 1);
c = s % f;
h = Math.floor(s / f);
if (v.layout.horizontalDirection === cc.Layout.HorizontalDirection.RIGHT_TO_LEFT) {
t = l.xMax - (v.layout.right + h * v.layout.spacingX + v._fixedSize.width * h);
e = t - v._fixedSize.width;
if (t + v.node.x < v._viewEdge.xMin) return "break";
if (e + v.node.x > v._viewEdge.xMax) return "continue";
} else {
e = l.xMin + v.layout.left + h * v.layout.spacingX + v._fixedSize.width * h;
t = e + v._fixedSize.width;
if (e + v.node.x > v._viewEdge.xMax) return "break";
if (t + v.node.x < v._viewEdge.xMin) return "continue";
}
if (v.layout.verticalDirection === cc.Layout.VerticalDirection.TOP_TO_BOTTOM) {
i = l.yMax - (v.layout.top + c * v.layout.spacingY + v._fixedSize.height * c);
r = i - v._fixedSize.height;
} else {
r = l.yMin + v.layout.bottom + c * v.layout.spacingY + v._fixedSize.height * c;
i = r + v._fixedSize.height;
}
if (i + v.node.y < v._viewEdge.yMin || r + v.node.y > v._viewEdge.yMax) return "continue";
}
if (-1 !== a.findIndex(function(t) {
return n._items[t].getComponent(u.default).dataIdx === s;
})) return "continue";
o.push({
idx: s,
xMin: e,
yMin: r,
size: null
});
}, v = this;
for (p = 0; p < this._list.argsArr.length && "break" !== g(p); p++) ;
}
this.addItemsByData(o, c);
};
e.prototype.updateViewUnfixed = function() {
var t, e, i, r, n = this, o = [], s = this.checkViewItem(), a = s.inView, c = s.outView, l = this.getNodeEdgeRect(this.node);
if (this.layout.type === cc.Layout.Type.VERTICAL) for (var h = 0, f = function(t) {
var s = p.calcItemSizeUnfixed(t);
h += s.height;
if (p.layout.verticalDirection === cc.Layout.VerticalDirection.TOP_TO_BOTTOM) {
i = l.yMax - (p.layout.top + t * p.layout.spacingY + (h - s.height));
r = i - s.height;
if (i + p.node.y < p._viewEdge.yMin) return "break";
if (r + p.node.y > p._viewEdge.yMax) return "continue";
} else {
r = l.yMin + p.layout.bottom + t * p.layout.spacingY + (h - s.height);
i = r + s.height;
if (r + p.node.y > p._viewEdge.yMax) return "break";
if (i + p.node.y < p._viewEdge.yMin) return "continue";
}
if (-1 !== a.findIndex(function(e) {
return n._items[e].getComponent(u.default).dataIdx === t;
})) return "continue";
o.push({
idx: t,
xMin: e,
yMin: r,
size: s.clone()
});
}, p = this, d = 0; d < this._list.argsArr.length && "break" !== f(d); d++) ; else if (this.layout.type === cc.Layout.Type.HORIZONTAL) {
var y = 0, g = function(i) {
var s = v.calcItemSizeUnfixed(i);
y += s.width;
if (v.layout.horizontalDirection === cc.Layout.HorizontalDirection.RIGHT_TO_LEFT) {
t = l.xMax - (v.layout.right + i * v.layout.spacingX + (y - s.width));
e = t - s.width;
if (t + v.node.x < v._viewEdge.xMin) return "break";
if (e + v.node.x > v._viewEdge.xMax) return "continue";
} else {
e = l.xMin + v.layout.left + i * v.layout.spacingX + (y - s.width);
t = e + s.width;
if (e + v.node.x > v._viewEdge.xMax) return "break";
if (t + v.node.x < v._viewEdge.xMin) return "continue";
}
if (-1 !== a.findIndex(function(t) {
return n._items[t].getComponent(u.default).dataIdx === i;
})) return "continue";
o.push({
idx: i,
xMin: e,
yMin: r,
size: s.clone()
});
}, v = this;
for (d = 0; d < this._list.argsArr.length && "break" !== g(d); d++) ;
}
this.addItemsByData(o, c);
};
e.prototype.addOneItem = function(t, e) {
var i = 0 === e.length ? this.addItemNode() : e.shift(), r = this._items[i];
t.size && r.setContentSize(t.size);
var n = cc.v3(0, 0, 0);
if (this.layout.type === cc.Layout.Type.VERTICAL) n.y = t.yMin + r.anchorY * r.height; else if (this.layout.type === cc.Layout.Type.HORIZONTAL) n.x = t.xMin + r.anchorX * r.width; else {
n.x = t.xMin + r.anchorX * r.width;
n.y = t.yMin + r.anchorY * r.height;
}
this.setItem(n, t.idx, i);
};
e.prototype.addItemsByData = function(t, e) {
var i = this;
if (!(t.length <= 0)) if (this._list.frameLoadItv > 0 && this._items.length <= 0) {
var r = t.length, n = 0, o = function() {
if (n >= r) {
i.unschedule(o);
i._list.frameLoadCb && i._list.frameLoadCb();
i.recycleItemOutView(e);
c2f.event.emit(s.C2FEnum.ExtEvent.VirtualListFillCmpl);
} else {
var a = t[n];
i.addOneItem(a, e);
n += 1;
}
};
this.schedule(o, this._list.frameLoadItv);
} else {
for (var a = 0, c = t; a < c.length; a++) {
var l = c[a];
this.addOneItem(l, e);
}
this.recycleItemOutView(e);
c2f.event.emit(s.C2FEnum.ExtEvent.VirtualListFillCmpl);
}
};
e.prototype.recycleItemOutView = function(t) {
for (var e = t.length - 1; e >= 0; e--) this.putActivatedItemByIndex(t[e]);
};
e.prototype.checkViewItem = function() {
var t = [], e = [];
if (this.layout.type === cc.Layout.Type.VERTICAL) for (var i = 0; i < this._items.length; i++) (r = this._items[i].getBoundingBox()).yMin + this.node.y <= this._viewEdge.yMax && r.yMax + this.node.y >= this._viewEdge.yMin ? t.push(i) : e.push(i); else if (this.layout.type === cc.Layout.Type.HORIZONTAL) for (i = 0; i < this._items.length; i++) (r = this._items[i].getBoundingBox()).xMin + this.node.x <= this._viewEdge.xMax && r.xMax + this.node.x >= this._viewEdge.xMin ? t.push(i) : e.push(i); else for (i = 0; i < this._items.length; i++) {
var r;
(r = this._items[i].getBoundingBox()).xMin + this.node.x <= this._viewEdge.xMax && r.xMax + this.node.x >= this._viewEdge.xMin && r.yMin + this.node.y <= this._viewEdge.yMax && r.yMax + this.node.y >= this._viewEdge.yMin ? t.push(i) : e.push(i);
}
return {
inView: t,
outView: e
};
};
e.prototype.setItem = function(t, e, i) {
var r = this._items[i];
r.position = t;
var n = r.getComponent(u.default);
n.dataIdx = e;
n.args = this._list.argsArr[e];
n.onRefresh(n.args);
if (this._list.others.length > 0) {
var o = [];
this._otherItemsArr.forEach(function(e) {
e[i].position = t;
o.push(e[i]);
});
n.others = o;
n.onRefreshOthers.apply(n, n.others);
}
};
e.prototype.addItemNode = function(t) {
var e = this;
void 0 === t && (t = !0);
var i = null;
if (this._itemPool.length > 0) {
(i = this._itemPool.pop()).opacity = 255;
this._items.push(i);
this._otherItemPoolArr.forEach(function(t, i) {
var r = t.pop();
r.opacity = 255;
e._otherItemsArr[i].push(r);
});
} else {
(i = this._list.main.templateType === l.TemplateType.PREFAB ? c2f.utils.view.instantiateMVCPrefab(this._list.main.templatePrefab, this.node) : c2f.res.instantiate(this._list.main.templateNode, this.node)).getComponent(u.default) || i.addComponent(u.default);
this.node.addChild(i);
if (t) {
i.opacity = 255;
this._items.push(i);
} else this.putItemNode(i);
var r = i.children.slice(0);
this._list.others.forEach(function(i, n) {
var o = null;
switch (i.templateType) {
case c.GroupSource.NODE:
o = c2f.res.instantiate(i.templateNode, e.node);
break;

case c.GroupSource.PREFAB:
o = c2f.utils.view.instantiateMVCPrefab(i.templatePrefab, e.node);
break;

case c.GroupSource.MAIN_ITEM_CHILD:
if (!c2f.utils.math.inRange(0, r.length - 1, i.templateChild)) {
cc.error("[VirtualLayout.addItemNode] error e.templateChild: " + i.templateChild);
return;
}
(o = r[i.templateChild]).removeFromParent();
break;

default:
cc.error("[VirtualLayout.addItemNode] error e.templateType: " + i.templateType);
return;
}
i.content.addChild(o);
if (t) {
o.opacity = 255;
e._otherItemsArr[n].push(o);
} else e.putItemNode(o, !0, n);
});
}
return this._items.length - 1;
};
e.prototype.putItemNode = function(t, e, i) {
void 0 === e && (e = !1);
void 0 === i && (i = 0);
t.opacity = 0;
t.setPosition(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
if (e) this._otherItemPoolArr[i].push(t); else {
t.getComponent(u.default).onReset();
this._itemPool.push(t);
}
};
e.prototype.putActivatedItemByIndex = function(t) {
var e = this;
this.putItemNode(this._items[t]);
this._otherItemsArr.forEach(function(i, r) {
e.putItemNode(i[t], !0, r);
});
this._items.splice(t, 1);
this._otherItemsArr.forEach(function(e) {
e.splice(t, 1);
});
};
e.prototype.convertToParentPos = function(t, e) {
return t.add(e.position);
};
e.prototype.convertToChildPos = function(t, e) {
return t.sub(e.position);
};
e.prototype.getNodeEdgeRect = function(t) {
return cc.rect(-t.width * t.anchorX, -t.height * t.anchorY, t.width, t.height);
};
e.prototype.calcItemSizeUnfixed = function(t) {
var e = this._list.argsArr[t];
return e.hasOwnProperty("cellHeight") ? cc.size(0, e.cellHeight) : this._list.calcItemSize ? this._list.calcItemSize(this._list.argsArr[t]) : this._fixedSize;
};
e.prototype.onPositionChanged = function() {
this._list.scrollView._outOfBoundaryAmountDirty = !0;
this._viewDirty = !0;
this._posDirty = !0;
};
e.prototype.onViewSizeChanged = function() {
this._viewEdge = this.getNodeEdgeRect(this._view);
};
e.prototype.getScrollOffset = function(t, e, i) {
t = Math.min(t, this._list.argsArr.length - 1);
return this._list.isFixedSize ? this.getScrollOffsetFixed(t, e, i) : this.getScrollOffsetUnfixed(t, e, i);
};
e.prototype.getScrollOffsetFixed = function(t, e, i) {
var r, n, o = this.getNodeEdgeRect(this.node);
if (this.layout.type === cc.Layout.Type.VERTICAL) {
this.layout.verticalDirection === cc.Layout.VerticalDirection.TOP_TO_BOTTOM ? n = o.yMax - (this.layout.top + t * this.layout.spacingY + this._fixedSize.height * t) - this._fixedSize.height : (n = o.yMin + this.layout.bottom + t * this.layout.spacingY + this._fixedSize.height * t, 
this._fixedSize.height);
var s = this._viewEdge.xMin - (o.xMin + this.node.x), a = o.yMax - (this._fixedSize.height * e.y + n) - (1 - i.y) * this._viewEdge.height;
return cc.v2(s, a);
}
if (this.layout.type === cc.Layout.Type.HORIZONTAL) {
this.layout.horizontalDirection === cc.Layout.HorizontalDirection.RIGHT_TO_LEFT ? r = o.xMax - (this.layout.right + t * this.layout.spacingX + this._fixedSize.width * t) - this._fixedSize.width : (r = o.xMin + this.layout.left + t * this.layout.spacingX + this._fixedSize.width * t, 
this._fixedSize.width);
s = this._fixedSize.width * e.x + r - o.xMin - i.x * this._viewEdge.width, a = o.yMax - (this._viewEdge.yMax - this.node.y);
return cc.v2(s, a);
}
var c = 0, l = 0;
if (this.layout.startAxis === cc.Layout.AxisDirection.HORIZONTAL) {
var u = Math.floor((this.node.width - this.layout.left - this.layout.right + this.layout.spacingX) / (this._fixedSize.width + this.layout.spacingX));
u = Math.max(u, 1);
c = Math.floor(t / u);
l = t % u;
} else {
u = Math.floor((this.node.height - this.layout.top - this.layout.bottom + this.layout.spacingY) / (this._fixedSize.height + this.layout.spacingY));
c = t % (u = Math.max(u, 1));
l = Math.floor(t / u);
}
this.layout.verticalDirection === cc.Layout.VerticalDirection.TOP_TO_BOTTOM ? n = o.yMax - (this.layout.top + c * this.layout.spacingY + this._fixedSize.height * c) - this._fixedSize.height : (n = o.yMin + this.layout.bottom + c * this.layout.spacingY + this._fixedSize.height * c, 
this._fixedSize.height);
this.layout.horizontalDirection === cc.Layout.HorizontalDirection.RIGHT_TO_LEFT ? r = o.xMax - (this.layout.right + l * this.layout.spacingX + this._fixedSize.width * l) - this._fixedSize.width : (r = o.xMin + this.layout.left + l * this.layout.spacingX + this._fixedSize.width * l, 
this._fixedSize.width);
s = this._fixedSize.width * e.x + r - o.xMin - i.x * this._viewEdge.width, a = o.yMax - (this._fixedSize.height * e.y + n) - (1 - i.y) * this._viewEdge.height;
return cc.v2(s, a);
};
e.prototype.getScrollOffsetUnfixed = function(t, e, i) {
var r, n, o = this.getNodeEdgeRect(this.node), s = this.calcItemSizeUnfixed(t);
if (this.layout.type === cc.Layout.Type.VERTICAL) {
for (var a = 0, c = 0; c < t; c++) a += this.calcItemSizeUnfixed(c).height;
this.layout.verticalDirection === cc.Layout.VerticalDirection.TOP_TO_BOTTOM ? n = o.yMax - (this.layout.top + t * this.layout.spacingY + a) - s.height : (n = o.yMin + this.layout.bottom + t * this.layout.spacingY + a, 
s.height);
var l = this._viewEdge.xMin - (o.xMin + this.node.x), u = o.yMax - (s.height * e.y + n) - (1 - i.y) * this._viewEdge.height;
return cc.v2(l, u);
}
if (this.layout.type === cc.Layout.Type.HORIZONTAL) {
var h = 0;
for (c = 0; c < t; c++) h += this.calcItemSizeUnfixed(c).width;
this.layout.horizontalDirection === cc.Layout.HorizontalDirection.RIGHT_TO_LEFT ? r = o.xMax - (this.layout.right + t * this.layout.spacingX + h) - s.width : (r = o.xMin + this.layout.left + t * this.layout.spacingX + h, 
s.width);
l = s.width * e.x + r - o.xMin - i.x * this._viewEdge.width, u = o.yMax - (this._viewEdge.yMax - this.node.y);
return cc.v2(l, u);
}
return null;
};
e.prototype.rearrange = function(t) {
var e = this;
void 0 === t && (t = !0);
this._sizeDirty = !0;
this._viewDirty = !0;
if (t) {
this._items.forEach(function(t, i) {
e.putItemNode(t);
e._otherItemsArr.forEach(function(t, r) {
e.putItemNode(t[i], !0, r);
});
});
this._items.length = 0;
this._otherItemsArr.forEach(function(t) {
t.length = 0;
});
}
this.unscheduleAllCallbacks();
};
e.prototype.refreshAllItems = function() {
var t = this;
this._items.forEach(function(e) {
var i = e.getComponent(u.default);
i.onRefresh(i.args);
t._list.others.length > 0 && i.onRefreshOthers.apply(i, i.others);
});
};
e.prototype.resetAllItemData = function() {
var t = this;
this._items.forEach(function(e) {
var i = e.getComponent(u.default), r = i.dataIdx;
i.args = t._list.argsArr[r];
i.onRefresh(i.args);
t._list.others.length > 0 && i.onRefreshOthers.apply(i, i.others);
});
this._list.frameLoadCb && this._list.frameLoadCb();
};
e.prototype.findIdxIsInView = function(t) {
for (var e = !1, i = 0, r = this._items; i < r.length; i++) if (t == r[i].getComponent(u.default).dataIdx) {
e = !0;
break;
}
return e;
};
e.prototype.findIdxItemPosition = function(t) {
for (var e, i = 0, r = this._items; i < r.length; i++) {
var n = r[i];
if (t == n.getComponent(u.default).dataIdx) {
e = n;
break;
}
}
return e;
};
e.prototype.findFirstItemById = function(t) {
for (var e, i = 0, r = this._items; i < r.length; i++) {
var n = r[i], o = n.getComponent(u.default);
if (o && o.args && t == o.args.id) {
e = n;
break;
}
}
return e;
};
o([ p({
type: a.LayoutProperty
}) ], e.prototype, "layout", void 0);
return o([ f, d ], e);
}(cc.Component);
i.default = y;
cc._RF.pop();
}, {
"../../../define/C2FEnum": "C2FEnum",
"./LayoutProperty": "LayoutProperty",
"./VLItemGroup": "VLItemGroup",
"./VLTemplate": "VLTemplate",
"./VirtualItem": "VirtualItem"
} ],
VirtualList: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "8815fg/3FJEjohj/PrC9n21", "VirtualList");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
t("../../../utils/EditorTool");
var s = t("./VLItemGroup"), a = t("./VLTemplate"), c = t("./VirtualLayout"), l = cc._decorator, u = l.ccclass, h = l.property, f = l.requireComponent, p = l.executeInEditMode, d = l.disallowMultiple, y = l.menu, g = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.main = null;
e.others = [];
e.isFixedSize = !0;
e.emptyTip = null;
e.frameLoadItv = 0;
e.isSubling = !1;
e._scrollView = null;
e._layout = null;
e._argsArr = [];
e._frameLoadCb = null;
e._calcItemSize = null;
return e;
}
Object.defineProperty(e.prototype, "scrollView", {
get: function() {
this._scrollView || (this._scrollView = this.getComponent(cc.ScrollView));
return this._scrollView;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "layout", {
get: function() {
this._layout || (this._layout = this.scrollView.content.getComponent(c.default));
return this._layout;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "argsArr", {
get: function() {
return this._argsArr;
},
set: function(t) {
this._argsArr = t;
this.layout.rearrange();
this.listCntChanged();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "frameLoadCb", {
get: function() {
return this._frameLoadCb;
},
set: function(t) {
this._frameLoadCb = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "calcItemSize", {
get: function() {
return this._calcItemSize;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
(this.main.templatePrefab || this.main.templateNode) && this.initList();
};
e.prototype.onDestroy = function() {
this.main = null;
this.others = [];
this.emptyTip = null;
this._scrollView = null;
this._layout = null;
this._argsArr = [];
this.frameLoadCb = null;
};
e.prototype.initList = function() {
this.layout && this.layout.onInit(this);
};
e.prototype.resetInEditor = function() {
this.runEditor();
};
e.prototype.onFocusInEditor = function() {
this.main && this.main.resetMainItemChild();
};
e.prototype.runEditor = function() {};
e.prototype.listCntChanged = function() {
var t = this.argsArr.length;
this.emptyTip && (this.emptyTip.active = t <= 0);
};
e.prototype.scrollItemToView = function(t, e, i, r, n) {
void 0 === e && (e = cc.v2());
void 0 === i && (i = cc.v2());
void 0 === r && (r = 0);
void 0 === n && (n = !0);
this.scrollView.scrollToOffset(this.layout.getScrollOffset(t, e, i), r, n);
};
e.prototype.scrollToTop = function(t, e) {
void 0 === t && (t = 0);
void 0 === e && (e = !0);
this.scrollView.scrollToTop(t, e);
};
e.prototype.scrollToBottom = function(t, e) {
void 0 === t && (t = 0);
void 0 === e && (e = !0);
this.scrollView.scrollToBottom(t, e);
};
e.prototype.scrollToLeft = function(t, e) {
void 0 === t && (t = 0);
void 0 === e && (e = !0);
this.scrollView.scrollToLeft(t, e);
};
e.prototype.scrollToRight = function(t, e) {
void 0 === t && (t = 0);
void 0 === e && (e = !0);
this.scrollView.scrollToRight(t, e);
};
e.prototype.setCalcItemSize = function(t) {
this._calcItemSize = t;
};
e.prototype.forceUpdate = function() {
this.layout.forceUpdate();
};
e.prototype.refreshAllItems = function() {
this.layout.refreshAllItems();
};
e.prototype.refreshAllWithData = function(t) {
var e = this._argsArr.length;
if (e > 0 && e == t.length && this.isFixedSize) {
this._argsArr = t;
this.layout.resetAllItemData();
this.listCntChanged();
} else this.argsArr = t;
};
e.prototype.reset = function(t, e) {
if (c2f.utils.math.inRange(0, this._argsArr.length - 1, t)) {
this._argsArr[t] = e;
this.layout.rearrange();
}
};
e.prototype.push = function(t) {
var e = this._argsArr.push(t);
this.layout.rearrange(!1);
this.listCntChanged();
return e;
};
e.prototype.pop = function() {
var t = this._argsArr.pop();
this.layout.rearrange();
this.listCntChanged();
return t;
};
e.prototype.unshift = function(t) {
var e = this._argsArr.unshift(t);
this.layout.rearrange();
this.listCntChanged();
return e;
};
e.prototype.shift = function() {
var t = this._argsArr.shift();
this.layout.rearrange();
this.listCntChanged();
return t;
};
e.prototype.splice = function(t, e, i) {
var r;
if (void 0 === e) r = this._argsArr.splice(t); else if (void 0 === i || 0 === i.length) r = this._argsArr.splice(t, e); else {
r = this._argsArr.splice(t, e);
for (var n = 0; n < i.length; n++) this._argsArr.splice(t + n, 0, i[n]);
}
this.layout.rearrange();
this.listCntChanged();
return r;
};
e.prototype.sort = function(t) {
var e = this._argsArr.sort(t);
this.layout.rearrange();
return e;
};
e.prototype.filter = function(t) {
this._argsArr = this._argsArr.filter(t);
this.layout.rearrange();
this.listCntChanged();
return this._argsArr;
};
e.prototype.scrollIsInBottom = function() {
var t = !1, e = this._argsArr.length - 1, i = this.layout.findIdxIsInView(e);
this.canScroll() && (t = i);
return t;
};
e.prototype.canScroll = function() {
var t = this.scrollView.content;
return this.scrollView.vertical ? t.height >= t.parent.height : t.width >= t.parent.width;
};
o([ h({
type: a.VLTemplate,
tooltip: !1
}) ], e.prototype, "main", void 0);
o([ h({
type: s.VLItemGroup,
tooltip: !1
}) ], e.prototype, "others", void 0);
o([ h({
tooltip: !1
}) ], e.prototype, "isFixedSize", void 0);
o([ h(cc.Node) ], e.prototype, "emptyTip", void 0);
o([ h({
tooltip: !1
}) ], e.prototype, "frameLoadItv", void 0);
o([ h({
tooltip: !1
}) ], e.prototype, "isSubling", void 0);
return o([ u, d, p, f(cc.ScrollView), y("c2f/UI/VirtualList") ], e);
}(cc.Component);
i.default = g;
cc._RF.pop();
}, {
"../../../utils/EditorTool": "EditorTool",
"./VLItemGroup": "VLItemGroup",
"./VLTemplate": "VLTemplate",
"./VirtualLayout": "VirtualLayout"
} ],
WSByProtobuf: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "b543fBqDRROQ45IvhDtiYzs", "WSByProtobuf");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
i.WSByProtobuf = void 0;
t("../../../resources/proto/msgid");
var o = t("../../../resources/proto/msgname"), s = t("./WebService"), a = function(t) {
n(e, t);
function e() {
var e = t.call(this) || this;
e.messages = new Uint8Array(0);
e.root = void 0;
return e;
}
e.prototype.setRoot = function(t) {
this.root = t;
};
e.prototype.setEncryptCb = function(t) {
this.encryptCb = t;
};
e.prototype.setDecryptCb = function(t) {
this.decryptCb = t;
};
e.prototype.onMessage = function(t) {
var e = new Uint8Array(t.data), i = new Uint8Array(this.messages.length + e.length);
i.set(this.messages, 0);
i.set(e, this.messages.length);
this.messages = i;
for (;this.messages.length >= 8; ) {
var r = new DataView(this.messages.buffer, this.messages.byteOffset, this.messages.byteLength), n = r.getUint32(0, !1), s = r.getUint32(4, !1);
if (n > this.messages.length) break;
var a = this.messages.subarray(8, n), c = o.msgname[s];
if (!c) {
cc.log("can not find op:", s);
return;
}
var l = "msg." + c, u = this.root.build(l);
if (!u) {
cc.log("can not find proto:", l);
return;
}
var h = u.decode(a);
this.messageCb && this.messageCb(s, h);
this.messages = this.messages.subarray(n);
}
};
e.prototype.tcpSend = function(t, e) {
if (this.state !== s.SocketState.Connected) return !1;
if (!this.socket || this.socket.readyState != WebSocket.OPEN) return !1;
var i = o.msgname[t];
if (!i) {
cc.warn("don't find msg for id:" + t);
return !1;
}
var r = "msg." + i, n = new (this.root.build(r))();
for (var a in e) e.hasOwnProperty(a) && n.set(a, e[a], !1);
var c = new Uint8Array(n.encode().toBuffer()), l = new ArrayBuffer(c.byteLength + 8), u = new DataView(l);
u.setUint32(0, c.byteLength + 8, !1);
u.setUint32(4, t, !1);
for (var h = 0, f = c.byteLength; h < f; h++) u.setUint8(h + 8, c[h]);
var p = new Uint8Array(l);
this.encryptCb && this.encryptCb(p);
this.socket.send(p.buffer);
return !0;
};
return e;
}(s.WebService);
i.WSByProtobuf = a;
cc._RF.pop();
}, {
"../../../resources/proto/msgid": void 0,
"../../../resources/proto/msgname": void 0,
"./WebService": "WebService"
} ],
WaterWaveScreen: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "e7fa9vj+BxPToLhte/sRtiZ", "WaterWaveScreen");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
return o > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("../../define/C2FConst"), a = cc._decorator, c = a.ccclass, l = a.menu, u = (a.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bg = null;
e.texture2View = null;
e.waterMat = null;
e.waveOffset = 0;
e.duration = null;
e.offsetStep = null;
e.elapsed = 0;
return e;
}
e.prototype.setDuration = function(t) {
this.duration = t;
this.elapsed = 0;
this.offsetStep = 2 / this.duration * (1 / cc.game.getFrameRate());
this.initMaterialPa();
};
e.prototype.createBGSprite = function(t) {
var e = new cc.Node();
e.scaleY = -1;
e.parent = this.node;
e.width = cc.visibleRect.width;
e.height = cc.visibleRect.height;
var i = e.addComponent(cc.Sprite);
i.sizeMode = cc.Sprite.SizeMode.CUSTOM;
e.active = !1;
i.setMaterial(0, t);
return i;
};
e.prototype.initMaterialPa = function() {
if (this.waterMat) {
this.waterMat.setProperty("center", [ .5, .5 ]);
this.waveOffset = 0;
}
};
e.prototype.initUI = function() {
var t = this;
this.bg || c2f.res.load(s.C2FConst.fwBundleName, "commonRes/shader/materials/waterWave", cc.Material, function(e, i) {
t.waterMat = i;
t.bg = t.createBGSprite(i);
t.initMaterialPa();
});
};
e.prototype.onLoad = function() {
this.initUI();
};
e.prototype.update = function(t) {
if (this.bg) {
this.elapsed > this.duration && this.node.destroy();
this.copyCameraToSprite();
this.elapsed += t;
this.waveOffset += this.offsetStep;
this.waterMat.setProperty("wave_offset", this.waveOffset);
}
};
e.prototype.copyCameraToSprite = function() {
if (!this.texture2View) {
this.texture2View = new cc.RenderTexture();
this.texture2View.initWithSize(cc.visibleRect.width, cc.visibleRect.height, cc.RenderTexture.DepthStencilFormat.RB_FMT_S8);
}
this.bg.node.active = !1;
var t = cc.Canvas.instance.node.getChildByName("Camera").getComponent(cc.Camera);
if (t) {
t.targetTexture = this.texture2View;
t.render(null);
t.targetTexture = null;
}
this.bg.node.active = !0;
var e = new cc.SpriteFrame(this.texture2View);
this.bg.spriteFrame = e;
};
return o([ c, l("c2f/common/WaterWaveScreen") ], e);
}(cc.Component));
i.default = u;
cc._RF.pop();
}, {
"../../define/C2FConst": "C2FConst"
} ],
WebQueryConfig: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "8bb21IROaBFTbh700IUA1Yf", "WebQueryConfig");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.WebQueryConfig = void 0;
var r = t("../define/C2FConst"), n = function() {
function t() {
this._data = null;
cc.sys.isBrowser ? this._data = this.parseUrl() : this._data = {};
}
Object.defineProperty(t.prototype, "debug", {
get: function() {
return this._data.debug;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "username", {
get: function() {
return this._data.username;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "lang", {
get: function() {
return this._data.lang || r.C2FConst.LanguageKey.zh;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "data", {
get: function() {
return this._data;
},
enumerable: !1,
configurable: !0
});
t.prototype.parseUrl = function() {
if ("object" != typeof window) return {};
if (!window.document) return {};
var t = window.document.location.href.toString().split("?");
if ("string" == typeof t[1]) {
for (var e = {}, i = 0, r = (t = t[1].split("&")).length; i < r; ++i) {
var n = t[i], o = n.indexOf("=");
if (!(o < 0)) {
var s = n.substring(0, o), a = n.substring(o + 1);
e[decodeURIComponent(s)] = a && decodeURIComponent(a);
}
}
return e;
}
return {};
};
return t;
}();
i.WebQueryConfig = n;
cc._RF.pop();
}, {
"../define/C2FConst": "C2FConst"
} ],
WebService: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "bb0c2Z+BUJGbIJr86Nn2BgE", "WebService");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.WebService = i.SocketState = void 0;
var r;
(function(t) {
t[t.Connecting = 0] = "Connecting";
t[t.ConnectTimeOut = 1] = "ConnectTimeOut";
t[t.Connected = 2] = "Connected";
t[t.Error = 3] = "Error";
t[t.ReconnectSuc = 4] = "ReconnectSuc";
})(r = i.SocketState || (i.SocketState = {}));
var n = function() {
function t() {
this.socket = null;
this.state = r.Error;
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
cc.log("Send Text WS was opened.");
this.reconnectTimes = 0;
this.stateChanged(r.Connected);
};
t.prototype.tcpSend = function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
};
t.prototype.onMessage = function() {};
t.prototype.onError = function(t) {
cc.log("WebSocket fired an error");
var e = t.currentTarget || t.target;
this.socket && this.socket.readyState != WebSocket.CLOSED && this.url && e && e.url == this.url && this.stateChanged(r.Error);
};
t.prototype.onClosed = function(t) {
cc.log("WebSocket instance closed.");
var e = t.currentTarget || t.target;
if (this.url && e && e.url == this.url) {
e && cc.log("WebSocket instance closed:" + e.readyState);
this.stateChanged(r.ConnectTimeOut);
this.reconnect(this.url);
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
this.url && (this.reconnectTimes > 5 ? this.stateChanged(r.Error) : this.reconnectTimer = setTimeout(function() {
e.reconnectTimer = null;
if (e.url) {
e.reconnectTimes++;
e.tcpConnet(t, function() {
e.socket.readyState == WebSocket.OPEN && e.url && e.wsEventCb && e.wsEventCb(r.ReconnectSuc);
});
}
}, 6e3));
};
t.prototype.stateChanged = function(t) {
this.state = t;
if (t === r.Connecting) ; else {
var e = "";
switch (t) {
case r.ConnectTimeOut:
e = "ConnectTimeOut";
break;

case r.Connected:
e = "Connected";
break;

case r.Error:
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
};
t.prototype.clearReconnectTimer = function() {
if (this.reconnectTimer) {
clearTimeout(this.reconnectTimer);
this.reconnectTimes = null;
}
};
return t;
}();
i.WebService = n;
cc._RF.pop();
}, {} ],
_IRedDotDeclare: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "41145DESWhBMbTx50Xx4o4Z", "_IRedDotDeclare");
Object.defineProperty(i, "__esModule", {
value: !0
});
cc._RF.pop();
}, {} ],
_c2f: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "1f686uRQeZOu6skTGAejQKG", "_c2f");
Object.defineProperty(i, "__esModule", {
value: !0
});
t("./C2F");
t("./core/log/Logger");
t("./core/loader/ResLoader");
t("./core/event/EventManager");
t("./core/language/LanguageManager");
t("./utils/HackUtil");
t("./utils/StringUtil");
t("./utils/ArrayUtil");
t("./utils/DateUtil");
t("./utils/MathUtil");
t("./utils/ImageUtil");
t("./utils/JsonUtil");
t("./utils/ObjectUtil");
t("./utils/PlatformUtil");
t("./utils/RegexUtil");
t("./utils/SpineUtil");
t("./utils/Vec3Util");
t("./utils/NodeUtil");
t("./utils/ViewUtil");
t("./utils/EncryptUtil");
t("./core/storage/StorageMgr");
t("./config/C2FConfig");
t("./core/random/RandomManager");
t("./core/audio/AudioManager");
cc._RF.pop();
}, {
"./C2F": "C2F",
"./config/C2FConfig": "C2FConfig",
"./core/audio/AudioManager": "AudioManager",
"./core/event/EventManager": "EventManager",
"./core/language/LanguageManager": "LanguageManager",
"./core/loader/ResLoader": "ResLoader",
"./core/log/Logger": "Logger",
"./core/random/RandomManager": "RandomManager",
"./core/storage/StorageMgr": "StorageMgr",
"./utils/ArrayUtil": "ArrayUtil",
"./utils/DateUtil": "DateUtil",
"./utils/EncryptUtil": "EncryptUtil",
"./utils/HackUtil": "HackUtil",
"./utils/ImageUtil": "ImageUtil",
"./utils/JsonUtil": "JsonUtil",
"./utils/MathUtil": "MathUtil",
"./utils/NodeUtil": "NodeUtil",
"./utils/ObjectUtil": "ObjectUtil",
"./utils/PlatformUtil": "PlatformUtil",
"./utils/RegexUtil": "RegexUtil",
"./utils/SpineUtil": "SpineUtil",
"./utils/StringUtil": "StringUtil",
"./utils/Vec3Util": "Vec3Util",
"./utils/ViewUtil": "ViewUtil"
} ],
_process: [ function(t, e) {
"use strict";
cc._RF.push(e, "eda86+gdZ5JVY6zFPM6KLLe", "_process");
e.exports = {
Nooooon: 0
};
cc._RF.pop();
}, {} ],
_redDot: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "90a7dI5C+tIXa1Nk/7raUVI", "_redDot");
Object.defineProperty(i, "__esModule", {
value: !0
});
t("./_IRedDotDeclare");
t("./RedDot/");
t("./RedDotComp");
t("./RedDotMgr");
cc._RF.pop();
}, {
"./RedDot/": "RedDot",
"./RedDotComp": "RedDotComp",
"./RedDotMgr": "RedDotMgr",
"./_IRedDotDeclare": "_IRedDotDeclare"
} ],
bytebuffer: [ function(t, e) {
"use strict";
cc._RF.push(e, "a256bYJhZFN2pzpBH3VXShr", "bytebuffer");
i = function(t) {
var e = function t(e, i, n) {
"undefined" == typeof e && (e = t.DEFAULT_CAPACITY);
"undefined" == typeof i && (i = t.DEFAULT_ENDIAN);
"undefined" == typeof n && (n = t.DEFAULT_NOASSERT);
if (!n) {
if ((e |= 0) < 0) throw RangeError("Illegal capacity");
i = !!i;
n = !!n;
}
this.buffer = 0 === e ? r : new ArrayBuffer(e);
this.view = 0 === e ? null : new Uint8Array(this.buffer);
this.offset = 0;
this.markedOffset = -1;
this.limit = e;
this.littleEndian = i;
this.noAssert = n;
};
e.VERSION = "5.0.1";
e.LITTLE_ENDIAN = !0;
e.BIG_ENDIAN = !1;
e.DEFAULT_CAPACITY = 16;
e.DEFAULT_ENDIAN = e.BIG_ENDIAN;
e.DEFAULT_NOASSERT = !1;
e.Long = t || null;
var i = e.prototype;
i.__isByteBuffer__;
Object.defineProperty(i, "__isByteBuffer__", {
value: !0,
enumerable: !1,
configurable: !1
});
var r = new ArrayBuffer(0), n = String.fromCharCode;
function o(t) {
var e = 0;
return function() {
return e < t.length ? t.charCodeAt(e++) : null;
};
}
function s() {
var t = [], e = [];
return function() {
if (0 === arguments.length) return e.join("") + n.apply(String, t);
t.length + arguments.length > 1024 && (e.push(n.apply(String, t)), t.length = 0);
Array.prototype.push.apply(t, arguments);
};
}
e.accessor = function() {
return Uint8Array;
};
e.allocate = function(t, i, r) {
return new e(t, i, r);
};
e.concat = function(t, i, r, n) {
if ("boolean" == typeof i || "string" != typeof i) {
n = r;
r = i;
i = void 0;
}
for (var o, s = 0, a = 0, c = t.length; a < c; ++a) {
e.isByteBuffer(t[a]) || (t[a] = e.wrap(t[a], i));
(o = t[a].limit - t[a].offset) > 0 && (s += o);
}
if (0 === s) return new e(0, r, n);
var l, u = new e(s, r, n);
a = 0;
for (;a < c; ) if (!((o = (l = t[a++]).limit - l.offset) <= 0)) {
u.view.set(l.view.subarray(l.offset, l.limit), u.offset);
u.offset += o;
}
u.limit = u.offset;
u.offset = 0;
return u;
};
e.isByteBuffer = function(t) {
return !0 === (t && t.__isByteBuffer__);
};
e.type = function() {
return ArrayBuffer;
};
e.wrap = function(t, r, n, o) {
if ("string" != typeof r) {
o = n;
n = r;
r = void 0;
}
if ("string" == typeof t) {
"undefined" == typeof r && (r = "utf8");
switch (r) {
case "base64":
return e.fromBase64(t, n);

case "hex":
return e.fromHex(t, n);

case "binary":
return e.fromBinary(t, n);

case "utf8":
return e.fromUTF8(t, n);

case "debug":
return e.fromDebug(t, n);

default:
throw Error("Unsupported encoding: " + r);
}
}
if (null === t || "object" != typeof t) throw TypeError("Illegal buffer");
var s;
if (e.isByteBuffer(t)) {
(s = i.clone.call(t)).markedOffset = -1;
return s;
}
if (t instanceof Uint8Array) {
s = new e(0, n, o);
if (t.length > 0) {
s.buffer = t.buffer;
s.offset = t.byteOffset;
s.limit = t.byteOffset + t.byteLength;
s.view = new Uint8Array(t.buffer);
}
} else if (t instanceof ArrayBuffer) {
s = new e(0, n, o);
if (t.byteLength > 0) {
s.buffer = t;
s.offset = 0;
s.limit = t.byteLength;
s.view = t.byteLength > 0 ? new Uint8Array(t) : null;
}
} else {
if ("[object Array]" !== Object.prototype.toString.call(t)) throw TypeError("Illegal buffer");
(s = new e(t.length, n, o)).limit = t.length;
for (var a = 0; a < t.length; ++a) s.view[a] = t[a];
}
return s;
};
i.writeBitSet = function(t, e) {
var i = "undefined" == typeof e;
i && (e = this.offset);
if (!this.noAssert) {
if (!(t instanceof Array)) throw TypeError("Illegal BitSet: Not an array");
if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
}
var r, n = e, o = t.length, s = o >> 3, a = 0;
e += this.writeVarint32(o, e);
for (;s--; ) {
r = 1 & !!t[a++] | (1 & !!t[a++]) << 1 | (1 & !!t[a++]) << 2 | (1 & !!t[a++]) << 3 | (1 & !!t[a++]) << 4 | (1 & !!t[a++]) << 5 | (1 & !!t[a++]) << 6 | (1 & !!t[a++]) << 7;
this.writeByte(r, e++);
}
if (a < o) {
var c = 0;
r = 0;
for (;a < o; ) r |= (1 & !!t[a++]) << c++;
this.writeByte(r, e++);
}
if (i) {
this.offset = e;
return this;
}
return e - n;
};
i.readBitSet = function(t) {
var e = "undefined" == typeof t;
e && (t = this.offset);
var i, r = this.readVarint32(t), n = r.value, o = n >> 3, s = 0, a = [];
t += r.length;
for (;o--; ) {
i = this.readByte(t++);
a[s++] = !!(1 & i);
a[s++] = !!(2 & i);
a[s++] = !!(4 & i);
a[s++] = !!(8 & i);
a[s++] = !!(16 & i);
a[s++] = !!(32 & i);
a[s++] = !!(64 & i);
a[s++] = !!(128 & i);
}
if (s < n) {
var c = 0;
i = this.readByte(t++);
for (;s < n; ) a[s++] = !!(i >> c++ & 1);
}
e && (this.offset = t);
return a;
};
i.readBytes = function(t, e) {
var i = "undefined" == typeof e;
i && (e = this.offset);
if (!this.noAssert) {
if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
if ((e >>>= 0) < 0 || e + t > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+" + t + ") <= " + this.buffer.byteLength);
}
var r = this.slice(e, e + t);
i && (this.offset += t);
return r;
};
i.writeInt8 = function(t, e) {
var i = "undefined" == typeof e;
i && (e = this.offset);
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
t |= 0;
if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
}
e += 1;
var r = this.buffer.byteLength;
e > r && this.resize((r *= 2) > e ? r : e);
e -= 1;
this.view[e] = t;
i && (this.offset += 1);
return this;
};
i.writeByte = i.writeInt8;
i.readInt8 = function(t) {
var e = "undefined" == typeof t;
e && (t = this.offset);
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength);
}
var i = this.view[t];
128 == (128 & i) && (i = -(255 - i + 1));
e && (this.offset += 1);
return i;
};
i.readByte = i.readInt8;
i.writeUint8 = function(t, e) {
var i = "undefined" == typeof e;
i && (e = this.offset);
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
t >>>= 0;
if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
}
e += 1;
var r = this.buffer.byteLength;
e > r && this.resize((r *= 2) > e ? r : e);
e -= 1;
this.view[e] = t;
i && (this.offset += 1);
return this;
};
i.writeUInt8 = i.writeUint8;
i.readUint8 = function(t) {
var e = "undefined" == typeof t;
e && (t = this.offset);
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength);
}
var i = this.view[t];
e && (this.offset += 1);
return i;
};
i.readUInt8 = i.readUint8;
i.writeInt16 = function(t, e) {
var i = "undefined" == typeof e;
i && (e = this.offset);
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
t |= 0;
if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
}
e += 2;
var r = this.buffer.byteLength;
e > r && this.resize((r *= 2) > e ? r : e);
e -= 2;
if (this.littleEndian) {
this.view[e + 1] = (65280 & t) >>> 8;
this.view[e] = 255 & t;
} else {
this.view[e] = (65280 & t) >>> 8;
this.view[e + 1] = 255 & t;
}
i && (this.offset += 2);
return this;
};
i.writeShort = i.writeInt16;
i.readInt16 = function(t) {
var e = "undefined" == typeof t;
e && (t = this.offset);
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
if ((t >>>= 0) < 0 || t + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+2) <= " + this.buffer.byteLength);
}
var i = 0;
if (this.littleEndian) {
i = this.view[t];
i |= this.view[t + 1] << 8;
} else {
i = this.view[t] << 8;
i |= this.view[t + 1];
}
32768 == (32768 & i) && (i = -(65535 - i + 1));
e && (this.offset += 2);
return i;
};
i.readShort = i.readInt16;
i.writeUint16 = function(t, e) {
var i = "undefined" == typeof e;
i && (e = this.offset);
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
t >>>= 0;
if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
}
e += 2;
var r = this.buffer.byteLength;
e > r && this.resize((r *= 2) > e ? r : e);
e -= 2;
if (this.littleEndian) {
this.view[e + 1] = (65280 & t) >>> 8;
this.view[e] = 255 & t;
} else {
this.view[e] = (65280 & t) >>> 8;
this.view[e + 1] = 255 & t;
}
i && (this.offset += 2);
return this;
};
i.writeUInt16 = i.writeUint16;
i.readUint16 = function(t) {
var e = "undefined" == typeof t;
e && (t = this.offset);
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
if ((t >>>= 0) < 0 || t + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+2) <= " + this.buffer.byteLength);
}
var i = 0;
if (this.littleEndian) {
i = this.view[t];
i |= this.view[t + 1] << 8;
} else {
i = this.view[t] << 8;
i |= this.view[t + 1];
}
e && (this.offset += 2);
return i;
};
i.readUInt16 = i.readUint16;
i.writeInt32 = function(t, e) {
var i = "undefined" == typeof e;
i && (e = this.offset);
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
t |= 0;
if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
}
e += 4;
var r = this.buffer.byteLength;
e > r && this.resize((r *= 2) > e ? r : e);
e -= 4;
if (this.littleEndian) {
this.view[e + 3] = t >>> 24 & 255;
this.view[e + 2] = t >>> 16 & 255;
this.view[e + 1] = t >>> 8 & 255;
this.view[e] = 255 & t;
} else {
this.view[e] = t >>> 24 & 255;
this.view[e + 1] = t >>> 16 & 255;
this.view[e + 2] = t >>> 8 & 255;
this.view[e + 3] = 255 & t;
}
i && (this.offset += 4);
return this;
};
i.writeInt = i.writeInt32;
i.readInt32 = function(t) {
var e = "undefined" == typeof t;
e && (t = this.offset);
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
if ((t >>>= 0) < 0 || t + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+4) <= " + this.buffer.byteLength);
}
var i = 0;
if (this.littleEndian) {
i = this.view[t + 2] << 16;
i |= this.view[t + 1] << 8;
i |= this.view[t];
i += this.view[t + 3] << 24 >>> 0;
} else {
i = this.view[t + 1] << 16;
i |= this.view[t + 2] << 8;
i |= this.view[t + 3];
i += this.view[t] << 24 >>> 0;
}
i |= 0;
e && (this.offset += 4);
return i;
};
i.readInt = i.readInt32;
i.writeUint32 = function(t, e) {
var i = "undefined" == typeof e;
i && (e = this.offset);
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
t >>>= 0;
if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
}
e += 4;
var r = this.buffer.byteLength;
e > r && this.resize((r *= 2) > e ? r : e);
e -= 4;
if (this.littleEndian) {
this.view[e + 3] = t >>> 24 & 255;
this.view[e + 2] = t >>> 16 & 255;
this.view[e + 1] = t >>> 8 & 255;
this.view[e] = 255 & t;
} else {
this.view[e] = t >>> 24 & 255;
this.view[e + 1] = t >>> 16 & 255;
this.view[e + 2] = t >>> 8 & 255;
this.view[e + 3] = 255 & t;
}
i && (this.offset += 4);
return this;
};
i.writeUInt32 = i.writeUint32;
i.readUint32 = function(t) {
var e = "undefined" == typeof t;
e && (t = this.offset);
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
if ((t >>>= 0) < 0 || t + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+4) <= " + this.buffer.byteLength);
}
var i = 0;
if (this.littleEndian) {
i = this.view[t + 2] << 16;
i |= this.view[t + 1] << 8;
i |= this.view[t];
i += this.view[t + 3] << 24 >>> 0;
} else {
i = this.view[t + 1] << 16;
i |= this.view[t + 2] << 8;
i |= this.view[t + 3];
i += this.view[t] << 24 >>> 0;
}
e && (this.offset += 4);
return i;
};
i.readUInt32 = i.readUint32;
if (t) {
i.writeInt64 = function(e, i) {
var r = "undefined" == typeof i;
r && (i = this.offset);
if (!this.noAssert) {
if ("number" == typeof e) e = t.fromNumber(e); else if ("string" == typeof e) e = t.fromString(e); else if (!(e && e instanceof t)) throw TypeError("Illegal value: " + e + " (not an integer or Long)");
if ("number" != typeof i || i % 1 != 0) throw TypeError("Illegal offset: " + i + " (not an integer)");
if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength);
}
"number" == typeof e ? e = t.fromNumber(e) : "string" == typeof e && (e = t.fromString(e));
i += 8;
var n = this.buffer.byteLength;
i > n && this.resize((n *= 2) > i ? n : i);
i -= 8;
var o = e.low, s = e.high;
if (this.littleEndian) {
this.view[i + 3] = o >>> 24 & 255;
this.view[i + 2] = o >>> 16 & 255;
this.view[i + 1] = o >>> 8 & 255;
this.view[i] = 255 & o;
i += 4;
this.view[i + 3] = s >>> 24 & 255;
this.view[i + 2] = s >>> 16 & 255;
this.view[i + 1] = s >>> 8 & 255;
this.view[i] = 255 & s;
} else {
this.view[i] = s >>> 24 & 255;
this.view[i + 1] = s >>> 16 & 255;
this.view[i + 2] = s >>> 8 & 255;
this.view[i + 3] = 255 & s;
i += 4;
this.view[i] = o >>> 24 & 255;
this.view[i + 1] = o >>> 16 & 255;
this.view[i + 2] = o >>> 8 & 255;
this.view[i + 3] = 255 & o;
}
r && (this.offset += 8);
return this;
};
i.writeLong = i.writeInt64;
i.readInt64 = function(e) {
var i = "undefined" == typeof e;
i && (e = this.offset);
if (!this.noAssert) {
if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
if ((e >>>= 0) < 0 || e + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength);
}
var r = 0, n = 0;
if (this.littleEndian) {
r = this.view[e + 2] << 16;
r |= this.view[e + 1] << 8;
r |= this.view[e];
r += this.view[e + 3] << 24 >>> 0;
e += 4;
n = this.view[e + 2] << 16;
n |= this.view[e + 1] << 8;
n |= this.view[e];
n += this.view[e + 3] << 24 >>> 0;
} else {
n = this.view[e + 1] << 16;
n |= this.view[e + 2] << 8;
n |= this.view[e + 3];
n += this.view[e] << 24 >>> 0;
e += 4;
r = this.view[e + 1] << 16;
r |= this.view[e + 2] << 8;
r |= this.view[e + 3];
r += this.view[e] << 24 >>> 0;
}
var o = new t(r, n, !1).toNumber();
i && (this.offset += 8);
return o;
};
i.readLong = i.readInt64;
i.writeUint64 = function(e, i) {
var r = "undefined" == typeof i;
r && (i = this.offset);
if (!this.noAssert) {
if ("number" == typeof e) e = t.fromNumber(e); else if ("string" == typeof e) e = t.fromString(e); else if (!(e && e instanceof t)) throw TypeError("Illegal value: " + e + " (not an integer or Long)");
if ("number" != typeof i || i % 1 != 0) throw TypeError("Illegal offset: " + i + " (not an integer)");
if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength);
}
"number" == typeof e ? e = t.fromNumber(e) : "string" == typeof e && (e = t.fromString(e));
i += 8;
var n = this.buffer.byteLength;
i > n && this.resize((n *= 2) > i ? n : i);
i -= 8;
var o = e.low, s = e.high;
if (this.littleEndian) {
this.view[i + 3] = o >>> 24 & 255;
this.view[i + 2] = o >>> 16 & 255;
this.view[i + 1] = o >>> 8 & 255;
this.view[i] = 255 & o;
i += 4;
this.view[i + 3] = s >>> 24 & 255;
this.view[i + 2] = s >>> 16 & 255;
this.view[i + 1] = s >>> 8 & 255;
this.view[i] = 255 & s;
} else {
this.view[i] = s >>> 24 & 255;
this.view[i + 1] = s >>> 16 & 255;
this.view[i + 2] = s >>> 8 & 255;
this.view[i + 3] = 255 & s;
i += 4;
this.view[i] = o >>> 24 & 255;
this.view[i + 1] = o >>> 16 & 255;
this.view[i + 2] = o >>> 8 & 255;
this.view[i + 3] = 255 & o;
}
r && (this.offset += 8);
return this;
};
i.writeUInt64 = i.writeUint64;
i.readUint64 = function(e) {
var i = "undefined" == typeof e;
i && (e = this.offset);
if (!this.noAssert) {
if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
if ((e >>>= 0) < 0 || e + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength);
}
var r = 0, n = 0;
if (this.littleEndian) {
r = this.view[e + 2] << 16;
r |= this.view[e + 1] << 8;
r |= this.view[e];
r += this.view[e + 3] << 24 >>> 0;
e += 4;
n = this.view[e + 2] << 16;
n |= this.view[e + 1] << 8;
n |= this.view[e];
n += this.view[e + 3] << 24 >>> 0;
} else {
n = this.view[e + 1] << 16;
n |= this.view[e + 2] << 8;
n |= this.view[e + 3];
n += this.view[e] << 24 >>> 0;
e += 4;
r = this.view[e + 1] << 16;
r |= this.view[e + 2] << 8;
r |= this.view[e + 3];
r += this.view[e] << 24 >>> 0;
}
var o = new t(r, n, !0);
i && (this.offset += 8);
return o;
};
i.readUInt64 = i.readUint64;
}
function a(t, e, i, r, n) {
var o, s, a = 8 * n - r - 1, c = (1 << a) - 1, l = c >> 1, u = -7, h = i ? n - 1 : 0, f = i ? -1 : 1, p = t[e + h];
h += f;
o = p & (1 << -u) - 1;
p >>= -u;
u += a;
for (;u > 0; o = 256 * o + t[e + h], h += f, u -= 8) ;
s = o & (1 << -u) - 1;
o >>= -u;
u += r;
for (;u > 0; s = 256 * s + t[e + h], h += f, u -= 8) ;
if (0 === o) o = 1 - l; else {
if (o === c) return s ? NaN : Infinity * (p ? -1 : 1);
s += Math.pow(2, r);
o -= l;
}
return (p ? -1 : 1) * s * Math.pow(2, o - r);
}
function c(t, e, i, r, n, o) {
var s, a, c, l = 8 * o - n - 1, u = (1 << l) - 1, h = u >> 1, f = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = r ? 0 : o - 1, d = r ? 1 : -1, y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
e = Math.abs(e);
if (isNaN(e) || Infinity === e) {
a = isNaN(e) ? 1 : 0;
s = u;
} else {
s = Math.floor(Math.log(e) / Math.LN2);
if (e * (c = Math.pow(2, -s)) < 1) {
s--;
c *= 2;
}
if ((e += s + h >= 1 ? f / c : f * Math.pow(2, 1 - h)) * c >= 2) {
s++;
c /= 2;
}
if (s + h >= u) {
a = 0;
s = u;
} else if (s + h >= 1) {
a = (e * c - 1) * Math.pow(2, n);
s += h;
} else {
a = e * Math.pow(2, h - 1) * Math.pow(2, n);
s = 0;
}
}
for (;n >= 8; t[i + p] = 255 & a, p += d, a /= 256, n -= 8) ;
s = s << n | a;
l += n;
for (;l > 0; t[i + p] = 255 & s, p += d, s /= 256, l -= 8) ;
t[i + p - d] |= 128 * y;
}
i.writeFloat32 = function(t, e) {
var i = "undefined" == typeof e;
i && (e = this.offset);
if (!this.noAssert) {
if ("number" != typeof t) throw TypeError("Illegal value: " + t + " (not a number)");
if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
}
e += 4;
var r = this.buffer.byteLength;
e > r && this.resize((r *= 2) > e ? r : e);
e -= 4;
c(this.view, t, e, this.littleEndian, 23, 4);
i && (this.offset += 4);
return this;
};
i.writeFloat = i.writeFloat32;
i.readFloat32 = function(t) {
var e = "undefined" == typeof t;
e && (t = this.offset);
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
if ((t >>>= 0) < 0 || t + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+4) <= " + this.buffer.byteLength);
}
var i = a(this.view, t, this.littleEndian, 23, 4);
e && (this.offset += 4);
return i;
};
i.readFloat = i.readFloat32;
i.writeFloat64 = function(t, e) {
var i = "undefined" == typeof e;
i && (e = this.offset);
if (!this.noAssert) {
if ("number" != typeof t) throw TypeError("Illegal value: " + t + " (not a number)");
if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
}
e += 8;
var r = this.buffer.byteLength;
e > r && this.resize((r *= 2) > e ? r : e);
e -= 8;
c(this.view, t, e, this.littleEndian, 52, 8);
i && (this.offset += 8);
return this;
};
i.writeDouble = i.writeFloat64;
i.readFloat64 = function(t) {
var e = "undefined" == typeof t;
e && (t = this.offset);
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
if ((t >>>= 0) < 0 || t + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this.buffer.byteLength);
}
var i = a(this.view, t, this.littleEndian, 52, 8);
e && (this.offset += 8);
return i;
};
i.readDouble = i.readFloat64;
e.MAX_VARINT32_BYTES = 5;
e.calculateVarint32 = function(t) {
return (t >>>= 0) < 128 ? 1 : t < 16384 ? 2 : t < 1 << 21 ? 3 : t < 1 << 28 ? 4 : 5;
};
e.zigZagEncode32 = function(t) {
return ((t |= 0) << 1 ^ t >> 31) >>> 0;
};
e.zigZagDecode32 = function(t) {
return t >>> 1 ^ -(1 & t) | 0;
};
i.writeVarint32 = function(t, i) {
var r = "undefined" == typeof i;
r && (i = this.offset);
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
t |= 0;
if ("number" != typeof i || i % 1 != 0) throw TypeError("Illegal offset: " + i + " (not an integer)");
if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength);
}
var n, o = e.calculateVarint32(t);
i += o;
var s = this.buffer.byteLength;
i > s && this.resize((s *= 2) > i ? s : i);
i -= o;
t >>>= 0;
for (;t >= 128; ) {
n = 127 & t | 128;
this.view[i++] = n;
t >>>= 7;
}
this.view[i++] = t;
if (r) {
this.offset = i;
return this;
}
return o;
};
i.writeVarint32ZigZag = function(t, i) {
return this.writeVarint32(e.zigZagEncode32(t), i);
};
i.readVarint32 = function(t) {
var e = "undefined" == typeof t;
e && (t = this.offset);
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength);
}
var i, r = 0, n = 0;
do {
if (!this.noAssert && t > this.limit) {
var o = Error("Truncated");
o.truncated = !0;
throw o;
}
i = this.view[t++];
r < 5 && (n |= (127 & i) << 7 * r);
++r;
} while (0 != (128 & i));
n |= 0;
if (e) {
this.offset = t;
return n;
}
return {
value: n,
length: r
};
};
i.readVarint32ZigZag = function(t) {
var i = this.readVarint32(t);
"object" == typeof i ? i.value = e.zigZagDecode32(i.value) : i = e.zigZagDecode32(i);
return i;
};
if (t) {
e.MAX_VARINT64_BYTES = 10;
e.calculateVarint64 = function(e) {
"number" == typeof e ? e = t.fromNumber(e) : "string" == typeof e && (e = t.fromString(e));
var i = e.toInt() >>> 0, r = e.shiftRightUnsigned(28).toInt() >>> 0, n = e.shiftRightUnsigned(56).toInt() >>> 0;
return 0 == n ? 0 == r ? i < 16384 ? i < 128 ? 1 : 2 : i < 1 << 21 ? 3 : 4 : r < 16384 ? r < 128 ? 5 : 6 : r < 1 << 21 ? 7 : 8 : n < 128 ? 9 : 10;
};
e.zigZagEncode64 = function(e) {
"number" == typeof e ? e = t.fromNumber(e, !1) : "string" == typeof e ? e = t.fromString(e, !1) : !1 !== e.unsigned && (e = e.toSigned());
return e.shiftLeft(1).xor(e.shiftRight(63)).toUnsigned();
};
e.zigZagDecode64 = function(e) {
"number" == typeof e ? e = t.fromNumber(e, !1) : "string" == typeof e ? e = t.fromString(e, !1) : !1 !== e.unsigned && (e = e.toSigned());
return e.shiftRightUnsigned(1).xor(e.and(t.ONE).toSigned().negate()).toSigned();
};
i.writeVarint64 = function(i, r) {
var n = "undefined" == typeof r;
n && (r = this.offset);
if (!this.noAssert) {
if ("number" == typeof i) i = t.fromNumber(i); else if ("string" == typeof i) i = t.fromString(i); else if (!(i && i instanceof t)) throw TypeError("Illegal value: " + i + " (not an integer or Long)");
if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength);
}
"number" == typeof i ? i = t.fromNumber(i, !1) : "string" == typeof i ? i = t.fromString(i, !1) : !1 !== i.unsigned && (i = i.toSigned());
var o = e.calculateVarint64(i), s = i.toInt() >>> 0, a = i.shiftRightUnsigned(28).toInt() >>> 0, c = i.shiftRightUnsigned(56).toInt() >>> 0;
r += o;
var l = this.buffer.byteLength;
r > l && this.resize((l *= 2) > r ? l : r);
r -= o;
switch (o) {
case 10:
this.view[r + 9] = c >>> 7 & 1;

case 9:
this.view[r + 8] = 9 !== o ? 128 | c : 127 & c;

case 8:
this.view[r + 7] = 8 !== o ? a >>> 21 | 128 : a >>> 21 & 127;

case 7:
this.view[r + 6] = 7 !== o ? a >>> 14 | 128 : a >>> 14 & 127;

case 6:
this.view[r + 5] = 6 !== o ? a >>> 7 | 128 : a >>> 7 & 127;

case 5:
this.view[r + 4] = 5 !== o ? 128 | a : 127 & a;

case 4:
this.view[r + 3] = 4 !== o ? s >>> 21 | 128 : s >>> 21 & 127;

case 3:
this.view[r + 2] = 3 !== o ? s >>> 14 | 128 : s >>> 14 & 127;

case 2:
this.view[r + 1] = 2 !== o ? s >>> 7 | 128 : s >>> 7 & 127;

case 1:
this.view[r] = 1 !== o ? 128 | s : 127 & s;
}
if (n) {
this.offset += o;
return this;
}
return o;
};
i.writeVarint64ZigZag = function(t, i) {
return this.writeVarint64(e.zigZagEncode64(t), i);
};
i.readVarint64 = function(e) {
var i = "undefined" == typeof e;
i && (e = this.offset);
if (!this.noAssert) {
if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
}
var r = e, n = 0, o = 0, s = 0, a = 0;
n = 127 & (a = this.view[e++]);
if (128 & a) {
n |= (127 & (a = this.view[e++])) << 7;
if (128 & a || this.noAssert && "undefined" == typeof a) {
n |= (127 & (a = this.view[e++])) << 14;
if (128 & a || this.noAssert && "undefined" == typeof a) {
n |= (127 & (a = this.view[e++])) << 21;
if (128 & a || this.noAssert && "undefined" == typeof a) {
o = 127 & (a = this.view[e++]);
if (128 & a || this.noAssert && "undefined" == typeof a) {
o |= (127 & (a = this.view[e++])) << 7;
if (128 & a || this.noAssert && "undefined" == typeof a) {
o |= (127 & (a = this.view[e++])) << 14;
if (128 & a || this.noAssert && "undefined" == typeof a) {
o |= (127 & (a = this.view[e++])) << 21;
if (128 & a || this.noAssert && "undefined" == typeof a) {
s = 127 & (a = this.view[e++]);
if (128 & a || this.noAssert && "undefined" == typeof a) {
s |= (127 & (a = this.view[e++])) << 7;
if (128 & a || this.noAssert && "undefined" == typeof a) throw Error("Buffer overrun");
}
}
}
}
}
}
}
}
}
var c = t.fromBits(n | o << 28, o >>> 4 | s << 24, !1);
if (i) {
this.offset = e;
return c.toNumber();
}
return {
value: c,
length: e - r
};
};
i.readVarint64ZigZag = function(i) {
var r = this.readVarint64(i);
r && r.value instanceof t ? r.value = e.zigZagDecode64(r.value) : r = e.zigZagDecode64(r);
return r;
};
}
i.writeCString = function(t, e) {
var i = "undefined" == typeof e;
i && (e = this.offset);
var r, n = t.length;
if (!this.noAssert) {
if ("string" != typeof t) throw TypeError("Illegal str: Not a string");
for (r = 0; r < n; ++r) if (0 === t.charCodeAt(r)) throw RangeError("Illegal str: Contains NULL-characters");
if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
}
n = u.calculateUTF16asUTF8(o(t))[1];
e += n + 1;
var s = this.buffer.byteLength;
e > s && this.resize((s *= 2) > e ? s : e);
e -= n + 1;
u.encodeUTF16toUTF8(o(t), function(t) {
this.view[e++] = t;
}.bind(this));
this.view[e++] = 0;
if (i) {
this.offset = e;
return this;
}
return n;
};
i.readCString = function(t) {
var e = "undefined" == typeof t;
e && (t = this.offset);
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength);
}
var i, r = t, n = -1;
u.decodeUTF8toUTF16(function() {
if (0 === n) return null;
if (t >= this.limit) throw RangeError("Illegal range: Truncated data, " + t + " < " + this.limit);
return 0 === (n = this.view[t++]) ? null : n;
}.bind(this), i = s(), !0);
if (e) {
this.offset = t;
return i();
}
return {
string: i(),
length: t - r
};
};
i.writeIString = function(t, e) {
var i = "undefined" == typeof e;
i && (e = this.offset);
if (!this.noAssert) {
if ("string" != typeof t) throw TypeError("Illegal str: Not a string");
if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
}
var r, n = e;
r = u.calculateUTF16asUTF8(o(t), this.noAssert)[1];
e += 4 + r;
var s = this.buffer.byteLength;
e > s && this.resize((s *= 2) > e ? s : e);
e -= 4 + r;
if (this.littleEndian) {
this.view[e + 3] = r >>> 24 & 255;
this.view[e + 2] = r >>> 16 & 255;
this.view[e + 1] = r >>> 8 & 255;
this.view[e] = 255 & r;
} else {
this.view[e] = r >>> 24 & 255;
this.view[e + 1] = r >>> 16 & 255;
this.view[e + 2] = r >>> 8 & 255;
this.view[e + 3] = 255 & r;
}
e += 4;
u.encodeUTF16toUTF8(o(t), function(t) {
this.view[e++] = t;
}.bind(this));
if (e !== n + 4 + r) throw RangeError("Illegal range: Truncated data, " + e + " == " + (e + 4 + r));
if (i) {
this.offset = e;
return this;
}
return e - n;
};
i.readIString = function(t) {
var i = "undefined" == typeof t;
i && (t = this.offset);
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
if ((t >>>= 0) < 0 || t + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+4) <= " + this.buffer.byteLength);
}
var r = t, n = this.readUint32(t), o = this.readUTF8String(n, e.METRICS_BYTES, t += 4);
t += o.length;
if (i) {
this.offset = t;
return o.string;
}
return {
string: o.string,
length: t - r
};
};
e.METRICS_CHARS = "c";
e.METRICS_BYTES = "b";
i.writeUTF8String = function(t, e) {
var i, r = "undefined" == typeof e;
r && (e = this.offset);
if (!this.noAssert) {
if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
}
var n = e;
i = u.calculateUTF16asUTF8(o(t))[1];
e += i;
var s = this.buffer.byteLength;
e > s && this.resize((s *= 2) > e ? s : e);
e -= i;
u.encodeUTF16toUTF8(o(t), function(t) {
this.view[e++] = t;
}.bind(this));
if (r) {
this.offset = e;
return this;
}
return e - n;
};
i.writeString = i.writeUTF8String;
e.calculateUTF8Chars = function(t) {
return u.calculateUTF16asUTF8(o(t))[0];
};
e.calculateString = e.calculateUTF8Bytes = function(t) {
return u.calculateUTF16asUTF8(o(t))[1];
};
i.readUTF8String = function(t, i, r) {
if ("number" == typeof i) {
r = i;
i = void 0;
}
var n = "undefined" == typeof r;
n && (r = this.offset);
"undefined" == typeof i && (i = e.METRICS_CHARS);
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal length: " + t + " (not an integer)");
t |= 0;
if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength);
}
var o, a = 0, c = r;
if (i === e.METRICS_CHARS) {
o = s();
u.decodeUTF8(function() {
return a < t && r < this.limit ? this.view[r++] : null;
}.bind(this), function(t) {
++a;
u.UTF8toUTF16(t, o);
});
if (a !== t) throw RangeError("Illegal range: Truncated data, " + a + " == " + t);
if (n) {
this.offset = r;
return o();
}
return {
string: o(),
length: r - c
};
}
if (i === e.METRICS_BYTES) {
if (!this.noAssert) {
if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
if ((r >>>= 0) < 0 || r + t > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+" + t + ") <= " + this.buffer.byteLength);
}
var l = r + t;
u.decodeUTF8toUTF16(function() {
return r < l ? this.view[r++] : null;
}.bind(this), o = s(), this.noAssert);
if (r !== l) throw RangeError("Illegal range: Truncated data, " + r + " == " + l);
if (n) {
this.offset = r;
return o();
}
return {
string: o(),
length: r - c
};
}
throw TypeError("Unsupported metrics: " + i);
};
i.readString = i.readUTF8String;
i.writeVString = function(t, i) {
var r = "undefined" == typeof i;
r && (i = this.offset);
if (!this.noAssert) {
if ("string" != typeof t) throw TypeError("Illegal str: Not a string");
if ("number" != typeof i || i % 1 != 0) throw TypeError("Illegal offset: " + i + " (not an integer)");
if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength);
}
var n, s, a = i;
n = u.calculateUTF16asUTF8(o(t), this.noAssert)[1];
s = e.calculateVarint32(n);
i += s + n;
var c = this.buffer.byteLength;
i > c && this.resize((c *= 2) > i ? c : i);
i -= s + n;
i += this.writeVarint32(n, i);
u.encodeUTF16toUTF8(o(t), function(t) {
this.view[i++] = t;
}.bind(this));
if (i !== a + n + s) throw RangeError("Illegal range: Truncated data, " + i + " == " + (i + n + s));
if (r) {
this.offset = i;
return this;
}
return i - a;
};
i.readVString = function(t) {
var i = "undefined" == typeof t;
i && (t = this.offset);
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength);
}
var r = t, n = this.readVarint32(t), o = this.readUTF8String(n.value, e.METRICS_BYTES, t += n.length);
t += o.length;
if (i) {
this.offset = t;
return o.string;
}
return {
string: o.string,
length: t - r
};
};
i.append = function(t, i, r) {
if ("number" == typeof i || "string" != typeof i) {
r = i;
i = void 0;
}
var n = "undefined" == typeof r;
n && (r = this.offset);
if (!this.noAssert) {
if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength);
}
t instanceof e || (t = e.wrap(t, i));
var o = t.limit - t.offset;
if (o <= 0) return this;
r += o;
var s = this.buffer.byteLength;
r > s && this.resize((s *= 2) > r ? s : r);
r -= o;
this.view.set(t.view.subarray(t.offset, t.limit), r);
t.offset += o;
n && (this.offset += o);
return this;
};
i.appendTo = function(t, e) {
t.append(this, e);
return this;
};
i.writeBytes = i.append;
i.assert = function(t) {
this.noAssert = !t;
return this;
};
i.capacity = function() {
return this.buffer.byteLength;
};
i.clear = function() {
this.offset = 0;
this.limit = this.buffer.byteLength;
this.markedOffset = -1;
return this;
};
i.clone = function(t) {
var i = new e(0, this.littleEndian, this.noAssert);
if (t) {
i.buffer = new ArrayBuffer(this.buffer.byteLength);
i.view = new Uint8Array(i.buffer);
} else {
i.buffer = this.buffer;
i.view = this.view;
}
i.offset = this.offset;
i.markedOffset = this.markedOffset;
i.limit = this.limit;
return i;
};
i.compact = function(t, e) {
"undefined" == typeof t && (t = this.offset);
"undefined" == typeof e && (e = this.limit);
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
t >>>= 0;
if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal end: Not an integer");
e >>>= 0;
if (t < 0 || t > e || e > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength);
}
if (0 === t && e === this.buffer.byteLength) return this;
var i = e - t;
if (0 === i) {
this.buffer = r;
this.view = null;
this.markedOffset >= 0 && (this.markedOffset -= t);
this.offset = 0;
this.limit = 0;
return this;
}
var n = new ArrayBuffer(i), o = new Uint8Array(n);
o.set(this.view.subarray(t, e));
this.buffer = n;
this.view = o;
this.markedOffset >= 0 && (this.markedOffset -= t);
this.offset = 0;
this.limit = i;
return this;
};
i.copy = function(t, i) {
"undefined" == typeof t && (t = this.offset);
"undefined" == typeof i && (i = this.limit);
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
t >>>= 0;
if ("number" != typeof i || i % 1 != 0) throw TypeError("Illegal end: Not an integer");
i >>>= 0;
if (t < 0 || t > i || i > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + i + " <= " + this.buffer.byteLength);
}
if (t === i) return new e(0, this.littleEndian, this.noAssert);
var r = i - t, n = new e(r, this.littleEndian, this.noAssert);
n.offset = 0;
n.limit = r;
n.markedOffset >= 0 && (n.markedOffset -= t);
this.copyTo(n, 0, t, i);
return n;
};
i.copyTo = function(t, i, r, n) {
var o, s;
if (!this.noAssert && !e.isByteBuffer(t)) throw TypeError("Illegal target: Not a ByteBuffer");
i = (s = "undefined" == typeof i) ? t.offset : 0 | i;
r = (o = "undefined" == typeof r) ? this.offset : 0 | r;
n = "undefined" == typeof n ? this.limit : 0 | n;
if (i < 0 || i > t.buffer.byteLength) throw RangeError("Illegal target range: 0 <= " + i + " <= " + t.buffer.byteLength);
if (r < 0 || n > this.buffer.byteLength) throw RangeError("Illegal source range: 0 <= " + r + " <= " + this.buffer.byteLength);
var a = n - r;
if (0 === a) return t;
t.ensureCapacity(i + a);
t.view.set(this.view.subarray(r, n), i);
o && (this.offset += a);
s && (t.offset += a);
return this;
};
i.ensureCapacity = function(t) {
var e = this.buffer.byteLength;
return e < t ? this.resize((e *= 2) > t ? e : t) : this;
};
i.fill = function(t, e, i) {
var r = "undefined" == typeof e;
r && (e = this.offset);
"string" == typeof t && t.length > 0 && (t = t.charCodeAt(0));
"undefined" == typeof e && (e = this.offset);
"undefined" == typeof i && (i = this.limit);
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
t |= 0;
if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
e >>>= 0;
if ("number" != typeof i || i % 1 != 0) throw TypeError("Illegal end: Not an integer");
i >>>= 0;
if (e < 0 || e > i || i > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + i + " <= " + this.buffer.byteLength);
}
if (e >= i) return this;
for (;e < i; ) this.view[e++] = t;
r && (this.offset = e);
return this;
};
i.flip = function() {
this.limit = this.offset;
this.offset = 0;
return this;
};
i.mark = function(t) {
t = "undefined" == typeof t ? this.offset : t;
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
}
this.markedOffset = t;
return this;
};
i.order = function(t) {
if (!this.noAssert && "boolean" != typeof t) throw TypeError("Illegal littleEndian: Not a boolean");
this.littleEndian = !!t;
return this;
};
i.LE = function(t) {
this.littleEndian = "undefined" == typeof t || !!t;
return this;
};
i.BE = function(t) {
this.littleEndian = "undefined" != typeof t && !t;
return this;
};
i.prepend = function(t, i, r) {
if ("number" == typeof i || "string" != typeof i) {
r = i;
i = void 0;
}
var n = "undefined" == typeof r;
n && (r = this.offset);
if (!this.noAssert) {
if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength);
}
t instanceof e || (t = e.wrap(t, i));
var o = t.limit - t.offset;
if (o <= 0) return this;
var s = o - r;
if (s > 0) {
var a = new ArrayBuffer(this.buffer.byteLength + s), c = new Uint8Array(a);
c.set(this.view.subarray(r, this.buffer.byteLength), o);
this.buffer = a;
this.view = c;
this.offset += s;
this.markedOffset >= 0 && (this.markedOffset += s);
this.limit += s;
r += s;
} else new Uint8Array(this.buffer);
this.view.set(t.view.subarray(t.offset, t.limit), r - o);
t.offset = t.limit;
n && (this.offset -= o);
return this;
};
i.prependTo = function(t, e) {
t.prepend(this, e);
return this;
};
i.printDebug = function(t) {
"function" != typeof t && (t = cc.log.bind(console));
t(this.toString() + "\n-------------------------------------------------------------------\n" + this.toDebug(!0));
};
i.remaining = function() {
return this.limit - this.offset;
};
i.reset = function() {
if (this.markedOffset >= 0) {
this.offset = this.markedOffset;
this.markedOffset = -1;
} else this.offset = 0;
return this;
};
i.resize = function(t) {
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal capacity: " + t + " (not an integer)");
if ((t |= 0) < 0) throw RangeError("Illegal capacity: 0 <= " + t);
}
if (this.buffer.byteLength < t) {
var e = new ArrayBuffer(t), i = new Uint8Array(e);
i.set(this.view);
this.buffer = e;
this.view = i;
}
return this;
};
i.reverse = function(t, e) {
"undefined" == typeof t && (t = this.offset);
"undefined" == typeof e && (e = this.limit);
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
t >>>= 0;
if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal end: Not an integer");
e >>>= 0;
if (t < 0 || t > e || e > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength);
}
if (t === e) return this;
Array.prototype.reverse.call(this.view.subarray(t, e));
return this;
};
i.skip = function(t) {
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal length: " + t + " (not an integer)");
t |= 0;
}
var e = this.offset + t;
if (!this.noAssert && (e < 0 || e > this.buffer.byteLength)) throw RangeError("Illegal length: 0 <= " + this.offset + " + " + t + " <= " + this.buffer.byteLength);
this.offset = e;
return this;
};
i.slice = function(t, e) {
"undefined" == typeof t && (t = this.offset);
"undefined" == typeof e && (e = this.limit);
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
t >>>= 0;
if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal end: Not an integer");
e >>>= 0;
if (t < 0 || t > e || e > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength);
}
var i = this.clone();
i.offset = t;
i.limit = e;
return i;
};
i.toBuffer = function(t) {
var e = this.offset, i = this.limit;
if (!this.noAssert) {
if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: Not an integer");
e >>>= 0;
if ("number" != typeof i || i % 1 != 0) throw TypeError("Illegal limit: Not an integer");
i >>>= 0;
if (e < 0 || e > i || i > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + i + " <= " + this.buffer.byteLength);
}
if (!t && 0 === e && i === this.buffer.byteLength) return this.buffer;
if (e === i) return r;
var n = new ArrayBuffer(i - e);
new Uint8Array(n).set(new Uint8Array(this.buffer).subarray(e, i), 0);
return n;
};
i.toArrayBuffer = i.toBuffer;
i.toString = function(t, e, i) {
if ("undefined" == typeof t) return "ByteBufferAB(offset=" + this.offset + ",markedOffset=" + this.markedOffset + ",limit=" + this.limit + ",capacity=" + this.capacity() + ")";
"number" == typeof t && (i = e = t = "utf8");
switch (t) {
case "utf8":
return this.toUTF8(e, i);

case "base64":
return this.toBase64(e, i);

case "hex":
return this.toHex(e, i);

case "binary":
return this.toBinary(e, i);

case "debug":
return this.toDebug();

case "columns":
return this.toColumns();

default:
throw Error("Unsupported encoding: " + t);
}
};
var l = function() {
for (var t = {}, e = [ 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47 ], i = [], r = 0, n = e.length; r < n; ++r) i[e[r]] = r;
t.encode = function(t, i) {
for (var r, n; null !== (r = t()); ) {
i(e[r >> 2 & 63]);
n = (3 & r) << 4;
if (null !== (r = t())) {
i(e[63 & ((n |= r >> 4 & 15) | r >> 4 & 15)]);
n = (15 & r) << 2;
null !== (r = t()) ? (i(e[63 & (n | r >> 6 & 3)]), i(e[63 & r])) : (i(e[63 & n]), 
i(61));
} else i(e[63 & n]), i(61), i(61);
}
};
t.decode = function(t, e) {
var r, n, o;
function s(t) {
throw Error("Illegal character code: " + t);
}
for (;null !== (r = t()); ) {
"undefined" == typeof (n = i[r]) && s(r);
if (null !== (r = t())) {
"undefined" == typeof (o = i[r]) && s(r);
e(n << 2 >>> 0 | (48 & o) >> 4);
if (null !== (r = t())) {
if ("undefined" == typeof (n = i[r])) {
if (61 === r) break;
s(r);
}
e((15 & o) << 4 >>> 0 | (60 & n) >> 2);
if (null !== (r = t())) {
if ("undefined" == typeof (o = i[r])) {
if (61 === r) break;
s(r);
}
e((3 & n) << 6 >>> 0 | o);
}
}
}
}
};
t.test = function(t) {
return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t);
};
return t;
}();
i.toBase64 = function(t, e) {
"undefined" == typeof t && (t = this.offset);
"undefined" == typeof e && (e = this.limit);
e |= 0;
if ((t |= 0) < 0 || e > this.capacity || t > e) throw RangeError("begin, end");
var i;
l.encode(function() {
return t < e ? this.view[t++] : null;
}.bind(this), i = s());
return i();
};
e.fromBase64 = function(t, i) {
if ("string" != typeof t) throw TypeError("str");
var r = new e(t.length / 4 * 3, i), n = 0;
l.decode(o(t), function(t) {
r.view[n++] = t;
});
r.limit = n;
return r;
};
e.btoa = function(t) {
return e.fromBinary(t).toBase64();
};
e.atob = function(t) {
return e.fromBase64(t).toBinary();
};
i.toBinary = function(t, e) {
"undefined" == typeof t && (t = this.offset);
"undefined" == typeof e && (e = this.limit);
e |= 0;
if ((t |= 0) < 0 || e > this.capacity() || t > e) throw RangeError("begin, end");
if (t === e) return "";
for (var i = [], r = []; t < e; ) {
i.push(this.view[t++]);
i.length >= 1024 && (r.push(String.fromCharCode.apply(String, i)), i = []);
}
return r.join("") + String.fromCharCode.apply(String, i);
};
e.fromBinary = function(t, i) {
if ("string" != typeof t) throw TypeError("str");
for (var r, n = 0, o = t.length, s = new e(o, i); n < o; ) {
if ((r = t.charCodeAt(n)) > 255) throw RangeError("illegal char code: " + r);
s.view[n++] = r;
}
s.limit = o;
return s;
};
i.toDebug = function(t) {
for (var e, i = -1, r = this.buffer.byteLength, n = "", o = "", s = ""; i < r; ) {
if (-1 !== i) {
n += (e = this.view[i]) < 16 ? "0" + e.toString(16).toUpperCase() : e.toString(16).toUpperCase();
t && (o += e > 32 && e < 127 ? String.fromCharCode(e) : ".");
}
++i;
if (t && i > 0 && i % 16 == 0 && i !== r) {
for (;n.length < 51; ) n += " ";
s += n + o + "\n";
n = o = "";
}
i === this.offset && i === this.limit ? n += i === this.markedOffset ? "!" : "|" : i === this.offset ? n += i === this.markedOffset ? "[" : "<" : i === this.limit ? n += i === this.markedOffset ? "]" : ">" : n += i === this.markedOffset ? "'" : t || 0 !== i && i !== r ? " " : "";
}
if (t && " " !== n) {
for (;n.length < 51; ) n += " ";
s += n + o + "\n";
}
return t ? s : n;
};
e.fromDebug = function(t, i, r) {
for (var n, o, s = t.length, a = new e((s + 1) / 3 | 0, i, r), c = 0, l = 0, u = !1, h = !1, f = !1, p = !1, d = !1; c < s; ) {
switch (n = t.charAt(c++)) {
case "!":
if (!r) {
if (h || f || p) {
d = !0;
break;
}
h = f = p = !0;
}
a.offset = a.markedOffset = a.limit = l;
u = !1;
break;

case "|":
if (!r) {
if (h || p) {
d = !0;
break;
}
h = p = !0;
}
a.offset = a.limit = l;
u = !1;
break;

case "[":
if (!r) {
if (h || f) {
d = !0;
break;
}
h = f = !0;
}
a.offset = a.markedOffset = l;
u = !1;
break;

case "<":
if (!r) {
if (h) {
d = !0;
break;
}
h = !0;
}
a.offset = l;
u = !1;
break;

case "]":
if (!r) {
if (p || f) {
d = !0;
break;
}
p = f = !0;
}
a.limit = a.markedOffset = l;
u = !1;
break;

case ">":
if (!r) {
if (p) {
d = !0;
break;
}
p = !0;
}
a.limit = l;
u = !1;
break;

case "'":
if (!r) {
if (f) {
d = !0;
break;
}
f = !0;
}
a.markedOffset = l;
u = !1;
break;

case " ":
u = !1;
break;

default:
if (!r && u) {
d = !0;
break;
}
o = parseInt(n + t.charAt(c++), 16);
if (!r && (isNaN(o) || o < 0 || o > 255)) throw TypeError("Illegal str: Not a debug encoded string");
a.view[l++] = o;
u = !0;
}
if (d) throw TypeError("Illegal str: Invalid symbol at " + c);
}
if (!r) {
if (!h || !p) throw TypeError("Illegal str: Missing offset or limit");
if (l < a.buffer.byteLength) throw TypeError("Illegal str: Not a debug encoded string (is it hex?) " + l + " < " + s);
}
return a;
};
i.toHex = function(t, e) {
t = "undefined" == typeof t ? this.offset : t;
e = "undefined" == typeof e ? this.limit : e;
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
t >>>= 0;
if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal end: Not an integer");
e >>>= 0;
if (t < 0 || t > e || e > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength);
}
for (var i, r = new Array(e - t); t < e; ) (i = this.view[t++]) < 16 ? r.push("0", i.toString(16)) : r.push(i.toString(16));
return r.join("");
};
e.fromHex = function(t, i, r) {
if (!r) {
if ("string" != typeof t) throw TypeError("Illegal str: Not a string");
if (t.length % 2 != 0) throw TypeError("Illegal str: Length not a multiple of 2");
}
for (var n, o = t.length, s = new e(o / 2 | 0, i), a = 0, c = 0; a < o; a += 2) {
n = parseInt(t.substring(a, a + 2), 16);
if (!r && (!isFinite(n) || n < 0 || n > 255)) throw TypeError("Illegal str: Contains non-hex characters");
s.view[c++] = n;
}
s.limit = c;
return s;
};
var u = function() {
var t = {
MAX_CODEPOINT: 1114111,
encodeUTF8: function(t, e) {
var i = null;
"number" == typeof t && (i = t, t = function() {
return null;
});
for (;null !== i || null !== (i = t()); ) {
i < 128 ? e(127 & i) : i < 2048 ? (e(i >> 6 & 31 | 192), e(63 & i | 128)) : i < 65536 ? (e(i >> 12 & 15 | 224), 
e(i >> 6 & 63 | 128), e(63 & i | 128)) : (e(i >> 18 & 7 | 240), e(i >> 12 & 63 | 128), 
e(i >> 6 & 63 | 128), e(63 & i | 128));
i = null;
}
},
decodeUTF8: function(t, e) {
for (var i, r, n, o, s = function(t) {
t = t.slice(0, t.indexOf(null));
var e = Error(t.toString());
e.name = "TruncatedError";
e.bytes = t;
throw e;
}; null !== (i = t()); ) if (0 == (128 & i)) e(i); else if (192 == (224 & i)) null === (r = t()) && s([ i, r ]), 
e((31 & i) << 6 | 63 & r); else if (224 == (240 & i)) (null === (r = t()) || null === (n = t())) && s([ i, r, n ]), 
e((15 & i) << 12 | (63 & r) << 6 | 63 & n); else {
if (240 != (248 & i)) throw RangeError("Illegal starting byte: " + i);
(null === (r = t()) || null === (n = t()) || null === (o = t())) && s([ i, r, n, o ]), 
e((7 & i) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & o);
}
},
UTF16toUTF8: function(t, e) {
for (var i, r = null; null !== (i = null !== r ? r : t()); ) if (i >= 55296 && i <= 57343 && null !== (r = t()) && r >= 56320 && r <= 57343) {
e(1024 * (i - 55296) + r - 56320 + 65536);
r = null;
} else e(i);
null !== r && e(r);
},
UTF8toUTF16: function(t, e) {
var i = null;
"number" == typeof t && (i = t, t = function() {
return null;
});
for (;null !== i || null !== (i = t()); ) {
i <= 65535 ? e(i) : (e(55296 + ((i -= 65536) >> 10)), e(i % 1024 + 56320));
i = null;
}
},
encodeUTF16toUTF8: function(e, i) {
t.UTF16toUTF8(e, function(e) {
t.encodeUTF8(e, i);
});
},
decodeUTF8toUTF16: function(e, i) {
t.decodeUTF8(e, function(e) {
t.UTF8toUTF16(e, i);
});
},
calculateCodePoint: function(t) {
return t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
},
calculateUTF8: function(t) {
for (var e, i = 0; null !== (e = t()); ) i += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4;
return i;
},
calculateUTF16asUTF8: function(e) {
var i = 0, r = 0;
t.UTF16toUTF8(e, function(t) {
++i;
r += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
});
return [ i, r ];
}
};
return t;
}();
i.toUTF8 = function(t, e) {
"undefined" == typeof t && (t = this.offset);
"undefined" == typeof e && (e = this.limit);
if (!this.noAssert) {
if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
t >>>= 0;
if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal end: Not an integer");
e >>>= 0;
if (t < 0 || t > e || e > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength);
}
var i;
try {
u.decodeUTF8toUTF16(function() {
return t < e ? this.view[t++] : null;
}.bind(this), i = s());
} catch (i) {
if (t !== e) throw RangeError("Illegal range: Truncated data, " + t + " != " + e);
}
return i();
};
e.fromUTF8 = function(t, i, r) {
if (!r && "string" != typeof t) throw TypeError("Illegal str: Not a string");
var n = new e(u.calculateUTF16asUTF8(o(t), !0)[1], i, r), s = 0;
u.encodeUTF16toUTF8(o(t), function(t) {
n.view[s++] = t;
});
n.limit = s;
return n;
};
return e;
}, "function" == typeof define && define.amd ? define([ "long" ], i) : "function" == typeof t && "object" == typeof e && e && e.exports ? e.exports = function() {
var e;
try {
e = t("long");
} catch (t) {}
return i(e);
}() : ((void 0).dcodeIO = (void 0).dcodeIO || {}).ByteBuffer = i((void 0).dcodeIO.Long);
var i;
cc._RF.pop();
}, {
long: "long"
} ],
htmlTextParser: [ function(t, e) {
"use strict";
cc._RF.push(e, "78934IpTndGAorbSvxv6+fr", "htmlTextParser");
var i = /^(click)(\s)*=|(param)(\s)*=/, r = /(\s)*src(\s)*=|(\s)*height(\s)*=|(\s)*width(\s)*=|(\s)*align(\s)*=|(\s)*offset(\s)*=|(\s)*click(\s)*=|(\s)*param(\s)*=/, n = /(\s)*idx(\s)*=|(\s)*click(\s)*=|(\s)*param(\s)*=/, o = function() {
this._parsedObject = {};
this._specialSymbolArray = [];
this._specialSymbolArray.push([ /&lt;/g, "<" ]);
this._specialSymbolArray.push([ /&gt;/g, ">" ]);
this._specialSymbolArray.push([ /&amp;/g, "&" ]);
this._specialSymbolArray.push([ /&quot;/g, '"' ]);
this._specialSymbolArray.push([ /&apos;/g, "'" ]);
this._specialSymbolArray.push([ /&nbsp;/g, " " ]);
};
o.prototype = {
constructor: o,
parse: function(t) {
this._resultObjectArray = [];
if (!t) return this._resultObjectArray;
this._stack = [];
for (var e = 0, i = t.length; e < i; ) {
var r = t.indexOf(">", e), n = -1;
if (r >= 0 && (n = t.lastIndexOf("<", r)) < e - 1) {
n = t.indexOf("<", r + 1);
r = t.indexOf(">", n + 1);
}
if (n < 0) {
this._stack.pop();
this._processResult(t.substring(e));
e = i;
} else {
var o = t.substring(e, n), s = t.substring(n + 1, r);
"" === s && (o = t.substring(e, r + 1));
this._processResult(o);
-1 === r ? r = n : "/" === t.charAt(n + 1) ? this._stack.pop() : this._addToStack(s);
e = r + 1;
}
}
return this._resultObjectArray;
},
_attributeToObject: function(t) {
var e, i, o, s, a = {}, c = (t = t.trim()).match(/^(color|size)(\s)*=/);
if (c) {
e = c[0];
if ("" === (t = t.substring(e.length).trim())) return a;
i = t.indexOf(" ");
switch (e[0]) {
case "c":
a.color = i > -1 ? t.substring(0, i).trim() : t;
break;

case "s":
a.size = parseInt(t);
}
if (i > -1) {
s = t.substring(i + 1).trim();
o = this._processEventHandler(s);
a.event = o;
}
return a;
}
if ((c = t.match(/^(br(\s)*\/)/)) && c[0].length > 0 && (e = c[0].trim()).startsWith("br") && "/" === e[e.length - 1]) {
a.isNewLine = !0;
this._resultObjectArray.push({
text: "",
style: {
newline: !0
}
});
return a;
}
if ((c = t.match(/^(prefab(\s)*idx(\s)*=[^>]+\/)/)) && c[0].length > 0 && (e = c[0].trim()).startsWith("prefab") && "/" === e[e.length - 1]) {
c = t.match(n);
for (var l = !1; c; ) {
e = (t = t.substring(t.indexOf(c[0]))).substr(0, c[0].length);
p = (i = (h = t.substring(e.length).trim()).indexOf(" ")) > -1 ? h.substr(0, i) : h;
e = (e = e.replace(/[^a-zA-Z]/g, "").trim()).toLocaleLowerCase();
t = h.substring(i).trim();
p.endsWith("/") && (p = p.slice(0, -1));
if ("idx" === e) {
switch (p.charCodeAt(0)) {
case 34:
case 39:
l = !0;
p = p.slice(1, -1);
}
a.isPrefab = !0;
a.idx = Number(p);
} else "click" === e && (a.event = this._processEventHandler(e + "=" + p));
a.event && "param" === e && (a.event.param = p.replace(/^\"|\"$/g, ""));
c = t.match(r);
}
l && a.isPrefab && this._resultObjectArray.push({
text: "",
style: a
});
return {};
}
if ((c = t.match(/^(img(\s)*src(\s)*=[^>]+\/)/)) && c[0].length > 0 && (e = c[0].trim()).startsWith("img") && "/" === e[e.length - 1]) {
c = t.match(r);
for (var u = !1; c; ) {
e = (t = t.substring(t.indexOf(c[0]))).substr(0, c[0].length);
p = (i = (h = t.substring(e.length).trim()).indexOf(" ")) > -1 ? h.substr(0, i) : h;
e = (e = e.replace(/[^a-zA-Z]/g, "").trim()).toLocaleLowerCase();
t = h.substring(i).trim();
p.endsWith("/") && (p = p.slice(0, -1));
if ("src" === e) {
switch (p.charCodeAt(0)) {
case 34:
case 39:
u = !0;
p = p.slice(1, -1);
}
a.isImage = !0;
a.src = p;
} else if ("height" === e) a.imageHeight = parseInt(p); else if ("width" === e) a.imageWidth = parseInt(p); else if ("align" === e) {
switch (p.charCodeAt(0)) {
case 34:
case 39:
p = p.slice(1, -1);
}
a.imageAlign = p.toLocaleLowerCase();
} else "offset" === e ? a.imageOffset = p : "click" === e && (a.event = this._processEventHandler(e + "=" + p));
a.event && "param" === e && (a.event.param = p.replace(/^\"|\"$/g, ""));
c = t.match(r);
}
u && a.isImage && this._resultObjectArray.push({
text: "",
style: a
});
return {};
}
if ((c = t.match(/^(iFile(\s)*src(\s)*=[^>]+\/)/)) && c[0].length > 0 && (e = c[0].trim()).startsWith("iFile") && "/" === e[e.length - 1]) {
c = t.match(r);
var h;
for (u = !1; c; ) {
e = (t = t.substring(t.indexOf(c[0]))).substr(0, c[0].length);
p = (i = (h = t.substring(e.length).trim()).indexOf(" ")) > -1 ? h.substr(0, i) : h;
e = (e = e.replace(/[^a-zA-Z]/g, "").trim()).toLocaleLowerCase();
t = h.substring(i).trim();
p.endsWith("/") && (p = p.slice(0, -1));
if ("src" === e) {
switch (p.charCodeAt(0)) {
case 34:
case 39:
u = !0;
p = p.slice(1, -1);
}
a.isImgFile = !0;
a.src = p;
} else if ("height" === e) a.imageHeight = parseInt(p); else if ("width" === e) a.imageWidth = parseInt(p); else if ("align" === e) {
switch (p.charCodeAt(0)) {
case 34:
case 39:
p = p.slice(1, -1);
}
a.imageAlign = p.toLocaleLowerCase();
} else "offset" === e ? a.imageOffset = p : "click" === e && (a.event = this._processEventHandler(e + "=" + p));
a.event && "param" === e && (a.event.param = p.replace(/^\"|\"$/g, ""));
c = t.match(r);
}
u && a.isImgFile && this._resultObjectArray.push({
text: "",
style: a
});
return {};
}
if (c = t.match(/^(outline(\s)*[^>]*)/)) {
var f = {
color: "#ffffff",
width: 1
};
if (t = c[0].substring("outline".length).trim()) {
var p, d = /(\s)*color(\s)*=|(\s)*width(\s)*=|(\s)*click(\s)*=|(\s)*param(\s)*=/;
c = t.match(d);
for (;c; ) {
e = (t = t.substring(t.indexOf(c[0]))).substr(0, c[0].length);
p = (i = (h = t.substring(e.length).trim()).indexOf(" ")) > -1 ? h.substr(0, i) : h;
e = (e = e.replace(/[^a-zA-Z]/g, "").trim()).toLocaleLowerCase();
t = h.substring(i).trim();
"click" === e ? a.event = this._processEventHandler(e + "=" + p) : "color" === e ? f.color = p : "width" === e && (f.width = parseInt(p));
a.event && "param" === e && (a.event.param = p.replace(/^\"|\"$/g, ""));
c = t.match(d);
}
}
a.outline = f;
}
if ((c = t.match(/^(on|u|b|i)(\s)*/)) && c[0].length > 0) {
e = c[0];
t = t.substring(e.length).trim();
switch (e[0]) {
case "u":
a.underline = !0;
break;

case "i":
a.italic = !0;
break;

case "b":
a.bold = !0;
}
if ("" === t) return a;
o = this._processEventHandler(t);
a.event = o;
}
return a;
},
_processEventHandler: function(t) {
for (var e = 0, r = {}, n = t.match(i), o = !1; n; ) {
var s = n[0], a = "";
o = !1;
if ('"' === (t = t.substring(s.length).trim()).charAt(0)) {
if ((e = t.indexOf('"', 1)) > -1) {
a = t.substring(1, e).trim();
o = !0;
}
e++;
} else if ("'" === t.charAt(0)) {
if ((e = t.indexOf("'", 1)) > -1) {
a = t.substring(1, e).trim();
o = !0;
}
e++;
} else {
var c = t.match(/(\S)+/);
e = (a = c ? c[0] : "").length;
}
o && (r[s = s.substring(0, s.length - 1).trim()] = a);
n = (t = t.substring(e).trim()).match(i);
}
return r;
},
_addToStack: function(t) {
var e = this._attributeToObject(t);
if (0 === this._stack.length) this._stack.push(e); else {
if (e.isNewLine || e.isImage) return;
var i = this._stack[this._stack.length - 1];
for (var r in i) e[r] || (e[r] = i[r]);
this._stack.push(e);
}
},
_processResult: function(t) {
if ("" !== t) {
t = this._escapeSpecialSymbol(t);
this._stack.length > 0 ? this._resultObjectArray.push({
text: t,
style: this._stack[this._stack.length - 1]
}) : this._resultObjectArray.push({
text: t
});
}
},
_escapeSpecialSymbol: function(t) {
for (var e = 0; e < this._specialSymbolArray.length; ++e) {
var i = this._specialSymbolArray[e][0], r = this._specialSymbolArray[e][1];
t = t.replace(i, r);
}
return t;
}
};
e.exports = o;
cc._RF.pop();
}, {} ],
long: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "88505K/vClDpZysmnYErYw0", "long");
r = "undefined" != typeof self ? self : void 0, n = function() {
return function(t) {
function e(r) {
if (i[r]) return i[r].exports;
var n = i[r] = {
i: r,
l: !1,
exports: {}
};
return t[r].call(n.exports, n, n.exports, e), n.l = !0, n.exports;
}
var i = {};
return e.m = t, e.c = i, e.d = function(t, i, r) {
e.o(t, i) || Object.defineProperty(t, i, {
configurable: !1,
enumerable: !0,
get: r
});
}, e.n = function(t) {
var i = t && t.__esModule ? function() {
return t.default;
} : function() {
return t;
};
return e.d(i, "a", i), i;
}, e.o = function(t, e) {
return Object.prototype.hasOwnProperty.call(t, e);
}, e.p = "", e(e.s = 0);
}([ function(t) {
function e(t, e, i) {
this.low = 0 | t, this.high = 0 | e, this.unsigned = !!i;
}
function i(t) {
return !0 === (t && t.__isLong__);
}
function r(t, e) {
var i, r, n;
return e ? (n = 0 <= (t >>>= 0) && t < 256) && (r = u[t]) ? r : (i = o(t, (0 | t) < 0 ? -1 : 0, !0), 
n && (u[t] = i), i) : (n = -128 <= (t |= 0) && t < 128) && (r = l[t]) ? r : (i = o(t, t < 0 ? -1 : 0, !1), 
n && (l[t] = i), i);
}
function n(t, e) {
if (isNaN(t)) return e ? v : g;
if (e) {
if (t < 0) return v;
if (t >= p) return E;
} else {
if (t <= -d) return T;
if (t + 1 >= d) return w;
}
return t < 0 ? n(-t, e).neg() : o(t % f | 0, t / f | 0, e);
}
function o(t, i, r) {
return new e(t, i, r);
}
function s(t, e, i) {
if (0 === t.length) throw Error("empty string");
if ("NaN" === t || "Infinity" === t || "+Infinity" === t || "-Infinity" === t) return g;
if ("number" == typeof e ? (i = e, e = !1) : e = !!e, (i = i || 10) < 2 || 36 < i) throw RangeError("radix");
var r;
if ((r = t.indexOf("-")) > 0) throw Error("interior hyphen");
if (0 === r) return s(t.substring(1), e, i).neg();
for (var o = n(h(i, 8)), a = g, c = 0; c < t.length; c += 8) {
var l = Math.min(8, t.length - c), u = parseInt(t.substring(c, c + l), i);
if (l < 8) {
var f = n(h(i, l));
a = a.mul(f).add(n(u));
} else a = (a = a.mul(o)).add(n(u));
}
return a.unsigned = e, a;
}
function a(t, e) {
return "number" == typeof t ? n(t, e) : "string" == typeof t ? s(t, e) : o(t.low, t.high, "boolean" == typeof e ? e : t.unsigned);
}
t.exports = e;
var c = null;
try {
c = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([ 0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11 ])), {}).exports;
} catch (t) {}
e.prototype.__isLong__, Object.defineProperty(e.prototype, "__isLong__", {
value: !0
}), e.isLong = i;
var l = {}, u = {};
e.fromInt = r, e.fromNumber = n, e.fromBits = o;
var h = Math.pow;
e.fromString = s, e.fromValue = a;
var f = 4294967296, p = f * f, d = p / 2, y = r(1 << 24), g = r(0);
e.ZERO = g;
var v = r(0, !0);
e.UZERO = v;
var m = r(1);
e.ONE = m;
var _ = r(1, !0);
e.UONE = _;
var b = r(-1);
e.NEG_ONE = b;
var w = o(-1, 2147483647, !1);
e.MAX_VALUE = w;
var E = o(-1, -1, !0);
e.MAX_UNSIGNED_VALUE = E;
var T = o(0, -2147483648, !1);
e.MIN_VALUE = T;
var P = e.prototype;
P.toInt = function() {
return this.unsigned ? this.low >>> 0 : this.low;
}, P.toNumber = function() {
return this.unsigned ? (this.high >>> 0) * f + (this.low >>> 0) : this.high * f + (this.low >>> 0);
}, P.toString = function(t) {
if ((t = t || 10) < 2 || 36 < t) throw RangeError("radix");
if (this.isZero()) return "0";
if (this.isNegative()) {
if (this.eq(T)) {
var e = n(t), i = this.div(e), r = i.mul(e).sub(this);
return i.toString(t) + r.toInt().toString(t);
}
return "-" + this.neg().toString(t);
}
for (var o = n(h(t, 6), this.unsigned), s = this, a = ""; ;) {
var c = s.div(o), l = (s.sub(c.mul(o)).toInt() >>> 0).toString(t);
if ((s = c).isZero()) return l + a;
for (;l.length < 6; ) l = "0" + l;
a = "" + l + a;
}
}, P.getHighBits = function() {
return this.high;
}, P.getHighBitsUnsigned = function() {
return this.high >>> 0;
}, P.getLowBits = function() {
return this.low;
}, P.getLowBitsUnsigned = function() {
return this.low >>> 0;
}, P.getNumBitsAbs = function() {
if (this.isNegative()) return this.eq(T) ? 64 : this.neg().getNumBitsAbs();
for (var t = 0 != this.high ? this.high : this.low, e = 31; e > 0 && 0 == (t & 1 << e); e--) ;
return 0 != this.high ? e + 33 : e + 1;
}, P.isZero = function() {
return 0 === this.high && 0 === this.low;
}, P.eqz = P.isZero, P.isNegative = function() {
return !this.unsigned && this.high < 0;
}, P.isPositive = function() {
return this.unsigned || this.high >= 0;
}, P.isOdd = function() {
return 1 == (1 & this.low);
}, P.isEven = function() {
return 0 == (1 & this.low);
}, P.equals = function(t) {
return i(t) || (t = a(t)), (this.unsigned === t.unsigned || this.high >>> 31 != 1 || t.high >>> 31 != 1) && this.high === t.high && this.low === t.low;
}, P.eq = P.equals, P.notEquals = function(t) {
return !this.eq(t);
}, P.neq = P.notEquals, P.ne = P.notEquals, P.lessThan = function(t) {
return this.comp(t) < 0;
}, P.lt = P.lessThan, P.lessThanOrEqual = function(t) {
return this.comp(t) <= 0;
}, P.lte = P.lessThanOrEqual, P.le = P.lessThanOrEqual, P.greaterThan = function(t) {
return this.comp(t) > 0;
}, P.gt = P.greaterThan, P.greaterThanOrEqual = function(t) {
return this.comp(t) >= 0;
}, P.gte = P.greaterThanOrEqual, P.ge = P.greaterThanOrEqual, P.compare = function(t) {
if (i(t) || (t = a(t)), this.eq(t)) return 0;
var e = this.isNegative(), r = t.isNegative();
return e && !r ? -1 : !e && r ? 1 : this.unsigned ? t.high >>> 0 > this.high >>> 0 || t.high === this.high && t.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(t).isNegative() ? -1 : 1;
}, P.comp = P.compare, P.negate = function() {
return !this.unsigned && this.eq(T) ? T : this.not().add(m);
}, P.neg = P.negate, P.add = function(t) {
i(t) || (t = a(t));
var e = this.high >>> 16, r = 65535 & this.high, n = this.low >>> 16, s = 65535 & this.low, c = t.high >>> 16, l = 65535 & t.high, u = t.low >>> 16, h = 0, f = 0, p = 0, d = 0;
return p += (d += s + (65535 & t.low)) >>> 16, f += (p += n + u) >>> 16, h += (f += r + l) >>> 16, 
h += e + c, o((p &= 65535) << 16 | (d &= 65535), (h &= 65535) << 16 | (f &= 65535), this.unsigned);
}, P.subtract = function(t) {
return i(t) || (t = a(t)), this.add(t.neg());
}, P.sub = P.subtract, P.multiply = function(t) {
if (this.isZero()) return g;
if (i(t) || (t = a(t)), c) return o(c.mul(this.low, this.high, t.low, t.high), c.get_high(), this.unsigned);
if (t.isZero()) return g;
if (this.eq(T)) return t.isOdd() ? T : g;
if (t.eq(T)) return this.isOdd() ? T : g;
if (this.isNegative()) return t.isNegative() ? this.neg().mul(t.neg()) : this.neg().mul(t).neg();
if (t.isNegative()) return this.mul(t.neg()).neg();
if (this.lt(y) && t.lt(y)) return n(this.toNumber() * t.toNumber(), this.unsigned);
var e = this.high >>> 16, r = 65535 & this.high, s = this.low >>> 16, l = 65535 & this.low, u = t.high >>> 16, h = 65535 & t.high, f = t.low >>> 16, p = 65535 & t.low, d = 0, v = 0, m = 0, _ = 0;
return m += (_ += l * p) >>> 16, v += (m += s * p) >>> 16, m &= 65535, v += (m += l * f) >>> 16, 
d += (v += r * p) >>> 16, v &= 65535, d += (v += s * f) >>> 16, v &= 65535, d += (v += l * h) >>> 16, 
d += e * p + r * f + s * h + l * u, o((m &= 65535) << 16 | (_ &= 65535), (d &= 65535) << 16 | (v &= 65535), this.unsigned);
}, P.mul = P.multiply, P.divide = function(t) {
if (i(t) || (t = a(t)), t.isZero()) throw Error("division by zero");
if (c) return this.unsigned || -2147483648 !== this.high || -1 !== t.low || -1 !== t.high ? o((this.unsigned ? c.div_u : c.div_s)(this.low, this.high, t.low, t.high), c.get_high(), this.unsigned) : this;
if (this.isZero()) return this.unsigned ? v : g;
var e, r, s;
if (this.unsigned) {
if (t.unsigned || (t = t.toUnsigned()), t.gt(this)) return v;
if (t.gt(this.shru(1))) return _;
s = v;
} else {
if (this.eq(T)) return t.eq(m) || t.eq(b) ? T : t.eq(T) ? m : (e = this.shr(1).div(t).shl(1)).eq(g) ? t.isNegative() ? m : b : (r = this.sub(t.mul(e)), 
s = e.add(r.div(t)));
if (t.eq(T)) return this.unsigned ? v : g;
if (this.isNegative()) return t.isNegative() ? this.neg().div(t.neg()) : this.neg().div(t).neg();
if (t.isNegative()) return this.div(t.neg()).neg();
s = g;
}
for (r = this; r.gte(t); ) {
e = Math.max(1, Math.floor(r.toNumber() / t.toNumber()));
for (var l = Math.ceil(Math.log(e) / Math.LN2), u = l <= 48 ? 1 : h(2, l - 48), f = n(e), p = f.mul(t); p.isNegative() || p.gt(r); ) p = (f = n(e -= u, this.unsigned)).mul(t);
f.isZero() && (f = m), s = s.add(f), r = r.sub(p);
}
return s;
}, P.div = P.divide, P.modulo = function(t) {
return i(t) || (t = a(t)), c ? o((this.unsigned ? c.rem_u : c.rem_s)(this.low, this.high, t.low, t.high), c.get_high(), this.unsigned) : this.sub(this.div(t).mul(t));
}, P.mod = P.modulo, P.rem = P.modulo, P.not = function() {
return o(~this.low, ~this.high, this.unsigned);
}, P.and = function(t) {
return i(t) || (t = a(t)), o(this.low & t.low, this.high & t.high, this.unsigned);
}, P.or = function(t) {
return i(t) || (t = a(t)), o(this.low | t.low, this.high | t.high, this.unsigned);
}, P.xor = function(t) {
return i(t) || (t = a(t)), o(this.low ^ t.low, this.high ^ t.high, this.unsigned);
}, P.shiftLeft = function(t) {
return i(t) && (t = t.toInt()), 0 == (t &= 63) ? this : t < 32 ? o(this.low << t, this.high << t | this.low >>> 32 - t, this.unsigned) : o(0, this.low << t - 32, this.unsigned);
}, P.shl = P.shiftLeft, P.shiftRight = function(t) {
return i(t) && (t = t.toInt()), 0 == (t &= 63) ? this : t < 32 ? o(this.low >>> t | this.high << 32 - t, this.high >> t, this.unsigned) : o(this.high >> t - 32, this.high >= 0 ? 0 : -1, this.unsigned);
}, P.shr = P.shiftRight, P.shiftRightUnsigned = function(t) {
return i(t) && (t = t.toInt()), 0 == (t &= 63) ? this : t < 32 ? o(this.low >>> t | this.high << 32 - t, this.high >>> t, this.unsigned) : o(32 === t ? this.high : this.high >>> t - 32, 0, this.unsigned);
}, P.shru = P.shiftRightUnsigned, P.shr_u = P.shiftRightUnsigned, P.rotateLeft = function(t) {
var e;
return i(t) && (t = t.toInt()), 0 == (t &= 63) ? this : 32 === t ? o(this.high, this.low, this.unsigned) : t < 32 ? (e = 32 - t, 
o(this.low << t | this.high >>> e, this.high << t | this.low >>> e, this.unsigned)) : (e = 32 - (t -= 32), 
o(this.high << t | this.low >>> e, this.low << t | this.high >>> e, this.unsigned));
}, P.rotl = P.rotateLeft, P.rotateRight = function(t) {
var e;
return i(t) && (t = t.toInt()), 0 == (t &= 63) ? this : 32 === t ? o(this.high, this.low, this.unsigned) : t < 32 ? (e = 32 - t, 
o(this.high << e | this.low >>> t, this.low << e | this.high >>> t, this.unsigned)) : (e = 32 - (t -= 32), 
o(this.low << e | this.high >>> t, this.high << e | this.low >>> t, this.unsigned));
}, P.rotr = P.rotateRight, P.toSigned = function() {
return this.unsigned ? o(this.low, this.high, !1) : this;
}, P.toUnsigned = function() {
return this.unsigned ? this : o(this.low, this.high, !0);
}, P.toBytes = function(t) {
return t ? this.toBytesLE() : this.toBytesBE();
}, P.toBytesLE = function() {
var t = this.high, e = this.low;
return [ 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24, 255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 ];
}, P.toBytesBE = function() {
var t = this.high, e = this.low;
return [ t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t, e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e ];
}, e.fromBytes = function(t, i, r) {
return r ? e.fromBytesLE(t, i) : e.fromBytesBE(t, i);
}, e.fromBytesLE = function(t, i) {
return new e(t[0] | t[1] << 8 | t[2] << 16 | t[3] << 24, t[4] | t[5] << 8 | t[6] << 16 | t[7] << 24, i);
}, e.fromBytesBE = function(t, i) {
return new e(t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7], t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3], i);
};
} ]);
}, "object" == typeof i && "object" == typeof e ? e.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof i ? i.Long = n() : r.Long = n();
var r, n;
cc._RF.pop();
}, {} ],
msgpack: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "eac516HT9hL7JfhnqAwWfAC", "msgpack");
r = function() {
return function(t) {
var e = {};
function i(r) {
if (e[r]) return e[r].exports;
var n = e[r] = {
i: r,
l: !1,
exports: {}
};
return t[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
}
return i.m = t, i.c = e, i.d = function(t, e, r) {
i.o(t, e) || Object.defineProperty(t, e, {
enumerable: !0,
get: r
});
}, i.r = function(t) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(t, "__esModule", {
value: !0
});
}, i.t = function(t, e) {
if (1 & e && (t = i(t)), 8 & e) return t;
if (4 & e && "object" == typeof t && t && t.__esModule) return t;
var r = Object.create(null);
if (i.r(r), Object.defineProperty(r, "default", {
enumerable: !0,
value: t
}), 2 & e && "string" != typeof t) for (var n in t) i.d(r, n, function(e) {
return t[e];
}.bind(null, n));
return r;
}, i.n = function(t) {
var e = t && t.__esModule ? function() {
return t.default;
} : function() {
return t;
};
return i.d(e, "a", e), e;
}, i.o = function(t, e) {
return Object.prototype.hasOwnProperty.call(t, e);
}, i.p = "", i(i.s = 0);
}([ function(t, e, i) {
i.r(e);
var r = function(t, e) {
var i = "function" == typeof Symbol && t[Symbol.iterator];
if (!i) return t;
var r, n, o = i.call(t), s = [];
try {
for (;(void 0 === e || e-- > 0) && !(r = o.next()).done; ) s.push(r.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
r && !r.done && (i = o.return) && i.call(o);
} finally {
if (n) throw n.error;
}
}
return s;
}, n = function() {
for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(r(arguments[e]));
return t;
}, o = "undefined" != typeof TextEncoder && "undefined" != typeof TextDecoder;
function s(t) {
for (var e = t.length, i = 0, r = 0; r < e; ) {
var n = t.charCodeAt(r++);
if (0 != (4294967168 & n)) if (0 == (4294965248 & n)) i += 2; else {
if (n >= 55296 && n <= 56319 && r < e) {
var o = t.charCodeAt(r);
56320 == (64512 & o) && (++r, n = ((1023 & n) << 10) + (1023 & o) + 65536);
}
i += 0 == (4294901760 & n) ? 3 : 4;
} else i++;
}
return i;
}
var a = o ? new TextEncoder() : void 0, c = a && a.encodeInto ? function(t, e, i) {
a.encodeInto(t, e.subarray(i));
} : function(t, e, i) {
e.set(a.encode(t), i);
}, l = 65536;
function u(t, e, i) {
for (var r = e, o = r + i, s = [], a = ""; r < o; ) {
var c = t[r++];
if (0 == (128 & c)) s.push(c); else if (192 == (224 & c)) {
var u = 63 & t[r++];
s.push((31 & c) << 6 | u);
} else if (224 == (240 & c)) {
u = 63 & t[r++];
var h = 63 & t[r++];
s.push((31 & c) << 12 | u << 6 | h);
} else if (240 == (248 & c)) {
var f = (7 & c) << 18 | (u = 63 & t[r++]) << 12 | (h = 63 & t[r++]) << 6 | 63 & t[r++];
f > 65535 && (f -= 65536, s.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), 
s.push(f);
} else s.push(c);
s.length - 4 >= l && (a += String.fromCharCode.apply(String, n(s)), s.length = 0);
}
return s.length > 0 && (a += String.fromCharCode.apply(String, n(s))), a;
}
var h = o ? new TextDecoder() : null, f = function(t, e) {
this.type = t, this.data = e;
};
function p(t, e, i) {
var r = Math.floor(i / 4294967296), n = i;
t.setUint32(e, r), t.setUint32(e + 4, n);
}
function d(t, e) {
return 4294967296 * t.getInt32(e) + t.getUint32(e + 4);
}
var y = 4294967295, g = 17179869183;
function v(t) {
var e, i = t.sec, r = t.nsec;
if (i >= 0 && r >= 0 && i <= g) {
if (0 === r && i <= y) {
var n = new Uint8Array(4);
return (e = new DataView(n.buffer)).setUint32(0, i), n;
}
var o = i / 4294967296, s = 4294967295 & i;
n = new Uint8Array(8);
return (e = new DataView(n.buffer)).setUint32(0, r << 2 | 3 & o), e.setUint32(4, s), 
n;
}
n = new Uint8Array(12);
return (e = new DataView(n.buffer)).setUint32(0, r), p(e, 4, i), n;
}
function m(t) {
var e = t.getTime(), i = Math.floor(e / 1e3), r = 1e6 * (e - 1e3 * i), n = Math.floor(r / 1e9);
return {
sec: i + n,
nsec: r - 1e9 * n
};
}
function _(t) {
return t instanceof Date ? v(m(t)) : null;
}
function b(t) {
var e = new DataView(t.buffer, t.byteOffset, t.byteLength);
switch (t.byteLength) {
case 4:
return {
sec: e.getUint32(0),
nsec: 0
};

case 8:
var i = e.getUint32(0);
return {
sec: 4294967296 * (3 & i) + e.getUint32(4),
nsec: i >>> 2
};

case 12:
return {
sec: d(e, 4),
nsec: e.getUint32(0)
};

default:
throw new Error("Unrecognized data size for timestamp: " + t.length);
}
}
function w(t) {
var e = b(t);
return new Date(1e3 * e.sec + e.nsec / 1e6);
}
var E = {
type: -1,
encode: _,
decode: w
}, T = function() {
function t() {
this.builtInEncoders = [], this.builtInDecoders = [], this.encoders = [], this.decoders = [], 
this.register(E);
}
return t.prototype.register = function(t) {
var e = t.type, i = t.encode, r = t.decode;
if (e >= 0) this.encoders[e] = i, this.decoders[e] = r; else {
var n = 1 + e;
this.builtInEncoders[n] = i, this.builtInDecoders[n] = r;
}
}, t.prototype.tryToEncode = function(t) {
for (var e = 0; e < this.builtInEncoders.length; e++) if (null != (i = this.builtInEncoders[e]) && null != (r = i(t))) return new f(-1 - e, r);
for (e = 0; e < this.encoders.length; e++) {
var i, r;
if (null != (i = this.encoders[e]) && null != (r = i(t))) return new f(e, r);
}
return t instanceof f ? t : null;
}, t.prototype.decode = function(t, e) {
var i = e < 0 ? this.builtInDecoders[-1 - e] : this.decoders[e];
return i ? i(t, e) : new f(e, t);
}, t.defaultCodec = new t(), t;
}();
function P(t) {
return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t instanceof ArrayBuffer ? new Uint8Array(t) : Uint8Array.from(t);
}
var C = null, S = !!C;
function O(t, e, i) {
var r = t.length, n = 2 * r, o = C.malloc(n);
!function(t, e, i, r) {
for (var n = new DataView(C.memory.buffer, t, e), o = 0; o < r; o++) n.setUint16(2 * o, i.charCodeAt(o));
}(o, n, t, r);
var s = C.malloc(5 + 4 * r);
try {
var a = C.utf8EncodeUint16Array(s, o, r);
return e.set(new Uint8Array(C.memory.buffer, s, a), i), a;
} finally {
C.free(o), C.free(s);
}
}
var R = 65536;
function I(t, e, i) {
var r, n, o, s = C.malloc(i), a = C.malloc(2 * i);
try {
r = s, n = t.subarray(e, e + i), o = i, new Uint8Array(C.memory.buffer, r, o).set(n);
var c = C.utf8DecodeToUint16Array(a, s, i);
return function(t) {
if (t.length <= R) return String.fromCharCode.apply(String, t);
for (var e = "", i = 0; i < t.length; i++) {
var r = t.subarray(i * R, (i + 1) * R);
e += String.fromCharCode.apply(String, r);
}
return e;
}(new Uint16Array(C.memory.buffer, a, c));
} finally {
C.free(s), C.free(a);
}
}
var M = function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && r >= t.length && (t = void 0), {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, x = 100, A = 2048, D = function() {
function t(t, e, i, r, n) {
void 0 === t && (t = T.defaultCodec), void 0 === e && (e = x), void 0 === i && (i = A), 
void 0 === r && (r = !1), void 0 === n && (n = !1), this.extensionCodec = t, this.maxDepth = e, 
this.initialBufferSize = i, this.sortKeys = r, this.forceFloat32 = n, this.pos = 0, 
this.view = new DataView(new ArrayBuffer(this.initialBufferSize)), this.bytes = new Uint8Array(this.view.buffer);
}
return t.prototype.encode = function(t, e) {
if (e > this.maxDepth) throw new Error("Too deep objects in depth " + e);
null == t ? this.encodeNil() : "boolean" == typeof t ? this.encodeBoolean(t) : "number" == typeof t ? this.encodeNumber(t) : "string" == typeof t ? this.encodeString(t) : this.encodeObject(t, e);
}, t.prototype.getUint8Array = function() {
return this.bytes.subarray(0, this.pos);
}, t.prototype.ensureBufferSizeToWrite = function(t) {
var e = this.pos + t;
this.view.byteLength < e && this.resizeBuffer(2 * e);
}, t.prototype.resizeBuffer = function(t) {
var e = new ArrayBuffer(t), i = new Uint8Array(e), r = new DataView(e);
i.set(this.bytes), this.view = r, this.bytes = i;
}, t.prototype.encodeNil = function() {
this.writeU8(192);
}, t.prototype.encodeBoolean = function(t) {
!1 === t ? this.writeU8(194) : this.writeU8(195);
}, t.prototype.encodeNumber = function(t) {
Number.isSafeInteger(t) ? t >= 0 ? t < 128 ? this.writeU8(t) : t < 256 ? (this.writeU8(204), 
this.writeU8(t)) : t < 65536 ? (this.writeU8(205), this.writeU16(t)) : t < 4294967296 ? (this.writeU8(206), 
this.writeU32(t)) : (this.writeU8(207), this.writeU64(t)) : t >= -32 ? this.writeU8(224 | t + 32) : t >= -128 ? (this.writeU8(208), 
this.writeI8(t)) : t >= -32768 ? (this.writeU8(209), this.writeI16(t)) : t >= -2147483648 ? (this.writeU8(210), 
this.writeI32(t)) : (this.writeU8(211), this.writeI64(t)) : this.forceFloat32 ? (this.writeU8(202), 
this.writeF32(t)) : (this.writeU8(203), this.writeF64(t));
}, t.prototype.writeStringHeader = function(t) {
if (t < 32) this.writeU8(160 + t); else if (t < 256) this.writeU8(217), this.writeU8(t); else if (t < 65536) this.writeU8(218), 
this.writeU16(t); else {
if (!(t < 4294967296)) throw new Error("Too long string: " + t + " bytes in UTF-8");
this.writeU8(219), this.writeU32(t);
}
}, t.prototype.encodeString = function(t) {
var e = t.length;
if (o && e > 200) {
var i = s(t);
this.ensureBufferSizeToWrite(5 + i), this.writeStringHeader(i), c(t, this.bytes, this.pos), 
this.pos += i;
} else {
if (S && e > 1024) {
var r = 5 + 4 * e;
this.ensureBufferSizeToWrite(r);
var n = O(t, this.bytes, this.pos);
return void (this.pos += n);
}
i = s(t);
this.ensureBufferSizeToWrite(5 + i), this.writeStringHeader(i), function(t, e, i) {
for (var r = t.length, n = i, o = 0; o < r; ) {
var s = t.charCodeAt(o++);
if (0 != (4294967168 & s)) {
if (0 == (4294965248 & s)) e[n++] = s >> 6 & 31 | 192; else {
if (s >= 55296 && s <= 56319 && o < r) {
var a = t.charCodeAt(o);
56320 == (64512 & a) && (++o, s = ((1023 & s) << 10) + (1023 & a) + 65536);
}
0 == (4294901760 & s) ? (e[n++] = s >> 12 & 15 | 224, e[n++] = s >> 6 & 63 | 128) : (e[n++] = s >> 18 & 7 | 240, 
e[n++] = s >> 12 & 63 | 128, e[n++] = s >> 6 & 63 | 128);
}
e[n++] = 63 & s | 128;
} else e[n++] = s;
}
}(t, this.bytes, this.pos), this.pos += i;
}
}, t.prototype.encodeObject = function(t, e) {
var i = this.extensionCodec.tryToEncode(t);
if (null != i) this.encodeExtension(i); else if (Array.isArray(t)) this.encodeArray(t, e); else if (ArrayBuffer.isView(t)) this.encodeBinary(t); else {
if ("object" != typeof t) throw new Error("Unrecognized object: " + Object.prototype.toString.apply(t));
this.encodeMap(t, e);
}
}, t.prototype.encodeBinary = function(t) {
var e = t.byteLength;
if (e < 256) this.writeU8(196), this.writeU8(e); else if (e < 65536) this.writeU8(197), 
this.writeU16(e); else {
if (!(e < 4294967296)) throw new Error("Too large binary: " + e);
this.writeU8(198), this.writeU32(e);
}
var i = P(t);
this.writeU8a(i);
}, t.prototype.encodeArray = function(t, e) {
var i, r, n = t.length;
if (n < 16) this.writeU8(144 + n); else if (n < 65536) this.writeU8(220), this.writeU16(n); else {
if (!(n < 4294967296)) throw new Error("Too large array: " + n);
this.writeU8(221), this.writeU32(n);
}
try {
for (var o = M(t), s = o.next(); !s.done; s = o.next()) {
var a = s.value;
this.encode(a, e + 1);
}
} catch (t) {
i = {
error: t
};
} finally {
try {
s && !s.done && (r = o.return) && r.call(o);
} finally {
if (i) throw i.error;
}
}
}, t.prototype.encodeMap = function(t, e) {
var i = Object.keys(t);
this.sortKeys && i.sort();
var r = i.length;
if (r < 16) this.writeU8(128 + r); else if (r < 65536) this.writeU8(222), this.writeU16(r); else {
if (!(r < 4294967296)) throw new Error("Too large map object: " + r);
this.writeU8(223), this.writeU32(r);
}
for (var n = 0; n < r; n++) {
var o = i[n];
this.encodeString(o), this.encode(t[o], e + 1);
}
}, t.prototype.encodeExtension = function(t) {
var e = t.data.length;
if (1 === e) this.writeU8(212); else if (2 === e) this.writeU8(213); else if (4 === e) this.writeU8(214); else if (8 === e) this.writeU8(215); else if (16 === e) this.writeU8(216); else if (e < 256) this.writeU8(199), 
this.writeU8(e); else if (e < 65536) this.writeU8(200), this.writeU16(e); else {
if (!(e < 4294967296)) throw new Error("Too large extension object: " + e);
this.writeU8(201), this.writeU32(e);
}
this.writeI8(t.type), this.writeU8a(t.data);
}, t.prototype.writeU8 = function(t) {
this.ensureBufferSizeToWrite(1), this.view.setUint8(this.pos, t), this.pos++;
}, t.prototype.writeU8a = function(t) {
var e = t.length;
this.ensureBufferSizeToWrite(e), this.bytes.set(t, this.pos), this.pos += e;
}, t.prototype.writeI8 = function(t) {
this.ensureBufferSizeToWrite(1), this.view.setInt8(this.pos, t), this.pos++;
}, t.prototype.writeU16 = function(t) {
this.ensureBufferSizeToWrite(2), this.view.setUint16(this.pos, t), this.pos += 2;
}, t.prototype.writeI16 = function(t) {
this.ensureBufferSizeToWrite(2), this.view.setInt16(this.pos, t), this.pos += 2;
}, t.prototype.writeU32 = function(t) {
this.ensureBufferSizeToWrite(4), this.view.setUint32(this.pos, t), this.pos += 4;
}, t.prototype.writeI32 = function(t) {
this.ensureBufferSizeToWrite(4), this.view.setInt32(this.pos, t), this.pos += 4;
}, t.prototype.writeF32 = function(t) {
this.ensureBufferSizeToWrite(4), this.view.setFloat32(this.pos, t), this.pos += 4;
}, t.prototype.writeF64 = function(t) {
this.ensureBufferSizeToWrite(8), this.view.setFloat64(this.pos, t), this.pos += 8;
}, t.prototype.writeU64 = function(t) {
this.ensureBufferSizeToWrite(8), function(t, e, i) {
var r = i / 4294967296, n = i;
t.setUint32(e, r), t.setUint32(e + 4, n);
}(this.view, this.pos, t), this.pos += 8;
}, t.prototype.writeI64 = function(t) {
this.ensureBufferSizeToWrite(8), p(this.view, this.pos, t), this.pos += 8;
}, t;
}(), L = {};
function V(t, e) {
void 0 === e && (e = L);
var i = new D(e.extensionCodec, e.maxDepth, e.initialBufferSize, e.sortKeys, e.forceFloat32);
return i.encode(t, 1), i.getUint8Array();
}
function F(t) {
return (t < 0 ? "-" : "") + "0x" + Math.abs(t).toString(16).padStart(2, "0");
}
var U = 16, j = 16, N = function() {
function t(t, e) {
void 0 === t && (t = U), void 0 === e && (e = j), this.maxKeyLength = t, this.maxLengthPerKey = e, 
this.caches = [];
for (var i = 0; i < this.maxKeyLength; i++) this.caches.push([]);
}
return t.prototype.canBeCached = function(t) {
return t > 0 && t <= this.maxKeyLength;
}, t.prototype.get = function(t, e, i) {
var r = this.caches[i - 1], n = r.length;
t: for (var o = 0; o < n; o++) {
for (var s = r[o], a = s.bytes, c = 0; c < i; c++) if (a[c] !== t[e + c]) continue t;
return s.value;
}
return null;
}, t.prototype.store = function(t, e) {
var i = this.caches[t.length - 1], r = {
bytes: t,
value: e
};
i.length >= this.maxLengthPerKey ? i[Math.random() * i.length | 0] = r : i.push(r);
}, t.prototype.decode = function(t, e, i) {
var r = this.get(t, e, i);
if (r) return r;
var n = u(t, e, i), o = Uint8Array.prototype.slice.call(t, e, e + i);
return this.store(o, n), n;
}, t;
}(), k = function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function s(t) {
try {
c(r.next(t));
} catch (t) {
o(t);
}
}
function a(t) {
try {
c(r.throw(t));
} catch (t) {
o(t);
}
}
function c(t) {
var e;
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(s, a);
}
c((r = r.apply(t, e || [])).next());
});
}, B = function(t, e) {
var i, r, n, o, s = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function a(o) {
return function(a) {
return function(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;s; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
switch (r = 0, n && (o = [ 2 & o[0], n.value ]), o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
return s.label++, {
value: o[1],
done: !1
};

case 5:
s.label++, r = o[1], o = [ 0 ];
continue;

case 7:
o = s.ops.pop(), s.trys.pop();
continue;

default:
if (!(n = (n = s.trys).length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
s = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
s.label = o[1];
break;
}
if (6 === o[0] && s.label < n[1]) {
s.label = n[1], n = o;
break;
}
if (n && s.label < n[2]) {
s.label = n[2], s.ops.push(o);
break;
}
n[2] && s.ops.pop(), s.trys.pop();
continue;
}
o = e.call(t, s);
} catch (t) {
o = [ 6, t ], r = 0;
} finally {
i = n = 0;
}
if (5 & o[0]) throw o[1];
return {
value: o[0] ? o[1] : void 0,
done: !0
};
}([ o, a ]);
};
}
}, z = function(t) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var e, i = t[Symbol.asyncIterator];
return i ? i.call(t) : (t = "function" == typeof __values ? __values(t) : t[Symbol.iterator](), 
e = {}, r("next"), r("throw"), r("return"), e[Symbol.asyncIterator] = function() {
return this;
}, e);
function r(i) {
e[i] = t[i] && function(e) {
return new Promise(function(r, n) {
(function(t, e, i, r) {
Promise.resolve(r).then(function(e) {
t({
value: e,
done: i
});
}, e);
})(r, n, (e = t[i](e)).done, e.value);
});
};
}
}, H = function t(e) {
return this instanceof t ? (this.v = e, this) : new t(e);
}, W = function(t, e, i) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var r, n = i.apply(t, e || []), o = [];
return r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function() {
return this;
}, r;
function s(t) {
n[t] && (r[t] = function(e) {
return new Promise(function(i, r) {
o.push([ t, e, i, r ]) > 1 || a(t, e);
});
});
}
function a(t, e) {
try {
(i = n[t](e)).value instanceof H ? Promise.resolve(i.value.v).then(c, l) : u(o[0][2], i);
} catch (t) {
u(o[0][3], t);
}
var i;
}
function c(t) {
a("next", t);
}
function l(t) {
a("throw", t);
}
function u(t, e) {
t(e), o.shift(), o.length && a(o[0][0], o[0][1]);
}
}, Y = -1, G = new DataView(new ArrayBuffer(0)), q = new Uint8Array(G.buffer), X = function() {
try {
G.getInt8(0);
} catch (t) {
return t.constructor;
}
throw new Error("never reached");
}(), Z = new X("Insufficient data"), J = 4294967295, K = new N(), $ = function() {
function t(t, e, i, r, n, o, s) {
void 0 === t && (t = T.defaultCodec), void 0 === e && (e = J), void 0 === i && (i = J), 
void 0 === r && (r = J), void 0 === n && (n = J), void 0 === o && (o = J), void 0 === s && (s = K), 
this.extensionCodec = t, this.maxStrLength = e, this.maxBinLength = i, this.maxArrayLength = r, 
this.maxMapLength = n, this.maxExtLength = o, this.cachedKeyDecoder = s, this.totalPos = 0, 
this.pos = 0, this.view = G, this.bytes = q, this.headByte = Y, this.stack = [];
}
return t.prototype.setBuffer = function(t) {
this.bytes = P(t), this.view = function(t) {
if (t instanceof ArrayBuffer) return new DataView(t);
var e = P(t);
return new DataView(e.buffer, e.byteOffset, e.byteLength);
}(this.bytes), this.pos = 0;
}, t.prototype.appendBuffer = function(t) {
if (this.headByte !== Y || this.hasRemaining()) {
var e = this.bytes.subarray(this.pos), i = P(t), r = new Uint8Array(e.length + i.length);
r.set(e), r.set(i, e.length), this.setBuffer(r);
} else this.setBuffer(t);
}, t.prototype.hasRemaining = function(t) {
return void 0 === t && (t = 1), this.view.byteLength - this.pos >= t;
}, t.prototype.createNoExtraBytesError = function(t) {
var e = this.view, i = this.pos;
return new RangeError("Extra " + (e.byteLength - i) + " byte(s) found at buffer[" + t + "]");
}, t.prototype.decodeSingleSync = function() {
var t = this.decodeSync();
if (this.hasRemaining()) throw this.createNoExtraBytesError(this.pos);
return t;
}, t.prototype.decodeSingleAsync = function(t) {
var e, i, r, n;
return k(this, void 0, void 0, function() {
var o, s, a, c, l, u, h, f;
return B(this, function(p) {
switch (p.label) {
case 0:
o = !1, p.label = 1;

case 1:
p.trys.push([ 1, 6, 7, 12 ]), e = z(t), p.label = 2;

case 2:
return [ 4, e.next() ];

case 3:
if ((i = p.sent()).done) return [ 3, 5 ];
if (a = i.value, o) throw this.createNoExtraBytesError(this.totalPos);
this.appendBuffer(a);
try {
s = this.decodeSync(), o = !0;
} catch (t) {
if (!(t instanceof X)) throw t;
}
this.totalPos += this.pos, p.label = 4;

case 4:
return [ 3, 2 ];

case 5:
return [ 3, 12 ];

case 6:
return c = p.sent(), r = {
error: c
}, [ 3, 12 ];

case 7:
return p.trys.push([ 7, , 10, 11 ]), i && !i.done && (n = e.return) ? [ 4, n.call(e) ] : [ 3, 9 ];

case 8:
p.sent(), p.label = 9;

case 9:
return [ 3, 11 ];

case 10:
if (r) throw r.error;
return [ 7 ];

case 11:
return [ 7 ];

case 12:
if (o) {
if (this.hasRemaining()) throw this.createNoExtraBytesError(this.totalPos);
return [ 2, s ];
}
throw u = (l = this).headByte, h = l.pos, f = l.totalPos, new RangeError("Insufficient data in parcing " + F(u) + " at " + f + " (" + h + " in the current buffer)");
}
});
});
}, t.prototype.decodeArrayStream = function(t) {
return this.decodeMultiAsync(t, !0);
}, t.prototype.decodeStream = function(t) {
return this.decodeMultiAsync(t, !1);
}, t.prototype.decodeMultiAsync = function(t, e) {
return W(this, arguments, function() {
var i, r, n, o, s, a, c, l, u;
return B(this, function(h) {
switch (h.label) {
case 0:
i = e, r = -1, h.label = 1;

case 1:
h.trys.push([ 1, 13, 14, 19 ]), n = z(t), h.label = 2;

case 2:
return [ 4, H(n.next()) ];

case 3:
if ((o = h.sent()).done) return [ 3, 12 ];
if (s = o.value, e && 0 === r) throw this.createNoExtraBytesError(this.totalPos);
this.appendBuffer(s), i && (r = this.readArraySize(), i = !1, this.complete()), 
h.label = 4;

case 4:
h.trys.push([ 4, 9, , 10 ]), h.label = 5;

case 5:
return [ 4, H(this.decodeSync()) ];

case 6:
return [ 4, h.sent() ];

case 7:
return h.sent(), 0 == --r ? [ 3, 8 ] : [ 3, 5 ];

case 8:
return [ 3, 10 ];

case 9:
if (!((a = h.sent()) instanceof X)) throw a;
return [ 3, 10 ];

case 10:
this.totalPos += this.pos, h.label = 11;

case 11:
return [ 3, 2 ];

case 12:
return [ 3, 19 ];

case 13:
return c = h.sent(), l = {
error: c
}, [ 3, 19 ];

case 14:
return h.trys.push([ 14, , 17, 18 ]), o && !o.done && (u = n.return) ? [ 4, H(u.call(n)) ] : [ 3, 16 ];

case 15:
h.sent(), h.label = 16;

case 16:
return [ 3, 18 ];

case 17:
if (l) throw l.error;
return [ 7 ];

case 18:
return [ 7 ];

case 19:
return [ 2 ];
}
});
});
}, t.prototype.decodeSync = function() {
t: for (;;) {
var t = this.readHeadByte(), e = void 0;
if (t >= 224) e = t - 256; else if (t < 192) if (t < 128) e = t; else if (t < 144) {
if (0 != (r = t - 128)) {
this.pushMapState(r), this.complete();
continue t;
}
e = {};
} else if (t < 160) {
if (0 != (r = t - 144)) {
this.pushArrayState(r), this.complete();
continue t;
}
e = [];
} else {
var i = t - 160;
e = this.decodeUtf8String(i, 0);
} else if (192 === t) e = null; else if (194 === t) e = !1; else if (195 === t) e = !0; else if (202 === t) e = this.readF32(); else if (203 === t) e = this.readF64(); else if (204 === t) e = this.readU8(); else if (205 === t) e = this.readU16(); else if (206 === t) e = this.readU32(); else if (207 === t) e = this.readU64(); else if (208 === t) e = this.readI8(); else if (209 === t) e = this.readI16(); else if (210 === t) e = this.readI32(); else if (211 === t) e = this.readI64(); else if (217 === t) {
i = this.lookU8();
e = this.decodeUtf8String(i, 1);
} else if (218 === t) {
i = this.lookU16();
e = this.decodeUtf8String(i, 2);
} else if (219 === t) {
i = this.lookU32();
e = this.decodeUtf8String(i, 4);
} else if (220 === t) {
if (0 !== (r = this.readU16())) {
this.pushArrayState(r), this.complete();
continue t;
}
e = [];
} else if (221 === t) {
if (0 !== (r = this.readU32())) {
this.pushArrayState(r), this.complete();
continue t;
}
e = [];
} else if (222 === t) {
if (0 !== (r = this.readU16())) {
this.pushMapState(r), this.complete();
continue t;
}
e = {};
} else if (223 === t) {
if (0 !== (r = this.readU32())) {
this.pushMapState(r), this.complete();
continue t;
}
e = {};
} else if (196 === t) {
var r = this.lookU8();
e = this.decodeBinary(r, 1);
} else if (197 === t) {
r = this.lookU16();
e = this.decodeBinary(r, 2);
} else if (198 === t) {
r = this.lookU32();
e = this.decodeBinary(r, 4);
} else if (212 === t) e = this.decodeExtension(1, 0); else if (213 === t) e = this.decodeExtension(2, 0); else if (214 === t) e = this.decodeExtension(4, 0); else if (215 === t) e = this.decodeExtension(8, 0); else if (216 === t) e = this.decodeExtension(16, 0); else if (199 === t) {
r = this.lookU8();
e = this.decodeExtension(r, 1);
} else if (200 === t) {
r = this.lookU16();
e = this.decodeExtension(r, 2);
} else {
if (201 !== t) throw new Error("Unrecognized type byte: " + F(t));
r = this.lookU32();
e = this.decodeExtension(r, 4);
}
this.complete();
for (var n = this.stack; n.length > 0; ) {
var o = n[n.length - 1];
if (0 === o.type) {
if (o.array[o.position] = e, o.position++, o.position !== o.size) continue t;
n.pop(), e = o.array;
} else {
if (1 === o.type) {
if ("string" != (s = typeof e) && "number" !== s) throw new Error("The type of key must be string or number but " + typeof e);
o.key = e, o.type = 2;
continue t;
}
if (2 === o.type) {
if (o.map[o.key] = e, o.readCount++, o.readCount !== o.size) {
o.key = null, o.type = 1;
continue t;
}
n.pop(), e = o.map;
}
}
}
return e;
}
var s;
}, t.prototype.readHeadByte = function() {
return this.headByte === Y && (this.headByte = this.readU8()), this.headByte;
}, t.prototype.complete = function() {
this.headByte = Y;
}, t.prototype.readArraySize = function() {
var t = this.readHeadByte();
switch (t) {
case 220:
return this.readU16();

case 221:
return this.readU32();

default:
if (t < 160) return t - 144;
throw new Error("Unrecognized array type byte: " + F(t));
}
}, t.prototype.pushMapState = function(t) {
if (t > this.maxMapLength) throw new Error("Max length exceeded: map length (" + t + ") > maxMapLengthLength (" + this.maxMapLength + ")");
this.stack.push({
type: 1,
size: t,
key: null,
readCount: 0,
map: {}
});
}, t.prototype.pushArrayState = function(t) {
if (t > this.maxArrayLength) throw new Error("Max length exceeded: array length (" + t + ") > maxArrayLength (" + this.maxArrayLength + ")");
this.stack.push({
type: 0,
size: t,
array: new Array(t),
position: 0
});
}, t.prototype.decodeUtf8String = function(t, e) {
if (t > this.maxStrLength) throw new Error("Max length exceeded: UTF-8 byte length (" + t + ") > maxStrLength (" + this.maxStrLength + ")");
if (this.bytes.byteLength < this.pos + e + t) throw Z;
var i, r = this.pos + e;
return i = this.cachedKeyDecoder && this.stateIsMapKey() && this.cachedKeyDecoder.canBeCached(t) ? this.cachedKeyDecoder.decode(this.bytes, r, t) : o && t > 200 ? function(t, e, i) {
var r = t.subarray(e, e + i);
return h.decode(r);
}(this.bytes, r, t) : S && t > 1024 ? I(this.bytes, r, t) : u(this.bytes, r, t), 
this.pos += e + t, i;
}, t.prototype.stateIsMapKey = function() {
return this.stack.length > 0 && 1 === this.stack[this.stack.length - 1].type;
}, t.prototype.decodeBinary = function(t, e) {
if (t > this.maxBinLength) throw new Error("Max length exceeded: bin length (" + t + ") > maxBinLength (" + this.maxBinLength + ")");
if (!this.hasRemaining(t + e)) throw Z;
var i = this.pos + e, r = this.bytes.subarray(i, i + t);
return this.pos += e + t, r;
}, t.prototype.decodeExtension = function(t, e) {
if (t > this.maxExtLength) throw new Error("Max length exceeded: ext length (" + t + ") > maxExtLength (" + this.maxExtLength + ")");
var i = this.view.getInt8(this.pos + e), r = this.decodeBinary(t, e + 1);
return this.extensionCodec.decode(r, i);
}, t.prototype.lookU8 = function() {
return this.view.getUint8(this.pos);
}, t.prototype.lookU16 = function() {
return this.view.getUint16(this.pos);
}, t.prototype.lookU32 = function() {
return this.view.getUint32(this.pos);
}, t.prototype.readU8 = function() {
var t = this.view.getUint8(this.pos);
return this.pos++, t;
}, t.prototype.readI8 = function() {
var t = this.view.getInt8(this.pos);
return this.pos++, t;
}, t.prototype.readU16 = function() {
var t = this.view.getUint16(this.pos);
return this.pos += 2, t;
}, t.prototype.readI16 = function() {
var t = this.view.getInt16(this.pos);
return this.pos += 2, t;
}, t.prototype.readU32 = function() {
var t = this.view.getUint32(this.pos);
return this.pos += 4, t;
}, t.prototype.readI32 = function() {
var t = this.view.getInt32(this.pos);
return this.pos += 4, t;
}, t.prototype.readU64 = function() {
var t, e, i = (t = this.view, e = this.pos, 4294967296 * t.getUint32(e) + t.getUint32(e + 4));
return this.pos += 8, i;
}, t.prototype.readI64 = function() {
var t = d(this.view, this.pos);
return this.pos += 8, t;
}, t.prototype.readF32 = function() {
var t = this.view.getFloat32(this.pos);
return this.pos += 4, t;
}, t.prototype.readF64 = function() {
var t = this.view.getFloat64(this.pos);
return this.pos += 8, t;
}, t;
}(), Q = {};
function tt(t, e) {
void 0 === e && (e = Q);
var i = new $(e.extensionCodec, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength);
return i.setBuffer(t), i.decodeSingleSync();
}
var et = function(t, e) {
var i, r, n, o, s = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function a(o) {
return function(a) {
return function(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;s; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
switch (r = 0, n && (o = [ 2 & o[0], n.value ]), o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
return s.label++, {
value: o[1],
done: !1
};

case 5:
s.label++, r = o[1], o = [ 0 ];
continue;

case 7:
o = s.ops.pop(), s.trys.pop();
continue;

default:
if (!(n = (n = s.trys).length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
s = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
s.label = o[1];
break;
}
if (6 === o[0] && s.label < n[1]) {
s.label = n[1], n = o;
break;
}
if (n && s.label < n[2]) {
s.label = n[2], s.ops.push(o);
break;
}
n[2] && s.ops.pop(), s.trys.pop();
continue;
}
o = e.call(t, s);
} catch (t) {
o = [ 6, t ], r = 0;
} finally {
i = n = 0;
}
if (5 & o[0]) throw o[1];
return {
value: o[0] ? o[1] : void 0,
done: !0
};
}([ o, a ]);
};
}
}, it = function t(e) {
return this instanceof t ? (this.v = e, this) : new t(e);
}, rt = function(t, e, i) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var r, n = i.apply(t, e || []), o = [];
return r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function() {
return this;
}, r;
function s(t) {
n[t] && (r[t] = function(e) {
return new Promise(function(i, r) {
o.push([ t, e, i, r ]) > 1 || a(t, e);
});
});
}
function a(t, e) {
try {
(i = n[t](e)).value instanceof it ? Promise.resolve(i.value.v).then(c, l) : u(o[0][2], i);
} catch (t) {
u(o[0][3], t);
}
var i;
}
function c(t) {
a("next", t);
}
function l(t) {
a("throw", t);
}
function u(t, e) {
t(e), o.shift(), o.length && a(o[0][0], o[0][1]);
}
};
function nt(t) {
return null != t[Symbol.asyncIterator] ? t : function(t) {
return rt(this, arguments, function() {
var e, i, r, n;
return et(this, function(o) {
switch (o.label) {
case 0:
e = t.getReader(), o.label = 1;

case 1:
o.trys.push([ 1, , 9, 10 ]), o.label = 2;

case 2:
return [ 4, it(e.read()) ];

case 3:
return i = o.sent(), r = i.done, n = i.value, r ? [ 4, it(void 0) ] : [ 3, 5 ];

case 4:
return [ 2, o.sent() ];

case 5:
return [ 4, it(n) ];

case 6:
return [ 4, o.sent() ];

case 7:
return o.sent(), [ 3, 2 ];

case 8:
return [ 3, 10 ];

case 9:
return e.releaseLock(), [ 7 ];

case 10:
return [ 2 ];
}
});
});
}(t);
}
var ot = function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function s(t) {
try {
c(r.next(t));
} catch (t) {
o(t);
}
}
function a(t) {
try {
c(r.throw(t));
} catch (t) {
o(t);
}
}
function c(t) {
var e;
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(s, a);
}
c((r = r.apply(t, e || [])).next());
});
}, st = function(t, e) {
var i, r, n, o, s = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function a(o) {
return function(a) {
return function(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;s; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
switch (r = 0, n && (o = [ 2 & o[0], n.value ]), o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
return s.label++, {
value: o[1],
done: !1
};

case 5:
s.label++, r = o[1], o = [ 0 ];
continue;

case 7:
o = s.ops.pop(), s.trys.pop();
continue;

default:
if (!(n = (n = s.trys).length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
s = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
s.label = o[1];
break;
}
if (6 === o[0] && s.label < n[1]) {
s.label = n[1], n = o;
break;
}
if (n && s.label < n[2]) {
s.label = n[2], s.ops.push(o);
break;
}
n[2] && s.ops.pop(), s.trys.pop();
continue;
}
o = e.call(t, s);
} catch (t) {
o = [ 6, t ], r = 0;
} finally {
i = n = 0;
}
if (5 & o[0]) throw o[1];
return {
value: o[0] ? o[1] : void 0,
done: !0
};
}([ o, a ]);
};
}
};
function at(t, e) {
return void 0 === e && (e = Q), ot(this, void 0, void 0, function() {
var i;
return st(this, function() {
return i = nt(t), [ 2, new $(e.extensionCodec, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decodeSingleAsync(i) ];
});
});
}
function ct(t, e) {
void 0 === e && (e = Q);
var i = nt(t);
return new $(e.extensionCodec, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decodeArrayStream(i);
}
function lt(t, e) {
void 0 === e && (e = Q);
var i = nt(t);
return new $(e.extensionCodec, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decodeStream(i);
}
i.d(e, "encode", function() {
return V;
}), i.d(e, "decode", function() {
return tt;
}), i.d(e, "decodeAsync", function() {
return at;
}), i.d(e, "decodeArrayStream", function() {
return ct;
}), i.d(e, "decodeStream", function() {
return lt;
}), i.d(e, "Decoder", function() {
return $;
}), i.d(e, "Encoder", function() {
return D;
}), i.d(e, "ExtensionCodec", function() {
return T;
}), i.d(e, "ExtData", function() {
return f;
}), i.d(e, "EXT_TIMESTAMP", function() {
return -1;
}), i.d(e, "encodeDateToTimeSpec", function() {
return m;
}), i.d(e, "encodeTimeSpecToTimestamp", function() {
return v;
}), i.d(e, "decodeTimestampToTimeSpec", function() {
return b;
}), i.d(e, "encodeTimestampExtension", function() {
return _;
}), i.d(e, "decodeTimestampExtension", function() {
return w;
}), i.d(e, "__WASM_AVAILABLE", function() {
return S;
});
} ]);
}, "object" == typeof i && "object" == typeof e ? e.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == typeof i ? i.MessagePack = r() : (void 0).MessagePack = r();
var r;
cc._RF.pop();
}, {} ],
protobuf: [ function(t, e) {
(function(i) {
"use strict";
cc._RF.push(e, "bdb28IdKRVNA4M4+3Vsav8v", "protobuf");
r = function(e) {
var r = {};
r.ByteBuffer = e;
r.Long = e.Long || null;
r.VERSION = "5.0.3";
r.WIRE_TYPES = {};
r.WIRE_TYPES.VARINT = 0;
r.WIRE_TYPES.BITS64 = 1;
r.WIRE_TYPES.LDELIM = 2;
r.WIRE_TYPES.STARTGROUP = 3;
r.WIRE_TYPES.ENDGROUP = 4;
r.WIRE_TYPES.BITS32 = 5;
r.PACKABLE_WIRE_TYPES = [ r.WIRE_TYPES.VARINT, r.WIRE_TYPES.BITS64, r.WIRE_TYPES.BITS32 ];
r.TYPES = {
int32: {
name: "int32",
wireType: r.WIRE_TYPES.VARINT,
defaultValue: 0
},
uint32: {
name: "uint32",
wireType: r.WIRE_TYPES.VARINT,
defaultValue: 0
},
sint32: {
name: "sint32",
wireType: r.WIRE_TYPES.VARINT,
defaultValue: 0
},
int64: {
name: "int64",
wireType: r.WIRE_TYPES.VARINT,
defaultValue: r.Long ? r.Long.ZERO : void 0
},
uint64: {
name: "uint64",
wireType: r.WIRE_TYPES.VARINT,
defaultValue: r.Long ? r.Long.UZERO : void 0
},
sint64: {
name: "sint64",
wireType: r.WIRE_TYPES.VARINT,
defaultValue: r.Long ? r.Long.ZERO : void 0
},
bool: {
name: "bool",
wireType: r.WIRE_TYPES.VARINT,
defaultValue: !1
},
double: {
name: "double",
wireType: r.WIRE_TYPES.BITS64,
defaultValue: 0
},
string: {
name: "string",
wireType: r.WIRE_TYPES.LDELIM,
defaultValue: ""
},
bytes: {
name: "bytes",
wireType: r.WIRE_TYPES.LDELIM,
defaultValue: null
},
fixed32: {
name: "fixed32",
wireType: r.WIRE_TYPES.BITS32,
defaultValue: 0
},
sfixed32: {
name: "sfixed32",
wireType: r.WIRE_TYPES.BITS32,
defaultValue: 0
},
fixed64: {
name: "fixed64",
wireType: r.WIRE_TYPES.BITS64,
defaultValue: r.Long ? r.Long.UZERO : void 0
},
sfixed64: {
name: "sfixed64",
wireType: r.WIRE_TYPES.BITS64,
defaultValue: r.Long ? r.Long.ZERO : void 0
},
float: {
name: "float",
wireType: r.WIRE_TYPES.BITS32,
defaultValue: 0
},
enum: {
name: "enum",
wireType: r.WIRE_TYPES.VARINT,
defaultValue: 0
},
message: {
name: "message",
wireType: r.WIRE_TYPES.LDELIM,
defaultValue: null
},
group: {
name: "group",
wireType: r.WIRE_TYPES.STARTGROUP,
defaultValue: null
}
};
r.MAP_KEY_TYPES = [ r.TYPES.int32, r.TYPES.sint32, r.TYPES.sfixed32, r.TYPES.uint32, r.TYPES.fixed32, r.TYPES.int64, r.TYPES.sint64, r.TYPES.sfixed64, r.TYPES.uint64, r.TYPES.fixed64, r.TYPES.bool, r.TYPES.string, r.TYPES.bytes ];
r.ID_MIN = 1;
r.ID_MAX = 536870911;
r.convertFieldsToCamelCase = !1;
r.populateAccessors = !0;
r.populateDefaults = !0;
r.Util = function() {
var e = {};
e.IS_NODE = !("object" != typeof i || i + "" != "[object process]" || i.browser);
e.XHR = function() {
for (var t = [ function() {
return new XMLHttpRequest();
}, function() {
return new ActiveXObject("Msxml2.XMLHTTP");
}, function() {
return new ActiveXObject("Msxml3.XMLHTTP");
}, function() {
return new ActiveXObject("Microsoft.XMLHTTP");
} ], e = null, i = 0; i < t.length; i++) {
try {
e = t[i]();
} catch (t) {
continue;
}
break;
}
if (!e) throw Error("XMLHttpRequest is not supported");
return e;
};
e.fetch = function(i, r) {
r && "function" != typeof r && (r = null);
if (cc) c2f.res.load("resources", i, cc.TextAsset, function(t, e) {
var n = null;
t || (n = e.text);
c2f.res.release(i, cc.TextAsset);
if (!r) return n;
r(n);
}); else if (e.IS_NODE) {
var n = t("fs");
if (r) n.readFile(i, function(t, e) {
r(t ? null : "" + e);
}); else try {
return n.readFileSync(i);
} catch (t) {
return null;
}
} else {
var o = e.XHR();
o.open("GET", i, !!r);
o.setRequestHeader("Accept", "text/plain");
"function" == typeof o.overrideMimeType && o.overrideMimeType("text/plain");
if (!r) {
o.send(null);
return 200 == o.status || 0 == o.status && "string" == typeof o.responseText ? o.responseText : null;
}
o.onreadystatechange = function() {
4 == o.readyState && (200 == o.status || 0 == o.status && "string" == typeof o.responseText ? r(o.responseText) : r(null));
};
if (4 == o.readyState) return;
o.send(null);
}
};
e.toCamelCase = function(t) {
return t.replace(/_([a-zA-Z])/g, function(t, e) {
return e.toUpperCase();
});
};
return e;
}();
r.Lang = {
DELIM: /[\s\{\}=;:\[\],'"\(\)<>]/g,
RULE: /^(?:required|optional|repeated|map)$/,
TYPE: /^(?:double|float|int32|uint32|sint32|int64|uint64|sint64|fixed32|sfixed32|fixed64|sfixed64|bool|string|bytes)$/,
NAME: /^[a-zA-Z_][a-zA-Z_0-9]*$/,
TYPEDEF: /^[a-zA-Z][a-zA-Z_0-9]*$/,
TYPEREF: /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
FQTYPEREF: /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/,
NUMBER: /^-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+|([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?)|inf|nan)$/,
NUMBER_DEC: /^(?:[1-9][0-9]*|0)$/,
NUMBER_HEX: /^0[xX][0-9a-fA-F]+$/,
NUMBER_OCT: /^0[0-7]+$/,
NUMBER_FLT: /^([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?|inf|nan)$/,
BOOL: /^(?:true|false)$/i,
ID: /^(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
NEGID: /^\-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
WHITESPACE: /\s/,
STRING: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")|(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
STRING_DQ: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
STRING_SQ: /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g
};
r.DotProto = function(t, e) {
var i = {}, r = function(t) {
this.source = t + "";
this.index = 0;
this.line = 1;
this.stack = [];
this._stringOpen = null;
}, n = r.prototype;
n._readString = function() {
var t = '"' === this._stringOpen ? e.STRING_DQ : e.STRING_SQ;
t.lastIndex = this.index - 1;
var i = t.exec(this.source);
if (!i) throw Error("unterminated string");
this.index = t.lastIndex;
this.stack.push(this._stringOpen);
this._stringOpen = null;
return i[1];
};
n.next = function() {
if (this.stack.length > 0) return this.stack.shift();
if (this.index >= this.source.length) return null;
if (null !== this._stringOpen) return this._readString();
var t, i, r;
do {
t = !1;
for (;e.WHITESPACE.test(r = this.source.charAt(this.index)); ) {
"\n" === r && ++this.line;
if (++this.index === this.source.length) return null;
}
if ("/" === this.source.charAt(this.index)) {
++this.index;
if ("/" === this.source.charAt(this.index)) {
for (;"\n" !== this.source.charAt(++this.index); ) if (this.index == this.source.length) return null;
++this.index;
++this.line;
t = !0;
} else {
if ("*" !== (r = this.source.charAt(this.index))) return "/";
do {
"\n" === r && ++this.line;
if (++this.index === this.source.length) return null;
i = r;
r = this.source.charAt(this.index);
} while ("*" !== i || "/" !== r);
++this.index;
t = !0;
}
}
} while (t);
if (this.index === this.source.length) return null;
var n = this.index;
e.DELIM.lastIndex = 0;
if (!e.DELIM.test(this.source.charAt(n++))) for (;n < this.source.length && !e.DELIM.test(this.source.charAt(n)); ) ++n;
var o = this.source.substring(this.index, this.index = n);
'"' !== o && "'" !== o || (this._stringOpen = o);
return o;
};
n.peek = function() {
if (0 === this.stack.length) {
var t = this.next();
if (null === t) return null;
this.stack.push(t);
}
return this.stack[0];
};
n.skip = function(t) {
var e = this.next();
if (e !== t) throw Error("illegal '" + e + "', '" + t + "' expected");
};
n.omit = function(t) {
if (this.peek() === t) {
this.next();
return !0;
}
return !1;
};
n.toString = function() {
return "Tokenizer (" + this.index + "/" + this.source.length + " at line " + this.line + ")";
};
i.Tokenizer = r;
var o = function(t) {
this.tn = new r(t);
this.proto3 = !1;
}, s = o.prototype;
s.parse = function() {
var t, i, r = {
name: "[ROOT]",
package: null,
messages: [],
enums: [],
imports: [],
options: {},
services: []
}, n = !0;
try {
for (;t = this.tn.next(); ) switch (t) {
case "package":
if (!n || null !== r.package) throw Error("unexpected 'package'");
t = this.tn.next();
if (!e.TYPEREF.test(t)) throw Error("illegal package name: " + t);
this.tn.skip(";");
r.package = t;
break;

case "import":
if (!n) throw Error("unexpected 'import'");
("public" === (t = this.tn.peek()) || (i = "weak" === t)) && this.tn.next();
t = this._readString();
this.tn.skip(";");
i || r.imports.push(t);
break;

case "syntax":
if (!n) throw Error("unexpected 'syntax'");
this.tn.skip("=");
"proto3" === (r.syntax = this._readString()) && (this.proto3 = !0);
this.tn.skip(";");
break;

case "message":
this._parseMessage(r, null);
n = !1;
break;

case "enum":
this._parseEnum(r);
n = !1;
break;

case "option":
this._parseOption(r);
break;

case "service":
this._parseService(r);
break;

case "extend":
this._parseExtend(r);
break;

default:
throw Error("unexpected '" + t + "'");
}
} catch (t) {
t.message = "Parse error at line " + this.tn.line + ": " + t.message;
throw t;
}
delete r.name;
return r;
};
o.parse = function(t) {
return new o(t).parse();
};
function a(t, i) {
var r = -1, n = 1;
if ("-" == t.charAt(0)) {
n = -1;
t = t.substring(1);
}
if (e.NUMBER_DEC.test(t)) r = parseInt(t); else if (e.NUMBER_HEX.test(t)) r = parseInt(t.substring(2), 16); else {
if (!e.NUMBER_OCT.test(t)) throw Error("illegal id value: " + (n < 0 ? "-" : "") + t);
r = parseInt(t.substring(1), 8);
}
r = n * r | 0;
if (!i && r < 0) throw Error("illegal id value: " + (n < 0 ? "-" : "") + t);
return r;
}
function c(t) {
var i = 1;
if ("-" == t.charAt(0)) {
i = -1;
t = t.substring(1);
}
if (e.NUMBER_DEC.test(t)) return i * parseInt(t, 10);
if (e.NUMBER_HEX.test(t)) return i * parseInt(t.substring(2), 16);
if (e.NUMBER_OCT.test(t)) return i * parseInt(t.substring(1), 8);
if ("inf" === t) return Infinity * i;
if ("nan" === t) return NaN;
if (e.NUMBER_FLT.test(t)) return i * parseFloat(t);
throw Error("illegal number value: " + (i < 0 ? "-" : "") + t);
}
s._readString = function() {
var t, e, i = "";
do {
if ("'" !== (e = this.tn.next()) && '"' !== e) throw Error("illegal string delimiter: " + e);
i += this.tn.next();
this.tn.skip(e);
t = this.tn.peek();
} while ('"' === t || '"' === t);
return i;
};
s._readValue = function(t) {
var i = this.tn.peek();
if ('"' === i || "'" === i) return this._readString();
this.tn.next();
if (e.NUMBER.test(i)) return c(i);
if (e.BOOL.test(i)) return "true" === i.toLowerCase();
if (t && e.TYPEREF.test(i)) return i;
throw Error("illegal value: " + i);
};
s._parseOption = function(t, i) {
var r = this.tn.next(), n = !1;
if ("(" === r) {
n = !0;
r = this.tn.next();
}
if (!e.TYPEREF.test(r)) throw Error("illegal option name: " + r);
var o = r;
if (n) {
this.tn.skip(")");
o = "(" + o + ")";
r = this.tn.peek();
if (e.FQTYPEREF.test(r)) {
o += r;
this.tn.next();
}
}
this.tn.skip("=");
this._parseOptionValue(t, o);
i || this.tn.skip(";");
};
function l(t, e, i) {
if ("undefined" == typeof t[e]) t[e] = i; else {
Array.isArray(t[e]) || (t[e] = [ t[e] ]);
t[e].push(i);
}
}
s._parseOptionValue = function(t, i) {
var r = this.tn.peek();
if ("{" !== r) l(t.options, i, this._readValue(!0)); else {
this.tn.skip("{");
for (;"}" !== (r = this.tn.next()); ) {
if (!e.NAME.test(r)) throw Error("illegal option name: " + i + "." + r);
this.tn.omit(":") ? l(t.options, i + "." + r, this._readValue(!0)) : this._parseOptionValue(t, i + "." + r);
}
}
};
s._parseService = function(t) {
var i = this.tn.next();
if (!e.NAME.test(i)) throw Error("illegal service name at line " + this.tn.line + ": " + i);
var r = {
name: i,
rpc: {},
options: {}
};
this.tn.skip("{");
for (;"}" !== (i = this.tn.next()); ) if ("option" === i) this._parseOption(r); else {
if ("rpc" !== i) throw Error("illegal service token: " + i);
this._parseServiceRPC(r);
}
this.tn.omit(";");
t.services.push(r);
};
s._parseServiceRPC = function(t) {
var i = this.tn.next();
if (!e.NAME.test(i)) throw Error("illegal rpc service method name: " + i);
var r = i, n = {
request: null,
response: null,
request_stream: !1,
response_stream: !1,
options: {}
};
this.tn.skip("(");
if ("stream" === (i = this.tn.next()).toLowerCase()) {
n.request_stream = !0;
i = this.tn.next();
}
if (!e.TYPEREF.test(i)) throw Error("illegal rpc service request type: " + i);
n.request = i;
this.tn.skip(")");
if ("returns" !== (i = this.tn.next()).toLowerCase()) throw Error("illegal rpc service request type delimiter: " + i);
this.tn.skip("(");
if ("stream" === (i = this.tn.next()).toLowerCase()) {
n.response_stream = !0;
i = this.tn.next();
}
n.response = i;
this.tn.skip(")");
if ("{" === (i = this.tn.peek())) {
this.tn.next();
for (;"}" !== (i = this.tn.next()); ) {
if ("option" !== i) throw Error("illegal rpc service token: " + i);
this._parseOption(n);
}
this.tn.omit(";");
} else this.tn.skip(";");
"undefined" == typeof t.rpc && (t.rpc = {});
t.rpc[r] = n;
};
s._parseMessage = function(t, i) {
var r = !!i, n = this.tn.next(), o = {
name: "",
fields: [],
enums: [],
messages: [],
options: {},
services: [],
oneofs: {}
};
if (!e.NAME.test(n)) throw Error("illegal " + (r ? "group" : "message") + " name: " + n);
o.name = n;
if (r) {
this.tn.skip("=");
i.id = a(this.tn.next());
o.isGroup = !0;
}
"[" === (n = this.tn.peek()) && i && this._parseFieldOptions(i);
this.tn.skip("{");
for (;"}" !== (n = this.tn.next()); ) if (e.RULE.test(n)) this._parseMessageField(o, n); else if ("oneof" === n) this._parseMessageOneOf(o); else if ("enum" === n) this._parseEnum(o); else if ("message" === n) this._parseMessage(o); else if ("option" === n) this._parseOption(o); else if ("service" === n) this._parseService(o); else if ("extensions" === n) o.hasOwnProperty("extensions") ? o.extensions = o.extensions.concat(this._parseExtensionRanges()) : o.extensions = this._parseExtensionRanges(); else if ("reserved" === n) this._parseIgnored(); else if ("extend" === n) this._parseExtend(o); else {
if (!e.TYPEREF.test(n)) throw Error("illegal message token: " + n);
if (!this.proto3) throw Error("illegal field rule: " + n);
this._parseMessageField(o, "optional", n);
}
this.tn.omit(";");
t.messages.push(o);
return o;
};
s._parseIgnored = function() {
for (;";" !== this.tn.peek(); ) this.tn.next();
this.tn.skip(";");
};
s._parseMessageField = function(t, i, r) {
if (!e.RULE.test(i)) throw Error("illegal message field rule: " + i);
var n, o = {
rule: i,
type: "",
name: "",
options: {},
id: 0
};
if ("map" === i) {
if (r) throw Error("illegal type: " + r);
this.tn.skip("<");
n = this.tn.next();
if (!e.TYPE.test(n) && !e.TYPEREF.test(n)) throw Error("illegal message field type: " + n);
o.keytype = n;
this.tn.skip(",");
n = this.tn.next();
if (!e.TYPE.test(n) && !e.TYPEREF.test(n)) throw Error("illegal message field: " + n);
o.type = n;
this.tn.skip(">");
n = this.tn.next();
if (!e.NAME.test(n)) throw Error("illegal message field name: " + n);
o.name = n;
this.tn.skip("=");
o.id = a(this.tn.next());
"[" === (n = this.tn.peek()) && this._parseFieldOptions(o);
this.tn.skip(";");
} else if ("group" === (r = "undefined" != typeof r ? r : this.tn.next())) {
var s = this._parseMessage(t, o);
if (!/^[A-Z]/.test(s.name)) throw Error("illegal group name: " + s.name);
o.type = s.name;
o.name = s.name.toLowerCase();
this.tn.omit(";");
} else {
if (!e.TYPE.test(r) && !e.TYPEREF.test(r)) throw Error("illegal message field type: " + r);
o.type = r;
n = this.tn.next();
if (!e.NAME.test(n)) throw Error("illegal message field name: " + n);
o.name = n;
this.tn.skip("=");
o.id = a(this.tn.next());
"[" === (n = this.tn.peek()) && this._parseFieldOptions(o);
this.tn.skip(";");
}
t.fields.push(o);
return o;
};
s._parseMessageOneOf = function(t) {
var i = this.tn.next();
if (!e.NAME.test(i)) throw Error("illegal oneof name: " + i);
var r, n = i, o = [];
this.tn.skip("{");
for (;"}" !== (i = this.tn.next()); ) {
(r = this._parseMessageField(t, "optional", i)).oneof = n;
o.push(r.id);
}
this.tn.omit(";");
t.oneofs[n] = o;
};
s._parseFieldOptions = function(t) {
this.tn.skip("[");
for (var e = !0; "]" !== this.tn.peek(); ) {
e || this.tn.skip(",");
this._parseOption(t, !0);
e = !1;
}
this.tn.next();
};
s._parseEnum = function(t) {
var i = {
name: "",
values: [],
options: {}
}, r = this.tn.next();
if (!e.NAME.test(r)) throw Error("illegal name: " + r);
i.name = r;
this.tn.skip("{");
for (;"}" !== (r = this.tn.next()); ) if ("option" === r) this._parseOption(i); else {
if (!e.NAME.test(r)) throw Error("illegal name: " + r);
this.tn.skip("=");
var n = {
name: r,
id: a(this.tn.next(), !0)
};
"[" === (r = this.tn.peek()) && this._parseFieldOptions({
options: {}
});
this.tn.skip(";");
i.values.push(n);
}
this.tn.omit(";");
t.enums.push(i);
};
s._parseExtensionRanges = function() {
var e, i, r, n = [];
do {
i = [];
for (;;) {
switch (e = this.tn.next()) {
case "min":
r = t.ID_MIN;
break;

case "max":
r = t.ID_MAX;
break;

default:
r = c(e);
}
i.push(r);
if (2 === i.length) break;
if ("to" !== this.tn.peek()) {
i.push(r);
break;
}
this.tn.next();
}
n.push(i);
} while (this.tn.omit(","));
this.tn.skip(";");
return n;
};
s._parseExtend = function(t) {
var i = this.tn.next();
if (!e.TYPEREF.test(i)) throw Error("illegal extend reference: " + i);
var r = {
ref: i,
fields: []
};
this.tn.skip("{");
for (;"}" !== (i = this.tn.next()); ) if (e.RULE.test(i)) this._parseMessageField(r, i); else {
if (!e.TYPEREF.test(i)) throw Error("illegal extend token: " + i);
if (!this.proto3) throw Error("illegal field rule: " + i);
this._parseMessageField(r, "optional", i);
}
this.tn.omit(";");
t.messages.push(r);
return r;
};
s.toString = function() {
return "Parser at line " + this.tn.line;
};
i.Parser = o;
return i;
}(r, r.Lang);
r.Reflect = function(t) {
var i = {}, r = function(t, e, i) {
this.builder = t;
this.parent = e;
this.name = i;
this.className;
}, n = r.prototype;
n.fqn = function() {
for (var t = this.name, e = this; null != (e = e.parent); ) t = e.name + "." + t;
return t;
};
n.toString = function(t) {
return (t ? this.className + " " : "") + this.fqn();
};
n.build = function() {
throw Error(this.toString(!0) + " cannot be built directly");
};
i.T = r;
var o = function(t, e, i, n, o) {
r.call(this, t, e, i);
this.className = "Namespace";
this.children = [];
this.options = n || {};
this.syntax = o || "proto2";
}, s = o.prototype = Object.create(r.prototype);
s.getChildren = function(t) {
if (null == (t = t || null)) return this.children.slice();
for (var e = [], i = 0, r = this.children.length; i < r; ++i) this.children[i] instanceof t && e.push(this.children[i]);
return e;
};
s.addChild = function(t) {
var e;
if (e = this.getChild(t.name)) if (e instanceof u.Field && e.name !== e.originalName && null === this.getChild(e.originalName)) e.name = e.originalName; else {
if (!(t instanceof u.Field && t.name !== t.originalName && null === this.getChild(t.originalName))) throw Error("Duplicate name in namespace " + this.toString(!0) + ": " + t.name);
t.name = t.originalName;
}
this.children.push(t);
};
s.getChild = function(t) {
for (var e = "number" == typeof t ? "id" : "name", i = 0, r = this.children.length; i < r; ++i) if (this.children[i][e] === t) return this.children[i];
return null;
};
s.resolve = function(t, e) {
var r, n = "string" == typeof t ? t.split(".") : t, o = this, s = 0;
if ("" === n[s]) {
for (;null !== o.parent; ) o = o.parent;
s++;
}
do {
do {
if (!(o instanceof i.Namespace)) {
o = null;
break;
}
if (!(r = o.getChild(n[s])) || !(r instanceof i.T) || e && !(r instanceof i.Namespace)) {
o = null;
break;
}
o = r;
s++;
} while (s < n.length);
if (null != o) break;
if (null !== this.parent) return this.parent.resolve(t, e);
} while (null != o);
return o;
};
s.qn = function(t) {
var e = [], r = t;
do {
e.unshift(r.name);
r = r.parent;
} while (null !== r);
for (var n = 1; n <= e.length; n++) {
var o = e.slice(e.length - n);
if (t === this.resolve(o, t instanceof i.Namespace)) return o.join(".");
}
return t.fqn();
};
s.build = function() {
for (var t, e = {}, i = this.children, r = 0, n = i.length; r < n; ++r) (t = i[r]) instanceof o && (e[t.name] = t.build());
Object.defineProperty && Object.defineProperty(e, "$options", {
value: this.buildOpt()
});
return e;
};
s.buildOpt = function() {
for (var t = {}, e = Object.keys(this.options), i = 0, r = e.length; i < r; ++i) {
var n = e[i], o = this.options[e[i]];
t[n] = o;
}
return t;
};
s.getOption = function(t) {
return "undefined" == typeof t ? this.options : "undefined" != typeof this.options[t] ? this.options[t] : null;
};
i.Namespace = o;
var a = function(e, i, r, n, o) {
this.type = e;
this.resolvedType = i;
this.isMapKey = r;
this.syntax = n;
this.name = o;
if (r && t.MAP_KEY_TYPES.indexOf(e) < 0) throw Error("Invalid map key type: " + e.name);
}, c = a.prototype;
a.defaultFieldValue = function(i) {
"string" == typeof i && (i = t.TYPES[i]);
if ("undefined" == typeof i.defaultValue) throw Error("default value for type " + i.name + " is not supported");
return i == t.TYPES.bytes ? new e(0) : i.defaultValue;
};
function l(e, i) {
if (e && "number" == typeof e.low && "number" == typeof e.high && "boolean" == typeof e.unsigned && e.low == e.low && e.high == e.high) return new t.Long(e.low, e.high, "undefined" == typeof i ? e.unsigned : i);
"string" == typeof e && (e = Number(e));
if ("number" == typeof e) return t.Long.fromNumber(e, i || !1);
throw Error("not convertible to Long");
}
c.toString = function() {
return (this.name || "") + (this.isMapKey ? "map" : "value") + " element";
};
c.verifyValue = function(i) {
var r = this;
function n(t, e) {
throw Error("Illegal value for " + r.toString(!0) + " of type " + r.type.name + ": " + t + " (" + e + ")");
}
switch (this.type) {
case t.TYPES.int32:
case t.TYPES.sint32:
case t.TYPES.sfixed32:
("number" != typeof i || i == i && i % 1 != 0) && n(typeof i, "not an integer");
return i > 4294967295 ? 0 | i : i;

case t.TYPES.uint32:
case t.TYPES.fixed32:
("number" != typeof i || i == i && i % 1 != 0) && n(typeof i, "not an integer");
return i < 0 ? i >>> 0 : i;

case t.TYPES.int64:
case t.TYPES.sint64:
case t.TYPES.sfixed64:
if (t.Long) try {
return l(i, !1);
} catch (t) {
n(typeof i, t.message);
} else n(typeof i, "requires Long.js");

case t.TYPES.uint64:
case t.TYPES.fixed64:
if (t.Long) try {
return l(i, !0);
} catch (t) {
n(typeof i, t.message);
} else n(typeof i, "requires Long.js");

case t.TYPES.bool:
"boolean" != typeof i && n(typeof i, "not a boolean");
return i;

case t.TYPES.float:
case t.TYPES.double:
"number" != typeof i && n(typeof i, "not a number");
return i;

case t.TYPES.string:
"string" == typeof i || i && i instanceof String || n(typeof i, "not a string");
return "" + i;

case t.TYPES.bytes:
return e.isByteBuffer(i) ? i : e.wrap(i, "base64");

case t.TYPES.enum:
var o = this.resolvedType.getChildren(t.Reflect.Enum.Value);
for (a = 0; a < o.length; a++) {
if (o[a].name == i) return o[a].id;
if (o[a].id == i) return o[a].id;
}
if ("proto3" === this.syntax) {
("number" != typeof i || i == i && i % 1 != 0) && n(typeof i, "not an integer");
(i > 4294967295 || i < 0) && n(typeof i, "not in range for uint32");
return i;
}
n(i, "not a valid enum value");

case t.TYPES.group:
case t.TYPES.message:
i && "object" == typeof i || n(typeof i, "object expected");
if (i instanceof this.resolvedType.clazz) return i;
if (i instanceof t.Builder.Message) {
var s = {};
for (var a in i) i.hasOwnProperty(a) && (s[a] = i[a]);
i = s;
}
return new this.resolvedType.clazz(i);
}
throw Error("[INTERNAL] Illegal value for " + this.toString(!0) + ": " + i + " (undefined type " + this.type + ")");
};
c.calculateLength = function(i, r) {
if (null === r) return 0;
var n;
switch (this.type) {
case t.TYPES.int32:
return r < 0 ? e.calculateVarint64(r) : e.calculateVarint32(r);

case t.TYPES.uint32:
return e.calculateVarint32(r);

case t.TYPES.sint32:
return e.calculateVarint32(e.zigZagEncode32(r));

case t.TYPES.fixed32:
case t.TYPES.sfixed32:
case t.TYPES.float:
return 4;

case t.TYPES.int64:
case t.TYPES.uint64:
return e.calculateVarint64(r);

case t.TYPES.sint64:
return e.calculateVarint64(e.zigZagEncode64(r));

case t.TYPES.fixed64:
case t.TYPES.sfixed64:
return 8;

case t.TYPES.bool:
return 1;

case t.TYPES.enum:
return e.calculateVarint32(r);

case t.TYPES.double:
return 8;

case t.TYPES.string:
n = e.calculateUTF8Bytes(r);
return e.calculateVarint32(n) + n;

case t.TYPES.bytes:
if (r.remaining() < 0) throw Error("Illegal value for " + this.toString(!0) + ": " + r.remaining() + " bytes remaining");
return e.calculateVarint32(r.remaining()) + r.remaining();

case t.TYPES.message:
n = this.resolvedType.calculate(r);
return e.calculateVarint32(n) + n;

case t.TYPES.group:
return (n = this.resolvedType.calculate(r)) + e.calculateVarint32(i << 3 | t.WIRE_TYPES.ENDGROUP);
}
throw Error("[INTERNAL] Illegal value to encode in " + this.toString(!0) + ": " + r + " (unknown type)");
};
c.encodeValue = function(i, r, n) {
if (null === r) return n;
switch (this.type) {
case t.TYPES.int32:
r < 0 ? n.writeVarint64(r) : n.writeVarint32(r);
break;

case t.TYPES.uint32:
n.writeVarint32(r);
break;

case t.TYPES.sint32:
n.writeVarint32ZigZag(r);
break;

case t.TYPES.fixed32:
n.writeUint32(r);
break;

case t.TYPES.sfixed32:
n.writeInt32(r);
break;

case t.TYPES.int64:
case t.TYPES.uint64:
n.writeVarint64(r);
break;

case t.TYPES.sint64:
n.writeVarint64ZigZag(r);
break;

case t.TYPES.fixed64:
n.writeUint64(r);
break;

case t.TYPES.sfixed64:
n.writeInt64(r);
break;

case t.TYPES.bool:
"string" == typeof r ? n.writeVarint32("false" === r.toLowerCase() ? 0 : !!r) : n.writeVarint32(r ? 1 : 0);
break;

case t.TYPES.enum:
n.writeVarint32(r);
break;

case t.TYPES.float:
n.writeFloat32(r);
break;

case t.TYPES.double:
n.writeFloat64(r);
break;

case t.TYPES.string:
n.writeVString(r);
break;

case t.TYPES.bytes:
if (r.remaining() < 0) throw Error("Illegal value for " + this.toString(!0) + ": " + r.remaining() + " bytes remaining");
var o = r.offset;
n.writeVarint32(r.remaining());
n.append(r);
r.offset = o;
break;

case t.TYPES.message:
var s = new e().LE();
this.resolvedType.encode(r, s);
n.writeVarint32(s.offset);
n.append(s.flip());
break;

case t.TYPES.group:
this.resolvedType.encode(r, n);
n.writeVarint32(i << 3 | t.WIRE_TYPES.ENDGROUP);
break;

default:
throw Error("[INTERNAL] Illegal value to encode in " + this.toString(!0) + ": " + r + " (unknown type)");
}
return n;
};
c.decode = function(e, i, r) {
if (i != this.type.wireType) throw Error("Unexpected wire type for element");
var n, o;
switch (this.type) {
case t.TYPES.int32:
return 0 | e.readVarint32();

case t.TYPES.uint32:
return e.readVarint32() >>> 0;

case t.TYPES.sint32:
return 0 | e.readVarint32ZigZag();

case t.TYPES.fixed32:
return e.readUint32() >>> 0;

case t.TYPES.sfixed32:
return 0 | e.readInt32();

case t.TYPES.int64:
return e.readVarint64();

case t.TYPES.uint64:
return e.readVarint64().toUnsigned();

case t.TYPES.sint64:
return e.readVarint64ZigZag();

case t.TYPES.fixed64:
return e.readUint64();

case t.TYPES.sfixed64:
return e.readInt64();

case t.TYPES.bool:
return !!e.readVarint32();

case t.TYPES.enum:
return e.readVarint32();

case t.TYPES.float:
return e.readFloat();

case t.TYPES.double:
return e.readDouble();

case t.TYPES.string:
return e.readVString();

case t.TYPES.bytes:
o = e.readVarint32();
if (e.remaining() < o) throw Error("Illegal number of bytes for " + this.toString(!0) + ": " + o + " required but got only " + e.remaining());
(n = e.clone()).limit = n.offset + o;
e.offset += o;
return n;

case t.TYPES.message:
o = e.readVarint32();
return this.resolvedType.decode(e, o);

case t.TYPES.group:
return this.resolvedType.decode(e, -1, r);
}
throw Error("[INTERNAL] Illegal decode type");
};
c.valueFromString = function(i) {
if (!this.isMapKey) throw Error("valueFromString() called on non-map-key element");
switch (this.type) {
case t.TYPES.int32:
case t.TYPES.sint32:
case t.TYPES.sfixed32:
case t.TYPES.uint32:
case t.TYPES.fixed32:
return this.verifyValue(parseInt(i));

case t.TYPES.int64:
case t.TYPES.sint64:
case t.TYPES.sfixed64:
case t.TYPES.uint64:
case t.TYPES.fixed64:
return this.verifyValue(i);

case t.TYPES.bool:
return "true" === i;

case t.TYPES.string:
return this.verifyValue(i);

case t.TYPES.bytes:
return e.fromBinary(i);
}
};
c.valueToString = function(e) {
if (!this.isMapKey) throw Error("valueToString() called on non-map-key element");
return this.type === t.TYPES.bytes ? e.toString("binary") : e.toString();
};
i.Element = a;
var u = function(t, e, i, r, n, s) {
o.call(this, t, e, i, r, s);
this.className = "Message";
this.extensions = void 0;
this.clazz = null;
this.isGroup = !!n;
this._fields = null;
this._fieldsById = null;
this._fieldsByName = null;
}, h = u.prototype = Object.create(o.prototype);
h.build = function(i) {
if (this.clazz && !i) return this.clazz;
var r = function(t, i) {
var r = i.getChildren(t.Reflect.Message.Field), n = i.getChildren(t.Reflect.Message.OneOf), o = function o(s) {
t.Builder.Message.call(this);
for (var a = 0, c = n.length; a < c; ++a) this[n[a].name] = null;
for (a = 0, c = r.length; a < c; ++a) {
var l = r[a];
this[l.name] = l.repeated ? [] : l.map ? new t.Map(l) : null;
!l.required && "proto3" !== i.syntax || null === l.defaultValue || (this[l.name] = l.defaultValue);
}
if (arguments.length > 0) {
var u;
if (1 !== arguments.length || null === s || "object" != typeof s || !("function" != typeof s.encode || s instanceof o) || Array.isArray(s) || s instanceof t.Map || e.isByteBuffer(s) || s instanceof ArrayBuffer || t.Long && s instanceof t.Long) for (a = 0, 
c = arguments.length; a < c; ++a) "undefined" != typeof (u = arguments[a]) && this.$set(r[a].name, u); else this.$set(s);
}
}, s = o.prototype = Object.create(t.Builder.Message.prototype);
s.add = function(e, r, n) {
var o = i._fieldsByName[e];
if (!n) {
if (!o) throw Error(this + "#" + e + " is undefined");
if (!(o instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: " + o.toString(!0));
if (!o.repeated) throw Error(this + "#" + e + " is not a repeated field");
r = o.verifyValue(r, !0);
}
null === this[e] && (this[e] = []);
this[e].push(r);
return this;
};
s.$add = s.add;
s.set = function(e, r, n) {
if (e && "object" == typeof e) {
n = r;
for (var o in e) e.hasOwnProperty(o) && "undefined" != typeof (r = e[o]) && void 0 === i._oneofsByName[o] && this.$set(o, r, n);
return this;
}
var s = i._fieldsByName[e];
if (n) this[e] = r; else {
if (!s) throw Error(this + "#" + e + " is not a field: undefined");
if (!(s instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: " + s.toString(!0));
this[s.name] = r = s.verifyValue(r);
}
if (s && s.oneof) {
var a = this[s.oneof.name];
if (null !== r) {
null !== a && a !== s.name && (this[a] = null);
this[s.oneof.name] = s.name;
} else a === e && (this[s.oneof.name] = null);
}
return this;
};
s.$set = s.set;
s.get = function(e, r) {
if (r) return this[e];
var n = i._fieldsByName[e];
if (!(n && n instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: undefined");
if (!(n instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: " + n.toString(!0));
return this[n.name];
};
s.$get = s.get;
for (var a = 0; a < r.length; a++) {
var c = r[a];
c instanceof t.Reflect.Message.ExtensionField || i.builder.options.populateAccessors && function(t) {
var e = t.originalName.replace(/(_[a-zA-Z])/g, function(t) {
return t.toUpperCase().replace("_", "");
});
e = e.substring(0, 1).toUpperCase() + e.substring(1);
var r = t.originalName.replace(/([A-Z])/g, function(t) {
return "_" + t;
}), n = function(e, i) {
this[t.name] = i ? e : t.verifyValue(e);
return this;
}, o = function() {
return this[t.name];
};
null === i.getChild("set" + e) && (s["set" + e] = n);
null === i.getChild("set_" + r) && (s["set_" + r] = n);
null === i.getChild("get" + e) && (s["get" + e] = o);
null === i.getChild("get_" + r) && (s["get_" + r] = o);
}(c);
}
s.encode = function(t, r) {
"boolean" == typeof t && (r = t, t = void 0);
var n = !1;
t || (t = new e(), n = !0);
var o = t.littleEndian;
try {
i.encode(this, t.LE(), r);
return (n ? t.flip() : t).LE(o);
} catch (e) {
t.LE(o);
throw e;
}
};
o.encode = function(t, e, i) {
return new o(t).encode(e, i);
};
s.calculate = function() {
return i.calculate(this);
};
s.encodeDelimited = function(t, r) {
var n = !1;
t || (t = new e(), n = !0);
var o = new e().LE();
i.encode(this, o, r).flip();
t.writeVarint32(o.remaining());
t.append(o);
return n ? t.flip() : t;
};
s.encodeAB = function() {
try {
return this.encode().toArrayBuffer();
} catch (t) {
t.encoded && (t.encoded = t.encoded.toArrayBuffer());
throw t;
}
};
s.toArrayBuffer = s.encodeAB;
s.encodeNB = function() {
try {
return this.encode().toBuffer();
} catch (t) {
t.encoded && (t.encoded = t.encoded.toBuffer());
throw t;
}
};
s.toBuffer = s.encodeNB;
s.encode64 = function() {
try {
return this.encode().toBase64();
} catch (t) {
t.encoded && (t.encoded = t.encoded.toBase64());
throw t;
}
};
s.toBase64 = s.encode64;
s.encodeHex = function() {
try {
return this.encode().toHex();
} catch (t) {
t.encoded && (t.encoded = t.encoded.toHex());
throw t;
}
};
s.toHex = s.encodeHex;
function l(i, r, n, o) {
if (null === i || "object" != typeof i) {
if (o && o instanceof t.Reflect.Enum) {
var s = t.Reflect.Enum.getName(o.object, i);
if (null !== s) return s;
}
return i;
}
if (e.isByteBuffer(i)) return r ? i.toBase64() : i.toBuffer();
if (t.Long.isLong(i)) return n ? i.toString() : t.Long.fromValue(i);
var a;
if (Array.isArray(i)) {
a = [];
i.forEach(function(t, e) {
a[e] = l(t, r, n, o);
});
return a;
}
a = {};
if (i instanceof t.Map) {
for (var c = i.entries(), u = c.next(); !u.done; u = c.next()) a[i.keyElem.valueToString(u.value[0])] = l(u.value[1], r, n, i.valueElem.resolvedType);
return a;
}
var h = i.$type, f = void 0;
for (var p in i) i.hasOwnProperty(p) && (h && (f = h.getChild(p)) ? a[p] = l(i[p], r, n, f.resolvedType) : a[p] = l(i[p], r, n));
return a;
}
s.toRaw = function(t, e) {
return l(this, !!t, !!e, this.$type);
};
s.encodeJSON = function() {
return JSON.stringify(l(this, !0, !0, this.$type));
};
o.decode = function(t, r, n) {
"string" == typeof r && (n = r, r = -1);
"string" == typeof t ? t = e.wrap(t, n || "base64") : e.isByteBuffer(t) || (t = e.wrap(t));
var o = t.littleEndian;
try {
var s = i.decode(t.LE(), r);
t.LE(o);
return s;
} catch (e) {
t.LE(o);
throw e;
}
};
o.decodeDelimited = function(t, r) {
"string" == typeof t ? t = e.wrap(t, r || "base64") : e.isByteBuffer(t) || (t = e.wrap(t));
if (t.remaining() < 1) return null;
var n = t.offset, o = t.readVarint32();
if (t.remaining() < o) {
t.offset = n;
return null;
}
try {
var s = i.decode(t.slice(t.offset, t.offset + o).LE());
t.offset += o;
return s;
} catch (e) {
t.offset += o;
throw e;
}
};
o.decode64 = function(t) {
return o.decode(t, "base64");
};
o.decodeHex = function(t) {
return o.decode(t, "hex");
};
o.decodeJSON = function(t) {
return new o(JSON.parse(t));
};
s.toString = function() {
return i.toString();
};
Object.defineProperty && (Object.defineProperty(o, "$options", {
value: i.buildOpt()
}), Object.defineProperty(s, "$options", {
value: o.$options
}), Object.defineProperty(o, "$type", {
value: i
}), Object.defineProperty(s, "$type", {
value: i
}));
return o;
}(t, this);
this._fields = [];
this._fieldsById = {};
this._fieldsByName = {};
this._oneofsByName = {};
for (var n, o = 0, s = this.children.length; o < s; o++) if ((n = this.children[o]) instanceof g || n instanceof u || n instanceof _) {
if (r.hasOwnProperty(n.name)) throw Error("Illegal reflect child of " + this.toString(!0) + ": " + n.toString(!0) + " cannot override static property '" + n.name + "'");
r[n.name] = n.build();
} else if (n instanceof u.Field) n.build(), this._fields.push(n), this._fieldsById[n.id] = n, 
this._fieldsByName[n.name] = n; else if (n instanceof u.OneOf) this._oneofsByName[n.name] = n; else if (!(n instanceof u.OneOf || n instanceof m)) throw Error("Illegal reflect child of " + this.toString(!0) + ": " + this.children[o].toString(!0));
return this.clazz = r;
};
h.encode = function(t, e, i) {
for (var r, n, o = null, s = 0, a = this._fields.length; s < a; ++s) {
n = t[(r = this._fields[s]).name];
r.required && null === n ? null === o && (o = r) : r.encode(i ? n : r.verifyValue(n), e, t);
}
if (null !== o) {
var c = Error("Missing at least one required field for " + this.toString(!0) + ": " + o);
c.encoded = e;
throw c;
}
return e;
};
h.calculate = function(t) {
for (var e, i, r = 0, n = 0, o = this._fields.length; n < o; ++n) {
i = t[(e = this._fields[n]).name];
if (e.required && null === i) throw Error("Missing at least one required field for " + this.toString(!0) + ": " + e);
r += e.calculate(i, t);
}
return r;
};
function f(e, i) {
var r = i.readVarint32(), n = 7 & r, o = r >>> 3;
switch (n) {
case t.WIRE_TYPES.VARINT:
do {
r = i.readUint8();
} while (128 == (128 & r));
break;

case t.WIRE_TYPES.BITS64:
i.offset += 8;
break;

case t.WIRE_TYPES.LDELIM:
r = i.readVarint32();
i.offset += r;
break;

case t.WIRE_TYPES.STARTGROUP:
f(o, i);
break;

case t.WIRE_TYPES.ENDGROUP:
if (o === e) return !1;
throw Error("Illegal GROUPEND after unknown group: " + o + " (" + e + " expected)");

case t.WIRE_TYPES.BITS32:
i.offset += 4;
break;

default:
throw Error("Illegal wire type in unknown group " + e + ": " + n);
}
return !0;
}
h.decode = function(e, i, r) {
"number" != typeof i && (i = -1);
for (var n, o, s, a, c = e.offset, l = new this.clazz(); e.offset < c + i || -1 === i && e.remaining() > 0; ) {
s = (n = e.readVarint32()) >>> 3;
if ((o = 7 & n) === t.WIRE_TYPES.ENDGROUP) {
if (s !== r) throw Error("Illegal group end indicator for " + this.toString(!0) + ": " + s + " (" + (r ? r + " expected" : "not a group") + ")");
break;
}
if (a = this._fieldsById[s]) if (a.repeated && !a.options.packed) l[a.name].push(a.decode(o, e)); else if (a.map) {
var u = a.decode(o, e);
l[a.name].set(u[0], u[1]);
} else {
l[a.name] = a.decode(o, e);
if (a.oneof) {
var h = l[a.oneof.name];
null !== h && h !== a.name && (l[h] = null);
l[a.oneof.name] = a.name;
}
} else switch (o) {
case t.WIRE_TYPES.VARINT:
e.readVarint32();
break;

case t.WIRE_TYPES.BITS32:
e.offset += 4;
break;

case t.WIRE_TYPES.BITS64:
e.offset += 8;
break;

case t.WIRE_TYPES.LDELIM:
var p = e.readVarint32();
e.offset += p;
break;

case t.WIRE_TYPES.STARTGROUP:
for (;f(s, e); ) ;
break;

default:
throw Error("Illegal wire type for unknown field " + s + " in " + this.toString(!0) + "#decode: " + o);
}
}
for (var d = 0, y = this._fields.length; d < y; ++d) if (null === l[(a = this._fields[d]).name]) if ("proto3" === this.syntax) l[a.name] = a.defaultValue; else {
if (a.required) {
var g = Error("Missing at least one required field for " + this.toString(!0) + ": " + a.name);
g.decoded = l;
throw g;
}
t.populateDefaults && null !== a.defaultValue && (l[a.name] = a.defaultValue);
}
for (d = 0, y = this._fields.length; d < y; ++d) "int64" == (a = this._fields[d]).type.name && l[a.name] instanceof t.Long && (l[a.name] = l[a.name].toNumber());
return l;
};
i.Message = u;
var p = function(e, i, n, o, s, a, c, l, h, f) {
r.call(this, e, i, a);
this.className = "Message.Field";
this.required = "required" === n;
this.repeated = "repeated" === n;
this.map = "map" === n;
this.keyType = o || null;
this.type = s;
this.resolvedType = null;
this.id = c;
this.options = l || {};
this.defaultValue = null;
this.oneof = h || null;
this.syntax = f || "proto2";
this.originalName = this.name;
this.element = null;
this.keyElement = null;
!this.builder.options.convertFieldsToCamelCase || this instanceof u.ExtensionField || (this.name = t.Util.toCamelCase(this.name));
}, d = p.prototype = Object.create(r.prototype);
d.build = function() {
this.element = new a(this.type, this.resolvedType, !1, this.syntax, this.name);
this.map && (this.keyElement = new a(this.keyType, void 0, !0, this.syntax, this.name));
"proto3" !== this.syntax || this.repeated || this.map ? "undefined" != typeof this.options.default && (this.defaultValue = this.verifyValue(this.options.default)) : this.defaultValue = a.defaultFieldValue(this.type);
};
d.verifyValue = function(e, i) {
i = i || !1;
var r, n = this;
function o(t, e) {
throw Error("Illegal value for " + n.toString(!0) + " of type " + n.type.name + ": " + t + " (" + e + ")");
}
if (null === e) {
this.required && o(typeof e, "required");
"proto3" === this.syntax && this.type !== t.TYPES.message && o(typeof e, "proto3 field without field presence cannot be null");
return null;
}
if (this.repeated && !i) {
Array.isArray(e) || (e = [ e ]);
var s = [];
for (r = 0; r < e.length; r++) s.push(this.element.verifyValue(e[r]));
return s;
}
if (this.map && !i) {
if (e instanceof t.Map) return e;
e instanceof Object || o(typeof e, "expected ProtoBuf.Map or raw object for map field");
return new t.Map(this, e);
}
!this.repeated && Array.isArray(e) && o(typeof e, "no array expected");
return this.element.verifyValue(e);
};
d.hasWirePresence = function(e, i) {
if ("proto3" !== this.syntax) return null !== e;
if (this.oneof && i[this.oneof.name] === this.name) return !0;
switch (this.type) {
case t.TYPES.int32:
case t.TYPES.sint32:
case t.TYPES.sfixed32:
case t.TYPES.uint32:
case t.TYPES.fixed32:
return 0 !== e;

case t.TYPES.int64:
case t.TYPES.sint64:
case t.TYPES.sfixed64:
case t.TYPES.uint64:
case t.TYPES.fixed64:
return 0 !== e.low || 0 !== e.high;

case t.TYPES.bool:
return e;

case t.TYPES.float:
case t.TYPES.double:
return 0 !== e;

case t.TYPES.string:
return e.length > 0;

case t.TYPES.bytes:
return e.remaining() > 0;

case t.TYPES.enum:
return 0 !== e;

case t.TYPES.message:
return null !== e;

default:
return !0;
}
};
d.encode = function(i, r, n) {
if (null === this.type || "object" != typeof this.type) throw Error("[INTERNAL] Unresolved type in " + this.toString(!0) + ": " + this.type);
if (null === i || this.repeated && 0 == i.length) return r;
try {
if (this.repeated) {
var o;
if (this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
r.writeVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM);
r.ensureCapacity(r.offset += 1);
var s = r.offset;
for (o = 0; o < i.length; o++) this.element.encodeValue(this.id, i[o], r);
var a = r.offset - s, c = e.calculateVarint32(a);
if (c > 1) {
var l = r.slice(s, r.offset);
s += c - 1;
r.offset = s;
r.append(l);
}
r.writeVarint32(a, s - c);
} else for (o = 0; o < i.length; o++) r.writeVarint32(this.id << 3 | this.type.wireType), 
this.element.encodeValue(this.id, i[o], r);
} else if (this.map) i.forEach(function(i, n) {
var o = e.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, n) + e.calculateVarint32(16 | this.type.wireType) + this.element.calculateLength(2, i);
r.writeVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM);
r.writeVarint32(o);
r.writeVarint32(8 | this.keyType.wireType);
this.keyElement.encodeValue(1, n, r);
r.writeVarint32(16 | this.type.wireType);
this.element.encodeValue(2, i, r);
}, this); else if (this.hasWirePresence(i, n)) {
r.writeVarint32(this.id << 3 | this.type.wireType);
this.element.encodeValue(this.id, i, r);
}
} catch (t) {
throw Error("Illegal value for " + this.toString(!0) + ": " + i + " (" + t + ")");
}
return r;
};
d.calculate = function(i, r) {
i = this.verifyValue(i);
if (null === this.type || "object" != typeof this.type) throw Error("[INTERNAL] Unresolved type in " + this.toString(!0) + ": " + this.type);
if (null === i || this.repeated && 0 == i.length) return 0;
var n = 0;
try {
if (this.repeated) {
var o, s;
if (this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
n += e.calculateVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM);
s = 0;
for (o = 0; o < i.length; o++) s += this.element.calculateLength(this.id, i[o]);
n += e.calculateVarint32(s);
n += s;
} else for (o = 0; o < i.length; o++) n += e.calculateVarint32(this.id << 3 | this.type.wireType), 
n += this.element.calculateLength(this.id, i[o]);
} else if (this.map) i.forEach(function(i, r) {
var o = e.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, r) + e.calculateVarint32(16 | this.type.wireType) + this.element.calculateLength(2, i);
n += e.calculateVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM);
n += e.calculateVarint32(o);
n += o;
}, this); else if (this.hasWirePresence(i, r)) {
n += e.calculateVarint32(this.id << 3 | this.type.wireType);
n += this.element.calculateLength(this.id, i);
}
} catch (t) {
throw Error("Illegal value for " + this.toString(!0) + ": " + i + " (" + t + ")");
}
return n;
};
d.decode = function(e, i, r) {
var n, o;
if (!(!this.map && e == this.type.wireType || !r && this.repeated && this.options.packed && e == t.WIRE_TYPES.LDELIM || this.map && e == t.WIRE_TYPES.LDELIM)) throw Error("Illegal wire type for field " + this.toString(!0) + ": " + e + " (" + this.type.wireType + " expected)");
if (e == t.WIRE_TYPES.LDELIM && this.repeated && this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0 && !r) {
o = i.readVarint32();
o = i.offset + o;
for (var s = []; i.offset < o; ) s.push(this.decode(this.type.wireType, i, !0));
return s;
}
if (this.map) {
var c = a.defaultFieldValue(this.keyType);
n = a.defaultFieldValue(this.type);
o = i.readVarint32();
if (i.remaining() < o) throw Error("Illegal number of bytes for " + this.toString(!0) + ": " + o + " required but got only " + i.remaining());
var l = i.clone();
l.limit = l.offset + o;
i.offset += o;
for (;l.remaining() > 0; ) {
var u = l.readVarint32();
e = 7 & u;
var h = u >>> 3;
if (1 === h) c = this.keyElement.decode(l, e, h); else {
if (2 !== h) throw Error("Unexpected tag in map field key/value submessage");
n = this.element.decode(l, e, h);
}
}
return [ c, n ];
}
return this.element.decode(i, e, this.id);
};
i.Message.Field = p;
var y = function(t, e, i, r, n, o, s) {
p.call(this, t, e, i, null, r, n, o, s);
this.extension;
};
y.prototype = Object.create(p.prototype);
i.Message.ExtensionField = y;
i.Message.OneOf = function(t, e, i) {
r.call(this, t, e, i);
this.fields = [];
};
var g = function(t, e, i, r, n) {
o.call(this, t, e, i, r, n);
this.className = "Enum";
this.object = null;
};
g.getName = function(t, e) {
for (var i, r = Object.keys(t), n = 0; n < r.length; ++n) if (t[i = r[n]] === e) return i;
return null;
};
(g.prototype = Object.create(o.prototype)).build = function(e) {
if (this.object && !e) return this.object;
for (var i = new t.Builder.Enum(), r = this.getChildren(g.Value), n = 0, o = r.length; n < o; ++n) i[r[n].name] = r[n].id;
Object.defineProperty && Object.defineProperty(i, "$options", {
value: this.buildOpt(),
enumerable: !1
});
return this.object = i;
};
i.Enum = g;
var v = function(t, e, i, n) {
r.call(this, t, e, i);
this.className = "Enum.Value";
this.id = n;
};
v.prototype = Object.create(r.prototype);
i.Enum.Value = v;
var m = function(t, e, i, n) {
r.call(this, t, e, i);
this.field = n;
};
m.prototype = Object.create(r.prototype);
i.Extension = m;
var _ = function(t, e, i, r) {
o.call(this, t, e, i, r);
this.className = "Service";
this.clazz = null;
};
(_.prototype = Object.create(o.prototype)).build = function(i) {
return this.clazz && !i ? this.clazz : this.clazz = function(t, i) {
for (var r = function(e) {
t.Builder.Service.call(this);
this.rpcImpl = e || function(t, e, i) {
setTimeout(i.bind(this, Error("Not implemented, see: https://github.com/dcodeIO/ProtoBuf.js/wiki/Services")), 0);
};
}, n = r.prototype = Object.create(t.Builder.Service.prototype), o = i.getChildren(t.Reflect.Service.RPCMethod), s = 0; s < o.length; s++) (function(t) {
n[t.name] = function(r, n) {
try {
try {
r = t.resolvedRequestType.clazz.decode(e.wrap(r));
} catch (t) {
if (!(t instanceof TypeError)) throw t;
}
if (null === r || "object" != typeof r) throw Error("Illegal arguments");
r instanceof t.resolvedRequestType.clazz || (r = new t.resolvedRequestType.clazz(r));
this.rpcImpl(t.fqn(), r, function(e, r) {
if (e) n(e); else {
null === r && (r = "");
try {
r = t.resolvedResponseType.clazz.decode(r);
} catch (t) {}
r && r instanceof t.resolvedResponseType.clazz ? n(null, r) : n(Error("Illegal response type received in service method " + i.name + "#" + t.name));
}
});
} catch (t) {
setTimeout(n.bind(this, t), 0);
}
};
r[t.name] = function(e, i, n) {
new r(e)[t.name](i, n);
};
Object.defineProperty && (Object.defineProperty(r[t.name], "$options", {
value: t.buildOpt()
}), Object.defineProperty(n[t.name], "$options", {
value: r[t.name].$options
}));
})(o[s]);
Object.defineProperty && (Object.defineProperty(r, "$options", {
value: i.buildOpt()
}), Object.defineProperty(n, "$options", {
value: r.$options
}), Object.defineProperty(r, "$type", {
value: i
}), Object.defineProperty(n, "$type", {
value: i
}));
return r;
}(t, this);
};
i.Service = _;
var b = function(t, e, i, n) {
r.call(this, t, e, i);
this.className = "Service.Method";
this.options = n || {};
};
(b.prototype = Object.create(r.prototype)).buildOpt = s.buildOpt;
i.Service.Method = b;
var w = function(t, e, i, r, n, o, s, a) {
b.call(this, t, e, i, a);
this.className = "Service.RPCMethod";
this.requestName = r;
this.responseName = n;
this.requestStream = o;
this.responseStream = s;
this.resolvedRequestType = null;
this.resolvedResponseType = null;
};
w.prototype = Object.create(b.prototype);
i.Service.RPCMethod = w;
return i;
}(r);
r.Builder = function(e, i, r) {
var n = function(t) {
this.ns = new r.Namespace(this, null, "");
this.ptr = this.ns;
this.resolved = !1;
this.result = null;
this.files = {};
this.importRoot = null;
this.options = t || {};
}, o = n.prototype;
n.isMessage = function(t) {
return "string" == typeof t.name && "undefined" == typeof t.values && "undefined" == typeof t.rpc;
};
n.isMessageField = function(t) {
return "string" == typeof t.rule && "string" == typeof t.name && "string" == typeof t.type && "undefined" != typeof t.id;
};
n.isEnum = function(t) {
return "string" == typeof t.name && !("undefined" == typeof t.values || !Array.isArray(t.values) || 0 === t.values.length);
};
n.isService = function(t) {
return !("string" != typeof t.name || "object" != typeof t.rpc || !t.rpc);
};
n.isExtend = function(t) {
return "string" == typeof t.ref;
};
o.reset = function() {
this.ptr = this.ns;
return this;
};
o.define = function(t) {
if ("string" != typeof t || !i.TYPEREF.test(t)) throw Error("illegal namespace: " + t);
t.split(".").forEach(function(t) {
var e = this.ptr.getChild(t);
null === e && this.ptr.addChild(e = new r.Namespace(this, this.ptr, t));
this.ptr = e;
}, this);
return this;
};
o.create = function(t) {
if (!t) return this;
if (Array.isArray(t)) {
if (0 === t.length) return this;
t = t.slice();
} else t = [ t ];
for (var i = [ t ]; i.length > 0; ) {
t = i.pop();
if (!Array.isArray(t)) throw Error("not a valid namespace: " + JSON.stringify(t));
for (;t.length > 0; ) {
var o = t.shift();
if (n.isMessage(o)) {
var s = new r.Message(this, this.ptr, o.name, o.options, o.isGroup, o.syntax), a = {};
o.oneofs && Object.keys(o.oneofs).forEach(function(t) {
s.addChild(a[t] = new r.Message.OneOf(this, s, t));
}, this);
o.fields && o.fields.forEach(function(t) {
if (null !== s.getChild(0 | t.id)) throw Error("duplicate or invalid field id in " + s.name + ": " + t.id);
if (t.options && "object" != typeof t.options) throw Error("illegal field options in " + s.name + "#" + t.name);
var e = null;
if ("string" == typeof t.oneof && !(e = a[t.oneof])) throw Error("illegal oneof in " + s.name + "#" + t.name + ": " + t.oneof);
t = new r.Message.Field(this, s, t.rule, t.keytype, t.type, t.name, t.id, t.options, e, o.syntax);
e && e.fields.push(t);
s.addChild(t);
}, this);
var c = [];
o.enums && o.enums.forEach(function(t) {
c.push(t);
});
o.messages && o.messages.forEach(function(t) {
c.push(t);
});
o.services && o.services.forEach(function(t) {
c.push(t);
});
o.extensions && ("number" == typeof o.extensions[0] ? s.extensions = [ o.extensions ] : s.extensions = o.extensions);
this.ptr.addChild(s);
if (c.length > 0) {
i.push(t);
t = c;
c = null;
this.ptr = s;
s = null;
continue;
}
c = null;
} else if (n.isEnum(o)) {
s = new r.Enum(this, this.ptr, o.name, o.options, o.syntax);
o.values.forEach(function(t) {
s.addChild(new r.Enum.Value(this, s, t.name, t.id));
}, this);
this.ptr.addChild(s);
} else if (n.isService(o)) {
s = new r.Service(this, this.ptr, o.name, o.options);
Object.keys(o.rpc).forEach(function(t) {
var e = o.rpc[t];
s.addChild(new r.Service.RPCMethod(this, s, t, e.request, e.response, !!e.request_stream, !!e.response_stream, e.options));
}, this);
this.ptr.addChild(s);
} else {
if (!n.isExtend(o)) throw Error("not a valid definition: " + JSON.stringify(o));
if (s = this.ptr.resolve(o.ref, !0)) o.fields.forEach(function(t) {
if (null !== s.getChild(0 | t.id)) throw Error("duplicate extended field id in " + s.name + ": " + t.id);
if (s.extensions) {
var i = !1;
s.extensions.forEach(function(e) {
t.id >= e[0] && t.id <= e[1] && (i = !0);
});
if (!i) throw Error("illegal extended field id in " + s.name + ": " + t.id + " (not within valid ranges)");
}
var n = t.name;
this.options.convertFieldsToCamelCase && (n = e.Util.toCamelCase(n));
var o = new r.Message.ExtensionField(this, s, t.rule, t.type, this.ptr.fqn() + "." + n, t.id, t.options), a = new r.Extension(this, this.ptr, t.name, o);
o.extension = a;
this.ptr.addChild(a);
s.addChild(o);
}, this); else if (!/\.?google\.protobuf\./.test(o.ref)) throw Error("extended message " + o.ref + " is not defined");
}
o = null;
s = null;
}
t = null;
this.ptr = this.ptr.parent;
}
this.resolved = !1;
this.result = null;
return this;
};
function s(t) {
t.messages && t.messages.forEach(function(e) {
e.syntax = t.syntax;
s(e);
});
t.enums && t.enums.forEach(function(e) {
e.syntax = t.syntax;
});
}
o.import = function(i, r) {
var n = "/";
if ("string" == typeof r) {
e.Util.IS_NODE && (r = t("path").resolve(r));
if (!0 === this.files[r]) return this.reset();
this.files[r] = !0;
} else if ("object" == typeof r) {
var o, a = r.root;
e.Util.IS_NODE && (a = t("path").resolve(a));
(a.indexOf("\\") >= 0 || r.file.indexOf("\\") >= 0) && (n = "\\");
o = e.Util.IS_NODE ? t("path").join(a, r.file) : a + n + r.file;
if (!0 === this.files[o]) return this.reset();
this.files[o] = !0;
}
if (i.imports && i.imports.length > 0) {
var c, l = !1;
if ("object" == typeof r) {
this.importRoot = r.root;
l = !0;
c = this.importRoot;
r = r.file;
(c.indexOf("\\") >= 0 || r.indexOf("\\") >= 0) && (n = "\\");
} else if ("string" == typeof r) if (this.importRoot) c = this.importRoot; else if (r.indexOf("/") >= 0) "" === (c = r.replace(/\/[^\/]*$/, "")) && (c = "/"); else if (r.indexOf("\\") >= 0) {
c = r.replace(/\\[^\\]*$/, "");
n = "\\";
} else c = "."; else c = null;
for (var u = 0; u < i.imports.length; u++) if ("string" == typeof i.imports[u]) {
if (!c) throw Error("cannot determine import root");
var h = i.imports[u];
if ("google/protobuf/descriptor.proto" === h) continue;
h = e.Util.IS_NODE ? t("path").join(c, h) : c + n + h;
if (!0 === this.files[h]) continue;
/\.proto$/i.test(h) && !e.DotProto && (h = h.replace(/\.proto$/, ".json"));
var f = e.Util.fetch(h);
if (null === f) throw Error("failed to import '" + h + "' in '" + r + "': file not found");
/\.json$/i.test(h) ? this.import(JSON.parse(f + ""), h) : this.import(e.DotProto.Parser.parse(f), h);
} else r ? /\.(\w+)$/.test(r) ? this.import(i.imports[u], r.replace(/^(.+)\.(\w+)$/, function(t, e, i) {
return e + "_import" + u + "." + i;
})) : this.import(i.imports[u], r + "_import" + u) : this.import(i.imports[u]);
l && (this.importRoot = null);
}
i.package && this.define(i.package);
i.syntax && s(i);
var p = this.ptr;
i.options && Object.keys(i.options).forEach(function(t) {
p.options[t] = i.options[t];
});
i.messages && (this.create(i.messages), this.ptr = p);
i.enums && (this.create(i.enums), this.ptr = p);
i.services && (this.create(i.services), this.ptr = p);
i.extends && this.create(i.extends);
return this.reset();
};
o.resolveAll = function() {
var t;
if (null == this.ptr || "object" == typeof this.ptr.type) return this;
if (this.ptr instanceof r.Namespace) this.ptr.children.forEach(function(t) {
this.ptr = t;
this.resolveAll();
}, this); else if (this.ptr instanceof r.Message.Field) {
if (i.TYPE.test(this.ptr.type)) this.ptr.type = e.TYPES[this.ptr.type]; else {
if (!i.TYPEREF.test(this.ptr.type)) throw Error("illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
if (!(t = (this.ptr instanceof r.Message.ExtensionField ? this.ptr.extension.parent : this.ptr.parent).resolve(this.ptr.type, !0))) throw Error("unresolvable type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
this.ptr.resolvedType = t;
if (t instanceof r.Enum) {
this.ptr.type = e.TYPES.enum;
if ("proto3" === this.ptr.syntax && "proto3" !== t.syntax) throw Error("proto3 message cannot reference proto2 enum");
} else {
if (!(t instanceof r.Message)) throw Error("illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
this.ptr.type = t.isGroup ? e.TYPES.group : e.TYPES.message;
}
}
if (this.ptr.map) {
if (!i.TYPE.test(this.ptr.keyType)) throw Error("illegal key type for map field in " + this.ptr.toString(!0) + ": " + this.ptr.keyType);
this.ptr.keyType = e.TYPES[this.ptr.keyType];
}
"proto3" === this.ptr.syntax && this.ptr.repeated && void 0 === this.ptr.options.packed && -1 !== e.PACKABLE_WIRE_TYPES.indexOf(this.ptr.type.wireType) && (this.ptr.options.packed = !0);
} else if (this.ptr instanceof e.Reflect.Service.Method) {
if (!(this.ptr instanceof e.Reflect.Service.RPCMethod)) throw Error("illegal service type in " + this.ptr.toString(!0));
if (!((t = this.ptr.parent.resolve(this.ptr.requestName, !0)) && t instanceof e.Reflect.Message)) throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.requestName);
this.ptr.resolvedRequestType = t;
if (!((t = this.ptr.parent.resolve(this.ptr.responseName, !0)) && t instanceof e.Reflect.Message)) throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.responseName);
this.ptr.resolvedResponseType = t;
} else if (!(this.ptr instanceof e.Reflect.Message.OneOf || this.ptr instanceof e.Reflect.Extension || this.ptr instanceof e.Reflect.Enum.Value)) throw Error("illegal object in namespace: " + typeof this.ptr + ": " + this.ptr);
return this.reset();
};
o.build = function(t) {
this.reset();
this.resolved || (this.resolveAll(), this.resolved = !0, this.result = null);
null === this.result && (this.result = this.ns.build());
if (!t) return this.result;
for (var e = "string" == typeof t ? t.split(".") : t, i = this.result, r = 0; r < e.length; r++) {
if (!i[e[r]]) {
i = null;
break;
}
i = i[e[r]];
}
return i;
};
o.lookup = function(t, e) {
return t ? this.ns.resolve(t, e) : this.ns;
};
o.toString = function() {
return "Builder";
};
n.Message = function() {};
n.Enum = function() {};
n.Service = function() {};
return n;
}(r, r.Lang, r.Reflect);
r.Map = function(t, e) {
var i = function(t, i) {
if (!t.map) throw Error("field is not a map");
this.field = t;
this.keyElem = new e.Element(t.keyType, null, !0, t.syntax);
this.valueElem = new e.Element(t.type, t.resolvedType, !1, t.syntax);
this.map = {};
Object.defineProperty(this, "size", {
get: function() {
return Object.keys(this.map).length;
}
});
if (i) for (var r = Object.keys(i), n = 0; n < r.length; n++) {
var o, s = this.keyElem.valueFromString(r[n]), a = this.valueElem.verifyValue(i[r[n]]);
if ("object" == typeof s) {
o = s.toNumber();
this.map["" + o] = {
key: s,
value: a
};
} else this.map[this.keyElem.valueToString(s)] = {
key: s,
value: a
};
}
}, r = i.prototype;
function n(t) {
var e = 0;
return {
next: function() {
return e < t.length ? {
done: !1,
value: t[e++]
} : {
done: !0
};
}
};
}
r.clear = function() {
this.map = {};
};
r.delete = function(t) {
var e = this.keyElem.verifyValue(t);
if ("object" == typeof e) {
var i = e.toNumber(), r = i in this.map;
delete this.map[i];
return r;
}
var n = this.keyElem.valueToString(e);
r = n in this.map;
delete this.map[n];
return r;
};
r.entries = function() {
for (var t, e = [], i = Object.keys(this.map), r = 0; r < i.length; r++) e.push([ (t = this.map[i[r]]).key, t.value ]);
return n(e);
};
r.keys = function() {
for (var t = [], e = Object.keys(this.map), i = 0; i < e.length; i++) t.push(this.map[e[i]].key);
return n(t);
};
r.values = function() {
for (var t = [], e = Object.keys(this.map), i = 0; i < e.length; i++) t.push(this.map[e[i]].value);
return n(t);
};
r.forEach = function(t, e) {
for (var i = Object.keys(this.map), r = 0; r < i.length; r++) {
var n;
"object" == typeof (n = this.map[i[r]]).key ? t.call(e, n.value, n.key.toNumber(), this) : t.call(e, n.value, n.key, this);
}
};
r.set = function(t, e) {
var i = this.keyElem.verifyValue(t), r = this.valueElem.verifyValue(e);
if ("object" == typeof i) {
var n = i.toNumber();
this.map["" + n] = {
key: i,
value: r
};
} else {
var o = r;
"int64" == this.valueElem.type.name && (o = r.toNumber());
this.map[this.keyElem.valueToString(i)] = {
key: i,
value: o
};
}
return this;
};
r.get = function(t) {
var e = this.keyElem.verifyValue(t);
if ("object" == typeof e) {
var i = e.toNumber();
if (!(i in this.map)) return;
return this.map[i].value;
}
var r = this.keyElem.valueToString(e);
if (r in this.map) return this.map[r].value;
};
r.has = function(t) {
var e = this.keyElem.verifyValue(t);
return "object" == typeof e ? e.toNumber() in this.map : this.keyElem.valueToString(e) in this.map;
};
return i;
}(0, r.Reflect);
r.loadProto = function(t, e, i) {
("string" == typeof e || e && "string" == typeof e.file && "string" == typeof e.root) && (i = e, 
e = void 0);
return r.loadJson(r.DotProto.Parser.parse(t), e, i);
};
r.protoFromString = r.loadProto;
r.loadProtoFile = function(t, e, i) {
e && "object" == typeof e ? (i = e, e = null) : e && "function" == typeof e || (e = null);
if (e) return r.Util.fetch("string" == typeof t ? t : t.root + "/" + t.file, function(n) {
if (null !== n) try {
e(null, r.loadProto(n, i, t));
} catch (t) {
e(t);
} else e(Error("Failed to fetch file"));
});
var n = r.Util.fetch("object" == typeof t ? t.root + "/" + t.file : t);
return null === n ? null : r.loadProto(n, i, t);
};
r.protoFromFile = r.loadProtoFile;
r.newBuilder = function(t) {
"undefined" == typeof (t = t || {}).convertFieldsToCamelCase && (t.convertFieldsToCamelCase = r.convertFieldsToCamelCase);
"undefined" == typeof t.populateAccessors && (t.populateAccessors = r.populateAccessors);
return new r.Builder(t);
};
r.loadJson = function(t, e, i) {
("string" == typeof e || e && "string" == typeof e.file && "string" == typeof e.root) && (i = e, 
e = null);
e && "object" == typeof e || (e = r.newBuilder());
"string" == typeof t && (t = JSON.parse(t));
e.import(t, i);
e.resolveAll();
return e;
};
r.loadJsonFile = function(t, e, i) {
e && "object" == typeof e ? (i = e, e = null) : e && "function" == typeof e || (e = null);
if (e) return r.Util.fetch("string" == typeof t ? t : t.root + "/" + t.file, function(n) {
if (null !== n) try {
e(null, r.loadJson(JSON.parse(n), i, t));
} catch (t) {
e(t);
} else e(Error("Failed to fetch file"));
});
var n = r.Util.fetch("object" == typeof t ? t.root + "/" + t.file : t);
return null === n ? null : r.loadJson(JSON.parse(n), i, t);
};
return r;
}, "function" == typeof define && define.amd ? define([ "bytebuffer" ], r) : "function" == typeof t && "object" == typeof e && e && e.exports ? e.exports = r(t("bytebuffer")) : ((void 0).dcodeIO = (void 0).dcodeIO || {}).ProtoBuf = r((void 0).dcodeIO.ByteBuffer);
var r;
cc._RF.pop();
}).call(this, t("_process"));
}, {
_process: "_process",
bytebuffer: "bytebuffer",
fs: void 0,
path: void 0
} ],
words: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "63ac8uKnc9BLqci/8PxtDw1", "words");
var r;
Object.defineProperty(i, "__esModule", {
value: !0
});
i.words = void 0;
i.words = ((r = {})[0] = "", r[1] = "确定", r[2] = "取消", r[3] = "通用", r[4] = "提示信息", 
r[5] = "账号存在问题，请联系管理人员", r[6] = "返回", r[7] = "点击空白处关闭", r[8] = "{0}小时", r[9] = "继续", 
r[10] = "退出", r[11] = "提示", r[12] = "保存", r[13] = "正在进入游戏...", r[20] = "K", r[21] = "M", 
r[22] = "B", r[23] = "万", r[24] = "亿", r[25] = "兆", r[26] = "消灭星星", r[27] = "Settings", 
r[509] = "您的网络已断开，点击确定重新登录游戏", r[510] = "您的网络不太稳定，点击确定重新连接游戏", r[511] = "重新连接成功", 
r[512] = "登录超时，请重新登录", r[513] = "连接成功", r[1e3] = "2048", r[1006] = "连接服务器失败，请检查网络", 
r[2e3] = "篮球大战", r[3e3] = " {0} ", r[3001] = "天", r);
cc._RF.pop();
}, {} ]
}, {}, [ "App", "BaseHack", "C2F", "_c2f", "BreatheSelf", "DragTarget", "DropResAnima", "JumpSelf", "MoveSelf", "RotationSelf", "UIAnimaPlayer", "BlurScreen", "C2FSafeArea", "CountdownLabel", "CyclicScrollBG", "GradientColor", "LinkPrefab", "ProgressAdd", "RichTextEvent", "RichTextPro", "ShakeNode", "TabPage", "ToScaleScreen", "WaterWaveScreen", "LanguageLabel", "ShaderArtLabel", "ShaderCyclicRLabel", "ShaderFill", "ShaderOutline", "ShaderShining", "ShaderTile", "AnimValue", "AnimValueLabel", "AnimValueProgress", "AnimValueProgressHP", "AuditItem", "AuditSet", "AuditTargetListen", "ButtonChildGray", "ButtonChildPos", "ButtonLongPress", "ButtonSingle", "UIAudioEffect", "MultiSprite", "MultiTextureManager", "MultiAssembler", "MultiAssemblerBarFilled", "MultiAssemblerRadialFilled", "MultiAssemblerSimple", "MultiAssemblerSliced", "MultiAssemblerTiled", "CircleList", "LayoutProperty", "LoopList", "VLItemGroup", "VLTemplate", "VirtualItem", "VirtualLayout", "VirtualList", "C2FConfig", "GlobalConfig", "WebQueryConfig", "AudioManager", "EngineExtension", "EventDefine", "EventDispatcher", "EventGroup", "EventManager", "LanguageData", "LanguageManager", "ResLoader", "Logger", "RandomManager", "StorageMgr", "C2FTween", "GameTimer", "Timer", "TimerManager", "C2FConst", "C2FEnum", "C2FUIDef", "UIAnimaDef", "words", "GUI", "DelegateComponent", "LayerDialog", "LayerEffect", "LayerManager", "LayerNotify", "LayerPopup", "LayerTouchEfx", "LayerUI", "UIBase", "UIMap", "UIModelBase", "UIPControlBase", "UIPTouchBase", "UIPanelBase", "UIPrefabBase", "UITouchPanel", "UIVControlBase", "UIViewBase", "CmmPromptDlg", "LoadingTips", "Notify", "TouchEffect", "ButtonHack", "DirectorHack", "EditorBoxHack", "EventMgrHack", "ProgressBarHack", "ScrollViewHack", "SpineHack", "SpriteHack", "ToggleContainerHack", "htmlTextParser", "Md5", "RC4", "JsonOb", "StringFormat", "VMBase", "VMCompsEdit", "VMCustom", "VMEvent", "VMLabel", "VMModify", "VMParent", "VMProgress", "VMState", "ViewModel", "BindHandler", "INetToUI", "NetWork", "HttpCode", "HttpService", "WSByProtobuf", "WebService", "_process", "bytebuffer", "long", "msgpack", "protobuf", "RedDot", "RedDotComp", "RedDotCompProxy", "RedDotMgr", "_IRedDotDeclare", "_redDot", "Alert", "Tbl", "TblMgr", "ArrayUtil", "DateUtil", "DeviceUtils", "EditorTool", "EncryptUtil", "HackUtil", "ImageUtil", "JsonUtil", "MathUtil", "NodeUtil", "ObjectUtil", "PlatformUtil", "RegexUtil", "SpineUtil", "StringUtil", "Vec3Util", "ViewUtil" ]);