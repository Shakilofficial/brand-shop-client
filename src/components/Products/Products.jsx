import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import ProductSlider from "../Slider/ProductSlider";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { brand } = useParams();

  const { user } = useContext(AuthContext);

  const email = user.email;

  useEffect(() => {
    fetch(`https://brand-shop-server-e2a7wsb7t-shakilofficial.vercel.app/product/${brand}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [brand]);

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
    <div className="space-y-4">
      <ProductSlider></ProductSlider>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 my-20">
        {products.map((product, index) => (
          <div
            className="flex gap-6 items-center bg-slate-100 p-8 rounded-md"
            key={index}
          >
            <div>
              <img
                className="h-28 w-40 rounded-md"
                src={product.image}
                alt=""
              />
            </div>
            <div className="px-4 gap-5 flex w-full justify-between items-center">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">{product.name} </h3>
                <h4 className="text-lg font-semibold">
                  Brand:{product.brand_name}
                </h4>
                <p className="font-semibold">Price:$ {product.price} </p>
              </div>
              <div className="btn-group btn-group-vertical space-y-2">
                <Link to={`/productDetails/${product._id}`}>
                  {" "}
                  <button className="btn btn-primary w-full">
                    View Details
                  </button>
                </Link>
                <Link to={`/updateProduct/${product._id}`}>
                  <button className="btn btn-success w-full">Update</button>
                </Link>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="btn btn-error"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
