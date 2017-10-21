import { DbManager } from './DbManager';
import { DbTable } from './DbTable';

describe('DbManager', () => {
  it('Should not initialize without the necessary parameters initialize', () => {
    expect(() => new DbManager('', null)).toThrow();
    expect(() => new DbManager(null, null)).toThrow();
    expect(() => new DbManager(undefined, null)).toThrow();

    expect(() => new DbManager('', undefined)).toThrow();
    expect(() => new DbManager(null, undefined)).toThrow();
    expect(() => new DbManager(undefined, undefined)).toThrow();

    expect(() => new DbManager('', [])).toThrow();
    expect(() => new DbManager(null, [])).toThrow();
    expect(() => new DbManager(undefined, [])).toThrow();

    expect(() => new DbManager('', [new DbTable('TableName', 'ID', 'ID')])).toThrow();
    expect(() => new DbManager(null, [new DbTable('TableName', 'ID', 'ID')])).toThrow();
    expect(() => new DbManager(undefined, [new DbTable('TableName', 'ID', 'ID')])).toThrow();
  });

  it('Should successfully initialize with these parameters', () => {
    expect(() => new DbManager('Database', [new DbTable('TableName', 'ID', 'ID')])).not.toThrow();
  });
});
