import { GameConsts } from "../../../Script/game/GameConsts";
import { Snake2048Cfg } from "./Snake2048Cfg";

   
export class Snake2048Tools {
   
   /** 播放背景音乐 */
    static playMusic(name: string, cb: Function = null) {
        if (!name) {
            return;
        }
        let url = Snake2048Cfg.music + name;
        c2f.audio.playBgmURLbyBuddle(GameConsts.Bundle.snake2048,url, cb);
    }

    /** 播放音效 */
    static playEffect(name: string) {
        if (!name) {
            return;
        }
        let url = Snake2048Cfg.soundPath + name;
        c2f.audio.playSfxURLByBuddle(GameConsts.Bundle.snake2048,url);
    }
}