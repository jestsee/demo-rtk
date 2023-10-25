import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/contactSlice';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import EmptyContactButton from './EmptyContactButton';

const ContactPage = () => {
  const contacts = useSelector(selectContacts);
  return (
    <>
      <h1>This is contact page</h1>
      <ContactForm />
      <ContactList contacts={contacts} />
      <EmptyContactButton />
    </>
  );
};

export default ContactPage;
