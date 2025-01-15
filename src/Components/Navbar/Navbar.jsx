import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../Hooks/useCart";

function Navbar() {
  const { user, logOut } = useAuth();

  const [cart] = useCart();

  if (!cart) {
    return <p>Loading...</p>;
  }
  const navOptions = (
    <>
      {" "}
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "btn btn-ghost normal-case text-lg text-yellow-500"
              : "btn btn-ghost normal-case text-lg hover:text-yellow-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive
              ? "btn btn-ghost normal-case text-lg text-yellow-500"
              : "btn btn-ghost normal-case text-lg hover:text-yellow-500"
          }
        >
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/oder/salad"
          className={({ isActive }) =>
            isActive
              ? "btn btn-ghost normal-case text-lg text-yellow-500"
              : "btn btn-ghost normal-case text-lg hover:text-yellow-500"
          }
        >
          Oder
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar fixed px-10 mx-auto bg-opacity-15 text-white z-20 bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl ">Bengali Bites</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <div className="indicator mr-6">
            <span className="indicator-item badge badge-secondary bg-gray-800 border-none">
              {cart.length}
            </span>
            <div className=" grid h-8 w-8 place-items-center text-2xl">
              <Link to="/">
                <FaCartShopping />
              </Link>
            </div>
          </div>
          {user ? (
            <>
              <button onClick={() => logOut()} className="btn">
                <Link>Log Out</Link>
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
