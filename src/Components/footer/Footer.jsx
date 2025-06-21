import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="footer p-5 landingbg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="member text-white">
                <h6>ABOUT US</h6>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
                <ul className="d-flex list-unstyled ">
                  <li>
                    <i className="fa-brands fa-facebook fa-lg social "></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-twitter fa-lg social ms-3"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-linkedin fa-lg social ms-3"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-youtube fa-lg social ms-3"></i>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 ">
              <div className="member text-white">
                <ul className="list-unstyled">
                  <p className="mt-0 mb-3">INFORMATION</p>

                  <li className="mb-1 ">About Us</li>
                  <li className="mb-1">Manufactures</li>
                  <li className="mb-1">Tracking Order</li>
                  <li className="mb-1">Privacy & Policy</li>
                  <li className="mb-1">Terms & Conditions</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="member text-white">
                <ul className="list-unstyled">
                  <p className="mt-0 mb-3">My Account</p>

                  <li className="mb-1 ">Login</li>
                  <li className="mb-1">My Cart</li>
                  <li className="mb-1">Wishlist</li>
                  <li className="mb-1">Compare</li>
                  <li className="mb-1">My Account</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="member text-white">
                <p>NEWSLETTER</p>
                <input
                  type="email"
                  className="form-control "
                  placeholder="Enter your emil"
                />
                <button className="btn btn-danger   mt-3">
                  <i className="fa-solid fa-paper-plane"></i> subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer