import React from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

function FoodCard({ items }) {
  const { name, recipe, price, image, _id } = items;
  const { user } = useAuth();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const handleAddToCart = () => {
    //if user exist create a cart data and post to database
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        //if data is successfully post to database send a confirm message
        //when a item add to cart, cart api refetch
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please Login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };
  return (
    <div>
      <div className="card h-[440px]  bg-base-100 w-96 shadow-xl border ">
        <figure className="px-10 pt-10 relative">
          <img src={image} alt="Shoes" className="rounded-xl" />
          <p className="bg-black px-1 font-semibold rounded-sm text-white absolute right-7 top-7">
            $ {price}
          </p>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button onClick={handleAddToCart} className="btn btn-outline  mt-4">
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
