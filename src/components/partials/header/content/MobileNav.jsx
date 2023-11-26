import { NavLink } from "react-router-dom"
import Socials from './Socials'
import CloseBtn from "../../../ui/CloseBtn"
import { IoHomeOutline, IoCartSharp, IoPersonOutline, IoCartOutline, IoNewspaperOutline, IoPeopleOutline } from "react-icons/io5";

const MobileNav = ({ collapsed, showMenuHandler }) => {
    const navbarCloseHandle = () => {
        showMenuHandler()
    }

    const menuItems = [
        {
            id: 1, title: 'خانه', icon: <IoHomeOutline />, path: '/',
        },
        {
            id: 2, title: 'فروشگاه', icon: <IoCartSharp />, path: '/shop'
        },
        {
            id: 3, title: 'پروفایل', icon: <IoPersonOutline />, path: '/register',
        },
        {
            id: 4, title: 'سبد خرید', icon: <IoCartOutline />, path: '/cart',
        },
        {
            id: 5, title: 'بلاگ', icon: <IoNewspaperOutline />, path: 'blog',
        },
        {
            id: 6, title: 'درباره‌ما', icon: <IoPeopleOutline />, path: 'about',
        },
    ]
    return (
        <ul
            className={`
            ${collapsed ? 'translate-x-96' : 'translate-x-0'} 
            absolute right-0 top-0 text-gray-7 transition duration-300 z-50 w-1/2 rounded-md h-screen bg-white pt-4 gap-4 flex flex-col`}
        >
            <li
                className="relative pb-2 border-b border-pink "
            >
                <span className="absolute left-2">
                    <CloseBtn closeFunction={navbarCloseHandle} />
                </span>
                <span className="pr-2">منو</span>
            </li>
            {menuItems.map(item => (
                <li key={item.id} className="w-full items-center flex pr-2 gap-4 hover:text-pink">
                    <span className="text-h4">{item.icon}</span>
                    <NavLink to={item.path}>{item.title}</NavLink>
                </li>
            ))}
            <li className="w-full absolute bottom-2 flex justify-center">
                <Socials />
            </li>
        </ul>
    )
}

export default MobileNav