import { ReactElement } from 'react';
import { Link } from 'react-router-dom'
import { ButtonPropsType } from './Button-Black';

const GrayButton = ({
    isDisabled,
    isLink,
    url,
    width,
    textSize,
    type = 'button',
    onClick,
    children,
}: ButtonPropsType) => {
    const btnStyles = {
        defaultClass: `flex items-center justify-center gap-2 px-4 py-2 text-caption md:text-${textSize ? textSize : 'caption'} rounded-md hover:shadow-sm w-${width ? width : 'max'} transition-all`,
        hover: 'hover:bg-white hover:text-pink',
        default: 'border border-gray-2 text-white',
        disabled: 'bg-gray-2 text-gray-5 opacity-80'
    }

    const mainStyle = `${btnStyles.defaultClass} ${btnStyles.hover} ${!isDisabled ? btnStyles.default : btnStyles.disabled}`

    return (
        <>
            {isLink
                ? <Link className={mainStyle}
                    to={url}
                    onClick={onClick}
                >
                    {children}
                </Link>
                : < button
                    className={mainStyle}
                    type={type}
                    onClick={onClick}
                >
                    {children}
                </button>
            }
        </>
    )
}

export default GrayButton