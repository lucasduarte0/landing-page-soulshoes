import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import NuvemBanner2 from '../images/nuvem-banner-2.png';
// import BannerGigante from '../images/BannerGigante.png';
import Avaliacao from '../utils/Avaliacao';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <img className="bg-fill w-full mx-full" src={NuvemBanner2} width="768" height="432" alt="Hero" />
        <Avaliacao />
        <FeaturesBlocks />
        {/* <img className="bg-fill w-full mx-full" src={BannerGigante} width="768" height="432" alt="Banner Gigante" /> */}
        <Testimonials />
        <Newsletter />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;