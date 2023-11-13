import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({
  isBlack = true,
  isPink,
  isDisabled,
  text = 'clickMe',
  type,
  className = 'px-4 py-1 text-caption rounded-md hover:text-white hover:shadow-md bg-none',
  icon,
  onClick,
  children,
  link,
  url
}) => {
  return (
    <>
      {!link && <button
        className={`
      ${className} 
      ${isPink ? 'border border-pink text-pink hover:bg-pink' :
            isBlack ? 'border border-gray-1 hover:bg-gray-1 ' :
              isDisabled ? 'text-gray-6 bg-gray-5' :
                ''}
      `}
        value={text}
        type={type}
        onClick={onClick}
      >
        {children && children}
        {icon && icon}
      </button>}
      {link && <Link className={`
      ${className} 
      ${isPink ? 'border border-pink text-pink hover:bg-pink' :
          isBlack ? 'border border-gray-1 hover:bg-gray-1 ' :
            isDisabled ? 'text-gray-6 bg-gray-5' :
              ''}
      `}
        to={url}
        onClick={onClick}
      >
        {text}
      </Link>}
    </>
  )
}

export default Button