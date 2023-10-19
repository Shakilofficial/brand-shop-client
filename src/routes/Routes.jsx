import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../Pages/AddProducts/AddProducts";
import Cart from "../Pages/Cart/Cart";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Products from "../components/Products/Products";
import Root from "../layouts/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addProducts",
        element: <AddProducts />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:brand",
        element: <Products />,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);

export default router;
