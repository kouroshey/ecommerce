import Layout from './layout/Layout'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element= {<Layout />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App