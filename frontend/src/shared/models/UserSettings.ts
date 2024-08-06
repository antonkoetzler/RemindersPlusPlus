import Model from '../../core/abstracts/Model';
import { JSON } from '../../core/types';

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

  static fromJson(json: JSON): UserSettings {
    return new UserSettings({
      darkModeEnabled: json[UserSettings.darkModeEnabledJsonKey] == 1 ? true : false,
      loggedUserId: json[UserSettings.loggedUserIdJsonKey],
    });
  }

  toJson(): JSON {
    return {
      [UserSettings.darkModeEnabledJsonKey]: this.darkModeEnabled,
      [UserSettings.loggedUserIdJsonKey]: this.loggedUserId ?? '', // SQLite doesn't like null
    };
  }

  copyWith({
    darkModeEnabled,
    loggedUserId,
  }: {
    darkModeEnabled?: boolean,
    loggedUserId?: number,
  }): UserSettings {
    return new UserSettings({
      darkModeEnabled: darkModeEnabled ?? this.darkModeEnabled,
      loggedUserId: loggedUserId ?? this.loggedUserId,
    });
  }


  toString(): string {
    return `UserSettings(
      darkModeEnabled: ${this.darkModeEnabled},
      loggedUserId: ${this.loggedUserId},
    );`;
  }
}