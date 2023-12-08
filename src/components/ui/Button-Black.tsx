import { ReactElement } from 'react';
import { Link } from 'react-router-dom'

export interface ButtonPropsType {
    isDisabled: undefined | boolean;
    isLink: undefined | boolean;
    url: any
    width: undefined | string;
    textSize: undefined | string;
    type: "button" | "submit" | "reset" | undefined;
    onClick: () => {};
    children: ReactElement
}

const BlackButton = ({
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
        hover: 'hover:bg-black hover:text-white',
        default: 'border border-black text-black',
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

export default BlackButton