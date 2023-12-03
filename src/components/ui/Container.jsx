
const Container = ({ children }) => {
    return (
        <seciton className='w-full'>
            <div className="w-full px-8 sm:px-12 md:px-12 lg:px-24 ">
                {children}
            </div>
        </seciton>
    )
}

export default Container