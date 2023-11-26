import MobileHeader from "./content/MobileHeader"
import Logo from "../../ui/Logo"
import NavIcons from "./content/NavIcons"
import Navbar from "./content/Navbar"
import useWidth from "../../../hooks/useWidth"
import { useLocation } from "react-router-dom"
import HeroSlider from "../../ui/slider/HeroSlider"
import { useState } from "react"
import { useEffect } from "react"

const Header = () => {
  const { width, breakPoints } = useWidth()
  const location = useLocation()
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    // set function for setting state
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolling(true)
      } else {
        setIsScrolling(false)
      }
    }

    // whenever window scrolled, action handleScroll
    window.addEventListener('scroll', handleScroll)

    // before action handleScroll, remove the previous action
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header className={`${location.pathname === '/' && !isScrolling ? 'sm:absolute' : 'sticky'} top-0 w-full transition-all duration-1000 ease-out z-30 flex`}>
        {width < breakPoints.sm ?
          <MobileHeader isScrolling={isScrolling} isHeaderNav={true} location={location.pathname} />
          :
          <div className={`${width < breakPoints.lg ? 'px-12' : 'px-24'} ${location.pathname === '/' && !isScrolling ? 'bg-none' : 'bg-white'} w-full h-full flex justify-between items-start rounded-b-md py-5 transition-all ease-in-out items-center`}>
            {/* right section */}
            <section className="flex  justify-start"><NavIcons isScrolling={isScrolling} location={location.pathname} isHeaderNav={true} /></section>
            {/* center section */}
            <section className="jusify-center flex ">
              <Navbar width={width} breakPoints={breakPoints} isScrolling={isScrolling} location={location.pathname} isHeaderNav={true} />
            </section>
            {/* left section */}
            <section className="flex justify-end">
              <Logo isScrolling={isScrolling} location={location.pathname} isHeaderNav={true} />
            </section>
          </div>
        }

      </header>
      <div className="">
        {location.pathname === '/' && <HeroSlider />}
      </div>
    </>
  )
}

export default Header