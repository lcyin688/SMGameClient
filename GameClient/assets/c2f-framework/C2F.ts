declare global {
    interface IUtil { }
    interface IGame { }

    interface IC2F {
        utils: IUtil;
        game: IGame;
        initFW: () => void;
    }

    const c2f: IC2F;
}

export { };