import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Card from "./Card";
import { SetStateAction, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper as SwiperCore } from "swiper"; // Import SwiperCore for typing
const Categories = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [isEnd, setIsEnd] = useState<SetStateAction<boolean>>();
  const [isBeginning, setIsBeginning] = useState<SetStateAction<boolean>>();
  console.log("begin", isBeginning);
  console.log("isend", isEnd);
  return (
    <div className="flex gap-10 pt-2 lg:px-40 px-2 font-Var justify-center container">
      <button
        className={isBeginning ? "text-slate-400" : ""}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <ChevronLeft className="size-10" />
      </button>
      <Swiper
        className="w-full"
        spaceBetween={50}
        breakpoints={{
          1024: {
            // width: 576,
            slidesPerView: 3,
          },
        }}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>

      <button
        className={isEnd ? "text-slate-400" : ""}
        onClick={() => swiperRef.current?.slideNext()}
      >
        {" "}
        <ChevronRight className="size-10" />
      </button>
    </div>
  );
};

export default Categories;
