import Cards from "./content/Cards"
import HomeSlider from "./content/HomeSlider"
const Home = () => {
  return (
    <main className="pt-6 flex flex-col gap-8">
      <Cards />
      {/* products slider */}
      <section className="w-full bg-white rounded-md p-12">
        <HomeSlider />
      </section>
      <div>sdfasdf</div>
    </main>
  )
}

export default Home