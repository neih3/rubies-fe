import { ArrowDownWideNarrow } from "lucide-react";

interface Props {
  title: string;
}

const TitleProduct = ({ title }: Props) => {
  return (
    <div className="flex justify-between p-3 bg-gray-100">
      <h3 className="uppercase">{title}</h3>
      <div className="flex text-sm items-center gap-4">
        <div className="flex items-center text-gray-500">
          <ArrowDownWideNarrow className="size-5" />
          <span>Sắp xếp</span>
        </div>
        <div className="flex">
          <select className="bg-gray-100 focus:outline-none" name="" id="">
            <option value="Mặc định">Mặc định</option>
            <option>A &#8594; Z</option>
            <option>Z &#8592; A</option>
            <option>Giá tăng dần</option>
            <option>Giá giảm dần</option>
            <option value="">Hàng mới nhất</option>
            <option value="">Hàng cũ nhất</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TitleProduct;
