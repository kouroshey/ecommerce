import ProductCard from './ProductCard'

const ProductsList = ({products}) => {
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}

export default ProductsList