import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.bundle.js"


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'


// import "../node_modules/slick-carousel/slick/slick.css";
// import "../node_modules/slick-carousel/slick/slick-theme";

import "../node_modules/slick-carousel/slick/slick.css"
import "../node_modules/slick-carousel/slick/slick-theme.css";


import './index.css'
import App from './App.jsx'


let myHtml = document.getElementById("root");
createRoot(myHtml).render(
  <StrictMode>
    <App />
  </StrictMode>
);



