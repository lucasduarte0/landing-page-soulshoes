import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonComprar from '../components/ButtonComprar';
import ComparacaoPhoto from '../images/nuvem-comparacao.png'
import ChTorcendo4 from '../images/banner-torcendo-nuvem-4.jpg'
import NuvemFundo1 from '../images/nuvem-fundo-azul.png'
import NuvemFundo2 from '../images/nuvem-fundo-rosa.png'
import SemDores from '../images/sem-dores-chinelo-nuvem.png'
import Logo from '../images/logo.png'

function Comparacao() {
  return (
<<<<<<< HEAD
    <section className="relative md:px-36">
=======
    <section className="relative md:px-36">      
>>>>>>> 172cf599b543bdc0b77366f153adb0b3867bfb39

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          
        <ButtonComprar className="md:mt-10" titleColor="gray-700" text="COMPRAR AGORA COM FRETE GRATIS!"></ButtonComprar>


        <div className="mb-5 py-0 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h3 mb-4"></h2>
            <p className="text-xm text-gray-600 mb-10">Chinelo Ortopédico Nuvem Confort Relax, você merece o conforto do calçado mais leve do mundo, e sem perder o estilo. O Modelo Chinelo Nuvem é macio, grosso e confortável para aliviar as dores nos pés e nas articulações. Você vai usar o dia inteiro sem sentir qualquer desconforto e sem perder o estilo. </p>
            <h4 className="text-2xl font-bold leading-snug tracking-tight text-center">Sinta a Mais Pura Sensação de Andar Sobre as Nuvens!</h4>
          </div>

          {/* Items */}

          <div className="max-w-xs mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}

            <div className='overflow-hidden flex flex-col items-center text-lg rounded-3xl border shadow-xl transition duration-300 ease-in-out mb-3'>
              <img className="bg-fill w-full mx-full" src={Logo} width="768" height="432" alt="Banner Gigante" />
              <h4 className="text-2xl font-bold leading-snug tracking-tight text-center m-5">Super Macio</h4>
            </div>

            <div className='overflow-hidden flex flex-col items-center text-lg rounded-3xl border shadow-xl transition duration-300 ease-in-out mb-3'>
              <img className="bg-fill w-full mx-full" src={Logo} width="768" height="432" alt="Banner Gigante" />
              <h4 className="text-2xl font-bold leading-snug tracking-tight text-center m-5">Super Macio</h4>
            </div>
            
            <div className='overflow-hidden flex flex-col items-center text-lg rounded-3xl border shadow-xl transition duration-300 ease-in-out mb-3'>
              <img className="bg-fill w-full mx-full" src={Logo} width="768" height="432" alt="Banner Gigante" />
              <h4 className="text-2xl font-bold leading-snug tracking-tight text-center m-5">Super Macio</h4>
            </div>

            <div className='overflow-hidden flex flex-col items-center text-lg rounded-3xl border shadow-xl transition duration-300 ease-in-out mb-3'>
              <img className="bg-fill w-full mx-full" src={Logo} width="768" height="432" alt="Banner Gigante" />
              <h4 className="text-2xl font-bold leading-snug tracking-tight text-center m-5">Super Macio</h4>
            </div>                      

          </div>

        </div>

        <ButtonComprar className="md:mt-10" titleColor="gray-700" text="COMPRAR AGORA COM FRETE GRATIS!"></ButtonComprar>

      </div>
    </section>
  );
}

export default Comparacao;
