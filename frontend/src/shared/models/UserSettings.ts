import Model from '../abstracts/Model';
import { JSON } from '../types';

export default class UserSettings extends Model {
  static darkModeEnabledJsonKey: string = 'dark_mode_enabled';
  static loggedUserIdJsonKey: string = 'logged_user_id';

  readonly darkModeEnabled: boolean;
  readonly loggedUserId?: number;

  constructor({
    darkModeEnabled,
    loggedUserId,
  }: {
    darkModeEnabled: boolean,
    loggedUserId?: number,
  }) {
    super();
    this.darkModeEnabled = darkModeEnabled;
    this.loggedUserId = loggedUserId;
  }

  static default = (): UserSettings => new UserSettings({ darkModeEnabled: true });

  toJson(): JSON {
    return {
      [UserSettings.darkModeEnabledJsonKey]: this.darkModeEnabled,
      [UserSettings.loggedUserIdJsonKey]: this.loggedUserId,
    };
  }

  toString(): string {
    return `UserSettings(
      darkModeEnabled: ${this.darkModeEnabled},
      loggedUserId: ${this.loggedUserId},
    );`;
  }
}