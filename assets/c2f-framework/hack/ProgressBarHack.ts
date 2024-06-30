if (!CC_EDITOR) {
    if (!cc.ProgressBar.prototype["__$CCProgressBarHack$__"]) {
        cc.ProgressBar.prototype["__$CCProgressBarHack$__"] = true;


        // 创建一个闭包来保存原始的 getter 和 setter（如果存在）  
        let engineGetProgress: () => number = null;
        let engineSetProgress: (value: number) => void = null;

        // 检查 cc.ProgressBar.prototype 上是否已经存在 getter 或 setter  
        const descriptor = Object.getOwnPropertyDescriptor(cc.ProgressBar.prototype, 'progress');
        if (descriptor && typeof descriptor.get === 'function') {
            engineGetProgress = descriptor.get;
        }
        if (descriptor && typeof descriptor.set === 'function') {
            engineSetProgress = descriptor.set;
        }

        // 定义新的 getter 和 setter  
        const newGetProgress = function () {
            return this._progressV;
        };

        const newSetProgress = function (value: number) {
            const minValue = 0.001;
            if (typeof value === 'number' && value >= 0 && value <= 1) {
                this._progressV = Math.max(minValue, value);
            } else {
                this._progressV = minValue;
                console.error('ProgressBar hack：Invalid value:', value);
            }
            // 调用原始的 setter（如果存在）或直接设置值  
            engineSetProgress && engineSetProgress.call(this, value);
        };

        // 使用 Object.defineProperty 来覆盖原有的 getter 和 setter  
        Object.defineProperty(cc.ProgressBar.prototype, 'progress', {
            get: newGetProgress,
            set: newSetProgress,
            enumerable: true, // 根据需要设置是否可枚举  
            configurable: true // 保持可配置，以便将来可以移除或修改  
        });
    }
}

declare module cc {
    interface ProgressBar {
        _progressV: number;
    }
}

export { };