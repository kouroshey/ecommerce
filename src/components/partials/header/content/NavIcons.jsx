import { IoSearchOutline, IoPersonOutline, IoBagOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Basket from './Basket'
import UserMenu from './userMenu'

import { getAccessToken } from '../../../../pages/login/content/store'
import { useSelector } from 'react-redux'

const NavIcons = ({ location, isScrolling, isHeaderNav }) => {
  const accessToken = useSelector(getAccessToken)
  return (
    <ul className={`${location === '/' && !isScrolling && isHeaderNav ? 'text-white' : 'text-gray-7'} flex gap-4 items-center text-h3`}>
      <li className='relative group'>
        <Link to='cart' className=''>
          <IoBagOutline className='hover:text-pink hover:scale-105 transition-all' />
        </Link>
        <div className='absolute top-5 right-0 w-96 hidden group-hover:flex'>
          <Basket />
        </div>
      </li>
      <li className='relative group'>
        <Link to='#'>
          <IoPersonOutline className='hover:text-pink hover:scale-105 transition-all' />
        </Link>
        <div className='absolute top-5 right-0 w-96 hidden group-hover:flex'>
          <UserMenu isLogin={accessToken ? true : false} />
        </div>
      </li>
      <li>
        <Link to='#'>
          <IoSearchOutline className='hover:text-pink hover:scale-105 transition-all' />
        </Link>
      </li>
    </ul>
  )
}

export default NavIcons