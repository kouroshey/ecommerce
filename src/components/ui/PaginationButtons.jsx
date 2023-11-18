import ReactPaginate from 'react-paginate'
import { IoChevronForward, IoChevronBack } from "react-icons/io5";

const PaginationButtons = () => {
    const nextButton =
        <span
            className='bg-white text-pink hover:bg-pink hover:text-white transition-all hover:shadow-sm flex items-center justify-center rounded-md text-h3 w-10 h-10'>
            <IoChevronForward />
        </span>

    const prevButton =
        <span
            className='bg-white text-pink hover:bg-pink hover:text-white transition-all hover:shadow-sm flex items-center justify-center rounded-md text-h3 w-10 h-10'>
            <IoChevronBack />
        </span>
    return (                                                                                                                                      
            <ReactPaginate

                breakLabel={<span className=''>...</span>}
                nextLabel={prevButton}
                activeClassName='text-pink'
                // onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={10}
                previousLabel={nextButton}
                renderOnZeroPageCount={null}
                className='flex w-full items-center justify-center my-6'
                pageClassName='hover:bg-white px-3 rounded-md flex items-center justify-center'
            />
    )
}

export default PaginationButtons