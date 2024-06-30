declare global {
    interface RedDotDef {
        id: number,
        moduleId: number,
        name: string;
        parent: number;
        showType: c2f.RedDot.ShowType;
        offsetX: number;
        offsetY: number;
    }
    interface IRedDotRequestUpdate {
        requestUpdate<Options = any>(parent: number, id: number, options?: Options): number;
    }

    type HandlerModuleIsUnlock = (unlockId: number, dotId: number) => boolean;
}

export { };