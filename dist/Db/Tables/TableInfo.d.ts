/**
 * @class TableInfo for let the DbManager know what kind of tables we'll use
 */
export declare class TableInfo {
    TableName: string;
    PrimaryFieldName: string;
    PrimaryIndexName: string;
    constructor(TableName: string, PrimaryFieldName: string, PrimaryIndexName: string);
}
