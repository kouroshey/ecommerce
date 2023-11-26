import { useEffect } from "react"

import Cards from "./content/Cards"
import ProductSlider from "./content/ProductSlider"

import { useSelector, useDispatch } from "react-redux"
import { selectAllProducts, fetchProducts, getProductsErr, getProductsStatus } from "../shop/content/store"
import { Link } from "react-router-dom"

const Home = () => {
  const status = useSelector(getProductsStatus)
  const err = useSelector(getProductsErr)
  const allProducts = useSelector(selectAllProducts)
  const popularProducts = allProducts?.filter(product => product.popular === true)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())

  }, [])

  let content;
  if (status === 'idle') {
    dispatch(fetchProducts())
  } else if (status === 'pending') {
    content = <p className="text-favorite py-4">لطفا منتظر لود شدن محصولات بمانید...</p>
  } else if (status === 'succeeded') {
    content = <ProductSlider products={popularProducts} />
  } else if (status === 'failed') {
    content = <p className="text-favorite py-4">خطا در گرفتن اطلاعات از سرور. لطفا اینترنت خود را چک کنید و صفحه را رفرش کنید</p>
  }

  return (
    <main className="pt-6 flex flex-col gap-12">
      <Cards />
      {/* products slider */}
      <section className="w-full rounded-md py-8 flex flex-col">
        <h2 className="text-h3 w-max border-b-2 border-b-pink">محصولات محبوب</h2>
        <div>{content}</div>
        <p className="text-pink underline"><Link to='/shop'>دیدن همه‌ی محصولات</Link></p>
      </section>
    </main>
  )
}

export default Home