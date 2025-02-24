
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/core/audio/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '82705hL32lI9JrRJgOgjr2O', 'AudioManager');
// c2f-framework/core/audio/AudioManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SfxType = void 0;
var C2FTween_1 = require("../timer/C2FTween");
/**
 * 音效类型
 */
var SfxType;
(function (SfxType) {
    SfxType[SfxType["NORMAL"] = 0] = "NORMAL";
    SfxType[SfxType["UI"] = 1] = "UI";
})(SfxType = exports.SfxType || (exports.SfxType = {}));
var AudioMessage;
(function (AudioMessage) {
    /** 游戏从后台进入 */
    AudioMessage["Audio"] = "Audio.Config";
})(AudioMessage || (AudioMessage = {}));
var AudioConfig = /** @class */ (function () {
    function AudioConfig() {
    }
    AudioConfig.saveCfg = function () {
        var info = {
            bv: this.bgmVolume,
            sv: this.sfxVolume,
            bof: this.bgmOff,
            sof: this.sfxOff
        };
        c2f.storage.setPlainItem(AudioMessage.Audio, JSON.stringify(info));
    };
    AudioConfig.loadCfg = function () {
        var info = null;
        try {
            info = JSON.parse(c2f.storage.getPlainItem(AudioMessage.Audio, ''));
        }
        catch (error) {
        }
        if (info) {
            this.bgmVolume = info.bv;
            this.sfxVolume = info.sv;
            this.bgmOff = info.bof;
            this.sfxOff = info.sof;
        }
    };
    AudioConfig.bgmVolume = 1;
    AudioConfig.sfxVolume = 1;
    AudioConfig.bgmOff = false;
    AudioConfig.sfxOff = false;
    return AudioConfig;
}());
/**
 * 音频管理类
 */
var AudioManager = /** @class */ (function () {
    function AudioManager() {
        /** 背景列表 */
        this.bgmList = [];
        /** 背景音乐延时timer */
        this.bgmDelayTimer = null;
        this._bgmPause = false;
        this._sfxPause = false;
        this._bgmMap = new Map();
        this._normalSfxMap = new Map();
        this._uiSfxMap = new Map();
        this.bgmList = [];
        AudioConfig.loadCfg();
    }
    Object.defineProperty(AudioManager.prototype, "bgmVolume", {
        /** 全局bgm音量 */
        get: function () { return AudioConfig.bgmVolume; },
        set: function (volume) {
            if (AudioConfig.bgmVolume === volume) {
                return;
            }
            AudioConfig.bgmVolume = cc.misc.clampf(volume, 0, 1);
            this._bgmMap.forEach(function (audioData, clip) {
                cc.audioEngine.setVolume(audioData.id, AudioConfig.bgmVolume * audioData.volume);
            });
            this.bgmOff = volume < 0.01;
            AudioConfig.saveCfg();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AudioManager.prototype, "sfxVolume", {
        /** 全局sfx音量 */
        get: function () { return AudioConfig.sfxVolume; },
        set: function (volume) {
            if (AudioConfig.sfxVolume === volume) {
                return;
            }
            AudioConfig.sfxVolume = cc.misc.clampf(volume, 0, 1);
            this._normalSfxMap.forEach(function (data, clip) {
                data.audioList.forEach(function (audioData) {
                    cc.audioEngine.setVolume(audioData.id, AudioConfig.sfxVolume * audioData.volume);
                });
            });
            this._uiSfxMap.forEach(function (data, clip) {
                data.audioList.forEach(function (audioData) {
                    cc.audioEngine.setVolume(audioData.id, AudioConfig.sfxVolume * audioData.volume);
                });
            });
            this.sfxOff = volume < 0.01;
            AudioConfig.saveCfg();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AudioManager.prototype, "bgmOff", {
        /** bgm是否关闭 */
        get: function () { return AudioConfig.bgmOff; },
        set: function (isOff) {
            var _this = this;
            if (AudioConfig.bgmOff === isOff) {
                return;
            }
            AudioConfig.bgmOff = isOff;
            if (AudioConfig.bgmOff) {
                this._bgmMap.forEach(function (audioData, clip) {
                    _this.stop(audioData);
                });
                this._bgmMap.clear();
            }
            else {
                this.playRecentBgm();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AudioManager.prototype, "sfxOff", {
        /** sfx是否关闭 */
        get: function () { return AudioConfig.sfxOff; },
        set: function (isOff) {
            var _this = this;
            if (AudioConfig.sfxOff === isOff) {
                return;
            }
            AudioConfig.sfxOff = isOff;
            if (AudioConfig.sfxOff) {
                this._normalSfxMap.forEach(function (data, clip) {
                    data.audioList.forEach(function (audioData) {
                        _this.stop(audioData);
                    });
                    data.audioList.length = 0;
                });
                this._uiSfxMap.forEach(function (data, clip) {
                    data.audioList.forEach(function (audioData) {
                        _this.stop(audioData);
                    });
                    data.audioList.length = 0;
                });
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AudioManager.prototype, "bgmPause", {
        /** bgm是否暂停 */
        get: function () { return this._bgmPause; },
        set: function (isPause) {
            var _this = this;
            if (this.bgmOff || this._bgmPause === isPause) {
                return;
            }
            this._bgmPause = isPause;
            this._bgmMap.forEach(function (audioData, clip) {
                var _a, _b;
                if (_this._bgmPause) {
                    (_a = audioData.tween) === null || _a === void 0 ? void 0 : _a.pause();
                    cc.audioEngine.pause(audioData.id);
                }
                else {
                    (_b = audioData.tween) === null || _b === void 0 ? void 0 : _b.resume();
                    cc.audioEngine.resume(audioData.id);
                }
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AudioManager.prototype, "sfxPause", {
        /** sfx是否暂停，暂停时不暂停ui音效 */
        get: function () { return this._sfxPause; },
        set: function (isPause) {
            if (this.sfxOff || this._sfxPause === isPause) {
                return;
            }
            this._sfxPause = isPause;
            if (this._sfxPause) {
                this._normalSfxMap.forEach(function (data, clip) {
                    data.audioList.forEach(function (audioData) {
                        var _a;
                        (_a = audioData.tween) === null || _a === void 0 ? void 0 : _a.pause();
                        cc.audioEngine.pause(audioData.id);
                    });
                });
            }
            else {
                this._normalSfxMap.forEach(function (data, clip) {
                    data.audioList.forEach(function (audioData) {
                        var _a;
                        (_a = audioData.tween) === null || _a === void 0 ? void 0 : _a.resume();
                        cc.audioEngine.resume(audioData.id);
                    });
                });
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 音量渐变
     * @param data
     * @param duration 音量渐变时长 单位s
     * @param from 音量初始值
     * @param to 音量目标值
     * @param call 渐变结束的回调
     */
    AudioManager.prototype.volumeFade = function (data, duration, from, to, call) {
        var _this = this;
        var _a;
        (_a = data.tween) === null || _a === void 0 ? void 0 : _a.stop();
        data.volume = from;
        cc.audioEngine.setVolume(data.id, data.volume * this.bgmVolume);
        data.tween = new C2FTween_1.C2FTween(data)
            .to({ volume: to }, duration * 1000)
            .onUpdate(function () {
            cc.audioEngine.setVolume(data.id, data.volume * _this.bgmVolume);
        })
            .onComplete(function () {
            data.tween = null;
            if (call) {
                call();
            }
        })
            .start();
    };
    /**
     * 停止音频
     * @param audioData
     */
    AudioManager.prototype.stop = function (audioData) {
        if (audioData.tween) {
            audioData.tween.stop();
            audioData.tween = null;
        }
        cc.audioEngine.stop(audioData.id);
    };
    /**
     * 播放音频并返回AudioData
     */
    AudioManager.prototype.play = function (args, volume, audioData) {
        if (audioData === void 0) { audioData = null; }
        var data = args instanceof cc.AudioClip ? { clip: args } : args;
        if (!data.hasOwnProperty("loop")) {
            data.loop = false;
        }
        if (!data.hasOwnProperty("fadeDuration")) {
            data.fadeDuration = 0;
        }
        if (!data.hasOwnProperty("finishCall")) {
            data.finishCall = null;
        }
        if (audioData) {
            audioData.id = cc.audioEngine.play(data.clip, data.loop, volume);
            audioData.volume = 1;
            if (audioData.tween) {
                audioData.tween.stop();
                audioData.tween = null;
            }
        }
        else {
            audioData = {
                id: cc.audioEngine.play(data.clip, data.loop, volume),
                volume: 1,
                tween: null
            };
        }
        if (data.finishCall) {
            cc.audioEngine.setFinishCallback(audioData.id, data.finishCall);
        }
        if (data.fadeDuration > 0) {
            this.volumeFade(audioData, data.fadeDuration, 0, 1);
        }
        return audioData;
    };
    /**
     * 播放bgmClip
     */
    AudioManager.prototype.playBgm = function (args) {
        var clip = args instanceof cc.AudioClip ? args : args.clip;
        if (this.bgmOff || !clip) {
            return;
        }
        this.stopBgm();
        var audioData = this._bgmMap.get(clip);
        if (audioData === undefined) {
            audioData = this.play(args, this.bgmVolume);
            this._bgmMap.set(clip, audioData);
        }
        else {
            this.stop(audioData);
            this.play(args, this.bgmVolume, audioData);
        }
    };
    /** 添加背景音乐 */
    AudioManager.prototype.addMusicUrlToList = function (url) {
        var existIdx = this.bgmList.indexOf(url);
        if (existIdx < 0) {
            this.bgmList.push(url);
        }
        else {
            this.bgmList = this.bgmList.slice(0, existIdx + 1);
        }
    };
    /**
     * 播放bgmURL
     */
    AudioManager.prototype.playBgmURL = function (url, callback) {
        var _this = this;
        if (this.bgmDelayTimer) {
            clearTimeout(this.bgmDelayTimer);
        }
        this.bgmDelayTimer = setTimeout(function () {
            _this.bgmDelayTimer = null;
            _this.addMusicUrlToList(url);
            if (_this.bgmOff) {
                return;
            }
            c2f.res.load(url, cc.AudioClip, function (err, data) {
                if (err) {
                    cc.error(err);
                }
                _this.playBgm({ clip: data, loop: true, finishCall: callback });
            });
        }, 300);
    };
    /**
     * 结束当前背景音乐·播放前一首
     */
    AudioManager.prototype.endCurMusic = function () {
        var count = this.bgmList.length;
        if (count <= 0) {
            return;
        }
        this.bgmList.splice(count - 1, 1);
        this.playRecentBgm();
    };
    AudioManager.prototype.playRecentBgm = function () {
        var count = this.bgmList.length;
        if (count > 0) {
            var lastUrl = this.bgmList[count - 1];
            this.bgmList.splice(count - 1, 1);
            this.playBgmURL(lastUrl);
        }
    };
    /**
     * 播放sfx
     */
    AudioManager.prototype.playSfx = function (args, type) {
        if (type === void 0) { type = SfxType.NORMAL; }
        var clip = args instanceof cc.AudioClip ? args : args.clip;
        if (this.sfxOff || !clip) {
            return;
        }
        var sfxData = type === SfxType.NORMAL ? this._normalSfxMap.get(clip) : this._uiSfxMap.get(clip);
        var audioData = null;
        if (sfxData === undefined) {
            sfxData = this.setSfxData(clip, type);
            audioData = this.play(args, this.sfxVolume);
            sfxData.audioList.push(audioData);
        }
        else {
            // 剔除不处于播放状态的音频
            while (sfxData.audioList.length > 0 && cc.audioEngine.getState(sfxData.audioList[0].id) !== cc.audioEngine.AudioState.PLAYING) {
                this.stop(sfxData.audioList.shift());
            }
            // 已达到最大数量则剔除最先(第一个)缓存的音频
            while (sfxData.overStop && sfxData.audioList.length >= sfxData.maxNum) {
                this.stop(sfxData.audioList.shift());
            }
            // 缓存新的音频
            if (sfxData.audioList.length < sfxData.maxNum) {
                audioData = this.play(args, this.sfxVolume);
                sfxData.audioList.push(audioData);
            }
        }
    };
    /**
     * 播放sfxURL
     */
    AudioManager.prototype.playSfxURL = function (url, callback) {
        var _this = this;
        if (this.sfxOff) {
            return;
        }
        c2f.res.load(url, cc.AudioClip, function (err, data) {
            if (err) {
                cc.error(err);
            }
            _this.playSfx({ clip: data, loop: false, finishCall: callback });
        });
    };
    /**
     * 设置音效数据（用于限制某些短时间内同时大量播放的音效）
     * @param clip
     * @param type 音效类型
     * @param maxNum 此音效最大同时播放的数量
     * @param overStop 超过最大数量时是否stop未播完的音效并缓存新的音效
     */
    AudioManager.prototype.setSfxData = function (clip, type, maxNum, overStop) {
        if (type === void 0) { type = SfxType.NORMAL; }
        if (maxNum === void 0) { maxNum = 8; }
        if (overStop === void 0) { overStop = false; }
        if (!clip) {
            return;
        }
        maxNum = Math.max(maxNum, 1);
        var map = type === SfxType.NORMAL ? this._normalSfxMap : this._uiSfxMap;
        var sfxData = map.get(clip);
        if (sfxData === undefined) {
            sfxData = {
                audioList: [],
                maxNum: maxNum,
                overStop: overStop
            };
            map.set(clip, sfxData);
        }
        else {
            sfxData.maxNum = maxNum;
            sfxData.overStop = overStop;
        }
        return sfxData;
    };
    /**
     * 停止bgm
     * @param clip 需停止的音频，clip返回值为false则停止所有
     * @param fadeDuration 音量渐变时长 单位s
     */
    AudioManager.prototype.stopBgm = function (clip, fadeDuration) {
        var _this = this;
        if (clip === void 0) { clip = null; }
        if (fadeDuration === void 0) { fadeDuration = 0; }
        if (this.bgmOff) {
            return;
        }
        if (clip) {
            var audioData_1 = this._bgmMap.get(clip);
            if (audioData_1 === undefined) {
                return;
            }
            if (fadeDuration <= 0) {
                this.stop(audioData_1);
                this._bgmMap.delete(clip);
            }
            else {
                this.volumeFade(audioData_1, fadeDuration, 1, 0, function () {
                    _this.stop(audioData_1);
                    _this._bgmMap.delete(clip);
                });
            }
        }
        else {
            if (fadeDuration <= 0) {
                this._bgmMap.forEach(function (audioData, clip) {
                    _this.stop(audioData);
                });
                this._bgmMap.clear();
            }
            else {
                this._bgmMap.forEach(function (audioData, clip) {
                    _this.volumeFade(audioData, fadeDuration, 1, 0, function () {
                        _this.stop(audioData);
                        _this._bgmMap.delete(clip);
                    });
                });
            }
        }
    };
    /**
     * 停止sfx
     * @param clip 需停止的音频，clip返回值为false则停止所有
     * @param type 音效类型
     */
    AudioManager.prototype.stopSfx = function (clip, type) {
        var _this = this;
        if (clip === void 0) { clip = null; }
        if (type === void 0) { type = SfxType.NORMAL; }
        if (this.sfxOff) {
            return;
        }
        if (clip) {
            var data = type === SfxType.NORMAL ? this._normalSfxMap.get(clip) : this._uiSfxMap.get(clip);
            if (data === undefined || data.audioList.length <= 0) {
                return;
            }
            data.audioList.forEach(function (audioData) {
                _this.stop(audioData);
            });
            data.audioList.length = 0;
        }
        else {
            this._normalSfxMap.forEach(function (data, clip) {
                data.audioList.forEach(function (audioData) {
                    _this.stop(audioData);
                });
                data.audioList.length = 0;
            });
            this._uiSfxMap.forEach(function (data, clip) {
                data.audioList.forEach(function (audioData) {
                    _this.stop(audioData);
                });
                data.audioList.length = 0;
            });
        }
    };
    /**
     * 停止所有音频
     */
    AudioManager.prototype.stopAll = function () {
        this.stopBgm();
        this.stopSfx();
    };
    /**
     * 暂停所有音频
     */
    AudioManager.prototype.pauseAll = function () {
        this.bgmPause = true;
        this.sfxPause = true;
    };
    /**
     * 恢复所有音频
     */
    AudioManager.prototype.resumeAll = function () {
        this.bgmPause = false;
        this.sfxPause = false;
    };
    /**
     * 停止所有音频，清除所有音频缓存
     */
    AudioManager.prototype.uncacheAll = function () {
        this.stopAll();
        this._bgmMap.clear();
        this._normalSfxMap.clear();
        this._uiSfxMap.clear();
        cc.audioEngine.uncacheAll();
    };
    AudioManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new AudioManager();
        }
        return this._instance;
    };
    /** 静态成员 */
    AudioManager._instance = null;
    return AudioManager;
}());
c2f.audio = AudioManager.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvcmUvYXVkaW8vQXVkaW9NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDhDQUE2QztBQUU3Qzs7R0FFRztBQUNILElBQVksT0FHWDtBQUhELFdBQVksT0FBTztJQUNmLHlDQUFNLENBQUE7SUFDTixpQ0FBRSxDQUFBO0FBQ04sQ0FBQyxFQUhXLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQUdsQjtBQWdCRCxJQUFLLFlBR0o7QUFIRCxXQUFLLFlBQVk7SUFDYixjQUFjO0lBQ2Qsc0NBQXNCLENBQUE7QUFDMUIsQ0FBQyxFQUhJLFlBQVksS0FBWixZQUFZLFFBR2hCO0FBMEJEO0lBQUE7SUE2QkEsQ0FBQztJQXZCVSxtQkFBTyxHQUFkO1FBQ0ksSUFBSSxJQUFJLEdBQVE7WUFDWixFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDbEIsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ2xCLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNoQixHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDbkIsQ0FBQTtRQUNELEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFTSxtQkFBTyxHQUFkO1FBQ0ksSUFBSSxJQUFJLEdBQVEsSUFBSSxDQUFDO1FBQ3JCLElBQUk7WUFDQSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdkU7UUFBQyxPQUFPLEtBQUssRUFBRTtTQUNmO1FBQ0QsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7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R0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksZ0NBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxpQ0FBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUlhLHdCQUFXLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFQRCxXQUFXO0lBQ0ksc0JBQVMsR0FBaUIsSUFBSSxDQUFBO0lBT2pELG1CQUFDO0NBamZELEFBaWZDLElBQUE7QUFRRCxHQUFHLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEMyRkNvbnN0IH0gZnJvbSBcIi4uLy4uL2RlZmluZS9DMkZDb25zdFwiO1xuaW1wb3J0IHsgQzJGVHdlZW4gfSBmcm9tIFwiLi4vdGltZXIvQzJGVHdlZW5cIjtcblxuLyoqXG4gKiDpn7PmlYjnsbvlnotcbiAqL1xuZXhwb3J0IGVudW0gU2Z4VHlwZSB7XG4gICAgTk9STUFMLFxuICAgIFVJXG59XG5cbi8qKlxuICog6Z+z6aKR5pKt5pS+5Y+C5pWwXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXVkaW9QbGF5QXJncyB7XG4gICAgLyoqIEF1ZGlvQ2xpcCAqL1xuICAgIGNsaXA6IGNjLkF1ZGlvQ2xpcDtcbiAgICAvKiog5piv5ZCm5b6q546v77yM6buY6K6kZmFsc2UgKi9cbiAgICBsb29wPzogYm9vbGVhbjtcbiAgICAvKiog6Z+z6YeP5riQ5Y+Y5pe26ZW/77yM5Y2V5L2Nc+OAgum7mOiupDAgKi9cbiAgICBmYWRlRHVyYXRpb24/OiBudW1iZXI7XG4gICAgLyoqIOaSreaUvue7k+adn+eahOWbnuiwgyAqL1xuICAgIGZpbmlzaENhbGw/OiBGdW5jdGlvbjtcbn1cblxuZW51bSBBdWRpb01lc3NhZ2Uge1xuICAgIC8qKiDmuLjmiI/ku47lkI7lj7Dov5vlhaUgKi9cbiAgICBBdWRpbyA9IFwiQXVkaW8uQ29uZmlnXCIsXG59XG5cbi8qKlxuICogQXVkaW/nvJPlrZjmlbDmja5cbiAqL1xuaW50ZXJmYWNlIEF1ZGlvRGF0YSB7XG4gICAgLyoqIGF1ZGlvSUQgKi9cbiAgICBpZDogbnVtYmVyO1xuICAgIC8qKiDnlKjkuo7ljZXni6zmjqfliLbnmoTpn7Pph48gKi9cbiAgICB2b2x1bWU6IG51bWJlcjtcbiAgICAvKiog6Z+z6YeP5riQ5Y+YdHdlZW7lr7nosaEgKi9cbiAgICB0d2VlbjogQzJGVHdlZW48QXVkaW9EYXRhPjtcbn1cblxuLyoqXG4gKiDljZXkuKpBdWRpb0NsaXDlr7nlupTnmoRzZngo6Z+z5pWIKee8k+WtmOaVsOaNrlxuICovXG5pbnRlcmZhY2UgU2Z4RGF0YSB7XG4gICAgLyoqIOW3sue8k+WtmOeahOmfs+aViOaVsOaNruaVsOe7hCAqL1xuICAgIGF1ZGlvTGlzdDogQXVkaW9EYXRhW107XG4gICAgLyoqIOatpOmfs+aViOacgOWkp+WQjOaXtuaSreaUvueahOaVsOmHjyAqL1xuICAgIG1heE51bTogbnVtYmVyO1xuICAgIC8qKiDotoXov4fmnIDlpKfmlbDph4/ml7bmmK/lkKZzdG9w5pyq5pKt5a6M55qE6Z+z5pWI5bm257yT5a2Y5paw55qE6Z+z5pWIICovXG4gICAgb3ZlclN0b3A6IGJvb2xlYW47XG59XG5cbmNsYXNzIEF1ZGlvQ29uZmlnIHtcbiAgICBzdGF0aWMgYmdtVm9sdW1lOiBudW1iZXIgPSAxO1xuICAgIHN0YXRpYyBzZnhWb2x1bWU6IG51bWJlciA9IDE7XG4gICAgc3RhdGljIGJnbU9mZjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHN0YXRpYyBzZnhPZmY6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHN0YXRpYyBzYXZlQ2ZnKCkge1xuICAgICAgICBsZXQgaW5mbzogYW55ID0ge1xuICAgICAgICAgICAgYnY6IHRoaXMuYmdtVm9sdW1lLFxuICAgICAgICAgICAgc3Y6IHRoaXMuc2Z4Vm9sdW1lLFxuICAgICAgICAgICAgYm9mOiB0aGlzLmJnbU9mZixcbiAgICAgICAgICAgIHNvZjogdGhpcy5zZnhPZmZcbiAgICAgICAgfVxuICAgICAgICBjMmYuc3RvcmFnZS5zZXRQbGFpbkl0ZW0oQXVkaW9NZXNzYWdlLkF1ZGlvLCBKU09OLnN0cmluZ2lmeShpbmZvKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRDZmcoKSB7XG4gICAgICAgIGxldCBpbmZvOiBhbnkgPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaW5mbyA9IEpTT04ucGFyc2UoYzJmLnN0b3JhZ2UuZ2V0UGxhaW5JdGVtKEF1ZGlvTWVzc2FnZS5BdWRpbywgJycpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgICAgdGhpcy5iZ21Wb2x1bWUgPSBpbmZvLmJ2O1xuICAgICAgICAgICAgdGhpcy5zZnhWb2x1bWUgPSBpbmZvLnN2O1xuICAgICAgICAgICAgdGhpcy5iZ21PZmYgPSBpbmZvLmJvZjtcbiAgICAgICAgICAgIHRoaXMuc2Z4T2ZmID0gaW5mby5zb2Y7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICog6Z+z6aKR566h55CG57G7XG4gKi9cbmNsYXNzIEF1ZGlvTWFuYWdlciB7XG4gICAgLyoqIOe8k+WtmOeahGJnbeaVsOaNriAqL1xuICAgIHByaXZhdGUgX2JnbU1hcDogTWFwPGNjLkF1ZGlvQ2xpcCwgQXVkaW9EYXRhPjtcbiAgICAvKiog57yT5a2Y55qE5pmu6YCa6Z+z5pWI5pWw5o2uICovXG4gICAgcHJpdmF0ZSBfbm9ybWFsU2Z4TWFwOiBNYXA8Y2MuQXVkaW9DbGlwLCBTZnhEYXRhPjtcbiAgICAvKiog57yT5a2Y55qEdWnpn7PmlYjmlbDmja4gKi9cbiAgICBwcml2YXRlIF91aVNmeE1hcDogTWFwPGNjLkF1ZGlvQ2xpcCwgU2Z4RGF0YT47XG4gICAgLyoqIOiDjOaZr+WIl+ihqCAqL1xuICAgIHByaXZhdGUgYmdtTGlzdDogc3RyaW5nW10gPSBbXTtcbiAgICAvKiog6IOM5pmv6Z+z5LmQ5bu25pe2dGltZXIgKi9cbiAgICBwcml2YXRlIGJnbURlbGF5VGltZXI6IGFueSA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fYmdtTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9ub3JtYWxTZnhNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX3VpU2Z4TWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmJnbUxpc3QgPSBbXTtcblxuICAgICAgICBBdWRpb0NvbmZpZy5sb2FkQ2ZnKCk7XG4gICAgfVxuXG5cbiAgICAvKiog5YWo5bGAYmdt6Z+z6YePICovXG4gICAgcHVibGljIGdldCBiZ21Wb2x1bWUoKTogbnVtYmVyIHsgcmV0dXJuIEF1ZGlvQ29uZmlnLmJnbVZvbHVtZTsgfVxuICAgIHB1YmxpYyBzZXQgYmdtVm9sdW1lKHZvbHVtZTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChBdWRpb0NvbmZpZy5iZ21Wb2x1bWUgPT09IHZvbHVtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEF1ZGlvQ29uZmlnLmJnbVZvbHVtZSA9IGNjLm1pc2MuY2xhbXBmKHZvbHVtZSwgMCwgMSk7XG4gICAgICAgIHRoaXMuX2JnbU1hcC5mb3JFYWNoKChhdWRpb0RhdGE6IEF1ZGlvRGF0YSwgY2xpcDogY2MuQXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoYXVkaW9EYXRhLmlkLCBBdWRpb0NvbmZpZy5iZ21Wb2x1bWUgKiBhdWRpb0RhdGEudm9sdW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYmdtT2ZmID0gdm9sdW1lIDwgMC4wMTtcbiAgICAgICAgQXVkaW9Db25maWcuc2F2ZUNmZygpO1xuICAgIH1cblxuICAgIC8qKiDlhajlsYBzZnjpn7Pph48gKi9cbiAgICBwdWJsaWMgZ2V0IHNmeFZvbHVtZSgpOiBudW1iZXIgeyByZXR1cm4gQXVkaW9Db25maWcuc2Z4Vm9sdW1lOyB9XG4gICAgcHVibGljIHNldCBzZnhWb2x1bWUodm9sdW1lOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKEF1ZGlvQ29uZmlnLnNmeFZvbHVtZSA9PT0gdm9sdW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQXVkaW9Db25maWcuc2Z4Vm9sdW1lID0gY2MubWlzYy5jbGFtcGYodm9sdW1lLCAwLCAxKTtcbiAgICAgICAgdGhpcy5fbm9ybWFsU2Z4TWFwLmZvckVhY2goKGRhdGE6IFNmeERhdGEsIGNsaXA6IGNjLkF1ZGlvQ2xpcCkgPT4ge1xuICAgICAgICAgICAgZGF0YS5hdWRpb0xpc3QuZm9yRWFjaCgoYXVkaW9EYXRhOiBBdWRpb0RhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoYXVkaW9EYXRhLmlkLCBBdWRpb0NvbmZpZy5zZnhWb2x1bWUgKiBhdWRpb0RhdGEudm9sdW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fdWlTZnhNYXAuZm9yRWFjaCgoZGF0YTogU2Z4RGF0YSwgY2xpcDogY2MuQXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgICBkYXRhLmF1ZGlvTGlzdC5mb3JFYWNoKChhdWRpb0RhdGE6IEF1ZGlvRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShhdWRpb0RhdGEuaWQsIEF1ZGlvQ29uZmlnLnNmeFZvbHVtZSAqIGF1ZGlvRGF0YS52b2x1bWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNmeE9mZiA9IHZvbHVtZSA8IDAuMDE7XG4gICAgICAgIEF1ZGlvQ29uZmlnLnNhdmVDZmcoKTtcbiAgICB9XG5cblxuICAgIC8qKiBiZ23mmK/lkKblhbPpl60gKi9cbiAgICBwdWJsaWMgZ2V0IGJnbU9mZigpOiBib29sZWFuIHsgcmV0dXJuIEF1ZGlvQ29uZmlnLmJnbU9mZjsgfVxuICAgIHB1YmxpYyBzZXQgYmdtT2ZmKGlzT2ZmOiBib29sZWFuKSB7XG4gICAgICAgIGlmIChBdWRpb0NvbmZpZy5iZ21PZmYgPT09IGlzT2ZmKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQXVkaW9Db25maWcuYmdtT2ZmID0gaXNPZmY7XG4gICAgICAgIGlmIChBdWRpb0NvbmZpZy5iZ21PZmYpIHtcbiAgICAgICAgICAgIHRoaXMuX2JnbU1hcC5mb3JFYWNoKChhdWRpb0RhdGE6IEF1ZGlvRGF0YSwgY2xpcDogY2MuQXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKGF1ZGlvRGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2JnbU1hcC5jbGVhcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbGF5UmVjZW50QmdtKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogc2Z45piv5ZCm5YWz6ZetICovXG4gICAgcHVibGljIGdldCBzZnhPZmYoKTogYm9vbGVhbiB7IHJldHVybiBBdWRpb0NvbmZpZy5zZnhPZmY7IH1cbiAgICBwdWJsaWMgc2V0IHNmeE9mZihpc09mZjogYm9vbGVhbikge1xuICAgICAgICBpZiAoQXVkaW9Db25maWcuc2Z4T2ZmID09PSBpc09mZikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgQXVkaW9Db25maWcuc2Z4T2ZmID0gaXNPZmY7XG4gICAgICAgIGlmIChBdWRpb0NvbmZpZy5zZnhPZmYpIHtcbiAgICAgICAgICAgIHRoaXMuX25vcm1hbFNmeE1hcC5mb3JFYWNoKChkYXRhOiBTZnhEYXRhLCBjbGlwOiBjYy5BdWRpb0NsaXApID0+IHtcbiAgICAgICAgICAgICAgICBkYXRhLmF1ZGlvTGlzdC5mb3JFYWNoKChhdWRpb0RhdGE6IEF1ZGlvRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3AoYXVkaW9EYXRhKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkYXRhLmF1ZGlvTGlzdC5sZW5ndGggPSAwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl91aVNmeE1hcC5mb3JFYWNoKChkYXRhOiBTZnhEYXRhLCBjbGlwOiBjYy5BdWRpb0NsaXApID0+IHtcbiAgICAgICAgICAgICAgICBkYXRhLmF1ZGlvTGlzdC5mb3JFYWNoKChhdWRpb0RhdGE6IEF1ZGlvRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3AoYXVkaW9EYXRhKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkYXRhLmF1ZGlvTGlzdC5sZW5ndGggPSAwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9iZ21QYXVzZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKiBiZ23mmK/lkKbmmoLlgZwgKi9cbiAgICBwdWJsaWMgZ2V0IGJnbVBhdXNlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fYmdtUGF1c2U7IH1cbiAgICBwdWJsaWMgc2V0IGJnbVBhdXNlKGlzUGF1c2U6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuYmdtT2ZmIHx8IHRoaXMuX2JnbVBhdXNlID09PSBpc1BhdXNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYmdtUGF1c2UgPSBpc1BhdXNlO1xuXG4gICAgICAgIHRoaXMuX2JnbU1hcC5mb3JFYWNoKChhdWRpb0RhdGE6IEF1ZGlvRGF0YSwgY2xpcDogY2MuQXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fYmdtUGF1c2UpIHtcbiAgICAgICAgICAgICAgICBhdWRpb0RhdGEudHdlZW4/LnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2UoYXVkaW9EYXRhLmlkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXVkaW9EYXRhLnR3ZWVuPy5yZXN1bWUoKTtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWUoYXVkaW9EYXRhLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2Z4UGF1c2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKiogc2Z45piv5ZCm5pqC5YGc77yM5pqC5YGc5pe25LiN5pqC5YGcdWnpn7PmlYggKi9cbiAgICBwdWJsaWMgZ2V0IHNmeFBhdXNlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fc2Z4UGF1c2U7IH1cbiAgICBwdWJsaWMgc2V0IHNmeFBhdXNlKGlzUGF1c2U6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuc2Z4T2ZmIHx8IHRoaXMuX3NmeFBhdXNlID09PSBpc1BhdXNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2Z4UGF1c2UgPSBpc1BhdXNlO1xuXG4gICAgICAgIGlmICh0aGlzLl9zZnhQYXVzZSkge1xuICAgICAgICAgICAgdGhpcy5fbm9ybWFsU2Z4TWFwLmZvckVhY2goKGRhdGE6IFNmeERhdGEsIGNsaXA6IGNjLkF1ZGlvQ2xpcCkgPT4ge1xuICAgICAgICAgICAgICAgIGRhdGEuYXVkaW9MaXN0LmZvckVhY2goKGF1ZGlvRGF0YTogQXVkaW9EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvRGF0YS50d2Vlbj8ucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2UoYXVkaW9EYXRhLmlkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbm9ybWFsU2Z4TWFwLmZvckVhY2goKGRhdGE6IFNmeERhdGEsIGNsaXA6IGNjLkF1ZGlvQ2xpcCkgPT4ge1xuICAgICAgICAgICAgICAgIGRhdGEuYXVkaW9MaXN0LmZvckVhY2goKGF1ZGlvRGF0YTogQXVkaW9EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvRGF0YS50d2Vlbj8ucmVzdW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZShhdWRpb0RhdGEuaWQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDpn7Pph4/muJDlj5hcbiAgICAgKiBAcGFyYW0gZGF0YSBcbiAgICAgKiBAcGFyYW0gZHVyYXRpb24g6Z+z6YeP5riQ5Y+Y5pe26ZW/IOWNleS9jXNcbiAgICAgKiBAcGFyYW0gZnJvbSDpn7Pph4/liJ3lp4vlgLxcbiAgICAgKiBAcGFyYW0gdG8g6Z+z6YeP55uu5qCH5YC8XG4gICAgICogQHBhcmFtIGNhbGwg5riQ5Y+Y57uT5p2f55qE5Zue6LCDXG4gICAgICovXG4gICAgcHJpdmF0ZSB2b2x1bWVGYWRlKGRhdGE6IEF1ZGlvRGF0YSwgZHVyYXRpb246IG51bWJlciwgZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyLCBjYWxsPzogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgZGF0YS50d2Vlbj8uc3RvcCgpO1xuICAgICAgICBkYXRhLnZvbHVtZSA9IGZyb207XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShkYXRhLmlkLCBkYXRhLnZvbHVtZSAqIHRoaXMuYmdtVm9sdW1lKTtcbiAgICAgICAgZGF0YS50d2VlbiA9IG5ldyBDMkZUd2VlbihkYXRhKVxuICAgICAgICAgICAgLnRvKHsgdm9sdW1lOiB0byB9LCBkdXJhdGlvbiAqIDEwMDApXG4gICAgICAgICAgICAub25VcGRhdGUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShkYXRhLmlkLCBkYXRhLnZvbHVtZSAqIHRoaXMuYmdtVm9sdW1lKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub25Db21wbGV0ZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGF0YS50d2VlbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlgZzmraLpn7PpopFcbiAgICAgKiBAcGFyYW0gYXVkaW9EYXRhIFxuICAgICAqL1xuICAgIHByaXZhdGUgc3RvcChhdWRpb0RhdGE6IEF1ZGlvRGF0YSk6IHZvaWQge1xuICAgICAgICBpZiAoYXVkaW9EYXRhLnR3ZWVuKSB7XG4gICAgICAgICAgICBhdWRpb0RhdGEudHdlZW4uc3RvcCgpO1xuICAgICAgICAgICAgYXVkaW9EYXRhLnR3ZWVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKGF1ZGlvRGF0YS5pZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pKt5pS+6Z+z6aKR5bm26L+U5ZueQXVkaW9EYXRhXG4gICAgICovXG4gICAgcHJpdmF0ZSBwbGF5KGFyZ3M6IGNjLkF1ZGlvQ2xpcCB8IEF1ZGlvUGxheUFyZ3MsIHZvbHVtZTogbnVtYmVyLCBhdWRpb0RhdGE6IEF1ZGlvRGF0YSA9IG51bGwpOiBBdWRpb0RhdGEge1xuICAgICAgICBsZXQgZGF0YTogQXVkaW9QbGF5QXJncyA9IGFyZ3MgaW5zdGFuY2VvZiBjYy5BdWRpb0NsaXAgPyB7IGNsaXA6IGFyZ3MgfSA6IGFyZ3M7XG4gICAgICAgIGlmICghZGF0YS5oYXNPd25Qcm9wZXJ0eShcImxvb3BcIikpIHtcbiAgICAgICAgICAgIGRhdGEubG9vcCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGF0YS5oYXNPd25Qcm9wZXJ0eShcImZhZGVEdXJhdGlvblwiKSkge1xuICAgICAgICAgICAgZGF0YS5mYWRlRHVyYXRpb24gPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGF0YS5oYXNPd25Qcm9wZXJ0eShcImZpbmlzaENhbGxcIikpIHtcbiAgICAgICAgICAgIGRhdGEuZmluaXNoQ2FsbCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXVkaW9EYXRhKSB7XG4gICAgICAgICAgICBhdWRpb0RhdGEuaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGRhdGEuY2xpcCwgZGF0YS5sb29wLCB2b2x1bWUpO1xuICAgICAgICAgICAgYXVkaW9EYXRhLnZvbHVtZSA9IDE7XG4gICAgICAgICAgICBpZiAoYXVkaW9EYXRhLnR3ZWVuKSB7XG4gICAgICAgICAgICAgICAgYXVkaW9EYXRhLnR3ZWVuLnN0b3AoKTtcbiAgICAgICAgICAgICAgICBhdWRpb0RhdGEudHdlZW4gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXVkaW9EYXRhID0ge1xuICAgICAgICAgICAgICAgIGlkOiBjYy5hdWRpb0VuZ2luZS5wbGF5KGRhdGEuY2xpcCwgZGF0YS5sb29wLCB2b2x1bWUpLFxuICAgICAgICAgICAgICAgIHZvbHVtZTogMSxcbiAgICAgICAgICAgICAgICB0d2VlbjogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLmZpbmlzaENhbGwpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEZpbmlzaENhbGxiYWNrKGF1ZGlvRGF0YS5pZCwgZGF0YS5maW5pc2hDYWxsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5mYWRlRHVyYXRpb24gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnZvbHVtZUZhZGUoYXVkaW9EYXRhLCBkYXRhLmZhZGVEdXJhdGlvbiwgMCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF1ZGlvRGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmkq3mlL5iZ21DbGlwXG4gICAgICovXG4gICAgcHVibGljIHBsYXlCZ20oYXJnczogY2MuQXVkaW9DbGlwIHwgQXVkaW9QbGF5QXJncyk6IHZvaWQge1xuICAgICAgICBsZXQgY2xpcCA9IGFyZ3MgaW5zdGFuY2VvZiBjYy5BdWRpb0NsaXAgPyBhcmdzIDogYXJncy5jbGlwO1xuICAgICAgICBpZiAodGhpcy5iZ21PZmYgfHwgIWNsaXApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0b3BCZ20oKTtcblxuICAgICAgICBsZXQgYXVkaW9EYXRhOiBBdWRpb0RhdGEgPSB0aGlzLl9iZ21NYXAuZ2V0KGNsaXApO1xuICAgICAgICBpZiAoYXVkaW9EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGF1ZGlvRGF0YSA9IHRoaXMucGxheShhcmdzLCB0aGlzLmJnbVZvbHVtZSk7XG4gICAgICAgICAgICB0aGlzLl9iZ21NYXAuc2V0KGNsaXAsIGF1ZGlvRGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoYXVkaW9EYXRhKTtcbiAgICAgICAgICAgIHRoaXMucGxheShhcmdzLCB0aGlzLmJnbVZvbHVtZSwgYXVkaW9EYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDmt7vliqDog4zmma/pn7PkuZAgKi9cbiAgICBwcml2YXRlIGFkZE11c2ljVXJsVG9MaXN0KHVybDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBleGlzdElkeCA9IHRoaXMuYmdtTGlzdC5pbmRleE9mKHVybCk7XG4gICAgICAgIGlmIChleGlzdElkeCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuYmdtTGlzdC5wdXNoKHVybCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJnbUxpc3QgPSB0aGlzLmJnbUxpc3Quc2xpY2UoMCwgZXhpc3RJZHggKyAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaSreaUvmJnbVVSTFxuICAgICAqL1xuICAgIHB1YmxpYyBwbGF5QmdtVVJMKHVybDogc3RyaW5nLCBjYWxsYmFjaz86IEZ1bmN0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmJnbURlbGF5VGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmJnbURlbGF5VGltZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmdtRGVsYXlUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5iZ21EZWxheVRpbWVyID0gbnVsbDtcblxuICAgICAgICAgICAgdGhpcy5hZGRNdXNpY1VybFRvTGlzdCh1cmwpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYmdtT2ZmKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYzJmLnJlcy5sb2FkKHVybCwgY2MuQXVkaW9DbGlwLCAoZXJyOiBFcnJvciB8IG51bGwsIGRhdGE6IGNjLkF1ZGlvQ2xpcCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QmdtKHsgY2xpcDogZGF0YSwgbG9vcDogdHJ1ZSwgZmluaXNoQ2FsbDogY2FsbGJhY2sgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDMwMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog57uT5p2f5b2T5YmN6IOM5pmv6Z+z5LmQwrfmkq3mlL7liY3kuIDpppZcbiAgICAgKi9cbiAgICBwdWJsaWMgZW5kQ3VyTXVzaWMoKSB7XG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMuYmdtTGlzdC5sZW5ndGg7XG4gICAgICAgIGlmIChjb3VudCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iZ21MaXN0LnNwbGljZShjb3VudCAtIDEsIDEpO1xuICAgICAgICB0aGlzLnBsYXlSZWNlbnRCZ20oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYXlSZWNlbnRCZ20oKSB7XG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMuYmdtTGlzdC5sZW5ndGg7XG4gICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICAgIGxldCBsYXN0VXJsID0gdGhpcy5iZ21MaXN0W2NvdW50IC0gMV07XG4gICAgICAgICAgICB0aGlzLmJnbUxpc3Quc3BsaWNlKGNvdW50IC0gMSwgMSk7XG4gICAgICAgICAgICB0aGlzLnBsYXlCZ21VUkwobGFzdFVybCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmkq3mlL5zZnhcbiAgICAgKi9cbiAgICBwdWJsaWMgcGxheVNmeChhcmdzOiBjYy5BdWRpb0NsaXAgfCBBdWRpb1BsYXlBcmdzLCB0eXBlOiBTZnhUeXBlID0gU2Z4VHlwZS5OT1JNQUwpOiB2b2lkIHtcbiAgICAgICAgbGV0IGNsaXAgPSBhcmdzIGluc3RhbmNlb2YgY2MuQXVkaW9DbGlwID8gYXJncyA6IGFyZ3MuY2xpcDtcbiAgICAgICAgaWYgKHRoaXMuc2Z4T2ZmIHx8ICFjbGlwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2Z4RGF0YTogU2Z4RGF0YSA9IHR5cGUgPT09IFNmeFR5cGUuTk9STUFMID8gdGhpcy5fbm9ybWFsU2Z4TWFwLmdldChjbGlwKSA6IHRoaXMuX3VpU2Z4TWFwLmdldChjbGlwKTtcbiAgICAgICAgbGV0IGF1ZGlvRGF0YTogQXVkaW9EYXRhID0gbnVsbDtcbiAgICAgICAgaWYgKHNmeERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc2Z4RGF0YSA9IHRoaXMuc2V0U2Z4RGF0YShjbGlwLCB0eXBlKTtcbiAgICAgICAgICAgIGF1ZGlvRGF0YSA9IHRoaXMucGxheShhcmdzLCB0aGlzLnNmeFZvbHVtZSk7XG4gICAgICAgICAgICBzZnhEYXRhLmF1ZGlvTGlzdC5wdXNoKGF1ZGlvRGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDliZTpmaTkuI3lpITkuo7mkq3mlL7nirbmgIHnmoTpn7PpopFcbiAgICAgICAgICAgIHdoaWxlIChzZnhEYXRhLmF1ZGlvTGlzdC5sZW5ndGggPiAwICYmIGNjLmF1ZGlvRW5naW5lLmdldFN0YXRlKHNmeERhdGEuYXVkaW9MaXN0WzBdLmlkKSAhPT0gY2MuYXVkaW9FbmdpbmUuQXVkaW9TdGF0ZS5QTEFZSU5HKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKHNmeERhdGEuYXVkaW9MaXN0LnNoaWZ0KCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDlt7Lovr7liLDmnIDlpKfmlbDph4/liJnliZTpmaTmnIDlhYgo56ys5LiA5LiqKee8k+WtmOeahOmfs+mikVxuICAgICAgICAgICAgd2hpbGUgKHNmeERhdGEub3ZlclN0b3AgJiYgc2Z4RGF0YS5hdWRpb0xpc3QubGVuZ3RoID49IHNmeERhdGEubWF4TnVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKHNmeERhdGEuYXVkaW9MaXN0LnNoaWZ0KCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDnvJPlrZjmlrDnmoTpn7PpopFcbiAgICAgICAgICAgIGlmIChzZnhEYXRhLmF1ZGlvTGlzdC5sZW5ndGggPCBzZnhEYXRhLm1heE51bSkge1xuICAgICAgICAgICAgICAgIGF1ZGlvRGF0YSA9IHRoaXMucGxheShhcmdzLCB0aGlzLnNmeFZvbHVtZSk7XG4gICAgICAgICAgICAgICAgc2Z4RGF0YS5hdWRpb0xpc3QucHVzaChhdWRpb0RhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pKt5pS+c2Z4VVJMXG4gICAgICovXG4gICAgcHVibGljIHBsYXlTZnhVUkwodXJsOiBzdHJpbmcsIGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuc2Z4T2ZmKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYzJmLnJlcy5sb2FkKHVybCwgY2MuQXVkaW9DbGlwLCAoZXJyOiBFcnJvciB8IG51bGwsIGRhdGE6IGNjLkF1ZGlvQ2xpcCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBsYXlTZngoeyBjbGlwOiBkYXRhLCBsb29wOiBmYWxzZSwgZmluaXNoQ2FsbDogY2FsbGJhY2sgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgICog6K6+572u6Z+z5pWI5pWw5o2u77yI55So5LqO6ZmQ5Yi25p+Q5Lqb55+t5pe26Ze05YaF5ZCM5pe25aSn6YeP5pKt5pS+55qE6Z+z5pWI77yJXG4gICAgICogQHBhcmFtIGNsaXAgXG4gICAgICogQHBhcmFtIHR5cGUg6Z+z5pWI57G75Z6LXG4gICAgICogQHBhcmFtIG1heE51bSDmraTpn7PmlYjmnIDlpKflkIzml7bmkq3mlL7nmoTmlbDph49cbiAgICAgKiBAcGFyYW0gb3ZlclN0b3Ag6LaF6L+H5pyA5aSn5pWw6YeP5pe25piv5ZCmc3RvcOacquaSreWujOeahOmfs+aViOW5tue8k+WtmOaWsOeahOmfs+aViFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRTZnhEYXRhKGNsaXA6IGNjLkF1ZGlvQ2xpcCwgdHlwZTogU2Z4VHlwZSA9IFNmeFR5cGUuTk9STUFMLCBtYXhOdW06IG51bWJlciA9IDgsIG92ZXJTdG9wOiBib29sZWFuID0gZmFsc2UpOiBTZnhEYXRhIHtcbiAgICAgICAgaWYgKCFjbGlwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBtYXhOdW0gPSBNYXRoLm1heChtYXhOdW0sIDEpO1xuICAgICAgICBsZXQgbWFwID0gdHlwZSA9PT0gU2Z4VHlwZS5OT1JNQUwgPyB0aGlzLl9ub3JtYWxTZnhNYXAgOiB0aGlzLl91aVNmeE1hcDtcbiAgICAgICAgbGV0IHNmeERhdGE6IFNmeERhdGEgPSBtYXAuZ2V0KGNsaXApO1xuICAgICAgICBpZiAoc2Z4RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzZnhEYXRhID0ge1xuICAgICAgICAgICAgICAgIGF1ZGlvTGlzdDogW10sXG4gICAgICAgICAgICAgICAgbWF4TnVtOiBtYXhOdW0sXG4gICAgICAgICAgICAgICAgb3ZlclN0b3A6IG92ZXJTdG9wXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbWFwLnNldChjbGlwLCBzZnhEYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNmeERhdGEubWF4TnVtID0gbWF4TnVtO1xuICAgICAgICAgICAgc2Z4RGF0YS5vdmVyU3RvcCA9IG92ZXJTdG9wO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZnhEYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWBnOatomJnbVxuICAgICAqIEBwYXJhbSBjbGlwIOmcgOWBnOatoueahOmfs+mike+8jGNsaXDov5Tlm57lgLzkuLpmYWxzZeWImeWBnOatouaJgOaciVxuICAgICAqIEBwYXJhbSBmYWRlRHVyYXRpb24g6Z+z6YeP5riQ5Y+Y5pe26ZW/IOWNleS9jXNcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RvcEJnbShjbGlwOiBjYy5BdWRpb0NsaXAgPSBudWxsLCBmYWRlRHVyYXRpb246IG51bWJlciA9IDApOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuYmdtT2ZmKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2xpcCkge1xuICAgICAgICAgICAgbGV0IGF1ZGlvRGF0YTogQXVkaW9EYXRhID0gdGhpcy5fYmdtTWFwLmdldChjbGlwKTtcbiAgICAgICAgICAgIGlmIChhdWRpb0RhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZhZGVEdXJhdGlvbiA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKGF1ZGlvRGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmdtTWFwLmRlbGV0ZShjbGlwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52b2x1bWVGYWRlKGF1ZGlvRGF0YSwgZmFkZUR1cmF0aW9uLCAxLCAwLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcChhdWRpb0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9iZ21NYXAuZGVsZXRlKGNsaXApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGZhZGVEdXJhdGlvbiA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmdtTWFwLmZvckVhY2goKGF1ZGlvRGF0YTogQXVkaW9EYXRhLCBjbGlwOiBjYy5BdWRpb0NsaXApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wKGF1ZGlvRGF0YSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmdtTWFwLmNsZWFyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2JnbU1hcC5mb3JFYWNoKChhdWRpb0RhdGE6IEF1ZGlvRGF0YSwgY2xpcDogY2MuQXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudm9sdW1lRmFkZShhdWRpb0RhdGEsIGZhZGVEdXJhdGlvbiwgMSwgMCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wKGF1ZGlvRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9iZ21NYXAuZGVsZXRlKGNsaXApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWBnOatonNmeFxuICAgICAqIEBwYXJhbSBjbGlwIOmcgOWBnOatoueahOmfs+mike+8jGNsaXDov5Tlm57lgLzkuLpmYWxzZeWImeWBnOatouaJgOaciVxuICAgICAqIEBwYXJhbSB0eXBlIOmfs+aViOexu+Wei1xuICAgICAqL1xuICAgIHB1YmxpYyBzdG9wU2Z4KGNsaXA6IGNjLkF1ZGlvQ2xpcCA9IG51bGwsIHR5cGU6IFNmeFR5cGUgPSBTZnhUeXBlLk5PUk1BTCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zZnhPZmYpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjbGlwKSB7XG4gICAgICAgICAgICBsZXQgZGF0YTogU2Z4RGF0YSA9IHR5cGUgPT09IFNmeFR5cGUuTk9STUFMID8gdGhpcy5fbm9ybWFsU2Z4TWFwLmdldChjbGlwKSA6IHRoaXMuX3VpU2Z4TWFwLmdldChjbGlwKTtcbiAgICAgICAgICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQgfHwgZGF0YS5hdWRpb0xpc3QubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRhdGEuYXVkaW9MaXN0LmZvckVhY2goKGF1ZGlvRGF0YTogQXVkaW9EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKGF1ZGlvRGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRhdGEuYXVkaW9MaXN0Lmxlbmd0aCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9ub3JtYWxTZnhNYXAuZm9yRWFjaCgoZGF0YTogU2Z4RGF0YSwgY2xpcDogY2MuQXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgZGF0YS5hdWRpb0xpc3QuZm9yRWFjaCgoYXVkaW9EYXRhOiBBdWRpb0RhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wKGF1ZGlvRGF0YSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZGF0YS5hdWRpb0xpc3QubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fdWlTZnhNYXAuZm9yRWFjaCgoZGF0YTogU2Z4RGF0YSwgY2xpcDogY2MuQXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgZGF0YS5hdWRpb0xpc3QuZm9yRWFjaCgoYXVkaW9EYXRhOiBBdWRpb0RhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wKGF1ZGlvRGF0YSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZGF0YS5hdWRpb0xpc3QubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5YGc5q2i5omA5pyJ6Z+z6aKRXG4gICAgICovXG4gICAgcHVibGljIHN0b3BBbGwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcEJnbSgpO1xuICAgICAgICB0aGlzLnN0b3BTZngoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmmoLlgZzmiYDmnInpn7PpopFcbiAgICAgKi9cbiAgICBwdWJsaWMgcGF1c2VBbGwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYmdtUGF1c2UgPSB0cnVlO1xuICAgICAgICB0aGlzLnNmeFBhdXNlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmgaLlpI3miYDmnInpn7PpopFcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzdW1lQWxsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJnbVBhdXNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2Z4UGF1c2UgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlgZzmraLmiYDmnInpn7PpopHvvIzmuIXpmaTmiYDmnInpn7PpopHnvJPlrZhcbiAgICAgKi9cbiAgICBwdWJsaWMgdW5jYWNoZUFsbCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9wQWxsKCk7XG4gICAgICAgIHRoaXMuX2JnbU1hcC5jbGVhcigpO1xuICAgICAgICB0aGlzLl9ub3JtYWxTZnhNYXAuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5fdWlTZnhNYXAuY2xlYXIoKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUudW5jYWNoZUFsbCgpO1xuICAgIH1cblxuICAgIC8qKiDpnZnmgIHmiJDlkZggKi9cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEF1ZGlvTWFuYWdlciA9IG51bGxcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IEF1ZGlvTWFuYWdlciB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IEF1ZGlvTWFuYWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBpbnRlcmZhY2UgSUMyRiB7XG4gICAgICAgIGF1ZGlvOiBBdWRpb01hbmFnZXI7XG4gICAgfVxufVxuXG5jMmYuYXVkaW8gPSBBdWRpb01hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbmV4cG9ydCB7IH07Il19