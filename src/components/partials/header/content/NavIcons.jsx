import { IoSearchOutline, IoPersonOutline, IoBagOutline } from 'react-icons/io5'

const NavIcons = () => {
  return (
      <section className='flex gap-4 items-center text-h3 text-gray-7'>
          <IoBagOutline className='hover:text-pink hover:scale-105 transition-all'/>
          <IoPersonOutline className='hover:text-pink hover:scale-105 transition-all'/>
          <IoSearchOutline className='hover:text-pink hover:scale-105 transition-all'/>
    </section>
  )
}

export default NavIcons