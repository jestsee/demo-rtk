import { configureStore } from '@reduxjs/toolkit';
import contactApi from './contactApi';
import { contactReducer } from './contactSlice';

// 2. configure store
const store = configureStore({
  reducer: { [contactApi.reducerPath]: contactApi.reducer, contacts: contactReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(contactApi.middleware)
});

export default store;
