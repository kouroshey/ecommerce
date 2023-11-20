import { useEffect } from "react"

import Cards from "./content/Cards"
import HomeSlider from "./content/HomeSlider"
import ProductSlider from "./content/ProductSlider"

import { useSelector, useDispatch } from "react-redux"
import { selectAllProducts, fetchProducts, getProductsErr, getProductsStatus } from "../shop/content/store"

const Home = () => {
  const slides = [
    { id: 2, img: '../public/images/dress.png', name: 'dress' },
    { id: 3, img: '../public/images/suit.png', name: 'suit' },
    { id: 1, img: '../public/images/dress2.png', name: 'dress2' },
    { id: 4, img: '../public/images/dress.png', name: 'dress' },
    { id: 6, img: '../public/images/suit.png', name: 'suit' },
    { id: 5, img: '../public/images/dress2.png', name: 'dress2' },
    { id: 7, img: '../public/images/dress.png', name: 'dress' },
    { id: 9, img: '../public/images/suit.png', name: 'suit' },
    { id: 8, img: '../public/images/dress2.png', name: 'dress2' }
  ]
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
      {/* home slider */}
      <section className="w-full bg-white rounded-md px-12">
        <HomeSlider slides={slides} />
      </section>
      {/* products slider */}
      <section className="w-full rounded-md">
        <h2 className="text-h3 w-max border-b-2 border-b-pink pb-2">محصولات محبوب</h2>
        {content}
      </section>
    </main>
  )
}

export default Home