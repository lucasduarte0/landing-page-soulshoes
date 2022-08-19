import React, { useState } from 'react';
import Modal from '../utils/Modal';

import HeroImage from '../images/hero-image.png';
import NuvemBanner from '../images/nuvem-banner.png';
import CapaVideo from '../images/capa-video.png';

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative bg-[#3b9df4] md:px-36">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-5 pb-12 md:pt-10 md:pb-20">

          {/* Section header */}
          <div className="text-center md-6 z-50">
            <h1 className="text-white text-5xl text-left md:text-6xl font-extrabold leading-tighter tracking-tighter drop-shadow-md hover:drop-shadow-xl z-10" data-aos="zoom-y-out">Novo </h1>
            <h1 className="text-4xl text-left md:text-6xl font-extrabold leading-tighter tracking-tighter z-10" data-aos="zoom-y-out"><span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-pink-500 drop-shadow-md hover:drop-shadow-xl">Chinelo Nuvem</span></h1>
          </div>

          {/* Nuvem Banner */}
          <div className='z-auto'>
            <div className="relative flex justify-center pt-2 mb-8 z-0" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">
                <img className="object-fill mx-auto z-0" src={NuvemBanner} width="768" height="380" alt="Hero" />
              </div>
            </div>
          </div>

          <h1 className="text-white text-2xl text-left md:text-6xl font-extrabold leading-tighter tracking-tighter drop-shadow-md hover:drop-shadow-xl mb-8" data-aos="zoom-y-out"> 
          SABE AQUELA SENSAÇÃO DE ANDAR SOBRE AS NUVEMS?
          </h1>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="relative">
                <img className="mx-auto" src={CapaVideo} width="768" height="432" alt="Hero" />
                <div className='fill-white absolute top-0 align-middle p-28 drop-shadow-xl'>
                  <svg className="w-full h-full" id="hero-ill-d" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"/>
                  <path d="M20 33.7V16.3L35 25l-15 8.7zm2-14v10.5l9-5.3-9-5.2z"/>
                  </svg>                  
                </div>
              </div>
              <button className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} aria-controls="modal">
                <svg className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                  <path d="M10 17l6-5-6-5z" />
                </svg>
                <span className="ml-3">Assista o video</span>
              </button>
            </div>

            {/* Modal */}
            <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
              <div className="relative pb-9/16">
                <iframe className="absolute w-full h-full" src="https://player.vimeo.com/video/670232109?h=6d52a47cdc" width="640" height="853" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
              </div>
            </Modal>
            

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;