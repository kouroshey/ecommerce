import MobileHeader from "./content/MobileHeader"
import Logo from "./content/Logo"
import NavIcons from "./content/NavIcons"
import Navbar from "./content/Navbar"
import useWidth from "../../../hooks/useWidth"
import { useLocation } from "react-router-dom"
import HeroSlider from "../../ui/slider/HeroSlider"

const Header = () => {
  const { width, breakPoints } = useWidth()
  const location = useLocation()

  return (
    <>
      <header className="sticky top-0 w-full transition-all ease-out z-50">
        {width < breakPoints.sm ?
          <MobileHeader />
          :
          <div className={`${width < breakPoints.lg ? 'px-12' : 'px-24'} w-full h-full flex justify-between items-start bg-white rounded-md py-5 transition-all ease-in-out`}>
            {/* right section */}
            <section className="flex  justify-start"><NavIcons /></section>
            {/* center section */}
            <section className="jusify-center flex ">
              <Navbar width={width} breakPoints={breakPoints} />
            </section>
            {/* left section */}
            <section className="flex justify-end"><Logo /></section>
          </div>
        }

      </header>
      <div className="w-screen">
        {location.pathname === '/' && <HeroSlider />}
      </div>
    </>
  )
}

export default Header