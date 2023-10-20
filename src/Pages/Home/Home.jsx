import BrandCollection from "../../components/BrandCollection/BrandCollection";
import Features from "../../components/Features/Features";
import Reviews from "../../components/Reviews/Reviews";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <BrandCollection />
      <Reviews />
      <Features />
    </div>
  );
};

export default Home;
