
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/mvvm/ViewModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6a9f1+YeVpKIYETjwSD0G3o', 'ViewModel');
// c2f-framework/mvvm/ViewModel.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VM = void 0;
var JsonOb_1 = require("./JsonOb");
var VM_EMIT_HEAD = 'VC:';
var DEBUG_SHOW_PATH = false;
//通过 .  路径 设置值
function setValueFromPath(obj, path, value, tag) {
    if (tag === void 0) { tag = ''; }
    var props = path.split('.');
    for (var i = 0; i < props.length; i++) {
        var propName = props[i];
        if (propName in obj === false) {
            console.error('[' + propName + '] not find in ' + tag + '.' + path);
            break;
        }
        if (i == props.length - 1) {
            obj[propName] = value;
        }
        else {
            obj = obj[propName];
        }
    }
}
//通过 . 路径 获取值
function getValueFromPath(obj, path, def, tag) {
    if (tag === void 0) { tag = ''; }
    var props = path.split('.');
    for (var i = 0; i < props.length; i++) {
        var propName = props[i];
        if ((propName in obj === false)) {
            console.error('[' + propName + '] not find in ' + tag + '.' + path);
            return def;
        }
        obj = obj[propName];
    }
    if (obj === null || typeof obj === "undefined")
        obj = def; //如果g == null 则返回一个默认值
    return obj;
}
/**
 * ModelViewer 类
 */
var ViewModel = /** @class */ (function () {
    function ViewModel(data, tag) {
        //索引值用的标签
        this._tag = null;
        /**激活状态, 将会通过 cc.director.emit 发送值变动的信号, 适合需要屏蔽的情况 */
        this.active = true;
        /**是否激活根路径回调通知, 不激活的情况下 只能监听末端路径值来判断是否变化 */
        this.emitToRootPath = false;
        new JsonOb_1.JsonOb(data, this._callback.bind(this));
        this.$data = data;
        this._tag = tag;
    }
    //回调函数 请注意 回调的 path 数组是 引用类型，禁止修改
    ViewModel.prototype._callback = function (n, o, path) {
        if (this.active == true) {
            var name = VM_EMIT_HEAD + this._tag + '.' + path.join('.');
            if (DEBUG_SHOW_PATH)
                cc.log('>>', n, o, path);
            cc.director.emit(name, n, o, [this._tag].concat(path)); //通知末端路径
            if (this.emitToRootPath)
                cc.director.emit(VM_EMIT_HEAD + this._tag, n, o, path); //通知主路径
            if (path.length >= 2) {
                for (var i = 0; i < path.length - 1; i++) {
                    var e = path[i];
                    //cc.log('中端路径');
                }
            }
        }
    };
    //通过路径设置数据的方法
    ViewModel.prototype.setValue = function (path, value) {
        setValueFromPath(this.$data, path, value, this._tag);
    };
    //获取路径的值
    ViewModel.prototype.getValue = function (path, def) {
        return getValueFromPath(this.$data, path, def, this._tag);
    };
    return ViewModel;
}());
/**
 * VM 对象管理器(工厂)
 */
var VMManager = /** @class */ (function () {
    function VMManager() {
        /**静态数组，保存创建的 mv 组件 */
        this._mvs = [];
        this.EMIT_HEAD = VM_EMIT_HEAD;
        this.setObjValue = setValueFromPath;
        this.getObjValue = getValueFromPath;
    }
    /**
     * 绑定一个数据，并且可以由VM所管理
     * @param data 需要绑定的数据
     * @param tag 对应该数据的标签(用于识别为哪个VM，不允许重复)
     * @param activeRootObject 激活主路径通知，可能会有性能影响，一般不使用
     */
    VMManager.prototype.add = function (data, tag, activeRootObject) {
        if (tag === void 0) { tag = 'global'; }
        if (activeRootObject === void 0) { activeRootObject = false; }
        var vm = new ViewModel(data, tag);
        var has = this._mvs.find(function (v) { return v.tag === tag; });
        if (tag.includes('.')) {
            console.error('cant write . in tag:', tag);
            return;
        }
        if (has) {
            console.error('already set VM tag:' + tag);
            return;
        }
        vm.emitToRootPath = activeRootObject;
        this._mvs.push({ tag: tag, vm: vm });
    };
    /**
     * 移除并且销毁 VM 对象
     * @param tag
     */
    VMManager.prototype.remove = function (tag) {
        var index = this._mvs.findIndex(function (v) { return v.tag === tag; });
        if (index >= 0)
            this._mvs.splice(index, 1);
    };
    /**
     * 获取绑定的数据
     * @param tag 数据tag
     */
    VMManager.prototype.get = function (tag) {
        var res = this._mvs.find(function (v) { return v.tag === tag; });
        if (res == null) {
            console.error('cant find VM from:', tag);
        }
        else {
            return res.vm;
        }
    };
    /**
     * 通过全局路径,而不是 VM 对象来 设置值
     * @param path - 全局取值路径
     * @param value - 需要增加的值
     */
    VMManager.prototype.addValue = function (path, value) {
        path = path.trim(); //防止空格,自动剔除
        var rs = path.split('.');
        if (rs.length < 2) {
            console.error('Cant find path:' + path);
        }
        ;
        var vm = this.get(rs[0]);
        if (!vm) {
            console.error('Cant Set VM:' + rs[0]);
            return;
        }
        ;
        var resPath = rs.slice(1).join('.');
        vm.setValue(resPath, vm.getValue(resPath) + value);
    };
    /**
     * 通过全局路径,而不是 VM 对象来 获取值
     * @param path - 全局取值路径
     * @param def - 如果取不到值的返回的默认值
     */
    VMManager.prototype.getValue = function (path, def) {
        path = path.trim(); //防止空格,自动剔除
        var rs = path.split('.');
        if (rs.length < 2) {
            console.error('Get Value Cant find path:' + path);
            return;
        }
        ;
        var vm = this.get(rs[0]);
        if (!vm) {
            console.error('Cant Get VM:' + rs[0]);
            return;
        }
        ;
        return vm.getValue(rs.slice(1).join('.'), def);
    };
    /**
     * 通过全局路径,而不是 VM 对象来 设置值
     * @param path - 全局取值路径
     * @param value - 需要设置的值
     */
    VMManager.prototype.setValue = function (path, value) {
        path = path.trim(); //防止空格,自动剔除
        var rs = path.split('.');
        if (rs.length < 2) {
            console.error('Set Value Cant find path:' + path);
            return;
        }
        ;
        var vm = this.get(rs[0]);
        if (!vm) {
            console.error('Cant Set VM:' + rs[0]);
            return;
        }
        ;
        vm.setValue(rs.slice(1).join('.'), value);
    };
    /**等同于 cc.director.on */
    VMManager.prototype.bindPath = function (path, callback, target, useCapture) {
        path = path.trim(); //防止空格,自动剔除
        if (path == '') {
            console.error(target.node.name, '节点绑定的路径为空');
            return;
        }
        if (path.split('.')[0] === '*') {
            console.error(path, '路径不合法,可能错误覆盖了 VMParent 的onLoad 方法, 或者父节点并未挂载 VMParent 相关的组件脚本');
            return;
        }
        cc.director.on(VM_EMIT_HEAD + path, callback, target, useCapture);
    };
    /**等同于 cc.director.off */
    VMManager.prototype.unbindPath = function (path, callback, target) {
        path = path.trim(); //防止空格,自动剔除
        if (path.split('.')[0] === '*') {
            console.error(path, '路径不合法,可能错误覆盖了 VMParent 的onLoad 方法, 或者父节点并未挂载 VMParent 相关的组件脚本');
            return;
        }
        cc.director.off(VM_EMIT_HEAD + path, callback, target);
    };
    /**冻结所有标签的 VM，视图将不会受到任何信息 */
    VMManager.prototype.inactive = function () {
        this._mvs.forEach(function (mv) {
            mv.vm.active = false;
        });
    };
    /**激活所有标签的 VM*/
    VMManager.prototype.active = function () {
        this._mvs.forEach(function (mv) {
            mv.vm.active = true;
        });
    };
    return VMManager;
}());
//   整数、小数、时间、缩写
exports.VM = new VMManager();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL212dm0vVmlld01vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFrQztBQUVsQyxJQUFNLFlBQVksR0FBRyxLQUFLLENBQUM7QUFDM0IsSUFBTSxlQUFlLEdBQUcsS0FBSyxDQUFDO0FBRTlCLGNBQWM7QUFDZCxTQUFTLGdCQUFnQixDQUFDLEdBQVEsRUFBRSxJQUFZLEVBQUUsS0FBVSxFQUFFLEdBQWdCO0lBQWhCLG9CQUFBLEVBQUEsUUFBZ0I7SUFDMUUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNuQyxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxRQUFRLElBQUksR0FBRyxLQUFLLEtBQUssRUFBRTtZQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLFFBQVEsR0FBRyxnQkFBZ0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQUMsTUFBTTtTQUFFO1FBQzlHLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDekI7YUFBTTtZQUNILEdBQUcsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkI7S0FDSjtBQUVMLENBQUM7QUFFRCxhQUFhO0FBQ2IsU0FBUyxnQkFBZ0IsQ0FBQyxHQUFRLEVBQUUsSUFBWSxFQUFFLEdBQVMsRUFBRSxHQUFnQjtJQUFoQixvQkFBQSxFQUFBLFFBQWdCO0lBQ3pFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMs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LENBQUMsRUFBRSxDQUFDLFlBQVksR0FBRyxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQseUJBQXlCO0lBQ3pCLDhCQUFVLEdBQVYsVUFBVyxJQUFZLEVBQUUsUUFBa0IsRUFBRSxNQUFZO1FBQ3JELElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQSxXQUFXO1FBQzlCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDNUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsK0RBQStELENBQUMsQ0FBQztZQUNyRixPQUFPO1NBQ1Y7UUFDRCxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsNEJBQTRCO0lBQzVCLDRCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUU7WUFDaEIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELGVBQWU7SUFDZiwwQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxFQUFFO1lBQ2hCLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDTCxnQkFBQztBQUFELENBdElBLEFBc0lDLElBQUE7QUFFRCxnQkFBZ0I7QUFFTCxRQUFBLEVBQUUsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSnNvbk9iIH0gZnJvbSAnLi9Kc29uT2InO1xuXG5jb25zdCBWTV9FTUlUX0hFQUQgPSAnVkM6JztcbmNvbnN0IERFQlVHX1NIT1dfUEFUSCA9IGZhbHNlO1xuXG4vL+mAmui/hyAuICDot6/lvoQg6K6+572u5YC8XG5mdW5jdGlvbiBzZXRWYWx1ZUZyb21QYXRoKG9iajogYW55LCBwYXRoOiBzdHJpbmcsIHZhbHVlOiBhbnksIHRhZzogc3RyaW5nID0gJycpIHtcbiAgICBsZXQgcHJvcHMgPSBwYXRoLnNwbGl0KCcuJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwcm9wTmFtZSA9IHByb3BzW2ldO1xuICAgICAgICBpZiAocHJvcE5hbWUgaW4gb2JqID09PSBmYWxzZSkgeyBjb25zb2xlLmVycm9yKCdbJyArIHByb3BOYW1lICsgJ10gbm90IGZpbmQgaW4gJyArIHRhZyArICcuJyArIHBhdGgpOyBicmVhazsgfVxuICAgICAgICBpZiAoaSA9PSBwcm9wcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBvYmpbcHJvcE5hbWVdID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmogPSBvYmpbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbi8v6YCa6L+HIC4g6Lev5b6EIOiOt+WPluWAvFxuZnVuY3Rpb24gZ2V0VmFsdWVGcm9tUGF0aChvYmo6IGFueSwgcGF0aDogc3RyaW5nLCBkZWY/OiBhbnksIHRhZzogc3RyaW5nID0gJycpOiBhbnkge1xuICAgIGxldCBwcm9wcyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByb3BOYW1lID0gcHJvcHNbaV07XG4gICAgICAgIGlmICgocHJvcE5hbWUgaW4gb2JqID09PSBmYWxzZSkpIHsgY29uc29sZS5lcnJvcignWycgKyBwcm9wTmFtZSArICddIG5vdCBmaW5kIGluICcgKyB0YWcgKyAnLicgKyBwYXRoKTsgcmV0dXJuIGRlZjsgfVxuICAgICAgICBvYmogPSBvYmpbcHJvcE5hbWVdO1xuICAgIH1cbiAgICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIpIG9iaiA9IGRlZjsvL+WmguaenGcgPT0gbnVsbCDliJnov5Tlm57kuIDkuKrpu5jorqTlgLxcbiAgICByZXR1cm4gb2JqO1xuXG59XG5cbi8qKlxuICogTW9kZWxWaWV3ZXIg57G7XG4gKi9cbmNsYXNzIFZpZXdNb2RlbDxUPntcbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBULCB0YWc6IHN0cmluZykge1xuICAgICAgICBuZXcgSnNvbk9iKGRhdGEsIHRoaXMuX2NhbGxiYWNrLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLiRkYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5fdGFnID0gdGFnO1xuICAgIH1cblxuICAgIHB1YmxpYyAkZGF0YTogVDtcblxuICAgIC8v57Si5byV5YC855So55qE5qCH562+XG4gICAgcHJpdmF0ZSBfdGFnOiBzdHJpbmcgPSBudWxsO1xuXG4gICAgLyoq5r+A5rS754q25oCBLCDlsIbkvJrpgJrov4cgY2MuZGlyZWN0b3IuZW1pdCDlj5HpgIHlgLzlj5jliqjnmoTkv6Hlj7csIOmAguWQiOmcgOimgeWxj+iUveeahOaDheWGtSAqL1xuICAgIHB1YmxpYyBhY3RpdmU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgLyoq5piv5ZCm5r+A5rS75qC56Lev5b6E5Zue6LCD6YCa55+lLCDkuI3mv4DmtLvnmoTmg4XlhrXkuIsg5Y+q6IO955uR5ZCs5pyr56uv6Lev5b6E5YC85p2l5Yik5pat5piv5ZCm5Y+Y5YyWICovXG4gICAgcHVibGljIGVtaXRUb1Jvb3RQYXRoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvL+Wbnuiwg+WHveaVsCDor7fms6jmhI8g5Zue6LCD55qEIHBhdGgg5pWw57uE5pivIOW8leeUqOexu+Wei++8jOemgeatouS/ruaUuVxuICAgIHByaXZhdGUgX2NhbGxiYWNrKG46IGFueSwgbzogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBWTV9FTUlUX0hFQUQgKyB0aGlzLl90YWcgKyAnLicgKyBwYXRoLmpvaW4oJy4nKVxuICAgICAgICAgICAgaWYgKERFQlVHX1NIT1dfUEFUSCkgY2MubG9nKCc+PicsIG4sIG8sIHBhdGgpO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZW1pdChuYW1lLCBuLCBvLCBbdGhpcy5fdGFnXS5jb25jYXQocGF0aCkpOyAvL+mAmuefpeacq+err+i3r+W+hFxuXG4gICAgICAgICAgICBpZiAodGhpcy5lbWl0VG9Sb290UGF0aCkgY2MuZGlyZWN0b3IuZW1pdChWTV9FTUlUX0hFQUQgKyB0aGlzLl90YWcsIG4sIG8sIHBhdGgpOy8v6YCa55+l5Li76Lev5b6EXG5cbiAgICAgICAgICAgIGlmIChwYXRoLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlID0gcGF0aFtpXTtcbiAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coJ+S4reerr+i3r+W+hCcpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+mAmui/h+i3r+W+hOiuvue9ruaVsOaNrueahOaWueazlVxuICAgIHB1YmxpYyBzZXRWYWx1ZShwYXRoOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgc2V0VmFsdWVGcm9tUGF0aCh0aGlzLiRkYXRhLCBwYXRoLCB2YWx1ZSwgdGhpcy5fdGFnKTtcbiAgICB9XG4gICAgLy/ojrflj5bot6/lvoTnmoTlgLxcbiAgICBwdWJsaWMgZ2V0VmFsdWUocGF0aDogc3RyaW5nLCBkZWY/OiBhbnkpOiBhbnkge1xuICAgICAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUGF0aCh0aGlzLiRkYXRhLCBwYXRoLCBkZWYsIHRoaXMuX3RhZyk7XG4gICAgfVxufVxuXG4vKipcbiAqIFZNIOWvueixoeeuoeeQhuWZqCjlt6XljoIpXG4gKi9cbmNsYXNzIFZNTWFuYWdlciB7XG4gICAgLyoq6Z2Z5oCB5pWw57uE77yM5L+d5a2Y5Yib5bu655qEIG12IOe7hOS7tiAqL1xuICAgIHByaXZhdGUgX212czogQXJyYXk8eyB0YWc6IHN0cmluZywgdm06IFZpZXdNb2RlbDxhbnk+IH0+ID0gW107XG5cbiAgICBwcml2YXRlIEVNSVRfSEVBRCA9IFZNX0VNSVRfSEVBRDtcblxuICAgIC8qKlxuICAgICAqIOe7keWumuS4gOS4quaVsOaNru+8jOW5tuS4lOWPr+S7peeUsVZN5omA566h55CGXG4gICAgICogQHBhcmFtIGRhdGEg6ZyA6KaB57uR5a6a55qE5pWw5o2uXG4gICAgICogQHBhcmFtIHRhZyDlr7nlupTor6XmlbDmja7nmoTmoIfnrb4o55So5LqO6K+G5Yir5Li65ZOq5LiqVk3vvIzkuI3lhYHorrjph43lpI0pXG4gICAgICogQHBhcmFtIGFjdGl2ZVJvb3RPYmplY3Qg5r+A5rS75Li76Lev5b6E6YCa55+l77yM5Y+v6IO95Lya5pyJ5oCn6IO95b2x5ZON77yM5LiA6Iis5LiN5L2/55SoXG4gICAgICovXG4gICAgYWRkPFQ+KGRhdGE6IFQsIHRhZzogc3RyaW5nID0gJ2dsb2JhbCcsIGFjdGl2ZVJvb3RPYmplY3Q6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgdm0gPSBuZXcgVmlld01vZGVsPFQ+KGRhdGEsIHRhZyk7XG4gICAgICAgIGxldCBoYXMgPSB0aGlzLl9tdnMuZmluZCh2ID0+IHYudGFnID09PSB0YWcpO1xuICAgICAgICBpZiAodGFnLmluY2x1ZGVzKCcuJykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbnQgd3JpdGUgLiBpbiB0YWc6JywgdGFnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdhbHJlYWR5IHNldCBWTSB0YWc6JyArIHRhZyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2bS5lbWl0VG9Sb290UGF0aCA9IGFjdGl2ZVJvb3RPYmplY3Q7XG4gICAgICAgIHRoaXMuX212cy5wdXNoKHsgdGFnOiB0YWcsIHZtOiB2bSB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnp7vpmaTlubbkuJTplIDmr4EgVk0g5a+56LGhXG4gICAgICogQHBhcmFtIHRhZyBcbiAgICAgKi9cbiAgICByZW1vdmUodGFnOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5fbXZzLmZpbmRJbmRleCh2ID0+IHYudGFnID09PSB0YWcpO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkgdGhpcy5fbXZzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W57uR5a6a55qE5pWw5o2uXG4gICAgICogQHBhcmFtIHRhZyDmlbDmja50YWdcbiAgICAgKi9cbiAgICBnZXQ8VD4odGFnOiBzdHJpbmcpOiBWaWV3TW9kZWw8VD4ge1xuICAgICAgICBsZXQgcmVzID0gdGhpcy5fbXZzLmZpbmQodiA9PiB2LnRhZyA9PT0gdGFnKTtcbiAgICAgICAgaWYgKHJlcyA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdjYW50IGZpbmQgVk0gZnJvbTonLCB0YWcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy52bTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmAmui/h+WFqOWxgOi3r+W+hCzogIzkuI3mmK8gVk0g5a+56LGh5p2lIOiuvue9ruWAvFxuICAgICAqIEBwYXJhbSBwYXRoIC0g5YWo5bGA5Y+W5YC86Lev5b6EXG4gICAgICogQHBhcmFtIHZhbHVlIC0g6ZyA6KaB5aKe5Yqg55qE5YC8XG4gICAgICovXG4gICAgYWRkVmFsdWUocGF0aDogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnRyaW0oKTsvL+mYsuatouepuuagvCzoh6rliqjliZTpmaRcbiAgICAgICAgbGV0IHJzID0gcGF0aC5zcGxpdCgnLicpO1xuICAgICAgICBpZiAocnMubGVuZ3RoIDwgMikgeyBjb25zb2xlLmVycm9yKCdDYW50IGZpbmQgcGF0aDonICsgcGF0aCkgfTtcbiAgICAgICAgbGV0IHZtID0gdGhpcy5nZXQocnNbMF0pO1xuICAgICAgICBpZiAoIXZtKSB7IGNvbnNvbGUuZXJyb3IoJ0NhbnQgU2V0IFZNOicgKyByc1swXSk7IHJldHVybjsgfTtcbiAgICAgICAgbGV0IHJlc1BhdGggPSBycy5zbGljZSgxKS5qb2luKCcuJyk7XG4gICAgICAgIHZtLnNldFZhbHVlKHJlc1BhdGgsIHZtLmdldFZhbHVlKHJlc1BhdGgpICsgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmAmui/h+WFqOWxgOi3r+W+hCzogIzkuI3mmK8gVk0g5a+56LGh5p2lIOiOt+WPluWAvFxuICAgICAqIEBwYXJhbSBwYXRoIC0g5YWo5bGA5Y+W5YC86Lev5b6EXG4gICAgICogQHBhcmFtIGRlZiAtIOWmguaenOWPluS4jeWIsOWAvOeahOi/lOWbnueahOm7mOiupOWAvFxuICAgICAqL1xuICAgIGdldFZhbHVlKHBhdGg6IHN0cmluZywgZGVmPzogYW55KTogYW55IHtcbiAgICAgICAgcGF0aCA9IHBhdGgudHJpbSgpOy8v6Ziy5q2i56m65qC8LOiHquWKqOWJlOmZpFxuICAgICAgICBsZXQgcnMgPSBwYXRoLnNwbGl0KCcuJyk7XG4gICAgICAgIGlmIChycy5sZW5ndGggPCAyKSB7IGNvbnNvbGUuZXJyb3IoJ0dldCBWYWx1ZSBDYW50IGZpbmQgcGF0aDonICsgcGF0aCk7IHJldHVybjsgfTtcbiAgICAgICAgbGV0IHZtID0gdGhpcy5nZXQocnNbMF0pO1xuICAgICAgICBpZiAoIXZtKSB7IGNvbnNvbGUuZXJyb3IoJ0NhbnQgR2V0IFZNOicgKyByc1swXSk7IHJldHVybjsgfTtcbiAgICAgICAgcmV0dXJuIHZtLmdldFZhbHVlKHJzLnNsaWNlKDEpLmpvaW4oJy4nKSwgZGVmKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDpgJrov4flhajlsYDot6/lvoQs6ICM5LiN5pivIFZNIOWvueixoeadpSDorr7nva7lgLxcbiAgICAgKiBAcGFyYW0gcGF0aCAtIOWFqOWxgOWPluWAvOi3r+W+hFxuICAgICAqIEBwYXJhbSB2YWx1ZSAtIOmcgOimgeiuvue9rueahOWAvFxuICAgICAqL1xuICAgIHNldFZhbHVlKHBhdGg6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgICAgICBwYXRoID0gcGF0aC50cmltKCk7Ly/pmLLmraLnqbrmoLws6Ieq5Yqo5YmU6ZmkXG4gICAgICAgIGxldCBycyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgICAgICAgaWYgKHJzLmxlbmd0aCA8IDIpIHsgY29uc29sZS5lcnJvcignU2V0IFZhbHVlIENhbnQgZmluZCBwYXRoOicgKyBwYXRoKTsgcmV0dXJuOyB9O1xuICAgICAgICBsZXQgdm0gPSB0aGlzLmdldChyc1swXSk7XG4gICAgICAgIGlmICghdm0pIHsgY29uc29sZS5lcnJvcignQ2FudCBTZXQgVk06JyArIHJzWzBdKTsgcmV0dXJuOyB9O1xuICAgICAgICB2bS5zZXRWYWx1ZShycy5zbGljZSgxKS5qb2luKCcuJyksIHZhbHVlKTtcblxuICAgIH1cblxuICAgIHNldE9ialZhbHVlID0gc2V0VmFsdWVGcm9tUGF0aDtcbiAgICBnZXRPYmpWYWx1ZSA9IGdldFZhbHVlRnJvbVBhdGg7XG5cbiAgICAvKirnrYnlkIzkuo4gY2MuZGlyZWN0b3Iub24gKi9cbiAgICBiaW5kUGF0aChwYXRoOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55LCB1c2VDYXB0dXJlPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBwYXRoID0gcGF0aC50cmltKCk7Ly/pmLLmraLnqbrmoLws6Ieq5Yqo5YmU6ZmkXG4gICAgICAgIGlmIChwYXRoID09ICcnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKHRhcmdldC5ub2RlLm5hbWUsICfoioLngrnnu5HlrprnmoTot6/lvoTkuLrnqbonKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aC5zcGxpdCgnLicpWzBdID09PSAnKicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocGF0aCwgJ+i3r+W+hOS4jeWQiOazlSzlj6/og73plJnor6/opobnm5bkuoYgVk1QYXJlbnQg55qEb25Mb2FkIOaWueazlSwg5oiW6ICF54i26IqC54K55bm25pyq5oyC6L29IFZNUGFyZW50IOebuOWFs+eahOe7hOS7tuiEmuacrCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNjLmRpcmVjdG9yLm9uKFZNX0VNSVRfSEVBRCArIHBhdGgsIGNhbGxiYWNrLCB0YXJnZXQsIHVzZUNhcHR1cmUpO1xuICAgIH1cblxuICAgIC8qKuetieWQjOS6jiBjYy5kaXJlY3Rvci5vZmYgKi9cbiAgICB1bmJpbmRQYXRoKHBhdGg6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgcGF0aCA9IHBhdGgudHJpbSgpOy8v6Ziy5q2i56m65qC8LOiHquWKqOWJlOmZpFxuICAgICAgICBpZiAocGF0aC5zcGxpdCgnLicpWzBdID09PSAnKicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocGF0aCwgJ+i3r+W+hOS4jeWQiOazlSzlj6/og73plJnor6/opobnm5bkuoYgVk1QYXJlbnQg55qEb25Mb2FkIOaWueazlSwg5oiW6ICF54i26IqC54K55bm25pyq5oyC6L29IFZNUGFyZW50IOebuOWFs+eahOe7hOS7tuiEmuacrCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNjLmRpcmVjdG9yLm9mZihWTV9FTUlUX0hFQUQgKyBwYXRoLCBjYWxsYmFjaywgdGFyZ2V0KTtcbiAgICB9XG5cbiAgICAvKirlhrvnu5PmiYDmnInmoIfnrb7nmoQgVk3vvIzop4blm77lsIbkuI3kvJrlj5fliLDku7vkvZXkv6Hmga8gKi9cbiAgICBpbmFjdGl2ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbXZzLmZvckVhY2gobXYgPT4ge1xuICAgICAgICAgICAgbXYudm0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoq5r+A5rS75omA5pyJ5qCH562+55qEIFZNKi9cbiAgICBhY3RpdmUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX212cy5mb3JFYWNoKG12ID0+IHtcbiAgICAgICAgICAgIG12LnZtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG4vLyAgIOaVtOaVsOOAgeWwj+aVsOOAgeaXtumXtOOAgee8qeWGmVxuXG5leHBvcnQgbGV0IFZNID0gbmV3IFZNTWFuYWdlcigpOyJdfQ==