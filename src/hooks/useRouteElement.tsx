import { useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import FemaleFashion from "../pages/FemaleFashion/FemaleFashion";
import Detail from "../pages/Detail/Detail";
import Favorite from "../pages/Favorite/Favorite";
import SeenProduct from "../pages/SeenProduct/SeenProduct";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Cart from "../pages/Cart/Cart";

function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/thoi-trang-nu",
      element: <FemaleFashion />,
    },
    {
      path: "/detail",
      element: <Detail />,
    },
    {
      path: "/favorite",
      element: <Favorite />,
    },
    {
      path: "/seen-product",
      element: <SeenProduct />,
    },
    {
      path: "/account/login",
      element: <Login />,
    },
    {
      path: "/account/register",
      element: <Register />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);
  return routeElement;
}

export default useRouteElement;
