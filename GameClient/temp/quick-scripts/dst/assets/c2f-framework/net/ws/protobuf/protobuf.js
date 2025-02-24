
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/net/ws/protobuf/protobuf.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}(function (process){
"use strict";
cc._RF.push(module, 'bdb28IdKRVNA4M4+3Vsav8v', 'protobuf');
// c2f-framework/net/ws/protobuf/protobuf.js

"use strict";

/*
 Copyright 2013 Daniel Wirtz <dcode@dcode.io>

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
 * @license protobuf.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
 * Released under the Apache License, Version 2.0
 * see: https://github.com/dcodeIO/protobuf.js for details
 */
(function (global, factory) {
  /* AMD */
  if (typeof define === 'function' && define["amd"]) define(["bytebuffer"], factory);
  /* CommonJS */
  else if (typeof require === "function" && typeof module === "object" && module && module["exports"]) module["exports"] = factory(require("bytebuffer"), true);
  /* Global */
  else (global["dcodeIO"] = global["dcodeIO"] || {})["ProtoBuf"] = factory(global["dcodeIO"]["ByteBuffer"]);
})(void 0, function (ByteBuffer, isCommonJS) {
  "use strict";
  /**
   * The ProtoBuf namespace.
   * @exports ProtoBuf
   * @namespace
   * @expose
   */

  var ProtoBuf = {};
  /**
   * @type {!function(new: ByteBuffer, ...[*])}
   * @expose
   */

  ProtoBuf.ByteBuffer = ByteBuffer;
  /**
   * @type {?function(new: Long, ...[*])}
   * @expose
   */

  ProtoBuf.Long = ByteBuffer.Long || null;
  /**
   * ProtoBuf.js version.
   * @type {string}
   * @const
   * @expose
   */

  ProtoBuf.VERSION = "5.0.3";
  /**
   * Wire types.
   * @type {Object.<string,number>}
   * @const
   * @expose
   */

  ProtoBuf.WIRE_TYPES = {};
  /**
   * Varint wire type.
   * @type {number}
   * @expose
   */

  ProtoBuf.WIRE_TYPES.VARINT = 0;
  /**
   * Fixed 64 bits wire type.
   * @type {number}
   * @const
   * @expose
   */

  ProtoBuf.WIRE_TYPES.BITS64 = 1;
  /**
   * Length delimited wire type.
   * @type {number}
   * @const
   * @expose
   */

  ProtoBuf.WIRE_TYPES.LDELIM = 2;
  /**
   * Start group wire type.
   * @type {number}
   * @const
   * @expose
   */

  ProtoBuf.WIRE_TYPES.STARTGROUP = 3;
  /**
   * End group wire type.
   * @type {number}
   * @const
   * @expose
   */

  ProtoBuf.WIRE_TYPES.ENDGROUP = 4;
  /**
   * Fixed 32 bits wire type.
   * @type {number}
   * @const
   * @expose
   */

  ProtoBuf.WIRE_TYPES.BITS32 = 5;
  /**
   * Packable wire types.
   * @type {!Array.<number>}
   * @const
   * @expose
   */

  ProtoBuf.PACKABLE_WIRE_TYPES = [ProtoBuf.WIRE_TYPES.VARINT, ProtoBuf.WIRE_TYPES.BITS64, ProtoBuf.WIRE_TYPES.BITS32];
  /**
   * Types.
   * @dict
   * @type {!Object.<string,{name: string, wireType: number, defaultValue: *}>}
   * @const
   * @expose
   */

  ProtoBuf.TYPES = {
    // According to the protobuf spec.
    "int32": {
      name: "int32",
      wireType: ProtoBuf.WIRE_TYPES.VARINT,
      defaultValue: 0
    },
    "uint32": {
      name: "uint32",
      wireType: ProtoBuf.WIRE_TYPES.VARINT,
      defaultValue: 0
    },
    "sint32": {
      name: "sint32",
      wireType: ProtoBuf.WIRE_TYPES.VARINT,
      defaultValue: 0
    },
    "int64": {
      name: "int64",
      wireType: ProtoBuf.WIRE_TYPES.VARINT,
      defaultValue: ProtoBuf.Long ? ProtoBuf.Long.ZERO : undefined
    },
    "uint64": {
      name: "uint64",
      wireType: ProtoBuf.WIRE_TYPES.VARINT,
      defaultValue: ProtoBuf.Long ? ProtoBuf.Long.UZERO : undefined
    },
    "sint64": {
      name: "sint64",
      wireType: ProtoBuf.WIRE_TYPES.VARINT,
      defaultValue: ProtoBuf.Long ? ProtoBuf.Long.ZERO : undefined
    },
    "bool": {
      name: "bool",
      wireType: ProtoBuf.WIRE_TYPES.VARINT,
      defaultValue: false
    },
    "double": {
      name: "double",
      wireType: ProtoBuf.WIRE_TYPES.BITS64,
      defaultValue: 0
    },
    "string": {
      name: "string",
      wireType: ProtoBuf.WIRE_TYPES.LDELIM,
      defaultValue: ""
    },
    "bytes": {
      name: "bytes",
      wireType: ProtoBuf.WIRE_TYPES.LDELIM,
      defaultValue: null // overridden in the code, must be a unique instance

    },
    "fixed32": {
      name: "fixed32",
      wireType: ProtoBuf.WIRE_TYPES.BITS32,
      defaultValue: 0
    },
    "sfixed32": {
      name: "sfixed32",
      wireType: ProtoBuf.WIRE_TYPES.BITS32,
      defaultValue: 0
    },
    "fixed64": {
      name: "fixed64",
      wireType: ProtoBuf.WIRE_TYPES.BITS64,
      defaultValue: ProtoBuf.Long ? ProtoBuf.Long.UZERO : undefined
    },
    "sfixed64": {
      name: "sfixed64",
      wireType: ProtoBuf.WIRE_TYPES.BITS64,
      defaultValue: ProtoBuf.Long ? ProtoBuf.Long.ZERO : undefined
    },
    "float": {
      name: "float",
      wireType: ProtoBuf.WIRE_TYPES.BITS32,
      defaultValue: 0
    },
    "enum": {
      name: "enum",
      wireType: ProtoBuf.WIRE_TYPES.VARINT,
      defaultValue: 0
    },
    "message": {
      name: "message",
      wireType: ProtoBuf.WIRE_TYPES.LDELIM,
      defaultValue: null
    },
    "group": {
      name: "group",
      wireType: ProtoBuf.WIRE_TYPES.STARTGROUP,
      defaultValue: null
    }
  };
  /**
   * Valid map key types.
   * @type {!Array.<!Object.<string,{name: string, wireType: number, defaultValue: *}>>}
   * @const
   * @expose
   */

  ProtoBuf.MAP_KEY_TYPES = [ProtoBuf.TYPES["int32"], ProtoBuf.TYPES["sint32"], ProtoBuf.TYPES["sfixed32"], ProtoBuf.TYPES["uint32"], ProtoBuf.TYPES["fixed32"], ProtoBuf.TYPES["int64"], ProtoBuf.TYPES["sint64"], ProtoBuf.TYPES["sfixed64"], ProtoBuf.TYPES["uint64"], ProtoBuf.TYPES["fixed64"], ProtoBuf.TYPES["bool"], ProtoBuf.TYPES["string"], ProtoBuf.TYPES["bytes"]];
  /**
   * Minimum field id.
   * @type {number}
   * @const
   * @expose
   */

  ProtoBuf.ID_MIN = 1;
  /**
   * Maximum field id.
   * @type {number}
   * @const
   * @expose
   */

  ProtoBuf.ID_MAX = 0x1FFFFFFF;
  /**
   * If set to `true`, field names will be converted from underscore notation to camel case. Defaults to `false`.
   *  Must be set prior to parsing.
   * @type {boolean}
   * @expose
   */

  ProtoBuf.convertFieldsToCamelCase = false;
  /**
   * By default, messages are populated with (setX, set_x) accessors for each field. This can be disabled by
   *  setting this to `false` prior to building messages.
   * @type {boolean}
   * @expose
   */

  ProtoBuf.populateAccessors = true;
  /**
   * By default, messages are populated with default values if a field is not present on the wire. To disable
   *  this behavior, set this setting to `false`.
   * @type {boolean}
   * @expose
   */

  ProtoBuf.populateDefaults = true;
  /**
   * @alias ProtoBuf.Util
   * @expose
   */

  ProtoBuf.Util = function () {
    "use strict";
    /**
     * ProtoBuf utilities.
     * @exports ProtoBuf.Util
     * @namespace
     */

    var Util = {};
    /**
     * Flag if running in node or not.
     * @type {boolean}
     * @const
     * @expose
     */

    Util.IS_NODE = !!(typeof process === 'object' && process + '' === '[object process]' && !process['browser']);
    /**
     * Constructs a XMLHttpRequest object.
     * @return {XMLHttpRequest}
     * @throws {Error} If XMLHttpRequest is not supported
     * @expose
     */

    Util.XHR = function () {
      // No dependencies please, ref: http://www.quirksmode.org/js/xmlhttp.html
      var XMLHttpFactories = [function () {
        return new XMLHttpRequest();
      }, function () {
        return new ActiveXObject("Msxml2.XMLHTTP");
      }, function () {
        return new ActiveXObject("Msxml3.XMLHTTP");
      }, function () {
        return new ActiveXObject("Microsoft.XMLHTTP");
      }];
      /** @type {?XMLHttpRequest} */

      var xhr = null;

      for (var i = 0; i < XMLHttpFactories.length; i++) {
        try {
          xhr = XMLHttpFactories[i]();
        } catch (e) {
          continue;
        }

        break;
      }

      if (!xhr) throw Error("XMLHttpRequest is not supported");
      return xhr;
    };
    /**
     * Fetches a resource.
     * @param {string} path Resource path
     * @param {function(?string)=} callback Callback receiving the resource's contents. If omitted the resource will
     *   be fetched synchronously. If the request failed, contents will be null.
     * @return {?string|undefined} Resource contents if callback is omitted (null if the request failed), else undefined.
     * @expose
     */


    Util.fetch = function (path, callback) {
      if (callback && typeof callback != 'function') callback = null;

      if (cc) {
        c2f.res.load('resources', path, cc.TextAsset, function (err, result) {
          var ret = null;
          if (!err) ret = result.text;
          c2f.res.release(path, cc.TextAsset);

          if (callback) {
            callback(ret);
          } else {
            return ret;
          }
        });
        return;
      }

      if (Util.IS_NODE) {
        var fs = require("fs");

        if (callback) {
          fs.readFile(path, function (err, data) {
            if (err) callback(null);else callback("" + data);
          });
        } else try {
          return fs.readFileSync(path);
        } catch (e) {
          return null;
        }
      } else {
        var xhr = Util.XHR();
        xhr.open('GET', path, callback ? true : false); // xhr.setRequestHeader('User-Agent', 'XMLHTTP/1.0');

        xhr.setRequestHeader('Accept', 'text/plain');
        if (typeof xhr.overrideMimeType === 'function') xhr.overrideMimeType('text/plain');

        if (callback) {
          xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) return;
            if (
            /* remote */
            xhr.status == 200 ||
            /* local */
            xhr.status == 0 && typeof xhr.responseText === 'string') callback(xhr.responseText);else callback(null);
          };

          if (xhr.readyState == 4) return;
          xhr.send(null);
        } else {
          xhr.send(null);
          if (
          /* remote */
          xhr.status == 200 ||
          /* local */
          xhr.status == 0 && typeof xhr.responseText === 'string') return xhr.responseText;
          return null;
        }
      }
    };
    /**
     * Converts a string to camel case.
     * @param {string} str
     * @returns {string}
     * @expose
     */


    Util.toCamelCase = function (str) {
      return str.replace(/_([a-zA-Z])/g, function ($0, $1) {
        return $1.toUpperCase();
      });
    };

    return Util;
  }();
  /**
   * Language expressions.
   * @type {!Object.<string,!RegExp>}
   * @expose
   */


  ProtoBuf.Lang = {
    // Characters always ending a statement
    DELIM: /[\s\{\}=;:\[\],'"\(\)<>]/g,
    // Field rules
    RULE: /^(?:required|optional|repeated|map)$/,
    // Field types
    TYPE: /^(?:double|float|int32|uint32|sint32|int64|uint64|sint64|fixed32|sfixed32|fixed64|sfixed64|bool|string|bytes)$/,
    // Names
    NAME: /^[a-zA-Z_][a-zA-Z_0-9]*$/,
    // Type definitions
    TYPEDEF: /^[a-zA-Z][a-zA-Z_0-9]*$/,
    // Type references
    TYPEREF: /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
    // Fully qualified type references
    FQTYPEREF: /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/,
    // All numbers
    NUMBER: /^-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+|([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?)|inf|nan)$/,
    // Decimal numbers
    NUMBER_DEC: /^(?:[1-9][0-9]*|0)$/,
    // Hexadecimal numbers
    NUMBER_HEX: /^0[xX][0-9a-fA-F]+$/,
    // Octal numbers
    NUMBER_OCT: /^0[0-7]+$/,
    // Floating point numbers
    NUMBER_FLT: /^([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?|inf|nan)$/,
    // Booleans
    BOOL: /^(?:true|false)$/i,
    // Id numbers
    ID: /^(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
    // Negative id numbers (enum values)
    NEGID: /^\-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
    // Whitespaces
    WHITESPACE: /\s/,
    // All strings
    STRING: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")|(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
    // Double quoted strings
    STRING_DQ: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
    // Single quoted strings
    STRING_SQ: /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g
  };
  /**
   * @alias ProtoBuf.DotProto
   * @expose
   */

  ProtoBuf.DotProto = function (ProtoBuf, Lang) {
    "use strict";
    /**
     * Utilities to parse .proto files.
     * @exports ProtoBuf.DotProto
     * @namespace
     */

    var DotProto = {};
    /**
     * Constructs a new Tokenizer.
     * @exports ProtoBuf.DotProto.Tokenizer
     * @class prototype tokenizer
     * @param {string} proto Proto to tokenize
     * @constructor
     */

    var Tokenizer = function Tokenizer(proto) {
      /**
       * Source to parse.
       * @type {string}
       * @expose
       */
      this.source = proto + "";
      /**
       * Current index.
       * @type {number}
       * @expose
       */

      this.index = 0;
      /**
       * Current line.
       * @type {number}
       * @expose
       */

      this.line = 1;
      /**
       * Token stack.
       * @type {!Array.<string>}
       * @expose
       */

      this.stack = [];
      /**
       * Opening character of the current string read, if any.
       * @type {?string}
       * @private
       */

      this._stringOpen = null;
    };
    /**
     * @alias ProtoBuf.DotProto.Tokenizer.prototype
     * @inner
     */


    var TokenizerPrototype = Tokenizer.prototype;
    /**
     * Reads a string beginning at the current index.
     * @return {string}
     * @private
     */

    TokenizerPrototype._readString = function () {
      var re = this._stringOpen === '"' ? Lang.STRING_DQ : Lang.STRING_SQ;
      re.lastIndex = this.index - 1; // Include the open quote

      var match = re.exec(this.source);
      if (!match) throw Error("unterminated string");
      this.index = re.lastIndex;
      this.stack.push(this._stringOpen);
      this._stringOpen = null;
      return match[1];
    };
    /**
     * Gets the next token and advances by one.
     * @return {?string} Token or `null` on EOF
     * @expose
     */


    TokenizerPrototype.next = function () {
      if (this.stack.length > 0) return this.stack.shift();
      if (this.index >= this.source.length) return null;
      if (this._stringOpen !== null) return this._readString();
      var repeat, prev, next;

      do {
        repeat = false; // Strip white spaces

        while (Lang.WHITESPACE.test(next = this.source.charAt(this.index))) {
          if (next === '\n') ++this.line;
          if (++this.index === this.source.length) return null;
        } // Strip comments


        if (this.source.charAt(this.index) === '/') {
          ++this.index;

          if (this.source.charAt(this.index) === '/') {
            // Line
            while (this.source.charAt(++this.index) !== '\n') {
              if (this.index == this.source.length) return null;
            }

            ++this.index;
            ++this.line;
            repeat = true;
          } else if ((next = this.source.charAt(this.index)) === '*') {
            /* Block */
            do {
              if (next === '\n') ++this.line;
              if (++this.index === this.source.length) return null;
              prev = next;
              next = this.source.charAt(this.index);
            } while (prev !== '*' || next !== '/');

            ++this.index;
            repeat = true;
          } else return '/';
        }
      } while (repeat);

      if (this.index === this.source.length) return null; // Read the next token

      var end = this.index;
      Lang.DELIM.lastIndex = 0;
      var delim = Lang.DELIM.test(this.source.charAt(end++));
      if (!delim) while (end < this.source.length && !Lang.DELIM.test(this.source.charAt(end))) {
        ++end;
      }
      var token = this.source.substring(this.index, this.index = end);
      if (token === '"' || token === "'") this._stringOpen = token;
      return token;
    };
    /**
     * Peeks for the next token.
     * @return {?string} Token or `null` on EOF
     * @expose
     */


    TokenizerPrototype.peek = function () {
      if (this.stack.length === 0) {
        var token = this.next();
        if (token === null) return null;
        this.stack.push(token);
      }

      return this.stack[0];
    };
    /**
     * Skips a specific token and throws if it differs.
     * @param {string} expected Expected token
     * @throws {Error} If the actual token differs
     */


    TokenizerPrototype.skip = function (expected) {
      var actual = this.next();
      if (actual !== expected) throw Error("illegal '" + actual + "', '" + expected + "' expected");
    };
    /**
     * Omits an optional token.
     * @param {string} expected Expected optional token
     * @returns {boolean} `true` if the token exists
     */


    TokenizerPrototype.omit = function (expected) {
      if (this.peek() === expected) {
        this.next();
        return true;
      }

      return false;
    };
    /**
     * Returns a string representation of this object.
     * @return {string} String representation as of "Tokenizer(index/length)"
     * @expose
     */


    TokenizerPrototype.toString = function () {
      return "Tokenizer (" + this.index + "/" + this.source.length + " at line " + this.line + ")";
    };
    /**
     * @alias ProtoBuf.DotProto.Tokenizer
     * @expose
     */


    DotProto.Tokenizer = Tokenizer;
    /**
     * Constructs a new Parser.
     * @exports ProtoBuf.DotProto.Parser
     * @class prototype parser
     * @param {string} source Source
     * @constructor
     */

    var Parser = function Parser(source) {
      /**
       * Tokenizer.
       * @type {!ProtoBuf.DotProto.Tokenizer}
       * @expose
       */
      this.tn = new Tokenizer(source);
      /**
       * Whether parsing proto3 or not.
       * @type {boolean}
       */

      this.proto3 = false;
    };
    /**
     * @alias ProtoBuf.DotProto.Parser.prototype
     * @inner
     */


    var ParserPrototype = Parser.prototype;
    /**
     * Parses the source.
     * @returns {!Object}
     * @throws {Error} If the source cannot be parsed
     * @expose
     */

    ParserPrototype.parse = function () {
      var topLevel = {
        "name": "[ROOT]",
        // temporary
        "package": null,
        "messages": [],
        "enums": [],
        "imports": [],
        "options": {},
        "services": [] // "syntax": undefined

      };
      var token,
          head = true,
          weak;

      try {
        while (token = this.tn.next()) {
          switch (token) {
            case 'package':
              if (!head || topLevel["package"] !== null) throw Error("unexpected 'package'");
              token = this.tn.next();
              if (!Lang.TYPEREF.test(token)) throw Error("illegal package name: " + token);
              this.tn.skip(";");
              topLevel["package"] = token;
              break;

            case 'import':
              if (!head) throw Error("unexpected 'import'");
              token = this.tn.peek();
              if (token === "public" || (weak = token === "weak")) // token ignored
                this.tn.next();
              token = this._readString();
              this.tn.skip(";");
              if (!weak) // import ignored
                topLevel["imports"].push(token);
              break;

            case 'syntax':
              if (!head) throw Error("unexpected 'syntax'");
              this.tn.skip("=");
              if ((topLevel["syntax"] = this._readString()) === "proto3") this.proto3 = true;
              this.tn.skip(";");
              break;

            case 'message':
              this._parseMessage(topLevel, null);

              head = false;
              break;

            case 'enum':
              this._parseEnum(topLevel);

              head = false;
              break;

            case 'option':
              this._parseOption(topLevel);

              break;

            case 'service':
              this._parseService(topLevel);

              break;

            case 'extend':
              this._parseExtend(topLevel);

              break;

            default:
              throw Error("unexpected '" + token + "'");
          }
        }
      } catch (e) {
        e.message = "Parse error at line " + this.tn.line + ": " + e.message;
        throw e;
      }

      delete topLevel["name"];
      return topLevel;
    };
    /**
     * Parses the specified source.
     * @returns {!Object}
     * @throws {Error} If the source cannot be parsed
     * @expose
     */


    Parser.parse = function (source) {
      return new Parser(source).parse();
    }; // ----- Conversion ------

    /**
     * Converts a numerical string to an id.
     * @param {string} value
     * @param {boolean=} mayBeNegative
     * @returns {number}
     * @inner
     */


    function mkId(value, mayBeNegative) {
      var id = -1,
          sign = 1;

      if (value.charAt(0) == '-') {
        sign = -1;
        value = value.substring(1);
      }

      if (Lang.NUMBER_DEC.test(value)) id = parseInt(value);else if (Lang.NUMBER_HEX.test(value)) id = parseInt(value.substring(2), 16);else if (Lang.NUMBER_OCT.test(value)) id = parseInt(value.substring(1), 8);else throw Error("illegal id value: " + (sign < 0 ? '-' : '') + value);
      id = sign * id | 0; // Force to 32bit

      if (!mayBeNegative && id < 0) throw Error("illegal id value: " + (sign < 0 ? '-' : '') + value);
      return id;
    }
    /**
     * Converts a numerical string to a number.
     * @param {string} val
     * @returns {number}
     * @inner
     */


    function mkNumber(val) {
      var sign = 1;

      if (val.charAt(0) == '-') {
        sign = -1;
        val = val.substring(1);
      }

      if (Lang.NUMBER_DEC.test(val)) return sign * parseInt(val, 10);else if (Lang.NUMBER_HEX.test(val)) return sign * parseInt(val.substring(2), 16);else if (Lang.NUMBER_OCT.test(val)) return sign * parseInt(val.substring(1), 8);else if (val === 'inf') return sign * Infinity;else if (val === 'nan') return NaN;else if (Lang.NUMBER_FLT.test(val)) return sign * parseFloat(val);
      throw Error("illegal number value: " + (sign < 0 ? '-' : '') + val);
    } // ----- Reading ------

    /**
     * Reads a string.
     * @returns {string}
     * @private
     */


    ParserPrototype._readString = function () {
      var value = "",
          token,
          delim;

      do {
        delim = this.tn.next();
        if (delim !== "'" && delim !== '"') throw Error("illegal string delimiter: " + delim);
        value += this.tn.next();
        this.tn.skip(delim);
        token = this.tn.peek();
      } while (token === '"' || token === '"'); // multi line?


      return value;
    };
    /**
     * Reads a value.
     * @param {boolean=} mayBeTypeRef
     * @returns {number|boolean|string}
     * @private
     */


    ParserPrototype._readValue = function (mayBeTypeRef) {
      var token = this.tn.peek(),
          value;
      if (token === '"' || token === "'") return this._readString();
      this.tn.next();
      if (Lang.NUMBER.test(token)) return mkNumber(token);
      if (Lang.BOOL.test(token)) return token.toLowerCase() === 'true';
      if (mayBeTypeRef && Lang.TYPEREF.test(token)) return token;
      throw Error("illegal value: " + token);
    }; // ----- Parsing constructs -----

    /**
     * Parses a namespace option.
     * @param {!Object} parent Parent definition
     * @param {boolean=} isList
     * @private
     */


    ParserPrototype._parseOption = function (parent, isList) {
      var token = this.tn.next(),
          custom = false;

      if (token === '(') {
        custom = true;
        token = this.tn.next();
      }

      if (!Lang.TYPEREF.test(token)) // we can allow options of the form google.protobuf.* since they will just get ignored anyways
        // if (!/google\.protobuf\./.test(token)) // FIXME: Why should that not be a valid typeref?
        throw Error("illegal option name: " + token);
      var name = token;

      if (custom) {
        // (my_method_option).foo, (my_method_option), some_method_option, (foo.my_option).bar
        this.tn.skip(')');
        name = '(' + name + ')';
        token = this.tn.peek();

        if (Lang.FQTYPEREF.test(token)) {
          name += token;
          this.tn.next();
        }
      }

      this.tn.skip('=');

      this._parseOptionValue(parent, name);

      if (!isList) this.tn.skip(";");
    };
    /**
     * Sets an option on the specified options object.
     * @param {!Object.<string,*>} options
     * @param {string} name
     * @param {string|number|boolean} value
     * @inner
     */


    function setOption(options, name, value) {
      if (typeof options[name] === 'undefined') options[name] = value;else {
        if (!Array.isArray(options[name])) options[name] = [options[name]];
        options[name].push(value);
      }
    }
    /**
     * Parses an option value.
     * @param {!Object} parent
     * @param {string} name
     * @private
     */


    ParserPrototype._parseOptionValue = function (parent, name) {
      var token = this.tn.peek();

      if (token !== '{') {
        // Plain value
        setOption(parent["options"], name, this._readValue(true));
      } else {
        // Aggregate options
        this.tn.skip("{");

        while ((token = this.tn.next()) !== '}') {
          if (!Lang.NAME.test(token)) throw Error("illegal option name: " + name + "." + token);
          if (this.tn.omit(":")) setOption(parent["options"], name + "." + token, this._readValue(true));else this._parseOptionValue(parent, name + "." + token);
        }
      }
    };
    /**
     * Parses a service definition.
     * @param {!Object} parent Parent definition
     * @private
     */


    ParserPrototype._parseService = function (parent) {
      var token = this.tn.next();
      if (!Lang.NAME.test(token)) throw Error("illegal service name at line " + this.tn.line + ": " + token);
      var name = token;
      var svc = {
        "name": name,
        "rpc": {},
        "options": {}
      };
      this.tn.skip("{");

      while ((token = this.tn.next()) !== '}') {
        if (token === "option") this._parseOption(svc);else if (token === 'rpc') this._parseServiceRPC(svc);else throw Error("illegal service token: " + token);
      }

      this.tn.omit(";");
      parent["services"].push(svc);
    };
    /**
     * Parses a RPC service definition of the form ['rpc', name, (request), 'returns', (response)].
     * @param {!Object} svc Service definition
     * @private
     */


    ParserPrototype._parseServiceRPC = function (svc) {
      var type = "rpc",
          token = this.tn.next();
      if (!Lang.NAME.test(token)) throw Error("illegal rpc service method name: " + token);
      var name = token;
      var method = {
        "request": null,
        "response": null,
        "request_stream": false,
        "response_stream": false,
        "options": {}
      };
      this.tn.skip("(");
      token = this.tn.next();

      if (token.toLowerCase() === "stream") {
        method["request_stream"] = true;
        token = this.tn.next();
      }

      if (!Lang.TYPEREF.test(token)) throw Error("illegal rpc service request type: " + token);
      method["request"] = token;
      this.tn.skip(")");
      token = this.tn.next();
      if (token.toLowerCase() !== "returns") throw Error("illegal rpc service request type delimiter: " + token);
      this.tn.skip("(");
      token = this.tn.next();

      if (token.toLowerCase() === "stream") {
        method["response_stream"] = true;
        token = this.tn.next();
      }

      method["response"] = token;
      this.tn.skip(")");
      token = this.tn.peek();

      if (token === '{') {
        this.tn.next();

        while ((token = this.tn.next()) !== '}') {
          if (token === 'option') this._parseOption(method);else throw Error("illegal rpc service token: " + token);
        }

        this.tn.omit(";");
      } else this.tn.skip(";");

      if (typeof svc[type] === 'undefined') svc[type] = {};
      svc[type][name] = method;
    };
    /**
     * Parses a message definition.
     * @param {!Object} parent Parent definition
     * @param {!Object=} fld Field definition if this is a group
     * @returns {!Object}
     * @private
     */


    ParserPrototype._parseMessage = function (parent, fld) {
      var isGroup = !!fld,
          token = this.tn.next();
      var msg = {
        "name": "",
        "fields": [],
        "enums": [],
        "messages": [],
        "options": {},
        "services": [],
        "oneofs": {} // "extensions": undefined

      };
      if (!Lang.NAME.test(token)) throw Error("illegal " + (isGroup ? "group" : "message") + " name: " + token);
      msg["name"] = token;

      if (isGroup) {
        this.tn.skip("=");
        fld["id"] = mkId(this.tn.next());
        msg["isGroup"] = true;
      }

      token = this.tn.peek();
      if (token === '[' && fld) this._parseFieldOptions(fld);
      this.tn.skip("{");

      while ((token = this.tn.next()) !== '}') {
        if (Lang.RULE.test(token)) this._parseMessageField(msg, token);else if (token === "oneof") this._parseMessageOneOf(msg);else if (token === "enum") this._parseEnum(msg);else if (token === "message") this._parseMessage(msg);else if (token === "option") this._parseOption(msg);else if (token === "service") this._parseService(msg);else if (token === "extensions") {
          if (msg.hasOwnProperty("extensions")) {
            msg["extensions"] = msg["extensions"].concat(this._parseExtensionRanges());
          } else {
            msg["extensions"] = this._parseExtensionRanges();
          }
        } else if (token === "reserved") this._parseIgnored(); // TODO
        else if (token === "extend") this._parseExtend(msg);else if (Lang.TYPEREF.test(token)) {
          if (!this.proto3) throw Error("illegal field rule: " + token);

          this._parseMessageField(msg, "optional", token);
        } else throw Error("illegal message token: " + token);
      }

      this.tn.omit(";");
      parent["messages"].push(msg);
      return msg;
    };
    /**
     * Parses an ignored statement.
     * @private
     */


    ParserPrototype._parseIgnored = function () {
      while (this.tn.peek() !== ';') {
        this.tn.next();
      }

      this.tn.skip(";");
    };
    /**
     * Parses a message field.
     * @param {!Object} msg Message definition
     * @param {string} rule Field rule
     * @param {string=} type Field type if already known (never known for maps)
     * @returns {!Object} Field descriptor
     * @private
     */


    ParserPrototype._parseMessageField = function (msg, rule, type) {
      if (!Lang.RULE.test(rule)) throw Error("illegal message field rule: " + rule);
      var fld = {
        "rule": rule,
        "type": "",
        "name": "",
        "options": {},
        "id": 0
      };
      var token;

      if (rule === "map") {
        if (type) throw Error("illegal type: " + type);
        this.tn.skip('<');
        token = this.tn.next();
        if (!Lang.TYPE.test(token) && !Lang.TYPEREF.test(token)) throw Error("illegal message field type: " + token);
        fld["keytype"] = token;
        this.tn.skip(',');
        token = this.tn.next();
        if (!Lang.TYPE.test(token) && !Lang.TYPEREF.test(token)) throw Error("illegal message field: " + token);
        fld["type"] = token;
        this.tn.skip('>');
        token = this.tn.next();
        if (!Lang.NAME.test(token)) throw Error("illegal message field name: " + token);
        fld["name"] = token;
        this.tn.skip("=");
        fld["id"] = mkId(this.tn.next());
        token = this.tn.peek();
        if (token === '[') this._parseFieldOptions(fld);
        this.tn.skip(";");
      } else {
        type = typeof type !== 'undefined' ? type : this.tn.next();

        if (type === "group") {
          // "A [legacy] group simply combines a nested message type and a field into a single declaration. In your
          // code, you can treat this message just as if it had a Result type field called result (the latter name is
          // converted to lower-case so that it does not conflict with the former)."
          var grp = this._parseMessage(msg, fld);

          if (!/^[A-Z]/.test(grp["name"])) throw Error('illegal group name: ' + grp["name"]);
          fld["type"] = grp["name"];
          fld["name"] = grp["name"].toLowerCase();
          this.tn.omit(";");
        } else {
          if (!Lang.TYPE.test(type) && !Lang.TYPEREF.test(type)) throw Error("illegal message field type: " + type);
          fld["type"] = type;
          token = this.tn.next();
          if (!Lang.NAME.test(token)) throw Error("illegal message field name: " + token);
          fld["name"] = token;
          this.tn.skip("=");
          fld["id"] = mkId(this.tn.next());
          token = this.tn.peek();
          if (token === "[") this._parseFieldOptions(fld);
          this.tn.skip(";");
        }
      }

      msg["fields"].push(fld);
      return fld;
    };
    /**
     * Parses a message oneof.
     * @param {!Object} msg Message definition
     * @private
     */


    ParserPrototype._parseMessageOneOf = function (msg) {
      var token = this.tn.next();
      if (!Lang.NAME.test(token)) throw Error("illegal oneof name: " + token);
      var name = token,
          fld;
      var fields = [];
      this.tn.skip("{");

      while ((token = this.tn.next()) !== "}") {
        fld = this._parseMessageField(msg, "optional", token);
        fld["oneof"] = name;
        fields.push(fld["id"]);
      }

      this.tn.omit(";");
      msg["oneofs"][name] = fields;
    };
    /**
     * Parses a set of field option definitions.
     * @param {!Object} fld Field definition
     * @private
     */


    ParserPrototype._parseFieldOptions = function (fld) {
      this.tn.skip("[");
      var token,
          first = true;

      while ((token = this.tn.peek()) !== ']') {
        if (!first) this.tn.skip(",");

        this._parseOption(fld, true);

        first = false;
      }

      this.tn.next();
    };
    /**
     * Parses an enum.
     * @param {!Object} msg Message definition
     * @private
     */


    ParserPrototype._parseEnum = function (msg) {
      var enm = {
        "name": "",
        "values": [],
        "options": {}
      };
      var token = this.tn.next();
      if (!Lang.NAME.test(token)) throw Error("illegal name: " + token);
      enm["name"] = token;
      this.tn.skip("{");

      while ((token = this.tn.next()) !== '}') {
        if (token === "option") this._parseOption(enm);else {
          if (!Lang.NAME.test(token)) throw Error("illegal name: " + token);
          this.tn.skip("=");
          var val = {
            "name": token,
            "id": mkId(this.tn.next(), true)
          };
          token = this.tn.peek();
          if (token === "[") this._parseFieldOptions({
            "options": {}
          });
          this.tn.skip(";");
          enm["values"].push(val);
        }
      }

      this.tn.omit(";");
      msg["enums"].push(enm);
    };
    /**
     * Parses extension / reserved ranges.
     * @returns {!Array.<!Array.<number>>}
     * @private
     */


    ParserPrototype._parseExtensionRanges = function () {
      var ranges = [];
      var token, range, value;

      do {
        range = [];

        while (true) {
          token = this.tn.next();

          switch (token) {
            case "min":
              value = ProtoBuf.ID_MIN;
              break;

            case "max":
              value = ProtoBuf.ID_MAX;
              break;

            default:
              value = mkNumber(token);
              break;
          }

          range.push(value);
          if (range.length === 2) break;

          if (this.tn.peek() !== "to") {
            range.push(value);
            break;
          }

          this.tn.next();
        }

        ranges.push(range);
      } while (this.tn.omit(","));

      this.tn.skip(";");
      return ranges;
    };
    /**
     * Parses an extend block.
     * @param {!Object} parent Parent object
     * @private
     */


    ParserPrototype._parseExtend = function (parent) {
      var token = this.tn.next();
      if (!Lang.TYPEREF.test(token)) throw Error("illegal extend reference: " + token);
      var ext = {
        "ref": token,
        "fields": []
      };
      this.tn.skip("{");

      while ((token = this.tn.next()) !== '}') {
        if (Lang.RULE.test(token)) this._parseMessageField(ext, token);else if (Lang.TYPEREF.test(token)) {
          if (!this.proto3) throw Error("illegal field rule: " + token);

          this._parseMessageField(ext, "optional", token);
        } else throw Error("illegal extend token: " + token);
      }

      this.tn.omit(";");
      parent["messages"].push(ext);
      return ext;
    }; // ----- General -----

    /**
     * Returns a string representation of this parser.
     * @returns {string}
     */


    ParserPrototype.toString = function () {
      return "Parser at line " + this.tn.line;
    };
    /**
     * @alias ProtoBuf.DotProto.Parser
     * @expose
     */


    DotProto.Parser = Parser;
    return DotProto;
  }(ProtoBuf, ProtoBuf.Lang);
  /**
   * @alias ProtoBuf.Reflect
   * @expose
   */


  ProtoBuf.Reflect = function (ProtoBuf) {
    "use strict";
    /**
     * Reflection types.
     * @exports ProtoBuf.Reflect
     * @namespace
     */

    var Reflect = {};
    /**
     * Constructs a Reflect base class.
     * @exports ProtoBuf.Reflect.T
     * @constructor
     * @abstract
     * @param {!ProtoBuf.Builder} builder Builder reference
     * @param {?ProtoBuf.Reflect.T} parent Parent object
     * @param {string} name Object name
     */

    var T = function T(builder, parent, name) {
      /**
       * Builder reference.
       * @type {!ProtoBuf.Builder}
       * @expose
       */
      this.builder = builder;
      /**
       * Parent object.
       * @type {?ProtoBuf.Reflect.T}
       * @expose
       */

      this.parent = parent;
      /**
       * Object name in namespace.
       * @type {string}
       * @expose
       */

      this.name = name;
      /**
       * Fully qualified class name
       * @type {string}
       * @expose
       */

      this.className;
    };
    /**
     * @alias ProtoBuf.Reflect.T.prototype
     * @inner
     */


    var TPrototype = T.prototype;
    /**
     * Returns the fully qualified name of this object.
     * @returns {string} Fully qualified name as of ".PATH.TO.THIS"
     * @expose
     */

    TPrototype.fqn = function () {
      var name = this.name,
          ptr = this;

      do {
        ptr = ptr.parent;
        if (ptr == null) break;
        name = ptr.name + "." + name;
      } while (true);

      return name;
    };
    /**
     * Returns a string representation of this Reflect object (its fully qualified name).
     * @param {boolean=} includeClass Set to true to include the class name. Defaults to false.
     * @return String representation
     * @expose
     */


    TPrototype.toString = function (includeClass) {
      return (includeClass ? this.className + " " : "") + this.fqn();
    };
    /**
     * Builds this type.
     * @throws {Error} If this type cannot be built directly
     * @expose
     */


    TPrototype.build = function () {
      throw Error(this.toString(true) + " cannot be built directly");
    };
    /**
     * @alias ProtoBuf.Reflect.T
     * @expose
     */


    Reflect.T = T;
    /**
     * Constructs a new Namespace.
     * @exports ProtoBuf.Reflect.Namespace
     * @param {!ProtoBuf.Builder} builder Builder reference
     * @param {?ProtoBuf.Reflect.Namespace} parent Namespace parent
     * @param {string} name Namespace name
     * @param {Object.<string,*>=} options Namespace options
     * @param {string?} syntax The syntax level of this definition (e.g., proto3)
     * @constructor
     * @extends ProtoBuf.Reflect.T
     */

    var Namespace = function Namespace(builder, parent, name, options, syntax) {
      T.call(this, builder, parent, name);
      /**
       * @override
       */

      this.className = "Namespace";
      /**
       * Children inside the namespace.
       * @type {!Array.<ProtoBuf.Reflect.T>}
       */

      this.children = [];
      /**
       * Options.
       * @type {!Object.<string, *>}
       */

      this.options = options || {};
      /**
       * Syntax level (e.g., proto2 or proto3).
       * @type {!string}
       */

      this.syntax = syntax || "proto2";
    };
    /**
     * @alias ProtoBuf.Reflect.Namespace.prototype
     * @inner
     */


    var NamespacePrototype = Namespace.prototype = Object.create(T.prototype);
    /**
     * Returns an array of the namespace's children.
     * @param {ProtoBuf.Reflect.T=} type Filter type (returns instances of this type only). Defaults to null (all children).
     * @return {Array.<ProtoBuf.Reflect.T>}
     * @expose
     */

    NamespacePrototype.getChildren = function (type) {
      type = type || null;
      if (type == null) return this.children.slice();
      var children = [];

      for (var i = 0, k = this.children.length; i < k; ++i) {
        if (this.children[i] instanceof type) children.push(this.children[i]);
      }

      return children;
    };
    /**
     * Adds a child to the namespace.
     * @param {ProtoBuf.Reflect.T} child Child
     * @throws {Error} If the child cannot be added (duplicate)
     * @expose
     */


    NamespacePrototype.addChild = function (child) {
      var other;

      if (other = this.getChild(child.name)) {
        // Try to revert camelcase transformation on collision
        if (other instanceof Message.Field && other.name !== other.originalName && this.getChild(other.originalName) === null) other.name = other.originalName; // Revert previous first (effectively keeps both originals)
        else if (child instanceof Message.Field && child.name !== child.originalName && this.getChild(child.originalName) === null) child.name = child.originalName;else throw Error("Duplicate name in namespace " + this.toString(true) + ": " + child.name);
      }

      this.children.push(child);
    };
    /**
     * Gets a child by its name or id.
     * @param {string|number} nameOrId Child name or id
     * @return {?ProtoBuf.Reflect.T} The child or null if not found
     * @expose
     */


    NamespacePrototype.getChild = function (nameOrId) {
      var key = typeof nameOrId === 'number' ? 'id' : 'name';

      for (var i = 0, k = this.children.length; i < k; ++i) {
        if (this.children[i][key] === nameOrId) return this.children[i];
      }

      return null;
    };
    /**
     * Resolves a reflect object inside of this namespace.
     * @param {string|!Array.<string>} qn Qualified name to resolve
     * @param {boolean=} excludeNonNamespace Excludes non-namespace types, defaults to `false`
     * @return {?ProtoBuf.Reflect.Namespace} The resolved type or null if not found
     * @expose
     */


    NamespacePrototype.resolve = function (qn, excludeNonNamespace) {
      var part = typeof qn === 'string' ? qn.split(".") : qn,
          ptr = this,
          i = 0;

      if (part[i] === "") {
        // Fully qualified name, e.g. ".My.Message'
        while (ptr.parent !== null) {
          ptr = ptr.parent;
        }

        i++;
      }

      var child;

      do {
        do {
          if (!(ptr instanceof Reflect.Namespace)) {
            ptr = null;
            break;
          }

          child = ptr.getChild(part[i]);

          if (!child || !(child instanceof Reflect.T) || excludeNonNamespace && !(child instanceof Reflect.Namespace)) {
            ptr = null;
            break;
          }

          ptr = child;
          i++;
        } while (i < part.length);

        if (ptr != null) break; // Found
        // Else search the parent

        if (this.parent !== null) return this.parent.resolve(qn, excludeNonNamespace);
      } while (ptr != null);

      return ptr;
    };
    /**
     * Determines the shortest qualified name of the specified type, if any, relative to this namespace.
     * @param {!ProtoBuf.Reflect.T} t Reflection type
     * @returns {string} The shortest qualified name or, if there is none, the fqn
     * @expose
     */


    NamespacePrototype.qn = function (t) {
      var part = [],
          ptr = t;

      do {
        part.unshift(ptr.name);
        ptr = ptr.parent;
      } while (ptr !== null);

      for (var len = 1; len <= part.length; len++) {
        var qn = part.slice(part.length - len);
        if (t === this.resolve(qn, t instanceof Reflect.Namespace)) return qn.join(".");
      }

      return t.fqn();
    };
    /**
     * Builds the namespace and returns the runtime counterpart.
     * @return {Object.<string,Function|Object>} Runtime namespace
     * @expose
     */


    NamespacePrototype.build = function () {
      /** @dict */
      var ns = {};
      var children = this.children;

      for (var i = 0, k = children.length, child; i < k; ++i) {
        child = children[i];
        if (child instanceof Namespace) ns[child.name] = child.build();
      }

      if (Object.defineProperty) Object.defineProperty(ns, "$options", {
        "value": this.buildOpt()
      });
      return ns;
    };
    /**
     * Builds the namespace's '$options' property.
     * @return {Object.<string,*>}
     */


    NamespacePrototype.buildOpt = function () {
      var opt = {},
          keys = Object.keys(this.options);

      for (var i = 0, k = keys.length; i < k; ++i) {
        var key = keys[i],
            val = this.options[keys[i]]; // TODO: Options are not resolved, yet.
        // if (val instanceof Namespace) {
        //     opt[key] = val.build();
        // } else {

        opt[key] = val; // }
      }

      return opt;
    };
    /**
     * Gets the value assigned to the option with the specified name.
     * @param {string=} name Returns the option value if specified, otherwise all options are returned.
     * @return {*|Object.<string,*>}null} Option value or NULL if there is no such option
     */


    NamespacePrototype.getOption = function (name) {
      if (typeof name === 'undefined') return this.options;
      return typeof this.options[name] !== 'undefined' ? this.options[name] : null;
    };
    /**
     * @alias ProtoBuf.Reflect.Namespace
     * @expose
     */


    Reflect.Namespace = Namespace;
    /**
     * Constructs a new Element implementation that checks and converts values for a
     * particular field type, as appropriate.
     *
     * An Element represents a single value: either the value of a singular field,
     * or a value contained in one entry of a repeated field or map field. This
     * class does not implement these higher-level concepts; it only encapsulates
     * the low-level typechecking and conversion.
     *
     * @exports ProtoBuf.Reflect.Element
     * @param {{name: string, wireType: number}} type Resolved data type
     * @param {ProtoBuf.Reflect.T|null} resolvedType Resolved type, if relevant
     * (e.g. submessage field).
     * @param {boolean} isMapKey Is this element a Map key? The value will be
     * converted to string form if so.
     * @param {string} syntax Syntax level of defining message type, e.g.,
     * proto2 or proto3.
     * @param {string} name Name of the field containing this element (for error
     * messages)
     * @constructor
     */

    var Element = function Element(type, resolvedType, isMapKey, syntax, name) {
      /**
       * Element type, as a string (e.g., int32).
       * @type {{name: string, wireType: number}}
       */
      this.type = type;
      /**
       * Element type reference to submessage or enum definition, if needed.
       * @type {ProtoBuf.Reflect.T|null}
       */

      this.resolvedType = resolvedType;
      /**
       * Element is a map key.
       * @type {boolean}
       */

      this.isMapKey = isMapKey;
      /**
       * Syntax level of defining message type, e.g., proto2 or proto3.
       * @type {string}
       */

      this.syntax = syntax;
      /**
       * Name of the field containing this element (for error messages)
       * @type {string}
       */

      this.name = name;
      if (isMapKey && ProtoBuf.MAP_KEY_TYPES.indexOf(type) < 0) throw Error("Invalid map key type: " + type.name);
    };

    var ElementPrototype = Element.prototype;
    /**
     * Obtains a (new) default value for the specified type.
     * @param type {string|{name: string, wireType: number}} Field type
     * @returns {*} Default value
     * @inner
     */

    function mkDefault(type) {
      if (typeof type === 'string') type = ProtoBuf.TYPES[type];
      if (typeof type.defaultValue === 'undefined') throw Error("default value for type " + type.name + " is not supported");
      if (type == ProtoBuf.TYPES["bytes"]) return new ByteBuffer(0);
      return type.defaultValue;
    }
    /**
     * Returns the default value for this field in proto3.
     * @function
     * @param type {string|{name: string, wireType: number}} the field type
     * @returns {*} Default value
     */


    Element.defaultFieldValue = mkDefault;
    /**
     * Makes a Long from a value.
     * @param {{low: number, high: number, unsigned: boolean}|string|number} value Value
     * @param {boolean=} unsigned Whether unsigned or not, defaults to reuse it from Long-like objects or to signed for
     *  strings and numbers
     * @returns {!Long}
     * @throws {Error} If the value cannot be converted to a Long
     * @inner
     */

    function mkLong(value, unsigned) {
      if (value && typeof value.low === 'number' && typeof value.high === 'number' && typeof value.unsigned === 'boolean' && value.low === value.low && value.high === value.high) return new ProtoBuf.Long(value.low, value.high, typeof unsigned === 'undefined' ? value.unsigned : unsigned);
      if (typeof value === 'string') value = Number(value); // if (typeof value === 'string')
      //     return ProtoBuf.Long.fromString(value, unsigned || false, 10);

      if (typeof value === 'number') return ProtoBuf.Long.fromNumber(value, unsigned || false);
      throw Error("not convertible to Long");
    }

    ElementPrototype.toString = function () {
      return (this.name || '') + (this.isMapKey ? 'map' : 'value') + ' element';
    };
    /**
     * Checks if the given value can be set for an element of this type (singular
     * field or one element of a repeated field or map).
     * @param {*} value Value to check
     * @return {*} Verified, maybe adjusted, value
     * @throws {Error} If the value cannot be verified for this element slot
     * @expose
     */


    ElementPrototype.verifyValue = function (value) {
      var self = this;

      function fail(val, msg) {
        throw Error("Illegal value for " + self.toString(true) + " of type " + self.type.name + ": " + val + " (" + msg + ")");
      }

      switch (this.type) {
        // Signed 32bit
        case ProtoBuf.TYPES["int32"]:
        case ProtoBuf.TYPES["sint32"]:
        case ProtoBuf.TYPES["sfixed32"]:
          // Account for !NaN: value === value
          if (typeof value !== 'number' || value === value && value % 1 !== 0) fail(typeof value, "not an integer");
          return value > 4294967295 ? value | 0 : value;
        // Unsigned 32bit

        case ProtoBuf.TYPES["uint32"]:
        case ProtoBuf.TYPES["fixed32"]:
          if (typeof value !== 'number' || value === value && value % 1 !== 0) fail(typeof value, "not an integer");
          return value < 0 ? value >>> 0 : value;
        // Signed 64bit

        case ProtoBuf.TYPES["int64"]:
        case ProtoBuf.TYPES["sint64"]:
        case ProtoBuf.TYPES["sfixed64"]:
          {
            if (ProtoBuf.Long) try {
              return mkLong(value, false);
            } catch (e) {
              fail(typeof value, e.message);
            } else fail(typeof value, "requires Long.js");
          }
        // Unsigned 64bit

        case ProtoBuf.TYPES["uint64"]:
        case ProtoBuf.TYPES["fixed64"]:
          {
            if (ProtoBuf.Long) try {
              return mkLong(value, true);
            } catch (e) {
              fail(typeof value, e.message);
            } else fail(typeof value, "requires Long.js");
          }
        // Bool

        case ProtoBuf.TYPES["bool"]:
          if (typeof value !== 'boolean') fail(typeof value, "not a boolean");
          return value;
        // Float

        case ProtoBuf.TYPES["float"]:
        case ProtoBuf.TYPES["double"]:
          if (typeof value !== 'number') fail(typeof value, "not a number");
          return value;
        // Length-delimited string

        case ProtoBuf.TYPES["string"]:
          if (typeof value !== 'string' && !(value && value instanceof String)) fail(typeof value, "not a string");
          return "" + value;
        // Convert String object to string
        // Length-delimited bytes

        case ProtoBuf.TYPES["bytes"]:
          if (ByteBuffer.isByteBuffer(value)) return value;
          return ByteBuffer.wrap(value, "base64");
        // Constant enum value

        case ProtoBuf.TYPES["enum"]:
          {
            var values = this.resolvedType.getChildren(ProtoBuf.Reflect.Enum.Value);

            for (i = 0; i < values.length; i++) {
              if (values[i].name == value) return values[i].id;else if (values[i].id == value) return values[i].id;
            }

            if (this.syntax === 'proto3') {
              // proto3: just make sure it's an integer.
              if (typeof value !== 'number' || value === value && value % 1 !== 0) fail(typeof value, "not an integer");
              if (value > 4294967295 || value < 0) fail(typeof value, "not in range for uint32");
              return value;
            } else {
              // proto2 requires enum values to be valid.
              fail(value, "not a valid enum value");
            }
          }
        // Embedded message

        case ProtoBuf.TYPES["group"]:
        case ProtoBuf.TYPES["message"]:
          {
            if (!value || typeof value !== 'object') fail(typeof value, "object expected");
            if (value instanceof this.resolvedType.clazz) return value;

            if (value instanceof ProtoBuf.Builder.Message) {
              // Mismatched type: Convert to object (see: https://github.com/dcodeIO/ProtoBuf.js/issues/180)
              var obj = {};

              for (var i in value) {
                if (value.hasOwnProperty(i)) obj[i] = value[i];
              }

              value = obj;
            } // Else let's try to construct one from a key-value object


            return new this.resolvedType.clazz(value); // May throw for a hundred of reasons
          }
      } // We should never end here


      throw Error("[INTERNAL] Illegal value for " + this.toString(true) + ": " + value + " (undefined type " + this.type + ")");
    };
    /**
     * Calculates the byte length of an element on the wire.
     * @param {number} id Field number
     * @param {*} value Field value
     * @returns {number} Byte length
     * @throws {Error} If the value cannot be calculated
     * @expose
     */


    ElementPrototype.calculateLength = function (id, value) {
      if (value === null) return 0; // Nothing to encode
      // Tag has already been written

      var n;

      switch (this.type) {
        case ProtoBuf.TYPES["int32"]:
          return value < 0 ? ByteBuffer.calculateVarint64(value) : ByteBuffer.calculateVarint32(value);

        case ProtoBuf.TYPES["uint32"]:
          return ByteBuffer.calculateVarint32(value);

        case ProtoBuf.TYPES["sint32"]:
          return ByteBuffer.calculateVarint32(ByteBuffer.zigZagEncode32(value));

        case ProtoBuf.TYPES["fixed32"]:
        case ProtoBuf.TYPES["sfixed32"]:
        case ProtoBuf.TYPES["float"]:
          return 4;

        case ProtoBuf.TYPES["int64"]:
        case ProtoBuf.TYPES["uint64"]:
          return ByteBuffer.calculateVarint64(value);

        case ProtoBuf.TYPES["sint64"]:
          return ByteBuffer.calculateVarint64(ByteBuffer.zigZagEncode64(value));

        case ProtoBuf.TYPES["fixed64"]:
        case ProtoBuf.TYPES["sfixed64"]:
          return 8;

        case ProtoBuf.TYPES["bool"]:
          return 1;

        case ProtoBuf.TYPES["enum"]:
          return ByteBuffer.calculateVarint32(value);

        case ProtoBuf.TYPES["double"]:
          return 8;

        case ProtoBuf.TYPES["string"]:
          n = ByteBuffer.calculateUTF8Bytes(value);
          return ByteBuffer.calculateVarint32(n) + n;

        case ProtoBuf.TYPES["bytes"]:
          if (value.remaining() < 0) throw Error("Illegal value for " + this.toString(true) + ": " + value.remaining() + " bytes remaining");
          return ByteBuffer.calculateVarint32(value.remaining()) + value.remaining();

        case ProtoBuf.TYPES["message"]:
          n = this.resolvedType.calculate(value);
          return ByteBuffer.calculateVarint32(n) + n;

        case ProtoBuf.TYPES["group"]:
          n = this.resolvedType.calculate(value);
          return n + ByteBuffer.calculateVarint32(id << 3 | ProtoBuf.WIRE_TYPES.ENDGROUP);
      } // We should never end here


      throw Error("[INTERNAL] Illegal value to encode in " + this.toString(true) + ": " + value + " (unknown type)");
    };
    /**
     * Encodes a value to the specified buffer. Does not encode the key.
     * @param {number} id Field number
     * @param {*} value Field value
     * @param {ByteBuffer} buffer ByteBuffer to encode to
     * @return {ByteBuffer} The ByteBuffer for chaining
     * @throws {Error} If the value cannot be encoded
     * @expose
     */


    ElementPrototype.encodeValue = function (id, value, buffer) {
      if (value === null) return buffer; // Nothing to encode
      // Tag has already been written

      switch (this.type) {
        // 32bit signed varint
        case ProtoBuf.TYPES["int32"]:
          // "If you use int32 or int64 as the type for a negative number, the resulting varint is always ten bytes
          // long it is, effectively, treated like a very large unsigned integer." (see #122)
          if (value < 0) buffer.writeVarint64(value);else buffer.writeVarint32(value);
          break;
        // 32bit unsigned varint

        case ProtoBuf.TYPES["uint32"]:
          buffer.writeVarint32(value);
          break;
        // 32bit varint zig-zag

        case ProtoBuf.TYPES["sint32"]:
          buffer.writeVarint32ZigZag(value);
          break;
        // Fixed unsigned 32bit

        case ProtoBuf.TYPES["fixed32"]:
          buffer.writeUint32(value);
          break;
        // Fixed signed 32bit

        case ProtoBuf.TYPES["sfixed32"]:
          buffer.writeInt32(value);
          break;
        // 64bit varint as-is

        case ProtoBuf.TYPES["int64"]:
        case ProtoBuf.TYPES["uint64"]:
          buffer.writeVarint64(value); // throws

          break;
        // 64bit varint zig-zag

        case ProtoBuf.TYPES["sint64"]:
          buffer.writeVarint64ZigZag(value); // throws

          break;
        // Fixed unsigned 64bit

        case ProtoBuf.TYPES["fixed64"]:
          buffer.writeUint64(value); // throws

          break;
        // Fixed signed 64bit

        case ProtoBuf.TYPES["sfixed64"]:
          buffer.writeInt64(value); // throws

          break;
        // Bool

        case ProtoBuf.TYPES["bool"]:
          if (typeof value === 'string') buffer.writeVarint32(value.toLowerCase() === 'false' ? 0 : !!value);else buffer.writeVarint32(value ? 1 : 0);
          break;
        // Constant enum value

        case ProtoBuf.TYPES["enum"]:
          buffer.writeVarint32(value);
          break;
        // 32bit float

        case ProtoBuf.TYPES["float"]:
          buffer.writeFloat32(value);
          break;
        // 64bit float

        case ProtoBuf.TYPES["double"]:
          buffer.writeFloat64(value);
          break;
        // Length-delimited string

        case ProtoBuf.TYPES["string"]:
          buffer.writeVString(value);
          break;
        // Length-delimited bytes

        case ProtoBuf.TYPES["bytes"]:
          if (value.remaining() < 0) throw Error("Illegal value for " + this.toString(true) + ": " + value.remaining() + " bytes remaining");
          var prevOffset = value.offset;
          buffer.writeVarint32(value.remaining());
          buffer.append(value);
          value.offset = prevOffset;
          break;
        // Embedded message

        case ProtoBuf.TYPES["message"]:
          var bb = new ByteBuffer().LE();
          this.resolvedType.encode(value, bb);
          buffer.writeVarint32(bb.offset);
          buffer.append(bb.flip());
          break;
        // Legacy group

        case ProtoBuf.TYPES["group"]:
          this.resolvedType.encode(value, buffer);
          buffer.writeVarint32(id << 3 | ProtoBuf.WIRE_TYPES.ENDGROUP);
          break;

        default:
          // We should never end here
          throw Error("[INTERNAL] Illegal value to encode in " + this.toString(true) + ": " + value + " (unknown type)");
      }

      return buffer;
    };
    /**
     * Decode one element value from the specified buffer.
     * @param {ByteBuffer} buffer ByteBuffer to decode from
     * @param {number} wireType The field wire type
     * @param {number} id The field number
     * @return {*} Decoded value
     * @throws {Error} If the field cannot be decoded
     * @expose
     */


    ElementPrototype.decode = function (buffer, wireType, id) {
      if (wireType != this.type.wireType) throw Error("Unexpected wire type for element");
      var value, nBytes;

      switch (this.type) {
        // 32bit signed varint
        case ProtoBuf.TYPES["int32"]:
          return buffer.readVarint32() | 0;
        // 32bit unsigned varint

        case ProtoBuf.TYPES["uint32"]:
          return buffer.readVarint32() >>> 0;
        // 32bit signed varint zig-zag

        case ProtoBuf.TYPES["sint32"]:
          return buffer.readVarint32ZigZag() | 0;
        // Fixed 32bit unsigned

        case ProtoBuf.TYPES["fixed32"]:
          return buffer.readUint32() >>> 0;

        case ProtoBuf.TYPES["sfixed32"]:
          return buffer.readInt32() | 0;
        // 64bit signed varint

        case ProtoBuf.TYPES["int64"]:
          return buffer.readVarint64();
        // 64bit unsigned varint

        case ProtoBuf.TYPES["uint64"]:
          return buffer.readVarint64().toUnsigned();
        // 64bit signed varint zig-zag

        case ProtoBuf.TYPES["sint64"]:
          return buffer.readVarint64ZigZag();
        // Fixed 64bit unsigned

        case ProtoBuf.TYPES["fixed64"]:
          return buffer.readUint64();
        // Fixed 64bit signed

        case ProtoBuf.TYPES["sfixed64"]:
          return buffer.readInt64();
        // Bool varint

        case ProtoBuf.TYPES["bool"]:
          return !!buffer.readVarint32();
        // Constant enum value (varint)

        case ProtoBuf.TYPES["enum"]:
          // The following Builder.Message#set will already throw
          return buffer.readVarint32();
        // 32bit float

        case ProtoBuf.TYPES["float"]:
          return buffer.readFloat();
        // 64bit float

        case ProtoBuf.TYPES["double"]:
          return buffer.readDouble();
        // Length-delimited string

        case ProtoBuf.TYPES["string"]:
          return buffer.readVString();
        // Length-delimited bytes

        case ProtoBuf.TYPES["bytes"]:
          {
            nBytes = buffer.readVarint32();
            if (buffer.remaining() < nBytes) throw Error("Illegal number of bytes for " + this.toString(true) + ": " + nBytes + " required but got only " + buffer.remaining());
            value = buffer.clone(); // Offset already set

            value.limit = value.offset + nBytes;
            buffer.offset += nBytes;
            return value;
          }
        // Length-delimited embedded message

        case ProtoBuf.TYPES["message"]:
          {
            nBytes = buffer.readVarint32();
            return this.resolvedType.decode(buffer, nBytes);
          }
        // Legacy group

        case ProtoBuf.TYPES["group"]:
          return this.resolvedType.decode(buffer, -1, id);
      } // We should never end here


      throw Error("[INTERNAL] Illegal decode type");
    };
    /**
     * Converts a value from a string to the canonical element type.
     *
     * Legal only when isMapKey is true.
     *
     * @param {string} str The string value
     * @returns {*} The value
     */


    ElementPrototype.valueFromString = function (str) {
      if (!this.isMapKey) {
        throw Error("valueFromString() called on non-map-key element");
      }

      switch (this.type) {
        case ProtoBuf.TYPES["int32"]:
        case ProtoBuf.TYPES["sint32"]:
        case ProtoBuf.TYPES["sfixed32"]:
        case ProtoBuf.TYPES["uint32"]:
        case ProtoBuf.TYPES["fixed32"]:
          return this.verifyValue(parseInt(str));

        case ProtoBuf.TYPES["int64"]:
        case ProtoBuf.TYPES["sint64"]:
        case ProtoBuf.TYPES["sfixed64"]:
        case ProtoBuf.TYPES["uint64"]:
        case ProtoBuf.TYPES["fixed64"]:
          // Long-based fields support conversions from string already.
          return this.verifyValue(str);

        case ProtoBuf.TYPES["bool"]:
          return str === "true";

        case ProtoBuf.TYPES["string"]:
          return this.verifyValue(str);

        case ProtoBuf.TYPES["bytes"]:
          return ByteBuffer.fromBinary(str);
      }
    };
    /**
     * Converts a value from the canonical element type to a string.
     *
     * It should be the case that `valueFromString(valueToString(val))` returns
     * a value equivalent to `verifyValue(val)` for every legal value of `val`
     * according to this element type.
     *
     * This may be used when the element must be stored or used as a string,
     * e.g., as a map key on an Object.
     *
     * Legal only when isMapKey is true.
     *
     * @param {*} val The value
     * @returns {string} The string form of the value.
     */


    ElementPrototype.valueToString = function (value) {
      if (!this.isMapKey) {
        throw Error("valueToString() called on non-map-key element");
      }

      if (this.type === ProtoBuf.TYPES["bytes"]) {
        return value.toString("binary");
      } else {
        return value.toString();
      }
    };
    /**
     * @alias ProtoBuf.Reflect.Element
     * @expose
     */


    Reflect.Element = Element;
    /**
     * Constructs a new Message.
     * @exports ProtoBuf.Reflect.Message
     * @param {!ProtoBuf.Builder} builder Builder reference
     * @param {!ProtoBuf.Reflect.Namespace} parent Parent message or namespace
     * @param {string} name Message name
     * @param {Object.<string,*>=} options Message options
     * @param {boolean=} isGroup `true` if this is a legacy group
     * @param {string?} syntax The syntax level of this definition (e.g., proto3)
     * @constructor
     * @extends ProtoBuf.Reflect.Namespace
     */

    var Message = function Message(builder, parent, name, options, isGroup, syntax) {
      Namespace.call(this, builder, parent, name, options, syntax);
      /**
       * @override
       */

      this.className = "Message";
      /**
       * Extensions range.
       * @type {!Array.<number>|undefined}
       * @expose
       */

      this.extensions = undefined;
      /**
       * Runtime message class.
       * @type {?function(new:ProtoBuf.Builder.Message)}
       * @expose
       */

      this.clazz = null;
      /**
       * Whether this is a legacy group or not.
       * @type {boolean}
       * @expose
       */

      this.isGroup = !!isGroup; // The following cached collections are used to efficiently iterate over or look up fields when decoding.

      /**
       * Cached fields.
       * @type {?Array.<!ProtoBuf.Reflect.Message.Field>}
       * @private
       */

      this._fields = null;
      /**
       * Cached fields by id.
       * @type {?Object.<number,!ProtoBuf.Reflect.Message.Field>}
       * @private
       */

      this._fieldsById = null;
      /**
       * Cached fields by name.
       * @type {?Object.<string,!ProtoBuf.Reflect.Message.Field>}
       * @private
       */

      this._fieldsByName = null;
    };
    /**
     * @alias ProtoBuf.Reflect.Message.prototype
     * @inner
     */


    var MessagePrototype = Message.prototype = Object.create(Namespace.prototype);
    /**
     * Builds the message and returns the runtime counterpart, which is a fully functional class.
     * @see ProtoBuf.Builder.Message
     * @param {boolean=} rebuild Whether to rebuild or not, defaults to false
     * @return {ProtoBuf.Reflect.Message} Message class
     * @throws {Error} If the message cannot be built
     * @expose
     */

    MessagePrototype.build = function (rebuild) {
      if (this.clazz && !rebuild) return this.clazz; // Create the runtime Message class in its own scope

      var clazz = function (ProtoBuf, T) {
        var fields = T.getChildren(ProtoBuf.Reflect.Message.Field),
            oneofs = T.getChildren(ProtoBuf.Reflect.Message.OneOf);
        /**
         * Constructs a new runtime Message.
         * @name ProtoBuf.Builder.Message
         * @class Barebone of all runtime messages.
         * @param {!Object.<string,*>|string} values Preset values
         * @param {...string} var_args
         * @constructor
         * @throws {Error} If the message cannot be created
         */

        var Message = function Message(values, var_args) {
          ProtoBuf.Builder.Message.call(this); // Create virtual oneof properties

          for (var i = 0, k = oneofs.length; i < k; ++i) {
            this[oneofs[i].name] = null;
          } // Create fields and set default values


          for (i = 0, k = fields.length; i < k; ++i) {
            var field = fields[i];
            this[field.name] = field.repeated ? [] : field.map ? new ProtoBuf.Map(field) : null;
            if ((field.required || T.syntax === 'proto3') && field.defaultValue !== null) this[field.name] = field.defaultValue;
          }

          if (arguments.length > 0) {
            var value; // Set field values from a values object

            if (arguments.length === 1 && values !== null && typeof values === 'object' && (
            /* not _another_ Message */
            typeof values.encode !== 'function' || values instanceof Message) &&
            /* not a repeated field */
            !Array.isArray(values) &&
            /* not a Map */
            !(values instanceof ProtoBuf.Map) &&
            /* not a ByteBuffer */
            !ByteBuffer.isByteBuffer(values) &&
            /* not an ArrayBuffer */
            !(values instanceof ArrayBuffer) &&
            /* not a Long */
            !(ProtoBuf.Long && values instanceof ProtoBuf.Long)) {
              this.$set(values);
            } else // Set field values from arguments, in declaration order
              for (i = 0, k = arguments.length; i < k; ++i) {
                if (typeof (value = arguments[i]) !== 'undefined') this.$set(fields[i].name, value);
              } // May throw

          }
        };
        /**
         * @alias ProtoBuf.Builder.Message.prototype
         * @inner
         */


        var MessagePrototype = Message.prototype = Object.create(ProtoBuf.Builder.Message.prototype);
        /**
         * Adds a value to a repeated field.
         * @name ProtoBuf.Builder.Message#add
         * @function
         * @param {string} key Field name
         * @param {*} value Value to add
         * @param {boolean=} noAssert Whether to assert the value or not (asserts by default)
         * @returns {!ProtoBuf.Builder.Message} this
         * @throws {Error} If the value cannot be added
         * @expose
         */

        MessagePrototype.add = function (key, value, noAssert) {
          var field = T._fieldsByName[key];

          if (!noAssert) {
            if (!field) throw Error(this + "#" + key + " is undefined");
            if (!(field instanceof ProtoBuf.Reflect.Message.Field)) throw Error(this + "#" + key + " is not a field: " + field.toString(true)); // May throw if it's an enum or embedded message

            if (!field.repeated) throw Error(this + "#" + key + " is not a repeated field");
            value = field.verifyValue(value, true);
          }

          if (this[key] === null) this[key] = [];
          this[key].push(value);
          return this;
        };
        /**
         * Adds a value to a repeated field. This is an alias for {@link ProtoBuf.Builder.Message#add}.
         * @name ProtoBuf.Builder.Message#$add
         * @function
         * @param {string} key Field name
         * @param {*} value Value to add
         * @param {boolean=} noAssert Whether to assert the value or not (asserts by default)
         * @returns {!ProtoBuf.Builder.Message} this
         * @throws {Error} If the value cannot be added
         * @expose
         */


        MessagePrototype.$add = MessagePrototype.add;
        /**
         * Sets a field's value.
         * @name ProtoBuf.Builder.Message#set
         * @function
         * @param {string|!Object.<string,*>} keyOrObj String key or plain object holding multiple values
         * @param {(*|boolean)=} value Value to set if key is a string, otherwise omitted
         * @param {boolean=} noAssert Whether to not assert for an actual field / proper value type, defaults to `false`
         * @returns {!ProtoBuf.Builder.Message} this
         * @throws {Error} If the value cannot be set
         * @expose
         */

        MessagePrototype.set = function (keyOrObj, value, noAssert) {
          if (keyOrObj && typeof keyOrObj === 'object') {
            noAssert = value;

            for (var ikey in keyOrObj) {
              // Check if virtual oneof field - don't set these
              if (keyOrObj.hasOwnProperty(ikey) && typeof (value = keyOrObj[ikey]) !== 'undefined' && T._oneofsByName[ikey] === undefined) this.$set(ikey, value, noAssert);
            }

            return this;
          }

          var field = T._fieldsByName[keyOrObj];

          if (!noAssert) {
            if (!field) throw Error(this + "#" + keyOrObj + " is not a field: undefined");
            if (!(field instanceof ProtoBuf.Reflect.Message.Field)) throw Error(this + "#" + keyOrObj + " is not a field: " + field.toString(true));
            this[field.name] = value = field.verifyValue(value); // May throw
          } else this[keyOrObj] = value;

          if (field && field.oneof) {
            // Field is part of an OneOf (not a virtual OneOf field)
            var currentField = this[field.oneof.name]; // Virtual field references currently set field

            if (value !== null) {
              if (currentField !== null && currentField !== field.name) this[currentField] = null; // Clear currently set field

              this[field.oneof.name] = field.name; // Point virtual field at this field
            } else if (
            /* value === null && */
            currentField === keyOrObj) this[field.oneof.name] = null; // Clear virtual field (current field explicitly cleared)

          }

          return this;
        };
        /**
         * Sets a field's value. This is an alias for [@link ProtoBuf.Builder.Message#set}.
         * @name ProtoBuf.Builder.Message#$set
         * @function
         * @param {string|!Object.<string,*>} keyOrObj String key or plain object holding multiple values
         * @param {(*|boolean)=} value Value to set if key is a string, otherwise omitted
         * @param {boolean=} noAssert Whether to not assert the value, defaults to `false`
         * @throws {Error} If the value cannot be set
         * @expose
         */


        MessagePrototype.$set = MessagePrototype.set;
        /**
         * Gets a field's value.
         * @name ProtoBuf.Builder.Message#get
         * @function
         * @param {string} key Key
         * @param {boolean=} noAssert Whether to not assert for an actual field, defaults to `false`
         * @return {*} Value
         * @throws {Error} If there is no such field
         * @expose
         */

        MessagePrototype.get = function (key, noAssert) {
          if (noAssert) return this[key];
          var field = T._fieldsByName[key];
          if (!field || !(field instanceof ProtoBuf.Reflect.Message.Field)) throw Error(this + "#" + key + " is not a field: undefined");
          if (!(field instanceof ProtoBuf.Reflect.Message.Field)) throw Error(this + "#" + key + " is not a field: " + field.toString(true));
          return this[field.name];
        };
        /**
         * Gets a field's value. This is an alias for {@link ProtoBuf.Builder.Message#$get}.
         * @name ProtoBuf.Builder.Message#$get
         * @function
         * @param {string} key Key
         * @return {*} Value
         * @throws {Error} If there is no such field
         * @expose
         */


        MessagePrototype.$get = MessagePrototype.get; // Getters and setters

        for (var i = 0; i < fields.length; i++) {
          var field = fields[i]; // no setters for extension fields as these are named by their fqn

          if (field instanceof ProtoBuf.Reflect.Message.ExtensionField) continue;
          if (T.builder.options['populateAccessors']) (function (field) {
            // set/get[SomeValue]
            var Name = field.originalName.replace(/(_[a-zA-Z])/g, function (match) {
              return match.toUpperCase().replace('_', '');
            });
            Name = Name.substring(0, 1).toUpperCase() + Name.substring(1); // set/get_[some_value] FIXME: Do we really need these?

            var name = field.originalName.replace(/([A-Z])/g, function (match) {
              return "_" + match;
            });
            /**
             * The current field's unbound setter function.
             * @function
             * @param {*} value
             * @param {boolean=} noAssert
             * @returns {!ProtoBuf.Builder.Message}
             * @inner
             */

            var setter = function setter(value, noAssert) {
              this[field.name] = noAssert ? value : field.verifyValue(value);
              return this;
            };
            /**
             * The current field's unbound getter function.
             * @function
             * @returns {*}
             * @inner
             */


            var getter = function getter() {
              return this[field.name];
            };

            if (T.getChild("set" + Name) === null)
              /**
               * Sets a value. This method is present for each field, but only if there is no name conflict with
               *  another field.
               * @name ProtoBuf.Builder.Message#set[SomeField]
               * @function
               * @param {*} value Value to set
               * @param {boolean=} noAssert Whether to not assert the value, defaults to `false`
               * @returns {!ProtoBuf.Builder.Message} this
               * @abstract
               * @throws {Error} If the value cannot be set
               */
              MessagePrototype["set" + Name] = setter;
            if (T.getChild("set_" + name) === null)
              /**
               * Sets a value. This method is present for each field, but only if there is no name conflict with
               *  another field.
               * @name ProtoBuf.Builder.Message#set_[some_field]
               * @function
               * @param {*} value Value to set
               * @param {boolean=} noAssert Whether to not assert the value, defaults to `false`
               * @returns {!ProtoBuf.Builder.Message} this
               * @abstract
               * @throws {Error} If the value cannot be set
               */
              MessagePrototype["set_" + name] = setter;
            if (T.getChild("get" + Name) === null)
              /**
               * Gets a value. This method is present for each field, but only if there is no name conflict with
               *  another field.
               * @name ProtoBuf.Builder.Message#get[SomeField]
               * @function
               * @abstract
               * @return {*} The value
               */
              MessagePrototype["get" + Name] = getter;
            if (T.getChild("get_" + name) === null)
              /**
               * Gets a value. This method is present for each field, but only if there is no name conflict with
               *  another field.
               * @name ProtoBuf.Builder.Message#get_[some_field]
               * @function
               * @return {*} The value
               * @abstract
               */
              MessagePrototype["get_" + name] = getter;
          })(field);
        } // En-/decoding

        /**
         * Encodes the message.
         * @name ProtoBuf.Builder.Message#$encode
         * @function
         * @param {(!ByteBuffer|boolean)=} buffer ByteBuffer to encode to. Will create a new one and flip it if omitted.
         * @param {boolean=} noVerify Whether to not verify field values, defaults to `false`
         * @return {!ByteBuffer} Encoded message as a ByteBuffer
         * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
         *  returns the encoded ByteBuffer in the `encoded` property on the error.
         * @expose
         * @see ProtoBuf.Builder.Message#encode64
         * @see ProtoBuf.Builder.Message#encodeHex
         * @see ProtoBuf.Builder.Message#encodeAB
         */


        MessagePrototype.encode = function (buffer, noVerify) {
          if (typeof buffer === 'boolean') noVerify = buffer, buffer = undefined;
          var isNew = false;
          if (!buffer) buffer = new ByteBuffer(), isNew = true;
          var le = buffer.littleEndian;

          try {
            T.encode(this, buffer.LE(), noVerify);
            return (isNew ? buffer.flip() : buffer).LE(le);
          } catch (e) {
            buffer.LE(le);
            throw e;
          }
        };
        /**
         * Encodes a message using the specified data payload.
         * @param {!Object.<string,*>} data Data payload
         * @param {(!ByteBuffer|boolean)=} buffer ByteBuffer to encode to. Will create a new one and flip it if omitted.
         * @param {boolean=} noVerify Whether to not verify field values, defaults to `false`
         * @return {!ByteBuffer} Encoded message as a ByteBuffer
         * @expose
         */


        Message.encode = function (data, buffer, noVerify) {
          return new Message(data).encode(buffer, noVerify);
        };
        /**
         * Calculates the byte length of the message.
         * @name ProtoBuf.Builder.Message#calculate
         * @function
         * @returns {number} Byte length
         * @throws {Error} If the message cannot be calculated or if required fields are missing.
         * @expose
         */


        MessagePrototype.calculate = function () {
          return T.calculate(this);
        };
        /**
         * Encodes the varint32 length-delimited message.
         * @name ProtoBuf.Builder.Message#encodeDelimited
         * @function
         * @param {(!ByteBuffer|boolean)=} buffer ByteBuffer to encode to. Will create a new one and flip it if omitted.
         * @param {boolean=} noVerify Whether to not verify field values, defaults to `false`
         * @return {!ByteBuffer} Encoded message as a ByteBuffer
         * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
         *  returns the encoded ByteBuffer in the `encoded` property on the error.
         * @expose
         */


        MessagePrototype.encodeDelimited = function (buffer, noVerify) {
          var isNew = false;
          if (!buffer) buffer = new ByteBuffer(), isNew = true;
          var enc = new ByteBuffer().LE();
          T.encode(this, enc, noVerify).flip();
          buffer.writeVarint32(enc.remaining());
          buffer.append(enc);
          return isNew ? buffer.flip() : buffer;
        };
        /**
         * Directly encodes the message to an ArrayBuffer.
         * @name ProtoBuf.Builder.Message#encodeAB
         * @function
         * @return {ArrayBuffer} Encoded message as ArrayBuffer
         * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
         *  returns the encoded ArrayBuffer in the `encoded` property on the error.
         * @expose
         */


        MessagePrototype.encodeAB = function () {
          try {
            return this.encode().toArrayBuffer();
          } catch (e) {
            if (e["encoded"]) e["encoded"] = e["encoded"].toArrayBuffer();
            throw e;
          }
        };
        /**
         * Returns the message as an ArrayBuffer. This is an alias for {@link ProtoBuf.Builder.Message#encodeAB}.
         * @name ProtoBuf.Builder.Message#toArrayBuffer
         * @function
         * @return {ArrayBuffer} Encoded message as ArrayBuffer
         * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
         *  returns the encoded ArrayBuffer in the `encoded` property on the error.
         * @expose
         */


        MessagePrototype.toArrayBuffer = MessagePrototype.encodeAB;
        /**
         * Directly encodes the message to a node Buffer.
         * @name ProtoBuf.Builder.Message#encodeNB
         * @function
         * @return {!Buffer}
         * @throws {Error} If the message cannot be encoded, not running under node.js or if required fields are
         *  missing. The later still returns the encoded node Buffer in the `encoded` property on the error.
         * @expose
         */

        MessagePrototype.encodeNB = function () {
          try {
            return this.encode().toBuffer();
          } catch (e) {
            if (e["encoded"]) e["encoded"] = e["encoded"].toBuffer();
            throw e;
          }
        };
        /**
         * Returns the message as a node Buffer. This is an alias for {@link ProtoBuf.Builder.Message#encodeNB}.
         * @name ProtoBuf.Builder.Message#toBuffer
         * @function
         * @return {!Buffer}
         * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
         *  returns the encoded node Buffer in the `encoded` property on the error.
         * @expose
         */


        MessagePrototype.toBuffer = MessagePrototype.encodeNB;
        /**
         * Directly encodes the message to a base64 encoded string.
         * @name ProtoBuf.Builder.Message#encode64
         * @function
         * @return {string} Base64 encoded string
         * @throws {Error} If the underlying buffer cannot be encoded or if required fields are missing. The later
         *  still returns the encoded base64 string in the `encoded` property on the error.
         * @expose
         */

        MessagePrototype.encode64 = function () {
          try {
            return this.encode().toBase64();
          } catch (e) {
            if (e["encoded"]) e["encoded"] = e["encoded"].toBase64();
            throw e;
          }
        };
        /**
         * Returns the message as a base64 encoded string. This is an alias for {@link ProtoBuf.Builder.Message#encode64}.
         * @name ProtoBuf.Builder.Message#toBase64
         * @function
         * @return {string} Base64 encoded string
         * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
         *  returns the encoded base64 string in the `encoded` property on the error.
         * @expose
         */


        MessagePrototype.toBase64 = MessagePrototype.encode64;
        /**
         * Directly encodes the message to a hex encoded string.
         * @name ProtoBuf.Builder.Message#encodeHex
         * @function
         * @return {string} Hex encoded string
         * @throws {Error} If the underlying buffer cannot be encoded or if required fields are missing. The later
         *  still returns the encoded hex string in the `encoded` property on the error.
         * @expose
         */

        MessagePrototype.encodeHex = function () {
          try {
            return this.encode().toHex();
          } catch (e) {
            if (e["encoded"]) e["encoded"] = e["encoded"].toHex();
            throw e;
          }
        };
        /**
         * Returns the message as a hex encoded string. This is an alias for {@link ProtoBuf.Builder.Message#encodeHex}.
         * @name ProtoBuf.Builder.Message#toHex
         * @function
         * @return {string} Hex encoded string
         * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
         *  returns the encoded hex string in the `encoded` property on the error.
         * @expose
         */


        MessagePrototype.toHex = MessagePrototype.encodeHex;
        /**
         * Clones a message object or field value to a raw object.
         * @param {*} obj Object to clone
         * @param {boolean} binaryAsBase64 Whether to include binary data as base64 strings or as a buffer otherwise
         * @param {boolean} longsAsStrings Whether to encode longs as strings
         * @param {!ProtoBuf.Reflect.T=} resolvedType The resolved field type if a field
         * @returns {*} Cloned object
         * @inner
         */

        function cloneRaw(obj, binaryAsBase64, longsAsStrings, resolvedType) {
          if (obj === null || typeof obj !== 'object') {
            // Convert enum values to their respective names
            if (resolvedType && resolvedType instanceof ProtoBuf.Reflect.Enum) {
              var name = ProtoBuf.Reflect.Enum.getName(resolvedType.object, obj);
              if (name !== null) return name;
            } // Pass-through string, number, boolean, null...


            return obj;
          } // Convert ByteBuffers to raw buffer or strings


          if (ByteBuffer.isByteBuffer(obj)) return binaryAsBase64 ? obj.toBase64() : obj.toBuffer(); // Convert Longs to proper objects or strings

          if (ProtoBuf.Long.isLong(obj)) return longsAsStrings ? obj.toString() : ProtoBuf.Long.fromValue(obj);
          var clone; // Clone arrays

          if (Array.isArray(obj)) {
            clone = [];
            obj.forEach(function (v, k) {
              clone[k] = cloneRaw(v, binaryAsBase64, longsAsStrings, resolvedType);
            });
            return clone;
          }

          clone = {}; // Convert maps to objects

          if (obj instanceof ProtoBuf.Map) {
            var it = obj.entries();

            for (var e = it.next(); !e.done; e = it.next()) {
              clone[obj.keyElem.valueToString(e.value[0])] = cloneRaw(e.value[1], binaryAsBase64, longsAsStrings, obj.valueElem.resolvedType);
            }

            return clone;
          } // Everything else is a non-null object


          var type = obj.$type,
              field = undefined;

          for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
              if (type && (field = type.getChild(i))) clone[i] = cloneRaw(obj[i], binaryAsBase64, longsAsStrings, field.resolvedType);else clone[i] = cloneRaw(obj[i], binaryAsBase64, longsAsStrings);
            }
          }

          return clone;
        }
        /**
         * Returns the message's raw payload.
         * @param {boolean=} binaryAsBase64 Whether to include binary data as base64 strings instead of Buffers, defaults to `false`
         * @param {boolean} longsAsStrings Whether to encode longs as strings
         * @returns {Object.<string,*>} Raw payload
         * @expose
         */


        MessagePrototype.toRaw = function (binaryAsBase64, longsAsStrings) {
          return cloneRaw(this, !!binaryAsBase64, !!longsAsStrings, this.$type);
        };
        /**
         * Encodes a message to JSON.
         * @returns {string} JSON string
         * @expose
         */


        MessagePrototype.encodeJSON = function () {
          return JSON.stringify(cloneRaw(this,
          /* binary-as-base64 */
          true,
          /* longs-as-strings */
          true, this.$type));
        };
        /**
         * Decodes a message from the specified buffer or string.
         * @name ProtoBuf.Builder.Message.decode
         * @function
         * @param {!ByteBuffer|!ArrayBuffer|!Buffer|string} buffer Buffer to decode from
         * @param {(number|string)=} length Message length. Defaults to decode all the remainig data.
         * @param {string=} enc Encoding if buffer is a string: hex, utf8 (not recommended), defaults to base64
         * @return {!ProtoBuf.Builder.Message} Decoded message
         * @throws {Error} If the message cannot be decoded or if required fields are missing. The later still
         *  returns the decoded message with missing fields in the `decoded` property on the error.
         * @expose
         * @see ProtoBuf.Builder.Message.decode64
         * @see ProtoBuf.Builder.Message.decodeHex
         */


        Message.decode = function (buffer, length, enc) {
          if (typeof length === 'string') enc = length, length = -1;
          if (typeof buffer === 'string') buffer = ByteBuffer.wrap(buffer, enc ? enc : "base64");else if (!ByteBuffer.isByteBuffer(buffer)) buffer = ByteBuffer.wrap(buffer); // May throw

          var le = buffer.littleEndian;

          try {
            var msg = T.decode(buffer.LE(), length);
            buffer.LE(le);
            return msg;
          } catch (e) {
            buffer.LE(le);
            throw e;
          }
        };
        /**
         * Decodes a varint32 length-delimited message from the specified buffer or string.
         * @name ProtoBuf.Builder.Message.decodeDelimited
         * @function
         * @param {!ByteBuffer|!ArrayBuffer|!Buffer|string} buffer Buffer to decode from
         * @param {string=} enc Encoding if buffer is a string: hex, utf8 (not recommended), defaults to base64
         * @return {ProtoBuf.Builder.Message} Decoded message or `null` if not enough bytes are available yet
         * @throws {Error} If the message cannot be decoded or if required fields are missing. The later still
         *  returns the decoded message with missing fields in the `decoded` property on the error.
         * @expose
         */


        Message.decodeDelimited = function (buffer, enc) {
          if (typeof buffer === 'string') buffer = ByteBuffer.wrap(buffer, enc ? enc : "base64");else if (!ByteBuffer.isByteBuffer(buffer)) buffer = ByteBuffer.wrap(buffer); // May throw

          if (buffer.remaining() < 1) return null;
          var off = buffer.offset,
              len = buffer.readVarint32();

          if (buffer.remaining() < len) {
            buffer.offset = off;
            return null;
          }

          try {
            var msg = T.decode(buffer.slice(buffer.offset, buffer.offset + len).LE());
            buffer.offset += len;
            return msg;
          } catch (err) {
            buffer.offset += len;
            throw err;
          }
        };
        /**
         * Decodes the message from the specified base64 encoded string.
         * @name ProtoBuf.Builder.Message.decode64
         * @function
         * @param {string} str String to decode from
         * @return {!ProtoBuf.Builder.Message} Decoded message
         * @throws {Error} If the message cannot be decoded or if required fields are missing. The later still
         *  returns the decoded message with missing fields in the `decoded` property on the error.
         * @expose
         */


        Message.decode64 = function (str) {
          return Message.decode(str, "base64");
        };
        /**
         * Decodes the message from the specified hex encoded string.
         * @name ProtoBuf.Builder.Message.decodeHex
         * @function
         * @param {string} str String to decode from
         * @return {!ProtoBuf.Builder.Message} Decoded message
         * @throws {Error} If the message cannot be decoded or if required fields are missing. The later still
         *  returns the decoded message with missing fields in the `decoded` property on the error.
         * @expose
         */


        Message.decodeHex = function (str) {
          return Message.decode(str, "hex");
        };
        /**
         * Decodes the message from a JSON string.
         * @name ProtoBuf.Builder.Message.decodeJSON
         * @function
         * @param {string} str String to decode from
         * @return {!ProtoBuf.Builder.Message} Decoded message
         * @throws {Error} If the message cannot be decoded or if required fields are
         * missing.
         * @expose
         */


        Message.decodeJSON = function (str) {
          return new Message(JSON.parse(str));
        }; // Utility

        /**
         * Returns a string representation of this Message.
         * @name ProtoBuf.Builder.Message#toString
         * @function
         * @return {string} String representation as of ".Fully.Qualified.MessageName"
         * @expose
         */


        MessagePrototype.toString = function () {
          return T.toString();
        }; // Properties

        /**
         * Message options.
         * @name ProtoBuf.Builder.Message.$options
         * @type {Object.<string,*>}
         * @expose
         */


        var $optionsS; // cc needs this

        /**
         * Message options.
         * @name ProtoBuf.Builder.Message#$options
         * @type {Object.<string,*>}
         * @expose
         */

        var $options;
        /**
         * Reflection type.
         * @name ProtoBuf.Builder.Message.$type
         * @type {!ProtoBuf.Reflect.Message}
         * @expose
         */

        var $typeS;
        /**
         * Reflection type.
         * @name ProtoBuf.Builder.Message#$type
         * @type {!ProtoBuf.Reflect.Message}
         * @expose
         */

        var $type;
        if (Object.defineProperty) Object.defineProperty(Message, '$options', {
          "value": T.buildOpt()
        }), Object.defineProperty(MessagePrototype, "$options", {
          "value": Message["$options"]
        }), Object.defineProperty(Message, "$type", {
          "value": T
        }), Object.defineProperty(MessagePrototype, "$type", {
          "value": T
        });
        return Message;
      }(ProtoBuf, this); // Static enums and prototyped sub-messages / cached collections


      this._fields = [];
      this._fieldsById = {};
      this._fieldsByName = {};
      this._oneofsByName = {};

      for (var i = 0, k = this.children.length, child; i < k; i++) {
        child = this.children[i];

        if (child instanceof Enum || child instanceof Message || child instanceof Service) {
          if (clazz.hasOwnProperty(child.name)) throw Error("Illegal reflect child of " + this.toString(true) + ": " + child.toString(true) + " cannot override static property '" + child.name + "'");
          clazz[child.name] = child.build();
        } else if (child instanceof Message.Field) child.build(), this._fields.push(child), this._fieldsById[child.id] = child, this._fieldsByName[child.name] = child;else if (child instanceof Message.OneOf) {
          this._oneofsByName[child.name] = child;
        } else if (!(child instanceof Message.OneOf) && !(child instanceof Extension)) // Not built
          throw Error("Illegal reflect child of " + this.toString(true) + ": " + this.children[i].toString(true));
      }

      return this.clazz = clazz;
    };
    /**
     * Encodes a runtime message's contents to the specified buffer.
     * @param {!ProtoBuf.Builder.Message} message Runtime message to encode
     * @param {ByteBuffer} buffer ByteBuffer to write to
     * @param {boolean=} noVerify Whether to not verify field values, defaults to `false`
     * @return {ByteBuffer} The ByteBuffer for chaining
     * @throws {Error} If required fields are missing or the message cannot be encoded for another reason
     * @expose
     */


    MessagePrototype.encode = function (message, buffer, noVerify) {
      var fieldMissing = null,
          field;

      for (var i = 0, k = this._fields.length, val; i < k; ++i) {
        field = this._fields[i];
        val = message[field.name];

        if (field.required && val === null) {
          if (fieldMissing === null) fieldMissing = field;
        } else field.encode(noVerify ? val : field.verifyValue(val), buffer, message);
      }

      if (fieldMissing !== null) {
        var err = Error("Missing at least one required field for " + this.toString(true) + ": " + fieldMissing);
        err["encoded"] = buffer; // Still expose what we got

        throw err;
      }

      return buffer;
    };
    /**
     * Calculates a runtime message's byte length.
     * @param {!ProtoBuf.Builder.Message} message Runtime message to encode
     * @returns {number} Byte length
     * @throws {Error} If required fields are missing or the message cannot be calculated for another reason
     * @expose
     */


    MessagePrototype.calculate = function (message) {
      for (var n = 0, i = 0, k = this._fields.length, field, val; i < k; ++i) {
        field = this._fields[i];
        val = message[field.name];
        if (field.required && val === null) throw Error("Missing at least one required field for " + this.toString(true) + ": " + field);else n += field.calculate(val, message);
      }

      return n;
    };
    /**
     * Skips all data until the end of the specified group has been reached.
     * @param {number} expectedId Expected GROUPEND id
     * @param {!ByteBuffer} buf ByteBuffer
     * @returns {boolean} `true` if a value as been skipped, `false` if the end has been reached
     * @throws {Error} If it wasn't possible to find the end of the group (buffer overrun or end tag mismatch)
     * @inner
     */


    function skipTillGroupEnd(expectedId, buf) {
      var tag = buf.readVarint32(),
          // Throws on OOB
      wireType = tag & 0x07,
          id = tag >>> 3;

      switch (wireType) {
        case ProtoBuf.WIRE_TYPES.VARINT:
          do {
            tag = buf.readUint8();
          } while ((tag & 0x80) === 0x80);

          break;

        case ProtoBuf.WIRE_TYPES.BITS64:
          buf.offset += 8;
          break;

        case ProtoBuf.WIRE_TYPES.LDELIM:
          tag = buf.readVarint32(); // reads the varint

          buf.offset += tag; // skips n bytes

          break;

        case ProtoBuf.WIRE_TYPES.STARTGROUP:
          skipTillGroupEnd(id, buf);
          break;

        case ProtoBuf.WIRE_TYPES.ENDGROUP:
          if (id === expectedId) return false;else throw Error("Illegal GROUPEND after unknown group: " + id + " (" + expectedId + " expected)");

        case ProtoBuf.WIRE_TYPES.BITS32:
          buf.offset += 4;
          break;

        default:
          throw Error("Illegal wire type in unknown group " + expectedId + ": " + wireType);
      }

      return true;
    }
    /**
     * Decodes an encoded message and returns the decoded message.
     * @param {ByteBuffer} buffer ByteBuffer to decode from
     * @param {number=} length Message length. Defaults to decode all remaining data.
     * @param {number=} expectedGroupEndId Expected GROUPEND id if this is a legacy group
     * @return {ProtoBuf.Builder.Message} Decoded message
     * @throws {Error} If the message cannot be decoded
     * @expose
     */


    MessagePrototype.decode = function (buffer, length, expectedGroupEndId) {
      if (typeof length !== 'number') length = -1;
      var start = buffer.offset,
          msg = new this.clazz(),
          tag,
          wireType,
          id,
          field;

      while (buffer.offset < start + length || length === -1 && buffer.remaining() > 0) {
        tag = buffer.readVarint32();
        wireType = tag & 0x07;
        id = tag >>> 3;

        if (wireType === ProtoBuf.WIRE_TYPES.ENDGROUP) {
          if (id !== expectedGroupEndId) throw Error("Illegal group end indicator for " + this.toString(true) + ": " + id + " (" + (expectedGroupEndId ? expectedGroupEndId + " expected" : "not a group") + ")");
          break;
        }

        if (!(field = this._fieldsById[id])) {
          // "messages created by your new code can be parsed by your old code: old binaries simply ignore the new field when parsing."
          switch (wireType) {
            case ProtoBuf.WIRE_TYPES.VARINT:
              buffer.readVarint32();
              break;

            case ProtoBuf.WIRE_TYPES.BITS32:
              buffer.offset += 4;
              break;

            case ProtoBuf.WIRE_TYPES.BITS64:
              buffer.offset += 8;
              break;

            case ProtoBuf.WIRE_TYPES.LDELIM:
              var len = buffer.readVarint32();
              buffer.offset += len;
              break;

            case ProtoBuf.WIRE_TYPES.STARTGROUP:
              while (skipTillGroupEnd(id, buffer)) {}

              break;

            default:
              throw Error("Illegal wire type for unknown field " + id + " in " + this.toString(true) + "#decode: " + wireType);
          }

          continue;
        }

        if (field.repeated && !field.options["packed"]) {
          msg[field.name].push(field.decode(wireType, buffer));
        } else if (field.map) {
          var keyval = field.decode(wireType, buffer);
          msg[field.name].set(keyval[0], keyval[1]);
        } else {
          msg[field.name] = field.decode(wireType, buffer);

          if (field.oneof) {
            // Field is part of an OneOf (not a virtual OneOf field)
            var currentField = msg[field.oneof.name]; // Virtual field references currently set field

            if (currentField !== null && currentField !== field.name) msg[currentField] = null; // Clear currently set field

            msg[field.oneof.name] = field.name; // Point virtual field at this field
          }
        }
      } // Check if all required fields are present and set default values for optional fields that are not


      for (var i = 0, k = this._fields.length; i < k; ++i) {
        field = this._fields[i];

        if (msg[field.name] === null) {
          if (this.syntax === "proto3") {
            // Proto3 sets default values by specification
            msg[field.name] = field.defaultValue;
          } else if (field.required) {
            var err = Error("Missing at least one required field for " + this.toString(true) + ": " + field.name);
            err["decoded"] = msg; // Still expose what we got

            throw err;
          } else if (ProtoBuf.populateDefaults && field.defaultValue !== null) msg[field.name] = field.defaultValue;
        }
      }

      for (var i = 0, k = this._fields.length; i < k; ++i) {
        field = this._fields[i];

        if (field.type.name == 'int64') {
          if (msg[field.name] instanceof ProtoBuf.Long) {
            msg[field.name] = msg[field.name].toNumber();
          }
        }
      }

      return msg;
    };
    /**
     * @alias ProtoBuf.Reflect.Message
     * @expose
     */


    Reflect.Message = Message;
    /**
     * Constructs a new Message Field.
     * @exports ProtoBuf.Reflect.Message.Field
     * @param {!ProtoBuf.Builder} builder Builder reference
     * @param {!ProtoBuf.Reflect.Message} message Message reference
     * @param {string} rule Rule, one of requried, optional, repeated
     * @param {string?} keytype Key data type, if any.
     * @param {string} type Data type, e.g. int32
     * @param {string} name Field name
     * @param {number} id Unique field id
     * @param {Object.<string,*>=} options Options
     * @param {!ProtoBuf.Reflect.Message.OneOf=} oneof Enclosing OneOf
     * @param {string?} syntax The syntax level of this definition (e.g., proto3)
     * @constructor
     * @extends ProtoBuf.Reflect.T
     */

    var Field = function Field(builder, message, rule, keytype, type, name, id, options, oneof, syntax) {
      T.call(this, builder, message, name);
      /**
       * @override
       */

      this.className = "Message.Field";
      /**
       * Message field required flag.
       * @type {boolean}
       * @expose
       */

      this.required = rule === "required";
      /**
       * Message field repeated flag.
       * @type {boolean}
       * @expose
       */

      this.repeated = rule === "repeated";
      /**
       * Message field map flag.
       * @type {boolean}
       * @expose
       */

      this.map = rule === "map";
      /**
       * Message field key type. Type reference string if unresolved, protobuf
       * type if resolved. Valid only if this.map === true, null otherwise.
       * @type {string|{name: string, wireType: number}|null}
       * @expose
       */

      this.keyType = keytype || null;
      /**
       * Message field type. Type reference string if unresolved, protobuf type if
       * resolved. In a map field, this is the value type.
       * @type {string|{name: string, wireType: number}}
       * @expose
       */

      this.type = type;
      /**
       * Resolved type reference inside the global namespace.
       * @type {ProtoBuf.Reflect.T|null}
       * @expose
       */

      this.resolvedType = null;
      /**
       * Unique message field id.
       * @type {number}
       * @expose
       */

      this.id = id;
      /**
       * Message field options.
       * @type {!Object.<string,*>}
       * @dict
       * @expose
       */

      this.options = options || {};
      /**
       * Default value.
       * @type {*}
       * @expose
       */

      this.defaultValue = null;
      /**
       * Enclosing OneOf.
       * @type {?ProtoBuf.Reflect.Message.OneOf}
       * @expose
       */

      this.oneof = oneof || null;
      /**
       * Syntax level of this definition (e.g., proto3).
       * @type {string}
       * @expose
       */

      this.syntax = syntax || 'proto2';
      /**
       * Original field name.
       * @type {string}
       * @expose
       */

      this.originalName = this.name; // Used to revert camelcase transformation on naming collisions

      /**
       * Element implementation. Created in build() after types are resolved.
       * @type {ProtoBuf.Element}
       * @expose
       */

      this.element = null;
      /**
       * Key element implementation, for map fields. Created in build() after
       * types are resolved.
       * @type {ProtoBuf.Element}
       * @expose
       */

      this.keyElement = null; // Convert field names to camel case notation if the override is set

      if (this.builder.options['convertFieldsToCamelCase'] && !(this instanceof Message.ExtensionField)) this.name = ProtoBuf.Util.toCamelCase(this.name);
    };
    /**
     * @alias ProtoBuf.Reflect.Message.Field.prototype
     * @inner
     */


    var FieldPrototype = Field.prototype = Object.create(T.prototype);
    /**
     * Builds the field.
     * @override
     * @expose
     */

    FieldPrototype.build = function () {
      this.element = new Element(this.type, this.resolvedType, false, this.syntax, this.name);
      if (this.map) this.keyElement = new Element(this.keyType, undefined, true, this.syntax, this.name); // In proto3, fields do not have field presence, and every field is set to
      // its type's default value ("", 0, 0.0, or false).

      if (this.syntax === 'proto3' && !this.repeated && !this.map) this.defaultValue = Element.defaultFieldValue(this.type); // Otherwise, default values are present when explicitly specified
      else if (typeof this.options['default'] !== 'undefined') this.defaultValue = this.verifyValue(this.options['default']);
    };
    /**
     * Checks if the given value can be set for this field.
     * @param {*} value Value to check
     * @param {boolean=} skipRepeated Whether to skip the repeated value check or not. Defaults to false.
     * @return {*} Verified, maybe adjusted, value
     * @throws {Error} If the value cannot be set for this field
     * @expose
     */


    FieldPrototype.verifyValue = function (value, skipRepeated) {
      skipRepeated = skipRepeated || false;
      var self = this;

      function fail(val, msg) {
        throw Error("Illegal value for " + self.toString(true) + " of type " + self.type.name + ": " + val + " (" + msg + ")");
      }

      if (value === null) {
        // NULL values for optional fields
        if (this.required) fail(typeof value, "required");
        if (this.syntax === 'proto3' && this.type !== ProtoBuf.TYPES["message"]) fail(typeof value, "proto3 field without field presence cannot be null");
        return null;
      }

      var i;

      if (this.repeated && !skipRepeated) {
        // Repeated values as arrays
        if (!Array.isArray(value)) value = [value];
        var res = [];

        for (i = 0; i < value.length; i++) {
          res.push(this.element.verifyValue(value[i]));
        }

        return res;
      }

      if (this.map && !skipRepeated) {
        // Map values as objects
        if (!(value instanceof ProtoBuf.Map)) {
          // If not already a Map, attempt to convert.
          if (!(value instanceof Object)) {
            fail(typeof value, "expected ProtoBuf.Map or raw object for map field");
          }

          return new ProtoBuf.Map(this, value);
        } else {
          return value;
        }
      } // All non-repeated fields expect no array


      if (!this.repeated && Array.isArray(value)) fail(typeof value, "no array expected");
      return this.element.verifyValue(value);
    };
    /**
     * Determines whether the field will have a presence on the wire given its
     * value.
     * @param {*} value Verified field value
     * @param {!ProtoBuf.Builder.Message} message Runtime message
     * @return {boolean} Whether the field will be present on the wire
     */


    FieldPrototype.hasWirePresence = function (value, message) {
      if (this.syntax !== 'proto3') return value !== null;
      if (this.oneof && message[this.oneof.name] === this.name) return true;

      switch (this.type) {
        case ProtoBuf.TYPES["int32"]:
        case ProtoBuf.TYPES["sint32"]:
        case ProtoBuf.TYPES["sfixed32"]:
        case ProtoBuf.TYPES["uint32"]:
        case ProtoBuf.TYPES["fixed32"]:
          return value !== 0;

        case ProtoBuf.TYPES["int64"]:
        case ProtoBuf.TYPES["sint64"]:
        case ProtoBuf.TYPES["sfixed64"]:
        case ProtoBuf.TYPES["uint64"]:
        case ProtoBuf.TYPES["fixed64"]:
          return value.low !== 0 || value.high !== 0;

        case ProtoBuf.TYPES["bool"]:
          return value;

        case ProtoBuf.TYPES["float"]:
        case ProtoBuf.TYPES["double"]:
          return value !== 0.0;

        case ProtoBuf.TYPES["string"]:
          return value.length > 0;

        case ProtoBuf.TYPES["bytes"]:
          return value.remaining() > 0;

        case ProtoBuf.TYPES["enum"]:
          return value !== 0;

        case ProtoBuf.TYPES["message"]:
          return value !== null;

        default:
          return true;
      }
    };
    /**
     * Encodes the specified field value to the specified buffer.
     * @param {*} value Verified field value
     * @param {ByteBuffer} buffer ByteBuffer to encode to
     * @param {!ProtoBuf.Builder.Message} message Runtime message
     * @return {ByteBuffer} The ByteBuffer for chaining
     * @throws {Error} If the field cannot be encoded
     * @expose
     */


    FieldPrototype.encode = function (value, buffer, message) {
      if (this.type === null || typeof this.type !== 'object') throw Error("[INTERNAL] Unresolved type in " + this.toString(true) + ": " + this.type);
      if (value === null || this.repeated && value.length == 0) return buffer; // Optional omitted

      try {
        if (this.repeated) {
          var i; // "Only repeated fields of primitive numeric types (types which use the varint, 32-bit, or 64-bit wire
          // types) can be declared 'packed'."

          if (this.options["packed"] && ProtoBuf.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
            // "All of the elements of the field are packed into a single key-value pair with wire type 2
            // (length-delimited). Each element is encoded the same way it would be normally, except without a
            // tag preceding it."
            buffer.writeVarint32(this.id << 3 | ProtoBuf.WIRE_TYPES.LDELIM);
            buffer.ensureCapacity(buffer.offset += 1); // We do not know the length yet, so let's assume a varint of length 1

            var start = buffer.offset; // Remember where the contents begin

            for (i = 0; i < value.length; i++) {
              this.element.encodeValue(this.id, value[i], buffer);
            }

            var len = buffer.offset - start,
                varintLen = ByteBuffer.calculateVarint32(len);

            if (varintLen > 1) {
              // We need to move the contents
              var contents = buffer.slice(start, buffer.offset);
              start += varintLen - 1;
              buffer.offset = start;
              buffer.append(contents);
            }

            buffer.writeVarint32(len, start - varintLen);
          } else {
            // "If your message definition has repeated elements (without the [packed=true] option), the encoded
            // message has zero or more key-value pairs with the same tag number"
            for (i = 0; i < value.length; i++) {
              buffer.writeVarint32(this.id << 3 | this.type.wireType), this.element.encodeValue(this.id, value[i], buffer);
            }
          }
        } else if (this.map) {
          // Write out each map entry as a submessage.
          value.forEach(function (val, key, m) {
            // Compute the length of the submessage (key, val) pair.
            var length = ByteBuffer.calculateVarint32(1 << 3 | this.keyType.wireType) + this.keyElement.calculateLength(1, key) + ByteBuffer.calculateVarint32(2 << 3 | this.type.wireType) + this.element.calculateLength(2, val); // Submessage with wire type of length-delimited.

            buffer.writeVarint32(this.id << 3 | ProtoBuf.WIRE_TYPES.LDELIM);
            buffer.writeVarint32(length); // Write out the key and val.

            buffer.writeVarint32(1 << 3 | this.keyType.wireType);
            this.keyElement.encodeValue(1, key, buffer);
            buffer.writeVarint32(2 << 3 | this.type.wireType);
            this.element.encodeValue(2, val, buffer);
          }, this);
        } else {
          if (this.hasWirePresence(value, message)) {
            buffer.writeVarint32(this.id << 3 | this.type.wireType);
            this.element.encodeValue(this.id, value, buffer);
          }
        }
      } catch (e) {
        throw Error("Illegal value for " + this.toString(true) + ": " + value + " (" + e + ")");
      }

      return buffer;
    };
    /**
     * Calculates the length of this field's value on the network level.
     * @param {*} value Field value
     * @param {!ProtoBuf.Builder.Message} message Runtime message
     * @returns {number} Byte length
     * @expose
     */


    FieldPrototype.calculate = function (value, message) {
      value = this.verifyValue(value); // May throw

      if (this.type === null || typeof this.type !== 'object') throw Error("[INTERNAL] Unresolved type in " + this.toString(true) + ": " + this.type);
      if (value === null || this.repeated && value.length == 0) return 0; // Optional omitted

      var n = 0;

      try {
        if (this.repeated) {
          var i, ni;

          if (this.options["packed"] && ProtoBuf.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
            n += ByteBuffer.calculateVarint32(this.id << 3 | ProtoBuf.WIRE_TYPES.LDELIM);
            ni = 0;

            for (i = 0; i < value.length; i++) {
              ni += this.element.calculateLength(this.id, value[i]);
            }

            n += ByteBuffer.calculateVarint32(ni);
            n += ni;
          } else {
            for (i = 0; i < value.length; i++) {
              n += ByteBuffer.calculateVarint32(this.id << 3 | this.type.wireType), n += this.element.calculateLength(this.id, value[i]);
            }
          }
        } else if (this.map) {
          // Each map entry becomes a submessage.
          value.forEach(function (val, key, m) {
            // Compute the length of the submessage (key, val) pair.
            var length = ByteBuffer.calculateVarint32(1 << 3 | this.keyType.wireType) + this.keyElement.calculateLength(1, key) + ByteBuffer.calculateVarint32(2 << 3 | this.type.wireType) + this.element.calculateLength(2, val);
            n += ByteBuffer.calculateVarint32(this.id << 3 | ProtoBuf.WIRE_TYPES.LDELIM);
            n += ByteBuffer.calculateVarint32(length);
            n += length;
          }, this);
        } else {
          if (this.hasWirePresence(value, message)) {
            n += ByteBuffer.calculateVarint32(this.id << 3 | this.type.wireType);
            n += this.element.calculateLength(this.id, value);
          }
        }
      } catch (e) {
        throw Error("Illegal value for " + this.toString(true) + ": " + value + " (" + e + ")");
      }

      return n;
    };
    /**
     * Decode the field value from the specified buffer.
     * @param {number} wireType Leading wire type
     * @param {ByteBuffer} buffer ByteBuffer to decode from
     * @param {boolean=} skipRepeated Whether to skip the repeated check or not. Defaults to false.
     * @return {*} Decoded value: array for packed repeated fields, [key, value] for
     *             map fields, or an individual value otherwise.
     * @throws {Error} If the field cannot be decoded
     * @expose
     */


    FieldPrototype.decode = function (wireType, buffer, skipRepeated) {
      var value, nBytes; // We expect wireType to match the underlying type's wireType unless we see
      // a packed repeated field, or unless this is a map field.

      var wireTypeOK = !this.map && wireType == this.type.wireType || !skipRepeated && this.repeated && this.options["packed"] && wireType == ProtoBuf.WIRE_TYPES.LDELIM || this.map && wireType == ProtoBuf.WIRE_TYPES.LDELIM;
      if (!wireTypeOK) throw Error("Illegal wire type for field " + this.toString(true) + ": " + wireType + " (" + this.type.wireType + " expected)"); // Handle packed repeated fields.

      if (wireType == ProtoBuf.WIRE_TYPES.LDELIM && this.repeated && this.options["packed"] && ProtoBuf.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
        if (!skipRepeated) {
          nBytes = buffer.readVarint32();
          nBytes = buffer.offset + nBytes; // Limit

          var values = [];

          while (buffer.offset < nBytes) {
            values.push(this.decode(this.type.wireType, buffer, true));
          }

          return values;
        } // Read the next value otherwise...

      } // Handle maps.


      if (this.map) {
        // Read one (key, value) submessage, and return [key, value]
        var key = Element.defaultFieldValue(this.keyType);
        value = Element.defaultFieldValue(this.type); // Read the length

        nBytes = buffer.readVarint32();
        if (buffer.remaining() < nBytes) throw Error("Illegal number of bytes for " + this.toString(true) + ": " + nBytes + " required but got only " + buffer.remaining()); // Get a sub-buffer of this key/value submessage

        var msgbuf = buffer.clone();
        msgbuf.limit = msgbuf.offset + nBytes;
        buffer.offset += nBytes;

        while (msgbuf.remaining() > 0) {
          var tag = msgbuf.readVarint32();
          wireType = tag & 0x07;
          var id = tag >>> 3;

          if (id === 1) {
            key = this.keyElement.decode(msgbuf, wireType, id);
          } else if (id === 2) {
            value = this.element.decode(msgbuf, wireType, id);
          } else {
            throw Error("Unexpected tag in map field key/value submessage");
          }
        }

        return [key, value];
      } // Handle singular and non-packed repeated field values.


      return this.element.decode(buffer, wireType, this.id);
    };
    /**
     * @alias ProtoBuf.Reflect.Message.Field
     * @expose
     */


    Reflect.Message.Field = Field;
    /**
     * Constructs a new Message ExtensionField.
     * @exports ProtoBuf.Reflect.Message.ExtensionField
     * @param {!ProtoBuf.Builder} builder Builder reference
     * @param {!ProtoBuf.Reflect.Message} message Message reference
     * @param {string} rule Rule, one of requried, optional, repeated
     * @param {string} type Data type, e.g. int32
     * @param {string} name Field name
     * @param {number} id Unique field id
     * @param {!Object.<string,*>=} options Options
     * @constructor
     * @extends ProtoBuf.Reflect.Message.Field
     */

    var ExtensionField = function ExtensionField(builder, message, rule, type, name, id, options) {
      Field.call(this, builder, message, rule,
      /* keytype = */
      null, type, name, id, options);
      /**
       * Extension reference.
       * @type {!ProtoBuf.Reflect.Extension}
       * @expose
       */

      this.extension;
    }; // Extends Field


    ExtensionField.prototype = Object.create(Field.prototype);
    /**
     * @alias ProtoBuf.Reflect.Message.ExtensionField
     * @expose
     */

    Reflect.Message.ExtensionField = ExtensionField;
    /**
     * Constructs a new Message OneOf.
     * @exports ProtoBuf.Reflect.Message.OneOf
     * @param {!ProtoBuf.Builder} builder Builder reference
     * @param {!ProtoBuf.Reflect.Message} message Message reference
     * @param {string} name OneOf name
     * @constructor
     * @extends ProtoBuf.Reflect.T
     */

    var OneOf = function OneOf(builder, message, name) {
      T.call(this, builder, message, name);
      /**
       * Enclosed fields.
       * @type {!Array.<!ProtoBuf.Reflect.Message.Field>}
       * @expose
       */

      this.fields = [];
    };
    /**
     * @alias ProtoBuf.Reflect.Message.OneOf
     * @expose
     */


    Reflect.Message.OneOf = OneOf;
    /**
     * Constructs a new Enum.
     * @exports ProtoBuf.Reflect.Enum
     * @param {!ProtoBuf.Builder} builder Builder reference
     * @param {!ProtoBuf.Reflect.T} parent Parent Reflect object
     * @param {string} name Enum name
     * @param {Object.<string,*>=} options Enum options
     * @param {string?} syntax The syntax level (e.g., proto3)
     * @constructor
     * @extends ProtoBuf.Reflect.Namespace
     */

    var Enum = function Enum(builder, parent, name, options, syntax) {
      Namespace.call(this, builder, parent, name, options, syntax);
      /**
       * @override
       */

      this.className = "Enum";
      /**
       * Runtime enum object.
       * @type {Object.<string,number>|null}
       * @expose
       */

      this.object = null;
    };
    /**
     * Gets the string name of an enum value.
     * @param {!ProtoBuf.Builder.Enum} enm Runtime enum
     * @param {number} value Enum value
     * @returns {?string} Name or `null` if not present
     * @expose
     */


    Enum.getName = function (enm, value) {
      var keys = Object.keys(enm);

      for (var i = 0, key; i < keys.length; ++i) {
        if (enm[key = keys[i]] === value) return key;
      }

      return null;
    };
    /**
     * @alias ProtoBuf.Reflect.Enum.prototype
     * @inner
     */


    var EnumPrototype = Enum.prototype = Object.create(Namespace.prototype);
    /**
     * Builds this enum and returns the runtime counterpart.
     * @param {boolean} rebuild Whether to rebuild or not, defaults to false
     * @returns {!Object.<string,number>}
     * @expose
     */

    EnumPrototype.build = function (rebuild) {
      if (this.object && !rebuild) return this.object;
      var enm = new ProtoBuf.Builder.Enum(),
          values = this.getChildren(Enum.Value);

      for (var i = 0, k = values.length; i < k; ++i) {
        enm[values[i]['name']] = values[i]['id'];
      }

      if (Object.defineProperty) Object.defineProperty(enm, '$options', {
        "value": this.buildOpt(),
        "enumerable": false
      });
      return this.object = enm;
    };
    /**
     * @alias ProtoBuf.Reflect.Enum
     * @expose
     */


    Reflect.Enum = Enum;
    /**
     * Constructs a new Enum Value.
     * @exports ProtoBuf.Reflect.Enum.Value
     * @param {!ProtoBuf.Builder} builder Builder reference
     * @param {!ProtoBuf.Reflect.Enum} enm Enum reference
     * @param {string} name Field name
     * @param {number} id Unique field id
     * @constructor
     * @extends ProtoBuf.Reflect.T
     */

    var Value = function Value(builder, enm, name, id) {
      T.call(this, builder, enm, name);
      /**
       * @override
       */

      this.className = "Enum.Value";
      /**
       * Unique enum value id.
       * @type {number}
       * @expose
       */

      this.id = id;
    }; // Extends T


    Value.prototype = Object.create(T.prototype);
    /**
     * @alias ProtoBuf.Reflect.Enum.Value
     * @expose
     */

    Reflect.Enum.Value = Value;
    /**
     * An extension (field).
     * @exports ProtoBuf.Reflect.Extension
     * @constructor
     * @param {!ProtoBuf.Builder} builder Builder reference
     * @param {!ProtoBuf.Reflect.T} parent Parent object
     * @param {string} name Object name
     * @param {!ProtoBuf.Reflect.Message.Field} field Extension field
     */

    var Extension = function Extension(builder, parent, name, field) {
      T.call(this, builder, parent, name);
      /**
       * Extended message field.
       * @type {!ProtoBuf.Reflect.Message.Field}
       * @expose
       */

      this.field = field;
    }; // Extends T


    Extension.prototype = Object.create(T.prototype);
    /**
     * @alias ProtoBuf.Reflect.Extension
     * @expose
     */

    Reflect.Extension = Extension;
    /**
     * Constructs a new Service.
     * @exports ProtoBuf.Reflect.Service
     * @param {!ProtoBuf.Builder} builder Builder reference
     * @param {!ProtoBuf.Reflect.Namespace} root Root
     * @param {string} name Service name
     * @param {Object.<string,*>=} options Options
     * @constructor
     * @extends ProtoBuf.Reflect.Namespace
     */

    var Service = function Service(builder, root, name, options) {
      Namespace.call(this, builder, root, name, options);
      /**
       * @override
       */

      this.className = "Service";
      /**
       * Built runtime service class.
       * @type {?function(new:ProtoBuf.Builder.Service)}
       */

      this.clazz = null;
    };
    /**
     * @alias ProtoBuf.Reflect.Service.prototype
     * @inner
     */


    var ServicePrototype = Service.prototype = Object.create(Namespace.prototype);
    /**
     * Builds the service and returns the runtime counterpart, which is a fully functional class.
     * @see ProtoBuf.Builder.Service
     * @param {boolean=} rebuild Whether to rebuild or not
     * @return {Function} Service class
     * @throws {Error} If the message cannot be built
     * @expose
     */

    ServicePrototype.build = function (rebuild) {
      if (this.clazz && !rebuild) return this.clazz; // Create the runtime Service class in its own scope

      return this.clazz = function (ProtoBuf, T) {
        /**
         * Constructs a new runtime Service.
         * @name ProtoBuf.Builder.Service
         * @param {function(string, ProtoBuf.Builder.Message, function(Error, ProtoBuf.Builder.Message=))=} rpcImpl RPC implementation receiving the method name and the message
         * @class Barebone of all runtime services.
         * @constructor
         * @throws {Error} If the service cannot be created
         */
        var Service = function Service(rpcImpl) {
          ProtoBuf.Builder.Service.call(this);
          /**
           * Service implementation.
           * @name ProtoBuf.Builder.Service#rpcImpl
           * @type {!function(string, ProtoBuf.Builder.Message, function(Error, ProtoBuf.Builder.Message=))}
           * @expose
           */

          this.rpcImpl = rpcImpl || function (name, msg, callback) {
            // This is what a user has to implement: A function receiving the method name, the actual message to
            // send (type checked) and the callback that's either provided with the error as its first
            // argument or null and the actual response message.
            setTimeout(callback.bind(this, Error("Not implemented, see: https://github.com/dcodeIO/ProtoBuf.js/wiki/Services")), 0); // Must be async!
          };
        };
        /**
         * @alias ProtoBuf.Builder.Service.prototype
         * @inner
         */


        var ServicePrototype = Service.prototype = Object.create(ProtoBuf.Builder.Service.prototype);
        /**
         * Asynchronously performs an RPC call using the given RPC implementation.
         * @name ProtoBuf.Builder.Service.[Method]
         * @function
         * @param {!function(string, ProtoBuf.Builder.Message, function(Error, ProtoBuf.Builder.Message=))} rpcImpl RPC implementation
         * @param {ProtoBuf.Builder.Message} req Request
         * @param {function(Error, (ProtoBuf.Builder.Message|ByteBuffer|Buffer|string)=)} callback Callback receiving
         *  the error if any and the response either as a pre-parsed message or as its raw bytes
         * @abstract
         */

        /**
         * Asynchronously performs an RPC call using the instance's RPC implementation.
         * @name ProtoBuf.Builder.Service#[Method]
         * @function
         * @param {ProtoBuf.Builder.Message} req Request
         * @param {function(Error, (ProtoBuf.Builder.Message|ByteBuffer|Buffer|string)=)} callback Callback receiving
         *  the error if any and the response either as a pre-parsed message or as its raw bytes
         * @abstract
         */

        var rpc = T.getChildren(ProtoBuf.Reflect.Service.RPCMethod);

        for (var i = 0; i < rpc.length; i++) {
          (function (method) {
            // service#Method(message, callback)
            ServicePrototype[method.name] = function (req, callback) {
              try {
                try {
                  // If given as a buffer, decode the request. Will throw a TypeError if not a valid buffer.
                  req = method.resolvedRequestType.clazz.decode(ByteBuffer.wrap(req));
                } catch (err) {
                  if (!(err instanceof TypeError)) throw err;
                }

                if (req === null || typeof req !== 'object') throw Error("Illegal arguments");
                if (!(req instanceof method.resolvedRequestType.clazz)) req = new method.resolvedRequestType.clazz(req);
                this.rpcImpl(method.fqn(), req, function (err, res) {
                  // Assumes that this is properly async
                  if (err) {
                    callback(err);
                    return;
                  } // Coalesce to empty string when service response has empty content


                  if (res === null) res = '';

                  try {
                    res = method.resolvedResponseType.clazz.decode(res);
                  } catch (notABuffer) {}

                  if (!res || !(res instanceof method.resolvedResponseType.clazz)) {
                    callback(Error("Illegal response type received in service method " + T.name + "#" + method.name));
                    return;
                  }

                  callback(null, res);
                });
              } catch (err) {
                setTimeout(callback.bind(this, err), 0);
              }
            }; // Service.Method(rpcImpl, message, callback)


            Service[method.name] = function (rpcImpl, req, callback) {
              new Service(rpcImpl)[method.name](req, callback);
            };

            if (Object.defineProperty) Object.defineProperty(Service[method.name], "$options", {
              "value": method.buildOpt()
            }), Object.defineProperty(ServicePrototype[method.name], "$options", {
              "value": Service[method.name]["$options"]
            });
          })(rpc[i]);
        } // Properties

        /**
         * Service options.
         * @name ProtoBuf.Builder.Service.$options
         * @type {Object.<string,*>}
         * @expose
         */


        var $optionsS; // cc needs this

        /**
         * Service options.
         * @name ProtoBuf.Builder.Service#$options
         * @type {Object.<string,*>}
         * @expose
         */

        var $options;
        /**
         * Reflection type.
         * @name ProtoBuf.Builder.Service.$type
         * @type {!ProtoBuf.Reflect.Service}
         * @expose
         */

        var $typeS;
        /**
         * Reflection type.
         * @name ProtoBuf.Builder.Service#$type
         * @type {!ProtoBuf.Reflect.Service}
         * @expose
         */

        var $type;
        if (Object.defineProperty) Object.defineProperty(Service, "$options", {
          "value": T.buildOpt()
        }), Object.defineProperty(ServicePrototype, "$options", {
          "value": Service["$options"]
        }), Object.defineProperty(Service, "$type", {
          "value": T
        }), Object.defineProperty(ServicePrototype, "$type", {
          "value": T
        });
        return Service;
      }(ProtoBuf, this);
    };
    /**
     * @alias ProtoBuf.Reflect.Service
     * @expose
     */


    Reflect.Service = Service;
    /**
     * Abstract service method.
     * @exports ProtoBuf.Reflect.Service.Method
     * @param {!ProtoBuf.Builder} builder Builder reference
     * @param {!ProtoBuf.Reflect.Service} svc Service
     * @param {string} name Method name
     * @param {Object.<string,*>=} options Options
     * @constructor
     * @extends ProtoBuf.Reflect.T
     */

    var Method = function Method(builder, svc, name, options) {
      T.call(this, builder, svc, name);
      /**
       * @override
       */

      this.className = "Service.Method";
      /**
       * Options.
       * @type {Object.<string, *>}
       * @expose
       */

      this.options = options || {};
    };
    /**
     * @alias ProtoBuf.Reflect.Service.Method.prototype
     * @inner
     */


    var MethodPrototype = Method.prototype = Object.create(T.prototype);
    /**
     * Builds the method's '$options' property.
     * @name ProtoBuf.Reflect.Service.Method#buildOpt
     * @function
     * @return {Object.<string,*>}
     */

    MethodPrototype.buildOpt = NamespacePrototype.buildOpt;
    /**
     * @alias ProtoBuf.Reflect.Service.Method
     * @expose
     */

    Reflect.Service.Method = Method;
    /**
     * RPC service method.
     * @exports ProtoBuf.Reflect.Service.RPCMethod
     * @param {!ProtoBuf.Builder} builder Builder reference
     * @param {!ProtoBuf.Reflect.Service} svc Service
     * @param {string} name Method name
     * @param {string} request Request message name
     * @param {string} response Response message name
     * @param {boolean} request_stream Whether requests are streamed
     * @param {boolean} response_stream Whether responses are streamed
     * @param {Object.<string,*>=} options Options
     * @constructor
     * @extends ProtoBuf.Reflect.Service.Method
     */

    var RPCMethod = function RPCMethod(builder, svc, name, request, response, request_stream, response_stream, options) {
      Method.call(this, builder, svc, name, options);
      /**
       * @override
       */

      this.className = "Service.RPCMethod";
      /**
       * Request message name.
       * @type {string}
       * @expose
       */

      this.requestName = request;
      /**
       * Response message name.
       * @type {string}
       * @expose
       */

      this.responseName = response;
      /**
       * Whether requests are streamed
       * @type {bool}
       * @expose
       */

      this.requestStream = request_stream;
      /**
       * Whether responses are streamed
       * @type {bool}
       * @expose
       */

      this.responseStream = response_stream;
      /**
       * Resolved request message type.
       * @type {ProtoBuf.Reflect.Message}
       * @expose
       */

      this.resolvedRequestType = null;
      /**
       * Resolved response message type.
       * @type {ProtoBuf.Reflect.Message}
       * @expose
       */

      this.resolvedResponseType = null;
    }; // Extends Method


    RPCMethod.prototype = Object.create(Method.prototype);
    /**
     * @alias ProtoBuf.Reflect.Service.RPCMethod
     * @expose
     */

    Reflect.Service.RPCMethod = RPCMethod;
    return Reflect;
  }(ProtoBuf);
  /**
   * @alias ProtoBuf.Builder
   * @expose
   */


  ProtoBuf.Builder = function (ProtoBuf, Lang, Reflect) {
    "use strict";
    /**
     * Constructs a new Builder.
     * @exports ProtoBuf.Builder
     * @class Provides the functionality to build protocol messages.
     * @param {Object.<string,*>=} options Options
     * @constructor
     */

    var Builder = function Builder(options) {
      /**
       * Namespace.
       * @type {ProtoBuf.Reflect.Namespace}
       * @expose
       */
      this.ns = new Reflect.Namespace(this, null, ""); // Global namespace

      /**
       * Namespace pointer.
       * @type {ProtoBuf.Reflect.T}
       * @expose
       */

      this.ptr = this.ns;
      /**
       * Resolved flag.
       * @type {boolean}
       * @expose
       */

      this.resolved = false;
      /**
       * The current building result.
       * @type {Object.<string,ProtoBuf.Builder.Message|Object>|null}
       * @expose
       */

      this.result = null;
      /**
       * Imported files.
       * @type {Array.<string>}
       * @expose
       */

      this.files = {};
      /**
       * Import root override.
       * @type {?string}
       * @expose
       */

      this.importRoot = null;
      /**
       * Options.
       * @type {!Object.<string, *>}
       * @expose
       */

      this.options = options || {};
    };
    /**
     * @alias ProtoBuf.Builder.prototype
     * @inner
     */


    var BuilderPrototype = Builder.prototype; // ----- Definition tests -----

    /**
     * Tests if a definition most likely describes a message.
     * @param {!Object} def
     * @returns {boolean}
     * @expose
     */

    Builder.isMessage = function (def) {
      // Messages require a string name
      if (typeof def["name"] !== 'string') return false; // Messages do not contain values (enum) or rpc methods (service)

      if (typeof def["values"] !== 'undefined' || typeof def["rpc"] !== 'undefined') return false;
      return true;
    };
    /**
     * Tests if a definition most likely describes a message field.
     * @param {!Object} def
     * @returns {boolean}
     * @expose
     */


    Builder.isMessageField = function (def) {
      // Message fields require a string rule, name and type and an id
      if (typeof def["rule"] !== 'string' || typeof def["name"] !== 'string' || typeof def["type"] !== 'string' || typeof def["id"] === 'undefined') return false;
      return true;
    };
    /**
     * Tests if a definition most likely describes an enum.
     * @param {!Object} def
     * @returns {boolean}
     * @expose
     */


    Builder.isEnum = function (def) {
      // Enums require a string name
      if (typeof def["name"] !== 'string') return false; // Enums require at least one value

      if (typeof def["values"] === 'undefined' || !Array.isArray(def["values"]) || def["values"].length === 0) return false;
      return true;
    };
    /**
     * Tests if a definition most likely describes a service.
     * @param {!Object} def
     * @returns {boolean}
     * @expose
     */


    Builder.isService = function (def) {
      // Services require a string name and an rpc object
      if (typeof def["name"] !== 'string' || typeof def["rpc"] !== 'object' || !def["rpc"]) return false;
      return true;
    };
    /**
     * Tests if a definition most likely describes an extended message
     * @param {!Object} def
     * @returns {boolean}
     * @expose
     */


    Builder.isExtend = function (def) {
      // Extends rquire a string ref
      if (typeof def["ref"] !== 'string') return false;
      return true;
    }; // ----- Building -----

    /**
     * Resets the pointer to the root namespace.
     * @returns {!ProtoBuf.Builder} this
     * @expose
     */


    BuilderPrototype.reset = function () {
      this.ptr = this.ns;
      return this;
    };
    /**
     * Defines a namespace on top of the current pointer position and places the pointer on it.
     * @param {string} namespace
     * @return {!ProtoBuf.Builder} this
     * @expose
     */


    BuilderPrototype.define = function (namespace) {
      if (typeof namespace !== 'string' || !Lang.TYPEREF.test(namespace)) throw Error("illegal namespace: " + namespace);
      namespace.split(".").forEach(function (part) {
        var ns = this.ptr.getChild(part);
        if (ns === null) // Keep existing
          this.ptr.addChild(ns = new Reflect.Namespace(this, this.ptr, part));
        this.ptr = ns;
      }, this);
      return this;
    };
    /**
     * Creates the specified definitions at the current pointer position.
     * @param {!Array.<!Object>} defs Messages, enums or services to create
     * @returns {!ProtoBuf.Builder} this
     * @throws {Error} If a message definition is invalid
     * @expose
     */


    BuilderPrototype.create = function (defs) {
      if (!defs) return this; // Nothing to create

      if (!Array.isArray(defs)) defs = [defs];else {
        if (defs.length === 0) return this;
        defs = defs.slice();
      } // It's quite hard to keep track of scopes and memory here, so let's do this iteratively.

      var stack = [defs];

      while (stack.length > 0) {
        defs = stack.pop();
        if (!Array.isArray(defs)) // Stack always contains entire namespaces
          throw Error("not a valid namespace: " + JSON.stringify(defs));

        while (defs.length > 0) {
          var def = defs.shift(); // Namespaces always contain an array of messages, enums and services

          if (Builder.isMessage(def)) {
            var obj = new Reflect.Message(this, this.ptr, def["name"], def["options"], def["isGroup"], def["syntax"]); // Create OneOfs

            var oneofs = {};
            if (def["oneofs"]) Object.keys(def["oneofs"]).forEach(function (name) {
              obj.addChild(oneofs[name] = new Reflect.Message.OneOf(this, obj, name));
            }, this); // Create fields

            if (def["fields"]) def["fields"].forEach(function (fld) {
              if (obj.getChild(fld["id"] | 0) !== null) throw Error("duplicate or invalid field id in " + obj.name + ": " + fld['id']);
              if (fld["options"] && typeof fld["options"] !== 'object') throw Error("illegal field options in " + obj.name + "#" + fld["name"]);
              var oneof = null;
              if (typeof fld["oneof"] === 'string' && !(oneof = oneofs[fld["oneof"]])) throw Error("illegal oneof in " + obj.name + "#" + fld["name"] + ": " + fld["oneof"]);
              fld = new Reflect.Message.Field(this, obj, fld["rule"], fld["keytype"], fld["type"], fld["name"], fld["id"], fld["options"], oneof, def["syntax"]);
              if (oneof) oneof.fields.push(fld);
              obj.addChild(fld);
            }, this); // Push children to stack

            var subObj = [];
            if (def["enums"]) def["enums"].forEach(function (enm) {
              subObj.push(enm);
            });
            if (def["messages"]) def["messages"].forEach(function (msg) {
              subObj.push(msg);
            });
            if (def["services"]) def["services"].forEach(function (svc) {
              subObj.push(svc);
            }); // Set extension ranges

            if (def["extensions"]) {
              if (typeof def["extensions"][0] === 'number') // pre 5.0.1
                obj.extensions = [def["extensions"]];else obj.extensions = def["extensions"];
            } // Create on top of current namespace


            this.ptr.addChild(obj);

            if (subObj.length > 0) {
              stack.push(defs); // Push the current level back

              defs = subObj; // Continue processing sub level

              subObj = null;
              this.ptr = obj; // And move the pointer to this namespace

              obj = null;
              continue;
            }

            subObj = null;
          } else if (Builder.isEnum(def)) {
            obj = new Reflect.Enum(this, this.ptr, def["name"], def["options"], def["syntax"]);
            def["values"].forEach(function (val) {
              obj.addChild(new Reflect.Enum.Value(this, obj, val["name"], val["id"]));
            }, this);
            this.ptr.addChild(obj);
          } else if (Builder.isService(def)) {
            obj = new Reflect.Service(this, this.ptr, def["name"], def["options"]);
            Object.keys(def["rpc"]).forEach(function (name) {
              var mtd = def["rpc"][name];
              obj.addChild(new Reflect.Service.RPCMethod(this, obj, name, mtd["request"], mtd["response"], !!mtd["request_stream"], !!mtd["response_stream"], mtd["options"]));
            }, this);
            this.ptr.addChild(obj);
          } else if (Builder.isExtend(def)) {
            obj = this.ptr.resolve(def["ref"], true);

            if (obj) {
              def["fields"].forEach(function (fld) {
                if (obj.getChild(fld['id'] | 0) !== null) throw Error("duplicate extended field id in " + obj.name + ": " + fld['id']); // Check if field id is allowed to be extended

                if (obj.extensions) {
                  var valid = false;
                  obj.extensions.forEach(function (range) {
                    if (fld["id"] >= range[0] && fld["id"] <= range[1]) valid = true;
                  });
                  if (!valid) throw Error("illegal extended field id in " + obj.name + ": " + fld['id'] + " (not within valid ranges)");
                } // Convert extension field names to camel case notation if the override is set


                var name = fld["name"];
                if (this.options['convertFieldsToCamelCase']) name = ProtoBuf.Util.toCamelCase(name); // see #161: Extensions use their fully qualified name as their runtime key and...

                var field = new Reflect.Message.ExtensionField(this, obj, fld["rule"], fld["type"], this.ptr.fqn() + '.' + name, fld["id"], fld["options"]); // ...are added on top of the current namespace as an extension which is used for
                // resolving their type later on (the extension always keeps the original name to
                // prevent naming collisions)

                var ext = new Reflect.Extension(this, this.ptr, fld["name"], field);
                field.extension = ext;
                this.ptr.addChild(ext);
                obj.addChild(field);
              }, this);
            } else if (!/\.?google\.protobuf\./.test(def["ref"])) // Silently skip internal extensions
              throw Error("extended message " + def["ref"] + " is not defined");
          } else throw Error("not a valid definition: " + JSON.stringify(def));

          def = null;
          obj = null;
        } // Break goes here


        defs = null;
        this.ptr = this.ptr.parent; // Namespace done, continue at parent
      }

      this.resolved = false; // Require re-resolve

      this.result = null; // Require re-build

      return this;
    };
    /**
     * Propagates syntax to all children.
     * @param {!Object} parent
     * @inner
     */


    function propagateSyntax(parent) {
      if (parent['messages']) {
        parent['messages'].forEach(function (child) {
          child["syntax"] = parent["syntax"];
          propagateSyntax(child);
        });
      }

      if (parent['enums']) {
        parent['enums'].forEach(function (child) {
          child["syntax"] = parent["syntax"];
        });
      }
    }
    /**
     * Imports another definition into this builder.
     * @param {Object.<string,*>} json Parsed import
     * @param {(string|{root: string, file: string})=} filename Imported file name
     * @returns {!ProtoBuf.Builder} this
     * @throws {Error} If the definition or file cannot be imported
     * @expose
     */


    BuilderPrototype["import"] = function (json, filename) {
      var delim = '/'; // Make sure to skip duplicate imports

      if (typeof filename === 'string') {
        if (ProtoBuf.Util.IS_NODE) filename = require("path")['resolve'](filename);
        if (this.files[filename] === true) return this.reset();
        this.files[filename] = true;
      } else if (typeof filename === 'object') {
        // Object with root, file.
        var root = filename.root;
        if (ProtoBuf.Util.IS_NODE) root = require("path")['resolve'](root);
        if (root.indexOf("\\") >= 0 || filename.file.indexOf("\\") >= 0) delim = '\\';
        var fname;
        if (ProtoBuf.Util.IS_NODE) fname = require("path")['join'](root, filename.file);else fname = root + delim + filename.file;
        if (this.files[fname] === true) return this.reset();
        this.files[fname] = true;
      } // Import imports


      if (json['imports'] && json['imports'].length > 0) {
        var importRoot,
            resetRoot = false;

        if (typeof filename === 'object') {
          // If an import root is specified, override
          this.importRoot = filename["root"];
          resetRoot = true; // ... and reset afterwards

          importRoot = this.importRoot;
          filename = filename["file"];
          if (importRoot.indexOf("\\") >= 0 || filename.indexOf("\\") >= 0) delim = '\\';
        } else if (typeof filename === 'string') {
          if (this.importRoot) // If import root is overridden, use it
            importRoot = this.importRoot;else {
            // Otherwise compute from filename
            if (filename.indexOf("/") >= 0) {
              // Unix
              importRoot = filename.replace(/\/[^\/]*$/, "");
              if (
              /* /file.proto */
              importRoot === "") importRoot = "/";
            } else if (filename.indexOf("\\") >= 0) {
              // Windows
              importRoot = filename.replace(/\\[^\\]*$/, "");
              delim = '\\';
            } else importRoot = ".";
          }
        } else importRoot = null;

        for (var i = 0; i < json['imports'].length; i++) {
          if (typeof json['imports'][i] === 'string') {
            // Import file
            if (!importRoot) throw Error("cannot determine import root");
            var importFilename = json['imports'][i];
            if (importFilename === "google/protobuf/descriptor.proto") continue; // Not needed and therefore not used

            if (ProtoBuf.Util.IS_NODE) importFilename = require("path")['join'](importRoot, importFilename);else importFilename = importRoot + delim + importFilename;
            if (this.files[importFilename] === true) continue; // Already imported

            if (/\.proto$/i.test(importFilename) && !ProtoBuf.DotProto) // If this is a light build
              importFilename = importFilename.replace(/\.proto$/, ".json"); // always load the JSON file

            var contents = ProtoBuf.Util.fetch(importFilename);
            if (contents === null) throw Error("failed to import '" + importFilename + "' in '" + filename + "': file not found");
            if (/\.json$/i.test(importFilename)) // Always possible
              this["import"](JSON.parse(contents + ""), importFilename); // May throw
            else this["import"](ProtoBuf.DotProto.Parser.parse(contents), importFilename); // May throw
          } else // Import structure
            if (!filename) this["import"](json['imports'][i]);else if (/\.(\w+)$/.test(filename)) // With extension: Append _importN to the name portion to make it unique
              this["import"](json['imports'][i], filename.replace(/^(.+)\.(\w+)$/, function ($0, $1, $2) {
                return $1 + "_import" + i + "." + $2;
              }));else // Without extension: Append _importN to make it unique
              this["import"](json['imports'][i], filename + "_import" + i);
        }

        if (resetRoot) // Reset import root override when all imports are done
          this.importRoot = null;
      } // Import structures


      if (json['package']) this.define(json['package']);
      if (json['syntax']) propagateSyntax(json);
      var base = this.ptr;
      if (json['options']) Object.keys(json['options']).forEach(function (key) {
        base.options[key] = json['options'][key];
      });
      if (json['messages']) this.create(json['messages']), this.ptr = base;
      if (json['enums']) this.create(json['enums']), this.ptr = base;
      if (json['services']) this.create(json['services']), this.ptr = base;
      if (json['extends']) this.create(json['extends']);
      return this.reset();
    };
    /**
     * Resolves all namespace objects.
     * @throws {Error} If a type cannot be resolved
     * @returns {!ProtoBuf.Builder} this
     * @expose
     */


    BuilderPrototype.resolveAll = function () {
      // Resolve all reflected objects
      var res;
      if (this.ptr == null || typeof this.ptr.type === 'object') return this; // Done (already resolved)

      if (this.ptr instanceof Reflect.Namespace) {
        // Resolve children
        this.ptr.children.forEach(function (child) {
          this.ptr = child;
          this.resolveAll();
        }, this);
      } else if (this.ptr instanceof Reflect.Message.Field) {
        // Resolve type
        if (!Lang.TYPE.test(this.ptr.type)) {
          if (!Lang.TYPEREF.test(this.ptr.type)) throw Error("illegal type reference in " + this.ptr.toString(true) + ": " + this.ptr.type);
          res = (this.ptr instanceof Reflect.Message.ExtensionField ? this.ptr.extension.parent : this.ptr.parent).resolve(this.ptr.type, true);
          if (!res) throw Error("unresolvable type reference in " + this.ptr.toString(true) + ": " + this.ptr.type);
          this.ptr.resolvedType = res;

          if (res instanceof Reflect.Enum) {
            this.ptr.type = ProtoBuf.TYPES["enum"];
            if (this.ptr.syntax === 'proto3' && res.syntax !== 'proto3') throw Error("proto3 message cannot reference proto2 enum");
          } else if (res instanceof Reflect.Message) this.ptr.type = res.isGroup ? ProtoBuf.TYPES["group"] : ProtoBuf.TYPES["message"];else throw Error("illegal type reference in " + this.ptr.toString(true) + ": " + this.ptr.type);
        } else this.ptr.type = ProtoBuf.TYPES[this.ptr.type]; // If it's a map field, also resolve the key type. The key type can be only a numeric, string, or bool type
        // (i.e., no enums or messages), so we don't need to resolve against the current namespace.


        if (this.ptr.map) {
          if (!Lang.TYPE.test(this.ptr.keyType)) throw Error("illegal key type for map field in " + this.ptr.toString(true) + ": " + this.ptr.keyType);
          this.ptr.keyType = ProtoBuf.TYPES[this.ptr.keyType];
        } // If it's a repeated and packable field then proto3 mandates it should be packed by
        // default


        if (this.ptr.syntax === 'proto3' && this.ptr.repeated && this.ptr.options.packed === undefined && ProtoBuf.PACKABLE_WIRE_TYPES.indexOf(this.ptr.type.wireType) !== -1) {
          this.ptr.options.packed = true;
        }
      } else if (this.ptr instanceof ProtoBuf.Reflect.Service.Method) {
        if (this.ptr instanceof ProtoBuf.Reflect.Service.RPCMethod) {
          res = this.ptr.parent.resolve(this.ptr.requestName, true);
          if (!res || !(res instanceof ProtoBuf.Reflect.Message)) throw Error("Illegal type reference in " + this.ptr.toString(true) + ": " + this.ptr.requestName);
          this.ptr.resolvedRequestType = res;
          res = this.ptr.parent.resolve(this.ptr.responseName, true);
          if (!res || !(res instanceof ProtoBuf.Reflect.Message)) throw Error("Illegal type reference in " + this.ptr.toString(true) + ": " + this.ptr.responseName);
          this.ptr.resolvedResponseType = res;
        } else // Should not happen as nothing else is implemented
          throw Error("illegal service type in " + this.ptr.toString(true));
      } else if (!(this.ptr instanceof ProtoBuf.Reflect.Message.OneOf) && // Not built
      !(this.ptr instanceof ProtoBuf.Reflect.Extension) && // Not built
      !(this.ptr instanceof ProtoBuf.Reflect.Enum.Value) // Built in enum
      ) throw Error("illegal object in namespace: " + typeof this.ptr + ": " + this.ptr);

      return this.reset();
    };
    /**
     * Builds the protocol. This will first try to resolve all definitions and, if this has been successful,
     * return the built package.
     * @param {(string|Array.<string>)=} path Specifies what to return. If omitted, the entire namespace will be returned.
     * @returns {!ProtoBuf.Builder.Message|!Object.<string,*>}
     * @throws {Error} If a type could not be resolved
     * @expose
     */


    BuilderPrototype.build = function (path) {
      this.reset();
      if (!this.resolved) this.resolveAll(), this.resolved = true, this.result = null; // Require re-build

      if (this.result === null) // (Re-)Build
        this.result = this.ns.build();
      if (!path) return this.result;
      var part = typeof path === 'string' ? path.split(".") : path,
          ptr = this.result; // Build namespace pointer (no hasChild etc.)

      for (var i = 0; i < part.length; i++) {
        if (ptr[part[i]]) ptr = ptr[part[i]];else {
          ptr = null;
          break;
        }
      }

      return ptr;
    };
    /**
     * Similar to {@link ProtoBuf.Builder#build}, but looks up the internal reflection descriptor.
     * @param {string=} path Specifies what to return. If omitted, the entire namespace wiil be returned.
     * @param {boolean=} excludeNonNamespace Excludes non-namespace types like fields, defaults to `false`
     * @returns {?ProtoBuf.Reflect.T} Reflection descriptor or `null` if not found
     */


    BuilderPrototype.lookup = function (path, excludeNonNamespace) {
      return path ? this.ns.resolve(path, excludeNonNamespace) : this.ns;
    };
    /**
     * Returns a string representation of this object.
     * @return {string} String representation as of "Builder"
     * @expose
     */


    BuilderPrototype.toString = function () {
      return "Builder";
    }; // ----- Base classes -----
    // Exist for the sole purpose of being able to "... instanceof ProtoBuf.Builder.Message" etc.

    /**
     * @alias ProtoBuf.Builder.Message
     */


    Builder.Message = function () {};
    /**
     * @alias ProtoBuf.Builder.Enum
     */


    Builder.Enum = function () {};
    /**
     * @alias ProtoBuf.Builder.Message
     */


    Builder.Service = function () {};

    return Builder;
  }(ProtoBuf, ProtoBuf.Lang, ProtoBuf.Reflect);
  /**
   * @alias ProtoBuf.Map
   * @expose
   */


  ProtoBuf.Map = function (ProtoBuf, Reflect) {
    "use strict";
    /**
     * Constructs a new Map. A Map is a container that is used to implement map
     * fields on message objects. It closely follows the ES6 Map API; however,
     * it is distinct because we do not want to depend on external polyfills or
     * on ES6 itself.
     *
     * @exports ProtoBuf.Map
     * @param {!ProtoBuf.Reflect.Field} field Map field
     * @param {Object.<string,*>=} contents Initial contents
     * @constructor
     */

    var Map = function Map(field, contents) {
      if (!field.map) throw Error("field is not a map");
      /**
       * The field corresponding to this map.
       * @type {!ProtoBuf.Reflect.Field}
       */

      this.field = field;
      /**
       * Element instance corresponding to key type.
       * @type {!ProtoBuf.Reflect.Element}
       */

      this.keyElem = new Reflect.Element(field.keyType, null, true, field.syntax);
      /**
       * Element instance corresponding to value type.
       * @type {!ProtoBuf.Reflect.Element}
       */

      this.valueElem = new Reflect.Element(field.type, field.resolvedType, false, field.syntax);
      /**
       * Internal map: stores mapping of (string form of key) -> (key, value)
       * pair.
       *
       * We provide map semantics for arbitrary key types, but we build on top
       * of an Object, which has only string keys. In order to avoid the need
       * to convert a string key back to its native type in many situations,
       * we store the native key value alongside the value. Thus, we only need
       * a one-way mapping from a key type to its string form that guarantees
       * uniqueness and equality (i.e., str(K1) === str(K2) if and only if K1
       * === K2).
       *
       * @type {!Object<string, {key: *, value: *}>}
       */

      this.map = {};
      /**
       * Returns the number of elements in the map.
       */

      Object.defineProperty(this, "size", {
        get: function get() {
          return Object.keys(this.map).length;
        }
      }); // Fill initial contents from a raw object.

      if (contents) {
        var keys = Object.keys(contents);

        for (var i = 0; i < keys.length; i++) {
          var key = this.keyElem.valueFromString(keys[i]);
          var val = this.valueElem.verifyValue(contents[keys[i]]);
          var kkk;

          if (typeof key === 'object') {
            kkk = key.toNumber();
            this.map['' + kkk] = {
              key: key,
              value: val
            };
          } else {
            this.map[this.keyElem.valueToString(key)] = {
              key: key,
              value: val
            };
          }
        }
      }
    };

    var MapPrototype = Map.prototype;
    /**
     * Helper: return an iterator over an array.
     * @param {!Array<*>} arr the array
     * @returns {!Object} an iterator
     * @inner
     */

    function arrayIterator(arr) {
      var idx = 0;
      return {
        next: function next() {
          if (idx < arr.length) return {
            done: false,
            value: arr[idx++]
          };
          return {
            done: true
          };
        }
      };
    }
    /**
     * Clears the map.
     */


    MapPrototype.clear = function () {
      this.map = {};
    };
    /**
     * Deletes a particular key from the map.
     * @returns {boolean} Whether any entry with this key was deleted.
     */


    MapPrototype["delete"] = function (key) {
      var vKey = this.keyElem.verifyValue(key);

      if (typeof vKey === 'object') {
        var realKey = vKey.toNumber();
        var hadKey = (realKey in this.map);
        delete this.map[realKey];
        return hadKey;
      } else {
        var keyValue = this.keyElem.valueToString(vKey);
        var hadKey = (keyValue in this.map);
        delete this.map[keyValue];
        return hadKey;
      }
    };
    /**
     * Returns an iterator over [key, value] pairs in the map.
     * @returns {Object} The iterator
     */


    MapPrototype.entries = function () {
      var entries = [];
      var strKeys = Object.keys(this.map);

      for (var i = 0, entry; i < strKeys.length; i++) {
        entries.push([(entry = this.map[strKeys[i]]).key, entry.value]);
      }

      return arrayIterator(entries);
    };
    /**
     * Returns an iterator over keys in the map.
     * @returns {Object} The iterator
     */


    MapPrototype.keys = function () {
      var keys = [];
      var strKeys = Object.keys(this.map);

      for (var i = 0; i < strKeys.length; i++) {
        keys.push(this.map[strKeys[i]].key);
      }

      return arrayIterator(keys);
    };
    /**
     * Returns an iterator over values in the map.
     * @returns {!Object} The iterator
     */


    MapPrototype.values = function () {
      var values = [];
      var strKeys = Object.keys(this.map);

      for (var i = 0; i < strKeys.length; i++) {
        values.push(this.map[strKeys[i]].value);
      }

      return arrayIterator(values);
    };
    /**
     * Iterates over entries in the map, calling a function on each.
     * @param {function(this:*, *, *, *)} cb The callback to invoke with value, key, and map arguments.
     * @param {Object=} thisArg The `this` value for the callback
     */


    MapPrototype.forEach = function (cb, thisArg) {
      var strKeys = Object.keys(this.map);

      for (var i = 0, entry; i < strKeys.length; i++) {
        var entry = this.map[strKeys[i]];

        if (typeof entry.key === 'object') {
          cb.call(thisArg, entry.value, entry.key.toNumber(), this);
        } else {
          cb.call(thisArg, entry.value, entry.key, this);
        }
      }
    };
    /**
     * Sets a key in the map to the given value.
     * @param {*} key The key
     * @param {*} value The value
     * @returns {!ProtoBuf.Map} The map instance
     */


    MapPrototype.set = function (key, value) {
      var keyValue = this.keyElem.verifyValue(key);
      var valValue = this.valueElem.verifyValue(value);

      if (typeof keyValue === 'object') {
        var realKey = keyValue.toNumber();
        this.map['' + realKey] = {
          key: keyValue,
          value: valValue
        };
      } else {
        var realValue = valValue;

        if (this.valueElem.type.name == 'int64') {
          realValue = valValue.toNumber();
        }

        this.map[this.keyElem.valueToString(keyValue)] = {
          key: keyValue,
          value: realValue
        };
      }

      return this;
    };
    /**
     * Gets the value corresponding to a key in the map.
     * @param {*} key The key
     * @returns {*|undefined} The value, or `undefined` if key not present
     */


    MapPrototype.get = function (key) {
      var vKey = this.keyElem.verifyValue(key);

      if (typeof vKey === 'object') {
        var realKey = vKey.toNumber();
        if (!(realKey in this.map)) return;
        return this.map[realKey].value;
      } else {
        var keyValue = this.keyElem.valueToString(vKey);
        if (!(keyValue in this.map)) return;
        return this.map[keyValue].value;
      }
    };
    /**
     * Determines whether the given key is present in the map.
     * @param {*} key The key
     * @returns {boolean} `true` if the key is present
     */


    MapPrototype.has = function (key) {
      var vKey = this.keyElem.verifyValue(key);

      if (typeof vKey === 'object') {
        var realKey = vKey.toNumber();
        return realKey in this.map;
      } else {
        var keyValue = this.keyElem.valueToString(vKey);
        return keyValue in this.map;
      }
    };

    return Map;
  }(ProtoBuf, ProtoBuf.Reflect);
  /**
   * Loads a .proto string and returns the Builder.
   * @param {string} proto .proto file contents
   * @param {(ProtoBuf.Builder|string|{root: string, file: string})=} builder Builder to append to. Will create a new one if omitted.
   * @param {(string|{root: string, file: string})=} filename The corresponding file name if known. Must be specified for imports.
   * @return {ProtoBuf.Builder} Builder to create new messages
   * @throws {Error} If the definition cannot be parsed or built
   * @expose
   */


  ProtoBuf.loadProto = function (proto, builder, filename) {
    if (typeof builder === 'string' || builder && typeof builder["file"] === 'string' && typeof builder["root"] === 'string') filename = builder, builder = undefined;
    return ProtoBuf.loadJson(ProtoBuf.DotProto.Parser.parse(proto), builder, filename);
  };
  /**
   * Loads a .proto string and returns the Builder. This is an alias of {@link ProtoBuf.loadProto}.
   * @function
   * @param {string} proto .proto file contents
   * @param {(ProtoBuf.Builder|string)=} builder Builder to append to. Will create a new one if omitted.
   * @param {(string|{root: string, file: string})=} filename The corresponding file name if known. Must be specified for imports.
   * @return {ProtoBuf.Builder} Builder to create new messages
   * @throws {Error} If the definition cannot be parsed or built
   * @expose
   */


  ProtoBuf.protoFromString = ProtoBuf.loadProto; // Legacy

  /**
   * Loads a .proto file and returns the Builder.
   * @param {string|{root: string, file: string}} filename Path to proto file or an object specifying 'file' with
   *  an overridden 'root' path for all imported files.
   * @param {function(?Error, !ProtoBuf.Builder=)=} callback Callback that will receive `null` as the first and
   *  the Builder as its second argument on success, otherwise the error as its first argument. If omitted, the
   *  file will be read synchronously and this function will return the Builder.
   * @param {ProtoBuf.Builder=} builder Builder to append to. Will create a new one if omitted.
   * @return {?ProtoBuf.Builder|undefined} The Builder if synchronous (no callback specified, will be NULL if the
   *   request has failed), else undefined
   * @expose
   */

  ProtoBuf.loadProtoFile = function (filename, callback, builder) {
    if (callback && typeof callback === 'object') builder = callback, callback = null;else if (!callback || typeof callback !== 'function') callback = null;
    if (callback) return ProtoBuf.Util.fetch(typeof filename === 'string' ? filename : filename["root"] + "/" + filename["file"], function (contents) {
      if (contents === null) {
        callback(Error("Failed to fetch file"));
        return;
      }

      try {
        callback(null, ProtoBuf.loadProto(contents, builder, filename));
      } catch (e) {
        callback(e);
      }
    });
    var contents = ProtoBuf.Util.fetch(typeof filename === 'object' ? filename["root"] + "/" + filename["file"] : filename);
    return contents === null ? null : ProtoBuf.loadProto(contents, builder, filename);
  };
  /**
   * Loads a .proto file and returns the Builder. This is an alias of {@link ProtoBuf.loadProtoFile}.
   * @function
   * @param {string|{root: string, file: string}} filename Path to proto file or an object specifying 'file' with
   *  an overridden 'root' path for all imported files.
   * @param {function(?Error, !ProtoBuf.Builder=)=} callback Callback that will receive `null` as the first and
   *  the Builder as its second argument on success, otherwise the error as its first argument. If omitted, the
   *  file will be read synchronously and this function will return the Builder.
   * @param {ProtoBuf.Builder=} builder Builder to append to. Will create a new one if omitted.
   * @return {!ProtoBuf.Builder|undefined} The Builder if synchronous (no callback specified, will be NULL if the
   *   request has failed), else undefined
   * @expose
   */


  ProtoBuf.protoFromFile = ProtoBuf.loadProtoFile; // Legacy

  /**
   * Constructs a new empty Builder.
   * @param {Object.<string,*>=} options Builder options, defaults to global options set on ProtoBuf
   * @return {!ProtoBuf.Builder} Builder
   * @expose
   */

  ProtoBuf.newBuilder = function (options) {
    options = options || {};
    if (typeof options['convertFieldsToCamelCase'] === 'undefined') options['convertFieldsToCamelCase'] = ProtoBuf.convertFieldsToCamelCase;
    if (typeof options['populateAccessors'] === 'undefined') options['populateAccessors'] = ProtoBuf.populateAccessors;
    return new ProtoBuf.Builder(options);
  };
  /**
   * Loads a .json definition and returns the Builder.
   * @param {!*|string} json JSON definition
   * @param {(ProtoBuf.Builder|string|{root: string, file: string})=} builder Builder to append to. Will create a new one if omitted.
   * @param {(string|{root: string, file: string})=} filename The corresponding file name if known. Must be specified for imports.
   * @return {ProtoBuf.Builder} Builder to create new messages
   * @throws {Error} If the definition cannot be parsed or built
   * @expose
   */


  ProtoBuf.loadJson = function (json, builder, filename) {
    if (typeof builder === 'string' || builder && typeof builder["file"] === 'string' && typeof builder["root"] === 'string') filename = builder, builder = null;
    if (!builder || typeof builder !== 'object') builder = ProtoBuf.newBuilder();
    if (typeof json === 'string') json = JSON.parse(json);
    builder["import"](json, filename);
    builder.resolveAll();
    return builder;
  };
  /**
   * Loads a .json file and returns the Builder.
   * @param {string|!{root: string, file: string}} filename Path to json file or an object specifying 'file' with
   *  an overridden 'root' path for all imported files.
   * @param {function(?Error, !ProtoBuf.Builder=)=} callback Callback that will receive `null` as the first and
   *  the Builder as its second argument on success, otherwise the error as its first argument. If omitted, the
   *  file will be read synchronously and this function will return the Builder.
   * @param {ProtoBuf.Builder=} builder Builder to append to. Will create a new one if omitted.
   * @return {?ProtoBuf.Builder|undefined} The Builder if synchronous (no callback specified, will be NULL if the
   *   request has failed), else undefined
   * @expose
   */


  ProtoBuf.loadJsonFile = function (filename, callback, builder) {
    if (callback && typeof callback === 'object') builder = callback, callback = null;else if (!callback || typeof callback !== 'function') callback = null;
    if (callback) return ProtoBuf.Util.fetch(typeof filename === 'string' ? filename : filename["root"] + "/" + filename["file"], function (contents) {
      if (contents === null) {
        callback(Error("Failed to fetch file"));
        return;
      }

      try {
        callback(null, ProtoBuf.loadJson(JSON.parse(contents), builder, filename));
      } catch (e) {
        callback(e);
      }
    });
    var contents = ProtoBuf.Util.fetch(typeof filename === 'object' ? filename["root"] + "/" + filename["file"] : filename);
    return contents === null ? null : ProtoBuf.loadJson(JSON.parse(contents), builder, filename);
  };

  return ProtoBuf;
});

cc._RF.pop();

}).call(this,require("../../../../../../../../../../../../Applications/Cocos/Creator/2.4.13/CocosCreator.app/Contents/Resources/app.asar/node_modules/process/browser.js"))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hc3NldHMvYzJmLWZyYW1ld29yay9uZXQvd3MvcHJvdG9idWYvcHJvdG9idWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFVBQVUsTUFBVixFQUFrQixPQUFsQixFQUEyQjtFQUV4QjtFQUFVLElBQUksT0FBTyxNQUFQLEtBQWtCLFVBQWxCLElBQWdDLE1BQU0sQ0FBQyxLQUFELENBQTFDLEVBQ04sTUFBTSxDQUFDLENBQUMsWUFBRCxDQUFELEVBQWlCLE9BQWpCLENBQU47RUFDSjtFQUZVLEtBRVUsSUFBSSxPQUFPLE9BQVAsS0FBbUIsVUFBbkIsSUFBaUMsT0FBTyxNQUFQLEtBQWtCLFFBQW5ELElBQStELE1BQS9ELElBQXlFLE1BQU0sQ0FBQyxTQUFELENBQW5GLEVBQ2hCLE1BQU0sQ0FBQyxTQUFELENBQU4sR0FBb0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFELENBQVIsRUFBd0IsSUFBeEIsQ0FBM0I7RUFDSjtFQUZvQixLQUdoQixDQUFDLE1BQU0sQ0FBQyxTQUFELENBQU4sR0FBb0IsTUFBTSxDQUFDLFNBQUQsQ0FBTixJQUFxQixFQUExQyxFQUE4QyxVQUE5QyxJQUE0RCxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQUQsQ0FBTixDQUFrQixZQUFsQixDQUFELENBQW5FO0FBRVAsQ0FURCxVQVNTLFVBQVUsVUFBVixFQUFzQixVQUF0QixFQUFrQztFQUN2QztFQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUFDSSxJQUFJLFFBQVEsR0FBRyxFQUFmO0VBRUE7QUFDSjtBQUNBO0FBQ0E7O0VBQ0ksUUFBUSxDQUFDLFVBQVQsR0FBc0IsVUFBdEI7RUFFQTtBQUNKO0FBQ0E7QUFDQTs7RUFDSSxRQUFRLENB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Q1IsUUFBUSxDQUFDLENBQUQsQ0FBUjtNQUNIO0lBQ0osQ0FWTSxDQUFQO0lBV0osSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQVQsQ0FBYyxLQUFkLENBQW9CLE9BQU8sUUFBUCxLQUFvQixRQUFwQixHQUErQixRQUFRLENBQUMsTUFBRCxDQUFSLEdBQW1CLEdBQW5CLEdBQXlCLFFBQVEsQ0FBQyxNQUFELENBQWhFLEdBQTJFLFFBQS9GLENBQWY7SUFDQSxPQUFPLFFBQVEsS0FBSyxJQUFiLEdBQW9CLElBQXBCLEdBQTJCLFFBQVEsQ0FBQyxRQUFULENBQWtCLElBQUksQ0FBQyxLQUFMLENBQVcsUUFBWCxDQUFsQixFQUF3QyxPQUF4QyxFQUFpRCxRQUFqRCxDQUFsQztFQUNILENBcEJEOztFQXNCQSxPQUFPLFFBQVA7QUFDSCxDQXJzS0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gQ29weXJpZ2h0IDIwMTMgRGFuaWVsIFdpcnR6IDxkY29kZUBkY29kZS5pbz5cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBsaWNlbnNlIHByb3RvYnVmLmpzIChjKSAyMDEzIERhbmllbCBXaXJ0eiA8ZGNvZGVAZGNvZGUuaW8+XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wXG4gKiBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kY29kZUlPL3Byb3RvYnVmLmpzIGZvciBkZXRhaWxzXG4gKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cbiAgICAvKiBBTUQgKi8gaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lW1wiYW1kXCJdKVxuICAgICAgICBkZWZpbmUoW1wiYnl0ZWJ1ZmZlclwiXSwgZmFjdG9yeSk7XG4gICAgLyogQ29tbW9uSlMgKi8gZWxzZSBpZiAodHlwZW9mIHJlcXVpcmUgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIG1vZHVsZSAmJiBtb2R1bGVbXCJleHBvcnRzXCJdKVxuICAgICAgICBtb2R1bGVbXCJleHBvcnRzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiYnl0ZWJ1ZmZlclwiKSwgdHJ1ZSk7XG4gICAgLyogR2xvYmFsICovIGVsc2VcbiAgICAgICAgKGdsb2JhbFtcImRjb2RlSU9cIl0gPSBnbG9iYWxbXCJkY29kZUlPXCJdIHx8IHt9KVtcIlByb3RvQnVmXCJdID0gZmFjdG9yeShnbG9iYWxbXCJkY29kZUlPXCJdW1wiQnl0ZUJ1ZmZlclwiXSk7XG5cbn0pKHRoaXMsIGZ1bmN0aW9uIChCeXRlQnVmZmVyLCBpc0NvbW1vbkpTKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgUHJvdG9CdWYgbmFtZXNwYWNlLlxuICAgICAqIEBleHBvcnRzIFByb3RvQnVmXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICB2YXIgUHJvdG9CdWYgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHshZnVuY3Rpb24obmV3OiBCeXRlQnVmZmVyLCAuLi5bKl0pfVxuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBQcm90b0J1Zi5CeXRlQnVmZmVyID0gQnl0ZUJ1ZmZlcjtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHs/ZnVuY3Rpb24obmV3OiBMb25nLCAuLi5bKl0pfVxuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBQcm90b0J1Zi5Mb25nID0gQnl0ZUJ1ZmZlci5Mb25nIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBQcm90b0J1Zi5qcyB2ZXJzaW9uLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQGNvbnN0XG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIFByb3RvQnVmLlZFUlNJT04gPSBcIjUuMC4zXCI7XG5cbiAgICAvKipcbiAgICAgKiBXaXJlIHR5cGVzLlxuICAgICAqIEB0eXBlIHtPYmplY3QuPHN0cmluZyxudW1iZXI+fVxuICAgICAqIEBjb25zdFxuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBQcm90b0J1Zi5XSVJFX1RZUEVTID0ge307XG5cbiAgICAvKipcbiAgICAgKiBWYXJpbnQgd2lyZSB0eXBlLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIFByb3RvQnVmLldJUkVfVFlQRVMuVkFSSU5UID0gMDtcblxuICAgIC8qKlxuICAgICAqIEZpeGVkIDY0IGJpdHMgd2lyZSB0eXBlLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQGNvbnN0XG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIFByb3RvQnVmLldJUkVfVFlQRVMuQklUUzY0ID0gMTtcblxuICAgIC8qKlxuICAgICAqIExlbmd0aCBkZWxpbWl0ZWQgd2lyZSB0eXBlLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQGNvbnN0XG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIFByb3RvQnVmLldJUkVfVFlQRVMuTERFTElNID0gMjtcblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IGdyb3VwIHdpcmUgdHlwZS5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBjb25zdFxuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBQcm90b0J1Zi5XSVJFX1RZUEVTLlNUQVJUR1JPVVAgPSAzO1xuXG4gICAgLyoqXG4gICAgICogRW5kIGdyb3VwIHdpcmUgdHlwZS5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBjb25zdFxuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBQcm90b0J1Zi5XSVJFX1RZUEVTLkVOREdST1VQID0gNDtcblxuICAgIC8qKlxuICAgICAqIEZpeGVkIDMyIGJpdHMgd2lyZSB0eXBlLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQGNvbnN0XG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIFByb3RvQnVmLldJUkVfVFlQRVMuQklUUzMyID0gNTtcblxuICAgIC8qKlxuICAgICAqIFBhY2thYmxlIHdpcmUgdHlwZXMuXG4gICAgICogQHR5cGUgeyFBcnJheS48bnVtYmVyPn1cbiAgICAgKiBAY29uc3RcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgUHJvdG9CdWYuUEFDS0FCTEVfV0lSRV9UWVBFUyA9IFtcbiAgICAgICAgUHJvdG9CdWYuV0lSRV9UWVBFUy5WQVJJTlQsXG4gICAgICAgIFByb3RvQnVmLldJUkVfVFlQRVMuQklUUzY0LFxuICAgICAgICBQcm90b0J1Zi5XSVJFX1RZUEVTLkJJVFMzMlxuICAgIF07XG5cbiAgICAvKipcbiAgICAgKiBUeXBlcy5cbiAgICAgKiBAZGljdFxuICAgICAqIEB0eXBlIHshT2JqZWN0LjxzdHJpbmcse25hbWU6IHN0cmluZywgd2lyZVR5cGU6IG51bWJlciwgZGVmYXVsdFZhbHVlOiAqfT59XG4gICAgICogQGNvbnN0XG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIFByb3RvQnVmLlRZUEVTID0ge1xuICAgICAgICAvLyBBY2NvcmRpbmcgdG8gdGhlIHByb3RvYnVmIHNwZWMuXG4gICAgICAgIFwiaW50MzJcIjoge1xuICAgICAgICAgICAgbmFtZTogXCJpbnQzMlwiLFxuICAgICAgICAgICAgd2lyZVR5cGU6IFByb3RvQnVmLldJUkVfVFlQRVMuVkFSSU5ULFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwidWludDMyXCI6IHtcbiAgICAgICAgICAgIG5hbWU6IFwidWludDMyXCIsXG4gICAgICAgICAgICB3aXJlVHlwZTogUHJvdG9CdWYuV0lSRV9UWVBFUy5WQVJJTlQsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzaW50MzJcIjoge1xuICAgICAgICAgICAgbmFtZTogXCJzaW50MzJcIixcbiAgICAgICAgICAgIHdpcmVUeXBlOiBQcm90b0J1Zi5XSVJFX1RZUEVTLlZBUklOVCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogMFxuICAgICAgICB9LFxuICAgICAgICBcImludDY0XCI6IHtcbiAgICAgICAgICAgIG5hbWU6IFwiaW50NjRcIixcbiAgICAgICAgICAgIHdpcmVUeXBlOiBQcm90b0J1Zi5XSVJFX1RZUEVTLlZBUklOVCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogUHJvdG9CdWYuTG9uZyA/IFByb3RvQnVmLkxvbmcuWkVSTyA6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuICAgICAgICBcInVpbnQ2NFwiOiB7XG4gICAgICAgICAgICBuYW1lOiBcInVpbnQ2NFwiLFxuICAgICAgICAgICAgd2lyZVR5cGU6IFByb3RvQnVmLldJUkVfVFlQRVMuVkFSSU5ULFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBQcm90b0J1Zi5Mb25nID8gUHJvdG9CdWYuTG9uZy5VWkVSTyA6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuICAgICAgICBcInNpbnQ2NFwiOiB7XG4gICAgICAgICAgICBuYW1lOiBcInNpbnQ2NFwiLFxuICAgICAgICAgICAgd2lyZVR5cGU6IFByb3RvQnVmLldJUkVfVFlQRVMuVkFSSU5ULFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBQcm90b0J1Zi5Mb25nID8gUHJvdG9CdWYuTG9uZy5aRVJPIDogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIFwiYm9vbFwiOiB7XG4gICAgICAgICAgICBuYW1lOiBcImJvb2xcIixcbiAgICAgICAgICAgIHdpcmVUeXBlOiBQcm90b0J1Zi5XSVJFX1RZUEVTLlZBUklOVCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgXCJkb3VibGVcIjoge1xuICAgICAgICAgICAgbmFtZTogXCJkb3VibGVcIixcbiAgICAgICAgICAgIHdpcmVUeXBlOiBQcm90b0J1Zi5XSVJFX1RZUEVTLkJJVFM2NCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogMFxuICAgICAgICB9LFxuICAgICAgICBcInN0cmluZ1wiOiB7XG4gICAgICAgICAgICBuYW1lOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgd2lyZVR5cGU6IFByb3RvQnVmLldJUkVfVFlQRVMuTERFTElNLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYnl0ZXNcIjoge1xuICAgICAgICAgICAgbmFtZTogXCJieXRlc1wiLFxuICAgICAgICAgICAgd2lyZVR5cGU6IFByb3RvQnVmLldJUkVfVFlQRVMuTERFTElNLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsIC8vIG92ZXJyaWRkZW4gaW4gdGhlIGNvZGUsIG11c3QgYmUgYSB1bmlxdWUgaW5zdGFuY2VcbiAgICAgICAgfSxcbiAgICAgICAgXCJmaXhlZDMyXCI6IHtcbiAgICAgICAgICAgIG5hbWU6IFwiZml4ZWQzMlwiLFxuICAgICAgICAgICAgd2lyZVR5cGU6IFByb3RvQnVmLldJUkVfVFlQRVMuQklUUzMyLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwic2ZpeGVkMzJcIjoge1xuICAgICAgICAgICAgbmFtZTogXCJzZml4ZWQzMlwiLFxuICAgICAgICAgICAgd2lyZVR5cGU6IFByb3RvQnVmLldJUkVfVFlQRVMuQklUUzMyLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZml4ZWQ2NFwiOiB7XG4gICAgICAgICAgICBuYW1lOiBcImZpeGVkNjRcIixcbiAgICAgICAgICAgIHdpcmVUeXBlOiBQcm90b0J1Zi5XSVJFX1RZUEVTLkJJVFM2NCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogUHJvdG9CdWYuTG9uZyA/IFByb3RvQnVmLkxvbmcuVVpFUk8gOiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZml4ZWQ2NFwiOiB7XG4gICAgICAgICAgICBuYW1lOiBcInNmaXhlZDY0XCIsXG4gICAgICAgICAgICB3aXJlVHlwZTogUHJvdG9CdWYuV0lSRV9UWVBFUy5CSVRTNjQsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFByb3RvQnVmLkxvbmcgPyBQcm90b0J1Zi5Mb25nLlpFUk8gOiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgICAgXCJmbG9hdFwiOiB7XG4gICAgICAgICAgICBuYW1lOiBcImZsb2F0XCIsXG4gICAgICAgICAgICB3aXJlVHlwZTogUHJvdG9CdWYuV0lSRV9UWVBFUy5CSVRTMzIsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJlbnVtXCI6IHtcbiAgICAgICAgICAgIG5hbWU6IFwiZW51bVwiLFxuICAgICAgICAgICAgd2lyZVR5cGU6IFByb3RvQnVmLldJUkVfVFlQRVMuVkFSSU5ULFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwibWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBuYW1lOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgIHdpcmVUeXBlOiBQcm90b0J1Zi5XSVJFX1RZUEVTLkxERUxJTSxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IHtcbiAgICAgICAgICAgIG5hbWU6IFwiZ3JvdXBcIixcbiAgICAgICAgICAgIHdpcmVUeXBlOiBQcm90b0J1Zi5XSVJFX1RZUEVTLlNUQVJUR1JPVVAsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGxcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBWYWxpZCBtYXAga2V5IHR5cGVzLlxuICAgICAqIEB0eXBlIHshQXJyYXkuPCFPYmplY3QuPHN0cmluZyx7bmFtZTogc3RyaW5nLCB3aXJlVHlwZTogbnVtYmVyLCBkZWZhdWx0VmFsdWU6ICp9Pj59XG4gICAgICogQGNvbnN0XG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIFByb3RvQnVmLk1BUF9LRVlfVFlQRVMgPSBbXG4gICAgICAgIFByb3RvQnVmLlRZUEVTW1wiaW50MzJcIl0sXG4gICAgICAgIFByb3RvQnVmLlRZUEVTW1wic2ludDMyXCJdLFxuICAgICAgICBQcm90b0J1Zi5UWVBFU1tcInNmaXhlZDMyXCJdLFxuICAgICAgICBQcm90b0J1Zi5UWVBFU1tcInVpbnQzMlwiXSxcbiAgICAgICAgUHJvdG9CdWYuVFlQRVNbXCJmaXhlZDMyXCJdLFxuICAgICAgICBQcm90b0J1Zi5UWVBFU1tcImludDY0XCJdLFxuICAgICAgICBQcm90b0J1Zi5UWVBFU1tcInNpbnQ2NFwiXSxcbiAgICAgICAgUHJvdG9CdWYuVFlQRVNbXCJzZml4ZWQ2NFwiXSxcbiAgICAgICAgUHJvdG9CdWYuVFlQRVNbXCJ1aW50NjRcIl0sXG4gICAgICAgIFByb3RvQnVmLlRZUEVTW1wiZml4ZWQ2NFwiXSxcbiAgICAgICAgUHJvdG9CdWYuVFlQRVNbXCJib29sXCJdLFxuICAgICAgICBQcm90b0J1Zi5UWVBFU1tcInN0cmluZ1wiXSxcbiAgICAgICAgUHJvdG9CdWYuVFlQRVNbXCJieXRlc1wiXVxuICAgIF07XG5cbiAgICAvKipcbiAgICAgKiBNaW5pbXVtIGZpZWxkIGlkLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQGNvbnN0XG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIFByb3RvQnVmLklEX01JTiA9IDE7XG5cbiAgICAvKipcbiAgICAgKiBNYXhpbXVtIGZpZWxkIGlkLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQGNvbnN0XG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIFByb3RvQnVmLklEX01BWCA9IDB4MUZGRkZGRkY7XG5cbiAgICAvKipcbiAgICAgKiBJZiBzZXQgdG8gYHRydWVgLCBmaWVsZCBuYW1lcyB3aWxsIGJlIGNvbnZlcnRlZCBmcm9tIHVuZGVyc2NvcmUgbm90YXRpb24gdG8gY2FtZWwgY2FzZS4gRGVmYXVsdHMgdG8gYGZhbHNlYC5cbiAgICAgKiAgTXVzdCBiZSBzZXQgcHJpb3IgdG8gcGFyc2luZy5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgUHJvdG9CdWYuY29udmVydEZpZWxkc1RvQ2FtZWxDYXNlID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBCeSBkZWZhdWx0LCBtZXNzYWdlcyBhcmUgcG9wdWxhdGVkIHdpdGggKHNldFgsIHNldF94KSBhY2Nlc3NvcnMgZm9yIGVhY2ggZmllbGQuIFRoaXMgY2FuIGJlIGRpc2FibGVkIGJ5XG4gICAgICogIHNldHRpbmcgdGhpcyB0byBgZmFsc2VgIHByaW9yIHRvIGJ1aWxkaW5nIG1lc3NhZ2VzLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBQcm90b0J1Zi5wb3B1bGF0ZUFjY2Vzc29ycyA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBCeSBkZWZhdWx0LCBtZXNzYWdlcyBhcmUgcG9wdWxhdGVkIHdpdGggZGVmYXVsdCB2YWx1ZXMgaWYgYSBmaWVsZCBpcyBub3QgcHJlc2VudCBvbiB0aGUgd2lyZS4gVG8gZGlzYWJsZVxuICAgICAqICB0aGlzIGJlaGF2aW9yLCBzZXQgdGhpcyBzZXR0aW5nIHRvIGBmYWxzZWAuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIFByb3RvQnVmLnBvcHVsYXRlRGVmYXVsdHMgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogQGFsaWFzIFByb3RvQnVmLlV0aWxcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgUHJvdG9CdWYuVXRpbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm90b0J1ZiB1dGlsaXRpZXMuXG4gICAgICAgICAqIEBleHBvcnRzIFByb3RvQnVmLlV0aWxcbiAgICAgICAgICogQG5hbWVzcGFjZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIFV0aWwgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRmxhZyBpZiBydW5uaW5nIGluIG5vZGUgb3Igbm90LlxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICogQGNvbnN0XG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIFV0aWwuSVNfTk9ERSA9ICEhKFxuICAgICAgICAgICAgdHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmIHByb2Nlc3MgKyAnJyA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nICYmICFwcm9jZXNzWydicm93c2VyJ11cbiAgICAgICAgKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29uc3RydWN0cyBhIFhNTEh0dHBSZXF1ZXN0IG9iamVjdC5cbiAgICAgICAgICogQHJldHVybiB7WE1MSHR0cFJlcXVlc3R9XG4gICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiBYTUxIdHRwUmVxdWVzdCBpcyBub3Qgc3VwcG9ydGVkXG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIFV0aWwuWEhSID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gTm8gZGVwZW5kZW5jaWVzIHBsZWFzZSwgcmVmOiBodHRwOi8vd3d3LnF1aXJrc21vZGUub3JnL2pzL3htbGh0dHAuaHRtbFxuICAgICAgICAgICAgdmFyIFhNTEh0dHBGYWN0b3JpZXMgPSBbXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0KCkgfSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdChcIk1zeG1sMi5YTUxIVFRQXCIpIH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoXCJNc3htbDMuWE1MSFRUUFwiKSB9LFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIikgfVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7P1hNTEh0dHBSZXF1ZXN0fSAqL1xuICAgICAgICAgICAgdmFyIHhociA9IG51bGw7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IFhNTEh0dHBGYWN0b3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0cnkgeyB4aHIgPSBYTUxIdHRwRmFjdG9yaWVzW2ldKCk7IH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkgeyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF4aHIpXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJYTUxIdHRwUmVxdWVzdCBpcyBub3Qgc3VwcG9ydGVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHhocjtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRmV0Y2hlcyBhIHJlc291cmNlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBSZXNvdXJjZSBwYXRoXG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oP3N0cmluZyk9fSBjYWxsYmFjayBDYWxsYmFjayByZWNlaXZpbmcgdGhlIHJlc291cmNlJ3MgY29udGVudHMuIElmIG9taXR0ZWQgdGhlIHJlc291cmNlIHdpbGxcbiAgICAgICAgICogICBiZSBmZXRjaGVkIHN5bmNocm9ub3VzbHkuIElmIHRoZSByZXF1ZXN0IGZhaWxlZCwgY29udGVudHMgd2lsbCBiZSBudWxsLlxuICAgICAgICAgKiBAcmV0dXJuIHs/c3RyaW5nfHVuZGVmaW5lZH0gUmVzb3VyY2UgY29udGVudHMgaWYgY2FsbGJhY2sgaXMgb21pdHRlZCAobnVsbCBpZiB0aGUgcmVxdWVzdCBmYWlsZWQpLCBlbHNlIHVuZGVmaW5lZC5cbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgVXRpbC5mZXRjaCA9IGZ1bmN0aW9uIChwYXRoLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayAhPSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKGNjKSB7XG4gICAgICAgICAgICAgICAgYzJmLnJlcy5sb2FkKCdyZXNvdXJjZXMnLCBwYXRoLCBjYy5UZXh0QXNzZXQsIGZ1bmN0aW9uIChlcnIsIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmV0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlcnIpIHJldCA9IHJlc3VsdC50ZXh0O1xuICAgICAgICAgICAgICAgICAgICBjMmYucmVzLnJlbGVhc2UocGF0aCwgY2MuVGV4dEFzc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVXRpbC5JU19OT0RFKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZzID0gcmVxdWlyZShcImZzXCIpO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBmcy5yZWFkRmlsZShwYXRoLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKFwiXCIgKyBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnMucmVhZEZpbGVTeW5jKHBhdGgpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgeGhyID0gVXRpbC5YSFIoKTtcbiAgICAgICAgICAgICAgICB4aHIub3BlbignR0VUJywgcGF0aCwgY2FsbGJhY2sgPyB0cnVlIDogZmFsc2UpO1xuICAgICAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdVc2VyLUFnZW50JywgJ1hNTEhUVFAvMS4wJyk7XG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICd0ZXh0L3BsYWluJyk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB4aHIub3ZlcnJpZGVNaW1lVHlwZSA9PT0gJ2Z1bmN0aW9uJykgeGhyLm92ZXJyaWRlTWltZVR5cGUoJ3RleHQvcGxhaW4nKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSAhPSA0KSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoLyogcmVtb3RlICovIHhoci5zdGF0dXMgPT0gMjAwIHx8IC8qIGxvY2FsICovICh4aHIuc3RhdHVzID09IDAgJiYgdHlwZW9mIHhoci5yZXNwb25zZVRleHQgPT09ICdzdHJpbmcnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIHhoci5zZW5kKG51bGwpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHhoci5zZW5kKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoLyogcmVtb3RlICovIHhoci5zdGF0dXMgPT0gMjAwIHx8IC8qIGxvY2FsICovICh4aHIuc3RhdHVzID09IDAgJiYgdHlwZW9mIHhoci5yZXNwb25zZVRleHQgPT09ICdzdHJpbmcnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnZlcnRzIGEgc3RyaW5nIHRvIGNhbWVsIGNhc2UuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICAgICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgVXRpbC50b0NhbWVsQ2FzZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXyhbYS16QS1aXSkvZywgZnVuY3Rpb24gKCQwLCAkMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAkMS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIFV0aWw7XG4gICAgfSkoKTtcblxuICAgIC8qKlxuICAgICAqIExhbmd1YWdlIGV4cHJlc3Npb25zLlxuICAgICAqIEB0eXBlIHshT2JqZWN0LjxzdHJpbmcsIVJlZ0V4cD59XG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIFByb3RvQnVmLkxhbmcgPSB7XG5cbiAgICAgICAgLy8gQ2hhcmFjdGVycyBhbHdheXMgZW5kaW5nIGEgc3RhdGVtZW50XG4gICAgICAgIERFTElNOiAvW1xcc1xce1xcfT07OlxcW1xcXSwnXCJcXChcXCk8Pl0vZyxcblxuICAgICAgICAvLyBGaWVsZCBydWxlc1xuICAgICAgICBSVUxFOiAvXig/OnJlcXVpcmVkfG9wdGlvbmFsfHJlcGVhdGVkfG1hcCkkLyxcblxuICAgICAgICAvLyBGaWVsZCB0eXBlc1xuICAgICAgICBUWVBFOiAvXig/OmRvdWJsZXxmbG9hdHxpbnQzMnx1aW50MzJ8c2ludDMyfGludDY0fHVpbnQ2NHxzaW50NjR8Zml4ZWQzMnxzZml4ZWQzMnxmaXhlZDY0fHNmaXhlZDY0fGJvb2x8c3RyaW5nfGJ5dGVzKSQvLFxuXG4gICAgICAgIC8vIE5hbWVzXG4gICAgICAgIE5BTUU6IC9eW2EtekEtWl9dW2EtekEtWl8wLTldKiQvLFxuXG4gICAgICAgIC8vIFR5cGUgZGVmaW5pdGlvbnNcbiAgICAgICAgVFlQRURFRjogL15bYS16QS1aXVthLXpBLVpfMC05XSokLyxcblxuICAgICAgICAvLyBUeXBlIHJlZmVyZW5jZXNcbiAgICAgICAgVFlQRVJFRjogL14oPzpcXC4/W2EtekEtWl9dW2EtekEtWl8wLTldKikoPzpcXC5bYS16QS1aX11bYS16QS1aXzAtOV0qKSokLyxcblxuICAgICAgICAvLyBGdWxseSBxdWFsaWZpZWQgdHlwZSByZWZlcmVuY2VzXG4gICAgICAgIEZRVFlQRVJFRjogL14oPzpcXC5bYS16QS1aX11bYS16QS1aXzAtOV0qKSskLyxcblxuICAgICAgICAvLyBBbGwgbnVtYmVyc1xuICAgICAgICBOVU1CRVI6IC9eLT8oPzpbMS05XVswLTldKnwwfDBbeFhdWzAtOWEtZkEtRl0rfDBbMC03XSt8KFswLTldKihcXC5bMC05XSopPyhbRWVdWystXT9bMC05XSspPyl8aW5mfG5hbikkLyxcblxuICAgICAgICAvLyBEZWNpbWFsIG51bWJlcnNcbiAgICAgICAgTlVNQkVSX0RFQzogL14oPzpbMS05XVswLTldKnwwKSQvLFxuXG4gICAgICAgIC8vIEhleGFkZWNpbWFsIG51bWJlcnNcbiAgICAgICAgTlVNQkVSX0hFWDogL14wW3hYXVswLTlhLWZBLUZdKyQvLFxuXG4gICAgICAgIC8vIE9jdGFsIG51bWJlcnNcbiAgICAgICAgTlVNQkVSX09DVDogL14wWzAtN10rJC8sXG5cbiAgICAgICAgLy8gRmxvYXRpbmcgcG9pbnQgbnVtYmVyc1xuICAgICAgICBOVU1CRVJfRkxUOiAvXihbMC05XSooXFwuWzAtOV0qKT8oW0VlXVsrLV0/WzAtOV0rKT98aW5mfG5hbikkLyxcblxuICAgICAgICAvLyBCb29sZWFuc1xuICAgICAgICBCT09MOiAvXig/OnRydWV8ZmFsc2UpJC9pLFxuXG4gICAgICAgIC8vIElkIG51bWJlcnNcbiAgICAgICAgSUQ6IC9eKD86WzEtOV1bMC05XSp8MHwwW3hYXVswLTlhLWZBLUZdK3wwWzAtN10rKSQvLFxuXG4gICAgICAgIC8vIE5lZ2F0aXZlIGlkIG51bWJlcnMgKGVudW0gdmFsdWVzKVxuICAgICAgICBORUdJRDogL15cXC0/KD86WzEtOV1bMC05XSp8MHwwW3hYXVswLTlhLWZBLUZdK3wwWzAtN10rKSQvLFxuXG4gICAgICAgIC8vIFdoaXRlc3BhY2VzXG4gICAgICAgIFdISVRFU1BBQ0U6IC9cXHMvLFxuXG4gICAgICAgIC8vIEFsbCBzdHJpbmdzXG4gICAgICAgIFNUUklORzogLyg/OlwiKFteXCJcXFxcXSooPzpcXFxcLlteXCJcXFxcXSopKilcIil8KD86JyhbXidcXFxcXSooPzpcXFxcLlteJ1xcXFxdKikqKScpL2csXG5cbiAgICAgICAgLy8gRG91YmxlIHF1b3RlZCBzdHJpbmdzXG4gICAgICAgIFNUUklOR19EUTogLyg/OlwiKFteXCJcXFxcXSooPzpcXFxcLlteXCJcXFxcXSopKilcIikvZyxcblxuICAgICAgICAvLyBTaW5nbGUgcXVvdGVkIHN0cmluZ3NcbiAgICAgICAgU1RSSU5HX1NROiAvKD86JyhbXidcXFxcXSooPzpcXFxcLlteJ1xcXFxdKikqKScpL2dcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQGFsaWFzIFByb3RvQnVmLkRvdFByb3RvXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIFByb3RvQnVmLkRvdFByb3RvID0gKGZ1bmN0aW9uIChQcm90b0J1ZiwgTGFuZykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVXRpbGl0aWVzIHRvIHBhcnNlIC5wcm90byBmaWxlcy5cbiAgICAgICAgICogQGV4cG9ydHMgUHJvdG9CdWYuRG90UHJvdG9cbiAgICAgICAgICogQG5hbWVzcGFjZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIERvdFByb3RvID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgVG9rZW5pemVyLlxuICAgICAgICAgKiBAZXhwb3J0cyBQcm90b0J1Zi5Eb3RQcm90by5Ub2tlbml6ZXJcbiAgICAgICAgICogQGNsYXNzIHByb3RvdHlwZSB0b2tlbml6ZXJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3RvIFByb3RvIHRvIHRva2VuaXplXG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIFRva2VuaXplciA9IGZ1bmN0aW9uIChwcm90bykge1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFNvdXJjZSB0byBwYXJzZS5cbiAgICAgICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuc291cmNlID0gcHJvdG8gKyBcIlwiO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEN1cnJlbnQgaW5kZXguXG4gICAgICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gMDtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDdXJyZW50IGxpbmUuXG4gICAgICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmxpbmUgPSAxO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRva2VuIHN0YWNrLlxuICAgICAgICAgICAgICogQHR5cGUgeyFBcnJheS48c3RyaW5nPn1cbiAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5zdGFjayA9IFtdO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIE9wZW5pbmcgY2hhcmFjdGVyIG9mIHRoZSBjdXJyZW50IHN0cmluZyByZWFkLCBpZiBhbnkuXG4gICAgICAgICAgICAgKiBAdHlwZSB7P3N0cmluZ31cbiAgICAgICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuX3N0cmluZ09wZW4gPSBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAYWxpYXMgUHJvdG9CdWYuRG90UHJvdG8uVG9rZW5pemVyLnByb3RvdHlwZVxuICAgICAgICAgKiBAaW5uZXJcbiAgICAgICAgICovXG4gICAgICAgIHZhciBUb2tlbml6ZXJQcm90b3R5cGUgPSBUb2tlbml6ZXIucHJvdG90eXBlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWFkcyBhIHN0cmluZyBiZWdpbm5pbmcgYXQgdGhlIGN1cnJlbnQgaW5kZXguXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIFRva2VuaXplclByb3RvdHlwZS5fcmVhZFN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZSA9IHRoaXMuX3N0cmluZ09wZW4gPT09ICdcIidcbiAgICAgICAgICAgICAgICA/IExhbmcuU1RSSU5HX0RRXG4gICAgICAgICAgICAgICAgOiBMYW5nLlNUUklOR19TUTtcbiAgICAgICAgICAgIHJlLmxhc3RJbmRleCA9IHRoaXMuaW5kZXggLSAxOyAvLyBJbmNsdWRlIHRoZSBvcGVuIHF1b3RlXG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSByZS5leGVjKHRoaXMuc291cmNlKTtcbiAgICAgICAgICAgIGlmICghbWF0Y2gpXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJ1bnRlcm1pbmF0ZWQgc3RyaW5nXCIpO1xuICAgICAgICAgICAgdGhpcy5pbmRleCA9IHJlLmxhc3RJbmRleDtcbiAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaCh0aGlzLl9zdHJpbmdPcGVuKTtcbiAgICAgICAgICAgIHRoaXMuX3N0cmluZ09wZW4gPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoWzFdO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSBuZXh0IHRva2VuIGFuZCBhZHZhbmNlcyBieSBvbmUuXG4gICAgICAgICAqIEByZXR1cm4gez9zdHJpbmd9IFRva2VuIG9yIGBudWxsYCBvbiBFT0ZcbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgVG9rZW5pemVyUHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGFjay5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YWNrLnNoaWZ0KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5pbmRleCA+PSB0aGlzLnNvdXJjZS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3RyaW5nT3BlbiAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVhZFN0cmluZygpO1xuXG4gICAgICAgICAgICB2YXIgcmVwZWF0LFxuICAgICAgICAgICAgICAgIHByZXYsXG4gICAgICAgICAgICAgICAgbmV4dDtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIC8vIFN0cmlwIHdoaXRlIHNwYWNlc1xuICAgICAgICAgICAgICAgIHdoaWxlIChMYW5nLldISVRFU1BBQ0UudGVzdChuZXh0ID0gdGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuaW5kZXgpKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dCA9PT0gJ1xcbicpXG4gICAgICAgICAgICAgICAgICAgICAgICArK3RoaXMubGluZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCsrdGhpcy5pbmRleCA9PT0gdGhpcy5zb3VyY2UubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU3RyaXAgY29tbWVudHNcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuaW5kZXgpID09PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgICAgKyt0aGlzLmluZGV4O1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuaW5kZXgpID09PSAnLycpIHsgLy8gTGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuc291cmNlLmNoYXJBdCgrK3RoaXMuaW5kZXgpICE9PSAnXFxuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbmRleCA9PSB0aGlzLnNvdXJjZS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgKyt0aGlzLmluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgKyt0aGlzLmxpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBlYXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKChuZXh0ID0gdGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuaW5kZXgpKSA9PT0gJyonKSB7IC8qIEJsb2NrICovXG4gICAgICAgICAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQgPT09ICdcXG4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArK3RoaXMubGluZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKyt0aGlzLmluZGV4ID09PSB0aGlzLnNvdXJjZS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXYgPSBuZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSB0aGlzLnNvdXJjZS5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IHdoaWxlIChwcmV2ICE9PSAnKicgfHwgbmV4dCAhPT0gJy8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICsrdGhpcy5pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcvJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChyZXBlYXQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbmRleCA9PT0gdGhpcy5zb3VyY2UubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICAvLyBSZWFkIHRoZSBuZXh0IHRva2VuXG4gICAgICAgICAgICB2YXIgZW5kID0gdGhpcy5pbmRleDtcbiAgICAgICAgICAgIExhbmcuREVMSU0ubGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgIHZhciBkZWxpbSA9IExhbmcuREVMSU0udGVzdCh0aGlzLnNvdXJjZS5jaGFyQXQoZW5kKyspKTtcbiAgICAgICAgICAgIGlmICghZGVsaW0pXG4gICAgICAgICAgICAgICAgd2hpbGUgKGVuZCA8IHRoaXMuc291cmNlLmxlbmd0aCAmJiAhTGFuZy5ERUxJTS50ZXN0KHRoaXMuc291cmNlLmNoYXJBdChlbmQpKSlcbiAgICAgICAgICAgICAgICAgICAgKytlbmQ7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLnNvdXJjZS5zdWJzdHJpbmcodGhpcy5pbmRleCwgdGhpcy5pbmRleCA9IGVuZCk7XG4gICAgICAgICAgICBpZiAodG9rZW4gPT09ICdcIicgfHwgdG9rZW4gPT09IFwiJ1wiKVxuICAgICAgICAgICAgICAgIHRoaXMuX3N0cmluZ09wZW4gPSB0b2tlbjtcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUGVla3MgZm9yIHRoZSBuZXh0IHRva2VuLlxuICAgICAgICAgKiBAcmV0dXJuIHs/c3RyaW5nfSBUb2tlbiBvciBgbnVsbGAgb24gRU9GXG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIFRva2VuaXplclByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuID09PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2tbMF07XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNraXBzIGEgc3BlY2lmaWMgdG9rZW4gYW5kIHRocm93cyBpZiBpdCBkaWZmZXJzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwZWN0ZWQgRXhwZWN0ZWQgdG9rZW5cbiAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBhY3R1YWwgdG9rZW4gZGlmZmVyc1xuICAgICAgICAgKi9cbiAgICAgICAgVG9rZW5pemVyUHJvdG90eXBlLnNraXAgPSBmdW5jdGlvbiAoZXhwZWN0ZWQpIHtcbiAgICAgICAgICAgIHZhciBhY3R1YWwgPSB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIGlmIChhY3R1YWwgIT09IGV4cGVjdGVkKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiaWxsZWdhbCAnXCIgKyBhY3R1YWwgKyBcIicsICdcIiArIGV4cGVjdGVkICsgXCInIGV4cGVjdGVkXCIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPbWl0cyBhbiBvcHRpb25hbCB0b2tlbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGV4cGVjdGVkIEV4cGVjdGVkIG9wdGlvbmFsIHRva2VuXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIHRva2VuIGV4aXN0c1xuICAgICAgICAgKi9cbiAgICAgICAgVG9rZW5pemVyUHJvdG90eXBlLm9taXQgPSBmdW5jdGlvbiAoZXhwZWN0ZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gZXhwZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIG9iamVjdC5cbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBTdHJpbmcgcmVwcmVzZW50YXRpb24gYXMgb2YgXCJUb2tlbml6ZXIoaW5kZXgvbGVuZ3RoKVwiXG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIFRva2VuaXplclByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlRva2VuaXplciAoXCIgKyB0aGlzLmluZGV4ICsgXCIvXCIgKyB0aGlzLnNvdXJjZS5sZW5ndGggKyBcIiBhdCBsaW5lIFwiICsgdGhpcy5saW5lICsgXCIpXCI7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhbGlhcyBQcm90b0J1Zi5Eb3RQcm90by5Ub2tlbml6ZXJcbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgRG90UHJvdG8uVG9rZW5pemVyID0gVG9rZW5pemVyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IFBhcnNlci5cbiAgICAgICAgICogQGV4cG9ydHMgUHJvdG9CdWYuRG90UHJvdG8uUGFyc2VyXG4gICAgICAgICAqIEBjbGFzcyBwcm90b3R5cGUgcGFyc2VyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgU291cmNlXG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIFBhcnNlciA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUb2tlbml6ZXIuXG4gICAgICAgICAgICAgKiBAdHlwZSB7IVByb3RvQnVmLkRvdFByb3RvLlRva2VuaXplcn1cbiAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy50biA9IG5ldyBUb2tlbml6ZXIoc291cmNlKTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBXaGV0aGVyIHBhcnNpbmcgcHJvdG8zIG9yIG5vdC5cbiAgICAgICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnByb3RvMyA9IGZhbHNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAYWxpYXMgUHJvdG9CdWYuRG90UHJvdG8uUGFyc2VyLnByb3RvdHlwZVxuICAgICAgICAgKiBAaW5uZXJcbiAgICAgICAgICovXG4gICAgICAgIHZhciBQYXJzZXJQcm90b3R5cGUgPSBQYXJzZXIucHJvdG90eXBlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYXJzZXMgdGhlIHNvdXJjZS5cbiAgICAgICAgICogQHJldHVybnMgeyFPYmplY3R9XG4gICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgc291cmNlIGNhbm5vdCBiZSBwYXJzZWRcbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgUGFyc2VyUHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRvcExldmVsID0ge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIltST09UXVwiLCAvLyB0ZW1wb3JhcnlcbiAgICAgICAgICAgICAgICBcInBhY2thZ2VcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm1lc3NhZ2VzXCI6IFtdLFxuICAgICAgICAgICAgICAgIFwiZW51bXNcIjogW10sXG4gICAgICAgICAgICAgICAgXCJpbXBvcnRzXCI6IFtdLFxuICAgICAgICAgICAgICAgIFwib3B0aW9uc1wiOiB7fSxcbiAgICAgICAgICAgICAgICBcInNlcnZpY2VzXCI6IFtdXG4gICAgICAgICAgICAgICAgLy8gXCJzeW50YXhcIjogdW5kZWZpbmVkXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHRva2VuLFxuICAgICAgICAgICAgICAgIGhlYWQgPSB0cnVlLFxuICAgICAgICAgICAgICAgIHdlYWs7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHdoaWxlICh0b2tlbiA9IHRoaXMudG4ubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BhY2thZ2UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGVhZCB8fCB0b3BMZXZlbFtcInBhY2thZ2VcIl0gIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwidW5leHBlY3RlZCAncGFja2FnZSdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLnRuLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIUxhbmcuVFlQRVJFRi50ZXN0KHRva2VuKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJpbGxlZ2FsIHBhY2thZ2UgbmFtZTogXCIgKyB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50bi5za2lwKFwiO1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3BMZXZlbFtcInBhY2thZ2VcIl0gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2ltcG9ydCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoZWFkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcInVuZXhwZWN0ZWQgJ2ltcG9ydCdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLnRuLnBlZWsoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4gPT09IFwicHVibGljXCIgfHwgKHdlYWsgPSB0b2tlbiA9PT0gXCJ3ZWFrXCIpKSAvLyB0b2tlbiBpZ25vcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG4ubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5fcmVhZFN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG4uc2tpcChcIjtcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF3ZWFrKSAvLyBpbXBvcnQgaWdub3JlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3BMZXZlbFtcImltcG9ydHNcIl0ucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzeW50YXgnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGVhZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJ1bmV4cGVjdGVkICdzeW50YXgnXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG4uc2tpcChcIj1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh0b3BMZXZlbFtcInN5bnRheFwiXSA9IHRoaXMuX3JlYWRTdHJpbmcoKSkgPT09IFwicHJvdG8zXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvdG8zID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRuLnNraXAoXCI7XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbWVzc2FnZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyc2VNZXNzYWdlKHRvcExldmVsLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlbnVtJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJzZUVudW0odG9wTGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ29wdGlvbic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyc2VPcHRpb24odG9wTGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2VydmljZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyc2VTZXJ2aWNlKHRvcExldmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2V4dGVuZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyc2VFeHRlbmQodG9wTGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcInVuZXhwZWN0ZWQgJ1wiICsgdG9rZW4gKyBcIidcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZS5tZXNzYWdlID0gXCJQYXJzZSBlcnJvciBhdCBsaW5lIFwiICsgdGhpcy50bi5saW5lICsgXCI6IFwiICsgZS5tZXNzYWdlO1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWxldGUgdG9wTGV2ZWxbXCJuYW1lXCJdO1xuICAgICAgICAgICAgcmV0dXJuIHRvcExldmVsO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYXJzZXMgdGhlIHNwZWNpZmllZCBzb3VyY2UuXG4gICAgICAgICAqIEByZXR1cm5zIHshT2JqZWN0fVxuICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHNvdXJjZSBjYW5ub3QgYmUgcGFyc2VkXG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIFBhcnNlci5wYXJzZSA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUGFyc2VyKHNvdXJjZSkucGFyc2UoKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyAtLS0tLSBDb252ZXJzaW9uIC0tLS0tLVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb252ZXJ0cyBhIG51bWVyaWNhbCBzdHJpbmcgdG8gYW4gaWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBtYXlCZU5lZ2F0aXZlXG4gICAgICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICAgICAqIEBpbm5lclxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gbWtJZCh2YWx1ZSwgbWF5QmVOZWdhdGl2ZSkge1xuICAgICAgICAgICAgdmFyIGlkID0gLTEsXG4gICAgICAgICAgICAgICAgc2lnbiA9IDE7XG4gICAgICAgICAgICBpZiAodmFsdWUuY2hhckF0KDApID09ICctJykge1xuICAgICAgICAgICAgICAgIHNpZ24gPSAtMTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChMYW5nLk5VTUJFUl9ERUMudGVzdCh2YWx1ZSkpXG4gICAgICAgICAgICAgICAgaWQgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgICAgICAgICBlbHNlIGlmIChMYW5nLk5VTUJFUl9IRVgudGVzdCh2YWx1ZSkpXG4gICAgICAgICAgICAgICAgaWQgPSBwYXJzZUludCh2YWx1ZS5zdWJzdHJpbmcoMiksIDE2KTtcbiAgICAgICAgICAgIGVsc2UgaWYgKExhbmcuTlVNQkVSX09DVC50ZXN0KHZhbHVlKSlcbiAgICAgICAgICAgICAgICBpZCA9IHBhcnNlSW50KHZhbHVlLnN1YnN0cmluZygxKSwgOCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJpbGxlZ2FsIGlkIHZhbHVlOiBcIiArIChzaWduIDwgMCA/ICctJyA6ICcnKSArIHZhbHVlKTtcbiAgICAgICAgICAgIGlkID0gKHNpZ24gKiBpZCkgfCAwOyAvLyBGb3JjZSB0byAzMmJpdFxuICAgICAgICAgICAgaWYgKCFtYXlCZU5lZ2F0aXZlICYmIGlkIDwgMClcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcImlsbGVnYWwgaWQgdmFsdWU6IFwiICsgKHNpZ24gPCAwID8gJy0nIDogJycpICsgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnZlcnRzIGEgbnVtZXJpY2FsIHN0cmluZyB0byBhIG51bWJlci5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbFxuICAgICAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAgICAgKiBAaW5uZXJcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIG1rTnVtYmVyKHZhbCkge1xuICAgICAgICAgICAgdmFyIHNpZ24gPSAxO1xuICAgICAgICAgICAgaWYgKHZhbC5jaGFyQXQoMCkgPT0gJy0nKSB7XG4gICAgICAgICAgICAgICAgc2lnbiA9IC0xO1xuICAgICAgICAgICAgICAgIHZhbCA9IHZhbC5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoTGFuZy5OVU1CRVJfREVDLnRlc3QodmFsKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gc2lnbiAqIHBhcnNlSW50KHZhbCwgMTApO1xuICAgICAgICAgICAgZWxzZSBpZiAoTGFuZy5OVU1CRVJfSEVYLnRlc3QodmFsKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gc2lnbiAqIHBhcnNlSW50KHZhbC5zdWJzdHJpbmcoMiksIDE2KTtcbiAgICAgICAgICAgIGVsc2UgaWYgKExhbmcuTlVNQkVSX09DVC50ZXN0KHZhbCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNpZ24gKiBwYXJzZUludCh2YWwuc3Vic3RyaW5nKDEpLCA4KTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbCA9PT0gJ2luZicpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNpZ24gKiBJbmZpbml0eTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbCA9PT0gJ25hbicpXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgICAgIGVsc2UgaWYgKExhbmcuTlVNQkVSX0ZMVC50ZXN0KHZhbCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNpZ24gKiBwYXJzZUZsb2F0KHZhbCk7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcImlsbGVnYWwgbnVtYmVyIHZhbHVlOiBcIiArIChzaWduIDwgMCA/ICctJyA6ICcnKSArIHZhbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLSBSZWFkaW5nIC0tLS0tLVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWFkcyBhIHN0cmluZy5cbiAgICAgICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIFBhcnNlclByb3RvdHlwZS5fcmVhZFN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IFwiXCIsXG4gICAgICAgICAgICAgICAgdG9rZW4sXG4gICAgICAgICAgICAgICAgZGVsaW07XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgZGVsaW0gPSB0aGlzLnRuLm5leHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoZGVsaW0gIT09IFwiJ1wiICYmIGRlbGltICE9PSAnXCInKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcImlsbGVnYWwgc3RyaW5nIGRlbGltaXRlcjogXCIgKyBkZWxpbSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgKz0gdGhpcy50bi5uZXh0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy50bi5za2lwKGRlbGltKTtcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMudG4ucGVlaygpO1xuICAgICAgICAgICAgfSB3aGlsZSAodG9rZW4gPT09ICdcIicgfHwgdG9rZW4gPT09ICdcIicpOyAvLyBtdWx0aSBsaW5lP1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWFkcyBhIHZhbHVlLlxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBtYXlCZVR5cGVSZWZcbiAgICAgICAgICogQHJldHVybnMge251bWJlcnxib29sZWFufHN0cmluZ31cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIFBhcnNlclByb3RvdHlwZS5fcmVhZFZhbHVlID0gZnVuY3Rpb24gKG1heUJlVHlwZVJlZikge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy50bi5wZWVrKCksXG4gICAgICAgICAgICAgICAgdmFsdWU7XG4gICAgICAgICAgICBpZiAodG9rZW4gPT09ICdcIicgfHwgdG9rZW4gPT09IFwiJ1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnRuLm5leHQoKTtcbiAgICAgICAgICAgIGlmIChMYW5nLk5VTUJFUi50ZXN0KHRva2VuKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbWtOdW1iZXIodG9rZW4pO1xuICAgICAgICAgICAgaWYgKExhbmcuQk9PTC50ZXN0KHRva2VuKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRva2VuLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJyk7XG4gICAgICAgICAgICBpZiAobWF5QmVUeXBlUmVmICYmIExhbmcuVFlQRVJFRi50ZXN0KHRva2VuKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcImlsbGVnYWwgdmFsdWU6IFwiICsgdG9rZW4pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gLS0tLS0gUGFyc2luZyBjb25zdHJ1Y3RzIC0tLS0tXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhcnNlcyBhIG5hbWVzcGFjZSBvcHRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7IU9iamVjdH0gcGFyZW50IFBhcmVudCBkZWZpbml0aW9uXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IGlzTGlzdFxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgUGFyc2VyUHJvdG90eXBlLl9wYXJzZU9wdGlvbiA9IGZ1bmN0aW9uIChwYXJlbnQsIGlzTGlzdCkge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy50bi5uZXh0KCksXG4gICAgICAgICAgICAgICAgY3VzdG9tID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodG9rZW4gPT09ICcoJykge1xuICAgICAgICAgICAgICAgIGN1c3RvbSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLnRuLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghTGFuZy5UWVBFUkVGLnRlc3QodG9rZW4pKVxuICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBhbGxvdyBvcHRpb25zIG9mIHRoZSBmb3JtIGdvb2dsZS5wcm90b2J1Zi4qIHNpbmNlIHRoZXkgd2lsbCBqdXN0IGdldCBpZ25vcmVkIGFueXdheXNcbiAgICAgICAgICAgICAgICAvLyBpZiAoIS9nb29nbGVcXC5wcm90b2J1ZlxcLi8udGVzdCh0b2tlbikpIC8vIEZJWE1FOiBXaHkgc2hvdWxkIHRoYXQgbm90IGJlIGEgdmFsaWQgdHlwZXJlZj9cbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcImlsbGVnYWwgb3B0aW9uIG5hbWU6IFwiICsgdG9rZW4pO1xuICAgICAgICAgICAgdmFyIG5hbWUgPSB0b2tlbjtcbiAgICAgICAgICAgIGlmIChjdXN0b20pIHsgLy8gKG15X21ldGhvZF9vcHRpb24pLmZvbywgKG15X21ldGhvZF9vcHRpb24pLCBzb21lX21ldGhvZF9vcHRpb24sIChmb28ubXlfb3B0aW9uKS5iYXJcbiAgICAgICAgICAgICAgICB0aGlzLnRuLnNraXAoJyknKTtcbiAgICAgICAgICAgICAgICBuYW1lID0gJygnICsgbmFtZSArICcpJztcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMudG4ucGVlaygpO1xuICAgICAgICAgICAgICAgIGlmIChMYW5nLkZRVFlQRVJFRi50ZXN0KHRva2VuKSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHRva2VuO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRuLm5leHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRuLnNraXAoJz0nKTtcbiAgICAgICAgICAgIHRoaXMuX3BhcnNlT3B0aW9uVmFsdWUocGFyZW50LCBuYW1lKTtcbiAgICAgICAgICAgIGlmICghaXNMaXN0KVxuICAgICAgICAgICAgICAgIHRoaXMudG4uc2tpcChcIjtcIik7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgYW4gb3B0aW9uIG9uIHRoZSBzcGVjaWZpZWQgb3B0aW9ucyBvYmplY3QuXG4gICAgICAgICAqIEBwYXJhbSB7IU9iamVjdC48c3RyaW5nLCo+fSBvcHRpb25zXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxib29sZWFufSB2YWx1ZVxuICAgICAgICAgKiBAaW5uZXJcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHNldE9wdGlvbihvcHRpb25zLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zW25hbWVdID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICBvcHRpb25zW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob3B0aW9uc1tuYW1lXSkpXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNbbmFtZV0gPSBbb3B0aW9uc1tuYW1lXV07XG4gICAgICAgICAgICAgICAgb3B0aW9uc1tuYW1lXS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYXJzZXMgYW4gb3B0aW9uIHZhbHVlLlxuICAgICAgICAgKiBAcGFyYW0geyFPYmplY3R9IHBhcmVudFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgUGFyc2VyUHJvdG90eXBlLl9wYXJzZU9wdGlvblZhbHVlID0gZnVuY3Rpb24gKHBhcmVudCwgbmFtZSkge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy50bi5wZWVrKCk7XG4gICAgICAgICAgICBpZiAodG9rZW4gIT09ICd7JykgeyAvLyBQbGFpbiB2YWx1ZVxuICAgICAgICAgICAgICAgIHNldE9wdGlvbihwYXJlbnRbXCJvcHRpb25zXCJdLCBuYW1lLCB0aGlzLl9yZWFkVmFsdWUodHJ1ZSkpO1xuICAgICAgICAgICAgfSBlbHNlIHsgLy8gQWdncmVnYXRlIG9wdGlvbnNcbiAgICAgICAgICAgICAgICB0aGlzLnRuLnNraXAoXCJ7XCIpO1xuICAgICAgICAgICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLnRuLm5leHQoKSkgIT09ICd9Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUxhbmcuTkFNRS50ZXN0KHRva2VuKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiaWxsZWdhbCBvcHRpb24gbmFtZTogXCIgKyBuYW1lICsgXCIuXCIgKyB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRuLm9taXQoXCI6XCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3B0aW9uKHBhcmVudFtcIm9wdGlvbnNcIl0sIG5hbWUgKyBcIi5cIiArIHRva2VuLCB0aGlzLl9yZWFkVmFsdWUodHJ1ZSkpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJzZU9wdGlvblZhbHVlKHBhcmVudCwgbmFtZSArIFwiLlwiICsgdG9rZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUGFyc2VzIGEgc2VydmljZSBkZWZpbml0aW9uLlxuICAgICAgICAgKiBAcGFyYW0geyFPYmplY3R9IHBhcmVudCBQYXJlbnQgZGVmaW5pdGlvblxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgUGFyc2VyUHJvdG90eXBlLl9wYXJzZVNlcnZpY2UgPSBmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLnRuLm5leHQoKTtcbiAgICAgICAgICAgIGlmICghTGFuZy5OQU1FLnRlc3QodG9rZW4pKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiaWxsZWdhbCBzZXJ2aWNlIG5hbWUgYXQgbGluZSBcIiArIHRoaXMudG4ubGluZSArIFwiOiBcIiArIHRva2VuKTtcbiAgICAgICAgICAgIHZhciBuYW1lID0gdG9rZW47XG4gICAgICAgICAgICB2YXIgc3ZjID0ge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lLFxuICAgICAgICAgICAgICAgIFwicnBjXCI6IHt9LFxuICAgICAgICAgICAgICAgIFwib3B0aW9uc1wiOiB7fVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMudG4uc2tpcChcIntcIik7XG4gICAgICAgICAgICB3aGlsZSAoKHRva2VuID0gdGhpcy50bi5uZXh0KCkpICE9PSAnfScpIHtcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4gPT09IFwib3B0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcnNlT3B0aW9uKHN2Yyk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4gPT09ICdycGMnKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJzZVNlcnZpY2VSUEMoc3ZjKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiaWxsZWdhbCBzZXJ2aWNlIHRva2VuOiBcIiArIHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudG4ub21pdChcIjtcIik7XG4gICAgICAgICAgICBwYXJlbnRbXCJzZXJ2aWNlc1wiXS5wdXNoKHN2Yyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhcnNlcyBhIFJQQyBzZXJ2aWNlIGRlZmluaXRpb24gb2YgdGhlIGZvcm0gWydycGMnLCBuYW1lLCAocmVxdWVzdCksICdyZXR1cm5zJywgKHJlc3BvbnNlKV0uXG4gICAgICAgICAqIEBwYXJhbSB7IU9iamVjdH0gc3ZjIFNlcnZpY2UgZGVmaW5pdGlvblxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgUGFyc2VyUHJvdG90eXBlLl9wYXJzZVNlcnZpY2VSUEMgPSBmdW5jdGlvbiAoc3ZjKSB7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IFwicnBjXCIsXG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLnRuLm5leHQoKTtcbiAgICAgICAgICAgIGlmICghTGFuZy5OQU1FLnRlc3QodG9rZW4pKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiaWxsZWdhbCBycGMgc2VydmljZSBtZXRob2QgbmFtZTogXCIgKyB0b2tlbik7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IHRva2VuO1xuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IHtcbiAgICAgICAgICAgICAgICBcInJlcXVlc3RcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInJlc3BvbnNlXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJyZXF1ZXN0X3N0cmVhbVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcInJlc3BvbnNlX3N0cmVhbVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm9wdGlvbnNcIjoge31cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnRuLnNraXAoXCIoXCIpO1xuICAgICAgICAgICAgdG9rZW4gPSB0aGlzLnRuLm5leHQoKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi50b0xvd2VyQ2FzZSgpID09PSBcInN0cmVhbVwiKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kW1wicmVxdWVzdF9zdHJlYW1cIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy50bi5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIUxhbmcuVFlQRVJFRi50ZXN0KHRva2VuKSlcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcImlsbGVnYWwgcnBjIHNlcnZpY2UgcmVxdWVzdCB0eXBlOiBcIiArIHRva2VuKTtcbiAgICAgICAgICAgIG1ldGhvZFtcInJlcXVlc3RcIl0gPSB0b2tlbjtcbiAgICAgICAgICAgIHRoaXMudG4uc2tpcChcIilcIik7XG4gICAgICAgICAgICB0b2tlbiA9IHRoaXMudG4ubmV4dCgpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnRvTG93ZXJDYXNlKCkgIT09IFwicmV0dXJuc1wiKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiaWxsZWdhbCBycGMgc2VydmljZSByZXF1ZXN0IHR5cGUgZGVsaW1pdGVyOiBcIiArIHRva2VuKTtcbiAgICAgICAgICAgIHRoaXMudG4uc2tpcChcIihcIik7XG4gICAgICAgICAgICB0b2tlbiA9IHRoaXMudG4ubmV4dCgpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnRvTG93ZXJDYXNlKCkgPT09IFwic3RyZWFtXCIpIHtcbiAgICAgICAgICAgICAgICBtZXRob2RbXCJyZXNwb25zZV9zdHJlYW1cIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy50bi5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZXRob2RbXCJyZXNwb25zZVwiXSA9IHRva2VuO1xuICAgICAgICAgICAgdGhpcy50bi5za2lwKFwiKVwiKTtcbiAgICAgICAgICAgIHRva2VuID0gdGhpcy50bi5wZWVrKCk7XG4gICAgICAgICAgICBpZiAodG9rZW4gPT09ICd7Jykge1xuICAgICAgICAgICAgICAgIHRoaXMudG4ubmV4dCgpO1xuICAgICAgICAgICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLnRuLm5leHQoKSkgIT09ICd9Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4gPT09ICdvcHRpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyc2VPcHRpb24obWV0aG9kKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJpbGxlZ2FsIHJwYyBzZXJ2aWNlIHRva2VuOiBcIiArIHRva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy50bi5vbWl0KFwiO1wiKTtcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMudG4uc2tpcChcIjtcIik7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN2Y1t0eXBlXSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgc3ZjW3R5cGVdID0ge307XG4gICAgICAgICAgICBzdmNbdHlwZV1bbmFtZV0gPSBtZXRob2Q7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhcnNlcyBhIG1lc3NhZ2UgZGVmaW5pdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHshT2JqZWN0fSBwYXJlbnQgUGFyZW50IGRlZmluaXRpb25cbiAgICAgICAgICogQHBhcmFtIHshT2JqZWN0PX0gZmxkIEZpZWxkIGRlZmluaXRpb24gaWYgdGhpcyBpcyBhIGdyb3VwXG4gICAgICAgICAqIEByZXR1cm5zIHshT2JqZWN0fVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgUGFyc2VyUHJvdG90eXBlLl9wYXJzZU1lc3NhZ2UgPSBmdW5jdGlvbiAocGFyZW50LCBmbGQpIHtcbiAgICAgICAgICAgIHZhciBpc0dyb3VwID0gISFmbGQsXG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLnRuLm5leHQoKTtcbiAgICAgICAgICAgIHZhciBtc2cgPSB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJmaWVsZHNcIjogW10sXG4gICAgICAgICAgICAgICAgXCJlbnVtc1wiOiBbXSxcbiAgICAgICAgICAgICAgICBcIm1lc3NhZ2VzXCI6IFtdLFxuICAgICAgICAgICAgICAgIFwib3B0aW9uc1wiOiB7fSxcbiAgICAgICAgICAgICAgICBcInNlcnZpY2VzXCI6IFtdLFxuICAgICAgICAgICAgICAgIFwib25lb2ZzXCI6IHt9XG4gICAgICAgICAgICAgICAgLy8gXCJleHRlbnNpb25zXCI6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghTGFuZy5OQU1FLnRlc3QodG9rZW4pKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiaWxsZWdhbCBcIiArIChpc0dyb3VwID8gXCJncm91cFwiIDogXCJtZXNzYWdlXCIpICsgXCIgbmFtZTogXCIgKyB0b2tlbik7XG4gICAgICAgICAgICBtc2dbXCJuYW1lXCJdID0gdG9rZW47XG4gICAgICAgICAgICBpZiAoaXNHcm91cCkge1xuICAgICAgICAgICAgICAgIHRoaXMudG4uc2tpcChcIj1cIik7XG4gICAgICAgICAgICAgICAgZmxkW1wiaWRcIl0gPSBta0lkKHRoaXMudG4ubmV4dCgpKTtcbiAgICAgICAgICAgICAgICBtc2dbXCJpc0dyb3VwXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRva2VuID0gdGhpcy50bi5wZWVrKCk7XG4gICAgICAgICAgICBpZiAodG9rZW4gPT09ICdbJyAmJiBmbGQpXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyc2VGaWVsZE9wdGlvbnMoZmxkKTtcbiAgICAgICAgICAgIHRoaXMudG4uc2tpcChcIntcIik7XG4gICAgICAgICAgICB3aGlsZSAoKHRva2VuID0gdGhpcy50bi5uZXh0KCkpICE9PSAnfScpIHtcbiAgICAgICAgICAgICAgICBpZiAoTGFuZy5SVUxFLnRlc3QodG9rZW4pKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJzZU1lc3NhZ2VGaWVsZChtc2csIHRva2VuKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0b2tlbiA9PT0gXCJvbmVvZlwiKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJzZU1lc3NhZ2VPbmVPZihtc2cpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuID09PSBcImVudW1cIilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyc2VFbnVtKG1zZyk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4gPT09IFwibWVzc2FnZVwiKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJzZU1lc3NhZ2UobXNnKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0b2tlbiA9PT0gXCJvcHRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyc2VPcHRpb24obXNnKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0b2tlbiA9PT0gXCJzZXJ2aWNlXCIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcnNlU2VydmljZShtc2cpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuID09PSBcImV4dGVuc2lvbnNcIilcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1zZy5oYXNPd25Qcm9wZXJ0eShcImV4dGVuc2lvbnNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZ1tcImV4dGVuc2lvbnNcIl0gPSBtc2dbXCJleHRlbnNpb25zXCJdLmNvbmNhdCh0aGlzLl9wYXJzZUV4dGVuc2lvblJhbmdlcygpKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXNnW1wiZXh0ZW5zaW9uc1wiXSA9IHRoaXMuX3BhcnNlRXh0ZW5zaW9uUmFuZ2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0b2tlbiA9PT0gXCJyZXNlcnZlZFwiKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJzZUlnbm9yZWQoKTsgLy8gVE9ET1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuID09PSBcImV4dGVuZFwiKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJzZUV4dGVuZChtc2cpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKExhbmcuVFlQRVJFRi50ZXN0KHRva2VuKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMucHJvdG8zKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJpbGxlZ2FsIGZpZWxkIHJ1bGU6IFwiICsgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJzZU1lc3NhZ2VGaWVsZChtc2csIFwib3B0aW9uYWxcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcImlsbGVnYWwgbWVzc2FnZSB0b2tlbjogXCIgKyB0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRuLm9taXQoXCI7XCIpO1xuICAgICAgICAgICAgcGFyZW50W1wibWVzc2FnZXNcIl0ucHVzaChtc2cpO1xuICAgICAgICAgICAgcmV0dXJuIG1zZztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUGFyc2VzIGFuIGlnbm9yZWQgc3RhdGVtZW50LlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgUGFyc2VyUHJvdG90eXBlLl9wYXJzZUlnbm9yZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy50bi5wZWVrKCkgIT09ICc7JylcbiAgICAgICAgICAgICAgICB0aGlzLnRuLm5leHQoKTtcbiAgICAgICAgICAgIHRoaXMudG4uc2tpcChcIjtcIik7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhcnNlcyBhIG1lc3NhZ2UgZmllbGQuXG4gICAgICAgICAqIEBwYXJhbSB7IU9iamVjdH0gbXNnIE1lc3NhZ2UgZGVmaW5pdGlvblxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcnVsZSBGaWVsZCBydWxlXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gdHlwZSBGaWVsZCB0eXBlIGlmIGFscmVhZHkga25vd24gKG5ldmVyIGtub3duIGZvciBtYXBzKVxuICAgICAgICAgKiBAcmV0dXJucyB7IU9iamVjdH0gRmllbGQgZGVzY3JpcHRvclxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgUGFyc2VyUHJvdG90eXBlLl9wYXJzZU1lc3NhZ2VGaWVsZCA9IGZ1bmN0aW9uIChtc2csIHJ1bGUsIHR5cGUpIHtcbiAgICAgICAgICAgIGlmICghTGFuZy5SVUxFLnRlc3QocnVsZSkpXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJpbGxlZ2FsIG1lc3NhZ2UgZmllbGQgcnVsZTogXCIgKyBydWxlKTtcbiAgICAgICAgICAgIHZhciBmbGQgPSB7XG4gICAgICAgICAgICAgICAgXCJydWxlXCI6IHJ1bGUsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJvcHRpb25zXCI6IHt9LFxuICAgICAgICAgICAgICAgIFwiaWRcIjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgICAgIGlmIChydWxlID09PSBcIm1hcFwiKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJpbGxlZ2FsIHR5cGU6IFwiICsgdHlwZSk7XG4gICAgICAgICAgICAgICAgdGhpcy50bi5za2lwKCc8Jyk7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLnRuLm5leHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoIUxhbmcuVFlQRS50ZXN0KHRva2VuKSAmJiAhTGFuZy5UWVBFUkVGLnRlc3QodG9rZW4pKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcImlsbGVnYWwgbWVzc2FnZSBmaWVsZCB0eXBlOiBcIiArIHRva2VuKTtcbiAgICAgICAgICAgICAgICBmbGRbXCJrZXl0eXBlXCJdID0gdG9rZW47XG4gICAgICAgICAgICAgICAgdGhpcy50bi5za2lwKCcsJyk7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLnRuLm5leHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoIUxhbmcuVFlQRS50ZXN0KHRva2VuKSAmJiAhTGFuZy5UWVBFUkVGLnRlc3QodG9rZW4pKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcImlsbGVnYWwgbWVzc2FnZSBmaWVsZDogXCIgKyB0b2tlbik7XG4gICAgICAgICAgICAgICAgZmxkW1widHlwZVwiXSA9IHRva2VuO1xuICAgICAgICAgICAgICAgIHRoaXMudG4uc2tpcCgnPicpO1xuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy50bi5uZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKCFMYW5nLk5BTUUudGVzdCh0b2tlbikpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiaWxsZWdhbCBtZXNzYWdlIGZpZWxkIG5hbWU6IFwiICsgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGZsZFtcIm5hbWVcIl0gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICB0aGlzLnRuLnNraXAoXCI9XCIpO1xuICAgICAgICAgICAgICAgIGZsZFtcImlkXCJdID0gbWtJZCh0aGlzLnRuLm5leHQoKSk7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLnRuLnBlZWsoKTtcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4gPT09ICdbJylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyc2VGaWVsZE9wdGlvbnMoZmxkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRuLnNraXAoXCI7XCIpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgdHlwZSA9IHR5cGVvZiB0eXBlICE9PSAndW5kZWZpbmVkJyA/IHR5cGUgOiB0aGlzLnRuLm5leHQoKTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBcImdyb3VwXCIpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBcIkEgW2xlZ2FjeV0gZ3JvdXAgc2ltcGx5IGNvbWJpbmVzIGEgbmVzdGVkIG1lc3NhZ2UgdHlwZSBhbmQgYSBmaWVsZCBpbnRvIGEgc2luZ2xlIGRlY2xhcmF0aW9uLiBJbiB5b3VyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvZGUsIHlvdSBjYW4gdHJlYXQgdGhpcyBtZXNzYWdlIGp1c3QgYXMgaWYgaXQgaGFkIGEgUmVzdWx0IHR5cGUgZmllbGQgY2FsbGVkIHJlc3VsdCAodGhlIGxhdHRlciBuYW1lIGlzXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnZlcnRlZCB0byBsb3dlci1jYXNlIHNvIHRoYXQgaXQgZG9lcyBub3QgY29uZmxpY3Qgd2l0aCB0aGUgZm9ybWVyKS5cIlxuICAgICAgICAgICAgICAgICAgICB2YXIgZ3JwID0gdGhpcy5fcGFyc2VNZXNzYWdlKG1zZywgZmxkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEvXltBLVpdLy50ZXN0KGdycFtcIm5hbWVcIl0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ2lsbGVnYWwgZ3JvdXAgbmFtZTogJyArIGdycFtcIm5hbWVcIl0pO1xuICAgICAgICAgICAgICAgICAgICBmbGRbXCJ0eXBlXCJdID0gZ3JwW1wibmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgZmxkW1wibmFtZVwiXSA9IGdycFtcIm5hbWVcIl0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50bi5vbWl0KFwiO1wiKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFMYW5nLlRZUEUudGVzdCh0eXBlKSAmJiAhTGFuZy5UWVBFUkVGLnRlc3QodHlwZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcImlsbGVnYWwgbWVzc2FnZSBmaWVsZCB0eXBlOiBcIiArIHR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBmbGRbXCJ0eXBlXCJdID0gdHlwZTtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLnRuLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFMYW5nLk5BTUUudGVzdCh0b2tlbikpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcImlsbGVnYWwgbWVzc2FnZSBmaWVsZCBuYW1lOiBcIiArIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgZmxkW1wibmFtZVwiXSA9IHRva2VuO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRuLnNraXAoXCI9XCIpO1xuICAgICAgICAgICAgICAgICAgICBmbGRbXCJpZFwiXSA9IG1rSWQodGhpcy50bi5uZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMudG4ucGVlaygpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4gPT09IFwiW1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyc2VGaWVsZE9wdGlvbnMoZmxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50bi5za2lwKFwiO1wiKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1zZ1tcImZpZWxkc1wiXS5wdXNoKGZsZCk7XG4gICAgICAgICAgICByZXR1cm4gZmxkO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYXJzZXMgYSBtZXNzYWdlIG9uZW9mLlxuICAgICAgICAgKiBAcGFyYW0geyFPYmplY3R9IG1zZyBNZXNzYWdlIGRlZmluaXRpb25cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIFBhcnNlclByb3RvdHlwZS5fcGFyc2VNZXNzYWdlT25lT2YgPSBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLnRuLm5leHQoKTtcbiAgICAgICAgICAgIGlmICghTGFuZy5OQU1FLnRlc3QodG9rZW4pKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiaWxsZWdhbCBvbmVvZiBuYW1lOiBcIiArIHRva2VuKTtcbiAgICAgICAgICAgIHZhciBuYW1lID0gdG9rZW4sXG4gICAgICAgICAgICAgICAgZmxkO1xuICAgICAgICAgICAgdmFyIGZpZWxkcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy50bi5za2lwKFwie1wiKTtcbiAgICAgICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLnRuLm5leHQoKSkgIT09IFwifVwiKSB7XG4gICAgICAgICAgICAgICAgZmxkID0gdGhpcy5fcGFyc2VNZXNzYWdlRmllbGQobXNnLCBcIm9wdGlvbmFsXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICBmbGRbXCJvbmVvZlwiXSA9IG5hbWU7XG4gICAgICAgICAgICAgICAgZmllbGRzLnB1c2goZmxkW1wiaWRcIl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50bi5vbWl0KFwiO1wiKTtcbiAgICAgICAgICAgIG1zZ1tcIm9uZW9mc1wiXVtuYW1lXSA9IGZpZWxkcztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUGFyc2VzIGEgc2V0IG9mIGZpZWxkIG9wdGlvbiBkZWZpbml0aW9ucy5cbiAgICAgICAgICogQHBhcmFtIHshT2JqZWN0fSBmbGQgRmllbGQgZGVmaW5pdGlvblxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgUGFyc2VyUHJvdG90eXBlLl9wYXJzZUZpZWxkT3B0aW9ucyA9IGZ1bmN0aW9uIChmbGQpIHtcbiAgICAgICAgICAgIHRoaXMudG4uc2tpcChcIltcIik7XG4gICAgICAgICAgICB2YXIgdG9rZW4sXG4gICAgICAgICAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMudG4ucGVlaygpKSAhPT0gJ10nKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFmaXJzdClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50bi5za2lwKFwiLFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJzZU9wdGlvbihmbGQsIHRydWUpO1xuICAgICAgICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRuLm5leHQoKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUGFyc2VzIGFuIGVudW0uXG4gICAgICAgICAqIEBwYXJhbSB7IU9iamVjdH0gbXNnIE1lc3NhZ2UgZGVmaW5pdGlvblxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgUGFyc2VyUHJvdG90eXBlLl9wYXJzZUVudW0gPSBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgICAgICB2YXIgZW5tID0ge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtdLFxuICAgICAgICAgICAgICAgIFwib3B0aW9uc1wiOiB7fVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMudG4ubmV4dCgpO1xuICAgICAgICAgICAgaWYgKCFMYW5nLk5BTUUudGVzdCh0b2tlbikpXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJpbGxlZ2FsIG5hbWU6IFwiICsgdG9rZW4pO1xuICAgICAgICAgICAgZW5tW1wibmFtZVwiXSA9IHRva2VuO1xuICAgICAgICAgICAgdGhpcy50bi5za2lwKFwie1wiKTtcbiAgICAgICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLnRuLm5leHQoKSkgIT09ICd9Jykge1xuICAgICAgICAgICAgICAgIGlmICh0b2tlbiA9PT0gXCJvcHRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyc2VPcHRpb24oZW5tKTtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFMYW5nLk5BTUUudGVzdCh0b2tlbikpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcImlsbGVnYWwgbmFtZTogXCIgKyB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG4uc2tpcChcIj1cIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogdG9rZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IG1rSWQodGhpcy50bi5uZXh0KCksIHRydWUpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy50bi5wZWVrKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbiA9PT0gXCJbXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJzZUZpZWxkT3B0aW9ucyh7IFwib3B0aW9uc1wiOiB7fSB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50bi5za2lwKFwiO1wiKTtcbiAgICAgICAgICAgICAgICAgICAgZW5tW1widmFsdWVzXCJdLnB1c2godmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRuLm9taXQoXCI7XCIpO1xuICAgICAgICAgICAgbXNnW1wiZW51bXNcIl0ucHVzaChlbm0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYXJzZXMgZXh0ZW5zaW9uIC8gcmVzZXJ2ZWQgcmFuZ2VzLlxuICAgICAgICAgKiBAcmV0dXJucyB7IUFycmF5LjwhQXJyYXkuPG51bWJlcj4+fVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgUGFyc2VyUHJvdG90eXBlLl9wYXJzZUV4dGVuc2lvblJhbmdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByYW5nZXMgPSBbXTtcbiAgICAgICAgICAgIHZhciB0b2tlbixcbiAgICAgICAgICAgICAgICByYW5nZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICByYW5nZSA9IFtdO1xuICAgICAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy50bi5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtaW5cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFByb3RvQnVmLklEX01JTjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtYXhcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFByb3RvQnVmLklEX01BWDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBta051bWJlcih0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmFuZ2UucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyYW5nZS5sZW5ndGggPT09IDIpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudG4ucGVlaygpICE9PSBcInRvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy50bi5uZXh0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJhbmdlcy5wdXNoKHJhbmdlKTtcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMudG4ub21pdChcIixcIikpO1xuICAgICAgICAgICAgdGhpcy50bi5za2lwKFwiO1wiKTtcbiAgICAgICAgICAgIHJldHVybiByYW5nZXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhcnNlcyBhbiBleHRlbmQgYmxvY2suXG4gICAgICAgICAqIEBwYXJhbSB7IU9iamVjdH0gcGFyZW50IFBhcmVudCBvYmplY3RcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIFBhcnNlclByb3RvdHlwZS5fcGFyc2VFeHRlbmQgPSBmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLnRuLm5leHQoKTtcbiAgICAgICAgICAgIGlmICghTGFuZy5UWVBFUkVGLnRlc3QodG9rZW4pKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiaWxsZWdhbCBleHRlbmQgcmVmZXJlbmNlOiBcIiArIHRva2VuKTtcbiAgICAgICAgICAgIHZhciBleHQgPSB7XG4gICAgICAgICAgICAgICAgXCJyZWZcIjogdG9rZW4sXG4gICAgICAgICAgICAgICAgXCJmaWVsZHNcIjogW11cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnRuLnNraXAoXCJ7XCIpO1xuICAgICAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMudG4ubmV4dCgpKSAhPT0gJ30nKSB7XG4gICAgICAgICAgICAgICAgaWYgKExhbmcuUlVMRS50ZXN0KHRva2VuKSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyc2VNZXNzYWdlRmllbGQoZXh0LCB0b2tlbik7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoTGFuZy5UWVBFUkVGLnRlc3QodG9rZW4pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5wcm90bzMpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcImlsbGVnYWwgZmllbGQgcnVsZTogXCIgKyB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcnNlTWVzc2FnZUZpZWxkKGV4dCwgXCJvcHRpb25hbFwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiaWxsZWdhbCBleHRlbmQgdG9rZW46IFwiICsgdG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50bi5vbWl0KFwiO1wiKTtcbiAgICAgICAgICAgIHBhcmVudFtcIm1lc3NhZ2VzXCJdLnB1c2goZXh0KTtcbiAgICAgICAgICAgIHJldHVybiBleHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gLS0tLS0gR2VuZXJhbCAtLS0tLVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcGFyc2VyLlxuICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgUGFyc2VyUHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiUGFyc2VyIGF0IGxpbmUgXCIgKyB0aGlzLnRuLmxpbmU7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhbGlhcyBQcm90b0J1Zi5Eb3RQcm90by5QYXJzZXJcbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgRG90UHJvdG8uUGFyc2VyID0gUGFyc2VyO1xuXG4gICAgICAgIHJldHVybiBEb3RQcm90bztcblxuICAgIH0pKFByb3RvQnVmLCBQcm90b0J1Zi5MYW5nKTtcblxuICAgIC8qKlxuICAgICAqIEBhbGlhcyBQcm90b0J1Zi5SZWZsZWN0XG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIFByb3RvQnVmLlJlZmxlY3QgPSAoZnVuY3Rpb24gKFByb3RvQnVmKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWZsZWN0aW9uIHR5cGVzLlxuICAgICAgICAgKiBAZXhwb3J0cyBQcm90b0J1Zi5SZWZsZWN0XG4gICAgICAgICAqIEBuYW1lc3BhY2VcbiAgICAgICAgICovXG4gICAgICAgIHZhciBSZWZsZWN0ID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnN0cnVjdHMgYSBSZWZsZWN0IGJhc2UgY2xhc3MuXG4gICAgICAgICAqIEBleHBvcnRzIFByb3RvQnVmLlJlZmxlY3QuVFxuICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICogQGFic3RyYWN0XG4gICAgICAgICAqIEBwYXJhbSB7IVByb3RvQnVmLkJ1aWxkZXJ9IGJ1aWxkZXIgQnVpbGRlciByZWZlcmVuY2VcbiAgICAgICAgICogQHBhcmFtIHs/UHJvdG9CdWYuUmVmbGVjdC5UfSBwYXJlbnQgUGFyZW50IG9iamVjdFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBPYmplY3QgbmFtZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIFQgPSBmdW5jdGlvbiAoYnVpbGRlciwgcGFyZW50LCBuYW1lKSB7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQnVpbGRlciByZWZlcmVuY2UuXG4gICAgICAgICAgICAgKiBAdHlwZSB7IVByb3RvQnVmLkJ1aWxkZXJ9XG4gICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuYnVpbGRlciA9IGJ1aWxkZXI7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUGFyZW50IG9iamVjdC5cbiAgICAgICAgICAgICAqIEB0eXBlIHs/UHJvdG9CdWYuUmVmbGVjdC5UfVxuICAgICAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBPYmplY3QgbmFtZSBpbiBuYW1lc3BhY2UuXG4gICAgICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEZ1bGx5IHF1YWxpZmllZCBjbGFzcyBuYW1lXG4gICAgICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmNsYXNzTmFtZTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQGFsaWFzIFByb3RvQnVmLlJlZmxlY3QuVC5wcm90b3R5cGVcbiAgICAgICAgICogQGlubmVyXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgVFByb3RvdHlwZSA9IFQucHJvdG90eXBlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBmdWxseSBxdWFsaWZpZWQgbmFtZSBvZiB0aGlzIG9iamVjdC5cbiAgICAgICAgICogQHJldHVybnMge3N0cmluZ30gRnVsbHkgcXVhbGlmaWVkIG5hbWUgYXMgb2YgXCIuUEFUSC5UTy5USElTXCJcbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgVFByb3RvdHlwZS5mcW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICBwdHIgPSB0aGlzO1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIHB0ciA9IHB0ci5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKHB0ciA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBuYW1lID0gcHRyLm5hbWUgKyBcIi5cIiArIG5hbWU7XG4gICAgICAgICAgICB9IHdoaWxlICh0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgUmVmbGVjdCBvYmplY3QgKGl0cyBmdWxseSBxdWFsaWZpZWQgbmFtZSkuXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IGluY2x1ZGVDbGFzcyBTZXQgdG8gdHJ1ZSB0byBpbmNsdWRlIHRoZSBjbGFzcyBuYW1lLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgICAgICogQHJldHVybiBTdHJpbmcgcmVwcmVzZW50YXRpb25cbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgVFByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChpbmNsdWRlQ2xhc3MpIHtcbiAgICAgICAgICAgIHJldHVybiAoaW5jbHVkZUNsYXNzID8gdGhpcy5jbGFzc05hbWUgKyBcIiBcIiA6IFwiXCIpICsgdGhpcy5mcW4oKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQnVpbGRzIHRoaXMgdHlwZS5cbiAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoaXMgdHlwZSBjYW5ub3QgYmUgYnVpbHQgZGlyZWN0bHlcbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgVFByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKHRoaXMudG9TdHJpbmcodHJ1ZSkgKyBcIiBjYW5ub3QgYmUgYnVpbHQgZGlyZWN0bHlcIik7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhbGlhcyBQcm90b0J1Zi5SZWZsZWN0LlRcbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgUmVmbGVjdC5UID0gVDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29uc3RydWN0cyBhIG5ldyBOYW1lc3BhY2UuXG4gICAgICAgICAqIEBleHBvcnRzIFByb3RvQnVmLlJlZmxlY3QuTmFtZXNwYWNlXG4gICAgICAgICAqIEBwYXJhbSB7IVByb3RvQnVmLkJ1aWxkZXJ9IGJ1aWxkZXIgQnVpbGRlciByZWZlcmVuY2VcbiAgICAgICAgICogQHBhcmFtIHs/UHJvdG9CdWYuUmVmbGVjdC5OYW1lc3BhY2V9IHBhcmVudCBOYW1lc3BhY2UgcGFyZW50XG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWVzcGFjZSBuYW1lXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj49fSBvcHRpb25zIE5hbWVzcGFjZSBvcHRpb25zXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nP30gc3ludGF4IFRoZSBzeW50YXggbGV2ZWwgb2YgdGhpcyBkZWZpbml0aW9uIChlLmcuLCBwcm90bzMpXG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKiBAZXh0ZW5kcyBQcm90b0J1Zi5SZWZsZWN0LlRcbiAgICAgICAgICovXG4gICAgICAgIHZhciBOYW1lc3BhY2UgPSBmdW5jdGlvbiAoYnVpbGRlciwgcGFyZW50LCBuYW1lLCBvcHRpb25zLCBzeW50YXgpIHtcbiAgICAgICAgICAgIFQuY2FsbCh0aGlzLCBidWlsZGVyLCBwYXJlbnQsIG5hbWUpO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEBvdmVycmlkZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFwiTmFtZXNwYWNlXCI7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2hpbGRyZW4gaW5zaWRlIHRoZSBuYW1lc3BhY2UuXG4gICAgICAgICAgICAgKiBAdHlwZSB7IUFycmF5LjxQcm90b0J1Zi5SZWZsZWN0LlQ+fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogT3B0aW9ucy5cbiAgICAgICAgICAgICAqIEB0eXBlIHshT2JqZWN0LjxzdHJpbmcsICo+fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFN5bnRheCBsZXZlbCAoZS5nLiwgcHJvdG8yIG9yIHByb3RvMykuXG4gICAgICAgICAgICAgKiBAdHlwZSB7IXN0cmluZ31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5zeW50YXggPSBzeW50YXggfHwgXCJwcm90bzJcIjtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQGFsaWFzIFByb3RvQnVmLlJlZmxlY3QuTmFtZXNwYWNlLnByb3RvdHlwZVxuICAgICAgICAgKiBAaW5uZXJcbiAgICAgICAgICovXG4gICAgICAgIHZhciBOYW1lc3BhY2VQcm90b3R5cGUgPSBOYW1lc3BhY2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShULnByb3RvdHlwZSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdGhlIG5hbWVzcGFjZSdzIGNoaWxkcmVuLlxuICAgICAgICAgKiBAcGFyYW0ge1Byb3RvQnVmLlJlZmxlY3QuVD19IHR5cGUgRmlsdGVyIHR5cGUgKHJldHVybnMgaW5zdGFuY2VzIG9mIHRoaXMgdHlwZSBvbmx5KS4gRGVmYXVsdHMgdG8gbnVsbCAoYWxsIGNoaWxkcmVuKS5cbiAgICAgICAgICogQHJldHVybiB7QXJyYXkuPFByb3RvQnVmLlJlZmxlY3QuVD59XG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIE5hbWVzcGFjZVByb3RvdHlwZS5nZXRDaGlsZHJlbiA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgICAgICB0eXBlID0gdHlwZSB8fCBudWxsO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5zbGljZSgpO1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgayA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgazsgKytpKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoaWxkcmVuW2ldIGluc3RhbmNlb2YgdHlwZSlcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaCh0aGlzLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkcyBhIGNoaWxkIHRvIHRoZSBuYW1lc3BhY2UuXG4gICAgICAgICAqIEBwYXJhbSB7UHJvdG9CdWYuUmVmbGVjdC5UfSBjaGlsZCBDaGlsZFxuICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIGNoaWxkIGNhbm5vdCBiZSBhZGRlZCAoZHVwbGljYXRlKVxuICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAqL1xuICAgICAgICBOYW1lc3BhY2VQcm90b3R5cGUuYWRkQ2hpbGQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIHZhciBvdGhlcjtcbiAgICAgICAgICAgIGlmIChvdGhlciA9IHRoaXMuZ2V0Q2hpbGQoY2hpbGQubmFtZSkpIHtcbiAgICAgICAgICAgICAgICAvLyBUcnkgdG8gcmV2ZXJ0IGNhbWVsY2FzZSB0cmFuc2Zvcm1hdGlvbiBvbiBjb2xsaXNpb25cbiAgICAgICAgICAgICAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBNZXNzYWdlLkZpZWxkICYmIG90aGVyLm5hbWUgIT09IG90aGVyLm9yaWdpbmFsTmFtZSAmJiB0aGlzLmdldENoaWxkKG90aGVyLm9yaWdpbmFsTmFtZSkgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIG90aGVyLm5hbWUgPSBvdGhlci5vcmlnaW5hbE5hbWU7IC8vIFJldmVydCBwcmV2aW91cyBmaXJzdCAoZWZmZWN0aXZlbHkga2VlcHMgYm90aCBvcmlnaW5hbHMpXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGQgaW5zdGFuY2VvZiBNZXNzYWdlLkZpZWxkICYmIGNoaWxkLm5hbWUgIT09IGNoaWxkLm9yaWdpbmFsTmFtZSAmJiB0aGlzLmdldENoaWxkKGNoaWxkLm9yaWdpbmFsTmFtZSkgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLm5hbWUgPSBjaGlsZC5vcmlnaW5hbE5hbWU7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIkR1cGxpY2F0ZSBuYW1lIGluIG5hbWVzcGFjZSBcIiArIHRoaXMudG9TdHJpbmcodHJ1ZSkgKyBcIjogXCIgKyBjaGlsZC5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgYSBjaGlsZCBieSBpdHMgbmFtZSBvciBpZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBuYW1lT3JJZCBDaGlsZCBuYW1lIG9yIGlkXG4gICAgICAgICAqIEByZXR1cm4gez9Qcm90b0J1Zi5SZWZsZWN0LlR9IFRoZSBjaGlsZCBvciBudWxsIGlmIG5vdCBmb3VuZFxuICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAqL1xuICAgICAgICBOYW1lc3BhY2VQcm90b3R5cGUuZ2V0Q2hpbGQgPSBmdW5jdGlvbiAobmFtZU9ySWQpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0eXBlb2YgbmFtZU9ySWQgPT09ICdudW1iZXInID8gJ2lkJyA6ICduYW1lJztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBrID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgPCBrOyArK2kpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW5baV1ba2V5XSA9PT0gbmFtZU9ySWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlc29sdmVzIGEgcmVmbGVjdCBvYmplY3QgaW5zaWRlIG9mIHRoaXMgbmFtZXNwYWNlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ3whQXJyYXkuPHN0cmluZz59IHFuIFF1YWxpZmllZCBuYW1lIHRvIHJlc29sdmVcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFuPX0gZXhjbHVkZU5vbk5hbWVzcGFjZSBFeGNsdWRlcyBub24tbmFtZXNwYWNlIHR5cGVzLCBkZWZhdWx0cyB0byBgZmFsc2VgXG4gICAgICAgICAqIEByZXR1cm4gez9Qcm90b0J1Zi5SZWZsZWN0Lk5hbWVzcGFjZX0gVGhlIHJlc29sdmVkIHR5cGUgb3IgbnVsbCBpZiBub3QgZm91bmRcbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgTmFtZXNwYWNlUHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbiAocW4sIGV4Y2x1ZGVOb25OYW1lc3BhY2UpIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gdHlwZW9mIHFuID09PSAnc3RyaW5nJyA/IHFuLnNwbGl0KFwiLlwiKSA6IHFuLFxuICAgICAgICAgICAgICAgIHB0ciA9IHRoaXMsXG4gICAgICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICBpZiAocGFydFtpXSA9PT0gXCJcIikgeyAvLyBGdWxseSBxdWFsaWZpZWQgbmFtZSwgZS5nLiBcIi5NeS5NZXNzYWdlJ1xuICAgICAgICAgICAgICAgIHdoaWxlIChwdHIucGFyZW50ICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBwdHIgPSBwdHIucGFyZW50O1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjaGlsZDtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHB0ciBpbnN0YW5jZW9mIFJlZmxlY3QuTmFtZXNwYWNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHRyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkID0gcHRyLmdldENoaWxkKHBhcnRbaV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNoaWxkIHx8ICEoY2hpbGQgaW5zdGFuY2VvZiBSZWZsZWN0LlQpIHx8IChleGNsdWRlTm9uTmFtZXNwYWNlICYmICEoY2hpbGQgaW5zdGFuY2VvZiBSZWZsZWN0Lk5hbWVzcGFjZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdHIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcHRyID0gY2hpbGQ7IGkrKztcbiAgICAgICAgICAgICAgICB9IHdoaWxlIChpIDwgcGFydC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGlmIChwdHIgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7IC8vIEZvdW5kXG4gICAgICAgICAgICAgICAgLy8gRWxzZSBzZWFyY2ggdGhlIHBhcmVudFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudCAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LnJlc29sdmUocW4sIGV4Y2x1ZGVOb25OYW1lc3BhY2UpO1xuICAgICAgICAgICAgfSB3aGlsZSAocHRyICE9IG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuIHB0cjtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGV0ZXJtaW5lcyB0aGUgc2hvcnRlc3QgcXVhbGlmaWVkIG5hbWUgb2YgdGhlIHNwZWNpZmllZCB0eXBlLCBpZiBhbnksIHJlbGF0aXZlIHRvIHRoaXMgbmFtZXNwYWNlLlxuICAgICAgICAgKiBAcGFyYW0geyFQcm90b0J1Zi5SZWZsZWN0LlR9IHQgUmVmbGVjdGlvbiB0eXBlXG4gICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzaG9ydGVzdCBxdWFsaWZpZWQgbmFtZSBvciwgaWYgdGhlcmUgaXMgbm9uZSwgdGhlIGZxblxuICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAqL1xuICAgICAgICBOYW1lc3BhY2VQcm90b3R5cGUucW4gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBbXSwgcHRyID0gdDtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBwYXJ0LnVuc2hpZnQocHRyLm5hbWUpO1xuICAgICAgICAgICAgICAgIHB0ciA9IHB0ci5wYXJlbnQ7XG4gICAgICAgICAgICB9IHdoaWxlIChwdHIgIT09IG51bGwpO1xuICAgICAgICAgICAgZm9yICh2YXIgbGVuID0gMTsgbGVuIDw9IHBhcnQubGVuZ3RoOyBsZW4rKykge1xuICAgICAgICAgICAgICAgIHZhciBxbiA9IHBhcnQuc2xpY2UocGFydC5sZW5ndGggLSBsZW4pO1xuICAgICAgICAgICAgICAgIGlmICh0ID09PSB0aGlzLnJlc29sdmUocW4sIHQgaW5zdGFuY2VvZiBSZWZsZWN0Lk5hbWVzcGFjZSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBxbi5qb2luKFwiLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0LmZxbigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCdWlsZHMgdGhlIG5hbWVzcGFjZSBhbmQgcmV0dXJucyB0aGUgcnVudGltZSBjb3VudGVycGFydC5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsRnVuY3Rpb258T2JqZWN0Pn0gUnVudGltZSBuYW1lc3BhY2VcbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgTmFtZXNwYWNlUHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLyoqIEBkaWN0ICovXG4gICAgICAgICAgICB2YXIgbnMgPSB7fTtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW47XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgayA9IGNoaWxkcmVuLmxlbmd0aCwgY2hpbGQ7IGkgPCBrOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIE5hbWVzcGFjZSlcbiAgICAgICAgICAgICAgICAgICAgbnNbY2hpbGQubmFtZV0gPSBjaGlsZC5idWlsZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSlcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsIFwiJG9wdGlvbnNcIiwgeyBcInZhbHVlXCI6IHRoaXMuYnVpbGRPcHQoKSB9KTtcbiAgICAgICAgICAgIHJldHVybiBucztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQnVpbGRzIHRoZSBuYW1lc3BhY2UncyAnJG9wdGlvbnMnIHByb3BlcnR5LlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywqPn1cbiAgICAgICAgICovXG4gICAgICAgIE5hbWVzcGFjZVByb3RvdHlwZS5idWlsZE9wdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvcHQgPSB7fSxcbiAgICAgICAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXModGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBrID0ga2V5cy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXSxcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gdGhpcy5vcHRpb25zW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IE9wdGlvbnMgYXJlIG5vdCByZXNvbHZlZCwgeWV0LlxuICAgICAgICAgICAgICAgIC8vIGlmICh2YWwgaW5zdGFuY2VvZiBOYW1lc3BhY2UpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgb3B0W2tleV0gPSB2YWwuYnVpbGQoKTtcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9wdFtrZXldID0gdmFsO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvcHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgdGhlIHZhbHVlIGFzc2lnbmVkIHRvIHRoZSBvcHRpb24gd2l0aCB0aGUgc3BlY2lmaWVkIG5hbWUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gbmFtZSBSZXR1cm5zIHRoZSBvcHRpb24gdmFsdWUgaWYgc3BlY2lmaWVkLCBvdGhlcndpc2UgYWxsIG9wdGlvbnMgYXJlIHJldHVybmVkLlxuICAgICAgICAgKiBAcmV0dXJuIHsqfE9iamVjdC48c3RyaW5nLCo+fW51bGx9IE9wdGlvbiB2YWx1ZSBvciBOVUxMIGlmIHRoZXJlIGlzIG5vIHN1Y2ggb3B0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBOYW1lc3BhY2VQcm90b3R5cGUuZ2V0T3B0aW9uID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucztcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5vcHRpb25zW25hbWVdICE9PSAndW5kZWZpbmVkJyA/IHRoaXMub3B0aW9uc1tuYW1lXSA6IG51bGw7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhbGlhcyBQcm90b0J1Zi5SZWZsZWN0Lk5hbWVzcGFjZVxuICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAqL1xuICAgICAgICBSZWZsZWN0Lk5hbWVzcGFjZSA9IE5hbWVzcGFjZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29uc3RydWN0cyBhIG5ldyBFbGVtZW50IGltcGxlbWVudGF0aW9uIHRoYXQgY2hlY2tzIGFuZCBjb252ZXJ0cyB2YWx1ZXMgZm9yIGFcbiAgICAgICAgICogcGFydGljdWxhciBmaWVsZCB0eXBlLCBhcyBhcHByb3ByaWF0ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQW4gRWxlbWVudCByZXByZXNlbnRzIGEgc2luZ2xlIHZhbHVlOiBlaXRoZXIgdGhlIHZhbHVlIG9mIGEgc2luZ3VsYXIgZmllbGQsXG4gICAgICAgICAqIG9yIGEgdmFsdWUgY29udGFpbmVkIGluIG9uZSBlbnRyeSBvZiBhIHJlcGVhdGVkIGZpZWxkIG9yIG1hcCBmaWVsZC4gVGhpc1xuICAgICAgICAgKiBjbGFzcyBkb2VzIG5vdCBpbXBsZW1lbnQgdGhlc2UgaGlnaGVyLWxldmVsIGNvbmNlcHRzOyBpdCBvbmx5IGVuY2Fwc3VsYXRlc1xuICAgICAgICAgKiB0aGUgbG93LWxldmVsIHR5cGVjaGVja2luZyBhbmQgY29udmVyc2lvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4cG9ydHMgUHJvdG9CdWYuUmVmbGVjdC5FbGVtZW50XG4gICAgICAgICAqIEBwYXJhbSB7e25hbWU6IHN0cmluZywgd2lyZVR5cGU6IG51bWJlcn19IHR5cGUgUmVzb2x2ZWQgZGF0YSB0eXBlXG4gICAgICAgICAqIEBwYXJhbSB7UHJvdG9CdWYuUmVmbGVjdC5UfG51bGx9IHJlc29sdmVkVHlwZSBSZXNvbHZlZCB0eXBlLCBpZiByZWxldmFudFxuICAgICAgICAgKiAoZS5nLiBzdWJtZXNzYWdlIGZpZWxkKS5cbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBpc01hcEtleSBJcyB0aGlzIGVsZW1lbnQgYSBNYXAga2V5PyBUaGUgdmFsdWUgd2lsbCBiZVxuICAgICAgICAgKiBjb252ZXJ0ZWQgdG8gc3RyaW5nIGZvcm0gaWYgc28uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzeW50YXggU3ludGF4IGxldmVsIG9mIGRlZmluaW5nIG1lc3NhZ2UgdHlwZSwgZS5nLixcbiAgICAgICAgICogcHJvdG8yIG9yIHByb3RvMy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTmFtZSBvZiB0aGUgZmllbGQgY29udGFpbmluZyB0aGlzIGVsZW1lbnQgKGZvciBlcnJvclxuICAgICAgICAgKiBtZXNzYWdlcylcbiAgICAgICAgICogQGNvbnN0cnVjdG9yXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgRWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCByZXNvbHZlZFR5cGUsIGlzTWFwS2V5LCBzeW50YXgsIG5hbWUpIHtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbGVtZW50IHR5cGUsIGFzIGEgc3RyaW5nIChlLmcuLCBpbnQzMikuXG4gICAgICAgICAgICAgKiBAdHlwZSB7e25hbWU6IHN0cmluZywgd2lyZVR5cGU6IG51bWJlcn19XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRWxlbWVudCB0eXBlIHJlZmVyZW5jZSB0byBzdWJtZXNzYWdlIG9yIGVudW0gZGVmaW5pdGlvbiwgaWYgbmVlZGVkLlxuICAgICAgICAgICAgICogQHR5cGUge1Byb3RvQnVmLlJlZmxlY3QuVHxudWxsfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnJlc29sdmVkVHlwZSA9IHJlc29sdmVkVHlwZTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbGVtZW50IGlzIGEgbWFwIGtleS5cbiAgICAgICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmlzTWFwS2V5ID0gaXNNYXBLZXk7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU3ludGF4IGxldmVsIG9mIGRlZmluaW5nIG1lc3NhZ2UgdHlwZSwgZS5nLiwgcHJvdG8yIG9yIHByb3RvMy5cbiAgICAgICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuc3ludGF4ID0gc3ludGF4O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIE5hbWUgb2YgdGhlIGZpZWxkIGNvbnRhaW5pbmcgdGhpcyBlbGVtZW50IChmb3IgZXJyb3IgbWVzc2FnZXMpXG4gICAgICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuXG4gICAgICAgICAgICBpZiAoaXNNYXBLZXkgJiYgUHJvdG9CdWYuTUFQX0tFWV9UWVBFUy5pbmRleE9mKHR5cGUpIDwgMClcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIkludmFsaWQgbWFwIGtleSB0eXBlOiBcIiArIHR5cGUubmFtZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIEVsZW1lbnRQcm90b3R5cGUgPSBFbGVtZW50LnByb3RvdHlwZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT2J0YWlucyBhIChuZXcpIGRlZmF1bHQgdmFsdWUgZm9yIHRoZSBzcGVjaWZpZWQgdHlwZS5cbiAgICAgICAgICogQHBhcmFtIHR5cGUge3N0cmluZ3x7bmFtZTogc3RyaW5nLCB3aXJlVHlwZTogbnVtYmVyfX0gRmllbGQgdHlwZVxuICAgICAgICAgKiBAcmV0dXJucyB7Kn0gRGVmYXVsdCB2YWx1ZVxuICAgICAgICAgKiBAaW5uZXJcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIG1rRGVmYXVsdCh0eXBlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgIHR5cGUgPSBQcm90b0J1Zi5UWVBFU1t0eXBlXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdHlwZS5kZWZhdWx0VmFsdWUgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiZGVmYXVsdCB2YWx1ZSBmb3IgdHlwZSBcIiArIHR5cGUubmFtZSArIFwiIGlzIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgICAgICAgICBpZiAodHlwZSA9PSBQcm90b0J1Zi5UWVBFU1tcImJ5dGVzXCJdKVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQnl0ZUJ1ZmZlcigwKTtcbiAgICAgICAgICAgIHJldHVybiB0eXBlLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHZhbHVlIGZvciB0aGlzIGZpZWxkIGluIHByb3RvMy5cbiAgICAgICAgICogQGZ1bmN0aW9uXG4gICAgICAgICAqIEBwYXJhbSB0eXBlIHtzdHJpbmd8e25hbWU6IHN0cmluZywgd2lyZVR5cGU6IG51bWJlcn19IHRoZSBmaWVsZCB0eXBlXG4gICAgICAgICAqIEByZXR1cm5zIHsqfSBEZWZhdWx0IHZhbHVlXG4gICAgICAgICAqL1xuICAgICAgICBFbGVtZW50LmRlZmF1bHRGaWVsZFZhbHVlID0gbWtEZWZhdWx0O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYWtlcyBhIExvbmcgZnJvbSBhIHZhbHVlLlxuICAgICAgICAgKiBAcGFyYW0ge3tsb3c6IG51bWJlciwgaGlnaDogbnVtYmVyLCB1bnNpZ25lZDogYm9vbGVhbn18c3RyaW5nfG51bWJlcn0gdmFsdWUgVmFsdWVcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFuPX0gdW5zaWduZWQgV2hldGhlciB1bnNpZ25lZCBvciBub3QsIGRlZmF1bHRzIHRvIHJldXNlIGl0IGZyb20gTG9uZy1saWtlIG9iamVjdHMgb3IgdG8gc2lnbmVkIGZvclxuICAgICAgICAgKiAgc3RyaW5ncyBhbmQgbnVtYmVyc1xuICAgICAgICAgKiBAcmV0dXJucyB7IUxvbmd9XG4gICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgdmFsdWUgY2Fubm90IGJlIGNvbnZlcnRlZCB0byBhIExvbmdcbiAgICAgICAgICogQGlubmVyXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBta0xvbmcodmFsdWUsIHVuc2lnbmVkKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlLmxvdyA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHZhbHVlLmhpZ2ggPT09ICdudW1iZXInICYmIHR5cGVvZiB2YWx1ZS51bnNpZ25lZCA9PT0gJ2Jvb2xlYW4nXG4gICAgICAgICAgICAgICAgJiYgdmFsdWUubG93ID09PSB2YWx1ZS5sb3cgJiYgdmFsdWUuaGlnaCA9PT0gdmFsdWUuaGlnaClcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb3RvQnVmLkxvbmcodmFsdWUubG93LCB2YWx1ZS5oaWdoLCB0eXBlb2YgdW5zaWduZWQgPT09ICd1bmRlZmluZWQnID8gdmFsdWUudW5zaWduZWQgOiB1bnNpZ25lZCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICAvLyBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gUHJvdG9CdWYuTG9uZy5mcm9tU3RyaW5nKHZhbHVlLCB1bnNpZ25lZCB8fCBmYWxzZSwgMTApO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb3RvQnVmLkxvbmcuZnJvbU51bWJlcih2YWx1ZSwgdW5zaWduZWQgfHwgZmFsc2UpO1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJub3QgY29udmVydGlibGUgdG8gTG9uZ1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEVsZW1lbnRQcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMubmFtZSB8fCAnJykgKyAodGhpcy5pc01hcEtleSA/ICdtYXAnIDogJ3ZhbHVlJykgKyAnIGVsZW1lbnQnO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gdmFsdWUgY2FuIGJlIHNldCBmb3IgYW4gZWxlbWVudCBvZiB0aGlzIHR5cGUgKHNpbmd1bGFyXG4gICAgICAgICAqIGZpZWxkIG9yIG9uZSBlbGVtZW50IG9mIGEgcmVwZWF0ZWQgZmllbGQgb3IgbWFwKS5cbiAgICAgICAgICogQHBhcmFtIHsqfSB2YWx1ZSBWYWx1ZSB0byBjaGVja1xuICAgICAgICAgKiBAcmV0dXJuIHsqfSBWZXJpZmllZCwgbWF5YmUgYWRqdXN0ZWQsIHZhbHVlXG4gICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgdmFsdWUgY2Fubm90IGJlIHZlcmlmaWVkIGZvciB0aGlzIGVsZW1lbnQgc2xvdFxuICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAqL1xuICAgICAgICBFbGVtZW50UHJvdG90eXBlLnZlcmlmeVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBmdW5jdGlvbiBmYWlsKHZhbCwgbXNnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJJbGxlZ2FsIHZhbHVlIGZvciBcIiArIHNlbGYudG9TdHJpbmcodHJ1ZSkgKyBcIiBvZiB0eXBlIFwiICsgc2VsZi50eXBlLm5hbWUgKyBcIjogXCIgKyB2YWwgKyBcIiAoXCIgKyBtc2cgKyBcIilcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgICAgICAgICAgIC8vIFNpZ25lZCAzMmJpdFxuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJpbnQzMlwiXTpcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wic2ludDMyXCJdOlxuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJzZml4ZWQzMlwiXTpcbiAgICAgICAgICAgICAgICAgICAgLy8gQWNjb3VudCBmb3IgIU5hTjogdmFsdWUgPT09IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInIHx8ICh2YWx1ZSA9PT0gdmFsdWUgJiYgdmFsdWUgJSAxICE9PSAwKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwodHlwZW9mIHZhbHVlLCBcIm5vdCBhbiBpbnRlZ2VyXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPiA0Mjk0OTY3Mjk1ID8gdmFsdWUgfCAwIDogdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAvLyBVbnNpZ25lZCAzMmJpdFxuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJ1aW50MzJcIl06XG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcImZpeGVkMzJcIl06XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInIHx8ICh2YWx1ZSA9PT0gdmFsdWUgJiYgdmFsdWUgJSAxICE9PSAwKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwodHlwZW9mIHZhbHVlLCBcIm5vdCBhbiBpbnRlZ2VyXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPCAwID8gdmFsdWUgPj4+IDAgOiB2YWx1ZTtcblxuICAgICAgICAgICAgICAgIC8vIFNpZ25lZCA2NGJpdFxuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJpbnQ2NFwiXTpcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wic2ludDY0XCJdOlxuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJzZml4ZWQ2NFwiXToge1xuICAgICAgICAgICAgICAgICAgICBpZiAoUHJvdG9CdWYuTG9uZylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1rTG9uZyh2YWx1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwodHlwZW9mIHZhbHVlLCBlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsKHR5cGVvZiB2YWx1ZSwgXCJyZXF1aXJlcyBMb25nLmpzXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFVuc2lnbmVkIDY0Yml0XG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcInVpbnQ2NFwiXTpcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wiZml4ZWQ2NFwiXToge1xuICAgICAgICAgICAgICAgICAgICBpZiAoUHJvdG9CdWYuTG9uZylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1rTG9uZyh2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbCh0eXBlb2YgdmFsdWUsIGUubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwodHlwZW9mIHZhbHVlLCBcInJlcXVpcmVzIExvbmcuanNcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQm9vbFxuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJib29sXCJdOlxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnYm9vbGVhbicpXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsKHR5cGVvZiB2YWx1ZSwgXCJub3QgYSBib29sZWFuXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAvLyBGbG9hdFxuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJmbG9hdFwiXTpcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wiZG91YmxlXCJdOlxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwodHlwZW9mIHZhbHVlLCBcIm5vdCBhIG51bWJlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgLy8gTGVuZ3RoLWRlbGltaXRlZCBzdHJpbmdcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wic3RyaW5nXCJdOlxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyAmJiAhKHZhbHVlICYmIHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwodHlwZW9mIHZhbHVlLCBcIm5vdCBhIHN0cmluZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyB2YWx1ZTsgLy8gQ29udmVydCBTdHJpbmcgb2JqZWN0IHRvIHN0cmluZ1xuXG4gICAgICAgICAgICAgICAgLy8gTGVuZ3RoLWRlbGltaXRlZCBieXRlc1xuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJieXRlc1wiXTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKEJ5dGVCdWZmZXIuaXNCeXRlQnVmZmVyKHZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJ5dGVCdWZmZXIud3JhcCh2YWx1ZSwgXCJiYXNlNjRcIik7XG5cbiAgICAgICAgICAgICAgICAvLyBDb25zdGFudCBlbnVtIHZhbHVlXG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcImVudW1cIl06IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlcyA9IHRoaXMucmVzb2x2ZWRUeXBlLmdldENoaWxkcmVuKFByb3RvQnVmLlJlZmxlY3QuRW51bS5WYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVzW2ldLm5hbWUgPT0gdmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlc1tpXS5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlc1tpXS5pZCA9PSB2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVzW2ldLmlkO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN5bnRheCA9PT0gJ3Byb3RvMycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb3RvMzoganVzdCBtYWtlIHN1cmUgaXQncyBhbiBpbnRlZ2VyLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicgfHwgKHZhbHVlID09PSB2YWx1ZSAmJiB2YWx1ZSAlIDEgIT09IDApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwodHlwZW9mIHZhbHVlLCBcIm5vdCBhbiBpbnRlZ2VyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID4gNDI5NDk2NzI5NSB8fCB2YWx1ZSA8IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbCh0eXBlb2YgdmFsdWUsIFwibm90IGluIHJhbmdlIGZvciB1aW50MzJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb3RvMiByZXF1aXJlcyBlbnVtIHZhbHVlcyB0byBiZSB2YWxpZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwodmFsdWUsIFwibm90IGEgdmFsaWQgZW51bSB2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBFbWJlZGRlZCBtZXNzYWdlXG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcImdyb3VwXCJdOlxuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJtZXNzYWdlXCJdOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwodHlwZW9mIHZhbHVlLCBcIm9iamVjdCBleHBlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgdGhpcy5yZXNvbHZlZFR5cGUuY2xhenopXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFByb3RvQnVmLkJ1aWxkZXIuTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWlzbWF0Y2hlZCB0eXBlOiBDb252ZXJ0IHRvIG9iamVjdCAoc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGNvZGVJTy9Qcm90b0J1Zi5qcy9pc3N1ZXMvMTgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoaSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtpXSA9IHZhbHVlW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBvYmo7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gRWxzZSBsZXQncyB0cnkgdG8gY29uc3RydWN0IG9uZSBmcm9tIGEga2V5LXZhbHVlIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICh0aGlzLnJlc29sdmVkVHlwZS5jbGF6eikodmFsdWUpOyAvLyBNYXkgdGhyb3cgZm9yIGEgaHVuZHJlZCBvZiByZWFzb25zXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgbmV2ZXIgZW5kIGhlcmVcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiW0lOVEVSTkFMXSBJbGxlZ2FsIHZhbHVlIGZvciBcIiArIHRoaXMudG9TdHJpbmcodHJ1ZSkgKyBcIjogXCIgKyB2YWx1ZSArIFwiICh1bmRlZmluZWQgdHlwZSBcIiArIHRoaXMudHlwZSArIFwiKVwiKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsY3VsYXRlcyB0aGUgYnl0ZSBsZW5ndGggb2YgYW4gZWxlbWVudCBvbiB0aGUgd2lyZS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGlkIEZpZWxkIG51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IHZhbHVlIEZpZWxkIHZhbHVlXG4gICAgICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IEJ5dGUgbGVuZ3RoXG4gICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgdmFsdWUgY2Fubm90IGJlIGNhbGN1bGF0ZWRcbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgRWxlbWVudFByb3RvdHlwZS5jYWxjdWxhdGVMZW5ndGggPSBmdW5jdGlvbiAoaWQsIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHJldHVybiAwOyAvLyBOb3RoaW5nIHRvIGVuY29kZVxuICAgICAgICAgICAgLy8gVGFnIGhhcyBhbHJlYWR5IGJlZW4gd3JpdHRlblxuICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJpbnQzMlwiXTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlIDwgMCA/IEJ5dGVCdWZmZXIuY2FsY3VsYXRlVmFyaW50NjQodmFsdWUpIDogQnl0ZUJ1ZmZlci5jYWxjdWxhdGVWYXJpbnQzMih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcInVpbnQzMlwiXTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJ5dGVCdWZmZXIuY2FsY3VsYXRlVmFyaW50MzIodmFsdWUpO1xuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJzaW50MzJcIl06XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBCeXRlQnVmZmVyLmNhbGN1bGF0ZVZhcmludDMyKEJ5dGVCdWZmZXIuemlnWmFnRW5jb2RlMzIodmFsdWUpKTtcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wiZml4ZWQzMlwiXTpcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wic2ZpeGVkMzJcIl06XG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcImZsb2F0XCJdOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gNDtcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wiaW50NjRcIl06XG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcInVpbnQ2NFwiXTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJ5dGVCdWZmZXIuY2FsY3VsYXRlVmFyaW50NjQodmFsdWUpO1xuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJzaW50NjRcIl06XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBCeXRlQnVmZmVyLmNhbGN1bGF0ZVZhcmludDY0KEJ5dGVCdWZmZXIuemlnWmFnRW5jb2RlNjQodmFsdWUpKTtcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wiZml4ZWQ2NFwiXTpcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wic2ZpeGVkNjRcIl06XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA4O1xuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJib29sXCJdOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wiZW51bVwiXTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJ5dGVCdWZmZXIuY2FsY3VsYXRlVmFyaW50MzIodmFsdWUpO1xuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJkb3VibGVcIl06XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA4O1xuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJzdHJpbmdcIl06XG4gICAgICAgICAgICAgICAgICAgIG4gPSBCeXRlQnVmZmVyLmNhbGN1bGF0ZVVURjhCeXRlcyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBCeXRlQnVmZmVyLmNhbGN1bGF0ZVZhcmludDMyKG4pICsgbjtcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wiYnl0ZXNcIl06XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5yZW1haW5pbmcoKSA8IDApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIklsbGVnYWwgdmFsdWUgZm9yIFwiICsgdGhpcy50b1N0cmluZyh0cnVlKSArIFwiOiBcIiArIHZhbHVlLnJlbWFpbmluZygpICsgXCIgYnl0ZXMgcmVtYWluaW5nXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQnl0ZUJ1ZmZlci5jYWxjdWxhdGVWYXJpbnQzMih2YWx1ZS5yZW1haW5pbmcoKSkgKyB2YWx1ZS5yZW1haW5pbmcoKTtcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wibWVzc2FnZVwiXTpcbiAgICAgICAgICAgICAgICAgICAgbiA9IHRoaXMucmVzb2x2ZWRUeXBlLmNhbGN1bGF0ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBCeXRlQnVmZmVyLmNhbGN1bGF0ZVZhcmludDMyKG4pICsgbjtcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wiZ3JvdXBcIl06XG4gICAgICAgICAgICAgICAgICAgIG4gPSB0aGlzLnJlc29sdmVkVHlwZS5jYWxjdWxhdGUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbiArIEJ5dGVCdWZmZXIuY2FsY3VsYXRlVmFyaW50MzIoKGlkIDw8IDMpIHwgUHJvdG9CdWYuV0lSRV9UWVBFUy5FTkRHUk9VUCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgbmV2ZXIgZW5kIGhlcmVcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiW0lOVEVSTkFMXSBJbGxlZ2FsIHZhbHVlIHRvIGVuY29kZSBpbiBcIiArIHRoaXMudG9TdHJpbmcodHJ1ZSkgKyBcIjogXCIgKyB2YWx1ZSArIFwiICh1bmtub3duIHR5cGUpXCIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmNvZGVzIGEgdmFsdWUgdG8gdGhlIHNwZWNpZmllZCBidWZmZXIuIERvZXMgbm90IGVuY29kZSB0aGUga2V5LlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gaWQgRmllbGQgbnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgRmllbGQgdmFsdWVcbiAgICAgICAgICogQHBhcmFtIHtCeXRlQnVmZmVyfSBidWZmZXIgQnl0ZUJ1ZmZlciB0byBlbmNvZGUgdG9cbiAgICAgICAgICogQHJldHVybiB7Qnl0ZUJ1ZmZlcn0gVGhlIEJ5dGVCdWZmZXIgZm9yIGNoYWluaW5nXG4gICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgdmFsdWUgY2Fubm90IGJlIGVuY29kZWRcbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgRWxlbWVudFByb3RvdHlwZS5lbmNvZGVWYWx1ZSA9IGZ1bmN0aW9uIChpZCwgdmFsdWUsIGJ1ZmZlcikge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm4gYnVmZmVyOyAvLyBOb3RoaW5nIHRvIGVuY29kZVxuICAgICAgICAgICAgLy8gVGFnIGhhcyBhbHJlYWR5IGJlZW4gd3JpdHRlblxuXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgICAgICAgICAgIC8vIDMyYml0IHNpZ25lZCB2YXJpbnRcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wiaW50MzJcIl06XG4gICAgICAgICAgICAgICAgICAgIC8vIFwiSWYgeW91IHVzZSBpbnQzMiBvciBpbnQ2NCBhcyB0aGUgdHlwZSBmb3IgYSBuZWdhdGl2ZSBudW1iZXIsIHRoZSByZXN1bHRpbmcgdmFyaW50IGlzIGFsd2F5cyB0ZW4gYnl0ZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gbG9uZyBpdCBpcywgZWZmZWN0aXZlbHksIHRyZWF0ZWQgbGlrZSBhIHZlcnkgbGFyZ2UgdW5zaWduZWQgaW50ZWdlci5cIiAoc2VlICMxMjIpXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA8IDApXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIud3JpdGVWYXJpbnQ2NCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlci53cml0ZVZhcmludDMyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAvLyAzMmJpdCB1bnNpZ25lZCB2YXJpbnRcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1widWludDMyXCJdOlxuICAgICAgICAgICAgICAgICAgICBidWZmZXIud3JpdGVWYXJpbnQzMih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgLy8gMzJiaXQgdmFyaW50IHppZy16YWdcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wic2ludDMyXCJdOlxuICAgICAgICAgICAgICAgICAgICBidWZmZXIud3JpdGVWYXJpbnQzMlppZ1phZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgLy8gRml4ZWQgdW5zaWduZWQgMzJiaXRcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wiZml4ZWQzMlwiXTpcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyLndyaXRlVWludDMyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAvLyBGaXhlZCBzaWduZWQgMzJiaXRcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wic2ZpeGVkMzJcIl06XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlci53cml0ZUludDMyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAvLyA2NGJpdCB2YXJpbnQgYXMtaXNcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wiaW50NjRcIl06XG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcInVpbnQ2NFwiXTpcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyLndyaXRlVmFyaW50NjQodmFsdWUpOyAvLyB0aHJvd3NcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAvLyA2NGJpdCB2YXJpbnQgemlnLXphZ1xuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJzaW50NjRcIl06XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlci53cml0ZVZhcmludDY0WmlnWmFnKHZhbHVlKTsgLy8gdGhyb3dzXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgLy8gRml4ZWQgdW5zaWduZWQgNjRiaXRcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wiZml4ZWQ2NFwiXTpcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyLndyaXRlVWludDY0KHZhbHVlKTsgLy8gdGhyb3dzXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgLy8gRml4ZWQgc2lnbmVkIDY0Yml0XG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcInNmaXhlZDY0XCJdOlxuICAgICAgICAgICAgICAgICAgICBidWZmZXIud3JpdGVJbnQ2NCh2YWx1ZSk7IC8vIHRocm93c1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIC8vIEJvb2xcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wiYm9vbFwiXTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIud3JpdGVWYXJpbnQzMih2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAnZmFsc2UnID8gMCA6ICEhdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIud3JpdGVWYXJpbnQzMih2YWx1ZSA/IDEgOiAwKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAvLyBDb25zdGFudCBlbnVtIHZhbHVlXG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcImVudW1cIl06XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlci53cml0ZVZhcmludDMyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAvLyAzMmJpdCBmbG9hdFxuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJmbG9hdFwiXTpcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyLndyaXRlRmxvYXQzMih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgLy8gNjRiaXQgZmxvYXRcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wiZG91YmxlXCJdOlxuICAgICAgICAgICAgICAgICAgICBidWZmZXIud3JpdGVGbG9hdDY0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAvLyBMZW5ndGgtZGVsaW1pdGVkIHN0cmluZ1xuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJzdHJpbmdcIl06XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlci53cml0ZVZTdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIC8vIExlbmd0aC1kZWxpbWl0ZWQgYnl0ZXNcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wiYnl0ZXNcIl06XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5yZW1haW5pbmcoKSA8IDApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIklsbGVnYWwgdmFsdWUgZm9yIFwiICsgdGhpcy50b1N0cmluZyh0cnVlKSArIFwiOiBcIiArIHZhbHVlLnJlbWFpbmluZygpICsgXCIgYnl0ZXMgcmVtYWluaW5nXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldk9mZnNldCA9IHZhbHVlLm9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyLndyaXRlVmFyaW50MzIodmFsdWUucmVtYWluaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICBidWZmZXIuYXBwZW5kKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUub2Zmc2V0ID0gcHJldk9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAvLyBFbWJlZGRlZCBtZXNzYWdlXG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcIm1lc3NhZ2VcIl06XG4gICAgICAgICAgICAgICAgICAgIHZhciBiYiA9IG5ldyBCeXRlQnVmZmVyKCkuTEUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlZFR5cGUuZW5jb2RlKHZhbHVlLCBiYik7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlci53cml0ZVZhcmludDMyKGJiLm9mZnNldCk7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlci5hcHBlbmQoYmIuZmxpcCgpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAvLyBMZWdhY3kgZ3JvdXBcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wiZ3JvdXBcIl06XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZWRUeXBlLmVuY29kZSh2YWx1ZSwgYnVmZmVyKTtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyLndyaXRlVmFyaW50MzIoKGlkIDw8IDMpIHwgUHJvdG9CdWYuV0lSRV9UWVBFUy5FTkRHUk9VUCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG5ldmVyIGVuZCBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiW0lOVEVSTkFMXSBJbGxlZ2FsIHZhbHVlIHRvIGVuY29kZSBpbiBcIiArIHRoaXMudG9TdHJpbmcodHJ1ZSkgKyBcIjogXCIgKyB2YWx1ZSArIFwiICh1bmtub3duIHR5cGUpXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVjb2RlIG9uZSBlbGVtZW50IHZhbHVlIGZyb20gdGhlIHNwZWNpZmllZCBidWZmZXIuXG4gICAgICAgICAqIEBwYXJhbSB7Qnl0ZUJ1ZmZlcn0gYnVmZmVyIEJ5dGVCdWZmZXIgdG8gZGVjb2RlIGZyb21cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHdpcmVUeXBlIFRoZSBmaWVsZCB3aXJlIHR5cGVcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGlkIFRoZSBmaWVsZCBudW1iZXJcbiAgICAgICAgICogQHJldHVybiB7Kn0gRGVjb2RlZCB2YWx1ZVxuICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIGZpZWxkIGNhbm5vdCBiZSBkZWNvZGVkXG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIEVsZW1lbnRQcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24gKGJ1ZmZlciwgd2lyZVR5cGUsIGlkKSB7XG4gICAgICAgICAgICBpZiAod2lyZVR5cGUgIT0gdGhpcy50eXBlLndpcmVUeXBlKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiVW5leHBlY3RlZCB3aXJlIHR5cGUgZm9yIGVsZW1lbnRcIik7XG5cbiAgICAgICAgICAgIHZhciB2YWx1ZSwgbkJ5dGVzO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAvLyAzMmJpdCBzaWduZWQgdmFyaW50XG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcImludDMyXCJdOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVmZmVyLnJlYWRWYXJpbnQzMigpIHwgMDtcblxuICAgICAgICAgICAgICAgIC8vIDMyYml0IHVuc2lnbmVkIHZhcmludFxuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJ1aW50MzJcIl06XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBidWZmZXIucmVhZFZhcmludDMyKCkgPj4+IDA7XG5cbiAgICAgICAgICAgICAgICAvLyAzMmJpdCBzaWduZWQgdmFyaW50IHppZy16YWdcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wic2ludDMyXCJdOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVmZmVyLnJlYWRWYXJpbnQzMlppZ1phZygpIHwgMDtcblxuICAgICAgICAgICAgICAgIC8vIEZpeGVkIDMyYml0IHVuc2lnbmVkXG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcImZpeGVkMzJcIl06XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBidWZmZXIucmVhZFVpbnQzMigpID4+PiAwO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcInNmaXhlZDMyXCJdOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVmZmVyLnJlYWRJbnQzMigpIHwgMDtcblxuICAgICAgICAgICAgICAgIC8vIDY0Yml0IHNpZ25lZCB2YXJpbnRcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wiaW50NjRcIl06XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBidWZmZXIucmVhZFZhcmludDY0KCk7XG5cbiAgICAgICAgICAgICAgICAvLyA2NGJpdCB1bnNpZ25lZCB2YXJpbnRcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1widWludDY0XCJdOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVmZmVyLnJlYWRWYXJpbnQ2NCgpLnRvVW5zaWduZWQoKTtcblxuICAgICAgICAgICAgICAgIC8vIDY0Yml0IHNpZ25lZCB2YXJpbnQgemlnLXphZ1xuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJzaW50NjRcIl06XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBidWZmZXIucmVhZFZhcmludDY0WmlnWmFnKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBGaXhlZCA2NGJpdCB1bnNpZ25lZFxuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJmaXhlZDY0XCJdOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVmZmVyLnJlYWRVaW50NjQoKTtcblxuICAgICAgICAgICAgICAgIC8vIEZpeGVkIDY0Yml0IHNpZ25lZFxuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJzZml4ZWQ2NFwiXTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlci5yZWFkSW50NjQoKTtcblxuICAgICAgICAgICAgICAgIC8vIEJvb2wgdmFyaW50XG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcImJvb2xcIl06XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIWJ1ZmZlci5yZWFkVmFyaW50MzIoKTtcblxuICAgICAgICAgICAgICAgIC8vIENvbnN0YW50IGVudW0gdmFsdWUgKHZhcmludClcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wiZW51bVwiXTpcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBCdWlsZGVyLk1lc3NhZ2Ujc2V0IHdpbGwgYWxyZWFkeSB0aHJvd1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVmZmVyLnJlYWRWYXJpbnQzMigpO1xuXG4gICAgICAgICAgICAgICAgLy8gMzJiaXQgZmxvYXRcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wiZmxvYXRcIl06XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBidWZmZXIucmVhZEZsb2F0KCk7XG5cbiAgICAgICAgICAgICAgICAvLyA2NGJpdCBmbG9hdFxuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJkb3VibGVcIl06XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBidWZmZXIucmVhZERvdWJsZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gTGVuZ3RoLWRlbGltaXRlZCBzdHJpbmdcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wic3RyaW5nXCJdOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVmZmVyLnJlYWRWU3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBMZW5ndGgtZGVsaW1pdGVkIGJ5dGVzXG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcImJ5dGVzXCJdOiB7XG4gICAgICAgICAgICAgICAgICAgIG5CeXRlcyA9IGJ1ZmZlci5yZWFkVmFyaW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1ZmZlci5yZW1haW5pbmcoKSA8IG5CeXRlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiSWxsZWdhbCBudW1iZXIgb2YgYnl0ZXMgZm9yIFwiICsgdGhpcy50b1N0cmluZyh0cnVlKSArIFwiOiBcIiArIG5CeXRlcyArIFwiIHJlcXVpcmVkIGJ1dCBnb3Qgb25seSBcIiArIGJ1ZmZlci5yZW1haW5pbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gYnVmZmVyLmNsb25lKCk7IC8vIE9mZnNldCBhbHJlYWR5IHNldFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5saW1pdCA9IHZhbHVlLm9mZnNldCArIG5CeXRlcztcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyLm9mZnNldCArPSBuQnl0ZXM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBMZW5ndGgtZGVsaW1pdGVkIGVtYmVkZGVkIG1lc3NhZ2VcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wibWVzc2FnZVwiXToge1xuICAgICAgICAgICAgICAgICAgICBuQnl0ZXMgPSBidWZmZXIucmVhZFZhcmludDMyKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc29sdmVkVHlwZS5kZWNvZGUoYnVmZmVyLCBuQnl0ZXMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIExlZ2FjeSBncm91cFxuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJncm91cFwiXTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZWRUeXBlLmRlY29kZShidWZmZXIsIC0xLCBpZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBuZXZlciBlbmQgaGVyZVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJbSU5URVJOQUxdIElsbGVnYWwgZGVjb2RlIHR5cGVcIik7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnZlcnRzIGEgdmFsdWUgZnJvbSBhIHN0cmluZyB0byB0aGUgY2Fub25pY2FsIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgICpcbiAgICAgICAgICogTGVnYWwgb25seSB3aGVuIGlzTWFwS2V5IGlzIHRydWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJucyB7Kn0gVGhlIHZhbHVlXG4gICAgICAgICAqL1xuICAgICAgICBFbGVtZW50UHJvdG90eXBlLnZhbHVlRnJvbVN0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc01hcEtleSkge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwidmFsdWVGcm9tU3RyaW5nKCkgY2FsbGVkIG9uIG5vbi1tYXAta2V5IGVsZW1lbnRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcImludDMyXCJdOlxuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJzaW50MzJcIl06XG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcInNmaXhlZDMyXCJdOlxuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJ1aW50MzJcIl06XG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcImZpeGVkMzJcIl06XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZlcmlmeVZhbHVlKHBhcnNlSW50KHN0cikpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcImludDY0XCJdOlxuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJzaW50NjRcIl06XG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcInNmaXhlZDY0XCJdOlxuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJ1aW50NjRcIl06XG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcImZpeGVkNjRcIl06XG4gICAgICAgICAgICAgICAgICAgIC8vIExvbmctYmFzZWQgZmllbGRzIHN1cHBvcnQgY29udmVyc2lvbnMgZnJvbSBzdHJpbmcgYWxyZWFkeS5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmVyaWZ5VmFsdWUoc3RyKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJib29sXCJdOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyID09PSBcInRydWVcIjtcblxuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJzdHJpbmdcIl06XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZlcmlmeVZhbHVlKHN0cik7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wiYnl0ZXNcIl06XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBCeXRlQnVmZmVyLmZyb21CaW5hcnkoc3RyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29udmVydHMgYSB2YWx1ZSBmcm9tIHRoZSBjYW5vbmljYWwgZWxlbWVudCB0eXBlIHRvIGEgc3RyaW5nLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJdCBzaG91bGQgYmUgdGhlIGNhc2UgdGhhdCBgdmFsdWVGcm9tU3RyaW5nKHZhbHVlVG9TdHJpbmcodmFsKSlgIHJldHVybnNcbiAgICAgICAgICogYSB2YWx1ZSBlcXVpdmFsZW50IHRvIGB2ZXJpZnlWYWx1ZSh2YWwpYCBmb3IgZXZlcnkgbGVnYWwgdmFsdWUgb2YgYHZhbGBcbiAgICAgICAgICogYWNjb3JkaW5nIHRvIHRoaXMgZWxlbWVudCB0eXBlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIG1heSBiZSB1c2VkIHdoZW4gdGhlIGVsZW1lbnQgbXVzdCBiZSBzdG9yZWQgb3IgdXNlZCBhcyBhIHN0cmluZyxcbiAgICAgICAgICogZS5nLiwgYXMgYSBtYXAga2V5IG9uIGFuIE9iamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogTGVnYWwgb25seSB3aGVuIGlzTWFwS2V5IGlzIHRydWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc3RyaW5nIGZvcm0gb2YgdGhlIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgRWxlbWVudFByb3RvdHlwZS52YWx1ZVRvU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNNYXBLZXkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcInZhbHVlVG9TdHJpbmcoKSBjYWxsZWQgb24gbm9uLW1hcC1rZXkgZWxlbWVudFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gUHJvdG9CdWYuVFlQRVNbXCJieXRlc1wiXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZyhcImJpbmFyeVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhbGlhcyBQcm90b0J1Zi5SZWZsZWN0LkVsZW1lbnRcbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgUmVmbGVjdC5FbGVtZW50ID0gRWxlbWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29uc3RydWN0cyBhIG5ldyBNZXNzYWdlLlxuICAgICAgICAgKiBAZXhwb3J0cyBQcm90b0J1Zi5SZWZsZWN0Lk1lc3NhZ2VcbiAgICAgICAgICogQHBhcmFtIHshUHJvdG9CdWYuQnVpbGRlcn0gYnVpbGRlciBCdWlsZGVyIHJlZmVyZW5jZVxuICAgICAgICAgKiBAcGFyYW0geyFQcm90b0J1Zi5SZWZsZWN0Lk5hbWVzcGFjZX0gcGFyZW50IFBhcmVudCBtZXNzYWdlIG9yIG5hbWVzcGFjZVxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBNZXNzYWdlIG5hbWVcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPj19IG9wdGlvbnMgTWVzc2FnZSBvcHRpb25zXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IGlzR3JvdXAgYHRydWVgIGlmIHRoaXMgaXMgYSBsZWdhY3kgZ3JvdXBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmc/fSBzeW50YXggVGhlIHN5bnRheCBsZXZlbCBvZiB0aGlzIGRlZmluaXRpb24gKGUuZy4sIHByb3RvMylcbiAgICAgICAgICogQGNvbnN0cnVjdG9yXG4gICAgICAgICAqIEBleHRlbmRzIFByb3RvQnVmLlJlZmxlY3QuTmFtZXNwYWNlXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgTWVzc2FnZSA9IGZ1bmN0aW9uIChidWlsZGVyLCBwYXJlbnQsIG5hbWUsIG9wdGlvbnMsIGlzR3JvdXAsIHN5bnRheCkge1xuICAgICAgICAgICAgTmFtZXNwYWNlLmNhbGwodGhpcywgYnVpbGRlciwgcGFyZW50LCBuYW1lLCBvcHRpb25zLCBzeW50YXgpO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEBvdmVycmlkZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFwiTWVzc2FnZVwiO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEV4dGVuc2lvbnMgcmFuZ2UuXG4gICAgICAgICAgICAgKiBAdHlwZSB7IUFycmF5LjxudW1iZXI+fHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5leHRlbnNpb25zID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJ1bnRpbWUgbWVzc2FnZSBjbGFzcy5cbiAgICAgICAgICAgICAqIEB0eXBlIHs/ZnVuY3Rpb24obmV3OlByb3RvQnVmLkJ1aWxkZXIuTWVzc2FnZSl9XG4gICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuY2xhenogPSBudWxsO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFdoZXRoZXIgdGhpcyBpcyBhIGxlZ2FjeSBncm91cCBvciBub3QuXG4gICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5pc0dyb3VwID0gISFpc0dyb3VwO1xuXG4gICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGNhY2hlZCBjb2xsZWN0aW9ucyBhcmUgdXNlZCB0byBlZmZpY2llbnRseSBpdGVyYXRlIG92ZXIgb3IgbG9vayB1cCBmaWVsZHMgd2hlbiBkZWNvZGluZy5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWNoZWQgZmllbGRzLlxuICAgICAgICAgICAgICogQHR5cGUgez9BcnJheS48IVByb3RvQnVmLlJlZmxlY3QuTWVzc2FnZS5GaWVsZD59XG4gICAgICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLl9maWVsZHMgPSBudWxsO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhY2hlZCBmaWVsZHMgYnkgaWQuXG4gICAgICAgICAgICAgKiBAdHlwZSB7P09iamVjdC48bnVtYmVyLCFQcm90b0J1Zi5SZWZsZWN0Lk1lc3NhZ2UuRmllbGQ+fVxuICAgICAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5fZmllbGRzQnlJZCA9IG51bGw7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FjaGVkIGZpZWxkcyBieSBuYW1lLlxuICAgICAgICAgICAgICogQHR5cGUgez9PYmplY3QuPHN0cmluZywhUHJvdG9CdWYuUmVmbGVjdC5NZXNzYWdlLkZpZWxkPn1cbiAgICAgICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuX2ZpZWxkc0J5TmFtZSA9IG51bGw7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhbGlhcyBQcm90b0J1Zi5SZWZsZWN0Lk1lc3NhZ2UucHJvdG90eXBlXG4gICAgICAgICAqIEBpbm5lclxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIE1lc3NhZ2VQcm90b3R5cGUgPSBNZXNzYWdlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTmFtZXNwYWNlLnByb3RvdHlwZSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJ1aWxkcyB0aGUgbWVzc2FnZSBhbmQgcmV0dXJucyB0aGUgcnVudGltZSBjb3VudGVycGFydCwgd2hpY2ggaXMgYSBmdWxseSBmdW5jdGlvbmFsIGNsYXNzLlxuICAgICAgICAgKiBAc2VlIFByb3RvQnVmLkJ1aWxkZXIuTWVzc2FnZVxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSByZWJ1aWxkIFdoZXRoZXIgdG8gcmVidWlsZCBvciBub3QsIGRlZmF1bHRzIHRvIGZhbHNlXG4gICAgICAgICAqIEByZXR1cm4ge1Byb3RvQnVmLlJlZmxlY3QuTWVzc2FnZX0gTWVzc2FnZSBjbGFzc1xuICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIG1lc3NhZ2UgY2Fubm90IGJlIGJ1aWx0XG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIE1lc3NhZ2VQcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbiAocmVidWlsZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xhenogJiYgIXJlYnVpbGQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xheno7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgcnVudGltZSBNZXNzYWdlIGNsYXNzIGluIGl0cyBvd24gc2NvcGVcbiAgICAgICAgICAgIHZhciBjbGF6eiA9IChmdW5jdGlvbiAoUHJvdG9CdWYsIFQpIHtcblxuICAgICAgICAgICAgICAgIHZhciBmaWVsZHMgPSBULmdldENoaWxkcmVuKFByb3RvQnVmLlJlZmxlY3QuTWVzc2FnZS5GaWVsZCksXG4gICAgICAgICAgICAgICAgICAgIG9uZW9mcyA9IFQuZ2V0Q2hpbGRyZW4oUHJvdG9CdWYuUmVmbGVjdC5NZXNzYWdlLk9uZU9mKTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgcnVudGltZSBNZXNzYWdlLlxuICAgICAgICAgICAgICAgICAqIEBuYW1lIFByb3RvQnVmLkJ1aWxkZXIuTWVzc2FnZVxuICAgICAgICAgICAgICAgICAqIEBjbGFzcyBCYXJlYm9uZSBvZiBhbGwgcnVudGltZSBtZXNzYWdlcy5cbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0geyFPYmplY3QuPHN0cmluZywqPnxzdHJpbmd9IHZhbHVlcyBQcmVzZXQgdmFsdWVzXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHsuLi5zdHJpbmd9IHZhcl9hcmdzXG4gICAgICAgICAgICAgICAgICogQGNvbnN0cnVjdG9yXG4gICAgICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBtZXNzYWdlIGNhbm5vdCBiZSBjcmVhdGVkXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdmFyIE1lc3NhZ2UgPSBmdW5jdGlvbiAodmFsdWVzLCB2YXJfYXJncykge1xuICAgICAgICAgICAgICAgICAgICBQcm90b0J1Zi5CdWlsZGVyLk1lc3NhZ2UuY2FsbCh0aGlzKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgdmlydHVhbCBvbmVvZiBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBrID0gb25lb2ZzLmxlbmd0aDsgaSA8IGs7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbb25lb2ZzW2ldLm5hbWVdID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGZpZWxkcyBhbmQgc2V0IGRlZmF1bHQgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDAsIGsgPSBmaWVsZHMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmllbGQgPSBmaWVsZHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ZpZWxkLm5hbWVdID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5yZXBlYXRlZCA/IFtdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZpZWxkLm1hcCA/IG5ldyBQcm90b0J1Zi5NYXAoZmllbGQpIDogbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGZpZWxkLnJlcXVpcmVkIHx8IFQuc3ludGF4ID09PSAncHJvdG8zJykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5kZWZhdWx0VmFsdWUgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tmaWVsZC5uYW1lXSA9IGZpZWxkLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGZpZWxkIHZhbHVlcyBmcm9tIGEgdmFsdWVzIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdmFsdWVzICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZXMgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogbm90IF9hbm90aGVyXyBNZXNzYWdlICovICh0eXBlb2YgdmFsdWVzLmVuY29kZSAhPT0gJ2Z1bmN0aW9uJyB8fCB2YWx1ZXMgaW5zdGFuY2VvZiBNZXNzYWdlKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIG5vdCBhIHJlcGVhdGVkIGZpZWxkICovICFBcnJheS5pc0FycmF5KHZhbHVlcykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBub3QgYSBNYXAgKi8gISh2YWx1ZXMgaW5zdGFuY2VvZiBQcm90b0J1Zi5NYXApICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogbm90IGEgQnl0ZUJ1ZmZlciAqLyAhQnl0ZUJ1ZmZlci5pc0J5dGVCdWZmZXIodmFsdWVzKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIG5vdCBhbiBBcnJheUJ1ZmZlciAqLyAhKHZhbHVlcyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIG5vdCBhIExvbmcgKi8gIShQcm90b0J1Zi5Mb25nICYmIHZhbHVlcyBpbnN0YW5jZW9mIFByb3RvQnVmLkxvbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHZhbHVlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgLy8gU2V0IGZpZWxkIHZhbHVlcyBmcm9tIGFyZ3VtZW50cywgaW4gZGVjbGFyYXRpb24gb3JkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwLCBrID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGs7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodmFsdWUgPSBhcmd1bWVudHNbaV0pICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldChmaWVsZHNbaV0ubmFtZSwgdmFsdWUpOyAvLyBNYXkgdGhyb3dcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBAYWxpYXMgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlLnByb3RvdHlwZVxuICAgICAgICAgICAgICAgICAqIEBpbm5lclxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHZhciBNZXNzYWdlUHJvdG90eXBlID0gTWVzc2FnZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFByb3RvQnVmLkJ1aWxkZXIuTWVzc2FnZS5wcm90b3R5cGUpO1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogQWRkcyBhIHZhbHVlIHRvIGEgcmVwZWF0ZWQgZmllbGQuXG4gICAgICAgICAgICAgICAgICogQG5hbWUgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlI2FkZFxuICAgICAgICAgICAgICAgICAqIEBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgRmllbGQgbmFtZVxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVmFsdWUgdG8gYWRkXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHtib29sZWFuPX0gbm9Bc3NlcnQgV2hldGhlciB0byBhc3NlcnQgdGhlIHZhbHVlIG9yIG5vdCAoYXNzZXJ0cyBieSBkZWZhdWx0KVxuICAgICAgICAgICAgICAgICAqIEByZXR1cm5zIHshUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlfSB0aGlzXG4gICAgICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSB2YWx1ZSBjYW5ub3QgYmUgYWRkZWRcbiAgICAgICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgTWVzc2FnZVByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgbm9Bc3NlcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpZWxkID0gVC5fZmllbGRzQnlOYW1lW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9Bc3NlcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZmllbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IodGhpcyArIFwiI1wiICsga2V5ICsgXCIgaXMgdW5kZWZpbmVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoZmllbGQgaW5zdGFuY2VvZiBQcm90b0J1Zi5SZWZsZWN0Lk1lc3NhZ2UuRmllbGQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKHRoaXMgKyBcIiNcIiArIGtleSArIFwiIGlzIG5vdCBhIGZpZWxkOiBcIiArIGZpZWxkLnRvU3RyaW5nKHRydWUpKTsgLy8gTWF5IHRocm93IGlmIGl0J3MgYW4gZW51bSBvciBlbWJlZGRlZCBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpZWxkLnJlcGVhdGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKHRoaXMgKyBcIiNcIiArIGtleSArIFwiIGlzIG5vdCBhIHJlcGVhdGVkIGZpZWxkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBmaWVsZC52ZXJpZnlWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNba2V5XSA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBBZGRzIGEgdmFsdWUgdG8gYSByZXBlYXRlZCBmaWVsZC4gVGhpcyBpcyBhbiBhbGlhcyBmb3Ige0BsaW5rIFByb3RvQnVmLkJ1aWxkZXIuTWVzc2FnZSNhZGR9LlxuICAgICAgICAgICAgICAgICAqIEBuYW1lIFByb3RvQnVmLkJ1aWxkZXIuTWVzc2FnZSMkYWRkXG4gICAgICAgICAgICAgICAgICogQGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBGaWVsZCBuYW1lXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHsqfSB2YWx1ZSBWYWx1ZSB0byBhZGRcbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBub0Fzc2VydCBXaGV0aGVyIHRvIGFzc2VydCB0aGUgdmFsdWUgb3Igbm90IChhc3NlcnRzIGJ5IGRlZmF1bHQpXG4gICAgICAgICAgICAgICAgICogQHJldHVybnMgeyFQcm90b0J1Zi5CdWlsZGVyLk1lc3NhZ2V9IHRoaXNcbiAgICAgICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHZhbHVlIGNhbm5vdCBiZSBhZGRlZFxuICAgICAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBNZXNzYWdlUHJvdG90eXBlLiRhZGQgPSBNZXNzYWdlUHJvdG90eXBlLmFkZDtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFNldHMgYSBmaWVsZCdzIHZhbHVlLlxuICAgICAgICAgICAgICAgICAqIEBuYW1lIFByb3RvQnVmLkJ1aWxkZXIuTWVzc2FnZSNzZXRcbiAgICAgICAgICAgICAgICAgKiBAZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ3whT2JqZWN0LjxzdHJpbmcsKj59IGtleU9yT2JqIFN0cmluZyBrZXkgb3IgcGxhaW4gb2JqZWN0IGhvbGRpbmcgbXVsdGlwbGUgdmFsdWVzXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHsoKnxib29sZWFuKT19IHZhbHVlIFZhbHVlIHRvIHNldCBpZiBrZXkgaXMgYSBzdHJpbmcsIG90aGVyd2lzZSBvbWl0dGVkXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHtib29sZWFuPX0gbm9Bc3NlcnQgV2hldGhlciB0byBub3QgYXNzZXJ0IGZvciBhbiBhY3R1YWwgZmllbGQgLyBwcm9wZXIgdmFsdWUgdHlwZSwgZGVmYXVsdHMgdG8gYGZhbHNlYFxuICAgICAgICAgICAgICAgICAqIEByZXR1cm5zIHshUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlfSB0aGlzXG4gICAgICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSB2YWx1ZSBjYW5ub3QgYmUgc2V0XG4gICAgICAgICAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIE1lc3NhZ2VQcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleU9yT2JqLCB2YWx1ZSwgbm9Bc3NlcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleU9yT2JqICYmIHR5cGVvZiBrZXlPck9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vQXNzZXJ0ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpa2V5IGluIGtleU9yT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdmlydHVhbCBvbmVvZiBmaWVsZCAtIGRvbid0IHNldCB0aGVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXlPck9iai5oYXNPd25Qcm9wZXJ0eShpa2V5KSAmJiB0eXBlb2YgKHZhbHVlID0ga2V5T3JPYmpbaWtleV0pICE9PSAndW5kZWZpbmVkJyAmJiBULl9vbmVvZnNCeU5hbWVbaWtleV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KGlrZXksIHZhbHVlLCBub0Fzc2VydCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZmllbGQgPSBULl9maWVsZHNCeU5hbWVba2V5T3JPYmpdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpZWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKHRoaXMgKyBcIiNcIiArIGtleU9yT2JqICsgXCIgaXMgbm90IGEgZmllbGQ6IHVuZGVmaW5lZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGZpZWxkIGluc3RhbmNlb2YgUHJvdG9CdWYuUmVmbGVjdC5NZXNzYWdlLkZpZWxkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcih0aGlzICsgXCIjXCIgKyBrZXlPck9iaiArIFwiIGlzIG5vdCBhIGZpZWxkOiBcIiArIGZpZWxkLnRvU3RyaW5nKHRydWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbZmllbGQubmFtZV0gPSAodmFsdWUgPSBmaWVsZC52ZXJpZnlWYWx1ZSh2YWx1ZSkpOyAvLyBNYXkgdGhyb3dcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tleU9yT2JqXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQgJiYgZmllbGQub25lb2YpIHsgLy8gRmllbGQgaXMgcGFydCBvZiBhbiBPbmVPZiAobm90IGEgdmlydHVhbCBPbmVPZiBmaWVsZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50RmllbGQgPSB0aGlzW2ZpZWxkLm9uZW9mLm5hbWVdOyAvLyBWaXJ0dWFsIGZpZWxkIHJlZmVyZW5jZXMgY3VycmVudGx5IHNldCBmaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRGaWVsZCAhPT0gbnVsbCAmJiBjdXJyZW50RmllbGQgIT09IGZpZWxkLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbY3VycmVudEZpZWxkXSA9IG51bGw7IC8vIENsZWFyIGN1cnJlbnRseSBzZXQgZmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ZpZWxkLm9uZW9mLm5hbWVdID0gZmllbGQubmFtZTsgLy8gUG9pbnQgdmlydHVhbCBmaWVsZCBhdCB0aGlzIGZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKC8qIHZhbHVlID09PSBudWxsICYmICovY3VycmVudEZpZWxkID09PSBrZXlPck9iailcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ZpZWxkLm9uZW9mLm5hbWVdID0gbnVsbDsgLy8gQ2xlYXIgdmlydHVhbCBmaWVsZCAoY3VycmVudCBmaWVsZCBleHBsaWNpdGx5IGNsZWFyZWQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFNldHMgYSBmaWVsZCdzIHZhbHVlLiBUaGlzIGlzIGFuIGFsaWFzIGZvciBbQGxpbmsgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlI3NldH0uXG4gICAgICAgICAgICAgICAgICogQG5hbWUgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlIyRzZXRcbiAgICAgICAgICAgICAgICAgKiBAZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ3whT2JqZWN0LjxzdHJpbmcsKj59IGtleU9yT2JqIFN0cmluZyBrZXkgb3IgcGxhaW4gb2JqZWN0IGhvbGRpbmcgbXVsdGlwbGUgdmFsdWVzXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHsoKnxib29sZWFuKT19IHZhbHVlIFZhbHVlIHRvIHNldCBpZiBrZXkgaXMgYSBzdHJpbmcsIG90aGVyd2lzZSBvbWl0dGVkXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHtib29sZWFuPX0gbm9Bc3NlcnQgV2hldGhlciB0byBub3QgYXNzZXJ0IHRoZSB2YWx1ZSwgZGVmYXVsdHMgdG8gYGZhbHNlYFxuICAgICAgICAgICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgdmFsdWUgY2Fubm90IGJlIHNldFxuICAgICAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBNZXNzYWdlUHJvdG90eXBlLiRzZXQgPSBNZXNzYWdlUHJvdG90eXBlLnNldDtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEdldHMgYSBmaWVsZCdzIHZhbHVlLlxuICAgICAgICAgICAgICAgICAqIEBuYW1lIFByb3RvQnVmLkJ1aWxkZXIuTWVzc2FnZSNnZXRcbiAgICAgICAgICAgICAgICAgKiBAZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEtleVxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IG5vQXNzZXJ0IFdoZXRoZXIgdG8gbm90IGFzc2VydCBmb3IgYW4gYWN0dWFsIGZpZWxkLCBkZWZhdWx0cyB0byBgZmFsc2VgXG4gICAgICAgICAgICAgICAgICogQHJldHVybiB7Kn0gVmFsdWVcbiAgICAgICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlcmUgaXMgbm8gc3VjaCBmaWVsZFxuICAgICAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBNZXNzYWdlUHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXksIG5vQXNzZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub0Fzc2VydClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZCA9IFQuX2ZpZWxkc0J5TmFtZVtrZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWZpZWxkIHx8ICEoZmllbGQgaW5zdGFuY2VvZiBQcm90b0J1Zi5SZWZsZWN0Lk1lc3NhZ2UuRmllbGQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IodGhpcyArIFwiI1wiICsga2V5ICsgXCIgaXMgbm90IGEgZmllbGQ6IHVuZGVmaW5lZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoZmllbGQgaW5zdGFuY2VvZiBQcm90b0J1Zi5SZWZsZWN0Lk1lc3NhZ2UuRmllbGQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IodGhpcyArIFwiI1wiICsga2V5ICsgXCIgaXMgbm90IGEgZmllbGQ6IFwiICsgZmllbGQudG9TdHJpbmcodHJ1ZSkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tmaWVsZC5uYW1lXTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogR2V0cyBhIGZpZWxkJ3MgdmFsdWUuIFRoaXMgaXMgYW4gYWxpYXMgZm9yIHtAbGluayBQcm90b0J1Zi5CdWlsZGVyLk1lc3NhZ2UjJGdldH0uXG4gICAgICAgICAgICAgICAgICogQG5hbWUgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlIyRnZXRcbiAgICAgICAgICAgICAgICAgKiBAZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEtleVxuICAgICAgICAgICAgICAgICAqIEByZXR1cm4geyp9IFZhbHVlXG4gICAgICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZXJlIGlzIG5vIHN1Y2ggZmllbGRcbiAgICAgICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgTWVzc2FnZVByb3RvdHlwZS4kZ2V0ID0gTWVzc2FnZVByb3RvdHlwZS5nZXQ7XG5cbiAgICAgICAgICAgICAgICAvLyBHZXR0ZXJzIGFuZCBzZXR0ZXJzXG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmllbGQgPSBmaWVsZHNbaV07XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vIHNldHRlcnMgZm9yIGV4dGVuc2lvbiBmaWVsZHMgYXMgdGhlc2UgYXJlIG5hbWVkIGJ5IHRoZWlyIGZxblxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQgaW5zdGFuY2VvZiBQcm90b0J1Zi5SZWZsZWN0Lk1lc3NhZ2UuRXh0ZW5zaW9uRmllbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoVC5idWlsZGVyLm9wdGlvbnNbJ3BvcHVsYXRlQWNjZXNzb3JzJ10pXG4gICAgICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0L2dldFtTb21lVmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIE5hbWUgPSBmaWVsZC5vcmlnaW5hbE5hbWUucmVwbGFjZSgvKF9bYS16QS1aXSkvZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaC50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoJ18nLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmFtZSA9IE5hbWUuc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBOYW1lLnN1YnN0cmluZygxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldC9nZXRfW3NvbWVfdmFsdWVdIEZJWE1FOiBEbyB3ZSByZWFsbHkgbmVlZCB0aGVzZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGZpZWxkLm9yaWdpbmFsTmFtZS5yZXBsYWNlKC8oW0EtWl0pL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJfXCIgKyBtYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFRoZSBjdXJyZW50IGZpZWxkJ3MgdW5ib3VuZCBzZXR0ZXIgZnVuY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IG5vQXNzZXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHJldHVybnMgeyFQcm90b0J1Zi5CdWlsZGVyLk1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGlubmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNldHRlciA9IGZ1bmN0aW9uICh2YWx1ZSwgbm9Bc3NlcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tmaWVsZC5uYW1lXSA9IG5vQXNzZXJ0ID8gdmFsdWUgOiBmaWVsZC52ZXJpZnlWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBUaGUgY3VycmVudCBmaWVsZCdzIHVuYm91bmQgZ2V0dGVyIGZ1bmN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBpbm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBnZXR0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2ZpZWxkLm5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoVC5nZXRDaGlsZChcInNldFwiICsgTmFtZSkgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBTZXRzIGEgdmFsdWUuIFRoaXMgbWV0aG9kIGlzIHByZXNlbnQgZm9yIGVhY2ggZmllbGQsIGJ1dCBvbmx5IGlmIHRoZXJlIGlzIG5vIG5hbWUgY29uZmxpY3Qgd2l0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiAgYW5vdGhlciBmaWVsZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG5hbWUgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlI3NldFtTb21lRmllbGRdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFZhbHVlIHRvIHNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBub0Fzc2VydCBXaGV0aGVyIHRvIG5vdCBhc3NlcnQgdGhlIHZhbHVlLCBkZWZhdWx0cyB0byBgZmFsc2VgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEByZXR1cm5zIHshUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlfSB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBhYnN0cmFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHZhbHVlIGNhbm5vdCBiZSBzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VQcm90b3R5cGVbXCJzZXRcIiArIE5hbWVdID0gc2V0dGVyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFQuZ2V0Q2hpbGQoXCJzZXRfXCIgKyBuYW1lKSA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFNldHMgYSB2YWx1ZS4gVGhpcyBtZXRob2QgaXMgcHJlc2VudCBmb3IgZWFjaCBmaWVsZCwgYnV0IG9ubHkgaWYgdGhlcmUgaXMgbm8gbmFtZSBjb25mbGljdCB3aXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqICBhbm90aGVyIGZpZWxkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbmFtZSBQcm90b0J1Zi5CdWlsZGVyLk1lc3NhZ2Ujc2V0X1tzb21lX2ZpZWxkXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHsqfSB2YWx1ZSBWYWx1ZSB0byBzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHtib29sZWFuPX0gbm9Bc3NlcnQgV2hldGhlciB0byBub3QgYXNzZXJ0IHRoZSB2YWx1ZSwgZGVmYXVsdHMgdG8gYGZhbHNlYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAcmV0dXJucyB7IVByb3RvQnVmLkJ1aWxkZXIuTWVzc2FnZX0gdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAYWJzdHJhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSB2YWx1ZSBjYW5ub3QgYmUgc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlUHJvdG90eXBlW1wic2V0X1wiICsgbmFtZV0gPSBzZXR0ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoVC5nZXRDaGlsZChcImdldFwiICsgTmFtZSkgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBHZXRzIGEgdmFsdWUuIFRoaXMgbWV0aG9kIGlzIHByZXNlbnQgZm9yIGVhY2ggZmllbGQsIGJ1dCBvbmx5IGlmIHRoZXJlIGlzIG5vIG5hbWUgY29uZmxpY3Qgd2l0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiAgYW5vdGhlciBmaWVsZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG5hbWUgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlI2dldFtTb21lRmllbGRdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAYWJzdHJhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHJldHVybiB7Kn0gVGhlIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlUHJvdG90eXBlW1wiZ2V0XCIgKyBOYW1lXSA9IGdldHRlcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChULmdldENoaWxkKFwiZ2V0X1wiICsgbmFtZSkgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBHZXRzIGEgdmFsdWUuIFRoaXMgbWV0aG9kIGlzIHByZXNlbnQgZm9yIGVhY2ggZmllbGQsIGJ1dCBvbmx5IGlmIHRoZXJlIGlzIG5vIG5hbWUgY29uZmxpY3Qgd2l0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiAgYW5vdGhlciBmaWVsZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG5hbWUgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlI2dldF9bc29tZV9maWVsZF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEByZXR1cm4geyp9IFRoZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAYWJzdHJhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VQcm90b3R5cGVbXCJnZXRfXCIgKyBuYW1lXSA9IGdldHRlcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSkoZmllbGQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEVuLS9kZWNvZGluZ1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRW5jb2RlcyB0aGUgbWVzc2FnZS5cbiAgICAgICAgICAgICAgICAgKiBAbmFtZSBQcm90b0J1Zi5CdWlsZGVyLk1lc3NhZ2UjJGVuY29kZVxuICAgICAgICAgICAgICAgICAqIEBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7KCFCeXRlQnVmZmVyfGJvb2xlYW4pPX0gYnVmZmVyIEJ5dGVCdWZmZXIgdG8gZW5jb2RlIHRvLiBXaWxsIGNyZWF0ZSBhIG5ldyBvbmUgYW5kIGZsaXAgaXQgaWYgb21pdHRlZC5cbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBub1ZlcmlmeSBXaGV0aGVyIHRvIG5vdCB2ZXJpZnkgZmllbGQgdmFsdWVzLCBkZWZhdWx0cyB0byBgZmFsc2VgXG4gICAgICAgICAgICAgICAgICogQHJldHVybiB7IUJ5dGVCdWZmZXJ9IEVuY29kZWQgbWVzc2FnZSBhcyBhIEJ5dGVCdWZmZXJcbiAgICAgICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIG1lc3NhZ2UgY2Fubm90IGJlIGVuY29kZWQgb3IgaWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nLiBUaGUgbGF0ZXIgc3RpbGxcbiAgICAgICAgICAgICAgICAgKiAgcmV0dXJucyB0aGUgZW5jb2RlZCBCeXRlQnVmZmVyIGluIHRoZSBgZW5jb2RlZGAgcHJvcGVydHkgb24gdGhlIGVycm9yLlxuICAgICAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAgICAgKiBAc2VlIFByb3RvQnVmLkJ1aWxkZXIuTWVzc2FnZSNlbmNvZGU2NFxuICAgICAgICAgICAgICAgICAqIEBzZWUgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlI2VuY29kZUhleFxuICAgICAgICAgICAgICAgICAqIEBzZWUgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlI2VuY29kZUFCXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgTWVzc2FnZVByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbiAoYnVmZmVyLCBub1ZlcmlmeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJ1ZmZlciA9PT0gJ2Jvb2xlYW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9WZXJpZnkgPSBidWZmZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNOZXcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFidWZmZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgPSBuZXcgQnl0ZUJ1ZmZlcigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTmV3ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlID0gYnVmZmVyLmxpdHRsZUVuZGlhbjtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFQuZW5jb2RlKHRoaXMsIGJ1ZmZlci5MRSgpLCBub1ZlcmlmeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGlzTmV3ID8gYnVmZmVyLmZsaXAoKSA6IGJ1ZmZlcikuTEUobGUpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIuTEUobGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgKGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEVuY29kZXMgYSBtZXNzYWdlIHVzaW5nIHRoZSBzcGVjaWZpZWQgZGF0YSBwYXlsb2FkLlxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7IU9iamVjdC48c3RyaW5nLCo+fSBkYXRhIERhdGEgcGF5bG9hZFxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7KCFCeXRlQnVmZmVyfGJvb2xlYW4pPX0gYnVmZmVyIEJ5dGVCdWZmZXIgdG8gZW5jb2RlIHRvLiBXaWxsIGNyZWF0ZSBhIG5ldyBvbmUgYW5kIGZsaXAgaXQgaWYgb21pdHRlZC5cbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBub1ZlcmlmeSBXaGV0aGVyIHRvIG5vdCB2ZXJpZnkgZmllbGQgdmFsdWVzLCBkZWZhdWx0cyB0byBgZmFsc2VgXG4gICAgICAgICAgICAgICAgICogQHJldHVybiB7IUJ5dGVCdWZmZXJ9IEVuY29kZWQgbWVzc2FnZSBhcyBhIEJ5dGVCdWZmZXJcbiAgICAgICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgTWVzc2FnZS5lbmNvZGUgPSBmdW5jdGlvbiAoZGF0YSwgYnVmZmVyLCBub1ZlcmlmeSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE1lc3NhZ2UoZGF0YSkuZW5jb2RlKGJ1ZmZlciwgbm9WZXJpZnkpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBDYWxjdWxhdGVzIHRoZSBieXRlIGxlbmd0aCBvZiB0aGUgbWVzc2FnZS5cbiAgICAgICAgICAgICAgICAgKiBAbmFtZSBQcm90b0J1Zi5CdWlsZGVyLk1lc3NhZ2UjY2FsY3VsYXRlXG4gICAgICAgICAgICAgICAgICogQGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICogQHJldHVybnMge251bWJlcn0gQnl0ZSBsZW5ndGhcbiAgICAgICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIG1lc3NhZ2UgY2Fubm90IGJlIGNhbGN1bGF0ZWQgb3IgaWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nLlxuICAgICAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBNZXNzYWdlUHJvdG90eXBlLmNhbGN1bGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFQuY2FsY3VsYXRlKHRoaXMpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBFbmNvZGVzIHRoZSB2YXJpbnQzMiBsZW5ndGgtZGVsaW1pdGVkIG1lc3NhZ2UuXG4gICAgICAgICAgICAgICAgICogQG5hbWUgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlI2VuY29kZURlbGltaXRlZFxuICAgICAgICAgICAgICAgICAqIEBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7KCFCeXRlQnVmZmVyfGJvb2xlYW4pPX0gYnVmZmVyIEJ5dGVCdWZmZXIgdG8gZW5jb2RlIHRvLiBXaWxsIGNyZWF0ZSBhIG5ldyBvbmUgYW5kIGZsaXAgaXQgaWYgb21pdHRlZC5cbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBub1ZlcmlmeSBXaGV0aGVyIHRvIG5vdCB2ZXJpZnkgZmllbGQgdmFsdWVzLCBkZWZhdWx0cyB0byBgZmFsc2VgXG4gICAgICAgICAgICAgICAgICogQHJldHVybiB7IUJ5dGVCdWZmZXJ9IEVuY29kZWQgbWVzc2FnZSBhcyBhIEJ5dGVCdWZmZXJcbiAgICAgICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIG1lc3NhZ2UgY2Fubm90IGJlIGVuY29kZWQgb3IgaWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nLiBUaGUgbGF0ZXIgc3RpbGxcbiAgICAgICAgICAgICAgICAgKiAgcmV0dXJucyB0aGUgZW5jb2RlZCBCeXRlQnVmZmVyIGluIHRoZSBgZW5jb2RlZGAgcHJvcGVydHkgb24gdGhlIGVycm9yLlxuICAgICAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBNZXNzYWdlUHJvdG90eXBlLmVuY29kZURlbGltaXRlZCA9IGZ1bmN0aW9uIChidWZmZXIsIG5vVmVyaWZ5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpc05ldyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWJ1ZmZlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciA9IG5ldyBCeXRlQnVmZmVyKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOZXcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZW5jID0gbmV3IEJ5dGVCdWZmZXIoKS5MRSgpO1xuICAgICAgICAgICAgICAgICAgICBULmVuY29kZSh0aGlzLCBlbmMsIG5vVmVyaWZ5KS5mbGlwKCk7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlci53cml0ZVZhcmludDMyKGVuYy5yZW1haW5pbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlci5hcHBlbmQoZW5jKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzTmV3ID8gYnVmZmVyLmZsaXAoKSA6IGJ1ZmZlcjtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRGlyZWN0bHkgZW5jb2RlcyB0aGUgbWVzc2FnZSB0byBhbiBBcnJheUJ1ZmZlci5cbiAgICAgICAgICAgICAgICAgKiBAbmFtZSBQcm90b0J1Zi5CdWlsZGVyLk1lc3NhZ2UjZW5jb2RlQUJcbiAgICAgICAgICAgICAgICAgKiBAZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgKiBAcmV0dXJuIHtBcnJheUJ1ZmZlcn0gRW5jb2RlZCBtZXNzYWdlIGFzIEFycmF5QnVmZmVyXG4gICAgICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBtZXNzYWdlIGNhbm5vdCBiZSBlbmNvZGVkIG9yIGlmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZy4gVGhlIGxhdGVyIHN0aWxsXG4gICAgICAgICAgICAgICAgICogIHJldHVybnMgdGhlIGVuY29kZWQgQXJyYXlCdWZmZXIgaW4gdGhlIGBlbmNvZGVkYCBwcm9wZXJ0eSBvbiB0aGUgZXJyb3IuXG4gICAgICAgICAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIE1lc3NhZ2VQcm90b3R5cGUuZW5jb2RlQUIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGUoKS50b0FycmF5QnVmZmVyKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlW1wiZW5jb2RlZFwiXSkgZVtcImVuY29kZWRcIl0gPSBlW1wiZW5jb2RlZFwiXS50b0FycmF5QnVmZmVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogUmV0dXJucyB0aGUgbWVzc2FnZSBhcyBhbiBBcnJheUJ1ZmZlci4gVGhpcyBpcyBhbiBhbGlhcyBmb3Ige0BsaW5rIFByb3RvQnVmLkJ1aWxkZXIuTWVzc2FnZSNlbmNvZGVBQn0uXG4gICAgICAgICAgICAgICAgICogQG5hbWUgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlI3RvQXJyYXlCdWZmZXJcbiAgICAgICAgICAgICAgICAgKiBAZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgKiBAcmV0dXJuIHtBcnJheUJ1ZmZlcn0gRW5jb2RlZCBtZXNzYWdlIGFzIEFycmF5QnVmZmVyXG4gICAgICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBtZXNzYWdlIGNhbm5vdCBiZSBlbmNvZGVkIG9yIGlmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZy4gVGhlIGxhdGVyIHN0aWxsXG4gICAgICAgICAgICAgICAgICogIHJldHVybnMgdGhlIGVuY29kZWQgQXJyYXlCdWZmZXIgaW4gdGhlIGBlbmNvZGVkYCBwcm9wZXJ0eSBvbiB0aGUgZXJyb3IuXG4gICAgICAgICAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIE1lc3NhZ2VQcm90b3R5cGUudG9BcnJheUJ1ZmZlciA9IE1lc3NhZ2VQcm90b3R5cGUuZW5jb2RlQUI7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBEaXJlY3RseSBlbmNvZGVzIHRoZSBtZXNzYWdlIHRvIGEgbm9kZSBCdWZmZXIuXG4gICAgICAgICAgICAgICAgICogQG5hbWUgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlI2VuY29kZU5CXG4gICAgICAgICAgICAgICAgICogQGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICogQHJldHVybiB7IUJ1ZmZlcn1cbiAgICAgICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIG1lc3NhZ2UgY2Fubm90IGJlIGVuY29kZWQsIG5vdCBydW5uaW5nIHVuZGVyIG5vZGUuanMgb3IgaWYgcmVxdWlyZWQgZmllbGRzIGFyZVxuICAgICAgICAgICAgICAgICAqICBtaXNzaW5nLiBUaGUgbGF0ZXIgc3RpbGwgcmV0dXJucyB0aGUgZW5jb2RlZCBub2RlIEJ1ZmZlciBpbiB0aGUgYGVuY29kZWRgIHByb3BlcnR5IG9uIHRoZSBlcnJvci5cbiAgICAgICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgTWVzc2FnZVByb3RvdHlwZS5lbmNvZGVOQiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVuY29kZSgpLnRvQnVmZmVyKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlW1wiZW5jb2RlZFwiXSkgZVtcImVuY29kZWRcIl0gPSBlW1wiZW5jb2RlZFwiXS50b0J1ZmZlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgKGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFJldHVybnMgdGhlIG1lc3NhZ2UgYXMgYSBub2RlIEJ1ZmZlci4gVGhpcyBpcyBhbiBhbGlhcyBmb3Ige0BsaW5rIFByb3RvQnVmLkJ1aWxkZXIuTWVzc2FnZSNlbmNvZGVOQn0uXG4gICAgICAgICAgICAgICAgICogQG5hbWUgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlI3RvQnVmZmVyXG4gICAgICAgICAgICAgICAgICogQGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICogQHJldHVybiB7IUJ1ZmZlcn1cbiAgICAgICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIG1lc3NhZ2UgY2Fubm90IGJlIGVuY29kZWQgb3IgaWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nLiBUaGUgbGF0ZXIgc3RpbGxcbiAgICAgICAgICAgICAgICAgKiAgcmV0dXJucyB0aGUgZW5jb2RlZCBub2RlIEJ1ZmZlciBpbiB0aGUgYGVuY29kZWRgIHByb3BlcnR5IG9uIHRoZSBlcnJvci5cbiAgICAgICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgTWVzc2FnZVByb3RvdHlwZS50b0J1ZmZlciA9IE1lc3NhZ2VQcm90b3R5cGUuZW5jb2RlTkI7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBEaXJlY3RseSBlbmNvZGVzIHRoZSBtZXNzYWdlIHRvIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nLlxuICAgICAgICAgICAgICAgICAqIEBuYW1lIFByb3RvQnVmLkJ1aWxkZXIuTWVzc2FnZSNlbmNvZGU2NFxuICAgICAgICAgICAgICAgICAqIEBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gQmFzZTY0IGVuY29kZWQgc3RyaW5nXG4gICAgICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSB1bmRlcmx5aW5nIGJ1ZmZlciBjYW5ub3QgYmUgZW5jb2RlZCBvciBpZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmcuIFRoZSBsYXRlclxuICAgICAgICAgICAgICAgICAqICBzdGlsbCByZXR1cm5zIHRoZSBlbmNvZGVkIGJhc2U2NCBzdHJpbmcgaW4gdGhlIGBlbmNvZGVkYCBwcm9wZXJ0eSBvbiB0aGUgZXJyb3IuXG4gICAgICAgICAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIE1lc3NhZ2VQcm90b3R5cGUuZW5jb2RlNjQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGUoKS50b0Jhc2U2NCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZVtcImVuY29kZWRcIl0pIGVbXCJlbmNvZGVkXCJdID0gZVtcImVuY29kZWRcIl0udG9CYXNlNjQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IChlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBSZXR1cm5zIHRoZSBtZXNzYWdlIGFzIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nLiBUaGlzIGlzIGFuIGFsaWFzIGZvciB7QGxpbmsgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlI2VuY29kZTY0fS5cbiAgICAgICAgICAgICAgICAgKiBAbmFtZSBQcm90b0J1Zi5CdWlsZGVyLk1lc3NhZ2UjdG9CYXNlNjRcbiAgICAgICAgICAgICAgICAgKiBAZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IEJhc2U2NCBlbmNvZGVkIHN0cmluZ1xuICAgICAgICAgICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgbWVzc2FnZSBjYW5ub3QgYmUgZW5jb2RlZCBvciBpZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmcuIFRoZSBsYXRlciBzdGlsbFxuICAgICAgICAgICAgICAgICAqICByZXR1cm5zIHRoZSBlbmNvZGVkIGJhc2U2NCBzdHJpbmcgaW4gdGhlIGBlbmNvZGVkYCBwcm9wZXJ0eSBvbiB0aGUgZXJyb3IuXG4gICAgICAgICAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIE1lc3NhZ2VQcm90b3R5cGUudG9CYXNlNjQgPSBNZXNzYWdlUHJvdG90eXBlLmVuY29kZTY0O1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRGlyZWN0bHkgZW5jb2RlcyB0aGUgbWVzc2FnZSB0byBhIGhleCBlbmNvZGVkIHN0cmluZy5cbiAgICAgICAgICAgICAgICAgKiBAbmFtZSBQcm90b0J1Zi5CdWlsZGVyLk1lc3NhZ2UjZW5jb2RlSGV4XG4gICAgICAgICAgICAgICAgICogQGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBIZXggZW5jb2RlZCBzdHJpbmdcbiAgICAgICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHVuZGVybHlpbmcgYnVmZmVyIGNhbm5vdCBiZSBlbmNvZGVkIG9yIGlmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZy4gVGhlIGxhdGVyXG4gICAgICAgICAgICAgICAgICogIHN0aWxsIHJldHVybnMgdGhlIGVuY29kZWQgaGV4IHN0cmluZyBpbiB0aGUgYGVuY29kZWRgIHByb3BlcnR5IG9uIHRoZSBlcnJvci5cbiAgICAgICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgTWVzc2FnZVByb3RvdHlwZS5lbmNvZGVIZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGUoKS50b0hleCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZVtcImVuY29kZWRcIl0pIGVbXCJlbmNvZGVkXCJdID0gZVtcImVuY29kZWRcIl0udG9IZXgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IChlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBSZXR1cm5zIHRoZSBtZXNzYWdlIGFzIGEgaGV4IGVuY29kZWQgc3RyaW5nLiBUaGlzIGlzIGFuIGFsaWFzIGZvciB7QGxpbmsgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlI2VuY29kZUhleH0uXG4gICAgICAgICAgICAgICAgICogQG5hbWUgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlI3RvSGV4XG4gICAgICAgICAgICAgICAgICogQGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBIZXggZW5jb2RlZCBzdHJpbmdcbiAgICAgICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIG1lc3NhZ2UgY2Fubm90IGJlIGVuY29kZWQgb3IgaWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nLiBUaGUgbGF0ZXIgc3RpbGxcbiAgICAgICAgICAgICAgICAgKiAgcmV0dXJucyB0aGUgZW5jb2RlZCBoZXggc3RyaW5nIGluIHRoZSBgZW5jb2RlZGAgcHJvcGVydHkgb24gdGhlIGVycm9yLlxuICAgICAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBNZXNzYWdlUHJvdG90eXBlLnRvSGV4ID0gTWVzc2FnZVByb3RvdHlwZS5lbmNvZGVIZXg7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBDbG9uZXMgYSBtZXNzYWdlIG9iamVjdCBvciBmaWVsZCB2YWx1ZSB0byBhIHJhdyBvYmplY3QuXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHsqfSBvYmogT2JqZWN0IHRvIGNsb25lXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBiaW5hcnlBc0Jhc2U2NCBXaGV0aGVyIHRvIGluY2x1ZGUgYmluYXJ5IGRhdGEgYXMgYmFzZTY0IHN0cmluZ3Mgb3IgYXMgYSBidWZmZXIgb3RoZXJ3aXNlXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBsb25nc0FzU3RyaW5ncyBXaGV0aGVyIHRvIGVuY29kZSBsb25ncyBhcyBzdHJpbmdzXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHshUHJvdG9CdWYuUmVmbGVjdC5UPX0gcmVzb2x2ZWRUeXBlIFRoZSByZXNvbHZlZCBmaWVsZCB0eXBlIGlmIGEgZmllbGRcbiAgICAgICAgICAgICAgICAgKiBAcmV0dXJucyB7Kn0gQ2xvbmVkIG9iamVjdFxuICAgICAgICAgICAgICAgICAqIEBpbm5lclxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNsb25lUmF3KG9iaiwgYmluYXJ5QXNCYXNlNjQsIGxvbmdzQXNTdHJpbmdzLCByZXNvbHZlZFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udmVydCBlbnVtIHZhbHVlcyB0byB0aGVpciByZXNwZWN0aXZlIG5hbWVzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZWRUeXBlICYmIHJlc29sdmVkVHlwZSBpbnN0YW5jZW9mIFByb3RvQnVmLlJlZmxlY3QuRW51bSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gUHJvdG9CdWYuUmVmbGVjdC5FbnVtLmdldE5hbWUocmVzb2x2ZWRUeXBlLm9iamVjdCwgb2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZSAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXNzLXRocm91Z2ggc3RyaW5nLCBudW1iZXIsIGJvb2xlYW4sIG51bGwuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQ29udmVydCBCeXRlQnVmZmVycyB0byByYXcgYnVmZmVyIG9yIHN0cmluZ3NcbiAgICAgICAgICAgICAgICAgICAgaWYgKEJ5dGVCdWZmZXIuaXNCeXRlQnVmZmVyKG9iaikpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmluYXJ5QXNCYXNlNjQgPyBvYmoudG9CYXNlNjQoKSA6IG9iai50b0J1ZmZlcigpO1xuICAgICAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IExvbmdzIHRvIHByb3BlciBvYmplY3RzIG9yIHN0cmluZ3NcbiAgICAgICAgICAgICAgICAgICAgaWYgKFByb3RvQnVmLkxvbmcuaXNMb25nKG9iaikpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9uZ3NBc1N0cmluZ3MgPyBvYmoudG9TdHJpbmcoKSA6IFByb3RvQnVmLkxvbmcuZnJvbVZhbHVlKG9iaik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjbG9uZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2xvbmUgYXJyYXlzXG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouZm9yRWFjaChmdW5jdGlvbiAodiwgaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lW2tdID0gY2xvbmVSYXcodiwgYmluYXJ5QXNCYXNlNjQsIGxvbmdzQXNTdHJpbmdzLCByZXNvbHZlZFR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2xvbmUgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29udmVydCBtYXBzIHRvIG9iamVjdHNcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIFByb3RvQnVmLk1hcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ID0gb2JqLmVudHJpZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGUgPSBpdC5uZXh0KCk7ICFlLmRvbmU7IGUgPSBpdC5uZXh0KCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVbb2JqLmtleUVsZW0udmFsdWVUb1N0cmluZyhlLnZhbHVlWzBdKV0gPSBjbG9uZVJhdyhlLnZhbHVlWzFdLCBiaW5hcnlBc0Jhc2U2NCwgbG9uZ3NBc1N0cmluZ3MsIG9iai52YWx1ZUVsZW0ucmVzb2x2ZWRUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBFdmVyeXRoaW5nIGVsc2UgaXMgYSBub24tbnVsbCBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgdmFyIHR5cGUgPSBvYmouJHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBvYmopXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgJiYgKGZpZWxkID0gdHlwZS5nZXRDaGlsZChpKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lW2ldID0gY2xvbmVSYXcob2JqW2ldLCBiaW5hcnlBc0Jhc2U2NCwgbG9uZ3NBc1N0cmluZ3MsIGZpZWxkLnJlc29sdmVkVHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9uZVtpXSA9IGNsb25lUmF3KG9ialtpXSwgYmluYXJ5QXNCYXNlNjQsIGxvbmdzQXNTdHJpbmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFJldHVybnMgdGhlIG1lc3NhZ2UncyByYXcgcGF5bG9hZC5cbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBiaW5hcnlBc0Jhc2U2NCBXaGV0aGVyIHRvIGluY2x1ZGUgYmluYXJ5IGRhdGEgYXMgYmFzZTY0IHN0cmluZ3MgaW5zdGVhZCBvZiBCdWZmZXJzLCBkZWZhdWx0cyB0byBgZmFsc2VgXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBsb25nc0FzU3RyaW5ncyBXaGV0aGVyIHRvIGVuY29kZSBsb25ncyBhcyBzdHJpbmdzXG4gICAgICAgICAgICAgICAgICogQHJldHVybnMge09iamVjdC48c3RyaW5nLCo+fSBSYXcgcGF5bG9hZFxuICAgICAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBNZXNzYWdlUHJvdG90eXBlLnRvUmF3ID0gZnVuY3Rpb24gKGJpbmFyeUFzQmFzZTY0LCBsb25nc0FzU3RyaW5ncykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2xvbmVSYXcodGhpcywgISFiaW5hcnlBc0Jhc2U2NCwgISFsb25nc0FzU3RyaW5ncywgdGhpcy4kdHlwZSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEVuY29kZXMgYSBtZXNzYWdlIHRvIEpTT04uXG4gICAgICAgICAgICAgICAgICogQHJldHVybnMge3N0cmluZ30gSlNPTiBzdHJpbmdcbiAgICAgICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgTWVzc2FnZVByb3RvdHlwZS5lbmNvZGVKU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZVJhdyh0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBiaW5hcnktYXMtYmFzZTY0ICovIHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGxvbmdzLWFzLXN0cmluZ3MgKi8gdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiR0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIERlY29kZXMgYSBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCBidWZmZXIgb3Igc3RyaW5nLlxuICAgICAgICAgICAgICAgICAqIEBuYW1lIFByb3RvQnVmLkJ1aWxkZXIuTWVzc2FnZS5kZWNvZGVcbiAgICAgICAgICAgICAgICAgKiBAZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0geyFCeXRlQnVmZmVyfCFBcnJheUJ1ZmZlcnwhQnVmZmVyfHN0cmluZ30gYnVmZmVyIEJ1ZmZlciB0byBkZWNvZGUgZnJvbVxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7KG51bWJlcnxzdHJpbmcpPX0gbGVuZ3RoIE1lc3NhZ2UgbGVuZ3RoLiBEZWZhdWx0cyB0byBkZWNvZGUgYWxsIHRoZSByZW1haW5pZyBkYXRhLlxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gZW5jIEVuY29kaW5nIGlmIGJ1ZmZlciBpcyBhIHN0cmluZzogaGV4LCB1dGY4IChub3QgcmVjb21tZW5kZWQpLCBkZWZhdWx0cyB0byBiYXNlNjRcbiAgICAgICAgICAgICAgICAgKiBAcmV0dXJuIHshUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlfSBEZWNvZGVkIG1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIG1lc3NhZ2UgY2Fubm90IGJlIGRlY29kZWQgb3IgaWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nLiBUaGUgbGF0ZXIgc3RpbGxcbiAgICAgICAgICAgICAgICAgKiAgcmV0dXJucyB0aGUgZGVjb2RlZCBtZXNzYWdlIHdpdGggbWlzc2luZyBmaWVsZHMgaW4gdGhlIGBkZWNvZGVkYCBwcm9wZXJ0eSBvbiB0aGUgZXJyb3IuXG4gICAgICAgICAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgICAgICAgICAqIEBzZWUgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlLmRlY29kZTY0XG4gICAgICAgICAgICAgICAgICogQHNlZSBQcm90b0J1Zi5CdWlsZGVyLk1lc3NhZ2UuZGVjb2RlSGV4XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgTWVzc2FnZS5kZWNvZGUgPSBmdW5jdGlvbiAoYnVmZmVyLCBsZW5ndGgsIGVuYykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGxlbmd0aCA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmMgPSBsZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gLTE7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYnVmZmVyID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciA9IEJ5dGVCdWZmZXIud3JhcChidWZmZXIsIGVuYyA/IGVuYyA6IFwiYmFzZTY0XCIpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghQnl0ZUJ1ZmZlci5pc0J5dGVCdWZmZXIoYnVmZmVyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciA9IEJ5dGVCdWZmZXIud3JhcChidWZmZXIpOyAvLyBNYXkgdGhyb3dcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlID0gYnVmZmVyLmxpdHRsZUVuZGlhbjtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtc2cgPSBULmRlY29kZShidWZmZXIuTEUoKSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlci5MRShsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbXNnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIuTEUobGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgKGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIERlY29kZXMgYSB2YXJpbnQzMiBsZW5ndGgtZGVsaW1pdGVkIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIGJ1ZmZlciBvciBzdHJpbmcuXG4gICAgICAgICAgICAgICAgICogQG5hbWUgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlLmRlY29kZURlbGltaXRlZFxuICAgICAgICAgICAgICAgICAqIEBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7IUJ5dGVCdWZmZXJ8IUFycmF5QnVmZmVyfCFCdWZmZXJ8c3RyaW5nfSBidWZmZXIgQnVmZmVyIHRvIGRlY29kZSBmcm9tXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmc9fSBlbmMgRW5jb2RpbmcgaWYgYnVmZmVyIGlzIGEgc3RyaW5nOiBoZXgsIHV0ZjggKG5vdCByZWNvbW1lbmRlZCksIGRlZmF1bHRzIHRvIGJhc2U2NFxuICAgICAgICAgICAgICAgICAqIEByZXR1cm4ge1Byb3RvQnVmLkJ1aWxkZXIuTWVzc2FnZX0gRGVjb2RlZCBtZXNzYWdlIG9yIGBudWxsYCBpZiBub3QgZW5vdWdoIGJ5dGVzIGFyZSBhdmFpbGFibGUgeWV0XG4gICAgICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBtZXNzYWdlIGNhbm5vdCBiZSBkZWNvZGVkIG9yIGlmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZy4gVGhlIGxhdGVyIHN0aWxsXG4gICAgICAgICAgICAgICAgICogIHJldHVybnMgdGhlIGRlY29kZWQgbWVzc2FnZSB3aXRoIG1pc3NpbmcgZmllbGRzIGluIHRoZSBgZGVjb2RlZGAgcHJvcGVydHkgb24gdGhlIGVycm9yLlxuICAgICAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBNZXNzYWdlLmRlY29kZURlbGltaXRlZCA9IGZ1bmN0aW9uIChidWZmZXIsIGVuYykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJ1ZmZlciA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgPSBCeXRlQnVmZmVyLndyYXAoYnVmZmVyLCBlbmMgPyBlbmMgOiBcImJhc2U2NFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIUJ5dGVCdWZmZXIuaXNCeXRlQnVmZmVyKGJ1ZmZlcikpXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgPSBCeXRlQnVmZmVyLndyYXAoYnVmZmVyKTsgLy8gTWF5IHRocm93XG4gICAgICAgICAgICAgICAgICAgIGlmIChidWZmZXIucmVtYWluaW5nKCkgPCAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvZmYgPSBidWZmZXIub2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVuID0gYnVmZmVyLnJlYWRWYXJpbnQzMigpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYnVmZmVyLnJlbWFpbmluZygpIDwgbGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIub2Zmc2V0ID0gb2ZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtc2cgPSBULmRlY29kZShidWZmZXIuc2xpY2UoYnVmZmVyLm9mZnNldCwgYnVmZmVyLm9mZnNldCArIGxlbikuTEUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIub2Zmc2V0ICs9IGxlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtc2c7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyLm9mZnNldCArPSBsZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRGVjb2RlcyB0aGUgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgYmFzZTY0IGVuY29kZWQgc3RyaW5nLlxuICAgICAgICAgICAgICAgICAqIEBuYW1lIFByb3RvQnVmLkJ1aWxkZXIuTWVzc2FnZS5kZWNvZGU2NFxuICAgICAgICAgICAgICAgICAqIEBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgU3RyaW5nIHRvIGRlY29kZSBmcm9tXG4gICAgICAgICAgICAgICAgICogQHJldHVybiB7IVByb3RvQnVmLkJ1aWxkZXIuTWVzc2FnZX0gRGVjb2RlZCBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBtZXNzYWdlIGNhbm5vdCBiZSBkZWNvZGVkIG9yIGlmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZy4gVGhlIGxhdGVyIHN0aWxsXG4gICAgICAgICAgICAgICAgICogIHJldHVybnMgdGhlIGRlY29kZWQgbWVzc2FnZSB3aXRoIG1pc3NpbmcgZmllbGRzIGluIHRoZSBgZGVjb2RlZGAgcHJvcGVydHkgb24gdGhlIGVycm9yLlxuICAgICAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBNZXNzYWdlLmRlY29kZTY0ID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWVzc2FnZS5kZWNvZGUoc3RyLCBcImJhc2U2NFwiKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRGVjb2RlcyB0aGUgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgaGV4IGVuY29kZWQgc3RyaW5nLlxuICAgICAgICAgICAgICAgICAqIEBuYW1lIFByb3RvQnVmLkJ1aWxkZXIuTWVzc2FnZS5kZWNvZGVIZXhcbiAgICAgICAgICAgICAgICAgKiBAZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIFN0cmluZyB0byBkZWNvZGUgZnJvbVxuICAgICAgICAgICAgICAgICAqIEByZXR1cm4geyFQcm90b0J1Zi5CdWlsZGVyLk1lc3NhZ2V9IERlY29kZWQgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgbWVzc2FnZSBjYW5ub3QgYmUgZGVjb2RlZCBvciBpZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmcuIFRoZSBsYXRlciBzdGlsbFxuICAgICAgICAgICAgICAgICAqICByZXR1cm5zIHRoZSBkZWNvZGVkIG1lc3NhZ2Ugd2l0aCBtaXNzaW5nIGZpZWxkcyBpbiB0aGUgYGRlY29kZWRgIHByb3BlcnR5IG9uIHRoZSBlcnJvci5cbiAgICAgICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgTWVzc2FnZS5kZWNvZGVIZXggPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBNZXNzYWdlLmRlY29kZShzdHIsIFwiaGV4XCIpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBEZWNvZGVzIHRoZSBtZXNzYWdlIGZyb20gYSBKU09OIHN0cmluZy5cbiAgICAgICAgICAgICAgICAgKiBAbmFtZSBQcm90b0J1Zi5CdWlsZGVyLk1lc3NhZ2UuZGVjb2RlSlNPTlxuICAgICAgICAgICAgICAgICAqIEBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgU3RyaW5nIHRvIGRlY29kZSBmcm9tXG4gICAgICAgICAgICAgICAgICogQHJldHVybiB7IVByb3RvQnVmLkJ1aWxkZXIuTWVzc2FnZX0gRGVjb2RlZCBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBtZXNzYWdlIGNhbm5vdCBiZSBkZWNvZGVkIG9yIGlmIHJlcXVpcmVkIGZpZWxkcyBhcmVcbiAgICAgICAgICAgICAgICAgKiBtaXNzaW5nLlxuICAgICAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBNZXNzYWdlLmRlY29kZUpTT04gPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTWVzc2FnZShKU09OLnBhcnNlKHN0cikpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyBVdGlsaXR5XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgTWVzc2FnZS5cbiAgICAgICAgICAgICAgICAgKiBAbmFtZSBQcm90b0J1Zi5CdWlsZGVyLk1lc3NhZ2UjdG9TdHJpbmdcbiAgICAgICAgICAgICAgICAgKiBAZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFN0cmluZyByZXByZXNlbnRhdGlvbiBhcyBvZiBcIi5GdWxseS5RdWFsaWZpZWQuTWVzc2FnZU5hbWVcIlxuICAgICAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBNZXNzYWdlUHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyBQcm9wZXJ0aWVzXG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBNZXNzYWdlIG9wdGlvbnMuXG4gICAgICAgICAgICAgICAgICogQG5hbWUgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlLiRvcHRpb25zXG4gICAgICAgICAgICAgICAgICogQHR5cGUge09iamVjdC48c3RyaW5nLCo+fVxuICAgICAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB2YXIgJG9wdGlvbnNTOyAvLyBjYyBuZWVkcyB0aGlzXG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBNZXNzYWdlIG9wdGlvbnMuXG4gICAgICAgICAgICAgICAgICogQG5hbWUgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlIyRvcHRpb25zXG4gICAgICAgICAgICAgICAgICogQHR5cGUge09iamVjdC48c3RyaW5nLCo+fVxuICAgICAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB2YXIgJG9wdGlvbnM7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBSZWZsZWN0aW9uIHR5cGUuXG4gICAgICAgICAgICAgICAgICogQG5hbWUgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlLiR0eXBlXG4gICAgICAgICAgICAgICAgICogQHR5cGUgeyFQcm90b0J1Zi5SZWZsZWN0Lk1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHZhciAkdHlwZVM7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBSZWZsZWN0aW9uIHR5cGUuXG4gICAgICAgICAgICAgICAgICogQG5hbWUgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlIyR0eXBlXG4gICAgICAgICAgICAgICAgICogQHR5cGUgeyFQcm90b0J1Zi5SZWZsZWN0Lk1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHZhciAkdHlwZTtcblxuICAgICAgICAgICAgICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNZXNzYWdlLCAnJG9wdGlvbnMnLCB7IFwidmFsdWVcIjogVC5idWlsZE9wdCgpIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1lc3NhZ2VQcm90b3R5cGUsIFwiJG9wdGlvbnNcIiwgeyBcInZhbHVlXCI6IE1lc3NhZ2VbXCIkb3B0aW9uc1wiXSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNZXNzYWdlLCBcIiR0eXBlXCIsIHsgXCJ2YWx1ZVwiOiBUIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1lc3NhZ2VQcm90b3R5cGUsIFwiJHR5cGVcIiwgeyBcInZhbHVlXCI6IFQgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gTWVzc2FnZTtcblxuICAgICAgICAgICAgfSkoUHJvdG9CdWYsIHRoaXMpO1xuXG4gICAgICAgICAgICAvLyBTdGF0aWMgZW51bXMgYW5kIHByb3RvdHlwZWQgc3ViLW1lc3NhZ2VzIC8gY2FjaGVkIGNvbGxlY3Rpb25zXG4gICAgICAgICAgICB0aGlzLl9maWVsZHMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX2ZpZWxkc0J5SWQgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuX2ZpZWxkc0J5TmFtZSA9IHt9O1xuICAgICAgICAgICAgdGhpcy5fb25lb2ZzQnlOYW1lID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgayA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoLCBjaGlsZDsgaSA8IGs7IGkrKykge1xuICAgICAgICAgICAgICAgIGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBFbnVtIHx8IGNoaWxkIGluc3RhbmNlb2YgTWVzc2FnZSB8fCBjaGlsZCBpbnN0YW5jZW9mIFNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsYXp6Lmhhc093blByb3BlcnR5KGNoaWxkLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJJbGxlZ2FsIHJlZmxlY3QgY2hpbGQgb2YgXCIgKyB0aGlzLnRvU3RyaW5nKHRydWUpICsgXCI6IFwiICsgY2hpbGQudG9TdHJpbmcodHJ1ZSkgKyBcIiBjYW5ub3Qgb3ZlcnJpZGUgc3RhdGljIHByb3BlcnR5ICdcIiArIGNoaWxkLm5hbWUgKyBcIidcIik7XG4gICAgICAgICAgICAgICAgICAgIGNsYXp6W2NoaWxkLm5hbWVdID0gY2hpbGQuYnVpbGQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkIGluc3RhbmNlb2YgTWVzc2FnZS5GaWVsZClcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZpZWxkcy5wdXNoKGNoaWxkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZpZWxkc0J5SWRbY2hpbGQuaWRdID0gY2hpbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9maWVsZHNCeU5hbWVbY2hpbGQubmFtZV0gPSBjaGlsZDtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGlsZCBpbnN0YW5jZW9mIE1lc3NhZ2UuT25lT2YpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25lb2ZzQnlOYW1lW2NoaWxkLm5hbWVdID0gY2hpbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCEoY2hpbGQgaW5zdGFuY2VvZiBNZXNzYWdlLk9uZU9mKSAmJiAhKGNoaWxkIGluc3RhbmNlb2YgRXh0ZW5zaW9uKSkgLy8gTm90IGJ1aWx0XG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiSWxsZWdhbCByZWZsZWN0IGNoaWxkIG9mIFwiICsgdGhpcy50b1N0cmluZyh0cnVlKSArIFwiOiBcIiArIHRoaXMuY2hpbGRyZW5baV0udG9TdHJpbmcodHJ1ZSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbGF6eiA9IGNsYXp6O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmNvZGVzIGEgcnVudGltZSBtZXNzYWdlJ3MgY29udGVudHMgdG8gdGhlIHNwZWNpZmllZCBidWZmZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IVByb3RvQnVmLkJ1aWxkZXIuTWVzc2FnZX0gbWVzc2FnZSBSdW50aW1lIG1lc3NhZ2UgdG8gZW5jb2RlXG4gICAgICAgICAqIEBwYXJhbSB7Qnl0ZUJ1ZmZlcn0gYnVmZmVyIEJ5dGVCdWZmZXIgdG8gd3JpdGUgdG9cbiAgICAgICAgICogQHBhcmFtIHtib29sZWFuPX0gbm9WZXJpZnkgV2hldGhlciB0byBub3QgdmVyaWZ5IGZpZWxkIHZhbHVlcywgZGVmYXVsdHMgdG8gYGZhbHNlYFxuICAgICAgICAgKiBAcmV0dXJuIHtCeXRlQnVmZmVyfSBUaGUgQnl0ZUJ1ZmZlciBmb3IgY2hhaW5pbmdcbiAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZyBvciB0aGUgbWVzc2FnZSBjYW5ub3QgYmUgZW5jb2RlZCBmb3IgYW5vdGhlciByZWFzb25cbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgTWVzc2FnZVByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbiAobWVzc2FnZSwgYnVmZmVyLCBub1ZlcmlmeSkge1xuICAgICAgICAgICAgdmFyIGZpZWxkTWlzc2luZyA9IG51bGwsXG4gICAgICAgICAgICAgICAgZmllbGQ7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgayA9IHRoaXMuX2ZpZWxkcy5sZW5ndGgsIHZhbDsgaSA8IGs7ICsraSkge1xuICAgICAgICAgICAgICAgIGZpZWxkID0gdGhpcy5fZmllbGRzW2ldO1xuICAgICAgICAgICAgICAgIHZhbCA9IG1lc3NhZ2VbZmllbGQubmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLnJlcXVpcmVkICYmIHZhbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRNaXNzaW5nID09PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRNaXNzaW5nID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmVuY29kZShub1ZlcmlmeSA/IHZhbCA6IGZpZWxkLnZlcmlmeVZhbHVlKHZhbCksIGJ1ZmZlciwgbWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmllbGRNaXNzaW5nICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFwiTWlzc2luZyBhdCBsZWFzdCBvbmUgcmVxdWlyZWQgZmllbGQgZm9yIFwiICsgdGhpcy50b1N0cmluZyh0cnVlKSArIFwiOiBcIiArIGZpZWxkTWlzc2luZyk7XG4gICAgICAgICAgICAgICAgZXJyW1wiZW5jb2RlZFwiXSA9IGJ1ZmZlcjsgLy8gU3RpbGwgZXhwb3NlIHdoYXQgd2UgZ290XG4gICAgICAgICAgICAgICAgdGhyb3cgKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxjdWxhdGVzIGEgcnVudGltZSBtZXNzYWdlJ3MgYnl0ZSBsZW5ndGguXG4gICAgICAgICAqIEBwYXJhbSB7IVByb3RvQnVmLkJ1aWxkZXIuTWVzc2FnZX0gbWVzc2FnZSBSdW50aW1lIG1lc3NhZ2UgdG8gZW5jb2RlXG4gICAgICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IEJ5dGUgbGVuZ3RoXG4gICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3Npbmcgb3IgdGhlIG1lc3NhZ2UgY2Fubm90IGJlIGNhbGN1bGF0ZWQgZm9yIGFub3RoZXIgcmVhc29uXG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIE1lc3NhZ2VQcm90b3R5cGUuY2FsY3VsYXRlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSAwLCBpID0gMCwgayA9IHRoaXMuX2ZpZWxkcy5sZW5ndGgsIGZpZWxkLCB2YWw7IGkgPCBrOyArK2kpIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA9IHRoaXMuX2ZpZWxkc1tpXTtcbiAgICAgICAgICAgICAgICB2YWwgPSBtZXNzYWdlW2ZpZWxkLm5hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5yZXF1aXJlZCAmJiB2YWwgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiTWlzc2luZyBhdCBsZWFzdCBvbmUgcmVxdWlyZWQgZmllbGQgZm9yIFwiICsgdGhpcy50b1N0cmluZyh0cnVlKSArIFwiOiBcIiArIGZpZWxkKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIG4gKz0gZmllbGQuY2FsY3VsYXRlKHZhbCwgbWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2tpcHMgYWxsIGRhdGEgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3BlY2lmaWVkIGdyb3VwIGhhcyBiZWVuIHJlYWNoZWQuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBleHBlY3RlZElkIEV4cGVjdGVkIEdST1VQRU5EIGlkXG4gICAgICAgICAqIEBwYXJhbSB7IUJ5dGVCdWZmZXJ9IGJ1ZiBCeXRlQnVmZmVyXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgYSB2YWx1ZSBhcyBiZWVuIHNraXBwZWQsIGBmYWxzZWAgaWYgdGhlIGVuZCBoYXMgYmVlbiByZWFjaGVkXG4gICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiBpdCB3YXNuJ3QgcG9zc2libGUgdG8gZmluZCB0aGUgZW5kIG9mIHRoZSBncm91cCAoYnVmZmVyIG92ZXJydW4gb3IgZW5kIHRhZyBtaXNtYXRjaClcbiAgICAgICAgICogQGlubmVyXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBza2lwVGlsbEdyb3VwRW5kKGV4cGVjdGVkSWQsIGJ1Zikge1xuICAgICAgICAgICAgdmFyIHRhZyA9IGJ1Zi5yZWFkVmFyaW50MzIoKSwgLy8gVGhyb3dzIG9uIE9PQlxuICAgICAgICAgICAgICAgIHdpcmVUeXBlID0gdGFnICYgMHgwNyxcbiAgICAgICAgICAgICAgICBpZCA9IHRhZyA+Pj4gMztcbiAgICAgICAgICAgIHN3aXRjaCAod2lyZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLldJUkVfVFlQRVMuVkFSSU5UOlxuICAgICAgICAgICAgICAgICAgICBkbyB0YWcgPSBidWYucmVhZFVpbnQ4KCk7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgodGFnICYgMHg4MCkgPT09IDB4ODApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLldJUkVfVFlQRVMuQklUUzY0OlxuICAgICAgICAgICAgICAgICAgICBidWYub2Zmc2V0ICs9IDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuV0lSRV9UWVBFUy5MREVMSU06XG4gICAgICAgICAgICAgICAgICAgIHRhZyA9IGJ1Zi5yZWFkVmFyaW50MzIoKTsgLy8gcmVhZHMgdGhlIHZhcmludFxuICAgICAgICAgICAgICAgICAgICBidWYub2Zmc2V0ICs9IHRhZzsgICAgICAgIC8vIHNraXBzIG4gYnl0ZXNcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5XSVJFX1RZUEVTLlNUQVJUR1JPVVA6XG4gICAgICAgICAgICAgICAgICAgIHNraXBUaWxsR3JvdXBFbmQoaWQsIGJ1Zik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuV0lSRV9UWVBFUy5FTkRHUk9VUDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkID09PSBleHBlY3RlZElkKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIklsbGVnYWwgR1JPVVBFTkQgYWZ0ZXIgdW5rbm93biBncm91cDogXCIgKyBpZCArIFwiIChcIiArIGV4cGVjdGVkSWQgKyBcIiBleHBlY3RlZClcIik7XG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5XSVJFX1RZUEVTLkJJVFMzMjpcbiAgICAgICAgICAgICAgICAgICAgYnVmLm9mZnNldCArPSA0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIklsbGVnYWwgd2lyZSB0eXBlIGluIHVua25vd24gZ3JvdXAgXCIgKyBleHBlY3RlZElkICsgXCI6IFwiICsgd2lyZVR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVjb2RlcyBhbiBlbmNvZGVkIG1lc3NhZ2UgYW5kIHJldHVybnMgdGhlIGRlY29kZWQgbWVzc2FnZS5cbiAgICAgICAgICogQHBhcmFtIHtCeXRlQnVmZmVyfSBidWZmZXIgQnl0ZUJ1ZmZlciB0byBkZWNvZGUgZnJvbVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcj19IGxlbmd0aCBNZXNzYWdlIGxlbmd0aC4gRGVmYXVsdHMgdG8gZGVjb2RlIGFsbCByZW1haW5pbmcgZGF0YS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXI9fSBleHBlY3RlZEdyb3VwRW5kSWQgRXhwZWN0ZWQgR1JPVVBFTkQgaWQgaWYgdGhpcyBpcyBhIGxlZ2FjeSBncm91cFxuICAgICAgICAgKiBAcmV0dXJuIHtQcm90b0J1Zi5CdWlsZGVyLk1lc3NhZ2V9IERlY29kZWQgbWVzc2FnZVxuICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIG1lc3NhZ2UgY2Fubm90IGJlIGRlY29kZWRcbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgTWVzc2FnZVByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbiAoYnVmZmVyLCBsZW5ndGgsIGV4cGVjdGVkR3JvdXBFbmRJZCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBsZW5ndGggIT09ICdudW1iZXInKVxuICAgICAgICAgICAgICAgIGxlbmd0aCA9IC0xO1xuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gYnVmZmVyLm9mZnNldCxcbiAgICAgICAgICAgICAgICBtc2cgPSBuZXcgKHRoaXMuY2xhenopKCksXG4gICAgICAgICAgICAgICAgdGFnLCB3aXJlVHlwZSwgaWQsIGZpZWxkO1xuICAgICAgICAgICAgd2hpbGUgKGJ1ZmZlci5vZmZzZXQgPCBzdGFydCArIGxlbmd0aCB8fCAobGVuZ3RoID09PSAtMSAmJiBidWZmZXIucmVtYWluaW5nKCkgPiAwKSkge1xuICAgICAgICAgICAgICAgIHRhZyA9IGJ1ZmZlci5yZWFkVmFyaW50MzIoKTtcbiAgICAgICAgICAgICAgICB3aXJlVHlwZSA9IHRhZyAmIDB4MDc7XG4gICAgICAgICAgICAgICAgaWQgPSB0YWcgPj4+IDM7XG4gICAgICAgICAgICAgICAgaWYgKHdpcmVUeXBlID09PSBQcm90b0J1Zi5XSVJFX1RZUEVTLkVOREdST1VQKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpZCAhPT0gZXhwZWN0ZWRHcm91cEVuZElkKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJJbGxlZ2FsIGdyb3VwIGVuZCBpbmRpY2F0b3IgZm9yIFwiICsgdGhpcy50b1N0cmluZyh0cnVlKSArIFwiOiBcIiArIGlkICsgXCIgKFwiICsgKGV4cGVjdGVkR3JvdXBFbmRJZCA/IGV4cGVjdGVkR3JvdXBFbmRJZCArIFwiIGV4cGVjdGVkXCIgOiBcIm5vdCBhIGdyb3VwXCIpICsgXCIpXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCEoZmllbGQgPSB0aGlzLl9maWVsZHNCeUlkW2lkXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gXCJtZXNzYWdlcyBjcmVhdGVkIGJ5IHlvdXIgbmV3IGNvZGUgY2FuIGJlIHBhcnNlZCBieSB5b3VyIG9sZCBjb2RlOiBvbGQgYmluYXJpZXMgc2ltcGx5IGlnbm9yZSB0aGUgbmV3IGZpZWxkIHdoZW4gcGFyc2luZy5cIlxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHdpcmVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLldJUkVfVFlQRVMuVkFSSU5UOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlci5yZWFkVmFyaW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuV0lSRV9UWVBFUy5CSVRTMzI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyLm9mZnNldCArPSA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5XSVJFX1RZUEVTLkJJVFM2NDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIub2Zmc2V0ICs9IDg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLldJUkVfVFlQRVMuTERFTElNOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsZW4gPSBidWZmZXIucmVhZFZhcmludDMyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyLm9mZnNldCArPSBsZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLldJUkVfVFlQRVMuU1RBUlRHUk9VUDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoc2tpcFRpbGxHcm91cEVuZChpZCwgYnVmZmVyKSkgeyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiSWxsZWdhbCB3aXJlIHR5cGUgZm9yIHVua25vd24gZmllbGQgXCIgKyBpZCArIFwiIGluIFwiICsgdGhpcy50b1N0cmluZyh0cnVlKSArIFwiI2RlY29kZTogXCIgKyB3aXJlVHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5yZXBlYXRlZCAmJiAhZmllbGQub3B0aW9uc1tcInBhY2tlZFwiXSkge1xuICAgICAgICAgICAgICAgICAgICBtc2dbZmllbGQubmFtZV0ucHVzaChmaWVsZC5kZWNvZGUod2lyZVR5cGUsIGJ1ZmZlcikpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQubWFwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXl2YWwgPSBmaWVsZC5kZWNvZGUod2lyZVR5cGUsIGJ1ZmZlcik7XG4gICAgICAgICAgICAgICAgICAgIG1zZ1tmaWVsZC5uYW1lXS5zZXQoa2V5dmFsWzBdLCBrZXl2YWxbMV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1zZ1tmaWVsZC5uYW1lXSA9IGZpZWxkLmRlY29kZSh3aXJlVHlwZSwgYnVmZmVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLm9uZW9mKSB7IC8vIEZpZWxkIGlzIHBhcnQgb2YgYW4gT25lT2YgKG5vdCBhIHZpcnR1YWwgT25lT2YgZmllbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudEZpZWxkID0gbXNnW2ZpZWxkLm9uZW9mLm5hbWVdOyAvLyBWaXJ0dWFsIGZpZWxkIHJlZmVyZW5jZXMgY3VycmVudGx5IHNldCBmaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRGaWVsZCAhPT0gbnVsbCAmJiBjdXJyZW50RmllbGQgIT09IGZpZWxkLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnW2N1cnJlbnRGaWVsZF0gPSBudWxsOyAvLyBDbGVhciBjdXJyZW50bHkgc2V0IGZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2dbZmllbGQub25lb2YubmFtZV0gPSBmaWVsZC5uYW1lOyAvLyBQb2ludCB2aXJ0dWFsIGZpZWxkIGF0IHRoaXMgZmllbGRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgYWxsIHJlcXVpcmVkIGZpZWxkcyBhcmUgcHJlc2VudCBhbmQgc2V0IGRlZmF1bHQgdmFsdWVzIGZvciBvcHRpb25hbCBmaWVsZHMgdGhhdCBhcmUgbm90XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgayA9IHRoaXMuX2ZpZWxkcy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA9IHRoaXMuX2ZpZWxkc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAobXNnW2ZpZWxkLm5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN5bnRheCA9PT0gXCJwcm90bzNcIikgeyAvLyBQcm90bzMgc2V0cyBkZWZhdWx0IHZhbHVlcyBieSBzcGVjaWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2dbZmllbGQubmFtZV0gPSBmaWVsZC5kZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQucmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcIk1pc3NpbmcgYXQgbGVhc3Qgb25lIHJlcXVpcmVkIGZpZWxkIGZvciBcIiArIHRoaXMudG9TdHJpbmcodHJ1ZSkgKyBcIjogXCIgKyBmaWVsZC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycltcImRlY29kZWRcIl0gPSBtc2c7IC8vIFN0aWxsIGV4cG9zZSB3aGF0IHdlIGdvdFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgKGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoUHJvdG9CdWYucG9wdWxhdGVEZWZhdWx0cyAmJiBmaWVsZC5kZWZhdWx0VmFsdWUgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2dbZmllbGQubmFtZV0gPSBmaWVsZC5kZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgayA9IHRoaXMuX2ZpZWxkcy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA9IHRoaXMuX2ZpZWxkc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQudHlwZS5uYW1lID09ICdpbnQ2NCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1zZ1tmaWVsZC5uYW1lXSBpbnN0YW5jZW9mIFByb3RvQnVmLkxvbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZ1tmaWVsZC5uYW1lXSA9IG1zZ1tmaWVsZC5uYW1lXS50b051bWJlcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbXNnO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAYWxpYXMgUHJvdG9CdWYuUmVmbGVjdC5NZXNzYWdlXG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIFJlZmxlY3QuTWVzc2FnZSA9IE1lc3NhZ2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgTWVzc2FnZSBGaWVsZC5cbiAgICAgICAgICogQGV4cG9ydHMgUHJvdG9CdWYuUmVmbGVjdC5NZXNzYWdlLkZpZWxkXG4gICAgICAgICAqIEBwYXJhbSB7IVByb3RvQnVmLkJ1aWxkZXJ9IGJ1aWxkZXIgQnVpbGRlciByZWZlcmVuY2VcbiAgICAgICAgICogQHBhcmFtIHshUHJvdG9CdWYuUmVmbGVjdC5NZXNzYWdlfSBtZXNzYWdlIE1lc3NhZ2UgcmVmZXJlbmNlXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBydWxlIFJ1bGUsIG9uZSBvZiByZXF1cmllZCwgb3B0aW9uYWwsIHJlcGVhdGVkXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nP30ga2V5dHlwZSBLZXkgZGF0YSB0eXBlLCBpZiBhbnkuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIERhdGEgdHlwZSwgZS5nLiBpbnQzMlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBGaWVsZCBuYW1lXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpZCBVbmlxdWUgZmllbGQgaWRcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPj19IG9wdGlvbnMgT3B0aW9uc1xuICAgICAgICAgKiBAcGFyYW0geyFQcm90b0J1Zi5SZWZsZWN0Lk1lc3NhZ2UuT25lT2Y9fSBvbmVvZiBFbmNsb3NpbmcgT25lT2ZcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmc/fSBzeW50YXggVGhlIHN5bnRheCBsZXZlbCBvZiB0aGlzIGRlZmluaXRpb24gKGUuZy4sIHByb3RvMylcbiAgICAgICAgICogQGNvbnN0cnVjdG9yXG4gICAgICAgICAqIEBleHRlbmRzIFByb3RvQnVmLlJlZmxlY3QuVFxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIEZpZWxkID0gZnVuY3Rpb24gKGJ1aWxkZXIsIG1lc3NhZ2UsIHJ1bGUsIGtleXR5cGUsIHR5cGUsIG5hbWUsIGlkLCBvcHRpb25zLCBvbmVvZiwgc3ludGF4KSB7XG4gICAgICAgICAgICBULmNhbGwodGhpcywgYnVpbGRlciwgbWVzc2FnZSwgbmFtZSk7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJNZXNzYWdlLkZpZWxkXCI7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogTWVzc2FnZSBmaWVsZCByZXF1aXJlZCBmbGFnLlxuICAgICAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMucmVxdWlyZWQgPSBydWxlID09PSBcInJlcXVpcmVkXCI7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogTWVzc2FnZSBmaWVsZCByZXBlYXRlZCBmbGFnLlxuICAgICAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMucmVwZWF0ZWQgPSBydWxlID09PSBcInJlcGVhdGVkXCI7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogTWVzc2FnZSBmaWVsZCBtYXAgZmxhZy5cbiAgICAgICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLm1hcCA9IHJ1bGUgPT09IFwibWFwXCI7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogTWVzc2FnZSBmaWVsZCBrZXkgdHlwZS4gVHlwZSByZWZlcmVuY2Ugc3RyaW5nIGlmIHVucmVzb2x2ZWQsIHByb3RvYnVmXG4gICAgICAgICAgICAgKiB0eXBlIGlmIHJlc29sdmVkLiBWYWxpZCBvbmx5IGlmIHRoaXMubWFwID09PSB0cnVlLCBudWxsIG90aGVyd2lzZS5cbiAgICAgICAgICAgICAqIEB0eXBlIHtzdHJpbmd8e25hbWU6IHN0cmluZywgd2lyZVR5cGU6IG51bWJlcn18bnVsbH1cbiAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5rZXlUeXBlID0ga2V5dHlwZSB8fCBudWxsO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIE1lc3NhZ2UgZmllbGQgdHlwZS4gVHlwZSByZWZlcmVuY2Ugc3RyaW5nIGlmIHVucmVzb2x2ZWQsIHByb3RvYnVmIHR5cGUgaWZcbiAgICAgICAgICAgICAqIHJlc29sdmVkLiBJbiBhIG1hcCBmaWVsZCwgdGhpcyBpcyB0aGUgdmFsdWUgdHlwZS5cbiAgICAgICAgICAgICAqIEB0eXBlIHtzdHJpbmd8e25hbWU6IHN0cmluZywgd2lyZVR5cGU6IG51bWJlcn19XG4gICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVzb2x2ZWQgdHlwZSByZWZlcmVuY2UgaW5zaWRlIHRoZSBnbG9iYWwgbmFtZXNwYWNlLlxuICAgICAgICAgICAgICogQHR5cGUge1Byb3RvQnVmLlJlZmxlY3QuVHxudWxsfVxuICAgICAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnJlc29sdmVkVHlwZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVW5pcXVlIG1lc3NhZ2UgZmllbGQgaWQuXG4gICAgICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmlkID0gaWQ7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogTWVzc2FnZSBmaWVsZCBvcHRpb25zLlxuICAgICAgICAgICAgICogQHR5cGUgeyFPYmplY3QuPHN0cmluZywqPn1cbiAgICAgICAgICAgICAqIEBkaWN0XG4gICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGVmYXVsdCB2YWx1ZS5cbiAgICAgICAgICAgICAqIEB0eXBlIHsqfVxuICAgICAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRW5jbG9zaW5nIE9uZU9mLlxuICAgICAgICAgICAgICogQHR5cGUgez9Qcm90b0J1Zi5SZWZsZWN0Lk1lc3NhZ2UuT25lT2Z9XG4gICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMub25lb2YgPSBvbmVvZiB8fCBudWxsO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFN5bnRheCBsZXZlbCBvZiB0aGlzIGRlZmluaXRpb24gKGUuZy4sIHByb3RvMykuXG4gICAgICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnN5bnRheCA9IHN5bnRheCB8fCAncHJvdG8yJztcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBPcmlnaW5hbCBmaWVsZCBuYW1lLlxuICAgICAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbE5hbWUgPSB0aGlzLm5hbWU7IC8vIFVzZWQgdG8gcmV2ZXJ0IGNhbWVsY2FzZSB0cmFuc2Zvcm1hdGlvbiBvbiBuYW1pbmcgY29sbGlzaW9uc1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVsZW1lbnQgaW1wbGVtZW50YXRpb24uIENyZWF0ZWQgaW4gYnVpbGQoKSBhZnRlciB0eXBlcyBhcmUgcmVzb2x2ZWQuXG4gICAgICAgICAgICAgKiBAdHlwZSB7UHJvdG9CdWYuRWxlbWVudH1cbiAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBLZXkgZWxlbWVudCBpbXBsZW1lbnRhdGlvbiwgZm9yIG1hcCBmaWVsZHMuIENyZWF0ZWQgaW4gYnVpbGQoKSBhZnRlclxuICAgICAgICAgICAgICogdHlwZXMgYXJlIHJlc29sdmVkLlxuICAgICAgICAgICAgICogQHR5cGUge1Byb3RvQnVmLkVsZW1lbnR9XG4gICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMua2V5RWxlbWVudCA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIENvbnZlcnQgZmllbGQgbmFtZXMgdG8gY2FtZWwgY2FzZSBub3RhdGlvbiBpZiB0aGUgb3ZlcnJpZGUgaXMgc2V0XG4gICAgICAgICAgICBpZiAodGhpcy5idWlsZGVyLm9wdGlvbnNbJ2NvbnZlcnRGaWVsZHNUb0NhbWVsQ2FzZSddICYmICEodGhpcyBpbnN0YW5jZW9mIE1lc3NhZ2UuRXh0ZW5zaW9uRmllbGQpKVxuICAgICAgICAgICAgICAgIHRoaXMubmFtZSA9IFByb3RvQnVmLlV0aWwudG9DYW1lbENhc2UodGhpcy5uYW1lKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQGFsaWFzIFByb3RvQnVmLlJlZmxlY3QuTWVzc2FnZS5GaWVsZC5wcm90b3R5cGVcbiAgICAgICAgICogQGlubmVyXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgRmllbGRQcm90b3R5cGUgPSBGaWVsZC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFQucHJvdG90eXBlKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQnVpbGRzIHRoZSBmaWVsZC5cbiAgICAgICAgICogQG92ZXJyaWRlXG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIEZpZWxkUHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gbmV3IEVsZW1lbnQodGhpcy50eXBlLCB0aGlzLnJlc29sdmVkVHlwZSwgZmFsc2UsIHRoaXMuc3ludGF4LCB0aGlzLm5hbWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMubWFwKVxuICAgICAgICAgICAgICAgIHRoaXMua2V5RWxlbWVudCA9IG5ldyBFbGVtZW50KHRoaXMua2V5VHlwZSwgdW5kZWZpbmVkLCB0cnVlLCB0aGlzLnN5bnRheCwgdGhpcy5uYW1lKTtcblxuICAgICAgICAgICAgLy8gSW4gcHJvdG8zLCBmaWVsZHMgZG8gbm90IGhhdmUgZmllbGQgcHJlc2VuY2UsIGFuZCBldmVyeSBmaWVsZCBpcyBzZXQgdG9cbiAgICAgICAgICAgIC8vIGl0cyB0eXBlJ3MgZGVmYXVsdCB2YWx1ZSAoXCJcIiwgMCwgMC4wLCBvciBmYWxzZSkuXG4gICAgICAgICAgICBpZiAodGhpcy5zeW50YXggPT09ICdwcm90bzMnICYmICF0aGlzLnJlcGVhdGVkICYmICF0aGlzLm1hcClcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IEVsZW1lbnQuZGVmYXVsdEZpZWxkVmFsdWUodGhpcy50eXBlKTtcblxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBkZWZhdWx0IHZhbHVlcyBhcmUgcHJlc2VudCB3aGVuIGV4cGxpY2l0bHkgc3BlY2lmaWVkXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zWydkZWZhdWx0J10gIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gdGhpcy52ZXJpZnlWYWx1ZSh0aGlzLm9wdGlvbnNbJ2RlZmF1bHQnXSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gdmFsdWUgY2FuIGJlIHNldCBmb3IgdGhpcyBmaWVsZC5cbiAgICAgICAgICogQHBhcmFtIHsqfSB2YWx1ZSBWYWx1ZSB0byBjaGVja1xuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBza2lwUmVwZWF0ZWQgV2hldGhlciB0byBza2lwIHRoZSByZXBlYXRlZCB2YWx1ZSBjaGVjayBvciBub3QuIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAgICAgKiBAcmV0dXJuIHsqfSBWZXJpZmllZCwgbWF5YmUgYWRqdXN0ZWQsIHZhbHVlXG4gICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgdmFsdWUgY2Fubm90IGJlIHNldCBmb3IgdGhpcyBmaWVsZFxuICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAqL1xuICAgICAgICBGaWVsZFByb3RvdHlwZS52ZXJpZnlWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgc2tpcFJlcGVhdGVkKSB7XG4gICAgICAgICAgICBza2lwUmVwZWF0ZWQgPSBza2lwUmVwZWF0ZWQgfHwgZmFsc2U7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBmdW5jdGlvbiBmYWlsKHZhbCwgbXNnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJJbGxlZ2FsIHZhbHVlIGZvciBcIiArIHNlbGYudG9TdHJpbmcodHJ1ZSkgKyBcIiBvZiB0eXBlIFwiICsgc2VsZi50eXBlLm5hbWUgKyBcIjogXCIgKyB2YWwgKyBcIiAoXCIgKyBtc2cgKyBcIilcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHsgLy8gTlVMTCB2YWx1ZXMgZm9yIG9wdGlvbmFsIGZpZWxkc1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlcXVpcmVkKVxuICAgICAgICAgICAgICAgICAgICBmYWlsKHR5cGVvZiB2YWx1ZSwgXCJyZXF1aXJlZFwiKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zeW50YXggPT09ICdwcm90bzMnICYmIHRoaXMudHlwZSAhPT0gUHJvdG9CdWYuVFlQRVNbXCJtZXNzYWdlXCJdKVxuICAgICAgICAgICAgICAgICAgICBmYWlsKHR5cGVvZiB2YWx1ZSwgXCJwcm90bzMgZmllbGQgd2l0aG91dCBmaWVsZCBwcmVzZW5jZSBjYW5ub3QgYmUgbnVsbFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgaWYgKHRoaXMucmVwZWF0ZWQgJiYgIXNraXBSZXBlYXRlZCkgeyAvLyBSZXBlYXRlZCB2YWx1ZXMgYXMgYXJyYXlzXG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBbdmFsdWVdO1xuICAgICAgICAgICAgICAgIHZhciByZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKHRoaXMuZWxlbWVudC52ZXJpZnlWYWx1ZSh2YWx1ZVtpXSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5tYXAgJiYgIXNraXBSZXBlYXRlZCkgeyAvLyBNYXAgdmFsdWVzIGFzIG9iamVjdHNcbiAgICAgICAgICAgICAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIFByb3RvQnVmLk1hcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgbm90IGFscmVhZHkgYSBNYXAsIGF0dGVtcHQgdG8gY29udmVydC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsKHR5cGVvZiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4cGVjdGVkIFByb3RvQnVmLk1hcCBvciByYXcgb2JqZWN0IGZvciBtYXAgZmllbGRcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm90b0J1Zi5NYXAodGhpcywgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBbGwgbm9uLXJlcGVhdGVkIGZpZWxkcyBleHBlY3Qgbm8gYXJyYXlcbiAgICAgICAgICAgIGlmICghdGhpcy5yZXBlYXRlZCAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSlcbiAgICAgICAgICAgICAgICBmYWlsKHR5cGVvZiB2YWx1ZSwgXCJubyBhcnJheSBleHBlY3RlZFwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC52ZXJpZnlWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgZmllbGQgd2lsbCBoYXZlIGEgcHJlc2VuY2Ugb24gdGhlIHdpcmUgZ2l2ZW4gaXRzXG4gICAgICAgICAqIHZhbHVlLlxuICAgICAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFZlcmlmaWVkIGZpZWxkIHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7IVByb3RvQnVmLkJ1aWxkZXIuTWVzc2FnZX0gbWVzc2FnZSBSdW50aW1lIG1lc3NhZ2VcbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciB0aGUgZmllbGQgd2lsbCBiZSBwcmVzZW50IG9uIHRoZSB3aXJlXG4gICAgICAgICAqL1xuICAgICAgICBGaWVsZFByb3RvdHlwZS5oYXNXaXJlUHJlc2VuY2UgPSBmdW5jdGlvbiAodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN5bnRheCAhPT0gJ3Byb3RvMycpXG4gICAgICAgICAgICAgICAgcmV0dXJuICh2YWx1ZSAhPT0gbnVsbCk7XG4gICAgICAgICAgICBpZiAodGhpcy5vbmVvZiAmJiBtZXNzYWdlW3RoaXMub25lb2YubmFtZV0gPT09IHRoaXMubmFtZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcImludDMyXCJdOlxuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJzaW50MzJcIl06XG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcInNmaXhlZDMyXCJdOlxuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJ1aW50MzJcIl06XG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcImZpeGVkMzJcIl06XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAhPT0gMDtcblxuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJpbnQ2NFwiXTpcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wic2ludDY0XCJdOlxuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJzZml4ZWQ2NFwiXTpcbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1widWludDY0XCJdOlxuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJmaXhlZDY0XCJdOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUubG93ICE9PSAwIHx8IHZhbHVlLmhpZ2ggIT09IDA7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wiYm9vbFwiXTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcImZsb2F0XCJdOlxuICAgICAgICAgICAgICAgIGNhc2UgUHJvdG9CdWYuVFlQRVNbXCJkb3VibGVcIl06XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAhPT0gMC4wO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcInN0cmluZ1wiXTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IDA7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wiYnl0ZXNcIl06XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5yZW1haW5pbmcoKSA+IDA7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFByb3RvQnVmLlRZUEVTW1wiZW51bVwiXTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSAwO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBQcm90b0J1Zi5UWVBFU1tcIm1lc3NhZ2VcIl06XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbDtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIGZpZWxkIHZhbHVlIHRvIHRoZSBzcGVjaWZpZWQgYnVmZmVyLlxuICAgICAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFZlcmlmaWVkIGZpZWxkIHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7Qnl0ZUJ1ZmZlcn0gYnVmZmVyIEJ5dGVCdWZmZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAqIEBwYXJhbSB7IVByb3RvQnVmLkJ1aWxkZXIuTWVzc2FnZX0gbWVzc2FnZSBSdW50aW1lIG1lc3NhZ2VcbiAgICAgICAgICogQHJldHVybiB7Qnl0ZUJ1ZmZlcn0gVGhlIEJ5dGVCdWZmZXIgZm9yIGNoYWluaW5nXG4gICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgZmllbGQgY2Fubm90IGJlIGVuY29kZWRcbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgRmllbGRQcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24gKHZhbHVlLCBidWZmZXIsIG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT09IG51bGwgfHwgdHlwZW9mIHRoaXMudHlwZSAhPT0gJ29iamVjdCcpXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJbSU5URVJOQUxdIFVucmVzb2x2ZWQgdHlwZSBpbiBcIiArIHRoaXMudG9TdHJpbmcodHJ1ZSkgKyBcIjogXCIgKyB0aGlzLnR5cGUpO1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8ICh0aGlzLnJlcGVhdGVkICYmIHZhbHVlLmxlbmd0aCA9PSAwKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVmZmVyOyAvLyBPcHRpb25hbCBvbWl0dGVkXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlcGVhdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgICAgICAgICAvLyBcIk9ubHkgcmVwZWF0ZWQgZmllbGRzIG9mIHByaW1pdGl2ZSBudW1lcmljIHR5cGVzICh0eXBlcyB3aGljaCB1c2UgdGhlIHZhcmludCwgMzItYml0LCBvciA2NC1iaXQgd2lyZVxuICAgICAgICAgICAgICAgICAgICAvLyB0eXBlcykgY2FuIGJlIGRlY2xhcmVkICdwYWNrZWQnLlwiXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnNbXCJwYWNrZWRcIl0gJiYgUHJvdG9CdWYuUEFDS0FCTEVfV0lSRV9UWVBFUy5pbmRleE9mKHRoaXMudHlwZS53aXJlVHlwZSkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gXCJBbGwgb2YgdGhlIGVsZW1lbnRzIG9mIHRoZSBmaWVsZCBhcmUgcGFja2VkIGludG8gYSBzaW5nbGUga2V5LXZhbHVlIHBhaXIgd2l0aCB3aXJlIHR5cGUgMlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKGxlbmd0aC1kZWxpbWl0ZWQpLiBFYWNoIGVsZW1lbnQgaXMgZW5jb2RlZCB0aGUgc2FtZSB3YXkgaXQgd291bGQgYmUgbm9ybWFsbHksIGV4Y2VwdCB3aXRob3V0IGFcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRhZyBwcmVjZWRpbmcgaXQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlci53cml0ZVZhcmludDMyKCh0aGlzLmlkIDw8IDMpIHwgUHJvdG9CdWYuV0lSRV9UWVBFUy5MREVMSU0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyLmVuc3VyZUNhcGFjaXR5KGJ1ZmZlci5vZmZzZXQgKz0gMSk7IC8vIFdlIGRvIG5vdCBrbm93IHRoZSBsZW5ndGggeWV0LCBzbyBsZXQncyBhc3N1bWUgYSB2YXJpbnQgb2YgbGVuZ3RoIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IGJ1ZmZlci5vZmZzZXQ7IC8vIFJlbWVtYmVyIHdoZXJlIHRoZSBjb250ZW50cyBiZWdpblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5lbmNvZGVWYWx1ZSh0aGlzLmlkLCB2YWx1ZVtpXSwgYnVmZmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsZW4gPSBidWZmZXIub2Zmc2V0IC0gc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaW50TGVuID0gQnl0ZUJ1ZmZlci5jYWxjdWxhdGVWYXJpbnQzMihsZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhcmludExlbiA+IDEpIHsgLy8gV2UgbmVlZCB0byBtb3ZlIHRoZSBjb250ZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50cyA9IGJ1ZmZlci5zbGljZShzdGFydCwgYnVmZmVyLm9mZnNldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgKz0gdmFyaW50TGVuIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIub2Zmc2V0ID0gc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyLmFwcGVuZChjb250ZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIud3JpdGVWYXJpbnQzMihsZW4sIHN0YXJ0IC0gdmFyaW50TGVuKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiSWYgeW91ciBtZXNzYWdlIGRlZmluaXRpb24gaGFzIHJlcGVhdGVkIGVsZW1lbnRzICh3aXRob3V0IHRoZSBbcGFja2VkPXRydWVdIG9wdGlvbiksIHRoZSBlbmNvZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtZXNzYWdlIGhhcyB6ZXJvIG9yIG1vcmUga2V5LXZhbHVlIHBhaXJzIHdpdGggdGhlIHNhbWUgdGFnIG51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyLndyaXRlVmFyaW50MzIoKHRoaXMuaWQgPDwgMykgfCB0aGlzLnR5cGUud2lyZVR5cGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuZW5jb2RlVmFsdWUodGhpcy5pZCwgdmFsdWVbaV0sIGJ1ZmZlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWFwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdyaXRlIG91dCBlYWNoIG1hcCBlbnRyeSBhcyBhIHN1Ym1lc3NhZ2UuXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24gKHZhbCwga2V5LCBtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb21wdXRlIHRoZSBsZW5ndGggb2YgdGhlIHN1Ym1lc3NhZ2UgKGtleSwgdmFsKSBwYWlyLlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQnl0ZUJ1ZmZlci5jYWxjdWxhdGVWYXJpbnQzMigoMSA8PCAzKSB8IHRoaXMua2V5VHlwZS53aXJlVHlwZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMua2V5RWxlbWVudC5jYWxjdWxhdGVMZW5ndGgoMSwga2V5KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQnl0ZUJ1ZmZlci5jYWxjdWxhdGVWYXJpbnQzMigoMiA8PCAzKSB8IHRoaXMudHlwZS53aXJlVHlwZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jYWxjdWxhdGVMZW5ndGgoMiwgdmFsKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3VibWVzc2FnZSB3aXRoIHdpcmUgdHlwZSBvZiBsZW5ndGgtZGVsaW1pdGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyLndyaXRlVmFyaW50MzIoKHRoaXMuaWQgPDwgMykgfCBQcm90b0J1Zi5XSVJFX1RZUEVTLkxERUxJTSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIud3JpdGVWYXJpbnQzMihsZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXcml0ZSBvdXQgdGhlIGtleSBhbmQgdmFsLlxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyLndyaXRlVmFyaW50MzIoKDEgPDwgMykgfCB0aGlzLmtleVR5cGUud2lyZVR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlFbGVtZW50LmVuY29kZVZhbHVlKDEsIGtleSwgYnVmZmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlci53cml0ZVZhcmludDMyKCgyIDw8IDMpIHwgdGhpcy50eXBlLndpcmVUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5lbmNvZGVWYWx1ZSgyLCB2YWwsIGJ1ZmZlcik7XG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc1dpcmVQcmVzZW5jZSh2YWx1ZSwgbWVzc2FnZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlci53cml0ZVZhcmludDMyKCh0aGlzLmlkIDw8IDMpIHwgdGhpcy50eXBlLndpcmVUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5lbmNvZGVWYWx1ZSh0aGlzLmlkLCB2YWx1ZSwgYnVmZmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIklsbGVnYWwgdmFsdWUgZm9yIFwiICsgdGhpcy50b1N0cmluZyh0cnVlKSArIFwiOiBcIiArIHZhbHVlICsgXCIgKFwiICsgZSArIFwiKVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiB0aGlzIGZpZWxkJ3MgdmFsdWUgb24gdGhlIG5ldHdvcmsgbGV2ZWwuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgRmllbGQgdmFsdWVcbiAgICAgICAgICogQHBhcmFtIHshUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlfSBtZXNzYWdlIFJ1bnRpbWUgbWVzc2FnZVxuICAgICAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBCeXRlIGxlbmd0aFxuICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAqL1xuICAgICAgICBGaWVsZFByb3RvdHlwZS5jYWxjdWxhdGUgPSBmdW5jdGlvbiAodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy52ZXJpZnlWYWx1ZSh2YWx1ZSk7IC8vIE1heSB0aHJvd1xuICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gbnVsbCB8fCB0eXBlb2YgdGhpcy50eXBlICE9PSAnb2JqZWN0JylcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIltJTlRFUk5BTF0gVW5yZXNvbHZlZCB0eXBlIGluIFwiICsgdGhpcy50b1N0cmluZyh0cnVlKSArIFwiOiBcIiArIHRoaXMudHlwZSk7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgKHRoaXMucmVwZWF0ZWQgJiYgdmFsdWUubGVuZ3RoID09IDApKVxuICAgICAgICAgICAgICAgIHJldHVybiAwOyAvLyBPcHRpb25hbCBvbWl0dGVkXG4gICAgICAgICAgICB2YXIgbiA9IDA7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlcGVhdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpLCBuaTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uc1tcInBhY2tlZFwiXSAmJiBQcm90b0J1Zi5QQUNLQUJMRV9XSVJFX1RZUEVTLmluZGV4T2YodGhpcy50eXBlLndpcmVUeXBlKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuICs9IEJ5dGVCdWZmZXIuY2FsY3VsYXRlVmFyaW50MzIoKHRoaXMuaWQgPDwgMykgfCBQcm90b0J1Zi5XSVJFX1RZUEVTLkxERUxJTSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmkgKz0gdGhpcy5lbGVtZW50LmNhbGN1bGF0ZUxlbmd0aCh0aGlzLmlkLCB2YWx1ZVtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuICs9IEJ5dGVCdWZmZXIuY2FsY3VsYXRlVmFyaW50MzIobmkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbiArPSBuaTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuICs9IEJ5dGVCdWZmZXIuY2FsY3VsYXRlVmFyaW50MzIoKHRoaXMuaWQgPDwgMykgfCB0aGlzLnR5cGUud2lyZVR5cGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuICs9IHRoaXMuZWxlbWVudC5jYWxjdWxhdGVMZW5ndGgodGhpcy5pZCwgdmFsdWVbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hcCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBFYWNoIG1hcCBlbnRyeSBiZWNvbWVzIGEgc3VibWVzc2FnZS5cbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBrZXksIG0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbXB1dGUgdGhlIGxlbmd0aCBvZiB0aGUgc3VibWVzc2FnZSAoa2V5LCB2YWwpIHBhaXIuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCeXRlQnVmZmVyLmNhbGN1bGF0ZVZhcmludDMyKCgxIDw8IDMpIHwgdGhpcy5rZXlUeXBlLndpcmVUeXBlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlFbGVtZW50LmNhbGN1bGF0ZUxlbmd0aCgxLCBrZXkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCeXRlQnVmZmVyLmNhbGN1bGF0ZVZhcmludDMyKCgyIDw8IDMpIHwgdGhpcy50eXBlLndpcmVUeXBlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNhbGN1bGF0ZUxlbmd0aCgyLCB2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBuICs9IEJ5dGVCdWZmZXIuY2FsY3VsYXRlVmFyaW50MzIoKHRoaXMuaWQgPDwgMykgfCBQcm90b0J1Zi5XSVJFX1RZUEVTLkxERUxJTSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuICs9IEJ5dGVCdWZmZXIuY2FsY3VsYXRlVmFyaW50MzIobGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4gKz0gbGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNXaXJlUHJlc2VuY2UodmFsdWUsIG1lc3NhZ2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuICs9IEJ5dGVCdWZmZXIuY2FsY3VsYXRlVmFyaW50MzIoKHRoaXMuaWQgPDwgMykgfCB0aGlzLnR5cGUud2lyZVR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbiArPSB0aGlzLmVsZW1lbnQuY2FsY3VsYXRlTGVuZ3RoKHRoaXMuaWQsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIklsbGVnYWwgdmFsdWUgZm9yIFwiICsgdGhpcy50b1N0cmluZyh0cnVlKSArIFwiOiBcIiArIHZhbHVlICsgXCIgKFwiICsgZSArIFwiKVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWNvZGUgdGhlIGZpZWxkIHZhbHVlIGZyb20gdGhlIHNwZWNpZmllZCBidWZmZXIuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aXJlVHlwZSBMZWFkaW5nIHdpcmUgdHlwZVxuICAgICAgICAgKiBAcGFyYW0ge0J5dGVCdWZmZXJ9IGJ1ZmZlciBCeXRlQnVmZmVyIHRvIGRlY29kZSBmcm9tXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IHNraXBSZXBlYXRlZCBXaGV0aGVyIHRvIHNraXAgdGhlIHJlcGVhdGVkIGNoZWNrIG9yIG5vdC4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICAgICAqIEByZXR1cm4geyp9IERlY29kZWQgdmFsdWU6IGFycmF5IGZvciBwYWNrZWQgcmVwZWF0ZWQgZmllbGRzLCBba2V5LCB2YWx1ZV0gZm9yXG4gICAgICAgICAqICAgICAgICAgICAgIG1hcCBmaWVsZHMsIG9yIGFuIGluZGl2aWR1YWwgdmFsdWUgb3RoZXJ3aXNlLlxuICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIGZpZWxkIGNhbm5vdCBiZSBkZWNvZGVkXG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIEZpZWxkUHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uICh3aXJlVHlwZSwgYnVmZmVyLCBza2lwUmVwZWF0ZWQpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSwgbkJ5dGVzO1xuXG4gICAgICAgICAgICAvLyBXZSBleHBlY3Qgd2lyZVR5cGUgdG8gbWF0Y2ggdGhlIHVuZGVybHlpbmcgdHlwZSdzIHdpcmVUeXBlIHVubGVzcyB3ZSBzZWVcbiAgICAgICAgICAgIC8vIGEgcGFja2VkIHJlcGVhdGVkIGZpZWxkLCBvciB1bmxlc3MgdGhpcyBpcyBhIG1hcCBmaWVsZC5cbiAgICAgICAgICAgIHZhciB3aXJlVHlwZU9LID1cbiAgICAgICAgICAgICAgICAoIXRoaXMubWFwICYmIHdpcmVUeXBlID09IHRoaXMudHlwZS53aXJlVHlwZSkgfHxcbiAgICAgICAgICAgICAgICAoIXNraXBSZXBlYXRlZCAmJiB0aGlzLnJlcGVhdGVkICYmIHRoaXMub3B0aW9uc1tcInBhY2tlZFwiXSAmJlxuICAgICAgICAgICAgICAgICAgICB3aXJlVHlwZSA9PSBQcm90b0J1Zi5XSVJFX1RZUEVTLkxERUxJTSkgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5tYXAgJiYgd2lyZVR5cGUgPT0gUHJvdG9CdWYuV0lSRV9UWVBFUy5MREVMSU0pO1xuICAgICAgICAgICAgaWYgKCF3aXJlVHlwZU9LKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiSWxsZWdhbCB3aXJlIHR5cGUgZm9yIGZpZWxkIFwiICsgdGhpcy50b1N0cmluZyh0cnVlKSArIFwiOiBcIiArIHdpcmVUeXBlICsgXCIgKFwiICsgdGhpcy50eXBlLndpcmVUeXBlICsgXCIgZXhwZWN0ZWQpXCIpO1xuXG4gICAgICAgICAgICAvLyBIYW5kbGUgcGFja2VkIHJlcGVhdGVkIGZpZWxkcy5cbiAgICAgICAgICAgIGlmICh3aXJlVHlwZSA9PSBQcm90b0J1Zi5XSVJFX1RZUEVTLkxERUxJTSAmJiB0aGlzLnJlcGVhdGVkICYmIHRoaXMub3B0aW9uc1tcInBhY2tlZFwiXSAmJiBQcm90b0J1Zi5QQUNLQUJMRV9XSVJFX1RZUEVTLmluZGV4T2YodGhpcy50eXBlLndpcmVUeXBlKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFza2lwUmVwZWF0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbkJ5dGVzID0gYnVmZmVyLnJlYWRWYXJpbnQzMigpO1xuICAgICAgICAgICAgICAgICAgICBuQnl0ZXMgPSBidWZmZXIub2Zmc2V0ICsgbkJ5dGVzOyAvLyBMaW1pdFxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChidWZmZXIub2Zmc2V0IDwgbkJ5dGVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnB1c2godGhpcy5kZWNvZGUodGhpcy50eXBlLndpcmVUeXBlLCBidWZmZXIsIHRydWUpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUmVhZCB0aGUgbmV4dCB2YWx1ZSBvdGhlcndpc2UuLi5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSGFuZGxlIG1hcHMuXG4gICAgICAgICAgICBpZiAodGhpcy5tYXApIHtcbiAgICAgICAgICAgICAgICAvLyBSZWFkIG9uZSAoa2V5LCB2YWx1ZSkgc3VibWVzc2FnZSwgYW5kIHJldHVybiBba2V5LCB2YWx1ZV1cbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gRWxlbWVudC5kZWZhdWx0RmllbGRWYWx1ZSh0aGlzLmtleVR5cGUpO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gRWxlbWVudC5kZWZhdWx0RmllbGRWYWx1ZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVhZCB0aGUgbGVuZ3RoXG4gICAgICAgICAgICAgICAgbkJ5dGVzID0gYnVmZmVyLnJlYWRWYXJpbnQzMigpO1xuICAgICAgICAgICAgICAgIGlmIChidWZmZXIucmVtYWluaW5nKCkgPCBuQnl0ZXMpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiSWxsZWdhbCBudW1iZXIgb2YgYnl0ZXMgZm9yIFwiICsgdGhpcy50b1N0cmluZyh0cnVlKSArIFwiOiBcIiArIG5CeXRlcyArIFwiIHJlcXVpcmVkIGJ1dCBnb3Qgb25seSBcIiArIGJ1ZmZlci5yZW1haW5pbmcoKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBHZXQgYSBzdWItYnVmZmVyIG9mIHRoaXMga2V5L3ZhbHVlIHN1Ym1lc3NhZ2VcbiAgICAgICAgICAgICAgICB2YXIgbXNnYnVmID0gYnVmZmVyLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgbXNnYnVmLmxpbWl0ID0gbXNnYnVmLm9mZnNldCArIG5CeXRlcztcbiAgICAgICAgICAgICAgICBidWZmZXIub2Zmc2V0ICs9IG5CeXRlcztcblxuICAgICAgICAgICAgICAgIHdoaWxlIChtc2didWYucmVtYWluaW5nKCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWcgPSBtc2didWYucmVhZFZhcmludDMyKCk7XG4gICAgICAgICAgICAgICAgICAgIHdpcmVUeXBlID0gdGFnICYgMHgwNztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gdGFnID4+PiAzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaWQgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHRoaXMua2V5RWxlbWVudC5kZWNvZGUobXNnYnVmLCB3aXJlVHlwZSwgaWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlkID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZWxlbWVudC5kZWNvZGUobXNnYnVmLCB3aXJlVHlwZSwgaWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJVbmV4cGVjdGVkIHRhZyBpbiBtYXAgZmllbGQga2V5L3ZhbHVlIHN1Ym1lc3NhZ2VcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gW2tleSwgdmFsdWVdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBIYW5kbGUgc2luZ3VsYXIgYW5kIG5vbi1wYWNrZWQgcmVwZWF0ZWQgZmllbGQgdmFsdWVzLlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5kZWNvZGUoYnVmZmVyLCB3aXJlVHlwZSwgdGhpcy5pZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhbGlhcyBQcm90b0J1Zi5SZWZsZWN0Lk1lc3NhZ2UuRmllbGRcbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgUmVmbGVjdC5NZXNzYWdlLkZpZWxkID0gRmllbGQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgTWVzc2FnZSBFeHRlbnNpb25GaWVsZC5cbiAgICAgICAgICogQGV4cG9ydHMgUHJvdG9CdWYuUmVmbGVjdC5NZXNzYWdlLkV4dGVuc2lvbkZpZWxkXG4gICAgICAgICAqIEBwYXJhbSB7IVByb3RvQnVmLkJ1aWxkZXJ9IGJ1aWxkZXIgQnVpbGRlciByZWZlcmVuY2VcbiAgICAgICAgICogQHBhcmFtIHshUHJvdG9CdWYuUmVmbGVjdC5NZXNzYWdlfSBtZXNzYWdlIE1lc3NhZ2UgcmVmZXJlbmNlXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBydWxlIFJ1bGUsIG9uZSBvZiByZXF1cmllZCwgb3B0aW9uYWwsIHJlcGVhdGVkXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIERhdGEgdHlwZSwgZS5nLiBpbnQzMlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBGaWVsZCBuYW1lXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpZCBVbmlxdWUgZmllbGQgaWRcbiAgICAgICAgICogQHBhcmFtIHshT2JqZWN0LjxzdHJpbmcsKj49fSBvcHRpb25zIE9wdGlvbnNcbiAgICAgICAgICogQGNvbnN0cnVjdG9yXG4gICAgICAgICAqIEBleHRlbmRzIFByb3RvQnVmLlJlZmxlY3QuTWVzc2FnZS5GaWVsZFxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIEV4dGVuc2lvbkZpZWxkID0gZnVuY3Rpb24gKGJ1aWxkZXIsIG1lc3NhZ2UsIHJ1bGUsIHR5cGUsIG5hbWUsIGlkLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBGaWVsZC5jYWxsKHRoaXMsIGJ1aWxkZXIsIG1lc3NhZ2UsIHJ1bGUsIC8qIGtleXR5cGUgPSAqLyBudWxsLCB0eXBlLCBuYW1lLCBpZCwgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRXh0ZW5zaW9uIHJlZmVyZW5jZS5cbiAgICAgICAgICAgICAqIEB0eXBlIHshUHJvdG9CdWYuUmVmbGVjdC5FeHRlbnNpb259XG4gICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuZXh0ZW5zaW9uO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEV4dGVuZHMgRmllbGRcbiAgICAgICAgRXh0ZW5zaW9uRmllbGQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShGaWVsZC5wcm90b3R5cGUpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAYWxpYXMgUHJvdG9CdWYuUmVmbGVjdC5NZXNzYWdlLkV4dGVuc2lvbkZpZWxkXG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIFJlZmxlY3QuTWVzc2FnZS5FeHRlbnNpb25GaWVsZCA9IEV4dGVuc2lvbkZpZWxkO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IE1lc3NhZ2UgT25lT2YuXG4gICAgICAgICAqIEBleHBvcnRzIFByb3RvQnVmLlJlZmxlY3QuTWVzc2FnZS5PbmVPZlxuICAgICAgICAgKiBAcGFyYW0geyFQcm90b0J1Zi5CdWlsZGVyfSBidWlsZGVyIEJ1aWxkZXIgcmVmZXJlbmNlXG4gICAgICAgICAqIEBwYXJhbSB7IVByb3RvQnVmLlJlZmxlY3QuTWVzc2FnZX0gbWVzc2FnZSBNZXNzYWdlIHJlZmVyZW5jZVxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBPbmVPZiBuYW1lXG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKiBAZXh0ZW5kcyBQcm90b0J1Zi5SZWZsZWN0LlRcbiAgICAgICAgICovXG4gICAgICAgIHZhciBPbmVPZiA9IGZ1bmN0aW9uIChidWlsZGVyLCBtZXNzYWdlLCBuYW1lKSB7XG4gICAgICAgICAgICBULmNhbGwodGhpcywgYnVpbGRlciwgbWVzc2FnZSwgbmFtZSk7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRW5jbG9zZWQgZmllbGRzLlxuICAgICAgICAgICAgICogQHR5cGUgeyFBcnJheS48IVByb3RvQnVmLlJlZmxlY3QuTWVzc2FnZS5GaWVsZD59XG4gICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuZmllbGRzID0gW107XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhbGlhcyBQcm90b0J1Zi5SZWZsZWN0Lk1lc3NhZ2UuT25lT2ZcbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgUmVmbGVjdC5NZXNzYWdlLk9uZU9mID0gT25lT2Y7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgRW51bS5cbiAgICAgICAgICogQGV4cG9ydHMgUHJvdG9CdWYuUmVmbGVjdC5FbnVtXG4gICAgICAgICAqIEBwYXJhbSB7IVByb3RvQnVmLkJ1aWxkZXJ9IGJ1aWxkZXIgQnVpbGRlciByZWZlcmVuY2VcbiAgICAgICAgICogQHBhcmFtIHshUHJvdG9CdWYuUmVmbGVjdC5UfSBwYXJlbnQgUGFyZW50IFJlZmxlY3Qgb2JqZWN0XG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIEVudW0gbmFtZVxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+PX0gb3B0aW9ucyBFbnVtIG9wdGlvbnNcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmc/fSBzeW50YXggVGhlIHN5bnRheCBsZXZlbCAoZS5nLiwgcHJvdG8zKVxuICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICogQGV4dGVuZHMgUHJvdG9CdWYuUmVmbGVjdC5OYW1lc3BhY2VcbiAgICAgICAgICovXG4gICAgICAgIHZhciBFbnVtID0gZnVuY3Rpb24gKGJ1aWxkZXIsIHBhcmVudCwgbmFtZSwgb3B0aW9ucywgc3ludGF4KSB7XG4gICAgICAgICAgICBOYW1lc3BhY2UuY2FsbCh0aGlzLCBidWlsZGVyLCBwYXJlbnQsIG5hbWUsIG9wdGlvbnMsIHN5bnRheCk7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJFbnVtXCI7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUnVudGltZSBlbnVtIG9iamVjdC5cbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3QuPHN0cmluZyxudW1iZXI+fG51bGx9XG4gICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMub2JqZWN0ID0gbnVsbDtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgc3RyaW5nIG5hbWUgb2YgYW4gZW51bSB2YWx1ZS5cbiAgICAgICAgICogQHBhcmFtIHshUHJvdG9CdWYuQnVpbGRlci5FbnVtfSBlbm0gUnVudGltZSBlbnVtXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBFbnVtIHZhbHVlXG4gICAgICAgICAqIEByZXR1cm5zIHs/c3RyaW5nfSBOYW1lIG9yIGBudWxsYCBpZiBub3QgcHJlc2VudFxuICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAqL1xuICAgICAgICBFbnVtLmdldE5hbWUgPSBmdW5jdGlvbiAoZW5tLCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhlbm0pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGtleTsgaSA8IGtleXMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgaWYgKGVubVtrZXkgPSBrZXlzW2ldXSA9PT0gdmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQGFsaWFzIFByb3RvQnVmLlJlZmxlY3QuRW51bS5wcm90b3R5cGVcbiAgICAgICAgICogQGlubmVyXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgRW51bVByb3RvdHlwZSA9IEVudW0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShOYW1lc3BhY2UucHJvdG90eXBlKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQnVpbGRzIHRoaXMgZW51bSBhbmQgcmV0dXJucyB0aGUgcnVudGltZSBjb3VudGVycGFydC5cbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSByZWJ1aWxkIFdoZXRoZXIgdG8gcmVidWlsZCBvciBub3QsIGRlZmF1bHRzIHRvIGZhbHNlXG4gICAgICAgICAqIEByZXR1cm5zIHshT2JqZWN0LjxzdHJpbmcsbnVtYmVyPn1cbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgRW51bVByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uIChyZWJ1aWxkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vYmplY3QgJiYgIXJlYnVpbGQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0O1xuICAgICAgICAgICAgdmFyIGVubSA9IG5ldyBQcm90b0J1Zi5CdWlsZGVyLkVudW0oKSxcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSB0aGlzLmdldENoaWxkcmVuKEVudW0uVmFsdWUpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGsgPSB2YWx1ZXMubGVuZ3RoOyBpIDwgazsgKytpKVxuICAgICAgICAgICAgICAgIGVubVt2YWx1ZXNbaV1bJ25hbWUnXV0gPSB2YWx1ZXNbaV1bJ2lkJ107XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KVxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbm0sICckb3B0aW9ucycsIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB0aGlzLmJ1aWxkT3B0KCksXG4gICAgICAgICAgICAgICAgICAgIFwiZW51bWVyYWJsZVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0ID0gZW5tO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAYWxpYXMgUHJvdG9CdWYuUmVmbGVjdC5FbnVtXG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIFJlZmxlY3QuRW51bSA9IEVudW07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgRW51bSBWYWx1ZS5cbiAgICAgICAgICogQGV4cG9ydHMgUHJvdG9CdWYuUmVmbGVjdC5FbnVtLlZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7IVByb3RvQnVmLkJ1aWxkZXJ9IGJ1aWxkZXIgQnVpbGRlciByZWZlcmVuY2VcbiAgICAgICAgICogQHBhcmFtIHshUHJvdG9CdWYuUmVmbGVjdC5FbnVtfSBlbm0gRW51bSByZWZlcmVuY2VcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgRmllbGQgbmFtZVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gaWQgVW5pcXVlIGZpZWxkIGlkXG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKiBAZXh0ZW5kcyBQcm90b0J1Zi5SZWZsZWN0LlRcbiAgICAgICAgICovXG4gICAgICAgIHZhciBWYWx1ZSA9IGZ1bmN0aW9uIChidWlsZGVyLCBlbm0sIG5hbWUsIGlkKSB7XG4gICAgICAgICAgICBULmNhbGwodGhpcywgYnVpbGRlciwgZW5tLCBuYW1lKTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAb3ZlcnJpZGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcIkVudW0uVmFsdWVcIjtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBVbmlxdWUgZW51bSB2YWx1ZSBpZC5cbiAgICAgICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBFeHRlbmRzIFRcbiAgICAgICAgVmFsdWUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShULnByb3RvdHlwZSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhbGlhcyBQcm90b0J1Zi5SZWZsZWN0LkVudW0uVmFsdWVcbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgUmVmbGVjdC5FbnVtLlZhbHVlID0gVmFsdWU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGV4dGVuc2lvbiAoZmllbGQpLlxuICAgICAgICAgKiBAZXhwb3J0cyBQcm90b0J1Zi5SZWZsZWN0LkV4dGVuc2lvblxuICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICogQHBhcmFtIHshUHJvdG9CdWYuQnVpbGRlcn0gYnVpbGRlciBCdWlsZGVyIHJlZmVyZW5jZVxuICAgICAgICAgKiBAcGFyYW0geyFQcm90b0J1Zi5SZWZsZWN0LlR9IHBhcmVudCBQYXJlbnQgb2JqZWN0XG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE9iamVjdCBuYW1lXG4gICAgICAgICAqIEBwYXJhbSB7IVByb3RvQnVmLlJlZmxlY3QuTWVzc2FnZS5GaWVsZH0gZmllbGQgRXh0ZW5zaW9uIGZpZWxkXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgRXh0ZW5zaW9uID0gZnVuY3Rpb24gKGJ1aWxkZXIsIHBhcmVudCwgbmFtZSwgZmllbGQpIHtcbiAgICAgICAgICAgIFQuY2FsbCh0aGlzLCBidWlsZGVyLCBwYXJlbnQsIG5hbWUpO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEV4dGVuZGVkIG1lc3NhZ2UgZmllbGQuXG4gICAgICAgICAgICAgKiBAdHlwZSB7IVByb3RvQnVmLlJlZmxlY3QuTWVzc2FnZS5GaWVsZH1cbiAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5maWVsZCA9IGZpZWxkO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEV4dGVuZHMgVFxuICAgICAgICBFeHRlbnNpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShULnByb3RvdHlwZSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhbGlhcyBQcm90b0J1Zi5SZWZsZWN0LkV4dGVuc2lvblxuICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAqL1xuICAgICAgICBSZWZsZWN0LkV4dGVuc2lvbiA9IEV4dGVuc2lvbjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29uc3RydWN0cyBhIG5ldyBTZXJ2aWNlLlxuICAgICAgICAgKiBAZXhwb3J0cyBQcm90b0J1Zi5SZWZsZWN0LlNlcnZpY2VcbiAgICAgICAgICogQHBhcmFtIHshUHJvdG9CdWYuQnVpbGRlcn0gYnVpbGRlciBCdWlsZGVyIHJlZmVyZW5jZVxuICAgICAgICAgKiBAcGFyYW0geyFQcm90b0J1Zi5SZWZsZWN0Lk5hbWVzcGFjZX0gcm9vdCBSb290XG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFNlcnZpY2UgbmFtZVxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+PX0gb3B0aW9ucyBPcHRpb25zXG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKiBAZXh0ZW5kcyBQcm90b0J1Zi5SZWZsZWN0Lk5hbWVzcGFjZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIFNlcnZpY2UgPSBmdW5jdGlvbiAoYnVpbGRlciwgcm9vdCwgbmFtZSwgb3B0aW9ucykge1xuICAgICAgICAgICAgTmFtZXNwYWNlLmNhbGwodGhpcywgYnVpbGRlciwgcm9vdCwgbmFtZSwgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJTZXJ2aWNlXCI7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQnVpbHQgcnVudGltZSBzZXJ2aWNlIGNsYXNzLlxuICAgICAgICAgICAgICogQHR5cGUgez9mdW5jdGlvbihuZXc6UHJvdG9CdWYuQnVpbGRlci5TZXJ2aWNlKX1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5jbGF6eiA9IG51bGw7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhbGlhcyBQcm90b0J1Zi5SZWZsZWN0LlNlcnZpY2UucHJvdG90eXBlXG4gICAgICAgICAqIEBpbm5lclxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIFNlcnZpY2VQcm90b3R5cGUgPSBTZXJ2aWNlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTmFtZXNwYWNlLnByb3RvdHlwZSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJ1aWxkcyB0aGUgc2VydmljZSBhbmQgcmV0dXJucyB0aGUgcnVudGltZSBjb3VudGVycGFydCwgd2hpY2ggaXMgYSBmdWxseSBmdW5jdGlvbmFsIGNsYXNzLlxuICAgICAgICAgKiBAc2VlIFByb3RvQnVmLkJ1aWxkZXIuU2VydmljZVxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSByZWJ1aWxkIFdoZXRoZXIgdG8gcmVidWlsZCBvciBub3RcbiAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IFNlcnZpY2UgY2xhc3NcbiAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBtZXNzYWdlIGNhbm5vdCBiZSBidWlsdFxuICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAqL1xuICAgICAgICBTZXJ2aWNlUHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24gKHJlYnVpbGQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNsYXp6ICYmICFyZWJ1aWxkKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNsYXp6O1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIHJ1bnRpbWUgU2VydmljZSBjbGFzcyBpbiBpdHMgb3duIHNjb3BlXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbGF6eiA9IChmdW5jdGlvbiAoUHJvdG9CdWYsIFQpIHtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgcnVudGltZSBTZXJ2aWNlLlxuICAgICAgICAgICAgICAgICAqIEBuYW1lIFByb3RvQnVmLkJ1aWxkZXIuU2VydmljZVxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nLCBQcm90b0J1Zi5CdWlsZGVyLk1lc3NhZ2UsIGZ1bmN0aW9uKEVycm9yLCBQcm90b0J1Zi5CdWlsZGVyLk1lc3NhZ2U9KSk9fSBycGNJbXBsIFJQQyBpbXBsZW1lbnRhdGlvbiByZWNlaXZpbmcgdGhlIG1ldGhvZCBuYW1lIGFuZCB0aGUgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAqIEBjbGFzcyBCYXJlYm9uZSBvZiBhbGwgcnVudGltZSBzZXJ2aWNlcy5cbiAgICAgICAgICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHNlcnZpY2UgY2Fubm90IGJlIGNyZWF0ZWRcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB2YXIgU2VydmljZSA9IGZ1bmN0aW9uIChycGNJbXBsKSB7XG4gICAgICAgICAgICAgICAgICAgIFByb3RvQnVmLkJ1aWxkZXIuU2VydmljZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBTZXJ2aWNlIGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgKiBAbmFtZSBQcm90b0J1Zi5CdWlsZGVyLlNlcnZpY2UjcnBjSW1wbFxuICAgICAgICAgICAgICAgICAgICAgKiBAdHlwZSB7IWZ1bmN0aW9uKHN0cmluZywgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlLCBmdW5jdGlvbihFcnJvciwgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlPSkpfVxuICAgICAgICAgICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJwY0ltcGwgPSBycGNJbXBsIHx8IGZ1bmN0aW9uIChuYW1lLCBtc2csIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHdoYXQgYSB1c2VyIGhhcyB0byBpbXBsZW1lbnQ6IEEgZnVuY3Rpb24gcmVjZWl2aW5nIHRoZSBtZXRob2QgbmFtZSwgdGhlIGFjdHVhbCBtZXNzYWdlIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZW5kICh0eXBlIGNoZWNrZWQpIGFuZCB0aGUgY2FsbGJhY2sgdGhhdCdzIGVpdGhlciBwcm92aWRlZCB3aXRoIHRoZSBlcnJvciBhcyBpdHMgZmlyc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFyZ3VtZW50IG9yIG51bGwgYW5kIHRoZSBhY3R1YWwgcmVzcG9uc2UgbWVzc2FnZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2suYmluZCh0aGlzLCBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCwgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGNvZGVJTy9Qcm90b0J1Zi5qcy93aWtpL1NlcnZpY2VzXCIpKSwgMCk7IC8vIE11c3QgYmUgYXN5bmMhXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEBhbGlhcyBQcm90b0J1Zi5CdWlsZGVyLlNlcnZpY2UucHJvdG90eXBlXG4gICAgICAgICAgICAgICAgICogQGlubmVyXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdmFyIFNlcnZpY2VQcm90b3R5cGUgPSBTZXJ2aWNlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUHJvdG9CdWYuQnVpbGRlci5TZXJ2aWNlLnByb3RvdHlwZSk7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBBc3luY2hyb25vdXNseSBwZXJmb3JtcyBhbiBSUEMgY2FsbCB1c2luZyB0aGUgZ2l2ZW4gUlBDIGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgICAgICAgICAqIEBuYW1lIFByb3RvQnVmLkJ1aWxkZXIuU2VydmljZS5bTWV0aG9kXVxuICAgICAgICAgICAgICAgICAqIEBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7IWZ1bmN0aW9uKHN0cmluZywgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlLCBmdW5jdGlvbihFcnJvciwgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlPSkpfSBycGNJbXBsIFJQQyBpbXBsZW1lbnRhdGlvblxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7UHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlfSByZXEgUmVxdWVzdFxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oRXJyb3IsIChQcm90b0J1Zi5CdWlsZGVyLk1lc3NhZ2V8Qnl0ZUJ1ZmZlcnxCdWZmZXJ8c3RyaW5nKT0pfSBjYWxsYmFjayBDYWxsYmFjayByZWNlaXZpbmdcbiAgICAgICAgICAgICAgICAgKiAgdGhlIGVycm9yIGlmIGFueSBhbmQgdGhlIHJlc3BvbnNlIGVpdGhlciBhcyBhIHByZS1wYXJzZWQgbWVzc2FnZSBvciBhcyBpdHMgcmF3IGJ5dGVzXG4gICAgICAgICAgICAgICAgICogQGFic3RyYWN0XG4gICAgICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBBc3luY2hyb25vdXNseSBwZXJmb3JtcyBhbiBSUEMgY2FsbCB1c2luZyB0aGUgaW5zdGFuY2UncyBSUEMgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgICAgICAgICogQG5hbWUgUHJvdG9CdWYuQnVpbGRlci5TZXJ2aWNlI1tNZXRob2RdXG4gICAgICAgICAgICAgICAgICogQGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHtQcm90b0J1Zi5CdWlsZGVyLk1lc3NhZ2V9IHJlcSBSZXF1ZXN0XG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbihFcnJvciwgKFByb3RvQnVmLkJ1aWxkZXIuTWVzc2FnZXxCeXRlQnVmZmVyfEJ1ZmZlcnxzdHJpbmcpPSl9IGNhbGxiYWNrIENhbGxiYWNrIHJlY2VpdmluZ1xuICAgICAgICAgICAgICAgICAqICB0aGUgZXJyb3IgaWYgYW55IGFuZCB0aGUgcmVzcG9uc2UgZWl0aGVyIGFzIGEgcHJlLXBhcnNlZCBtZXNzYWdlIG9yIGFzIGl0cyByYXcgYnl0ZXNcbiAgICAgICAgICAgICAgICAgKiBAYWJzdHJhY3RcbiAgICAgICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgICAgIHZhciBycGMgPSBULmdldENoaWxkcmVuKFByb3RvQnVmLlJlZmxlY3QuU2VydmljZS5SUENNZXRob2QpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnBjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbiAobWV0aG9kKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlcnZpY2UjTWV0aG9kKG1lc3NhZ2UsIGNhbGxiYWNrKVxuICAgICAgICAgICAgICAgICAgICAgICAgU2VydmljZVByb3RvdHlwZVttZXRob2QubmFtZV0gPSBmdW5jdGlvbiAocmVxLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBnaXZlbiBhcyBhIGJ1ZmZlciwgZGVjb2RlIHRoZSByZXF1ZXN0LiBXaWxsIHRocm93IGEgVHlwZUVycm9yIGlmIG5vdCBhIHZhbGlkIGJ1ZmZlci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcSA9IG1ldGhvZC5yZXNvbHZlZFJlcXVlc3RUeXBlLmNsYXp6LmRlY29kZShCeXRlQnVmZmVyLndyYXAocmVxKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoZXJyIGluc3RhbmNlb2YgVHlwZUVycm9yKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcSA9PT0gbnVsbCB8fCB0eXBlb2YgcmVxICE9PSAnb2JqZWN0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiSWxsZWdhbCBhcmd1bWVudHNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHJlcSBpbnN0YW5jZW9mIG1ldGhvZC5yZXNvbHZlZFJlcXVlc3RUeXBlLmNsYXp6KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcSA9IG5ldyBtZXRob2QucmVzb2x2ZWRSZXF1ZXN0VHlwZS5jbGF6eihyZXEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJwY0ltcGwobWV0aG9kLmZxbigpLCByZXEsIGZ1bmN0aW9uIChlcnIsIHJlcykgeyAvLyBBc3N1bWVzIHRoYXQgdGhpcyBpcyBwcm9wZXJseSBhc3luY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29hbGVzY2UgdG8gZW1wdHkgc3RyaW5nIHdoZW4gc2VydmljZSByZXNwb25zZSBoYXMgZW1wdHkgY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcyA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMgPSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHsgcmVzID0gbWV0aG9kLnJlc29sdmVkUmVzcG9uc2VUeXBlLmNsYXp6LmRlY29kZShyZXMpOyB9IGNhdGNoIChub3RBQnVmZmVyKSB7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzIHx8ICEocmVzIGluc3RhbmNlb2YgbWV0aG9kLnJlc29sdmVkUmVzcG9uc2VUeXBlLmNsYXp6KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKEVycm9yKFwiSWxsZWdhbCByZXNwb25zZSB0eXBlIHJlY2VpdmVkIGluIHNlcnZpY2UgbWV0aG9kIFwiICsgVC5uYW1lICsgXCIjXCIgKyBtZXRob2QubmFtZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNhbGxiYWNrLmJpbmQodGhpcywgZXJyKSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VydmljZS5NZXRob2QocnBjSW1wbCwgbWVzc2FnZSwgY2FsbGJhY2spXG4gICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlW21ldGhvZC5uYW1lXSA9IGZ1bmN0aW9uIChycGNJbXBsLCByZXEsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFNlcnZpY2UocnBjSW1wbClbbWV0aG9kLm5hbWVdKHJlcSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VydmljZVttZXRob2QubmFtZV0sIFwiJG9wdGlvbnNcIiwgeyBcInZhbHVlXCI6IG1ldGhvZC5idWlsZE9wdCgpIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VydmljZVByb3RvdHlwZVttZXRob2QubmFtZV0sIFwiJG9wdGlvbnNcIiwgeyBcInZhbHVlXCI6IFNlcnZpY2VbbWV0aG9kLm5hbWVdW1wiJG9wdGlvbnNcIl0gfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pKHJwY1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUHJvcGVydGllc1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogU2VydmljZSBvcHRpb25zLlxuICAgICAgICAgICAgICAgICAqIEBuYW1lIFByb3RvQnVmLkJ1aWxkZXIuU2VydmljZS4kb3B0aW9uc1xuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3QuPHN0cmluZywqPn1cbiAgICAgICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdmFyICRvcHRpb25zUzsgLy8gY2MgbmVlZHMgdGhpc1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogU2VydmljZSBvcHRpb25zLlxuICAgICAgICAgICAgICAgICAqIEBuYW1lIFByb3RvQnVmLkJ1aWxkZXIuU2VydmljZSMkb3B0aW9uc1xuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3QuPHN0cmluZywqPn1cbiAgICAgICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdmFyICRvcHRpb25zO1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogUmVmbGVjdGlvbiB0eXBlLlxuICAgICAgICAgICAgICAgICAqIEBuYW1lIFByb3RvQnVmLkJ1aWxkZXIuU2VydmljZS4kdHlwZVxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHshUHJvdG9CdWYuUmVmbGVjdC5TZXJ2aWNlfVxuICAgICAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB2YXIgJHR5cGVTO1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogUmVmbGVjdGlvbiB0eXBlLlxuICAgICAgICAgICAgICAgICAqIEBuYW1lIFByb3RvQnVmLkJ1aWxkZXIuU2VydmljZSMkdHlwZVxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHshUHJvdG9CdWYuUmVmbGVjdC5TZXJ2aWNlfVxuICAgICAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB2YXIgJHR5cGU7XG5cbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KVxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VydmljZSwgXCIkb3B0aW9uc1wiLCB7IFwidmFsdWVcIjogVC5idWlsZE9wdCgpIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlcnZpY2VQcm90b3R5cGUsIFwiJG9wdGlvbnNcIiwgeyBcInZhbHVlXCI6IFNlcnZpY2VbXCIkb3B0aW9uc1wiXSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZXJ2aWNlLCBcIiR0eXBlXCIsIHsgXCJ2YWx1ZVwiOiBUIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlcnZpY2VQcm90b3R5cGUsIFwiJHR5cGVcIiwgeyBcInZhbHVlXCI6IFQgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gU2VydmljZTtcblxuICAgICAgICAgICAgfSkoUHJvdG9CdWYsIHRoaXMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAYWxpYXMgUHJvdG9CdWYuUmVmbGVjdC5TZXJ2aWNlXG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIFJlZmxlY3QuU2VydmljZSA9IFNlcnZpY2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFic3RyYWN0IHNlcnZpY2UgbWV0aG9kLlxuICAgICAgICAgKiBAZXhwb3J0cyBQcm90b0J1Zi5SZWZsZWN0LlNlcnZpY2UuTWV0aG9kXG4gICAgICAgICAqIEBwYXJhbSB7IVByb3RvQnVmLkJ1aWxkZXJ9IGJ1aWxkZXIgQnVpbGRlciByZWZlcmVuY2VcbiAgICAgICAgICogQHBhcmFtIHshUHJvdG9CdWYuUmVmbGVjdC5TZXJ2aWNlfSBzdmMgU2VydmljZVxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBNZXRob2QgbmFtZVxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+PX0gb3B0aW9ucyBPcHRpb25zXG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKiBAZXh0ZW5kcyBQcm90b0J1Zi5SZWZsZWN0LlRcbiAgICAgICAgICovXG4gICAgICAgIHZhciBNZXRob2QgPSBmdW5jdGlvbiAoYnVpbGRlciwgc3ZjLCBuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBULmNhbGwodGhpcywgYnVpbGRlciwgc3ZjLCBuYW1lKTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAb3ZlcnJpZGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcIlNlcnZpY2UuTWV0aG9kXCI7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogT3B0aW9ucy5cbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgKj59XG4gICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhbGlhcyBQcm90b0J1Zi5SZWZsZWN0LlNlcnZpY2UuTWV0aG9kLnByb3RvdHlwZVxuICAgICAgICAgKiBAaW5uZXJcbiAgICAgICAgICovXG4gICAgICAgIHZhciBNZXRob2RQcm90b3R5cGUgPSBNZXRob2QucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShULnByb3RvdHlwZSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJ1aWxkcyB0aGUgbWV0aG9kJ3MgJyRvcHRpb25zJyBwcm9wZXJ0eS5cbiAgICAgICAgICogQG5hbWUgUHJvdG9CdWYuUmVmbGVjdC5TZXJ2aWNlLk1ldGhvZCNidWlsZE9wdFxuICAgICAgICAgKiBAZnVuY3Rpb25cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsKj59XG4gICAgICAgICAqL1xuICAgICAgICBNZXRob2RQcm90b3R5cGUuYnVpbGRPcHQgPSBOYW1lc3BhY2VQcm90b3R5cGUuYnVpbGRPcHQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhbGlhcyBQcm90b0J1Zi5SZWZsZWN0LlNlcnZpY2UuTWV0aG9kXG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIFJlZmxlY3QuU2VydmljZS5NZXRob2QgPSBNZXRob2Q7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJQQyBzZXJ2aWNlIG1ldGhvZC5cbiAgICAgICAgICogQGV4cG9ydHMgUHJvdG9CdWYuUmVmbGVjdC5TZXJ2aWNlLlJQQ01ldGhvZFxuICAgICAgICAgKiBAcGFyYW0geyFQcm90b0J1Zi5CdWlsZGVyfSBidWlsZGVyIEJ1aWxkZXIgcmVmZXJlbmNlXG4gICAgICAgICAqIEBwYXJhbSB7IVByb3RvQnVmLlJlZmxlY3QuU2VydmljZX0gc3ZjIFNlcnZpY2VcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTWV0aG9kIG5hbWVcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3QgUmVxdWVzdCBtZXNzYWdlIG5hbWVcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHJlc3BvbnNlIFJlc3BvbnNlIG1lc3NhZ2UgbmFtZVxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlcXVlc3Rfc3RyZWFtIFdoZXRoZXIgcmVxdWVzdHMgYXJlIHN0cmVhbWVkXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVzcG9uc2Vfc3RyZWFtIFdoZXRoZXIgcmVzcG9uc2VzIGFyZSBzdHJlYW1lZFxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+PX0gb3B0aW9ucyBPcHRpb25zXG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKiBAZXh0ZW5kcyBQcm90b0J1Zi5SZWZsZWN0LlNlcnZpY2UuTWV0aG9kXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgUlBDTWV0aG9kID0gZnVuY3Rpb24gKGJ1aWxkZXIsIHN2YywgbmFtZSwgcmVxdWVzdCwgcmVzcG9uc2UsIHJlcXVlc3Rfc3RyZWFtLCByZXNwb25zZV9zdHJlYW0sIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIE1ldGhvZC5jYWxsKHRoaXMsIGJ1aWxkZXIsIHN2YywgbmFtZSwgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJTZXJ2aWNlLlJQQ01ldGhvZFwiO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJlcXVlc3QgbWVzc2FnZSBuYW1lLlxuICAgICAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0TmFtZSA9IHJlcXVlc3Q7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVzcG9uc2UgbWVzc2FnZSBuYW1lLlxuICAgICAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5yZXNwb25zZU5hbWUgPSByZXNwb25zZTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBXaGV0aGVyIHJlcXVlc3RzIGFyZSBzdHJlYW1lZFxuICAgICAgICAgICAgICogQHR5cGUge2Jvb2x9XG4gICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFN0cmVhbSA9IHJlcXVlc3Rfc3RyZWFtO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFdoZXRoZXIgcmVzcG9uc2VzIGFyZSBzdHJlYW1lZFxuICAgICAgICAgICAgICogQHR5cGUge2Jvb2x9XG4gICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2VTdHJlYW0gPSByZXNwb25zZV9zdHJlYW07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVzb2x2ZWQgcmVxdWVzdCBtZXNzYWdlIHR5cGUuXG4gICAgICAgICAgICAgKiBAdHlwZSB7UHJvdG9CdWYuUmVmbGVjdC5NZXNzYWdlfVxuICAgICAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnJlc29sdmVkUmVxdWVzdFR5cGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJlc29sdmVkIHJlc3BvbnNlIG1lc3NhZ2UgdHlwZS5cbiAgICAgICAgICAgICAqIEB0eXBlIHtQcm90b0J1Zi5SZWZsZWN0Lk1lc3NhZ2V9XG4gICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZWRSZXNwb25zZVR5cGUgPSBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEV4dGVuZHMgTWV0aG9kXG4gICAgICAgIFJQQ01ldGhvZC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE1ldGhvZC5wcm90b3R5cGUpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAYWxpYXMgUHJvdG9CdWYuUmVmbGVjdC5TZXJ2aWNlLlJQQ01ldGhvZFxuICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAqL1xuICAgICAgICBSZWZsZWN0LlNlcnZpY2UuUlBDTWV0aG9kID0gUlBDTWV0aG9kO1xuXG4gICAgICAgIHJldHVybiBSZWZsZWN0O1xuXG4gICAgfSkoUHJvdG9CdWYpO1xuXG4gICAgLyoqXG4gICAgICogQGFsaWFzIFByb3RvQnVmLkJ1aWxkZXJcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgUHJvdG9CdWYuQnVpbGRlciA9IChmdW5jdGlvbiAoUHJvdG9CdWYsIExhbmcsIFJlZmxlY3QpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgQnVpbGRlci5cbiAgICAgICAgICogQGV4cG9ydHMgUHJvdG9CdWYuQnVpbGRlclxuICAgICAgICAgKiBAY2xhc3MgUHJvdmlkZXMgdGhlIGZ1bmN0aW9uYWxpdHkgdG8gYnVpbGQgcHJvdG9jb2wgbWVzc2FnZXMuXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj49fSBvcHRpb25zIE9wdGlvbnNcbiAgICAgICAgICogQGNvbnN0cnVjdG9yXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgQnVpbGRlciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogTmFtZXNwYWNlLlxuICAgICAgICAgICAgICogQHR5cGUge1Byb3RvQnVmLlJlZmxlY3QuTmFtZXNwYWNlfVxuICAgICAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLm5zID0gbmV3IFJlZmxlY3QuTmFtZXNwYWNlKHRoaXMsIG51bGwsIFwiXCIpOyAvLyBHbG9iYWwgbmFtZXNwYWNlXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogTmFtZXNwYWNlIHBvaW50ZXIuXG4gICAgICAgICAgICAgKiBAdHlwZSB7UHJvdG9CdWYuUmVmbGVjdC5UfVxuICAgICAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnB0ciA9IHRoaXMubnM7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVzb2x2ZWQgZmxhZy5cbiAgICAgICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnJlc29sdmVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIGN1cnJlbnQgYnVpbGRpbmcgcmVzdWx0LlxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdC48c3RyaW5nLFByb3RvQnVmLkJ1aWxkZXIuTWVzc2FnZXxPYmplY3Q+fG51bGx9XG4gICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gbnVsbDtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJbXBvcnRlZCBmaWxlcy5cbiAgICAgICAgICAgICAqIEB0eXBlIHtBcnJheS48c3RyaW5nPn1cbiAgICAgICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5maWxlcyA9IHt9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEltcG9ydCByb290IG92ZXJyaWRlLlxuICAgICAgICAgICAgICogQHR5cGUgez9zdHJpbmd9XG4gICAgICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuaW1wb3J0Um9vdCA9IG51bGw7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogT3B0aW9ucy5cbiAgICAgICAgICAgICAqIEB0eXBlIHshT2JqZWN0LjxzdHJpbmcsICo+fVxuICAgICAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAYWxpYXMgUHJvdG9CdWYuQnVpbGRlci5wcm90b3R5cGVcbiAgICAgICAgICogQGlubmVyXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgQnVpbGRlclByb3RvdHlwZSA9IEJ1aWxkZXIucHJvdG90eXBlO1xuXG4gICAgICAgIC8vIC0tLS0tIERlZmluaXRpb24gdGVzdHMgLS0tLS1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGVzdHMgaWYgYSBkZWZpbml0aW9uIG1vc3QgbGlrZWx5IGRlc2NyaWJlcyBhIG1lc3NhZ2UuXG4gICAgICAgICAqIEBwYXJhbSB7IU9iamVjdH0gZGVmXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAqL1xuICAgICAgICBCdWlsZGVyLmlzTWVzc2FnZSA9IGZ1bmN0aW9uIChkZWYpIHtcbiAgICAgICAgICAgIC8vIE1lc3NhZ2VzIHJlcXVpcmUgYSBzdHJpbmcgbmFtZVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkZWZbXCJuYW1lXCJdICE9PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAvLyBNZXNzYWdlcyBkbyBub3QgY29udGFpbiB2YWx1ZXMgKGVudW0pIG9yIHJwYyBtZXRob2RzIChzZXJ2aWNlKVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkZWZbXCJ2YWx1ZXNcIl0gIT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkZWZbXCJycGNcIl0gIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUZXN0cyBpZiBhIGRlZmluaXRpb24gbW9zdCBsaWtlbHkgZGVzY3JpYmVzIGEgbWVzc2FnZSBmaWVsZC5cbiAgICAgICAgICogQHBhcmFtIHshT2JqZWN0fSBkZWZcbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIEJ1aWxkZXIuaXNNZXNzYWdlRmllbGQgPSBmdW5jdGlvbiAoZGVmKSB7XG4gICAgICAgICAgICAvLyBNZXNzYWdlIGZpZWxkcyByZXF1aXJlIGEgc3RyaW5nIHJ1bGUsIG5hbWUgYW5kIHR5cGUgYW5kIGFuIGlkXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRlZltcInJ1bGVcIl0gIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBkZWZbXCJuYW1lXCJdICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgZGVmW1widHlwZVwiXSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIGRlZltcImlkXCJdID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGVzdHMgaWYgYSBkZWZpbml0aW9uIG1vc3QgbGlrZWx5IGRlc2NyaWJlcyBhbiBlbnVtLlxuICAgICAgICAgKiBAcGFyYW0geyFPYmplY3R9IGRlZlxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgQnVpbGRlci5pc0VudW0gPSBmdW5jdGlvbiAoZGVmKSB7XG4gICAgICAgICAgICAvLyBFbnVtcyByZXF1aXJlIGEgc3RyaW5nIG5hbWVcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGVmW1wibmFtZVwiXSAhPT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgLy8gRW51bXMgcmVxdWlyZSBhdCBsZWFzdCBvbmUgdmFsdWVcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGVmW1widmFsdWVzXCJdID09PSAndW5kZWZpbmVkJyB8fCAhQXJyYXkuaXNBcnJheShkZWZbXCJ2YWx1ZXNcIl0pIHx8IGRlZltcInZhbHVlc1wiXS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRlc3RzIGlmIGEgZGVmaW5pdGlvbiBtb3N0IGxpa2VseSBkZXNjcmliZXMgYSBzZXJ2aWNlLlxuICAgICAgICAgKiBAcGFyYW0geyFPYmplY3R9IGRlZlxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgQnVpbGRlci5pc1NlcnZpY2UgPSBmdW5jdGlvbiAoZGVmKSB7XG4gICAgICAgICAgICAvLyBTZXJ2aWNlcyByZXF1aXJlIGEgc3RyaW5nIG5hbWUgYW5kIGFuIHJwYyBvYmplY3RcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGVmW1wibmFtZVwiXSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIGRlZltcInJwY1wiXSAhPT0gJ29iamVjdCcgfHwgIWRlZltcInJwY1wiXSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGVzdHMgaWYgYSBkZWZpbml0aW9uIG1vc3QgbGlrZWx5IGRlc2NyaWJlcyBhbiBleHRlbmRlZCBtZXNzYWdlXG4gICAgICAgICAqIEBwYXJhbSB7IU9iamVjdH0gZGVmXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAqL1xuICAgICAgICBCdWlsZGVyLmlzRXh0ZW5kID0gZnVuY3Rpb24gKGRlZikge1xuICAgICAgICAgICAgLy8gRXh0ZW5kcyBycXVpcmUgYSBzdHJpbmcgcmVmXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRlZltcInJlZlwiXSAhPT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gLS0tLS0gQnVpbGRpbmcgLS0tLS1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVzZXRzIHRoZSBwb2ludGVyIHRvIHRoZSByb290IG5hbWVzcGFjZS5cbiAgICAgICAgICogQHJldHVybnMgeyFQcm90b0J1Zi5CdWlsZGVyfSB0aGlzXG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIEJ1aWxkZXJQcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnB0ciA9IHRoaXMubnM7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmaW5lcyBhIG5hbWVzcGFjZSBvbiB0b3Agb2YgdGhlIGN1cnJlbnQgcG9pbnRlciBwb3NpdGlvbiBhbmQgcGxhY2VzIHRoZSBwb2ludGVyIG9uIGl0LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlXG4gICAgICAgICAqIEByZXR1cm4geyFQcm90b0J1Zi5CdWlsZGVyfSB0aGlzXG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIEJ1aWxkZXJQcm90b3R5cGUuZGVmaW5lID0gZnVuY3Rpb24gKG5hbWVzcGFjZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgIT09ICdzdHJpbmcnIHx8ICFMYW5nLlRZUEVSRUYudGVzdChuYW1lc3BhY2UpKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiaWxsZWdhbCBuYW1lc3BhY2U6IFwiICsgbmFtZXNwYWNlKTtcbiAgICAgICAgICAgIG5hbWVzcGFjZS5zcGxpdChcIi5cIikuZm9yRWFjaChmdW5jdGlvbiAocGFydCkge1xuICAgICAgICAgICAgICAgIHZhciBucyA9IHRoaXMucHRyLmdldENoaWxkKHBhcnQpO1xuICAgICAgICAgICAgICAgIGlmIChucyA9PT0gbnVsbCkgLy8gS2VlcCBleGlzdGluZ1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnB0ci5hZGRDaGlsZChucyA9IG5ldyBSZWZsZWN0Lk5hbWVzcGFjZSh0aGlzLCB0aGlzLnB0ciwgcGFydCkpO1xuICAgICAgICAgICAgICAgIHRoaXMucHRyID0gbnM7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIHRoZSBzcGVjaWZpZWQgZGVmaW5pdGlvbnMgYXQgdGhlIGN1cnJlbnQgcG9pbnRlciBwb3NpdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHshQXJyYXkuPCFPYmplY3Q+fSBkZWZzIE1lc3NhZ2VzLCBlbnVtcyBvciBzZXJ2aWNlcyB0byBjcmVhdGVcbiAgICAgICAgICogQHJldHVybnMgeyFQcm90b0J1Zi5CdWlsZGVyfSB0aGlzXG4gICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiBhIG1lc3NhZ2UgZGVmaW5pdGlvbiBpcyBpbnZhbGlkXG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIEJ1aWxkZXJQcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKGRlZnMpIHtcbiAgICAgICAgICAgIGlmICghZGVmcylcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpczsgLy8gTm90aGluZyB0byBjcmVhdGVcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkZWZzKSlcbiAgICAgICAgICAgICAgICBkZWZzID0gW2RlZnNdO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlZnMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICBkZWZzID0gZGVmcy5zbGljZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJdCdzIHF1aXRlIGhhcmQgdG8ga2VlcCB0cmFjayBvZiBzY29wZXMgYW5kIG1lbW9yeSBoZXJlLCBzbyBsZXQncyBkbyB0aGlzIGl0ZXJhdGl2ZWx5LlxuICAgICAgICAgICAgdmFyIHN0YWNrID0gW2RlZnNdO1xuICAgICAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBkZWZzID0gc3RhY2sucG9wKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGVmcykpIC8vIFN0YWNrIGFsd2F5cyBjb250YWlucyBlbnRpcmUgbmFtZXNwYWNlc1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIm5vdCBhIHZhbGlkIG5hbWVzcGFjZTogXCIgKyBKU09OLnN0cmluZ2lmeShkZWZzKSk7XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAoZGVmcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWYgPSBkZWZzLnNoaWZ0KCk7IC8vIE5hbWVzcGFjZXMgYWx3YXlzIGNvbnRhaW4gYW4gYXJyYXkgb2YgbWVzc2FnZXMsIGVudW1zIGFuZCBzZXJ2aWNlc1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChCdWlsZGVyLmlzTWVzc2FnZShkZWYpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0gbmV3IFJlZmxlY3QuTWVzc2FnZSh0aGlzLCB0aGlzLnB0ciwgZGVmW1wibmFtZVwiXSwgZGVmW1wib3B0aW9uc1wiXSwgZGVmW1wiaXNHcm91cFwiXSwgZGVmW1wic3ludGF4XCJdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIE9uZU9mc1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9uZW9mcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlZltcIm9uZW9mc1wiXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhkZWZbXCJvbmVvZnNcIl0pLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmFkZENoaWxkKG9uZW9mc1tuYW1lXSA9IG5ldyBSZWZsZWN0Lk1lc3NhZ2UuT25lT2YodGhpcywgb2JqLCBuYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBmaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWZbXCJmaWVsZHNcIl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmW1wiZmllbGRzXCJdLmZvckVhY2goZnVuY3Rpb24gKGZsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmdldENoaWxkKGZsZFtcImlkXCJdIHwgMCkgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcImR1cGxpY2F0ZSBvciBpbnZhbGlkIGZpZWxkIGlkIGluIFwiICsgb2JqLm5hbWUgKyBcIjogXCIgKyBmbGRbJ2lkJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmxkW1wib3B0aW9uc1wiXSAmJiB0eXBlb2YgZmxkW1wib3B0aW9uc1wiXSAhPT0gJ29iamVjdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcImlsbGVnYWwgZmllbGQgb3B0aW9ucyBpbiBcIiArIG9iai5uYW1lICsgXCIjXCIgKyBmbGRbXCJuYW1lXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9uZW9mID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbGRbXCJvbmVvZlwiXSA9PT0gJ3N0cmluZycgJiYgIShvbmVvZiA9IG9uZW9mc1tmbGRbXCJvbmVvZlwiXV0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJpbGxlZ2FsIG9uZW9mIGluIFwiICsgb2JqLm5hbWUgKyBcIiNcIiArIGZsZFtcIm5hbWVcIl0gKyBcIjogXCIgKyBmbGRbXCJvbmVvZlwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZCA9IG5ldyBSZWZsZWN0Lk1lc3NhZ2UuRmllbGQodGhpcywgb2JqLCBmbGRbXCJydWxlXCJdLCBmbGRbXCJrZXl0eXBlXCJdLCBmbGRbXCJ0eXBlXCJdLCBmbGRbXCJuYW1lXCJdLCBmbGRbXCJpZFwiXSwgZmxkW1wib3B0aW9uc1wiXSwgb25lb2YsIGRlZltcInN5bnRheFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbmVvZilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uZW9mLmZpZWxkcy5wdXNoKGZsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5hZGRDaGlsZChmbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQdXNoIGNoaWxkcmVuIHRvIHN0YWNrXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3ViT2JqID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVmW1wiZW51bXNcIl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmW1wiZW51bXNcIl0uZm9yRWFjaChmdW5jdGlvbiAoZW5tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Yk9iai5wdXNoKGVubSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVmW1wibWVzc2FnZXNcIl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmW1wibWVzc2FnZXNcIl0uZm9yRWFjaChmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Yk9iai5wdXNoKG1zZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVmW1wic2VydmljZXNcIl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmW1wic2VydmljZXNcIl0uZm9yRWFjaChmdW5jdGlvbiAoc3ZjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Yk9iai5wdXNoKHN2Yyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNldCBleHRlbnNpb24gcmFuZ2VzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVmW1wiZXh0ZW5zaW9uc1wiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGVmW1wiZXh0ZW5zaW9uc1wiXVswXSA9PT0gJ251bWJlcicpIC8vIHByZSA1LjAuMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouZXh0ZW5zaW9ucyA9IFtkZWZbXCJleHRlbnNpb25zXCJdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5leHRlbnNpb25zID0gZGVmW1wiZXh0ZW5zaW9uc1wiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG9uIHRvcCBvZiBjdXJyZW50IG5hbWVzcGFjZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdHIuYWRkQ2hpbGQob2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdWJPYmoubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goZGVmcyk7IC8vIFB1c2ggdGhlIGN1cnJlbnQgbGV2ZWwgYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZnMgPSBzdWJPYmo7IC8vIENvbnRpbnVlIHByb2Nlc3Npbmcgc3ViIGxldmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViT2JqID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB0ciA9IG9iajsgLy8gQW5kIG1vdmUgdGhlIHBvaW50ZXIgdG8gdGhpcyBuYW1lc3BhY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmogPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViT2JqID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKEJ1aWxkZXIuaXNFbnVtKGRlZikpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqID0gbmV3IFJlZmxlY3QuRW51bSh0aGlzLCB0aGlzLnB0ciwgZGVmW1wibmFtZVwiXSwgZGVmW1wib3B0aW9uc1wiXSwgZGVmW1wic3ludGF4XCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZltcInZhbHVlc1wiXS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouYWRkQ2hpbGQobmV3IFJlZmxlY3QuRW51bS5WYWx1ZSh0aGlzLCBvYmosIHZhbFtcIm5hbWVcIl0sIHZhbFtcImlkXCJdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHRyLmFkZENoaWxkKG9iaik7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChCdWlsZGVyLmlzU2VydmljZShkZWYpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IG5ldyBSZWZsZWN0LlNlcnZpY2UodGhpcywgdGhpcy5wdHIsIGRlZltcIm5hbWVcIl0sIGRlZltcIm9wdGlvbnNcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZGVmW1wicnBjXCJdKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG10ZCA9IGRlZltcInJwY1wiXVtuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouYWRkQ2hpbGQobmV3IFJlZmxlY3QuU2VydmljZS5SUENNZXRob2QodGhpcywgb2JqLCBuYW1lLCBtdGRbXCJyZXF1ZXN0XCJdLCBtdGRbXCJyZXNwb25zZVwiXSwgISFtdGRbXCJyZXF1ZXN0X3N0cmVhbVwiXSwgISFtdGRbXCJyZXNwb25zZV9zdHJlYW1cIl0sIG10ZFtcIm9wdGlvbnNcIl0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdHIuYWRkQ2hpbGQob2JqKTtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKEJ1aWxkZXIuaXNFeHRlbmQoZGVmKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmogPSB0aGlzLnB0ci5yZXNvbHZlKGRlZltcInJlZlwiXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmW1wiZmllbGRzXCJdLmZvckVhY2goZnVuY3Rpb24gKGZsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmdldENoaWxkKGZsZFsnaWQnXSB8IDApICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJkdXBsaWNhdGUgZXh0ZW5kZWQgZmllbGQgaWQgaW4gXCIgKyBvYmoubmFtZSArIFwiOiBcIiArIGZsZFsnaWQnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGZpZWxkIGlkIGlzIGFsbG93ZWQgdG8gYmUgZXh0ZW5kZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5leHRlbnNpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5leHRlbnNpb25zLmZvckVhY2goZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZsZFtcImlkXCJdID49IHJhbmdlWzBdICYmIGZsZFtcImlkXCJdIDw9IHJhbmdlWzFdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJpbGxlZ2FsIGV4dGVuZGVkIGZpZWxkIGlkIGluIFwiICsgb2JqLm5hbWUgKyBcIjogXCIgKyBmbGRbJ2lkJ10gKyBcIiAobm90IHdpdGhpbiB2YWxpZCByYW5nZXMpXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgZXh0ZW5zaW9uIGZpZWxkIG5hbWVzIHRvIGNhbWVsIGNhc2Ugbm90YXRpb24gaWYgdGhlIG92ZXJyaWRlIGlzIHNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGZsZFtcIm5hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnNbJ2NvbnZlcnRGaWVsZHNUb0NhbWVsQ2FzZSddKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFByb3RvQnVmLlV0aWwudG9DYW1lbENhc2UobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlZSAjMTYxOiBFeHRlbnNpb25zIHVzZSB0aGVpciBmdWxseSBxdWFsaWZpZWQgbmFtZSBhcyB0aGVpciBydW50aW1lIGtleSBhbmQuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpZWxkID0gbmV3IFJlZmxlY3QuTWVzc2FnZS5FeHRlbnNpb25GaWVsZCh0aGlzLCBvYmosIGZsZFtcInJ1bGVcIl0sIGZsZFtcInR5cGVcIl0sIHRoaXMucHRyLmZxbigpICsgJy4nICsgbmFtZSwgZmxkW1wiaWRcIl0sIGZsZFtcIm9wdGlvbnNcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAuLi5hcmUgYWRkZWQgb24gdG9wIG9mIHRoZSBjdXJyZW50IG5hbWVzcGFjZSBhcyBhbiBleHRlbnNpb24gd2hpY2ggaXMgdXNlZCBmb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZWlyIHR5cGUgbGF0ZXIgb24gKHRoZSBleHRlbnNpb24gYWx3YXlzIGtlZXBzIHRoZSBvcmlnaW5hbCBuYW1lIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByZXZlbnQgbmFtaW5nIGNvbGxpc2lvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHQgPSBuZXcgUmVmbGVjdC5FeHRlbnNpb24odGhpcywgdGhpcy5wdHIsIGZsZFtcIm5hbWVcIl0sIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZXh0ZW5zaW9uID0gZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB0ci5hZGRDaGlsZChleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouYWRkQ2hpbGQoZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCEvXFwuP2dvb2dsZVxcLnByb3RvYnVmXFwuLy50ZXN0KGRlZltcInJlZlwiXSkpIC8vIFNpbGVudGx5IHNraXAgaW50ZXJuYWwgZXh0ZW5zaW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiZXh0ZW5kZWQgbWVzc2FnZSBcIiArIGRlZltcInJlZlwiXSArIFwiIGlzIG5vdCBkZWZpbmVkXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJub3QgYSB2YWxpZCBkZWZpbml0aW9uOiBcIiArIEpTT04uc3RyaW5naWZ5KGRlZikpO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlZiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEJyZWFrIGdvZXMgaGVyZVxuICAgICAgICAgICAgICAgIGRlZnMgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMucHRyID0gdGhpcy5wdHIucGFyZW50OyAvLyBOYW1lc3BhY2UgZG9uZSwgY29udGludWUgYXQgcGFyZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlc29sdmVkID0gZmFsc2U7IC8vIFJlcXVpcmUgcmUtcmVzb2x2ZVxuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSBudWxsOyAvLyBSZXF1aXJlIHJlLWJ1aWxkXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvcGFnYXRlcyBzeW50YXggdG8gYWxsIGNoaWxkcmVuLlxuICAgICAgICAgKiBAcGFyYW0geyFPYmplY3R9IHBhcmVudFxuICAgICAgICAgKiBAaW5uZXJcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHByb3BhZ2F0ZVN5bnRheChwYXJlbnQpIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnRbJ21lc3NhZ2VzJ10pIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRbJ21lc3NhZ2VzJ10uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRbXCJzeW50YXhcIl0gPSBwYXJlbnRbXCJzeW50YXhcIl07XG4gICAgICAgICAgICAgICAgICAgIHByb3BhZ2F0ZVN5bnRheChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyZW50WydlbnVtcyddKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50WydlbnVtcyddLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkW1wic3ludGF4XCJdID0gcGFyZW50W1wic3ludGF4XCJdO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEltcG9ydHMgYW5vdGhlciBkZWZpbml0aW9uIGludG8gdGhpcyBidWlsZGVyLlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+fSBqc29uIFBhcnNlZCBpbXBvcnRcbiAgICAgICAgICogQHBhcmFtIHsoc3RyaW5nfHtyb290OiBzdHJpbmcsIGZpbGU6IHN0cmluZ30pPX0gZmlsZW5hbWUgSW1wb3J0ZWQgZmlsZSBuYW1lXG4gICAgICAgICAqIEByZXR1cm5zIHshUHJvdG9CdWYuQnVpbGRlcn0gdGhpc1xuICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIGRlZmluaXRpb24gb3IgZmlsZSBjYW5ub3QgYmUgaW1wb3J0ZWRcbiAgICAgICAgICogQGV4cG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgQnVpbGRlclByb3RvdHlwZVtcImltcG9ydFwiXSA9IGZ1bmN0aW9uIChqc29uLCBmaWxlbmFtZSkge1xuICAgICAgICAgICAgdmFyIGRlbGltID0gJy8nO1xuXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdG8gc2tpcCBkdXBsaWNhdGUgaW1wb3J0c1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZpbGVuYW1lID09PSAnc3RyaW5nJykge1xuXG4gICAgICAgICAgICAgICAgaWYgKFByb3RvQnVmLlV0aWwuSVNfTk9ERSlcbiAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWUgPSByZXF1aXJlKFwicGF0aFwiKVsncmVzb2x2ZSddKGZpbGVuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWxlc1tmaWxlbmFtZV0gPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlc1tmaWxlbmFtZV0gPSB0cnVlO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaWxlbmFtZSA9PT0gJ29iamVjdCcpIHsgLy8gT2JqZWN0IHdpdGggcm9vdCwgZmlsZS5cblxuICAgICAgICAgICAgICAgIHZhciByb290ID0gZmlsZW5hbWUucm9vdDtcbiAgICAgICAgICAgICAgICBpZiAoUHJvdG9CdWYuVXRpbC5JU19OT0RFKVxuICAgICAgICAgICAgICAgICAgICByb290ID0gcmVxdWlyZShcInBhdGhcIilbJ3Jlc29sdmUnXShyb290KTtcbiAgICAgICAgICAgICAgICBpZiAocm9vdC5pbmRleE9mKFwiXFxcXFwiKSA+PSAwIHx8IGZpbGVuYW1lLmZpbGUuaW5kZXhPZihcIlxcXFxcIikgPj0gMClcbiAgICAgICAgICAgICAgICAgICAgZGVsaW0gPSAnXFxcXCc7XG4gICAgICAgICAgICAgICAgdmFyIGZuYW1lO1xuICAgICAgICAgICAgICAgIGlmIChQcm90b0J1Zi5VdGlsLklTX05PREUpXG4gICAgICAgICAgICAgICAgICAgIGZuYW1lID0gcmVxdWlyZShcInBhdGhcIilbJ2pvaW4nXShyb290LCBmaWxlbmFtZS5maWxlKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGZuYW1lID0gcm9vdCArIGRlbGltICsgZmlsZW5hbWUuZmlsZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWxlc1tmbmFtZV0gPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlc1tmbmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJbXBvcnQgaW1wb3J0c1xuXG4gICAgICAgICAgICBpZiAoanNvblsnaW1wb3J0cyddICYmIGpzb25bJ2ltcG9ydHMnXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGltcG9ydFJvb3QsXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0Um9vdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmaWxlbmFtZSA9PT0gJ29iamVjdCcpIHsgLy8gSWYgYW4gaW1wb3J0IHJvb3QgaXMgc3BlY2lmaWVkLCBvdmVycmlkZVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1wb3J0Um9vdCA9IGZpbGVuYW1lW1wicm9vdFwiXTsgcmVzZXRSb290ID0gdHJ1ZTsgLy8gLi4uIGFuZCByZXNldCBhZnRlcndhcmRzXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydFJvb3QgPSB0aGlzLmltcG9ydFJvb3Q7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lID0gZmlsZW5hbWVbXCJmaWxlXCJdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW1wb3J0Um9vdC5pbmRleE9mKFwiXFxcXFwiKSA+PSAwIHx8IGZpbGVuYW1lLmluZGV4T2YoXCJcXFxcXCIpID49IDApXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxpbSA9ICdcXFxcJztcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpbGVuYW1lID09PSAnc3RyaW5nJykge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmltcG9ydFJvb3QpIC8vIElmIGltcG9ydCByb290IGlzIG92ZXJyaWRkZW4sIHVzZSBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0Um9vdCA9IHRoaXMuaW1wb3J0Um9vdDtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7IC8vIE90aGVyd2lzZSBjb21wdXRlIGZyb20gZmlsZW5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWxlbmFtZS5pbmRleE9mKFwiL1wiKSA+PSAwKSB7IC8vIFVuaXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRSb290ID0gZmlsZW5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoLyogL2ZpbGUucHJvdG8gKi8gaW1wb3J0Um9vdCA9PT0gXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0Um9vdCA9IFwiL1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWxlbmFtZS5pbmRleE9mKFwiXFxcXFwiKSA+PSAwKSB7IC8vIFdpbmRvd3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRSb290ID0gZmlsZW5hbWUucmVwbGFjZSgvXFxcXFteXFxcXF0qJC8sIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGltID0gJ1xcXFwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0Um9vdCA9IFwiLlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0Um9vdCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGpzb25bJ2ltcG9ydHMnXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGpzb25bJ2ltcG9ydHMnXVtpXSA9PT0gJ3N0cmluZycpIHsgLy8gSW1wb3J0IGZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW1wb3J0Um9vdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcImNhbm5vdCBkZXRlcm1pbmUgaW1wb3J0IHJvb3RcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1wb3J0RmlsZW5hbWUgPSBqc29uWydpbXBvcnRzJ11baV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1wb3J0RmlsZW5hbWUgPT09IFwiZ29vZ2xlL3Byb3RvYnVmL2Rlc2NyaXB0b3IucHJvdG9cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTsgLy8gTm90IG5lZWRlZCBhbmQgdGhlcmVmb3JlIG5vdCB1c2VkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoUHJvdG9CdWYuVXRpbC5JU19OT0RFKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydEZpbGVuYW1lID0gcmVxdWlyZShcInBhdGhcIilbJ2pvaW4nXShpbXBvcnRSb290LCBpbXBvcnRGaWxlbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0RmlsZW5hbWUgPSBpbXBvcnRSb290ICsgZGVsaW0gKyBpbXBvcnRGaWxlbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVzW2ltcG9ydEZpbGVuYW1lXSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTsgLy8gQWxyZWFkeSBpbXBvcnRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC9cXC5wcm90byQvaS50ZXN0KGltcG9ydEZpbGVuYW1lKSAmJiAhUHJvdG9CdWYuRG90UHJvdG8pICAgICAgIC8vIElmIHRoaXMgaXMgYSBsaWdodCBidWlsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydEZpbGVuYW1lID0gaW1wb3J0RmlsZW5hbWUucmVwbGFjZSgvXFwucHJvdG8kLywgXCIuanNvblwiKTsgLy8gYWx3YXlzIGxvYWQgdGhlIEpTT04gZmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnRzID0gUHJvdG9CdWYuVXRpbC5mZXRjaChpbXBvcnRGaWxlbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudHMgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJmYWlsZWQgdG8gaW1wb3J0ICdcIiArIGltcG9ydEZpbGVuYW1lICsgXCInIGluICdcIiArIGZpbGVuYW1lICsgXCInOiBmaWxlIG5vdCBmb3VuZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgvXFwuanNvbiQvaS50ZXN0KGltcG9ydEZpbGVuYW1lKSkgLy8gQWx3YXlzIHBvc3NpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tcImltcG9ydFwiXShKU09OLnBhcnNlKGNvbnRlbnRzICsgXCJcIiksIGltcG9ydEZpbGVuYW1lKTsgLy8gTWF5IHRocm93XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tcImltcG9ydFwiXShQcm90b0J1Zi5Eb3RQcm90by5QYXJzZXIucGFyc2UoY29udGVudHMpLCBpbXBvcnRGaWxlbmFtZSk7IC8vIE1heSB0aHJvd1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgLy8gSW1wb3J0IHN0cnVjdHVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWxlbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW1wiaW1wb3J0XCJdKGpzb25bJ2ltcG9ydHMnXVtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgvXFwuKFxcdyspJC8udGVzdChmaWxlbmFtZSkpIC8vIFdpdGggZXh0ZW5zaW9uOiBBcHBlbmQgX2ltcG9ydE4gdG8gdGhlIG5hbWUgcG9ydGlvbiB0byBtYWtlIGl0IHVuaXF1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbXCJpbXBvcnRcIl0oanNvblsnaW1wb3J0cyddW2ldLCBmaWxlbmFtZS5yZXBsYWNlKC9eKC4rKVxcLihcXHcrKSQvLCBmdW5jdGlvbiAoJDAsICQxLCAkMikgeyByZXR1cm4gJDEgKyBcIl9pbXBvcnRcIiArIGkgKyBcIi5cIiArICQyOyB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIC8vIFdpdGhvdXQgZXh0ZW5zaW9uOiBBcHBlbmQgX2ltcG9ydE4gdG8gbWFrZSBpdCB1bmlxdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW1wiaW1wb3J0XCJdKGpzb25bJ2ltcG9ydHMnXVtpXSwgZmlsZW5hbWUgKyBcIl9pbXBvcnRcIiArIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVzZXRSb290KSAvLyBSZXNldCBpbXBvcnQgcm9vdCBvdmVycmlkZSB3aGVuIGFsbCBpbXBvcnRzIGFyZSBkb25lXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1wb3J0Um9vdCA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEltcG9ydCBzdHJ1Y3R1cmVzXG5cbiAgICAgICAgICAgIGlmIChqc29uWydwYWNrYWdlJ10pXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZpbmUoanNvblsncGFja2FnZSddKTtcbiAgICAgICAgICAgIGlmIChqc29uWydzeW50YXgnXSlcbiAgICAgICAgICAgICAgICBwcm9wYWdhdGVTeW50YXgoanNvbik7XG4gICAgICAgICAgICB2YXIgYmFzZSA9IHRoaXMucHRyO1xuICAgICAgICAgICAgaWYgKGpzb25bJ29wdGlvbnMnXSlcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhqc29uWydvcHRpb25zJ10pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBiYXNlLm9wdGlvbnNba2V5XSA9IGpzb25bJ29wdGlvbnMnXVtrZXldO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGpzb25bJ21lc3NhZ2VzJ10pXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGUoanNvblsnbWVzc2FnZXMnXSksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHRyID0gYmFzZTtcbiAgICAgICAgICAgIGlmIChqc29uWydlbnVtcyddKVxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlKGpzb25bJ2VudW1zJ10pLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnB0ciA9IGJhc2U7XG4gICAgICAgICAgICBpZiAoanNvblsnc2VydmljZXMnXSlcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZShqc29uWydzZXJ2aWNlcyddKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wdHIgPSBiYXNlO1xuICAgICAgICAgICAgaWYgKGpzb25bJ2V4dGVuZHMnXSlcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZShqc29uWydleHRlbmRzJ10pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNldCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXNvbHZlcyBhbGwgbmFtZXNwYWNlIG9iamVjdHMuXG4gICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiBhIHR5cGUgY2Fubm90IGJlIHJlc29sdmVkXG4gICAgICAgICAqIEByZXR1cm5zIHshUHJvdG9CdWYuQnVpbGRlcn0gdGhpc1xuICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAqL1xuICAgICAgICBCdWlsZGVyUHJvdG90eXBlLnJlc29sdmVBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBSZXNvbHZlIGFsbCByZWZsZWN0ZWQgb2JqZWN0c1xuICAgICAgICAgICAgdmFyIHJlcztcbiAgICAgICAgICAgIGlmICh0aGlzLnB0ciA9PSBudWxsIHx8IHR5cGVvZiB0aGlzLnB0ci50eXBlID09PSAnb2JqZWN0JylcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpczsgLy8gRG9uZSAoYWxyZWFkeSByZXNvbHZlZClcblxuICAgICAgICAgICAgaWYgKHRoaXMucHRyIGluc3RhbmNlb2YgUmVmbGVjdC5OYW1lc3BhY2UpIHsgLy8gUmVzb2x2ZSBjaGlsZHJlblxuXG4gICAgICAgICAgICAgICAgdGhpcy5wdHIuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wdHIgPSBjaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlQWxsKCk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wdHIgaW5zdGFuY2VvZiBSZWZsZWN0Lk1lc3NhZ2UuRmllbGQpIHsgLy8gUmVzb2x2ZSB0eXBlXG5cbiAgICAgICAgICAgICAgICBpZiAoIUxhbmcuVFlQRS50ZXN0KHRoaXMucHRyLnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghTGFuZy5UWVBFUkVGLnRlc3QodGhpcy5wdHIudHlwZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcImlsbGVnYWwgdHlwZSByZWZlcmVuY2UgaW4gXCIgKyB0aGlzLnB0ci50b1N0cmluZyh0cnVlKSArIFwiOiBcIiArIHRoaXMucHRyLnR5cGUpO1xuICAgICAgICAgICAgICAgICAgICByZXMgPSAodGhpcy5wdHIgaW5zdGFuY2VvZiBSZWZsZWN0Lk1lc3NhZ2UuRXh0ZW5zaW9uRmllbGQgPyB0aGlzLnB0ci5leHRlbnNpb24ucGFyZW50IDogdGhpcy5wdHIucGFyZW50KS5yZXNvbHZlKHRoaXMucHRyLnR5cGUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwidW5yZXNvbHZhYmxlIHR5cGUgcmVmZXJlbmNlIGluIFwiICsgdGhpcy5wdHIudG9TdHJpbmcodHJ1ZSkgKyBcIjogXCIgKyB0aGlzLnB0ci50eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wdHIucmVzb2x2ZWRUeXBlID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzIGluc3RhbmNlb2YgUmVmbGVjdC5FbnVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB0ci50eXBlID0gUHJvdG9CdWYuVFlQRVNbXCJlbnVtXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHRyLnN5bnRheCA9PT0gJ3Byb3RvMycgJiYgcmVzLnN5bnRheCAhPT0gJ3Byb3RvMycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJwcm90bzMgbWVzc2FnZSBjYW5ub3QgcmVmZXJlbmNlIHByb3RvMiBlbnVtXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcyBpbnN0YW5jZW9mIFJlZmxlY3QuTWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHRyLnR5cGUgPSByZXMuaXNHcm91cCA/IFByb3RvQnVmLlRZUEVTW1wiZ3JvdXBcIl0gOiBQcm90b0J1Zi5UWVBFU1tcIm1lc3NhZ2VcIl07XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiaWxsZWdhbCB0eXBlIHJlZmVyZW5jZSBpbiBcIiArIHRoaXMucHRyLnRvU3RyaW5nKHRydWUpICsgXCI6IFwiICsgdGhpcy5wdHIudHlwZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHRyLnR5cGUgPSBQcm90b0J1Zi5UWVBFU1t0aGlzLnB0ci50eXBlXTtcblxuICAgICAgICAgICAgICAgIC8vIElmIGl0J3MgYSBtYXAgZmllbGQsIGFsc28gcmVzb2x2ZSB0aGUga2V5IHR5cGUuIFRoZSBrZXkgdHlwZSBjYW4gYmUgb25seSBhIG51bWVyaWMsIHN0cmluZywgb3IgYm9vbCB0eXBlXG4gICAgICAgICAgICAgICAgLy8gKGkuZS4sIG5vIGVudW1zIG9yIG1lc3NhZ2VzKSwgc28gd2UgZG9uJ3QgbmVlZCB0byByZXNvbHZlIGFnYWluc3QgdGhlIGN1cnJlbnQgbmFtZXNwYWNlLlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnB0ci5tYXApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFMYW5nLlRZUEUudGVzdCh0aGlzLnB0ci5rZXlUeXBlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiaWxsZWdhbCBrZXkgdHlwZSBmb3IgbWFwIGZpZWxkIGluIFwiICsgdGhpcy5wdHIudG9TdHJpbmcodHJ1ZSkgKyBcIjogXCIgKyB0aGlzLnB0ci5rZXlUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wdHIua2V5VHlwZSA9IFByb3RvQnVmLlRZUEVTW3RoaXMucHRyLmtleVR5cGVdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIGl0J3MgYSByZXBlYXRlZCBhbmQgcGFja2FibGUgZmllbGQgdGhlbiBwcm90bzMgbWFuZGF0ZXMgaXQgc2hvdWxkIGJlIHBhY2tlZCBieVxuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHRyLnN5bnRheCA9PT0gJ3Byb3RvMycgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wdHIucmVwZWF0ZWQgJiYgdGhpcy5wdHIub3B0aW9ucy5wYWNrZWQgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICBQcm90b0J1Zi5QQUNLQUJMRV9XSVJFX1RZUEVTLmluZGV4T2YodGhpcy5wdHIudHlwZS53aXJlVHlwZSkgIT09IC0xXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHRyLm9wdGlvbnMucGFja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wdHIgaW5zdGFuY2VvZiBQcm90b0J1Zi5SZWZsZWN0LlNlcnZpY2UuTWV0aG9kKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wdHIgaW5zdGFuY2VvZiBQcm90b0J1Zi5SZWZsZWN0LlNlcnZpY2UuUlBDTWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IHRoaXMucHRyLnBhcmVudC5yZXNvbHZlKHRoaXMucHRyLnJlcXVlc3ROYW1lLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXMgfHwgIShyZXMgaW5zdGFuY2VvZiBQcm90b0J1Zi5SZWZsZWN0Lk1lc3NhZ2UpKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJJbGxlZ2FsIHR5cGUgcmVmZXJlbmNlIGluIFwiICsgdGhpcy5wdHIudG9TdHJpbmcodHJ1ZSkgKyBcIjogXCIgKyB0aGlzLnB0ci5yZXF1ZXN0TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHRyLnJlc29sdmVkUmVxdWVzdFR5cGUgPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IHRoaXMucHRyLnBhcmVudC5yZXNvbHZlKHRoaXMucHRyLnJlc3BvbnNlTmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzIHx8ICEocmVzIGluc3RhbmNlb2YgUHJvdG9CdWYuUmVmbGVjdC5NZXNzYWdlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiSWxsZWdhbCB0eXBlIHJlZmVyZW5jZSBpbiBcIiArIHRoaXMucHRyLnRvU3RyaW5nKHRydWUpICsgXCI6IFwiICsgdGhpcy5wdHIucmVzcG9uc2VOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wdHIucmVzb2x2ZWRSZXNwb25zZVR5cGUgPSByZXM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIC8vIFNob3VsZCBub3QgaGFwcGVuIGFzIG5vdGhpbmcgZWxzZSBpcyBpbXBsZW1lbnRlZFxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcImlsbGVnYWwgc2VydmljZSB0eXBlIGluIFwiICsgdGhpcy5wdHIudG9TdHJpbmcodHJ1ZSkpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICEodGhpcy5wdHIgaW5zdGFuY2VvZiBQcm90b0J1Zi5SZWZsZWN0Lk1lc3NhZ2UuT25lT2YpICYmIC8vIE5vdCBidWlsdFxuICAgICAgICAgICAgICAgICEodGhpcy5wdHIgaW5zdGFuY2VvZiBQcm90b0J1Zi5SZWZsZWN0LkV4dGVuc2lvbikgJiYgLy8gTm90IGJ1aWx0XG4gICAgICAgICAgICAgICAgISh0aGlzLnB0ciBpbnN0YW5jZW9mIFByb3RvQnVmLlJlZmxlY3QuRW51bS5WYWx1ZSkgLy8gQnVpbHQgaW4gZW51bVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiaWxsZWdhbCBvYmplY3QgaW4gbmFtZXNwYWNlOiBcIiArIHR5cGVvZiAodGhpcy5wdHIpICsgXCI6IFwiICsgdGhpcy5wdHIpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNldCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCdWlsZHMgdGhlIHByb3RvY29sLiBUaGlzIHdpbGwgZmlyc3QgdHJ5IHRvIHJlc29sdmUgYWxsIGRlZmluaXRpb25zIGFuZCwgaWYgdGhpcyBoYXMgYmVlbiBzdWNjZXNzZnVsLFxuICAgICAgICAgKiByZXR1cm4gdGhlIGJ1aWx0IHBhY2thZ2UuXG4gICAgICAgICAqIEBwYXJhbSB7KHN0cmluZ3xBcnJheS48c3RyaW5nPik9fSBwYXRoIFNwZWNpZmllcyB3aGF0IHRvIHJldHVybi4gSWYgb21pdHRlZCwgdGhlIGVudGlyZSBuYW1lc3BhY2Ugd2lsbCBiZSByZXR1cm5lZC5cbiAgICAgICAgICogQHJldHVybnMgeyFQcm90b0J1Zi5CdWlsZGVyLk1lc3NhZ2V8IU9iamVjdC48c3RyaW5nLCo+fVxuICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgYSB0eXBlIGNvdWxkIG5vdCBiZSByZXNvbHZlZFxuICAgICAgICAgKiBAZXhwb3NlXG4gICAgICAgICAqL1xuICAgICAgICBCdWlsZGVyUHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5yZXNvbHZlZClcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVBbGwoKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlZCA9IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gbnVsbDsgLy8gUmVxdWlyZSByZS1idWlsZFxuICAgICAgICAgICAgaWYgKHRoaXMucmVzdWx0ID09PSBudWxsKSAvLyAoUmUtKUJ1aWxkXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSB0aGlzLm5zLmJ1aWxkKCk7XG4gICAgICAgICAgICBpZiAoIXBhdGgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICAgICAgICAgICAgdmFyIHBhcnQgPSB0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycgPyBwYXRoLnNwbGl0KFwiLlwiKSA6IHBhdGgsXG4gICAgICAgICAgICAgICAgcHRyID0gdGhpcy5yZXN1bHQ7IC8vIEJ1aWxkIG5hbWVzcGFjZSBwb2ludGVyIChubyBoYXNDaGlsZCBldGMuKVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0Lmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIGlmIChwdHJbcGFydFtpXV0pXG4gICAgICAgICAgICAgICAgICAgIHB0ciA9IHB0cltwYXJ0W2ldXTtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHRyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHB0cjtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2ltaWxhciB0byB7QGxpbmsgUHJvdG9CdWYuQnVpbGRlciNidWlsZH0sIGJ1dCBsb29rcyB1cCB0aGUgaW50ZXJuYWwgcmVmbGVjdGlvbiBkZXNjcmlwdG9yLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZz19IHBhdGggU3BlY2lmaWVzIHdoYXQgdG8gcmV0dXJuLiBJZiBvbWl0dGVkLCB0aGUgZW50aXJlIG5hbWVzcGFjZSB3aWlsIGJlIHJldHVybmVkLlxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBleGNsdWRlTm9uTmFtZXNwYWNlIEV4Y2x1ZGVzIG5vbi1uYW1lc3BhY2UgdHlwZXMgbGlrZSBmaWVsZHMsIGRlZmF1bHRzIHRvIGBmYWxzZWBcbiAgICAgICAgICogQHJldHVybnMgez9Qcm90b0J1Zi5SZWZsZWN0LlR9IFJlZmxlY3Rpb24gZGVzY3JpcHRvciBvciBgbnVsbGAgaWYgbm90IGZvdW5kXG4gICAgICAgICAqL1xuICAgICAgICBCdWlsZGVyUHJvdG90eXBlLmxvb2t1cCA9IGZ1bmN0aW9uIChwYXRoLCBleGNsdWRlTm9uTmFtZXNwYWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcGF0aCA/IHRoaXMubnMucmVzb2x2ZShwYXRoLCBleGNsdWRlTm9uTmFtZXNwYWNlKSA6IHRoaXMubnM7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBvYmplY3QuXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gU3RyaW5nIHJlcHJlc2VudGF0aW9uIGFzIG9mIFwiQnVpbGRlclwiXG4gICAgICAgICAqIEBleHBvc2VcbiAgICAgICAgICovXG4gICAgICAgIEJ1aWxkZXJQcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJCdWlsZGVyXCI7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gLS0tLS0gQmFzZSBjbGFzc2VzIC0tLS0tXG4gICAgICAgIC8vIEV4aXN0IGZvciB0aGUgc29sZSBwdXJwb3NlIG9mIGJlaW5nIGFibGUgdG8gXCIuLi4gaW5zdGFuY2VvZiBQcm90b0J1Zi5CdWlsZGVyLk1lc3NhZ2VcIiBldGMuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhbGlhcyBQcm90b0J1Zi5CdWlsZGVyLk1lc3NhZ2VcbiAgICAgICAgICovXG4gICAgICAgIEJ1aWxkZXIuTWVzc2FnZSA9IGZ1bmN0aW9uICgpIHsgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQGFsaWFzIFByb3RvQnVmLkJ1aWxkZXIuRW51bVxuICAgICAgICAgKi9cbiAgICAgICAgQnVpbGRlci5FbnVtID0gZnVuY3Rpb24gKCkgeyB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAYWxpYXMgUHJvdG9CdWYuQnVpbGRlci5NZXNzYWdlXG4gICAgICAgICAqL1xuICAgICAgICBCdWlsZGVyLlNlcnZpY2UgPSBmdW5jdGlvbiAoKSB7IH07XG5cbiAgICAgICAgcmV0dXJuIEJ1aWxkZXI7XG5cbiAgICB9KShQcm90b0J1ZiwgUHJvdG9CdWYuTGFuZywgUHJvdG9CdWYuUmVmbGVjdCk7XG5cbiAgICAvKipcbiAgICAgKiBAYWxpYXMgUHJvdG9CdWYuTWFwXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIFByb3RvQnVmLk1hcCA9IChmdW5jdGlvbiAoUHJvdG9CdWYsIFJlZmxlY3QpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgTWFwLiBBIE1hcCBpcyBhIGNvbnRhaW5lciB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IG1hcFxuICAgICAgICAgKiBmaWVsZHMgb24gbWVzc2FnZSBvYmplY3RzLiBJdCBjbG9zZWx5IGZvbGxvd3MgdGhlIEVTNiBNYXAgQVBJOyBob3dldmVyLFxuICAgICAgICAgKiBpdCBpcyBkaXN0aW5jdCBiZWNhdXNlIHdlIGRvIG5vdCB3YW50IHRvIGRlcGVuZCBvbiBleHRlcm5hbCBwb2x5ZmlsbHMgb3JcbiAgICAgICAgICogb24gRVM2IGl0c2VsZi5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4cG9ydHMgUHJvdG9CdWYuTWFwXG4gICAgICAgICAqIEBwYXJhbSB7IVByb3RvQnVmLlJlZmxlY3QuRmllbGR9IGZpZWxkIE1hcCBmaWVsZFxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+PX0gY29udGVudHMgSW5pdGlhbCBjb250ZW50c1xuICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICovXG4gICAgICAgIHZhciBNYXAgPSBmdW5jdGlvbiAoZmllbGQsIGNvbnRlbnRzKSB7XG4gICAgICAgICAgICBpZiAoIWZpZWxkLm1hcClcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcImZpZWxkIGlzIG5vdCBhIG1hcFwiKTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaGUgZmllbGQgY29ycmVzcG9uZGluZyB0byB0aGlzIG1hcC5cbiAgICAgICAgICAgICAqIEB0eXBlIHshUHJvdG9CdWYuUmVmbGVjdC5GaWVsZH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5maWVsZCA9IGZpZWxkO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVsZW1lbnQgaW5zdGFuY2UgY29ycmVzcG9uZGluZyB0byBrZXkgdHlwZS5cbiAgICAgICAgICAgICAqIEB0eXBlIHshUHJvdG9CdWYuUmVmbGVjdC5FbGVtZW50fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmtleUVsZW0gPSBuZXcgUmVmbGVjdC5FbGVtZW50KGZpZWxkLmtleVR5cGUsIG51bGwsIHRydWUsIGZpZWxkLnN5bnRheCk7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRWxlbWVudCBpbnN0YW5jZSBjb3JyZXNwb25kaW5nIHRvIHZhbHVlIHR5cGUuXG4gICAgICAgICAgICAgKiBAdHlwZSB7IVByb3RvQnVmLlJlZmxlY3QuRWxlbWVudH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy52YWx1ZUVsZW0gPSBuZXcgUmVmbGVjdC5FbGVtZW50KGZpZWxkLnR5cGUsIGZpZWxkLnJlc29sdmVkVHlwZSwgZmFsc2UsIGZpZWxkLnN5bnRheCk7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSW50ZXJuYWwgbWFwOiBzdG9yZXMgbWFwcGluZyBvZiAoc3RyaW5nIGZvcm0gb2Yga2V5KSAtPiAoa2V5LCB2YWx1ZSlcbiAgICAgICAgICAgICAqIHBhaXIuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogV2UgcHJvdmlkZSBtYXAgc2VtYW50aWNzIGZvciBhcmJpdHJhcnkga2V5IHR5cGVzLCBidXQgd2UgYnVpbGQgb24gdG9wXG4gICAgICAgICAgICAgKiBvZiBhbiBPYmplY3QsIHdoaWNoIGhhcyBvbmx5IHN0cmluZyBrZXlzLiBJbiBvcmRlciB0byBhdm9pZCB0aGUgbmVlZFxuICAgICAgICAgICAgICogdG8gY29udmVydCBhIHN0cmluZyBrZXkgYmFjayB0byBpdHMgbmF0aXZlIHR5cGUgaW4gbWFueSBzaXR1YXRpb25zLFxuICAgICAgICAgICAgICogd2Ugc3RvcmUgdGhlIG5hdGl2ZSBrZXkgdmFsdWUgYWxvbmdzaWRlIHRoZSB2YWx1ZS4gVGh1cywgd2Ugb25seSBuZWVkXG4gICAgICAgICAgICAgKiBhIG9uZS13YXkgbWFwcGluZyBmcm9tIGEga2V5IHR5cGUgdG8gaXRzIHN0cmluZyBmb3JtIHRoYXQgZ3VhcmFudGVlc1xuICAgICAgICAgICAgICogdW5pcXVlbmVzcyBhbmQgZXF1YWxpdHkgKGkuZS4sIHN0cihLMSkgPT09IHN0cihLMikgaWYgYW5kIG9ubHkgaWYgSzFcbiAgICAgICAgICAgICAqID09PSBLMikuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHR5cGUgeyFPYmplY3Q8c3RyaW5nLCB7a2V5OiAqLCB2YWx1ZTogKn0+fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLm1hcCA9IHt9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGUgbWFwLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJzaXplXCIsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMubWFwKS5sZW5ndGg7IH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBGaWxsIGluaXRpYWwgY29udGVudHMgZnJvbSBhIHJhdyBvYmplY3QuXG4gICAgICAgICAgICBpZiAoY29udGVudHMpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGNvbnRlbnRzKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMua2V5RWxlbS52YWx1ZUZyb21TdHJpbmcoa2V5c1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSB0aGlzLnZhbHVlRWxlbS52ZXJpZnlWYWx1ZShjb250ZW50c1trZXlzW2ldXSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBra2s7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAga2trID0ga2V5LnRvTnVtYmVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcFsnJyArIGtra10gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBrZXksIHZhbHVlOiB2YWwgfTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwW3RoaXMua2V5RWxlbS52YWx1ZVRvU3RyaW5nKGtleSldID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleToga2V5LCB2YWx1ZTogdmFsIH07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgTWFwUHJvdG90eXBlID0gTWFwLnByb3RvdHlwZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSGVscGVyOiByZXR1cm4gYW4gaXRlcmF0b3Igb3ZlciBhbiBhcnJheS5cbiAgICAgICAgICogQHBhcmFtIHshQXJyYXk8Kj59IGFyciB0aGUgYXJyYXlcbiAgICAgICAgICogQHJldHVybnMgeyFPYmplY3R9IGFuIGl0ZXJhdG9yXG4gICAgICAgICAqIEBpbm5lclxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gYXJyYXlJdGVyYXRvcihhcnIpIHtcbiAgICAgICAgICAgIHZhciBpZHggPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpZHggPCBhcnIubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBhcnJbaWR4KytdIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2xlYXJzIHRoZSBtYXAuXG4gICAgICAgICAqL1xuICAgICAgICBNYXBQcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLm1hcCA9IHt9O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWxldGVzIGEgcGFydGljdWxhciBrZXkgZnJvbSB0aGUgbWFwLlxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciBhbnkgZW50cnkgd2l0aCB0aGlzIGtleSB3YXMgZGVsZXRlZC5cbiAgICAgICAgICovXG4gICAgICAgIE1hcFByb3RvdHlwZVtcImRlbGV0ZVwiXSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciB2S2V5ID0gdGhpcy5rZXlFbGVtLnZlcmlmeVZhbHVlKGtleSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZLZXkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlYWxLZXkgPSB2S2V5LnRvTnVtYmVyKCk7XG4gICAgICAgICAgICAgICAgdmFyIGhhZEtleSA9IHJlYWxLZXkgaW4gdGhpcy5tYXA7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMubWFwW3JlYWxLZXldO1xuICAgICAgICAgICAgICAgIHJldHVybiBoYWRLZXk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBrZXlWYWx1ZSA9IHRoaXMua2V5RWxlbS52YWx1ZVRvU3RyaW5nKHZLZXkpO1xuICAgICAgICAgICAgICAgIHZhciBoYWRLZXkgPSBrZXlWYWx1ZSBpbiB0aGlzLm1hcDtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5tYXBba2V5VmFsdWVdO1xuICAgICAgICAgICAgICAgIHJldHVybiBoYWRLZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYW4gaXRlcmF0b3Igb3ZlciBba2V5LCB2YWx1ZV0gcGFpcnMgaW4gdGhlIG1hcC5cbiAgICAgICAgICogQHJldHVybnMge09iamVjdH0gVGhlIGl0ZXJhdG9yXG4gICAgICAgICAqL1xuICAgICAgICBNYXBQcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlbnRyaWVzID0gW107XG4gICAgICAgICAgICB2YXIgc3RyS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMubWFwKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBlbnRyeTsgaSA8IHN0cktleXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgZW50cmllcy5wdXNoKFsoZW50cnkgPSB0aGlzLm1hcFtzdHJLZXlzW2ldXSkua2V5LCBlbnRyeS52YWx1ZV0pO1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5SXRlcmF0b3IoZW50cmllcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYW4gaXRlcmF0b3Igb3ZlciBrZXlzIGluIHRoZSBtYXAuXG4gICAgICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBpdGVyYXRvclxuICAgICAgICAgKi9cbiAgICAgICAgTWFwUHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IFtdO1xuICAgICAgICAgICAgdmFyIHN0cktleXMgPSBPYmplY3Qua2V5cyh0aGlzLm1hcCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0cktleXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKHRoaXMubWFwW3N0cktleXNbaV1dLmtleSk7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXlJdGVyYXRvcihrZXlzKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhbiBpdGVyYXRvciBvdmVyIHZhbHVlcyBpbiB0aGUgbWFwLlxuICAgICAgICAgKiBAcmV0dXJucyB7IU9iamVjdH0gVGhlIGl0ZXJhdG9yXG4gICAgICAgICAqL1xuICAgICAgICBNYXBQcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgdmFyIHN0cktleXMgPSBPYmplY3Qua2V5cyh0aGlzLm1hcCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0cktleXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2godGhpcy5tYXBbc3RyS2V5c1tpXV0udmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5SXRlcmF0b3IodmFsdWVzKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSXRlcmF0ZXMgb3ZlciBlbnRyaWVzIGluIHRoZSBtYXAsIGNhbGxpbmcgYSBmdW5jdGlvbiBvbiBlYWNoLlxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKHRoaXM6KiwgKiwgKiwgKil9IGNiIFRoZSBjYWxsYmFjayB0byBpbnZva2Ugd2l0aCB2YWx1ZSwga2V5LCBhbmQgbWFwIGFyZ3VtZW50cy5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3Q9fSB0aGlzQXJnIFRoZSBgdGhpc2AgdmFsdWUgZm9yIHRoZSBjYWxsYmFja1xuICAgICAgICAgKi9cbiAgICAgICAgTWFwUHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2IsIHRoaXNBcmcpIHtcbiAgICAgICAgICAgIHZhciBzdHJLZXlzID0gT2JqZWN0LmtleXModGhpcy5tYXApO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGVudHJ5OyBpIDwgc3RyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMubWFwW3N0cktleXNbaV1dXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbnRyeS5rZXkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNiLmNhbGwodGhpc0FyZywgZW50cnkudmFsdWUsIGVudHJ5LmtleS50b051bWJlcigpLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYi5jYWxsKHRoaXNBcmcsIGVudHJ5LnZhbHVlLCBlbnRyeS5rZXksIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyBhIGtleSBpbiB0aGUgbWFwIHRvIHRoZSBnaXZlbiB2YWx1ZS5cbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleVxuICAgICAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJucyB7IVByb3RvQnVmLk1hcH0gVGhlIG1hcCBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgTWFwUHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIga2V5VmFsdWUgPSB0aGlzLmtleUVsZW0udmVyaWZ5VmFsdWUoa2V5KTtcbiAgICAgICAgICAgIHZhciB2YWxWYWx1ZSA9IHRoaXMudmFsdWVFbGVtLnZlcmlmeVZhbHVlKHZhbHVlKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXlWYWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVhbEtleSA9IGtleVZhbHVlLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBbJycgKyByZWFsS2V5XSA9XG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiBrZXlWYWx1ZSwgdmFsdWU6IHZhbFZhbHVlIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciByZWFsVmFsdWUgPSB2YWxWYWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZUVsZW0udHlwZS5uYW1lID09ICdpbnQ2NCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVhbFZhbHVlID0gdmFsVmFsdWUudG9OdW1iZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBbdGhpcy5rZXlFbGVtLnZhbHVlVG9TdHJpbmcoa2V5VmFsdWUpXSA9XG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiBrZXlWYWx1ZSwgdmFsdWU6IHJlYWxWYWx1ZSB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgdmFsdWUgY29ycmVzcG9uZGluZyB0byBhIGtleSBpbiB0aGUgbWFwLlxuICAgICAgICAgKiBAcGFyYW0geyp9IGtleSBUaGUga2V5XG4gICAgICAgICAqIEByZXR1cm5zIHsqfHVuZGVmaW5lZH0gVGhlIHZhbHVlLCBvciBgdW5kZWZpbmVkYCBpZiBrZXkgbm90IHByZXNlbnRcbiAgICAgICAgICovXG4gICAgICAgIE1hcFByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB2YXIgdktleSA9IHRoaXMua2V5RWxlbS52ZXJpZnlWYWx1ZShrZXkpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2S2V5ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHZhciByZWFsS2V5ID0gdktleS50b051bWJlcigpO1xuICAgICAgICAgICAgICAgIGlmICghKHJlYWxLZXkgaW4gdGhpcy5tYXApKSByZXR1cm47XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwW3JlYWxLZXldLnZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5VmFsdWUgPSB0aGlzLmtleUVsZW0udmFsdWVUb1N0cmluZyh2S2V5KTtcbiAgICAgICAgICAgICAgICBpZiAoIShrZXlWYWx1ZSBpbiB0aGlzLm1hcCkpIHJldHVybjtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXBba2V5VmFsdWVdLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGtleSBpcyBwcmVzZW50IGluIHRoZSBtYXAuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXlcbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUga2V5IGlzIHByZXNlbnRcbiAgICAgICAgICovXG4gICAgICAgIE1hcFByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB2YXIgdktleSA9IHRoaXMua2V5RWxlbS52ZXJpZnlWYWx1ZShrZXkpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2S2V5ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHZhciByZWFsS2V5ID0gdktleS50b051bWJlcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiAocmVhbEtleSBpbiB0aGlzLm1hcCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBrZXlWYWx1ZSA9IHRoaXMua2V5RWxlbS52YWx1ZVRvU3RyaW5nKHZLZXkpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoa2V5VmFsdWUgaW4gdGhpcy5tYXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBNYXA7XG4gICAgfSkoUHJvdG9CdWYsIFByb3RvQnVmLlJlZmxlY3QpO1xuXG5cbiAgICAvKipcbiAgICAgKiBMb2FkcyBhIC5wcm90byBzdHJpbmcgYW5kIHJldHVybnMgdGhlIEJ1aWxkZXIuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3RvIC5wcm90byBmaWxlIGNvbnRlbnRzXG4gICAgICogQHBhcmFtIHsoUHJvdG9CdWYuQnVpbGRlcnxzdHJpbmd8e3Jvb3Q6IHN0cmluZywgZmlsZTogc3RyaW5nfSk9fSBidWlsZGVyIEJ1aWxkZXIgdG8gYXBwZW5kIHRvLiBXaWxsIGNyZWF0ZSBhIG5ldyBvbmUgaWYgb21pdHRlZC5cbiAgICAgKiBAcGFyYW0geyhzdHJpbmd8e3Jvb3Q6IHN0cmluZywgZmlsZTogc3RyaW5nfSk9fSBmaWxlbmFtZSBUaGUgY29ycmVzcG9uZGluZyBmaWxlIG5hbWUgaWYga25vd24uIE11c3QgYmUgc3BlY2lmaWVkIGZvciBpbXBvcnRzLlxuICAgICAqIEByZXR1cm4ge1Byb3RvQnVmLkJ1aWxkZXJ9IEJ1aWxkZXIgdG8gY3JlYXRlIG5ldyBtZXNzYWdlc1xuICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgZGVmaW5pdGlvbiBjYW5ub3QgYmUgcGFyc2VkIG9yIGJ1aWx0XG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIFByb3RvQnVmLmxvYWRQcm90byA9IGZ1bmN0aW9uIChwcm90bywgYnVpbGRlciwgZmlsZW5hbWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBidWlsZGVyID09PSAnc3RyaW5nJyB8fCAoYnVpbGRlciAmJiB0eXBlb2YgYnVpbGRlcltcImZpbGVcIl0gPT09ICdzdHJpbmcnICYmIHR5cGVvZiBidWlsZGVyW1wicm9vdFwiXSA9PT0gJ3N0cmluZycpKVxuICAgICAgICAgICAgZmlsZW5hbWUgPSBidWlsZGVyLFxuICAgICAgICAgICAgICAgIGJ1aWxkZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBQcm90b0J1Zi5sb2FkSnNvbihQcm90b0J1Zi5Eb3RQcm90by5QYXJzZXIucGFyc2UocHJvdG8pLCBidWlsZGVyLCBmaWxlbmFtZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIExvYWRzIGEgLnByb3RvIHN0cmluZyBhbmQgcmV0dXJucyB0aGUgQnVpbGRlci4gVGhpcyBpcyBhbiBhbGlhcyBvZiB7QGxpbmsgUHJvdG9CdWYubG9hZFByb3RvfS5cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvdG8gLnByb3RvIGZpbGUgY29udGVudHNcbiAgICAgKiBAcGFyYW0geyhQcm90b0J1Zi5CdWlsZGVyfHN0cmluZyk9fSBidWlsZGVyIEJ1aWxkZXIgdG8gYXBwZW5kIHRvLiBXaWxsIGNyZWF0ZSBhIG5ldyBvbmUgaWYgb21pdHRlZC5cbiAgICAgKiBAcGFyYW0geyhzdHJpbmd8e3Jvb3Q6IHN0cmluZywgZmlsZTogc3RyaW5nfSk9fSBmaWxlbmFtZSBUaGUgY29ycmVzcG9uZGluZyBmaWxlIG5hbWUgaWYga25vd24uIE11c3QgYmUgc3BlY2lmaWVkIGZvciBpbXBvcnRzLlxuICAgICAqIEByZXR1cm4ge1Byb3RvQnVmLkJ1aWxkZXJ9IEJ1aWxkZXIgdG8gY3JlYXRlIG5ldyBtZXNzYWdlc1xuICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgZGVmaW5pdGlvbiBjYW5ub3QgYmUgcGFyc2VkIG9yIGJ1aWx0XG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIFByb3RvQnVmLnByb3RvRnJvbVN0cmluZyA9IFByb3RvQnVmLmxvYWRQcm90bzsgLy8gTGVnYWN5XG5cbiAgICAvKipcbiAgICAgKiBMb2FkcyBhIC5wcm90byBmaWxlIGFuZCByZXR1cm5zIHRoZSBCdWlsZGVyLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfHtyb290OiBzdHJpbmcsIGZpbGU6IHN0cmluZ319IGZpbGVuYW1lIFBhdGggdG8gcHJvdG8gZmlsZSBvciBhbiBvYmplY3Qgc3BlY2lmeWluZyAnZmlsZScgd2l0aFxuICAgICAqICBhbiBvdmVycmlkZGVuICdyb290JyBwYXRoIGZvciBhbGwgaW1wb3J0ZWQgZmlsZXMuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbig/RXJyb3IsICFQcm90b0J1Zi5CdWlsZGVyPSk9fSBjYWxsYmFjayBDYWxsYmFjayB0aGF0IHdpbGwgcmVjZWl2ZSBgbnVsbGAgYXMgdGhlIGZpcnN0IGFuZFxuICAgICAqICB0aGUgQnVpbGRlciBhcyBpdHMgc2Vjb25kIGFyZ3VtZW50IG9uIHN1Y2Nlc3MsIG90aGVyd2lzZSB0aGUgZXJyb3IgYXMgaXRzIGZpcnN0IGFyZ3VtZW50LiBJZiBvbWl0dGVkLCB0aGVcbiAgICAgKiAgZmlsZSB3aWxsIGJlIHJlYWQgc3luY2hyb25vdXNseSBhbmQgdGhpcyBmdW5jdGlvbiB3aWxsIHJldHVybiB0aGUgQnVpbGRlci5cbiAgICAgKiBAcGFyYW0ge1Byb3RvQnVmLkJ1aWxkZXI9fSBidWlsZGVyIEJ1aWxkZXIgdG8gYXBwZW5kIHRvLiBXaWxsIGNyZWF0ZSBhIG5ldyBvbmUgaWYgb21pdHRlZC5cbiAgICAgKiBAcmV0dXJuIHs/UHJvdG9CdWYuQnVpbGRlcnx1bmRlZmluZWR9IFRoZSBCdWlsZGVyIGlmIHN5bmNocm9ub3VzIChubyBjYWxsYmFjayBzcGVjaWZpZWQsIHdpbGwgYmUgTlVMTCBpZiB0aGVcbiAgICAgKiAgIHJlcXVlc3QgaGFzIGZhaWxlZCksIGVsc2UgdW5kZWZpbmVkXG4gICAgICogQGV4cG9zZVxuICAgICAqL1xuICAgIFByb3RvQnVmLmxvYWRQcm90b0ZpbGUgPSBmdW5jdGlvbiAoZmlsZW5hbWUsIGNhbGxiYWNrLCBidWlsZGVyKSB7XG4gICAgICAgIGlmIChjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgPT09ICdvYmplY3QnKVxuICAgICAgICAgICAgYnVpbGRlciA9IGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgZWxzZSBpZiAoIWNhbGxiYWNrIHx8IHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgIGNhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgaWYgKGNhbGxiYWNrKVxuICAgICAgICAgICAgcmV0dXJuIFByb3RvQnVmLlV0aWwuZmV0Y2godHlwZW9mIGZpbGVuYW1lID09PSAnc3RyaW5nJyA/IGZpbGVuYW1lIDogZmlsZW5hbWVbXCJyb290XCJdICsgXCIvXCIgKyBmaWxlbmFtZVtcImZpbGVcIl0sIGZ1bmN0aW9uIChjb250ZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChjb250ZW50cyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBmaWxlXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBQcm90b0J1Zi5sb2FkUHJvdG8oY29udGVudHMsIGJ1aWxkZXIsIGZpbGVuYW1lKSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdmFyIGNvbnRlbnRzID0gUHJvdG9CdWYuVXRpbC5mZXRjaCh0eXBlb2YgZmlsZW5hbWUgPT09ICdvYmplY3QnID8gZmlsZW5hbWVbXCJyb290XCJdICsgXCIvXCIgKyBmaWxlbmFtZVtcImZpbGVcIl0gOiBmaWxlbmFtZSk7XG4gICAgICAgIHJldHVybiBjb250ZW50cyA9PT0gbnVsbCA/IG51bGwgOiBQcm90b0J1Zi5sb2FkUHJvdG8oY29udGVudHMsIGJ1aWxkZXIsIGZpbGVuYW1lKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTG9hZHMgYSAucHJvdG8gZmlsZSBhbmQgcmV0dXJucyB0aGUgQnVpbGRlci4gVGhpcyBpcyBhbiBhbGlhcyBvZiB7QGxpbmsgUHJvdG9CdWYubG9hZFByb3RvRmlsZX0uXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd8e3Jvb3Q6IHN0cmluZywgZmlsZTogc3RyaW5nfX0gZmlsZW5hbWUgUGF0aCB0byBwcm90byBmaWxlIG9yIGFuIG9iamVjdCBzcGVjaWZ5aW5nICdmaWxlJyB3aXRoXG4gICAgICogIGFuIG92ZXJyaWRkZW4gJ3Jvb3QnIHBhdGggZm9yIGFsbCBpbXBvcnRlZCBmaWxlcy5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKD9FcnJvciwgIVByb3RvQnVmLkJ1aWxkZXI9KT19IGNhbGxiYWNrIENhbGxiYWNrIHRoYXQgd2lsbCByZWNlaXZlIGBudWxsYCBhcyB0aGUgZmlyc3QgYW5kXG4gICAgICogIHRoZSBCdWlsZGVyIGFzIGl0cyBzZWNvbmQgYXJndW1lbnQgb24gc3VjY2Vzcywgb3RoZXJ3aXNlIHRoZSBlcnJvciBhcyBpdHMgZmlyc3QgYXJndW1lbnQuIElmIG9taXR0ZWQsIHRoZVxuICAgICAqICBmaWxlIHdpbGwgYmUgcmVhZCBzeW5jaHJvbm91c2x5IGFuZCB0aGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIHRoZSBCdWlsZGVyLlxuICAgICAqIEBwYXJhbSB7UHJvdG9CdWYuQnVpbGRlcj19IGJ1aWxkZXIgQnVpbGRlciB0byBhcHBlbmQgdG8uIFdpbGwgY3JlYXRlIGEgbmV3IG9uZSBpZiBvbWl0dGVkLlxuICAgICAqIEByZXR1cm4geyFQcm90b0J1Zi5CdWlsZGVyfHVuZGVmaW5lZH0gVGhlIEJ1aWxkZXIgaWYgc3luY2hyb25vdXMgKG5vIGNhbGxiYWNrIHNwZWNpZmllZCwgd2lsbCBiZSBOVUxMIGlmIHRoZVxuICAgICAqICAgcmVxdWVzdCBoYXMgZmFpbGVkKSwgZWxzZSB1bmRlZmluZWRcbiAgICAgKiBAZXhwb3NlXG4gICAgICovXG4gICAgUHJvdG9CdWYucHJvdG9Gcm9tRmlsZSA9IFByb3RvQnVmLmxvYWRQcm90b0ZpbGU7IC8vIExlZ2FjeVxuXG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IGVtcHR5IEJ1aWxkZXIuXG4gICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPj19IG9wdGlvbnMgQnVpbGRlciBvcHRpb25zLCBkZWZhdWx0cyB0byBnbG9iYWwgb3B0aW9ucyBzZXQgb24gUHJvdG9CdWZcbiAgICAgKiBAcmV0dXJuIHshUHJvdG9CdWYuQnVpbGRlcn0gQnVpbGRlclxuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBQcm90b0J1Zi5uZXdCdWlsZGVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uc1snY29udmVydEZpZWxkc1RvQ2FtZWxDYXNlJ10gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgb3B0aW9uc1snY29udmVydEZpZWxkc1RvQ2FtZWxDYXNlJ10gPSBQcm90b0J1Zi5jb252ZXJ0RmllbGRzVG9DYW1lbENhc2U7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uc1sncG9wdWxhdGVBY2Nlc3NvcnMnXSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICBvcHRpb25zWydwb3B1bGF0ZUFjY2Vzc29ycyddID0gUHJvdG9CdWYucG9wdWxhdGVBY2Nlc3NvcnM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvdG9CdWYuQnVpbGRlcihvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTG9hZHMgYSAuanNvbiBkZWZpbml0aW9uIGFuZCByZXR1cm5zIHRoZSBCdWlsZGVyLlxuICAgICAqIEBwYXJhbSB7ISp8c3RyaW5nfSBqc29uIEpTT04gZGVmaW5pdGlvblxuICAgICAqIEBwYXJhbSB7KFByb3RvQnVmLkJ1aWxkZXJ8c3RyaW5nfHtyb290OiBzdHJpbmcsIGZpbGU6IHN0cmluZ30pPX0gYnVpbGRlciBCdWlsZGVyIHRvIGFwcGVuZCB0by4gV2lsbCBjcmVhdGUgYSBuZXcgb25lIGlmIG9taXR0ZWQuXG4gICAgICogQHBhcmFtIHsoc3RyaW5nfHtyb290OiBzdHJpbmcsIGZpbGU6IHN0cmluZ30pPX0gZmlsZW5hbWUgVGhlIGNvcnJlc3BvbmRpbmcgZmlsZSBuYW1lIGlmIGtub3duLiBNdXN0IGJlIHNwZWNpZmllZCBmb3IgaW1wb3J0cy5cbiAgICAgKiBAcmV0dXJuIHtQcm90b0J1Zi5CdWlsZGVyfSBCdWlsZGVyIHRvIGNyZWF0ZSBuZXcgbWVzc2FnZXNcbiAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIGRlZmluaXRpb24gY2Fubm90IGJlIHBhcnNlZCBvciBidWlsdFxuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBQcm90b0J1Zi5sb2FkSnNvbiA9IGZ1bmN0aW9uIChqc29uLCBidWlsZGVyLCBmaWxlbmFtZSkge1xuICAgICAgICBpZiAodHlwZW9mIGJ1aWxkZXIgPT09ICdzdHJpbmcnIHx8IChidWlsZGVyICYmIHR5cGVvZiBidWlsZGVyW1wiZmlsZVwiXSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIGJ1aWxkZXJbXCJyb290XCJdID09PSAnc3RyaW5nJykpXG4gICAgICAgICAgICBmaWxlbmFtZSA9IGJ1aWxkZXIsXG4gICAgICAgICAgICAgICAgYnVpbGRlciA9IG51bGw7XG4gICAgICAgIGlmICghYnVpbGRlciB8fCB0eXBlb2YgYnVpbGRlciAhPT0gJ29iamVjdCcpXG4gICAgICAgICAgICBidWlsZGVyID0gUHJvdG9CdWYubmV3QnVpbGRlcigpO1xuICAgICAgICBpZiAodHlwZW9mIGpzb24gPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAganNvbiA9IEpTT04ucGFyc2UoanNvbik7XG4gICAgICAgIGJ1aWxkZXJbXCJpbXBvcnRcIl0oanNvbiwgZmlsZW5hbWUpO1xuICAgICAgICBidWlsZGVyLnJlc29sdmVBbGwoKTtcbiAgICAgICAgcmV0dXJuIGJ1aWxkZXI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIExvYWRzIGEgLmpzb24gZmlsZSBhbmQgcmV0dXJucyB0aGUgQnVpbGRlci5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ3whe3Jvb3Q6IHN0cmluZywgZmlsZTogc3RyaW5nfX0gZmlsZW5hbWUgUGF0aCB0byBqc29uIGZpbGUgb3IgYW4gb2JqZWN0IHNwZWNpZnlpbmcgJ2ZpbGUnIHdpdGhcbiAgICAgKiAgYW4gb3ZlcnJpZGRlbiAncm9vdCcgcGF0aCBmb3IgYWxsIGltcG9ydGVkIGZpbGVzLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oP0Vycm9yLCAhUHJvdG9CdWYuQnVpbGRlcj0pPX0gY2FsbGJhY2sgQ2FsbGJhY2sgdGhhdCB3aWxsIHJlY2VpdmUgYG51bGxgIGFzIHRoZSBmaXJzdCBhbmRcbiAgICAgKiAgdGhlIEJ1aWxkZXIgYXMgaXRzIHNlY29uZCBhcmd1bWVudCBvbiBzdWNjZXNzLCBvdGhlcndpc2UgdGhlIGVycm9yIGFzIGl0cyBmaXJzdCBhcmd1bWVudC4gSWYgb21pdHRlZCwgdGhlXG4gICAgICogIGZpbGUgd2lsbCBiZSByZWFkIHN5bmNocm9ub3VzbHkgYW5kIHRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gdGhlIEJ1aWxkZXIuXG4gICAgICogQHBhcmFtIHtQcm90b0J1Zi5CdWlsZGVyPX0gYnVpbGRlciBCdWlsZGVyIHRvIGFwcGVuZCB0by4gV2lsbCBjcmVhdGUgYSBuZXcgb25lIGlmIG9taXR0ZWQuXG4gICAgICogQHJldHVybiB7P1Byb3RvQnVmLkJ1aWxkZXJ8dW5kZWZpbmVkfSBUaGUgQnVpbGRlciBpZiBzeW5jaHJvbm91cyAobm8gY2FsbGJhY2sgc3BlY2lmaWVkLCB3aWxsIGJlIE5VTEwgaWYgdGhlXG4gICAgICogICByZXF1ZXN0IGhhcyBmYWlsZWQpLCBlbHNlIHVuZGVmaW5lZFxuICAgICAqIEBleHBvc2VcbiAgICAgKi9cbiAgICBQcm90b0J1Zi5sb2FkSnNvbkZpbGUgPSBmdW5jdGlvbiAoZmlsZW5hbWUsIGNhbGxiYWNrLCBidWlsZGVyKSB7XG4gICAgICAgIGlmIChjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgPT09ICdvYmplY3QnKVxuICAgICAgICAgICAgYnVpbGRlciA9IGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgZWxzZSBpZiAoIWNhbGxiYWNrIHx8IHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgIGNhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgaWYgKGNhbGxiYWNrKVxuICAgICAgICAgICAgcmV0dXJuIFByb3RvQnVmLlV0aWwuZmV0Y2godHlwZW9mIGZpbGVuYW1lID09PSAnc3RyaW5nJyA/IGZpbGVuYW1lIDogZmlsZW5hbWVbXCJyb290XCJdICsgXCIvXCIgKyBmaWxlbmFtZVtcImZpbGVcIl0sIGZ1bmN0aW9uIChjb250ZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChjb250ZW50cyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBmaWxlXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBQcm90b0J1Zi5sb2FkSnNvbihKU09OLnBhcnNlKGNvbnRlbnRzKSwgYnVpbGRlciwgZmlsZW5hbWUpKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB2YXIgY29udGVudHMgPSBQcm90b0J1Zi5VdGlsLmZldGNoKHR5cGVvZiBmaWxlbmFtZSA9PT0gJ29iamVjdCcgPyBmaWxlbmFtZVtcInJvb3RcIl0gKyBcIi9cIiArIGZpbGVuYW1lW1wiZmlsZVwiXSA6IGZpbGVuYW1lKTtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnRzID09PSBudWxsID8gbnVsbCA6IFByb3RvQnVmLmxvYWRKc29uKEpTT04ucGFyc2UoY29udGVudHMpLCBidWlsZGVyLCBmaWxlbmFtZSk7XG4gICAgfTtcblxuICAgIHJldHVybiBQcm90b0J1Zjtcbn0pO1xuIl19