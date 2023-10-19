import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Slider = () => {
  const slides = [
    {
      image:
        "https://i.ibb.co/7NZmR9m/Get-amazing-deals-on-popular-products-on-Amazon.jpg",
      label: "Welcome to the Ultimate Brand Shopping Experience",
    },
    {
      image: "https://i.ibb.co/X8cByPT/gst-electronics-discount.jpg",
      label: "Curated Collections of High-End Brands",
    },
    {
      image: "https://i.ibb.co/wWLfPkb/5ae04bede8d5d60a78aca193.jpg",
      label: "Explore Luxury Brands, Unleash Your Style",
    },
  ];

  return (
    <div className="mb-6">
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-cover bg-center h-[600px] text-white"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-gray-900 bg-opacity-80 h-full space-y-4 flex flex-col justify-center items-center">
                <div className="max-w-5xl mx-auto text-center">
                  <h1 className="text-5xl text-sky-400 font-bold mb-8">
                    {slide.label}
                  </h1>
                  <p className="font-light text-lg mb-5">
                    Brand Shop is designed for seamless, user-friendly
                    navigation. With intuitive features, it ensures a smooth
                    experience. Users can easily find what they need and explore
                    a wide range of offerings. The system encourages both
                    getting started and in-depth exploration, fostering
                    engagement and satisfaction.
                  </p>
                  <Link to="/signUp">
                    <button className="px-4 py-2 font-semibold text-white text-lg bg-blue-500 rounded-md shadow hover:bg-blue-800">
                      Get Started...
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
