import { NavLink } from "react-router-dom"

const Navbar = ({ width, breakPoints, isScrolling, location, isHeaderNav }) => {
    const navItems = [
        {
            id: 1, title: 'خانه', path: '/',
        },
        {
            id: 2, title: 'فروشگاه', path: '/shop',
        },
        {
            id: 3, title: 'بلاگ', path: '/blog',
        },
        {
            id: 4, title: 'درباره ما', path: '/about',
        }

    ]
    return (
        <ul className={`${width < breakPoints.lg ? "gap-6" : 'gap-12'} flex w-full justify-center text-h4`}>
            {navItems.map(item => (
                <li key={item.id} className={`${location === '/' && !isScrolling && isHeaderNav ? 'text-white' : 'text-gray-7'}`}>
                    <NavLink
                        className={({ isActive, isPending }) => isActive ? 'after:w-full relative after:absolute after:h-[1px] after:bg-pink after:-bottom-2 after:right-0' : 'hover:text-pink hover:scale-105 transition-all'}
                        to={item.path}
                    >
                        {item.title}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}

export default Navbar