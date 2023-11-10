import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import store from './app/store.js'
import { Provider } from 'react-redux'

import { router } from './router/router.jsx'
import { RouterProvider as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router router={router}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </StrictMode>,
)
