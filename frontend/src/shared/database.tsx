import * as SQLite from 'expo-sqlite';
import UserSettings from './models/user_settings';
import { Json } from './types';
import DatabaseConditions from './models/database_conditions';

/** Singleton instance of the local SQLite database */
export default class Database {
  /** Static members of all of tables in [Database] */
  static userSettingsTableName: string = 'user_settings';

  /** The SQLite database */
  private static instance: SQLite.SQLiteDatabase;

  /**
   * Returns a [Database] object (and initializes [instance] if it hasen't. already been initialized
   * 
   * After using [getInstance], you may use [Database]'s functions (i.e. [select], [get], [insert], etc)
   */
  static getInstance(): Database {
    if (!Database.instance) Database.initializeDatabase();
    return new Database();
  }

  /** Initializes the database and all of its tables */
  static initializeDatabase(): void {
    if (Database.instance) return;
    Database.instance = SQLite.openDatabaseSync('reminders_plus_plus.db');

    const database = new Database();

    /**
     * User settings table. This table holds:
     * 1. Information about offline settings like if dark mode is on or not
     * 2. The ID of the logged in user (if there is a user logged in)
     */
    Database.instance.execSync(`
      CREATE TABLE IF NOT EXISTS ${Database.userSettingsTableName}(
        ${UserSettings.darkModeEnabledJsonKey} INTEGER,
        ${UserSettings.loggedUserIdJsonKey} INTEGER
      );
    `);
    if (!database.get(Database.userSettingsTableName)) {
      database.insert(Database.userSettingsTableName, UserSettings.default().toJson());
    }
  }

  /** Returns the first item of a SELECT query or [null] if there are no rows in said table */
  get = (table: string): Json | null => Database.instance.getFirstSync(`SELECT * FROM ${table}`);

  /** INSERT query. Returns the ID of the created object or [null] if unsucessful */
  insert(table: string, data: Json): number | null {
    const formattedConditions = new DatabaseConditions(data);

    const statement = Database.instance.prepareSync(
      `INSERT INTO ${table} (${formattedConditions.atributesToString()}) VALUES (${formattedConditions.placeholdersString()})`,
    );

    statement.executeSync(formattedConditions.values);

    return null;
  }
}