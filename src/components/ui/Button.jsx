import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({
  isBlack,
  isPink,
  isGray,
  isDisabled,
  link,
  url,
  text = 'clickMe',
  type = 'button',
  defaultClass = 'px-4 py-1 text-caption rounded-md hover:shadow-sm w-max transition-all',
  icon,
  onClick,
  children,
}) => {
  const btnStyles = {
    pink: {
      hover: 'hover:bg-pink hover:text-white',
      default: 'border border-pink text-pink',
      disabled: 'bg-gray-2 text-gray-4'
    },
    black: {
      hover: 'hover:bg-black hover:text-white',
      default: 'border border-black text-black',
      disabled: 'bg-gray-2 text-gray-4'
    },
    gray: {
      hover: 'hover:bg-white hover:text-pink',
      default: 'border border-gray-2 text-white',
      disabled: 'bg-gray-2 text-gray-5 opacity-80'
    }
  }

  return (
    <>
      {!link && <button
        className={`
        ${defaultClass} 
        ${isPink && btnStyles.pink.hover}
        ${isGray && btnStyles.gray.hover}
        ${isBlack && btnStyles.black.hover}
        ${isPink && !isDisabled ? btnStyles.pink.default : isPink && isDisabled ? btnStyles.pink.disabled :
            isBlack && !isDisabled ? btnStyles.black.default : isBlack && isDisabled ? btnStyles.black.disabled :
              isGray && !isDisabled ? btnStyles.gray.default : isGray && isDisabled ? btnStyles.gray.disabled : ''
          }
      `}
        value={text}
        type={type}
        onClick={onClick}
      >
        {children && children}
        {icon && icon}
        {text}
      </button>}
      {link && <Link className={`
      ${defaultClass} 
      ${isPink && btnStyles.pink.hover}
      ${isGray && btnStyles.gray.hover}
      ${isBlack && btnStyles.black.hover}
      ${isPink && !isDisabled ? btnStyles.pink.default : isPink && isDisabled ? btnStyles.pink.disabled :
          isBlack && !isDisabled ? btnStyles.blackisBlack.default : isBlack && isDisabled ? btnStyles.blackisBlack.disabled :
            isGray && !isDisabled ? btnStyles.gray.default : isGray && isDisabled ? btnStyles.gray.disabled : ''
        }
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