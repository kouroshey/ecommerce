import { IoCloseSharp } from "react-icons/io5"

const CloseBtn = (closeFunction: () => void) => {
    const closeHandle = () => {
        closeFunction()
    }
    return (
        <span className="text-h3 hover:text-pink hover:scale-105" onClick={closeHandle} >
            <IoCloseSharp />
        </span>
    )
}

export default CloseBtn