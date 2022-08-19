import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonComprar from '../components/ButtonComprar';
import Block1 from '../images/block1.webp'
import Block2 from '../images/block2.jpg'
import Block3 from '../images/block3.jpg'
import Block4 from '../images/block4.jpg'
import Block5 from '../images/block5.webp'
import ShippingSvg from '../images/shipping-fast.svg'

function FeaturesBlocks() {
  return (
    <section className="relative md:px-36">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          
        <ButtonComprar className="md:mt-10" titleColor="gray-700" text="COMPRAR AGORA COM FRETE GRATIS!"></ButtonComprar>


        <div className="mb-5 py-0 md:py-20">

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
            <h4 className="text-2xl font-bold leading-snug tracking-tight text-center">Perfeito para o dia-a-dia</h4>
            <div className="relative shadow-2xl rounded-3xl flex flex-col items-center bg-none rounded shadow-xl">
              <img className="rounded-3xl bg-fill w-full mx-full" src={Block4} width="768" height="432" alt="Banner Gigante" />
            </div>


          </div>

        </div>

        <ButtonComprar className="md:mt-10" titleColor="gray-700" text="COMPRAR AGORA COM FRETE GRATIS!"></ButtonComprar>

      </div>
    </section>
  );
}

export default FeaturesBlocks;
