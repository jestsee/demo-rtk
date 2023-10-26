import { createSlice } from '@reduxjs/toolkit';
import contactApi from './contactApi';

// 1. create slice
const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (currentContacts, { payload }) => [
      ...currentContacts,
      { id: Math.random() * 100, ...payload }
    ],
    deleteContact: (currentContacts, { payload }) => [
      ...currentContacts.filter((contact) => contact.id !== payload.id)
    ],
    resetContact: () => []
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      contactApi.endpoints.getContacts.matchFulfilled,
      (_, { payload }) => payload.contacts
    );
  }
});

export const {
  addContact, deleteContact, resetContact, updateContact
} = contactSlice.actions;

export const { reducer: contactReducer } = contactSlice;

export const selectContacts = (state) => state.contacts; // selector
