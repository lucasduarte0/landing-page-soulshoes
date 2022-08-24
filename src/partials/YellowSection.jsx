import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonComprar from '../components/ButtonComprar';
import ChTorcendo from '../images/banner-bg-amarelo-nv2.png'
import ChTorcendo4 from '../images/banner-torcendo-nuvem-4.jpg'
import NuvemFundo1 from '../images/nuvem-fundo-azul.png'
import NuvemFundo2 from '../images/nuvem-fundo-rosa.png'
import SemDores from '../images/sem-dores-chinelo-nuvem.png'

function YellowSection() {
  return (
    <section className="relative md:px-36 bg-[#f8dd4a]">

      <div className="max-w-6xl mx-auto pt-7">
      
        <div className="py-0 md:py-20">


          {/* Section header */}
          <div className="flex flex-col max-w-3xl w-auto h-auto text-center pb-4 md:pb-20">
            <p className="px-4 text-xl text-gray-700 mb-10">Você não precisa mais passar por dores nos pés e nas costas no fim do dia, nosso chinelo Nuvem foi criado para trazer mais conforto pra você sem perder a elegância! </p>
            <img className="pl-8 drop-shadow-xl" src={NuvemFundo1}></img>
            <img className="self-center drop-shadow-xl" src={SemDores} height="250" width="250"></img>
            <ButtonComprar className="px-6 mt-4" text="COMPRAR AGORA COM FRETE GRATIS!"></ButtonComprar>
            {/* <img src={NuvemFundo2}></img> */}
          </div>

        </div>
      </div>
    <img src={ChTorcendo}></img>
    </section>
  );
}

export default YellowSection;
