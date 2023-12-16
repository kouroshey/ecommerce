import MobileNav from "./MobileNav"
import Logo from "../../../ui/Logo"
import MenuIcon from "./MenuIcon"
import { useState } from "react"

interface MobileHeaderProps {
  isScrolling: boolean,
  location: string,
  isHeaderNav: boolean
}

const MobileHeader = ({ isScrolling, location, isHeaderNav }: MobileHeaderProps) => {
  const [collapsed, setCollapsed] = useState(true)
  const showMenuHandler = () => {
    setCollapsed(prev => prev = !prev)
  }
  return (
    <>
      <div className={`sticky w-full top-0 z-50 h-full flex justify-between items-center px-8 py-5 transition-all ease-in-out ${location === '/' && !isScrolling ? 'bg-gray-7' : 'bg-white'}`}>
        {/* menu icon */}
        <div className="flex flex-1 justify-start">
          <MenuIcon showMenuHandler={showMenuHandler} collapsed={collapsed} isScrolling={isScrolling} location={location} isHeaderNav={isHeaderNav} />
        </div>
        {/* navbar overlay */}
        <div
          onClick={showMenuHandler}
          className={`absolute top-0 left-0 w-full h-screen backdrop-blur-sm z-20 bg-black/10 ${!collapsed ? 'flex' : 'hidden'}`}>
        </div>
        {/* navbar */}
        <MobileNav collapsed={collapsed} showMenuHandler={showMenuHandler} />
        {/*logo */}
        <div className="flex flex-1 justify-end items-center">
          <Logo isScrolling={isScrolling} location={location} isHeaderNav={isHeaderNav} />
        </div>
      </div>
    </>
  )
}

export default MobileHeader