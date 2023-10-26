import { createSlice } from '@reduxjs/toolkit';
import contacts from '../contacts';

// 1. create slice
const contactSlice = createSlice({
  name: 'contacts',
  initialState: contacts,
  reducers: {
    addContact: (currentContacts, { payload }) => [
      ...currentContacts,
      { id: Math.random() * 100, ...payload }
    ],
    deleteContact: (currentContacts, { payload }) => [
      ...currentContacts.filter((contact) => contact.id !== payload.id)
    ],
    resetContact: () => []
  }
});

export const {
  addContact, deleteContact, resetContact, updateContact
} = contactSlice.actions;

export const { reducer: contactReducer } = contactSlice;

export const selectContacts = (state) => state.contacts; // selector
