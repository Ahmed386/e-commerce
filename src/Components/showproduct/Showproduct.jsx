


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./../loading/Loader";
import { motion } from "framer-motion";
import { toast } from "react-toastify"; 

const Showproduct = () => {
  const { id } = useParams();
  const [shownProduct, setShownproduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  async function getproductdetails() {
    try {
      const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products/${id}`
      );

      const product = data.data;
      setShownproduct(product);

      const imagesArray = Array.isArray(product.images)
        ? product.images
        : Object.values(product.images || {});

      if (imagesArray.length > 0) {
        setMainImage(imagesArray[0]);
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }

  useEffect(() => {
    getproductdetails();
  }, [id]);

  //  Add to Cart function
  const addToCart = async () => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      toast.error("You must be logged in to add items to cart.");
      return;
    }

    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/cart",
        { productId: shownProduct._id },
        {
          headers: {
            token: token,
          },
        }
      );

      toast.success("Product added to cart!", {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (error) {
      toast.error("Firsly login..Failed to add product to cart.");
      console.error(
        "Add to cart error:",
        error.response?.data || error.message
      );
    }
  };

  if (!shownProduct) return <Loader />;

  const images = Array.isArray(shownProduct.images)
    ? shownProduct.images
    : Object.values(shownProduct.images || {});

  return (
    <div className="container py-5 pranon">
      <div className="row">
        

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="col-12 col-md-6 d-flex flex-column flex-md-row align-items-center mb-4"
        >
          <div className="d-flex flex-row flex-md-column justify-content-center me-md-3 mb-3 overflow-auto">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                className="img-thumbnail m-1"
                style={{ width: "70px", height: "70px", cursor: "pointer" }}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>

          {/* Main Image */}
          {mainImage && (
            <img
              src={mainImage}
              alt="main"
              className="img-fluid rounded"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          )}
        </motion.div>

        <motion.div
          className="col-6"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2>{shownProduct.title}</h2>
          <h5 className="text-muted">
            Category:{" "}
            <strong>{shownProduct.category?.name || "No category"}</strong>
          </h5>
          <p>{shownProduct.description}</p>
          <p>
            <strong>Price:</strong> ${shownProduct.price}
          </p>
          <p>
            <strong>Rating:</strong> {shownProduct.ratingsAverage}{" "}
            <span className="text-warning">⭐</span>
          </p>
          <p>{shownProduct.ratingsQuantity} Customer Reviews</p>

          <button className="btn btn-danger me-2 mb-2" onClick={addToCart}>
            Add To Cart
          </button>
          <button className="btn btn-outline-danger">Add To Wishlist</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Showproduct;

