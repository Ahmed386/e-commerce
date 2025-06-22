import React , {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/home/Home";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import Brandpage from "./Components/bandpage/Brandpage";

import Wishlist from './Components/wishlist/Wishlist';
import Cart from './Components/cart/Cart';
import Productpage from './Components/productpage/Productpage';
import Register from './Components/register/Register';
import Login from './Components/login/Login';
import Showproduct from "./Components/showproduct/Showproduct";
import Brandshowing from "./Components/showbrand/Brandshowing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {

  
  return (
    <Router>
      <Navbar />
      <ToastContainer position="top-right" autoClose={2000} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="/brands" element={<Brandpage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/brandshow/:id" element={<Brandshowing />} />
        <Route path="/showproduct/:id" element={<Showproduct />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>

      <Footer />
    </Router>

  
  );
};

export default App;
