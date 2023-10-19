import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const ProductSlider = () => {
  const slides = [
    {
      image:
        "https://i.ibb.co/wJB2gdS/google-s-product-banner.jpg",
    },
    {
      image: "https://i.ibb.co/hm5GNNJ/one-day-apple-sale-banner.jpg",
    },
    {
      image:
        "https://i.ibb.co/NW6vxpR/107310839-1696353442800-Pixel-Portfolio-Bay-2.jpg",
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
              <div className="bg-gray-900 bg-opacity-80 h-full space-y-4 flex flex-col justify-center items-center"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
