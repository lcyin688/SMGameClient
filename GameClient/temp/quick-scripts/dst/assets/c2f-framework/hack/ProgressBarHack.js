
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/hack/ProgressBarHack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f17a8GfyCZPOID27gMupfok', 'ProgressBarHack');
// c2f-framework/hack/ProgressBarHack.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (!CC_EDITOR) {
    if (!cc.ProgressBar.prototype["__$CCProgressBarHack$__"]) {
        cc.ProgressBar.prototype["__$CCProgressBarHack$__"] = true;
        // 创建一个闭包来保存原始的 getter 和 setter（如果存在）  
        var engineGetProgress = null;
        var engineSetProgress_1 = null;
        // 检查 cc.ProgressBar.prototype 上是否已经存在 getter 或 setter  
        var descriptor = Object.getOwnPropertyDescriptor(cc.ProgressBar.prototype, 'progress');
        if (descriptor && typeof descriptor.get === 'function') {
            engineGetProgress = descriptor.get;
        }
        if (descriptor && typeof descriptor.set === 'function') {
            engineSetProgress_1 = descriptor.set;
        }
        // 定义新的 getter 和 setter  
        var newGetProgress = function () {
            return this._progressV;
        };
        var newSetProgress = function (value) {
            var minValue = 0.001;
            if (typeof value === 'number' && value >= 0 && value <= 1) {
                this._progressV = Math.max(minValue, value);
            }
            else {
                this._progressV = minValue;
                console.error('ProgressBar hack：Invalid value:', value);
            }
            // 调用原始的 setter（如果存在）或直接设置值  
            engineSetProgress_1 && engineSetProgress_1.call(this, value);
        };
        // 使用 Object.defineProperty 来覆盖原有的 getter 和 setter  
        Object.defineProperty(cc.ProgressBar.prototype, 'progress', {
            get: newGetProgress,
            set: newSetProgress,
            enumerable: true,
            configurable: true // 保持可配置，以便将来可以移除或修改  
        });
    }
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2hhY2svUHJvZ3Jlc3NCYXJIYWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSSxDQUFDLFNBQVMsRUFBRTtJQUNaLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFO1FBQ3RELEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLHlCQUF5QixDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRzNELHVDQUF1QztRQUN2QyxJQUFJLGlCQUFpQixHQUFpQixJQUFJLENBQUM7UUFDM0MsSUFBSSxtQkFBaUIsR0FBNEIsSUFBSSxDQUFDO1FBRXRELHdEQUF3RDtRQUN4RCxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDekYsSUFBSSxVQUFVLElBQUksT0FBTyxVQUFVLENBQUMsR0FBRyxLQUFLLFVBQVUsRUFBRTtZQUNwRCxpQkFBaUIsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxVQUFVLElBQUksT0FBTyxVQUFVLENBQUMsR0FBRyxLQUFLLFVBQVUsRUFBRTtZQUNwRCxtQkFBaUIsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDO1NBQ3RDO1FBRUQseUJBQXlCO1FBQ3pCLElBQU0sY0FBYyxHQUFHO1lBQ25CLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDLENBQUM7UUFFRixJQUFNLGNBQWMsR0FBRyxVQUFVLEtBQWE7WUFDMUMsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtnQkFDdkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUMvQztpQkFBTTtnQkFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztnQkFDM0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUMzRDtZQUNELDZCQUE2QjtZQUM3QixtQkFBaUIsSUFBSSxtQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQztRQUVGLG9EQUFvRDtRQUNwRCxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRTtZQUN4RCxHQUFHLEVBQUUsY0FBYztZQUNuQixHQUFHLEVBQUUsY0FBYztZQUNuQixVQUFVLEVBQUUsSUFBSTtZQUNoQixZQUFZLEVBQUUsSUFBSSxDQUFDLHNCQUFzQjtTQUM1QyxDQUFDLENBQUM7S0FDTjtDQUNKIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKCFDQ19FRElUT1IpIHtcbiAgICBpZiAoIWNjLlByb2dyZXNzQmFyLnByb3RvdHlwZVtcIl9fJENDUHJvZ3Jlc3NCYXJIYWNrJF9fXCJdKSB7XG4gICAgICAgIGNjLlByb2dyZXNzQmFyLnByb3RvdHlwZVtcIl9fJENDUHJvZ3Jlc3NCYXJIYWNrJF9fXCJdID0gdHJ1ZTtcblxuXG4gICAgICAgIC8vIOWIm+W7uuS4gOS4qumXreWMheadpeS/neWtmOWOn+Wni+eahCBnZXR0ZXIg5ZKMIHNldHRlcu+8iOWmguaenOWtmOWcqO+8iSAgXG4gICAgICAgIGxldCBlbmdpbmVHZXRQcm9ncmVzczogKCkgPT4gbnVtYmVyID0gbnVsbDtcbiAgICAgICAgbGV0IGVuZ2luZVNldFByb2dyZXNzOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZCA9IG51bGw7XG5cbiAgICAgICAgLy8g5qOA5p+lIGNjLlByb2dyZXNzQmFyLnByb3RvdHlwZSDkuIrmmK/lkKblt7Lnu4/lrZjlnKggZ2V0dGVyIOaIliBzZXR0ZXIgIFxuICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjYy5Qcm9ncmVzc0Jhci5wcm90b3R5cGUsICdwcm9ncmVzcycpO1xuICAgICAgICBpZiAoZGVzY3JpcHRvciAmJiB0eXBlb2YgZGVzY3JpcHRvci5nZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGVuZ2luZUdldFByb2dyZXNzID0gZGVzY3JpcHRvci5nZXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlc2NyaXB0b3IgJiYgdHlwZW9mIGRlc2NyaXB0b3Iuc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBlbmdpbmVTZXRQcm9ncmVzcyA9IGRlc2NyaXB0b3Iuc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5a6a5LmJ5paw55qEIGdldHRlciDlkowgc2V0dGVyICBcbiAgICAgICAgY29uc3QgbmV3R2V0UHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3Jlc3NWO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG5ld1NldFByb2dyZXNzID0gZnVuY3Rpb24gKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pblZhbHVlID0gMC4wMDE7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9ncmVzc1YgPSBNYXRoLm1heChtaW5WYWx1ZSwgdmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9ncmVzc1YgPSBtaW5WYWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdQcm9ncmVzc0JhciBoYWNr77yaSW52YWxpZCB2YWx1ZTonLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDosIPnlKjljp/lp4vnmoQgc2V0dGVy77yI5aaC5p6c5a2Y5Zyo77yJ5oiW55u05o6l6K6+572u5YC8ICBcbiAgICAgICAgICAgIGVuZ2luZVNldFByb2dyZXNzICYmIGVuZ2luZVNldFByb2dyZXNzLmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIOS9v+eUqCBPYmplY3QuZGVmaW5lUHJvcGVydHkg5p2l6KaG55uW5Y6f5pyJ55qEIGdldHRlciDlkowgc2V0dGVyICBcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNjLlByb2dyZXNzQmFyLnByb3RvdHlwZSwgJ3Byb2dyZXNzJywge1xuICAgICAgICAgICAgZ2V0OiBuZXdHZXRQcm9ncmVzcyxcbiAgICAgICAgICAgIHNldDogbmV3U2V0UHJvZ3Jlc3MsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLCAvLyDmoLnmja7pnIDopoHorr7nva7mmK/lkKblj6/mnprkuL4gIFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlIC8vIOS/neaMgeWPr+mFjee9ru+8jOS7peS+v+WwhuadpeWPr+S7peenu+mZpOaIluS/ruaUuSAgXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZGVjbGFyZSBtb2R1bGUgY2Mge1xuICAgIGludGVyZmFjZSBQcm9ncmVzc0JhciB7XG4gICAgICAgIF9wcm9ncmVzc1Y6IG51bWJlcjtcbiAgICB9XG59XG5cbmV4cG9ydCB7IH07Il19