import UserSettings from '../models/UserSettings';
import { UnimplementedError } from '../../core/misc/Errors';
import { injectable } from 'tsyringe';
import Database from '../Database';
import { JSON } from '../../core/types';
import CrudService from '../../core/interfaces/CrudService';

@injectable()
export default class UserSettingsService implements CrudService<UserSettings> {
  database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  create(): UserSettings | null { throw new UnimplementedError(); }

  get(): UserSettings | null {
    return UserSettings.fromJson(this.database.get(Database.userSettingsTableName)!);
  }

  select(): UserSettings[] { throw new UnimplementedError(); }

  update(userSettings: UserSettings): UserSettings | null {
    const json: JSON = this.database.update(
      Database.userSettingsTableName,
      userSettings.toJson(),
    )!;

    return UserSettings.fromJson(json);
  }

  delete(): boolean { throw new UnimplementedError(); }
}