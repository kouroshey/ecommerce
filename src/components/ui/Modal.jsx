import { useRef } from "react";

const Modal = ({ children, modalCloseHandle }) => {
    const mainElementRef = useRef(null)

    const closeModalHandle = event => {
        if (!mainElementRef.current.contains(event.target)) {
            modalCloseHandle()
        }
    }
    return (
        <div className='fixed w-full h-screen z-40 left-0 bg-black/50' onClick={closeModalHandle}>
            <div className='flex w-full h-full items-center justify-center'>
                <div className='bg-white rounded-lg max-w-[80%] min-w-[30%] absolute z-50' ref={mainElementRef}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal