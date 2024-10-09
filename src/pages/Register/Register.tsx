import { Footer } from "../../components/commom/Footer";
import Header from "../../components/commom/Header";
import Form from "../../components/Form/Form";
import { AtSign, Facebook } from "lucide-react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const Register = () => {
  return (
    <div className="font-Var">
      <Header />
      <div className="flex justify-center items-center mb-20 mt-20">
        <div className="lg:w-4/12 w-full  ">
          <Form title="Đăng ký">
            <p className="text-center -mt-4 mb-4">
              Đã có tài khoản, đăng nhập tại dây
            </p>
            <form action="" className="flex flex-col gap-4">
              <Input placeholder="Họ" type="text" />
              <Input placeholder="Tên" type="text" />
              <Input placeholder="Email" type="email" />
              <Input placeholder="Số điện thoại" type="text" />
              <Input placeholder="Mật khẩu" type="password" />
              <Button
                className="bg-black text-white w-full py-5 text-sm hover:animate-jump hover:text-black hover:bg-white"
                title="Đăng ký"
              ></Button>
              <p className="text-center text-sm">Hoặc đăng nhập qua</p>
              <div className="flex justify-center items-center gap-2">
                <button className="flex text-white bg-blue-600 py-2 px-4 w-6/12 justify-center items-center gap-2">
                  <Facebook />
                  <span className="text-xs">Facebook</span>
                </button>
                <button className="flex text-white bg-red-600 py-2 px-4 w-6/12 justify-center items-center gap-2">
                  <AtSign />
                  <span className="text-xs">Google</span>
                </button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
