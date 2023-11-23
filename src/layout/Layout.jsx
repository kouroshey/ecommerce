import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/partials/header'
import Footer from '../components/partials/footer'
import ProductModal from '../pages/shop/content/ProductModal'

import { useDispatch } from 'react-redux'
import { fetchProducts } from '../pages/shop/content/store'
import useCookie from '../hooks/useCookie'
import { setAccessToken, setRefreshToken } from '../pages/login/content/store'

const Layout = () => {
    const accessToken = useCookie('access_token')
    const refreshToken = useCookie('refresh_token')

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(setAccessToken(accessToken))
        dispatch(setRefreshToken(refreshToken))
    }, [])

    return (
        <>
            <ProductModal />
            <div className='flex flex-col'>
                <Header />
                <main className='px-8 sm:px-12 md:px-12 lg:px-24 bg-lightBg'>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout