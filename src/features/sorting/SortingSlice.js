import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: 'asc'
};

export const sortingSlice = createSlice({
    name: 'sorting',
    initialState,
    reducers: {
        filterSort: (state, action) => {
            return { ...state, type: action.payload };
        }
    }
})

export const { filterSort } = sortingSlice.actions;

export default sortingSlice.reducer;