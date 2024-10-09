import { Footer } from "../../components/commom/Footer";
import Header from "../../components/commom/Header";
import MainDetail from "../Detail/MainDetail";
import SidebarDetail from "../Detail/SidebarDetail";

const Detail = () => {
  return (
    <div className="font-Var text-sm">
      <Header />
      <div className="flex px-40 mt-6">
        <MainDetail />
        <SidebarDetail />
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
