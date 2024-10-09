import { SetStateAction, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import SwiperCore from "swiper"; // Nhập SwiperCore để sử dụng kiểu Swiper
import { ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  "https://bizweb.dktcdn.net/100/462/587/products/1-3fa000a0-c373-479e-b43e-23c9cbb0821a.png?v=1720431643417",
  "https://bizweb.dktcdn.net/100/462/587/products/2-9cfc96d1-05b2-41f4-8408-e3605acc2503.png?v=1720431644760",
  "https://bizweb.dktcdn.net/100/462/587/products/6-1f4fb920-8cc3-4f04-b42e-c5be86a44780.png?v=1722838538237",
  "https://bizweb.dktcdn.net/100/462/587/products/8-0bb91e50-3233-4b2c-b977-27dc93b47f86.png?v=1722838538237",
  "https://bizweb.dktcdn.net/100/462/587/products/8-0bb91e50-3233-4b2c-b977-27dc93b47f86.png?v=1722838538237",
  "https://bizweb.dktcdn.net/100/462/587/products/8-0bb91e50-3233-4b2c-b977-27dc93b47f86.png?v=1722838538237",
];

const SwiperThumbs = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0); // Quản lý slide đang hoạt động
  const swiperRef = useRef<SwiperCore | null>(null);
  const [isEnd, setIsEnd] = useState<SetStateAction<boolean>>();
  const [isBeginning, setIsBeginning] = useState<SetStateAction<boolean>>();

  return (
    <div className="lg:w-5/12">
      <div>
        <Swiper
          spaceBetween={10}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
          modules={[FreeMode, Thumbs]}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {data.map((item: string, index: number) => {
            return (
              <SwiperSlide key={index}>
                <img src={item} alt="Nature 1" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="mt-3 flex items-center">
        <button
          className={`absolute left-[0] z-10 transition-opacity bg-slate-50  ${
            isBeginning ? "hidden" : "text-slate-950"
          }`}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft className="size-6" />
        </button>
        <Swiper
          onSwiper={setThumbsSwiper} // Đặt Swiper instance sau khi khởi tạo
          spaceBetween={10}
          slidesPerView={5}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {data.map((item: string, index: number) => {
            return (
              <SwiperSlide
                key={index}
                className={
                  activeIndex === index ? "border-2 border-sky-500" : ""
                }
              >
                <img src={item} alt="Nature 1 thumbnail" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          className={`absolute lg:left-[39%] right-0 z-10 transition-opacity bg-slate-50  ${
            isEnd ? "hidden" : "text-slate-950"
          }`}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight className="size-6" />
        </button>
      </div>
    </div>
  );
};

export default SwiperThumbs;
