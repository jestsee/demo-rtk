import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactSlice';

const Contact = ({ contact }) => {
  const dispatch = useDispatch(); // 5. dispatch function to update the state
  return (
    <li>
      {contact.name}
      {' '}
      -
      {' '}
      {contact.phone}
      {' '}
      <span><button style={{ backgroundColor: 'red' }} onClick={() => dispatch(deleteContact(contact))} type="button">Remove</button></span>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }).isRequired
};

export default Contact;
