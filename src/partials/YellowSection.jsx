import React from 'react';
import ButtonComprar from '../components/ButtonComprar';
import ChTorcendo from '../images/banner-bg-amarelo-nv2.png'
import Brasil from '../images/brasil_flag.svg'
import SemDores from '../images/sem-dores-chinelo-nuvem.png'
import Gif from '../images/chinelo-macio.gif'

function YellowSection() {
  return (
    <section className="relative md:px-36 bg-[#f8dd4a]">

      <div className="max-w-6xl mx-auto pt-7 drop-shadow-xl w-full mb-10">
          <div className='flex mx-6 p-5 rounded-3xl items-center bg-gradient-to-r from-green-800 to-green-500'>
            <div className='text-white h2 text-2xl grow text-center'>PRODUTO 100% NACIONAL</div>
            <img className="flex-none max-h-24 p-1.5" src={Brasil} />
          </div>
      
        <div className="flex justify-center py-5 md:py-20">

          {/* Section header */}
          <div className="flex flex-col justify-center text-xl max-w-3xl w-auto h-auto text-center px-3 pb-4 md:pb-20">
            <p className="mt-3 mb-4 border-gray-500 text-gray-800 text-middle md:text-4xl leading-tighter tracking-tighter z-10">Você não precisa mais passar por dores nos pés no fim do dia. </p>
            {/* <img className="pl-8 drop-shadow-xl" src={NuvemFundo1}></img> */}
            <p className="mt-3 mb-4 border-gray-500 text-gray-800 text-middle md:text-3xl leading-tighter tracking-tighter z-10">Nosso <strong className='text-fuchsia-500'>Chinelo Nuvem</strong> foi criado para trazer <strong>elegância</strong> sem perder a <strong>conforto</strong>!</p> 
            <img className="self-center" src={SemDores} height="250" width="250"></img>
            {/* <div className='overflow-hidden w-3/4 h-96 flex self-center items-center text-lg rounded-3xl shadow-xl transition duration-300 ease-in-out mb-3'>
              <img className="bg-fill w-full mx-full" src={Gif} alt="Banner Gigante" />              
            </div>     */}
            <h4 className={"uppercase text-2xl font-medium leading-snug text-center mb-3 md:text-4xl text-gray-800"}>Diga adeus as <strong>dores!</strong></h4>
            <ButtonComprar className="px-3 mt-4 -mb-16" text="EU QUERO!" subText="FRETE GRATIS PARA TODO BRASIL"></ButtonComprar>
            
            {/* <img src={NuvemFundo2}></img> */}
          </div>

        </div>
      </div>
    <img src={ChTorcendo}></img>
    </section>
  );
}

export default YellowSection;
