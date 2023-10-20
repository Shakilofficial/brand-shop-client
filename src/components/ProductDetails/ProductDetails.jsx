import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const ProductDetails = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const email = user.email;

  // Find the specific product based on the ID
  const detail = details.find((product) => product._id === id);
  // console.log(detail);

  const handleAddToCart = (product) => {
    const cart = {
      image: product.image,
      name: product.name,
      brand_name: product.brand_name,
      type: product.type,
      price: product.price,
      description: product.description,
      rating: product.rating,
      email: email,
    };

    fetch("https://brand-shop-server-e2a7wsb7t-shakilofficial.vercel.app/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
      });
  };

  return (
    <div className="max-w-xl mx-auto">
      <h3 className="text-center font-semibold text-2xl text-sky-500">
        Details of Product:- {detail.name}{" "}
      </h3>
      <div className="block h-full rounded-lg bg-white shadow-lg">
        <div className="flex justify-center">
          <div className="mt-8 inline-block rounded-full p-4 text-sky-500 shadow-md">
            <img className="h-[300px] w-[400px]" src={detail.image} alt="" />
          </div>
        </div>
        <div className="p-6 text-center">
          <h5 className="mb-4 font-semibold text-sky-500 text-3xl">
            {detail.brand_name}
          </h5>
          <p>Product Type: {detail.type} </p>
          <p className="my-3">Price: {detail.price}$ </p>
          <p>Rating: {detail.rating} </p>
          <p className="space-y-4 my-2">Description: {detail.description} </p>
          <button
            onClick={() => handleAddToCart(detail)}
            className="btn btn-error my-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
