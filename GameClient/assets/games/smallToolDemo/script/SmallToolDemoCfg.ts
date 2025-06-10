export namespace SmallToolDemoCfg {
    /** 常用预制体 */
    export enum Prefab {
        turntableRecordItem = 'ab:smallToolDemo/prefab/P_TurntableRecordItem',
        joinUsWayItem = 'ab:smallToolDemo/prefab/joinus/P_JoinUsWayItem',
        hallBannerArea = 'ab:smallToolDemo/prefab/P_HallBannerArea',
        turntableItem = 'ab:smallToolDemo/prefab/turntable/P_TurntableItem',
        vipItem = 'ab:smallToolDemo/prefab/vipinfo/P_VipItem',
    }
    export const langtexture = 'ab:smallToolDemo/dyn/langtexture/';
    /** 资源路径 */
    export const ResUrl = {
        joinus: 'ab:smallToolDemo/dyn/image/joinus/',
        vipIcon: 'ab:smallToolDemo/dyn/image/vipIcon/',
        gameEnterSmall: `${langtexture}{0}/gameEnter/{1}/game_icon`,
        gameEnterBig: `${langtexture}{0}/gameEnter/{1}/game_icon_big`,
    };
}
