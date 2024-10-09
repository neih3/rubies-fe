import { Link } from "react-router-dom";
import Card from "../ui/Card";
import TitleProduct from "./TitleProduct";

const MainProduct = () => {
  return (
    <div className="lg:w-9/12">
      <TitleProduct title="Thời trang nữ" />
      <div className="grid lg:grid-cols-3 grid-cols-2 lg:grid-rows-2 grid-rows-3 gap-5 mt-4">
        <Link to="/detail">
          <Card
            href="https://bizweb.dktcdn.net/100/462/587/products/33-cda17a70-58d4-4949-9087-8b825c9343a3.png?v=1721714278673"
            title="Váy Quần Zoey Skort RR24VQ19"
            price="420.000"
          />
        </Link>
        <Card
          href="https://bizweb.dktcdn.net/100/462/587/products/33-cda17a70-58d4-4949-9087-8b825c9343a3.png?v=1721714278673"
          title="Váy Quần Zoey Skort RR24VQ19"
          price="420.000"
        />
        <Card
          href="https://bizweb.dktcdn.net/100/462/587/products/33-cda17a70-58d4-4949-9087-8b825c9343a3.png?v=1721714278673"
          title="Váy Quần Zoey Skort RR24VQ19"
          price="420.000"
        />
        <Card
          href="https://bizweb.dktcdn.net/100/462/587/products/33-cda17a70-58d4-4949-9087-8b825c9343a3.png?v=1721714278673"
          title="Váy Quần Zoey Skort RR24VQ19"
          price="420.000"
        />
        <Card
          href="https://bizweb.dktcdn.net/100/462/587/products/33-cda17a70-58d4-4949-9087-8b825c9343a3.png?v=1721714278673"
          title="Váy Quần Zoey Skort RR24VQ19"
          price="420.000"
        />
        <Card
          href="https://bizweb.dktcdn.net/100/462/587/products/33-cda17a70-58d4-4949-9087-8b825c9343a3.png?v=1721714278673"
          title="Váy Quần Zoey Skort RR24VQ19"
          price="420.000"
        />
      </div>
    </div>
  );
};

export default MainProduct;
