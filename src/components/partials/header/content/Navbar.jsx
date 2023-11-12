import { NavLink } from "react-router-dom"

const Navbar = ({width, breakPoints}) => {
    return (
        <ul className={`${width < breakPoints.lg ? "gap-6" : 'gap-12'} flex w-full justify-center text-h4`}>
            <li><NavLink to='/'>خانه</NavLink></li>
            <li><NavLink to='shop'>فروشگاه</NavLink></li>
            <li><NavLink to='#'>بلاگ</NavLink></li>
            <li><NavLink to='#'>ارتباط با ما</NavLink></li>
        </ul>
    )
}

export default Navbar