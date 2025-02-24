"use strict";
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