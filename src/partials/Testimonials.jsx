import React from 'react';
import EmbedCartPanda from '../components/EmbedCartPanda.jsx';
import Testi from '../components/Testi.jsx';
import Testimonial from "../components/Testimonial.jsx";


function Testimonials() {
  return (
    <section className="relative bg-[#da5aaf] pb-10 md:px-36 ">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-10 sm:px-6">
        <div className="md:py-20">

          {/* Section header */}

        </div>
      </div> 

      <div className="max-w-6xl mx-auto px-10 sm:px-6">
        <div className="md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-6 md:pb-8">
            <h2 className="h2 text-white">Mais de 10 mil clientes satisfeitos</h2>
          </div>

        </div>
      </div>        
      <Testi></Testi>  
    
    </section>
  );
}

export default Testimonials;