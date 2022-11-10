<<<<<<< HEAD
import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonComprar from '../components/ButtonComprar';
import Block1 from '../images/imagem-1.jpg'
import Block2 from '../images/imagem-2.jpg'
import Block3 from '../images/imagem-3.jpg'
import Block4 from '../images/imagem-4.jpg'
import Block5 from '../images/block5.webp'
import ShippingSvg from '../images/shipping-fast.svg'

function FeaturesBlocks() {
  return (
    <section className="relative md:px-36 md:mb-16">
=======
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ButtonComprar from "../components/ButtonComprar";

import Block5 from "../images/chinelo-praia.jpg";
import Block6 from "../images/chinelo-quadricicolo.jpg";
import Block7 from "../images/chinelo-limpo.gif";
import Block8 from "../images/chinelo-macio.gif";

import Transicao from "../images/nuvem-transicao.png";
import { tituloProduto } from "../utils/Variables";
import { browserName } from "react-device-detect"

function FeaturesBlocks() {
  return (
    <section className={`relative ${ browserName == "Safari" ?  "-top-28" : "-top-16" }  md:px-16 md:pb-12 bg-[#fc98d6] md:pt-24 pb-24`}>
      <img
        className='md:hidden relative -top-20 -mb-10 bg-fill w-full mx-full md:px-36'
        src={Transicao}
        width='768'
        height='432'
        alt='Hero'
      />
>>>>>>> 172cf599b543bdc0b77366f153adb0b3867bfb39

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className='absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none'
        aria-hidden='true'
      ></div>
      <div className='absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 transform translate-y-1/2'></div>

<<<<<<< HEAD
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-5 py-0 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-0">
            <h2 className="text-2xl font-semibold mb-1">Afinal, é como pisar em nuvens mesmo?</h2>
            <h1 className="text-3xl font-extrabold mb-3">Com certeza!</h1>
            <p className="text-xm text-gray-600 mb-10">
              O Chinelo Nuvem foi desenvolvido para se adequar aos seus pés como uma palmilha ortopédica.<br></br> 
              Sua espessura extra estimula o contato com a sola do pé, fazendo a melhor distribuição do seu peso diminuindo pontos de pressão específicos, trazendo maior conforto e segurança durante o uso!<br></br>
               </p>

=======
      <div className='relative max-w-6xl mx-auto px-3 sm:px-6'>
        {/* Section header */}
        <div className='flex flex-col max-w-3xl text-white mx-auto text-center md:pb-0'>
          {/* <div className='flex flex-row self-center items-center'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-1'>
              Afinal, é como pisar em nuvens mesmo?
            </h2>
            <img
              className='w-20 mx-1'
              src='https://upload.wikimedia.org/wikipedia/commons/6/63/Twemoji2_1f914.svg'
            />
          </div> */}
          <div className='flex flex-row self-center items-center'>
            <h2 className='uppercase text-2xl md:text-3xl font-semibold mb-1'>
              Sabe aquela sensação de dores nos pés que sempre te incomoda no
              fim do dia?
            </h2>
>>>>>>> 172cf599b543bdc0b77366f153adb0b3867bfb39
          </div>
          {/* <div className='flex flex-row bg-white w-full self-center gap-4 p-3 my-6 rounded-xl p-5 justify-center outline outline-offset-2 outline-1'>
            <h1 className='text-3xl text-gray-800 font-extrabold font-carter'>
              COM CERTEZA!
            </h1>
            <img className='h-10' src={Svg} />
          </div> */}

<<<<<<< HEAD
          {/* Items */}

          <div className="max-w-xs mx-auto grid gap-6 md:grid-cols-3 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}


            <div className='overflow-hidden flex flex-col items-center text-lg rounded-3xl border shadow-xl transition duration-300 ease-in-out mb-3'>
              <img className="bg-fill w-full mx-full" src={Block2} width="768" height="432" alt="Banner Gigante" />
              <h4 className="text-2xl font-bold leading-snug tracking-tight text-center m-5">Super Macio</h4>
            </div>
            
            <div className='overflow-hidden flex flex-col items-center text-lg rounded-3xl border shadow-xl transition duration-300 ease-in-out mb-3'>
              <img className="bg-fill w-full mx-full" src={Block3} width="768" height="432" alt="Banner Gigante" />
              <h4 className="text-2xl font-bold leading-snug tracking-tight text-center m-5">Varias Cores</h4>
            </div>

            {/* <div className='overflow-hidden flex flex-col items-center text-lg rounded-3xl border shadow-xl transition duration-300 ease-in-out mb-3'>
              <img className="bg-fill w-full mx-full" src={Block1} width="768" height="432" alt="Banner Gigante" />
              <h4 className="text-2xl font-bold leading-snug tracking-tight text-center m-5">Super Macio</h4>
            </div> */}

            <div className='overflow-hidden flex flex-col items-center text-lg rounded-3xl border shadow-xl transition duration-300 ease-in-out mb-3'>
              <img className="bg-fill w-full mx-full" src={Block4} width="768" height="432" alt="Banner Gigante" />
              <h4 className="text-2xl font-bold leading-snug tracking-tight text-center m-5">Super Estiloso</h4>
            </div>                      

=======
          <div className=' '>
            <h3 className='h4 my-5 text-xl font-normal tracking-normal'>
              Com o{" "}
              <a className='font-extrabold underline underline-offset-4 decoration-sky-500 decoration-3 decoration-dashed'>
                {tituloProduto}
              </a>{" "}
              você não vai precisar mais e preocupar com ela.
            </h3>
>>>>>>> 172cf599b543bdc0b77366f153adb0b3867bfb39
          </div>
        </div>
        <h4 className="uppercase text-2xl font-bold leading-snug tracking-tight text-center mb-5">Não perca essa chance!</h4>

<<<<<<< HEAD
        <ButtonComprar className="md:mt-10" titleColor="gray-700" text="COMPRAR AGORA COM FRETE GRATIS!" subText="APROVEITE POR APENAS R$127,90"></ButtonComprar>
=======
        <div className='mb-5 py-0 md:py-20'>
          {/* Items */}
>>>>>>> 172cf599b543bdc0b77366f153adb0b3867bfb39

          <div className='mx-auto grid grid-cols-2 gap-y-3 mb-5 gap-3 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none'>
            {/* 1st item */}

            <div className='overflow-hidden w-full flex flex-col lg:max-h-max items-center text-base rounded-2xl shadow-xl transition duration-300 ease-in-out  bg-white'>
              <img
                className='bg-fill w-full mx-full aspect-square object-cover'
                src={Block8}
                alt='Banner Gigante'
              />
              <h4 className='text-base font-bold leading-snug tracking-tight text-center my-3 '>
                Super Macio
              </h4>
            </div>

            <div className='overflow-hidden w-full flex flex-col lg:max-h-max items-center text-base rounded-2xl shadow-xl transition duration-300 ease-in-out  bg-white'>
              <img
                className='bg-fill w-full mx-full aspect-square'
                src={Block7}
                width='768'
                height='432'
                alt='Banner Gigante'
              />
              <h4 className='text-base font-bold leading-snug tracking-tight text-center my-3 '>
                Facíl Limpeza
              </h4>
            </div>

            <div className='overflow-hidden w-full flex flex-col lg:max-h-max items-center text-base rounded-2xl shadow-xl transition duration-300 ease-in-out  bg-white'>
              <img
                className='bg-fill w-full mx-full aspect-square'
                src={Block6}
                width='768'
                height='432'
                alt='Banner Gigante'
              />
              <h4 className='text-base font-bold leading-snug tracking-tight text-center my-3 '>
                Em qualquer lugar
              </h4>
            </div>

            <div className='overflow-hidden w-full flex flex-col lg:max-h-max items-center text-base rounded-2xl shadow-xl transition duration-300 ease-in-out  bg-white'>
              <img
                className='bg-fill w-full mx-full aspect-square'
                src={Block5}
                width='768'
                height='432'
                alt='Banner Gigante'
              />
              <h4 className='text-base font-bold leading-snug tracking-tight text-center my-3'>
                A Qualquer Hora
              </h4>
            </div>

          </div>
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

export default FeaturesBlocks;
