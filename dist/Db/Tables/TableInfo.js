"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class TableInfo for let the DbManager know what kind of tables we'll use
 */
class TableInfo {
    constructor(TableName, PrimaryFieldName, PrimaryIndexName) {
        this.TableName = TableName;
        this.PrimaryFieldName = PrimaryFieldName;
        this.PrimaryIndexName = PrimaryIndexName;
    }
}
exports.TableInfo = TableInfo;
//# sourceMappingURL=TableInfo.js.map