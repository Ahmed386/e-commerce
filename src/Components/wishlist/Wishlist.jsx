import React from 'react'
import { Link } from 'react-router-dom';

const Wishlist = () => {
  return (
    <>
      <div>
        <div className="brandss">
          <h1 className="text-center">Wishlist</h1>
        </div>

        <div class="productContent  text-center p-5">
          <i class="fa-solid fa-love ms-2 fs-1 cart mb-2 text-danger"></i>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            class=" ms-2 fs-1 cart mb-2 text-danger"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Heart">
              <path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"></path>
            </g>
          </svg>
          <h5 class="">There is no Products !</h5>
          <Link class="text-primary" to="/home">
            back to home
          </Link>
        </div>
      </div>
    </>
  );
}

export default Wishlist