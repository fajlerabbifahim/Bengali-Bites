import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
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
          to="/oder"
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
    <>
      <div className="navbar fixed w-11/12 mx-auto bg-opacity-15 text-white z-20 bg-black">
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
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
