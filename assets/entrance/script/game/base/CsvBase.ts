import { GameCaches } from "../GameCaches";
import { CacheData } from "./CacheData";

export abstract class CsvBase<T> {
    protected cache: CacheData<T> = null;

    constructor() {
        this.cache = null;
    }

    public initCache(data: T) {
        this.cache = new CacheData<T>(data);
        GameCaches.ins.addCsvCache(this.cache);
    }

    public set data(data: T) {
        this.cache.data = data;
    }
    public get data() {
        return this.cache.data;
    }
}