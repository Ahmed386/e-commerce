// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>
//       <h1>Ahmed is coming back</h1>

//       <h2 className='text-danger'>Nora is the target</h2>
//     </div>
//   );
// }

// export default Navbar




import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ setOpenProject }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg  px-2 border-bottom border-white border-opacity-10 ">
        <div className="container-fluid">
          <Link className="navbar-brand text-white logo" to="/home">
            E-commerce
          </Link>
          <button
            className="navbar-toggler   "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            
            <span className="navbar-toggler-icon  rounded"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 menu ">
              <li className="nav-item">
                <Link
                  className="nav-link pe-3 active "
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pe-3 " to="/brands">
                  Brands
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pe-3  " to="/product">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pe-3 " to="/wishlist">
                  Wishlist
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pe-3 " to="/cart">
                  Cart
                </Link>
              </li>
            </ul>

            <Link
              className="text-white text-decoration-none btn btn-outline-primary me-1 px-4 navbtn "
              to="/login"
            >
              Login
            </Link>
            <Link
              className="text-white text-decoration-none btn btn-outline-danger px-4 navbtn "
              to="/register"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}