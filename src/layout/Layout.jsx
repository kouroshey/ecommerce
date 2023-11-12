import { Outlet } from 'react-router-dom'
import Header from '../components/partials/header'
import Footer from '../components/partials/footer'

const Layout = () => {
    return (
        <>
            <Header />
            <main className='px-8 sm:px-12 md:px-12 lg:px-24 bg-lightBg'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout