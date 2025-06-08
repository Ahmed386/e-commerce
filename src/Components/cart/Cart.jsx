import React from 'react'
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <>
      <div>
        <div className="brandss">
          <h1 className="text-center">Shopping Cart</h1>
        </div>

        <div class="productContent  text-center p-5">
          <i class="fa-solid fa-cart-plus ms-2 fs-1 cart mb-2 text-danger"></i>
          <h5 class="">There is no Products !</h5>
          <Link class="text-primary" to="/home">
            back to home
          </Link>
        </div>
      </div>
    </>
  );
}

export default Cart