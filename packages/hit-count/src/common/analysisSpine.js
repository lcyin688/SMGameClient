//统计结果
/*
{
    'count': {
        'attack': { 
                act: [
                        ['blt_1', 'blt_2'],
                        ['blt_1', 'blt_2']
                ], 
                actEnd: 1 
            },
        'skill': { hitCnt: 0, actEnd: 1 }
    },
    'audio':{
        'file': 1
    },
    'logs':''
}
*/
var fs = require("fs");

const analysisSpine = {
    //{[key: string]: string}
    mp3Path: {},
    /** 统计动作名 */
    countAnims: ['attack', 'skill', 'play'],
    /** 统计信息 */
    coutInfo: {},

    /**
     * 
     * @param {string} file 
     */
    fileIsExist(file) {
        let path = 'D:/1_work/X1/x1_client/assets/resources/audio/effect/';
        let url = path + file;
        return fs.existsSync(url);
    },

    /**
     * 解析事件
     * @param {string} animaName
     * @param {any[]} events 
     * @param {string} key 
     * @returns 
     */
    analysisEvents(animaName, events) {
        let findCnt = 0;
        let info = this.coutInfo[animaName];
        for (let i = 0; i < events.length; i++) {
            const one = events[i];
            if (one.data.name == 'hit') {
                if (!info.hitCnt) {
                    info.hitCnt = 1;
                } else {
                    info.hitCnt++;
                }
                findCnt++;
            }
            if (one.data.name == 'act') {
                if (!info.act) {
                    info.act = [];
                }
                let bullets = [];
                let arrPa = one.stringValue.split('|');
                for (let one of arrPa) {
                    let arrSub = one.split('-');
                    if (arrSub.length > 0) {
                        bullets.push(arrSub[0]);
                    }
                }
                if (bullets.length > 0) {
                    info.act.push(bullets);
                }
                findCnt++;
            }

            if (one.data.name == 'actEnd') {
                if (!info.actEnd) {
                    info.actEnd = 1;
                }
            }
            if (one.data.name == 'sound') {
                let file = one.stringValue;
                if (file && file.length > 0 && this.mp3Path[file] === undefined) {
                    this.mp3Path[file] = this.fileIsExist(file + '.mp3') ? '1' : '0';
                }
            }
        }
        return findCnt;
    },

    /**
     * 解析时间线
     * @param {any[]} timelines 
     * @param {string} animaName 
     * @param {string} spineName 
     * @returns 
     */
    analysisTimeline(timelines, animaName) {
        let findCnt = 0;
        for (let i = 0; i < timelines.length; i++) {
            const oneLine = timelines[i];
            if (!oneLine.events || oneLine.events.length <= 0) {
                continue;
            }
            findCnt += this.analysisEvents(animaName, oneLine.events);
        }
        return findCnt;
    },

    /**
     * 
     * @param {skeletonData} data 
     * @param {string} spineName 
     * @param {boolean} actor 
     */
    analysisSkeleton(data, spineName) {
        let result = {};
        result.count = this.coutInfo = {};
        result.audio = this.mp3Path = {};
        result.logs = '';
        const animas = data.animations;
        for (let i = 0; i < animas.length; i++) {
            const oneAnima = animas[i];
            if (this.countAnims.indexOf(oneAnima.name) < 0) {
                continue;
            }
            this.coutInfo[oneAnima.name] = {};
            let total = this.analysisTimeline(oneAnima.timelines, oneAnima.name);
            if (total <= 0) {
                result.logs += `spine[${spineName}], anima[${oneAnima.name}], don't find hit event!\n`
            }
        }

        return result;
    }
}

module.exports = analysisSpine;