import { TableInfo } from './Tables/TableInfo';

export class DbManager {

  private hasInitialized: boolean = false;
  private dbOpenedCallbackList: Array<(db: IDBDatabase) => void>;
  private IndxDb: IDBFactory;
  public db: IDBDatabase;

  constructor(protected dbName: string, protected tInfos: TableInfo[]) {
    this.IndxDb = window.indexedDB;
    this.dbOpenedCallbackList = [];
    this.OpenInitDB();
  }

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
      tInfo = this.tInfos[it];
      params = { keyPath: tInfo.PrimaryFieldName };
      let tblLocal: IDBObjectStore;
      tblLocal = this.db.createObjectStore(tInfo.TableName, params);
      tblLocal.createIndex(tInfo.PrimaryIndexName, tInfo.PrimaryFieldName);
    }
  }

  public ResetDB() {
    this.db.close();
    this.IndxDb.deleteDatabase(this.dbName);
    this.OpenInitDB();
  }
}
