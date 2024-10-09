import { SetStateAction, useRef, useState } from "react";
import Title from "../../components/ui/Title";
import Card from "../../components/ui/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper"; // Import SwiperCore for typing
import { ChevronLeft, ChevronRight } from "lucide-react";
const NewProduct = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [isEnd, setIsEnd] = useState<SetStateAction<boolean>>();
  const [isBeginning, setIsBeginning] = useState<SetStateAction<boolean>>();
  const [isHovered, setIsHovered] = useState<boolean>(true);
  console.log("dang hover", isHovered);
  return (
    <div className="lg:px-40 px-2 mt-10 font-Var mb-6">
      <Title title="Sản phẩm mới" />
      <div className="lg:flex gap-4">
        <div className="w-3/12 lg:block hidden">
          {" "}
          <Card href="//bizweb.dktcdn.net/100/462/587/themes/880841/assets/img_banner_tab.jpg?1724310613023" />
        </div>

        <div
          className="flex items-center lg:w-9/12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            className={`absolute left-[31%] z-10 transition-opacity ${
              isHovered ? "opacity-100" : "opacity-0"
            } ${isBeginning ? "hidden" : "text-slate-950"}`}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft className="size-10" />
          </button>
          <Swiper
            className="w-full"
            spaceBetween={20}
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
            className={`absolute right-[13%] z-10 transition-opacity ${
              isHovered ? "opacity-100" : "opacity-0"
            } ${isEnd ? "hidden" : "text-slate-950"}`}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight className="size-10" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
