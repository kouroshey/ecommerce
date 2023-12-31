import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "normalize.css/normalize.css";
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

import { store } from './app/index.js';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
