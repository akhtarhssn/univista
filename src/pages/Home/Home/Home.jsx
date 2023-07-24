import Reviews from "../../../components/Reviews/Reviews";
import AboutUs from "../AboutUs/AboutUs";
import Hero from "../Hero/Hero";
import PopularCollege from "../PopularCollege/PopularCollege";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <PopularCollege />
      <Reviews />
    </div>
  );
};

export default Home;
