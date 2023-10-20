import { FaTools,FaProductHunt, FaCheck, FaUser, FaUsers, FaUserEdit, FaArrowCircleUp } from "react-icons/fa";
const Features = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-20 text-4xl font-bold text-sky-600">Key Features of BrandShop</h2>
        <div className="grid gap-16 lg:grid-cols-3">
          <div className="mb-12 lg:mb-0">
            <div className="block h-full rounded-lg bg-white shadow-lg">
              <div className="flex justify-center">
                <div className="-mt-8 inline-block rounded-full bg-sky-100 p-4 text-sky-500 shadow-md">
                  <FaTools />
                </div>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-lg font-semibold text-sky-500">Support 24/7</h5>
                <p>
                BrandShop provides a chatbot to assist you with frequently asked questions and inquiries 24/7, ensuring you receive support whenever you need it.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12 lg:mb-0">
            <div className="block h-full rounded-lg bg-white shadow-lg">
              <div className="flex justify-center">
                <div className="-mt-8 inline-block rounded-full bg-sky-100 p-4 text-sky-500 shadow-md">
                  <FaProductHunt />
                </div>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-lg font-semibold text-sky-500">Wide Range of Products</h5>
                <p>
                BrandShop offers a diverse selection of products from a wide range of renowned brands. Whether you're a fashion enthusiast, tech-savvy individual, or a lifestyle connoisseur, we have something for everyone.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12 lg:mb-0">
            <div className="block h-full rounded-lg bg-white shadow-lg">
              <div className="flex justify-center">
                <div className="-mt-8 inline-block rounded-full bg-sky-100 p-4 text-sky-500 shadow-md">
                  <FaCheck />
                </div>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-lg font-semibold text-sky-500">Quality Assurance</h5>
                <p>
                We take pride in delivering top-quality products that meet the highest standards. Each item in our collection is carefully selected to ensure durability, performance, and style.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12 lg:mb-0">
            <div className="block h-full rounded-lg bg-white shadow-lg">
              <div className="flex justify-center">
                <div className="-mt-8 inline-block rounded-full bg-sky-100 p-4 text-sky-500 shadow-md">
                  <FaUsers />
                </div>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-lg font-semibold text-sky-500">User-Friendly</h5>
                <p>
                Our user-friendly platform makes shopping a breeze. Easily browse, search, and select your favorite items with a seamless and intuitive interface.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12 lg:mb-0">
            <div className="block h-full rounded-lg bg-white shadow-lg">
              <div className="flex justify-center">
                <div className="-mt-8 inline-block rounded-full bg-sky-100 p-4 text-sky-500 shadow-md">
                  <FaUserEdit />
                </div>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-lg text-sky-500 font-semibold">Customized</h5>
                <p>
                Personalize your shopping experience with customized product recommendations. Find items that match your preferences and interests effortlessly.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12 lg:mb-0">
            <div className="block h-full rounded-lg bg-white shadow-lg">
              <div className="flex justify-center">
                <div className="-mt-8 inline-block rounded-full bg-sky-100 p-4 text-sky-500 shadow-md">
                  <FaArrowCircleUp />
                </div>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-sky-500 text-lg font-semibold">Latest Trends</h5>
                <p>
                Discover the latest trends and timeless classics in one place. BrandShop keeps you updated with the latest products while also offering timeless favorites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
