import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonComprar from '../components/ButtonComprar';
import ComparacaoPhoto from '../images/nuvem-comparacao.png'
import ChTorcendo4 from '../images/banner-torcendo-nuvem-4.jpg'
import NuvemFundo1 from '../images/nuvem-fundo-azul.png'
import NuvemFundo2 from '../images/nuvem-fundo-rosa.png'
import SemDores from '../images/sem-dores-chinelo-nuvem.png'

function Comparacao() {
  return (
    <section className="relative md:px-36 bg-white">

      <div className="mx-auto pt-7">
        <div className="py-0 md:py-20">

          {/* Section header */}
          <div className="grid grid-cols-2 content-center w-full h-auto h-auto text-center pb-4 md:pb-20">
            <div className='flex flex-col h-auto w-auto'>
                <img className='max-h-36' src={ComparacaoPhoto}></img>
            </div>
            <div>
                <img className='max-h-36' src={ComparacaoPhoto}></img>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}

export default Comparacao;
