import { Provider } from 'react-redux';
import ContactPage from './ContactPage/ContactPage';
import store from './redux/store';

const App = () => (
  // 3. wrap provider
  <Provider store={store}>
    <ContactPage />
  </Provider>
);

export default App;
