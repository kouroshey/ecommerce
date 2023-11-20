import Filters from "./content/Filters"
import ProductsList from "./content/ProductsList"

import { useSelector, useDispatch } from "react-redux"
import { selectAllProducts, fetchProducts } from "./content/store"
import { useEffect } from "react"

const Shop = () => {
  const products = useSelector(selectAllProducts)
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchProducts())
      
  }, [])

  return (
    <div className="flex flex-col gap-8">
      <section className="py-4">
      <Filters />
      </section>
      <h2 className="text-h3 after:w-full after:absolute relative after:bg-pink after:right-0 after:-bottom-1 after:h-[2px] after:rounded-md w-max">محصولات</h2>
      <section>
        <ProductsList products={products}/>
      </section>
    </div>
  )
}

export default Shop