import React, { ReactNode, useRef } from "react";

interface ModalProps {
    children: ReactNode;
    modalCloseHandle: () => {
        payload: any;
        type: "products/productModalShowHandler";
    }
}

type CloseModalHandleType = (event: React.MouseEvent) => void

const Modal = ({ children, modalCloseHandle }: ModalProps) => {
    const mainElementRef = useRef<HTMLDivElement>(null)

    const closeModalHandle: CloseModalHandleType = (event: React.MouseEvent) => {

        if (mainElementRef.current && mainElementRef.current.contains(event.target as Node)) {
            modalCloseHandle()
        }
    }
    return (
        <div className='fixed w-full py-8 h-screen z-40 left-0 top-0 right-0 bg-black/50' onClick={closeModalHandle}>
            <div className='flex w-full h-full items-center justify-center'>
                <div className='bg-white rounded-lg absolute z-50 max-h-[80%] max-w-[90%] md:max-w-[80%] lg:max-w-[60%] overflow-y-scroll lg:overflow-auto' ref={mainElementRef}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal    