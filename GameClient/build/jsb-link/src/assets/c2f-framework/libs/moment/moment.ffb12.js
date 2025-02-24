(function(e, t) {
"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t();
})(this, function() {
"use strict";
var e, t;
function n() {
return e.apply(null, arguments);
}
function i(e) {
return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e);
}
function s(e) {
return null != e && "[object Object]" === Object.prototype.toString.call(e);
}
function r(e) {
if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
var t;
for (t in e) if (e.hasOwnProperty(t)) return !1;
return !0;
}
function a(e) {
return void 0 === e;
}
function o(e) {
return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e);
}
function u(e) {
return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e);
}
function l(e, t) {
var n, i = [];
for (n = 0; n < e.length; ++n) i.push(t(e[n], n));
return i;
}
function h(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}
function d(e, t) {
for (var n in t) h(t, n) && (e[n] = t[n]);
h(t, "toString") && (e.toString = t.toString);
h(t, "valueOf") && (e.valueOf = t.valueOf);
return e;
}
function c(e, t, n, i) {
return qt(e, t, n, i, !0).utc();
}
function f(e) {
null == e._pf && (e._pf = {
empty: !1,
unusedTokens: [],
unusedInput: [],
overflow: -2,
charsLeftOver: 0,
nullInput: !1,
invalidMonth: null,
invalidFormat: !1,
userInvalidated: !1,
iso: !1,
parsedDateParts: [],
meridiem: null,
rfc2822: !1,
weekdayMismatch: !1
});
return e._pf;
}
t = Array.prototype.some ? Array.prototype.some : function(e) {
for (var t = Object(this), n = t.length >>> 0, i = 0; i < n; i++) if (i in t && e.call(this, t[i], i, t)) return !0;
return !1;
};
function m(e) {
if (null == e._isValid) {
var n = f(e), i = t.call(n.parsedDateParts, function(e) {
return null != e;
}), s = !isNaN(e._d.getTime()) && n.overflow < 0 && !n.empty && !n.invalidMonth && !n.invalidWeekday && !n.weekdayMismatch && !n.nullInput && !n.invalidFormat && !n.userInvalidated && (!n.meridiem || n.meridiem && i);
e._strict && (s = s && 0 === n.charsLeftOver && 0 === n.unusedTokens.length && void 0 === n.bigHour);
if (null != Object.isFrozen && Object.isFrozen(e)) return s;
e._isValid = s;
}
return e._isValid;
}
function _(e) {
var t = c(NaN);
null != e ? d(f(t), e) : f(t).userInvalidated = !0;
return t;
}
var y = n.momentProperties = [];
function g(e, t) {
var n, i, s;
a(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject);
a(t._i) || (e._i = t._i);
a(t._f) || (e._f = t._f);
a(t._l) || (e._l = t._l);
a(t._strict) || (e._strict = t._strict);
a(t._tzm) || (e._tzm = t._tzm);
a(t._isUTC) || (e._isUTC = t._isUTC);
a(t._offset) || (e._offset = t._offset);
a(t._pf) || (e._pf = f(t));
a(t._locale) || (e._locale = t._locale);
if (y.length > 0) for (n = 0; n < y.length; n++) a(s = t[i = y[n]]) || (e[i] = s);
return e;
}
var p = !1;
function v(e) {
g(this, e);
this._d = new Date(null != e._d ? e._d.getTime() : NaN);
this.isValid() || (this._d = new Date(NaN));
if (!1 === p) {
p = !0;
n.updateOffset(this);
p = !1;
}
}
function w(e) {
return e instanceof v || null != e && null != e._isAMomentObject;
}
function M(e) {
return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function k(e) {
var t = +e, n = 0;
0 !== t && isFinite(t) && (n = M(t));
return n;
}
function S(e, t, n) {
var i, s = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), a = 0;
for (i = 0; i < s; i++) (n && e[i] !== t[i] || !n && k(e[i]) !== k(t[i])) && a++;
return a + r;
}
function D(e) {
!1 === n.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e);
}
function Y(e, t) {
var i = !0;
return d(function() {
null != n.deprecationHandler && n.deprecationHandler(null, e);
if (i) {
for (var s, r = [], a = 0; a < arguments.length; a++) {
s = "";
if ("object" == typeof arguments[a]) {
s += "\n[" + a + "] ";
for (var o in arguments[0]) s += o + ": " + arguments[0][o] + ", ";
s = s.slice(0, -2);
} else s = arguments[a];
r.push(s);
}
D(e + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + new Error().stack);
i = !1;
}
return t.apply(this, arguments);
}, t);
}
var O, T = {};
function b(e, t) {
null != n.deprecationHandler && n.deprecationHandler(e, t);
if (!T[e]) {
D(t);
T[e] = !0;
}
}
n.suppressDeprecationWarnings = !1;
n.deprecationHandler = null;
function x(e) {
return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e);
}
function P(e, t) {
var n, i = d({}, e);
for (n in t) if (h(t, n)) if (s(e[n]) && s(t[n])) {
i[n] = {};
d(i[n], e[n]);
d(i[n], t[n]);
} else null != t[n] ? i[n] = t[n] : delete i[n];
for (n in e) h(e, n) && !h(t, n) && s(e[n]) && (i[n] = d({}, i[n]));
return i;
}
function W(e) {
null != e && this.set(e);
}
O = Object.keys ? Object.keys : function(e) {
var t, n = [];
for (t in e) h(e, t) && n.push(t);
return n;
};
var C = {};
function H(e, t) {
var n = e.toLowerCase();
C[n] = C[n + "s"] = C[t] = e;
}
function R(e) {
return "string" == typeof e ? C[e] || C[e.toLowerCase()] : void 0;
}
function U(e) {
var t, n, i = {};
for (n in e) h(e, n) && (t = R(n)) && (i[t] = e[n]);
return i;
}
var F = {};
function L(e, t) {
F[e] = t;
}
function N(e) {
var t = [];
for (var n in e) t.push({
unit: n,
priority: F[n]
});
t.sort(function(e, t) {
return e.priority - t.priority;
});
return t;
}
function G(e, t, n) {
var i = "" + Math.abs(e), s = t - i.length;
return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + i;
}
var V = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, E = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, I = {}, A = {};
function j(e, t, n, i) {
var s = i;
"string" == typeof i && (s = function() {
return this[i]();
});
e && (A[e] = s);
t && (A[t[0]] = function() {
return G(s.apply(this, arguments), t[1], t[2]);
});
n && (A[n] = function() {
return this.localeData().ordinal(s.apply(this, arguments), e);
});
}
function Z(e) {
var t, n, i, s = e.match(V);
for (t = 0, n = s.length; t < n; t++) A[s[t]] ? s[t] = A[s[t]] : s[t] = (i = s[t]).match(/\[[\s\S]/) ? i.replace(/^\[|\]$/g, "") : i.replace(/\\/g, "");
return function(t) {
var i, r = "";
for (i = 0; i < n; i++) r += x(s[i]) ? s[i].call(t, e) : s[i];
return r;
};
}
function z(e, t) {
if (!e.isValid()) return e.localeData().invalidDate();
t = $(t, e.localeData());
I[t] = I[t] || Z(t);
return I[t](e);
}
function $(e, t) {
var n = 5;
function i(e) {
return t.longDateFormat(e) || e;
}
E.lastIndex = 0;
for (;n >= 0 && E.test(e); ) {
e = e.replace(E, i);
E.lastIndex = 0;
n -= 1;
}
return e;
}
var q = /\d/, J = /\d\d/, B = /\d{3}/, Q = /\d{4}/, X = /[+-]?\d{6}/, K = /\d\d?/, ee = /\d\d\d\d?/, te = /\d\d\d\d\d\d?/, ne = /\d{1,3}/, ie = /\d{1,4}/, se = /[+-]?\d{1,6}/, re = /\d+/, ae = /[+-]?\d+/, oe = /Z|[+-]\d\d:?\d\d/gi, ue = /Z|[+-]\d\d(?::?\d\d)?/gi, le = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, he = {};
function de(e, t, n) {
he[e] = x(t) ? t : function(e) {
return e && n ? n : t;
};
}
function ce(e, t) {
return h(he, e) ? he[e](t._strict, t._locale) : new RegExp(fe(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, i, s) {
return t || n || i || s;
})));
}
function fe(e) {
return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var me = {};
function _e(e, t) {
var n, i = t;
"string" == typeof e && (e = [ e ]);
o(t) && (i = function(e, n) {
n[t] = k(e);
});
for (n = 0; n < e.length; n++) me[e[n]] = i;
}
function ye(e, t) {
_e(e, function(e, n, i, s) {
i._w = i._w || {};
t(e, i._w, i, s);
});
}
function ge(e, t, n) {
null != t && h(me, e) && me[e](t, n._a, n, e);
}
var pe = 0, ve = 1, we = 2, Me = 3, ke = 4, Se = 5, De = 6, Ye = 7, Oe = 8;
j("Y", 0, 0, function() {
var e = this.year();
return e <= 9999 ? "" + e : "+" + e;
});
j(0, [ "YY", 2 ], 0, function() {
return this.year() % 100;
});
j(0, [ "YYYY", 4 ], 0, "year");
j(0, [ "YYYYY", 5 ], 0, "year");
j(0, [ "YYYYYY", 6, !0 ], 0, "year");
H("year", "y");
L("year", 1);
de("Y", ae);
de("YY", K, J);
de("YYYY", ie, Q);
de("YYYYY", se, X);
de("YYYYYY", se, X);
_e([ "YYYYY", "YYYYYY" ], pe);
_e("YYYY", function(e, t) {
t[pe] = 2 === e.length ? n.parseTwoDigitYear(e) : k(e);
});
_e("YY", function(e, t) {
t[pe] = n.parseTwoDigitYear(e);
});
_e("Y", function(e, t) {
t[pe] = parseInt(e, 10);
});
function Te(e) {
return be(e) ? 366 : 365;
}
function be(e) {
return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
}
n.parseTwoDigitYear = function(e) {
return k(e) + (k(e) > 68 ? 1900 : 2e3);
};
var xe, Pe = We("FullYear", !0);
function We(e, t) {
return function(i) {
if (null != i) {
He(this, e, i);
n.updateOffset(this, t);
return this;
}
return Ce(this, e);
};
}
function Ce(e, t) {
return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function He(e, t, n) {
e.isValid() && !isNaN(n) && ("FullYear" === t && be(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Re(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
}
xe = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
var t;
for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
return -1;
};
function Re(e, t) {
if (isNaN(e) || isNaN(t)) return NaN;
var n = (t % 12 + 12) % 12;
e += (t - n) / 12;
return 1 === n ? be(e) ? 29 : 28 : 31 - n % 7 % 2;
}
j("M", [ "MM", 2 ], "Mo", function() {
return this.month() + 1;
});
j("MMM", 0, 0, function(e) {
return this.localeData().monthsShort(this, e);
});
j("MMMM", 0, 0, function(e) {
return this.localeData().months(this, e);
});
H("month", "M");
L("month", 8);
de("M", K);
de("MM", K, J);
de("MMM", function(e, t) {
return t.monthsShortRegex(e);
});
de("MMMM", function(e, t) {
return t.monthsRegex(e);
});
_e([ "M", "MM" ], function(e, t) {
t[ve] = k(e) - 1;
});
_e([ "MMM", "MMMM" ], function(e, t, n, i) {
var s = n._locale.monthsParse(e, i, n._strict);
null != s ? t[ve] = s : f(n).invalidMonth = e;
});
var Ue = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Fe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), Le = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
function Ne(e, t, n) {
var i, s, r, a = e.toLocaleLowerCase();
if (!this._monthsParse) {
this._monthsParse = [];
this._longMonthsParse = [];
this._shortMonthsParse = [];
for (i = 0; i < 12; ++i) {
r = c([ 2e3, i ]);
this._shortMonthsParse[i] = this.monthsShort(r, "").toLocaleLowerCase();
this._longMonthsParse[i] = this.months(r, "").toLocaleLowerCase();
}
}
return n ? "MMM" === t ? -1 !== (s = xe.call(this._shortMonthsParse, a)) ? s : null : -1 !== (s = xe.call(this._longMonthsParse, a)) ? s : null : "MMM" === t ? -1 !== (s = xe.call(this._shortMonthsParse, a)) ? s : -1 !== (s = xe.call(this._longMonthsParse, a)) ? s : null : -1 !== (s = xe.call(this._longMonthsParse, a)) ? s : -1 !== (s = xe.call(this._shortMonthsParse, a)) ? s : null;
}
function Ge(e, t) {
var n;
if (!e.isValid()) return e;
if ("string" == typeof t) if (/^\d+$/.test(t)) t = k(t); else if (!o(t = e.localeData().monthsParse(t))) return e;
n = Math.min(e.date(), Re(e.year(), t));
e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n);
return e;
}
function Ve(e) {
if (null != e) {
Ge(this, e);
n.updateOffset(this, !0);
return this;
}
return Ce(this, "Month");
}
var Ee = le, Ie = le;
function Ae() {
function e(e, t) {
return t.length - e.length;
}
var t, n, i = [], s = [], r = [];
for (t = 0; t < 12; t++) {
n = c([ 2e3, t ]);
i.push(this.monthsShort(n, ""));
s.push(this.months(n, ""));
r.push(this.months(n, ""));
r.push(this.monthsShort(n, ""));
}
i.sort(e);
s.sort(e);
r.sort(e);
for (t = 0; t < 12; t++) {
i[t] = fe(i[t]);
s[t] = fe(s[t]);
}
for (t = 0; t < 24; t++) r[t] = fe(r[t]);
this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i");
this._monthsShortRegex = this._monthsRegex;
this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i");
this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i");
}
function je(e, t, n, i, s, r, a) {
var o;
if (e < 100 && e >= 0) {
o = new Date(e + 400, t, n, i, s, r, a);
isFinite(o.getFullYear()) && o.setFullYear(e);
} else o = new Date(e, t, n, i, s, r, a);
return o;
}
function Ze(e) {
var t;
if (e < 100 && e >= 0) {
var n = Array.prototype.slice.call(arguments);
n[0] = e + 400;
t = new Date(Date.UTC.apply(null, n));
isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e);
} else t = new Date(Date.UTC.apply(null, arguments));
return t;
}
function ze(e, t, n) {
var i = 7 + t - n;
return -(7 + Ze(e, 0, i).getUTCDay() - t) % 7 + i - 1;
}
function $e(e, t, n, i, s) {
var r, a, o = 1 + 7 * (t - 1) + (7 + n - i) % 7 + ze(e, i, s);
if (o <= 0) a = Te(r = e - 1) + o; else if (o > Te(e)) {
r = e + 1;
a = o - Te(e);
} else {
r = e;
a = o;
}
return {
year: r,
dayOfYear: a
};
}
function qe(e, t, n) {
var i, s, r = ze(e.year(), t, n), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
if (a < 1) i = a + Je(s = e.year() - 1, t, n); else if (a > Je(e.year(), t, n)) {
i = a - Je(e.year(), t, n);
s = e.year() + 1;
} else {
s = e.year();
i = a;
}
return {
week: i,
year: s
};
}
function Je(e, t, n) {
var i = ze(e, t, n), s = ze(e + 1, t, n);
return (Te(e) - i + s) / 7;
}
j("w", [ "ww", 2 ], "wo", "week");
j("W", [ "WW", 2 ], "Wo", "isoWeek");
H("week", "w");
H("isoWeek", "W");
L("week", 5);
L("isoWeek", 5);
de("w", K);
de("ww", K, J);
de("W", K);
de("WW", K, J);
ye([ "w", "ww", "W", "WW" ], function(e, t, n, i) {
t[i.substr(0, 1)] = k(e);
});
j("d", 0, "do", "day");
j("dd", 0, 0, function(e) {
return this.localeData().weekdaysMin(this, e);
});
j("ddd", 0, 0, function(e) {
return this.localeData().weekdaysShort(this, e);
});
j("dddd", 0, 0, function(e) {
return this.localeData().weekdays(this, e);
});
j("e", 0, 0, "weekday");
j("E", 0, 0, "isoWeekday");
H("day", "d");
H("weekday", "e");
H("isoWeekday", "E");
L("day", 11);
L("weekday", 11);
L("isoWeekday", 11);
de("d", K);
de("e", K);
de("E", K);
de("dd", function(e, t) {
return t.weekdaysMinRegex(e);
});
de("ddd", function(e, t) {
return t.weekdaysShortRegex(e);
});
de("dddd", function(e, t) {
return t.weekdaysRegex(e);
});
ye([ "dd", "ddd", "dddd" ], function(e, t, n, i) {
var s = n._locale.weekdaysParse(e, i, n._strict);
null != s ? t.d = s : f(n).invalidWeekday = e;
});
ye([ "d", "e", "E" ], function(e, t, n, i) {
t[i] = k(e);
});
function Be(e, t) {
return "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10);
}
function Qe(e, t) {
return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Xe(e, t) {
return e.slice(t, 7).concat(e.slice(0, t));
}
var Ke = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), et = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), tt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
function nt(e, t, n) {
var i, s, r, a = e.toLocaleLowerCase();
if (!this._weekdaysParse) {
this._weekdaysParse = [];
this._shortWeekdaysParse = [];
this._minWeekdaysParse = [];
for (i = 0; i < 7; ++i) {
r = c([ 2e3, 1 ]).day(i);
this._minWeekdaysParse[i] = this.weekdaysMin(r, "").toLocaleLowerCase();
this._shortWeekdaysParse[i] = this.weekdaysShort(r, "").toLocaleLowerCase();
this._weekdaysParse[i] = this.weekdays(r, "").toLocaleLowerCase();
}
}
return n ? "dddd" === t ? -1 !== (s = xe.call(this._weekdaysParse, a)) ? s : null : "ddd" === t ? -1 !== (s = xe.call(this._shortWeekdaysParse, a)) ? s : null : -1 !== (s = xe.call(this._minWeekdaysParse, a)) ? s : null : "dddd" === t ? -1 !== (s = xe.call(this._weekdaysParse, a)) ? s : -1 !== (s = xe.call(this._shortWeekdaysParse, a)) ? s : -1 !== (s = xe.call(this._minWeekdaysParse, a)) ? s : null : "ddd" === t ? -1 !== (s = xe.call(this._shortWeekdaysParse, a)) ? s : -1 !== (s = xe.call(this._weekdaysParse, a)) ? s : -1 !== (s = xe.call(this._minWeekdaysParse, a)) ? s : null : -1 !== (s = xe.call(this._minWeekdaysParse, a)) ? s : -1 !== (s = xe.call(this._weekdaysParse, a)) ? s : -1 !== (s = xe.call(this._shortWeekdaysParse, a)) ? s : null;
}
var it = le, st = le, rt = le;
function at() {
function e(e, t) {
return t.length - e.length;
}
var t, n, i, s, r, a = [], o = [], u = [], l = [];
for (t = 0; t < 7; t++) {
n = c([ 2e3, 1 ]).day(t);
i = this.weekdaysMin(n, "");
s = this.weekdaysShort(n, "");
r = this.weekdays(n, "");
a.push(i);
o.push(s);
u.push(r);
l.push(i);
l.push(s);
l.push(r);
}
a.sort(e);
o.sort(e);
u.sort(e);
l.sort(e);
for (t = 0; t < 7; t++) {
o[t] = fe(o[t]);
u[t] = fe(u[t]);
l[t] = fe(l[t]);
}
this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i");
this._weekdaysShortRegex = this._weekdaysRegex;
this._weekdaysMinRegex = this._weekdaysRegex;
this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i");
this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i");
this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i");
}
function ot() {
return this.hours() % 12 || 12;
}
j("H", [ "HH", 2 ], 0, "hour");
j("h", [ "hh", 2 ], 0, ot);
j("k", [ "kk", 2 ], 0, function() {
return this.hours() || 24;
});
j("hmm", 0, 0, function() {
return "" + ot.apply(this) + G(this.minutes(), 2);
});
j("hmmss", 0, 0, function() {
return "" + ot.apply(this) + G(this.minutes(), 2) + G(this.seconds(), 2);
});
j("Hmm", 0, 0, function() {
return "" + this.hours() + G(this.minutes(), 2);
});
j("Hmmss", 0, 0, function() {
return "" + this.hours() + G(this.minutes(), 2) + G(this.seconds(), 2);
});
function ut(e, t) {
j(e, 0, 0, function() {
return this.localeData().meridiem(this.hours(), this.minutes(), t);
});
}
ut("a", !0);
ut("A", !1);
H("hour", "h");
L("hour", 13);
function lt(e, t) {
return t._meridiemParse;
}
de("a", lt);
de("A", lt);
de("H", K);
de("h", K);
de("k", K);
de("HH", K, J);
de("hh", K, J);
de("kk", K, J);
de("hmm", ee);
de("hmmss", te);
de("Hmm", ee);
de("Hmmss", te);
_e([ "H", "HH" ], Me);
_e([ "k", "kk" ], function(e, t) {
var n = k(e);
t[Me] = 24 === n ? 0 : n;
});
_e([ "a", "A" ], function(e, t, n) {
n._isPm = n._locale.isPM(e);
n._meridiem = e;
});
_e([ "h", "hh" ], function(e, t, n) {
t[Me] = k(e);
f(n).bigHour = !0;
});
_e("hmm", function(e, t, n) {
var i = e.length - 2;
t[Me] = k(e.substr(0, i));
t[ke] = k(e.substr(i));
f(n).bigHour = !0;
});
_e("hmmss", function(e, t, n) {
var i = e.length - 4, s = e.length - 2;
t[Me] = k(e.substr(0, i));
t[ke] = k(e.substr(i, 2));
t[Se] = k(e.substr(s));
f(n).bigHour = !0;
});
_e("Hmm", function(e, t) {
var n = e.length - 2;
t[Me] = k(e.substr(0, n));
t[ke] = k(e.substr(n));
});
_e("Hmmss", function(e, t) {
var n = e.length - 4, i = e.length - 2;
t[Me] = k(e.substr(0, n));
t[ke] = k(e.substr(n, 2));
t[Se] = k(e.substr(i));
});
var ht, dt = We("Hours", !0), ct = {
calendar: {
sameDay: "[Today at] LT",
nextDay: "[Tomorrow at] LT",
nextWeek: "dddd [at] LT",
lastDay: "[Yesterday at] LT",
lastWeek: "[Last] dddd [at] LT",
sameElse: "L"
},
longDateFormat: {
LTS: "h:mm:ss A",
LT: "h:mm A",
L: "MM/DD/YYYY",
LL: "MMMM D, YYYY",
LLL: "MMMM D, YYYY h:mm A",
LLLL: "dddd, MMMM D, YYYY h:mm A"
},
invalidDate: "Invalid date",
ordinal: "%d",
dayOfMonthOrdinalParse: /\d{1,2}/,
relativeTime: {
future: "in %s",
past: "%s ago",
s: "a few seconds",
ss: "%d seconds",
m: "a minute",
mm: "%d minutes",
h: "an hour",
hh: "%d hours",
d: "a day",
dd: "%d days",
M: "a month",
MM: "%d months",
y: "a year",
yy: "%d years"
},
months: Fe,
monthsShort: Le,
week: {
dow: 0,
doy: 6
},
weekdays: Ke,
weekdaysMin: tt,
weekdaysShort: et,
meridiemParse: /[ap]\.?m?\.?/i
}, ft = {}, mt = {};
function _t(e) {
return e ? e.toLowerCase().replace("_", "-") : e;
}
function yt(e) {
for (var t, n, i, s, r = 0; r < e.length; ) {
t = (s = _t(e[r]).split("-")).length;
n = (n = _t(e[r + 1])) ? n.split("-") : null;
for (;t > 0; ) {
if (i = gt(s.slice(0, t).join("-"))) return i;
if (n && n.length >= t && S(s, n, !0) >= t - 1) break;
t--;
}
r++;
}
return ht;
}
function gt(e) {
var t = null;
if (!ft[e] && "undefined" != typeof module && module && module.exports) try {
t = ht._abbr;
require("./locale/" + e);
pt(t);
} catch (e) {}
return ft[e];
}
function pt(e, t) {
var n;
e && ((n = a(t) ? wt(e) : vt(e, t)) ? ht = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?"));
return ht._abbr;
}
function vt(e, t) {
if (null !== t) {
var n, i = ct;
t.abbr = e;
if (null != ft[e]) {
b("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
i = ft[e]._config;
} else if (null != t.parentLocale) if (null != ft[t.parentLocale]) i = ft[t.parentLocale]._config; else {
if (null == (n = gt(t.parentLocale))) {
mt[t.parentLocale] || (mt[t.parentLocale] = []);
mt[t.parentLocale].push({
name: e,
config: t
});
return null;
}
i = n._config;
}
ft[e] = new W(P(i, t));
mt[e] && mt[e].forEach(function(e) {
vt(e.name, e.config);
});
pt(e);
return ft[e];
}
delete ft[e];
return null;
}
function wt(e) {
var t;
e && e._locale && e._locale._abbr && (e = e._locale._abbr);
if (!e) return ht;
if (!i(e)) {
if (t = gt(e)) return t;
e = [ e ];
}
return yt(e);
}
function Mt(e) {
var t, n = e._a;
if (n && -2 === f(e).overflow) {
t = n[ve] < 0 || n[ve] > 11 ? ve : n[we] < 1 || n[we] > Re(n[pe], n[ve]) ? we : n[Me] < 0 || n[Me] > 24 || 24 === n[Me] && (0 !== n[ke] || 0 !== n[Se] || 0 !== n[De]) ? Me : n[ke] < 0 || n[ke] > 59 ? ke : n[Se] < 0 || n[Se] > 59 ? Se : n[De] < 0 || n[De] > 999 ? De : -1;
f(e)._overflowDayOfYear && (t < pe || t > we) && (t = we);
f(e)._overflowWeeks && -1 === t && (t = Ye);
f(e)._overflowWeekday && -1 === t && (t = Oe);
f(e).overflow = t;
}
return e;
}
function kt(e, t, n) {
return null != e ? e : null != t ? t : n;
}
function St(e) {
var t = new Date(n.now());
return e._useUTC ? [ t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate() ] : [ t.getFullYear(), t.getMonth(), t.getDate() ];
}
function Dt(e) {
var t, n, i, s, r, a = [];
if (!e._d) {
i = St(e);
e._w && null == e._a[we] && null == e._a[ve] && Yt(e);
if (null != e._dayOfYear) {
r = kt(e._a[pe], i[pe]);
(e._dayOfYear > Te(r) || 0 === e._dayOfYear) && (f(e)._overflowDayOfYear = !0);
n = Ze(r, 0, e._dayOfYear);
e._a[ve] = n.getUTCMonth();
e._a[we] = n.getUTCDate();
}
for (t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = a[t] = i[t];
for (;t < 7; t++) e._a[t] = a[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
if (24 === e._a[Me] && 0 === e._a[ke] && 0 === e._a[Se] && 0 === e._a[De]) {
e._nextDay = !0;
e._a[Me] = 0;
}
e._d = (e._useUTC ? Ze : je).apply(null, a);
s = e._useUTC ? e._d.getUTCDay() : e._d.getDay();
null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm);
e._nextDay && (e._a[Me] = 24);
e._w && "undefined" != typeof e._w.d && e._w.d !== s && (f(e).weekdayMismatch = !0);
}
}
function Yt(e) {
var t, n, i, s, r, a, o, u;
if (null != (t = e._w).GG || null != t.W || null != t.E) {
r = 1;
a = 4;
n = kt(t.GG, e._a[pe], qe(Jt(), 1, 4).year);
i = kt(t.W, 1);
((s = kt(t.E, 1)) < 1 || s > 7) && (u = !0);
} else {
r = e._locale._week.dow;
a = e._locale._week.doy;
var l = qe(Jt(), r, a);
n = kt(t.gg, e._a[pe], l.year);
i = kt(t.w, l.week);
if (null != t.d) ((s = t.d) < 0 || s > 6) && (u = !0); else if (null != t.e) {
s = t.e + r;
(t.e < 0 || t.e > 6) && (u = !0);
} else s = r;
}
if (i < 1 || i > Je(n, r, a)) f(e)._overflowWeeks = !0; else if (null != u) f(e)._overflowWeekday = !0; else {
o = $e(n, i, s, r, a);
e._a[pe] = o.year;
e._dayOfYear = o.dayOfYear;
}
}
var Ot = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Tt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, bt = /Z|[+-]\d\d(?::?\d\d)?/, xt = [ [ "YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/ ], [ "YYYY-MM-DD", /\d{4}-\d\d-\d\d/ ], [ "GGGG-[W]WW-E", /\d{4}-W\d\d-\d/ ], [ "GGGG-[W]WW", /\d{4}-W\d\d/, !1 ], [ "YYYY-DDD", /\d{4}-\d{3}/ ], [ "YYYY-MM", /\d{4}-\d\d/, !1 ], [ "YYYYYYMMDD", /[+-]\d{10}/ ], [ "YYYYMMDD", /\d{8}/ ], [ "GGGG[W]WWE", /\d{4}W\d{3}/ ], [ "GGGG[W]WW", /\d{4}W\d{2}/, !1 ], [ "YYYYDDD", /\d{7}/ ] ], Pt = [ [ "HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/ ], [ "HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/ ], [ "HH:mm:ss", /\d\d:\d\d:\d\d/ ], [ "HH:mm", /\d\d:\d\d/ ], [ "HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/ ], [ "HHmmss,SSSS", /\d\d\d\d\d\d,\d+/ ], [ "HHmmss", /\d\d\d\d\d\d/ ], [ "HHmm", /\d\d\d\d/ ], [ "HH", /\d\d/ ] ], Wt = /^\/?Date\((\-?\d+)/i;
function Ct(e) {
var t, n, i, s, r, a, o = e._i, u = Ot.exec(o) || Tt.exec(o);
if (u) {
f(e).iso = !0;
for (t = 0, n = xt.length; t < n; t++) if (xt[t][1].exec(u[1])) {
s = xt[t][0];
i = !1 !== xt[t][2];
break;
}
if (null == s) {
e._isValid = !1;
return;
}
if (u[3]) {
for (t = 0, n = Pt.length; t < n; t++) if (Pt[t][1].exec(u[3])) {
r = (u[2] || " ") + Pt[t][0];
break;
}
if (null == r) {
e._isValid = !1;
return;
}
}
if (!i && null != r) {
e._isValid = !1;
return;
}
if (u[4]) {
if (!bt.exec(u[4])) {
e._isValid = !1;
return;
}
a = "Z";
}
e._f = s + (r || "") + (a || "");
Et(e);
} else e._isValid = !1;
}
var Ht = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
function Rt(e, t, n, i, s, r) {
var a = [ Ut(e), Le.indexOf(t), parseInt(n, 10), parseInt(i, 10), parseInt(s, 10) ];
r && a.push(parseInt(r, 10));
return a;
}
function Ut(e) {
var t = parseInt(e, 10);
return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Ft(e, t, n) {
if (e && et.indexOf(e) !== new Date(t[0], t[1], t[2]).getDay()) {
f(n).weekdayMismatch = !0;
n._isValid = !1;
return !1;
}
return !0;
}
var Lt = {
UT: 0,
GMT: 0,
EDT: -240,
EST: -300,
CDT: -300,
CST: -360,
MDT: -360,
MST: -420,
PDT: -420,
PST: -480
};
function Nt(e, t, n) {
if (e) return Lt[e];
if (t) return 0;
var i = parseInt(n, 10), s = i % 100;
return (i - s) / 100 * 60 + s;
}
function Gt(e) {
var t = Ht.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
if (t) {
var n = Rt(t[4], t[3], t[2], t[5], t[6], t[7]);
if (!Ft(t[1], n, e)) return;
e._a = n;
e._tzm = Nt(t[8], t[9], t[10]);
e._d = Ze.apply(null, e._a);
e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm);
f(e).rfc2822 = !0;
} else e._isValid = !1;
}
function Vt(e) {
var t = Wt.exec(e._i);
if (null === t) {
Ct(e);
if (!1 === e._isValid) {
delete e._isValid;
Gt(e);
if (!1 === e._isValid) {
delete e._isValid;
n.createFromInputFallback(e);
}
}
} else e._d = new Date(+t[1]);
}
n.createFromInputFallback = Y("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
});
n.ISO_8601 = function() {};
n.RFC_2822 = function() {};
function Et(e) {
if (e._f !== n.ISO_8601) if (e._f !== n.RFC_2822) {
e._a = [];
f(e).empty = !0;
var t, i, s, r, a, o = "" + e._i, u = o.length, l = 0;
s = $(e._f, e._locale).match(V) || [];
for (t = 0; t < s.length; t++) {
r = s[t];
if (i = (o.match(ce(r, e)) || [])[0]) {
(a = o.substr(0, o.indexOf(i))).length > 0 && f(e).unusedInput.push(a);
o = o.slice(o.indexOf(i) + i.length);
l += i.length;
}
if (A[r]) {
i ? f(e).empty = !1 : f(e).unusedTokens.push(r);
ge(r, i, e);
} else e._strict && !i && f(e).unusedTokens.push(r);
}
f(e).charsLeftOver = u - l;
o.length > 0 && f(e).unusedInput.push(o);
e._a[Me] <= 12 && !0 === f(e).bigHour && e._a[Me] > 0 && (f(e).bigHour = void 0);
f(e).parsedDateParts = e._a.slice(0);
f(e).meridiem = e._meridiem;
e._a[Me] = It(e._locale, e._a[Me], e._meridiem);
Dt(e);
Mt(e);
} else Gt(e); else Ct(e);
}
function It(e, t, n) {
var i;
if (null == n) return t;
if (null != e.meridiemHour) return e.meridiemHour(t, n);
if (null != e.isPM) {
(i = e.isPM(n)) && t < 12 && (t += 12);
i || 12 !== t || (t = 0);
return t;
}
return t;
}
function At(e) {
var t, n, i, s, r;
if (0 !== e._f.length) {
for (s = 0; s < e._f.length; s++) {
r = 0;
t = g({}, e);
null != e._useUTC && (t._useUTC = e._useUTC);
t._f = e._f[s];
Et(t);
if (m(t)) {
r += f(t).charsLeftOver;
r += 10 * f(t).unusedTokens.length;
f(t).score = r;
if (null == i || r < i) {
i = r;
n = t;
}
}
}
d(e, n || t);
} else {
f(e).invalidFormat = !0;
e._d = new Date(NaN);
}
}
function jt(e) {
if (!e._d) {
var t = U(e._i);
e._a = l([ t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond ], function(e) {
return e && parseInt(e, 10);
});
Dt(e);
}
}
function Zt(e) {
var t = new v(Mt(zt(e)));
if (t._nextDay) {
t.add(1, "d");
t._nextDay = void 0;
}
return t;
}
function zt(e) {
var t = e._i, n = e._f;
e._locale = e._locale || wt(e._l);
if (null === t || void 0 === n && "" === t) return _({
nullInput: !0
});
"string" == typeof t && (e._i = t = e._locale.preparse(t));
if (w(t)) return new v(Mt(t));
u(t) ? e._d = t : i(n) ? At(e) : n ? Et(e) : $t(e);
m(e) || (e._d = null);
return e;
}
function $t(e) {
var t = e._i;
if (a(t)) e._d = new Date(n.now()); else if (u(t)) e._d = new Date(t.valueOf()); else if ("string" == typeof t) Vt(e); else if (i(t)) {
e._a = l(t.slice(0), function(e) {
return parseInt(e, 10);
});
Dt(e);
} else s(t) ? jt(e) : o(t) ? e._d = new Date(t) : n.createFromInputFallback(e);
}
function qt(e, t, n, a, o) {
var u = {};
if (!0 === n || !1 === n) {
a = n;
n = void 0;
}
(s(e) && r(e) || i(e) && 0 === e.length) && (e = void 0);
u._isAMomentObject = !0;
u._useUTC = u._isUTC = o;
u._l = n;
u._i = e;
u._f = t;
u._strict = a;
return Zt(u);
}
function Jt(e, t, n, i) {
return qt(e, t, n, i, !1);
}
var Bt = Y("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
var e = Jt.apply(null, arguments);
return this.isValid() && e.isValid() ? e < this ? this : e : _();
}), Qt = Y("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
var e = Jt.apply(null, arguments);
return this.isValid() && e.isValid() ? e > this ? this : e : _();
});
function Xt(e, t) {
var n, s;
1 === t.length && i(t[0]) && (t = t[0]);
if (!t.length) return Jt();
n = t[0];
for (s = 1; s < t.length; ++s) t[s].isValid() && !t[s][e](n) || (n = t[s]);
return n;
}
var Kt = [ "year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond" ];
function en(e) {
for (var t in e) if (-1 === xe.call(Kt, t) || null != e[t] && isNaN(e[t])) return !1;
for (var n = !1, i = 0; i < Kt.length; ++i) if (e[Kt[i]]) {
if (n) return !1;
parseFloat(e[Kt[i]]) !== k(e[Kt[i]]) && (n = !0);
}
return !0;
}
function tn(e) {
var t = U(e), n = t.year || 0, i = t.quarter || 0, s = t.month || 0, r = t.week || t.isoWeek || 0, a = t.day || 0, o = t.hour || 0, u = t.minute || 0, l = t.second || 0, h = t.millisecond || 0;
this._isValid = en(t);
this._milliseconds = +h + 1e3 * l + 6e4 * u + 36e5 * o;
this._days = +a + 7 * r;
this._months = +s + 3 * i + 12 * n;
this._data = {};
this._locale = wt();
this._bubble();
}
function nn(e) {
return e instanceof tn;
}
function sn(e) {
return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
}
function rn(e, t) {
j(e, 0, 0, function() {
var e = this.utcOffset(), n = "+";
if (e < 0) {
e = -e;
n = "-";
}
return n + G(~~(e / 60), 2) + t + G(~~e % 60, 2);
});
}
rn("Z", ":");
rn("ZZ", "");
de("Z", ue);
de("ZZ", ue);
_e([ "Z", "ZZ" ], function(e, t, n) {
n._useUTC = !0;
n._tzm = on(ue, e);
});
var an = /([\+\-]|\d\d)/gi;
function on(e, t) {
var n = (t || "").match(e);
if (null === n) return null;
var i = ((n[n.length - 1] || []) + "").match(an) || [ "-", 0, 0 ], s = 60 * i[1] + k(i[2]);
return 0 === s ? 0 : "+" === i[0] ? s : -s;
}
function un(e, t) {
var i, s;
if (t._isUTC) {
i = t.clone();
s = (w(e) || u(e) ? e.valueOf() : Jt(e).valueOf()) - i.valueOf();
i._d.setTime(i._d.valueOf() + s);
n.updateOffset(i, !1);
return i;
}
return Jt(e).local();
}
function ln(e) {
return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
}
n.updateOffset = function() {};
function hn() {
return !!this.isValid() && this._isUTC && 0 === this._offset;
}
var dn = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/, cn = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function fn(e, t) {
var n, i, s, r = e, a = null;
if (nn(e)) r = {
ms: e._milliseconds,
d: e._days,
M: e._months
}; else if (o(e)) {
r = {};
t ? r[t] = e : r.milliseconds = e;
} else if (a = dn.exec(e)) {
n = "-" === a[1] ? -1 : 1;
r = {
y: 0,
d: k(a[we]) * n,
h: k(a[Me]) * n,
m: k(a[ke]) * n,
s: k(a[Se]) * n,
ms: k(sn(1e3 * a[De])) * n
};
} else if (a = cn.exec(e)) {
n = "-" === a[1] ? -1 : 1;
r = {
y: mn(a[2], n),
M: mn(a[3], n),
w: mn(a[4], n),
d: mn(a[5], n),
h: mn(a[6], n),
m: mn(a[7], n),
s: mn(a[8], n)
};
} else if (null == r) r = {}; else if ("object" == typeof r && ("from" in r || "to" in r)) {
s = yn(Jt(r.from), Jt(r.to));
(r = {}).ms = s.milliseconds;
r.M = s.months;
}
i = new tn(r);
nn(e) && h(e, "_locale") && (i._locale = e._locale);
return i;
}
fn.fn = tn.prototype;
fn.invalid = function() {
return fn(NaN);
};
function mn(e, t) {
var n = e && parseFloat(e.replace(",", "."));
return (isNaN(n) ? 0 : n) * t;
}
function _n(e, t) {
var n = {};
n.months = t.month() - e.month() + 12 * (t.year() - e.year());
e.clone().add(n.months, "M").isAfter(t) && --n.months;
n.milliseconds = +t - +e.clone().add(n.months, "M");
return n;
}
function yn(e, t) {
var n;
if (!e.isValid() || !t.isValid()) return {
milliseconds: 0,
months: 0
};
t = un(t, e);
if (e.isBefore(t)) n = _n(e, t); else {
(n = _n(t, e)).milliseconds = -n.milliseconds;
n.months = -n.months;
}
return n;
}
function gn(e, t) {
return function(n, i) {
var s;
if (null !== i && !isNaN(+i)) {
b(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
s = n;
n = i;
i = s;
}
pn(this, fn(n = "string" == typeof n ? +n : n, i), e);
return this;
};
}
function pn(e, t, i, s) {
var r = t._milliseconds, a = sn(t._days), o = sn(t._months);
if (e.isValid()) {
s = null == s || s;
o && Ge(e, Ce(e, "Month") + o * i);
a && He(e, "Date", Ce(e, "Date") + a * i);
r && e._d.setTime(e._d.valueOf() + r * i);
s && n.updateOffset(e, a || o);
}
}
var vn = gn(1, "add"), wn = gn(-1, "subtract");
function Mn(e, t) {
var n = 12 * (t.year() - e.year()) + (t.month() - e.month()), i = e.clone().add(n, "months");
return -(n + (t - i < 0 ? (t - i) / (i - e.clone().add(n - 1, "months")) : (t - i) / (e.clone().add(n + 1, "months") - i))) || 0;
}
n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function kn(e) {
var t;
if (void 0 === e) return this._locale._abbr;
null != (t = wt(e)) && (this._locale = t);
return this;
}
var Sn = Y("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
return void 0 === e ? this.localeData() : this.locale(e);
});
function Dn() {
return this._locale;
}
var Yn = 126227808e5;
function On(e, t) {
return (e % t + t) % t;
}
function Tn(e, t, n) {
return e < 100 && e >= 0 ? new Date(e + 400, t, n) - Yn : new Date(e, t, n).valueOf();
}
function bn(e, t, n) {
return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - Yn : Date.UTC(e, t, n);
}
j(0, [ "gg", 2 ], 0, function() {
return this.weekYear() % 100;
});
j(0, [ "GG", 2 ], 0, function() {
return this.isoWeekYear() % 100;
});
function xn(e, t) {
j(0, [ e, e.length ], 0, t);
}
xn("gggg", "weekYear");
xn("ggggg", "weekYear");
xn("GGGG", "isoWeekYear");
xn("GGGGG", "isoWeekYear");
H("weekYear", "gg");
H("isoWeekYear", "GG");
L("weekYear", 1);
L("isoWeekYear", 1);
de("G", ae);
de("g", ae);
de("GG", K, J);
de("gg", K, J);
de("GGGG", ie, Q);
de("gggg", ie, Q);
de("GGGGG", se, X);
de("ggggg", se, X);
ye([ "gggg", "ggggg", "GGGG", "GGGGG" ], function(e, t, n, i) {
t[i.substr(0, 2)] = k(e);
});
ye([ "gg", "GG" ], function(e, t, i, s) {
t[s] = n.parseTwoDigitYear(e);
});
function Pn(e, t, n, i, s) {
var r;
if (null == e) return qe(this, i, s).year;
t > (r = Je(e, i, s)) && (t = r);
return Wn.call(this, e, t, n, i, s);
}
function Wn(e, t, n, i, s) {
var r = $e(e, t, n, i, s), a = Ze(r.year, 0, r.dayOfYear);
this.year(a.getUTCFullYear());
this.month(a.getUTCMonth());
this.date(a.getUTCDate());
return this;
}
j("Q", 0, "Qo", "quarter");
H("quarter", "Q");
L("quarter", 7);
de("Q", q);
_e("Q", function(e, t) {
t[ve] = 3 * (k(e) - 1);
});
j("D", [ "DD", 2 ], "Do", "date");
H("date", "D");
L("date", 9);
de("D", K);
de("DD", K, J);
de("Do", function(e, t) {
return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
_e([ "D", "DD" ], we);
_e("Do", function(e, t) {
t[we] = k(e.match(K)[0]);
});
var Cn = We("Date", !0);
j("DDD", [ "DDDD", 3 ], "DDDo", "dayOfYear");
H("dayOfYear", "DDD");
L("dayOfYear", 4);
de("DDD", ne);
de("DDDD", B);
_e([ "DDD", "DDDD" ], function(e, t, n) {
n._dayOfYear = k(e);
});
j("m", [ "mm", 2 ], 0, "minute");
H("minute", "m");
L("minute", 14);
de("m", K);
de("mm", K, J);
_e([ "m", "mm" ], ke);
var Hn = We("Minutes", !1);
j("s", [ "ss", 2 ], 0, "second");
H("second", "s");
L("second", 15);
de("s", K);
de("ss", K, J);
_e([ "s", "ss" ], Se);
var Rn, Un = We("Seconds", !1);
j("S", 0, 0, function() {
return ~~(this.millisecond() / 100);
});
j(0, [ "SS", 2 ], 0, function() {
return ~~(this.millisecond() / 10);
});
j(0, [ "SSS", 3 ], 0, "millisecond");
j(0, [ "SSSS", 4 ], 0, function() {
return 10 * this.millisecond();
});
j(0, [ "SSSSS", 5 ], 0, function() {
return 100 * this.millisecond();
});
j(0, [ "SSSSSS", 6 ], 0, function() {
return 1e3 * this.millisecond();
});
j(0, [ "SSSSSSS", 7 ], 0, function() {
return 1e4 * this.millisecond();
});
j(0, [ "SSSSSSSS", 8 ], 0, function() {
return 1e5 * this.millisecond();
});
j(0, [ "SSSSSSSSS", 9 ], 0, function() {
return 1e6 * this.millisecond();
});
H("millisecond", "ms");
L("millisecond", 16);
de("S", ne, q);
de("SS", ne, J);
de("SSS", ne, B);
for (Rn = "SSSS"; Rn.length <= 9; Rn += "S") de(Rn, re);
function Fn(e, t) {
t[De] = k(1e3 * ("0." + e));
}
for (Rn = "S"; Rn.length <= 9; Rn += "S") _e(Rn, Fn);
var Ln = We("Milliseconds", !1);
j("z", 0, 0, "zoneAbbr");
j("zz", 0, 0, "zoneName");
var Nn = v.prototype;
Nn.add = vn;
Nn.calendar = function(e, t) {
var i = e || Jt(), s = un(i, this).startOf("day"), r = n.calendarFormat(this, s) || "sameElse", a = t && (x(t[r]) ? t[r].call(this, i) : t[r]);
return this.format(a || this.localeData().calendar(r, this, Jt(i)));
};
Nn.clone = function() {
return new v(this);
};
Nn.diff = function(e, t, n) {
var i, s, r;
if (!this.isValid()) return NaN;
if (!(i = un(e, this)).isValid()) return NaN;
s = 6e4 * (i.utcOffset() - this.utcOffset());
switch (t = R(t)) {
case "year":
r = Mn(this, i) / 12;
break;

case "month":
r = Mn(this, i);
break;

case "quarter":
r = Mn(this, i) / 3;
break;

case "second":
r = (this - i) / 1e3;
break;

case "minute":
r = (this - i) / 6e4;
break;

case "hour":
r = (this - i) / 36e5;
break;

case "day":
r = (this - i - s) / 864e5;
break;

case "week":
r = (this - i - s) / 6048e5;
break;

default:
r = this - i;
}
return n ? r : M(r);
};
Nn.endOf = function(e) {
var t;
if (void 0 === (e = R(e)) || "millisecond" === e || !this.isValid()) return this;
var i = this._isUTC ? bn : Tn;
switch (e) {
case "year":
t = i(this.year() + 1, 0, 1) - 1;
break;

case "quarter":
t = i(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
break;

case "month":
t = i(this.year(), this.month() + 1, 1) - 1;
break;

case "week":
t = i(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
break;

case "isoWeek":
t = i(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
break;

case "day":
case "date":
t = i(this.year(), this.month(), this.date() + 1) - 1;
break;

case "hour":
t = this._d.valueOf();
t += 36e5 - On(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
break;

case "minute":
t = this._d.valueOf();
t += 6e4 - On(t, 6e4) - 1;
break;

case "second":
t = this._d.valueOf();
t += 1e3 - On(t, 1e3) - 1;
}
this._d.setTime(t);
n.updateOffset(this, !0);
return this;
};
Nn.format = function(e) {
e || (e = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
var t = z(this, e);
return this.localeData().postformat(t);
};
Nn.from = function(e, t) {
return this.isValid() && (w(e) && e.isValid() || Jt(e).isValid()) ? fn({
to: this,
from: e
}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
};
Nn.fromNow = function(e) {
return this.from(Jt(), e);
};
Nn.to = function(e, t) {
return this.isValid() && (w(e) && e.isValid() || Jt(e).isValid()) ? fn({
from: this,
to: e
}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
};
Nn.toNow = function(e) {
return this.to(Jt(), e);
};
Nn.get = function(e) {
return x(this[e = R(e)]) ? this[e]() : this;
};
Nn.invalidAt = function() {
return f(this).overflow;
};
Nn.isAfter = function(e, t) {
var n = w(e) ? e : Jt(e);
return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = R(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf());
};
Nn.isBefore = function(e, t) {
var n = w(e) ? e : Jt(e);
return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = R(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf());
};
Nn.isBetween = function(e, t, n, i) {
var s = w(e) ? e : Jt(e), r = w(t) ? t : Jt(t);
return !!(this.isValid() && s.isValid() && r.isValid()) && ("(" === (i = i || "()")[0] ? this.isAfter(s, n) : !this.isBefore(s, n)) && (")" === i[1] ? this.isBefore(r, n) : !this.isAfter(r, n));
};
Nn.isSame = function(e, t) {
var n, i = w(e) ? e : Jt(e);
if (!this.isValid() || !i.isValid()) return !1;
if ("millisecond" === (t = R(t) || "millisecond")) return this.valueOf() === i.valueOf();
n = i.valueOf();
return this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf();
};
Nn.isSameOrAfter = function(e, t) {
return this.isSame(e, t) || this.isAfter(e, t);
};
Nn.isSameOrBefore = function(e, t) {
return this.isSame(e, t) || this.isBefore(e, t);
};
Nn.isValid = function() {
return m(this);
};
Nn.lang = Sn;
Nn.locale = kn;
Nn.localeData = Dn;
Nn.max = Qt;
Nn.min = Bt;
Nn.parsingFlags = function() {
return d({}, f(this));
};
Nn.set = function(e, t) {
if ("object" == typeof e) for (var n = N(e = U(e)), i = 0; i < n.length; i++) this[n[i].unit](e[n[i].unit]); else if (x(this[e = R(e)])) return this[e](t);
return this;
};
Nn.startOf = function(e) {
var t;
if (void 0 === (e = R(e)) || "millisecond" === e || !this.isValid()) return this;
var i = this._isUTC ? bn : Tn;
switch (e) {
case "year":
t = i(this.year(), 0, 1);
break;

case "quarter":
t = i(this.year(), this.month() - this.month() % 3, 1);
break;

case "month":
t = i(this.year(), this.month(), 1);
break;

case "week":
t = i(this.year(), this.month(), this.date() - this.weekday());
break;

case "isoWeek":
t = i(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
break;

case "day":
case "date":
t = i(this.year(), this.month(), this.date());
break;

case "hour":
t = this._d.valueOf();
t -= On(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
break;

case "minute":
t = this._d.valueOf();
t -= On(t, 6e4);
break;

case "second":
t = this._d.valueOf();
t -= On(t, 1e3);
}
this._d.setTime(t);
n.updateOffset(this, !0);
return this;
};
Nn.subtract = wn;
Nn.toArray = function() {
var e = this;
return [ e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond() ];
};
Nn.toObject = function() {
var e = this;
return {
years: e.year(),
months: e.month(),
date: e.date(),
hours: e.hours(),
minutes: e.minutes(),
seconds: e.seconds(),
milliseconds: e.milliseconds()
};
};
Nn.toDate = function() {
return new Date(this.valueOf());
};
Nn.toISOString = function(e) {
if (!this.isValid()) return null;
var t = !0 !== e, n = t ? this.clone().utc() : this;
return n.year() < 0 || n.year() > 9999 ? z(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : x(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 6e4 * this.utcOffset()).toISOString().replace("Z", z(n, "Z")) : z(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
};
Nn.inspect = function() {
if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
var e = "moment", t = "";
if (!this.isLocal()) {
e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone";
t = "Z";
}
var n = "[" + e + '("]', i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", s = t + '[")]';
return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + s);
};
Nn.toJSON = function() {
return this.isValid() ? this.toISOString() : null;
};
Nn.toString = function() {
return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
};
Nn.unix = function() {
return Math.floor(this.valueOf() / 1e3);
};
Nn.valueOf = function() {
return this._d.valueOf() - 6e4 * (this._offset || 0);
};
Nn.creationData = function() {
return {
input: this._i,
format: this._f,
locale: this._locale,
isUTC: this._isUTC,
strict: this._strict
};
};
Nn.year = Pe;
Nn.isLeapYear = function() {
return be(this.year());
};
Nn.weekYear = function(e) {
return Pn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
};
Nn.isoWeekYear = function(e) {
return Pn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
};
Nn.quarter = Nn.quarters = function(e) {
return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3);
};
Nn.month = Ve;
Nn.daysInMonth = function() {
return Re(this.year(), this.month());
};
Nn.week = Nn.weeks = function(e) {
var t = this.localeData().week(this);
return null == e ? t : this.add(7 * (e - t), "d");
};
Nn.isoWeek = Nn.isoWeeks = function(e) {
var t = qe(this, 1, 4).week;
return null == e ? t : this.add(7 * (e - t), "d");
};
Nn.weeksInYear = function() {
var e = this.localeData()._week;
return Je(this.year(), e.dow, e.doy);
};
Nn.isoWeeksInYear = function() {
return Je(this.year(), 1, 4);
};
Nn.date = Cn;
Nn.day = Nn.days = function(e) {
if (!this.isValid()) return null != e ? this : NaN;
var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
if (null != e) {
e = Be(e, this.localeData());
return this.add(e - t, "d");
}
return t;
};
Nn.weekday = function(e) {
if (!this.isValid()) return null != e ? this : NaN;
var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
return null == e ? t : this.add(e - t, "d");
};
Nn.isoWeekday = function(e) {
if (!this.isValid()) return null != e ? this : NaN;
if (null != e) {
var t = Qe(e, this.localeData());
return this.day(this.day() % 7 ? t : t - 7);
}
return this.day() || 7;
};
Nn.dayOfYear = function(e) {
var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
return null == e ? t : this.add(e - t, "d");
};
Nn.hour = Nn.hours = dt;
Nn.minute = Nn.minutes = Hn;
Nn.second = Nn.seconds = Un;
Nn.millisecond = Nn.milliseconds = Ln;
Nn.utcOffset = function(e, t, i) {
var s, r = this._offset || 0;
if (!this.isValid()) return null != e ? this : NaN;
if (null != e) {
if ("string" == typeof e) {
if (null === (e = on(ue, e))) return this;
} else Math.abs(e) < 16 && !i && (e *= 60);
!this._isUTC && t && (s = ln(this));
this._offset = e;
this._isUTC = !0;
null != s && this.add(s, "m");
if (r !== e) if (!t || this._changeInProgress) pn(this, fn(e - r, "m"), 1, !1); else if (!this._changeInProgress) {
this._changeInProgress = !0;
n.updateOffset(this, !0);
this._changeInProgress = null;
}
return this;
}
return this._isUTC ? r : ln(this);
};
Nn.utc = function(e) {
return this.utcOffset(0, e);
};
Nn.local = function(e) {
if (this._isUTC) {
this.utcOffset(0, e);
this._isUTC = !1;
e && this.subtract(ln(this), "m");
}
return this;
};
Nn.parseZone = function() {
if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
var e = on(oe, this._i);
null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
}
return this;
};
Nn.hasAlignedHourOffset = function(e) {
if (!this.isValid()) return !1;
e = e ? Jt(e).utcOffset() : 0;
return (this.utcOffset() - e) % 60 == 0;
};
Nn.isDST = function() {
return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
};
Nn.isLocal = function() {
return !!this.isValid() && !this._isUTC;
};
Nn.isUtcOffset = function() {
return !!this.isValid() && this._isUTC;
};
Nn.isUtc = hn;
Nn.isUTC = hn;
Nn.zoneAbbr = function() {
return this._isUTC ? "UTC" : "";
};
Nn.zoneName = function() {
return this._isUTC ? "Coordinated Universal Time" : "";
};
Nn.dates = Y("dates accessor is deprecated. Use date instead.", Cn);
Nn.months = Y("months accessor is deprecated. Use month instead", Ve);
Nn.years = Y("years accessor is deprecated. Use year instead", Pe);
Nn.zone = Y("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
if (null != e) {
"string" != typeof e && (e = -e);
this.utcOffset(e, t);
return this;
}
return -this.utcOffset();
});
Nn.isDSTShifted = Y("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
if (!a(this._isDSTShifted)) return this._isDSTShifted;
var e = {};
g(e, this);
if ((e = zt(e))._a) {
var t = e._isUTC ? c(e._a) : Jt(e._a);
this._isDSTShifted = this.isValid() && S(e._a, t.toArray()) > 0;
} else this._isDSTShifted = !1;
return this._isDSTShifted;
});
function Gn(e) {
return e;
}
var Vn = W.prototype;
Vn.calendar = function(e, t, n) {
var i = this._calendar[e] || this._calendar.sameElse;
return x(i) ? i.call(t, n) : i;
};
Vn.longDateFormat = function(e) {
var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
if (t || !n) return t;
this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
return e.slice(1);
});
return this._longDateFormat[e];
};
Vn.invalidDate = function() {
return this._invalidDate;
};
Vn.ordinal = function(e) {
return this._ordinal.replace("%d", e);
};
Vn.preparse = Gn;
Vn.postformat = Gn;
Vn.relativeTime = function(e, t, n, i) {
var s = this._relativeTime[n];
return x(s) ? s(e, t, n, i) : s.replace(/%d/i, e);
};
Vn.pastFuture = function(e, t) {
var n = this._relativeTime[e > 0 ? "future" : "past"];
return x(n) ? n(t) : n.replace(/%s/i, t);
};
Vn.set = function(e) {
var t, n;
for (n in e) x(t = e[n]) ? this[n] = t : this["_" + n] = t;
this._config = e;
this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
};
Vn.months = function(e, t) {
return e ? i(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ue).test(t) ? "format" : "standalone"][e.month()] : i(this._months) ? this._months : this._months.standalone;
};
Vn.monthsShort = function(e, t) {
return e ? i(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ue.test(t) ? "format" : "standalone"][e.month()] : i(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
};
Vn.monthsParse = function(e, t, n) {
var i, s, r;
if (this._monthsParseExact) return Ne.call(this, e, t, n);
if (!this._monthsParse) {
this._monthsParse = [];
this._longMonthsParse = [];
this._shortMonthsParse = [];
}
for (i = 0; i < 12; i++) {
s = c([ 2e3, i ]);
if (n && !this._longMonthsParse[i]) {
this._longMonthsParse[i] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i");
this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i");
}
if (!n && !this._monthsParse[i]) {
r = "^" + this.months(s, "") + "|^" + this.monthsShort(s, "");
this._monthsParse[i] = new RegExp(r.replace(".", ""), "i");
}
if (n && "MMMM" === t && this._longMonthsParse[i].test(e)) return i;
if (n && "MMM" === t && this._shortMonthsParse[i].test(e)) return i;
if (!n && this._monthsParse[i].test(e)) return i;
}
};
Vn.monthsRegex = function(e) {
if (this._monthsParseExact) {
h(this, "_monthsRegex") || Ae.call(this);
return e ? this._monthsStrictRegex : this._monthsRegex;
}
h(this, "_monthsRegex") || (this._monthsRegex = Ie);
return this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex;
};
Vn.monthsShortRegex = function(e) {
if (this._monthsParseExact) {
h(this, "_monthsRegex") || Ae.call(this);
return e ? this._monthsShortStrictRegex : this._monthsShortRegex;
}
h(this, "_monthsShortRegex") || (this._monthsShortRegex = Ee);
return this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex;
};
Vn.week = function(e) {
return qe(e, this._week.dow, this._week.doy).week;
};
Vn.firstDayOfYear = function() {
return this._week.doy;
};
Vn.firstDayOfWeek = function() {
return this._week.dow;
};
Vn.weekdays = function(e, t) {
var n = i(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
return !0 === e ? Xe(n, this._week.dow) : e ? n[e.day()] : n;
};
Vn.weekdaysMin = function(e) {
return !0 === e ? Xe(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
};
Vn.weekdaysShort = function(e) {
return !0 === e ? Xe(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
};
Vn.weekdaysParse = function(e, t, n) {
var i, s, r;
if (this._weekdaysParseExact) return nt.call(this, e, t, n);
if (!this._weekdaysParse) {
this._weekdaysParse = [];
this._minWeekdaysParse = [];
this._shortWeekdaysParse = [];
this._fullWeekdaysParse = [];
}
for (i = 0; i < 7; i++) {
s = c([ 2e3, 1 ]).day(i);
if (n && !this._fullWeekdaysParse[i]) {
this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(s, "").replace(".", "\\.?") + "$", "i");
this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$", "i");
this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$", "i");
}
if (!this._weekdaysParse[i]) {
r = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, "");
this._weekdaysParse[i] = new RegExp(r.replace(".", ""), "i");
}
if (n && "dddd" === t && this._fullWeekdaysParse[i].test(e)) return i;
if (n && "ddd" === t && this._shortWeekdaysParse[i].test(e)) return i;
if (n && "dd" === t && this._minWeekdaysParse[i].test(e)) return i;
if (!n && this._weekdaysParse[i].test(e)) return i;
}
};
Vn.weekdaysRegex = function(e) {
if (this._weekdaysParseExact) {
h(this, "_weekdaysRegex") || at.call(this);
return e ? this._weekdaysStrictRegex : this._weekdaysRegex;
}
h(this, "_weekdaysRegex") || (this._weekdaysRegex = it);
return this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex;
};
Vn.weekdaysShortRegex = function(e) {
if (this._weekdaysParseExact) {
h(this, "_weekdaysRegex") || at.call(this);
return e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
}
h(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = st);
return this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
};
Vn.weekdaysMinRegex = function(e) {
if (this._weekdaysParseExact) {
h(this, "_weekdaysRegex") || at.call(this);
return e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
}
h(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = rt);
return this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
};
Vn.isPM = function(e) {
return "p" === (e + "").toLowerCase().charAt(0);
};
Vn.meridiem = function(e, t, n) {
return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
};
function En(e, t, n, i) {
var s = wt(), r = c().set(i, t);
return s[n](r, e);
}
function In(e, t, n) {
if (o(e)) {
t = e;
e = void 0;
}
e = e || "";
if (null != t) return En(e, t, n, "month");
var i, s = [];
for (i = 0; i < 12; i++) s[i] = En(e, i, n, "month");
return s;
}
function An(e, t, n, i) {
if ("boolean" == typeof e) {
if (o(t)) {
n = t;
t = void 0;
}
t = t || "";
} else {
n = t = e;
e = !1;
if (o(t)) {
n = t;
t = void 0;
}
t = t || "";
}
var s, r = wt(), a = e ? r._week.dow : 0;
if (null != n) return En(t, (n + a) % 7, i, "day");
var u = [];
for (s = 0; s < 7; s++) u[s] = En(t, (s + a) % 7, i, "day");
return u;
}
pt("en", {
dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
ordinal: function(e) {
var t = e % 10;
return e + (1 === k(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
}
});
n.lang = Y("moment.lang is deprecated. Use moment.locale instead.", pt);
n.langData = Y("moment.langData is deprecated. Use moment.localeData instead.", wt);
var jn = Math.abs;
function Zn(e, t, n, i) {
var s = fn(t, n);
e._milliseconds += i * s._milliseconds;
e._days += i * s._days;
e._months += i * s._months;
return e._bubble();
}
function zn(e) {
return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function $n(e) {
return 4800 * e / 146097;
}
function qn(e) {
return 146097 * e / 4800;
}
function Jn(e) {
return function() {
return this.as(e);
};
}
var Bn = Jn("ms"), Qn = Jn("s"), Xn = Jn("m"), Kn = Jn("h"), ei = Jn("d"), ti = Jn("w"), ni = Jn("M"), ii = Jn("Q"), si = Jn("y");
function ri(e) {
return function() {
return this.isValid() ? this._data[e] : NaN;
};
}
var ai = ri("milliseconds"), oi = ri("seconds"), ui = ri("minutes"), li = ri("hours"), hi = ri("days"), di = ri("months"), ci = ri("years"), fi = Math.round, mi = {
ss: 44,
s: 45,
m: 45,
h: 22,
d: 26,
M: 11
};
function _i(e, t, n, i, s) {
return s.relativeTime(t || 1, !!n, e, i);
}
function yi(e, t, n) {
var i = fn(e).abs(), s = fi(i.as("s")), r = fi(i.as("m")), a = fi(i.as("h")), o = fi(i.as("d")), u = fi(i.as("M")), l = fi(i.as("y")), h = s <= mi.ss && [ "s", s ] || s < mi.s && [ "ss", s ] || r <= 1 && [ "m" ] || r < mi.m && [ "mm", r ] || a <= 1 && [ "h" ] || a < mi.h && [ "hh", a ] || o <= 1 && [ "d" ] || o < mi.d && [ "dd", o ] || u <= 1 && [ "M" ] || u < mi.M && [ "MM", u ] || l <= 1 && [ "y" ] || [ "yy", l ];
h[2] = t;
h[3] = +e > 0;
h[4] = n;
return _i.apply(null, h);
}
var gi = Math.abs;
function pi(e) {
return (e > 0) - (e < 0) || +e;
}
function vi() {
if (!this.isValid()) return this.localeData().invalidDate();
var e, t, n = gi(this._milliseconds) / 1e3, i = gi(this._days), s = gi(this._months);
e = M(n / 60);
t = M(e / 60);
n %= 60;
e %= 60;
var r = M(s / 12), a = s %= 12, o = i, u = t, l = e, h = n ? n.toFixed(3).replace(/\.?0+$/, "") : "", d = this.asSeconds();
if (!d) return "P0D";
var c = d < 0 ? "-" : "", f = pi(this._months) !== pi(d) ? "-" : "", m = pi(this._days) !== pi(d) ? "-" : "", _ = pi(this._milliseconds) !== pi(d) ? "-" : "";
return c + "P" + (r ? f + r + "Y" : "") + (a ? f + a + "M" : "") + (o ? m + o + "D" : "") + (u || l || h ? "T" : "") + (u ? _ + u + "H" : "") + (l ? _ + l + "M" : "") + (h ? _ + h + "S" : "");
}
var wi = tn.prototype;
wi.isValid = function() {
return this._isValid;
};
wi.abs = function() {
var e = this._data;
this._milliseconds = jn(this._milliseconds);
this._days = jn(this._days);
this._months = jn(this._months);
e.milliseconds = jn(e.milliseconds);
e.seconds = jn(e.seconds);
e.minutes = jn(e.minutes);
e.hours = jn(e.hours);
e.months = jn(e.months);
e.years = jn(e.years);
return this;
};
wi.add = function(e, t) {
return Zn(this, e, t, 1);
};
wi.subtract = function(e, t) {
return Zn(this, e, t, -1);
};
wi.as = function(e) {
if (!this.isValid()) return NaN;
var t, n, i = this._milliseconds;
if ("month" === (e = R(e)) || "quarter" === e || "year" === e) {
t = this._days + i / 864e5;
n = this._months + $n(t);
switch (e) {
case "month":
return n;

case "quarter":
return n / 3;

case "year":
return n / 12;
}
} else {
t = this._days + Math.round(qn(this._months));
switch (e) {
case "week":
return t / 7 + i / 6048e5;

case "day":
return t + i / 864e5;

case "hour":
return 24 * t + i / 36e5;

case "minute":
return 1440 * t + i / 6e4;

case "second":
return 86400 * t + i / 1e3;

case "millisecond":
return Math.floor(864e5 * t) + i;

default:
throw new Error("Unknown unit " + e);
}
}
};
wi.asMilliseconds = Bn;
wi.asSeconds = Qn;
wi.asMinutes = Xn;
wi.asHours = Kn;
wi.asDays = ei;
wi.asWeeks = ti;
wi.asMonths = ni;
wi.asQuarters = ii;
wi.asYears = si;
wi.valueOf = function() {
return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN;
};
wi._bubble = function() {
var e, t, n, i, s, r = this._milliseconds, a = this._days, o = this._months, u = this._data;
if (!(r >= 0 && a >= 0 && o >= 0 || r <= 0 && a <= 0 && o <= 0)) {
r += 864e5 * zn(qn(o) + a);
a = 0;
o = 0;
}
u.milliseconds = r % 1e3;
e = M(r / 1e3);
u.seconds = e % 60;
t = M(e / 60);
u.minutes = t % 60;
n = M(t / 60);
u.hours = n % 24;
a += M(n / 24);
o += s = M($n(a));
a -= zn(qn(s));
i = M(o / 12);
o %= 12;
u.days = a;
u.months = o;
u.years = i;
return this;
};
wi.clone = function() {
return fn(this);
};
wi.get = function(e) {
e = R(e);
return this.isValid() ? this[e + "s"]() : NaN;
};
wi.milliseconds = ai;
wi.seconds = oi;
wi.minutes = ui;
wi.hours = li;
wi.days = hi;
wi.weeks = function() {
return M(this.days() / 7);
};
wi.months = di;
wi.years = ci;
wi.humanize = function(e) {
if (!this.isValid()) return this.localeData().invalidDate();
var t = this.localeData(), n = yi(this, !e, t);
e && (n = t.pastFuture(+this, n));
return t.postformat(n);
};
wi.toISOString = vi;
wi.toString = vi;
wi.toJSON = vi;
wi.locale = kn;
wi.localeData = Dn;
wi.toIsoString = Y("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", vi);
wi.lang = Sn;
j("X", 0, 0, "unix");
j("x", 0, 0, "valueOf");
de("x", ae);
de("X", /[+-]?\d+(\.\d{1,3})?/);
_e("X", function(e, t, n) {
n._d = new Date(1e3 * parseFloat(e, 10));
});
_e("x", function(e, t, n) {
n._d = new Date(k(e));
});
n.version = "2.24.0";
e = Jt;
n.fn = Nn;
n.min = function() {
return Xt("isBefore", [].slice.call(arguments, 0));
};
n.max = function() {
return Xt("isAfter", [].slice.call(arguments, 0));
};
n.now = function() {
return Date.now ? Date.now() : +new Date();
};
n.utc = c;
n.unix = function(e) {
return Jt(1e3 * e);
};
n.months = function(e, t) {
return In(e, t, "months");
};
n.isDate = u;
n.locale = pt;
n.invalid = _;
n.duration = fn;
n.isMoment = w;
n.weekdays = function(e, t, n) {
return An(e, t, n, "weekdays");
};
n.parseZone = function() {
return Jt.apply(null, arguments).parseZone();
};
n.localeData = wt;
n.isDuration = nn;
n.monthsShort = function(e, t) {
return In(e, t, "monthsShort");
};
n.weekdaysMin = function(e, t, n) {
return An(e, t, n, "weekdaysMin");
};
n.defineLocale = vt;
n.updateLocale = function(e, t) {
if (null != t) {
var n, i, s = ct;
null != (i = gt(e)) && (s = i._config);
(n = new W(t = P(s, t))).parentLocale = ft[e];
ft[e] = n;
pt(e);
} else null != ft[e] && (null != ft[e].parentLocale ? ft[e] = ft[e].parentLocale : null != ft[e] && delete ft[e]);
return ft[e];
};
n.locales = function() {
return O(ft);
};
n.weekdaysShort = function(e, t, n) {
return An(e, t, n, "weekdaysShort");
};
n.normalizeUnits = R;
n.relativeTimeRounding = function(e) {
if (void 0 === e) return fi;
if ("function" == typeof e) {
fi = e;
return !0;
}
return !1;
};
n.relativeTimeThreshold = function(e, t) {
if (void 0 === mi[e]) return !1;
if (void 0 === t) return mi[e];
mi[e] = t;
"s" === e && (mi.ss = t - 1);
return !0;
};
n.calendarFormat = function(e, t) {
var n = e.diff(t, "days", !0);
return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
};
n.prototype = Nn;
n.HTML5_FMT = {
DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
DATE: "YYYY-MM-DD",
TIME: "HH:mm",
TIME_SECONDS: "HH:mm:ss",
TIME_MS: "HH:mm:ss.SSS",
WEEK: "GGGG-[W]WW",
MONTH: "YYYY-MM"
};
return n;
});