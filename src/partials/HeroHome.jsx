/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Logo from "../images/logo-branca.png";
import { browserName } from "react-device-detect";

<<<<<<< HEAD
import HeroImage from '../images/hero-image.png';
import NuvemBanner from '../images/nuvem-banner-1.png';
import Sombra from '../images/sombra.png';
import CapaVideo from '../images/capa-video.png';
import ButtonComprar from '../components/ButtonComprar';
=======
function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      setScrollDirection(scrollY);
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}
>>>>>>> 172cf599b543bdc0b77366f153adb0b3867bfb39

function HeroHome() {
  const scrollDirection = useScrollDirection();

  return (
<<<<<<< HEAD
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
=======
    <section className={`h-screen`}>
      <div className={`relative -top-10 w-full static z-0`}>
        <LazyLoadImage
          alt='Gif'
          className={`sticky ${
            scrollDirection > 1000 ? "hidden" : ""
          } w-full h-full sticky object-cover brightness-75`}
          src='https://ik.imagekit.io/soulshoes/Design_sem_nome__1__paRfq_5HS.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1666810733198' // use normal <img> attributes as props
        />
>>>>>>> 172cf599b543bdc0b77366f153adb0b3867bfb39
      </div>
      <div className='fixed top-0 h-screen md:px-36 px-4 pb-8 pt-8'>

<<<<<<< HEAD
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
          
          <div className="flex bg-black bg-opacity-10 flex-col text-center p-6 z-50 rounded-3xl">
            {/* <h1 className="capitalize text-white text-3xl text-middle md:text-6xl font-extrabold leading-tighter tracking-tighter drop-shadow-md hover:drop-shadow-xl z-10" data-aos="zoom-y-out">Sabe aquela sensação de andar sobre as nuvens?</h1> */}
            <h1 className="text-white text-xl md:text-3xl text-middle tracking-wide leading-tighter tracking-tighter drop-shadow-md hover:drop-shadow-xl z-10" data-aos="zoom-y-out">
            Diga adeus as dores nos pés, pernas e coluna com o nosso <br/></h1>
            <span className="mb-2 md:text-5xl text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-pink-500 drop-shadow-md hover:drop-shadow-xl shadow-pink-500">
            Chinelo Nuvem</span>              
            <h1 className="text-white text-xl text-middle md:text-3xl tracking-wide leading-tighter tracking-tighter drop-shadow-md hover:drop-shadow-xl z-10">Feito com material que adapta ao formato do <strong className='uppercase'>seu pé!</strong></h1>
          </div>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-3 mt-16" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="relative">
                <img className="mx-auto" src={CapaVideo} width="768" height="432" alt="Hero" />
                <div className='fill-white absolute top-0 align-middle drop-shadow-xl'>
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
=======

        <div className='flex flex-col pb-36 h-screen justify-center items-center'>
          {/* Hero content */}

          <div className='pt-4'>
            <img className='w-48' src={Logo} alt='video nuvem' />
          </div>

          {/* Section header */}
          <div className='text-center m-auto w-full'>
            <h1
              className='text-white h2 text-middle tracking-wider leading-tighter drop-shadow-lg hover:drop-shadow-xl z-10'
              data-aos='zoom-y-out'
            >
              NÃO AGUENTA MAIS DORES NOS PÉS E PERNAS?
            </h1>
          </div>
          <div className={`relative h-fit w-full justify-end ${ browserName == "Safari" ?  "-top-12" : "" }`}>
            <h1
              className='mb-2 text-white text-2xl md:text-3xl text-center leading-tighter tracking-tighter drop-shadow-md hover:drop-shadow-xl z-10'
              data-aos='zoom-y-out'
            >
              TEMOS A SOLUÇÃO PARA VOCÊ
            </h1>
            <div className='flex justify-center'>
              <i className='fa-solid fa-chevron-down fa-3x center text-white animate-bounce'></i>
>>>>>>> 172cf599b543bdc0b77366f153adb0b3867bfb39
            </div>

            {/* 
            <ButtonComprar
              className='text-2xl'
              text='COMPRAR AGORA'
              subText='OFERTA POR TEMPO ILIMITADO!'
            ></ButtonComprar> */}
          </div>
<<<<<<< HEAD
        
        </div>
        <h1 className="mb-6 text-white text-3xl md:text-3xl text-center leading-tighter tracking-tighter drop-shadow-md hover:drop-shadow-xl z-10 font-bold" data-aos="zoom-y-out">
          AGORA É SUA VEZ!
        </h1>
        <ButtonComprar className="" text="EU QUERO ME SENTIR NAS NUVENS!" subText="OFERTA POR TEMPO ILIMITADO!"></ButtonComprar>

=======
        </div>
>>>>>>> 172cf599b543bdc0b77366f153adb0b3867bfb39
      </div>
    </section>
  );
}

export default HeroHome;
