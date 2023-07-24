import PhotoGallery from "../../../components/PhotoGallery/PhotoGallery";
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
      <PhotoGallery />
      <div className="hidden lg:block">
        <Reviews />
      </div>
    </div>
  );
};

export default Home;
