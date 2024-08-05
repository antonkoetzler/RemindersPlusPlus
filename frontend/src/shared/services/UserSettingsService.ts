import CrudService from '../interfaces/CrudService';
import UserSettings from '../models/UserSettings';
import { UnimplementedError } from '../misc/Errors';
import { injectable } from 'tsyringe';
import Database from '../Database';

@injectable()
export default class UserSettingsService implements CrudService<UserSettings> {
  database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  create(): UserSettings | null { throw new UnimplementedError(); }

  get(): UserSettings | null {
    console.log('We are here');
    return null;
  }

  select(): UserSettings[] { throw new UnimplementedError(); }
  update(): UserSettings | null { throw new UnimplementedError(); }
  delete(): boolean { throw new UnimplementedError(); }
}