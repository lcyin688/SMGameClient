/** 
 * UI界面定义的需导出参数，统一定义到此，便于导入
 */
export namespace UIPa {

    export interface MoveConfig {
        startPos: cc.Vec3,
        endPos: cc.Vec3,
        controlPoint?: cc.Vec3[],
    }
    export const DesStarGameArgs = {
        width: 80,
        heigh: 80,
        count: 10,
    }
    export interface DesStarItemArgs {
        /**类型 */
        typ: number,
        column: number,
        row: number,
        /**回调 */
        cbFun: Function
    }

    export interface DesStarBase {
        /**横行 */
        row: number,
        /**数列 */
        column: number
    }

    export interface MoveData {
        fromRow: number,
        fromCol: number,
        toRow: number,
        toCol: number
    }



    export interface Physics2048ItemArgs {
        color: string,
        score: number,
        url: string,
        radius: number,
        /**回调 */
        cbFun: Function
    }

}
