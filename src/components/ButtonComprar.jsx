<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import CardList from './CardList';
=======
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import CardList from "./CardList";
import TagManager from "react-gtm-module";
>>>>>>> 172cf599b543bdc0b77366f153adb0b3867bfb39

// import "../css/additional-styles/autoScroll.css"

function ButtonComprar(props) {
  // const [y] = useState([]);

  // useEffect(() => {
  //   // Atualiza o título do documento usando a API do browser
  //   console.log("teste")
  // });
<<<<<<< HEAD
  
  const goToTop = () => {
      let y = document.getElementById("cartpandaContainer").getBoundingClientRect().top
      let scrollY = window.scrollY 
      console.log(y)
      window.scrollTo({
          top: y + scrollY - 30,
          behavior: "smooth",
      });
  };

  return (
    <section href="" id='bt-compra' className={'z-0 flex flex-col justify-center ' + props.className}>  
      


      <div className="bg-green-500 hover:bg-green-300 text-center text-white font-semibold rounded-2xl drop-shadow-lg animate-blow">
       
          <Button onClick={goToTop} variant="primary" size="xl">
            <div className='flex flex-col tracking-wider'>
              <h2 className='text-2xl font-bold'>{props.text}</h2>
              <p className='text-sm mt-2 font-extralight text-green-100'>{props.subText}</p>
            </div>
          </Button>

      </div>   
      
      {/* <div className="bg-green-500 hover:bg-green-300 text-center text-white font-semibold rounded-2xl drop-shadow-lg animate-blow">
        <a href="https://soulshoes.mercadoshops.com.br/MLB-2750446878-chinelo-feminino-nuvem-ortopedica-eva-super-macio-off-_JM" target="_blank" rel="noreferrer">        
          <Button variant="primary" size="xl">
            <div className='flex flex-col tracking-wider'>
              <h2 className='text-2xl font-bold'>{props.text}</h2>
              <p className='text-sm mt-2 font-extralight text-green-100'>{props.subText}</p>
            </div>
          </Button>
        </a>
      </div>     */}
      
      <CardList />   

    </section>  
  );
}

function SubBox(props) {
  return (
    <section className='z-50'>    
      <div className='relative bg-white text-green-500 flex w-full justify-center border-solid border-2 border-gray-300 rounded-2xl shadow-2xl mt-3'>
        <svg className='self-center m-3 fill-green-500' width="28px" height="28px" viewBox="0 -64 640 640" xmlns="http://www.w3.org/2000/svg"><path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"/></svg>
        <h4 className="w-auto align-center text-3xl font-semibold text-start m-3">Frete Grátis!</h4>
=======

  const goToTop = () => {
    let y = document
      .getElementById("cartpandaContainer")
      .getBoundingClientRect().top;
    let scrollY = window.scrollY;
    console.log(y);
    window.scrollTo({
      top: y + scrollY - 30,
      behavior: "smooth",
    });

    // window.dataLayer.push({
    //   event: 'bt.compra',
    //   scrollY: scrollY,
    //   label: 'bt.compra.landing'
    // });
  };

  return (
    <section
      href=''
      className={"z-0 flex flex-col justify-center " + props.className}
    >
      <div className='bg-green-500 hover:bg-green-300 text-center text-white font-semibold rounded-2xl drop-shadow-lg animate-blow'>
        <Button
          id='bt-compra'
          className='px-2'
          onClick={goToTop}
          variant='primary'
          size='xl'
        >
          <div className='flex uppercase flex-col tracking-wider'>
            <h2 className='font-semibold'>{props.text}</h2>
            <p className='text-sm mt-2 font-extralight text-green-100'>
              {props.subText}
            </p>
          </div>
        </Button>
      </div>

      <div className='flex justify-center pt-5'>
        <CardList />
>>>>>>> 172cf599b543bdc0b77366f153adb0b3867bfb39
      </div>
    </section>
  );
}

function SubBox(props) {
  return (
    <section className='z-50'>
      <div className='relative bg-white text-green-500 flex w-full justify-center border-solid border-2 border-gray-300 rounded-2xl shadow-2xl mt-3'>
        <svg
          className='self-center m-3 fill-green-500'
          width='28px'
          height='28px'
          viewBox='0 -64 640 640'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z' />
        </svg>
        <h4 className='w-auto align-center text-3xl font-semibold text-start m-3'>
          Frete Grátis!
        </h4>
      </div>
    </section>
  );
}



export default ButtonComprar;