import { CSVFiles } from "../../../Script/config/CSVFiles";
import { ParseCsv } from "../../../Script/config/ParseCsv";
import { GameConsts } from "../../../Script/game/GameConsts";

enum CfgType {
    JSON = 1,
    CSV = 2
}

class GameConfig {
    /** 本地配置 */
    private cfgs: Map<string, any> = null;
    /** 配置文件类型 */
    private type: CfgType = null;
    /** 活动语言表 */
    private actLanguage: Map<number, string> = null;

    constructor() {
        this.cfgs = new Map();
    }

    //单例
    private static _ins: GameConfig = null;
    static get ins() {
        if (!GameConfig._ins) {
            GameConfig._ins = new GameConfig();
        }
        return GameConfig._ins;
    }

    /** 释放 */
    public clear() {
        //this.cfgs.clear();//暂时不释放
    }

    /** 获得某表数据 */
    public getCfgData(tabName: string): any {
        let result: any = null;
        if (this.cfgs) {
            result = this.cfgs.get(tabName);
        }
        return result;
    }

    /** 加载JSON配置 */
    private loadJsonCfg(name: string, endCb: Function) {
        let url = 'statistic/' + name;
        c2f.res.load(GameConsts.Bundle.resource, url, cc.JsonAsset, (err: Error | null, asset: cc.JsonAsset) => {
            if (err) {
                cc.error(err.message);
            } else {
                this.cfgs.set(name, asset.json);
            }
            c2f.res.release(url, cc.JsonAsset, GameConsts.Bundle.resource);
            endCb && endCb(name);
        });
    }

    /** 加载CSV配置 */
    private loadCsvCfg(name: string, endCb: Function) {
        let url = 'config/' + name;
        c2f.res.load(GameConsts.Bundle.resource, url, cc.TextAsset, (err: Error | null, asset: cc.TextAsset) => {
            if (err) {
                cc.error(err.message);
            } else {
                let rs = ParseCsv.csv_open(asset.text);
                let tabData = ParseCsv.rs_make_tab(rs);
                this.lanuageAdaLocal(tabData);
                this.cfgs.set(name, tabData);
            }
            c2f.res.release(url, cc.TextAsset, GameConsts.Bundle.resource);
            endCb && endCb(name);
        });
    }

    /** 当前语言配置文本 */
    public getCurLGText(lgId: number) {
        let result = '';
        if (lgId > 0) {
            const curLg = c2f.language.current;
            const lgTab = this.cfgs.get(GameConsts.lgCSV);
            const lgElem = lgTab[lgId];
            if (lgElem) {
                const lgText = lgElem[curLg];
                if (lgText && lgText.length > 0) {
                    result = lgText;
                } else {
                    result = `LG_${lgId}`;
                }
            } else {
                result = `LG_${lgId}`;
            }
        }
        return result;
    }

    /** 本地配置表多语言适配 */
    private lanuageAdaLocal(csvData: Object) {
        this.languageAdapter(csvData, this.getCurLGText.bind(this));
    }

    /** 配置表文本语言适配:暂时只支持num和num[]类型 */
    public languageAdapter(csvData: Object, getTxtCb: Function) {
        if (!csvData) {
            return;
        }
        const lgCsv = GameConsts.lgCSV;
        const files = CSVFiles;
        let lgIdx = files.indexOf(lgCsv);
        if (lgIdx < 0) {
            return;
        }
        let tabKeys = Object.keys(csvData);

        //多语言的字段名列表
        let lgKeys = [];
        const tmpKey = tabKeys[0];
        const tmpObj = csvData[tmpKey];
        for (let key in tmpObj) {
            if (!key) {
                continue;
            }
            if (key.indexOf('_key') >= 0) {
                lgKeys.push(key);
            }
        }
        if (lgKeys.length <= 0) {
            return;
        }

        //设置多语言对应文本
        for (let lineK in csvData) {
            if (!lineK || !csvData[lineK]) {
                continue;
            }
            let lineEle = csvData[lineK];
            for (let lgK of lgKeys) {
                const lgKValue = lineEle[lgK];
                const realName = lgK.substring(0, lgK.length - 4);
                if (Array.isArray(lgKValue)) {
                    let arrLgText: string[] = [];
                    for (let one of lgKValue) {
                        if (typeof one == 'number') {
                            arrLgText.push(getTxtCb(one));
                        } else {
                            c2f.log.logBusiness("don't suport object list for language!");
                            break;
                        }
                    }
                    lineEle[realName] = arrLgText;
                } else {
                    lineEle[realName] = getTxtCb(lgKValue);
                }
            }
        }
    }

    /** 加载所有配置 */
    private loadCfgs(files: string[], progressCb: Function, isJson: boolean) {
        let total = files.length;
        let index = 0;
        let completeOnce = (name: string) => {
            index = index + 1;
            console.log(`load cfg(${index}/${total}): ${name}`);
            progressCb && progressCb(index, total);
        };
        console.log("allConf.length ==>", total);
        for (let i = 0; i < total; i++) {
            let name = files[i];
            if (isJson) {
                this.loadJsonCfg(name, completeOnce);
            } else {
                this.loadCsvCfg(name, completeOnce);
            }
        }
    }

    /** 加载所有JSON配置 */
    public loadAllJson(progressCb: Function) {
        this.type = CfgType.JSON;
        const files = ['spineCount', 'audioCount', 'redDots'];
        this.loadCfgs(files, progressCb, true);
    }

    /** 加载所有CSV配置 */
    public loadAllCSV(progressCb: Function) {
        this.type = CfgType.CSV;
        const lgCsv = GameConsts.lgCSV;
        const files = CSVFiles;
        let lgIdx = files.indexOf(lgCsv);
        if (lgIdx >= 0) {
            let other = files.concat([]);
            c2f.utils.arr.fastRemoveAt(other, lgIdx);
            this.loadCfgs([lgCsv], () => {
                this.loadCfgs(other, progressCb, false);
            }, false);
        } else {
            this.loadCfgs(files, progressCb, false);
        }
    }

    /** 加载部分配置 */
    public loadPartCfgs(files: string[], endCb: Function) {
        let needFile: string[] = [];
        for (let one of files) {
            let exist = this.cfgs.get(one);
            if (!exist) {
                needFile.push(one);
            }
        }
        if (needFile.length > 0) {
            const lgCsv = GameConsts.lgCSV;
            let lgIdx = needFile.indexOf(lgCsv);
            let checkEnd = (cur: number, total: number) => {
                if (cur >= total) {
                    endCb && endCb();
                }
            }
            if (lgIdx >= 0) {
                c2f.utils.arr.fastRemoveAt(needFile, lgIdx);
            }
            const lgTab = this.cfgs.get(GameConsts.lgCSV);
            if (lgTab) {
                this.loadCfgs(needFile, checkEnd, false);
            } else {
                this.loadCfgs([lgCsv], () => {
                    this.loadCfgs(needFile, checkEnd, false);
                }, false);
            }
        } else {
            endCb && endCb();
        }
    }

    /** 更新本地配置 */
    public updateConfData(name: string, tabData: Object) {
        this.lanuageAdaLocal(tabData);
        if (this.cfgs.has(name)) {
            this.cfgs.delete(name);
        }
        this.cfgs.set(name, tabData);
    }

    /** 是否为JSON */
    public isJsonCfg() {
        return this.type == CfgType.JSON;
    }

    /** 设置活动语言表配置 */
    public setActLanguageTab(data: any) {

    }

    /** 切换配置中多语言文本 */
    public switchCfgLG() {
        //本地配置
        this.cfgs.forEach((v, k) => {
            this.lanuageAdaLocal(v);
        });
    }
}

declare global {
    interface ISZG {
        cfg: GameConfig;
    }
}

szg.cfg = GameConfig.ins;
export { };