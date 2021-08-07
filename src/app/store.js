import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import listingReducer from '../features/listing/ListingSlice';
import dropdownReducer from '../features/dropdown/TypeDropdownSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    listing: listingReducer,
    dropdown: dropdownReducer
  },
});
