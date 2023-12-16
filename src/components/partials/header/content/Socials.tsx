import {IoLogoInstagram, IoLogoWhatsapp, IoPaperPlaneSharp} from 'react-icons/io5'

const Socials = () => {
  return (
      <div className='flex gap-10 items-center text-h4 text-gray-7'>
          <IoLogoWhatsapp  className='hover:text-pink hover:scale-105 transition-all'/>    
          <IoPaperPlaneSharp  className='hover:text-pink hover:scale-105 transition-all'/>
          <IoLogoInstagram  className='hover:text-pink hover:scale-105 transition-all'/>
    </div>
  )
}

export default Socials