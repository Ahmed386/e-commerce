


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [removingItemId, setRemovingItemId] = useState(null);
  const [removedItemId, setRemovedItemId] = useState(null); // NEW

  async function fetchCart() {
    const token = localStorage.getItem("userToken");

    try {
      const { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/cart",
        {
          headers: {
            token: token, 
            // or try this if the API requires it:
            // Authorization: `Bearer ${token}`
          },
        }
      );

      
      setCartItems(data.data.products); 
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  }

  const removeItem = async (productId) => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      toast.error("You're not logged in");
      return;
    }

    try {
      setRemovingItemId(productId);

      const { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        {
          headers: {
            token: token,
          },
        }
      );

      toast.success("Item removed from cart", { position: "top-right" });

      // Show checkmark briefly before removing
      setRemovingItemId(null);
      setRemovedItemId(productId);

      setTimeout(() => {
        setRemovedItemId(null);
        fetchCart(); // Refresh cart after short delay
      }, 800); // 800ms to show checkmark
    } catch (error) {
      toast.error("Failed to remove item", { position: "top-right" });
      console.error(
        "Remove item error:",
        error.response?.data || error.message
      );
      setRemovingItemId(null);
    }
  };
  

  useEffect(() => {
    fetchCart();
  }, []);

  if (!cartItems) return <Loader />;

  return (
    <div className="container  carto">
      <h3 className="text-center mb-3">🛒 Your Shopping Cart</h3>

      {cartItems.length === 0 ? (
        <div className="alert alert-warning text-center py-4">
          <i className="fa-solid fa-cart-plus fs-4 me-2 text-danger"></i>
          <strong>Loading Your Cart...</strong>
          <br />
          <Link to="/home" className="btn btn-outline-danger mt-3 btn-sm">
            Back to Home
          </Link>
        </div>
      ) : (
        <div className="row g-3">
          {cartItems.map((item, i) => (
            <div className="col-sm-6 col-lg-3" key={i}>
              <div className="card h-100 shadow-sm">
                <img
                  src={item.product.imageCover}
                  className="card-img-top"
                  alt={item.product.title}
                  style={{
                    height: "160px",
                    objectFit: "contain",
                    backgroundColor: "#f8f9fa",
                    // objectFit: "cover",
                  }}
                />
                <div className="card-body p-2">
                  <h6 className="card-title text-truncate">
                    {item.product.title}
                  </h6>
                  <p className="card-text mb-1" style={{ fontSize: "0.9rem" }}>
                    Price: {item.price} EGP
                  </p>
                  <p className="card-text mb-2" style={{ fontSize: "0.9rem" }}>
                    Quantity: {item.count}
                  </p>
                  <button
                    className="btn btn-outline-danger w-100 btn-sm"
                    onClick={() => removeItem(item.product._id)}
                    disabled={
                      removingItemId === item.product._id ||
                      removedItemId === item.product._id
                    }
                  >
                    {removingItemId === item.product._id ? (
                      <div
                        className="spinner-border spinner-border-sm text-danger"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : removedItemId === item.product._id ? (
                      <i className="fa-solid fa-check text-danger"></i> // ✅ red check
                    ) : (
                      <>
                        <i className="fa-solid fa-trash me-1"></i> Remove
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};;

export default Cart;

