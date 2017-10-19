/**
 * @class TableInfo for let the DbManager know what kind of tables we'll use
 */
export class TableInfo {
  constructor(public TableName: string, public PrimaryFieldName: string, public PrimaryIndexName: string) {

  }
}
