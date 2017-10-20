import * as chai from 'chai';
import { suite, test } from 'mocha-typescript';
import { DbManager, DbTable } from '../src';


@suite
export class DbManagerTest {

  @test('Testing of the test framework...')
  public t0() {
    chai.expect(true).to.be.eq(true);
  }

  @test('Declare DBManager without initialization')
  public t1() {
    const dbManager: DbManager = null;
    chai.expect(dbManager).to.be.eq(null, 'DbManager should be null');
  }

  @test('Initialize DBManager instance without parameters')
  public t2() {
    const dbManager = () => new DbManager(null, null);
    chai.expect(dbManager).to.throw(DbManager.NULL_OR_EMPTY_NAME);
    chai.expect(dbManager).not.to.throw(DbManager.NULL_OR_EMPTY_TABLES);
  }

  @test('Initialize DBManager with `empty string` db name and `null` tableInfo array')
  public t3() {
    const dbManager = () => new DbManager('', null);
    chai.expect(dbManager).to.throw(DbManager.NULL_OR_EMPTY_NAME);
    chai.expect(dbManager).not.to.throw(DbManager.NULL_OR_EMPTY_TABLES);
  }

  @test('Initialize DBManager with `undefined` db name and `null` tableInfo array')
  public t4() {
    const dbManager = () => new DbManager(undefined, null);
    chai.expect(dbManager).to.throw(DbManager.NULL_OR_EMPTY_NAME);
    chai.expect(dbManager).not.to.throw(DbManager.NULL_OR_EMPTY_TABLES);
  }

  @test('Initialize DBManager instance with valid name parameter and `null` tableInfo array')
  public t5() {
    const dbManager = () => new DbManager('db', null);
    chai.expect(dbManager).not.to.throw(DbManager.NULL_OR_EMPTY_NAME);
    chai.expect(dbManager).to.throw(DbManager.NULL_OR_EMPTY_TABLES);
  }

  @test('Initialize DBManager instance with valid name parameter and `undefined` tableInfo array')
  public t6() {
    const dbManager = () => new DbManager('db', undefined);
    chai.expect(dbManager).not.to.throw(DbManager.NULL_OR_EMPTY_NAME);
    chai.expect(dbManager).to.throw(DbManager.NULL_OR_EMPTY_TABLES);
  }

  @test('Initialize DBManager instance with valid name parameter and `empty array` tableInfo array')
  public t7() {
    const dbManager = () => new DbManager('db', []);
    chai.expect(dbManager).not.to.throw(DbManager.NULL_OR_EMPTY_NAME);
    chai.expect(dbManager).to.throw(DbManager.NULL_OR_EMPTY_TABLES);
  }

  @test('Initialize DBManager instance with only table parameter')
  public t8() {
    const dbManager = () => new DbManager(null, [new DbTable('TableName', 'id', 'id')]);
    chai.expect(dbManager).to.throw(DbManager.NULL_OR_EMPTY_NAME);
    chai.expect(dbManager).not.to.throw(DbManager.NULL_OR_EMPTY_TABLES);
  }

  @test('Initialize DBManager instance with valid parameters')
  public t9() {
    const dbManager = () => new DbManager('db', [new DbTable('TableName', 'id', 'id')]);
    chai.expect(dbManager).not.to.throw();
  }

}
