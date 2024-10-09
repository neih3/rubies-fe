import { Minus, Plus, StepForward } from "lucide-react";
import CardSidebar from "./CardSidebar";
import { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const SidebarDetail = () => {
  const [active, setActive] = useState<React.SetStateAction<boolean>>(false);
  const handleClick = (): void => {
    setActive(!active);
  };

  return (
    <div className="lg:w-3/12 font-Var flex flex-col gap-6 pb-4">
      <CardSidebar className="lg:block hidden" title="Danh mục sản phẩm">
        <ul className="capitalize text-sm px-4 text-left flex flex-col gap-4 p-4">
          <li className="cursor-pointer">Sản phẩm mới</li>
          <li className=" cursor-pointer">
            <div
              onClick={handleClick}
              className="flex items-center justify-between"
            >
              {" "}
              <span> Thời trang nữ</span>
              <span className={`${active && "animate-rotate-x"}`}>
                {active ? <Minus /> : <Plus size={18} />}
              </span>
            </div>
            {/* ul con */}
            <ul
              className={`capitalize text-sm animate-flip-down  text-left flex flex-col gap-4 py-4 pl-4 ${
                active ? "block " : "hidden"
              }`}
            >
              <li className="cursor-pointer">Sản phẩm mới</li>
              <li className=" cursor-pointer">
                <div className="flex items-center justify-between">
                  {" "}
                  <span> Thời trang nữ</span>
                  <span>
                    <Plus size={18} />
                  </span>
                </div>
                <ul></ul>
              </li>
              <li className=" cursor-pointer">
                <div className="flex items-center justify-between">
                  {" "}
                  <span> Bộ sưu tập</span>
                  <span>
                    <Plus size={18} />
                  </span>
                </div>
              </li>
              <li className=" cursor-pointer">
                <div className="flex items-center justify-between">
                  {" "}
                  <span> Thời trang mẹ và bé</span>
                  <span>
                    <Plus size={18} />
                  </span>
                </div>
              </li>
              <li className="cursor-pointer">Sản phẩm khuyến mại</li>
            </ul>
          </li>
          <li className=" cursor-pointer">
            <div className="flex items-center justify-between">
              {" "}
              <span> Bộ sưu tập</span>
              <span>
                <Plus size={18} />
              </span>
            </div>
          </li>
          <li className=" cursor-pointer">
            <div className="flex items-center justify-between">
              {" "}
              <span> Thời trang mẹ và bé</span>
              <span>
                <Plus size={18} />
              </span>
            </div>
          </li>
          <li className="cursor-pointer">Sản phẩm khuyến mại</li>
        </ul>
      </CardSidebar>
      <CardSidebar title="Có thể bạn thích" className="lg:mt-0 mt-4">
        <ul className="pt-4 py-2 flex flex-col gap-4">
          <li className="border-b-2 border-gray-200 pb-3">
            <Card />
          </li>
          <li className="border-b-2 border-gray-200 pb-3">
            <Card />
          </li>
          <li className="border-b-2 border-gray-200 pb-3">
            <Card />
          </li>
          <li className=" pb-3">
            <Card />
          </li>
        </ul>
      </CardSidebar>
      <CardSidebar title="Sản phẩm đã xem">
        <ul className="px-4 py-2 flex flex-col gap-4">
          <li className="border-b-2 border-gray-200 pb-3">
            <Card />
          </li>
          <li className="border-b-2 border-gray-200 pb-3">
            <Card />
          </li>
          <li className="border-b-2 border-gray-200 pb-3">
            <Card />
          </li>
          <li className="pb-3">
            <Card />
          </li>
          <li>
            <Link
              to="/seen-product"
              className="italic text-center text-gray-900 flex items-center justify-center gap-1"
            >
              {" "}
              Xem Thêm
              <span>
                <StepForward size={14} />
              </span>
            </Link>
          </li>
        </ul>
      </CardSidebar>
    </div>
  );
};

export default SidebarDetail;
