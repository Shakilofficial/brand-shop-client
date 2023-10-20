import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="my-6">
      <h3 className="text-4xl font-bold text-center text-cyan-600">
         Access your Profile ?
      </h3>
      <p className="text-xl font-bold text-center">Please, Sign In your account.</p>
      <section className="flex h-[600px] flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img
            src="https://i.ibb.co/k2QLSRC/undraw-Access-account-re-8spm.png"
            alt=""
            className="rounded-full h-[300px] md:h-full w-full"
          />
        </div>
        <div className="md:w-1/3 max-w-sm">
          <form>
            <label className="mr-1">Email</label>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="email"
              name="email"
              placeholder="Enter Email Address"
              required
            />
            <label className="mr-1  mt-4">Password</label>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="password"
              name="password"
              placeholder="Enter Password"
              required
            />
            <div className="mt-4 flex justify-between font-semibold text-sm">
              <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                <input className="mr-1" type="checkbox" />
                <span>Remember Me</span>
              </label>
              <a
                className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div className="mt-6 space-y-3 text-center">
              <button
                className="w-full bg-cyan-500 hover:bg-cyan-700 font-semibold px-4 py-2 text-white uppercase rounded tracking-wider"
                type="submit"
              >
                Sign In
              </button>
              <label className="m-4 text-lg">Sign in with</label>
              <button className="mx-auto w-1/3 bg-blue-200 px-4 py-2 rounded-md">
                <FaGoogle className="text-sky-800 text-lg mx-auto"/>
              </button>
            </div>
          </form>
          <div className="mt-4 font-semibold text-slate-500 text-center">
            Don't have an account?
            <Link
              to="/signUp"
              className="ml-2 text-blue-700 hover:underline hover:underline-offset-4"
            >
              SignUp
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
