import { createSlice } from '@reduxjs/toolkit';
import UserSettings from '../models/UserSettings';
import { container } from 'tsyringe';
import UserSettingsService from '../services/UserSettingsService';
import { Appearance } from 'react-native';

const initialState: UserSettings | null = null;

const userSettingsSlice = createSlice({
  name: 'userSettingReducer',
  initialState,
  reducers: {
    toggleDarkMode(state) {
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
    },
  },
});

export const { toggleDarkMode } = userSettingsSlice.actions;
export default userSettingsSlice.reducer;