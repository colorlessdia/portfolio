import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './libs/redux/store';
import { Provider } from 'react-redux';
import App from './App';
import './global.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
