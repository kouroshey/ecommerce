import { Suspense } from 'react';
import { lazy } from 'react';

const Layout = lazy(() => import('./layout/Layout'));
const Home = lazy(() => import('./pages/home/Home'));
const Shop = lazy(() => import('./pages/shop/Shop'));
const Cart = lazy(() => import('./pages/cart/Cart'));
const Error = lazy(() => import('./pages/404'));
const Login = lazy(() => import('./pages/login/Login'));
const Register = lazy(() => import('./pages/login/Register'));
const Blog = lazy(() => import('./pages/blog/Blog'));
const AboutUs = lazy(() => import('./pages/aboutus/AboutUs'));

import { Route, Routes } from 'react-router-dom'
import CSpinner from './components/ui/CSpinner';

const App = () => {
  return (
    <main>
      <Routes>
        <Route
          path='/*'
          element={<Layout />}
          errorElement={<Error />}
        >
          <Route
            index
            element={<Suspense fallback={<CSpinner />}>
              <Home />
            </Suspense>} />
          <Route
            path='shop'
            element={<Suspense fallback={<CSpinner />}>
              <Shop />
            </Suspense>}
          />
          <Route
            path='cart'
            element={<Suspense fallback={<CSpinner />}>
              <Cart />
            </Suspense>}
          />
          <Route
            path='blog'
            element={<Suspense fallback={<CSpinner />}>
              <Blog />
            </Suspense>}
          />
          <Route
            path='about'
            element={<Suspense fallback={<CSpinner />}>
              <AboutUs />
            </Suspense>}
          />
        </Route>
        <Route
          path='/login'
          element={<Suspense fallback={<CSpinner />}>
            <Login />
          </Suspense>}
        />
        <Route
          path='/register'
          element={<Suspense fallback={<CSpinner />}>
            <Register />
          </Suspense>}
        />
        <Route
          path='*' element={<Suspense fallback={<CSpinner />}><Error /></Suspense>} />
      </Routes>
    </main>
  )
}

export default App