import { IoSearchOutline, IoPersonOutline, IoBagOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const NavIcons = () => {
  return (
      <section className='flex gap-4 items-center text-h3 text-gray-7'>
          <Link to='cart'><IoBagOutline className='hover:text-pink hover:scale-105 transition-all'/></Link>
          <Link to='#'><IoPersonOutline className='hover:text-pink hover:scale-105 transition-all'/></Link>
          <Link to='#'><IoSearchOutline className='hover:text-pink hover:scale-105 transition-all'/></Link>
    </section>
  )
}

export default NavIcons