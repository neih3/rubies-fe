// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";

const Carousel = () => {
  return (
    <>
      <Swiper
        className="w-full"
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            className="w-full"
            src="https://bizweb.dktcdn.net/100/462/587/themes/880841/assets/slider_2.jpg?1724310613023"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://bizweb.dktcdn.net/100/462/587/themes/880841/assets/slider_3.jpg?1724310613023"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://bizweb.dktcdn.net/100/462/587/themes/880841/assets/slider_1.jpg?1724310613023"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://bizweb.dktcdn.net/100/462/587/themes/880841/assets/slider_1.jpg?1724310613023"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
