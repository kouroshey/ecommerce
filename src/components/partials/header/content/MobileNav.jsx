import { NavLink } from "react-router-dom"
import { IoCloseSharp } from 'react-icons/io5'
import Socials from './Socials'
import CloseBtn from "../../../ui/CloseBtn"

const MobileNav = ({ collapsed, showMenuHandler }) => {
    const navbarCloseHandle = () => {
        showMenuHandler()
    }
    return (
        <ul
            className={`
            ${collapsed ? 'translate-x-96' : 'translate-x-0'} 
            absolute right-0 top-0 text-gray-7 transition duration-300 z-50 w-1/2 rounded-md h-screen bg-white pt-4 px-4 gap-4 flex flex-col`}
        >
            <li
                className="after:w-full relative after:absolute after:h-[1px] after:bg-pink after:-bottom-2 after:right-0"
            >
                <span className="absolute left-0">
                    <CloseBtn closeFunction={navbarCloseHandle} />
                </span>
                <span>منو</span>
            </li>
            <li className="w-full hover:text-pink">
                <NavLink to='/'>خانه</NavLink>
            </li>
            <li className="w-full hover:text-pink">
                <NavLink to='shop'>فروشگاه</NavLink>
            </li>
            <li className="w-full hover:text-pink">
                <NavLink to='#'>بلاگ</NavLink>
            </li>
            <li className="w-full hover:text-pink">
                <NavLink to='#'>ارتباط با ما</NavLink>
            </li>
            <li className="flex justify-center w-full mt-16">
                <Socials />
            </li>
        </ul>
    )
}

export default MobileNav