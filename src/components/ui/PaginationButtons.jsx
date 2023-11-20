import ReactPaginate from 'react-paginate'
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { motion } from 'framer-motion'

const PaginationButtons = ({ pages, onClick }) => {
    const handlePageClick = ({ selected }) => {
        onClick(selected + 1)
    }

    const paginateVariants = {
        hidden: {
            opacity: 0,
            y: 300
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 260,
                damping: 20,
                duration: 1
            }
        }
    }
    const nextButton =
        <span
            id='next'
            className='bg-white text-pink hover:bg-pink hover:text-white transition-all hover:shadow-sm flex items-center justify-center rounded-md text-h3 w-10 h-10'>
            <IoChevronForward />
        </span>

    const prevButton =
        <span
            id='prev'
            className='bg-white text-pink hover:bg-pink hover:text-white transition-all hover:shadow-sm flex items-center justify-center rounded-md text-h3 w-10 h-10'>
            <IoChevronBack />
        </span>
    return (
        <motion.div variants={paginateVariants} initial = 'hidden' animate= 'visible'>
            <ReactPaginate

                breakLabel={<span className=''>...</span>}

                nextLabel={prevButton}
                activeClassName='text-pink'
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pages}
                previousLabel={nextButton}
                renderOnZeroPageCount={null}
                className='flex w-full items-center justify-center my-6'
                pageClassName='hover:bg-white w-10 h-10 rounded-md flex items-center justify-center'
            />
        </motion.div>
    )
}

export default PaginationButtons