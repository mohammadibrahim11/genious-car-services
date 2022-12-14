import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { AuthContext } from "../../Context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.email);
  console.log(logOut);

  const handleLogOut = () => {
    logOut()
      .then()
       .catch();
   
    console.log('object');
  };

  const menuItems = (
    <>
      <li>
        
        <Link to="/"> Home </Link>
      </li>
      <li>
        
        <Link to="/"> About </Link>
      </li>
      <li>
        <Link to="/"> Services </Link>
      </li>
      <li>
       
        <Link to="/orders"> Orders </Link>
      </li>
      <li>
       
        <Link to="/"> Contact </Link>
      </li>
      {user?.email ? 
        <button
            onClick={handleLogOut}> sign out 
        </button>
       
      
            :
          <button>
             <Link to='/login' >log in </Link> 
        </button>
      } 
    </>
  );
  return (
    <div className=" navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <div className=" ml-5 normal-case text-xl" style={{ width: "62px" }}>
          <Link to="/">
            <img className="" src={logo} alt="" />
          </Link>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/" className="btn">
          {user?.email}
        </Link>
      </div>
    </div>
  );
};

export default Header;
