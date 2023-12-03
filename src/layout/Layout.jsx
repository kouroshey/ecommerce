import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/partials/header'
import Footer from '../components/partials/footer'
import ProductModal from '../pages/shop/content/ProductModal'
import { ToastContainer } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, getProductsStatus } from '../pages/shop/content/store'
import CSpinner from '../components/ui/CSpinner'

const Layout = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const status = useSelector(getProductsStatus)

    return (
        <>
            {status === 'loading' ?
                <CSpinner /> :
                <>
                    <ToastContainer toastClassName='font-iransans' className='w-1/2 md:w-max' />
                    <ProductModal />
                    <div className='flex flex-col'>
                        <Header />
                        <main className='bg-lightBg'>
                            <Outlet />
                        </main>
                        <Footer />
                    </div>
                </>
            }

        </>
    )
}

export default Layout