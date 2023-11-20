import Layout from './layout/Layout'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import Error from './pages/404'
import Login from './pages/login/Login'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/login/content/login-reg'


const App = () => {
  return (
    <main>
      <Routes>
        <Route
          path='/'
          element={<Layout />}
          errorElement={<Error />}
        >
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='cart' element={<Cart />} />
        </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
      </Routes>
    </main>
  )
}

export default App