import { IoSearchOutline, IoPersonOutline, IoBagOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Basket from './Basket'
import UserMenu from './UserMenu'

const NavIcons = () => {
  return (
    <ul className='flex gap-4 items-center text-h3 text-gray-7'>
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
          <UserMenu />
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