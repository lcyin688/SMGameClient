export class CacheData<T>{
    private _data: T = null;

    constructor(dt: T) {
        this._data = dt;
    }

    public clear() {
        this._data = null;
    }

    public set data(dt: T) {
        this._data = dt;
    }

    public get data() {
        return this._data;
    }
}