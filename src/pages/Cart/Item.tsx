import Card from "./Card";

interface Props {
  price: string;
  total: string;
}

const Item = ({ price, total }: Props) => {
  return (
    <>
      <Card className="w-6/12" />
      <div className="w-2/12 text-red-500 font-bold">
        {price} <span>đ</span>
      </div>
      <div className="w-2/12">
        <button className="border border-gray-200 p-1">-</button>
        <button className="border border-gray-200 p-1">1</button>
        <button className="border border-gray-200 p-1">+</button>
      </div>
      <div className="w-2/12 text-red-500 font-bold">
        {total} <span>đ</span>
      </div>
    </>
  );
};

export default Item;
