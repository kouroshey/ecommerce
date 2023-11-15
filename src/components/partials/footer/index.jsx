import Navbar from "../header/content/Navbar"
import Info from "./content/Info"
import Links from "./content/Links"
import MoreInfo from "./content/MoreInfo"

import useWidth from "../../../hooks/useWidth"
import Icons from "./content/Icons"

const Footer = () => {
  const { width, breakPoints } = useWidth()

  return (
    <footer className="w-full">
      {width > breakPoints.sm &&
        <section className="w-full bg-white py-4">
          <Navbar width={width} breakPoints={breakPoints} />
        </section>
      }
      <section className="flex px-8 sm:px-12 md:px-12 lg:px-24 py-8 gap-6">
        <section className="flex-1 flex gap-36">
          <Links />
          <MoreInfo />
        </section>
        {width > breakPoints.md &&
          <section className="flex justify-end flex-1">
            <Info />
          </section>
        }
      </section>
      <section>
        <Icons />
      </section>
    </footer>
  )
}

export default Footer