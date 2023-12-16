import { IoMenu } from "react-icons/io5"

interface MenuIconProps {
    collapsed: boolean
    showMenuHandler: () => void
    location: string
    isScrolling: boolean
    isHeaderNav: boolean
}

const MenuIcon = ({ collapsed, showMenuHandler, location, isScrolling, isHeaderNav }: MenuIconProps) => {
    const showMenu = () => {
        showMenuHandler()
    }
    return (
        <div className={`text-pink text-h3 md:text-h2 ${location === '/' && !isScrolling && isHeaderNav ? 'text-white' : 'text-gray-7'} `} onClick={showMenu}>
            <IoMenu />
        </div>
    )
}

export default MenuIcon