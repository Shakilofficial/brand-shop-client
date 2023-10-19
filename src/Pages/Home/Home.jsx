import BrandCollection from "../../components/BrandCollection/BrandCollection";
import Reviews from "../../components/Reviews/Reviews";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
      <div>
          <Slider/>
          <BrandCollection />
          <Reviews/>
    </div>
  );
};

export default Home;
