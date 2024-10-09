import { Footer } from "../../components/commom/Footer";
import Header from "../../components/commom/Header";
import Form from "../../components/Form/Form";
import { AtSign, Facebook } from "lucide-react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="font-Var">
      <Header />
      <div className="flex justify-center items-center mb-20 mt-20">
        <div className="lg:w-4/12 w-full">
          <Form title="Đăng nhập">
            <form action="" className="flex flex-col gap-4">
              <Input placeholder="Email" type="email" />
              <Input placeholder="Mật khẩu" type="password" />
              <Button
                className="bg-black text-white w-full py-5 text-sm hover:animate-jump hover:text-black hover:bg-white"
                title="Đăng nhập"
              ></Button>
              <div className="flex justify-between text-sm">
                <span>Quên mật khẩu ?</span>
                <span>
                  <Link to="/account/register">Đăng ký tại đây</Link>
                </span>
              </div>
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

export default Login;
