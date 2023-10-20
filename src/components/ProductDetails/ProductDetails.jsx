import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const details = useLoaderData();
  const { id } = useParams();

  // Find the specific product based on the ID
  const detail = details.find((product) => product._id === id);
  console.log(detail);

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
          <h5 className="mb-4 text-lg font-semibold text-sky-500">
            {detail.brand_name}
          </h5>
          <p>Product Type: {detail.type} </p>
          <p>Price: {detail.price} </p>
          <p>Rating: {detail.rating} </p>
          <p>Description: {detail.description} </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
