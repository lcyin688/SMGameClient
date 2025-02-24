window.__require = function t(e, n, o) {
function r(c, a) {
if (!n[c]) {
if (!e[c]) {
var s = c.split("/");
s = s[s.length - 1];
if (!e[s]) {
var p = "function" == typeof __require && __require;
if (!a && p) return p(s, !0);
if (i) return i(s, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = s;
}
var l = n[c] = {
exports: {}
};
e[c][0].call(l.exports, function(t) {
return r(e[c][1][t] || t);
}, l, l.exports, t, e, n, o);
}
return n[c].exports;
}
for (var i = "function" == typeof __require && __require, c = 0; c < o.length; c++) r(o[c]);
return r;
}({
GameYngyView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "fc5eepUGbJESoVWiw6qEI+U", "GameYngyView");
var o;
Object.defineProperty(n, "__esModule", {
value: !0
});
n.GameYngyView = n.GameYngyUI = void 0;
var r, i = t("../../Script/game/GameConsts"), c = t("../../c2f-framework/define/C2FUIDef");
(function(t) {
t[t.Start = 4e3] = "Start";
t[t.YngyMain = 4001] = "YngyMain";
})(r = n.GameYngyUI || (n.GameYngyUI = {}));
n.GameYngyView = ((o = {})[r.YngyMain] = {
layer: c.LayerType.UI,
prefab: "prefab/F_YngyMain",
bundle: i.GameConsts.Bundle.gameYngy
}, o);
cc._RF.pop();
}, {
"../../Script/game/GameConsts": void 0,
"../../c2f-framework/define/C2FUIDef": void 0
} ],
YngyCfg: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e5c91kmT11AlopAwhXGQV6C", "YngyCfg");
var o;
Object.defineProperty(n, "__esModule", {
value: !0
});
n.YngyCfg = void 0;
n.YngyCfg = ((o = {})[0] = {
lay1: [ [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 1, 1, 1, 0 ], [ 0, 0, 1, 1, 1, 0 ], [ 0, 0, 1, 1, 1, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ] ],
lay2: [ [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ] ],
lay3: [ [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ] ],
lay4: [ [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ] ]
}, o);
cc._RF.pop();
}, {} ],
YngyItemModel: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1e706yCvjVLdqdl/3vLWC9T", "YngyItemModel");
var o, r = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), i = this && this.__decorate || function(t, e, n, o) {
var r, i = arguments.length, c = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (c = (i < 3 ? r(c) : i > 3 ? r(e, n, c) : r(e, n)) || c);
return i > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./../../../c2f-framework/gui/layer/UIModelBase"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "P_YngyItem";
return e;
}
e.prototype.initData = function(t) {
this.data = t;
};
return i([ s ], e);
}(c.UIModelBase));
n.default = p;
cc._RF.pop();
}, {
"./../../../c2f-framework/gui/layer/UIModelBase": void 0
} ],
YngyItemView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ff0f4LJ3E5HPod0F6euAqys", "YngyItemView");
var o, r = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), i = this && this.__decorate || function(t, e, n, o) {
var r, i = arguments.length, c = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (c = (i < 3 ? r(c) : i > 3 ? r(e, n, c) : r(e, n)) || c);
return i > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./../../../c2f-framework/gui/layer/UIPanelBase"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "P_YngyItem";
e.iconSprite = void 0;
e.iconButton = void 0;
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
this.iconButton = this.icon.getComponent(cc.Button);
};
e.prototype.addEvent = function() {
this.iconButton.node.on("click", this.oniconButtonClick, this);
};
e.prototype.removeEvent = function() {
this.iconButton.node.off("click", this.oniconButtonClick, this);
};
e.prototype.oniconButtonClick = function(t) {
this.emit("click", t);
};
return i([ s ], e);
}(c.UIPanelBase));
n.default = p;
cc._RF.pop();
}, {
"./../../../c2f-framework/gui/layer/UIPanelBase": void 0
} ],
YngyItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a35418aCMZBAqf3OV1u/UOc", "YngyItem");
var o, r = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), i = this && this.__decorate || function(t, e, n, o) {
var r, i = arguments.length, c = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (c = (i < 3 ? r(c) : i > 3 ? r(e, n, c) : r(e, n)) || c);
return i > 3 && c && Object.defineProperty(e, n, c), c;
}, c = this && this.__awaiter || function(t, e, n, o) {
return new (n || (n = Promise))(function(r, i) {
function c(t) {
try {
s(o.next(t));
} catch (t) {
i(t);
}
}
function a(t) {
try {
s(o.throw(t));
} catch (t) {
i(t);
}
}
function s(t) {
t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
t(e);
})).then(c, a);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var n, o, r, i, c = {
label: 0,
sent: function() {
if (1 & r[0]) throw r[1];
return r[1];
},
trys: [],
ops: []
};
return i = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function a(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(i) {
if (n) throw new TypeError("Generator is already executing.");
for (;c; ) try {
if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 
0) : o.next) && !(r = r.call(o, i[1])).done) return r;
(o = 0, r) && (i = [ 2 & i[0], r.value ]);
switch (i[0]) {
case 0:
case 1:
r = i;
break;

case 4:
c.label++;
return {
value: i[1],
done: !1
};

case 5:
c.label++;
o = i[1];
i = [ 0 ];
continue;

case 7:
i = c.ops.pop();
c.trys.pop();
continue;

default:
if (!(r = c.trys, r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
c = 0;
continue;
}
if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
c.label = i[1];
break;
}
if (6 === i[0] && c.label < r[1]) {
c.label = r[1];
r = i;
break;
}
if (r && c.label < r[2]) {
c.label = r[2];
c.ops.push(i);
break;
}
r[2] && c.ops.pop();
c.trys.pop();
continue;
}
i = e.call(t, c);
} catch (t) {
i = [ 6, t ];
o = 0;
} finally {
n = r = 0;
}
if (5 & i[0]) throw i[1];
return {
value: i[0] ? i[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("./../../../c2f-framework/gui/layer/UIPControlBase"), p = t("./../../../c2f-framework/define/C2FEnum"), l = t("../../../Script/game/UIParam"), u = t("../../../Script/game/GameConsts"), f = cc._decorator, y = f.ccclass, h = (f.property, 
function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "P_YngyItem";
e.model = void 0;
e.view = void 0;
return e;
}
e.prototype.onEnable = function() {
t.prototype.onEnable && t.prototype.onEnable.call(this);
this.on(p.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
};
e.prototype.onDisable = function() {
t.prototype.onDisable && t.prototype.onDisable.call(this);
this.off(p.C2FEnum.UIEvent.ButtonClick);
};
e.prototype.onButtonClick = function(t, e) {
return c(this, void 0, void 0, function() {
return a(this, function() {
switch (e.name) {
case this.view.iconButton.name:
this.CC_onClickicon();
}
return [ 2 ];
});
});
};
e.prototype.CC_onClickicon = function() {
this.model.data.state == l.UIPa.YngyItemArgsStates.Alive && (this.model.data.hideState || this.model.data.clickFun && this.model.data.clickFun(this.model.data, this.node));
};
e.prototype.init = function(t) {
this.model.initData(t);
this.initView(t);
};
e.prototype.initView = function(t) {
var e = u.GameConsts.ResUrl.yngy + "chip_" + t.typ;
c2f.utils.view.changeSpriteFrame(this.view.iconSprite, e);
this.node.setPosition(t.pos);
this.setOpcity(t.hideState);
};
e.prototype.setOpcity = function(t, e) {
void 0 === e && (e = 0);
cc.Tween.stopAllByTarget(this.node);
var n = t ? 100 : 255;
cc.tween(this.node).to(e, {
opacity: t ? 0 : n
}).start();
};
return i([ y ], e);
}(s.UIPControlBase));
n.default = h;
cc._RF.pop();
}, {
"../../../Script/game/GameConsts": void 0,
"../../../Script/game/UIParam": void 0,
"./../../../c2f-framework/define/C2FEnum": void 0,
"./../../../c2f-framework/gui/layer/UIPControlBase": void 0
} ],
YngyMainModel: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d3251pAmDBLz62pXRSju3VY", "YngyMainModel");
var o, r = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), i = this && this.__decorate || function(t, e, n, o) {
var r, i = arguments.length, c = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (c = (i < 3 ? r(c) : i > 3 ? r(e, n, c) : r(e, n)) || c);
return i > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../../../Script/game/GameConsts"), a = t("../../../Script/game/UIParam"), s = t("../YngyCfg"), p = t("./../../../c2f-framework/gui/layer/UIModelBase"), l = cc._decorator, u = l.ccclass, f = (l.property, 
function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "F_YngyMain";
e.itemMap1 = null;
e.itemMap2 = null;
e.itemMap3 = null;
e.itemMap4 = null;
e.itemMapArr = [];
e.selectedPool = [];
return e;
}
e.prototype.initDataByLv = function(t, e) {
this.selectedPool = [];
var n = this.getAllCount(t), o = Math.floor(n / 3), r = this.getRadomTypeArr(o);
this.itemMap1 = new Map();
this.itemMap2 = new Map();
this.itemMap3 = new Map();
this.itemMap4 = new Map();
this.pushItemArr(s.YngyCfg[t - 1].lay1, 0, r, 0, e);
this.pushItemArr(s.YngyCfg[t - 1].lay2, 0, r, 1, e);
this.pushItemArr(s.YngyCfg[t - 1].lay3, 0, r, 2, e);
this.pushItemArr(s.YngyCfg[t - 1].lay4, 0, r, 3, e);
this.itemMapArr = [];
this.itemMapArr.push(this.itemMap1, this.itemMap2, this.itemMap3, this.itemMap4);
this.reflashHideStatestate();
};
e.prototype.reflashHideStatestate = function() {
for (var t = this, e = 0; e < this.itemMapArr.length; e++) this.itemMapArr[e].forEach(function(e) {
e.forEach(function(e) {
var n = t.getHideState(e);
e.hideState = n;
});
});
};
e.prototype.getHideState = function(t) {
for (var e = t.cengIndex, n = !1, o = c.GameConsts.YngyConst.ItemWidthHeight, r = e; r < 4; r++) this.itemMapArr[r].forEach(function(e) {
e.forEach(function(e) {
e.pos.x - t.pos.x < o && e.pos.y - t.pos.y < o && (n = !0);
});
});
return n;
};
e.prototype.pushItemArr = function(t, e, n, o, r) {
var i, s = c.GameConsts.YngyConst.ItemWidthHeight, p = new cc.Vec2(0, 0);
switch (o) {
case 0:
i = this.itemMap1;
break;

case 1:
i = this.itemMap2;
p = new cc.Vec2(s / 2, s / 2);
break;

case 2:
i = this.itemMap3;
break;

case 3:
i = this.itemMap4;
p = new cc.Vec2(s / 2, s / 2);
}
for (var l = 0; l < t.length; l++) for (var u = t[l], f = 0; f < u.length; f++) if (1 == u[f]) {
var y = l * s, h = f * s, d = {
pos: new cc.Vec2(y, h).add(p),
cengIndex: o,
xIndex: l,
YIndex: f,
typ: n[e],
state: a.UIPa.YngyItemArgsStates.Alive,
hideState: !1,
clickFun: r
}, g = i.get(l);
if (g) g.set(f, d); else {
var m = new Map();
m.set(f, d);
i.set(l, m);
}
e++;
}
};
e.prototype.getAllCount = function(t) {
this.getCount(s.YngyCfg[t - 1].lay1, 0);
this.getCount(s.YngyCfg[t - 1].lay2, 0);
this.getCount(s.YngyCfg[t - 1].lay3, 0);
this.getCount(s.YngyCfg[t - 1].lay4, 0);
return 0;
};
e.prototype.getCount = function(t) {
t.forEach(function(t) {
t.forEach(function() {});
});
};
e.prototype.getRadomTypeArr = function(t) {
for (var e = [], n = [ 0, 1, 2, 3, 4, 5 ]; 0 < t; 0) {
var o = Math.floor(Math.random() * n.length);
0 == n.length && (n = [ 0, 1, 2, 3, 4, 5 ]);
e.push(n[o]);
e.push(n[o]);
e.push(n[o]);
n.splice(o, 1);
}
return e;
};
return i([ u ], e);
}(p.UIModelBase));
n.default = f;
cc._RF.pop();
}, {
"../../../Script/game/GameConsts": void 0,
"../../../Script/game/UIParam": void 0,
"../YngyCfg": "YngyCfg",
"./../../../c2f-framework/gui/layer/UIModelBase": void 0
} ],
YngyMainView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0798241B+5P3bcmVbpZzC3j", "YngyMainView");
var o, r = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), i = this && this.__decorate || function(t, e, n, o) {
var r, i = arguments.length, c = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (c = (i < 3 ? r(c) : i > 3 ? r(e, n, c) : r(e, n)) || c);
return i > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./../../../c2f-framework/gui/layer/UIViewBase"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "F_YngyMain";
e.btnMenuSprite = void 0;
e.btnMenuButton = void 0;
e.lvPanelSprite = void 0;
e.seletedSprite = void 0;
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
this.btnMenu = this.get("_btnMenu_");
this.btnMenuSprite = this.btnMenu.getComponent(cc.Sprite);
this.btnMenuButton = this.btnMenu.getComponent(cc.Button);
this.lvPanel = this.get("_lvPanel_");
this.lvPanelSprite = this.lvPanel.getComponent(cc.Sprite);
this.seleted = this.get("_seleted_");
this.seletedSprite = this.seleted.getComponent(cc.Sprite);
};
e.prototype.addEvent = function() {
this.btnMenuButton.node.on("click", this.onbtnMenuButtonClick, this);
};
e.prototype.removeEvent = function() {
this.btnMenuButton.node.off("click", this.onbtnMenuButtonClick, this);
};
e.prototype.onbtnMenuButtonClick = function(t) {
this.emit("click", t);
};
return i([ s ], e);
}(c.UIViewBase));
n.default = p;
cc._RF.pop();
}, {
"./../../../c2f-framework/gui/layer/UIViewBase": void 0
} ],
YngyMain: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9086f3ZDJJLAaKqW6opZfPn", "YngyMain");
var o, r = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), i = this && this.__decorate || function(t, e, n, o) {
var r, i = arguments.length, c = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (c = (i < 3 ? r(c) : i > 3 ? r(e, n, c) : r(e, n)) || c);
return i > 3 && c && Object.defineProperty(e, n, c), c;
}, c = this && this.__awaiter || function(t, e, n, o) {
return new (n || (n = Promise))(function(r, i) {
function c(t) {
try {
s(o.next(t));
} catch (t) {
i(t);
}
}
function a(t) {
try {
s(o.throw(t));
} catch (t) {
i(t);
}
}
function s(t) {
t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
t(e);
})).then(c, a);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var n, o, r, i, c = {
label: 0,
sent: function() {
if (1 & r[0]) throw r[1];
return r[1];
},
trys: [],
ops: []
};
return i = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function a(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(i) {
if (n) throw new TypeError("Generator is already executing.");
for (;c; ) try {
if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 
0) : o.next) && !(r = r.call(o, i[1])).done) return r;
(o = 0, r) && (i = [ 2 & i[0], r.value ]);
switch (i[0]) {
case 0:
case 1:
r = i;
break;

case 4:
c.label++;
return {
value: i[1],
done: !1
};

case 5:
c.label++;
o = i[1];
i = [ 0 ];
continue;

case 7:
i = c.ops.pop();
c.trys.pop();
continue;

default:
if (!(r = c.trys, r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
c = 0;
continue;
}
if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
c.label = i[1];
break;
}
if (6 === i[0] && c.label < r[1]) {
c.label = r[1];
r = i;
break;
}
if (r && c.label < r[2]) {
c.label = r[2];
c.ops.push(i);
break;
}
r[2] && c.ops.pop();
c.trys.pop();
continue;
}
i = e.call(t, c);
} catch (t) {
i = [ 6, t ];
o = 0;
} finally {
n = r = 0;
}
if (5 & i[0]) throw i[1];
return {
value: i[0] ? i[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("./../../../c2f-framework/gui/layer/UIVControlBase"), p = t("./../../../c2f-framework/define/C2FEnum"), l = t("../../../Script/game/UIParam"), u = t("../../../Script/game/GameConsts"), f = cc._decorator, y = f.ccclass, h = (f.property, 
function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "F_YngyMain";
e.model = void 0;
e.view = void 0;
return e;
}
e.prototype.onViewOpen = function() {};
e.prototype.onEnable = function() {
t.prototype.onEnable && t.prototype.onEnable.call(this);
this.on(p.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
};
e.prototype.onDisable = function() {
t.prototype.onDisable && t.prototype.onDisable.call(this);
this.off(p.C2FEnum.UIEvent.ButtonClick);
};
e.prototype.onButtonClick = function(t, e) {
return c(this, void 0, void 0, function() {
return a(this, function() {
switch (e.name) {
case this.view.btnMenuButton.name:
this.CC_onClickbtnMenu();
}
return [ 2 ];
});
});
};
e.prototype.CC_onClickbtnMenu = function() {
this.closeView();
};
e.prototype.start = function() {
this.loadLevel(1);
};
e.prototype.loadLevel = function(t) {
this.model.initDataByLv(t, this.clickCard.bind(this));
};
e.prototype.clickCard = function(t) {
if (!t.hideState && t.state == l.UIPa.YngyItemArgsStates.Alive) {
t.state = l.UIPa.YngyItemArgsStates.Dead;
for (var e = 0, n = 0; n < this.model.selectedPool.length; n++) {
if (this.model.selectedPool[n].typ == t.typ) {
e = n;
break;
}
e = n + 1;
}
this.model.selectedPool.splice(e, 0, t);
var o = u.GameConsts.YngyConst.ItemWidthHeight;
new cc.Vec3(e * o + o / 2, 0);
}
};
e.prototype.clickRestart = function() {
this.loadLevel(1);
};
return i([ y ], e);
}(s.UIVControlBase));
n.default = h;
cc._RF.pop();
}, {
"../../../Script/game/GameConsts": void 0,
"../../../Script/game/UIParam": void 0,
"./../../../c2f-framework/define/C2FEnum": void 0,
"./../../../c2f-framework/gui/layer/UIVControlBase": void 0
} ]
}, {}, [ "GameYngyView", "YngyCfg", "YngyItem", "YngyItemModel", "YngyItemView", "YngyMain", "YngyMainModel", "YngyMainView" ]);