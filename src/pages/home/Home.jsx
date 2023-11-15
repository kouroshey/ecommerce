import Cards from "./content/Cards"
import HomeSlider from "./content/HomeSlider"
import ProductSlider from "./content/ProductSlider"
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
  const products = [
    {
      id: 1,
      title: 'گوچی زنانه مشکی',
      desc: 'این یک گوچی فوق العاده است آتیش زدم به مالم اگه نخری خیلی خری',
      price: '715',
      img: '../../../public/images/girl-1.jpg'
    },
    {
      id: 2,
      title: 'گوچی زنانه صورتی',
      desc: 'این یک گوچی فوق العاده است آتیش زدم به مالم اگه نخری خیلی خری',
      price: '214',
      img: '../../../public/images/girl-2.jpg'
    },
    {
      id: 3,
      title: 'دورس دوبنده صورتی',
      desc: 'این یک گوچی فوق العاده است آتیش زدم به مالم اگه نخری خیلی خری',
      price: '214',
      img: '../../../public/images/girl-3.jpg'
    },
    {
      id: 4,
      title: 'زیرشلواری راه راه',
      desc: 'این یک گوچی فوق العاده است آتیش زدم به مالم اگه نخری خیلی خری',
      price: '200',
      img: '../../../public/images/girl-4.jpg'
    },
    {
      id: 5,
      title: 'کفش نارنجی خزززز',
      desc: 'این یک گوچی فوق العاده است آتیش زدم به مالم اگه نخری خیلی خری',
      price: '250',
      img: '../../../public/images/girl-5.jfif'
    },
    {
      id: 6,
      title: 'خز ترین جوراب های دنیا',
      desc: 'این یک گوچی فوق العاده است آتیش زدم به مالم اگه نخری خیلی خری',
      price: '10',
      img: '../../../public/images/girl.jpg'
    },
  ]
  return (
    <main className="pt-6 flex flex-col gap-8">
      <Cards />
      {/* home slider */}
      <section className="w-full bg-white rounded-md px-12">
        <HomeSlider slides={slides} />
      </section>
      {/* products slider */}
      <section className="w-full rounded-md px-12">
        <ProductSlider products={products} />
      </section>
    </main>
  )
}

export default Home