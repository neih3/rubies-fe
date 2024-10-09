import { SetStateAction, useRef, useState } from "react";
import Title from "../../components/ui/Title";
import Card from "../../components/ui/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper"; // Import SwiperCore for typing
import { ChevronLeft, ChevronRight } from "lucide-react";

const SuggetProduct = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [isEnd, setIsEnd] = useState<SetStateAction<boolean>>();
  const [isBeginning, setIsBeginning] = useState<SetStateAction<boolean>>();
  const [isHovered, setIsHovered] = useState<boolean>(true);
  console.log("dang hover", isHovered);
  return (
    <div className=" font-Var mt-8 relative">
      <Title title="Sản phẩm liên quan" />

      <div
        className="flex items-center "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          className={`absolute left-[0] z-10 transition-opacity ${
            isHovered ? "opacity-100" : "opacity-0"
          } ${isBeginning ? "hidden" : "text-white"}`}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft className="size-10" />
        </button>
        <Swiper
          className="w-full"
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={20}
          slidesPerView={2}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation]}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          <SwiperSlide>
            <Card
              price="340.000"
              title="Áo Nữ Dệt Kim Newy Polo RR24DK10"
              href="https://bizweb.dktcdn.net/100/462/587/products/22-7eb91ec5-7ad4-40a6-8718-e82c9711d6f1.png?v=1718340566243"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              price="340.000"
              title="Áo Nữ Dệt Kim Newy Polo RR24DK10"
              href="https://bizweb.dktcdn.net/100/462/587/products/22-7eb91ec5-7ad4-40a6-8718-e82c9711d6f1.png?v=1718340566243"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              price="340.000"
              title="Áo Nữ Dệt Kim Newy Polo RR24DK10"
              href="https://bizweb.dktcdn.net/100/462/587/products/22-7eb91ec5-7ad4-40a6-8718-e82c9711d6f1.png?v=1718340566243"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              price="340.000"
              title="Áo Nữ Dệt Kim Newy Polo RR24DK10"
              href="https://bizweb.dktcdn.net/100/462/587/products/22-7eb91ec5-7ad4-40a6-8718-e82c9711d6f1.png?v=1718340566243"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              price="340.000"
              title="Áo Nữ Dệt Kim Newy Polo RR24DK10"
              href="https://bizweb.dktcdn.net/100/462/587/products/22-7eb91ec5-7ad4-40a6-8718-e82c9711d6f1.png?v=1718340566243"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              price="340.000"
              title="Áo Nữ Dệt Kim Newy Polo RR24DK10"
              href="https://bizweb.dktcdn.net/100/462/587/products/22-7eb91ec5-7ad4-40a6-8718-e82c9711d6f1.png?v=1718340566243"
            />
          </SwiperSlide>
        </Swiper>
        <button
          className={`absolute right-[0%] z-10 transition-opacity ${
            isHovered ? "opacity-100" : "opacity-0"
          } ${isEnd ? "hidden" : "text-white"}`}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight className="size-10" />
        </button>
      </div>
    </div>
  );
};

export default SuggetProduct;
