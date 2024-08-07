import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import MenuItem from '../models/MenuItem';

interface StateInterface {
  isVisible: boolean;
  items: MenuItem[] | null;
}

const initialState: StateInterface = {
  isVisible: false,
  items: null,
};

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState: initialState,
  reducers: {
    showModal: (state, action: PayloadAction<MenuItem[]>) => {
      state.isVisible = true;
      state.items = action.payload;
    },
    hideModal: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;