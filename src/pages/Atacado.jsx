import React, { useRef, useState } from 'react';
import ReactDOM from "react-dom";
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import BannerGigante2 from '../images/banner-grande-2.png';
import HeaderTop from '../partials/HeaderTop';
import { Helmet } from 'react-helmet';
import "../css/styleIframe.css"


function Atacado() {

  const iframeRef = useRef(null)
  const [scroll, scrollHeight] = useState()

  return (
    <div className="flex flex-col min-h-screen overflow-hidden md:w-full md:justify-center">

      {/*  Site header */}
      {/* <Header /> */}

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeaderTop />
        <Header />

        
        <div className='bg-[#63aae4] pt-8'>
            <div id="hubspot-form" className='mx-4 bg-white pb-0 p-6 rounded-2xl drop-shadow-lg'>
            <h3 className='h4'>Formulário Venda Atacado</h3>
            <div className="iframe-container "><iframe loading="lazy" src="https://lucasduarte0.github.io/hubspot/" height="100%" width="100%"></iframe></div>
              
              

            </div>
            

            {/* <EmbedCartPanda /> */}

            <img className="bg-fill w-full mx-full" src={BannerGigante2} alt="Banner Gigante" />
        </div>
        {/* <div>Teste</div> */}
        
        {/* <Pagamento />
        <Newsletter /> */}

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Atacado;