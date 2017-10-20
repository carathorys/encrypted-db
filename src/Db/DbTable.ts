/**
 * @class DbTable for let the DbManager know what kind of tables we'll use
 */
export class DbTable {
  constructor(public TableName: string, public PrimaryFieldName: string, public PrimaryIndexName: string) {

  }
}
