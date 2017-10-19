[encrypted-db](../README.md) > ["Db/DbManager"](../modules/_db_dbmanager_.md) > [DbManager](../classes/_db_dbmanager_.dbmanager.md)



# Class: DbManager

*__class__*: DbManager

*__description__*: Initializes IndexedDB instance, and creates tables

*__author__*: carathorys


## Index

### Constructors

* [constructor](_db_dbmanager_.dbmanager.md#constructor)


### Properties

* [IndxDb](_db_dbmanager_.dbmanager.md#indxdb)
* [db](_db_dbmanager_.dbmanager.md#db)
* [dbName](_db_dbmanager_.dbmanager.md#dbname)
* [dbOpenedCallbackList](_db_dbmanager_.dbmanager.md#dbopenedcallbacklist)
* [hasInitialized](_db_dbmanager_.dbmanager.md#hasinitialized)
* [tInfos](_db_dbmanager_.dbmanager.md#tinfos)


### Methods

* [OnDatabaseOpened](_db_dbmanager_.dbmanager.md#ondatabaseopened)
* [OpenInitDB](_db_dbmanager_.dbmanager.md#openinitdb)
* [ResetDB](_db_dbmanager_.dbmanager.md#resetdb)
* [_addTables](_db_dbmanager_.dbmanager.md#_addtables)
* [_databaseOpened](_db_dbmanager_.dbmanager.md#_databaseopened)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new DbManager**(dbName: *`string`*, tInfos: *[TableInfo](_db_tables_tableinfo_.tableinfo.md)[]*): [DbManager](_db_dbmanager_.dbmanager.md)


*Defined in [Db/DbManager.ts:14](https://github.com/carathorys/encrypted-db/blob/725b9f8/src/Db/DbManager.ts#L14)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| dbName | `string`   |  - |
| tInfos | [TableInfo](_db_tables_tableinfo_.tableinfo.md)[]   |  - |





**Returns:** [DbManager](_db_dbmanager_.dbmanager.md)

---


## Properties
<a id="indxdb"></a>

### «Private» IndxDb

**●  IndxDb**:  *`IDBFactory`* 

*Defined in [Db/DbManager.ts:14](https://github.com/carathorys/encrypted-db/blob/725b9f8/src/Db/DbManager.ts#L14)*





___

<a id="db"></a>

###  db

**●  db**:  *`IDBDatabase`* 

*Defined in [Db/DbManager.ts:10](https://github.com/carathorys/encrypted-db/blob/725b9f8/src/Db/DbManager.ts#L10)*





___

<a id="dbname"></a>

### «Protected» dbName

**●  dbName**:  *`string`* 

*Defined in [Db/DbManager.ts:16](https://github.com/carathorys/encrypted-db/blob/725b9f8/src/Db/DbManager.ts#L16)*





___

<a id="dbopenedcallbacklist"></a>

### «Private» dbOpenedCallbackList

**●  dbOpenedCallbackList**:  *`Array`.<`function`>* 

*Defined in [Db/DbManager.ts:13](https://github.com/carathorys/encrypted-db/blob/725b9f8/src/Db/DbManager.ts#L13)*





___

<a id="hasinitialized"></a>

### «Private» hasInitialized

**●  hasInitialized**:  *`boolean`*  = false

*Defined in [Db/DbManager.ts:12](https://github.com/carathorys/encrypted-db/blob/725b9f8/src/Db/DbManager.ts#L12)*





___

<a id="tinfos"></a>

### «Protected» tInfos

**●  tInfos**:  *[TableInfo](_db_tables_tableinfo_.tableinfo.md)[]* 

*Defined in [Db/DbManager.ts:16](https://github.com/carathorys/encrypted-db/blob/725b9f8/src/Db/DbManager.ts#L16)*





___


## Methods
<a id="ondatabaseopened"></a>

### «Private» OnDatabaseOpened

► **OnDatabaseOpened**(callback: *`function`*): `void`



*Defined in [Db/DbManager.ts:31](https://github.com/carathorys/encrypted-db/blob/725b9f8/src/Db/DbManager.ts#L31)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | `function`   |  - |





**Returns:** `void`





___

<a id="openinitdb"></a>

### «Private» OpenInitDB

► **OpenInitDB**(): `void`



*Defined in [Db/DbManager.ts:25](https://github.com/carathorys/encrypted-db/blob/725b9f8/src/Db/DbManager.ts#L25)*


*__description__*: Opens and initializes IndexedDB, and updates it if it's necessary





**Returns:** `void`





___

<a id="resetdb"></a>

###  ResetDB

► **ResetDB**(): `void`



*Defined in [Db/DbManager.ts:62](https://github.com/carathorys/encrypted-db/blob/725b9f8/src/Db/DbManager.ts#L62)*





**Returns:** `void`





___

<a id="_addtables"></a>

### «Private» _addTables

► **_addTables**(e: *`any`*): `void`



*Defined in [Db/DbManager.ts:46](https://github.com/carathorys/encrypted-db/blob/725b9f8/src/Db/DbManager.ts#L46)*




**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| e | `any`   |  - |





**Returns:** `void`





___

<a id="_databaseopened"></a>

### «Private» _databaseOpened

► **_databaseOpened**(e: *`any`*): `void`



*Defined in [Db/DbManager.ts:38](https://github.com/carathorys/encrypted-db/blob/725b9f8/src/Db/DbManager.ts#L38)*




**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| e | `any`   |  IDBRequest 'onsuccess' event |





**Returns:** `void`





___


