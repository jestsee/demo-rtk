import { Provider } from 'react-redux';
import ContactPage from './ContactPage/ContactPage';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <ContactPage />
  </Provider>
);

export default App;
