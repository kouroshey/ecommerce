import Filters from "./content/Filters"
import ProductsList from "./content/ProductsList"
import { supabase } from "../../config/supabaseClient"

const Shop = () => {
  console.log(supabase);
  return (
    <div className="flex flex-col gap-8">
      <section className="py-4">
      <Filters />
      </section>
      <h2 className="text-h3 after:w-full after:absolute relative after:bg-pink after:right-0 after:-bottom-1 after:h-1 after:rounded-md w-max">محصولات</h2>
      <section>
        <ProductsList />
      </section>
    </div>
  )
}

export default Shop