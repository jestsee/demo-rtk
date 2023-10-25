import { useDispatch } from 'react-redux';
import { resetContact } from '../redux/contactSlice';

const EmptyContactButton = () => {
  const dispatch = useDispatch();
  return (
    <button type="button" onClick={() => dispatch(resetContact())}>
      Empty Contact
    </button>
  );
};

export default EmptyContactButton;
