/** Used for interacting with the local database to get & update the user's settings */

import { container } from 'tsyringe';
import UserSettingsService from '../services/UserSettingsService';
import { Appearance } from 'react-native';

export default class UserSettingsHelper {
  static toggleDarkMode(): void {
    const userSettingsService = container.resolve(UserSettingsService);
    const currentUserSettings = userSettingsService.get()!;

    Appearance.setColorScheme(
      Appearance.getColorScheme() == 'light' ? 'dark' : 'light',
    );

    userSettingsService.update(
      currentUserSettings.copyWith({
        darkModeEnabled: !currentUserSettings.darkModeEnabled,
      }),
    );
  }
}