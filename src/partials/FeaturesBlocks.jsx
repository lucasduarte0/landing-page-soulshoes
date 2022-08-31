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
    <section className="relative md:px-36 md:mb-16 mt-10 ">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-5 py-0 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-0">
            <h2 className="text-2xl font-semibold mb-1">Afinal, é como pisar em nuvens mesmo?</h2>
            <h1 className="text-3xl font-extrabold mb-3">Com certeza!</h1>
            <p className="text-xm text-gray-600 mb-10">
              O Chinelo Nuvem foi desenvolvido para se adequar aos seus pés como uma palmilha ortopédica.<br></br> 
              Sua espessura extra estimula o contato com a sola do pé, fazendo a melhor distribuição do seu peso diminuindo pontos de pressão específicos, trazendo maior conforto e segurança durante o uso!<br></br>
               </p>

          </div>

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

          </div>

        </div>
        <h4 className="uppercase text-2xl font-bold leading-snug tracking-tight text-center mb-5">Não perca essa chance!</h4>

        <ButtonComprar className="md:mt-10" titleColor="gray-700" text="COMPRAR AGORA COM FRETE GRATIS!" subText="APROVEITE POR APENAS R$127,90"></ButtonComprar>

      </div>
    </section>
  );
}

export default FeaturesBlocks;
