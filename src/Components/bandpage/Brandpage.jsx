import React from 'react'

const Brandpage = () => {
  return (
    <>
      <div>
        <div className="brandss ">
          <h1 className="text-center">All Brands</h1>
        </div>

        <div className="container p-5">
            <div className="row">
                {data.map((ban,index)=>(
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                      <div className="brandscal text-center border rounded ">
                        <img src={ban.img} alt="" className='w-50 p-1 rounded-pill' />
                      </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </>
  );
}


const data = [
  {
    img: "/public/brands/canon.png",
  },

  {
    img: "/public/brands/del.png",
  },

  {
    img: "/public/brands/infin.png",
  },

  {
    img: "/public/brands/infin.png",
  },

  {
    img: "/public/brands/len.png",
  },
  {
    img: "/public/brands/son.png",
  },
  {
    img: "/public/brands/son.png",
  },
  {
    img: "/public/brands/son.png",
  },
  {
    img: "/public/brands/son.png",
  },
  {
    img: "/public/brands/son.png",
  },
  {
    img: "/public/brands/son.png",
  },
  {
    img: "/public/brands/son.png",
  },
  {
    img: "/public/brands/son.png",
  },
  {
    img: "/public/brands/son.png",
  },
  {
    img: "/public/brands/son.png",
  },
  {
    img: "/public/brands/son.png",
  },
  {
    img: "/public/brands/son.png",
  },

  {
    img: "/public/brands/len.png",
  },
  {
    img: "/public/brands/len.png",
  },
  {
    img: "/public/brands/len.png",
  },
  {
    img: "/public/brands/len.png",
  },
  {
    img: "/public/brands/len.png",
  },
  {
    img: "/public/brands/len.png",
  },
  {
    img: "/public/brands/infin.png",
  },
];

export default Brandpage