import { configureStore } from '@reduxjs/toolkit';
import userSettingsReducer from './reducers/UserSettingsReducer';

const reduxStore = configureStore({
  reducer: {
    userSettingsReducer: userSettingsReducer,
  },
});

export default reduxStore;