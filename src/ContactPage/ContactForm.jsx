import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactSlice';

const ContactForm = () => {
  const initialContact = { name: '', phone: '' };
  const dispatch = useDispatch();
  const [contact, setContact] = useState(initialContact);

  const resetContact = () => {
    setContact(initialContact);
  };

  const handleInputChange = (event) => {
    const { target } = event;
    setContact((currentContact) => ({ ...currentContact, [target.name]: target.value }));
  };

  const handleAddContact = async () => {
    dispatch(addContact(contact));
    resetContact();
  };

  return (
    <>
      <label htmlFor="name">
        Name:
        <br />
        <input
          type="text"
          id="name"
          placeholder="name"
          name="name"
          value={contact.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <br />
      <label htmlFor="phoneNumber">
        Phone Number:
        <br />
        <input
          type="number"
          id="phoneNumber"
          placeholder="phone number"
          name="phone"
          value={contact.phone}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <br />
      <button className="add-contact-button" type="button" onClick={handleAddContact}>
        Add Contact
      </button>
    </>
  );
};
export default ContactForm;
