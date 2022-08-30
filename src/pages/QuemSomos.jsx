import React from 'react';
import StarRating from '../components/StarRating';
import Testi from '../components/Testi';
import Logo from '../images/logo.png'
import Footer from '../partials/Footer';

import Header from '../partials/Header';

function QuemSomos() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
      

        <section className="bg-gradient-to-b from-gray-100 to-white">

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h2 mb-5">Quem Somos?</h1>
                <p className=''>Nascida em 2018, somos uma loja online especializados em calçados em geral e operada com paixão por beleza, conforto e praticidade. Oferecemos uma grande variedade de produtos, incluindo chinelos, tênis, botas e sandálias. Nossos clientes podem navegar em nossos produtos e desfrutar de nossos preços exclusivos.</p>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer></Footer>

    </div>
  );
}

export default QuemSomos;