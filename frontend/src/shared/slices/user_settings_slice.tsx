import { createSlice } from '@reduxjs/toolkit';

export const userSettingsSliceName = 'user_settings_slice';

/** Redux slice to manage and apply the options of the [UserSettings] model */
const userSettingsSlice = createSlice({
  name: userSettingsSliceName,
  initialState: null,
  reducers: {
    foo: (state, action) => {
      console.log('Working');
    },
  }
});

export const { foo } = userSettingsSlice.actions;

export default userSettingsSlice.reducer;