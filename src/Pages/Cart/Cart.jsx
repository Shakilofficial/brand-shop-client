import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const Cart = () => {
  const [isCart, setIsCart] = useState([]);
  const { user } = useContext(AuthContext);

  const handleDeleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brand-shop-server-e2a7wsb7t-shakilofficial.vercel.app/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Item deleted successfully", data);
            setIsCart((prevCart) => prevCart.filter((item) => item._id !== id));
            Swal.fire("Deleted!", "Your item has been deleted.", "success");
          });
      }
    });
  };

  useEffect(() => {
    fetch(`https://brand-shop-server-e2a7wsb7t-shakilofficial.vercel.app/cart/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setIsCart(data);
      });
  }, []);

  return (
    <div>
      {isCart.length > 0 ? (
        isCart.map((cart) => (
          <div
            key={cart._id}
            className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 my-20"
          >
            <div className="flex gap-6 items-center bg-slate-100 p-8 rounded-md">
              <div>
                <img
                  className="h-28 w-40 rounded-md"
                  src={cart?.image}
                  alt=""
                />
              </div>
              <div className="px-4 gap-5 flex w-full justify-between items-center">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">{cart?.name} </h3>
                  <h4 className="text-lg font-semibold">
                    Brand: {cart?.brand_name}
                  </h4>
                  <p className="font-semibold">Price: $ {cart?.price} </p>
                </div>
                {/* Delete button */}
                <button
                  onClick={() => handleDeleteItem(cart._id)}
                  className="bg-red-500 text-white rounded-md p-2"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-2xl my-3 p-4 text-green-800">
          Please Add Products First
        </p>
      )}
    </div>
  );
};

export default Cart;
