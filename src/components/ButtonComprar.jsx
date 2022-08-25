import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Pix from '../images/pix.svg';

function ButtonComprar(props) {

  return (
    <section href="" className={'z-0 flex flex-col justify-center ' + props.className}>  
      <div className="bg-green-500 hover:bg-green-300 text-center text-white font-semibold rounded-2xl drop-shadow-lg animate-blow">
        <a href="https://soulshoes.mercadoshops.com.br/MLB-2750446878-chinelo-feminino-nuvem-ortopedica-eva-super-macio-off-_JM" target="_blank" rel="noreferrer">        
          <Button variant="primary" size="xl">
            <div className='flex flex-col tracking-wider'>
              <h2 className='text-2xl font-bold'>{props.text}</h2>
              <p className='text-sm mt-2 font-extralight text-green-100'>{props.subText}</p>
            </div>
          </Button>
        </a>
      </div>    
      <div className='w-3/4 self-center'>
        <div id="credit-cards" className="flex space-x-1 justify-center mt-3 max-w-1">
            <img className="h-6" loading="lazy" src="https://cdn.shopify.com/s/files/1/0648/2021/6052/t/2/assets/amex.svg" />
            <img className="h-6" loading="lazy" src="https://cdn.shopify.com/s/files/1/0648/2021/6052/t/2/assets/boleto.svg" />
            <img className="h-6" loading="lazy" src="https://cdn.shopify.com/s/files/1/0648/2021/6052/t/2/assets/mastercard.svg" />
            <img className="h-6" loading="lazy" src="https://cdn.shopify.com/s/files/1/0648/2021/6052/t/2/assets/visa.svg" />
            <img className="h-6" loading="lazy" src="https://cdn.shopify.com/s/files/1/0648/2021/6052/t/2/assets/elo.svg" />
            <img className="h-6 bg-white rounded p-1.5" src={Pix} />
        </div>

      </div>
   

    </section>  
  );
}

function SubBox(props) {
  return (
    <section className='z-50'>    
      <div className='relative bg-white text-green-500 flex w-full justify-center border-solid border-2 border-gray-300 rounded-2xl shadow-2xl mt-3'>
        <svg className='self-center m-3 fill-green-500' width="28px" height="28px" viewBox="0 -64 640 640" xmlns="http://www.w3.org/2000/svg"><path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"/></svg>
        <h4 className="w-auto align-center text-3xl font-semibold text-start m-3">Frete Grátis!</h4>
      </div>
    </section>  
  );
}



export default ButtonComprar;