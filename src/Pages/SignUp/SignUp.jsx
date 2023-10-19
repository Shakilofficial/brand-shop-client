import { Link } from "react-router-dom";

const SignUp = () => {
  return (
      <div className="my-6 py-2">
          <h3 className="text-4xl font-bold text-center text-cyan-600">Welcome !!!</h3>
          <p className="text-xl font-bold text-center" >Register your account</p>
          <section className="flex h-[650px] flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-16 items-center mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img
            src="https://i.ibb.co/89V5sQP/undraw-welcome-cats-thqn.png"
            alt="signUp-img"
            className="rounded-full h-[300px] md:h-full w-full"
          />
        </div>
        <div className="md:w-1/3 max-w-sm">
          <form>
            <label className="mr-1">Name</label>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
            <label className="mr-1">Phone</label>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="number"
              name="phone"
              placeholder="Enter Your Phone"
              required
            />
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
            <div className="mt-6 space-y-3 text-center">
              <button
                className="w-full bg-cyan-500 hover:bg-cyan-700 px-4 py-2 font-semibold text-white uppercase rounded tracking-wider"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-4 font-semibold text-slate-500 text-center">
            Already have an account?
            <Link
              to="/signIn"
              className="ml-2 text-blue-700 hover:underline hover:underline-offset-4"
            >
              SignIn
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
