import MobileNav from "./MobileNav"
import Logo from "./Logo"
import { IoMenuOutline } from 'react-icons/io5'

const MobileHeader = () => {
  return (
    <div className="w-full h-full flex justify-between items-start bg-white rounded-md px-8 py-5 transition-all ease-in-out">
      {/* menu icon */}
      <section className="flex flex-1 w-full justify-start">
        <IoMenuOutline />
      </section>
      {/*logo */}
      <section className="flex flex-1 justify-end"><Logo /></section>
    </div>
  )
}

export default MobileHeader