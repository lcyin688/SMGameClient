/** UI相关工具函数汇总·不可引入子包文件 */

import { GameConsts } from "../../../Script/game/GameConsts";



export class DesStarTools {

   /** 播放背景音乐 */
    static playMusic(name: string, cb: Function = null) {
        if (!name) {
            return;
        }
        let url = GameConsts.ResUrl.music + name;
        c2f.audio.playBgmURLbyBuddle(GameConsts.Bundle.desStar,url, cb);
    }

    /** 播放音效 */
    static playEffect(name: string) {
        if (!name) {
            return;
        }
        let url = GameConsts.ResUrl.soundEft + name;
        c2f.audio.playSfxURLByBuddle(GameConsts.Bundle.desStar,url);
    }






}
