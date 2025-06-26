



import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // <== this detects route change
  const userName = localStorage.getItem("userName");

  // Check token on every route change
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    setIsLoggedIn(!!token);
  }, [location]); // <== updates when route changes

  useEffect(() => {
    const checkToken = () => {
      setIsLoggedIn(!!localStorage.getItem("userToken"));
    };

    window.addEventListener("storage", checkToken);
    return () => window.removeEventListener("storage", checkToken);
  }, []);
  

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top shadow-sm"
      style={{
        backgroundColor: "#0d1117",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand text-white fw-bold fs-4" to="/home">
          <img
            src="/logoo.png"
            alt="E-commerce Logo"
            style={{
              className: "",
              height: "30px", // Adjust to match text height
              width: "180px", // Maintain aspect ratio
              objectFit: "cover",
            }}
          />{" "}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <i className="fa-solid fa-bars text-info fs-4"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            {["Home", "Brands", "Products", "Wishlist", "Cart"].map((item) => (
              <li className="nav-item px-2" key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="nav-link text-white fw-medium"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <div className="d-flex">
            {userName && (
              <span className="badge  fs-6 px-3 py-2 me-3">
                <i className="fa fa-user text-info me-1"></i> {userName}
              </span>
            )}

            {isLoggedIn ? (
              <button
                className="btn btn-outline-info fw-bold btn-sm me-2"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  className="btn btn-outline-light fw-bold btn-sm me-2"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="btn btn-outline-danger fw-bold text-white btn-sm"
                  to="/register"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}



