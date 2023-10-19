const ContactUs = () => {
  return (
    <div>
      <section className="">
        <div className="bg-gradient-to-r from-cyan-50 to-blue-100 rounded-lg px-4 py-8 lg:py-16 lg:px-16 mx-auto max-w-screen-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-700 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form className="space-y-8">
            <div>
              <label className="block mb-2 text-gray-900">Your email</label>
              <input
                type="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Enter your Email"
                required
              ></input>
            </div>
            <div>
              <label className="block mb-2 text-gray-900">Subject</label>
              <input
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Let us know how we can help you"
                required
              ></input>
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2  text-gray-900">Your message</label>
              <textarea
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="py-3 px-5 text-center text-white rounded-lg bg-cyan-600 sm:w-fit hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="max-w-6xl mx-auto mt-5 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="p-4 space-y-3 bg-sky-100 shadow-md">
            <div className="flex justify-center">
              <img src="https://i.ibb.co/p03ybcM/icons8-call-50.png" alt="" />
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold">Call us:</h3>
              <h5 className="">
                Call us to speak to a member of our team. We are always happy to
                help.
              </h5>
              <p className="text-lg text-cyan-500 font-semibold">
                +1 (646) 786-5060
              </p>
            </div>
          </div>
          <div className="p-4 space-y-3 bg-sky-100 shadow-md">
            <div className="flex justify-center">
              <img src="https://i.ibb.co/xGzBThq/icons8-office-64.png" alt="" />
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold">Company Info:</h3>
              <h5 className="">BrandShop LLC</h5>
              <p className="text-lg text-cyan-500 font-semibold">
                Tax id: BDTAXID001992
              </p>
            </div>
          </div>
          <div className="p-4 space-y-3 bg-sky-100 shadow-md">
            <div className="flex justify-center">
              <img
                src="https://i.ibb.co/KNP5cn4/icons8-location-64.png"
                alt=""
              />
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold">Address:</h3>
              <h5 className="">SILVER LAKE, United States 1941 Late Avenue</h5>
              <p className="text-lg text-cyan-500 font-semibold">
                Zip Code/Postal code:03875
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
