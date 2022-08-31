import React, { useState } from 'react';
import Modal from '../utils/Modal';

import HeroImage from '../images/hero-image.png';
import NuvemBanner from '../images/nuvem-banner-1.png';
import Sombra from '../images/sombra.png';
import CapaVideo from '../images/capa-video.png';
import ButtonComprar from '../components/ButtonComprar';
import Brasil from '../images/brasil_flag.svg'

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative bg-[#3b9df4] md:px-3 px-4">
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-10">

        {/* Hero content */}
        <div className="pt-8 pb-12 md:pt-10 md:pb-20 text-center">

          {/* Section header */}
          <div className="text-center w-full z-50">
            {/* <h1 className="capitalize text-white text-3xl text-middle md:text-6xl font-extrabold leading-tighter tracking-tighter drop-shadow-md hover:drop-shadow-xl z-10" data-aos="zoom-y-out">Sabe aquela sensação de andar sobre as nuvens?</h1> */}
            <h1 className="capitalize text-white h1 text-middle font-semibold tracking-wide leading-tighter tracking-tighter drop-shadow-md hover:drop-shadow-xl z-10" data-aos="zoom-y-out">VOCÊ NÃO PRECISA VOAR PARA SE SENTIR NAS NUVENS!</h1>
          </div>

          {/* Nuvem Banner */}
          <div className=''>
            <div className="relative flex justify-center pt-2 mb-5 z-0 mt-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center ">
                  <div className="animate-rotate-slow">
                    <img className="object-fill mx-auto z-0 animate-bounce-slow" src={NuvemBanner} width="768" height="380" alt="Hero" />
                  </div>
                <img className="object-fill mx-auto z-0" src={Sombra} width="768" height="380" alt="Hero" />
              </div>
            </div>
          </div>

          {/* <h1 className="text-white text-2xl text-left md:text-6xl font-extrabold leading-tighter tracking-tighter drop-shadow-md hover:drop-shadow-xl mb-8" data-aos="zoom-y-out"> 
          SABE AQUELA SENSAÇÃO DE ANDAR SOBRE AS NUVENS?
          </h1> */}
          {/* <h1 className="text-4xl text-left mb-5 md:text-6xl font-extrabold leading-tighter tracking-tighter z-10 text-center" data-aos="zoom-y-out"><span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-pink-500 drop-shadow-md hover:drop-shadow-xl">Chinelo Nuvem</span></h1> */}
          
          <div className="flex bg-white shadow-lg flex-col text-center p-6 z-50 rounded-3xl">
            {/* <h1 className="capitalize text-white text-3xl text-middle md:text-6xl font-extrabold leading-tighter tracking-tighter drop-shadow-md hover:drop-shadow-xl z-10" data-aos="zoom-y-out">Sabe aquela sensação de andar sobre as nuvens?</h1> */}
            <h1 className="text-xl md:text-3xl text-middle tracking-wide leading-tighter tracking-tighter drop-shadow-md hover:drop-shadow-xl z-10" data-aos="zoom-y-out">
            Diga adeus as dores nos pés, pernas e coluna com o nosso <br/></h1>
            <span className="mb-2 md:text-5xl text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-pink-500 drop-shadow-md hover:drop-shadow-xl shadow-pink-500">
            Chinelo Nuvem</span>              
            <h1 className="text-xl text-middle md:text-3xl tracking-wide leading-tighter tracking-tighter drop-shadow-md hover:drop-shadow-xl z-10">Feito com material que adapta ao formato do <strong className='uppercase'>seu pé!</strong></h1>
          </div>

          {/* <div className='flex p-2 rounded-full items-center bg-white drop-shadow-xl my-7'>
            <div className='pl-5 text-green-700 grow font-bold text-center'>PRODUTO 100% NACIONAL</div>
            <img className="flex-none max-h-10 m-1.5" src={Brasil} />
          </div> */}


          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-3 mt-16" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="relative">
                <img className="mx-auto" src={CapaVideo} width="768" height="432" alt="Hero" />
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
        <h1 className="mb-6 text-white text-3xl md:text-3xl text-center leading-tighter tracking-tighter drop-shadow-md hover:drop-shadow-xl z-10 font-bold" data-aos="zoom-y-out">
          AGORA É SUA VEZ!
        </h1>
        <ButtonComprar className="" text="EU QUERO ME SENTIR NAS NUVENS!" subText="OFERTA POR TEMPO ILIMITADO!"></ButtonComprar>

      </div>
    </section>
  );
}

export default HeroHome;