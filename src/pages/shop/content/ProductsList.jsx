import ProductCard from './ProductCard'
import PaginationButtons from '../../../components/ui/PaginationButtons'

const ProductsList = ({ products }) => {
  
  return (
    <div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 '>
        {products?.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <PaginationButtons />
    </div>
  )
}

export default ProductsList