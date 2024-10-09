import ProductDetail from "./ProductDetail";
import SuggetProduct from "./SuggetProduct";
import SwiperThumbs from "./SwiperThumbs";

const InformationProduct = () => {
  return (
    <div className="mt-6 border-b-2 border-gray-200 pb-1">
      <ul className="uppercase flex gap-6 text-base text-gray-800 font-semibold">
        <li>Chi tiết sản phẩm</li>
        <li>Chính sách đổi trả</li>
        <li>Hướng dẫn sử dụng</li>
      </ul>
    </div>
  );
};
const MainDetail = () => {
  return (
    <div className="lg:w-9/12 px-4 relative ">
      <div className="flex lg:flex-row flex-col gap-10">
        <SwiperThumbs />
        <ProductDetail />
      </div>
      <InformationProduct />
      <SuggetProduct />
    </div>
  );
};

export default MainDetail;
