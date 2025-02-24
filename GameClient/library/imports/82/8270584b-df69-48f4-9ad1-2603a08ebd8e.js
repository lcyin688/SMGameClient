"use strict";
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