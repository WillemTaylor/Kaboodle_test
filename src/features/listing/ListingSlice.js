import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  label: ''
};

export const listingSlice = createSlice({
    name: 'listing',
    initialState,
    reducers: {
        filterLabel: (state, action) => {
            return { ...state, type: action.payload };
        },
    }
})

export const { filterLabel } = listingSlice.actions;

export default listingSlice.reducer;