import { configureStore } from '@reduxjs/toolkit';
import dropdownReducer from '../features/dropdown/TypeDropdownSlice';
import sortingReducer from '../features/sorting/SortingSlice';

export const store = configureStore({
  reducer: {
    dropdown: dropdownReducer,
    sorting: sortingReducer
  },
});
