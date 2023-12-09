import { ReactElement } from "react"

const Container = (children: ReactElement) => {
    return (
        <section className='w-full'>
            <div className="w-full px-8 sm:px-12 md:px-12 lg:px-24 ">
                {children}
            </div>
        </section>
    )
}

export default Container