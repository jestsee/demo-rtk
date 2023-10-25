import PropTypes from 'prop-types';
import Contact from './Contact';

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map((contact) => (
      <Contact key={contact.id} contact={contact} />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(Contact.propTypes.contact).isRequired
};

export default ContactList;
