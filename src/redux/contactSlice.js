import { createSlice } from '@reduxjs/toolkit';
import contacts from '../contacts';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contacts,
  reducers: {
    addContact: (currentContacts, { payload }) => [
      ...currentContacts,
      { id: currentContacts.length + 1, ...payload }
    ],
    deleteContact: (currentContacts, { payload }) => [
      ...currentContacts.filter((contact) => contact.id !== payload.id)
    ],
    updateContact: (currentContacts, { payload }) => [
      ...currentContacts.map((contact) => {
        if (contact.id !== payload.id) {
          return contact;
        }
        return { ...contact, ...payload };
      })
    ],
    resetContact: () => []
  }
});

export const { addContact, deleteContact, resetContact, updateContact } = contactSlice.actions;

export const { reducer: contactReducer } = contactSlice;

export const selectContacts = (state) => state.contacts; // selector
