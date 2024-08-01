import { configureStore } from "@reduxjs/toolkit";
import userSettingsReducer from './slices/user_settings_slice';

/** The Redux store */
const store = configureStore({
  reducer: {
    userSettingsSlice: userSettingsReducer,
  },
});

export default store;