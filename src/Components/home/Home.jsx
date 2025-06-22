


import React, { useState, useEffect } from "react";
import Landing from "../Landindpage/Landing";
import Topcategory from "../Topcategory/Topcate";
import Ourproducts from "../products/Ourproducts";
import Whatweoffer from "../offers/Whatweoffer";
import Brands from "../brands/Brands";
import Footer from "../footer/Footer";
import Loader from './../loading/Loader';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (e.g., fetch, images, etc.)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Landing />
      <Topcategory />
      <Ourproducts />
      <Whatweoffer />
      <Brands />
      <Footer />
    </>
  );
};

export default Home;
