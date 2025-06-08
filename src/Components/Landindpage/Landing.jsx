import React from 'react'

const Landing = () => {
  return (
    <>
      <div className="container-fluid  landingbg position-relative p-5 ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="/public/images/istockphoto-1483357835-1024x1024.jpg"
                      class="d-block w-75 m-auto"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item w-100 text-center">
                    <img
                      src="/public/images/istockphoto-1483357835-1024x1024.jpg"
                      class="d-block w-75 m-auto"
                      alt="..."
                    />
                  </div>
                  =
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing