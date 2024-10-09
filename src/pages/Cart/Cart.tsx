import { Footer } from "../../components/commom/Footer";
import Header from "../../components/commom/Header";
import Layout from "../../components/Layout/Layout";
import FooterCart from "./FooterCart";
import Table from "./Table";

const Cart = () => {
  return (
    <div className="font-Var">
      <Header />
      <div className="lg:px-40 px-2 mt-8 mb-6">
        <Layout>
          <h3 className="uppercase font-bold bg-gray-100 p-2 rounded mb-4">
            Giỏ hàng của bạn
          </h3>
          <Table />
          <FooterCart />
        </Layout>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
