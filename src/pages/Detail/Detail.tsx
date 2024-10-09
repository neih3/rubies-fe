import { Footer } from "../../components/commom/Footer";
import Header from "../../components/commom/Header";
import MainDetail from "./MainDetail";
import SidebarDetail from "./SidebarDetail";

const Detail = () => {
  return (
    <div className="font-Var text-sm">
      <Header />
      <div className="flex lg:flex-row flex-col lg:px-40 px-2 mt-6">
        <MainDetail />
        <SidebarDetail />
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
