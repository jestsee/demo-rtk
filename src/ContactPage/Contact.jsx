import PropTypes from 'prop-types';

const Contact = ({ contact: { name, phone } }) => (
  <li>
    {name}
    {' '}
    -
    {' '}
    {phone}
  </li>
);

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }).isRequired
};

export default Contact;
