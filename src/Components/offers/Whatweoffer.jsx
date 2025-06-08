import React from 'react'

 const Whatweoffer = () => {
  return (
    <>
      <div className="offers p-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h1>Whatweoffer</h1>
              <p className="text-muted">The Purpose Of Shopingo</p>
            </div>
          </div>

          <div className="row">
            {memberdata.map((mem, index) => (
              <div className="col-lg-3 col-md-6 col-sm-12 mb-sm-4  ">
                <div className=" shadow text-center p-5 ">
                  <i className={mem.iconsrc}></i>

                  <h5 className="mb-3">{mem.title}</h5>

                  <p className="text-muted">{mem.breif}</p>
                </div>
                <div className={mem.botmcolor}>.</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

}



const memberdata = [
  {
    iconsrc: "fa-solid fa-truck-fast text-primary fs-1 mb-4  ",
    title: "Free Delivery ",
    breif:
      " FREE Shipping is available if you're ordering eligible items for delivery",
    botmcolor: "bg-primary text-primary",
  },

  {
    iconsrc: "fa-solid fa-credit-card text-danger fs-1 mb-4  ",
    title: "Secure Payment",
    breif:
      "Secure Payment is available if you're ordering eligible items for Payment ",
    botmcolor: "bg-primary text-primary",
  },

  {
    iconsrc: "fa-solid fa-money-bill-transfer text-success fs-1 mb-4  ",
    title: "Free Returns",
    breif:
      "Free Returns is available if you're ordering eligible items for Returns ",
    botmcolor: "bg-primary text-primary",
  },

  {
    iconsrc: "fa-solid fa-headset text-warning fs-1 mb-4  ",
    title: "24/7 Support",
    breif:
      "24/7 Support is available if you're ordering eligible items for Returns ",
    botmcolor: "bg-primary text-primary",
  },
];

export default Whatweoffer;
