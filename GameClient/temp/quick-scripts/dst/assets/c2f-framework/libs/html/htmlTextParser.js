
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/libs/html/htmlTextParser.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '78934IpTndGAorbSvxv6+fr', 'htmlTextParser');
// c2f-framework/libs/html/htmlTextParser.js

"use strict";

/****************************************************************************
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 https://www.cocos.com/

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
 worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
 not use Cocos Creator software for developing other software or tools that's
 used for developing games. You are not granted to publish, distribute,
 sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
var eventRegx = /^(click)(\s)*=|(param)(\s)*=/;
var imageAttrReg = /(\s)*src(\s)*=|(\s)*height(\s)*=|(\s)*width(\s)*=|(\s)*align(\s)*=|(\s)*offset(\s)*=|(\s)*click(\s)*=|(\s)*param(\s)*=/;
var prefabRegx = /(\s)*idx(\s)*=|(\s)*click(\s)*=|(\s)*param(\s)*=/;
/**
 * A utils class for parsing HTML texts. The parsed results will be an object array.
 */

var HtmlTextParser = function HtmlTextParser() {
  this._parsedObject = {};
  this._specialSymbolArray = [];

  this._specialSymbolArray.push([/&lt;/g, '<']);

  this._specialSymbolArray.push([/&gt;/g, '>']);

  this._specialSymbolArray.push([/&amp;/g, '&']);

  this._specialSymbolArray.push([/&quot;/g, '"']);

  this._specialSymbolArray.push([/&apos;/g, '\'']);

  this._specialSymbolArray.push([/&nbsp;/g, ' ']);
};

HtmlTextParser.prototype = {
  constructor: HtmlTextParser,
  parse: function parse(htmlString) {
    this._resultObjectArray = [];

    if (!htmlString) {
      return this._resultObjectArray;
    }

    this._stack = [];
    var startIndex = 0;
    var length = htmlString.length;

    while (startIndex < length) {
      var tagEndIndex = htmlString.indexOf('>', startIndex);
      var tagBeginIndex = -1;

      if (tagEndIndex >= 0) {
        tagBeginIndex = htmlString.lastIndexOf('<', tagEndIndex);
        var noTagBegin = tagBeginIndex < startIndex - 1;

        if (noTagBegin) {
          tagBeginIndex = htmlString.indexOf('<', tagEndIndex + 1);
          tagEndIndex = htmlString.indexOf('>', tagBeginIndex + 1);
        }
      }

      if (tagBeginIndex < 0) {
        this._stack.pop();

        this._processResult(htmlString.substring(startIndex));

        startIndex = length;
      } else {
        var newStr = htmlString.substring(startIndex, tagBeginIndex);
        var tagStr = htmlString.substring(tagBeginIndex + 1, tagEndIndex);
        if (tagStr === "") newStr = htmlString.substring(startIndex, tagEndIndex + 1);

        this._processResult(newStr);

        if (tagEndIndex === -1) {
          // cc.error('The HTML tag is invalid!');
          tagEndIndex = tagBeginIndex;
        } else if (htmlString.charAt(tagBeginIndex + 1) === '\/') {
          this._stack.pop();
        } else {
          this._addToStack(tagStr);
        }

        startIndex = tagEndIndex + 1;
      }
    }

    return this._resultObjectArray;
  },
  _attributeToObject: function _attributeToObject(attribute) {
    attribute = attribute.trim();
    var obj = {};
    var header = attribute.match(/^(color|size)(\s)*=/);
    var tagName;
    var nextSpace;
    var eventObj;
    var eventHanlderString;

    if (header) {
      tagName = header[0];
      attribute = attribute.substring(tagName.length).trim();
      if (attribute === "") return obj; //parse color

      nextSpace = attribute.indexOf(' ');

      switch (tagName[0]) {
        case 'c':
          if (nextSpace > -1) {
            obj.color = attribute.substring(0, nextSpace).trim();
          } else {
            obj.color = attribute;
          }

          break;

        case 's':
          obj.size = parseInt(attribute);
          break;
      } //tag has event arguments


      if (nextSpace > -1) {
        eventHanlderString = attribute.substring(nextSpace + 1).trim();
        eventObj = this._processEventHandler(eventHanlderString);
        obj.event = eventObj;
      }

      return obj;
    }

    header = attribute.match(/^(br(\s)*\/)/);

    if (header && header[0].length > 0) {
      tagName = header[0].trim();

      if (tagName.startsWith("br") && tagName[tagName.length - 1] === "/") {
        obj.isNewLine = true;

        this._resultObjectArray.push({
          text: "",
          style: {
            newline: true
          }
        });

        return obj;
      }
    } //预制体


    header = attribute.match(/^(prefab(\s)*idx(\s)*=[^>]+\/)/);

    if (header && header[0].length > 0) {
      tagName = header[0].trim();

      if (tagName.startsWith("prefab") && tagName[tagName.length - 1] === "/") {
        header = attribute.match(prefabRegx);
        var tagValue;
        var remainingArgument;
        var isValidPrefab = false;

        while (header) {
          //skip the invalid tags at first
          attribute = attribute.substring(attribute.indexOf(header[0]));
          tagName = attribute.substr(0, header[0].length); //remove space and = character

          remainingArgument = attribute.substring(tagName.length).trim();
          nextSpace = remainingArgument.indexOf(' ');
          tagValue = nextSpace > -1 ? remainingArgument.substr(0, nextSpace) : remainingArgument;
          tagName = tagName.replace(/[^a-zA-Z]/g, "").trim();
          tagName = tagName.toLocaleLowerCase();
          attribute = remainingArgument.substring(nextSpace).trim();
          if (tagValue.endsWith('\/')) tagValue = tagValue.slice(0, -1);

          if (tagName === "idx") {
            switch (tagValue.charCodeAt(0)) {
              case 34: // "

              case 39:
                // '
                isValidPrefab = true;
                tagValue = tagValue.slice(1, -1);
                break;
            }

            obj.isPrefab = true;
            obj.idx = Number(tagValue);
          } else if (tagName === "click") {
            obj.event = this._processEventHandler(tagName + "=" + tagValue);
          }

          if (obj.event && tagName === 'param') {
            obj.event.param = tagValue.replace(/^\"|\"$/g, '');
          }

          header = attribute.match(imageAttrReg);
        }

        if (isValidPrefab && obj.isPrefab) {
          this._resultObjectArray.push({
            text: "",
            style: obj
          });
        }

        return {};
      }
    } //图集中的图片


    header = attribute.match(/^(img(\s)*src(\s)*=[^>]+\/)/);

    if (header && header[0].length > 0) {
      tagName = header[0].trim();

      if (tagName.startsWith("img") && tagName[tagName.length - 1] === "/") {
        header = attribute.match(imageAttrReg);
        var tagValue;
        var remainingArgument;
        var isValidImageTag = false;

        while (header) {
          //skip the invalid tags at first
          attribute = attribute.substring(attribute.indexOf(header[0]));
          tagName = attribute.substr(0, header[0].length); //remove space and = character

          remainingArgument = attribute.substring(tagName.length).trim();
          nextSpace = remainingArgument.indexOf(' ');
          tagValue = nextSpace > -1 ? remainingArgument.substr(0, nextSpace) : remainingArgument;
          tagName = tagName.replace(/[^a-zA-Z]/g, "").trim();
          tagName = tagName.toLocaleLowerCase();
          attribute = remainingArgument.substring(nextSpace).trim();
          if (tagValue.endsWith('\/')) tagValue = tagValue.slice(0, -1);

          if (tagName === "src") {
            switch (tagValue.charCodeAt(0)) {
              case 34: // "

              case 39:
                // '
                isValidImageTag = true;
                tagValue = tagValue.slice(1, -1);
                break;
            }

            obj.isImage = true;
            obj.src = tagValue;
          } else if (tagName === "height") {
            obj.imageHeight = parseInt(tagValue);
          } else if (tagName === "width") {
            obj.imageWidth = parseInt(tagValue);
          } else if (tagName === "align") {
            switch (tagValue.charCodeAt(0)) {
              case 34: // "

              case 39:
                // '
                tagValue = tagValue.slice(1, -1);
                break;
            }

            obj.imageAlign = tagValue.toLocaleLowerCase();
          } else if (tagName === "offset") {
            obj.imageOffset = tagValue;
          } else if (tagName === "click") {
            obj.event = this._processEventHandler(tagName + "=" + tagValue);
          }

          if (obj.event && tagName === 'param') {
            obj.event.param = tagValue.replace(/^\"|\"$/g, '');
          }

          header = attribute.match(imageAttrReg);
        }

        if (isValidImageTag && obj.isImage) {
          this._resultObjectArray.push({
            text: "",
            style: obj
          });
        }

        return {};
      }
    } //图片文件


    header = attribute.match(/^(iFile(\s)*src(\s)*=[^>]+\/)/);

    if (header && header[0].length > 0) {
      tagName = header[0].trim();

      if (tagName.startsWith("iFile") && tagName[tagName.length - 1] === "/") {
        header = attribute.match(imageAttrReg);
        var tagValue;
        var remainingArgument;
        var isValidImageTag = false;

        while (header) {
          //skip the invalid tags at first
          attribute = attribute.substring(attribute.indexOf(header[0]));
          tagName = attribute.substr(0, header[0].length); //remove space and = character

          remainingArgument = attribute.substring(tagName.length).trim();
          nextSpace = remainingArgument.indexOf(' ');
          tagValue = nextSpace > -1 ? remainingArgument.substr(0, nextSpace) : remainingArgument;
          tagName = tagName.replace(/[^a-zA-Z]/g, "").trim();
          tagName = tagName.toLocaleLowerCase();
          attribute = remainingArgument.substring(nextSpace).trim();
          if (tagValue.endsWith('\/')) tagValue = tagValue.slice(0, -1);

          if (tagName === "src") {
            switch (tagValue.charCodeAt(0)) {
              case 34: // "

              case 39:
                // '
                isValidImageTag = true;
                tagValue = tagValue.slice(1, -1);
                break;
            }

            obj.isImgFile = true;
            obj.src = tagValue;
          } else if (tagName === "height") {
            obj.imageHeight = parseInt(tagValue);
          } else if (tagName === "width") {
            obj.imageWidth = parseInt(tagValue);
          } else if (tagName === "align") {
            switch (tagValue.charCodeAt(0)) {
              case 34: // "

              case 39:
                // '
                tagValue = tagValue.slice(1, -1);
                break;
            }

            obj.imageAlign = tagValue.toLocaleLowerCase();
          } else if (tagName === "offset") {
            obj.imageOffset = tagValue;
          } else if (tagName === "click") {
            obj.event = this._processEventHandler(tagName + "=" + tagValue);
          }

          if (obj.event && tagName === 'param') {
            obj.event.param = tagValue.replace(/^\"|\"$/g, '');
          }

          header = attribute.match(imageAttrReg);
        }

        if (isValidImageTag && obj.isImgFile) {
          this._resultObjectArray.push({
            text: "",
            style: obj
          });
        }

        return {};
      }
    }

    header = attribute.match(/^(outline(\s)*[^>]*)/);

    if (header) {
      attribute = header[0].substring("outline".length).trim();
      var defaultOutlineObject = {
        color: "#ffffff",
        width: 1
      };

      if (attribute) {
        var outlineAttrReg = /(\s)*color(\s)*=|(\s)*width(\s)*=|(\s)*click(\s)*=|(\s)*param(\s)*=/;
        header = attribute.match(outlineAttrReg);
        var tagValue;

        while (header) {
          //skip the invalid tags at first
          attribute = attribute.substring(attribute.indexOf(header[0]));
          tagName = attribute.substr(0, header[0].length); //remove space and = character

          remainingArgument = attribute.substring(tagName.length).trim();
          nextSpace = remainingArgument.indexOf(' ');

          if (nextSpace > -1) {
            tagValue = remainingArgument.substr(0, nextSpace);
          } else {
            tagValue = remainingArgument;
          }

          tagName = tagName.replace(/[^a-zA-Z]/g, "").trim();
          tagName = tagName.toLocaleLowerCase();
          attribute = remainingArgument.substring(nextSpace).trim();

          if (tagName === "click") {
            obj.event = this._processEventHandler(tagName + "=" + tagValue);
          } else if (tagName === "color") {
            defaultOutlineObject.color = tagValue;
          } else if (tagName === "width") {
            defaultOutlineObject.width = parseInt(tagValue);
          }

          if (obj.event && tagName === 'param') {
            obj.event.param = tagValue.replace(/^\"|\"$/g, '');
          }

          header = attribute.match(outlineAttrReg);
        }
      }

      obj.outline = defaultOutlineObject;
    }

    header = attribute.match(/^(on|u|b|i)(\s)*/);

    if (header && header[0].length > 0) {
      tagName = header[0];
      attribute = attribute.substring(tagName.length).trim();

      switch (tagName[0]) {
        case 'u':
          obj.underline = true;
          break;

        case 'i':
          obj.italic = true;
          break;

        case 'b':
          obj.bold = true;
          break;
      }

      if (attribute === "") {
        return obj;
      }

      eventObj = this._processEventHandler(attribute);
      obj.event = eventObj;
    }

    return obj;
  },
  _processEventHandler: function _processEventHandler(eventString) {
    var index = 0;
    var obj = {};
    var eventNames = eventString.match(eventRegx);
    var isValidTag = false;

    while (eventNames) {
      var eventName = eventNames[0];
      var eventValue = "";
      isValidTag = false;
      eventString = eventString.substring(eventName.length).trim();

      if (eventString.charAt(0) === "\"") {
        index = eventString.indexOf("\"", 1);

        if (index > -1) {
          eventValue = eventString.substring(1, index).trim();
          isValidTag = true;
        }

        index++;
      } else if (eventString.charAt(0) === "\'") {
        index = eventString.indexOf('\'', 1);

        if (index > -1) {
          eventValue = eventString.substring(1, index).trim();
          isValidTag = true;
        }

        index++;
      } else {
        //skip the invalid attribute value
        var match = eventString.match(/(\S)+/);

        if (match) {
          eventValue = match[0];
        } else {
          eventValue = "";
        }

        index = eventValue.length;
      }

      if (isValidTag) {
        eventName = eventName.substring(0, eventName.length - 1).trim();
        obj[eventName] = eventValue;
      }

      eventString = eventString.substring(index).trim();
      eventNames = eventString.match(eventRegx);
    }

    return obj;
  },
  _addToStack: function _addToStack(attribute) {
    var obj = this._attributeToObject(attribute);

    if (this._stack.length === 0) {
      this._stack.push(obj);
    } else {
      if (obj.isNewLine || obj.isImage) {
        return;
      } //for nested tags


      var previousTagObj = this._stack[this._stack.length - 1];

      for (var key in previousTagObj) {
        if (!obj[key]) {
          obj[key] = previousTagObj[key];
        }
      }

      this._stack.push(obj);
    }
  },
  _processResult: function _processResult(value) {
    if (value === "") {
      return;
    }

    value = this._escapeSpecialSymbol(value);

    if (this._stack.length > 0) {
      this._resultObjectArray.push({
        text: value,
        style: this._stack[this._stack.length - 1]
      });
    } else {
      this._resultObjectArray.push({
        text: value
      });
    }
  },
  _escapeSpecialSymbol: function _escapeSpecialSymbol(str) {
    for (var i = 0; i < this._specialSymbolArray.length; ++i) {
      var key = this._specialSymbolArray[i][0];
      var value = this._specialSymbolArray[i][1];
      str = str.replace(key, value);
    }

    return str;
  }
};
module.exports = HtmlTextParser;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2xpYnMvaHRtbC9odG1sVGV4dFBhcnNlci5qcyJdLCJuYW1lcyI6WyJldmVudFJlZ3giLCJpbWFnZUF0dHJSZWciLCJwcmVmYWJSZWd4IiwiSHRtbFRleHRQYXJzZXIiLCJfcGFyc2VkT2JqZWN0IiwiX3NwZWNpYWxTeW1ib2xBcnJheSIsInB1c2giLCJwcm90b3R5cGUiLCJjb25zdHJ1Y3RvciIsInBhcnNlIiwiaHRtbFN0cmluZyIsIl9yZXN1bHRPYmplY3RBcnJheSIsIl9zdGFjayIsInN0YXJ0SW5kZXgiLCJsZW5ndGgiLCJ0YWdFbmRJbmRleCIsImluZGV4T2YiLCJ0YWdCZWdpbkluZGV4IiwibGFzdEluZGV4T2YiLCJub1RhZ0JlZ2luIiwicG9wIiwiX3Byb2Nlc3NSZXN1bHQiLCJzdWJzdHJpbmciLCJuZXdTdHIiLCJ0YWdTdHIiLCJjaGFyQXQiLCJfYWRkVG9TdGFjayIsIl9hdHRyaWJ1dGVUb09iamVjdCIsImF0dHJpYnV0ZSIsInRyaW0iLCJvYmoiLCJoZWFkZXIiLCJtYXRjaCIsInRhZ05hbWUiLCJuZXh0U3BhY2UiLCJldmVudE9iaiIsImV2ZW50SGFubGRlclN0cmluZyIsImNvbG9yIiwic2l6ZSIsInBhcnNlSW50IiwiX3Byb2Nlc3NFdmVudEhhbmRsZXIiLCJldmVudCIsInN0YXJ0c1dpdGgiLCJpc05ld0xpbmUiLCJ0ZXh0Iiwic3R5bGUiLCJuZXdsaW5lIiwidGFnVmFsdWUiLCJyZW1haW5pbmdBcmd1bWVudCIsImlzVmFsaWRQcmVmYWIiLCJzdWJzdHIiLCJyZXBsYWNlIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJlbmRzV2l0aCIsInNsaWNlIiwiY2hhckNvZGVBdCIsImlzUHJlZmFiIiwiaWR4IiwiTnVtYmVyIiwicGFyYW0iLCJpc1ZhbGlkSW1hZ2VUYWciLCJpc0ltYWdlIiwic3JjIiwiaW1hZ2VIZWlnaHQiLCJpbWFnZVdpZHRoIiwiaW1hZ2VBbGlnbiIsImltYWdlT2Zmc2V0IiwiaXNJbWdGaWxlIiwiZGVmYXVsdE91dGxpbmVPYmplY3QiLCJ3aWR0aCIsIm91dGxpbmVBdHRyUmVnIiwib3V0bGluZSIsInVuZGVybGluZSIsIml0YWxpYyIsImJvbGQiLCJldmVudFN0cmluZyIsImluZGV4IiwiZXZlbnROYW1lcyIsImlzVmFsaWRUYWciLCJldmVudE5hbWUiLCJldmVudFZhbHVlIiwicHJldmlvdXNUYWdPYmoiLCJrZXkiLCJ2YWx1ZSIsIl9lc2NhcGVTcGVjaWFsU3ltYm9sIiwic3RyIiwiaSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxTQUFTLEdBQUcsOEJBQWhCO0FBQ0EsSUFBSUMsWUFBWSxHQUFHLHdIQUFuQjtBQUNBLElBQUlDLFVBQVUsR0FBRyxrREFBakI7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFZO0VBQzdCLEtBQUtDLGFBQUwsR0FBcUIsRUFBckI7RUFDQSxLQUFLQyxtQkFBTCxHQUEyQixFQUEzQjs7RUFDQSxLQUFLQSxtQkFBTCxDQUF5QkMsSUFBekIsQ0FBOEIsQ0FBQyxPQUFELEVBQVUsR0FBVixDQUE5Qjs7RUFDQSxLQUFLRCxtQkFBTCxDQUF5QkMsSUFBekIsQ0FBOEIsQ0FBQyxPQUFELEVBQVUsR0FBVixDQUE5Qjs7RUFDQSxLQUFLRCxtQkFBTCxDQUF5QkMsSUFBekIsQ0FBOEIsQ0FBQyxRQUFELEVBQVcsR0FBWCxDQUE5Qjs7RUFDQSxLQUFLRCxtQkFBTCxDQUF5QkMsSUFBekIsQ0FBOEIsQ0FBQyxTQUFELEVBQVksR0FBWixDQUE5Qjs7RUFDQSxLQUFLRCxtQkFBTCxDQUF5QkMsSUFBekIsQ0FBOEIsQ0FBQyxTQUFELEVB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KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDEzLTIwMTYgQ2h1a29uZyBUZWNobm9sb2dpZXMgSW5jLlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxuIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcbiB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXG5cbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG52YXIgZXZlbnRSZWd4ID0gL14oY2xpY2spKFxccykqPXwocGFyYW0pKFxccykqPS87XG52YXIgaW1hZ2VBdHRyUmVnID0gLyhcXHMpKnNyYyhcXHMpKj18KFxccykqaGVpZ2h0KFxccykqPXwoXFxzKSp3aWR0aChcXHMpKj18KFxccykqYWxpZ24oXFxzKSo9fChcXHMpKm9mZnNldChcXHMpKj18KFxccykqY2xpY2soXFxzKSo9fChcXHMpKnBhcmFtKFxccykqPS87XG52YXIgcHJlZmFiUmVneCA9IC8oXFxzKSppZHgoXFxzKSo9fChcXHMpKmNsaWNrKFxccykqPXwoXFxzKSpwYXJhbShcXHMpKj0vO1xuLyoqXG4gKiBBIHV0aWxzIGNsYXNzIGZvciBwYXJzaW5nIEhUTUwgdGV4dHMuIFRoZSBwYXJzZWQgcmVzdWx0cyB3aWxsIGJlIGFuIG9iamVjdCBhcnJheS5cbiAqL1xudmFyIEh0bWxUZXh0UGFyc2VyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3BhcnNlZE9iamVjdCA9IHt9O1xuICAgIHRoaXMuX3NwZWNpYWxTeW1ib2xBcnJheSA9IFtdO1xuICAgIHRoaXMuX3NwZWNpYWxTeW1ib2xBcnJheS5wdXNoKFsvJmx0Oy9nLCAnPCddKTtcbiAgICB0aGlzLl9zcGVjaWFsU3ltYm9sQXJyYXkucHVzaChbLyZndDsvZywgJz4nXSk7XG4gICAgdGhpcy5fc3BlY2lhbFN5bWJvbEFycmF5LnB1c2goWy8mYW1wOy9nLCAnJiddKTtcbiAgICB0aGlzLl9zcGVjaWFsU3ltYm9sQXJyYXkucHVzaChbLyZxdW90Oy9nLCAnXCInXSk7XG4gICAgdGhpcy5fc3BlY2lhbFN5bWJvbEFycmF5LnB1c2goWy8mYXBvczsvZywgJ1xcJyddKTtcbiAgICB0aGlzLl9zcGVjaWFsU3ltYm9sQXJyYXkucHVzaChbLyZuYnNwOy9nLCAnICddKTtcbn07XG5cbkh0bWxUZXh0UGFyc2VyLnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogSHRtbFRleHRQYXJzZXIsXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChodG1sU3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3Jlc3VsdE9iamVjdEFycmF5ID0gW107XG4gICAgICAgIGlmICghaHRtbFN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3VsdE9iamVjdEFycmF5O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0YWNrID0gW107XG5cbiAgICAgICAgdmFyIHN0YXJ0SW5kZXggPSAwO1xuICAgICAgICB2YXIgbGVuZ3RoID0gaHRtbFN0cmluZy5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChzdGFydEluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgdGFnRW5kSW5kZXggPSBodG1sU3RyaW5nLmluZGV4T2YoJz4nLCBzdGFydEluZGV4KTtcbiAgICAgICAgICAgIHZhciB0YWdCZWdpbkluZGV4ID0gLTE7XG4gICAgICAgICAgICBpZiAodGFnRW5kSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgIHRhZ0JlZ2luSW5kZXggPSBodG1sU3RyaW5nLmxhc3RJbmRleE9mKCc8JywgdGFnRW5kSW5kZXgpO1xuICAgICAgICAgICAgICAgIHZhciBub1RhZ0JlZ2luID0gdGFnQmVnaW5JbmRleCA8IChzdGFydEluZGV4IC0gMSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobm9UYWdCZWdpbikge1xuICAgICAgICAgICAgICAgICAgICB0YWdCZWdpbkluZGV4ID0gaHRtbFN0cmluZy5pbmRleE9mKCc8JywgdGFnRW5kSW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgdGFnRW5kSW5kZXggPSBodG1sU3RyaW5nLmluZGV4T2YoJz4nLCB0YWdCZWdpbkluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFnQmVnaW5JbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9jZXNzUmVzdWx0KGh0bWxTdHJpbmcuc3Vic3RyaW5nKHN0YXJ0SW5kZXgpKTtcbiAgICAgICAgICAgICAgICBzdGFydEluZGV4ID0gbGVuZ3RoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3U3RyID0gaHRtbFN0cmluZy5zdWJzdHJpbmcoc3RhcnRJbmRleCwgdGFnQmVnaW5JbmRleCk7XG4gICAgICAgICAgICAgICAgdmFyIHRhZ1N0ciA9IGh0bWxTdHJpbmcuc3Vic3RyaW5nKHRhZ0JlZ2luSW5kZXggKyAxLCB0YWdFbmRJbmRleCk7XG4gICAgICAgICAgICAgICAgaWYgKHRhZ1N0ciA9PT0gXCJcIikgbmV3U3RyID0gaHRtbFN0cmluZy5zdWJzdHJpbmcoc3RhcnRJbmRleCwgdGFnRW5kSW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9jZXNzUmVzdWx0KG5ld1N0cik7XG4gICAgICAgICAgICAgICAgaWYgKHRhZ0VuZEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjYy5lcnJvcignVGhlIEhUTUwgdGFnIGlzIGludmFsaWQhJyk7XG4gICAgICAgICAgICAgICAgICAgIHRhZ0VuZEluZGV4ID0gdGFnQmVnaW5JbmRleDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGh0bWxTdHJpbmcuY2hhckF0KHRhZ0JlZ2luSW5kZXggKyAxKSA9PT0gJ1xcLycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkVG9TdGFjayh0YWdTdHIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdGFydEluZGV4ID0gdGFnRW5kSW5kZXggKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gdGhpcy5fcmVzdWx0T2JqZWN0QXJyYXk7XG4gICAgfSxcblxuICAgIF9hdHRyaWJ1dGVUb09iamVjdDogZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGUudHJpbSgpO1xuXG4gICAgICAgIHZhciBvYmogPSB7fTtcbiAgICAgICAgdmFyIGhlYWRlciA9IGF0dHJpYnV0ZS5tYXRjaCgvXihjb2xvcnxzaXplKShcXHMpKj0vKTtcbiAgICAgICAgdmFyIHRhZ05hbWU7XG4gICAgICAgIHZhciBuZXh0U3BhY2U7XG4gICAgICAgIHZhciBldmVudE9iajtcbiAgICAgICAgdmFyIGV2ZW50SGFubGRlclN0cmluZztcbiAgICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICAgICAgdGFnTmFtZSA9IGhlYWRlclswXTtcbiAgICAgICAgICAgIGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZS5zdWJzdHJpbmcodGFnTmFtZS5sZW5ndGgpLnRyaW0oKTtcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGUgPT09IFwiXCIpIHJldHVybiBvYmo7XG5cbiAgICAgICAgICAgIC8vcGFyc2UgY29sb3JcbiAgICAgICAgICAgIG5leHRTcGFjZSA9IGF0dHJpYnV0ZS5pbmRleE9mKCcgJyk7XG4gICAgICAgICAgICBzd2l0Y2ggKHRhZ05hbWVbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRTcGFjZSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouY29sb3IgPSBhdHRyaWJ1dGUuc3Vic3RyaW5nKDAsIG5leHRTcGFjZSkudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmNvbG9yID0gYXR0cmlidXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgICAgICAgICAgICBvYmouc2l6ZSA9IHBhcnNlSW50KGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3RhZyBoYXMgZXZlbnQgYXJndW1lbnRzXG4gICAgICAgICAgICBpZiAobmV4dFNwYWNlID4gLTEpIHtcbiAgICAgICAgICAgICAgICBldmVudEhhbmxkZXJTdHJpbmcgPSBhdHRyaWJ1dGUuc3Vic3RyaW5nKG5leHRTcGFjZSArIDEpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBldmVudE9iaiA9IHRoaXMuX3Byb2Nlc3NFdmVudEhhbmRsZXIoZXZlbnRIYW5sZGVyU3RyaW5nKTtcbiAgICAgICAgICAgICAgICBvYmouZXZlbnQgPSBldmVudE9iajtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cblxuICAgICAgICBoZWFkZXIgPSBhdHRyaWJ1dGUubWF0Y2goL14oYnIoXFxzKSpcXC8pLyk7XG4gICAgICAgIGlmIChoZWFkZXIgJiYgaGVhZGVyWzBdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRhZ05hbWUgPSBoZWFkZXJbMF0udHJpbSgpO1xuICAgICAgICAgICAgaWYgKHRhZ05hbWUuc3RhcnRzV2l0aChcImJyXCIpICYmIHRhZ05hbWVbdGFnTmFtZS5sZW5ndGggLSAxXSA9PT0gXCIvXCIpIHtcbiAgICAgICAgICAgICAgICBvYmouaXNOZXdMaW5lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXN1bHRPYmplY3RBcnJheS5wdXNoKHsgdGV4dDogXCJcIiwgc3R5bGU6IHsgbmV3bGluZTogdHJ1ZSB9IH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL+mihOWItuS9k1xuICAgICAgICBoZWFkZXIgPSBhdHRyaWJ1dGUubWF0Y2goL14ocHJlZmFiKFxccykqaWR4KFxccykqPVtePl0rXFwvKS8pO1xuICAgICAgICBpZiAoaGVhZGVyICYmIGhlYWRlclswXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YWdOYW1lID0gaGVhZGVyWzBdLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICh0YWdOYW1lLnN0YXJ0c1dpdGgoXCJwcmVmYWJcIikgJiYgdGFnTmFtZVt0YWdOYW1lLmxlbmd0aCAtIDFdID09PSBcIi9cIikge1xuICAgICAgICAgICAgICAgIGhlYWRlciA9IGF0dHJpYnV0ZS5tYXRjaChwcmVmYWJSZWd4KTtcbiAgICAgICAgICAgICAgICB2YXIgdGFnVmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIHJlbWFpbmluZ0FyZ3VtZW50O1xuICAgICAgICAgICAgICAgIHZhciBpc1ZhbGlkUHJlZmFiID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGhlYWRlcikge1xuICAgICAgICAgICAgICAgICAgICAvL3NraXAgdGhlIGludmFsaWQgdGFncyBhdCBmaXJzdFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGUuc3Vic3RyaW5nKGF0dHJpYnV0ZS5pbmRleE9mKGhlYWRlclswXSkpO1xuICAgICAgICAgICAgICAgICAgICB0YWdOYW1lID0gYXR0cmlidXRlLnN1YnN0cigwLCBoZWFkZXJbMF0ubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgLy9yZW1vdmUgc3BhY2UgYW5kID0gY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50ID0gYXR0cmlidXRlLnN1YnN0cmluZyh0YWdOYW1lLmxlbmd0aCkudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICBuZXh0U3BhY2UgPSByZW1haW5pbmdBcmd1bWVudC5pbmRleE9mKCcgJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGFnVmFsdWUgPSAobmV4dFNwYWNlID4gLTEpID8gcmVtYWluaW5nQXJndW1lbnQuc3Vic3RyKDAsIG5leHRTcGFjZSkgOiByZW1haW5pbmdBcmd1bWVudDtcbiAgICAgICAgICAgICAgICAgICAgdGFnTmFtZSA9IHRhZ05hbWUucmVwbGFjZSgvW15hLXpBLVpdL2csIFwiXCIpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgdGFnTmFtZSA9IHRhZ05hbWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUgPSByZW1haW5pbmdBcmd1bWVudC5zdWJzdHJpbmcobmV4dFNwYWNlKS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWdWYWx1ZS5lbmRzV2l0aCgnXFwvJykpIHRhZ1ZhbHVlID0gdGFnVmFsdWUuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFnTmFtZSA9PT0gXCJpZHhcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0YWdWYWx1ZS5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzNDogLy8gXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM5OiAvLyAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWRQcmVmYWIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdWYWx1ZSA9IHRhZ1ZhbHVlLnNsaWNlKDEsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouaXNQcmVmYWIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmlkeCA9IE51bWJlcih0YWdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJjbGlja1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouZXZlbnQgPSB0aGlzLl9wcm9jZXNzRXZlbnRIYW5kbGVyKHRhZ05hbWUgKyBcIj1cIiArIHRhZ1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmV2ZW50ICYmIHRhZ05hbWUgPT09ICdwYXJhbScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5ldmVudC5wYXJhbSA9IHRhZ1ZhbHVlLnJlcGxhY2UoL15cXFwifFxcXCIkL2csICcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgPSBhdHRyaWJ1dGUubWF0Y2goaW1hZ2VBdHRyUmVnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzVmFsaWRQcmVmYWIgJiYgb2JqLmlzUHJlZmFiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jlc3VsdE9iamVjdEFycmF5LnB1c2goeyB0ZXh0OiBcIlwiLCBzdHlsZTogb2JqIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL+WbvumbhuS4reeahOWbvueJh1xuICAgICAgICBoZWFkZXIgPSBhdHRyaWJ1dGUubWF0Y2goL14oaW1nKFxccykqc3JjKFxccykqPVtePl0rXFwvKS8pO1xuICAgICAgICBpZiAoaGVhZGVyICYmIGhlYWRlclswXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YWdOYW1lID0gaGVhZGVyWzBdLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICh0YWdOYW1lLnN0YXJ0c1dpdGgoXCJpbWdcIikgJiYgdGFnTmFtZVt0YWdOYW1lLmxlbmd0aCAtIDFdID09PSBcIi9cIikge1xuICAgICAgICAgICAgICAgIGhlYWRlciA9IGF0dHJpYnV0ZS5tYXRjaChpbWFnZUF0dHJSZWcpO1xuICAgICAgICAgICAgICAgIHZhciB0YWdWYWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgcmVtYWluaW5nQXJndW1lbnQ7XG4gICAgICAgICAgICAgICAgdmFyIGlzVmFsaWRJbWFnZVRhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHdoaWxlIChoZWFkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9za2lwIHRoZSBpbnZhbGlkIHRhZ3MgYXQgZmlyc3RcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlID0gYXR0cmlidXRlLnN1YnN0cmluZyhhdHRyaWJ1dGUuaW5kZXhPZihoZWFkZXJbMF0pKTtcbiAgICAgICAgICAgICAgICAgICAgdGFnTmFtZSA9IGF0dHJpYnV0ZS5zdWJzdHIoMCwgaGVhZGVyWzBdLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIC8vcmVtb3ZlIHNwYWNlIGFuZCA9IGNoYXJhY3RlclxuICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdBcmd1bWVudCA9IGF0dHJpYnV0ZS5zdWJzdHJpbmcodGFnTmFtZS5sZW5ndGgpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFNwYWNlID0gcmVtYWluaW5nQXJndW1lbnQuaW5kZXhPZignICcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRhZ1ZhbHVlID0gKG5leHRTcGFjZSA+IC0xKSA/IHJlbWFpbmluZ0FyZ3VtZW50LnN1YnN0cigwLCBuZXh0U3BhY2UpIDogcmVtYWluaW5nQXJndW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnJlcGxhY2UoL1teYS16QS1aXS9nLCBcIlwiKS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlID0gcmVtYWluaW5nQXJndW1lbnQuc3Vic3RyaW5nKG5leHRTcGFjZSkudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFnVmFsdWUuZW5kc1dpdGgoJ1xcLycpKSB0YWdWYWx1ZSA9IHRhZ1ZhbHVlLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhZ05hbWUgPT09IFwic3JjXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGFnVmFsdWUuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzQ6IC8vIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOTogLy8gJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkSW1hZ2VUYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdWYWx1ZSA9IHRhZ1ZhbHVlLnNsaWNlKDEsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouaXNJbWFnZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouc3JjID0gdGFnVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJoZWlnaHRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmltYWdlSGVpZ2h0ID0gcGFyc2VJbnQodGFnVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhZ05hbWUgPT09IFwid2lkdGhcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmltYWdlV2lkdGggPSBwYXJzZUludCh0YWdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJhbGlnblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRhZ1ZhbHVlLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM0OiAvLyBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzk6IC8vICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnVmFsdWUgPSB0YWdWYWx1ZS5zbGljZSgxLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmltYWdlQWxpZ24gPSB0YWdWYWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhZ05hbWUgPT09IFwib2Zmc2V0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5pbWFnZU9mZnNldCA9IHRhZ1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhZ05hbWUgPT09IFwiY2xpY2tcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmV2ZW50ID0gdGhpcy5fcHJvY2Vzc0V2ZW50SGFuZGxlcih0YWdOYW1lICsgXCI9XCIgKyB0YWdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmV2ZW50ICYmIHRhZ05hbWUgPT09ICdwYXJhbScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5ldmVudC5wYXJhbSA9IHRhZ1ZhbHVlLnJlcGxhY2UoL15cXFwifFxcXCIkL2csICcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciA9IGF0dHJpYnV0ZS5tYXRjaChpbWFnZUF0dHJSZWcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkSW1hZ2VUYWcgJiYgb2JqLmlzSW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVzdWx0T2JqZWN0QXJyYXkucHVzaCh7IHRleHQ6IFwiXCIsIHN0eWxlOiBvYmogfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy/lm77niYfmlofku7ZcbiAgICAgICAgaGVhZGVyID0gYXR0cmlidXRlLm1hdGNoKC9eKGlGaWxlKFxccykqc3JjKFxccykqPVtePl0rXFwvKS8pO1xuICAgICAgICBpZiAoaGVhZGVyICYmIGhlYWRlclswXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YWdOYW1lID0gaGVhZGVyWzBdLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICh0YWdOYW1lLnN0YXJ0c1dpdGgoXCJpRmlsZVwiKSAmJiB0YWdOYW1lW3RhZ05hbWUubGVuZ3RoIC0gMV0gPT09IFwiL1wiKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyID0gYXR0cmlidXRlLm1hdGNoKGltYWdlQXR0clJlZyk7XG4gICAgICAgICAgICAgICAgdmFyIHRhZ1ZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciByZW1haW5pbmdBcmd1bWVudDtcbiAgICAgICAgICAgICAgICB2YXIgaXNWYWxpZEltYWdlVGFnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGhlYWRlcikge1xuICAgICAgICAgICAgICAgICAgICAvL3NraXAgdGhlIGludmFsaWQgdGFncyBhdCBmaXJzdFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGUuc3Vic3RyaW5nKGF0dHJpYnV0ZS5pbmRleE9mKGhlYWRlclswXSkpO1xuICAgICAgICAgICAgICAgICAgICB0YWdOYW1lID0gYXR0cmlidXRlLnN1YnN0cigwLCBoZWFkZXJbMF0ubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgLy9yZW1vdmUgc3BhY2UgYW5kID0gY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50ID0gYXR0cmlidXRlLnN1YnN0cmluZyh0YWdOYW1lLmxlbmd0aCkudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICBuZXh0U3BhY2UgPSByZW1haW5pbmdBcmd1bWVudC5pbmRleE9mKCcgJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGFnVmFsdWUgPSAobmV4dFNwYWNlID4gLTEpID8gcmVtYWluaW5nQXJndW1lbnQuc3Vic3RyKDAsIG5leHRTcGFjZSkgOiByZW1haW5pbmdBcmd1bWVudDtcbiAgICAgICAgICAgICAgICAgICAgdGFnTmFtZSA9IHRhZ05hbWUucmVwbGFjZSgvW15hLXpBLVpdL2csIFwiXCIpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgdGFnTmFtZSA9IHRhZ05hbWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUgPSByZW1haW5pbmdBcmd1bWVudC5zdWJzdHJpbmcobmV4dFNwYWNlKS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWdWYWx1ZS5lbmRzV2l0aCgnXFwvJykpIHRhZ1ZhbHVlID0gdGFnVmFsdWUuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFnTmFtZSA9PT0gXCJzcmNcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0YWdWYWx1ZS5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzNDogLy8gXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM5OiAvLyAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWRJbWFnZVRhZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ1ZhbHVlID0gdGFnVmFsdWUuc2xpY2UoMSwgLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5pc0ltZ0ZpbGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnNyYyA9IHRhZ1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhZ05hbWUgPT09IFwiaGVpZ2h0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5pbWFnZUhlaWdodCA9IHBhcnNlSW50KHRhZ1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YWdOYW1lID09PSBcIndpZHRoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5pbWFnZVdpZHRoID0gcGFyc2VJbnQodGFnVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhZ05hbWUgPT09IFwiYWxpZ25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0YWdWYWx1ZS5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzNDogLy8gXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM5OiAvLyAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ1ZhbHVlID0gdGFnVmFsdWUuc2xpY2UoMSwgLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5pbWFnZUFsaWduID0gdGFnVmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YWdOYW1lID09PSBcIm9mZnNldFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouaW1hZ2VPZmZzZXQgPSB0YWdWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YWdOYW1lID09PSBcImNsaWNrXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5ldmVudCA9IHRoaXMuX3Byb2Nlc3NFdmVudEhhbmRsZXIodGFnTmFtZSArIFwiPVwiICsgdGFnVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5ldmVudCAmJiB0YWdOYW1lID09PSAncGFyYW0nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouZXZlbnQucGFyYW0gPSB0YWdWYWx1ZS5yZXBsYWNlKC9eXFxcInxcXFwiJC9nLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgPSBhdHRyaWJ1dGUubWF0Y2goaW1hZ2VBdHRyUmVnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZEltYWdlVGFnICYmIG9iai5pc0ltZ0ZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVzdWx0T2JqZWN0QXJyYXkucHVzaCh7IHRleHQ6IFwiXCIsIHN0eWxlOiBvYmogfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaGVhZGVyID0gYXR0cmlidXRlLm1hdGNoKC9eKG91dGxpbmUoXFxzKSpbXj5dKikvKTtcbiAgICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICAgICAgYXR0cmlidXRlID0gaGVhZGVyWzBdLnN1YnN0cmluZyhcIm91dGxpbmVcIi5sZW5ndGgpLnRyaW0oKTtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0T3V0bGluZU9iamVjdCA9IHsgY29sb3I6IFwiI2ZmZmZmZlwiLCB3aWR0aDogMSB9O1xuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgIHZhciBvdXRsaW5lQXR0clJlZyA9IC8oXFxzKSpjb2xvcihcXHMpKj18KFxccykqd2lkdGgoXFxzKSo9fChcXHMpKmNsaWNrKFxccykqPXwoXFxzKSpwYXJhbShcXHMpKj0vO1xuICAgICAgICAgICAgICAgIGhlYWRlciA9IGF0dHJpYnV0ZS5tYXRjaChvdXRsaW5lQXR0clJlZyk7XG4gICAgICAgICAgICAgICAgdmFyIHRhZ1ZhbHVlO1xuICAgICAgICAgICAgICAgIHdoaWxlIChoZWFkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9za2lwIHRoZSBpbnZhbGlkIHRhZ3MgYXQgZmlyc3RcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlID0gYXR0cmlidXRlLnN1YnN0cmluZyhhdHRyaWJ1dGUuaW5kZXhPZihoZWFkZXJbMF0pKTtcbiAgICAgICAgICAgICAgICAgICAgdGFnTmFtZSA9IGF0dHJpYnV0ZS5zdWJzdHIoMCwgaGVhZGVyWzBdLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIC8vcmVtb3ZlIHNwYWNlIGFuZCA9IGNoYXJhY3RlclxuICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdBcmd1bWVudCA9IGF0dHJpYnV0ZS5zdWJzdHJpbmcodGFnTmFtZS5sZW5ndGgpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFNwYWNlID0gcmVtYWluaW5nQXJndW1lbnQuaW5kZXhPZignICcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFNwYWNlID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ1ZhbHVlID0gcmVtYWluaW5nQXJndW1lbnQuc3Vic3RyKDAsIG5leHRTcGFjZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdWYWx1ZSA9IHJlbWFpbmluZ0FyZ3VtZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnJlcGxhY2UoL1teYS16QS1aXS9nLCBcIlwiKS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlID0gcmVtYWluaW5nQXJndW1lbnQuc3Vic3RyaW5nKG5leHRTcGFjZSkudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFnTmFtZSA9PT0gXCJjbGlja1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouZXZlbnQgPSB0aGlzLl9wcm9jZXNzRXZlbnRIYW5kbGVyKHRhZ05hbWUgKyBcIj1cIiArIHRhZ1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YWdOYW1lID09PSBcImNvbG9yXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRPdXRsaW5lT2JqZWN0LmNvbG9yID0gdGFnVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJ3aWR0aFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0T3V0bGluZU9iamVjdC53aWR0aCA9IHBhcnNlSW50KHRhZ1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmouZXZlbnQgJiYgdGFnTmFtZSA9PT0gJ3BhcmFtJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmV2ZW50LnBhcmFtID0gdGFnVmFsdWUucmVwbGFjZSgvXlxcXCJ8XFxcIiQvZywgJycpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyID0gYXR0cmlidXRlLm1hdGNoKG91dGxpbmVBdHRyUmVnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvYmoub3V0bGluZSA9IGRlZmF1bHRPdXRsaW5lT2JqZWN0O1xuICAgICAgICB9XG5cbiAgICAgICAgaGVhZGVyID0gYXR0cmlidXRlLm1hdGNoKC9eKG9ufHV8YnxpKShcXHMpKi8pO1xuICAgICAgICBpZiAoaGVhZGVyICYmIGhlYWRlclswXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YWdOYW1lID0gaGVhZGVyWzBdO1xuICAgICAgICAgICAgYXR0cmlidXRlID0gYXR0cmlidXRlLnN1YnN0cmluZyh0YWdOYW1lLmxlbmd0aCkudHJpbSgpO1xuICAgICAgICAgICAgc3dpdGNoICh0YWdOYW1lWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAndSc6XG4gICAgICAgICAgICAgICAgICAgIG9iai51bmRlcmxpbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdpJzpcbiAgICAgICAgICAgICAgICAgICAgb2JqLml0YWxpYyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2InOlxuICAgICAgICAgICAgICAgICAgICBvYmouYm9sZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudE9iaiA9IHRoaXMuX3Byb2Nlc3NFdmVudEhhbmRsZXIoYXR0cmlidXRlKTtcbiAgICAgICAgICAgIG9iai5ldmVudCA9IGV2ZW50T2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuXG4gICAgX3Byb2Nlc3NFdmVudEhhbmRsZXI6IGZ1bmN0aW9uIChldmVudFN0cmluZykge1xuICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICB2YXIgb2JqID0ge307XG4gICAgICAgIHZhciBldmVudE5hbWVzID0gZXZlbnRTdHJpbmcubWF0Y2goZXZlbnRSZWd4KTtcbiAgICAgICAgdmFyIGlzVmFsaWRUYWcgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKGV2ZW50TmFtZXMpIHtcbiAgICAgICAgICAgIHZhciBldmVudE5hbWUgPSBldmVudE5hbWVzWzBdO1xuICAgICAgICAgICAgdmFyIGV2ZW50VmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgaXNWYWxpZFRhZyA9IGZhbHNlO1xuICAgICAgICAgICAgZXZlbnRTdHJpbmcgPSBldmVudFN0cmluZy5zdWJzdHJpbmcoZXZlbnROYW1lLmxlbmd0aCkudHJpbSgpO1xuICAgICAgICAgICAgaWYgKGV2ZW50U3RyaW5nLmNoYXJBdCgwKSA9PT0gXCJcXFwiXCIpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGV2ZW50U3RyaW5nLmluZGV4T2YoXCJcXFwiXCIsIDEpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VmFsdWUgPSBldmVudFN0cmluZy5zdWJzdHJpbmcoMSwgaW5kZXgpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFRhZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50U3RyaW5nLmNoYXJBdCgwKSA9PT0gXCJcXCdcIikge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gZXZlbnRTdHJpbmcuaW5kZXhPZignXFwnJywgMSk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRWYWx1ZSA9IGV2ZW50U3RyaW5nLnN1YnN0cmluZygxLCBpbmRleCkudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9za2lwIHRoZSBpbnZhbGlkIGF0dHJpYnV0ZSB2YWx1ZVxuICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IGV2ZW50U3RyaW5nLm1hdGNoKC8oXFxTKSsvKTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRWYWx1ZSA9IG1hdGNoWzBdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmRleCA9IGV2ZW50VmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNWYWxpZFRhZykge1xuICAgICAgICAgICAgICAgIGV2ZW50TmFtZSA9IGV2ZW50TmFtZS5zdWJzdHJpbmcoMCwgZXZlbnROYW1lLmxlbmd0aCAtIDEpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBvYmpbZXZlbnROYW1lXSA9IGV2ZW50VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50U3RyaW5nID0gZXZlbnRTdHJpbmcuc3Vic3RyaW5nKGluZGV4KS50cmltKCk7XG4gICAgICAgICAgICBldmVudE5hbWVzID0gZXZlbnRTdHJpbmcubWF0Y2goZXZlbnRSZWd4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcblxuICAgIF9hZGRUb1N0YWNrOiBmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLl9hdHRyaWJ1dGVUb09iamVjdChhdHRyaWJ1dGUpO1xuXG4gICAgICAgIGlmICh0aGlzLl9zdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWNrLnB1c2gob2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChvYmouaXNOZXdMaW5lIHx8IG9iai5pc0ltYWdlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9mb3IgbmVzdGVkIHRhZ3NcbiAgICAgICAgICAgIHZhciBwcmV2aW91c1RhZ09iaiA9IHRoaXMuX3N0YWNrW3RoaXMuX3N0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHByZXZpb3VzVGFnT2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEob2JqW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ialtrZXldID0gcHJldmlvdXNUYWdPYmpba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9zdGFjay5wdXNoKG9iaik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX3Byb2Nlc3NSZXN1bHQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gdGhpcy5fZXNjYXBlU3BlY2lhbFN5bWJvbCh2YWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLl9zdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXN1bHRPYmplY3RBcnJheS5wdXNoKHsgdGV4dDogdmFsdWUsIHN0eWxlOiB0aGlzLl9zdGFja1t0aGlzLl9zdGFjay5sZW5ndGggLSAxXSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc3VsdE9iamVjdEFycmF5LnB1c2goeyB0ZXh0OiB2YWx1ZSB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfZXNjYXBlU3BlY2lhbFN5bWJvbDogZnVuY3Rpb24gKHN0cikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3NwZWNpYWxTeW1ib2xBcnJheS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuX3NwZWNpYWxTeW1ib2xBcnJheVtpXVswXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuX3NwZWNpYWxTeW1ib2xBcnJheVtpXVsxXTtcblxuICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2Uoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEh0bWxUZXh0UGFyc2VyO1xuIl19