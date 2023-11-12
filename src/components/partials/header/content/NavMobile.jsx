import { Link } from "react-router-dom"
import NavIcons from "./NavIcons"

import { useDispatch, useSelector } from "react-redux"
import { getCollapsed } from "../../../../app/layout"

const NavMobile = () => {
    const collapsed = useSelector(getCollapsed)
    return (
        <div >
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