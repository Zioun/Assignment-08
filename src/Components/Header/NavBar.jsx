import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  
  const links = (
    <>
      <Link to="/"><li><a>Home</a></li></Link> 
      <li><a>Listed Books</a></li>
      <li><a>Pages to Read</a></li>
    </>
  )
  return (
    <div className="navbar bg-base-100 py-[52px]">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <h1 className="ws font-bold text-[28px]">Book Vibe</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {links}
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        <button className="btn bg-[#23BE0A] text-white ws hover:bg-[#23BE0A]">Sign In</button>
        <button className="btn bg-[#59C6D2] text-white ws hover:bg-[#59C6D2]">Sign Up</button>
      </div>
    </div>
  );
};

export default NavBar;
