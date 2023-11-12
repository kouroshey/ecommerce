import MobileHeader from "./content/MobileHeader"
import Logo from "./content/Logo"
import NavIcons from "./content/NavIcons"
import Navbar from "./content/Navbar"
import useWidth from "../../../hooks/useWidth"

const Header = () => {
  const { width, breakPoints } = useWidth()
  
  return (
    <header className="sticky top-0 w-full transition-all ease-out">
      {width < breakPoints.sm ?
        <MobileHeader />
        :
        <div className={`${width < breakPoints.lg ? 'px-12': 'px-24'} w-full h-full flex justify-between items-start bg-white rounded-md py-5 transition-all ease-in-out`}>
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
  )
}

export default Header