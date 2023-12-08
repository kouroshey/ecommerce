import { Link } from 'react-router-dom'
import { ButtonPropsType } from './Button-Black';

const PinkButton = ({
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
        defaultClass: `flex items-center 
        justify-center gap-2 px-4 py-2 text-caption
        md:text-${textSize ? textSize : 'caption'} 
        rounded-md hover:shadow-sm w-${width ? width : 'max'} transition-all`,
        hover: 'hover:bg-pink hover:text-white',
        default: 'border border-pink text-pink',
        disabled: 'bg-gray-2 text-gray-4'
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

export default PinkButton