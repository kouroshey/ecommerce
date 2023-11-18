import React from 'react'

const Modal = ({children}) => {
  return (
      <div className='absolute w-full h-screen z-50 bg-black/50'>
          <div className='flex w-full h-full items-center justify-center'>
          <div className='bg-white rounded-md max-w-[80%] min-w-[30%] absolute'>
          {children}
          </div>
    </div>
      </div>
  )
}

export default Modal