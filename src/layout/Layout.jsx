import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/partials/header'
import Footer from '../components/partials/footer'
import ProductModal from '../pages/shop/content/ProductModal'
import { ToastContainer } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, getProductsStatus } from '../pages/shop/content/store'
import Spinner from '../components/ui/Spinner'

const Layout = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const status = useSelector(getProductsStatus)
    console.log(status);

    return (
        <>
            {status === 'loading' ?
                <Spinner /> :
                <>
                    <ToastContainer toastClassName='font-iransans' />
                    <ProductModal />
                    <div className='flex flex-col'>
                        <Header />
                        <main className='px-8 sm:px-12 md:px-12 lg:px-24 bg-lightBg'>
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