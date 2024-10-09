import { Heart } from "lucide-react";
import Button from "../../components/ui/Button";
import Title from "../../components/ui/Title";

interface Title {
  title: string;
}
const ProductTitle = ({ title }: Title) => {
  return <h3 className="text-2xl font-semibold">{title}</h3>;
};
const ClearFix = ({ title }: Title) => {
  return (
    <div>
      <span>Mã: </span>
      <span>{title}</span>
    </div>
  );
};
const Brand = ({ title }: Title) => {
  return (
    <div>
      <span>Thương hiệu: </span>
      <span>{title}</span>
    </div>
  );
};
const Condition = ({ title }: Title) => {
  return (
    <div>
      <span>Tình trạng: </span>
      <span>{title}</span>
    </div>
  );
};

const ProductDetail = () => {
  return (
    <div className="flex flex-col gap-2">
      <ProductTitle title="Áo Dệt Kim Danny Cardigan RR24DK21" />
      <ClearFix title="RR24DK21-S-DE" />
      <div className="flex gap-2 items-center">
        <Brand title="Rubies Rubies" />
        <div>|</div>
        <Condition title="Còn hàng" />
      </div>
      <div className="text-2xl text-red-600 font-bold border-b-2 pb-5">
        <span>390.000</span>
        <span>đ</span>
      </div>
      <p className="italic">Mô tả đang cập nhật</p>
      <div>
        <div className="flex text-base mb-2">
          <h3>Kích thước: </h3>
          <span className="ml-2">S</span>
        </div>
        <div className="flex gap-2">
          <Button title="S" active />
          <Button title="M" />
          <Button title="L" />
        </div>
      </div>
      <div>
        <div className="flex text-base mb-2">
          <h3>Màu sắc: </h3>
          <span className="ml-2 capitalize"> Trắng kem</span>
        </div>
        <div className="flex gap-2">
          <Button radius style={{ background: "black" }} />
          <Button radius />
        </div>
      </div>
      <div className="flex gap-4 items-center mt-2">
        <div className="w-3/12">
          <input
            className="w-full py-1 border border-slate-950 px-4 text-center"
            type="text"
          />
        </div>
        <div className="w-6/12">
          <Button
            title="Thêm vào giỏ hàng"
            style={{
              background: "black",
              textTransform: "uppercase",
              fontSize: "12px",
              width: "100%",
              color: "white",
              padding: "14px",
            }}
          ></Button>
        </div>
        <div className="w-3/12">
          <Heart />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
