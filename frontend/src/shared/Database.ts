import * as SQLite from 'expo-sqlite';
import UserSettings from './models/UserSettings';
import { JSON } from '../core/types';
import DatabaseConditions from './models/DatabaseConditions';

export default class Database {
  /** Static variables containing each table name */
  static userSettingsTableName = 'user_settings';

  static #instance: SQLite.SQLiteDatabase;

  /** Returns the an instance of [Database] and initializes [#instance] if it hasen't already been initialized */
  static getInstance(): Database {
    if (!Database.#instance) {
      Database.#initializeDatabase();
    }

    return new Database();
  }

  /** Initializes the SQLite database */
  static #initializeDatabase(): void {
    if (Database.#instance) return;

    Database.#instance = SQLite.openDatabaseSync('reminders_plus_plus.db');

    const database = new Database();

    /** [UserSettings] table */
    Database.#instance.execSync(`
      CREATE TABLE IF NOT EXISTS ${Database.userSettingsTableName}(
        id                                     INTEGER PRIMARY KEY,
        ${UserSettings.darkModeEnabledJsonKey} INTEGER,
        ${UserSettings.loggedUserIdJsonKey}    INTEGER
      );
    `);
    if (!database.get(Database.userSettingsTableName)) {
      database.insert(Database.userSettingsTableName, UserSettings.default().toJson());
    }
  }

  /** Get operation: Returns the first row of said table */
  get(table: string, conditions?: JSON): JSON | null {
    const formattedConditions = conditions != null ? new DatabaseConditions(conditions) : null;

    return Database.#instance.getFirstSync(
      `SELECT * FROM ${table}`,
      conditions ?? {},
    );
  }

  /** INSERT query. Returns the ID of the created object or [null] if unsuccessful */
  insert(table: string, data: JSON): number | null {
    const formattedConditions = new DatabaseConditions(data);

    const statement = Database.#instance.prepareSync(
      `INSERT INTO ${table} (${formattedConditions.atributesToString()}) VALUES (${formattedConditions.placeholdersToString()})`,
    );

    statement.executeSync(formattedConditions.values);

    return null;
  }

  /** UPDATE query. Returns the new row or [null] is unsuccessful */
  update(table: string, data: JSON, conditions?: JSON): JSON | null {
    const formattedData = new DatabaseConditions(data).atributesAndValuesToString();
    const formattedConditions = conditions != null ? new DatabaseConditions(conditions).atributesAndValuesToString : null;

    try {
      console.log(`UPDATE ${table} SET ${formattedData}${formattedConditions != null ? ` WHERE ${formattedConditions}` : ''}`);
      const statement = Database.#instance.prepareSync(
        `UPDATE ${table} SET ${formattedData}${formattedConditions != null ? ` WHERE ${formattedConditions}` : ''}`,
      );

      const id = statement.executeSync().lastInsertRowId;

      return this.get(table, { id: id });
    } catch (error) {
      console.log(`[Database.update]: Error updating: ${error}`);
      return null;
    }
  }
}