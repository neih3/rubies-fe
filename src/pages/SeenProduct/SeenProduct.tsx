import { Footer } from "../../components/commom/Footer";
import Header from "../../components/commom/Header";
import Layout from "../../components/Layout/Layout";
import Card from "../../components/ui/Card";

const SeenProduct = () => {
  return (
    <div className="font-Var">
      <Header />
      <div className="lg:px-40 px-2 pt-6 pb-5">
        <Layout title="Sản phâm đã xem" />
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-5">
          <Card
            price="400.000"
            title="Áo Sơ Mi Nữ Kirin Shirt RR24AS28"
            href="https://bizweb.dktcdn.net/thumb/large/100/462/587/products/6-d1abe6bd-cd8e-411c-ab6d-9e81dd3bb9f6.png?v=1727601131983"
          />
          <Card
            price="400.000"
            title="Áo Sơ Mi Nữ Kirin Shirt RR24AS28"
            href="https://bizweb.dktcdn.net/thumb/large/100/462/587/products/6-d1abe6bd-cd8e-411c-ab6d-9e81dd3bb9f6.png?v=1727601131983"
          />
          <Card
            price="400.000"
            title="Áo Sơ Mi Nữ Kirin Shirt RR24AS28"
            href="https://bizweb.dktcdn.net/thumb/large/100/462/587/products/6-d1abe6bd-cd8e-411c-ab6d-9e81dd3bb9f6.png?v=1727601131983"
          />
          <Card
            price="400.000"
            title="Áo Sơ Mi Nữ Kirin Shirt RR24AS28"
            href="https://bizweb.dktcdn.net/thumb/large/100/462/587/products/6-d1abe6bd-cd8e-411c-ab6d-9e81dd3bb9f6.png?v=1727601131983"
          />
          <Card
            price="400.000"
            title="Áo Sơ Mi Nữ Kirin Shirt RR24AS28"
            href="https://bizweb.dktcdn.net/thumb/large/100/462/587/products/6-d1abe6bd-cd8e-411c-ab6d-9e81dd3bb9f6.png?v=1727601131983"
          />
          <Card
            price="400.000"
            title="Áo Sơ Mi Nữ Kirin Shirt RR24AS28"
            href="https://bizweb.dktcdn.net/thumb/large/100/462/587/products/6-d1abe6bd-cd8e-411c-ab6d-9e81dd3bb9f6.png?v=1727601131983"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SeenProduct;
