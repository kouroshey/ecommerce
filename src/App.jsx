import React from 'react'
import Header from './components/partials/header'
import Footer from './components/partials/footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App