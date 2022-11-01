/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Logo from "../images/logo-branca.png";
import { browserName } from "react-device-detect";

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

function HeroHome() {
  const scrollDirection = useScrollDirection();

  return (
    <section className={`h-screen`}>
      <div className={`relative -top-10 w-full static z-0`}>
        <LazyLoadImage
          alt='Gif'
          className={`sticky ${
            scrollDirection > 1000 ? "hidden" : ""
          } w-full h-full sticky object-cover brightness-75`}
          src='https://ik.imagekit.io/soulshoes/Design_sem_nome__1__paRfq_5HS.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1666810733198' // use normal <img> attributes as props
        />
      </div>
      <div className='fixed top-0 h-screen md:px-36 px-4 pb-8 pt-8'>


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
            </div>

            {/* 
            <ButtonComprar
              className='text-2xl'
              text='COMPRAR AGORA'
              subText='OFERTA POR TEMPO ILIMITADO!'
            ></ButtonComprar> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
