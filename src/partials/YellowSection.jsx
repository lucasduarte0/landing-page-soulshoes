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
          <div className="flex flex-col  text-xl max-w-3xl w-auto h-auto text-center px-3 pb-4 md:pb-20">
            <p className="mt-3 mb-4 border-gray-500 text-gray-800 text-middle md:text-6xl leading-tighter tracking-tighter drop-shadow-md hover:drop-shadow-xl z-10">Você não precisa mais passar por dores nos pés no fim do dia. </p>
            {/* <img className="pl-8 drop-shadow-xl" src={NuvemFundo1}></img> */}
            <img className="self-center drop-shadow-xl" src={SemDores} height="250" width="250"></img>
            <p className="mt-3 mb-4 border-gray-500 text-gray-800 text-middle md:text-6xl leading-tighter tracking-tighter drop-shadow-md hover:drop-shadow-xl z-10">Nosso <strong className='text-fuchsia-500'>Chinelo Nuvem</strong> foi criado para trazer <strong>elegância</strong> sem perder a <strong>conforto</strong>!</p> 
            <h4 className={"uppercase text-2xl font-medium leading-snug text-center mb-3 text-gray-800"}>Diga adeus as <strong>dores</strong> agora mesmo!</h4>
            <ButtonComprar className="px-3 mt-4" text="EU QUERO ALIVIAR MINHAS DORES!" subText="FRETE GRATIS PARA TODO BRASIL"></ButtonComprar>
            
            {/* <img src={NuvemFundo2}></img> */}
          </div>

        </div>
      </div>
    <img src={ChTorcendo}></img>
    </section>
  );
}

export default YellowSection;
