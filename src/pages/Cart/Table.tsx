import Item from "./Item";

const Table = () => {
  return (
    <div className="border border-gray-200">
      <header
        className="uppercase px-2 py-2 flex font-bold border-b border-gray-200 "
        style={{ borderRadius: "10px 10px 0px 0px" }}
      >
        <div className="w-6/12">Thông tin sản phẩm</div>
        <div className="w-2/12">Đơn giá</div>
        <div className="w-2/12">Số lượng</div>
        <div className="w-2/12">Thành tiền</div>
      </header>
      <ul className="py-4 flex flex-col gap-3">
        <li className="flex text-sm items-center px-4 border-b border-gray-200 pb-4">
          <Item price="350.000" total="350.000" />
        </li>
        <li className="flex text-sm items-center px-4 border-b border-gray-200 pb-4">
          <Item price="350.000" total="350.000" />
        </li>
        <li className="flex text-sm items-center px-4 border-b border-gray-200 pb-4">
          <Item price="350.000" total="350.000" />
        </li>
      </ul>
    </div>
  );
};

export default Table;
