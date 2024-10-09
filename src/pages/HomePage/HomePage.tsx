import Header from "../../components/commom/Header";
import Carousel from "./Carousel";
import Promo from "./Promo";
import Categories from "./Categories";
import TopProduct from "./TopProduct";
import NewProduct from "./NewProduct";
import { Footer } from "../../components/commom/Footer";

const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <Carousel />
      <Promo />
      <Categories />
      <TopProduct />
      <NewProduct />
      <img
        className=""
        width={1920}
        height={600}
        src="https://bizweb.dktcdn.net/100/462/587/themes/880841/assets/bg_banner_big.jpg?1724310613023"
        alt=""
      />
      <Footer />
    </div>
  );
};

export default HomePage;
