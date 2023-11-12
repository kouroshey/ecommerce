import NavMobile from "./content/NavMobile"
import Logo from "./content/Logo"
import { useEffect, useMemo, useState } from "react"
import NavIcons from "./content/NavIcons"
import Navbar from "./content/Navbar"

const Header = () => {
  const [showMenuButton, setShowMenuButton] = useState(false)

  useMemo(() => {
    // set function for setting state
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setNavCollapsed(true)
      } else {
        setNavCollapsed(false)
      }
    }

    // whenever window scrolled, action handleScroll
    window.addEventListener('scroll', handleScroll)

    // before action handleScroll, remove the previous action
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [window.scrollY])


  

  return (
    <header className="sticky top-0 w-full transition-all ease-out">
      {/* <NavMobile /> */}
      <div className="w-full h-full flex justify-between items-start bg-white rounded-md px-24 py-5 transition-all ease-in-out">
        {/* right section */}
        <section className="flex flex-1 w-full justify-start"><NavIcons /></section>
        {/* center section */}
        <section className="jusify-center flex-col gap-8 items-center flex w-full flex-1">
          <Navbar />
        </section>
        {/* left section */}
        <section className="flex flex-1 justify-end"><Logo /></section>
      </div>
    </header>
  )
}

export default Header