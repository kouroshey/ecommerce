import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({
  isBlack,
  isPink,
  isGray,
  isRed,
  isDisabled,
  isLink,
  url,
  width,
  textSize,
  text = 'clickMe',
  type = 'button',
  defaultClass = `flex items-center justify-center gap-2 px-4 py-2 text-caption md:text-${textSize ? textSize : 'caption'} rounded-md hover:shadow-sm w-${width ? width : 'max'} transition-all`,
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
    },
    red: {
      hover: 'hover:bg-favorite hover:text-white',
      default: 'border border-favorite text-favorite',
      disabled: 'bg-gray-2 text-gray-5'
    }
  }

  return (
    <>
      {!isLink && <button
        className={`
        ${defaultClass} 
        ${isPink && btnStyles.pink.hover}
        ${isGray && btnStyles.gray.hover}
        ${isBlack && btnStyles.black.hover}
        ${isRed && btnStyles.red.hover}
        ${isPink && !isDisabled ? btnStyles.pink.default : isPink && isDisabled ? btnStyles.pink.disabled :
            isBlack && !isDisabled ? btnStyles.black.default : isBlack && isDisabled ? btnStyles.black.disabled :
              isGray && !isDisabled ? btnStyles.gray.default : isGray && isDisabled ? btnStyles.gray.disabled :
                isRed && !isDisabled ? btnStyles.red.default : isRed && isDisabled ? btnStyles.red.disabled : ''
          }
      `}
        value={text}
        type={type}
        onClick={onClick}
      >
        {children && children}
        {text}
        {icon && icon}
      </button>}
      {isLink && <Link className={`
      ${defaultClass} 
      ${isPink && btnStyles.pink.hover}
      ${isGray && btnStyles.gray.hover}
      ${isBlack && btnStyles.black.hover}
      ${isRed && btnStyles.red.hover}
      ${isPink && !isDisabled ? btnStyles.pink.default : isPink && isDisabled ? btnStyles.pink.disabled :
          isBlack && !isDisabled ? btnStyles.blackisBlack.default : isBlack && isDisabled ? btnStyles.blackisBlack.disabled :
            isGray && !isDisabled ? btnStyles.gray.default : isGray && isDisabled ? btnStyles.gray.disabled :
              isRed && !isDisabled ? btnStyles.red.default : isRed && isDisabled ? btnStyles.red.disabled : ''

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