/** Hack帮助工具 */
class HackUtil {
    /**
     * 设置游戏速度
     * @param speed 倍速：1为原始速度
     */
    static setGameSpeed(speed: number) {
        cc.director['globalGameTimeScale'] = speed;
    }
}

declare global {
    interface IUtil {
        hack: typeof HackUtil;
    }
}
c2f.utils.hack = HackUtil;
export { };
