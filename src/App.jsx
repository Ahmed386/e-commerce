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

const App = () => {

  // function intial () {
  //   console.log('run')
  //   return 4 
  // }


  // const [count, setCount] = useState(4);
  // const [theme, setTheme] = useState("blue");

  // function decrement () {
  //   setCount ( perValue => perValue -1 );
  //   setTheme("green")
  // }


  // function increment (){
  //   setCount(prevalue => prevalue + 1);
  //   setTheme("yeelow");

  // }

  // function mult() {
  //   setCount(prevalue => prevalue * 2);
  // }
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="/brands" element={<Brandpage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product" element={<Productpage />} />
        <Route path="/brandshow/:id" element={<Brandshowing />} />
        <Route path="/showproduct/:id" element={<Showproduct />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>

      <Footer />
    </Router>

    // <>
    //   <div className="d-flex justify-content-center align-items-center p-5 ">
    //     <button onClick={decrement} className="btn btn-danger btn-lg m-2">
    //       -
    //     </button>

    //     <span className="fs-1">{count}</span>
    //     <span className="fs-1">{theme}</span>

    //     <button onClick={increment} className="btn btn-primary btn-lg m-2">
    //       +
    //     </button>
    //     <button onClick={mult} className="btn btn-warning btn-lg m-2">
    //       *
    //     </button>
    //   </div>
    // </>
  );
};

export default App;
