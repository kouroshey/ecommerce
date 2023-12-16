interface LogoProps {
  isScrolling: boolean;
  location: string | undefined;
  isHeaderNav: boolean;
}

const Logo = ({ isScrolling, location, isHeaderNav }: LogoProps) => {
  return (
    // <img className='h-5 md:h10' src="../public/images/logo.png" alt="" />
    <h1 className={`text-pink text-h3 md:text-h2 ${location === '/' && !isScrolling && isHeaderNav ? 'text-white' : 'text-gray-7'}`}>Eccomerce</h1>
  )
}

export default Logo