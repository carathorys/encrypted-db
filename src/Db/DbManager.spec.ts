import { DbManager } from './DbManager';
import { DbTable } from './DbTable';

describe('DbManager construction', () => {
  it('should throw a specific error when database name parameter is `null`, `undefined`, or `empty string`', () => {
    expect(() => new DbManager(null, null)).toThrowError(DbManager.NULL_OR_EMPTY_NAME);
    expect(() => new DbManager(null, undefined)).toThrowError(DbManager.NULL_OR_EMPTY_NAME);
    expect(() => new DbManager(null, [])).toThrowError(DbManager.NULL_OR_EMPTY_NAME);
    expect(() => new DbManager(null, [new DbTable('TableName', 'ID', 'ID')])).toThrowError(DbManager.NULL_OR_EMPTY_NAME);

    expect(() => new DbManager(undefined, null)).toThrowError(DbManager.NULL_OR_EMPTY_NAME);
    expect(() => new DbManager(undefined, undefined)).toThrowError(DbManager.NULL_OR_EMPTY_NAME);
    expect(() => new DbManager(undefined, [])).toThrowError(DbManager.NULL_OR_EMPTY_NAME);
    expect(() => new DbManager(undefined, [new DbTable('TableName', 'ID', 'ID')])).toThrowError(DbManager.NULL_OR_EMPTY_NAME);

    expect(() => new DbManager('', null)).toThrowError(DbManager.NULL_OR_EMPTY_NAME);
    expect(() => new DbManager('', undefined)).toThrowError(DbManager.NULL_OR_EMPTY_NAME);
    expect(() => new DbManager('', [])).toThrowError(DbManager.NULL_OR_EMPTY_NAME);
    expect(() => new DbManager('', [new DbTable('TableName', 'ID', 'ID')])).toThrowError(DbManager.NULL_OR_EMPTY_NAME);
  });

  it('should throw a specific error when table list is null, or empty, but the database name is OK', () => {
    expect(() => new DbManager('db', null)).toThrowError(DbManager.NULL_OR_EMPTY_TABLES);
    expect(() => new DbManager('db', undefined)).toThrowError(DbManager.NULL_OR_EMPTY_TABLES);
    expect(() => new DbManager('db', [])).toThrowError(DbManager.NULL_OR_EMPTY_TABLES);
  });

  it('Should successfully initialize with these parameters', () => {
    expect(() => new DbManager('db', [new DbTable('TableName', 'ID', 'ID')])).not.toThrow();
  });
});
