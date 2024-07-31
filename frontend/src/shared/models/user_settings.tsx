import Model from "../abstracts/model";
import { Json } from "../types";

/**
 * User settings model. This model holds:
 * 1. Information about offline settings like if dark mode is on or not
 * 2. The ID of the logged in user (if there is a user logged in)
 */
export default class UserSettings extends Model {
  static darkModeEnabledJsonKey: string = 'dark_mode_enabled';
  static loggedUserIdJsonKey: string = 'logged_user_id';

  readonly darkModeEnabled?: boolean;
  readonly loggedUserId?: number;

  constructor({
    darkModeEnabled,
    loggedUserId,
  }: {
    darkModeEnabled?: boolean,
    loggedUserId?: number,
  }) {
    super();
    this.darkModeEnabled = darkModeEnabled;
    this.loggedUserId = loggedUserId;
  }

  static default = (): UserSettings => new UserSettings({ darkModeEnabled: true });

  toJson(): Json {
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