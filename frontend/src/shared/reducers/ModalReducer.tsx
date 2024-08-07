import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

interface StateInterface {
  isVisible: boolean;
  content: ReactNode | null;
}

const initialState = {
  isVisible: false,
  content: null,
};

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState: initialState,
  reducers: {
    showModal: (state, action) => {
      state.isVisible = true;
      state.content = action.payload;
    },
    hideModal: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;