import { createSlice } from '@reduxjs/toolkit';
const filterInitialState = { filter: '' };
const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});
export const { changeFilter } = filterSlice.actions;
export const contactsReducer = filterSlice.reducer;
export const getFilter = state => state.filter;
