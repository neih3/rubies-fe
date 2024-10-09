import Button from "../../components/ui/Button";

const FooterCart = () => {
  return (
    <div className="flex justify-between mt-4">
      <div className="text-sm w-4/12">Tiếp tục mua hàng</div>
      <div className="flex flex-col gap-2 w-4/12">
        <div className="flex justify-between items-center">
          <div className="uppercase text-sm "> Tổng tiền</div>
          <div className="text-red-500 font-bold text-sm">350.000đ</div>
        </div>
        <Button
          className="bg-black  text-white w-full py-5 text-sm hover:animate-jump hover:text-black hover:bg-white"
          title="Đăng nhập"
        ></Button>
      </div>
    </div>
  );
};

export default FooterCart;
