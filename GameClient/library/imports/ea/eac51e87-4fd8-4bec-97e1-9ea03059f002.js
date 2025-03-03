"use strict";
cc._RF.push(module, 'eac516HT9hL7JfhnqAwWfAC', 'msgpack');
// c2f-framework/net/ws/protobuf/msgpack.js

"use strict";

!function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.MessagePack = t() : e.MessagePack = t();
}(void 0, function () {
  return function (e) {
    var t = {};

    function r(n) {
      if (t[n]) return t[n].exports;
      var i = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
    }

    return r.m = e, r.c = t, r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      });
    }, r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var i in e) {
        r.d(n, i, function (t) {
          return e[t];
        }.bind(null, i));
      }
      return n;
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return r.d(t, "a", t), t;
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "", r(r.s = 0);
  }([function (e, t, r) {
    "use strict";

    r.r(t);

    var n = function n(e, t) {
      var r = "function" == typeof Symbol && e[Symbol.iterator];
      if (!r) return e;
      var n,
          i,
          o = r.call(e),
          s = [];

      try {
        for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;) {
          s.push(n.value);
        }
      } catch (e) {
        i = {
          error: e
        };
      } finally {
        try {
          n && !n.done && (r = o["return"]) && r.call(o);
        } finally {
          if (i) throw i.error;
        }
      }

      return s;
    },
        i = function i() {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e = e.concat(n(arguments[t]));
      }

      return e;
    },
        o = "undefined" != typeof TextEncoder && "undefined" != typeof TextDecoder;

    function s(e) {
      for (var t = e.length, r = 0, n = 0; n < t;) {
        var i = e.charCodeAt(n++);
        if (0 != (4294967168 & i)) {
          if (0 == (4294965248 & i)) r += 2;else {
            if (i >= 55296 && i <= 56319 && n < t) {
              var o = e.charCodeAt(n);
              56320 == (64512 & o) && (++n, i = ((1023 & i) << 10) + (1023 & o) + 65536);
            }

            r += 0 == (4294901760 & i) ? 3 : 4;
          }
        } else r++;
      }

      return r;
    }

    var a = o ? new TextEncoder() : void 0;
    var h = a && a.encodeInto ? function (e, t, r) {
      a.encodeInto(e, t.subarray(r));
    } : function (e, t, r) {
      t.set(a.encode(e), r);
    },
        u = 65536;

    function c(e, t, r) {
      for (var n = t, o = n + r, s = [], a = ""; n < o;) {
        var h = e[n++];
        if (0 == (128 & h)) s.push(h);else if (192 == (224 & h)) {
          var c = 63 & e[n++];
          s.push((31 & h) << 6 | c);
        } else if (224 == (240 & h)) {
          c = 63 & e[n++];
          var f = 63 & e[n++];
          s.push((31 & h) << 12 | c << 6 | f);
        } else if (240 == (248 & h)) {
          var l = (7 & h) << 18 | (c = 63 & e[n++]) << 12 | (f = 63 & e[n++]) << 6 | 63 & e[n++];
          l > 65535 && (l -= 65536, s.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), s.push(l);
        } else s.push(h);
        s.length - 4 >= u && (a += String.fromCharCode.apply(String, i(s)), s.length = 0);
      }

      return s.length > 0 && (a += String.fromCharCode.apply(String, i(s))), a;
    }

    var f = o ? new TextDecoder() : null;

    var l = function l(e, t) {
      this.type = e, this.data = t;
    };

    function p(e, t, r) {
      var n = Math.floor(r / 4294967296),
          i = r;
      e.setUint32(t, n), e.setUint32(t + 4, i);
    }

    function d(e, t) {
      return 4294967296 * e.getInt32(t) + e.getUint32(t + 4);
    }

    var y = 4294967295,
        w = 17179869183;

    function v(e) {
      var t = e.sec,
          r = e.nsec;

      if (t >= 0 && r >= 0 && t <= w) {
        if (0 === r && t <= y) {
          var n = new Uint8Array(4);
          return (s = new DataView(n.buffer)).setUint32(0, t), n;
        }

        var i = t / 4294967296,
            o = 4294967295 & t;
        n = new Uint8Array(8);
        return (s = new DataView(n.buffer)).setUint32(0, r << 2 | 3 & i), s.setUint32(4, o), n;
      }

      var s;
      n = new Uint8Array(12);
      return (s = new DataView(n.buffer)).setUint32(0, r), p(s, 4, t), n;
    }

    function g(e) {
      var t = e.getTime(),
          r = Math.floor(t / 1e3),
          n = 1e6 * (t - 1e3 * r),
          i = Math.floor(n / 1e9);
      return {
        sec: r + i,
        nsec: n - 1e9 * i
      };
    }

    function b(e) {
      return e instanceof Date ? v(g(e)) : null;
    }

    function m(e) {
      var t = new DataView(e.buffer, e.byteOffset, e.byteLength);

      switch (e.byteLength) {
        case 4:
          return {
            sec: t.getUint32(0),
            nsec: 0
          };

        case 8:
          var r = t.getUint32(0);
          return {
            sec: 4294967296 * (3 & r) + t.getUint32(4),
            nsec: r >>> 2
          };

        case 12:
          return {
            sec: d(t, 4),
            nsec: t.getUint32(0)
          };

        default:
          throw new Error("Unrecognized data size for timestamp: " + e.length);
      }
    }

    function U(e) {
      var t = m(e);
      return new Date(1e3 * t.sec + t.nsec / 1e6);
    }

    var x = {
      type: -1,
      encode: b,
      decode: U
    },
        S = function () {
      function e() {
        this.builtInEncoders = [], this.builtInDecoders = [], this.encoders = [], this.decoders = [], this.register(x);
      }

      return e.prototype.register = function (e) {
        var t = e.type,
            r = e.encode,
            n = e.decode;
        if (t >= 0) this.encoders[t] = r, this.decoders[t] = n;else {
          var i = 1 + t;
          this.builtInEncoders[i] = r, this.builtInDecoders[i] = n;
        }
      }, e.prototype.tryToEncode = function (e) {
        for (var t = 0; t < this.builtInEncoders.length; t++) {
          if (null != (r = this.builtInEncoders[t])) if (null != (n = r(e))) return new l(-1 - t, n);
        }

        for (t = 0; t < this.encoders.length; t++) {
          var r, n;
          if (null != (r = this.encoders[t])) if (null != (n = r(e))) return new l(t, n);
        }

        return e instanceof l ? e : null;
      }, e.prototype.decode = function (e, t) {
        var r = t < 0 ? this.builtInDecoders[-1 - t] : this.decoders[t];
        return r ? r(e, t) : new l(t, e);
      }, e.defaultCodec = new e(), e;
    }();

    function E(e) {
      return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e instanceof ArrayBuffer ? new Uint8Array(e) : Uint8Array.from(e);
    }

    var B = null,
        A = !!B;

    function L(e, t, r) {
      var n = e.length,
          i = 2 * n,
          o = B.malloc(i);
      !function (e, t, r, n) {
        for (var i = new DataView(B.memory.buffer, e, t), o = 0; o < n; o++) {
          i.setUint16(2 * o, r.charCodeAt(o));
        }
      }(o, i, e, n);
      var s = B.malloc(5 + 4 * n);

      try {
        var a = B.utf8EncodeUint16Array(s, o, n);
        return t.set(new Uint8Array(B.memory.buffer, s, a), r), a;
      } finally {
        B.free(o), B.free(s);
      }
    }

    var T = 65536;

    function I(e, t, r) {
      var n,
          i,
          o,
          s = B.malloc(r),
          a = B.malloc(2 * r);

      try {
        n = s, i = e.subarray(t, t + r), o = r, new Uint8Array(B.memory.buffer, n, o).set(i);
        var h = B.utf8DecodeToUint16Array(a, s, r);
        return function (e) {
          if (e.length <= T) return String.fromCharCode.apply(String, e);

          for (var t = "", r = 0; r < e.length; r++) {
            var n = e.subarray(r * T, (r + 1) * T);
            t += String.fromCharCode.apply(String, n);
          }

          return t;
        }(new Uint16Array(B.memory.buffer, a, h));
      } finally {
        B.free(s), B.free(a);
      }
    }

    var k = function k(e) {
      var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
      if (r) return r.call(e);
      if (e && "number" == typeof e.length) return {
        next: function next() {
          return e && n >= e.length && (e = void 0), {
            value: e && e[n++],
            done: !e
          };
        }
      };
      throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
        M = 100,
        z = 2048,
        C = function () {
      function e(e, t, r, n, i) {
        void 0 === e && (e = S.defaultCodec), void 0 === t && (t = M), void 0 === r && (r = z), void 0 === n && (n = !1), void 0 === i && (i = !1), this.extensionCodec = e, this.maxDepth = t, this.initialBufferSize = r, this.sortKeys = n, this.forceFloat32 = i, this.pos = 0, this.view = new DataView(new ArrayBuffer(this.initialBufferSize)), this.bytes = new Uint8Array(this.view.buffer);
      }

      return e.prototype.encode = function (e, t) {
        if (t > this.maxDepth) throw new Error("Too deep objects in depth " + t);
        null == e ? this.encodeNil() : "boolean" == typeof e ? this.encodeBoolean(e) : "number" == typeof e ? this.encodeNumber(e) : "string" == typeof e ? this.encodeString(e) : this.encodeObject(e, t);
      }, e.prototype.getUint8Array = function () {
        return this.bytes.subarray(0, this.pos);
      }, e.prototype.ensureBufferSizeToWrite = function (e) {
        var t = this.pos + e;
        this.view.byteLength < t && this.resizeBuffer(2 * t);
      }, e.prototype.resizeBuffer = function (e) {
        var t = new ArrayBuffer(e),
            r = new Uint8Array(t),
            n = new DataView(t);
        r.set(this.bytes), this.view = n, this.bytes = r;
      }, e.prototype.encodeNil = function () {
        this.writeU8(192);
      }, e.prototype.encodeBoolean = function (e) {
        !1 === e ? this.writeU8(194) : this.writeU8(195);
      }, e.prototype.encodeNumber = function (e) {
        Number.isSafeInteger(e) ? e >= 0 ? e < 128 ? this.writeU8(e) : e < 256 ? (this.writeU8(204), this.writeU8(e)) : e < 65536 ? (this.writeU8(205), this.writeU16(e)) : e < 4294967296 ? (this.writeU8(206), this.writeU32(e)) : (this.writeU8(207), this.writeU64(e)) : e >= -32 ? this.writeU8(224 | e + 32) : e >= -128 ? (this.writeU8(208), this.writeI8(e)) : e >= -32768 ? (this.writeU8(209), this.writeI16(e)) : e >= -2147483648 ? (this.writeU8(210), this.writeI32(e)) : (this.writeU8(211), this.writeI64(e)) : this.forceFloat32 ? (this.writeU8(202), this.writeF32(e)) : (this.writeU8(203), this.writeF64(e));
      }, e.prototype.writeStringHeader = function (e) {
        if (e < 32) this.writeU8(160 + e);else if (e < 256) this.writeU8(217), this.writeU8(e);else if (e < 65536) this.writeU8(218), this.writeU16(e);else {
          if (!(e < 4294967296)) throw new Error("Too long string: " + e + " bytes in UTF-8");
          this.writeU8(219), this.writeU32(e);
        }
      }, e.prototype.encodeString = function (e) {
        var t = e.length;

        if (o && t > 200) {
          var r = s(e);
          this.ensureBufferSizeToWrite(5 + r), this.writeStringHeader(r), h(e, this.bytes, this.pos), this.pos += r;
        } else {
          if (A && t > 1024) {
            var n = 5 + 4 * t;
            this.ensureBufferSizeToWrite(n);
            var i = L(e, this.bytes, this.pos);
            return void (this.pos += i);
          }

          r = s(e);
          this.ensureBufferSizeToWrite(5 + r), this.writeStringHeader(r), function (e, t, r) {
            for (var n = e.length, i = r, o = 0; o < n;) {
              var s = e.charCodeAt(o++);

              if (0 != (4294967168 & s)) {
                if (0 == (4294965248 & s)) t[i++] = s >> 6 & 31 | 192;else {
                  if (s >= 55296 && s <= 56319 && o < n) {
                    var a = e.charCodeAt(o);
                    56320 == (64512 & a) && (++o, s = ((1023 & s) << 10) + (1023 & a) + 65536);
                  }

                  0 == (4294901760 & s) ? (t[i++] = s >> 12 & 15 | 224, t[i++] = s >> 6 & 63 | 128) : (t[i++] = s >> 18 & 7 | 240, t[i++] = s >> 12 & 63 | 128, t[i++] = s >> 6 & 63 | 128);
                }
                t[i++] = 63 & s | 128;
              } else t[i++] = s;
            }
          }(e, this.bytes, this.pos), this.pos += r;
        }
      }, e.prototype.encodeObject = function (e, t) {
        var r = this.extensionCodec.tryToEncode(e);
        if (null != r) this.encodeExtension(r);else if (Array.isArray(e)) this.encodeArray(e, t);else if (ArrayBuffer.isView(e)) this.encodeBinary(e);else {
          if ("object" != typeof e) throw new Error("Unrecognized object: " + Object.prototype.toString.apply(e));
          this.encodeMap(e, t);
        }
      }, e.prototype.encodeBinary = function (e) {
        var t = e.byteLength;
        if (t < 256) this.writeU8(196), this.writeU8(t);else if (t < 65536) this.writeU8(197), this.writeU16(t);else {
          if (!(t < 4294967296)) throw new Error("Too large binary: " + t);
          this.writeU8(198), this.writeU32(t);
        }
        var r = E(e);
        this.writeU8a(r);
      }, e.prototype.encodeArray = function (e, t) {
        var r,
            n,
            i = e.length;
        if (i < 16) this.writeU8(144 + i);else if (i < 65536) this.writeU8(220), this.writeU16(i);else {
          if (!(i < 4294967296)) throw new Error("Too large array: " + i);
          this.writeU8(221), this.writeU32(i);
        }

        try {
          for (var o = k(e), s = o.next(); !s.done; s = o.next()) {
            var a = s.value;
            this.encode(a, t + 1);
          }
        } catch (e) {
          r = {
            error: e
          };
        } finally {
          try {
            s && !s.done && (n = o["return"]) && n.call(o);
          } finally {
            if (r) throw r.error;
          }
        }
      }, e.prototype.encodeMap = function (e, t) {
        var r = Object.keys(e);
        this.sortKeys && r.sort();
        var n = r.length;
        if (n < 16) this.writeU8(128 + n);else if (n < 65536) this.writeU8(222), this.writeU16(n);else {
          if (!(n < 4294967296)) throw new Error("Too large map object: " + n);
          this.writeU8(223), this.writeU32(n);
        }

        for (var i = 0; i < n; i++) {
          var o = r[i];
          this.encodeString(o), this.encode(e[o], t + 1);
        }
      }, e.prototype.encodeExtension = function (e) {
        var t = e.data.length;
        if (1 === t) this.writeU8(212);else if (2 === t) this.writeU8(213);else if (4 === t) this.writeU8(214);else if (8 === t) this.writeU8(215);else if (16 === t) this.writeU8(216);else if (t < 256) this.writeU8(199), this.writeU8(t);else if (t < 65536) this.writeU8(200), this.writeU16(t);else {
          if (!(t < 4294967296)) throw new Error("Too large extension object: " + t);
          this.writeU8(201), this.writeU32(t);
        }
        this.writeI8(e.type), this.writeU8a(e.data);
      }, e.prototype.writeU8 = function (e) {
        this.ensureBufferSizeToWrite(1), this.view.setUint8(this.pos, e), this.pos++;
      }, e.prototype.writeU8a = function (e) {
        var t = e.length;
        this.ensureBufferSizeToWrite(t), this.bytes.set(e, this.pos), this.pos += t;
      }, e.prototype.writeI8 = function (e) {
        this.ensureBufferSizeToWrite(1), this.view.setInt8(this.pos, e), this.pos++;
      }, e.prototype.writeU16 = function (e) {
        this.ensureBufferSizeToWrite(2), this.view.setUint16(this.pos, e), this.pos += 2;
      }, e.prototype.writeI16 = function (e) {
        this.ensureBufferSizeToWrite(2), this.view.setInt16(this.pos, e), this.pos += 2;
      }, e.prototype.writeU32 = function (e) {
        this.ensureBufferSizeToWrite(4), this.view.setUint32(this.pos, e), this.pos += 4;
      }, e.prototype.writeI32 = function (e) {
        this.ensureBufferSizeToWrite(4), this.view.setInt32(this.pos, e), this.pos += 4;
      }, e.prototype.writeF32 = function (e) {
        this.ensureBufferSizeToWrite(4), this.view.setFloat32(this.pos, e), this.pos += 4;
      }, e.prototype.writeF64 = function (e) {
        this.ensureBufferSizeToWrite(8), this.view.setFloat64(this.pos, e), this.pos += 8;
      }, e.prototype.writeU64 = function (e) {
        this.ensureBufferSizeToWrite(8), function (e, t, r) {
          var n = r / 4294967296,
              i = r;
          e.setUint32(t, n), e.setUint32(t + 4, i);
        }(this.view, this.pos, e), this.pos += 8;
      }, e.prototype.writeI64 = function (e) {
        this.ensureBufferSizeToWrite(8), p(this.view, this.pos, e), this.pos += 8;
      }, e;
    }(),
        D = {};

    function P(e, t) {
      void 0 === t && (t = D);
      var r = new C(t.extensionCodec, t.maxDepth, t.initialBufferSize, t.sortKeys, t.forceFloat32);
      return r.encode(e, 1), r.getUint8Array();
    }

    function j(e) {
      return (e < 0 ? "-" : "") + "0x" + Math.abs(e).toString(16).padStart(2, "0");
    }

    var F = 16,
        W = 16,
        O = function () {
      function e(e, t) {
        void 0 === e && (e = F), void 0 === t && (t = W), this.maxKeyLength = e, this.maxLengthPerKey = t, this.caches = [];

        for (var r = 0; r < this.maxKeyLength; r++) {
          this.caches.push([]);
        }
      }

      return e.prototype.canBeCached = function (e) {
        return e > 0 && e <= this.maxKeyLength;
      }, e.prototype.get = function (e, t, r) {
        var n = this.caches[r - 1],
            i = n.length;

        e: for (var o = 0; o < i; o++) {
          for (var s = n[o], a = s.bytes, h = 0; h < r; h++) {
            if (a[h] !== e[t + h]) continue e;
          }

          return s.value;
        }

        return null;
      }, e.prototype.store = function (e, t) {
        var r = this.caches[e.length - 1],
            n = {
          bytes: e,
          value: t
        };
        r.length >= this.maxLengthPerKey ? r[Math.random() * r.length | 0] = n : r.push(n);
      }, e.prototype.decode = function (e, t, r) {
        var n = this.get(e, t, r);
        if (n) return n;
        var i = c(e, t, r),
            o = Uint8Array.prototype.slice.call(e, t, t + r);
        return this.store(o, i), i;
      }, e;
    }(),
        K = function K(e, t, r, n) {
      return new (r || (r = Promise))(function (i, o) {
        function s(e) {
          try {
            h(n.next(e));
          } catch (e) {
            o(e);
          }
        }

        function a(e) {
          try {
            h(n["throw"](e));
          } catch (e) {
            o(e);
          }
        }

        function h(e) {
          var t;
          e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function (e) {
            e(t);
          })).then(s, a);
        }

        h((n = n.apply(e, t || [])).next());
      });
    },
        _ = function _(e, t) {
      var r,
          n,
          i,
          o,
          s = {
        label: 0,
        sent: function sent() {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: []
      };
      return o = {
        next: a(0),
        "throw": a(1),
        "return": a(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;

      function a(o) {
        return function (a) {
          return function (o) {
            if (r) throw new TypeError("Generator is already executing.");

            for (; s;) {
              try {
                if (r = 1, n && (i = 2 & o[0] ? n["return"] : o[0] ? n["throw"] || ((i = n["return"]) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;

                switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;

                  case 4:
                    return s.label++, {
                      value: o[1],
                      done: !1
                    };

                  case 5:
                    s.label++, n = o[1], o = [0];
                    continue;

                  case 7:
                    o = s.ops.pop(), s.trys.pop();
                    continue;

                  default:
                    if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                      s = 0;
                      continue;
                    }

                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                      s.label = o[1];
                      break;
                    }

                    if (6 === o[0] && s.label < i[1]) {
                      s.label = i[1], i = o;
                      break;
                    }

                    if (i && s.label < i[2]) {
                      s.label = i[2], s.ops.push(o);
                      break;
                    }

                    i[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }

                o = t.call(e, s);
              } catch (e) {
                o = [6, e], n = 0;
              } finally {
                r = i = 0;
              }
            }

            if (5 & o[0]) throw o[1];
            return {
              value: o[0] ? o[1] : void 0,
              done: !0
            };
          }([o, a]);
        };
      }
    },
        V = function V(e) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t,
          r = e[Symbol.asyncIterator];
      return r ? r.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function () {
        return this;
      }, t);

      function n(r) {
        t[r] = e[r] && function (t) {
          return new Promise(function (n, i) {
            (function (e, t, r, n) {
              Promise.resolve(n).then(function (t) {
                e({
                  value: t,
                  done: r
                });
              }, t);
            })(n, i, (t = e[r](t)).done, t.value);
          });
        };
      }
    },
        N = function N(e) {
      return this instanceof N ? (this.v = e, this) : new N(e);
    },
        R = function R(e, t, r) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n,
          i = r.apply(e, t || []),
          o = [];
      return n = {}, s("next"), s("throw"), s("return"), n[Symbol.asyncIterator] = function () {
        return this;
      }, n;

      function s(e) {
        i[e] && (n[e] = function (t) {
          return new Promise(function (r, n) {
            o.push([e, t, r, n]) > 1 || a(e, t);
          });
        });
      }

      function a(e, t) {
        try {
          (r = i[e](t)).value instanceof N ? Promise.resolve(r.value.v).then(h, u) : c(o[0][2], r);
        } catch (e) {
          c(o[0][3], e);
        }

        var r;
      }

      function h(e) {
        a("next", e);
      }

      function u(e) {
        a("throw", e);
      }

      function c(e, t) {
        e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
      }
    },
        H = -1,
        G = new DataView(new ArrayBuffer(0)),
        X = new Uint8Array(G.buffer),
        q = function () {
      try {
        G.getInt8(0);
      } catch (e) {
        return e.constructor;
      }

      throw new Error("never reached");
    }(),
        J = new q("Insufficient data"),
        Q = 4294967295,
        Y = new O(),
        Z = function () {
      function e(e, t, r, n, i, o, s) {
        void 0 === e && (e = S.defaultCodec), void 0 === t && (t = Q), void 0 === r && (r = Q), void 0 === n && (n = Q), void 0 === i && (i = Q), void 0 === o && (o = Q), void 0 === s && (s = Y), this.extensionCodec = e, this.maxStrLength = t, this.maxBinLength = r, this.maxArrayLength = n, this.maxMapLength = i, this.maxExtLength = o, this.cachedKeyDecoder = s, this.totalPos = 0, this.pos = 0, this.view = G, this.bytes = X, this.headByte = H, this.stack = [];
      }

      return e.prototype.setBuffer = function (e) {
        this.bytes = E(e), this.view = function (e) {
          if (e instanceof ArrayBuffer) return new DataView(e);
          var t = E(e);
          return new DataView(t.buffer, t.byteOffset, t.byteLength);
        }(this.bytes), this.pos = 0;
      }, e.prototype.appendBuffer = function (e) {
        if (this.headByte !== H || this.hasRemaining()) {
          var t = this.bytes.subarray(this.pos),
              r = E(e),
              n = new Uint8Array(t.length + r.length);
          n.set(t), n.set(r, t.length), this.setBuffer(n);
        } else this.setBuffer(e);
      }, e.prototype.hasRemaining = function (e) {
        return void 0 === e && (e = 1), this.view.byteLength - this.pos >= e;
      }, e.prototype.createNoExtraBytesError = function (e) {
        var t = this.view,
            r = this.pos;
        return new RangeError("Extra " + (t.byteLength - r) + " byte(s) found at buffer[" + e + "]");
      }, e.prototype.decodeSingleSync = function () {
        var e = this.decodeSync();
        if (this.hasRemaining()) throw this.createNoExtraBytesError(this.pos);
        return e;
      }, e.prototype.decodeSingleAsync = function (e) {
        var t, r, n, i;
        return K(this, void 0, void 0, function () {
          var o, s, a, h, u, c, f, l;
          return _(this, function (p) {
            switch (p.label) {
              case 0:
                o = !1, p.label = 1;

              case 1:
                p.trys.push([1, 6, 7, 12]), t = V(e), p.label = 2;

              case 2:
                return [4, t.next()];

              case 3:
                if ((r = p.sent()).done) return [3, 5];
                if (a = r.value, o) throw this.createNoExtraBytesError(this.totalPos);
                this.appendBuffer(a);

                try {
                  s = this.decodeSync(), o = !0;
                } catch (e) {
                  if (!(e instanceof q)) throw e;
                }

                this.totalPos += this.pos, p.label = 4;

              case 4:
                return [3, 2];

              case 5:
                return [3, 12];

              case 6:
                return h = p.sent(), n = {
                  error: h
                }, [3, 12];

              case 7:
                return p.trys.push([7,, 10, 11]), r && !r.done && (i = t["return"]) ? [4, i.call(t)] : [3, 9];

              case 8:
                p.sent(), p.label = 9;

              case 9:
                return [3, 11];

              case 10:
                if (n) throw n.error;
                return [7];

              case 11:
                return [7];

              case 12:
                if (o) {
                  if (this.hasRemaining()) throw this.createNoExtraBytesError(this.totalPos);
                  return [2, s];
                }

                throw c = (u = this).headByte, f = u.pos, l = u.totalPos, new RangeError("Insufficient data in parcing " + j(c) + " at " + l + " (" + f + " in the current buffer)");
            }
          });
        });
      }, e.prototype.decodeArrayStream = function (e) {
        return this.decodeMultiAsync(e, !0);
      }, e.prototype.decodeStream = function (e) {
        return this.decodeMultiAsync(e, !1);
      }, e.prototype.decodeMultiAsync = function (e, t) {
        return R(this, arguments, function () {
          var r, n, i, o, s, a, h, u, c;
          return _(this, function (f) {
            switch (f.label) {
              case 0:
                r = t, n = -1, f.label = 1;

              case 1:
                f.trys.push([1, 13, 14, 19]), i = V(e), f.label = 2;

              case 2:
                return [4, N(i.next())];

              case 3:
                if ((o = f.sent()).done) return [3, 12];
                if (s = o.value, t && 0 === n) throw this.createNoExtraBytesError(this.totalPos);
                this.appendBuffer(s), r && (n = this.readArraySize(), r = !1, this.complete()), f.label = 4;

              case 4:
                f.trys.push([4, 9,, 10]), f.label = 5;

              case 5:
                return [4, N(this.decodeSync())];

              case 6:
                return [4, f.sent()];

              case 7:
                return f.sent(), 0 == --n ? [3, 8] : [3, 5];

              case 8:
                return [3, 10];

              case 9:
                if (!((a = f.sent()) instanceof q)) throw a;
                return [3, 10];

              case 10:
                this.totalPos += this.pos, f.label = 11;

              case 11:
                return [3, 2];

              case 12:
                return [3, 19];

              case 13:
                return h = f.sent(), u = {
                  error: h
                }, [3, 19];

              case 14:
                return f.trys.push([14,, 17, 18]), o && !o.done && (c = i["return"]) ? [4, N(c.call(i))] : [3, 16];

              case 15:
                f.sent(), f.label = 16;

              case 16:
                return [3, 18];

              case 17:
                if (u) throw u.error;
                return [7];

              case 18:
                return [7];

              case 19:
                return [2];
            }
          });
        });
      }, e.prototype.decodeSync = function () {
        e: for (;;) {
          var e = this.readHeadByte(),
              t = void 0;
          if (e >= 224) t = e - 256;else if (e < 192) {
            if (e < 128) t = e;else if (e < 144) {
              if (0 !== (n = e - 128)) {
                this.pushMapState(n), this.complete();
                continue e;
              }

              t = {};
            } else if (e < 160) {
              if (0 !== (n = e - 144)) {
                this.pushArrayState(n), this.complete();
                continue e;
              }

              t = [];
            } else {
              var r = e - 160;
              t = this.decodeUtf8String(r, 0);
            }
          } else if (192 === e) t = null;else if (194 === e) t = !1;else if (195 === e) t = !0;else if (202 === e) t = this.readF32();else if (203 === e) t = this.readF64();else if (204 === e) t = this.readU8();else if (205 === e) t = this.readU16();else if (206 === e) t = this.readU32();else if (207 === e) t = this.readU64();else if (208 === e) t = this.readI8();else if (209 === e) t = this.readI16();else if (210 === e) t = this.readI32();else if (211 === e) t = this.readI64();else if (217 === e) {
            r = this.lookU8();
            t = this.decodeUtf8String(r, 1);
          } else if (218 === e) {
            r = this.lookU16();
            t = this.decodeUtf8String(r, 2);
          } else if (219 === e) {
            r = this.lookU32();
            t = this.decodeUtf8String(r, 4);
          } else if (220 === e) {
            if (0 !== (n = this.readU16())) {
              this.pushArrayState(n), this.complete();
              continue e;
            }

            t = [];
          } else if (221 === e) {
            if (0 !== (n = this.readU32())) {
              this.pushArrayState(n), this.complete();
              continue e;
            }

            t = [];
          } else if (222 === e) {
            if (0 !== (n = this.readU16())) {
              this.pushMapState(n), this.complete();
              continue e;
            }

            t = {};
          } else if (223 === e) {
            if (0 !== (n = this.readU32())) {
              this.pushMapState(n), this.complete();
              continue e;
            }

            t = {};
          } else if (196 === e) {
            var n = this.lookU8();
            t = this.decodeBinary(n, 1);
          } else if (197 === e) {
            n = this.lookU16();
            t = this.decodeBinary(n, 2);
          } else if (198 === e) {
            n = this.lookU32();
            t = this.decodeBinary(n, 4);
          } else if (212 === e) t = this.decodeExtension(1, 0);else if (213 === e) t = this.decodeExtension(2, 0);else if (214 === e) t = this.decodeExtension(4, 0);else if (215 === e) t = this.decodeExtension(8, 0);else if (216 === e) t = this.decodeExtension(16, 0);else if (199 === e) {
            n = this.lookU8();
            t = this.decodeExtension(n, 1);
          } else if (200 === e) {
            n = this.lookU16();
            t = this.decodeExtension(n, 2);
          } else {
            if (201 !== e) throw new Error("Unrecognized type byte: " + j(e));
            n = this.lookU32();
            t = this.decodeExtension(n, 4);
          }
          this.complete();

          for (var i = this.stack; i.length > 0;) {
            var o = i[i.length - 1];

            if (0 === o.type) {
              if (o.array[o.position] = t, o.position++, o.position !== o.size) continue e;
              i.pop(), t = o.array;
            } else {
              if (1 === o.type) {
                if (s = void 0, "string" !== (s = typeof t) && "number" !== s) throw new Error("The type of key must be string or number but " + typeof t);
                o.key = t, o.type = 2;
                continue e;
              }

              if (2 === o.type) {
                if (o.map[o.key] = t, o.readCount++, o.readCount !== o.size) {
                  o.key = null, o.type = 1;
                  continue e;
                }

                i.pop(), t = o.map;
              }
            }
          }

          return t;
        }

        var s;
      }, e.prototype.readHeadByte = function () {
        return this.headByte === H && (this.headByte = this.readU8()), this.headByte;
      }, e.prototype.complete = function () {
        this.headByte = H;
      }, e.prototype.readArraySize = function () {
        var e = this.readHeadByte();

        switch (e) {
          case 220:
            return this.readU16();

          case 221:
            return this.readU32();

          default:
            if (e < 160) return e - 144;
            throw new Error("Unrecognized array type byte: " + j(e));
        }
      }, e.prototype.pushMapState = function (e) {
        if (e > this.maxMapLength) throw new Error("Max length exceeded: map length (" + e + ") > maxMapLengthLength (" + this.maxMapLength + ")");
        this.stack.push({
          type: 1,
          size: e,
          key: null,
          readCount: 0,
          map: {}
        });
      }, e.prototype.pushArrayState = function (e) {
        if (e > this.maxArrayLength) throw new Error("Max length exceeded: array length (" + e + ") > maxArrayLength (" + this.maxArrayLength + ")");
        this.stack.push({
          type: 0,
          size: e,
          array: new Array(e),
          position: 0
        });
      }, e.prototype.decodeUtf8String = function (e, t) {
        if (e > this.maxStrLength) throw new Error("Max length exceeded: UTF-8 byte length (" + e + ") > maxStrLength (" + this.maxStrLength + ")");
        if (this.bytes.byteLength < this.pos + t + e) throw J;
        var r,
            n = this.pos + t;
        return r = this.cachedKeyDecoder && this.stateIsMapKey() && this.cachedKeyDecoder.canBeCached(e) ? this.cachedKeyDecoder.decode(this.bytes, n, e) : o && e > 200 ? function (e, t, r) {
          var n = e.subarray(t, t + r);
          return f.decode(n);
        }(this.bytes, n, e) : A && e > 1024 ? I(this.bytes, n, e) : c(this.bytes, n, e), this.pos += t + e, r;
      }, e.prototype.stateIsMapKey = function () {
        return this.stack.length > 0 && 1 === this.stack[this.stack.length - 1].type;
      }, e.prototype.decodeBinary = function (e, t) {
        if (e > this.maxBinLength) throw new Error("Max length exceeded: bin length (" + e + ") > maxBinLength (" + this.maxBinLength + ")");
        if (!this.hasRemaining(e + t)) throw J;
        var r = this.pos + t,
            n = this.bytes.subarray(r, r + e);
        return this.pos += t + e, n;
      }, e.prototype.decodeExtension = function (e, t) {
        if (e > this.maxExtLength) throw new Error("Max length exceeded: ext length (" + e + ") > maxExtLength (" + this.maxExtLength + ")");
        var r = this.view.getInt8(this.pos + t),
            n = this.decodeBinary(e, t + 1);
        return this.extensionCodec.decode(n, r);
      }, e.prototype.lookU8 = function () {
        return this.view.getUint8(this.pos);
      }, e.prototype.lookU16 = function () {
        return this.view.getUint16(this.pos);
      }, e.prototype.lookU32 = function () {
        return this.view.getUint32(this.pos);
      }, e.prototype.readU8 = function () {
        var e = this.view.getUint8(this.pos);
        return this.pos++, e;
      }, e.prototype.readI8 = function () {
        var e = this.view.getInt8(this.pos);
        return this.pos++, e;
      }, e.prototype.readU16 = function () {
        var e = this.view.getUint16(this.pos);
        return this.pos += 2, e;
      }, e.prototype.readI16 = function () {
        var e = this.view.getInt16(this.pos);
        return this.pos += 2, e;
      }, e.prototype.readU32 = function () {
        var e = this.view.getUint32(this.pos);
        return this.pos += 4, e;
      }, e.prototype.readI32 = function () {
        var e = this.view.getInt32(this.pos);
        return this.pos += 4, e;
      }, e.prototype.readU64 = function () {
        var e,
            t,
            r = (e = this.view, t = this.pos, 4294967296 * e.getUint32(t) + e.getUint32(t + 4));
        return this.pos += 8, r;
      }, e.prototype.readI64 = function () {
        var e = d(this.view, this.pos);
        return this.pos += 8, e;
      }, e.prototype.readF32 = function () {
        var e = this.view.getFloat32(this.pos);
        return this.pos += 4, e;
      }, e.prototype.readF64 = function () {
        var e = this.view.getFloat64(this.pos);
        return this.pos += 8, e;
      }, e;
    }(),
        $ = {};

    function ee(e, t) {
      void 0 === t && (t = $);
      var r = new Z(t.extensionCodec, t.maxStrLength, t.maxBinLength, t.maxArrayLength, t.maxMapLength, t.maxExtLength);
      return r.setBuffer(e), r.decodeSingleSync();
    }

    var te = function te(e, t) {
      var r,
          n,
          i,
          o,
          s = {
        label: 0,
        sent: function sent() {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: []
      };
      return o = {
        next: a(0),
        "throw": a(1),
        "return": a(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;

      function a(o) {
        return function (a) {
          return function (o) {
            if (r) throw new TypeError("Generator is already executing.");

            for (; s;) {
              try {
                if (r = 1, n && (i = 2 & o[0] ? n["return"] : o[0] ? n["throw"] || ((i = n["return"]) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;

                switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;

                  case 4:
                    return s.label++, {
                      value: o[1],
                      done: !1
                    };

                  case 5:
                    s.label++, n = o[1], o = [0];
                    continue;

                  case 7:
                    o = s.ops.pop(), s.trys.pop();
                    continue;

                  default:
                    if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                      s = 0;
                      continue;
                    }

                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                      s.label = o[1];
                      break;
                    }

                    if (6 === o[0] && s.label < i[1]) {
                      s.label = i[1], i = o;
                      break;
                    }

                    if (i && s.label < i[2]) {
                      s.label = i[2], s.ops.push(o);
                      break;
                    }

                    i[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }

                o = t.call(e, s);
              } catch (e) {
                o = [6, e], n = 0;
              } finally {
                r = i = 0;
              }
            }

            if (5 & o[0]) throw o[1];
            return {
              value: o[0] ? o[1] : void 0,
              done: !0
            };
          }([o, a]);
        };
      }
    },
        re = function re(e) {
      return this instanceof re ? (this.v = e, this) : new re(e);
    },
        ne = function ne(e, t, r) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n,
          i = r.apply(e, t || []),
          o = [];
      return n = {}, s("next"), s("throw"), s("return"), n[Symbol.asyncIterator] = function () {
        return this;
      }, n;

      function s(e) {
        i[e] && (n[e] = function (t) {
          return new Promise(function (r, n) {
            o.push([e, t, r, n]) > 1 || a(e, t);
          });
        });
      }

      function a(e, t) {
        try {
          (r = i[e](t)).value instanceof re ? Promise.resolve(r.value.v).then(h, u) : c(o[0][2], r);
        } catch (e) {
          c(o[0][3], e);
        }

        var r;
      }

      function h(e) {
        a("next", e);
      }

      function u(e) {
        a("throw", e);
      }

      function c(e, t) {
        e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
      }
    };

    function ie(e) {
      return null != e[Symbol.asyncIterator] ? e : function (e) {
        return ne(this, arguments, function () {
          var t, r, n, i;
          return te(this, function (o) {
            switch (o.label) {
              case 0:
                t = e.getReader(), o.label = 1;

              case 1:
                o.trys.push([1,, 9, 10]), o.label = 2;

              case 2:
                return [4, re(t.read())];

              case 3:
                return r = o.sent(), n = r.done, i = r.value, n ? [4, re(void 0)] : [3, 5];

              case 4:
                return [2, o.sent()];

              case 5:
                return [4, re(i)];

              case 6:
                return [4, o.sent()];

              case 7:
                return o.sent(), [3, 2];

              case 8:
                return [3, 10];

              case 9:
                return t.releaseLock(), [7];

              case 10:
                return [2];
            }
          });
        });
      }(e);
    }

    var oe = function oe(e, t, r, n) {
      return new (r || (r = Promise))(function (i, o) {
        function s(e) {
          try {
            h(n.next(e));
          } catch (e) {
            o(e);
          }
        }

        function a(e) {
          try {
            h(n["throw"](e));
          } catch (e) {
            o(e);
          }
        }

        function h(e) {
          var t;
          e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function (e) {
            e(t);
          })).then(s, a);
        }

        h((n = n.apply(e, t || [])).next());
      });
    },
        se = function se(e, t) {
      var r,
          n,
          i,
          o,
          s = {
        label: 0,
        sent: function sent() {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: []
      };
      return o = {
        next: a(0),
        "throw": a(1),
        "return": a(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;

      function a(o) {
        return function (a) {
          return function (o) {
            if (r) throw new TypeError("Generator is already executing.");

            for (; s;) {
              try {
                if (r = 1, n && (i = 2 & o[0] ? n["return"] : o[0] ? n["throw"] || ((i = n["return"]) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;

                switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;

                  case 4:
                    return s.label++, {
                      value: o[1],
                      done: !1
                    };

                  case 5:
                    s.label++, n = o[1], o = [0];
                    continue;

                  case 7:
                    o = s.ops.pop(), s.trys.pop();
                    continue;

                  default:
                    if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                      s = 0;
                      continue;
                    }

                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                      s.label = o[1];
                      break;
                    }

                    if (6 === o[0] && s.label < i[1]) {
                      s.label = i[1], i = o;
                      break;
                    }

                    if (i && s.label < i[2]) {
                      s.label = i[2], s.ops.push(o);
                      break;
                    }

                    i[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }

                o = t.call(e, s);
              } catch (e) {
                o = [6, e], n = 0;
              } finally {
                r = i = 0;
              }
            }

            if (5 & o[0]) throw o[1];
            return {
              value: o[0] ? o[1] : void 0,
              done: !0
            };
          }([o, a]);
        };
      }
    };

    function ae(e, t) {
      return void 0 === t && (t = $), oe(this, void 0, void 0, function () {
        var r;
        return se(this, function (n) {
          return r = ie(e), [2, new Z(t.extensionCodec, t.maxStrLength, t.maxBinLength, t.maxArrayLength, t.maxMapLength, t.maxExtLength).decodeSingleAsync(r)];
        });
      });
    }

    function he(e, t) {
      void 0 === t && (t = $);
      var r = ie(e);
      return new Z(t.extensionCodec, t.maxStrLength, t.maxBinLength, t.maxArrayLength, t.maxMapLength, t.maxExtLength).decodeArrayStream(r);
    }

    function ue(e, t) {
      void 0 === t && (t = $);
      var r = ie(e);
      return new Z(t.extensionCodec, t.maxStrLength, t.maxBinLength, t.maxArrayLength, t.maxMapLength, t.maxExtLength).decodeStream(r);
    }

    r.d(t, "encode", function () {
      return P;
    }), r.d(t, "decode", function () {
      return ee;
    }), r.d(t, "decodeAsync", function () {
      return ae;
    }), r.d(t, "decodeArrayStream", function () {
      return he;
    }), r.d(t, "decodeStream", function () {
      return ue;
    }), r.d(t, "Decoder", function () {
      return Z;
    }), r.d(t, "Encoder", function () {
      return C;
    }), r.d(t, "ExtensionCodec", function () {
      return S;
    }), r.d(t, "ExtData", function () {
      return l;
    }), r.d(t, "EXT_TIMESTAMP", function () {
      return -1;
    }), r.d(t, "encodeDateToTimeSpec", function () {
      return g;
    }), r.d(t, "encodeTimeSpecToTimestamp", function () {
      return v;
    }), r.d(t, "decodeTimestampToTimeSpec", function () {
      return m;
    }), r.d(t, "encodeTimestampExtension", function () {
      return b;
    }), r.d(t, "decodeTimestampExtension", function () {
      return U;
    }), r.d(t, "__WASM_AVAILABLE", function () {
      return A;
    });
  }]);
}); //# sourceMappingURL=msgpack.min.js.map

cc._RF.pop();