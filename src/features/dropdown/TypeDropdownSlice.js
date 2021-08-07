import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: []
};

export const dropdownSlice = createSlice({
    name: 'dropdown',
    initialState,
    reducers: {
        filterType: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const { filterType } = dropdownSlice.actions;

export default dropdownSlice.reducer;