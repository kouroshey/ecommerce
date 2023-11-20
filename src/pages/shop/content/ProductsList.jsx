import {useState} from 'react'
import ProductCard from './ProductCard'
import PaginationButtons from '../../../components/ui/PaginationButtons'

const ProductsList = ({ products }) => {
  const [pageNumber, setPageNumber] = useState(1) 
  const productsPerPage = 12

  const startPoint = (pageNumber - 1) * productsPerPage
  const endPoint = startPoint + productsPerPage

  const pageCount = Math.ceil(products.length / 12)
  const slicedProducts = products.slice(startPoint, endPoint)
  
  return (
    <div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 '>
        {slicedProducts?.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <PaginationButtons pages={pageCount} onClick={setPageNumber} />
    </div>
  )
}

export default ProductsList