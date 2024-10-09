import MainProduct from "../../components/MainProduct/MainProduct";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Footer } from "../../components/commom/Footer";
import Header from "../../components/commom/Header";

const FemaleFashion = () => {
  return (
    <div className="font-Var text-base">
      <Header />
      <div className="flex lg:px-40 px-2 lg:mb-5 gap-4 mt-5">
        <Sidebar />
        <MainProduct />
      </div>
      <Footer />
    </div>
  );
};

export default FemaleFashion;
