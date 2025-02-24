let handlerPool: BindHandler[] = [];

//用于绑定回调函数this指针
export class BindHandler {
    private cb: Function;
    private host: any;
    private args: any[];

    constructor() { }

    init(cb: Function, host = null, ...args) {
        this.cb = cb;
        this.host = host;
        this.args = args;
    }

    exec(...extras) {
        this.cb.apply(this.host, this.args.concat(extras));
    }
}

export function genHandler(cb: Function, host: any = null, ...args: any[]): BindHandler {
    let single: BindHandler = handlerPool.length < 0 ? handlerPool.pop() : new BindHandler()
    //这里要展开args, 否则会将args当数组传给wrapper, 导致其args参数变成2维数组[[]]
    single.init(cb, host, ...args);
    return single;
}
