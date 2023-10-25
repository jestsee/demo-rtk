import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/contactSlice';
import ContactList from './ContactList';

const ContactPage = () => {
  const contacts = useSelector(selectContacts);
  return (
    <>
      <h1>This is contact page</h1>
      <ContactList contacts={contacts} />
    </>
  );
};

export default ContactPage;
