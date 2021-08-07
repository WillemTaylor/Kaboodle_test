import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: ''
};

export const dropdownSlice = createSlice({
    name: 'dropdown',
    initialState,
    reducers: {
        filterType: (state, action) => {
            return { ...state, type: action.payload };
        }
    }
})

export const { filterType } = dropdownSlice.actions;

export default dropdownSlice.reducer;