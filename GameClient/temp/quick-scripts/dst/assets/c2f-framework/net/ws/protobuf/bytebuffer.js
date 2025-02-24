
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/net/ws/protobuf/bytebuffer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a256bYJhZFN2pzpBH3VXShr', 'bytebuffer');
// c2f-framework/net/ws/protobuf/bytebuffer.js

"use strict";

/*
 Copyright 2013-2014 Daniel Wirtz <dcode@dcode.io>
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/**
 * @license bytebuffer.js (c) 2015 Daniel Wirtz <dcode@dcode.io>
 * Backing buffer: ArrayBuffer, Accessor: Uint8Array
 * Released under the Apache License, Version 2.0
 * see: https://github.com/dcodeIO/bytebuffer.js for details
 */
(function (global, factory) {
  /* AMD */
  if (typeof define === 'function' && define["amd"]) define(["long"], factory);
  /* CommonJS */
  else if (typeof require === 'function' && typeof module === "object" && module && module["exports"]) module['exports'] = function () {
    var Long;

    try {
      Long = require("long");
    } catch (e) {}

    return factory(Long);
  }();
  /* Global */
  else (global["dcodeIO"] = global["dcodeIO"] || {})["ByteBuffer"] = factory(global["dcodeIO"]["Long"]);
})(void 0, function (Long) {
  "use strict";
  /**
   * Constructs a new ByteBuffer.
   * @class The swiss army knife for binary data in JavaScript.
   * @exports ByteBuffer
   * @constructor
   * @param {number=} capacity Initial capacity. Defaults to {@link ByteBuffer.DEFAULT_CAPACITY}.
   * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
   *  {@link ByteBuffer.DEFAULT_ENDIAN}.
   * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
   *  {@link ByteBuffer.DEFAULT_NOASSERT}.
   * @expose
   */

  var ByteBuffer = function ByteBuffer(capacity, littleEndian, noAssert) {
    if (typeof capacity === 'undefined') capacity = ByteBuffer.DEFAULT_CAPACITY;
    if (typeof littleEndian === 'undefined') littleEndian = ByteBuffer.DEFAULT_ENDIAN;
    if (typeof noAssert === 'undefined') noAssert = ByteBuffer.DEFAULT_NOASSERT;

    if (!noAssert) {
      capacity = capacity | 0;
      if (capacity < 0) throw RangeError("Illegal capacity");
      littleEndian = !!littleEndian;
      noAssert = !!noAssert;
    }
    /**
     * Backing ArrayBuffer.
     * @type {!ArrayBuffer}
     * @expose
     */


    this.buffer = capacity === 0 ? EMPTY_BUFFER : new ArrayBuffer(capacity);
    /**
     * Uint8Array utilized to manipulate the backing buffer. Becomes `null` if the backing buffer has a capacity of `0`.
     * @type {?Uint8Array}
     * @expose
     */

    this.view = capacity === 0 ? null : new Uint8Array(this.buffer);
    /**
     * Absolute read/write offset.
     * @type {number}
     * @expose
     * @see ByteBuffer#flip
     * @see ByteBuffer#clear
     */

    this.offset = 0;
    /**
     * Marked offset.
     * @type {number}
     * @expose
     * @see ByteBuffer#mark
     * @see ByteBuffer#reset
     */

    this.markedOffset = -1;
    /**
     * Absolute limit of the contained data. Set to the backing buffer's capacity upon allocation.
     * @type {number}
     * @expose
     * @see ByteBuffer#flip
     * @see ByteBuffer#clear
     */

    this.limit = capacity;
    /**
     * Whether to use little endian byte order, defaults to `false` for big endian.
     * @type {boolean}
     * @expose
     */

    this.littleEndian = littleEndian;
    /**
     * Whether to skip assertions of offsets and values, defaults to `false`.
     * @type {boolean}
     * @expose
     */

    this.noAssert = noAssert;
  };
  /**
   * ByteBuffer version.
   * @type {string}
   * @const
   * @expose
   */


  ByteBuffer.VERSION = "5.0.1";
  /**
   * Little endian constant that can be used instead of its boolean value. Evaluates to `true`.
   * @type {boolean}
   * @const
   * @expose
   */

  ByteBuffer.LITTLE_ENDIAN = true;
  /**
   * Big endian constant that can be used instead of its boolean value. Evaluates to `false`.
   * @type {boolean}
   * @const
   * @expose
   */

  ByteBuffer.BIG_ENDIAN = false;
  /**
   * Default initial capacity of `16`.
   * @type {number}
   * @expose
   */

  ByteBuffer.DEFAULT_CAPACITY = 16;
  /**
   * Default endianess of `false` for big endian.
   * @type {boolean}
   * @expose
   */

  ByteBuffer.DEFAULT_ENDIAN = ByteBuffer.BIG_ENDIAN;
  /**
   * Default no assertions flag of `false`.
   * @type {boolean}
   * @expose
   */

  ByteBuffer.DEFAULT_NOASSERT = false;
  /**
   * A `Long` class for representing a 64-bit two's-complement integer value. May be `null` if Long.js has not been loaded
   *  and int64 support is not available.
   * @type {?Long}
   * @const
   * @see https://github.com/dcodeIO/long.js
   * @expose
   */

  ByteBuffer.Long = Long || null;
  /**
   * @alias ByteBuffer.prototype
   * @inner
   */

  var ByteBufferPrototype = ByteBuffer.prototype;
  /**
   * An indicator used to reliably determine if an object is a ByteBuffer or not.
   * @type {boolean}
   * @const
   * @expose
   * @private
   */

  ByteBufferPrototype.__isByteBuffer__;
  Object.defineProperty(ByteBufferPrototype, "__isByteBuffer__", {
    value: true,
    enumerable: false,
    configurable: false
  }); // helpers

  /**
   * @type {!ArrayBuffer}
   * @inner
   */

  var EMPTY_BUFFER = new ArrayBuffer(0);
  /**
   * String.fromCharCode reference for compile-time renaming.
   * @type {function(...number):string}
   * @inner
   */

  var stringFromCharCode = String.fromCharCode;
  /**
   * Creates a source function for a string.
   * @param {string} s String to read from
   * @returns {function():number|null} Source function returning the next char code respectively `null` if there are
   *  no more characters left.
   * @throws {TypeError} If the argument is invalid
   * @inner
   */

  function stringSource(s) {
    var i = 0;
    return function () {
      return i < s.length ? s.charCodeAt(i++) : null;
    };
  }
  /**
   * Creates a destination function for a string.
   * @returns {function(number=):undefined|string} Destination function successively called with the next char code.
   *  Returns the final string when called without arguments.
   * @inner
   */


  function stringDestination() {
    var cs = [],
        ps = [];
    return function () {
      if (arguments.length === 0) return ps.join('') + stringFromCharCode.apply(String, cs);
      if (cs.length + arguments.length > 1024) ps.push(stringFromCharCode.apply(String, cs)), cs.length = 0;
      Array.prototype.push.apply(cs, arguments);
    };
  }
  /**
   * Gets the accessor type.
   * @returns {Function} `Buffer` under node.js, `Uint8Array` respectively `DataView` in the browser (classes)
   * @expose
   */


  ByteBuffer.accessor = function () {
    return Uint8Array;
  };
  /**
   * Allocates a new ByteBuffer backed by a buffer of the specified capacity.
   * @param {number=} capacity Initial capacity. Defaults to {@link ByteBuffer.DEFAULT_CAPACITY}.
   * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
   *  {@link ByteBuffer.DEFAULT_ENDIAN}.
   * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
   *  {@link ByteBuffer.DEFAULT_NOASSERT}.
   * @returns {!ByteBuffer}
   * @expose
   */


  ByteBuffer.allocate = function (capacity, littleEndian, noAssert) {
    return new ByteBuffer(capacity, littleEndian, noAssert);
  };
  /**
   * Concatenates multiple ByteBuffers into one.
   * @param {!Array.<!ByteBuffer|!ArrayBuffer|!Uint8Array|string>} buffers Buffers to concatenate
   * @param {(string|boolean)=} encoding String encoding if `buffers` contains a string ("base64", "hex", "binary",
   *  defaults to "utf8")
   * @param {boolean=} littleEndian Whether to use little or big endian byte order for the resulting ByteBuffer. Defaults
   *  to {@link ByteBuffer.DEFAULT_ENDIAN}.
   * @param {boolean=} noAssert Whether to skip assertions of offsets and values for the resulting ByteBuffer. Defaults to
   *  {@link ByteBuffer.DEFAULT_NOASSERT}.
   * @returns {!ByteBuffer} Concatenated ByteBuffer
   * @expose
   */


  ByteBuffer.concat = function (buffers, encoding, littleEndian, noAssert) {
    if (typeof encoding === 'boolean' || typeof encoding !== 'string') {
      noAssert = littleEndian;
      littleEndian = encoding;
      encoding = undefined;
    }

    var capacity = 0;

    for (var i = 0, k = buffers.length, length; i < k; ++i) {
      if (!ByteBuffer.isByteBuffer(buffers[i])) buffers[i] = ByteBuffer.wrap(buffers[i], encoding);
      length = buffers[i].limit - buffers[i].offset;
      if (length > 0) capacity += length;
    }

    if (capacity === 0) return new ByteBuffer(0, littleEndian, noAssert);
    var bb = new ByteBuffer(capacity, littleEndian, noAssert),
        bi;
    i = 0;

    while (i < k) {
      bi = buffers[i++];
      length = bi.limit - bi.offset;
      if (length <= 0) continue;
      bb.view.set(bi.view.subarray(bi.offset, bi.limit), bb.offset);
      bb.offset += length;
    }

    bb.limit = bb.offset;
    bb.offset = 0;
    return bb;
  };
  /**
   * Tests if the specified type is a ByteBuffer.
   * @param {*} bb ByteBuffer to test
   * @returns {boolean} `true` if it is a ByteBuffer, otherwise `false`
   * @expose
   */


  ByteBuffer.isByteBuffer = function (bb) {
    return (bb && bb["__isByteBuffer__"]) === true;
  };
  /**
   * Gets the backing buffer type.
   * @returns {Function} `Buffer` under node.js, `ArrayBuffer` in the browser (classes)
   * @expose
   */


  ByteBuffer.type = function () {
    return ArrayBuffer;
  };
  /**
   * Wraps a buffer or a string. Sets the allocated ByteBuffer's {@link ByteBuffer#offset} to `0` and its
   *  {@link ByteBuffer#limit} to the length of the wrapped data.
   * @param {!ByteBuffer|!ArrayBuffer|!Uint8Array|string|!Array.<number>} buffer Anything that can be wrapped
   * @param {(string|boolean)=} encoding String encoding if `buffer` is a string ("base64", "hex", "binary", defaults to
   *  "utf8")
   * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
   *  {@link ByteBuffer.DEFAULT_ENDIAN}.
   * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
   *  {@link ByteBuffer.DEFAULT_NOASSERT}.
   * @returns {!ByteBuffer} A ByteBuffer wrapping `buffer`
   * @expose
   */


  ByteBuffer.wrap = function (buffer, encoding, littleEndian, noAssert) {
    if (typeof encoding !== 'string') {
      noAssert = littleEndian;
      littleEndian = encoding;
      encoding = undefined;
    }

    if (typeof buffer === 'string') {
      if (typeof encoding === 'undefined') encoding = "utf8";

      switch (encoding) {
        case "base64":
          return ByteBuffer.fromBase64(buffer, littleEndian);

        case "hex":
          return ByteBuffer.fromHex(buffer, littleEndian);

        case "binary":
          return ByteBuffer.fromBinary(buffer, littleEndian);

        case "utf8":
          return ByteBuffer.fromUTF8(buffer, littleEndian);

        case "debug":
          return ByteBuffer.fromDebug(buffer, littleEndian);

        default:
          throw Error("Unsupported encoding: " + encoding);
      }
    }

    if (buffer === null || typeof buffer !== 'object') throw TypeError("Illegal buffer");
    var bb;

    if (ByteBuffer.isByteBuffer(buffer)) {
      bb = ByteBufferPrototype.clone.call(buffer);
      bb.markedOffset = -1;
      return bb;
    }

    if (buffer instanceof Uint8Array) {
      // Extract ArrayBuffer from Uint8Array
      bb = new ByteBuffer(0, littleEndian, noAssert);

      if (buffer.length > 0) {
        // Avoid references to more than one EMPTY_BUFFER
        bb.buffer = buffer.buffer;
        bb.offset = buffer.byteOffset;
        bb.limit = buffer.byteOffset + buffer.byteLength;
        bb.view = new Uint8Array(buffer.buffer);
      }
    } else if (buffer instanceof ArrayBuffer) {
      // Reuse ArrayBuffer
      bb = new ByteBuffer(0, littleEndian, noAssert);

      if (buffer.byteLength > 0) {
        bb.buffer = buffer;
        bb.offset = 0;
        bb.limit = buffer.byteLength;
        bb.view = buffer.byteLength > 0 ? new Uint8Array(buffer) : null;
      }
    } else if (Object.prototype.toString.call(buffer) === "[object Array]") {
      // Create from octets
      bb = new ByteBuffer(buffer.length, littleEndian, noAssert);
      bb.limit = buffer.length;

      for (var i = 0; i < buffer.length; ++i) {
        bb.view[i] = buffer[i];
      }
    } else throw TypeError("Illegal buffer"); // Otherwise fail


    return bb;
  };
  /**
   * Writes the array as a bitset.
   * @param {Array<boolean>} value Array of booleans to write
   * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `length` if omitted.
   * @returns {!ByteBuffer}
   * @expose
   */


  ByteBufferPrototype.writeBitSet = function (value, offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (!(value instanceof Array)) throw TypeError("Illegal BitSet: Not an array");
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
    }

    var start = offset,
        bits = value.length,
        bytes = bits >> 3,
        bit = 0,
        k;
    offset += this.writeVarint32(bits, offset);

    while (bytes--) {
      k = !!value[bit++] & 1 | (!!value[bit++] & 1) << 1 | (!!value[bit++] & 1) << 2 | (!!value[bit++] & 1) << 3 | (!!value[bit++] & 1) << 4 | (!!value[bit++] & 1) << 5 | (!!value[bit++] & 1) << 6 | (!!value[bit++] & 1) << 7;
      this.writeByte(k, offset++);
    }

    if (bit < bits) {
      var m = 0;
      k = 0;

      while (bit < bits) {
        k = k | (!!value[bit++] & 1) << m++;
      }

      this.writeByte(k, offset++);
    }

    if (relative) {
      this.offset = offset;
      return this;
    }

    return offset - start;
  };
  /**
   * Reads a BitSet as an array of booleans.
   * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `length` if omitted.
   * @returns {Array<boolean>
   * @expose
   */


  ByteBufferPrototype.readBitSet = function (offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;
    var ret = this.readVarint32(offset),
        bits = ret.value,
        bytes = bits >> 3,
        bit = 0,
        value = [],
        k;
    offset += ret.length;

    while (bytes--) {
      k = this.readByte(offset++);
      value[bit++] = !!(k & 0x01);
      value[bit++] = !!(k & 0x02);
      value[bit++] = !!(k & 0x04);
      value[bit++] = !!(k & 0x08);
      value[bit++] = !!(k & 0x10);
      value[bit++] = !!(k & 0x20);
      value[bit++] = !!(k & 0x40);
      value[bit++] = !!(k & 0x80);
    }

    if (bit < bits) {
      var m = 0;
      k = this.readByte(offset++);

      while (bit < bits) {
        value[bit++] = !!(k >> m++ & 1);
      }
    }

    if (relative) {
      this.offset = offset;
    }

    return value;
  };
  /**
   * Reads the specified number of bytes.
   * @param {number} length Number of bytes to read
   * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `length` if omitted.
   * @returns {!ByteBuffer}
   * @expose
   */


  ByteBufferPrototype.readBytes = function (length, offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + length > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + length + ") <= " + this.buffer.byteLength);
    }

    var slice = this.slice(offset, offset + length);
    if (relative) this.offset += length;
    return slice;
  }; // types/ints/int8

  /**
   * Writes an 8bit signed integer.
   * @param {number} value Value to write
   * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
   * @returns {!ByteBuffer} this
   * @expose
   */


  ByteBufferPrototype.writeInt8 = function (value, offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof value !== 'number' || value % 1 !== 0) throw TypeError("Illegal value: " + value + " (not an integer)");
      value |= 0;
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
    }

    offset += 1;
    var capacity0 = this.buffer.byteLength;
    if (offset > capacity0) this.resize((capacity0 *= 2) > offset ? capacity0 : offset);
    offset -= 1;
    this.view[offset] = value;
    if (relative) this.offset += 1;
    return this;
  };
  /**
   * Writes an 8bit signed integer. This is an alias of {@link ByteBuffer#writeInt8}.
   * @function
   * @param {number} value Value to write
   * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
   * @returns {!ByteBuffer} this
   * @expose
   */


  ByteBufferPrototype.writeByte = ByteBufferPrototype.writeInt8;
  /**
   * Reads an 8bit signed integer.
   * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
   * @returns {number} Value read
   * @expose
   */

  ByteBufferPrototype.readInt8 = function (offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 1 + ") <= " + this.buffer.byteLength);
    }

    var value = this.view[offset];
    if ((value & 0x80) === 0x80) value = -(0xFF - value + 1); // Cast to signed

    if (relative) this.offset += 1;
    return value;
  };
  /**
   * Reads an 8bit signed integer. This is an alias of {@link ByteBuffer#readInt8}.
   * @function
   * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
   * @returns {number} Value read
   * @expose
   */


  ByteBufferPrototype.readByte = ByteBufferPrototype.readInt8;
  /**
   * Writes an 8bit unsigned integer.
   * @param {number} value Value to write
   * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
   * @returns {!ByteBuffer} this
   * @expose
   */

  ByteBufferPrototype.writeUint8 = function (value, offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof value !== 'number' || value % 1 !== 0) throw TypeError("Illegal value: " + value + " (not an integer)");
      value >>>= 0;
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
    }

    offset += 1;
    var capacity1 = this.buffer.byteLength;
    if (offset > capacity1) this.resize((capacity1 *= 2) > offset ? capacity1 : offset);
    offset -= 1;
    this.view[offset] = value;
    if (relative) this.offset += 1;
    return this;
  };
  /**
   * Writes an 8bit unsigned integer. This is an alias of {@link ByteBuffer#writeUint8}.
   * @function
   * @param {number} value Value to write
   * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
   * @returns {!ByteBuffer} this
   * @expose
   */


  ByteBufferPrototype.writeUInt8 = ByteBufferPrototype.writeUint8;
  /**
   * Reads an 8bit unsigned integer.
   * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
   * @returns {number} Value read
   * @expose
   */

  ByteBufferPrototype.readUint8 = function (offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 1 + ") <= " + this.buffer.byteLength);
    }

    var value = this.view[offset];
    if (relative) this.offset += 1;
    return value;
  };
  /**
   * Reads an 8bit unsigned integer. This is an alias of {@link ByteBuffer#readUint8}.
   * @function
   * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
   * @returns {number} Value read
   * @expose
   */


  ByteBufferPrototype.readUInt8 = ByteBufferPrototype.readUint8; // types/ints/int16

  /**
   * Writes a 16bit signed integer.
   * @param {number} value Value to write
   * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
   * @throws {TypeError} If `offset` or `value` is not a valid number
   * @throws {RangeError} If `offset` is out of bounds
   * @expose
   */

  ByteBufferPrototype.writeInt16 = function (value, offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof value !== 'number' || value % 1 !== 0) throw TypeError("Illegal value: " + value + " (not an integer)");
      value |= 0;
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
    }

    offset += 2;
    var capacity2 = this.buffer.byteLength;
    if (offset > capacity2) this.resize((capacity2 *= 2) > offset ? capacity2 : offset);
    offset -= 2;

    if (this.littleEndian) {
      this.view[offset + 1] = (value & 0xFF00) >>> 8;
      this.view[offset] = value & 0x00FF;
    } else {
      this.view[offset] = (value & 0xFF00) >>> 8;
      this.view[offset + 1] = value & 0x00FF;
    }

    if (relative) this.offset += 2;
    return this;
  };
  /**
   * Writes a 16bit signed integer. This is an alias of {@link ByteBuffer#writeInt16}.
   * @function
   * @param {number} value Value to write
   * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
   * @throws {TypeError} If `offset` or `value` is not a valid number
   * @throws {RangeError} If `offset` is out of bounds
   * @expose
   */


  ByteBufferPrototype.writeShort = ByteBufferPrototype.writeInt16;
  /**
   * Reads a 16bit signed integer.
   * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
   * @returns {number} Value read
   * @throws {TypeError} If `offset` is not a valid number
   * @throws {RangeError} If `offset` is out of bounds
   * @expose
   */

  ByteBufferPrototype.readInt16 = function (offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 2 + ") <= " + this.buffer.byteLength);
    }

    var value = 0;

    if (this.littleEndian) {
      value = this.view[offset];
      value |= this.view[offset + 1] << 8;
    } else {
      value = this.view[offset] << 8;
      value |= this.view[offset + 1];
    }

    if ((value & 0x8000) === 0x8000) value = -(0xFFFF - value + 1); // Cast to signed

    if (relative) this.offset += 2;
    return value;
  };
  /**
   * Reads a 16bit signed integer. This is an alias of {@link ByteBuffer#readInt16}.
   * @function
   * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
   * @returns {number} Value read
   * @throws {TypeError} If `offset` is not a valid number
   * @throws {RangeError} If `offset` is out of bounds
   * @expose
   */


  ByteBufferPrototype.readShort = ByteBufferPrototype.readInt16;
  /**
   * Writes a 16bit unsigned integer.
   * @param {number} value Value to write
   * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
   * @throws {TypeError} If `offset` or `value` is not a valid number
   * @throws {RangeError} If `offset` is out of bounds
   * @expose
   */

  ByteBufferPrototype.writeUint16 = function (value, offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof value !== 'number' || value % 1 !== 0) throw TypeError("Illegal value: " + value + " (not an integer)");
      value >>>= 0;
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
    }

    offset += 2;
    var capacity3 = this.buffer.byteLength;
    if (offset > capacity3) this.resize((capacity3 *= 2) > offset ? capacity3 : offset);
    offset -= 2;

    if (this.littleEndian) {
      this.view[offset + 1] = (value & 0xFF00) >>> 8;
      this.view[offset] = value & 0x00FF;
    } else {
      this.view[offset] = (value & 0xFF00) >>> 8;
      this.view[offset + 1] = value & 0x00FF;
    }

    if (relative) this.offset += 2;
    return this;
  };
  /**
   * Writes a 16bit unsigned integer. This is an alias of {@link ByteBuffer#writeUint16}.
   * @function
   * @param {number} value Value to write
   * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
   * @throws {TypeError} If `offset` or `value` is not a valid number
   * @throws {RangeError} If `offset` is out of bounds
   * @expose
   */


  ByteBufferPrototype.writeUInt16 = ByteBufferPrototype.writeUint16;
  /**
   * Reads a 16bit unsigned integer.
   * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
   * @returns {number} Value read
   * @throws {TypeError} If `offset` is not a valid number
   * @throws {RangeError} If `offset` is out of bounds
   * @expose
   */

  ByteBufferPrototype.readUint16 = function (offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 2 + ") <= " + this.buffer.byteLength);
    }

    var value = 0;

    if (this.littleEndian) {
      value = this.view[offset];
      value |= this.view[offset + 1] << 8;
    } else {
      value = this.view[offset] << 8;
      value |= this.view[offset + 1];
    }

    if (relative) this.offset += 2;
    return value;
  };
  /**
   * Reads a 16bit unsigned integer. This is an alias of {@link ByteBuffer#readUint16}.
   * @function
   * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
   * @returns {number} Value read
   * @throws {TypeError} If `offset` is not a valid number
   * @throws {RangeError} If `offset` is out of bounds
   * @expose
   */


  ByteBufferPrototype.readUInt16 = ByteBufferPrototype.readUint16; // types/ints/int32

  /**
   * Writes a 32bit signed integer.
   * @param {number} value Value to write
   * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
   * @expose
   */

  ByteBufferPrototype.writeInt32 = function (value, offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof value !== 'number' || value % 1 !== 0) throw TypeError("Illegal value: " + value + " (not an integer)");
      value |= 0;
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
    }

    offset += 4;
    var capacity4 = this.buffer.byteLength;
    if (offset > capacity4) this.resize((capacity4 *= 2) > offset ? capacity4 : offset);
    offset -= 4;

    if (this.littleEndian) {
      this.view[offset + 3] = value >>> 24 & 0xFF;
      this.view[offset + 2] = value >>> 16 & 0xFF;
      this.view[offset + 1] = value >>> 8 & 0xFF;
      this.view[offset] = value & 0xFF;
    } else {
      this.view[offset] = value >>> 24 & 0xFF;
      this.view[offset + 1] = value >>> 16 & 0xFF;
      this.view[offset + 2] = value >>> 8 & 0xFF;
      this.view[offset + 3] = value & 0xFF;
    }

    if (relative) this.offset += 4;
    return this;
  };
  /**
   * Writes a 32bit signed integer. This is an alias of {@link ByteBuffer#writeInt32}.
   * @param {number} value Value to write
   * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
   * @expose
   */


  ByteBufferPrototype.writeInt = ByteBufferPrototype.writeInt32;
  /**
   * Reads a 32bit signed integer.
   * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
   * @returns {number} Value read
   * @expose
   */

  ByteBufferPrototype.readInt32 = function (offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 4 + ") <= " + this.buffer.byteLength);
    }

    var value = 0;

    if (this.littleEndian) {
      value = this.view[offset + 2] << 16;
      value |= this.view[offset + 1] << 8;
      value |= this.view[offset];
      value += this.view[offset + 3] << 24 >>> 0;
    } else {
      value = this.view[offset + 1] << 16;
      value |= this.view[offset + 2] << 8;
      value |= this.view[offset + 3];
      value += this.view[offset] << 24 >>> 0;
    }

    value |= 0; // Cast to signed

    if (relative) this.offset += 4;
    return value;
  };
  /**
   * Reads a 32bit signed integer. This is an alias of {@link ByteBuffer#readInt32}.
   * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `4` if omitted.
   * @returns {number} Value read
   * @expose
   */


  ByteBufferPrototype.readInt = ByteBufferPrototype.readInt32;
  /**
   * Writes a 32bit unsigned integer.
   * @param {number} value Value to write
   * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
   * @expose
   */

  ByteBufferPrototype.writeUint32 = function (value, offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof value !== 'number' || value % 1 !== 0) throw TypeError("Illegal value: " + value + " (not an integer)");
      value >>>= 0;
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
    }

    offset += 4;
    var capacity5 = this.buffer.byteLength;
    if (offset > capacity5) this.resize((capacity5 *= 2) > offset ? capacity5 : offset);
    offset -= 4;

    if (this.littleEndian) {
      this.view[offset + 3] = value >>> 24 & 0xFF;
      this.view[offset + 2] = value >>> 16 & 0xFF;
      this.view[offset + 1] = value >>> 8 & 0xFF;
      this.view[offset] = value & 0xFF;
    } else {
      this.view[offset] = value >>> 24 & 0xFF;
      this.view[offset + 1] = value >>> 16 & 0xFF;
      this.view[offset + 2] = value >>> 8 & 0xFF;
      this.view[offset + 3] = value & 0xFF;
    }

    if (relative) this.offset += 4;
    return this;
  };
  /**
   * Writes a 32bit unsigned integer. This is an alias of {@link ByteBuffer#writeUint32}.
   * @function
   * @param {number} value Value to write
   * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
   * @expose
   */


  ByteBufferPrototype.writeUInt32 = ByteBufferPrototype.writeUint32;
  /**
   * Reads a 32bit unsigned integer.
   * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
   * @returns {number} Value read
   * @expose
   */

  ByteBufferPrototype.readUint32 = function (offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 4 + ") <= " + this.buffer.byteLength);
    }

    var value = 0;

    if (this.littleEndian) {
      value = this.view[offset + 2] << 16;
      value |= this.view[offset + 1] << 8;
      value |= this.view[offset];
      value += this.view[offset + 3] << 24 >>> 0;
    } else {
      value = this.view[offset + 1] << 16;
      value |= this.view[offset + 2] << 8;
      value |= this.view[offset + 3];
      value += this.view[offset] << 24 >>> 0;
    }

    if (relative) this.offset += 4;
    return value;
  };
  /**
   * Reads a 32bit unsigned integer. This is an alias of {@link ByteBuffer#readUint32}.
   * @function
   * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
   * @returns {number} Value read
   * @expose
   */


  ByteBufferPrototype.readUInt32 = ByteBufferPrototype.readUint32; // types/ints/int64

  if (Long) {
    /**
     * Writes a 64bit signed integer.
     * @param {number|!Long} value Value to write
     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
     * @returns {!ByteBuffer} this
     * @expose
     */
    ByteBufferPrototype.writeInt64 = function (value, offset) {
      var relative = typeof offset === 'undefined';
      if (relative) offset = this.offset;

      if (!this.noAssert) {
        if (typeof value === 'number') value = Long.fromNumber(value);else if (typeof value === 'string') value = Long.fromString(value);else if (!(value && value instanceof Long)) throw TypeError("Illegal value: " + value + " (not an integer or Long)");
        if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
        offset >>>= 0;
        if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
      }

      if (typeof value === 'number') value = Long.fromNumber(value);else if (typeof value === 'string') value = Long.fromString(value);
      offset += 8;
      var capacity6 = this.buffer.byteLength;
      if (offset > capacity6) this.resize((capacity6 *= 2) > offset ? capacity6 : offset);
      offset -= 8;
      var lo = value.low,
          hi = value.high;

      if (this.littleEndian) {
        this.view[offset + 3] = lo >>> 24 & 0xFF;
        this.view[offset + 2] = lo >>> 16 & 0xFF;
        this.view[offset + 1] = lo >>> 8 & 0xFF;
        this.view[offset] = lo & 0xFF;
        offset += 4;
        this.view[offset + 3] = hi >>> 24 & 0xFF;
        this.view[offset + 2] = hi >>> 16 & 0xFF;
        this.view[offset + 1] = hi >>> 8 & 0xFF;
        this.view[offset] = hi & 0xFF;
      } else {
        this.view[offset] = hi >>> 24 & 0xFF;
        this.view[offset + 1] = hi >>> 16 & 0xFF;
        this.view[offset + 2] = hi >>> 8 & 0xFF;
        this.view[offset + 3] = hi & 0xFF;
        offset += 4;
        this.view[offset] = lo >>> 24 & 0xFF;
        this.view[offset + 1] = lo >>> 16 & 0xFF;
        this.view[offset + 2] = lo >>> 8 & 0xFF;
        this.view[offset + 3] = lo & 0xFF;
      }

      if (relative) this.offset += 8;
      return this;
    };
    /**
     * Writes a 64bit signed integer. This is an alias of {@link ByteBuffer#writeInt64}.
     * @param {number|!Long} value Value to write
     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
     * @returns {!ByteBuffer} this
     * @expose
     */


    ByteBufferPrototype.writeLong = ByteBufferPrototype.writeInt64;
    /**
     * Reads a 64bit signed integer.
     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
     * @returns {!Long}
     * @expose
     */

    ByteBufferPrototype.readInt64 = function (offset) {
      var relative = typeof offset === 'undefined';
      if (relative) offset = this.offset;

      if (!this.noAssert) {
        if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
        offset >>>= 0;
        if (offset < 0 || offset + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 8 + ") <= " + this.buffer.byteLength);
      }

      var lo = 0,
          hi = 0;

      if (this.littleEndian) {
        lo = this.view[offset + 2] << 16;
        lo |= this.view[offset + 1] << 8;
        lo |= this.view[offset];
        lo += this.view[offset + 3] << 24 >>> 0;
        offset += 4;
        hi = this.view[offset + 2] << 16;
        hi |= this.view[offset + 1] << 8;
        hi |= this.view[offset];
        hi += this.view[offset + 3] << 24 >>> 0;
      } else {
        hi = this.view[offset + 1] << 16;
        hi |= this.view[offset + 2] << 8;
        hi |= this.view[offset + 3];
        hi += this.view[offset] << 24 >>> 0;
        offset += 4;
        lo = this.view[offset + 1] << 16;
        lo |= this.view[offset + 2] << 8;
        lo |= this.view[offset + 3];
        lo += this.view[offset] << 24 >>> 0;
      }

      var value = new Long(lo, hi, false).toNumber();
      if (relative) this.offset += 8;
      return value;
    };
    /**
     * Reads a 64bit signed integer. This is an alias of {@link ByteBuffer#readInt64}.
     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
     * @returns {!Long}
     * @expose
     */


    ByteBufferPrototype.readLong = ByteBufferPrototype.readInt64;
    /**
     * Writes a 64bit unsigned integer.
     * @param {number|!Long} value Value to write
     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
     * @returns {!ByteBuffer} this
     * @expose
     */

    ByteBufferPrototype.writeUint64 = function (value, offset) {
      var relative = typeof offset === 'undefined';
      if (relative) offset = this.offset;

      if (!this.noAssert) {
        if (typeof value === 'number') value = Long.fromNumber(value);else if (typeof value === 'string') value = Long.fromString(value);else if (!(value && value instanceof Long)) throw TypeError("Illegal value: " + value + " (not an integer or Long)");
        if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
        offset >>>= 0;
        if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
      }

      if (typeof value === 'number') value = Long.fromNumber(value);else if (typeof value === 'string') value = Long.fromString(value);
      offset += 8;
      var capacity7 = this.buffer.byteLength;
      if (offset > capacity7) this.resize((capacity7 *= 2) > offset ? capacity7 : offset);
      offset -= 8;
      var lo = value.low,
          hi = value.high;

      if (this.littleEndian) {
        this.view[offset + 3] = lo >>> 24 & 0xFF;
        this.view[offset + 2] = lo >>> 16 & 0xFF;
        this.view[offset + 1] = lo >>> 8 & 0xFF;
        this.view[offset] = lo & 0xFF;
        offset += 4;
        this.view[offset + 3] = hi >>> 24 & 0xFF;
        this.view[offset + 2] = hi >>> 16 & 0xFF;
        this.view[offset + 1] = hi >>> 8 & 0xFF;
        this.view[offset] = hi & 0xFF;
      } else {
        this.view[offset] = hi >>> 24 & 0xFF;
        this.view[offset + 1] = hi >>> 16 & 0xFF;
        this.view[offset + 2] = hi >>> 8 & 0xFF;
        this.view[offset + 3] = hi & 0xFF;
        offset += 4;
        this.view[offset] = lo >>> 24 & 0xFF;
        this.view[offset + 1] = lo >>> 16 & 0xFF;
        this.view[offset + 2] = lo >>> 8 & 0xFF;
        this.view[offset + 3] = lo & 0xFF;
      }

      if (relative) this.offset += 8;
      return this;
    };
    /**
     * Writes a 64bit unsigned integer. This is an alias of {@link ByteBuffer#writeUint64}.
     * @function
     * @param {number|!Long} value Value to write
     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
     * @returns {!ByteBuffer} this
     * @expose
     */


    ByteBufferPrototype.writeUInt64 = ByteBufferPrototype.writeUint64;
    /**
     * Reads a 64bit unsigned integer.
     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
     * @returns {!Long}
     * @expose
     */

    ByteBufferPrototype.readUint64 = function (offset) {
      var relative = typeof offset === 'undefined';
      if (relative) offset = this.offset;

      if (!this.noAssert) {
        if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
        offset >>>= 0;
        if (offset < 0 || offset + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 8 + ") <= " + this.buffer.byteLength);
      }

      var lo = 0,
          hi = 0;

      if (this.littleEndian) {
        lo = this.view[offset + 2] << 16;
        lo |= this.view[offset + 1] << 8;
        lo |= this.view[offset];
        lo += this.view[offset + 3] << 24 >>> 0;
        offset += 4;
        hi = this.view[offset + 2] << 16;
        hi |= this.view[offset + 1] << 8;
        hi |= this.view[offset];
        hi += this.view[offset + 3] << 24 >>> 0;
      } else {
        hi = this.view[offset + 1] << 16;
        hi |= this.view[offset + 2] << 8;
        hi |= this.view[offset + 3];
        hi += this.view[offset] << 24 >>> 0;
        offset += 4;
        lo = this.view[offset + 1] << 16;
        lo |= this.view[offset + 2] << 8;
        lo |= this.view[offset + 3];
        lo += this.view[offset] << 24 >>> 0;
      }

      var value = new Long(lo, hi, true);
      if (relative) this.offset += 8;
      return value;
    };
    /**
     * Reads a 64bit unsigned integer. This is an alias of {@link ByteBuffer#readUint64}.
     * @function
     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
     * @returns {!Long}
     * @expose
     */


    ByteBufferPrototype.readUInt64 = ByteBufferPrototype.readUint64;
  } // Long
  // types/floats/float32

  /*
   ieee754 - https://github.com/feross/ieee754
   The MIT License (MIT)
   Copyright (c) Feross Aboukhadijeh
   Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights
   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the Software is
   furnished to do so, subject to the following conditions:
   The above copyright notice and this permission notice shall be included in
   all copies or substantial portions of the Software.
   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   THE SOFTWARE.
  */

  /**
   * Reads an IEEE754 float from a byte array.
   * @param {!Array} buffer
   * @param {number} offset
   * @param {boolean} isLE
   * @param {number} mLen
   * @param {number} nBytes
   * @returns {number}
   * @inner
   */


  function ieee754_read(buffer, offset, isLE, mLen, nBytes) {
    var e,
        m,
        eLen = nBytes * 8 - mLen - 1,
        eMax = (1 << eLen) - 1,
        eBias = eMax >> 1,
        nBits = -7,
        i = isLE ? nBytes - 1 : 0,
        d = isLE ? -1 : 1,
        s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;

    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;

    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : (s ? -1 : 1) * Infinity;
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }

    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
  }
  /**
   * Writes an IEEE754 float to a byte array.
   * @param {!Array} buffer
   * @param {number} value
   * @param {number} offset
   * @param {boolean} isLE
   * @param {number} mLen
   * @param {number} nBytes
   * @inner
   */


  function ieee754_write(buffer, value, offset, isLE, mLen, nBytes) {
    var e,
        m,
        c,
        eLen = nBytes * 8 - mLen - 1,
        eMax = (1 << eLen) - 1,
        eBias = eMax >> 1,
        rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        i = isLE ? 0 : nBytes - 1,
        d = isLE ? 1 : -1,
        s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);

    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);

      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }

      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }

      if (value * c >= 2) {
        e++;
        c /= 2;
      }

      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }

    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

    e = e << mLen | m;
    eLen += mLen;

    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

    buffer[offset + i - d] |= s * 128;
  }
  /**
   * Writes a 32bit float.
   * @param {number} value Value to write
   * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
   * @returns {!ByteBuffer} this
   * @expose
   */


  ByteBufferPrototype.writeFloat32 = function (value, offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof value !== 'number') throw TypeError("Illegal value: " + value + " (not a number)");
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
    }

    offset += 4;
    var capacity8 = this.buffer.byteLength;
    if (offset > capacity8) this.resize((capacity8 *= 2) > offset ? capacity8 : offset);
    offset -= 4;
    ieee754_write(this.view, value, offset, this.littleEndian, 23, 4);
    if (relative) this.offset += 4;
    return this;
  };
  /**
   * Writes a 32bit float. This is an alias of {@link ByteBuffer#writeFloat32}.
   * @function
   * @param {number} value Value to write
   * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
   * @returns {!ByteBuffer} this
   * @expose
   */


  ByteBufferPrototype.writeFloat = ByteBufferPrototype.writeFloat32;
  /**
   * Reads a 32bit float.
   * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
   * @returns {number}
   * @expose
   */

  ByteBufferPrototype.readFloat32 = function (offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 4 + ") <= " + this.buffer.byteLength);
    }

    var value = ieee754_read(this.view, offset, this.littleEndian, 23, 4);
    if (relative) this.offset += 4;
    return value;
  };
  /**
   * Reads a 32bit float. This is an alias of {@link ByteBuffer#readFloat32}.
   * @function
   * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
   * @returns {number}
   * @expose
   */


  ByteBufferPrototype.readFloat = ByteBufferPrototype.readFloat32; // types/floats/float64

  /**
   * Writes a 64bit float.
   * @param {number} value Value to write
   * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
   * @returns {!ByteBuffer} this
   * @expose
   */

  ByteBufferPrototype.writeFloat64 = function (value, offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof value !== 'number') throw TypeError("Illegal value: " + value + " (not a number)");
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
    }

    offset += 8;
    var capacity9 = this.buffer.byteLength;
    if (offset > capacity9) this.resize((capacity9 *= 2) > offset ? capacity9 : offset);
    offset -= 8;
    ieee754_write(this.view, value, offset, this.littleEndian, 52, 8);
    if (relative) this.offset += 8;
    return this;
  };
  /**
   * Writes a 64bit float. This is an alias of {@link ByteBuffer#writeFloat64}.
   * @function
   * @param {number} value Value to write
   * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
   * @returns {!ByteBuffer} this
   * @expose
   */


  ByteBufferPrototype.writeDouble = ByteBufferPrototype.writeFloat64;
  /**
   * Reads a 64bit float.
   * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
   * @returns {number}
   * @expose
   */

  ByteBufferPrototype.readFloat64 = function (offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 8 + ") <= " + this.buffer.byteLength);
    }

    var value = ieee754_read(this.view, offset, this.littleEndian, 52, 8);
    if (relative) this.offset += 8;
    return value;
  };
  /**
   * Reads a 64bit float. This is an alias of {@link ByteBuffer#readFloat64}.
   * @function
   * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
   * @returns {number}
   * @expose
   */


  ByteBufferPrototype.readDouble = ByteBufferPrototype.readFloat64; // types/varints/varint32

  /**
   * Maximum number of bytes required to store a 32bit base 128 variable-length integer.
   * @type {number}
   * @const
   * @expose
   */

  ByteBuffer.MAX_VARINT32_BYTES = 5;
  /**
   * Calculates the actual number of bytes required to store a 32bit base 128 variable-length integer.
   * @param {number} value Value to encode
   * @returns {number} Number of bytes required. Capped to {@link ByteBuffer.MAX_VARINT32_BYTES}
   * @expose
   */

  ByteBuffer.calculateVarint32 = function (value) {
    // ref: src/google/protobuf/io/coded_stream.cc
    value = value >>> 0;
    if (value < 1 << 7) return 1;else if (value < 1 << 14) return 2;else if (value < 1 << 21) return 3;else if (value < 1 << 28) return 4;else return 5;
  };
  /**
   * Zigzag encodes a signed 32bit integer so that it can be effectively used with varint encoding.
   * @param {number} n Signed 32bit integer
   * @returns {number} Unsigned zigzag encoded 32bit integer
   * @expose
   */


  ByteBuffer.zigZagEncode32 = function (n) {
    return ((n |= 0) << 1 ^ n >> 31) >>> 0; // ref: src/google/protobuf/wire_format_lite.h
  };
  /**
   * Decodes a zigzag encoded signed 32bit integer.
   * @param {number} n Unsigned zigzag encoded 32bit integer
   * @returns {number} Signed 32bit integer
   * @expose
   */


  ByteBuffer.zigZagDecode32 = function (n) {
    return n >>> 1 ^ -(n & 1) | 0; // // ref: src/google/protobuf/wire_format_lite.h
  };
  /**
   * Writes a 32bit base 128 variable-length integer.
   * @param {number} value Value to write
   * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
   *  written if omitted.
   * @returns {!ByteBuffer|number} this if `offset` is omitted, else the actual number of bytes written
   * @expose
   */


  ByteBufferPrototype.writeVarint32 = function (value, offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof value !== 'number' || value % 1 !== 0) throw TypeError("Illegal value: " + value + " (not an integer)");
      value |= 0;
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
    }

    var size = ByteBuffer.calculateVarint32(value),
        b;
    offset += size;
    var capacity10 = this.buffer.byteLength;
    if (offset > capacity10) this.resize((capacity10 *= 2) > offset ? capacity10 : offset);
    offset -= size;
    value >>>= 0;

    while (value >= 0x80) {
      b = value & 0x7f | 0x80;
      this.view[offset++] = b;
      value >>>= 7;
    }

    this.view[offset++] = value;

    if (relative) {
      this.offset = offset;
      return this;
    }

    return size;
  };
  /**
   * Writes a zig-zag encoded (signed) 32bit base 128 variable-length integer.
   * @param {number} value Value to write
   * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
   *  written if omitted.
   * @returns {!ByteBuffer|number} this if `offset` is omitted, else the actual number of bytes written
   * @expose
   */


  ByteBufferPrototype.writeVarint32ZigZag = function (value, offset) {
    return this.writeVarint32(ByteBuffer.zigZagEncode32(value), offset);
  };
  /**
   * Reads a 32bit base 128 variable-length integer.
   * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
   *  written if omitted.
   * @returns {number|!{value: number, length: number}} The value read if offset is omitted, else the value read
   *  and the actual number of bytes read.
   * @throws {Error} If it's not a valid varint. Has a property `truncated = true` if there is not enough data available
   *  to fully decode the varint.
   * @expose
   */


  ByteBufferPrototype.readVarint32 = function (offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 1 + ") <= " + this.buffer.byteLength);
    }

    var c = 0,
        value = 0 >>> 0,
        b;

    do {
      if (!this.noAssert && offset > this.limit) {
        var err = Error("Truncated");
        err['truncated'] = true;
        throw err;
      }

      b = this.view[offset++];
      if (c < 5) value |= (b & 0x7f) << 7 * c;
      ++c;
    } while ((b & 0x80) !== 0);

    value |= 0;

    if (relative) {
      this.offset = offset;
      return value;
    }

    return {
      "value": value,
      "length": c
    };
  };
  /**
   * Reads a zig-zag encoded (signed) 32bit base 128 variable-length integer.
   * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
   *  written if omitted.
   * @returns {number|!{value: number, length: number}} The value read if offset is omitted, else the value read
   *  and the actual number of bytes read.
   * @throws {Error} If it's not a valid varint
   * @expose
   */


  ByteBufferPrototype.readVarint32ZigZag = function (offset) {
    var val = this.readVarint32(offset);
    if (typeof val === 'object') val["value"] = ByteBuffer.zigZagDecode32(val["value"]);else val = ByteBuffer.zigZagDecode32(val);
    return val;
  }; // types/varints/varint64


  if (Long) {
    /**
     * Maximum number of bytes required to store a 64bit base 128 variable-length integer.
     * @type {number}
     * @const
     * @expose
     */
    ByteBuffer.MAX_VARINT64_BYTES = 10;
    /**
     * Calculates the actual number of bytes required to store a 64bit base 128 variable-length integer.
     * @param {number|!Long} value Value to encode
     * @returns {number} Number of bytes required. Capped to {@link ByteBuffer.MAX_VARINT64_BYTES}
     * @expose
     */

    ByteBuffer.calculateVarint64 = function (value) {
      if (typeof value === 'number') value = Long.fromNumber(value);else if (typeof value === 'string') value = Long.fromString(value); // ref: src/google/protobuf/io/coded_stream.cc

      var part0 = value.toInt() >>> 0,
          part1 = value.shiftRightUnsigned(28).toInt() >>> 0,
          part2 = value.shiftRightUnsigned(56).toInt() >>> 0;

      if (part2 == 0) {
        if (part1 == 0) {
          if (part0 < 1 << 14) return part0 < 1 << 7 ? 1 : 2;else return part0 < 1 << 21 ? 3 : 4;
        } else {
          if (part1 < 1 << 14) return part1 < 1 << 7 ? 5 : 6;else return part1 < 1 << 21 ? 7 : 8;
        }
      } else return part2 < 1 << 7 ? 9 : 10;
    };
    /**
     * Zigzag encodes a signed 64bit integer so that it can be effectively used with varint encoding.
     * @param {number|!Long} value Signed long
     * @returns {!Long} Unsigned zigzag encoded long
     * @expose
     */


    ByteBuffer.zigZagEncode64 = function (value) {
      if (typeof value === 'number') value = Long.fromNumber(value, false);else if (typeof value === 'string') value = Long.fromString(value, false);else if (value.unsigned !== false) value = value.toSigned(); // ref: src/google/protobuf/wire_format_lite.h

      return value.shiftLeft(1).xor(value.shiftRight(63)).toUnsigned();
    };
    /**
     * Decodes a zigzag encoded signed 64bit integer.
     * @param {!Long|number} value Unsigned zigzag encoded long or JavaScript number
     * @returns {!Long} Signed long
     * @expose
     */


    ByteBuffer.zigZagDecode64 = function (value) {
      if (typeof value === 'number') value = Long.fromNumber(value, false);else if (typeof value === 'string') value = Long.fromString(value, false);else if (value.unsigned !== false) value = value.toSigned(); // ref: src/google/protobuf/wire_format_lite.h

      return value.shiftRightUnsigned(1).xor(value.and(Long.ONE).toSigned().negate()).toSigned();
    };
    /**
     * Writes a 64bit base 128 variable-length integer.
     * @param {number|Long} value Value to write
     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
     *  written if omitted.
     * @returns {!ByteBuffer|number} `this` if offset is omitted, else the actual number of bytes written.
     * @expose
     */


    ByteBufferPrototype.writeVarint64 = function (value, offset) {
      var relative = typeof offset === 'undefined';
      if (relative) offset = this.offset;

      if (!this.noAssert) {
        if (typeof value === 'number') value = Long.fromNumber(value);else if (typeof value === 'string') value = Long.fromString(value);else if (!(value && value instanceof Long)) throw TypeError("Illegal value: " + value + " (not an integer or Long)");
        if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
        offset >>>= 0;
        if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
      }

      if (typeof value === 'number') value = Long.fromNumber(value, false);else if (typeof value === 'string') value = Long.fromString(value, false);else if (value.unsigned !== false) value = value.toSigned();
      var size = ByteBuffer.calculateVarint64(value),
          part0 = value.toInt() >>> 0,
          part1 = value.shiftRightUnsigned(28).toInt() >>> 0,
          part2 = value.shiftRightUnsigned(56).toInt() >>> 0;
      offset += size;
      var capacity11 = this.buffer.byteLength;
      if (offset > capacity11) this.resize((capacity11 *= 2) > offset ? capacity11 : offset);
      offset -= size;

      switch (size) {
        case 10:
          this.view[offset + 9] = part2 >>> 7 & 0x01;

        case 9:
          this.view[offset + 8] = size !== 9 ? part2 | 0x80 : part2 & 0x7F;

        case 8:
          this.view[offset + 7] = size !== 8 ? part1 >>> 21 | 0x80 : part1 >>> 21 & 0x7F;

        case 7:
          this.view[offset + 6] = size !== 7 ? part1 >>> 14 | 0x80 : part1 >>> 14 & 0x7F;

        case 6:
          this.view[offset + 5] = size !== 6 ? part1 >>> 7 | 0x80 : part1 >>> 7 & 0x7F;

        case 5:
          this.view[offset + 4] = size !== 5 ? part1 | 0x80 : part1 & 0x7F;

        case 4:
          this.view[offset + 3] = size !== 4 ? part0 >>> 21 | 0x80 : part0 >>> 21 & 0x7F;

        case 3:
          this.view[offset + 2] = size !== 3 ? part0 >>> 14 | 0x80 : part0 >>> 14 & 0x7F;

        case 2:
          this.view[offset + 1] = size !== 2 ? part0 >>> 7 | 0x80 : part0 >>> 7 & 0x7F;

        case 1:
          this.view[offset] = size !== 1 ? part0 | 0x80 : part0 & 0x7F;
      }

      if (relative) {
        this.offset += size;
        return this;
      } else {
        return size;
      }
    };
    /**
     * Writes a zig-zag encoded 64bit base 128 variable-length integer.
     * @param {number|Long} value Value to write
     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
     *  written if omitted.
     * @returns {!ByteBuffer|number} `this` if offset is omitted, else the actual number of bytes written.
     * @expose
     */


    ByteBufferPrototype.writeVarint64ZigZag = function (value, offset) {
      return this.writeVarint64(ByteBuffer.zigZagEncode64(value), offset);
    };
    /**
     * Reads a 64bit base 128 variable-length integer. Requires Long.js.
     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
     *  read if omitted.
     * @returns {!Long|!{value: Long, length: number}} The value read if offset is omitted, else the value read and
     *  the actual number of bytes read.
     * @throws {Error} If it's not a valid varint
     * @expose
     */


    ByteBufferPrototype.readVarint64 = function (offset) {
      var relative = typeof offset === 'undefined';
      if (relative) offset = this.offset;

      if (!this.noAssert) {
        if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
        offset >>>= 0;
        if (offset < 0 || offset + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 1 + ") <= " + this.buffer.byteLength);
      } // ref: src/google/protobuf/io/coded_stream.cc


      var start = offset,
          part0 = 0,
          part1 = 0,
          part2 = 0,
          b = 0;
      b = this.view[offset++];
      part0 = b & 0x7F;

      if (b & 0x80) {
        b = this.view[offset++];
        part0 |= (b & 0x7F) << 7;

        if (b & 0x80 || this.noAssert && typeof b === 'undefined') {
          b = this.view[offset++];
          part0 |= (b & 0x7F) << 14;

          if (b & 0x80 || this.noAssert && typeof b === 'undefined') {
            b = this.view[offset++];
            part0 |= (b & 0x7F) << 21;

            if (b & 0x80 || this.noAssert && typeof b === 'undefined') {
              b = this.view[offset++];
              part1 = b & 0x7F;

              if (b & 0x80 || this.noAssert && typeof b === 'undefined') {
                b = this.view[offset++];
                part1 |= (b & 0x7F) << 7;

                if (b & 0x80 || this.noAssert && typeof b === 'undefined') {
                  b = this.view[offset++];
                  part1 |= (b & 0x7F) << 14;

                  if (b & 0x80 || this.noAssert && typeof b === 'undefined') {
                    b = this.view[offset++];
                    part1 |= (b & 0x7F) << 21;

                    if (b & 0x80 || this.noAssert && typeof b === 'undefined') {
                      b = this.view[offset++];
                      part2 = b & 0x7F;

                      if (b & 0x80 || this.noAssert && typeof b === 'undefined') {
                        b = this.view[offset++];
                        part2 |= (b & 0x7F) << 7;

                        if (b & 0x80 || this.noAssert && typeof b === 'undefined') {
                          throw Error("Buffer overrun");
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      var value = Long.fromBits(part0 | part1 << 28, part1 >>> 4 | part2 << 24, false);

      if (relative) {
        this.offset = offset;
        return value.toNumber();
      } else {
        return {
          'value': value,
          'length': offset - start
        };
      }
    };
    /**
     * Reads a zig-zag encoded 64bit base 128 variable-length integer. Requires Long.js.
     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
     *  read if omitted.
     * @returns {!Long|!{value: Long, length: number}} The value read if offset is omitted, else the value read and
     *  the actual number of bytes read.
     * @throws {Error} If it's not a valid varint
     * @expose
     */


    ByteBufferPrototype.readVarint64ZigZag = function (offset) {
      var val = this.readVarint64(offset);
      if (val && val['value'] instanceof Long) val["value"] = ByteBuffer.zigZagDecode64(val["value"]);else val = ByteBuffer.zigZagDecode64(val);
      return val;
    };
  } // Long
  // types/strings/cstring

  /**
   * Writes a NULL-terminated UTF8 encoded string. For this to work the specified string must not contain any NULL
   *  characters itself.
   * @param {string} str String to write
   * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
   *  contained in `str` + 1 if omitted.
   * @returns {!ByteBuffer|number} this if offset is omitted, else the actual number of bytes written
   * @expose
   */


  ByteBufferPrototype.writeCString = function (str, offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;
    var i,
        k = str.length;

    if (!this.noAssert) {
      if (typeof str !== 'string') throw TypeError("Illegal str: Not a string");

      for (i = 0; i < k; ++i) {
        if (str.charCodeAt(i) === 0) throw RangeError("Illegal str: Contains NULL-characters");
      }

      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
    } // UTF8 strings do not contain zero bytes in between except for the zero character, so:


    k = utfx.calculateUTF16asUTF8(stringSource(str))[1];
    offset += k + 1;
    var capacity12 = this.buffer.byteLength;
    if (offset > capacity12) this.resize((capacity12 *= 2) > offset ? capacity12 : offset);
    offset -= k + 1;
    utfx.encodeUTF16toUTF8(stringSource(str), function (b) {
      this.view[offset++] = b;
    }.bind(this));
    this.view[offset++] = 0;

    if (relative) {
      this.offset = offset;
      return this;
    }

    return k;
  };
  /**
   * Reads a NULL-terminated UTF8 encoded string. For this to work the string read must not contain any NULL characters
   *  itself.
   * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
   *  read if omitted.
   * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
   *  read and the actual number of bytes read.
   * @expose
   */


  ByteBufferPrototype.readCString = function (offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 1 + ") <= " + this.buffer.byteLength);
    }

    var start = offset,
        temp; // UTF8 strings do not contain zero bytes in between except for the zero character itself, so:

    var sd,
        b = -1;
    utfx.decodeUTF8toUTF16(function () {
      if (b === 0) return null;
      if (offset >= this.limit) throw RangeError("Illegal range: Truncated data, " + offset + " < " + this.limit);
      b = this.view[offset++];
      return b === 0 ? null : b;
    }.bind(this), sd = stringDestination(), true);

    if (relative) {
      this.offset = offset;
      return sd();
    } else {
      return {
        "string": sd(),
        "length": offset - start
      };
    }
  }; // types/strings/istring

  /**
   * Writes a length as uint32 prefixed UTF8 encoded string.
   * @param {string} str String to write
   * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
   *  written if omitted.
   * @returns {!ByteBuffer|number} `this` if `offset` is omitted, else the actual number of bytes written
   * @expose
   * @see ByteBuffer#writeVarint32
   */


  ByteBufferPrototype.writeIString = function (str, offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof str !== 'string') throw TypeError("Illegal str: Not a string");
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
    }

    var start = offset,
        k;
    k = utfx.calculateUTF16asUTF8(stringSource(str), this.noAssert)[1];
    offset += 4 + k;
    var capacity13 = this.buffer.byteLength;
    if (offset > capacity13) this.resize((capacity13 *= 2) > offset ? capacity13 : offset);
    offset -= 4 + k;

    if (this.littleEndian) {
      this.view[offset + 3] = k >>> 24 & 0xFF;
      this.view[offset + 2] = k >>> 16 & 0xFF;
      this.view[offset + 1] = k >>> 8 & 0xFF;
      this.view[offset] = k & 0xFF;
    } else {
      this.view[offset] = k >>> 24 & 0xFF;
      this.view[offset + 1] = k >>> 16 & 0xFF;
      this.view[offset + 2] = k >>> 8 & 0xFF;
      this.view[offset + 3] = k & 0xFF;
    }

    offset += 4;
    utfx.encodeUTF16toUTF8(stringSource(str), function (b) {
      this.view[offset++] = b;
    }.bind(this));
    if (offset !== start + 4 + k) throw RangeError("Illegal range: Truncated data, " + offset + " == " + (offset + 4 + k));

    if (relative) {
      this.offset = offset;
      return this;
    }

    return offset - start;
  };
  /**
   * Reads a length as uint32 prefixed UTF8 encoded string.
   * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
   *  read if omitted.
   * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
   *  read and the actual number of bytes read.
   * @expose
   * @see ByteBuffer#readVarint32
   */


  ByteBufferPrototype.readIString = function (offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 4 + ") <= " + this.buffer.byteLength);
    }

    var start = offset;
    var len = this.readUint32(offset);
    var str = this.readUTF8String(len, ByteBuffer.METRICS_BYTES, offset += 4);
    offset += str['length'];

    if (relative) {
      this.offset = offset;
      return str['string'];
    } else {
      return {
        'string': str['string'],
        'length': offset - start
      };
    }
  }; // types/strings/utf8string

  /**
   * Metrics representing number of UTF8 characters. Evaluates to `c`.
   * @type {string}
   * @const
   * @expose
   */


  ByteBuffer.METRICS_CHARS = 'c';
  /**
   * Metrics representing number of bytes. Evaluates to `b`.
   * @type {string}
   * @const
   * @expose
   */

  ByteBuffer.METRICS_BYTES = 'b';
  /**
   * Writes an UTF8 encoded string.
   * @param {string} str String to write
   * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} if omitted.
   * @returns {!ByteBuffer|number} this if offset is omitted, else the actual number of bytes written.
   * @expose
   */

  ByteBufferPrototype.writeUTF8String = function (str, offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
    }

    var k;
    var start = offset;
    k = utfx.calculateUTF16asUTF8(stringSource(str))[1];
    offset += k;
    var capacity14 = this.buffer.byteLength;
    if (offset > capacity14) this.resize((capacity14 *= 2) > offset ? capacity14 : offset);
    offset -= k;
    utfx.encodeUTF16toUTF8(stringSource(str), function (b) {
      this.view[offset++] = b;
    }.bind(this));

    if (relative) {
      this.offset = offset;
      return this;
    }

    return offset - start;
  };
  /**
   * Writes an UTF8 encoded string. This is an alias of {@link ByteBuffer#writeUTF8String}.
   * @function
   * @param {string} str String to write
   * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} if omitted.
   * @returns {!ByteBuffer|number} this if offset is omitted, else the actual number of bytes written.
   * @expose
   */


  ByteBufferPrototype.writeString = ByteBufferPrototype.writeUTF8String;
  /**
   * Calculates the number of UTF8 characters of a string. JavaScript itself uses UTF-16, so that a string's
   *  `length` property does not reflect its actual UTF8 size if it contains code points larger than 0xFFFF.
   * @param {string} str String to calculate
   * @returns {number} Number of UTF8 characters
   * @expose
   */

  ByteBuffer.calculateUTF8Chars = function (str) {
    return utfx.calculateUTF16asUTF8(stringSource(str))[0];
  };
  /**
   * Calculates the number of UTF8 bytes of a string.
   * @param {string} str String to calculate
   * @returns {number} Number of UTF8 bytes
   * @expose
   */


  ByteBuffer.calculateUTF8Bytes = function (str) {
    return utfx.calculateUTF16asUTF8(stringSource(str))[1];
  };
  /**
   * Calculates the number of UTF8 bytes of a string. This is an alias of {@link ByteBuffer.calculateUTF8Bytes}.
   * @function
   * @param {string} str String to calculate
   * @returns {number} Number of UTF8 bytes
   * @expose
   */


  ByteBuffer.calculateString = ByteBuffer.calculateUTF8Bytes;
  /**
   * Reads an UTF8 encoded string.
   * @param {number} length Number of characters or bytes to read.
   * @param {string=} metrics Metrics specifying what `length` is meant to count. Defaults to
   *  {@link ByteBuffer.METRICS_CHARS}.
   * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
   *  read if omitted.
   * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
   *  read and the actual number of bytes read.
   * @expose
   */

  ByteBufferPrototype.readUTF8String = function (length, metrics, offset) {
    if (typeof metrics === 'number') {
      offset = metrics;
      metrics = undefined;
    }

    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;
    if (typeof metrics === 'undefined') metrics = ByteBuffer.METRICS_CHARS;

    if (!this.noAssert) {
      if (typeof length !== 'number' || length % 1 !== 0) throw TypeError("Illegal length: " + length + " (not an integer)");
      length |= 0;
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
    }

    var i = 0,
        start = offset,
        sd;

    if (metrics === ByteBuffer.METRICS_CHARS) {
      // The same for node and the browser
      sd = stringDestination();
      utfx.decodeUTF8(function () {
        return i < length && offset < this.limit ? this.view[offset++] : null;
      }.bind(this), function (cp) {
        ++i;
        utfx.UTF8toUTF16(cp, sd);
      });
      if (i !== length) throw RangeError("Illegal range: Truncated data, " + i + " == " + length);

      if (relative) {
        this.offset = offset;
        return sd();
      } else {
        return {
          "string": sd(),
          "length": offset - start
        };
      }
    } else if (metrics === ByteBuffer.METRICS_BYTES) {
      if (!this.noAssert) {
        if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
        offset >>>= 0;
        if (offset < 0 || offset + length > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + length + ") <= " + this.buffer.byteLength);
      }

      var k = offset + length;
      utfx.decodeUTF8toUTF16(function () {
        return offset < k ? this.view[offset++] : null;
      }.bind(this), sd = stringDestination(), this.noAssert);
      if (offset !== k) throw RangeError("Illegal range: Truncated data, " + offset + " == " + k);

      if (relative) {
        this.offset = offset;
        return sd();
      } else {
        return {
          'string': sd(),
          'length': offset - start
        };
      }
    } else throw TypeError("Unsupported metrics: " + metrics);
  };
  /**
   * Reads an UTF8 encoded string. This is an alias of {@link ByteBuffer#readUTF8String}.
   * @function
   * @param {number} length Number of characters or bytes to read
   * @param {number=} metrics Metrics specifying what `n` is meant to count. Defaults to
   *  {@link ByteBuffer.METRICS_CHARS}.
   * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
   *  read if omitted.
   * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
   *  read and the actual number of bytes read.
   * @expose
   */


  ByteBufferPrototype.readString = ByteBufferPrototype.readUTF8String; // types/strings/vstring

  /**
   * Writes a length as varint32 prefixed UTF8 encoded string.
   * @param {string} str String to write
   * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
   *  written if omitted.
   * @returns {!ByteBuffer|number} `this` if `offset` is omitted, else the actual number of bytes written
   * @expose
   * @see ByteBuffer#writeVarint32
   */

  ByteBufferPrototype.writeVString = function (str, offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof str !== 'string') throw TypeError("Illegal str: Not a string");
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
    }

    var start = offset,
        k,
        l;
    k = utfx.calculateUTF16asUTF8(stringSource(str), this.noAssert)[1];
    l = ByteBuffer.calculateVarint32(k);
    offset += l + k;
    var capacity15 = this.buffer.byteLength;
    if (offset > capacity15) this.resize((capacity15 *= 2) > offset ? capacity15 : offset);
    offset -= l + k;
    offset += this.writeVarint32(k, offset);
    utfx.encodeUTF16toUTF8(stringSource(str), function (b) {
      this.view[offset++] = b;
    }.bind(this));
    if (offset !== start + k + l) throw RangeError("Illegal range: Truncated data, " + offset + " == " + (offset + k + l));

    if (relative) {
      this.offset = offset;
      return this;
    }

    return offset - start;
  };
  /**
   * Reads a length as varint32 prefixed UTF8 encoded string.
   * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
   *  read if omitted.
   * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
   *  read and the actual number of bytes read.
   * @expose
   * @see ByteBuffer#readVarint32
   */


  ByteBufferPrototype.readVString = function (offset) {
    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 1 + ") <= " + this.buffer.byteLength);
    }

    var start = offset;
    var len = this.readVarint32(offset);
    var str = this.readUTF8String(len['value'], ByteBuffer.METRICS_BYTES, offset += len['length']);
    offset += str['length'];

    if (relative) {
      this.offset = offset;
      return str['string'];
    } else {
      return {
        'string': str['string'],
        'length': offset - start
      };
    }
  };
  /**
   * Appends some data to this ByteBuffer. This will overwrite any contents behind the specified offset up to the appended
   *  data's length.
   * @param {!ByteBuffer|!ArrayBuffer|!Uint8Array|string} source Data to append. If `source` is a ByteBuffer, its offsets
   *  will be modified according to the performed read operation.
   * @param {(string|number)=} encoding Encoding if `data` is a string ("base64", "hex", "binary", defaults to "utf8")
   * @param {number=} offset Offset to append at. Will use and increase {@link ByteBuffer#offset} by the number of bytes
   *  written if omitted.
   * @returns {!ByteBuffer} this
   * @expose
   * @example A relative `<01 02>03.append(<04 05>)` will result in `<01 02 04 05>, 04 05|`
   * @example An absolute `<01 02>03.append(04 05>, 1)` will result in `<01 04>05, 04 05|`
   */


  ByteBufferPrototype.append = function (source, encoding, offset) {
    if (typeof encoding === 'number' || typeof encoding !== 'string') {
      offset = encoding;
      encoding = undefined;
    }

    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
    }

    if (!(source instanceof ByteBuffer)) source = ByteBuffer.wrap(source, encoding);
    var length = source.limit - source.offset;
    if (length <= 0) return this; // Nothing to append

    offset += length;
    var capacity16 = this.buffer.byteLength;
    if (offset > capacity16) this.resize((capacity16 *= 2) > offset ? capacity16 : offset);
    offset -= length;
    this.view.set(source.view.subarray(source.offset, source.limit), offset);
    source.offset += length;
    if (relative) this.offset += length;
    return this;
  };
  /**
   * Appends this ByteBuffer's contents to another ByteBuffer. This will overwrite any contents at and after the
      specified offset up to the length of this ByteBuffer's data.
   * @param {!ByteBuffer} target Target ByteBuffer
   * @param {number=} offset Offset to append to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
   *  read if omitted.
   * @returns {!ByteBuffer} this
   * @expose
   * @see ByteBuffer#append
   */


  ByteBufferPrototype.appendTo = function (target, offset) {
    target.append(this, offset);
    return this;
  };
  /**
   * Writes a payload of bytes. This is an alias of {@link ByteBuffer#append}.
   * @function
   * @param {!ByteBuffer|!ArrayBuffer|!Uint8Array|string} source Data to write. If `source` is a ByteBuffer, its offsets
   *  will be modified according to the performed read operation.
   * @param {(string|number)=} encoding Encoding if `data` is a string ("base64", "hex", "binary", defaults to "utf8")
   * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
   *  written if omitted.
   * @returns {!ByteBuffer} this
   * @expose
   */


  ByteBufferPrototype.writeBytes = ByteBufferPrototype.append;
  /**
   * Enables or disables assertions of argument types and offsets. Assertions are enabled by default but you can opt to
   *  disable them if your code already makes sure that everything is valid.
   * @param {boolean} assert `true` to enable assertions, otherwise `false`
   * @returns {!ByteBuffer} this
   * @expose
   */

  ByteBufferPrototype.assert = function (assert) {
    this.noAssert = !assert;
    return this;
  };
  /**
   * Gets the capacity of this ByteBuffer's backing buffer.
   * @returns {number} Capacity of the backing buffer
   * @expose
   */


  ByteBufferPrototype.capacity = function () {
    return this.buffer.byteLength;
  };
  /**
   * Clears this ByteBuffer's offsets by setting {@link ByteBuffer#offset} to `0` and {@link ByteBuffer#limit} to the
   *  backing buffer's capacity. Discards {@link ByteBuffer#markedOffset}.
   * @returns {!ByteBuffer} this
   * @expose
   */


  ByteBufferPrototype.clear = function () {
    this.offset = 0;
    this.limit = this.buffer.byteLength;
    this.markedOffset = -1;
    return this;
  };
  /**
   * Creates a cloned instance of this ByteBuffer, preset with this ByteBuffer's values for {@link ByteBuffer#offset},
   *  {@link ByteBuffer#markedOffset} and {@link ByteBuffer#limit}.
   * @param {boolean=} copy Whether to copy the backing buffer or to return another view on the same, defaults to `false`
   * @returns {!ByteBuffer} Cloned instance
   * @expose
   */


  ByteBufferPrototype.clone = function (copy) {
    var bb = new ByteBuffer(0, this.littleEndian, this.noAssert);

    if (copy) {
      bb.buffer = new ArrayBuffer(this.buffer.byteLength);
      bb.view = new Uint8Array(bb.buffer);
    } else {
      bb.buffer = this.buffer;
      bb.view = this.view;
    }

    bb.offset = this.offset;
    bb.markedOffset = this.markedOffset;
    bb.limit = this.limit;
    return bb;
  };
  /**
   * Compacts this ByteBuffer to be backed by a {@link ByteBuffer#buffer} of its contents' length. Contents are the bytes
   *  between {@link ByteBuffer#offset} and {@link ByteBuffer#limit}. Will set `offset = 0` and `limit = capacity` and
   *  adapt {@link ByteBuffer#markedOffset} to the same relative position if set.
   * @param {number=} begin Offset to start at, defaults to {@link ByteBuffer#offset}
   * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}
   * @returns {!ByteBuffer} this
   * @expose
   */


  ByteBufferPrototype.compact = function (begin, end) {
    if (typeof begin === 'undefined') begin = this.offset;
    if (typeof end === 'undefined') end = this.limit;

    if (!this.noAssert) {
      if (typeof begin !== 'number' || begin % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
      begin >>>= 0;
      if (typeof end !== 'number' || end % 1 !== 0) throw TypeError("Illegal end: Not an integer");
      end >>>= 0;
      if (begin < 0 || begin > end || end > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + begin + " <= " + end + " <= " + this.buffer.byteLength);
    }

    if (begin === 0 && end === this.buffer.byteLength) return this; // Already compacted

    var len = end - begin;

    if (len === 0) {
      this.buffer = EMPTY_BUFFER;
      this.view = null;
      if (this.markedOffset >= 0) this.markedOffset -= begin;
      this.offset = 0;
      this.limit = 0;
      return this;
    }

    var buffer = new ArrayBuffer(len);
    var view = new Uint8Array(buffer);
    view.set(this.view.subarray(begin, end));
    this.buffer = buffer;
    this.view = view;
    if (this.markedOffset >= 0) this.markedOffset -= begin;
    this.offset = 0;
    this.limit = len;
    return this;
  };
  /**
   * Creates a copy of this ByteBuffer's contents. Contents are the bytes between {@link ByteBuffer#offset} and
   *  {@link ByteBuffer#limit}.
   * @param {number=} begin Begin offset, defaults to {@link ByteBuffer#offset}.
   * @param {number=} end End offset, defaults to {@link ByteBuffer#limit}.
   * @returns {!ByteBuffer} Copy
   * @expose
   */


  ByteBufferPrototype.copy = function (begin, end) {
    if (typeof begin === 'undefined') begin = this.offset;
    if (typeof end === 'undefined') end = this.limit;

    if (!this.noAssert) {
      if (typeof begin !== 'number' || begin % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
      begin >>>= 0;
      if (typeof end !== 'number' || end % 1 !== 0) throw TypeError("Illegal end: Not an integer");
      end >>>= 0;
      if (begin < 0 || begin > end || end > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + begin + " <= " + end + " <= " + this.buffer.byteLength);
    }

    if (begin === end) return new ByteBuffer(0, this.littleEndian, this.noAssert);
    var capacity = end - begin,
        bb = new ByteBuffer(capacity, this.littleEndian, this.noAssert);
    bb.offset = 0;
    bb.limit = capacity;
    if (bb.markedOffset >= 0) bb.markedOffset -= begin;
    this.copyTo(bb, 0, begin, end);
    return bb;
  };
  /**
   * Copies this ByteBuffer's contents to another ByteBuffer. Contents are the bytes between {@link ByteBuffer#offset} and
   *  {@link ByteBuffer#limit}.
   * @param {!ByteBuffer} target Target ByteBuffer
   * @param {number=} targetOffset Offset to copy to. Will use and increase the target's {@link ByteBuffer#offset}
   *  by the number of bytes copied if omitted.
   * @param {number=} sourceOffset Offset to start copying from. Will use and increase {@link ByteBuffer#offset} by the
   *  number of bytes copied if omitted.
   * @param {number=} sourceLimit Offset to end copying from, defaults to {@link ByteBuffer#limit}
   * @returns {!ByteBuffer} this
   * @expose
   */


  ByteBufferPrototype.copyTo = function (target, targetOffset, sourceOffset, sourceLimit) {
    var relative, targetRelative;

    if (!this.noAssert) {
      if (!ByteBuffer.isByteBuffer(target)) throw TypeError("Illegal target: Not a ByteBuffer");
    }

    targetOffset = (targetRelative = typeof targetOffset === 'undefined') ? target.offset : targetOffset | 0;
    sourceOffset = (relative = typeof sourceOffset === 'undefined') ? this.offset : sourceOffset | 0;
    sourceLimit = typeof sourceLimit === 'undefined' ? this.limit : sourceLimit | 0;
    if (targetOffset < 0 || targetOffset > target.buffer.byteLength) throw RangeError("Illegal target range: 0 <= " + targetOffset + " <= " + target.buffer.byteLength);
    if (sourceOffset < 0 || sourceLimit > this.buffer.byteLength) throw RangeError("Illegal source range: 0 <= " + sourceOffset + " <= " + this.buffer.byteLength);
    var len = sourceLimit - sourceOffset;
    if (len === 0) return target; // Nothing to copy

    target.ensureCapacity(targetOffset + len);
    target.view.set(this.view.subarray(sourceOffset, sourceLimit), targetOffset);
    if (relative) this.offset += len;
    if (targetRelative) target.offset += len;
    return this;
  };
  /**
   * Makes sure that this ByteBuffer is backed by a {@link ByteBuffer#buffer} of at least the specified capacity. If the
   *  current capacity is exceeded, it will be doubled. If double the current capacity is less than the required capacity,
   *  the required capacity will be used instead.
   * @param {number} capacity Required capacity
   * @returns {!ByteBuffer} this
   * @expose
   */


  ByteBufferPrototype.ensureCapacity = function (capacity) {
    var current = this.buffer.byteLength;
    if (current < capacity) return this.resize((current *= 2) > capacity ? current : capacity);
    return this;
  };
  /**
   * Overwrites this ByteBuffer's contents with the specified value. Contents are the bytes between
   *  {@link ByteBuffer#offset} and {@link ByteBuffer#limit}.
   * @param {number|string} value Byte value to fill with. If given as a string, the first character is used.
   * @param {number=} begin Begin offset. Will use and increase {@link ByteBuffer#offset} by the number of bytes
   *  written if omitted. defaults to {@link ByteBuffer#offset}.
   * @param {number=} end End offset, defaults to {@link ByteBuffer#limit}.
   * @returns {!ByteBuffer} this
   * @expose
   * @example `someByteBuffer.clear().fill(0)` fills the entire backing buffer with zeroes
   */


  ByteBufferPrototype.fill = function (value, begin, end) {
    var relative = typeof begin === 'undefined';
    if (relative) begin = this.offset;
    if (typeof value === 'string' && value.length > 0) value = value.charCodeAt(0);
    if (typeof begin === 'undefined') begin = this.offset;
    if (typeof end === 'undefined') end = this.limit;

    if (!this.noAssert) {
      if (typeof value !== 'number' || value % 1 !== 0) throw TypeError("Illegal value: " + value + " (not an integer)");
      value |= 0;
      if (typeof begin !== 'number' || begin % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
      begin >>>= 0;
      if (typeof end !== 'number' || end % 1 !== 0) throw TypeError("Illegal end: Not an integer");
      end >>>= 0;
      if (begin < 0 || begin > end || end > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + begin + " <= " + end + " <= " + this.buffer.byteLength);
    }

    if (begin >= end) return this; // Nothing to fill

    while (begin < end) {
      this.view[begin++] = value;
    }

    if (relative) this.offset = begin;
    return this;
  };
  /**
   * Makes this ByteBuffer ready for a new sequence of write or relative read operations. Sets `limit = offset` and
   *  `offset = 0`. Make sure always to flip a ByteBuffer when all relative read or write operations are complete.
   * @returns {!ByteBuffer} this
   * @expose
   */


  ByteBufferPrototype.flip = function () {
    this.limit = this.offset;
    this.offset = 0;
    return this;
  };
  /**
   * Marks an offset on this ByteBuffer to be used later.
   * @param {number=} offset Offset to mark. Defaults to {@link ByteBuffer#offset}.
   * @returns {!ByteBuffer} this
   * @throws {TypeError} If `offset` is not a valid number
   * @throws {RangeError} If `offset` is out of bounds
   * @see ByteBuffer#reset
   * @expose
   */


  ByteBufferPrototype.mark = function (offset) {
    offset = typeof offset === 'undefined' ? this.offset : offset;

    if (!this.noAssert) {
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
    }

    this.markedOffset = offset;
    return this;
  };
  /**
   * Sets the byte order.
   * @param {boolean} littleEndian `true` for little endian byte order, `false` for big endian
   * @returns {!ByteBuffer} this
   * @expose
   */


  ByteBufferPrototype.order = function (littleEndian) {
    if (!this.noAssert) {
      if (typeof littleEndian !== 'boolean') throw TypeError("Illegal littleEndian: Not a boolean");
    }

    this.littleEndian = !!littleEndian;
    return this;
  };
  /**
   * Switches (to) little endian byte order.
   * @param {boolean=} littleEndian Defaults to `true`, otherwise uses big endian
   * @returns {!ByteBuffer} this
   * @expose
   */


  ByteBufferPrototype.LE = function (littleEndian) {
    this.littleEndian = typeof littleEndian !== 'undefined' ? !!littleEndian : true;
    return this;
  };
  /**
   * Switches (to) big endian byte order.
   * @param {boolean=} bigEndian Defaults to `true`, otherwise uses little endian
   * @returns {!ByteBuffer} this
   * @expose
   */


  ByteBufferPrototype.BE = function (bigEndian) {
    this.littleEndian = typeof bigEndian !== 'undefined' ? !bigEndian : false;
    return this;
  };
  /**
   * Prepends some data to this ByteBuffer. This will overwrite any contents before the specified offset up to the
   *  prepended data's length. If there is not enough space available before the specified `offset`, the backing buffer
   *  will be resized and its contents moved accordingly.
   * @param {!ByteBuffer|string|!ArrayBuffer} source Data to prepend. If `source` is a ByteBuffer, its offset will be
   *  modified according to the performed read operation.
   * @param {(string|number)=} encoding Encoding if `data` is a string ("base64", "hex", "binary", defaults to "utf8")
   * @param {number=} offset Offset to prepend at. Will use and decrease {@link ByteBuffer#offset} by the number of bytes
   *  prepended if omitted.
   * @returns {!ByteBuffer} this
   * @expose
   * @example A relative `00<01 02 03>.prepend(<04 05>)` results in `<04 05 01 02 03>, 04 05|`
   * @example An absolute `00<01 02 03>.prepend(<04 05>, 2)` results in `04<05 02 03>, 04 05|`
   */


  ByteBufferPrototype.prepend = function (source, encoding, offset) {
    if (typeof encoding === 'number' || typeof encoding !== 'string') {
      offset = encoding;
      encoding = undefined;
    }

    var relative = typeof offset === 'undefined';
    if (relative) offset = this.offset;

    if (!this.noAssert) {
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
      offset >>>= 0;
      if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
    }

    if (!(source instanceof ByteBuffer)) source = ByteBuffer.wrap(source, encoding);
    var len = source.limit - source.offset;
    if (len <= 0) return this; // Nothing to prepend

    var diff = len - offset;

    if (diff > 0) {
      // Not enough space before offset, so resize + move
      var buffer = new ArrayBuffer(this.buffer.byteLength + diff);
      var view = new Uint8Array(buffer);
      view.set(this.view.subarray(offset, this.buffer.byteLength), len);
      this.buffer = buffer;
      this.view = view;
      this.offset += diff;
      if (this.markedOffset >= 0) this.markedOffset += diff;
      this.limit += diff;
      offset += diff;
    } else {
      var arrayView = new Uint8Array(this.buffer);
    }

    this.view.set(source.view.subarray(source.offset, source.limit), offset - len);
    source.offset = source.limit;
    if (relative) this.offset -= len;
    return this;
  };
  /**
   * Prepends this ByteBuffer to another ByteBuffer. This will overwrite any contents before the specified offset up to the
   *  prepended data's length. If there is not enough space available before the specified `offset`, the backing buffer
   *  will be resized and its contents moved accordingly.
   * @param {!ByteBuffer} target Target ByteBuffer
   * @param {number=} offset Offset to prepend at. Will use and decrease {@link ByteBuffer#offset} by the number of bytes
   *  prepended if omitted.
   * @returns {!ByteBuffer} this
   * @expose
   * @see ByteBuffer#prepend
   */


  ByteBufferPrototype.prependTo = function (target, offset) {
    target.prepend(this, offset);
    return this;
  };
  /**
   * Prints debug information about this ByteBuffer's contents.
   * @param {function(string)=} out Output function to call, defaults to cc.log
   * @expose
   */


  ByteBufferPrototype.printDebug = function (out) {
    if (typeof out !== 'function') out = cc.log.bind(console);
    out(this.toString() + "\n" + "-------------------------------------------------------------------\n" + this.toDebug(
    /* columns */
    true));
  };
  /**
   * Gets the number of remaining readable bytes. Contents are the bytes between {@link ByteBuffer#offset} and
   *  {@link ByteBuffer#limit}, so this returns `limit - offset`.
   * @returns {number} Remaining readable bytes. May be negative if `offset > limit`.
   * @expose
   */


  ByteBufferPrototype.remaining = function () {
    return this.limit - this.offset;
  };
  /**
   * Resets this ByteBuffer's {@link ByteBuffer#offset}. If an offset has been marked through {@link ByteBuffer#mark}
   *  before, `offset` will be set to {@link ByteBuffer#markedOffset}, which will then be discarded. If no offset has been
   *  marked, sets `offset = 0`.
   * @returns {!ByteBuffer} this
   * @see ByteBuffer#mark
   * @expose
   */


  ByteBufferPrototype.reset = function () {
    if (this.markedOffset >= 0) {
      this.offset = this.markedOffset;
      this.markedOffset = -1;
    } else {
      this.offset = 0;
    }

    return this;
  };
  /**
   * Resizes this ByteBuffer to be backed by a buffer of at least the given capacity. Will do nothing if already that
   *  large or larger.
   * @param {number} capacity Capacity required
   * @returns {!ByteBuffer} this
   * @throws {TypeError} If `capacity` is not a number
   * @throws {RangeError} If `capacity < 0`
   * @expose
   */


  ByteBufferPrototype.resize = function (capacity) {
    if (!this.noAssert) {
      if (typeof capacity !== 'number' || capacity % 1 !== 0) throw TypeError("Illegal capacity: " + capacity + " (not an integer)");
      capacity |= 0;
      if (capacity < 0) throw RangeError("Illegal capacity: 0 <= " + capacity);
    }

    if (this.buffer.byteLength < capacity) {
      var buffer = new ArrayBuffer(capacity);
      var view = new Uint8Array(buffer);
      view.set(this.view);
      this.buffer = buffer;
      this.view = view;
    }

    return this;
  };
  /**
   * Reverses this ByteBuffer's contents.
   * @param {number=} begin Offset to start at, defaults to {@link ByteBuffer#offset}
   * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}
   * @returns {!ByteBuffer} this
   * @expose
   */


  ByteBufferPrototype.reverse = function (begin, end) {
    if (typeof begin === 'undefined') begin = this.offset;
    if (typeof end === 'undefined') end = this.limit;

    if (!this.noAssert) {
      if (typeof begin !== 'number' || begin % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
      begin >>>= 0;
      if (typeof end !== 'number' || end % 1 !== 0) throw TypeError("Illegal end: Not an integer");
      end >>>= 0;
      if (begin < 0 || begin > end || end > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + begin + " <= " + end + " <= " + this.buffer.byteLength);
    }

    if (begin === end) return this; // Nothing to reverse

    Array.prototype.reverse.call(this.view.subarray(begin, end));
    return this;
  };
  /**
   * Skips the next `length` bytes. This will just advance
   * @param {number} length Number of bytes to skip. May also be negative to move the offset back.
   * @returns {!ByteBuffer} this
   * @expose
   */


  ByteBufferPrototype.skip = function (length) {
    if (!this.noAssert) {
      if (typeof length !== 'number' || length % 1 !== 0) throw TypeError("Illegal length: " + length + " (not an integer)");
      length |= 0;
    }

    var offset = this.offset + length;

    if (!this.noAssert) {
      if (offset < 0 || offset > this.buffer.byteLength) throw RangeError("Illegal length: 0 <= " + this.offset + " + " + length + " <= " + this.buffer.byteLength);
    }

    this.offset = offset;
    return this;
  };
  /**
   * Slices this ByteBuffer by creating a cloned instance with `offset = begin` and `limit = end`.
   * @param {number=} begin Begin offset, defaults to {@link ByteBuffer#offset}.
   * @param {number=} end End offset, defaults to {@link ByteBuffer#limit}.
   * @returns {!ByteBuffer} Clone of this ByteBuffer with slicing applied, backed by the same {@link ByteBuffer#buffer}
   * @expose
   */


  ByteBufferPrototype.slice = function (begin, end) {
    if (typeof begin === 'undefined') begin = this.offset;
    if (typeof end === 'undefined') end = this.limit;

    if (!this.noAssert) {
      if (typeof begin !== 'number' || begin % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
      begin >>>= 0;
      if (typeof end !== 'number' || end % 1 !== 0) throw TypeError("Illegal end: Not an integer");
      end >>>= 0;
      if (begin < 0 || begin > end || end > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + begin + " <= " + end + " <= " + this.buffer.byteLength);
    }

    var bb = this.clone();
    bb.offset = begin;
    bb.limit = end;
    return bb;
  };
  /**
   * Returns a copy of the backing buffer that contains this ByteBuffer's contents. Contents are the bytes between
   *  {@link ByteBuffer#offset} and {@link ByteBuffer#limit}.
   * @param {boolean=} forceCopy If `true` returns a copy, otherwise returns a view referencing the same memory if
   *  possible. Defaults to `false`
   * @returns {!ArrayBuffer} Contents as an ArrayBuffer
   * @expose
   */


  ByteBufferPrototype.toBuffer = function (forceCopy) {
    var offset = this.offset,
        limit = this.limit;

    if (!this.noAssert) {
      if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: Not an integer");
      offset >>>= 0;
      if (typeof limit !== 'number' || limit % 1 !== 0) throw TypeError("Illegal limit: Not an integer");
      limit >>>= 0;
      if (offset < 0 || offset > limit || limit > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + offset + " <= " + limit + " <= " + this.buffer.byteLength);
    } // NOTE: It's not possible to have another ArrayBuffer reference the same memory as the backing buffer. This is
    // possible with Uint8Array#subarray only, but we have to return an ArrayBuffer by contract. So:


    if (!forceCopy && offset === 0 && limit === this.buffer.byteLength) return this.buffer;
    if (offset === limit) return EMPTY_BUFFER;
    var buffer = new ArrayBuffer(limit - offset);
    new Uint8Array(buffer).set(new Uint8Array(this.buffer).subarray(offset, limit), 0);
    return buffer;
  };
  /**
   * Returns a raw buffer compacted to contain this ByteBuffer's contents. Contents are the bytes between
   *  {@link ByteBuffer#offset} and {@link ByteBuffer#limit}. This is an alias of {@link ByteBuffer#toBuffer}.
   * @function
   * @param {boolean=} forceCopy If `true` returns a copy, otherwise returns a view referencing the same memory.
   *  Defaults to `false`
   * @returns {!ArrayBuffer} Contents as an ArrayBuffer
   * @expose
   */


  ByteBufferPrototype.toArrayBuffer = ByteBufferPrototype.toBuffer;
  /**
   * Converts the ByteBuffer's contents to a string.
   * @param {string=} encoding Output encoding. Returns an informative string representation if omitted but also allows
   *  direct conversion to "utf8", "hex", "base64" and "binary" encoding. "debug" returns a hex representation with
   *  highlighted offsets.
   * @param {number=} begin Offset to begin at, defaults to {@link ByteBuffer#offset}
   * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}
   * @returns {string} String representation
   * @throws {Error} If `encoding` is invalid
   * @expose
   */

  ByteBufferPrototype.toString = function (encoding, begin, end) {
    if (typeof encoding === 'undefined') return "ByteBufferAB(offset=" + this.offset + ",markedOffset=" + this.markedOffset + ",limit=" + this.limit + ",capacity=" + this.capacity() + ")";
    if (typeof encoding === 'number') encoding = "utf8", begin = encoding, end = begin;

    switch (encoding) {
      case "utf8":
        return this.toUTF8(begin, end);

      case "base64":
        return this.toBase64(begin, end);

      case "hex":
        return this.toHex(begin, end);

      case "binary":
        return this.toBinary(begin, end);

      case "debug":
        return this.toDebug();

      case "columns":
        return this.toColumns();

      default:
        throw Error("Unsupported encoding: " + encoding);
    }
  }; // lxiv-embeddable

  /**
   * lxiv-embeddable (c) 2014 Daniel Wirtz <dcode@dcode.io>
   * Released under the Apache License, Version 2.0
   * see: https://github.com/dcodeIO/lxiv for details
   */


  var lxiv = function () {
    "use strict";
    /**
     * lxiv namespace.
     * @type {!Object.<string,*>}
     * @exports lxiv
     */

    var lxiv = {};
    /**
     * Character codes for output.
     * @type {!Array.<number>}
     * @inner
     */

    var aout = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47];
    /**
     * Character codes for input.
     * @type {!Array.<number>}
     * @inner
     */

    var ain = [];

    for (var i = 0, k = aout.length; i < k; ++i) {
      ain[aout[i]] = i;
    }
    /**
     * Encodes bytes to base64 char codes.
     * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if
     *  there are no more bytes left.
     * @param {!function(number)} dst Characters destination as a function successively called with each encoded char
     *  code.
     */


    lxiv.encode = function (src, dst) {
      var b, t;

      while ((b = src()) !== null) {
        dst(aout[b >> 2 & 0x3f]);
        t = (b & 0x3) << 4;

        if ((b = src()) !== null) {
          t |= b >> 4 & 0xf;
          dst(aout[(t | b >> 4 & 0xf) & 0x3f]);
          t = (b & 0xf) << 2;
          if ((b = src()) !== null) dst(aout[(t | b >> 6 & 0x3) & 0x3f]), dst(aout[b & 0x3f]);else dst(aout[t & 0x3f]), dst(61);
        } else dst(aout[t & 0x3f]), dst(61), dst(61);
      }
    };
    /**
     * Decodes base64 char codes to bytes.
     * @param {!function():number|null} src Characters source as a function returning the next char code respectively
     *  `null` if there are no more characters left.
     * @param {!function(number)} dst Bytes destination as a function successively called with the next byte.
     * @throws {Error} If a character code is invalid
     */


    lxiv.decode = function (src, dst) {
      var c, t1, t2;

      function fail(c) {
        throw Error("Illegal character code: " + c);
      }

      while ((c = src()) !== null) {
        t1 = ain[c];
        if (typeof t1 === 'undefined') fail(c);

        if ((c = src()) !== null) {
          t2 = ain[c];
          if (typeof t2 === 'undefined') fail(c);
          dst(t1 << 2 >>> 0 | (t2 & 0x30) >> 4);

          if ((c = src()) !== null) {
            t1 = ain[c];
            if (typeof t1 === 'undefined') if (c === 61) break;else fail(c);
            dst((t2 & 0xf) << 4 >>> 0 | (t1 & 0x3c) >> 2);

            if ((c = src()) !== null) {
              t2 = ain[c];
              if (typeof t2 === 'undefined') if (c === 61) break;else fail(c);
              dst((t1 & 0x3) << 6 >>> 0 | t2);
            }
          }
        }
      }
    };
    /**
     * Tests if a string is valid base64.
     * @param {string} str String to test
     * @returns {boolean} `true` if valid, otherwise `false`
     */


    lxiv.test = function (str) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(str);
    };

    return lxiv;
  }(); // encodings/base64

  /**
   * Encodes this ByteBuffer's contents to a base64 encoded string.
   * @param {number=} begin Offset to begin at, defaults to {@link ByteBuffer#offset}.
   * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}.
   * @returns {string} Base64 encoded string
   * @throws {RangeError} If `begin` or `end` is out of bounds
   * @expose
   */


  ByteBufferPrototype.toBase64 = function (begin, end) {
    if (typeof begin === 'undefined') begin = this.offset;
    if (typeof end === 'undefined') end = this.limit;
    begin = begin | 0;
    end = end | 0;
    if (begin < 0 || end > this.capacity || begin > end) throw RangeError("begin, end");
    var sd;
    lxiv.encode(function () {
      return begin < end ? this.view[begin++] : null;
    }.bind(this), sd = stringDestination());
    return sd();
  };
  /**
   * Decodes a base64 encoded string to a ByteBuffer.
   * @param {string} str String to decode
   * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
   *  {@link ByteBuffer.DEFAULT_ENDIAN}.
   * @returns {!ByteBuffer} ByteBuffer
   * @expose
   */


  ByteBuffer.fromBase64 = function (str, littleEndian) {
    if (typeof str !== 'string') throw TypeError("str");
    var bb = new ByteBuffer(str.length / 4 * 3, littleEndian),
        i = 0;
    lxiv.decode(stringSource(str), function (b) {
      bb.view[i++] = b;
    });
    bb.limit = i;
    return bb;
  };
  /**
   * Encodes a binary string to base64 like `window.btoa` does.
   * @param {string} str Binary string
   * @returns {string} Base64 encoded string
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.btoa
   * @expose
   */


  ByteBuffer.btoa = function (str) {
    return ByteBuffer.fromBinary(str).toBase64();
  };
  /**
   * Decodes a base64 encoded string to binary like `window.atob` does.
   * @param {string} b64 Base64 encoded string
   * @returns {string} Binary string
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.atob
   * @expose
   */


  ByteBuffer.atob = function (b64) {
    return ByteBuffer.fromBase64(b64).toBinary();
  }; // encodings/binary

  /**
   * Encodes this ByteBuffer to a binary encoded string, that is using only characters 0x00-0xFF as bytes.
   * @param {number=} begin Offset to begin at. Defaults to {@link ByteBuffer#offset}.
   * @param {number=} end Offset to end at. Defaults to {@link ByteBuffer#limit}.
   * @returns {string} Binary encoded string
   * @throws {RangeError} If `offset > limit`
   * @expose
   */


  ByteBufferPrototype.toBinary = function (begin, end) {
    if (typeof begin === 'undefined') begin = this.offset;
    if (typeof end === 'undefined') end = this.limit;
    begin |= 0;
    end |= 0;
    if (begin < 0 || end > this.capacity() || begin > end) throw RangeError("begin, end");
    if (begin === end) return "";
    var chars = [],
        parts = [];

    while (begin < end) {
      chars.push(this.view[begin++]);
      if (chars.length >= 1024) parts.push(String.fromCharCode.apply(String, chars)), chars = [];
    }

    return parts.join('') + String.fromCharCode.apply(String, chars);
  };
  /**
   * Decodes a binary encoded string, that is using only characters 0x00-0xFF as bytes, to a ByteBuffer.
   * @param {string} str String to decode
   * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
   *  {@link ByteBuffer.DEFAULT_ENDIAN}.
   * @returns {!ByteBuffer} ByteBuffer
   * @expose
   */


  ByteBuffer.fromBinary = function (str, littleEndian) {
    if (typeof str !== 'string') throw TypeError("str");
    var i = 0,
        k = str.length,
        charCode,
        bb = new ByteBuffer(k, littleEndian);

    while (i < k) {
      charCode = str.charCodeAt(i);
      if (charCode > 0xff) throw RangeError("illegal char code: " + charCode);
      bb.view[i++] = charCode;
    }

    bb.limit = k;
    return bb;
  }; // encodings/debug

  /**
   * Encodes this ByteBuffer to a hex encoded string with marked offsets. Offset symbols are:
   * * `<` : offset,
   * * `'` : markedOffset,
   * * `>` : limit,
   * * `|` : offset and limit,
   * * `[` : offset and markedOffset,
   * * `]` : markedOffset and limit,
   * * `!` : offset, markedOffset and limit
   * @param {boolean=} columns If `true` returns two columns hex + ascii, defaults to `false`
   * @returns {string|!Array.<string>} Debug string or array of lines if `asArray = true`
   * @expose
   * @example `>00'01 02<03` contains four bytes with `limit=0, markedOffset=1, offset=3`
   * @example `00[01 02 03>` contains four bytes with `offset=markedOffset=1, limit=4`
   * @example `00|01 02 03` contains four bytes with `offset=limit=1, markedOffset=-1`
   * @example `|` contains zero bytes with `offset=limit=0, markedOffset=-1`
   */


  ByteBufferPrototype.toDebug = function (columns) {
    var i = -1,
        k = this.buffer.byteLength,
        b,
        hex = "",
        asc = "",
        out = "";

    while (i < k) {
      if (i !== -1) {
        b = this.view[i];
        if (b < 0x10) hex += "0" + b.toString(16).toUpperCase();else hex += b.toString(16).toUpperCase();
        if (columns) asc += b > 32 && b < 127 ? String.fromCharCode(b) : '.';
      }

      ++i;

      if (columns) {
        if (i > 0 && i % 16 === 0 && i !== k) {
          while (hex.length < 3 * 16 + 3) {
            hex += " ";
          }

          out += hex + asc + "\n";
          hex = asc = "";
        }
      }

      if (i === this.offset && i === this.limit) hex += i === this.markedOffset ? "!" : "|";else if (i === this.offset) hex += i === this.markedOffset ? "[" : "<";else if (i === this.limit) hex += i === this.markedOffset ? "]" : ">";else hex += i === this.markedOffset ? "'" : columns || i !== 0 && i !== k ? " " : "";
    }

    if (columns && hex !== " ") {
      while (hex.length < 3 * 16 + 3) {
        hex += " ";
      }

      out += hex + asc + "\n";
    }

    return columns ? out : hex;
  };
  /**
   * Decodes a hex encoded string with marked offsets to a ByteBuffer.
   * @param {string} str Debug string to decode (not be generated with `columns = true`)
   * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
   *  {@link ByteBuffer.DEFAULT_ENDIAN}.
   * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
   *  {@link ByteBuffer.DEFAULT_NOASSERT}.
   * @returns {!ByteBuffer} ByteBuffer
   * @expose
   * @see ByteBuffer#toDebug
   */


  ByteBuffer.fromDebug = function (str, littleEndian, noAssert) {
    var k = str.length,
        bb = new ByteBuffer((k + 1) / 3 | 0, littleEndian, noAssert);
    var i = 0,
        j = 0,
        ch,
        b,
        rs = false,
        // Require symbol next
    ho = false,
        hm = false,
        hl = false,
        // Already has offset (ho), markedOffset (hm), limit (hl)?
    fail = false;

    while (i < k) {
      switch (ch = str.charAt(i++)) {
        case '!':
          if (!noAssert) {
            if (ho || hm || hl) {
              fail = true;
              break;
            }

            ho = hm = hl = true;
          }

          bb.offset = bb.markedOffset = bb.limit = j;
          rs = false;
          break;

        case '|':
          if (!noAssert) {
            if (ho || hl) {
              fail = true;
              break;
            }

            ho = hl = true;
          }

          bb.offset = bb.limit = j;
          rs = false;
          break;

        case '[':
          if (!noAssert) {
            if (ho || hm) {
              fail = true;
              break;
            }

            ho = hm = true;
          }

          bb.offset = bb.markedOffset = j;
          rs = false;
          break;

        case '<':
          if (!noAssert) {
            if (ho) {
              fail = true;
              break;
            }

            ho = true;
          }

          bb.offset = j;
          rs = false;
          break;

        case ']':
          if (!noAssert) {
            if (hl || hm) {
              fail = true;
              break;
            }

            hl = hm = true;
          }

          bb.limit = bb.markedOffset = j;
          rs = false;
          break;

        case '>':
          if (!noAssert) {
            if (hl) {
              fail = true;
              break;
            }

            hl = true;
          }

          bb.limit = j;
          rs = false;
          break;

        case "'":
          if (!noAssert) {
            if (hm) {
              fail = true;
              break;
            }

            hm = true;
          }

          bb.markedOffset = j;
          rs = false;
          break;

        case ' ':
          rs = false;
          break;

        default:
          if (!noAssert) {
            if (rs) {
              fail = true;
              break;
            }
          }

          b = parseInt(ch + str.charAt(i++), 16);

          if (!noAssert) {
            if (isNaN(b) || b < 0 || b > 255) throw TypeError("Illegal str: Not a debug encoded string");
          }

          bb.view[j++] = b;
          rs = true;
      }

      if (fail) throw TypeError("Illegal str: Invalid symbol at " + i);
    }

    if (!noAssert) {
      if (!ho || !hl) throw TypeError("Illegal str: Missing offset or limit");
      if (j < bb.buffer.byteLength) throw TypeError("Illegal str: Not a debug encoded string (is it hex?) " + j + " < " + k);
    }

    return bb;
  }; // encodings/hex

  /**
   * Encodes this ByteBuffer's contents to a hex encoded string.
   * @param {number=} begin Offset to begin at. Defaults to {@link ByteBuffer#offset}.
   * @param {number=} end Offset to end at. Defaults to {@link ByteBuffer#limit}.
   * @returns {string} Hex encoded string
   * @expose
   */


  ByteBufferPrototype.toHex = function (begin, end) {
    begin = typeof begin === 'undefined' ? this.offset : begin;
    end = typeof end === 'undefined' ? this.limit : end;

    if (!this.noAssert) {
      if (typeof begin !== 'number' || begin % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
      begin >>>= 0;
      if (typeof end !== 'number' || end % 1 !== 0) throw TypeError("Illegal end: Not an integer");
      end >>>= 0;
      if (begin < 0 || begin > end || end > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + begin + " <= " + end + " <= " + this.buffer.byteLength);
    }

    var out = new Array(end - begin),
        b;

    while (begin < end) {
      b = this.view[begin++];
      if (b < 0x10) out.push("0", b.toString(16));else out.push(b.toString(16));
    }

    return out.join('');
  };
  /**
   * Decodes a hex encoded string to a ByteBuffer.
   * @param {string} str String to decode
   * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
   *  {@link ByteBuffer.DEFAULT_ENDIAN}.
   * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
   *  {@link ByteBuffer.DEFAULT_NOASSERT}.
   * @returns {!ByteBuffer} ByteBuffer
   * @expose
   */


  ByteBuffer.fromHex = function (str, littleEndian, noAssert) {
    if (!noAssert) {
      if (typeof str !== 'string') throw TypeError("Illegal str: Not a string");
      if (str.length % 2 !== 0) throw TypeError("Illegal str: Length not a multiple of 2");
    }

    var k = str.length,
        bb = new ByteBuffer(k / 2 | 0, littleEndian),
        b;

    for (var i = 0, j = 0; i < k; i += 2) {
      b = parseInt(str.substring(i, i + 2), 16);
      if (!noAssert) if (!isFinite(b) || b < 0 || b > 255) throw TypeError("Illegal str: Contains non-hex characters");
      bb.view[j++] = b;
    }

    bb.limit = j;
    return bb;
  }; // utfx-embeddable

  /**
   * utfx-embeddable (c) 2014 Daniel Wirtz <dcode@dcode.io>
   * Released under the Apache License, Version 2.0
   * see: https://github.com/dcodeIO/utfx for details
   */


  var utfx = function () {
    "use strict";
    /**
     * utfx namespace.
     * @inner
     * @type {!Object.<string,*>}
     */

    var utfx = {};
    /**
     * Maximum valid code point.
     * @type {number}
     * @const
     */

    utfx.MAX_CODEPOINT = 0x10FFFF;
    /**
     * Encodes UTF8 code points to UTF8 bytes.
     * @param {(!function():number|null) | number} src Code points source, either as a function returning the next code point
     *  respectively `null` if there are no more code points left or a single numeric code point.
     * @param {!function(number)} dst Bytes destination as a function successively called with the next byte
     */

    utfx.encodeUTF8 = function (src, dst) {
      var cp = null;
      if (typeof src === 'number') cp = src, src = function src() {
        return null;
      };

      while (cp !== null || (cp = src()) !== null) {
        if (cp < 0x80) dst(cp & 0x7F);else if (cp < 0x800) dst(cp >> 6 & 0x1F | 0xC0), dst(cp & 0x3F | 0x80);else if (cp < 0x10000) dst(cp >> 12 & 0x0F | 0xE0), dst(cp >> 6 & 0x3F | 0x80), dst(cp & 0x3F | 0x80);else dst(cp >> 18 & 0x07 | 0xF0), dst(cp >> 12 & 0x3F | 0x80), dst(cp >> 6 & 0x3F | 0x80), dst(cp & 0x3F | 0x80);
        cp = null;
      }
    };
    /**
     * Decodes UTF8 bytes to UTF8 code points.
     * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if there
     *  are no more bytes left.
     * @param {!function(number)} dst Code points destination as a function successively called with each decoded code point.
     * @throws {RangeError} If a starting byte is invalid in UTF8
     * @throws {Error} If the last sequence is truncated. Has an array property `bytes` holding the
     *  remaining bytes.
     */


    utfx.decodeUTF8 = function (src, dst) {
      var a,
          b,
          c,
          d,
          fail = function fail(b) {
        b = b.slice(0, b.indexOf(null));
        var err = Error(b.toString());
        err.name = "TruncatedError";
        err['bytes'] = b;
        throw err;
      };

      while ((a = src()) !== null) {
        if ((a & 0x80) === 0) dst(a);else if ((a & 0xE0) === 0xC0) (b = src()) === null && fail([a, b]), dst((a & 0x1F) << 6 | b & 0x3F);else if ((a & 0xF0) === 0xE0) ((b = src()) === null || (c = src()) === null) && fail([a, b, c]), dst((a & 0x0F) << 12 | (b & 0x3F) << 6 | c & 0x3F);else if ((a & 0xF8) === 0xF0) ((b = src()) === null || (c = src()) === null || (d = src()) === null) && fail([a, b, c, d]), dst((a & 0x07) << 18 | (b & 0x3F) << 12 | (c & 0x3F) << 6 | d & 0x3F);else throw RangeError("Illegal starting byte: " + a);
      }
    };
    /**
     * Converts UTF16 characters to UTF8 code points.
     * @param {!function():number|null} src Characters source as a function returning the next char code respectively
     *  `null` if there are no more characters left.
     * @param {!function(number)} dst Code points destination as a function successively called with each converted code
     *  point.
     */


    utfx.UTF16toUTF8 = function (src, dst) {
      var c1,
          c2 = null;

      while (true) {
        if ((c1 = c2 !== null ? c2 : src()) === null) break;

        if (c1 >= 0xD800 && c1 <= 0xDFFF) {
          if ((c2 = src()) !== null) {
            if (c2 >= 0xDC00 && c2 <= 0xDFFF) {
              dst((c1 - 0xD800) * 0x400 + c2 - 0xDC00 + 0x10000);
              c2 = null;
              continue;
            }
          }
        }

        dst(c1);
      }

      if (c2 !== null) dst(c2);
    };
    /**
     * Converts UTF8 code points to UTF16 characters.
     * @param {(!function():number|null) | number} src Code points source, either as a function returning the next code point
     *  respectively `null` if there are no more code points left or a single numeric code point.
     * @param {!function(number)} dst Characters destination as a function successively called with each converted char code.
     * @throws {RangeError} If a code point is out of range
     */


    utfx.UTF8toUTF16 = function (src, dst) {
      var cp = null;
      if (typeof src === 'number') cp = src, src = function src() {
        return null;
      };

      while (cp !== null || (cp = src()) !== null) {
        if (cp <= 0xFFFF) dst(cp);else cp -= 0x10000, dst((cp >> 10) + 0xD800), dst(cp % 0x400 + 0xDC00);
        cp = null;
      }
    };
    /**
     * Converts and encodes UTF16 characters to UTF8 bytes.
     * @param {!function():number|null} src Characters source as a function returning the next char code respectively `null`
     *  if there are no more characters left.
     * @param {!function(number)} dst Bytes destination as a function successively called with the next byte.
     */


    utfx.encodeUTF16toUTF8 = function (src, dst) {
      utfx.UTF16toUTF8(src, function (cp) {
        utfx.encodeUTF8(cp, dst);
      });
    };
    /**
     * Decodes and converts UTF8 bytes to UTF16 characters.
     * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if there
     *  are no more bytes left.
     * @param {!function(number)} dst Characters destination as a function successively called with each converted char code.
     * @throws {RangeError} If a starting byte is invalid in UTF8
     * @throws {Error} If the last sequence is truncated. Has an array property `bytes` holding the remaining bytes.
     */


    utfx.decodeUTF8toUTF16 = function (src, dst) {
      utfx.decodeUTF8(src, function (cp) {
        utfx.UTF8toUTF16(cp, dst);
      });
    };
    /**
     * Calculates the byte length of an UTF8 code point.
     * @param {number} cp UTF8 code point
     * @returns {number} Byte length
     */


    utfx.calculateCodePoint = function (cp) {
      return cp < 0x80 ? 1 : cp < 0x800 ? 2 : cp < 0x10000 ? 3 : 4;
    };
    /**
     * Calculates the number of UTF8 bytes required to store UTF8 code points.
     * @param {(!function():number|null)} src Code points source as a function returning the next code point respectively
     *  `null` if there are no more code points left.
     * @returns {number} The number of UTF8 bytes required
     */


    utfx.calculateUTF8 = function (src) {
      var cp,
          l = 0;

      while ((cp = src()) !== null) {
        l += cp < 0x80 ? 1 : cp < 0x800 ? 2 : cp < 0x10000 ? 3 : 4;
      }

      return l;
    };
    /**
     * Calculates the number of UTF8 code points respectively UTF8 bytes required to store UTF16 char codes.
     * @param {(!function():number|null)} src Characters source as a function returning the next char code respectively
     *  `null` if there are no more characters left.
     * @returns {!Array.<number>} The number of UTF8 code points at index 0 and the number of UTF8 bytes required at index 1.
     */


    utfx.calculateUTF16asUTF8 = function (src) {
      var n = 0,
          l = 0;
      utfx.UTF16toUTF8(src, function (cp) {
        ++n;
        l += cp < 0x80 ? 1 : cp < 0x800 ? 2 : cp < 0x10000 ? 3 : 4;
      });
      return [n, l];
    };

    return utfx;
  }(); // encodings/utf8

  /**
   * Encodes this ByteBuffer's contents between {@link ByteBuffer#offset} and {@link ByteBuffer#limit} to an UTF8 encoded
   *  string.
   * @returns {string} Hex encoded string
   * @throws {RangeError} If `offset > limit`
   * @expose
   */


  ByteBufferPrototype.toUTF8 = function (begin, end) {
    if (typeof begin === 'undefined') begin = this.offset;
    if (typeof end === 'undefined') end = this.limit;

    if (!this.noAssert) {
      if (typeof begin !== 'number' || begin % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
      begin >>>= 0;
      if (typeof end !== 'number' || end % 1 !== 0) throw TypeError("Illegal end: Not an integer");
      end >>>= 0;
      if (begin < 0 || begin > end || end > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + begin + " <= " + end + " <= " + this.buffer.byteLength);
    }

    var sd;

    try {
      utfx.decodeUTF8toUTF16(function () {
        return begin < end ? this.view[begin++] : null;
      }.bind(this), sd = stringDestination());
    } catch (e) {
      if (begin !== end) throw RangeError("Illegal range: Truncated data, " + begin + " != " + end);
    }

    return sd();
  };
  /**
   * Decodes an UTF8 encoded string to a ByteBuffer.
   * @param {string} str String to decode
   * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
   *  {@link ByteBuffer.DEFAULT_ENDIAN}.
   * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
   *  {@link ByteBuffer.DEFAULT_NOASSERT}.
   * @returns {!ByteBuffer} ByteBuffer
   * @expose
   */


  ByteBuffer.fromUTF8 = function (str, littleEndian, noAssert) {
    if (!noAssert) if (typeof str !== 'string') throw TypeError("Illegal str: Not a string");
    var bb = new ByteBuffer(utfx.calculateUTF16asUTF8(stringSource(str), true)[1], littleEndian, noAssert),
        i = 0;
    utfx.encodeUTF16toUTF8(stringSource(str), function (b) {
      bb.view[i++] = b;
    });
    bb.limit = i;
    return bb;
  };

  return ByteBuffer;
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL25ldC93cy9wcm90b2J1Zi9ieXRlYnVmZmVyLmpzIl0sIm5hbWVzIjpbImdsb2JhbCIsImZhY3RvcnkiLCJkZWZpbmUiLCJyZXF1aXJlIiwibW9kdWxlIiwiTG9uZyIsImUiLCJCeXRlQnVmZmVyIiwiY2FwYWNpdHkiLCJsaXR0bGVFbmRpYW4iLCJub0Fzc2VydCIsIkRFRkFVTFRfQ0FQQUNJVFkiLCJERUZBVUxUX0VORElBTiIsIkRFRkFVTFRfTk9BU1NFUlQiLCJSYW5nZUVycm9yIiwiYnVmZmVyIiwiRU1QVFlfQlVGRkVSIiwiQXJyYXlCdWZmZXIiLCJ2aWV3IiwiVWludDhBcnJheSIsIm9mZnNldCIsIm1hcmtlZE9mZnNldCIsImxpbWl0IiwiVkVSU0lPTiIsIkxJVFRMRV9FTkRJQU4iLCJCSUdfRU5ESUFOIiwiQnl0ZUJ1ZmZlclByb3RvdHlwZSIsInByb3RvdHlwZSIsIl9faXNCeXRlQnVmZmVyX18iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsInN0cmluZ0Zyb21DaGFyQ29kZSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInN0cmluZ1NvdXJjZSIsInMiLCJpIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsInN0cmluZ0Rlc3RpbmF0aW9uIiwiY3MiLCJwcyIsImFyZ3VtZW50cyIsImpvaW4iLCJhcHBseSIsInB1c2giLCJBcnJheSIsImFjY2Vzc29yIiwiYWxsb2NhdGUiLCJjb25jYXQiLCJidWZmZXJzIiwiZW5jb2RpbmciLCJ1bmRlZmluZWQiLCJrIiwiaXNCeXRlQnVmZmVyIiwid3JhcCIsImJiIiwiYmkiLCJzZXQiLCJzdWJhcnJheSIsInR5cGUiLCJmcm9tQmFzZTY0IiwiZnJvbUhleCIsImZyb21CaW5hcnkiLCJmcm9tVVRGOCIsImZyb21EZWJ1ZyIsIkVycm9yIiwiVHlwZUVycm9yIiwiY2xvbmUiLCJjYWxsIiwiYnl0ZU9mZnNldCIsImJ5dGVMZW5ndGgiLCJ0b1N0cmluZyIsIndyaXRlQml0U2V0IiwicmVsYXRpdmUiLCJzdGFydCIsImJpdHMiLCJieXRlcyIsImJpdCIsIndyaXRlVmFyaW50MzIiLCJ3cml0ZUJ5dGUiLCJtIiwicmVhZEJpdFNldCIsInJldCIsInJlYWRWYXJpbnQzMiIsInJlYWRCeXRlIiwicmVhZEJ5dGVzIiwic2xpY2UiLCJ3cml0ZUludDgiLCJjYXBhY2l0eTAiLCJyZXNpemUiLCJyZWFkSW50OCIsIndyaXRlVWludDgiLCJjYXBhY2l0eTEiLCJ3cml0ZVVJbnQ4IiwicmVhZFVpbnQ4IiwicmVhZFVJbnQ4Iiwid3JpdGVJbnQxNiIsImNhcGFjaXR5MiIsIndyaXRlU2hvcnQiLCJyZWFkSW50MTYiLCJyZWFkU2hvcnQiLCJ3cml0ZVVpbnQxNiIsImNhcGFjaXR5MyIsIndyaXRlVUludDE2IiwicmVhZFVpbnQxNiIsInJlYWRVSW50MTYiLCJ3cml0ZUludDMyIiwiY2FwYWNpdHk0Iiwid3JpdGVJbnQiLCJyZWFkSW50MzIiLCJyZWFkSW50Iiwid3JpdGVVaW50MzIiLCJjYXBhY2l0eTUiLCJ3cml0ZVVJbnQzMiIsInJlYWRVaW50MzIiLCJyZWFkVUludDMyIiwid3JpdGVJbnQ2NCIsImZyb21OdW1iZXIiLCJmcm9tU3RyaW5nIiwiY2FwYWNpdHk2IiwibG8iLCJsb3ciLCJoaSIsImhpZ2giLCJ3cml0ZUxvbmciLCJyZWFkSW50NjQiLCJ0b051bWJlciIsInJlYWRMb25nIiwid3JpdGVVaW50NjQiLCJjYXBhY2l0eTciLCJ3cml0ZVVJbnQ2NCIsInJlYWRVaW50NjQiLCJyZWFkVUludDY0IiwiaWVlZTc1NF9yZWFkIiwiaXNMRSIsIm1MZW4iLCJuQnl0ZXMiLCJlTGVuIiwiZU1heCIsImVCaWFzIiwibkJpdHMiLCJkIiwiTmFOIiwiSW5maW5pdHkiLCJNYXRoIiwicG93IiwiaWVlZTc1NF93cml0ZSIsImMiLCJydCIsImFicyIsImlzTmFOIiwiZmxvb3IiLCJsb2ciLCJMTjIiLCJ3cml0ZUZsb2F0MzIiLCJjYXBhY2l0eTgiLCJ3cml0ZUZsb2F0IiwicmVhZEZsb2F0MzIiLCJyZWFkRmxvYXQiLCJ3cml0ZUZsb2F0NjQiLCJjYXBhY2l0eTkiLCJ3cml0ZURvdWJsZSIsInJlYWRGbG9hdDY0IiwicmVhZERvdWJsZSIsIk1BWF9WQVJJTlQzMl9CWVRFUyIsImNhbGN1bGF0ZVZhcmludDMyIiwiemlnWmFnRW5jb2RlMzIiLCJuIiwiemlnWmFnRGVjb2RlMzIiLCJzaXplIiwiYiIsImNhcGFjaXR5MTAiLCJ3cml0ZVZhcmludDMyWmlnWmFnIiwiZXJyIiwicmVhZFZhcmludDMyWmlnWmFnIiwidmFsIiwiTUFYX1ZBUklOVDY0X0JZVEVTIiwiY2FsY3VsYXRlVmFyaW50NjQiLCJwYXJ0MCIsInRvSW50IiwicGFydDEiLCJzaGlmdFJpZ2h0VW5zaWduZWQiLCJwYXJ0MiIsInppZ1phZ0VuY29kZTY0IiwidW5zaWduZWQiLCJ0b1NpZ25lZCIsInNoaWZ0TGVmdCIsInhvciIsInNoaWZ0UmlnaHQiLCJ0b1Vuc2lnbmVkIiwiemlnWmFnRGVjb2RlNjQiLCJhbmQiLCJPTkUiLCJuZWdhdGUiLCJ3cml0ZVZhcmludDY0IiwiY2FwYWNpdHkxMSIsIndyaXRlVmFyaW50NjRaaWdaYWciLCJyZWFkVmFyaW50NjQiLCJmcm9tQml0cyIsInJlYWRWYXJpbnQ2NFppZ1phZyIsIndyaXRlQ1N0cmluZyIsInN0ciIsInV0ZngiLCJjYWxjdWxhdGVVVEYxNmFzVVRGOCIsImNhcGFjaXR5MTIiLCJlbmNvZGVVVEYxNnRvVVRGOCIsImJpbmQiLCJyZWFkQ1N0cmluZyIsInRlbXAiLCJzZCIsImRlY29kZVVURjh0b1VURjE2Iiwid3JpdGVJU3RyaW5nIiwiY2FwYWNpdHkxMyIsInJlYWRJU3RyaW5nIiwibGVuIiwicmVhZFVURjhTdHJpbmciLCJNRVRSSUNTX0JZVEVTIiwiTUVUUklDU19DSEFSUyIsIndyaXRlVVRGOFN0cmluZyIsImNhcGFjaXR5MTQiLCJ3cml0ZVN0cmluZyIsImNhbGN1bGF0ZVVURjhDaGFycyIsImNhbGN1bGF0ZVVURjhCeXRlcyIsImNhbGN1bGF0ZVN0cmluZyIsIm1ldHJpY3MiLCJkZWNvZGVVVEY4IiwiY3AiLCJVVEY4dG9VVEYxNiIsInJlYWRTdHJpbmciLCJ3cml0ZVZTdHJpbmciLCJsIiwiY2FwYWNpdHkxNSIsInJlYWRWU3RyaW5nIiwiYXBwZW5kIiwic291cmNlIiwiY2FwYWNpdHkxNiIsImFwcGVuZFRvIiwidGFyZ2V0Iiwid3JpdGVCeXRlcyIsImFzc2VydCIsImNsZWFyIiwiY29weSIsImNvbXBhY3QiLCJiZWdpbiIsImVuZCIsImNvcHlUbyIsInRhcmdldE9mZnNldCIsInNvdXJjZU9mZnNldCIsInNvdXJjZUxpbWl0IiwidGFyZ2V0UmVsYXRpdmUiLCJlbnN1cmVDYXBhY2l0eSIsImN1cnJlbnQiLCJmaWxsIiwiZmxpcCIsIm1hcmsiLCJvcmRlciIsIkxFIiwiQkUiLCJiaWdFbmRpYW4iLCJwcmVwZW5kIiwiZGlmZiIsImFycmF5VmlldyIsInByZXBlbmRUbyIsInByaW50RGVidWciLCJvdXQiLCJjYyIsImNvbnNvbGUiLCJ0b0RlYnVnIiwicmVtYWluaW5nIiwicmVzZXQiLCJyZXZlcnNlIiwic2tpcCIsInRvQnVmZmVyIiwiZm9yY2VDb3B5IiwidG9BcnJheUJ1ZmZlciIsInRvVVRGOCIsInRvQmFzZTY0IiwidG9IZXgiLCJ0b0JpbmFyeSIsInRvQ29sdW1ucyIsImx4aXYiLCJhb3V0IiwiYWluIiwiZW5jb2RlIiwic3JjIiwiZHN0IiwidCIsImRlY29kZSIsInQxIiwidDIiLCJmYWlsIiwidGVzdCIsImJ0b2EiLCJhdG9iIiwiYjY0IiwiY2hhcnMiLCJwYXJ0cyIsImNoYXJDb2RlIiwiY29sdW1ucyIsImhleCIsImFzYyIsInRvVXBwZXJDYXNlIiwiaiIsImNoIiwicnMiLCJobyIsImhtIiwiaGwiLCJjaGFyQXQiLCJwYXJzZUludCIsInN1YnN0cmluZyIsImlzRmluaXRlIiwiTUFYX0NPREVQT0lOVCIsImVuY29kZVVURjgiLCJhIiwiaW5kZXhPZiIsIm5hbWUiLCJVVEYxNnRvVVRGOCIsImMxIiwi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UUFBWCxHQUFzQixVQUFTMEksR0FBVCxFQUFjcE0sWUFBZCxFQUE0QkMsUUFBNUIsRUFBc0M7SUFDeEQsSUFBSSxDQUFDQSxRQUFMLEVBQ0ksSUFBSSxPQUFPbU0sR0FBUCxLQUFlLFFBQW5CLEVBQ0ksTUFBTXZJLFNBQVMsQ0FBQywyQkFBRCxDQUFmO0lBQ1IsSUFBSVgsRUFBRSxHQUFHLElBQUlwRCxVQUFKLENBQWV1TSxJQUFJLENBQUNDLG9CQUFMLENBQTBCMUssWUFBWSxDQUFDd0ssR0FBRCxDQUF0QyxFQUE2QyxJQUE3QyxFQUFtRCxDQUFuRCxDQUFmLEVBQXNFcE0sWUFBdEUsRUFBb0ZDLFFBQXBGLENBQVQ7SUFBQSxJQUNJNkIsQ0FBQyxHQUFHLENBRFI7SUFFQXVLLElBQUksQ0FBQ0csaUJBQUwsQ0FBdUI1SyxZQUFZLENBQUN3SyxHQUFELENBQW5DLEVBQTBDLFVBQVMvQixDQUFULEVBQVk7TUFDbERuSCxFQUFFLENBQUN6QyxJQUFILENBQVFxQixDQUFDLEVBQVQsSUFBZXVJLENBQWY7SUFDSCxDQUZEO0lBR0FuSCxFQUFFLENBQUNyQyxLQUFILEdBQVdpQixDQUFYO0lBQ0EsT0FBT29CLEVBQVA7RUFDSCxDQVhEOztFQWFBLE9BQU9wRCxVQUFQO0FBQ0gsQ0F0b0hEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIENvcHlyaWdodCAyMDEzLTIwMTQgRGFuaWVsIFdpcnR6IDxkY29kZUBkY29kZS5pbz5cbiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBsaWNlbnNlIGJ5dGVidWZmZXIuanMgKGMpIDIwMTUgRGFuaWVsIFdpcnR6IDxkY29kZUBkY29kZS5pbz5cbiAqIEJhY2tpbmcgYnVmZmVyOiBBcnJheUJ1ZmZlciwgQWNjZXNzb3I6IFVpbnQ4QXJyYXlcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjBcbiAqIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Rjb2RlSU8vYnl0ZWJ1ZmZlci5qcyBmb3IgZGV0YWlsc1xuICovXG4oZnVuY3Rpb24oZ2xvYmFsLCBmYWN0b3J5KSB7XG5cbiAgICAvKiBBTUQgKi8gaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lW1wiYW1kXCJdKVxuICAgICAgICBkZWZpbmUoW1wibG9uZ1wiXSwgZmFjdG9yeSk7XG4gICAgLyogQ29tbW9uSlMgKi8gZWxzZSBpZiAodHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiBtb2R1bGUgJiYgbW9kdWxlW1wiZXhwb3J0c1wiXSlcbiAgICAgICAgbW9kdWxlWydleHBvcnRzJ10gPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgTG9uZzsgdHJ5IHsgTG9uZyA9IHJlcXVpcmUoXCJsb25nXCIpOyB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgcmV0dXJuIGZhY3RvcnkoTG9uZyk7XG4gICAgICAgIH0pKCk7XG4gICAgLyogR2xvYmFsICovIGVsc2VcbiAgICAgICAgKGdsb2JhbFtcImRjb2RlSU9cIl0gPSBnbG9iYWxbXCJkY29kZUlPXCJdIHx8IHt9KVtcIkJ5dGVCdWZmZXJcIl0gPSBmYWN0b3J5KGdsb2JhbFtcImRjb2RlSU9cIl1bXCJMb25nXCJdKTtcblxufSkodGhpcywgZnVuY3Rpb24oTG9uZykge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0cyBhIG5ldyBCeXRlQnVmZmVyLlxuICAgICAqIEBjbGFzcyBUaGUgc3dpc3MgYXJteSBrbmlmZSBmb3IgYmluYXJ5IGRhdGEgaW4gSmF2YVNjcmlwdC5cbiAgICAgKiBAZXhwb3J0cyBCeXRlQnVmZmVyXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtudW1iZXI9fSBjYXBhY2l0eSBJbml0aWFsIGNhcGFjaXR5LiBEZWZhdWx0cyB0byB7QGxpbmsgQnl0ZUJ1ZmZlci5ERUZBVUxUX0NBUEFDSVRZfS5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBsaXR0bGVFbmRpYW4gV2hldGhlciB0byB1c2UgbGl0dGxlIG9yIGJpZyBlbmRpYW4gYnl0ZSBvcmRlci4gRGVmYXVsdHMgdG9cbiAgICAgKiAge0BsaW5rIEJ5dGVCdWZmZXIuREVGQVVMVF9FTkRJQU59LlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IG5vQXNzZXJ0IFdoZXRoZXIgdG8gc2tpcCBhc3NlcnRpb25zIG9mIG9mZnNldHMgYW5kIHZhbHVlcy4gRGVmYXVsdHMgdG9cbiAgICAgKiAge0BsaW5rIEJ5dGVCdWZmZXIuREVGQVVMVF9OT0FTU0VSVH0uXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIHZhciBCeXRlQnVmZmVyID0gZnVuY3Rpb24oY2FwYWNpdHksIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjYXBhY2l0eSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICBjYXBhY2l0eSA9IEJ5dGVCdWZmZXIuREVGQVVMVF9DQVBBQ0lUWTtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgbGl0dGxlRW5kaWFuID0gQnl0ZUJ1ZmZlci5ERUZBVUxUX0VORElBTjtcbiAgICAgICAgaWYgKHR5cGVvZiBub0Fzc2VydCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICBub0Fzc2VydCA9IEJ5dGVCdWZmZXIuREVGQVVMVF9OT0FTU0VSVDtcbiAgICAgICAgaWYgKCFub0Fzc2VydCkge1xuICAgICAgICAgICAgY2FwYWNpdHkgPSBjYXBhY2l0eSB8IDA7XG4gICAgICAgICAgICBpZiAoY2FwYWNpdHkgPCAwKVxuICAgICAgICAgICAgICAgIHRocm93IFJhbmdlRXJyb3IoXCJJbGxlZ2FsIGNhcGFjaXR5XCIpO1xuICAgICAgICAgICAgbGl0dGxlRW5kaWFuID0gISFsaXR0bGVFbmRpYW47XG4gICAgICAgICAgICBub0Fzc2VydCA9ICEhbm9Bc3NlcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQmFja2luZyBBcnJheUJ1ZmZlci5cbiAgICAgICAgICogQHR5cGUgeyFBcnJheUJ1ZmZlcn1cbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5idWZmZXIgPSBjYXBhY2l0eSA9PT0gMCA/IEVNUFRZX0JVRkZFUiA6IG5ldyBBcnJheUJ1ZmZlcihjYXBhY2l0eSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVpbnQ4QXJyYXkgdXRpbGl6ZWQgdG8gbWFuaXB1bGF0ZSB0aGUgYmFja2luZyBidWZmZXIuIEJlY29tZXMgYG51bGxgIGlmIHRoZSBiYWNraW5nIGJ1ZmZlciBoYXMgYSBjYXBhY2l0eSBvZiBgMGAuXG4gICAgICAgICAqIEB0eXBlIHs/VWludDhBcnJheX1cbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52aWV3ID0gY2FwYWNpdHkgPT09IDAgPyBudWxsIDogbmV3IFVpbnQ4QXJyYXkodGhpcy5idWZmZXIpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBYnNvbHV0ZSByZWFkL3dyaXRlIG9mZnNldC5cbiAgICAgICAgICogQHR5cGUge251bWJlcn1cbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKiBAc2VlIEJ5dGVCdWZmZXIjZmxpcFxuICAgICAgICAgKiBAc2VlIEJ5dGVCdWZmZXIjY2xlYXJcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWFya2VkIG9mZnNldC5cbiAgICAgICAgICogQHR5cGUge251bWJlcn1cbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKiBAc2VlIEJ5dGVCdWZmZXIjbWFya1xuICAgICAgICAgKiBAc2VlIEJ5dGVCdWZmZXIjcmVzZXRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubWFya2VkT2Zmc2V0ID0gLTE7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFic29sdXRlIGxpbWl0IG9mIHRoZSBjb250YWluZWQgZGF0YS4gU2V0IHRvIHRoZSBiYWNraW5nIGJ1ZmZlcidzIGNhcGFjaXR5IHVwb24gYWxsb2NhdGlvbi5cbiAgICAgICAgICogQHR5cGUge251bWJlcn1cbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKiBAc2VlIEJ5dGVCdWZmZXIjZmxpcFxuICAgICAgICAgKiBAc2VlIEJ5dGVCdWZmZXIjY2xlYXJcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubGltaXQgPSBjYXBhY2l0eTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogV2hldGhlciB0byB1c2UgbGl0dGxlIGVuZGlhbiBieXRlIG9yZGVyLCBkZWZhdWx0cyB0byBgZmFsc2VgIGZvciBiaWcgZW5kaWFuLlxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5saXR0bGVFbmRpYW4gPSBsaXR0bGVFbmRpYW47XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZXRoZXIgdG8gc2tpcCBhc3NlcnRpb25zIG9mIG9mZnNldHMgYW5kIHZhbHVlcywgZGVmYXVsdHMgdG8gYGZhbHNlYC5cbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubm9Bc3NlcnQgPSBub0Fzc2VydDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQnl0ZUJ1ZmZlciB2ZXJzaW9uLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQGNvbnN0XG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXIuVkVSU0lPTiA9IFwiNS4wLjFcIjtcblxuICAgIC8qKlxuICAgICAqIExpdHRsZSBlbmRpYW4gY29uc3RhbnQgdGhhdCBjYW4gYmUgdXNlZCBpbnN0ZWFkIG9mIGl0cyBib29sZWFuIHZhbHVlLiBFdmFsdWF0ZXMgdG8gYHRydWVgLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBjb25zdFxuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyLkxJVFRMRV9FTkRJQU4gPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogQmlnIGVuZGlhbiBjb25zdGFudCB0aGF0IGNhbiBiZSB1c2VkIGluc3RlYWQgb2YgaXRzIGJvb2xlYW4gdmFsdWUuIEV2YWx1YXRlcyB0byBgZmFsc2VgLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBjb25zdFxuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyLkJJR19FTkRJQU4gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgaW5pdGlhbCBjYXBhY2l0eSBvZiBgMTZgLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXIuREVGQVVMVF9DQVBBQ0lUWSA9IDE2O1xuXG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBlbmRpYW5lc3Mgb2YgYGZhbHNlYCBmb3IgYmlnIGVuZGlhbi5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlci5ERUZBVUxUX0VORElBTiA9IEJ5dGVCdWZmZXIuQklHX0VORElBTjtcblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgbm8gYXNzZXJ0aW9ucyBmbGFnIG9mIGBmYWxzZWAuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXIuREVGQVVMVF9OT0FTU0VSVCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQSBgTG9uZ2AgY2xhc3MgZm9yIHJlcHJlc2VudGluZyBhIDY0LWJpdCB0d28ncy1jb21wbGVtZW50IGludGVnZXIgdmFsdWUuIE1heSBiZSBgbnVsbGAgaWYgTG9uZy5qcyBoYXMgbm90IGJlZW4gbG9hZGVkXG4gICAgICogIGFuZCBpbnQ2NCBzdXBwb3J0IGlzIG5vdCBhdmFpbGFibGUuXG4gICAgICogQHR5cGUgez9Mb25nfVxuICAgICAqIEBjb25zdFxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2Rjb2RlSU8vbG9uZy5qc1xuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyLkxvbmcgPSBMb25nIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAYWxpYXMgQnl0ZUJ1ZmZlci5wcm90b3R5cGVcbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICB2YXIgQnl0ZUJ1ZmZlclByb3RvdHlwZSA9IEJ5dGVCdWZmZXIucHJvdG90eXBlO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW5kaWNhdG9yIHVzZWQgdG8gcmVsaWFibHkgZGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ5dGVCdWZmZXIgb3Igbm90LlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBjb25zdFxuICAgICAqIEBleHBvc2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUuX19pc0J5dGVCdWZmZXJfXztcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCeXRlQnVmZmVyUHJvdG90eXBlLCBcIl9faXNCeXRlQnVmZmVyX19cIiwge1xuICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICB9KTtcblxuICAgIC8vIGhlbHBlcnNcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHshQXJyYXlCdWZmZXJ9XG4gICAgICogQGlubmVyXG4gICAgICovXG4gICAgdmFyIEVNUFRZX0JVRkZFUiA9IG5ldyBBcnJheUJ1ZmZlcigwKTtcblxuICAgIC8qKlxuICAgICAqIFN0cmluZy5mcm9tQ2hhckNvZGUgcmVmZXJlbmNlIGZvciBjb21waWxlLXRpbWUgcmVuYW1pbmcuXG4gICAgICogQHR5cGUge2Z1bmN0aW9uKC4uLm51bWJlcik6c3RyaW5nfVxuICAgICAqIEBpbm5lclxuICAgICAqL1xuICAgIHZhciBzdHJpbmdGcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHNvdXJjZSBmdW5jdGlvbiBmb3IgYSBzdHJpbmcuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHMgU3RyaW5nIHRvIHJlYWQgZnJvbVxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbigpOm51bWJlcnxudWxsfSBTb3VyY2UgZnVuY3Rpb24gcmV0dXJuaW5nIHRoZSBuZXh0IGNoYXIgY29kZSByZXNwZWN0aXZlbHkgYG51bGxgIGlmIHRoZXJlIGFyZVxuICAgICAqICBubyBtb3JlIGNoYXJhY3RlcnMgbGVmdC5cbiAgICAgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IElmIHRoZSBhcmd1bWVudCBpcyBpbnZhbGlkXG4gICAgICogQGlubmVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gc3RyaW5nU291cmNlKHMpIHtcbiAgICAgICAgdmFyIGk9MDsgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGkgPCBzLmxlbmd0aCA/IHMuY2hhckNvZGVBdChpKyspIDogbnVsbDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgZGVzdGluYXRpb24gZnVuY3Rpb24gZm9yIGEgc3RyaW5nLlxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbihudW1iZXI9KTp1bmRlZmluZWR8c3RyaW5nfSBEZXN0aW5hdGlvbiBmdW5jdGlvbiBzdWNjZXNzaXZlbHkgY2FsbGVkIHdpdGggdGhlIG5leHQgY2hhciBjb2RlLlxuICAgICAqICBSZXR1cm5zIHRoZSBmaW5hbCBzdHJpbmcgd2hlbiBjYWxsZWQgd2l0aG91dCBhcmd1bWVudHMuXG4gICAgICogQGlubmVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gc3RyaW5nRGVzdGluYXRpb24oKSB7XG4gICAgICAgIHZhciBjcyA9IFtdLCBwcyA9IFtdOyByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gcHMuam9pbignJykrc3RyaW5nRnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY3MpO1xuICAgICAgICAgICAgaWYgKGNzLmxlbmd0aCArIGFyZ3VtZW50cy5sZW5ndGggPiAxMDI0KVxuICAgICAgICAgICAgICAgIHBzLnB1c2goc3RyaW5nRnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY3MpKSxcbiAgICAgICAgICAgICAgICAgICAgY3MubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGFjY2Vzc29yIHR5cGUuXG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufSBgQnVmZmVyYCB1bmRlciBub2RlLmpzLCBgVWludDhBcnJheWAgcmVzcGVjdGl2ZWx5IGBEYXRhVmlld2AgaW4gdGhlIGJyb3dzZXIgKGNsYXNzZXMpXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXIuYWNjZXNzb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBbGxvY2F0ZXMgYSBuZXcgQnl0ZUJ1ZmZlciBiYWNrZWQgYnkgYSBidWZmZXIgb2YgdGhlIHNwZWNpZmllZCBjYXBhY2l0eS5cbiAgICAgKiBAcGFyYW0ge251bWJlcj19IGNhcGFjaXR5IEluaXRpYWwgY2FwYWNpdHkuIERlZmF1bHRzIHRvIHtAbGluayBCeXRlQnVmZmVyLkRFRkFVTFRfQ0FQQUNJVFl9LlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IGxpdHRsZUVuZGlhbiBXaGV0aGVyIHRvIHVzZSBsaXR0bGUgb3IgYmlnIGVuZGlhbiBieXRlIG9yZGVyLiBEZWZhdWx0cyB0b1xuICAgICAqICB7QGxpbmsgQnl0ZUJ1ZmZlci5ERUZBVUxUX0VORElBTn0uXG4gICAgICogQHBhcmFtIHtib29sZWFuPX0gbm9Bc3NlcnQgV2hldGhlciB0byBza2lwIGFzc2VydGlvbnMgb2Ygb2Zmc2V0cyBhbmQgdmFsdWVzLiBEZWZhdWx0cyB0b1xuICAgICAqICB7QGxpbmsgQnl0ZUJ1ZmZlci5ERUZBVUxUX05PQVNTRVJUfS5cbiAgICAgKiBAcmV0dXJucyB7IUJ5dGVCdWZmZXJ9XG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXIuYWxsb2NhdGUgPSBmdW5jdGlvbihjYXBhY2l0eSwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICAgICAgICByZXR1cm4gbmV3IEJ5dGVCdWZmZXIoY2FwYWNpdHksIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDb25jYXRlbmF0ZXMgbXVsdGlwbGUgQnl0ZUJ1ZmZlcnMgaW50byBvbmUuXG4gICAgICogQHBhcmFtIHshQXJyYXkuPCFCeXRlQnVmZmVyfCFBcnJheUJ1ZmZlcnwhVWludDhBcnJheXxzdHJpbmc+fSBidWZmZXJzIEJ1ZmZlcnMgdG8gY29uY2F0ZW5hdGVcbiAgICAgKiBAcGFyYW0geyhzdHJpbmd8Ym9vbGVhbik9fSBlbmNvZGluZyBTdHJpbmcgZW5jb2RpbmcgaWYgYGJ1ZmZlcnNgIGNvbnRhaW5zIGEgc3RyaW5nIChcImJhc2U2NFwiLCBcImhleFwiLCBcImJpbmFyeVwiLFxuICAgICAqICBkZWZhdWx0cyB0byBcInV0ZjhcIilcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBsaXR0bGVFbmRpYW4gV2hldGhlciB0byB1c2UgbGl0dGxlIG9yIGJpZyBlbmRpYW4gYnl0ZSBvcmRlciBmb3IgdGhlIHJlc3VsdGluZyBCeXRlQnVmZmVyLiBEZWZhdWx0c1xuICAgICAqICB0byB7QGxpbmsgQnl0ZUJ1ZmZlci5ERUZBVUxUX0VORElBTn0uXG4gICAgICogQHBhcmFtIHtib29sZWFuPX0gbm9Bc3NlcnQgV2hldGhlciB0byBza2lwIGFzc2VydGlvbnMgb2Ygb2Zmc2V0cyBhbmQgdmFsdWVzIGZvciB0aGUgcmVzdWx0aW5nIEJ5dGVCdWZmZXIuIERlZmF1bHRzIHRvXG4gICAgICogIHtAbGluayBCeXRlQnVmZmVyLkRFRkFVTFRfTk9BU1NFUlR9LlxuICAgICAqIEByZXR1cm5zIHshQnl0ZUJ1ZmZlcn0gQ29uY2F0ZW5hdGVkIEJ5dGVCdWZmZXJcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbihidWZmZXJzLCBlbmNvZGluZywgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICAgICAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnYm9vbGVhbicgfHwgdHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbm9Bc3NlcnQgPSBsaXR0bGVFbmRpYW47XG4gICAgICAgICAgICBsaXR0bGVFbmRpYW4gPSBlbmNvZGluZztcbiAgICAgICAgICAgIGVuY29kaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYXBhY2l0eSA9IDA7XG4gICAgICAgIGZvciAodmFyIGk9MCwgaz1idWZmZXJzLmxlbmd0aCwgbGVuZ3RoOyBpPGs7ICsraSkge1xuICAgICAgICAgICAgaWYgKCFCeXRlQnVmZmVyLmlzQnl0ZUJ1ZmZlcihidWZmZXJzW2ldKSlcbiAgICAgICAgICAgICAgICBidWZmZXJzW2ldID0gQnl0ZUJ1ZmZlci53cmFwKGJ1ZmZlcnNbaV0sIGVuY29kaW5nKTtcbiAgICAgICAgICAgIGxlbmd0aCA9IGJ1ZmZlcnNbaV0ubGltaXQgLSBidWZmZXJzW2ldLm9mZnNldDtcbiAgICAgICAgICAgIGlmIChsZW5ndGggPiAwKSBjYXBhY2l0eSArPSBsZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhcGFjaXR5ID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCeXRlQnVmZmVyKDAsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpO1xuICAgICAgICB2YXIgYmIgPSBuZXcgQnl0ZUJ1ZmZlcihjYXBhY2l0eSwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCksXG4gICAgICAgICAgICBiaTtcbiAgICAgICAgaT0wOyB3aGlsZSAoaTxrKSB7XG4gICAgICAgICAgICBiaSA9IGJ1ZmZlcnNbaSsrXTtcbiAgICAgICAgICAgIGxlbmd0aCA9IGJpLmxpbWl0IC0gYmkub2Zmc2V0O1xuICAgICAgICAgICAgaWYgKGxlbmd0aCA8PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGJiLnZpZXcuc2V0KGJpLnZpZXcuc3ViYXJyYXkoYmkub2Zmc2V0LCBiaS5saW1pdCksIGJiLm9mZnNldCk7XG4gICAgICAgICAgICBiYi5vZmZzZXQgKz0gbGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGJiLmxpbWl0ID0gYmIub2Zmc2V0O1xuICAgICAgICBiYi5vZmZzZXQgPSAwO1xuICAgICAgICByZXR1cm4gYmI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRlc3RzIGlmIHRoZSBzcGVjaWZpZWQgdHlwZSBpcyBhIEJ5dGVCdWZmZXIuXG4gICAgICogQHBhcmFtIHsqfSBiYiBCeXRlQnVmZmVyIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIGl0IGlzIGEgQnl0ZUJ1ZmZlciwgb3RoZXJ3aXNlIGBmYWxzZWBcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlci5pc0J5dGVCdWZmZXIgPSBmdW5jdGlvbihiYikge1xuICAgICAgICByZXR1cm4gKGJiICYmIGJiW1wiX19pc0J5dGVCdWZmZXJfX1wiXSkgPT09IHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBiYWNraW5nIGJ1ZmZlciB0eXBlLlxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gYEJ1ZmZlcmAgdW5kZXIgbm9kZS5qcywgYEFycmF5QnVmZmVyYCBpbiB0aGUgYnJvd3NlciAoY2xhc3NlcylcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlci50eXBlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBBcnJheUJ1ZmZlcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFdyYXBzIGEgYnVmZmVyIG9yIGEgc3RyaW5nLiBTZXRzIHRoZSBhbGxvY2F0ZWQgQnl0ZUJ1ZmZlcidzIHtAbGluayBCeXRlQnVmZmVyI29mZnNldH0gdG8gYDBgIGFuZCBpdHNcbiAgICAgKiAge0BsaW5rIEJ5dGVCdWZmZXIjbGltaXR9IHRvIHRoZSBsZW5ndGggb2YgdGhlIHdyYXBwZWQgZGF0YS5cbiAgICAgKiBAcGFyYW0geyFCeXRlQnVmZmVyfCFBcnJheUJ1ZmZlcnwhVWludDhBcnJheXxzdHJpbmd8IUFycmF5LjxudW1iZXI+fSBidWZmZXIgQW55dGhpbmcgdGhhdCBjYW4gYmUgd3JhcHBlZFxuICAgICAqIEBwYXJhbSB7KHN0cmluZ3xib29sZWFuKT19IGVuY29kaW5nIFN0cmluZyBlbmNvZGluZyBpZiBgYnVmZmVyYCBpcyBhIHN0cmluZyAoXCJiYXNlNjRcIiwgXCJoZXhcIiwgXCJiaW5hcnlcIiwgZGVmYXVsdHMgdG9cbiAgICAgKiAgXCJ1dGY4XCIpXG4gICAgICogQHBhcmFtIHtib29sZWFuPX0gbGl0dGxlRW5kaWFuIFdoZXRoZXIgdG8gdXNlIGxpdHRsZSBvciBiaWcgZW5kaWFuIGJ5dGUgb3JkZXIuIERlZmF1bHRzIHRvXG4gICAgICogIHtAbGluayBCeXRlQnVmZmVyLkRFRkFVTFRfRU5ESUFOfS5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBub0Fzc2VydCBXaGV0aGVyIHRvIHNraXAgYXNzZXJ0aW9ucyBvZiBvZmZzZXRzIGFuZCB2YWx1ZXMuIERlZmF1bHRzIHRvXG4gICAgICogIHtAbGluayBCeXRlQnVmZmVyLkRFRkFVTFRfTk9BU1NFUlR9LlxuICAgICAqIEByZXR1cm5zIHshQnl0ZUJ1ZmZlcn0gQSBCeXRlQnVmZmVyIHdyYXBwaW5nIGBidWZmZXJgXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXIud3JhcCA9IGZ1bmN0aW9uKGJ1ZmZlciwgZW5jb2RpbmcsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIG5vQXNzZXJ0ID0gbGl0dGxlRW5kaWFuO1xuICAgICAgICAgICAgbGl0dGxlRW5kaWFuID0gZW5jb2Rpbmc7XG4gICAgICAgICAgICBlbmNvZGluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGJ1ZmZlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIGVuY29kaW5nID0gXCJ1dGY4XCI7XG4gICAgICAgICAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImJhc2U2NFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQnl0ZUJ1ZmZlci5mcm9tQmFzZTY0KGJ1ZmZlciwgbGl0dGxlRW5kaWFuKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwiaGV4XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBCeXRlQnVmZmVyLmZyb21IZXgoYnVmZmVyLCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJiaW5hcnlcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJ5dGVCdWZmZXIuZnJvbUJpbmFyeShidWZmZXIsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgICAgICAgICAgY2FzZSBcInV0ZjhcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJ5dGVCdWZmZXIuZnJvbVVURjgoYnVmZmVyLCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJkZWJ1Z1wiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQnl0ZUJ1ZmZlci5mcm9tRGVidWcoYnVmZmVyLCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiVW5zdXBwb3J0ZWQgZW5jb2Rpbmc6IFwiK2VuY29kaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYnVmZmVyID09PSBudWxsIHx8IHR5cGVvZiBidWZmZXIgIT09ICdvYmplY3QnKVxuICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCBidWZmZXJcIik7XG4gICAgICAgIHZhciBiYjtcbiAgICAgICAgaWYgKEJ5dGVCdWZmZXIuaXNCeXRlQnVmZmVyKGJ1ZmZlcikpIHtcbiAgICAgICAgICAgIGJiID0gQnl0ZUJ1ZmZlclByb3RvdHlwZS5jbG9uZS5jYWxsKGJ1ZmZlcik7XG4gICAgICAgICAgICBiYi5tYXJrZWRPZmZzZXQgPSAtMTtcbiAgICAgICAgICAgIHJldHVybiBiYjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYnVmZmVyIGluc3RhbmNlb2YgVWludDhBcnJheSkgeyAvLyBFeHRyYWN0IEFycmF5QnVmZmVyIGZyb20gVWludDhBcnJheVxuICAgICAgICAgICAgYmIgPSBuZXcgQnl0ZUJ1ZmZlcigwLCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KTtcbiAgICAgICAgICAgIGlmIChidWZmZXIubGVuZ3RoID4gMCkgeyAvLyBBdm9pZCByZWZlcmVuY2VzIHRvIG1vcmUgdGhhbiBvbmUgRU1QVFlfQlVGRkVSXG4gICAgICAgICAgICAgICAgYmIuYnVmZmVyID0gYnVmZmVyLmJ1ZmZlcjtcbiAgICAgICAgICAgICAgICBiYi5vZmZzZXQgPSBidWZmZXIuYnl0ZU9mZnNldDtcbiAgICAgICAgICAgICAgICBiYi5saW1pdCA9IGJ1ZmZlci5ieXRlT2Zmc2V0ICsgYnVmZmVyLmJ5dGVMZW5ndGg7XG4gICAgICAgICAgICAgICAgYmIudmlldyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlci5idWZmZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7IC8vIFJldXNlIEFycmF5QnVmZmVyXG4gICAgICAgICAgICBiYiA9IG5ldyBCeXRlQnVmZmVyKDAsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpO1xuICAgICAgICAgICAgaWYgKGJ1ZmZlci5ieXRlTGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGJiLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgICAgICAgICAgICBiYi5vZmZzZXQgPSAwO1xuICAgICAgICAgICAgICAgIGJiLmxpbWl0ID0gYnVmZmVyLmJ5dGVMZW5ndGg7XG4gICAgICAgICAgICAgICAgYmIudmlldyA9IGJ1ZmZlci5ieXRlTGVuZ3RoID4gMCA/IG5ldyBVaW50OEFycmF5KGJ1ZmZlcikgOiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChidWZmZXIpID09PSBcIltvYmplY3QgQXJyYXldXCIpIHsgLy8gQ3JlYXRlIGZyb20gb2N0ZXRzXG4gICAgICAgICAgICBiYiA9IG5ldyBCeXRlQnVmZmVyKGJ1ZmZlci5sZW5ndGgsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpO1xuICAgICAgICAgICAgYmIubGltaXQgPSBidWZmZXIubGVuZ3RoO1xuICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPGJ1ZmZlci5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICBiYi52aWV3W2ldID0gYnVmZmVyW2ldO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgYnVmZmVyXCIpOyAvLyBPdGhlcndpc2UgZmFpbFxuICAgICAgICByZXR1cm4gYmI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyB0aGUgYXJyYXkgYXMgYSBiaXRzZXQuXG4gICAgICogQHBhcmFtIHtBcnJheTxib29sZWFuPn0gdmFsdWUgQXJyYXkgb2YgYm9vbGVhbnMgdG8gd3JpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcj19IG9mZnNldCBPZmZzZXQgdG8gcmVhZCBmcm9tLiBXaWxsIHVzZSBhbmQgaW5jcmVhc2Uge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBieSBgbGVuZ3RoYCBpZiBvbWl0dGVkLlxuICAgICAqIEByZXR1cm5zIHshQnl0ZUJ1ZmZlcn1cbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS53cml0ZUJpdFNldCA9IGZ1bmN0aW9uKHZhbHVlLCBvZmZzZXQpIHtcbiAgICAgIHZhciByZWxhdGl2ZSA9IHR5cGVvZiBvZmZzZXQgPT09ICd1bmRlZmluZWQnO1xuICAgICAgaWYgKHJlbGF0aXZlKSBvZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICAgIGlmICghdGhpcy5ub0Fzc2VydCkge1xuICAgICAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSlcbiAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbGxlZ2FsIEJpdFNldDogTm90IGFuIGFycmF5XCIpO1xuICAgICAgICBpZiAodHlwZW9mIG9mZnNldCAhPT0gJ251bWJlcicgfHwgb2Zmc2V0ICUgMSAhPT0gMClcbiAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgb2Zmc2V0OiBcIitvZmZzZXQrXCIgKG5vdCBhbiBpbnRlZ2VyKVwiKTtcbiAgICAgICAgb2Zmc2V0ID4+Pj0gMDtcbiAgICAgICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ICsgMCA+IHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGgpXG4gICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IDAgPD0gXCIrb2Zmc2V0K1wiICgrXCIrMCtcIikgPD0gXCIrdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGFydCA9IG9mZnNldCxcbiAgICAgICAgICBiaXRzID0gdmFsdWUubGVuZ3RoLFxuICAgICAgICAgIGJ5dGVzID0gKGJpdHMgPj4gMyksXG4gICAgICAgICAgYml0ID0gMCxcbiAgICAgICAgICBrO1xuXG4gICAgICBvZmZzZXQgKz0gdGhpcy53cml0ZVZhcmludDMyKGJpdHMsb2Zmc2V0KTtcblxuICAgICAgd2hpbGUoYnl0ZXMtLSkge1xuICAgICAgICBrID0gKCEhdmFsdWVbYml0KytdICYgMSkgfFxuICAgICAgICAgICAgKCghIXZhbHVlW2JpdCsrXSAmIDEpIDw8IDEpIHxcbiAgICAgICAgICAgICgoISF2YWx1ZVtiaXQrK10gJiAxKSA8PCAyKSB8XG4gICAgICAgICAgICAoKCEhdmFsdWVbYml0KytdICYgMSkgPDwgMykgfFxuICAgICAgICAgICAgKCghIXZhbHVlW2JpdCsrXSAmIDEpIDw8IDQpIHxcbiAgICAgICAgICAgICgoISF2YWx1ZVtiaXQrK10gJiAxKSA8PCA1KSB8XG4gICAgICAgICAgICAoKCEhdmFsdWVbYml0KytdICYgMSkgPDwgNikgfFxuICAgICAgICAgICAgKCghIXZhbHVlW2JpdCsrXSAmIDEpIDw8IDcpO1xuICAgICAgICB0aGlzLndyaXRlQnl0ZShrLG9mZnNldCsrKTtcbiAgICAgIH1cblxuICAgICAgaWYoYml0IDwgYml0cykge1xuICAgICAgICB2YXIgbSA9IDA7IGsgPSAwO1xuICAgICAgICB3aGlsZShiaXQgPCBiaXRzKSBrID0gayB8ICgoISF2YWx1ZVtiaXQrK10gJiAxKSA8PCAobSsrKSk7XG4gICAgICAgIHRoaXMud3JpdGVCeXRlKGssb2Zmc2V0KyspO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVsYXRpdmUpIHtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9mZnNldCAtIHN0YXJ0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWRzIGEgQml0U2V0IGFzIGFuIGFycmF5IG9mIGJvb2xlYW5zLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byByZWFkIGZyb20uIFdpbGwgdXNlIGFuZCBpbmNyZWFzZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IGBsZW5ndGhgIGlmIG9taXR0ZWQuXG4gICAgICogQHJldHVybnMge0FycmF5PGJvb2xlYW4+XG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUucmVhZEJpdFNldCA9IGZ1bmN0aW9uKG9mZnNldCkge1xuICAgICAgdmFyIHJlbGF0aXZlID0gdHlwZW9mIG9mZnNldCA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgICBpZiAocmVsYXRpdmUpIG9mZnNldCA9IHRoaXMub2Zmc2V0O1xuXG4gICAgICB2YXIgcmV0ID0gdGhpcy5yZWFkVmFyaW50MzIob2Zmc2V0KSxcbiAgICAgICAgICBiaXRzID0gcmV0LnZhbHVlLFxuICAgICAgICAgIGJ5dGVzID0gKGJpdHMgPj4gMyksXG4gICAgICAgICAgYml0ID0gMCxcbiAgICAgICAgICB2YWx1ZSA9IFtdLFxuICAgICAgICAgIGs7XG5cbiAgICAgIG9mZnNldCArPSByZXQubGVuZ3RoO1xuXG4gICAgICB3aGlsZShieXRlcy0tKSB7XG4gICAgICAgIGsgPSB0aGlzLnJlYWRCeXRlKG9mZnNldCsrKTtcbiAgICAgICAgdmFsdWVbYml0KytdID0gISEoayAmIDB4MDEpO1xuICAgICAgICB2YWx1ZVtiaXQrK10gPSAhIShrICYgMHgwMik7XG4gICAgICAgIHZhbHVlW2JpdCsrXSA9ICEhKGsgJiAweDA0KTtcbiAgICAgICAgdmFsdWVbYml0KytdID0gISEoayAmIDB4MDgpO1xuICAgICAgICB2YWx1ZVtiaXQrK10gPSAhIShrICYgMHgxMCk7XG4gICAgICAgIHZhbHVlW2JpdCsrXSA9ICEhKGsgJiAweDIwKTtcbiAgICAgICAgdmFsdWVbYml0KytdID0gISEoayAmIDB4NDApO1xuICAgICAgICB2YWx1ZVtiaXQrK10gPSAhIShrICYgMHg4MCk7XG4gICAgICB9XG5cbiAgICAgIGlmKGJpdCA8IGJpdHMpIHtcbiAgICAgICAgdmFyIG0gPSAwO1xuICAgICAgICBrID0gdGhpcy5yZWFkQnl0ZShvZmZzZXQrKyk7XG4gICAgICAgIHdoaWxlKGJpdCA8IGJpdHMpIHZhbHVlW2JpdCsrXSA9ICEhKChrID4+IChtKyspKSAmIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVsYXRpdmUpIHtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlYWRzIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGJ5dGVzLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggTnVtYmVyIG9mIGJ5dGVzIHRvIHJlYWRcbiAgICAgKiBAcGFyYW0ge251bWJlcj19IG9mZnNldCBPZmZzZXQgdG8gcmVhZCBmcm9tLiBXaWxsIHVzZSBhbmQgaW5jcmVhc2Uge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBieSBgbGVuZ3RoYCBpZiBvbWl0dGVkLlxuICAgICAqIEByZXR1cm5zIHshQnl0ZUJ1ZmZlcn1cbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS5yZWFkQnl0ZXMgPSBmdW5jdGlvbihsZW5ndGgsIG9mZnNldCkge1xuICAgICAgICB2YXIgcmVsYXRpdmUgPSB0eXBlb2Ygb2Zmc2V0ID09PSAndW5kZWZpbmVkJztcbiAgICAgICAgaWYgKHJlbGF0aXZlKSBvZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICAgICAgaWYgKCF0aGlzLm5vQXNzZXJ0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9mZnNldCAhPT0gJ251bWJlcicgfHwgb2Zmc2V0ICUgMSAhPT0gMClcbiAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbGxlZ2FsIG9mZnNldDogXCIrb2Zmc2V0K1wiIChub3QgYW4gaW50ZWdlcilcIik7XG4gICAgICAgICAgICBvZmZzZXQgPj4+PSAwO1xuICAgICAgICAgICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ICsgbGVuZ3RoID4gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IDAgPD0gXCIrb2Zmc2V0K1wiICgrXCIrbGVuZ3RoK1wiKSA8PSBcIit0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2xpY2UgPSB0aGlzLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgbGVuZ3RoKTtcbiAgICAgICAgaWYgKHJlbGF0aXZlKSB0aGlzLm9mZnNldCArPSBsZW5ndGg7XG4gICAgICAgIHJldHVybiBzbGljZTtcbiAgICB9O1xuXG5cbiAgICAvLyB0eXBlcy9pbnRzL2ludDhcblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyBhbiA4Yml0IHNpZ25lZCBpbnRlZ2VyLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBWYWx1ZSB0byB3cml0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byB3cml0ZSB0by4gV2lsbCB1c2UgYW5kIGFkdmFuY2Uge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBieSBgMWAgaWYgb21pdHRlZC5cbiAgICAgKiBAcmV0dXJucyB7IUJ5dGVCdWZmZXJ9IHRoaXNcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbih2YWx1ZSwgb2Zmc2V0KSB7XG4gICAgICAgIHZhciByZWxhdGl2ZSA9IHR5cGVvZiBvZmZzZXQgPT09ICd1bmRlZmluZWQnO1xuICAgICAgICBpZiAocmVsYXRpdmUpIG9mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgICAgICBpZiAoIXRoaXMubm9Bc3NlcnQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInIHx8IHZhbHVlICUgMSAhPT0gMClcbiAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbGxlZ2FsIHZhbHVlOiBcIit2YWx1ZStcIiAobm90IGFuIGludGVnZXIpXCIpO1xuICAgICAgICAgICAgdmFsdWUgfD0gMDtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ICE9PSAnbnVtYmVyJyB8fCBvZmZzZXQgJSAxICE9PSAwKVxuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgb2Zmc2V0OiBcIitvZmZzZXQrXCIgKG5vdCBhbiBpbnRlZ2VyKVwiKTtcbiAgICAgICAgICAgIG9mZnNldCA+Pj49IDA7XG4gICAgICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyAwID4gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IDAgPD0gXCIrb2Zmc2V0K1wiICgrXCIrMCtcIikgPD0gXCIrdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgb2Zmc2V0ICs9IDE7XG4gICAgICAgIHZhciBjYXBhY2l0eTAgPSB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoO1xuICAgICAgICBpZiAob2Zmc2V0ID4gY2FwYWNpdHkwKVxuICAgICAgICAgICAgdGhpcy5yZXNpemUoKGNhcGFjaXR5MCAqPSAyKSA+IG9mZnNldCA/IGNhcGFjaXR5MCA6IG9mZnNldCk7XG4gICAgICAgIG9mZnNldCAtPSAxO1xuICAgICAgICB0aGlzLnZpZXdbb2Zmc2V0XSA9IHZhbHVlO1xuICAgICAgICBpZiAocmVsYXRpdmUpIHRoaXMub2Zmc2V0ICs9IDE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYW4gOGJpdCBzaWduZWQgaW50ZWdlci4gVGhpcyBpcyBhbiBhbGlhcyBvZiB7QGxpbmsgQnl0ZUJ1ZmZlciN3cml0ZUludDh9LlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBWYWx1ZSB0byB3cml0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byB3cml0ZSB0by4gV2lsbCB1c2UgYW5kIGFkdmFuY2Uge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBieSBgMWAgaWYgb21pdHRlZC5cbiAgICAgKiBAcmV0dXJucyB7IUJ5dGVCdWZmZXJ9IHRoaXNcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS53cml0ZUJ5dGUgPSBCeXRlQnVmZmVyUHJvdG90eXBlLndyaXRlSW50ODtcblxuICAgIC8qKlxuICAgICAqIFJlYWRzIGFuIDhiaXQgc2lnbmVkIGludGVnZXIuXG4gICAgICogQHBhcmFtIHtudW1iZXI9fSBvZmZzZXQgT2Zmc2V0IHRvIHJlYWQgZnJvbS4gV2lsbCB1c2UgYW5kIGFkdmFuY2Uge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBieSBgMWAgaWYgb21pdHRlZC5cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBWYWx1ZSByZWFkXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbihvZmZzZXQpIHtcbiAgICAgICAgdmFyIHJlbGF0aXZlID0gdHlwZW9mIG9mZnNldCA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIGlmIChyZWxhdGl2ZSkgb2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICAgIGlmICghdGhpcy5ub0Fzc2VydCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvZmZzZXQgIT09ICdudW1iZXInIHx8IG9mZnNldCAlIDEgIT09IDApXG4gICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IFwiK29mZnNldCtcIiAobm90IGFuIGludGVnZXIpXCIpO1xuICAgICAgICAgICAgb2Zmc2V0ID4+Pj0gMDtcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCArIDEgPiB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKVxuICAgICAgICAgICAgICAgIHRocm93IFJhbmdlRXJyb3IoXCJJbGxlZ2FsIG9mZnNldDogMCA8PSBcIitvZmZzZXQrXCIgKCtcIisxK1wiKSA8PSBcIit0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZpZXdbb2Zmc2V0XTtcbiAgICAgICAgaWYgKCh2YWx1ZSAmIDB4ODApID09PSAweDgwKSB2YWx1ZSA9IC0oMHhGRiAtIHZhbHVlICsgMSk7IC8vIENhc3QgdG8gc2lnbmVkXG4gICAgICAgIGlmIChyZWxhdGl2ZSkgdGhpcy5vZmZzZXQgKz0gMTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZWFkcyBhbiA4Yml0IHNpZ25lZCBpbnRlZ2VyLiBUaGlzIGlzIGFuIGFsaWFzIG9mIHtAbGluayBCeXRlQnVmZmVyI3JlYWRJbnQ4fS5cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcj19IG9mZnNldCBPZmZzZXQgdG8gcmVhZCBmcm9tLiBXaWxsIHVzZSBhbmQgYWR2YW5jZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IGAxYCBpZiBvbWl0dGVkLlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IFZhbHVlIHJlYWRcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS5yZWFkQnl0ZSA9IEJ5dGVCdWZmZXJQcm90b3R5cGUucmVhZEludDg7XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYW4gOGJpdCB1bnNpZ25lZCBpbnRlZ2VyLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBWYWx1ZSB0byB3cml0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byB3cml0ZSB0by4gV2lsbCB1c2UgYW5kIGFkdmFuY2Uge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBieSBgMWAgaWYgb21pdHRlZC5cbiAgICAgKiBAcmV0dXJucyB7IUJ5dGVCdWZmZXJ9IHRoaXNcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS53cml0ZVVpbnQ4ID0gZnVuY3Rpb24odmFsdWUsIG9mZnNldCkge1xuICAgICAgICB2YXIgcmVsYXRpdmUgPSB0eXBlb2Ygb2Zmc2V0ID09PSAndW5kZWZpbmVkJztcbiAgICAgICAgaWYgKHJlbGF0aXZlKSBvZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICAgICAgaWYgKCF0aGlzLm5vQXNzZXJ0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJyB8fCB2YWx1ZSAlIDEgIT09IDApXG4gICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCB2YWx1ZTogXCIrdmFsdWUrXCIgKG5vdCBhbiBpbnRlZ2VyKVwiKTtcbiAgICAgICAgICAgIHZhbHVlID4+Pj0gMDtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ICE9PSAnbnVtYmVyJyB8fCBvZmZzZXQgJSAxICE9PSAwKVxuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgb2Zmc2V0OiBcIitvZmZzZXQrXCIgKG5vdCBhbiBpbnRlZ2VyKVwiKTtcbiAgICAgICAgICAgIG9mZnNldCA+Pj49IDA7XG4gICAgICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyAwID4gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IDAgPD0gXCIrb2Zmc2V0K1wiICgrXCIrMCtcIikgPD0gXCIrdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgb2Zmc2V0ICs9IDE7XG4gICAgICAgIHZhciBjYXBhY2l0eTEgPSB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoO1xuICAgICAgICBpZiAob2Zmc2V0ID4gY2FwYWNpdHkxKVxuICAgICAgICAgICAgdGhpcy5yZXNpemUoKGNhcGFjaXR5MSAqPSAyKSA+IG9mZnNldCA/IGNhcGFjaXR5MSA6IG9mZnNldCk7XG4gICAgICAgIG9mZnNldCAtPSAxO1xuICAgICAgICB0aGlzLnZpZXdbb2Zmc2V0XSA9IHZhbHVlO1xuICAgICAgICBpZiAocmVsYXRpdmUpIHRoaXMub2Zmc2V0ICs9IDE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYW4gOGJpdCB1bnNpZ25lZCBpbnRlZ2VyLiBUaGlzIGlzIGFuIGFsaWFzIG9mIHtAbGluayBCeXRlQnVmZmVyI3dyaXRlVWludDh9LlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBWYWx1ZSB0byB3cml0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byB3cml0ZSB0by4gV2lsbCB1c2UgYW5kIGFkdmFuY2Uge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBieSBgMWAgaWYgb21pdHRlZC5cbiAgICAgKiBAcmV0dXJucyB7IUJ5dGVCdWZmZXJ9IHRoaXNcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS53cml0ZVVJbnQ4ID0gQnl0ZUJ1ZmZlclByb3RvdHlwZS53cml0ZVVpbnQ4O1xuXG4gICAgLyoqXG4gICAgICogUmVhZHMgYW4gOGJpdCB1bnNpZ25lZCBpbnRlZ2VyLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byByZWFkIGZyb20uIFdpbGwgdXNlIGFuZCBhZHZhbmNlIHtAbGluayBCeXRlQnVmZmVyI29mZnNldH0gYnkgYDFgIGlmIG9taXR0ZWQuXG4gICAgICogQHJldHVybnMge251bWJlcn0gVmFsdWUgcmVhZFxuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLnJlYWRVaW50OCA9IGZ1bmN0aW9uKG9mZnNldCkge1xuICAgICAgICB2YXIgcmVsYXRpdmUgPSB0eXBlb2Ygb2Zmc2V0ID09PSAndW5kZWZpbmVkJztcbiAgICAgICAgaWYgKHJlbGF0aXZlKSBvZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICAgICAgaWYgKCF0aGlzLm5vQXNzZXJ0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9mZnNldCAhPT0gJ251bWJlcicgfHwgb2Zmc2V0ICUgMSAhPT0gMClcbiAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbGxlZ2FsIG9mZnNldDogXCIrb2Zmc2V0K1wiIChub3QgYW4gaW50ZWdlcilcIik7XG4gICAgICAgICAgICBvZmZzZXQgPj4+PSAwO1xuICAgICAgICAgICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ICsgMSA+IHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGgpXG4gICAgICAgICAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcihcIklsbGVnYWwgb2Zmc2V0OiAwIDw9IFwiK29mZnNldCtcIiAoK1wiKzErXCIpIDw9IFwiK3RoaXMuYnVmZmVyLmJ5dGVMZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmlld1tvZmZzZXRdO1xuICAgICAgICBpZiAocmVsYXRpdmUpIHRoaXMub2Zmc2V0ICs9IDE7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVhZHMgYW4gOGJpdCB1bnNpZ25lZCBpbnRlZ2VyLiBUaGlzIGlzIGFuIGFsaWFzIG9mIHtAbGluayBCeXRlQnVmZmVyI3JlYWRVaW50OH0uXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXI9fSBvZmZzZXQgT2Zmc2V0IHRvIHJlYWQgZnJvbS4gV2lsbCB1c2UgYW5kIGFkdmFuY2Uge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBieSBgMWAgaWYgb21pdHRlZC5cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBWYWx1ZSByZWFkXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUucmVhZFVJbnQ4ID0gQnl0ZUJ1ZmZlclByb3RvdHlwZS5yZWFkVWludDg7XG5cbiAgICAvLyB0eXBlcy9pbnRzL2ludDE2XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSAxNmJpdCBzaWduZWQgaW50ZWdlci5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVmFsdWUgdG8gd3JpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcj19IG9mZnNldCBPZmZzZXQgdG8gd3JpdGUgdG8uIFdpbGwgdXNlIGFuZCBhZHZhbmNlIHtAbGluayBCeXRlQnVmZmVyI29mZnNldH0gYnkgYDJgIGlmIG9taXR0ZWQuXG4gICAgICogQHRocm93cyB7VHlwZUVycm9yfSBJZiBgb2Zmc2V0YCBvciBgdmFsdWVgIGlzIG5vdCBhIHZhbGlkIG51bWJlclxuICAgICAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IElmIGBvZmZzZXRgIGlzIG91dCBvZiBib3VuZHNcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS53cml0ZUludDE2ID0gZnVuY3Rpb24odmFsdWUsIG9mZnNldCkge1xuICAgICAgICB2YXIgcmVsYXRpdmUgPSB0eXBlb2Ygb2Zmc2V0ID09PSAndW5kZWZpbmVkJztcbiAgICAgICAgaWYgKHJlbGF0aXZlKSBvZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICAgICAgaWYgKCF0aGlzLm5vQXNzZXJ0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJyB8fCB2YWx1ZSAlIDEgIT09IDApXG4gICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCB2YWx1ZTogXCIrdmFsdWUrXCIgKG5vdCBhbiBpbnRlZ2VyKVwiKTtcbiAgICAgICAgICAgIHZhbHVlIHw9IDA7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9mZnNldCAhPT0gJ251bWJlcicgfHwgb2Zmc2V0ICUgMSAhPT0gMClcbiAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbGxlZ2FsIG9mZnNldDogXCIrb2Zmc2V0K1wiIChub3QgYW4gaW50ZWdlcilcIik7XG4gICAgICAgICAgICBvZmZzZXQgPj4+PSAwO1xuICAgICAgICAgICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ICsgMCA+IHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGgpXG4gICAgICAgICAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcihcIklsbGVnYWwgb2Zmc2V0OiAwIDw9IFwiK29mZnNldCtcIiAoK1wiKzArXCIpIDw9IFwiK3RoaXMuYnVmZmVyLmJ5dGVMZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIG9mZnNldCArPSAyO1xuICAgICAgICB2YXIgY2FwYWNpdHkyID0gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aDtcbiAgICAgICAgaWYgKG9mZnNldCA+IGNhcGFjaXR5MilcbiAgICAgICAgICAgIHRoaXMucmVzaXplKChjYXBhY2l0eTIgKj0gMikgPiBvZmZzZXQgPyBjYXBhY2l0eTIgOiBvZmZzZXQpO1xuICAgICAgICBvZmZzZXQgLT0gMjtcbiAgICAgICAgaWYgKHRoaXMubGl0dGxlRW5kaWFuKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdbb2Zmc2V0KzFdID0gKHZhbHVlICYgMHhGRjAwKSA+Pj4gODtcbiAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQgIF0gPSAgdmFsdWUgJiAweDAwRkY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdbb2Zmc2V0XSAgID0gKHZhbHVlICYgMHhGRjAwKSA+Pj4gODtcbiAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQrMV0gPSAgdmFsdWUgJiAweDAwRkY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbGF0aXZlKSB0aGlzLm9mZnNldCArPSAyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIGEgMTZiaXQgc2lnbmVkIGludGVnZXIuIFRoaXMgaXMgYW4gYWxpYXMgb2Yge0BsaW5rIEJ5dGVCdWZmZXIjd3JpdGVJbnQxNn0uXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFZhbHVlIHRvIHdyaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXI9fSBvZmZzZXQgT2Zmc2V0IHRvIHdyaXRlIHRvLiBXaWxsIHVzZSBhbmQgYWR2YW5jZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IGAyYCBpZiBvbWl0dGVkLlxuICAgICAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gSWYgYG9mZnNldGAgb3IgYHZhbHVlYCBpcyBub3QgYSB2YWxpZCBudW1iZXJcbiAgICAgKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBJZiBgb2Zmc2V0YCBpcyBvdXQgb2YgYm91bmRzXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUud3JpdGVTaG9ydCA9IEJ5dGVCdWZmZXJQcm90b3R5cGUud3JpdGVJbnQxNjtcblxuICAgIC8qKlxuICAgICAqIFJlYWRzIGEgMTZiaXQgc2lnbmVkIGludGVnZXIuXG4gICAgICogQHBhcmFtIHtudW1iZXI9fSBvZmZzZXQgT2Zmc2V0IHRvIHJlYWQgZnJvbS4gV2lsbCB1c2UgYW5kIGFkdmFuY2Uge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBieSBgMmAgaWYgb21pdHRlZC5cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBWYWx1ZSByZWFkXG4gICAgICogQHRocm93cyB7VHlwZUVycm9yfSBJZiBgb2Zmc2V0YCBpcyBub3QgYSB2YWxpZCBudW1iZXJcbiAgICAgKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBJZiBgb2Zmc2V0YCBpcyBvdXQgb2YgYm91bmRzXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUucmVhZEludDE2ID0gZnVuY3Rpb24ob2Zmc2V0KSB7XG4gICAgICAgIHZhciByZWxhdGl2ZSA9IHR5cGVvZiBvZmZzZXQgPT09ICd1bmRlZmluZWQnO1xuICAgICAgICBpZiAocmVsYXRpdmUpIG9mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgICAgICBpZiAoIXRoaXMubm9Bc3NlcnQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ICE9PSAnbnVtYmVyJyB8fCBvZmZzZXQgJSAxICE9PSAwKVxuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgb2Zmc2V0OiBcIitvZmZzZXQrXCIgKG5vdCBhbiBpbnRlZ2VyKVwiKTtcbiAgICAgICAgICAgIG9mZnNldCA+Pj49IDA7XG4gICAgICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyAyID4gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IDAgPD0gXCIrb2Zmc2V0K1wiICgrXCIrMitcIikgPD0gXCIrdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gMDtcbiAgICAgICAgaWYgKHRoaXMubGl0dGxlRW5kaWFuKSB7XG4gICAgICAgICAgICB2YWx1ZSAgPSB0aGlzLnZpZXdbb2Zmc2V0ICBdO1xuICAgICAgICAgICAgdmFsdWUgfD0gdGhpcy52aWV3W29mZnNldCsxXSA8PCA4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgID0gdGhpcy52aWV3W29mZnNldCAgXSA8PCA4O1xuICAgICAgICAgICAgdmFsdWUgfD0gdGhpcy52aWV3W29mZnNldCsxXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHZhbHVlICYgMHg4MDAwKSA9PT0gMHg4MDAwKSB2YWx1ZSA9IC0oMHhGRkZGIC0gdmFsdWUgKyAxKTsgLy8gQ2FzdCB0byBzaWduZWRcbiAgICAgICAgaWYgKHJlbGF0aXZlKSB0aGlzLm9mZnNldCArPSAyO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlYWRzIGEgMTZiaXQgc2lnbmVkIGludGVnZXIuIFRoaXMgaXMgYW4gYWxpYXMgb2Yge0BsaW5rIEJ5dGVCdWZmZXIjcmVhZEludDE2fS5cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcj19IG9mZnNldCBPZmZzZXQgdG8gcmVhZCBmcm9tLiBXaWxsIHVzZSBhbmQgYWR2YW5jZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IGAyYCBpZiBvbWl0dGVkLlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IFZhbHVlIHJlYWRcbiAgICAgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IElmIGBvZmZzZXRgIGlzIG5vdCBhIHZhbGlkIG51bWJlclxuICAgICAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IElmIGBvZmZzZXRgIGlzIG91dCBvZiBib3VuZHNcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS5yZWFkU2hvcnQgPSBCeXRlQnVmZmVyUHJvdG90eXBlLnJlYWRJbnQxNjtcblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyBhIDE2Yml0IHVuc2lnbmVkIGludGVnZXIuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFZhbHVlIHRvIHdyaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXI9fSBvZmZzZXQgT2Zmc2V0IHRvIHdyaXRlIHRvLiBXaWxsIHVzZSBhbmQgYWR2YW5jZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IGAyYCBpZiBvbWl0dGVkLlxuICAgICAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gSWYgYG9mZnNldGAgb3IgYHZhbHVlYCBpcyBub3QgYSB2YWxpZCBudW1iZXJcbiAgICAgKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBJZiBgb2Zmc2V0YCBpcyBvdXQgb2YgYm91bmRzXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUud3JpdGVVaW50MTYgPSBmdW5jdGlvbih2YWx1ZSwgb2Zmc2V0KSB7XG4gICAgICAgIHZhciByZWxhdGl2ZSA9IHR5cGVvZiBvZmZzZXQgPT09ICd1bmRlZmluZWQnO1xuICAgICAgICBpZiAocmVsYXRpdmUpIG9mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgICAgICBpZiAoIXRoaXMubm9Bc3NlcnQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInIHx8IHZhbHVlICUgMSAhPT0gMClcbiAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbGxlZ2FsIHZhbHVlOiBcIit2YWx1ZStcIiAobm90IGFuIGludGVnZXIpXCIpO1xuICAgICAgICAgICAgdmFsdWUgPj4+PSAwO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvZmZzZXQgIT09ICdudW1iZXInIHx8IG9mZnNldCAlIDEgIT09IDApXG4gICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IFwiK29mZnNldCtcIiAobm90IGFuIGludGVnZXIpXCIpO1xuICAgICAgICAgICAgb2Zmc2V0ID4+Pj0gMDtcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCArIDAgPiB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKVxuICAgICAgICAgICAgICAgIHRocm93IFJhbmdlRXJyb3IoXCJJbGxlZ2FsIG9mZnNldDogMCA8PSBcIitvZmZzZXQrXCIgKCtcIiswK1wiKSA8PSBcIit0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBvZmZzZXQgKz0gMjtcbiAgICAgICAgdmFyIGNhcGFjaXR5MyA9IHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGg7XG4gICAgICAgIGlmIChvZmZzZXQgPiBjYXBhY2l0eTMpXG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSgoY2FwYWNpdHkzICo9IDIpID4gb2Zmc2V0ID8gY2FwYWNpdHkzIDogb2Zmc2V0KTtcbiAgICAgICAgb2Zmc2V0IC09IDI7XG4gICAgICAgIGlmICh0aGlzLmxpdHRsZUVuZGlhbikge1xuICAgICAgICAgICAgdGhpcy52aWV3W29mZnNldCsxXSA9ICh2YWx1ZSAmIDB4RkYwMCkgPj4+IDg7XG4gICAgICAgICAgICB0aGlzLnZpZXdbb2Zmc2V0ICBdID0gIHZhbHVlICYgMHgwMEZGO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aWV3W29mZnNldF0gICA9ICh2YWx1ZSAmIDB4RkYwMCkgPj4+IDg7XG4gICAgICAgICAgICB0aGlzLnZpZXdbb2Zmc2V0KzFdID0gIHZhbHVlICYgMHgwMEZGO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWxhdGl2ZSkgdGhpcy5vZmZzZXQgKz0gMjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyBhIDE2Yml0IHVuc2lnbmVkIGludGVnZXIuIFRoaXMgaXMgYW4gYWxpYXMgb2Yge0BsaW5rIEJ5dGVCdWZmZXIjd3JpdGVVaW50MTZ9LlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBWYWx1ZSB0byB3cml0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byB3cml0ZSB0by4gV2lsbCB1c2UgYW5kIGFkdmFuY2Uge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBieSBgMmAgaWYgb21pdHRlZC5cbiAgICAgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IElmIGBvZmZzZXRgIG9yIGB2YWx1ZWAgaXMgbm90IGEgdmFsaWQgbnVtYmVyXG4gICAgICogQHRocm93cyB7UmFuZ2VFcnJvcn0gSWYgYG9mZnNldGAgaXMgb3V0IG9mIGJvdW5kc1xuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLndyaXRlVUludDE2ID0gQnl0ZUJ1ZmZlclByb3RvdHlwZS53cml0ZVVpbnQxNjtcblxuICAgIC8qKlxuICAgICAqIFJlYWRzIGEgMTZiaXQgdW5zaWduZWQgaW50ZWdlci5cbiAgICAgKiBAcGFyYW0ge251bWJlcj19IG9mZnNldCBPZmZzZXQgdG8gcmVhZCBmcm9tLiBXaWxsIHVzZSBhbmQgYWR2YW5jZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IGAyYCBpZiBvbWl0dGVkLlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IFZhbHVlIHJlYWRcbiAgICAgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IElmIGBvZmZzZXRgIGlzIG5vdCBhIHZhbGlkIG51bWJlclxuICAgICAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IElmIGBvZmZzZXRgIGlzIG91dCBvZiBib3VuZHNcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS5yZWFkVWludDE2ID0gZnVuY3Rpb24ob2Zmc2V0KSB7XG4gICAgICAgIHZhciByZWxhdGl2ZSA9IHR5cGVvZiBvZmZzZXQgPT09ICd1bmRlZmluZWQnO1xuICAgICAgICBpZiAocmVsYXRpdmUpIG9mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgICAgICBpZiAoIXRoaXMubm9Bc3NlcnQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ICE9PSAnbnVtYmVyJyB8fCBvZmZzZXQgJSAxICE9PSAwKVxuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgb2Zmc2V0OiBcIitvZmZzZXQrXCIgKG5vdCBhbiBpbnRlZ2VyKVwiKTtcbiAgICAgICAgICAgIG9mZnNldCA+Pj49IDA7XG4gICAgICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyAyID4gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IDAgPD0gXCIrb2Zmc2V0K1wiICgrXCIrMitcIikgPD0gXCIrdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gMDtcbiAgICAgICAgaWYgKHRoaXMubGl0dGxlRW5kaWFuKSB7XG4gICAgICAgICAgICB2YWx1ZSAgPSB0aGlzLnZpZXdbb2Zmc2V0ICBdO1xuICAgICAgICAgICAgdmFsdWUgfD0gdGhpcy52aWV3W29mZnNldCsxXSA8PCA4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgID0gdGhpcy52aWV3W29mZnNldCAgXSA8PCA4O1xuICAgICAgICAgICAgdmFsdWUgfD0gdGhpcy52aWV3W29mZnNldCsxXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVsYXRpdmUpIHRoaXMub2Zmc2V0ICs9IDI7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVhZHMgYSAxNmJpdCB1bnNpZ25lZCBpbnRlZ2VyLiBUaGlzIGlzIGFuIGFsaWFzIG9mIHtAbGluayBCeXRlQnVmZmVyI3JlYWRVaW50MTZ9LlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byByZWFkIGZyb20uIFdpbGwgdXNlIGFuZCBhZHZhbmNlIHtAbGluayBCeXRlQnVmZmVyI29mZnNldH0gYnkgYDJgIGlmIG9taXR0ZWQuXG4gICAgICogQHJldHVybnMge251bWJlcn0gVmFsdWUgcmVhZFxuICAgICAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gSWYgYG9mZnNldGAgaXMgbm90IGEgdmFsaWQgbnVtYmVyXG4gICAgICogQHRocm93cyB7UmFuZ2VFcnJvcn0gSWYgYG9mZnNldGAgaXMgb3V0IG9mIGJvdW5kc1xuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLnJlYWRVSW50MTYgPSBCeXRlQnVmZmVyUHJvdG90eXBlLnJlYWRVaW50MTY7XG5cbiAgICAvLyB0eXBlcy9pbnRzL2ludDMyXG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSAzMmJpdCBzaWduZWQgaW50ZWdlci5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVmFsdWUgdG8gd3JpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcj19IG9mZnNldCBPZmZzZXQgdG8gd3JpdGUgdG8uIFdpbGwgdXNlIGFuZCBpbmNyZWFzZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IGA0YCBpZiBvbWl0dGVkLlxuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLndyaXRlSW50MzIgPSBmdW5jdGlvbih2YWx1ZSwgb2Zmc2V0KSB7XG4gICAgICAgIHZhciByZWxhdGl2ZSA9IHR5cGVvZiBvZmZzZXQgPT09ICd1bmRlZmluZWQnO1xuICAgICAgICBpZiAocmVsYXRpdmUpIG9mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgICAgICBpZiAoIXRoaXMubm9Bc3NlcnQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInIHx8IHZhbHVlICUgMSAhPT0gMClcbiAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbGxlZ2FsIHZhbHVlOiBcIit2YWx1ZStcIiAobm90IGFuIGludGVnZXIpXCIpO1xuICAgICAgICAgICAgdmFsdWUgfD0gMDtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ICE9PSAnbnVtYmVyJyB8fCBvZmZzZXQgJSAxICE9PSAwKVxuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgb2Zmc2V0OiBcIitvZmZzZXQrXCIgKG5vdCBhbiBpbnRlZ2VyKVwiKTtcbiAgICAgICAgICAgIG9mZnNldCA+Pj49IDA7XG4gICAgICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyAwID4gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IDAgPD0gXCIrb2Zmc2V0K1wiICgrXCIrMCtcIikgPD0gXCIrdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgb2Zmc2V0ICs9IDQ7XG4gICAgICAgIHZhciBjYXBhY2l0eTQgPSB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoO1xuICAgICAgICBpZiAob2Zmc2V0ID4gY2FwYWNpdHk0KVxuICAgICAgICAgICAgdGhpcy5yZXNpemUoKGNhcGFjaXR5NCAqPSAyKSA+IG9mZnNldCA/IGNhcGFjaXR5NCA6IG9mZnNldCk7XG4gICAgICAgIG9mZnNldCAtPSA0O1xuICAgICAgICBpZiAodGhpcy5saXR0bGVFbmRpYW4pIHtcbiAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQrM10gPSAodmFsdWUgPj4+IDI0KSAmIDB4RkY7XG4gICAgICAgICAgICB0aGlzLnZpZXdbb2Zmc2V0KzJdID0gKHZhbHVlID4+PiAxNikgJiAweEZGO1xuICAgICAgICAgICAgdGhpcy52aWV3W29mZnNldCsxXSA9ICh2YWx1ZSA+Pj4gIDgpICYgMHhGRjtcbiAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQgIF0gPSAgdmFsdWUgICAgICAgICAmIDB4RkY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdbb2Zmc2V0ICBdID0gKHZhbHVlID4+PiAyNCkgJiAweEZGO1xuICAgICAgICAgICAgdGhpcy52aWV3W29mZnNldCsxXSA9ICh2YWx1ZSA+Pj4gMTYpICYgMHhGRjtcbiAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQrMl0gPSAodmFsdWUgPj4+ICA4KSAmIDB4RkY7XG4gICAgICAgICAgICB0aGlzLnZpZXdbb2Zmc2V0KzNdID0gIHZhbHVlICAgICAgICAgJiAweEZGO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWxhdGl2ZSkgdGhpcy5vZmZzZXQgKz0gNDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyBhIDMyYml0IHNpZ25lZCBpbnRlZ2VyLiBUaGlzIGlzIGFuIGFsaWFzIG9mIHtAbGluayBCeXRlQnVmZmVyI3dyaXRlSW50MzJ9LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBWYWx1ZSB0byB3cml0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byB3cml0ZSB0by4gV2lsbCB1c2UgYW5kIGluY3JlYXNlIHtAbGluayBCeXRlQnVmZmVyI29mZnNldH0gYnkgYDRgIGlmIG9taXR0ZWQuXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUud3JpdGVJbnQgPSBCeXRlQnVmZmVyUHJvdG90eXBlLndyaXRlSW50MzI7XG5cbiAgICAvKipcbiAgICAgKiBSZWFkcyBhIDMyYml0IHNpZ25lZCBpbnRlZ2VyLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byByZWFkIGZyb20uIFdpbGwgdXNlIGFuZCBpbmNyZWFzZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IGA0YCBpZiBvbWl0dGVkLlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IFZhbHVlIHJlYWRcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS5yZWFkSW50MzIgPSBmdW5jdGlvbihvZmZzZXQpIHtcbiAgICAgICAgdmFyIHJlbGF0aXZlID0gdHlwZW9mIG9mZnNldCA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIGlmIChyZWxhdGl2ZSkgb2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICAgIGlmICghdGhpcy5ub0Fzc2VydCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvZmZzZXQgIT09ICdudW1iZXInIHx8IG9mZnNldCAlIDEgIT09IDApXG4gICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IFwiK29mZnNldCtcIiAobm90IGFuIGludGVnZXIpXCIpO1xuICAgICAgICAgICAgb2Zmc2V0ID4+Pj0gMDtcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCArIDQgPiB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKVxuICAgICAgICAgICAgICAgIHRocm93IFJhbmdlRXJyb3IoXCJJbGxlZ2FsIG9mZnNldDogMCA8PSBcIitvZmZzZXQrXCIgKCtcIis0K1wiKSA8PSBcIit0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSAwO1xuICAgICAgICBpZiAodGhpcy5saXR0bGVFbmRpYW4pIHtcbiAgICAgICAgICAgIHZhbHVlICA9IHRoaXMudmlld1tvZmZzZXQrMl0gPDwgMTY7XG4gICAgICAgICAgICB2YWx1ZSB8PSB0aGlzLnZpZXdbb2Zmc2V0KzFdIDw8ICA4O1xuICAgICAgICAgICAgdmFsdWUgfD0gdGhpcy52aWV3W29mZnNldCAgXTtcbiAgICAgICAgICAgIHZhbHVlICs9IHRoaXMudmlld1tvZmZzZXQrM10gPDwgMjQgPj4+IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSAgPSB0aGlzLnZpZXdbb2Zmc2V0KzFdIDw8IDE2O1xuICAgICAgICAgICAgdmFsdWUgfD0gdGhpcy52aWV3W29mZnNldCsyXSA8PCAgODtcbiAgICAgICAgICAgIHZhbHVlIHw9IHRoaXMudmlld1tvZmZzZXQrM107XG4gICAgICAgICAgICB2YWx1ZSArPSB0aGlzLnZpZXdbb2Zmc2V0ICBdIDw8IDI0ID4+PiAwO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlIHw9IDA7IC8vIENhc3QgdG8gc2lnbmVkXG4gICAgICAgIGlmIChyZWxhdGl2ZSkgdGhpcy5vZmZzZXQgKz0gNDtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZWFkcyBhIDMyYml0IHNpZ25lZCBpbnRlZ2VyLiBUaGlzIGlzIGFuIGFsaWFzIG9mIHtAbGluayBCeXRlQnVmZmVyI3JlYWRJbnQzMn0uXG4gICAgICogQHBhcmFtIHtudW1iZXI9fSBvZmZzZXQgT2Zmc2V0IHRvIHJlYWQgZnJvbS4gV2lsbCB1c2UgYW5kIGFkdmFuY2Uge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBieSBgNGAgaWYgb21pdHRlZC5cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBWYWx1ZSByZWFkXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUucmVhZEludCA9IEJ5dGVCdWZmZXJQcm90b3R5cGUucmVhZEludDMyO1xuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIGEgMzJiaXQgdW5zaWduZWQgaW50ZWdlci5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVmFsdWUgdG8gd3JpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcj19IG9mZnNldCBPZmZzZXQgdG8gd3JpdGUgdG8uIFdpbGwgdXNlIGFuZCBpbmNyZWFzZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IGA0YCBpZiBvbWl0dGVkLlxuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLndyaXRlVWludDMyID0gZnVuY3Rpb24odmFsdWUsIG9mZnNldCkge1xuICAgICAgICB2YXIgcmVsYXRpdmUgPSB0eXBlb2Ygb2Zmc2V0ID09PSAndW5kZWZpbmVkJztcbiAgICAgICAgaWYgKHJlbGF0aXZlKSBvZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICAgICAgaWYgKCF0aGlzLm5vQXNzZXJ0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJyB8fCB2YWx1ZSAlIDEgIT09IDApXG4gICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCB2YWx1ZTogXCIrdmFsdWUrXCIgKG5vdCBhbiBpbnRlZ2VyKVwiKTtcbiAgICAgICAgICAgIHZhbHVlID4+Pj0gMDtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ICE9PSAnbnVtYmVyJyB8fCBvZmZzZXQgJSAxICE9PSAwKVxuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgb2Zmc2V0OiBcIitvZmZzZXQrXCIgKG5vdCBhbiBpbnRlZ2VyKVwiKTtcbiAgICAgICAgICAgIG9mZnNldCA+Pj49IDA7XG4gICAgICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyAwID4gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IDAgPD0gXCIrb2Zmc2V0K1wiICgrXCIrMCtcIikgPD0gXCIrdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgb2Zmc2V0ICs9IDQ7XG4gICAgICAgIHZhciBjYXBhY2l0eTUgPSB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoO1xuICAgICAgICBpZiAob2Zmc2V0ID4gY2FwYWNpdHk1KVxuICAgICAgICAgICAgdGhpcy5yZXNpemUoKGNhcGFjaXR5NSAqPSAyKSA+IG9mZnNldCA/IGNhcGFjaXR5NSA6IG9mZnNldCk7XG4gICAgICAgIG9mZnNldCAtPSA0O1xuICAgICAgICBpZiAodGhpcy5saXR0bGVFbmRpYW4pIHtcbiAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQrM10gPSAodmFsdWUgPj4+IDI0KSAmIDB4RkY7XG4gICAgICAgICAgICB0aGlzLnZpZXdbb2Zmc2V0KzJdID0gKHZhbHVlID4+PiAxNikgJiAweEZGO1xuICAgICAgICAgICAgdGhpcy52aWV3W29mZnNldCsxXSA9ICh2YWx1ZSA+Pj4gIDgpICYgMHhGRjtcbiAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQgIF0gPSAgdmFsdWUgICAgICAgICAmIDB4RkY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdbb2Zmc2V0ICBdID0gKHZhbHVlID4+PiAyNCkgJiAweEZGO1xuICAgICAgICAgICAgdGhpcy52aWV3W29mZnNldCsxXSA9ICh2YWx1ZSA+Pj4gMTYpICYgMHhGRjtcbiAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQrMl0gPSAodmFsdWUgPj4+ICA4KSAmIDB4RkY7XG4gICAgICAgICAgICB0aGlzLnZpZXdbb2Zmc2V0KzNdID0gIHZhbHVlICAgICAgICAgJiAweEZGO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWxhdGl2ZSkgdGhpcy5vZmZzZXQgKz0gNDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyBhIDMyYml0IHVuc2lnbmVkIGludGVnZXIuIFRoaXMgaXMgYW4gYWxpYXMgb2Yge0BsaW5rIEJ5dGVCdWZmZXIjd3JpdGVVaW50MzJ9LlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBWYWx1ZSB0byB3cml0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byB3cml0ZSB0by4gV2lsbCB1c2UgYW5kIGluY3JlYXNlIHtAbGluayBCeXRlQnVmZmVyI29mZnNldH0gYnkgYDRgIGlmIG9taXR0ZWQuXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUud3JpdGVVSW50MzIgPSBCeXRlQnVmZmVyUHJvdG90eXBlLndyaXRlVWludDMyO1xuXG4gICAgLyoqXG4gICAgICogUmVhZHMgYSAzMmJpdCB1bnNpZ25lZCBpbnRlZ2VyLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byByZWFkIGZyb20uIFdpbGwgdXNlIGFuZCBpbmNyZWFzZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IGA0YCBpZiBvbWl0dGVkLlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IFZhbHVlIHJlYWRcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS5yZWFkVWludDMyID0gZnVuY3Rpb24ob2Zmc2V0KSB7XG4gICAgICAgIHZhciByZWxhdGl2ZSA9IHR5cGVvZiBvZmZzZXQgPT09ICd1bmRlZmluZWQnO1xuICAgICAgICBpZiAocmVsYXRpdmUpIG9mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgICAgICBpZiAoIXRoaXMubm9Bc3NlcnQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ICE9PSAnbnVtYmVyJyB8fCBvZmZzZXQgJSAxICE9PSAwKVxuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgb2Zmc2V0OiBcIitvZmZzZXQrXCIgKG5vdCBhbiBpbnRlZ2VyKVwiKTtcbiAgICAgICAgICAgIG9mZnNldCA+Pj49IDA7XG4gICAgICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyA0ID4gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IDAgPD0gXCIrb2Zmc2V0K1wiICgrXCIrNCtcIikgPD0gXCIrdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gMDtcbiAgICAgICAgaWYgKHRoaXMubGl0dGxlRW5kaWFuKSB7XG4gICAgICAgICAgICB2YWx1ZSAgPSB0aGlzLnZpZXdbb2Zmc2V0KzJdIDw8IDE2O1xuICAgICAgICAgICAgdmFsdWUgfD0gdGhpcy52aWV3W29mZnNldCsxXSA8PCAgODtcbiAgICAgICAgICAgIHZhbHVlIHw9IHRoaXMudmlld1tvZmZzZXQgIF07XG4gICAgICAgICAgICB2YWx1ZSArPSB0aGlzLnZpZXdbb2Zmc2V0KzNdIDw8IDI0ID4+PiAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgID0gdGhpcy52aWV3W29mZnNldCsxXSA8PCAxNjtcbiAgICAgICAgICAgIHZhbHVlIHw9IHRoaXMudmlld1tvZmZzZXQrMl0gPDwgIDg7XG4gICAgICAgICAgICB2YWx1ZSB8PSB0aGlzLnZpZXdbb2Zmc2V0KzNdO1xuICAgICAgICAgICAgdmFsdWUgKz0gdGhpcy52aWV3W29mZnNldCAgXSA8PCAyNCA+Pj4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVsYXRpdmUpIHRoaXMub2Zmc2V0ICs9IDQ7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVhZHMgYSAzMmJpdCB1bnNpZ25lZCBpbnRlZ2VyLiBUaGlzIGlzIGFuIGFsaWFzIG9mIHtAbGluayBCeXRlQnVmZmVyI3JlYWRVaW50MzJ9LlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byByZWFkIGZyb20uIFdpbGwgdXNlIGFuZCBpbmNyZWFzZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IGA0YCBpZiBvbWl0dGVkLlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IFZhbHVlIHJlYWRcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS5yZWFkVUludDMyID0gQnl0ZUJ1ZmZlclByb3RvdHlwZS5yZWFkVWludDMyO1xuXG4gICAgLy8gdHlwZXMvaW50cy9pbnQ2NFxuXG4gICAgaWYgKExvbmcpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogV3JpdGVzIGEgNjRiaXQgc2lnbmVkIGludGVnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfCFMb25nfSB2YWx1ZSBWYWx1ZSB0byB3cml0ZVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcj19IG9mZnNldCBPZmZzZXQgdG8gd3JpdGUgdG8uIFdpbGwgdXNlIGFuZCBpbmNyZWFzZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IGA4YCBpZiBvbWl0dGVkLlxuICAgICAgICAgKiBAcmV0dXJucyB7IUJ5dGVCdWZmZXJ9IHRoaXNcbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS53cml0ZUludDY0ID0gZnVuY3Rpb24odmFsdWUsIG9mZnNldCkge1xuICAgICAgICAgICAgdmFyIHJlbGF0aXZlID0gdHlwZW9mIG9mZnNldCA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgICAgICBpZiAocmVsYXRpdmUpIG9mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgICAgICAgICAgaWYgKCF0aGlzLm5vQXNzZXJ0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTG9uZy5mcm9tTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IExvbmcuZnJvbVN0cmluZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoISh2YWx1ZSAmJiB2YWx1ZSBpbnN0YW5jZW9mIExvbmcpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbGxlZ2FsIHZhbHVlOiBcIit2YWx1ZStcIiAobm90IGFuIGludGVnZXIgb3IgTG9uZylcIik7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvZmZzZXQgIT09ICdudW1iZXInIHx8IG9mZnNldCAlIDEgIT09IDApXG4gICAgICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgb2Zmc2V0OiBcIitvZmZzZXQrXCIgKG5vdCBhbiBpbnRlZ2VyKVwiKTtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPj4+PSAwO1xuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCArIDAgPiB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IDAgPD0gXCIrb2Zmc2V0K1wiICgrXCIrMCtcIikgPD0gXCIrdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJylcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IExvbmcuZnJvbU51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgIHZhbHVlID0gTG9uZy5mcm9tU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgIG9mZnNldCArPSA4O1xuICAgICAgICAgICAgdmFyIGNhcGFjaXR5NiA9IHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGg7XG4gICAgICAgICAgICBpZiAob2Zmc2V0ID4gY2FwYWNpdHk2KVxuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplKChjYXBhY2l0eTYgKj0gMikgPiBvZmZzZXQgPyBjYXBhY2l0eTYgOiBvZmZzZXQpO1xuICAgICAgICAgICAgb2Zmc2V0IC09IDg7XG4gICAgICAgICAgICB2YXIgbG8gPSB2YWx1ZS5sb3csXG4gICAgICAgICAgICAgICAgaGkgPSB2YWx1ZS5oaWdoO1xuICAgICAgICAgICAgaWYgKHRoaXMubGl0dGxlRW5kaWFuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3W29mZnNldCszXSA9IChsbyA+Pj4gMjQpICYgMHhGRjtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdbb2Zmc2V0KzJdID0gKGxvID4+PiAxNikgJiAweEZGO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQrMV0gPSAobG8gPj4+ICA4KSAmIDB4RkY7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3W29mZnNldCAgXSA9ICBsbyAgICAgICAgICYgMHhGRjtcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdbb2Zmc2V0KzNdID0gKGhpID4+PiAyNCkgJiAweEZGO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQrMl0gPSAoaGkgPj4+IDE2KSAmIDB4RkY7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3W29mZnNldCsxXSA9IChoaSA+Pj4gIDgpICYgMHhGRjtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdbb2Zmc2V0ICBdID0gIGhpICAgICAgICAgJiAweEZGO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdbb2Zmc2V0ICBdID0gKGhpID4+PiAyNCkgJiAweEZGO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQrMV0gPSAoaGkgPj4+IDE2KSAmIDB4RkY7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3W29mZnNldCsyXSA9IChoaSA+Pj4gIDgpICYgMHhGRjtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdbb2Zmc2V0KzNdID0gIGhpICAgICAgICAgJiAweEZGO1xuICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xuICAgICAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQgIF0gPSAobG8gPj4+IDI0KSAmIDB4RkY7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3W29mZnNldCsxXSA9IChsbyA+Pj4gMTYpICYgMHhGRjtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdbb2Zmc2V0KzJdID0gKGxvID4+PiAgOCkgJiAweEZGO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQrM10gPSAgbG8gICAgICAgICAmIDB4RkY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVsYXRpdmUpIHRoaXMub2Zmc2V0ICs9IDg7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogV3JpdGVzIGEgNjRiaXQgc2lnbmVkIGludGVnZXIuIFRoaXMgaXMgYW4gYWxpYXMgb2Yge0BsaW5rIEJ5dGVCdWZmZXIjd3JpdGVJbnQ2NH0uXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfCFMb25nfSB2YWx1ZSBWYWx1ZSB0byB3cml0ZVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcj19IG9mZnNldCBPZmZzZXQgdG8gd3JpdGUgdG8uIFdpbGwgdXNlIGFuZCBpbmNyZWFzZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IGA4YCBpZiBvbWl0dGVkLlxuICAgICAgICAgKiBAcmV0dXJucyB7IUJ5dGVCdWZmZXJ9IHRoaXNcbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS53cml0ZUxvbmcgPSBCeXRlQnVmZmVyUHJvdG90eXBlLndyaXRlSW50NjQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlYWRzIGEgNjRiaXQgc2lnbmVkIGludGVnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byByZWFkIGZyb20uIFdpbGwgdXNlIGFuZCBpbmNyZWFzZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IGA4YCBpZiBvbWl0dGVkLlxuICAgICAgICAgKiBAcmV0dXJucyB7IUxvbmd9XG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUucmVhZEludDY0ID0gZnVuY3Rpb24ob2Zmc2V0KSB7XG4gICAgICAgICAgICB2YXIgcmVsYXRpdmUgPSB0eXBlb2Ygb2Zmc2V0ID09PSAndW5kZWZpbmVkJztcbiAgICAgICAgICAgIGlmIChyZWxhdGl2ZSkgb2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm9Bc3NlcnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9mZnNldCAhPT0gJ251bWJlcicgfHwgb2Zmc2V0ICUgMSAhPT0gMClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IFwiK29mZnNldCtcIiAobm90IGFuIGludGVnZXIpXCIpO1xuICAgICAgICAgICAgICAgIG9mZnNldCA+Pj49IDA7XG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ICsgOCA+IHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IFJhbmdlRXJyb3IoXCJJbGxlZ2FsIG9mZnNldDogMCA8PSBcIitvZmZzZXQrXCIgKCtcIis4K1wiKSA8PSBcIit0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsbyA9IDAsXG4gICAgICAgICAgICAgICAgaGkgPSAwO1xuICAgICAgICAgICAgaWYgKHRoaXMubGl0dGxlRW5kaWFuKSB7XG4gICAgICAgICAgICAgICAgbG8gID0gdGhpcy52aWV3W29mZnNldCsyXSA8PCAxNjtcbiAgICAgICAgICAgICAgICBsbyB8PSB0aGlzLnZpZXdbb2Zmc2V0KzFdIDw8ICA4O1xuICAgICAgICAgICAgICAgIGxvIHw9IHRoaXMudmlld1tvZmZzZXQgIF07XG4gICAgICAgICAgICAgICAgbG8gKz0gdGhpcy52aWV3W29mZnNldCszXSA8PCAyNCA+Pj4gMDtcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDtcbiAgICAgICAgICAgICAgICBoaSAgPSB0aGlzLnZpZXdbb2Zmc2V0KzJdIDw8IDE2O1xuICAgICAgICAgICAgICAgIGhpIHw9IHRoaXMudmlld1tvZmZzZXQrMV0gPDwgIDg7XG4gICAgICAgICAgICAgICAgaGkgfD0gdGhpcy52aWV3W29mZnNldCAgXTtcbiAgICAgICAgICAgICAgICBoaSArPSB0aGlzLnZpZXdbb2Zmc2V0KzNdIDw8IDI0ID4+PiAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoaSAgPSB0aGlzLnZpZXdbb2Zmc2V0KzFdIDw8IDE2O1xuICAgICAgICAgICAgICAgIGhpIHw9IHRoaXMudmlld1tvZmZzZXQrMl0gPDwgIDg7XG4gICAgICAgICAgICAgICAgaGkgfD0gdGhpcy52aWV3W29mZnNldCszXTtcbiAgICAgICAgICAgICAgICBoaSArPSB0aGlzLnZpZXdbb2Zmc2V0ICBdIDw8IDI0ID4+PiAwO1xuICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xuICAgICAgICAgICAgICAgIGxvICA9IHRoaXMudmlld1tvZmZzZXQrMV0gPDwgMTY7XG4gICAgICAgICAgICAgICAgbG8gfD0gdGhpcy52aWV3W29mZnNldCsyXSA8PCAgODtcbiAgICAgICAgICAgICAgICBsbyB8PSB0aGlzLnZpZXdbb2Zmc2V0KzNdO1xuICAgICAgICAgICAgICAgIGxvICs9IHRoaXMudmlld1tvZmZzZXQgIF0gPDwgMjQgPj4+IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBuZXcgTG9uZyhsbywgaGksIGZhbHNlKS50b051bWJlcigpO1xuICAgICAgICAgICAgaWYgKHJlbGF0aXZlKSB0aGlzLm9mZnNldCArPSA4O1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWFkcyBhIDY0Yml0IHNpZ25lZCBpbnRlZ2VyLiBUaGlzIGlzIGFuIGFsaWFzIG9mIHtAbGluayBCeXRlQnVmZmVyI3JlYWRJbnQ2NH0uXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byByZWFkIGZyb20uIFdpbGwgdXNlIGFuZCBpbmNyZWFzZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IGA4YCBpZiBvbWl0dGVkLlxuICAgICAgICAgKiBAcmV0dXJucyB7IUxvbmd9XG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUucmVhZExvbmcgPSBCeXRlQnVmZmVyUHJvdG90eXBlLnJlYWRJbnQ2NDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogV3JpdGVzIGEgNjRiaXQgdW5zaWduZWQgaW50ZWdlci5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ8IUxvbmd9IHZhbHVlIFZhbHVlIHRvIHdyaXRlXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byB3cml0ZSB0by4gV2lsbCB1c2UgYW5kIGluY3JlYXNlIHtAbGluayBCeXRlQnVmZmVyI29mZnNldH0gYnkgYDhgIGlmIG9taXR0ZWQuXG4gICAgICAgICAqIEByZXR1cm5zIHshQnl0ZUJ1ZmZlcn0gdGhpc1xuICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAqL1xuICAgICAgICBCeXRlQnVmZmVyUHJvdG90eXBlLndyaXRlVWludDY0ID0gZnVuY3Rpb24odmFsdWUsIG9mZnNldCkge1xuICAgICAgICAgICAgdmFyIHJlbGF0aXZlID0gdHlwZW9mIG9mZnNldCA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgICAgICBpZiAocmVsYXRpdmUpIG9mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgICAgICAgICAgaWYgKCF0aGlzLm5vQXNzZXJ0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTG9uZy5mcm9tTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IExvbmcuZnJvbVN0cmluZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoISh2YWx1ZSAmJiB2YWx1ZSBpbnN0YW5jZW9mIExvbmcpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbGxlZ2FsIHZhbHVlOiBcIit2YWx1ZStcIiAobm90IGFuIGludGVnZXIgb3IgTG9uZylcIik7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvZmZzZXQgIT09ICdudW1iZXInIHx8IG9mZnNldCAlIDEgIT09IDApXG4gICAgICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgb2Zmc2V0OiBcIitvZmZzZXQrXCIgKG5vdCBhbiBpbnRlZ2VyKVwiKTtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPj4+PSAwO1xuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCArIDAgPiB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IDAgPD0gXCIrb2Zmc2V0K1wiICgrXCIrMCtcIikgPD0gXCIrdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJylcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IExvbmcuZnJvbU51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgIHZhbHVlID0gTG9uZy5mcm9tU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgIG9mZnNldCArPSA4O1xuICAgICAgICAgICAgdmFyIGNhcGFjaXR5NyA9IHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGg7XG4gICAgICAgICAgICBpZiAob2Zmc2V0ID4gY2FwYWNpdHk3KVxuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplKChjYXBhY2l0eTcgKj0gMikgPiBvZmZzZXQgPyBjYXBhY2l0eTcgOiBvZmZzZXQpO1xuICAgICAgICAgICAgb2Zmc2V0IC09IDg7XG4gICAgICAgICAgICB2YXIgbG8gPSB2YWx1ZS5sb3csXG4gICAgICAgICAgICAgICAgaGkgPSB2YWx1ZS5oaWdoO1xuICAgICAgICAgICAgaWYgKHRoaXMubGl0dGxlRW5kaWFuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3W29mZnNldCszXSA9IChsbyA+Pj4gMjQpICYgMHhGRjtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdbb2Zmc2V0KzJdID0gKGxvID4+PiAxNikgJiAweEZGO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQrMV0gPSAobG8gPj4+ICA4KSAmIDB4RkY7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3W29mZnNldCAgXSA9ICBsbyAgICAgICAgICYgMHhGRjtcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdbb2Zmc2V0KzNdID0gKGhpID4+PiAyNCkgJiAweEZGO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQrMl0gPSAoaGkgPj4+IDE2KSAmIDB4RkY7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3W29mZnNldCsxXSA9IChoaSA+Pj4gIDgpICYgMHhGRjtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdbb2Zmc2V0ICBdID0gIGhpICAgICAgICAgJiAweEZGO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdbb2Zmc2V0ICBdID0gKGhpID4+PiAyNCkgJiAweEZGO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQrMV0gPSAoaGkgPj4+IDE2KSAmIDB4RkY7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3W29mZnNldCsyXSA9IChoaSA+Pj4gIDgpICYgMHhGRjtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdbb2Zmc2V0KzNdID0gIGhpICAgICAgICAgJiAweEZGO1xuICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xuICAgICAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQgIF0gPSAobG8gPj4+IDI0KSAmIDB4RkY7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3W29mZnNldCsxXSA9IChsbyA+Pj4gMTYpICYgMHhGRjtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdbb2Zmc2V0KzJdID0gKGxvID4+PiAgOCkgJiAweEZGO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQrM10gPSAgbG8gICAgICAgICAmIDB4RkY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVsYXRpdmUpIHRoaXMub2Zmc2V0ICs9IDg7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogV3JpdGVzIGEgNjRiaXQgdW5zaWduZWQgaW50ZWdlci4gVGhpcyBpcyBhbiBhbGlhcyBvZiB7QGxpbmsgQnl0ZUJ1ZmZlciN3cml0ZVVpbnQ2NH0uXG4gICAgICAgICAqIEBmdW5jdGlvblxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcnwhTG9uZ30gdmFsdWUgVmFsdWUgdG8gd3JpdGVcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXI9fSBvZmZzZXQgT2Zmc2V0IHRvIHdyaXRlIHRvLiBXaWxsIHVzZSBhbmQgaW5jcmVhc2Uge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBieSBgOGAgaWYgb21pdHRlZC5cbiAgICAgICAgICogQHJldHVybnMgeyFCeXRlQnVmZmVyfSB0aGlzXG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUud3JpdGVVSW50NjQgPSBCeXRlQnVmZmVyUHJvdG90eXBlLndyaXRlVWludDY0O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWFkcyBhIDY0Yml0IHVuc2lnbmVkIGludGVnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byByZWFkIGZyb20uIFdpbGwgdXNlIGFuZCBpbmNyZWFzZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IGA4YCBpZiBvbWl0dGVkLlxuICAgICAgICAgKiBAcmV0dXJucyB7IUxvbmd9XG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUucmVhZFVpbnQ2NCA9IGZ1bmN0aW9uKG9mZnNldCkge1xuICAgICAgICAgICAgdmFyIHJlbGF0aXZlID0gdHlwZW9mIG9mZnNldCA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgICAgICBpZiAocmVsYXRpdmUpIG9mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgICAgICAgICAgaWYgKCF0aGlzLm5vQXNzZXJ0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvZmZzZXQgIT09ICdudW1iZXInIHx8IG9mZnNldCAlIDEgIT09IDApXG4gICAgICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgb2Zmc2V0OiBcIitvZmZzZXQrXCIgKG5vdCBhbiBpbnRlZ2VyKVwiKTtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPj4+PSAwO1xuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCArIDggPiB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IDAgPD0gXCIrb2Zmc2V0K1wiICgrXCIrOCtcIikgPD0gXCIrdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbG8gPSAwLFxuICAgICAgICAgICAgICAgIGhpID0gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLmxpdHRsZUVuZGlhbikge1xuICAgICAgICAgICAgICAgIGxvICA9IHRoaXMudmlld1tvZmZzZXQrMl0gPDwgMTY7XG4gICAgICAgICAgICAgICAgbG8gfD0gdGhpcy52aWV3W29mZnNldCsxXSA8PCAgODtcbiAgICAgICAgICAgICAgICBsbyB8PSB0aGlzLnZpZXdbb2Zmc2V0ICBdO1xuICAgICAgICAgICAgICAgIGxvICs9IHRoaXMudmlld1tvZmZzZXQrM10gPDwgMjQgPj4+IDA7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XG4gICAgICAgICAgICAgICAgaGkgID0gdGhpcy52aWV3W29mZnNldCsyXSA8PCAxNjtcbiAgICAgICAgICAgICAgICBoaSB8PSB0aGlzLnZpZXdbb2Zmc2V0KzFdIDw8ICA4O1xuICAgICAgICAgICAgICAgIGhpIHw9IHRoaXMudmlld1tvZmZzZXQgIF07XG4gICAgICAgICAgICAgICAgaGkgKz0gdGhpcy52aWV3W29mZnNldCszXSA8PCAyNCA+Pj4gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGkgID0gdGhpcy52aWV3W29mZnNldCsxXSA8PCAxNjtcbiAgICAgICAgICAgICAgICBoaSB8PSB0aGlzLnZpZXdbb2Zmc2V0KzJdIDw8ICA4O1xuICAgICAgICAgICAgICAgIGhpIHw9IHRoaXMudmlld1tvZmZzZXQrM107XG4gICAgICAgICAgICAgICAgaGkgKz0gdGhpcy52aWV3W29mZnNldCAgXSA8PCAyNCA+Pj4gMDtcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDtcbiAgICAgICAgICAgICAgICBsbyAgPSB0aGlzLnZpZXdbb2Zmc2V0KzFdIDw8IDE2O1xuICAgICAgICAgICAgICAgIGxvIHw9IHRoaXMudmlld1tvZmZzZXQrMl0gPDwgIDg7XG4gICAgICAgICAgICAgICAgbG8gfD0gdGhpcy52aWV3W29mZnNldCszXTtcbiAgICAgICAgICAgICAgICBsbyArPSB0aGlzLnZpZXdbb2Zmc2V0ICBdIDw8IDI0ID4+PiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gbmV3IExvbmcobG8sIGhpLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChyZWxhdGl2ZSkgdGhpcy5vZmZzZXQgKz0gODtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVhZHMgYSA2NGJpdCB1bnNpZ25lZCBpbnRlZ2VyLiBUaGlzIGlzIGFuIGFsaWFzIG9mIHtAbGluayBCeXRlQnVmZmVyI3JlYWRVaW50NjR9LlxuICAgICAgICAgKiBAZnVuY3Rpb25cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXI9fSBvZmZzZXQgT2Zmc2V0IHRvIHJlYWQgZnJvbS4gV2lsbCB1c2UgYW5kIGluY3JlYXNlIHtAbGluayBCeXRlQnVmZmVyI29mZnNldH0gYnkgYDhgIGlmIG9taXR0ZWQuXG4gICAgICAgICAqIEByZXR1cm5zIHshTG9uZ31cbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS5yZWFkVUludDY0ID0gQnl0ZUJ1ZmZlclByb3RvdHlwZS5yZWFkVWludDY0O1xuXG4gICAgfSAvLyBMb25nXG5cblxuICAgIC8vIHR5cGVzL2Zsb2F0cy9mbG9hdDMyXG5cbiAgICAvKlxuICAgICBpZWVlNzU0IC0gaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9pZWVlNzU0XG4gICAgIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICAgICBDb3B5cmlnaHQgKGMpIEZlcm9zcyBBYm91a2hhZGlqZWhcbiAgICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICAgICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gICAgIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAgICAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICAgICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAgICAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAgICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAgICAgYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAgICAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gICAgIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICAgICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gICAgIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gICAgIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAgICAgVEhFIFNPRlRXQVJFLlxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBSZWFkcyBhbiBJRUVFNzU0IGZsb2F0IGZyb20gYSBieXRlIGFycmF5LlxuICAgICAqIEBwYXJhbSB7IUFycmF5fSBidWZmZXJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc0xFXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1MZW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbkJ5dGVzXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpZWVlNzU0X3JlYWQoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICAgICAgICB2YXIgZSwgbSxcbiAgICAgICAgICAgIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDEsXG4gICAgICAgICAgICBlTWF4ID0gKDEgPDwgZUxlbikgLSAxLFxuICAgICAgICAgICAgZUJpYXMgPSBlTWF4ID4+IDEsXG4gICAgICAgICAgICBuQml0cyA9IC03LFxuICAgICAgICAgICAgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwLFxuICAgICAgICAgICAgZCA9IGlzTEUgPyAtMSA6IDEsXG4gICAgICAgICAgICBzID0gYnVmZmVyW29mZnNldCArIGldO1xuXG4gICAgICAgIGkgKz0gZDtcblxuICAgICAgICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKTtcbiAgICAgICAgcyA+Pj0gKC1uQml0cyk7XG4gICAgICAgIG5CaXRzICs9IGVMZW47XG4gICAgICAgIGZvciAoOyBuQml0cyA+IDA7IGUgPSBlICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgICAgICAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSk7XG4gICAgICAgIGUgPj49ICgtbkJpdHMpO1xuICAgICAgICBuQml0cyArPSBtTGVuO1xuICAgICAgICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gICAgICAgIGlmIChlID09PSAwKSB7XG4gICAgICAgICAgICBlID0gMSAtIGVCaWFzO1xuICAgICAgICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICAgICAgICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICAgICAgICBlID0gZSAtIGVCaWFzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyBhbiBJRUVFNzU0IGZsb2F0IHRvIGEgYnl0ZSBhcnJheS5cbiAgICAgKiBAcGFyYW0geyFBcnJheX0gYnVmZmVyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNMRVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtTGVuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5CeXRlc1xuICAgICAqIEBpbm5lclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGllZWU3NTRfd3JpdGUoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgICAgICAgdmFyIGUsIG0sIGMsXG4gICAgICAgICAgICBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxLFxuICAgICAgICAgICAgZU1heCA9ICgxIDw8IGVMZW4pIC0gMSxcbiAgICAgICAgICAgIGVCaWFzID0gZU1heCA+PiAxLFxuICAgICAgICAgICAgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApLFxuICAgICAgICAgICAgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpLFxuICAgICAgICAgICAgZCA9IGlzTEUgPyAxIDogLTEsXG4gICAgICAgICAgICBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwO1xuXG4gICAgICAgIHZhbHVlID0gTWF0aC5hYnModmFsdWUpO1xuXG4gICAgICAgIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDA7XG4gICAgICAgICAgICBlID0gZU1heDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgICAgICAgICAgICBlLS07XG4gICAgICAgICAgICAgICAgYyAqPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgKz0gcnQgLyBjO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgICAgICAgICAgICBlKys7XG4gICAgICAgICAgICAgICAgYyAvPSAyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgICAgICAgICAgICBtID0gMDtcbiAgICAgICAgICAgICAgICBlID0gZU1heDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgICAgICAgICAgICBtID0gKHZhbHVlICogYyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICAgICAgICAgICAgZSA9IGUgKyBlQmlhcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgICAgICAgICAgIGUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICAgICAgICBlID0gKGUgPDwgbUxlbikgfCBtO1xuICAgICAgICBlTGVuICs9IG1MZW47XG4gICAgICAgIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICAgICAgICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIGEgMzJiaXQgZmxvYXQuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFZhbHVlIHRvIHdyaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXI9fSBvZmZzZXQgT2Zmc2V0IHRvIHdyaXRlIHRvLiBXaWxsIHVzZSBhbmQgaW5jcmVhc2Uge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBieSBgNGAgaWYgb21pdHRlZC5cbiAgICAgKiBAcmV0dXJucyB7IUJ5dGVCdWZmZXJ9IHRoaXNcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS53cml0ZUZsb2F0MzIgPSBmdW5jdGlvbih2YWx1ZSwgb2Zmc2V0KSB7XG4gICAgICAgIHZhciByZWxhdGl2ZSA9IHR5cGVvZiBvZmZzZXQgPT09ICd1bmRlZmluZWQnO1xuICAgICAgICBpZiAocmVsYXRpdmUpIG9mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgICAgICBpZiAoIXRoaXMubm9Bc3NlcnQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKVxuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgdmFsdWU6IFwiK3ZhbHVlK1wiIChub3QgYSBudW1iZXIpXCIpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvZmZzZXQgIT09ICdudW1iZXInIHx8IG9mZnNldCAlIDEgIT09IDApXG4gICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IFwiK29mZnNldCtcIiAobm90IGFuIGludGVnZXIpXCIpO1xuICAgICAgICAgICAgb2Zmc2V0ID4+Pj0gMDtcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCArIDAgPiB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKVxuICAgICAgICAgICAgICAgIHRocm93IFJhbmdlRXJyb3IoXCJJbGxlZ2FsIG9mZnNldDogMCA8PSBcIitvZmZzZXQrXCIgKCtcIiswK1wiKSA8PSBcIit0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBvZmZzZXQgKz0gNDtcbiAgICAgICAgdmFyIGNhcGFjaXR5OCA9IHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGg7XG4gICAgICAgIGlmIChvZmZzZXQgPiBjYXBhY2l0eTgpXG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSgoY2FwYWNpdHk4ICo9IDIpID4gb2Zmc2V0ID8gY2FwYWNpdHk4IDogb2Zmc2V0KTtcbiAgICAgICAgb2Zmc2V0IC09IDQ7XG4gICAgICAgIGllZWU3NTRfd3JpdGUodGhpcy52aWV3LCB2YWx1ZSwgb2Zmc2V0LCB0aGlzLmxpdHRsZUVuZGlhbiwgMjMsIDQpO1xuICAgICAgICBpZiAocmVsYXRpdmUpIHRoaXMub2Zmc2V0ICs9IDQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSAzMmJpdCBmbG9hdC4gVGhpcyBpcyBhbiBhbGlhcyBvZiB7QGxpbmsgQnl0ZUJ1ZmZlciN3cml0ZUZsb2F0MzJ9LlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBWYWx1ZSB0byB3cml0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byB3cml0ZSB0by4gV2lsbCB1c2UgYW5kIGluY3JlYXNlIHtAbGluayBCeXRlQnVmZmVyI29mZnNldH0gYnkgYDRgIGlmIG9taXR0ZWQuXG4gICAgICogQHJldHVybnMgeyFCeXRlQnVmZmVyfSB0aGlzXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUud3JpdGVGbG9hdCA9IEJ5dGVCdWZmZXJQcm90b3R5cGUud3JpdGVGbG9hdDMyO1xuXG4gICAgLyoqXG4gICAgICogUmVhZHMgYSAzMmJpdCBmbG9hdC5cbiAgICAgKiBAcGFyYW0ge251bWJlcj19IG9mZnNldCBPZmZzZXQgdG8gcmVhZCBmcm9tLiBXaWxsIHVzZSBhbmQgaW5jcmVhc2Uge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBieSBgNGAgaWYgb21pdHRlZC5cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLnJlYWRGbG9hdDMyID0gZnVuY3Rpb24ob2Zmc2V0KSB7XG4gICAgICAgIHZhciByZWxhdGl2ZSA9IHR5cGVvZiBvZmZzZXQgPT09ICd1bmRlZmluZWQnO1xuICAgICAgICBpZiAocmVsYXRpdmUpIG9mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgICAgICBpZiAoIXRoaXMubm9Bc3NlcnQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ICE9PSAnbnVtYmVyJyB8fCBvZmZzZXQgJSAxICE9PSAwKVxuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgb2Zmc2V0OiBcIitvZmZzZXQrXCIgKG5vdCBhbiBpbnRlZ2VyKVwiKTtcbiAgICAgICAgICAgIG9mZnNldCA+Pj49IDA7XG4gICAgICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyA0ID4gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IDAgPD0gXCIrb2Zmc2V0K1wiICgrXCIrNCtcIikgPD0gXCIrdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gaWVlZTc1NF9yZWFkKHRoaXMudmlldywgb2Zmc2V0LCB0aGlzLmxpdHRsZUVuZGlhbiwgMjMsIDQpO1xuICAgICAgICBpZiAocmVsYXRpdmUpIHRoaXMub2Zmc2V0ICs9IDQ7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVhZHMgYSAzMmJpdCBmbG9hdC4gVGhpcyBpcyBhbiBhbGlhcyBvZiB7QGxpbmsgQnl0ZUJ1ZmZlciNyZWFkRmxvYXQzMn0uXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXI9fSBvZmZzZXQgT2Zmc2V0IHRvIHJlYWQgZnJvbS4gV2lsbCB1c2UgYW5kIGluY3JlYXNlIHtAbGluayBCeXRlQnVmZmVyI29mZnNldH0gYnkgYDRgIGlmIG9taXR0ZWQuXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS5yZWFkRmxvYXQgPSBCeXRlQnVmZmVyUHJvdG90eXBlLnJlYWRGbG9hdDMyO1xuXG4gICAgLy8gdHlwZXMvZmxvYXRzL2Zsb2F0NjRcblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyBhIDY0Yml0IGZsb2F0LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBWYWx1ZSB0byB3cml0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byB3cml0ZSB0by4gV2lsbCB1c2UgYW5kIGluY3JlYXNlIHtAbGluayBCeXRlQnVmZmVyI29mZnNldH0gYnkgYDhgIGlmIG9taXR0ZWQuXG4gICAgICogQHJldHVybnMgeyFCeXRlQnVmZmVyfSB0aGlzXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUud3JpdGVGbG9hdDY0ID0gZnVuY3Rpb24odmFsdWUsIG9mZnNldCkge1xuICAgICAgICB2YXIgcmVsYXRpdmUgPSB0eXBlb2Ygb2Zmc2V0ID09PSAndW5kZWZpbmVkJztcbiAgICAgICAgaWYgKHJlbGF0aXZlKSBvZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICAgICAgaWYgKCF0aGlzLm5vQXNzZXJ0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJylcbiAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbGxlZ2FsIHZhbHVlOiBcIit2YWx1ZStcIiAobm90IGEgbnVtYmVyKVwiKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ICE9PSAnbnVtYmVyJyB8fCBvZmZzZXQgJSAxICE9PSAwKVxuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgb2Zmc2V0OiBcIitvZmZzZXQrXCIgKG5vdCBhbiBpbnRlZ2VyKVwiKTtcbiAgICAgICAgICAgIG9mZnNldCA+Pj49IDA7XG4gICAgICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyAwID4gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IDAgPD0gXCIrb2Zmc2V0K1wiICgrXCIrMCtcIikgPD0gXCIrdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgb2Zmc2V0ICs9IDg7XG4gICAgICAgIHZhciBjYXBhY2l0eTkgPSB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoO1xuICAgICAgICBpZiAob2Zmc2V0ID4gY2FwYWNpdHk5KVxuICAgICAgICAgICAgdGhpcy5yZXNpemUoKGNhcGFjaXR5OSAqPSAyKSA+IG9mZnNldCA/IGNhcGFjaXR5OSA6IG9mZnNldCk7XG4gICAgICAgIG9mZnNldCAtPSA4O1xuICAgICAgICBpZWVlNzU0X3dyaXRlKHRoaXMudmlldywgdmFsdWUsIG9mZnNldCwgdGhpcy5saXR0bGVFbmRpYW4sIDUyLCA4KTtcbiAgICAgICAgaWYgKHJlbGF0aXZlKSB0aGlzLm9mZnNldCArPSA4O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIGEgNjRiaXQgZmxvYXQuIFRoaXMgaXMgYW4gYWxpYXMgb2Yge0BsaW5rIEJ5dGVCdWZmZXIjd3JpdGVGbG9hdDY0fS5cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVmFsdWUgdG8gd3JpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcj19IG9mZnNldCBPZmZzZXQgdG8gd3JpdGUgdG8uIFdpbGwgdXNlIGFuZCBpbmNyZWFzZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IGA4YCBpZiBvbWl0dGVkLlxuICAgICAqIEByZXR1cm5zIHshQnl0ZUJ1ZmZlcn0gdGhpc1xuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLndyaXRlRG91YmxlID0gQnl0ZUJ1ZmZlclByb3RvdHlwZS53cml0ZUZsb2F0NjQ7XG5cbiAgICAvKipcbiAgICAgKiBSZWFkcyBhIDY0Yml0IGZsb2F0LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byByZWFkIGZyb20uIFdpbGwgdXNlIGFuZCBpbmNyZWFzZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IGA4YCBpZiBvbWl0dGVkLlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUucmVhZEZsb2F0NjQgPSBmdW5jdGlvbihvZmZzZXQpIHtcbiAgICAgICAgdmFyIHJlbGF0aXZlID0gdHlwZW9mIG9mZnNldCA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIGlmIChyZWxhdGl2ZSkgb2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICAgIGlmICghdGhpcy5ub0Fzc2VydCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvZmZzZXQgIT09ICdudW1iZXInIHx8IG9mZnNldCAlIDEgIT09IDApXG4gICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IFwiK29mZnNldCtcIiAobm90IGFuIGludGVnZXIpXCIpO1xuICAgICAgICAgICAgb2Zmc2V0ID4+Pj0gMDtcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCArIDggPiB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKVxuICAgICAgICAgICAgICAgIHRocm93IFJhbmdlRXJyb3IoXCJJbGxlZ2FsIG9mZnNldDogMCA8PSBcIitvZmZzZXQrXCIgKCtcIis4K1wiKSA8PSBcIit0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBpZWVlNzU0X3JlYWQodGhpcy52aWV3LCBvZmZzZXQsIHRoaXMubGl0dGxlRW5kaWFuLCA1MiwgOCk7XG4gICAgICAgIGlmIChyZWxhdGl2ZSkgdGhpcy5vZmZzZXQgKz0gODtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZWFkcyBhIDY0Yml0IGZsb2F0LiBUaGlzIGlzIGFuIGFsaWFzIG9mIHtAbGluayBCeXRlQnVmZmVyI3JlYWRGbG9hdDY0fS5cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcj19IG9mZnNldCBPZmZzZXQgdG8gcmVhZCBmcm9tLiBXaWxsIHVzZSBhbmQgaW5jcmVhc2Uge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBieSBgOGAgaWYgb21pdHRlZC5cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLnJlYWREb3VibGUgPSBCeXRlQnVmZmVyUHJvdG90eXBlLnJlYWRGbG9hdDY0O1xuXG5cbiAgICAvLyB0eXBlcy92YXJpbnRzL3ZhcmludDMyXG5cbiAgICAvKipcbiAgICAgKiBNYXhpbXVtIG51bWJlciBvZiBieXRlcyByZXF1aXJlZCB0byBzdG9yZSBhIDMyYml0IGJhc2UgMTI4IHZhcmlhYmxlLWxlbmd0aCBpbnRlZ2VyLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQGNvbnN0XG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXIuTUFYX1ZBUklOVDMyX0JZVEVTID0gNTtcblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGFjdHVhbCBudW1iZXIgb2YgYnl0ZXMgcmVxdWlyZWQgdG8gc3RvcmUgYSAzMmJpdCBiYXNlIDEyOCB2YXJpYWJsZS1sZW5ndGggaW50ZWdlci5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVmFsdWUgdG8gZW5jb2RlXG4gICAgICogQHJldHVybnMge251bWJlcn0gTnVtYmVyIG9mIGJ5dGVzIHJlcXVpcmVkLiBDYXBwZWQgdG8ge0BsaW5rIEJ5dGVCdWZmZXIuTUFYX1ZBUklOVDMyX0JZVEVTfVxuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyLmNhbGN1bGF0ZVZhcmludDMyID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgLy8gcmVmOiBzcmMvZ29vZ2xlL3Byb3RvYnVmL2lvL2NvZGVkX3N0cmVhbS5jY1xuICAgICAgICB2YWx1ZSA9IHZhbHVlID4+PiAwO1xuICAgICAgICAgICAgIGlmICh2YWx1ZSA8IDEgPDwgNyApIHJldHVybiAxO1xuICAgICAgICBlbHNlIGlmICh2YWx1ZSA8IDEgPDwgMTQpIHJldHVybiAyO1xuICAgICAgICBlbHNlIGlmICh2YWx1ZSA8IDEgPDwgMjEpIHJldHVybiAzO1xuICAgICAgICBlbHNlIGlmICh2YWx1ZSA8IDEgPDwgMjgpIHJldHVybiA0O1xuICAgICAgICBlbHNlICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA1O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBaaWd6YWcgZW5jb2RlcyBhIHNpZ25lZCAzMmJpdCBpbnRlZ2VyIHNvIHRoYXQgaXQgY2FuIGJlIGVmZmVjdGl2ZWx5IHVzZWQgd2l0aCB2YXJpbnQgZW5jb2RpbmcuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG4gU2lnbmVkIDMyYml0IGludGVnZXJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBVbnNpZ25lZCB6aWd6YWcgZW5jb2RlZCAzMmJpdCBpbnRlZ2VyXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXIuemlnWmFnRW5jb2RlMzIgPSBmdW5jdGlvbihuKSB7XG4gICAgICAgIHJldHVybiAoKChuIHw9IDApIDw8IDEpIF4gKG4gPj4gMzEpKSA+Pj4gMDsgLy8gcmVmOiBzcmMvZ29vZ2xlL3Byb3RvYnVmL3dpcmVfZm9ybWF0X2xpdGUuaFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZWNvZGVzIGEgemlnemFnIGVuY29kZWQgc2lnbmVkIDMyYml0IGludGVnZXIuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG4gVW5zaWduZWQgemlnemFnIGVuY29kZWQgMzJiaXQgaW50ZWdlclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IFNpZ25lZCAzMmJpdCBpbnRlZ2VyXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXIuemlnWmFnRGVjb2RlMzIgPSBmdW5jdGlvbihuKSB7XG4gICAgICAgIHJldHVybiAoKG4gPj4+IDEpIF4gLShuICYgMSkpIHwgMDsgLy8gLy8gcmVmOiBzcmMvZ29vZ2xlL3Byb3RvYnVmL3dpcmVfZm9ybWF0X2xpdGUuaFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSAzMmJpdCBiYXNlIDEyOCB2YXJpYWJsZS1sZW5ndGggaW50ZWdlci5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVmFsdWUgdG8gd3JpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcj19IG9mZnNldCBPZmZzZXQgdG8gd3JpdGUgdG8uIFdpbGwgdXNlIGFuZCBpbmNyZWFzZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IHRoZSBudW1iZXIgb2YgYnl0ZXNcbiAgICAgKiAgd3JpdHRlbiBpZiBvbWl0dGVkLlxuICAgICAqIEByZXR1cm5zIHshQnl0ZUJ1ZmZlcnxudW1iZXJ9IHRoaXMgaWYgYG9mZnNldGAgaXMgb21pdHRlZCwgZWxzZSB0aGUgYWN0dWFsIG51bWJlciBvZiBieXRlcyB3cml0dGVuXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUud3JpdGVWYXJpbnQzMiA9IGZ1bmN0aW9uKHZhbHVlLCBvZmZzZXQpIHtcbiAgICAgICAgdmFyIHJlbGF0aXZlID0gdHlwZW9mIG9mZnNldCA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIGlmIChyZWxhdGl2ZSkgb2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICAgIGlmICghdGhpcy5ub0Fzc2VydCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicgfHwgdmFsdWUgJSAxICE9PSAwKVxuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgdmFsdWU6IFwiK3ZhbHVlK1wiIChub3QgYW4gaW50ZWdlcilcIik7XG4gICAgICAgICAgICB2YWx1ZSB8PSAwO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvZmZzZXQgIT09ICdudW1iZXInIHx8IG9mZnNldCAlIDEgIT09IDApXG4gICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IFwiK29mZnNldCtcIiAobm90IGFuIGludGVnZXIpXCIpO1xuICAgICAgICAgICAgb2Zmc2V0ID4+Pj0gMDtcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCArIDAgPiB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKVxuICAgICAgICAgICAgICAgIHRocm93IFJhbmdlRXJyb3IoXCJJbGxlZ2FsIG9mZnNldDogMCA8PSBcIitvZmZzZXQrXCIgKCtcIiswK1wiKSA8PSBcIit0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2l6ZSA9IEJ5dGVCdWZmZXIuY2FsY3VsYXRlVmFyaW50MzIodmFsdWUpLFxuICAgICAgICAgICAgYjtcbiAgICAgICAgb2Zmc2V0ICs9IHNpemU7XG4gICAgICAgIHZhciBjYXBhY2l0eTEwID0gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aDtcbiAgICAgICAgaWYgKG9mZnNldCA+IGNhcGFjaXR5MTApXG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSgoY2FwYWNpdHkxMCAqPSAyKSA+IG9mZnNldCA/IGNhcGFjaXR5MTAgOiBvZmZzZXQpO1xuICAgICAgICBvZmZzZXQgLT0gc2l6ZTtcbiAgICAgICAgdmFsdWUgPj4+PSAwO1xuICAgICAgICB3aGlsZSAodmFsdWUgPj0gMHg4MCkge1xuICAgICAgICAgICAgYiA9ICh2YWx1ZSAmIDB4N2YpIHwgMHg4MDtcbiAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQrK10gPSBiO1xuICAgICAgICAgICAgdmFsdWUgPj4+PSA3O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlld1tvZmZzZXQrK10gPSB2YWx1ZTtcbiAgICAgICAgaWYgKHJlbGF0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaXplO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSB6aWctemFnIGVuY29kZWQgKHNpZ25lZCkgMzJiaXQgYmFzZSAxMjggdmFyaWFibGUtbGVuZ3RoIGludGVnZXIuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFZhbHVlIHRvIHdyaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXI9fSBvZmZzZXQgT2Zmc2V0IHRvIHdyaXRlIHRvLiBXaWxsIHVzZSBhbmQgaW5jcmVhc2Uge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBieSB0aGUgbnVtYmVyIG9mIGJ5dGVzXG4gICAgICogIHdyaXR0ZW4gaWYgb21pdHRlZC5cbiAgICAgKiBAcmV0dXJucyB7IUJ5dGVCdWZmZXJ8bnVtYmVyfSB0aGlzIGlmIGBvZmZzZXRgIGlzIG9taXR0ZWQsIGVsc2UgdGhlIGFjdHVhbCBudW1iZXIgb2YgYnl0ZXMgd3JpdHRlblxuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLndyaXRlVmFyaW50MzJaaWdaYWcgPSBmdW5jdGlvbih2YWx1ZSwgb2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlVmFyaW50MzIoQnl0ZUJ1ZmZlci56aWdaYWdFbmNvZGUzMih2YWx1ZSksIG9mZnNldCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlYWRzIGEgMzJiaXQgYmFzZSAxMjggdmFyaWFibGUtbGVuZ3RoIGludGVnZXIuXG4gICAgICogQHBhcmFtIHtudW1iZXI9fSBvZmZzZXQgT2Zmc2V0IHRvIHJlYWQgZnJvbS4gV2lsbCB1c2UgYW5kIGluY3JlYXNlIHtAbGluayBCeXRlQnVmZmVyI29mZnNldH0gYnkgdGhlIG51bWJlciBvZiBieXRlc1xuICAgICAqICB3cml0dGVuIGlmIG9taXR0ZWQuXG4gICAgICogQHJldHVybnMge251bWJlcnwhe3ZhbHVlOiBudW1iZXIsIGxlbmd0aDogbnVtYmVyfX0gVGhlIHZhbHVlIHJlYWQgaWYgb2Zmc2V0IGlzIG9taXR0ZWQsIGVsc2UgdGhlIHZhbHVlIHJlYWRcbiAgICAgKiAgYW5kIHRoZSBhY3R1YWwgbnVtYmVyIG9mIGJ5dGVzIHJlYWQuXG4gICAgICogQHRocm93cyB7RXJyb3J9IElmIGl0J3Mgbm90IGEgdmFsaWQgdmFyaW50LiBIYXMgYSBwcm9wZXJ0eSBgdHJ1bmNhdGVkID0gdHJ1ZWAgaWYgdGhlcmUgaXMgbm90IGVub3VnaCBkYXRhIGF2YWlsYWJsZVxuICAgICAqICB0byBmdWxseSBkZWNvZGUgdGhlIHZhcmludC5cbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS5yZWFkVmFyaW50MzIgPSBmdW5jdGlvbihvZmZzZXQpIHtcbiAgICAgICAgdmFyIHJlbGF0aXZlID0gdHlwZW9mIG9mZnNldCA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIGlmIChyZWxhdGl2ZSkgb2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICAgIGlmICghdGhpcy5ub0Fzc2VydCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvZmZzZXQgIT09ICdudW1iZXInIHx8IG9mZnNldCAlIDEgIT09IDApXG4gICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IFwiK29mZnNldCtcIiAobm90IGFuIGludGVnZXIpXCIpO1xuICAgICAgICAgICAgb2Zmc2V0ID4+Pj0gMDtcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCArIDEgPiB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKVxuICAgICAgICAgICAgICAgIHRocm93IFJhbmdlRXJyb3IoXCJJbGxlZ2FsIG9mZnNldDogMCA8PSBcIitvZmZzZXQrXCIgKCtcIisxK1wiKSA8PSBcIit0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYyA9IDAsXG4gICAgICAgICAgICB2YWx1ZSA9IDAgPj4+IDAsXG4gICAgICAgICAgICBiO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm9Bc3NlcnQgJiYgb2Zmc2V0ID4gdGhpcy5saW1pdCkge1xuICAgICAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcIlRydW5jYXRlZFwiKTtcbiAgICAgICAgICAgICAgICBlcnJbJ3RydW5jYXRlZCddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiID0gdGhpcy52aWV3W29mZnNldCsrXTtcbiAgICAgICAgICAgIGlmIChjIDwgNSlcbiAgICAgICAgICAgICAgICB2YWx1ZSB8PSAoYiAmIDB4N2YpIDw8ICg3KmMpO1xuICAgICAgICAgICAgKytjO1xuICAgICAgICB9IHdoaWxlICgoYiAmIDB4ODApICE9PSAwKTtcbiAgICAgICAgdmFsdWUgfD0gMDtcbiAgICAgICAgaWYgKHJlbGF0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZSxcbiAgICAgICAgICAgIFwibGVuZ3RoXCI6IGNcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVhZHMgYSB6aWctemFnIGVuY29kZWQgKHNpZ25lZCkgMzJiaXQgYmFzZSAxMjggdmFyaWFibGUtbGVuZ3RoIGludGVnZXIuXG4gICAgICogQHBhcmFtIHtudW1iZXI9fSBvZmZzZXQgT2Zmc2V0IHRvIHJlYWQgZnJvbS4gV2lsbCB1c2UgYW5kIGluY3JlYXNlIHtAbGluayBCeXRlQnVmZmVyI29mZnNldH0gYnkgdGhlIG51bWJlciBvZiBieXRlc1xuICAgICAqICB3cml0dGVuIGlmIG9taXR0ZWQuXG4gICAgICogQHJldHVybnMge251bWJlcnwhe3ZhbHVlOiBudW1iZXIsIGxlbmd0aDogbnVtYmVyfX0gVGhlIHZhbHVlIHJlYWQgaWYgb2Zmc2V0IGlzIG9taXR0ZWQsIGVsc2UgdGhlIHZhbHVlIHJlYWRcbiAgICAgKiAgYW5kIHRoZSBhY3R1YWwgbnVtYmVyIG9mIGJ5dGVzIHJlYWQuXG4gICAgICogQHRocm93cyB7RXJyb3J9IElmIGl0J3Mgbm90IGEgdmFsaWQgdmFyaW50XG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUucmVhZFZhcmludDMyWmlnWmFnID0gZnVuY3Rpb24ob2Zmc2V0KSB7XG4gICAgICAgIHZhciB2YWwgPSB0aGlzLnJlYWRWYXJpbnQzMihvZmZzZXQpO1xuICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpXG4gICAgICAgICAgICB2YWxbXCJ2YWx1ZVwiXSA9IEJ5dGVCdWZmZXIuemlnWmFnRGVjb2RlMzIodmFsW1widmFsdWVcIl0pO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB2YWwgPSBCeXRlQnVmZmVyLnppZ1phZ0RlY29kZTMyKHZhbCk7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfTtcblxuICAgIC8vIHR5cGVzL3ZhcmludHMvdmFyaW50NjRcblxuICAgIGlmIChMb25nKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1heGltdW0gbnVtYmVyIG9mIGJ5dGVzIHJlcXVpcmVkIHRvIHN0b3JlIGEgNjRiaXQgYmFzZSAxMjggdmFyaWFibGUtbGVuZ3RoIGludGVnZXIuXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICAgICAqIEBjb25zdFxuICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAqL1xuICAgICAgICBCeXRlQnVmZmVyLk1BWF9WQVJJTlQ2NF9CWVRFUyA9IDEwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxjdWxhdGVzIHRoZSBhY3R1YWwgbnVtYmVyIG9mIGJ5dGVzIHJlcXVpcmVkIHRvIHN0b3JlIGEgNjRiaXQgYmFzZSAxMjggdmFyaWFibGUtbGVuZ3RoIGludGVnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfCFMb25nfSB2YWx1ZSBWYWx1ZSB0byBlbmNvZGVcbiAgICAgICAgICogQHJldHVybnMge251bWJlcn0gTnVtYmVyIG9mIGJ5dGVzIHJlcXVpcmVkLiBDYXBwZWQgdG8ge0BsaW5rIEJ5dGVCdWZmZXIuTUFYX1ZBUklOVDY0X0JZVEVTfVxuICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAqL1xuICAgICAgICBCeXRlQnVmZmVyLmNhbGN1bGF0ZVZhcmludDY0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKVxuICAgICAgICAgICAgICAgIHZhbHVlID0gTG9uZy5mcm9tTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBMb25nLmZyb21TdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgLy8gcmVmOiBzcmMvZ29vZ2xlL3Byb3RvYnVmL2lvL2NvZGVkX3N0cmVhbS5jY1xuICAgICAgICAgICAgdmFyIHBhcnQwID0gdmFsdWUudG9JbnQoKSA+Pj4gMCxcbiAgICAgICAgICAgICAgICBwYXJ0MSA9IHZhbHVlLnNoaWZ0UmlnaHRVbnNpZ25lZCgyOCkudG9JbnQoKSA+Pj4gMCxcbiAgICAgICAgICAgICAgICBwYXJ0MiA9IHZhbHVlLnNoaWZ0UmlnaHRVbnNpZ25lZCg1NikudG9JbnQoKSA+Pj4gMDtcbiAgICAgICAgICAgIGlmIChwYXJ0MiA9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnQxID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnQwIDwgMSA8PCAxNClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJ0MCA8IDEgPDwgNyA/IDEgOiAyO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFydDAgPCAxIDw8IDIxID8gMyA6IDQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnQxIDwgMSA8PCAxNClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJ0MSA8IDEgPDwgNyA/IDUgOiA2O1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFydDEgPCAxIDw8IDIxID8gNyA6IDg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnQyIDwgMSA8PCA3ID8gOSA6IDEwO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBaaWd6YWcgZW5jb2RlcyBhIHNpZ25lZCA2NGJpdCBpbnRlZ2VyIHNvIHRoYXQgaXQgY2FuIGJlIGVmZmVjdGl2ZWx5IHVzZWQgd2l0aCB2YXJpbnQgZW5jb2RpbmcuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfCFMb25nfSB2YWx1ZSBTaWduZWQgbG9uZ1xuICAgICAgICAgKiBAcmV0dXJucyB7IUxvbmd9IFVuc2lnbmVkIHppZ3phZyBlbmNvZGVkIGxvbmdcbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgQnl0ZUJ1ZmZlci56aWdaYWdFbmNvZGU2NCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJylcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IExvbmcuZnJvbU51bWJlcih2YWx1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IExvbmcuZnJvbVN0cmluZyh2YWx1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUudW5zaWduZWQgIT09IGZhbHNlKSB2YWx1ZSA9IHZhbHVlLnRvU2lnbmVkKCk7XG4gICAgICAgICAgICAvLyByZWY6IHNyYy9nb29nbGUvcHJvdG9idWYvd2lyZV9mb3JtYXRfbGl0ZS5oXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuc2hpZnRMZWZ0KDEpLnhvcih2YWx1ZS5zaGlmdFJpZ2h0KDYzKSkudG9VbnNpZ25lZCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWNvZGVzIGEgemlnemFnIGVuY29kZWQgc2lnbmVkIDY0Yml0IGludGVnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IUxvbmd8bnVtYmVyfSB2YWx1ZSBVbnNpZ25lZCB6aWd6YWcgZW5jb2RlZCBsb25nIG9yIEphdmFTY3JpcHQgbnVtYmVyXG4gICAgICAgICAqIEByZXR1cm5zIHshTG9uZ30gU2lnbmVkIGxvbmdcbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgQnl0ZUJ1ZmZlci56aWdaYWdEZWNvZGU2NCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJylcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IExvbmcuZnJvbU51bWJlcih2YWx1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IExvbmcuZnJvbVN0cmluZyh2YWx1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUudW5zaWduZWQgIT09IGZhbHNlKSB2YWx1ZSA9IHZhbHVlLnRvU2lnbmVkKCk7XG4gICAgICAgICAgICAvLyByZWY6IHNyYy9nb29nbGUvcHJvdG9idWYvd2lyZV9mb3JtYXRfbGl0ZS5oXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuc2hpZnRSaWdodFVuc2lnbmVkKDEpLnhvcih2YWx1ZS5hbmQoTG9uZy5PTkUpLnRvU2lnbmVkKCkubmVnYXRlKCkpLnRvU2lnbmVkKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdyaXRlcyBhIDY0Yml0IGJhc2UgMTI4IHZhcmlhYmxlLWxlbmd0aCBpbnRlZ2VyLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcnxMb25nfSB2YWx1ZSBWYWx1ZSB0byB3cml0ZVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcj19IG9mZnNldCBPZmZzZXQgdG8gd3JpdGUgdG8uIFdpbGwgdXNlIGFuZCBpbmNyZWFzZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IHRoZSBudW1iZXIgb2YgYnl0ZXNcbiAgICAgICAgICogIHdyaXR0ZW4gaWYgb21pdHRlZC5cbiAgICAgICAgICogQHJldHVybnMgeyFCeXRlQnVmZmVyfG51bWJlcn0gYHRoaXNgIGlmIG9mZnNldCBpcyBvbWl0dGVkLCBlbHNlIHRoZSBhY3R1YWwgbnVtYmVyIG9mIGJ5dGVzIHdyaXR0ZW4uXG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUud3JpdGVWYXJpbnQ2NCA9IGZ1bmN0aW9uKHZhbHVlLCBvZmZzZXQpIHtcbiAgICAgICAgICAgIHZhciByZWxhdGl2ZSA9IHR5cGVvZiBvZmZzZXQgPT09ICd1bmRlZmluZWQnO1xuICAgICAgICAgICAgaWYgKHJlbGF0aXZlKSBvZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICAgICAgICAgIGlmICghdGhpcy5ub0Fzc2VydCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IExvbmcuZnJvbU51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBMb25nLmZyb21TdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCEodmFsdWUgJiYgdmFsdWUgaW5zdGFuY2VvZiBMb25nKSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCB2YWx1ZTogXCIrdmFsdWUrXCIgKG5vdCBhbiBpbnRlZ2VyIG9yIExvbmcpXCIpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ICE9PSAnbnVtYmVyJyB8fCBvZmZzZXQgJSAxICE9PSAwKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbGxlZ2FsIG9mZnNldDogXCIrb2Zmc2V0K1wiIChub3QgYW4gaW50ZWdlcilcIik7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID4+Pj0gMDtcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyAwID4gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcihcIklsbGVnYWwgb2Zmc2V0OiAwIDw9IFwiK29mZnNldCtcIiAoK1wiKzArXCIpIDw9IFwiK3RoaXMuYnVmZmVyLmJ5dGVMZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBMb25nLmZyb21OdW1iZXIodmFsdWUsIGZhbHNlKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBMb25nLmZyb21TdHJpbmcodmFsdWUsIGZhbHNlKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlLnVuc2lnbmVkICE9PSBmYWxzZSkgdmFsdWUgPSB2YWx1ZS50b1NpZ25lZCgpO1xuICAgICAgICAgICAgdmFyIHNpemUgPSBCeXRlQnVmZmVyLmNhbGN1bGF0ZVZhcmludDY0KHZhbHVlKSxcbiAgICAgICAgICAgICAgICBwYXJ0MCA9IHZhbHVlLnRvSW50KCkgPj4+IDAsXG4gICAgICAgICAgICAgICAgcGFydDEgPSB2YWx1ZS5zaGlmdFJpZ2h0VW5zaWduZWQoMjgpLnRvSW50KCkgPj4+IDAsXG4gICAgICAgICAgICAgICAgcGFydDIgPSB2YWx1ZS5zaGlmdFJpZ2h0VW5zaWduZWQoNTYpLnRvSW50KCkgPj4+IDA7XG4gICAgICAgICAgICBvZmZzZXQgKz0gc2l6ZTtcbiAgICAgICAgICAgIHZhciBjYXBhY2l0eTExID0gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aDtcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPiBjYXBhY2l0eTExKVxuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplKChjYXBhY2l0eTExICo9IDIpID4gb2Zmc2V0ID8gY2FwYWNpdHkxMSA6IG9mZnNldCk7XG4gICAgICAgICAgICBvZmZzZXQgLT0gc2l6ZTtcbiAgICAgICAgICAgIHN3aXRjaCAoc2l6ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTA6IHRoaXMudmlld1tvZmZzZXQrOV0gPSAocGFydDIgPj4+ICA3KSAmIDB4MDE7XG4gICAgICAgICAgICAgICAgY2FzZSA5IDogdGhpcy52aWV3W29mZnNldCs4XSA9IHNpemUgIT09IDkgPyAocGFydDIgICAgICAgKSB8IDB4ODAgOiAocGFydDIgICAgICAgKSAmIDB4N0Y7XG4gICAgICAgICAgICAgICAgY2FzZSA4IDogdGhpcy52aWV3W29mZnNldCs3XSA9IHNpemUgIT09IDggPyAocGFydDEgPj4+IDIxKSB8IDB4ODAgOiAocGFydDEgPj4+IDIxKSAmIDB4N0Y7XG4gICAgICAgICAgICAgICAgY2FzZSA3IDogdGhpcy52aWV3W29mZnNldCs2XSA9IHNpemUgIT09IDcgPyAocGFydDEgPj4+IDE0KSB8IDB4ODAgOiAocGFydDEgPj4+IDE0KSAmIDB4N0Y7XG4gICAgICAgICAgICAgICAgY2FzZSA2IDogdGhpcy52aWV3W29mZnNldCs1XSA9IHNpemUgIT09IDYgPyAocGFydDEgPj4+ICA3KSB8IDB4ODAgOiAocGFydDEgPj4+ICA3KSAmIDB4N0Y7XG4gICAgICAgICAgICAgICAgY2FzZSA1IDogdGhpcy52aWV3W29mZnNldCs0XSA9IHNpemUgIT09IDUgPyAocGFydDEgICAgICAgKSB8IDB4ODAgOiAocGFydDEgICAgICAgKSAmIDB4N0Y7XG4gICAgICAgICAgICAgICAgY2FzZSA0IDogdGhpcy52aWV3W29mZnNldCszXSA9IHNpemUgIT09IDQgPyAocGFydDAgPj4+IDIxKSB8IDB4ODAgOiAocGFydDAgPj4+IDIxKSAmIDB4N0Y7XG4gICAgICAgICAgICAgICAgY2FzZSAzIDogdGhpcy52aWV3W29mZnNldCsyXSA9IHNpemUgIT09IDMgPyAocGFydDAgPj4+IDE0KSB8IDB4ODAgOiAocGFydDAgPj4+IDE0KSAmIDB4N0Y7XG4gICAgICAgICAgICAgICAgY2FzZSAyIDogdGhpcy52aWV3W29mZnNldCsxXSA9IHNpemUgIT09IDIgPyAocGFydDAgPj4+ICA3KSB8IDB4ODAgOiAocGFydDAgPj4+ICA3KSAmIDB4N0Y7XG4gICAgICAgICAgICAgICAgY2FzZSAxIDogdGhpcy52aWV3W29mZnNldCAgXSA9IHNpemUgIT09IDEgPyAocGFydDAgICAgICAgKSB8IDB4ODAgOiAocGFydDAgICAgICAgKSAmIDB4N0Y7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVsYXRpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9mZnNldCArPSBzaXplO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogV3JpdGVzIGEgemlnLXphZyBlbmNvZGVkIDY0Yml0IGJhc2UgMTI4IHZhcmlhYmxlLWxlbmd0aCBpbnRlZ2VyLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcnxMb25nfSB2YWx1ZSBWYWx1ZSB0byB3cml0ZVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcj19IG9mZnNldCBPZmZzZXQgdG8gd3JpdGUgdG8uIFdpbGwgdXNlIGFuZCBpbmNyZWFzZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IHRoZSBudW1iZXIgb2YgYnl0ZXNcbiAgICAgICAgICogIHdyaXR0ZW4gaWYgb21pdHRlZC5cbiAgICAgICAgICogQHJldHVybnMgeyFCeXRlQnVmZmVyfG51bWJlcn0gYHRoaXNgIGlmIG9mZnNldCBpcyBvbWl0dGVkLCBlbHNlIHRoZSBhY3R1YWwgbnVtYmVyIG9mIGJ5dGVzIHdyaXR0ZW4uXG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUud3JpdGVWYXJpbnQ2NFppZ1phZyA9IGZ1bmN0aW9uKHZhbHVlLCBvZmZzZXQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndyaXRlVmFyaW50NjQoQnl0ZUJ1ZmZlci56aWdaYWdFbmNvZGU2NCh2YWx1ZSksIG9mZnNldCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlYWRzIGEgNjRiaXQgYmFzZSAxMjggdmFyaWFibGUtbGVuZ3RoIGludGVnZXIuIFJlcXVpcmVzIExvbmcuanMuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byByZWFkIGZyb20uIFdpbGwgdXNlIGFuZCBpbmNyZWFzZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IHRoZSBudW1iZXIgb2YgYnl0ZXNcbiAgICAgICAgICogIHJlYWQgaWYgb21pdHRlZC5cbiAgICAgICAgICogQHJldHVybnMgeyFMb25nfCF7dmFsdWU6IExvbmcsIGxlbmd0aDogbnVtYmVyfX0gVGhlIHZhbHVlIHJlYWQgaWYgb2Zmc2V0IGlzIG9taXR0ZWQsIGVsc2UgdGhlIHZhbHVlIHJlYWQgYW5kXG4gICAgICAgICAqICB0aGUgYWN0dWFsIG51bWJlciBvZiBieXRlcyByZWFkLlxuICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgaXQncyBub3QgYSB2YWxpZCB2YXJpbnRcbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS5yZWFkVmFyaW50NjQgPSBmdW5jdGlvbihvZmZzZXQpIHtcbiAgICAgICAgICAgIHZhciByZWxhdGl2ZSA9IHR5cGVvZiBvZmZzZXQgPT09ICd1bmRlZmluZWQnO1xuICAgICAgICAgICAgaWYgKHJlbGF0aXZlKSBvZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICAgICAgICAgIGlmICghdGhpcy5ub0Fzc2VydCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ICE9PSAnbnVtYmVyJyB8fCBvZmZzZXQgJSAxICE9PSAwKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbGxlZ2FsIG9mZnNldDogXCIrb2Zmc2V0K1wiIChub3QgYW4gaW50ZWdlcilcIik7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID4+Pj0gMDtcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyAxID4gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcihcIklsbGVnYWwgb2Zmc2V0OiAwIDw9IFwiK29mZnNldCtcIiAoK1wiKzErXCIpIDw9IFwiK3RoaXMuYnVmZmVyLmJ5dGVMZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmVmOiBzcmMvZ29vZ2xlL3Byb3RvYnVmL2lvL2NvZGVkX3N0cmVhbS5jY1xuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gb2Zmc2V0LFxuICAgICAgICAgICAgICAgIHBhcnQwID0gMCxcbiAgICAgICAgICAgICAgICBwYXJ0MSA9IDAsXG4gICAgICAgICAgICAgICAgcGFydDIgPSAwLFxuICAgICAgICAgICAgICAgIGIgID0gMDtcbiAgICAgICAgICAgIGIgPSB0aGlzLnZpZXdbb2Zmc2V0KytdOyBwYXJ0MCAgPSAoYiAmIDB4N0YpICAgICAgOyBpZiAoIGIgJiAweDgwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICBiID0gdGhpcy52aWV3W29mZnNldCsrXTsgcGFydDAgfD0gKGIgJiAweDdGKSA8PCAgNzsgaWYgKChiICYgMHg4MCkgfHwgKHRoaXMubm9Bc3NlcnQgJiYgdHlwZW9mIGIgPT09ICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgICAgYiA9IHRoaXMudmlld1tvZmZzZXQrK107IHBhcnQwIHw9IChiICYgMHg3RikgPDwgMTQ7IGlmICgoYiAmIDB4ODApIHx8ICh0aGlzLm5vQXNzZXJ0ICYmIHR5cGVvZiBiID09PSAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgIGIgPSB0aGlzLnZpZXdbb2Zmc2V0KytdOyBwYXJ0MCB8PSAoYiAmIDB4N0YpIDw8IDIxOyBpZiAoKGIgJiAweDgwKSB8fCAodGhpcy5ub0Fzc2VydCAmJiB0eXBlb2YgYiA9PT0gJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICBiID0gdGhpcy52aWV3W29mZnNldCsrXTsgcGFydDEgID0gKGIgJiAweDdGKSAgICAgIDsgaWYgKChiICYgMHg4MCkgfHwgKHRoaXMubm9Bc3NlcnQgJiYgdHlwZW9mIGIgPT09ICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgICAgYiA9IHRoaXMudmlld1tvZmZzZXQrK107IHBhcnQxIHw9IChiICYgMHg3RikgPDwgIDc7IGlmICgoYiAmIDB4ODApIHx8ICh0aGlzLm5vQXNzZXJ0ICYmIHR5cGVvZiBiID09PSAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgIGIgPSB0aGlzLnZpZXdbb2Zmc2V0KytdOyBwYXJ0MSB8PSAoYiAmIDB4N0YpIDw8IDE0OyBpZiAoKGIgJiAweDgwKSB8fCAodGhpcy5ub0Fzc2VydCAmJiB0eXBlb2YgYiA9PT0gJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICBiID0gdGhpcy52aWV3W29mZnNldCsrXTsgcGFydDEgfD0gKGIgJiAweDdGKSA8PCAyMTsgaWYgKChiICYgMHg4MCkgfHwgKHRoaXMubm9Bc3NlcnQgJiYgdHlwZW9mIGIgPT09ICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgICAgYiA9IHRoaXMudmlld1tvZmZzZXQrK107IHBhcnQyICA9IChiICYgMHg3RikgICAgICA7IGlmICgoYiAmIDB4ODApIHx8ICh0aGlzLm5vQXNzZXJ0ICYmIHR5cGVvZiBiID09PSAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgIGIgPSB0aGlzLnZpZXdbb2Zmc2V0KytdOyBwYXJ0MiB8PSAoYiAmIDB4N0YpIDw8ICA3OyBpZiAoKGIgJiAweDgwKSB8fCAodGhpcy5ub0Fzc2VydCAmJiB0eXBlb2YgYiA9PT0gJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkJ1ZmZlciBvdmVycnVuXCIpOyB9fX19fX19fX19XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBMb25nLmZyb21CaXRzKHBhcnQwIHwgKHBhcnQxIDw8IDI4KSwgKHBhcnQxID4+PiA0KSB8IChwYXJ0MikgPDwgMjQsIGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChyZWxhdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b051bWJlcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgJ2xlbmd0aCc6IG9mZnNldC1zdGFydFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlYWRzIGEgemlnLXphZyBlbmNvZGVkIDY0Yml0IGJhc2UgMTI4IHZhcmlhYmxlLWxlbmd0aCBpbnRlZ2VyLiBSZXF1aXJlcyBMb25nLmpzLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcj19IG9mZnNldCBPZmZzZXQgdG8gcmVhZCBmcm9tLiBXaWxsIHVzZSBhbmQgaW5jcmVhc2Uge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBieSB0aGUgbnVtYmVyIG9mIGJ5dGVzXG4gICAgICAgICAqICByZWFkIGlmIG9taXR0ZWQuXG4gICAgICAgICAqIEByZXR1cm5zIHshTG9uZ3whe3ZhbHVlOiBMb25nLCBsZW5ndGg6IG51bWJlcn19IFRoZSB2YWx1ZSByZWFkIGlmIG9mZnNldCBpcyBvbWl0dGVkLCBlbHNlIHRoZSB2YWx1ZSByZWFkIGFuZFxuICAgICAgICAgKiAgdGhlIGFjdHVhbCBudW1iZXIgb2YgYnl0ZXMgcmVhZC5cbiAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIGl0J3Mgbm90IGEgdmFsaWQgdmFyaW50XG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUucmVhZFZhcmludDY0WmlnWmFnID0gZnVuY3Rpb24ob2Zmc2V0KSB7XG4gICAgICAgICAgICB2YXIgdmFsID0gdGhpcy5yZWFkVmFyaW50NjQob2Zmc2V0KTtcbiAgICAgICAgICAgIGlmICh2YWwgJiYgdmFsWyd2YWx1ZSddIGluc3RhbmNlb2YgTG9uZylcbiAgICAgICAgICAgICAgICB2YWxbXCJ2YWx1ZVwiXSA9IEJ5dGVCdWZmZXIuemlnWmFnRGVjb2RlNjQodmFsW1widmFsdWVcIl0pO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHZhbCA9IEJ5dGVCdWZmZXIuemlnWmFnRGVjb2RlNjQodmFsKTtcbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH07XG5cbiAgICB9IC8vIExvbmdcblxuXG4gICAgLy8gdHlwZXMvc3RyaW5ncy9jc3RyaW5nXG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSBOVUxMLXRlcm1pbmF0ZWQgVVRGOCBlbmNvZGVkIHN0cmluZy4gRm9yIHRoaXMgdG8gd29yayB0aGUgc3BlY2lmaWVkIHN0cmluZyBtdXN0IG5vdCBjb250YWluIGFueSBOVUxMXG4gICAgICogIGNoYXJhY3RlcnMgaXRzZWxmLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgU3RyaW5nIHRvIHdyaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXI9fSBvZmZzZXQgT2Zmc2V0IHRvIHdyaXRlIHRvLiBXaWxsIHVzZSBhbmQgaW5jcmVhc2Uge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBieSB0aGUgbnVtYmVyIG9mIGJ5dGVzXG4gICAgICogIGNvbnRhaW5lZCBpbiBgc3RyYCArIDEgaWYgb21pdHRlZC5cbiAgICAgKiBAcmV0dXJucyB7IUJ5dGVCdWZmZXJ8bnVtYmVyfSB0aGlzIGlmIG9mZnNldCBpcyBvbWl0dGVkLCBlbHNlIHRoZSBhY3R1YWwgbnVtYmVyIG9mIGJ5dGVzIHdyaXR0ZW5cbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS53cml0ZUNTdHJpbmcgPSBmdW5jdGlvbihzdHIsIG9mZnNldCkge1xuICAgICAgICB2YXIgcmVsYXRpdmUgPSB0eXBlb2Ygb2Zmc2V0ID09PSAndW5kZWZpbmVkJztcbiAgICAgICAgaWYgKHJlbGF0aXZlKSBvZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBrID0gc3RyLmxlbmd0aDtcbiAgICAgICAgaWYgKCF0aGlzLm5vQXNzZXJ0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCBzdHI6IE5vdCBhIHN0cmluZ1wiKTtcbiAgICAgICAgICAgIGZvciAoaT0wOyBpPGs7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmIChzdHIuY2hhckNvZGVBdChpKSA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcihcIklsbGVnYWwgc3RyOiBDb250YWlucyBOVUxMLWNoYXJhY3RlcnNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9mZnNldCAhPT0gJ251bWJlcicgfHwgb2Zmc2V0ICUgMSAhPT0gMClcbiAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbGxlZ2FsIG9mZnNldDogXCIrb2Zmc2V0K1wiIChub3QgYW4gaW50ZWdlcilcIik7XG4gICAgICAgICAgICBvZmZzZXQgPj4+PSAwO1xuICAgICAgICAgICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ICsgMCA+IHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGgpXG4gICAgICAgICAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcihcIklsbGVnYWwgb2Zmc2V0OiAwIDw9IFwiK29mZnNldCtcIiAoK1wiKzArXCIpIDw9IFwiK3RoaXMuYnVmZmVyLmJ5dGVMZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVURjggc3RyaW5ncyBkbyBub3QgY29udGFpbiB6ZXJvIGJ5dGVzIGluIGJldHdlZW4gZXhjZXB0IGZvciB0aGUgemVybyBjaGFyYWN0ZXIsIHNvOlxuICAgICAgICBrID0gdXRmeC5jYWxjdWxhdGVVVEYxNmFzVVRGOChzdHJpbmdTb3VyY2Uoc3RyKSlbMV07XG4gICAgICAgIG9mZnNldCArPSBrKzE7XG4gICAgICAgIHZhciBjYXBhY2l0eTEyID0gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aDtcbiAgICAgICAgaWYgKG9mZnNldCA+IGNhcGFjaXR5MTIpXG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSgoY2FwYWNpdHkxMiAqPSAyKSA+IG9mZnNldCA/IGNhcGFjaXR5MTIgOiBvZmZzZXQpO1xuICAgICAgICBvZmZzZXQgLT0gaysxO1xuICAgICAgICB1dGZ4LmVuY29kZVVURjE2dG9VVEY4KHN0cmluZ1NvdXJjZShzdHIpLCBmdW5jdGlvbihiKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdbb2Zmc2V0KytdID0gYjtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy52aWV3W29mZnNldCsrXSA9IDA7XG4gICAgICAgIGlmIChyZWxhdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVhZHMgYSBOVUxMLXRlcm1pbmF0ZWQgVVRGOCBlbmNvZGVkIHN0cmluZy4gRm9yIHRoaXMgdG8gd29yayB0aGUgc3RyaW5nIHJlYWQgbXVzdCBub3QgY29udGFpbiBhbnkgTlVMTCBjaGFyYWN0ZXJzXG4gICAgICogIGl0c2VsZi5cbiAgICAgKiBAcGFyYW0ge251bWJlcj19IG9mZnNldCBPZmZzZXQgdG8gcmVhZCBmcm9tLiBXaWxsIHVzZSBhbmQgaW5jcmVhc2Uge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBieSB0aGUgbnVtYmVyIG9mIGJ5dGVzXG4gICAgICogIHJlYWQgaWYgb21pdHRlZC5cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfCF7c3RyaW5nOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyfX0gVGhlIHN0cmluZyByZWFkIGlmIG9mZnNldCBpcyBvbWl0dGVkLCBlbHNlIHRoZSBzdHJpbmdcbiAgICAgKiAgcmVhZCBhbmQgdGhlIGFjdHVhbCBudW1iZXIgb2YgYnl0ZXMgcmVhZC5cbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS5yZWFkQ1N0cmluZyA9IGZ1bmN0aW9uKG9mZnNldCkge1xuICAgICAgICB2YXIgcmVsYXRpdmUgPSB0eXBlb2Ygb2Zmc2V0ID09PSAndW5kZWZpbmVkJztcbiAgICAgICAgaWYgKHJlbGF0aXZlKSBvZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICAgICAgaWYgKCF0aGlzLm5vQXNzZXJ0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9mZnNldCAhPT0gJ251bWJlcicgfHwgb2Zmc2V0ICUgMSAhPT0gMClcbiAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbGxlZ2FsIG9mZnNldDogXCIrb2Zmc2V0K1wiIChub3QgYW4gaW50ZWdlcilcIik7XG4gICAgICAgICAgICBvZmZzZXQgPj4+PSAwO1xuICAgICAgICAgICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ICsgMSA+IHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGgpXG4gICAgICAgICAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcihcIklsbGVnYWwgb2Zmc2V0OiAwIDw9IFwiK29mZnNldCtcIiAoK1wiKzErXCIpIDw9IFwiK3RoaXMuYnVmZmVyLmJ5dGVMZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdGFydCA9IG9mZnNldCxcbiAgICAgICAgICAgIHRlbXA7XG4gICAgICAgIC8vIFVURjggc3RyaW5ncyBkbyBub3QgY29udGFpbiB6ZXJvIGJ5dGVzIGluIGJldHdlZW4gZXhjZXB0IGZvciB0aGUgemVybyBjaGFyYWN0ZXIgaXRzZWxmLCBzbzpcbiAgICAgICAgdmFyIHNkLCBiID0gLTE7XG4gICAgICAgIHV0ZnguZGVjb2RlVVRGOHRvVVRGMTYoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoYiA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBpZiAob2Zmc2V0ID49IHRoaXMubGltaXQpXG4gICAgICAgICAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcihcIklsbGVnYWwgcmFuZ2U6IFRydW5jYXRlZCBkYXRhLCBcIitvZmZzZXQrXCIgPCBcIit0aGlzLmxpbWl0KTtcbiAgICAgICAgICAgIGIgPSB0aGlzLnZpZXdbb2Zmc2V0KytdO1xuICAgICAgICAgICAgcmV0dXJuIGIgPT09IDAgPyBudWxsIDogYjtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCBzZCA9IHN0cmluZ0Rlc3RpbmF0aW9uKCksIHRydWUpO1xuICAgICAgICBpZiAocmVsYXRpdmUpIHtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgcmV0dXJuIHNkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwic3RyaW5nXCI6IHNkKCksXG4gICAgICAgICAgICAgICAgXCJsZW5ndGhcIjogb2Zmc2V0IC0gc3RhcnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gdHlwZXMvc3RyaW5ncy9pc3RyaW5nXG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSBsZW5ndGggYXMgdWludDMyIHByZWZpeGVkIFVURjggZW5jb2RlZCBzdHJpbmcuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciBTdHJpbmcgdG8gd3JpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcj19IG9mZnNldCBPZmZzZXQgdG8gd3JpdGUgdG8uIFdpbGwgdXNlIGFuZCBpbmNyZWFzZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IHRoZSBudW1iZXIgb2YgYnl0ZXNcbiAgICAgKiAgd3JpdHRlbiBpZiBvbWl0dGVkLlxuICAgICAqIEByZXR1cm5zIHshQnl0ZUJ1ZmZlcnxudW1iZXJ9IGB0aGlzYCBpZiBgb2Zmc2V0YCBpcyBvbWl0dGVkLCBlbHNlIHRoZSBhY3R1YWwgbnVtYmVyIG9mIGJ5dGVzIHdyaXR0ZW5cbiAgICAgKiBAZXhwb3NlXG4gICAgICogQHNlZSBCeXRlQnVmZmVyI3dyaXRlVmFyaW50MzJcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLndyaXRlSVN0cmluZyA9IGZ1bmN0aW9uKHN0ciwgb2Zmc2V0KSB7XG4gICAgICAgIHZhciByZWxhdGl2ZSA9IHR5cGVvZiBvZmZzZXQgPT09ICd1bmRlZmluZWQnO1xuICAgICAgICBpZiAocmVsYXRpdmUpIG9mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgICAgICBpZiAoIXRoaXMubm9Bc3NlcnQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbGxlZ2FsIHN0cjogTm90IGEgc3RyaW5nXCIpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvZmZzZXQgIT09ICdudW1iZXInIHx8IG9mZnNldCAlIDEgIT09IDApXG4gICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IFwiK29mZnNldCtcIiAobm90IGFuIGludGVnZXIpXCIpO1xuICAgICAgICAgICAgb2Zmc2V0ID4+Pj0gMDtcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCArIDAgPiB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKVxuICAgICAgICAgICAgICAgIHRocm93IFJhbmdlRXJyb3IoXCJJbGxlZ2FsIG9mZnNldDogMCA8PSBcIitvZmZzZXQrXCIgKCtcIiswK1wiKSA8PSBcIit0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RhcnQgPSBvZmZzZXQsXG4gICAgICAgICAgICBrO1xuICAgICAgICBrID0gdXRmeC5jYWxjdWxhdGVVVEYxNmFzVVRGOChzdHJpbmdTb3VyY2Uoc3RyKSwgdGhpcy5ub0Fzc2VydClbMV07XG4gICAgICAgIG9mZnNldCArPSA0K2s7XG4gICAgICAgIHZhciBjYXBhY2l0eTEzID0gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aDtcbiAgICAgICAgaWYgKG9mZnNldCA+IGNhcGFjaXR5MTMpXG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSgoY2FwYWNpdHkxMyAqPSAyKSA+IG9mZnNldCA/IGNhcGFjaXR5MTMgOiBvZmZzZXQpO1xuICAgICAgICBvZmZzZXQgLT0gNCtrO1xuICAgICAgICBpZiAodGhpcy5saXR0bGVFbmRpYW4pIHtcbiAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQrM10gPSAoayA+Pj4gMjQpICYgMHhGRjtcbiAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQrMl0gPSAoayA+Pj4gMTYpICYgMHhGRjtcbiAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQrMV0gPSAoayA+Pj4gIDgpICYgMHhGRjtcbiAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQgIF0gPSAgayAgICAgICAgICYgMHhGRjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQgIF0gPSAoayA+Pj4gMjQpICYgMHhGRjtcbiAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQrMV0gPSAoayA+Pj4gMTYpICYgMHhGRjtcbiAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQrMl0gPSAoayA+Pj4gIDgpICYgMHhGRjtcbiAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQrM10gPSAgayAgICAgICAgICYgMHhGRjtcbiAgICAgICAgfVxuICAgICAgICBvZmZzZXQgKz0gNDtcbiAgICAgICAgdXRmeC5lbmNvZGVVVEYxNnRvVVRGOChzdHJpbmdTb3VyY2Uoc3RyKSwgZnVuY3Rpb24oYikge1xuICAgICAgICAgICAgdGhpcy52aWV3W29mZnNldCsrXSA9IGI7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIGlmIChvZmZzZXQgIT09IHN0YXJ0ICsgNCArIGspXG4gICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCByYW5nZTogVHJ1bmNhdGVkIGRhdGEsIFwiK29mZnNldCtcIiA9PSBcIisob2Zmc2V0KzQraykpO1xuICAgICAgICBpZiAocmVsYXRpdmUpIHtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9mZnNldCAtIHN0YXJ0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZWFkcyBhIGxlbmd0aCBhcyB1aW50MzIgcHJlZml4ZWQgVVRGOCBlbmNvZGVkIHN0cmluZy5cbiAgICAgKiBAcGFyYW0ge251bWJlcj19IG9mZnNldCBPZmZzZXQgdG8gcmVhZCBmcm9tLiBXaWxsIHVzZSBhbmQgaW5jcmVhc2Uge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBieSB0aGUgbnVtYmVyIG9mIGJ5dGVzXG4gICAgICogIHJlYWQgaWYgb21pdHRlZC5cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfCF7c3RyaW5nOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyfX0gVGhlIHN0cmluZyByZWFkIGlmIG9mZnNldCBpcyBvbWl0dGVkLCBlbHNlIHRoZSBzdHJpbmdcbiAgICAgKiAgcmVhZCBhbmQgdGhlIGFjdHVhbCBudW1iZXIgb2YgYnl0ZXMgcmVhZC5cbiAgICAgKiBAZXhwb3NlXG4gICAgICogQHNlZSBCeXRlQnVmZmVyI3JlYWRWYXJpbnQzMlxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUucmVhZElTdHJpbmcgPSBmdW5jdGlvbihvZmZzZXQpIHtcbiAgICAgICAgdmFyIHJlbGF0aXZlID0gdHlwZW9mIG9mZnNldCA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIGlmIChyZWxhdGl2ZSkgb2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICAgIGlmICghdGhpcy5ub0Fzc2VydCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvZmZzZXQgIT09ICdudW1iZXInIHx8IG9mZnNldCAlIDEgIT09IDApXG4gICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IFwiK29mZnNldCtcIiAobm90IGFuIGludGVnZXIpXCIpO1xuICAgICAgICAgICAgb2Zmc2V0ID4+Pj0gMDtcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCArIDQgPiB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKVxuICAgICAgICAgICAgICAgIHRocm93IFJhbmdlRXJyb3IoXCJJbGxlZ2FsIG9mZnNldDogMCA8PSBcIitvZmZzZXQrXCIgKCtcIis0K1wiKSA8PSBcIit0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RhcnQgPSBvZmZzZXQ7XG4gICAgICAgIHZhciBsZW4gPSB0aGlzLnJlYWRVaW50MzIob2Zmc2V0KTtcbiAgICAgICAgdmFyIHN0ciA9IHRoaXMucmVhZFVURjhTdHJpbmcobGVuLCBCeXRlQnVmZmVyLk1FVFJJQ1NfQllURVMsIG9mZnNldCArPSA0KTtcbiAgICAgICAgb2Zmc2V0ICs9IHN0clsnbGVuZ3RoJ107XG4gICAgICAgIGlmIChyZWxhdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgICAgICByZXR1cm4gc3RyWydzdHJpbmcnXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgJ3N0cmluZyc6IHN0clsnc3RyaW5nJ10sXG4gICAgICAgICAgICAgICAgJ2xlbmd0aCc6IG9mZnNldCAtIHN0YXJ0XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIHR5cGVzL3N0cmluZ3MvdXRmOHN0cmluZ1xuXG4gICAgLyoqXG4gICAgICogTWV0cmljcyByZXByZXNlbnRpbmcgbnVtYmVyIG9mIFVURjggY2hhcmFjdGVycy4gRXZhbHVhdGVzIHRvIGBjYC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBjb25zdFxuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyLk1FVFJJQ1NfQ0hBUlMgPSAnYyc7XG5cbiAgICAvKipcbiAgICAgKiBNZXRyaWNzIHJlcHJlc2VudGluZyBudW1iZXIgb2YgYnl0ZXMuIEV2YWx1YXRlcyB0byBgYmAuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAY29uc3RcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlci5NRVRSSUNTX0JZVEVTID0gJ2InO1xuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIGFuIFVURjggZW5jb2RlZCBzdHJpbmcuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciBTdHJpbmcgdG8gd3JpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcj19IG9mZnNldCBPZmZzZXQgdG8gd3JpdGUgdG8uIFdpbGwgdXNlIGFuZCBpbmNyZWFzZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGlmIG9taXR0ZWQuXG4gICAgICogQHJldHVybnMgeyFCeXRlQnVmZmVyfG51bWJlcn0gdGhpcyBpZiBvZmZzZXQgaXMgb21pdHRlZCwgZWxzZSB0aGUgYWN0dWFsIG51bWJlciBvZiBieXRlcyB3cml0dGVuLlxuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLndyaXRlVVRGOFN0cmluZyA9IGZ1bmN0aW9uKHN0ciwgb2Zmc2V0KSB7XG4gICAgICAgIHZhciByZWxhdGl2ZSA9IHR5cGVvZiBvZmZzZXQgPT09ICd1bmRlZmluZWQnO1xuICAgICAgICBpZiAocmVsYXRpdmUpIG9mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgICAgICBpZiAoIXRoaXMubm9Bc3NlcnQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ICE9PSAnbnVtYmVyJyB8fCBvZmZzZXQgJSAxICE9PSAwKVxuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgb2Zmc2V0OiBcIitvZmZzZXQrXCIgKG5vdCBhbiBpbnRlZ2VyKVwiKTtcbiAgICAgICAgICAgIG9mZnNldCA+Pj49IDA7XG4gICAgICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyAwID4gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IDAgPD0gXCIrb2Zmc2V0K1wiICgrXCIrMCtcIikgPD0gXCIrdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGs7XG4gICAgICAgIHZhciBzdGFydCA9IG9mZnNldDtcbiAgICAgICAgayA9IHV0ZnguY2FsY3VsYXRlVVRGMTZhc1VURjgoc3RyaW5nU291cmNlKHN0cikpWzFdO1xuICAgICAgICBvZmZzZXQgKz0gaztcbiAgICAgICAgdmFyIGNhcGFjaXR5MTQgPSB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoO1xuICAgICAgICBpZiAob2Zmc2V0ID4gY2FwYWNpdHkxNClcbiAgICAgICAgICAgIHRoaXMucmVzaXplKChjYXBhY2l0eTE0ICo9IDIpID4gb2Zmc2V0ID8gY2FwYWNpdHkxNCA6IG9mZnNldCk7XG4gICAgICAgIG9mZnNldCAtPSBrO1xuICAgICAgICB1dGZ4LmVuY29kZVVURjE2dG9VVEY4KHN0cmluZ1NvdXJjZShzdHIpLCBmdW5jdGlvbihiKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdbb2Zmc2V0KytdID0gYjtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgaWYgKHJlbGF0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvZmZzZXQgLSBzdGFydDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIGFuIFVURjggZW5jb2RlZCBzdHJpbmcuIFRoaXMgaXMgYW4gYWxpYXMgb2Yge0BsaW5rIEJ5dGVCdWZmZXIjd3JpdGVVVEY4U3RyaW5nfS5cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIFN0cmluZyB0byB3cml0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byB3cml0ZSB0by4gV2lsbCB1c2UgYW5kIGluY3JlYXNlIHtAbGluayBCeXRlQnVmZmVyI29mZnNldH0gaWYgb21pdHRlZC5cbiAgICAgKiBAcmV0dXJucyB7IUJ5dGVCdWZmZXJ8bnVtYmVyfSB0aGlzIGlmIG9mZnNldCBpcyBvbWl0dGVkLCBlbHNlIHRoZSBhY3R1YWwgbnVtYmVyIG9mIGJ5dGVzIHdyaXR0ZW4uXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUud3JpdGVTdHJpbmcgPSBCeXRlQnVmZmVyUHJvdG90eXBlLndyaXRlVVRGOFN0cmluZztcblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIG51bWJlciBvZiBVVEY4IGNoYXJhY3RlcnMgb2YgYSBzdHJpbmcuIEphdmFTY3JpcHQgaXRzZWxmIHVzZXMgVVRGLTE2LCBzbyB0aGF0IGEgc3RyaW5nJ3NcbiAgICAgKiAgYGxlbmd0aGAgcHJvcGVydHkgZG9lcyBub3QgcmVmbGVjdCBpdHMgYWN0dWFsIFVURjggc2l6ZSBpZiBpdCBjb250YWlucyBjb2RlIHBvaW50cyBsYXJnZXIgdGhhbiAweEZGRkYuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciBTdHJpbmcgdG8gY2FsY3VsYXRlXG4gICAgICogQHJldHVybnMge251bWJlcn0gTnVtYmVyIG9mIFVURjggY2hhcmFjdGVyc1xuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyLmNhbGN1bGF0ZVVURjhDaGFycyA9IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICByZXR1cm4gdXRmeC5jYWxjdWxhdGVVVEYxNmFzVVRGOChzdHJpbmdTb3VyY2Uoc3RyKSlbMF07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIG51bWJlciBvZiBVVEY4IGJ5dGVzIG9mIGEgc3RyaW5nLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgU3RyaW5nIHRvIGNhbGN1bGF0ZVxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IE51bWJlciBvZiBVVEY4IGJ5dGVzXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXIuY2FsY3VsYXRlVVRGOEJ5dGVzID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgIHJldHVybiB1dGZ4LmNhbGN1bGF0ZVVURjE2YXNVVEY4KHN0cmluZ1NvdXJjZShzdHIpKVsxXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgbnVtYmVyIG9mIFVURjggYnl0ZXMgb2YgYSBzdHJpbmcuIFRoaXMgaXMgYW4gYWxpYXMgb2Yge0BsaW5rIEJ5dGVCdWZmZXIuY2FsY3VsYXRlVVRGOEJ5dGVzfS5cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIFN0cmluZyB0byBjYWxjdWxhdGVcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBOdW1iZXIgb2YgVVRGOCBieXRlc1xuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyLmNhbGN1bGF0ZVN0cmluZyA9IEJ5dGVCdWZmZXIuY2FsY3VsYXRlVVRGOEJ5dGVzO1xuXG4gICAgLyoqXG4gICAgICogUmVhZHMgYW4gVVRGOCBlbmNvZGVkIHN0cmluZy5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIE51bWJlciBvZiBjaGFyYWN0ZXJzIG9yIGJ5dGVzIHRvIHJlYWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmc9fSBtZXRyaWNzIE1ldHJpY3Mgc3BlY2lmeWluZyB3aGF0IGBsZW5ndGhgIGlzIG1lYW50IHRvIGNvdW50LiBEZWZhdWx0cyB0b1xuICAgICAqICB7QGxpbmsgQnl0ZUJ1ZmZlci5NRVRSSUNTX0NIQVJTfS5cbiAgICAgKiBAcGFyYW0ge251bWJlcj19IG9mZnNldCBPZmZzZXQgdG8gcmVhZCBmcm9tLiBXaWxsIHVzZSBhbmQgaW5jcmVhc2Uge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBieSB0aGUgbnVtYmVyIG9mIGJ5dGVzXG4gICAgICogIHJlYWQgaWYgb21pdHRlZC5cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfCF7c3RyaW5nOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyfX0gVGhlIHN0cmluZyByZWFkIGlmIG9mZnNldCBpcyBvbWl0dGVkLCBlbHNlIHRoZSBzdHJpbmdcbiAgICAgKiAgcmVhZCBhbmQgdGhlIGFjdHVhbCBudW1iZXIgb2YgYnl0ZXMgcmVhZC5cbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS5yZWFkVVRGOFN0cmluZyA9IGZ1bmN0aW9uKGxlbmd0aCwgbWV0cmljcywgb2Zmc2V0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWV0cmljcyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IG1ldHJpY3M7XG4gICAgICAgICAgICBtZXRyaWNzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZWxhdGl2ZSA9IHR5cGVvZiBvZmZzZXQgPT09ICd1bmRlZmluZWQnO1xuICAgICAgICBpZiAocmVsYXRpdmUpIG9mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgICAgICBpZiAodHlwZW9mIG1ldHJpY3MgPT09ICd1bmRlZmluZWQnKSBtZXRyaWNzID0gQnl0ZUJ1ZmZlci5NRVRSSUNTX0NIQVJTO1xuICAgICAgICBpZiAoIXRoaXMubm9Bc3NlcnQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBsZW5ndGggJSAxICE9PSAwKVxuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgbGVuZ3RoOiBcIitsZW5ndGgrXCIgKG5vdCBhbiBpbnRlZ2VyKVwiKTtcbiAgICAgICAgICAgIGxlbmd0aCB8PSAwO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvZmZzZXQgIT09ICdudW1iZXInIHx8IG9mZnNldCAlIDEgIT09IDApXG4gICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IFwiK29mZnNldCtcIiAobm90IGFuIGludGVnZXIpXCIpO1xuICAgICAgICAgICAgb2Zmc2V0ID4+Pj0gMDtcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCArIDAgPiB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKVxuICAgICAgICAgICAgICAgIHRocm93IFJhbmdlRXJyb3IoXCJJbGxlZ2FsIG9mZnNldDogMCA8PSBcIitvZmZzZXQrXCIgKCtcIiswK1wiKSA8PSBcIit0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICBzdGFydCA9IG9mZnNldCxcbiAgICAgICAgICAgIHNkO1xuICAgICAgICBpZiAobWV0cmljcyA9PT0gQnl0ZUJ1ZmZlci5NRVRSSUNTX0NIQVJTKSB7IC8vIFRoZSBzYW1lIGZvciBub2RlIGFuZCB0aGUgYnJvd3NlclxuICAgICAgICAgICAgc2QgPSBzdHJpbmdEZXN0aW5hdGlvbigpO1xuICAgICAgICAgICAgdXRmeC5kZWNvZGVVVEY4KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpIDwgbGVuZ3RoICYmIG9mZnNldCA8IHRoaXMubGltaXQgPyB0aGlzLnZpZXdbb2Zmc2V0KytdIDogbnVsbDtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSwgZnVuY3Rpb24oY3ApIHtcbiAgICAgICAgICAgICAgICArK2k7IHV0ZnguVVRGOHRvVVRGMTYoY3AsIHNkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGkgIT09IGxlbmd0aClcbiAgICAgICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCByYW5nZTogVHJ1bmNhdGVkIGRhdGEsIFwiK2krXCIgPT0gXCIrbGVuZ3RoKTtcbiAgICAgICAgICAgIGlmIChyZWxhdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgIHJldHVybiBzZCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBcInN0cmluZ1wiOiBzZCgpLFxuICAgICAgICAgICAgICAgICAgICBcImxlbmd0aFwiOiBvZmZzZXQgLSBzdGFydFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobWV0cmljcyA9PT0gQnl0ZUJ1ZmZlci5NRVRSSUNTX0JZVEVTKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm9Bc3NlcnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9mZnNldCAhPT0gJ251bWJlcicgfHwgb2Zmc2V0ICUgMSAhPT0gMClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IFwiK29mZnNldCtcIiAobm90IGFuIGludGVnZXIpXCIpO1xuICAgICAgICAgICAgICAgIG9mZnNldCA+Pj49IDA7XG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ICsgbGVuZ3RoID4gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcihcIklsbGVnYWwgb2Zmc2V0OiAwIDw9IFwiK29mZnNldCtcIiAoK1wiK2xlbmd0aCtcIikgPD0gXCIrdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgayA9IG9mZnNldCArIGxlbmd0aDtcbiAgICAgICAgICAgIHV0ZnguZGVjb2RlVVRGOHRvVVRGMTYoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mZnNldCA8IGsgPyB0aGlzLnZpZXdbb2Zmc2V0KytdIDogbnVsbDtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSwgc2QgPSBzdHJpbmdEZXN0aW5hdGlvbigpLCB0aGlzLm5vQXNzZXJ0KTtcbiAgICAgICAgICAgIGlmIChvZmZzZXQgIT09IGspXG4gICAgICAgICAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcihcIklsbGVnYWwgcmFuZ2U6IFRydW5jYXRlZCBkYXRhLCBcIitvZmZzZXQrXCIgPT0gXCIrayk7XG4gICAgICAgICAgICBpZiAocmVsYXRpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2QoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmluZyc6IHNkKCksXG4gICAgICAgICAgICAgICAgICAgICdsZW5ndGgnOiBvZmZzZXQgLSBzdGFydFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiVW5zdXBwb3J0ZWQgbWV0cmljczogXCIrbWV0cmljcyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlYWRzIGFuIFVURjggZW5jb2RlZCBzdHJpbmcuIFRoaXMgaXMgYW4gYWxpYXMgb2Yge0BsaW5rIEJ5dGVCdWZmZXIjcmVhZFVURjhTdHJpbmd9LlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggTnVtYmVyIG9mIGNoYXJhY3RlcnMgb3IgYnl0ZXMgdG8gcmVhZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gbWV0cmljcyBNZXRyaWNzIHNwZWNpZnlpbmcgd2hhdCBgbmAgaXMgbWVhbnQgdG8gY291bnQuIERlZmF1bHRzIHRvXG4gICAgICogIHtAbGluayBCeXRlQnVmZmVyLk1FVFJJQ1NfQ0hBUlN9LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byByZWFkIGZyb20uIFdpbGwgdXNlIGFuZCBpbmNyZWFzZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IHRoZSBudW1iZXIgb2YgYnl0ZXNcbiAgICAgKiAgcmVhZCBpZiBvbWl0dGVkLlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8IXtzdHJpbmc6IHN0cmluZywgbGVuZ3RoOiBudW1iZXJ9fSBUaGUgc3RyaW5nIHJlYWQgaWYgb2Zmc2V0IGlzIG9taXR0ZWQsIGVsc2UgdGhlIHN0cmluZ1xuICAgICAqICByZWFkIGFuZCB0aGUgYWN0dWFsIG51bWJlciBvZiBieXRlcyByZWFkLlxuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLnJlYWRTdHJpbmcgPSBCeXRlQnVmZmVyUHJvdG90eXBlLnJlYWRVVEY4U3RyaW5nO1xuXG4gICAgLy8gdHlwZXMvc3RyaW5ncy92c3RyaW5nXG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSBsZW5ndGggYXMgdmFyaW50MzIgcHJlZml4ZWQgVVRGOCBlbmNvZGVkIHN0cmluZy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIFN0cmluZyB0byB3cml0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byB3cml0ZSB0by4gV2lsbCB1c2UgYW5kIGluY3JlYXNlIHtAbGluayBCeXRlQnVmZmVyI29mZnNldH0gYnkgdGhlIG51bWJlciBvZiBieXRlc1xuICAgICAqICB3cml0dGVuIGlmIG9taXR0ZWQuXG4gICAgICogQHJldHVybnMgeyFCeXRlQnVmZmVyfG51bWJlcn0gYHRoaXNgIGlmIGBvZmZzZXRgIGlzIG9taXR0ZWQsIGVsc2UgdGhlIGFjdHVhbCBudW1iZXIgb2YgYnl0ZXMgd3JpdHRlblxuICAgICAqIEBleHBvc2VcbiAgICAgKiBAc2VlIEJ5dGVCdWZmZXIjd3JpdGVWYXJpbnQzMlxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUud3JpdGVWU3RyaW5nID0gZnVuY3Rpb24oc3RyLCBvZmZzZXQpIHtcbiAgICAgICAgdmFyIHJlbGF0aXZlID0gdHlwZW9mIG9mZnNldCA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIGlmIChyZWxhdGl2ZSkgb2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICAgIGlmICghdGhpcy5ub0Fzc2VydCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgc3RyOiBOb3QgYSBzdHJpbmdcIik7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9mZnNldCAhPT0gJ251bWJlcicgfHwgb2Zmc2V0ICUgMSAhPT0gMClcbiAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbGxlZ2FsIG9mZnNldDogXCIrb2Zmc2V0K1wiIChub3QgYW4gaW50ZWdlcilcIik7XG4gICAgICAgICAgICBvZmZzZXQgPj4+PSAwO1xuICAgICAgICAgICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ICsgMCA+IHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGgpXG4gICAgICAgICAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcihcIklsbGVnYWwgb2Zmc2V0OiAwIDw9IFwiK29mZnNldCtcIiAoK1wiKzArXCIpIDw9IFwiK3RoaXMuYnVmZmVyLmJ5dGVMZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdGFydCA9IG9mZnNldCxcbiAgICAgICAgICAgIGssIGw7XG4gICAgICAgIGsgPSB1dGZ4LmNhbGN1bGF0ZVVURjE2YXNVVEY4KHN0cmluZ1NvdXJjZShzdHIpLCB0aGlzLm5vQXNzZXJ0KVsxXTtcbiAgICAgICAgbCA9IEJ5dGVCdWZmZXIuY2FsY3VsYXRlVmFyaW50MzIoayk7XG4gICAgICAgIG9mZnNldCArPSBsK2s7XG4gICAgICAgIHZhciBjYXBhY2l0eTE1ID0gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aDtcbiAgICAgICAgaWYgKG9mZnNldCA+IGNhcGFjaXR5MTUpXG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSgoY2FwYWNpdHkxNSAqPSAyKSA+IG9mZnNldCA/IGNhcGFjaXR5MTUgOiBvZmZzZXQpO1xuICAgICAgICBvZmZzZXQgLT0gbCtrO1xuICAgICAgICBvZmZzZXQgKz0gdGhpcy53cml0ZVZhcmludDMyKGssIG9mZnNldCk7XG4gICAgICAgIHV0ZnguZW5jb2RlVVRGMTZ0b1VURjgoc3RyaW5nU291cmNlKHN0ciksIGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgICAgIHRoaXMudmlld1tvZmZzZXQrK10gPSBiO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICBpZiAob2Zmc2V0ICE9PSBzdGFydCtrK2wpXG4gICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCByYW5nZTogVHJ1bmNhdGVkIGRhdGEsIFwiK29mZnNldCtcIiA9PSBcIisob2Zmc2V0K2srbCkpO1xuICAgICAgICBpZiAocmVsYXRpdmUpIHtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9mZnNldCAtIHN0YXJ0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZWFkcyBhIGxlbmd0aCBhcyB2YXJpbnQzMiBwcmVmaXhlZCBVVEY4IGVuY29kZWQgc3RyaW5nLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byByZWFkIGZyb20uIFdpbGwgdXNlIGFuZCBpbmNyZWFzZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IHRoZSBudW1iZXIgb2YgYnl0ZXNcbiAgICAgKiAgcmVhZCBpZiBvbWl0dGVkLlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8IXtzdHJpbmc6IHN0cmluZywgbGVuZ3RoOiBudW1iZXJ9fSBUaGUgc3RyaW5nIHJlYWQgaWYgb2Zmc2V0IGlzIG9taXR0ZWQsIGVsc2UgdGhlIHN0cmluZ1xuICAgICAqICByZWFkIGFuZCB0aGUgYWN0dWFsIG51bWJlciBvZiBieXRlcyByZWFkLlxuICAgICAqIEBleHBvc2VcbiAgICAgKiBAc2VlIEJ5dGVCdWZmZXIjcmVhZFZhcmludDMyXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS5yZWFkVlN0cmluZyA9IGZ1bmN0aW9uKG9mZnNldCkge1xuICAgICAgICB2YXIgcmVsYXRpdmUgPSB0eXBlb2Ygb2Zmc2V0ID09PSAndW5kZWZpbmVkJztcbiAgICAgICAgaWYgKHJlbGF0aXZlKSBvZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICAgICAgaWYgKCF0aGlzLm5vQXNzZXJ0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9mZnNldCAhPT0gJ251bWJlcicgfHwgb2Zmc2V0ICUgMSAhPT0gMClcbiAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbGxlZ2FsIG9mZnNldDogXCIrb2Zmc2V0K1wiIChub3QgYW4gaW50ZWdlcilcIik7XG4gICAgICAgICAgICBvZmZzZXQgPj4+PSAwO1xuICAgICAgICAgICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ICsgMSA+IHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGgpXG4gICAgICAgICAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcihcIklsbGVnYWwgb2Zmc2V0OiAwIDw9IFwiK29mZnNldCtcIiAoK1wiKzErXCIpIDw9IFwiK3RoaXMuYnVmZmVyLmJ5dGVMZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdGFydCA9IG9mZnNldDtcbiAgICAgICAgdmFyIGxlbiA9IHRoaXMucmVhZFZhcmludDMyKG9mZnNldCk7XG4gICAgICAgIHZhciBzdHIgPSB0aGlzLnJlYWRVVEY4U3RyaW5nKGxlblsndmFsdWUnXSwgQnl0ZUJ1ZmZlci5NRVRSSUNTX0JZVEVTLCBvZmZzZXQgKz0gbGVuWydsZW5ndGgnXSk7XG4gICAgICAgIG9mZnNldCArPSBzdHJbJ2xlbmd0aCddO1xuICAgICAgICBpZiAocmVsYXRpdmUpIHtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgcmV0dXJuIHN0clsnc3RyaW5nJ107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICdzdHJpbmcnOiBzdHJbJ3N0cmluZyddLFxuICAgICAgICAgICAgICAgICdsZW5ndGgnOiBvZmZzZXQgLSBzdGFydFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgc29tZSBkYXRhIHRvIHRoaXMgQnl0ZUJ1ZmZlci4gVGhpcyB3aWxsIG92ZXJ3cml0ZSBhbnkgY29udGVudHMgYmVoaW5kIHRoZSBzcGVjaWZpZWQgb2Zmc2V0IHVwIHRvIHRoZSBhcHBlbmRlZFxuICAgICAqICBkYXRhJ3MgbGVuZ3RoLlxuICAgICAqIEBwYXJhbSB7IUJ5dGVCdWZmZXJ8IUFycmF5QnVmZmVyfCFVaW50OEFycmF5fHN0cmluZ30gc291cmNlIERhdGEgdG8gYXBwZW5kLiBJZiBgc291cmNlYCBpcyBhIEJ5dGVCdWZmZXIsIGl0cyBvZmZzZXRzXG4gICAgICogIHdpbGwgYmUgbW9kaWZpZWQgYWNjb3JkaW5nIHRvIHRoZSBwZXJmb3JtZWQgcmVhZCBvcGVyYXRpb24uXG4gICAgICogQHBhcmFtIHsoc3RyaW5nfG51bWJlcik9fSBlbmNvZGluZyBFbmNvZGluZyBpZiBgZGF0YWAgaXMgYSBzdHJpbmcgKFwiYmFzZTY0XCIsIFwiaGV4XCIsIFwiYmluYXJ5XCIsIGRlZmF1bHRzIHRvIFwidXRmOFwiKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byBhcHBlbmQgYXQuIFdpbGwgdXNlIGFuZCBpbmNyZWFzZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IHRoZSBudW1iZXIgb2YgYnl0ZXNcbiAgICAgKiAgd3JpdHRlbiBpZiBvbWl0dGVkLlxuICAgICAqIEByZXR1cm5zIHshQnl0ZUJ1ZmZlcn0gdGhpc1xuICAgICAqIEBleHBvc2VcbiAgICAgKiBAZXhhbXBsZSBBIHJlbGF0aXZlIGA8MDEgMDI+MDMuYXBwZW5kKDwwNCAwNT4pYCB3aWxsIHJlc3VsdCBpbiBgPDAxIDAyIDA0IDA1PiwgMDQgMDV8YFxuICAgICAqIEBleGFtcGxlIEFuIGFic29sdXRlIGA8MDEgMDI+MDMuYXBwZW5kKDA0IDA1PiwgMSlgIHdpbGwgcmVzdWx0IGluIGA8MDEgMDQ+MDUsIDA0IDA1fGBcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKHNvdXJjZSwgZW5jb2RpbmcsIG9mZnNldCkge1xuICAgICAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSBlbmNvZGluZztcbiAgICAgICAgICAgIGVuY29kaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZWxhdGl2ZSA9IHR5cGVvZiBvZmZzZXQgPT09ICd1bmRlZmluZWQnO1xuICAgICAgICBpZiAocmVsYXRpdmUpIG9mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgICAgICBpZiAoIXRoaXMubm9Bc3NlcnQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ICE9PSAnbnVtYmVyJyB8fCBvZmZzZXQgJSAxICE9PSAwKVxuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgb2Zmc2V0OiBcIitvZmZzZXQrXCIgKG5vdCBhbiBpbnRlZ2VyKVwiKTtcbiAgICAgICAgICAgIG9mZnNldCA+Pj49IDA7XG4gICAgICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyAwID4gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IDAgPD0gXCIrb2Zmc2V0K1wiICgrXCIrMCtcIikgPD0gXCIrdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoc291cmNlIGluc3RhbmNlb2YgQnl0ZUJ1ZmZlcikpXG4gICAgICAgICAgICBzb3VyY2UgPSBCeXRlQnVmZmVyLndyYXAoc291cmNlLCBlbmNvZGluZyk7XG4gICAgICAgIHZhciBsZW5ndGggPSBzb3VyY2UubGltaXQgLSBzb3VyY2Uub2Zmc2V0O1xuICAgICAgICBpZiAobGVuZ3RoIDw9IDApIHJldHVybiB0aGlzOyAvLyBOb3RoaW5nIHRvIGFwcGVuZFxuICAgICAgICBvZmZzZXQgKz0gbGVuZ3RoO1xuICAgICAgICB2YXIgY2FwYWNpdHkxNiA9IHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGg7XG4gICAgICAgIGlmIChvZmZzZXQgPiBjYXBhY2l0eTE2KVxuICAgICAgICAgICAgdGhpcy5yZXNpemUoKGNhcGFjaXR5MTYgKj0gMikgPiBvZmZzZXQgPyBjYXBhY2l0eTE2IDogb2Zmc2V0KTtcbiAgICAgICAgb2Zmc2V0IC09IGxlbmd0aDtcbiAgICAgICAgdGhpcy52aWV3LnNldChzb3VyY2Uudmlldy5zdWJhcnJheShzb3VyY2Uub2Zmc2V0LCBzb3VyY2UubGltaXQpLCBvZmZzZXQpO1xuICAgICAgICBzb3VyY2Uub2Zmc2V0ICs9IGxlbmd0aDtcbiAgICAgICAgaWYgKHJlbGF0aXZlKSB0aGlzLm9mZnNldCArPSBsZW5ndGg7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIHRoaXMgQnl0ZUJ1ZmZlcidzIGNvbnRlbnRzIHRvIGFub3RoZXIgQnl0ZUJ1ZmZlci4gVGhpcyB3aWxsIG92ZXJ3cml0ZSBhbnkgY29udGVudHMgYXQgYW5kIGFmdGVyIHRoZVxuICAgICAgICBzcGVjaWZpZWQgb2Zmc2V0IHVwIHRvIHRoZSBsZW5ndGggb2YgdGhpcyBCeXRlQnVmZmVyJ3MgZGF0YS5cbiAgICAgKiBAcGFyYW0geyFCeXRlQnVmZmVyfSB0YXJnZXQgVGFyZ2V0IEJ5dGVCdWZmZXJcbiAgICAgKiBAcGFyYW0ge251bWJlcj19IG9mZnNldCBPZmZzZXQgdG8gYXBwZW5kIHRvLiBXaWxsIHVzZSBhbmQgaW5jcmVhc2Uge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBieSB0aGUgbnVtYmVyIG9mIGJ5dGVzXG4gICAgICogIHJlYWQgaWYgb21pdHRlZC5cbiAgICAgKiBAcmV0dXJucyB7IUJ5dGVCdWZmZXJ9IHRoaXNcbiAgICAgKiBAZXhwb3NlXG4gICAgICogQHNlZSBCeXRlQnVmZmVyI2FwcGVuZFxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUuYXBwZW5kVG8gPSBmdW5jdGlvbih0YXJnZXQsIG9mZnNldCkge1xuICAgICAgICB0YXJnZXQuYXBwZW5kKHRoaXMsIG9mZnNldCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSBwYXlsb2FkIG9mIGJ5dGVzLiBUaGlzIGlzIGFuIGFsaWFzIG9mIHtAbGluayBCeXRlQnVmZmVyI2FwcGVuZH0uXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHshQnl0ZUJ1ZmZlcnwhQXJyYXlCdWZmZXJ8IVVpbnQ4QXJyYXl8c3RyaW5nfSBzb3VyY2UgRGF0YSB0byB3cml0ZS4gSWYgYHNvdXJjZWAgaXMgYSBCeXRlQnVmZmVyLCBpdHMgb2Zmc2V0c1xuICAgICAqICB3aWxsIGJlIG1vZGlmaWVkIGFjY29yZGluZyB0byB0aGUgcGVyZm9ybWVkIHJlYWQgb3BlcmF0aW9uLlxuICAgICAqIEBwYXJhbSB7KHN0cmluZ3xudW1iZXIpPX0gZW5jb2RpbmcgRW5jb2RpbmcgaWYgYGRhdGFgIGlzIGEgc3RyaW5nIChcImJhc2U2NFwiLCBcImhleFwiLCBcImJpbmFyeVwiLCBkZWZhdWx0cyB0byBcInV0ZjhcIilcbiAgICAgKiBAcGFyYW0ge251bWJlcj19IG9mZnNldCBPZmZzZXQgdG8gd3JpdGUgdG8uIFdpbGwgdXNlIGFuZCBpbmNyZWFzZSB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGJ5IHRoZSBudW1iZXIgb2YgYnl0ZXNcbiAgICAgKiAgd3JpdHRlbiBpZiBvbWl0dGVkLlxuICAgICAqIEByZXR1cm5zIHshQnl0ZUJ1ZmZlcn0gdGhpc1xuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLndyaXRlQnl0ZXMgPSBCeXRlQnVmZmVyUHJvdG90eXBlLmFwcGVuZDtcbiAgICAvKipcbiAgICAgKiBFbmFibGVzIG9yIGRpc2FibGVzIGFzc2VydGlvbnMgb2YgYXJndW1lbnQgdHlwZXMgYW5kIG9mZnNldHMuIEFzc2VydGlvbnMgYXJlIGVuYWJsZWQgYnkgZGVmYXVsdCBidXQgeW91IGNhbiBvcHQgdG9cbiAgICAgKiAgZGlzYWJsZSB0aGVtIGlmIHlvdXIgY29kZSBhbHJlYWR5IG1ha2VzIHN1cmUgdGhhdCBldmVyeXRoaW5nIGlzIHZhbGlkLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYXNzZXJ0IGB0cnVlYCB0byBlbmFibGUgYXNzZXJ0aW9ucywgb3RoZXJ3aXNlIGBmYWxzZWBcbiAgICAgKiBAcmV0dXJucyB7IUJ5dGVCdWZmZXJ9IHRoaXNcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS5hc3NlcnQgPSBmdW5jdGlvbihhc3NlcnQpIHtcbiAgICAgICAgdGhpcy5ub0Fzc2VydCA9ICFhc3NlcnQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjYXBhY2l0eSBvZiB0aGlzIEJ5dGVCdWZmZXIncyBiYWNraW5nIGJ1ZmZlci5cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBDYXBhY2l0eSBvZiB0aGUgYmFja2luZyBidWZmZXJcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS5jYXBhY2l0eSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGlzIEJ5dGVCdWZmZXIncyBvZmZzZXRzIGJ5IHNldHRpbmcge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSB0byBgMGAgYW5kIHtAbGluayBCeXRlQnVmZmVyI2xpbWl0fSB0byB0aGVcbiAgICAgKiAgYmFja2luZyBidWZmZXIncyBjYXBhY2l0eS4gRGlzY2FyZHMge0BsaW5rIEJ5dGVCdWZmZXIjbWFya2VkT2Zmc2V0fS5cbiAgICAgKiBAcmV0dXJucyB7IUJ5dGVCdWZmZXJ9IHRoaXNcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgICAgIHRoaXMubGltaXQgPSB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoO1xuICAgICAgICB0aGlzLm1hcmtlZE9mZnNldCA9IC0xO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNsb25lZCBpbnN0YW5jZSBvZiB0aGlzIEJ5dGVCdWZmZXIsIHByZXNldCB3aXRoIHRoaXMgQnl0ZUJ1ZmZlcidzIHZhbHVlcyBmb3Ige0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSxcbiAgICAgKiAge0BsaW5rIEJ5dGVCdWZmZXIjbWFya2VkT2Zmc2V0fSBhbmQge0BsaW5rIEJ5dGVCdWZmZXIjbGltaXR9LlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IGNvcHkgV2hldGhlciB0byBjb3B5IHRoZSBiYWNraW5nIGJ1ZmZlciBvciB0byByZXR1cm4gYW5vdGhlciB2aWV3IG9uIHRoZSBzYW1lLCBkZWZhdWx0cyB0byBgZmFsc2VgXG4gICAgICogQHJldHVybnMgeyFCeXRlQnVmZmVyfSBDbG9uZWQgaW5zdGFuY2VcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKGNvcHkpIHtcbiAgICAgICAgdmFyIGJiID0gbmV3IEJ5dGVCdWZmZXIoMCwgdGhpcy5saXR0bGVFbmRpYW4sIHRoaXMubm9Bc3NlcnQpO1xuICAgICAgICBpZiAoY29weSkge1xuICAgICAgICAgICAgYmIuYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGgpO1xuICAgICAgICAgICAgYmIudmlldyA9IG5ldyBVaW50OEFycmF5KGJiLmJ1ZmZlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiYi5idWZmZXIgPSB0aGlzLmJ1ZmZlcjtcbiAgICAgICAgICAgIGJiLnZpZXcgPSB0aGlzLnZpZXc7XG4gICAgICAgIH1cbiAgICAgICAgYmIub2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICAgIGJiLm1hcmtlZE9mZnNldCA9IHRoaXMubWFya2VkT2Zmc2V0O1xuICAgICAgICBiYi5saW1pdCA9IHRoaXMubGltaXQ7XG4gICAgICAgIHJldHVybiBiYjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ29tcGFjdHMgdGhpcyBCeXRlQnVmZmVyIHRvIGJlIGJhY2tlZCBieSBhIHtAbGluayBCeXRlQnVmZmVyI2J1ZmZlcn0gb2YgaXRzIGNvbnRlbnRzJyBsZW5ndGguIENvbnRlbnRzIGFyZSB0aGUgYnl0ZXNcbiAgICAgKiAgYmV0d2VlbiB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGFuZCB7QGxpbmsgQnl0ZUJ1ZmZlciNsaW1pdH0uIFdpbGwgc2V0IGBvZmZzZXQgPSAwYCBhbmQgYGxpbWl0ID0gY2FwYWNpdHlgIGFuZFxuICAgICAqICBhZGFwdCB7QGxpbmsgQnl0ZUJ1ZmZlciNtYXJrZWRPZmZzZXR9IHRvIHRoZSBzYW1lIHJlbGF0aXZlIHBvc2l0aW9uIGlmIHNldC5cbiAgICAgKiBAcGFyYW0ge251bWJlcj19IGJlZ2luIE9mZnNldCB0byBzdGFydCBhdCwgZGVmYXVsdHMgdG8ge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fVxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gZW5kIE9mZnNldCB0byBlbmQgYXQsIGRlZmF1bHRzIHRvIHtAbGluayBCeXRlQnVmZmVyI2xpbWl0fVxuICAgICAqIEByZXR1cm5zIHshQnl0ZUJ1ZmZlcn0gdGhpc1xuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLmNvbXBhY3QgPSBmdW5jdGlvbihiZWdpbiwgZW5kKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYmVnaW4gPT09ICd1bmRlZmluZWQnKSBiZWdpbiA9IHRoaXMub2Zmc2V0O1xuICAgICAgICBpZiAodHlwZW9mIGVuZCA9PT0gJ3VuZGVmaW5lZCcpIGVuZCA9IHRoaXMubGltaXQ7XG4gICAgICAgIGlmICghdGhpcy5ub0Fzc2VydCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBiZWdpbiAhPT0gJ251bWJlcicgfHwgYmVnaW4gJSAxICE9PSAwKVxuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgYmVnaW46IE5vdCBhbiBpbnRlZ2VyXCIpO1xuICAgICAgICAgICAgYmVnaW4gPj4+PSAwO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbmQgIT09ICdudW1iZXInIHx8IGVuZCAlIDEgIT09IDApXG4gICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCBlbmQ6IE5vdCBhbiBpbnRlZ2VyXCIpO1xuICAgICAgICAgICAgZW5kID4+Pj0gMDtcbiAgICAgICAgICAgIGlmIChiZWdpbiA8IDAgfHwgYmVnaW4gPiBlbmQgfHwgZW5kID4gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCByYW5nZTogMCA8PSBcIitiZWdpbitcIiA8PSBcIitlbmQrXCIgPD0gXCIrdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJlZ2luID09PSAwICYmIGVuZCA9PT0gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgIHJldHVybiB0aGlzOyAvLyBBbHJlYWR5IGNvbXBhY3RlZFxuICAgICAgICB2YXIgbGVuID0gZW5kIC0gYmVnaW47XG4gICAgICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gRU1QVFlfQlVGRkVSO1xuICAgICAgICAgICAgdGhpcy52aWV3ID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLm1hcmtlZE9mZnNldCA+PSAwKSB0aGlzLm1hcmtlZE9mZnNldCAtPSBiZWdpbjtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHRoaXMubGltaXQgPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihsZW4pO1xuICAgICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgICAgIHZpZXcuc2V0KHRoaXMudmlldy5zdWJhcnJheShiZWdpbiwgZW5kKSk7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICBpZiAodGhpcy5tYXJrZWRPZmZzZXQgPj0gMCkgdGhpcy5tYXJrZWRPZmZzZXQgLT0gYmVnaW47XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICAgICAgdGhpcy5saW1pdCA9IGxlbjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgQnl0ZUJ1ZmZlcidzIGNvbnRlbnRzLiBDb250ZW50cyBhcmUgdGhlIGJ5dGVzIGJldHdlZW4ge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBhbmRcbiAgICAgKiAge0BsaW5rIEJ5dGVCdWZmZXIjbGltaXR9LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gYmVnaW4gQmVnaW4gb2Zmc2V0LCBkZWZhdWx0cyB0byB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gZW5kIEVuZCBvZmZzZXQsIGRlZmF1bHRzIHRvIHtAbGluayBCeXRlQnVmZmVyI2xpbWl0fS5cbiAgICAgKiBAcmV0dXJucyB7IUJ5dGVCdWZmZXJ9IENvcHlcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24oYmVnaW4sIGVuZCkge1xuICAgICAgICBpZiAodHlwZW9mIGJlZ2luID09PSAndW5kZWZpbmVkJykgYmVnaW4gPSB0aGlzLm9mZnNldDtcbiAgICAgICAgaWYgKHR5cGVvZiBlbmQgPT09ICd1bmRlZmluZWQnKSBlbmQgPSB0aGlzLmxpbWl0O1xuICAgICAgICBpZiAoIXRoaXMubm9Bc3NlcnQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYmVnaW4gIT09ICdudW1iZXInIHx8IGJlZ2luICUgMSAhPT0gMClcbiAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbGxlZ2FsIGJlZ2luOiBOb3QgYW4gaW50ZWdlclwiKTtcbiAgICAgICAgICAgIGJlZ2luID4+Pj0gMDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZW5kICE9PSAnbnVtYmVyJyB8fCBlbmQgJSAxICE9PSAwKVxuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgZW5kOiBOb3QgYW4gaW50ZWdlclwiKTtcbiAgICAgICAgICAgIGVuZCA+Pj49IDA7XG4gICAgICAgICAgICBpZiAoYmVnaW4gPCAwIHx8IGJlZ2luID4gZW5kIHx8IGVuZCA+IHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGgpXG4gICAgICAgICAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcihcIklsbGVnYWwgcmFuZ2U6IDAgPD0gXCIrYmVnaW4rXCIgPD0gXCIrZW5kK1wiIDw9IFwiK3RoaXMuYnVmZmVyLmJ5dGVMZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiZWdpbiA9PT0gZW5kKVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCeXRlQnVmZmVyKDAsIHRoaXMubGl0dGxlRW5kaWFuLCB0aGlzLm5vQXNzZXJ0KTtcbiAgICAgICAgdmFyIGNhcGFjaXR5ID0gZW5kIC0gYmVnaW4sXG4gICAgICAgICAgICBiYiA9IG5ldyBCeXRlQnVmZmVyKGNhcGFjaXR5LCB0aGlzLmxpdHRsZUVuZGlhbiwgdGhpcy5ub0Fzc2VydCk7XG4gICAgICAgIGJiLm9mZnNldCA9IDA7XG4gICAgICAgIGJiLmxpbWl0ID0gY2FwYWNpdHk7XG4gICAgICAgIGlmIChiYi5tYXJrZWRPZmZzZXQgPj0gMCkgYmIubWFya2VkT2Zmc2V0IC09IGJlZ2luO1xuICAgICAgICB0aGlzLmNvcHlUbyhiYiwgMCwgYmVnaW4sIGVuZCk7XG4gICAgICAgIHJldHVybiBiYjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ29waWVzIHRoaXMgQnl0ZUJ1ZmZlcidzIGNvbnRlbnRzIHRvIGFub3RoZXIgQnl0ZUJ1ZmZlci4gQ29udGVudHMgYXJlIHRoZSBieXRlcyBiZXR3ZWVuIHtAbGluayBCeXRlQnVmZmVyI29mZnNldH0gYW5kXG4gICAgICogIHtAbGluayBCeXRlQnVmZmVyI2xpbWl0fS5cbiAgICAgKiBAcGFyYW0geyFCeXRlQnVmZmVyfSB0YXJnZXQgVGFyZ2V0IEJ5dGVCdWZmZXJcbiAgICAgKiBAcGFyYW0ge251bWJlcj19IHRhcmdldE9mZnNldCBPZmZzZXQgdG8gY29weSB0by4gV2lsbCB1c2UgYW5kIGluY3JlYXNlIHRoZSB0YXJnZXQncyB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9XG4gICAgICogIGJ5IHRoZSBudW1iZXIgb2YgYnl0ZXMgY29waWVkIGlmIG9taXR0ZWQuXG4gICAgICogQHBhcmFtIHtudW1iZXI9fSBzb3VyY2VPZmZzZXQgT2Zmc2V0IHRvIHN0YXJ0IGNvcHlpbmcgZnJvbS4gV2lsbCB1c2UgYW5kIGluY3JlYXNlIHtAbGluayBCeXRlQnVmZmVyI29mZnNldH0gYnkgdGhlXG4gICAgICogIG51bWJlciBvZiBieXRlcyBjb3BpZWQgaWYgb21pdHRlZC5cbiAgICAgKiBAcGFyYW0ge251bWJlcj19IHNvdXJjZUxpbWl0IE9mZnNldCB0byBlbmQgY29weWluZyBmcm9tLCBkZWZhdWx0cyB0byB7QGxpbmsgQnl0ZUJ1ZmZlciNsaW1pdH1cbiAgICAgKiBAcmV0dXJucyB7IUJ5dGVCdWZmZXJ9IHRoaXNcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS5jb3B5VG8gPSBmdW5jdGlvbih0YXJnZXQsIHRhcmdldE9mZnNldCwgc291cmNlT2Zmc2V0LCBzb3VyY2VMaW1pdCkge1xuICAgICAgICB2YXIgcmVsYXRpdmUsXG4gICAgICAgICAgICB0YXJnZXRSZWxhdGl2ZTtcbiAgICAgICAgaWYgKCF0aGlzLm5vQXNzZXJ0KSB7XG4gICAgICAgICAgICBpZiAoIUJ5dGVCdWZmZXIuaXNCeXRlQnVmZmVyKHRhcmdldCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCB0YXJnZXQ6IE5vdCBhIEJ5dGVCdWZmZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gKHRhcmdldFJlbGF0aXZlID0gdHlwZW9mIHRhcmdldE9mZnNldCA9PT0gJ3VuZGVmaW5lZCcpID8gdGFyZ2V0Lm9mZnNldCA6IHRhcmdldE9mZnNldCB8IDA7XG4gICAgICAgIHNvdXJjZU9mZnNldCA9IChyZWxhdGl2ZSA9IHR5cGVvZiBzb3VyY2VPZmZzZXQgPT09ICd1bmRlZmluZWQnKSA/IHRoaXMub2Zmc2V0IDogc291cmNlT2Zmc2V0IHwgMDtcbiAgICAgICAgc291cmNlTGltaXQgPSB0eXBlb2Ygc291cmNlTGltaXQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5saW1pdCA6IHNvdXJjZUxpbWl0IHwgMDtcblxuICAgICAgICBpZiAodGFyZ2V0T2Zmc2V0IDwgMCB8fCB0YXJnZXRPZmZzZXQgPiB0YXJnZXQuYnVmZmVyLmJ5dGVMZW5ndGgpXG4gICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCB0YXJnZXQgcmFuZ2U6IDAgPD0gXCIrdGFyZ2V0T2Zmc2V0K1wiIDw9IFwiK3RhcmdldC5idWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICAgIGlmIChzb3VyY2VPZmZzZXQgPCAwIHx8IHNvdXJjZUxpbWl0ID4gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgIHRocm93IFJhbmdlRXJyb3IoXCJJbGxlZ2FsIHNvdXJjZSByYW5nZTogMCA8PSBcIitzb3VyY2VPZmZzZXQrXCIgPD0gXCIrdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XG5cbiAgICAgICAgdmFyIGxlbiA9IHNvdXJjZUxpbWl0IC0gc291cmNlT2Zmc2V0O1xuICAgICAgICBpZiAobGVuID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDsgLy8gTm90aGluZyB0byBjb3B5XG5cbiAgICAgICAgdGFyZ2V0LmVuc3VyZUNhcGFjaXR5KHRhcmdldE9mZnNldCArIGxlbik7XG5cbiAgICAgICAgdGFyZ2V0LnZpZXcuc2V0KHRoaXMudmlldy5zdWJhcnJheShzb3VyY2VPZmZzZXQsIHNvdXJjZUxpbWl0KSwgdGFyZ2V0T2Zmc2V0KTtcblxuICAgICAgICBpZiAocmVsYXRpdmUpIHRoaXMub2Zmc2V0ICs9IGxlbjtcbiAgICAgICAgaWYgKHRhcmdldFJlbGF0aXZlKSB0YXJnZXQub2Zmc2V0ICs9IGxlbjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTWFrZXMgc3VyZSB0aGF0IHRoaXMgQnl0ZUJ1ZmZlciBpcyBiYWNrZWQgYnkgYSB7QGxpbmsgQnl0ZUJ1ZmZlciNidWZmZXJ9IG9mIGF0IGxlYXN0IHRoZSBzcGVjaWZpZWQgY2FwYWNpdHkuIElmIHRoZVxuICAgICAqICBjdXJyZW50IGNhcGFjaXR5IGlzIGV4Y2VlZGVkLCBpdCB3aWxsIGJlIGRvdWJsZWQuIElmIGRvdWJsZSB0aGUgY3VycmVudCBjYXBhY2l0eSBpcyBsZXNzIHRoYW4gdGhlIHJlcXVpcmVkIGNhcGFjaXR5LFxuICAgICAqICB0aGUgcmVxdWlyZWQgY2FwYWNpdHkgd2lsbCBiZSB1c2VkIGluc3RlYWQuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhcGFjaXR5IFJlcXVpcmVkIGNhcGFjaXR5XG4gICAgICogQHJldHVybnMgeyFCeXRlQnVmZmVyfSB0aGlzXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUuZW5zdXJlQ2FwYWNpdHkgPSBmdW5jdGlvbihjYXBhY2l0eSkge1xuICAgICAgICB2YXIgY3VycmVudCA9IHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGg7XG4gICAgICAgIGlmIChjdXJyZW50IDwgY2FwYWNpdHkpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNpemUoKGN1cnJlbnQgKj0gMikgPiBjYXBhY2l0eSA/IGN1cnJlbnQgOiBjYXBhY2l0eSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBPdmVyd3JpdGVzIHRoaXMgQnl0ZUJ1ZmZlcidzIGNvbnRlbnRzIHdpdGggdGhlIHNwZWNpZmllZCB2YWx1ZS4gQ29udGVudHMgYXJlIHRoZSBieXRlcyBiZXR3ZWVuXG4gICAgICogIHtAbGluayBCeXRlQnVmZmVyI29mZnNldH0gYW5kIHtAbGluayBCeXRlQnVmZmVyI2xpbWl0fS5cbiAgICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHZhbHVlIEJ5dGUgdmFsdWUgdG8gZmlsbCB3aXRoLiBJZiBnaXZlbiBhcyBhIHN0cmluZywgdGhlIGZpcnN0IGNoYXJhY3RlciBpcyB1c2VkLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gYmVnaW4gQmVnaW4gb2Zmc2V0LiBXaWxsIHVzZSBhbmQgaW5jcmVhc2Uge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBieSB0aGUgbnVtYmVyIG9mIGJ5dGVzXG4gICAgICogIHdyaXR0ZW4gaWYgb21pdHRlZC4gZGVmYXVsdHMgdG8ge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fS5cbiAgICAgKiBAcGFyYW0ge251bWJlcj19IGVuZCBFbmQgb2Zmc2V0LCBkZWZhdWx0cyB0byB7QGxpbmsgQnl0ZUJ1ZmZlciNsaW1pdH0uXG4gICAgICogQHJldHVybnMgeyFCeXRlQnVmZmVyfSB0aGlzXG4gICAgICogQGV4cG9zZVxuICAgICAqIEBleGFtcGxlIGBzb21lQnl0ZUJ1ZmZlci5jbGVhcigpLmZpbGwoMClgIGZpbGxzIHRoZSBlbnRpcmUgYmFja2luZyBidWZmZXIgd2l0aCB6ZXJvZXNcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbih2YWx1ZSwgYmVnaW4sIGVuZCkge1xuICAgICAgICB2YXIgcmVsYXRpdmUgPSB0eXBlb2YgYmVnaW4gPT09ICd1bmRlZmluZWQnO1xuICAgICAgICBpZiAocmVsYXRpdmUpIGJlZ2luID0gdGhpcy5vZmZzZXQ7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmxlbmd0aCA+IDApXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIGlmICh0eXBlb2YgYmVnaW4gPT09ICd1bmRlZmluZWQnKSBiZWdpbiA9IHRoaXMub2Zmc2V0O1xuICAgICAgICBpZiAodHlwZW9mIGVuZCA9PT0gJ3VuZGVmaW5lZCcpIGVuZCA9IHRoaXMubGltaXQ7XG4gICAgICAgIGlmICghdGhpcy5ub0Fzc2VydCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicgfHwgdmFsdWUgJSAxICE9PSAwKVxuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgdmFsdWU6IFwiK3ZhbHVlK1wiIChub3QgYW4gaW50ZWdlcilcIik7XG4gICAgICAgICAgICB2YWx1ZSB8PSAwO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBiZWdpbiAhPT0gJ251bWJlcicgfHwgYmVnaW4gJSAxICE9PSAwKVxuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgYmVnaW46IE5vdCBhbiBpbnRlZ2VyXCIpO1xuICAgICAgICAgICAgYmVnaW4gPj4+PSAwO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbmQgIT09ICdudW1iZXInIHx8IGVuZCAlIDEgIT09IDApXG4gICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCBlbmQ6IE5vdCBhbiBpbnRlZ2VyXCIpO1xuICAgICAgICAgICAgZW5kID4+Pj0gMDtcbiAgICAgICAgICAgIGlmIChiZWdpbiA8IDAgfHwgYmVnaW4gPiBlbmQgfHwgZW5kID4gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCByYW5nZTogMCA8PSBcIitiZWdpbitcIiA8PSBcIitlbmQrXCIgPD0gXCIrdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJlZ2luID49IGVuZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzOyAvLyBOb3RoaW5nIHRvIGZpbGxcbiAgICAgICAgd2hpbGUgKGJlZ2luIDwgZW5kKSB0aGlzLnZpZXdbYmVnaW4rK10gPSB2YWx1ZTtcbiAgICAgICAgaWYgKHJlbGF0aXZlKSB0aGlzLm9mZnNldCA9IGJlZ2luO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTWFrZXMgdGhpcyBCeXRlQnVmZmVyIHJlYWR5IGZvciBhIG5ldyBzZXF1ZW5jZSBvZiB3cml0ZSBvciByZWxhdGl2ZSByZWFkIG9wZXJhdGlvbnMuIFNldHMgYGxpbWl0ID0gb2Zmc2V0YCBhbmRcbiAgICAgKiAgYG9mZnNldCA9IDBgLiBNYWtlIHN1cmUgYWx3YXlzIHRvIGZsaXAgYSBCeXRlQnVmZmVyIHdoZW4gYWxsIHJlbGF0aXZlIHJlYWQgb3Igd3JpdGUgb3BlcmF0aW9ucyBhcmUgY29tcGxldGUuXG4gICAgICogQHJldHVybnMgeyFCeXRlQnVmZmVyfSB0aGlzXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUuZmxpcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmxpbWl0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNYXJrcyBhbiBvZmZzZXQgb24gdGhpcyBCeXRlQnVmZmVyIHRvIGJlIHVzZWQgbGF0ZXIuXG4gICAgICogQHBhcmFtIHtudW1iZXI9fSBvZmZzZXQgT2Zmc2V0IHRvIG1hcmsuIERlZmF1bHRzIHRvIHtAbGluayBCeXRlQnVmZmVyI29mZnNldH0uXG4gICAgICogQHJldHVybnMgeyFCeXRlQnVmZmVyfSB0aGlzXG4gICAgICogQHRocm93cyB7VHlwZUVycm9yfSBJZiBgb2Zmc2V0YCBpcyBub3QgYSB2YWxpZCBudW1iZXJcbiAgICAgKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBJZiBgb2Zmc2V0YCBpcyBvdXQgb2YgYm91bmRzXG4gICAgICogQHNlZSBCeXRlQnVmZmVyI3Jlc2V0XG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUubWFyayA9IGZ1bmN0aW9uKG9mZnNldCkge1xuICAgICAgICBvZmZzZXQgPSB0eXBlb2Ygb2Zmc2V0ID09PSAndW5kZWZpbmVkJyA/IHRoaXMub2Zmc2V0IDogb2Zmc2V0O1xuICAgICAgICBpZiAoIXRoaXMubm9Bc3NlcnQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ICE9PSAnbnVtYmVyJyB8fCBvZmZzZXQgJSAxICE9PSAwKVxuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgb2Zmc2V0OiBcIitvZmZzZXQrXCIgKG5vdCBhbiBpbnRlZ2VyKVwiKTtcbiAgICAgICAgICAgIG9mZnNldCA+Pj49IDA7XG4gICAgICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyAwID4gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IDAgPD0gXCIrb2Zmc2V0K1wiICgrXCIrMCtcIikgPD0gXCIrdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXJrZWRPZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYnl0ZSBvcmRlci5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxpdHRsZUVuZGlhbiBgdHJ1ZWAgZm9yIGxpdHRsZSBlbmRpYW4gYnl0ZSBvcmRlciwgYGZhbHNlYCBmb3IgYmlnIGVuZGlhblxuICAgICAqIEByZXR1cm5zIHshQnl0ZUJ1ZmZlcn0gdGhpc1xuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLm9yZGVyID0gZnVuY3Rpb24obGl0dGxlRW5kaWFuKSB7XG4gICAgICAgIGlmICghdGhpcy5ub0Fzc2VydCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXR0bGVFbmRpYW4gIT09ICdib29sZWFuJylcbiAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbGxlZ2FsIGxpdHRsZUVuZGlhbjogTm90IGEgYm9vbGVhblwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpdHRsZUVuZGlhbiA9ICEhbGl0dGxlRW5kaWFuO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3dpdGNoZXMgKHRvKSBsaXR0bGUgZW5kaWFuIGJ5dGUgb3JkZXIuXG4gICAgICogQHBhcmFtIHtib29sZWFuPX0gbGl0dGxlRW5kaWFuIERlZmF1bHRzIHRvIGB0cnVlYCwgb3RoZXJ3aXNlIHVzZXMgYmlnIGVuZGlhblxuICAgICAqIEByZXR1cm5zIHshQnl0ZUJ1ZmZlcn0gdGhpc1xuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLkxFID0gZnVuY3Rpb24obGl0dGxlRW5kaWFuKSB7XG4gICAgICAgIHRoaXMubGl0dGxlRW5kaWFuID0gdHlwZW9mIGxpdHRsZUVuZGlhbiAhPT0gJ3VuZGVmaW5lZCcgPyAhIWxpdHRsZUVuZGlhbiA6IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTd2l0Y2hlcyAodG8pIGJpZyBlbmRpYW4gYnl0ZSBvcmRlci5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBiaWdFbmRpYW4gRGVmYXVsdHMgdG8gYHRydWVgLCBvdGhlcndpc2UgdXNlcyBsaXR0bGUgZW5kaWFuXG4gICAgICogQHJldHVybnMgeyFCeXRlQnVmZmVyfSB0aGlzXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUuQkUgPSBmdW5jdGlvbihiaWdFbmRpYW4pIHtcbiAgICAgICAgdGhpcy5saXR0bGVFbmRpYW4gPSB0eXBlb2YgYmlnRW5kaWFuICE9PSAndW5kZWZpbmVkJyA/ICFiaWdFbmRpYW4gOiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQcmVwZW5kcyBzb21lIGRhdGEgdG8gdGhpcyBCeXRlQnVmZmVyLiBUaGlzIHdpbGwgb3ZlcndyaXRlIGFueSBjb250ZW50cyBiZWZvcmUgdGhlIHNwZWNpZmllZCBvZmZzZXQgdXAgdG8gdGhlXG4gICAgICogIHByZXBlbmRlZCBkYXRhJ3MgbGVuZ3RoLiBJZiB0aGVyZSBpcyBub3QgZW5vdWdoIHNwYWNlIGF2YWlsYWJsZSBiZWZvcmUgdGhlIHNwZWNpZmllZCBgb2Zmc2V0YCwgdGhlIGJhY2tpbmcgYnVmZmVyXG4gICAgICogIHdpbGwgYmUgcmVzaXplZCBhbmQgaXRzIGNvbnRlbnRzIG1vdmVkIGFjY29yZGluZ2x5LlxuICAgICAqIEBwYXJhbSB7IUJ5dGVCdWZmZXJ8c3RyaW5nfCFBcnJheUJ1ZmZlcn0gc291cmNlIERhdGEgdG8gcHJlcGVuZC4gSWYgYHNvdXJjZWAgaXMgYSBCeXRlQnVmZmVyLCBpdHMgb2Zmc2V0IHdpbGwgYmVcbiAgICAgKiAgbW9kaWZpZWQgYWNjb3JkaW5nIHRvIHRoZSBwZXJmb3JtZWQgcmVhZCBvcGVyYXRpb24uXG4gICAgICogQHBhcmFtIHsoc3RyaW5nfG51bWJlcik9fSBlbmNvZGluZyBFbmNvZGluZyBpZiBgZGF0YWAgaXMgYSBzdHJpbmcgKFwiYmFzZTY0XCIsIFwiaGV4XCIsIFwiYmluYXJ5XCIsIGRlZmF1bHRzIHRvIFwidXRmOFwiKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb2Zmc2V0IE9mZnNldCB0byBwcmVwZW5kIGF0LiBXaWxsIHVzZSBhbmQgZGVjcmVhc2Uge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBieSB0aGUgbnVtYmVyIG9mIGJ5dGVzXG4gICAgICogIHByZXBlbmRlZCBpZiBvbWl0dGVkLlxuICAgICAqIEByZXR1cm5zIHshQnl0ZUJ1ZmZlcn0gdGhpc1xuICAgICAqIEBleHBvc2VcbiAgICAgKiBAZXhhbXBsZSBBIHJlbGF0aXZlIGAwMDwwMSAwMiAwMz4ucHJlcGVuZCg8MDQgMDU+KWAgcmVzdWx0cyBpbiBgPDA0IDA1IDAxIDAyIDAzPiwgMDQgMDV8YFxuICAgICAqIEBleGFtcGxlIEFuIGFic29sdXRlIGAwMDwwMSAwMiAwMz4ucHJlcGVuZCg8MDQgMDU+LCAyKWAgcmVzdWx0cyBpbiBgMDQ8MDUgMDIgMDM+LCAwNCAwNXxgXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS5wcmVwZW5kID0gZnVuY3Rpb24oc291cmNlLCBlbmNvZGluZywgb2Zmc2V0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdudW1iZXInIHx8IHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IGVuY29kaW5nO1xuICAgICAgICAgICAgZW5jb2RpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlbGF0aXZlID0gdHlwZW9mIG9mZnNldCA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIGlmIChyZWxhdGl2ZSkgb2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICAgIGlmICghdGhpcy5ub0Fzc2VydCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvZmZzZXQgIT09ICdudW1iZXInIHx8IG9mZnNldCAlIDEgIT09IDApXG4gICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCBvZmZzZXQ6IFwiK29mZnNldCtcIiAobm90IGFuIGludGVnZXIpXCIpO1xuICAgICAgICAgICAgb2Zmc2V0ID4+Pj0gMDtcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCArIDAgPiB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKVxuICAgICAgICAgICAgICAgIHRocm93IFJhbmdlRXJyb3IoXCJJbGxlZ2FsIG9mZnNldDogMCA8PSBcIitvZmZzZXQrXCIgKCtcIiswK1wiKSA8PSBcIit0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShzb3VyY2UgaW5zdGFuY2VvZiBCeXRlQnVmZmVyKSlcbiAgICAgICAgICAgIHNvdXJjZSA9IEJ5dGVCdWZmZXIud3JhcChzb3VyY2UsIGVuY29kaW5nKTtcbiAgICAgICAgdmFyIGxlbiA9IHNvdXJjZS5saW1pdCAtIHNvdXJjZS5vZmZzZXQ7XG4gICAgICAgIGlmIChsZW4gPD0gMCkgcmV0dXJuIHRoaXM7IC8vIE5vdGhpbmcgdG8gcHJlcGVuZFxuICAgICAgICB2YXIgZGlmZiA9IGxlbiAtIG9mZnNldDtcbiAgICAgICAgaWYgKGRpZmYgPiAwKSB7IC8vIE5vdCBlbm91Z2ggc3BhY2UgYmVmb3JlIG9mZnNldCwgc28gcmVzaXplICsgbW92ZVxuICAgICAgICAgICAgdmFyIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcih0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoICsgZGlmZik7XG4gICAgICAgICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgICAgICAgICB2aWV3LnNldCh0aGlzLnZpZXcuc3ViYXJyYXkob2Zmc2V0LCB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKSwgbGVuKTtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ICs9IGRpZmY7XG4gICAgICAgICAgICBpZiAodGhpcy5tYXJrZWRPZmZzZXQgPj0gMCkgdGhpcy5tYXJrZWRPZmZzZXQgKz0gZGlmZjtcbiAgICAgICAgICAgIHRoaXMubGltaXQgKz0gZGlmZjtcbiAgICAgICAgICAgIG9mZnNldCArPSBkaWZmO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGFycmF5VmlldyA9IG5ldyBVaW50OEFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpZXcuc2V0KHNvdXJjZS52aWV3LnN1YmFycmF5KHNvdXJjZS5vZmZzZXQsIHNvdXJjZS5saW1pdCksIG9mZnNldCAtIGxlbik7XG5cbiAgICAgICAgc291cmNlLm9mZnNldCA9IHNvdXJjZS5saW1pdDtcbiAgICAgICAgaWYgKHJlbGF0aXZlKVxuICAgICAgICAgICAgdGhpcy5vZmZzZXQgLT0gbGVuO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJlcGVuZHMgdGhpcyBCeXRlQnVmZmVyIHRvIGFub3RoZXIgQnl0ZUJ1ZmZlci4gVGhpcyB3aWxsIG92ZXJ3cml0ZSBhbnkgY29udGVudHMgYmVmb3JlIHRoZSBzcGVjaWZpZWQgb2Zmc2V0IHVwIHRvIHRoZVxuICAgICAqICBwcmVwZW5kZWQgZGF0YSdzIGxlbmd0aC4gSWYgdGhlcmUgaXMgbm90IGVub3VnaCBzcGFjZSBhdmFpbGFibGUgYmVmb3JlIHRoZSBzcGVjaWZpZWQgYG9mZnNldGAsIHRoZSBiYWNraW5nIGJ1ZmZlclxuICAgICAqICB3aWxsIGJlIHJlc2l6ZWQgYW5kIGl0cyBjb250ZW50cyBtb3ZlZCBhY2NvcmRpbmdseS5cbiAgICAgKiBAcGFyYW0geyFCeXRlQnVmZmVyfSB0YXJnZXQgVGFyZ2V0IEJ5dGVCdWZmZXJcbiAgICAgKiBAcGFyYW0ge251bWJlcj19IG9mZnNldCBPZmZzZXQgdG8gcHJlcGVuZCBhdC4gV2lsbCB1c2UgYW5kIGRlY3JlYXNlIHtAbGluayBCeXRlQnVmZmVyI29mZnNldH0gYnkgdGhlIG51bWJlciBvZiBieXRlc1xuICAgICAqICBwcmVwZW5kZWQgaWYgb21pdHRlZC5cbiAgICAgKiBAcmV0dXJucyB7IUJ5dGVCdWZmZXJ9IHRoaXNcbiAgICAgKiBAZXhwb3NlXG4gICAgICogQHNlZSBCeXRlQnVmZmVyI3ByZXBlbmRcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLnByZXBlbmRUbyA9IGZ1bmN0aW9uKHRhcmdldCwgb2Zmc2V0KSB7XG4gICAgICAgIHRhcmdldC5wcmVwZW5kKHRoaXMsIG9mZnNldCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUHJpbnRzIGRlYnVnIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgQnl0ZUJ1ZmZlcidzIGNvbnRlbnRzLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nKT19IG91dCBPdXRwdXQgZnVuY3Rpb24gdG8gY2FsbCwgZGVmYXVsdHMgdG8gY2MubG9nXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUucHJpbnREZWJ1ZyA9IGZ1bmN0aW9uKG91dCkge1xuICAgICAgICBpZiAodHlwZW9mIG91dCAhPT0gJ2Z1bmN0aW9uJykgb3V0ID0gY2MubG9nLmJpbmQoY29uc29sZSk7XG4gICAgICAgIG91dChcbiAgICAgICAgICAgIHRoaXMudG9TdHJpbmcoKStcIlxcblwiK1xuICAgICAgICAgICAgXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXCIrXG4gICAgICAgICAgICB0aGlzLnRvRGVidWcoLyogY29sdW1ucyAqLyB0cnVlKVxuICAgICAgICApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBudW1iZXIgb2YgcmVtYWluaW5nIHJlYWRhYmxlIGJ5dGVzLiBDb250ZW50cyBhcmUgdGhlIGJ5dGVzIGJldHdlZW4ge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBhbmRcbiAgICAgKiAge0BsaW5rIEJ5dGVCdWZmZXIjbGltaXR9LCBzbyB0aGlzIHJldHVybnMgYGxpbWl0IC0gb2Zmc2V0YC5cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBSZW1haW5pbmcgcmVhZGFibGUgYnl0ZXMuIE1heSBiZSBuZWdhdGl2ZSBpZiBgb2Zmc2V0ID4gbGltaXRgLlxuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLnJlbWFpbmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saW1pdCAtIHRoaXMub2Zmc2V0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoaXMgQnl0ZUJ1ZmZlcidzIHtAbGluayBCeXRlQnVmZmVyI29mZnNldH0uIElmIGFuIG9mZnNldCBoYXMgYmVlbiBtYXJrZWQgdGhyb3VnaCB7QGxpbmsgQnl0ZUJ1ZmZlciNtYXJrfVxuICAgICAqICBiZWZvcmUsIGBvZmZzZXRgIHdpbGwgYmUgc2V0IHRvIHtAbGluayBCeXRlQnVmZmVyI21hcmtlZE9mZnNldH0sIHdoaWNoIHdpbGwgdGhlbiBiZSBkaXNjYXJkZWQuIElmIG5vIG9mZnNldCBoYXMgYmVlblxuICAgICAqICBtYXJrZWQsIHNldHMgYG9mZnNldCA9IDBgLlxuICAgICAqIEByZXR1cm5zIHshQnl0ZUJ1ZmZlcn0gdGhpc1xuICAgICAqIEBzZWUgQnl0ZUJ1ZmZlciNtYXJrXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMubWFya2VkT2Zmc2V0ID49IDApIHtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5tYXJrZWRPZmZzZXQ7XG4gICAgICAgICAgICB0aGlzLm1hcmtlZE9mZnNldCA9IC0xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVzaXplcyB0aGlzIEJ5dGVCdWZmZXIgdG8gYmUgYmFja2VkIGJ5IGEgYnVmZmVyIG9mIGF0IGxlYXN0IHRoZSBnaXZlbiBjYXBhY2l0eS4gV2lsbCBkbyBub3RoaW5nIGlmIGFscmVhZHkgdGhhdFxuICAgICAqICBsYXJnZSBvciBsYXJnZXIuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhcGFjaXR5IENhcGFjaXR5IHJlcXVpcmVkXG4gICAgICogQHJldHVybnMgeyFCeXRlQnVmZmVyfSB0aGlzXG4gICAgICogQHRocm93cyB7VHlwZUVycm9yfSBJZiBgY2FwYWNpdHlgIGlzIG5vdCBhIG51bWJlclxuICAgICAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IElmIGBjYXBhY2l0eSA8IDBgXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oY2FwYWNpdHkpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5vQXNzZXJ0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhcGFjaXR5ICE9PSAnbnVtYmVyJyB8fCBjYXBhY2l0eSAlIDEgIT09IDApXG4gICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCBjYXBhY2l0eTogXCIrY2FwYWNpdHkrXCIgKG5vdCBhbiBpbnRlZ2VyKVwiKTtcbiAgICAgICAgICAgIGNhcGFjaXR5IHw9IDA7XG4gICAgICAgICAgICBpZiAoY2FwYWNpdHkgPCAwKVxuICAgICAgICAgICAgICAgIHRocm93IFJhbmdlRXJyb3IoXCJJbGxlZ2FsIGNhcGFjaXR5OiAwIDw9IFwiK2NhcGFjaXR5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5idWZmZXIuYnl0ZUxlbmd0aCA8IGNhcGFjaXR5KSB7XG4gICAgICAgICAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGNhcGFjaXR5KTtcbiAgICAgICAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgICAgIHZpZXcuc2V0KHRoaXMudmlldyk7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXZlcnNlcyB0aGlzIEJ5dGVCdWZmZXIncyBjb250ZW50cy5cbiAgICAgKiBAcGFyYW0ge251bWJlcj19IGJlZ2luIE9mZnNldCB0byBzdGFydCBhdCwgZGVmYXVsdHMgdG8ge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fVxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gZW5kIE9mZnNldCB0byBlbmQgYXQsIGRlZmF1bHRzIHRvIHtAbGluayBCeXRlQnVmZmVyI2xpbWl0fVxuICAgICAqIEByZXR1cm5zIHshQnl0ZUJ1ZmZlcn0gdGhpc1xuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbihiZWdpbiwgZW5kKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYmVnaW4gPT09ICd1bmRlZmluZWQnKSBiZWdpbiA9IHRoaXMub2Zmc2V0O1xuICAgICAgICBpZiAodHlwZW9mIGVuZCA9PT0gJ3VuZGVmaW5lZCcpIGVuZCA9IHRoaXMubGltaXQ7XG4gICAgICAgIGlmICghdGhpcy5ub0Fzc2VydCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBiZWdpbiAhPT0gJ251bWJlcicgfHwgYmVnaW4gJSAxICE9PSAwKVxuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgYmVnaW46IE5vdCBhbiBpbnRlZ2VyXCIpO1xuICAgICAgICAgICAgYmVnaW4gPj4+PSAwO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbmQgIT09ICdudW1iZXInIHx8IGVuZCAlIDEgIT09IDApXG4gICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCBlbmQ6IE5vdCBhbiBpbnRlZ2VyXCIpO1xuICAgICAgICAgICAgZW5kID4+Pj0gMDtcbiAgICAgICAgICAgIGlmIChiZWdpbiA8IDAgfHwgYmVnaW4gPiBlbmQgfHwgZW5kID4gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCByYW5nZTogMCA8PSBcIitiZWdpbitcIiA8PSBcIitlbmQrXCIgPD0gXCIrdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJlZ2luID09PSBlbmQpXG4gICAgICAgICAgICByZXR1cm4gdGhpczsgLy8gTm90aGluZyB0byByZXZlcnNlXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5yZXZlcnNlLmNhbGwodGhpcy52aWV3LnN1YmFycmF5KGJlZ2luLCBlbmQpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTa2lwcyB0aGUgbmV4dCBgbGVuZ3RoYCBieXRlcy4gVGhpcyB3aWxsIGp1c3QgYWR2YW5jZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggTnVtYmVyIG9mIGJ5dGVzIHRvIHNraXAuIE1heSBhbHNvIGJlIG5lZ2F0aXZlIHRvIG1vdmUgdGhlIG9mZnNldCBiYWNrLlxuICAgICAqIEByZXR1cm5zIHshQnl0ZUJ1ZmZlcn0gdGhpc1xuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLnNraXAgPSBmdW5jdGlvbihsZW5ndGgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5vQXNzZXJ0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGxlbmd0aCAhPT0gJ251bWJlcicgfHwgbGVuZ3RoICUgMSAhPT0gMClcbiAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbGxlZ2FsIGxlbmd0aDogXCIrbGVuZ3RoK1wiIChub3QgYW4gaW50ZWdlcilcIik7XG4gICAgICAgICAgICBsZW5ndGggfD0gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5vZmZzZXQgKyBsZW5ndGg7XG4gICAgICAgIGlmICghdGhpcy5ub0Fzc2VydCkge1xuICAgICAgICAgICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ID4gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCBsZW5ndGg6IDAgPD0gXCIrdGhpcy5vZmZzZXQrXCIgKyBcIitsZW5ndGgrXCIgPD0gXCIrdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTbGljZXMgdGhpcyBCeXRlQnVmZmVyIGJ5IGNyZWF0aW5nIGEgY2xvbmVkIGluc3RhbmNlIHdpdGggYG9mZnNldCA9IGJlZ2luYCBhbmQgYGxpbWl0ID0gZW5kYC5cbiAgICAgKiBAcGFyYW0ge251bWJlcj19IGJlZ2luIEJlZ2luIG9mZnNldCwgZGVmYXVsdHMgdG8ge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fS5cbiAgICAgKiBAcGFyYW0ge251bWJlcj19IGVuZCBFbmQgb2Zmc2V0LCBkZWZhdWx0cyB0byB7QGxpbmsgQnl0ZUJ1ZmZlciNsaW1pdH0uXG4gICAgICogQHJldHVybnMgeyFCeXRlQnVmZmVyfSBDbG9uZSBvZiB0aGlzIEJ5dGVCdWZmZXIgd2l0aCBzbGljaW5nIGFwcGxpZWQsIGJhY2tlZCBieSB0aGUgc2FtZSB7QGxpbmsgQnl0ZUJ1ZmZlciNidWZmZXJ9XG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbihiZWdpbiwgZW5kKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYmVnaW4gPT09ICd1bmRlZmluZWQnKSBiZWdpbiA9IHRoaXMub2Zmc2V0O1xuICAgICAgICBpZiAodHlwZW9mIGVuZCA9PT0gJ3VuZGVmaW5lZCcpIGVuZCA9IHRoaXMubGltaXQ7XG4gICAgICAgIGlmICghdGhpcy5ub0Fzc2VydCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBiZWdpbiAhPT0gJ251bWJlcicgfHwgYmVnaW4gJSAxICE9PSAwKVxuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgYmVnaW46IE5vdCBhbiBpbnRlZ2VyXCIpO1xuICAgICAgICAgICAgYmVnaW4gPj4+PSAwO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbmQgIT09ICdudW1iZXInIHx8IGVuZCAlIDEgIT09IDApXG4gICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCBlbmQ6IE5vdCBhbiBpbnRlZ2VyXCIpO1xuICAgICAgICAgICAgZW5kID4+Pj0gMDtcbiAgICAgICAgICAgIGlmIChiZWdpbiA8IDAgfHwgYmVnaW4gPiBlbmQgfHwgZW5kID4gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCByYW5nZTogMCA8PSBcIitiZWdpbitcIiA8PSBcIitlbmQrXCIgPD0gXCIrdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJiID0gdGhpcy5jbG9uZSgpO1xuICAgICAgICBiYi5vZmZzZXQgPSBiZWdpbjtcbiAgICAgICAgYmIubGltaXQgPSBlbmQ7XG4gICAgICAgIHJldHVybiBiYjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBjb3B5IG9mIHRoZSBiYWNraW5nIGJ1ZmZlciB0aGF0IGNvbnRhaW5zIHRoaXMgQnl0ZUJ1ZmZlcidzIGNvbnRlbnRzLiBDb250ZW50cyBhcmUgdGhlIGJ5dGVzIGJldHdlZW5cbiAgICAgKiAge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBhbmQge0BsaW5rIEJ5dGVCdWZmZXIjbGltaXR9LlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlQ29weSBJZiBgdHJ1ZWAgcmV0dXJucyBhIGNvcHksIG90aGVyd2lzZSByZXR1cm5zIGEgdmlldyByZWZlcmVuY2luZyB0aGUgc2FtZSBtZW1vcnkgaWZcbiAgICAgKiAgcG9zc2libGUuIERlZmF1bHRzIHRvIGBmYWxzZWBcbiAgICAgKiBAcmV0dXJucyB7IUFycmF5QnVmZmVyfSBDb250ZW50cyBhcyBhbiBBcnJheUJ1ZmZlclxuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLnRvQnVmZmVyID0gZnVuY3Rpb24oZm9yY2VDb3B5KSB7XG4gICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLm9mZnNldCxcbiAgICAgICAgICAgIGxpbWl0ID0gdGhpcy5saW1pdDtcbiAgICAgICAgaWYgKCF0aGlzLm5vQXNzZXJ0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9mZnNldCAhPT0gJ251bWJlcicgfHwgb2Zmc2V0ICUgMSAhPT0gMClcbiAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbGxlZ2FsIG9mZnNldDogTm90IGFuIGludGVnZXJcIik7XG4gICAgICAgICAgICBvZmZzZXQgPj4+PSAwO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaW1pdCAhPT0gJ251bWJlcicgfHwgbGltaXQgJSAxICE9PSAwKVxuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgbGltaXQ6IE5vdCBhbiBpbnRlZ2VyXCIpO1xuICAgICAgICAgICAgbGltaXQgPj4+PSAwO1xuICAgICAgICAgICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ID4gbGltaXQgfHwgbGltaXQgPiB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKVxuICAgICAgICAgICAgICAgIHRocm93IFJhbmdlRXJyb3IoXCJJbGxlZ2FsIHJhbmdlOiAwIDw9IFwiK29mZnNldCtcIiA8PSBcIitsaW1pdCtcIiA8PSBcIit0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBOT1RFOiBJdCdzIG5vdCBwb3NzaWJsZSB0byBoYXZlIGFub3RoZXIgQXJyYXlCdWZmZXIgcmVmZXJlbmNlIHRoZSBzYW1lIG1lbW9yeSBhcyB0aGUgYmFja2luZyBidWZmZXIuIFRoaXMgaXNcbiAgICAgICAgLy8gcG9zc2libGUgd2l0aCBVaW50OEFycmF5I3N1YmFycmF5IG9ubHksIGJ1dCB3ZSBoYXZlIHRvIHJldHVybiBhbiBBcnJheUJ1ZmZlciBieSBjb250cmFjdC4gU286XG4gICAgICAgIGlmICghZm9yY2VDb3B5ICYmIG9mZnNldCA9PT0gMCAmJiBsaW1pdCA9PT0gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1ZmZlcjtcbiAgICAgICAgaWYgKG9mZnNldCA9PT0gbGltaXQpXG4gICAgICAgICAgICByZXR1cm4gRU1QVFlfQlVGRkVSO1xuICAgICAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGxpbWl0IC0gb2Zmc2V0KTtcbiAgICAgICAgbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKS5zZXQobmV3IFVpbnQ4QXJyYXkodGhpcy5idWZmZXIpLnN1YmFycmF5KG9mZnNldCwgbGltaXQpLCAwKTtcbiAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHJhdyBidWZmZXIgY29tcGFjdGVkIHRvIGNvbnRhaW4gdGhpcyBCeXRlQnVmZmVyJ3MgY29udGVudHMuIENvbnRlbnRzIGFyZSB0aGUgYnl0ZXMgYmV0d2VlblxuICAgICAqICB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9IGFuZCB7QGxpbmsgQnl0ZUJ1ZmZlciNsaW1pdH0uIFRoaXMgaXMgYW4gYWxpYXMgb2Yge0BsaW5rIEJ5dGVCdWZmZXIjdG9CdWZmZXJ9LlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlQ29weSBJZiBgdHJ1ZWAgcmV0dXJucyBhIGNvcHksIG90aGVyd2lzZSByZXR1cm5zIGEgdmlldyByZWZlcmVuY2luZyB0aGUgc2FtZSBtZW1vcnkuXG4gICAgICogIERlZmF1bHRzIHRvIGBmYWxzZWBcbiAgICAgKiBAcmV0dXJucyB7IUFycmF5QnVmZmVyfSBDb250ZW50cyBhcyBhbiBBcnJheUJ1ZmZlclxuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLnRvQXJyYXlCdWZmZXIgPSBCeXRlQnVmZmVyUHJvdG90eXBlLnRvQnVmZmVyO1xuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgdGhlIEJ5dGVCdWZmZXIncyBjb250ZW50cyB0byBhIHN0cmluZy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZz19IGVuY29kaW5nIE91dHB1dCBlbmNvZGluZy4gUmV0dXJucyBhbiBpbmZvcm1hdGl2ZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gaWYgb21pdHRlZCBidXQgYWxzbyBhbGxvd3NcbiAgICAgKiAgZGlyZWN0IGNvbnZlcnNpb24gdG8gXCJ1dGY4XCIsIFwiaGV4XCIsIFwiYmFzZTY0XCIgYW5kIFwiYmluYXJ5XCIgZW5jb2RpbmcuIFwiZGVidWdcIiByZXR1cm5zIGEgaGV4IHJlcHJlc2VudGF0aW9uIHdpdGhcbiAgICAgKiAgaGlnaGxpZ2h0ZWQgb2Zmc2V0cy5cbiAgICAgKiBAcGFyYW0ge251bWJlcj19IGJlZ2luIE9mZnNldCB0byBiZWdpbiBhdCwgZGVmYXVsdHMgdG8ge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fVxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gZW5kIE9mZnNldCB0byBlbmQgYXQsIGRlZmF1bHRzIHRvIHtAbGluayBCeXRlQnVmZmVyI2xpbWl0fVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFN0cmluZyByZXByZXNlbnRhdGlvblxuICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiBgZW5jb2RpbmdgIGlzIGludmFsaWRcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKGVuY29kaW5nLCBiZWdpbiwgZW5kKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgcmV0dXJuIFwiQnl0ZUJ1ZmZlckFCKG9mZnNldD1cIit0aGlzLm9mZnNldCtcIixtYXJrZWRPZmZzZXQ9XCIrdGhpcy5tYXJrZWRPZmZzZXQrXCIsbGltaXQ9XCIrdGhpcy5saW1pdCtcIixjYXBhY2l0eT1cIit0aGlzLmNhcGFjaXR5KCkrXCIpXCI7XG4gICAgICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdudW1iZXInKVxuICAgICAgICAgICAgZW5jb2RpbmcgPSBcInV0ZjhcIixcbiAgICAgICAgICAgIGJlZ2luID0gZW5jb2RpbmcsXG4gICAgICAgICAgICBlbmQgPSBiZWdpbjtcbiAgICAgICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgICAgICAgY2FzZSBcInV0ZjhcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1VURjgoYmVnaW4sIGVuZCk7XG4gICAgICAgICAgICBjYXNlIFwiYmFzZTY0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9CYXNlNjQoYmVnaW4sIGVuZCk7XG4gICAgICAgICAgICBjYXNlIFwiaGV4XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9IZXgoYmVnaW4sIGVuZCk7XG4gICAgICAgICAgICBjYXNlIFwiYmluYXJ5XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9CaW5hcnkoYmVnaW4sIGVuZCk7XG4gICAgICAgICAgICBjYXNlIFwiZGVidWdcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b0RlYnVnKCk7XG4gICAgICAgICAgICBjYXNlIFwiY29sdW1uc1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvQ29sdW1ucygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlVuc3VwcG9ydGVkIGVuY29kaW5nOiBcIitlbmNvZGluZyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gbHhpdi1lbWJlZGRhYmxlXG5cbiAgICAvKipcbiAgICAgKiBseGl2LWVtYmVkZGFibGUgKGMpIDIwMTQgRGFuaWVsIFdpcnR6IDxkY29kZUBkY29kZS5pbz5cbiAgICAgKiBSZWxlYXNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wXG4gICAgICogc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGNvZGVJTy9seGl2IGZvciBkZXRhaWxzXG4gICAgICovXG4gICAgdmFyIGx4aXYgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGx4aXYgbmFtZXNwYWNlLlxuICAgICAgICAgKiBAdHlwZSB7IU9iamVjdC48c3RyaW5nLCo+fVxuICAgICAgICAgKiBAZXhwb3J0cyBseGl2XG4gICAgICAgICAqL1xuICAgICAgICB2YXIgbHhpdiA9IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGFyYWN0ZXIgY29kZXMgZm9yIG91dHB1dC5cbiAgICAgICAgICogQHR5cGUgeyFBcnJheS48bnVtYmVyPn1cbiAgICAgICAgICogQGlubmVyXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgYW91dCA9IFtcbiAgICAgICAgICAgIDY1LCA2NiwgNjcsIDY4LCA2OSwgNzAsIDcxLCA3MiwgNzMsIDc0LCA3NSwgNzYsIDc3LCA3OCwgNzksIDgwLFxuICAgICAgICAgICAgODEsIDgyLCA4MywgODQsIDg1LCA4NiwgODcsIDg4LCA4OSwgOTAsIDk3LCA5OCwgOTksIDEwMCwgMTAxLCAxMDIsXG4gICAgICAgICAgICAxMDMsIDEwNCwgMTA1LCAxMDYsIDEwNywgMTA4LCAxMDksIDExMCwgMTExLCAxMTIsIDExMywgMTE0LCAxMTUsIDExNiwgMTE3LCAxMTgsXG4gICAgICAgICAgICAxMTksIDEyMCwgMTIxLCAxMjIsIDQ4LCA0OSwgNTAsIDUxLCA1MiwgNTMsIDU0LCA1NSwgNTYsIDU3LCA0MywgNDdcbiAgICAgICAgXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hhcmFjdGVyIGNvZGVzIGZvciBpbnB1dC5cbiAgICAgICAgICogQHR5cGUgeyFBcnJheS48bnVtYmVyPn1cbiAgICAgICAgICogQGlubmVyXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgYWluID0gW107XG4gICAgICAgIGZvciAodmFyIGk9MCwgaz1hb3V0Lmxlbmd0aDsgaTxrOyArK2kpXG4gICAgICAgICAgICBhaW5bYW91dFtpXV0gPSBpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmNvZGVzIGJ5dGVzIHRvIGJhc2U2NCBjaGFyIGNvZGVzLlxuICAgICAgICAgKiBAcGFyYW0geyFmdW5jdGlvbigpOm51bWJlcnxudWxsfSBzcmMgQnl0ZXMgc291cmNlIGFzIGEgZnVuY3Rpb24gcmV0dXJuaW5nIHRoZSBuZXh0IGJ5dGUgcmVzcGVjdGl2ZWx5IGBudWxsYCBpZlxuICAgICAgICAgKiAgdGhlcmUgYXJlIG5vIG1vcmUgYnl0ZXMgbGVmdC5cbiAgICAgICAgICogQHBhcmFtIHshZnVuY3Rpb24obnVtYmVyKX0gZHN0IENoYXJhY3RlcnMgZGVzdGluYXRpb24gYXMgYSBmdW5jdGlvbiBzdWNjZXNzaXZlbHkgY2FsbGVkIHdpdGggZWFjaCBlbmNvZGVkIGNoYXJcbiAgICAgICAgICogIGNvZGUuXG4gICAgICAgICAqL1xuICAgICAgICBseGl2LmVuY29kZSA9IGZ1bmN0aW9uKHNyYywgZHN0KSB7XG4gICAgICAgICAgICB2YXIgYiwgdDtcbiAgICAgICAgICAgIHdoaWxlICgoYiA9IHNyYygpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRzdChhb3V0WyhiPj4yKSYweDNmXSk7XG4gICAgICAgICAgICAgICAgdCA9IChiJjB4Myk8PDQ7XG4gICAgICAgICAgICAgICAgaWYgKChiID0gc3JjKCkpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHQgfD0gKGI+PjQpJjB4ZjtcbiAgICAgICAgICAgICAgICAgICAgZHN0KGFvdXRbKHR8KChiPj40KSYweGYpKSYweDNmXSk7XG4gICAgICAgICAgICAgICAgICAgIHQgPSAoYiYweGYpPDwyO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGIgPSBzcmMoKSkgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICBkc3QoYW91dFsodHwoKGI+PjYpJjB4MykpJjB4M2ZdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRzdChhb3V0W2ImMHgzZl0pO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBkc3QoYW91dFt0JjB4M2ZdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRzdCg2MSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGRzdChhb3V0W3QmMHgzZl0pLFxuICAgICAgICAgICAgICAgICAgICBkc3QoNjEpLFxuICAgICAgICAgICAgICAgICAgICBkc3QoNjEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWNvZGVzIGJhc2U2NCBjaGFyIGNvZGVzIHRvIGJ5dGVzLlxuICAgICAgICAgKiBAcGFyYW0geyFmdW5jdGlvbigpOm51bWJlcnxudWxsfSBzcmMgQ2hhcmFjdGVycyBzb3VyY2UgYXMgYSBmdW5jdGlvbiByZXR1cm5pbmcgdGhlIG5leHQgY2hhciBjb2RlIHJlc3BlY3RpdmVseVxuICAgICAgICAgKiAgYG51bGxgIGlmIHRoZXJlIGFyZSBubyBtb3JlIGNoYXJhY3RlcnMgbGVmdC5cbiAgICAgICAgICogQHBhcmFtIHshZnVuY3Rpb24obnVtYmVyKX0gZHN0IEJ5dGVzIGRlc3RpbmF0aW9uIGFzIGEgZnVuY3Rpb24gc3VjY2Vzc2l2ZWx5IGNhbGxlZCB3aXRoIHRoZSBuZXh0IGJ5dGUuXG4gICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiBhIGNoYXJhY3RlciBjb2RlIGlzIGludmFsaWRcbiAgICAgICAgICovXG4gICAgICAgIGx4aXYuZGVjb2RlID0gZnVuY3Rpb24oc3JjLCBkc3QpIHtcbiAgICAgICAgICAgIHZhciBjLCB0MSwgdDI7XG4gICAgICAgICAgICBmdW5jdGlvbiBmYWlsKGMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIklsbGVnYWwgY2hhcmFjdGVyIGNvZGU6IFwiK2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKChjID0gc3JjKCkpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdDEgPSBhaW5bY107XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0MSA9PT0gJ3VuZGVmaW5lZCcpIGZhaWwoYyk7XG4gICAgICAgICAgICAgICAgaWYgKChjID0gc3JjKCkpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHQyID0gYWluW2NdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHQyID09PSAndW5kZWZpbmVkJykgZmFpbChjKTtcbiAgICAgICAgICAgICAgICAgICAgZHN0KCh0MTw8Mik+Pj4wfCh0MiYweDMwKT4+NCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoYyA9IHNyYygpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSBhaW5bY107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHQxID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYyA9PT0gNjEpIGJyZWFrOyBlbHNlIGZhaWwoYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkc3QoKCh0MiYweGYpPDw0KT4+PjB8KHQxJjB4M2MpPj4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoYyA9IHNyYygpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQyID0gYWluW2NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdDIgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYyA9PT0gNjEpIGJyZWFrOyBlbHNlIGZhaWwoYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHN0KCgodDEmMHgzKTw8Nik+Pj4wfHQyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGVzdHMgaWYgYSBzdHJpbmcgaXMgdmFsaWQgYmFzZTY0LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIFN0cmluZyB0byB0ZXN0XG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgdmFsaWQsIG90aGVyd2lzZSBgZmFsc2VgXG4gICAgICAgICAqL1xuICAgICAgICBseGl2LnRlc3QgPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiAvXig/OltBLVphLXowLTkrL117NH0pKig/OltBLVphLXowLTkrL117Mn09PXxbQS1aYS16MC05Ky9dezN9PSk/JC8udGVzdChzdHIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBseGl2O1xuICAgIH0oKTtcblxuICAgIC8vIGVuY29kaW5ncy9iYXNlNjRcblxuICAgIC8qKlxuICAgICAqIEVuY29kZXMgdGhpcyBCeXRlQnVmZmVyJ3MgY29udGVudHMgdG8gYSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuXG4gICAgICogQHBhcmFtIHtudW1iZXI9fSBiZWdpbiBPZmZzZXQgdG8gYmVnaW4gYXQsIGRlZmF1bHRzIHRvIHtAbGluayBCeXRlQnVmZmVyI29mZnNldH0uXG4gICAgICogQHBhcmFtIHtudW1iZXI9fSBlbmQgT2Zmc2V0IHRvIGVuZCBhdCwgZGVmYXVsdHMgdG8ge0BsaW5rIEJ5dGVCdWZmZXIjbGltaXR9LlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IEJhc2U2NCBlbmNvZGVkIHN0cmluZ1xuICAgICAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IElmIGBiZWdpbmAgb3IgYGVuZGAgaXMgb3V0IG9mIGJvdW5kc1xuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLnRvQmFzZTY0ID0gZnVuY3Rpb24oYmVnaW4sIGVuZCkge1xuICAgICAgICBpZiAodHlwZW9mIGJlZ2luID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIGJlZ2luID0gdGhpcy5vZmZzZXQ7XG4gICAgICAgIGlmICh0eXBlb2YgZW5kID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIGVuZCA9IHRoaXMubGltaXQ7XG4gICAgICAgIGJlZ2luID0gYmVnaW4gfCAwOyBlbmQgPSBlbmQgfCAwO1xuICAgICAgICBpZiAoYmVnaW4gPCAwIHx8IGVuZCA+IHRoaXMuY2FwYWNpdHkgfHwgYmVnaW4gPiBlbmQpXG4gICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiYmVnaW4sIGVuZFwiKTtcbiAgICAgICAgdmFyIHNkOyBseGl2LmVuY29kZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBiZWdpbiA8IGVuZCA/IHRoaXMudmlld1tiZWdpbisrXSA6IG51bGw7XG4gICAgICAgIH0uYmluZCh0aGlzKSwgc2QgPSBzdHJpbmdEZXN0aW5hdGlvbigpKTtcbiAgICAgICAgcmV0dXJuIHNkKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlY29kZXMgYSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgdG8gYSBCeXRlQnVmZmVyLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgU3RyaW5nIHRvIGRlY29kZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IGxpdHRsZUVuZGlhbiBXaGV0aGVyIHRvIHVzZSBsaXR0bGUgb3IgYmlnIGVuZGlhbiBieXRlIG9yZGVyLiBEZWZhdWx0cyB0b1xuICAgICAqICB7QGxpbmsgQnl0ZUJ1ZmZlci5ERUZBVUxUX0VORElBTn0uXG4gICAgICogQHJldHVybnMgeyFCeXRlQnVmZmVyfSBCeXRlQnVmZmVyXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXIuZnJvbUJhc2U2NCA9IGZ1bmN0aW9uKHN0ciwgbGl0dGxlRW5kaWFuKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcInN0clwiKTtcbiAgICAgICAgdmFyIGJiID0gbmV3IEJ5dGVCdWZmZXIoc3RyLmxlbmd0aC80KjMsIGxpdHRsZUVuZGlhbiksXG4gICAgICAgICAgICBpID0gMDtcbiAgICAgICAgbHhpdi5kZWNvZGUoc3RyaW5nU291cmNlKHN0ciksIGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgICAgIGJiLnZpZXdbaSsrXSA9IGI7XG4gICAgICAgIH0pO1xuICAgICAgICBiYi5saW1pdCA9IGk7XG4gICAgICAgIHJldHVybiBiYjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRW5jb2RlcyBhIGJpbmFyeSBzdHJpbmcgdG8gYmFzZTY0IGxpa2UgYHdpbmRvdy5idG9hYCBkb2VzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgQmluYXJ5IHN0cmluZ1xuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IEJhc2U2NCBlbmNvZGVkIHN0cmluZ1xuICAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy5idG9hXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXIuYnRvYSA9IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICByZXR1cm4gQnl0ZUJ1ZmZlci5mcm9tQmluYXJ5KHN0cikudG9CYXNlNjQoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVjb2RlcyBhIGJhc2U2NCBlbmNvZGVkIHN0cmluZyB0byBiaW5hcnkgbGlrZSBgd2luZG93LmF0b2JgIGRvZXMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGI2NCBCYXNlNjQgZW5jb2RlZCBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBCaW5hcnkgc3RyaW5nXG4gICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93LmF0b2JcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlci5hdG9iID0gZnVuY3Rpb24oYjY0KSB7XG4gICAgICAgIHJldHVybiBCeXRlQnVmZmVyLmZyb21CYXNlNjQoYjY0KS50b0JpbmFyeSgpO1xuICAgIH07XG5cbiAgICAvLyBlbmNvZGluZ3MvYmluYXJ5XG5cbiAgICAvKipcbiAgICAgKiBFbmNvZGVzIHRoaXMgQnl0ZUJ1ZmZlciB0byBhIGJpbmFyeSBlbmNvZGVkIHN0cmluZywgdGhhdCBpcyB1c2luZyBvbmx5IGNoYXJhY3RlcnMgMHgwMC0weEZGIGFzIGJ5dGVzLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gYmVnaW4gT2Zmc2V0IHRvIGJlZ2luIGF0LiBEZWZhdWx0cyB0byB7QGxpbmsgQnl0ZUJ1ZmZlciNvZmZzZXR9LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gZW5kIE9mZnNldCB0byBlbmQgYXQuIERlZmF1bHRzIHRvIHtAbGluayBCeXRlQnVmZmVyI2xpbWl0fS5cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBCaW5hcnkgZW5jb2RlZCBzdHJpbmdcbiAgICAgKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBJZiBgb2Zmc2V0ID4gbGltaXRgXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXJQcm90b3R5cGUudG9CaW5hcnkgPSBmdW5jdGlvbihiZWdpbiwgZW5kKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYmVnaW4gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgYmVnaW4gPSB0aGlzLm9mZnNldDtcbiAgICAgICAgaWYgKHR5cGVvZiBlbmQgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgZW5kID0gdGhpcy5saW1pdDtcbiAgICAgICAgYmVnaW4gfD0gMDsgZW5kIHw9IDA7XG4gICAgICAgIGlmIChiZWdpbiA8IDAgfHwgZW5kID4gdGhpcy5jYXBhY2l0eSgpIHx8IGJlZ2luID4gZW5kKVxuICAgICAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcihcImJlZ2luLCBlbmRcIik7XG4gICAgICAgIGlmIChiZWdpbiA9PT0gZW5kKVxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIHZhciBjaGFycyA9IFtdLFxuICAgICAgICAgICAgcGFydHMgPSBbXTtcbiAgICAgICAgd2hpbGUgKGJlZ2luIDwgZW5kKSB7XG4gICAgICAgICAgICBjaGFycy5wdXNoKHRoaXMudmlld1tiZWdpbisrXSk7XG4gICAgICAgICAgICBpZiAoY2hhcnMubGVuZ3RoID49IDEwMjQpXG4gICAgICAgICAgICAgICAgcGFydHMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY2hhcnMpKSxcbiAgICAgICAgICAgICAgICBjaGFycyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJ0cy5qb2luKCcnKSArIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjaGFycyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlY29kZXMgYSBiaW5hcnkgZW5jb2RlZCBzdHJpbmcsIHRoYXQgaXMgdXNpbmcgb25seSBjaGFyYWN0ZXJzIDB4MDAtMHhGRiBhcyBieXRlcywgdG8gYSBCeXRlQnVmZmVyLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgU3RyaW5nIHRvIGRlY29kZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IGxpdHRsZUVuZGlhbiBXaGV0aGVyIHRvIHVzZSBsaXR0bGUgb3IgYmlnIGVuZGlhbiBieXRlIG9yZGVyLiBEZWZhdWx0cyB0b1xuICAgICAqICB7QGxpbmsgQnl0ZUJ1ZmZlci5ERUZBVUxUX0VORElBTn0uXG4gICAgICogQHJldHVybnMgeyFCeXRlQnVmZmVyfSBCeXRlQnVmZmVyXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXIuZnJvbUJpbmFyeSA9IGZ1bmN0aW9uKHN0ciwgbGl0dGxlRW5kaWFuKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcInN0clwiKTtcbiAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgayA9IHN0ci5sZW5ndGgsXG4gICAgICAgICAgICBjaGFyQ29kZSxcbiAgICAgICAgICAgIGJiID0gbmV3IEJ5dGVCdWZmZXIoaywgbGl0dGxlRW5kaWFuKTtcbiAgICAgICAgd2hpbGUgKGk8aykge1xuICAgICAgICAgICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgICAgIGlmIChjaGFyQ29kZSA+IDB4ZmYpXG4gICAgICAgICAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcihcImlsbGVnYWwgY2hhciBjb2RlOiBcIitjaGFyQ29kZSk7XG4gICAgICAgICAgICBiYi52aWV3W2krK10gPSBjaGFyQ29kZTtcbiAgICAgICAgfVxuICAgICAgICBiYi5saW1pdCA9IGs7XG4gICAgICAgIHJldHVybiBiYjtcbiAgICB9O1xuXG4gICAgLy8gZW5jb2RpbmdzL2RlYnVnXG5cbiAgICAvKipcbiAgICAgKiBFbmNvZGVzIHRoaXMgQnl0ZUJ1ZmZlciB0byBhIGhleCBlbmNvZGVkIHN0cmluZyB3aXRoIG1hcmtlZCBvZmZzZXRzLiBPZmZzZXQgc3ltYm9scyBhcmU6XG4gICAgICogKiBgPGAgOiBvZmZzZXQsXG4gICAgICogKiBgJ2AgOiBtYXJrZWRPZmZzZXQsXG4gICAgICogKiBgPmAgOiBsaW1pdCxcbiAgICAgKiAqIGB8YCA6IG9mZnNldCBhbmQgbGltaXQsXG4gICAgICogKiBgW2AgOiBvZmZzZXQgYW5kIG1hcmtlZE9mZnNldCxcbiAgICAgKiAqIGBdYCA6IG1hcmtlZE9mZnNldCBhbmQgbGltaXQsXG4gICAgICogKiBgIWAgOiBvZmZzZXQsIG1hcmtlZE9mZnNldCBhbmQgbGltaXRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBjb2x1bW5zIElmIGB0cnVlYCByZXR1cm5zIHR3byBjb2x1bW5zIGhleCArIGFzY2lpLCBkZWZhdWx0cyB0byBgZmFsc2VgXG4gICAgICogQHJldHVybnMge3N0cmluZ3whQXJyYXkuPHN0cmluZz59IERlYnVnIHN0cmluZyBvciBhcnJheSBvZiBsaW5lcyBpZiBgYXNBcnJheSA9IHRydWVgXG4gICAgICogQGV4cG9zZVxuICAgICAqIEBleGFtcGxlIGA+MDAnMDEgMDI8MDNgIGNvbnRhaW5zIGZvdXIgYnl0ZXMgd2l0aCBgbGltaXQ9MCwgbWFya2VkT2Zmc2V0PTEsIG9mZnNldD0zYFxuICAgICAqIEBleGFtcGxlIGAwMFswMSAwMiAwMz5gIGNvbnRhaW5zIGZvdXIgYnl0ZXMgd2l0aCBgb2Zmc2V0PW1hcmtlZE9mZnNldD0xLCBsaW1pdD00YFxuICAgICAqIEBleGFtcGxlIGAwMHwwMSAwMiAwM2AgY29udGFpbnMgZm91ciBieXRlcyB3aXRoIGBvZmZzZXQ9bGltaXQ9MSwgbWFya2VkT2Zmc2V0PS0xYFxuICAgICAqIEBleGFtcGxlIGB8YCBjb250YWlucyB6ZXJvIGJ5dGVzIHdpdGggYG9mZnNldD1saW1pdD0wLCBtYXJrZWRPZmZzZXQ9LTFgXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlclByb3RvdHlwZS50b0RlYnVnID0gZnVuY3Rpb24oY29sdW1ucykge1xuICAgICAgICB2YXIgaSA9IC0xLFxuICAgICAgICAgICAgayA9IHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICBiLFxuICAgICAgICAgICAgaGV4ID0gXCJcIixcbiAgICAgICAgICAgIGFzYyA9IFwiXCIsXG4gICAgICAgICAgICBvdXQgPSBcIlwiO1xuICAgICAgICB3aGlsZSAoaTxrKSB7XG4gICAgICAgICAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBiID0gdGhpcy52aWV3W2ldO1xuICAgICAgICAgICAgICAgIGlmIChiIDwgMHgxMCkgaGV4ICs9IFwiMFwiK2IudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgZWxzZSBoZXggKz0gYi50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1ucylcbiAgICAgICAgICAgICAgICAgICAgYXNjICs9IGIgPiAzMiAmJiBiIDwgMTI3ID8gU3RyaW5nLmZyb21DaGFyQ29kZShiKSA6ICcuJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICsraTtcbiAgICAgICAgICAgIGlmIChjb2x1bW5zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPiAwICYmIGkgJSAxNiA9PT0gMCAmJiBpICE9PSBrKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChoZXgubGVuZ3RoIDwgMyoxNiszKSBoZXggKz0gXCIgXCI7XG4gICAgICAgICAgICAgICAgICAgIG91dCArPSBoZXgrYXNjK1wiXFxuXCI7XG4gICAgICAgICAgICAgICAgICAgIGhleCA9IGFzYyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgPT09IHRoaXMub2Zmc2V0ICYmIGkgPT09IHRoaXMubGltaXQpXG4gICAgICAgICAgICAgICAgaGV4ICs9IGkgPT09IHRoaXMubWFya2VkT2Zmc2V0ID8gXCIhXCIgOiBcInxcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGkgPT09IHRoaXMub2Zmc2V0KVxuICAgICAgICAgICAgICAgIGhleCArPSBpID09PSB0aGlzLm1hcmtlZE9mZnNldCA/IFwiW1wiIDogXCI8XCI7XG4gICAgICAgICAgICBlbHNlIGlmIChpID09PSB0aGlzLmxpbWl0KVxuICAgICAgICAgICAgICAgIGhleCArPSBpID09PSB0aGlzLm1hcmtlZE9mZnNldCA/IFwiXVwiIDogXCI+XCI7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgaGV4ICs9IGkgPT09IHRoaXMubWFya2VkT2Zmc2V0ID8gXCInXCIgOiAoY29sdW1ucyB8fCAoaSAhPT0gMCAmJiBpICE9PSBrKSA/IFwiIFwiIDogXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbHVtbnMgJiYgaGV4ICE9PSBcIiBcIikge1xuICAgICAgICAgICAgd2hpbGUgKGhleC5sZW5ndGggPCAzKjE2KzMpXG4gICAgICAgICAgICAgICAgaGV4ICs9IFwiIFwiO1xuICAgICAgICAgICAgb3V0ICs9IGhleCArIGFzYyArIFwiXFxuXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtbnMgPyBvdXQgOiBoZXg7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlY29kZXMgYSBoZXggZW5jb2RlZCBzdHJpbmcgd2l0aCBtYXJrZWQgb2Zmc2V0cyB0byBhIEJ5dGVCdWZmZXIuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciBEZWJ1ZyBzdHJpbmcgdG8gZGVjb2RlIChub3QgYmUgZ2VuZXJhdGVkIHdpdGggYGNvbHVtbnMgPSB0cnVlYClcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBsaXR0bGVFbmRpYW4gV2hldGhlciB0byB1c2UgbGl0dGxlIG9yIGJpZyBlbmRpYW4gYnl0ZSBvcmRlci4gRGVmYXVsdHMgdG9cbiAgICAgKiAge0BsaW5rIEJ5dGVCdWZmZXIuREVGQVVMVF9FTkRJQU59LlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IG5vQXNzZXJ0IFdoZXRoZXIgdG8gc2tpcCBhc3NlcnRpb25zIG9mIG9mZnNldHMgYW5kIHZhbHVlcy4gRGVmYXVsdHMgdG9cbiAgICAgKiAge0BsaW5rIEJ5dGVCdWZmZXIuREVGQVVMVF9OT0FTU0VSVH0uXG4gICAgICogQHJldHVybnMgeyFCeXRlQnVmZmVyfSBCeXRlQnVmZmVyXG4gICAgICogQGV4cG9zZVxuICAgICAqIEBzZWUgQnl0ZUJ1ZmZlciN0b0RlYnVnXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlci5mcm9tRGVidWcgPSBmdW5jdGlvbihzdHIsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgICAgICAgdmFyIGsgPSBzdHIubGVuZ3RoLFxuICAgICAgICAgICAgYmIgPSBuZXcgQnl0ZUJ1ZmZlcigoKGsrMSkvMyl8MCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCk7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGNoLCBiLFxuICAgICAgICAgICAgcnMgPSBmYWxzZSwgLy8gUmVxdWlyZSBzeW1ib2wgbmV4dFxuICAgICAgICAgICAgaG8gPSBmYWxzZSwgaG0gPSBmYWxzZSwgaGwgPSBmYWxzZSwgLy8gQWxyZWFkeSBoYXMgb2Zmc2V0IChobyksIG1hcmtlZE9mZnNldCAoaG0pLCBsaW1pdCAoaGwpP1xuICAgICAgICAgICAgZmFpbCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAoaTxrKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGNoID0gc3RyLmNoYXJBdChpKyspKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnISc6XG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9Bc3NlcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChobyB8fCBobSB8fCBobCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaG8gPSBobSA9IGhsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBiYi5vZmZzZXQgPSBiYi5tYXJrZWRPZmZzZXQgPSBiYi5saW1pdCA9IGo7XG4gICAgICAgICAgICAgICAgICAgIHJzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3wnOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaG8gfHwgaGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhvID0gaGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJiLm9mZnNldCA9IGJiLmxpbWl0ID0gajtcbiAgICAgICAgICAgICAgICAgICAgcnMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnWyc6XG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9Bc3NlcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChobyB8fCBobSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaG8gPSBobSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYmIub2Zmc2V0ID0gYmIubWFya2VkT2Zmc2V0ID0gajtcbiAgICAgICAgICAgICAgICAgICAgcnMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9Bc3NlcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaG8gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJiLm9mZnNldCA9IGo7XG4gICAgICAgICAgICAgICAgICAgIHJzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ10nOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGwgfHwgaG0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhsID0gaG0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJiLmxpbWl0ID0gYmIubWFya2VkT2Zmc2V0ID0gajtcbiAgICAgICAgICAgICAgICAgICAgcnMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnPic6XG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9Bc3NlcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChobCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJiLmxpbWl0ID0gajtcbiAgICAgICAgICAgICAgICAgICAgcnMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIidcIjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFub0Fzc2VydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBobSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYmIubWFya2VkT2Zmc2V0ID0gajtcbiAgICAgICAgICAgICAgICAgICAgcnMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnICc6XG4gICAgICAgICAgICAgICAgICAgIHJzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9Bc3NlcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGIgPSBwYXJzZUludChjaCtzdHIuY2hhckF0KGkrKyksIDE2KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFub0Fzc2VydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKGIpIHx8IGIgPCAwIHx8IGIgPiAyNTUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCBzdHI6IE5vdCBhIGRlYnVnIGVuY29kZWQgc3RyaW5nXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJiLnZpZXdbaisrXSA9IGI7XG4gICAgICAgICAgICAgICAgICAgIHJzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmYWlsKVxuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgc3RyOiBJbnZhbGlkIHN5bWJvbCBhdCBcIitpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgICAgICAgICBpZiAoIWhvIHx8ICFobClcbiAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbGxlZ2FsIHN0cjogTWlzc2luZyBvZmZzZXQgb3IgbGltaXRcIik7XG4gICAgICAgICAgICBpZiAoajxiYi5idWZmZXIuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbGxlZ2FsIHN0cjogTm90IGEgZGVidWcgZW5jb2RlZCBzdHJpbmcgKGlzIGl0IGhleD8pIFwiK2orXCIgPCBcIitrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmI7XG4gICAgfTtcblxuICAgIC8vIGVuY29kaW5ncy9oZXhcblxuICAgIC8qKlxuICAgICAqIEVuY29kZXMgdGhpcyBCeXRlQnVmZmVyJ3MgY29udGVudHMgdG8gYSBoZXggZW5jb2RlZCBzdHJpbmcuXG4gICAgICogQHBhcmFtIHtudW1iZXI9fSBiZWdpbiBPZmZzZXQgdG8gYmVnaW4gYXQuIERlZmF1bHRzIHRvIHtAbGluayBCeXRlQnVmZmVyI29mZnNldH0uXG4gICAgICogQHBhcmFtIHtudW1iZXI9fSBlbmQgT2Zmc2V0IHRvIGVuZCBhdC4gRGVmYXVsdHMgdG8ge0BsaW5rIEJ5dGVCdWZmZXIjbGltaXR9LlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IEhleCBlbmNvZGVkIHN0cmluZ1xuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLnRvSGV4ID0gZnVuY3Rpb24oYmVnaW4sIGVuZCkge1xuICAgICAgICBiZWdpbiA9IHR5cGVvZiBiZWdpbiA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLm9mZnNldCA6IGJlZ2luO1xuICAgICAgICBlbmQgPSB0eXBlb2YgZW5kID09PSAndW5kZWZpbmVkJyA/IHRoaXMubGltaXQgOiBlbmQ7XG4gICAgICAgIGlmICghdGhpcy5ub0Fzc2VydCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBiZWdpbiAhPT0gJ251bWJlcicgfHwgYmVnaW4gJSAxICE9PSAwKVxuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgYmVnaW46IE5vdCBhbiBpbnRlZ2VyXCIpO1xuICAgICAgICAgICAgYmVnaW4gPj4+PSAwO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbmQgIT09ICdudW1iZXInIHx8IGVuZCAlIDEgIT09IDApXG4gICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCBlbmQ6IE5vdCBhbiBpbnRlZ2VyXCIpO1xuICAgICAgICAgICAgZW5kID4+Pj0gMDtcbiAgICAgICAgICAgIGlmIChiZWdpbiA8IDAgfHwgYmVnaW4gPiBlbmQgfHwgZW5kID4gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCByYW5nZTogMCA8PSBcIitiZWdpbitcIiA8PSBcIitlbmQrXCIgPD0gXCIrdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG91dCA9IG5ldyBBcnJheShlbmQgLSBiZWdpbiksXG4gICAgICAgICAgICBiO1xuICAgICAgICB3aGlsZSAoYmVnaW4gPCBlbmQpIHtcbiAgICAgICAgICAgIGIgPSB0aGlzLnZpZXdbYmVnaW4rK107XG4gICAgICAgICAgICBpZiAoYiA8IDB4MTApXG4gICAgICAgICAgICAgICAgb3V0LnB1c2goXCIwXCIsIGIudG9TdHJpbmcoMTYpKTtcbiAgICAgICAgICAgIGVsc2Ugb3V0LnB1c2goYi50b1N0cmluZygxNikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQuam9pbignJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlY29kZXMgYSBoZXggZW5jb2RlZCBzdHJpbmcgdG8gYSBCeXRlQnVmZmVyLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgU3RyaW5nIHRvIGRlY29kZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IGxpdHRsZUVuZGlhbiBXaGV0aGVyIHRvIHVzZSBsaXR0bGUgb3IgYmlnIGVuZGlhbiBieXRlIG9yZGVyLiBEZWZhdWx0cyB0b1xuICAgICAqICB7QGxpbmsgQnl0ZUJ1ZmZlci5ERUZBVUxUX0VORElBTn0uXG4gICAgICogQHBhcmFtIHtib29sZWFuPX0gbm9Bc3NlcnQgV2hldGhlciB0byBza2lwIGFzc2VydGlvbnMgb2Ygb2Zmc2V0cyBhbmQgdmFsdWVzLiBEZWZhdWx0cyB0b1xuICAgICAqICB7QGxpbmsgQnl0ZUJ1ZmZlci5ERUZBVUxUX05PQVNTRVJUfS5cbiAgICAgKiBAcmV0dXJucyB7IUJ5dGVCdWZmZXJ9IEJ5dGVCdWZmZXJcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgQnl0ZUJ1ZmZlci5mcm9tSGV4ID0gZnVuY3Rpb24oc3RyLCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gICAgICAgIGlmICghbm9Bc3NlcnQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbGxlZ2FsIHN0cjogTm90IGEgc3RyaW5nXCIpO1xuICAgICAgICAgICAgaWYgKHN0ci5sZW5ndGggJSAyICE9PSAwKVxuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgc3RyOiBMZW5ndGggbm90IGEgbXVsdGlwbGUgb2YgMlwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgayA9IHN0ci5sZW5ndGgsXG4gICAgICAgICAgICBiYiA9IG5ldyBCeXRlQnVmZmVyKChrIC8gMikgfCAwLCBsaXR0bGVFbmRpYW4pLFxuICAgICAgICAgICAgYjtcbiAgICAgICAgZm9yICh2YXIgaT0wLCBqPTA7IGk8azsgaSs9Mikge1xuICAgICAgICAgICAgYiA9IHBhcnNlSW50KHN0ci5zdWJzdHJpbmcoaSwgaSsyKSwgMTYpO1xuICAgICAgICAgICAgaWYgKCFub0Fzc2VydClcbiAgICAgICAgICAgICAgICBpZiAoIWlzRmluaXRlKGIpIHx8IGIgPCAwIHx8IGIgPiAyNTUpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgc3RyOiBDb250YWlucyBub24taGV4IGNoYXJhY3RlcnNcIik7XG4gICAgICAgICAgICBiYi52aWV3W2orK10gPSBiO1xuICAgICAgICB9XG4gICAgICAgIGJiLmxpbWl0ID0gajtcbiAgICAgICAgcmV0dXJuIGJiO1xuICAgIH07XG5cbiAgICAvLyB1dGZ4LWVtYmVkZGFibGVcblxuICAgIC8qKlxuICAgICAqIHV0ZngtZW1iZWRkYWJsZSAoYykgMjAxNCBEYW5pZWwgV2lydHogPGRjb2RlQGRjb2RlLmlvPlxuICAgICAqIFJlbGVhc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjBcbiAgICAgKiBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kY29kZUlPL3V0ZnggZm9yIGRldGFpbHNcbiAgICAgKi9cbiAgICB2YXIgdXRmeCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogdXRmeCBuYW1lc3BhY2UuXG4gICAgICAgICAqIEBpbm5lclxuICAgICAgICAgKiBAdHlwZSB7IU9iamVjdC48c3RyaW5nLCo+fVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIHV0ZnggPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWF4aW11bSB2YWxpZCBjb2RlIHBvaW50LlxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAgICAgKiBAY29uc3RcbiAgICAgICAgICovXG4gICAgICAgIHV0ZnguTUFYX0NPREVQT0lOVCA9IDB4MTBGRkZGO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmNvZGVzIFVURjggY29kZSBwb2ludHMgdG8gVVRGOCBieXRlcy5cbiAgICAgICAgICogQHBhcmFtIHsoIWZ1bmN0aW9uKCk6bnVtYmVyfG51bGwpIHwgbnVtYmVyfSBzcmMgQ29kZSBwb2ludHMgc291cmNlLCBlaXRoZXIgYXMgYSBmdW5jdGlvbiByZXR1cm5pbmcgdGhlIG5leHQgY29kZSBwb2ludFxuICAgICAgICAgKiAgcmVzcGVjdGl2ZWx5IGBudWxsYCBpZiB0aGVyZSBhcmUgbm8gbW9yZSBjb2RlIHBvaW50cyBsZWZ0IG9yIGEgc2luZ2xlIG51bWVyaWMgY29kZSBwb2ludC5cbiAgICAgICAgICogQHBhcmFtIHshZnVuY3Rpb24obnVtYmVyKX0gZHN0IEJ5dGVzIGRlc3RpbmF0aW9uIGFzIGEgZnVuY3Rpb24gc3VjY2Vzc2l2ZWx5IGNhbGxlZCB3aXRoIHRoZSBuZXh0IGJ5dGVcbiAgICAgICAgICovXG4gICAgICAgIHV0ZnguZW5jb2RlVVRGOCA9IGZ1bmN0aW9uKHNyYywgZHN0KSB7XG4gICAgICAgICAgICB2YXIgY3AgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzcmMgPT09ICdudW1iZXInKVxuICAgICAgICAgICAgICAgIGNwID0gc3JjLFxuICAgICAgICAgICAgICAgIHNyYyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gbnVsbDsgfTtcbiAgICAgICAgICAgIHdoaWxlIChjcCAhPT0gbnVsbCB8fCAoY3AgPSBzcmMoKSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3AgPCAweDgwKVxuICAgICAgICAgICAgICAgICAgICBkc3QoY3AmMHg3Rik7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY3AgPCAweDgwMClcbiAgICAgICAgICAgICAgICAgICAgZHN0KCgoY3A+PjYpJjB4MUYpfDB4QzApLFxuICAgICAgICAgICAgICAgICAgICBkc3QoKGNwJjB4M0YpfDB4ODApO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNwIDwgMHgxMDAwMClcbiAgICAgICAgICAgICAgICAgICAgZHN0KCgoY3A+PjEyKSYweDBGKXwweEUwKSxcbiAgICAgICAgICAgICAgICAgICAgZHN0KCgoY3A+PjYpJjB4M0YpfDB4ODApLFxuICAgICAgICAgICAgICAgICAgICBkc3QoKGNwJjB4M0YpfDB4ODApO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgZHN0KCgoY3A+PjE4KSYweDA3KXwweEYwKSxcbiAgICAgICAgICAgICAgICAgICAgZHN0KCgoY3A+PjEyKSYweDNGKXwweDgwKSxcbiAgICAgICAgICAgICAgICAgICAgZHN0KCgoY3A+PjYpJjB4M0YpfDB4ODApLFxuICAgICAgICAgICAgICAgICAgICBkc3QoKGNwJjB4M0YpfDB4ODApO1xuICAgICAgICAgICAgICAgIGNwID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVjb2RlcyBVVEY4IGJ5dGVzIHRvIFVURjggY29kZSBwb2ludHMuXG4gICAgICAgICAqIEBwYXJhbSB7IWZ1bmN0aW9uKCk6bnVtYmVyfG51bGx9IHNyYyBCeXRlcyBzb3VyY2UgYXMgYSBmdW5jdGlvbiByZXR1cm5pbmcgdGhlIG5leHQgYnl0ZSByZXNwZWN0aXZlbHkgYG51bGxgIGlmIHRoZXJlXG4gICAgICAgICAqICBhcmUgbm8gbW9yZSBieXRlcyBsZWZ0LlxuICAgICAgICAgKiBAcGFyYW0geyFmdW5jdGlvbihudW1iZXIpfSBkc3QgQ29kZSBwb2ludHMgZGVzdGluYXRpb24gYXMgYSBmdW5jdGlvbiBzdWNjZXNzaXZlbHkgY2FsbGVkIHdpdGggZWFjaCBkZWNvZGVkIGNvZGUgcG9pbnQuXG4gICAgICAgICAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IElmIGEgc3RhcnRpbmcgYnl0ZSBpcyBpbnZhbGlkIGluIFVURjhcbiAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBsYXN0IHNlcXVlbmNlIGlzIHRydW5jYXRlZC4gSGFzIGFuIGFycmF5IHByb3BlcnR5IGBieXRlc2AgaG9sZGluZyB0aGVcbiAgICAgICAgICogIHJlbWFpbmluZyBieXRlcy5cbiAgICAgICAgICovXG4gICAgICAgIHV0ZnguZGVjb2RlVVRGOCA9IGZ1bmN0aW9uKHNyYywgZHN0KSB7XG4gICAgICAgICAgICB2YXIgYSwgYiwgYywgZCwgZmFpbCA9IGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgICAgICAgICBiID0gYi5zbGljZSgwLCBiLmluZGV4T2YobnVsbCkpO1xuICAgICAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihiLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGVyci5uYW1lID0gXCJUcnVuY2F0ZWRFcnJvclwiO1xuICAgICAgICAgICAgICAgIGVyclsnYnl0ZXMnXSA9IGI7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHdoaWxlICgoYSA9IHNyYygpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICgoYSYweDgwKSA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgZHN0KGEpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKChhJjB4RTApID09PSAweEMwKVxuICAgICAgICAgICAgICAgICAgICAoKGIgPSBzcmMoKSkgPT09IG51bGwpICYmIGZhaWwoW2EsIGJdKSxcbiAgICAgICAgICAgICAgICAgICAgZHN0KCgoYSYweDFGKTw8NikgfCAoYiYweDNGKSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoKGEmMHhGMCkgPT09IDB4RTApXG4gICAgICAgICAgICAgICAgICAgICgoYj1zcmMoKSkgPT09IG51bGwgfHwgKGM9c3JjKCkpID09PSBudWxsKSAmJiBmYWlsKFthLCBiLCBjXSksXG4gICAgICAgICAgICAgICAgICAgIGRzdCgoKGEmMHgwRik8PDEyKSB8ICgoYiYweDNGKTw8NikgfCAoYyYweDNGKSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoKGEmMHhGOCkgPT09IDB4RjApXG4gICAgICAgICAgICAgICAgICAgICgoYj1zcmMoKSkgPT09IG51bGwgfHwgKGM9c3JjKCkpID09PSBudWxsIHx8IChkPXNyYygpKSA9PT0gbnVsbCkgJiYgZmFpbChbYSwgYiwgYyAsZF0pLFxuICAgICAgICAgICAgICAgICAgICBkc3QoKChhJjB4MDcpPDwxOCkgfCAoKGImMHgzRik8PDEyKSB8ICgoYyYweDNGKTw8NikgfCAoZCYweDNGKSk7XG4gICAgICAgICAgICAgICAgZWxzZSB0aHJvdyBSYW5nZUVycm9yKFwiSWxsZWdhbCBzdGFydGluZyBieXRlOiBcIithKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29udmVydHMgVVRGMTYgY2hhcmFjdGVycyB0byBVVEY4IGNvZGUgcG9pbnRzLlxuICAgICAgICAgKiBAcGFyYW0geyFmdW5jdGlvbigpOm51bWJlcnxudWxsfSBzcmMgQ2hhcmFjdGVycyBzb3VyY2UgYXMgYSBmdW5jdGlvbiByZXR1cm5pbmcgdGhlIG5leHQgY2hhciBjb2RlIHJlc3BlY3RpdmVseVxuICAgICAgICAgKiAgYG51bGxgIGlmIHRoZXJlIGFyZSBubyBtb3JlIGNoYXJhY3RlcnMgbGVmdC5cbiAgICAgICAgICogQHBhcmFtIHshZnVuY3Rpb24obnVtYmVyKX0gZHN0IENvZGUgcG9pbnRzIGRlc3RpbmF0aW9uIGFzIGEgZnVuY3Rpb24gc3VjY2Vzc2l2ZWx5IGNhbGxlZCB3aXRoIGVhY2ggY29udmVydGVkIGNvZGVcbiAgICAgICAgICogIHBvaW50LlxuICAgICAgICAgKi9cbiAgICAgICAgdXRmeC5VVEYxNnRvVVRGOCA9IGZ1bmN0aW9uKHNyYywgZHN0KSB7XG4gICAgICAgICAgICB2YXIgYzEsIGMyID0gbnVsbDtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKChjMSA9IGMyICE9PSBudWxsID8gYzIgOiBzcmMoKSkgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGlmIChjMSA+PSAweEQ4MDAgJiYgYzEgPD0gMHhERkZGKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoYzIgPSBzcmMoKSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjMiA+PSAweERDMDAgJiYgYzIgPD0gMHhERkZGKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHN0KChjMS0weEQ4MDApKjB4NDAwK2MyLTB4REMwMCsweDEwMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjMiA9IG51bGw7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRzdChjMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYzIgIT09IG51bGwpIGRzdChjMik7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnZlcnRzIFVURjggY29kZSBwb2ludHMgdG8gVVRGMTYgY2hhcmFjdGVycy5cbiAgICAgICAgICogQHBhcmFtIHsoIWZ1bmN0aW9uKCk6bnVtYmVyfG51bGwpIHwgbnVtYmVyfSBzcmMgQ29kZSBwb2ludHMgc291cmNlLCBlaXRoZXIgYXMgYSBmdW5jdGlvbiByZXR1cm5pbmcgdGhlIG5leHQgY29kZSBwb2ludFxuICAgICAgICAgKiAgcmVzcGVjdGl2ZWx5IGBudWxsYCBpZiB0aGVyZSBhcmUgbm8gbW9yZSBjb2RlIHBvaW50cyBsZWZ0IG9yIGEgc2luZ2xlIG51bWVyaWMgY29kZSBwb2ludC5cbiAgICAgICAgICogQHBhcmFtIHshZnVuY3Rpb24obnVtYmVyKX0gZHN0IENoYXJhY3RlcnMgZGVzdGluYXRpb24gYXMgYSBmdW5jdGlvbiBzdWNjZXNzaXZlbHkgY2FsbGVkIHdpdGggZWFjaCBjb252ZXJ0ZWQgY2hhciBjb2RlLlxuICAgICAgICAgKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBJZiBhIGNvZGUgcG9pbnQgaXMgb3V0IG9mIHJhbmdlXG4gICAgICAgICAqL1xuICAgICAgICB1dGZ4LlVURjh0b1VURjE2ID0gZnVuY3Rpb24oc3JjLCBkc3QpIHtcbiAgICAgICAgICAgIHZhciBjcCA9IG51bGw7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNyYyA9PT0gJ251bWJlcicpXG4gICAgICAgICAgICAgICAgY3AgPSBzcmMsIHNyYyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gbnVsbDsgfTtcbiAgICAgICAgICAgIHdoaWxlIChjcCAhPT0gbnVsbCB8fCAoY3AgPSBzcmMoKSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3AgPD0gMHhGRkZGKVxuICAgICAgICAgICAgICAgICAgICBkc3QoY3ApO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgY3AgLT0gMHgxMDAwMCxcbiAgICAgICAgICAgICAgICAgICAgZHN0KChjcD4+MTApKzB4RDgwMCksXG4gICAgICAgICAgICAgICAgICAgIGRzdCgoY3AlMHg0MDApKzB4REMwMCk7XG4gICAgICAgICAgICAgICAgY3AgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb252ZXJ0cyBhbmQgZW5jb2RlcyBVVEYxNiBjaGFyYWN0ZXJzIHRvIFVURjggYnl0ZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IWZ1bmN0aW9uKCk6bnVtYmVyfG51bGx9IHNyYyBDaGFyYWN0ZXJzIHNvdXJjZSBhcyBhIGZ1bmN0aW9uIHJldHVybmluZyB0aGUgbmV4dCBjaGFyIGNvZGUgcmVzcGVjdGl2ZWx5IGBudWxsYFxuICAgICAgICAgKiAgaWYgdGhlcmUgYXJlIG5vIG1vcmUgY2hhcmFjdGVycyBsZWZ0LlxuICAgICAgICAgKiBAcGFyYW0geyFmdW5jdGlvbihudW1iZXIpfSBkc3QgQnl0ZXMgZGVzdGluYXRpb24gYXMgYSBmdW5jdGlvbiBzdWNjZXNzaXZlbHkgY2FsbGVkIHdpdGggdGhlIG5leHQgYnl0ZS5cbiAgICAgICAgICovXG4gICAgICAgIHV0ZnguZW5jb2RlVVRGMTZ0b1VURjggPSBmdW5jdGlvbihzcmMsIGRzdCkge1xuICAgICAgICAgICAgdXRmeC5VVEYxNnRvVVRGOChzcmMsIGZ1bmN0aW9uKGNwKSB7XG4gICAgICAgICAgICAgICAgdXRmeC5lbmNvZGVVVEY4KGNwLCBkc3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlY29kZXMgYW5kIGNvbnZlcnRzIFVURjggYnl0ZXMgdG8gVVRGMTYgY2hhcmFjdGVycy5cbiAgICAgICAgICogQHBhcmFtIHshZnVuY3Rpb24oKTpudW1iZXJ8bnVsbH0gc3JjIEJ5dGVzIHNvdXJjZSBhcyBhIGZ1bmN0aW9uIHJldHVybmluZyB0aGUgbmV4dCBieXRlIHJlc3BlY3RpdmVseSBgbnVsbGAgaWYgdGhlcmVcbiAgICAgICAgICogIGFyZSBubyBtb3JlIGJ5dGVzIGxlZnQuXG4gICAgICAgICAqIEBwYXJhbSB7IWZ1bmN0aW9uKG51bWJlcil9IGRzdCBDaGFyYWN0ZXJzIGRlc3RpbmF0aW9uIGFzIGEgZnVuY3Rpb24gc3VjY2Vzc2l2ZWx5IGNhbGxlZCB3aXRoIGVhY2ggY29udmVydGVkIGNoYXIgY29kZS5cbiAgICAgICAgICogQHRocm93cyB7UmFuZ2VFcnJvcn0gSWYgYSBzdGFydGluZyBieXRlIGlzIGludmFsaWQgaW4gVVRGOFxuICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIGxhc3Qgc2VxdWVuY2UgaXMgdHJ1bmNhdGVkLiBIYXMgYW4gYXJyYXkgcHJvcGVydHkgYGJ5dGVzYCBob2xkaW5nIHRoZSByZW1haW5pbmcgYnl0ZXMuXG4gICAgICAgICAqL1xuICAgICAgICB1dGZ4LmRlY29kZVVURjh0b1VURjE2ID0gZnVuY3Rpb24oc3JjLCBkc3QpIHtcbiAgICAgICAgICAgIHV0ZnguZGVjb2RlVVRGOChzcmMsIGZ1bmN0aW9uKGNwKSB7XG4gICAgICAgICAgICAgICAgdXRmeC5VVEY4dG9VVEYxNihjcCwgZHN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxjdWxhdGVzIHRoZSBieXRlIGxlbmd0aCBvZiBhbiBVVEY4IGNvZGUgcG9pbnQuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjcCBVVEY4IGNvZGUgcG9pbnRcbiAgICAgICAgICogQHJldHVybnMge251bWJlcn0gQnl0ZSBsZW5ndGhcbiAgICAgICAgICovXG4gICAgICAgIHV0ZnguY2FsY3VsYXRlQ29kZVBvaW50ID0gZnVuY3Rpb24oY3ApIHtcbiAgICAgICAgICAgIHJldHVybiAoY3AgPCAweDgwKSA/IDEgOiAoY3AgPCAweDgwMCkgPyAyIDogKGNwIDwgMHgxMDAwMCkgPyAzIDogNDtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsY3VsYXRlcyB0aGUgbnVtYmVyIG9mIFVURjggYnl0ZXMgcmVxdWlyZWQgdG8gc3RvcmUgVVRGOCBjb2RlIHBvaW50cy5cbiAgICAgICAgICogQHBhcmFtIHsoIWZ1bmN0aW9uKCk6bnVtYmVyfG51bGwpfSBzcmMgQ29kZSBwb2ludHMgc291cmNlIGFzIGEgZnVuY3Rpb24gcmV0dXJuaW5nIHRoZSBuZXh0IGNvZGUgcG9pbnQgcmVzcGVjdGl2ZWx5XG4gICAgICAgICAqICBgbnVsbGAgaWYgdGhlcmUgYXJlIG5vIG1vcmUgY29kZSBwb2ludHMgbGVmdC5cbiAgICAgICAgICogQHJldHVybnMge251bWJlcn0gVGhlIG51bWJlciBvZiBVVEY4IGJ5dGVzIHJlcXVpcmVkXG4gICAgICAgICAqL1xuICAgICAgICB1dGZ4LmNhbGN1bGF0ZVVURjggPSBmdW5jdGlvbihzcmMpIHtcbiAgICAgICAgICAgIHZhciBjcCwgbD0wO1xuICAgICAgICAgICAgd2hpbGUgKChjcCA9IHNyYygpKSAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICBsICs9IChjcCA8IDB4ODApID8gMSA6IChjcCA8IDB4ODAwKSA/IDIgOiAoY3AgPCAweDEwMDAwKSA/IDMgOiA0O1xuICAgICAgICAgICAgcmV0dXJuIGw7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGN1bGF0ZXMgdGhlIG51bWJlciBvZiBVVEY4IGNvZGUgcG9pbnRzIHJlc3BlY3RpdmVseSBVVEY4IGJ5dGVzIHJlcXVpcmVkIHRvIHN0b3JlIFVURjE2IGNoYXIgY29kZXMuXG4gICAgICAgICAqIEBwYXJhbSB7KCFmdW5jdGlvbigpOm51bWJlcnxudWxsKX0gc3JjIENoYXJhY3RlcnMgc291cmNlIGFzIGEgZnVuY3Rpb24gcmV0dXJuaW5nIHRoZSBuZXh0IGNoYXIgY29kZSByZXNwZWN0aXZlbHlcbiAgICAgICAgICogIGBudWxsYCBpZiB0aGVyZSBhcmUgbm8gbW9yZSBjaGFyYWN0ZXJzIGxlZnQuXG4gICAgICAgICAqIEByZXR1cm5zIHshQXJyYXkuPG51bWJlcj59IFRoZSBudW1iZXIgb2YgVVRGOCBjb2RlIHBvaW50cyBhdCBpbmRleCAwIGFuZCB0aGUgbnVtYmVyIG9mIFVURjggYnl0ZXMgcmVxdWlyZWQgYXQgaW5kZXggMS5cbiAgICAgICAgICovXG4gICAgICAgIHV0ZnguY2FsY3VsYXRlVVRGMTZhc1VURjggPSBmdW5jdGlvbihzcmMpIHtcbiAgICAgICAgICAgIHZhciBuPTAsIGw9MDtcbiAgICAgICAgICAgIHV0ZnguVVRGMTZ0b1VURjgoc3JjLCBmdW5jdGlvbihjcCkge1xuICAgICAgICAgICAgICAgICsrbjsgbCArPSAoY3AgPCAweDgwKSA/IDEgOiAoY3AgPCAweDgwMCkgPyAyIDogKGNwIDwgMHgxMDAwMCkgPyAzIDogNDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFtuLGxdO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB1dGZ4O1xuICAgIH0oKTtcblxuICAgIC8vIGVuY29kaW5ncy91dGY4XG5cbiAgICAvKipcbiAgICAgKiBFbmNvZGVzIHRoaXMgQnl0ZUJ1ZmZlcidzIGNvbnRlbnRzIGJldHdlZW4ge0BsaW5rIEJ5dGVCdWZmZXIjb2Zmc2V0fSBhbmQge0BsaW5rIEJ5dGVCdWZmZXIjbGltaXR9IHRvIGFuIFVURjggZW5jb2RlZFxuICAgICAqICBzdHJpbmcuXG4gICAgICogQHJldHVybnMge3N0cmluZ30gSGV4IGVuY29kZWQgc3RyaW5nXG4gICAgICogQHRocm93cyB7UmFuZ2VFcnJvcn0gSWYgYG9mZnNldCA+IGxpbWl0YFxuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBCeXRlQnVmZmVyUHJvdG90eXBlLnRvVVRGOCA9IGZ1bmN0aW9uKGJlZ2luLCBlbmQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiZWdpbiA9PT0gJ3VuZGVmaW5lZCcpIGJlZ2luID0gdGhpcy5vZmZzZXQ7XG4gICAgICAgIGlmICh0eXBlb2YgZW5kID09PSAndW5kZWZpbmVkJykgZW5kID0gdGhpcy5saW1pdDtcbiAgICAgICAgaWYgKCF0aGlzLm5vQXNzZXJ0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGJlZ2luICE9PSAnbnVtYmVyJyB8fCBiZWdpbiAlIDEgIT09IDApXG4gICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCBiZWdpbjogTm90IGFuIGludGVnZXJcIik7XG4gICAgICAgICAgICBiZWdpbiA+Pj49IDA7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVuZCAhPT0gJ251bWJlcicgfHwgZW5kICUgMSAhPT0gMClcbiAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbGxlZ2FsIGVuZDogTm90IGFuIGludGVnZXJcIik7XG4gICAgICAgICAgICBlbmQgPj4+PSAwO1xuICAgICAgICAgICAgaWYgKGJlZ2luIDwgMCB8fCBiZWdpbiA+IGVuZCB8fCBlbmQgPiB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKVxuICAgICAgICAgICAgICAgIHRocm93IFJhbmdlRXJyb3IoXCJJbGxlZ2FsIHJhbmdlOiAwIDw9IFwiK2JlZ2luK1wiIDw9IFwiK2VuZCtcIiA8PSBcIit0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2Q7IHRyeSB7XG4gICAgICAgICAgICB1dGZ4LmRlY29kZVVURjh0b1VURjE2KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiZWdpbiA8IGVuZCA/IHRoaXMudmlld1tiZWdpbisrXSA6IG51bGw7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyksIHNkID0gc3RyaW5nRGVzdGluYXRpb24oKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChiZWdpbiAhPT0gZW5kKVxuICAgICAgICAgICAgICAgIHRocm93IFJhbmdlRXJyb3IoXCJJbGxlZ2FsIHJhbmdlOiBUcnVuY2F0ZWQgZGF0YSwgXCIrYmVnaW4rXCIgIT0gXCIrZW5kKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2QoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVjb2RlcyBhbiBVVEY4IGVuY29kZWQgc3RyaW5nIHRvIGEgQnl0ZUJ1ZmZlci5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIFN0cmluZyB0byBkZWNvZGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBsaXR0bGVFbmRpYW4gV2hldGhlciB0byB1c2UgbGl0dGxlIG9yIGJpZyBlbmRpYW4gYnl0ZSBvcmRlci4gRGVmYXVsdHMgdG9cbiAgICAgKiAge0BsaW5rIEJ5dGVCdWZmZXIuREVGQVVMVF9FTkRJQU59LlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IG5vQXNzZXJ0IFdoZXRoZXIgdG8gc2tpcCBhc3NlcnRpb25zIG9mIG9mZnNldHMgYW5kIHZhbHVlcy4gRGVmYXVsdHMgdG9cbiAgICAgKiAge0BsaW5rIEJ5dGVCdWZmZXIuREVGQVVMVF9OT0FTU0VSVH0uXG4gICAgICogQHJldHVybnMgeyFCeXRlQnVmZmVyfSBCeXRlQnVmZmVyXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIEJ5dGVCdWZmZXIuZnJvbVVURjggPSBmdW5jdGlvbihzdHIsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgICAgICAgaWYgKCFub0Fzc2VydClcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbGxlZ2FsIHN0cjogTm90IGEgc3RyaW5nXCIpO1xuICAgICAgICB2YXIgYmIgPSBuZXcgQnl0ZUJ1ZmZlcih1dGZ4LmNhbGN1bGF0ZVVURjE2YXNVVEY4KHN0cmluZ1NvdXJjZShzdHIpLCB0cnVlKVsxXSwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCksXG4gICAgICAgICAgICBpID0gMDtcbiAgICAgICAgdXRmeC5lbmNvZGVVVEYxNnRvVVRGOChzdHJpbmdTb3VyY2Uoc3RyKSwgZnVuY3Rpb24oYikge1xuICAgICAgICAgICAgYmIudmlld1tpKytdID0gYjtcbiAgICAgICAgfSk7XG4gICAgICAgIGJiLmxpbWl0ID0gaTtcbiAgICAgICAgcmV0dXJuIGJiO1xuICAgIH07XG5cbiAgICByZXR1cm4gQnl0ZUJ1ZmZlcjtcbn0pOyJdfQ==