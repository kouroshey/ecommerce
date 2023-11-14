import { Outlet } from 'react-router-dom'
import Header from '../components/partials/header'
import Footer from '../components/partials/footer'

const Layout = () => {
    return (
        <div className='flex flex-col'>
            <Header />
            <main className='px-8 sm:px-12 md:px-12 lg:px-24 bg-lightBg'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout