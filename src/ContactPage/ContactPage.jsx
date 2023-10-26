import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../redux/contactApi';
import { selectContacts } from '../redux/contactSlice';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import EmptyContactButton from './EmptyContactButton';

const ContactPage = () => {
  const {
    isFetching, isError, error, data
  } = useGetContactsQuery();
  const contacts = useSelector(selectContacts); // 4.
  return (
    <>
      <h1>This is contact page</h1>
      <ContactForm />
      {isError && <p style={{ color: 'red' }}>{JSON.stringify(error)}</p>}
      {isFetching && <p>Loading...</p>}
      {data && <ContactList contacts={contacts} />}
      <EmptyContactButton />
    </>
  );
};

export default ContactPage;
