import React from 'react';
import Button from 'react-bootstrap/Button';
import Block1 from '../images/block1.webp'
import Block2 from '../images/block2.jpg'
import Block3 from '../images/block3.jpg'
import Block4 from '../images/block4.jpg'
import Block5 from '../images/block5.webp'
import ShippingSvg from '../images/shipping-fast.svg'
import Avaliacao from '../utils/Avaliacao';

function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <h4 className="text-4xl font-semibold uppercase text-gray-700 leading-snug tracking-[0.5rem] text-center mb-5">Imperdível</h4>
        
        <div className="bg-green-500 hover:bg-green-300 text-center text-white font-semibold">
            <Button variant="primary" size="xl">
              <div className='flex flex-col space-y-2'>
                <h2 className='text-3xl'>COMPRAR AGORA!</h2>
                <p className='text-lg'>Por apenas <strong className='text-white'>R$99,90</strong></p>
              </div>
            </Button>
          </div>
          <Avaliacao />
          <div className='relative text-green-500 flex w-full justify-center border-solid border-2 border-gray-300 rounded-2xl shadow-2xl'>
            <svg className='self-center m-3 fill-green-500' width="28px" height="28px" viewBox="0 -64 640 640" xmlns="http://www.w3.org/2000/svg"><path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"/></svg>
            <h4 className="w-auto align-center text-3xl font-semibold text-start m-3">Frete Grátis!
            </h4>

          </div>
        <div className="-mb-5 py-0 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h3 mb-4"></h2>
            <p className="text-xm text-gray-600">Chinelo Ortopédico Nuvem Confort Relax, você merece o conforto do calçado mais leve do mundo, e sem perder o estilo. O Modelo Chinelo Nuvem é macio, grosso e confortável para aliviar as dores nos pés e nas articulações. Você vai usar o dia inteiro sem sentir qualquer desconforto e sem perder o estilo. </p>
          </div>

          {/* Items */}
          <div className="max-w-xs mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <h4 className="text-2xl font-bold leading-snug tracking-tight text-center">Sinta a Mais Pura Sensação de Andar Sobre as Nuvens!</h4>
            <div className="relative shadow-2xl rounded-3xl flex flex-col items-center bg-none rounded shadow-xl">
              <img className="rounded-3xl bg-fill w-full mx-full" src={Block1} width="768" height="432" alt="Banner Gigante" />
            </div>
            
            {/* 2st item */}
            <h4 className="text-2xl font-bold leading-snug tracking-tight text-center">Sola Antiderrapante!!!</h4>
            <div className="relative shadow-2xl rounded-3xl flex flex-col items-center bg-none rounded shadow-xl">
              <img className="rounded-3xl bg-fill w-full mx-full" src={Block2} width="768" height="432" alt="Banner Gigante" />
            </div>

            {/* 3st item */}
            <h4 className="text-2xl font-bold leading-snug tracking-tight text-center">Fácil Limpeza!</h4>
            <div className="relative shadow-2xl rounded-3xl flex flex-col items-center bg-none rounded shadow-xl">
              <img className="rounded-3xl bg-fill w-full mx-full" src={Block5} width="768" height="432" alt="Banner Gigante" />
            </div>

            {/* 4st item */}
            <h4 className="text-2xl font-bold leading-snug tracking-tight text-center">Initial Contact</h4>
            <div className="relative shadow-2xl rounded-3xl flex flex-col items-center bg-none rounded shadow-xl">
              <img className="rounded-3xl bg-fill w-full mx-full" src={Block4} width="768" height="432" alt="Banner Gigante" />
            </div>


          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
