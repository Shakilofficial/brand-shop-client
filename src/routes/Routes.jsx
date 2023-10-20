import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../Pages/AddProducts/AddProducts";
import Cart from "../Pages/Cart/Cart";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Products from "../components/Products/Products";
import UpdateProducts from "../components/UpdateProducts/UpdateProducts";
import Root from "../layouts/Root";
import PrivateRoute from "../providers/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "updateProduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProducts />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://brand-shop-server-e2a7wsb7t-shakilofficial.vercel.app/product"
          ),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://brand-shop-server-e2a7wsb7t-shakilofficial.vercel.app/product"
          ),
      },
      {
        path: "/cart/:email",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "/product/:brand",
        element: (
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        ),
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
