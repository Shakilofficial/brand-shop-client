import { useContext, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [navbar, setNavbar] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        // console.log(result.user);
        Swal.fire({
          title: "Success!",
          text: "User Logout Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .catch((error) => {
        // console.error(error);
      });
  };

  const navLinks = (
    <>
      <li className="mr-2 text-md md:text-lg font-semibold">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white bg-blue-500 px-2 py-2 rounded-lg"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="mr-2 text-lg font-semibold">
        <NavLink
          to="/addProducts"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white bg-blue-500 px-2 py-2 rounded-lg"
              : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li className="mr-2 text-lg font-semibold">
        <NavLink
          to="/cart/:email"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white bg-blue-500 px-2 py-2 rounded-lg"
              : ""
          }
        >
          My Cart
        </NavLink>
      </li>
      <li className="text-lg font-semibold">
        <NavLink
          to="/contactUs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white bg-blue-500 px-2 py-2 rounded-lg"
              : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="mb-4">
      <nav className="w-full py-2 bg-gradient-to-r from-cyan-200 to-blue-300 rounded-lg">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-4">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="/">
                <h2 className="text-2xl font-bold">
                  Brand<span className="text-blue-700">Shop</span>
                </h2>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col md:flex-row items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {navLinks}
              </ul>
            </div>
          </div>
          <div>
            <div className="gap-5 flex justify-center items-center">
              <div>
                {user ? <p className="px-2 text-lg font-semibold">{user.displayName}</p> : ""}
              </div>
              <div className="mr-2">
                {user && user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    title={user.displayName}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                )}
              </div>
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="px-2 py-2 font-semibold text-white text-lg bg-blue-500 rounded-md shadow hover:bg-blue-800"
                >
                  Sign Out
                </button>
              ) : (
                <Link to="/signIn">
                  <button className="px-4 py-2 font-semibold text-white text-lg bg-blue-500 rounded-md shadow hover:bg-blue-800">
                    Sign In
                  </button>
                </Link>
              )}
              <button
                onClick={toggleDarkMode}
                className="text-3xl text-blue-900"
              >
                {isDarkMode ? (
                  <>
                    <FaSun className="flex justify-center items-center" />
                  </>
                ) : (
                  <>
                    <FaMoon className="flex justify-center items-center" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
