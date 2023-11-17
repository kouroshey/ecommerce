import { IoChevronDown } from "react-icons/io5"
import { useState } from "react";


const DropDown = ({
    items,
    label
}) => {
    const [defaultValue, setDefaultValue] = useState(items.find(item => item.isDefault === true).title)

    const defaultValueHandle = (event) => setDefaultValue(event.target.innerHTML)

     return (
        <div className="flex flex-col gap-2 transition-all relative group">
            <p>{label}</p>
            <button
                className="flex items-center justify-between border border-gray-5 bg-red-500 rounded-lg w-32 py-1 px-2 text-gray-6 text-body"
            >
                {defaultValue}
                <IoChevronDown
                    className='bottom-2.5 hover:text-pink group-hover:rotate-180 transition-all'
                />
            </button>
            <ul className="bg-white py-2 shadow-md rounded-lg gap-2 hidden group-hover:flex flex-col absolute top-full w-full">
                {items?.map(item =>
                (<li 
                    key={item.id}
                    onClick={defaultValueHandle}
                    value={item.title}
                    className="hover:bg-pink transition-all text-gray-6 hover:text-white px-2 hover:cursor-pointer">
                    {item.title}
                </li>)
                )}
            </ul>
        </div>
    )
}

export default DropDown