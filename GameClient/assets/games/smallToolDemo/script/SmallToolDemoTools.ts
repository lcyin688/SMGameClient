import { SmallToolDemoCfg } from './SmallToolDemoCfg';

export class SmallToolDemoTools {
    /**获取游戏入口动画地址 */
    static getGameEntryUrl(gameId: number, isBigIcon: boolean) {
        let pathBase = isBigIcon ? SmallToolDemoCfg.ResUrl.gameEnterBig : SmallToolDemoCfg.ResUrl.gameEnterSmall;
        let resUrl = c2f.utils.str.formatString(pathBase, c2f.language.current, gameId);
        let isExist = c2f.res.isAssetExist(resUrl.split('ab:')[1]);
        if (!isExist) {
            resUrl = c2f.utils.str.formatString(pathBase, 'en', gameId);
        }
        isExist = c2f.res.isAssetExist(resUrl.split('ab:')[1]);
        if (isExist) {
            return resUrl;
        }
        return null;
    }

    static isSkeleton(item: any): item is sp.Skeleton {
        return item !== null && item !== undefined && 'skeletonProperty' in item;
    }
}
