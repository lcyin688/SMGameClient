window.__require = function t(e, o, n) {
function i(a, c) {
if (!o[a]) {
if (!e[a]) {
var s = a.split("/");
s = s[s.length - 1];
if (!e[s]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(s, !0);
if (r) return r(s, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = s;
}
var p = o[a] = {
exports: {}
};
e[a][0].call(p.exports, function(t) {
return i(e[a][1][t] || t);
}, p, p.exports, t, e, o, n);
}
return o[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
return i;
}({
BallModel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5795fv915NHiZN1XFp1Qv/i", "BallModel");
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
var a = t("./../../../../c2f-framework/gui/layer/UIModelBase"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "P_Ball";
return e;
}
e.prototype.initData = function(t) {
this.basket = t;
this.emitSpeed = 3e3;
this.gravity = 4500;
this.scale = .6;
this.showTime = .3;
this.maxXSpeed = 5e3;
};
return r([ s ], e);
}(a.UIModelBase));
o.default = l;
cc._RF.pop();
}, {
"./../../../../c2f-framework/gui/layer/UIModelBase": void 0
} ],
BallView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a1d90TH/lhGG4pTq7HmAmVK", "BallView");
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
var a = t("./../../../../c2f-framework/gui/layer/UIPanelBase"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "P_Ball";
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
};
e.prototype.addEvent = function() {};
e.prototype.removeEvent = function() {};
return r([ s ], e);
}(a.UIPanelBase));
o.default = l;
cc._RF.pop();
}, {
"./../../../../c2f-framework/gui/layer/UIPanelBase": void 0
} ],
Ball: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9a690OHinNCnKc2lOKBiDji", "Ball");
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
var a = t("./../../../../c2f-framework/gui/layer/UIPControlBase"), c = t("../../../../Script/game/EventName"), s = t("../../../../Script/game/GameConsts"), l = t("../../../../Script/game/UIHelper"), p = cc._decorator, u = p.ccclass, f = (p.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "P_Ball";
e.model = void 0;
e.view = void 0;
return e;
}
e.prototype.onLoad = function() {
this.registerOn();
this.node._touchListener.swallowTouches = !1;
};
e.prototype.registerOn = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancelled, this);
};
e.prototype.registerOff = function() {
this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancelled, this);
};
e.prototype.init = function(t) {
this.model.initData(t);
};
e.prototype.onTouchStart = function(t) {
this.model.began = t.getLocation();
this.model.status = s.GameConsts.TouchStatus.BEGEN;
};
e.prototype.onTouchCancelled = function() {
this.model.status = s.GameConsts.TouchStatus.CANCEL;
};
e.prototype.onTouchEnd = function(t) {
this.model.ended = t.getLocation();
if (Math.sqrt(Math.pow(this.model.ended.x - this.model.began.x, 2) + Math.pow(this.model.ended.y - this.model.began.y, 2)) > 40 && this.model.began.y < this.model.ended.y) {
this.model.status = s.GameConsts.TouchStatus.ENDED;
this.registerOff();
this.model.currentVerSpeed = this.model.emitSpeed;
this.model.target = this.node.parent.convertToNodeSpaceAR(this.model.ended);
this.model.currentHorSpeed = 2 * this.model.target.x;
l.UIHelper.playEffect("basketBall/fly");
this.doAnim();
c2f.event.emit(c.EventName.EName.newBall);
this.model.shadow && this.model.shadow.dimiss();
} else this.model.status = s.GameConsts.TouchStatus.CANCEL;
};
e.prototype.doAnim = function() {
var t = 1080 * Math.random();
cc.tween(this.node).to(2, {
angle: t
}).start();
cc.tween(this.node).to(1, {
scale: this.model.scale
}).start();
};
e.prototype.bindShadow = function(t) {
this.model.shadow = t;
};
e.prototype.update = function(t) {
if (this.model.status == s.GameConsts.TouchStatus.ENDED) {
this.updatePosition(t);
this.checkValid();
}
};
e.prototype.checkValid = function() {
if (this.model.ballStatus === s.GameConsts.BallStatus.DOWN && !this.model.valid) {
var t = this.node.parent;
if (null != t) {
var e = this.model.basket, o = e.view.left, n = e.view.right, i = this.node.getBoundingBoxToWorld().width / 2, r = (t.convertToWorldSpaceAR(this.node.getPosition()).x, 
t.convertToWorldSpaceAR(this.node.getPosition()).x, t.convertToWorldSpaceAR(this.node.getPosition()).x), a = t.convertToWorldSpaceAR(this.node.getPosition()).y, c = t.convertToWorldSpaceAR(e.view.line.getPosition()).y - i, p = e.node.convertToWorldSpaceAR(o.getPosition()).x, u = e.node.convertToWorldSpaceAR(n.getPosition()).x, f = e.node.convertToWorldSpaceAR(o.getPosition()).y - 2 * i;
if (a < c && a > f && r > p && r < u) {
this.model.valid = !0;
e.addScore();
e.playNetAnim();
this.model.hitIn ? l.UIHelper.playEffect("basketBall/hitboard") : l.UIHelper.playEffect("basketBall/hitboardin");
}
}
}
};
e.prototype.updatePosition = function(t) {
this.node.x += t * this.model.currentHorSpeed;
this.model.currentVerSpeed -= t * this.model.gravity;
this.node.y += t * this.model.currentVerSpeed;
this.changeBallStatus(this.model.currentVerSpeed);
if (this.model.ballStatus === s.GameConsts.BallStatus.NONE && this.isOutScreen()) {
this.node.stopAllActions();
this.node.removeFromParent();
this.model.valid = !1;
}
};
e.prototype.isOutScreen = function() {
return this.node.y < -900;
};
e.prototype.changeBallStatus = function(t) {
if (0 === t || this.isOutScreen()) this.model.ballStatus = s.GameConsts.BallStatus.NONE; else if (t > 0) {
this.model.ballStatus = s.GameConsts.BallStatus.FLY;
this.model.basket.switchMaskLineShow(!1);
} else {
this.model.ballStatus = s.GameConsts.BallStatus.DOWN;
this.model.basket.switchMaskLineShow(!0);
}
};
e.prototype.onCollisionEnter = function(t, e) {
if (this.model.ballStatus !== s.GameConsts.BallStatus.FLY) {
var o = t.node.getComponent("CollisionBox"), n = o.getLeft(), i = o.getRight(), r = e.world, a = r.radius, c = this.node.parent.convertToWorldSpaceAR(e.node.getPosition()), p = this.model.basket.node.convertToWorldSpaceAR(t.node.getPosition()), u = (c.y - p.y) / a, f = Math.abs(p.x - c.x) / a, h = this.model.currentHorSpeed / Math.abs(this.model.currentHorSpeed) * this.model.maxXSpeed;
if ("right" === t.node.name && this.node.x <= n || "left" === t.node.name && this.node.x >= i) if (this.model.hitIn) this.model.currentHorSpeed = h * f; else {
this.model.currentHorSpeed = -1 * h * f;
this.model.hitIn = !0;
}
("right" === t.node.name && this.node.x > i || "left" === t.node.name && this.node.x < n) && (this.model.currentHorSpeed = h);
this.model.currentVerSpeed = -1 * this.model.currentVerSpeed * u;
l.UIHelper.playEffect("basketBall/hitboard");
r.aabb, r.preAabb, r.transform, r.radius, r.position;
}
};
return r([ u ], e);
}(a.UIPControlBase));
o.default = f;
cc._RF.pop();
}, {
"../../../../Script/game/EventName": void 0,
"../../../../Script/game/GameConsts": void 0,
"../../../../Script/game/UIHelper": void 0,
"./../../../../c2f-framework/gui/layer/UIPControlBase": void 0
} ],
BasketBallMainModel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "89b82WtweBGLpYspcoubfNE", "BasketBallMainModel");
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
var a = t("./../../../../c2f-framework/gui/layer/UIModelBase"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "F_BasketBallMain";
return e;
}
e.prototype.initData = function() {
this.score = 0;
};
return r([ s ], e);
}(a.UIModelBase));
o.default = l;
cc._RF.pop();
}, {
"./../../../../c2f-framework/gui/layer/UIModelBase": void 0
} ],
BasketBallMainView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bba39gmbZ5PNZKn4q+T0Ozz", "BasketBallMainView");
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
var a = t("./../../../../c2f-framework/gui/layer/UIViewBase"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "F_BasketBallMain";
e.btnMenuSprite = void 0;
e.btnMenuButton = void 0;
e.txtCountLabel = void 0;
e.leftSprite = void 0;
e.leftBoxCollider = void 0;
e.rightSprite = void 0;
e.rightBoxCollider = void 0;
e.lineSprite = void 0;
e.contentWidget = void 0;
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
this.txtCount = this.get("_txtCount_");
this.txtCountLabel = this.txtCount.getComponent(cc.Label);
this.left = this.get("_left_");
this.leftSprite = this.left.getComponent(cc.Sprite);
this.leftBoxCollider = this.left.getComponent(cc.BoxCollider);
this.right = this.get("_right_");
this.rightSprite = this.right.getComponent(cc.Sprite);
this.rightBoxCollider = this.right.getComponent(cc.BoxCollider);
this.line = this.get("_line_");
this.lineSprite = this.line.getComponent(cc.Sprite);
this.content = this.get("_content_");
this.contentWidget = this.content.getComponent(cc.Widget);
this.initPos = this.get("_initPos_");
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
return r([ s ], e);
}(a.UIViewBase));
o.default = l;
cc._RF.pop();
}, {
"./../../../../c2f-framework/gui/layer/UIViewBase": void 0
} ],
BasketBallMain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "296dekOI6VHxoo9uAbDOp5G", "BasketBallMain");
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
var s = t("./../../../../c2f-framework/gui/layer/UIVControlBase"), l = t("./../../../../c2f-framework/define/C2FEnum"), p = t("../../../../Script/game/GameHelper"), u = t("../../../../Script/game/UIHelper"), f = t("../../../../entrance/script/EntranceView"), h = t("../../../../Script/game/EventName"), d = t("../../../../Script/game/GameConsts"), y = t("../Ball/Ball"), m = cc._decorator, v = m.ccclass, b = (m.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "F_BasketBallMain";
e.model = void 0;
e.view = void 0;
return e;
}
e.prototype.onLoad = function() {
u.UIHelper.playMusic("physics2048BackMusic");
p.GameHelper.setPhysics(!0);
c2f.event.on(h.EventName.EName.newBall, this.newBall, this);
this.loadTabItemFirst(this.startView.bind(this));
};
e.prototype.onDestroy = function() {
c2f.event.off(h.EventName.EName.newBall, this.newBall, this);
t.prototype.onDestroy.call(this);
};
e.prototype.onViewOpen = function() {
this.model.initData();
this.updateScore();
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
return a(this, void 0, void 0, function() {
return c(this, function() {
switch (e.name) {
case this.view.btnMenuButton.name:
this.CC_onClickbtnMenu();
}
return [ 2 ];
});
});
};
e.prototype.CC_onClickbtnMenu = function() {
u.UIHelper.playEffect("betClick");
c2f.gui.open(f.EntranceUI.GameLogin);
this.closeView();
};
e.prototype.loadTabItemFirst = function(t) {
return a(this, void 0, void 0, function() {
var e = this;
return c(this, function(o) {
switch (o.label) {
case 0:
return [ 4, c2f.res.loadOne(d.GameConsts.CmmPrefab.ball, cc.Prefab).then(function(o) {
e.model.ballItem = o;
t && t();
}) ];

case 1:
o.sent();
return [ 2 ];
}
});
});
};
e.prototype.startView = function() {
this.newBall("", "");
};
e.prototype.newBall = function() {
var t = c2f.utils.view.instantiateMVCPrefab(this.model.ballItem, this.view.content);
this.view.content.addChild(t);
var e = t.getComponent(y.default);
t.setPosition(this.view.initPos.getPosition());
e.init(this);
};
e.prototype.startMoveBasket = function() {};
e.prototype.stopMoveBasket = function() {};
e.prototype.gameOver = function() {};
e.prototype.addScore = function() {
this.model.score += 1;
this.updateScore();
};
e.prototype.updateScore = function() {
this.view.txtCountLabel.string = this.model.score.toString();
};
e.prototype.playNetAnim = function() {};
e.prototype.switchMaskLineShow = function() {};
return r([ v ], e);
}(s.UIVControlBase));
o.default = b;
cc._RF.pop();
}, {
"../../../../Script/game/EventName": void 0,
"../../../../Script/game/GameConsts": void 0,
"../../../../Script/game/GameHelper": void 0,
"../../../../Script/game/UIHelper": void 0,
"../../../../entrance/script/EntranceView": void 0,
"../Ball/Ball": "Ball",
"./../../../../c2f-framework/define/C2FEnum": void 0,
"./../../../../c2f-framework/gui/layer/UIVControlBase": void 0
} ],
BlockItemModel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "15d36wVJSBKqI2ZZb4NBwdc", "BlockItemModel");
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
var a = t("./../../../../c2f-framework/gui/layer/UIModelBase"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "P_BlockItem";
return e;
}
e.prototype.initData = function(t) {
this.data = t;
};
return r([ s ], e);
}(a.UIModelBase));
o.default = l;
cc._RF.pop();
}, {
"./../../../../c2f-framework/gui/layer/UIModelBase": void 0
} ],
BlockItemView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4fbaeSn8E5FJ4WlkmQlmypK", "BlockItemView");
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
var a = t("./../../../../c2f-framework/gui/layer/UIPanelBase"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "P_BlockItem";
e.iconSprite = void 0;
e.skeBoomSkeleton = void 0;
e.skeKuangSkeleton = void 0;
e.btnButton = void 0;
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
this.skeBoom = this.get("_skeBoom_");
this.skeBoomSkeleton = this.skeBoom.getComponent(sp.Skeleton);
this.skeKuang = this.get("_skeKuang_");
this.skeKuangSkeleton = this.skeKuang.getComponent(sp.Skeleton);
this.btn = this.get("_btn_");
this.btnButton = this.btn.getComponent(cc.Button);
};
e.prototype.addEvent = function() {
this.btnButton.node.on("click", this.onbtnButtonClick, this);
};
e.prototype.removeEvent = function() {
this.btnButton.node.off("click", this.onbtnButtonClick, this);
};
e.prototype.onbtnButtonClick = function(t) {
this.emit("click", t);
};
return r([ s ], e);
}(a.UIPanelBase));
o.default = l;
cc._RF.pop();
}, {
"./../../../../c2f-framework/gui/layer/UIPanelBase": void 0
} ],
BlockItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "36ab6zM3oVKH6cELRNFNTOZ", "BlockItem");
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
var s = t("./../../../../c2f-framework/gui/layer/UIPControlBase"), l = t("./../../../../c2f-framework/define/C2FEnum"), p = t("../../../../Script/game/UIHelper"), u = cc._decorator, f = u.ccclass, h = (u.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "P_BlockItem";
e.model = void 0;
e.view = void 0;
return e;
}
e.prototype.onEnable = function() {
t.prototype.onEnable && t.prototype.onEnable.call(this);
this.on(l.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
};
e.prototype.onDisable = function() {
t.prototype.onDisable && t.prototype.onDisable.call(this);
this.off(l.C2FEnum.UIEvent.ButtonClick);
};
e.prototype.onButtonClick = function(t, e) {
return a(this, void 0, void 0, function() {
return c(this, function() {
switch (e.name) {
case this.view.btnButton.name:
this.CC_onClickbtn();
}
return [ 2 ];
});
});
};
e.prototype.CC_onClickbtn = function() {
this.model.data && this.model.data.cbFun && this.model.data.cbFun(this.model.data);
};
e.prototype.setInit = function(t) {
this.model.initData(t);
this.initView(t);
};
e.prototype.initView = function(t) {
this.view.skeKuang.active = !1;
this.view.skeBoom.active = !1;
if (t.typ >= 0) {
this.node.active = !0;
c2f.utils.view.changeSpriteFrame(this.view.iconSprite, t.url);
} else this.node.active = !1;
};
e.prototype.playExplode = function(t) {
var e = this;
p.UIHelper.playEffect("pop_star");
p.UIHelper.playSkeAni(this.view.skeBoomSkeleton, "boom", function() {
e.node.active = !1;
e.view.skeKuang.active = !1;
e.view.skeBoom.active = !1;
t();
}, !1, 0, 3);
};
e.prototype.playChoose = function() {
p.UIHelper.playSkeAni(this.view.skeKuangSkeleton, "ani");
};
return r([ f ], e);
}(s.UIPControlBase));
o.default = h;
cc._RF.pop();
}, {
"../../../../Script/game/UIHelper": void 0,
"./../../../../c2f-framework/define/C2FEnum": void 0,
"./../../../../c2f-framework/gui/layer/UIPControlBase": void 0
} ],
BoomItemModel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6555duTs29Mi7yZM/SGW9SV", "BoomItemModel");
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
var a = t("./../../../../c2f-framework/gui/layer/UIModelBase"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "P_BoomItem";
return e;
}
return r([ s ], e);
}(a.UIModelBase));
o.default = l;
cc._RF.pop();
}, {
"./../../../../c2f-framework/gui/layer/UIModelBase": void 0
} ],
BoomItemView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1335cAU0+dASbgmfNko4tgU", "BoomItemView");
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
var a = t("./../../../../c2f-framework/gui/layer/UIPanelBase"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "P_BoomItem";
e.boom4Sprite = void 0;
e.move1Sprite = void 0;
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
this.boom4 = this.get("_boom4_");
this.boom4Sprite = this.boom4.getComponent(cc.Sprite);
this.move1 = this.get("_move1_");
this.move1Sprite = this.move1.getComponent(cc.Sprite);
};
e.prototype.addEvent = function() {};
e.prototype.removeEvent = function() {};
return r([ s ], e);
}(a.UIPanelBase));
o.default = l;
cc._RF.pop();
}, {
"./../../../../c2f-framework/gui/layer/UIPanelBase": void 0
} ],
BoomItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bac3e+2QCREopRAED6edh84", "BoomItem");
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
var a = t("./../../../../c2f-framework/gui/layer/UIPControlBase"), c = t("../../../../Script/game/UIHelper"), s = cc._decorator, l = s.ccclass, p = (s.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "P_BoomItem";
e.model = void 0;
e.view = void 0;
return e;
}
e.prototype.playBoom = function(t, e) {
var o = this, n = t.radius;
this.moveAni1(n);
this.scheduleOnce(function() {
e();
o.moveAni2(n);
}, .2);
this.scheduleOnce(function() {
o.node.destroy();
}, .5);
};
e.prototype.moveAni1 = function(t) {
for (var e = c.UIHelper.getCirclePointsArr(t, t + 300, new cc.Vec2(0, 0), 15), o = function(t) {
var o = cc.instantiate(n.view.move1);
o.parent = n.node;
o.active = !0;
o.setPosition(e[t][0]);
var i = .5 * Math.random() + .5;
o.setScale(i, i);
cc.tween(o).to(.3, {
opacity: 20,
scale: 1,
position: e[t][1]
}).call(function() {
o.destroy();
}).start();
}, n = this, i = 1; i < e.length; i++) o(i);
};
e.prototype.moveAni2 = function(t) {
for (var e = c.UIHelper.getCirclePointsArr(t, t + 400, new cc.Vec2(0, 0), 20), o = function(t) {
var o = cc.instantiate(n.view.move1);
o.parent = n.node;
o.active = !0;
o.setPosition(e[t][0]);
var i = .5 * Math.random() + .5;
o.setScale(i, i);
cc.tween(o).to(.3, {
opacity: 20,
scale: 1,
position: e[t][1]
}).call(function() {
o.destroy();
}).start();
}, n = this, i = 1; i < e.length; i++) o(i);
};
return r([ l ], e);
}(a.UIPControlBase));
o.default = p;
cc._RF.pop();
}, {
"../../../../Script/game/UIHelper": void 0,
"./../../../../c2f-framework/gui/layer/UIPControlBase": void 0
} ],
DesStarMainModel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "444f5lwxEpEnavEyUp87+7t", "DesStarMainModel");
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
var a = t("../../../../Script/game/GameConsts"), c = t("../../../../Script/game/UIParam"), s = t("../StarCfg"), l = t("./../../../../c2f-framework/gui/layer/UIModelBase"), p = cc._decorator, u = p.ccclass, f = (p.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "F_DesStarMain";
return e;
}
e.prototype.initData = function() {
this.blockTotalNum = 8;
this.curLv = c2f.storage.getNumber(a.GameConsts.StorageKey.curLv);
this.visibleSize = cc.view.getVisibleSize();
this.getDataByLv(this.curLv);
};
e.prototype.getDataByLv = function(t) {
this.starDataArr = this.getStarDataArr(t);
this.curScore = 0;
this.totalShowScore = 0;
var e = 0;
this.starDataArr.forEach(function(t) {
t.forEach(function(t) {
var o = c.UIPa.StarItemData[t];
e += o.score;
});
});
this.totalShowScore = Math.ceil(.8 * e);
};
e.prototype.getStarDataArr = function(t) {
var e = [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ];
if (s.StarCfg[t]) {
for (var o = 0; o < 10; o++) for (var n = 0; n < 10; n++) e[o][n] = s.StarCfg[t][o][n];
return e;
}
return this.getStarLvData(e);
};
e.prototype.getStarLvData = function(t) {
for (var e = this.getRandomInt(0, this.blockTotalNum, 2), o = 0; o < 10; o++) for (var n = 0; n < 10; n++) {
var i = c2f.random.getRandomInt(0, 10, 1);
t[o][n] = i > 5 ? e[0] : e[1];
}
return t;
};
e.prototype.getRandomInt = function(t, e, o) {
for (var n = [], i = e - t + 1, r = new Map(); n.length < o; ) {
var a = Math.floor(Math.random() * i) + t;
if (!r.has(a)) {
r.set(a, a);
n.push(a);
}
}
return n;
};
e.prototype.getStarPosition = function(t, e) {
var o = (e + .5) * c.UIPa.DesStarGameArgs.width, n = (t + .5) * c.UIPa.DesStarGameArgs.heigh;
return new cc.Vec3(o, n);
};
e.prototype.findSameStarIndex = function(t, e, o, n) {
if (t < 0 || e < 0 || t > 9 || e > 9) return [];
var i = this.starDataArr[t][e];
if (-1 == i) return [];
if (o) {
for (var r = 0; r < o.length; r++) if (o[r].row == t && o[r].column == e) return [];
o.push({
row: t,
column: e
});
} else o = [ {
row: t,
column: e
} ];
n || (n = []);
if (t < 9 && this.starDataArr[t + 1][e] == i) {
this.putIndexTo(n, t + 1, e);
this.findSameStarIndex(t + 1, e, o, n);
}
if (t > 0 && this.starDataArr[t - 1][e] == i) {
this.putIndexTo(n, t - 1, e);
this.findSameStarIndex(t - 1, e, o, n);
}
if (e < 9 && this.starDataArr[t][e + 1] == i) {
this.putIndexTo(n, t, e + 1);
this.findSameStarIndex(t, e + 1, o, n);
}
if (e > 0 && this.starDataArr[t][e - 1] == i) {
this.putIndexTo(n, t, e - 1);
this.findSameStarIndex(t, e - 1, o, n);
}
return n;
};
e.prototype.putIndexTo = function(t, e, o) {
for (var n = 0; n < t.length; n++) if (t[n].row == e && t[n].column == o) return;
t.push({
row: e,
column: o
});
};
return r([ u ], e);
}(l.UIModelBase));
o.default = f;
cc._RF.pop();
}, {
"../../../../Script/game/GameConsts": void 0,
"../../../../Script/game/UIParam": void 0,
"../StarCfg": "StarCfg",
"./../../../../c2f-framework/gui/layer/UIModelBase": void 0
} ],
DesStarMainView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a0426aPXXpAzKo6Sj44W/qZ", "DesStarMainView");
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
var a = t("./../../../../c2f-framework/gui/layer/UIViewBase"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "F_DesStarMain";
e.barSprite = void 0;
e.barProgressBar = void 0;
e.txtLvLabel = void 0;
e.txtLvLabelOutline = void 0;
e.txtScoreLabel = void 0;
e.txtScoreLabelOutline = void 0;
e.rewardSprite = void 0;
e.btnMenuSprite = void 0;
e.btnMenuButton = void 0;
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
this.txtLv = this.get("_txtLv_");
this.txtLvLabel = this.txtLv.getComponent(cc.Label);
this.txtLvLabelOutline = this.txtLv.getComponent(cc.LabelOutline);
this.txtScore = this.get("_txtScore_");
this.txtScoreLabel = this.txtScore.getComponent(cc.Label);
this.txtScoreLabelOutline = this.txtScore.getComponent(cc.LabelOutline);
this.endPos = this.get("_endPos_");
this.content = this.get("_content_");
this.reward = this.get("_reward_");
this.rewardSprite = this.reward.getComponent(cc.Sprite);
this.btnMenu = this.get("_btnMenu_");
this.btnMenuSprite = this.btnMenu.getComponent(cc.Sprite);
this.btnMenuButton = this.btnMenu.getComponent(cc.Button);
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
return r([ s ], e);
}(a.UIViewBase));
o.default = l;
cc._RF.pop();
}, {
"./../../../../c2f-framework/gui/layer/UIViewBase": void 0
} ],
DesStarMain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d0c425xfFZLMbXkRWV/8sSy", "DesStarMain");
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
var s = t("./../../../../c2f-framework/gui/layer/UIVControlBase"), l = t("./../../../../c2f-framework/define/C2FEnum"), p = t("../../../../entrance/script/EntranceView"), u = t("../../../../Script/game/UIHelper"), f = t("../../../../Script/game/GameConsts"), h = t("../BlockItem/BlockItem"), d = t("../../../../Script/game/UIParam"), y = t("../StartItem/StartItem"), m = cc._decorator, v = m.ccclass, b = (m.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "F_DesStarMain";
e.model = void 0;
e.view = void 0;
return e;
}
e.prototype.onViewOpen = function() {
this.initAudioState();
u.UIHelper.playMusic("backMusic");
this.model.initData();
this.resetGame();
this.loadTabItemFirst(this.startGame.bind(this));
this.loadStarItem();
u.UIHelper.playEffect("ready_go");
};
e.prototype.initAudioState = function() {
var t = c2f.storage.getBoolean(f.GameConsts.StorageKey.soundBg);
c2f.audio.bgmOff = t;
var e = c2f.storage.getBoolean(f.GameConsts.StorageKey.soundEff);
c2f.audio.sfxOff = e;
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
return a(this, void 0, void 0, function() {
return c(this, function() {
switch (e.name) {
case this.view.btnMenuButton.name:
this.CC_onClickbtnMenu();
}
return [ 2 ];
});
});
};
e.prototype.CC_onClickbtnMenu = function() {
u.UIHelper.playEffect("betClick");
c2f.gui.open(p.EntranceUI.SoundSet);
};
e.prototype.loadTabItemFirst = function(t) {
return a(this, void 0, void 0, function() {
var e = this;
return c(this, function(o) {
switch (o.label) {
case 0:
return [ 4, c2f.res.loadOne(f.GameConsts.CmmPrefab.blockItem, cc.Prefab).then(function(o) {
e.model.blockItem = o;
t && t();
}) ];

case 1:
o.sent();
return [ 2 ];
}
});
});
};
e.prototype.loadStarItem = function() {
return a(this, void 0, void 0, function() {
var t = this;
return c(this, function(e) {
switch (e.label) {
case 0:
return [ 4, c2f.res.loadOne(f.GameConsts.CmmPrefab.P_StartItem, cc.Prefab).then(function(e) {
t.model.startItem = e;
}) ];

case 1:
e.sent();
return [ 2 ];
}
});
});
};
e.prototype.initItemArr = function() {
this.model.starItemMap = new Map();
for (var t = 0; t < 10; t++) {
for (var e = new Map(), o = 0; o < 10; o++) {
var n = c2f.utils.view.instantiateMVCPrefab(this.model.blockItem, this.view.content);
this.view.content.addChild(n);
var i = n.getComponent(h.default);
e.set(o, i);
}
this.model.starItemMap.set(t, e);
}
};
e.prototype.setBarView = function() {
this.view.txtScoreLabel.string = "{0}/{1}".format(this.model.curScore, this.model.totalShowScore);
var t = this.model.curScore / this.model.totalShowScore;
t > 1 && (t = 1);
this.view.barProgressBar.progress = t;
};
e.prototype.startGame = function() {
this.setBarView();
this.model.isActionRunning = !1;
this.model.starItemMap || this.initItemArr();
this.view.txtLvLabel.string = (this.model.curLv + 1).toString();
for (var t = 0, e = 0; e < 10; e++) {
t = .02 * e;
for (var o = 0; o < 10; o++) {
t += .02;
var n = this.model.getStarPosition(e, o);
n.y += this.model.visibleSize.height;
var i = this.model.starItemMap.get(e).get(o), r = i.node;
r.name = "block" + o + "_" + e;
r.setPosition(n);
var a = this.model.starDataArr[e][o], c = d.UIPa.StarItemData[a], s = 0, l = "";
if (c) {
s = c.score;
l = c.url;
}
var p = {
typ: a,
score: s,
url: l,
column: o,
row: e,
cbFun: this.clickItemCb.bind(this)
};
i.setInit(p);
cc.tween(r).to(.2 + t, {
position: this.model.getStarPosition(e, o)
}).start();
}
}
};
e.prototype.judgeFinal = function(t, e) {
for (var o, n = this, i = 0, r = 0; r < t.length; r++) {
o = t[r];
var a = this.model.starItemMap.get(o.row).get(o.column);
a.playChoose();
i += a.model.data.score;
e[o.row][o.column] = -1;
}
var c = cc.tween(this.node), s = function(e) {
o = t[e];
u.UIHelper.playEffect("getMoney");
var i = l.model.starItemMap.get(o.row).get(o.column);
c.call(function() {
n.model.curScore += i.model.data.score;
i.playExplode(function() {
n.setBarView();
n.playStartAni(i.node);
});
}).delay(.02);
}, l = this;
for (r = 0; r < t.length; r++) s(r);
var p = this.getHaveCount();
c.call(function() {
n.showReward(i);
n.scheduleOnce(function() {
p <= 1 ? n.winGame(p) : n.drawBlock(e);
}, .8);
}).start();
};
e.prototype.playStartAni = function(t) {
var e = c2f.utils.view.instantiateMVCPrefab(this.model.startItem, this.view.content);
this.view.content.addChild(e);
e.getComponent(y.default).playAni();
e.setPosition(t.position);
var o = this.view.endPos.parent.convertToWorldSpaceAR(this.view.endPos.position), n = this.view.content.convertToNodeSpaceAR(o), i = {
startPos: t.position,
endPos: n
};
u.UIHelper.createBezier(e, i);
cc.tween(e).to(.8, {}, u.UIHelper.createBezier(e, i)).delay(.2).call(function() {
e.destroy();
}).start();
};
e.prototype.showReward = function(t) {
u.UIHelper.playEffect("select");
t > 400 ? this.playWinByIndex(5) : t > 200 ? this.playWinByIndex(4) : t > 100 ? this.playWinByIndex(3) : t > 50 ? this.playWinByIndex(2) : t > 20 && this.playWinByIndex(1);
};
e.prototype.playWinByIndex = function(t) {
var e = this;
u.UIHelper.playEffect("reward_" + t);
this.view.reward.active = !0;
this.view.reward.setScale(.8);
this.view.reward.opacity = 120;
c2f.utils.view.changeSpriteFrame(this.view.rewardSprite, f.GameConsts.ResUrl.desStar + "reward_" + t);
cc.Tween.stopAllByTarget(this.view.reward);
cc.tween(this.view.reward).to(.3, {
scale: 1.8
}).start();
cc.tween(this.view.reward).to(.3, {
opacity: 255
}).call(function() {
e.view.reward.active = !1;
}).start();
};
e.prototype.clickItemCb = function(t) {
if (!this.model.isActionRunning) {
u.UIHelper.playEffect("select");
this.model.isActionRunning = !0;
var e = this.model.findSameStarIndex(t.row, t.column);
if (e.length > 1) {
var o = this.model.starDataArr;
this.judgeFinal(e, o);
} else this.model.isActionRunning = !1;
}
};
e.prototype.drawBlock = function(t) {
for (var e = this, o = [], n = 0; n < 10; n++) for (var i = 0; i < 10; i++) if (-1 == t[n][i]) {
for (var r = n + 1; r < 10 && -1 == t[r][i]; ) r += 1;
if (r < 10) {
t[n][i] = t[r][i];
t[r][i] = -1;
var a = {
fromRow: r,
fromCol: i,
toRow: n,
toCol: i
};
o.push(a);
}
}
var c = !1, s = !1;
for (i = 8; i > -1; i--) {
c = !0;
for (n = 0; n < 10; n++) if (-1 != t[n][i]) {
c = !1;
break;
}
if (c) for (var l = i + 1; l < 10; l++) for (n = 0; n < 10; n++) {
t[n][l - 1] = t[n][l];
t[n][l] = -1;
if (-1 != t[n][l - 1]) {
s = !1;
for (var p = 0; p < o.length; p++) if (o[p].toRow == n && o[p].toCol == l) {
o[p].toRow = n;
o[p].toCol = l - 1;
s = !0;
break;
}
s || o.push({
fromRow: n,
fromCol: l,
toRow: n,
toCol: l - 1
});
}
}
}
var u = o.length;
if (u > 0) {
var f = 0;
for (p = 0; p < u; p++) {
var h = o[p];
f++;
var d = this.model.starItemMap.get(h.fromRow).get(h.fromCol);
cc.tween(d.node).to(.2, {
position: this.model.getStarPosition(h.toRow, h.toCol)
}).call(function() {
if (0 == --f) {
e.model.isActionRunning = !1;
e.resetView();
}
}).start();
}
} else this.model.isActionRunning = !1;
};
e.prototype.resetView = function() {
for (var t = 0; t < 10; t++) for (var e = 0; e < 10; e++) {
var o = this.model.getStarPosition(t, e), n = this.model.starItemMap.get(t).get(e), i = n.node;
i.name = "block" + e + "_" + t;
i.setPosition(o);
var r = this.model.starDataArr[t][e], a = d.UIPa.StarItemData[r], c = 0, s = "";
if (a) {
c = a.score;
s = a.url;
}
var l = {
typ: r,
score: c,
url: s,
column: e,
row: t,
cbFun: this.clickItemCb.bind(this)
};
n.setInit(l);
}
var p = this.getHaveCount();
p <= 1 && this.winGame(p);
};
e.prototype.getHaveCount = function() {
for (var t = 0, e = new Map(), o = 0; o < this.model.starDataArr.length; o++) for (var n = this.model.starDataArr[o], i = 0; i < n.length; i++) {
var r = n[i];
if (r >= 0) {
var a = e.get(r);
if (a) {
var c = a + 1;
e.set(r, c);
} else e.set(r, 1);
}
}
e.forEach(function(e) {
e > t && (t = e);
});
return t;
};
e.prototype.winGame = function(t) {
var e = this;
if (1 == t) {
for (var o = 0; o < 10; o++) for (var n = function(t) {
var n = i.model.starDataArr[o][t], r = i.model.starItemMap.get(o).get(t);
if (n > 0) {
i.model.curScore += r.model.data.score;
r.playChoose();
r.playExplode(function() {
e.setBarView();
e.playStartAni(r.node);
});
}
return "break";
}, i = this, r = 0; r < 10 && "break" !== n(r); r++) ;
this.enterNextLv();
} else this.enterNextLv();
};
e.prototype.enterNextLv = function() {
var t = this;
this.scheduleOnce(function() {
t.model.curLv++;
c2f.storage.setNumber(f.GameConsts.StorageKey.curLv, t.model.curLv);
t.model.getDataByLv(t.model.curLv);
t.startGame();
}, 1);
};
e.prototype.resetGame = function() {
this.view.reward.active = !1;
};
return r([ v ], e);
}(s.UIVControlBase));
o.default = b;
cc._RF.pop();
}, {
"../../../../Script/game/GameConsts": void 0,
"../../../../Script/game/UIHelper": void 0,
"../../../../Script/game/UIParam": void 0,
"../../../../entrance/script/EntranceView": void 0,
"../BlockItem/BlockItem": "BlockItem",
"../StartItem/StartItem": "StartItem",
"./../../../../c2f-framework/define/C2FEnum": void 0,
"./../../../../c2f-framework/gui/layer/UIVControlBase": void 0
} ],
MainPackView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "534fbQjOJ9G35+vDGUWAeIc", "MainPackView");
var n;
Object.defineProperty(o, "__esModule", {
value: !0
});
o.MainPackView = o.MainPackUI = void 0;
var i, r = t("../../Script/game/GameConsts"), a = t("../../c2f-framework/define/C2FUIDef");
(function(t) {
t[t.Start = 3e3] = "Start";
t[t.DesStarMain = 3001] = "DesStarMain";
t[t.Physics2048Main = 3002] = "Physics2048Main";
t[t.MapCreateMain = 3003] = "MapCreateMain";
t[t.BasketBallMain = 3004] = "BasketBallMain";
t[t.YngyMain = 3005] = "YngyMain";
})(i = o.MainPackUI || (o.MainPackUI = {}));
o.MainPackView = ((n = {})[i.DesStarMain] = {
layer: a.LayerType.UI,
prefab: "prefab/desStar/F_DesStarMain",
bundle: r.GameConsts.Bundle.mainPack
}, n[i.Physics2048Main] = {
layer: a.LayerType.UI,
prefab: "prefab/physics2048/F_Physics2048Main",
bundle: r.GameConsts.Bundle.mainPack
}, n[i.MapCreateMain] = {
layer: a.LayerType.UI,
prefab: "prefab/mapCreate/F_MapCreateMain",
bundle: r.GameConsts.Bundle.mainPack
}, n[i.BasketBallMain] = {
layer: a.LayerType.UI,
prefab: "prefab/basketBall/F_BasketBallMain",
bundle: r.GameConsts.Bundle.mainPack
}, n[i.YngyMain] = {
layer: a.LayerType.UI,
prefab: "prefab/F_YngyMain",
bundle: r.GameConsts.Bundle.mainPack
}, n);
cc._RF.pop();
}, {
"../../Script/game/GameConsts": void 0,
"../../c2f-framework/define/C2FUIDef": void 0
} ],
MapCreatItemModel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c41caUNWIRNZI2IPaLf+gxm", "MapCreatItemModel");
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
var a = t("./../../../../c2f-framework/gui/layer/UIModelBase"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "P_MapCreatItem";
return e;
}
e.prototype.initData = function(t) {
this.data = t;
};
return r([ s ], e);
}(a.UIModelBase));
o.default = l;
cc._RF.pop();
}, {
"./../../../../c2f-framework/gui/layer/UIModelBase": void 0
} ],
MapCreatItemView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "42d81UGTc5Ga5e3h8mjG1e4", "MapCreatItemView");
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
var a = t("./../../../../c2f-framework/gui/layer/UIPanelBase"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "P_MapCreatItem";
e.iconSprite = void 0;
e.btnButton = void 0;
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
this.btn = this.get("_btn_");
this.btnButton = this.btn.getComponent(cc.Button);
};
e.prototype.addEvent = function() {
this.btnButton.node.on("click", this.onbtnButtonClick, this);
};
e.prototype.removeEvent = function() {
this.btnButton.node.off("click", this.onbtnButtonClick, this);
};
e.prototype.onbtnButtonClick = function(t) {
this.emit("click", t);
};
return r([ s ], e);
}(a.UIPanelBase));
o.default = l;
cc._RF.pop();
}, {
"./../../../../c2f-framework/gui/layer/UIPanelBase": void 0
} ],
MapCreatItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4fa5fomuLlC07MiBMz3or01", "MapCreatItem");
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
var s = t("./../../../../c2f-framework/gui/layer/UIPControlBase"), l = t("./../../../../c2f-framework/define/C2FEnum"), p = cc._decorator, u = p.ccclass, f = (p.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "P_MapCreatItem";
e.model = void 0;
e.view = void 0;
return e;
}
e.prototype.onEnable = function() {
t.prototype.onEnable && t.prototype.onEnable.call(this);
this.on(l.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
};
e.prototype.onDisable = function() {
t.prototype.onDisable && t.prototype.onDisable.call(this);
this.off(l.C2FEnum.UIEvent.ButtonClick);
};
e.prototype.onLoad = function() {
this.node.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
};
e.prototype.onButtonClick = function(t, e) {
return a(this, void 0, void 0, function() {
return c(this, function() {
switch (e.name) {
case this.view.btnButton.name:
this.CC_onClickbtn();
}
return [ 2 ];
});
});
};
e.prototype.CC_onClickbtn = function() {
this.model.data && this.model.data.cbFun && this.model.data.cbFun(this.model.data);
};
e.prototype.setInit = function(t) {
this.model.initData(t);
this.initView(t);
};
e.prototype.initView = function(t) {
if (t.typ >= 0) {
this.node.active = !0;
c2f.utils.view.changeSpriteFrame(this.view.iconSprite, t.url);
} else this.node.active = !1;
};
e.prototype.onMouseMove = function() {
szg.player.public.isMouseDown && this.CC_onClickbtn();
};
return r([ u ], e);
}(s.UIPControlBase));
o.default = f;
cc._RF.pop();
}, {
"./../../../../c2f-framework/define/C2FEnum": void 0,
"./../../../../c2f-framework/gui/layer/UIPControlBase": void 0
} ],
MapCreateMainModel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "152feLlpYNMjYbk4GBa5MlY", "MapCreateMainModel");
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
var a = t("../../../../Script/game/UIParam"), c = t("./../../../../c2f-framework/gui/layer/UIModelBase"), s = cc._decorator, l = s.ccclass, p = (s.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "F_MapCreateMain";
return e;
}
e.prototype.initStarDataArr = function(t) {
for (var e = [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ], o = 0; o < 10; o++) for (var n = 0; n < 10; n++) e[o][n] = t;
return e;
};
e.prototype.initData = function() {
var t = this.getCurIndex();
this.starDataArr = this.initStarDataArr(t);
};
e.prototype.getCurIndex = function() {
var t = 0;
if (this.curSelect) {
var e = this.curSelect.split("toggle");
t = parseInt(e[1]);
}
return t;
};
e.prototype.getStarPosition = function(t, e) {
var o = (e + .5) * a.UIPa.DesStarGameArgs.width, n = (t + .5) * a.UIPa.DesStarGameArgs.heigh;
return new cc.Vec3(o, n);
};
return r([ l ], e);
}(c.UIModelBase));
o.default = p;
cc._RF.pop();
}, {
"../../../../Script/game/UIParam": void 0,
"./../../../../c2f-framework/gui/layer/UIModelBase": void 0
} ],
MapCreateMainView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7ee09hM0dBL4KrBTPhL9ynN", "MapCreateMainView");
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
var a = t("./../../../../c2f-framework/gui/layer/UIViewBase"), c = t("./../../../../c2f-framework/component/common/TabPage"), s = cc._decorator, l = s.ccclass, p = (s.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "F_MapCreateMain";
e.btnSaveSprite = void 0;
e.btnSaveButton = void 0;
e.btnNewSprite = void 0;
e.btnNewButton = void 0;
e.tabGroupLayout = void 0;
e.tabGroupTabPage = void 0;
e.tabGroupToggleContainer = void 0;
e.editBoxEditBox = void 0;
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
this.content = this.get("_content_");
this.btnSave = this.get("_btnSave_");
this.btnSaveSprite = this.btnSave.getComponent(cc.Sprite);
this.btnSaveButton = this.btnSave.getComponent(cc.Button);
this.btnNew = this.get("_btnNew_");
this.btnNewSprite = this.btnNew.getComponent(cc.Sprite);
this.btnNewButton = this.btnNew.getComponent(cc.Button);
this.tabGroup = this.get("_tabGroup_");
this.tabGroupLayout = this.tabGroup.getComponent(cc.Layout);
this.tabGroupTabPage = this.tabGroup.getComponent(c.default);
this.tabGroupToggleContainer = this.tabGroup.getComponent(cc.ToggleContainer);
this.editBox = this.get("_editBox_");
this.editBoxEditBox = this.editBox.getComponent(cc.EditBox);
};
e.prototype.addEvent = function() {
this.btnSaveButton.node.on("click", this.onbtnSaveButtonClick, this);
this.btnNewButton.node.on("click", this.onbtnNewButtonClick, this);
this.editBoxEditBox.node.on("editing-did-began", this.oneditBoxEditBoxEditingBegan, this);
this.editBoxEditBox.node.on("editing-did-ended", this.oneditBoxEditBoxEditingEnded, this);
this.editBoxEditBox.node.on("editing-return", this.oneditBoxEditBoxEditingReturn, this);
this.editBoxEditBox.node.on("text-changed", this.oneditBoxEditBoxTextChanged, this);
};
e.prototype.removeEvent = function() {
this.btnSaveButton.node.off("click", this.onbtnSaveButtonClick, this);
this.btnNewButton.node.off("click", this.onbtnNewButtonClick, this);
this.editBoxEditBox.node.off("editing-did-began", this.oneditBoxEditBoxEditingBegan, this);
this.editBoxEditBox.node.off("editing-did-ended", this.oneditBoxEditBoxEditingEnded, this);
this.editBoxEditBox.node.off("editing-return", this.oneditBoxEditBoxEditingReturn, this);
this.editBoxEditBox.node.off("text-changed", this.oneditBoxEditBoxTextChanged, this);
};
e.prototype.onbtnSaveButtonClick = function(t) {
this.emit("click", t);
};
e.prototype.onbtnNewButtonClick = function(t) {
this.emit("click", t);
};
e.prototype.oneditBoxEditBoxEditingBegan = function(t) {
this.emit("editing-did-began", t);
};
e.prototype.oneditBoxEditBoxEditingEnded = function(t) {
this.emit("editing-did-ended", t);
};
e.prototype.oneditBoxEditBoxEditingReturn = function(t) {
this.emit("editing-return", t);
};
e.prototype.oneditBoxEditBoxTextChanged = function(t) {
this.emit("text-changed", t);
};
return r([ l ], e);
}(a.UIViewBase));
o.default = p;
cc._RF.pop();
}, {
"./../../../../c2f-framework/component/common/TabPage": void 0,
"./../../../../c2f-framework/gui/layer/UIViewBase": void 0
} ],
MapCreateMain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "281d6Rbe5NMIY1hV835K1zw", "MapCreateMain");
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
var s = t("./../../../../c2f-framework/gui/layer/UIVControlBase"), l = t("./../../../../c2f-framework/define/C2FEnum"), p = t("../MapCreatItem/MapCreatItem"), u = t("../../../../Script/game/GameConsts"), f = t("../../../../Script/game/UIParam"), h = cc._decorator, d = h.ccclass, y = (h.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "F_MapCreateMain";
e.model = void 0;
e.view = void 0;
return e;
}
e.prototype.onLoad = function() {
this.view.tabGroupTabPage.quickSetTabHnadler(this, "CC_onTabPageClick");
this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
this.node.on(cc.Node.EventType.MOUSE_UP, this.onMouseUp, this);
};
e.prototype.onViewOpen = function() {
this.getCurData();
this.loadTabItemFirst(this.startGame.bind(this));
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
return a(this, void 0, void 0, function() {
return c(this, function() {
switch (e.name) {
case this.view.btnSaveButton.name:
this.CC_onClickbtnSave();
break;

case this.view.btnNewButton.name:
this.CC_onClickbtnNew();
}
return [ 2 ];
});
});
};
e.prototype.CC_onClickbtnSave = function() {
var t = this.getStarAllData(this.model.curLv);
this.downloadTxtFile(t, "guanQiaTest.txt");
};
e.prototype.downloadTxtFile = function(t, e) {
var o = new Blob([ t ], {
type: "text/plain;charset=utf-8"
}), n = document.createElement("a");
n.href = URL.createObjectURL(o);
n.download = e;
n.style.display = "none";
document.body.appendChild(n);
n.click();
document.body.removeChild(n);
URL.revokeObjectURL(n.href);
};
e.prototype.getStarAllData = function(t) {
var e = "", o = this.model.starDataArr;
e += "[" + t + "]: [\n";
for (var n = 0; n < 10; n++) {
e += "[";
for (var i = 0; i < 10; i++) e += o[n][i] + ",";
e += n < 9 ? "],\n" : "]\n";
}
return e + "],\n";
};
e.prototype.CC_onClickbtnNew = function() {
this.getCurData();
this.startGame();
};
e.prototype.CC_onTabPageClick = function(t) {
this.model.curSelect != t && (this.model.curSelect = t);
};
e.prototype.getCurData = function() {
this.model.curLv = this.getCurLv();
this.model.initData();
};
e.prototype.getCurLv = function() {
var t = 0;
this.view.editBoxEditBox.string && "" != this.view.editBoxEditBox.string && (t = parseInt(this.view.editBoxEditBox.string));
return t;
};
e.prototype.loadTabItemFirst = function(t) {
return a(this, void 0, void 0, function() {
var e = this;
return c(this, function(o) {
switch (o.label) {
case 0:
return [ 4, c2f.res.loadOne(u.GameConsts.CmmPrefab.mapCreatItem, cc.Prefab).then(function(o) {
e.model.blockItem = o;
t && t();
}) ];

case 1:
o.sent();
return [ 2 ];
}
});
});
};
e.prototype.startGame = function() {
this.model.starItemMap || this.initItemArr();
for (var t = 0; t < 10; t++) for (var e = 0; e < 10; e++) {
var o = this.model.getStarPosition(t, e), n = this.model.starItemMap.get(t).get(e), i = n.node;
i.name = "block" + e + "_" + t;
i.setPosition(o);
var r = this.model.starDataArr[t][e], a = f.UIPa.StarItemData[r], c = 0, s = "";
if (a) {
c = a.score;
s = a.url;
}
var l = {
typ: r,
score: c,
url: s,
column: e,
row: t,
cbFun: this.clickItemCb.bind(this)
};
n.setInit(l);
}
};
e.prototype.initItemArr = function() {
this.model.starItemMap = new Map();
for (var t = 0; t < 10; t++) {
for (var e = new Map(), o = 0; o < 10; o++) {
var n = c2f.utils.view.instantiateMVCPrefab(this.model.blockItem, this.view.content);
this.view.content.addChild(n);
var i = n.getComponent(p.default);
e.set(o, i);
}
this.model.starItemMap.set(t, e);
}
};
e.prototype.clickItemCb = function(t) {
var e = this.model.starItemMap.get(t.row).get(t.column), o = 0, n = "", i = this.model.getCurIndex(), r = f.UIPa.StarItemData[i];
if (r) {
o = r.score;
n = r.url;
}
t.typ = i;
t.score = o;
t.url = n;
e.setInit(t);
this.model.starDataArr[t.row][t.column] = i;
};
e.prototype.onMouseDown = function() {
szg.player.public.isMouseDown = !0;
};
e.prototype.onMouseUp = function() {
szg.player.public.isMouseDown = !1;
};
return r([ d ], e);
}(s.UIVControlBase));
o.default = y;
cc._RF.pop();
}, {
"../../../../Script/game/GameConsts": void 0,
"../../../../Script/game/UIParam": void 0,
"../MapCreatItem/MapCreatItem": "MapCreatItem",
"./../../../../c2f-framework/define/C2FEnum": void 0,
"./../../../../c2f-framework/gui/layer/UIVControlBase": void 0
} ],
Physics2048ItemModel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6925fXEsdFJnp7LgcjaMtqJ", "Physics2048ItemModel");
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
var a = t("./../../../../c2f-framework/gui/layer/UIModelBase"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "P_Physics2048Item";
return e;
}
e.prototype.initData = function(t, e) {
this.data = t;
this.cbFun = e;
};
return r([ s ], e);
}(a.UIModelBase));
o.default = l;
cc._RF.pop();
}, {
"./../../../../c2f-framework/gui/layer/UIModelBase": void 0
} ],
Physics2048ItemView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "75d60cbuohLT4Q6yxHzi68I", "Physics2048ItemView");
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
var a = t("./../../../../c2f-framework/gui/layer/UIPanelBase"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "P_Physics2048Item";
e.weiBaSprite = void 0;
e.weiBaAnimation = void 0;
e.iconSprite = void 0;
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
this.weiBa = this.get("_weiBa_");
this.weiBaSprite = this.weiBa.getComponent(cc.Sprite);
this.weiBaAnimation = this.weiBa.getComponent(cc.Animation);
this.icon = this.get("_icon_");
this.iconSprite = this.icon.getComponent(cc.Sprite);
};
e.prototype.addEvent = function() {};
e.prototype.removeEvent = function() {};
return r([ s ], e);
}(a.UIPanelBase));
o.default = l;
cc._RF.pop();
}, {
"./../../../../c2f-framework/gui/layer/UIPanelBase": void 0
} ],
Physics2048Item: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "31131NooF1DFIGoGZzC0hjT", "Physics2048Item");
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
var a = t("./../../../../c2f-framework/gui/layer/UIPControlBase"), c = t("../../../../Script/game/UIParam"), s = t("../../../../Script/game/UIHelper"), l = cc._decorator, p = l.ccclass, u = (l.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "P_Physics2048Item";
e.model = void 0;
e.view = void 0;
e.isInit = !1;
return e;
}
o = e;
e.prototype.init = function() {
if (!this.isInit) {
this.rigidBody = this.node.getComponent(cc.RigidBody);
this.collider = this.node.getComponent(cc.PhysicsCircleCollider);
this.isInit = !0;
}
};
e.prototype.setInit = function(t, e) {
this.init();
this.model.initData(t, e);
this.initView(t);
};
e.prototype.initView = function(t) {
var e = this;
c2f.utils.view.changeSpriteFrame(this.view.iconSprite, t.url);
var o = t.radius;
this.collider.radius = o;
this.collider.tag = t.tag;
this.setRigidBodyEnabledContactListener(!0);
this.node.active = !1;
this.scheduleOnce(function() {
e.node.setContentSize(1.8 * o, 1.8 * o);
e.node.active = !0;
});
};
e.prototype.setRigidBodyEnabledContactListener = function(t) {
this.rigidBody && (this.rigidBody.enabledContactListener = t);
};
e.prototype.setRigidBodyType = function(t) {
this.rigidBody && (this.rigidBody.type = t);
};
e.prototype.onBeginContact = function(t, e, n) {
if (n.tag == e.tag && n.tag >= c.UIPa.PhysicsTag.block_2 && n.node) {
var i = n.node.getComponent(o);
if (i && i.model.data && i.model.data.tag < c.UIPa.PhysicsTag.block_2048) {
var r = e.node.getComponent(o);
if (r) {
t.disabled = !0;
r.rigidBody.linearVelocity.mag() > i.rigidBody.linearVelocity.mag() ? this.hitFun(i, r, t) : this.hitFun(r, i, t);
}
}
}
};
e.prototype.hitFun = function(t, e, o) {
var n = this;
t.setRigidBodyEnabledContactListener(!1);
t.collider.enabled = !1;
t.node.group = "ui";
if (t.rigidBody) {
t.rigidBody.linearVelocity = cc.Vec2.ZERO;
t.rigidBody.angularVelocity = 0;
t.rigidBody.gravityScale = 0;
t.rigidBody.angularVelocity = 0;
t.rigidBody.fixedRotation = !0;
}
var i = c.UIPa.Physics2048ItemData[e.model.data.tag];
cc.tween(t.node).to(.2, {
scale: .1
}).call(function() {
t.node.active = !1;
t.node.destroy();
o.disabled = !1;
if (e.rigidBody.linearVelocity.y <= 0) {
var r = new cc.Vec2(0, -.2);
e.rigidBody.applyForceToCenter(r, !0);
}
n.playWinSound(i.tag);
}).start();
e.setInit(i, this.model.cbFun);
this.model.cbFun && this.model.cbFun(i, e.node, function() {
if (e.model.data.tag == c.UIPa.PhysicsTag.block_2048) {
e.node.active = !1;
e.node.destroy();
}
});
};
e.prototype.playWinSound = function(t) {
t == c.UIPa.PhysicsTag.block_1024 ? s.UIHelper.playEffect("physics2048binggeSuper") : t == c.UIPa.PhysicsTag.block_512 ? s.UIHelper.playEffect("physics2048binggeBan") : t == c.UIPa.PhysicsTag.block_256 ? s.UIHelper.playEffect("physics2048binggeCool") : t == c.UIPa.PhysicsTag.block_128 && s.UIHelper.playEffect("physics2048binggeNice");
};
var o;
return o = r([ p ], e);
}(a.UIPControlBase));
o.default = u;
cc._RF.pop();
}, {
"../../../../Script/game/UIHelper": void 0,
"../../../../Script/game/UIParam": void 0,
"./../../../../c2f-framework/gui/layer/UIPControlBase": void 0
} ],
Physics2048MainModel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9b27b4B2vNGP6gq+OalkhJu", "Physics2048MainModel");
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
var a = t("../../../../Script/game/GameConsts"), c = t("./../../../../c2f-framework/gui/layer/UIModelBase"), s = cc._decorator, l = s.ccclass, p = (s.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "F_Physics2048Main";
e.curHistoryMaxLv = 0;
e.curMaxCount = 0;
return e;
}
e.prototype.initData = function() {
this.totalScore = 0;
this.curHistoryMaxLv = c2f.storage.getNumber(a.GameConsts.StorageKey.curHistory2048MaxLv);
this.visibleSize = cc.view.getVisibleSize();
};
e.prototype.rodomOneIndex = function() {
var t = c2f.random.getRandomInt(0, 11);
return t < 3 ? 0 : t < 5 ? 1 : t < 10 ? 2 : 3;
};
return r([ l ], e);
}(c.UIModelBase));
o.default = p;
cc._RF.pop();
}, {
"../../../../Script/game/GameConsts": void 0,
"./../../../../c2f-framework/gui/layer/UIModelBase": void 0
} ],
Physics2048MainView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5e688JJ0I1PwInnEeQEMhKT", "Physics2048MainView");
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
var a = t("./../../../../c2f-framework/gui/layer/UIViewBase"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "F_Physics2048Main";
e.btnMenuSprite = void 0;
e.btnMenuButton = void 0;
e.iconMaxSprite = void 0;
e.txtCurScoreLabel = void 0;
e.contentWidget = void 0;
e.effectWidget = void 0;
e.txtTotalScoreLabel = void 0;
e.iconSprite = void 0;
e.iconRigidBody = void 0;
e.iconPhysicsCircleCollider = void 0;
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
this.iconMax = this.get("_iconMax_");
this.iconMaxSprite = this.iconMax.getComponent(cc.Sprite);
this.txtCurScore = this.get("_txtCurScore_");
this.txtCurScoreLabel = this.txtCurScore.getComponent(cc.Label);
this.initPos = this.get("_initPos_");
this.content = this.get("_content_");
this.contentWidget = this.content.getComponent(cc.Widget);
this.effect = this.get("_effect_");
this.effectWidget = this.effect.getComponent(cc.Widget);
this.txtTotalScore = this.get("_txtTotalScore_");
this.txtTotalScoreLabel = this.txtTotalScore.getComponent(cc.Label);
this.icon = this.get("_icon_");
this.iconSprite = this.icon.getComponent(cc.Sprite);
this.iconRigidBody = this.icon.getComponent(cc.RigidBody);
this.iconPhysicsCircleCollider = this.icon.getComponent(cc.PhysicsCircleCollider);
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
return r([ s ], e);
}(a.UIViewBase));
o.default = l;
cc._RF.pop();
}, {
"./../../../../c2f-framework/gui/layer/UIViewBase": void 0
} ],
Physics2048Main: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "77b73KegwhCQYrb05p+adFh", "Physics2048Main");
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
var s = t("./../../../../c2f-framework/gui/layer/UIVControlBase"), l = t("./../../../../c2f-framework/define/C2FEnum"), p = t("../../../../Script/game/UIHelper"), u = t("../../../../entrance/script/EntranceView"), f = t("../../../../Script/game/GameConsts"), h = t("../Physics2048Item/Physics2048Item"), d = t("../../../../Script/game/UIParam"), y = t("../../../../Script/game/GameHelper"), m = t("../BoomItem/BoomItem"), v = cc._decorator, b = v.ccclass, _ = (v.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "F_Physics2048Main";
e.model = void 0;
e.view = void 0;
return e;
}
e.prototype.onLoad = function() {
this.initAudioState();
p.UIHelper.playMusic("physics2048BackMusic");
y.GameHelper.setPhysics(!0);
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node._touchListener.swallowTouches = !1;
};
e.prototype.initAudioState = function() {
var t = c2f.storage.getBoolean(f.GameConsts.StorageKey.soundBg);
c2f.audio.bgmOff = t;
var e = c2f.storage.getBoolean(f.GameConsts.StorageKey.soundEff);
c2f.audio.sfxOff = e;
};
e.prototype.onTouchStart = function(t) {
this.model.isCanCreateNew || this.setBlockItemPos(t);
};
e.prototype.onTouchMove = function(t) {
this.model.isCanCreateNew || this.setBlockItemPos(t);
};
e.prototype.onTouchEnd = function(t) {
if (!this.model.isCanCreateNew) {
this.setBlockItemPos(t);
this.playFallingAni();
}
};
e.prototype.setBlockItemPos = function(t) {
if (this.model.physics2048Item) {
var e = t.getLocation(), o = this.view.content.convertToNodeSpaceAR(e);
this.model.physics2048Item.node.x = o.x;
}
};
e.prototype.playFallingAni = function() {
var t = this;
p.UIHelper.playEffect("physics2048click");
if (this.model.physics2048Item) {
this.model.totalScore += this.model.physics2048Item.model.data.score;
this.model.physics2048Item.setRigidBodyType(cc.RigidBodyType.Dynamic);
this.model.physics2048Item = null;
this.reflashScore();
this.scheduleOnce(function() {
t.model.isCanCreateNew = !0;
t.foreceCreateNewItem();
}, 2);
}
};
e.prototype.reflashScore = function() {
this.view.txtTotalScoreLabel.string = "Score:{0}".format(this.model.totalScore);
};
e.prototype.onViewOpen = function() {
var t = this;
this.model.initData();
this.reflashScore();
this.loadTabItemFirst(this.startView.bind(this));
c2f.res.loadOne(f.GameConsts.CmmPrefab.boomItem, cc.Prefab).then(function(e) {
t.model.boomItem = e;
});
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
return a(this, void 0, void 0, function() {
return c(this, function() {
switch (e.name) {
case this.view.btnMenuButton.name:
this.CC_onClickbtnMenu();
}
return [ 2 ];
});
});
};
e.prototype.CC_onClickbtnMenu = function() {
p.UIHelper.playEffect("betClick");
c2f.gui.open(u.EntranceUI.GameLogin);
this.closeView();
};
e.prototype.loadTabItemFirst = function(t) {
return a(this, void 0, void 0, function() {
var e = this;
return c(this, function(o) {
switch (o.label) {
case 0:
return [ 4, c2f.res.loadOne(f.GameConsts.CmmPrefab.physics2048Item, cc.Prefab).then(function(o) {
e.model.blockItem = o;
t && t();
}) ];

case 1:
o.sent();
return [ 2 ];
}
});
});
};
e.prototype.startView = function() {
this.foreceCreateNewItem();
};
e.prototype.foreceCreateNewItem = function() {
this.model.isCanCreateNew = !0;
this.createNewItem();
};
e.prototype.createNewItem = function() {
if (this.model.isCanCreateNew) {
this.model.isCanCreateNew = !1;
this.randomNewItem();
}
};
e.prototype.randomNewItem = function() {
var t = this.model.rodomOneIndex(), e = c2f.utils.view.instantiateMVCPrefab(this.model.blockItem, this.view.content);
this.view.content.addChild(e);
var o = e.getComponent(h.default);
this.model.physics2048Item = o;
var n = this.view.initPos, i = n.parent.convertToWorldSpaceAR(n.getPosition()), r = e.parent.convertToNodeSpaceAR(i);
e.setPosition(r);
var a = d.UIPa.Physics2048ItemData[t];
o.setInit(a, this.callBack.bind(this));
o.setRigidBodyType(cc.RigidBodyType.Static);
c2f.utils.view.changeSpriteFrame(this.view.iconMaxSprite, a.url);
this.view.txtCurScoreLabel.string = "X{0}".format(a.score);
};
e.prototype.callBack = function(t, e, o) {
var n = c2f.utils.view.instantiateMVCPrefab(this.model.boomItem, this.view.effect);
this.view.effect.addChild(n);
var i = n.getComponent(m.default), r = e.parent.convertToWorldSpaceAR(e.getPosition()), a = n.parent.convertToNodeSpaceAR(r);
n.setPosition(a);
i.playBoom(t, function() {
o();
});
};
return r([ b ], e);
}(s.UIVControlBase));
o.default = _;
cc._RF.pop();
}, {
"../../../../Script/game/GameConsts": void 0,
"../../../../Script/game/GameHelper": void 0,
"../../../../Script/game/UIHelper": void 0,
"../../../../Script/game/UIParam": void 0,
"../../../../entrance/script/EntranceView": void 0,
"../BoomItem/BoomItem": "BoomItem",
"../Physics2048Item/Physics2048Item": "Physics2048Item",
"./../../../../c2f-framework/define/C2FEnum": void 0,
"./../../../../c2f-framework/gui/layer/UIVControlBase": void 0
} ],
StarCfg: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4cfa6T4OnVFnbjPZYKOfAe4", "StarCfg");
var n;
Object.defineProperty(o, "__esModule", {
value: !0
});
o.StarCfg = void 0;
o.StarCfg = ((n = {})[0] = [ [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ], 
n[1] = [ [ 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ] ], 
n[2] = [ [ 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1 ] ], 
n[3] = [ [ 1, 1, 1, 0, 0, 0, 0, 1, 1, 1 ], [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ], [ 1, 1, 1, 0, 0, 1, 1, 1, 1, 1 ] ], 
n[4] = [ [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 1, 1, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 1, 1, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 1, 1, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 1, 1, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 1, 1, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 1, 1, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] ], 
n[5] = [ [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 0, 0, 0, 0, 0, 0, 1, 1 ], [ 1, 1, 0, 0, 0, 0, 0, 0, 1, 1 ], [ 1, 1, 1, 0, 0, 0, 0, 0, 1, 1 ], [ 1, 1, 0, 0, 0, 0, 0, 0, 1, 1 ], [ 1, 1, 0, 0, 0, 1, 0, 0, 1, 1 ], [ 1, 1, 0, 0, 0, 0, 0, 0, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] ], 
n[6] = [ [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 0, 0, 1, 1, 0, 0, 1, 1 ], [ 1, 1, 0, 0, 1, 1, 0, 0, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 0, 0, 1, 1, 0, 0, 1, 1 ], [ 1, 1, 0, 0, 1, 1, 0, 0, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] ], 
n[7] = [ [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 0, 0, 0, 0, 0, 0, 1, 1 ], [ 1, 1, 0, 0, 0, 0, 0, 0, 1, 1 ], [ 1, 1, 1, 0, 0, 0, 0, 0, 1, 1 ], [ 1, 1, 0, 0, 0, 0, 0, 0, 1, 1 ], [ 1, 1, 0, 0, 0, 1, 0, 0, 1, 1 ], [ 1, 1, 0, 0, 0, 0, 0, 0, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] ], 
n[8] = [ [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 0 ], [ 1, 0, 1, 1, 1, 1, 1, 1, 0, 1 ], [ 1, 1, 0, 1, 1, 1, 1, 0, 1, 1 ], [ 1, 1, 1, 0, 1, 1, 0, 1, 1, 1 ], [ 1, 1, 1, 1, 0, 0, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 0, 0, 1, 1, 1, 1 ], [ 1, 1, 1, 0, 1, 1, 0, 1, 1, 1 ], [ 1, 1, 0, 1, 1, 1, 1, 0, 1, 1 ], [ 1, 0, 1, 1, 1, 1, 1, 1, 0, 1 ], [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 0 ] ], 
n[9] = [ [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 0, 0, 0, 0, 0, 0, 1, 1 ], [ 1, 0, 1, 0, 0, 0, 0, 1, 0, 1 ], [ 1, 0, 0, 1, 0, 0, 1, 0, 0, 1 ], [ 1, 0, 0, 0, 1, 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1, 1, 0, 0, 0, 1 ], [ 1, 0, 0, 1, 0, 0, 1, 0, 0, 1 ], [ 1, 0, 1, 0, 0, 0, 0, 1, 0, 1 ], [ 1, 1, 0, 0, 0, 0, 0, 0, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] ], 
n[10] = [ [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] ], 
n[11] = [ [ 1, 1, 2, 2, 1, 1, 2, 2, 1, 1 ], [ 1, 1, 2, 2, 1, 1, 2, 2, 1, 1 ], [ 1, 1, 2, 2, 1, 1, 2, 2, 1, 1 ], [ 1, 1, 2, 2, 1, 1, 2, 2, 1, 1 ], [ 1, 1, 2, 2, 1, 1, 2, 2, 1, 1 ], [ 1, 1, 2, 2, 1, 1, 2, 2, 1, 1 ], [ 1, 1, 2, 2, 1, 1, 2, 2, 1, 1 ], [ 1, 1, 2, 2, 1, 1, 2, 2, 1, 1 ], [ 1, 1, 2, 2, 1, 1, 2, 2, 1, 1 ], [ 1, 1, 2, 2, 1, 1, 2, 2, 1, 1 ] ], 
n[12] = [ [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 1 ], [ 1, 1, 1, 1, 2, 2, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 2, 2, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 2, 2, 1, 1, 1, 1 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 1 ], [ 1, 1, 1, 1, 2, 2, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 2, 2, 1, 1, 1, 1 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] ], 
n[13] = [ [ 1, 1, 2, 1, 1, 1, 1, 2, 1, 1 ], [ 1, 1, 2, 1, 1, 1, 1, 2, 1, 1 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 1, 1, 1, 1, 1, 1, 1, 1, 2 ], [ 1, 2, 1, 1, 1, 1, 1, 1, 2, 1 ], [ 1, 1, 2, 1, 1, 1, 1, 2, 1, 1 ], [ 1, 1, 1, 2, 1, 1, 2, 1, 1, 1 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ] ], 
n[14] = [ [ 1, 1, 1, 1, 1, 1, 1, 2, 2, 2 ], [ 1, 1, 1, 1, 1, 1, 1, 2, 2, 2 ], [ 1, 1, 2, 2, 2, 2, 2, 2, 2, 1 ], [ 1, 1, 2, 2, 2, 2, 2, 2, 2, 1 ], [ 1, 1, 2, 2, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 2, 2, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 2, 2, 1, 1, 1, 1, 1, 1 ], [ 2, 2, 2, 2, 1, 1, 1, 1, 1, 1 ], [ 2, 2, 2, 2, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] ], 
n[15] = [ [ 1, 1, 1, 1, 1, 1, 1, 1, 2, 2 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 2, 2 ], [ 1, 1, 1, 1, 1, 2, 2, 2, 2, 2 ], [ 1, 1, 1, 1, 1, 2, 2, 2, 2, 2 ], [ 1, 1, 1, 1, 1, 2, 2, 1, 1, 1 ], [ 1, 1, 2, 2, 2, 2, 2, 1, 1, 1 ], [ 1, 1, 2, 2, 2, 2, 2, 1, 1, 1 ], [ 1, 1, 2, 2, 1, 1, 1, 1, 1, 1 ], [ 2, 2, 2, 2, 1, 1, 1, 1, 1, 1 ], [ 2, 2, 2, 2, 1, 1, 1, 1, 1, 1 ] ], 
n[16] = [ [ 2, 2, 1, 1, 1, 1, 1, 1, 2, 2 ], [ 2, 2, 1, 1, 1, 1, 1, 1, 2, 2 ], [ 2, 2, 1, 1, 1, 1, 1, 1, 2, 2 ], [ 2, 2, 1, 1, 1, 1, 1, 1, 2, 2 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 2, 1, 1, 1, 1, 1, 1, 2, 2 ], [ 2, 2, 1, 1, 1, 1, 1, 1, 2, 2 ], [ 2, 2, 1, 1, 1, 1, 1, 1, 2, 2 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ] ], 
n[17] = [ [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 2, 2, 2, 2, 2, 2, 2, 1 ], [ 1, 1, 2, 2, 2, 2, 2, 2, 2, 1 ], [ 1, 1, 2, 2, 2, 2, 2, 2, 2, 1 ], [ 1, 1, 2, 1, 1, 1, 1, 2, 2, 1 ], [ 1, 1, 2, 1, 1, 1, 1, 2, 2, 1 ], [ 1, 1, 2, 2, 2, 2, 2, 2, 2, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] ], 
n[18] = [ [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 1, 1, 1, 1, 1, 1, 2, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 2, 1, 1 ], [ 2, 1, 1, 2, 1, 1, 1, 2, 1, 1 ], [ 2, 1, 1, 2, 1, 1, 1, 2, 1, 1 ], [ 2, 1, 2, 2, 1, 1, 1, 2, 1, 1 ], [ 2, 2, 1, 2, 1, 1, 1, 2, 1, 1 ], [ 2, 1, 1, 2, 1, 1, 1, 2, 1, 1 ], [ 2, 1, 1, 2, 1, 1, 1, 2, 1, 1 ] ], 
n[19] = [ [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 2, 1, 1, 1, 2, 1, 1, 1, 2, 1 ], [ 2, 1, 1, 1, 2, 1, 1, 1, 2, 1 ], [ 2, 1, 1, 1, 2, 1, 1, 1, 2, 1 ], [ 2, 2, 2, 2, 2, 1, 1, 1, 2, 1 ], [ 2, 1, 1, 1, 2, 1, 1, 1, 2, 1 ], [ 2, 1, 1, 1, 2, 1, 1, 1, 2, 1 ], [ 2, 1, 1, 1, 2, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 2, 1 ] ], 
n[20] = [ [ 1, 1, 1, 1, 2, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 2, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 2, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 2, 1, 1, 1, 1, 1 ], [ 1, 1, 2, 1, 2, 1, 2, 1, 1, 1 ], [ 1, 1, 1, 1, 2, 1, 1, 1, 1, 1 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 1, 1 ], [ 1, 1, 1, 1, 2, 1, 1, 1, 1, 1 ], [ 1, 1, 2, 1, 2, 1, 2, 1, 1, 1 ], [ 1, 1, 1, 1, 2, 1, 1, 1, 1, 1 ] ], 
n[21] = [ [ 2, 2, 2, 2, 3, 3, 3, 3, 3, 3 ], [ 2, 2, 2, 2, 3, 3, 3, 3, 3, 3 ], [ 2, 2, 2, 3, 3, 2, 2, 3, 3, 3 ], [ 2, 2, 3, 3, 2, 2, 2, 2, 3, 3 ], [ 2, 3, 3, 2, 2, 2, 2, 2, 3, 3 ], [ 3, 3, 3, 2, 2, 2, 2, 3, 3, 3 ], [ 3, 3, 3, 2, 2, 2, 3, 3, 2, 2 ], [ 3, 3, 3, 3, 3, 3, 3, 2, 2, 2 ], [ 3, 3, 3, 3, 3, 3, 2, 2, 2, 2 ], [ 2, 3, 3, 3, 3, 2, 2, 2, 2, 2 ] ], 
n[22] = [ [ 3, 3, 2, 2, 2, 2, 3, 3, 3, 3 ], [ 3, 3, 2, 2, 2, 2, 3, 3, 3, 3 ], [ 3, 3, 2, 2, 2, 2, 3, 3, 3, 3 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 3, 3, 2, 2, 2, 2, 3, 3, 3, 3 ], [ 3, 3, 2, 2, 2, 2, 3, 3, 3, 3 ], [ 3, 3, 2, 2, 2, 2, 3, 3, 3, 3 ] ], 
n[23] = [ [ 2, 2, 2, 2, 2, 2, 3, 3, 2, 2 ], [ 3, 3, 3, 3, 2, 2, 3, 3, 3, 2 ], [ 3, 3, 3, 3, 2, 3, 3, 3, 3, 2 ], [ 2, 2, 3, 3, 2, 3, 3, 3, 3, 2 ], [ 2, 2, 3, 3, 2, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 2, 2, 3, 2, 2, 2 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 3, 3, 3, 2, 2, 2, 2, 2, 2 ], [ 2, 3, 3, 3, 2, 2, 3, 2, 2, 2 ], [ 2, 3, 3, 3, 2, 2, 2, 2, 2, 2 ] ], 
n[24] = [ [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 3, 3, 3, 3, 2, 2, 3, 3, 3, 3 ], [ 3, 3, 3, 3, 2, 2, 3, 3, 3, 3 ], [ 3, 3, 3, 3, 2, 2, 3, 3, 3, 3 ], [ 3, 3, 3, 3, 2, 2, 3, 3, 3, 3 ], [ 3, 3, 3, 3, 2, 2, 3, 3, 3, 3 ], [ 3, 3, 3, 3, 2, 2, 3, 3, 3, 3 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ] ], 
n[25] = [ [ 2, 2, 2, 3, 3, 3, 3, 3, 2, 2 ], [ 2, 2, 2, 3, 3, 3, 3, 3, 2, 2 ], [ 2, 2, 2, 3, 3, 3, 3, 3, 2, 2 ], [ 2, 2, 2, 3, 3, 3, 3, 3, 2, 2 ], [ 2, 2, 2, 3, 3, 3, 3, 3, 2, 2 ], [ 2, 2, 2, 3, 3, 3, 3, 3, 2, 2 ], [ 2, 2, 2, 3, 3, 3, 3, 3, 2, 2 ], [ 2, 2, 2, 3, 3, 3, 3, 3, 2, 2 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ] ], 
n[26] = [ [ 2, 2, 2, 2, 3, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 3, 2, 2, 2, 2, 2 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 2, 2, 2, 2, 3, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 3, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 3, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 3, 2, 2, 2, 2, 2 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 2, 2, 2, 2, 3, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 3, 2, 2, 2, 2, 2 ] ], 
n[27] = [ [ 2, 3, 2, 2, 2, 3, 2, 2, 3, 2 ], [ 2, 3, 2, 2, 2, 3, 2, 2, 3, 2 ], [ 2, 3, 2, 2, 2, 3, 2, 2, 2, 2 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 3, 3, 2, 2, 2, 3, 2, 2, 3, 3 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 2, 3, 2, 2, 2, 3, 2, 2, 3, 3 ], [ 2, 3, 2, 2, 2, 3, 2, 2, 2, 3 ], [ 2, 3, 2, 2, 2, 3, 2, 2, 2, 3 ], [ 2, 3, 2, 2, 2, 3, 2, 2, 2, 3 ] ], 
n[28] = [ [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 2 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 2, 2 ], [ 2, 3, 3, 3, 3, 3, 3, 2, 2, 2 ], [ 2, 2, 3, 3, 3, 3, 2, 2, 2, 2 ], [ 2, 2, 2, 3, 3, 2, 2, 2, 2, 2 ] ], 
n[29] = [ [ 2, 2, 2, 2, 2, 2, 3, 3, 3, 3 ], [ 2, 2, 2, 2, 2, 2, 3, 3, 3, 3 ], [ 2, 2, 2, 2, 2, 2, 3, 3, 3, 3 ], [ 2, 2, 2, 2, 3, 3, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 3, 3, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 3, 3, 3, 3, 2, 2 ], [ 2, 2, 2, 2, 3, 3, 3, 3, 2, 2 ], [ 3, 3, 3, 3, 2, 2, 2, 2, 2, 2 ], [ 3, 3, 3, 3, 2, 2, 2, 2, 2, 2 ], [ 3, 3, 3, 3, 2, 2, 2, 2, 2, 2 ] ], 
n[30] = [ [ 2, 2, 2, 2, 2, 3, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 3, 2, 3, 2, 2, 2 ], [ 2, 2, 2, 3, 2, 2, 2, 3, 2, 2 ], [ 2, 2, 3, 2, 2, 2, 2, 2, 3, 2 ], [ 2, 3, 2, 2, 2, 2, 2, 2, 2, 3 ], [ 3, 2, 2, 2, 2, 2, 2, 2, 3, 2 ], [ 2, 3, 2, 2, 2, 2, 2, 3, 2, 2 ], [ 2, 2, 3, 2, 2, 2, 3, 2, 2, 2 ], [ 2, 2, 2, 3, 2, 3, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 3, 2, 2, 2, 2, 2 ] ], 
n[31] = [ [ 3, 3, 3, 3, 3, 2, 2, 2, 3, 3 ], [ 3, 3, 3, 3, 3, 2, 2, 2, 3, 3 ], [ 3, 3, 3, 3, 3, 2, 2, 2, 3, 3 ], [ 2, 2, 2, 2, 2, 2, 2, 3, 3, 3 ], [ 2, 2, 2, 2, 2, 2, 2, 3, 3, 3 ], [ 2, 2, 2, 2, 2, 2, 2, 3, 3, 3 ], [ 3, 3, 2, 2, 2, 3, 3, 2, 2, 2 ], [ 3, 3, 2, 2, 2, 3, 3, 2, 2, 2 ], [ 3, 3, 2, 2, 2, 3, 3, 2, 2, 2 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ] ], 
n[32] = [ [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] ], 
n[33] = [ [ 1, 2, 2, 2, 2, 1, 1, 1, 1, 1 ], [ 1, 2, 2, 2, 2, 1, 1, 1, 1, 1 ], [ 1, 2, 2, 2, 2, 1, 1, 1, 1, 1 ], [ 1, 2, 2, 2, 2, 1, 1, 1, 1, 1 ], [ 1, 2, 2, 2, 2, 1, 1, 1, 1, 1 ], [ 1, 2, 2, 2, 2, 1, 1, 1, 1, 1 ], [ 1, 2, 2, 2, 2, 1, 1, 1, 1, 1 ], [ 1, 2, 2, 2, 2, 1, 1, 1, 1, 1 ], [ 1, 2, 2, 2, 2, 1, 1, 1, 1, 1 ], [ 1, 2, 2, 2, 2, 1, 1, 1, 1, 1 ] ], 
n[34] = [ [ 1, 2, 2, 2, 2, 1, 1, 1, 1, 1 ], [ 1, 2, 2, 2, 2, 1, 1, 1, 1, 1 ], [ 1, 2, 2, 2, 2, 1, 1, 1, 1, 1 ], [ 1, 2, 2, 2, 2, 1, 1, 1, 1, 1 ], [ 1, 2, 2, 2, 2, 1, 1, 1, 1, 1 ], [ 0, 1, 1, 1, 1, 2, 2, 2, 2, 2 ], [ 0, 1, 1, 1, 1, 2, 2, 2, 2, 2 ], [ 0, 1, 1, 1, 1, 2, 2, 2, 2, 2 ], [ 0, 1, 1, 1, 1, 2, 2, 2, 2, 2 ], [ 0, 1, 1, 1, 1, 2, 2, 2, 2, 2 ] ], 
n[35] = [ [ 1, 2, 2, 1, 1, 1, 1, 2, 2, 2 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 2 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 2 ], [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 2 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 2 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 2 ], [ 1, 2, 2, 1, 1, 2, 2, 2, 2, 2 ] ], 
n[36] = [ [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 0, 1, 1, 1, 2, 2, 1, 1, 1, 1 ], [ 0, 1, 1, 1, 2, 2, 1, 1, 1, 1 ], [ 0, 1, 1, 1, 2, 2, 1, 1, 1, 1 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 0, 1, 1, 1, 2, 2, 1, 1, 1, 1 ], [ 0, 1, 1, 1, 2, 2, 1, 1, 1, 1 ], [ 0, 1, 1, 1, 2, 2, 1, 1, 1, 1 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ] ], 
n[37] = [ [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 2, 1, 1, 1, 1, 1, 1, 2, 2 ], [ 1, 2, 1, 1, 1, 1, 1, 1, 2, 2 ], [ 1, 2, 2, 1, 1, 1, 1, 1, 2, 2 ], [ 1, 2, 1, 1, 1, 1, 1, 1, 2, 2 ], [ 1, 2, 1, 1, 1, 2, 1, 1, 2, 2 ], [ 1, 2, 1, 1, 1, 1, 1, 1, 2, 2 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ] ], 
n[38] = [ [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 2, 1, 1, 2, 2, 1, 1, 2, 2 ], [ 1, 2, 1, 1, 2, 2, 1, 1, 2, 2 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 2, 1, 1, 2, 2, 1, 1, 2, 2 ], [ 1, 2, 1, 1, 2, 2, 1, 1, 2, 2 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ] ], 
n[39] = [ [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 2, 1, 1, 1, 1, 1, 1, 2, 2 ], [ 1, 2, 1, 1, 1, 1, 1, 1, 2, 2 ], [ 1, 2, 2, 1, 1, 1, 1, 1, 2, 2 ], [ 1, 2, 1, 1, 1, 1, 1, 1, 2, 2 ], [ 1, 2, 1, 1, 1, 2, 1, 1, 2, 2 ], [ 1, 2, 1, 1, 1, 1, 1, 1, 2, 2 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ] ], 
n[40] = [ [ 0, 2, 2, 2, 2, 2, 2, 2, 2, 1 ], [ 1, 1, 2, 2, 2, 2, 2, 2, 1, 2 ], [ 1, 2, 1, 2, 2, 2, 2, 1, 2, 2 ], [ 1, 2, 2, 1, 2, 2, 1, 2, 2, 2 ], [ 1, 2, 2, 2, 1, 1, 2, 2, 2, 2 ], [ 1, 2, 2, 2, 1, 1, 2, 2, 2, 2 ], [ 1, 2, 2, 1, 2, 2, 1, 2, 2, 2 ], [ 1, 2, 1, 2, 2, 2, 2, 1, 2, 2 ], [ 1, 1, 2, 2, 2, 2, 2, 2, 1, 2 ], [ 0, 2, 2, 2, 2, 2, 2, 2, 2, 1 ] ], 
n[41] = [ [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 2, 1, 1, 1, 1, 1, 1, 2, 2 ], [ 1, 1, 2, 1, 1, 1, 1, 2, 1, 2 ], [ 1, 1, 1, 2, 1, 1, 2, 1, 1, 2 ], [ 1, 1, 1, 1, 2, 2, 1, 1, 1, 2 ], [ 1, 1, 1, 1, 2, 2, 1, 1, 1, 2 ], [ 1, 1, 1, 2, 1, 1, 2, 1, 1, 2 ], [ 1, 1, 2, 1, 1, 1, 1, 2, 1, 2 ], [ 1, 2, 1, 1, 1, 1, 1, 1, 2, 2 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ] ], 
n[42] = [ [ 3, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 2, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 3, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 3, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 3, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 3, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 2, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 3, 2, 2, 2, 2, 2, 2, 2, 2, 2 ] ], 
n[43] = [ [ 2, 2, 3, 3, 2, 2, 3, 3, 2, 2 ], [ 2, 2, 3, 3, 2, 2, 3, 3, 2, 2 ], [ 2, 2, 3, 3, 2, 2, 3, 3, 2, 2 ], [ 2, 2, 3, 3, 2, 2, 3, 3, 2, 2 ], [ 2, 2, 3, 3, 2, 2, 3, 3, 2, 2 ], [ 2, 2, 3, 3, 2, 2, 3, 3, 2, 2 ], [ 2, 2, 3, 3, 2, 2, 3, 3, 2, 2 ], [ 2, 2, 3, 3, 2, 2, 3, 3, 2, 2 ], [ 2, 2, 3, 3, 2, 2, 3, 3, 2, 2 ], [ 2, 2, 3, 3, 2, 2, 3, 3, 2, 2 ] ], 
n[44] = [ [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 3, 3, 3, 3, 3, 3, 3, 3, 2 ], [ 2, 2, 2, 2, 3, 3, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 3, 3, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 3, 3, 2, 2, 2, 2 ], [ 2, 3, 3, 3, 3, 3, 3, 3, 3, 2 ], [ 2, 2, 2, 2, 3, 3, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 3, 3, 2, 2, 2, 2 ], [ 2, 3, 3, 3, 3, 3, 3, 3, 3, 2 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ] ], 
n[45] = [ [ 1, 2, 1, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 2, 1, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 1, 1, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 1, 1, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 1, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 2, 1, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 1, 1, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 1, 1, 1, 1, 2, 2, 2, 2, 2 ] ], 
n[46] = [ [ 1, 2, 2, 2, 2, 2, 2, 1, 1, 1 ], [ 1, 2, 2, 2, 2, 2, 2, 1, 1, 1 ], [ 1, 2, 2, 2, 1, 1, 1, 1, 1, 2 ], [ 1, 2, 2, 2, 1, 1, 3, 3, 1, 2 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ] ], 
n[47] = [ [ 2, 2, 2, 2, 2, 2, 2, 2, 3, 3 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 3, 3 ], [ 2, 2, 2, 2, 2, 3, 3, 3, 3, 3 ], [ 2, 2, 2, 2, 2, 3, 3, 3, 3, 3 ], [ 2, 2, 2, 2, 2, 3, 3, 2, 2, 2 ], [ 2, 2, 3, 3, 3, 3, 3, 2, 2, 2 ], [ 2, 2, 3, 3, 3, 3, 3, 2, 2, 2 ], [ 2, 2, 3, 3, 2, 2, 2, 2, 2, 2 ], [ 2, 3, 3, 3, 2, 2, 2, 2, 2, 2 ], [ 2, 3, 3, 3, 2, 2, 2, 2, 2, 2 ] ], 
n[48] = [ [ 2, 3, 2, 2, 2, 2, 2, 2, 3, 3 ], [ 2, 3, 2, 2, 2, 2, 2, 2, 3, 3 ], [ 2, 3, 2, 2, 2, 2, 2, 2, 3, 3 ], [ 2, 3, 2, 2, 2, 2, 2, 2, 3, 3 ], [ 2, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 2, 3, 2, 2, 2, 2, 2, 2, 3, 3 ], [ 2, 3, 2, 2, 2, 2, 2, 2, 3, 3 ], [ 2, 3, 2, 2, 2, 2, 2, 2, 3, 3 ], [ 2, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 2, 3, 3, 3, 3, 3, 3, 3, 3, 3 ] ], 
n[49] = [ [ 3, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 3, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 3, 2, 3, 3, 3, 3, 3, 3, 3, 2 ], [ 3, 2, 3, 3, 3, 3, 3, 3, 3, 2 ], [ 3, 2, 3, 3, 3, 3, 3, 3, 3, 2 ], [ 3, 2, 3, 2, 2, 2, 2, 3, 3, 2 ], [ 3, 2, 3, 2, 2, 2, 2, 3, 3, 2 ], [ 3, 2, 3, 3, 3, 3, 3, 3, 3, 2 ], [ 3, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 3, 2, 2, 2, 2, 2, 2, 2, 2, 2 ] ], 
n[50] = [ [ 2, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 2, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 2, 2, 2, 2, 2, 2, 2, 3, 2, 2 ], [ 2, 2, 2, 2, 2, 2, 2, 3, 2, 2 ], [ 2, 2, 2, 3, 2, 2, 2, 3, 2, 2 ], [ 2, 2, 2, 3, 2, 2, 2, 3, 2, 2 ], [ 2, 2, 3, 3, 2, 2, 2, 3, 2, 2 ], [ 2, 3, 2, 3, 2, 2, 2, 3, 2, 2 ], [ 2, 2, 2, 3, 2, 2, 2, 3, 2, 2 ], [ 2, 2, 2, 3, 2, 2, 2, 3, 2, 2 ] ], 
n[51] = [ [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 3, 2, 2, 2, 3, 2 ], [ 2, 2, 2, 2, 3, 2, 2, 2, 3, 2 ], [ 2, 2, 2, 2, 3, 2, 2, 2, 3, 2 ], [ 2, 3, 3, 3, 3, 2, 2, 2, 3, 2 ], [ 2, 2, 2, 2, 3, 2, 2, 2, 3, 2 ], [ 2, 2, 2, 2, 3, 2, 2, 2, 3, 2 ], [ 2, 2, 2, 2, 3, 2, 2, 2, 2, 2 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 3, 2 ] ], 
n[52] = [ [ 3, 2, 2, 2, 3, 2, 2, 2, 2, 2 ], [ 3, 2, 2, 2, 3, 2, 2, 2, 2, 2 ], [ 3, 2, 2, 2, 3, 2, 2, 2, 2, 2 ], [ 3, 2, 2, 2, 3, 2, 2, 2, 2, 2 ], [ 3, 2, 3, 2, 3, 2, 3, 2, 2, 2 ], [ 3, 2, 2, 2, 3, 2, 2, 2, 2, 2 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 2, 2 ], [ 3, 2, 2, 2, 3, 2, 2, 2, 2, 2 ], [ 3, 2, 3, 2, 3, 2, 3, 2, 2, 2 ], [ 3, 2, 2, 2, 3, 2, 2, 2, 2, 2 ] ], 
n[53] = [ [ 3, 3, 3, 3, 4, 4, 4, 4, 4, 4 ], [ 3, 3, 3, 3, 4, 4, 4, 4, 4, 4 ], [ 3, 3, 3, 4, 4, 3, 3, 4, 4, 4 ], [ 3, 3, 4, 4, 3, 3, 3, 3, 4, 4 ], [ 3, 4, 4, 3, 3, 3, 3, 3, 4, 4 ], [ 3, 4, 4, 3, 3, 3, 3, 4, 4, 4 ], [ 3, 4, 4, 3, 3, 3, 4, 4, 3, 3 ], [ 3, 4, 4, 4, 4, 4, 4, 3, 3, 3 ], [ 3, 4, 4, 4, 4, 4, 3, 3, 3, 3 ], [ 3, 4, 4, 4, 4, 3, 3, 3, 3, 3 ] ], 
n[54] = [ [ 3, 4, 3, 3, 3, 3, 4, 4, 4, 4 ], [ 3, 4, 3, 3, 3, 3, 4, 4, 4, 4 ], [ 3, 4, 3, 3, 3, 3, 4, 4, 4, 4 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 3, 4, 3, 3, 3, 3, 4, 4, 4, 4 ], [ 3, 4, 3, 3, 3, 3, 4, 4, 4, 4 ], [ 3, 4, 3, 3, 3, 3, 4, 4, 4, 4 ] ], 
n[55] = [ [ 4, 3, 3, 3, 3, 3, 4, 4, 3, 3 ], [ 4, 4, 4, 4, 3, 3, 4, 4, 4, 3 ], [ 4, 4, 4, 4, 3, 4, 4, 4, 4, 3 ], [ 4, 3, 4, 4, 3, 4, 4, 4, 4, 3 ], [ 4, 3, 4, 4, 3, 3, 3, 3, 3, 3 ], [ 4, 3, 3, 3, 3, 3, 4, 3, 3, 3 ], [ 4, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 4, 4, 4, 4, 3, 3, 3, 3, 3, 3 ], [ 4, 4, 4, 4, 3, 3, 4, 3, 3, 3 ], [ 4, 4, 4, 4, 3, 3, 3, 3, 3, 3 ] ], 
n[56] = [ [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 3, 4, 4, 4, 3, 3, 4, 4, 4, 4 ], [ 3, 4, 4, 4, 3, 3, 4, 4, 4, 4 ], [ 3, 4, 4, 4, 3, 3, 4, 4, 4, 4 ], [ 3, 4, 4, 4, 3, 3, 4, 4, 4, 4 ], [ 3, 4, 4, 4, 3, 3, 4, 4, 4, 4 ], [ 3, 4, 4, 4, 3, 3, 4, 4, 4, 4 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ] ], 
n[57] = [ [ 3, 3, 3, 4, 4, 4, 4, 4, 3, 3 ], [ 3, 3, 3, 4, 4, 4, 4, 4, 3, 3 ], [ 3, 3, 3, 4, 4, 4, 4, 4, 3, 3 ], [ 3, 3, 3, 4, 4, 4, 4, 4, 3, 3 ], [ 3, 3, 3, 4, 4, 4, 4, 4, 3, 3 ], [ 3, 3, 3, 4, 4, 4, 4, 4, 3, 3 ], [ 3, 3, 3, 4, 4, 4, 4, 4, 3, 3 ], [ 3, 3, 3, 4, 4, 4, 4, 4, 3, 3 ], [ 3, 4, 4, 4, 4, 4, 4, 4, 4, 4 ], [ 3, 4, 4, 4, 4, 4, 4, 4, 4, 4 ] ], 
n[58] = [ [ 4, 3, 3, 3, 4, 3, 3, 3, 3, 3 ], [ 4, 3, 3, 3, 4, 3, 3, 3, 3, 3 ], [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4 ], [ 4, 3, 3, 3, 4, 3, 3, 3, 3, 3 ], [ 4, 3, 3, 3, 4, 3, 3, 3, 3, 3 ], [ 4, 3, 3, 3, 4, 3, 3, 3, 3, 3 ], [ 4, 3, 3, 3, 4, 3, 3, 3, 3, 3 ], [ 3, 4, 4, 4, 4, 4, 4, 4, 4, 4 ], [ 4, 3, 3, 3, 4, 3, 3, 3, 3, 3 ], [ 4, 3, 3, 3, 4, 3, 3, 3, 3, 3 ] ], 
n[59] = [ [ 3, 4, 3, 3, 3, 4, 3, 3, 4, 3 ], [ 3, 4, 3, 3, 3, 4, 3, 3, 4, 3 ], [ 3, 4, 3, 3, 3, 4, 3, 3, 3, 3 ], [ 3, 4, 4, 4, 4, 4, 4, 4, 4, 4 ], [ 3, 4, 3, 3, 3, 4, 3, 3, 4, 4 ], [ 3, 4, 4, 4, 4, 4, 4, 4, 4, 4 ], [ 3, 4, 3, 3, 3, 4, 3, 3, 4, 4 ], [ 3, 4, 3, 3, 3, 4, 3, 3, 3, 4 ], [ 3, 4, 3, 3, 3, 4, 3, 3, 3, 4 ], [ 3, 4, 3, 3, 3, 4, 3, 3, 3, 4 ] ], 
n[60] = [ [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 3, 4, 4, 4, 4, 4, 4, 4, 4, 4 ], [ 3, 4, 4, 4, 4, 4, 4, 4, 4, 3 ], [ 3, 4, 4, 4, 4, 4, 4, 4, 3, 3 ], [ 3, 4, 4, 4, 4, 4, 4, 3, 3, 3 ], [ 3, 3, 4, 4, 4, 4, 3, 3, 3, 3 ], [ 3, 3, 3, 4, 4, 3, 3, 3, 3, 3 ] ], 
n[61] = [ [ 3, 3, 3, 3, 3, 3, 4, 4, 4, 4 ], [ 3, 3, 3, 3, 3, 3, 4, 4, 4, 4 ], [ 3, 3, 3, 3, 3, 3, 4, 4, 4, 4 ], [ 3, 3, 3, 3, 4, 4, 3, 3, 3, 3 ], [ 3, 3, 3, 3, 4, 4, 3, 3, 3, 3 ], [ 3, 3, 3, 3, 4, 4, 4, 4, 3, 3 ], [ 3, 3, 3, 3, 4, 4, 4, 4, 3, 3 ], [ 3, 4, 4, 4, 3, 3, 3, 3, 3, 3 ], [ 3, 4, 4, 4, 3, 3, 3, 3, 3, 3 ], [ 3, 4, 4, 4, 3, 3, 3, 3, 3, 3 ] ], 
n[62] = [ [ 3, 3, 3, 3, 3, 4, 3, 3, 3, 3 ], [ 3, 3, 3, 3, 4, 3, 4, 3, 3, 3 ], [ 3, 3, 3, 4, 3, 3, 3, 4, 3, 3 ], [ 3, 3, 4, 3, 3, 3, 3, 3, 4, 3 ], [ 3, 4, 3, 3, 3, 3, 3, 3, 3, 4 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 4, 3 ], [ 3, 4, 3, 3, 3, 3, 3, 4, 3, 3 ], [ 3, 3, 4, 3, 3, 3, 4, 3, 3, 3 ], [ 3, 3, 3, 4, 3, 4, 3, 3, 3, 3 ], [ 3, 3, 3, 3, 4, 3, 3, 3, 3, 3 ] ], 
n[63] = [ [ 3, 4, 4, 4, 4, 3, 3, 3, 4, 4 ], [ 3, 4, 4, 4, 4, 3, 3, 3, 4, 4 ], [ 3, 4, 4, 4, 4, 3, 3, 3, 4, 4 ], [ 3, 3, 3, 3, 3, 3, 3, 4, 4, 4 ], [ 3, 3, 3, 3, 3, 3, 3, 4, 4, 4 ], [ 3, 3, 3, 3, 3, 3, 3, 4, 4, 4 ], [ 3, 4, 3, 3, 3, 4, 4, 3, 3, 3 ], [ 3, 4, 3, 3, 3, 4, 4, 3, 3, 3 ], [ 3, 4, 3, 3, 3, 4, 4, 3, 3, 3 ], [ 3, 4, 4, 4, 4, 4, 4, 4, 4, 4 ] ], 
n[64] = [ [ 4, 4, 5, 5, 4, 4, 4, 5, 5, 4 ], [ 4, 4, 5, 5, 4, 4, 4, 5, 5, 4 ], [ 4, 4, 5, 5, 4, 4, 4, 5, 5, 4 ], [ 4, 4, 5, 5, 4, 4, 4, 5, 5, 4 ], [ 4, 4, 5, 5, 4, 4, 4, 4, 5, 4 ], [ 4, 4, 5, 5, 4, 4, 4, 5, 5, 4 ], [ 4, 4, 5, 5, 4, 4, 4, 5, 5, 4 ], [ 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ], [ 5, 5, 5, 5, 5, 5, 4, 5, 5, 5 ], [ 4, 5, 5, 5, 4, 4, 4, 5, 5, 4 ] ], 
n);
cc._RF.pop();
}, {} ],
StartItemModel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4ec58VbM8RCmppXtlG6LY/6", "StartItemModel");
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
var a = t("./../../../../c2f-framework/gui/layer/UIModelBase"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "P_StartItem";
return e;
}
return r([ s ], e);
}(a.UIModelBase));
o.default = l;
cc._RF.pop();
}, {
"./../../../../c2f-framework/gui/layer/UIModelBase": void 0
} ],
StartItemView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c3da7SJ0yZEKrKOW8kS/SfZ", "StartItemView");
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
var a = t("./../../../../c2f-framework/gui/layer/UIPanelBase"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "P_StartItem";
e.skeSkeleton = void 0;
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
this.ske = this.get("_ske_");
this.skeSkeleton = this.ske.getComponent(sp.Skeleton);
};
e.prototype.addEvent = function() {};
e.prototype.removeEvent = function() {};
return r([ s ], e);
}(a.UIPanelBase));
o.default = l;
cc._RF.pop();
}, {
"./../../../../c2f-framework/gui/layer/UIPanelBase": void 0
} ],
StartItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "65b10TtZxZAJ66LWnRp/GRa", "StartItem");
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
var a = t("./../../../../c2f-framework/gui/layer/UIPControlBase"), c = t("../../../../Script/game/UIHelper"), s = cc._decorator, l = s.ccclass, p = (s.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabName = "P_StartItem";
e.model = void 0;
e.view = void 0;
return e;
}
e.prototype.playAni = function() {
c.UIHelper.playSkeAni(this.view.skeSkeleton, "play");
};
return r([ l ], e);
}(a.UIPControlBase));
o.default = p;
cc._RF.pop();
}, {
"../../../../Script/game/UIHelper": void 0,
"./../../../../c2f-framework/gui/layer/UIPControlBase": void 0
} ]
}, {}, [ "MainPackView", "Ball", "BallModel", "BallView", "BasketBallMain", "BasketBallMainModel", "BasketBallMainView", "BlockItem", "BlockItemModel", "BlockItemView", "DesStarMain", "DesStarMainModel", "DesStarMainView", "StarCfg", "StartItem", "StartItemModel", "StartItemView", "MapCreatItem", "MapCreatItemModel", "MapCreatItemView", "MapCreateMain", "MapCreateMainModel", "MapCreateMainView", "BoomItem", "BoomItemModel", "BoomItemView", "Physics2048Item", "Physics2048ItemModel", "Physics2048ItemView", "Physics2048Main", "Physics2048MainModel", "Physics2048MainView" ]);