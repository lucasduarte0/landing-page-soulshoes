/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ButtonComprar from "../components/ButtonComprar";

import "../css/additional-styles/bubbles.css";

import Transicao from "../images/nuvem-transicao.png";
import fd1 from "../images/figma/fd-1.png";
import fd2 from "../images/figma/fd-2.png";
import fd from "../images/figma/FEEDBACK-2.png";
import wpp1 from "../images/figma/wpp-1.png";
import wpp2 from "../images/figma/wpp-2.png";
import wpp3 from "../images/figma/wpp-3.png";
import wpp4 from "../images/figma/wpp-4.png";

function Clientes() {
  return (
    <section className='relative md:-top-16 md:px-16 md:pb-20 bg-[#ff9339] pb-32'>
      <img
        className='md:hidden relative -top-20 -mb-10 bg-fill w-full mx-full md:px-36 z-20'
        src={Transicao}
        width='768'
        height='432'
        alt='Hero'
      />
      <div className='relative -top-20 md:top-0 md:w-3/4 m-auto z-0'>

        <div className='w-full md:w-3/4 m-auto'>
          <img src={fd} className='w-full' />
        </div>

        <div className='flex flex-col gap-8 px-5 my-8'>
          <div className='w-full m-0'>
            <img src={fd1} className='w-full' />
          </div>
          <div className='w-full m-0'>
            <img src={fd2} className='w-full' />
          </div>
          <div className='grid grid-cols-2 gap-3'>
            <div className='w-full m-0'>
              <img src={wpp1} className='w-full rounded-2xl border-4 drop-shadow-2xl' />
            </div>
            <div className='w-full m-0'>
              <img src={wpp2} className='w-full rounded-2xl border-4 drop-shadow-2xl' />
            </div>
            <div className='w-full m-0'>
              <img src={wpp3} className='w-full rounded-2xl border-4 drop-shadow-2xl' />
            </div>
            <div className='w-full m-0'>
              <img src={wpp4} className='w-full rounded-2xl border-4 drop-shadow-2xl' />
            </div>
          </div>
        </div>

        <div className='px-6'>
          <h4 className='uppercase text-2xl text-white font-bold leading-snug tracking-tight text-center mb-5'>
            Não perca essa chance!
          </h4>

          <ButtonComprar
            className='md:mt-10 h4'
            titleColor='gray-700'
            text='COMPRAR AGORA COM FRETE GRATIS!'
            subText='APROVEITE POR APENAS R$127,90'
          ></ButtonComprar>
        </div>
      </div>
    </section>
  );
}

export default Clientes;
