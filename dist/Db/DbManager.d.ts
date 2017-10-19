import { TableInfo } from './Tables/TableInfo';
/**
 * @class DbManager
 * @description Initializes IndexedDB instance, and creates tables
 * @author carathorys
 */
export declare class DbManager {
    protected dbName: string;
    protected tInfos: TableInfo[];
    db: IDBDatabase;
    private hasInitialized;
    private dbOpenedCallbackList;
    private IndxDb;
    constructor(dbName: string, tInfos: TableInfo[]);
    /**
     * @description Opens and initializes IndexedDB, and updates it if it's necessary
     */
    private OpenInitDB();
    private OnDatabaseOpened(callback);
    /**
     * @param e IDBRequest 'onsuccess' event
     */
    private _databaseOpened(e);
    /**
     * @param e
     */
    private _addTables(e);
    ResetDB(): void;
}
