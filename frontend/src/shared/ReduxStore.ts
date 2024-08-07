import { configureStore } from '@reduxjs/toolkit';
import ModalReducer from './reducers/ModalReducer';
import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';

const reduxStore = configureStore({
  reducer: {
    modalReducer: ModalReducer,
  },
  // So we may pass components within the reducer actions
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export default reduxStore;