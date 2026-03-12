import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Subscribe from "../components/Subscribe";


function Home({ addToCart }) {
  return (
    <>
      <Hero />
      <Categories />

      {/* Pass function to FeaturedProducts */}
      <FeaturedProducts onAddToCart={addToCart} />
    <Subscribe />
    </>
  );
}

export default Home;