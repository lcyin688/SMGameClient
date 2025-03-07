import { C2FConst } from "../../define/C2FConst";
import { C2FTween } from "../timer/C2FTween";

/**
 * 音效类型
 */
export enum SfxType {
    NORMAL,
    UI
}

/**
 * 音频播放参数
 */
export interface AudioPlayArgs {
    /** AudioClip */
    clip: cc.AudioClip;
    /** 是否循环，默认false */
    loop?: boolean;
    /** 音量渐变时长，单位s。默认0 */
    fadeDuration?: number;
    /** 播放结束的回调 */
    finishCall?: Function;
}

enum AudioMessage {
    /** 游戏从后台进入 */
    Audio = "Audio.Config",
}

/**
 * Audio缓存数据
 */
interface AudioData {
    /** audioID */
    id: number;
    /** 用于单独控制的音量 */
    volume: number;
    /** 音量渐变tween对象 */
    tween: C2FTween<AudioData>;
}

/**
 * 单个AudioClip对应的sfx(音效)缓存数据
 */
interface SfxData {
    /** 已缓存的音效数据数组 */
    audioList: AudioData[];
    /** 此音效最大同时播放的数量 */
    maxNum: number;
    /** 超过最大数量时是否stop未播完的音效并缓存新的音效 */
    overStop: boolean;
}

class AudioConfig {
    static bgmVolume: number = 1;
    static sfxVolume: number = 1;
    static bgmOff: boolean = false;
    static sfxOff: boolean = false;

    static saveCfg() {
        let info: any = {
            bv: this.bgmVolume,
            sv: this.sfxVolume,
            bof: this.bgmOff,
            sof: this.sfxOff
        }
        c2f.storage.setPlainItem(AudioMessage.Audio, JSON.stringify(info));
    }

    static loadCfg() {
        let info: any = null;
        try {
            info = JSON.parse(c2f.storage.getPlainItem(AudioMessage.Audio, ''));
        } catch (error) {
        }
        if (info) {
            this.bgmVolume = info.bv;
            this.sfxVolume = info.sv;
            this.bgmOff = info.bof;
            this.sfxOff = info.sof;
        }
    }
}

/**
 * 音频管理类
 */
class AudioManager {
    /** 缓存的bgm数据 */
    private _bgmMap: Map<cc.AudioClip, AudioData>;
    /** 缓存的普通音效数据 */
    private _normalSfxMap: Map<cc.AudioClip, SfxData>;
    /** 缓存的ui音效数据 */
    private _uiSfxMap: Map<cc.AudioClip, SfxData>;
    /** 背景列表 */
    private bgmList: string[] = [];
    /** 背景音乐延时timer */
    private bgmDelayTimer: any = null;

    constructor() {
        this._bgmMap = new Map();
        this._normalSfxMap = new Map();
        this._uiSfxMap = new Map();
        this.bgmList = [];

        AudioConfig.loadCfg();
    }


    /** 全局bgm音量 */
    public get bgmVolume(): number { return AudioConfig.bgmVolume; }
    public set bgmVolume(volume: number) {
        if (AudioConfig.bgmVolume === volume) {
            return;
        }
        AudioConfig.bgmVolume = cc.misc.clampf(volume, 0, 1);
        this._bgmMap.forEach((audioData: AudioData, clip: cc.AudioClip) => {
            cc.audioEngine.setVolume(audioData.id, AudioConfig.bgmVolume * audioData.volume);
        });
        this.bgmOff = volume < 0.01;
        AudioConfig.saveCfg();
    }

    /** 全局sfx音量 */
    public get sfxVolume(): number { return AudioConfig.sfxVolume; }
    public set sfxVolume(volume: number) {
        if (AudioConfig.sfxVolume === volume) {
            return;
        }
        AudioConfig.sfxVolume = cc.misc.clampf(volume, 0, 1);
        this._normalSfxMap.forEach((data: SfxData, clip: cc.AudioClip) => {
            data.audioList.forEach((audioData: AudioData) => {
                cc.audioEngine.setVolume(audioData.id, AudioConfig.sfxVolume * audioData.volume);
            });
        });
        this._uiSfxMap.forEach((data: SfxData, clip: cc.AudioClip) => {
            data.audioList.forEach((audioData: AudioData) => {
                cc.audioEngine.setVolume(audioData.id, AudioConfig.sfxVolume * audioData.volume);
            });
        });
        this.sfxOff = volume < 0.01;
        AudioConfig.saveCfg();
    }


    /** bgm是否关闭 */
    public get bgmOff(): boolean { return AudioConfig.bgmOff; }
    public set bgmOff(isOff: boolean) {
        if (AudioConfig.bgmOff === isOff) {
            return;
        }
        AudioConfig.bgmOff = isOff;
        if (AudioConfig.bgmOff) {
            this._bgmMap.forEach((audioData: AudioData, clip: cc.AudioClip) => {
                this.stop(audioData);
            });
            this._bgmMap.clear();
        } else {
            this.playRecentBgm();
        }
    }

    /** sfx是否关闭 */
    public get sfxOff(): boolean { return AudioConfig.sfxOff; }
    public set sfxOff(isOff: boolean) {
        if (AudioConfig.sfxOff === isOff) {
            return;
        }

        AudioConfig.sfxOff = isOff;
        if (AudioConfig.sfxOff) {
            this._normalSfxMap.forEach((data: SfxData, clip: cc.AudioClip) => {
                data.audioList.forEach((audioData: AudioData) => {
                    this.stop(audioData);
                });
                data.audioList.length = 0;
            });
            this._uiSfxMap.forEach((data: SfxData, clip: cc.AudioClip) => {
                data.audioList.forEach((audioData: AudioData) => {
                    this.stop(audioData);
                });
                data.audioList.length = 0;
            });
        }
    }

    private _bgmPause: boolean = false;
    /** bgm是否暂停 */
    public get bgmPause(): boolean { return this._bgmPause; }
    public set bgmPause(isPause: boolean) {
        if (this.bgmOff || this._bgmPause === isPause) {
            return;
        }
        this._bgmPause = isPause;

        this._bgmMap.forEach((audioData: AudioData, clip: cc.AudioClip) => {
            if (this._bgmPause) {
                audioData.tween?.pause();
                cc.audioEngine.pause(audioData.id);
            } else {
                audioData.tween?.resume();
                cc.audioEngine.resume(audioData.id);
            }
        });
    }

    private _sfxPause: boolean = false;
    /** sfx是否暂停，暂停时不暂停ui音效 */
    public get sfxPause(): boolean { return this._sfxPause; }
    public set sfxPause(isPause: boolean) {
        if (this.sfxOff || this._sfxPause === isPause) {
            return;
        }
        this._sfxPause = isPause;

        if (this._sfxPause) {
            this._normalSfxMap.forEach((data: SfxData, clip: cc.AudioClip) => {
                data.audioList.forEach((audioData: AudioData) => {
                    audioData.tween?.pause();
                    cc.audioEngine.pause(audioData.id);
                });
            });
        } else {
            this._normalSfxMap.forEach((data: SfxData, clip: cc.AudioClip) => {
                data.audioList.forEach((audioData: AudioData) => {
                    audioData.tween?.resume();
                    cc.audioEngine.resume(audioData.id);
                });
            });
        }
    }

    /**
     * 音量渐变
     * @param data 
     * @param duration 音量渐变时长 单位s
     * @param from 音量初始值
     * @param to 音量目标值
     * @param call 渐变结束的回调
     */
    private volumeFade(data: AudioData, duration: number, from: number, to: number, call?: Function): void {
        data.tween?.stop();
        data.volume = from;
        cc.audioEngine.setVolume(data.id, data.volume * this.bgmVolume);
        data.tween = new C2FTween(data)
            .to({ volume: to }, duration * 1000)
            .onUpdate(() => {
                cc.audioEngine.setVolume(data.id, data.volume * this.bgmVolume);
            })
            .onComplete(() => {
                data.tween = null;
                if (call) {
                    call();
                }
            })
            .start();
    }

    /**
     * 停止音频
     * @param audioData 
     */
    private stop(audioData: AudioData): void {
        if (audioData.tween) {
            audioData.tween.stop();
            audioData.tween = null;
        }
        cc.audioEngine.stop(audioData.id);
    }

    /**
     * 播放音频并返回AudioData
     */
    private play(args: cc.AudioClip | AudioPlayArgs, volume: number, audioData: AudioData = null): AudioData {
        let data: AudioPlayArgs = args instanceof cc.AudioClip ? { clip: args } : args;
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
        } else {
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
    }

    /**
     * 播放bgmClip
     */
    public playBgm(args: cc.AudioClip | AudioPlayArgs): void {
        let clip = args instanceof cc.AudioClip ? args : args.clip;
        if (this.bgmOff || !clip) {
            return;
        }
        this.stopBgm();

        let audioData: AudioData = this._bgmMap.get(clip);
        if (audioData === undefined) {
            audioData = this.play(args, this.bgmVolume);
            this._bgmMap.set(clip, audioData);
        } else {
            this.stop(audioData);
            this.play(args, this.bgmVolume, audioData);
        }
    }

    /** 添加背景音乐 */
    private addMusicUrlToList(url: string) {
        let existIdx = this.bgmList.indexOf(url);
        if (existIdx < 0) {
            this.bgmList.push(url);
        } else {
            this.bgmList = this.bgmList.slice(0, existIdx + 1);
        }
    }

    /**
     * 播放bgmURL
     */
    public playBgmURL(url: string, callback?: Function) {
        if (this.bgmDelayTimer) {
            clearTimeout(this.bgmDelayTimer);
        }
        this.bgmDelayTimer = setTimeout(() => {
            this.bgmDelayTimer = null;

            this.addMusicUrlToList(url);
            if (this.bgmOff) {
                return;
            }
            c2f.res.load(url, cc.AudioClip, (err: Error | null, data: cc.AudioClip) => {
                if (err) {
                    cc.error(err);
                }
                this.playBgm({ clip: data, loop: true, finishCall: callback })
            })
        }, 300);
    }

    /**
     * 播放bgmURL
     */
    public playBgmURLbyBuddle(buddleName:string,url: string, callback?: Function) {
        if (this.bgmDelayTimer) {
            clearTimeout(this.bgmDelayTimer);
        }
        this.bgmDelayTimer = setTimeout(() => {
            this.bgmDelayTimer = null;

            this.addMusicUrlToList(url);
            if (this.bgmOff) {
                return;
            }
            c2f.res.load(buddleName,url, cc.AudioClip, (err: Error | null, data: cc.AudioClip) => {
                if (err) {
                    cc.error(err);
                }
                this.playBgm({ clip: data, loop: true, finishCall: callback })
            })
        }, 300);
    }

    /**
     * 结束当前背景音乐·播放前一首
     */
    public endCurMusic() {
        let count = this.bgmList.length;
        if (count <= 0) {
            return;
        }
        this.bgmList.splice(count - 1, 1);
        this.playRecentBgm();
    }

    private playRecentBgm() {
        let count = this.bgmList.length;
        if (count > 0) {
            let lastUrl = this.bgmList[count - 1];
            this.bgmList.splice(count - 1, 1);
            this.playBgmURL(lastUrl);
        }
    }

    /**
     * 播放sfx
     */
    public playSfx(args: cc.AudioClip | AudioPlayArgs, type: SfxType = SfxType.NORMAL): void {
        let clip = args instanceof cc.AudioClip ? args : args.clip;
        if (this.sfxOff || !clip) {
            return;
        }

        let sfxData: SfxData = type === SfxType.NORMAL ? this._normalSfxMap.get(clip) : this._uiSfxMap.get(clip);
        let audioData: AudioData = null;
        if (sfxData === undefined) {
            sfxData = this.setSfxData(clip, type);
            audioData = this.play(args, this.sfxVolume);
            sfxData.audioList.push(audioData);
        } else {
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
    }

    /**
     * 播放sfxURL
     */
    public playSfxURL(url: string, callback?: Function) {
        if (this.sfxOff) {
            return;
        }
        c2f.res.load(url, cc.AudioClip, (err: Error | null, data: cc.AudioClip) => {
            if (err) {
                cc.error(err);
            }
            this.playSfx({ clip: data, loop: false, finishCall: callback })
        })
    }

    /**
     * 播放sfxURL
     */
    public playSfxURLByBuddle(bundleName:string,url: string, callback?: Function) {
        if (this.sfxOff) {
            return;
        }
        c2f.res.load(bundleName, url, cc.AudioClip, (err: Error | null, data: cc.AudioClip) => {
            if (err) {
                cc.error(err);
            }
            this.playSfx({ clip: data, loop: false, finishCall: callback })
        })
    }

    /**
     * 设置音效数据（用于限制某些短时间内同时大量播放的音效）
     * @param clip 
     * @param type 音效类型
     * @param maxNum 此音效最大同时播放的数量
     * @param overStop 超过最大数量时是否stop未播完的音效并缓存新的音效
     */
    public setSfxData(clip: cc.AudioClip, type: SfxType = SfxType.NORMAL, maxNum: number = 8, overStop: boolean = false): SfxData {
        if (!clip) {
            return;
        }

        maxNum = Math.max(maxNum, 1);
        let map = type === SfxType.NORMAL ? this._normalSfxMap : this._uiSfxMap;
        let sfxData: SfxData = map.get(clip);
        if (sfxData === undefined) {
            sfxData = {
                audioList: [],
                maxNum: maxNum,
                overStop: overStop
            };
            map.set(clip, sfxData);
        } else {
            sfxData.maxNum = maxNum;
            sfxData.overStop = overStop;
        }
        return sfxData;
    }

    /**
     * 停止bgm
     * @param clip 需停止的音频，clip返回值为false则停止所有
     * @param fadeDuration 音量渐变时长 单位s
     */
    public stopBgm(clip: cc.AudioClip = null, fadeDuration: number = 0): void {
        if (this.bgmOff) {
            return;
        }

        if (clip) {
            let audioData: AudioData = this._bgmMap.get(clip);
            if (audioData === undefined) {
                return;
            }

            if (fadeDuration <= 0) {
                this.stop(audioData);
                this._bgmMap.delete(clip);
            } else {
                this.volumeFade(audioData, fadeDuration, 1, 0, () => {
                    this.stop(audioData);
                    this._bgmMap.delete(clip);
                });
            }
        } else {
            if (fadeDuration <= 0) {
                this._bgmMap.forEach((audioData: AudioData, clip: cc.AudioClip) => {
                    this.stop(audioData);
                });
                this._bgmMap.clear();
            } else {
                this._bgmMap.forEach((audioData: AudioData, clip: cc.AudioClip) => {
                    this.volumeFade(audioData, fadeDuration, 1, 0, () => {
                        this.stop(audioData);
                        this._bgmMap.delete(clip);
                    });
                });
            }
        }
    }

    /**
     * 停止sfx
     * @param clip 需停止的音频，clip返回值为false则停止所有
     * @param type 音效类型
     */
    public stopSfx(clip: cc.AudioClip = null, type: SfxType = SfxType.NORMAL): void {
        if (this.sfxOff) {
            return;
        }

        if (clip) {
            let data: SfxData = type === SfxType.NORMAL ? this._normalSfxMap.get(clip) : this._uiSfxMap.get(clip);
            if (data === undefined || data.audioList.length <= 0) {
                return;
            }

            data.audioList.forEach((audioData: AudioData) => {
                this.stop(audioData);
            });
            data.audioList.length = 0;
        } else {
            this._normalSfxMap.forEach((data: SfxData, clip: cc.AudioClip) => {
                data.audioList.forEach((audioData: AudioData) => {
                    this.stop(audioData);
                });
                data.audioList.length = 0;
            });
            this._uiSfxMap.forEach((data: SfxData, clip: cc.AudioClip) => {
                data.audioList.forEach((audioData: AudioData) => {
                    this.stop(audioData);
                });
                data.audioList.length = 0;
            });
        }
    }

    /**
     * 停止所有音频
     */
    public stopAll(): void {
        this.stopBgm();
        this.stopSfx();
    }

    /**
     * 暂停所有音频
     */
    public pauseAll(): void {
        this.bgmPause = true;
        this.sfxPause = true;
    }

    /**
     * 恢复所有音频
     */
    public resumeAll(): void {
        this.bgmPause = false;
        this.sfxPause = false;
    }

    /**
     * 停止所有音频，清除所有音频缓存
     */
    public uncacheAll(): void {
        this.stopAll();
        this._bgmMap.clear();
        this._normalSfxMap.clear();
        this._uiSfxMap.clear();
        cc.audioEngine.uncacheAll();
    }

    /** 静态成员 */
    private static _instance: AudioManager = null
    public static getInstance(): AudioManager {
        if (!this._instance) {
            this._instance = new AudioManager();
        }
        return this._instance;
    }
}

declare global {
    interface IC2F {
        audio: AudioManager;
    }
}

c2f.audio = AudioManager.getInstance();
export { };