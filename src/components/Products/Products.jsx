import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductSlider from "../Slider/ProductSlider";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { brand } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/product/${brand}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [brand]);

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
                <Link to={`/productDetails/${product._id}`}>                <button className="btn btn-primary w-full">View Details</button></Link>
                <Link to={`/updateProduct/${product._id}`} >
                  <button className="btn btn-success w-full">Update</button>
                </Link>
                <button className="btn btn-error">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
