import Cards from "./content/Cards"
import ProductSlider from "./content/ProductSlider"
import { motion } from "framer-motion"
import Container from "../../components/ui/Container"
import HeroSlider from "../../components/ui/slider/HeroSlider"

import { useSelector, useDispatch } from "react-redux"
import { selectAllProducts, fetchProducts, getProductsErr, getProductsStatus } from "../shop/content/store"
import { Link } from "react-router-dom"
import BlogSection from "./content/blogSection"

const animateVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
}

const Home = () => {
  const status = useSelector(getProductsStatus)
  const allProducts = useSelector(selectAllProducts)
  const popularProducts = allProducts?.filter(product => product.popular === true)
  const dispatch = useDispatch()

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
    <>
      <HeroSlider />
      <Container>
        <main className="pt-6 flex flex-col gap-12 w-full">
          <Cards />
          {/* products slider */}
          <section className="w-full rounded-md py-8 flex flex-col">
            <motion.h2
              variants={animateVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              className="text-h3 w-max border-b-2 border-b-pink">محصولات محبوب
            </motion.h2>
            <motion.div
              variants={animateVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              {content}
            </motion.div>
            <motion.p
              variants={animateVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              className="text-pink underline"
            >
              <Link to='/shop'>دیدن همه‌ی محصولات</Link>
            </motion.p>
          </section>
        </main>
      </Container>
      <BlogSection />
    </>
  )
}

export default Home