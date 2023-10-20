const Reviews = () => {
  return (
    <div className="my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="mb-8 text-4xl text-blue-600 font-bold">
            Customer Reviews
          </h2>
          <p className="mb-6 font-light text-lg">
            Explore what our valued customers have to say about their
            experiences. Read their honest reviews and testimonials to discover
            why they choose our products or services and what sets us apart.
          </p>
        </div>
        <div className="grid gap-x-6 md:grid-cols-3 xl:gap-x-12">
          {/* Card-1 */}
          <div className="mb-6 lg:mb-0">
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
                  className="w-full rounded-t-lg"
                />
                <svg
                  className="absolute left-0 bottom-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="currentColor"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-lg font-bold">Sarah Johnson</h5>
                <h6 className="mb-4 font-medium text-cyan-500">
                  Graphic Designer
                </h6>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p>
                  As a graphic designer, I appreciate the clean and intuitive
                  design of your website. It's easy to navigate and find the
                  information I need. The visuals are stunning, and it's clear
                  that a lot of thought went into the user experience.
                </p>
              </div>
            </div>
          </div>
          {/* Card-2 */}
          <div className="mb-6 lg:mb-0">
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
                  className="w-full rounded-t-lg"
                />
                <svg
                  className="absolute left-0 bottom-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="currentColor"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-lg font-bold">John Smith</h5>
                <h6 className="mb-4 font-medium text-cyan-500">
                  Software Engineer
                </h6>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p>
                  Your website not only looks great but also performs well. The
                  loading speed is impressive, and the content is organized
                  logically. As a software engineer, I value efficient web
                  development, and your site delivers that. Kudos!
                </p>
              </div>
            </div>
          </div>
          {/* Card-3 */}
          <div className="mb-6 lg:mb-0">
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/15.jpg"
                  className="w-full rounded-t-lg"
                />
                <svg
                  className="absolute left-0 bottom-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="currentColor"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-lg font-bold">Lisa Martinez</h5>
                <h6 className="mb-4 font-medium text-cyan-500">
                  Marketing Manager
                </h6>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p>
                  I've used your website for market research, and I find it
                  incredibly informative. The detailed product listings and
                  reviews have been invaluable for our marketing efforts. The
                  site is a valuable resource for our team, and I highly
                  recommend it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
