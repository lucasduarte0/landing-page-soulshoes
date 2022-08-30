import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import BannerGigante2 from '../images/banner-grande-2.png';
import HeaderTop from '../partials/HeaderTop';
import EmbedCartPanda from '../components/EmbedCartPanda';

function Home() {
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
            <EmbedCartPanda />

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

export default Home;