import { TableInfo } from './Tables/TableInfo';

/**
 * @class DbManager
 * @description Initializes IndexedDB instance, and creates tables
 * @author carathorys
 */
export class DbManager {

  public static readonly NULL_OR_EMPTY_TABLES: string = 'Table\'s list should not be null, undefined, or empty array!';
  public static readonly NULL_OR_EMPTY_NAME: string = 'Database name should not be null, undefined, or empty string!';

  public db: IDBDatabase;

  private hasInitialized: boolean = false;
  private dbOpenedCallbackList: Array<(db: IDBDatabase) => void>;
  private IndxDb: IDBFactory;

  constructor(protected dbName: string, protected tInfos: TableInfo[]) {
    this.IndxDb = window.indexedDB;
    this.dbOpenedCallbackList = [];
    this.OpenInitDB();
  }

  /**
   * @description Opens and initializes IndexedDB, and updates it if it's necessary
   */
  private OpenInitDB() {
    const req: IDBOpenDBRequest = this.IndxDb.open(this.dbName);
    req.onupgradeneeded = this._addTables;
    req.onsuccess = this._databaseOpened;
  }

  private OnDatabaseOpened(callback: (db: IDBDatabase) => void) {
    this.dbOpenedCallbackList.push(callback);
  }

  /**
   * @param e IDBRequest 'onsuccess' event
   */
  private _databaseOpened(e: any) {
    this.db = (e.target.result as IDBDatabase);
    this.dbOpenedCallbackList.forEach((callback) => callback(this.db));
  }

  /**
   * @param e
   */
  private _addTables(e: any) {
    this.db = e.target.result;
    let params: IDBObjectStoreParameters;
    let tInfo: TableInfo;

    for (const it in this.tInfos) {
      if (this.tInfos.hasOwnProperty(it)) {
        tInfo = this.tInfos[it];
        params = { keyPath: tInfo.PrimaryFieldName };
        let tblLocal: IDBObjectStore;
        tblLocal = this.db.createObjectStore(tInfo.TableName, params);
        tblLocal.createIndex(tInfo.PrimaryIndexName, tInfo.PrimaryFieldName);
      }
    }
  }

  public ResetDB() {
    this.db.close();
    this.IndxDb.deleteDatabase(this.dbName);
    this.OpenInitDB();
  }
}
