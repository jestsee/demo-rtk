import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';

// 2. configure store
const store = configureStore({ reducer: { contacts: contactReducer } });

export default store;
