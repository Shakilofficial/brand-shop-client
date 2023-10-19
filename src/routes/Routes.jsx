import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AddProducts from "../Pages/AddProducts/AddProducts";
import Cart from "../Pages/Cart/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element:<Home/>
            },
            {
                path: "/addProducts",
                element: <AddProducts/>
            },
            {
                path: "/cart",
                element:<Cart/>
            },
            {
                path: "/signIn",
                element:<SignIn></SignIn>
            },
            {
                path: "/signUp",
                element:<SignUp></SignUp>
            },
            {
                path: "/contactUs",
                element:<ContactUs></ContactUs>
            }
        ]
    }
])

export default router;