import { IoMenu } from "react-icons/io5"

const MenuIcon = ({ collapsed, showMenuHandler }) => {
    const showMenu = () => {
        showMenuHandler()
    }
    return (
        <div className="text-h2 text-gray-7" onClick={showMenu}>
            <IoMenu />
        </div>
    )
}

export default MenuIcon