import { FaHome } from "react-icons/fa";
import { FaCalendar, FaShop } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { MdReviews } from "react-icons/md";
import { RiCodeView } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400 ">
        <ul className="menu p-6 text-xl my-4 ">
          <li className="mt-2">
            <NavLink to="userHome">
              {" "}
              <FaHome /> User Home
            </NavLink>
          </li>
          <li className="mt-2">
            <NavLink to="reservation">
              {" "}
              <FaCalendar /> Reservation
            </NavLink>
          </li>
          <li className="mt-2">
            <NavLink to="cart">
              {" "}
              <IoCart /> My Cart
            </NavLink>
          </li>
          <li className="mt-2">
            <NavLink to="review">
              {" "}
              <MdReviews /> Add Review
            </NavLink>
          </li>
        </ul>

        <div className="divider"></div>
        <ul className="menu p-6 text-xl my-4">
          <li>
            <NavLink to="/">
              {" "}
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/oder/salad">
              {" "}
              <FaShop />
              Shop
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 m-6 border-2 border-red-500">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
