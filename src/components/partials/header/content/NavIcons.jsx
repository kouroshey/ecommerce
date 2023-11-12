import { IoSearchOutline, IoPersonOutline, IoBagOutline } from 'react-icons/io5'

const NavIcons = () => {
  return (
      <section className='flex gap-4 items-center text-h3 text-gray-7'>
          <IoBagOutline />
          <IoPersonOutline />
          <IoSearchOutline />
    </section>
  )
}

export default NavIcons