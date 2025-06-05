declare global {
    interface IUtil {}
    interface IGame {}

    interface IC2F {
        c2f: {};
        utils: IUtil;
        game: IGame;
        initFW: () => void;
        /** core 框架模块 */
        core: ICore;
        /** ui 模块 */
        ui: IUI;
    }
    const c2f: IC2F;
}

export {};
