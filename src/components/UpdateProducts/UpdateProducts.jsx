import { useState } from "react";
import {  useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProducts = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    image: "",
    name: "",
  });

  const handleUpdateProduct = (event) => {
    event.preventDefault();

    const form = event.target;
    if (!form) {
      console.error("Form is not defined");
      return;
    }

    const updatedProduct = {
      image: form.image ? form.image.value : "",
      name: form.name ? form.name.value : "",
      brand_name: form.brand_name ? form.brand_name.value : "",
      type: form.type ? form.type.value : "",
      price: form.price ? form.price.value : "",
      description: form.description ? form.description.value : "",
      rating: form.rating ? form.rating.value : "",
    };

    // Send data to the server
    fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => console.error("Error updating product:", error));
  };

  return (
    <div>
      <div className="my-6 max-w-5xl mx-auto">
        <div>
          <h2 className="text-4xl text-center font-bold">
            Update Product
            <span className="text-sky-500"> {product.name}</span>
          </h2>
          <div>
            <form
              onSubmit={handleUpdateProduct}
              className="max-w-6xl mx-auto p-8 rounded-lg md:px-8 lg:px-16 shadow-md"
            >
              {/* Product Image URL*/}
              <div className="mb-2">
                <label className="block text-gray-600 font-semibold text-lg">
                  Image URL
                </label>
                <input
                  type="text"
                  name="image"
                  defaultValue={product.image}
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
                  defaultValue={product.name}
                  className="w-full border bg-transparent border-cyan-500 rounded-md p-2"
                ></input>
              </div>
              {/* Submit Button */}
              <div className="flex justify-center mt-4">
                <input
                  className="w-1/2 mx-auto px-4 py-2 rounded-lg text-lg font-semibold text-white hover:bg-blue-800 bg-blue-500"
                  type="submit"
                  value="Update Product"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProducts;
