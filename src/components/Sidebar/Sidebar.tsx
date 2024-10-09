import SidebarItem from "./SidebarItem";

const noiban: string[] = ["Hà Nội", "Hồ Chí Minh"];
const thuonghieu: string[] = ["Rubies Rubies", "Rubies Studio"];
const mucgia: string[] = [
  "Từ 400.000đ -600.000đ",
  "từ 600.000đ - 800.000đ",
  "800.000đ - 1 triệu",
  "từ 1 triệu - 2 triệu",
  "trên 2 triệu",
];

const Sidebar = () => {
  return (
    <aside className="w-3/12 hidden lg:block">
      <div className="border border-gray-200 py-2 px-4">
        <SidebarItem title="Thương hiệu" data={thuonghieu} />
        <SidebarItem title="Nơi bán" data={noiban} />
        <SidebarItem title="Chọn mức giá" data={mucgia} />
      </div>
    </aside>
  );
};

export default Sidebar;
