import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    // <nav
    //   className="navbar navbar-expand-lg  shadow-sm sticky-top"
    //   style={{
    //     backdropFilter: "blur(10px)",
    //     backgroundColor: "rgba(0, 0, 0, 0.8)",
    //     borderBottom: "1px solid rgba(255,255,255,0.1)",
    //     zIndex: 1000,
    //   }}
    // >
    //   <div className="container-fluid">
    //     <Link className="navbar-brand fw-bold text-white fs-4" to="/home">
    //       E-commerce
    //     </Link>

    //     <button
    //       className="navbar-toggler border-0"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav m-auto text-center">
    //         {["home", "brands", "product", "wishlist", "cart"].map((path) => (
    //           <li className="nav-item px-2" key={path}>
    //             <Link className="nav-link text-white" to={`/${path}`}>
    //               {path.charAt(0).toUpperCase() + path.slice(1)}
    //             </Link>
    //           </li>
    //         ))}
    //       </ul>

    //       <div className="d-flex gap-2">
    //         <Link
    //           className="btn btn-outline-light btn-sm px-3"
    //           to="/login"
    //         >
    //           Login
    //         </Link>
    //         <Link
    //           className="btn btn-outline-light btn-sm px-3"
    //           to="/register"
    //         >
    //           Register
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </nav>

    <nav
      className="navbar navbar-expand-lg sticky-top shadow-sm"
      style={{
        backgroundColor: "#0d1117", // dark gray-blue, not fully black
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand text-white fw-bold fs-4" to="/home">
          E-commerce
        </Link>

        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <i className="fa-solid fa-bars text-white fs-4"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            {["Home", "Brands", "Products", "Wishlist", "Cart"].map((item) => (
              <li className="nav-item px-2" key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="nav-link text-white fw-medium"
                  style={{ transition: "0.3s" }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <div className="d-flex">
            <Link className="btn btn-outline-light btn-sm me-2" to="/login">
              Login
            </Link>
            <Link
              className="btn btn-outline-danger text-white btn-sm"
              to="/register"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}



// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <nav
//       className={`navbar navbar-expand-lg navbar-dark fixed-top ${
//         scrolled ? "glass-nav" : "bg-transparent"
//       }`}
//     >
//       <div className="container-fluid">
//         <Link className="navbar-brand fw-bold" to="/home">
//           E-commerce
//         </Link>
//         <button
//           className="navbar-toggler border-0"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <i className="fa-solid fa-bars text-black fs-4"></i>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <div className="d-flex justify-content-between align-items-center w-100">
//             <div></div> {/* Placeholder if needed on left */}
//             <ul className="navbar-nav mx-auto">
//               {["Home", "Brands", "Products", "Wishlist", "Cart"].map(
//                 (item) => (
//                   <li className="nav-item" key={item}>
//                     <Link className="nav-link" to={`/${item.toLowerCase()}`}>
//                       {item}
//                     </Link>
//                   </li>
//                 )
//               )}
//             </ul>
//             <div className="d-flex">
//               <Link className="btn btn-outline-dark me-2 btn-sm" to="/login">
//                 Login
//               </Link>
//               <Link className="btn btn-danger btn-sm" to="/register">
//                 Register
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

