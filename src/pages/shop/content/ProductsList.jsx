import ProductCard from './ProductCard'
import PaginationButtons from '../../../components/ui/PaginationButtons'

const ProductsList = ({ products }) => {
  
  return (
    <div>
      <div className='w-full grid grid-cols-4 gap-8 '>
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <PaginationButtons />
    </div>
  )
}

export default ProductsList