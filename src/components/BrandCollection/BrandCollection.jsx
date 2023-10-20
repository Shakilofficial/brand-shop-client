import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";

const BrandCollection = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/Brands.json")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-blue-700">
        Brands
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-700 sm:text-xl">
        Partnering with Prominent Brands
      </p>
      <div className="my-16 grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {brands.map((brand) => (
          <BrandCard key={brand.title} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default BrandCollection;
