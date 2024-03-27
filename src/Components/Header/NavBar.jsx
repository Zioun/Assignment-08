import React from "react";
import {Link, NavLink } from "react-router-dom";
import "./Nave.css";

const NavBar = () => {
  
  const links = (
    <>
      {/* <li><NavLink to="/">Home</NavLink> </li>
      <li><NavLink to="/listed">Listed Books</NavLink></li>
      <li><NavLink to="/read">Pages to Read</NavLink></li>
      <li>
        <a>Parent</a>
        <ul className="p-2">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li> */}
    </>
  )
  return (
    <div className="navbar bg-base-100 md:py-[52px]">
      <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/listed">Listed Books</NavLink></li>
        <li><NavLink to="/read">Pages to Read</NavLink></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <h1 className="ws font-bold text-[20px] md:text-[28px]"><NavLink to="/">Book Vibe</NavLink></h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/listed">Listed Books</NavLink></li>
      <li><NavLink to="/read">Pages to Read</NavLink></li>
      
      <li>
        <details>
          <summary>Books Info</summary>
          <ul className="p-2 w-[170px]">
            <li><NavLink to="author">Author</NavLink></li>
            <li><NavLink to="top-rated-book">Top Rated Books</NavLink></li>
          </ul>
        </details>
      </li>
      
    </ul>
  </div>
      <div className="navbar-end flex gap-4">
        <button className="btn btn-sm md:btn bg-[#23BE0A] text-white ws hover:bg-[#23BE0A] md:bg-[#23BE0A] md:text-white ws md:hover:bg-[#23BE0A]">Sign In</button>
        <button className="btn bg-[#59C6D2] text-white hover:bg-[#59C6D2] btn-sm md:btn md:bg-[#59C6D2] md:text-white ws md:hover:bg-[#59C6D2]">Sign Up</button>
      </div>
    </div>
  );
};

export default NavBar;
