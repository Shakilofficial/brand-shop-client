import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
    return (
        <div className="max-w-[1340px] mx-auto font-sign">
            <Navbar></Navbar>
            <Outlet></Outlet> 
            <Footer></Footer>
        </div>
    );
};

export default Root;