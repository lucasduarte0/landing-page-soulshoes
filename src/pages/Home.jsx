import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import CompraReembolso from '../partials/CompraReembolso';
import Footer from '../partials/Footer';
import NuvemBanner2 from '../images/nuvem-banner-2.png';
import Pagamento from '../partials/Pagamento';
import BannerGigante from '../partials/BannerGigante';
import YellowSection from '../partials/YellowSection';
import Comparacao from '../partials/Comparacao';
import HeaderTop from '../partials/HeaderTop';

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
        <HeroHome />
        {/* <Comparacao /> */}
        <YellowSection />
        <FeaturesBlocks />
        <img className="bg-fill w-full mx-full md:px-36 bg-[#da59af]" src={NuvemBanner2} width="768" height="432" alt="Hero" />
        <CompraReembolso />
        <FeaturesHome />
        <BannerGigante />
        <Testimonials />
        {/* <Pagamento />
        <Newsletter /> */}

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;