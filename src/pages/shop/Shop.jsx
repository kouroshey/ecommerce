import Filters from "./content/Filters"
import ProductsList from "./content/ProductsList"

import { useSelector } from "react-redux"
import { selectAllProducts, getProductsStatus } from "./content/store"
import Container from "../../components/ui/Container"

const Shop = () => {
  const products = useSelector(selectAllProducts)
  const status = useSelector(getProductsStatus)

  // error handling
  let content;
  if (status === 'pending') {
    content = <p className="text-favorite py-4">لطفا منتظر لود شدن محصولات بمانید...</p>
  } else if (status === 'succeeded') {
    content = <ProductsList products={products} />
  } else if (status === 'failed') {
    content = <p className="text-favorite py-4">خطا در گرفتن اطلاعات از سرور. لطفااینترنت خود را چک کنید و صفحه را رفرش کنید</p>
  }

  return (
    <Container>
      <div className="flex flex-col gap-8">
        <section className="py-4">
          <Filters />
        </section>
        <h2 className="text-h3 after:w-full after:absolute relative after:bg-pink after:right-0 after:-bottom-1 after:h-[2px] after:rounded-md w-max">محصولات</h2>
        <section>
          {content}
        </section>
      </div>
    </Container>
  )
}

export default Shop