import { Link } from "react-router-dom"
import NavIcons from "./NavIcons"
import { useState } from "react"

const NavMobile = () => {
    const [navCollapsed, setNavCollapsed] = useState(true)
    return (
        <div className={`${!navCollapsed ? 'bg-black/60 fixed h-full w-screen blur-lg' : ''}`}>
            <header className="">
            <ul>
                <li><Link to='/'>خانه</Link></li>
                <li><Link to='shop'>فروشگاه</Link></li>
                <li><Link to='#'>بلاگ</Link></li>
                <li><Link to='#'>ارتباط با ما</Link></li>
            </ul>
            <NavIcons />
        </header>
        </div>
    )
}

export default NavMobile