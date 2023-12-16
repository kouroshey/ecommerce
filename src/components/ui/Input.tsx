import { ReactElement } from "react";

interface InputProps {
    inputId: string;
    icon: ReactElement;
    label: string | undefined;
    type: string | undefined;
    value: string | undefined;
    placeholder: string | undefined;
    labelStyel?: string | undefined;
    defaultClass?: string | undefined;
}

const Input = ({
    inputId,
    icon,
    label,
    type,
    value,
    placeholder,
    labelStyel = 'text-body',
    defaultClass = 'border border-gray-3 rounded-md px-2 py-1 text-gray-7 focus:border-pink w-full outline-none'
}: InputProps) => {
    return (
        <div className='flex flex-col gap-4 w-full relative'>
            <label
                htmlFor={inputId}
                className={`${labelStyel}`}
            >{label}</label>
            {icon &&
                <span className='absolute right-2 bottom-2'>
                    {icon}
                </span>}
            <input
                dir='ltr'
                type={type}
                value={value}
                name={inputId}
                placeholder={placeholder}
                className={`${defaultClass}
                
              `}
            />
        </div>
    )
}

export default Input