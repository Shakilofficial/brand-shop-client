const AddProducts = () => {
  return (
    <div
      className="bg-cover bg-center p-4 md:p-8 lg:p-12 rounded-lg max-w-6xl mx-auto"
      style={{
        backgroundImage: `url(https://i.ibb.co/v3Hny09/mesh-809.png)`,
      }}
    >
      <div>
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-blue-700">
          Add Products
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-700 sm:text-xl">
          You can add your desired products here.
        </p>
      </div>
      <div>
        <form className="max-w-6xl mx-auto p-8 rounded-lg md:px-8 lg:px-16 shadow-md">
          {/* Product Image URL*/}
          <div className="mb-2">
            <label className="block text-gray-600 font-semibold text-lg">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              className="w-full border bg-transparent border-cyan-500 rounded-md p-2"
            ></input>
          </div>
          {/* Product Name */}
          <div className="mb-2">
            <label className="block text-gray-600 font-semibold text-lg">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full border bg-transparent border-cyan-500 rounded-md p-2"
            ></input>
          </div>
          {/* Brand Name */}
          <div className="mb-2">
            <label className="block text-gray-600 font-semibold text-lg">
              Brand Name
            </label>
            <input
              type="text"
              name="brand-name"
              className="w-full border bg-transparent border-cyan-500 rounded-md p-2"
            ></input>
          </div>
          {/* Products Type */}
          <div className="mb-2">
            <label className="block text-gray-600 font-semibold text-lg">
              Type
            </label>
            <input
              type="text"
              name="type"
              className="w-full border bg-transparent border-cyan-500 rounded-md p-2"
            ></input>
          </div>
          {/* Price */}
          <div className="mb-2">
            <label className="block text-gray-600 font-semibold text-lg">
              Price
            </label>
            <input
              type="number"
              name="price"
              className="w-full border bg-transparent border-cyan-500 rounded-md p-2"
            ></input>
          </div>
          {/* Description */}
          <div className="mb-2">
            <label className="block text-gray-600 font-semibold text-lg">
              Short Description
            </label>
            <input
              type="text"
              name="description"
              className="w-full border bg-transparent border-cyan-500 rounded-md p-2"
            ></input>
          </div>
          {/* Rating */}
          <div className="mb-2">
            <label className="block text-gray-600 font-semibold text-lg">
              Rating
            </label>
            <input
              type="number"
              name="rating"
              className="w-full border bg-transparent border-cyan-500 rounded-md p-2"
            ></input>
          </div>
          {/* Submit Button */}
          <div className="flex justify-center mt-4">
            <input
              className="w-1/2 mx-auto px-4 py-2 rounded-lg text-lg font-semibold text-white hover:bg-blue-800 bg-blue-500"
              type="submit"
              value="Add Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
