"use strict";
cc._RF.push(module, '85f7bSkxqNEhI0yUX7MFCnz', 'BaseHack');
// c2f-framework/BaseHack.js

"use strict";

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.isEmpty = function (obj) {
  for (var k in obj) {
    return false;
  }

  return true;
};

Object.count = function (obj) {
  if (!obj) return 0;
  var num = 0;

  for (var key in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) {
      continue;
    }

    num++;
  }

  return num;
};

Object.merge = function (obj1, obj2) {
  if (!obj1 || !obj2) {
    return obj1 || obj2;
  }

  var obj = {};

  for (var k in obj1) {
    obj[k] = obj1[k];
  }

  for (var _k in obj2) {
    obj[_k] = obj2[_k];
  }

  return obj;
}; //浅度拷贝


Object.copy = function (obj) {
  var newObj = Object.create(obj);
  Object.assign(newObj, obj);
  return newObj;
}; //深度拷贝(有局限性，请知悉)


Object.copyDepth = function (target) {
  if (target == null || typeof target !== 'object') {
    return target;
  }

  var result = null;

  if (target instanceof Date) {
    result = new Date();
    result.setTime(target.getTime());
    return result;
  }

  if (target instanceof Array) {
    result = [];

    for (var i = 0, len = target.length; i < len; i++) {
      result[i] = Object.copyDepth(target[i]);
    }

    return result;
  }

  if (target instanceof Object) {
    result = {};

    for (var key in target) {
      if (target.hasOwnProperty(key)) {
        result[key] = Object.copyDepth(target[key]);
      }
    }

    return result;
  }

  console.warn("Object.copyDepth: \u4E0D\u652F\u6301\u7684\u7C7B\u578B\uFF1A" + result);
}; //首字母大写 


Object.firstBig = function (obj) {
  var newObj = {};
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; ++i) {
    var key = keys[i];
    var firstChar = key.substring(0, 1);
    var lastStr = key.substring(1);
    var newKey = firstChar.toUpperCase() + lastStr;

    if (obj[key] instanceof Array) {
      //数组
      var newArr = [];

      for (var _iterator = _createForOfIteratorHelperLoose(obj[key]), _step; !(_step = _iterator()).done;) {
        var iterator = _step.value;
        var arrData = Object.firstBig(iterator);
        newArr.push(arrData);
      }

      newObj[newKey] = newArr;
    } else newObj[newKey] = obj[key];
  }

  return newObj;
};

Array.prototype.sum = function () {
  var total = 0;

  for (var i = 0; i < this.length; i++) {
    if (!isNaN(this[i])) {
      total += +this[i];
    }
  }

  return total;
};

Array.prototype.remove = function (item) {
  var index = this.indexOf(item);

  if (index >= 0) {
    this.splice(index, 1);
  }
};

String.prototype.format = function () {
  var params = arguments;

  if (params.length === 0) {
    return this;
  } else {
    var param = params[0];
    var args = params;

    if (typeof param == 'object') {
      return this.replace(/\{(\w+)\}/g, function (s, i) {
        return param[i];
      });
    } else {
      return this.replace(/\{(\w+)\}/g, function (s, i) {
        return args[i];
      });
    }
  }
};

String.prototype.capWord = function () {
  return this.substring(0, 1).toUpperCase() + this.substring(1);
}; //去除空格 


String.prototype.trimAll = function () {
  return this.replace(/\s+/g, "");
}; //去除换行 


String.prototype.clearBr = function () {
  var tmp = this.replace(/<\/?.+?>/g, "");
  return tmp.replace(/[\r\n]/g, "");
}; //---------------------------------------------------
// 日期格式化
// 格式 YYYY/yyyy/YY/yy 表示年份
// MM/M 月份
// W/w 星期
// dd/DD/d/D 日期
// hh/HH/h/H 时间
// mm/m 分钟
// ss/SS/s/S 秒
//---------------------------------------------------


Date.prototype.format = function (formatStr) {
  var str = formatStr;
  var week = ['日', '一', '二', '三', '四', '五', '六'];
  str = str.replace(/yyyy|YYYY/, this.getFullYear());
  str = str.replace(/yy|YY/, this.getYear() % 100 > 9 ? (this.getYear() % 100).toString() : '0' + this.getYear() % 100);
  str = str.replace(/MM/, this.getMonth() + 1 > 9 ? (this.getMonth() + 1).toString() : '0' + (this.getMonth() + 1).toString());
  str = str.replace(/M/g, this.getMonth() + 1);
  str = str.replace(/w|W/g, week[this.getDay()]);
  str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());
  str = str.replace(/d|D/g, this.getDate());
  str = str.replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : '0' + this.getHours());
  str = str.replace(/h|H/g, this.getHours());
  str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : '0' + this.getMinutes());
  str = str.replace(/m/g, this.getMinutes());
  str = str.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds().toString() : '0' + this.getSeconds());
  str = str.replace(/s|S/g, this.getSeconds());
  return str;
}; //+---------------------------------------------------
//| 日期转字符串
//| 格式 YYYY-MM-DD hh:mm:ss
//+---------------------------------------------------


Date.prototype.dateToString = function () {
  var time = this;
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  var h = time.getHours();
  var mi = time.getMinutes();
  var s = time.getSeconds();
  m = m < 10 ? "0" + m : m;
  d = d < 10 ? "0" + d : d;
  h = h < 10 ? "0" + h : h;
  mi = mi < 10 ? "0" + mi : mi;
  s = s < 10 ? "0" + s : s;
  return y + "-" + m + "-" + d + " " + h + ":" + mi + ":" + s;
};

cc._RF.pop();