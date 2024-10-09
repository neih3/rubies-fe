import {
  AlignJustify,
  CircleX,
  Gift,
  Heart,
  LogIn,
  MapPin,
  Phone,
  Search,
  ShoppingBag,
  User,
  UserPlus,
} from "lucide-react";

import InputSearch from "../../pages/HomePage/InputSearch";
import { Link } from "react-router-dom";
import { useState } from "react";

const Logo = () => {
  return (
    <Link to="/">
      <img
        className="w-full"
        src="https://bizweb.dktcdn.net/100/462/587/themes/880841/assets/logo.png?1724310613023"
        alt=""
      />
    </Link>
  );
};

const MidHeader = () => {
  return (
    <ul className="flex justify-between items-start text-sm gap-2 border-b-2 pb-2">
      <li className="flex">
        <Phone />
        <span className="uppercase ml-2">hotline:</span>
        <span className="ml-2 font-semibold">070 347 0938</span>
      </li>
      <li className="flex">
        <MapPin />
        <span className="uppercase ml-2">Hệ thống cửa hàng</span>
      </li>
      <li>
        <InputSearch />
      </li>
    </ul>
  );
};

const HeaderNav = () => {
  return (
    <ul className="lg:justify-between text-[#333333] text-base py-2 hidden lg:flex">
      <li className="cursor-pointer">
        <Link to="/">Trang chủ</Link>
      </li>
      <li className="cursor-pointer">
        <Link to="/thoi-trang-nu">Thời trang nữ</Link>
      </li>
      <li className="cursor-pointer">Bộ sưu tập</li>
      <li className="cursor-pointer">Tin tức thời trang</li>
      <li className="cursor-pointer">Trợ giúp</li>
      <li className="cursor-pointer">Khuyến mãi</li>
    </ul>
  );
};

const IconHeader = () => {
  return (
    <ul className="flex justify-between items-center gap-4 text-xs">
      <li>
        <Link to="/favorite" className="flex flex-col items-center gap-1">
          <div>
            <Heart />
          </div>
          <span className="lg:block hidden">Yêu thích</span>
        </Link>
      </li>
      <li className="group">
        <div className="flex flex-col items-center gap-1 relative">
          {" "}
          <div>
            <User />
          </div>
          <span className="lg:block hidden">Tài khoản</span>
        </div>
        <ul
          className="invisible z-10 group-hover:visible absolute right-0  bg-white text-black border border-gray-100  font-semibold text-sm flex flex-col gap-2"
          style={{ boxShadow: "rgba(0,0,0,0.18) 0px 6px 12px 0px" }}
        >
          <li>
            <Link
              to="/account/login"
              className="flex items-center gap-2 cursor-pointer hover:bg-black hover:text-white px-4 py-1"
            >
              {" "}
              <span>
                <LogIn />
              </span>
              Đăng nhập
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-2 cursor-pointer px-4 hover:bg-black hover:text-white py-1"
              to="/account/register"
            >
              <span>
                <UserPlus />
              </span>
              Đăng ký
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link
          className="flex flex-col items-center gap-1 cursor-pointer"
          to="/cart"
        >
          <div>
            <ShoppingBag />
          </div>
          <span className="lg:block hidden">Giỏ hàng</span>
        </Link>
      </li>
    </ul>
  );
};

interface SideBarType {
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  openSideBar: boolean;
}

const SidebarNav = ({ setOpenSideBar, openSideBar }: SideBarType) => {
  return (
    <div
      className={`h-screen w-screen animate-fade-right z-50 font-Var ${
        openSideBar ? "block" : "hidden"
      }`}
    >
      <div className="p-3 bg-black text-white font-bold text-lg uppercase text-center items-center flex justify-between px-5">
        <div></div>
        <h3 className="">Danh mục sản phẩm</h3>
        <CircleX
          onClick={() => setOpenSideBar((prev: boolean) => !prev)}
          className="cursor-pointer"
        />
      </div>
      <ul className="uppercase text-sm pt-2 pl-2 font-medium flex flex-col gap-4">
        <li>
          <Link to="/">Trang chủ</Link>
        </li>
        <li>
          {" "}
          <Link to="/thoi-trang-nu">Thời trang nữ</Link>
        </li>
        <li>Bộ sưu tập</li>
        <li>Tin tức thời trang</li>
        <li>Trợ giúp</li>
        <li className="flex items-center gap-2">
          <Gift className="animate-bounce animate-infinite" />
          <span>Khuyễn mãi</span>
        </li>
      </ul>
    </div>
  );
};

interface HeaderLeftType {
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderLeft = ({ setOpenSideBar }: HeaderLeftType) => {
  return (
    <div className="lg:hidden flex gap-2">
      <AlignJustify onClick={() => setOpenSideBar((prev: boolean) => !prev)} />

      <Search />
    </div>
  );
};

const Header = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <div className="sticky w-full top-0 z-50 pb-2 bg-background-Sidebar">
      <SidebarNav openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      <div className="flex gap-10 pt-2 items-center font-Var justify-center lg:container">
        <HeaderLeft setOpenSideBar={setOpenSideBar} />
        <div className="lg:w-48 w-40">
          <Logo />
        </div>
        <div className="font-light hidden lg:block">
          <MidHeader />
          <HeaderNav />
        </div>
        <IconHeader />
      </div>
    </div>
  );
};

export default Header;
