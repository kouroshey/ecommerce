import MobileNav from "./MobileNav"
import Logo from "./Logo"
import MenuIcon from "./menuIcon"
import { useState } from "react"

const MobileHeader = () => {
  const [collapsed, setCollapsed] = useState(true)
  const showMenuHandler = () => {
    console.log(collapsed);
    setCollapsed(prev => prev = !prev)
  }
  return (
    <>
      <div className="sticky top-0 z-50 h-full flex justify-between items-start bg-white rounded-md px-8 py-5 transition-all ease-in-out">
        {/* menu icon */}
        <div className="flex flex-1 justify-start">
          <MenuIcon showMenuHandler={showMenuHandler} collapsed={collapsed} />
        </div>
        {/* navbar overlay */}
        <div
          onClick={showMenuHandler}
          className={`absolute top-0 left-0 w-full h-screen backdrop-blur-sm z-20 bg-black/10 ${!collapsed ? 'flex' : 'hidden'}`}>
        </div>
        {/* navbar */}
        <MobileNav collapsed={collapsed} showMenuHandler={showMenuHandler} />
        {/*logo */}
        <div className="flex flex-1 justify-end">
          <Logo />
        </div>
      </div>
    </>
  )
}

export default MobileHeader