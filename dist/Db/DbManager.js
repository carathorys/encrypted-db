"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class DbManager
 * @description Initializes IndexedDB instance, and creates tables
 * @author carathorys
 */
class DbManager {
    constructor(dbName, tInfos) {
        this.dbName = dbName;
        this.tInfos = tInfos;
        this.hasInitialized = false;
        this.IndxDb = window.indexedDB;
        this.dbOpenedCallbackList = [];
        this.OpenInitDB();
    }
    /**
     * @description Opens and initializes IndexedDB, and updates it if it's necessary
     */
    OpenInitDB() {
        const req = this.IndxDb.open(this.dbName);
        req.onupgradeneeded = this._addTables;
        req.onsuccess = this._databaseOpened;
    }
    OnDatabaseOpened(callback) {
        this.dbOpenedCallbackList.push(callback);
    }
    /**
     * @param e IDBRequest 'onsuccess' event
     */
    _databaseOpened(e) {
        this.db = e.target.result;
        this.dbOpenedCallbackList.forEach((callback) => callback(this.db));
    }
    /**
     * @param e
     */
    _addTables(e) {
        this.db = e.target.result;
        let params;
        let tInfo;
        for (const it in this.tInfos) {
            if (this.tInfos.hasOwnProperty(it)) {
                tInfo = this.tInfos[it];
                params = { keyPath: tInfo.PrimaryFieldName };
                let tblLocal;
                tblLocal = this.db.createObjectStore(tInfo.TableName, params);
                tblLocal.createIndex(tInfo.PrimaryIndexName, tInfo.PrimaryFieldName);
            }
        }
    }
    ResetDB() {
        this.db.close();
        this.IndxDb.deleteDatabase(this.dbName);
        this.OpenInitDB();
    }
}
exports.DbManager = DbManager;
//# sourceMappingURL=DbManager.js.map