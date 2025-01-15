import { FcDeleteColumn } from "react-icons/fc";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";
import { RiDeleteBinFill } from "react-icons/ri";

const Cart = () => {
  const [cart] = useCart();

  const cartTotalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div>
      <SectionTitle title={"Wanna add more"} subTitle={"My Cart"} />

      {/* contain here  */}
      <div className="w-9/12 mx-auto border-2 border-red-500">
        <div className="flex justify-between">
          <h1 className="text-4xl">Items : {cart.length}</h1>
          <h1 className="text-4xl">Total Price : ${cartTotalPrice} </h1>
          <button className="btn">Pay</button>
        </div>

        {/* cart table  */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h1 className="font-bold"> ${item.price}</h1>
                  </td>

                  <th>
                    <button className="btn btn-ghost text-2xl text-red-500">
                      <RiDeleteBinFill />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
