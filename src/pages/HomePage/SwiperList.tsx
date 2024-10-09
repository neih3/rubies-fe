// import React, { SetStateAction, useRef, useState } from "react";
// import Card from "../../components/ui/Card";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { Swiper as SwiperCore } from "swiper"; // Import SwiperCore for typing
// import { ChevronLeft, ChevronRight } from "lucide-react";
// const SwiperList = () => {
//   const swiperRef = useRef<SwiperCore | null>(null);
//   const [isEnd, setIsEnd] = useState<SetStateAction<boolean>>();
//   const [isBeginning, setIsBeginning] = useState<SetStateAction<boolean>>();
//   const [isHovered, setIsHovered] = useState<boolean>(true);
//   console.log("dang hover", isHovered);
//   return (
//     <div className="px-40 mt-10 font-Var">
//       <div
//         className="flex items-center "
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <button
//           className={`absolute left-[8%] z-10 transition-opacity ${
//             isHovered ? "opacity-100" : "opacity-0"
//           } ${isBeginning ? "text-white" : "text-black"}`}
//           onClick={() => swiperRef.current?.slidePrev()}
//         >
//           <ChevronLeft className="size-10" />
//         </button>
//         <Swiper
//           className="w-full"
//           spaceBetween={20}
//           slidesPerView={4}
//           onBeforeInit={(swiper) => {
//             swiperRef.current = swiper;
//           }}
//           modules={[Navigation]}
//           onSlideChange={(swiper) => {
//             setIsBeginning(swiper.isBeginning);
//             setIsEnd(swiper.isEnd);
//           }}
//         >
//           <SwiperSlide>
//             <Card />
//           </SwiperSlide>
//           <SwiperSlide>
//             <Card />
//           </SwiperSlide>
//           <SwiperSlide>
//             <Card />
//           </SwiperSlide>
//           <SwiperSlide>
//             <Card />
//           </SwiperSlide>
//           <SwiperSlide>
//             <Card />
//           </SwiperSlide>
//           <SwiperSlide>
//             <Card />
//           </SwiperSlide>
//         </Swiper>
//         <button
//           className={`absolute right-[8%] z-10 transition-opacity ${
//             isHovered ? "opacity-100" : "opacity-0"
//           } ${isEnd ? "text-white" : "text-black"}`}
//           onClick={() => swiperRef.current?.slideNext()}
//         >
//           <ChevronRight className="size-10" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SwiperList;
