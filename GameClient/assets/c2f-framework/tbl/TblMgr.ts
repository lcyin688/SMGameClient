import { Tbl } from "./Tbl";

const { ccclass } = cc._decorator;

declare global {
    interface ITbl { }
    interface IC2F {
        tblMgr: TblMgr;
        /**表格全局 */
        tbl: ITbl;
    }
}

export class TblMgr {

    init(allTable: cc.JsonAsset[]) {
        for (let table of allTable) {
            let tbl = new Tbl();
            tbl.init(table.name, table.json);
            c2f.tbl[table.name] = window[table.name] = tbl;
        }
    }

    private static _instance: TblMgr = null
    public static getInstance(): TblMgr {
        if (!this._instance) {
            this._instance = new TblMgr();
        }
        return this._instance;
    }
}

c2f.tblMgr = TblMgr.getInstance();
