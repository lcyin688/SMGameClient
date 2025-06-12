/** 游戏常量定义：
 *
 */
export namespace NHWCConsts {
    /** 常用预制体 */
    export enum CmmPrefab {
        /** 座位Item */
        seatPrepareItem = 'ab:nhwc/prefab/common/P_SeatPrepareItem',

        /** 座位Item */
        seatDeskItem = 'ab:nhwc/prefab/common/P_SeatDeskItem',

        /** 画笔 🖌️ */
        sketchpad = 'ab:nhwc/prefab/common/P_Sketchpad',
    }

    /**默认座位上几个人就开 */
    export const SeatCount = 2;
    /** 画笔宽度 */
    export const DrawWidthArr = [10, 20, 30];
}
